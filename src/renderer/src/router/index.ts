import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import RemoteRepos from '../views/repos/RemoteRepos.vue'
import LocalRepos from '../views/repos/LocalRepos.vue'
import ProjectManage from '../views/inject/ProjectManage.vue'
import BatchOperation from '../views/inject/BatchOperation.vue'
import SkillBrowse from '../views/skills/SkillBrowse.vue'
import DependencyGraph from '../views/skills/DependencyGraph.vue'
import TemplateManager from '../views/skills/TemplateManager.vue'
import ToolIntegration from '../views/settings/ToolIntegration.vue'
import GlobalSettings from '../views/settings/GlobalSettings.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'

const routes: RouteRecordRaw[] = [
  { path: '', redirect: '/login' },
  { path: '/login', component: Login, meta: { layout: 'auth' } },
  { path: '/register', component: Register, meta: { layout: 'auth' } },
  { path: '/forgot-password', component: ForgotPassword, meta: { layout: 'auth' } },
  { path: '/repos/remote', component: RemoteRepos },
  { path: '/repos/local', component: LocalRepos },
  { path: '/inject/project', component: ProjectManage },
  { path: '/inject/batch', component: BatchOperation },
  { path: '/skills/browse', component: SkillBrowse },
  { path: '/skills/dependency', component: DependencyGraph },
  { path: '/skills/template', component: TemplateManager },
  { path: '/settings/tools', component: ToolIntegration },
  { path: '/settings/global', component: GlobalSettings },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
