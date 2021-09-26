import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer";
import { appSaga } from "./sagas/saga";
import { E_CaseAuth } from "./rootState/interface";

const composeDevTools = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
    rootReducer,
    composeDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(appSaga);

store.dispatch({ type: E_CaseAuth.INIT_APP });