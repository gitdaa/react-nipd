export interface ProblemItem {
  ipd_problem_id?: number
  priority?: number
  problem_date?: Date
  problem_period?: number
  problem_text?: string
  problem_user?: number
  problem_user_name?: string
  problem_list_id?: number
  resolve_date?: Date
  resolve_period?: number
  resolve_user?: number
  resolve_user_name?: string
  goal_text?: string
  assessment_text?: string
}
