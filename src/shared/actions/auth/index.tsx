import * as ActionConst from '../index'
import { action } from '../../libs/const'

export const loginAction = {
  request: (username: string, password: string) =>
    action(ActionConst.LOGIN.REQUEST, { email: username, password }),
  success: (_: string, response: any) =>
    action(ActionConst.LOGIN.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.LOGIN.FAILURE, { error }),
  clear: () => action(ActionConst.LOGIN.CLEAR)
}
