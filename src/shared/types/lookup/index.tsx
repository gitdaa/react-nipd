import {
  DiagGroup as diagGroup,
  LookupDiagGroupRequest as lookupDiagGroupRequest
} from './diaggroup'

export type LookupDiagGroupRequest = lookupDiagGroupRequest
export type DiagGroup = diagGroup

export interface OptionsList {
  label: string
  value: string
  disabled?: boolean
}
