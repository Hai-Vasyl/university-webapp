/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/context/isAuth.ts":
/*!**********************************!*\
  !*** ./server/context/isAuth.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);


(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();
var JWT_SECRET = process.env.JWT_SECRET;

var isAuth = function isAuth(req) {
  var auth = req && req.headers && req.headers.authorization;
  var authDenied = {
    auth: false
  };

  if (!auth) {
    return authDenied;
  }

  var token = auth.split(" ")[1];

  if (!token) {
    return authDenied;
  }

  var decodedToken;

  try {
    var _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET),
        userId = _jwt$verify.userId;

    decodedToken = userId;
  } catch (error) {
    return authDenied;
  }

  if (!decodedToken) {
    return authDenied;
  }

  return {
    auth: true,
    userId: decodedToken
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAuth);

/***/ }),

/***/ "./server/modules/messageTypes.ts":
/*!****************************************!*\
  !*** ./server/modules/messageTypes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "types": () => (/* binding */ types)
/* harmony export */ });
var types = {
  success: {
    keyWord: "success"
  },
  warning: {
    keyWord: "warning"
  },
  error: {
    keyWord: "error"
  }
};

/***/ }),

/***/ "./server/schema/helpers/randomColor.ts":
/*!**********************************************!*\
  !*** ./server/schema/helpers/randomColor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColor": () => (/* binding */ getColor)
/* harmony export */ });
var getColor = function getColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

/***/ }),

/***/ "./server/schema/helpers/upload.ts":
/*!*****************************************!*\
  !*** ./server/schema/helpers/upload.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadBuffer": () => (/* binding */ uploadBuffer),
/* harmony export */   "uploadFile": () => (/* binding */ uploadFile),
/* harmony export */   "deleteFile": () => (/* binding */ deleteFile),
/* harmony export */   "updateFile": () => (/* binding */ updateFile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sharp */ "sharp");
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/node */ "@sentry/node");
/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sentry_node__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var imagemin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! imagemin */ "imagemin");
/* harmony import */ var imagemin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(imagemin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var imagemin_mozjpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! imagemin-mozjpeg */ "imagemin-mozjpeg");
/* harmony import */ var imagemin_mozjpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(imagemin_mozjpeg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_8__);









(0,dotenv__WEBPACK_IMPORTED_MODULE_7__.config)();
var _process$env = process.env,
    AWS_ID = _process$env.AWS_ID,
    AWS_SECRET = _process$env.AWS_SECRET;
var s3 = new (aws_sdk__WEBPACK_IMPORTED_MODULE_8___default().S3)({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET
});

var getInitParams = function getInitParams(filename, createReadStream, Bucket) {
  return {
    ACL: "public-read",
    Bucket: Bucket,
    Key: "".concat((0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(), ".").concat(filename),
    Body: createReadStream,
    Conditions: [{
      acl: "public-read"
    }]
  };
};

var deleteFileBucket = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(fileKey, Bucket) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!fileKey) {
              _context.next = 3;
              break;
            }

            _context.next = 3;
            return s3.deleteObject({
              Key: fileKey,
              Bucket: Bucket
            }).promise();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteFileBucket(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var convertToJpg = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(input) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", sharp__WEBPACK_IMPORTED_MODULE_2___default()(input).jpeg().toBuffer());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function convertToJpg(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var getKeyPath = function getKeyPath(path) {
  return path.slice(path.lastIndexOf("/") + 1, path.length);
};

var uploadBuffer = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(buffer, filename, Bucket) {
    var miniBuffer, params, _yield$s3$upload$prom, Location;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return imagemin__WEBPACK_IMPORTED_MODULE_5___default().buffer(buffer, {
              plugins: [convertToJpg, imagemin_mozjpeg__WEBPACK_IMPORTED_MODULE_6___default()({
                quality: 50
              })]
            });

          case 3:
            miniBuffer = _context3.sent;
            params = getInitParams("".concat(filename.slice(0, filename.lastIndexOf(".")), ".jpeg"), miniBuffer, Bucket);
            _context3.next = 7;
            return s3.upload(params).promise();

          case 7:
            _yield$s3$upload$prom = _context3.sent;
            Location = _yield$s3$upload$prom.Location;
            return _context3.abrupt("return", Location);

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            throw new Error("Uploading buffer to bucket error: ".concat(_context3.t0.message));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function uploadBuffer(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getBufferFromStream = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(readableStream) {
    var buffers, buffer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            buffers = [];
            _context5.next = 4;
            return new Promise( /*#__PURE__*/function () {
              var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(res) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        return _context4.abrupt("return", readableStream.createReadStream().on("data", function (chunk) {
                          buffers.push(chunk);
                        }).on("end", function () {
                          res(Buffer.concat(buffers));
                        }).on("error", function (err) {
                          _sentry_node__WEBPACK_IMPORTED_MODULE_4__.captureException(err);
                          res(null);
                        }));

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x8) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 4:
            buffer = _context5.sent;
            return _context5.abrupt("return", buffer);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            throw new Error("Creating buffer error: ".concat(_context5.t0.message));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getBufferFromStream(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

var uploadNoImage = /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6(readableStream, Bucket) {
    var stream, params, _yield$s3$upload$prom2, Location;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            stream = readableStream.createReadStream();
            params = getInitParams(readableStream.filename, stream, Bucket);
            _context6.next = 5;
            return s3.upload(params).promise();

          case 5:
            _yield$s3$upload$prom2 = _context6.sent;
            Location = _yield$s3$upload$prom2.Location;
            return _context6.abrupt("return", Location);

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            throw new Error("Uploading file to bucket error: ".concat(_context6.t0.message));

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function uploadNoImage(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

var uploadFile = /*#__PURE__*/function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7(file, Bucket) {
    var readableStream, isImage, buffer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return file;

          case 3:
            readableStream = _context7.sent;
            isImage = readableStream.mimetype.split("/")[0] === "image";

            if (!isImage) {
              _context7.next = 14;
              break;
            }

            _context7.next = 8;
            return getBufferFromStream(readableStream);

          case 8:
            buffer = _context7.sent;

            if (buffer) {
              _context7.next = 11;
              break;
            }

            throw new Error("Getting buffer from stream error!");

          case 11:
            return _context7.abrupt("return", uploadBuffer(buffer, readableStream.filename, Bucket));

          case 14:
            return _context7.abrupt("return", uploadNoImage(readableStream, Bucket));

          case 15:
            _context7.next = 20;
            break;

          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](0);
            throw new Error("Uploading file error: ".concat(_context7.t0.message));

          case 20:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 17]]);
  }));

  return function uploadFile(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteFile = /*#__PURE__*/function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8(path, Bucket) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return deleteFileBucket(getKeyPath(path), Bucket);

          case 3:
            _context8.next = 8;
            break;

          case 5:
            _context8.prev = 5;
            _context8.t0 = _context8["catch"](0);
            throw new Error("Deleting file error: ".concat(_context8.t0.message));

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 5]]);
  }));

  return function deleteFile(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var updateFile = /*#__PURE__*/function () {
  var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee9(path, file, Bucket) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return deleteFile(path, Bucket);

          case 3:
            return _context9.abrupt("return", uploadFile(file, Bucket));

          case 6:
            _context9.prev = 6;
            _context9.t0 = _context9["catch"](0);
            throw new Error("Updating file error: ".concat(_context9.t0.message));

          case 9:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 6]]);
  }));

  return function updateFile(_x15, _x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./server/schema/index.ts":
/*!********************************!*\
  !*** ./server/schema/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeDefs */ "./server/schema/typeDefs.ts");
/* harmony import */ var _resolvers_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/users */ "./server/schema/resolvers/users.ts");
/* harmony import */ var _resolvers_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/pages */ "./server/schema/resolvers/pages.ts");
/* harmony import */ var _resolvers_uploads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/uploads */ "./server/schema/resolvers/uploads.ts");
/* harmony import */ var _resolvers_newsevents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/newsevents */ "./server/schema/resolvers/newsevents.ts");
/* harmony import */ var _resolvers_pagesections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/pagesections */ "./server/schema/resolvers/pagesections.ts");
/* harmony import */ var _resolvers_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/filters */ "./server/schema/resolvers/filters.ts");
/* harmony import */ var _resolvers_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/upload */ "./server/schema/resolvers/upload.ts");
/* harmony import */ var _resolvers_newsevent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/newsevent */ "./server/schema/resolvers/newsevent.ts");
/* harmony import */ var _resolvers_pagesection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/pagesection */ "./server/schema/resolvers/pagesection.ts");
/* harmony import */ var _resolvers_email__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/email */ "./server/schema/resolvers/email.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var schema = {
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_1__.default,
  resolvers: {
    Query: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _resolvers_users__WEBPACK_IMPORTED_MODULE_2__.Query), _resolvers_pages__WEBPACK_IMPORTED_MODULE_3__.Query), _resolvers_uploads__WEBPACK_IMPORTED_MODULE_4__.Query), _resolvers_newsevents__WEBPACK_IMPORTED_MODULE_5__.Query), _resolvers_pagesections__WEBPACK_IMPORTED_MODULE_6__.Query), _resolvers_filters__WEBPACK_IMPORTED_MODULE_7__.Query),
    Mutation: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _resolvers_email__WEBPACK_IMPORTED_MODULE_11__.Mutation), _resolvers_pages__WEBPACK_IMPORTED_MODULE_3__.Mutation), _resolvers_uploads__WEBPACK_IMPORTED_MODULE_4__.Mutation), _resolvers_newsevents__WEBPACK_IMPORTED_MODULE_5__.Mutation), _resolvers_pagesections__WEBPACK_IMPORTED_MODULE_6__.Mutation), _resolvers_users__WEBPACK_IMPORTED_MODULE_2__.Mutation),
    UploadFile: _resolvers_upload__WEBPACK_IMPORTED_MODULE_8__.UploadFile,
    NewsEvent: _resolvers_newsevent__WEBPACK_IMPORTED_MODULE_9__.NewsEvent,
    PageSection: _resolvers_pagesection__WEBPACK_IMPORTED_MODULE_10__.PageSection
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (schema);

/***/ }),

/***/ "./server/schema/models/ExtraLink.ts":
/*!*******************************************!*\
  !*** ./server/schema/models/ExtraLink.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  link: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  content: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "NewsEvent",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  lang: {
    type: String,
    "default": "uk"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("ExtraLink", schema));

/***/ }),

/***/ "./server/schema/models/Filter.ts":
/*!****************************************!*\
  !*** ./server/schema/models/Filter.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  page: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "Page",
    required: true
  },
  url: {
    type: String,
    required: true
  },
  section: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "PageSection",
    required: true
  },
  keyWord: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  lang: {
    type: String,
    "default": "uk"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Filter", schema));

/***/ }),

/***/ "./server/schema/models/NewsEvent.ts":
/*!*******************************************!*\
  !*** ./server/schema/models/NewsEvent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    "enum": ["news", "event"],
    required: true
  },
  owner: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    "enum": ["ecology", "health", "sports", "science", "entertainment", "culture"],
    required: true
  },
  dateEvent: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    "default": "uk"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("NewsEvent", schema));

/***/ }),

/***/ "./server/schema/models/Page.ts":
/*!**************************************!*\
  !*** ./server/schema/models/Page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    "default": ""
  },
  imageKey: {
    type: String,
    "default": ""
  },
  date: {
    type: Date,
    required: true
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Page", schema));

/***/ }),

/***/ "./server/schema/models/PageSection.ts":
/*!*********************************************!*\
  !*** ./server/schema/models/PageSection.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  page: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "Page",
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  priority: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "User",
    required: true
  },
  filters: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "Filter",
    required: true
  }],
  date: {
    type: Date,
    required: true
  },
  lang: {
    type: String,
    "default": "uk"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("PageSection", schema));

/***/ }),

/***/ "./server/schema/models/Upload.ts":
/*!****************************************!*\
  !*** ./server/schema/models/Upload.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  owner: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  content: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId
  },
  type: {
    type: String,
    "enum": ["image", "news", "event", "other", "private"],
    required: true
  },
  key: {
    type: String,
    "default": ""
  },
  description: {
    type: String,
    "default": ""
  },
  hashtags: {
    type: String,
    "default": ""
  },
  format: {
    type: String,
    "enum": ["image", "file"],
    "default": "image"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Upload", schema));

/***/ }),

/***/ "./server/schema/models/User.ts":
/*!**************************************!*\
  !*** ./server/schema/models/User.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ava: {
    type: String,
    "default": ""
  },
  color: {
    type: String,
    required: true,
    "default": ""
  },
  confirmed: {
    type: Boolean,
    required: true,
    "default": "false"
  },
  firstname: {
    type: String,
    "default": "",
    required: true
  },
  lastname: {
    type: String,
    "default": "",
    required: true
  },
  middlename: {
    type: String,
    "default": ""
  },
  phone: {
    type: String,
    "default": ""
  },
  address: {
    type: String,
    "default": ""
  },
  birth: {
    type: Date,
    "default": ""
  },
  encrpassword: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    "default": "user",
    "enum": ["user", "admin", "teacher"]
  },
  date: {
    type: Date,
    required: true
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("User", schema));

/***/ }),

/***/ "./server/schema/models/index.ts":
/*!***************************************!*\
  !*** ./server/schema/models/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* reexport safe */ _User__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Page": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Upload": () => (/* reexport safe */ _Upload__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "NewsEvent": () => (/* reexport safe */ _NewsEvent__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "ExtraLink": () => (/* reexport safe */ _ExtraLink__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "PageSection": () => (/* reexport safe */ _PageSection__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Filter": () => (/* reexport safe */ _Filter__WEBPACK_IMPORTED_MODULE_6__.default)
/* harmony export */ });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./server/schema/models/User.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./server/schema/models/Page.ts");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Upload */ "./server/schema/models/Upload.ts");
/* harmony import */ var _NewsEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsEvent */ "./server/schema/models/NewsEvent.ts");
/* harmony import */ var _ExtraLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExtraLink */ "./server/schema/models/ExtraLink.ts");
/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageSection */ "./server/schema/models/PageSection.ts");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Filter */ "./server/schema/models/Filter.ts");









/***/ }),

/***/ "./server/schema/resolvers/email.ts":
/*!******************************************!*\
  !*** ./server/schema/resolvers/email.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mutation": () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validation_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/email */ "./server/schema/validation/email.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/messageTypes */ "./server/modules/messageTypes.ts");





(0,dotenv__WEBPACK_IMPORTED_MODULE_4__.config)({
  path: "../../../.env"
});

var Mutation = {
  sendEmail: function sendEmail(_, _ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var firstname, lastname, email, message, _yield$postEmailValid, vFirstname, vLastname, vEmail, vMessage, isError, output, transporter, response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              firstname = _ref.firstname, lastname = _ref.lastname, email = _ref.email, message = _ref.message;
              _context.prev = 1;
              _context.next = 4;
              return (0,_validation_email__WEBPACK_IMPORTED_MODULE_3__.postEmailValid)({
                firstname: firstname,
                lastname: lastname,
                email: email,
                message: message
              });

            case 4:
              _yield$postEmailValid = _context.sent;
              vFirstname = _yield$postEmailValid.firstname;
              vLastname = _yield$postEmailValid.lastname;
              vEmail = _yield$postEmailValid.email;
              vMessage = _yield$postEmailValid.message;
              isError = _yield$postEmailValid.isError;

              if (!isError) {
                _context.next = 12;
                break;
              }

              throw new Error(JSON.stringify({
                firstname: vFirstname,
                lastname: vLastname,
                email: vEmail,
                message: vMessage
              }));

            case 12:
              output = "\n        <h2>\u0423 \u0432\u0430\u0441 \u043D\u043E\u0432\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F!</h2>\n        <h4>\u041F\u043E\u0434\u0440\u043E\u0431\u0438\u0446\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F:</h4>\n        <ul>\n          <li>\u041F\u043E\u0432\u043D\u0435 \u0456\u043C'\u044F: ".concat(firstname, " ").concat(lastname, "</li>\n          <li>\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430: ").concat(email, "</li>\n        </ul>\n        <h4>\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F:</h4>\n        <p>").concat(message, "</p>");
              transporter = nodemailer__WEBPACK_IMPORTED_MODULE_2___default().createTransport({
                service: "gmail",
                auth: {
                  user: process.env.EMAIL_FROM,
                  pass: process.env.EMAIL_FROM_PASS
                },
                tls: {
                  rejectUnauthorized: false
                }
              });
              _context.next = 16;
              return transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_TO,
                subject: "Нове повідомлення",
                text: "Нове повідомлення",
                html: output
              });

            case 16:
              response = _context.sent;

              if (!response.error) {
                _context.next = 19;
                break;
              }

              return _context.abrupt("return", {
                message: "Помилка надсилання повідомлення!",
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__.types.error.keyWord
              });

            case 19:
              return _context.abrupt("return", {
                message: "Повідомлення було успішно надіслано",
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__.types.success.keyWord
              });

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0.message);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 22]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/filters.ts":
/*!********************************************!*\
  !*** ./server/schema/resolvers/filters.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");



var Query = {
  getFilters: function getFilters(_, _ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var url, lang, filters;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _ref.url, lang = _ref.lang;
              _context.prev = 1;
              _context.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.Filter.find({
                url: url,
                lang: lang
              });

            case 4:
              filters = _context.sent;
              return _context.abrupt("return", filters);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting filters error: ".concat(_context.t0.message));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/newsevent.ts":
/*!**********************************************!*\
  !*** ./server/schema/resolvers/newsevent.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsEvent": () => (/* binding */ NewsEvent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");



var NewsEvent = {
  owner: function owner(_ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var owner, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              owner = _ref.owner;
              _context.prev = 1;
              _context.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findById(owner);

            case 4:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting user to news or event error: ".concat(_context.t0.message));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))();
  },
  links: function links(_ref2) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var _id, lang, links;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id = _ref2._id, lang = _ref2.lang;
              _context2.prev = 1;
              _context2.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.ExtraLink.find({
                content: _id,
                lang: lang
              });

            case 4:
              links = _context2.sent;
              return _context2.abrupt("return", links);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              throw new Error("Getting extra links to news or event error: ".concat(_context2.t0.message));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }))();
  },
  preview: function preview(_ref3) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var _id, image;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id = _ref3._id;
              _context3.prev = 1;
              _context3.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.Upload.findOne({
                content: _id
              });

            case 4:
              image = _context3.sent;
              return _context3.abrupt("return", image);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              throw new Error("Getting preview image to news or event error: ".concat(_context3.t0.message));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/newsevents.ts":
/*!***********************************************!*\
  !*** ./server/schema/resolvers/newsevents.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Mutation": () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");
/* harmony import */ var _validation_newsEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/newsEvents */ "./server/schema/validation/newsEvents.ts");
/* harmony import */ var _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/messageTypes */ "./server/modules/messageTypes.ts");
/* harmony import */ var _helpers_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/upload */ "./server/schema/helpers/upload.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






(0,dotenv__WEBPACK_IMPORTED_MODULE_7__.config)();
var _process$env$UPLOADS = process.env.UPLOADS,
    UPLOADS = _process$env$UPLOADS === void 0 ? "" : _process$env$UPLOADS;
var Query = {
  getNewsEvents: function getNewsEvents(_, _ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var search, type, category, dateFrom, dateTo, from, to, exceptId, lang, searchQuery, rangeDates, query, newsEvents, quantity;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              search = _ref.search, type = _ref.type, category = _ref.category, dateFrom = _ref.dateFrom, dateTo = _ref.dateTo, from = _ref.from, to = _ref.to, exceptId = _ref.exceptId, lang = _ref.lang;
              _context.prev = 1;
              searchQuery = search && {
                $text: {
                  $search: search
                }
              };
              rangeDates = dateFrom && dateTo ? {
                $gte: dateFrom,
                $lte: dateTo
              } : dateFrom ? {
                $gte: dateFrom
              } : dateTo ? {
                $lte: dateTo
              } : {
                $exists: true
              };
              query = _objectSpread(_objectSpread({}, searchQuery), {}, {
                _id: exceptId ? {
                  $ne: exceptId
                } : {
                  $exists: true
                },
                type: type,
                lang: lang,
                date: type === "news" ? rangeDates : {
                  $exists: true
                },
                dateEvent: type === "event" ? rangeDates : {
                  $exists: true
                },
                category: category ? category : {
                  $exists: true
                }
              });
              _context.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.find(query).skip(from).limit(to).sort({
                dateEvent: -1
              });

            case 7:
              newsEvents = _context.sent;
              _context.next = 10;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.find(query).countDocuments();

            case 10:
              quantity = _context.sent;
              return _context.abrupt("return", {
                items: newsEvents,
                quantity: quantity
              });

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting news or events error: ".concat(_context.t0.message));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 14]]);
    }))();
  },
  getNewsEvent: function getNewsEvent(_, _ref2) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var contentId, type, lang, newsEvent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              contentId = _ref2.contentId, type = _ref2.type, lang = _ref2.lang;
              _context2.prev = 1;
              _context2.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.findOne({
                _id: contentId,
                type: type,
                lang: lang
              });

            case 4:
              newsEvent = _context2.sent;
              return _context2.abrupt("return", newsEvent);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              throw new Error("Getting news or event error: ".concat(_context2.t0.message));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }))();
  }
};
var Mutation = {
  createNewsEvent: function createNewsEvent(_, _ref3, _ref4) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var title, content, type, category, dateEvent, links, lang, isAuth, _yield$createEditVali, vTitle, vContent, vDateEvent, isError, newsEvent, newNewsEvent, i, extraLink;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              title = _ref3.title, content = _ref3.content, type = _ref3.type, category = _ref3.category, dateEvent = _ref3.dateEvent, links = _ref3.links, lang = _ref3.lang;
              isAuth = _ref4.isAuth;
              _context3.prev = 2;

              if (isAuth.auth) {
                _context3.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context3.next = 7;
              return (0,_validation_newsEvents__WEBPACK_IMPORTED_MODULE_4__.createEditValid)({
                title: title,
                content: content,
                dateEvent: dateEvent
              });

            case 7:
              _yield$createEditVali = _context3.sent;
              vTitle = _yield$createEditVali.title;
              vContent = _yield$createEditVali.content;
              vDateEvent = _yield$createEditVali.dateEvent;
              isError = _yield$createEditVali.isError;

              if (!isError) {
                _context3.next = 14;
                break;
              }

              throw new Error(JSON.stringify({
                title: vTitle,
                content: vContent,
                dateEvent: vDateEvent
              }));

            case 14:
              newsEvent = new _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent({
                title: title,
                content: content,
                type: type,
                category: category,
                dateEvent: dateEvent,
                date: new Date().toISOString().split("T")[0],
                owner: isAuth.userId,
                lang: lang
              });
              _context3.next = 17;
              return newsEvent.save();

            case 17:
              newNewsEvent = _context3.sent;
              i = 0;

            case 19:
              if (!(i < links.length)) {
                _context3.next = 26;
                break;
              }

              extraLink = new _models__WEBPACK_IMPORTED_MODULE_3__.ExtraLink({
                link: links[i].link,
                label: links[i].label,
                content: newNewsEvent._id,
                date: new Date(),
                lang: lang
              });
              _context3.next = 23;
              return extraLink.save();

            case 23:
              i++;
              _context3.next = 19;
              break;

            case 26:
              return _context3.abrupt("return", newNewsEvent._id);

            case 29:
              _context3.prev = 29;
              _context3.t0 = _context3["catch"](2);
              throw new Error(_context3.t0.message);

            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 29]]);
    }))();
  },
  editNewsEvent: function editNewsEvent(_, _ref5, _ref6) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var contentId, title, content, type, category, dateEvent, links, lang, isAuth, _yield$createEditVali2, vTitle, vContent, vDateEvent, isError, i, extraLink;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              contentId = _ref5.contentId, title = _ref5.title, content = _ref5.content, type = _ref5.type, category = _ref5.category, dateEvent = _ref5.dateEvent, links = _ref5.links, lang = _ref5.lang;
              isAuth = _ref6.isAuth;
              _context4.prev = 2;

              if (isAuth.auth) {
                _context4.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context4.next = 7;
              return (0,_validation_newsEvents__WEBPACK_IMPORTED_MODULE_4__.createEditValid)({
                title: title,
                content: content,
                dateEvent: dateEvent
              });

            case 7:
              _yield$createEditVali2 = _context4.sent;
              vTitle = _yield$createEditVali2.title;
              vContent = _yield$createEditVali2.content;
              vDateEvent = _yield$createEditVali2.dateEvent;
              isError = _yield$createEditVali2.isError;

              if (!isError) {
                _context4.next = 14;
                break;
              }

              throw new Error(JSON.stringify({
                title: vTitle,
                content: vContent,
                dateEvent: vDateEvent
              }));

            case 14:
              _context4.next = 16;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.updateOne({
                _id: contentId,
                type: type
              }, {
                title: title,
                content: content,
                category: category,
                dateEvent: dateEvent,
                date: new Date().toISOString().split("T")[0],
                lang: lang
              });

            case 16:
              _context4.next = 18;
              return _models__WEBPACK_IMPORTED_MODULE_3__.ExtraLink.deleteMany({
                content: contentId
              });

            case 18:
              i = 0;

            case 19:
              if (!(i < links.length)) {
                _context4.next = 26;
                break;
              }

              extraLink = new _models__WEBPACK_IMPORTED_MODULE_3__.ExtraLink({
                link: links[i].link,
                label: links[i].label,
                content: contentId,
                date: new Date(),
                lang: lang
              });
              _context4.next = 23;
              return extraLink.save();

            case 23:
              i++;
              _context4.next = 19;
              break;

            case 26:
              return _context4.abrupt("return", {
                message: "".concat(type === "news" ? "Новина" : "Подія", " \u0431\u0443\u043B\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0430!"),
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__.types.success.keyWord
              });

            case 29:
              _context4.prev = 29;
              _context4.t0 = _context4["catch"](2);
              throw new Error(_context4.t0.message);

            case 32:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 29]]);
    }))();
  },
  deleteNewsEvent: function deleteNewsEvent(_, _ref7, _ref8) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var contentId, isAuth, images, i, content;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              contentId = _ref7.contentId;
              isAuth = _ref8.isAuth;
              _context5.prev = 2;

              if (isAuth.auth) {
                _context5.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context5.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.find({
                content: contentId
              });

            case 7:
              images = _context5.sent;

              if (!images.length) {
                _context5.next = 18;
                break;
              }

              i = 0;

            case 10:
              if (!(i < images.length)) {
                _context5.next = 16;
                break;
              }

              _context5.next = 13;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_6__.deleteFile)(images[i].location, UPLOADS);

            case 13:
              i++;
              _context5.next = 10;
              break;

            case 16:
              _context5.next = 18;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.deleteMany({
                content: contentId
              });

            case 18:
              _context5.next = 20;
              return _models__WEBPACK_IMPORTED_MODULE_3__.ExtraLink.deleteMany({
                content: contentId
              });

            case 20:
              _context5.next = 22;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.findById(contentId);

            case 22:
              content = _context5.sent;
              _context5.next = 25;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.findByIdAndDelete(contentId);

            case 25:
              return _context5.abrupt("return", {
                message: "".concat((content === null || content === void 0 ? void 0 : content.type) === "news" ? "Новина" : "Подія", " \u0431\u0443\u043B\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430!"),
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__.types.success.keyWord
              });

            case 28:
              _context5.prev = 28;
              _context5.t0 = _context5["catch"](2);
              throw new Error("Deleting news or event error: ".concat(_context5.t0.message));

            case 31:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 28]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/pages.ts":
/*!******************************************!*\
  !*** ./server/schema/resolvers/pages.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Mutation": () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");
/* harmony import */ var _helpers_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/upload */ "./server/schema/helpers/upload.ts");
/* harmony import */ var _modules_messageTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/messageTypes */ "./server/modules/messageTypes.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_5__);






(0,dotenv__WEBPACK_IMPORTED_MODULE_5__.config)();
var _process$env$UPLOAD = process.env.UPLOAD,
    UPLOAD = _process$env$UPLOAD === void 0 ? "" : _process$env$UPLOAD;
var Query = {
  getPage: function getPage(_, _ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var url, page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _ref.url;
              _context.prev = 1;
              _context.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.Page.findOne({
                url: url
              });

            case 4:
              page = _context.sent;
              return _context.abrupt("return", page);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting page error: ".concat(_context.t0.message));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))();
  }
};
var Mutation = {
  setPageImage: function setPageImage(_, _ref2, _ref3) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var url, uploadImage, deleting, isAuth, page, Location, newPage, image, _Location, _Location2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = _ref2.url, uploadImage = _ref2.image, deleting = _ref2.deleting;
              isAuth = _ref3.isAuth;
              _context2.prev = 2;

              if (isAuth.auth) {
                _context2.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context2.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_2__.Page.findOne({
                url: url
              });

            case 7:
              page = _context2.sent;

              if (page) {
                _context2.next = 18;
                break;
              }

              if (!uploadImage) {
                _context2.next = 13;
                break;
              }

              _context2.next = 12;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_3__.uploadFile)(uploadImage, UPLOAD);

            case 12:
              Location = _context2.sent;

            case 13:
              newPage = new _models__WEBPACK_IMPORTED_MODULE_2__.Page({
                url: url,
                image: Location,
                date: new Date()
              });
              _context2.next = 16;
              return newPage.save();

            case 16:
              _context2.next = 39;
              break;

            case 18:
              image = "";

              if (!deleting) {
                _context2.next = 25;
                break;
              }

              if (!page.image) {
                _context2.next = 23;
                break;
              }

              _context2.next = 23;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_3__.deleteFile)(page.image, UPLOAD);

            case 23:
              _context2.next = 37;
              break;

            case 25:
              if (!uploadImage) {
                _context2.next = 37;
                break;
              }

              if (!page.image) {
                _context2.next = 33;
                break;
              }

              _context2.next = 29;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_3__.updateFile)(page.image, uploadImage, UPLOAD);

            case 29:
              _Location = _context2.sent;
              image = _Location;
              _context2.next = 37;
              break;

            case 33:
              _context2.next = 35;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_3__.uploadFile)(uploadImage, UPLOAD);

            case 35:
              _Location2 = _context2.sent;
              image = _Location2;

            case 37:
              _context2.next = 39;
              return _models__WEBPACK_IMPORTED_MODULE_2__.Page.updateOne({
                url: url
              }, {
                image: image,
                date: new Date()
              });

            case 39:
              return _context2.abrupt("return", {
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_4__.types.success.keyWord,
                message: "Зображення оновлено успішно!"
              });

            case 42:
              _context2.prev = 42;
              _context2.t0 = _context2["catch"](2);
              throw new Error("Updating image page error: ".concat(_context2.t0.message));

            case 45:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 42]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/pagesection.ts":
/*!************************************************!*\
  !*** ./server/schema/resolvers/pagesection.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSection": () => (/* binding */ PageSection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");



var PageSection = {
  owner: function owner(_ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var owner, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              owner = _ref.owner;
              _context.prev = 1;
              _context.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findById(owner);

            case 4:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting user to page section error: ".concat(_context.t0.message));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))();
  },
  uploads: function uploads(_ref2) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var _id, uploads;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id = _ref2._id;
              _context2.prev = 1;
              _context2.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.Upload.find({
                content: _id
              });

            case 4:
              uploads = _context2.sent;
              return _context2.abrupt("return", uploads);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              throw new Error("Getting uploads to page section error: ".concat(_context2.t0.message));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/pagesections.ts":
/*!*************************************************!*\
  !*** ./server/schema/resolvers/pagesections.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Mutation": () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");
/* harmony import */ var _modules_messageTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/messageTypes */ "./server/modules/messageTypes.ts");
/* harmony import */ var _validation_pageSections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validation/pageSections */ "./server/schema/validation/pageSections.ts");
/* harmony import */ var _helpers_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/upload */ "./server/schema/helpers/upload.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_7__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







(0,dotenv__WEBPACK_IMPORTED_MODULE_7__.config)();
var _process$env$UPLOADS = process.env.UPLOADS,
    UPLOADS = _process$env$UPLOADS === void 0 ? "" : _process$env$UPLOADS;
var Query = {
  getAllPageSections: function getAllPageSections(_, _ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var urls, lang, pageSections;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              urls = _ref.urls, lang = _ref.lang;
              _context.prev = 1;
              _context.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.find({
                url: {
                  $in: urls
                },
                lang: lang
              }).sort({
                priority: -1
              });

            case 4:
              pageSections = _context.sent;
              return _context.abrupt("return", pageSections);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting all page sections error: ".concat(_context.t0.message));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))();
  },
  getPageSections: function getPageSections(_, _ref2) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var search, url, filters, from, to, exceptId, lang, searchQuery, collection, quantity, _loop, i, collectionNew, sections, _sections;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              search = _ref2.search, url = _ref2.url, filters = _ref2.filters, from = _ref2.from, to = _ref2.to, exceptId = _ref2.exceptId, lang = _ref2.lang;
              _context3.prev = 1;
              searchQuery = search && {
                $text: {
                  $search: search
                }
              };
              collection = [];
              quantity = 0;

              if (!filters.length) {
                _context3.next = 22;
                break;
              }

              _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _loop(i) {
                var sections, colectionTemp, _collectionNew, _i, j;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.find(_objectSpread({
                          url: url,
                          lang: lang
                        }, searchQuery)).populate({
                          path: "filters",
                          match: {
                            keyWord: filters[i].keyWord,
                            value: filters[i].value
                          }
                        });

                      case 2:
                        sections = _context2.sent;
                        colectionTemp = [];
                        sections.forEach(function (item) {
                          if (item.filters.length) {
                            colectionTemp.push(item);
                          }
                        });

                        if (i === 0) {
                          collection = colectionTemp;
                        } else {
                          _collectionNew = [];

                          for (_i = 0; _i < collection.length; _i++) {
                            for (j = 0; j < colectionTemp.length; j++) {
                              if (String(collection[_i]._id) === String(colectionTemp[j]._id)) {
                                _collectionNew.push(collection[_i]);
                              }
                            }
                          }

                          collection = _collectionNew;
                        }

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop);
              });
              i = 0;

            case 8:
              if (!(i < filters.length)) {
                _context3.next = 13;
                break;
              }

              return _context3.delegateYield(_loop(i), "t0", 10);

            case 10:
              i++;
              _context3.next = 8;
              break;

            case 13:
              collectionNew = [];
              collection.forEach(function (item, index) {
                if (from <= index && index < from + to) {
                  collectionNew.push(item);
                }
              });
              quantity = collection.length;
              _context3.next = 18;
              return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.find({
                _id: {
                  $in: collectionNew.map(function (item) {
                    return item._id;
                  })
                },
                lang: lang
              }).populate({
                path: "filters"
              });

            case 18:
              sections = _context3.sent;
              collection = sections;
              _context3.next = 29;
              break;

            case 22:
              _context3.next = 24;
              return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.find(_objectSpread(_objectSpread({
                _id: exceptId ? {
                  $ne: exceptId
                } : {
                  $exists: true
                }
              }, searchQuery), {}, {
                url: url,
                lang: lang
              })).populate({
                path: "filters"
              }).sort({
                priority: 1
              }).skip(from).limit(to);

            case 24:
              _sections = _context3.sent;
              _context3.next = 27;
              return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.find(_objectSpread(_objectSpread({}, searchQuery), {}, {
                url: url,
                lang: lang
              })).countDocuments();

            case 27:
              quantity = _context3.sent;
              collection = _sections;

            case 29:
              return _context3.abrupt("return", {
                items: collection,
                quantity: quantity
              });

            case 32:
              _context3.prev = 32;
              _context3.t1 = _context3["catch"](1);
              throw new Error("Getting page sections error: ".concat(_context3.t1.message));

            case 35:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2, null, [[1, 32]]);
    }))();
  },
  searchContent: function searchContent(_, _ref3) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var search, tags, lang, searchQuery, keyWords, collection, uploads, news, events, sections, pagesection;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              search = _ref3.search, tags = _ref3.tags, lang = _ref3.lang;
              _context4.prev = 1;
              searchQuery = search && {
                $text: {
                  $search: search
                }
              };
              keyWords = tags.split(" ");
              collection = {
                images: [],
                news: [],
                events: [],
                other: []
              };

              if (!(!!keyWords.includes("images") || !tags.length)) {
                _context4.next = 10;
                break;
              }

              _context4.next = 8;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.find(_objectSpread(_objectSpread({}, searchQuery), {}, {
                type: {
                  $ne: "private"
                },
                format: "image"
              })).sort({
                date: -1
              }).limit(4);

            case 8:
              uploads = _context4.sent;
              collection.images = uploads;

            case 10:
              if (!(!!keyWords.includes("news") || !tags.length)) {
                _context4.next = 15;
                break;
              }

              _context4.next = 13;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.find(_objectSpread(_objectSpread({}, searchQuery), {}, {
                type: "news",
                lang: lang
              })).sort({
                date: -1
              }).limit(4);

            case 13:
              news = _context4.sent;
              collection.news = news;

            case 15:
              if (!(!!keyWords.includes("events") || !tags.length)) {
                _context4.next = 20;
                break;
              }

              _context4.next = 18;
              return _models__WEBPACK_IMPORTED_MODULE_3__.NewsEvent.find(_objectSpread(_objectSpread({}, searchQuery), {}, {
                type: "event",
                lang: lang
              })).sort({
                date: -1
              }).limit(4);

            case 18:
              events = _context4.sent;
              collection.events = events;

            case 20:
              if (!(!!keyWords.includes("other") || !tags.length)) {
                _context4.next = 38;
                break;
              }

              pagesection = _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.find(_objectSpread(_objectSpread({}, searchQuery), {}, {
                lang: lang
              })).sort({
                date: -1
              });

              if (!(!tags.length && !search.length)) {
                _context4.next = 28;
                break;
              }

              _context4.next = 25;
              return pagesection.limit(10);

            case 25:
              sections = _context4.sent;
              _context4.next = 37;
              break;

            case 28:
              if (search.length) {
                _context4.next = 34;
                break;
              }

              _context4.next = 31;
              return pagesection.limit(10);

            case 31:
              sections = _context4.sent;
              _context4.next = 37;
              break;

            case 34:
              _context4.next = 36;
              return pagesection;

            case 36:
              sections = _context4.sent;

            case 37:
              collection.other = sections;

            case 38:
              return _context4.abrupt("return", collection);

            case 41:
              _context4.prev = 41;
              _context4.t0 = _context4["catch"](1);
              throw new Error("Getting searched content error: ".concat(_context4.t0.message));

            case 44:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3, null, [[1, 41]]);
    }))();
  },
  getPageSection: function getPageSection(_, _ref4) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var sectionId, lang, section;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sectionId = _ref4.sectionId, lang = _ref4.lang;
              _context5.prev = 1;
              _context5.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.findOne({
                _id: sectionId,
                lang: lang
              }).populate({
                path: "filters"
              });

            case 4:
              section = _context5.sent;
              return _context5.abrupt("return", section);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              throw new Error("Getting page section error: ".concat(_context5.t0.message));

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4, null, [[1, 8]]);
    }))();
  }
};
var Mutation = {
  createPageSection: function createPageSection(_, _ref5, _ref6) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var title, content, priority, url, filters, optContent, lang, isAuth, _yield$createEditVali, vTitle, vContent, vPriority, vUrl, isError, errors, i, page, savedPage, newPage, pageCollection, newSection, section, _i2, filter, newFilter;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              title = _ref5.title, content = _ref5.content, priority = _ref5.priority, url = _ref5.url, filters = _ref5.filters, optContent = _ref5.optContent, lang = _ref5.lang;
              isAuth = _ref6.isAuth;
              _context6.prev = 2;

              if (isAuth.auth) {
                _context6.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context6.next = 7;
              return (0,_validation_pageSections__WEBPACK_IMPORTED_MODULE_5__.createEditValid)({
                title: title,
                content: optContent ? undefined : content,
                priority: priority,
                url: url
              });

            case 7:
              _yield$createEditVali = _context6.sent;
              vTitle = _yield$createEditVali.title;
              vContent = _yield$createEditVali.content;
              vPriority = _yield$createEditVali.priority;
              vUrl = _yield$createEditVali.url;
              isError = _yield$createEditVali.isError;
              errors = {};

              if (filters.length) {
                for (i = 0; i < filters.length; i++) {
                  if (!filters[i].value) {
                    errors[filters[i].keyWord] = {
                      value: filters[i].value,
                      msg: ["Це поле не може бути порожнім!"]
                    };
                  }
                }
              }

              if (!(isError || Object.keys(errors).length)) {
                _context6.next = 17;
                break;
              }

              throw new Error(JSON.stringify(_objectSpread({
                title: vTitle,
                content: optContent ? {
                  value: "",
                  msg: []
                } : vContent,
                priority: vPriority,
                url: vUrl
              }, errors)));

            case 17:
              _context6.next = 19;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Page.findOne({
                url: url
              });

            case 19:
              page = _context6.sent;

              if (page) {
                _context6.next = 25;
                break;
              }

              newPage = new _models__WEBPACK_IMPORTED_MODULE_3__.Page({
                url: url,
                date: new Date()
              });
              _context6.next = 24;
              return newPage.save();

            case 24:
              savedPage = _context6.sent;

            case 25:
              pageCollection = page || savedPage;
              newSection = new _models__WEBPACK_IMPORTED_MODULE_3__.PageSection({
                page: pageCollection._id,
                title: title,
                url: url,
                content: content,
                priority: priority,
                owner: isAuth.userId,
                date: new Date(),
                lang: lang
              });
              _context6.next = 29;
              return newSection.save();

            case 29:
              section = _context6.sent;

              if (!filters.length) {
                _context6.next = 43;
                break;
              }

              _i2 = 0;

            case 32:
              if (!(_i2 < filters.length)) {
                _context6.next = 41;
                break;
              }

              filter = new _models__WEBPACK_IMPORTED_MODULE_3__.Filter({
                page: pageCollection._id,
                url: url,
                section: section._id,
                keyWord: filters[_i2].keyWord,
                value: filters[_i2].value,
                date: new Date(),
                lang: lang
              });
              _context6.next = 36;
              return filter.save();

            case 36:
              newFilter = _context6.sent;
              section.filters.push(newFilter._id);

            case 38:
              _i2++;
              _context6.next = 32;
              break;

            case 41:
              _context6.next = 43;
              return section.save();

            case 43:
              return _context6.abrupt("return", {
                message: "Розділ створено успішно!",
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_4__.types.success.keyWord
              });

            case 46:
              _context6.prev = 46;
              _context6.t0 = _context6["catch"](2);
              throw new Error(_context6.t0.message);

            case 49:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5, null, [[2, 46]]);
    }))();
  },
  editPageSection: function editPageSection(_, _ref7, _ref8) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var sectionId, title, content, priority, filters, optContent, lang, isAuth, _yield$createEditVali2, vTitle, vContent, vPriority, isError, errors, i, _i3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              sectionId = _ref7.sectionId, title = _ref7.title, content = _ref7.content, priority = _ref7.priority, filters = _ref7.filters, optContent = _ref7.optContent, lang = _ref7.lang;
              isAuth = _ref8.isAuth;
              _context7.prev = 2;

              if (isAuth.auth) {
                _context7.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context7.next = 7;
              return (0,_validation_pageSections__WEBPACK_IMPORTED_MODULE_5__.createEditValid)({
                title: title,
                content: optContent ? undefined : content,
                priority: priority
              });

            case 7:
              _yield$createEditVali2 = _context7.sent;
              vTitle = _yield$createEditVali2.title;
              vContent = _yield$createEditVali2.content;
              vPriority = _yield$createEditVali2.priority;
              isError = _yield$createEditVali2.isError;
              errors = {};

              if (filters.length) {
                for (i = 0; i < filters.length; i++) {
                  if (!filters[i].value) {
                    errors[filters[i].keyWord] = {
                      value: filters[i].value,
                      msg: ["Це поле не може бути порожнім!"]
                    };
                  }
                }
              }

              if (!(isError || Object.keys(errors).length)) {
                _context7.next = 16;
                break;
              }

              throw new Error(JSON.stringify(_objectSpread({
                title: vTitle,
                content: optContent ? {
                  value: "",
                  msg: []
                } : vContent,
                priority: vPriority
              }, errors)));

            case 16:
              _context7.next = 18;
              return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.findByIdAndUpdate(sectionId, {
                title: title,
                content: content,
                priority: priority,
                date: new Date(),
                lang: lang
              });

            case 18:
              if (!filters.length) {
                _context7.next = 26;
                break;
              }

              _i3 = 0;

            case 20:
              if (!(_i3 < filters.length)) {
                _context7.next = 26;
                break;
              }

              _context7.next = 23;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Filter.findByIdAndUpdate(filters[_i3].filterId, {
                value: filters[_i3].value,
                lang: lang
              });

            case 23:
              _i3++;
              _context7.next = 20;
              break;

            case 26:
              return _context7.abrupt("return", {
                message: "Розділ оновлено успішно!",
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_4__.types.success.keyWord
              });

            case 29:
              _context7.prev = 29;
              _context7.t0 = _context7["catch"](2);
              throw new Error(_context7.t0.message);

            case 32:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6, null, [[2, 29]]);
    }))();
  },
  deletePageSection: function deletePageSection(_, _ref9, _ref10) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var sectionId, isAuth, uploads, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              sectionId = _ref9.sectionId;
              isAuth = _ref10.isAuth;
              _context8.prev = 2;

              if (isAuth.auth) {
                _context8.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context8.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.find({
                content: sectionId
              });

            case 7:
              uploads = _context8.sent;

              if (!uploads.length) {
                _context8.next = 18;
                break;
              }

              i = 0;

            case 10:
              if (!(i < uploads.length)) {
                _context8.next = 16;
                break;
              }

              _context8.next = 13;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_6__.deleteFile)(uploads[i].location, UPLOADS);

            case 13:
              i++;
              _context8.next = 10;
              break;

            case 16:
              _context8.next = 18;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.deleteMany({
                content: sectionId
              });

            case 18:
              _context8.next = 20;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Filter.deleteMany({
                section: sectionId
              });

            case 20:
              _context8.next = 22;
              return _models__WEBPACK_IMPORTED_MODULE_3__.PageSection.findByIdAndDelete(sectionId);

            case 22:
              return _context8.abrupt("return", {
                message: "Розділ видалено успішно!",
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_4__.types.success.keyWord
              });

            case 25:
              _context8.prev = 25;
              _context8.t0 = _context8["catch"](2);
              throw new Error("Deleting page section error: ".concat(_context8.t0.message));

            case 28:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7, null, [[2, 25]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/upload.ts":
/*!*******************************************!*\
  !*** ./server/schema/resolvers/upload.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFile": () => (/* binding */ UploadFile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");



var UploadFile = {
  owner: function owner(_ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var owner, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              owner = _ref.owner;
              _context.prev = 1;
              _context.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findById(owner);

            case 4:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting owner to upload error: ".concat(_context.t0.message));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/uploads.ts":
/*!********************************************!*\
  !*** ./server/schema/resolvers/uploads.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Mutation": () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");
/* harmony import */ var _helpers_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/upload */ "./server/schema/helpers/upload.ts");
/* harmony import */ var _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/messageTypes */ "./server/modules/messageTypes.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_6__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





(0,dotenv__WEBPACK_IMPORTED_MODULE_6__.config)();
var _process$env$UPLOADS = process.env.UPLOADS,
    UPLOADS = _process$env$UPLOADS === void 0 ? "" : _process$env$UPLOADS;
var Query = {
  getImages: function getImages(_, _ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var from, to, search, type, typeQuery, query, images, quantity;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              from = _ref.from, to = _ref.to, search = _ref.search, type = _ref.type;
              _context.prev = 1;
              typeQuery = type ? type : {
                $ne: "private"
              };

              if (search) {
                query = {
                  $text: {
                    $search: search
                  },
                  type: typeQuery,
                  format: "image"
                };
              } else {
                query = {
                  type: typeQuery,
                  format: "image"
                };
              }

              _context.next = 6;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.find(_objectSpread({}, query)).sort({
                date: -1
              }).skip(from).limit(to);

            case 6:
              images = _context.sent;
              _context.next = 9;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.find(_objectSpread({}, query)).countDocuments();

            case 9:
              quantity = _context.sent;
              return _context.abrupt("return", {
                images: images,
                quantity: quantity
              });

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              throw new Error("Getting images errror: ".concat(_context.t0.message));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }))();
  },
  getImage: function getImage(_, _ref2) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var imageId, image;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              imageId = _ref2.imageId;
              _context2.prev = 1;
              _context2.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.findById(imageId);

            case 4:
              image = _context2.sent;
              return _context2.abrupt("return", image);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              throw new Error("Getting image errror: ".concat(_context2.t0.message));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }))();
  },
  getContentImages: function getContentImages(_, _ref3) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var contentId, images;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              contentId = _ref3.contentId;
              _context3.prev = 1;
              _context3.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.find({
                content: contentId
              });

            case 4:
              images = _context3.sent;
              return _context3.abrupt("return", images);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              throw new Error("Getting content images error: ".concat(_context3.t0.message));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }))();
  }
};
var Mutation = {
  createUpload: function createUpload(_, _ref4, _ref5) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var hashtags, description, uploadImage, content, type, _ref4$mimetype, mimetype, isAuth, isImgFormat, imageValid, fileType, Location, upload;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              hashtags = _ref4.hashtags, description = _ref4.description, uploadImage = _ref4.upload, content = _ref4.content, type = _ref4.type, _ref4$mimetype = _ref4.mimetype, mimetype = _ref4$mimetype === void 0 ? "image" : _ref4$mimetype;
              isAuth = _ref5.isAuth;
              _context4.prev = 2;

              if (isAuth.auth) {
                _context4.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              //TODO: validation for each field and check in models
              isImgFormat = mimetype === "image";

              if (!uploadImage) {
                _context4.next = 26;
                break;
              }

              _context4.next = 9;
              return uploadImage;

            case 9:
              imageValid = _context4.sent;
              fileType = imageValid.mimetype.split("/")[0];

              if (!(fileType !== "image" && isImgFormat)) {
                _context4.next = 13;
                break;
              }

              throw new Error(JSON.stringify({
                upload: {
                  value: "",
                  msg: ["Ви не можете вибрати файл, який не є зображенням!"]
                }
              }));

            case 13:
              if (!type) {
                _context4.next = 23;
                break;
              }

              _context4.next = 16;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_4__.uploadFile)(uploadImage, UPLOADS);

            case 16:
              Location = _context4.sent;
              upload = new _models__WEBPACK_IMPORTED_MODULE_3__.Upload({
                owner: isAuth.userId,
                date: new Date(),
                location: Location,
                content: content,
                type: type,
                description: description,
                hashtags: hashtags,
                format: isImgFormat ? "image" : "file"
              });
              _context4.next = 20;
              return upload.save();

            case 20:
              return _context4.abrupt("return", {
                message: "".concat(isImgFormat ? "Зображення" : "Файл", " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0434\u043E\u0434\u0430\u043D\u043E!"),
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__.types.success.keyWord
              });

            case 23:
              throw new Error("Type not specified while creating upload!");

            case 24:
              _context4.next = 27;
              break;

            case 26:
              throw new Error(JSON.stringify({
                upload: {
                  value: "",
                  msg: ["\u0411\u0443\u0434\u044C-\u043B\u0430\u0441\u043A\u0430 \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C ".concat(isImgFormat ? "зображення" : "файл", "!")]
                }
              }));

            case 27:
              _context4.next = 32;
              break;

            case 29:
              _context4.prev = 29;
              _context4.t0 = _context4["catch"](2);
              throw new Error(_context4.t0.message);

            case 32:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 29]]);
    }))();
  },
  editUpload: function editUpload(_, _ref6, _ref7) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var imageId, hashtags, description, uploadImage, isAuth, upload, Location, imageValid, fileType, fileLocation;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              imageId = _ref6.imageId, hashtags = _ref6.hashtags, description = _ref6.description, uploadImage = _ref6.upload;
              isAuth = _ref7.isAuth;
              _context5.prev = 2;

              if (isAuth.auth) {
                _context5.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context5.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.findById(imageId);

            case 7:
              upload = _context5.sent;
              Location = upload.location;

              if (!uploadImage) {
                _context5.next = 20;
                break;
              }

              _context5.next = 12;
              return uploadImage;

            case 12:
              imageValid = _context5.sent;
              fileType = imageValid.mimetype.split("/")[0];

              if (!(fileType !== "image" && upload.format === "image")) {
                _context5.next = 16;
                break;
              }

              throw new Error(JSON.stringify({
                upload: {
                  value: "",
                  msg: ["Ви не можете вибрати файл, який не є зображенням!"]
                }
              }));

            case 16:
              _context5.next = 18;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_4__.updateFile)(upload.location, uploadImage, UPLOADS);

            case 18:
              fileLocation = _context5.sent;
              Location = fileLocation;

            case 20:
              _context5.next = 22;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.findByIdAndUpdate(imageId, {
                location: Location,
                hashtags: hashtags,
                description: description,
                date: new Date()
              });

            case 22:
              return _context5.abrupt("return", {
                message: "".concat(upload.format === "image" ? "Зображення" : "Файл", " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E!"),
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__.types.success.keyWord
              });

            case 25:
              _context5.prev = 25;
              _context5.t0 = _context5["catch"](2);
              throw new Error("Updating upload error: ".concat(_context5.t0.message));

            case 28:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 25]]);
    }))();
  },
  deleteUpload: function deleteUpload(_, _ref8, _ref9) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var imageId, isAuth, upload;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              imageId = _ref8.imageId;
              isAuth = _ref9.isAuth;
              _context6.prev = 2;

              if (isAuth.auth) {
                _context6.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context6.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.findById(imageId);

            case 7:
              upload = _context6.sent;
              _context6.next = 10;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_4__.deleteFile)(upload.location, UPLOADS);

            case 10:
              _context6.next = 12;
              return _models__WEBPACK_IMPORTED_MODULE_3__.Upload.findByIdAndDelete(imageId);

            case 12:
              return _context6.abrupt("return", {
                message: "Файл успішно видалено!",
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_5__.types.success.keyWord
              });

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](2);
              throw new Error("Deleting upload error: ".concat(_context6.t0.message));

            case 18:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 15]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/resolvers/users.ts":
/*!******************************************!*\
  !*** ./server/schema/resolvers/users.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Mutation": () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _validation_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation/auth */ "./server/schema/validation/auth.ts");
/* harmony import */ var _helpers_randomColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/randomColor */ "./server/schema/helpers/randomColor.ts");
/* harmony import */ var _helpers_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/upload */ "./server/schema/helpers/upload.ts");
/* harmony import */ var _modules_messageTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/messageTypes */ "./server/modules/messageTypes.ts");











(0,dotenv__WEBPACK_IMPORTED_MODULE_5__.config)({
  path: "../../../.env"
});
var _process$env = process.env,
    _process$env$UPLOAD = _process$env.UPLOAD,
    UPLOAD = _process$env$UPLOAD === void 0 ? "" : _process$env$UPLOAD,
    _process$env$JWT_SECR = _process$env.JWT_SECRET,
    JWT_SECRET = _process$env$JWT_SECR === void 0 ? "" : _process$env$JWT_SECR;
var Query = {
  register: function register(_, args) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var validatedFields, email, salt, hash, user, newUser, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_validation_auth__WEBPACK_IMPORTED_MODULE_7__.registerValid)({
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                password: args.password
              });

            case 3:
              validatedFields = _context.sent;

              if (!validatedFields.isError) {
                _context.next = 6;
                break;
              }

              throw new Error(JSON.stringify(validatedFields));

            case 6:
              email = validatedFields.email;
              salt = bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().genSaltSync(12);
              hash = bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().hashSync(args.password, salt);
              user = new _models__WEBPACK_IMPORTED_MODULE_2__.User({
                email: email.value,
                firstname: args.firstname,
                lastname: args.lastname,
                middlename: args.middlename,
                password: hash,
                role: args.role,
                color: (0,_helpers_randomColor__WEBPACK_IMPORTED_MODULE_8__.getColor)(),
                confirmed: !args.isAdmin && true,
                encrpassword: args.password,
                date: new Date()
              });
              _context.next = 12;
              return user.save();

            case 12:
              newUser = _context.sent;

              if (!args.isAdmin) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", {
                userId: newUser.id
              });

            case 15:
              token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({
                userId: newUser._id
              }, JWT_SECRET);
              return _context.abrupt("return", {
                userId: newUser.id,
                token: token
              });

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              throw new apollo_server__WEBPACK_IMPORTED_MODULE_6__.AuthenticationError(_context.t0.message);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 19]]);
    }))();
  },
  login: function login(_, args) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var validatedFields, user, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0,_validation_auth__WEBPACK_IMPORTED_MODULE_7__.loginValid)(args);

            case 3:
              validatedFields = _context2.sent;

              if (!validatedFields.isError) {
                _context2.next = 6;
                break;
              }

              throw new Error(JSON.stringify(validatedFields));

            case 6:
              user = validatedFields.instance;
              token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({
                userId: user === null || user === void 0 ? void 0 : user._id
              }, JWT_SECRET);
              return _context2.abrupt("return", {
                userId: user === null || user === void 0 ? void 0 : user._id,
                token: token
              });

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              throw new apollo_server__WEBPACK_IMPORTED_MODULE_6__.AuthenticationError(_context2.t0.message);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }))();
  },
  getUser: function getUser(_, _ref) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var userId, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              userId = _ref.userId;
              _context3.prev = 1;
              _context3.next = 4;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findById(userId);

            case 4:
              user = _context3.sent;
              return _context3.abrupt("return", user);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              throw new Error("Getting user data error: ".concat(_context3.t0.message));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }))();
  },
  getAllUsers: function getAllUsers(_, __, _ref2) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
      var isAuth, users;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              isAuth = _ref2.isAuth;
              _context4.prev = 1;

              if (isAuth.auth) {
                _context4.next = 4;
                break;
              }

              throw new Error("Access denied!");

            case 4:
              _context4.next = 6;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.find();

            case 6:
              users = _context4.sent;
              return _context4.abrupt("return", users);

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);
              throw new Error("Getting all users error: ".concat(_context4.t0.message));

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 10]]);
    }))();
  }
};
var Mutation = {
  setUserAva: function setUserAva(_, _ref3, _ref4) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
      var uploadImage, deleting, isAuth, user, ava, Location, _Location;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              uploadImage = _ref3.image, deleting = _ref3.deleting;
              isAuth = _ref4.isAuth;
              _context5.prev = 2;

              if (isAuth.auth) {
                _context5.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context5.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findById(isAuth.userId);

            case 7:
              user = _context5.sent;

              if (!user) {
                _context5.next = 30;
                break;
              }

              ava = "";

              if (!deleting) {
                _context5.next = 16;
                break;
              }

              if (!user.ava) {
                _context5.next = 14;
                break;
              }

              _context5.next = 14;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_9__.deleteFile)(user.ava, UPLOAD);

            case 14:
              _context5.next = 28;
              break;

            case 16:
              if (!uploadImage) {
                _context5.next = 28;
                break;
              }

              if (!user.ava) {
                _context5.next = 24;
                break;
              }

              _context5.next = 20;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_9__.updateFile)(user.ava, uploadImage, UPLOAD);

            case 20:
              Location = _context5.sent;
              ava = Location;
              _context5.next = 28;
              break;

            case 24:
              _context5.next = 26;
              return (0,_helpers_upload__WEBPACK_IMPORTED_MODULE_9__.uploadFile)(uploadImage, UPLOAD);

            case 26:
              _Location = _context5.sent;
              ava = _Location;

            case 28:
              _context5.next = 30;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findByIdAndUpdate(isAuth.userId, {
                ava: ava
              });

            case 30:
              return _context5.abrupt("return", {
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_10__.types.success.keyWord,
                message: "Зображення оновлено успішно!"
              });

            case 33:
              _context5.prev = 33;
              _context5.t0 = _context5["catch"](2);
              throw new Error("Updating user avatar error: ".concat(_context5.t0.message));

            case 36:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 33]]);
    }))();
  },
  updateUserData: function updateUserData(_, _ref5, _ref6) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
      var firstname, lastname, middlename, address, phone, email, password, isAuth, user, newPassword, newEncrpassword, validatedFields, salt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              firstname = _ref5.firstname, lastname = _ref5.lastname, middlename = _ref5.middlename, address = _ref5.address, phone = _ref5.phone, email = _ref5.email, password = _ref5.password;
              isAuth = _ref6.isAuth;
              _context6.prev = 2;

              if (isAuth.auth) {
                _context6.next = 5;
                break;
              }

              throw new Error("Access denied!");

            case 5:
              _context6.next = 7;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findById(isAuth.userId);

            case 7:
              user = _context6.sent;
              newPassword = password || user.encrpassword;
              newEncrpassword = newPassword;
              _context6.next = 12;
              return (0,_validation_auth__WEBPACK_IMPORTED_MODULE_7__.registerValid)({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: newPassword,
                exceptId: isAuth.userId || ""
              });

            case 12:
              validatedFields = _context6.sent;

              if (!validatedFields.isError) {
                _context6.next = 15;
                break;
              }

              throw new Error(JSON.stringify(validatedFields));

            case 15:
              salt = bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().genSaltSync(12);
              newPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().hashSync(newPassword, salt);
              _context6.next = 19;
              return _models__WEBPACK_IMPORTED_MODULE_2__.User.findByIdAndUpdate(isAuth.userId, {
                firstname: firstname,
                lastname: lastname,
                middlename: middlename,
                address: address,
                phone: phone,
                email: email,
                password: newPassword,
                encrpassword: newEncrpassword
              });

            case 19:
              return _context6.abrupt("return", {
                type: _modules_messageTypes__WEBPACK_IMPORTED_MODULE_10__.types.success.keyWord,
                message: "Дані користувача оновлено успішно!"
              });

            case 22:
              _context6.prev = 22;
              _context6.t0 = _context6["catch"](2);
              throw new Error(_context6.t0.message);

            case 25:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 22]]);
    }))();
  }
};

/***/ }),

/***/ "./server/schema/typeDefs.ts":
/*!***********************************!*\
  !*** ./server/schema/typeDefs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_1__);


var _templateObject;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,apollo_server__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  type Filter {\n    id: ID!\n    page: ID!\n    url: String!\n    section: ID!\n    keyWord: String!\n    value: String!\n    date: String!\n  }\n  input InputFilter {\n    keyWord: String!\n    value: String!\n  }\n  input InputFilterEdit {\n    filterId: ID!\n    keyWord: String!\n    value: String!\n  }\n  type PageSection {\n    id: ID!\n    page: ID!\n    url: String!\n    title: String!\n    content: String\n    priority: Int!\n    filters: [Filter]!\n    owner: User!\n    date: String!\n    uploads: [UploadFile]!\n  }\n  type ExtraLink {\n    id: ID!\n    link: String!\n    label: String!\n    content: ID!\n    date: String!\n  }\n  input InputLink {\n    link: String!\n    label: String!\n  }\n  type NewsEvent {\n    id: ID!\n    title: String!\n    content: String!\n    type: String!\n    owner: User!\n    date: String!\n    category: String!\n    dateEvent: String!\n    links: [ExtraLink]!\n    preview: UploadFile\n  }\n  type UploadFile {\n    id: ID!\n    owner: User!\n    date: String!\n    location: String!\n    content: ID\n    type: String!\n    key: String!\n    hashtags: String\n    description: String\n    format: String!\n  }\n  type Page {\n    id: ID!\n    url: String!\n    image: String\n    imageKey: String\n    date: String!\n  }\n  type Msg {\n    type: String!\n    message: String!\n  }\n  type User {\n    id: ID!\n    email: String!\n    ava: String\n    color: String!\n    firstname: String!\n    confirmed: Boolean!\n    lastname: String!\n    middlename: String\n    phone: String\n    address: String\n    birth: String\n    role: String!\n    date: String!\n  }\n  type Auth {\n    userId: String\n    token: String\n  }\n  type Images {\n    images: [UploadFile]!\n    quantity: Int!\n  }\n  type NewsEvents {\n    items: [NewsEvent]!\n    quantity: Int!\n  }\n  type PageSections {\n    items: [PageSection]!\n    quantity: Int!\n  }\n  type SearchContent {\n    images: [UploadFile]!\n    news: [NewsEvent]!\n    events: [NewsEvent]!\n    other: [PageSection]!\n  }\n\n  type Query {\n    searchContent(search: String, tags: String, lang: String): SearchContent!\n    getUser(userId: String!): User!\n    getAllUsers: [User]!\n    getFilters(url: String!, lang: String): [Filter]!\n    getAllPageSections(urls: [String]!, lang: String): [PageSection]!\n    getPageSections(\n      search: String\n      url: String!\n      filters: [InputFilter]!\n      from: Int!\n      to: Int\n      exceptId: ID\n      lang: String\n    ): PageSections!\n    getPageSection(sectionId: ID!, lang: String): PageSection!\n    getNewsEvents(\n      search: String\n      type: String!\n      category: String\n      dateFrom: String\n      dateTo: String\n      from: Int!\n      to: Int!\n      exceptId: ID\n      lang: String\n    ): NewsEvents!\n    getNewsEvent(contentId: ID!, type: String!, lang: String): NewsEvent!\n    getContentImages(contentId: ID!): [UploadFile]!\n    login(email: String!, password: String!): Auth\n    register(\n      firstname: String!\n      lastname: String!\n      email: String!\n      password: String!\n      isAdmin: Boolean\n      role: String\n    ): Auth\n    getImages(from: Int!, to: Int!, search: String, type: String): Images!\n    getImage(imageId: ID!): UploadFile!\n    getPage(url: String!): Page\n  }\n  type Mutation {\n    setUserAva(image: Upload, deleting: Boolean!): Msg!\n    updateUserData(\n      firstname: String!\n      lastname: String!\n      middlename: String\n      address: String\n      phone: String\n      email: String!\n      password: String\n    ): Msg!\n    sendEmail(\n      firstname: String!\n      lastname: String!\n      email: String!\n      message: String!\n    ): Msg!\n    createPageSection(\n      url: String!\n      title: String!\n      content: String!\n      priority: Int!\n      filters: [InputFilter]!\n      optContent: Boolean\n      lang: String\n    ): Msg!\n    editPageSection(\n      sectionId: ID!\n      title: String!\n      content: String!\n      priority: Int!\n      filters: [InputFilterEdit]!\n      optContent: Boolean\n      lang: String\n    ): Msg!\n    deletePageSection(sectionId: ID!): Msg!\n    createNewsEvent(\n      title: String!\n      content: String!\n      type: String!\n      category: String!\n      dateEvent: String!\n      links: [InputLink]\n      lang: String\n    ): String!\n    editNewsEvent(\n      contentId: ID!\n      title: String!\n      content: String!\n      type: String!\n      category: String!\n      dateEvent: String!\n      links: [InputLink]\n      lang: String\n    ): Msg!\n    deleteNewsEvent(contentId: ID!): Msg!\n    createUpload(\n      hashtags: String\n      description: String\n      upload: Upload\n      content: ID\n      type: String\n      mimetype: String\n    ): Msg!\n    editUpload(\n      imageId: ID!\n      hashtags: String\n      description: String\n      upload: Upload\n    ): Msg!\n    deleteUpload(imageId: ID!): Msg!\n    setPageImage(url: String!, image: Upload, deleting: Boolean!): Msg!\n  }\n"]))));

/***/ }),

/***/ "./server/schema/validation/auth.ts":
/*!******************************************!*\
  !*** ./server/schema/validation/auth.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginValid": () => (/* binding */ loginValid),
/* harmony export */   "registerValid": () => (/* binding */ registerValid)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./server/schema/models/index.ts");
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snippets */ "./server/schema/validation/snippets.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function register(_x) {
  return _register.apply(this, arguments);
}

function _register() {
  _register = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(fields) {
    var fieldsMod, isError, firstname, lastname, email, password, errorMsg, setError;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fieldsMod = {};
            isError = false;
            Object.keys(fields).forEach(function (key) {
              if (key === "exceptId") {
                return;
              }

              var field = {
                value: fields[key],
                msg: []
              };
              fieldsMod[key] = (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(field, "Це поле не може бути порожнім!");

              if (fieldsMod[key].msg.length) {
                isError = true;
              }
            });
            firstname = fieldsMod.firstname, lastname = fieldsMod.lastname, email = fieldsMod.email, password = fieldsMod.password;

            if (!isError) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
              isError: isError
            });

          case 7:
            email = (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isEmail)(email, "Електронна адреса неправильна!");
            password = (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isLength)(password, {
              min: 4,
              max: 50,
              minMsg: "Пароль повинен містити щонайменше 4 символи!",
              maxMsg: "Пароль повинен містити не більше 50 символів!"
            });

            if (!(email.msg.length || password.msg.length)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              email: email,
              password: password,
              isError: true
            });

          case 11:
            _context.next = 13;
            return (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isUnique)(fieldsMod.email, "Ця електронна адреса вже існує, виберіть іншу!", _models__WEBPACK_IMPORTED_MODULE_3__.User, "email", fields.exceptId);

          case 13:
            email = _context.sent;

            if (!email.msg.length) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", {
              email: email,
              password: password,
              isError: true
            });

          case 16:
            return _context.abrupt("return", {
              email: email,
              password: password,
              isError: false
            });

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            errorMsg = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043F\u043E\u043B\u0456\u0432 \u0432\u0432\u043E\u0434\u0443 \u043F\u0440\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457: ".concat(_context.t0.message);

            setError = function setError(value) {
              return {
                value: value,
                msg: [errorMsg]
              };
            };

            return _context.abrupt("return", {
              email: setError(fields.email),
              password: setError(fields.password),
              isError: true
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));
  return _register.apply(this, arguments);
}

function login(_x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(fields) {
    var fieldsMod, isError, email, password, _yield$isContains, instance, emailVerified, _yield$comparePasswor, passwordVerified, isSimilar, resultVerification, _errorMsg, setError;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            fieldsMod = {};
            isError = false;
            Object.keys(fields).forEach(function (key) {
              fieldsMod[key] = (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isEmpty)({
                value: fields[key],
                msg: []
              }, "Це поле не може бути порожнім!");

              if (fieldsMod[key].msg.length) {
                isError = true;
              }
            });
            email = fieldsMod.email, password = fieldsMod.password;

            if (!isError) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", {
              email: email,
              password: password,
              isError: isError
            });

          case 7:
            email = (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isEmail)(email, "Електронна адреса неправильна!");
            password = (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isLength)(password, {
              min: 4,
              max: 50,
              minMsg: "Пароль повинен містити щонайменше 4 символи!",
              maxMsg: "Пароль повинен містити не більше 50 символів!"
            });

            if (!(email.msg.length || password.msg.length)) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", {
              email: email,
              password: password,
              isError: true
            });

          case 11:
            _context2.next = 13;
            return (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.isContains)(email, "Ця електронна адреса не існує, виберіть іншу!", _models__WEBPACK_IMPORTED_MODULE_3__.User, "email");

          case 13:
            _yield$isContains = _context2.sent;
            instance = _yield$isContains.instance;
            emailVerified = _yield$isContains.field;

            if (!instance) {
              _context2.next = 28;
              break;
            }

            _context2.next = 19;
            return (0,_snippets__WEBPACK_IMPORTED_MODULE_4__.comparePassword)(password, instance.password, "Пароль неправильний. Будь ласка, спробуйте ще раз!");

          case 19:
            _yield$comparePasswor = _context2.sent;
            passwordVerified = _yield$comparePasswor.passwordVerified;
            isSimilar = _yield$comparePasswor.isSimilar;
            resultVerification = {
              email: emailVerified,
              password: passwordVerified
            };

            if (isSimilar) {
              _context2.next = 25;
              break;
            }

            return _context2.abrupt("return", _objectSpread({
              isError: true
            }, resultVerification));

          case 25:
            return _context2.abrupt("return", _objectSpread(_objectSpread({
              isError: false
            }, resultVerification), {}, {
              instance: instance
            }));

          case 28:
            return _context2.abrupt("return", {
              email: emailVerified,
              password: password,
              isError: true
            });

          case 29:
            _context2.next = 36;
            break;

          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](0);
            _errorMsg = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043F\u043E\u043B\u0456\u0432 \u0432\u0432\u043E\u0434\u0443 \u043F\u0440\u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0456\u0457: ".concat(_context2.t0.message);

            setError = function setError(value) {
              return {
                value: value,
                msg: [_errorMsg]
              };
            };

            return _context2.abrupt("return", {
              email: setError(fields.email),
              password: setError(fields.password),
              isError: true
            });

          case 36:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 31]]);
  }));
  return _login.apply(this, arguments);
}

var loginValid = login;
var registerValid = register;

/***/ }),

/***/ "./server/schema/validation/email.ts":
/*!*******************************************!*\
  !*** ./server/schema/validation/email.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postEmailValid": () => (/* binding */ postEmailValid)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snippets */ "./server/schema/validation/snippets.ts");



function postEmailValid(_x) {
  return _postEmailValid.apply(this, arguments);
}

function _postEmailValid() {
  _postEmailValid = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(fields) {
    var fieldsMod, isError, firstname, lastname, email, message, errorMsg, setError;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fieldsMod = {};
            isError = false;
            Object.keys(fields).forEach(function (key) {
              var field = {
                value: fields[key],
                msg: []
              };
              fieldsMod[key] = (0,_snippets__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(field, "Це поле не може бути порожнім!");

              if (fieldsMod[key].msg.length) {
                isError = true;
              }
            });
            firstname = fieldsMod.firstname, lastname = fieldsMod.lastname, email = fieldsMod.email, message = fieldsMod.message;

            if (!isError) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              firstname: firstname,
              lastname: lastname,
              email: email,
              message: message,
              isError: isError
            });

          case 7:
            email = (0,_snippets__WEBPACK_IMPORTED_MODULE_2__.isEmail)(email, "Електронна адреса неправильна!");
            message = (0,_snippets__WEBPACK_IMPORTED_MODULE_2__.isLength)(message, {
              min: 5,
              max: 1500,
              minMsg: "Повідомлення має містити принаймні 5 символів!",
              maxMsg: "Повідомлення має містити не більше 1500 символів!"
            });

            if (!(email.msg.length || message.msg.length)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              firstname: firstname,
              lastname: lastname,
              email: email,
              message: message,
              isError: true
            });

          case 11:
            return _context.abrupt("return", {
              firstname: firstname,
              lastname: lastname,
              email: email,
              message: message,
              isError: false
            });

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            errorMsg = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043F\u043E\u043B\u0456\u0432 \u0432\u0432\u043E\u0434\u0443 \u043F\u0440\u0438 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F: ".concat(_context.t0.message);

            setError = function setError(value) {
              return {
                value: value,
                msg: [errorMsg]
              };
            };

            return _context.abrupt("return", {
              firstname: setError(fields.firstname),
              lastname: setError(fields.lastname),
              email: setError(fields.email),
              message: setError(fields.message),
              isError: true
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _postEmailValid.apply(this, arguments);
}

/***/ }),

/***/ "./server/schema/validation/newsEvents.ts":
/*!************************************************!*\
  !*** ./server/schema/validation/newsEvents.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEditValid": () => (/* binding */ createEditValid)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snippets */ "./server/schema/validation/snippets.ts");



var createEditValid = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(fields) {
    var fieldsMod, isError, title, content, dateEvent, errorMsg, setError;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fieldsMod = {};
            isError = false;
            Object.keys(fields).forEach(function (key) {
              var field = {
                value: fields[key],
                msg: []
              };
              fieldsMod[key] = (0,_snippets__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(field, "Це поле не може бути порожнім!");

              if (fieldsMod[key].msg.length) {
                isError = true;
              }
            });
            title = fieldsMod.title, content = fieldsMod.content, dateEvent = fieldsMod.dateEvent;

            if (!isError) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              title: title,
              content: content,
              dateEvent: dateEvent,
              isError: isError
            });

          case 7:
            title = (0,_snippets__WEBPACK_IMPORTED_MODULE_2__.isLength)(title, {
              min: 5,
              max: 150,
              minMsg: "Заголовок повинен містити принаймні 5 символів!",
              maxMsg: "Заголовок повинен містити не більше 150 символів!"
            });

            if (!title.msg.length) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", {
              title: title,
              content: content,
              dateEvent: dateEvent,
              isError: true
            });

          case 10:
            return _context.abrupt("return", {
              title: title,
              content: content,
              dateEvent: dateEvent,
              isError: false
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            errorMsg = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043F\u043E\u043B\u0456\u0432 \u0432\u0432\u043E\u0434\u0443 \u043F\u0440\u0438 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u0456 \u0430\u0431\u043E \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u0456 \u043D\u043E\u0432\u0438\u043D \u0430\u0431\u043E \u043F\u043E\u0434\u0456\u0439: ".concat(_context.t0.message);

            setError = function setError(value) {
              return {
                value: value,
                msg: [errorMsg]
              };
            };

            return _context.abrupt("return", {
              title: setError(fields.title),
              content: setError(fields.title),
              dateEvent: setError(fields.title),
              isError: true
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function createEditValid(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./server/schema/validation/pageSections.ts":
/*!**************************************************!*\
  !*** ./server/schema/validation/pageSections.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEditValid": () => (/* binding */ createEditValid)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snippets */ "./server/schema/validation/snippets.ts");



var createEditValid = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(fields) {
    var fieldsMod, isError, title, content, priority, url, errorMsg, setError;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fieldsMod = {};
            isError = false;
            Object.keys(fields).forEach(function (key) {
              var field = {
                value: String(fields[key]),
                msg: []
              };
              fieldsMod[key] = (0,_snippets__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(field, "Це поле не може бути порожнім!");

              if (fieldsMod[key].msg.length) {
                isError = true;
              }
            });
            title = fieldsMod.title, content = fieldsMod.content, priority = fieldsMod.priority, url = fieldsMod.url;

            if (!isError) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              title: title,
              content: content,
              priority: priority,
              url: url,
              isError: isError
            });

          case 7:
            title = (0,_snippets__WEBPACK_IMPORTED_MODULE_2__.isLength)(title, {
              min: 3,
              max: 100,
              minMsg: "Заголовок повинен містити принаймні 3 символів!",
              maxMsg: "Заголовок повинен містити не більше 100 символів!"
            });

            if (!title.msg.length) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", {
              title: title,
              content: content,
              priority: priority,
              url: url,
              isError: true
            });

          case 10:
            return _context.abrupt("return", {
              title: title,
              content: content,
              priority: priority,
              url: url,
              isError: false
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            errorMsg = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043F\u043E\u043B\u0456\u0432 \u0432\u0432\u043E\u0434\u0443 \u043F\u0440\u0438 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u0456 \u0430\u0431\u043E \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u0456 \u0440\u043E\u0437\u0434\u0456\u043B\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438: ".concat(_context.t0.message);

            setError = function setError(value) {
              return {
                value: value,
                msg: [errorMsg]
              };
            };

            return _context.abrupt("return", {
              title: setError(fields.title),
              content: setError(fields.title),
              priority: setError(fields.title),
              url: setError(fields.title),
              isError: true
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function createEditValid(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./server/schema/validation/snippets.ts":
/*!**********************************************!*\
  !*** ./server/schema/validation/snippets.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "isUnique": () => (/* binding */ isUnique),
/* harmony export */   "isContains": () => (/* binding */ isContains),
/* harmony export */   "isLength": () => (/* binding */ isLength),
/* harmony export */   "comparePassword": () => (/* binding */ comparePassword)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function isEmpty(field, msg) {
  if (!field.value.trim()) {
    field.msg.push(msg);
  }

  return field;
}

function isEmail(field, msg) {
  var patern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!field.value.match(patern)) {
    field.msg.push(msg);
  }

  return field;
}

function isUnique(_x, _x2, _x3, _x4, _x5) {
  return _isUnique.apply(this, arguments);
}

function _isUnique() {
  _isUnique = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(field, msg, Model, prop, id) {
    var _ref2, query, collection, errorMsg;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            query = id ? (_ref2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, prop, field.value), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, "_id", {
              $ne: id
            }), _ref2) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prop, field.value);
            _context.next = 4;
            return Model.find(query);

          case 4:
            collection = _context.sent;

            if (collection.length) {
              field.msg.push(msg);
            }

            return _context.abrupt("return", field);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            errorMsg = "Error isUnique: ".concat(_context.t0.message);
            return _context.abrupt("return", _objectSpread(_objectSpread({}, field), {}, {
              msg: [errorMsg]
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _isUnique.apply(this, arguments);
}

function isLength(field, _ref) {
  var min = _ref.min,
      max = _ref.max,
      minMsg = _ref.minMsg,
      maxMsg = _ref.maxMsg;

  if (field.value.length < min) {
    field.msg.push(minMsg);
  } else if (field.value.length > max) {
    field.msg.push(maxMsg);
  }

  return field;
}

function isContains(_x6, _x7, _x8, _x9) {
  return _isContains.apply(this, arguments);
}

function _isContains() {
  _isContains = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(field, msg, Model, prop) {
    var instance, errorMsg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Model.findOne(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prop, field.value));

          case 3:
            instance = _context2.sent;

            if (!instance) {
              field.msg.push(msg);
            }

            return _context2.abrupt("return", {
              instance: instance,
              field: field
            });

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            errorMsg = "Error isContains: ".concat(_context2.t0.message);
            return _context2.abrupt("return", {
              field: _objectSpread(_objectSpread({}, field), {}, {
                msg: [errorMsg]
              })
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _isContains.apply(this, arguments);
}

function comparePassword(_x10, _x11, _x12) {
  return _comparePassword.apply(this, arguments);
}

function _comparePassword() {
  _comparePassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(password, hashedPassword, msg) {
    var isValidPass, errorMsg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            isValidPass = bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(password.value, hashedPassword);

            if (isValidPass) {
              _context3.next = 5;
              break;
            }

            password.msg.push(msg);
            return _context3.abrupt("return", {
              passwordVerified: password,
              isSimilar: false
            });

          case 5:
            return _context3.abrupt("return", {
              passwordVerified: password,
              isSimilar: true
            });

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            errorMsg = "Compare password error: ".concat(_context3.t0.message);
            return _context3.abrupt("return", {
              passwordVerified: {
                value: password.value,
                msg: [errorMsg]
              },
              isSimilar: false
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _comparePassword.apply(this, arguments);
}



/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@sentry/node":
/*!*******************************!*\
  !*** external "@sentry/node" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@sentry/node");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("apollo-server");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "imagemin":
/*!***************************!*\
  !*** external "imagemin" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("imagemin");

/***/ }),

/***/ "imagemin-mozjpeg":
/*!***********************************!*\
  !*** external "imagemin-mozjpeg" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("imagemin-mozjpeg");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_isAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/isAuth */ "./server/context/isAuth.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schema */ "./server/schema/index.ts");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_10__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import express from "express"
// import { ApolloServer, PubSub } from "apollo-server-express"
// import http from "http"
// import path from "path"
// import mongoose from "mongoose"
// import { config } from "dotenv"
// import isAuth from "./context/isAuth"
// import schema from "./schema"
// import cors from "cors"
// config()
// const { PORT, MONGO_USER, MONGO_PASS, MONGO_DB, NODE_ENV } = process.env
// const isDev = NODE_ENV === "development"
// ;(async () => {
//   try {
//     const app = express()
//     app.use(cors())
//     await mongoose.connect(
//       `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.osxef.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
//       {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//       },
//       () => console.log("MongoDB started successfully!")
//     )
//     const pubsub = new PubSub()
//     const server = new ApolloServer({
//       ...schema,
//       playground: isDev,
//       context: ({ req, res }: { req: any; res: any }) => ({
//         req,
//         res,
//         pubsub,
//         isAuth: isAuth(req),
//       }),
//     })
//     server.applyMiddleware({ app })
//     if (NODE_ENV === "production") {
//       app.use(express.static(path.join(__dirname, "../", "client")))
//       app.get("/*", function (req, res) {
//         res.sendFile(path.join(__dirname, "../", "client", "index.html"))
//       })
//     }
//     const httpServer = http.createServer(app)
//     server.installSubscriptionHandlers(httpServer)
//     httpServer.listen(PORT, () => {
//       console.log(`🚀 Server ready at http://localhost:${PORT}`)
//       console.log(
//         `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
//       )
//     })
//   } catch (error) {
//     console.error(`Server error: ${error.message}`)
//   }
// })()
////////////////// apollo-server-express without sockets








(0,dotenv__WEBPACK_IMPORTED_MODULE_7__.config)();
var _process$env = process.env,
    PORT = _process$env.PORT,
    _process$env$MONGO_UR = _process$env.MONGO_URI,
    MONGO_URI = _process$env$MONGO_UR === void 0 ? "" : _process$env$MONGO_UR,
    NODE_ENV = "development";
var isDev = NODE_ENV === "development";

_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
  var app, server;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          app = express__WEBPACK_IMPORTED_MODULE_3___default()();
          app.use(cors__WEBPACK_IMPORTED_MODULE_10___default()());
          _context.next = 5;
          return mongoose__WEBPACK_IMPORTED_MODULE_6___default().connect(MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
          }, function () {
            return console.log("MongoDB started successfully!");
          });

        case 5:
          server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_4__.ApolloServer(_objectSpread(_objectSpread({}, _schema__WEBPACK_IMPORTED_MODULE_9__.default), {}, {
            playground: isDev,
            context: function context(_ref2) {
              var req = _ref2.req,
                  res = _ref2.res;
              return {
                req: req,
                res: res,
                isAuth: (0,_context_isAuth__WEBPACK_IMPORTED_MODULE_8__.default)(req)
              };
            }
          }));
          server.applyMiddleware({
            app: app
          });

          if (!isDev) {
            app.use(express__WEBPACK_IMPORTED_MODULE_3___default().static(path__WEBPACK_IMPORTED_MODULE_5___default().join(__dirname, "../", "client")));
            app.get("/*", function (req, res) {
              res.sendFile(path__WEBPACK_IMPORTED_MODULE_5___default().join(__dirname, "../", "client", "index.html"));
            });
          }

          app.listen(PORT, function () {
            return console.log("Server started on port: ".concat(PORT));
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Server error: ".concat(_context.t0.message));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 11]]);
}))(); ///////////////////////////////////////// apollo-server
// import { ApolloServer } from "apollo-server"
// import mongoose from "mongoose"
// import { config } from "dotenv"
// import isAuth from "./context/isAuth"
// import schema from "./schema"
// import path from "path"
// config()
// const { PORT, MONGO_USER, MONGO_PASS, MONGO_DB, NODE_ENV } = process.env
// const isDev = NODE_ENV === "development"
// ;(async () => {
//   try {
//     await mongoose.connect(
//       `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.osxef.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
//       {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//       },
//       () => console.log("MongoDB started successfully!")
//     )
//     const server = new ApolloServer({
//       ...schema,
//       playground: true,
//       context: ({ req, res }: { req: any; res: any }) => ({
//         req,
//         res,
//         isAuth: isAuth(req),
//       }),
//     })
//     // if (NODE_ENV === "production") {
//     //   app.use(express.static(path.join(__dirname, "../", "client")))
//     //   app.get("/*", function (req, res) {
//     //     res.sendFile(path.join(__dirname, "../", "client", "index.html"))
//     //   })
//     // }
//     server.listen({ port: PORT }).then(({ url }) => {
//       console.log(`Server started on url: ${url}`)
//     })
//   } catch (error) {
//     console.error(`Server error: ${error.message}`)
//   }
// })()
})();

/******/ })()
;
//# sourceMappingURL=server.js.map