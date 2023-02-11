/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/cards.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/cards.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --timeTransition: 600ms;\r\n}\r\n\r\n/*---------------------------------Color Management----------------------------------*/\r\n\r\n.cards{\r\n    --cardMarginBottom : 2em;\r\n    --cardsBorder : #37474F;\r\n\r\n    --D_bgCard : #37474F;\r\n    --D_cardTextColor : rgb(255, 255, 255); \r\n    --D_cardLink : #000000; /* #fae49a; */\r\n    --D_cardLinkVisited : rgb(7, 127, 7); /* rgb(188, 247, 188); */\r\n\r\n    --D_cardTitleColor: #FFD180;\r\n}\r\n\r\n.cardButton {\r\n    --color: #000000;\r\n    --colorHover: #414141;\r\n}\r\n\r\n.links-container {\r\n    --bgColor : #ffffff;\r\n}\r\n\r\n\r\n/*----------------------------------CARD-Management----------------------------------*/\r\n\r\n\r\n.cards-container {\r\n    padding: 0 0.1em;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.cards {\r\n    position: relative;\r\n    z-index: 15;\r\n\r\n    width: 90%;\r\n    margin-bottom: var(--cardMarginBottom);\r\n\r\n    background-color: var(--D_bgCard);\r\n\r\n    border: none;\r\n    box-shadow: 0px 0px 4px var(--D_bgCard);;\r\n\r\n    color: var(--D_cardTextColor);\r\n}\r\n\r\n.card-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n\r\n    padding: 1em 1.5em;\r\n}\r\n\r\n/*----------------------------News-Title----------------------------*/\r\n\r\n.cards h5 {\r\n    color: var(--D_cardTitleColor);\r\n}\r\n\r\n/*-----------------------News-comment-button------------------------*/\r\n\r\n.cardButton {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: var(--color);\r\n}\r\n\r\n.cardButton:hover {\r\n    /* color: var(--colorHover); */\r\n    text-decoration: underline;\r\n}\r\n\r\n.comment-icon {\r\n    margin-left: 5px;\r\n    width: 1em;\r\n}\r\n\r\n/*----------------------------News-Link-----------------------------*/\r\n\r\n.links-container {\r\n    background-color: var(--bgColor);\r\n    box-shadow: 0px -2px 3px var(--bgColor);\r\n\r\n    height: 1.5em;\r\n    width: 100%;\r\n\r\n    border: none;\r\n\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-size: 0.9em;\r\n    font-style: italic;\r\n}\r\n\r\n.links-container a,\r\n.links-container button {\r\n    font-style: italic;\r\n}\r\n\r\n.links {\r\n    padding: 0 1em;\r\n\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.cards a:hover,\r\n.cards a:link {\r\n    color: var(--D_cardLink);\r\n}\r\n\r\n.cards a:visited {\r\n    color: var(--D_cardLinkVisited);\r\n}\r\n\r\n/*-----------------------News-AUTHOR-username-----------------------*/\r\n\r\n.by {\r\n    font-style: italic;\r\n}\r\n\r\n/*-----------------------News-added-by-REFRESH----------------------*/\r\n\r\n\r\n.new-news {\r\n    width: 100%;\r\n}\r\n\r\n.new-news .cards-container {\r\n    padding-top: 0em;\r\n    padding-bottom: 0em;\r\n}\r\n\r\n\r\n@media only screen and (min-width:360px) and ( max-width:576px ) {\r\n    .cards {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) {\r\n\r\n    .new-news .cards-container {\r\n        padding-top: 1.2em;\r\n        padding-bottom: 0.8em;\r\n    }\r\n\r\n    .cards-container {\r\n        padding: 1.2em;\r\n    }\r\n\r\n    .cards:last-of-type {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .cards {\r\n        width: 60%;\r\n    }\r\n\r\n    .links {\r\n        padding: 0 2em;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and ( min-width:576px ) and ( max-width:768px ) {\r\n\r\n    .cards {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:768px ) and ( max-width:992px ) {\r\n\r\n    .cards {\r\n        width: 80%;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:992px ) {\r\n\r\n    .cards {\r\n        width: 500px;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:1140px ) {\r\n\r\n    .cards {\r\n        width: 700px;\r\n        min-height: 270px;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 2em 2em;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/cards.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,sFAAsF;;AAEtF;IACI,wBAAwB;IACxB,uBAAuB;;IAEvB,oBAAoB;IACpB,sCAAsC;IACtC,sBAAsB,EAAE,aAAa;IACrC,oCAAoC,EAAE,wBAAwB;;IAE9D,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;;AAGA,sFAAsF;;;AAGtF;IACI,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,WAAW;;IAEX,UAAU;IACV,sCAAsC;;IAEtC,iCAAiC;;IAEjC,YAAY;IACZ,uCAAuC;;IAEvC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;;IAE7B,kBAAkB;AACtB;;AAEA,qEAAqE;;AAErE;IACI,8BAA8B;AAClC;;AAEA,qEAAqE;;AAErE;IACI,YAAY;IACZ,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA,qEAAqE;;AAErE;IACI,gCAAgC;IAChC,uCAAuC;;IAEvC,aAAa;IACb,WAAW;;IAEX,YAAY;;IAEZ,8BAA8B;IAC9B,+BAA+B;;IAE/B,aAAa;IACb,mBAAmB;;IAEnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,cAAc;;IAEd,WAAW;;IAEX,aAAa;IACb,8BAA8B;AAClC;;;AAGA;;IAEI,wBAAwB;AAC5B;;AAEA;IACI,+BAA+B;AACnC;;AAEA,qEAAqE;;AAErE;IACI,kBAAkB;AACtB;;AAEA,qEAAqE;;;AAGrE;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;AAGA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;;IAEI;QACI,kBAAkB;QAClB,qBAAqB;IACzB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,cAAc;IAClB;AACJ;;;AAGA;;IAEI;QACI,WAAW;IACf;AACJ;;AAEA;;IAEI;QACI,UAAU;IACd;;AAEJ;;AAEA;;IAEI;QACI,YAAY;IAChB;;AAEJ;;AAEA;;IAEI;QACI,YAAY;QACZ,iBAAiB;IACrB;;IAEA;QACI,gBAAgB;IACpB;;AAEJ","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --timeTransition: 600ms;\r\n}\r\n\r\n/*---------------------------------Color Management----------------------------------*/\r\n\r\n.cards{\r\n    --cardMarginBottom : 2em;\r\n    --cardsBorder : #37474F;\r\n\r\n    --D_bgCard : #37474F;\r\n    --D_cardTextColor : rgb(255, 255, 255); \r\n    --D_cardLink : #000000; /* #fae49a; */\r\n    --D_cardLinkVisited : rgb(7, 127, 7); /* rgb(188, 247, 188); */\r\n\r\n    --D_cardTitleColor: #FFD180;\r\n}\r\n\r\n.cardButton {\r\n    --color: #000000;\r\n    --colorHover: #414141;\r\n}\r\n\r\n.links-container {\r\n    --bgColor : #ffffff;\r\n}\r\n\r\n\r\n/*----------------------------------CARD-Management----------------------------------*/\r\n\r\n\r\n.cards-container {\r\n    padding: 0 0.1em;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.cards {\r\n    position: relative;\r\n    z-index: 15;\r\n\r\n    width: 90%;\r\n    margin-bottom: var(--cardMarginBottom);\r\n\r\n    background-color: var(--D_bgCard);\r\n\r\n    border: none;\r\n    box-shadow: 0px 0px 4px var(--D_bgCard);;\r\n\r\n    color: var(--D_cardTextColor);\r\n}\r\n\r\n.card-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n\r\n    padding: 1em 1.5em;\r\n}\r\n\r\n/*----------------------------News-Title----------------------------*/\r\n\r\n.cards h5 {\r\n    color: var(--D_cardTitleColor);\r\n}\r\n\r\n/*-----------------------News-comment-button------------------------*/\r\n\r\n.cardButton {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: var(--color);\r\n}\r\n\r\n.cardButton:hover {\r\n    /* color: var(--colorHover); */\r\n    text-decoration: underline;\r\n}\r\n\r\n.comment-icon {\r\n    margin-left: 5px;\r\n    width: 1em;\r\n}\r\n\r\n/*----------------------------News-Link-----------------------------*/\r\n\r\n.links-container {\r\n    background-color: var(--bgColor);\r\n    box-shadow: 0px -2px 3px var(--bgColor);\r\n\r\n    height: 1.5em;\r\n    width: 100%;\r\n\r\n    border: none;\r\n\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-size: 0.9em;\r\n    font-style: italic;\r\n}\r\n\r\n.links-container a,\r\n.links-container button {\r\n    font-style: italic;\r\n}\r\n\r\n.links {\r\n    padding: 0 1em;\r\n\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.cards a:hover,\r\n.cards a:link {\r\n    color: var(--D_cardLink);\r\n}\r\n\r\n.cards a:visited {\r\n    color: var(--D_cardLinkVisited);\r\n}\r\n\r\n/*-----------------------News-AUTHOR-username-----------------------*/\r\n\r\n.by {\r\n    font-style: italic;\r\n}\r\n\r\n/*-----------------------News-added-by-REFRESH----------------------*/\r\n\r\n\r\n.new-news {\r\n    width: 100%;\r\n}\r\n\r\n.new-news .cards-container {\r\n    padding-top: 0em;\r\n    padding-bottom: 0em;\r\n}\r\n\r\n\r\n@media only screen and (min-width:360px) and ( max-width:576px ) {\r\n    .cards {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) {\r\n\r\n    .new-news .cards-container {\r\n        padding-top: 1.2em;\r\n        padding-bottom: 0.8em;\r\n    }\r\n\r\n    .cards-container {\r\n        padding: 1.2em;\r\n    }\r\n\r\n    .cards:last-of-type {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .cards {\r\n        width: 60%;\r\n    }\r\n\r\n    .links {\r\n        padding: 0 2em;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and ( min-width:576px ) and ( max-width:768px ) {\r\n\r\n    .cards {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:768px ) and ( max-width:992px ) {\r\n\r\n    .cards {\r\n        width: 80%;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:992px ) {\r\n\r\n    .cards {\r\n        width: 500px;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:1140px ) {\r\n\r\n    .cards {\r\n        width: 700px;\r\n        min-height: 270px;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 2em 2em;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/comment.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/comment.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/*---------------------------------Color-Management----------------------------------*/\r\n\r\n.comment-container {\r\n    --borderColor : #37474F;\r\n}\r\n\r\n.comment-text-container {\r\n    --bgColor : #ECEFF1;\r\n}\r\n\r\n/*------------------------------Comment-Transition-var-------------------------------*/\r\n\r\n.comment-container,\r\n.comment-transition,\r\n moveY {\r\n    --startTransition : -180px;\r\n    --endTransition : -35px;\r\n}\r\n\r\n\r\n/*---------------------------------Comment-Management--------------------------------*/\r\n\r\n\r\n.show-comments {\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n\r\n.comment-container {\r\n    padding: 1em 1.5em;\r\n    margin-bottom: 2em;\r\n\r\n    border-top: none;\r\n\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n\r\n    box-shadow: 0px 5px 6px var(--borderColor);\r\n    \r\n    position: relative;\r\n    top: var(--startTransition);\r\n    z-index: 10;\r\n\r\n    opacity: 1;\r\n\r\n    width: 90%;\r\n}\r\n\r\n.user-container {\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n}\r\n\r\n.user-container span{\r\n    margin-left: 5px;\r\n    align-self: flex-end;\r\n}\r\n\r\n.comment-img {\r\n    width: 2.2em;\r\n    display: inline-block;\r\n}\r\n\r\n.comment {\r\n    padding: 1.2em 0;\r\n}\r\n\r\n\r\n.comment p {\r\n    text-align: left;\r\n    word-wrap: normal;\r\n}\r\n\r\n.comment-text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n\r\n    padding: 1em;\r\n\r\n    /* max-height: 150px; */\r\n\r\n    border-radius: 5px;\r\n\r\n    background-color: var(--bgColor);\r\n\r\n    word-wrap: normal;\r\n    overflow-x: auto;\r\n}\r\n\r\n.comment-text-container a,\r\n.comment-text-container code,\r\n.comment-text-container pre {\r\n    width: 100%;\r\n\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n    overflow: auto;\r\n}\r\n\r\n.data {\r\n    margin-top: 1em;\r\n    align-self: flex-end;\r\n}\r\n\r\n.other {\r\n    font-size: 1em;\r\n    text-decoration: underline;\r\n    align-self: flex-end;\r\n\r\n    display: none;\r\n}\r\n\r\n/*------------------------------TRANSITION-Management--------------------------------*/\r\n\r\n.comment-transition {\r\n    animation-name: moveY, opacity;\r\n    animation-duration: 0.8s, 0.8s;\r\n    animation-delay: 0s, 0s;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes moveY {\r\n    from {\r\n        top: var(--startTransition);\r\n    }\r\n\r\n    to {\r\n        top: var(--endTransition);\r\n    }\r\n}\r\n\r\n@keyframes opacity {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    70% {\r\n        opacity: 0.5;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n\r\n/*-----------------------------------MEDIA-QUERY-------------------------------------*/\r\n\r\n\r\n@media only screen and (min-width:360px) and ( max-width:576px ) {\r\n    .comment-container {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) {\r\n    .comment-container {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) and ( max-width:768px ) {\r\n\r\n    .comment-container {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:768px ) and ( max-width:992px ) {\r\n\r\n    .comment-container {\r\n        width: 80%;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:992px ) {\r\n\r\n    .comment-container {\r\n        width: 500px;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:1140px ) {\r\n\r\n    .comment-container {\r\n        width: 700px;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/comment.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA,sFAAsF;;AAEtF;IACI,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA,sFAAsF;;AAEtF;;;IAGI,0BAA0B;IAC1B,uBAAuB;AAC3B;;;AAGA,sFAAsF;;;AAGtF;IACI,4BAA4B;IAC5B,6BAA6B;AACjC;;;AAGA;IACI,kBAAkB;IAClB,kBAAkB;;IAElB,gBAAgB;;IAEhB,kBAAkB;IAClB,yBAAyB;IACzB,0BAA0B;;IAE1B,0CAA0C;;IAE1C,kBAAkB;IAClB,2BAA2B;IAC3B,WAAW;;IAEX,UAAU;;IAEV,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;IAEvB,YAAY;;IAEZ,uBAAuB;;IAEvB,kBAAkB;;IAElB,gCAAgC;;IAEhC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;;IAGI,WAAW;;IAEX,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,0BAA0B;IAC1B,oBAAoB;;IAEpB,aAAa;AACjB;;AAEA,sFAAsF;;AAEtF;IACI,8BAA8B;IAC9B,8BAA8B;IAC9B,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI;QACI,2BAA2B;IAC/B;;IAEA;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,UAAU;IACd;AACJ;;;AAGA,sFAAsF;;;AAGtF;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;;IAEI;QACI,WAAW;IACf;AACJ;;AAEA;;IAEI;QACI,UAAU;IACd;;AAEJ;;AAEA;;IAEI;QACI,YAAY;IAChB;;AAEJ;;AAEA;;IAEI;QACI,YAAY;IAChB;;AAEJ","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/*---------------------------------Color-Management----------------------------------*/\r\n\r\n.comment-container {\r\n    --borderColor : #37474F;\r\n}\r\n\r\n.comment-text-container {\r\n    --bgColor : #ECEFF1;\r\n}\r\n\r\n/*------------------------------Comment-Transition-var-------------------------------*/\r\n\r\n.comment-container,\r\n.comment-transition,\r\n moveY {\r\n    --startTransition : -180px;\r\n    --endTransition : -35px;\r\n}\r\n\r\n\r\n/*---------------------------------Comment-Management--------------------------------*/\r\n\r\n\r\n.show-comments {\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n\r\n.comment-container {\r\n    padding: 1em 1.5em;\r\n    margin-bottom: 2em;\r\n\r\n    border-top: none;\r\n\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n\r\n    box-shadow: 0px 5px 6px var(--borderColor);\r\n    \r\n    position: relative;\r\n    top: var(--startTransition);\r\n    z-index: 10;\r\n\r\n    opacity: 1;\r\n\r\n    width: 90%;\r\n}\r\n\r\n.user-container {\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n}\r\n\r\n.user-container span{\r\n    margin-left: 5px;\r\n    align-self: flex-end;\r\n}\r\n\r\n.comment-img {\r\n    width: 2.2em;\r\n    display: inline-block;\r\n}\r\n\r\n.comment {\r\n    padding: 1.2em 0;\r\n}\r\n\r\n\r\n.comment p {\r\n    text-align: left;\r\n    word-wrap: normal;\r\n}\r\n\r\n.comment-text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n\r\n    padding: 1em;\r\n\r\n    /* max-height: 150px; */\r\n\r\n    border-radius: 5px;\r\n\r\n    background-color: var(--bgColor);\r\n\r\n    word-wrap: normal;\r\n    overflow-x: auto;\r\n}\r\n\r\n.comment-text-container a,\r\n.comment-text-container code,\r\n.comment-text-container pre {\r\n    width: 100%;\r\n\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n    overflow: auto;\r\n}\r\n\r\n.data {\r\n    margin-top: 1em;\r\n    align-self: flex-end;\r\n}\r\n\r\n.other {\r\n    font-size: 1em;\r\n    text-decoration: underline;\r\n    align-self: flex-end;\r\n\r\n    display: none;\r\n}\r\n\r\n/*------------------------------TRANSITION-Management--------------------------------*/\r\n\r\n.comment-transition {\r\n    animation-name: moveY, opacity;\r\n    animation-duration: 0.8s, 0.8s;\r\n    animation-delay: 0s, 0s;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes moveY {\r\n    from {\r\n        top: var(--startTransition);\r\n    }\r\n\r\n    to {\r\n        top: var(--endTransition);\r\n    }\r\n}\r\n\r\n@keyframes opacity {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    70% {\r\n        opacity: 0.5;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n\r\n/*-----------------------------------MEDIA-QUERY-------------------------------------*/\r\n\r\n\r\n@media only screen and (min-width:360px) and ( max-width:576px ) {\r\n    .comment-container {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) {\r\n    .comment-container {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) and ( max-width:768px ) {\r\n\r\n    .comment-container {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:768px ) and ( max-width:992px ) {\r\n\r\n    .comment-container {\r\n        width: 80%;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:992px ) {\r\n\r\n    .comment-container {\r\n        width: 500px;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and ( min-width:1140px ) {\r\n\r\n    .comment-container {\r\n        width: 700px;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-size: 16px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/*---------------------------------Color Management----------------------------------*/\r\n\r\n#header, #footer {\r\n    --yellowBgTop : linear-gradient( #263238, #78909C);\r\n    --yellowBgBottom: linear-gradient( #ffffff, #78909C, #263238);\r\n}\r\n\r\n#header, #page{\r\n    --headerHeight: 24em;\r\n    --headerColor : rgb(37, 54, 149);\r\n    --flashNewsColor : #ffffff;\r\n    --headerTextColor : #FFD180;    /* #313131 */\r\n}\r\n\r\n.button {\r\n    --color: #FFD180;\r\n    --bgColor: #41555f;\r\n    --bgColorHover: #4b606b;\r\n}\r\n\r\n\r\n/*---------------------------------------------------------------------------------------------------*/\r\n\r\n\r\n#page {\r\n    min-height: 800px;\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    translate: 0 -4em;\r\n}\r\n\r\n/*------------------------------HEADER------------------------------*/\r\n\r\n\r\n#header {\r\n\r\n    position: static;\r\n\r\n    z-index: 1;\r\n\r\n    width: 100%;\r\n\r\n    height: calc(var(--headerHeight) - 6em);\r\n\r\n    background: var(--yellowBgTop);\r\n    background-color: var(--headerColor);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: space-around;\r\n    align-items: center;\r\n\r\n    height: 65%;\r\n\r\n    color : var(--headerTextColor);\r\n}\r\n\r\n.text-container h1 {\r\n    color: var(--flashNewsColor);\r\n    font-size: 3em;\r\n    margin-top: 1em;\r\n    text-shadow: 7px 5px 2px #313131;\r\n}\r\n\r\n.header-text {\r\n    font-size: 1.2em;\r\n    text-overflow:clip;\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n/*---------------------------Button-Class---------------------------*/\r\n\r\n\r\n#more-button {\r\n    margin: 2em auto;\r\n}\r\n\r\n.button {\r\n    padding: 0.1em 0.5em;\r\n\r\n    text-align: center;\r\n\r\n    font-size: 1.2em;\r\n\r\n    border: 2px solid;\r\n    border-color: var(--bgColor);\r\n    border-radius: 8px;\r\n\r\n    color: var(--color);\r\n    background-color: var(--bgColor);\r\n}\r\n\r\n.button:hover {\r\n    color: var(--color);\r\n    background-color: var(--bgColorHover);\r\n    border-color: var(--bgColorHover);\r\n}\r\n\r\n\r\n/*-----------------------------Footer-------------------------------*/\r\n\r\n\r\n#footer {\r\n\r\n    z-index: 1000;\r\n\r\n    width: 100%;\r\n\r\n    height: 15em;\r\n    background: var(--yellowBgBottom);\r\n    background-color: var(--headerColor);\r\n    box-shadow: 0 -5px 5px #ffffff;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/*--------------------------Other-elements--------------------------*/\r\n\r\n#loading {\r\n    width: 20%;\r\n    margin: 0 auto;\r\n    opacity: 0.8;\r\n    user-select: none;\r\n}\r\n\r\n.no-more-news {\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n    color: red;\r\n\r\n    margin-top: 2em;\r\n}\r\n\r\n.to-top {\r\n    position: fixed;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    z-index: 20;\r\n\r\n    padding: 5px;\r\n\r\n    width: 40px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n\r\n    background-color: #FFD180;\r\n    border-radius: 50px;\r\n\r\n    opacity: 0.8;\r\n}\r\n\r\n/*---------------------------TRANSITION-----------------------------*/\r\n\r\n\r\n.elem-invisible {\r\n    display: none;\r\n    opacity: 0;\r\n}\r\n\r\n.opacity-transition {\r\n    /* display: flex; */\r\n    animation-name: opacity;\r\n    animation-iteration-count: 1;\r\n    animation-duration: var(--timeTransition);\r\n}\r\n\r\n@keyframes opacity {\r\n\r\n    from{\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.to-top-opacity {\r\n    /* display: flex; */\r\n    animation-name: opacity-08;\r\n    animation-iteration-count: 1;\r\n    animation-duration: var(--timeTransition);\r\n}\r\n\r\n@keyframes opacity-08 {\r\n\r\n    from{\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 0.8;\r\n    }\r\n}\r\n\r\n\r\n.to-top:focus {\r\n    animation-name: toTop;\r\n    animation-iteration-count: 1;\r\n    animation-duration: 0.8s;\r\n    animation-direction:alternate;\r\n    animation-timing-function: cubic-bezier(0,1.17,.17,.99);\r\n}\r\n\r\n@keyframes toTop {\r\n    from {\r\n        translate: 0 0;\t\r\n    }\r\n\r\n    to {\r\n        translate: 0 -40%;\t\r\n    }\r\n}\r\n\r\n/*-----------------------------ERRORS-------------------------------*/\r\n\r\n.error-card {\r\n    width: 90%;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n\r\n    border: 1px solid rgb(193, 0, 0);\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 5px rgb(50, 0, 0);\r\n\r\n    background-color: rgb(254, 228, 228);\r\n    text-align: center;\r\n}\r\n\r\n.error-message {\r\n    margin: 10px auto;\r\n    padding: 25px 10px;\r\n\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    color: red;\r\n}\r\n\r\n@media only screen and ( min-width:400px ) {\r\n\r\n    .error-card {\r\n        width: 344px;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) {\r\n\r\n    .text-container h1 {\r\n        font-size: 3em;\r\n    }\r\n\r\n    .header-text {\r\n        text-align: start;\r\n        font-size: 1.4em;\r\n    }\r\n\r\n    #header {\r\n        height: var(--headerHeight);\r\n    }\r\n\r\n    #page {\r\n        translate: 0 -8em;\r\n    }\r\n\r\n    #loading {\r\n        width: 80px;\r\n    }\r\n\r\n    .to-top {\r\n        right: 2em;\r\n        bottom: 2em;\r\n\r\n        width: 60px;\r\n    }\r\n\r\n    .error-card {\r\n        width: 400px;\r\n    }\r\n\r\n}\r\n\r\n/*------------------------------------*/\r\n@media only screen and ( max-height: 30em ) {\r\n\r\n    #header {\r\n        height: calc(var(--headerHeight) - 10em);\r\n    }\r\n\r\n    #page {\r\n        translate: 0 -4.5em;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/main.css"],"names":[],"mappings":"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","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-size: 16px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/*---------------------------------Color Management----------------------------------*/\r\n\r\n#header, #footer {\r\n    --yellowBgTop : linear-gradient( #263238, #78909C);\r\n    --yellowBgBottom: linear-gradient( #ffffff, #78909C, #263238);\r\n}\r\n\r\n#header, #page{\r\n    --headerHeight: 24em;\r\n    --headerColor : rgb(37, 54, 149);\r\n    --flashNewsColor : #ffffff;\r\n    --headerTextColor : #FFD180;    /* #313131 */\r\n}\r\n\r\n.button {\r\n    --color: #FFD180;\r\n    --bgColor: #41555f;\r\n    --bgColorHover: #4b606b;\r\n}\r\n\r\n\r\n/*---------------------------------------------------------------------------------------------------*/\r\n\r\n\r\n#page {\r\n    min-height: 800px;\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    translate: 0 -4em;\r\n}\r\n\r\n/*------------------------------HEADER------------------------------*/\r\n\r\n\r\n#header {\r\n\r\n    position: static;\r\n\r\n    z-index: 1;\r\n\r\n    width: 100%;\r\n\r\n    height: calc(var(--headerHeight) - 6em);\r\n\r\n    background: var(--yellowBgTop);\r\n    background-color: var(--headerColor);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: space-around;\r\n    align-items: center;\r\n\r\n    height: 65%;\r\n\r\n    color : var(--headerTextColor);\r\n}\r\n\r\n.text-container h1 {\r\n    color: var(--flashNewsColor);\r\n    font-size: 3em;\r\n    margin-top: 1em;\r\n    text-shadow: 7px 5px 2px #313131;\r\n}\r\n\r\n.header-text {\r\n    font-size: 1.2em;\r\n    text-overflow:clip;\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n/*---------------------------Button-Class---------------------------*/\r\n\r\n\r\n#more-button {\r\n    margin: 2em auto;\r\n}\r\n\r\n.button {\r\n    padding: 0.1em 0.5em;\r\n\r\n    text-align: center;\r\n\r\n    font-size: 1.2em;\r\n\r\n    border: 2px solid;\r\n    border-color: var(--bgColor);\r\n    border-radius: 8px;\r\n\r\n    color: var(--color);\r\n    background-color: var(--bgColor);\r\n}\r\n\r\n.button:hover {\r\n    color: var(--color);\r\n    background-color: var(--bgColorHover);\r\n    border-color: var(--bgColorHover);\r\n}\r\n\r\n\r\n/*-----------------------------Footer-------------------------------*/\r\n\r\n\r\n#footer {\r\n\r\n    z-index: 1000;\r\n\r\n    width: 100%;\r\n\r\n    height: 15em;\r\n    background: var(--yellowBgBottom);\r\n    background-color: var(--headerColor);\r\n    box-shadow: 0 -5px 5px #ffffff;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/*--------------------------Other-elements--------------------------*/\r\n\r\n#loading {\r\n    width: 20%;\r\n    margin: 0 auto;\r\n    opacity: 0.8;\r\n    user-select: none;\r\n}\r\n\r\n.no-more-news {\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n    color: red;\r\n\r\n    margin-top: 2em;\r\n}\r\n\r\n.to-top {\r\n    position: fixed;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    z-index: 20;\r\n\r\n    padding: 5px;\r\n\r\n    width: 40px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n\r\n    background-color: #FFD180;\r\n    border-radius: 50px;\r\n\r\n    opacity: 0.8;\r\n}\r\n\r\n/*---------------------------TRANSITION-----------------------------*/\r\n\r\n\r\n.elem-invisible {\r\n    display: none;\r\n    opacity: 0;\r\n}\r\n\r\n.opacity-transition {\r\n    /* display: flex; */\r\n    animation-name: opacity;\r\n    animation-iteration-count: 1;\r\n    animation-duration: var(--timeTransition);\r\n}\r\n\r\n@keyframes opacity {\r\n\r\n    from{\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.to-top-opacity {\r\n    /* display: flex; */\r\n    animation-name: opacity-08;\r\n    animation-iteration-count: 1;\r\n    animation-duration: var(--timeTransition);\r\n}\r\n\r\n@keyframes opacity-08 {\r\n\r\n    from{\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 0.8;\r\n    }\r\n}\r\n\r\n\r\n.to-top:focus {\r\n    animation-name: toTop;\r\n    animation-iteration-count: 1;\r\n    animation-duration: 0.8s;\r\n    animation-direction:alternate;\r\n    animation-timing-function: cubic-bezier(0,1.17,.17,.99);\r\n}\r\n\r\n@keyframes toTop {\r\n    from {\r\n        translate: 0 0;\t\r\n    }\r\n\r\n    to {\r\n        translate: 0 -40%;\t\r\n    }\r\n}\r\n\r\n/*-----------------------------ERRORS-------------------------------*/\r\n\r\n.error-card {\r\n    width: 90%;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n\r\n    border: 1px solid rgb(193, 0, 0);\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 5px rgb(50, 0, 0);\r\n\r\n    background-color: rgb(254, 228, 228);\r\n    text-align: center;\r\n}\r\n\r\n.error-message {\r\n    margin: 10px auto;\r\n    padding: 25px 10px;\r\n\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    color: red;\r\n}\r\n\r\n@media only screen and ( min-width:400px ) {\r\n\r\n    .error-card {\r\n        width: 344px;\r\n    }\r\n}\r\n\r\n@media only screen and ( min-width:576px ) {\r\n\r\n    .text-container h1 {\r\n        font-size: 3em;\r\n    }\r\n\r\n    .header-text {\r\n        text-align: start;\r\n        font-size: 1.4em;\r\n    }\r\n\r\n    #header {\r\n        height: var(--headerHeight);\r\n    }\r\n\r\n    #page {\r\n        translate: 0 -8em;\r\n    }\r\n\r\n    #loading {\r\n        width: 80px;\r\n    }\r\n\r\n    .to-top {\r\n        right: 2em;\r\n        bottom: 2em;\r\n\r\n        width: 60px;\r\n    }\r\n\r\n    .error-card {\r\n        width: 400px;\r\n    }\r\n\r\n}\r\n\r\n/*------------------------------------*/\r\n@media only screen and ( max-height: 30em ) {\r\n\r\n    #header {\r\n        height: calc(var(--headerHeight) - 10em);\r\n    }\r\n\r\n    #page {\r\n        translate: 0 -4.5em;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/cards.css":
/*!**********************************!*\
  !*** ./src/assets/css/cards.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./cards.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/cards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/css/comment.css":
/*!************************************!*\
  !*** ./src/assets/css/comment.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./comment.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/comment.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAIN_CONTAINER": () => (/* binding */ MAIN_CONTAINER),
/* harmony export */   "PAGE": () => (/* binding */ PAGE),
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "newStories": () => (/* binding */ newStories)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/assets/css/main.css");
/* harmony import */ var _css_cards_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/cards.css */ "./src/assets/css/cards.css");
/* harmony import */ var _img_loading_1_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/loading_1.gif */ "./src/assets/img/loading_1.gif");
/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/comments.js */ "./src/assets/js/modules/comments.js");
/* harmony import */ var _modules_library_functions_library_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/library/functions-library.js */ "./src/assets/js/modules/library/functions-library.js");
/* harmony import */ var _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/library/news-function-library.js */ "./src/assets/js/modules/library/news-function-library.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_comments_js__WEBPACK_IMPORTED_MODULE_6__, _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__]);
([_modules_comments_js__WEBPACK_IMPORTED_MODULE_6__, _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/*-------------------------LIBRARY-IMPORT--------------------------*/

;




/*---------------------------CSS-IMPORT----------------------------*/




/*-------------------------MODULES-IMPORT--------------------------*/








/*-------------------------VAR-DECLARATION-------------------------*/

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStories = 'newstories.json';

const PAGE = document.body.querySelector("#page");
const MAIN_CONTAINER = document.body.querySelector("#main-container");

let newStoriesId = null;    // All news ID
let mainStories = null;     // First block of printed news, declared as global variable for future implementations

const NEWS_LIMIT = 10;  // commands the limit of printed news
const RETRY_TIMES = 2;  // Times to reload main 

let seeNews = 0; // number of seen news -486-

let refreshCicle = null;

let refreshTime = 60;  // seconds

errorOnMainRequest.retry = 0;



/*---------------------------MAIN-PROGRAM--------------------------*/

// Turn .to-top element in a scroll up button
let toTop = document.body.querySelector(".to-top");
_modules_library_functions_library_js__WEBPACK_IMPORTED_MODULE_7__.toTopButton(toTop);

await main();

/*---------------------MAIN-FUNCTION-DECLARATION-------------------*/


async function main(){
    try {
        // Create loading animation during loading news
        let loading = createLoading(_img_loading_1_gif__WEBPACK_IMPORTED_MODULE_5__);
        loading.style.marginTop = "8em";
        MAIN_CONTAINER.before(loading);

        // Call the master request for News list to Hacker News and stores it in a global variable
        let response = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.getRequest( baseUrl + newStories );
        newStoriesId = await response.data;

        // Gets a range for the News list from NEWS_LIMIT var
        // Store number of seen news
        let nNotice = lodash__WEBPACK_IMPORTED_MODULE_0___default().slice(response.data, seeNews, ( seeNews + NEWS_LIMIT ));
        seeNews += NEWS_LIMIT;

        // Makes the request to Hacker News API for each ID
        let arrayNews = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.getNoticeById( baseUrl, nNotice );

        // Create every notice by contructor and return them
        mainStories = _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.writeNotice(arrayNews);

        loading.remove();
        window.scrollTo(0,0);

        // Appends in HTML with CSS animation
        await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.animationAppendStories(mainStories, MAIN_CONTAINER);

        let button = _modules_library_functions_library_js__WEBPACK_IMPORTED_MODULE_7__.createButton("...vedi altro...", "button");
        button.id = "more-button";

        MAIN_CONTAINER.after(button);

        // Manage MORE news
        PAGE.addEventListener( 'click', seeMore );

        // update cycle for the latest news
        refreshCicle = refresh(refreshTime);      
        
        // LISTENER FOR COMMENTS
        PAGE.addEventListener("click", _modules_comments_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

    }
    catch(err) { errorOnMainRequest(err); }
}



/*------------------------------------Internal-Functions-Declaration-----------------------------------*/



/*----------------------------Get-last-News------------------------*/

function refresh(refreshTime) {

    return setInterval(async function() {
        let res;    
        try{
            res = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.refreshNews(baseUrl, newStories, MAIN_CONTAINER, newStoriesId[0]);
        }
        catch(err) { 
            _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.clearPage(PAGE, MAIN_CONTAINER);
            let msg = genericError(err); 
            if (msg) PAGE.before(msg);
        }

        if (res) {      // If there are new news, it UPDATES the news ids array
            newStoriesId = res.newsIds;
            seeNews += res.downloadedNews;
        }
    }, refreshTime * 1000);
}

/*---------------Get-id-of-more-news-and-get-the-request-----------*/


async function seeMore(e) {
    try{
        let button = e.target;

        if ( button.id !== "more-button" ) return;

        let loading = createLoading(_img_loading_1_gif__WEBPACK_IMPORTED_MODULE_5__);  // Create loading effect
        button.after(loading);

        let newsIds;
        let remainedNews = (newStoriesId.length - 1) - seeNews;

        // Check if there are news to load

        if ( ((seeNews + NEWS_LIMIT) < newStoriesId.length ) || remainedNews < NEWS_LIMIT)  {

            if ( remainedNews < NEWS_LIMIT) {

                // if the remaining news is less than NEWS_LIMITS
                // updates the range to treat

                newsIds = lodash__WEBPACK_IMPORTED_MODULE_0___default().slice(newStoriesId, seeNews, ( seeNews + remainedNews));    // get array of id
                await requireMoreNews( baseUrl, newsIds, loading, MAIN_CONTAINER, button );

                // Alerts that the news are finished
                noMoreNews( loading, PAGE, MAIN_CONTAINER );
            }

            else {

                // Goes normally

                newsIds = lodash__WEBPACK_IMPORTED_MODULE_0___default().slice(newStoriesId, seeNews, ( seeNews + NEWS_LIMIT));  // get array of id
                await requireMoreNews( baseUrl, newsIds, loading, MAIN_CONTAINER, button );
            }

            seeNews += NEWS_LIMIT;  // Update the number of written news
            
        }

        else {
            noMoreNews( loading, PAGE, MAIN_CONTAINER );
        }
    }
    catch(err) { 
        let msg = genericError(err); 
        if (msg) MAIN_CONTAINER.append(msg);
        throw err;
    }
}


/*--------------Do-the-request-for-news-by-newsIds-array-----------*/


async function requireMoreNews( baseUrl, newsIds, loading, mainContainer, button ) {

    return new Promise( async function( resolve,reject ){
        try{ 
            //Get request for each ID of "newsIds"
            let moreNews = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.getNoticeById( baseUrl, newsIds );           
            if ( moreNews instanceof Error ) reject(moreNews);

            // stories = Array of CARDs html code 
            let stories = _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.writeNotice(moreNews);   

            loading.remove();

            // append into container with animation
            await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.animationAppendStories(stories, mainContainer);
            
            mainContainer.after(button);
            resolve();
            
        }
        catch(err) { 
            let msg = genericError(err); 
            if (msg) MAIN_CONTAINER.append(msg);
            throw err;
        }
    } );

}

/*---------------------Create-loading-animation--------------------*/


function createLoading(LOAD_IMG){
    let loading = document.createElement('IMG');
    loading.src = LOAD_IMG;
    loading.id = 'loading';

    return loading;
}

/*----------------Shows-that-there-aren't-more-news----------------*/


function noMoreNews( loading, page, mainContainer ) {
    loading.remove();
    let message = document.createElement('DIV');
    message.classList.add("no-more-news");
    message.textContent = "No more news!";
    mainContainer.append(message);

    page.removeEventListener('click', seeMore);
}





/*--------------------------------------------Error-Handling-------------------------------------------*/


/*---------------------Create-error-message-DIV--------------------*/


function errorMessage() {
    let message = document.createElement('DIV');
    message.classList.add("error-message");
    message.textContent = "Qualcosa non va, prova ad aggiornare la pagina";

    return message;
}

/*-------------------Manage-error-in-MAIN-request------------------*/


function errorOnMainRequest(err) {

    clearInterval(refreshCicle);    // Removes the news update

    let message = errorMessage();   // create a message DIV

    PAGE.removeEventListener( 'click', seeMore );

    PAGE.before(message);

    if ( err instanceof _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.NewsError ) {

        errorOnMainRequest.retry++;

        if ( errorOnMainRequest.retry <= RETRY_TIMES ) {

            setTimeout( async function(){

                message.remove();

                await main();   //retry to load main function
            }, 5000 );
        }
        else if ( errorOnMainRequest.retry > RETRY_TIMES ) {

            console.log(err.message);

            errorOnMainRequest.retry = 0;
        }
    }

    else {
        throw err;
    }
}

/*---------------------------Manage-errors-------------------------*/


function genericError(err){

    clearInterval(refreshCicle);    // Removing last news download

    let message = errorMessage();   // Create an error message

    PAGE.removeEventListener( 'click', seeMore );   // Disable more-button

    if ( err instanceof _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_8__.NewsError ) {
        PAGE.before(message);
        return false;
    }
    else {
        return message;
    }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/assets/js/modules/classes/comment.js":
/*!**************************************************!*\
  !*** ./src/assets/js/modules/classes/comment.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _notice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice.js */ "./src/assets/js/modules/classes/notice.js");
/* harmony import */ var _img_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/user.png */ "./src/assets/img/user.png");


;


class Comment extends _notice_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /*---------------------------------------------------COMMENT-MANAGEMENT---------------------------------------------------*/

    exportHtmlElement() {
        

        if (!this.by && !this.text) return "";
    
        let body = `
             <div class="comment">
                <div class="user-container">
                    <img class="comment-img" src=${_img_user_png__WEBPACK_IMPORTED_MODULE_1__}>
                    <span class="card-text by">${this.by}:</span>
                </div>
    
                <div class="comment-text-container">
                    <p class="card-text text">${this.text}</p>
                    <span class="other">...altro</span>
                    <p class="card-text text-end data">${this.fullDate}-${this.fullHours}</p>
                </div>
               </div>
        `;
    
        return body;
    }
}

/***/ }),

/***/ "./src/assets/js/modules/classes/notice.js":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/classes/notice.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notice)
/* harmony export */ });
/* harmony import */ var _img_comment_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../img/comment.png */ "./src/assets/img/comment.png");



/*--------------------------------CLASS-NOTICE----------------------------------*/

class Notice{

    constructor(by, id, time, type, title, text, url, score, kids) {
        this.by = by;
        this.id = id;
        this.time = time;
        this.type = type;
        this.title = title;
        this.text = text;
        this.url = url;
        this.score = score;
        this.kids = kids;

        this.fullDate = this.convertTime(this.time);
        this.fullHours = this.convertHours(this.time);
        this.comment = this.commentButton();
    }

    /*---------------Convert-Date-from-Unix-Time-RETURNS-DD/MM/YYYY---------------*/

    convertTime(time) {
        let date = new Date( time * 1000 );

        let day = date.getDate(); 
        let mounth = date.getMonth() + 1; 
        let year = date.getFullYear();

        let fullItData;  

        if ( day > 0 && day < 10 ) {
            day = "0" + day;
        }

        if ( mounth > 0 && mounth < 10 ) {
            mounth = "0" + mounth;
        }

        fullItData = day + "/" + mounth + "/" + year;

        return fullItData;
    }

    /*----------------------Return-Hours-from-Unix-Time---------------------------*/


    convertHours(time) {
        let date = new Date( time * 1000 );

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if ( hours >= 0 && hours < 10 ) {
            hours = "0" + hours;
        }

        if ( minutes >= 0 && minutes < 10 ) {
            minutes = "0" + minutes;
        }

        if ( seconds >= 0 && seconds < 10 ) {
            seconds = "0" + seconds;
        }

        let fullHours = hours + ":" + minutes + ":" + seconds;

        return fullHours;
    }

    /*-----------------------------------------------------CARD-MANAGEMENT----------------------------------------------------*/

    /*-------------------Returns-HTML-code-IF-URL-is-present----------------------*/


    urlController() {
        if (this.url !== "" ) {
          return `<a href="${this.url}" target="_blank" class="card-link">${_.capitalize(this.type)} link</a>`;
        }
        else return "";  
    }

    /*-----------Returns-HTML-code-based-on-the-presence-of-text-or-title---------*/

    titleOrText() {
        if (this.title !== "" ) {
            return `<h5 class="card-title">${this.title}</h5>`;
          }
        else if (this.title == "" && this.text !== "") {
            return `
                <h5 class="card-title">${_.capitalize(this.type)}</h5>
                <p class="card-text">${this.text}</p>
            `;
          }
        else return ""; 
    }

    /*---------------------------Create-Comment-Button----------------------------*/


    commentButton() {
        if ( this.type == "story" ) {

            let id;

            if ( this.kids ) { id = this.id }
            else { id = "" }

            return `
                <button class="cardButton commentButton" type="button" data-id="${id}">
                    <span>Commenti: <span class="n-comments">${this.kids.length}</span></span>
                    <img src=${_img_comment_png__WEBPACK_IMPORTED_MODULE_0__} alt="comments" class="comment-icon">
                </button>
            `;
        }
        else return "";
    }


    /*--------------Creates-the-HTML-code-of-a-card-and-returns-it----------------*/

    exportHtmlElement() {

        let title = this.titleOrText();

        let url = this.urlController();
        let commentButton = this.commentButton();

        let none = ()=>{
            if (!url && !commentButton) {return `style = "display:none"`;}
            else { return "" }
        };

        let body = `
            <div class="card cards">
                <div class="card-body">

                    ${title}
                    <p class="card-text by">By: ${this.by}</p>
                    <p class="card-text text-end me-4">Data e ora:</p>
                    <p class="card-text text-end me-1">${this.fullDate}-${this.fullHours}</p>
                    
                </div>

                <div class="links-container" ${none()}> 
                    <div class="links" ${none()}>
                        ${commentButton}
                        ${url}
                    </div>         
                </div> 
            </div>
        `;
        return body;
    }

};


/*-------------------------------STATIC-PROPERTY--------------------------------*/

/*------Arrays that store the specific order to constructor arguments of Class-------------*/

Notice.argumentsOrder = ['by', 'id', 'time', 'type', 'title', 'text', 'url', 'score', 'kids'];

/***/ }),

/***/ "./src/assets/js/modules/comments.js":
/*!*******************************************!*\
  !*** ./src/assets/js/modules/comments.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ seeComments)
/* harmony export */ });
/* harmony import */ var _css_comment_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/comment.css */ "./src/assets/css/comment.css");
/* harmony import */ var _library_news_function_library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/news-function-library.js */ "./src/assets/js/modules/library/news-function-library.js");
/* harmony import */ var _library_functions_library_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/functions-library.js */ "./src/assets/js/modules/library/functions-library.js");
/* harmony import */ var _classes_comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/comment.js */ "./src/assets/js/modules/classes/comment.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main.js */ "./src/assets/js/main.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_1__, _main_js__WEBPACK_IMPORTED_MODULE_4__]);
([_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_1__, _main_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


;








async function seeComments(e) {

    let button = e.target.closest(".commentButton");

    /*-----------------If target isn't comment button-----------------*/

    if ( !button ) {

        if ( e.target.closest(".comment-container") ) return;

        // Removes comments by clicking anywhere in the document
        // EXCEPT the itself's comment

        let allComments = document.body.querySelectorAll(".comment-container");

        if ( allComments ) {

            for ( let comment of allComments) {
                commentTransition(comment, "comment-transition", "reverse");    // Remove all comments
            } 

            let allCards = document.body.querySelectorAll( ".cards") ;

            for ( let card of allCards) {       // Makes the border-radius at initial value
                card.classList.remove("show-comments");

                let linksContainer = card.querySelector( ".links-container") ;
                linksContainer.classList.remove("show-comments");
            } 
        } 

        return;
    }

    /*---------------------CLICK ON COMMENT BUTTON--------------------*/

    let card = e.target.closest(".cards");
    let linksContainer = card.querySelector(".links-container");

    if( !card.classList.contains("show-comments")) {    // SEE COMMENTS

        _main_js__WEBPACK_IMPORTED_MODULE_4__.PAGE.removeEventListener("click", seeComments);

        let id = button.dataset.id;     // getting the notice id

        let html;

        // Check the ID

        // NB the constructor of every Notice inserts its id in the button 
        // only if there are comments

        if ( id !== "" ){
            let commentObj = await getCommentsByNoticeId(id);
            html = commentObj.html;

            let commentButton = card.querySelector(".n-comments");
            commentButton.textContent = commentObj.nComments;
        }

        else if ( id == "" ){
            html = `<span>Non ci sono commenti</span>`
        }

        // Creates the elements that make up the comments

        card.classList.add("show-comments");    // Remove border-radius at the bottom of card
        linksContainer.classList.add("show-comments");  // Remove border-radius at the top of comment

        let div = document.createElement('DIV');        // Create container for comment
        div.classList.add( "comment-container" ,"visible" );
        
        card.after(div);
        commentTransition(div, "comment-transition", "normal");
       
        // Scrol for smarphone
        if ( window.innerWidth < 600 ) div.scrollIntoView("alignToTop");
        
        div.insertAdjacentHTML("beforeend", html);
        
        _main_js__WEBPACK_IMPORTED_MODULE_4__.PAGE.addEventListener("click", seeComments);
    }
    else {
        // Remove the comments by clicking on comment button

        let divComments = card.nextElementSibling.closest( ".comment-container");

        commentTransition(divComments, "comment-transition", "reverse");
        
        // Makes the border-radius at initial value
        card.classList.remove("show-comments");
        linksContainer.classList.remove("show-comments");

    }
}

/*-------------------------Get-HTML-Comments-----------------------*/

// getCommentsByNoticeId returns an HTML message
// in case of null/undefinided or void response

// else returns an object that has the HTML code of comments 
// and the number of how many are there

async function getCommentsByNoticeId(id) {

    let error = `<span style="color:red">Errore nel recupero del commento</span>`;

try{
        // Get Notice by ID
        let request = await _library_news_function_library_js__WEBPACK_IMPORTED_MODULE_1__.getNoticeById( _main_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl, [id] );

        // Put the comments array in commentsIds
        let commentsIds = request[0].kids;

        // Get the Comments by Ids
        let commentArr = await _library_news_function_library_js__WEBPACK_IMPORTED_MODULE_1__.getNoticeById( _main_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl, commentsIds );

        if ( !commentArr ) { return error; }

        // Get the array of HTML code by comments
        let htmlCommentArr = writeComment(commentArr);

        return {
            html: htmlCommentArr.reduce( (acc, html)=> {
                        let res = acc + html + `\n`;
                        return res;
                    }, "" ),

            nComments : commentsIds.length
        }
        
    }
    catch(err) { _library_news_function_library_js__WEBPACK_IMPORTED_MODULE_1__.forErrors(err, _main_js__WEBPACK_IMPORTED_MODULE_4__.PAGE, _main_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_CONTAINER) };

}



/*---------------------Write-COMMENTS-in-DOCUMENT------------------*/

function writeComment(comments){

    try{
        let res = [];

        for ( let data of comments ) {

            let comment = null;
            let property = null;

            // Creates CARD

            property = _library_functions_library_js__WEBPACK_IMPORTED_MODULE_2__.exstractProperty(data, _classes_comment_js__WEBPACK_IMPORTED_MODULE_3__["default"].argumentsOrder);

            comment = new _classes_comment_js__WEBPACK_IMPORTED_MODULE_3__["default"](...property);

            let html = comment.exportHtmlElement();

            res.push(html);     // Array of CARDs html code

        }
        return res;

    } catch(err){
        _library_news_function_library_js__WEBPACK_IMPORTED_MODULE_1__.clearPage(_main_js__WEBPACK_IMPORTED_MODULE_4__.PAGE, _main_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_CONTAINER);
        throw err;
    }
}

/*----------------------------TRANSITION---------------------------*/

function commentTransition(elem, cssClass, direction="normal") {

    let start = window.getComputedStyle(elem).getPropertyValue("--startTransition");
    let end = window.getComputedStyle(elem).getPropertyValue("--endTransition");

    elem.style.animationDirection = direction;
    elem.classList.add(cssClass);
    
    elem.onanimationend = ()=> {

        let top;
        
        if ( direction == "normal" ) {
            top=`${end}`;
            elem.style.top = top;
        }

        elem.classList.remove(cssClass);

        if ( direction == "reverse" ) {
            top=`${start}`;
            elem.style.top = top;
            elem.remove();
        }
    };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/assets/js/modules/library/functions-library.js":
/*!************************************************************!*\
  !*** ./src/assets/js/modules/library/functions-library.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "exstractProperty": () => (/* binding */ exstractProperty),
/* harmony export */   "getSimpleRequest": () => (/* binding */ getSimpleRequest),
/* harmony export */   "opacityTransion": () => (/* binding */ opacityTransion),
/* harmony export */   "toTopButton": () => (/* binding */ toTopButton)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


;

/*---------------------------------------------------DOM-ELEMENTS--------------------------------------------------*/

// Create simple button
// have 2 arguments

// text = desired text in button
// OPTIONAL - cssClass = The CSS class to associate with the button

function createButton(text, cssClass=false) {
  let button = document.createElement('BUTTON');

  if (cssClass) button.classList.add( cssClass );
  
  button.setAttribute("type", "button");
  button.textContent = text;

  return button;
}

/*----------------------------To-Top-button------------------------*/

// Create a scroll up button from a DOM element

function toTopButton(button) {

  // Ensures that the animation is done one time
  let control = true;

  button.onclick  = ()=> { 
    setTimeout(()=>{
      window.scrollTo(0,0);     
      button.blur();
    },300);
  };

  button.style.display = "none";

  window.onscroll = ()=> {

    let scroll = window.innerHeight;

    if ( window.pageYOffset > scroll && control  ) {
      opacityTransion(button, "to-top-opacity", "normal");
      control = false;
    } 
    else if ( window.pageYOffset <= scroll && !control ) {
      opacityTransion(button, "to-top-opacity", "reverse");
      control = true;
    } 
  };
}

/*---------------------------basic-animation-----------------------*/

// Basic animation based on: an element, css class that must have animation, 
// an optional argument: direction

function opacityTransion(elem, cssClass, direction="normal") {

  elem.style.display = "";
  elem.style.animationDirection = direction;
  elem.classList.add(cssClass);
  
  elem.onanimationend = ()=>{

    elem.classList.remove(cssClass);
    elem.onanimationend = null;

    if (direction == "reverse") elem.style.display = "none";
  };
  
}

/*-------------------------------------------------OBJECT-FUNCTIONS------------------------------------------------*/


/*-----------------------Exstract-Obj-Property---------------------*/

// This function returns an array from the OBJ values in a specific ORDER
// If a specific property doesn't exists, it puts a "" in the result array

//Example:

// obj { surname:"Rossi", age: 20, name:"Mario" }
// order [ "name", "surname", "age" ]

// result [ "Mario", "Rossi", 20 ]

function exstractProperty(obj, order) {
  let arrRes = [];

  for ( let prop of order ) {
    if( obj[prop] ){
      arrRes.push( obj[prop] );
    }
    else {
      arrRes.push( "" );
    }
  }

  return arrRes;

}

/*--------------------------------------------------NETWORK-REQUEST------------------------------------------------*/


/*------------------------Get-simple-request-----------------------*/

// Uses AXIOS

async function getSimpleRequest(url){

  return new Promise( function(resolve, reject) {
      axios.get( url, {
          params:{}
      })

      .then( (res) => { resolve(res) } )

      .catch( (err)=> { 
          console.log(err.message);
          reject(err);
      } );
  });
}

/***/ }),

/***/ "./src/assets/js/modules/library/news-function-library.js":
/*!****************************************************************!*\
  !*** ./src/assets/js/modules/library/news-function-library.js ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsError": () => (/* binding */ NewsError),
/* harmony export */   "animationAppendStories": () => (/* binding */ animationAppendStories),
/* harmony export */   "clearPage": () => (/* binding */ clearPage),
/* harmony export */   "errorPage": () => (/* binding */ errorPage),
/* harmony export */   "forErrors": () => (/* binding */ forErrors),
/* harmony export */   "getNoticeById": () => (/* binding */ getNoticeById),
/* harmony export */   "getRequest": () => (/* binding */ getRequest),
/* harmony export */   "printElement": () => (/* binding */ printElement),
/* harmony export */   "refreshNews": () => (/* binding */ refreshNews),
/* harmony export */   "writeNotice": () => (/* binding */ writeNotice)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _functions_library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions-library.js */ "./src/assets/js/modules/library/functions-library.js");
/* harmony import */ var _classes_notice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/notice.js */ "./src/assets/js/modules/classes/notice.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main.js */ "./src/assets/js/main.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_main_js__WEBPACK_IMPORTED_MODULE_2__]);
_main_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


;







class NewsError extends Error{
    constructor(message){
        super(message);
    }
}

/*-----------------------Function-CLEAR-PAGE-----------------------*/

function clearPage( page, container) {
    page.innerHTML = "";
    page.append(container);
    container.innerHTML = "";
    window.scrollTo(0,0);
}

/*------------------------Get-simple-request-----------------------*/

async function getRequest(url){

    return new Promise( function(resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get( url, {
            params:{
                print: 'pretty',
            }
        })
        .then( (res) => { resolve(res) } )
        .catch( (err)=> { 
            console.log(err.message);
            forErrors(err, _main_js__WEBPACK_IMPORTED_MODULE_2__.PAGE, _main_js__WEBPACK_IMPORTED_MODULE_2__.MAIN_CONTAINER);
            reject(err);
        } );
    });
}


/*-----------------------Get-news-by-array's-id--------------------*/

async function getNoticeById(baseUrl, news) {
    let arrNews = [];

    if ( !news ) return null;

    let requests = news.map((id)=> {
        let url = baseUrl + 'item/' + id + '.json';
        return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get( url );
    });

    return new Promise( function(resolve, reject) {

        Promise.all(requests)   /* Get request for each ID */
        .then((responses) => {
            responses.forEach((response) => {
                arrNews.push(response.data);
            });
        })
        .then( () => { resolve(arrNews) } )
        .catch( (err)=> { reject(forErrors(err, _main_js__WEBPACK_IMPORTED_MODULE_2__.PAGE, _main_js__WEBPACK_IMPORTED_MODULE_2__.MAIN_CONTAINER)) } );;
    });
}

/*-----------------------Write-NEWS-in-DOCUMENT--------------------*/

function writeNotice(news, container=false){

    try{
        let res = [];

        for ( let data of news ) {

            let notice = null;
            let property = null;

            // Creates CARD

            property = _functions_library_js__WEBPACK_IMPORTED_MODULE_0__.exstractProperty(data, _classes_notice_js__WEBPACK_IMPORTED_MODULE_1__["default"].argumentsOrder);

            notice = new _classes_notice_js__WEBPACK_IMPORTED_MODULE_1__["default"](...property);

            let card = notice.exportHtmlElement();

            if (container) {
                container.insertAdjacentHTML('beforeend',card);
            } else {
                res.push(card);     // Array of CARDs html code
            }

        }

        if (!container) {
            return res;     // If there isn't "container" argument, it returns RES array 
        }
    } catch(err){
        clearPage(_main_js__WEBPACK_IMPORTED_MODULE_2__.PAGE, _main_js__WEBPACK_IMPORTED_MODULE_2__.MAIN_CONTAINER);
        throw new NewsError(err);
    }
}

/*-------------------Requires-the-latest-news-update---------------*/


async function refreshNews(baseUrl, newStories, mainContainer, last) {

    // Call the master request for News list to Hacker News
    let response = await getRequest( baseUrl + newStories );
    let refreshNewsIds = response.data;

    // finds the index of the latest news id since the page was loaded
    let lastNotice = _.findIndex(refreshNewsIds, function(id) { return id == last; });

    // returns the new news id array
    let refreshNews = _.slice( refreshNewsIds, 0 , lastNotice );
    
    if ( refreshNews.length > 0 ){

        let arrayNews = await getNoticeById( baseUrl, refreshNews );

        // Create every notice by contructor and return them
        let createdStories = writeNotice(arrayNews);

        // Appends in HTML with CSS animation
        let div = document.createElement('DIV');
        div.classList.add("new-news");
        mainContainer.prepend(div);
        await animationAppendStories(createdStories, div);

        // returns an OBJ with updated ids array and the NUMBER of downloaded news
        return {
            newsIds : refreshNewsIds,
            downloadedNews: refreshNews.length
        };
        
    }
}

/*-----------------Append-stories-with-CSS-Animation---------------*/


async function animationAppendStories( arrStories, father, where='beforeend' ) {

    let container = document.createElement("DIV");
    container.classList.add("container-sm", "cards-container");

    return new Promise( function( resolve, reject ) {

        for ( let story of arrStories ) {
            container.insertAdjacentHTML(where, story);       
        }
               
        father.append(container);
        // CSS ANIMATION
        container.classList.add("opacity-transition");

        resolve();

    } );      
    
}

/*--------------------------Get-one-element------------------------*/   // for future implementations

async function printElement(baseUrl, id) {
    let url = baseUrl + 'item/' + id + '.json';

    return new Promise( function(resolve, reject) {

        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get( url, {
            params:{
                print: 'pretty',
            }
        })
        .then((response) => {
            let elem = writeNotice([response.data]);
            resolve(elem);
        })
        .catch( (err)=> { forErrors(err, _main_js__WEBPACK_IMPORTED_MODULE_2__.PAGE, _main_js__WEBPACK_IMPORTED_MODULE_2__.MAIN_CONTAINER) } );
    });
}

/*---------------------------------------Error-MANAGEMENT---------------------------------------*/



function forErrors(error, page, container){

      if (error.response) {
  
          errorPage(error.response.status, error.response.statusText, page, container);
          return error;
  
        } else if (error.request) {

            if ( !error.request.status && !error.request.statusText ){
                errorPage("", error.message, page, container);
            }
            else {
                errorPage(error.request.status, error.request.statusText, page, container);
            }
            return error;
            
      } else {
        throw error;
      }
      /* console.log(error.config);  */ 
  }

/*-------------------------Manage-error-page-----------------------*/

  function errorPage(status, statusText, page, container) {

    clearPage(page, container);

    let text = "";

    if ( status == "404" ) {
        text = "Page ";
    }

    let html = `
        <div class = "error-card" style = "margin-top:10em">
            <h1 style ='text-align:center'>Error ${status}</h1>
            <div style ='font-size:1.2em' >Something gone wrong: <div style ='color:red'>${text}${statusText}</div></div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', html);

  }
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230a58ca%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230a58ca%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230a58ca%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23adb5bd%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23adb5bd%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23adb5bd%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "./src/assets/img/comment.png":
/*!************************************!*\
  !*** ./src/assets/img/comment.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "assets/img/comment.b4d13715382a056dfe4d..png";

/***/ }),

/***/ "./src/assets/img/loading_1.gif":
/*!**************************************!*\
  !*** ./src/assets/img/loading_1.gif ***!
  \**************************************/
/***/ ((module) => {

module.exports = "assets/img/loading_1.7260ef9e09fd2eb751e2..gif";

/***/ }),

/***/ "./src/assets/img/user.png":
/*!*********************************!*\
  !*** ./src/assets/img/user.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "assets/img/user.96e3813b800162be1edf..png";

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknews"] = self["webpackChunknews"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_lodash_lodash_js--93ec57"], () => (__webpack_require__("./src/assets/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGNBQWMsV0FBVyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxjQUFjLE1BQU0sWUFBWSxPQUFPLEtBQUssYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLGNBQWMsT0FBTyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLE9BQU8sY0FBYyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0s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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvY3NzL2NhcmRzLmNzcyIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9jc3MvY29tbWVudC5jc3MiLCJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvY3NzL21haW4uY3NzIiwid2VicGFjazovL25ld3MvLi9zcmMvYXNzZXRzL2Nzcy9jYXJkcy5jc3M/YmYxNSIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9jc3MvY29tbWVudC5jc3M/ZDg5YyIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9jc3MvbWFpbi5jc3M/MWZiYSIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovL25ld3MvLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvY2xhc3Nlcy9jb21tZW50LmpzIiwid2VicGFjazovL25ld3MvLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvY2xhc3Nlcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvanMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2xpYnJhcnkvZnVuY3Rpb25zLWxpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvanMvbW9kdWxlcy9saWJyYXJ5L25ld3MtZnVuY3Rpb24tbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3Mvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS10aW1lVHJhbnNpdGlvbjogNjAwbXM7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3IgTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jYXJkc3tcXHJcXG4gICAgLS1jYXJkTWFyZ2luQm90dG9tIDogMmVtO1xcclxcbiAgICAtLWNhcmRzQm9yZGVyIDogIzM3NDc0RjtcXHJcXG5cXHJcXG4gICAgLS1EX2JnQ2FyZCA6ICMzNzQ3NEY7XFxyXFxuICAgIC0tRF9jYXJkVGV4dENvbG9yIDogcmdiKDI1NSwgMjU1LCAyNTUpOyBcXHJcXG4gICAgLS1EX2NhcmRMaW5rIDogIzAwMDAwMDsgLyogI2ZhZTQ5YTsgKi9cXHJcXG4gICAgLS1EX2NhcmRMaW5rVmlzaXRlZCA6IHJnYig3LCAxMjcsIDcpOyAvKiByZ2IoMTg4LCAyNDcsIDE4OCk7ICovXFxyXFxuXFxyXFxuICAgIC0tRF9jYXJkVGl0bGVDb2xvcjogI0ZGRDE4MDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCdXR0b24ge1xcclxcbiAgICAtLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAtLWNvbG9ySG92ZXI6ICM0MTQxNDE7XFxyXFxufVxcclxcblxcclxcbi5saW5rcy1jb250YWluZXIge1xcclxcbiAgICAtLWJnQ29sb3IgOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DQVJELU1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMCAwLjFlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jYXJkcyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTU7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWNhcmRNYXJnaW5Cb3R0b20pO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EX2JnQ2FyZCk7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggdmFyKC0tRF9iZ0NhcmQpOztcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZFRleHRDb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLVRpdGxlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmNhcmRzIGg1IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZFRpdGxlQ29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmV3cy1jb21tZW50LWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmNhcmRCdXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIC8qIGNvbG9yOiB2YXIoLS1jb2xvckhvdmVyKTsgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWljb24ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICB3aWR0aDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLUxpbmstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCAzcHggdmFyKC0tYmdDb2xvcik7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMS41ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3MtY29udGFpbmVyIGEsXFxyXFxuLmxpbmtzLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZHMgYTpob3ZlcixcXHJcXG4uY2FyZHMgYTpsaW5rIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZExpbmspO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMgYTp2aXNpdGVkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZExpbmtWaXNpdGVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5ld3MtQVVUSE9SLXVzZXJuYW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5ieSB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5ld3MtYWRkZWQtYnktUkVGUkVTSC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbi5uZXctbmV3cyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LW5ld3MgLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozNjBweCkgYW5kICggbWF4LXdpZHRoOjU3NnB4ICkge1xcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjU3NnB4ICkge1xcclxcblxcclxcbiAgICAubmV3LW5ld3MgLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMS4yZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZHM6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpbmtzIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSBhbmQgKCBtYXgtd2lkdGg6NzY4cHggKSB7XFxyXFxuXFxyXFxuICAgIC5jYXJkcyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjc2OHB4ICkgYW5kICggbWF4LXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6MTE0MHB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMjcwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmQtYm9keSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyZW0gMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2NhcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLHNGQUFzRjs7QUFFdEY7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCOztJQUV2QixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLHNCQUFzQixFQUFFLGFBQWE7SUFDckMsb0NBQW9DLEVBQUUsd0JBQXdCOztJQUU5RCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQSxzRkFBc0Y7OztBQUd0RjtJQUNJLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVzs7SUFFWCxVQUFVO0lBQ1Ysc0NBQXNDOztJQUV0QyxpQ0FBaUM7O0lBRWpDLFlBQVk7SUFDWix1Q0FBdUM7O0lBRXZDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCOztJQUU3QixrQkFBa0I7QUFDdEI7O0FBRUEscUVBQXFFOztBQUVyRTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQSxxRUFBcUU7O0FBRXJFO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQSxxRUFBcUU7O0FBRXJFO0lBQ0ksZ0NBQWdDO0lBQ2hDLHVDQUF1Qzs7SUFFdkMsYUFBYTtJQUNiLFdBQVc7O0lBRVgsWUFBWTs7SUFFWiw4QkFBOEI7SUFDOUIsK0JBQStCOztJQUUvQixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsV0FBVzs7SUFFWCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOzs7QUFHQTs7SUFFSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUEscUVBQXFFOztBQUVyRTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxxRUFBcUU7OztBQUdyRTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOzs7QUFHQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksVUFBVTtJQUNkOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tdGltZVRyYW5zaXRpb246IDYwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbG9yIE1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uY2FyZHN7XFxyXFxuICAgIC0tY2FyZE1hcmdpbkJvdHRvbSA6IDJlbTtcXHJcXG4gICAgLS1jYXJkc0JvcmRlciA6ICMzNzQ3NEY7XFxyXFxuXFxyXFxuICAgIC0tRF9iZ0NhcmQgOiAjMzc0NzRGO1xcclxcbiAgICAtLURfY2FyZFRleHRDb2xvciA6IHJnYigyNTUsIDI1NSwgMjU1KTsgXFxyXFxuICAgIC0tRF9jYXJkTGluayA6ICMwMDAwMDA7IC8qICNmYWU0OWE7ICovXFxyXFxuICAgIC0tRF9jYXJkTGlua1Zpc2l0ZWQgOiByZ2IoNywgMTI3LCA3KTsgLyogcmdiKDE4OCwgMjQ3LCAxODgpOyAqL1xcclxcblxcclxcbiAgICAtLURfY2FyZFRpdGxlQ29sb3I6ICNGRkQxODA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQnV0dG9uIHtcXHJcXG4gICAgLS1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgLS1jb2xvckhvdmVyOiAjNDE0MTQxO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3MtY29udGFpbmVyIHtcXHJcXG4gICAgLS1iZ0NvbG9yIDogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0FSRC1NYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMC4xZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY2FyZHMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE1O1xcclxcblxcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1jYXJkTWFyZ2luQm90dG9tKTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRF9iZ0NhcmQpO1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHZhcigtLURfYmdDYXJkKTs7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRUZXh0Q29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmV3cy1UaXRsZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jYXJkcyBoNSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRUaXRsZUNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5ld3MtY29tbWVudC1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jYXJkQnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCdXR0b246aG92ZXIge1xcclxcbiAgICAvKiBjb2xvcjogdmFyKC0tY29sb3JIb3Zlcik7ICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pY29uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmV3cy1MaW5rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5saW5rcy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggM3B4IHZhcigtLWJnQ29sb3IpO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzLWNvbnRhaW5lciBhLFxcclxcbi5saW5rcy1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3Mge1xcclxcbiAgICBwYWRkaW5nOiAwIDFlbTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhcmRzIGE6aG92ZXIsXFxyXFxuLmNhcmRzIGE6bGluayB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRMaW5rKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIGE6dmlzaXRlZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRMaW5rVmlzaXRlZCk7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLUFVVEhPUi11c2VybmFtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uYnkge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLWFkZGVkLWJ5LVJFRlJFU0gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4ubmV3LW5ld3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1uZXdzIC5jYXJkcy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMGVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMGVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzYwcHgpIGFuZCAoIG1heC13aWR0aDo1NzZweCApIHtcXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo1NzZweCApIHtcXHJcXG5cXHJcXG4gICAgLm5ldy1uZXdzIC5jYXJkcy1jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEuMmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkcy1jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMS4yZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRzOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkcyB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5saW5rcyB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjU3NnB4ICkgYW5kICggbWF4LXdpZHRoOjc2OHB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo3NjhweCApIGFuZCAoIG1heC13aWR0aDo5OTJweCApIHtcXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo5OTJweCApIHtcXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjExNDBweCApIHtcXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkLWJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZzogMmVtIDJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3ItTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYm9yZGVyQ29sb3IgOiAjMzc0NzRGO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYmdDb2xvciA6ICNFQ0VGRjE7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29tbWVudC1UcmFuc2l0aW9uLXZhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lcixcXHJcXG4uY29tbWVudC10cmFuc2l0aW9uLFxcclxcbiBtb3ZlWSB7XFxyXFxuICAgIC0tc3RhcnRUcmFuc2l0aW9uIDogLTE4MHB4O1xcclxcbiAgICAtLWVuZFRyYW5zaXRpb24gOiAtMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db21tZW50LU1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMge1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuXFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IHZhcigtLWJvcmRlckNvbG9yKTtcXHJcXG4gICAgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiB2YXIoLS1zdGFydFRyYW5zaXRpb24pO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb250YWluZXIgc3BhbntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICAgIHdpZHRoOiAyLjJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb21tZW50IHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICAvKiBtYXgtaGVpZ2h0OiAxNTBweDsgKi9cXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHQtY29udGFpbmVyIGEsXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIgY29kZSxcXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciBwcmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5vdGhlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVFJBTlNJVElPTi1NYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LXRyYW5zaXRpb24ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZVksIG9wYWNpdHk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cywgMC44cztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcywgMHM7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZVkge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRvcDogdmFyKC0tc3RhcnRUcmFuc2l0aW9uKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0b3A6IHZhcigtLWVuZFRyYW5zaXRpb24pO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA3MCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBLVFVRVJZLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM2MHB4KSBhbmQgKCBtYXgtd2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSBhbmQgKCBtYXgtd2lkdGg6NzY4cHggKSB7XFxyXFxuXFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjc2OHB4ICkgYW5kICggbWF4LXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6MTE0MHB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2NvbW1lbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUEsc0ZBQXNGOztBQUV0RjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxzRkFBc0Y7O0FBRXRGOzs7SUFHSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCOzs7QUFHQSxzRkFBc0Y7OztBQUd0RjtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjs7SUFFMUIsMENBQTBDOztJQUUxQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFdBQVc7O0lBRVgsVUFBVTs7SUFFVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7SUFFdkIsWUFBWTs7SUFFWix1QkFBdUI7O0lBRXZCLGtCQUFrQjs7SUFFbEIsZ0NBQWdDOztJQUVoQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxXQUFXOztJQUVYLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLG9CQUFvQjs7SUFFcEIsYUFBYTtBQUNqQjs7QUFFQSxzRkFBc0Y7O0FBRXRGO0lBQ0ksOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOzs7QUFHQSxzRkFBc0Y7OztBQUd0RjtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3ItTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYm9yZGVyQ29sb3IgOiAjMzc0NzRGO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYmdDb2xvciA6ICNFQ0VGRjE7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29tbWVudC1UcmFuc2l0aW9uLXZhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lcixcXHJcXG4uY29tbWVudC10cmFuc2l0aW9uLFxcclxcbiBtb3ZlWSB7XFxyXFxuICAgIC0tc3RhcnRUcmFuc2l0aW9uIDogLTE4MHB4O1xcclxcbiAgICAtLWVuZFRyYW5zaXRpb24gOiAtMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db21tZW50LU1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMge1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuXFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IHZhcigtLWJvcmRlckNvbG9yKTtcXHJcXG4gICAgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiB2YXIoLS1zdGFydFRyYW5zaXRpb24pO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb250YWluZXIgc3BhbntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICAgIHdpZHRoOiAyLjJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb21tZW50IHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICAvKiBtYXgtaGVpZ2h0OiAxNTBweDsgKi9cXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHQtY29udGFpbmVyIGEsXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIgY29kZSxcXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciBwcmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5vdGhlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVFJBTlNJVElPTi1NYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LXRyYW5zaXRpb24ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZVksIG9wYWNpdHk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cywgMC44cztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcywgMHM7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZVkge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRvcDogdmFyKC0tc3RhcnRUcmFuc2l0aW9uKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0b3A6IHZhcigtLWVuZFRyYW5zaXRpb24pO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA3MCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBLVFVRVJZLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM2MHB4KSBhbmQgKCBtYXgtd2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSBhbmQgKCBtYXgtd2lkdGg6NzY4cHggKSB7XFxyXFxuXFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjc2OHB4ICkgYW5kICggbWF4LXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6MTE0MHB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db2xvciBNYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuI2hlYWRlciwgI2Zvb3RlciB7XFxyXFxuICAgIC0teWVsbG93QmdUb3AgOiBsaW5lYXItZ3JhZGllbnQoICMyNjMyMzgsICM3ODkwOUMpO1xcclxcbiAgICAtLXllbGxvd0JnQm90dG9tOiBsaW5lYXItZ3JhZGllbnQoICNmZmZmZmYsICM3ODkwOUMsICMyNjMyMzgpO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLCAjcGFnZXtcXHJcXG4gICAgLS1oZWFkZXJIZWlnaHQ6IDI0ZW07XFxyXFxuICAgIC0taGVhZGVyQ29sb3IgOiByZ2IoMzcsIDU0LCAxNDkpO1xcclxcbiAgICAtLWZsYXNoTmV3c0NvbG9yIDogI2ZmZmZmZjtcXHJcXG4gICAgLS1oZWFkZXJUZXh0Q29sb3IgOiAjRkZEMTgwOyAgICAvKiAjMzEzMTMxICovXFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICAtLWNvbG9yOiAjRkZEMTgwO1xcclxcbiAgICAtLWJnQ29sb3I6ICM0MTU1NWY7XFxyXFxuICAgIC0tYmdDb2xvckhvdmVyOiAjNGI2MDZiO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuI3BhZ2Uge1xcclxcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHRyYW5zbGF0ZTogMCAtNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhFQURFUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVySGVpZ2h0KSAtIDZlbSk7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvd0JnVG9wKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDY1JTtcXHJcXG5cXHJcXG4gICAgY29sb3IgOiB2YXIoLS1oZWFkZXJUZXh0Q29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgaDEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZmxhc2hOZXdzQ29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogN3B4IDVweCAycHggIzMxMzEzMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzpjbGlwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CdXR0b24tQ2xhc3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNtb3JlLWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3JIb3Zlcik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmdDb2xvckhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNmb290ZXIge1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiAxNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3dCZ0JvdHRvbSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAtNXB4IDVweCAjZmZmZmZmO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU90aGVyLWVsZW1lbnRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiNsb2FkaW5nIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uby1tb3JlLW5ld3Mge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tdG9wIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgYm90dG9tOiAxNXB4O1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDE4MDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRSQU5TSVRJT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLmVsZW0taW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wYWNpdHktdHJhbnNpdGlvbiB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXRpbWVUcmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXHJcXG5cXHJcXG4gICAgZnJvbXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG8tdG9wLW9wYWNpdHkge1xcclxcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eS0wODtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS10aW1lVHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eS0wOCB7XFxyXFxuXFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG8tdG9wOmZvY3VzIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvVG9wO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246YWx0ZXJuYXRlO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwxLjE3LC4xNywuOTkpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRvVG9wIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2xhdGU6IDAgMDtcXHRcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2xhdGU6IDAgLTQwJTtcXHRcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRVJST1JTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmVycm9yLWNhcmQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkzLCAwLCAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiKDUwLCAwLCAwKTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjI4LCAyMjgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjQwMHB4ICkge1xcclxcblxcclxcbiAgICAuZXJyb3ItY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogMzQ0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo1NzZweCApIHtcXHJcXG5cXHJcXG4gICAgLnRleHQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXItdGV4dCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hlYWRlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWhlYWRlckhlaWdodCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3BhZ2Uge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIC04ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2xvYWRpbmcge1xcclxcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvLXRvcCB7XFxyXFxuICAgICAgICByaWdodDogMmVtO1xcclxcbiAgICAgICAgYm90dG9tOiAyZW07XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZXJyb3ItY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtYXgtaGVpZ2h0OiAzMGVtICkge1xcclxcblxcclxcbiAgICAjaGVhZGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXJIZWlnaHQpIC0gMTBlbSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3BhZ2Uge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIC00LjVlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixT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bkIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixxQ0FBcUM7O0lBRXJDLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7O1FBRVgsV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjs7QUFFQSx1Q0FBdUM7QUFDdkM7O0lBRUk7UUFDSSx3Q0FBd0M7SUFDNUM7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3IgTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiNoZWFkZXIsICNmb290ZXIge1xcclxcbiAgICAtLXllbGxvd0JnVG9wIDogbGluZWFyLWdyYWRpZW50KCAjMjYzMjM4LCAjNzg5MDlDKTtcXHJcXG4gICAgLS15ZWxsb3dCZ0JvdHRvbTogbGluZWFyLWdyYWRpZW50KCAjZmZmZmZmLCAjNzg5MDlDLCAjMjYzMjM4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciwgI3BhZ2V7XFxyXFxuICAgIC0taGVhZGVySGVpZ2h0OiAyNGVtO1xcclxcbiAgICAtLWhlYWRlckNvbG9yIDogcmdiKDM3LCA1NCwgMTQ5KTtcXHJcXG4gICAgLS1mbGFzaE5ld3NDb2xvciA6ICNmZmZmZmY7XFxyXFxuICAgIC0taGVhZGVyVGV4dENvbG9yIDogI0ZGRDE4MDsgICAgLyogIzMxMzEzMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgLS1jb2xvcjogI0ZGRDE4MDtcXHJcXG4gICAgLS1iZ0NvbG9yOiAjNDE1NTVmO1xcclxcbiAgICAtLWJnQ29sb3JIb3ZlcjogIzRiNjA2YjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNwYWdlIHtcXHJcXG4gICAgbWluLWhlaWdodDogODAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICB0cmFuc2xhdGU6IDAgLTRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1IRUFERVItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNoZWFkZXIge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlckhlaWdodCkgLSA2ZW0pO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3dCZ1RvcCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA2NSU7XFxyXFxuXFxyXFxuICAgIGNvbG9yIDogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZsYXNoTmV3c0NvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDdweCA1cHggMnB4ICMzMTMxMzE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6Y2xpcDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQnV0dG9uLUNsYXNzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4jbW9yZS1idXR0b24ge1xcclxcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9ySG92ZXIpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJnQ29sb3JIb3Zlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Gb290ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTVlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93QmdCb3R0b20pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgLTVweCA1cHggI2ZmZmZmZjtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1PdGhlci1lbGVtZW50cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4jbG9hZGluZyB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tbW9yZS1uZXdzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLXRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvdHRvbTogMTVweDtcXHJcXG4gICAgei1pbmRleDogMjA7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQxODA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuXFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UUkFOU0lUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbi5lbGVtLWludmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5vcGFjaXR5LXRyYW5zaXRpb24ge1xcclxcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS10aW1lVHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxyXFxuXFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRvLXRvcC1vcGFjaXR5IHtcXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHktMDg7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tdGltZVRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG9wYWNpdHktMDgge1xcclxcblxcclxcbiAgICBmcm9te1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvLXRvcDpmb2N1cyB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b1RvcDtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcclxcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOmFsdGVybmF0ZTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsMS4xNywuMTcsLjk5KTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0b1RvcCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIDA7XFx0XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIC00MCU7XFx0XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVSUk9SUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5lcnJvci1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MywgMCwgMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYig1MCwgMCwgMCk7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIyOCwgMjI4KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo0MDBweCApIHtcXHJcXG5cXHJcXG4gICAgLmVycm9yLWNhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDM0NHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSB7XFxyXFxuXFxyXFxuICAgIC50ZXh0LWNvbnRhaW5lciBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyLXRleHQge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNoZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXJIZWlnaHQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwYWdlIHtcXHJcXG4gICAgICAgIHRyYW5zbGF0ZTogMCAtOGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNsb2FkaW5nIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50by10b3Age1xcclxcbiAgICAgICAgcmlnaHQ6IDJlbTtcXHJcXG4gICAgICAgIGJvdHRvbTogMmVtO1xcclxcblxcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVycm9yLWNhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWF4LWhlaWdodDogMzBlbSApIHtcXHJcXG5cXHJcXG4gICAgI2hlYWRlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVySGVpZ2h0KSAtIDEwZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwYWdlIHtcXHJcXG4gICAgICAgIHRyYW5zbGF0ZTogMCAtNC41ZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbWVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSUJSQVJZLUlNUE9SVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DU1MtSU1QT1JULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2NhcmRzLmNzc1wiO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTU9EVUxFUy1JTVBPUlQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgTE9BRF9JTUcgZnJvbSBcIi4uL2ltZy9sb2FkaW5nXzEuZ2lmXCI7XHJcblxyXG5pbXBvcnQgc2VlQ29tbWVudHMgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRzLmpzJ1xyXG5pbXBvcnQgICogYXMgTGlicmFyeSAgZnJvbSAnLi9tb2R1bGVzL2xpYnJhcnkvZnVuY3Rpb25zLWxpYnJhcnkuanMnO1xyXG5pbXBvcnQgICogYXMgTmV3c0xpYnJhcnkgIGZyb20gJy4vbW9kdWxlcy9saWJyYXJ5L25ld3MtZnVuY3Rpb24tbGlicmFyeS5qcyc7XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVkFSLURFQ0xBUkFUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgY29uc3QgYmFzZVVybCA9ICdodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwLyc7XHJcbmV4cG9ydCBjb25zdCBuZXdTdG9yaWVzID0gJ25ld3N0b3JpZXMuanNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgUEFHRSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNwYWdlXCIpO1xyXG5leHBvcnQgY29uc3QgTUFJTl9DT05UQUlORVIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250YWluZXJcIik7XHJcblxyXG5sZXQgbmV3U3Rvcmllc0lkID0gbnVsbDsgICAgLy8gQWxsIG5ld3MgSURcclxubGV0IG1haW5TdG9yaWVzID0gbnVsbDsgICAgIC8vIEZpcnN0IGJsb2NrIG9mIHByaW50ZWQgbmV3cywgZGVjbGFyZWQgYXMgZ2xvYmFsIHZhcmlhYmxlIGZvciBmdXR1cmUgaW1wbGVtZW50YXRpb25zXHJcblxyXG5jb25zdCBORVdTX0xJTUlUID0gMTA7ICAvLyBjb21tYW5kcyB0aGUgbGltaXQgb2YgcHJpbnRlZCBuZXdzXHJcbmNvbnN0IFJFVFJZX1RJTUVTID0gMjsgIC8vIFRpbWVzIHRvIHJlbG9hZCBtYWluIFxyXG5cclxubGV0IHNlZU5ld3MgPSAwOyAvLyBudW1iZXIgb2Ygc2VlbiBuZXdzIC00ODYtXHJcblxyXG5sZXQgcmVmcmVzaENpY2xlID0gbnVsbDtcclxuXHJcbmxldCByZWZyZXNoVGltZSA9IDYwOyAgLy8gc2Vjb25kc1xyXG5cclxuZXJyb3JPbk1haW5SZXF1ZXN0LnJldHJ5ID0gMDtcclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NQUlOLVBST0dSQU0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vLyBUdXJuIC50by10b3AgZWxlbWVudCBpbiBhIHNjcm9sbCB1cCBidXR0b25cclxubGV0IHRvVG9wID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnRvLXRvcFwiKTtcclxuTGlicmFyeS50b1RvcEJ1dHRvbih0b1RvcCk7XHJcblxyXG5hd2FpdCBtYWluKCk7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLU1BSU4tRlVOQ1RJT04tREVDTEFSQVRJT04tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKCl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBsb2FkaW5nIGFuaW1hdGlvbiBkdXJpbmcgbG9hZGluZyBuZXdzXHJcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBjcmVhdGVMb2FkaW5nKExPQURfSU1HKTtcclxuICAgICAgICBsb2FkaW5nLnN0eWxlLm1hcmdpblRvcCA9IFwiOGVtXCI7XHJcbiAgICAgICAgTUFJTl9DT05UQUlORVIuYmVmb3JlKGxvYWRpbmcpO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRoZSBtYXN0ZXIgcmVxdWVzdCBmb3IgTmV3cyBsaXN0IHRvIEhhY2tlciBOZXdzIGFuZCBzdG9yZXMgaXQgaW4gYSBnbG9iYWwgdmFyaWFibGVcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBOZXdzTGlicmFyeS5nZXRSZXF1ZXN0KCBiYXNlVXJsICsgbmV3U3RvcmllcyApO1xyXG4gICAgICAgIG5ld1N0b3JpZXNJZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgIC8vIEdldHMgYSByYW5nZSBmb3IgdGhlIE5ld3MgbGlzdCBmcm9tIE5FV1NfTElNSVQgdmFyXHJcbiAgICAgICAgLy8gU3RvcmUgbnVtYmVyIG9mIHNlZW4gbmV3c1xyXG4gICAgICAgIGxldCBuTm90aWNlID0gXy5zbGljZShyZXNwb25zZS5kYXRhLCBzZWVOZXdzLCAoIHNlZU5ld3MgKyBORVdTX0xJTUlUICkpO1xyXG4gICAgICAgIHNlZU5ld3MgKz0gTkVXU19MSU1JVDtcclxuXHJcbiAgICAgICAgLy8gTWFrZXMgdGhlIHJlcXVlc3QgdG8gSGFja2VyIE5ld3MgQVBJIGZvciBlYWNoIElEXHJcbiAgICAgICAgbGV0IGFycmF5TmV3cyA9IGF3YWl0IE5ld3NMaWJyYXJ5LmdldE5vdGljZUJ5SWQoIGJhc2VVcmwsIG5Ob3RpY2UgKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGV2ZXJ5IG5vdGljZSBieSBjb250cnVjdG9yIGFuZCByZXR1cm4gdGhlbVxyXG4gICAgICAgIG1haW5TdG9yaWVzID0gTmV3c0xpYnJhcnkud3JpdGVOb3RpY2UoYXJyYXlOZXdzKTtcclxuXHJcbiAgICAgICAgbG9hZGluZy5yZW1vdmUoKTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kcyBpbiBIVE1MIHdpdGggQ1NTIGFuaW1hdGlvblxyXG4gICAgICAgIGF3YWl0IE5ld3NMaWJyYXJ5LmFuaW1hdGlvbkFwcGVuZFN0b3JpZXMobWFpblN0b3JpZXMsIE1BSU5fQ09OVEFJTkVSKTtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IExpYnJhcnkuY3JlYXRlQnV0dG9uKFwiLi4udmVkaSBhbHRyby4uLlwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uaWQgPSBcIm1vcmUtYnV0dG9uXCI7XHJcblxyXG4gICAgICAgIE1BSU5fQ09OVEFJTkVSLmFmdGVyKGJ1dHRvbik7XHJcblxyXG4gICAgICAgIC8vIE1hbmFnZSBNT1JFIG5ld3NcclxuICAgICAgICBQQUdFLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHNlZU1vcmUgKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGN5Y2xlIGZvciB0aGUgbGF0ZXN0IG5ld3NcclxuICAgICAgICByZWZyZXNoQ2ljbGUgPSByZWZyZXNoKHJlZnJlc2hUaW1lKTsgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBMSVNURU5FUiBGT1IgQ09NTUVOVFNcclxuICAgICAgICBQQUdFLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWVDb21tZW50cyk7XHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7IGVycm9yT25NYWluUmVxdWVzdChlcnIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JbnRlcm5hbC1GdW5jdGlvbnMtRGVjbGFyYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldC1sYXN0LU5ld3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuZnVuY3Rpb24gcmVmcmVzaChyZWZyZXNoVGltZSkge1xyXG5cclxuICAgIHJldHVybiBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgcmVzOyAgICBcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IE5ld3NMaWJyYXJ5LnJlZnJlc2hOZXdzKGJhc2VVcmwsIG5ld1N0b3JpZXMsIE1BSU5fQ09OVEFJTkVSLCBuZXdTdG9yaWVzSWRbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpIHsgXHJcbiAgICAgICAgICAgIE5ld3NMaWJyYXJ5LmNsZWFyUGFnZShQQUdFLCBNQUlOX0NPTlRBSU5FUik7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPSBnZW5lcmljRXJyb3IoZXJyKTsgXHJcbiAgICAgICAgICAgIGlmIChtc2cpIFBBR0UuYmVmb3JlKG1zZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzKSB7ICAgICAgLy8gSWYgdGhlcmUgYXJlIG5ldyBuZXdzLCBpdCBVUERBVEVTIHRoZSBuZXdzIGlkcyBhcnJheVxyXG4gICAgICAgICAgICBuZXdTdG9yaWVzSWQgPSByZXMubmV3c0lkcztcclxuICAgICAgICAgICAgc2VlTmV3cyArPSByZXMuZG93bmxvYWRlZE5ld3M7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgcmVmcmVzaFRpbWUgKiAxMDAwKTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS1HZXQtaWQtb2YtbW9yZS1uZXdzLWFuZC1nZXQtdGhlLXJlcXVlc3QtLS0tLS0tLS0tLSovXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VlTW9yZShlKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAoIGJ1dHRvbi5pZCAhPT0gXCJtb3JlLWJ1dHRvblwiICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbG9hZGluZyA9IGNyZWF0ZUxvYWRpbmcoTE9BRF9JTUcpOyAgLy8gQ3JlYXRlIGxvYWRpbmcgZWZmZWN0XHJcbiAgICAgICAgYnV0dG9uLmFmdGVyKGxvYWRpbmcpO1xyXG5cclxuICAgICAgICBsZXQgbmV3c0lkcztcclxuICAgICAgICBsZXQgcmVtYWluZWROZXdzID0gKG5ld1N0b3JpZXNJZC5sZW5ndGggLSAxKSAtIHNlZU5ld3M7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBuZXdzIHRvIGxvYWRcclxuXHJcbiAgICAgICAgaWYgKCAoKHNlZU5ld3MgKyBORVdTX0xJTUlUKSA8IG5ld1N0b3JpZXNJZC5sZW5ndGggKSB8fCByZW1haW5lZE5ld3MgPCBORVdTX0xJTUlUKSAge1xyXG5cclxuICAgICAgICAgICAgaWYgKCByZW1haW5lZE5ld3MgPCBORVdTX0xJTUlUKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJlbWFpbmluZyBuZXdzIGlzIGxlc3MgdGhhbiBORVdTX0xJTUlUU1xyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlcyB0aGUgcmFuZ2UgdG8gdHJlYXRcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdzSWRzID0gXy5zbGljZShuZXdTdG9yaWVzSWQsIHNlZU5ld3MsICggc2VlTmV3cyArIHJlbWFpbmVkTmV3cykpOyAgICAvLyBnZXQgYXJyYXkgb2YgaWRcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcXVpcmVNb3JlTmV3cyggYmFzZVVybCwgbmV3c0lkcywgbG9hZGluZywgTUFJTl9DT05UQUlORVIsIGJ1dHRvbiApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFsZXJ0cyB0aGF0IHRoZSBuZXdzIGFyZSBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgbm9Nb3JlTmV3cyggbG9hZGluZywgUEFHRSwgTUFJTl9DT05UQUlORVIgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR29lcyBub3JtYWxseVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld3NJZHMgPSBfLnNsaWNlKG5ld1N0b3JpZXNJZCwgc2VlTmV3cywgKCBzZWVOZXdzICsgTkVXU19MSU1JVCkpOyAgLy8gZ2V0IGFycmF5IG9mIGlkXHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXF1aXJlTW9yZU5ld3MoIGJhc2VVcmwsIG5ld3NJZHMsIGxvYWRpbmcsIE1BSU5fQ09OVEFJTkVSLCBidXR0b24gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VlTmV3cyArPSBORVdTX0xJTUlUOyAgLy8gVXBkYXRlIHRoZSBudW1iZXIgb2Ygd3JpdHRlbiBuZXdzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5vTW9yZU5ld3MoIGxvYWRpbmcsIFBBR0UsIE1BSU5fQ09OVEFJTkVSICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7IFxyXG4gICAgICAgIGxldCBtc2cgPSBnZW5lcmljRXJyb3IoZXJyKTsgXHJcbiAgICAgICAgaWYgKG1zZykgTUFJTl9DT05UQUlORVIuYXBwZW5kKG1zZyk7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLURvLXRoZS1yZXF1ZXN0LWZvci1uZXdzLWJ5LW5ld3NJZHMtYXJyYXktLS0tLS0tLS0tLSovXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZU1vcmVOZXdzKCBiYXNlVXJsLCBuZXdzSWRzLCBsb2FkaW5nLCBtYWluQ29udGFpbmVyLCBidXR0b24gKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCBhc3luYyBmdW5jdGlvbiggcmVzb2x2ZSxyZWplY3QgKXtcclxuICAgICAgICB0cnl7IFxyXG4gICAgICAgICAgICAvL0dldCByZXF1ZXN0IGZvciBlYWNoIElEIG9mIFwibmV3c0lkc1wiXHJcbiAgICAgICAgICAgIGxldCBtb3JlTmV3cyA9IGF3YWl0IE5ld3NMaWJyYXJ5LmdldE5vdGljZUJ5SWQoIGJhc2VVcmwsIG5ld3NJZHMgKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIG1vcmVOZXdzIGluc3RhbmNlb2YgRXJyb3IgKSByZWplY3QobW9yZU5ld3MpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmllcyA9IEFycmF5IG9mIENBUkRzIGh0bWwgY29kZSBcclxuICAgICAgICAgICAgbGV0IHN0b3JpZXMgPSBOZXdzTGlicmFyeS53cml0ZU5vdGljZShtb3JlTmV3cyk7ICAgXHJcblxyXG4gICAgICAgICAgICBsb2FkaW5nLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXBwZW5kIGludG8gY29udGFpbmVyIHdpdGggYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGF3YWl0IE5ld3NMaWJyYXJ5LmFuaW1hdGlvbkFwcGVuZFN0b3JpZXMoc3RvcmllcywgbWFpbkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFmdGVyKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycikgeyBcclxuICAgICAgICAgICAgbGV0IG1zZyA9IGdlbmVyaWNFcnJvcihlcnIpOyBcclxuICAgICAgICAgICAgaWYgKG1zZykgTUFJTl9DT05UQUlORVIuYXBwZW5kKG1zZyk7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICB9ICk7XHJcblxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLUNyZWF0ZS1sb2FkaW5nLWFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2FkaW5nKExPQURfSU1HKXtcclxuICAgIGxldCBsb2FkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBsb2FkaW5nLnNyYyA9IExPQURfSU1HO1xyXG4gICAgbG9hZGluZy5pZCA9ICdsb2FkaW5nJztcclxuXHJcbiAgICByZXR1cm4gbG9hZGluZztcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tU2hvd3MtdGhhdC10aGVyZS1hcmVuJ3QtbW9yZS1uZXdzLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuZnVuY3Rpb24gbm9Nb3JlTmV3cyggbG9hZGluZywgcGFnZSwgbWFpbkNvbnRhaW5lciApIHtcclxuICAgIGxvYWRpbmcucmVtb3ZlKCk7XHJcbiAgICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibm8tbW9yZS1uZXdzXCIpO1xyXG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTm8gbW9yZSBuZXdzIVwiO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobWVzc2FnZSk7XHJcblxyXG4gICAgcGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlZU1vcmUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVycm9yLUhhbmRsaW5nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1DcmVhdGUtZXJyb3ItbWVzc2FnZS1ESVYtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuZnVuY3Rpb24gZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImVycm9yLW1lc3NhZ2VcIik7XHJcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJRdWFsY29zYSBub24gdmEsIHByb3ZhIGFkIGFnZ2lvcm5hcmUgbGEgcGFnaW5hXCI7XHJcblxyXG4gICAgcmV0dXJuIG1lc3NhZ2U7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLU1hbmFnZS1lcnJvci1pbi1NQUlOLXJlcXVlc3QtLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGVycm9yT25NYWluUmVxdWVzdChlcnIpIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKHJlZnJlc2hDaWNsZSk7ICAgIC8vIFJlbW92ZXMgdGhlIG5ld3MgdXBkYXRlXHJcblxyXG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UoKTsgICAvLyBjcmVhdGUgYSBtZXNzYWdlIERJVlxyXG5cclxuICAgIFBBR0UucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgc2VlTW9yZSApO1xyXG5cclxuICAgIFBBR0UuYmVmb3JlKG1lc3NhZ2UpO1xyXG5cclxuICAgIGlmICggZXJyIGluc3RhbmNlb2YgTmV3c0xpYnJhcnkuTmV3c0Vycm9yICkge1xyXG5cclxuICAgICAgICBlcnJvck9uTWFpblJlcXVlc3QucmV0cnkrKztcclxuXHJcbiAgICAgICAgaWYgKCBlcnJvck9uTWFpblJlcXVlc3QucmV0cnkgPD0gUkVUUllfVElNRVMgKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBhc3luYyBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgbWFpbigpOyAgIC8vcmV0cnkgdG8gbG9hZCBtYWluIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIH0sIDUwMDAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGVycm9yT25NYWluUmVxdWVzdC5yZXRyeSA+IFJFVFJZX1RJTUVTICkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgZXJyb3JPbk1haW5SZXF1ZXN0LnJldHJ5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1hbmFnZS1lcnJvcnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5mdW5jdGlvbiBnZW5lcmljRXJyb3IoZXJyKXtcclxuXHJcbiAgICBjbGVhckludGVydmFsKHJlZnJlc2hDaWNsZSk7ICAgIC8vIFJlbW92aW5nIGxhc3QgbmV3cyBkb3dubG9hZFxyXG5cclxuICAgIGxldCBtZXNzYWdlID0gZXJyb3JNZXNzYWdlKCk7ICAgLy8gQ3JlYXRlIGFuIGVycm9yIG1lc3NhZ2VcclxuXHJcbiAgICBQQUdFLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHNlZU1vcmUgKTsgICAvLyBEaXNhYmxlIG1vcmUtYnV0dG9uXHJcblxyXG4gICAgaWYgKCBlcnIgaW5zdGFuY2VvZiBOZXdzTGlicmFyeS5OZXdzRXJyb3IgKSB7XHJcbiAgICAgICAgUEFHRS5iZWZvcmUobWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBOb3RpY2UgZnJvbSBcIi4vbm90aWNlLmpzXCI7XHJcbmltcG9ydCBVU0VSX0lNRyBmcm9tICcuLi8uLi8uLi9pbWcvdXNlci5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCBleHRlbmRzIE5vdGljZSB7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNPTU1FTlQtTUFOQUdFTUVOVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgZXhwb3J0SHRtbEVsZW1lbnQoKSB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5ieSAmJiAhdGhpcy50ZXh0KSByZXR1cm4gXCJcIjtcclxuICAgIFxyXG4gICAgICAgIGxldCBib2R5ID0gYFxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjb21tZW50LWltZ1wiIHNyYz0ke1VTRVJfSU1HfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGV4dCBieVwiPiR7dGhpcy5ieX06PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dFwiPiR7dGhpcy50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm90aGVyXCI+Li4uYWx0cm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1lbmQgZGF0YVwiPiR7dGhpcy5mdWxsRGF0ZX0tJHt0aGlzLmZ1bGxIb3Vyc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCBDT01NRU5UX0lNRyBmcm9tICcuLi8uLi8uLi9pbWcvY29tbWVudC5wbmcnO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNMQVNTLU5PVElDRS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJ5LCBpZCwgdGltZSwgdHlwZSwgdGl0bGUsIHRleHQsIHVybCwgc2NvcmUsIGtpZHMpIHtcclxuICAgICAgICB0aGlzLmJ5ID0gYnk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgdGhpcy5raWRzID0ga2lkcztcclxuXHJcbiAgICAgICAgdGhpcy5mdWxsRGF0ZSA9IHRoaXMuY29udmVydFRpbWUodGhpcy50aW1lKTtcclxuICAgICAgICB0aGlzLmZ1bGxIb3VycyA9IHRoaXMuY29udmVydEhvdXJzKHRoaXMudGltZSk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gdGhpcy5jb21tZW50QnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS1Db252ZXJ0LURhdGUtZnJvbS1Vbml4LVRpbWUtUkVUVVJOUy1ERC9NTS9ZWVlZLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBjb252ZXJ0VGltZSh0aW1lKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSggdGltZSAqIDEwMDAgKTtcclxuXHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpOyBcclxuICAgICAgICBsZXQgbW91bnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgXHJcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGxldCBmdWxsSXREYXRhOyAgXHJcblxyXG4gICAgICAgIGlmICggZGF5ID4gMCAmJiBkYXkgPCAxMCApIHtcclxuICAgICAgICAgICAgZGF5ID0gXCIwXCIgKyBkYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIG1vdW50aCA+IDAgJiYgbW91bnRoIDwgMTAgKSB7XHJcbiAgICAgICAgICAgIG1vdW50aCA9IFwiMFwiICsgbW91bnRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVsbEl0RGF0YSA9IGRheSArIFwiL1wiICsgbW91bnRoICsgXCIvXCIgKyB5ZWFyO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVsbEl0RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1SZXR1cm4tSG91cnMtZnJvbS1Vbml4LVRpbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbiAgICBjb252ZXJ0SG91cnModGltZSkge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoIHRpbWUgKiAxMDAwICk7XHJcblxyXG4gICAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGxldCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIGlmICggaG91cnMgPj0gMCAmJiBob3VycyA8IDEwICkge1xyXG4gICAgICAgICAgICBob3VycyA9IFwiMFwiICsgaG91cnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgMTAgKSB7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgMTAgKSB7XHJcbiAgICAgICAgICAgIHNlY29uZHMgPSBcIjBcIiArIHNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZnVsbEhvdXJzID0gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XHJcblxyXG4gICAgICAgIHJldHVybiBmdWxsSG91cnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNBUkQtTUFOQUdFTUVOVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLVJldHVybnMtSFRNTC1jb2RlLUlGLVVSTC1pcy1wcmVzZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICAgIHVybENvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsICE9PSBcIlwiICkge1xyXG4gICAgICAgICAgcmV0dXJuIGA8YSBocmVmPVwiJHt0aGlzLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImNhcmQtbGlua1wiPiR7Xy5jYXBpdGFsaXplKHRoaXMudHlwZSl9IGxpbms8L2E+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gXCJcIjsgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS1SZXR1cm5zLUhUTUwtY29kZS1iYXNlZC1vbi10aGUtcHJlc2VuY2Utb2YtdGV4dC1vci10aXRsZS0tLS0tLS0tLSovXHJcblxyXG4gICAgdGl0bGVPclRleHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGl0bGUgIT09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7dGhpcy50aXRsZX08L2g1PmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50aXRsZSA9PSBcIlwiICYmIHRoaXMudGV4dCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7Xy5jYXBpdGFsaXplKHRoaXMudHlwZSl9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+JHt0aGlzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIFwiXCI7IFxyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ3JlYXRlLUNvbW1lbnQtQnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICAgIGNvbW1lbnRCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLnR5cGUgPT0gXCJzdG9yeVwiICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmtpZHMgKSB7IGlkID0gdGhpcy5pZCB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBpZCA9IFwiXCIgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkQnV0dG9uIGNvbW1lbnRCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1pZD1cIiR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tbWVudGk6IDxzcGFuIGNsYXNzPVwibi1jb21tZW50c1wiPiR7dGhpcy5raWRzLmxlbmd0aH08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7Q09NTUVOVF9JTUd9IGFsdD1cImNvbW1lbnRzXCIgY2xhc3M9XCJjb21tZW50LWljb25cIj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tQ3JlYXRlcy10aGUtSFRNTC1jb2RlLW9mLWEtY2FyZC1hbmQtcmV0dXJucy1pdC0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIGV4cG9ydEh0bWxFbGVtZW50KCkge1xyXG5cclxuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnRpdGxlT3JUZXh0KCk7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnVybENvbnRyb2xsZXIoKTtcclxuICAgICAgICBsZXQgY29tbWVudEJ1dHRvbiA9IHRoaXMuY29tbWVudEJ1dHRvbigpO1xyXG5cclxuICAgICAgICBsZXQgbm9uZSA9ICgpPT57XHJcbiAgICAgICAgICAgIGlmICghdXJsICYmICFjb21tZW50QnV0dG9uKSB7cmV0dXJuIGBzdHlsZSA9IFwiZGlzcGxheTpub25lXCJgO31cclxuICAgICAgICAgICAgZWxzZSB7IHJldHVybiBcIlwiIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBieVwiPkJ5OiAke3RoaXMuYnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtZW5kIG1lLTRcIj5EYXRhIGUgb3JhOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LWVuZCBtZS0xXCI+JHt0aGlzLmZ1bGxEYXRlfS0ke3RoaXMuZnVsbEhvdXJzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rcy1jb250YWluZXJcIiAke25vbmUoKX0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiICR7bm9uZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtjb21tZW50QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3VybH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU1RBVElDLVBST1BFUlRZLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLyotLS0tLS1BcnJheXMgdGhhdCBzdG9yZSB0aGUgc3BlY2lmaWMgb3JkZXIgdG8gY29uc3RydWN0b3IgYXJndW1lbnRzIG9mIENsYXNzLS0tLS0tLS0tLS0tLSovXHJcblxyXG5Ob3RpY2UuYXJndW1lbnRzT3JkZXIgPSBbJ2J5JywgJ2lkJywgJ3RpbWUnLCAndHlwZScsICd0aXRsZScsICd0ZXh0JywgJ3VybCcsICdzY29yZScsICdraWRzJ107IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgJy4uLy4uL2Nzcy9jb21tZW50LmNzcyc7XHJcblxyXG5pbXBvcnQgICogYXMgTmV3c0xpYnJhcnkgIGZyb20gJy4vbGlicmFyeS9uZXdzLWZ1bmN0aW9uLWxpYnJhcnkuanMnO1xyXG5pbXBvcnQgICogYXMgTGlicmFyeSAgZnJvbSAnLi9saWJyYXJ5L2Z1bmN0aW9ucy1saWJyYXJ5LmpzJztcclxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9jbGFzc2VzL2NvbW1lbnQuanMnO1xyXG5cclxuaW1wb3J0IHsgUEFHRSwgTUFJTl9DT05UQUlORVIsIG5ld1N0b3JpZXMsIGJhc2VVcmwgfSBmcm9tICcuLi9tYWluLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWVDb21tZW50cyhlKSB7XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuY29tbWVudEJ1dHRvblwiKTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tSWYgdGFyZ2V0IGlzbid0IGNvbW1lbnQgYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIGlmICggIWJ1dHRvbiApIHtcclxuXHJcbiAgICAgICAgaWYgKCBlLnRhcmdldC5jbG9zZXN0KFwiLmNvbW1lbnQtY29udGFpbmVyXCIpICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmVzIGNvbW1lbnRzIGJ5IGNsaWNraW5nIGFueXdoZXJlIGluIHRoZSBkb2N1bWVudFxyXG4gICAgICAgIC8vIEVYQ0VQVCB0aGUgaXRzZWxmJ3MgY29tbWVudFxyXG5cclxuICAgICAgICBsZXQgYWxsQ29tbWVudHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tbWVudC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGlmICggYWxsQ29tbWVudHMgKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgY29tbWVudCBvZiBhbGxDb21tZW50cykge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudFRyYW5zaXRpb24oY29tbWVudCwgXCJjb21tZW50LXRyYW5zaXRpb25cIiwgXCJyZXZlcnNlXCIpOyAgICAvLyBSZW1vdmUgYWxsIGNvbW1lbnRzXHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxsQ2FyZHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiLmNhcmRzXCIpIDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBjYXJkIG9mIGFsbENhcmRzKSB7ICAgICAgIC8vIE1ha2VzIHRoZSBib3JkZXItcmFkaXVzIGF0IGluaXRpYWwgdmFsdWVcclxuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29tbWVudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmtzQ29udGFpbmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCBcIi5saW5rcy1jb250YWluZXJcIikgO1xyXG4gICAgICAgICAgICAgICAgbGlua3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29tbWVudHNcIik7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0xJQ0sgT04gQ09NTUVOVCBCVVRUT04tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgbGV0IGNhcmQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmNhcmRzXCIpO1xyXG4gICAgbGV0IGxpbmtzQ29udGFpbmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtzLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBpZiggIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvdy1jb21tZW50c1wiKSkgeyAgICAvLyBTRUUgQ09NTUVOVFNcclxuXHJcbiAgICAgICAgUEFHRS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VlQ29tbWVudHMpO1xyXG5cclxuICAgICAgICBsZXQgaWQgPSBidXR0b24uZGF0YXNldC5pZDsgICAgIC8vIGdldHRpbmcgdGhlIG5vdGljZSBpZFxyXG5cclxuICAgICAgICBsZXQgaHRtbDtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIElEXHJcblxyXG4gICAgICAgIC8vIE5CIHRoZSBjb25zdHJ1Y3RvciBvZiBldmVyeSBOb3RpY2UgaW5zZXJ0cyBpdHMgaWQgaW4gdGhlIGJ1dHRvbiBcclxuICAgICAgICAvLyBvbmx5IGlmIHRoZXJlIGFyZSBjb21tZW50c1xyXG5cclxuICAgICAgICBpZiAoIGlkICE9PSBcIlwiICl7XHJcbiAgICAgICAgICAgIGxldCBjb21tZW50T2JqID0gYXdhaXQgZ2V0Q29tbWVudHNCeU5vdGljZUlkKGlkKTtcclxuICAgICAgICAgICAgaHRtbCA9IGNvbW1lbnRPYmouaHRtbDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb21tZW50QnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLm4tY29tbWVudHNcIik7XHJcbiAgICAgICAgICAgIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSBjb21tZW50T2JqLm5Db21tZW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKCBpZCA9PSBcIlwiICl7XHJcbiAgICAgICAgICAgIGh0bWwgPSBgPHNwYW4+Tm9uIGNpIHNvbm8gY29tbWVudGk8L3NwYW4+YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlcyB0aGUgZWxlbWVudHMgdGhhdCBtYWtlIHVwIHRoZSBjb21tZW50c1xyXG5cclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbW1lbnRzXCIpOyAgICAvLyBSZW1vdmUgYm9yZGVyLXJhZGl1cyBhdCB0aGUgYm90dG9tIG9mIGNhcmRcclxuICAgICAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvdy1jb21tZW50c1wiKTsgIC8vIFJlbW92ZSBib3JkZXItcmFkaXVzIGF0IHRoZSB0b3Agb2YgY29tbWVudFxyXG5cclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7ICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciBjb21tZW50XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoIFwiY29tbWVudC1jb250YWluZXJcIiAsXCJ2aXNpYmxlXCIgKTtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkLmFmdGVyKGRpdik7XHJcbiAgICAgICAgY29tbWVudFRyYW5zaXRpb24oZGl2LCBcImNvbW1lbnQtdHJhbnNpdGlvblwiLCBcIm5vcm1hbFwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIFNjcm9sIGZvciBzbWFycGhvbmVcclxuICAgICAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwICkgZGl2LnNjcm9sbEludG9WaWV3KFwiYWxpZ25Ub1RvcFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFBBR0UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlZUNvbW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY29tbWVudHMgYnkgY2xpY2tpbmcgb24gY29tbWVudCBidXR0b25cclxuXHJcbiAgICAgICAgbGV0IGRpdkNvbW1lbnRzID0gY2FyZC5uZXh0RWxlbWVudFNpYmxpbmcuY2xvc2VzdCggXCIuY29tbWVudC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGNvbW1lbnRUcmFuc2l0aW9uKGRpdkNvbW1lbnRzLCBcImNvbW1lbnQtdHJhbnNpdGlvblwiLCBcInJldmVyc2VcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWFrZXMgdGhlIGJvcmRlci1yYWRpdXMgYXQgaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29tbWVudHNcIik7XHJcbiAgICAgICAgbGlua3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29tbWVudHNcIik7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HZXQtSFRNTC1Db21tZW50cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8vIGdldENvbW1lbnRzQnlOb3RpY2VJZCByZXR1cm5zIGFuIEhUTUwgbWVzc2FnZVxyXG4vLyBpbiBjYXNlIG9mIG51bGwvdW5kZWZpbmlkZWQgb3Igdm9pZCByZXNwb25zZVxyXG5cclxuLy8gZWxzZSByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGhhcyB0aGUgSFRNTCBjb2RlIG9mIGNvbW1lbnRzIFxyXG4vLyBhbmQgdGhlIG51bWJlciBvZiBob3cgbWFueSBhcmUgdGhlcmVcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzQnlOb3RpY2VJZChpZCkge1xyXG5cclxuICAgIGxldCBlcnJvciA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZFwiPkVycm9yZSBuZWwgcmVjdXBlcm8gZGVsIGNvbW1lbnRvPC9zcGFuPmA7XHJcblxyXG50cnl7XHJcbiAgICAgICAgLy8gR2V0IE5vdGljZSBieSBJRFxyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgTmV3c0xpYnJhcnkuZ2V0Tm90aWNlQnlJZCggYmFzZVVybCwgW2lkXSApO1xyXG5cclxuICAgICAgICAvLyBQdXQgdGhlIGNvbW1lbnRzIGFycmF5IGluIGNvbW1lbnRzSWRzXHJcbiAgICAgICAgbGV0IGNvbW1lbnRzSWRzID0gcmVxdWVzdFswXS5raWRzO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIENvbW1lbnRzIGJ5IElkc1xyXG4gICAgICAgIGxldCBjb21tZW50QXJyID0gYXdhaXQgTmV3c0xpYnJhcnkuZ2V0Tm90aWNlQnlJZCggYmFzZVVybCwgY29tbWVudHNJZHMgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhY29tbWVudEFyciApIHsgcmV0dXJuIGVycm9yOyB9XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgYXJyYXkgb2YgSFRNTCBjb2RlIGJ5IGNvbW1lbnRzXHJcbiAgICAgICAgbGV0IGh0bWxDb21tZW50QXJyID0gd3JpdGVDb21tZW50KGNvbW1lbnRBcnIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBodG1sOiBodG1sQ29tbWVudEFyci5yZWR1Y2UoIChhY2MsIGh0bWwpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYWNjICsgaHRtbCArIGBcXG5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFwiXCIgKSxcclxuXHJcbiAgICAgICAgICAgIG5Db21tZW50cyA6IGNvbW1lbnRzSWRzLmxlbmd0aFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNhdGNoKGVycikgeyBOZXdzTGlicmFyeS5mb3JFcnJvcnMoZXJyLCBQQUdFLCBNQUlOX0NPTlRBSU5FUikgfTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1Xcml0ZS1DT01NRU5UUy1pbi1ET0NVTUVOVC0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5mdW5jdGlvbiB3cml0ZUNvbW1lbnQoY29tbWVudHMpe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBsZXQgcmVzID0gW107XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBkYXRhIG9mIGNvbW1lbnRzICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlcyBDQVJEXHJcblxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IExpYnJhcnkuZXhzdHJhY3RQcm9wZXJ0eShkYXRhLCBDb21tZW50LmFyZ3VtZW50c09yZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbW1lbnQgPSBuZXcgQ29tbWVudCguLi5wcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaHRtbCA9IGNvbW1lbnQuZXhwb3J0SHRtbEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGh0bWwpOyAgICAgLy8gQXJyYXkgb2YgQ0FSRHMgaHRtbCBjb2RlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG5cclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBOZXdzTGlicmFyeS5jbGVhclBhZ2UoUEFHRSwgTUFJTl9DT05UQUlORVIpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVFJBTlNJVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5mdW5jdGlvbiBjb21tZW50VHJhbnNpdGlvbihlbGVtLCBjc3NDbGFzcywgZGlyZWN0aW9uPVwibm9ybWFsXCIpIHtcclxuXHJcbiAgICBsZXQgc3RhcnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zdGFydFRyYW5zaXRpb25cIik7XHJcbiAgICBsZXQgZW5kID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tZW5kVHJhbnNpdGlvblwiKTtcclxuXHJcbiAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbkRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICBcclxuICAgIGVsZW0ub25hbmltYXRpb25lbmQgPSAoKT0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRvcDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIGRpcmVjdGlvbiA9PSBcIm5vcm1hbFwiICkge1xyXG4gICAgICAgICAgICB0b3A9YCR7ZW5kfWA7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudG9wID0gdG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT0gXCJyZXZlcnNlXCIgKSB7XHJcbiAgICAgICAgICAgIHRvcD1gJHtzdGFydH1gO1xyXG4gICAgICAgICAgICBlbGVtLnN0eWxlLnRvcCA9IHRvcDtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ET00tRUxFTUVOVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vLyBDcmVhdGUgc2ltcGxlIGJ1dHRvblxyXG4vLyBoYXZlIDIgYXJndW1lbnRzXHJcblxyXG4vLyB0ZXh0ID0gZGVzaXJlZCB0ZXh0IGluIGJ1dHRvblxyXG4vLyBPUFRJT05BTCAtIGNzc0NsYXNzID0gVGhlIENTUyBjbGFzcyB0byBhc3NvY2lhdGUgd2l0aCB0aGUgYnV0dG9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIGNzc0NsYXNzPWZhbHNlKSB7XHJcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG5cclxuICBpZiAoY3NzQ2xhc3MpIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCBjc3NDbGFzcyApO1xyXG4gIFxyXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gIHJldHVybiBidXR0b247XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRvLVRvcC1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLy8gQ3JlYXRlIGEgc2Nyb2xsIHVwIGJ1dHRvbiBmcm9tIGEgRE9NIGVsZW1lbnRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1RvcEJ1dHRvbihidXR0b24pIHtcclxuXHJcbiAgLy8gRW5zdXJlcyB0aGF0IHRoZSBhbmltYXRpb24gaXMgZG9uZSBvbmUgdGltZVxyXG4gIGxldCBjb250cm9sID0gdHJ1ZTtcclxuXHJcbiAgYnV0dG9uLm9uY2xpY2sgID0gKCk9PiB7IFxyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTsgICAgIFxyXG4gICAgICBidXR0b24uYmx1cigpO1xyXG4gICAgfSwzMDApO1xyXG4gIH07XHJcblxyXG4gIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gIHdpbmRvdy5vbnNjcm9sbCA9ICgpPT4ge1xyXG5cclxuICAgIGxldCBzY3JvbGwgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiBzY3JvbGwgJiYgY29udHJvbCAgKSB7XHJcbiAgICAgIG9wYWNpdHlUcmFuc2lvbihidXR0b24sIFwidG8tdG9wLW9wYWNpdHlcIiwgXCJub3JtYWxcIik7XHJcbiAgICAgIGNvbnRyb2wgPSBmYWxzZTtcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0IDw9IHNjcm9sbCAmJiAhY29udHJvbCApIHtcclxuICAgICAgb3BhY2l0eVRyYW5zaW9uKGJ1dHRvbiwgXCJ0by10b3Atb3BhY2l0eVwiLCBcInJldmVyc2VcIik7XHJcbiAgICAgIGNvbnRyb2wgPSB0cnVlO1xyXG4gICAgfSBcclxuICB9O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWJhc2ljLWFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8vIEJhc2ljIGFuaW1hdGlvbiBiYXNlZCBvbjogYW4gZWxlbWVudCwgY3NzIGNsYXNzIHRoYXQgbXVzdCBoYXZlIGFuaW1hdGlvbiwgXHJcbi8vIGFuIG9wdGlvbmFsIGFyZ3VtZW50OiBkaXJlY3Rpb25cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5VHJhbnNpb24oZWxlbSwgY3NzQ2xhc3MsIGRpcmVjdGlvbj1cIm5vcm1hbFwiKSB7XHJcblxyXG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgZWxlbS5zdHlsZS5hbmltYXRpb25EaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuICBcclxuICBlbGVtLm9uYW5pbWF0aW9uZW5kID0gKCk9PntcclxuXHJcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xyXG4gICAgZWxlbS5vbmFuaW1hdGlvbmVuZCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcInJldmVyc2VcIikgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfTtcclxuICBcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tT0JKRUNULUZVTkNUSU9OUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUV4c3RyYWN0LU9iai1Qcm9wZXJ0eS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYW4gYXJyYXkgZnJvbSB0aGUgT0JKIHZhbHVlcyBpbiBhIHNwZWNpZmljIE9SREVSXHJcbi8vIElmIGEgc3BlY2lmaWMgcHJvcGVydHkgZG9lc24ndCBleGlzdHMsIGl0IHB1dHMgYSBcIlwiIGluIHRoZSByZXN1bHQgYXJyYXlcclxuXHJcbi8vRXhhbXBsZTpcclxuXHJcbi8vIG9iaiB7IHN1cm5hbWU6XCJSb3NzaVwiLCBhZ2U6IDIwLCBuYW1lOlwiTWFyaW9cIiB9XHJcbi8vIG9yZGVyIFsgXCJuYW1lXCIsIFwic3VybmFtZVwiLCBcImFnZVwiIF1cclxuXHJcbi8vIHJlc3VsdCBbIFwiTWFyaW9cIiwgXCJSb3NzaVwiLCAyMCBdXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhzdHJhY3RQcm9wZXJ0eShvYmosIG9yZGVyKSB7XHJcbiAgbGV0IGFyclJlcyA9IFtdO1xyXG5cclxuICBmb3IgKCBsZXQgcHJvcCBvZiBvcmRlciApIHtcclxuICAgIGlmKCBvYmpbcHJvcF0gKXtcclxuICAgICAgYXJyUmVzLnB1c2goIG9ialtwcm9wXSApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGFyclJlcy5wdXNoKCBcIlwiICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyUmVzO1xyXG5cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5FVFdPUkstUkVRVUVTVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HZXQtc2ltcGxlLXJlcXVlc3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vLyBVc2VzIEFYSU9TXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2ltcGxlUmVxdWVzdCh1cmwpe1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBheGlvcy5nZXQoIHVybCwge1xyXG4gICAgICAgICAgcGFyYW1zOnt9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAudGhlbiggKHJlcykgPT4geyByZXNvbHZlKHJlcykgfSApXHJcblxyXG4gICAgICAuY2F0Y2goIChlcnIpPT4geyBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9ICk7XHJcbiAgfSk7XHJcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgICogYXMgTGlicmFyeSAgZnJvbSAnLi9mdW5jdGlvbnMtbGlicmFyeS5qcyc7XHJcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY2xhc3Nlcy9ub3RpY2UuanMnO1xyXG5cclxuaW1wb3J0IHsgUEFHRSB9IGZyb20gJy4uLy4uL21haW4uanMnO1xyXG5pbXBvcnQgeyBNQUlOX0NPTlRBSU5FUiB9IGZyb20gJy4uLy4uL21haW4uanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld3NFcnJvciBleHRlbmRzIEVycm9ye1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1GdW5jdGlvbi1DTEVBUi1QQUdFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUGFnZSggcGFnZSwgY29udGFpbmVyKSB7XHJcbiAgICBwYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBwYWdlLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HZXQtc2ltcGxlLXJlcXVlc3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWVzdCh1cmwpe1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCB1cmwsIHtcclxuICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIHByaW50OiAncHJldHR5JyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oIChyZXMpID0+IHsgcmVzb2x2ZShyZXMpIH0gKVxyXG4gICAgICAgIC5jYXRjaCggKGVycik9PiB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGZvckVycm9ycyhlcnIsIFBBR0UsIE1BSU5fQ09OVEFJTkVSKTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2V0LW5ld3MtYnktYXJyYXkncy1pZC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RpY2VCeUlkKGJhc2VVcmwsIG5ld3MpIHtcclxuICAgIGxldCBhcnJOZXdzID0gW107XHJcblxyXG4gICAgaWYgKCAhbmV3cyApIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCByZXF1ZXN0cyA9IG5ld3MubWFwKChpZCk9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGJhc2VVcmwgKyAnaXRlbS8nICsgaWQgKyAnLmpzb24nO1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoIHVybCApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwocmVxdWVzdHMpICAgLyogR2V0IHJlcXVlc3QgZm9yIGVhY2ggSUQgKi9cclxuICAgICAgICAudGhlbigocmVzcG9uc2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyTmV3cy5wdXNoKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCAoKSA9PiB7IHJlc29sdmUoYXJyTmV3cykgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoZXJyKT0+IHsgcmVqZWN0KGZvckVycm9ycyhlcnIsIFBBR0UsIE1BSU5fQ09OVEFJTkVSKSkgfSApOztcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tV3JpdGUtTkVXUy1pbi1ET0NVTUVOVC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZU5vdGljZShuZXdzLCBjb250YWluZXI9ZmFsc2Upe1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBsZXQgcmVzID0gW107XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBkYXRhIG9mIG5ld3MgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm90aWNlID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgQ0FSRFxyXG5cclxuICAgICAgICAgICAgcHJvcGVydHkgPSBMaWJyYXJ5LmV4c3RyYWN0UHJvcGVydHkoZGF0YSwgTm90aWNlLmFyZ3VtZW50c09yZGVyKTtcclxuXHJcbiAgICAgICAgICAgIG5vdGljZSA9IG5ldyBOb3RpY2UoLi4ucHJvcGVydHkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhcmQgPSBub3RpY2UuZXhwb3J0SHRtbEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsY2FyZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMucHVzaChjYXJkKTsgICAgIC8vIEFycmF5IG9mIENBUkRzIGh0bWwgY29kZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlczsgICAgIC8vIElmIHRoZXJlIGlzbid0IFwiY29udGFpbmVyXCIgYXJndW1lbnQsIGl0IHJldHVybnMgUkVTIGFycmF5IFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBjbGVhclBhZ2UoUEFHRSwgTUFJTl9DT05UQUlORVIpO1xyXG4gICAgICAgIHRocm93IG5ldyBOZXdzRXJyb3IoZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tUmVxdWlyZXMtdGhlLWxhdGVzdC1uZXdzLXVwZGF0ZS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hOZXdzKGJhc2VVcmwsIG5ld1N0b3JpZXMsIG1haW5Db250YWluZXIsIGxhc3QpIHtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBtYXN0ZXIgcmVxdWVzdCBmb3IgTmV3cyBsaXN0IHRvIEhhY2tlciBOZXdzXHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXF1ZXN0KCBiYXNlVXJsICsgbmV3U3RvcmllcyApO1xyXG4gICAgbGV0IHJlZnJlc2hOZXdzSWRzID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAvLyBmaW5kcyB0aGUgaW5kZXggb2YgdGhlIGxhdGVzdCBuZXdzIGlkIHNpbmNlIHRoZSBwYWdlIHdhcyBsb2FkZWRcclxuICAgIGxldCBsYXN0Tm90aWNlID0gXy5maW5kSW5kZXgocmVmcmVzaE5ld3NJZHMsIGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpZCA9PSBsYXN0OyB9KTtcclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSBuZXcgbmV3cyBpZCBhcnJheVxyXG4gICAgbGV0IHJlZnJlc2hOZXdzID0gXy5zbGljZSggcmVmcmVzaE5ld3NJZHMsIDAgLCBsYXN0Tm90aWNlICk7XHJcbiAgICBcclxuICAgIGlmICggcmVmcmVzaE5ld3MubGVuZ3RoID4gMCApe1xyXG5cclxuICAgICAgICBsZXQgYXJyYXlOZXdzID0gYXdhaXQgZ2V0Tm90aWNlQnlJZCggYmFzZVVybCwgcmVmcmVzaE5ld3MgKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGV2ZXJ5IG5vdGljZSBieSBjb250cnVjdG9yIGFuZCByZXR1cm4gdGhlbVxyXG4gICAgICAgIGxldCBjcmVhdGVkU3RvcmllcyA9IHdyaXRlTm90aWNlKGFycmF5TmV3cyk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZHMgaW4gSFRNTCB3aXRoIENTUyBhbmltYXRpb25cclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXctbmV3c1wiKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLnByZXBlbmQoZGl2KTtcclxuICAgICAgICBhd2FpdCBhbmltYXRpb25BcHBlbmRTdG9yaWVzKGNyZWF0ZWRTdG9yaWVzLCBkaXYpO1xyXG5cclxuICAgICAgICAvLyByZXR1cm5zIGFuIE9CSiB3aXRoIHVwZGF0ZWQgaWRzIGFycmF5IGFuZCB0aGUgTlVNQkVSIG9mIGRvd25sb2FkZWQgbmV3c1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5ld3NJZHMgOiByZWZyZXNoTmV3c0lkcyxcclxuICAgICAgICAgICAgZG93bmxvYWRlZE5ld3M6IHJlZnJlc2hOZXdzLmxlbmd0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1BcHBlbmQtc3Rvcmllcy13aXRoLUNTUy1BbmltYXRpb24tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmltYXRpb25BcHBlbmRTdG9yaWVzKCBhcnJTdG9yaWVzLCBmYXRoZXIsIHdoZXJlPSdiZWZvcmVlbmQnICkge1xyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItc21cIiwgXCJjYXJkcy1jb250YWluZXJcIik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiggcmVzb2x2ZSwgcmVqZWN0ICkge1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgc3Rvcnkgb2YgYXJyU3RvcmllcyApIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCh3aGVyZSwgc3RvcnkpOyAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGZhdGhlci5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgICAgICAvLyBDU1MgQU5JTUFUSU9OXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5LXRyYW5zaXRpb25cIik7XHJcblxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICB9ICk7ICAgICAgXHJcbiAgICBcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldC1vbmUtZWxlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovICAgLy8gZm9yIGZ1dHVyZSBpbXBsZW1lbnRhdGlvbnNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmludEVsZW1lbnQoYmFzZVVybCwgaWQpIHtcclxuICAgIGxldCB1cmwgPSBiYXNlVXJsICsgJ2l0ZW0vJyArIGlkICsgJy5qc29uJztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgICBheGlvcy5nZXQoIHVybCwge1xyXG4gICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgcHJpbnQ6ICdwcmV0dHknLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsZW0gPSB3cml0ZU5vdGljZShbcmVzcG9uc2UuZGF0YV0pO1xyXG4gICAgICAgICAgICByZXNvbHZlKGVsZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCAoZXJyKT0+IHsgZm9yRXJyb3JzKGVyciwgUEFHRSwgTUFJTl9DT05UQUlORVIpIH0gKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVycm9yLU1BTkFHRU1FTlQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRXJyb3JzKGVycm9yLCBwYWdlLCBjb250YWluZXIpe1xyXG5cclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgXHJcbiAgICAgICAgICBlcnJvclBhZ2UoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0LCBwYWdlLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gIFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhZXJyb3IucmVxdWVzdC5zdGF0dXMgJiYgIWVycm9yLnJlcXVlc3Quc3RhdHVzVGV4dCApe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JQYWdlKFwiXCIsIGVycm9yLm1lc3NhZ2UsIHBhZ2UsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvclBhZ2UoZXJyb3IucmVxdWVzdC5zdGF0dXMsIGVycm9yLnJlcXVlc3Quc3RhdHVzVGV4dCwgcGFnZSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7ICAqLyBcclxuICB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NYW5hZ2UtZXJyb3ItcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVycm9yUGFnZShzdGF0dXMsIHN0YXR1c1RleHQsIHBhZ2UsIGNvbnRhaW5lcikge1xyXG5cclxuICAgIGNsZWFyUGFnZShwYWdlLCBjb250YWluZXIpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gXCJcIjtcclxuXHJcbiAgICBpZiAoIHN0YXR1cyA9PSBcIjQwNFwiICkge1xyXG4gICAgICAgIHRleHQgPSBcIlBhZ2UgXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiZXJyb3ItY2FyZFwiIHN0eWxlID0gXCJtYXJnaW4tdG9wOjEwZW1cIj5cclxuICAgICAgICAgICAgPGgxIHN0eWxlID0ndGV4dC1hbGlnbjpjZW50ZXInPkVycm9yICR7c3RhdHVzfTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGUgPSdmb250LXNpemU6MS4yZW0nID5Tb21ldGhpbmcgZ29uZSB3cm9uZzogPGRpdiBzdHlsZSA9J2NvbG9yOnJlZCc+JHt0ZXh0fSR7c3RhdHVzVGV4dH08L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcclxuXHJcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmICFxdWV1ZS5kKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IDEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua25ld3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbmV3c1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfYnVuZGxlX21pbl9qcy1ub2RlX21vZHVsZXNfbG9kYXNoX2xvZGFzaF9qcy0tOTNlYzU3XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=