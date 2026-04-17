<template>
    <div class="page">
      <div class="page-header">
        <h2>📋 项目管理</h2>
        <div class="header-actions">
          <n-input 
            v-model:value="workspacePath" 
            placeholder="输入工作区路径，如 ~/projects"
            style="width: 300px"
          />
          <n-button type="primary" @click="scanProjects">
            🔍 扫描项目
          </n-button>
        </div>
      </div>
      
      <n-empty description="暂无项目，请先扫描工作区">
        <template #extra>
          <n-button @click="scanProjects">扫描项目</n-button>
        </template>
      </n-empty>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { NButton, NInput, NEmpty, useMessage } from 'naive-ui'
  
  const message = useMessage()
  const workspacePath = ref('')
  
  const scanProjects = () => {
    if (!workspacePath.value) {
      message.warning('请输入工作区路径')
      return
    }
    message.info('功能开发中，敬请期待')
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
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .page-header h2 {
    margin: 0;
    font-size: 20px;
  }
  
  .header-actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  </style>