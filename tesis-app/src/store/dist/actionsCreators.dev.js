"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMysuscription = exports.getsNotify = exports.getsClinics = exports.getsNotifytype = exports.getdevice = exports.getListdevicebyuser = exports.getUsers = exports.getPost = exports.getAllMysuscribers = exports.getAllNotify = exports.getAllClinics = exports.getAllPatient = exports.getAllDoctors = exports.getAllSadmin = exports.getAllDeviceReducer = exports.getAllPosts = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = process.env.REACT_APP_API_URL;

var getAllPosts = function getAllPosts() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/me")).then(function (resp) {
      return dispatch({
        type: _actions.GET_ALL_POSTS,
        posts: resp.data
      });
    });
  };
};

exports.getAllPosts = getAllPosts;

var getAllDeviceReducer = function getAllDeviceReducer() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/1/devices")).then(function (resp) {
      return dispatch({
        type: GET_ALL_DEVICEREDUCER,
        devices: resp.data
      });
    });
  };
};

exports.getAllDeviceReducer = getAllDeviceReducer;

var getAllSadmin = function getAllSadmin() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users?page=1&pageSize=10&filter=")).then(function (resp) {
      return dispatch({
        type: GET_ALL_SADMINREDUCER,
        sadmin: resp.data
      });
    });
  };
};

exports.getAllSadmin = getAllSadmin;

var getAllDoctors = function getAllDoctors() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/doctor")).then(function (resp) {
      return dispatch({
        type: GET_ALL_DOCTORREDUCER,
        doctors: resp.data
      });
    });
  };
};

exports.getAllDoctors = getAllDoctors;

var getAllPatient = function getAllPatient() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/patient")).then(function (resp) {
      return dispatch({
        type: GET_ALL_PATIENTREDUCER,
        patient: resp.data
      });
    });
  };
};

exports.getAllPatient = getAllPatient;

var getAllClinics = function getAllClinics() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/clinics?page=1&pageSize=10&filter=")).then(function (resp) {
      return dispatch({
        type: GET_ALL_CLINICSREDUCER,
        clinics: resp.data
      });
    });
  };
};

exports.getAllClinics = getAllClinics;

var getAllNotify = function getAllNotify() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/clinics?page=1&pageSize=10&filter=")).then(function (resp) {
      return dispatch({
        type: GET_ALL_NOTIFYREDUCER,
        notifys: resp.data
      });
    });
  };
};

exports.getAllNotify = getAllNotify;

var getAllMysuscribers = function getAllMysuscribers() {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/1/notifications/arrived?page=1&pageSize=10&filter=&startDate&endDate")).then(function (resp) {
      return dispatch({
        type: GET_ALL_MYSUSCRIBERS,
        mysuscribers: resp.data
      });
    });
  };
};

exports.getAllMysuscribers = getAllMysuscribers;

var getPost = function getPost(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users?page=1&pageSize=10&filter=").concat(id)).then(function (resp) {
      return dispatch({
        type: GET_POST,
        post: resp.data
      });
    });
  };
};

exports.getPost = getPost;

var getUsers = function getUsers(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/385c5b50-e236-4bff-b1e4-ab3679d91541").concat(id)).then(function (resp) {
      return dispatch({
        type: _actions.GET_USERS,
        users: resp.data
      });
    });
  };
};

exports.getUsers = getUsers;

var getListdevicebyuser = function getListdevicebyuser(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/").concat(id, "/devices")).then(function (resp) {
      return dispatch({
        type: _actions.GET_LISTDEVICESBYUSER,
        listdevicebyuser: resp.data
      });
    });
  };
};

exports.getListdevicebyuser = getListdevicebyuser;

var getdevice = function getdevice(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/").concat(id)).then(function (resp) {
      return dispatch({
        type: GET_DEVICEREDUCER,
        device: resp.data
      });
    });
  };
};

exports.getdevice = getdevice;

var getsNotifytype = function getsNotifytype(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/notifications/").concat(id)).then(function (resp) {
      return dispatch({
        type: GET_NOTIFYTYPEREDUCER,
        notifytype: resp.data
      });
    });
  };
};

exports.getsNotifytype = getsNotifytype;

var getsClinics = function getsClinics(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/clinics/").concat(id)).then(function (resp) {
      return dispatch({
        type: _actions.GET_CLINICSREDUCER,
        clinic: resp.data
      });
    });
  };
};

exports.getsClinics = getsClinics;

var getsNotify = function getsNotify(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/").concat(id, "/notifications/arrived?page=1&pageSize=10&filter=&startDate&endDate")).then(function (resp) {
      return dispatch({
        type: _actions.GET_NOTIFYREDUCER,
        notify: resp.data
      });
    });
  };
};

exports.getsNotify = getsNotify;

var getMysuscription = function getMysuscription(id) {
  return function (dispatch) {
    _axios["default"].get("".concat(API_URL, "/users/2/subscriptions?page=1&pageSize=10&filter=").concat(id)).then(function (resp) {
      return dispatch({
        type: _actions.GET_MYSUSCRIPTION,
        mysuscription: resp.data
      });
    });
  };
};

exports.getMysuscription = getMysuscription;