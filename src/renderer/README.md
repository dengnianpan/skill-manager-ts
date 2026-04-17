# Skill Manager - Renderer 模块文档

## 📁 当前目录结构

src/renderer/
├── index.html # 应用入口 HTML
├── env.d.ts # TypeScript 类型声明
│
└── src/
├── main.ts # Vue 应用入口
├── App.vue # 根组件
│
├── layouts/ # 布局组件
│ └── MainLayout.vue # 主布局（侧边栏 + 内容区）
│
├── components/ # 公共组件
│ └── layout/ # 布局相关组件
│ ├── Sidebar.vue # 侧边栏容器
│ └── SidebarMenuItem.vue # 递归菜单项组件
│
├── views/ # 页面视图
│ ├── repos/ # 仓库管理模块
│ │ ├── RemoteRepos.vue # 远程仓库页面
│ │ └── LocalRepos.vue # 本地仓库页面
│ │
│ ├── inject/ # 注入管理模块
│ │ ├── ProjectManage.vue # 项目管理页面
│ │ └── BatchOperation.vue # 批量操作页面
│ │
│ ├── skills/ # 技能中心模块
│ │ ├── SkillBrowse.vue # 技能浏览页面
│ │ ├── DependencyGraph.vue # 依赖分析页面
│ │ └── TemplateManager.vue # 模板管理页面
│ │
│ └── settings/ # 系统设置模块
│ ├── ToolIntegration.vue # 工具集成页面
│ └── GlobalSettings.vue # 全局设置页面
│
├── router/ # 路由配置
│ └── index.ts # 路由定义（9个页面路由）
│
├── stores/ # Pinia 状态管理
│ └── menu.ts # 菜单状态（展开/收起 + 配置）
│
├── types/ # TypeScript 类型定义
│ └── menu.ts # 菜单类型定义（MenuItem, SubMenuItem）
│
└── api/ # API 调用层（待开发）
└── (暂无文件)

## 🏗️ 当前 DOM 层级结构

### 1. 根组件 (App.vue)

App.vue
└── n-config-provider (Naive UI 配置提供者)
└── n-message-provider (消息提示提供者)
└── n-dialog-provider (对话框提供者)
└── MainLayout (主布局组件)

### 2. 主布局 (MainLayout.vue)

MainLayout.main-layout
├── Sidebar (侧边栏组件)
└── main.content (主内容区)
├── .content-header (内容头部)
│ └── .breadcrumb (面包屑导航)
│ └── span "一级菜单 / 二级菜单"
└── .content-body (内容主体)
└── router-view (路由视图，渲染当前页面)

### 3. 侧边栏 (Sidebar.vue)

Sidebar.sidebar
├── .logo (Logo 区域)
│ ├── .icon 🎯
│ └── .title "Skill Manager"
│
├── nav.nav (导航菜单区域)
│ └── SidebarMenuItem (循环渲染，共4个一级菜单)
│ ├── 一级菜单：仓库管理 📦
│ │ ├── .menu-title (可点击展开/收起)
│ │ │ ├── .menu-icon 📦
│ │ │ ├── .menu-label "仓库管理"
│ │ │ └── .menu-arrow ▼
│ │ └── .submenu (展开时显示)
│ │ ├── router-link 远程仓库 🌐
│ │ └── router-link 本地仓库 📁
│ │
│ ├── 一级菜单：注入管理 🔗
│ │ ├── .menu-title
│ │ └── .submenu
│ │ ├── router-link 项目管理 📋
│ │ └── router-link 批量操作 ⚡
│ │
│ ├── 一级菜单：技能中心 📖
│ │ ├── .menu-title
│ │ └── .submenu
│ │ ├── router-link 技能浏览 🎯
│ │ ├── router-link 依赖分析 🕸️
│ │ └── router-link 模板管理 📝
│ │
│ └── 一级菜单：系统设置 ⚙️
│ ├── .menu-title
│ └── .submenu
│ ├── router-link 工具集成 🔌
│ └── router-link 全局设置 🎨
│
└── .footer (底部状态栏)
├── .status
│ ├── .dot (绿色闪烁指示灯)
│ └── span "就绪"
└── .version "v1.0.0"

### 4. 页面组件 (以 RemoteRepos.vue 为例)

所有页面组件目前都是占位状态，结构统一：

.page
├── .page-header
│ ├── h2 "标题"
│ └── n-button "操作按钮"
└── n-empty
├── template #default
│ └── 描述文字
└── template #extra (可选)
└── n-button "操作按钮"


## 📊 当前菜单配置

### 一级菜单（4个）

| 一级菜单 | 图标 | 路径前缀 | 二级菜单数量 |
|---------|------|---------|-------------|
| 仓库管理 | 📦 | `/repos` | 2 |
| 注入管理 | 🔗 | `/inject` | 2 |
| 技能中心 | 📖 | `/skills` | 3 |
| 系统设置 | ⚙️ | `/settings` | 2 |

### 二级菜单（9个）

| 二级菜单 | 图标 | 路由路径 | 所属一级菜单 |
|---------|------|---------|-------------|
| 远程仓库 | 🌐 | `/repos/remote` | 仓库管理 |
| 本地仓库 | 📁 | `/repos/local` | 仓库管理 |
| 项目管理 | 📋 | `/inject/project` | 注入管理 |
| 批量操作 | ⚡ | `/inject/batch` | 注入管理 |
| 技能浏览 | 🎯 | `/skills/browse` | 技能中心 |
| 依赖分析 | 🕸️ | `/skills/dependency` | 技能中心 |
| 模板管理 | 📝 | `/skills/template` | 技能中心 |
| 工具集成 | 🔌 | `/settings/tools` | 系统设置 |
| 全局设置 | 🎨 | `/settings/global` | 系统设置 |

## 🔗 组件依赖关系

App.vue
│
├── MainLayout.vue
│ │
│ ├── Sidebar.vue
│ │ │
│ │ ├── SidebarMenuItem.vue (递归)
│ │ │
│ │ └── stores/menu.ts
│ │ └── types/menu.ts
│ │
│ └── router/index.ts
│ │
│ └── views/*.vue (9个页面)
│
└── main.ts
├── router
├── pinia
└── naive-ui

## 📝 现有文件清单

| 文件路径 | 行数 | 功能说明 |
|---------|------|---------|
| `src/main.ts` | ~15 | Vue 应用入口，注册插件 |
| `src/App.vue` | ~20 | 根组件，提供 Naive UI 上下文 |
| `layouts/MainLayout.vue` | ~60 | 主布局，侧边栏+内容区 |
| `components/layout/Sidebar.vue` | ~80 | 侧边栏容器 |
| `components/layout/SidebarMenuItem.vue` | ~100 | 递归菜单项 |
| `views/repos/RemoteRepos.vue` | ~30 | 远程仓库页面（占位） |
| `views/repos/LocalRepos.vue` | ~30 | 本地仓库页面（占位） |
| `views/inject/ProjectManage.vue` | ~35 | 项目管理页面（占位） |
| `views/inject/BatchOperation.vue` | ~25 | 批量操作页面（占位） |
| `views/skills/SkillBrowse.vue` | ~45 | 技能浏览页面（占位） |
| `views/skills/DependencyGraph.vue` | ~40 | 依赖分析页面（占位） |
| `views/skills/TemplateManager.vue` | ~25 | 模板管理页面（占位） |
| `views/settings/ToolIntegration.vue` | ~25 | 工具集成页面（占位） |
| `views/settings/GlobalSettings.vue` | ~20 | 全局设置页面（占位） |
| `router/index.ts` | ~35 | 路由配置 |
| `stores/menu.ts` | ~50 | 菜单状态+配置 |
| `types/menu.ts` | ~10 | 类型定义 |

## 🚧 待开发功能

- [ ] API 调用层 (`api/` 目录)
- [ ] 更多 Store 模块 (`stores/repos.ts`, `stores/projects.ts` 等)
- [ ] 工具函数 (`utils/` 目录)
- [ ] 公共组件 (`components/common/` 目录)
- [ ] 页面功能实现（目前都是占位）

## 🎯 命名规范

### 组件命名

- 布局组件: `MainLayout.vue`, `Sidebar.vue`
- 页面组件: `RemoteRepos.vue`, `ProjectManage.vue`
- 递归组件: `SidebarMenuItem.vue`

### CSS 类名

- 块: `.page`, `.sidebar`, `.menu-title`
- 元素: `.page-header`, `.content-body`
- 修饰符: `.active`, `.expanded`, `.rotated`

### 路由路径

- 格式: `/模块/页面`
- 示例: `/repos/remote`, `/inject/project`

## 🚀 开发进度

### 已完成 ✅

- [x] 项目初始化
- [x] Electron + Vue 3 + TypeScript 配置
- [x] Naive UI 集成
- [x] 路由配置（9个页面）
- [x] 侧边栏组件（一级+二级菜单）
- [x] 菜单状态管理（展开/收起）
- [x] 菜单配置数据
- [x] 所有页面占位组件

### 进行中 🔄

- [ ] 页面功能实现
- [ ] API 集成

### 待开发 📅

- [ ] 远程仓库管理功能
- [ ] 本地仓库管理功能
- [ ] 项目扫描功能
- [ ] 技能注入功能
- [ ] Git 操作集成

---

**文档版本**: v1.0.0  
