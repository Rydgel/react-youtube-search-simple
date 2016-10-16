"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoList = function VideoList(props) {
    return _react2.default.createElement(
        "ul",
        { className: "col-md-4 list-group" },
        props.videos.length
    );
};

exports.default = VideoList;

//# sourceMappingURL=video_list-compiled.js.map