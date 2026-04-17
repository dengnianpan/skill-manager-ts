<template>
  <div class="login-container">
    <div class="characters-area">
      <div class="characters-grid">
        <Character
          v-for="char in characters"
          :key="char.id"
          :color="char.color"
          :position="char.position"
          :is-typing-email="isTypingEmail"
          :password-length="form.password.length"
          :show-password="showPassword"
        />
      </div>
    </div>

    <div class="form-area">
      <div class="form-card">
        <div class="header">
          <div class="logo">
            <span class="logo-icon">登录</span>
            <span class="logo-text">Skill Manager</span>
          </div>
          <h2>欢迎回来</h2>
          <p>请登录你的账号</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label>邮箱 / 用户名</label>
            <input
              v-model="form.username"
              type="text"
              placeholder="请输入邮箱或用户名"
              @focus="isTypingEmail = true"
              @blur="isTypingEmail = false"
            />
          </div>

          <div class="form-group">
            <label>密码</label>
            <div class="password-input">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="请输入密码"
              />
              <button
                type="button"
                class="toggle-password"
                @click="togglePasswordVisibility"
              >
                {{ showPassword ? '隐藏' : '显示' }}
              </button>
            </div>
          </div>

          <div class="form-options">
            <label class="checkbox">
              <input v-model="rememberMe" type="checkbox" />
              <span>记住我</span>
            </label>
            <router-link to="/forgot-password" class="forgot-link">
              忘记密码？
            </router-link>
          </div>

          <InteractiveButton @click="handleLogin">
            登录
          </InteractiveButton>

          <div class="register-link">
            还没有账号？
            <router-link to="/register">立即注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import Character from './components/Character.vue'
import InteractiveButton from './components/InteractiveButton.vue'

const message = useMessage()

const form = ref({
  username: '',
  password: ''
})

const rememberMe = ref(false)
const showPassword = ref(false)
const isTypingEmail = ref(false)

const characters = [
  { id: 1, color: '#FF6B6B', position: 'top-left' },
  { id: 2, color: '#4ECDC4', position: 'top-right' },
  { id: 3, color: '#FFE66D', position: 'bottom-left' },
  { id: 4, color: '#A8E6CF', position: 'bottom-right' }
]

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = () => {
  console.log('登录信息:', {
    username: form.value.username,
    password: form.value.password,
    rememberMe: rememberMe.value
  })

  message.success('演示模式：登录成功（未调用真实接口）')
}
</script>

<style scoped>
.login-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.characters-area {
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  padding: 60px;
}

.form-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
}

.form-card {
  width: 100%;
  max-width: 440px;
  padding: 48px 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 32px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

.logo-icon {
  font-size: 20px;
  font-weight: 700;
  color: #667eea;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header h2 {
  font-size: 28px;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.header p {
  color: #666;
  font-size: 14px;
}

.login-form {
  margin-top: 32px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.password-input {
  position: relative;
}

.password-input input {
  padding-right: 72px;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #667eea;
  padding: 4px;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 14px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #666;
}

.forgot-link {
  color: #667eea;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.register-link {
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #666;
}

.register-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
