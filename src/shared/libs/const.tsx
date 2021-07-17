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

export interface XStringValidator {
  isAcceptable(s: string): boolean
}

export const numberRegexp = /^[0-9]+$/

export const ZipCodeValidator: XStringValidator = {
  isAcceptable: (s: string) => s.length === 5
}
