export interface GlobalConfig {
  collapsed: boolean
}

export interface watcherEntityEvent {
  onRequest?: Function
  onSuccess?: Function
  onFailure?: Function
}
