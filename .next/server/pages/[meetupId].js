module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kqZg");


/***/ }),

/***/ "9azE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupDetails_item__3wxoZ",
	"image": "MeetupDetails_image__1wM0T",
	"content": "MeetupDetails_content__10_ls"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kqZg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.css
var MeetupDetails_module = __webpack_require__("9azE");
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);

// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__("leqP");

// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js





const MeetupDetails = ({
  title,
  image,
  address,
  description
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: MeetupDetails_module_default.a.image,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: image.src,
        alt: image.alt
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: MeetupDetails_module_default.a.content,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("address", {
        children: address
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: description
      })]
    })]
  });
};

/* harmony default export */ var meetups_MeetupDetails = (MeetupDetails);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/[meetupId]/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MeetupDetail = props => {
  const meetupDetails = {
    id: 'm1',
    title: 'first meetups',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Panorama_of_Moscow_Kremlin.jpg',
      alt: 'Kremlin and Red Square'
    },
    address: 'Red Square, Moscow',
    description: 'This is a first meetup'
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: props.meetupData.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: props.meetupData.description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupDetails, _objectSpread({}, props.meetupData))]
  });
};

async function getStaticPaths() {
  const connect = await external_mongodb_["MongoClient"].connect('mongodb+srv://krisassaurus:G6882061Data!@cluster0.tovkjo4.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = connect.db();
  const meetupsCollection = db.collection('meetups');
  const meetupsFind = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  connect.close();
  return {
    fallback: false,
    paths: meetupsFind.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const connect = await external_mongodb_["MongoClient"].connect('mongodb+srv://krisassaurus:G6882061Data!@cluster0.tovkjo4.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = connect.db();
  const meetupsCollection = db.collection('meetups');
  const meetupFind = await meetupsCollection.findOne({
    _id: new external_mongodb_["ObjectId"](meetupId)
  });
  console.log(meetupFind);
  connect.close();
  return {
    props: {
      meetupData: {
        id: meetupFind._id.toString(),
        title: meetupFind.title,
        image: {
          src: meetupFind.image,
          alt: meetupFind.title
        },
        address: meetupFind.address,
        description: meetupFind.description
      }
    }
  };
}
/* harmony default export */ var _meetupId_ = __webpack_exports__["default"] = (MeetupDetail);

/***/ }),

/***/ "leqP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rQAc");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);



function Card(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "rQAc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });