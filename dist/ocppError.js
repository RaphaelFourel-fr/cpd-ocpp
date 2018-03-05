'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_GENERICERROR = exports.ERROR_TYPECONSTRAINTVIOLATION = exports.ERROR_OCCURENCECONSTRAINTVIOLATION = exports.ERROR_PROPERTYCONSTRAINTVIOLATION = exports.ERROR_FORMATIONVIOLATION = exports.ERROR_SECURITYERROR = exports.ERROR_PROTOCOLERROR = exports.ERROR_INTERNALERROR = exports.ERROR_NOTSUPPORTED = exports.ERROR_NOTIMPLEMENTED = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Requested Action is not known by receiver
var ERROR_NOTIMPLEMENTED = exports.ERROR_NOTIMPLEMENTED = 'NotImplemented';

// Requested Action is recognized but not supported by the receiver
var ERROR_NOTSUPPORTED = exports.ERROR_NOTSUPPORTED = 'NotSupported';

// An internal error occurred and the receiver was not able to process the requested Action successfully
var ERROR_INTERNALERROR = exports.ERROR_INTERNALERROR = 'InternalError';

// Payload for Action is incomplete
var ERROR_PROTOCOLERROR = exports.ERROR_PROTOCOLERROR = 'ProtocolError';

// During the processing of Action a security issue occurred preventing receiver from completing the Action successfully
var ERROR_SECURITYERROR = exports.ERROR_SECURITYERROR = 'SecurityError';

// Payload for Action is syntactically incorrect or not conform the PDU structure for Action
var ERROR_FORMATIONVIOLATION = exports.ERROR_FORMATIONVIOLATION = 'FormationViolation';

// Payload is syntactically correct but at least one field contains an invalid value
var ERROR_PROPERTYCONSTRAINTVIOLATION = exports.ERROR_PROPERTYCONSTRAINTVIOLATION = 'PropertyConstraintViolation';

// Payload for Action is syntactically correct but at least one of the fields violates occurence constraints
var ERROR_OCCURENCECONSTRAINTVIOLATION = exports.ERROR_OCCURENCECONSTRAINTVIOLATION = 'OccurenceConstraintViolation';

// Payload for Action is syntactically correct but at least one of the fields violates data type constraints (e.g. “somestring”: 12)
var ERROR_TYPECONSTRAINTVIOLATION = exports.ERROR_TYPECONSTRAINTVIOLATION = 'TypeConstraintViolation';

// Any other error not covered by the previous ones
var ERROR_GENERICERROR = exports.ERROR_GENERICERROR = 'GenericError';

var OCPPError = function OCPPError(code, message, details) {
  (0, _classCallCheck3.default)(this, OCPPError);

  this.code = code;
  this.message = message;
  this.details = details;
};

exports.default = OCPPError;
//# sourceMappingURL=ocppError.js.map