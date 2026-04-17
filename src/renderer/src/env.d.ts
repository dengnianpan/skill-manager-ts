/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  // 扩展 Window 接口
  declare global {
    interface Window {
      api: {
        repos: {
          addRemote: (config: { name: string; remoteUrl: string; localPath?: string }) => Promise<any>
          sync: (id: string) => Promise<any>
          list: () => Promise<any>
          remove: (id: string) => Promise<any>
        }
        projects: {
          scan: (workspacePath: string) => Promise<any>
          getInjected: (projectPath: string) => Promise<any>
        }
        inject: {
          toProject: (params: { projectPath: string; skill: any; targetTools: string[] }) => Promise<any>
          remove: (linkPath: string) => Promise<any>
        }
        git: {
          clone: (url: string, path: string) => Promise<any>
          pull: (path: string) => Promise<any>
          status: (path: string) => Promise<any>
        }
        system: {
          openDirectory: (path: string) => Promise<void>
          showNotification: (msg: string) => Promise<void>
          selectDirectory: () => Promise<string | null>
        }
      }
    }
  }
  
  export {}