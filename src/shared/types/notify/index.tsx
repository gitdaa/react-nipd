import { Patient } from '../patient'

export interface FlashNotifyRequest {
  isFetching: boolean
  data: FlashNotifyItem[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}

/**
 * FlashNotifyItem
 * test
 */
export interface FlashNotifyItem {
  notify_id: string

  an: number

  ward: number

  type: string

  /**
   * @description
   */
  message: string

  /**
   * @description
   * - 1:
   * - 2:
   * - 3:
   * - 4:
   * - 5: สำคัญมาก
   */
  priority: number

  created_at: string

  expired_at: string | null

  force_expire: boolean

  /**
   * ไม่ลบออกเมื่อ Expire
   */
  force_strict: boolean

  read: boolean
}

export type FlashNotifyWithPatientInfo = FlashNotifyItem & Patient

export interface FlashNotifyBadgeRequest {
  isFetching: boolean
  data: FlashNotifyBadge[]
  error: boolean
  errorMessage: string | null
  expireAt: Date | null
}

export interface FlashNotifyBadge {
  an: number
  notification: number
  mar: number
  io: number
  dtx: number
  document: number
  nursingnote: number
  focuslist: number
}
