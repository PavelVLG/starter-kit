import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as AuthAction from '../../../store/actions/actions'


export const useActions =()=>{
    const  dispatch = useDispatch()
    return bindActionCreators(AuthAction, dispatch)
}   