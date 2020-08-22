"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuscriberReducer = exports.NotifyReducer = exports.ClinicReducer = exports.PatientReducer = exports.DoctorReducer = exports.sadminReducer = exports.DeviceReducer = exports.postReducer = void 0;

var _actions = require("./actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_POSTS) {
    return _objectSpread({}, state, {
      posts: action.posts
    });
  }

  if (action.type === _actions.GET_POST) {
    return _objectSpread({}, state, {
      post: action.post
    });
  }

  return state;
};

exports.postReducer = postReducer;

var DeviceReducer = function DeviceReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_DEVICEREDUCER) {
    return _objectSpread({}, state, {
      devices: action.devices
    });
  }

  if (action.type === _actions.GET_DEVICEREDUCER) {
    return _objectSpread({}, state, {
      device: action.device
    });
  }

  return state;
};

exports.DeviceReducer = DeviceReducer;

var sadminReducer = function sadminReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_SADMINREDUCER) {
    return _objectSpread({}, state, {
      sadmin: action.sadmin
    });
  }

  return state;
};

exports.sadminReducer = sadminReducer;

var DoctorReducer = function DoctorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_DOCTORREDUCER) {
    return _objectSpread({}, state, {
      doctors: action.doctors
    });
  }

  return state;
};

exports.DoctorReducer = DoctorReducer;

var PatientReducer = function PatientReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_PATIENTREDUCER) {
    return _objectSpread({}, state, {
      patient: action.patient
    });
  }

  return state;
};

exports.PatientReducer = PatientReducer;

var ClinicReducer = function ClinicReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_CLINICSREDUCER) {
    return _objectSpread({}, state, {
      clinics: action.clinics
    });
  }

  if (action.type === _actions.GET_CLINICSREDUCER) {
    return _objectSpread({}, state, {
      clinic: action.clinic
    });
  }

  return state;
};

exports.ClinicReducer = ClinicReducer;

var NotifyReducer = function NotifyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_NOTIFYREDUCER) {
    return _objectSpread({}, state, {
      notifys: action.notifys
    });
  }

  if (action.type === _actions.GET_NOTIFYREDUCER) {
    return _objectSpread({}, state, {
      notify: action.notify
    });
  }

  return state;
};

exports.NotifyReducer = NotifyReducer;

var SuscriberReducer = function SuscriberReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.GET_ALL_MYSUSCRIBERS) {
    return _objectSpread({}, state, {
      mysuscribers: action.mysuscribers
    });
  }

  if (action.type === _actions.GET_MYSUSCRIPTION) {
    return _objectSpread({}, state, {
      mysuscription: action.mysuscription
    });
  }

  return state;
};

exports.SuscriberReducer = SuscriberReducer;