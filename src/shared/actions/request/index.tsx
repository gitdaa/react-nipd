// import { NewFocusForm } from "src/types/Form/focus";

import { ADD_NEW_FOCUS, REMOVE_FOCUS } from '../index'
import { action } from '../../libs/const'
import { NewFocusForm } from '../../types/nursing/focus'

export const addNewFocusAction = {
  request: (focus: NewFocusForm) => action(ADD_NEW_FOCUS.REQUEST, { focus }),
  success: (_: string, response: any) =>
    action(ADD_NEW_FOCUS.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) => action(ADD_NEW_FOCUS.FAILURE, { error }),
  reset: () => action(ADD_NEW_FOCUS.CLEAR)
}

export const removeFocusAction = {
  request: (focusId: number) =>
    action(REMOVE_FOCUS.REQUEST, { focus_id: focusId }),
  success: (_: string, response: any) =>
    action(REMOVE_FOCUS.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) => action(REMOVE_FOCUS.FAILURE, { error }),
  reset: () => action(REMOVE_FOCUS.CLEAR)
}
