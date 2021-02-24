import { FluidOutputItem } from '../nursing/vitalsign'

export interface LookupCustomOutputListRequest {
  isFetching: boolean
  data: FluidOutputItem[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}
