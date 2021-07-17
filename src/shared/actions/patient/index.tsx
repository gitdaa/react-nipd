import * as ActionConst from '../index'
import { action } from '../../libs/const'
import { Patient } from '../../types'

/// used
export const patientOwnerAction = {
  request: () => action(ActionConst.GET_PATIENT_OWNER.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.GET_PATIENT_OWNER.SUCCESS, { data: response }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_PATIENT_OWNER.FAILURE, { error })
}

export const patientStandingAction = {
  request: (ward: number, date: Date, period?: number) =>
    action(ActionConst.GET_PATIENT_STANDING.REQUEST, { ward, date, period }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_PATIENT_STANDING.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_PATIENT_STANDING.FAILURE, { error })
}

export const addToWorkbench = {
  request: (patient: Patient) =>
    action(ActionConst.ADD_TO_DESK.REQUEST, { patient }),
  success: (_: string, response: any) =>
    action(ActionConst.ADD_TO_DESK.SUCCESS, { data: response }),
  failure: (_: string, error: any) =>
    action(ActionConst.ADD_TO_DESK.FAILURE, { error }),
  clear: () => action(ActionConst.ADD_TO_DESK.CLEAR)
}

export const getPatientHealthInfo = {
  request: (accessKey: string) =>
    action(ActionConst.GET_PATIENT_HEALTH.REQUEST, { access_key: accessKey }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_PATIENT_HEALTH.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_PATIENT_HEALTH.FAILURE, { error }),
  clear: () => action(ActionConst.GET_PATIENT_HEALTH.CLEAR)
}

export const getPatientHealthVitalSign = {
  request: (accessKey: string) =>
    action(ActionConst.GET_PATIENT_HEALTH_VITAL.REQUEST, {
      access_key: accessKey
    }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_PATIENT_HEALTH_VITAL.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_PATIENT_HEALTH_VITAL.FAILURE, { error }),
  clear: () => action(ActionConst.GET_PATIENT_HEALTH_VITAL.CLEAR)
}

export const getPatientAllergies = {
  request: (accessKey: string) =>
    action(ActionConst.GET_PATIENT_ALLERGIES.REQUEST, {
      access_key: accessKey
    }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_PATIENT_ALLERGIES.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_PATIENT_ALLERGIES.FAILURE, { error }),
  clear: () => action(ActionConst.GET_PATIENT_ALLERGIES.CLEAR)
}

export const getPatientHealthLab = {
  request: (accessKey: string) =>
    action(ActionConst.GET_PATIENT_HEALTH_LAB.REQUEST, {
      access_key: accessKey
    }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_PATIENT_HEALTH_LAB.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_PATIENT_HEALTH_LAB.FAILURE, { error }),
  clear: () => action(ActionConst.GET_PATIENT_HEALTH_LAB.CLEAR)
}

export const getPatientRecentMedication = {
  request: (accessKey: string) =>
    action(ActionConst.GET_PATIENT_RECENT_MEDICATION.REQUEST, {
      access_key: accessKey
    }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_PATIENT_RECENT_MEDICATION.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_PATIENT_RECENT_MEDICATION.FAILURE, { error }),
  clear: () => action(ActionConst.GET_PATIENT_RECENT_MEDICATION.CLEAR)
}
