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
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/assets/css/main.css");
/* harmony import */ var _css_cards_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/cards.css */ "./src/assets/css/cards.css");
/* harmony import */ var _img_loading_1_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/loading_1.gif */ "./src/assets/img/loading_1.gif");
/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comments.js */ "./src/assets/js/modules/comments.js");
/* harmony import */ var _modules_library_functions_library_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/library/functions-library.js */ "./src/assets/js/modules/library/functions-library.js");
/* harmony import */ var _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/library/news-function-library.js */ "./src/assets/js/modules/library/news-function-library.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_comments_js__WEBPACK_IMPORTED_MODULE_5__, _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__]);
([_modules_comments_js__WEBPACK_IMPORTED_MODULE_5__, _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/*-----------------------------------------------------------------*/

;







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
_modules_library_functions_library_js__WEBPACK_IMPORTED_MODULE_6__.toTopButton(toTop);

await main();

/* setTimeout( async()=>{ await main() }, 5000 ); */ // FOR DEBUG



/*---------------------MAIN-FUNCTION-DECLARATION-------------------*/


async function main(){
    try {
        // Create loading animation during loading news
        let loading = createLoading(_img_loading_1_gif__WEBPACK_IMPORTED_MODULE_4__);
        loading.style.marginTop = "8em";
        MAIN_CONTAINER.before(loading);

        // Call the master request for News list to Hacker News and stores it in a global variable
        let response = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.getRequest( baseUrl + newStories );
        newStoriesId = await response.data;

        // Gets a range for the News list from NEWS_LIMIT var
        // Store number of seen news
        let nNotice = lodash__WEBPACK_IMPORTED_MODULE_0___default().slice(response.data, seeNews, ( seeNews + NEWS_LIMIT ));
        seeNews += NEWS_LIMIT;

        // Makes the request to Hacker News API for each ID
        let arrayNews = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.getNoticeById( baseUrl, nNotice );

        // Create every notice by contructor and return them
        mainStories = _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.writeNotice(arrayNews);

        loading.remove();
        window.scrollTo(0,0);

        // Appends in HTML with CSS animation
        await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.animationAppendStories(mainStories, MAIN_CONTAINER);

        let button = _modules_library_functions_library_js__WEBPACK_IMPORTED_MODULE_6__.createButton("...vedi altro...", "button");
        button.id = "more-button";

        MAIN_CONTAINER.after(button);

        // Manage MORE news
        PAGE.addEventListener( 'click', seeMore );

        // update cycle for the latest news
        refreshCicle = refresh(refreshTime);      
        
        // LISTENER FOR COMMENTS
        PAGE.addEventListener("click", _modules_comments_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

    }
    catch(err) { errorOnMainRequest(err); }
}



/*------------------------------------Internal-Functions-Declaration-----------------------------------*/



/*----------------------------Get-last-News------------------------*/

function refresh(refreshTime) {

    return setInterval(async function() {
        let res;    
        try{
            res = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.refreshNews(baseUrl, newStories, MAIN_CONTAINER, newStoriesId[0]);
        }
        catch(err) { 
            _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.clearPage(PAGE, MAIN_CONTAINER);
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

        let loading = createLoading(_img_loading_1_gif__WEBPACK_IMPORTED_MODULE_4__);  // Create loading effect
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
            let moreNews = await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.getNoticeById( baseUrl, newsIds );           
            if ( moreNews instanceof Error ) reject(moreNews);

            // stories = Array of CARDs html code 
            let stories = _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.writeNotice(moreNews);   

            loading.remove();

            // append into container with animation
            await _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.animationAppendStories(stories, mainContainer);
            
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

    if ( err instanceof _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.NewsError ) {

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

    if ( err instanceof _modules_library_news_function_library_js__WEBPACK_IMPORTED_MODULE_7__.NewsError ) {
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lodash_lodash_js-node_modules_bootstrap_dist_css_bootstrap_min_css-node_-eae1c8"], () => (__webpack_require__("./src/assets/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGNBQWMsV0FBVyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxjQUFjLE1BQU0sWUFBWSxPQUFPLEtBQUssYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLGNBQWMsT0FBTyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLE9BQU8sY0FBYyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0s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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvY3NzL2NhcmRzLmNzcyIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9jc3MvY29tbWVudC5jc3MiLCJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvY3NzL21haW4uY3NzIiwid2VicGFjazovL25ld3MvLi9zcmMvYXNzZXRzL2Nzcy9jYXJkcy5jc3M/YmYxNSIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9jc3MvY29tbWVudC5jc3M/ZDg5YyIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9jc3MvbWFpbi5jc3M/MWZiYSIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovL25ld3MvLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvY2xhc3Nlcy9jb21tZW50LmpzIiwid2VicGFjazovL25ld3MvLi9zcmMvYXNzZXRzL2pzL21vZHVsZXMvY2xhc3Nlcy9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvanMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9uZXdzLy4vc3JjL2Fzc2V0cy9qcy9tb2R1bGVzL2xpYnJhcnkvZnVuY3Rpb25zLWxpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vbmV3cy8uL3NyYy9hc3NldHMvanMvbW9kdWxlcy9saWJyYXJ5L25ld3MtZnVuY3Rpb24tbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3Mvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXdzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS10aW1lVHJhbnNpdGlvbjogNjAwbXM7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3IgTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jYXJkc3tcXHJcXG4gICAgLS1jYXJkTWFyZ2luQm90dG9tIDogMmVtO1xcclxcbiAgICAtLWNhcmRzQm9yZGVyIDogIzM3NDc0RjtcXHJcXG5cXHJcXG4gICAgLS1EX2JnQ2FyZCA6ICMzNzQ3NEY7XFxyXFxuICAgIC0tRF9jYXJkVGV4dENvbG9yIDogcmdiKDI1NSwgMjU1LCAyNTUpOyBcXHJcXG4gICAgLS1EX2NhcmRMaW5rIDogIzAwMDAwMDsgLyogI2ZhZTQ5YTsgKi9cXHJcXG4gICAgLS1EX2NhcmRMaW5rVmlzaXRlZCA6IHJnYig3LCAxMjcsIDcpOyAvKiByZ2IoMTg4LCAyNDcsIDE4OCk7ICovXFxyXFxuXFxyXFxuICAgIC0tRF9jYXJkVGl0bGVDb2xvcjogI0ZGRDE4MDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCdXR0b24ge1xcclxcbiAgICAtLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAtLWNvbG9ySG92ZXI6ICM0MTQxNDE7XFxyXFxufVxcclxcblxcclxcbi5saW5rcy1jb250YWluZXIge1xcclxcbiAgICAtLWJnQ29sb3IgOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DQVJELU1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMCAwLjFlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jYXJkcyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTU7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWNhcmRNYXJnaW5Cb3R0b20pO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EX2JnQ2FyZCk7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggdmFyKC0tRF9iZ0NhcmQpOztcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZFRleHRDb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLVRpdGxlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmNhcmRzIGg1IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZFRpdGxlQ29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmV3cy1jb21tZW50LWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmNhcmRCdXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIC8qIGNvbG9yOiB2YXIoLS1jb2xvckhvdmVyKTsgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWljb24ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICB3aWR0aDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLUxpbmstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCAzcHggdmFyKC0tYmdDb2xvcik7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMS41ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3MtY29udGFpbmVyIGEsXFxyXFxuLmxpbmtzLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZHMgYTpob3ZlcixcXHJcXG4uY2FyZHMgYTpsaW5rIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZExpbmspO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMgYTp2aXNpdGVkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLURfY2FyZExpbmtWaXNpdGVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5ld3MtQVVUSE9SLXVzZXJuYW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5ieSB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5ld3MtYWRkZWQtYnktUkVGUkVTSC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbi5uZXctbmV3cyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LW5ld3MgLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozNjBweCkgYW5kICggbWF4LXdpZHRoOjU3NnB4ICkge1xcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjU3NnB4ICkge1xcclxcblxcclxcbiAgICAubmV3LW5ld3MgLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMS4yZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZHM6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpbmtzIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSBhbmQgKCBtYXgtd2lkdGg6NzY4cHggKSB7XFxyXFxuXFxyXFxuICAgIC5jYXJkcyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjc2OHB4ICkgYW5kICggbWF4LXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6MTE0MHB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMjcwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmQtYm9keSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyZW0gMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2NhcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLHNGQUFzRjs7QUFFdEY7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCOztJQUV2QixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLHNCQUFzQixFQUFFLGFBQWE7SUFDckMsb0NBQW9DLEVBQUUsd0JBQXdCOztJQUU5RCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQSxzRkFBc0Y7OztBQUd0RjtJQUNJLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVzs7SUFFWCxVQUFVO0lBQ1Ysc0NBQXNDOztJQUV0QyxpQ0FBaUM7O0lBRWpDLFlBQVk7SUFDWix1Q0FBdUM7O0lBRXZDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCOztJQUU3QixrQkFBa0I7QUFDdEI7O0FBRUEscUVBQXFFOztBQUVyRTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQSxxRUFBcUU7O0FBRXJFO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQSxxRUFBcUU7O0FBRXJFO0lBQ0ksZ0NBQWdDO0lBQ2hDLHVDQUF1Qzs7SUFFdkMsYUFBYTtJQUNiLFdBQVc7O0lBRVgsWUFBWTs7SUFFWiw4QkFBOEI7SUFDOUIsK0JBQStCOztJQUUvQixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsV0FBVzs7SUFFWCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOzs7QUFHQTs7SUFFSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUEscUVBQXFFOztBQUVyRTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxxRUFBcUU7OztBQUdyRTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOzs7QUFHQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksVUFBVTtJQUNkOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tdGltZVRyYW5zaXRpb246IDYwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbG9yIE1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uY2FyZHN7XFxyXFxuICAgIC0tY2FyZE1hcmdpbkJvdHRvbSA6IDJlbTtcXHJcXG4gICAgLS1jYXJkc0JvcmRlciA6ICMzNzQ3NEY7XFxyXFxuXFxyXFxuICAgIC0tRF9iZ0NhcmQgOiAjMzc0NzRGO1xcclxcbiAgICAtLURfY2FyZFRleHRDb2xvciA6IHJnYigyNTUsIDI1NSwgMjU1KTsgXFxyXFxuICAgIC0tRF9jYXJkTGluayA6ICMwMDAwMDA7IC8qICNmYWU0OWE7ICovXFxyXFxuICAgIC0tRF9jYXJkTGlua1Zpc2l0ZWQgOiByZ2IoNywgMTI3LCA3KTsgLyogcmdiKDE4OCwgMjQ3LCAxODgpOyAqL1xcclxcblxcclxcbiAgICAtLURfY2FyZFRpdGxlQ29sb3I6ICNGRkQxODA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQnV0dG9uIHtcXHJcXG4gICAgLS1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgLS1jb2xvckhvdmVyOiAjNDE0MTQxO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3MtY29udGFpbmVyIHtcXHJcXG4gICAgLS1iZ0NvbG9yIDogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0FSRC1NYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMC4xZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY2FyZHMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE1O1xcclxcblxcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1jYXJkTWFyZ2luQm90dG9tKTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRF9iZ0NhcmQpO1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHZhcigtLURfYmdDYXJkKTs7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRUZXh0Q29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmV3cy1UaXRsZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jYXJkcyBoNSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRUaXRsZUNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5ld3MtY29tbWVudC1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jYXJkQnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCdXR0b246aG92ZXIge1xcclxcbiAgICAvKiBjb2xvcjogdmFyKC0tY29sb3JIb3Zlcik7ICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pY29uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmV3cy1MaW5rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5saW5rcy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggM3B4IHZhcigtLWJnQ29sb3IpO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzLWNvbnRhaW5lciBhLFxcclxcbi5saW5rcy1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3Mge1xcclxcbiAgICBwYWRkaW5nOiAwIDFlbTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhcmRzIGE6aG92ZXIsXFxyXFxuLmNhcmRzIGE6bGluayB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRMaW5rKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIGE6dmlzaXRlZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1EX2NhcmRMaW5rVmlzaXRlZCk7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLUFVVEhPUi11c2VybmFtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uYnkge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXdzLWFkZGVkLWJ5LVJFRlJFU0gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4ubmV3LW5ld3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1uZXdzIC5jYXJkcy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMGVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMGVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzYwcHgpIGFuZCAoIG1heC13aWR0aDo1NzZweCApIHtcXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo1NzZweCApIHtcXHJcXG5cXHJcXG4gICAgLm5ldy1uZXdzIC5jYXJkcy1jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEuMmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkcy1jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMS4yZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRzOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkcyB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5saW5rcyB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjU3NnB4ICkgYW5kICggbWF4LXdpZHRoOjc2OHB4ICkge1xcclxcblxcclxcbiAgICAuY2FyZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo3NjhweCApIGFuZCAoIG1heC13aWR0aDo5OTJweCApIHtcXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo5OTJweCApIHtcXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjExNDBweCApIHtcXHJcXG5cXHJcXG4gICAgLmNhcmRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkLWJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZzogMmVtIDJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3ItTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYm9yZGVyQ29sb3IgOiAjMzc0NzRGO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYmdDb2xvciA6ICNFQ0VGRjE7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29tbWVudC1UcmFuc2l0aW9uLXZhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lcixcXHJcXG4uY29tbWVudC10cmFuc2l0aW9uLFxcclxcbiBtb3ZlWSB7XFxyXFxuICAgIC0tc3RhcnRUcmFuc2l0aW9uIDogLTE4MHB4O1xcclxcbiAgICAtLWVuZFRyYW5zaXRpb24gOiAtMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db21tZW50LU1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMge1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuXFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IHZhcigtLWJvcmRlckNvbG9yKTtcXHJcXG4gICAgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiB2YXIoLS1zdGFydFRyYW5zaXRpb24pO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb250YWluZXIgc3BhbntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICAgIHdpZHRoOiAyLjJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb21tZW50IHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICAvKiBtYXgtaGVpZ2h0OiAxNTBweDsgKi9cXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHQtY29udGFpbmVyIGEsXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIgY29kZSxcXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciBwcmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5vdGhlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVFJBTlNJVElPTi1NYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LXRyYW5zaXRpb24ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZVksIG9wYWNpdHk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cywgMC44cztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcywgMHM7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZVkge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRvcDogdmFyKC0tc3RhcnRUcmFuc2l0aW9uKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0b3A6IHZhcigtLWVuZFRyYW5zaXRpb24pO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA3MCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBLVFVRVJZLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM2MHB4KSBhbmQgKCBtYXgtd2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSBhbmQgKCBtYXgtd2lkdGg6NzY4cHggKSB7XFxyXFxuXFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjc2OHB4ICkgYW5kICggbWF4LXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6MTE0MHB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2NvbW1lbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUEsc0ZBQXNGOztBQUV0RjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxzRkFBc0Y7O0FBRXRGOzs7SUFHSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCOzs7QUFHQSxzRkFBc0Y7OztBQUd0RjtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjs7SUFFMUIsMENBQTBDOztJQUUxQyxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFdBQVc7O0lBRVgsVUFBVTs7SUFFVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7SUFFdkIsWUFBWTs7SUFFWix1QkFBdUI7O0lBRXZCLGtCQUFrQjs7SUFFbEIsZ0NBQWdDOztJQUVoQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxXQUFXOztJQUVYLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLG9CQUFvQjs7SUFFcEIsYUFBYTtBQUNqQjs7QUFFQSxzRkFBc0Y7O0FBRXRGO0lBQ0ksOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOzs7QUFHQSxzRkFBc0Y7OztBQUd0RjtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3ItTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYm9yZGVyQ29sb3IgOiAjMzc0NzRGO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIC0tYmdDb2xvciA6ICNFQ0VGRjE7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29tbWVudC1UcmFuc2l0aW9uLXZhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lcixcXHJcXG4uY29tbWVudC10cmFuc2l0aW9uLFxcclxcbiBtb3ZlWSB7XFxyXFxuICAgIC0tc3RhcnRUcmFuc2l0aW9uIDogLTE4MHB4O1xcclxcbiAgICAtLWVuZFRyYW5zaXRpb24gOiAtMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db21tZW50LU1hbmFnZW1lbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMge1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuXFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IHZhcigtLWJvcmRlckNvbG9yKTtcXHJcXG4gICAgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiB2YXIoLS1zdGFydFRyYW5zaXRpb24pO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb250YWluZXIgc3BhbntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICAgIHdpZHRoOiAyLjJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb21tZW50IHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICAvKiBtYXgtaGVpZ2h0OiAxNTBweDsgKi9cXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHQtY29udGFpbmVyIGEsXFxyXFxuLmNvbW1lbnQtdGV4dC1jb250YWluZXIgY29kZSxcXHJcXG4uY29tbWVudC10ZXh0LWNvbnRhaW5lciBwcmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5vdGhlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVFJBTlNJVElPTi1NYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5jb21tZW50LXRyYW5zaXRpb24ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZVksIG9wYWNpdHk7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cywgMC44cztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcywgMHM7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZVkge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRvcDogdmFyKC0tc3RhcnRUcmFuc2l0aW9uKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0b3A6IHZhcigtLWVuZFRyYW5zaXRpb24pO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA3MCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBLVFVRVJZLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM2MHB4KSBhbmQgKCBtYXgtd2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSB7XFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSBhbmQgKCBtYXgtd2lkdGg6NzY4cHggKSB7XFxyXFxuXFxyXFxuICAgIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjc2OHB4ICkgYW5kICggbWF4LXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjk5MnB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6MTE0MHB4ICkge1xcclxcblxcclxcbiAgICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db2xvciBNYW5hZ2VtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuI2hlYWRlciwgI2Zvb3RlciB7XFxyXFxuICAgIC0teWVsbG93QmdUb3AgOiBsaW5lYXItZ3JhZGllbnQoICMyNjMyMzgsICM3ODkwOUMpO1xcclxcbiAgICAtLXllbGxvd0JnQm90dG9tOiBsaW5lYXItZ3JhZGllbnQoICNmZmZmZmYsICM3ODkwOUMsICMyNjMyMzgpO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLCAjcGFnZXtcXHJcXG4gICAgLS1oZWFkZXJIZWlnaHQ6IDI0ZW07XFxyXFxuICAgIC0taGVhZGVyQ29sb3IgOiByZ2IoMzcsIDU0LCAxNDkpO1xcclxcbiAgICAtLWZsYXNoTmV3c0NvbG9yIDogI2ZmZmZmZjtcXHJcXG4gICAgLS1oZWFkZXJUZXh0Q29sb3IgOiAjRkZEMTgwOyAgICAvKiAjMzEzMTMxICovXFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICAtLWNvbG9yOiAjRkZEMTgwO1xcclxcbiAgICAtLWJnQ29sb3I6ICM0MTU1NWY7XFxyXFxuICAgIC0tYmdDb2xvckhvdmVyOiAjNGI2MDZiO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuI3BhZ2Uge1xcclxcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHRyYW5zbGF0ZTogMCAtNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhFQURFUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVySGVpZ2h0KSAtIDZlbSk7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvd0JnVG9wKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDY1JTtcXHJcXG5cXHJcXG4gICAgY29sb3IgOiB2YXIoLS1oZWFkZXJUZXh0Q29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgaDEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZmxhc2hOZXdzQ29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogN3B4IDVweCAycHggIzMxMzEzMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzpjbGlwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CdXR0b24tQ2xhc3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNtb3JlLWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3JIb3Zlcik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmdDb2xvckhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNmb290ZXIge1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiAxNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3dCZ0JvdHRvbSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAtNXB4IDVweCAjZmZmZmZmO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU90aGVyLWVsZW1lbnRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiNsb2FkaW5nIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uby1tb3JlLW5ld3Mge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tdG9wIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgYm90dG9tOiAxNXB4O1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDE4MDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRSQU5TSVRJT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLmVsZW0taW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wYWNpdHktdHJhbnNpdGlvbiB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXRpbWVUcmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXHJcXG5cXHJcXG4gICAgZnJvbXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG8tdG9wLW9wYWNpdHkge1xcclxcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eS0wODtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS10aW1lVHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eS0wOCB7XFxyXFxuXFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG8tdG9wOmZvY3VzIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvVG9wO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246YWx0ZXJuYXRlO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwxLjE3LC4xNywuOTkpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRvVG9wIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2xhdGU6IDAgMDtcXHRcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2xhdGU6IDAgLTQwJTtcXHRcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRVJST1JTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmVycm9yLWNhcmQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkzLCAwLCAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiKDUwLCAwLCAwKTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjI4LCAyMjgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWluLXdpZHRoOjQwMHB4ICkge1xcclxcblxcclxcbiAgICAuZXJyb3ItY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogMzQ0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo1NzZweCApIHtcXHJcXG5cXHJcXG4gICAgLnRleHQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXItdGV4dCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hlYWRlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWhlYWRlckhlaWdodCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3BhZ2Uge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIC04ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2xvYWRpbmcge1xcclxcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvLXRvcCB7XFxyXFxuICAgICAgICByaWdodDogMmVtO1xcclxcbiAgICAgICAgYm90dG9tOiAyZW07XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZXJyb3ItY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtYXgtaGVpZ2h0OiAzMGVtICkge1xcclxcblxcclxcbiAgICAjaGVhZGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXJIZWlnaHQpIC0gMTBlbSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3BhZ2Uge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIC00LjVlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5n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O0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixxQ0FBcUM7O0lBRXJDLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7O1FBRVgsV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjs7QUFFQSx1Q0FBdUM7QUFDdkM7O0lBRUk7UUFDSSx3Q0FBd0M7SUFDNUM7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3IgTWFuYWdlbWVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiNoZWFkZXIsICNmb290ZXIge1xcclxcbiAgICAtLXllbGxvd0JnVG9wIDogbGluZWFyLWdyYWRpZW50KCAjMjYzMjM4LCAjNzg5MDlDKTtcXHJcXG4gICAgLS15ZWxsb3dCZ0JvdHRvbTogbGluZWFyLWdyYWRpZW50KCAjZmZmZmZmLCAjNzg5MDlDLCAjMjYzMjM4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciwgI3BhZ2V7XFxyXFxuICAgIC0taGVhZGVySGVpZ2h0OiAyNGVtO1xcclxcbiAgICAtLWhlYWRlckNvbG9yIDogcmdiKDM3LCA1NCwgMTQ5KTtcXHJcXG4gICAgLS1mbGFzaE5ld3NDb2xvciA6ICNmZmZmZmY7XFxyXFxuICAgIC0taGVhZGVyVGV4dENvbG9yIDogI0ZGRDE4MDsgICAgLyogIzMxMzEzMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgLS1jb2xvcjogI0ZGRDE4MDtcXHJcXG4gICAgLS1iZ0NvbG9yOiAjNDE1NTVmO1xcclxcbiAgICAtLWJnQ29sb3JIb3ZlcjogIzRiNjA2YjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNwYWdlIHtcXHJcXG4gICAgbWluLWhlaWdodDogODAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICB0cmFuc2xhdGU6IDAgLTRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1IRUFERVItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbiNoZWFkZXIge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlckhlaWdodCkgLSA2ZW0pO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3dCZ1RvcCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA2NSU7XFxyXFxuXFxyXFxuICAgIGNvbG9yIDogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZsYXNoTmV3c0NvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDdweCA1cHggMnB4ICMzMTMxMzE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6Y2xpcDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQnV0dG9uLUNsYXNzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4jbW9yZS1idXR0b24ge1xcclxcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9ySG92ZXIpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJnQ29sb3JIb3Zlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Gb290ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTVlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93QmdCb3R0b20pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgLTVweCA1cHggI2ZmZmZmZjtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1PdGhlci1lbGVtZW50cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4jbG9hZGluZyB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tbW9yZS1uZXdzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLXRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvdHRvbTogMTVweDtcXHJcXG4gICAgei1pbmRleDogMjA7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQxODA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuXFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UUkFOU0lUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbi5lbGVtLWludmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5vcGFjaXR5LXRyYW5zaXRpb24ge1xcclxcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS10aW1lVHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxyXFxuXFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRvLXRvcC1vcGFjaXR5IHtcXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHktMDg7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tdGltZVRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG9wYWNpdHktMDgge1xcclxcblxcclxcbiAgICBmcm9te1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvLXRvcDpmb2N1cyB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b1RvcDtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcclxcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOmFsdGVybmF0ZTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsMS4xNywuMTcsLjk5KTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0b1RvcCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIDA7XFx0XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNsYXRlOiAwIC00MCU7XFx0XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVSUk9SUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi5lcnJvci1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MywgMCwgMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYig1MCwgMCwgMCk7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIyOCwgMjI4KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDo0MDBweCApIHtcXHJcXG5cXHJcXG4gICAgLmVycm9yLWNhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDM0NHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6NTc2cHggKSB7XFxyXFxuXFxyXFxuICAgIC50ZXh0LWNvbnRhaW5lciBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyLXRleHQge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNoZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXJIZWlnaHQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwYWdlIHtcXHJcXG4gICAgICAgIHRyYW5zbGF0ZTogMCAtOGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNsb2FkaW5nIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50by10b3Age1xcclxcbiAgICAgICAgcmlnaHQ6IDJlbTtcXHJcXG4gICAgICAgIGJvdHRvbTogMmVtO1xcclxcblxcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVycm9yLWNhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICggbWF4LWhlaWdodDogMzBlbSApIHtcXHJcXG5cXHJcXG4gICAgI2hlYWRlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVhZGVySGVpZ2h0KSAtIDEwZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwYWdlIHtcXHJcXG4gICAgICAgIHRyYW5zbGF0ZTogMCAtNC41ZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbWVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvY2FyZHMuY3NzXCI7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NT0RVTEVTLUlNUE9SVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCBMT0FEX0lNRyBmcm9tIFwiLi4vaW1nL2xvYWRpbmdfMS5naWZcIjtcclxuXHJcbmltcG9ydCBzZWVDb21tZW50cyBmcm9tICcuL21vZHVsZXMvY29tbWVudHMuanMnXHJcbmltcG9ydCAgKiBhcyBMaWJyYXJ5ICBmcm9tICcuL21vZHVsZXMvbGlicmFyeS9mdW5jdGlvbnMtbGlicmFyeS5qcyc7XHJcbmltcG9ydCAgKiBhcyBOZXdzTGlicmFyeSAgZnJvbSAnLi9tb2R1bGVzL2xpYnJhcnkvbmV3cy1mdW5jdGlvbi1saWJyYXJ5LmpzJztcclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WQVItREVDTEFSQVRJT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvJztcclxuZXhwb3J0IGNvbnN0IG5ld1N0b3JpZXMgPSAnbmV3c3Rvcmllcy5qc29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBQQUdFID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VcIik7XHJcbmV4cG9ydCBjb25zdCBNQUlOX0NPTlRBSU5FUiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRhaW5lclwiKTtcclxuXHJcbmxldCBuZXdTdG9yaWVzSWQgPSBudWxsOyAgICAvLyBBbGwgbmV3cyBJRFxyXG5sZXQgbWFpblN0b3JpZXMgPSBudWxsOyAgICAgLy8gRmlyc3QgYmxvY2sgb2YgcHJpbnRlZCBuZXdzLCBkZWNsYXJlZCBhcyBnbG9iYWwgdmFyaWFibGUgZm9yIGZ1dHVyZSBpbXBsZW1lbnRhdGlvbnNcclxuXHJcbmNvbnN0IE5FV1NfTElNSVQgPSAxMDsgIC8vIGNvbW1hbmRzIHRoZSBsaW1pdCBvZiBwcmludGVkIG5ld3NcclxuY29uc3QgUkVUUllfVElNRVMgPSAyOyAgLy8gVGltZXMgdG8gcmVsb2FkIG1haW4gXHJcblxyXG5sZXQgc2VlTmV3cyA9IDA7IC8vIG51bWJlciBvZiBzZWVuIG5ld3MgLTQ4Ni1cclxuXHJcbmxldCByZWZyZXNoQ2ljbGUgPSBudWxsO1xyXG5cclxubGV0IHJlZnJlc2hUaW1lID0gNjA7ICAvLyBzZWNvbmRzXHJcblxyXG5lcnJvck9uTWFpblJlcXVlc3QucmV0cnkgPSAwO1xyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1BSU4tUFJPR1JBTS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8vIFR1cm4gLnRvLXRvcCBlbGVtZW50IGluIGEgc2Nyb2xsIHVwIGJ1dHRvblxyXG5sZXQgdG9Ub3AgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIudG8tdG9wXCIpO1xyXG5MaWJyYXJ5LnRvVG9wQnV0dG9uKHRvVG9wKTtcclxuXHJcbmF3YWl0IG1haW4oKTtcclxuXHJcbi8qIHNldFRpbWVvdXQoIGFzeW5jKCk9PnsgYXdhaXQgbWFpbigpIH0sIDUwMDAgKTsgKi8gLy8gRk9SIERFQlVHXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUFJTi1GVU5DVElPTi1ERUNMQVJBVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGxvYWRpbmcgYW5pbWF0aW9uIGR1cmluZyBsb2FkaW5nIG5ld3NcclxuICAgICAgICBsZXQgbG9hZGluZyA9IGNyZWF0ZUxvYWRpbmcoTE9BRF9JTUcpO1xyXG4gICAgICAgIGxvYWRpbmcuc3R5bGUubWFyZ2luVG9wID0gXCI4ZW1cIjtcclxuICAgICAgICBNQUlOX0NPTlRBSU5FUi5iZWZvcmUobG9hZGluZyk7XHJcblxyXG4gICAgICAgIC8vIENhbGwgdGhlIG1hc3RlciByZXF1ZXN0IGZvciBOZXdzIGxpc3QgdG8gSGFja2VyIE5ld3MgYW5kIHN0b3JlcyBpdCBpbiBhIGdsb2JhbCB2YXJpYWJsZVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IE5ld3NMaWJyYXJ5LmdldFJlcXVlc3QoIGJhc2VVcmwgKyBuZXdTdG9yaWVzICk7XHJcbiAgICAgICAgbmV3U3Rvcmllc0lkID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgLy8gR2V0cyBhIHJhbmdlIGZvciB0aGUgTmV3cyBsaXN0IGZyb20gTkVXU19MSU1JVCB2YXJcclxuICAgICAgICAvLyBTdG9yZSBudW1iZXIgb2Ygc2VlbiBuZXdzXHJcbiAgICAgICAgbGV0IG5Ob3RpY2UgPSBfLnNsaWNlKHJlc3BvbnNlLmRhdGEsIHNlZU5ld3MsICggc2VlTmV3cyArIE5FV1NfTElNSVQgKSk7XHJcbiAgICAgICAgc2VlTmV3cyArPSBORVdTX0xJTUlUO1xyXG5cclxuICAgICAgICAvLyBNYWtlcyB0aGUgcmVxdWVzdCB0byBIYWNrZXIgTmV3cyBBUEkgZm9yIGVhY2ggSURcclxuICAgICAgICBsZXQgYXJyYXlOZXdzID0gYXdhaXQgTmV3c0xpYnJhcnkuZ2V0Tm90aWNlQnlJZCggYmFzZVVybCwgbk5vdGljZSApO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZXZlcnkgbm90aWNlIGJ5IGNvbnRydWN0b3IgYW5kIHJldHVybiB0aGVtXHJcbiAgICAgICAgbWFpblN0b3JpZXMgPSBOZXdzTGlicmFyeS53cml0ZU5vdGljZShhcnJheU5ld3MpO1xyXG5cclxuICAgICAgICBsb2FkaW5nLnJlbW92ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRzIGluIEhUTUwgd2l0aCBDU1MgYW5pbWF0aW9uXHJcbiAgICAgICAgYXdhaXQgTmV3c0xpYnJhcnkuYW5pbWF0aW9uQXBwZW5kU3RvcmllcyhtYWluU3RvcmllcywgTUFJTl9DT05UQUlORVIpO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uID0gTGlicmFyeS5jcmVhdGVCdXR0b24oXCIuLi52ZWRpIGFsdHJvLi4uXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9IFwibW9yZS1idXR0b25cIjtcclxuXHJcbiAgICAgICAgTUFJTl9DT05UQUlORVIuYWZ0ZXIoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8gTWFuYWdlIE1PUkUgbmV3c1xyXG4gICAgICAgIFBBR0UuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgc2VlTW9yZSApO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgY3ljbGUgZm9yIHRoZSBsYXRlc3QgbmV3c1xyXG4gICAgICAgIHJlZnJlc2hDaWNsZSA9IHJlZnJlc2gocmVmcmVzaFRpbWUpOyAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIExJU1RFTkVSIEZPUiBDT01NRU5UU1xyXG4gICAgICAgIFBBR0UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlZUNvbW1lbnRzKTtcclxuXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpIHsgZXJyb3JPbk1haW5SZXF1ZXN0KGVycik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUludGVybmFsLUZ1bmN0aW9ucy1EZWNsYXJhdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2V0LWxhc3QtTmV3cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5mdW5jdGlvbiByZWZyZXNoKHJlZnJlc2hUaW1lKSB7XHJcblxyXG4gICAgcmV0dXJuIHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCByZXM7ICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgTmV3c0xpYnJhcnkucmVmcmVzaE5ld3MoYmFzZVVybCwgbmV3U3RvcmllcywgTUFJTl9DT05UQUlORVIsIG5ld1N0b3JpZXNJZFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycikgeyBcclxuICAgICAgICAgICAgTmV3c0xpYnJhcnkuY2xlYXJQYWdlKFBBR0UsIE1BSU5fQ09OVEFJTkVSKTtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IGdlbmVyaWNFcnJvcihlcnIpOyBcclxuICAgICAgICAgICAgaWYgKG1zZykgUEFHRS5iZWZvcmUobXNnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXMpIHsgICAgICAvLyBJZiB0aGVyZSBhcmUgbmV3IG5ld3MsIGl0IFVQREFURVMgdGhlIG5ld3MgaWRzIGFycmF5XHJcbiAgICAgICAgICAgIG5ld1N0b3JpZXNJZCA9IHJlcy5uZXdzSWRzO1xyXG4gICAgICAgICAgICBzZWVOZXdzICs9IHJlcy5kb3dubG9hZGVkTmV3cztcclxuICAgICAgICB9XHJcbiAgICB9LCByZWZyZXNoVGltZSAqIDEwMDApO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLUdldC1pZC1vZi1tb3JlLW5ld3MtYW5kLWdldC10aGUtcmVxdWVzdC0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWVNb3JlKGUpIHtcclxuICAgIHRyeXtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmICggYnV0dG9uLmlkICE9PSBcIm1vcmUtYnV0dG9uXCIgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBsb2FkaW5nID0gY3JlYXRlTG9hZGluZyhMT0FEX0lNRyk7ICAvLyBDcmVhdGUgbG9hZGluZyBlZmZlY3RcclxuICAgICAgICBidXR0b24uYWZ0ZXIobG9hZGluZyk7XHJcblxyXG4gICAgICAgIGxldCBuZXdzSWRzO1xyXG4gICAgICAgIGxldCByZW1haW5lZE5ld3MgPSAobmV3U3Rvcmllc0lkLmxlbmd0aCAtIDEpIC0gc2VlTmV3cztcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIG5ld3MgdG8gbG9hZFxyXG5cclxuICAgICAgICBpZiAoICgoc2VlTmV3cyArIE5FV1NfTElNSVQpIDwgbmV3U3Rvcmllc0lkLmxlbmd0aCApIHx8IHJlbWFpbmVkTmV3cyA8IE5FV1NfTElNSVQpICB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHJlbWFpbmVkTmV3cyA8IE5FV1NfTElNSVQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVtYWluaW5nIG5ld3MgaXMgbGVzcyB0aGFuIE5FV1NfTElNSVRTXHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGVzIHRoZSByYW5nZSB0byB0cmVhdFxyXG5cclxuICAgICAgICAgICAgICAgIG5ld3NJZHMgPSBfLnNsaWNlKG5ld1N0b3JpZXNJZCwgc2VlTmV3cywgKCBzZWVOZXdzICsgcmVtYWluZWROZXdzKSk7ICAgIC8vIGdldCBhcnJheSBvZiBpZFxyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVxdWlyZU1vcmVOZXdzKCBiYXNlVXJsLCBuZXdzSWRzLCBsb2FkaW5nLCBNQUlOX0NPTlRBSU5FUiwgYnV0dG9uICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWxlcnRzIHRoYXQgdGhlIG5ld3MgYXJlIGZpbmlzaGVkXHJcbiAgICAgICAgICAgICAgICBub01vcmVOZXdzKCBsb2FkaW5nLCBQQUdFLCBNQUlOX0NPTlRBSU5FUiApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHb2VzIG5vcm1hbGx5XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3c0lkcyA9IF8uc2xpY2UobmV3U3Rvcmllc0lkLCBzZWVOZXdzLCAoIHNlZU5ld3MgKyBORVdTX0xJTUlUKSk7ICAvLyBnZXQgYXJyYXkgb2YgaWRcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcXVpcmVNb3JlTmV3cyggYmFzZVVybCwgbmV3c0lkcywgbG9hZGluZywgTUFJTl9DT05UQUlORVIsIGJ1dHRvbiApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWVOZXdzICs9IE5FV1NfTElNSVQ7ICAvLyBVcGRhdGUgdGhlIG51bWJlciBvZiB3cml0dGVuIG5ld3NcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm9Nb3JlTmV3cyggbG9hZGluZywgUEFHRSwgTUFJTl9DT05UQUlORVIgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpIHsgXHJcbiAgICAgICAgbGV0IG1zZyA9IGdlbmVyaWNFcnJvcihlcnIpOyBcclxuICAgICAgICBpZiAobXNnKSBNQUlOX0NPTlRBSU5FUi5hcHBlbmQobXNnKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tRG8tdGhlLXJlcXVlc3QtZm9yLW5ld3MtYnktbmV3c0lkcy1hcnJheS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlTW9yZU5ld3MoIGJhc2VVcmwsIG5ld3NJZHMsIGxvYWRpbmcsIG1haW5Db250YWluZXIsIGJ1dHRvbiApIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIGFzeW5jIGZ1bmN0aW9uKCByZXNvbHZlLHJlamVjdCApe1xyXG4gICAgICAgIHRyeXsgXHJcbiAgICAgICAgICAgIC8vR2V0IHJlcXVlc3QgZm9yIGVhY2ggSUQgb2YgXCJuZXdzSWRzXCJcclxuICAgICAgICAgICAgbGV0IG1vcmVOZXdzID0gYXdhaXQgTmV3c0xpYnJhcnkuZ2V0Tm90aWNlQnlJZCggYmFzZVVybCwgbmV3c0lkcyApOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggbW9yZU5ld3MgaW5zdGFuY2VvZiBFcnJvciApIHJlamVjdChtb3JlTmV3cyk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9yaWVzID0gQXJyYXkgb2YgQ0FSRHMgaHRtbCBjb2RlIFxyXG4gICAgICAgICAgICBsZXQgc3RvcmllcyA9IE5ld3NMaWJyYXJ5LndyaXRlTm90aWNlKG1vcmVOZXdzKTsgICBcclxuXHJcbiAgICAgICAgICAgIGxvYWRpbmcucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhcHBlbmQgaW50byBjb250YWluZXIgd2l0aCBhbmltYXRpb25cclxuICAgICAgICAgICAgYXdhaXQgTmV3c0xpYnJhcnkuYW5pbWF0aW9uQXBwZW5kU3RvcmllcyhzdG9yaWVzLCBtYWluQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYWZ0ZXIoYnV0dG9uKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKSB7IFxyXG4gICAgICAgICAgICBsZXQgbXNnID0gZ2VuZXJpY0Vycm9yKGVycik7IFxyXG4gICAgICAgICAgICBpZiAobXNnKSBNQUlOX0NPTlRBSU5FUi5hcHBlbmQobXNnKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH0gKTtcclxuXHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ3JlYXRlLWxvYWRpbmctYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvYWRpbmcoTE9BRF9JTUcpe1xyXG4gICAgbGV0IGxvYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIGxvYWRpbmcuc3JjID0gTE9BRF9JTUc7XHJcbiAgICBsb2FkaW5nLmlkID0gJ2xvYWRpbmcnO1xyXG5cclxuICAgIHJldHVybiBsb2FkaW5nO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS1TaG93cy10aGF0LXRoZXJlLWFyZW4ndC1tb3JlLW5ld3MtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5mdW5jdGlvbiBub01vcmVOZXdzKCBsb2FkaW5nLCBwYWdlLCBtYWluQ29udGFpbmVyICkge1xyXG4gICAgbG9hZGluZy5yZW1vdmUoKTtcclxuICAgIGxldCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJuby1tb3JlLW5ld3NcIik7XHJcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJObyBtb3JlIG5ld3MhXCI7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChtZXNzYWdlKTtcclxuXHJcbiAgICBwYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VlTW9yZSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRXJyb3ItSGFuZGxpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLUNyZWF0ZS1lcnJvci1tZXNzYWdlLURJVi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5mdW5jdGlvbiBlcnJvck1lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbWVzc2FnZVwiKTtcclxuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlF1YWxjb3NhIG5vbiB2YSwgcHJvdmEgYWQgYWdnaW9ybmFyZSBsYSBwYWdpbmFcIjtcclxuXHJcbiAgICByZXR1cm4gbWVzc2FnZTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tTWFuYWdlLWVycm9yLWluLU1BSU4tcmVxdWVzdC0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuZnVuY3Rpb24gZXJyb3JPbk1haW5SZXF1ZXN0KGVycikge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwocmVmcmVzaENpY2xlKTsgICAgLy8gUmVtb3ZlcyB0aGUgbmV3cyB1cGRhdGVcclxuXHJcbiAgICBsZXQgbWVzc2FnZSA9IGVycm9yTWVzc2FnZSgpOyAgIC8vIGNyZWF0ZSBhIG1lc3NhZ2UgRElWXHJcblxyXG4gICAgUEFHRS5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBzZWVNb3JlICk7XHJcblxyXG4gICAgUEFHRS5iZWZvcmUobWVzc2FnZSk7XHJcblxyXG4gICAgaWYgKCBlcnIgaW5zdGFuY2VvZiBOZXdzTGlicmFyeS5OZXdzRXJyb3IgKSB7XHJcblxyXG4gICAgICAgIGVycm9yT25NYWluUmVxdWVzdC5yZXRyeSsrO1xyXG5cclxuICAgICAgICBpZiAoIGVycm9yT25NYWluUmVxdWVzdC5yZXRyeSA8PSBSRVRSWV9USU1FUyApIHtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGFzeW5jIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBtYWluKCk7ICAgLy9yZXRyeSB0byBsb2FkIG1haW4gZnVuY3Rpb25cclxuICAgICAgICAgICAgfSwgNTAwMCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggZXJyb3JPbk1haW5SZXF1ZXN0LnJldHJ5ID4gUkVUUllfVElNRVMgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICBlcnJvck9uTWFpblJlcXVlc3QucmV0cnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTWFuYWdlLWVycm9ycy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdlbmVyaWNFcnJvcihlcnIpe1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwocmVmcmVzaENpY2xlKTsgICAgLy8gUmVtb3ZpbmcgbGFzdCBuZXdzIGRvd25sb2FkXHJcblxyXG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UoKTsgICAvLyBDcmVhdGUgYW4gZXJyb3IgbWVzc2FnZVxyXG5cclxuICAgIFBBR0UucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgc2VlTW9yZSApOyAgIC8vIERpc2FibGUgbW9yZS1idXR0b25cclxuXHJcbiAgICBpZiAoIGVyciBpbnN0YW5jZW9mIE5ld3NMaWJyYXJ5Lk5ld3NFcnJvciApIHtcclxuICAgICAgICBQQUdFLmJlZm9yZShtZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxufSIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IE5vdGljZSBmcm9tIFwiLi9ub3RpY2UuanNcIjtcclxuaW1wb3J0IFVTRVJfSU1HIGZyb20gJy4uLy4uLy4uL2ltZy91c2VyLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IGV4dGVuZHMgTm90aWNlIHtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ09NTUVOVC1NQU5BR0VNRU5ULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBleHBvcnRIdG1sRWxlbWVudCgpIHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmJ5ICYmICF0aGlzLnRleHQpIHJldHVybiBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGJvZHkgPSBgXHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNvbW1lbnQtaW1nXCIgc3JjPSR7VVNFUl9JTUd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC10ZXh0IGJ5XCI+JHt0aGlzLmJ5fTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0XCI+JHt0aGlzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3RoZXJcIj4uLi5hbHRybzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LWVuZCBkYXRhXCI+JHt0aGlzLmZ1bGxEYXRlfS0ke3RoaXMuZnVsbEhvdXJzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IENPTU1FTlRfSU1HIGZyb20gJy4uLy4uLy4uL2ltZy9jb21tZW50LnBuZyc7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0xBU1MtTk9USUNFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYnksIGlkLCB0aW1lLCB0eXBlLCB0aXRsZSwgdGV4dCwgdXJsLCBzY29yZSwga2lkcykge1xyXG4gICAgICAgIHRoaXMuYnkgPSBieTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcclxuICAgICAgICB0aGlzLmtpZHMgPSBraWRzO1xyXG5cclxuICAgICAgICB0aGlzLmZ1bGxEYXRlID0gdGhpcy5jb252ZXJ0VGltZSh0aGlzLnRpbWUpO1xyXG4gICAgICAgIHRoaXMuZnVsbEhvdXJzID0gdGhpcy5jb252ZXJ0SG91cnModGhpcy50aW1lKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSB0aGlzLmNvbW1lbnRCdXR0b24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLUNvbnZlcnQtRGF0ZS1mcm9tLVVuaXgtVGltZS1SRVRVUk5TLUREL01NL1lZWVktLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIGNvbnZlcnRUaW1lKHRpbWUpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCB0aW1lICogMTAwMCApO1xyXG5cclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7IFxyXG4gICAgICAgIGxldCBtb3VudGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyBcclxuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgbGV0IGZ1bGxJdERhdGE7ICBcclxuXHJcbiAgICAgICAgaWYgKCBkYXkgPiAwICYmIGRheSA8IDEwICkge1xyXG4gICAgICAgICAgICBkYXkgPSBcIjBcIiArIGRheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggbW91bnRoID4gMCAmJiBtb3VudGggPCAxMCApIHtcclxuICAgICAgICAgICAgbW91bnRoID0gXCIwXCIgKyBtb3VudGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdWxsSXREYXRhID0gZGF5ICsgXCIvXCIgKyBtb3VudGggKyBcIi9cIiArIHllYXI7XHJcblxyXG4gICAgICAgIHJldHVybiBmdWxsSXREYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVJldHVybi1Ib3Vycy1mcm9tLVVuaXgtVGltZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICAgIGNvbnZlcnRIb3Vycyh0aW1lKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSggdGltZSAqIDEwMDAgKTtcclxuXHJcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgaWYgKCBob3VycyA+PSAwICYmIGhvdXJzIDwgMTAgKSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gXCIwXCIgKyBob3VycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCAxMCApIHtcclxuICAgICAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCAxMCApIHtcclxuICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmdWxsSG91cnMgPSBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bGxIb3VycztcclxuICAgIH1cclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0FSRC1NQU5BR0VNRU5ULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tUmV0dXJucy1IVE1MLWNvZGUtSUYtVVJMLWlzLXByZXNlbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4gICAgdXJsQ29udHJvbGxlcigpIHtcclxuICAgICAgICBpZiAodGhpcy51cmwgIT09IFwiXCIgKSB7XHJcbiAgICAgICAgICByZXR1cm4gYDxhIGhyZWY9XCIke3RoaXMudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiY2FyZC1saW5rXCI+JHtfLmNhcGl0YWxpemUodGhpcy50eXBlKX0gbGluazwvYT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiBcIlwiOyAgXHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLVJldHVybnMtSFRNTC1jb2RlLWJhc2VkLW9uLXRoZS1wcmVzZW5jZS1vZi10ZXh0LW9yLXRpdGxlLS0tLS0tLS0tKi9cclxuXHJcbiAgICB0aXRsZU9yVGV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy50aXRsZSAhPT0gXCJcIiApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvaDU+YDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRpdGxlID09IFwiXCIgJiYgdGhpcy50ZXh0ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtfLmNhcGl0YWxpemUodGhpcy50eXBlKX08L2g1PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4ke3RoaXMudGV4dH08L3A+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gXCJcIjsgXHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DcmVhdGUtQ29tbWVudC1CdXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4gICAgY29tbWVudEJ1dHRvbigpIHtcclxuICAgICAgICBpZiAoIHRoaXMudHlwZSA9PSBcInN0b3J5XCIgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMua2lkcyApIHsgaWQgPSB0aGlzLmlkIH1cclxuICAgICAgICAgICAgZWxzZSB7IGlkID0gXCJcIiB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhcmRCdXR0b24gY29tbWVudEJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWlkPVwiJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50aTogPHNwYW4gY2xhc3M9XCJuLWNvbW1lbnRzXCI+JHt0aGlzLmtpZHMubGVuZ3RofTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtDT01NRU5UX0lNR30gYWx0PVwiY29tbWVudHNcIiBjbGFzcz1cImNvbW1lbnQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS1DcmVhdGVzLXRoZS1IVE1MLWNvZGUtb2YtYS1jYXJkLWFuZC1yZXR1cm5zLWl0LS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgZXhwb3J0SHRtbEVsZW1lbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMudGl0bGVPclRleHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsQ29udHJvbGxlcigpO1xyXG4gICAgICAgIGxldCBjb21tZW50QnV0dG9uID0gdGhpcy5jb21tZW50QnV0dG9uKCk7XHJcblxyXG4gICAgICAgIGxldCBub25lID0gKCk9PntcclxuICAgICAgICAgICAgaWYgKCF1cmwgJiYgIWNvbW1lbnRCdXR0b24pIHtyZXR1cm4gYHN0eWxlID0gXCJkaXNwbGF5Om5vbmVcImA7fVxyXG4gICAgICAgICAgICBlbHNlIHsgcmV0dXJuIFwiXCIgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IGJ5XCI+Qnk6ICR7dGhpcy5ieX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1lbmQgbWUtNFwiPkRhdGEgZSBvcmE6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtZW5kIG1lLTFcIj4ke3RoaXMuZnVsbERhdGV9LSR7dGhpcy5mdWxsSG91cnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtzLWNvbnRhaW5lclwiICR7bm9uZSgpfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtzXCIgJHtub25lKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2NvbW1lbnRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TVEFUSUMtUFJPUEVSVFktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKi0tLS0tLUFycmF5cyB0aGF0IHN0b3JlIHRoZSBzcGVjaWZpYyBvcmRlciB0byBjb25zdHJ1Y3RvciBhcmd1bWVudHMgb2YgQ2xhc3MtLS0tLS0tLS0tLS0tKi9cclxuXHJcbk5vdGljZS5hcmd1bWVudHNPcmRlciA9IFsnYnknLCAnaWQnLCAndGltZScsICd0eXBlJywgJ3RpdGxlJywgJ3RleHQnLCAndXJsJywgJ3Njb3JlJywgJ2tpZHMnXTsiLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAnLi4vLi4vY3NzL2NvbW1lbnQuY3NzJztcclxuXHJcbmltcG9ydCAgKiBhcyBOZXdzTGlicmFyeSAgZnJvbSAnLi9saWJyYXJ5L25ld3MtZnVuY3Rpb24tbGlicmFyeS5qcyc7XHJcbmltcG9ydCAgKiBhcyBMaWJyYXJ5ICBmcm9tICcuL2xpYnJhcnkvZnVuY3Rpb25zLWxpYnJhcnkuanMnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL2NsYXNzZXMvY29tbWVudC5qcyc7XHJcblxyXG5pbXBvcnQgeyBQQUdFLCBNQUlOX0NPTlRBSU5FUiwgbmV3U3RvcmllcywgYmFzZVVybCB9IGZyb20gJy4uL21haW4uanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlZUNvbW1lbnRzKGUpIHtcclxuXHJcbiAgICBsZXQgYnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdChcIi5jb21tZW50QnV0dG9uXCIpO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS1JZiB0YXJnZXQgaXNuJ3QgY29tbWVudCBidXR0b24tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgaWYgKCAhYnV0dG9uICkge1xyXG5cclxuICAgICAgICBpZiAoIGUudGFyZ2V0LmNsb3Nlc3QoXCIuY29tbWVudC1jb250YWluZXJcIikgKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZXMgY29tbWVudHMgYnkgY2xpY2tpbmcgYW55d2hlcmUgaW4gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgLy8gRVhDRVBUIHRoZSBpdHNlbGYncyBjb21tZW50XHJcblxyXG4gICAgICAgIGxldCBhbGxDb21tZW50cyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5jb21tZW50LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgaWYgKCBhbGxDb21tZW50cyApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBjb21tZW50IG9mIGFsbENvbW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50VHJhbnNpdGlvbihjb21tZW50LCBcImNvbW1lbnQtdHJhbnNpdGlvblwiLCBcInJldmVyc2VcIik7ICAgIC8vIFJlbW92ZSBhbGwgY29tbWVudHNcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIGxldCBhbGxDYXJkcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCggXCIuY2FyZHNcIikgO1xyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IGNhcmQgb2YgYWxsQ2FyZHMpIHsgICAgICAgLy8gTWFrZXMgdGhlIGJvcmRlci1yYWRpdXMgYXQgaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb21tZW50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGlua3NDb250YWluZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoIFwiLmxpbmtzLWNvbnRhaW5lclwiKSA7XHJcbiAgICAgICAgICAgICAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb21tZW50c1wiKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1DTElDSyBPTiBDT01NRU5UIEJVVFRPTi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBsZXQgY2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuY2FyZHNcIik7XHJcbiAgICBsZXQgbGlua3NDb250YWluZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIubGlua3MtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGlmKCAhY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LWNvbW1lbnRzXCIpKSB7ICAgIC8vIFNFRSBDT01NRU5UU1xyXG5cclxuICAgICAgICBQQUdFLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWVDb21tZW50cyk7XHJcblxyXG4gICAgICAgIGxldCBpZCA9IGJ1dHRvbi5kYXRhc2V0LmlkOyAgICAgLy8gZ2V0dGluZyB0aGUgbm90aWNlIGlkXHJcblxyXG4gICAgICAgIGxldCBodG1sO1xyXG5cclxuICAgICAgICAvLyBDaGVjayB0aGUgSURcclxuXHJcbiAgICAgICAgLy8gTkIgdGhlIGNvbnN0cnVjdG9yIG9mIGV2ZXJ5IE5vdGljZSBpbnNlcnRzIGl0cyBpZCBpbiB0aGUgYnV0dG9uIFxyXG4gICAgICAgIC8vIG9ubHkgaWYgdGhlcmUgYXJlIGNvbW1lbnRzXHJcblxyXG4gICAgICAgIGlmICggaWQgIT09IFwiXCIgKXtcclxuICAgICAgICAgICAgbGV0IGNvbW1lbnRPYmogPSBhd2FpdCBnZXRDb21tZW50c0J5Tm90aWNlSWQoaWQpO1xyXG4gICAgICAgICAgICBodG1sID0gY29tbWVudE9iai5odG1sO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbW1lbnRCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIubi1jb21tZW50c1wiKTtcclxuICAgICAgICAgICAgY29tbWVudEJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbW1lbnRPYmoubkNvbW1lbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoIGlkID09IFwiXCIgKXtcclxuICAgICAgICAgICAgaHRtbCA9IGA8c3Bhbj5Ob24gY2kgc29ubyBjb21tZW50aTwvc3Bhbj5gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGVzIHRoZSBlbGVtZW50cyB0aGF0IG1ha2UgdXAgdGhlIGNvbW1lbnRzXHJcblxyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInNob3ctY29tbWVudHNcIik7ICAgIC8vIFJlbW92ZSBib3JkZXItcmFkaXVzIGF0IHRoZSBib3R0b20gb2YgY2FyZFxyXG4gICAgICAgIGxpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbW1lbnRzXCIpOyAgLy8gUmVtb3ZlIGJvcmRlci1yYWRpdXMgYXQgdGhlIHRvcCBvZiBjb21tZW50XHJcblxyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTsgICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIGNvbW1lbnRcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCggXCJjb21tZW50LWNvbnRhaW5lclwiICxcInZpc2libGVcIiApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhcmQuYWZ0ZXIoZGl2KTtcclxuICAgICAgICBjb21tZW50VHJhbnNpdGlvbihkaXYsIFwiY29tbWVudC10cmFuc2l0aW9uXCIsIFwibm9ybWFsXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gU2Nyb2wgZm9yIHNtYXJwaG9uZVxyXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPCA2MDAgKSBkaXYuc2Nyb2xsSW50b1ZpZXcoXCJhbGlnblRvVG9wXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgUEFHRS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VlQ29tbWVudHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjb21tZW50cyBieSBjbGlja2luZyBvbiBjb21tZW50IGJ1dHRvblxyXG5cclxuICAgICAgICBsZXQgZGl2Q29tbWVudHMgPSBjYXJkLm5leHRFbGVtZW50U2libGluZy5jbG9zZXN0KCBcIi5jb21tZW50LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgY29tbWVudFRyYW5zaXRpb24oZGl2Q29tbWVudHMsIFwiY29tbWVudC10cmFuc2l0aW9uXCIsIFwicmV2ZXJzZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBNYWtlcyB0aGUgYm9yZGVyLXJhZGl1cyBhdCBpbml0aWFsIHZhbHVlXHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb21tZW50c1wiKTtcclxuICAgICAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb21tZW50c1wiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldC1IVE1MLUNvbW1lbnRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLy8gZ2V0Q29tbWVudHNCeU5vdGljZUlkIHJldHVybnMgYW4gSFRNTCBtZXNzYWdlXHJcbi8vIGluIGNhc2Ugb2YgbnVsbC91bmRlZmluaWRlZCBvciB2b2lkIHJlc3BvbnNlXHJcblxyXG4vLyBlbHNlIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaGFzIHRoZSBIVE1MIGNvZGUgb2YgY29tbWVudHMgXHJcbi8vIGFuZCB0aGUgbnVtYmVyIG9mIGhvdyBtYW55IGFyZSB0aGVyZVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tbWVudHNCeU5vdGljZUlkKGlkKSB7XHJcblxyXG4gICAgbGV0IGVycm9yID0gYDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCI+RXJyb3JlIG5lbCByZWN1cGVybyBkZWwgY29tbWVudG88L3NwYW4+YDtcclxuXHJcbnRyeXtcclxuICAgICAgICAvLyBHZXQgTm90aWNlIGJ5IElEXHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBOZXdzTGlicmFyeS5nZXROb3RpY2VCeUlkKCBiYXNlVXJsLCBbaWRdICk7XHJcblxyXG4gICAgICAgIC8vIFB1dCB0aGUgY29tbWVudHMgYXJyYXkgaW4gY29tbWVudHNJZHNcclxuICAgICAgICBsZXQgY29tbWVudHNJZHMgPSByZXF1ZXN0WzBdLmtpZHM7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgQ29tbWVudHMgYnkgSWRzXHJcbiAgICAgICAgbGV0IGNvbW1lbnRBcnIgPSBhd2FpdCBOZXdzTGlicmFyeS5nZXROb3RpY2VCeUlkKCBiYXNlVXJsLCBjb21tZW50c0lkcyApO1xyXG5cclxuICAgICAgICBpZiAoICFjb21tZW50QXJyICkgeyByZXR1cm4gZXJyb3I7IH1cclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBhcnJheSBvZiBIVE1MIGNvZGUgYnkgY29tbWVudHNcclxuICAgICAgICBsZXQgaHRtbENvbW1lbnRBcnIgPSB3cml0ZUNvbW1lbnQoY29tbWVudEFycik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGh0bWw6IGh0bWxDb21tZW50QXJyLnJlZHVjZSggKGFjYywgaHRtbCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhY2MgKyBodG1sICsgYFxcbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJcIiApLFxyXG5cclxuICAgICAgICAgICAgbkNvbW1lbnRzIDogY29tbWVudHNJZHMubGVuZ3RoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7IE5ld3NMaWJyYXJ5LmZvckVycm9ycyhlcnIsIFBBR0UsIE1BSU5fQ09OVEFJTkVSKSB9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVdyaXRlLUNPTU1FTlRTLWluLURPQ1VNRU5ULS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmZ1bmN0aW9uIHdyaXRlQ29tbWVudChjb21tZW50cyl7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGxldCByZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGRhdGEgb2YgY29tbWVudHMgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGVzIENBUkRcclxuXHJcbiAgICAgICAgICAgIHByb3BlcnR5ID0gTGlicmFyeS5leHN0cmFjdFByb3BlcnR5KGRhdGEsIENvbW1lbnQuYXJndW1lbnRzT3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgY29tbWVudCA9IG5ldyBDb21tZW50KC4uLnByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBodG1sID0gY29tbWVudC5leHBvcnRIdG1sRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgcmVzLnB1c2goaHRtbCk7ICAgICAvLyBBcnJheSBvZiBDQVJEcyBodG1sIGNvZGVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcblxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIE5ld3NMaWJyYXJ5LmNsZWFyUGFnZShQQUdFLCBNQUlOX0NPTlRBSU5FUik7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UUkFOU0lUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmZ1bmN0aW9uIGNvbW1lbnRUcmFuc2l0aW9uKGVsZW0sIGNzc0NsYXNzLCBkaXJlY3Rpb249XCJub3JtYWxcIikge1xyXG5cclxuICAgIGxldCBzdGFydCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pLmdldFByb3BlcnR5VmFsdWUoXCItLXN0YXJ0VHJhbnNpdGlvblwiKTtcclxuICAgIGxldCBlbmQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1lbmRUcmFuc2l0aW9uXCIpO1xyXG5cclxuICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuICAgIFxyXG4gICAgZWxlbS5vbmFuaW1hdGlvbmVuZCA9ICgpPT4ge1xyXG5cclxuICAgICAgICBsZXQgdG9wO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09IFwibm9ybWFsXCIgKSB7XHJcbiAgICAgICAgICAgIHRvcD1gJHtlbmR9YDtcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS50b3AgPSB0b3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xyXG5cclxuICAgICAgICBpZiAoIGRpcmVjdGlvbiA9PSBcInJldmVyc2VcIiApIHtcclxuICAgICAgICAgICAgdG9wPWAke3N0YXJ0fWA7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudG9wID0gdG9wO1xyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURPTS1FTEVNRU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8vIENyZWF0ZSBzaW1wbGUgYnV0dG9uXHJcbi8vIGhhdmUgMiBhcmd1bWVudHNcclxuXHJcbi8vIHRleHQgPSBkZXNpcmVkIHRleHQgaW4gYnV0dG9uXHJcbi8vIE9QVElPTkFMIC0gY3NzQ2xhc3MgPSBUaGUgQ1NTIGNsYXNzIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBidXR0b25cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCwgY3NzQ2xhc3M9ZmFsc2UpIHtcclxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XHJcblxyXG4gIGlmIChjc3NDbGFzcykgYnV0dG9uLmNsYXNzTGlzdC5hZGQoIGNzc0NsYXNzICk7XHJcbiAgXHJcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVG8tVG9wLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vLyBDcmVhdGUgYSBzY3JvbGwgdXAgYnV0dG9uIGZyb20gYSBET00gZWxlbWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVG9wQnV0dG9uKGJ1dHRvbikge1xyXG5cclxuICAvLyBFbnN1cmVzIHRoYXQgdGhlIGFuaW1hdGlvbiBpcyBkb25lIG9uZSB0aW1lXHJcbiAgbGV0IGNvbnRyb2wgPSB0cnVlO1xyXG5cclxuICBidXR0b24ub25jbGljayAgPSAoKT0+IHsgXHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApOyAgICAgXHJcbiAgICAgIGJ1dHRvbi5ibHVyKCk7XHJcbiAgICB9LDMwMCk7XHJcbiAgfTtcclxuXHJcbiAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCk9PiB7XHJcblxyXG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5wYWdlWU9mZnNldCA+IHNjcm9sbCAmJiBjb250cm9sICApIHtcclxuICAgICAgb3BhY2l0eVRyYW5zaW9uKGJ1dHRvbiwgXCJ0by10b3Atb3BhY2l0eVwiLCBcIm5vcm1hbFwiKTtcclxuICAgICAgY29udHJvbCA9IGZhbHNlO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPD0gc2Nyb2xsICYmICFjb250cm9sICkge1xyXG4gICAgICBvcGFjaXR5VHJhbnNpb24oYnV0dG9uLCBcInRvLXRvcC1vcGFjaXR5XCIsIFwicmV2ZXJzZVwiKTtcclxuICAgICAgY29udHJvbCA9IHRydWU7XHJcbiAgICB9IFxyXG4gIH07XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYmFzaWMtYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLy8gQmFzaWMgYW5pbWF0aW9uIGJhc2VkIG9uOiBhbiBlbGVtZW50LCBjc3MgY2xhc3MgdGhhdCBtdXN0IGhhdmUgYW5pbWF0aW9uLCBcclxuLy8gYW4gb3B0aW9uYWwgYXJndW1lbnQ6IGRpcmVjdGlvblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHlUcmFuc2lvbihlbGVtLCBjc3NDbGFzcywgZGlyZWN0aW9uPVwibm9ybWFsXCIpIHtcclxuXHJcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICBlbGVtLnN0eWxlLmFuaW1hdGlvbkRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG4gIFxyXG4gIGVsZW0ub25hbmltYXRpb25lbmQgPSAoKT0+e1xyXG5cclxuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XHJcbiAgICBlbGVtLm9uYW5pbWF0aW9uZW5kID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09IFwicmV2ZXJzZVwiKSBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9O1xyXG4gIFxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1PQkpFQ1QtRlVOQ1RJT05TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRXhzdHJhY3QtT2JqLVByb3BlcnR5LS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbiBhcnJheSBmcm9tIHRoZSBPQkogdmFsdWVzIGluIGEgc3BlY2lmaWMgT1JERVJcclxuLy8gSWYgYSBzcGVjaWZpYyBwcm9wZXJ0eSBkb2Vzbid0IGV4aXN0cywgaXQgcHV0cyBhIFwiXCIgaW4gdGhlIHJlc3VsdCBhcnJheVxyXG5cclxuLy9FeGFtcGxlOlxyXG5cclxuLy8gb2JqIHsgc3VybmFtZTpcIlJvc3NpXCIsIGFnZTogMjAsIG5hbWU6XCJNYXJpb1wiIH1cclxuLy8gb3JkZXIgWyBcIm5hbWVcIiwgXCJzdXJuYW1lXCIsIFwiYWdlXCIgXVxyXG5cclxuLy8gcmVzdWx0IFsgXCJNYXJpb1wiLCBcIlJvc3NpXCIsIDIwIF1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHN0cmFjdFByb3BlcnR5KG9iaiwgb3JkZXIpIHtcclxuICBsZXQgYXJyUmVzID0gW107XHJcblxyXG4gIGZvciAoIGxldCBwcm9wIG9mIG9yZGVyICkge1xyXG4gICAgaWYoIG9ialtwcm9wXSApe1xyXG4gICAgICBhcnJSZXMucHVzaCggb2JqW3Byb3BdICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYXJyUmVzLnB1c2goIFwiXCIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcnJSZXM7XHJcblxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTkVUV09SSy1SRVFVRVNULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldC1zaW1wbGUtcmVxdWVzdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8vIFVzZXMgQVhJT1NcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaW1wbGVSZXF1ZXN0KHVybCl7XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGF4aW9zLmdldCggdXJsLCB7XHJcbiAgICAgICAgICBwYXJhbXM6e31cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC50aGVuKCAocmVzKSA9PiB7IHJlc29sdmUocmVzKSB9IClcclxuXHJcbiAgICAgIC5jYXRjaCggKGVycik9PiB7IFxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0gKTtcclxuICB9KTtcclxufSIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCAgKiBhcyBMaWJyYXJ5ICBmcm9tICcuL2Z1bmN0aW9ucy1saWJyYXJ5LmpzJztcclxuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jbGFzc2VzL25vdGljZS5qcyc7XHJcblxyXG5pbXBvcnQgeyBQQUdFIH0gZnJvbSAnLi4vLi4vbWFpbi5qcyc7XHJcbmltcG9ydCB7IE1BSU5fQ09OVEFJTkVSIH0gZnJvbSAnLi4vLi4vbWFpbi5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3c0Vycm9yIGV4dGVuZHMgRXJyb3J7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZ1bmN0aW9uLUNMRUFSLVBBR0UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQYWdlKCBwYWdlLCBjb250YWluZXIpIHtcclxuICAgIHBhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHBhZ2UuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdldC1zaW1wbGUtcmVxdWVzdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1ZXN0KHVybCl7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBheGlvcy5nZXQoIHVybCwge1xyXG4gICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgcHJpbnQ6ICdwcmV0dHknLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbiggKHJlcykgPT4geyByZXNvbHZlKHJlcykgfSApXHJcbiAgICAgICAgLmNhdGNoKCAoZXJyKT0+IHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgZm9yRXJyb3JzKGVyciwgUEFHRSwgTUFJTl9DT05UQUlORVIpO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HZXQtbmV3cy1ieS1hcnJheSdzLWlkLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGljZUJ5SWQoYmFzZVVybCwgbmV3cykge1xyXG4gICAgbGV0IGFyck5ld3MgPSBbXTtcclxuXHJcbiAgICBpZiAoICFuZXdzICkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IHJlcXVlc3RzID0gbmV3cy5tYXAoKGlkKT0+IHtcclxuICAgICAgICBsZXQgdXJsID0gYmFzZVVybCArICdpdGVtLycgKyBpZCArICcuanNvbic7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldCggdXJsICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChyZXF1ZXN0cykgICAvKiBHZXQgcmVxdWVzdCBmb3IgZWFjaCBJRCAqL1xyXG4gICAgICAgIC50aGVuKChyZXNwb25zZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJOZXdzLnB1c2gocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oICgpID0+IHsgcmVzb2x2ZShhcnJOZXdzKSB9IClcclxuICAgICAgICAuY2F0Y2goIChlcnIpPT4geyByZWplY3QoZm9yRXJyb3JzKGVyciwgUEFHRSwgTUFJTl9DT05UQUlORVIpKSB9ICk7O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Xcml0ZS1ORVdTLWluLURPQ1VNRU5ULS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTm90aWNlKG5ld3MsIGNvbnRhaW5lcj1mYWxzZSl7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGxldCByZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGRhdGEgb2YgbmV3cyApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBub3RpY2UgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlcyBDQVJEXHJcblxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IExpYnJhcnkuZXhzdHJhY3RQcm9wZXJ0eShkYXRhLCBOb3RpY2UuYXJndW1lbnRzT3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgbm90aWNlID0gbmV3IE5vdGljZSguLi5wcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IG5vdGljZS5leHBvcnRIdG1sRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxjYXJkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGNhcmQpOyAgICAgLy8gQXJyYXkgb2YgQ0FSRHMgaHRtbCBjb2RlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzOyAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgXCJjb250YWluZXJcIiBhcmd1bWVudCwgaXQgcmV0dXJucyBSRVMgYXJyYXkgXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNsZWFyUGFnZShQQUdFLCBNQUlOX0NPTlRBSU5FUik7XHJcbiAgICAgICAgdGhyb3cgbmV3IE5ld3NFcnJvcihlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS1SZXF1aXJlcy10aGUtbGF0ZXN0LW5ld3MtdXBkYXRlLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaE5ld3MoYmFzZVVybCwgbmV3U3RvcmllcywgbWFpbkNvbnRhaW5lciwgbGFzdCkge1xyXG5cclxuICAgIC8vIENhbGwgdGhlIG1hc3RlciByZXF1ZXN0IGZvciBOZXdzIGxpc3QgdG8gSGFja2VyIE5ld3NcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGdldFJlcXVlc3QoIGJhc2VVcmwgKyBuZXdTdG9yaWVzICk7XHJcbiAgICBsZXQgcmVmcmVzaE5ld3NJZHMgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIC8vIGZpbmRzIHRoZSBpbmRleCBvZiB0aGUgbGF0ZXN0IG5ld3MgaWQgc2luY2UgdGhlIHBhZ2Ugd2FzIGxvYWRlZFxyXG4gICAgbGV0IGxhc3ROb3RpY2UgPSBfLmZpbmRJbmRleChyZWZyZXNoTmV3c0lkcywgZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGlkID09IGxhc3Q7IH0pO1xyXG5cclxuICAgIC8vIHJldHVybnMgdGhlIG5ldyBuZXdzIGlkIGFycmF5XHJcbiAgICBsZXQgcmVmcmVzaE5ld3MgPSBfLnNsaWNlKCByZWZyZXNoTmV3c0lkcywgMCAsIGxhc3ROb3RpY2UgKTtcclxuICAgIFxyXG4gICAgaWYgKCByZWZyZXNoTmV3cy5sZW5ndGggPiAwICl7XHJcblxyXG4gICAgICAgIGxldCBhcnJheU5ld3MgPSBhd2FpdCBnZXROb3RpY2VCeUlkKCBiYXNlVXJsLCByZWZyZXNoTmV3cyApO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZXZlcnkgbm90aWNlIGJ5IGNvbnRydWN0b3IgYW5kIHJldHVybiB0aGVtXHJcbiAgICAgICAgbGV0IGNyZWF0ZWRTdG9yaWVzID0gd3JpdGVOb3RpY2UoYXJyYXlOZXdzKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kcyBpbiBIVE1MIHdpdGggQ1NTIGFuaW1hdGlvblxyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ldy1uZXdzXCIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIucHJlcGVuZChkaXYpO1xyXG4gICAgICAgIGF3YWl0IGFuaW1hdGlvbkFwcGVuZFN0b3JpZXMoY3JlYXRlZFN0b3JpZXMsIGRpdik7XHJcblxyXG4gICAgICAgIC8vIHJldHVybnMgYW4gT0JKIHdpdGggdXBkYXRlZCBpZHMgYXJyYXkgYW5kIHRoZSBOVU1CRVIgb2YgZG93bmxvYWRlZCBuZXdzXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmV3c0lkcyA6IHJlZnJlc2hOZXdzSWRzLFxyXG4gICAgICAgICAgICBkb3dubG9hZGVkTmV3czogcmVmcmVzaE5ld3MubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLUFwcGVuZC1zdG9yaWVzLXdpdGgtQ1NTLUFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGlvbkFwcGVuZFN0b3JpZXMoIGFyclN0b3JpZXMsIGZhdGhlciwgd2hlcmU9J2JlZm9yZWVuZCcgKSB7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1zbVwiLCBcImNhcmRzLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKCByZXNvbHZlLCByZWplY3QgKSB7XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBzdG9yeSBvZiBhcnJTdG9yaWVzICkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKHdoZXJlLCBzdG9yeSk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZmF0aGVyLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIC8vIENTUyBBTklNQVRJT05cclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wYWNpdHktdHJhbnNpdGlvblwiKTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG5cclxuICAgIH0gKTsgICAgICBcclxuICAgIFxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2V0LW9uZS1lbGVtZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gICAvLyBmb3IgZnV0dXJlIGltcGxlbWVudGF0aW9uc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaW50RWxlbWVudChiYXNlVXJsLCBpZCkge1xyXG4gICAgbGV0IHVybCA9IGJhc2VVcmwgKyAnaXRlbS8nICsgaWQgKyAnLmpzb24nO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldCggdXJsLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICBwcmludDogJ3ByZXR0eScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbSA9IHdyaXRlTm90aWNlKFtyZXNwb25zZS5kYXRhXSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZWxlbSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goIChlcnIpPT4geyBmb3JFcnJvcnMoZXJyLCBQQUdFLCBNQUlOX0NPTlRBSU5FUikgfSApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRXJyb3ItTUFOQUdFTUVOVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFcnJvcnMoZXJyb3IsIHBhZ2UsIGNvbnRhaW5lcil7XHJcblxyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICBcclxuICAgICAgICAgIGVycm9yUGFnZShlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQsIHBhZ2UsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgXHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoICFlcnJvci5yZXF1ZXN0LnN0YXR1cyAmJiAhZXJyb3IucmVxdWVzdC5zdGF0dXNUZXh0ICl7XHJcbiAgICAgICAgICAgICAgICBlcnJvclBhZ2UoXCJcIiwgZXJyb3IubWVzc2FnZSwgcGFnZSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yUGFnZShlcnJvci5yZXF1ZXN0LnN0YXR1cywgZXJyb3IucmVxdWVzdC5zdGF0dXNUZXh0LCBwYWdlLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuICAgICAgLyogY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTsgICovIFxyXG4gIH1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1hbmFnZS1lcnJvci1wYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gZXJyb3JQYWdlKHN0YXR1cywgc3RhdHVzVGV4dCwgcGFnZSwgY29udGFpbmVyKSB7XHJcblxyXG4gICAgY2xlYXJQYWdlKHBhZ2UsIGNvbnRhaW5lcik7XHJcblxyXG4gICAgbGV0IHRleHQgPSBcIlwiO1xyXG5cclxuICAgIGlmICggc3RhdHVzID09IFwiNDA0XCIgKSB7XHJcbiAgICAgICAgdGV4dCA9IFwiUGFnZSBcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJlcnJvci1jYXJkXCIgc3R5bGUgPSBcIm1hcmdpbi10b3A6MTBlbVwiPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGUgPSd0ZXh0LWFsaWduOmNlbnRlcic+RXJyb3IgJHtzdGF0dXN9PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZSA9J2ZvbnQtc2l6ZToxLjJlbScgPlNvbWV0aGluZyBnb25lIHdyb25nOiA8ZGl2IHN0eWxlID0nY29sb3I6cmVkJz4ke3RleHR9JHtzdGF0dXNUZXh0fTwvZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xyXG5cclxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgIXF1ZXVlLmQpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiAocXVldWUuZCA9IDApO1xufTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbmV3c1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtuZXdzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanMtbm9kZV9tb2R1bGVzX2Jvb3RzdHJhcF9kaXN0X2Nzc19ib290c3RyYXBfbWluX2Nzcy1ub2RlXy1lYWUxYzhcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXNzZXRzL2pzL21haW4uanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==