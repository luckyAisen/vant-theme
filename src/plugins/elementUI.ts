import { ElButton, ElSelect } from 'element-plus'
import { createApp } from 'vue'

export default function loadElementUIComponent(
  app: ReturnType<typeof createApp>
) {
  app.component(ElButton.name, ElButton)
  app.component(ElSelect.name, ElSelect)
}
