import { OptionsList } from '.'

export interface EvaluationList extends OptionsList {
  evaluation_items_code: number
  desc: string
  problem_list_id: number
}

export interface LookupEvaluationListRequest {
  isFetching: boolean
  data: EvaluationList[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
