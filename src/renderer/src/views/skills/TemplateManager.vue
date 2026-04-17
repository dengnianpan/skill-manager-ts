<template>
    <div class="page">
      <div class="page-header">
        <h2>📝 模板管理</h2>
        <n-button type="primary" @click="createTemplate">
          + 新建模板
        </n-button>
      </div>
      
      <n-empty description="暂无模板，点击上方按钮创建">
        <template #extra>
          <n-button @click="createTemplate">创建模板</n-button>
        </template>
      </n-empty>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NButton, NEmpty, useMessage } from 'naive-ui'
  
  const message = useMessage()
  
  const createTemplate = () => {
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
  }
  
  .page-header h2 {
    margin: 0;
    font-size: 20px;
  }
  </style>