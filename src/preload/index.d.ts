import { ElectronAPI } from '@electron-toolkit/preload'

type SkillInjectionParams = {
  projectPath: string
  skill: unknown
  targetTools: string[]
}

type SkillManagerApi = {
  repos: {
    addRemote: (config: { name: string; remoteUrl: string; localPath?: string }) => Promise<unknown>
    sync: (id: string) => Promise<unknown>
    list: () => Promise<unknown>
    remove: (id: string) => Promise<unknown>
  }
  projects: {
    scan: (workspacePath: string) => Promise<unknown>
    getInjected: (projectPath: string) => Promise<unknown>
  }
  inject: {
    toProject: (params: SkillInjectionParams) => Promise<unknown>
    remove: (linkPath: string) => Promise<unknown>
  }
  git: {
    clone: (url: string, path: string) => Promise<unknown>
    pull: (path: string) => Promise<unknown>
    status: (path: string) => Promise<unknown>
  }
  system: {
    openDirectory: (path: string) => Promise<string>
    showNotification: (message: string) => Promise<boolean>
    selectDirectory: () => Promise<string | null>
  }
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: SkillManagerApi
  }
}

export {}
