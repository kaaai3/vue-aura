import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("InputText", defineAsyncComponent(() => import("C:/Users/kaiva/Documents/GitHub/vue-aura/docs/.vuepress/src/InputText.vue")))
  },
}
