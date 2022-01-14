export interface VitalSignItem {
  temperature?: number;
  temperature_drop?: number;
  pulse?: number;
  respiratory_rate?: number;
  bp_systolic?: number;
  bp_diastolic?: number;
  weight?: number;
  heart_rate?: number;
  oxygen_sats?: number;
  exercise_oxygen_sats?: number;
  sos?: number;
  pain_score?: number;
  diet_text?: string;
}

export interface VitalSignIntervention {
  intervention_text: string;
}

export interface VitalSignNoteItem extends VitalSignItem {
  id?: number;
  nurse_note_id: number;
  an: number;
  vn?: number;
  note_date: Date;
  note_time: string;
  note_date_time: number; // unix
  section: number;
  time_period: number;
  note: string;
  staff: string;
  ipd_nurse_shift_id: number;
  intervention_list: VitalSignIntervention[];
}

export interface VitalSignNoteItemRequest {
  isFetching: boolean;
  data: VitalSignNoteItem[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}

export interface IntakeItem {
  fluid_intake_type_id: string;
  fluid_intake_type_name: string;
  fluid_intake_type_unit?: string | null;
  value?: string | number;
}

export interface FluidOutputItem {
  fluid_output_type_id: string;
  fluid_output_type_name: string;
  fluid_output_type_unit?: string | null;
  value?: string | number;
}

export interface ExcreteItem {
  excrete_type_id: string;
  excrete_type_name: string;
  excrete_type_unit?: string | null;
  value?: string | number;
}
