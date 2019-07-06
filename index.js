"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useValue = exports.ContextProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var HooksContext = (0, _react.createContext)();

var ContextProvider = function ContextProvider(_ref) {
    var children = _ref.children,
        value = _ref.value;
    return _react.default.createElement(HooksContext.Provider, {
        value: value
    }, children);
};

exports.ContextProvider = ContextProvider;

var useValue = function useValue() {
    var value = (0, _react.useContext)(HooksContext);
    return value;
};

exports.useValue = useValue;