<template>
  <div class="register-container">
    <div class="form-card">
      <div class="header">
        <div class="logo">
          <span class="logo-icon">注册</span>
          <span class="logo-text">Skill Manager</span>
        </div>
        <h2>创建账号</h2>
        <p>开始管理你的 AI Skills</p>
      </div>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label>用户名</label>
          <input v-model="form.username" type="text" placeholder="请输入用户名" />
        </div>

        <div class="form-group">
          <label>邮箱</label>
          <input v-model="form.email" type="email" placeholder="请输入邮箱" />
        </div>

        <div class="form-group">
          <label>密码</label>
          <div class="password-input">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="请设置密码"
            />
            <button type="button" class="toggle-password" @click="showPassword = !showPassword">
              {{ showPassword ? '隐藏' : '显示' }}
            </button>
          </div>
        </div>

        <div class="form-group">
          <label>确认密码</label>
          <div class="password-input">
            <input
              v-model="form.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="请再次输入密码"
            />
            <button
              type="button"
              class="toggle-password"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              {{ showConfirmPassword ? '隐藏' : '显示' }}
            </button>
          </div>
        </div>

        <InteractiveButton text="注册" @click="handleRegister" />

        <div class="login-link">
          已有账号？
          <router-link to="/login">立即登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import InteractiveButton from './components/InteractiveButton.vue'

const message = useMessage()

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  console.log('注册信息:', form.value)
  message.success('演示模式：注册成功（未调用真实接口）')
}
</script>

<style scoped>
.register-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.form-card {
  width: 100%;
  max-width: 480px;
  padding: 48px 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.2);
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

.register-form {
  margin-top: 32px;
}

.form-group {
  margin-bottom: 20px;
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

.login-link {
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
