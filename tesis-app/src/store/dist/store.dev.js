"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = require("./reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.createStore)((0, _redux.combineReducers)({
  postReducer: _reducers.postReducer,
  DeviceReducer: _reducers.DeviceReducer,
  sadminReducer: _reducers.sadminReducer,
  DoctorReducer: _reducers.DoctorReducer,
  PatientReducer: _reducers.PatientReducer,
  ClinicReducer: _reducers.ClinicReducer,
  NotifyReducer: _reducers.NotifyReducer,
  SuscriberReducer: _reducers.SuscriberReducer
}), (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));

exports["default"] = _default;