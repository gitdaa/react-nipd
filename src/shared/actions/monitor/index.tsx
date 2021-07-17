import * as ActionConst from '../index'
import { action } from '../../libs/const'
import { MonitorConfig } from '../../types'

export const getMonitorIDAction = {
  request: () => action(ActionConst.GET_MONITOR_ID.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.GET_MONITOR_ID.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_MONITOR_ID.FAILURE, { error })
}

export const getMonitorTokenAction = {
  request: (id: string) =>
    action(ActionConst.GET_MONITOR_TOKEN.REQUEST, { id }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_MONITOR_TOKEN.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_MONITOR_TOKEN.FAILURE, { error })
}

export const getMonitorConfigAction = {
  request: (id: string) =>
    action(ActionConst.GET_MONITOR_CONFIG.REQUEST, { id }),
  success: (_: string, response: any) =>
    action(ActionConst.GET_MONITOR_CONFIG.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_MONITOR_CONFIG.FAILURE, { error }),
  clear: () => action(ActionConst.GET_MONITOR_CONFIG.CLEAR)
}

export const getMonitorListAction = {
  request: () => action(ActionConst.GET_MONITOR_LIST.REQUEST),
  success: (_: string, response: any) =>
    action(ActionConst.GET_MONITOR_LIST.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.GET_MONITOR_LIST.FAILURE, { error })
}

export const updateMonitorItemAction = {
  request: (monitor: MonitorConfig) =>
    action(ActionConst.SET_MONITOR.REQUEST, { monitor }),
  success: (_: string, response: any) =>
    action(ActionConst.SET_MONITOR.SUCCESS, { data: response.data }),
  failure: (_: string, error: any) =>
    action(ActionConst.SET_MONITOR.FAILURE, { error })
}
