import { BaseRequest } from '..'
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
  xray?: FlashNotifyItem[]
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

export interface PatientOwnerRequest extends BaseRequest<Patient[]> {
  errorAttempt: number
  filter: string | null
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

export interface PatientStandingRequest extends BaseRequest<PatientStanding[]> {
  filter: string | null
}

export interface HealthInfo {
  an: number
  bw: number
  height: number
  bmi: number
  clinic: string
}

export interface PatientHealthInfoRequest extends BaseRequest<HealthInfo[]> {}

export interface PatientHealthLabRequest extends BaseRequest<any[]> {}

export interface PatientHealthVitalSignRequest
  extends BaseRequest<HealthVitalSignRecent> {}

// 'temperature' => $temperature,
// 'blood_pressure' => $blood_pressure,
// 'pulse' => $pulse,
// 'heart_rate' => $heart_rate,
// 'respiratory_rate' => $respiratory_rate,

export interface HealthVitalSignRecent {
  temperature: undefined | any[]
  blood_pressure: undefined | any[]
  pulse: undefined | any[]
  heart_rate: undefined | any[]
  respiratory_rate: undefined | any[]
}
