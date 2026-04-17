<template>
    <div class="menu-item-wrapper">
      <!-- 有子菜单：一级菜单 -->
      <div v-if="hasChildren" class="menu-group">
        <div 
          class="menu-title"
          :class="{ expanded: isExpanded }"
          @click="handleToggle"
        >
          <span class="menu-icon">{{ item.icon }}</span>
          <span class="menu-label">{{ item.title }}</span>
          <span class="menu-arrow" :class="{ rotated: isExpanded }">▼</span>
        </div>
        
        <transition name="slide">
          <div v-show="isExpanded" class="submenu">
            <SidebarMenuItem
              v-for="child in item.children"
              :key="child.path"
              :item="child"
            />
          </div>
        </transition>
      </div>
      
      <!-- 无子菜单：二级菜单 -->
      <router-link
        v-else
        :to="item.path"
        class="menu-link"
        :class="{ active: isActive }"
      >
        <span class="menu-icon">{{ item.icon }}</span>
        <span class="menu-label">{{ item.title }}</span>
      </router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useMenuStore } from '../../stores/menu'
  
  interface Props {
    item: {
      path: string
      title: string
      icon: string
      children?: any[]
    }
  }
  
  const props = defineProps<Props>()
  
  const route = useRoute()
  const menuStore = useMenuStore()
  
  const hasChildren = computed(() => {
    return props.item.children && props.item.children.length > 0
  })
  
  const isExpanded = computed(() => {
    if (!hasChildren.value) return false
    return menuStore.isExpanded(props.item.path)
  })
  
  const isActive = computed(() => {
    if (hasChildren.value) {
      return props.item.children?.some(
        (child: any) => route.path === child.path
      ) || false
    }
    return route.path === props.item.path
  })
  
  const handleToggle = () => {
    if (hasChildren.value) {
      menuStore.toggleMenu(props.item.path)
    }
  }
  </script>
  
  <style scoped>
  .menu-item-wrapper {
    width: 100%;
  }
  
  .menu-group {
    margin-bottom: 4px;
  }
  
  .menu-title {
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #e0e0e0;  /* 亮灰色，清晰可见 */
    font-weight: 500;
    font-size: 14px;
  }
  
  .menu-title:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
  
  .menu-title.expanded {
    color: #ffffff;
  }
  
  .menu-icon {
    font-size: 18px;
    width: 24px;
  }
  
  .menu-label {
    flex: 1;
    font-size: 14px;
  }
  
  .menu-arrow {
    font-size: 10px;
    transition: transform 0.2s ease;
    opacity: 0.7;
  }
  
  .menu-arrow.rotated {
    transform: rotate(-180deg);
  }
  
  /* 二级菜单容器 - 去掉左边竖线，往左移 */
.submenu {
  margin-left: 15px;  /* 更小的左边距 */
  padding-left: 0;
  border-left: none;  /* 去掉竖线 */
}

/* 二级菜单链接 */
.menu-link {
  padding: 6px 8px;  /* 减少左内边距 */
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  text-decoration: none;
  color: #c0c0c0;
  font-size: 12px;
  transition: all 0.2s ease;
}

/* 二级菜单文字 */
.menu-link .menu-label {
  padding-left: 0px;  /* 去掉额外左内边距 */
}
  
  .menu-link:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }
  
  .menu-link.active {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.25), rgba(118, 75, 162, 0.25));
    color: #ffffff;
    border-left: 2px solid #667eea;
  }
  
  /* 动画 */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.2s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
  </style>