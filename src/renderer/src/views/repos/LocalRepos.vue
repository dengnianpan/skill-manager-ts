<template>
    <div class="page">
      <div class="page-header">
        <h2>📁 本地仓库管理</h2>
        <n-button type="primary" @click="addLocalRepo">
          + 添加本地目录
        </n-button>
      </div>
      
      <n-empty description="暂无本地仓库，点击上方按钮添加">
        <template #extra>
          <n-button @click="addLocalRepo">添加本地仓库</n-button>
        </template>
      </n-empty>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NButton, NEmpty, useMessage } from 'naive-ui'
  
  const message = useMessage()
  
  const addLocalRepo = () => {
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