// import { NewFocusForm } from "src/types/Form/focus";

import * as ActionConst from '../index'
import { action } from '../../libs/const'
import { NewFocusForm } from '../../types/nursing/focus'

export const fetchInitWardAction = {
  request: () => action(ActionConst.FETCH_INIT_WARD.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.FETCH_INIT_WARD.SUCCESS, { data: response.data.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.FETCH_INIT_WARD.FAILURE, { error })
}

export const fetchCustomIntakeAction = {
  request: () => action(ActionConst.GET_CUSTOM_INTAKE_LIST.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.GET_CUSTOM_INTAKE_LIST.SUCCESS, {
      data: response.data.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_CUSTOM_INTAKE_LIST.FAILURE, { error })
}

export const fetchCustomOutputAction = {
  request: () => action(ActionConst.GET_CUSTOM_OUTPUT_LIST.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.GET_CUSTOM_OUTPUT_LIST.SUCCESS, {
      data: response.data.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_CUSTOM_OUTPUT_LIST.FAILURE, { error })
}

export const fetchCustomExcreteAction = {
  request: () => action(ActionConst.GET_CUSTOM_EXCRETE_LIST.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.GET_CUSTOM_EXCRETE_LIST.SUCCESS, {
      data: response.data.data
    }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_CUSTOM_EXCRETE_LIST.FAILURE, { error })
}

export const addNewFocusAction = {
  request: (focus: NewFocusForm) =>
    action(ActionConst.ADD_NEW_FOCUS.REQUEST, { focus }),
  success: (_: string, response: any) =>
    action(ActionConst.ADD_NEW_FOCUS.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.ADD_NEW_FOCUS.FAILURE, { error }),
  reset: () => action(ActionConst.ADD_NEW_FOCUS.CLEAR)
}

export const removeFocusAction = {
  request: (focusId: string) =>
    action(ActionConst.REMOVE_FOCUS.REQUEST, { focus_id: focusId }),
  success: (_: string, response: any) =>
    action(ActionConst.REMOVE_FOCUS.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.REMOVE_FOCUS.FAILURE, { error }),
  reset: () => action(ActionConst.REMOVE_FOCUS.CLEAR)
}
