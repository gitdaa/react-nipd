export interface MedpayIpdDocScan {
  image_id: string;
  an: number;
  hn: string;
  ward: number;
  ward_name: string;
  doctor: number;
  doctor_name: string;
  order_type: string;
  scan_date: string;
  med_rx_number: number;
}

export interface MedpayIpdDocScanHistoryRequest {
  isFetching: boolean;
  data: MedpayIpdDocScan[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}

export interface ClinicalSummaryDischarge {
  an: number;
  hn: string;
  regdate: string;
  dchdate: string;
  assessment_text: string;
  diagnosis_text: string;
  investigated_text: string;
  operation_text: string;
  dchstts: string;
  discharge_plan: string;
  follow_up: string;
  follow_week: number;
  home_health_care: string;
  refer: string;
  work_up: string;
  created_at: string;
  updated_at: string;
  dch_doctor: string;
  doctor_name: string;
}

export interface ClinicalSummaryDischargeRequest {
  isFetching: boolean;
  data: ClinicalSummaryDischarge[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}
