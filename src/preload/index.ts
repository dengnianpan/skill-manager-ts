import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  repos: {
    addRemote: (config: { name: string; remoteUrl: string; localPath?: string }) =>
      ipcRenderer.invoke('repo:addRemote', config),
    sync: (id: string) => ipcRenderer.invoke('repo:sync', id),
    list: () => ipcRenderer.invoke('repo:list'),
    remove: (id: string) => ipcRenderer.invoke('repo:remove', id),
  },
  projects: {
    scan: (workspacePath: string) => ipcRenderer.invoke('project:scan', workspacePath),
    getInjected: (projectPath: string) => ipcRenderer.invoke('project:getInjected', projectPath),
  },
  inject: {
    toProject: (params: { projectPath: string; skill: unknown; targetTools: string[] }) =>
      ipcRenderer.invoke('inject:toProject', params),
    remove: (linkPath: string) => ipcRenderer.invoke('inject:remove', linkPath),
  },
  git: {
    clone: (url: string, path: string) => ipcRenderer.invoke('git:clone', url, path),
    pull: (path: string) => ipcRenderer.invoke('git:pull', path),
    status: (path: string) => ipcRenderer.invoke('git:status', path),
  },
  system: {
    openDirectory: (path: string) => ipcRenderer.invoke('system:openDir', path),
    showNotification: (message: string) => ipcRenderer.invoke('system:notify', message),
    selectDirectory: () => ipcRenderer.invoke('system:selectDir'),
  },
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
