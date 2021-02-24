import { FlashNotifyItem } from '../notify'

export interface Patient {
  hn: string
  an: number
  vn: number
  bed: string
  sex: number
  income: number
  wait_paid: number
  name: string
  ward_code: number
  ward: number
  date: number
  age: number
  avatar: string
  diag_group_code?: number
  diag_items_code?: number

  notify_count?: number
  notify?: FlashNotifyItem[]
  notifys?: PatientNotifyGroup
}

export interface PatientNotifyGroup {
  laboratory?: FlashNotifyItem[]
  medication?: FlashNotifyItem[]
  allergy?: FlashNotifyItem[]
}

export interface PatientInfo extends Patient {
  birthday: string
  tel: string
  address: string
  pttype: string
  regdate: string
  regtime: string
  dchdate: string
  dchtime: string
  cc: string
  prediag: string
  doctor: string
  access_key: string
}

export interface PatientState {
  expireAt: string | null
  isFetching: boolean
  error: boolean
  errorMessage: string | null
  hasPatient: boolean
  patient: PatientInfo | undefined
  isIpd: boolean
}

export interface PatientSearchState {
  isFetching: boolean
  data: Patient[]
  error: boolean
}

export interface PatientInfoAllergies {
  agent: string
  report_date: string
  symptom: string
}

export interface PatientOwnerRequest {
  expireAt: Date | null
  isFetching: boolean
  error: boolean
  errorMessage: string
  filter: string | null
  data: Patient[]
}

export type PatientStanding = PatientInfo & {
  standing_id: string
  standing_date: number
  standing_ward: number

  nward?: number | null
  oward?: number | null
  nward_name?: string | null
  oward_name?: string | null
}

export interface PatientStandingRequest {
  expireAt: Date | null
  isFetching: boolean
  error: boolean
  errorMessage: string
  filter: string | null
  data: PatientStanding[]
}
