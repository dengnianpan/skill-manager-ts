<template>
    <button class="interactive-button" @click="$emit('click')">
      <span class="original-text">{{ text }}</span>
      <div class="hover-layer">
        <span>{{ text }}</span>
        <span class="arrow">→</span>
      </div>
    </button>
  </template>
  
  <script setup lang="ts">
  defineEmits<{
    (e: 'click'): void
  }>()
  
  withDefaults(defineProps<{ text?: string }>(), {
    text: 'Log in'
  })
  </script>
  
  <style scoped>
  .interactive-button {
    position: relative;
    width: 100%;
    padding: 14px 24px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border: none;
    border-radius: 48px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .interactive-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
  
  .original-text {
    display: inline-block;
    transition: all 0.3s ease;
  }
  
  .hover-layer {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #5a67d8, #6b46a0);
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s ease;
  }
  
  .interactive-button:hover .original-text {
    transform: translateX(-20px);
    opacity: 0;
  }
  
  .interactive-button:hover .hover-layer {
    opacity: 1;
    transform: translateX(0);
  }
  
  .arrow {
    font-size: 18px;
    transition: transform 0.2s ease;
  }
  
  .interactive-button:hover .arrow {
    transform: translateX(4px);
  }
  </style>