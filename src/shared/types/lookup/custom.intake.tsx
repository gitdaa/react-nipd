import { IntakeItem } from '../nursing/vitalsign'

export interface LookupCustomIntakeListRequest {
  isFetching: boolean
  data: IntakeItem[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
