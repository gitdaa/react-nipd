import * as ActionConst from '../index';
import { action } from '../../libs/const';
import { ClinicalSummaryDischarge } from '../../types/doctororder';

export const getClinicalSummaryDischargeAction = {
  request: () => action(ActionConst.GET_CLINICAL_SUMMARY_DISCHARGE.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.GET_CLINICAL_SUMMARY_DISCHARGE.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_CLINICAL_SUMMARY_DISCHARGE.FAILURE, { error }),
  clear: () => action(ActionConst.GET_CLINICAL_SUMMARY_DISCHARGE.CLEAR)
};

export const updateClinicalSummaryDischargeAction = {
  request: (payload: ClinicalSummaryDischarge) =>
    action(ActionConst.UPDATE_CLINICAL_SUMMARY_DISCHARGE.REQUEST, {
      payload
    }),
  success: (_: string, response: any) =>
    action(ActionConst.UPDATE_CLINICAL_SUMMARY_DISCHARGE.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.UPDATE_CLINICAL_SUMMARY_DISCHARGE.FAILURE, { error }),
  clear: () => action(ActionConst.UPDATE_CLINICAL_SUMMARY_DISCHARGE.CLEAR)
};
