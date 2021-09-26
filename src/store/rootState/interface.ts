export interface I_InitState{
    loading: boolean,
    token: string | null,
    error: boolean,
    userInfo: I_User | null,
}

export interface I_User{
    name: string | null ,
    login: string  | null  ,
    password?: string  | null ,
    id: number  | null 
}

export enum E_CaseAuth{
    IS_LOADING = 'IS_LOADING',
    US_TOKEN = 'US_TOKEN',
    USER_INFO = 'USER_INFO',
    INIT_APP = 'INIT_APP',
}

export type T_actionsInit = I_UserInfo | I_loading | I_usToken |I_initApp
interface I_loading {
  type: E_CaseAuth.IS_LOADING
  payload: I_InitState['loading']
}
interface I_usToken {
  type: E_CaseAuth.US_TOKEN
  payload: I_InitState['token']
}
interface I_UserInfo {
  type: E_CaseAuth.USER_INFO
  payload: I_InitState['userInfo']
}
interface I_initApp {
  type: E_CaseAuth.INIT_APP
}