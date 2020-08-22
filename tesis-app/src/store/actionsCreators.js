import Axios from "axios"
import { GET_ALL_POSTS, GET_USERS, GET_LISTDEVICESBYUSER, GET_CLINICSREDUCER, GET_NOTIFYREDUCER, GET_MYSUSCRIPTION } from "./actions"

const API_URL= process.env.REACT_APP_API_URL

export const getAllPosts=() => dispatch => {
    Axios.get(`${API_URL}/users/me`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_POSTS,
                posts: resp.data
            })
        }
    )
}

export const getAllDeviceReducer=() => dispatch => {
    Axios.get(`${API_URL}/users/1/devices`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_DEVICEREDUCER,
                devices: resp.data
            })
        }
    )
}
export const getAllSadmin=() => dispatch => {
    Axios.get(`${API_URL}/users?page=1&pageSize=10&filter=`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_SADMINREDUCER,
                sadmin: resp.data
            })
        }
    )
}

export const getAllDoctors=() => dispatch => {
    Axios.get(`${API_URL}/users/doctor`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_DOCTORREDUCER,
                doctors: resp.data
            })
        }
    )
}
export const getAllPatient=() => dispatch => {
    Axios.get(`${API_URL}/users/patient`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_PATIENTREDUCER,
                patient: resp.data
            })
        }
    )
}
export const getAllClinics=() => dispatch => {
    Axios.get(`${API_URL}/clinics?page=1&pageSize=10&filter=`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_CLINICSREDUCER,
                clinics: resp.data
            })
        }
    )
}
export const getAllNotify=() => dispatch => {
    Axios.get(`${API_URL}/clinics?page=1&pageSize=10&filter=`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_NOTIFYREDUCER,
                notifys: resp.data
            })
        }
    )
}
export const getAllMysuscribers=() => dispatch => {
    Axios.get(`${API_URL}/users/1/notifications/arrived?page=1&pageSize=10&filter=&startDate&endDate`)
    .then(
        resp=>{
            return dispatch({
                type: GET_ALL_MYSUSCRIBERS,
                mysuscribers: resp.data
            })
        }
    )
}

export const getPost=(id) => dispatch => {
    Axios.get(`${API_URL}/users?page=1&pageSize=10&filter=${id}`)
    .then(
        resp=>{
            return dispatch({
                type: GET_POST,
                post: resp.data
            })
        }
    )
}

export const getUsers=(id) => dispatch => {
    Axios.get(`${API_URL}/users/385c5b50-e236-4bff-b1e4-ab3679d91541${id}`)
    .then(
        resp=>{
            return dispatch({
                type: GET_USERS,
                users: resp.data
            })
        }
    )
}

export const getListdevicebyuser=(id) => dispatch => {
    Axios.get(`${API_URL}/users/${id}/devices`)
    .then(
        resp=>{
            return dispatch({
                type: GET_LISTDEVICESBYUSER,
                listdevicebyuser: resp.data
            })
        }
    )
}

export const getdevice=(id) => dispatch => {
    Axios.get(`${API_URL}/users/${id}`)
    .then(
        resp=>{
            return dispatch({
                type: GET_DEVICEREDUCER,
                device: resp.data
            })
        }
    )
}

export const getsNotifytype=(id) => dispatch => {
    Axios.get(`${API_URL}/notifications/${id}`)
    .then(
        resp=>{
            return dispatch({
                type: GET_NOTIFYTYPEREDUCER,
                notifytype: resp.data
            })
        }
    )
}

export const getsClinics=(id) => dispatch => {
    Axios.get(`${API_URL}/clinics/${id}`)
    .then(
        resp=>{
            return dispatch({
                type: GET_CLINICSREDUCER,
                clinic: resp.data
            })
        }
    )
}

export const getsNotify=(id) => dispatch => {
    Axios.get(`${API_URL}/users/${id}/notifications/arrived?page=1&pageSize=10&filter=&startDate&endDate`)
    .then(
        resp=>{
            return dispatch({
                type: GET_NOTIFYREDUCER,
                notify: resp.data
            })
        }
    )
}

export const getMysuscription=(id) => dispatch => {
    Axios.get(`${API_URL}/users/2/subscriptions?page=1&pageSize=10&filter=${id}`)
    .then(
        resp=>{
            return dispatch({
                type: GET_MYSUSCRIPTION,
                mysuscription: resp.data
            })
        }
    )
}
