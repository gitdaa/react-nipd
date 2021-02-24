export interface Ward {
  ward: number
  name: string
  shortname: string
}

export interface LookupWardRequest {
  isFetching: boolean
  data: Ward[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
