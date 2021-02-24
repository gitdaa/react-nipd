export interface User {
  name: string | null
  email: string | null
  doctor: number | null
  defaultWard: number
  permissions: UserPermissions
}

export interface UserInfo extends User {
  id: number
  last_login: string
  ward: number
  first_name: string
  last_name: string
  avatar: string
  created_at: string
  updated_at: string
}

export interface UserPermissions {
  nurse: boolean
  doctor: boolean
}

export interface UserSettings {
  loading: boolean
  updating: boolean
  message: string | null
  signature: UserSignature
}

export interface UserSignature {
  line1: string
  line2: string
  line3: string
}

export interface RecentAuth {
  data: UserInfo[]
}
