import { OptionsList } from '.'

export interface ProblemList extends OptionsList {
  problem_list_id: number
  desc: string
  diag_group_code: number
  diag_items_code: number
  color?: string
}

export interface LookupProblemListRequest {
  isFetching: boolean
  data: ProblemList[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
