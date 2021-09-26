import { type } from 'os';
import {combineReducers} from 'redux';
import { reducerAuth } from './reducerAuth';


export const rootReducer = combineReducers({
  initState: reducerAuth
})

export type T_RootState = ReturnType<typeof rootReducer>