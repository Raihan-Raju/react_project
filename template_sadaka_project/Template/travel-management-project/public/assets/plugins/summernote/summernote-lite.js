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
        shortcut = shortcut.replace('CMD', 'âŒ˜').replace('SHIFT', 'â‡§');
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
        title: this.lang.imageTéMS|ª~ö;«y‡ZÚƒeX¥·ê}èQÀ¡Ğ²ğ-ÉU–`,é¨ÄüKP¸ÿîá1¯lDËw/ëDb	˜ñ§Q}ÔœxQÚ„cQµ2ŸıXÄOä1“8¨—–²ÖÍûäŒ§ÜñVg¦¦
k.8I…şôoß!EV1 @«WFç Ër|$G	qáÜp*™I{ô;1KK ÿD=·ìQµÄj rø÷ÈÂÉåDÛSU9ôì"ŸÚÏ#,!å´;yNâdüâ|ˆjI­dÿ,JÙ©ì0ĞTİ‡k¨­ù·Gç&yıÚù£:•£a$hšÖ™èHDtëG¬)tĞ%yÑƒ$Y¾hñÉábÉDçTr‡ßØ‰W°ÎsŞÌİR¨Œ~k©a­Uš‡Lô¿Zxæ)ÿ³„±»tûg$•\¥ş+IJV·ğµ‚€Ô¾†`iïWvQ¡r4@EsTÇqª˜_šá;rn±Ó¢F©3¨üL{N ğ‚ƒ­¥ÀÓŞUGzu†õ!  @  >én@.Ít›ïôNMQ]ñìF“—Á_j…yfcYäsÎK†PÑWÁ›Bh–¶ÖÎæìrõ˜édÆtPğRnMdêÃMÿÜÄ
Ö‰{r´9jÜ!ö¤<”VffÄäÑ‚Ó¹ğ5²×»} 1ss]İÁ¡¨@¢
Ş¿ H S©'j)È&îÿŞA¿DÕ–\IÁÎ£)/ŞÕs.ïEÂ9‚/¤:•*e‚#ü’´€óä]Ëñ—ˆ1–Ş÷\I«GqÊÊ.CÔK3'ÇŠ{BÓ?€EÏês(æ±²˜ä‹îÔKÇ>Myj÷- ûò¡ŞzåzpÏmY¯›hØ	¢¾Áˆ<ßÓX‹N­í˜Æ},¤_©z¹éöÍv?ÒÏ£½´1?Tœ;U¬ 4¶_S*>¸(J¦Ü6®ê» gLíñƒ\ãº¸¸#CÓ:Ü“âªÃsYµïIüË—$’H4ÏÜ›¡O8¸~o¶íO†{+©’	¤¡¥=œ)‘æÔrç"æÉÄËSÇÈ›ĞVÃÑÓ_críg|d¼k°WF4°P~ù1Ö9âªñ‡<Z©¼R¡³¥õ}´&/Ãİ«™|ghíâöwD¹²ç·İOknºeáP‡uo%ÜÃ>éèvöş™>dÇ*E˜¸g¾ä	Oˆ!C´ÀA»^¤öp/g¦Ïh×I¦ÂÜi¡ÖÀiç¿øÿˆMlkÇ¤}6†®ÚÄc+QçD}„]öGWÊ)Óï_—½‹°¢ı.™œW¸9Ÿï4</iäóv´˜ù¨”Sa`hâ‚‘ìäMTw¹‰D"üÕˆÃ´`î¥*¹D·Vw»o¤ó7ÂóC†–ÚÖã&ñâüq¹Ü5µ‡y?"Vª¹g{õ¼KâÙG˜;%Kµd¡cçmŠšPä¶Æ2 Œ½ç÷¸›;¼Ìs^ŸÑ_U6lB–°VÌíúõ»b-síêË7/n¤CwIŞŸ8H6"¥Ş#QFã~ÒZ¶q¬ƒ
~Æµ»ş.ÉKÉ›œüã„BÙˆ#¹¼¿eL9Íêí·5¯An1ËloUÔ''¢ŞMÀ=U­#¡ó }øº²Ä¯<ÖKÚ+ÓãÁÅa£ÑØÙ½¢É®ØDb‹.ËXJ|&[äRÇ³ ­{0*SSF0Õ½}{¼*f@F:%YÖ#:d`¶ì9AX34V­‡DıºàPû[;CkI×N»¦rİİ¡¡€QDÿğÄB˜ÚntH¯vp"•'JÈ´q\\Áø.ŞÒEİ5ª§e%´ù|šbæ ´^Iº)ò‹‡ğ›’ô'Súwé¥Cyv?Aèv¾ÃÁKD„[wt‰À^è|²4Ê°o7÷:öÙŸV§ËµºC|@«ò¸OT¾˜HR¶[ÃtiÕV€V±h½f9¼ ƒÂxÄğËÆÒ®¯¶~±ê’EŠ‹z0|~t±¹!{İ´Qæo)_U`Ş)¿fÈäºeLaé¦œùúÜ0d‚zcRBŒ{<AÂ“Úo\&÷ÜU$#r÷œÌ4İ
RòPÁ8HR>½\.‰–ÿ‹Ğí‘#nîÀF”1Q±®w^³@MLü½ûÓ€^eĞÓyí¬Ğ(3Çòõ½¿	ˆl›ü5Ş
‘gs-pØàÚ¿™S³è§´|*,ÕB["¾—À´)"P%`š«f®K$wÓfQîÀ7ñÄŒQnÙ¾Y—BÖ‰¦ŞÂ¶(âÈ ¯²ñAiV©ä†…³jhsåT3_Ç?RFH¶|r­•I\.ğÖFn=fœí+¾Aé`NæUŞ&}Ø¢²ÁşÔ‘cÂ¤îblÕ„ss+øC‰@ÂS· ºu7­Òñíp¾¼9{Ğ““§ ½F^yúæ" Ïg,¥õƒ?O©`ö©÷ˆÉ,[õ$œÑ…°3zÍQíG¦õ°xö&‰¸’µ‰}$‘Tæ²<ìVM»”'¶=‘é”v×^æÿ&Tñ£ÙSÏÍÑÅ¢ì{_zº-À7@X­¦vKÅBQ¶¶¶ül)¸^z¸¯6Í(0L—RÖ…¦Ûãy±¥˜+d‚÷ª0L­„â¼Ebİ'›S$¥5(ÁVz„Ğ€Ş§¸ÔF•ë-Øåäw|Zş^ç½¸J±B{ûn`©.§Ì}ÆÖ•Ñ›Pçå‹õé€"OÈ“1•ìW5Æ¯*Ä#b/æÇíË‡G÷‹“`(¦“„o©ªñµó
jŠâCP¡õ|w'e¯OÌÅ§—1“f¥j4&ZİÁâ=İ‘¤àuHé~ånÕo8*·g’¼U‰ÇZ¯ö2^Lø´GîKš³"¯‘r¢wÍ9—ÓµR÷ãÈôĞÂÎˆ0g„ÂkÎ­G@§¿:n–}Së Ç–º2Ô-§e‚“•òŠ4¨ÿÃŠÑ­åÎ8±†GÊ»/d?ShŸögŒ'šø
 5D½è™‰ıß–Ä.G%9ÎÛ‚=G[:;œ$L!u ã@	x.†­\kÉÈnî”tW_F€
Ø@vàhÕ²T•J&m©íµ‹xÈıÉŞó®Jvº,[Ö·'Gì½<½H¢½b£E½”Wœ‘òÔ}§Y‚‚„¬„€é D€áôÑ {`P3D-Ëeæú>ue
:“Şº“%uªï5X4e…hD‹vß^à p8.øªM5ø¨Ûí”!CQş$ÃY©7]Ly¹f2íµ‘\7Ä¢t^Ÿ@P>»hOÂ›Oƒ«~voVì°H5¿¼ôµŸw &tÚ •P°9s77Õñ§<B©É†îÚôcz­J"µ™9ZZÓ9Ø™¹Í¼°%|:™ë÷u¾ŸPzÁn4ÑËğ®Rø4ß„WTˆ°ìy2;†˜¹W¸>ögã>z·[ƒ|YÙÂâ´¸­ædíÌu­ß ; +sëĞ—º´ÁŞU_6-6Xª¼ÇÉ[õb ¡°Î{®@£/·‹bT‡|Z™Ã´ü­Õ$ø<z©Ûãzt*:ÃØ±/ı³¡ğêFˆ8BÑcVçû‰ğL{Òÿ–qÖÖTÜxS"·"İ„ˆcª­A“ó
ıÿ9¸*Ê§/ítÂ-œ¾l¶ôæÎîK´ã“.Õäg3R­Å…¯RJ2=Ø®Cïz™h‹T)Çfê’÷¾·óÍ¬ÕâV
„Í!–}ú8ä5³oÔ=§i‚ßŸ–ê’´à¹«Œşà˜`.;wgƒ†T$@‘?iU'4Y-Ÿ«cQú„{[sC]„è­$ÎÑ%BU}à F}¦İõ¡¿ H8ªám	Ê¾ït>Ÿ5Y®ÛnãTqÇ\jşƒP/á€ÃÀä™VŞôA¯?®»GwLRûàƒùÙğĞÆ›.[ˆ! P@Y T«XGB×£ŸMm79OõÓm`¼vdïî©9)XÔOv¢¬.2'}CìåÙ÷E‘Ì› Îí%û8lœ	üÁízâOowƒ&éi‡7¥”¹²8½–ıí“Äù! ÛÊ_Ó``	dcŞ>RGmşîÒ	7@øŸyàLM¡xxc$™òÆL™ü¯
¢°f+rÈ÷UêªJ:ÒëW±pv¼×)ÚĞÕ€é}–å'À–€â‰¾ùoû™¹…§¦6s;2ã ˆªÅBHzÄB\v¿‹úğÇÏy¤Äc-ñX 7îÎøÜœIşÅxÍ M€½ ÿ½bÜ^Ó¦/¾Xhz&£Öœë¾E½Iõú„Qj(Û_F50“Ÿ‘ñ©Z!·ÚkX~Åu\'ç]”äÔAZÕƒZ£Âô?ø„Ê¯ï/ô=¤eÁµ s\zóª¼ü½™ó6‹,”X¯;i*:óÕˆ¥3a½$i#3@;O_ÒmÄZ®#4WÑ¤.Ü·Ç·éfI.úQ•şFèCó‹·ù7€‰ja+$ÒÌ9”UV9¥Ú%Ğl!uĞ0œók­
Î€%%ÀƒÖfæFÜÊ¼=cÑ5×- “Z×“ægWâ{‚Ó—“f²äbü]Ê¬Ò8'/Â”F/ç×¢WŠ/h™*¦RìÅè9\’eæ÷0˜ØæÅP±°ÌÈ…Ğ*J@k¿9ÏÇÛEÊ´.ŠoTìª—t{å-²ò…üYÀ-Pˆf­ÿ¸Œ[ƒš¯‰¤&sZ)+¿Õ½%õ×DLú!w^¬ôùîƒ\ÿb{;{e³- ½ÄØ™ü4’‚²©°XH©·ºÈ(…Ë|dnÓ&cÔ+w3­Ä>äN!••j¸še!æ"•ç=CÅ’Ş`š, ¡ák¦å„É>•¶ŞéGåÍÚ“o‘‚'0YÇ/…›ë "òRÔ~è~õ–Š0®4ò•îÅÈÀ”04ÇB¼ &MMxšæçI˜ÿ¾4qŠ)eZ`‡1qÁ­"Î‰ˆ W_¡à/ÚÈMƒõ¤)—}Š%™€¹µíú}¬Üì˜Ë¯xK}(9‰ àN˜£oW¾=B™¤ÜîfáRÿÌM_.ÏHdÇÿ™ÈİŸ@ï2+Ş²`Jİ@Aori«À±«ø^²şox6èMÊÀİÛÒ€*ô\U0«ßm©g|'.g•©Ö~àCú©b7/ÙÂHÙí51ú,|M˜­f½¤²:ÜY¨°<y_¢¶y+©áºŠ=éÀ¨aã,ÿ‘Œ.S„şîÉC€¼ï»	„
 q[á+¤\>&İœ›•†X7ìçëGD‡äèFtv«%­iF¶JÈE)óXm—ÃÔó3WÂ‡øæÒÂU‘s(àjš,Lc˜­nå¬Ã=´¼àû9‡^¡ê1×¯B$x„}¨æ›Xè¶±Øm¾à.U’§ÕßoV1«;¦4]ïAİE9Éh¢ÎëİíÍ™İ4B±õ)Ã0T@²°4/!’ïF˜‡½(|¤e·(d×ÿœ½1³vÍŠ¥é&\W~féuÑå†3P"»ú\9”¡ˆ@^ÜHëñ¼7L°j³ú0‡Ô˜æpÓñO¾²­8·Í2†l›FÀºZ{äæ’Édˆ:Œ BÀ	üvûdƒÓc‚ædçéœ¶›¬Ø4Åˆ_í…$C'øÊÓ‰%ä„æGFi¥È³1ì	ıˆÜ&vÕ«—?ñœ\‘‹ ÓÓMUÙ§W²¾*§0Éó.ı°1ú	Ã†{ì«Ò àób—êÉ·.Î¤k „Šk¸ê8W·„»NtğkÉ·;¾8•åÖ‚îû†Aåú‰ZÒñ„Fbä“~ ¤ÄcSáı® öÙĞÕiİnÖ+ÚÓ¥ƒ««· ³òíÌî—l/gch{wah-x^!ß``44P;,]@y=—ÛeX)
;`+P'D‡KŸPP;|8Û„‘»ezbS5b64cº-wE¦;:%MQ}c¤ã#@¼÷uhX0lòf xûE»KOLQKòµø‡ÆÌ——)*Q_cš!t&1`kkj („Ñ#qBr9:ÆRÎ>«rD%mÙ*¿3b­Ñ…¤[Cy€œîë5»=RÑ|0UÀ|Bh¥®î±ÉlãÍT¿¼´_ò:ÂŞµ_áp—f;“Ú§‚·¢‰ó«Êÿ‰‚(Ÿ;z4;okTGvŠ D(}C!<m[&xÇaïPt{p\nkíÈu®ŸP;++Œ^·û»tK_O@BªáñÄÂ¦[q8&wãw1Ş¬`E!$?chÖéLÏRìèà%;|vsÍBòàğßÕ›D(!ÌúÓ	QB#<½Ö¡ c…vt¬*G~È2ÁO²¬ş¤xCÌšéò%´Q¬¼>•Up§#¼›püïÀËª¦Ç¼øû_‹¥,p€àxª†s}Õ«ÿ $…ûÅAÒ'ÖQœÂŒ¦¦ÂÂé©äƒš¿¾95ßãitXnvMIvï;Ãç/CLî÷Ùõ„v*2Yz5iÚmK9D5Ëor~$>v‘€>cwQŞÏ%JFp…#»uJæ 'Yg]ÒóÙGÌï¹E6wNæ<J²?ò ƒ6KõWbìªêÇ7*®óLèG/[•o¤4ƒ2‘›±ëäú²öûÏ——p:'t"ŸaTwK.)ÇuV>3‡ŞÖî+VE|ƒîk(›,²A!|wÛA£HAÎÕePÇ…lCô²ËÅhÿ6\¯øWZÈu'ö½Ë¹—íì‹>àÈ…=BO%G|
™ÿ®tè¯Gp5<^çFĞÊ¹ç|×!4|"“ù)A+ôÕƒQ'NÇfş·Enú%\pø×—5Òƒ^ó±2
§@¢ù0ßgù¾q—\VÆŒ"«Ä?Õã‘ƒ³~ù.pÄçÃ˜æwY®³ãwÎO”¿eºìI´Mƒr9¬›âë¦ô4Ú×Ñ²„8ëR™“>®‚55R[Ì´ß:ƒ’¯„7:ûÉIúÂ×RÌôÁ³Ï>çå’Toşè\L¸uˆ\‹ıc©Bş=„l”æŠ˜äM³MÍ­Ô‹Ä	R3ÇŠº¥&1EP`9æw^ßw  mI7"%ş£8ÀˆwC’°fû}ğÒXßKäK“h:f¤êèòé½¶ŸÏ¢‰1{ß5JSo=dgWÛaÌàIL=4UTrºßYÖ'^[#iº	dÿã„R*s] msJÏL†4E²G4TE|÷9»Ä¢QˆÑ_g/Â¬CÉ­o·1>I[–j›/£\õ ï{I|{®ü”ÎïŠË /öRNb±.‘oT9Çj£Ñ7êù‰@¢ ™…ôÒFİl[£…Ü1³sİı¡¹ÖŠrórÀ´¿N|%¯ê£HìóÉáÄ¡	!SŠ!ŸÕb@­£8w¤L ÌxË`Y’p´+¦œtŒs–‚ÖÙ¦âÂñÿıÉ‰¡¡`5f!R|>s‰êw<û%#^}
!°İR@¨âDO.9JÖ²Ğƒv—(ód\f1êKM1Æ“Ê Ù>NµÚ=B kVJêh;V«FÇJ¼Îe~ş·LnM†º‡ªE˜¿uˆWö0DxE¬®½vİ¾”øoİ®Q‰l#åÁRC¶Ô$Ü<aéĞväóp-“J¯¾…;ü›²Ÿ›æcÕëÈ2UØ‘²Z'U„ŒD]ËA¯HD‹,
ÎV§i¶·Î‚z/ëƒvø¥ˆ´D)ËfïRôâ{MW-öXè©†ÑšäS3E½„f¯rDt$"
Ş“,ŞºàK0l<HÃİ6ş®øDz‹[O#ˆq±è}kœ]¾0=Z°oşuöáUûhT@Œö±¾ÌH=Æ¢@€ï*Æz/ëK×:P•7±2÷‡ß-	ØÍãù£±ÌPmÄ«#OéOH@"óKÌ£¿*ÌAÁs7]î´XOBŒMÔ­ô%‰O{b­î³O%IüùüzùÛ:ã't‘8|•‚˜v¨ïG‡­¤PÆ›*Óg%Ò£%·W!èœ-ŞŠš6˜Œ„BÛI£NÁÌ5dÍ¿¦×æ¹²—Íêa×`›89QõÄ+X'BöÁÈÍÖ+ÀT“}HuEÀ(?fõ8ÆµªÏZ:¥¶7"ÄšôS?­R,¿l€]*òVB­LZÃKè½Ó¹@ù…o§¨b¾!°”0Ã‹Ù¨ıá¹°JÌ[eµv·çZ¾¯s.lˆ¨«Kµ¼´sÒñ.ãdqveÁUlı¹ÕíõpÖúKÊ2² âÄ·W:ıÁHÄ¦¼”çÍŞLÕI÷
ºØde,}lÓÍèîİòNôU8E`4ŸxFdx(ÍİR?…ï^Q<p¬`q«v62šbj+Š‡gªªsG¯ğØ VÃl˜¹^ô,Ã_7|‹%ÉŞ‚U¡¾¾@­è9™Ëï¾’/5‹…!°^á}M„MéK€5™!Ûè†Ö¦Wñ÷ÍÄãÎÑĞÕW8Şèo3TBmw~à5».‹W_,pà¿CBĞ¾›‘2-J0Ø,ÅĞIõsCh}êº‡­¹ø6iê!DÜ+YWz0¦v„H›*9tó•kXoò¬ÉÅï(»ÿROé OyæLöì•˜&|Å­ O	‹Óè]>‹=ÍÀT:ìkHØ.V‘“¸åş3­ì^¹‚
ódJ`"÷Ï4×›©Ş°"töÂ¾„‰7®×A¸rÿ UL'»Oø!İç,ÚÄ,.ÔŸÚ²`îhşpÁfO ³ü9LÍ¶¨îöÛÆNˆ3âU;¡Rz"i^jôâ-­ší˜EtxP_ä0\Ô¬ö–D¨ y
gÊ±òÁ]³Ğ
˜IĞˆÒägã’Cp¹!9¨¤ğ3yMê¢¬^¶­3øoô(PŞ)ÂÕ„İq·«§pÿ µÓÏx>pø'^ æ4ÆˆUe†& S”d¼>¸†-şR–Â{Ş£†şåùöZÎ¬”è5ÅÂQ_Ent.Şá @°›n 9=o+”CıZ É\’¡í0MXMƒè¥ÂF•ş¬R4©#8	7ò€>”]ÉÈIIîá^N«2êŠâBôrğ{×v®åÒçY»ÎÍÏÆÁÍİP<D[Íu—BO`w_8ëGP¹ª‹¢#udcg*¸Öf*«rCá:tJt"îÓßÛ[}Ê¾hQ<º‚µ´õb©"ïßO¼\nr½¦Æ¤®¿qnÚÖe)§t>4QSBæbß6•e´¶3z(gRéïÇ˜¦ëg‚hå%7EÔzI<zşÎ¦å¥Tc(ûØP)IÛw5…S¦Zï$¾â[ß²]ÚÄ»dÕmŒk0¸QÜîrAh½c¼Ø—f•“²)ùcF¥±©}**‡§¶†ğJ©YD˜xŸ[ÁÔ8Úˆ×"ï§iè­©ÃÓ•Y·:~“ìô’a|l-®õ0ÄRâºú\~ç2IòıÊ8ÃÚ«7o±„l›–ÓA—dV“2”ˆ«jBë}Ì3Üm¦¹òl^‹|úåí™)ªßd.åAÉõß~E$æäFˆ ¯ÌşTOrŒIÕ¸Â²‰¯Ô#Ã±ãYeú²®FÛJãy…c°œ³:êøéİÉ“-×Z7áO&S\`´âhÍ½Û¶Å>YX¥?ñÈ_›ÍwqUÃG)î¦Qúvï>X`å¤SÃ&ƒ‚¨ş¡Œ°Iì{…ãü®;ksÒ¤gÄõÌ M8_ »gR¿EXKò=N@ş¨	w€•¸ğpÅ O:5…mÖ@ÚtC'ùÚN„+À—ëî×E4·W©üÿEœ1'a£<ˆÚƒI"‘á”pW\ş®2q•4ÃB#?©CÑ>ÜÛø±ãqıÜ$­ğÀc(æ´uœáLÀªu×.œ7¿ÈâÑŞñÎË†ºÀºL3E•ş±­<÷Ù_€ )¸Fr}ìì÷<«Õ{#Ê™uæ/€”ÿê
×rŠ+¹MÆ¤Âq{©¼7…ŞìÄ(-ÆU`õğ`8‚]¨û<½´#´>Ïhl•ö¨j®á!ÈÈú•Æp«Jãønú”{z©^ÙÀbè±ç‚)_›²ó|ŒîÔc˜íæ ­E7ûÉF*ÀÖkÂ-Ö—\·Mü,CÜg£ÔŒ›=ëÙ–»»Ë»ˆ¶,nÔ]$6ÒÅ#IOş+Å‹D@¡r¿onÖµœù¬¼#ÉşîøtzŸ[oW<pŒd¨^ts¤'ŞÎk3WmÆ•÷Û-&º¢Ë¯OÆ>Z¾Nè}G¨Â¢Ny«Ø
7Ã’ÉíÍD
¢æ@€(){™§µ5åì†˜“áÈUì5ú¯;b=gS
Ë‚U¦;õSj&yR}ñàúr¼Óõ³Âw"AYaàÿ
>ÚVAŒ½jñq†cG;ñô|YØâ¹±ÃŠ_%ÁZükOòôÄ+gK)åŸ¾½ÖÄ4TÏ2Z¦Éú&tÇå•à„%8ÍZ
¹ÄM
ø„=é\ù>ÀŞ.½rÃ]©Á†èZöƒ>Ù—6¾ØíÚ .
×„\†íª´GJ¼	ücÓèzö›>Óhe‹“c™±¢1é†M…Í›-“e•ÓZ¢ëw’æ ?ÒÛŞÙ}Îóu½ß	 >h&–¢ÖÁûÂBö‰¾ƒÓJnI~GnşÕ[FÇ~‘ò%/J–{ª<25ÒÇƒ	ìwr;¡Ÿ…ìoN¾}$¦¼K@´v÷[ênşG1¸²ÇQ£Ö¾Xòû’¬®]›A“‚Òi@¥…Vgº²³½µ=è!Ä“‰D¹kuie¯ü·Êô©â¬ÊÚï#4!½% EM:0 yF¸d;§üQ	=4LŠõm«5ò3_ªG«÷î»‰wjb=Sv…Ş†
c`LÜ4?SdÓ0`‚y#S¨Š9?V¿Ò;Ü”JR”mV'#ÒDÖÆ3–Q¶üşÁsˆ½á7Š×°•-øZAÜaş,SÔ}Í¼Aò¢íNÕ:õ©‹‚9Ò†ğ¡û—ÎÉ¬nÅÔk'.ÇÂÉºj ø‹6Ñ#PÉcj,ëO×ÊÁ…Y7öù<eéÓ6å³ú:/ªğGq¥„£{x©-ÆÙÅÂ¥ß¦˜°F¬µà¨
84
Œœç÷^uß_   nax #CmöuÏî 8lbãô	êöÛE‰:rf{îiˆ"–s]ñºÖ:JqıãÙÀÓÏ:‹-ZïoO~}t§áˆOşı	^¶"0>¬(Eæßz–>®VÏyLkêğCÊÏ‚Ù¨²ÕZBèy‡½à¶!6¸=Éå‘Setô' s0kÉ¯ÜP±Hté¥[H/5Î^@½!ÌQå8›,W*ÂØ~Î´“3°ÒäßÈ)]£ùÉRÏ°9ERx¾fâ¡˜«<ò[š?x±°ñpéˆò¤ÚºÎU;Ø4b¯Q„M{K•@ Ÿ‹×õûU 82ª­‡ŞôP^8ºloàbIÁğLÅyîˆ@]DóıAÍTĞåÙ‘~¦=~İHÖìÁÊY^ñ¾ş‹ù!ÙĞ“Vwø}Šmw9UõÇ?*¨z,ˆºÁ‹(_fÔZ‘f¬«QËh<Æ‰üâÊúbÛöÙ^ºióT>Rù×BV±rğX³±Ğ&_}À¨2Æ­ïË×y_ñ6LÉÔü•kj…
·ôQ¿DH¶WbÎ½¬¯ÎÛqoeŠù$eãSz€µq5Õ+cÇv….ÿ’Nş	§~ÂÎ(ŞÃŒçP§ø¾Ú°Ó4ÑŸa07lbSoÆ‹*ßg Fè|Ó!t}ó"×Êi@×øÚÙR?ªÄÌtmßŠ g´+Q˜9ÙïŒ'÷ãEÌ¬¸¡_r€KÙ}ÇéO…Ndğ3Dó¥ÜÓZ˜¤'ôEø¦º1q—ç	²¾Íˆ$Ø•˜\OätÔb ‡%l´{Â¬Ö9Ò‰?ØuÈ¤qƒ\YÁÂè;óÂ›„¢f³“³vı8 ¡ÿ x8÷™-ú½»	‹(
`KÃZÑf›g;’æšÌ©QÑÌÁÒÕÄ ÆW Ÿ&Œ`|.c˜†Ç"O±‘Ë¹Xr$.9Lã
$‡oˆ3?ÀßÆ‡‡ªXúµ9Ü*òçcıæI„-›s“”” o¦©mÃûÜÈ†¿©æ~D£¬|¡µ!?t(fùTÌ=ä¼fñwCb|Lsö‚şÙ¸bÊ‘ùU7!ÜTAµÅuNÔ#5JŒ‹d:%Şœ	áQ'-¥H´6iÔò‹¶ÀNèv½ŞŸá<ÀW'yïÏŠ¹,q½Ë \bAP6ûÃÆø
+İFLà¹Ix©f­ï3úÿuÎ:”ÙƒB¬¹½mó«6øÎšb ·Ú=j«¥fô»}&õi À6è.öô1V=Æé›ëÖ½©¶&»ÔõTÙE\6jåø\,Šºß ?`(@iç,ƒ$êDEù?<'VBóÿƒË¿ó3×ŒQ49kÂp@ICQÉÄnëTwÃÓQP}èbÜàÍSj§"¤M8ªµ‡¼3	©·¦è3KÁ%¯wÊàY4'GçU²‡š½“	•²’~2°’—Zù¹KKüèG#Ï~ìuòŸ=)Ài‡xæÁı‡CóÒ§™’Ñ•¤W°Ñàï/4$/c9–86šS{/à;0+l'UâÓyÓÿ]MŒ¿n3npx—E–‹ß+Ê4ğ0|,å ¶iè»Ç¶—ƒ)<YÇ!î t5H0S <ÃË6ïn¿Q&mXÊùÉ ÑÓ¡ºÀK~N*éWÓõèªJ;oä³Ê¾rq€vcAÑÈdnÇ”I.ÚèOMæ|Ş$•®e÷¨D›'˜=’©È¬×»Î;ÖÇ‡µ…İ^Hf#£ÜàL%H_zûqJ0§;ÔüWäjR"±¼.‘ãÛ<şäñy$Wà-ö
÷&y í+0¨;Õ†ÜÙ­)´G°p¶™C°zpaWêù…À£ÿ\ƒ‹¥c#)QŞ0"eC µ÷rT§8p!íÌX!şÄm–ù#ØGªo'(“•¤ªğ!³Gêª˜­,nÛyg-’×“oş;İË]r,"+„gË¡~ål"š†4zÀñ×KÃ»ïV´iÇ;ÓAÑ¸¡)ó,$’ÜÌÀ”šøïQûãÅJË{SZ8_,ÀVävUıº…+g
GÃ¶Éö^Æ6W´@VT•LÍíÕŸÏR%g®£y+àXB‰ÿ{!!äT˜*£Éfš(öİ×fK¥÷¥¼ÛÎ»Yvß?1\—µ:˜Òªş‹zqğEîxY½°¸1	ÌDI½Œ‚ Ç+jÊVCöğ;œ>KÅ­ØhÖ¶&—0¥ÁäoÊWNÉ‰î“ÌøIÑtœ•w®$ã‘(HÓ`¥Æqš³ë óZG»À­?ÓšZ/7‘ÈaÑ×CÀz§b€> …‚¨tüá²ÏÿÑ‡İdŞoTáép+MDé¸4Ì™—†tèzFf9š$å“vuî°ŒáÿCtÊİêA‡gâ?Sh‰<HŞ'Wßº”¾ùH'È‰J­«áDtÈ^[º?ø¬î…><LŞãgœå©¹Èkßgªå‡`Æ‘«AÆÍ
İĞ™	ğM‘p²Ú›ãwÛÍz'çÒ¨Õ¾SJL­¾yŸ'º4 $	Ñ
X˜w¡ôæÜsº¸$ «o*,ğaOy·Uèì[Róx+NÛçZN…¯ğiÛ#Şü æ	ˆnŠg6éáĞ›	ôKÂÿàÚƒŸ­V9ê¡å-IY=FÈáƒA7¯~ã(x=ØF´ñÚFÜÏU›è,†–D¯b¿^®k)°SêÃu/éŞ¥²¿¦±>ÊËÄBŒ| iIt}cNì¦O}ş’Î°Ùv^mDtà2Cÿ=Bã@Vofû¸Å¡Õ­8f¾îcMmË6L×º1íADµœ@vo~û²E¦õ¯9Â@ú=‰8€†hÖÃšş®R~úª(œ çK(¦dØH•ÏÆP–¤.s\©ıÿAÒ3:ë¾Kô/GÔ2S/Œ†®fÓ/Ş£½„@dèbQ¶·ñÓV^™ÀRLòşA¯5.›E˜:şÛÀNÔ©ÛP^èµ¶¿@>-’˜&À@ÔZ9Œ ÛÂ"ö¡¾” !]˜ÿ‡’«² w"^ëOìO’ë4"$>£hÁ5ĞÇ©U­å¿Lå0ÔäÒyOØ2‡Ø¨Å:€îy|ÏHÜ¼Ñ.’ÇäŒş9ä¡¬@EœCgìjLQñ•O0Ì`õ·@ãµM7‘(ö“×*ƒÒ+‚r«Ò…ìk«Í<Š“âÄ]Q h«I‡NÄ*Nßõá8
†îô´5€¸E-¬vñrCr)‹×÷İÂéQåé!z¿[W6ğ‹D­ßeÕc¶Än+¨æÍÊƒßÀHØ6¬Óåógu¤º»ú@«<hé‹~©}şk,w®Œ£gğW‡±‡°²7dp˜O“ßŠÿiqtoãCL£÷~Ì…F|ÅçC”*¢ìWoúƒFsğbÎéˆKWô¿rƒX÷«„NŠàŒÊ¤À°‘3?è76®ø…>MO ÙD«h÷nJéAIhqh¦ï­Gö°¸à/$1ã:0‡Ücbî1ÁZVp ¯ „}Ó/€\ª•çbB©.¼İÄÓ‘ÚæÄiÚIãï4k'!G³4ÚµPoÄKc9tRmÑµÑ?ÏÒ´Z/6ÆBâî¹´JÏm^%¿¬}èêÑwVÙ¹ä
V	»r»û(™<œ	hÎ${³´r½é„„î”ÍgŸEmãñ’?ô3ƒÖí³;l Xµ²Œ>ˆœß½Ü8“İÙ˜JàvTÒ=ÖØ–ueï¤ÿÁ³úƒáû~}å+'Ê&J"µÒÈ™­3Gaº6èNwG±lJgúX[»³²‰:+ÖèQ	Gÿ…}&#WÄ>€f®7|ßÛ†™~âÃÔ¼ñzÍîêtjÌ‘L(8P&ô„\;À ¤ö¤I1^º„¤¼Â,1Ú[&ÉÒ˜À*¢	vÄú&A‘t);0ØßÀ‰ïJóÓ3?d”ª«,î¢ñÄËŞRÍrlĞ#é©1`Mx2ì©I›¡] p²+AUrø/CÀÅ˜‰ìÿ¢1§¼I¶y»ÿ3S#3ÄUYÓ"‘¬³ùX@1Ïoµ–ÃfOq¬>ˆD¬®	>ÍTæ"ÜKî¯ÍtÛUœçwÂ¯ÿ¾Ø9PŸğ¥LõÇ ŠŞ/ĞOëlgÀ™N³äÎù¨ÕùFuÁ*¬€"œş~]Çuö’óXØª[2O†G$°¿P•È3.­äò(øMÊ¼¸qâ:ÒÖÅfåĞ¥Û¼]ˆ³ºš>cßö	C
FŸ;â LŸ7ßN‘>e9¬˜áÅEü”ª ˆ`/¢MBş5Æ{cù~åØs"·ĞâT
H®Èé–q@O”m?jÃFÃ«¦Ì¡y%±“=]ßà)âU
)qí~È1\ò¢ ZÌñ¦ÃõœÚéŞ%ˆK/˜:HGsM!Îû¹	ïÎc}rqş£Ï4É×Eè}!e@ärŒ'¡Ÿı^ÿÄ3ŠèVydn"¹PËƒ›ÓzåÛgk$²Û´#ESñºÎ¿Èd&åGK¢0Ë!ZÎ±Ğ%È˜q’œU‘Ç>şBÃ¦Z‹gºê:²ºÎ/á^ƒü$„©~÷÷Ù7™ñ’üU¹Ç
¬şsM4¾ğ 
‡ƒ¹‰:æLôsgb 6ÔÒIĞñ½9–ªÖÇ&ê¢µNúáRJÌÀX=ëìhuÖŸ&Ğ"¢nü4‚¤{Ì&Í“€Ìå²ó½ıÔ°˜•!`QqhĞÑ0UI0NĞcT;xË/™Z!eZu¯Ô['C?£Ñ¹\s7Ëq¯\D’boXĞFD-¤Õ§Ñ4Oê“7¸öxêVDK3ìÍM•yç’—z&¿ûÖ¦Œù‚úÙ»"Ÿ)æJQBu7F&ğˆÆ¡˜<4gw
'?(š,Ğ^o_T xnÒâ@	q¾Öz\d3)'Í^ÎqZ¦^®s7Â±ô€F†àá¯0DgN<åS:G£õsn ëlãG7Ïq¬°‡i*sÔP²8±Ê´ß7”X=bø¬…ôö'ÁÉç£Ô ÏSDwœa'¤icIÑÎälw“—tş®N¿tOñoTíi•¬&Ç!ÜäAËøWº™äƒÔd˜N¸··N±Ì+Íİèñ@ÌïÀ7†>ïEÅ8E7Ÿ§RÇë×Îí™Ä¯ı.&íw—»Kat_| ø2ú­şSÎ5KU Qo„¤¼sØï…0ZdoØ"¿aˆ^´ K:XT³§[ô¹ı<Â“,[uÌiÓIQö„~ÛXc»É”n×TfÚ[Á¯£ó%WÚ™şÁ®‚˜:™î|cÒ¡Q<£ÈËŒáì‹î@ËcªÇ<ğ›Y#§Òğà€P ´û©º~:b	¢ÜÂÉØ•ÄÃØ]WlŠŠß 0/# s©gunìu'¬`qxx`·­`9´£ áŠMe0 `®u¤c»sø­FğYuql¦êö¶¿´ô ÇÕ‹Zo{ì/ikyh0íÓ` ©Aa ­z8(b6°Ã:î˜
àmµiq.Câ–ñ–üV¯‡¨ê¢cI+ì1J—`?Mã$jÿ×,:z·rìn]óéf¸Öjb¸±àÏO¹A¶µÓ¹Šjµj5Z’a¬ØKC„³ª=2æ‘FûOh4¼\~Ì1š91´å„D¢Ù èßÁ`¦í¸·KŠïeU"ım¨æñ›éŠM^÷5ÔCé437åæó2ıíïôØÏFxB`«Fm±‰&_K$¢G<(éàHü1ålWQ¼‹6ô9ãê†µ°5`Ğ^óı†»01xc¸S“šÊÓ/%äur3í‰!É^W3qÜ7á²b>¢PÄ¥Øt[0‘¤®a’:®˜£~J‡OŒ3K¬£µû{‰yˆ°%¶‚ß4{3¯h¹®üY²êMã·š=ÔÒìXFºıÄÛ _è:Ñ&ZÑJØ*š›zÙ&çŒØ¹TØ’Ì€×_»£§u3äŒxRÚ´cQªE+û¿.z¨÷Q~ØŠ¬ÌÀÌŠÂİéW”ı
;à*ğ'<"ÿ Ôğ»q|¾¢§;#«gOIÑˆMœ=lQãYºêF¯x8¢ˆ²nAïªÿ;°½Œz´r±3¦ItœŠÿÊB¨”‰?ÖõÈôq¿\H˜ù>JÜˆzmbæ¦Ã)iº¸²;¬Xr»"J¥8áüÚ‚Ğ¾ˆÃ©øFúÜºM;&Y`$ºØqƒœ_-Ëxd-ÿDš€^ãwÉïGKM!g„äÉ&À÷¿|€D6 1ø,z¥Bqy··±7Yéévª´7ùOIûw[ªxåÌÙÖÑAÈƒ1™ìRõ“şyq7ïêÕíÎ‡Z» ó©¿{¤®kËdÇˆzèƒŒVç¤y¿ÒòŒÚW‰>/µì'ûì 7RÔ¹şÔ¯HÆöÕ5¸/
¤?U)kÖü¯Š_«ùôM¦#ƒR!@»/2ÄâXõ2]ûë@Dï'¿}ˆ²†öÇ0ëœÕ‡á§B²Ç‚êŸ,2XÄ Ñ/J,5Œ}R#6ÁÄé;xBåño!?”wg•{K½uú#UµÉSHØÇJ$ÖêµÙ}ûY»BıN€A<ƒî‚ßÙüğŠÏç©uÂ¦›I~NwBy¥QœQûD-
	O\†«Ÿı2ïÇO-4#Sj˜e	ã†zõdUX6`%ì«0ÇA‚úøsuã* M÷—ò#4ÈUk}¹·‘˜TR‡ÛÙF:¥Ti]h¸e½ââ1í~«‚Bxz­âªxh¥üÆˆ/´_<ç9ä*óg=„è÷†“_¬¡B¨¬¼Æ?ˆ>tSeäÓ5™äO8eàŸ½+ õNŒ°}„+-âB‹fÒí	ŒüõvæÂı“.‰?”•s7ªÛVˆ±P•ŠÀ¦a”bø8ßMËú!bî†¨ÔêâÓ‘€ë²VH R.Oóè™…ï·Ù|NG=%Ö´:A-_ÄzP5?¿‚¹\¢XUµ”!?qèvçŸ`=•PöCV,ü¹³zŒ0°Ãÿ ¶ıÅ€ÛÄÂ,@Âßİ¶Kuüø1è,v¥Ş•a;àG¡D¹iœ¼*óF=Ì¦ªÉ°–ü¦lÂ§Ë	“„ê@fIh%-ä¨>õ’tJŸOb|½iåG¢7¸]½ğb<M{¾¨°Ã­ÚòÚštİ&Ct£$rDq@H9ÎªºgÊş~va|3ÅD{‹]£JÜVCvyKÚ½A‚´Ñµ”WxxBİrÔ³W;a<‰R(>¡ÿ §OC²º$€{2å«±SÿZø:¹½K¥oÉEòÆÊÉ¾r”äoËÑ—K/(³è´ÔY¹Õ?ñ„÷~»XKÎœCè<”?½“34íé‹¼ô°pÚ½ÃKÄlí/<|GÒ•¥—ï·˜ş¢h`GŞ3SZ´(:NX?º-*Ö_oÖµè…M]¶²)ám¯U„,ò	Œ:î«Ã¥¿©ó<\éÇà•úX0_W=ø‘£zJ„|3¬õæøA¥{ºè|GrJÁ][r{Øº‘¼mğOw»ü]:†L6±úÌ{-$ñSV€º&HÒ,sÏ&Öƒæßê½yÚ™ìÈ„gC<‚¶ÙâÜ'à@6R#ÙU4ğîM‡µ®Ã3L7ñÿ„ÚÍ	ÖAñC#IáÎğ:=GÙ±`Œäÿ%Ø¼?Aó¢«(EÖv¨M¥Äkì)Š®æ&ùŞrÚôG®¥˜Œ:f¢¥Lù¾FèÄPR™êuß—}ø’å•³ üìÉÎ,³Õ4™:9oY,‡Ä)œa4ĞÛ†õ0œ\ÚãqôJ>#Ø4ø•É+Fùk¥ÈC.‰äµ@u‘MÃóãMKšÔÇpÔ¥Ôt-¸»È¦¯¹pjæ¨Y[–JÎ^){à)°&Ì"íáãñUr¨½ìô§«,i%†7MP´w8TMYÉxqÚœcÑô2>XV–ú{ßfÂRğš+}çY²‚ÍĞë’ÍÁòGB9ü’D5@\?á0Pñuü
unn çÈF”È
„„D[KCOIÌíª4ëßS´Rq|onÃ­‘Bı­¡Êâ/apGâ3BšÃw÷RT¤tt&ğ°4¶˜—iÊe—”sõ9‹³½Öµ¦Ïì9µê†q,&ü°.r®†“ã-vŒzpÿh‡p„yóZıÃ9©êÆ±e¬§0ëÛ‡PÚ­cwëäi³ZŞ"¹õ7ÿOtÌ4­öÉ²¹ª}À—ĞŸ‚ğ#W0Æ†ê,%§¨?Hï^Ÿ|PÄ2ëm·U‡	å‚^=ıİä¦®›«lô Ë»(õ_L7WKæ¼ßíæÃÑ”$A^D Ö}oWAJs>(ÒBÊ”/Qynl?Õ¿ffqêÊDS-W28”Y Uyÿ‘õ9[,5’úÃ†)»rXÿ^xA•C	ş¾øHz›S,ïÜk!×`fÔ5úE”9—jÖ—&‹ˆÌÁ²èM¶İ˜7Ø”+NzÀƒOf!/œœîa1[†¤]6sÉaÅí{A¿Çì™'–•Z“8ƒPYñG‰}bºaóñ	ÍüxpØÛ²‡`íêàgÎè´6€cB–ùq1óÌÌ«İŒ]f±[½3¼ı°pB2¦è€ŒÀêÆÏjãcüŞÄA+P'W"‰¾ÏšPs¼T@GÍ]Iü+¹ëMüÆ1m|q´«5–¤ì!Î˜Ğ429ób¸İM1©1¢¢†~n¦òóNÿN«Ú»fş>çhr–ËÑÓ¨¶F´Œù§}€Fj3$’ƒ“›PWôŠŒh0hî{u`ëpêKjållÕ÷'>¢¬ÏÌ‘ƒ=Y¥Z¤|îdˆ«Q¸Õ(ÆÀ½–¬ã÷–B½ôñÙæ©=bZ!vKêÎ;ëûSV2¼-Y2ÚE€û`Ú$¡àIrIMªàğJéßÈ“q—T e—?pšØStÿô‹Ïë'
‘ÇcÑ!¯\¿rcëI¼zÒå•ìå 
òØãîÛtc"@Šrd¼g~^_Ğd	d°ƒn¢¬;i¬€[FxÍJ‰¢i»X½I·(Úµ÷¡ú…b·ÚÑ£$Aãq‹Ğ?Õ!+ZîïÊMÜ:Ğ¢1Ê+4”–¤aÉ¶°Œ¡ÜûÕ›]¥7^Ä»4KoOTy¬ĞÿW„u²_AXo=yæ}ÃˆË¿‚"[_&5ˆˆ5£YOCÂ9M}G²>Œäšcw<©Ó5	_Ë÷ÓU‰fjãU¤;èO[ûy®Š:¥–Á”`²×aÀ¢¬LÏ¨L:5ÉŞOÖ‡!Ö«]ÃH)€¡ƒ³ >÷"™Ş² MÏJe~cííÁø¤½m˜¢èP}~û#{qOÁGlÆRzá¶G4h„¢åçû¬`›[VO\<l¯…Ô¥–»jpæïLvP‘·iBQY o·nÉZ’ù·¢M2n‰¨ğ³ı±Oz™ˆ4bo=_v€Ø0?¬TÉ§?
.	Şè‹‰&­Õ´W‰D
f «0uŠÁ]E€°¬l?cÌ:V´Ïzì5÷9tlèfß’¬Íâ’\¨ı>¶—ß´Á"#G¿‰/¢Ï<ZgBÈBa-#ÕTŒ³\H^ã÷>o›äæD¨¬>dœbÓDlÉ~Ñµ5à?ÎÒ‘§GïõÌ
§ÜşËxoÓşTˆ²âí¼Å/Rİ7[¢DÑ¯I3t<“îNŞ¶NĞa6Wşâ•íô2@™ö´O|›*AùÃå£,€şÁË
½’ßŞP“½#P¨±²¶"<>©èFö×şšt3onR"¿7Çİ1U„0jœ‘@ü»¢¸k=ŒOŞaákÄ7QØò¿W³YÂİ©¡†Ä¡Gsöî×ô*g mU(ûŞ´_Ş"ALâI ©D-ö“ğT&Ì­Iv>+ƒåßÓŸ["hŸ%ö•‘c¬¬ö¼ñ¦	5‚Õ»`‰£xwu*'ÚÖ8Ğ–_¨s`+“àèİà÷÷®š©$|#‰n £„b+)Fûw.—¦ĞXÓxp
bÅ¬i‡×f®ï¨Á.UŠ¬†¸­¹c)œBmµ¦‹_.IWÕr^î·~«F¥>ShŠ¬NÎ6Õ¤óNkRŸ œÿÜ5•øÅ@U®¶·LnÙI«ŞÓ«:Çk*—:×ú†ËçU4±ÕÈ,ğ‘çLC}OÛ
®!0™Ÿ%ÚÇıiTWüòÙÇœj»ìTuÇ_*€'tûåÈÏ]…×àÏÕQì|JH­o¨şDFî?Æ–×+éõì4úKÈ¿›ã§p[Œgp¥æÃâAF?¶‹ş§™6£lTÅ6{
öD+[™¹ïvñ“/Š'Z¿0„æŠè1ŠW/ÏÕ\Ò½€„â¨Íú¿ÈqãÂEx]*EÌ®‰é)Œ7TL?7j¬AV½ƒÅ^{$v$9¤•7)ˆmôlb{«7Œ1ìQµ™On tâÄ÷„Ò‘ş)	ÇO
1¤£,ş¢bxb­›bM tû«}Å/vÎ%³cÑı¤y‡‡g¦á«ğ¤X<¯”¸ïE‹š}24Çí”âFV6íÓëx-‘j0äœÆ$¦ º€è/…˜!°'ËÉÂÁ]¼‡pÕóÒJ™µ°}gç!ÔÈÂVTµ²Cq³~ÿ³†¾¼~ælÊ(Âèûñ+XJ5õïïÇ„ß¬œf!ª3	ïk=.' OÏvâÙV‚àhT;pâ‘òº"¯óG,_ûKAÍÊ¸¼•‚’R'!×&ór' 9¯'jÉ{›ó®]Ck°ëÏ‘d„/o  o{£qâ
‚ˆykŸ­üÎæìrõİâ!Ílå 	~"îâMÊÜÊ³Á4X²?:™Rs‚õ<…u)fÕåíÕëåZ²8¹Ê°Yzß1ss]İÁ¡¨Ú
œúgn½<P2â&î¢ôA¿HHGÈ¼T„‹º#×›ºa2ãZ»'Õ/¹'Ãl|™"£Ô»›øã‹¾›Í%—ß I@WÜßI4§İ;RœOuI¾—{›vÓ^³!(X¨õ²ÑM½Ö¯­›“{Ûwj¡È-MDÊãŠƒÍ —:³u@?•5^¡ÕœLä÷Í,YŸ€–Bâ§ñÛy;´Cªs›ïª‡0IêX<‰öŞşàxpÊrCí¸:ğ>¨3`¦Ü9¡êÀ>n®à‰[Ù«‡ıKÃ<^ã"¯®ä™nZ¦ùçÀlH×)ÁÂÜH¡—E/êc_ôúc‰h-á¯RšQØ=œ)‘æÔr±àÌÍ	İÑÙÙ›µŠÔ9,5åï34-ï,ò%¹Zk„¾bT£ş²ÏGOÔÃôçöükµ,>Ò–âÆ3mx±ªãL´ı¨¹ßO™mU½b3Í_”s WØíé>éèvöşĞ.%H“>@‰²e¾½HP¢<^©ÀFè
ööxÈ >ãÑ£äË¯=â»p•÷¨£Ï9pÑ­ÈëÃj+²7Ï]‚AÀMló=ÓîWµª…çÅg`™Ïì5µï0jf-¡Yókı›¡ô?’Uiç£àùZx=¿I;òÀ@^F›‘`ä¥F±F°pn®ºëmú,ÃØÚ…¢hµ ³)¤Ş­ƒ;!F¤ºv3âºñÂ@ß=,UŸeé~ğ7ÄƒIöñÂp¦•û¹ñ¦.½šjU–KÑ_@moXÄñ‰D¢¨±şmd?F¡‡î¾™?(=öWD{IÙï[p
Üh$¯ÂA\òÈO†Õ«QÇD%ß®Z·ÿ.ƒ\Ğ°”ù«NƒEÙœ'¨ƒÁñF!x™©¥Ì'ó¯D3Ô  „%z©›MÜ7ÚŒ#§²U)·Iöó’­}Ú'‡õÂqYí‚ğßğ÷ÄêÅFb€QÒN ?@hùA€´îå4koDTA*Û½G)2ïd4Vj0-P“jUÛ (ú«{^6wZ³Ã©äü|¾^lIÜNµØ3‰¡»€G_°øÜŒ‡'iE´pw&œ ô¤v†RU•ª`}ŞŞ_”>±Ùÿ zó¥5Å6‡å…³ó ½œÅñ›Áé.@Ùg³ï´8Z9A¹YÿÊ‹•iU;Î”è\*¸O›İ.XWuåi¸È¿ëµ¼*røÃùD;ğß‡…ÇqÃtißVà¦{®+o®.òŠ=Çøû‡‚©®÷4ø­éçÊK\8KQ?©©=r‰§!« 1aQi·aÄwµôµåbhN¡ïÍëóáö{!Û`cPÄ0=&I‡gÚŞ{G$§>hgiô˜Ò8çTòDÚ7Hxû[aˆŸú#‹ÔªƒeëÛ@Ğt½Â"WàHà½ÉÁŸ *š•xé©ĞpK¨·»½şEÄq‰î5
ÜY—mb-lˆ¦ŸÎ¼R¤²ùj.'ÑUX$òÛœ×`dÚydŠ÷rIç@5wÛ`áˆrÜN²Q†ÁV/ÖÀŸEÀâŠŠçe°Ù&ıéüº>[n
®ªÔ¹İ÷#<)¿'„	RQPö{5ç”SK*º’Iq=lœï2¼Påqá A3bPæ¯Æ£]ĞÈŞØX"‚çÚ}wD€¯h&r¬XœnZ‹CIğSüy5ºŸöªxñà1&³“´&øPiı ~óG3oZ¥©ß?N­p»Àÿ‘Ë#—+|œÑúä{3[i•í‚Iê§÷Nfë-XÏú£™5?…jå²F?íTº†›!Ç Ğ3˜^¥Ï<ŒOíıÒ’_TÌÀıÌÚ¶Íp!ôpí/¿à,R‹TT½¥òûG9È|ø2ÿ¡|9n“Ìá“Väu±İßu=Öì¿Y]ùÁºè6Ê"Qa¾~Œ^Â	Ú‰’îS¶ÁL·ı7J™…ô}ØVı¼OÿÒ:¼+	ç~òœ+ÛİĞİ×¦òZšüş„ƒTfV0§Áhê¨s‡úf/"j MËÂÚ–W¢ÇÍm=±„û!»°¸üÿ‹ ş	õë65)õNÅÙ»Ü1Ü.ãl'7‚Û«gŞÈ˜«£2rQã{K¯Dxğ?tAmş)]êÍ‚Qäà?\õ¢úÎüeù‘4¤vÆë¼ñ¨XâøCËóÈA×Œ¹-3šü5çª
õÿyiĞdEØ!ÇÇM"Òzî!ÖÛ€äÇ:¯§Ã’øêÀfãèMÍ·/q)CoØúrŸ0çVüA<OJÿMºŞ™¼™Ì*@C%~™Í“+H_2;œX/@&†oi©c|†£†Ÿ:¼Õ:ÒO–|{¯-†§’Vm>ï±ØÇ=ª©‡‡º¦Gbºl#?Ú·#¡ü@yÇîç|¼Mı^3ÓM‘³Ô6éÕÌÙÏë–„ê¨OÇ±ĞûN47{yÇeÌPûtk’‘ÀÜw!Ş `@Zqjú:
Í7“¥Z8*±ç/—÷‰¡ÀPh @ò2á0L|2ñK:Š£ÒáÔ‚Bs¡…7ÖW»hKVFOµªb6,óºGx¶’ª‹ĞïhtÂ\Ğ¹<s77Õñ§<	ìœîØ§+pê\»^Ë@9	X[òfNß™®‘üäA/rÖ¼şuåµP>„([0Â Ùºö£HäxSšØT–êGiÊ–ï¢w­n¬Q"ã[ƒ(‘ìªşø˜µ˜{ä‘SïpE#bë×NËö¿ÑÈ^G6<	EÖıŞVª0X,¥ù×r¸,´.ğÄZ‰5ÏŒY¬ı±ºJ±h5ûÕU¢,´©}-.”Ñí}ÙRıÅ¹«
“7cË)AêúÖùQwÎ‰Ñ4ŞĞR˜cQvãm@ÇƒÏkÿëÄWSö½
õªkô#Êü¤9ƒjÙ×"é®²»ç_ÍüÈ†Æ`‘™g{é€…ïRF?5ÚÛSæ2`\Õo f•#êÀ¶[ùòñŞH4«ş…Î)Ù)“G·³oÔ=§i‚éŞ«…ÿóµL±€ş«¯}.#S.ÖÒC]pA–:lT':Kî%«cQú„{d;
Ç‚á¦3Ó
Ñ	.^_uñ H#È[‰ºó±RkZåî{‹ğ¨Ms7„h_„t'¯q‰.Äı2L²’Í•­—–íW™vë»D:xÍçEÄ®“úÃÏ•b6kÌdÑÎA n,çQ\h ‰ŸĞ0d,,³Ó7!¦lräçÀ/BV°Ì:íë5·`”u:ƒÄ¾Ö¡oºç·AôÇ[¥p\ñø|z™Ûm·=øŒ#r}á~—l Ÿà«¶DzˆäöŠÓ¥Q	!ÏÏËßp(Kdİ0Q>9„¡„@[HN¹‘`íÏ5¬/¹2=-,®ÁW”ú÷C±(p/šùù¥øC:‰ëˆ$6ÕK_±Ë3ÏËÛ€éxï,‹Qœ‚«¾¾å2ìŸ¢˜°İ~Jo~a¢IíEª‹zí}íÙµÿå¬8Eå=5n°L7GîŞüØAÊA»ËxÂVØîı´yPö!ùàzú\c(¿—¸¦¤H‰lÿø’Z/~àRB?6šğá£0AìuÍ}Öi9ÃÂ‰øÚbZƒYûÍÖC¹Ö—êïiŞ-¿eˆX[ìêO>_a²±û¾ˆôIÂ$ÓWø?kh ÷Ê›Ÿöcs„¡g j/ÀC {AÙ?€[¤>RÎ·PuÂÓ’úÕ»'4şˆ{
ó	ZS¼X´â†PÅÛ+#ga€Õ1ÁAYu³Çj•z*gßŸ òaú6Å‹-7Ù…Ÿ-XÇ‡º=sĞ&‘1(ĞœŠé+
ã<Äß‹Ág‘è§kh¬	…şÛ8cjÇ–Ff³‡Áép‘7)Æfœ¹ŒïyÓ:¯Ù>Ú«×ÊZÿEğÇ÷
9QPwø`ÛÇĞPİ@ÏW,¥úÃ;ª4÷V¨ÌüEá+WØ/âÒåÍÅÍuí•­…·az]g³nùœ¶îÂLö7MRóóìM„Ô7†1…ì[5Ão)«r¯+¡ƒ³Á ™˜è/œ®âÃC^³ö†ì2ƒÈ=`qš.i›d+a¤Å?×H>ˆœbØ×L£RÁÅ¨k—zÖär›+¶Ã½g­ô•ØcÉ‡ØàSå,ØË’iÆ”!%ZÜ1Û¯o%î‰*²R¥Åƒ+çrò¹ÇÀĞ˜54Ä‘û¨HIBhh¾©çGî©Ke |Qw£:}Ù©1ÂYÖ€%M_±à4Àœ
ØùÿPÃ[)ÃféÒöå¾óªÑñØ‹úR
g4*œæ%U„°k\İ{R'TÂàÚÄb½³ ñşZpÖY:‹¤‚¯’Û£wŞ¸`JÍiî–ôVÿFø
úö}#âŒÀÊí‡€5ëAW¶Šy¨"0|F"•á—0V¬Åúë;3='Óò–„·Mx·k9wÑäd¾¢é#NÕËüpyÜáó0}ìDŸØÏ=¬)…æÛ2ãmµƒÅ#XÓñÂM^…¸í·L?¬}F¡~ü])7ÖI›±Î¦WÆ±ªÌG-Ê¥¯Ao¾$¯Ykî‚~èb[£äıØDTÖë­¨E†‹ßs à1ôi
`Ÿ±hõëŞ6N’½÷ùHMGªù;<îZ1qÔ ¨ıêrè¶±Ì\mÁˆ¡|,¸ºÕ‹'b°Œ4"»	ı[]pÎQ¶äóÌÀåÅo„ı!ÊiW½÷<?’¦	“²f"ş*çg2’­•…Ê™\ÍŞí u€OfädÖ÷•fZcº›ÛnInñæà	ÌE°ğFY®1¬w·ä1”j”ÂkÕ÷_¸èvÿ˜%ø˜e’“•÷>¶¬È/’¢sê®†O 7İ‚jÆ—*Ö§&Â¢é…à‘
§ÃÉ’_î‚cAdœŒNİÌa­ĞE¤J9yĞ^§õtß¾ñÏÜ|rÄêÑq¿\‘Ï+ÉÉ€óE×ğy¼Éó.ıäy³Z‰†kì·Ô¶^ó¡|÷¯Šã&Ç¿FCUÉÇ.ê¤w^äêJè6¼.Éä3úOWíYª‚Çª²ÇrşõÎZˆ°†Ak­ÛwÎvVáô2¯ò™C›	ÙLØrĞ`¼ÖÖææòò ´¢£ŠŞß =
 i]&{:#tsš45B^4Bf+![w>4’ĞgK
Y(2{z_-„aü?>geO:#&"‰§±‹UE`>ffà)g¢;0J5t}}ºÈ>D’ôgE*\zzQg¸2²µEÓGYA½úÂÊÅßƒ%\_}š,kiy3zÑjfKa©ß!G@e"-ÊÛ^D]‹3™[(hpy°f}!èÑÌêW7ŠŸ¡¥4 'U-#Nßa$÷>¾Ç@±Ğ8ïÔm£â¾hé/Ä—@³HêpŒ<i•×ªšò§ıñµÌé‹`Ì`Bau,?X	tƒ…ßM`i:2qQ $X“za‡8T{21Wt>©3çÑA i{5ÉV•¯Pé3C@\Zr®ú±F‘Š©Pf0':eGã>1Ã¬p^ĞB$#c8C™ä5Á©Kò¯G |bRìKòÒ½ÈˆÂnQ44 ×ÕÄFjyÈ¯c~¥F.ë+rmÕ-
ÇGÇ²`«é=Ë[éív¸[ª³(µKm¼8ó’wóç‡•hèê‚¶å·Ló>Îçi¦š:~É«½…æ
Ñ_Ú?ß•ß×}ôó‡ÙéàğÆÆèº6y‹ê"DiE`{{Gtò2ŸıMDO,
ERé¶Û´‰™i;!V\rt3Ÿ0F.Ë maD7tÕR*9®Ö/Q`Ã>®sCûvÄ_n $›Ññ×Â°Çó<qIì!MM¯>éUPA’H1$¿ºw…ş£ˆy*ÆâHß ÊN‚xå}Æ•“±¶¹ĞC®™ëøÉ‘Ğy'$pĞ5ß`{W<v”HC2"Ô¡ò+@A5•¯e%Ã3}°K)‹ªH)‹Ä<:ÜgAÙş‡`á#´@¤%òZÉy!¡é§Ñ¢‹ë¡œ>ü’„ _p
É­]¬zÊıDTlrsõFÅ™¹îaÍlk6|>ÌÕÃbK2ŞØÊX0?ZÍvâE5ªDjú9\^;å-Â6ÉDæ mEè]¢ı*€›°Û!ÄUM”>·Å–Ï‹•¿x¢$jİúN†Ú0ğ™	'·¼âyä_‘£Eô¡ÿIÌ!mæßµ˜q‚Éì¦áèß7ñR %€“ áÜyg8õŞ*\ÛaÛà[„_^"ã0†åÊ^ÕÿÇI©Î9ñ€Ç*ºÏNNïÁ[’üg2£AñnßJÜªÑ¬ğ…™ÕäÂ‰”3R&í—Ÿ¬/7ïlt‹?iM®sb\`¦÷8\êË8PÊõ'û}»Yß
–®[‰<u)Şã¾–·»ó÷…ñ¤­!$	@U}5~3H;Íú]	qY!0 ]	'ó†¡ŸtPKyXb;§Coº³ËA7/I	2â…`ùq¶4pJ)=AU£z÷•üÉÑ^gFoáõJãû.ûd/ÍOl‹/¸]§õ¢?Kgpòí’‡æŸo?ô~Np÷ à&WkÜ@ê—7úşå'—Âî€˜{äÑÂCN½<]‰´î÷ÓQò"¼!İ¨£0yW­²êêõÁÁ€-N+k–ÒmRˆ¹v1·2EòÖµi~‘z·
»Õ1ØéÁ„œç¶‡’åıšÂ†ªx$K%L\?9ÚÔx.!û`{^)Ko†åSL»÷rQ.}[r‚ºÙİc“4å
@r]a=ğQ<‰”Ğ¨Ä9PN+¿”r€^c_QÀhmùFÃ	¥Ác]gÿ¡sPİ™éäÓK×[Fö:ÆLôy`B¢®Úwï¥™î!‘ H›6jèÛNJ¬Z”u2çŸ&°W¼>.ÒZî¼”<áWÃàÁç£-å˜sDÜ§‘ı[nN³Œ?Z×¯OØ/B[”G°m»é‹‰x/÷Õ!µâÍíî<{ òP¼Që+qà ÈûÓÉ…ßêaâÉ5û.VS~#v\èÉH•¸àuCq>[¦¸f»à½zÅM6Ll¤ºrhïKœ½!.]¡‡ÿ9¶>Ä°ÿ»yQjn€ñ½¾ËT,ÎİşCÛ¹bŸ3¾
Œ<P:¶¿‚Ã%R…Ôë•°ÇşÊ‰_>‘Xæ2UõÔ&ıOÎ´ÊáR†Vª=|_îÓñR@ÂFÒ®”ö!“Zrk«÷æ]Kâ~«³0¼˜nÿdpÉl„ÒĞ)¦¤€ùà(ƒİ7Ñ/q†óv›ì6»È5Ä›š!˜©×–æƒ<(ÙÆóšO£ëü…™ê"ÍvÈ6V÷Ä+j
`ö”ƒáš#ÊZ™t	İ	fp)øWˆğøÏIchà­Fe+«ÈöMV»^sìrÇUp°XN€PUİİÔÿÌ³·Ë=îâ-İnş”xWZÒËSŠı&¹¨øü‹0üqñªYÿªuvm“ç¯M¶ñçPÉÛ.ãdqÓ\1ˆ‡d ü“f¤ô;ÎîWÃ<”=÷Î‰KdúÒAÆ±¼É–îÖôfÿR¾Dşş+7KıéÙÃ’ÑrdaK/}ÃMUc2n´‘TTGzŠÙPW)/Ü{i­s}#O•pği0-†z¦±'_¾•½¡C,Œ:İë!·`NÖCi‚;°–…Y®ïû$ş¼xIÚã2°0#˜“)şõ!œéBÎ=ÛhŞê—Ã¤Rº¶ƒÂéØŒ‘À>SwEŞ‹ _` <zeë"
Tò;ÏWN}GhéåyÍ·Òú.0]	ô)Ê’_Ní8fEúşÔêøw:«Gt
ŸUuj¢%Á\Ü?GY¯À\8*—âÉ±®ÌDmËU¯Gô)N
yç^¤ÚÏ0mÃ«?@wÊ¯D2‹mŸUÍ·k—|V™ÆÀå·3­ü°ÅXª1p]}z­Â!É™¥±ÿcT2¸Íÿ›† üšûG;JöeLgëFqœ\„rkTÓ…Ş´kâ!š%Œ#·°ü)	Í´¸óöİÆQ’0%©C!¦Pfx!}›âÌq­ÜEõƒI<vAS¹;GÙ¹5ğ…¤?fÄ·S·Ä‰áÆCqBƒI™ÎÒ¸-ü€!¸jx­¥·yn[ä¿¹ğäø+:§6(—yË–Öˆåâó1ö©¯ÎÍo>`”·bBªã#ÑŸu¯):„èónıÔ/æ—Æ3™ ‡¼¦éúFÃşê$ËÄgHx*zÙñoªŸ2æko=ov”×p0İ@ÑŠğ7J9ßª½Ï‰µÉ.qû\{AÛ"‘‡4ªú‡îûB^ñ2èMÃı‘^®vÅpõg‚Ù Ïå¡àüŞ‰Ó&‹oŸX@C3E4@¤v¹Ş˜¥;eFb7
¬Ùq»IOö,S~+Æ×H”ÅN¶r@=°™´æóy¾4²UĞmJ°<=é¿÷¤Î½£58›Ñg<ôk:9uQbÏfÊ<á;õô?X(¦ïÃ˜Ù«p‹v«}GRĞzI&rÒŒ´ÿ®UnêŞB.	C*GfĞT$¢£3AH¾ó]Şá_ñ„Æ¸RzÉ}Œ)+÷ÌÆFwMÓ ÀÊÓ"¨„îbµ#õşÿ8x*š§Pú®{Œ{d©$zÕEÀtÅ"Ù¹[³â`›ÒíÀÀšO¯'9Ôäf©œfIocı’ò&Ò­ÿEôQu¼UıÅ¹ŞgÕ˜"e®šv’R–À0—dV“FÕÊç/2£zÊ!Í›ÿõ¢'ä¶©ÆÜjá×0f«_„§ìvIehßì^“qğæ T´OrŒñÌµ]G†ºÉ9YÖôø_†|âÖÎ7±Nˆi+¤€ÿsëµ¶•ßœ´äKa++º÷pÍáç"š×¶0[S£4æÈF‹É#SR‹eš¨èÿ9ü%…ZoøàGÃ5Í•¢ë¸Ã±]±;Ñ‡¯„;ksWƒÕÿŠ	"óĞW^pPg÷oI•Eˆ¿p û³7Åİêª.«ït2ÂG”7d¼¾N×LfØİöéÌWY°G¶é»N‚>cc(£yÚØi‘á”pWVá¨/wÉ/“%–Hf3ô_©y™ÚÒã/¾É&qıu¡êc(æÿ7–G¬Ö°më.U‡¯ÜşÊ¦Q©A™ÈR¸ÄøJY|OŒ°¡¬8õÒKB‡;;w¼WXsè§I°r÷›cyj…×&³4Œƒ­ÛËJİrñá¹ÆoGëæèrö¾ƒÍ0ÁU_zÿöB†k¸¶gäMñx= BÿÙZ£î7”Ïï•bí U€· úœ?R3Ñœ„kèJœ´NÏLlÕıØmÊãŠ•,è­OœA;òÔO 6Ê*ü5Ñ™ö·?Dš1ìÂ<ìÕ•ß§ö÷Ú£I:‘ëww^€P'PJò*™Tœn]¥f¤&(tĞ¥•´÷ÙL‡ªæÿ03Ş_Dzj—%·Y7?·ïäk3WmÆ•ª×bÿäSı= Ù6L¼Wù0@ñ¤÷~±ØLbŒ”¿{©DYËBïI´°($P†àéhû§ŞÎ’Í…Úq£@=…ûsMxii_ÊÕ„Uænp<)¬ïò"«’÷¨ØuWe?ø7:®ö.G{—OHf5Íï-ÿ`Öy¢¼3([Ô(â¹±Šša•`²#@ô´ƒ/aT(³…Šú£‡ 0›s]õÁéi&ñö”òÛ@sˆ@şU¢&^½ÀI¨’ô#šÙm©ê&†ıÏÏ¦¹È{Ñï'²Øê›iÓÚï†_íñ@Q–	ü>ùè.¾Òmİ;-™ÄN®·UûíÊŠ“$1İ–Y-°öp‚¼!9ØŞÙf¿8óu½ß	 >ÀW<nßñÅÏå§¢ÌæŠÆ) Æ[rOiÏĞCd†|›÷4L¶¥/2Q—úZä3yí‡ü¸è8v÷´Ç7É\–É¢+¨A+¹Z–Æt	Ë¶UñõÓgó…F±k¹SZÁ‡O5Ë b]œˆ›†Y»ä2ª*…ğ13{{¥©¸‘òäöÂŸ–ª,Uh½;@P"uMbzFÆq` ì``dn.u–«m­$é/N/l°Nš±ÿ¹€3f%7C8Æ›×  /_ƒ`6z0Jr%€cjáÌqcY¢É0İ`ŞVÀzY(3ØÖã)–A¶çäÌXoÈà¨-ÆÊ¢‚8sí5Ü|8®ÕHÈ!ŸPóºëN‹M"ñÔ§Í:ÎÖõäóè€Šø'Šši.LbÛ‘Çşya¬ÈeÖ#¥~yèÑÈñ—Y#¸y»œf ¼§}8¼QàC>éNÉó{o¨9áŸÍÍíĞºÄÿ®w¨®²f{K@C
IÕÎ¾¾;%ŒQlEntb»'I)³(Šû_VAj8nïôDPóéßE=p`ï}Ó^Ñ^	¡±Å,[J{âùÂ×“Ş_Æ9bFå?(|cùá•HúìX„úQ]}{şiªÎ2ƒ1 SÁ{Kk©¤	ÆÚŸÛ½ÁúÅUóx§©¡&>E¥9ŞøŠB;:ém /ztÛíÆEWøNtºïNT<(ÑKFü'„ßYåbÃ~u–ì{±Š;¶ÜóİÉT@ÇøİŠßFE~¬'şãK¡<ÄH€#iO±¨»h»Šó¹‚õØ:B›f+ÿËVU0EÃ
¬Ÿ5¿—¥ô0R#2÷­Ú/°ıFE6«wN*ÙnXÒğQÇnøÿJOóëHëqßúÃN·E©,fÊxÑñÚÑ¦à±™÷ØÚÏD6çz0%P%§ˆoy¡']¢ó‡‹ 4ÏF—EğàQ×1[Êi‰â¥›òñáÙX‡±­(BîÊNJ÷·SéåÙY)K¦b”âşŠÓrJâÍ«Şî›;u 2ß†ôùD@XşN¾ïãÖÇÛM*7¡œt*µcº¨.s!cäp˜1ãÂLôv¡×'ÁÂ‡Ã¤B½äñªÈ;…’g1—mpS ’Şx‘gC]îfÔ}Mgfì?šÕÅM8¸ŸÃÎEWØœ¡	º*ĞhpUÎNxØ}÷_ôÙ°ó'¢¾–ÒûÓ‹y6 írüTíÜ:õ¨mOÁt­ÒÃïğ{­ğü¢Ş`©jKôµyıî‚Ş(Ì•W´±ëY! º¬!*¡6|Ò¹İ:Ù_‰6ƒâ¤7Ö•‹§'¶÷‡„œ)¥©`ê+Iî±T=`N£³\'ú½»	İ?XVØpÇ*ÊgrÚë†š2B²‰ÿ”ÂÛ@"CÍ“We`0™èKú‚¿W~#"œE±4>›9†|T¸˜U’‡AÒş@ ö³m‰r¹ç(²ìBÊiŞ1ÇMÿÆç*òóuËú—Ó›Úø£;Dµ¬0èÑJ\@>YJ#âK³qè©Dáw[cuW¥×³”ı0„ŞûQJbu¥T\A®À2M•?Lµ{{{›œñ[{w«J§:r“ººœÀNè"õ—š®&‰P)uë†ÙZ¿bõ¤ô\AŒ@+íŸÇ=ÈÍ[Jôµ©$ül¸«i·°‡iš–‡^¬¥ın¼¯<ÎšÓÓb0©Ÿ(íã5±»D=nÑ9áQ…Oè3öê+rè–é–ö‚¶¯«|¿Ëş_ß'_B@["8>ª¨GéŠFmz2f_rñ,Œ.âD ¬_r:&M¨¶‹Û£ß!ØZ`dcÉa	-Œ§!¥ 2
ÇÅMw±-ÑŸ9ô*ÿgqTª½ø[Rõ`¢®¡ñ0DË1Wì|ÒæTƒ:+6ÍU²‡š½“	•ş’66ø×‘PäãcKüıE›vå_òŸ=)”&×bæÔ¼‡èòßÖÍÓ–ÔğL±ÃÑÅ/4$/cdÓte hL³5eh¶ÂiÎáKû6;39Ò^¼¡ßvàğ0|,š¦»tîçÜæš´)xAbdç»^@H0¬<E´á6ïnô*T4‚°YŒİşòïm](óFŒûã°Q+~äINà½I52,Ñ›1#Ş‰~ÏÊPWã|ÈeŠ©)ååA€H‘=Éƒ•†×æ³2Í’ùıÌÜLr6¨¤u¼ßEnhQmñ_H¼‰ô^ÿ@xwNöú[C®Ìÿó‚<ÔlÜ êH?Å÷+>§hš£–ŞÖàfğ¯`ô¢O¦qp<míó››¹¬%“¦e%.QÄuZaH0©ÖnEë$bãÅDúGÛMŒó,×äz&'‚¨é¾B¯\ô³ª!uÀn|"/ÇÎ¦Å*YWå;ÁËY=~‘.0‡ sÈ¯cí#»$|İè‹\Æ²ª´f¥iœÑöä~ó;Â‘ÖÆœùéHbîäÄKÌuU_=g#‡®1¯Åbi\îºÓëTĞ`ê%•XH¹œJÑÏ$w¨”>:íP@»#Ë-aÕA’ı±2Óm¥Õƒ'â²ÙôÚÏÎ©3ıÆp&RA€³-M²,Òºå‹3mğ¼H]¦÷§F*ÜMøÍ€°4Çpjœö´#årl•ù—:Ö«Y“*£Â¹[ Ô Ù‰ùŒÀæzŸšn°$ªúLdÓ}¥„Ùá¢ğA¼«Ãµ(Ï”L&|Õ”Ç Õ„U7®c#=Ø¤n³ìºÄ¹ËŸÂ`Îm^µ±~;YM½ÿsÙÑĞE5÷zN)|$ªƒv(ï®ã¬G;Ÿ×ìFzåoTwÊ.HÙ<BØ’˜í¥
?î™àåS
ÄZS´4Î‰ì‹’"'A“Óoî£Æ€ yÂW®ôš!Ù‘?ëĞ€PÙúY¤Ãy©ÚÆœ~¹®o|á”Â¤’ùHéû6ûn¦XQG[JƒOËa¸ øğİAShtçª9¶‹¬o-tº3Fx¶fîêDOÿ+-W×öACº©ú_Çi‹ôoô‰>ƒb¦‘‚ÔY§B‹Ï©–Ç¯>¬^`x©Šğ$VR*8ÓıÛºo½;U(ÃW¤F·H¤€\XÂ¸iŠ–ßi´~¹}òl0§ùÊ'CéÖöæşòø}ç³‹ßu ]8,*¥º¹í×ßµ?I}tß-”^ı1 	ÒJYhwÊ¡Ç¦É÷rqgšàgKxş6GS4æ-ÿeóVS¯ÿkteü«B›ô´ßpŞ&™Ma4¯DÁÔhg ÓÊ€ßıtà£ÌaÕ`_äg; ˜EÎ6ÎÀÒRœª"4©®¬ÿø3:­¹@ã.\Õ|Œ‘åfç2‡İ¢»†FxÑhM§¾÷|_Õ‰¼V¸ò]®1?
³1ûÉÃÜ}Á¬Ø}E£¦Šî¤^2,Ù ±{[uu)À{ä"­‹¾ÀHhEÓåLÉÄ§¤½#väIıÆ•/$>õ)ƒÍ|ŞÔµóSEuóë@ù7šÑ-ÜŸÒ#§-èévÔ±1 œbÅ¹İ/EYÛ‚¾‘şqÕ‹†@EÈ.¿0 Z»Èbœjû¦W±æ/5’
­ˆÇø!–Û<’.İˆÚÁ£(AæˆrÑáÓjv±I€ •Ø&¸öq™¸¬æqå^ì uøg¹%^b3¦ÜãšÅ[ì—UïõC5·@J-·—¶Æ~Ò_¦‹=®÷ÚD…§]”—x ÛÔÓ¦¼}i¨§á¶Ò¸t<ºÑ2°a k*fï„¹'øÎø¾±¤7)ÊQö»ŞºQl7#·â»1‹l‰T&yéåV‚!ş”]|ú¬J:»oÜ±Ê¼^.ú[ê;„Y©½„HìƒÒáš¡ÛvFæxfúç‹
8E Ã\˜­/ùi© 37)®ï¤C¼õıJ‚ÆkUjvã89œgqğ*ÖVJ5¢ıxÁdË2š ‰ê+O¾}µÊØßĞóÙOıˆöºY3?*>QXãxä´ìPuÄ+$oqåÈ?ÓSÔ©49SYÎ›GªöãÈC,Jp³ mø¥‚w%×¥ûi 	ø>ú¨{ä.›vÑma˜¢¥0¿½Ü‰îŠÓ/Ã="¶¡À\5Í¸iÅ’çGñ:+òU»şÄ1“Ïä ´Ü8Ì™—Hê>PÕ6ÇÛk|°¡ñÊ½
¹€¬á6Œo¥ ;…ÈcBh¹›«àaAiòk‘yEÿK8>ô^Zøº®‡(!ÌÑ
¸ƒ9’'5EÕc„)ëd4ÆÖ•Şg¦ËÚ²‰6ÁîètvŸ^¯T,q@x»ŸFbı`…¤®íD(YºYÒ	º¾Ëo#}r†šŒ¹$U¾K1‘†oÔ;l.;Q”Àˆ±¨Í0F)Õæçd³áèÀ“›X†>&ˆZn»à;uKx`ê´‹<™´8ô5¿ojÿ!˜ˆ’–®üµ2Xì²I®ò¢ -kz—[K©vÙƒîà*šL1Í§(ìÏ%Irõ Ø5_Ğ+¡ø@zŞZRæ5WÜKô³Ã-ÑUœ³pİ§\å´„:‹‚ç¤ÙØ…`ú¤8Cj‰_´°!˜Dá´ìòFÃcéŒ>«ÍÿÓ3M‚*¾“ş_Øû
IËM)·Á÷ÅêHšv`ù—êHÈt·3¯òÛ=£iŸfêÁ¥Ìğ`ˆø¥Æ%oĞãCBËvî [Ó<ùT’|)?£ÛöÒî¥†æ¢†d9ê»&—[i6J–2¼·#gÓè˜°fMú»‹qÉ–}(>—JİœÚÎã,qåÜs!İ¬$öDV4Y§4çß3›XÙıª|XÂ²é¶İµÓ KÜP)²uZ66wÌ­øEº‹BdZ2±íŒu‰Pò4`pOê2‹§$¨Âñ OZLOÕ«XêËà O±nmy?Ø‡ÃèÎJ‡rìÓgk$²Ûÿ7X[ò»Ú±]‡~:í]²7'PÒ³Œvëƒ[’œU‘Çj·KÅèTŒ~éékó²-éSˆöx¢¡káàÙIÖ¡‰ÖU¹Ç
ê¿7|ûçMÌŠ
íÍh¨\Işnbc¢7İÕKÆ¸Ã7Úï“=À¢÷¾¸HJÛTbÏè8:†Ğp•pêbà3E‹'¤=ƒi™ÖÒæå²·Dî­ÅøÇĞĞhfXl4*ÙœJTt:ŸktzÚ(„dZ:ÍÚfjÛ”İ°^?[Ÿ}¯LMÀx3ænx“å¼H
œöEj–È[(É?!yÇW¯Y„Ûy£ZÁÃ|&¶Œò„¸å­Œ®–ë"ÀaÎ96id$(l2Ö¿ïœ M@6BwFKÛPcDËto]-x:š«uúËsYxzd,ÔTÀ`\æÒDP:{__—åıÃÄ´ÿtxNªj@¤ïD_7óONîÄNÁuüS¾y=`Ï<çvòı$”_› c¹û±¤LCMÉÍ®¹Ì<ÈQ[	q''¿CcIÑÎä1YUİÇ!÷ŠG W´?Q‚?¨:îsİg(Ç÷QÃã\íı˜÷„Å:š¸··Jı™	wÍ“øéFÖòVÅrŠä@Ô};eÆâOË÷…ëâîÜÁ@É²^_| øf²äèŞ2?Du„ˆ¼9Wİú™!7‹&ï.Ø_ñRA>ETùû³¼öc‰Û+RÂ9İo¥ç1Ÿ5Ôuı~f‡RÚ…£RGóp4‰úìV„£á:Q‘:‰%‡c‘ó}£÷ÑÆçÆQ¢YíIªÇjìıf½Ò”®ÃYeûÑFûJû~1MåûÉÈŸ‘»‘”TWÆßš vubcq©l~!¤i1¥90w%åã31í¥3µ×[hus'¨o´c¾müéJ«%<<)éæöòş©ğ0Ù”ÛCoe¯yuv"k,¥–8l÷95õï?4(rL¤Ãuôõàg"'Câ–£Ó¨«ˆú‹²eK!û‘¥B9*Æ_şĞ< NKÓBxD“Õ~Ì^B‰ÙÖò2ê»Éù•mïe?bÉn”îÌ9y®§.3È™CO²Fq6¼Vyş.¤m#·%ş—C<ø…våòƒ›:Í×ˆˆ²	µ‡qyÕ¦V1÷‘òÒÚÃÈék<eoåîò:´£êáË\i0l¢pa ¡s1cYe“\rf½½c·z°6qZîÃ[a®i®â´´ì<?0Ÿ‰T§µ­3:H+éMÒ¹Ù‹Ÿc%¥#p-¬ƒ&¤^PpxÜl´©s&åRËó’'S4Å‹Á±7°ÒìÉOrÅ}I¾åóLA©­3ÿÑK n+y–4±›¶vµ·Hã¹‰,aÚÅñXQ¥±~‘˜)]Æ5Ÿ9WÆ6nû”bÌ]ïØ	ğÍ‘Ê¦ƒËíO8zèĞjxJÚâ"]Q¸A*¸²o¹NêL.ß—ñúÈåCRÆÀÊØ@š%ñQ.|®½bncë­ÃğGüG|ª©¨¾kjä:IÄÓ’_²rra©%é¿w½`* Áógx²ªâ?œJ¢¢{ÿPG¶w»}+§Ø¾–=¸é×dŒ«ùô8ù\@˜ù ĞÍex¥ª†g*½¤R°(ñ~ö8N…4öÍÍ€×òğŠUèº
¿Šæo"~<AÊ;Ûß_€A-26Ñ‰Šp¸x½´bKiiéé÷s­¿ı%ÛNz½uv¥ŸFp:³“ 7sCàïv¢^¥*PşNDğ+D—s¢ÁÈÈŒ*­Ó~Ï© Š†ínIs;ÁÔ ÁÛ]ıÈ^	àQZ:¨U«ÿ:­¹vã%¾ÅcöÊÃy½¦b»íÖ6Ë	ÚC~Éªhñì,!‰‘ûÿŸí—|ö{zëoL>|„Õ¢‚t£ãòuÜôL#›)Rİ›(tÁÿGÒ4NÑá¦Bë2Ü@Î÷ÜMô_Ì)Ö©À­…â®Bô‰¦!?T4dÄ>Œ]`otĞ[T7<Ø—îïQ>ÛÿBdD½,=_Ì{sRºbë>Všø~B¥Ÿl¬íƒV2«
²YËê‘^%}´èÑ–‹üá’øóGk „õ.Jzfbÿ>ìk'6/2<7LÍëö’_ÜŞMX}b{«C|#¨5½/.;\Ñ¢rÇmÀºéZJo ¤÷N÷Š£u:€mMi1öÔÎß˜<ÉêÄCP#µM4sf¢r°º«8¸w`¥Ï,o¤¸óHi¦àçFÒJ¸G|¯4Î*óg=ºàëÒ³U¹¼`¸¼†÷6`$µŸY­®p|eºİıFÔC‡«^·t5õSÊcCğ–ãñ¢´7ªÖ9­ÕeÖ4ÕÚ'iíéUÇà‘¨ß 2”eávˆöSÁî(u£Áæ—ŸëìÏzÓŠG¾'â Oy	}Bò´KÀÇı»‰9.RÍ4‹â;m`
?@`~5 –âFöÊ?2§R"ô†˜n!‘LëbW÷’é
vÅyÜ§İög÷M¾Ü×ÒVÎ6ÔÉÓ%¶¬qe­t"«‘“t ¯X£-Ö.ùäz§tgáŸˆ²êï÷iöàÛH‘Ú´N6m£íc²ät1âT:4=ï=ü_œx¨W§µ<hQf¼¦à‚­ÑóÅjÿ7M^µ'uW,pœï¯|…á/Xx;d)ƒ)ÆUÄo  ?,`Sõ½J„·ùéÅ–+~5"SÅ;Ø¼u&e7ˆ@~ ÁÍIcWšü%[„Nc®¥¡p-·«rğ¥^Šd˜(R¦ÑÊ’J­7—˜æ5ÕGÔXyâšñ“<Rº’{§ë¥J1ïE	ÊÉ^Öæd?†¦—zf£æ¦ç²@ıoÄæËC»½~co:—™¥Ò
âÜÊşï8t*ŸgYT´=*]b“)8Ôvöóß–fQ£ÿ:Âd¯®z³[Ã}©Ùù¶’¸ğ2	¨†2¢ÛŸ&H7¶F¢¸PJ„!YíÂõ©¿[Äî«4GoJ“\B1{Ü¼œ»1ú]C@§ÿw$ˆM@ä´/d”+£ Tˆµ.hÙ$BÒ“Ç¢Ÿ%ªä4Ü¨ÁÛBX‚¶ÙâÜõ”	2ÆX/úP2'[Ô´ëO½Wáª{r³]ĞÍ·¨Q†„ZÛDp¬ƒµ>2Z²,ºèëÄJïe¡K§²0m$¦îpÎã‹‘“fô(Á½(ûÖ\›³3|Üè©Òa·óCèµJï7„oÁDÚ;„Ö)†×ÜàVOºøÍœÅ#›Æ.Càsš'lß=šdr;ïÛ“Ş' Så:Ìëq¯6qØb±ÑŒ	›öÆgÍ¡Vú[WÈ®²ÄMög‡MšÎ¿ñ—a|ƒÆÆ‚£¹cNáøÎ rIai¥JügŸqå‰üş|Cm²¿üäÆÎ”w^%ßc Z¥mj/^wI¬-=õ-X…½%3@À·‹fßR¶DünI1}¡üÁ™ĞâÜÅÆãXR:ş÷…Y;=US>*[”9Q·.uû_;@+b÷Şœç×JÂB¨²2í—
ş? 3&¥âÃlƒìF¨Æÿt$*£gJ—áŠ‘V[¹cuoå­¶Hñå9¬*Å±j~ò(˜•ßÂ\•áï€Lìpû£›~mbì¾;@í•ß¬Ø;"ı ÕP%ĞKR*áZàÃmá£•ì Ô§8Bª‰‡J’ù0]¼§-ÈšG\øª¶O Ìgøª‰©Á·}™œ™Œ÷eN-…Ò£pR¡ñpAòH:[Ó0K3Ä2ëm·UÚÏU	¿Ç\&­™¯ã¨Âæ)ï.‚áı_0,WO·àõÖ“ŠÑŸ$P#Db‡!<zEz>t›S†gV*d<z… qqp¨m®[t_yÀ zrè—æ$XM|RË¯—÷»cQÿDxöMJª÷·`œyqÅÜk!×=o@‘{ã*Pœ0™+†Çc˜æ’º¼ÿŞ€’Ì5ØŸ7	5ËZj=$ÙzCt	ß~´P9a’)ÁªÄ<A¤ö‘'†˜‡~QÇDj‹WKùYÂ;n§kâæ@•üuy‚Ò¯€<á½üeÂ¹Xæ?É%QÉğ&.éÈ„Ì÷“€_' S±"ô´ÿ/I-¼	ò”Œû£…‹$¿y©ƒßu+@'H"õÔ	Æ -ô‚@Sô6ú ¶„8 ("èí}•¨¥=ÏÑNİzph®b½ÓJ0³mì¥7!«¯ôÕI¸Ê¼o	ÔA³ ;Å˜ÕÕ«§³÷ésŠo#`iÑÑÜÍR»ŒŠm#vPƒ{q}ÿ,B¢e†:)Üì¢¨A†ˆZŞƒe´G¢wıf¶­_§á/Ú&İ‡”¨ğú—àô3÷¯²)uU8G¿€pş¦	E~ÿG,“üqÁu[¦ù[V"ş²øMº‹bË9ÙOF?•):Ù–Tc¾«Õë¬hEÖ‹&‚kû;°4L/MäYû4Ş×™òÑë‡†Ğæ×9+J 5A“loìlwKÊs%LùÏã«l-nº”KOvŒ[Ó 3ùFºZ›9>Xş·¸æ¦yÚÑ£$êS[ÎœlQˆîg+«EÙ¡ŸrĞVáh™l[‘‡´}àé”€á³µ’ÏúvI»ş.K)OS4µ×»V&ûKY3q+C‰ùú„3mHmw’”.ıJXÎ2Pu
¥"¯êÛ7#3‹Ô@:DÕŸœOÌ(¶O´\?ğ^J§©4 –ë“(UæÑs–øæ½M51ÏÜ•›bÃçªl„îê» 8òPˆYô¹ JÀ(hnà±Èõé³	mä»	rsá/u7Ø
š Ï ç¡|h®©ìàV…ü\ø%Â
FÉB>–¨VÆ†î“£fs¯©2ëRŸã3DL·iö?Í×­ÊNğ|=Ù½ê¿’°ì9ÀÊ™5¿ zD$ÏR”D-ü˜ô_v-D­®›Æ=¨ÛçÛ0[AòH,FÓï]†±¥l2$Ê™YúC©Rr»;5İ)¨fĞ‰Ã•¶×»–rÉ€¢áßZ[\A²#ô›6 ‘oh(,š¸´UGJKıªIb=œüíE•³§56Ö!…ˆdîi™mÕ§ÔõFŸ\ó¬…6<‹³B…¿¾°ñË0PÌuøÃ²U{lS™òÍO–Àî
ÍI<}[¤÷„Z£ê2×¥ÊHpœ<Q¿…$ëZ¹&ÜC²„Í_ÀøÛİ™P“è2ÄößŸ¿<>©¡ ö‚ú‘}8~kQlğ5Æ™\+Çxjš—µ¢‡w¿&&£Ów“yÍqÆ.Õ¼¡%çP–èİ©¡†ÀZµsõ½ô4T(fº’Ëù6V¿>[&®G,®šåS>Æ¾Ie6 ÉÚæÅ—GŞB!e‡a¬Íééâöñ¾üHy‡Üì[4Á¡nls0ÛDÇzÚ—^¬633Ö¥¦Ãéù¶úÎÿb>=4q
´›0rl@]¾$0šëĞO•+-hŒäa‡–y¶ëüÌ5Î»†ã¾Éıb9ŠTv²¨*_x ¸3
­¢/’;
«X:‚ÿQÎ!ÔÎæ]Ä·İDšº›Í?JõâÙW¼øõHCzÁãV€ôãs‰?'Ş3Sß±Ü€¡U â‰„h”Ë{¤C{IÛÉLqÍÜ0‹Õ€:éŸœzÔµNuÅeÖbmr°­§€]˜ÄùßÂZæVNz¬cµé;Oä/Â/Š‹*ºØğ}¼‰òˆ¼òy„Yapè¯Ñ°FW5°Š´æˆ~á8[ŸyiêDK”ñ·M|¶Õ6×Í7^ı>ŸùÃ °TÇXj‚—Àó„Í¢½Ğ°Ï¿È1íúV~?ACÛòÔ ¡`_P 8r,«_èÏc5j[w9èÜ+KÜaôtK:ùN‚bØ ö&	jEæİãØÚX†îQ«DGKJÒOY@b¸ì"ŸÚÏ#,!åàsf\¾1±¼pšH«pãcÑùç,Ñœvç±÷¢²XqôÔ©ñ—ã!lL´’ĞU¤z¹’Lãw0Ü|0à‡äv¶ÿ…ù €&îT)­]š“Uò‡=š­ÃT¬€i}ş=‡HšÓ[Sæı~³gí£„¦á{ıgËnÛ¯ºä:Pt¼ı°Á›Õ»ƒ3láuV»s= EsTÇqªœGLàoT<iú–¯^²%õ¾>O'ç	 ÅÉıÿÀÓüI\&%Ó™hîdH'nqômMnÁlŠ¬éE7°ä	Ú‚ÕV:ê h  6è$v£ëÀh5–íüÎæìr¾˜æ;ˆ"åPyKo¼«"B¾‰ˆŸÌ5
òlÁ)ˆ^n¸ ,…H$sÕèÌ–°<÷vşøP,ÅIw:	˜Œ¡µ@ÀC±$o@ôy}Æ`§ì°I¸FAÚùQˆ€¼a?Á›š.'ãF‰cí(¿ék)×fæ’»“½¯ËêœÅl’ÔîOA:ÕGqÊœoÔb&=RÚJÓ>†v‡¬“}fR¢ôÔà¤ÑèÖ—2A:*E¡ÏOhaP¾û‰­Ä=˜6ïZ>ÄmáÔ
Ø¢®Á…v^ÕÁŒS°ÿñäW_fÀY¸s¸®¶6?Z˜CTÜ¢Ş¿³x=_ÒgX¢ºuüXTkêmJ¤ÔEöàÉ]¦°BÌ	­şŒşkÃ7_Ë8Ÿï±Ç;R´6òš®ÙAk‚*”ÚUõI9¶ZKâüFr)Ş›£D¾ÊsÛ}ÙæÉoú]¢ˆÃw’•˜W†µšÏGd|¶áu~»ûAK½Q~µ$¯h9ÿª¥Ïu	§Gº®´l¿:ÜİªÔ3#"å€ÿ`Hí®ü¹‘
Ì?`¦dvîQ’})`æ·{éåhößºš-7N“!T“°d¾¢
HÇn«À §Xöüqšz+åÀB‡õÇ–•&ïÖ è[¸æû\%qÛÂW6†®ÚÄc+ç>ØŸÖ\jÏ!	˜ÎWµª·¿ÿË‹í(¨ïAapciâó"µ—ª®7Ok{/ã•²êùG	5¿†O:ö”VW^†Š\İÂuá©şF½lmŸe¤ãLƒæ.Ã˜“…€i½®½!ê™éÆ9lw?å÷3>­èE¶‹‰=2‚sªjöÂMğ¥Æ<Dé–¾ íø„?½ÌÍâJZx2f[Ù°[ÌR¥³¦µsJ;k!çT‚È«…pj`÷[CzIŠÆ©~Ll"¢Ù9Siø"
’@³ƒ-ãAíi*‰çò°}Œ»—½¬Â ‰¢œåñFL'Íúä·n¤¯D1ËloUÔ'zöÓHÀv›Ôwmî¡D¹Wı÷Å^à}› ’â„àg¶×¦œ¦ˆÉ®ØDb‹QŸD!D?KhV¼”ĞÄû4{o[TG-‚Ó¼xt¼;C[}3_İ7ÒNo©å)Tu7w¥Jí¾àPÑ[;CkI×NæÅ4İÕõéÉVGRêğÇhnU“}<oßsÿ©l[D™¬os–À<ÓvåŞó }à°d­§ÉòUFó`½Æá‹Œå&Ëd›ï´Nk/§L3¶™ÏYu®[wC^‰À^è 3àJâ!MXB½ëÓš‘Â±¾t]â·ÿF1úİA\ÏÃÈCË6%«ëü+9çjò—=–©Ä‡˜­£ùq¬èùÏíMP=^Sht‡©5zª)öl.G3§ló#‹Fæ¼¯eL<éı¶ùÓú™7r`8zÄ4koWT‡zˆÚmT$û“-aYw7ÇÏ,ö_ñdÉ/YIy½9„Ğ¦1ƒİï—/C¹¥œ8Qê„w™jMÈ®½„I››6ÃŸlö±ô|K©€´óøLˆ#Şæ5
Üş?'h"–¡–À O¥´¶‚|*b=v¶ÎĞld‡?l­c®\5fÈ&¨Ò=«FÄŒ:ÍÆWÑ•ÜõÙËûC°Ì6íîõ´+Goê¶È®Ÿ£w55¹0[Ù	NUğ?9âÚIT?²×w4hŠîfµUõ`­±7)•Uª»ÍüÏÒ”ÜfÌµÚr)ÎÑ';b«Q‡p‹CI­$ü<$åÚ­É>ñè|=Ü‡Èàgş\Hp›½vùC›"a©ßƒ?èd·áë€’kXÂ>ÈO´ä5|(¥æŠo¾ÿº:ö<[‡¶‡dáÌpmÜ÷¶R~ğQæœiÙ ÇxŸ¨Ô!£ëåÄÁVƒÕèA›Ä¡Úk$‰>•cş´xŞT­´÷üV9Ë#¸RxøëicaŞ“È¡ÒÉy±ÚÌc-‡¤ösM½„ºõK~Æ ˆ"¸*ÁVrœ]ÑˆÜ¼[õÈ@ù-]Ù·°=>SÙà ²QÒ%:¼+	ç~»Ş}šÍÌÂ’Zà·LıéJØÒ6, 6¶ÁxÛ«P<Æô Ä'+b§Q‚„Ô–I¸Î‡c$ë•¡c¼¶¼Åÿ”%*èVîÑ?;h+V§è éŸ6Ğ.äv67ƒ¤&Ìİôêàw0C†0E±5¤E8*·,KË¦U‹„L¯ñ#IwéµÈK„¬"¸€?´Y>©m™Õ’±TşâH”½Úß€%(ÒÄwßâGDœ¬:wìn_÷9ÃË\Ã:œdé1ë×A™òiãäÑÏÙñÈÇ1ª¬Gœú},v<Ë»rƒ+¼_üM/`ºé¤ÍõãŞºkwvÌ•1V]{<n/…a>¨RyzÇëCI€œ+£¾tW_F€
×5.¨hÂøZÊ9æªòÇ=£©Ü,Úºã1ÿlxC›å#
è¨4ÈîölªúLÃÖhÄ·†$ØÇÄ˜Ìî†É¬ DÍ³ˆûc7!H.Fc„1ê^LLµ/6?KØ’å˜>wÀ§i[:4>¯hD‹r–
¥M~yLzô©Hzõ”Çõ”%TZú"^ğ@<AQ*¾L	İ¡ÜáÔ‡]rçˆn^ÖE5»oL_”lÜ
áÿ0x,¡ºWx´çş·Ÿç3^ŸvĞä0slÒ¸éxñÎœî’½-k8¬\z‘^Ë@oH·|N…¨ˆ²±N(ÔÁ÷u¾ŸP>Ù!@LƒRÙÅ¢ë·*ÎÙSÅõâh$Ñ¼ïô6ÿn¥a[ƒ|óÂâ´½¶—díÌu­”@ù! )0fæÏDò½¾ÊìU	U]Ø¢î Æİ€vbAñ°ÌtÙ£c¹%òÕ#WÃ3×ËWàõíÕø<z©ÛO¥zùÚh+ ‚Øà6¼²“üù,"Ÿ=DëæÈÍT5ˆä˜.¸Ÿ7.·dÖ Ÿ‰6€¥‡¹óW×Õ9¸*Ê§/Kâ9‹/×œg¿Âı„¨› š‚ÖwÛ§(w£ ëß~uzzÆñ£tAßH`Õ2{‚0¯Ü£qûñIòØ@TÕ«¬XEÂ‹)Ÿf„Z­f½=H„qæ*ÇĞÈÖñ¦üBù”º«‡g*oR?ĞU
J›> }.Pf|¥ H¿ŠkRswÉÁ®èDv‹^šN0ZUhñfÉTœ íëA#$ª¼G	Ê¾ï vÖ;^[Ë`³\xÜvj×f²ÏÍĞáÄ@–òPË~ªP¿E&W^÷³àòÔÓÚhg†Eñ×>IS~«XGBŠ‰Ÿ[Ş`6iE »‡[`®bcíºÈ}s5V°Ì:íë5ã'GÇ2&Ó™ hö«ãkºˆKp6ñø|'³Û¾y±„&`=Ğ)ïcšxéÓå¡¡5¦œôõŠÓïKXŠŸÆuz~
Õ*[›ckáï„	Qñ§´˜zşk­uw.5ÛUíÂ[öñNÍÿk9jÖà’BîñCa£ë÷p~œN „5ÒÇBÈÉóf‹÷gË—’±‘¸ùxñ±]Çàõ¯?(;/íRÏãÅS|¶Dz3¹×øã›Bä6¯Øc%õMxª„´[‰AÔAªŠ+Ñ QÀòµ×´yZÜ!ù¶;¢qr=®°õÿøqóäŸ	b;ğXK}<…Ÿ¢«{µ_:¬Û1K „'b³QÄ	ãÔFÏ×_¸Œ»ö„æò2¹lë&ÀVMÎà2'&)ıæù²úÍ»eÂ+Ë]C@µi|#`ZâÅ†Ÿ¿$¬ã$7b-‚Q+´\Äëpw\Cµ/G™¢¸úÕ»'b¿QËE÷
DFµcıÎù¬zÅ†#gaÒÍO”JyöÄĞ(d&Ø'ŒË§&ñÀš0Ú„Ç&Z‰FÁÊè9wØ{’~fÕ›†óbMéyÁÈœÒv†õüÌºƒ4c!ÔC)åÇ…÷qÃ{)Ûfµ£ÅÃ?A-õ˜oÒÉíØĞsİBş‰¸^ÊÖ.J6ğ?ÁÀÌWÆñ2›~Hä¶¼qX¾#¥ÁıKÖ3MĞ;êª­ÁÅ€=èüÈ¾ hQ$¿/°ÆõèÈ^J¿=GI»¼ğÙÂZş~Ğ¼V2Ãd)b¿bù‘º–W‹A’Å0ÃÕè¾šC	ışùì2ƒÈ!@!t,m¿f~6­Â5œU)Êœ!”s)ñÍÅî>HÔ.ŸÔhÓj¬…öiêMêçŒmÕ‘§BşËÃ\|Á™<![Àv‰‚ç[»7ª1˜,R¥Åƒ+P¡rúÔéÔÄÇP›(ÏF–¼ *8=ê©·ÎºìOr yD+¿7sİà+"Ï‰“m[C·õ)Ê0ÈGœá7“h—#ºÚ¿¡æÿ4ªÜõÃŒ´1.3{mÛU£GÊ¸^ÜvD{8Åæ™“nâIİE¾‹_~€‚­™…’ÛHªl+Ş¸`JFyc<¼ØôR¸·_ª¤+~§h‚‰Ä’Ò‹O¤u²šcú+2o-lÑ­Ò[õS•øç7kn—ËŸãYd¾o(l–­"¹ ò4™e¤¥%)Ô_èókWìµòÏ=úh×æ¤f«$âÁŒz†ùìßX7ãñ®üDyË©C<£7§L,|ÛRÜåÔÅNÎÊá‰#‰êëF
\•%7FàAiÃcXìÄÁ€Lˆ˜£ë
ÂÎ»Ws=°iBnˆºNş¡Ézİª‹¼@IÈî¼tàs"|’näæİr¼Uÿâ€#•ğ3ÛôƒÄlZj·TÈ}	 ºO
*àY¦óüÖ×‰Ü‡M;Ò´eSñ­})iŒ±ƒ‹²(|Ø*¬"kÅâÇÁŒ1<³vÍŞí u€V^0:øeÌ¶•|C9¼šñtj÷ïÜ-ÌE^¥W¸]ómM»9ÿ¨%ì˜jÒ—%–£Áö¿1¤Ü“Ö"×“•ˆEøïÈË/‰ nôä²Hæyƒ ”Öd‘â/Ùˆé¶ØNâŒqÜä$SN«Œ’%ß‘ãN+6«N°úÊäT®ë(\&âØq¢œÙ`ÏÓÏ¼L˜±:ô¦`¾°0üÍËeà«Òú¦Ù9½êÉ·.Î¤lCUÉhê¬?JíÎ©[uô ¡=§\6‚ ıÍ•]£»ÇV€½‡	š¾Óeş“8Uê‡`Uü÷vµ
şM–MàÑCÓx™.ÓÂ¡™´¢¡Ÿ¼éúÁøŸ‘g%(Xizt!-eD`<(ÄJ`44/odwuŞŸrtQru`mkgKŸPP;{k[WCFÔàŞï t `0,i,ôIïtt_p 8x¬¬‰ôrN{A û=ÑRûE»KOLòéõÀÚ–™$!oßo  7`.$T#$Å=Zwn”PWD‹z‚q
`9Ğ*ä'3b­šÀıL=ÉÇî´{#«.5O˜=nNß@@¾+ù›NÔ‡8ZªƒúïûH÷.ÎYÄhĞ	¤>ÃhiÖ–æ½´¹À¸Ãı˜‹<ŸQJs~a,C09ØÚ­Q.sU'}?5cpÜ4aïPtT>)LaíÕuùĞVIe"AÃvÉ©Xõ3CVTj=ş©¸FÊ×Å540/l$ãwx˜¬h˜Bw1+!_‚çhƒ¢Bá³=z+¢¥ÆïÚÀ5şgwR…[#1—ÉîWsJ¢op¥;9c×0›Jã÷.ş¤xCZ‰Ã¿±$ü\·´zá¦$¾Ùkãé–ÕkäâÏN£êãYÀómqÆôc¡º2`Ú¡_ô¨æÊYé8ĞÆÊŞ ¯½èÂé©¶ÆÎêìw5ˆîrDcD.kaJcéüV
 XGï·Èö¡Q:%FIH0kÙ%_=Âg{mTm5Á],9ĞÇ/Bw8æY{@é)O#z|wø¥˜C‰õÿ1r§1JYòqàvKAÏHl•üW9Æª¨‰s$úèTB¶T‹4L™sá{ì Ÿ§±¿çCæç¹­ŠÅŸ+'t"ŸaÒ^:K*<ÀnvŞ‘Ÿô%	]g¡éj`Ÿmc¢PhQ]ÛA£HAÎˆl^•À`Oõ´Æ›fÿ)’W¹{ÿJÅ4Q2è¦é‚öÙ¾âÈq®œDƒ<EN(}Ö­VŠtôèN"{?T÷4Œ„ªê.®/d3SmÅÕ«'bîÙÂGQ?	PÜcPêOJy÷cNB0õÌÂe•›Xë O? ¬Vÿ¼%ãØnâ”q—\VÆØjâ—xĞ¬^¥~ù*ÆëˆÓ_‰ç+F¤¤ç6Ş^Ôú!æÊI°Ì<méÕ¶çò¼}‰Ùá¶˜8÷M2›™/µ‘5GÑıÑ;J”5ÙêLÓxI*ºZ—ïÃÃiÕ¹ìX´”-¤®„HdîâEV¶b¢Ş³ Mà°=Œ)æÑïÎM³MÍ­‘…”[’ŞÑï`#UPqr»l2\$t®~xM(¶êvçÁ#[ÓšzLû}»Y‹BßI Zˆu;'Òå©Œ¦¬óâÇÈ§’0iØ^.KD~yc)ÁaÛâ
}Y<+S	3şÙè]Ş'CqH8v­ ?¡®Äo(OG#Î†Eå{ï{]o,[I¸$»Ï¸ÌĞI@tb›õ¬
VÉ¸|¾%/oéK)Ïfìõõ¿?(wà¨J’ÁãÉd#òRCbña„¤rI9À>¥Ç0®íîNëLwMŞ ]€˜8RşÍÎH·#B²÷üÒD›\q´z£à^ğ |8ê²÷¾½ˆIÂ•0Ó:+oP§£<T¬Eò‹=ŸiÔ6çnò”)Ø	Œ‚”—âì–¾ù¼KÉ¦¦gz++P\.pˆ¡lQu¾2R{eÆU¡u•ËT}(<oñÎó‹"ßa @4/~¤C/€Æ´ápTqúœ{Û)c“Ah`|«FÇJê7.±äLsM‰…èşAÈDBğ#ÍMóc$VÏı³9êİ·! \@È8næÑCP¶Í@˜2-¬–"è4óp}Ü¡òÀ}¨†²ÚÍ£yÎµ‚sPÓ±Ÿë[7E®Î
Å	êFß|TY°m˜VÀÏ¼¸HÖ£)&¹âÊñ¯<D)ËfïRôX¶`"~³XMÂ©†Ñš¹y3EíË5¯o;*A^—@VˆŞº½KuC?y²İ6ş®øDz‹[C$A•mï 92ÙØëN|YõÂÿ)¸{à¢ï´8O7¦ö±ãæHm“™¬/Æ»*Ë,j¾(Q”%áQ›ÁŒh]€Àêø‰÷Ë‚9ZåwTõ×C)–‰ñüP-ŒS¸}3¡Ñû
‚ZÕ±†°mQ¹OÌ7pÄ¥´I§$ùüzùºq1Õ$/Ñ—Õ)Œ£Áùş;ŠÎoÉgc‡ífÕªW?òÔ4Õœœk×
Œ„BÛI£N•„!>Ø‘ö˜R©ï÷˜ÃçdÀ`“j{õÄ+B¢Ôü—ÃzH„É1
@v(üb‰åå™B~!¶>bÄ°ŞH0JèhYÑ©`Ù5:â(Zà¬yÜãæZ÷Ìi»¨9½=ñÇ=ÏÍ]Šıh®Ë“š`æ%Ö“É ÛÕRğŒÉ(ÛÓ–PãñÉl4‹ “i)™ÙC€¨õlıë\Âs!÷]ˆÎ9çÚ@ÓïØ†Â«Öéfº
¬@èõJG 5)MGààòÎ˜Ù`Ål (nÈQi3j–ÔÈ U	;ÆäUb%pv^ e5!Hœe¬%Jkš†c¨¡!}¹„¹¨,Œ:‹®sä)ŞT:×g²˜Õíºİşì4Ç­Okñ‡!móĞb ^şnM›íª=˜{Óè’ÇıàóƒÊè‘¯‘›X$‘ )SDk8 ¯gKBï<ÄLZ0S>¥èCzÈ ™.9:ş5ßÍ	QFËu~=yDğ‰‚»¬¹"vÊ£NzYÊ2]]f|à9Á×6]ÎÂ
fSÎà´½„ÌDmËëPCõ8XkıLŠ”ÚÈc.Ü«&™›¯Cn2‹mŸU Q~ş?AÅ{L™£–£±øa‡üE¹Ë
ïxwTf"æRÂ#İÛHá¦ü"\U2·ËúŞâe®“Uû@ä]tÈì·ÜÓŠ-g|—FÖŠæß5£bô`ÚjX¶öª|/V‰·›ôğŞƒ4Ü0aìuóLk1|Iuó£v·Ü6õŠT:+V[å$üQ¹ÄJì	b bŞ§öÃÏG®çÑÀÜ‹œàOµÓ%ü#>©«¾3p[®êF”K·»v½'§k—y–•ÙÓ@ŒšT§ì!ü€›\#ušµbcâá$Öˆ[c†`/‚Yªbó!»Ô8òÏ`×­øòå½³	ñÒ¸a‡,WR~(zšáQ
«Ë{­$aCo$ÕP5fËZ”»¤M|ª¢ÂoÚç°!©(cßÌ$‰ª×HJõåN_Õ}¸Š²ß
ètÎ}èi‚í³ÄáWòåôÓİáÑ„1@‡_Ÿ_ 48(+ñCLğçu0uyc*‚Úzãm4
¯<3ş	È2ÃÆŸğ:iW&Š´¥÷ûm»U‹Gå[CNx¹¥÷µ‹ùöxËlbd¤l>#]´-eœ¥¸>|`MêıÇ˜Şµ"´mê#EÈ{^:?|­ÆÅªë08ûÏP5ÜQ#-4˜D"ºF³]¾°HL	Ù³õƒËºX,€Z—k.áÓÈrkB—I–Ñ/¯™”,ı_F²ùå8cÔìwKôµÀ}Ğ!ç`r“}Ş"å‰‡e°â`Å·©éÏ•Q“<a’º$çÜe$#}áÙ·+Pê±!ö
D@9»I›Ã¼Û<õ“•/hî®q›\SAÅÏ"cÖ#ã	……±j`£7ƒÔ’U …üoB¾xä¥¤ÆÜjá×0aøS‡¹îOH8uÀîDÀlêê¶R2ñh "ÃKØ£–TIÇNêŒpK—õå$D‰qáîƒ\Û<ªtƒH$¤™ü`È½±‰Œ^İÇ)í\ĞC3c_"è£UÄ¥È›ß©ß47÷q¾œHQÉÅ%	%Œfœã½î9Ş#šgaæë†CÍÖí¦¨Õ¸2ÊïúQĞtU8iW›€ØG"ŠíŞN"-ş)'ÌB„!¿pHZAı°.„”ª×zÎ£Z5`…mÖTØdRbœ”N×L2Â‘çàÑp«K®ğôDÑ(kR¤u«ÚØc"ŞµÜ5/RÀ®‘8@Ú3‰PRÃz§[Œv™¬ió¢^[ıÜy¡™'mG¯ñ%¤éQç­nÌ%×4§Ñá”]ƒA™œ¡Éö]Y|r¢ù±¬(öÙLÏkL©Ky=Ô–
÷ùİw>‚Û]´ ‚é£IƒLL6©Où¸Áy[%Áá«>³ÜìÖõR“;RH`îê
N
~À–ôsò¡]ú‚-kkèú×Eáë=ŠÒøÖ‹$!¤ N…·<ıé[„˜’#ï¶ÏIš kÕúèu…¦Ù€r›óâG¹X2¹æu_~şßcÁ-Ü×^ä~´/L™1æ^ü¿ÔiÙ‘ˆØ»¤ÒùÖø=İ¢Z<pR‡ GVî+Î]ÓC'_©zµg{[äîÒŠ¢ê
Lùâø}Ù\O'z/¥Y7:¬)†«/v$ƒÂ­Û!òç‡Q¨9g‡Y]ğ³7IºÁ§S(ôŠfbÑôÓ†ºñÏ(>LşÍ=²©Ö’Ê®ÅuönĞ¯;+{gÂÜÑ”³MJ#uFlöêü	şÿ²Âj
UY´06®¬V(Á
{y‹è!´"İ&OX«±*ŠV§ë¶†ÌX…váyCÏµ>/f¿R¶ÂëçJÆ/—shZ³ğiJËäˆF­ÈG(Ä[ã2ÏD
ºÌI¯HŠó+¹a¨áu¾ ¥Áıï³Îq­eú‘ÅÓ"İÚğ‚Uãõ@r7Á#ü>ùèzö×w#Öè]Ò®®ù«A…¶œaÚ+Ş·^dºìy² '!‘’Ö×3ª^º;öØtİCÌh&–¢ÖÁò© ºÌ¤Ş³iÑP0Knñ“SDÇyºë7WÄ9ª,3$ÑÑ¥
ã3~¬±ÀpM„}0ş™ËmõSKóR»¹)´@~Š'òƒC^®Ç»\ê÷ÏA®öƒŞÖ¼È{]©Ãm¼ª¿¦¾^ô%ŒZßA¤O¼zhm]§ä¾‡úÔÄûÆğï#4!ï`5YMn0d7V£{z¼¨8DTL'@3WŞ†_÷aÀWA{Y‡»¶ö¾Ì7/l1Y3×’’n&gĞ3'c%WÔX×cXV±…"*[A+’ŸlR—UÕiV,$Ö‡¥âÎ¶ÛMq„î¤v½™¾‘5h[¤<ĞùÙ6_Õ'‘ójº¸ ñÏ nº„ ä—Ş,š«¬ªä9ôô‹«bÅ¯la.ÊÂÙ†bå‡1˜/Qab+ğS?ú4°Óe¬ßeéÓ6êáóu4½YùM‹<¶Œ½gt©,²Ó‰ß¹Ù§¼ÿø6»ç©i4?AC…«à^uß_ Ov}rxécEA÷oŞåTm}v°§ACöêÎõ  =¯-ôGü	¡õ€(Q\fú·ËÈ×]Ÿ^UßG BåvG`l<ªì’Mæ´m
Š¿Dypç\´Ìw‹ìTÎ|.æöÆA³Í’í•àÄJfîy¡­»8e_RWı5 ªß ~åmAr4vêóÜT»Hv «O+.È¼rõ 1€jf—ğ3 ™>±Ø½»ŒT]ÇëÊ#WÙñ@Eyâ)üç‡QªuÏs,I¤³Àu¬×¶ù‚ßœØg6öÁs/8:°TéŠ7¡°¬U 82ùåÈWÎøF_&å_lRı+ ¢¿ˆlòÔJOóŞXÜríğŞÎ
³-gİ!¸¥•ƒM¹ı²™ñ=•˜VEbû)ÃNlUõ„pdüfOìÿ“‘(3Ì^Ô¢¯„u2÷A’Ş¯ƒğyÆ¿œSãônÿT:KùÈZL°&½èôÊG3‡uídƒá°Å•'0§sªÁÿ˜D'ÏZ‡ôíd¿LHŠôÿÇ‚K1$œe7ùSw„ 8pÛE&”"×1êÑ‘Aè2†İ;ˆ–›Ã«Zşœıùœ3Ÿ“a1*¡ˆ%(
ŠÏo} TáyÓj2£mÚ—gfıÑú•RsôªÌ "ßåDuû~Gâ1Vİ}¸ªÕ‡'HçğNß¼8ìÄÙA47ÙNÌcİçŸÇ]kÿ4HŞ—¥‰ƒ‘¹1¨^ë­&¶qX0½õ¢²çˆm•ŸXrØ¡, €—+q¨cpÔíĞ:Ô
[ÅxŒk¦qƒ\Y’Š§>ÒÙƒ—¥(šœ³|ŞlXÀªT7tSäø¼ü÷ZÎrõX`6›*£Bı¸ÕÏâ]²İÂŸÕaĞ_!KÚ4„^`cmÑÕì.MÔŠÎ®7wyÓväH[Ë\oAœA)*áİ×ÄA€·Oó¨
kË&Çç5²¯EÍsÏÚ…³c½é'‚®ÛÉ†ªî4ÇøuºŸXDf8mk'÷AÖ5ÖèU³7l>[µÉ¯Œ÷6–£Cg+ˆX\ 	ëwœ8A[	Áü`ha—RÔ±Ì/~¬ô=Ú¡·±½BÂv½Şï ”z)zıœÄ!ì"e ¯ÂóPF¹Z+ÿİˆ6Æ¾“±FzüY¸©iòÆN€eš‘°Y°¤º{¯èóÍÉß,b–s¨·|ò®xŠ,§À1€kºò;—*ƒ‘å–ñ¿³¶¹1®š·Œ
	DI8Yøé	BÏ½Ó'K!`_kõ%Ãa«d¹Nl]A²Ä‚Ã¬ÒrßrjÅjd>]ãÄnëT1ŞîUEaÑjÄêÍFsq±i´}8i×¹­¼3H©º‘ı9KÍsFÎzÈûIŞ3?²¾­š½“OÚ°ƒK/ğ×”ªÌ ½°KÖyàrã:œ)“7Æeê‘µÅ_ A‚Šˆ‰•İ•£FAµÊÍı;3(/dwÔ	iõS à}e8T¸ÂDÔåVßûP<73U›E‘ÛBØì4ğ0|,êò£|ñ¥Ìâ›Î£#<Zd)  ,@QA¬<Eª„z <§# IœÍé¦¶ÀL+t¨ İç©ó8L¸U_é‰÷|rÂ?z"ÈÜcb“SV¤"IœÄz¼9‹)¸DÔÅ+‡˜:‘Ï‚àÀ|ñ´>Íê®Óãé}zUvĞuÚØ^ :¤7n¼Š’8æ#h²³N˜ëŞ;š‘˜P5‡=‹õCÂû+9¤xRğïğ¸Ñìf÷ì%©ÿl’83h/¿ÕÒŞÊqÉŞì#€V2+ziúè<`THÍåCTE¼/îkÉßNÜã?¸°‚°÷NüºšÜ	^‚,gq‘ı°ôq°y˜3T¡;rĞ_&‚á¿'Çz$ÂÏk.•§0”#®×èp¸=ônŸsÆï‡g_qÂªô ¶¼şd5¶­ŒùumPXaÀ«UÊ¬¥^,CgKìàş©rí3R¯GGh©=.‚¹›I³ÚEyGCæË0m¯s—®\¯oZ”}ĞyƒŒ$À{¶Ò'áÔæìØKëÆ’èWuâx¿fuOÍôo|OŒd¶­‡Œ?jó¯VÚóDI›0Ü¡íÎËpmŸráÖÙ_`’úô,ÁÉGÒe—·oI´/+ÜM½Æ‰¨\æmÀÏ1úf½ĞKghµ³Ê’%Õá¥óWŞi\êïÿPz†ØeóÅ÷f›PQ‡Âb÷8'Ä`iÒÕñ5æÃœ”¾”JÕŒD‰7pö–wPzõ»dé‰À2¨/g[Æ|öÇ+!¡âÂ²Éh^iÚ‰¨Ä2¨|CX•z›sçÁª…]I‘ÌV®Ô]¾Y[}€ğb¬ÍQ¶İÇ`hÕ 5ßºøS²µC.÷#^õR¡Ø\~ŠØ] B•êJ‡’À^¨Äz±ÎĞğ:áà0r®Ş”øâB$åû1ø~ãGjTBMOÏ"ış¤£œ<6êşgäÎëA,§0Lé5©²|‚tRš³úı÷mÜzÄ¨/è@Ò0™omöÃÍä‘†çß‹•g°_r" Šì$RR6š®ÓG*·i…
z
tŒo&ğ#òÉ‰Œ\_u—ö-ÅÄì6÷J³r<ã=£‚enåÖñ•ª³ª}ŞÌØFØy pqti*Ö«Bfüê†õ˜XQdxcı;Ã«s&ÂNKhwûêŠõˆ[qa¯¨J.Àc9BÀ*7ù]Mğÿ}yf®ëõÃ¸ÇuĞ=×$1Ä<„‘&`Z’¶Ã¦]5¹íˆWĞzTã8sh8˜Dä,ÓÊ“hœ¿+yF®ù†øw¹tã¿D°›T8Ÿƒ§löaÂ’ë>ô•]s»+	åÛ¶Ï|)Ñ‰­º»	±=!œëyµø‚ÇyÜ¦ÒZäñÉ¾ì|%1ÎÑÈù7FrÏ_.­o»a¾êÿÇDh	âë…©¢ pBR¨{AÌE„æ|Twí#FÚˆa®×¡øchü¥NòyÂ˜k1Ç€ÖfÅ$—Ò¬ÕqØà"ÎRÄ¥“pW^¥Ã¹‰òpÉ­¬G5Yoñ+ON²¯ aˆ%İ¶Wá·I|qÛ^À“Œñ=Æä#™!û®Úº¤E ¨Ì+Ù‘ VòEz
¬E‡I¾Í-Y”½í3^ÅÂé†ø?™¢Erô=×~@a}‘Íã×ªË­ÍN@3ñ~¾º·Ê1ñm¢‘6y³µ„M™ıÅÑêtVá´O¤¡wn ¨û¶½K¨;yéØP©|µ$v
©Åüi»q†ºª»ºxİB_¾ùŠø|pufÿbDâØdÈ9…U/6¦¬qŠ8æÎÇqfà¢>¼*ëªÍ§_3ô{ó'¢±ƒ.—û‹Ê´š—Æl]ï;6©Í… "‹wÑÿZ¿SîHRuy.æ¦ğo¿ğ¸>‹Æ($695‘”&!µï)Ä5õÉrÖlÈ2Ó5·€öe
ë}µüÉ×“’­— ıHƒùªVs:-·q£Û¸:–V5 P"†‚Ô1 ÙQ–†{\,ÌŸM¡ı³FÏHOEk³¢tş¤Ë{-ÙÊì
VLÿ2ú¯GÉ)Ÿ|Äo)Ö’­0¶ºÍ‰¯3Ä$‘Pjâ¡ìŒ	-Ú¸a¼Ó£PúcF óE÷I’Ã-•Ô¤e<ş¢}™›Iè)`Î-Ç›Ù'rÈ¦ñ‚üY¹„…»êU‹b¤6mSY†ĞK8v©ÕÆÏ¯3-ûeùHœt@8¦õØ˜®~Š“yEö‹cÓB`6˜g©!ÖÒ‰Ã{L¦ıÅËç³1ÍîïexYÜ c)~²Û!­,Üæ¢ğCmOøNø«°Óc~“
Yb‘šÖ€*Eä:=à¬oÔof).Ò2ÚÅˆ(¢´Õ<k}”¤«wòùüÇÅŞ‘?7˜Vs°¤x<2,2¥íÊ{Êª@ Aş-DQSö0=ßÖÇÆº€ğG<
©ÿE·và«*gP—[ƒvÙŒ­·k°\Íìmµˆƒ"±áƒ]¾X¡¼<ÉNRç|M˜Dà±Ï>Ë“á`¢Iå°Ï4Áë¦AõÇ ŠÍ)•SªCj‰×Z¯ñ>ƒZş˜ËŞMšdé7®Í´œVTÇr®Ôö]Áó) ˆMwşÓùYÃ³0È3.­©ë@š0ÅTÄµ[ê%Ä¥‘<§ˆñÛéEÊ”êÈw.ßç]¢3®1dÖ5Õncb>ø•³ŞAúƒÆ ìËj¯WEú6‡n /ZÉ~¾òs"á‘°e¼ÂéXè>ÒO€"k$ÂZŠœÚÎã,qå“=C‘µ3ªaA£qrÜ¡¾ÎLÑ¦Éó‹Ç¤ËjQ’Q-·\QDKsO]ƒOÎ°ôÌN>MP~½ÇŒuß {L e@ä9"–Œ'¸ØñUG_Á³’1Š¬_ÀtfO/æÂÚÓI„4ÿÛ}v!­Ùšg½õ‰ğP­~:éF_÷kÃ$P<öØ~â˜>ÜúÒ’Gp·[ÊğVãÃ.éävó³©4é]ƒßcƒ¬DüöÈÑIƒñÜ©õË ê¿7.¾ë*È‹˜9ç^Bª:‚~a«i˜“•ı—9Ùä¿Šg­ç‚Qò÷	ëİNcÛì& šÓ*ú"ä!³`MŸCÍsÊ=ƒÖœ³©şÿ'½ı‰¹ÊŸ!OQz3.‰ŞzT^R8v“At6ŸnŸZr
;ÕÎ[i.Åİ´äPsDË>á1T˜=+ÃMy¸Ï²Ÿ4Oê“7î·{ Â^(ÿC„L5ïVëÃ(iæ–ò™³Ö¸Ñ®œ¡"…4ãH.{[X÷ºÉ¼x,5PjQo7KÛPcDLÇ^o_T D7~ßæZU'µÍ!p^'_b€˜yë +6 IÍùıÁ
ÚÆË¯0D,e·uI‡ôsNt¿ R¶¦KÏq¬	¸…y<™T¢$¡„ıÄ+Á_ıs&âŒ½LCMÉá©Á#ÒD&|„{kö>C7„‹èFsUİÇbåäVCıhlásRíh´îm‚?0’¨	ş¸†­ÆñÌ(ÌIĞ¿
”öOí‹"˜›éûIËõR‚.šâDÄdxÃê\Š­ÃŞç‰ˆ¾Ä	É\ÛéL|E=Y\ªn³ãğ×6Z1_{‹¯«#jÍ¦Ï^'Y/„_{ó$L
¼U1XVø¯Låªˆê+‹3Oz¤ŠNè‹9’TIB‘É”-˜#ÑŸÒÊ]S²58¼ĞïF„§²RÊo—§‡c‘°[9²÷ÇŸ0èĞ…î5 şË‹U9å¤^%§Ò²Ø¢éiûV¸	¿­~BµÿÈúÕÔÅÔØ5ØÉ½^su:,["·tg/µo ´Jru"oj¨ä?1ê»"âÑVoit|¢cıl³bö¯¹J2f¤áúòùªï.„ÜPew¯`{*ol(æß0bºZ{°á|{/#f£[&ıA²{½%h$åšñ‘¬¸Ÿ¿¸õar#îIÇˆ7f»{{¡zlt­jäjCoó£6ıÀ3*½©ôêJ_òdö¼Á£Ñ}¯ew*œ%›´é 
Nƒ»©6xÎÈÔeóE1$¹uÿcËYaÉU±Ç!ødçîØÈ2„–ÄVëF÷½•8 çr²‘šñ"ôCL‹Aš£N`y+%Ïæó2ıí¹µŠÈzBD@$/áèy:Z7¤c}g¨¨dµ~·ct9ZµÃ)ü&ùå™…ÉP@ÈLì ´»t?'@§W†¹šÊÓ(FQ_j”×o¤Q5}“-íÍ0r¬…ñ›<T¤´ì<÷eªĞúSF­OŒ3íñµ»<a¥X™ã×ı	Ê<c|2¤ô)—ã	±şÌxmÚ’Àcsš³Í‚oÖzÛ+˜×næ”r×]¦†á¬+Î‰¨²RÁÌşšKj9¦×*cxÚ´cQûg‰6ğ6<SëI¢:ÈŠëÏÄŸTx‚…™›Óu¥Ø`TKŒ!ƒOUDİêõ÷@üj­¸³¼~jã:ÍÎØÊ30-ì%µã6ŸX‰Ñ‘B^ŠšÜ¿vêêu»ML½qªm©È¿’i¢å©6Ùîâôq¿\ObºÊ Aæ§~JB®‚Ä.iè¡U«3¾BVö-YĞqŒ™‚ÒÙ¥¢Ã®›2ˆæğlSM(,$å’q™ÖM-"4×‹È.Æ!µàO0,=âŠÇD¡åÜé+r6â,}ïPw0§ƒ‚*{Y½ózÕ^ø z¸
³xn¬OÎ¢òî±<–ˆ[öRòêx\n8ûşŞÄR’­Z´yüşN‡2Ä§ñX]Ë³®=îı6õç³×<É¦j›§k£¡8–æ¥šFÌ
íÿ5¸/ÇKq2¥Â¡FáÃÂh–¼Kv†?D‡¬hÖîGÂ3v×àDJø'¿}ˆ²ĞM£n÷õÒş‡³ÅÅ~#Ş¢ìÚÙŞ`lBrÎ ‹Sl-P:„+gsRš¦åÙxL#ùçd>F`Œn˜i½û)AÉ»N¥ÌC-Éå®ôg	‰5°,¾$¿IŞl;˜ëÃ–©èğ‡Æ¦ÂG6Š®ß`;WH0U'iá$ñVáD|]¥ïê´_ŠŸ04,/b‡gAæ±@Í=>8$,î…M'ìzØ²£%<;iëV÷FùéŒ-V‹EmJa¥‡–Ş ÊÎã yÚ<0)ì&õâøRÌ^&®¡vA-âğó0{¡ûù›"ø9Ö/9ä*óg=Ò®Æò±vâCûş®zÈcQ(¸‡Rğì?mî•´WF¼ª‹\”/Ö6ÄbiİĞ¬D¼·¨ïßvÈ›1“lUÕÇ'-ÁÓsî³<äöºk§(À*ákÕæH•›g/¯Ãıœ™äáñPÕ¾÷_»_@?H(¡ß6»¥¥…ÃnkX	HÃ^—êl'Ãw[0L®’ÄU«GZF?qèQ7òÄÌ;GĞ¤7n¹ÔM‚<Q‹7âÔàW§¹¢]XT‡~ÿô§vWòù?6¡b%àŒ—P(²W·d½~±ãvÙ[=Ãi©ÖÆæí‘šYµÓ\ŞµtO+4ê£7î¸tJ˜,}h?N‡ ÒbÄëõ÷-y\fõª×‚ù™ºÒË%¯dpp™sa_\B
>Â€ìG5Ê¯/$<8±0mÿ3½Bºj6|[ä´çù­ºÅ‹+gwqñQšn7X,ÏX0N„‰„^Û@cHÉ×+^¥ 7ú¢òWJ5¶ÿ¹ë
÷>˜(UÅèæĞl¤hÁÚı/ÂÕ˜Ji<å–Û“<UéÇ6ê®ğgßS8*æ/è¢û~yÔ	±‘zb¨²½à°Xÿu¥µĞ:ä+3gmÕöÈótØ•¡ƒYB˜}æpÂ JQW¸>3ÔŒP.¬¡šÀS(æ»5¨ Ë^÷orÇPaÄg©ŞÌ·‰¥êz…0º™øzDr¿]ˆıÕ4A÷grGRˆÅï©¸LiºârÚ[R.1•ÄÒôe¿Sş¼[&„$to×Ç	*Áe¤T–¬"|Î_Ğ>‚™êúrä³qÜ]¦¢íSeêß¿úé¶v»ÜG+C:ıRRÁ÷Q–‰ø^ú€{Ş9†²õÁ7ò4®.4NûÎ÷%2Fœ¥v‹ï÷Í][ø\ ¿ZòğU9Ø*â§1‚¬^æ¯¿"Ğ¨´œnØæcÍû}9Õã«ÔvHùœWù¾[ş:§<“½~Ö˜fÒ’å•´t`’¶Ò¬î¼æ4;cğ=Ák$4’Ô/šC zˆÁhT‡vİıtz†u¬~Ğ²ç)Ô[¥Ï
`Í¡§Gqâ®²ÄM«M‡Jùà÷û„ú,Q³ÆÁ¬¥¥zúØÊMÓe  =à)°&ËA€…¾Ş:a:çé¾ğ…œ¢m MÎd,;à4p/\$ã·øh¤™vxIX„ô{Æ'‹:ò¼+}çY²‚ÍÎÿ¡Åbje½„Ë);FR6$v7]Æuû_;@+H -ÏèJó½<ºƒ^[L O¹”a¾Ó à?0(,&¥âÄRÄˆM›¿’:?>*¤!N€õ$Şû
ü<.©äFóJıÈZÁNÎ‰^_±j˜•Ñ]„øç›jú>¹ÀÏ7,.¥äC3N£‘§k¬^P¬{‡WÊP^+§2²‘pó¥ˆ£k²Õmï‹4Ú°cıôy¸9¥g%ÒãPóHq…gæ‚Œó§BğsİÑÓÖï¤kWyÆÇÀÓ7%îş8kïHtÖ?W—(ë6U‡Z±ÄM%´‘·¡àÂügô2_¦ûE>0Q^¼µñ§¹ŠÑŸ$WbhŒ.ZPr)iTT	
Î"V']at™¦`z/ì$ÊD&SSÀè36­é„ø"HSÊ®›½|¼yV±,NWö GGóÿ´=À–V"‘•-xĞlLÔ5§oÕuŞ-˜ûcöáÛ²ïùÙËĞÕ"ŞY%K=ËÖWf55ÚÜK¤Ct	ßy¡T9uÒ_Ø¢Ü'Gö†ğ—'ƒØßÊ&ÂQKâC‹wyï)œ£ÁühyÑÈ©„P ¡übŠõ³À8ˆ´g0«Ê…„çÛ_>óÕvøú°{X2¿;ø„†ûëÁŞjìxë‡d*mÂ¬Ş‡V+¼XaGOJŒûrö +³›z~/?æ¤|¹íxÏÜU>gb¯hğ•X ¯Ô5êÃ7)î¦ó°ÙL…ê*Î>à&=ÂØ›˜Õ«ş²ôîx‹}n`kx’…•›qç‘˜R)mZ¶r74¬#¬tÂ%/Z›úuqõ¥ÃÅˆÆ'UÊğ9¼*Éàm½èÆÖ”—î¿¶Ä@¦¨3ô—¹¯5=X#X¿‚xåùB6‘kWF˜›ñaÍmJ¦ê@{FVª÷õùÂÅŞ=Ù[<".Ğ™C!ºˆÎÁ¬hEÖŒiŠ6¤Tş`K5MãCü)ÈÔÔáÏ©Î‡“¡…  Z$Ğ!ë`wPƒq	>Lª¦v¾¬-iôÛRB?ÏQ“ı îB£]ò=4Mİ¾É±ıŒyİ“ìhäRqÉÒ#É.héHÀÄUÛuÜ7¤1ƒlYÕÅ¤hàã™…÷™²Ü€Aé:L­ôzF,ISzö³»Ëu¯_Cr*hâD‰şĞµ„>)R <Ğ‡(ù‡UX0¬9‚©—xp+¦Î@`]Úğ‘Rƒz`¬ûTJ}°1	ó~ıØy¥Ù×mRü‡5”â÷@Œ²[4<–ÜĞÏ[†¤ZÃC)Î£¼³§8í^’Ù÷ï…aiçïƒ£ë¯kÍ¦Å4:¯k=:Ô‡, G)¯äH}yˆèäğJÃö[÷>ÊR…N<9š‚VÆ†êÚ÷$xí§"úW™ø4K
ósğ=Í—õ¯ ıJ0r˜½¯¤ˆù q‚´ÜPaÄksQ8ÔÂ0eâ^Ñ±Vv 'GÛø©†&é‘QD\Aø*O×ùTÅù¥w#/“ŞSú‰(­VpôcÔ)§fÂ’îÜâ–B¯ÿuÓİ©¯Ë$QJ¶†w§Ïu&Ób˜’´RÃRA¶ås•ıæˆ¹§5;×'bËy*…ç2³jØ›Ñî_É³CE’Fõ»Í1+UØ¾U…·¤ğøÊ-QÓu«	¯û;sk]ĞçÏº^ÇN'lS§ÿ„A¤±:H™÷£O|$œ<QéÄvì²+ëPñËJ‚•óÚİÒŸó)‚ °ûêKt{ê£Aú şß8`* Ykù4İ—FT‰7>ßšZUú¸Âs¥f µ˜>ú-¤%ƒcÖ½¶9öÈ†‘àòÒÇ@èxöºù&|f
)èÖGê3HWè$LP%AüyşšÿË¨R{ttÓè† Ü4x*ìšÄ*Ãâöñ¾üH~Ó¯`—ª,.'h,ÛEÒyÜ	´vp<x„à¡Ï(éù¶úÎû+*0 w®…7ul[¸#{“á	ÊŠ*fu‹ï'‡ò6â®ñ„|\†¦Î¬îÉº#+ÕNaõï†R<O´
­ÿ¸;ù0KxÃèR€hÚší^Õ±U6×GŸìšÄ+\Óó‹7ú±»K}È
ıW„«î=İk-Ù(B×»œÍ¨RâŒÙ Ï•V¨.C{IÛNãK"™$êÔ/J]çòÅˆœ6ß£ 0ÊiÏiqæóÄËÌIÀ÷ ÍÏVŠ 9ø*ú hWé*Ä“Ówûò÷3óMÌÿ—¾ï7Iqqî³ÌàWùÙºâË1¨?E%|öI,À¾äF>ªÙu™Ë-¦8™
ìYÿyËrj‚—–²Ñ™ç¯Î°¥Ï{áûAIr$ZGÏ¶˜¼-¡`_P 8<>îS.ÿÃŒW{w>$?®ˆ5l•S.º+1@KøXÅvÕ¸V¹îO+L'MâŠåÏÍÕÃK«C	ÊBUO~³á-ç›œk+-Ïàs0ì1²¹q‰}a­ködÑúê6×ÔŠa¦¯»¥ ¸I+±“·æ=ÍÁ(wf’ĞRñIG5¾Á
ä1~Œioì’ÌjT¶µ†»bãÔnçTr‡ZÏÏÜJ·ÕxŞåÚUıı;5å"Ó—ÎPUûşZs³{ı£˜·«qızÛaĞ8áõ°:¤àùÃ†ôÓ3+ q¦8{Ub%Y‚>­¶GÊ´2%T<ZC§Ÿà<àyô^˜/+z:Ö",¹¨É­èêÿnoİÑ.ór/Bs1òmbÍp›ó®
"NkğëÁÄÜ u™p-oP¨y‚dá$-£\¡‚)*SÚ¹‹ª¼7§¿,ˆtğE~
1¾îNB¶İÑ›Ï&Xc[ù{À&Ü
<ë |†M&qÂäÙ‹”ëñvªÇ¨5Âh*>’¯áÚKŠğrH=½<Bz‘k¬í¸C¶Hñè„®lk•˜‚n%ô[{¨PRıj†$oß)¤ØûÕæ§[ÇêŒÚ,ŞÅùH:ÁéV\q—‡oLÔq+<”^—BÂ&–£Àn([³ÿñ˜âƒ…ÒÏ\Ã>ZlëÉ@3Dûâ Œ;•A¦@jÑxéÆB«PïüÄhC‹VÚ@·ô²ßu'Âî0öá¼v(ÙBÛ£ª¯*p.­8ıD 8¾(äÅİ$¼ê³.e\éüLœ[âªŠì2ZÒ	˜4÷¨Æ<W_ó[½œşË‹k•}ÏÇUüÇR/ìBXø¿qœe>ì› ï°Å4‡)ÌÌş4²ñÕÄ×’ÓĞÖWÔğÈ°P`t¶¼Pua£üVL>ôVw£~½iz§¦ñäsú—T¼¹¢´lòh VÒ ÓBäÇzb~±¤ıpHí´ûêÛK’|d§fvÃQc<~Cæ¢Œlàáv­ª˜*+M“=PŠ÷Uçğ%\Ús¡Â%©D¸ğjÈk/êØB–IåÂƒ:¡—“f©°àğŒ\%qÛê^-†óÚ™I²
1ßĞZpÃ-ÓÑi³¤·¿ıÖŸW¾aüª\<hn;£S§zı«ï*“(hfë—¥£UF+ús¾„SW†Z‘nù³H¼O²xm 1öî5É¡iİ–Œ—±&µ§¯2ë•µ€bl1µ¥|nş“Ë›93Z‚{´yü7ƒ–Sğ¼Æn«³é£öŒ;½Û&ÏßYz9=SÓâJ¨ú©ç?M)síÆş¯˜t}'ô@%GÁ®9F‰j ¨Ü2·$ÉIJı?«RÅkÅ²[ğ°4ÂÙ·‚şö Ó–kí•ğ÷Qi™¥¿¹bÜæHs‡)oHÔSu/ç€ü:ŸÄwå¶F4¶\Êà„]ê/Ğ@“&’â„×$Y¢Ç¡šïë™ÕáŠJ)Î“DN|!_óTÀáî¦4&EqV	:Ó ]4gª!pQ}26aĞ"Sd™ì:SHpPãQû®E¯5©W;9ƒ–Ş=­¡Ó\KıÉÚÜ)\{©~p"Ìu^¶ûİRÈø:?ØßS3·¡·e;©WõBbı ×çRH uŞ–ÇñŠ“õ+YÚ8ü¯?_oä&ìÑœÖ[$JE‰‰è%ì_ù,|Fr§:·–š Â±ºGM¯ø¾F;ÎÊË×ÈT|
³R¢o¿vµfòÄi×ıß…¦¸©§a÷¶¸ÏßJM>0c¶¸!`»næ;O=&:Şş4È`«ûğ
]	nôı¹ó…£T©/Ër>! OÈ4Ú“*:ßĞbMm1õ”Ï/˜búAÊ)YIy¾/ŠŒønÆÒâcçÁœw¾Í8U¿@‰AâÿÅ
ĞGÓOÍÓ-¥·Æ}]¨ °ïÀJÄûÜF·wb+iõŞ‰ä„ÿ°}=/Æ\œÎĞl0]š$+“âr
µXp#œe´Ï'‹F‰AÈX:Êİ
™Àêš¥'°Ìu¥§¹ğ-J'(©ù†ú³jho¤ #QÅ#_A N¨l3åÕTPµÛ#(i³l³Pğx®¿b}›XîşƒÌë«šØ¯á›b"A©bièÂÎ S£]ôN<§³±{£ä|ÂôÒàe°XIlçï;æo#i@§ù©?è2 ìòÍqÑ%ßR˜µª{a#‡ûÏºû¥NpëaHM¤¶ÜNáÌp;G¡óN1ü]J¯HÄiÔ»Ú7›!¬ñ'OûÎÅÉ—ÍıOÚŞ­Ö``µwô6XåROZŒù¸üüCm‡#¿z¦ûw‹f8f‘TÖÑî’Qí6á…,c‚ëç<M	¼î»B6ÔDÜa÷P~„_<ÌÜÏÚ¼úZ’õ0®°1<ÎÍRæºº¬\3§	ç~ò˜}Ï³¿’×¦·‡ÿ¬B‘‡b)*²ÇxÚ¢5À©*ob1©ÒĞÔ€Gæ‚‚:‹—¾côâ¢›ºÌK-Ïe¬»´{~fjã%ËºÌ>„f­w},…ˆë&XÊŠŸ¹³qSé9^Æ5ÿo8wM’¼U‰ÇW¬°XVô£Gó^µ!·‡zá]2×%Ğ†œ¨EæşBÀî’Ğš•egø‡%š£õø:bÌn@é4ÎàSág‘şÆÖ_Ô§›i® Œƒ˜éªÏeâå…ë{B+q fA—ïgÇb©úG2UMû±Íß¤ºkwvĞPd ]41Qbuš(iäUvE)¯\MÉgõ¾tW_F€
Ø?¡:¬ ZÀ(9»€ØÇ=ª©‡“üãe·%+•çwGî²yÎîç|¼Cû]Û4ÓWÂü—1îÉ‹ÙÂˆÒÁ¥¨C‰úÚµo?%}L*ˆ)æO÷{o"Y–Ú£“9rĞã,	SC=%…hD‹vßÊ*p8*±çE4½Õİé×“^+L_÷2™¡ItS5~°L2íãĞİXt Ü5Ñ>¿&ÊHšC¯»8"Tê§F0º¡óºlª&yUĞ8„_­~6>Üê<B©É†îÚô7w»
5ó‡=Z ñ3ü¥ÍóşAD(sÖ¥ÿ6öÖD7„sqfƒRÙÅ¢ë·xÒÅYË£îr,˜ëU»x«/±Z?åUBÆ2Šâö±²£˜4ä‘@ò;+|iæÆ‚ÒRú…»s Ñˆ¸AŠˆ_İr,¥ùƒ:­"ÿ5öÙZMÆ0Û‚Q¢ü¶¤$ø<z©Ûãz¥“u0g’—¨*±¾±¯Dˆ;o”'FêüÒWfÈ¢Ö&›„?7.·d¹fUÍÇ-ª¥ÎE±§B´¬7÷zî`L÷9…lÙƒj¯ò¼üDÉóÉÇĞo™¨%ræÌ…ğ1szÛ£t—3 ßl `ˆ(¹œ´TòûJıÇ@Y€ÎèLÙ¡)ŸfĞäh™EÔ=§i‚ßŸ–êÒ¡ç®·³îooTwzŸ@&@‘/.Z0cc€-¯-H¿`1[sC]ÉÁóÂnv‹^ß@`ZUjázfˆ\’±ä¤*H8ªám	Êã’oµhPDÁb<­T‚.Ä…]4©¸¤Œ/¼´Ë>®¹O1!^÷õLØ±É¹ÔÒ„u"‚.ãW\;,îØÌÍÍ0lw9eõm`©ws»î†!&\ùI‚:®¹pö;Kœq;ÃºÚ÷e¿î´ûË +vñø.?Í@­u÷ŠB#i™fê&ËkéŠœäNóL}ÍìğÅÎûL=ÄÎŸK v!EÕwTŠpwãäÊ33°ÌWğÒ5«`G®~p?j×J¦ÆPìîO«{7ç¢ÉäªoÄ®P£#ŒeJØ„}›Y“Bƒˆõ.ì Ï‹ƒ¬êì·]ûãƒ¦ÎmVibnê €çÎIK)Ëq:}òÙôğˆTá}¾ØL°LL0õ§]AœQ·ÂxSÓP†¼½ı²ŒWh¶®)şXtz%©„°èö£ºªË/z¤@;0‘³æ~Añ:®Ëqd×)X*úÉ–åZ­HZƒY¬èÖi¹ÖÊæï`±yê7ÆPğ§ONIg¹£«÷¨ÅölÙ.Ê·sv',EøŠÎ•¼7|¡wx# Œ\*uUäß4ëpw\CšÚX|_³¤›áÿ (bÜ>æg?Ï%%){+Ø$’ªŒÀßÛ%,43‘Ÿ6ÀJ[0¥r™|!)Ù1Ú¥èk÷ Ñ»±b(ÆûÑqàˆ…¦oBÛa›0/Ã'¼ºägCô*áÛ•ßA¤ä{JåGÖªšv /×w)ùš×ùQŒ) Û=ã·Å´j0µÌ3œŞà‘ÊZ
£°ÊıŒ€WZaã?ÛÖÈCÏ½j”WxN÷µ”;g®1÷&§Õı>XÑ0KĞ0ìÿËÃ€0åF Ê³#}Gz÷'­’¹UüÒEYë:GSü¸£L’7†wĞ¢aŠ gÔR¨-¾ÅôÄ<ş1’É ”œ¤Õâ\L¯ª°ı)ÂÏnA#p‡c%„qh1±™qÏ>”œb‡–vfêRÜÅ¸pŞzÊ›v-µ‚½h­
å…—mÔŞš®·ÏÜÜ$’“:-FÇ9‡Şú "òRĞbãe/¾ÅÇnJ¤ »ÍéŞÛš™+Í@Ÿ÷ì
 8y¯úôT‡ê¸gÁ*bAh²1Ó¤vÛÚÆ"TB·¯}ËÏAƒ°ô.Œ	'€)§”¿¢ë¡I?²Ü¸OÊÑıNA({$U«EW‹ô:O–?^&6Òë…‡4¢£
ì‚;Ó[
{ÒùÖ×œŒGê#@œô%J@nb,õ–›µ»^ôû~Nb0â(ÍÙÜÌ†‰mğRQ2¼‹6àout/pÜ±Ã¢M€£ç;s.=Ô×•Øê1­,!ó¥w¿¢è9’•³?5ˆS±†Y¯Kğ³›xÏeÄµˆ:€"ÿ†Ø5H‘åêŞO™£á¨	™¿8	¼*µL61èOİáÆ…WFÆøìÌO}˜êûLtk´:¨^;2ä‹cÜRtõôÊˆ±ÿçÃÙN–6sƒ~şw˜ yş·‚#O’¥îèîì&‹^?m ºæ‰4èååÏ˜.±‡ç7U›º¡ÄhS6ùAù]"«òA;üJ¢ÄïÌ ×İİÿ(_à7ÚHJ£÷<(=šª˜³?jİ1ç5wÆøÇË—xYı%™Œ¸ã!ÏM0o†¯ÏÍrAmšğk\kîÔá@CˆT»5ÈzxÙ@vâ1°ı0…Ì#Ù%ªšÜè~°Í0‘Ì,İİá¸Xrâá³åbÙ™nâåNÀFøjç$•*&Â¢éõù—¶Å!èµ.âˆ8túÀ-•‰"æØìBPsy¬U­ÿeÄ¼(ÜÈ”v&âØ%êÕŸÌ!ÃZšCÇ¼Z¸ëS¼Éózµ­*½—dæ«Õóı¶aé¯›ùo‚Û&2 Œ•w•à2EìŒà8ùv¡ ·\&šUªÙíª²ÇªéÎ]ÖûÉbùŸUê‡7®çE¼ïW‹ÏÙBÚn™*ÙØ‚—¯¨· ñ—¹‰ŠŞß 4rYgse}z$k;wš2`V_wa|hh>wuŞŸ  lEc~-ns^"Œ#ĞKI<Qk[WC…Ê‘¿t=oQ39,;*ï fT® 1?OPlxº¬9Jšş
a`P<Pa²5õV¯
ô_/L·åéÌÛĞŸœ.aF1g†dQfv5bÄ,]+<fÖÔ&Bt;/ÍÇMU
Iß?ÒoL,m™zæ94n­Ö™àUC:…›½°)s¡ DÒ,/UÜg]}ú$ìÁGü™$UîÊQı¾û
§9ÂŸœH÷mŞj'™Â£Û¦©²ş­ÄêĞÈnÑ4^P6%sd^h’ß|;Tf":~[“}/çWs`pS3¨<àÚmeMeRŒ²W»|Gmªà÷™„»M}wh)vâj,Ş«-^esdafÏRìµ­Ni|x¨‘ÈñÒ‹Ñ-ŸzwÖÌÃUGK8.ĞØ©t¸s|¸f,~.‡dZ“CCˆ¥.¶í<9ÈR«±5·äğ.´Rjı"´“|¨è‹‰m¢òK¹°¬ Î¿,H%Îõmåœ<iÚ¨Ğ‡îÏ†}ÇÜ‘Ù}éá…¬§ô€®ä#}—ü)_
`?P(ró+˜_àB1VXPô¾ÎÿŒÅs?,]D?s.˜m^Ug®.l,A64Ò],9QÖÁ6W*x†/æWo,¯zÄ+sg]›Ç¥DÌ»Ê‘Q5q²nü9ô
ÈAlU¿üW9ÆªêÇ7*®£Jÿ…™
h
rñzÆ#—†§·±şC®ˆõèË“Ú,<^"ŸaT4ozUX73“‘Ÿ¨c\f‹êb`™d#Q·L<,>šï
 ÃePÚ_/Kéï‘eê'’Wìy·GÄy;hê«Ãµ’·ùâq®œDQËDoTJ/O™¶Tø=ÿùNJk)V³[Ğ×í¨vÈfX/4Zmÿ«'bº‘‹_wDPÇt¢Oğyó"K\yº˜Ë"Ñ–rä¸}«Eÿ§TÉØnâ”q—\ƒ”9§—xĞ¬^€®d£	ßíU›šÚ´eB¢¨ã~…†Ù!½àI°Ì<méÑø¨J·²2ÇÑ™¤Ÿ2ñOD}É&®ƒ&^Ã´Û4–zÜ§Æ{N<´XMîÈä\ÖıÑM¶Î"€ªÇ*º§âSˆŞ³ M½«Œ)æŒ˜äMîg§ÍÙŞÊØ^à¡²%1DYW}®?'«8oRôyYa)şØckêˆwÕõ	V¨5ô‰NõI Àj)eƒãüÂ´¼óõÇ¡’t2—7;/_g@ˆ5ÈîBD0E ;rîÕÂB‘pP uF?Uè6ºøŠVo4]6Ò¨z
«:@):G\£z÷†’QŠ„_@e	ÎñíBŒ¯A½"(EŞKl—2©@»´ó@BYkãú¹Íï˜†u&ô	>ìfƒ÷aLm%¤Ä9Bïäƒ¿Ey˜ËóÔ	‘#xª…‡³<K›®äí—_"±<‰´¢G9lv¬ô¤Hê³ÜÎ•ú\dÓxe•ÕeF¤£>2é^ò† Ÿ=ÑD“s³´Ò.Ò˜Î“Ÿòùèñ©¼FÉÊ¸®ft++O_,|Š¯>u³)(^|!›ü/ú»;kT‚îßnša½|A|pëH;Æ“ÍïÄ9 PBq¦À{•;'_P<i^¬¦Ê0.í¸Lw’‰ä£ÄÌJ¸!ÁKRõ7E7'åı³9ê‹ösğBu+äÀG
JâÇG2.¹„?«P ~-Xâ·8æM†î†Í§cÎ¡İ}VÜ¡Ğ·{íÉ	…¨A_$‹|_YÀìmùå‚“e:«–GbÚ®‹¢ü4eŠ%ª±Kër1~³XMÂ­ÉÉÖ°cK«‚{ëgu8?šÇJŠó°Fs@"hP§£1÷ ¬"ßSK
$E™7úÂpvœÑğ`(\¹–¶y¶gšòªOğL bØ_T¥¿ñœ$ÛÿYQ‡ém3&Iƒ{ÛrµãÁÂ'“öïœª‰¬È"€P¥8R
ÿÒ<QK&ô€ê´üPyÄë%vîÏû
*É@Ú¶…¸yJ—Zˆr#¡ğà]!¹G¾´.ñÒ!Ék1×lf•„–w¦÷Mµü3–ìc—3mÒ¾%…·W>¾È4Á×Û7ƒôóŸëFÈ×BmÖ•¦×°øàÊ™àbÈqÒ3{¼ƒ7X:B¦İÎÑ”+ÔÔ!¨Nax.üÏ®€å,:¥ë~?î’¤~­Fsñ:È	sªTIÅÙŒP®ø†§pùÃ:éë6÷núÀ7ÒÊJ×°q®éâšJÌ-ü%¹ã
ñ«s(3Úé¥D¢¼èt”~ãoq!„»m,¡ÛfÙÇ§5‚¯„2Ûm£ÄLp²ØKĞîÓ˜¢“²2ÿYøôôON6LJ²¶˜İ’!ÄolS)jçbPs?b‘‘‚]~GzŠ›phÕ4ä s`Ğl¤i6ŒÓg£ä{c¬‚ğå
HØ:Àö<·gß\S4Ç2€–Çê¶÷ş¸,•Â·U!ÿŸ/2Ñ‹Hä³tMßM €i×yˆ¦šÄ¡J÷æÃÙâÍ…œ›@8	ŠÂp7%IWp`&…g»u‹_@0DixñòCyÏ¨±4q]Bf»f‹]ÑTOÃvK<t¦öÔşçø#uÑçD$}Ö;DP4=¯?›w^µÀO(Q/¦ÈÉ±®ÌDm–UêWO»6MX7äHÅû—-z‘ùInGZ†ÄéLC;‹6µU:·k“(ÖŠ†£µ¹p]şô“Ë
ï4/r¤×>ÉÆR®ƒö8ICs¢ÖîÒÃe¦İK¾/~ìSL5ùºqÚÓ•8ŞŞæĞ2ò$¼Œ#áñ°|LÍ¾¨ûá“Qšv2©D{¸Zy$(&å­ƒ=ù•Ö‚D;0>·süQ¹™Cğe7L.ä]îAÈ„ëÍ[JÓØ—¡ û‡8á>9æ¸¹0tJ®ùF§ ùÿ:ø+:§kÃ6ÙÖ‚švë¡ bµ·cµÎÏ,l%Õã'1¶ã!ŸÜg…3,„°y£nöÔqé†ÆAÜ¯•º±½¼	ŸşĞ¸5Åß@IgkÓãWEöË(ægov”×pfœ°â+Xv„ìºÂbÔâ¦B%ûW{”&9Øˆ %íUª‡º³Pöf’Š²ß `ª˜&Ò¢å·L½ÁéÔÙŸßSØ&—XYN314@¤väôÊà2<weî“4ª.
­7M\~p§w‡Ašˆ_É¥&/¬˜¹²²}µmóÏC°T&<=éé¶ö˜¿¾x
×jC!é +(QC)eœõ 7v&òöÍ†ærÊsî-OçsZ;`^ª‹­âz®›S{W,‰_8 ù"F]êù…õ]âëŠè_6€.Ø$÷È—VoØÚÚŸŒh³—½*êVüåÕ8x*š§_¹ù*Ì":Í`rÉ—l™ÆŒ æ§2ÂæìÜœÛ·<vš $·Üe$#}·˜ü7‰­²ñ\F1ò½ÉºĞ<™ÓÔ8Qâ„q›\ÅÀ?fŞ7X—š…«{{ô#Ë$Ê°^¤¦à7
¡s± ‡Æ‡@á×0f¬ÅõÿwN;4ŞâR‚~ã…İ~´OrÑØ½ÂùTíNêŒwŞ± D›3ıáËÓCøe1Ì,måÕîâ½±Ô¦^İ¡l
Ï-iLp í=õ¦×:†×µå7ªy·‡b{Ál‘
f„ÿïF±ş?„C.óüŒ=ÍÜâ¦¶Í±Jì2€şĞqËtW?:(¯·ØOVÅîÓThqC²|!I°JˆhqÑ)hkß8©Ú€ÌQôƒ}n2‘bÃG×8D:ïØ„C*Ä†˜ªëĞ=ªMªıô]…
FVnQ‰?Ô”›7kŞ¯”VÅµ5WòĞ—TH;ëaË<Ú‘Úªkâ·M?¾™u¡¹-{E´á1›ş…£[sÅkÖz¯Óá…ÌêÆAĞ†ºÄúJ:	º±¬«%èÉE€&eU«hrû¤Q÷4»Ì8'3Õ’~tá-ŸÙ¯ÇÍV›r¯\ù½}\j§»!öÜíÑÉdÆœNaô¦BO$ÌGÇÙsè¡Jàw€&lrÇ¹‡z©ÿ<³ôÕ•Âbíq›·>¿Æ/^%‹
˜’%­Eº´<^Üıü9Äå‹‡*Œàñ øz®€~™ØpÌ1ÊŞ¡Kô/EÀ}êRŠËØ2¢À€Äè³Õ½ˆ±3nŞ¹jwÌÏ KÆb‹šc[©n¤g.(Ü¬‡¼àîK…»îåt>ÚSQ=i‹%²uxùc€¶*q(ÆÉö×Agöñ¯<IÈ!V¤Nî6
¥À±U9äŠ Á”¹Q×Yï òÇ~:X™§¢?²àÃ†™ß²Ğb¼Sz¨¦;@n($	ÓÖ™¸'ıKN2pY)ìæ¨ ¬˜¡áär)CAösèâJÔVa”çyõwÈ&Hñ°9,ŠK²íşØÂh™)¨gCò¹’2xO)á[ÖÅğ«X­Q\Î=P	¼ñ(,tÁò˜ö†5÷WòÍoü“ m‰ò9…{¥ğ=‘Q©‘Ô§¹ól–¸1ú‘í€	3ÑüÒ—B£´ú¬l¶¼5†Éqƒ;lÖ÷tš²£~åâ8ì²ßhÕ,Û–gw¹ó{“¼!3Å–µŸ(·F¡ ş‹Fò0z'rÙö‘ãäB¦ÛñŠ‡<ßD>\nÃÒ_bÉz—çY—7ë%ÎÂŸªvZ©Ÿ³êqD˜j9úÛ•D#ñDóPš¤<©W-¸òƒk«Ö¾ZÎà‡ı„Ÿ]ÉÇ€‡OëW{¬¥®½©&»4¡|õl¶K¢?Xzf¶â½•³ÜĞ†×Úà)7^bzOcv@¢ta§àzD'BdTy|Ÿ®l¸5òDk3_³U·ŒÓòÏu`/!S9ÕŠ’o-3ĞoN/Sd·)j‹'l¯±[ ¥ÛŸÔ,1Ø@×p?>ŞÚ€Š]²ñşØB)TÈò‚\ÆêĞ#lWğ~E]5ªß6T‡wTÒ·T¦ŞI¿NÈX&ô‡Gè–Å&Ó…Ñ»ä«øœ‡í"ºr0ßîŞ‘f®ß9–bMre*¯‹IÁ¤ÓeñÓ<1¨q ºé42¿ıM*¢YŠ½|®'÷Äç–í–õËó·f®ç´J(r@qCCIÉš¦¥'{Œtev}n~¨.¸!×Šu  \jeúãHUôÌâuœ-eYtwÃaÁvË+vóºĞ;WO|ÇÄ…æÀ;“tUßeSº?{}rÏô‚OşºK Š¿fà} ü‹tŠ#ãAÉxV.ááæÜƒÆåœµÌ%¼6Éîî¢5-_'TJñjŠ·ßShsó0*x"š¡“ °Ni´¯IR+.×Uü;…Ø^ìxÃg_)Âå|Ï¥Œ;­Ó±™É]]œkªˆGŠ°_i°`é¨ŸM¨>ø_Çz77Ïñ³<MéÍ¶íËûÏ+^ˆ]/âÀM/+Œ¨‹7¹—ºîw	2ª­‡šæ_ÿ_8 w’'
ÿ³Ó^ª€GSOë¥Š~ÒìÑÖÍ2˜-ÄäÙÖRöô«ƒû9ÃÚÑSzñoleßÇ?*¨'ôû“‹,'ÒW–a¢²Á`/ÑXŠÍ ¼âhÜüãTµ;³ pR½EV«7õ_îÿ†K2•I¦}–èäÂ00§sù‘¾„
u
,ØÛ½ûLO ğ ŒéâGÄe5 ÖÚ*7¦~“©y–<uœ%–"òÙ‘®eè˜i’–Õ–ãF³ä¸À­’(”–k5&2…78[P
–ÎdØn;8 5€/E2£0ÕÃM’µ•ÄRE,±ìŸ<"ˆW¬- :¸+\æ3Wİ#’ì€ÉdNëüO«õÖƒ_)ª˜1’¬UÑRy½cO‡éñÆÍ˜´&Ÿ]ø§÷HyO~ô±Lµ·Ö¢m•WRÿ3•(0‘‡dké3sÃ¨Ú!ŸVÁrœM®å"ĞT^’­'±ŸÕüìfõÒÿ%îbX¡ûD*wJîüPCú »]Ã7ŒVd@ÅmÀe™ih×ú‰®h²‰İ7ÕBW;@Ù)•O$.ci•‡ë7Gî‹„¤Yq#kÈ,XønqË\oAÔ^&,’ÏÖÓ]šª
ñ® iˆeº©;ıúYÁoì ×Îî1Ø§=‚©™†„›·£dH£¼:íèBTk<(fõJ˜pÿ¡DøDE)R¯ıºœş#ŸİûM?'ÁPHôß2ZÏ8[Uëû({f›R…÷ËWn+£_§|®èø²¯D"½ÃÉğ/’G-QáÇR®c¼Àµ ©]'ìÈ÷ÁÄW°ø´Fjòe©³s½ån‰=ÛÄ”S±ÿı}®»q±×k,«Şalª«a¶æoõi À6èg°¤vŒ/‘Ó½˜º“¸²øyúÊòUß<_A@WAvzåÿ0OÎî—-?4iBañv¢ şWºyv8 L²íçíœu‘ß`3|Ët,Ç‡=¸\p
ØÇV~ıkŞ¢“Gpºn°0O[îáÏ¼gH¿¹°ìKÊx[æGÏèR3&mïôÁ^ßéEĞ¸ƒ8mªÅQşÿ¡–K	Ï~ì(òÚqÃl”}ıbæ‘²ÔM§M†ÉËÒÂ•Úóê™Âèbuvh**Ÿ1#‹T,ç<90F'Uâ‡1šñyÅû+fMkRÊI–Ğ<ßvà»u%6çººyøë…œŞÎàl&Tbdô 2QdGãrE¡‚rªfı$]X‚°YŒV•°ò´Ä	}[2ó\Ç§ë²K.~9çTò‰º_/8dHÊâdn“TUÇbÃôòlØ~’©/âáÅCÌ5›§ÇÃšU°öQ¬şæˆTLv?êÕn‹ß `8M ´'Rn¼J£ô^ÿ@3MC¤³
±ÊÿÏƒ“2P2„-Í$ßPß÷mké+ßÆØŞ‚¯!·^¹=°ïQŞ??h(¦àƒœéå%ª®n2$0 dN6ô—y@¿#x Ğ
NëA –ı3*œO·o{n’†¤è÷Kç#¹şÊøo:Àc^4xÑÒÑ5¬_¤ŸP1Ä,"#×[oÖ‹tí)ÜÈ<’¤UƒGÊ²»Eın!ÕR”şíeÙX}Â™©’›Õï«Twºö¡Ÿ{t3_9ˆ\û9Uæõ“C"TMLõ¿L¢4^¯@"~â%A¤“œJƒŠp9qá£b%üSJ¡õK¢sEœÌPÌŞj‡(÷›Âkf¨Ã¤Èîö…Û®#ÈJÓyk^‚¡%:ÌÜõ«ƒ4\!¹V÷0îø¡<ÑC½ÍÌ¢œZjœ^Wö¼Š 8GÇ·Öv©áW’'¸ÈÈPñÁ˜U¤ÉÀ¦GÑ=œ+í"ıŸ!^‡u¢×Ím¤¯²ò¬Á­}ˆÕT&<Ö‰Üh—|„Ûz¦e†>'”š˜lƒ÷¸Óàç—ÉdÉoEéıxxRVN¦ıpÈÍÑ—gëzSjvƒ/«Ğ:(ÿ§ˆşıI$1‹ÊüÃzû*IS3œA—sØ®…û¶2â† øò4C
<ÍNQ§y´ÔN¯€8-”ãhÃå¾à˜O Âk	¦Lóœ`Ì—	îÇPĞ•ëT†å›•°"ö¦&à‹Ãæ“ëy<´ÑkòuÑ#ÍU³xœ¸ğçÖpXyw¨¹:¡Öö(<oYõ~Ec¬,´ìE	ø;4SÙøCº©ú4Ìx‘÷d÷Gsf7¡‚’é–ÀæĞÆØ/íh\­Ş€ø?EE6wÖÑ™u0¾b:¯q;À@UşIû†ÜÇÌû%ÅÅšE´>÷ ²k-¦Wµ‘s9­™¡¨ó¿½3ï‚4òZNd0%$÷¢N}ï¨é¹ŞlC 3iÿ'Š¢om_JÅWLy`ç¬ÊŠĞF}g³ĞsAhú1GLÄN#«$êTOáö{peú¢U¦²ú…wĞ>•`dì>…›?)[ßÃ›Ïà<å¬İpÒ{í:5&	 vÕİÖ—¤)2Sê¡Ï©_ÿ:4ÿ®Hø-Kø0
–Êìhô2‡Ä©R¼Ü%wµ<#í´ñÀ=Ô±òşHŠ)#ÔG¿)ıÈ™“'šåÔ|Xş¢Åô¸w,ÑÈÓKîFuË;{v¬m¡ïË©As$³YÉ¥„—K;Æa2İnÊÒ@lQRÆrAØ‡5ŒÑïä^@îäEş*‹—&š¨ØoWë«£Ã\’K©3&ÕRßñù3Š÷ƒ¦ônòÿ#„GM÷!XFü‚ykî¦	±˜C5.ö•†úgÆÏj&£Òˆí{§Æ1›éÓPuîÁN¹Ã-N…£ñ?›Ëçéïv›¾O"øQç+x~-§üãÀƒ¥ÅfëõID.¿IO2¹™J¡ÃpÏQ¤—sj]¡üË×ÂŞ_—%VÇ¬ù\°½pi¤¦û¶¢A¨}9œ¶I¤k¶m2f)³ ,îB€³½ö 9-İW¹¥Ø°Ok9*÷'C­é1ƒ:ÀN('¦»Ç0ª†ÇCxú·\<ğhÇ¢Ê»}½´{ÈF®çÅ[	†êŸÏ½ÎºÁ?ègdáş—?"6LOÉY­hètòErmd¯ô¶@²ü¸WÊËjOgcª<%šidœõ(ÅAYw¾ê=Øu› ’¶€¨+I¢.ñËÄÂ‰Úó™Cö@ƒıºYu}#-·"œË©KuY+x%
cÍ´İrRÕK‘¿Q(4	ÓšîıñŒe\q²±7æ¸…#lœéåC	¬l¯í`ô8™f—mm” ­<¶-ïÙí’ÙbŒVpñäÚÌ\,D…û4ƒÂ»Zæ9D+åI³­Ï*ŠÕìJHéˆ Äºx’Pé8VÒ6İZ¸Œch®Ó˜ı¿üƒ¬Ìz…}¸lÖ”	}@2ö€ÆåÿaKy´é[óKk[+è^J†ì±˜+gšÏS^öƒn'4Yàd›~´mrşÑ€Û]?ÙÂ‡œ ís±¼§$3Í
™E70p%û„[téa®üş.D°¡Yÿ²ËX=1ÀW' ÉÍÉØˆ$¥G9™ø.QxW9-ÇŸ„;”¢„¦C(l“¯©w‚ÿòÕÌÉJš56Ôpn»³+bMofê¿5Ê»S |üZ[näaU–Ş‰“³äğ$sDú«T­y®äik'½q<© ˜Œâ>ô] D¤ìpµÚ…$c]Á”ş"£®¾4ËOWü>MÔ¡¦ªy˜\‡ıfÙªRÿñá3˜×I²ÆšÉJ]Ğ®4C%ÙƒW©ş!Ì¢Û…¼R	˜TéØvâó¾Ô=l®©ÑöBİ×¯@(½Ş°BÏìÈ^aé¥	Æ"ÔW†…òÛië ÒØÜ+­Ö°Ù¼J	Âğ¥Œ25´¤PCD]ƒ7¼Vp@Ş:Û^†|wmÿ•ôÏXïˆˆæ‘E?ê]yÿ?z0ÚvâÄ7kËáÒüTPøÃôIÎ|Ò@ˆ5)+ÔRÔùŠÌı0~¡•%?ÚézšLi'Å}´tÀ6QÔ˜ÿ?
\ƒæ¬îúœİ²”˜E-9wD`YO]Ìæ½ ‹	L7?O>›íŒu‰Pìa5Hb[í?‡,îÂüOE
ÖÕ¸1Š¬_Si(T2ï‘…´›R›3¶À	máÕ°gFõ¼Ú±Šq-çP¸0Î8SÏ²¬1êÜ>ÑÉÔ‰@dõJßµTš‹a¾ìètıÀy¨Æçb„´#¶èÂÇ\ÕÿÓ¸Ú‹K¹ì?aîáDG‡Ÿ¢—}¡,°:Ì+-ç1úÚ^›ùÚvÒëšÉr¸ë°Fûê@MÀÀH?Œ£,4š‘u˜m³&º{gĞ¤=ƒiÍ›µë¶¾Bù¼Å·ÑŒ–g#Wo>"•—lT	7vĞ8U}8Ğ Ø'{-ÎÓW'DlÊÑ·tHŸ9æJI‚<*TÖJY=şÎ¶šklãˆî·4N¯D˜s«ËFš5­Ë/"£Ï¶™ªèşúŸîlˆ5æ
>)WK¹’ îß4`/P$j=aÓ5_Ÿz8COx'‡¶bóŸ`:+t'_b€˜4RêÁEOq#
X”ôçØ"˜Œ ú|$~Õy8ê»7n¿THxòÅ‡8èYMøĞoiÔçvò ºy”×s&ÀëÊ›¤LCM”ç®íÙy›9@5È/eá}YcK™‡ )qY÷Ç!ª AFíz¨ySæy’âe‰gbÛãPŠ¾Õ˜ÜM¡Í€mÌ]ÛäŠúS
ğ€B?ˆ˜âñ@á÷XØ!×ZïQÅv_#ŒïPÆ÷Ñ„¹÷¡˜@RˆQÖòCEpM?K]ª}ª£óLÏ>Rk)\9ÁêèwbÖçƒJ`F;”ví(ÏWæH6CNøıDòºˆô`‚İ+RS?œDÚ”cQöĞ6’mFÜ†Ğ/›Z)ÁÒ‚è^X·7*”ª	ëõ¨ÅÒ«xúj»Ù}¥ê×š®ï‹ê² ±¤šcªı&i·ÒäüK'¢V¿½®oLn·àÙ—’‘ÒÛFÀÙ rota`ULà>0)o1¡SEY%7şì<1ƒÖ¾{ERA]…BğO“EÌŒ/ê23z»¥ù¡ª¤ô<Ù•“Ztpï|eiaf7¯œd á_|¡ª1~{L8é_ƒõP¡hğnxn=­Äñ‹ü¼ˆ¾¯©ri`èÏ‡ txº,6©`s0âkÿwI,¸¤0äU3c¢±ğ¾I_½püë”êĞz©~n!•9û·å"CF²ª9$šƒÓB ºWz'­M8ó|‰e9¦]¶ÛH#ë×Jêÿ‘›t¬Ø‹®K£±ÃzxƒçJ=şØ“ÉÛÛÙDÁVïKyj2.ìıÙd¼¿¹ğÎ†Ke~bqp ï-t~Z+´Vnp»áu¦k¾0=]©‡Füeµ£©¢¦>&›áC±³«rvlgæGÇ»„ÖÜkl²=4höú#åM3v˜k£«ur±×´Õx;€„åe¥'¿Åı\M›_Ôg\¿´ô¼Em¾õwøĞZ•1'f—'§¶'½¢[ø¿Á58–Áê[H¸ıcÈÌ=GÑ7‰sÀs:§Æ7–C¡ˆ™òãĞÁÜì’Äè—B#g¡‰E-<Tˆñ1®A8¯óD'¢÷2Ì‹¿ƒÏ×ÀİÒF’7éš z¯d¤brvÌ¥Ï¤¾O|äè®¥n{©hÆÃÂ´vhy®jíáp®e8è—¦oi¨¥ù8‰ï¤'éZî"ól0°„õÚ&¿ÂdÙ½¶µ%ê
@œ¸qJÇŠYhs÷«‘:*½µRºrƒ&ü>Y‡(ò™Á˜öñŞç·¿‡¨Kz$~*·Ü!ËÈRQ–K'>JY×šqî!ô²q`t³¬®4¡¡ı!Ê]>·y.õW=~íÚ÷xX¿ô5³«SgºUEç: ‹iãıÔÕš°1Ë£°Ø½x\f*÷ËCŒY€ıU:°[ª 'ÿ¥vã/ÃÅiìœ†h¨µ4òï¯Í8–’`…ş,£¡/:˜Àÿ®¼FË©¶c¸lFålPu;˜å²‚?£îøKƒù]sÑ@cEœ®y=«›3SÈ³Sµ^ì`ŠWÑæ•@íNÌ3”›Ó°×¯»ôŸ—©ÒÄgw^6È"3RtË^j:Ò‹œéUuT‚€Tbèttƒ|TT¢/¸`HÒ¸hóÒDPÇ¯áºJuü^²KĞcù–*4…<âË––û¢ÛÁø­	rÏüšVnxnsjˆMØMû7
^NG‚ª¨µ0ÎÖK_b4b`1¡r<¿™gábE&&?eåVx¿ÑŸùNV<z ¹3³ªËº€6u7ìÙÄÃİ\ÄßÊGZ}‹ t`º&¶®¾bë1Hë€Wi4 ®ºc|¬åñDÏ	£Aa¹amnº3|åà›ÁN»¦sÿî«û6ŠF.W ¡‡xª³17,¼ÜõZBğ^€³g¶ag¡S–=kÄŠìR¸ âyõØ}şÔdÇ< ÇdfãôRŸºÅÖšófyıv‹ìO•£})ä™àà°VÍºF®&¹_Jv	%BïêÔËş¡ˆ=?U^‡u‹ÿp4—Bbx/àšÃR¢N`ìÎY}$¼H9ÿ¹/8€¹7Q+÷µ
`‚nÏ ĞçQEğQúÄŞ]İÍÑ…7ÕÎ–g¡­2vºc#õÜİ<f¤_¦(û'âÎ,²	=<ä›ƒ´¤½£xÁåÁ›õ¢
dTcv%÷£eD ü1ÚOfx®=ñÈj®K¡¤0r}«ö¸ŸûÛï†ŸjáaR·5(FBMm‹§®{È¯{Efr-/Yd†Cİ[¼Bj,|Uè­Áùëï‹ÈV(>”1ß P1;_!Ğ@xı€„ñ@cGÎç)URy®êõ_ ¯Ò:ğ­
ÿ0nÌaèÖ‚İ£=‘‰á.ÈÃT€Lh5¶Ó¡š<ÃÇ6ê®óJ1ÿEÛÎŠÖdyÓZåÃ4h¿¯´¿³LúxÆ®…Ÿj°b|)>ÜÁêØOBğ¦àşï8tw–|:´5kR[u²b:ÔŒ*ŞÖ‰mz²ô}‡9æƒ4ö‰.Ö­É­–¥êl4€Àr Ñ°sDC!r¿]ˆìÈJ||	¹‹ºçìœu¡ç`?F¾|6™î‘»+ëAK»é"K%ßUIÿ©Â8b•1âO€ªA:—kÊß©zã^ÿ8Î—Z­ÁÆ=UÖÿ–ÀâÔ4¨ÜKÈn´O2JÈ¢ıMö²/¯Å)Ad6öÌ”ÑüYŒÕ v³‹¾8T‹°gª¨¶ÜN»O¥Z°ƒ+v—f¶îa…¥WÍ‹Ÿl«oÚøèe¶“SÜçM9Ò÷Ï­3äµµ´Yï7„<L×FÙ*“Ö2›åÎ™ö½º‡Ç*›š(JŒu‹?j/•)›Ys3ìÊ’™s~‡+ğ´ã8²w>ˆH+şŸßd[ÕAê˜gÆªı<œX®´ÂMäÓÕÃÀÑ°Ã}Xı‰­¦²7#³µDAÏdCwsç °}æ"íáµ´CHxó­øâ‹ÆèS8l‹&_U²{ ksOätq”Ù4›§U†ô~Å¶ZäKÿI'}¼s²‚Í™­’†ÚåCF?ôÛ™
o;DK>?PÏ>£J!ºuyb'N¢Œ”ÁJ„„DaiOI…Híô:é‹C¯qc(* ¥­“eà£¦Ä¼`|a|ê"V¹ı ÚñJA¤xr'©¿lóJıÏ=âe¢%sã)áÙØÄAŞ²è€V©4ö¥‹rzgà³Nx¨ò¥d/Ø;<KpÒBIy·²“}æ½ˆ÷7şõ}îÌÕ[ˆ¾ ^T¼ <·]ÔGgïä	¿nŸ4¯¨Šæ® ó/ÁÉØ†‹©&F,Äš¸œ{`ó¡x¼vƒsP’,ìa·ÛÉ_øŒBiõÒ·é¾‡÷)ô6Ÿ ç$V¤ó¯ôÜØšÊtP>D@™2.	Md<É
O
šßfP*c%a¢t="°aË@=L*ÎS¼v{şàˆõ;)HÚ®›´k»kBº	q•C	şè¹zØÚP4ÅÁku0#ßTÔ|ó*O”$ŠwÖu‚ğ¯õïM©Ç‰Ù,‘ÊT-S7‹Zo&$İŒ=¤Do#ß~à&sÎ-ÒªÚ'R¢£Ø2ÚØÓÉ/ÆSäOÌ -§uâêA¯f-“×¶Ÿs±¨»|ÙªP½1•lA„º3T¦˜BÒßäÌÃ=±[¯vå¿è/II3²Âˆ¸üë”¯qûÆW"H TcâĞ›lõBŞ@M¸~î¢G¼›za*%®ñw‡ğªv„Ÿ^‘ge µ$ı†IxÿÔ9®ê•ve»ãôIÿNº˜ó#LÉ<«!!ÂÔÂ”ÛæV²´‹ôã{†ngzeU’•ÍV_#ğŞÄ k"ü8q0«-^ÉK1ÏlhAºw0êüÊ€‘Ít®Vù7øk¦&õí)ÆÎÒ ñóòÖvùŞú²>dN>}Ué“pçÿ.:»6WeF×Z†öjÆpè¤1[Ô²øIôÂÏX‘9ÄQ9Š-8Ş‚G/¸ãš•ş`ü‹&ßbçPâ}"¥Oö1ŠÃíÕí‡×ºœ1NS-Ç!ëd9ZÁ>"Rº‹s©à0n½ŠK9Ø[Ğ´3ó@»Y±q1MŸÿä±»Ù7Ş˜ìjAëxÎÇFQÕÄg}õE†Ê‚r•EğtÑ"™½­XçãŸÛ’İğÔ@àcç³`&]-}ú™»DŠ'¯PEvx6Z£Í¸Ê»Ø|mO&>VÔßK«PGD\Ê-qNù|…÷Û3b`å•&@ØôĞTË=vÅ´zõ]	û7©4¬ÙÚkï‡iğ­£û2&ŞÙe ÊXÉæîò©}úÛGŞğæJÈ@xhoæ¬•ÿã¨t©æ¦D3¯0.{v›^Ó5œZaû·Azh€†áúFÆóX·qÂÌ>ÚıÏÀÚ÷#>üÂ@vÕÅšJLD²=·&ØB—ù®ğ
z=–¹ö¿ğ»F5ÁÚ™(G 1RÕJŒ,¥ŞŞ[?Ch˜ñ¢|¯Ùğ2ÃXIø7Zß±F»½q2=“ÜUäÆaÆ5®E`İ20ƒÀéÑä˜^¢ó%‡¾æ¤Ç;[A¼†>«Éqa†Nf+'ğÙG_Fğ¬_e?”æ÷CÌ¾º4fß!„hŠdĞçU}ç(€–ÕâRÉ¶YİL¼üŒ1;N”­
Â²¤èësŞeïQÌ´U;{o˜ã„B‘ÙôN;1ñœÇ¼ı%	“ÿ²%^œ!Qˆ–$ªù	-éJóÙE×]ÆôÚÇÄŸä#Aäõª¿@Xhwæ¦øÃªšu3$İfD*ñ4ÀÓN‰xbÓÃV[¼ö”ì(uæÉs‚-òdÏ6\Ñïä)ê	È›©èÒ…è+¤îÍ§;mf@aºË\û2I¡pJò^8²Ï½SfÙë0hDÔQ§ÙIÜX!s‡i¸ÖŒv½«¹¿íò<ƒÊ a€ï44h?6İ^Ù'XËZ¨~g-%Ÿñãéã¶³š¾a`OÛS#E·Šboh@Pº'>ƒ¨ĞO‰1b^ˆÑ<ÅDI¦ë·Å)ËKáÎª¯Î· >‹ ôîßER<RUèwEú±ñoOæ}hÇí…qØçPÕµU)Ô\×£×g’æÀRXúº»I}àGØûçs”?cÃ"[¶”Ü®]ıœÎ$ÑÍS£H{ ®LzÍÛo¿É&»®§œ1•¸8—QbÔjT*ÉèÎÏNÂìÅÉL.checkClassName), ' ', content]).data('item', item);
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