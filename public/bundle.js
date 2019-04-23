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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// eslint-disable-next-line no-new
new _components_PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__["default"](
  document.querySelector('[data-component="PhonesPage"]'),
);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesPage; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _PhoneViewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _ShoppingCart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _api_phones_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);








class PhonesPage extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.state = {
      phones: [],
      selectedPhone: null,
      items: {

      },
    };

    this.onPhoneSelected = phoneId => this.selectedPhone(phoneId);
    this.onAdd = phoneId => this.addItem(phoneId);
    this.onBack = () => this.unselectedPhone();
    this.onRemove = itemToRemove => this.removeItem(itemToRemove);

    this.render();

    Object(_api_phones_js__WEBPACK_IMPORTED_MODULE_5__["getAll"])()
      .then((phones) => {
        this.setState({ phones });
      });
  }

  addItem(item) {
    const oldItems = this.state.items;
    const items = {
      ...oldItems,
      [item]: oldItems[item] ? oldItems[item] + 1 : 1,
    };

    this.setState({ items });
  }

  removeItem(itemToRemove) {
    const newItems = { ...this.state.items };
    delete newItems[itemToRemove];

    this.setState({
      items: newItems,
    });
  }

  selectedPhone(phoneId) {
    Object(_api_phones_js__WEBPACK_IMPORTED_MODULE_5__["getById"])(phoneId)
      .then((phone) => {
        this.setState({ selectedPhone: phone });
      });
  }

  unselectedPhone() {
    this.setState({ selectedPhone: null });
  }

  init() {
    this.initComponent(_PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      phones: this.state.phones,
      onPhoneSelected: this.onPhoneSelected,
      onAdd: this.onAdd,
    });

    this.initComponent(_PhoneViewer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      phone: this.state.selectedPhone,
      onBack: this.onBack,
      onAdd: this.onAdd,
    });

    this.initComponent(_ShoppingCart_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: this.state.items,
      onRemove: this.onRemove,
    });

    this.initComponent(_Filter_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <div data-component="Filter"></div>
          </section>
  
          <section>
            <div data-component="ShoppingCart"></div>
          </section>
        </div>
  
        <!--Main content-->
        <div class="col-md-10">
          ${this.state.selectedPhone ? `
            <div data-component="PhoneViewer"></div>
          ` : `
            <div data-component="PhonesCatalog"></div>
          `}
        </div>
      </div>
    `;

    this.init();
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* global _ */

class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;

    this.components = {};
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render();
  }

  on(eventName, elementName, callback) {
    this.element.addEventListener(eventName, (event) => {
      const delegateTarget = event.target.closest(
        `[data-element="${elementName}"]`,
      );

      if (!delegateTarget) {
        return;
      }
      // eslint-disable-next-line no-param-reassign
      event.delegateTarget = delegateTarget;
      callback(event);
    });
  }

  initComponent(Constructor, props = {}) {
    const componentName = Constructor.name;
    const element = this.element.querySelector(`[data-component="${componentName}"]`);

    if (!element) {
      return;
    }

    const current = this.components[componentName];

    if (!current || !_.isEqual(current.props, props)) {
      this.components[componentName] = new Constructor(element, props);
    } else {
      element.parentNode.replaceChild(current.element, element);
    }
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesCatalog; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class PhonesCatalog extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'PhoneLink', (event) => {
      const { phoneId } = event.delegateTarget.dataset;
      this.props.onPhoneSelected(phoneId);
    });

    this.on('click', 'AddButton', (event) => {
      const { phoneId } = event.delegateTarget.dataset;
      this.props.onAdd(phoneId);
    });
  }


  render() {
    this.element.innerHTML = `
        <div>
            <ul class="phones">
              ${this.props.phones.map(phone => `
              <li class="thumbnail">
                <a 
                  data-element="PhoneLink"
                  data-phone-id="${phone.id}" 
                  href="#!/phones/${phone.id}" 
                  class="thumb"
                >
                  <img alt="${phone.name}" src="${phone.imageUrl}">
                </a>
    
                <div class="phones__btn-buy-wrapper">
                  <a 
                  data-element="AddButton"
                  data-phone-id="${phone.id}" 
                  class="btn btn-success"              
                  >
                    Add
                  </a>
                </div>
    
                <a 
                  data-element="PhoneLink"
                  data-phone-id="${phone.id}" 
                  href="#!/phones/${phone.id}"
                >
                  ${phone.name}
                </a>
                
                <p>${phone.snippet}</p>
              </li>
              `).join('')}
            </ul>
        </div>
    `;
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneViewer; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



class PhoneViewer extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.state = {
      selectedImage: this.props.phone.images[0],
    };

    this.render();

    this.on('click', 'BackButton', () => {
      this.props.onBack();
    });

    this.on('click', 'AddButton', () => {
      this.props.onAdd(this.props.phone.id);
    });

    this.on('click', 'SmallImage', (event) => {
      const { imageUrl } = event.delegateTarget.dataset;
      this.setState({
        selectedImage: imageUrl,
      });
    });
  }

  render() {
    const { phone } = this.props;

    this.element.innerHTML = `
          <div>
        
            <img class="phone" src="${this.state.selectedImage}">
        
            <button data-element="BackButton">Back</button>
            <button data-element="AddButton">Add to basket</button>
        
        
            <h1>${phone.name}</h1>
        
            <p>${phone.description}</p>
        
            <ul class="phone-thumbs">
              ${phone.images.map(imageUrl => `
                <li data-element="SmallImage" data-image-url="${imageUrl}">
                  <img src="${imageUrl}">
                </li>
              `).join('')}
            </ul>
        
            <ul class="specs">
              <li>
                <span>Availability and Networks</span>
                <dl>
                  <dt>Availability</dt>
                  <dd></dd>
                </dl>
              </li>
              <li>
                <span>Battery</span>
                <dl>
                  <dt>Type</dt>
                  <dd>Other ( mAH)</dd>
                  <dt>Talk Time</dt>
                  <dd>24 hours</dd>
                  <dt>Standby time (max)</dt>
                  <dd>336 hours</dd>
                </dl>
              </li>
              <li>
                <span>Storage and Memory</span>
                <dl>
                  <dt>RAM</dt>
                  <dd>1000MB</dd>
                  <dt>Internal Storage</dt>
                  <dd>32000MB</dd>
                </dl>
              </li>
              <li>
                <span>Connectivity</span>
                <dl>
                  <dt>Network Support</dt>
                  <dd></dd>
                  <dt>WiFi</dt>
                  <dd>802.11 b/g/n</dd>
                  <dt>Bluetooth</dt>
                  <dd>Bluetooth 2.1</dd>
                  <dt>Infrared</dt>
                  <dd>✘</dd>
                  <dt>GPS</dt>
                  <dd>✓</dd>
                </dl>
              </li>
              <li>
                <span>Android</span>
                <dl>
                  <dt>OS Version</dt>
                  <dd>Android 3.0</dd>
                  <dt>UI</dt>
                  <dd>Honeycomb</dd>
                </dl>
              </li>
              <li>
                <span>Size and Weight</span>
                <dl>
                  <dt>Dimensions</dt>
                  <dd>249.1 mm (w)</dd>
                  <dd>167.8 mm (h)</dd>
                  <dd>12.9 mm (d)</dd>
                  <dt>Weight</dt>
                  <dd>708.0 grams</dd>
                </dl>
              </li>
              <li>
                <span>Display</span>
                <dl>
                  <dt>Screen size</dt>
                  <dd>10.1 inches</dd>
                  <dt>Screen resolution</dt>
                  <dd>WXGA (1200 x 800)</dd>
                  <dt>Touch screen</dt>
                  <dd>✓</dd>
                </dl>
              </li>
              <li>
                <span>Hardware</span>
                <dl>
                  <dt>CPU</dt>
                  <dd>1 GHz Dual Core Tegra 2</dd>
                  <dt>USB</dt>
                  <dd>USB 2.0</dd>
                  <dt>Audio / headphone jack</dt>
                  <dd>3.5mm</dd>
                  <dt>FM Radio</dt>
                  <dd>✘</dd>
                  <dt>Accelerometer</dt>
                  <dd>✓</dd>
                </dl>
              </li>
              <li>
                <span>Camera</span>
                <dl>
                  <dt>Primary</dt>
                  <dd>5.0 megapixels</dd>
                  <dt>Features</dt>
                  <dd>Flash, Video</dd>
                </dl>
              </li>
              <li>
                <span>Additional Features</span>
                <dd>Sensors: proximity, ambient light, barometer, gyroscope</dd>
              </li>
            </ul>
      </div>
    `;
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShoppingCart; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class ShoppingCart extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'RemoveButton', (event) => {
      const { item } = event.delegateTarget.dataset;
      this.props.onRemove(item);
    });
  }

  render() {
    this.element.innerHTML = `
      <div>
        <h4>Shopping Cart</h4>
        <ul>
          ${Object.keys(this.props.items).map(item => `
          
            <li>
              ${item} - ${this.props.items[item]}
              <button
                data-element="RemoveButton"
                data-item="${item}"
              >X</button>
            </li> 
          
          `).join('')}
        </ul>
      </div>
    `;
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
class Filter {
  constructor(element) {
    this.element = element;

    this.render();
  }

  render() {
    this.element.innerHTML = `
          <div class="Filter">
              <p>
                Search:
                <input>
              </p>
                
              <p>
                Sort by:
                <select>
                  <option value="name">Alphabetical</option>
                  <option value="age">Newest</option>
                </select>
              </p>
          </div>
        `;
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
const API_URL = 'https://mauricelemon.github.io/js-20190221/api';

const getAll = async () => {
  try {
    const response = await fetch(`${API_URL}/phones.json`);
    const data = await response.json();
    return data;
  } catch (e) {
    return [];
  }
};

const getById = (phoneId) => (
  fetch(`${API_URL}/phones/${phoneId}.json`)
    .then(response => response.json())
    .catch(() => 0)
);


/***/ })
/******/ ]);