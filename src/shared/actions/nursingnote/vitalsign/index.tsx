import * as ActionConst from '../../index';
import { action } from '../../../libs/const';
// import { Patient } from '../../types';

export const fetchVitalSignLastDayAction = {
  request: () => action(ActionConst.FETCH_VITAL_SIGN_LAST_DAY.REQUEST, {}),
  success: (_: string, response: any) =>
    action(ActionConst.FETCH_VITAL_SIGN_LAST_DAY.SUCCESS, {
      data: response.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.FETCH_VITAL_SIGN_LAST_DAY.FAILURE, { error }),
  cancel: () => action(ActionConst.FETCH_VITAL_SIGN_LAST_DAY.CANCEL)
};
