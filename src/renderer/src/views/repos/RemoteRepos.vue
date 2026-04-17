<!-- src/renderer/src/views/repos/RemoteRepos.vue -->
<template>
    <div class="page">
      <div class="page-header">
        <h2>🌐 远程仓库管理</h2>
        <n-button type="primary">+ 添加仓库</n-button>
      </div>
      <n-empty description="暂无远程仓库" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { NButton, NEmpty } from 'naive-ui'
  </script>
  
  <style scoped>
  .page { padding: 24px; }
  .page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
  .page-header h2 { margin: 0; }
  </style>