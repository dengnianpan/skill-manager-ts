<template>
    <div class="page">
      <div class="page-header">
        <h2>🕸️ 依赖分析</h2>
        <div class="actions">
          <n-button size="small" @click="detectCycles">
            🔍 检测循环依赖
          </n-button>
          <n-button size="small" @click="exportGraph">
            📥 导出图谱
          </n-button>
        </div>
      </div>
      
      <n-empty description="暂无依赖数据，请先添加技能">
        <template #extra>
          <n-button @click="goToRepos">前往添加仓库</n-button>
        </template>
      </n-empty>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { NButton, NEmpty, useMessage } from 'naive-ui'
  
  const router = useRouter()
  const message = useMessage()
  
  const detectCycles = () => {
    message.info('功能开发中，敬请期待')
  }
  
  const exportGraph = () => {
    message.info('功能开发中，敬请期待')
  }
  
  const goToRepos = () => {
    router.push('/repos/remote')
    message.info('请先在仓库管理中添加仓库')
  }
  </script>
  
  <style scoped>
  .page {
    padding: 24px;
    height: 100%;
  }
  
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .page-header h2 {
    margin: 0;
    font-size: 20px;
  }
  
  .actions {
    display: flex;
    gap: 12px;
  }
  </style>