export interface AssessmentItemsLookup {
  id: number
  desc: string
  problem_list_id: string
}

export interface AssessmentItemsLookupRequest {
  isFetching: boolean
  data: AssessmentItemsLookup[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
