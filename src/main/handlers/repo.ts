import { ipcMain } from 'electron'

export function addRemote() {
  ipcMain.handle('repo:addRemote', async (_event, config) => {
    return { success: true, message: '功能开发中', data: config }
  })
}

export function sync() {
  ipcMain.handle('repo:sync', async (_event, id) => {
    return { success: true, message: '功能开发中', data: { id } }
  })
}

export function list() {
  ipcMain.handle('repo:list', async () => {
    return []
  })
}

export function remove() {
  ipcMain.handle('repo:remove', async (_event, id) => {
    return { success: true, message: '功能开发中', data: { id } }
  })
}
