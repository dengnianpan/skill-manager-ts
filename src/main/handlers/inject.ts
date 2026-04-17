import { ipcMain } from 'electron'

export function toProject() {
  ipcMain.handle('inject:toProject', async (_event, params) => {
    return { success: true, message: '功能开发中', data: params }
  })
}

export function remove() {
  ipcMain.handle('inject:remove', async (_event, linkPath) => {
    return { success: true, message: '功能开发中', data: { linkPath } }
  })
}
