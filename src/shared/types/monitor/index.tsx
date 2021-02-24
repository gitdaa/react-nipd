export interface MonitorConfigRequest {
  isFetching: boolean
  data?: MonitorConfig
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}

export interface MonitorListRequest {
  isFetching: boolean
  data: MonitorConfig[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}

export interface MonitorConfig {
  id?: number

  monitor_id?: number

  ip?: string

  station?: number

  column?: number

  show_notify?: boolean

  background_color?: string

  ward?: number

  accepted?: boolean

  token?: string
}
