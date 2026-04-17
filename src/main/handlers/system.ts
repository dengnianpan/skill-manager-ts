import { dialog, ipcMain, Notification, shell } from 'electron'

export function openDir() {
  ipcMain.handle('system:openDir', async (_event, targetPath: string) => {
    return shell.openPath(targetPath)
  })
}

export function notify() {
  ipcMain.handle('system:notify', async (_event, message: string) => {
    const notification = new Notification({
      title: 'Skill Manager',
      body: message,
    })

    notification.show()
    return true
  })
}

export function selectDir() {
  ipcMain.handle('system:selectDir', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openDirectory'],
    })

    if (result.canceled) {
      return null
    }

    return result.filePaths[0] ?? null
  })
}
