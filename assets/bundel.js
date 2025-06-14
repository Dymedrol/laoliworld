/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _source_less_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source/less/index.less */ \"./source/less/index.less\");\n/* harmony import */ var _source_less_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_source_less_index_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _source_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source/js/script.js */ \"./source/js/script.js\");\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./source/less/index.less":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/less-loader/dist/cjs.js!./source/less/index.less ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./source/less/index.less?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n

    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n

  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n

    if (domStyle) {\n      domStyle.refs++;\n

      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n

      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];

      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n

      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n

  function insertStyleElement(options) {\n    var style = document.createElement('style');

    if (typeof options.attributes.nonce === 'undefined') {\n      var nonce =  true ? __webpack_require__.nc : undefined;\n

      if (nonce) {\n        options.attributes.nonce = nonce;\n      }\n    }\n

    Object.keys(options.attributes).forEach(function (key) {\n      style.setAttribute(key, options.attributes[key]);\n    });

    if (typeof options.insert === 'function') {\n      options.insert(style);\n    } else {\n      var target = getTarget(options.insert || 'head');

      if (!target) {\n        throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n      }\n

      target.appendChild(style);\n    }\n

    return style;\n  }\n

  function removeStyleElement(style) {\n    // istanbul ignore if\n    if (style.parentNode === null) {\n      return false;\n    }\n

    style.parentNode.removeChild(style);\n  }\n/* istanbul ignore next  */


  var replaceText = function replaceText() {\n    var textStore = [];\n    return function replace(index, replacement) {\n      textStore[index] = replacement;\n      return textStore.filter(Boolean).join('\\n');\n    };\n  }();


  function applyToSingletonTag(style, index, remove, obj) {\n    var css = remove ? '' : obj.css; // For old IE

    /* istanbul ignore if  */

    if (style.styleSheet) {\n      style.styleSheet.cssText = replaceText(index, css);\n    } else {\n      var cssNode = document.createTextNode(css);\n      var childNodes = style.childNodes;\n

      if (childNodes[index]) {\n        style.removeChild(childNodes[index]);\n      }\n

      if (childNodes.length) {\n        style.insertBefore(cssNode, childNodes[index]);\n      } else {\n        style.appendChild(cssNode);\n      }\n    }\n  }\n

  function applyToTag(style, options, obj) {\n    var css = obj.css;\n    var media = obj.media;\n    var sourceMap = obj.sourceMap;\n

    if (media) {\n      style.setAttribute('media', media);\n    }\n

    if (sourceMap && btoa) {\n      css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n    } // For old IE

    /* istanbul ignore if  */


    if (style.styleSheet) {\n      style.styleSheet.cssText = css;\n    } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n

      style.appendChild(document.createTextNode(css));\n    }\n  }\n

  var singleton = null;\n  var singletonCounter = 0;\n

  function addStyle(obj, options) {\n    var style;\n    var update;\n    var remove;\n

    if (options.singleton) {\n      var styleIndex = singletonCounter++;\n      style = singleton || (singleton = insertStyleElement(options));\n      update = applyToSingletonTag.bind(null, style, styleIndex, false);\n      remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n    } else {\n      style = insertStyleElement(options);\n      update = applyToTag.bind(null, style, options);\n

      remove = function remove() {\n        removeStyleElement(style);\n      };\n    }\n

    update(obj);\n    return function updateStyle(newObj) {\n      if (newObj) {\n        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n          return;\n        }\n

        update(obj = newObj);\n      } else {\n        remove();\n      }\n    };\n  }\n

  module.exports = function (list, options) {\n    options = options || {};\n    options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\
    // tags it will allow on a page

    if (!options.singleton && typeof options.singleton !== 'boolean') {\n      options.singleton = isOldIE();\n    }\n

    var styles = listToStyles(list, options);\n    addStylesToDom(styles, options);\n    return function update(newList) {\n      var mayRemove = [];

      for (var i = 0; i < styles.length; i++) {\n        var item = styles[i];\n        var domStyle = stylesInDom[item.id];

        if (domStyle) {\n          domStyle.refs--;\n          mayRemove.push(domStyle);\n        }\n      }\n

      if (newList) {\n        var newStyles = listToStyles(newList, options);\n        addStylesToDom(newStyles, options);\n      }\n

      for (var _i = 0; _i < mayRemove.length; _i++) {\n        var _domStyle = mayRemove[_i];

        if (_domStyle.refs === 0) {\n          for (var j = 0; j < _domStyle.parts.length; j++) {\n            _domStyle.parts[j]();\n          }\n

          delete stylesInDom[_domStyle.id];\n        }\n      }\n    };\n  };

  //# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./source/js/banner.js":
/*!*****************************!*\
  !*** ./source/js/banner.js ***!
  \*****************************/
/*! exports provided: initBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBanner\", function() { return initBanner; });\nconst initBanner = () => {\n  const banner = $('.laoli-banner');

  if (!banner.length) {\n    return;\n  }\n

  const pdp = $('.laoli-pdp-desktop');

  if (pdp.length) {\n    pdp.addClass('laoli-pdp-with-banner');

  const closeButton = banner.find('.laoli-banner-close');
  closeButton.click(function () {\n    banner.remove();
  pdp.removeClass('laoli-pdp-with-banner');

  });
};

//# sourceURL=webpack:///./source/js/banner.js?");

/***/ }),

/***/ "./source/js/cart.js":
/*!***************************!*\
  !*** ./source/js/cart.js ***!
  \***************************/
/*! exports provided: openCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openCart\", function() { return openCart; });\nconst openCart = () => {\n  const cart = $('.laoli-cart-wrapper');
  const closeButton = cart.find('.laoli-cart-close');
  const content = cart.find('.js-cart-content');
  const empty = cart.find('.js-cart-empty');
  const title = cart.find('.js-cart-title');
  const itemsWrapper = cart.find('.laoli-cart-items');
  const loading = cart.find('.js-cart-loading');
  const template = cart.find('#cart-item-template');
  const totalPrice = cart.find('.js-cart-total');
  const cartCount = $('.js-cart-count');
  const cartCheckout = $('.js-cart-checkout');
  const duration = $('.laoli-cart-footer-duration');

  const getPrice = function (price) {\n    const newPrice = price.toString();
    const xx = newPrice.length - 2;
    const updatedPrice = newPrice.substring(0, xx) + \".\" + newPrice.substring(xx, newPrice.length);\n    return updatedPrice;\n  };

  const cartItem = item => `\n    <div class=\"laoli-cart-item\" data-id=\"${item.id}\" data-handle=\"${item.handle}\">\n        <div class=\"laoli-cart-item-pic-wrapper\">\n            <div class=\"laoli-cart-item-pic-lavel ${item.inventory_quantity > 0 ? 'hidden' : ''}\">made to order</div>\n            <img src=\"${item.featured_image.url}&width=200\" alt=\"\" class=\"laoli-cart-item-pic\">\n        </div>\n        <div class=\"laoli-cart-item-info\">\n            <div class=\"laoli-cart-item-info-price\">${item.currency} ${getPrice(item.final_price)}</div>\n            <div class=\"laoli-cart-item-info-upperblock\">\n                <div class=\"laoli-cart-item-info-title\">${item.product_title}</div>\n                <div class=\"laoli-cart-item-info-size ${item.options_with_values[0].name == 'Size' ? '' : 'hidden'}\">Size: ${item.options_with_values[0].value}</div>\n            </div>\n            <div class=\"laoli-cart-item-info-loweblock\">\n                <div class=\"laoli-cart-item-info-quantity\">\n                    <span class=\"cursor-pointer js-cart-minus\">-</span>\n                    <span class=\"js-cart-quantity\">${item.quantity}</span>\n                    <span class=\"cursor-pointer js-cart-plus\">+</span>\n                </div>\n                <div class=\"laoli-cart-item-info-remove js-cart-remove cursor-pointer\">Remove</div>\n            </div>\n        </div>\n    </div>\n\n    `;\n

  const getCart = function () {\n    fetch(window.Shopify.routes.root + 'cart.js', {\n      method: 'get',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(response => response.json()).then(result => {\n      if (result.item_count == 0) {\n        loading.hide();
        empty.show();
        title.hide();
        return;\n      }\n

      var currency = result.currency;\n

      if (currency == 'EUR') {\n        currency = '€';
      }\n

      if (currency == 'USD') {\n        currency = '$';
      }\n

      const items = result.items;\n      items.forEach(function (item) {\n        item.currency = currency;\n        item.inventory_quantity = item.inventory_quantity || 0;\n

        if (item.inventory_quantity < 1) {\n          duration.removeClass('hidden');
        }\n      });
      itemsWrapper.html(items.map(cartItem).join(''));
      totalPrice.text(currency + ' ' + getPrice(result.total_price));
      loading.hide();
      content.css('display', 'flex');
      itemsWrapper.find('.js-cart-remove').click(function () {\n        const item = $(this).closest('.laoli-cart-item');
        const id = item.attr('data-id');
        const quantity = item.find('.js-cart-quantity').text();
        let formData = {\n          'id': id,\n          'quantity': 0\n        };
        fetch(window.Shopify.routes.root + 'cart/change.js', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(formData)\n        }).then(response => {\n          return response.json();
        }).then(result => {\n          item.remove();

        if (result.item_count > 0) {\n          cartCount.text(' (' + result.item_count + ')');
        } else {\n          content.css('display', 'none');
          empty.show();
          title.hide();
          cartCount.text('');
        }\n

        totalPrice.text(currency + ' ' + getPrice(result.original_total_price));
      }).catch(error => {\n        console.error('Error:', error);
      });
    });
  };

  const showCart = function () {\n    cart.addClass('open');
    getCart();
    setTimeout(function () {\n      $(document).on('click.menu', function (e) {\n        const target = $(e.target);

        if (!target.closest('.laoli-cart').length) {\n          hideCart();
        }\n      });
    }, 500);
  };

  cartCheckout.click(function () {\n    let url = '/cart/';
    const products = itemsWrapper.find('.laoli-cart-item');
    products.each(function (index) {\n      const itemId = $(this).attr('data-id');
      const itemQuantity = $(this).find('.js-cart-quantity').text();
      url = url + itemId + ':' + itemQuantity + ',';
    });
    window.location.replace(url);
  });

  const hideCart = function () {\n    cart.removeClass('open');
    content.css('display', 'none');
    empty.hide();
    title.show();
    loading.show();
    $(document).off('click.menu');
  };

  closeButton.click(function () {\n    hideCart();
  });
  showCart();
};

//# sourceURL=webpack:///./source/js/cart.js?");

/***/ }),

/***/ "./source/js/faq.js":
/*!**************************!*\
  !*** ./source/js/faq.js ***!
  \**************************/
/*! exports provided: initFaq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFaq\", function() { return initFaq; });\nconst initFaq = () => {\n  const block = $('.laoli-faq-block');

  if (!block.length) {\n    return;\n  }\n

  const question = $('.laoli-faq-block-item-question');
  question.click(function () {\n    console.log('click');
    const item = $(this).closest('.laoli-faq-block-item');
    item.toggleClass('open');
    item.find('.laoli-faq-block-item-answer').toggle(\"fast\");
  });
};

//# sourceURL=webpack:///./source/js/faq.js?");

/***/ }),

/***/ "./source/js/grid.js":
/*!***************************!*\
  !*** ./source/js/grid.js ***!
  \***************************/
/*! exports provided: initGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGrid\", function() { return initGrid; });\nconst initGrid = () => {\n  const filters = $('.laoli-grid-controls-filters');

  if (!filters.length) {\n    return;\n  }\n

  const items = $('.laoli-grid-items');
  $(\".laoli-grid-controls-list_mobile\").owlCarousel({\n    margin: 35,\n    autoWidth: true,\n    dots: false,\n    nav: false\n  });
  const inStockFilter = filters.find('#filter-in-stock');
  const madeToOrderFilter = filters.find('#filter-made-to-order');
  const inStock = items.find('.in-stock');
  const madeToOrder = items.find('.made-to-order');
  const active = 'laoli-grid-controls-filters-filter_active';
  inStockFilter.click(function () {\n    if (!inStockFilter.hasClass(active)) {\n      if (madeToOrderFilter.hasClass(active)) {\n        madeToOrderFilter.removeClass(active);\n        inStock.show();
        inStockFilter.addClass(active);\n        madeToOrder.hide();
      } else {\n        inStockFilter.addClass(active);\n        madeToOrder.hide();
      }\n    } else {\n      inStockFilter.removeClass(active);\n      madeToOrder.show();
    }\n  });
  madeToOrderFilter.click(function () {\n    if (!madeToOrderFilter.hasClass(active)) {\n      if (inStockFilter.hasClass(active)) {\n        inStockFilter.removeClass(active);\n        inStock.hide();
        madeToOrderFilter.addClass(active);\n        madeToOrder.show();
      } else {\n        madeToOrderFilter.addClass(active);\n        inStock.hide();
      }\n    } else {\n      madeToOrderFilter.removeClass(active);\n      inStock.show();
    }\n  });
};

//# sourceURL=webpack:///./source/js/grid.js?");

/***/ }),

/***/ "./source/js/languageSwitcher.js":
/*!***************************************!*\
  !*** ./source/js/languageSwitcher.js ***!
  \***************************************/
/*! exports provided: initLanguageSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initLanguageSwitcher\", function() { return initLanguageSwitcher; });\nconst initLanguageSwitcher = () => {\n  let language_switcher_class_name = 'language_switcher';

  function tumblerClickHandler(e) {\n    let language = e.target.dataset.language;\n    let form = e.target.parentNode;\n    let language_input = form.querySelector('input[name=\"language_code\"]');
    language_input.value = language;\n    form.submit();
  }\n

  let tumblers = document.getElementsByClassName(language_switcher_class_name);\n

  for (let i = 0; i < tumblers.length; i++) {\n    tumblers[i].addEventListener('click', tumblerClickHandler);\n  }\n};

//# sourceURL=webpack:///./source/js/languageSwitcher.js?");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! exports provided: initMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMenu\", function() { return initMenu; });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./source/js/cart.js\");

const initMenu = () => {\n  const menu = $('.laoli-menu');
  const menuInner = $('.laoli-menu-inner');
  const cartButton = $('.js-cart-button');

  if (!menu.length) {\n    return;\n  }\n

  const burger = $('.js-menu-burger');
  const close = $('.js-menu-close');
  burger.click(function () {\n    menu.addClass('open');
  });
  $(document).click(function (e) {\n    const target = $(e.target);

    if (!target.closest('.laoli-menu').length) {\n      menu.hasClass('open') ? menu.removeClass('open') : null;
    }\n  });
  close.click(function () {\n    menu.removeClass('open');
  });
  cartButton.click(function () {\n    Object(_cart__WEBPACK_IMPORTED_MODULE_0__[\"openCart\"])();
  });
};

//# sourceURL=webpack:///./source/js/menu.js?");

/***/ }),

/***/ "./source/js/pdp-select.js":
/*!*********************************!*\
  !*** ./source/js/pdp-select.js ***!
  \*********************************/
/*! exports provided: initPdpSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPdpSelect\", function() { return initPdpSelect; });\nconst initPdpSelect = () => {\n  const pdpWrapper = $('.laoli-pdp');

  if (!pdpWrapper.length) {\n    return;\n  }\n

  const priceWrapper = $('.laoli-pdp-desktop-info-price');
  const mobilePriceWrapper = $('.laoli-pdp-mobile-info-price');
  const selects = $('.laoli-pdp-mobile-info-buttons-sizes');
  const status = $('.js-status');
  const addButton = $('.js-add');
  const inStockText = pdpWrapper.attr('data-inStockText');
  const madeToOrderText = pdpWrapper.attr('data-madeToOrderText');
  const addToCartText = pdpWrapper.attr('data-addToCartText');
  const preOrderText = pdpWrapper.attr('data-preOrderText');
  selects.click(function () {\n    const select = $(this).closest('.laoli-pdp-mobile-info-buttons-sizes-wrapper');
    const menu = select.find('.laoli-pdp-mobile-info-buttons-sizes-menu');
    const selectedValue = select.find('.laoli-pdp-mobile-info-buttons-sizes-value');
    const input = select.find('input');
    menu.toggle();
    menu.click(function (event) {\n      const target = $(event.target);

      if (target.hasClass(\"laoli-pdp-mobile-info-buttons-sizes-menu-item\")) {\n        if (target.hasClass('laoli-pdp-mobile-info-buttons-sizes-menu-item_empty')) {\n          status.text(madeToOrderText);
          addButton.val(addToCartText);
        } else {\n          status.text(inStockText);
          addButton.val(addToCartText);
        }\n

        selectedValue.text($(event.target).text());
        input.val($(event.target).attr('data-id'));
        priceWrapper.text($(event.target).attr('data-price'));
        mobilePriceWrapper.text($(event.target).attr('data-price'));
        menu.hide();
      }\n    });
  });
};

//# sourceURL=webpack:///./source/js/pdp-select.js?");

/***/ }),

/***/ "./source/js/pdp.js":
/*!**************************!*\
  !*** ./source/js/pdp.js ***!
  \**************************/
/*! exports provided: initPdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPdp\", function() { return initPdp; });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./source/js/cart.js\");

const initPdp = () => {\n  const pdpWrapper = $('.laoli-pdp');

  if (!pdpWrapper.length) {\n    return;\n  }\n

  const cartCount = $('.js-cart-count');
  const gallery = $('.laoli-pdp-gallery');
  const galleryWrapper = gallery.find('.laoli-pdp-gallery-wrapper');
  const back = $('.laoli-pdp-desktop-back');
  const detailsButton = $('.js-details-button');
  const detailsWrapper = $('.js-details-wrapper');
  const careButton = $('.js-care-button');
  const careWrapper = $('.js-care-wrapper');
  const forms = $('.js-cart-form');
  detailsButton.click(function () {\n    detailsButton.addClass('controls-item-active');
    careButton.removeClass('controls-item-active');
    detailsWrapper.show();
    careWrapper.hide();
  });
  careButton.click(function () {\n    detailsButton.removeClass('controls-item-active');
    careButton.addClass('controls-item-active');
    detailsWrapper.hide();
    careWrapper.show();
  });
  $(\".laoli-pdp-mobile-carousel\").owlCarousel({\n    margin: 15,\n    autoWidth: true,\n    dots: true,\n    center: true,\n    smartSpeed: 500,\n    animateIn: 'ease-out',\n    animateOut: 'ease-out'\n  });

  const showGallery = function () {\n    gallery.fadeIn(200);
  };

  const hideGallery = function () {\n    galleryWrapper.animate({\n      scrollTop: 0\n    }, 0);
    gallery.fadeOut(200);
  };

  $('.laoli-pdp-desktop-pic').click(function () {\n    showGallery();
    const index = $(this).attr('data-index');
    const attr = \"picture[data-index=\" + index + \"]\";
    const targetPic = gallery.find(attr);
    let offset = targetPic.position().top;

    if (index == 1) {\n      offset = 0;
    }\n

    galleryWrapper.animate({\n      scrollTop: offset\n    }, 0);
    gallery.click(function (e) {\n      const target = $(e.target);

      if (!target.closest('form').length) {\n        hideGallery();
      }\n    });
  });
  forms.submit(function (e) {\n    e.preventDefault();
    const form = $(this);
    const productId = form.find('input[name=\"id\"]').val();
    let formData = {\n      'items': [{\n        'id': productId,\n        'quantity': 1\n      }]\n    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    }).then(response => {\n      if (response.status === 200) {\n        let cartCountText = cartCount.first().text();

        if (cartCountText) {\n          cartCountText = cartCountText.replace(/\\s/g, '');
          cartCountText = cartCountText.replace(/[{()}]/g, '');
          cartCount.text(' (' + (Number(cartCountText) + 1) + ')');
        } else {\n          cartCount.text(' (1)');
        }\n

        Object(_cart__WEBPACK_IMPORTED_MODULE_0__[\"openCart\"])();
      }\n

      return response.json();
    }).catch(error => {\n      console.error('Error:', error);
    });
  });
};

//# sourceURL=webpack:///./source/js/pdp.js?");

/***/ }),

/***/ "./source/js/region.js":
/*!*****************************!*\
  !*** ./source/js/region.js ***!
  \*****************************/
/*! exports provided: initRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRegions\", function() { return initRegions; });\nconst initRegions = () => {\n  const regionButtons = $('.js-region');

  if (!regionButtons.length) {\n    return;\n  }\n

  const regionPopup = $('.laoli-region');
  const closeButton = $('.js-region-close');
  const firstStep = $('.laoli-region-first');
  const secondStep = $('.laoli-region-second');
  const changeButton = $('.laoli-region-change');
  const selector = $('.laoli-region-selector-inner');
  const items = $('.laoli-region-selector-item');
  const input = $('.js-region-input');

  const closePopup = function () {\n    regionPopup.hide();
    firstStep.show();
    secondStep.hide();
  };

  regionButtons.click(function () {\n    regionPopup.show();
    $('.laoli-menu').removeClass('open');
  });
  closeButton.click(function () {\n    closePopup();
  });
  changeButton.click(function () {\n    firstStep.hide();
    secondStep.show();
  });
  selector.click(function (e) {\n    const target = $(e.target);

    if (target.hasClass('laoli-region-selector-item')) {\n      items.removeClass('laoli-region-selector-item-active');
      target.addClass('laoli-region-selector-item-active');
      input.val(target.attr('data-value'));
    }\n  });
};

//# sourceURL=webpack:///./source/js/region.js?");

/***/ }),

/***/ "./source/js/registration.js":
/*!***********************************!*\
  !*** ./source/js/registration.js ***!
  \***********************************/
/*! exports provided: initRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRegistration\", function() { return initRegistration; });\nconst initRegistration = () => {\n  const registration = $('.laoli-registration');
  const list_id = 'SdcCiU';

  if (!registration.length) {\n    return;\n  }\n

  const buttons = $('.js-show-subscription');
  const closeButton = registration.find('.laoli-registration-close');
  const form = registration.find('form');
  buttons.click(function () {\n    registration.addClass('open');
  });
  closeButton.click(function () {\n    registration.removeClass('open');
  });
  form.submit(function (e) {\n    e.preventDefault();
    const name = form.find('.laoli-registration-input-name').val();
    const email = form.find('.laoli-registration-input-email').val();
    var settings = {\n      \"async\": true,\n      \"crossDomain\": true,\n      \"url\": \"https://manage.kmail-lists.com/ajax/subscriptions/subscribe\",\n      \"method\": \"POST\",\n      \"headers\": {\n        \"content-type\": \"application/x-www-form-urlencoded\",\n        \"cache-control\": \"no-cache\"\n      },\n      \"data\": {\n        \"g\": list_id,\n        \"$fields\": \"$first_name\",\n        \"email\": email,\n        \"$first_name\": name\n      }\n    };
    $.ajax(settings).done(function (response) {\n      if (response.success) {\n        form.hide();
        registration.find('.laoli-registration-form-success').show();
      }\n    });
  });
};

//# sourceURL=webpack:///./source/js/registration.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./source/js/menu.js\");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./source/js/grid.js\");
/* harmony import */ var _pdp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdp */ \"./source/js/pdp.js\");
/* harmony import */ var _pdp_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdp-select */ \"./source/js/pdp-select.js\");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner */ \"./source/js/banner.js\");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration */ \"./source/js/registration.js\");
/* harmony import */ var _languageSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languageSwitcher */ \"./source/js/languageSwitcher.js\");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq */ \"./source/js/faq.js\");
/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./region */ \"./source/js/region.js\");







$(document).ready(function () {\n  Object(_menu__WEBPACK_IMPORTED_MODULE_0__[\"initMenu\"])();
  Object(_grid__WEBPACK_IMPORTED_MODULE_1__[\"initGrid\"])();
  Object(_pdp__WEBPACK_IMPORTED_MODULE_2__[\"initPdp\"])();
  Object(_pdp_select__WEBPACK_IMPORTED_MODULE_3__[\"initPdpSelect\"])();
  Object(_banner__WEBPACK_IMPORTED_MODULE_4__[\"initBanner\"])();
  Object(_registration__WEBPACK_IMPORTED_MODULE_5__[\"initRegistration\"])();
  Object(_languageSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"initLanguageSwitcher\"])();
  Object(_faq__WEBPACK_IMPORTED_MODULE_7__[\"initFaq\"])();
  Object(_region__WEBPACK_IMPORTED_MODULE_8__[\"initRegions\"])();
});

//# sourceURL=webpack:///./source/js/script.js?");

/***/ }),

/***/ "./source/less/index.less":
/*!********************************!*\
  !*** ./source/less/index.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./source/less/index.less\");

if (typeof content === 'string') {\n  content = [[module.i, content, '']];
}

var options = {}\n

options.insert = \"head\";
options.singleton = false;\n

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n

if (content.locals) {\n  module.exports = content.locals;\n}


//# sourceURL=webpack:///./source/less/index.less?");

/***/ })

/******/ });