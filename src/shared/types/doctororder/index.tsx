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
