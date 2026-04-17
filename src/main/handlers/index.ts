import * as repoHandlers from './repo'
import * as injectHandlers from './inject'
import * as gitHandlers from './git'
import * as systemHandlers from './system'

export function registerHandlers() {
  Object.values(repoHandlers).forEach((handler) => handler())
  Object.values(injectHandlers).forEach((handler) => handler())
  Object.values(gitHandlers).forEach((handler) => handler())
  Object.values(systemHandlers).forEach((handler) => handler())
}
