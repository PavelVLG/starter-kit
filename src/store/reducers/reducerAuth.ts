import initState from "../rootState";
import { I_InitState, T_actionsInit, E_CaseAuth } from "../rootState/interface"; 


export const reducerAuth = (state = initState, action: T_actionsInit):I_InitState => {

  switch (action.type) {
    case E_CaseAuth.IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case E_CaseAuth.US_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case E_CaseAuth.USER_INFO:
        return{
            ...state,
            userInfo: action.payload,
        }
    case E_CaseAuth.INIT_APP:
      return{
        ...state,
      }
    default:
      return state;
  }
};