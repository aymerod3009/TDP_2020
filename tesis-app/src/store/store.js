import { createStore,combineReducers,applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {postReducer,
        DeviceReducer,
        sadminReducer,
        DoctorReducer,
        PatientReducer,
        ClinicReducer,
        NotifyReducer} from "./reducers"

export default createStore(
    combineReducers(postReducer,DeviceReducer,sadminReducer,DoctorReducer,PatientReducer,ClinicReducer,NotifyReducer),
    composeWithDevTools(applyMiddleware(thunk))

)
