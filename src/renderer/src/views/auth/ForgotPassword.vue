<template>
  <div class="forgot-container">
    <div class="form-card">
      <div class="header">
        <div class="logo">
          <span class="logo-icon">🔐</span>
          <span class="logo-text">Skill Manager</span>
        </div>
        <h2>重置密码</h2>
        <p>请输入你的邮箱，我们会发送重置链接。</p>
      </div>

      <form @submit.prevent="handleReset" class="forgot-form">
        <div class="form-group">
          <label>邮箱</label>
          <input v-model="email" type="email" placeholder="请输入注册邮箱" />
        </div>

        <button type="submit" class="submit-btn">Send reset link</button>

        <div class="back-link">
          <router-link to="/login">返回登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const message = useMessage()
const email = ref('')

const handleReset = () => {
  console.log('重置密码邮箱:', email.value)
  message.success('演示模式：重置链接已发送（未调用真实接口）')
}
</script>

<style scoped>
.forgot-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.form-card {
  width: 100%;
  max-width: 440px;
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
  font-size: 32px;
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

.forgot-form {
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

.submit-btn {
  width: 100%;
  border: none;
  border-radius: 999px;
  padding: 14px 18px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.back-link {
  text-align: center;
  margin-top: 24px;
}

.back-link a {
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
}

.back-link a:hover {
  text-decoration: underline;
}
</style>
