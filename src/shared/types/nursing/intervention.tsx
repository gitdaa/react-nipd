import { InterventionList } from '../lookup/intervention'

export interface InterventionItemsLookup {
  id: number
  desc: string
  problem_list_id: string
}

export interface InterventionItemsLookupRequest {
  isFetching: boolean
  data: InterventionList[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
