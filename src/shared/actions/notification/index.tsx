import { createRequestType } from '../../libs'

export const GET_PATIENT_NOTIFY_LIST = createRequestType('PT_NOTIFY_LIST')
export const GET_PATIENT_NOTIFY_HISTORY = createRequestType(
  'GET_PT_NOTIFY_HISTORY'
)
export const GET_PATIENT_NOTIFY_BADGE = createRequestType('G_PT_NOTIFY_BADGE')
export const SET_NOTIFY_READED = createRequestType('SET_NOTIFY_READED')
export const GET_NOTIFICATION_LIST = createRequestType('GET_NOTIFICATION_LIST')
