<template>
    <div class="page">
      <div class="page-header">
        <h2>🎯 技能浏览</h2>
        <div class="filters">
          <n-input 
            v-model:value="searchText" 
            placeholder="搜索技能..."
            clearable
            style="width: 240px"
          >
            <template #prefix>
              <span>🔍</span>
            </template>
          </n-input>
          <n-select 
            v-model:value="filterRepo" 
            :options="repoOptions" 
            placeholder="所有仓库"
            clearable
            style="width: 150px"
          />
        </div>
      </div>
      
      <n-empty description="暂无技能，请先添加仓库并同步">
        <template #extra>
          <n-button @click="goToRepos">前往添加仓库</n-button>
        </template>
      </n-empty>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { NButton, NEmpty, NInput, NSelect, useMessage } from 'naive-ui'
  
  const router = useRouter()
  const message = useMessage()
  const searchText = ref('')
  const filterRepo = ref(null)
  
  const repoOptions = [
    { label: '所有仓库', value: '' },
    { label: '通用技能库', value: 'common' },
    { label: '前端技能库', value: 'frontend' },
  ]
  
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
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .page-header h2 {
    margin: 0;
    font-size: 20px;
  }
  
  .filters {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  </style>