<template>
  <div class="main-layout">
    <!-- 侧边栏组件 -->
    <Sidebar />
    
    <!-- 主内容区 -->
    <main class="content">
      <div class="content-header">
        <div class="breadcrumb">
          <span>{{ currentBreadcrumb }}</span>
        </div>
      </div>
      <div class="content-body">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '../components/layout/Sidebar.vue'
import { menuConfig } from '../stores/menu'

const route = useRoute()

// 当前面包屑
const currentBreadcrumb = computed(() => {
  for (const menu of menuConfig) {
    for (const sub of menu.children) {
      if (sub.path === route.path) {
        return `${menu.title} / ${sub.title}`
      }
    }
  }
  return '首页'
})
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f5f7fa;
}

.content-header {
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.breadcrumb {
  font-size: 14px;
  color: #666;
}

.content-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

.content-body::-webkit-scrollbar {
  width: 6px;
}

.content-body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.content-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.content-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>