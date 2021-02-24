import { OptionsList } from '.'

export interface GoalList extends OptionsList {
  problem_goal_items_code: number
  desc: string
  problem_list_id: number
}

export interface LookupGoalListRequest {
  isFetching: boolean
  data: GoalList[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
