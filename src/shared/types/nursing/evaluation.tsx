import { EvaluationList } from '../lookup/evaluation'

export interface EvaluationItemsLookup {
  id: number
  desc: string
  problem_list_id: string
}

export interface EvaluationItemsLookupRequest {
  isFetching: boolean
  data: EvaluationList[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
