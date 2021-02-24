import { PatientStanding } from '../patient'

export type PatientStandingWithDtx = PatientStanding & { dtx: DtxItem[] }

export interface DtxItem {
  id: number
  date: Date | string
  time: string | null
  period: number | string | null
  section: number | string | null
  ward: number
  an: number
  dtx: number | string
  note: number | string
  staff?: string
}

export interface FetchDtxListRequest {
  isFetching: boolean
  data: DtxItem[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
