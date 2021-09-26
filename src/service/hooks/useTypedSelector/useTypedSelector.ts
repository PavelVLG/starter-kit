import { TypedUseSelectorHook, useSelector } from "react-redux";
import { T_RootState } from "../../../store/reducers/rootReducer";


export const useTypedSelector: TypedUseSelectorHook<T_RootState> = useSelector