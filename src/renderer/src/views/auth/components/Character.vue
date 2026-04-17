<template>
  <div class="character" :style="characterStyle">
    <div class="body" :style="bodyStyle">
      <div class="head">
        <div class="eye left-eye">
          <div class="eye-white">
            <Pupil v-if="!isBlinking" />
          </div>
        </div>
        <div class="eye right-eye">
          <div class="eye-white">
            <Pupil v-if="!isBlinking" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import Pupil from './Pupil.vue'

interface Props {
  color: string
  position: string
  isTypingEmail: boolean
  passwordLength: number
  showPassword: boolean
}

const props = defineProps<Props>()

const isBlinking = ref(false)
const isPeeking = ref(false)
const bodySkew = ref(0)
let peekTimer: ReturnType<typeof setTimeout> | null = null

const scheduleBlink = () => {
  const timer = setTimeout(() => {
    isBlinking.value = true
    setTimeout(() => {
      isBlinking.value = false
      scheduleBlink()
    }, 150)
  }, Math.random() * 4000 + 3000)

  return timer
}

watch([() => props.passwordLength, () => props.showPassword], () => {
  if (peekTimer) {
    clearTimeout(peekTimer)
    peekTimer = null
  }

  if (props.passwordLength > 0 && props.showPassword && !isPeeking.value) {
    peekTimer = setTimeout(() => {
      isPeeking.value = true
      setTimeout(() => {
        isPeeking.value = false
      }, 800)
    }, Math.random() * 3000 + 2000)
  }
})

const handleMouseMove = (e: MouseEvent) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20
  bodySkew.value = Math.min(Math.max(x, -15), 15)
}

const bodyStyle = computed(() => {
  if ((props.showPassword && props.passwordLength > 0 && isPeeking.value) || props.isTypingEmail) {
    return {
      transform: `skewX(${bodySkew.value - 12}deg) translateX(40px)`,
      height: '440px',
      transition: 'all 0.3s ease'
    }
  }

  if (props.passwordLength > 0 && !props.showPassword) {
    return {
      height: '440px',
      transition: 'all 0.3s ease'
    }
  }

  return {
    transform: `skewX(${bodySkew.value}deg)`,
    transition: 'all 0.3s ease'
  }
})

const characterStyle = computed(() => {
  const positions: Record<string, Record<string, string>> = {
    'top-left': { top: '20%', left: '20%' },
    'top-right': { top: '20%', right: '20%' },
    'bottom-left': { bottom: '20%', left: '20%' },
    'bottom-right': { bottom: '20%', right: '20%' }
  }

  return positions[props.position] || {}
})

let blinkTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  blinkTimer = scheduleBlink()
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  if (blinkTimer) {
    clearTimeout(blinkTimer)
  }
  if (peekTimer) {
    clearTimeout(peekTimer)
  }
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.character {
  position: absolute;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.body {
  width: 100px;
  height: 400px;
  background: v-bind(color);
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.head {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: v-bind(color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.eye {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eye-white {
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
</style>
