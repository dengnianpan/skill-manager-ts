<template>
    <div class="page">
      <div class="page-header">
        <h2>⚙️ 全局设置</h2>
      </div>
      
      <n-card title="基本设置" class="settings-card">
        <n-empty description="全局设置功能开发中" size="small" />
      </n-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NCard, NEmpty } from 'naive-ui'
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
  
  .settings-card {
    max-width: 600px;
  }
  </style>