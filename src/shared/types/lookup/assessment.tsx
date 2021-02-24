import { OptionsList } from '.'

export interface AssessmentList extends OptionsList {
  assessment_items_code: number
  desc: string
  problem_list_id: number
}

export interface LookupAssessmentListRequest {
  isFetching: boolean
  data: AssessmentList[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
