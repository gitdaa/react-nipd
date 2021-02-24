import { PatientStanding } from '../patient'
import { FluidOutputItem, IntakeItem, ExcreteItem } from './vitalsign'

export type PatientStandingWithIO = PatientStanding & { io: FluidIOItem[] }

export interface FluidIOItem {
  id: number
  date: Date | string
  time: string | null
  section: number
  period: number | string | null
  ward: number
  an: number

  oral: number | string
  iv: number | string
  med: number | string
  custom_intake: IntakeItem[]
  sum_intake: number

  urine: number | string
  emesis: number | string
  drainage: number | string
  aspiration: number | string
  custom_output: FluidOutputItem[]
  sum_output: number

  stools_qty: number | string
  urine_qty: number | string
  medication_text: number | string
  custom_excrete: ExcreteItem[]

  ok: number | string
  note: number | string
  staff?: string
}

export interface FluidIOListRequest {
  isFetching: boolean
  data: FluidIOItem[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
