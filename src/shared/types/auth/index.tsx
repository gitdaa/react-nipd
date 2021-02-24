export interface AuthState {
  authPending: boolean
  loggedIn: boolean // login passed
  loggedInSuccess: boolean // succesful load user setting
  loginError: boolean
  errorMessage: string | null
  errorEntity: {
    email: string[]
    password: string[]
  }
  isMonitor: boolean
  authToken: string | null
  refreshToken: string | null
  tokenIsValid: boolean
  switchUser: boolean
  pendingRefreshingToken: boolean
}
