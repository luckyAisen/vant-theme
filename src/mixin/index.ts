import { PropType } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'

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

export const useRouteInfo = (): RouteLocationNormalizedLoaded => {
  const route = useRoute()
  return route
}
