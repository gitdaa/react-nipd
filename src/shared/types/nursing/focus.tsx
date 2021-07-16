import { NursingNoteItem } from '.'
import { ProblemItem } from './problem'

export interface NewFocusForm {
  note_date: Date | string
  note_period: number
  diaggroup: number
  diagitems: number
  focus: NursingNoteItem[]
  goal: NursingNoteItem[]
  assessment: NursingNoteItem[]
  active: boolean
}

export interface FocusState {
  an: number
  date: Date
  period: number
}

export interface FocusItem {
  id: string
  ipd_problem_id: string | null
  an: number
  focus: string
  goal: string
  text: string
  active: boolean
  continues: boolean
  note_date: Date
  note_time?: string
  note_date_time: number
  note_period: number
  problem?: boolean
  focus_item?: number
  problem_date?: number
  problem_period?: number
  problem_user_name?: string
  resolve_date?: number
  resolve_period?: number
  priority?: number
  selected?: boolean
  readonly?: boolean

  color?: string

  has_assessment?: boolean
  has_intervention?: boolean
  has_evaluation?: boolean
}

export interface FocusItemRequest {
  isFetching: boolean
  data: FocusItem[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}

export interface FocusInfoRequestData {
  ipd_focus_id?: string
  focus?: NursingNoteItem[]
  note_date?: Date
  note_period?: number
  problem?: ProblemItem
  goal?: NursingNoteItem[]
  assessment?: NursingNoteItem[]
  intervention?: NursingNoteItem[]
  evaluation?: NursingNoteItem[]
}

export interface FocusInfoRequest {
  isFetching: boolean
  data: FocusInfoRequestData
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}

export interface FocusItemHistory {
  ipd_problem_id: string
  an: number
  priotiry: number
  problem_text: string
  problem_date: number
  problem_period: number
  problem_user: number
  problem_user_name: string
  problem_list_id: number
  resolve_date: number
  resolve_period: number
  resolve_user: number
  resolve_user_name: string
}

export interface FocusItemHistoryRequest {
  isFetching: boolean
  data: FocusItemHistory[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}

export interface FocusHistoryByIdRequest {
  isFetching: boolean
  data: FocusInfoRequestData[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
