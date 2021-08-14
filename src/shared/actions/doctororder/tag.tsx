/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as ActionConst from '../index';
import { action } from '../../libs/const';
import { PatientTagItem } from '../../types/doctororder/tag';
import { ServerResponse, ErrorResponse } from '../../types';

export const getDoctorTagByWardAction = {
  request: (ward: number | undefined) =>
    action(ActionConst.GET_DOCTOR_TAG_BY_WARD.REQUEST, { ward }),
  success: (_: string, response: ServerResponse<PatientTagItem[]>) =>
    action(ActionConst.GET_DOCTOR_TAG_BY_WARD.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: ErrorResponse) =>
    action(ActionConst.GET_DOCTOR_TAG_BY_WARD.FAILURE, { error }),
  clear: () => action(ActionConst.GET_DOCTOR_TAG_BY_WARD.CLEAR)
};

export const getDoctorTagByAnAction = {
  request: () => action(ActionConst.GET_DOCTOR_TAG_BY_AN.REQUEST),
  success: (_: string, response: ServerResponse<PatientTagItem[]>) =>
    action(ActionConst.GET_DOCTOR_TAG_BY_AN.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: ErrorResponse) =>
    action(ActionConst.GET_DOCTOR_TAG_BY_AN.FAILURE, { error }),
  clear: () => action(ActionConst.GET_DOCTOR_TAG_BY_AN.CLEAR)
};

export const addDoctorTagAction = {
  request: (tag: PatientTagItem) =>
    action(ActionConst.INSERT_DOCTOR_TAG.REQUEST, { tag }),
  success: (_: string, response: ServerResponse<PatientTagItem[]>) =>
    action(ActionConst.INSERT_DOCTOR_TAG.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: ErrorResponse) =>
    action(ActionConst.INSERT_DOCTOR_TAG.FAILURE, { error }),
  clear: () => action(ActionConst.INSERT_DOCTOR_TAG.CLEAR)
};

export const updateDoctorTagAction = {
  request: (tag: PatientTagItem) =>
    action(ActionConst.UPDATE_DOCTOR_TAG.REQUEST, { tag }),
  success: (_: string, response: ServerResponse<PatientTagItem[]>) =>
    action(ActionConst.UPDATE_DOCTOR_TAG.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: ErrorResponse) =>
    action(ActionConst.UPDATE_DOCTOR_TAG.FAILURE, { error }),
  clear: () => action(ActionConst.UPDATE_DOCTOR_TAG.CLEAR)
};

export const removeDoctorTagAction = {
  request: (tag: PatientTagItem) =>
    action(ActionConst.REMOVE_DOCTOR_TAG.REQUEST, { tag }),
  success: (_: string, response: ServerResponse<PatientTagItem[]>) =>
    action(ActionConst.REMOVE_DOCTOR_TAG.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: ErrorResponse) =>
    action(ActionConst.REMOVE_DOCTOR_TAG.FAILURE, { error }),
  clear: () => action(ActionConst.REMOVE_DOCTOR_TAG.CLEAR)
};
