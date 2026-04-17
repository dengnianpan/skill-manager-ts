<template>
    <aside class="sidebar">
      <!-- Logo 区域 -->
      <div class="logo">
        <div class="logo-icon">🎯</div>
        <div class="logo-text">Skill Manager</div>
      </div>
      
      <!-- 菜单区域 -->
      <nav class="nav">
        <SidebarMenuItem
          v-for="menu in menus"
          :key="menu.path"
          :item="menu"
        />
      </nav>
      
      <!-- 底部区域 -->
      <div class="footer">
        <div class="user-section">
          <template v-if="isLoggedIn">
            <div class="user-card">
              <div class="user-avatar">
                <span>{{ userInitial }}</span>
              </div>
              <div class="user-info">
                <div class="user-name">{{ userName }}</div>
                <div class="user-email">{{ userEmail }}</div>
              </div>
              <button class="logout-btn" @click="handleLogout" title="退出登录">
                <span>🚪</span>
              </button>
            </div>
          </template>
          <template v-else>
            <div class="auth-card">
              <div class="auth-title">
                <span class="title-icon">👋</span>
                <span>欢迎使用</span>
              </div>
              <div class="auth-buttons">
                <router-link to="/login" class="auth-btn login-btn">
                  <span>登录</span>
                  <span class="btn-arrow">→</span>
                </router-link>
                <router-link to="/register" class="auth-btn register-btn">
                  <span>注册</span>
                  <span class="btn-arrow">→</span>
                </router-link>
              </div>
              <div class="guest-mode">
                <span class="guest-icon">👤</span>
                <span>游客模式</span>
              </div>
            </div>
          </template>
        </div>
        
        <div class="status-bar">
          <div class="status-item">
            <span class="status-dot"></span>
            <span class="status-text">系统正常</span>
          </div>
          <div class="status-item">
            <span class="status-icon">📦</span>
            <span class="status-text">v1.0.0</span>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useMessage } from 'naive-ui'
  import SidebarMenuItem from './SidebarMenuItem.vue'
  import { menuConfig } from '../../stores/menu'
  
  const router = useRouter()
  const message = useMessage()
  
  const isLoggedIn = ref(false)
  const userName = ref('')
  const userEmail = ref('')
  
  const userInitial = computed(() => {
    return userName.value ? userName.value.charAt(0).toUpperCase() : 'U'
  })
  
  const menus = menuConfig
  
  const handleLogout = () => {
    isLoggedIn.value = false
    userName.value = ''
    userEmail.value = ''
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    message.success('已退出登录')
    router.push('/login')
  }
  
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token')
    if (token) {
      isLoggedIn.value = true
      userName.value = localStorage.getItem('userName') || '用户'
      userEmail.value = localStorage.getItem('userEmail') || 'user@example.com'
    }
  }
  
  onMounted(() => {
    checkLoginStatus()
  })
  </script>
  
  <style scoped>
/* ========== 侧边栏整体宽度 ========== */
.sidebar {
  width: 230px;  /* 稍微加宽一点 */
  background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%);
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* ========== Logo 区域 - 收窄高度 ========== */
.logo {
  padding: 16px 20px;  /* 减少上下内边距 */
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-icon {
  font-size: 24px;  /* 图标稍微缩小 */
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ========== 导航区域 ========== */
.nav {
  flex: 1;
  padding: 16px 12px;  /* 减少内边距 */
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav::-webkit-scrollbar {
  display: none;
}

/* 菜单组 */
.menu-group {
  margin-bottom: 2px;
}

/* 一级菜单 - 无图标版本 */
.menu-title {
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #e0e0e0;
  font-weight: 500;
  font-size: 13px;
}

/* 隐藏一级菜单图标 */
.menu-icon {
  display: none;
}

.menu-label {
  flex: 1;
  font-size: 13px;
  padding-left: 4px;
}

.menu-arrow {
  font-size: 9px;
  opacity: 0.6;
}

/* 二级菜单容器 - 距离左侧更近 */
.submenu {
  margin-left: 20px;  /* 减少左边距 */
  padding-left: 0;
  border-left: none;
}

/* 二级菜单链接 */
.menu-link {
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  text-decoration: none;
  color: #c0c0c0;
  font-size: 12px;
  transition: all 0.2s ease;
}

/* 二级菜单图标也隐藏 */
.menu-link .menu-icon {
  display: none;
}

.menu-link .menu-label {
  padding-left: 4px;
}

/* 激活状态 */
.menu-link.active {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.25), rgba(118, 75, 162, 0.25));
  color: #ffffff;
  border-left: 2px solid #667eea;
}

/* ========== 底部区域 ========== */
.footer {
  padding: 12px 16px;  /* 减少内边距 */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* 用户卡片 - 确保显示 */
.user-section {
  margin-bottom: 12px;
}

.auth-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.auth-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 12px;
}

.title-icon {
  font-size: 14px;
}

.auth-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.auth-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 0;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.login-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.register-btn {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-arrow {
  font-size: 10px;
  transition: transform 0.2s ease;
}

.guest-mode {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
}

/* 已登录用户卡片 */
.user-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.user-avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
  min-width: 0;
}

.user-name {
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2px;
}

.user-email {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.logout-btn {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

/* ========== 状态栏 - 更小更紧凑 ========== */
.status-bar {
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  margin-top: 4px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.5);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4caf50;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.status-icon {
  font-size: 10px;
}

.status-text {
  font-size: 9px;
}

.version {
  font-size: 8px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
  </style>