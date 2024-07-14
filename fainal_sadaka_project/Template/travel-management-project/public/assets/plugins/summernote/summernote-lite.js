/*!
 * 
 * Super simple WYSIWYG editor v0.8.20
 * https://summernote.org
 *
 *
 * Copyright 2013- Alan Hong and contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2021-10-14T21:15Z
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__1145__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9770:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1145);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

(jquery__WEBPACK_IMPORTED_MODULE_0___default().summernote) = (jquery__WEBPACK_IMPORTED_MODULE_0___default().summernote) || {
  lang: {}
};
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend((jquery__WEBPACK_IMPORTED_MODULE_0___default().summernote.lang), {
  'en-US': {
    font: {
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      clear: 'Remove Font Style',
      height: 'Line Height',
      name: 'Font Family',
      strikethrough: 'Strikethrough',
      subscript: 'Subscript',
      superscript: 'Superscript',
      size: 'Font Size',
      sizeunit: 'Font Size Unit'
    },
    image: {
      image: 'Picture',
      insert: 'Insert Image',
      resizeFull: 'Resize full',
      resizeHalf: 'Resize half',
      resizeQuarter: 'Resize quarter',
      resizeNone: 'Original size',
      floatLeft: 'Float Left',
      floatRight: 'Float Right',
      floatNone: 'Remove float',
      shapeRounded: 'Shape: Rounded',
      shapeCircle: 'Shape: Circle',
      shapeThumbnail: 'Shape: Thumbnail',
      shapeNone: 'Shape: None',
      dragImageHere: 'Drag image or text here',
      dropImage: 'Drop image or Text',
      selectFromFiles: 'Select from files',
      maximumFileSize: 'Maximum file size',
      maximumFileSizeError: 'Maximum file size exceeded.',
      url: 'Image URL',
      remove: 'Remove Image',
      original: 'Original'
    },
    video: {
      video: 'Video',
      videoLink: 'Video Link',
      insert: 'Insert Video',
      url: 'Video URL',
      providers: '(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion, Youku, Peertube)'
    },
    link: {
      link: 'Link',
      insert: 'Insert Link',
      unlink: 'Unlink',
      edit: 'Edit',
      textToDisplay: 'Text to display',
      url: 'To what URL should this link go?',
      openInNewWindow: 'Open in new window',
      useProtocol: 'Use default protocol'
    },
    table: {
      table: 'Table',
      addRowAbove: 'Add row above',
      addRowBelow: 'Add row below',
      addColLeft: 'Add column left',
      addColRight: 'Add column right',
      delRow: 'Delete row',
      delCol: 'Delete column',
      delTable: 'Delete table'
    },
    hr: {
      insert: 'Insert Horizontal Rule'
    },
    style: {
      style: 'Style',
      p: 'Normal',
      blockquote: 'Quote',
      pre: 'Code',
      h1: 'Header 1',
      h2: 'Header 2',
      h3: 'Header 3',
      h4: 'Header 4',
      h5: 'Header 5',
      h6: 'Header 6'
    },
    lists: {
      unordered: 'Unordered list',
      ordered: 'Ordered list'
    },
    options: {
      help: 'Help',
      fullscreen: 'Full Screen',
      codeview: 'Code View'
    },
    paragraph: {
      paragraph: 'Paragraph',
      outdent: 'Outdent',
      indent: 'Indent',
      left: 'Align left',
      center: 'Align center',
      right: 'Align right',
      justify: 'Justify full'
    },
    color: {
      recent: 'Recent Color',
      more: 'More Color',
      background: 'Background Color',
      foreground: 'Text Color',
      transparent: 'Transparent',
      setTransparent: 'Set transparent',
      reset: 'Reset',
      resetToDefault: 'Reset to default',
      cpSelect: 'Select'
    },
    shortcut: {
      shortcuts: 'Keyboard shortcuts',
      close: 'Close',
      textFormatting: 'Text formatting',
      action: 'Action',
      paragraphFormatting: 'Paragraph formatting',
      documentStyle: 'Document Style',
      extraKeys: 'Extra keys'
    },
    help: {
      'escape': 'Escape',
      'insertParagraph': 'Insert Paragraph',
      'undo': 'Undo the last command',
      'redo': 'Redo the last command',
      'tab': 'Tab',
      'untab': 'Untab',
      'bold': 'Set a bold style',
      'italic': 'Set a italic style',
      'underline': 'Set a underline style',
      'strikethrough': 'Set a strikethrough style',
      'removeFormat': 'Clean a style',
      'justifyLeft': 'Set left align',
      'justifyCenter': 'Set center align',
      'justifyRight': 'Set right align',
      'justifyFull': 'Set full align',
      'insertUnorderedList': 'Toggle unordered list',
      'insertOrderedList': 'Toggle ordered list',
      'outdent': 'Outdent on current paragraph',
      'indent': 'Indent on current paragraph',
      'formatPara': 'Change current block\'s format as a paragraph(P tag)',
      'formatH1': 'Change current block\'s format as H1',
      'formatH2': 'Change current block\'s format as H2',
      'formatH3': 'Change current block\'s format as H3',
      'formatH4': 'Change current block\'s format as H4',
      'formatH5': 'Change current block\'s format as H5',
      'formatH6': 'Change current block\'s format as H6',
      'insertHorizontalRule': 'Insert horizontal rule',
      'linkDialog.show': 'Show Link Dialog'
    },
    history: {
      undo: 'Undo',
      redo: 'Redo'
    },
    specialChar: {
      specialChar: 'SPECIAL CHARACTERS',
      select: 'Select Special characters'
    },
    output: {
      noSelection: 'No Selection Made!'
    }
  }
});

/***/ }),

/***/ 1145:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__1145__;

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(1145);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);
// EXTERNAL MODULE: ./src/lang/summernote-en-US.js
var summernote_en_US = __webpack_require__(9770);
;// CONCATENATED MODULE: ./src/js/core/env.js

/**
 * returns whether font is installed or not.
 *
 * @param {String} fontName
 * @return {Boolean}
 */

var genericFontFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];

function validFontName(fontName) {
  return external_jQuery_default().inArray(fontName.toLowerCase(), genericFontFamilies) === -1 ? "'".concat(fontName, "'") : fontName;
}

function isFontInstalled(fontName) {
  var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
  var testText = 'mmmmmmmmmmwwwww';
  var testSize = '200px';
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = testSize + " '" + testFontName + "'";
  var originalWidth = context.measureText(testText).width;
  context.font = testSize + ' ' + validFontName(fontName) + ', "' + testFontName + '"';
  var width = context.measureText(testText).width;
  return originalWidth !== width;
}

var userAgent = navigator.userAgent;
var isMSIE = /MSIE|Trident/i.test(userAgent);
var browserVersion;

if (isMSIE) {
  var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);

  if (matches) {
    browserVersion = parseFloat(matches[1]);
  }

  matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);

  if (matches) {
    browserVersion = parseFloat(matches[1]);
  }
}

var isEdge = /Edge\/\d+/.test(userAgent);
var isSupportTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0; // [workaround] IE doesn't have input events for contentEditable
// - see: https://goo.gl/4bfIvA

var inputEventName = isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
/**
 * @class core.env
 *
 * Object which check platform and agent
 *
 * @singleton
 * @alternateClassName env
 */

/* harmony default export */ const env = ({
  isMac: navigator.appVersion.indexOf('Mac') > -1,
  isMSIE: isMSIE,
  isEdge: isEdge,
  isFF: !isEdge && /firefox/i.test(userAgent),
  isPhantom: /PhantomJS/i.test(userAgent),
  isWebkit: !isEdge && /webkit/i.test(userAgent),
  isChrome: !isEdge && /chrome/i.test(userAgent),
  isSafari: !isEdge && /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
  browserVersion: browserVersion,
  isSupportTouch: isSupportTouch,
  isFontInstalled: isFontInstalled,
  isW3CRangeSupport: !!document.createRange,
  inputEventName: inputEventName,
  genericFontFamilies: genericFontFamilies,
  validFontName: validFontName
});
;// CONCATENATED MODULE: ./src/js/core/func.js

/**
 * @class core.func
 *
 * func utils (for high-order func's arg)
 *
 * @singleton
 * @alternateClassName func
 */

function eq(itemA) {
  return function (itemB) {
    return itemA === itemB;
  };
}

function eq2(itemA, itemB) {
  return itemA === itemB;
}

function peq2(propName) {
  return function (itemA, itemB) {
    return itemA[propName] === itemB[propName];
  };
}

function ok() {
  return true;
}

function fail() {
  return false;
}

function not(f) {
  return function () {
    return !f.apply(f, arguments);
  };
}

function and(fA, fB) {
  return function (item) {
    return fA(item) && fB(item);
  };
}

function func_self(a) {
  return a;
}

function invoke(obj, method) {
  return function () {
    return obj[method].apply(obj, arguments);
  };
}

var idCounter = 0;
/**
 * reset globally-unique id
 *
 */

function resetUniqueId() {
  idCounter = 0;
}
/**
 * generate a globally-unique id
 *
 * @param {String} [prefix]
 */


function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}
/**
 * returns bnd (bounds) from rect
 *
 * - IE Compatibility Issue: http://goo.gl/sRLOAo
 * - Scroll Issue: http://goo.gl/sNjUc
 *
 * @param {Rect} rect
 * @return {Object} bounds
 * @return {Number} bounds.top
 * @return {Number} bounds.left
 * @return {Number} bounds.width
 * @return {Number} bounds.height
 */


function rect2bnd(rect) {
  var $document = external_jQuery_default()(document);
  return {
    top: rect.top + $document.scrollTop(),
    left: rect.left + $document.scrollLeft(),
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
}
/**
 * returns a copy of the object where the keys have become the values and the values the keys.
 * @param {Object} obj
 * @return {Object}
 */


function invertObject(obj) {
  var inverted = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      inverted[obj[key]] = key;
    }
  }

  return inverted;
}
/**
 * @param {String} namespace
 * @param {String} [prefix]
 * @return {String}
 */


function namespaceToCamel(namespace, prefix) {
  prefix = prefix || '';
  return prefix + namespace.split('.').map(function (name) {
    return name.substring(0, 1).toUpperCase() + name.substring(1);
  }).join('');
}
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 * @return {Function}
 */


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
/**
 *
 * @param {String} url
 * @return {Boolean}
 */


function isValidUrl(url) {
  var expression = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  return expression.test(url);
}

/* harmony default export */ const func = ({
  eq: eq,
  eq2: eq2,
  peq2: peq2,
  ok: ok,
  fail: fail,
  self: func_self,
  not: not,
  and: and,
  invoke: invoke,
  resetUniqueId: resetUniqueId,
  uniqueId: uniqueId,
  rect2bnd: rect2bnd,
  invertObject: invertObject,
  namespaceToCamel: namespaceToCamel,
  debounce: debounce,
  isValidUrl: isValidUrl
});
;// CONCATENATED MODULE: ./src/js/core/lists.js

/**
 * returns the first item of an array.
 *
 * @param {Array} array
 */

function head(array) {
  return array[0];
}
/**
 * returns the last item of an array.
 *
 * @param {Array} array
 */


function last(array) {
  return array[array.length - 1];
}
/**
 * returns everything but the last entry of the array.
 *
 * @param {Array} array
 */


function initial(array) {
  return array.slice(0, array.length - 1);
}
/**
 * returns the rest of the items in an array.
 *
 * @param {Array} array
 */


function tail(array) {
  return array.slice(1);
}
/**
 * returns item of array
 */


function find(array, pred) {
  for (var idx = 0, len = array.length; idx < len; idx++) {
    var item = array[idx];

    if (pred(item)) {
      return item;
    }
  }
}
/**
 * returns true if all of the values in the array pass the predicate truth test.
 */


function lists_all(array, pred) {
  for (var idx = 0, len = array.length; idx < len; idx++) {
    if (!pred(array[idx])) {
      return false;
    }
  }

  return true;
}
/**
 * returns true if the value is present in the list.
 */


function contains(array, item) {
  if (array && array.length && item) {
    if (array.indexOf) {
      return array.indexOf(item) !== -1;
    } else if (array.contains) {
      // `DOMTokenList` doesn't implement `.indexOf`, but it implements `.contains`
      return array.contains(item);
    }
  }

  return false;
}
/**
 * get sum from a list
 *
 * @param {Array} array - array
 * @param {Function} fn - iterator
 */


function sum(array, fn) {
  fn = fn || func.self;
  return array.reduce(function (memo, v) {
    return memo + fn(v);
  }, 0);
}
/**
 * returns a copy of the collection with array type.
 * @param {Collection} collection - collection eg) node.childNodes, ...
 */


function from(collection) {
  var result = [];
  var length = collection.length;
  var idx = -1;

  while (++idx < length) {
    result[idx] = collection[idx];
  }

  return result;
}
/**
 * returns whether list is empty or not
 */


function isEmpty(array) {
  return !array || !array.length;
}
/**
 * cluster elements by predicate function.
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 * @param {Array[]}
 */


function clusterBy(array, fn) {
  if (!array.length) {
    return [];
  }

  var aTail = tail(array);
  return aTail.reduce(function (memo, v) {
    var aLast = last(memo);

    if (fn(last(aLast), v)) {
      aLast[aLast.length] = v;
    } else {
      memo[memo.length] = [v];
    }

    return memo;
  }, [[head(array)]]);
}
/**
 * returns a copy of the array with all false values removed
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 */


function compact(array) {
  var aResult = [];

  for (var idx = 0, len = array.length; idx < len; idx++) {
    if (array[idx]) {
      aResult.push(array[idx]);
    }
  }

  return aResult;
}
/**
 * produces a duplicate-free version of the array
 *
 * @param {Array} array
 */


function unique(array) {
  var results = [];

  for (var idx = 0, len = array.length; idx < len; idx++) {
    if (!contains(results, array[idx])) {
      results.push(array[idx]);
    }
  }

  return results;
}
/**
 * returns next item.
 * @param {Array} array
 */


function next(array, item) {
  if (array && array.length && item) {
    var idx = array.indexOf(item);
    return idx === -1 ? null : array[idx + 1];
  }

  return null;
}
/**
 * returns prev item.
 * @param {Array} array
 */


function prev(array, item) {
  if (array && array.length && item) {
    var idx = array.indexOf(item);
    return idx === -1 ? null : array[idx - 1];
  }

  return null;
}
/**
 * @class core.list
 *
 * list utils
 *
 * @singleton
 * @alternateClassName list
 */


/* harmony default export */ const lists = ({
  head: head,
  last: last,
  initial: initial,
  tail: tail,
  prev: prev,
  next: next,
  find: find,
  contains: contains,
  all: lists_all,
  sum: sum,
  from: from,
  isEmpty: isEmpty,
  clusterBy: clusterBy,
  compact: compact,
  unique: unique
});
;// CONCATENATED MODULE: ./src/js/core/dom.js




var NBSP_CHAR = String.fromCharCode(160);
var ZERO_WIDTH_NBSP_CHAR = "\uFEFF";
/**
 * @method isEditable
 *
 * returns whether node is `note-editable` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isEditable(node) {
  return node && external_jQuery_default()(node).hasClass('note-editable');
}
/**
 * @method isControlSizing
 *
 * returns whether node is `note-control-sizing` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */


function isControlSizing(node) {
  return node && external_jQuery_default()(node).hasClass('note-control-sizing');
}
/**
 * @method makePredByNodeName
 *
 * returns predicate which judge whether nodeName is same
 *
 * @param {String} nodeName
 * @return {Function}
 */


function makePredByNodeName(nodeName) {
  nodeName = nodeName.toUpperCase();
  return function (node) {
    return node && node.nodeName.toUpperCase() === nodeName;
  };
}
/**
 * @method isText
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is text(3)
 */


function isText(node) {
  return node && node.nodeType === 3;
}
/**
 * @method isElement
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is element(1)
 */


function isElement(node) {
  return node && node.nodeType === 1;
}
/**
 * ex) br, col, embed, hr, img, input, ...
 * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
 */


function isVoid(node) {
  return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(node.nodeName.toUpperCase());
}

function isPara(node) {
  if (isEditable(node)) {
    return false;
  } // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph


  return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
}

function isHeading(node) {
  return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
}

var isPre = makePredByNodeName('PRE');
var isLi = makePredByNodeName('LI');

function isPurePara(node) {
  return isPara(node) && !isLi(node);
}

var isTable = makePredByNodeName('TABLE');
var isData = makePredByNodeName('DATA');

function isInline(node) {
  return !isBodyContainer(node) && !isList(node) && !isHr(node) && !isPara(node) && !isTable(node) && !isBlockquote(node) && !isData(node);
}

function isList(node) {
  return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
}

var isHr = makePredByNodeName('HR');

function isCell(node) {
  return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
}

var isBlockquote = makePredByNodeName('BLOCKQUOTE');

function isBodyContainer(node) {
  return isCell(node) || isBlockquote(node) || isEditable(node);
}

var isAnchor = makePredByNodeName('A');

function isParaInline(node) {
  return isInline(node) && !!ancestor(node, isPara);
}

function isBodyInline(node) {
  return isInline(node) && !ancestor(node, isPara);
}

var isBody = makePredByNodeName('BODY');
/**
 * returns whether nodeB is closest sibling of nodeA
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {Boolean}
 */

function isClosestSibling(nodeA, nodeB) {
  return nodeA.nextSibling === nodeB || nodeA.previousSibling === nodeB;
}
/**
 * returns array of closest siblings with node
 *
 * @param {Node} node
 * @param {function} [pred] - predicate function
 * @return {Node[]}
 */


function withClosestSiblings(node, pred) {
  pred = pred || func.ok;
  var siblings = [];

  if (node.previousSibling && pred(node.previousSibling)) {
    siblings.push(node.previousSibling);
  }

  siblings.push(node);

  if (node.nextSibling && pred(node.nextSibling)) {
    siblings.push(node.nextSibling);
  }

  return siblings;
}
/**
 * blank HTML for cursor position
 * - [workaround] old IE only works with &nbsp;
 * - [workaround] IE11 and other browser works with bogus br
 */


var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
/**
 * @method nodeLength
 *
 * returns #text's text size or element's childNodes size
 *
 * @param {Node} node
 */

function nodeLength(node) {
  if (isText(node)) {
    return node.nodeValue.length;
  }

  if (node) {
    return node.childNodes.length;
  }

  return 0;
}
/**
 * returns whether deepest child node is empty or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */


function deepestChildIsEmpty(node) {
  do {
    if (node.firstElementChild === null || node.firstElementChild.innerHTML === '') break;
  } while (node = node.firstElementChild);

  return dom_isEmpty(node);
}
/**
 * returns whether node is empty or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */


function dom_isEmpty(node) {
  var len = nodeLength(node);

  if (len === 0) {
    return true;
  } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
    // ex) <p><br></p>, <span><br></span>
    return true;
  } else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
    // ex) <p></p>, <span></span>
    return true;
  }

  return false;
}
/**
 * padding blankHTML if node is empty (for cursor position)
 */


function paddingBlankHTML(node) {
  if (!isVoid(node) && !nodeLength(node)) {
    node.innerHTML = blankHTML;
  }
}
/**
 * find nearest ancestor predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */


function ancestor(node, pred) {
  while (node) {
    if (pred(node)) {
      return node;
    }

    if (isEditable(node)) {
      break;
    }

    node = node.parentNode;
  }

  return null;
}
/**
 * find nearest ancestor only single child blood line and predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */


function singleChildAncestor(node, pred) {
  node = node.parentNode;

  while (node) {
    if (nodeLength(node) !== 1) {
      break;
    }

    if (pred(node)) {
      return node;
    }

    if (isEditable(node)) {
      break;
    }

    node = node.parentNode;
  }

  return null;
}
/**
 * returns new array of ancestor nodes (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */


function listAncestor(node, pred) {
  pred = pred || func.fail;
  var ancestors = [];
  ancestor(node, function (el) {
    if (!isEditable(el)) {
      ancestors.push(el);
    }

    return pred(el);
  });
  return ancestors;
}
/**
 * find farthest ancestor predicate hit
 */


function lastAncestor(node, pred) {
  var ancestors = listAncestor(node);
  return lists.last(ancestors.filter(pred));
}
/**
 * returns common ancestor node between two nodes.
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 */


function commonAncestor(nodeA, nodeB) {
  var ancestors = listAncestor(nodeA);

  for (var n = nodeB; n; n = n.parentNode) {
    if (ancestors.indexOf(n) > -1) return n;
  }

  return null; // difference document area
}
/**
 * listing all previous siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */


function listPrev(node, pred) {
  pred = pred || func.fail;
  var nodes = [];

  while (node) {
    if (pred(node)) {
      break;
    }

    nodes.push(node);
    node = node.previousSibling;
  }

  return nodes;
}
/**
 * listing next siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */


function listNext(node, pred) {
  pred = pred || func.fail;
  var nodes = [];

  while (node) {
    if (pred(node)) {
      break;
    }

    nodes.push(node);
    node = node.nextSibling;
  }

  return nodes;
}
/**
 * listing descendant nodes
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */


function listDescendant(node, pred) {
  var descendants = [];
  pred = pred || func.ok; // start DFS(depth first search) with node

  (function fnWalk(current) {
    if (node !== current && pred(current)) {
      descendants.push(current);
    }

    for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
      fnWalk(current.childNodes[idx]);
    }
  })(node);

  return descendants;
}
/**
 * wrap node with new tag.
 *
 * @param {Node} node
 * @param {Node} tagName of wrapper
 * @return {Node} - wrapper
 */


function wrap(node, wrapperName) {
  var parent = node.parentNode;
  var wrapper = external_jQuery_default()('<' + wrapperName + '>')[0];
  parent.insertBefore(wrapper, node);
  wrapper.appendChild(node);
  return wrapper;
}
/**
 * insert node after preceding
 *
 * @param {Node} node
 * @param {Node} preceding - predicate function
 */


function insertAfter(node, preceding) {
  var next = preceding.nextSibling;
  var parent = preceding.parentNode;

  if (next) {
    parent.insertBefore(node, next);
  } else {
    parent.appendChild(node);
  }

  return node;
}
/**
 * append elements.
 *
 * @param {Node} node
 * @param {Collection} aChild
 */


function appendChildNodes(node, aChild) {
  external_jQuery_default().each(aChild, function (idx, child) {
    node.appendChild(child);
  });
  return node;
}
/**
 * returns whether boundaryPoint is left edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isLeftEdgePoint(point) {
  return point.offset === 0;
}
/**
 * returns whether boundaryPoint is right edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isRightEdgePoint(point) {
  return point.offset === nodeLength(point.node);
}
/**
 * returns whether boundaryPoint is edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isEdgePoint(point) {
  return isLeftEdgePoint(point) || isRightEdgePoint(point);
}
/**
 * returns whether node is left edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */


function isLeftEdgeOf(node, ancestor) {
  while (node && node !== ancestor) {
    if (position(node) !== 0) {
      return false;
    }

    node = node.parentNode;
  }

  return true;
}
/**
 * returns whether node is right edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */


function isRightEdgeOf(node, ancestor) {
  if (!ancestor) {
    return false;
  }

  while (node && node !== ancestor) {
    if (position(node) !== nodeLength(node.parentNode) - 1) {
      return false;
    }

    node = node.parentNode;
  }

  return true;
}
/**
 * returns whether point is left edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */


function isLeftEdgePointOf(point, ancestor) {
  return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
}
/**
 * returns whether point is right edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */


function isRightEdgePointOf(point, ancestor) {
  return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
}
/**
 * returns offset from parent.
 *
 * @param {Node} node
 */


function position(node) {
  var offset = 0;

  while (node = node.previousSibling) {
    offset += 1;
  }

  return offset;
}

function hasChildren(node) {
  return !!(node && node.childNodes && node.childNodes.length);
}
/**
 * returns previous boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */


function prevPoint(point, isSkipInnerOffset) {
  var node;
  var offset;

  if (point.offset === 0) {
    if (isEditable(point.node)) {
      return null;
    }

    node = point.node.parentNode;
    offset = position(point.node);
  } else if (hasChildren(point.node)) {
    node = point.node.childNodes[point.offset - 1];
    offset = nodeLength(node);
  } else {
    node = point.node;
    offset = isSkipInnerOffset ? 0 : point.offset - 1;
  }

  return {
    node: node,
    offset: offset
  };
}
/**
 * returns next boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */


function nextPoint(point, isSkipInnerOffset) {
  var node, offset;

  if (nodeLength(point.node) === point.offset) {
    if (isEditable(point.node)) {
      return null;
    }

    var nextTextNode = getNextTextNode(point.node);

    if (nextTextNode) {
      node = nextTextNode;
      offset = 0;
    } else {
      node = point.node.parentNode;
      offset = position(point.node) + 1;
    }
  } else if (hasChildren(point.node)) {
    node = point.node.childNodes[point.offset];
    offset = 0;
  } else {
    node = point.node;
    offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
  }

  return {
    node: node,
    offset: offset
  };
}
/**
 * returns next boundaryPoint with empty node
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */


function nextPointWithEmptyNode(point, isSkipInnerOffset) {
  var node,
      offset = 0; // if node is empty string node, return current node's sibling.

  if (dom_isEmpty(point.node)) {
    if (point.node === null) {
      return null;
    }

    node = point.node.nextSibling;
    offset = 0;
    return {
      node: node,
      offset: offset
    };
  }

  if (nodeLength(point.node) === point.offset) {
    if (isEditable(point.node)) {
      return null;
    }

    node = point.node.parentNode;
    offset = position(point.node) + 1; // if next node is editable ,  return current node's sibling node.

    if (isEditable(node)) {
      node = point.node.nextSibling;
      offset = 0;
    }
  } else if (hasChildren(point.node)) {
    node = point.node.childNodes[point.offset];
    offset = 0;

    if (dom_isEmpty(node)) {
      if (!dom_isEmpty(point.node.nextSibling)) {
        return {
          node: point.node.nextSibling,
          offset: offset
        };
      }

      return null;
    }
  } else {
    node = point.node;
    offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;

    if (dom_isEmpty(node)) {
      return null;
    }
  }

  return {
    node: node,
    offset: offset
  };
}
/*
* returns the next Text node index or 0 if not found.
*/


function getNextTextNode(actual) {
  if (!actual.nextSibling) return undefined;
  if (actual.parent !== actual.nextSibling.parent) return undefined;
  if (isText(actual.nextSibling)) return actual.nextSibling;else return getNextTextNode(actual.nextSibling);
}
/**
 * returns whether pointA and pointB is same or not.
 *
 * @param {BoundaryPoint} pointA
 * @param {BoundaryPoint} pointB
 * @return {Boolean}
 */


function isSamePoint(pointA, pointB) {
  return pointA.node === pointB.node && pointA.offset === pointB.offset;
}
/**
 * returns whether point is visible (can set cursor) or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isVisiblePoint(point) {
  if (isText(point.node) || !hasChildren(point.node) || dom_isEmpty(point.node)) {
    return true;
  }

  var leftNode = point.node.childNodes[point.offset - 1];
  var rightNode = point.node.childNodes[point.offset];

  if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode)) || isTable(rightNode)) {
    return true;
  }

  return false;
}
/**
 * @method prevPointUtil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */


function prevPointUntil(point, pred) {
  while (point) {
    if (pred(point)) {
      return point;
    }

    point = prevPoint(point);
  }

  return null;
}
/**
 * @method nextPointUntil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */


function nextPointUntil(point, pred) {
  while (point) {
    if (pred(point)) {
      return point;
    }

    point = nextPoint(point);
  }

  return null;
}
/**
 * returns whether point has character or not.
 *
 * @param {Point} point
 * @return {Boolean}
 */


function isCharPoint(point) {
  if (!isText(point.node)) {
    return false;
  }

  var ch = point.node.nodeValue.charAt(point.offset - 1);
  return ch && ch !== ' ' && ch !== NBSP_CHAR;
}
/**
 * returns whether point has space or not.
 *
 * @param {Point} point
 * @return {Boolean}
 */


function isSpacePoint(point) {
  if (!isText(point.node)) {
    return false;
  }

  var ch = point.node.nodeValue.charAt(point.offset - 1);
  return ch === ' ' || ch === NBSP_CHAR;
}
/**
 * @method walkPoint
 *
 * @param {BoundaryPoint} startPoint
 * @param {BoundaryPoint} endPoint
 * @param {Function} handler
 * @param {Boolean} isSkipInnerOffset
 */


function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
  var point = startPoint;

  while (point) {
    handler(point);

    if (isSamePoint(point, endPoint)) {
      break;
    }

    var isSkipOffset = isSkipInnerOffset && startPoint.node !== point.node && endPoint.node !== point.node;
    point = nextPointWithEmptyNode(point, isSkipOffset);
  }
}
/**
 * @method makeOffsetPath
 *
 * return offsetPath(array of offset) from ancestor
 *
 * @param {Node} ancestor - ancestor node
 * @param {Node} node
 */


function makeOffsetPath(ancestor, node) {
  var ancestors = listAncestor(node, func.eq(ancestor));
  return ancestors.map(position).reverse();
}
/**
 * @method fromOffsetPath
 *
 * return element from offsetPath(array of offset)
 *
 * @param {Node} ancestor - ancestor node
 * @param {array} offsets - offsetPath
 */


function fromOffsetPath(ancestor, offsets) {
  var current = ancestor;

  for (var i = 0, len = offsets.length; i < len; i++) {
    if (current.childNodes.length <= offsets[i]) {
      current = current.childNodes[current.childNodes.length - 1];
    } else {
      current = current.childNodes[offsets[i]];
    }
  }

  return current;
}
/**
 * @method splitNode
 *
 * split element or #text
 *
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @param {Boolean} [options.isDiscardEmptySplits] - default: false
 * @return {Node} right node of boundaryPoint
 */


function splitNode(point, options) {
  var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
  var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
  var isDiscardEmptySplits = options && options.isDiscardEmptySplits;

  if (isDiscardEmptySplits) {
    isSkipPaddingBlankHTML = true;
  } // edge case


  if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
    if (isLeftEdgePoint(point)) {
      return point.node;
    } else if (isRightEdgePoint(point)) {
      return point.node.nextSibling;
    }
  } // split #text


  if (isText(point.node)) {
    return point.node.splitText(point.offset);
  } else {
    var childNode = point.node.childNodes[point.offset];
    var clone = insertAfter(point.node.cloneNode(false), point.node);
    appendChildNodes(clone, listNext(childNode));

    if (!isSkipPaddingBlankHTML) {
      paddingBlankHTML(point.node);
      paddingBlankHTML(clone);
    }

    if (isDiscardEmptySplits) {
      if (dom_isEmpty(point.node)) {
        remove(point.node);
      }

      if (dom_isEmpty(clone)) {
        remove(clone);
        return point.node.nextSibling;
      }
    }

    return clone;
  }
}
/**
 * @method splitTree
 *
 * split tree by point
 *
 * @param {Node} root - split root
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @return {Node} right node of boundaryPoint
 */


function splitTree(root, point, options) {
  // ex) [#text, <span>, <p>]
  var ancestors = listAncestor(point.node, func.eq(root));

  if (!ancestors.length) {
    return null;
  } else if (ancestors.length === 1) {
    return splitNode(point, options);
  }

  return ancestors.reduce(function (node, parent) {
    if (node === point.node) {
      node = splitNode(point, options);
    }

    return splitNode({
      node: parent,
      offset: node ? position(node) : nodeLength(parent)
    }, options);
  });
}
/**
 * split point
 *
 * @param {Point} point
 * @param {Boolean} isInline
 * @return {Object}
 */


function splitPoint(point, isInline) {
  // find splitRoot, container
  //  - inline: splitRoot is a child of paragraph
  //  - block: splitRoot is a child of bodyContainer
  var pred = isInline ? isPara : isBodyContainer;
  var ancestors = listAncestor(point.node, pred);
  var topAncestor = lists.last(ancestors) || point.node;
  var splitRoot, container;

  if (pred(topAncestor)) {
    splitRoot = ancestors[ancestors.length - 2];
    container = topAncestor;
  } else {
    splitRoot = topAncestor;
    container = splitRoot.parentNode;
  } // if splitRoot is exists, split with splitTree


  var pivot = splitRoot && splitTree(splitRoot, point, {
    isSkipPaddingBlankHTML: isInline,
    isNotSplitEdgePoint: isInline
  }); // if container is point.node, find pivot with point.offset

  if (!pivot && container === point.node) {
    pivot = point.node.childNodes[point.offset];
  }

  return {
    rightNode: pivot,
    container: container
  };
}

function create(nodeName) {
  return document.createElement(nodeName);
}

function createText(text) {
  return document.createTextNode(text);
}
/**
 * @method remove
 *
 * remove node, (isRemoveChild: remove child or not)
 *
 * @param {Node} node
 * @param {Boolean} isRemoveChild
 */


function remove(node, isRemoveChild) {
  if (!node || !node.parentNode) {
    return;
  }

  if (node.removeNode) {
    return node.removeNode(isRemoveChild);
  }

  var parent = node.parentNode;

  if (!isRemoveChild) {
    var nodes = [];

    for (var i = 0, len = node.childNodes.length; i < len; i++) {
      nodes.push(node.childNodes[i]);
    }

    for (var _i = 0, _len = nodes.length; _i < _len; _i++) {
      parent.insertBefore(nodes[_i], node);
    }
  }

  parent.removeChild(node);
}
/**
 * @method removeWhile
 *
 * @param {Node} node
 * @param {Function} pred
 */


function removeWhile(node, pred) {
  while (node) {
    if (isEditable(node) || !pred(node)) {
      break;
    }

    var parent = node.parentNode;
    remove(node);
    node = parent;
  }
}
/**
 * @method replace
 *
 * replace node with provided nodeName
 *
 * @param {Node} node
 * @param {String} nodeName
 * @return {Node} - new node
 */


function replace(node, nodeName) {
  if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
    return node;
  }

  var newNode = create(nodeName);

  if (node.style.cssText) {
    newNode.style.cssText = node.style.cssText;
  }

  appendChildNodes(newNode, lists.from(node.childNodes));
  insertAfter(newNode, node);
  remove(node);
  return newNode;
}

var isTextarea = makePredByNodeName('TEXTAREA');
/**
 * @param {jQuery} $node
 * @param {Boolean} [stripLinebreaks] - default: false
 */

function value($node, stripLinebreaks) {
  var val = isTextarea($node[0]) ? $node.val() : $node.html();

  if (stripLinebreaks) {
    return val.replace(/[\n\r]/g, '');
  }

  return val;
}
/**
 * @method html
 *
 * get the HTML contents of node
 *
 * @param {jQuery} $node
 * @param {Boolean} [isNewlineOnBlock]
 */


function html($node, isNewlineOnBlock) {
  var markup = value($node);

  if (isNewlineOnBlock) {
    var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
    markup = markup.replace(regexTag, function (match, endSlash, name) {
      name = name.toUpperCase();
      var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) && !!endSlash;
      var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
      return match + (isEndOfInlineContainer || isBlockNode ? '\n' : '');
    });
    markup = markup.trim();
  }

  return markup;
}

function posFromPlaceholder(placeholder) {
  var $placeholder = external_jQuery_default()(placeholder);
  var pos = $placeholder.offset();
  var height = $placeholder.outerHeight(true); // include margin

  return {
    left: pos.left,
    top: pos.top + height
  };
}

function attachEvents($node, events) {
  Object.keys(events).forEach(function (key) {
    $node.on(key, events[key]);
  });
}

function detachEvents($node, events) {
  Object.keys(events).forEach(function (key) {
    $node.off(key, events[key]);
  });
}
/**
 * @method isCustomStyleTag
 *
 * assert if a node contains a "note-styletag" class,
 * which implies that's a custom-made style tag node
 *
 * @param {Node} an HTML DOM node
 */


function isCustomStyleTag(node) {
  return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
}

/* harmony default export */ const dom = ({
  /** @property {String} NBSP_CHAR */
  NBSP_CHAR: NBSP_CHAR,

  /** @property {String} ZERO_WIDTH_NBSP_CHAR */
  ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,

  /** @property {String} blank */
  blank: blankHTML,

  /** @property {String} emptyPara */
  emptyPara: "<p>".concat(blankHTML, "</p>"),
  makePredByNodeName: makePredByNodeName,
  isEditable: isEditable,
  isControlSizing: isControlSizing,
  isText: isText,
  isElement: isElement,
  isVoid: isVoid,
  isPara: isPara,
  isPurePara: isPurePara,
  isHeading: isHeading,
  isInline: isInline,
  isBlock: func.not(isInline),
  isBodyInline: isBodyInline,
  isBody: isBody,
  isParaInline: isParaInline,
  isPre: isPre,
  isList: isList,
  isTable: isTable,
  isData: isData,
  isCell: isCell,
  isBlockquote: isBlockquote,
  isBodyContainer: isBodyContainer,
  isAnchor: isAnchor,
  isDiv: makePredByNodeName('DIV'),
  isLi: isLi,
  isBR: makePredByNodeName('BR'),
  isSpan: makePredByNodeName('SPAN'),
  isB: makePredByNodeName('B'),
  isU: makePredByNodeName('U'),
  isS: makePredByNodeName('S'),
  isI: makePredByNodeName('I'),
  isImg: makePredByNodeName('IMG'),
  isTextarea: isTextarea,
  deepestChildIsEmpty: deepestChildIsEmpty,
  isEmpty: dom_isEmpty,
  isEmptyAnchor: func.and(isAnchor, dom_isEmpty),
  isClosestSibling: isClosestSibling,
  withClosestSiblings: withClosestSiblings,
  nodeLength: nodeLength,
  isLeftEdgePoint: isLeftEdgePoint,
  isRightEdgePoint: isRightEdgePoint,
  isEdgePoint: isEdgePoint,
  isLeftEdgeOf: isLeftEdgeOf,
  isRightEdgeOf: isRightEdgeOf,
  isLeftEdgePointOf: isLeftEdgePointOf,
  isRightEdgePointOf: isRightEdgePointOf,
  prevPoint: prevPoint,
  nextPoint: nextPoint,
  nextPointWithEmptyNode: nextPointWithEmptyNode,
  isSamePoint: isSamePoint,
  isVisiblePoint: isVisiblePoint,
  prevPointUntil: prevPointUntil,
  nextPointUntil: nextPointUntil,
  isCharPoint: isCharPoint,
  isSpacePoint: isSpacePoint,
  walkPoint: walkPoint,
  ancestor: ancestor,
  singleChildAncestor: singleChildAncestor,
  listAncestor: listAncestor,
  lastAncestor: lastAncestor,
  listNext: listNext,
  listPrev: listPrev,
  listDescendant: listDescendant,
  commonAncestor: commonAncestor,
  wrap: wrap,
  insertAfter: insertAfter,
  appendChildNodes: appendChildNodes,
  position: position,
  hasChildren: hasChildren,
  makeOffsetPath: makeOffsetPath,
  fromOffsetPath: fromOffsetPath,
  splitTree: splitTree,
  splitPoint: splitPoint,
  create: create,
  createText: createText,
  remove: remove,
  removeWhile: removeWhile,
  replace: replace,
  html: html,
  value: value,
  posFromPlaceholder: posFromPlaceholder,
  attachEvents: attachEvents,
  detachEvents: detachEvents,
  isCustomStyleTag: isCustomStyleTag
});
;// CONCATENATED MODULE: ./src/js/Context.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Context = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $note
   * @param {Object} options
   */
  function Context($note, options) {
    _classCallCheck(this, Context);

    this.$note = $note;
    this.memos = {};
    this.modules = {};
    this.layoutInfo = {};
    this.options = external_jQuery_default().extend(true, {}, options); // init ui with options

    (external_jQuery_default()).summernote.ui = external_jQuery_default().summernote.ui_template(this.options);
    this.ui = (external_jQuery_default()).summernote.ui;
    this.initialize();
  }
  /**
   * create layout and initialize modules and other resources
   */


  _createClass(Context, [{
    key: "initialize",
    value: function initialize() {
      this.layoutInfo = this.ui.createLayout(this.$note);

      this._initialize();

      this.$note.hide();
      return this;
    }
    /**
     * destroy modules and other resources and remove layout
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._destroy();

      this.$note.removeData('summernote');
      this.ui.removeLayout(this.$note, this.layoutInfo);
    }
    /**
     * destory modules and other resources and initialize it again
     */

  }, {
    key: "reset",
    value: function reset() {
      var disabled = this.isDisabled();
      this.code(dom.emptyPara);

      this._destroy();

      this._initialize();

      if (disabled) {
        this.disable();
      }
    }
  }, {
    key: "_initialize",
    value: function _initialize() {
      var _this = this;

      // set own id
      this.options.id = func.uniqueId(external_jQuery_default().now()); // set default container for tooltips, popovers, and dialogs

      this.options.container = this.options.container || this.layoutInfo.editor; // add optional buttons

      var buttons = external_jQuery_default().extend({}, this.options.buttons);
      Object.keys(buttons).forEach(function (key) {
        _this.memo('button.' + key, buttons[key]);
      });
      var modules = external_jQuery_default().extend({}, this.options.modules, (external_jQuery_default()).summernote.plugins || {}); // add and initialize modules

      Object.keys(modules).forEach(function (key) {
        _this.module(key, modules[key], true);
      });
      Object.keys(this.modules).forEach(function (key) {
        _this.initializeModule(key);
      });
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      var _this2 = this;

      // destroy modules with reversed order
      Object.keys(this.modules).reverse().forEach(function (key) {
        _this2.removeModule(key);
      });
      Object.keys(this.memos).forEach(function (key) {
        _this2.removeMemo(key);
      }); // trigger custom onDestroy callback

      this.triggerEvent('destroy', this);
    }
  }, {
    key: "code",
    value: function code(html) {
      var isActivated = this.invoke('codeview.isActivated');

      if (html === undefined) {
        this.invoke('codeview.sync');
        return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
      } else {
        if (isActivated) {
          this.invoke('codeview.sync', html);
        } else {
          this.layoutInfo.editable.html(html);
        }

        this.$note.val(html);
        this.triggerEvent('change', html, this.layoutInfo.editable);
      }
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.layoutInfo.editable.attr('contenteditable') === 'false';
    }
  }, {
    key: "enable",
    value: function enable() {
      this.layoutInfo.editable.attr('contenteditable', true);
      this.invoke('toolbar.activate', true);
      this.triggerEvent('disable', false);
      this.options.editing = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      // close codeview if codeview is opend
      if (this.invoke('codeview.isActivated')) {
        this.invoke('codeview.deactivate');
      }

      this.layoutInfo.editable.attr('contenteditable', false);
      this.options.editing = false;
      this.invoke('toolbar.deactivate', true);
      this.triggerEvent('disable', true);
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent() {
      var namespace = lists.head(arguments);
      var args = lists.tail(lists.from(arguments));
      var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];

      if (callback) {
        callback.apply(this.$note[0], args);
      }

      this.$note.trigger('summernote.' + namespace, args);
    }
  }, {
    key: "initializeModule",
    value: function initializeModule(key) {
      var module = this.modules[key];
      module.shouldInitialize = module.shouldInitialize || func.ok;

      if (!module.shouldInitialize()) {
        return;
      } // initialize module


      if (module.initialize) {
        module.initialize();
      } // attach events


      if (module.events) {
        dom.attachEvents(this.$note, module.events);
      }
    }
  }, {
    key: "module",
    value: function module(key, ModuleClass, withoutIntialize) {
      if (arguments.length === 1) {
        return this.modules[key];
      }

      this.modules[key] = new ModuleClass(this);

      if (!withoutIntialize) {
        this.initializeModule(key);
      }
    }
  }, {
    key: "removeModule",
    value: function removeModule(key) {
      var module = this.modules[key];

      if (module.shouldInitialize()) {
        if (module.events) {
          dom.detachEvents(this.$note, module.events);
        }

        if (module.destroy) {
          module.destroy();
        }
      }

      delete this.modules[key];
    }
  }, {
    key: "memo",
    value: function memo(key, obj) {
      if (arguments.length === 1) {
        return this.memos[key];
      }

      this.memos[key] = obj;
    }
  }, {
    key: "removeMemo",
    value: function removeMemo(key) {
      if (this.memos[key] && this.memos[key].destroy) {
        this.memos[key].destroy();
      }

      delete this.memos[key];
    }
    /**
     * Some buttons need to change their visual style immediately once they get pressed
     */

  }, {
    key: "createInvokeHandlerAndUpdateState",
    value: function createInvokeHandlerAndUpdateState(namespace, value) {
      var _this3 = this;

      return function (event) {
        _this3.createInvokeHandler(namespace, value)(event);

        _this3.invoke('buttons.updateCurrentStyle');
      };
    }
  }, {
    key: "createInvokeHandler",
    value: function createInvokeHandler(namespace, value) {
      var _this4 = this;

      return function (event) {
        event.preventDefault();
        var $target = external_jQuery_default()(event.target);

        _this4.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
      };
    }
  }, {
    key: "invoke",
    value: function invoke() {
      var namespace = lists.head(arguments);
      var args = lists.tail(lists.from(arguments));
      var splits = namespace.split('.');
      var hasSeparator = splits.length > 1;
      var moduleName = hasSeparator && lists.head(splits);
      var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
      var module = this.modules[moduleName || 'editor'];

      if (!moduleName && this[methodName]) {
        return this[methodName].apply(this, args);
      } else if (module && module[methodName] && module.shouldInitialize()) {
        return module[methodName].apply(module, args);
      }
    }
  }]);

  return Context;
}();


;// CONCATENATED MODULE: ./src/js/summernote.js




external_jQuery_default().fn.extend({
  /**
   * Summernote API
   *
   * @param {Object|String}
   * @return {this}
   */
  summernote: function summernote() {
    var type = external_jQuery_default().type(lists.head(arguments));
    var isExternalAPICalled = type === 'string';
    var hasInitOptions = type === 'object';
    var options = external_jQuery_default().extend({}, (external_jQuery_default()).summernote.options, hasInitOptions ? lists.head(arguments) : {}); // Update options

    options.langInfo = external_jQuery_default().extend(true, {}, (external_jQuery_default()).summernote.lang["en-US"], (external_jQuery_default()).summernote.lang[options.lang]);
    options.icons = external_jQuery_default().extend(true, {}, (external_jQuery_default()).summernote.options.icons, options.icons);
    options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
    this.each(function (idx, note) {
      var $note = external_jQuery_default()(note);

      if (!$note.data('summernote')) {
        var context = new Context($note, options);
        $note.data('summernote', context);
        $note.data('summernote').triggerEvent('init', context.layoutInfo);
      }
    });
    var $note = this.first();

    if ($note.length) {
      var context = $note.data('summernote');

      if (isExternalAPICalled) {
        return context.invoke.apply(context, lists.from(arguments));
      } else if (options.focus) {
        context.invoke('editor.focus');
      }
    }

    return this;
  }
});
;// CONCATENATED MODULE: ./src/js/core/range.js
function range_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function range_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function range_createClass(Constructor, protoProps, staticProps) { if (protoProps) range_defineProperties(Constructor.prototype, protoProps); if (staticProps) range_defineProperties(Constructor, staticProps); return Constructor; }






/**
 * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
 *
 * @param {TextRange} textRange
 * @param {Boolean} isStart
 * @return {BoundaryPoint}
 *
 * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
 */

function textRangeToPoint(textRange, isStart) {
  var container = textRange.parentElement();
  var offset;
  var tester = document.body.createTextRange();
  var prevContainer;
  var childNodes = lists.from(container.childNodes);

  for (offset = 0; offset < childNodes.length; offset++) {
    if (dom.isText(childNodes[offset])) {
      continue;
    }

    tester.moveToElementText(childNodes[offset]);

    if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
      break;
    }

    prevContainer = childNodes[offset];
  }

  if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
    var textRangeStart = document.body.createTextRange();
    var curTextNode = null;
    textRangeStart.moveToElementText(prevContainer || container);
    textRangeStart.collapse(!prevContainer);
    curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
    var pointTester = textRange.duplicate();
    pointTester.setEndPoint('StartToStart', textRangeStart);
    var textCount = pointTester.text.replace(/[\r\n]/g, '').length;

    while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
      textCount -= curTextNode.nodeValue.length;
      curTextNode = curTextNode.nextSibling;
    } // [workaround] enforce IE to re-reference curTextNode, hack


    var dummy = curTextNode.nodeValue; // eslint-disable-line

    if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) && textCount === curTextNode.nodeValue.length) {
      textCount -= curTextNode.nodeValue.length;
      curTextNode = curTextNode.nextSibling;
    }

    container = curTextNode;
    offset = textCount;
  }

  return {
    cont: container,
    offset: offset
  };
}
/**
 * return TextRange from boundary point (inspired by google closure-library)
 * @param {BoundaryPoint} point
 * @return {TextRange}
 */


function pointToTextRange(point) {
  var textRangeInfo = function textRangeInfo(container, offset) {
    var node, isCollapseToStart;

    if (dom.isText(container)) {
      var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
      var prevContainer = lists.last(prevTextNodes).previousSibling;
      node = prevContainer || container.parentNode;
      offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
      isCollapseToStart = !prevContainer;
    } else {
      node = container.childNodes[offset] || container;

      if (dom.isText(node)) {
        return textRangeInfo(node, 0);
      }

      offset = 0;
      isCollapseToStart = false;
    }

    return {
      node: node,
      collapseToStart: isCollapseToStart,
      offset: offset
    };
  };

  var textRange = document.body.createTextRange();
  var info = textRangeInfo(point.node, point.offset);
  textRange.moveToElementText(info.node);
  textRange.collapse(info.collapseToStart);
  textRange.moveStart('character', info.offset);
  return textRange;
}
/**
   * Wrapped Range
   *
   * @constructor
   * @param {Node} sc - start container
   * @param {Number} so - start offset
   * @param {Node} ec - end container
   * @param {Number} eo - end offset
   */


var WrappedRange = /*#__PURE__*/function () {
  function WrappedRange(sc, so, ec, eo) {
    range_classCallCheck(this, WrappedRange);

    this.sc = sc;
    this.so = so;
    this.ec = ec;
    this.eo = eo; // isOnEditable: judge whether range is on editable or not

    this.isOnEditable = this.makeIsOn(dom.isEditable); // isOnList: judge whether range is on list node or not

    this.isOnList = this.makeIsOn(dom.isList); // isOnAnchor: judge whether range is on anchor node or not

    this.isOnAnchor = this.makeIsOn(dom.isAnchor); // isOnCell: judge whether range is on cell node or not

    this.isOnCell = this.makeIsOn(dom.isCell); // isOnData: judge whether range is on data node or not

    this.isOnData = this.makeIsOn(dom.isData);
  } // nativeRange: get nativeRange from sc, so, ec, eo


  range_createClass(WrappedRange, [{
    key: "nativeRange",
    value: function nativeRange() {
      if (env.isW3CRangeSupport) {
        var w3cRange = document.createRange();
        w3cRange.setStart(this.sc, this.so);
        w3cRange.setEnd(this.ec, this.eo);
        return w3cRange;
      } else {
        var textRange = pointToTextRange({
          node: this.sc,
          offset: this.so
        });
        textRange.setEndPoint('EndToEnd', pointToTextRange({
          node: this.ec,
          offset: this.eo
        }));
        return textRange;
      }
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      return {
        sc: this.sc,
        so: this.so,
        ec: this.ec,
        eo: this.eo
      };
    }
  }, {
    key: "getStartPoint",
    value: function getStartPoint() {
      return {
        node: this.sc,
        offset: this.so
      };
    }
  }, {
    key: "getEndPoint",
    value: function getEndPoint() {
      return {
        node: this.ec,
        offset: this.eo
      };
    }
    /**
     * select update visible range
     */

  }, {
    key: "select",
    value: function select() {
      var nativeRng = this.nativeRange();

      if (env.isW3CRangeSupport) {
        var selection = document.getSelection();

        if (selection.rangeCount > 0) {
          selection.removeAllRanges();
        }

        selection.addRange(nativeRng);
      } else {
        nativeRng.select();
      }

      return this;
    }
    /**
     * Moves the scrollbar to start container(sc) of current range
     *
     * @return {WrappedRange}
     */

  }, {
    key: "scrollIntoView",
    value: function scrollIntoView(container) {
      var height = external_jQuery_default()(container).height();

      if (container.scrollTop + height < this.sc.offsetTop) {
        container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
      }

      return this;
    }
    /**
     * @return {WrappedRange}
     */

  }, {
    key: "normalize",
    value: function normalize() {
      /**
       * @param {BoundaryPoint} point
       * @param {Boolean} isLeftToRight - true: prefer to choose right node
       *                                - false: prefer to choose left node
       * @return {BoundaryPoint}
       */
      var getVisiblePoint = function getVisiblePoint(point, isLeftToRight) {
        if (!point) {
          return point;
        } // Just use the given point [XXX:Adhoc]
        //  - case 01. if the point is on the middle of the node
        //  - case 02. if the point is on the right edge and prefer to choose left node
        //  - case 03. if the point is on the left edge and prefer to choose right node
        //  - case 04. if the point is on the right edge and prefer to choose right node but the node is void
        //  - case 05. if the point is on the left edge and prefer to choose left node but the node is void
        //  - case 06. if the point is on the block node and there is no children


        if (dom.isVisiblePoint(point)) {
          if (!dom.isEdgePoint(point) || dom.isRightEdgePoint(point) && !isLeftToRight || dom.isLeftEdgePoint(point) && isLeftToRight || dom.isRightEdgePoint(point) && isLeftToRight && dom.isVoid(point.node.nextSibling) || dom.isLeftEdgePoint(point) && !isLeftToRight && dom.isVoid(point.node.previousSibling) || dom.isBlock(point.node) && dom.isEmpty(point.node)) {
            return point;
          }
        } // point on block's edge


        var block = dom.ancestor(point.node, dom.isBlock);
        var hasRightNode = false;

        if (!hasRightNode) {
          var prevPoint = dom.prevPoint(point) || {
            node: null
          };
          hasRightNode = (dom.isLeftEdgePointOf(point, block) || dom.isVoid(prevPoint.node)) && !isLeftToRight;
        }

        var hasLeftNode = false;

        if (!hasLeftNode) {
          var _nextPoint = dom.nextPoint(point) || {
            node: null
          };

          hasLeftNode = (dom.isRightEdgePointOf(point, block) || dom.isVoid(_nextPoint.node)) && isLeftToRight;
        }

        if (hasRightNode || hasLeftNode) {
          // returns point already on visible point
          if (dom.isVisiblePoint(point)) {
            return point;
          } // reverse direction


          isLeftToRight = !isLeftToRight;
        }

        var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
        return nextPoint || point;
      };

      var endPoint = getVisiblePoint(this.getEndPoint(), false);
      var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
      return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * returns matched nodes on range
     *
     * @param {Function} [pred] - predicate function
     * @param {Object} [options]
     * @param {Boolean} [options.includeAncestor]
     * @param {Boolean} [options.fullyContains]
     * @return {Node[]}
     */

  }, {
    key: "nodes",
    value: function nodes(pred, options) {
      pred = pred || func.ok;
      var includeAncestor = options && options.includeAncestor;
      var fullyContains = options && options.fullyContains; // TODO compare points and sort

      var startPoint = this.getStartPoint();
      var endPoint = this.getEndPoint();
      var nodes = [];
      var leftEdgeNodes = [];
      dom.walkPoint(startPoint, endPoint, function (point) {
        if (dom.isEditable(point.node)) {
          return;
        }

        var node;

        if (fullyContains) {
          if (dom.isLeftEdgePoint(point)) {
            leftEdgeNodes.push(point.node);
          }

          if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
            node = point.node;
          }
        } else if (includeAncestor) {
          node = dom.ancestor(point.node, pred);
        } else {
          node = point.node;
        }

        if (node && pred(node)) {
          nodes.push(node);
        }
      }, true);
      return lists.unique(nodes);
    }
    /**
     * returns commonAncestor of range
     * @return {Element} - commonAncestor
     */

  }, {
    key: "commonAncestor",
    value: function commonAncestor() {
      return dom.commonAncestor(this.sc, this.ec);
    }
    /**
     * returns expanded range by pred
     *
     * @param {Function} pred - predicate function
     * @return {WrappedRange}
     */

  }, {
    key: "expand",
    value: function expand(pred) {
      var startAncestor = dom.ancestor(this.sc, pred);
      var endAncestor = dom.ancestor(this.ec, pred);

      if (!startAncestor && !endAncestor) {
        return new WrappedRange(this.sc, this.so, this.ec, this.eo);
      }

      var boundaryPoints = this.getPoints();

      if (startAncestor) {
        boundaryPoints.sc = startAncestor;
        boundaryPoints.so = 0;
      }

      if (endAncestor) {
        boundaryPoints.ec = endAncestor;
        boundaryPoints.eo = dom.nodeLength(endAncestor);
      }

      return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    }
    /**
     * @param {Boolean} isCollapseToStart
     * @return {WrappedRange}
     */

  }, {
    key: "collapse",
    value: function collapse(isCollapseToStart) {
      if (isCollapseToStart) {
        return new WrappedRange(this.sc, this.so, this.sc, this.so);
      } else {
        return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
      }
    }
    /**
     * splitText on range
     */

  }, {
    key: "splitText",
    value: function splitText() {
      var isSameContainer = this.sc === this.ec;
      var boundaryPoints = this.getPoints();

      if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
        this.ec.splitText(this.eo);
      }

      if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
        boundaryPoints.sc = this.sc.splitText(this.so);
        boundaryPoints.so = 0;

        if (isSameContainer) {
          boundaryPoints.ec = boundaryPoints.sc;
          boundaryPoints.eo = this.eo - this.so;
        }
      }

      return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    }
    /**
     * delete contents on range
     * @return {WrappedRange}
     */

  }, {
    key: "deleteContents",
    value: function deleteContents() {
      if (this.isCollapsed()) {
        return this;
      }

      var rng = this.splitText();
      var nodes = rng.nodes(null, {
        fullyContains: true
      }); // find new cursor point

      var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
        return !lists.contains(nodes, point.node);
      });
      var emptyParents = [];
      external_jQuery_default().each(nodes, function (idx, node) {
        // find empty parents
        var parent = node.parentNode;

        if (point.node !== parent && dom.nodeLength(parent) === 1) {
          emptyParents.push(parent);
        }

        dom.remove(node, false);
      }); // remove empty parents

      external_jQuery_default().each(emptyParents, function (idx, node) {
        dom.remove(node, false);
      });
      return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
    }
    /**
     * makeIsOn: return isOn(pred) function
     */

  }, {
    key: "makeIsOn",
    value: function makeIsOn(pred) {
      return function () {
        var ancestor = dom.ancestor(this.sc, pred);
        return !!ancestor && ancestor === dom.ancestor(this.ec, pred);
      };
    }
    /**
     * @param {Function} pred
     * @return {Boolean}
     */

  }, {
    key: "isLeftEdgeOf",
    value: function isLeftEdgeOf(pred) {
      if (!dom.isLeftEdgePoint(this.getStartPoint())) {
        return false;
      }

      var node = dom.ancestor(this.sc, pred);
      return node && dom.isLeftEdgeOf(this.sc, node);
    }
    /**
     * returns whether range was collapsed or not
     */

  }, {
    key: "isCollapsed",
    value: function isCollapsed() {
      return this.sc === this.ec && this.so === this.eo;
    }
    /**
     * wrap inline nodes which children of body with paragraph
     *
     * @return {WrappedRange}
     */

  }, {
    key: "wrapBodyInlineWithPara",
    value: function wrapBodyInlineWithPara() {
      if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
        this.sc.innerHTML = dom.emptyPara;
        return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
      }
      /**
       * [workaround] firefox often create range on not visible point. so normalize here.
       *  - firefox: |<p>text</p>|
       *  - chrome: <p>|text|</p>
       */


      var rng = this.normalize();

      if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
        return rng;
      } // find inline top ancestor


      var topAncestor;

      if (dom.isInline(rng.sc)) {
        var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
        topAncestor = lists.last(ancestors);

        if (!dom.isInline(topAncestor)) {
          topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
        }
      } else {
        topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
      }

      if (topAncestor) {
        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline)); // wrap with paragraph

        if (inlineSiblings.length) {
          var para = dom.wrap(lists.head(inlineSiblings), 'p');
          dom.appendChildNodes(para, lists.tail(inlineSiblings));
        }
      }

      return this.normalize();
    }
    /**
     * insert node at current cursor
     *
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: "insertNode",
    value: function insertNode(node) {
      var rng = this;

      if (dom.isText(node) || dom.isInline(node)) {
        rng = this.wrapBodyInlineWithPara().deleteContents();
      }

      var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

      if (info.rightNode) {
        info.rightNode.parentNode.insertBefore(node, info.rightNode);

        if (dom.isEmpty(info.rightNode) && dom.isPara(node)) {
          info.rightNode.parentNode.removeChild(info.rightNode);
        }
      } else {
        info.container.appendChild(node);
      }

      return node;
    }
    /**
     * insert html at current cursor
     */

  }, {
    key: "pasteHTML",
    value: function pasteHTML(markup) {
      markup = external_jQuery_default().trim(markup);
      var contentsContainer = external_jQuery_default()('<div></div>').html(markup)[0];
      var childNodes = lists.from(contentsContainer.childNodes); // const rng = this.wrapBodyInlineWithPara().deleteContents();

      var rng = this;
      var reversed = false;

      if (rng.so >= 0) {
        childNodes = childNodes.reverse();
        reversed = true;
      }

      childNodes = childNodes.map(function (childNode) {
        return rng.insertNode(childNode);
      });

      if (reversed) {
        childNodes = childNodes.reverse();
      }

      return childNodes;
    }
    /**
     * returns text in range
     *
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      var nativeRng = this.nativeRange();
      return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
    }
    /**
     * returns range for word before cursor
     *
     * @param {Boolean} [findAfter] - find after cursor, default: false
     * @return {WrappedRange}
     */

  }, {
    key: "getWordRange",
    value: function getWordRange(findAfter) {
      var endPoint = this.getEndPoint();

      if (!dom.isCharPoint(endPoint)) {
        return this;
      }

      var startPoint = dom.prevPointUntil(endPoint, function (point) {
        return !dom.isCharPoint(point);
      });

      if (findAfter) {
        endPoint = dom.nextPointUntil(endPoint, function (point) {
          return !dom.isCharPoint(point);
        });
      }

      return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * returns range for words before cursor
     *
     * @param {Boolean} [findAfter] - find after cursor, default: false
     * @return {WrappedRange}
     */

  }, {
    key: "getWordsRange",
    value: function getWordsRange(findAfter) {
      var endPoint = this.getEndPoint();

      var isNotTextPoint = function isNotTextPoint(point) {
        return !dom.isCharPoint(point) && !dom.isSpacePoint(point);
      };

      if (isNotTextPoint(endPoint)) {
        return this;
      }

      var startPoint = dom.prevPointUntil(endPoint, isNotTextPoint);

      if (findAfter) {
        endPoint = dom.nextPointUntil(endPoint, isNotTextPoint);
      }

      return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * returns range for words before cursor that match with a Regex
     *
     * example:
     *  range: 'hi @Peter Pan'
     *  regex: '/@[a-z ]+/i'
     *  return range: '@Peter Pan'
     *
     * @param {RegExp} [regex]
     * @return {WrappedRange|null}
     */

  }, {
    key: "getWordsMatchRange",
    value: function getWordsMatchRange(regex) {
      var endPoint = this.getEndPoint();
      var startPoint = dom.prevPointUntil(endPoint, function (point) {
        if (!dom.isCharPoint(point) && !dom.isSpacePoint(point)) {
          return true;
        }

        var rng = new WrappedRange(point.node, point.offset, endPoint.node, endPoint.offset);
        var result = regex.exec(rng.toString());
        return result && result.index === 0;
      });
      var rng = new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      var text = rng.toString();
      var result = regex.exec(text);

      if (result && result[0].length === text.length) {
        return rng;
      } else {
        return null;
      }
    }
    /**
     * create offsetPath bookmark
     *
     * @param {Node} editable
     */

  }, {
    key: "bookmark",
    value: function bookmark(editable) {
      return {
        s: {
          path: dom.makeOffsetPath(editable, this.sc),
          offset: this.so
        },
        e: {
          path: dom.makeOffsetPath(editable, this.ec),
          offset: this.eo
        }
      };
    }
    /**
     * create offsetPath bookmark base on paragraph
     *
     * @param {Node[]} paras
     */

  }, {
    key: "paraBookmark",
    value: function paraBookmark(paras) {
      return {
        s: {
          path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
          offset: this.so
        },
        e: {
          path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
          offset: this.eo
        }
      };
    }
    /**
     * getClientRects
     * @return {Rect[]}
     */

  }, {
    key: "getClientRects",
    value: function getClientRects() {
      var nativeRng = this.nativeRange();
      return nativeRng.getClientRects();
    }
  }]);

  return WrappedRange;
}();
/**
 * Data structure
 *  * BoundaryPoint: a point of dom tree
 *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
 *
 * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
 */


/* harmony default export */ const range = ({
  /**
   * create Range Object From arguments or Browser Selection
   *
   * @param {Node} sc - start container
   * @param {Number} so - start offset
   * @param {Node} ec - end container
   * @param {Number} eo - end offset
   * @return {WrappedRange}
   */
  create: function create(sc, so, ec, eo) {
    if (arguments.length === 4) {
      return new WrappedRange(sc, so, ec, eo);
    } else if (arguments.length === 2) {
      // collapsed
      ec = sc;
      eo = so;
      return new WrappedRange(sc, so, ec, eo);
    } else {
      var wrappedRange = this.createFromSelection();

      if (!wrappedRange && arguments.length === 1) {
        var bodyElement = arguments[0];

        if (dom.isEditable(bodyElement)) {
          bodyElement = bodyElement.lastChild;
        }

        return this.createFromBodyElement(bodyElement, dom.emptyPara === arguments[0].innerHTML);
      }

      return wrappedRange;
    }
  },
  createFromBodyElement: function createFromBodyElement(bodyElement) {
    var isCollapseToStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var wrappedRange = this.createFromNode(bodyElement);
    return wrappedRange.collapse(isCollapseToStart);
  },
  createFromSelection: function createFromSelection() {
    var sc, so, ec, eo;

    if (env.isW3CRangeSupport) {
      var selection = document.getSelection();

      if (!selection || selection.rangeCount === 0) {
        return null;
      } else if (dom.isBody(selection.anchorNode)) {
        // Firefox: returns entire body as range on initialization.
        // We won't never need it.
        return null;
      }

      var nativeRng = selection.getRangeAt(0);
      sc = nativeRng.startContainer;
      so = nativeRng.startOffset;
      ec = nativeRng.endContainer;
      eo = nativeRng.endOffset;
    } else {
      // IE8: TextRange
      var textRange = document.selection.createRange();
      var textRangeEnd = textRange.duplicate();
      textRangeEnd.collapse(false);
      var textRangeStart = textRange;
      textRangeStart.collapse(true);
      var startPoint = textRangeToPoint(textRangeStart, true);
      var endPoint = textRangeToPoint(textRangeEnd, false); // same visible point case: range was collapsed.

      if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) && dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) && endPoint.node.nextSibling === startPoint.node) {
        startPoint = endPoint;
      }

      sc = startPoint.cont;
      so = startPoint.offset;
      ec = endPoint.cont;
      eo = endPoint.offset;
    }

    return new WrappedRange(sc, so, ec, eo);
  },

  /**
   * @method
   *
   * create WrappedRange from node
   *
   * @param {Node} node
   * @return {WrappedRange}
   */
  createFromNode: function createFromNode(node) {
    var sc = node;
    var so = 0;
    var ec = node;
    var eo = dom.nodeLength(ec); // browsers can't target a picture or void node

    if (dom.isVoid(sc)) {
      so = dom.listPrev(sc).length - 1;
      sc = sc.parentNode;
    }

    if (dom.isBR(ec)) {
      eo = dom.listPrev(ec).length - 1;
      ec = ec.parentNode;
    } else if (dom.isVoid(ec)) {
      eo = dom.listPrev(ec).length;
      ec = ec.parentNode;
    }

    return this.create(sc, so, ec, eo);
  },

  /**
   * create WrappedRange from node after position
   *
   * @param {Node} node
   * @return {WrappedRange}
   */
  createFromNodeBefore: function createFromNodeBefore(node) {
    return this.createFromNode(node).collapse(true);
  },

  /**
   * create WrappedRange from node after position
   *
   * @param {Node} node
   * @return {WrappedRange}
   */
  createFromNodeAfter: function createFromNodeAfter(node) {
    return this.createFromNode(node).collapse();
  },

  /**
   * @method
   *
   * create WrappedRange from bookmark
   *
   * @param {Node} editable
   * @param {Object} bookmark
   * @return {WrappedRange}
   */
  createFromBookmark: function createFromBookmark(editable, bookmark) {
    var sc = dom.fromOffsetPath(editable, bookmark.s.path);
    var so = bookmark.s.offset;
    var ec = dom.fromOffsetPath(editable, bookmark.e.path);
    var eo = bookmark.e.offset;
    return new WrappedRange(sc, so, ec, eo);
  },

  /**
   * @method
   *
   * create WrappedRange from paraBookmark
   *
   * @param {Object} bookmark
   * @param {Node[]} paras
   * @return {WrappedRange}
   */
  createFromParaBookmark: function createFromParaBookmark(bookmark, paras) {
    var so = bookmark.s.offset;
    var eo = bookmark.e.offset;
    var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
    var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
    return new WrappedRange(sc, so, ec, eo);
  }
});
;// CONCATENATED MODULE: ./src/js/core/key.js


var KEY_MAP = {
  'BACKSPACE': 8,
  'TAB': 9,
  'ENTER': 13,
  'ESCAPE': 27,
  'SPACE': 32,
  'DELETE': 46,
  // Arrow
  'LEFT': 37,
  'UP': 38,
  'RIGHT': 39,
  'DOWN': 40,
  // Number: 0-9
  'NUM0': 48,
  'NUM1': 49,
  'NUM2': 50,
  'NUM3': 51,
  'NUM4': 52,
  'NUM5': 53,
  'NUM6': 54,
  'NUM7': 55,
  'NUM8': 56,
  // Alphabet: a-z
  'B': 66,
  'E': 69,
  'I': 73,
  'J': 74,
  'K': 75,
  'L': 76,
  'R': 82,
  'S': 83,
  'U': 85,
  'V': 86,
  'Y': 89,
  'Z': 90,
  'SLASH': 191,
  'LEFTBRACKET': 219,
  'BACKSLASH': 220,
  'RIGHTBRACKET': 221,
  // Navigation
  'HOME': 36,
  'END': 35,
  'PAGEUP': 33,
  'PAGEDOWN': 34
};
/**
 * @class core.key
 *
 * Object for keycodes.
 *
 * @singleton
 * @alternateClassName key
 */

/* harmony default export */ const key = ({
  /**
   * @method isEdit
   *
   * @param {Number} keyCode
   * @return {Boolean}
   */
  isEdit: function isEdit(keyCode) {
    return lists.contains([KEY_MAP.BACKSPACE, KEY_MAP.TAB, KEY_MAP.ENTER, KEY_MAP.SPACE, KEY_MAP.DELETE], keyCode);
  },

  /**
   * @method isMove
   *
   * @param {Number} keyCode
   * @return {Boolean}
   */
  isMove: function isMove(keyCode) {
    return lists.contains([KEY_MAP.LEFT, KEY_MAP.UP, KEY_MAP.RIGHT, KEY_MAP.DOWN], keyCode);
  },

  /**
   * @method isNavigation
   *
   * @param {Number} keyCode
   * @return {Boolean}
   */
  isNavigation: function isNavigation(keyCode) {
    return lists.contains([KEY_MAP.HOME, KEY_MAP.END, KEY_MAP.PAGEUP, KEY_MAP.PAGEDOWN], keyCode);
  },

  /**
   * @property {Object} nameFromCode
   * @property {String} nameFromCode.8 "BACKSPACE"
   */
  nameFromCode: func.invertObject(KEY_MAP),
  code: KEY_MAP
});
;// CONCATENATED MODULE: ./src/js/core/async.js

/**
 * @method readFileAsDataURL
 *
 * read contents of file as representing URL
 *
 * @param {File} file
 * @return {Promise} - then: dataUrl
 */

function readFileAsDataURL(file) {
  return external_jQuery_default().Deferred(function (deferred) {
    external_jQuery_default().extend(new FileReader(), {
      onload: function onload(e) {
        var dataURL = e.target.result;
        deferred.resolve(dataURL);
      },
      onerror: function onerror(err) {
        deferred.reject(err);
      }
    }).readAsDataURL(file);
  }).promise();
}
/**
 * @method createImage
 *
 * create `<image>` from url string
 *
 * @param {String} url
 * @return {Promise} - then: $image
 */

function createImage(url) {
  return external_jQuery_default().Deferred(function (deferred) {
    var $img = external_jQuery_default()('<img>');
    $img.one('load', function () {
      $img.off('error abort');
      deferred.resolve($img);
    }).one('error abort', function () {
      $img.off('load').detach();
      deferred.reject($img);
    }).css({
      display: 'none'
    }).appendTo(document.body).attr('src', url);
  }).promise();
}
;// CONCATENATED MODULE: ./src/js/editing/History.js
function History_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function History_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function History_createClass(Constructor, protoProps, staticProps) { if (protoProps) History_defineProperties(Constructor.prototype, protoProps); if (staticProps) History_defineProperties(Constructor, staticProps); return Constructor; }



var History = /*#__PURE__*/function () {
  function History(context) {
    History_classCallCheck(this, History);

    this.stack = [];
    this.stackOffset = -1;
    this.context = context;
    this.$editable = context.layoutInfo.editable;
    this.editable = this.$editable[0];
  }

  History_createClass(History, [{
    key: "makeSnapshot",
    value: function makeSnapshot() {
      var rng = range.create(this.editable);
      var emptyBookmark = {
        s: {
          path: [],
          offset: 0
        },
        e: {
          path: [],
          offset: 0
        }
      };
      return {
        contents: this.$editable.html(),
        bookmark: rng && rng.isOnEditable() ? rng.bookmark(this.editable) : emptyBookmark
      };
    }
  }, {
    key: "applySnapshot",
    value: function applySnapshot(snapshot) {
      if (snapshot.contents !== null) {
        this.$editable.html(snapshot.contents);
      }

      if (snapshot.bookmark !== null) {
        range.createFromBookmark(this.editable, snapshot.bookmark).select();
      }
    }
    /**
    * @method rewind
    * Rewinds the history stack back to the first snapshot taken.
    * Leaves the stack intact, so that "Redo" can still be used.
    */

  }, {
    key: "rewind",
    value: function rewind() {
      // Create snap shot if not yet recorded
      if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
        this.recordUndo();
      } // Return to the first available snapshot.


      this.stackOffset = 0; // Apply that snapshot.

      this.applySnapshot(this.stack[this.stackOffset]);
    }
    /**
    *  @method commit
    *  Resets history stack, but keeps current editor's content.
    */

  }, {
    key: "commit",
    value: function commit() {
      // Clear the stack.
      this.stack = []; // Restore stackOffset to its original value.

      this.stackOffset = -1; // Record our first snapshot (of nothing).

      this.recordUndo();
    }
    /**
    * @method reset
    * Resets the history stack completely; reverting to an empty editor.
    */

  }, {
    key: "reset",
    value: function reset() {
      // Clear the stack.
      this.stack = []; // Restore stackOffset to its original value.

      this.stackOffset = -1; // Clear the editable area.

      this.$editable.html(''); // Record our first snapshot (of nothing).

      this.recordUndo();
    }
    /**
     * undo
     */

  }, {
    key: "undo",
    value: function undo() {
      // Create snap shot if not yet recorded
      if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
        this.recordUndo();
      }

      if (this.stackOffset > 0) {
        this.stackOffset--;
        this.applySnapshot(this.stack[this.stackOffset]);
      }
    }
    /**
     * redo
     */

  }, {
    key: "redo",
    value: function redo() {
      if (this.stack.length - 1 > this.stackOffset) {
        this.stackOffset++;
        this.applySnapshot(this.stack[this.stackOffset]);
      }
    }
    /**
     * recorded undo
     */

  }, {
    key: "recordUndo",
    value: function recordUndo() {
      this.stackOffset++; // Wash out stack after stackOffset

      if (this.stack.length > this.stackOffset) {
        this.stack = this.stack.slice(0, this.stackOffset);
      } // Create new snapshot and push it to the end


      this.stack.push(this.makeSnapshot()); // If the stack size reachs to the limit, then slice it

      if (this.stack.length > this.context.options.historyLimit) {
        this.stack.shift();
        this.stackOffset -= 1;
      }
    }
  }]);

  return History;
}();


;// CONCATENATED MODULE: ./src/js/editing/Style.js
function Style_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Style_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Style_createClass(Constructor, protoProps, staticProps) { if (protoProps) Style_defineProperties(Constructor.prototype, protoProps); if (staticProps) Style_defineProperties(Constructor, staticProps); return Constructor; }






var Style = /*#__PURE__*/function () {
  function Style() {
    Style_classCallCheck(this, Style);
  }

  Style_createClass(Style, [{
    key: "jQueryCSS",
    value:
    /**
     * @method jQueryCSS
     *
     * [workaround] for old jQuery
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @private
     * @param  {jQuery} $obj
     * @param  {Array} propertyNames - An array of one or more CSS properties.
     * @return {Object}
     */
    function jQueryCSS($obj, propertyNames) {
      var result = {};
      external_jQuery_default().each(propertyNames, function (idx, propertyName) {
        result[propertyName] = $obj.css(propertyName);
      });
      return result;
    }
    /**
     * returns style object from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */

  }, {
    key: "fromNode",
    value: function fromNode($node) {
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
      var styleInfo = this.jQueryCSS($node, properties) || {};
      var fontSize = $node[0].style.fontSize || styleInfo['font-size'];
      styleInfo['font-size'] = parseInt(fontSize, 10);
      styleInfo['font-size-unit'] = fontSize.match(/[a-z%]+$/);
      return styleInfo;
    }
    /**
     * paragraph level style
     *
     * @param {WrappedRange} rng
     * @param {Object} styleInfo
     */

  }, {
    key: "stylePara",
    value: function stylePara(rng, styleInfo) {
      external_jQuery_default().each(rng.nodes(dom.isPara, {
        includeAncestor: true
      }), function (idx, para) {
        external_jQuery_default()(para).css(styleInfo);
      });
    }
    /**
     * insert and returns styleNodes on range.
     *
     * @param {WrappedRange} rng
     * @param {Object} [options] - options for styleNodes
     * @param {String} [options.nodeName] - default: `SPAN`
     * @param {Boolean} [options.expandClosestSibling] - default: `false`
     * @param {Boolean} [options.onlyPartialContains] - default: `false`
     * @return {Node[]}
     */

  }, {
    key: "styleNodes",
    value: function styleNodes(rng, options) {
      rng = rng.splitText();
      var nodeName = options && options.nodeName || 'SPAN';
      var expandClosestSibling = !!(options && options.expandClosestSibling);
      var onlyPartialContains = !!(options && options.onlyPartialContains);

      if (rng.isCollapsed()) {
        return [rng.insertNode(dom.create(nodeName))];
      }

      var pred = dom.makePredByNodeName(nodeName);
      var nodes = rng.nodes(dom.isText, {
        fullyContains: true
      }).map(function (text) {
        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
      });

      if (expandClosestSibling) {
        if (onlyPartialContains) {
          var nodesInRange = rng.nodes(); // compose with partial contains predication

          pred = func.and(pred, function (node) {
            return lists.contains(nodesInRange, node);
          });
        }

        return nodes.map(function (node) {
          var siblings = dom.withClosestSiblings(node, pred);
          var head = lists.head(siblings);
          var tails = lists.tail(siblings);
          external_jQuery_default().each(tails, function (idx, elem) {
            dom.appendChildNodes(head, elem.childNodes);
            dom.remove(elem);
          });
          return lists.head(siblings);
        });
      } else {
        return nodes;
      }
    }
    /**
     * get current style on cursor
     *
     * @param {WrappedRange} rng
     * @return {Object} - object contains style properties.
     */

  }, {
    key: "current",
    value: function current(rng) {
      var $cont = external_jQuery_default()(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
      var styleInfo = this.fromNode($cont); // document.queryCommandState for toggle state
      // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"

      try {
        styleInfo = external_jQuery_default().extend(styleInfo, {
          'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
          'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
          'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
          'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
          'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
          'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
          'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
        });
      } catch (e) {// eslint-disable-next-line
      } // list-style-type to list-style(unordered, ordered)


      if (!rng.isOnList()) {
        styleInfo['list-style'] = 'none';
      } else {
        var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
        var isUnordered = orderedTypes.indexOf(styleInfo['list-style-type']) > -1;
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
      }

      var para = dom.ancestor(rng.sc, dom.isPara);

      if (para && para.style['line-height']) {
        styleInfo['line-height'] = para.style.lineHeight;
      } else {
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
        styleInfo['line-height'] = lineHeight.toFixed(1);
      }

      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
      styleInfo.range = rng;
      return styleInfo;
    }
  }]);

  return Style;
}();


;// CONCATENATED MODULE: ./src/js/editing/Bullet.js
function Bullet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Bullet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Bullet_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bullet_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bullet_defineProperties(Constructor, staticProps); return Constructor; }







var Bullet = /*#__PURE__*/function () {
  function Bullet() {
    Bullet_classCallCheck(this, Bullet);
  }

  Bullet_createClass(Bullet, [{
    key: "insertOrderedList",
    value:
    /**
     * toggle ordered list
     */
    function insertOrderedList(editable) {
      this.toggleList('OL', editable);
    }
    /**
     * toggle unordered list
     */

  }, {
    key: "insertUnorderedList",
    value: function insertUnorderedList(editable) {
      this.toggleList('UL', editable);
    }
    /**
     * indent
     */

  }, {
    key: "indent",
    value: function indent(editable) {
      var _this = this;

      var rng = range.create(editable).wrapBodyInlineWithPara();
      var paras = rng.nodes(dom.isPara, {
        includeAncestor: true
      });
      var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
      external_jQuery_default().each(clustereds, function (idx, paras) {
        var head = lists.head(paras);

        if (dom.isLi(head)) {
          var previousList = _this.findList(head.previousSibling);

          if (previousList) {
            paras.map(function (para) {
              return previousList.appendChild(para);
            });
          } else {
            _this.wrapList(paras, head.parentNode.nodeName);

            paras.map(function (para) {
              return para.parentNode;
            }).map(function (para) {
              return _this.appendToPrevious(para);
            });
          }
        } else {
          external_jQuery_default().each(paras, function (idx, para) {
            external_jQuery_default()(para).css('marginLeft', function (idx, val) {
              return (parseInt(val, 10) || 0) + 25;
            });
          });
        }
      });
      rng.select();
    }
    /**
     * outdent
     */

  }, {
    key: "outdent",
    value: function outdent(editable) {
      var _this2 = this;

      var rng = range.create(editable).wrapBodyInlineWithPara();
      var paras = rng.nodes(dom.isPara, {
        includeAncestor: true
      });
      var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
      external_jQuery_default().each(clustereds, function (idx, paras) {
        var head = lists.head(paras);

        if (dom.isLi(head)) {
          _this2.releaseList([paras]);
        } else {
          external_jQuery_default().each(paras, function (idx, para) {
            external_jQuery_default()(para).css('marginLeft', function (idx, val) {
              val = parseInt(val, 10) || 0;
              return val > 25 ? val - 25 : '';
            });
          });
        }
      });
      rng.select();
    }
    /**
     * toggle list
     *
     * @param {String} listName - OL or UL
     */

  }, {
    key: "toggleList",
    value: function toggleList(listName, editable) {
      var _this3 = this;

      var rng = range.create(editable).wrapBodyInlineWithPara();
      var paras = rng.nodes(dom.isPara, {
        includeAncestor: true
      });
      var bookmark = rng.paraBookmark(paras);
      var clustereds = lists.clusterBy(paras, func.peq2('parentNode')); // paragraph to list

      if (lists.find(paras, dom.isPurePara)) {
        var wrappedParas = [];
        external_jQuery_default().each(clustereds, function (idx, paras) {
          wrappedParas = wrappedParas.concat(_this3.wrapList(paras, listName));
        });
        paras = wrappedParas; // list to paragraph or change list style
      } else {
        var diffLists = rng.nodes(dom.isList, {
          includeAncestor: true
        }).filter(function (listNode) {
          return !external_jQuery_default().nodeName(listNode, listName);
        });

        if (diffLists.length) {
          external_jQuery_default().each(diffLists, function (idx, listNode) {
            dom.replace(listNode, listName);
          });
        } else {
          paras = this.releaseList(clustereds, true);
        }
      }

      range.createFromParaBookmark(bookmark, paras).select();
    }
    /**
     * @param {Node[]} paras
     * @param {String} listName
     * @return {Node[]}
     */

  }, {
    key: "wrapList",
    value: function wrapList(paras, listName) {
      var head = lists.head(paras);
      var last = lists.last(paras);
      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;
      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last); // P to LI

      paras = paras.map(function (para) {
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
      }); // append to list(<ul>, <ol>)

      dom.appendChildNodes(listNode, paras);

      if (nextList) {
        dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
        dom.remove(nextList);
      }

      return paras;
    }
    /**
     * @method releaseList
     *
     * @param {Array[]} clustereds
     * @param {Boolean} isEscapseToBody
     * @return {Node[]}
     */

  }, {
    key: "releaseList",
    value: function releaseList(clustereds, isEscapseToBody) {
      var _this4 = this;

      var releasedParas = [];
      external_jQuery_default().each(clustereds, function (idx, paras) {
        var head = lists.head(paras);
        var last = lists.last(paras);
        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
        var parentItem = headList.parentNode;

        if (headList.parentNode.nodeName === 'LI') {
          paras.map(function (para) {
            var newList = _this4.findNextSiblings(para);

            if (parentItem.nextSibling) {
              parentItem.parentNode.insertBefore(para, parentItem.nextSibling);
            } else {
              parentItem.parentNode.appendChild(para);
            }

            if (newList.length) {
              _this4.wrapList(newList, headList.nodeName);

              para.appendChild(newList[0].parentNode);
            }
          });

          if (headList.children.length === 0) {
            parentItem.removeChild(headList);
          }

          if (parentItem.childNodes.length === 0) {
            parentItem.parentNode.removeChild(parentItem);
          }
        } else {
          var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
            node: last.parentNode,
            offset: dom.position(last) + 1
          }, {
            isSkipPaddingBlankHTML: true
          }) : null;
          var middleList = dom.splitTree(headList, {
            node: head.parentNode,
            offset: dom.position(head)
          }, {
            isSkipPaddingBlankHTML: true
          });
          paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) : lists.from(middleList.childNodes).filter(dom.isLi); // LI to P

          if (isEscapseToBody || !dom.isList(headList.parentNode)) {
            paras = paras.map(function (para) {
              return dom.replace(para, 'P');
            });
          }

          external_jQuery_default().each(lists.from(paras).reverse(), function (idx, para) {
            dom.insertAfter(para, headList);
          }); // remove empty lists

          var rootLists = lists.compact([headList, middleList, lastList]);
          external_jQuery_default().each(rootLists, function (idx, rootList) {
            var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
            external_jQuery_default().each(listNodes.reverse(), function (idx, listNode) {
              if (!dom.nodeLength(listNode)) {
                dom.remove(listNode, true);
              }
            });
          });
        }

        releasedParas = releasedParas.concat(paras);
      });
      return releasedParas;
    }
    /**
     * @method appendToPrevious
     *
     * Appends list to previous list item, if
     * none exist it wraps the list in a new list item.
     *
     * @param {HTMLNode} ListItem
     * @return {HTMLNode}
     */

  }, {
    key: "appendToPrevious",
    value: function appendToPrevious(node) {
      return node.previousSibling ? dom.appendChildNodes(node.previousSibling, [node]) : this.wrapList([node], 'LI');
    }
    /**
     * @method findList
     *
     * Finds an existing list in list item
     *
     * @param {HTMLNode} ListItem
     * @return {Array[]}
     */

  }, {
    key: "findList",
    value: function findList(node) {
      return node ? lists.find(node.children, function (child) {
        return ['OL', 'UL'].indexOf(child.nodeName) > -1;
      }) : null;
    }
    /**
     * @method findNextSiblings
     *
     * Finds all list item siblings that follow it
     *
     * @param {HTMLNode} ListItem
     * @return {HTMLNode}
     */

  }, {
    key: "findNextSiblings",
    value: function findNextSiblings(node) {
      var siblings = [];

      while (node.nextSibling) {
        siblings.push(node.nextSibling);
        node = node.nextSibling;
      }

      return siblings;
    }
  }]);

  return Bullet;
}();


;// CONCATENATED MODULE: ./src/js/editing/Typing.js
function Typing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Typing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Typing_createClass(Constructor, protoProps, staticProps) { if (protoProps) Typing_defineProperties(Constructor.prototype, protoProps); if (staticProps) Typing_defineProperties(Constructor, staticProps); return Constructor; }





/**
 * @class editing.Typing
 *
 * Typing
 *
 */

var Typing = /*#__PURE__*/function () {
  function Typing(context) {
    Typing_classCallCheck(this, Typing);

    // a Bullet instance to toggle lists off
    this.bullet = new Bullet();
    this.options = context.options;
  }
  /**
   * insert tab
   *
   * @param {WrappedRange} rng
   * @param {Number} tabsize
   */


  Typing_createClass(Typing, [{
    key: "insertTab",
    value: function insertTab(rng, tabsize) {
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
      rng = rng.deleteContents();
      rng.insertNode(tab, true);
      rng = range.create(tab, tabsize);
      rng.select();
    }
    /**
     * insert paragraph
     *
     * @param {jQuery} $editable
     * @param {WrappedRange} rng Can be used in unit tests to "mock" the range
     *
     * blockquoteBreakingLevel
     *   0 - No break, the new paragraph remains inside the quote
     *   1 - Break the first blockquote in the ancestors list
     *   2 - Break all blockquotes, so that the new paragraph is not quoted (this is the default)
     */

  }, {
    key: "insertParagraph",
    value: function insertParagraph(editable, rng) {
      rng = rng || range.create(editable); // deleteContents on range.

      rng = rng.deleteContents(); // Wrap range if it needs to be wrapped by paragraph

      rng = rng.wrapBodyInlineWithPara(); // finding paragraph

      var splitRoot = dom.ancestor(rng.sc, dom.isPara);
      var nextPara; // on paragraph: split paragraph

      if (splitRoot) {
        // if it is an empty line with li
        if (dom.isLi(splitRoot) && (dom.isEmpty(splitRoot) || dom.deepestChildIsEmpty(splitRoot))) {
          // toggle UL/OL and escape
          this.bullet.toggleList(splitRoot.parentNode.nodeName);
          return;
        } else {
          var blockquote = null;

          if (this.options.blockquoteBreakingLevel === 1) {
            blockquote = dom.ancestor(splitRoot, dom.isBlockquote);
          } else if (this.options.blockquoteBreakingLevel === 2) {
            blockquote = dom.lastAncestor(splitRoot, dom.isBlockquote);
          }

          if (blockquote) {
            // We're inside a blockquote and options ask us to break it
            nextPara = external_jQuery_default()(dom.emptyPara)[0]; // If the split is right before a <br>, remove it so that there's no "empty line"
            // after the split in the new blockquote created

            if (dom.isRightEdgePoint(rng.getStartPoint()) && dom.isBR(rng.sc.nextSibling)) {
              external_jQuery_default()(rng.sc.nextSibling).remove();
            }

            var split = dom.splitTree(blockquote, rng.getStartPoint(), {
              isDiscardEmptySplits: true
            });

            if (split) {
              split.parentNode.insertBefore(nextPara, split);
            } else {
              dom.insertAfter(nextPara, blockquote); // There's no split if we were at the end of the blockquote
            }
          } else {
            nextPara = dom.splitTree(splitRoot, rng.getStartPoint()); // not a blockquote, just insert the paragraph

            var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
            emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
            external_jQuery_default().each(emptyAnchors, function (idx, anchor) {
              dom.remove(anchor);
            }); // replace empty heading, pre or custom-made styleTag with P tag

            if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
              nextPara = dom.replace(nextPara, 'p');
            }
          }
        } // no paragraph: insert empty paragraph

      } else {
        var next = rng.sc.childNodes[rng.so];
        nextPara = external_jQuery_default()(dom.emptyPara)[0];

        if (next) {
          rng.sc.insertBefore(nextPara, next);
        } else {
          rng.sc.appendChild(nextPara);
        }
      }

      range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
    }
  }]);

  return Typing;
}();


;// CONCATENATED MODULE: ./src/js/editing/Table.js
function Table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Table_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Table_createClass(Constructor, protoProps, staticProps) { if (protoProps) Table_defineProperties(Constructor.prototype, protoProps); if (staticProps) Table_defineProperties(Constructor, staticProps); return Constructor; }





/**
 * @class Create a virtual table to create what actions to do in change.
 * @param {object} startPoint Cell selected to apply change.
 * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
 * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
 * @param {object} domTable Dom element of table to make changes.
 */

var TableResultAction = function TableResultAction(startPoint, where, action, domTable) {
  var _startPoint = {
    'colPos': 0,
    'rowPos': 0
  };
  var _virtualTable = [];
  var _actionCellList = []; /// ///////////////////////////////////////////
  // Private functions
  /// ///////////////////////////////////////////

  /**
   * Set the startPoint of action.
   */

  function setStartPoint() {
    if (!startPoint || !startPoint.tagName || startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th') {
      // Impossible to identify start Cell point
      return;
    }

    _startPoint.colPos = startPoint.cellIndex;

    if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
      // Impossible to identify start Row point
      return;
    }

    _startPoint.rowPos = startPoint.parentElement.rowIndex;
  }
  /**
   * Define virtual table position info object.
   *
   * @param {int} rowIndex Index position in line of virtual table.
   * @param {int} cellIndex Index position in column of virtual table.
   * @param {object} baseRow Row affected by this position.
   * @param {object} baseCell Cell affected by this position.
   * @param {bool} isSpan Inform if it is an span cell/row.
   */


  function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
    var objPosition = {
      'baseRow': baseRow,
      'baseCell': baseCell,
      'isRowSpan': isRowSpan,
      'isColSpan': isColSpan,
      'isVirtual': isVirtualCell
    };

    if (!_virtualTable[rowIndex]) {
      _virtualTable[rowIndex] = [];
    }

    _virtualTable[rowIndex][cellIndex] = objPosition;
  }
  /**
   * Create action cell object.
   *
   * @param {object} virtualTableCellObj Object of specific position on virtual table.
   * @param {enum} resultAction Action to be applied in that item.
   */


  function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
    return {
      'baseCell': virtualTableCellObj.baseCell,
      'action': resultAction,
      'virtualTable': {
        'rowIndex': virtualRowPosition,
        'cellIndex': virtualColPosition
      }
    };
  }
  /**
   * Recover free index of row to append Cell.
   *
   * @param {int} rowIndex Index of row to find free space.
   * @param {int} cellIndex Index of cell to find free space in table.
   */


  function recoverCellIndex(rowIndex, cellIndex) {
    if (!_virtualTable[rowIndex]) {
      return cellIndex;
    }

    if (!_virtualTable[rowIndex][cellIndex]) {
      return cellIndex;
    }

    var newCellIndex = cellIndex;

    while (_virtualTable[rowIndex][newCellIndex]) {
      newCellIndex++;

      if (!_virtualTable[rowIndex][newCellIndex]) {
        return newCellIndex;
      }
    }
  }
  /**
   * Recover info about row and cell and add information to virtual table.
   *
   * @param {object} row Row to recover information.
   * @param {object} cell Cell to recover information.
   */


  function addCellInfoToVirtual(row, cell) {
    var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
    var cellHasColspan = cell.colSpan > 1;
    var cellHasRowspan = cell.rowSpan > 1;
    var isThisSelectedCell = row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos;
    setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false); // Add span rows to virtual Table.

    var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;

    if (rowspanNumber > 1) {
      for (var rp = 1; rp < rowspanNumber; rp++) {
        var rowspanIndex = row.rowIndex + rp;
        adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
        setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
      }
    } // Add span cols to virtual table.


    var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;

    if (colspanNumber > 1) {
      for (var cp = 1; cp < colspanNumber; cp++) {
        var cellspanIndex = recoverCellIndex(row.rowIndex, cellIndex + cp);
        adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
        setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
      }
    }
  }
  /**
   * Process validation and adjust of start point if needed
   *
   * @param {int} rowIndex
   * @param {int} cellIndex
   * @param {object} cell
   * @param {bool} isSelectedCell
   */


  function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
    if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
      _startPoint.colPos++;
    }
  }
  /**
   * Create virtual table of cells with all cells, including span cells.
   */


  function createVirtualTable() {
    var rows = domTable.rows;

    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      var cells = rows[rowIndex].cells;

      for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
        addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
      }
    }
  }
  /**
   * Get action to be applied on the cell.
   *
   * @param {object} cell virtual table cell to apply action
   */


  function getDeleteResultActionToCell(cell) {
    switch (where) {
      case TableResultAction.where.Column:
        if (cell.isColSpan) {
          return TableResultAction.resultAction.SubtractSpanCount;
        }

        break;

      case TableResultAction.where.Row:
        if (!cell.isVirtual && cell.isRowSpan) {
          return TableResultAction.resultAction.AddCell;
        } else if (cell.isRowSpan) {
          return TableResultAction.resultAction.SubtractSpanCount;
        }

        break;
    }

    return TableResultAction.resultAction.RemoveCell;
  }
  /**
   * Get action to be applied on the cell.
   *
   * @param {object} cell virtual table cell to apply action
   */


  function getAddResultActionToCell(cell) {
    switch (where) {
      case TableResultAction.where.Column:
        if (cell.isColSpan) {
          return TableResultAction.resultAction.SumSpanCount;
        } else if (cell.isRowSpan && cell.isVirtual) {
          return TableResultAction.resultAction.Ignore;
        }

        break;

      case TableResultAction.where.Row:
        if (cell.isRowSpan) {
          return TableResultAction.resultAction.SumSpanCount;
        } else if (cell.isColSpan && cell.isVirtual) {
          return TableResultAction.resultAction.Ignore;
        }

        break;
    }

    return TableResultAction.resultAction.AddCell;
  }

  function init() {
    setStartPoint();
    createVirtualTable();
  } /// ///////////////////////////////////////////
  // Public functions
  /// ///////////////////////////////////////////

  /**
   * Recover array os what to do in table.
   */


  this.getActionList = function () {
    var fixedRow = where === TableResultAction.where.Row ? _startPoint.rowPos : -1;
    var fixedCol = where === TableResultAction.where.Column ? _startPoint.colPos : -1;
    var actualPosition = 0;
    var canContinue = true;

    while (canContinue) {
      var rowPosition = fixedRow >= 0 ? fixedRow : actualPosition;
      var colPosition = fixedCol >= 0 ? fixedCol : actualPosition;
      var row = _virtualTable[rowPosition];

      if (!row) {
        canContinue = false;
        return _actionCellList;
      }

      var cell = row[colPosition];

      if (!cell) {
        canContinue = false;
        return _actionCellList;
      } // Define action to be applied in this cell


      var resultAction = TableResultAction.resultAction.Ignore;

      switch (action) {
        case TableResultAction.requestAction.Add:
          resultAction = getAddResultActionToCell(cell);
          break;

        case TableResultAction.requestAction.Delete:
          resultAction = getDeleteResultActionToCell(cell);
          break;
      }

      _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));

      actualPosition++;
    }

    return _actionCellList;
  };

  init();
};
/**
*
* Where action occours enum.
*/


TableResultAction.where = {
  'Row': 0,
  'Column': 1
};
/**
*
* Requested action to apply enum.
*/

TableResultAction.requestAction = {
  'Add': 0,
  'Delete': 1
};
/**
*
* Result action to be executed enum.
*/

TableResultAction.resultAction = {
  'Ignore': 0,
  'SubtractSpanCount': 1,
  'RemoveCell': 2,
  'AddCell': 3,
  'SumSpanCount': 4
};
/**
 *
 * @class editing.Table
 *
 * Table
 *
 */

var Table = /*#__PURE__*/function () {
  function Table() {
    Table_classCallCheck(this, Table);
  }

  Table_createClass(Table, [{
    key: "tab",
    value:
    /**
     * handle tab key
     *
     * @param {WrappedRange} rng
     * @param {Boolean} isShift
     */
    function tab(rng, isShift) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var table = dom.ancestor(cell, dom.isTable);
      var cells = dom.listDescendant(table, dom.isCell);
      var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);

      if (nextCell) {
        range.create(nextCell, 0).select();
      }
    }
    /**
     * Add a new row
     *
     * @param {WrappedRange} rng
     * @param {String} position (top/bottom)
     * @return {Node}
     */

  }, {
    key: "addRow",
    value: function addRow(rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var currentTr = external_jQuery_default()(cell).closest('tr');
      var trAttributes = this.recoverAttributes(currentTr);
      var html = external_jQuery_default()('<tr' + trAttributes + '></tr>');
      var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, external_jQuery_default()(currentTr).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var idCell = 0; idCell < actions.length; idCell++) {
        var currentCell = actions[idCell];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);

        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
            break;

          case TableResultAction.resultAction.SumSpanCount:
            {
              if (position === 'top') {
                var baseCellTr = currentCell.baseCell.parent;
                var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;

                if (isTopFromRowSpan) {
                  var newTd = external_jQuery_default()('<div></div>').append(external_jQuery_default()('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                  html.append(newTd);
                  break;
                }
              }

              var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
              rowspanNumber++;
              currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
            }
            break;
        }
      }

      if (position === 'top') {
        currentTr.before(html);
      } else {
        var cellHasRowspan = cell.rowSpan > 1;

        if (cellHasRowspan) {
          var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
          external_jQuery_default()(external_jQuery_default()(currentTr).parent().find('tr')[lastTrIndex]).after(external_jQuery_default()(html));
          return;
        }

        currentTr.after(html);
      }
    }
    /**
     * Add a new col
     *
     * @param {WrappedRange} rng
     * @param {String} position (left/right)
     * @return {Node}
     */

  }, {
    key: "addCol",
    value: function addCol(rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = external_jQuery_default()(cell).closest('tr');
      var rowsGroup = external_jQuery_default()(row).siblings();
      rowsGroup.push(row);
      var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, external_jQuery_default()(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        var currentCell = actions[actionIndex];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);

        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            if (position === 'right') {
              external_jQuery_default()(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
            } else {
              external_jQuery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }

            break;

          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'right') {
              var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
              colspanNumber++;
              currentCell.baseCell.setAttribute('colSpan', colspanNumber);
            } else {
              external_jQuery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }

            break;
        }
      }
    }
    /*
    * Copy attributes from element.
    *
    * @param {object} Element to recover attributes.
    * @return {string} Copied string elements.
    */

  }, {
    key: "recoverAttributes",
    value: function recoverAttributes(el) {
      var resultStr = '';

      if (!el) {
        return resultStr;
      }

      var attrList = el.attributes || [];

      for (var i = 0; i < attrList.length; i++) {
        if (attrList[i].name.toLowerCase() === 'id') {
          continue;
        }

        if (attrList[i].specified) {
          resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
        }
      }

      return resultStr;
    }
    /**
     * Delete current row
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */

  }, {
    key: "deleteRow",
    value: function deleteRow(rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = external_jQuery_default()(cell).closest('tr');
      var cellPos = row.children('td, th').index(external_jQuery_default()(cell));
      var rowPos = row[0].rowIndex;
      var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, external_jQuery_default()(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }

        var baseCell = actions[actionIndex].baseCell;
        var virtualPosition = actions[actionIndex].virtualTable;
        var hasRowspan = baseCell.rowSpan && baseCell.rowSpan > 1;
        var rowspanNumber = hasRowspan ? parseInt(baseCell.rowSpan, 10) : 0;

        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;

          case TableResultAction.resultAction.AddCell:
            {
              var nextRow = row.next('tr')[0];

              if (!nextRow) {
                continue;
              }

              var cloneRow = row[0].cells[cellPos];

              if (hasRowspan) {
                if (rowspanNumber > 2) {
                  rowspanNumber--;
                  nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                  nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                  nextRow.cells[cellPos].innerHTML = '';
                } else if (rowspanNumber === 2) {
                  nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                  nextRow.cells[cellPos].removeAttribute('rowSpan');
                  nextRow.cells[cellPos].innerHTML = '';
                }
              }
            }
            continue;

          case TableResultAction.resultAction.SubtractSpanCount:
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                baseCell.setAttribute('rowSpan', rowspanNumber);

                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                  baseCell.innerHTML = '';
                }
              } else if (rowspanNumber === 2) {
                baseCell.removeAttribute('rowSpan');

                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                  baseCell.innerHTML = '';
                }
              }
            }

            continue;

          case TableResultAction.resultAction.RemoveCell:
            // Do not need remove cell because row will be deleted.
            continue;
        }
      }

      row.remove();
    }
    /**
     * Delete current col
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */

  }, {
    key: "deleteCol",
    value: function deleteCol(rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = external_jQuery_default()(cell).closest('tr');
      var cellPos = row.children('td, th').index(external_jQuery_default()(cell));
      var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, external_jQuery_default()(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }

        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;

          case TableResultAction.resultAction.SubtractSpanCount:
            {
              var baseCell = actions[actionIndex].baseCell;
              var hasColspan = baseCell.colSpan && baseCell.colSpan > 1;

              if (hasColspan) {
                var colspanNumber = baseCell.colSpan ? parseInt(baseCell.colSpan, 10) : 0;

                if (colspanNumber > 2) {
                  colspanNumber--;
                  baseCell.setAttribute('colSpan', colspanNumber);

                  if (baseCell.cellIndex === cellPos) {
                    baseCell.innerHTML = '';
                  }
                } else if (colspanNumber === 2) {
                  baseCell.removeAttribute('colSpan');

                  if (baseCell.cellIndex === cellPos) {
                    baseCell.innerHTML = '';
                  }
                }
              }
            }
            continue;

          case TableResultAction.resultAction.RemoveCell:
            dom.remove(actions[actionIndex].baseCell, true);
            continue;
        }
      }
    }
    /**
     * create empty table element
     *
     * @param {Number} rowCount
     * @param {Number} colCount
     * @return {Node}
     */

  }, {
    key: "createTable",
    value: function createTable(colCount, rowCount, options) {
      var tds = [];
      var tdHTML;

      for (var idxCol = 0; idxCol < colCount; idxCol++) {
        tds.push('<td>' + dom.blank + '</td>');
      }

      tdHTML = tds.join('');
      var trs = [];
      var trHTML;

      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
        trs.push('<tr>' + tdHTML + '</tr>');
      }

      trHTML = trs.join('');
      var $table = external_jQuery_default()('<table>' + trHTML + '</table>');

      if (options && options.tableClassName) {
        $table.addClass(options.tableClassName);
      }

      return $table[0];
    }
    /**
     * Delete current table
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */

  }, {
    key: "deleteTable",
    value: function deleteTable(rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      external_jQuery_default()(cell).closest('table').remove();
    }
  }]);

  return Table;
}();


;// CONCATENATED MODULE: ./src/js/module/Editor.js
function Editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) Editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) Editor_defineProperties(Constructor, staticProps); return Constructor; }














var KEY_BOGUS = 'bogus';
/**
 * @class Editor
 */

var Editor = /*#__PURE__*/function () {
  function Editor(context) {
    var _this = this;

    Editor_classCallCheck(this, Editor);

    this.context = context;
    this.$note = context.layoutInfo.note;
    this.$editor = context.layoutInfo.editor;
    this.$editable = context.layoutInfo.editable;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.editable = this.$editable[0];
    this.lastRange = null;
    this.snapshot = null;
    this.style = new Style();
    this.table = new Table();
    this.typing = new Typing(context);
    this.bullet = new Bullet();
    this.history = new History(context);
    this.context.memo('help.escape', this.lang.help.escape);
    this.context.memo('help.undo', this.lang.help.undo);
    this.context.memo('help.redo', this.lang.help.redo);
    this.context.memo('help.tab', this.lang.help.tab);
    this.context.memo('help.untab', this.lang.help.untab);
    this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
    this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
    this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
    this.context.memo('help.indent', this.lang.help.indent);
    this.context.memo('help.outdent', this.lang.help.outdent);
    this.context.memo('help.formatPara', this.lang.help.formatPara);
    this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
    this.context.memo('help.fontName', this.lang.help.fontName); // native commands(with execCommand), generate function for execCommand

    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'formatBlock', 'removeFormat', 'backColor'];

    for (var idx = 0, len = commands.length; idx < len; idx++) {
      this[commands[idx]] = function (sCmd) {
        return function (value) {
          _this.beforeCommand();

          document.execCommand(sCmd, false, value);

          _this.afterCommand(true);
        };
      }(commands[idx]);

      this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
    }

    this.fontName = this.wrapCommand(function (value) {
      return _this.fontStyling('font-family', env.validFontName(value));
    });
    this.fontSize = this.wrapCommand(function (value) {
      var unit = _this.currentStyle()['font-size-unit'];

      return _this.fontStyling('font-size', value + unit);
    });
    this.fontSizeUnit = this.wrapCommand(function (value) {
      var size = _this.currentStyle()['font-size'];

      return _this.fontStyling('font-size', size + value);
    });

    for (var _idx = 1; _idx <= 6; _idx++) {
      this['formatH' + _idx] = function (idx) {
        return function () {
          _this.formatBlock('H' + idx);
        };
      }(_idx);

      this.context.memo('help.formatH' + _idx, this.lang.help['formatH' + _idx]);
    }

    this.insertParagraph = this.wrapCommand(function () {
      _this.typing.insertParagraph(_this.editable);
    });
    this.insertOrderedList = this.wrapCommand(function () {
      _this.bullet.insertOrderedList(_this.editable);
    });
    this.insertUnorderedList = this.wrapCommand(function () {
      _this.bullet.insertUnorderedList(_this.editable);
    });
    this.indent = this.wrapCommand(function () {
      _this.bullet.indent(_this.editable);
    });
    this.outdent = this.wrapCommand(function () {
      _this.bullet.outdent(_this.editable);
    });
    /**
     * insertNode
     * insert node
     * @param {Node} node
     */

    this.insertNode = this.wrapCommand(function (node) {
      if (_this.isLimited(external_jQuery_default()(node).text().length)) {
        return;
      }

      var rng = _this.getLastRange();

      rng.insertNode(node);

      _this.setLastRange(range.createFromNodeAfter(node).select());
    });
    /**
     * insert text
     * @param {String} text
     */

    this.insertText = this.wrapCommand(function (text) {
      if (_this.isLimited(text.length)) {
        return;
      }

      var rng = _this.getLastRange();

      var textNode = rng.insertNode(dom.createText(text));

      _this.setLastRange(range.create(textNode, dom.nodeLength(textNode)).select());
    });
    /**
     * paste HTML
     * @param {String} markup
     */

    this.pasteHTML = this.wrapCommand(function (markup) {
      if (_this.isLimited(markup.length)) {
        return;
      }

      markup = _this.context.invoke('codeview.purify', markup);

      var contents = _this.getLastRange().pasteHTML(markup);

      _this.setLastRange(range.createFromNodeAfter(lists.last(contents)).select());
    });
    /**
     * formatBlock
     *
     * @param {String} tagName
     */

    this.formatBlock = this.wrapCommand(function (tagName, $target) {
      var onApplyCustomStyle = _this.options.callbacks.onApplyCustomStyle;

      if (onApplyCustomStyle) {
        onApplyCustomStyle.call(_this, $target, _this.context, _this.onFormatBlock);
      } else {
        _this.onFormatBlock(tagName, $target);
      }
    });
    /**
     * insert horizontal rule
     */

    this.insertHorizontalRule = this.wrapCommand(function () {
      var hrNode = _this.getLastRange().insertNode(dom.create('HR'));

      if (hrNode.nextSibling) {
        _this.setLastRange(range.create(hrNode.nextSibling, 0).normalize().select());
      }
    });
    /**
     * lineHeight
     * @param {String} value
     */

    this.lineHeight = this.wrapCommand(function (value) {
      _this.style.stylePara(_this.getLastRange(), {
        lineHeight: value
      });
    });
    /**
     * create link (command)
     *
     * @param {Object} linkInfo
     */

    this.createLink = this.wrapCommand(function (linkInfo) {
      var linkUrl = linkInfo.url;
      var linkText = linkInfo.text;
      var isNewWindow = linkInfo.isNewWindow;
      var checkProtocol = linkInfo.checkProtocol;

      var rng = linkInfo.range || _this.getLastRange();

      var additionalTextLength = linkText.length - rng.toString().length;

      if (additionalTextLength > 0 && _this.isLimited(additionalTextLength)) {
        return;
      }

      var isTextChanged = rng.toString() !== linkText; // handle spaced urls from input

      if (typeof linkUrl === 'string') {
        linkUrl = linkUrl.trim();
      }

      if (_this.options.onCreateLink) {
        linkUrl = _this.options.onCreateLink(linkUrl);
      } else if (checkProtocol) {
        // if url doesn't have any protocol and not even a relative or a label, use http:// as default
        linkUrl = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(linkUrl) ? linkUrl : _this.options.defaultProtocol + linkUrl;
      }

      var anchors = [];

      if (isTextChanged) {
        rng = rng.deleteContents();
        var anchor = rng.insertNode(external_jQuery_default()('<A>' + linkText + '</A>')[0]);
        anchors.push(anchor);
      } else {
        anchors = _this.style.styleNodes(rng, {
          nodeName: 'A',
          expandClosestSibling: true,
          onlyPartialContains: true
        });
      }

      external_jQuery_default().each(anchors, function (idx, anchor) {
        external_jQuery_default()(anchor).attr('href', linkUrl);

        if (isNewWindow) {
          external_jQuery_default()(anchor).attr('target', '_blank');
        } else {
          external_jQuery_default()(anchor).removeAttr('target');
        }
      });

      _this.setLastRange(_this.createRangeFromList(anchors).select());
    });
    /**
     * setting color
     *
     * @param {Object} sObjColor  color code
     * @param {String} sObjColor.foreColor foreground color
     * @param {String} sObjColor.backColor background color
     */

    this.color = this.wrapCommand(function (colorInfo) {
      var foreColor = colorInfo.foreColor;
      var backColor = colorInfo.backColor;

      if (foreColor) {
        document.execCommand('foreColor', false, foreColor);
      }

      if (backColor) {
        document.execCommand('backColor', false, backColor);
      }
    });
    /**
     * Set foreground color
     *
     * @param {String} colorCode foreground color code
     */

    this.foreColor = this.wrapCommand(function (colorInfo) {
      document.execCommand('foreColor', false, colorInfo);
    });
    /**
     * insert Table
     *
     * @param {String} dimension of table (ex : "5x5")
     */

    this.insertTable = this.wrapCommand(function (dim) {
      var dimension = dim.split('x');

      var rng = _this.getLastRange().deleteContents();

      rng.insertNode(_this.table.createTable(dimension[0], dimension[1], _this.options));
    });
    /**
     * remove media object and Figure Elements if media object is img with Figure.
     */

    this.removeMedia = this.wrapCommand(function () {
      var $target = external_jQuery_default()(_this.restoreTarget()).parent();

      if ($target.closest('figure').length) {
        $target.closest('figure').remove();
      } else {
        $target = external_jQuery_default()(_this.restoreTarget()).detach();
      }

      _this.context.triggerEvent('media.delete', $target, _this.$editable);
    });
    /**
     * float me
     *
     * @param {String} value
     */

    this.floatMe = this.wrapCommand(function (value) {
      var $target = external_jQuery_default()(_this.restoreTarget());
      $target.toggleClass('note-float-left', value === 'left');
      $target.toggleClass('note-float-right', value === 'right');
      $target.css('float', value === 'none' ? '' : value);
    });
    /**
     * resize overlay element
     * @param {String} value
     */

    this.resize = this.wrapCommand(function (value) {
      var $target = external_jQuery_default()(_this.restoreTarget());
      value = parseFloat(value);

      if (value === 0) {
        $target.css('width', '');
      } else {
        $target.css({
          width: value * 100 + '%',
          height: ''
        });
      }
    });
  }

  Editor_createClass(Editor, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      // bind custom events
      this.$editable.on('keydown', function (event) {
        if (event.keyCode === key.code.ENTER) {
          _this2.context.triggerEvent('enter', event);
        }

        _this2.context.triggerEvent('keydown', event); // keep a snapshot to limit text on input event


        _this2.snapshot = _this2.history.makeSnapshot();
        _this2.hasKeyShortCut = false;

        if (!event.isDefaultPrevented()) {
          if (_this2.options.shortcuts) {
            _this2.hasKeyShortCut = _this2.handleKeyMap(event);
          } else {
            _this2.preventDefaultEditableShortCuts(event);
          }
        }

        if (_this2.isLimited(1, event)) {
          var lastRange = _this2.getLastRange();

          if (lastRange.eo - lastRange.so === 0) {
            return false;
          }
        }

        _this2.setLastRange(); // record undo in the key event except keyMap.


        if (_this2.options.recordEveryKeystroke) {
          if (_this2.hasKeyShortCut === false) {
            _this2.history.recordUndo();
          }
        }
      }).on('keyup', function (event) {
        _this2.setLastRange();

        _this2.context.triggerEvent('keyup', event);
      }).on('focus', function (event) {
        _this2.setLastRange();

        _this2.context.triggerEvent('focus', event);
      }).on('blur', function (event) {
        _this2.context.triggerEvent('blur', event);
      }).on('mousedown', function (event) {
        _this2.context.triggerEvent('mousedown', event);
      }).on('mouseup', function (event) {
        _this2.setLastRange();

        _this2.history.recordUndo();

        _this2.context.triggerEvent('mouseup', event);
      }).on('scroll', function (event) {
        _this2.context.triggerEvent('scroll', event);
      }).on('paste', function (event) {
        _this2.setLastRange();

        _this2.context.triggerEvent('paste', event);
      }).on('input', function () {
        // To limit composition characters (e.g. Korean)
        if (_this2.isLimited(0) && _this2.snapshot) {
          _this2.history.applySnapshot(_this2.snapshot);
        }
      });
      this.$editable.attr('spellcheck', this.options.spellCheck);
      this.$editable.attr('autocorrect', this.options.spellCheck);

      if (this.options.disableGrammar) {
        this.$editable.attr('data-gramm', false);
      } // init content before set event


      this.$editable.html(dom.html(this.$note) || dom.emptyPara);
      this.$editable.on(env.inputEventName, func.debounce(function () {
        _this2.context.triggerEvent('change', _this2.$editable.html(), _this2.$editable);
      }, 10));
      this.$editable.on('focusin', function (event) {
        _this2.context.triggerEvent('focusin', event);
      }).on('focusout', function (event) {
        _this2.context.triggerEvent('focusout', event);
      });

      if (this.options.airMode) {
        if (this.options.overrideContextMenu) {
          this.$editor.on('contextmenu', function (event) {
            _this2.context.triggerEvent('contextmenu', event);

            return false;
          });
        }
      } else {
        if (this.options.width) {
          this.$editor.outerWidth(this.options.width);
        }

        if (this.options.height) {
          this.$editable.outerHeight(this.options.height);
        }

        if (this.options.maxHeight) {
          this.$editable.css('max-height', this.options.maxHeight);
        }

        if (this.options.minHeight) {
          this.$editable.css('min-height', this.options.minHeight);
        }
      }

      this.history.recordUndo();
      this.setLastRange();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$editable.off();
    }
  }, {
    key: "handleKeyMap",
    value: function handleKeyMap(event) {
      var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
      var keys = [];

      if (event.metaKey) {
        keys.push('CMD');
      }

      if (event.ctrlKey && !event.altKey) {
        keys.push('CTRL');
      }

      if (event.shiftKey) {
        keys.push('SHIFT');
      }

      var keyName = key.nameFromCode[event.keyCode];

      if (keyName) {
        keys.push(keyName);
      }

      var eventName = keyMap[keys.join('+')];

      if (keyName === 'TAB' && !this.options.tabDisable) {
        this.afterCommand();
      } else if (eventName) {
        if (this.context.invoke(eventName) !== false) {
          event.preventDefault(); // if keyMap action was invoked

          return true;
        }
      } else if (key.isEdit(event.keyCode)) {
        this.afterCommand();
      }

      return false;
    }
  }, {
    key: "preventDefaultEditableShortCuts",
    value: function preventDefaultEditableShortCuts(event) {
      // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
      if ((event.ctrlKey || event.metaKey) && lists.contains([66, 73, 85], event.keyCode)) {
        event.preventDefault();
      }
    }
  }, {
    key: "isLimited",
    value: function isLimited(pad, event) {
      pad = pad || 0;

      if (typeof event !== 'undefined') {
        if (key.isMove(event.keyCode) || key.isNavigation(event.keyCode) || event.ctrlKey || event.metaKey || lists.contains([key.code.BACKSPACE, key.code.DELETE], event.keyCode)) {
          return false;
        }
      }

      if (this.options.maxTextLength > 0) {
        if (this.$editable.text().length + pad > this.options.maxTextLength) {
          return true;
        }
      }

      return false;
    }
    /**
     * create range
     * @return {WrappedRange}
     */

  }, {
    key: "createRange",
    value: function createRange() {
      this.focus();
      this.setLastRange();
      return this.getLastRange();
    }
    /**
     * create a new range from the list of elements
     *
     * @param {list} dom element list
     * @return {WrappedRange}
     */

  }, {
    key: "createRangeFromList",
    value: function createRangeFromList(lst) {
      var startRange = range.createFromNodeBefore(lists.head(lst));
      var startPoint = startRange.getStartPoint();
      var endRange = range.createFromNodeAfter(lists.last(lst));
      var endPoint = endRange.getEndPoint();
      return range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * set the last range
     *
     * if given rng is exist, set rng as the last range
     * or create a new range at the end of the document
     *
     * @param {WrappedRange} rng
     */

  }, {
    key: "setLastRange",
    value: function setLastRange(rng) {
      if (rng) {
        this.lastRange = rng;
      } else {
        this.lastRange = range.create(this.editable);

        if (external_jQuery_default()(this.lastRange.sc).closest('.note-editable').length === 0) {
          this.lastRange = range.createFromBodyElement(this.editable);
        }
      }
    }
    /**
     * get the last range
     *
     * if there is a saved last range, return it
     * or create a new range and return it
     *
     * @return {WrappedRange}
     */

  }, {
    key: "getLastRange",
    value: function getLastRange() {
      if (!this.lastRange) {
        this.setLastRange();
      }

      return this.lastRange;
    }
    /**
     * saveRange
     *
     * save current range
     *
     * @param {Boolean} [thenCollapse=false]
     */

  }, {
    key: "saveRange",
    value: function saveRange(thenCollapse) {
      if (thenCollapse) {
        this.getLastRange().collapse().select();
      }
    }
    /**
     * restoreRange
     *
     * restore lately range
     */

  }, {
    key: "restoreRange",
    value: function restoreRange() {
      if (this.lastRange) {
        this.lastRange.select();
        this.focus();
      }
    }
  }, {
    key: "saveTarget",
    value: function saveTarget(node) {
      this.$editable.data('target', node);
    }
  }, {
    key: "clearTarget",
    value: function clearTarget() {
      this.$editable.removeData('target');
    }
  }, {
    key: "restoreTarget",
    value: function restoreTarget() {
      return this.$editable.data('target');
    }
    /**
     * currentStyle
     *
     * current style
     * @return {Object|Boolean} unfocus
     */

  }, {
    key: "currentStyle",
    value: function currentStyle() {
      var rng = range.create();

      if (rng) {
        rng = rng.normalize();
      }

      return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
    }
    /**
     * style from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */

  }, {
    key: "styleFromNode",
    value: function styleFromNode($node) {
      return this.style.fromNode($node);
    }
    /**
     * undo
     */

  }, {
    key: "undo",
    value: function undo() {
      this.context.triggerEvent('before.command', this.$editable.html());
      this.history.undo();
      this.context.triggerEvent('change', this.$editable.html(), this.$editable);
    }
    /*
    * commit
    */

  }, {
    key: "commit",
    value: function commit() {
      this.context.triggerEvent('before.command', this.$editable.html());
      this.history.commit();
      this.context.triggerEvent('change', this.$editable.html(), this.$editable);
    }
    /**
     * redo
     */

  }, {
    key: "redo",
    value: function redo() {
      this.context.triggerEvent('before.command', this.$editable.html());
      this.history.redo();
      this.context.triggerEvent('change', this.$editable.html(), this.$editable);
    }
    /**
     * before command
     */

  }, {
    key: "beforeCommand",
    value: function beforeCommand() {
      this.context.triggerEvent('before.command', this.$editable.html()); // Set styleWithCSS before run a command

      document.execCommand('styleWithCSS', false, this.options.styleWithCSS); // keep focus on editable before command execution

      this.focus();
    }
    /**
     * after command
     * @param {Boolean} isPreventTrigger
     */

  }, {
    key: "afterCommand",
    value: function afterCommand(isPreventTrigger) {
      this.normalizeContent();
      this.history.recordUndo();

      if (!isPreventTrigger) {
        this.context.triggerEvent('change', this.$editable.html(), this.$editable);
      }
    }
    /**
     * handle tab key
     */

  }, {
    key: "tab",
    value: function tab() {
      var rng = this.getLastRange();

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.table.tab(rng);
      } else {
        if (this.options.tabSize === 0) {
          return false;
        }

        if (!this.isLimited(this.options.tabSize)) {
          this.beforeCommand();
          this.typing.insertTab(rng, this.options.tabSize);
          this.afterCommand();
        }
      }
    }
    /**
     * handle shift+tab key
     */

  }, {
    key: "untab",
    value: function untab() {
      var rng = this.getLastRange();

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.table.tab(rng, true);
      } else {
        if (this.options.tabSize === 0) {
          return false;
        }
      }
    }
    /**
     * run given function between beforeCommand and afterCommand
     */

  }, {
    key: "wrapCommand",
    value: function wrapCommand(fn) {
      return function () {
        this.beforeCommand();
        fn.apply(this, arguments);
        this.afterCommand();
      };
    }
    /**
     * insert image
     *
     * @param {String} src
     * @param {String|Function} param
     * @return {Promise}
     */

  }, {
    key: "insertImage",
    value: function insertImage(src, param) {
      var _this3 = this;

      return createImage(src, param).then(function ($image) {
        _this3.beforeCommand();

        if (typeof param === 'function') {
          param($image);
        } else {
          if (typeof param === 'string') {
            $image.attr('data-filename', param);
          }

          $image.css('width', Math.min(_this3.$editable.width(), $image.width()));
        }

        $image.show();

        _this3.getLastRange().insertNode($image[0]);

        _this3.setLastRange(range.createFromNodeAfter($image[0]).select());

        _this3.afterCommand();
      }).fail(function (e) {
        _this3.context.triggerEvent('image.upload.error', e);
      });
    }
    /**
     * insertImages
     * @param {File[]} files
     */

  }, {
    key: "insertImagesAsDataURL",
    value: function insertImagesAsDataURL(files) {
      var _this4 = this;

      external_jQuery_default().each(files, function (idx, file) {
        var filename = file.name;

        if (_this4.options.maximumImageFileSize && _this4.options.maximumImageFileSize < file.size) {
          _this4.context.triggerEvent('image.upload.error', _this4.lang.image.maximumFileSizeError);
        } else {
          readFileAsDataURL(file).then(function (dataURL) {
            return _this4.insertImage(dataURL, filename);
          }).fail(function () {
            _this4.context.triggerEvent('image.upload.error');
          });
        }
      });
    }
    /**
     * insertImagesOrCallback
     * @param {File[]} files
     */

  }, {
    key: "insertImagesOrCallback",
    value: function insertImagesOrCallback(files) {
      var callbacks = this.options.callbacks; // If onImageUpload set,

      if (callbacks.onImageUpload) {
        this.context.triggerEvent('image.upload', files); // else insert Image as dataURL
      } else {
        this.insertImagesAsDataURL(files);
      }
    }
    /**
     * return selected plain text
     * @return {String} text
     */

  }, {
    key: "getSelectedText",
    value: function getSelectedText() {
      var rng = this.getLastRange(); // if range on anchor, expand range with anchor

      if (rng.isOnAnchor()) {
        rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
      }

      return rng.toString();
    }
  }, {
    key: "onFormatBlock",
    value: function onFormatBlock(tagName, $target) {
      // [workaround] for MSIE, IE need `<`
      document.execCommand('FormatBlock', false, env.isMSIE ? '<' + tagName + '>' : tagName); // support custom class

      if ($target && $target.length) {
        // find the exact element has given tagName
        if ($target[0].tagName.toUpperCase() !== tagName.toUpperCase()) {
          $target = $target.find(tagName);
        }

        if ($target && $target.length) {
          var currentRange = this.createRange();
          var $parent = external_jQuery_default()([currentRange.sc, currentRange.ec]).closest(tagName); // remove class added for current block

          $parent.removeClass();
          var className = $target[0].className || '';

          if (className) {
            $parent.addClass(className);
          }
        }
      }
    }
  }, {
    key: "formatPara",
    value: function formatPara() {
      this.formatBlock('P');
    }
  }, {
    key: "fontStyling",
    value: function fontStyling(target, value) {
      var rng = this.getLastRange();

      if (rng !== '') {
        var spans = this.style.styleNodes(rng);
        this.$editor.find('.note-status-output').html('');
        external_jQuery_default()(spans).css(target, value); // [workaround] added styled bogus span for style
        //  - also bogus character needed for cursor position

        if (rng.isCollapsed()) {
          var firstSpan = lists.head(spans);

          if (firstSpan && !dom.nodeLength(firstSpan)) {
            firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
            range.createFromNode(firstSpan.firstChild).select();
            this.setLastRange();
            this.$editable.data(KEY_BOGUS, firstSpan);
          }
        } else {
          this.setLastRange(this.createRangeFromList(spans).select());
        }
      } else {
        var noteStatusOutput = external_jQuery_default().now();
        this.$editor.find('.note-status-output').html('<div id="note-status-output-' + noteStatusOutput + '" class="alert alert-info">' + this.lang.output.noSelection + '</div>');
        setTimeout(function () {
          external_jQuery_default()('#note-status-output-' + noteStatusOutput).remove();
        }, 5000);
      }
    }
    /**
     * unlink
     *
     * @type command
     */

  }, {
    key: "unlink",
    value: function unlink() {
      var rng = this.getLastRange();

      if (rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        rng = range.createFromNode(anchor);
        rng.select();
        this.setLastRange();
        this.beforeCommand();
        document.execCommand('unlink');
        this.afterCommand();
      }
    }
    /**
     * returns link info
     *
     * @return {Object}
     * @return {WrappedRange} return.range
     * @return {String} return.text
     * @return {Boolean} [return.isNewWindow=true]
     * @return {String} [return.url=""]
     */

  }, {
    key: "getLinkInfo",
    value: function getLinkInfo() {
      var rng = this.getLastRange().expand(dom.isAnchor); // Get the first anchor on range(for edit).

      var $anchor = external_jQuery_default()(lists.head(rng.nodes(dom.isAnchor)));
      var linkInfo = {
        range: rng,
        text: rng.toString(),
        url: $anchor.length ? $anchor.attr('href') : ''
      }; // When anchor exists,

      if ($anchor.length) {
        // Set isNewWindow by checking its target.
        linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
      }

      return linkInfo;
    }
  }, {
    key: "addRow",
    value: function addRow(position) {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.addRow(rng, position);
        this.afterCommand();
      }
    }
  }, {
    key: "addCol",
    value: function addCol(position) {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.addCol(rng, position);
        this.afterCommand();
      }
    }
  }, {
    key: "deleteRow",
    value: function deleteRow() {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.deleteRow(rng);
        this.afterCommand();
      }
    }
  }, {
    key: "deleteCol",
    value: function deleteCol() {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.deleteCol(rng);
        this.afterCommand();
      }
    }
  }, {
    key: "deleteTable",
    value: function deleteTable() {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.deleteTable(rng);
        this.afterCommand();
      }
    }
    /**
     * @param {Position} pos
     * @param {jQuery} $target - target element
     * @param {Boolean} [bKeepRatio] - keep ratio
     */

  }, {
    key: "resizeTo",
    value: function resizeTo(pos, $target, bKeepRatio) {
      var imageSize;

      if (bKeepRatio) {
        var newRatio = pos.y / pos.x;
        var ratio = $target.data('ratio');
        imageSize = {
          width: ratio > newRatio ? pos.x : pos.y / ratio,
          height: ratio > newRatio ? pos.x * ratio : pos.y
        };
      } else {
        imageSize = {
          width: pos.x,
          height: pos.y
        };
      }

      $target.css(imageSize);
    }
    /**
     * returns whether editable area has focus or not.
     */

  }, {
    key: "hasFocus",
    value: function hasFocus() {
      return this.$editable.is(':focus');
    }
    /**
     * set focus
     */

  }, {
    key: "focus",
    value: function focus() {
      // [workaround] Screen will move when page is scolled in IE.
      //  - do focus when not focused
      if (!this.hasFocus()) {
        this.$editable.focus();
      }
    }
    /**
     * returns whether contents is empty or not.
     * @return {Boolean}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
    }
    /**
     * Removes all contents and restores the editable instance to an _emptyPara_.
     */

  }, {
    key: "empty",
    value: function empty() {
      this.context.invoke('code', dom.emptyPara);
    }
    /**
     * normalize content
     */

  }, {
    key: "normalizeContent",
    value: function normalizeContent() {
      this.$editable[0].normalize();
    }
  }]);

  return Editor;
}();


;// CONCATENATED MODULE: ./src/js/module/Clipboard.js
function Clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clipboard_defineProperties(Constructor, staticProps); return Constructor; }



var Clipboard = /*#__PURE__*/function () {
  function Clipboard(context) {
    Clipboard_classCallCheck(this, Clipboard);

    this.context = context;
    this.$editable = context.layoutInfo.editable;
  }

  Clipboard_createClass(Clipboard, [{
    key: "initialize",
    value: function initialize() {
      this.$editable.on('paste', this.pasteByEvent.bind(this));
    }
    /**
     * paste by clipboard event
     *
     * @param {Event} event
     */

  }, {
    key: "pasteByEvent",
    value: function pasteByEvent(event) {
      var _this = this;

      var clipboardData = event.originalEvent.clipboardData;

      if (clipboardData && clipboardData.items && clipboardData.items.length) {
        var item = clipboardData.items.length > 1 ? clipboardData.items[1] : lists.head(clipboardData.items);

        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
          // paste img file
          this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
          event.preventDefault();
        } else if (item.kind === 'string') {
          // paste text with maxTextLength check
          if (this.context.invoke('editor.isLimited', clipboardData.getData('Text').length)) {
            event.preventDefault();
          }
        }
      } else if (window.clipboardData) {
        // for IE
        var text = window.clipboardData.getData('text');

        if (this.context.invoke('editor.isLimited', text.length)) {
          event.preventDefault();
        }
      } // Call editor.afterCommand after proceeding default event handler


      setTimeout(function () {
        _this.context.invoke('editor.afterCommand');
      }, 10);
    }
  }]);

  return Clipboard;
}();


;// CONCATENATED MODULE: ./src/js/module/Dropzone.js
function Dropzone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dropzone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Dropzone_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dropzone_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dropzone_defineProperties(Constructor, staticProps); return Constructor; }



var Dropzone = /*#__PURE__*/function () {
  function Dropzone(context) {
    Dropzone_classCallCheck(this, Dropzone);

    this.context = context;
    this.$eventListener = external_jQuery_default()(document);
    this.$editor = context.layoutInfo.editor;
    this.$editable = context.layoutInfo.editable;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.documentEventHandlers = {};
    this.$dropzone = external_jQuery_default()(['<div class="note-dropzone">', '<div class="note-dropzone-message"></div>', '</div>'].join('')).prependTo(this.$editor);
  }
  /**
   * attach Drag and Drop Events
   */


  Dropzone_createClass(Dropzone, [{
    key: "initialize",
    value: function initialize() {
      if (this.options.disableDragAndDrop) {
        // prevent default drop event
        this.documentEventHandlers.onDrop = function (e) {
          e.preventDefault();
        }; // do not consider outside of dropzone


        this.$eventListener = this.$dropzone;
        this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
      } else {
        this.attachDragAndDropEvent();
      }
    }
    /**
     * attach Drag and Drop Events
     */

  }, {
    key: "attachDragAndDropEvent",
    value: function attachDragAndDropEvent() {
      var _this = this;

      var collection = external_jQuery_default()();
      var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');

      this.documentEventHandlers.onDragenter = function (e) {
        var isCodeview = _this.context.invoke('codeview.isActivated');

        var hasEditorSize = _this.$editor.width() > 0 && _this.$editor.height() > 0;

        if (!isCodeview && !collection.length && hasEditorSize) {
          _this.$editor.addClass('dragover');

          _this.$dropzone.width(_this.$editor.width());

          _this.$dropzone.height(_this.$editor.height());

          $dropzoneMessage.text(_this.lang.image.dragImageHere);
        }

        collection = collection.add(e.target);
      };

      this.documentEventHandlers.onDragleave = function (e) {
        collection = collection.not(e.target); // If nodeName is BODY, then just make it over (fix for IE)

        if (!collection.length || e.target.nodeName === 'BODY') {
          collection = external_jQuery_default()();

          _this.$editor.removeClass('dragover');
        }
      };

      this.documentEventHandlers.onDrop = function () {
        collection = external_jQuery_default()();

        _this.$editor.removeClass('dragover');
      }; // show dropzone on dragenter when dragging a object to document
      // -but only if the editor is visible, i.e. has a positive width and height


      this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter).on('dragleave', this.documentEventHandlers.onDragleave).on('drop', this.documentEventHandlers.onDrop); // change dropzone's message on hover.

      this.$dropzone.on('dragenter', function () {
        _this.$dropzone.addClass('hover');

        $dropzoneMessage.text(_this.lang.image.dropImage);
      }).on('dragleave', function () {
        _this.$dropzone.removeClass('hover');

        $dropzoneMessage.text(_this.lang.image.dragImageHere);
      }); // attach dropImage

      this.$dropzone.on('drop', function (event) {
        var dataTransfer = event.originalEvent.dataTransfer; // stop the browser from opening the dropped content

        event.preventDefault();

        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
          _this.$editable.focus();

          _this.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
        } else {
          external_jQuery_default().each(dataTransfer.types, function (idx, type) {
            // skip moz-specific types
            if (type.toLowerCase().indexOf('_moz_') > -1) {
              return;
            }

            var content = dataTransfer.getData(type);

            if (type.toLowerCase().indexOf('text') > -1) {
              _this.context.invoke('editor.pasteHTML', content);
            } else {
              external_jQuery_default()(content).each(function (idx, item) {
                _this.context.invoke('editor.insertNode', item);
              });
            }
          });
        }
      }).on('dragover', false); // prevent default dragover event
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      Object.keys(this.documentEventHandlers).forEach(function (key) {
        _this2.$eventListener.off(key.substr(2).toLowerCase(), _this2.documentEventHandlers[key]);
      });
      this.documentEventHandlers = {};
    }
  }]);

  return Dropzone;
}();


;// CONCATENATED MODULE: ./src/js/module/Codeview.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Codeview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Codeview_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Codeview_createClass(Constructor, protoProps, staticProps) { if (protoProps) Codeview_defineProperties(Constructor.prototype, protoProps); if (staticProps) Codeview_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @class Codeview
 */

var CodeView = /*#__PURE__*/function () {
  function CodeView(context) {
    Codeview_classCallCheck(this, CodeView);

    this.context = context;
    this.$editor = context.layoutInfo.editor;
    this.$editable = context.layoutInfo.editable;
    this.$codable = context.layoutInfo.codable;
    this.options = context.options;
    this.CodeMirrorConstructor = window.CodeMirror;

    if (this.options.codemirror.CodeMirrorConstructor) {
      this.CodeMirrorConstructor = this.options.codemirror.CodeMirrorConstructor;
    }
  }

  Codeview_createClass(CodeView, [{
    key: "sync",
    value: function sync(html) {
      var isCodeview = this.isActivated();
      var CodeMirror = this.CodeMirrorConstructor;

      if (isCodeview) {
        if (html) {
          if (CodeMirror) {
            this.$codable.data('cmEditor').getDoc().setValue(html);
          } else {
            this.$codable.val(html);
          }
        } else {
          if (CodeMirror) {
            this.$codable.data('cmEditor').save();
          }
        }
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.$codable.on('keyup', function (event) {
        if (event.keyCode === key.code.ESCAPE) {
          _this.deactivate();
        }
      });
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "isActivated",
    value: function isActivated() {
      return this.$editor.hasClass('codeview');
    }
    /**
     * toggle codeview
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActivated()) {
        this.deactivate();
      } else {
        this.activate();
      }

      this.context.triggerEvent('codeview.toggled');
    }
    /**
     * purify input value
     * @param value
     * @returns {*}
     */

  }, {
    key: "purify",
    value: function purify(value) {
      if (this.options.codeviewFilter) {
        // filter code view regex
        value = value.replace(this.options.codeviewFilterRegex, ''); // allow specific iframe tag

        if (this.options.codeviewIframeFilter) {
          var whitelist = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
          value = value.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, function (tag) {
            // remove if src attribute is duplicated
            if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(tag)) {
              return '';
            }

            var _iterator = _createForOfIteratorHelper(whitelist),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var src = _step.value;

                // pass if src is trusted
                if (new RegExp('src="(https?:)?\/\/' + src.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\/(.+)"').test(tag)) {
                  return tag;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return '';
          });
        }
      }

      return value;
    }
    /**
     * activate code view
     */

  }, {
    key: "activate",
    value: function activate() {
      var _this2 = this;

      var CodeMirror = this.CodeMirrorConstructor;
      this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
      this.$codable.height(this.$editable.height());
      this.context.invoke('toolbar.updateCodeview', true);
      this.context.invoke('airPopover.updateCodeview', true);
      this.$editor.addClass('codeview');
      this.$codable.focus(); // activate CodeMirror as codable

      if (CodeMirror) {
        var cmEditor = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror); // CodeMirror TernServer

        if (this.options.codemirror.tern) {
          var server = new CodeMirror.TernServer(this.options.codemirror.tern);
          cmEditor.ternServer = server;
          cmEditor.on('cursorActivity', function (cm) {
            server.updateArgHints(cm);
          });
        }

        cmEditor.on('blur', function (event) {
          _this2.context.triggerEvent('blur.codeview', cmEditor.getValue(), event);
        });
        cmEditor.on('change', function () {
          _this2.context.triggerEvent('change.codeview', cmEditor.getValue(), cmEditor);
        }); // CodeMirror hasn't Padding.

        cmEditor.setSize(null, this.$editable.outerHeight());
        this.$codable.data('cmEditor', cmEditor);
      } else {
        this.$codable.on('blur', function (event) {
          _this2.context.triggerEvent('blur.codeview', _this2.$codable.val(), event);
        });
        this.$codable.on('input', function () {
          _this2.context.triggerEvent('change.codeview', _this2.$codable.val(), _this2.$codable);
        });
      }
    }
    /**
     * deactivate code view
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      var CodeMirror = this.CodeMirrorConstructor; // deactivate CodeMirror as codable

      if (CodeMirror) {
        var cmEditor = this.$codable.data('cmEditor');
        this.$codable.val(cmEditor.getValue());
        cmEditor.toTextArea();
      }

      var value = this.purify(dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara);
      var isChange = this.$editable.html() !== value;
      this.$editable.html(value);
      this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
      this.$editor.removeClass('codeview');

      if (isChange) {
        this.context.triggerEvent('change', this.$editable.html(), this.$editable);
      }

      this.$editable.focus();
      this.context.invoke('toolbar.updateCodeview', false);
      this.context.invoke('airPopover.updateCodeview', false);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isActivated()) {
        this.deactivate();
      }
    }
  }]);

  return CodeView;
}();


;// CONCATENATED MODULE: ./src/js/module/Statusbar.js
function Statusbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Statusbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Statusbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Statusbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Statusbar_defineProperties(Constructor, staticProps); return Constructor; }


var EDITABLE_PADDING = 24;

var Statusbar = /*#__PURE__*/function () {
  function Statusbar(context) {
    Statusbar_classCallCheck(this, Statusbar);

    this.$document = external_jQuery_default()(document);
    this.$statusbar = context.layoutInfo.statusbar;
    this.$editable = context.layoutInfo.editable;
    this.$codable = context.layoutInfo.codable;
    this.options = context.options;
  }

  Statusbar_createClass(Statusbar, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      if (this.options.airMode || this.options.disableResizeEditor) {
        this.destroy();
        return;
      }

      this.$statusbar.on('mousedown', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var editableTop = _this.$editable.offset().top - _this.$document.scrollTop();

        var editableCodeTop = _this.$codable.offset().top - _this.$document.scrollTop();

        var onMouseMove = function onMouseMove(event) {
          var height = event.clientY - (editableTop + EDITABLE_PADDING);
          var heightCode = event.clientY - (editableCodeTop + EDITABLE_PADDING);
          height = _this.options.minheight > 0 ? Math.max(height, _this.options.minheight) : height;
          height = _this.options.maxHeight > 0 ? Math.min(height, _this.options.maxHeight) : height;
          heightCode = _this.options.minheight > 0 ? Math.max(heightCode, _this.options.minheight) : heightCode;
          heightCode = _this.options.maxHeight > 0 ? Math.min(heightCode, _this.options.maxHeight) : heightCode;

          _this.$editable.height(height);

          _this.$codable.height(heightCode);
        };

        _this.$document.on('mousemove', onMouseMove).one('mouseup', function () {
          _this.$document.off('mousemove', onMouseMove);
        });
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$statusbar.off();
      this.$statusbar.addClass('locked');
    }
  }]);

  return Statusbar;
}();


;// CONCATENATED MODULE: ./src/js/module/Fullscreen.js
function Fullscreen_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Fullscreen_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Fullscreen_createClass(Constructor, protoProps, staticProps) { if (protoProps) Fullscreen_defineProperties(Constructor.prototype, protoProps); if (staticProps) Fullscreen_defineProperties(Constructor, staticProps); return Constructor; }



var Fullscreen = /*#__PURE__*/function () {
  function Fullscreen(context) {
    var _this = this;

    Fullscreen_classCallCheck(this, Fullscreen);

    this.context = context;
    this.$editor = context.layoutInfo.editor;
    this.$toolbar = context.layoutInfo.toolbar;
    this.$editable = context.layoutInfo.editable;
    this.$codable = context.layoutInfo.codable;
    this.$window = external_jQuery_default()(window);
    this.$scrollbar = external_jQuery_default()('html, body');
    this.scrollbarClassName = 'note-fullscreen-body';

    this.onResize = function () {
      _this.resizeTo({
        h: _this.$window.height() - _this.$toolbar.outerHeight()
      });
    };
  }

  Fullscreen_createClass(Fullscreen, [{
    key: "resizeTo",
    value: function resizeTo(size) {
      this.$editable.css('height', size.h);
      this.$codable.css('height', size.h);

      if (this.$codable.data('cmeditor')) {
        this.$codable.data('cmeditor').setsize(null, size.h);
      }
    }
    /**
     * toggle fullscreen
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.$editor.toggleClass('fullscreen');
      var isFullscreen = this.isFullscreen();
      this.$scrollbar.toggleClass(this.scrollbarClassName, isFullscreen);

      if (isFullscreen) {
        this.$editable.data('orgHeight', this.$editable.css('height'));
        this.$editable.data('orgMaxHeight', this.$editable.css('maxHeight'));
        this.$editable.css('maxHeight', '');
        this.$window.on('resize', this.onResize).trigger('resize');
      } else {
        this.$window.off('resize', this.onResize);
        this.resizeTo({
          h: this.$editable.data('orgHeight')
        });
        this.$editable.css('maxHeight', this.$editable.css('orgMaxHeight'));
      }

      this.context.invoke('toolbar.updateFullscreen', isFullscreen);
    }
  }, {
    key: "isFullscreen",
    value: function isFullscreen() {
      return this.$editor.hasClass('fullscreen');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$scrollbar.removeClass(this.scrollbarClassName);
    }
  }]);

  return Fullscreen;
}();


;// CONCATENATED MODULE: ./src/js/module/Handle.js
function Handle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Handle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Handle_createClass(Constructor, protoProps, staticProps) { if (protoProps) Handle_defineProperties(Constructor.prototype, protoProps); if (staticProps) Handle_defineProperties(Constructor, staticProps); return Constructor; }




var Handle = /*#__PURE__*/function () {
  function Handle(context) {
    var _this = this;

    Handle_classCallCheck(this, Handle);

    this.context = context;
    this.$document = external_jQuery_default()(document);
    this.$editingArea = context.layoutInfo.editingArea;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.events = {
      'summernote.mousedown': function summernoteMousedown(we, e) {
        if (_this.update(e.target, e)) {
          e.preventDefault();
        }
      },
      'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function summernoteKeyupSummernoteScrollSummernoteChangeSummernoteDialogShown() {
        _this.update();
      },
      'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
        _this.hide();
      },
      'summernote.codeview.toggled': function summernoteCodeviewToggled() {
        _this.update();
      }
    };
  }

  Handle_createClass(Handle, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.$handle = external_jQuery_default()(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing', ' note-control-se"></div>', this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>', '</div>', '</div>'].join('')).prependTo(this.$editingArea);
      this.$handle.on('mousedown', function (event) {
        if (dom.isControlSizing(event.target)) {
          event.preventDefault();
          event.stopPropagation();

          var $target = _this2.$handle.find('.note-control-selection').data('target');

          var posStart = $target.offset();

          var scrollTop = _this2.$document.scrollTop();

          var onMouseMove = function onMouseMove(event) {
            _this2.context.invoke('editor.resizeTo', {
              x: event.clientX - posStart.left,
              y: event.clientY - (posStart.top - scrollTop)
            }, $target, !event.shiftKey);

            _this2.update($target[0], event);
          };

          _this2.$document.on('mousemove', onMouseMove).one('mouseup', function (e) {
            e.preventDefault();

            _this2.$document.off('mousemove', onMouseMove);

            _this2.context.invoke('editor.afterCommand');
          });

          if (!$target.data('ratio')) {
            // original ratio.
            $target.data('ratio', $target.height() / $target.width());
          }
        }
      }); // Listen for scrolling on the handle overlay.

      this.$handle.on('wheel', function (e) {
        e.preventDefault();

        _this2.update();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$handle.remove();
    }
  }, {
    key: "update",
    value: function update(target, event) {
      if (this.context.isDisabled()) {
        return false;
      }

      var isImage = dom.isImg(target);
      var $selection = this.$handle.find('.note-control-selection');
      this.context.invoke('imagePopover.update', target, event);

      if (isImage) {
        var $image = external_jQuery_default()(target);
        var position = $image.position();
        var pos = {
          left: position.left + parseInt($image.css('marginLeft'), 10),
          top: position.top + parseInt($image.css('marginTop'), 10)
        }; // exclude margin

        var imageSize = {
          w: $image.outerWidth(false),
          h: $image.outerHeight(false)
        };
        $selection.css({
          display: 'block',
          left: pos.left,
          top: pos.top,
          width: imageSize.w,
          height: imageSize.h
        }).data('target', $image); // save current image element.

        var origImageObj = new Image();
        origImageObj.src = $image.attr('src');
        var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
        $selection.find('.note-control-selection-info').text(sizingText);
        this.context.invoke('editor.saveTarget', target);
      } else {
        this.hide();
      }

      return isImage;
    }
    /**
     * hide
     *
     * @param {jQuery} $handle
     */

  }, {
    key: "hide",
    value: function hide() {
      this.context.invoke('editor.clearTarget');
      this.$handle.children().hide();
    }
  }]);

  return Handle;
}();


;// CONCATENATED MODULE: ./src/js/module/AutoLink.js
function AutoLink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AutoLink_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AutoLink_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoLink_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoLink_defineProperties(Constructor, staticProps); return Constructor; }




var defaultScheme = 'http://';
var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@|xmpp:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

var AutoLink = /*#__PURE__*/function () {
  function AutoLink(context) {
    var _this = this;

    AutoLink_classCallCheck(this, AutoLink);

    this.context = context;
    this.options = context.options;
    this.events = {
      'summernote.keyup': function summernoteKeyup(we, e) {
        if (!e.isDefaultPrevented()) {
          _this.handleKeyup(e);
        }
      },
      'summernote.keydown': function summernoteKeydown(we, e) {
        _this.handleKeydown(e);
      }
    };
  }

  AutoLink_createClass(AutoLink, [{
    key: "initialize",
    value: function initialize() {
      this.lastWordRange = null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.lastWordRange = null;
    }
  }, {
    key: "replace",
    value: function replace() {
      if (!this.lastWordRange) {
        return;
      }

      var keyword = this.lastWordRange.toString();
      var match = keyword.match(linkPattern);

      if (match && (match[1] || match[2])) {
        var link = match[1] ? keyword : defaultScheme + keyword;
        var urlText = this.options.showDomainOnlyForAutolink ? keyword.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:xmpp?:?)?(?:www\.)?/i, '').split('/')[0] : keyword;
        var node = external_jQuery_default()('<a></a>').html(urlText).attr('href', link)[0];

        if (this.context.options.linkTargetBlank) {
          external_jQuery_default()(node).attr('target', '_blank');
        }

        this.lastWordRange.insertNode(node);
        this.lastWordRange = null;
        this.context.invoke('editor.focus');
      }
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(e) {
      if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        var wordRange = this.context.invoke('editor.createRange').getWordRange();
        this.lastWordRange = wordRange;
      }
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(e) {
      if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        this.replace();
      }
    }
  }]);

  return AutoLink;
}();


;// CONCATENATED MODULE: ./src/js/module/AutoSync.js
function AutoSync_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AutoSync_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AutoSync_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoSync_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoSync_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * textarea auto sync.
 */

var AutoSync = /*#__PURE__*/function () {
  function AutoSync(context) {
    var _this = this;

    AutoSync_classCallCheck(this, AutoSync);

    this.$note = context.layoutInfo.note;
    this.events = {
      'summernote.change': function summernoteChange() {
        _this.$note.val(context.invoke('code'));
      }
    };
  }

  AutoSync_createClass(AutoSync, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return dom.isTextarea(this.$note[0]);
    }
  }]);

  return AutoSync;
}();


;// CONCATENATED MODULE: ./src/js/module/AutoReplace.js
function AutoReplace_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AutoReplace_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AutoReplace_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoReplace_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoReplace_defineProperties(Constructor, staticProps); return Constructor; }





var AutoReplace = /*#__PURE__*/function () {
  function AutoReplace(context) {
    var _this = this;

    AutoReplace_classCallCheck(this, AutoReplace);

    this.context = context;
    this.options = context.options.replace || {};
    this.keys = [key.code.ENTER, key.code.SPACE, key.code.PERIOD, key.code.COMMA, key.code.SEMICOLON, key.code.SLASH];
    this.previousKeydownCode = null;
    this.events = {
      'summernote.keyup': function summernoteKeyup(we, e) {
        if (!e.isDefaultPrevented()) {
          _this.handleKeyup(e);
        }
      },
      'summernote.keydown': function summernoteKeydown(we, e) {
        _this.handleKeydown(e);
      }
    };
  }

  AutoReplace_createClass(AutoReplace, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !!this.options.match;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.lastWord = null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.lastWord = null;
    }
  }, {
    key: "replace",
    value: function replace() {
      if (!this.lastWord) {
        return;
      }

      var self = this;
      var keyword = this.lastWord.toString();
      this.options.match(keyword, function (match) {
        if (match) {
          var node = '';

          if (typeof match === 'string') {
            node = dom.createText(match);
          } else if (match instanceof jQuery) {
            node = match[0];
          } else if (match instanceof Node) {
            node = match;
          }

          if (!node) return;
          self.lastWord.insertNode(node);
          self.lastWord = null;
          self.context.invoke('editor.focus');
        }
      });
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(e) {
      // this forces it to remember the last whole word, even if multiple termination keys are pressed
      // before the previous key is let go.
      if (this.previousKeydownCode && lists.contains(this.keys, this.previousKeydownCode)) {
        this.previousKeydownCode = e.keyCode;
        return;
      }

      if (lists.contains(this.keys, e.keyCode)) {
        var wordRange = this.context.invoke('editor.createRange').getWordRange();
        this.lastWord = wordRange;
      }

      this.previousKeydownCode = e.keyCode;
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(e) {
      if (lists.contains(this.keys, e.keyCode)) {
        this.replace();
      }
    }
  }]);

  return AutoReplace;
}();


;// CONCATENATED MODULE: ./src/js/module/Placeholder.js
function Placeholder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Placeholder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Placeholder_createClass(Constructor, protoProps, staticProps) { if (protoProps) Placeholder_defineProperties(Constructor.prototype, protoProps); if (staticProps) Placeholder_defineProperties(Constructor, staticProps); return Constructor; }



var Placeholder = /*#__PURE__*/function () {
  function Placeholder(context) {
    var _this = this;

    Placeholder_classCallCheck(this, Placeholder);

    this.context = context;
    this.$editingArea = context.layoutInfo.editingArea;
    this.options = context.options;

    if (this.options.inheritPlaceholder === true) {
      // get placeholder value from the original element
      this.options.placeholder = this.context.$note.attr('placeholder') || this.options.placeholder;
    }

    this.events = {
      'summernote.init summernote.change': function summernoteInitSummernoteChange() {
        _this.update();
      },
      'summernote.codeview.toggled': function summernoteCodeviewToggled() {
        _this.update();
      }
    };
  }

  Placeholder_createClass(Placeholder, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !!this.options.placeholder;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.$placeholder = external_jQuery_default()('<div class="note-placeholder"></div>');
      this.$placeholder.on('click', function () {
        _this2.context.invoke('focus');
      }).html(this.options.placeholder).prependTo(this.$editingArea);
      this.update();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$placeholder.remove();
    }
  }, {
    key: "update",
    value: function update() {
      var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
      this.$placeholder.toggle(isShow);
    }
  }]);

  return Placeholder;
}();


;// CONCATENATED MODULE: ./src/js/module/Buttons.js
function Buttons_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Buttons_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Buttons_createClass(Constructor, protoProps, staticProps) { if (protoProps) Buttons_defineProperties(Constructor.prototype, protoProps); if (staticProps) Buttons_defineProperties(Constructor, staticProps); return Constructor; }






var Buttons = /*#__PURE__*/function () {
  function Buttons(context) {
    Buttons_classCallCheck(this, Buttons);

    this.ui = (external_jQuery_default()).summernote.ui;
    this.context = context;
    this.$toolbar = context.layoutInfo.toolbar;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
  }

  Buttons_createClass(Buttons, [{
    key: "representShortcut",
    value: function representShortcut(editorMethod) {
      var shortcut = this.invertedKeyMap[editorMethod];

      if (!this.options.shortcuts || !shortcut) {
        return '';
      }

      if (env.isMac) {
        shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
      }

      shortcut = shortcut.replace('BACKSLASH', '\\').replace('SLASH', '/').replace('LEFTBRACKET', '[').replace('RIGHTBRACKET', ']');
      return ' (' + shortcut + ')';
    }
  }, {
    key: "button",
    value: function button(o) {
      if (!this.options.tooltip && o.tooltip) {
        delete o.tooltip;
      }

      o.container = this.options.container;
      return this.ui.button(o);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.addToolbarButtons();
      this.addImagePopoverButtons();
      this.addLinkPopoverButtons();
      this.addTablePopoverButtons();
      this.fontInstalledMap = {};
    }
  }, {
    key: "destroy",
    value: function destroy() {
      delete this.fontInstalledMap;
    }
  }, {
    key: "isFontInstalled",
    value: function isFontInstalled(name) {
      if (!Object.prototype.hasOwnProperty.call(this.fontInstalledMap, name)) {
        this.fontInstalledMap[name] = env.isFontInstalled(name) || lists.contains(this.options.fontNamesIgnoreCheck, name);
      }

      return this.fontInstalledMap[name];
    }
  }, {
    key: "isFontDeservedToAdd",
    value: function isFontDeservedToAdd(name) {
      name = name.toLowerCase();
      return name !== '' && this.isFontInstalled(name) && env.genericFontFamilies.indexOf(name) === -1;
    }
  }, {
    key: "colorPalette",
    value: function colorPalette(className, tooltip, backColor, foreColor) {
      var _this = this;

      return this.ui.buttonGroup({
        className: 'note-color ' + className,
        children: [this.button({
          className: 'note-current-color-button',
          contents: this.ui.icon(this.options.icons.font + ' note-recent-color'),
          tooltip: tooltip,
          click: function click(e) {
            var $button = external_jQuery_default()(e.currentTarget);

            if (backColor && foreColor) {
              _this.context.invoke('editor.color', {
                backColor: $button.attr('data-backColor'),
                foreColor: $button.attr('data-foreColor')
              });
            } else if (backColor) {
              _this.context.invoke('editor.color', {
                backColor: $button.attr('data-backColor')
              });
            } else if (foreColor) {
              _this.context.invoke('editor.color', {
                foreColor: $button.attr('data-foreColor')
              });
            }
          },
          callback: function callback($button) {
            var $recentColor = $button.find('.note-recent-color');

            if (backColor) {
              $recentColor.css('background-color', _this.options.colorButton.backColor);
              $button.attr('data-backColor', _this.options.colorButton.backColor);
            }

            if (foreColor) {
              $recentColor.css('color', _this.options.colorButton.foreColor);
              $button.attr('data-foreColor', _this.options.colorButton.foreColor);
            } else {
              $recentColor.css('color', 'transparent');
            }
          }
        }), this.button({
          className: 'dropdown-toggle',
          contents: this.ui.dropdownButtonContents('', this.options),
          tooltip: this.lang.color.more,
          data: {
            toggle: 'dropdown'
          }
        }), this.ui.dropdown({
          items: (backColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">', this.lang.color.transparent, '</button>', '</div>', '<div class="note-holder" data-event="backColor"><!-- back colors --></div>', '<div>', '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker-' + this.options.id + '">', this.lang.color.cpSelect, '</button>', '<input type="color" id="backColorPicker-' + this.options.id + '" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette-' + this.options.id + '">', '</div>', '<div class="note-holder-custom" id="backColorPalette-' + this.options.id + '" data-event="backColor"></div>', '</div>'].join('') : '') + (foreColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, '</button>', '</div>', '<div class="note-holder" data-event="foreColor"><!-- fore colors --></div>', '<div>', '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker-' + this.options.id + '">', this.lang.color.cpSelect, '</button>', '<input type="color" id="foreColorPicker-' + this.options.id + '" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette-' + this.options.id + '">', '</div>', // Fix missing Div, Commented to find easily if it's wrong
          '<div class="note-holder-custom" id="foreColorPalette-' + this.options.id + '" data-event="foreColor"></div>', '</div>'].join('') : ''),
          callback: function callback($dropdown) {
            $dropdown.find('.note-holder').each(function (idx, item) {
              var $holder = external_jQuery_default()(item);
              $holder.append(_this.ui.palette({
                colors: _this.options.colors,
                colorsName: _this.options.colorsName,
                eventName: $holder.data('event'),
                container: _this.options.container,
                tooltip: _this.options.tooltip
              }).render());
            });
            /* TODO: do we have to record recent custom colors within cookies? */

            var customColors = [['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']];
            $dropdown.find('.note-holder-custom').each(function (idx, item) {
              var $holder = external_jQuery_default()(item);
              $holder.append(_this.ui.palette({
                colors: customColors,
                colorsName: customColors,
                eventName: $holder.data('event'),
                container: _this.options.container,
                tooltip: _this.options.tooltip
              }).render());
            });
            $dropdown.find('input[type=color]').each(function (idx, item) {
              external_jQuery_default()(item).change(function () {
                var $chip = $dropdown.find('#' + external_jQuery_default()(this).data('event')).find('.note-color-btn').first();
                var color = this.value.toUpperCase();
                $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
                $chip.click();
              });
            });
          },
          click: function click(event) {
            event.stopPropagation();
            var $parent = external_jQuery_default()('.' + className).find('.note-dropdown-menu');
            var $button = external_jQuery_default()(event.target);
            var eventName = $button.data('event');
            var value = $button.attr('data-value');

            if (eventName === 'openPalette') {
              var $picker = $parent.find('#' + value);
              var $palette = external_jQuery_default()($parent.find('#' + $picker.data('event')).find('.note-color-row')[0]); // Shift palette chips

              var $chip = $palette.find('.note-color-btn').last().detach(); // Set chip attributes

              var color = $picker.val();
              $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
              $palette.prepend($chip);
              $picker.click();
            } else {
              if (lists.contains(['backColor', 'foreColor'], eventName)) {
                var key = eventName === 'backColor' ? 'background-color' : 'color';
                var $color = $button.closest('.note-color').find('.note-recent-color');
                var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                $color.css(key, value);
                $currentButton.attr('data-' + eventName, value);
              }

              _this.context.invoke('editor.' + eventName, value);
            }
          }
        })]
      }).render();
    }
  }, {
    key: "addToolbarButtons",
    value: function addToolbarButtons() {
      var _this2 = this;

      this.context.memo('button.style', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.magic), _this2.options),
          tooltip: _this2.lang.style.style,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdown({
          className: 'dropdown-style',
          items: _this2.options.styleTags,
          title: _this2.lang.style.style,
          template: function template(item) {
            // TBD: need to be simplified
            if (typeof item === 'string') {
              item = {
                tag: item,
                title: Object.prototype.hasOwnProperty.call(_this2.lang.style, item) ? _this2.lang.style[item] : item
              };
            }

            var tag = item.tag;
            var title = item.title;
            var style = item.style ? ' style="' + item.style + '" ' : '';
            var className = item.className ? ' class="' + item.className + '"' : '';
            return '<' + tag + style + className + '>' + title + '</' + tag + '>';
          },
          click: _this2.context.createInvokeHandler('editor.formatBlock')
        })]).render();
      });

      var _loop = function _loop(styleIdx, styleLen) {
        var item = _this2.options.styleTags[styleIdx];

        _this2.context.memo('button.style.' + item, function () {
          return _this2.button({
            className: 'note-btn-style-' + item,
            contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
            tooltip: _this2.lang.style[item],
            click: _this2.context.createInvokeHandler('editor.formatBlock')
          }).render();
        });
      };

      for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
        _loop(styleIdx, styleLen);
      }

      this.context.memo('button.bold', function () {
        return _this2.button({
          className: 'note-btn-bold',
          contents: _this2.ui.icon(_this2.options.icons.bold),
          tooltip: _this2.lang.font.bold + _this2.representShortcut('bold'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.bold')
        }).render();
      });
      this.context.memo('button.italic', function () {
        return _this2.button({
          className: 'note-btn-italic',
          contents: _this2.ui.icon(_this2.options.icons.italic),
          tooltip: _this2.lang.font.italic + _this2.representShortcut('italic'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.italic')
        }).render();
      });
      this.context.memo('button.underline', function () {
        return _this2.button({
          className: 'note-btn-underline',
          contents: _this2.ui.icon(_this2.options.icons.underline),
          tooltip: _this2.lang.font.underline + _this2.representShortcut('underline'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.underline')
        }).render();
      });
      this.context.memo('button.clear', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.eraser),
          tooltip: _this2.lang.font.clear + _this2.representShortcut('removeFormat'),
          click: _this2.context.createInvokeHandler('editor.removeFormat')
        }).render();
      });
      this.context.memo('button.strikethrough', function () {
        return _this2.button({
          className: 'note-btn-strikethrough',
          contents: _this2.ui.icon(_this2.options.icons.strikethrough),
          tooltip: _this2.lang.font.strikethrough + _this2.representShortcut('strikethrough'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
        }).render();
      });
      this.context.memo('button.superscript', function () {
        return _this2.button({
          className: 'note-btn-superscript',
          contents: _this2.ui.icon(_this2.options.icons.superscript),
          tooltip: _this2.lang.font.superscript,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.superscript')
        }).render();
      });
      this.context.memo('button.subscript', function () {
        return _this2.button({
          className: 'note-btn-subscript',
          contents: _this2.ui.icon(_this2.options.icons.subscript),
          tooltip: _this2.lang.font.subscript,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.subscript')
        }).render();
      });
      this.context.memo('button.fontname', function () {
        var styleInfo = _this2.context.invoke('editor.currentStyle');

        if (_this2.options.addDefaultFonts) {
          // Add 'default' fonts into the fontnames array if not exist
          external_jQuery_default().each(styleInfo['font-family'].split(','), function (idx, fontname) {
            fontname = fontname.trim().replace(/['"]+/g, '');

            if (_this2.isFontDeservedToAdd(fontname)) {
              if (_this2.options.fontNames.indexOf(fontname) === -1) {
                _this2.options.fontNames.push(fontname);
              }
            }
          });
        }

        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontname"></span>', _this2.options),
          tooltip: _this2.lang.font.name,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          className: 'dropdown-fontname',
          checkClassName: _this2.options.icons.menuCheck,
          items: _this2.options.fontNames.filter(_this2.isFontInstalled.bind(_this2)),
          title: _this2.lang.font.name,
          template: function template(item) {
            return '<span style="font-family: ' + env.validFontName(item) + '">' + item + '</span>';
          },
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontName')
        })]).render();
      });
      this.context.memo('button.fontsize', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontsize"></span>', _this2.options),
          tooltip: _this2.lang.font.size,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          className: 'dropdown-fontsize',
          checkClassName: _this2.options.icons.menuCheck,
          items: _this2.options.fontSizes,
          title: _this2.lang.font.size,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontSize')
        })]).render();
      });
      this.context.memo('button.fontsizeunit', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"></span>', _this2.options),
          tooltip: _this2.lang.font.sizeunit,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          className: 'dropdown-fontsizeunit',
          checkClassName: _this2.options.icons.menuCheck,
          items: _this2.options.fontSizeUnits,
          title: _this2.lang.font.sizeunit,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontSizeUnit')
        })]).render();
      });
      this.context.memo('button.color', function () {
        return _this2.colorPalette('note-color-all', _this2.lang.color.recent, true, true);
      });
      this.context.memo('button.forecolor', function () {
        return _this2.colorPalette('note-color-fore', _this2.lang.color.foreground, false, true);
      });
      this.context.memo('button.backcolor', function () {
        return _this2.colorPalette('note-color-back', _this2.lang.color.background, true, false);
      });
      this.context.memo('button.ul', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.unorderedlist),
          tooltip: _this2.lang.lists.unordered + _this2.representShortcut('insertUnorderedList'),
          click: _this2.context.createInvokeHandler('editor.insertUnorderedList')
        }).render();
      });
      this.context.memo('button.ol', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.orderedlist),
          tooltip: _this2.lang.lists.ordered + _this2.representShortcut('insertOrderedList'),
          click: _this2.context.createInvokeHandler('editor.insertOrderedList')
        }).render();
      });
      var justifyLeft = this.button({
        contents: this.ui.icon(this.options.icons.alignLeft),
        tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
        click: this.context.createInvokeHandler('editor.justifyLeft')
      });
      var justifyCenter = this.button({
        contents: this.ui.icon(this.options.icons.alignCenter),
        tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
        click: this.context.createInvokeHandler('editor.justifyCenter')
      });
      var justifyRight = this.button({
        contents: this.ui.icon(this.options.icons.alignRight),
        tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
        click: this.context.createInvokeHandler('editor.justifyRight')
      });
      var justifyFull = this.button({
        contents: this.ui.icon(this.options.icons.alignJustify),
        tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
        click: this.context.createInvokeHandler('editor.justifyFull')
      });
      var outdent = this.button({
        contents: this.ui.icon(this.options.icons.outdent),
        tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
        click: this.context.createInvokeHandler('editor.outdent')
      });
      var indent = this.button({
        contents: this.ui.icon(this.options.icons.indent),
        tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
        click: this.context.createInvokeHandler('editor.indent')
      });
      this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
      this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
      this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
      this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
      this.context.memo('button.outdent', func.invoke(outdent, 'render'));
      this.context.memo('button.indent', func.invoke(indent, 'render'));
      this.context.memo('button.paragraph', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.alignLeft), _this2.options),
          tooltip: _this2.lang.paragraph.paragraph,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdown([_this2.ui.buttonGroup({
          className: 'note-align',
          children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
        }), _this2.ui.buttonGroup({
          className: 'note-list',
          children: [outdent, indent]
        })])]).render();
      });
      this.context.memo('button.height', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.textHeight), _this2.options),
          tooltip: _this2.lang.font.height,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          items: _this2.options.lineHeights,
          checkClassName: _this2.options.icons.menuCheck,
          className: 'dropdown-line-height',
          title: _this2.lang.font.height,
          click: _this2.context.createInvokeHandler('editor.lineHeight')
        })]).render();
      });
      this.context.memo('button.table', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.table), _this2.options),
          tooltip: _this2.lang.table.table,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdown({
          title: _this2.lang.table.table,
          className: 'note-table',
          items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', '</div>', '<div class="note-dimension-display">1 x 1</div>'].join('')
        })], {
          callback: function callback($node) {
            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
            $catcher.css({
              width: _this2.options.insertTableMaxSize.col + 'em',
              height: _this2.options.insertTableMaxSize.row + 'em'
            }).mouseup(_this2.context.createInvokeHandler('editor.insertTable')).on('mousemove', _this2.tableMoveHandler.bind(_this2));
          }
        }).render();
      });
      this.context.memo('button.link', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.link),
          tooltip: _this2.lang.link.link + _this2.representShortcut('linkDialog.show'),
          click: _this2.context.createInvokeHandler('linkDialog.show')
        }).render();
      });
      this.context.memo('button.picture', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.picture),
          tooltip: _this2.lang.image.image,
          click: _this2.context.createInvokeHandler('imageDialog.show')
        }).render();
      });
      this.context.memo('button.video', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.video),
          tooltip: _this2.lang.video.video,
          click: _this2.context.createInvokeHandler('videoDialog.show')
        }).render();
      });
      this.context.memo('button.hr', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.minus),
          tooltip: _this2.lang.hr.insert + _this2.representShortcut('insertHorizontalRule'),
          click: _this2.context.createInvokeHandler('editor.insertHorizontalRule')
        }).render();
      });
      this.context.memo('button.fullscreen', function () {
        return _this2.button({
          className: 'btn-fullscreen note-codeview-keep',
          contents: _this2.ui.icon(_this2.options.icons.arrowsAlt),
          tooltip: _this2.lang.options.fullscreen,
          click: _this2.context.createInvokeHandler('fullscreen.toggle')
        }).render();
      });
      this.context.memo('button.codeview', function () {
        return _this2.button({
          className: 'btn-codeview note-codeview-keep',
          contents: _this2.ui.icon(_this2.options.icons.code),
          tooltip: _this2.lang.options.codeview,
          click: _this2.context.createInvokeHandler('codeview.toggle')
        }).render();
      });
      this.context.memo('button.redo', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.redo),
          tooltip: _this2.lang.history.redo + _this2.representShortcut('redo'),
          click: _this2.context.createInvokeHandler('editor.redo')
        }).render();
      });
      this.context.memo('button.undo', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.undo),
          tooltip: _this2.lang.history.undo + _this2.representShortcut('undo'),
          click: _this2.context.createInvokeHandler('editor.undo')
        }).render();
      });
      this.context.memo('button.help', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.question),
          tooltip: _this2.lang.options.help,
          click: _this2.context.createInvokeHandler('helpDialog.show')
        }).render();
      });
    }
    /**
     * image: [
     *   ['imageResize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
     *   ['float', ['floatLeft', 'floatRight', 'floatNone']],
     *   ['remove', ['removeMedia']],
     * ],
     */

  }, {
    key: "addImagePopoverButtons",
    value: function addImagePopoverButtons() {
      var _this3 = this;

      // Image Size Buttons
      this.context.memo('button.resizeFull', function () {
        return _this3.button({
          contents: '<span class="note-fontsize-10">100%</span>',
          tooltip: _this3.lang.image.resizeFull,
          click: _this3.context.createInvokeHandler('editor.resize', '1')
        }).render();
      });
      this.context.memo('button.resizeHalf', function () {
        return _this3.button({
          contents: '<span class="note-fontsize-10">50%</span>',
          tooltip: _this3.lang.image.resizeHalf,
          click: _this3.context.createInvokeHandler('editor.resize', '0.5')
        }).render();
      });
      this.context.memo('button.resizeQuarter', function () {
        return _this3.button({
          contents: '<span class="note-fontsize-10">25%</span>',
          tooltip: _this3.lang.image.resizeQuarter,
          click: _this3.context.createInvokeHandler('editor.resize', '0.25')
        }).render();
      });
      this.context.memo('button.resizeNone', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.rollback),
          tooltip: _this3.lang.image.resizeNone,
          click: _this3.context.createInvokeHandler('editor.resize', '0')
        }).render();
      }); // Float Buttons

      this.context.memo('button.floatLeft', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.floatLeft),
          tooltip: _this3.lang.image.floatLeft,
          click: _this3.context.createInvokeHandler('editor.floatMe', 'left')
        }).render();
      });
      this.context.memo('button.floatRight', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.floatRight),
          tooltip: _this3.lang.image.floatRight,
          click: _this3.context.createInvokeHandler('editor.floatMe', 'right')
        }).render();
      });
      this.context.memo('button.floatNone', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.rollback),
          tooltip: _this3.lang.image.floatNone,
          click: _this3.context.createInvokeHandler('editor.floatMe', 'none')
        }).render();
      }); // Remove Buttons

      this.context.memo('button.removeMedia', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.trash),
          tooltip: _this3.lang.image.remove,
          click: _this3.context.createInvokeHandler('editor.removeMedia')
        }).render();
      });
    }
  }, {
    key: "addLinkPopoverButtons",
    value: function addLinkPopoverButtons() {
      var _this4 = this;

      this.context.memo('button.linkDialogShow', function () {
        return _this4.button({
          contents: _this4.ui.icon(_this4.options.icons.link),
          tooltip: _this4.lang.link.edit,
          click: _this4.context.createInvokeHandler('linkDialog.show')
        }).render();
      });
      this.context.memo('button.unlink', function () {
        return _this4.button({
          contents: _this4.ui.icon(_this4.options.icons.unlink),
          tooltip: _this4.lang.link.unlink,
          click: _this4.context.createInvokeHandler('editor.unlink')
        }).render();
      });
    }
    /**
     * table : [
     *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
     *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
     * ],
     */

  }, {
    key: "addTablePopoverButtons",
    value: function addTablePopoverButtons() {
      var _this5 = this;

      this.context.memo('button.addRowUp', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.rowAbove),
          tooltip: _this5.lang.table.addRowAbove,
          click: _this5.context.createInvokeHandler('editor.addRow', 'top')
        }).render();
      });
      this.context.memo('button.addRowDown', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.rowBelow),
          tooltip: _this5.lang.table.addRowBelow,
          click: _this5.context.createInvokeHandler('editor.addRow', 'bottom')
        }).render();
      });
      this.context.memo('button.addColLeft', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.colBefore),
          tooltip: _this5.lang.table.addColLeft,
          click: _this5.context.createInvokeHandler('editor.addCol', 'left')
        }).render();
      });
      this.context.memo('button.addColRight', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.colAfter),
          tooltip: _this5.lang.table.addColRight,
          click: _this5.context.createInvokeHandler('editor.addCol', 'right')
        }).render();
      });
      this.context.memo('button.deleteRow', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.rowRemove),
          tooltip: _this5.lang.table.delRow,
          click: _this5.context.createInvokeHandler('editor.deleteRow')
        }).render();
      });
      this.context.memo('button.deleteCol', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.colRemove),
          tooltip: _this5.lang.table.delCol,
          click: _this5.context.createInvokeHandler('editor.deleteCol')
        }).render();
      });
      this.context.memo('button.deleteTable', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.trash),
          tooltip: _this5.lang.table.delTable,
          click: _this5.context.createInvokeHandler('editor.deleteTable')
        }).render();
      });
    }
  }, {
    key: "build",
    value: function build($container, groups) {
      for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
        var group = groups[groupIdx];
        var groupName = Array.isArray(group) ? group[0] : group;
        var buttons = Array.isArray(group) ? group.length === 1 ? [group[0]] : group[1] : [group];
        var $group = this.ui.buttonGroup({
          className: 'note-' + groupName
        }).render();

        for (var idx = 0, len = buttons.length; idx < len; idx++) {
          var btn = this.context.memo('button.' + buttons[idx]);

          if (btn) {
            $group.append(typeof btn === 'function' ? btn(this.context) : btn);
          }
        }

        $group.appendTo($container);
      }
    }
    /**
     * @param {jQuery} [$container]
     */

  }, {
    key: "updateCurrentStyle",
    value: function updateCurrentStyle($container) {
      var $cont = $container || this.$toolbar;
      var styleInfo = this.context.invoke('editor.currentStyle');
      this.updateBtnStates($cont, {
        '.note-btn-bold': function noteBtnBold() {
          return styleInfo['font-bold'] === 'bold';
        },
        '.note-btn-italic': function noteBtnItalic() {
          return styleInfo['font-italic'] === 'italic';
        },
        '.note-btn-underline': function noteBtnUnderline() {
          return styleInfo['font-underline'] === 'underline';
        },
        '.note-btn-subscript': function noteBtnSubscript() {
          return styleInfo['font-subscript'] === 'subscript';
        },
        '.note-btn-superscript': function noteBtnSuperscript() {
          return styleInfo['font-superscript'] === 'superscript';
        },
        '.note-btn-strikethrough': function noteBtnStrikethrough() {
          return styleInfo['font-strikethrough'] === 'strikethrough';
        }
      });

      if (styleInfo['font-family']) {
        var fontNames = styleInfo['font-family'].split(',').map(function (name) {
          return name.replace(/[\'\"]/g, '').replace(/\s+$/, '').replace(/^\s+/, '');
        });
        var fontName = lists.find(fontNames, this.isFontInstalled.bind(this));
        $cont.find('.dropdown-fontname a').each(function (idx, item) {
          var $item = external_jQuery_default()(item); // always compare string to avoid creating another func.

          var isChecked = $item.data('value') + '' === fontName + '';
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontname').text(fontName).css('font-family', fontName);
      }

      if (styleInfo['font-size']) {
        var fontSize = styleInfo['font-size'];
        $cont.find('.dropdown-fontsize a').each(function (idx, item) {
          var $item = external_jQuery_default()(item); // always compare with string to avoid creating another func.

          var isChecked = $item.data('value') + '' === fontSize + '';
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontsize').text(fontSize);
        var fontSizeUnit = styleInfo['font-size-unit'];
        $cont.find('.dropdown-fontsizeunit a').each(function (idx, item) {
          var $item = external_jQuery_default()(item);
          var isChecked = $item.data('value') + '' === fontSizeUnit + '';
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontsizeunit').text(fontSizeUnit);
      }

      if (styleInfo['line-height']) {
        var lineHeight = styleInfo['line-height'];
        $cont.find('.dropdown-line-height a').each(function (idx, item) {
          var $item = external_jQuery_default()(item); // always compare with string to avoid creating another func.

          var isChecked = external_jQuery_default()(item).data('value') + '' === lineHeight + '';
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-line-height').text(lineHeight);
      }
    }
  }, {
    key: "updateBtnStates",
    value: function updateBtnStates($container, infos) {
      var _this6 = this;

      external_jQuery_default().each(infos, function (selector, pred) {
        _this6.ui.toggleBtnActive($container.find(selector), pred());
      });
    }
  }, {
    key: "tableMoveHandler",
    value: function tableMoveHandler(event) {
      var PX_PER_EM = 18;
      var $picker = external_jQuery_default()(event.target.parentNode); // target is mousecatcher

      var $dimensionDisplay = $picker.next();
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
      var posOffset; // HTML5 with jQuery - e.offsetX is undefined in Firefox

      if (event.offsetX === undefined) {
        var posCatcher = external_jQuery_default()(event.target).offset();
        posOffset = {
          x: event.pageX - posCatcher.left,
          y: event.pageY - posCatcher.top
        };
      } else {
        posOffset = {
          x: event.offsetX,
          y: event.offsetY
        };
      }

      var dim = {
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
      };
      $highlighted.css({
        width: dim.c + 'em',
        height: dim.r + 'em'
      });
      $catcher.data('value', dim.c + 'x' + dim.r);

      if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
        $unhighlighted.css({
          width: dim.c + 1 + 'em'
        });
      }

      if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
        $unhighlighted.css({
          height: dim.r + 1 + 'em'
        });
      }

      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
    }
  }]);

  return Buttons;
}();


;// CONCATENATED MODULE: ./src/js/module/Toolbar.js
function Toolbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Toolbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Toolbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Toolbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Toolbar_defineProperties(Constructor, staticProps); return Constructor; }



var Toolbar = /*#__PURE__*/function () {
  function Toolbar(context) {
    Toolbar_classCallCheck(this, Toolbar);

    this.context = context;
    this.$window = external_jQuery_default()(window);
    this.$document = external_jQuery_default()(document);
    this.ui = (external_jQuery_default()).summernote.ui;
    this.$note = context.layoutInfo.note;
    this.$editor = context.layoutInfo.editor;
    this.$toolbar = context.layoutInfo.toolbar;
    this.$editable = context.layoutInfo.editable;
    this.$statusbar = context.layoutInfo.statusbar;
    this.options = context.options;
    this.isFollowing = false;
    this.followScroll = this.followScroll.bind(this);
  }

  Toolbar_createClass(Toolbar, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !this.options.airMode;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.options.toolbar = this.options.toolbar || [];

      if (!this.options.toolbar.length) {
        this.$toolbar.hide();
      } else {
        this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
      }

      if (this.options.toolbarContainer) {
        this.$toolbar.appendTo(this.options.toolbarContainer);
      }

      this.changeContainer(false);
      this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
        _this.context.invoke('buttons.updateCurrentStyle');
      });
      this.context.invoke('buttons.updateCurrentStyle');

      if (this.options.followingToolbar) {
        this.$window.on('scroll resize', this.followScroll);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$toolbar.children().remove();

      if (this.options.followingToolbar) {
        this.$window.off('scroll resize', this.followScroll);
      }
    }
  }, {
    key: "followScroll",
    value: function followScroll() {
      if (this.$editor.hasClass('fullscreen')) {
        return false;
      }

      var editorHeight = this.$editor.outerHeight();
      var editorWidth = this.$editor.width();
      var toolbarHeight = this.$toolbar.height();
      var statusbarHeight = this.$statusbar.height(); // check if the web app is currently using another static bar

      var otherBarHeight = 0;

      if (this.options.otherStaticBar) {
        otherBarHeight = external_jQuery_default()(this.options.otherStaticBar).outerHeight();
      }

      var currentOffset = this.$document.scrollTop();
      var editorOffsetTop = this.$editor.offset().top;
      var editorOffsetBottom = editorOffsetTop + editorHeight;
      var activateOffset = editorOffsetTop - otherBarHeight;
      var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight - statusbarHeight;

      if (!this.isFollowing && currentOffset > activateOffset && currentOffset < deactivateOffsetBottom - toolbarHeight) {
        this.isFollowing = true;
        this.$editable.css({
          marginTop: this.$toolbar.outerHeight()
        });
        this.$toolbar.css({
          position: 'fixed',
          top: otherBarHeight,
          width: editorWidth,
          zIndex: 1000
        });
      } else if (this.isFollowing && (currentOffset < activateOffset || currentOffset > deactivateOffsetBottom)) {
        this.isFollowing = false;
        this.$toolbar.css({
          position: 'relative',
          top: 0,
          width: '100%',
          zIndex: 'auto'
        });
        this.$editable.css({
          marginTop: ''
        });
      }
    }
  }, {
    key: "changeContainer",
    value: function changeContainer(isFullscreen) {
      if (isFullscreen) {
        this.$toolbar.prependTo(this.$editor);
      } else {
        if (this.options.toolbarContainer) {
          this.$toolbar.appendTo(this.options.toolbarContainer);
        }
      }

      if (this.options.followingToolbar) {
        this.followScroll();
      }
    }
  }, {
    key: "updateFullscreen",
    value: function updateFullscreen(isFullscreen) {
      this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
      this.changeContainer(isFullscreen);
    }
  }, {
    key: "updateCodeview",
    value: function updateCodeview(isCodeview) {
      this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);

      if (isCodeview) {
        this.deactivate();
      } else {
        this.activate();
      }
    }
  }, {
    key: "activate",
    value: function activate(isIncludeCodeview) {
      var $btn = this.$toolbar.find('button');

      if (!isIncludeCodeview) {
        $btn = $btn.not('.note-codeview-keep');
      }

      this.ui.toggleBtn($btn, true);
    }
  }, {
    key: "deactivate",
    value: function deactivate(isIncludeCodeview) {
      var $btn = this.$toolbar.find('button');

      if (!isIncludeCodeview) {
        $btn = $btn.not('.note-codeview-keep');
      }

      this.ui.toggleBtn($btn, false);
    }
  }]);

  return Toolbar;
}();


;// CONCATENATED MODULE: ./src/js/module/LinkDialog.js
function LinkDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LinkDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LinkDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkDialog_defineProperties(Constructor, staticProps); return Constructor; }






var LinkDialog = /*#__PURE__*/function () {
  function LinkDialog(context) {
    LinkDialog_classCallCheck(this, LinkDialog);

    this.context = context;
    this.ui = (external_jQuery_default()).summernote.ui;
    this.$body = external_jQuery_default()(document.body);
    this.$editor = context.layoutInfo.editor;
    this.options = context.options;
    this.lang = this.options.langInfo;
    context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
  }

  LinkDialog_createClass(LinkDialog, [{
    key: "initialize",
    value: function initialize() {
      var $container = this.options.dialogsInBody ? this.$body : this.options.container;
      var body = ['<div class="form-group note-form-group">', "<label for=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.textToDisplay, "</label>"), "<input id=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-link-text form-control note-form-control note-input\" type=\"text\"/>"), '</div>', '<div class="form-group note-form-group">', "<label for=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.url, "</label>"), "<input id=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-link-url form-control note-form-control note-input\" type=\"text\" value=\"http://\"/>"), '</div>', !this.options.disableLinkTarget ? external_jQuery_default()('<div></div>').append(this.ui.checkbox({
        className: 'sn-checkbox-open-in-new-window',
        text: this.lang.link.openInNewWindow,
        checked: true
      }).render()).html() : '', external_jQuery_default()('<div></div>').append(this.ui.checkbox({
        className: 'sn-checkbox-use-protocol',
        text: this.lang.link.useProtocol,
        checked: true
      }).render()).html()].join('');
      var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
      var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.link.insert, "\" disabled>");
      this.$dialog = this.ui.dialog({
        className: 'link-dialog',
        title: this.lang.link.insert,
        fade: this.options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    }
  }, {
    key: "bindEnterKey",
    value: function bindEnterKey($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          event.preventDefault();
          $btn.trigger('click');
        }
      });
    }
    /**
     * toggle update button
     */

  }, {
    key: "toggleLinkBtn",
    value: function toggleLinkBtn($linkBtn, $linkText, $linkUrl) {
      this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
    }
    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {Object} linkInfo
     * @return {Promise}
     */

  }, {
    key: "showLinkDialog",
    value: function showLinkDialog(linkInfo) {
      var _this = this;

      return external_jQuery_default().Deferred(function (deferred) {
        var $linkText = _this.$dialog.find('.note-link-text');

        var $linkUrl = _this.$dialog.find('.note-link-url');

        var $linkBtn = _this.$dialog.find('.note-link-btn');

        var $openInNewWindow = _this.$dialog.find('.sn-checkbox-open-in-new-window input[type=checkbox]');

        var $useProtocol = _this.$dialog.find('.sn-checkbox-use-protocol input[type=checkbox]');

        _this.ui.onDialogShown(_this.$dialog, function () {
          _this.context.triggerEvent('dialog.shown'); // If no url was given and given text is valid URL then copy that into URL Field


          if (!linkInfo.url && func.isValidUrl(linkInfo.text)) {
            linkInfo.url = linkInfo.text;
          }

          $linkText.on('input paste propertychange', function () {
            // If linktext was modified by input events,
            // cloning text from linkUrl will be stopped.
            linkInfo.text = $linkText.val();

            _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
          }).val(linkInfo.text);
          $linkUrl.on('input paste propertychange', function () {
            // Display same text on `Text to display` as default
            // when linktext has no text
            if (!linkInfo.text) {
              $linkText.val($linkUrl.val());
            }

            _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
          }).val(linkInfo.url);

          if (!env.isSupportTouch) {
            $linkUrl.trigger('focus');
          }

          _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);

          _this.bindEnterKey($linkUrl, $linkBtn);

          _this.bindEnterKey($linkText, $linkBtn);

          var isNewWindowChecked = linkInfo.isNewWindow !== undefined ? linkInfo.isNewWindow : _this.context.options.linkTargetBlank;
          $openInNewWindow.prop('checked', isNewWindowChecked);
          var useProtocolChecked = linkInfo.url ? false : _this.context.options.useProtocol;
          $useProtocol.prop('checked', useProtocolChecked);
          $linkBtn.one('click', function (event) {
            event.preventDefault();
            deferred.resolve({
              range: linkInfo.range,
              url: $linkUrl.val(),
              text: $linkText.val(),
              isNewWindow: $openInNewWindow.is(':checked'),
              checkProtocol: $useProtocol.is(':checked')
            });

            _this.ui.hideDialog(_this.$dialog);
          });
        });

        _this.ui.onDialogHidden(_this.$dialog, function () {
          // detach events
          $linkText.off();
          $linkUrl.off();
          $linkBtn.off();

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        _this.ui.showDialog(_this.$dialog);
      }).promise();
    }
    /**
     * @param {Object} layoutInfo
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var linkInfo = this.context.invoke('editor.getLinkInfo');
      this.context.invoke('editor.saveRange');
      this.showLinkDialog(linkInfo).then(function (linkInfo) {
        _this2.context.invoke('editor.restoreRange');

        _this2.context.invoke('editor.createLink', linkInfo);
      }).fail(function () {
        _this2.context.invoke('editor.restoreRange');
      });
    }
  }]);

  return LinkDialog;
}();


;// CONCATENATED MODULE: ./src/js/module/LinkPopover.js
function LinkPopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LinkPopover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LinkPopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkPopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkPopover_defineProperties(Constructor, staticProps); return Constructor; }





var LinkPopover = /*#__PURE__*/function () {
  function LinkPopover(context) {
    var _this = this;

    LinkPopover_classCallCheck(this, LinkPopover);

    this.context = context;
    this.ui = (external_jQuery_default()).summernote.ui;
    this.options = context.options;
    this.events = {
      'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function summernoteKeyupSummernoteMouseupSummernoteChangeSummernoteScroll() {
        _this.update();
      },
      'summernote.disable summernote.dialog.shown': function summernoteDisableSummernoteDialogShown() {
        _this.hide();
      },
      'summernote.blur': function summernoteBlur(we, e) {
        if (e.originalEvent && e.originalEvent.relatedTarget) {
          if (!_this.$popover[0].contains(e.originalEvent.relatedTarget)) {
            _this.hide();
          }
        } else {
          _this.hide();
        }
      }
    };
  }

  LinkPopover_createClass(LinkPopover, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !lists.isEmpty(this.options.popover.link);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.$popover = this.ui.popover({
        className: 'note-link-popover',
        callback: function callback($node) {
          var $content = $node.find('.popover-content,.note-popover-content');
          $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
        }
      }).render().appendTo(this.options.container);
      var $content = this.$popover.find('.popover-content,.note-popover-content');
      this.context.invoke('buttons.build', $content, this.options.popover.link);
      this.$popover.on('mousedown', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$popover.remove();
    }
  }, {
    key: "update",
    value: function update() {
      // Prevent focusing on editable when invoke('code') is executed
      if (!this.context.invoke('editor.hasFocus')) {
        this.hide();
        return;
      }

      var rng = this.context.invoke('editor.getLastRange');

      if (rng.isCollapsed() && rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        var href = external_jQuery_default()(anchor).attr('href');
        this.$popover.find('a').attr('href', href).text(href);
        var pos = dom.posFromPlaceholder(anchor);
        var containerOffset = external_jQuery_default()(this.options.container).offset();
        pos.top -= containerOffset.top;
        pos.left -= containerOffset.left;
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$popover.hide();
    }
  }]);

  return LinkPopover;
}();


;// CONCATENATED MODULE: ./src/js/module/ImageDialog.js
function ImageDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ImageDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ImageDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImageDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImageDialog_defineProperties(Constructor, staticProps); return Constructor; }





var ImageDialog = /*#__PURE__*/function () {
  function ImageDialog(context) {
    ImageDialog_classCallCheck(this, ImageDialog);

    this.context = context;
    this.ui = (external_jQuery_default()).summernote.ui;
    this.$body = external_jQuery_default()(document.body);
    this.$editor = context.layoutInfo.editor;
    this.options = context.options;
    this.lang = this.options.langInfo;
  }

  ImageDialog_createClass(ImageDialog, [{
    key: "initialize",
    value: function initialize() {
      var imageLimitation = '';

      if (this.options.maximumImageFileSize) {
        var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
        var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 + ' ' + ' KMGTP'[unit] + 'B';
        imageLimitation = "<small>".concat(this.lang.image.maximumFileSize + ' : ' + readableSize, "</small>");
      }

      var $container = this.options.dialogsInBody ? this.$body : this.options.container;
      var body = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + '</label>', '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="' + this.options.acceptImageFileTypes + '" multiple="multiple"/>', imageLimitation, '</div>', '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + '</label>', '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', '</div>'].join('');
      var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
      var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.image.insert, "\" disabled>");
      this.$dialog = this.ui.dialog({
        title: this.lang.imageT�MS|�~��;�y�ZڃeX���}�Q��в�-�U�`,���KP�����1�lD�w/�Db	��Q}ԜxQڄcQ�2��X�O�1�8�������䌧��V�g��
k.8I����o�!EV1 @�WF��r|$G	q��p*�I{�;1KK �D�=��Q��j r�����ɍ�D�SU9��"���#,!�;yN�d��|�jI�d�,J٩�0�T݇k����G�&y����:��a$h�֙�HDt�G�)t�%y�у$Y�h���bɏD�Tr��؉W��s���R���~k�a�U��L��Zx�)�����t�g�$�\���+IJV�𵂀Ծ�`i�WvQ�r4@EsT�q��_��;rn�ӢF�3��L{N ��������UGzu��!� @  >�n@.�t���NMQ]��F���_j�yfcY�s�K�P�W��Bh������r���d�tP�RnMd��M���
։{r�9�j�!��<�Vff��тӹ�5�׻}� 1ss]����@�
޿ H S�'j)�&���A�DՖ\I�Σ)/���s.�E�9�/�:�*e�#������]��1���\I��Gq��.C�K3'��{B�?�E��s(汲�䞋��K�>M�yj��- ����z��zp�mY��h�	����<��X�N���},�_�z����v?�ϣ���1?T�;U��4�_S*>�(J���6�� gL���\㺸�#C�:����sY��I�˗$�H4�ܛ��O8�~o��O�{+��	���=�)���r�"����S�ț�V��ӎ_cr�g|d�k�WF4�P~�1�9��<Z��R����}�&/����|gh���wD����O�kn�e�P�uo%���>��v����>d�*E��g��	O�!C��A�^��p�/g��h�I����i���i�����MlkǤ}6����c+Q�D}�]��GW�)��_������.��W�9��4</i��v�����Sa`hₑ��MTw��D"������`�*�D�Vw�o��7��C�����&���q��5��y?"V��g{��K��G�;%K�d�c�m��P��2�������;��s^��_U6lB��V�����b-s�����7/n�CwIގ�8H�6"��#QF�~�Z��q��
~Ƶ��.�Kɛ����Bو#����eL9���5��An1�loU�''��M�=U��#�� }�����<�K�+����a���ٽ�Ɂ��Db�.�XJ|&[�Rǳ��{0*SSF0�ս}{�*f@F:%Y�#:�d`��9AX34V��D���P�[;CkI�N��r�ݡ��QD���B��ntH�vp"�'Jȴq�\\��.��E�5���e%��|�b栍�^I�)���'S�w��Cyv?A�v���KD�[wt��^�|�4ʰo7�:�ٟV�˵�C|@��OT��HR���[�ti�V�V�h�f9� ��x����Ү��~��E��z0|~t��!{ݴQ�o)_U`�)�f�亞eLa馜����0d�zcRB�{<A���o\&��U$#r���4�
R�P�8HR>�\.������#n��F�1Q��w^�@M�L�����^e��y��(3�����	�l��5�
�gs-p��ڿ�S�觴|*,�B["����)"P�%`��f�K$w�fQ��7��ČQnپY�B։��¶(������AiV�䆅��jhs�T3_�?RFH�|r��I\.��Fn=f��+�A�`N�U�&}������ԁ��c¤�blՄss+�C�@�S� �u7����p��9{Г�� �F^y��"� �g,���?O�`�����,[�$�х�3z�Q�G���x�&�����}$�T�<�VM��'�=��v�^��&�T��S�����Ţ�{_z�-�7@X��vK�BQ����l�)�^z��6�(0L�Rօ���y���+d���0L���Eb�'�S$�5(�Vz�Ѐާ��F��-���w|Z��^��J�B{�n`�.��}�֕ћP�������"Oȓ1��W5Ư*�#b/�����G���`(���o����
j��CP��|w'e�O�ŧ�1�f�j4&Z���=ݏ���uH�~�n�o8*�g��U��Z��2^L��G�K��"��r�w�9��ӵR������Έ0g��kέG@��:n�}S� ǖ�2�-�e����4��Êѭ��8��Gʻ/d?Sh��g�'��
 5D�虉�ߖ�.G%9�ۂ=G[:;�$L!�u �@	x.��\k��n�tW_F�
�@v�hղT�J&m��x�����Jv�,[ַ'G�<�H��b�E��W����}�Y��������D���� {`P3D-�e��>ue
:�޺�%u��5X4e�hD�v�^� p8.��M5���퐔!CQ�$�Y�7]Ly�f2�흵��\7Ģt^�@P>�hO��O��~voV�H5�����w�&t� �P�9s77��<B�Ɇ���cz�J"��9ZZ�9ؙ�ͼ�%|:���u��Pz�n4����R�4߄WT���y2;���W�>�g�>z�[�|Y��ⴸ��d��u���; +s�������U_6-6�X����[�b ���{��@�/��bT�|Z������$�<z���z��t*:�ر/�����F�8B�cV����L{���q��T�xS"�"���c���A��
��9�*ʧ/�t�-��l�����K����.��g3R�Ņ�RJ2=خC�z�h�T)�f���������V
��!�}�8�5�o�=�i�ߟ�꒴������`.;wg��T$@�?iU'4Y-��cQ��{[sC]���$��%BU}� F}����� H8��m	ʾ�t>�5Y��n�Tq�\j��P/����V��A�?��GwLR�������ƛ.[�!��P@Y T�XGBף��Mm79O��m`�vd��9)X�O�v��.�2�'}C����E�̛ ��%�8l��	���z�Oow�&�i�7�����8������!���_�``	dc�>R�Gm���	7@����y�LM�xxc$���L���
��f+r���U�J:��W�pv���)��Հ�}��'���≾�o������6s;2� ���BHz�B\v������y��c-�X 7�����I��x� M�����b��^Ӧ/�Xhz&�֜�E�I���Qj(�_F50�����Z!��kX~�u\'�]����AZՃZ���?��ʯ�/�=�e���s\z�����6�,�X�;i*:�Ս��3a��$i#3�@;O_�m�Z�#4WѤ.ܷǷ��fI.�Q��F�C��7��ja+$��9�UV9��%�l!u�0���k�
΀�%%���f�F�ʼ=c�5�- �Zד�gW�{�ӗ�f���b�]ʬ�8'/F/��עW�/h�*�R���9\�e��0���ōP������*J@k�9���Eʴ.�oT쪗t{�-���Y�-P�f������[�����&sZ)�+�ս%��DL�!w^����\�b��{�;{�e�-�������4�����XH����(��|dn�&c�+w3��>�N!��j��e!�"���=C���`�,���k���>����G��ړo��'0Y�/��� "�R�~�~���0�4������04�B���&MMx���I���4q�)eZ`�1q��"��� W_��/��M���)�}�%������}����˯xK}(9� �N��oW�=B����f�R���M_.�Hd����ݟ@�2+޲`J�@Aori�����^��ox6�M����Ҁ*�\U0��m�g|'.g���~�C���b7/��H���51�,|M��f���:�Y��<y�_��y+�Ẋ=����a�,���.S����C���	�
�q[�+�\>&�����X7���GD���Ftv�%�iF�J�E)�Xm����3W����U�s(�j�,Lc��n��=����9�^��1��B$x�}��X���؍m���.U����oV1�;�4]�A�E9�h�����͙�4B��)�0T@��4/!��F���(|�e�(d�����1�v͊��&�\W~f�u��3P"���\9���@^�H���7L�j��0����p��O���8��2��l��F��Z{����d��:��B�	�v��d��c��d��霶���4ň_�$C'��Ӊ%��GFi�ȳ1��	���&vի�?�\�� ��MU٧W��*�0��.��1�	Æ{�Ҡ��b��ɷ.Τk ��k��8W���Nt�kɷ;�8��ւ���A���Z��Fb�~ ��cS��� ����i�n�+�ӥ���������l/gch{wah-x^!�``44P;,]@y=��eX)
;`+P'D�K�PP;|8ۄ��ezbS5b64c�-wE�;:%MQ}c��#@��uhX0l�f�x�E�KOLQK����̗�)*Q_c�!t&1`k�kj (��#qBr9:��R�>�rD%m�*�3b�х�[Cy����5�=R�|0U�|Bh�����l��T���_�:���_�p�f;�ڧ���������(�;z4;okTGv���D(}C!<m[&x�a�Pt{p\nk��u��P;++�^���tK_O@B����¦[q8&w�w1ެ`E�!$?ch��L�R���%;|vs�B���ߎ��D(!���	QB#<�֡ c�vt�*G~�2�O����xC̚��%�Q��>�Up�#��p����������_��,p��x��s}ի� $���A�'�Q������䃚��95��itXnvMIv�;��/CL������v*2Yz5i�mK9D5�or~$>v��>cwQ��%JFp�#�uJ� �'Yg]ҁ��G�E6wN�<J�?� �6K��Wb���7*��L�G��/[�o�4�2����������ϗ�p:'t"�a�TwK.)�uV>3����+VE|��k(�,�A!|w�A�HA��ePǅlC����h�6�\��WZ�u'���˹���>���=BO%G|
���t�Gp5<^�F�ʹ�|�!4|"���)A+�ՃQ'N�f��En�%\p����5҃^�2
�@��0��g��q�\V�ƌ"��?�����~�.p��Ï��wY���w�O��e��I�M�r9������4��Ѳ�8�R��>��55R[̴�:����7:��I���R�����>��To��\L�u�\��c�B�=�l�折�M�M�͝�ԋ�	R3Ǌ��&1EP`9�w^�w �mI7"%��8��wC��f�}��X�K�K�h:f�����齶�Ϣ�1{�5JSo=dgW�a��IL=4UTr���Y�'^[#i�	d��R*s] msJ��L�4E�G4TE|�9�ĢQ��_g/�Cɭo�1>I[�j�/�\���{I|{������ /�RNb�.��oT9�j��7���@� ����F�l[���1�s������r�r���N|%��H����ġ	!S�!��b@��8w�L��x�`�Y�p�+��t�s���٦�����ɉ��`5f!R|>s��w<�%#^}
!��R@��DO.9JֲЃv�(�d\f1�KM1Ɠʠ�>N��=B� kVJ�h;V�F�J��e~��LnM�����E��u�W�0DxE���vݾ��oݮQ�l#��RC��$�<a��v��p-�J���;������c���2U؍��Z'U��D]�A�HD�,
�V�i��΂z/�v�����D)�f�R��{MW-�X荩��њ�S3E��f�rDt$"
��,޺�K0l<H��6���Dz�[O#�q��}k�]��0=Z���o�u���U�hT@�����H=�Ƣ@��*�z/�K�:P�7�2���-	��������Pm��#O�OH@"�Ḳ��*�A�s7]XOB�Mԭ��%�O�{b��O%I���z��:�'t�8|���v��G���Pƛ*�g%ң%��W!�-ފ�6���B�I�N��5dͿ��湲���a�`�89Q��+X'B�����+�T�}HuE�(?f�8Ƶ��Z:��7"Ě�S?�R,�l�]*�VB�LZ��K�ӹ@��o��b�!��0Ë٨�ṰJ�[e�v��Z��s.l���K���s��.�dq�ve��Ul�����p��K�2� �ķW:��HĦ������L�I�
��de,}l������N�U8E`4�xFdx(͞�R?��^Q<p�`q�v62�b�j+��g��sG���� V�l��^�,�_7|�%�ނU���@��9�����/5��!�^�}M�M�K�5�!��֦W���������W8��o3TBmw~�5�.�W_,p�CBо��2-J0�,��I�sCh}꺇���6i��!D�+YWz0�v�H�*9t�kXo����(��RO� Oy�L�았&|ŭ O	���]>�=��T:�kH�.V������3��^��
�dJ`"��4כ�ް"t�¾��7��A�r� UL'��O�!��,��,.��ڲ�`�h�p�fO���9LͶ�����N�3�U;�Rz"i^j��-���EtxP_�0\Ԭ��D� y
gʱ���]���
�IЈ��g�Cp�!9���3yM��^��3�o�(P�)�Մ�q���p�����x>p��'^��4ƈUe�& �S�d�>��-�R��{ޣ�����Zά��5��Q_Ent.�� @��n�9=o+�C�Z �\���0MXM���F���R4�#8�	7�>�]��II��^N�2���B�r�{�v�����Y��������P<D[�u�BO`w_8�GP����#udcg*��f*�rC�:tJt"����[}ʾhQ<�����b�"��O�\nr��Ƥ���qn��e)�t>4QSB�b�6�e��3z(gR��ǘ��g�h�%7E�zI<z�Φ�Tc(��P)I�w5�S�Z�$��[߲]ڎĻd�m�k0�Q��rAh�c�ؗ�f���)�cF���}**�����J�YD�x�[��8ڈ�"�i譩�ӕY�:~����a|l-���0�R��\~�2I���8�ګ7o��l���A�dV�2���jB�}�3܁m���l^�|��펙)��d.�A���~E$��F� ���T�Or�Iո²���#ñ�Y�e���F�J�y�c���:�������-�Z7�O�&S\`��hͽ�ې��>YX�?��_��wqU�G)��Q�v�>�X`�S�&�������I�{����;ks�Ҥ�g��� M8_ �gR�E�XK�=N@��	w����pŠO:5�m�@�tC'��N�+������E4�W���E�1'a�<�ڃI"��pW\���2q�4��B#?�C�>܎����q��$���c(�u��L��u�.�7�������ˆ���L3E����<��_� )�Fr}���<��{#ʙu�/����
�r�+�MƤ�q{���7����(-��U`��`8�]��<��#�>�hl���j��!�����p�J��n��{z�^��b����)_���|���c��� �E7��F*��k�-֗\�M�,C�g�Ԍ�=�ُ���˻��,nԏ]$6��#IO�+��D@�r�onֵ����#����tz�[oW<p�d�^ts�'��k3Wmƕ��-&����O�>Z�N�}G�¢Ny��
7Ò���D
���@�(){���5�쁆����U�5��;b=gS�
˂U�;�Sj&yR}���r�����w"AY�a��
>�VA��j�q�cG;��|Y�⹱Ê_%�Z�kO���+gK)������4T�2Z���&t����%8�Z
��M
��=�\��>��.��r�]����Z��>ٗ6���� .
ׄ\����GJ�	�c��z��>�he��c���1�M�͛-�e��Z��w�� ?����}��u��	�>�h&������B�����Jn�I~Gn��[F�~��%/J�{�<25�ǃ	�wr;����oN�}$���K@�v�[��n�G1���Q�־X������]�A���i@��Vg�����=�!���D�kuie����������#4!�% EM:0 yF�d;��Q	=4L��m�5�3_�G��wjb=Sv�ކ
c`L�4?Sd�0`�y#S��9?V��;ܔJR��mV'#�D��3�Q����s���7�װ�-�ZA�a��,S�}ͼA��N�:�����9҆�����ɬn��k'.��ɺj ��6�#P�cj,�O����Y7��<e��6��:/��G�q���{x�-���¥ߦ��F���
84
����^u�_   nax�#Cm�u�� 8lb��	���E�:rf{�i�"�s]��:Jq�������:�-Z�oO~}t��O��	^��"0>�(E��z�>�V�yLk��C�ς٨���ZB�y���!6�=��Set�' s0kɯ�P�Ht�[H/5�^@�!̝Q�8�,W*��~δ�3�����)]���Rϰ9ERx�f⡘�<�[�?x���p��ں�U;�4b�Q�M{K�@������U 82�����P^8�lo�bI��L�y�@]D��A�T����~�=~�H����Y^����!�ГVw�}�mw9U��?*�z,����(_f�Z�f��Q�h<������b���^��i�T>R��BV�r�X���&_}��2ƭ���y_�6Lɝ���kj�
��Q�DH�Wbν����qoe��$e�Sz��q5�+c�v�.��N�	�~��(�Ð��P���ڰ�4џa07��lbSoƋ*�g F�|�!t}�"א�i@����R?���tm�� g�+Q��9�'��E̬���_r�K�}��O��Nd�3D����Z��'�E���1q��	��͈$ؕ�\O�t��b ��%l�{¬�9��?�uȤq�\Y���;���f���v�8 �� x8��-���	�(�
`K�Z�f�g;��̩Q������ �W �&�`|.c���"O��˹Xr$.�9L�
$�o�3?��Ƈ��X��9�*��c��I�-�s����o��m���Ȇ���~D��|��!?t(f�T�=�f�wCb|Ls���ٸbʑ�U7!�TA��uN�#5J��d:%��	�Q'-�H�6i���N�v�ޟ�<�W'y�ϊ�,q�ˠ\bA�P6����
+�FL���Ix�f��3��u�:�كB���m�6�Ώ�b ��=j��f��}&�i��6�.��1�V=����ֽ��&���T�E\6j��\,��� ?`(@i�,�$�DE�?<'VB���˿�3׌Q49k�p@ICQ��n�Tw��QP}�b���Sj�"�M8����3	����3K�%�w��Y�4'G�U�����	���~2���Z��KK��G#�~�u�=�)�i�x����C�ҧ���ѕ�W����/4$/c9�86�S{/�;0+l'U��y��]M��n3npx�E���+�4�0|,堶i�Ƕ���)<Y�!�t5H0S�<��6�n�Q&mX��� �ӡ��K~N*�W���J;o��ʾrq�vcA��dn��I.��OM�|�$��e��D�'�=��Ȭ���;�Ǉ���^Hf#����L%H_z�qJ0�;��W�jR"��.���<���y$W�-�
�&y��+0�;Ն܍٭)�G�p��C�zpaW������\���c#)Q�0"eC ��rT�8p!��X!��m��#�G�o'(�����!�Gꪘ�,n�yg-�ד�o�;��]r�,"+�gˡ�~�l"��4z���Kû�V�i�;�AѸ�)�,$��������Q���J�{SZ8_,�V�vU���+g
Gö��^�6W�@VT�L�����R%g��y+�XB��{�!!�T�*��f�(���fK�����ێλYv��?1\��:�Ҫ��zq�E�xY���1	�DI�����+j�VC��;�>Kŭ�hֶ&�0���o�WNɉ���I�t��w�$�(H�`���q����ZG���?ӚZ/7���a��C�z�b�> ���t�������d�oT��p+MD�4̙��t�zFf9�$�vu��Ct���A�g�?Sh�<H�'Wߺ���H'ȉJ���Dt�^[�?��><L��g����k�g��`Ƒ�A��
�Й	�M�p�ڛ�w��z'�ҨվSJL��y�'�4 $	�
X�w�����s��$���o*,�aOy�U��[R�x+N��ZN���i�#�� �	�n�g6��Л	�K���ڃ��V9ꡁ�-IY=F��A7�~�(x=�F���F��U��,���D�b�^�k)�S��u/�ޥ����>���B�|�iIt}cN�O}��ΰ�v^mDt�2�C�=B�@Vof��šխ8f��cMm�6L��1�AD��@vo~��E����9�@�=�8��h�Ú��R~���(� �K(�d�H���P��.s\����A�3:�K�/G�2S/���f�/�ޣ��@d�bQ����V^��R�L��A�5.�E�:�۞�Nԩ�P^赎��@>-��&�@�Z9� ��"���� !]�������w"^�O�O��4"$>�h��5�ǩU��L�0����yO�2�ب�:��y|�Hܼ�.����9䡬@E�Cg�jLQ�O0�`��@�M7�(����*��+�r��҅�k��<����]Q h�I�N��*N���8
�����5��E-�v�rCr)������Q��!z�[W6��D��e�c��n+���ʃ��H�6�����gu�����@�<h�~�}�k,w���g�W�����7dp�O�ߊ�iqto�CL��~��F|��C�*��Wo��Fs�b�鞈KW��r�X���N���ʤ���3?�76���>MO �D��h�nJ�AIhqh��G�����/$1�:0��cb��1�ZVp�� �}�/�\���bB�.���ӑ���i�I���4k'!G�4�ڵPo�Kc9tRmѵ�?�ҴZ/6�B�J�m^%��}���wVٹ�
V	�r��(�<�	h�${���r�鄄���g�Em��?��3����;l�X���>�����8����J�vT�=�ؖue���������~�}�+'ʎ&J"��ș�3Ga�6�NwG�lJg�X[����:+��Q	G��}�&#W�>�f�7|�ۆ�~�ÍԼ�z���tj��L(8P&�\;� ����I1^�����,1�[&��Ҙ�*�	v��&A�t);0�����J��3?d���,�����R�rl�#�1`Mx2쩞I��]�p�+AUr�/C�������1��I�y��3S#3�UY�"�����X@1ϐo���fOq���>�D��	>�T�"�K��t�U��w¯���9P���L�� ��/�O�lg��N�������Fu�*��"����~]�u���Xت[2O�G$���P���3.����(�Mʼ�q�:���f�Хۼ]����>c��	C
F�;� L�7�N�>e9����E������`/�MB�5�{c�~��s"����T
H����q�@O�m?j�Fë�̡y%��=]��)�U
)q�~��1�\� Z��������%�K/�:HGsM!���	��c}rq���4��E�}!e@�r��'���^���3��V�ydn"�P˞���z��gk$�۴#ES�ο�d&�GK�0�!Zα�%Șq��U��>�BæZ��g��:���/�^��$��~��ُ7���U��
��sM4�� 
����:�L�s�gb�6��I��9����&ꢵN��RJ��X=��hu֟&�"�n�4��{�&͓������԰���!`Qqh��0UI0N�cT;x�/�Z!eZu��['C?�ў�\s7�q�\D�boX�FD-�է�4O�7��x�VDK�3��M�y���z&���֦����ٻ"�)�JQBu7F&��ơ�<4gw
'?(�,�^o_T xn��@	q��z\d3)'�^�qZ�^�s7±�F���0DgN<�S:G��sn �l�G7�q���i*s�P�8�ʴ�7�X�=b�����'���� �SDw�a'�icI���lw��t��N�tO�oT�i��&�!��A��W�����d�N����N��+����@���7�>�E�8E7��R�����į�.&�w��Kat_| �2���S�5KU Qo���s��0Zdo�"�a�^� K:XT��[����<,[u�iӏIQ��~�Xc�ɔn�Tf�[����%Wڙ�����:��|�cҡQ<��ˌ���@�c���<�Y#�ҏ���P ����~:b	����ؕ���]Wl��� 0/# s�gun�u'�`qxx`��`9�� �Me0 `�u�c�s��F�Yuql������� �ՋZo{�/ikyh0��` �Aa��z8(b6��:�
�m�iq.C���V����cI+�1J��`?M�$j��,:z�r�n]��f��jb����O�A��ӹ�j�j5Z�a���KC���=2摏F�Oh4�\~�1�91��D������`���K��eU"��m�����M^�5�C�437���2������FxB`�Fm��&_K$�G<(��H�1�lWQ��6�9�ꆵ�5`�^����01xc�S�����/%�ur3�!�^W3q�7�b>�Pĥ�t[0���a�:���~J�O�3K����{�y��%���4{3�h���Y��M㷚=���XF���� _�:�&Z�J�*��z�&�عTؒ̀�_����u3�xRڴcQ�E+��.z��Q~؊��������W���
;�*�'<"�����q|����;#�gOI�шM�=lQ�Y��F�x8���nA��;���z�r�3�It����B���?����q�\H��>J܈zmb��)i���;�Xr�"J�8��ڂо����F�ܺM;&Y`$��q��_-�xd-�D��^�w��GKM!g���&����|�D6 1�,z��Bqy���7Y��v��7�OI�w[�x�����Aȃ1��R���yq7����·Z� ���{��k�dǈz背V�y����W�>/��'�� 7RԹ�ԯH���5�/
�?U)k����_���M��#�R!@��/2��X�2]��@D�'�}������0�Շ��B�ǂꟍ,2X� �/J,5�}R#6����;xB��o!?�wg�{K�u�#U��SH��J$���}�Y�B��N�A<���������u¦�I~NwBy�Q�Q�D-
	O\����2��O-4#Sj�e	�z�dUX6`%�0�A���su�*�M���#4�Uk}�����TR���F:�Ti]h�e���1�~��Bxz��xh����/�_<�9�*�g=�����_��B����?�>tSe��5��O8e���+ �N��}�+-�B�f��	���v����.�?��s7��V��P����a�b�8��M��!bԁ�������VH R.O������|NG=�%ִ:A-_�zP5?���\�XU��!?q�v矞`=�P�CV,���z�0���� ��ŀ���,@��ݶKu��1�,v�ޕa;�G�D�i��*�F=���ɰ���l§�	���@fIh%-�>��tJ�Ob|�i�G�7�]��b<M{���í��ښt�&Ct�$rDq@H9Ϊ�g��~va|3�D{�]�J�VCvyKڽA��ѵ��WxxB�rԳW;a<�R(>��� �OC��$�{2嫱S�Z�:��K�o�E�����r���o���K/(���Y��?��~�XK��C��<�?��34�鋼��pڽ�K�l�/<|Gҕ��﷘��h`G�3SZ�(�:NX?�-*֐_oֵ�M]��)�m�U�,�	�:�å���<\�����X0_W=����zJ�|3�����A�{��|GrJ�][r{غ��m�Ow��]:�L6���{-�$�SV��&H�,s�&փ����yڙ�ȄgC<��َ��'��@6�R#�U4���M����3L7�����	֍A�C#I���:=Gٱ`���%��?A���(E�v��M��ā�k�)���&��r��G����:f��L��F��PR��uߗ}��啳�����,��4�:�9oY,��)�a4�ۆ�0�\ڞ�q�J>#�4���+F�k��C.���@u�M���M�K���pԥ�t-��Ȧ��pj�Y[�J�^){�)�&�"����Ur���􏧫,i%�7MP�w8TMY�xqڜc��2>XV��{�f�R��+}�Y��������GB9���D5@\?�0P�u�
unn ��F��
��D[KCOI��4��S�Rq|oní�B�����/apG�3B��w��RT�tt&�4���i�e��s�9����ֵ���9��q,&��.r����-v�zp�h�p�y�Z��9��Ʊe��0�ۇPڭcw��i�Z�"��7�Ot�4��ɲ��}������#W0Ɔ�,%��?H�^�|P�2�m�U��	�^=��䦮��l� ��(�_L7WK������є$A^D �}oWAJs>(�Bʔ/Qynl?տffq��DS-W28�Y�Uy����9[,5��Æ)�rX�^xA�C	���Hz��S,��k!�`f��5�E�9�j֗&������M���ݘ7ؔ+Nz��Of!/���a1[��]6s�a��{A���'���Z�8�PY�G�}b�a��	��xp�۲�`���g���6�cB��q1���̫݌]f�[�3���pB2�而����j�c���A+P'W"����Ps�T@G�]I�+��M��1m|q��5���!Θ�429�b��M1��1���~n���N�N�ڻf�>�hr����Ө�F����}�Fj3$����PW�h0h�{u`�p�Kj�ll��'>������=Y�Z�|�d��Q��(��������B�����=bZ!vK��;��SV2�-Y2�E��`�$��IrIM���J����q�T e�?p��St����'
��c�!�\�rc�I�z�ҝ��� 
�����tc"@�rd�g~^_�d	d��n��;i��[Fx�J��i�X�I�(ڵ����b��ѣ$A�q��?Ս!+Z���M�:��1�+4���aɶ�����՛]�7^Ļ4KoOTy���W�u�_AXo=y�}È˿�"[_&5��5�YOC�9M}G�>��cw<��5	_���U�fj�U�;�O[�y��:����`��a���LϨL:5��Oև!֫]�H)�����>�"�޲�M�Je~c������m���P}~�#{q�O�Gl�Rz�G4h�������`�[VO�\<l���ԥ��jp��Lv�P��iBQY�o�n�Z����M2n�����Oz���4�bo=_v��0?�Tɧ?
.	�苉&�մW�D
f �0u��]E���l?c��:V��z�5�9t�l�fߒ���\��>��ߴ�"#G��/��<ZgB�Ba-#�T��\�H^��>o���D���>d�b�Dl�~ѵ5�?�ґ�G���
����xo��T�����/R�7[�DѯI3t<��Nގ�N�a6W����2@���O|�*A����,����
�����P��#�P����"<>��F����t3o�nR"�7��1U�0j��@����k=��O�a�k�7Q��W�Y��ݩ����Gs����*g mU(�޴_�"AL�I �D-���T&̭Iv>+������["h�%���c�����	5�ջ`��xwu*'��8��_�s`+����������$|#�n ��b+)F�w.���X�xp
bŬi��f���.U�������c)�Bm���_.IW�r^�~�F�>Sh��N�6�դ��NkR� ����5���@U���Ln�I��ӫ:�k*�:�����U4���,��LC}O�
�!0��%���iTW�����j��Tu�_*�'t����]�����Q�|JH�o��DF�?���+���4�Kȿ��p�[�gp����AF?�����6�lT�6{
�D+[���v�/��'Z�0����1�W/��\ҽ��������q��Ex]*E̮��)�7TL?7j�AV���^{$v$9��7)�m�lb{�7�1��Q��On t�����ґ�)	�O
1��,���bxb��bM�t��}�/v�%�c���y���g����X<����E��}24���FV6���x-�j0��$� ���/��!�'����]��p���J���}g�!���VT��Cq�~�����~�l�(����+XJ5���Ǆ߬�f!�3	�k=.' O�v��V��hT;p���"��G,_�KA�ʸ����R'!��&�r' 9�'j�{��]Ck���ϑd�/o �o�{�q�
��yk������r���!�l� 	~"��M�����4X�?�:�Rs��<�u)f������Z�8�ʰYz�1ss]�����
��gn�<P2�&��A�HHGȼT���#כ�a2�Z�'�/�'�l|�"�Ի�������%�ߠI@W��I4��;R�OuI��{�v�^��!(X����M�֯���{�wj��-MD���� �:�u@?�5^���L����,Y���B���y;�C�s�慎0I�X<�����xp�rC�:�>�3`���9���>n���[٫��K�<^�"���nZ������lH�)���H��E/�c_��c�h-�R�Q؏=�)���r�����	��������9,5��34-�,�%�Zk��bT����GO������k�,>����3mx���L�����O�mU�b3�_�s W���>��v����.%H�>@��e��HP�<^��F�
��x� >����˯�=➻p�����9pѭ���j+�7�]�A�Ml�=��W������g`���5��0jf-�Y�k����?�Ui磐��Zx=��I;��@^F����`�F�F�pn���m��,��څ�h���)����;!F��v3���@�=,U�e�~�7ăI���p�����.��jU�K�_@moX���D����md?F��?(=�WD{Iف�[p
�h$��A\��O���Q�D%߮Z��.�\а���N�Eٜ'����F!x����'�D3�  �%z��M�7ڌ#��U)�I���}��'����qY���������Fb�Q�N ?@h�A����4koDTA*�۽G)2�d4Vj0-P�jU� (��{^6wZ�����|�^lI�N��3�����G_�����'iE�pw&� ��v�RU��`}��_�>��� z��5�6�关� ������.@�g��8Z9A�Y�ʋ�iU;Δ�\*�O��.XWu�i������*r���D;�����q�ti�V��{�+o�.�=��������4�����K\8KQ?��=r��!� 1aQi�a�w����bhN�������{!�`cP�0=&I�g��{G$��>hgi���8�T�D�7Hx�[a���#�Ԫ�e��@�t��"W��H���� *��x��pK�����E�q��5
�Y�mb-l�����R����j.'�UX$�ۜ�`d�yd��rI�@5w�`�r�N�Q��V/���E��⊊�e��&����>[n
��Թ��#<)�'�	RQP�{5�SK*��Iq=l��2�P�q��A3b�P�ƍ�]����X"���}wD��h&r�X�nZ�CI�S�y5����x��1&����&�Pi��~�G�3oZ���?N�p�����#�+|����{3[i��I��Nf�-X�����5?�j�F?�T���!Ǡ�3�^��<�O��Ғ_T����ڍ��p!�p�/��,R�TT����G9�|�2���|9n����V�u���u=��Y]����6�"�Qa�~�^�	ډ��S��L��7J���}؍V��O��:�+	�~�+�������Z�����TfV0��h�s��f�/"j�M����W���m=���!������� �	��65)�N�ٻ�1�.�l'7�۫g�Ș��2rQ�{K�Dx�?tAm�)]��͂Q��?\�����e��4�v���X��C���A׌�-3��5�
��yi�dE�!��M�"�z�!�����:��Ò����f��Mͷ/q)Co��r�0�V�A<OJ�M�ޙ��̞*@C%~�͓+H_2;�X/@&�oi�c|����:��:�O�|{�-���Vm>���=������Gb�l#?ڷ#��@y���|�M�^�3�M���6�����떄�OǱ��N47{y�e�P�tk����w!ޠ`@Zqj�:
�7��Z8*��/������Ph @�2��0L|2�K:����ԂBs��7�W�hKV�F�O��b6,�Gx������ht�\��<s77��<	쐜�ا+p�\�^�@9	X[�fNߙ����A/rּ�u�P>�([0� ٺ��H�xS��T��Giʖ��w�n�Q"�[�(��������{�S�pE#b��N�����^G6<	�E��ޏV�0X,���r��,�.��Z�5όY����J�h5��U�,��}-.���}�R�Ź�
�7c�)A����QwΉ�4��R�cQv�m@���k���WS��
��k�#���9�j��"鮲��_��Ȇ�`��g{逅�RF?5��S�2�`\�o f�#���[����H4�����)�)�G��o�=�i��ޫ���L�����}.#S.��C]pA�:lT':K�%�cQ��{d;
ǂ�3�
�	.^_u� H#�[���RkZ��{��Ms7�h_�t�'�q�.��2L��͕����W�v��D:x��EĮ���ϕb6k�d��A n,�Q\h����0d,,��7!�lr���/BV��:��5�`�u:�ľ֡o��A��[�p\��|z��m�=��#r�}�~�l����Dz�����ӥQ	!����p(Kd�0Q�>9���@[HN��`��5�/�2=-,���W���C��(p/�����C:���$6�K_��3��ۀ�x��,�Q������2�����~Jo~a�I�E��z�}�ٵ���8E�=5n�L7G����A�A��x�V�����y�P�!��z�\c(�����H�l���Z/~�RB?6���0A�u��}�i9���bZ��Y���C�֗��i�-�e�X[��O>_a�������I�$�W�?kh �ʛ��cs��g j/�C {A�?�[�>RηPu�Ӓ�ջ'4��{
�	ZS�X���P��+#ga��1�AYu��j�z*g����a�6ŋ�-7م�-X����=s�&�1(����+
�<�ߋ�g��kh�	���8cjǖFf����p�7)�f����y�:��>�ګ��Z�E���
��9QPw�`���Pݞ@�W,���;�4�V���E�+W�/������u����az]g�n�����L�7MR���M��7�1��[5�o)�r�+���� ���/�����C^����2��=`q�.i�d+a��?�H>��b��L�R�Ũk�z��r�+�ýg����cɇ��S�,�˒iƔ!%Z�1ۍ�o%��*�R�Ń+�r�����54����HIBhh���G��Ke� |Qw�:}٩1�Yր%M_��4��
���P�[)�f��������؋�R
g4*��%U��k\�{R'T����b�� ��Zp�Y:�������w޸`J�i��V�F�
��}#����퇀5�AW��y�"0|F"��0V����;3='�����Mx�k9w��d���#N���py���0}�D���=�)���2�m���#X����M^���L?��}F�~�])7�I��ΦWƱ��G-ʥ�Ao�$�Yk��~�b[����DT�뭨E���s �1�i
`��h���6N����HM�G��;<��Z1q� ���r�����\m���|,��Ջ'b��4"�	�[]p�Q�������o��!�iW��<?��	���f"�*�g2������\���u�Of�d���fZc���nIn���	�E��FY�1�w��1��j��k��_���v��%��e����>����/��s��O�7݂jƗ*֧&¢���
��ɒ_�cAd��N��a��E�J9y�^��t߾���|r���q��\��+����E��y���.��y�Z��k�Զ^�|����&ǿFCU��.�w^��J�6�.��3�OW�Y������r���Z���Ak��w��vV��2���C�	�L�r�`�������򠴢���� =
 i]&{:#ts�45B^4Bf+![w>4��gK
Y(2{z_-�a�?>geO:#&"����UE`>ff�)g�;0J5t}}��>D��gE*\zzQg�2��E�GYA�����ߍ�%\_}�,kiy3z�jfKa��!G@e"-��^D]�3�[(hp�y�f}!����W7����4�'U�-#N�a$�>��@��8��m��h�/��@�H�p�<i�ת�����鎋`�`Bau,?X	t���M`i:2qQ $X�za�8T{21Wt>��3��A i{5�V��P�3C@\Zr���F���Pf0':eG�>1ìp^�B$#c8C��5��K�G |bR�K�ҽȈ�n�Q44 ���Fjy�ȯc~�F.�+rm�-
�Gǲ`��=ˏ[��v�[��(�Km�8�w�燕h����L��>��i��:~ɫ���
�_�?����}���������6y��"DiE`{{Gt�2��MDO,
ER�۴��i;!V\rt3�0F.� maD7t՞R*9��/Q`�>�sC�v�_n $����°��<qI�!MM�>�UPA�H1$��w����y*��H� ��N�x�}�������C����ɑ�y'$p�5�`{W<v�HC2"ԝ��+@A5��e%�3}�K)��H)��<:܁gA����`�#�@�%�Z�y!��Ѣ�로>��� _p
ɭ]�z��DTlrs�Fř��a�lk6|>���bK2���X0?Z�v�E5�Dj�9\^;�-��6ɁD�mE�]��*����!�UM���>�������x�$j��N��0�	'���y�_��E���I�!m�ߵ�q������7�R %�� ��yg8���*\�a��[�_^"�0��ʏ^���I��9��*��NN��[��g2�A�n�Jܪ�Ѭ������3R&헟�/7�lt�?iM�sb\`��8\��8P��'�}�Y�
��[�<u)�㾖������!$�	@U}5~3H�;��]	qY!0 ]	'��tPKyXb;�Co���A7/I	2�`�q�4pJ)=AU�z�����^gFo���J��.�d/�Ol�/�]���?Kgp����柞o?�~Np� ��&Wk�@�7����'�����{���CN�<]�����Q�"�!ݨ�0yW���������-N�+k��mR��v1�2E���i�~�z�
��1�����綇�����x$K%L\?9��x.!�`{^)Ko��SL��rQ.}[r����c�4�
@r]a=�Q<��Ш�9PN+��r�^c_Q�hm�F�	��c]g��sPݙ���K�[F�:�L�y`B���w陵�!��H�6j��NJ��Z�u2�&�W�>.�Z<�W����-��sDܧ��[nN��?Z��O�/B[�G�m�鋉x/��!�����<{� �P�Q�+q� ����Ʌ��a��5�.VS~#v\��H���uCq>[��f��z�M6L�l��rh�K��!.]���9�>İ��yQjn���T,���C۹b�3�
�<P�:����%R������ʉ_>�X�2U��&�Oδ��R�V�=|_���R@�FҮ��!�Z�rk���]K�~��0��n�dp�l���)�����(��7�/q��v��6��5ě�!�������<(���O������"�v�6V��+j
`����#�Z�t	�	fp)�W����Ich�Fe+���MV�^s�r�Up�XN�PU����̳��=��-�n��xWZ��S��&�����0�q�Y��uvm��M���P��.�dq�\1��d ��f���;��W�<�=�ΉKd��AƱ�ɖ���f�R�D��+7K���Ò�r�daK/}�MUc2n���TTGz��PW)/�{i�s}#O�p�i0-��z��'_����C,�:��!�`N�Ci�;���Y���$��xIڎ�2��0#��)��!��B�=�h��äR�����،��>SwEދ _` <ze�"
T�;�WN}Gh��yͷ��.0]	�)��_N�8fE������w:��Gt
�Uuj�%�\�?GY��\8*��ɱ��Dm�U�G�)N
y�^����0më?@wʁ�D2�m�U��k�|V�Ə��3����X�1p]}z��!ə���cT2����� ���G;J�eLg��F�q��\��rkT��޴�k�!�%�#���)	ʹ�����Q�0%�C!�Pfx!}���q��E��I<vAS�;Gٹ5���?fķS�ĉ�ƍCqB�I��Ҹ-��!�jx���yn[�����+:�6(�y˖ֈ���1�����o>`��bB��#џu�):���n��/���3�������F����$��gHx*z��o��2�ko=ov��p0�@ъ�7J9ߪ�����.q�\{A�"��4�����B^�2�M���^�v�p�g�٠�����މ���&�o�X@C3E4@�v�ޘ�;eFb7
��q�IO�,S~+��H��N��r@=�����y�4�U�mJ�<=���ν�58��g<�k:9uQb�f�<�;��?X(��Ø٫p�v�}GR�zI&rҌ���Un��B.	�C*Gf�T$��3AH��]��_�ƸRz�}�)+���FwM� ����"���b�#���8x*��P���{�{d�$z�E�t�"ٹ�[��`������O�'9��f��fIoc���&���E�Qu�U�Ź�g�՘"e��v�R��0�dV�F���/2�z�!͛���'������j��0f�_���vIeh��^�q�� T�Or���̵]G���9Y���_�|���7��N�i+���s뵶������K�a++��p���"�׶�0[S�4��F��#SR�e����9�%�Zo��G�5͕��ñ]�;ч��;ksW����	"���W^pPg�oI�E��p ��7���.��t2�G��7d��N�Lf������WY�G��N�>cc(�y���i��pWV᨝/w�/�%�Hf3�_�y����/��&q��u���c(��7�G�ְm�.U�����ʦQ�A��R���JY|O����8��KB�;;w�WXs�I�r��cyj��&�4�����J�r���oG���r�����0�U�_z��B�k��g�M�x�= B���Z��7��b� U�� ��?R3���k�J��N�Ll���m�㊕,��O�A;��O 6ʏ*�5љ��?D�1��<�Օߧ���ڣI:��ww^��P'PJ�*�T�n]�f�&(tХ����L����03�_Dzj�%�Y7?���k3Wmƕ��b��S�= �6L�W�0@��~��Lb����{�DY�B�I��($P���h���Βͅ�q�@=��sMxii_�ՄU�n�p<)���"�����uWe?�7:��.G{�OHf5��-�`�y��3([�(⹱��a�`�#@���/aT(������ 0�s]���i&�����@s�@�U�&^��I���#��m��&���Ϧ��{��'���i���_��@Q�	�>��.��m�;-��N���U��ʊ�$�1ݖY-��p��!9؞��f�8�u��	�>�W<n���������) �[rOi��Cd�|��4L��/2Q���Z�3y����8v���7�\�ɢ+�A+�Z��t	�˶U���g�F�k�SZ��O5ˠb]�����Y��2�*��13{{���������,Uh�;@P"uMbzF�q`��``dn.u��m�$�/N/l�N�����3f%7C8ƛ�  /_�`6z0J�r%�cj��qcY��0��`�V�zY(3���)�A����Xo��-�ʢ�8s�5�|8��H�!��P��N�M"�����:�֐���耊�'��i.Lbۑ��ya��e�#�~y����Y#��y��f���}8�Q�C�>�N��{o�9����к���w���f{K@C
I�ξ�;%�QlEntb�'I)�(��_VAj8n��DP���E�=p`�}�^�^	���,[J{���ד�_�9�bF�?(|c��H��X��Q]}{�i��2�1�S�{Kk��	�ڟ۽���U�x����&>E�9���B;:�m /zt���EW�Nt��NT<(�KF�'��Y�b�~u��{���;�����T@�����FE~�'��K�<�H�#iO���h�����:B�f+��VU0E�
��5����0R#2���/��FE6�wN*�nX��Q�n��JO��H�q���N�E�,f�x�����ౙ����D6�z�0%P%��oy�']�� 4�F�E��Q�1[�i�⥛����X���(B��NJ��S���Y)�K�b�����rJ�ͫ��;u 2����D@X�N������M*7��t*�c��.s�!c�p�1���L�v��'�äB����;��g1��mpS ��x�gC]�f�}Mgf�?���M8����EW؜�	�*�hpU�Nx�}�_�ٰ�'�����Ӌy6 �r�T��:��mO�t�����{�����`�jK��y���(̕�W���Y! ��!*�6|ҹ�:�_�6��7����'�����)���`�+I�T=`N��\'���	�?�XV�p�*�gr�놚�2B�������@"C��We`0���K����W~#"�E�4>�9�|T��U��A��@ ��m�r��(��B�i�1�M���*��u���ӛ���;D��0��J\@>YJ#�K�q�D�w[cuW�׳��0���QJbu�T\A��2M�?L��{{{���[{w�J�:r�����N�"����&�P)u��Z�b���\A�@+��=��[J���$�l��i���i���^���n��<Κ��b0��(��5��D=n�9�Q�O�3��+�r�������|���_�'_B@["8>��G��Fmz2f_r�,�.�D �_r:&M���ۣ�!ؐZ`dc�a	-��!� 2
��Mw�-я�9�*�gqT���[R�`����0D�1W�|��T�:+6�U�����	���66�בP��cK��E�v�_�=�)�&�b�Լ������Ӗ��L����/4$/cd�te�hL�5eh��i��K��6;39�^���v��0|,���t���暏�)xA�bd�^@H0�<E��6�n�*T4��Y�����m](�F���Q+~�IN���I52�,ћ1#��~��PW�|�e��)��A�H�=Ƀ����2͒����Lr6��u��EnhQm�_H���^�@xwN��[C����<�l� �H?��+>�h������f��`��O�qp<m�󛛹�%���e%.Q�uZaH0��nE�$b��D�G�M��,��z&'����B�\����!u�n|"/�Φ�*YW�;��Y=~�.0� sȯ�c�#��$|���\Ʋ��f�i����~�;�Ǝ���Hb���K�uU_=g#��1�Őbi\���T�`�%�XH���J��$w��>:�P@��#�-a�A���2�m�Ճ'Ⲏ����Ω3��p&RA��-M�,Һ�3m��H]���F*�M�̀�4�pj���#�rl���:֫Y�*�¹[ � ى�����z��n�$��Ld�}������A��õ(ϔL&|Ք� ��U�7�c�#=�ؤn��Ĺ���`�m^��~;YM��s���E�5�zN)|�$��v(ﮐ�G;���F�z�oTw�.H�<Bؒ��
?����S
�ZS�4Ή싒"'A��o��ƀ y�W���!ّ?�ЀP���Y��y��Ɯ~��o|�¤��H��6�n�XQG[J�O�a�����ASht�9���o-t�3Fx�f��DO�+-W��AC���_�i��o��>�b����Y�B�ϩ�ǯ>�^`x����$VR*8����o�;U(�W�F��H��\X¸i���i�~�}�l0���'C�������}糋�u�]8,*�����ߵ?I}t�-�^�1 	�JYhwʡǦ��rqg��gKx�6GS4�-�e�VS��kte��B����p�&�Ma4�D��hg �ʀ��t��a�`_�g; �E�6���R��"4�����3:��@�.\�|���f�2�ݢ��Fx�hM����|_Չ�V��]�1?�
�1����}���}E����^2,�� ��{[u�u)�{�"����HhE��L�ħ��#v�I�ƕ/$>�)��|�Ե�SEu��@�7��-ܟ�#�-��v��1 �bŹ�/EYۂ���qՋ�@E�.�0 Z��b�j��W��/5�
����!��<�.݈���(A�r����jv�I� ��&���q�����q�^� u�g�%^b3����[�U��C5�@J-����~�_��=���D���]��x �����}i�����t<��2�a�k*f'������7)�Q��޺Ql7#��1�l�T&y��V�!���]|��J:�oܱʼ^.�[�;�Y���H���ᚡ�vF�xf��
8E �\��/�i� 37)��C���J��kUjv�89��gq��*�VJ5��x�d�2����+O�}���ߐ���O����Y3?*>QX�x��Pu�+$oq���?�Sԩ49SY��G����C,Jp��m���w%ץ�i 	�>��{�.�v�ma���0��܉���/�="����\5͸iŒ�G�:+�U���1��� ��8̙��H�>P�6�ہk|���ʽ
�����6�o� ;��cBh�����aAi�k�yE�K8>�^Z����(!��
��9�'5E�c�)�d4�֕�g���ڲ�6���tv�^�T,q@x��Fb�`����D(Y�Y�	���o#�}r�����$U�K1��o�;l.;�Q������0F)���d������X�>&�Zn��;uKx`괋<��8�5�oj�!�������2X�I�� -kz�[K�vك��*�L1ͧ(�Ϗ%Ir���5_�+��@z�ZR�5W�K���-�U��pݧ\崄:�������`��8Cj��_��!�D���F�c�>����3M�*���_��
I�M)�����H�v`���H�t�3���=�i���f�����`����%o��CB�v� [�<�T�|)?����梆d9��&�[i6J�2��#g�蘰fM����q��}(>�Jݜ���,q��s!ݬ$�DV4Y�4��3�X���|X²鍶ݎ�� K�P)�uZ66w���E��BdZ2��u��P�4`pO�2��$��� OZLOիX��� O�nmy?�����J�r��gk$���7X[�ڱ]�~:�]�7�'Pҳ�v�[��U��j�K��T��~��k���-�S��x��k��ٍI֡��U��
�7|��M̊
��h�\I�n�bc�7��KƸ�7�=�����HJ��Tb��8:��p�p�b�3E�'�=�i����岷D������hfXl4*ٜJTt:�ktz�(�dZ:��fj۔ݰ^?[�}�LM�x3�nx�厼H
��Ej��[(�?!y�W�Y��y�Z��|&���孌���"�a�96id$(l2ֿM@6BwFK�PcD�to]-x:��u��sYxzd,�T�`\��DP:{__�����Ĵ�txN�j@��D_7�ON��N�u�S��y=`�<�v���$�_� c�����LCM�ͮ��<�Q[	q�''�CcI���1YU��!��G W�?Q�?�:��s�g(��Q��\������:�����J��	w͓��F��V�r��@�};e��O���������@ɲ^_| �f����2?Du���9W���!7�&�.�_�RA>ET������c��+R�9ݝo��1�5Ԟ�u�~f�Rڅ�RG�p4���V���:Q�:��%�c��}�����ƁQ�Y�I���j��f�Ҕ���Ye��F�J�~1M���ȟ����TW�ߚ vubcq�l~!�i1�90w%��31�3��[hus'�o�c�m��J�%<<)�������0ٔ�Coe�yuv"k,��8l�95��?4(rL��u���g�"'C▣Ө�����eK!���B9*�_��< N�K�BxD���~�^B�����2����m�e?b�n���9y���.3Ȑ�CO�Fq6�Vy�.�m#�%��C<��v��:�׈��	��qyզV1����������k<eo���:����ˁ\i0l�pa��s1cYe�\rf��c�z�6qZ��[a�i�ⴴ�<?0��T���3:H+�Mҹً�c%�#p-��&�^Ppx�l��s&�R��'S4ŋ��7����Or�}I����L�A��3��K�n+y�4���v��H㹉,a���XQ��~��)]�5�9W�6�n��b�]�	�͑ʦ���O8z��jxJ��"]Q�A*��o�N�L.ߗ����CR����@�%�Q.|��bnc���G�G|����kj�:I�Ӓ_�rra�%�w�`*���gx���?�J��{�PG�w�}+�ؾ�=���d����8�\@�� ��ex���g*��R�(�~�8N�4��̀����U�
���o"~<A��;��_�A-26���p�x��bKii���s����%�Nz�uv��Fp:���7sC��v�^�*P�ND�+D�s���Ȍ*��~ϩ ���nIs;�� ��]��^	�QZ:�U��:��v�%��c���y��b���6�	�C~ɪh��,!�������|�{z�oL>|�բ�t���u��L#�)Rݛ(t��G�4N���B�2�@���M�_�)֩����B􏉦��!?T4d�>�]`ot�[T7<ؗ��Q>��BdD�,=_�{sR�b�>V��~B��l���V2�
�Y���^%}��і��ᒎ��Gk���.Jzfb�>�k'�6/2<7L����_��MX}b{�C|#��5�/.;\Ѣr�m���ZJo ��N���u:�mMi1���ߘ<���CP#�M4sf�r���8�w`��,o���Hi���F�J�G|�4�*�g=���ҳU��`����6�`$��Y��p|e���F�C��^�t5�S�cC���7��9��e�4��'i��U������2�e�v��S��(u��旟���zӊG�'� Oy	}B�K�����9.R�4��;m`
�?@`~5����F��?2�R"�n!�L�bW���
v�yܧ��g�M����ҞV�6���%��qe�t"���t �X�-�.��z�t�gៈ����i���H�ڴN6m��c��t1�T:4=�=�_�x�W��<hQf��������j�7M^�'uW,p��|��/Xx;d)�)�U�o� ?,`S��J����Ŗ+~5"S�;ؼu&e7�@~����IcW��%[�Nc���p-��r�^�d�(R��ʒJ�7���5ՐG�Xy��<R��{��J1�E	��^��d?���zf���@�o���C��~co:����
�����8t*�gYT�=�*]b�)8ԍv��ߖfQ��:�d��z�[�}�������2	��2�۟&H7�F���PJ�!Y�����[��4GoJ�\B1{ܼ��1�]C@��w$�M@䴏/d�+� T��.h�$B��Ǣ�%��4�����BX��َ����	2�X/�P2'[Դ�O��W�{r�]�ͷ�Q��Z�Dp���>2Z��,����J�e�K��0m�$��p�����f�(���(��\��3|���a��C�J�7�o�D�;��)�ׁ��VO��͜�#��.C�s�'l��=�dr;�ۓ�' S�:���q�6q�b�ь	���g͡V�[W����M�g�M�����a|��Ƃ��cN����rIai�J�g�q���|Cm�����Δw^%�c Z�mj/^wI�-=��-X��%3@���f�R�D�nI1}����������XR:���Y;=US>*[�9Q�.u�_;@+b������J�B��2�
�? 3&���l��F���t$*�gJ����V[�cuo��H��9�*űj~�(����\���L�p���~mb�;@�߬�;"� �P%�KR*�Z��mᣕ� ԧ8B���J��0]��-��G\���O �g������}������eN-�ң�pR��pA�H:[�0K3�2�m�U��U	��\&������)�.���_0,WO���֓��џ$P#Db�!<zEz>t�S��gV*d<z��qqp�m�[t_y��zr菗�$XM|R˯���cQ�Dx�MJ���`��yq��k!�=o�@�{�*P�0�+��c�撎���ހ��5؟7	5ˏZj=$��z�Ct	�~�P9a�)���<A����'���~Q�Dj�WK�Y�;n�k��@��uy�ү�<��e¹X�?�%Q��&.�������_'�S�"���/I-�	�����$�y���u+@'H"���	� -��@S�6����8 ("��}���=��N�zph�b��J0��m쥍7!����I�ʼo	�A� ;ŏ��ի�����s�o#`i����R���m#vP�{q}�,B�e�:)����A��Zރe�G�w�f��_��/�&݇�������3����)uU8G��p��	E~�G,���q�u[��[V"���M���b�9�OF?�):ٖTc����hE֋&�k�;�4L/M�Y�4�י��������9+J 5A�lo�lwK�s%L���l-n��KOv�[Ӡ3�F�Z�9>X�����y��ѣ$�S[ΜlQ��g+�E١�r�V�h�l[���}�销ᳵ���vI��.K)OS4�׻V�&�KY3q+�C�����3mHmw��.�JX�2Pu
�"���7#3��@:D՟�O�(�O�\?�^J���4���(U��s�����M51����b���l��껠8�P�Y���J�(hn����	m��	rs�/u7�
� � �|h����V��\�%�
F�B>��VƆfs��2�R��3DL�i�?�׭�N�|=ٽ꿒��9�ʙ5� zD$�R�D-���_v-D����=����0[A�H,F��]���l2$ʙY�C��Rr�;5�)�fЉÕ����rɀ���Z[\A��#��6 �oh(,���U�GJK��Ib=���E���56�!��d��i�m�՝����F�\�6<��B������0P�u�òU{lS���O���
�I<}[���Z��2ץ�Hp�<Q��$�Z�&�C���_���ݙP��2��ߟ�<>�� ����}8~�kQl�5ƙ\+�xj�����w�&&��w�y�q�.ռ�%�P��ݩ���Z�s����4T(f����6V�>[&�G,���S>ƾIe6 �����G�B!e�a��������Hy���[4��nls0�D�z��^�633֥��������b>=�4q
��0rl@]�$0���O�+-h��a��y����5������b9�Tv���*_x �3
��/�;
�X:��Q�!���]ķ�D����?J���W���HCz��V���s�?'�3S߱܀�U ≄h��{�C{I��Lq��0�Հ:韍��zԵNu�e�bmr����]�����Z�VNz�c��;O�/�/��*���}����y�Y�ap�ѰFW5����~�8[�yi�DK��M|��6��7^�>��� �T�Xj����͢�аϿ�1��V~?AC��Ԡ�`_P 8r,�_�ϝc5j[w9��+K�a�tK:�N�bؠ��&	jE�����X��Q�DGKJ�OY@b��"���#,!��sf\�1��p�H�p�c���,���v����Xq�ԩ���!lL���U�z��L�w0�|0���v���� ��&�T)�]���U�=���T���i}�=�H��[S��~�g���{�g�n����:Pt�����ջ�3l�uV�s= EsT�q��GL��oT<i���^�%��>O'�	 �������I\&%әh�dH'nq�mMn�l���E7��	ڂ�V:� h �6��$v���h5������r���;�"�PyKo��"B�����5
�l�)�^n��,�H$s��̖�<�v���P,�Iw:	����@�C��$o@�y}�`��I�FA��Q���a?���.'�F�c�(��k)�f撻������l���OA:ՁGqʜo�b&=R�J�>�v���}fR��Ԟ�����2A�:*E��OhaP�����=�6�Z>�m��
�����v^���S����W_f�Y�s����6?Z�CTܢ޿�x=_�gX��u�XTk�mJ���E���]��B�	����k�7_�8���;R�6����Ak�*���U��I9�ZK��F�r)ޛ�D��s�}���o�]����w����W����Gd|��u~��AK�Q~�$�h9����u	��G����l�:����3#"��`H����
�?`�dv�Q�})`淐{��h�ߺ�-7N�!T��d��
H�n�� �X��q�z+��B��ǖ�&�֏ �[����\%q��W6����c+�>���\j�!	��W������ˋ�(��Aapci��"����7�Ok{/㕲��G	5��O:��VW^��\��u��F�lm�e��L��.Ø���i���!���9lw?��3>��E���=2�s�j�M��<D閾����?����JZx2f[ٰ[�R����sJ;k!�T�ȫ�pj`�[CzI�Ʃ~L�l"��9Si�"
�@��-�A�i*���}������� ������FL'���n��D1�loU�'z��H�v��wm�D�W���^�}�� ���g�צ���Ɂ��Db�Q�D!D?KhV�����4{o[TG-�Ӽxt�;C[}3_�7�No��)Tu7w��J��P�[;CkI�N��4�����VGR�����hnU�}<o�s��l�[D��os��<�v��� }��d�����UF�`���ዌ�&�d��Nk/�L3���Yu�[wC^��^� 3�J��!MXB��Ӛ�±�t]��F1��A\���C�6%����+9�j�=��ć����q�����MP=^Sht��5z��)�l.G3�l�#�F漯eL<�������7r�`8z�4koWT�z��mT$��-aYw7Ǐ�,�_�d�/YIy�9�Ц1���/C���8Q�w�jM����I��6ßl���|K�����L�#��5
��?'h"�����O����|*b�=v����ld�?l��c�\5f�&��=��FČ:��W�������C��6����+Go�Ȯ��w55�0[�	NU�?9��IT?��w4h��f�U�`��7)�U��͍��Ҕ�f̵�r)��';b�Q�p�CI�$�<$�ڭ�>��|=܇��g�\Hp��v�C�"a�߃?�d��뀒kX�>�O���5|(��o���:�<[���d��pm���R~�Q��i٠�x���!�����V���A�ġ�k$�>�c��x�T����V9�#�Rx���ica��ȡ��y���c-���sM����K~� �"�*�Vr�]шܼ[��@��-]ٷ�=>S����Q�%:�+	�~��}���Z�L���J��6, 6��x۫P<�� �'+b�Q����I�·c$땡c������%�*�V��?;h+V���6�.�v67���&�����w0C�0E�5�E8*�,K˦U��L��#Iw��K��"��?�Y>�m�Ւ�T��H���ߍ�%(��w��GD��:w�n_�9��\�:�d�1��A��i��������1��G��},v<˻r�+�_�M/`�����޺kwv�̕1V]{<�n/�a>�Ryz��CI��+��tW_F�
�5.�h��Z�9���=���,ں�1�lxC��#
�4���l��L��hķ�$��Ę��ɬ�Dͳ��c7!H.Fc�1�^LL�/6?Kؒ�>w��i[:4>�hD�r�
�M~yLz��Hz������%TZ�"�^�@<AQ*�L	ݡ��ԇ]r�n^�E5�oL_�l�
��0x,��Wx������3^�v��0slҸ�x�Μ-k8�\z�^�@oH�|N������N(���u��P>�!@L�R�Ţ��*��S���h$Ѽ��6�n�a�[�|��ⴽ��d��u��@�! )0f��D����U	U]��� ���vbA��t٣c�%��#W�3��W�����<z��O�z��h+ ���6������,"�=D����T5��.���7.�d� ��6�����W��9�*ʧ/K�9�/לg����������wۧ(w����~uzz���tA�H`�2{�0�ܣq��I��@Tի�XE)�f�Z�f�=H�q�*ǞЍ����B�����g*oR?��U
J�> }.Pf�|� H��kRsw����Dv�^�N0ZUh�f�T����A#$��G	ʾ� v�;^[�`��\x�vj��f������@��P�~�P�E&W^���������hg�E��>IS~�XGB���[�`6iE ��[`�bc��}s5V��:��5�'G�2&�ӎ��h���k��K�p6��|'���y��&`=�)�c�x����5�������KX����uz~
�*[�ck��	Q���z�k�uw.5�U��[���N��k9j���B��Ca���p~�N��5��B���f��g�������x�]����?(;/�R���S|�Dz3����B�6��c%�Mx���[�A�A��+� Q��״y�Z�!��;�qr=������q��	b;�XK}<����{�_:��1K �'b�Q��	��F��_��������2�l�&�VM��2'&)�����ͻe�+�]C@�i|#`Z�ņ��$��$7b-�Q+�\��pw\C��/G����ջ'b�Q�E�
DF�c����zņ#ga��O�Jy���(d&�'�˧&����0ڄ�&Z�F���9w�{�~f����bM�y�Ȝ�v����̺�4c!ԎC)�ǅ�q�{)�f����?A�-��o�����s�B���^��.J6�?���W��2�~H䶼qX�#����K�3M�;ꪭ���=��Ⱦ hQ$�/�����^J�=GI�����Z�~мV2�d)�b�b����W�A��0��辚C	����2��!@!t�,m�f~6��5�U)ʜ!��s)����>H�.��h�j���i�M��m�Ց�B��Ï\|��<![�v���[�7�1�,R�Ń+P�r������P�(�F���*8=꩷κ�Or� yD+�7s��+"���m[C��)�0�G���7�h�#�ڿ���4���Ì�1.3{m�U�Gʸ^�vD{8�晓n�I�E��_~�������H�l+޸`J�Fyc<���R��_��+~�h��ĒҋO�u��c�+2o-lѭ�[�S���7kn�����Yd�o(l��"���4�e��%)�_��kW����=�h��f�$���z����X7���Dy��C<�7�L,|�R����N���#���F
\��%7F��Ai�cX����L����
���Ws�=�iBn��N���zݪ��@I��t��s"|�n���r�U�‏#���3���lZj�T�}	��O
*�Y����׉܇M;Ҵe�S�})i�����(|�*�"k�����1<�v���u�V^0:�e̶�|C9���tj���-�E^�W�]�mM�9��%�jҗ%�����1����"ד��E����/��n���H�y����d��/و遶�N�q���$SN����%ߑ�N+6�N����T��(\&���q��ف`��ϼL��:���`��0���e�����9��ɷ.ΤlCUɎh�?J���[u� ��=�\6� �͕]���V���	���e��8U�`U��v�
�M�M��C�x�.�¡������������g%(Xizt!-eD`<(�J`44/odwuޟrtQru`mkg�K�PP;{k[WCF���� t `0,i,�I�tt_p 8x����rN{A �=�R�E�KOL����ڐ��$!o�o  7`.�$T#$��=Zwn��PWD�z�q
`9�*�'3b����L=���{#�.5O�=nN�@@�+��Nԇ8Z�����H�.�Y�h�	�>�hi֖恽��������<�QJs~a,C09�ڭQ.sU'}?5cp�4a�PtT>)La��u��VIe"A�vɩX�3CVTj=���F���540/l$�wx��h�Bw1+!_��h��B�=z+�������5�gwR���[#1���WsJ�op�;9c�0�J��.��xCZ����$�\��z��$��k���k���N���Y��mq��c��2`ڡ_����Y�8���� ����驶����w5��rDcD.kaJc���V
 XG�����Q:%FIH0k�%_=�g{mTm5��],9��/Bw�8�Y{@�)�O#z|w����C����1r�1JY�q�vKA�Hl��W9ƪ��s$��TB�T��4L�s�{� ������C�繭�ş+'t"�a�^:K*<�nvޑ��%	]g��j`�mc�PhQ]�A�HAΈl^��`O��ƛf�)�W�{�J�4Q2���پ��q��D�<EN(}֭V�t��N"{?T�4����.�/d3Sm�ի'b���GQ?	P�cP�O�Jy�cNB0����e��X�O? �V��%��n�q�\V���j�xЬ^���~�*����_��+F���6�^��!��I��<m�ն��}��ᶘ8�M2��/��5G���;J�5��L�xI*�Z����iչ�X��-���Hd��EV�b�޳ M��=�)�����M�M�͝����[����`#UPqr�l2\�$t�~xM(��v��#[ӚzL�}�Y�B�I�Z�u;'�婌�����ȧ�0i�^.KD~yc)�a��
}Y<+S	3���]�'CqH8v� ?���o(OG#ΆE�{�{]o,[I�$�ϸ��I@tb���
Vɸ|�%/o�K)�f����?(w�J����d#�RCb�a��rI9�>��0���N�LwMލ�]��8R���H�#B�����D�\q�z��^� |8�����I�0�:+��oP��<T�E�=�i��6�n�)�	�����얾��Kɞ��gz++P\.p��lQu�2R{e�U�u��T}(<o���"�a�@4/~�C/�ƴ�pTq��{�)c�Ah`|�F�J�7.��LsM�����A�DB�#�M�c$V���9��ݷ!��\@�8n��CP��@�2-��"�4�p}����}����ͣyε�sPӱ��[7E��
�	�F�|TY�m�V�ϼ�H֣)&����<D)�f�R�X�`"~�XM���њ�y3E��5�o;*A^�@V�޺�KuC?y��6���Dz�[C$A�m�92���N|Y���)�{���8O7�����Hm���/ƻ*�,j��(Q�%�Q���h]������˂9�Z�wT��C)����P-�S�}3���
�Zձ��mQ�O�7pĥ�I�$��z���q1�$/ї�)�����;��o�gc��fժW?��4՜�k�
��B�I�N��!>ؑ��R������d�`�j{��+B�����zH��1
�@v(�b���B~!��>bİ�H0J�hY��`�5:�(Z�yܝ��Z��i��9�=��=��]��h�˓�`�%��� ��R���(�ӖP���l4� ��i)��C���l��\�s�!�]��9��@��؆«��f�
�@��JG 5)MG���Θ�`�l (n�Qi3j��� U	;��Ub%p�v^�e5!H�e�%Jk��c��!}����,�:��s�)�T:�g�������4�ǭOk�!m��b�^�nM���=�{�������葯��X$�� )SDk8 �gKB�<�LZ0S>��CzȠ��.9:�5��	QF�u~=yD������"vʣNzY�2]]f|�9��6]��
fS�ഽ��Dm��PC�8Xk�L����c.ܫ&���Cn2�m�U� Q~�?A�{L������a��E��
�xwTf"�R�#��H��"\U2�����e��U�@�]t�������-g|�F֊��5�b�`�jX���|/V�����ރ4�0a�u�Lk1|Iu�v��6��T:+V[�$��Q��J�	b bާ���G����܋��O��%�#>���3p[��F�K��v�'�k�y����@���T��!���\#u��bc��$ֈ[c�`/�Y�b�!��8���`׭��彳	��Ҹa��,WR~(z��Q
��{�$aCo$�P�5f�Z���M|����o��!�(�c��$���HJ��N_�}����
�t�}�i����W������ф1@�_�_ 48(+�CL��u0uyc*��z�m4
�<3�	�2����:iW&������m�U�G�[CNx�������x��lbd�l>#]�-�e���>|`M��ǘ޵"�m�#E�{^:?|��Ū�08��P5�Q#-4�D"�F�]��HL	ٳ��˺X,�Z�k.���rkB�I��ѐ/���,�_F���8c��wK���}�!�`r��}�"則e��`ŷ��ϕQ�<a��$��e$#}�ٷ+�P�!�
D@9�I�ü�<���/h�q�\SA��"c�#�	���j`�7�ԒU���oB�x䥤��j��0a�S���OH8u��D�l��R2�h "�Kأ��TI�N�pK���$D�q��\�<�t�H$���`Ƚ���^��)�\�C�3c_"�Uĥ��ߩ�47�q��HQ��%	%�f���9�#�ga���C������2���Q�tU8iW����G"���N"-�)'�B�!�pHZA��.����zΣZ5`�m�T�dRb��N�L2����p�K���D�(kR�u���c"޵�5/R���8@�3�PR�z�[�v����i�^[��y���'mG��%��Q�n�%�4��ᔁ�]�A�����]Y|r����(��L�kL�Ky=Ԗ
���w>��]� ���I�LL�6�O���y[%��>�����R�;R�H`��
N
~���s�]��-kk���E��=���֋$!� N��<��[���#���I� k���u��ـr���G�X2��u_~��c�-��^�~�/L�1�^���iّ�ػ�����=ݢZ<pR�� GV�+�]�C'_�z�g{[��Ҋ��
L����}�\O'z�/�Y7:�)��/v$�­�!��Q�9g�Y]��7I���S(�fb�ѝ������(>L���=���֒ʮ�u�nЯ;+{g�����MJ#uFl���	�����j
UY�06��V(�
{y��!�"�&OX��*�V�붆�X�v�yCϵ�>/f�R����J�/�shZ���iJ��F��G(�[�2�D
��I�H��+��a��u� ������q��e����"����U��@r7�#�>��z��w�#��]Ү���A���a�+޷^d��y��'!����3�^�;��t�C�h&����� �̤޳i�P0Kn�SD�y��7W�9�,3$�ѥ
�3~����pM�}0���m�SK�R��)�@~�'�C^�ǻ\���A�������{]��m�����^�%�Z�A�O�zhm]�侇�������#4!�`5YMn0d7V�{z��8DTL'@3Wކ_�a�WA{Y������7/l1Y3ג�n&g�3'c%W�X�cXV��"*[A��+��lR�U�iV,$�����ζ�Mq��v����5h[�<���6_�'��j�� �� n�� ���,�����9�􋞫bůla.��نb�1�/Q�ab+�S?�4���e��e��6���u4�Y�M�<���gt�,�Ӊ߹٧���6��i4?AC����^u�_ Ov}rx�cEA�o��Tm}v��AC����  =�-�G�	���(Q\f������]�^U�G B�vG`l<��M�m
��Dyp�\��w��T�|.���A�͒���Jf�y����8e_RW�5��� ~�mAr4v���T�Hv��O+.��r���1�jf��3���>�ؽ��T]���#W��@Ey�)��Q�u��s,I���u�׶��ߜ�g6��s/8:�T�7����U 82���W��F_&�_lR�+ ���l��JO��X�r����
�-g�!����M�����=���VEb�)�NlU��pd�fO����(3�^����u2�A�ޯ��yƿ�S��n�T:K��ZL�&����G3�u�d��ŕ'0�s�����D'�Z���d�LH���ǂ�K1$��e7�Sw��8p�E&�"�1���A�2��;���ëZ������3��a1*��%(
��o�} T�y�j2�m�ڗgf����Rs��� "��Du�~G�1V�}��Շ'H��N߼8���A47�N�c����]k�4Hޗ�����1�^�&�qX0�����m���Xr���, ��+q�cp���:�
[�x�k��q�\Y���>�ك��(���|�lX��T7tS�����Z�r�X`�6�*�B�����]����a�_!K�4�^`cm���.MԊή7wy�v�H[�\oA�A)*����A��O�
k�&��5��E�s�����c��'���Ɇ���4��u��XDf8mk'�A�5��U�7l>[�ɯ��6���Cg+�X\ 	�w�8A[	��`ha�R���/~��=ڡ���B�v�ޏ� �z)z���!�"e ���PF�Z+�݈6�����Fz�Y��i��N�e���Y���{������,b��s��|�x�,��1�k��;�*���񿳶�1����
	DI8Y��	BϽ�'K!`_k�%�a�d�Nl]A�Ăì�r��rj�jd>]��n�T1��UEa�j���Fsq�i�}8i׹��3H����9K�sF�z��I�3?������Oڰ�K/�ה�� ��K�y�r�:�)�7�eꑵ�_�A�����ݕ�FA����;3(/dw�	i�S �}e8T��D��V��P<73U�E��B��4�0|,��|���Σ#<Z�d)��,@QA�<E��z�<�#��I��馶�L+t� ���8L�U_��|r�?z"��cb�SV�"I��z�9�)��D��+��:�ς��|�>�����}zUv��u��^ :�7n���8�#h��N���;���P5�=��C��+9�xR�����f��%��l�83h/���ޏ�q���#�V2+zi��<�`TH��CTE�/�k��N��?�����N���ܝ	^�,gq����q�y��3T�;r�_&��'�z$��k.��0�#���p�=�n�s��g�_q������d5����umPXa��Uʬ�^,CgK����r�3R�GGh�=.���I��EyGC��0m�s��\�oZ�}�y��$�{�ҏ'�����K�ƒ�Wu�x�fuO��o|O�d����?j��V���DI�0ܡ���pm�r���_`���,��G�e���oI�/+��M�Ɖ�\�m��1�f��Kgh��ʒ%���W�i\���Pz��e���f�PQ��b�8'�`i���5�Ü���JՌD�7p��wPz��d鉏�2�/g[�|��+!��²�h^iډ��2�|CX�z�s�����]I��V��]�Y[}��b��Q���`hՠ5ߺ�S��C.�#^�R��\~��]�B��J���^��z����:��0r�ޔ���B$��1�~�GjTBM�O�"�����<6��g���A,�0L�5��|�tR�����m�zĨ/�@�0�om��͞����ߋ�g�_r"����$RR6���G*�i�
z
t�o&�#����\_u��-�Ğ�6�J�r<�=��en��񕪳�}���F�y�pqti*֫Bf����XQdxc�;��s&�NKhw�����[qa��J.�c9B�*�7�]M��}yf���ø�u�=�$1�<��&`Z���æ]5��W�zT�8sh8�D�,�ʓh��+yF����w�t�D��T8���l�a�>��]s�+	�۶�|)щ���	�=!��y����yܦ�Z��ɾ�|%1����7Fr�_.�o�a����Dh	�������pBR�{A�E��|Tw�#Fڈa�ס�ch��N�yk1ǀ�f�$�Ҭ�q��"�Rĥ�pW^�ù��pɭ�G5�Yo�+ON�� a�%ݶW�I|q�^����=��#�!��ں�E ��+ّ�V�Ez
�E�I��-Y���3^����?��Er�=�~@a}���׍����N@3�~����1�m��6y���M�����tVၴO��wn�����K�;y��P�|�$v
���i�q�����x�B_����|puf�bD��d�9�U/6��q�8���qf�>�*�ͧ_3�{�'����.���ʴ���l]�;6�ͅ "�w��Z�S�HRuy.��o��>��($6�95��&!��)�5��r�l�2�5���e
�}���ד��� �H���Vs:-�q�۸:�V5 P"���1 �Q��{\,��M���F�HOEk��t���{-���
VL�2��G�)�|�o)֒�0��͉�3��$�Pj��	-ڸa�ӣP�cF �E�I��-�Ԥe<��}����I�)`�-���'rȦ��Y�����U�b�6mSY��K8v���ϯ3-�e�H�t@8��ؘ�~��yE��c�B`�6�g�!�҉�{L�����1���ex�Y� c)~��!�,���CmO�N����c~�
Yb���ր*E�:=�o�of).�2���(���<k}���w�������?7�Vs��x<2,2���{ʪ@�A�-DQS�0=���ƺ��G<
��E�v�*gP�[�vٌ��k�\��m���"��]�X��<�NR�|M�D��>���`��I��4���A�� ��)�S�Cj��Z��>�Z����M�d�7�ʹ�VT�r���]��) �Mw���Yó0�3.���@�0�Tĵ�[�%ĥ�<�����Eʔ��w.��]�3�1d�5�n�cb>����A��Ơ��j�WE�6�n /Z�~��s"�ᑰe���X�>�O�"k$�Z�����,q�=C��3�aA�q��r����L�Ѧ��Ǥ�jQ�Q-�\QDKsO]�Oΰ��N>MP~�ǌu���{L e@�9"��'���UG_���1��_�tfO/�����I�4��}v!�ٚg����P�~:�F_�k�$P<���~�>��ҒGp�[��V��.��v���4�]��c��D����I��ܩ�� �7.��*ȋ��9�^B�:�~a�i�����9�俊g��Q��	��Nc��& ��*�"�!�`M�C�s�=�֜����'�����ʟ!OQz3.��zT^R8v�At6�n�Zr
;��[i.�ݴ�PsD�>�1T�=+�My�ϲ�4O�7�{ �^�(�C�L�5�V��(i��ָѮ��"�4�H.{[X��ɼ�x,5PjQo7K�PcDL�^o_T D7~��ZU'��!p^'_b��y� �+6 I����
��˯0D,e�uI��sNt� R��K�q�	��y<�T�$����+�_�s&�⌽�LCMɎ��#�D&|�{k�>C7���FsU��b��VC�hl�sR�h��m�?0��	�������(�Iп
��O�"����I��R�.��D�dx��\����版��	�\��L|E=Y\�n����6Z1_{���#jͦ�^'Y/�_{�$�L
�U1XV��L媈�+��3Oz���N�9�TIB�ɔ-�#����]S�58���F���R�o���c��[9��ǟ0�Ѕ�5� �ˋU9�^%�Ҳآ�i�V�	��~B���������5�ɽ^su:,["�tg/�o �Jru"oj��?1�"��Voit|�c�l�b���J2f�������.�ܞPew�`{*ol(��0b�Z{��|{/#f�[�&��A�{�%h$�������ar#�Iǈ7f�{{��zlt�j�jCo�6��3*����J_�d�����}�ew*�%��� 
N���6x���e�E1$�u�c�Ya�U��!��d����2���V�F���8 ��r������"�CL�A��N`y+%���2����zBD@�$/��y:Z7�c}g��d�~�ct9Z��)�&�噅�P@�L����t?'@�W�����(F�Q_j��o�Q5}�-��0r���<T���<�e���SF�O�3��<a�X����	�<c|�2���)��	���xmڒ�cs��͂o�z�+��n�r�]���+Ή���R����Kj9��*cxڴcQ�g�6�6<S�I�:Ȋ��ğTx�����u��`TK�!�OUD����@�j����~j�:����30-�%��6�X�ёB^����v��u�ML�q�m�ȿ�i��6����q�\Ob�� A�~JB���.i��U�3�BV�-Y�q����٥����2���lSM(,$�q���M-"4���.�!��O0,=��D����+r6�,}�Pw0���*{Y��z�^� z�
�xn�O΢��<��[��R��x\n8����R��Z�y���N��2���X]˳�=��6���<��j��k��8��楚F�
��5�/�Kq2��F���h��Kv�?D��h��G�3v��DJ�'�}����M�n��������~#ޢ����`lBr� �Sl-P:�+gsR����xL#��d>F`�n�i��)AɻN��C-���g	�5�,�$�I�l;��Ö����Ʀ�G6���`;WH0U'i�$�V�D|]���_��04,/b�gA�@�=>8$,�M'�zز�%<;i�V�F��-V�EmJa����� ��� y�<0)�&���R�^&��vA-���0{����"�9�/9�*�g=Ү��v�C����z�cQ(��R��?mWF���\�/�6�bi�ЬD�����vț1�lU��'-��s�<���k�(�*�k��H��g/��������Pվ�_�_@?H(��6�����nkX	H�^��l'�w[0L���U�GZF��?q�Q7���;G��7n��M�<Q�7����W����]���XT�~���vW��?6�b%���P(�W�d�~��v�[=�i����푚Y�ӏ\ލ�tO+4�7�tJ�,}h?N� �b����-y\f��ׂ�����%�dpp�sa_\B
>�G5ʯ/$<8�0m�3�B�j6|[�����ŋ+gwq�Q��n7X,�X0N���^�@cH��+^� 7���WJ5����
�>�(U����l�h���/���Ji<�ۓ<U��6��g�S8*�/���~y�	��zb����X�u����:�+3gm����tؕ���YB�}�p� JQW�>3ԌP.����S(�5� �^�or�Pa�g��̷���z��0���zDr�]���4A�grGR��喝L�i��r�[R.1����e�S��[&�$to׎�	*�e�T��"|�_�>����r��q��]���Se�߿��v��G+�C:�RR��Q���^��{�9����7�4�.4N���%2F��v����][�\ �Z��U9�*�1��^毿"����n��c��}9���vH��W��[�:�<��~֘fҒ啴t`��Ҭ���4;c�=�k$4��/�C z����hT�v���tz�u�~в�)�[��
`͡�Gq����M�M�J������,Q������z���M�e  =�)�&�A����:a:������m M�d,;�4p/\$���h��vxIX��{�'�:��+}�Y��͞�����bje���);FR6$v�7]�u�_;@+H -��J�<��^[L �O��a�� �?0(,&���RĈM���:?>*�!N��$��
�<.��F�J��Z�NΉ^_�j����]���j�>���7,.��C3N����k�^P�{�W�P^+�2��p󥈣k��m4ڰc��y�9�g%��P�Hq�g悌�B�s�����kWy����7%��8k�Ht�?W�(�6�U��Z��M%�������g�2�_��E>0Q^��񧹝�џ$Wbh�.ZPr)i�TT	
��"V']at��`z/�$�D&SS��36���"HSʮ��|�yV�,NW� GG���=��V"��-x�lL��5�o�u�-��c���۲������"ޞY%K=��Wf55��K�Ct	�y�T9u�_آ�'G���'����&�QK�C�wy�)����hy�ȩ�P���b����8��g0�����ۏ_>��v���{X2�;�������j�x뇍d*m¬��V+�XaGOJ��r��+��z~/?�|���x��U�>gb�h�X ��5���7)����L��*�>�&=�؛�ի�����x�}n`kx����q瑘R)mZ�r74�#�t�%/Z��uq������'U��9�*��m���֔��@��3����5=X#X��x��B6�kWF���a�mJ��@{FV�������=�[<�".ЙC!�����hE֌i�6�T�`K5M�C�)����ϩ·���  Z$�!�`wP�q	>L��v��-i��RB?�Q�� �B�]�=4Mݾ����y�ݓ�h�Rq��#��.h�H��U�u�7�1�lY�Ťh�㙅���܀A�:L��zF,ISz����u�_Cr*h�D��е�>)R <Ї(��UX0�9���xp+��@`]��R�z`��TJ}�1	�~��y�َ�mR��5���@��[4<����[��Z�C)Σ���8�^�����ai��kͦ�4:�k=:��, �G)��H}y����J��[�>�R�N<9��VƆ���$x�"�W��4K
�s�=���� �J0r�������q���Pa�ksQ8��0e�^ѱVv 'G����&鑞Q�D\A�*O��T���w#/��S��(�Vp�c�)�f���B��u�ݩ��$QJ��w��u&�b���R�RA��s������5;�'�b�y*��2�j؛��_ɳC�E�F���1+UؾU������-Q�u�	��;sk]������^�N'lS���A��:H���O|$�<Q��v��+�P��J��������)�����Kt{�A����8`*� Yk�4ݗFT�7>ߚZU���s�f ��>�-�%�cֽ�9�Ȇ�����@�x����&|f
)�֎G�3HW�$LP%A�y���˨R{tt���� ��4x�*��*�����H~�ӯ`��,.'h,�E�y�	��vp<x���(������+*0� w��7ul[�#{��	��*fu��'��6��|\��ά�ɺ#+�Na��R<O�
���;�0Kx��R�hښ�^ձU6�G���+\���7���K}�
�W���=�k-�(B׻�ͨR�� ϕV�.C{I�N�K"��$��/J]��ň�6ߣ 0�i�iq�����I�� ��V� 9�*��hW�*���w���3�M�����7�I�qq���W�ٺ��1�?E�%|�I,���F>��u��-�8�
��Y�y�rj����љ�ΰ���{��AIr$ZG϶��-�`_P 8<>�S.�ÌW{w>$?��5l�S.�+1@K�X�vոV��O+L'M������K�C	�BUO~��-盜k+-��s0�1��q�}a�k�d���6�Ԋa���� �I+����=��(wf���R�IG5��
�1~�io��jT����b��n�Tr�Z���J��x���U���;5�"���PU��Zs�{�����q�z�a�8���:���Æ���3+�q�8{Ub%Y�>��Gʴ2%T<ZC���<�y�^�/+z:�",��ɭ���no��.�r/Bs1�mb�p��
"Nk����� u�p-oP�y�d�$-�\��)*Sڹ����7���,�t�E~
1��NB�����&Xc[�{�&�
<�|�M&q��ً���v�Ǩ5�h*>�����K��rH=�<Bz�k��C�H�����lk���n%�[�{�PR�j�$o�)�����[���,���H:��V\q��oL�q+<�^�B�&���n([���⃅��\�>Z�l��@3D����;�A�@j�x��B�P����hC��V�@����u'��0�Ἆv(�Bۣ���*p�.��8�D 8�(���$��.e\��L�[⪊�2Z�	�4����<W_�[���ˋk�}���U��R/�BX��q�e>� ���4�)���4���������W��ȰP`t��Pua��VL>�Vw�~�iz����s��T����l�h V� �B��zb~���pH����K�|d�fv�Q�c<~C梌l��v����*+M�=P��U��%\�s��%�D��j�k/��B�I��:���f�����\%q��^-��ڙI�
1���Zp�-��i������֟W�a��\<hn;�S�z����*�(hf띗��UF+��s��SW��Z��n��H�O�xm�1��5ɡiݖ���&���2���bl1��|n��ː�93Z�{�y�7��S��n������;��&��Yz9=S���J����?M)s�����t}'�@%G���9F�j ��2�$�IJ��?�R�kŲ[�4�ٷ��� ���k���Qi����b��Hs�)oH�Su/��:��w�F4�\���]�/�@�&���$Y�ǡ�����J)��DN|!_�T���4&EqV	:�Ӡ]4g�!pQ}26a�"�Sd��:SHpP�Q��E�5�W;9���=�����\K�����)\{�~p"�u^���R��:?��S�3���e;�W�B�b����RH�uޖ���+Y�8���?_o�&�ќ�[$JE���%�_��,|Fr�:����±�GM���F;�����T�|
��R�o�v�f��i��߅����a�����JM>0c��!`��n�;O=&:��4�`���
]	n���󍅣T�/�r>! O�4ړ*:��bMm1���/�b�A�)YIy�/���n���c���w��8U�@�A���
�G�O��-���}]�����J����F�wb+i��މ�����}=/�\����l0]�$+��r
�Xp#�e��'�F�A��X:��
���Ꚑ�'��u����-J'(������jho� #Q�#_A N�l3��TP��#(i��l�P�x��b}�X�����������b"A��bi��� S�]�N<����{��|����e�XIl��;�o�#i@���?�2����q�%�R���{a#������Np�aHM���N��p;�G��N1�]J��H�iԻ�7�!��'�O��������O�ޭ�``�w�6X�ROZ�����Cm�#�z��w�f8f�T���Q�6ᎅ,c���<M	���B6�D�a�P~�_<���ڼ��Z��0���1<��R���\3�	�~�}ϳ��������B��b)*��xڢ5��*�ob1�����G悂:���c�⢛��K-�e���{~fj�%�˺�>�f�w},���&Xʊ���qS�9^�5�o8w�M��U��W��XV��G�^��!��z�]2�%І��E��B��К�eg��%����:b�n@�4��S�g����_ԧ�i�������e����{B+q fA��g�b��G2UM���ߤ���kwv���Pd ]41�Qbu�(i�UvE)��\Mɞg��tW_F�
�?�:��Z�(9����=������e�%+��wG�y���|�C�]�4�W���1�ɋ�����C��ڵo?%}L*�)�O�{o"Y�ڣ�9r��,	SC=%�hD�v��*p8*��E4����ד^+L_�2��ItS5~�L2�����Xt��5�>�&�H�C��8"T�F0���l�&yU�8�_�~6>��<B�Ɇ���7w�
5��=Z �3������AD(s֥�6��D7�sqf�R�Ţ��x��Yˣ�r,���U�x�/�Z?�UB�2���������4�@�;+|i����R���s ���A��_�r,���:��"�5��ZM�0ۂQ����$�<z���z��u0g���*�����D�;o�'F��ҁWfȢ�&��?�7.�d�fU��-���E��B��7�z��`L�9�lكj���D�����o��%r�̅�1sz���t�3 �l `�(���T��J��@Y���L١)�f��h�E�=�i�ߟ��ҡ�����ooTwz��@&@�/.Z0cc�-�-H��`1[sC]����nv�^�@`ZUj�zf�\���*H8��m	��o�hPD�b�<�T�.ą]4������/���>��O1!^��Lرɹ�҄u"�.��W\;,�����0lw9e��m`�ws��!&\�I�:��p�;K�q;�ú��e���� �+v��.?͎@�u��B#i�f�&�k銜�N�L}͏�����L=�Ο�K v!E�wT�pw���33��W��5�`G�~p?j�J��P���O��{7���oĮP�#�eJ؄}�Y�B���.�� ������]��ユ�mVibn� ���IK)�q:}�����T�}��L�LL0���]�A�Q��xS�P�������Wh��)�Xtz%���������/z�@;0����~A�:��qd�)X*�ɖ�Z�HZ��Y���i�����`�y�7�P�ONIg�������l�.��sv',E��Ε�7|��wx# �\*uU��4�pw\C��X|_������(b�>�g?�%%){+�$������%,43��6�J[0��r�|!)�1ڥ�k� ѻ�b(���q����oB�a�0/�'���gC�*�ە�A���{J�G֪�v /��w)����Q�) �=��Ŵj�0��3�����Z
������WZa�?���CϽj�WxN���;g�1�&���>X�0K�0������0�F�ʳ#}Gz�'���U��EY�:GS���L��7�wТa� g�R�-����<�1�� �����\L����)��nA#p�c%�qh1��q�>��b��vf�R�Ÿp�zʛv�-���h�
兗m�ޚ�����$��:-F�9��� "�R�b�e/���nJ� ����ۚ�+�@���
 8y���T��g�*bAh�1Ӥv���"TB��}��A���.�	'�)�����I?�ܸO���NA({$�U�EW��:O�?^&6�녇4��
�;�[
{���ל�G�#@��%J�@nb,�����^��~Nb0�(���̆�m�RQ2��6�out/pܱ��M���;s.=�����1�,!�w���9���?5�S��Y�K�x�eĵ�:�"���5H����O���	��8	�*�L61�O��ƅWF����O}���Ltk�:�^;2��c�Rt����������N�6s�~�w��y���#O�������&��^?m� ��4���Ϙ.���7U����hS6�A�]"��A;�J���� ����(_��7�HJ��<(=�����?j�1�5w���˗xY�%����!�M0o����rAm���k\k���@C�T�5�zx�@v�1��0��#��%�����~��0��,���Xr����bٙn��N�F�j��$��*��&¢������!�.�8t��-��"���BPsy�U��eļ(�Ȕv&���%����!�Z�CǼZ��S���z��*���d�����a鯛�o��&2 ��w��2E��8�v�� �\&�U���������]���b��U�7��E��W���B�n�*�؂�����񗹉��� 4rYgse}z$k;w�2`V_wa|hh>wuޟ  lEc~-ns^"�#�KI<Qk[WC�ʑ�t=oQ39,;*� fT� 1?OPlx��9J��
a`P<Pa�5�V�
�_/L�����П�.aF1g�dQfv5b�,]+<f��&Bt;/��MU
I�?�oL,m�z�94n�֙�UC:����)s� D�,/U�g]}�$��G��$U��Q���
�9���H�m�j'�£ۦ��������n�4^P6%sd^h���|;Tf":~[�}/�Ws`pS3��<��meMeR���W�|Gm������M}wh)v�j,ޫ-�^esda��f�R���Ni|x����ҋ�-�zw���UGK8.�ةt�s|�f,~.�dZ�CC��.��<9ȏR��5���.�Rj�"��|�苉m��K��� ο,H%��m�<iڨ�����}�ܑ�}�ᅎ��􏀮�#}��)_
`?P(r�+�_�B1VXP������s?,]D?s.�m^Ug�.l,A64ҏ],9Q��6W*x�/�Wo,�z�+sg]�ǥ�D̻ʑQ5q�n�9�
�AlU��W9ƪ��7*��J���
h
�r�z�#������C����˓�,<^"�a�T4oz�UX73����c\f��b`�d#Q�L<,>��
 ��ePڎ_/K�e�'�W�y�G�y;h��õ����q��DQ�DoTJ/O��T�=��NJk)V�[���v�fX/4Zm���'b���_wDP�t�O�y�"K\y����"іr�}�E��T��n�q�\���9��xЬ^���d�	��U��ڴeB���~���!��I��<m����J��2�љ��2�OD}ɏ&��&^ô�4�zܧ�{N<�XM����\���M��"���*���S�޳ M���)�挘�M�g�͝����^࡝�%1DYW}�?'�8oR�yYa)��ck�w��	V�5��N�I��j)e���´����ǡ�t2�7;/_g@�5��BD0E ;r���B�pP uF?U�6���Vo4]6���z
�:@):G\�z���Q��_@e	���B��A�"(E�Kl�2�@���@BYk����u&�	>�f��aLm�%��9B���Ey����	�#x����<K�����_"�<���G9lv���H��Ε�\d�xe��eF��>2�^� �=�D�s���.��Γ�����F�ʸ�ft++O_,|��>u�)(^|!��/��;kT���n�a�|A|p�H;Ɠ���9 PBq��{�;'_�P<i^����0.�Lw�����J�!�KR�7E7'���9���s��B�u+��G
J��G�2.��?�P�~-�Xⷍ8�M��ͧcΡ�}Vܡз{��	��A_$�|_Y��m�傓e:��Gbڮ���4e�%��K�r1~�XM��ɞְcK��{�gu8?��J��Fs@"hP��1���"�SK
$E�7��pv���`(\���y�g��O�L b�_T���$���YQ��m�3&I��{�r����'��������"�P�8R
��<QK&����Py��%v���
*�@ڶ��yJ�Z�r#���]!�G��.��!�k1�lf���w��M���3��c�3mҾ%��W>��4���7�����F��Bm֕�����ʙ�b�q�3{��7X:B���є+��!�Nax.�Ϯ��,:��~?~�Fs�:�	s�TI�ٌP����p��:��6�n��7��Jװq���J�-�%��
�s(3��D���t��~�oq�!��m,��f�ǧ5���2�m�āLp��K��ӝ����2�Y���ON6LJ����ݒ!�olS)j�bPs?b���]~Gz��ph�4� s`�l�i6��g��{c����
H�:��<�g�\S4�2�������,�·U!��/2ыH��tM�M��i�y���ġJ�����ͅ��@8	��p7%IWp`&�g�u�_@0Dix��CyϨ��4q]Bf�f�]�TO�vK<t������#u��D$}�;DP4=��?�w^��O(Q/��ɱ��Dm�U�WO�6MX7�H����-z��InGZ���LC;�6�U�:�k�(֊����p]����
�4/r��>��R���8ICs�����e��K�/~�SL5���q����8�����2�$��#��|L;��ᓏQ�v2�D{�Zy$(&孃=��ւD;0>�s��Q��C�e7L.��]�AȄ��[J�؍�� ��8�>9渹0tJ��F� ��:�+:�k�6�ւ�v론b��c���,l%��'1��!��g�3,��y�n��q���Aܯ�����	��и5��@Igk��WE��(�gov��pf����+Xv���b��B%�W{�&9؈ %�U����P�f�����`��&Ң偷L����ٟߐS�&�XYN314@�v����2<we�4�.
�7M\~p�w�A��_ɥ&/�����}�m��C�T&<=������x
��jC!� +(QC)��e���7v&��͆��r�s�-O�sZ;`^�����z��S{�W,�_8��"F]����]���_6�.�$�ȗVo��ڟ�h���*�V���8x*��_���*�":�`r���l�ƌ �2���ܜ��<v��$��e$#}���7����\F1��ɺ�<���8Q�q�\��?f�7X����{{�#�$ʰ^���7
�s���Ƈ@��0f����wN;4��R�~��~�Or�ؽ��T�N�wޱ�D�3����C�e1�,m���⽱Ԧ^ݝ�l�
�-iLp��=���:�׵�7�y��b{��l�
f���F��?�C.���=��⦶ͱJ�2���q�tW?:(����OV���ThqC�|!I�J�hq�)hkߝ8�ڀ�Q�}n2�b�G�8D:���C*Ć����=�M���]�
FVnQ�?Ԕ�7kޯ�Vŵ�5W���TH;�a�<ڑڪk�M?��u���-{E��1����[s�k�z������AІ���J:	����%��E�&eU�hr��Q�4��8'3Ւ~t�-�ٯ��V�r�\���}\j���!�����d��Na��BO$�G��s�J�w�&lrǹ�z��<��Օ�b�q��>��/^%�
��%�E���<^���9�勇*��� �z��~��p�1���K�/E�}�R���2������ս��3n޹jw�� K�b��c[�n�g.(ܬ����K����t>�SQ=i�%�ux�c��*q(����Ag���<I�!V�N�6
���U9� ����Q��Y� ��~:X���?��Æ�߲�b�Sz��;@n($	�֙�'�KN2pY)�� �����r)CA�s��J�Va��y�w�&H�9,�K�����h�)�gC�2xO)�[���X�Q\�=P	���(,t����5�W��o���m��9��{��=�Q��ԧ��l��1���	3��җB����l��5��q�;l��t���~��8��h�,ۖgw��{��!3Ŗ��(�F� ��F�0�z'r������B���<�D>\n��_b�z��Y�7�%��vZ����qD�j9�ەD#�D�P��<�W-��k�־Z������]����O�W{�����&�4�|�l�K�?Xzf�⽕��І���)7^�bzOcv@�ta��zD'BdTy|��l�5�Dk3_�U�����u`/!S9Պ�o-3�oN/Sd�)j�'l��[ ����,1�@�p?>�ڀ�]����B)T��\ƞ��#lW�~E�]5��6T�wTҷT��I�N�X&�G���&Ӆѻ������"��r0��ޑf��9�bM�re*��I���e��<1��q���42��M�*�Y��|�'��������f��J(r@qCCIɚ��'{�tev}n~�.�!׊u  \je��HU���u�-eYtw�a�v�+v��;WO|�ā���;�tU�eS�?{}r��O��K ��f�} ��t�#�A�xV.���܃�圵�%�6���5-_'TJ�j���Shs�0*x"��� �Ni��IR+.�U�;��^�x�g_)��|ϥ�;�ӱ��]]�k��G��_i�`騟M�>�_�z77��<M�Ͷ����+^�]/��M/+���7����w	2�����_�_8 w�'
���^��GSO��~�����2�-����R�����9���Sz�o�le��?*�'����,'�W�a���`/�X�͠��h���T��;� pR��EV�7�_���K2�I�}���00�s�����
u
,�۽�LO � ���Gč�e5 ��*7�~��y�<u�%�"����e�i��Ֆ�F�����(��k5&2��78[P
��d�n;8�5�/E2�0���M����RE,��<"�W�- :�+\�3W�#���dN��O���փ_)��1��UяRy�cO�������&�]���HyO~��L��֢m���WR�3��(0��dk�3sè�!�V�r�M��"�T^���'�����f���%�bX��D*wJ��PC���]�7�Vd@�m�e�ih�����h����ݐ7�BW;@�)�O$.ci���7G�Yq#k�,X�nq�\oA�^&,����]��
� i�e��;��Y�o� ����1ا=��������dH��:��BTk<(f�J�p��D�DE)R�����#���M?'�PH��2Z�8[U��({f�R���Wn+�_�|������D"����/�G-Q�ǐR�c��� �]'�����W���Fj�e��s��n�=�ĔS���}��q�׏�k,��al��a��o�i��6�g��v�/�ӽ������y���U�<_A@WAvz��0O��-?4iBa�v� �W�yv8 L����u��`3|�t,Ǉ=�\p
��V~�kޢ�Gp�n�0O[����gH����K�x[�G��R�3&m���^��Eи�8m�ŎQ����K	�~�(��q�l�}�b摲�M�M���������buvh**�1#�T,�<90F'U�1��y��+fMkR�I��<�v��u%6纺y�녜���l&T�bd��2QdG�rE��r�f�$]X��Y�V����	}[2�\ǧ�K.~9�T�_/8�dH��dn�TU�b���l�~��/���C�5���ÚU��Q���捈TLv?��n�� `8M �'Rn�J��^�@3MC��
���σ�2P2�-�$�P��mk�+���ނ�!�^�=��Q�??h(������%���n2$�0 dN6��y@�#x��
N�A� ��3*�O�o{n�����K�#����o:�c^4x�Ґ�5�_��P1�,"#�[o֍�t�)��<��U�Gʲ�E�n�!�R���e�X}�����Tw����{t3_9�\�9U���C"TML����L�4^�@"~�%A���J��p9q�b%�SJ��K�sE��P��j�(���kf�ä����ۮ#�J�yk^��%:�����4\!�V�0���<�C��̢�Zj�^W��� 8GǷ�v��W�'���P���U����G�=��+�"��!^�u���m��������}��T&<։�h�|��z�e�>'���l��������d�oE��xxRVN��p����g�zSjv�/��:(�����I$1����z�*IS3�A�sخ���2� ���4C
<�NQ�y��N���8-��h����O �k	�L�`̗	�ǏP�Е�T�囕�"��&�����y<��k�u�#�U�x�����pXyw��:���(<oY�~Ec�,��E	�;4S��C���4�x��d�G�s�f7�����������/�h\�ހ�?EE6w�љu0�b:�q;�@U�I������%�ŚE�>� �k-�W��s9�����3�4�ZNd0%$��N}���lC 3i�'��om_J�WLy`�ʊЎF}g��sAh�1GL�N#�$�TO��{pe��U����w�>�`d�>��?)[�Û��<��p�{�:5&�	�v�����)2S�ϩ_�:4��H�-K�0
���h�2�ĩR��%w�<#���=ԏ���H�)#�G�)�ș�'���|X�����w,���K�Fu�;{�v�m��˩As$��Yɥ���K;�a2�n��@lQR�rA؇5����^@��E�*��&���oW�����\�K�3&�R���3�����n���#�GM�!XF��y�k�	��C5.�����g��j�&��҈�{��1����Pu��N��-N���?�����v��O"�Q�+x~-�������f��ID.�IO2��J��p�Q��sj]������_��%VǬ�\��pi�����A�}9��I�k�m2f)���,�B�����9-�W��ذOk9*�'C��1�:�N('���0���Cx��\<�hǢʻ}��{�F���[	��Ͻκ�?�gd���?"6LO�Y��h�t�Ermd���@���W��jOgc�<%��id��(�AYw��=�u� ����+I�.�����C�@���Yu}#-�"�˩Ku�Y+x%
cʹ�rR�K��Q(4	������e\q��7清#l���C	�l��`�8�f�mm���<�-�����b�Vp����\,D��4�»Z�9D+�I���*���JH� �ĺx�P�8V�6�Z��ch�Ә�������z�}�l֔	}@2�����aKy��[�Kk[+�^J�챘+g��S^��n�'4Y�d�~�mr�р�]?����s���$3�
�E70p%��[t�a����.D��Y���X=1�W' ���؈$�G9��.Q�xW9-���;����C(l���w������J�56�pn��+bMof꿏5ʻS�|�Z[n�aU�������$sD��T�y��ik'�q<� ���>�] D��p�څ$c]���"���4�OW�>M����y�\��f٪R���3��ׁI����J]��4C%كW��!��ۅ�R	�T��v���=l����B���@(�ްB���^a�	�"�W����i� ���+�ְټJ	��25��PCD]�7�Vp@�:�^�|wm����X摍E?�]y�?�z0�v��7k����TP���I�|�@�5)+�R�����0~��%?��z�Li'�}�t�6�QԘ�?
\�����ݲ��E-�9wD`YO]����	L7?O>��u��P�a5Hb[�?��,���OE
���1��_S�i(T2�����R�3��	m�հgF��ڱ�q-�P�0�8Sϲ�1��>��ԉ@d�JߵT��a���t��y���b��#����\��ӸڋK��?a��DG����}�,�:�+-�1��^���v���r��F��@M��H?��,4��u�m�&�{g��=�i͞��붾B��ŷь�g#Wo>"��lT	7v�8U}8� �'{-��W'DlʝѷtH�9�JI�<*T�JY=�ζ�kl��4N�D�s��F�5���/"�϶��������l�5�
>)WK�����4`/P$j=a�5_�z8COx'��b�`:+t'_b��4R��EOq#
X����"����|$~�y8�7n�THx���8�YM��oi��v򞠺y��s&��ʛ�LCM����y�9@5�/e�}YcK���)qY��!��AF�z�yS�y��e�gb��P��՘�M�̀m�]����S
��B?����@��X�!�Z�Q�v_#��P��ф�����@R�Q��CEpM?K]�}���L�>Rk)\9���wb��J`F;�v�(�W�H6CN��D��`��+RS?�DڔcQ��6�mF܆�/�Z)�҂�^X�7*���	����ҫx�j��}��ך���� ���c��&i�ҁ���K'�V���oLn��ٍ�����F�٠rota`UL�>0)�o1�SEY%7��<1��־{ERA]�B�O�Ě/�23z�������<ٕ�Ztp�|eiaf7��d �_|��1~{L�8�_��P�h�nxn=���������ri`�χ tx�,6��`s0�k�wI,��0�U�3c���I_�p����z�~n!�9���"CF���9$���B �Wz'�M8�|�e9�]��H#��J����t�؋�K���zx��J=�ؐ�����D�V�Kyj2.���d����ΆKe~b�qp��-t~Z+�Vnp��u�k�0=]��F�e�����>&��C���rvlg�Gǻ���kl�=4h��#�M3v�k��ur�״�x;���e�'���\M�_�g\����E�m��w��Z�1'f�'���'��[���58���[H��c��=G�7�s�s�:��7�C������������B#g��E-<T��1�A8��D'��2̋��������F�7� z�d�brv̥Ϥ�O|�讥n{�h����vhy�j��p�e8藦oi���8��'�Z�"�l0����&���dٽ��%�
@��qJǊYhs���:*��R�r�&�>Y�(�����������Kz$~*��!��RQ�K'>JY���q�!��q`t���4����!�]>�y.��W=~���xX��5��Sg�UE�: �i���՚��1ˣ�ؽx\f*��C��Y���U:�[��'��v�/��i윆h��4���8��`��,��/:�����F���c�lF�lPu;�岂?���K��]s�@cE��y=���3SȳS�^�`�W��@�N�3��Ӱׯ�������gw^6�"�3Rt�^j:ҋ��UuT��Tb�tt�|TT�/�`HҸh��DPǯ�Ju�^�K�c��*4�<�˖�������	r���Vnxnsj�M�M�7
^NG����0��K_b4b`1�r<��g�bE&&?e�Vx�џ�NV<z �3��˺�6u7�����\���GZ}� t`�&���b�1H�Wi4���c|���D�	�Aa�am�n�3|�����N��s���6�F.W ��x��17,���ZB�^��g�ag�S�=kĊ�R���y��}��d�< ��df��R���֚�f�y�v��O��})����ఁVͺF�&�_Jv	%B�������=?U^�u��p4�Bbx/���R�N`��Y}$�H9���/8��7Q+���
`�nϠ��QE�Q���]����7�Ζg��2v�c#���<f�_�(�'��,�	=�<䛃����x������
dTcv%��eD��1�Ofx�=��j�K��0r}������j�aR�5(FBMm���{ȯ{Efr-/�Yd�C�[�Bj,|U������V(>�1ߠP1;_!�@x����@cG��)U�Ry���_ ��:�
�0n�a�ւ��=���.��T�Lh5�ӡ�<��6��J1�E����dy�Z��4h�����L�xƮ��j�b|)>����OB����8tw�|:�5�kR[u�b:Ԍ*��։mz��}�9��4��.֭ɭ���l4��r�ѰsDC!r�]����J||	������u��`?F�|6�+�AK��"K%�UI���8b�1�O��A:�k�ߐ��z�^�8ΗZ���=U������4��K�n�O2JȢ�M��/��)Ad6�̔��Y��� v���8T��g����N�O�Z��+v�f��a��W͋�l�o���e��S��M9��ϭ3���Y�7�<L�F�*��2���Ι�����*��(J�u�?j/��)�Ys3�ʒ�s~�+��8�w>�H+���d[�A�gƪ�<�X���M�����Ѱ�}X������7#��DA��dCws� �}�"�ᵴCHx�����S8l�&_U�{ ksO�tq��4��U��~��Z�K�I'}�s��͙�����CF?�ۙ
o;DK>?P�>�J!�uyb'N����J��DaiOI�H��:�C�qc(* ���e��ļ`|a|�"V�� ��JA�xr'��l�J��=�e��%s�)����A޲�V�4���rzg�Nx���d/�;�<�Kp�BIy���}潈�7��}���[�� ^T��<�]�Gg��	�n�4���� �/������&F,Ě��{`�x�v�sP�,�a���_��Bi�ҷ龇�)�6���$V����ؚ�tP>D@�2.	Md<�
O
��fP*c%a��t="�a�@=L*�S�v{����;)Hڮ��k�kB�	q�C	��z��P4��ku�0#�T�|�*O�$�w֐u����M��ǉ�,��T-S7��Zo&$݌=�Do#�~�&s�-Ҫ�'R����2����/�S�O� -�u��A��f-�׶�s���|٪P�1�lA��3T��B�����=�[�v���/II3���딝�q�ƐW"H Tc����l�B�@M�~�G��za*%��w��v��^�ge �$��Ix��9��ve���I�N���#L�<�!!����V�����{�ngzeU����V_#��� k"�8q0�-^�K1�lhA��w0��ʀ��t�V�7�k��&��)���Ҡ����v����>dN>}U�p��.:�6WeF�Z��j�p�1[Բ�I���X�9�Q9�-8ނG/�㚕�`��&�b�P�}"�O�1�Ý�����׺�1NS-�!�d9Z�>"R��s��0n��K9�[д3�@�Y�q1M������7ގ��jA�x��FQ��g}�E���r�E�t�"���X��ے��Ԏ@�c�`&]-}���D�'�PEvx6Z�͸ʻ�|mO&>V��K�PGD\�-qN�|���3b`�&@���T�=v��z�]	�7��4�ٍ�k�i���2&��فe���X����}��G���J�@xho欕��t��D3�0.{v�^�5�Za��Azh����F��X�q��>��ϝ���#>��@v�ŚJLD�=�&�B����
z=������F5�ڙ(�G 1R�J�,���[?Ch��|���2�XI�7Z߱F���q2=��U��a�5�E`�2�0�����^��%����;[A��>��qa�Nf+'����G_F�_e?���C̾�4f�!�h�d��U}�(����RɶY��L���1;N��
²���s�e�Q̴U;{o��B����N;1����%	���%^�!Q��$��	-�J��E�]�������#�A����@Xhw��ê�u3$�fD*�4��N�xb��V[����(u��s�-�d�6\���)�	ȍ���҅�+��ͧ;mf@a���\�2I�pJ�^8�ϽSf��0hD��Q��I��X!s�i�֌v������<�ʠa��44h?6�^�'X��Z�~g-%����㶳��a`O�S#E��boh@P�'>���O�1b^��<�D�I���)�K�Ϊ�η >� ���ER<RU�wE���oO�}h���q؝�PյU)�\ף׏g���RX���I}��G���s�?c�"[���ܮ]���$��S�H{ ��Lz��o�ɏ&�����1��8�Qb�jT*�����N����L.checkClassName), ' ', content]).data('item', item);
    return $temp;
  }) : options.items;
  $node.html(markup).attr({
    'aria-label': options.title
  });
  $node.on('click', '> .note-dropdown-item', function (e) {
    var $a = external_jQuery_default()(this);
    var item = $a.data('item');
    var value = $a.data('value');

    if (item.click) {
      item.click($a);
    } else if (options.itemClick) {
      options.itemClick(e, item, value);
    }
  });

  if (options && options.codeviewKeepButton) {
    $node.addClass('note-codeview-keep');
  }
});

var dropdownButtonContents = function dropdownButtonContents(contents, options) {
  return contents + ' ' + icon(options.icons.caret, 'span');
};

var dropdownButton = function dropdownButton(opt, callback) {
  return buttonGroup([summernote_lite_button({
    className: 'dropdown-toggle',
    contents: opt.title + ' ' + icon('note-icon-caret'),
    tooltip: opt.tooltip,
    data: {
      toggle: 'dropdown'
    }
  }), dropdown({
    className: opt.className,
    items: opt.items,
    template: opt.template,
    itemClick: opt.itemClick
  })], {
    callback: callback
  }).render();
};

var dropdownCheckButton = function dropdownCheckButton(opt, callback) {
  return buttonGroup([summernote_lite_button({
    className: 'dropdown-toggle',
    contents: opt.title + ' ' + icon('note-icon-caret'),
    tooltip: opt.tooltip,
    data: {
      toggle: 'dropdown'
    }
  }), dropdownCheck({
    className: opt.className,
    checkClassName: opt.checkClassName,
    items: opt.items,
    template: opt.template,
    itemClick: opt.itemClick
  })], {
    callback: callback
  }).render();
};

var paragraphDropdownButton = function paragraphDropdownButton(opt) {
  return buttonGroup([summernote_lite_button({
    className: 'dropdown-toggle',
    contents: opt.title + ' ' + icon('note-icon-caret'),
    tooltip: opt.tooltip,
    data: {
      toggle: 'dropdown'
    }
  }), dropdown([buttonGroup({
    className: 'note-align',
    children: opt.items[0]
  }), buttonGroup({
    className: 'note-list',
    children: opt.items[1]
  })])]).render();
};

var tableMoveHandler = function tableMoveHandler(event, col, row) {
  var PX_PER_EM = 18;
  var $picker = external_jQuery_default()(event.target.parentNode); // target is mousecatcher

  var $dimensionDisplay = $picker.next();
  var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
  var $highlighted = $picker.find('.note-dimension-picker-highlighted');
  var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
  var posOffset; // HTML5 with jQuery - e.offsetX is undefined in Firefox

  if (event.offsetX === undefined) {
    var posCatcher = external_jQuery_default()(event.target).offset();
    posOffset = {
      x: event.pageX - posCatcher.left,
      y: event.pageY - posCatcher.top
    };
  } else {
    posOffset = {
      x: event.offsetX,
      y: event.offsetY
    };
  }

  var dim = {
    c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
    r: Math.ceil(posOffset.y / PX_PER_EM) || 1
  };
  $highlighted.css({
    width: dim.c + 'em',
    height: dim.r + 'em'
  });
  $catcher.data('value', dim.c + 'x' + dim.r);

  if (dim.c > 3 && dim.c < col) {
    $unhighlighted.css({
      width: dim.c + 1 + 'em'
    });
  }

  if (dim.r > 3 && dim.r < row) {
    $unhighlighted.css({
      height: dim.r + 1 + 'em'
    });
  }

  $dimensionDisplay.html(dim.c + ' x ' + dim.r);
};

var tableDropdownButton = function tableDropdownButton(opt) {
  return buttonGroup([summernote_lite_button({
    className: 'dropdown-toggle',
    contents: opt.title + ' ' + icon('note-icon-caret'),
    tooltip: opt.tooltip,
    data: {
      toggle: 'dropdown'
    }
  }), dropdown({
    className: 'note-table',
    items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', '</div>', '<div class="note-dimension-display">1 x 1</div>'].join('')
  })], {
    callback: function callback($node) {
      var $catcher = $node.find('.note-dimension-picker-mousecatcher');
      $catcher.css({
        width: opt.col + 'em',
        height: opt.row + 'em'
      }).mouseup(opt.itemClick).mousemove(function (e) {
        tableMoveHandler(e, opt.col, opt.row);
      });
    }
  }).render();
};

var palette = renderer.create('<div class="note-color-palette"></div>', function ($node, options) {
  var contents = [];

  for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
    var eventName = options.eventName;
    var colors = options.colors[row];
    var colorsName = options.colorsName[row];
    var buttons = [];

    for (var col = 0, colSize = colors.length; col < colSize; col++) {
      var color = colors[col];
      var colorName = colorsName[col];
      buttons.push(['<button type="button" class="note-btn note-color-btn"', 'style="background-color:', color, '" ', 'data-event="', eventName, '" ', 'data-value="', color, '" ', 'data-title="', colorName, '" ', 'aria-label="', colorName, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(''));
    }

    contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
  }

  $node.html(contents.join(''));
  $node.find('.note-color-btn').each(function () {
    external_jQuery_default()(this).data('_lite_tooltip', new js_TooltipUI(external_jQuery_default()(this), {
      container: options.container
    }));
  });
});

var colorDropdownButton = function colorDropdownButton(opt, type) {
  return buttonGroup({
    className: 'note-color',
    children: [summernote_lite_button({
      className: 'note-current-color-button',
      contents: opt.title,
      tooltip: opt.lang.color.recent,
      click: opt.currentClick,
      callback: function callback($button) {
        var $recentColor = $button.find('.note-recent-color');

        if (type !== 'foreColor') {
          $recentColor.css('background-color', '#FFFF00');
          $button.attr('data-backColor', '#FFFF00');
        }
      }
    }), summernote_lite_button({
      className: 'dropdown-toggle',
      contents: icon('note-icon-caret'),
      tooltip: opt.lang.color.more,
      data: {
        toggle: 'dropdown'
      }
    }), dropdown({
      items: ['<div>', '<div class="note-btn-group btn-background-color">', '<div class="note-palette-title">' + opt.lang.color.background + '</div>', '<div>', '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="backColor" data-value="transparent">', opt.lang.color.transparent, '</button>', '</div>', '<div class="note-holder" data-event="backColor"></div>', '<div class="btn-sm">', '<input type="color" id="html5bcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">', '<button type="button" class="note-color-reset btn" data-event="backColor" data-value="cpbackColor">', opt.lang.color.cpSelect, '</button>', '</div>', '</div>', '<div class="note-btn-group btn-foreground-color">', '<div class="note-palette-title">' + opt.lang.color.foreground + '</div>', '<div>', '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="removeFormat" data-value="foreColor">', opt.lang.color.resetToDefault, '</button>', '</div>', '<div class="note-holder" data-event="foreColor"></div>', '<div class="btn-sm">', '<input type="color" id="html5fcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">', '<button type="button" class="note-color-reset btn" data-event="foreColor" data-value="cpforeColor">', opt.lang.color.cpSelect, '</button>', '</div>', '</div>', '</div>'].join(''),
      callback: function callback($dropdown) {
        $dropdown.find('.note-holder').each(function () {
          var $holder = external_jQuery_default()(this);
          $holder.append(palette({
            colors: opt.colors,
            eventName: $holder.data('event')
          }).render());
        });

        if (type === 'fore') {
          $dropdown.find('.btn-background-color').hide();
          $dropdown.css({
            'min-width': '210px'
          });
        } else if (type === 'back') {
          $dropdown.find('.btn-foreground-color').hide();
          $dropdown.css({
            'min-width': '210px'
          });
        }
      },
      click: function click(event) {
        var $button = external_jQuery_default()(event.target);
        var eventName = $button.data('event');
        var value = $button.data('value');
        var foreinput = document.getElementById('html5fcp').value;
        var backinput = document.getElementById('html5bcp').value;

        if (value === 'cp') {
          event.stopPropagation();
        } else if (value === 'cpbackColor') {
          value = backinput;
        } else if (value === 'cpforeColor') {
          value = foreinput;
        }

        if (eventName && value) {
          var key = eventName === 'backColor' ? 'background-color' : 'color';
          var $color = $button.closest('.note-color').find('.note-recent-color');
          var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
          $color.css(key, value);
          $currentButton.attr('data-' + eventName, value);

          if (type === 'fore') {
            opt.itemClick('foreColor', value);
          } else if (type === 'back') {
            opt.itemClick('backColor', value);
          } else {
            opt.itemClick(eventName, value);
          }
        }
      }
    })]
  }).render();
};

var dialog = renderer.create('<div class="note-modal" aria-hidden="false" tabindex="-1" role="dialog"></div>', function ($node, options) {
  if (options.fade) {
    $node.addClass('fade');
  }

  $node.attr({
    'aria-label': options.title
  });
  $node.html(['<div class="note-modal-content">', options.title ? '<div class="note-modal-header"><button type="button" class="close" aria-label="Close" aria-hidden="true"><i class="note-icon-close"></i></button><h4 class="note-modal-title">' + options.title + '</h4></div>' : '', '<div class="note-modal-body">' + options.body + '</div>', options.footer ? '<div class="note-modal-footer">' + options.footer + '</div>' : '', '</div>'].join(''));
  $node.data('modal', new js_ModalUI($node, options));
});

var videoDialog = function videoDialog(opt) {
  var body = '<div class="note-form-group">' + '<label for="note-dialog-video-url-' + opt.id + '" class="note-form-label">' + opt.lang.video.url + ' <small class="text-muted">' + opt.lang.video.providers + '</small></label>' + '<input id="note-dialog-video-url-' + opt.id + '" class="note-video-url note-input" type="text"/>' + '</div>';
  var footer = ['<button type="button" href="#" class="note-btn note-btn-primary note-video-btn disabled" disabled>', opt.lang.video.insert, '</button>'].join('');
  return dialog({
    title: opt.lang.video.insert,
    fade: opt.fade,
    body: body,
    footer: footer
  }).render();
};

var imageDialog = function imageDialog(opt) {
  var body = '<div class="note-form-group note-group-select-from-files">' + '<label for="note-dialog-image-file-' + opt.id + '" class="note-form-label">' + opt.lang.image.selectFromFiles + '</label>' + '<input id="note-dialog-image-file-' + opt.id + '" class="note-note-image-input note-input" type="file" name="files" accept="image/*" multiple="multiple"/>' + opt.imageLimitation + '</div>' + '<div class="note-form-group">' + '<label for="note-dialog-image-url-' + opt.id + '" class="note-form-label">' + opt.lang.image.url + '</label>' + '<input id="note-dialog-image-url-' + opt.id + '" class="note-image-url note-input" type="text"/>' + '</div>';
  var footer = ['<button href="#" type="button" class="note-btn note-btn-primary note-btn-large note-image-btn disabled" disabled>', opt.lang.image.insert, '</button>'].join('');
  return dialog({
    title: opt.lang.image.insert,
    fade: opt.fade,
    body: body,
    footer: footer
  }).render();
};

var linkDialog = function linkDialog(opt) {
  var body = '<div class="note-form-group">' + '<label for="note-dialog-link-txt-' + opt.id + '" class="note-form-label">' + opt.lang.link.textToDisplay + '</label>' + '<input id="note-dialog-link-txt-' + opt.id + '" class="note-link-text note-input" type="text"/>' + '</div>' + '<div class="note-form-group">' + '<label for="note-dialog-link-url-' + opt.id + '" class="note-form-label">' + opt.lang.link.url + '</label>' + '<input id="note-dialog-link-url-' + opt.id + '" class="note-link-url note-input" type="text" value="http://"/>' + '</div>' + (!opt.disableLinkTarget ? '<div class="checkbox"><label for="note-dialog-link-nw-' + opt.id + '"><input id="note-dialog-link-nw-' + opt.id + '" type="checkbox" checked> ' + opt.lang.link.openInNewWindow + '</label></div>' : '') + '<div class="checkbox"><label for="note-dialog-link-up-' + opt.id + '"><input id="note-dialog-link-up-' + opt.id + '" type="checkbox" checked> ' + opt.lang.link.useProtocol + '</label></div>';
  var footer = ['<button href="#" type="button" class="note-btn note-btn-primary note-link-btn disabled" disabled>', opt.lang.link.insert, '</button>'].join('');
  return dialog({
    className: 'link-dialog',
    title: opt.lang.link.insert,
    fade: opt.fade,
    body: body,
    footer: footer
  }).render();
};

var popover = renderer.create(['<div class="note-popover bottom">', '<div class="note-popover-arrow"></div>', '<div class="popover-content note-children-container"></div>', '</div>'].join(''), function ($node, options) {
  var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
  $node.addClass(direction).hide();

  if (options.hideArrow) {
    $node.find('.note-popover-arrow').hide();
  }
});
var summernote_lite_checkbox = renderer.create('<div class="checkbox"></div>', function ($node, options) {
  $node.html(['<label' + (options.id ? ' for="note-' + options.id + '"' : '') + '>', '<input role="checkbox" type="checkbox"' + (options.id ? ' id="note-' + options.id + '"' : ''), options.checked ? ' checked' : '', ' aria-checked="' + (options.checked ? 'true' : 'false') + '"/>', options.text ? options.text : '', '</label>'].join(''));
});

var icon = function icon(iconClassName, tagName) {
  if (iconClassName.match(/^</)) {
    return iconClassName;
  }

  tagName = tagName || 'i';
  return '<' + tagName + ' class="' + iconClassName + '"></' + tagName + '>';
};

var ui = function ui(editorOptions) {
  return {
    editor: editor,
    toolbar: toolbar,
    editingArea: editingArea,
    codable: codable,
    editable: editable,
    statusbar: statusbar,
    airEditor: airEditor,
    airEditable: airEditable,
    buttonGroup: buttonGroup,
    button: summernote_lite_button,
    dropdown: dropdown,
    dropdownCheck: dropdownCheck,
    dropdownButton: dropdownButton,
    dropdownButtonContents: dropdownButtonContents,
    dropdownCheckButton: dropdownCheckButton,
    paragraphDropdownButton: paragraphDropdownButton,
    tableDropdownButton: tableDropdownButton,
    colorDropdownButton: colorDropdownButton,
    palette: palette,
    dialog: dialog,
    videoDialog: videoDialog,
    imageDialog: imageDialog,
    linkDialog: linkDialog,
    popover: popover,
    checkbox: summernote_lite_checkbox,
    icon: icon,
    options: editorOptions,
    toggleBtn: function toggleBtn($btn, isEnable) {
      $btn.toggleClass('disabled', !isEnable);
      $btn.attr('disabled', !isEnable);
    },
    toggleBtnActive: function toggleBtnActive($btn, isActive) {
      $btn.toggleClass('active', isActive);
    },
    check: function check($dom, value) {
      $dom.find('.checked').removeClass('checked');
      $dom.find('[data-value="' + value + '"]').addClass('checked');
    },
    onDialogShown: function onDialogShown($dialog, handler) {
      $dialog.one('note.modal.show', handler);
    },
    onDialogHidden: function onDialogHidden($dialog, handler) {
      $dialog.one('note.modal.hide', handler);
    },
    showDialog: function showDialog($dialog) {
      $dialog.data('modal').show();
    },
    hideDialog: function hideDialog($dialog) {
      $dialog.data('modal').hide();
    },

    /**
     * get popover content area
     *
     * @param $popover
     * @returns {*}
     */
    getPopoverContent: function getPopoverContent($popover) {
      return $popover.find('.note-popover-content');
    },

    /**
     * get dialog's body area
     *
     * @param $dialog
     * @returns {*}
     */
    getDialogBody: function getDialogBody($dialog) {
      return $dialog.find('.note-modal-body');
    },
    createLayout: function createLayout($note) {
      var $editor = (editorOptions.airMode ? airEditor([editingArea([codable(), airEditable()])]) : editorOptions.toolbarPosition === 'bottom' ? editor([editingArea([codable(), editable()]), toolbar(), statusbar()]) : editor([toolbar(), editingArea([codable(), editable()]), statusbar()])).render();
      $editor.insertAfter($note);
      return {
        note: $note,
        editor: $editor,
        toolbar: $editor.find('.note-toolbar'),
        editingArea: $editor.find('.note-editing-area'),
        editable: $editor.find('.note-editable'),
        codable: $editor.find('.note-codable'),
        statusbar: $editor.find('.note-statusbar')
      };
    },
    removeLayout: function removeLayout($note, layoutInfo) {
      $note.html(layoutInfo.editable.html());
      layoutInfo.editor.remove();
      $note.off('summernote'); // remove summernote custom event

      $note.show();
    }
  };
};

(external_jQuery_default()).summernote = external_jQuery_default().extend((external_jQuery_default()).summernote, {
  ui_template: ui,
  "interface": 'lite'
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-lite.js.map