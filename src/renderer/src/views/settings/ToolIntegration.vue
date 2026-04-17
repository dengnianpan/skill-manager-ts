<template>
  <div class="page">
    <div class="page-header">
      <h2>工具集成</h2>
      <n-tag type="info">配置 AI 工具路径</n-tag>
    </div>

    <n-card title="支持的工具" class="tools-card">
      <n-empty description="工具集成配置开发中" size="small" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NEmpty, NTag } from 'naive-ui'
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

.tools-card {
  max-width: 600px;
}
</style>
