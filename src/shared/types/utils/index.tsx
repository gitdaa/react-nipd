export interface GlobalConfig {
  collapsed: boolean
}

export interface watcherEntityEvent {
  onRequest?: Function
  onSuccess?: Function
  onFailure?: Function
}

export interface RequestType {
  REQUEST: string
  SUCCESS: string
  FAILURE: string
  LOADMORE: string
  CANCEL: string
  CLEAR: string
}
