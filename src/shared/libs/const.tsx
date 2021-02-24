import { RequestType } from '../types'

export function action<ActionType>(
  type: string,
  payload: ActionType | any = {}
) {
  return { type, ...payload }
}

export function createRequestType(base: string): RequestType {
  return {
    REQUEST: `${base}_REQUEST`,
    SUCCESS: `${base}_SUCCESS`,
    FAILURE: `${base}_FAILURE`,
    LOADMORE: `${base}_LOADMORE`,
    CANCEL: `${base}_CANCEL`,
    CLEAR: `${base}_CLEAR`
  }
}
