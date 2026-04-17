// src/renderer/src/stores/menu.ts
import { defineStore } from 'pinia'
import type { MenuItem } from '../types/menu'

// 菜单配置数据 - 确保每个一级菜单都有 children 数组
export const menuConfig: MenuItem[] = [
  {
    path: '/repos',
    title: '仓库管理',
    icon: '📦',
    children: [  // ✅ 必须有 children 数组
      { path: '/repos/remote', title: '远程仓库', icon: '🌐' },
      { path: '/repos/local', title: '本地仓库', icon: '📁' }
    ]
  },
  {
    path: '/inject',
    title: '注入管理',
    icon: '🔗',
    children: [  // ✅ 必须有 children 数组
      { path: '/inject/project', title: '项目管理', icon: '📋' },
      { path: '/inject/batch', title: '批量操作', icon: '⚡' }
    ]
  },
  {
    path: '/skills',
    title: '技能中心',
    icon: '📖',
    children: [  // ✅ 必须有 children 数组
      { path: '/skills/browse', title: '技能浏览', icon: '🎯' },
      { path: '/skills/dependency', title: '依赖分析', icon: '🕸️' },
      { path: '/skills/template', title: '模板管理', icon: '📝' }
    ]
  },
  {
    path: '/settings',
    title: '系统设置',
    icon: '⚙️',
    children: [  // ✅ 必须有 children 数组
      { path: '/settings/tools', title: '工具集成', icon: '🔌' },
      { path: '/settings/global', title: '全局设置', icon: '🎨' }
    ]
  }
]

interface MenuState {
  expandedMenus: string[]
}

export const useMenuStore = defineStore('menu', {
  state: (): MenuState => ({
    expandedMenus: ['/repos', '/inject', '/skills', '/settings']
  }),
  
  actions: {
    toggleMenu(path: string) {
      const index = this.expandedMenus.indexOf(path)
      if (index > -1) {
        this.expandedMenus.splice(index, 1)
      } else {
        this.expandedMenus.push(path)
      }
      this.saveToStorage()
    },
    
    isExpanded(path: string): boolean {
      return this.expandedMenus.includes(path)
    },
    
    saveToStorage() {
      localStorage.setItem('expandedMenus', JSON.stringify(this.expandedMenus))
    },
    
    loadFromStorage() {
      const saved = localStorage.getItem('expandedMenus')
      if (saved) {
        this.expandedMenus = JSON.parse(saved)
      }
    }
  }
})