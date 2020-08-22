import Axios from "axios"
import { GET_ALL_POSTS } from "./actions"

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
                posts: resp.data
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
                notify: resp.data
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