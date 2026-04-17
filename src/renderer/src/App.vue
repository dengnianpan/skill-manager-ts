<template>
  <n-config-provider>
    <n-message-provider>
      <n-dialog-provider>
        <component :is="layoutComponent">
          <router-view />
        </component>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

const route = useRoute()

// 布局映射表（方便扩展）
// 注意：route.meta.layout 在 vue-router 默认类型里是 unknown，
// 需要先用类型守卫收窄为 string，才能安全作为索引键使用。
const layoutMap = {
  default: MainLayout,
  auth: AuthLayout,
} satisfies Record<string, Component>

const layoutComponent = computed<Component>(() => {
  const metaLayout = route.meta.layout
  const layoutName = typeof metaLayout === 'string' ? metaLayout : 'default'
  return layoutMap[layoutName] ?? MainLayout
})
</script>