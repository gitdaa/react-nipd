export interface AllergiesItems {
  an: number
  agent: string
  report_date: string
  symptom: string
}

export interface AllergiesHistoryRequest {
  isFetching: boolean
  data: AllergiesItems[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
