<template>
    <div class="page">
      <div class="page-header">
        <h2>⚡ 批量操作</h2>
        <n-tag type="info">支持多项目批量注入/移除技能</n-tag>
      </div>
      
      <n-empty description="批量操作功能开发中">
        <template #extra>
          <n-button disabled>批量注入</n-button>
          <n-button disabled style="margin-left: 12px">批量移除</n-button>
        </template>
      </n-empty>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NButton, NEmpty, NTag } from 'naive-ui'
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