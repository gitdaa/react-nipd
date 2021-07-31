import { PatientStanding } from '../patient';

export interface MedicationDispensed {
  an?: number;
  dispense_status_id?: number;
  dispensing_date?: string;
  dispensing_time?: string;
  icode?: number;
  ipd_medplan_dispensing_id?: number;
  med_plan_number?: number;
  name_ref?: string;
  section?: number;
  staffname?: string;
  soft_deleted?: boolean;
}

export interface MedicationPlanInterval {
  id?: number;
  medplan_interval_head_id?: number;
  start_date?: string;
  med_plan_number?: number;
  icode?: number;
  interval_time?: number[];
  user_id?: number;
  user_name?: string;
}

export interface MedicationProfile {
  id?: string;
  med_plan_number?: number;
  icode?: number;
  an?: number;
  date?: string;
  name?: string;
  shortlist?: string;
  offdate?: number;
  orderdate?: number;
  hidedate?: number; // ซ่อนออกจาก mar
  displaycolor?: number;
  dosageform?: string;
  used?: string;
  route?: string;
  doctor_name?: string;
  interval?: number[];
  interval_list?: MedicationPlanInterval[];
  time?: string;
  dispense?: MedicationDispensed[];
  note?: string;
}

/**
 * PatientStanding
 * สถานะการจ่ายยา
 */

export type PatientStandingMarWithStat = PatientStanding & {
  /**
   * ยาที่ต้องได้รับตามเวลา
   */
  med_count?: number;

  /**
   * ยาที่จ่ายแล้ว
   */
  med_dispensed?: number;

  /**
   * ยาที่จ่ายช้าเกินเวลากำหนด
   */
  med_late?: number;

  /**
   * ยาที่ต้องจ่ายในอีก 1 ชั่วโมงถัดไป
   */
  med_next_hour?: number;

  /**
   * ยาที่ไม่จ่ายตามเวลา
   */
  omission_error?: number;
};

export interface MedicationProfileStat {
  an: number;
  date: string;
  ward: number;
  med_plan_number: number;
  icode: number;
  type: string;
  offdate: string;
  interval_time: string;
  dispensed: string;
  dispensed_count: number;
}

export interface MedicationProfileRequest {
  isFetching: boolean;
  data: MedicationProfile[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}

export interface MedicationProfileStatRequest {
  isFetching: boolean;
  data: MedicationProfileStat[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}

export interface DispensingProfileRequest {
  isFetching: boolean;
  data: MedicationDispensed[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}

export interface HealthRecentDispensingRequest {
  isFetching: boolean;
  data: MedicationDispensed[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}
