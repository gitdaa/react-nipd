import { ExcreteItem } from '../nursing/vitalsign'

export interface LookupCustomExcreteListRequest {
  isFetching: boolean
  data: ExcreteItem[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
