import { OptionsList } from '.'

export interface InterventionList extends OptionsList {
  intervention_items_code: number
  desc: string
  problem_list_id: number
}

export interface LookupInterventionListRequest {
  isFetching: boolean
  data: InterventionList[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
