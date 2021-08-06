import * as ActionConst from '../index';
import { action } from '../../libs/const';

export const getDoctorOrderHistoryAction = {
  request: (accessKey: string) =>
    action(ActionConst.GET_DOCTOR_ORDER_HISTORY.REQUEST, {
      access_key: accessKey
    }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_DOCTOR_ORDER_HISTORY.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_DOCTOR_ORDER_HISTORY.FAILURE, { error }),
  clear: () => action(ActionConst.GET_DOCTOR_ORDER_HISTORY.CLEAR)
};

export const getInitialDoctorOrderAction = {
  request: (accessKey: string, formId: string) =>
    action(ActionConst.GET_INITIAL_DOCTOR_ORDER.REQUEST, {
      access_key: accessKey,
      form_id: formId
    }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_INITIAL_DOCTOR_ORDER.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_INITIAL_DOCTOR_ORDER.FAILURE, { error }),
  clear: () => action(ActionConst.GET_INITIAL_DOCTOR_ORDER.CLEAR)
};

export const newDoctorOrderAction = {
  request: (payload: any) =>
    action(ActionConst.NEW_DOCTOR_ORDER.REQUEST, {
      payload
    }),
  success: (_: string, response: any) =>
    action(ActionConst.NEW_DOCTOR_ORDER.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.NEW_DOCTOR_ORDER.FAILURE, { error }),
  clear: () => action(ActionConst.NEW_DOCTOR_ORDER.CLEAR)
};
