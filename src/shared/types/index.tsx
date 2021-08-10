export type { AuthState } from './auth';

export type { UIMarTabType } from './interface';

export interface BaseRequest<T> {
  expireAt: Date | null;
  isFetching: boolean;
  error: boolean;
  errorMessage: string;
  data: T;
}

export type {
  MedicationDispensed,
  MedicationPlanInterval,
  MedicationProfile,
  PatientStandingMarWithStat,
  MedicationProfileStat,
  MedicationProfileRequest,
  MedicationProfileStatRequest,
  DispensingProfileRequest,
  HealthRecentDispensingRequest
} from './medication';

export type {
  MonitorConfigRequest,
  MonitorListRequest,
  MonitorConfig
} from './monitor';

export type {
  FlashNotifyRequest,
  FlashNotifyItem,
  FlashNotifyWithPatientInfo,
  FlashNotifyBadgeRequest,
  FlashNotifyBadge
} from './notify';

export type {
  AssessmentItemsLookup,
  AssessmentItemsLookupRequest
} from './nursing/assessment';

export type {
  DtxItem,
  PatientStandingWithDtx,
  FetchDtxListRequest
} from './nursing/dtx';

export type {
  EvaluationItemsLookup,
  EvaluationItemsLookupRequest
} from './nursing/evaluation';

export type {
  PatientStandingWithIO,
  FluidIOItem,
  FluidIOListRequest
} from './nursing/fluidio';

export type {
  FocusState,
  FocusItem,
  FocusItemRequest,
  FocusInfoRequestData,
  FocusInfoRequest,
  FocusItemHistory,
  FocusItemHistoryRequest,
  FocusHistoryByIdRequest
} from './nursing/focus';

export type {
  InterventionItemsLookup,
  InterventionItemsLookupRequest
} from './nursing/intervention';

export type { ProblemItem } from './nursing/problem';

export type {
  VitalSignItem,
  VitalSignNoteItem,
  VitalSignNoteItemRequest,
  IntakeItem,
  FluidOutputItem,
  ExcreteItem
} from './nursing/vitalsign';

export type {
  VitalSign,
  NursingNoteItem,
  NursingNoteAssessment,
  NursingNoteIntervention,
  NursingNoteEvaluation
} from './nursing';

export type {
  Patient,
  PatientNotifyGroup,
  PatientInfo,
  PatientState,
  PatientSearchState,
  PatientInfoAllergies,
  PatientOwnerRequest,
  PatientStanding,
  PatientStandingRequest,
  HealthInfo,
  PatientHealthInfoRequest,
  PatientHealthLabRequest,
  PatientHealthVitalSignRequest
} from './patient';

export type { ErrorResponse, ServerResponse } from './service';

export type { SubmitStatus } from './status';

export type {
  User,
  UserInfo,
  UserPermissions,
  UserSettings,
  UserSignature,
  RecentAuth
} from './user';

export type { GlobalConfig, watcherEntityEvent, RequestType } from './utils';

export {
  MedpayIpdDocScan,
  MedpayIpdDocScanHistoryRequest,
  ClinicalSummaryDischarge,
  ClinicalSummaryDischargeRequest
} from './doctororder';
