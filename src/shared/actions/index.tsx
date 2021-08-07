import { createRequestType } from '../libs';

export const GLOBAL_COLLAPSED = 'global/COLLAPSED';
export const GLOBAL_INPATIENT_TABLE_STYLE = 'global/INPATIENT_TABLE_STYLE';

export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

export const FETCH_INIT_WARD = createRequestType('FETCH_INIT_WARD');
export const SET_USER_DEFAULT_WARD = createRequestType('SET_USER_DEFAULT_WARD');

export const SIDEKICK = 'SIDEKICK';
export const LOGOUT = 'LOGOUT';
export const LOGIN = createRequestType('LOGIN');

export const GET_PATIENT_OWNER = createRequestType('GET_PATIENT_OWNER');
export const GET_PATIENT_STANDING = createRequestType('GET_PATIENT_STANDING');
export const ADD_TO_DESK = createRequestType('ADD_TO_DESK');
export const GET_PATIENT_HEALTH = createRequestType('GET_PATIENT_HEALTH');

export const GET_PATIENT_HEALTH_VITAL = createRequestType(
  'GET_PATIENT_HEALTH_VITAL'
);
export const GET_PATIENT_HEALTH_LAB = createRequestType(
  'GET_PATIENT_HEALTH_LAB'
);
export const GET_PATIENT_ALLERGIES = createRequestType('GET_PATIENT_ALLERGIES');
export const GET_PATIENT_RECENT_MEDICATION = createRequestType(
  'GET_PATIENT_RECENT_MEDICATION'
);
export const GET_PATIENT_HEALTH_DTX = createRequestType(
  'GET_PATIENT_HEALTH_DTX'
);
export const GET_TEST = createRequestType('GET_TEST');

export const GET_PATIENT_HEALTH_IO = createRequestType('GET_PATIENT_HEALTH_IO');

export const ADD_NEW_FOCUS = createRequestType('ADD_NEW_FOCUS');
export const REMOVE_FOCUS = createRequestType('REMOVE_FOCUS');
export const ADD_NEW_VITALSIGN = createRequestType('ADD_NEW_VITALSIGN');
export const MOVE_FOCUS_SECTION = createRequestType('MOVE_FOCUS_SECTION');

export {
  GET_PATIENT_NOTIFY_LIST,
  GET_NOTIFICATION_LIST,
  GET_PATIENT_NOTIFY_BADGE,
  GET_PATIENT_NOTIFY_HISTORY,
  SET_NOTIFY_READED
} from './notification';

export const ACTIVE_PROBLEM = createRequestType('ACTIVE_PROBLEM');
export const RESOLVE_PROBLEM = createRequestType('RESOLVE_PROBLEM');
export const RESOLVE_FOCUS = createRequestType('RESOLVE_FOCUS');
export const REOPEN_FOCUS = createRequestType('REOPEN_FOCUS');

export const GET_PATIENT_PHYSICAL_HISTORY = createRequestType(
  'GET_PATIENT_PHYSICAL_HISTORY'
);
export const ADD_PATIENT_PHYSICAL = createRequestType('ADD_PATIENT_PHYSICAL');

export const FETCH_HISTORY_PROBLEM = createRequestType('FETCH_HISTORY_PROBLEM');
export const UPDATE_PATIENT_FOCUS = createRequestType('UPDATE_PATIENT_FOCUS');
export const FETCH_PATIENT_FOCUS_BY_ID = createRequestType(
  'GET_PATIENT_FOCUS_BY_ID'
);
export const GET_FOCUS_HISTORY_BY_ID = createRequestType(
  'GET_FOCUS_HISTORY_BY_ID'
);

export const FETCH_PATIENT_FOCUS_LIST_BY_PERIOD = createRequestType(
  'FETCH_FOCUS_LIST_BY_PERIOD'
);
export const FETCH_VITAL_SIGN_BY_PERIOD = createRequestType(
  'FETCH_VITAL_SIGN_BY_PERIOD'
);
export const FETCH_VITAL_SIGN_LAST_DAY = createRequestType(
  'FETCH_VITAL_SIGN_LAST_DAY'
);
export const FETCH_VITAL_SIGN_BY_WARD = createRequestType(
  'FETCH_VITAL_SIGN_BY_WARD'
);

export { fetchVitalSignLastDayAction } from './nursingnote/vitalsign';

export const NN_LOOKUP_DIAGGROUP = createRequestType('NN_LOOKUP_DIAGGROUP');
export const NN_LOOKUP_DIAG_ITEMS = createRequestType('NN_LOOKUP_DIAG_ITEMS');
export const NN_LOOKUP_PROBLEM_LIST = createRequestType(
  'NN_LOOKUP_PROBLEM_LIST'
);

export const NN_LOOKUP_GOAL_ITEMS = createRequestType('NN_LOOKUP_GOAL_ITEMS');
export const NN_LOOKUP_ASSESSMENT = createRequestType('NN_LOOKUP_ASSESSMENT');

export const GET_FOCUS_ITEMS_INFO = createRequestType('GET_FOCUS_ITEMS_INFO');

export const UPDATE_DIAGGROUP = createRequestType('UPDATE_DIAGGROUP');
export const UPDATE_DIAGITEMS = createRequestType('UPDATE_DIAGITEMS');
export const UPDATE_FOCUS_ITEMS = createRequestType('UPDATE_FOCUS_ITEMS');

export const NEW_GOALITEM = createRequestType('NEW_GOALITEM');
export const UPDATE_GOALITEM = createRequestType('UPDATE_GOALITEM');
export const QUICK_ADD_GOALITEM = createRequestType('QUICK_ADD_GOALITEM');

export const NEW_ASSESSMENT = createRequestType('NEW_ASSESSMENT');
export const UPDATE_ASSESSMENT = createRequestType('UPDATE_ASSESSMENT');
export const QUICK_ADD_ASSESSMENT = createRequestType('QUICK_ADD_ASSESSMENT');

export const NEW_INTERVENTION = createRequestType('NEW_INTERVENTION');
export const UPDATE_INTERVENTION = createRequestType('UPDATE_INTERVENTION');
export const QUICK_ADD_INTERVENTION = createRequestType(
  'QUICK_ADD_INTERVENTION'
);

export const NEW_EVALUATION = createRequestType('NEW_EVALUATION');
export const UPDATE_EVALUATION = createRequestType('UPDATE_EVALUATION');
export const QUICK_ADD_EVALUATION = createRequestType('QUICK_ADD_EVALUATION');

export const NN_LOOKUP_INTERVENTION_LIST = createRequestType(
  'NN_LOOKUP_INTERVENTION_LIST'
);
export const NN_LOOKUP_EVALUATION_LIST = createRequestType(
  'NN_LOOKUP_EVALUATION_LIST'
);

export const FETCH_DTX_LIST = createRequestType('FETCH_DTX_LIST');
export const FETCH_DTX_HISTORY = createRequestType('FETCH_DTX_HISTORY');
export const ADD_NEW_DTX = createRequestType('ADD_NEW_DTX');

/// INTAKE & OUTPUT
export const GET_INITIAL_IO = createRequestType('GET_INITIAL_IO');
export const GET_CUSTOM_INTAKE_LIST = createRequestType(
  'GET_CUSTOM_INTAKE_LIST'
);
export const ADD_CUSTOM_INTAKE_ITEM = createRequestType(
  'ADD_CUSTOM_INTAKE_ITEM'
);
export const GET_CUSTOM_OUTPUT_LIST = createRequestType(
  'GET_CUSTOM_OUTPUT_LIST'
);
export const ADD_CUSTOM_OUTPUT_ITEM = createRequestType(
  'ADD_CUSTOM_OUTPUT_ITEM'
);
export const GET_CUSTOM_EXCRETE_LIST = createRequestType(
  'GET_CUSTOM_EXCRETE_LIST'
);
export const ADD_CUSTOM_EXCRETE_ITEM = createRequestType(
  'ADD_CUSTOM_EXCRETE_ITEM'
);

export const FETCH_IO_LIST = createRequestType('FETCH_IO_LIST');
export const FETCH_IO_HISTORY = createRequestType('FETCH_IO_HISTORY');
export const ADD_NEW_IO = createRequestType('ADD_NEW_IO');

export const FETCH_SELF_VITALSIGN_HISTORY = createRequestType(
  'FETCH_SELF_VITALSIGN_HISTORY'
);

/// MEDPLAN
export const GET_MEDICATION_PROFILE = createRequestType(
  'GET_MEDICATION_PROFILE'
);
export const GET_MEDICATION_PROFILE_STAT = createRequestType(
  'GET_MEDICATION_PROFILE_STAT'
);
export const GET_MEDICATION_DISPENSING = createRequestType(
  'GET_MEDICATION_DISPENSING'
);

export const DISPENSE_MEDICATION = createRequestType('DISPENSE_MEDICATION');
export const REMOVE_MED_DISPENSED = createRequestType('REMOVE_MED_DISPENSED');

export const GET_MEDPLAN_DETAIL = createRequestType('GET_MEDPLAN_DETAIL');
export const CHANGE_MEDPLAN_INTERVAL = createRequestType(
  'CHANGE_MEDPLAN_INTERVAL'
);
export const QUICK_SET_MEDPLAN_INTERVAL = createRequestType(
  'QUICK_SET_MEDPLAN_INTERVAL'
);
export const QUICK_REMOVE_MEDPLAN_INTERVAL = createRequestType(
  'QUICK_REMOVE_MEDPLAN_INTERVAL'
);

export const GET_MONITOR_ID = createRequestType('GET_MONITOR_ID');
export const GET_MONITOR_TOKEN = createRequestType('GET_MONITOR_TOKEN');
export const GET_MONITOR_CONFIG = createRequestType('GET_MONITOR_CONFIG');
export const GET_MONITOR_LIST = createRequestType('GET_MONITOR_LIST');
export const SET_MONITOR = createRequestType('SET_MONITOR');

export { loginAction } from './auth';

export {
  fetchInitWardAction,
  fetchCustomIntakeAction,
  fetchCustomOutputAction,
  fetchCustomExcreteAction
} from './lookup';

export {
  getMonitorIDAction,
  getMonitorTokenAction,
  getMonitorConfigAction,
  getMonitorListAction,
  updateMonitorItemAction
} from './monitor';

export {
  patientOwnerAction,
  patientStandingAction,
  addToWorkbench,
  getPatientHealthInfo,
  getPatientHealthVitalSign,
  getPatientAllergies,
  getPatientHealthLab,
  getPatientRecentMedication
} from './patient';

export const GET_DOCTOR_ORDER_HISTORY = createRequestType(
  'GET_DOCTOR_ORDER_HISTORY'
);
export const GET_INITIAL_DOCTOR_ORDER = createRequestType(
  'GET_INITIAL_DOCTOR_ORDER'
);
export const NEW_DOCTOR_ORDER = createRequestType('NEW_DOCTOR_ORDER');

export {
  getDoctorOrderHistoryAction,
  newDoctorOrderAction,
  getInitialDoctorOrderAction
} from './doctororder';
