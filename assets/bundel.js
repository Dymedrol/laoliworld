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
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./source/js/banner.js":
/*!*****************************!*\
  !*** ./source/js/banner.js ***!
  \*****************************/
/*! exports provided: initBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBanner\", function() { return initBanner; });\nconst initBanner = () => {\n  const banner = $('.laoli-banner');\n\n  if (!banner.length) {\n    return;\n  }\n\n  const pdp = $('.laoli-pdp-desktop');\n\n  if (pdp.length) {\n    pdp.addClass('laoli-pdp-with-banner');\n  }\n\n  const closeButton = banner.find('.laoli-banner-close');\n  closeButton.click(function () {\n    banner.remove();\n    pdp.removeClass('laoli-pdp-with-banner');\n  });\n};\n\n//# sourceURL=webpack:///./source/js/banner.js?");

/***/ }),

/***/ "./source/js/cart.js":
/*!***************************!*\
  !*** ./source/js/cart.js ***!
  \***************************/
/*! exports provided: openCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openCart\", function() { return openCart; });\nconst openCart = () => {\n  const cart = $('.laoli-cart-wrapper');\n  const closeButton = cart.find('.laoli-cart-close');\n  const content = cart.find('.js-cart-content');\n  const empty = cart.find('.js-cart-empty');\n  const title = cart.find('.js-cart-title');\n  const itemsWrapper = cart.find('.laoli-cart-items');\n  const loading = cart.find('.js-cart-loading');\n  const template = cart.find('#cart-item-template');\n  const totalPrice = cart.find('.js-cart-total');\n  const cartCount = $('.js-cart-count');\n  const cartCheckout = $('.js-cart-checkout');\n  const duration = $('.laoli-cart-footer-duration');\n\n  const getPrice = function (price) {\n    const newPrice = price.toString();\n    const xx = newPrice.length - 2;\n    const updatedPrice = newPrice.substring(0, xx) + \".\" + newPrice.substring(xx, newPrice.length);\n    return updatedPrice;\n  };\n\n  const cartItem = item => `\n    <div class=\"laoli-cart-item\" data-id=\"${item.id}\" data-handle=\"${item.handle}\">\n        <div class=\"laoli-cart-item-pic-wrapper\">\n            <div class=\"laoli-cart-item-pic-lavel ${item.inventory_quantity > 0 ? 'hidden' : ''}\">made to order</div>\n            <img src=\"${item.featured_image.url}&width=200\" alt=\"\" class=\"laoli-cart-item-pic\">\n        </div>\n        <div class=\"laoli-cart-item-info\">\n            <div class=\"laoli-cart-item-info-price\">${item.currency} ${getPrice(item.final_price)}</div>\n            <div class=\"laoli-cart-item-info-upperblock\">\n                <div class=\"laoli-cart-item-info-title\">${item.product_title}</div>\n                <div class=\"laoli-cart-item-info-size ${item.options_with_values[0].name == 'Size' ? '' : 'hidden'}\">Size: ${item.options_with_values[0].value}</div>\n            </div>\n            <div class=\"laoli-cart-item-info-loweblock\">\n                <div class=\"laoli-cart-item-info-quantity\">\n                    <span class=\"cursor-pointer js-cart-minus\">-</span>\n                    <span class=\"js-cart-quantity\">${item.quantity}</span>\n                    <span class=\"cursor-pointer js-cart-plus\">+</span>\n                </div>\n                <div class=\"laoli-cart-item-info-remove js-cart-remove cursor-pointer\">Remove</div>\n            </div>\n        </div>\n    </div>\n\n    `;\n\n  const getCart = function () {\n    fetch(window.Shopify.routes.root + 'cart.js', {\n      method: 'get',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(response => response.json()).then(result => {\n      if (result.item_count == 0) {\n        loading.hide();\n        empty.show();\n        title.hide();\n        return;\n      }\n\n      var currency = result.currency;\n\n      if (currency == 'EUR') {\n        currency = '€';\n      }\n\n      if (currency == 'USD') {\n        currency = '$';\n      }\n\n      const items = result.items;\n      items.forEach(function (item) {\n        item.currency = currency;\n        const currentProduct = products.find(product => product.id == item.id);\n        item.inventory_quantity = currentProduct.quantity;\n\n        if (item.inventory_quantity < 1) {\n          duration.removeClass('hidden');\n        }\n      });\n      itemsWrapper.html(items.map(cartItem).join(''));\n      totalPrice.text(currency + ' ' + getPrice(result.total_price));\n      loading.hide();\n      content.css('display', 'flex');\n      itemsWrapper.find('.js-cart-remove').click(function () {\n        const item = $(this).closest('.laoli-cart-item');\n        const id = item.attr('data-id');\n        const quantity = item.find('.js-cart-quantity').text();\n        let formData = {\n          'id': id,\n          'quantity': 0\n        };\n        fetch(window.Shopify.routes.root + 'cart/change.js', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(formData)\n        }).then(response => {\n          return response.json();\n        }).then(result => {\n          item.remove();\n\n          if (result.item_count > 0) {\n            cartCount.text(' (' + result.item_count + ')');\n          } else {\n            content.css('display', 'none');\n            empty.show();\n            title.hide();\n            cartCount.text('');\n          }\n\n          totalPrice.text(currency + ' ' + getPrice(result.original_total_price));\n        }).catch(error => {\n          console.error('Error:', error);\n        });\n      });\n      itemsWrapper.find('.js-cart-plus').click(function () {\n        const item = $(this).closest('.laoli-cart-item');\n        const id = item.attr('data-id');\n        const quantity = Number(item.find('.js-cart-quantity').text()) + 1;\n        let formData = {\n          'id': id,\n          'quantity': quantity\n        };\n        fetch(window.Shopify.routes.root + 'cart/change.js', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(formData)\n        }).then(response => {\n          return response.json();\n        }).then(result => {\n          console.log('result', result);\n          item.find('.js-cart-quantity').text(quantity);\n          totalPrice.text(currency + ' ' + getPrice(result.total_price));\n\n          if (result.item_count > 0) {\n            cartCount.text(' (' + result.item_count + ')');\n          } else {\n            content.css('display', 'none');\n            empty.show();\n            title.hide();\n            cartCount.text('');\n          }\n        }).catch(error => {\n          console.error('Error:', error);\n        });\n      });\n      itemsWrapper.find('.js-cart-minus').click(function () {\n        const item = $(this).closest('.laoli-cart-item');\n        const id = item.attr('data-id');\n        const quantity = Number(item.find('.js-cart-quantity').text()) - 1;\n        let formData = {\n          'id': id,\n          'quantity': quantity\n        };\n        fetch(window.Shopify.routes.root + 'cart/change.js', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(formData)\n        }).then(response => {\n          return response.json();\n        }).then(result => {\n          if (quantity > 0) {\n            item.find('.js-cart-quantity').text(quantity);\n          } else {\n            item.remove();\n          }\n\n          totalPrice.text(currency + ' ' + getPrice(result.total_price));\n\n          if (result.item_count > 0) {\n            cartCount.text(' (' + result.item_count + ')');\n          } else {\n            content.css('display', 'none');\n            empty.show();\n            title.hide();\n            cartCount.text('');\n          }\n        }).catch(error => {\n          console.error('Error:', error);\n        });\n      });\n    }).catch(error => {\n      console.error('Error:', error);\n    });\n  };\n\n  const showCart = function () {\n    cart.addClass('open');\n    getCart();\n    setTimeout(function () {\n      $(document).on('click.menu', function (e) {\n        const target = $(e.target);\n\n        if (!target.closest('.laoli-cart').length) {\n          hideCart();\n        }\n      });\n    }, 500);\n  };\n\n  cartCheckout.click(function () {\n    let url = '/cart/';\n    const products = itemsWrapper.find('.laoli-cart-item');\n    products.each(function (index) {\n      const itemId = $(this).attr('data-id');\n      const itemQuantity = $(this).find('.js-cart-quantity').text();\n      url = url + itemId + ':' + itemQuantity + ',';\n    });\n    window.location.replace(url);\n  });\n\n  const hideCart = function () {\n    cart.removeClass('open');\n    content.css('display', 'none');\n    empty.hide();\n    title.show();\n    loading.show();\n    $(document).off('click.menu');\n  };\n\n  closeButton.click(function () {\n    hideCart();\n  });\n  showCart();\n};\n\n//# sourceURL=webpack:///./source/js/cart.js?");

/***/ }),

/***/ "./source/js/faq.js":
/*!**************************!*\
  !*** ./source/js/faq.js ***!
  \**************************/
/*! exports provided: initFaq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFaq\", function() { return initFaq; });\nconst initFaq = () => {\n  const block = $('.laoli-faq-block');\n\n  if (!block.length) {\n    return;\n  }\n\n  const question = $('.laoli-faq-block-item-question');\n  question.click(function () {\n    console.log('click');\n    const item = $(this).closest('.laoli-faq-block-item');\n    item.toggleClass('open');\n    item.find('.laoli-faq-block-item-answer').toggle(\"fast\");\n  });\n};\n\n//# sourceURL=webpack:///./source/js/faq.js?");

/***/ }),

/***/ "./source/js/grid.js":
/*!***************************!*\
  !*** ./source/js/grid.js ***!
  \***************************/
/*! exports provided: initGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGrid\", function() { return initGrid; });\nconst initGrid = () => {\n  const filters = $('.laoli-grid-controls-filters');\n\n  if (!filters.length) {\n    return;\n  }\n\n  const items = $('.laoli-grid-items');\n  $(\".laoli-grid-controls-list_mobile\").owlCarousel({\n    margin: 35,\n    autoWidth: true,\n    dots: false,\n    nav: false\n  });\n  const inStockFilter = filters.find('#filter-in-stock');\n  const madeToOrderFilter = filters.find('#filter-made-to-order');\n  const inStock = items.find('.in-stock');\n  const madeToOrder = items.find('.made-to-order');\n  const active = 'laoli-grid-controls-filters-filter_active';\n  inStockFilter.click(function () {\n    if (!inStockFilter.hasClass(active)) {\n      if (madeToOrderFilter.hasClass(active)) {\n        madeToOrderFilter.removeClass(active);\n        inStock.show();\n        inStockFilter.addClass(active);\n        madeToOrder.hide();\n      } else {\n        inStockFilter.addClass(active);\n        madeToOrder.hide();\n      }\n    } else {\n      inStockFilter.removeClass(active);\n      madeToOrder.show();\n    }\n  });\n  madeToOrderFilter.click(function () {\n    if (!madeToOrderFilter.hasClass(active)) {\n      if (inStockFilter.hasClass(active)) {\n        inStockFilter.removeClass(active);\n        inStock.hide();\n        madeToOrderFilter.addClass(active);\n        madeToOrder.show();\n      } else {\n        madeToOrderFilter.addClass(active);\n        inStock.hide();\n      }\n    } else {\n      madeToOrderFilter.removeClass(active);\n      inStock.show();\n    }\n  });\n};\n\n//# sourceURL=webpack:///./source/js/grid.js?");

/***/ }),

/***/ "./source/js/languageSwitcher.js":
/*!***************************************!*\
  !*** ./source/js/languageSwitcher.js ***!
  \***************************************/
/*! exports provided: initLanguageSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initLanguageSwitcher\", function() { return initLanguageSwitcher; });\nconst initLanguageSwitcher = () => {\n  let language_switcher_class_name = 'language_switcher';\n\n  function tumblerClickHandler(e) {\n    let language = e.target.dataset.language;\n    let form = e.target.parentNode;\n    let language_input = form.querySelector('input[name=\"language_code\"]');\n    language_input.value = language;\n    form.submit();\n  }\n\n  let tumblers = document.getElementsByClassName(language_switcher_class_name);\n\n  for (let i = 0; i < tumblers.length; i++) {\n    tumblers[i].addEventListener('click', tumblerClickHandler);\n  }\n};\n\n//# sourceURL=webpack:///./source/js/languageSwitcher.js?");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! exports provided: initMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMenu\", function() { return initMenu; });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./source/js/cart.js\");\n\nconst initMenu = () => {\n  const menu = $('.laoli-menu');\n  const menuInner = $('.laoli-menu-inner');\n  const cartButton = $('.js-cart-button');\n\n  if (!menu.length) {\n    return;\n  }\n\n  const burger = $('.js-menu-burger');\n  const close = $('.js-menu-close');\n  burger.click(function () {\n    menu.addClass('open');\n  });\n  $(document).click(function (e) {\n    const target = $(e.target);\n\n    if (!target.closest('.laoli-menu').length) {\n      menu.hasClass('open') ? menu.removeClass('open') : null;\n    }\n  });\n  close.click(function () {\n    menu.removeClass('open');\n  });\n  cartButton.click(function () {\n    Object(_cart__WEBPACK_IMPORTED_MODULE_0__[\"openCart\"])();\n  });\n};\n\n//# sourceURL=webpack:///./source/js/menu.js?");

/***/ }),

/***/ "./source/js/pdp-select.js":
/*!*********************************!*\
  !*** ./source/js/pdp-select.js ***!
  \*********************************/
/*! exports provided: initPdpSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPdpSelect\", function() { return initPdpSelect; });\nconst initPdpSelect = () => {\n  const pdpWrapper = $('.laoli-pdp');\n\n  if (!pdpWrapper.length) {\n    return;\n  }\n\n  const priceWrapper = $('.laoli-pdp-desktop-info-price');\n  const mobilePriceWrapper = $('.laoli-pdp-mobile-info-price');\n  const selects = $('.laoli-pdp-mobile-info-buttons-sizes');\n  const status = $('.js-status');\n  const addButton = $('.js-add');\n  const inStockText = pdpWrapper.attr('data-inStockText');\n  const madeToOrderText = pdpWrapper.attr('data-madeToOrderText');\n  const addToCartText = pdpWrapper.attr('data-addToCartText');\n  const preOrderText = pdpWrapper.attr('data-preOrderText');\n  selects.click(function () {\n    const select = $(this).closest('.laoli-pdp-mobile-info-buttons-sizes-wrapper');\n    const menu = select.find('.laoli-pdp-mobile-info-buttons-sizes-menu');\n    const selectedValue = select.find('.laoli-pdp-mobile-info-buttons-sizes-value');\n    const input = select.find('input');\n    menu.toggle();\n    menu.click(function (event) {\n      const target = $(event.target);\n\n      if (target.hasClass(\"laoli-pdp-mobile-info-buttons-sizes-menu-item\")) {\n        if (target.hasClass('laoli-pdp-mobile-info-buttons-sizes-menu-item_empty')) {\n          status.text(madeToOrderText);\n          addButton.val(addToCartText);\n        } else {\n          status.text(inStockText);\n          addButton.val(addToCartText);\n        }\n\n        selectedValue.text($(event.target).text());\n        input.val($(event.target).attr('data-id'));\n        priceWrapper.text($(event.target).attr('data-price'));\n        mobilePriceWrapper.text($(event.target).attr('data-price'));\n        menu.hide();\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack:///./source/js/pdp-select.js?");

/***/ }),

/***/ "./source/js/pdp.js":
/*!**************************!*\
  !*** ./source/js/pdp.js ***!
  \**************************/
/*! exports provided: initPdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPdp\", function() { return initPdp; });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./source/js/cart.js\");\n\nconst initPdp = () => {\n  const pdpWrapper = $('.laoli-pdp');\n\n  if (!pdpWrapper.length) {\n    return;\n  }\n\n  const cartCount = $('.js-cart-count');\n  const gallery = $('.laoli-pdp-gallery');\n  const galleryWrapper = gallery.find('.laoli-pdp-gallery-wrapper');\n  const back = $('.laoli-pdp-desktop-back');\n  const detailsButton = $('.js-details-button');\n  const detailsWrapper = $('.js-details-wrapper');\n  const careButton = $('.js-care-button');\n  const careWrapper = $('.js-care-wrapper');\n  const forms = $('.js-cart-form');\n  detailsButton.click(function () {\n    detailsButton.addClass('controls-item-active');\n    careButton.removeClass('controls-item-active');\n    detailsWrapper.show();\n    careWrapper.hide();\n  });\n  careButton.click(function () {\n    detailsButton.removeClass('controls-item-active');\n    careButton.addClass('controls-item-active');\n    detailsWrapper.hide();\n    careWrapper.show();\n  });\n  $(\".laoli-pdp-mobile-carousel\").owlCarousel({\n    margin: 15,\n    autoWidth: true,\n    dots: true,\n    center: true,\n    smartSpeed: 500,\n    animateIn: 'ease-out',\n    animateOut: 'ease-out'\n  });\n\n  const showGallery = function () {\n    gallery.fadeIn(200);\n  };\n\n  const hideGallery = function () {\n    galleryWrapper.animate({\n      scrollTop: 0\n    }, 0);\n    gallery.fadeOut(200);\n  };\n\n  $('.laoli-pdp-desktop-pic').click(function () {\n    showGallery();\n    const index = $(this).attr('data-index');\n    const attr = \"picture[data-index=\" + index + \"]\";\n    const targetPic = gallery.find(attr);\n    let offset = targetPic.position().top;\n\n    if (index == 1) {\n      offset = 0;\n    }\n\n    galleryWrapper.animate({\n      scrollTop: offset\n    }, 0);\n    gallery.click(function (e) {\n      const target = $(e.target);\n\n      if (!target.closest('form').length) {\n        hideGallery();\n      }\n    });\n  });\n  forms.submit(function (e) {\n    e.preventDefault();\n    const form = $(this);\n    const productId = form.find('input[name=\"id\"]').val();\n    let formData = {\n      'items': [{\n        'id': productId,\n        'quantity': 1\n      }]\n    };\n    fetch(window.Shopify.routes.root + 'cart/add.js', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    }).then(response => {\n      if (response.status === 200) {\n        let cartCountText = cartCount.first().text();\n\n        if (cartCountText) {\n          cartCountText = cartCountText.replace(/\\s/g, '');\n          cartCountText = cartCountText.replace(/[{()}]/g, '');\n          cartCount.text(' (' + (Number(cartCountText) + 1) + ')');\n        } else {\n          cartCount.text(' (1)');\n        }\n\n        Object(_cart__WEBPACK_IMPORTED_MODULE_0__[\"openCart\"])();\n      }\n\n      return response.json();\n    }).catch(error => {\n      console.error('Error:', error);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./source/js/pdp.js?");

/***/ }),

/***/ "./source/js/region.js":
/*!*****************************!*\
  !*** ./source/js/region.js ***!
  \*****************************/
/*! exports provided: initRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRegions\", function() { return initRegions; });\nconst initRegions = () => {\n  const regionButtons = $('.js-region');\n\n  if (!regionButtons.length) {\n    return;\n  }\n\n  const regionPopup = $('.laoli-region');\n  const closeButton = $('.js-region-close');\n  const firstStep = $('.laoli-region-first');\n  const secondStep = $('.laoli-region-second');\n  const changeButton = $('.laoli-region-change');\n  const selector = $('.laoli-region-selector-inner');\n  const items = $('.laoli-region-selector-item');\n  const input = $('.js-region-input');\n\n  const closePopup = function () {\n    regionPopup.hide();\n    firstStep.show();\n    secondStep.hide();\n  };\n\n  regionButtons.click(function () {\n    regionPopup.show();\n    $('.laoli-menu').removeClass('open');\n  });\n  closeButton.click(function () {\n    closePopup();\n  });\n  changeButton.click(function () {\n    firstStep.hide();\n    secondStep.show();\n  });\n  selector.click(function (e) {\n    const target = $(e.target);\n\n    if (target.hasClass('laoli-region-selector-item')) {\n      items.removeClass('laoli-region-selector-item-active');\n      target.addClass('laoli-region-selector-item-active');\n      input.val(target.attr('data-value'));\n    }\n  });\n};\n\n//# sourceURL=webpack:///./source/js/region.js?");

/***/ }),

/***/ "./source/js/registration.js":
/*!***********************************!*\
  !*** ./source/js/registration.js ***!
  \***********************************/
/*! exports provided: initRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRegistration\", function() { return initRegistration; });\nconst initRegistration = () => {\n  const registration = $('.laoli-registration');\n  const list_id = 'SdcCiU';\n\n  if (!registration.length) {\n    return;\n  }\n\n  const buttons = $('.js-show-subscription');\n  const closeButton = registration.find('.laoli-registration-close');\n  const form = registration.find('form');\n  buttons.click(function () {\n    registration.addClass('open');\n  });\n  closeButton.click(function () {\n    registration.removeClass('open');\n  });\n  form.submit(function (e) {\n    e.preventDefault();\n    const name = form.find('.laoli-registration-input-name').val();\n    const email = form.find('.laoli-registration-input-email').val();\n    var settings = {\n      \"async\": true,\n      \"crossDomain\": true,\n      \"url\": \"https://manage.kmail-lists.com/ajax/subscriptions/subscribe\",\n      \"method\": \"POST\",\n      \"headers\": {\n        \"content-type\": \"application/x-www-form-urlencoded\",\n        \"cache-control\": \"no-cache\"\n      },\n      \"data\": {\n        \"g\": list_id,\n        \"$fields\": \"$first_name\",\n        \"email\": email,\n        \"$first_name\": name\n      }\n    };\n    $.ajax(settings).done(function (response) {\n      if (response.success) {\n        form.hide();\n        registration.find('.laoli-registration-form-success').show();\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack:///./source/js/registration.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./source/js/menu.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./source/js/grid.js\");\n/* harmony import */ var _pdp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdp */ \"./source/js/pdp.js\");\n/* harmony import */ var _pdp_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdp-select */ \"./source/js/pdp-select.js\");\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner */ \"./source/js/banner.js\");\n/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration */ \"./source/js/registration.js\");\n/* harmony import */ var _languageSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languageSwitcher */ \"./source/js/languageSwitcher.js\");\n/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq */ \"./source/js/faq.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./region */ \"./source/js/region.js\");\n\n\n\n\n\n\n\n\n\n$(document).ready(function () {\n  Object(_menu__WEBPACK_IMPORTED_MODULE_0__[\"initMenu\"])();\n  Object(_grid__WEBPACK_IMPORTED_MODULE_1__[\"initGrid\"])();\n  Object(_pdp__WEBPACK_IMPORTED_MODULE_2__[\"initPdp\"])();\n  Object(_pdp_select__WEBPACK_IMPORTED_MODULE_3__[\"initPdpSelect\"])();\n  Object(_banner__WEBPACK_IMPORTED_MODULE_4__[\"initBanner\"])();\n  Object(_registration__WEBPACK_IMPORTED_MODULE_5__[\"initRegistration\"])();\n  Object(_languageSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"initLanguageSwitcher\"])();\n  Object(_faq__WEBPACK_IMPORTED_MODULE_7__[\"initFaq\"])();\n  Object(_region__WEBPACK_IMPORTED_MODULE_8__[\"initRegions\"])();\n});\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ }),

/***/ "./source/less/index.less":
/*!********************************!*\
  !*** ./source/less/index.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./source/less/index.less\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./source/less/index.less?");

/***/ })

/******/ });