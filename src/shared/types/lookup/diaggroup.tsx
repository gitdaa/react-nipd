export interface DiagGroup {
  diag_group_code: number
  desc: string
  department_group_code: number
  disabled?: boolean
}

export interface LookupDiagGroupRequest {
  isFetching: boolean
  data: DiagGroup[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
