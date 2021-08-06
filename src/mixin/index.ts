import { PropType, ref } from 'vue'
import { useStore } from 'vuex'
import {
  useRoute,
  RouteRecordName,
  RouteLocationNormalizedLoaded
} from 'vue-router'
import { ConsoleComponent } from '@/interface'

export const useProps = (): any => {
  return {
    index: {
      type: Number as PropType<number>
    },
    varName: {
      type: String as PropType<string>,
      default: ''
    },
    varValue: {
      type: String as PropType<string>,
      default: ''
    }
  }
}

export const currentRoute = (): RouteLocationNormalizedLoaded => {
  const route = useRoute()
  return route
}

export const useConsoleComponent = (componentProps: any): ConsoleComponent => {
  const store = useStore()
  const model = ref(componentProps.varValue)
  const handler = async (
    value: string,
    id: RouteRecordName | null | undefined
  ) => {
    const { index, varName } = componentProps
    const payload = {
      index,
      varName,
      varValue: value
    }
    await store.dispatch('setComponentConsoleStyle', payload)
    await store.dispatch('getComponentConsoleStyle', id)
  }
  return {
    model,
    handler
  }
}
