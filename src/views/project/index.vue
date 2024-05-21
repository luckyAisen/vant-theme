<template>
  <div class="flex flex-col w-screen h-screen project">
    <VHeader />

    <VSkeleton v-if="skeletonState" :text="skeletonText" />

    <template v-else>
      <div v-if="allProject.length" class="w-full mx-auto max-w-7xl">
        <div class="p-5 flex flex-wrap min-w-[--vt-page-min-width]">
          <div class="w-1/4 min-h-[200px] h-[200px] pl-3 pr-3 mb-5 cursor-pointer project-card">
            <div
              class="h-full flex flex-col items-center justify-center border border-solid border-[--vt-color-border-1] rounded-[--vt-border-radius-1] p-[--vt-size-4] project-add-container"
              @click="onAdd"
            >
              <n-icon size="40" color="var(--vt-color-primary-6)" class="project-add-icon">
                <AddCircleOutline />
              </n-icon>

              <div class="project-add-text">{{ $t('create_project') }}</div>
            </div>
          </div>

          <n-upload
            accept="application/json"
            :show-file-list="false"
            @change="onImport"
            :disabled="importLoading"
            class="!w-1/4 min-h-[200px] h-[200px] pl-3 pr-3 mb-5 card-upload"
          >
            <div class="w-full h-full cursor-pointer project-card">
              <div
                class="h-full flex flex-col items-center justify-center border border-solid border-[--vt-color-border-1] rounded-[--vt-border-radius-1] p-[--vt-size-4] project-add-container"
              >
                <n-icon size="40" color="var(--vt-color-primary-6)" class="project-add-icon">
                  <CloudUploadOutline />
                </n-icon>

                <div class="project-add-text">{{ $t('import_project') }}</div>
              </div>
            </div>
          </n-upload>

          <ProjectCard
            v-for="project in allProject"
            :key="project.id"
            :project="project"
            @see="onSee"
            @edit="onEdit"
            @copy="onCopy"
            @delete="onDelete"
            @export="onExport"
          />
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center flex-1">
        <img
          class="lg:w-[500px] xl:w-[700px] 2xl:w-[800px]"
          src="../../assets/img/design.png"
          draggable="false"
        />
        <h1 class="mb-10 text-3xl font-bold">{{ $t('welcome_to_vant_theme') }}</h1>
        <div class="flex flex-col">
          <n-button tertiary type="primary" class="!w-[180px] !mb-10" @click="onAdd">
            {{ $t('create_project') }}
          </n-button>
          <n-upload
            accept="application/json"
            :show-file-list="false"
            @change="onImport"
            :disabled="importLoading"
            class="text-center !mb-3"
          >
            <n-button text>
              {{ $t('import_project') }}
            </n-button>
          </n-upload>
        </div>
      </div>
    </template>

    <ProjectModal
      :show="modal.show"
      :type="modal.type"
      :model="modal.model"
      @cancel="onModalCancel"
      @confirm="onModalConfirm"
    />
  </div>
</template>

<script setup lang="ts">
import { useMessage, useDialog, NButton } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { AddCircleOutline, CloudUploadOutline } from '@vicons/ionicons5';
import { WorkspaceEnum } from '@/enums';
import VHeader from '@/components/Header/index.vue';
import VSkeleton from '@/components/Skeleton/index.vue';
import ProjectCard from './components/Card.vue';
import ProjectModal from './components/Modal.vue';
import { useProjectStore } from '@/stores/modules/project';
import { DEFAULT_MODEL } from './components/util';

import type { VNodeChild } from 'vue';
import type { Project, ProjectImportConfig } from '@/types';
import type { UploadFileInfo } from 'naive-ui';
import type { ProjectModalProps } from './components/Modal.vue';

defineOptions({
  name: 'Project'
});

const router = useRouter();

const message = useMessage();

const dialog = useDialog();

const { t } = useI18n();

const projectStore = useProjectStore();

const skeletonState = ref(false);

const skeletonText: Ref<string | VNodeChild> = ref(t('loading_vant_css'));

const allProject = computed(() => projectStore.allProject);

const importLoading = ref(false);

const modal = reactive<ProjectModalProps>({
  show: false,
  type: 'add',
  model: { ...DEFAULT_MODEL }
});

const onAdd = () => {
  modal.show = true;
  modal.type = 'add';
  modal.model = { ...DEFAULT_MODEL };
};

const onSee = (project: Project) => {
  router.push({
    name: 'workspace',
    params: {
      id: project.id,
      version: project.version,
      component: WorkspaceEnum.WORKSPACE_BASIC
    }
  });
};

const onEdit = (project: Project) => {
  modal.show = true;
  modal.type = 'edit';
  modal.model = project;
};

const onCopy = (project: Project) => {
  modal.show = true;
  modal.type = 'copy';
  modal.model = project;
};

const onDelete = (project: Project) => {
  dialog.error({
    title: t('delete_tips'),
    showIcon: false,
    content: t('confirm_delete'),
    positiveText: t('confirm_text'),
    negativeText: t('cancel_text'),
    maskClosable: false,
    onPositiveClick: () => {
      projectStore.deleteProject(project);
      message.success(t('success_delete'));
    },
    onNegativeClick: () => {}
  });
};

const onExport = (project: Project) => {
  projectStore
    .exportProject(project)
    .then(() => {
      message.success(t('success_export'));
    })
    .catch(() => {})
    .finally(() => {});
};

const onImport = (options: { file: UploadFileInfo }) => {
  importLoading.value = true;

  const { file } = options;

  const reader = new FileReader();

  reader.onload = function (event: ProgressEvent<FileReader>) {
    try {
      const project: ProjectImportConfig = JSON.parse(event.target?.result as string);

      const { id, name, description, version, createTime, updateTime, cssVar } = project;

      if (!id || !name || !description || !version || !createTime || !updateTime || !cssVar) {
        message.error(t('faild_import'));
        return;
      }

      projectStore.importProject(
        { id, name, description, version, createTime, updateTime },
        cssVar
      );

      message.success(t('success_import'));
    } catch (err) {
      message.error(t('faild_import'));
      return Promise.reject(err);
    } finally {
      importLoading.value = false;
    }
  };
  reader.readAsText(file.file as File, 'UTF-8');
};

const onModalCancel = () => {
  modal.show = false;
};

const onModalConfirm = (project: Project) => {
  if (modal.type === 'add') {
    projectStore.addProject(project);
    message.success(t('success_create'));
  }
  if (modal.type === 'edit') {
    projectStore.updateProject(project);
    message.success(t('success_edit'));
  }
  if (modal.type === 'copy') {
    projectStore.copyProject(project);
    message.success(t('success_copy'));
  }
  onModalCancel();
};

const init = async () => {
  try {
    skeletonState.value = true;
    await projectStore.initBaseVar();
    skeletonState.value = false;
  } catch {
    // const vnode = h(
    //   'div',
    //   {
    //     class: 'flex'
    //   },
    //   [
    //     h('span', {}, t('load_vant_css_failed') + t('period') + t('chinese_user_try')),
    //     h(
    //       NButton,
    //       {
    //         text: true,
    //         type: 'primary',
    //         tag: 'a',
    //         target: '_blank',
    //         href: 'https://aisen60.gitee.io/vant-theme'
    //       },
    //       h(
    //         'span',
    //         {
    //           style: {
    //             paddingLeft: 'var(--vt-size-1)'
    //           }
    //         },
    //         'https://aisen60.gitee.io/vant-theme'
    //       )
    //     )
    //   ]
    // );

    const vnode = h(
      'div',
      {
        class: 'flex'
      },
      [h('span', {}, t('load_vant_css_failed') + t('period'))]
    );

    skeletonText.value = vnode;

    for (let i = 0; i < 3; i++) {
      message.create(() => vnode, {
        type: 'error',
        keepAliveOnHover: true,
        duration: 0,
        closable: true
      });
    }
  }
};

init();
</script>

<style lang="scss" scoped>
.project {
  .project-add-container {
    transition: box-shadow 0.2s cubic-bezier(0, 0, 1, 1);

    .project-add-icon {
      transition: all 0.3s ease;
    }

    .project-add-text {
      font-size: var(--vt-font-size-4);
      padding-top: var(--vt-size-5);
      transition: all 0.2s ease;
    }

    &:hover {
      box-shadow: 4px 4px 10px var(--vt-color-fill-3);

      .project-add-icon {
        transform: scale(1.5);
      }

      .project-add-text {
        font-size: var(--vt-font-size-5);
        padding-top: var(--vt-size-2);
      }
    }
  }

  .card-upload {
    :deep(.n-upload-trigger) {
      width: 100%;
      height: 100%;
    }
  }

  :deep(.project-card) {
    &:nth-child(3n) {
      margin-right: 0px;
    }
  }
}
</style>
