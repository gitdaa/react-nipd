export interface PatientTagItem {
  patient_tag_id?: number;
  an?: number;
  patient_tag_text?: string;
  patient_tag_color?: string;
}

export interface PatientTagHistoryRequest {
  isFetching: boolean;
  data: PatientTagItem[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}
