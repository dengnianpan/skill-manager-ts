import { ipcMain } from 'electron'

export function clone() {
  ipcMain.handle('git:clone', async (_event, url, path) => {
    return { success: true, message: '功能开发中', data: { url, path } }
  })
}

export function pull() {
  ipcMain.handle('git:pull', async (_event, path) => {
    return { success: true, message: '功能开发中', data: { path } }
  })
}

export function status() {
  ipcMain.handle('git:status', async (_event, path) => {
    return { success: true, message: '功能开发中', data: { path } }
  })
}
