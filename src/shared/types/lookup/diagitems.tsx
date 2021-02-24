export interface DiagItems {
  diag_items_code: number
  desc: string
  diag_group_code: number
}

export interface LookupDiagItemsRequest {
  isFetching: boolean
  data: DiagItems[]
  example: { [diag_group_code: string]: DiagItems[] }
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
