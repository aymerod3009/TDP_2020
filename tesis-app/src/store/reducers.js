import {GET_ALL_POSTS, GET_POST, GET_ALL_DEVICEREDUCER, GET_DEVICEREDUCER, GET_ALL_SADMINREDUCER, GET_ALL_DOCTORREDUCER, GET_ALL_PATIENTREDUCER, GET_ALL_CLINICSREDUCER, GET_CLINICSREDUCER, GET_ALL_NOTIFYREDUCER, GET_NOTIFYREDUCER, GET_ALL_MYSUSCRIBERS, GET_MYSUSCRIPTION} from "./actions"

export const postReducer = (state = {}, action) => {
  if(action.type === GET_ALL_POSTS){
      return{
        ...state,
        posts:action.posts
      }
  }

  if(action.type=== GET_POST){
    return{
      ...state,
      post: action.post
    }
  }
  return state
}
export const DeviceReducer = (state = {}, action) => {
  if(action.type === GET_ALL_DEVICEREDUCER){
    return{
      ...state,
      devices: action.devices
    }
  }
  if(action.type===GET_DEVICEREDUCER){
    return{
      ...state,
      device: action.device
    }
  }
  return state
}
export const sadminReducer = (state = {}, action) => {
  if(action.type ===GET_ALL_SADMINREDUCER){
    return{
      ...state,
      sadmin: action.sadmin
    }
  }
  return state
}
export const DoctorReducer = (state = {}, action) => {
  if(action.type === GET_ALL_DOCTORREDUCER){
    return{
      ...state,
      doctors:action.doctors
    }
  }
  
  return state
}
export const PatientReducer = (state = {}, action) => {
  if(action.type === GET_ALL_PATIENTREDUCER){
    return{
      ...state,
      patient:action.patient
    }
  }
  return state
}

export const ClinicReducer = (state = {}, action) => {
  if(action.type === GET_ALL_CLINICSREDUCER){
    return{
      ...state,
      clinics: action.clinics
    }
  }
  if(action.type=== GET_CLINICSREDUCER){
    return{
      ...state,
      clinic: action.clinic
    }
  }
  return state
}
export const NotifyReducer = (state = {}, action) => {
  if(action.type===GET_ALL_NOTIFYREDUCER){
    return{
      ...state,
      notifys: action.notifys
    }
  }
  if(action.type===GET_NOTIFYREDUCER){
    return{
      ...state,
      notify:action.notify
    }
  }
  return state
}
export const SuscriberReducer = (state = [], action) => {
  if(action.type===GET_ALL_MYSUSCRIBERS){
    return{
      ...state,
      mysuscribers: action.mysuscribers
    }
  }
  if(action.type===GET_MYSUSCRIPTION){
    return{
      ...state,
      mysuscription: action.mysuscription
    }
  }
  return state
}
