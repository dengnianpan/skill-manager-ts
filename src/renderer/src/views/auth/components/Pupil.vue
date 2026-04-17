<template>
    <div ref="pupilRef" class="pupil" :style="pupilStyle"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  
  const pupilRef = ref<HTMLDivElement>()
  const mouseX = ref(0)
  const mouseY = ref(0)
  
  const handleMouseMove = (e: MouseEvent) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  }
  
  const pupilStyle = computed(() => {
    if (!pupilRef.value) return {}
    
    const rect = pupilRef.value.parentElement?.getBoundingClientRect()
    if (!rect) return {}
    
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const angle = Math.atan2(mouseY.value - centerY, mouseX.value - centerX)
    const distance = Math.min(
      Math.sqrt((mouseX.value - centerX) ** 2 + (mouseY.value - centerY) ** 2),
      5
    )
    
    const x = Math.cos(angle) * distance
    const y = Math.sin(angle) * distance
    
    return {
      transform: `translate(${x}px, ${y}px)`
    }
  })
  
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })
  </script>
  
  <style scoped>
  .pupil {
    width: 8px;
    height: 8px;
    background: #1a1a2e;
    border-radius: 50%;
    transition: transform 0.05s linear;
  }
  </style>