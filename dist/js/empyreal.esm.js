function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/*
 * anime.js v3.2.0
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  var functionEasings = {
    Sine: function () {
      return function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function () {
      return function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function () {
      return function (t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function () {
      return function (t) {
        var pow2,
            b = 4;

        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function (amplitude, period) {
      if (amplitude === void 0) amplitude = 1;
      if (period === void 0) period = .5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () {
      return function (t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;

    eases['easeOut' + name] = function (a, b) {
      return function (t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };

    eases['easeInOut' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };
  });
  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return applyArguments(ease, args);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * svg.w;

    case 'y':
      return (p.y - svg.y) * svg.h;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function (i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop(i);

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function (anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = function () {
  function play() {
    raf = requestAnimationFrame(step);
  }

  function step(t) {
    var activeInstancesLength = activeInstances.length;

    if (activeInstancesLength) {
      var i = 0;

      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];

        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);

          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }

        i++;
      }

      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }

  return play;
}();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) {
      return ins.pause();
    });
    pausedInstances = activeInstances.slice(0);
    anime.running = activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) {
      return ins.play();
    });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }

    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (!instance.remaining) {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();

    if (!raf) {
      engine();
    }
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);

    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);

      if (!childAnimations.length && !child.children.length) {
        children.splice(c, 1);
      }
    }

    if (!animations.length && !children.length) {
      instance.pause();
    }
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.2.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var aos = createCommonjsModule(function (module, exports) {
  !function (e, t) {
     module.exports = t() ;
  }(commonjsGlobal, function () {
    return function (e) {
      function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
          exports: {},
          id: o,
          loaded: !1
        };
        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
      }

      var n = {};
      return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([function (e, t, n) {

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }

        return e;
      },
          r = n(1),
          a = (o(r), n(6)),
          u = o(a),
          c = n(7),
          s = o(c),
          f = n(8),
          d = o(f),
          l = n(9),
          p = o(l),
          m = n(10),
          b = o(m),
          v = n(11),
          y = o(v),
          g = n(14),
          h = o(g),
          w = [],
          k = !1,
          x = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        startEvent: "DOMContentLoaded",
        throttleDelay: 99,
        debounceDelay: 50,
        disableMutationObserver: !1
      },
          j = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
      },
          O = function () {
        w = (0, h.default)(), j();
      },
          M = function () {
        w.forEach(function (e, t) {
          e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
        });
      },
          S = function (e) {
        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
      },
          _ = function (e) {
        x = i(x, e), w = (0, h.default)();
        var t = document.all && !window.atob;
        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
          j(!0);
        }) : document.addEventListener(x.startEvent, function () {
          j(!0);
        }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
          (0, b.default)(w, x.once);
        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
      };

      e.exports = {
        init: _,
        refresh: j,
        refreshHard: O
      };
    }, function (e, t) {},,,,, function (e, t) {
      (function (t) {

        function n(e, t, n) {
          function o(t) {
            var n = b,
                o = v;
            return b = v = void 0, k = t, g = e.apply(o, n);
          }

          function r(e) {
            return k = e, h = setTimeout(f, t), M ? o(e) : g;
          }

          function a(e) {
            var n = e - w,
                o = e - k,
                i = t - n;
            return S ? j(i, y - o) : i;
          }

          function c(e) {
            var n = e - w,
                o = e - k;
            return void 0 === w || n >= t || n < 0 || S && o >= y;
          }

          function f() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
          }

          function d(e) {
            return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
          }

          function l() {
            void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
          }

          function p() {
            return void 0 === h ? g : d(O());
          }

          function m() {
            var e = O(),
                n = c(e);

            if (b = arguments, v = this, w = e, n) {
              if (void 0 === h) return r(w);
              if (S) return h = setTimeout(f, t), o(w);
            }

            return void 0 === h && (h = setTimeout(f, t)), g;
          }

          var b,
              v,
              y,
              g,
              h,
              w,
              k = 0,
              M = !1,
              S = !1,
              _ = !0;

          if ("function" != typeof e) throw new TypeError(s);
          return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
        }

        function o(e, t, o) {
          var r = !0,
              a = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
            leading: r,
            maxWait: t,
            trailing: a
          });
        }

        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }

        function r(e) {
          return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
        }

        function a(e) {
          return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
        }

        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return f;

          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }

          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
        }

        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        },
            s = "Expected a function",
            f = NaN,
            d = "[object Symbol]",
            l = /^\s+|\s+$/g,
            p = /^[-+]0x[0-9a-f]+$/i,
            m = /^0b[01]+$/i,
            b = /^0o[0-7]+$/i,
            v = parseInt,
            y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
            g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
            h = y || g || Function("return this")(),
            w = Object.prototype,
            k = w.toString,
            x = Math.max,
            j = Math.min,
            O = function () {
          return h.Date.now();
        };

        e.exports = o;
      }).call(t, function () {
        return this;
      }());
    }, function (e, t) {
      (function (t) {

        function n(e, t, n) {
          function i(t) {
            var n = b,
                o = v;
            return b = v = void 0, O = t, g = e.apply(o, n);
          }

          function r(e) {
            return O = e, h = setTimeout(f, t), M ? i(e) : g;
          }

          function u(e) {
            var n = e - w,
                o = e - O,
                i = t - n;
            return S ? x(i, y - o) : i;
          }

          function s(e) {
            var n = e - w,
                o = e - O;
            return void 0 === w || n >= t || n < 0 || S && o >= y;
          }

          function f() {
            var e = j();
            return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
          }

          function d(e) {
            return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
          }

          function l() {
            void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
          }

          function p() {
            return void 0 === h ? g : d(j());
          }

          function m() {
            var e = j(),
                n = s(e);

            if (b = arguments, v = this, w = e, n) {
              if (void 0 === h) return r(w);
              if (S) return h = setTimeout(f, t), i(w);
            }

            return void 0 === h && (h = setTimeout(f, t)), g;
          }

          var b,
              v,
              y,
              g,
              h,
              w,
              O = 0,
              M = !1,
              S = !1,
              _ = !0;

          if ("function" != typeof e) throw new TypeError(c);
          return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
        }

        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }

        function i(e) {
          return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
        }

        function r(e) {
          return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
        }

        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return s;

          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }

          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
        }

        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        },
            c = "Expected a function",
            s = NaN,
            f = "[object Symbol]",
            d = /^\s+|\s+$/g,
            l = /^[-+]0x[0-9a-f]+$/i,
            p = /^0b[01]+$/i,
            m = /^0o[0-7]+$/i,
            b = parseInt,
            v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
            y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
            g = v || y || Function("return this")(),
            h = Object.prototype,
            w = h.toString,
            k = Math.max,
            x = Math.min,
            j = function () {
          return g.Date.now();
        };

        e.exports = n;
      }).call(t, function () {
        return this;
      }());
    }, function (e, t) {

      function n(e) {
        var t = void 0,
            o = void 0,
            i = void 0;

        for (t = 0; t < e.length; t += 1) {
          if (o = e[t], o.dataset && o.dataset.aos) return !0;
          if (i = o.children && n(o.children)) return !0;
        }

        return !1;
      }

      function o() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }

      function i() {
        return !!o();
      }

      function r(e, t) {
        var n = window.document,
            i = o(),
            r = new i(a);
        u = t, r.observe(n.documentElement, {
          childList: !0,
          subtree: !0,
          removedNodes: !0
        });
      }

      function a(e) {
        e && e.forEach(function (e) {
          var t = Array.prototype.slice.call(e.addedNodes),
              o = Array.prototype.slice.call(e.removedNodes),
              i = t.concat(o);
          if (n(i)) return u();
        });
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var u = function () {};

      t.default = {
        isSupported: i,
        ready: r
      };
    }, function (e, t) {

      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }

        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      }(),
          r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          s = function () {
        function e() {
          n(this, e);
        }

        return i(e, [{
          key: "phone",
          value: function () {
            var e = o();
            return !(!r.test(e) && !a.test(e.substr(0, 4)));
          }
        }, {
          key: "mobile",
          value: function () {
            var e = o();
            return !(!u.test(e) && !c.test(e.substr(0, 4)));
          }
        }, {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          }
        }]), e;
      }();

      t.default = new s();
    }, function (e, t) {

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = function (e, t, n) {
        var o = e.node.getAttribute("data-aos-once");
        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
      },
          o = function (e, t) {
        var o = window.pageYOffset,
            i = window.innerHeight;
        e.forEach(function (e, r) {
          n(e, i + o, t);
        });
      };

      t.default = o;
    }, function (e, t, n) {

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var i = n(12),
          r = o(i),
          a = function (e, t) {
        return e.forEach(function (e, n) {
          e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
        }), e;
      };

      t.default = a;
    }, function (e, t, n) {

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var i = n(13),
          r = o(i),
          a = function (e, t) {
        var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
          offset: e.getAttribute("data-aos-offset"),
          anchor: e.getAttribute("data-aos-anchor"),
          anchorPlacement: e.getAttribute("data-aos-anchor-placement")
        };

        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
          case "top-bottom":
            break;

          case "center-bottom":
            n += e.offsetHeight / 2;
            break;

          case "bottom-bottom":
            n += e.offsetHeight;
            break;

          case "top-center":
            n += i / 2;
            break;

          case "bottom-center":
            n += i / 2 + e.offsetHeight;
            break;

          case "center-center":
            n += i / 2 + e.offsetHeight / 2;
            break;

          case "top-top":
            n += i;
            break;

          case "bottom-top":
            n += e.offsetHeight + i;
            break;

          case "center-top":
            n += e.offsetHeight / 2 + i;
        }

        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
      };

      t.default = a;
    }, function (e, t) {

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = function (e) {
        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;

        return {
          top: n,
          left: t
        };
      };

      t.default = n;
    }, function (e, t) {

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = function (e) {
        return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
          return {
            node: e
          };
        });
      };

      t.default = n;
    }]);
  });
});
var AOS = unwrapExports(aos);
var aos_1 = aos.AOS;

var waves = createCommonjsModule(function (module, exports) {

  (function (window, factory) {
    // to root via `this`.

    {
        module.exports = factory.call(window);
      }
  })(typeof commonjsGlobal === 'object' ? commonjsGlobal : commonjsGlobal, function () {

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);
    var toString = Object.prototype.toString;
    var isTouchAvailable = ('ontouchstart' in window); // Find exact position of element

    function isWindow(obj) {
      return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
      return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function isObject(value) {
      var type = typeof value;
      return type === 'function' || type === 'object' && !!value;
    }

    function isDOMNode(obj) {
      return isObject(obj) && obj.nodeType > 0;
    }

    function getWavesElements(nodes) {
      var stringRepr = toString.call(nodes);

      if (stringRepr === '[object String]') {
        return $$(nodes);
      } else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
        return nodes;
      } else if (isDOMNode(nodes)) {
        return [nodes];
      }

      return [];
    }

    function offset(elem) {
      var docElem,
          win,
          box = {
        top: 0,
        left: 0
      },
          doc = elem && elem.ownerDocument;
      docElem = doc.documentElement;

      if (typeof elem.getBoundingClientRect !== typeof undefined) {
        box = elem.getBoundingClientRect();
      }

      win = getWindow(doc);
      return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      };
    }

    function convertStyle(styleObj) {
      var style = '';

      for (var prop in styleObj) {
        if (styleObj.hasOwnProperty(prop)) {
          style += prop + ':' + styleObj[prop] + ';';
        }
      }

      return style;
    }

    var Effect = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function (e, element, velocity) {
        // Disable right click
        if (e.button === 2) {
          return false;
        }

        element = element || this; // Create ripple

        var ripple = document.createElement('div');
        ripple.className = 'waves-ripple waves-rippling';
        element.appendChild(ripple); // Get click coordinate and element width

        var pos = offset(element);
        var relativeY = 0;
        var relativeX = 0; // Support for touch devices

        if ('touches' in e && e.touches.length) {
          relativeY = e.touches[0].pageY - pos.top;
          relativeX = e.touches[0].pageX - pos.left;
        } //Normal case
        else {
            relativeY = e.pageY - pos.top;
            relativeX = e.pageX - pos.left;
          } // Support for synthetic events


        relativeX = relativeX >= 0 ? relativeX : 0;
        relativeY = relativeY >= 0 ? relativeY : 0;
        var scale = 'scale(' + element.clientWidth / 100 * 3 + ')';
        var translate = 'translate(0,0)';

        if (velocity) {
          translate = 'translate(' + velocity.x + 'px, ' + velocity.y + 'px)';
        } // Attach data to element


        ripple.setAttribute('data-hold', Date.now());
        ripple.setAttribute('data-x', relativeX);
        ripple.setAttribute('data-y', relativeY);
        ripple.setAttribute('data-scale', scale);
        ripple.setAttribute('data-translate', translate); // Set ripple position

        var rippleStyle = {
          top: relativeY + 'px',
          left: relativeX + 'px'
        };
        ripple.classList.add('waves-notransition');
        ripple.setAttribute('style', convertStyle(rippleStyle));
        ripple.classList.remove('waves-notransition'); // Scale the ripple

        rippleStyle['-webkit-transform'] = scale + ' ' + translate;
        rippleStyle['-moz-transform'] = scale + ' ' + translate;
        rippleStyle['-ms-transform'] = scale + ' ' + translate;
        rippleStyle['-o-transform'] = scale + ' ' + translate;
        rippleStyle.transform = scale + ' ' + translate;
        rippleStyle.opacity = '1';
        var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
        rippleStyle['-webkit-transition-duration'] = duration + 'ms';
        rippleStyle['-moz-transition-duration'] = duration + 'ms';
        rippleStyle['-o-transition-duration'] = duration + 'ms';
        rippleStyle['transition-duration'] = duration + 'ms';
        ripple.setAttribute('style', convertStyle(rippleStyle));
      },
      hide: function (e, element) {
        element = element || this;
        var ripples = element.getElementsByClassName('waves-rippling');

        for (var i = 0, len = ripples.length; i < len; i++) {
          removeRipple(e, element, ripples[i]);
        }

        if (isTouchAvailable) {
          element.removeEventListener('touchend', Effect.hide);
          element.removeEventListener('touchcancel', Effect.hide);
        }

        element.removeEventListener('mouseup', Effect.hide);
        element.removeEventListener('mouseleave', Effect.hide);
      }
    };
    /**
     * Collection of wrapper for HTML element that only have single tag
     * like <input> and <img>
     */

    var TagWrapper = {
      // Wrap <input> tag so it can perform the effect
      input: function (element) {
        var parent = element.parentNode; // If input already have parent just pass through

        if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
          return;
        } // Put element class and style to the specified parent


        var wrapper = document.createElement('i');
        wrapper.className = element.className + ' waves-input-wrapper';
        element.className = 'waves-button-input'; // Put element as child

        parent.replaceChild(wrapper, element);
        wrapper.appendChild(element); // Apply element color and background color to wrapper

        var elementStyle = window.getComputedStyle(element, null);
        var color = elementStyle.color;
        var backgroundColor = elementStyle.backgroundColor;
        wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);
        element.setAttribute('style', 'background-color:rgba(0,0,0,0);');
      },
      // Wrap <img> tag so it can perform the effect
      img: function (element) {
        var parent = element.parentNode; // If input already have parent just pass through

        if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
          return;
        } // Put element as child


        var wrapper = document.createElement('i');
        parent.replaceChild(wrapper, element);
        wrapper.appendChild(element);
      }
    };
    /**
     * Hide the effect and remove the ripple. Must be
     * a separate function to pass the JSLint...
     */

    function removeRipple(e, el, ripple) {
      // Check if the ripple still exist
      if (!ripple) {
        return;
      }

      ripple.classList.remove('waves-rippling');
      var relativeX = ripple.getAttribute('data-x');
      var relativeY = ripple.getAttribute('data-y');
      var scale = ripple.getAttribute('data-scale');
      var translate = ripple.getAttribute('data-translate'); // Get delay beetween mousedown and mouse leave

      var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
      var delay = 350 - diff;

      if (delay < 0) {
        delay = 0;
      }

      if (e.type === 'mousemove') {
        delay = 150;
      } // Fade out ripple after delay


      var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
      setTimeout(function () {
        var style = {
          top: relativeY + 'px',
          left: relativeX + 'px',
          opacity: '0',
          // Duration
          '-webkit-transition-duration': duration + 'ms',
          '-moz-transition-duration': duration + 'ms',
          '-o-transition-duration': duration + 'ms',
          'transition-duration': duration + 'ms',
          '-webkit-transform': scale + ' ' + translate,
          '-moz-transform': scale + ' ' + translate,
          '-ms-transform': scale + ' ' + translate,
          '-o-transform': scale + ' ' + translate,
          'transform': scale + ' ' + translate
        };
        ripple.setAttribute('style', convertStyle(style));
        setTimeout(function () {
          try {
            el.removeChild(ripple);
          } catch (e) {
            return false;
          }
        }, duration);
      }, delay);
    }
    /**
     * Disable mousedown event for 500ms during and after touch
     */


    var TouchHandler = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function (e) {
        var allow = true;

        if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
          allow = false;
        }

        return allow;
      },
      registerEvent: function (e) {
        var eType = e.type;

        if (eType === 'touchstart') {
          TouchHandler.touches += 1; // push
        } else if (/^(touchend|touchcancel)$/.test(eType)) {
          setTimeout(function () {
            if (TouchHandler.touches) {
              TouchHandler.touches -= 1; // pop after 500ms
            }
          }, 500);
        }
      }
    };
    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */

    function getWavesEffectElement(e) {
      if (TouchHandler.allowEvent(e) === false) {
        return null;
      }

      var element = null;
      var target = e.target || e.srcElement;

      while (target.parentElement) {
        if (!(target instanceof SVGElement) && target.classList.contains('waves-effect')) {
          element = target;
          break;
        }

        target = target.parentElement;
      }

      return element;
    }
    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */


    function showEffect(e) {
      // Disable effect if element has "disabled" property on it
      // In some cases, the event is not triggered by the current element
      // if (e.target.getAttribute('disabled') !== null) {
      //     return;
      // }
      var element = getWavesEffectElement(e);

      if (element !== null) {
        // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
        if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
          return;
        }

        TouchHandler.registerEvent(e);

        if (e.type === 'touchstart' && Effect.delay) {
          var hidden = false;
          var timer = setTimeout(function () {
            timer = null;
            Effect.show(e, element);
          }, Effect.delay);

          var hideEffect = function (hideEvent) {
            // if touch hasn't moved, and effect not yet started: start effect now
            if (timer) {
              clearTimeout(timer);
              timer = null;
              Effect.show(e, element);
            }

            if (!hidden) {
              hidden = true;
              Effect.hide(hideEvent, element);
            }

            removeListeners();
          };

          var touchMove = function (moveEvent) {
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }

            hideEffect(moveEvent);
            removeListeners();
          };

          element.addEventListener('touchmove', touchMove, false);
          element.addEventListener('touchend', hideEffect, false);
          element.addEventListener('touchcancel', hideEffect, false);

          var removeListeners = function () {
            element.removeEventListener('touchmove', touchMove);
            element.removeEventListener('touchend', hideEffect);
            element.removeEventListener('touchcancel', hideEffect);
          };
        } else {
          Effect.show(e, element);

          if (isTouchAvailable) {
            element.addEventListener('touchend', Effect.hide, false);
            element.addEventListener('touchcancel', Effect.hide, false);
          }

          element.addEventListener('mouseup', Effect.hide, false);
          element.addEventListener('mouseleave', Effect.hide, false);
        }
      }
    }

    Waves.init = function (options) {
      var body = document.body;
      options = options || {};

      if ('duration' in options) {
        Effect.duration = options.duration;
      }

      if ('delay' in options) {
        Effect.delay = options.delay;
      }

      if (isTouchAvailable) {
        body.addEventListener('touchstart', showEffect, false);
        body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
        body.addEventListener('touchend', TouchHandler.registerEvent, false);
      }

      body.addEventListener('mousedown', showEffect, false);
    };
    /**
     * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
     * waves classes to a set of elements. Set drag to true if the ripple mouseover
     * or skimming effect should be applied to the elements.
     */


    Waves.attach = function (elements, classes) {
      elements = getWavesElements(elements);

      if (toString.call(classes) === '[object Array]') {
        classes = classes.join(' ');
      }

      classes = classes ? ' ' + classes : '';
      var element, tagName;

      for (var i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        tagName = element.tagName.toLowerCase();

        if (['input', 'img'].indexOf(tagName) !== -1) {
          TagWrapper[tagName](element);
          element = element.parentElement;
        }

        if (element.className.indexOf('waves-effect') === -1) {
          element.className += ' waves-effect' + classes;
        }
      }
    };
    /**
     * Cause a ripple to appear in an element via code.
     */


    Waves.ripple = function (elements, options) {
      elements = getWavesElements(elements);
      var elementsLen = elements.length;
      options = options || {};
      options.wait = options.wait || 0;
      options.position = options.position || null; // default = centre of element

      if (elementsLen) {
        var element,
            pos,
            off,
            centre = {},
            i = 0;
        var mousedown = {
          type: 'mousedown',
          button: 1
        };

        var hideRipple = function (mouseup, element) {
          return function () {
            Effect.hide(mouseup, element);
          };
        };

        for (; i < elementsLen; i++) {
          element = elements[i];
          pos = options.position || {
            x: element.clientWidth / 2,
            y: element.clientHeight / 2
          };
          off = offset(element);
          centre.x = off.left + pos.x;
          centre.y = off.top + pos.y;
          mousedown.pageX = centre.x;
          mousedown.pageY = centre.y;
          Effect.show(mousedown, element);

          if (options.wait >= 0 && options.wait !== null) {
            var mouseup = {
              type: 'mouseup',
              button: 1
            };
            setTimeout(hideRipple(mouseup, element), options.wait);
          }
        }
      }
    };
    /**
     * Remove all ripples from an element.
     */


    Waves.calm = function (elements) {
      elements = getWavesElements(elements);
      var mouseup = {
        type: 'mouseup',
        button: 1
      };

      for (var i = 0, len = elements.length; i < len; i++) {
        Effect.hide(mouseup, elements[i]);
      }
    };
    /**
     * Deprecated API fallback
     */


    Waves.displayEffect = function (options) {
      console.error('Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect');
      Waves.init(options);
    };

    return Waves;
  });
});

var cash_min = createCommonjsModule(function (module, exports) {
  /* MIT https://github.com/kenwheeler/cash */
  (function () {

    var e = {
      "class": "className",
      contenteditable: "contentEditable",
      "for": "htmlFor",
      readonly: "readOnly",
      maxlength: "maxLength",
      tabindex: "tabIndex",
      colspan: "colSpan",
      rowspan: "rowSpan",
      usemap: "useMap"
    };

    function g(a, b) {
      try {
        return a(b);
      } catch (c) {
        return b;
      }
    }

    var m = document,
        n = window,
        p = m.documentElement,
        r = m.createElement.bind(m),
        aa = r("div"),
        t = r("table"),
        ba = r("tbody"),
        ca = r("tr"),
        u = Array.isArray,
        v = Array.prototype,
        da = v.concat,
        w = v.filter,
        ea = v.indexOf,
        fa = v.map,
        ha = v.push,
        ia = v.slice,
        x = v.some,
        ja = v.splice,
        ka = /^#[\w-]*$/,
        la = /^\.[\w-]*$/,
        ma = /<.+>/,
        na = /^\w+$/;

    function y(a, b) {
      return a && (A(b) || B(b)) ? la.test(a) ? b.getElementsByClassName(a.slice(1)) : na.test(a) ? b.getElementsByTagName(a) : b.querySelectorAll(a) : [];
    }

    var C = function () {
      function a(a, c) {
        if (a) {
          if (a instanceof C) return a;
          var b = a;

          if (D(a)) {
            if (b = (c instanceof C ? c[0] : c) || m, b = ka.test(a) ? b.getElementById(a.slice(1)) : ma.test(a) ? oa(a) : y(a, b), !b) return;
          } else if (E(a)) return this.ready(a);

          if (b.nodeType || b === n) b = [b];
          this.length = b.length;
          a = 0;

          for (c = this.length; a < c; a++) this[a] = b[a];
        }
      }

      a.prototype.init = function (b, c) {
        return new a(b, c);
      };

      return a;
    }(),
        F = C.prototype,
        G = F.init;

    G.fn = G.prototype = F;
    F.length = 0;
    F.splice = ja;
    "function" === typeof Symbol && (F[Symbol.iterator] = v[Symbol.iterator]);

    F.map = function (a) {
      return G(da.apply([], fa.call(this, function (b, c) {
        return a.call(b, c, b);
      })));
    };

    F.slice = function (a, b) {
      return G(ia.call(this, a, b));
    };

    var pa = /-([a-z])/g;

    function H(a) {
      return a.replace(pa, function (a, c) {
        return c.toUpperCase();
      });
    }

    function I(a, b, c) {
      if (c) for (c = a.length; c-- && !1 !== b.call(a[c], c, a[c]););else {
        c = 0;

        for (var d = a.length; c < d && !1 !== b.call(a[c], c, a[c]); c++);
      }
      return a;
    }

    G.each = I;

    F.each = function (a) {
      return I(this, a);
    };

    F.removeProp = function (a) {
      return this.each(function (b, c) {
        delete c[e[a] || a];
      });
    };

    function J(a) {
      for (var b = 1; b < arguments.length; b++);

      b = arguments.length;
      if (!b) return {};
      if (1 === b) return J(G, a);

      for (var c = 1; c < b; c++) for (var d in arguments[c]) a[d] = arguments[c][d];

      return a;
    }

    G.extend = J;

    F.extend = function (a) {
      return J(F, a);
    };

    G.guid = 1;

    function qa(a, b) {
      var c = a && (a.matches || a.webkitMatchesSelector || a.msMatchesSelector);
      return !!c && !!b && c.call(a, b);
    }

    function K(a) {
      return !!a && a === a.window;
    }

    function A(a) {
      return !!a && 9 === a.nodeType;
    }

    function B(a) {
      return !!a && 1 === a.nodeType;
    }

    function E(a) {
      return "function" === typeof a;
    }

    function D(a) {
      return "string" === typeof a;
    }

    function ra(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    }

    G.isWindow = K;
    G.isFunction = E;
    G.isNumeric = ra;
    G.isArray = u;

    F.prop = function (a, b) {
      if (a) {
        if (D(a)) return a = e[a] || a, 2 > arguments.length ? this[0] && this[0][a] : this.each(function (c, h) {
          h[a] = b;
        });

        for (var c in a) this.prop(c, a[c]);

        return this;
      }
    };

    F.get = function (a) {
      if (void 0 === a) return ia.call(this);
      a = Number(a);
      return this[0 > a ? a + this.length : a];
    };

    F.eq = function (a) {
      return G(this.get(a));
    };

    F.first = function () {
      return this.eq(0);
    };

    F.last = function () {
      return this.eq(-1);
    };

    function L(a) {
      return D(a) ? function (b, c) {
        return qa(c, a);
      } : E(a) ? a : a instanceof C ? function (b, c) {
        return a.is(c);
      } : a ? function (b, c) {
        return c === a;
      } : function () {
        return !1;
      };
    }

    F.filter = function (a) {
      var b = L(a);
      return G(w.call(this, function (a, d) {
        return b.call(a, d, a);
      }));
    };

    function M(a, b) {
      return b ? a.filter(b) : a;
    }

    var sa = /\S+/g;

    function N(a) {
      return D(a) ? a.match(sa) || [] : [];
    }

    F.hasClass = function (a) {
      return !!a && x.call(this, function (b) {
        return B(b) && b.classList.contains(a);
      });
    };

    F.removeAttr = function (a) {
      var b = N(a);
      return this.each(function (a, d) {
        B(d) && I(b, function (a, b) {
          d.removeAttribute(b);
        });
      });
    };

    F.attr = function (a, b) {
      if (a) {
        if (D(a)) {
          if (2 > arguments.length) {
            if (!this[0] || !B(this[0])) return;
            var c = this[0].getAttribute(a);
            return null === c ? void 0 : c;
          }

          return void 0 === b ? this : null === b ? this.removeAttr(a) : this.each(function (c, h) {
            B(h) && h.setAttribute(a, b);
          });
        }

        for (c in a) this.attr(c, a[c]);

        return this;
      }
    };

    F.toggleClass = function (a, b) {
      var c = N(a),
          d = void 0 !== b;
      return this.each(function (a, f) {
        B(f) && I(c, function (a, c) {
          d ? b ? f.classList.add(c) : f.classList.remove(c) : f.classList.toggle(c);
        });
      });
    };

    F.addClass = function (a) {
      return this.toggleClass(a, !0);
    };

    F.removeClass = function (a) {
      return arguments.length ? this.toggleClass(a, !1) : this.attr("class", "");
    };

    function O(a, b, c, d) {
      for (var h = [], f = E(b), k = d && L(d), q = 0, R = a.length; q < R; q++) if (f) {
        var l = b(a[q]);
        l.length && ha.apply(h, l);
      } else for (l = a[q][b]; !(null == l || d && k(-1, l));) h.push(l), l = c ? l[b] : null;

      return h;
    }

    function P(a) {
      return 1 < a.length ? w.call(a, function (a, c, d) {
        return ea.call(d, a) === c;
      }) : a;
    }

    G.unique = P;

    F.add = function (a, b) {
      return G(P(this.get().concat(G(a, b).get())));
    };

    function Q(a, b, c) {
      if (B(a)) return a = n.getComputedStyle(a, null), c ? a.getPropertyValue(b) || void 0 : a[b];
    }

    function S(a, b) {
      return parseInt(Q(a, b), 10) || 0;
    }

    var T = /^--/,
        U = {},
        ta = aa.style,
        ua = ["webkit", "moz", "ms"];

    function va(a, b) {
      void 0 === b && (b = T.test(a));
      if (b) return a;

      if (!U[a]) {
        b = H(a);
        var c = "" + b[0].toUpperCase() + b.slice(1);
        b = (b + " " + ua.join(c + " ") + c).split(" ");
        I(b, function (b, c) {
          if (c in ta) return U[a] = c, !1;
        });
      }

      return U[a];
    }

    var wa = {
      animationIterationCount: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0
    };

    function xa(a, b, c) {
      void 0 === c && (c = T.test(a));
      return c || wa[a] || !ra(b) ? b : b + "px";
    }

    F.css = function (a, b) {
      if (D(a)) {
        var c = T.test(a);
        a = va(a, c);
        if (2 > arguments.length) return this[0] && Q(this[0], a, c);
        if (!a) return this;
        b = xa(a, b, c);
        return this.each(function (d, f) {
          B(f) && (c ? f.style.setProperty(a, b) : f.style[a] = b);
        });
      }

      for (var d in a) this.css(d, a[d]);

      return this;
    };

    var ya = /^\s+|\s+$/;

    function za(a, b) {
      a = a.dataset[b] || a.dataset[H(b)];
      return ya.test(a) ? a : g(JSON.parse, a);
    }

    F.data = function (a, b) {
      if (!a) {
        if (!this[0]) return;
        var c = {},
            d;

        for (d in this[0].dataset) c[d] = za(this[0], d);

        return c;
      }

      if (D(a)) return 2 > arguments.length ? this[0] && za(this[0], a) : void 0 === b ? this : this.each(function (c, d) {
        c = b;
        c = g(JSON.stringify, c);
        d.dataset[H(a)] = c;
      });

      for (d in a) this.data(d, a[d]);

      return this;
    };

    function Aa(a, b) {
      var c = a.documentElement;
      return Math.max(a.body["scroll" + b], c["scroll" + b], a.body["offset" + b], c["offset" + b], c["client" + b]);
    }

    function Ba(a, b) {
      return S(a, "border" + (b ? "Left" : "Top") + "Width") + S(a, "padding" + (b ? "Left" : "Top")) + S(a, "padding" + (b ? "Right" : "Bottom")) + S(a, "border" + (b ? "Right" : "Bottom") + "Width");
    }

    I([!0, !1], function (a, b) {
      I(["Width", "Height"], function (a, d) {
        F[(b ? "outer" : "inner") + d] = function (c) {
          if (this[0]) return K(this[0]) ? b ? this[0]["inner" + d] : this[0].document.documentElement["client" + d] : A(this[0]) ? Aa(this[0], d) : this[0][(b ? "offset" : "client") + d] + (c && b ? S(this[0], "margin" + (a ? "Top" : "Left")) + S(this[0], "margin" + (a ? "Bottom" : "Right")) : 0);
        };
      });
    });
    I(["Width", "Height"], function (a, b) {
      var c = b.toLowerCase();

      F[c] = function (d) {
        if (!this[0]) return void 0 === d ? void 0 : this;
        if (!arguments.length) return K(this[0]) ? this[0].document.documentElement["client" + b] : A(this[0]) ? Aa(this[0], b) : this[0].getBoundingClientRect()[c] - Ba(this[0], !a);
        var h = parseInt(d, 10);
        return this.each(function (b, d) {
          B(d) && (b = Q(d, "boxSizing"), d.style[c] = xa(c, h + ("border-box" === b ? Ba(d, !a) : 0)));
        });
      };
    });
    var V = {};

    F.toggle = function (a) {
      return this.each(function (b, c) {
        if (B(c)) if (void 0 === a ? "none" === Q(c, "display") : a) {
          if (c.style.display = c.___cd || "", "none" === Q(c, "display")) {
            b = c.style;
            c = c.tagName;
            if (V[c]) c = V[c];else {
              var d = r(c);
              m.body.insertBefore(d, null);
              var h = Q(d, "display");
              m.body.removeChild(d);
              c = V[c] = "none" !== h ? h : "block";
            }
            b.display = c;
          }
        } else c.___cd = Q(c, "display"), c.style.display = "none";
      });
    };

    F.hide = function () {
      return this.toggle(!1);
    };

    F.show = function () {
      return this.toggle(!0);
    };

    function Ca(a, b) {
      return !b || !x.call(b, function (b) {
        return 0 > a.indexOf(b);
      });
    }

    var W = {
      focus: "focusin",
      blur: "focusout"
    },
        Da = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
        Ea = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;

    function Fa(a, b, c, d, h) {
      var f = a.___ce = a.___ce || {};
      f[b] = f[b] || [];
      f[b].push([c, d, h]);
      a.addEventListener(b, h);
    }

    function X(a) {
      a = a.split(".");
      return [a[0], a.slice(1).sort()];
    }

    function Y(a, b, c, d, h) {
      var f = a.___ce = a.___ce || {};
      if (b) f[b] && (f[b] = f[b].filter(function (f) {
        var k = f[0],
            R = f[1];
        f = f[2];
        if (h && f.guid !== h.guid || !Ca(k, c) || d && d !== R) return !0;
        a.removeEventListener(b, f);
      }));else for (b in f) Y(a, b, c, d, h);
    }

    F.off = function (a, b, c) {
      var d = this;
      if (void 0 === a) this.each(function (a, b) {
        (B(b) || A(b) || K(b)) && Y(b);
      });else if (D(a)) E(b) && (c = b, b = ""), I(N(a), function (a, h) {
        a = X(Da[h] || W[h] || h);
        var f = a[0],
            k = a[1];
        d.each(function (a, d) {
          (B(d) || A(d) || K(d)) && Y(d, f, k, b, c);
        });
      });else for (var h in a) this.off(h, a[h]);
      return this;
    };

    F.on = function (a, b, c, d, h) {
      var f = this;

      if (!D(a)) {
        for (var k in a) this.on(k, b, c, a[k], h);

        return this;
      }

      D(b) || (void 0 !== b && null !== b && (void 0 !== c && (d = c), c = b), b = "");
      E(d) || (d = c, c = void 0);
      if (!d) return this;
      I(N(a), function (a, k) {
        a = X(Da[k] || W[k] || k);
        var l = a[0],
            q = a[1];
        l && f.each(function (a, f) {
          if (B(f) || A(f) || K(f)) a = function Ja(a) {
            if (!a.namespace || Ca(q, a.namespace.split("."))) {
              var k = f;

              if (b) {
                for (var z = a.target; !qa(z, b);) {
                  if (z === f) return;
                  z = z.parentNode;
                  if (!z) return;
                }

                k = z;
                a.___cd = !0;
              }

              a.___cd && Object.defineProperty(a, "currentTarget", {
                configurable: !0,
                get: function () {
                  return k;
                }
              });
              Object.defineProperty(a, "data", {
                configurable: !0,
                get: function () {
                  return c;
                }
              });
              z = d.call(k, a, a.___td);
              h && Y(f, l, q, b, Ja);
              !1 === z && (a.preventDefault(), a.stopPropagation());
            }
          }, a.guid = d.guid = d.guid || G.guid++, Fa(f, l, q, b, a);
        });
      });
      return this;
    };

    F.one = function (a, b, c, d) {
      return this.on(a, b, c, d, !0);
    };

    F.ready = function (a) {
      function b() {
        return setTimeout(a, 0, G);
      }

      "loading" !== m.readyState ? b() : m.addEventListener("DOMContentLoaded", b);
      return this;
    };

    F.trigger = function (a, b) {
      if (D(a)) {
        var c = X(a),
            d = c[0];
        c = c[1];
        if (!d) return this;
        var h = Ea.test(d) ? "MouseEvents" : "HTMLEvents";
        a = m.createEvent(h);
        a.initEvent(d, !0, !0);
        a.namespace = c.join(".");
      }

      a.___td = b;
      var f = (a.type in W);
      return this.each(function (b, c) {
        if (f && E(c[a.type])) c[a.type]();else c.dispatchEvent(a);
      });
    };

    function Ga(a) {
      return a.multiple && a.options ? O(w.call(a.options, function (a) {
        return a.selected && !a.disabled && !a.parentNode.disabled;
      }), "value") : a.value || "";
    }

    var Ha = /%20/g,
        Ia = /\r?\n/g,
        Ka = /file|reset|submit|button|image/i,
        La = /radio|checkbox/i;

    F.serialize = function () {
      var a = "";
      this.each(function (b, c) {
        I(c.elements || [c], function (b, c) {
          c.disabled || !c.name || "FIELDSET" === c.tagName || Ka.test(c.type) || La.test(c.type) && !c.checked || (b = Ga(c), void 0 !== b && (b = u(b) ? b : [b], I(b, function (b, d) {
            b = a;
            d = "&" + encodeURIComponent(c.name) + "=" + encodeURIComponent(d.replace(Ia, "\r\n")).replace(Ha, "+");
            a = b + d;
          })));
        });
      });
      return a.slice(1);
    };

    F.val = function (a) {
      return arguments.length ? this.each(function (b, c) {
        if ((b = c.multiple && c.options) || La.test(c.type)) {
          var d = u(a) ? fa.call(a, String) : null === a ? [] : [String(a)];
          b ? I(c.options, function (a, b) {
            b.selected = 0 <= d.indexOf(b.value);
          }, !0) : c.checked = 0 <= d.indexOf(c.value);
        } else c.value = void 0 === a || null === a ? "" : a;
      }) : this[0] && Ga(this[0]);
    };

    F.clone = function () {
      return this.map(function (a, b) {
        return b.cloneNode(!0);
      });
    };

    F.detach = function (a) {
      M(this, a).each(function (a, c) {
        c.parentNode && c.parentNode.removeChild(c);
      });
      return this;
    };

    var Ma = /^\s*<(\w+)[^>]*>/,
        Na = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        Oa = {
      "*": aa,
      tr: ba,
      td: ca,
      th: ca,
      thead: t,
      tbody: t,
      tfoot: t
    };

    function oa(a) {
      if (!D(a)) return [];
      if (Na.test(a)) return [r(RegExp.$1)];
      var b = Ma.test(a) && RegExp.$1;
      b = Oa[b] || Oa["*"];
      b.innerHTML = a;
      return G(b.childNodes).detach().get();
    }

    G.parseHTML = oa;

    F.empty = function () {
      return this.each(function (a, b) {
        for (; b.firstChild;) b.removeChild(b.firstChild);
      });
    };

    F.html = function (a) {
      return arguments.length ? void 0 === a ? this : this.each(function (b, c) {
        B(c) && (c.innerHTML = a);
      }) : this[0] && this[0].innerHTML;
    };

    F.remove = function (a) {
      M(this, a).detach().off();
      return this;
    };

    F.text = function (a) {
      return void 0 === a ? this[0] ? this[0].textContent : "" : this.each(function (b, c) {
        B(c) && (c.textContent = a);
      });
    };

    F.unwrap = function () {
      this.parent().each(function (a, b) {
        "BODY" !== b.tagName && (a = G(b), a.replaceWith(a.children()));
      });
      return this;
    };

    F.offset = function () {
      var a = this[0];
      if (a) return a = a.getBoundingClientRect(), {
        top: a.top + n.pageYOffset,
        left: a.left + n.pageXOffset
      };
    };

    F.offsetParent = function () {
      return this.map(function (a, b) {
        for (a = b.offsetParent; a && "static" === Q(a, "position");) a = a.offsetParent;

        return a || p;
      });
    };

    F.position = function () {
      var a = this[0];

      if (a) {
        var b = "fixed" === Q(a, "position"),
            c = b ? a.getBoundingClientRect() : this.offset();

        if (!b) {
          var d = a.ownerDocument;

          for (b = a.offsetParent || d.documentElement; (b === d.body || b === d.documentElement) && "static" === Q(b, "position");) b = b.parentNode;

          b !== a && B(b) && (d = G(b).offset(), c.top -= d.top + S(b, "borderTopWidth"), c.left -= d.left + S(b, "borderLeftWidth"));
        }

        return {
          top: c.top - S(a, "marginTop"),
          left: c.left - S(a, "marginLeft")
        };
      }
    };

    F.children = function (a) {
      return M(G(P(O(this, function (a) {
        return a.children;
      }))), a);
    };

    F.contents = function () {
      return G(P(O(this, function (a) {
        return "IFRAME" === a.tagName ? [a.contentDocument] : "TEMPLATE" === a.tagName ? a.content.childNodes : a.childNodes;
      })));
    };

    F.find = function (a) {
      return G(P(O(this, function (b) {
        return y(a, b);
      })));
    };

    var Pa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qa = /^$|^module$|\/(java|ecma)script/i,
        Ra = ["type", "src", "nonce", "noModule"];

    function Sa(a, b) {
      a = G(a);
      a.filter("script").add(a.find("script")).each(function (a, d) {
        if (Qa.test(d.type) && p.contains(d)) {
          var c = r("script");
          c.text = d.textContent.replace(Pa, "");
          I(Ra, function (a, b) {
            d[b] && (c[b] = d[b]);
          });
          b.head.insertBefore(c, null);
          b.head.removeChild(c);
        }
      });
    }

    function Z(a, b, c, d, h, f, k, q) {
      I(a, function (a, f) {
        I(G(f), function (a, f) {
          I(G(b), function (b, k) {
            var l = c ? k : f;
            b = c ? a : b;
            k = c ? f : k;
            l = b ? l.cloneNode(!0) : l;
            b = !b;
            h ? k.insertBefore(l, d ? k.firstChild : null) : k.parentNode.insertBefore(l, d ? k : k.nextSibling);
            b && Sa(l, k.ownerDocument);
          }, q);
        }, k);
      }, f);
      return b;
    }

    F.after = function () {
      return Z(arguments, this, !1, !1, !1, !0, !0);
    };

    F.append = function () {
      return Z(arguments, this, !1, !1, !0);
    };

    F.appendTo = function (a) {
      return Z(arguments, this, !0, !1, !0);
    };

    F.before = function () {
      return Z(arguments, this, !1, !0);
    };

    F.insertAfter = function (a) {
      return Z(arguments, this, !0, !1, !1, !1, !1, !0);
    };

    F.insertBefore = function (a) {
      return Z(arguments, this, !0, !0);
    };

    F.prepend = function () {
      return Z(arguments, this, !1, !0, !0, !0, !0);
    };

    F.prependTo = function (a) {
      return Z(arguments, this, !0, !0, !0, !1, !1, !0);
    };

    F.replaceWith = function (a) {
      return this.before(a).remove();
    };

    F.replaceAll = function (a) {
      G(a).replaceWith(this);
      return this;
    };

    F.wrapAll = function (a) {
      a = G(a);

      for (var b = a[0]; b.children.length;) b = b.firstElementChild;

      this.first().before(a);
      return this.appendTo(b);
    };

    F.wrap = function (a) {
      return this.each(function (b, c) {
        var d = G(a)[0];
        G(c).wrapAll(b ? d.cloneNode(!0) : d);
      });
    };

    F.wrapInner = function (a) {
      return this.each(function (b, c) {
        b = G(c);
        c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    };

    F.has = function (a) {
      var b = D(a) ? function (b, d) {
        return y(a, d).length;
      } : function (b, d) {
        return d.contains(a);
      };
      return this.filter(b);
    };

    F.is = function (a) {
      var b = L(a);
      return x.call(this, function (a, d) {
        return b.call(a, d, a);
      });
    };

    F.next = function (a, b, c) {
      return M(G(P(O(this, "nextElementSibling", b, c))), a);
    };

    F.nextAll = function (a) {
      return this.next(a, !0);
    };

    F.nextUntil = function (a, b) {
      return this.next(b, !0, a);
    };

    F.not = function (a) {
      var b = L(a);
      return this.filter(function (c, d) {
        return (!D(a) || B(d)) && !b.call(d, c, d);
      });
    };

    F.parent = function (a) {
      return M(G(P(O(this, "parentNode"))), a);
    };

    F.index = function (a) {
      var b = a ? G(a)[0] : this[0];
      a = a ? this : G(b).parent().children();
      return ea.call(a, b);
    };

    F.closest = function (a) {
      var b = this.filter(a);
      if (b.length) return b;
      var c = this.parent();
      return c.length ? c.closest(a) : b;
    };

    F.parents = function (a, b) {
      return M(G(P(O(this, "parentElement", !0, b))), a);
    };

    F.parentsUntil = function (a, b) {
      return this.parents(b, a);
    };

    F.prev = function (a, b, c) {
      return M(G(P(O(this, "previousElementSibling", b, c))), a);
    };

    F.prevAll = function (a) {
      return this.prev(a, !0);
    };

    F.prevUntil = function (a, b) {
      return this.prev(b, !0, a);
    };

    F.siblings = function (a) {
      return M(G(P(O(this, function (a) {
        return G(a).parent().children().not(a);
      }))), a);
    };

     module.exports = G ;
  })();
});

// Robert Penner's easeInOutQuad
// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks
  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)

  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)

  var easing = void 0; // easing function                        (function)

  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)

  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)

  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)
  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  } // element offset helper


  function top(element) {
    return element.getBoundingClientRect().top + start;
  } // rAF loop helper


  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    } // determine time spent scrolling so far


    timeElapsed = timeCurrent - timeStart; // calculate next scroll position

    next = easing(timeElapsed, start, distance, duration); // scroll to it

    window.scrollTo(0, next); // check progress

    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  } // scroll finished helper


  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance); // if scrolling to an element, and accessibility is enabled

    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1'); // focus the element

      element.focus();
    } // if it exists, fire the callback


    if (typeof callback === 'function') {
      callback();
    } // reset time for next jump


    timeStart = false;
  } // API


  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // resolve options, or use defaults

    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called

    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false; // cache starting position

    start = location(); // resolve target

    switch (typeof target === 'undefined' ? 'undefined' : _typeof$1(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to

        a11y = false; // make sure accessibility is off

        stop = start + target;
        break;
      // scroll to element (node)
      // bounding rect is relative to the viewport

      case 'object':
        element = target;
        stop = top(element);
        break;
      // scroll to element (selector)
      // bounding rect is relative to the viewport

      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    } // resolve scroll distance, accounting for offset


    distance = stop - start + offset; // resolve duration

    switch (_typeof$1(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;
      // function passed the distance of the scroll

      case 'function':
        duration = options.duration(distance);
        break;
    } // start the loop


    window.requestAnimationFrame(loop);
  } // expose only the jump method


  return jump;
}; // export singleton


var singleton = jumper();

window.anime = anime;
AOS.init();
waves.attach(".chip");
waves.init();
window.Waves = waves;
window.cash = cash_min;

cash_min.fn.size = function () {
  return this[0].getClientRects()[0];
};

cash_min.fn.offset = function () {
  return {
    top: this[0].offsetTop,
    left: this[0].offsetLeft
  };
};

var E = {
  jump: singleton
};
E.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};
/**
 * Get Trigger Element
 * @param {Object} QueryObj Details and Attributes of the target elements
 */

E.getTrigger = function (QueryObj) {
  var QueryElements = [];

  for (var element in QueryObj) {
    var ElementObj = QueryObj[element];
    var requiredParameters = "".concat(element);
    var ElementQueryStrings = [];

    for (var attribute in ElementObj) {
      var AttributeObj = ElementObj[attribute];

      if (attribute != "optional") {
        if (attribute == "class") requiredParameters += ".".concat(AttributeObj);else if (attribute == "id") requiredParameters += "#".concat(AttributeObj);else requiredParameters += "[".concat(attribute, "='").concat(AttributeObj, "']");
      }
    }

    for (var OptionalAttr in ElementObj["optional"]) {
      var OptionalAttrObj = ElementObj["optional"][OptionalAttr];
      ElementQueryStrings.push("".concat(requiredParameters, "[").concat(OptionalAttr, "='").concat(OptionalAttrObj, "']"));
    }

    QueryElements.push.apply(QueryElements, ElementQueryStrings);
  }

  return document.querySelectorAll(QueryElements.join(", "));
};
/**
 * Generates UUID for elements
 * @returns string
 */


E.generateUUID = function () {
  function uuid() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return "".concat(uuid() + uuid(), "-").concat(uuid(), "-").concat(uuid(), "-").concat(uuid(), "-").concat(uuid() + uuid() + uuid());
};
/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */


E.getDocumentScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */


E.getDocumentScrollLeft = function () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

E.updateTextFields = function () {
  cash_min(".text-field input[placeholder], .text-field textarea[placeholder]").siblings("label").addClass("active");
  cash_min(".text-field input, .text-field textarea").not("[placeholder]").on("focus", function (i) {
    cash_min(i.target).siblings("label, i").addClass("active");
  }).on("blur", function (i) {
    if (cash_min(i.target).val() == "") cash_min(i.target).siblings("label, i").removeClass("active");
  }).on("change", function (i) {
    if (cash_min(i.target).val() == "") cash_min(i.target).siblings("label, i").removeClass("active");
  });
};

window.addEventListener("DOMContentLoaded", function () {
  E.updateTextFields();
  cash_min(document).on("click", ".chip .close", function (e) {
    cash_min(e.target).closest(".chip").remove();
  });
  cash_min(document).on("click", ".smoothscroll", function (e) {
    e.preventDefault();
    var target = this.getAttribute("data-scrollto") || this.getAttribute("href");
    singleton(target, {
      duration: 800
    });
  });
  cash_min(document).on("click", ".navbar-toggler", function () {
    var targetSelector = this.getAttribute("data-target") || this.getAttribute("href");
    var target = cash_min(document.querySelector(targetSelector));
    if (target.hasClass("shown")) target.removeClass("shown");else target.addClass("shown");
  });
  window.addEventListener("scroll", function () {
    if (E.getDocumentScrollTop() <= 100) {
      cash_min(".navbar-wrapper.size-down").addClass("tall");
    } else if (cash_min(".navbar-wrapper.size-down").hasClass("tall")) {
      cash_min(".navbar-wrapper.size-down").removeClass("tall");
    }
  });
});

var EmpyrealComponent = function EmpyrealComponent(el) {
  _classCallCheck(this, EmpyrealComponent);

  if (typeof el === "string") {
    this.el = document.querySelector(el);
  } else {
    this.el = el;
  }
};

var VERSION = "0.0.1";
var DEFAULTS = {
  topOffset: "10%",
  overlayColor: "rgba(0, 0, 0, 0.5)",
  blur: false,
  dismissable: true,
  windowScroll: true,
  animInDuration: 500,
  animOutDuration: 500,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null
};
var REGISTRY = {
  animInEasing: "easeOutQuad",
  animOutEasng: "easeOutQuart",
  modalDialogSlideOffset: 50,
  modalDialogSlideInEasing: "easeInOutQuad",
  modalDialogSlideOutEasing: "easeOutSine"
};

var Modal = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Modal, _EmpyrealComponent);

  var _super = _createSuper(Modal);

  function Modal(el, options) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, el, options);
    _this.settings = _objectSpread2({}, DEFAULTS, {}, options);
    _this.$el = cash_min(_this.el);
    _this.$dialog = _this.$el.find(".modal-dialog");
    _this.dialog = _this.$dialog[0];
    _this.id = _this.$el.attr("id");
    _this.trigger = E.getTrigger({
      a: {
        class: "modal-trigger",
        optional: {
          href: "#".concat(_this.id),
          "data-target": "#".concat(_this.id)
        }
      },
      button: {
        class: "modal-trigger",
        optional: {
          "data-target": "#".concat(_this.id)
        }
      }
    });
    _this.$trigger = cash_min(_this.trigger);
    _this.isOpen = false;
    _this.isAnimationDone = true;
    _this.$closeModalBtn = _this.$dialog.find(".modal-close");
    _this.isModalSheet = _this.$dialog.hasClass("modal-sheet") ? true : false;
    _this.isModalSide = _this.$dialog.hasClass("modal-side") ? true : false;
    _this.listeners = [];

    _this._init();

    return _this;
  }

  _createClass(Modal, [{
    key: "_init",
    value: function _init() {
      this.$el.css({
        "backgroundColor": this.settings.overlayColor
      });
      if (!(this.isModalSide || this.isModalSheet)) this.dialog.style.top = this.settings.topOffset;

      this._setupEventHandlers();
    }
  }, {
    key: "_handleModalOpen",
    value: function _handleModalOpen(e) {
      var _this2 = this;

      window.history.pushState(null, null, window.location.href);
      if (this.settings.blur) cash_min(document.body).children().not(".modal").addClass("blurred");
      anime({
        targets: this.el,
        opacity: 1,
        easing: REGISTRY.animInEasing,
        duration: this.settings.animInDuration,
        begin: function begin() {
          _this2.isAnimationDone = false;
          _this2.isOpen = true;
          _this2.el.style.display = "block";

          if (typeof _this2.settings.onOpenStart === "function") {
            _this2.settings.onOpenStart.call(_this2, _this2.el, e.target);
          }
        },
        complete: function complete() {
          _this2.isAnimationDone = true;

          if (typeof _this2.settings.onOpenEnd === "function") {
            _this2.settings.onOpenEnd.call(_this2, _this2.el, e.target);
          }
        }
      });

      if (!this.isModalSheet && !this.isModalSide) {
        // Modal dialog slide in down
        anime({
          targets: this.dialog,
          translateY: [-REGISTRY.modalDialogSlideOffset, 0],
          easing: REGISTRY.modalDialogSlideOutEasing,
          duration: this.settings.animInDuration
        });
      }

      if (!this.settings.windowScroll) document.body.style.overflow = "hidden";
    }
  }, {
    key: "_handleModalClose",
    value: function _handleModalClose(e) {
      var _this3 = this;

      if (this.settings.blur) cash_min(document.body).children().not(".modal").removeClass("blurred");
      anime({
        targets: this.el,
        opacity: 0,
        easing: REGISTRY.animOutEasng,
        duration: this.settings.animOutDuration,
        begin: function begin() {
          _this3.isAnimationDone = false;
          _this3.isOpen = false;

          if (typeof _this3.settings.onCloseStart === "function") {
            _this3.settings.onCloseStart.call(_this3, _this3.el, e.target);
          }
        },
        complete: function complete() {
          _this3.isAnimationDone = true;
          _this3.el.style.display = "none";

          if (typeof _this3.settings.onCloseEnd === "function") {
            _this3.settings.onCloseEnd.call(_this3, _this3.el, e.target);
          }
        }
      });

      if (!this.isModalSide && !this.isModalSheet) {
        // Modal dialog slide out up
        anime({
          targets: this.dialog,
          translateY: [0, -REGISTRY.modalDialogSlideOffset],
          easing: REGISTRY.modalDialogSlideOutEasing,
          duration: this.settings.animInDuration
        });
      }

      if (!this.settings.windowScroll) document.body.style.overflow = "auto";
    }
  }, {
    key: "_handleOverlayClick",
    value: function _handleOverlayClick(e) {
      if (!cash_min(e.target).closest(".modal-dialog").length && this.isAnimationDone && this.isOpen && this.settings.dismissable) this._handleModalClose();
    }
  }, {
    key: "_handleKeyDown",
    value: function _handleKeyDown(e) {
      if (e.keyCode == E.keys.ESC) this._handleModalClose();
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$trigger.on("click", this._handleModalOpen.bind(this));
      this.$closeModalBtn.on("click", this._handleModalClose.bind(this));
      document.addEventListener("click", this.listeners[0] = this._handleOverlayClick.bind(this));
      document.addEventListener("touchstart", this.listeners[1] = this._handleOverlayClick.bind(this), {
        passive: true
      });
      document.addEventListener("keydown", this.listeners[2] = this._handleKeyDown.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$trigger.off("click");
      this.$closeModalBtn.off("click");
      document.removeEventListener("click", this.listeners[0]);
      document.removeEventListener("touchstart", this.listeners[1]);
      document.removeEventListener("keydown", this.listeners[2]);
    }
  }, {
    key: "open",
    value: function open() {
      this._handleModalOpen();
    }
  }, {
    key: "close",
    value: function close() {
      this._handleModalClose();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS;
    }
  }]);

  return Modal;
}(EmpyrealComponent);

var VERSION$1 = "0.0.1";
var DEFAULTS$1 = {
  animDuration: 500,
  activeTabClass: "",
  tabIndicatorClass: "",
  onTabOpen: null
};

var Tabs = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Tabs, _EmpyrealComponent);

  var _super = _createSuper(Tabs);

  /**
   * @param {Element} el
   * @param {Object} options
   */
  function Tabs(el, options) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, el);
    _this.settings = _objectSpread2({}, DEFAULTS$1, {}, options);
    _this.$el = cash_min(_this.el);
    _this.$tabs = _this.$el.find(".tab");
    _this.$tabContents = _this.$tabs.map(function (i, val) {
      var id = val.getAttribute("data-target") || val.getAttribute("href");
      return document.querySelector("div".concat(id));
    });
    _this.$tabIndicator = cash_min("<div class='tab-indicator' />");

    _this.$el.append(_this.$tabIndicator);

    _this.listeners = [];

    _this._init();

    return _this;
  }

  _createClass(Tabs, [{
    key: "_init",
    value: function _init() {
      this._setupEventHandlers();

      this.$tabIndicator.addClass(this.settings.tabIndicatorClass);
      if (this.$tabs.filter(".active").length) this._handleTabOpen(this.$tabs.filter(".active")[0]);else this._handleTabOpen(this.$tabs.first());
    }
  }, {
    key: "_handleTabOpen",
    value: function _handleTabOpen(elem) {
      var $activeTab = cash_min(elem);
      var id = $activeTab.attr("data-target") || $activeTab.attr("href");
      var $previousActiveTabContent = this.$tabContents.filter(".active");
      var $activeTabContent = this.$tabContents.filter(id); // Tab active color

      this.$tabs.removeClass("active");
      this.$tabs.removeClass(this.settings.activeTabClass);
      $activeTab.addClass("active");
      $activeTab.addClass(this.settings.activeTabClass); // Hiding and showing tab content

      $previousActiveTabContent.removeClass("active");
      $activeTabContent.addClass("active"); // Moving Tab Indicator

      this.resizeIndicator();
    }
  }, {
    key: "_handleTabClick",
    value: function _handleTabClick(e) {
      e.preventDefault();

      if (typeof this.settings.onTabOpen === "function") {
        this.settings.onTabOpen.call(this, e, this.$el);
      }

      this._handleTabOpen(e.target);
    }
  }, {
    key: "resizeIndicator",
    value: function resizeIndicator() {
      var $active = this.$tabs.filter(".active");
      var tabSize = $active.size();
      this.$tabIndicator.css({
        top: tabSize.height - 2 + "px",
        left: tabSize.left - this.$el.size().left + "px",
        width: $active.outerWidth(true) + "px"
      });
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$tabs.on("click", this._handleTabClick.bind(this));
      window.addEventListener("resize", this.listeners[0] = this.resizeIndicator.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$tabs.off("click");
      window.removeEventListener("resize", this.listeners[0]);
    }
  }, {
    key: "toggleTab",
    value: function toggleTab(selector) {
      this._handleTabOpen(this.$tabs.filter(selector)[0]);
    }
  }, {
    key: "toggleTabUsingIndex",
    value: function toggleTabUsingIndex(index) {
      this._handleTabOpen(this.$tabs.filter(".tab:nth-child(".concat(index, ")"))[0]);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$1;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$1;
    }
  }]);

  return Tabs;
}(EmpyrealComponent);

var VERSION$2 = "0.0.1";
var DEFAULTS$2 = {
  coverTrigger: false,
  isRelative: false,
  animInDuration: 500,
  animOutDuration: 500,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null,
  onItemClick: null
};
var REGISTRY$1 = {
  animInEasing: "easeOutQuad",
  animOutEasing: "easeOutQuint"
};

var Dropdown = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Dropdown, _EmpyrealComponent);

  var _super = _createSuper(Dropdown);

  /**
   * @param {Element} el
   * @param {Object} options
   */
  function Dropdown(el, options) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, el);
    _this.settings = _objectSpread2({}, DEFAULTS$2, {}, options);
    _this.$el = cash_min(_this.el);
    _this.$items = _this.$el.children(".dropdown-item");
    _this.focusedIndex = -1;
    _this.id = _this.$el.attr("id");
    _this.trigger = E.getTrigger({
      a: {
        class: "dropdown-trigger",
        optional: {
          href: "#".concat(_this.id),
          "data-target": "#".concat(_this.id)
        }
      },
      button: {
        class: "dropdown-trigger",
        optional: {
          "data-target": "#".concat(_this.id)
        }
      }
    });
    _this.$trigger = cash_min(_this.trigger);
    _this.initialDropdownDimensions = {
      width: 0,
      height: 0
    };
    _this.isOpen = false;
    _this.isAnimationDone = true;
    _this.listeners = [];

    _this._init();

    return _this;
  }

  _createClass(Dropdown, [{
    key: "_init",
    value: function _init() {
      this.calculateDropdownDimensions();

      this._setupEventHandlers();
    }
  }, {
    key: "calculateDropdownDimensions",
    value: function calculateDropdownDimensions() {
      this.$el.css("display", "block");
      this.initialDropdownDimensions = {
        width: this.$el.outerWidth(),
        height: this.$el.outerHeight()
      };
      if (!this.isOpen) this.$el.css("display", "none");
    }
  }, {
    key: "positionDropdown",
    value: function positionDropdown() {
      if (this.isOpen) {
        var triggerDimensions = this.$trigger.size();
        var dropdownDimensions = this.initialDropdownDimensions;
        this.el.style.left = triggerDimensions.left + "px";
        var dropdownTop = window.scrollY + triggerDimensions.top;
        if (this.settings.isRelative) dropdownTop = 0;

        if (triggerDimensions.top + dropdownDimensions.height <= window.innerHeight) {
          // Dropdown positioned on bottom of trigger
          dropdownTop += triggerDimensions.height + 10;
          dropdownTop -= this.settings.coverTrigger ? triggerDimensions.height + 10 : 0;
        } else {
          // Dropdown positioned on top of trigger
          dropdownTop -= dropdownDimensions.height + 10;
          dropdownTop += this.settings.coverTrigger ? triggerDimensions.height + 10 : 0;
        }

        this.el.style.top = dropdownTop + "px";
      }
    }
  }, {
    key: "_handleDropdownOpen",
    value: function _handleDropdownOpen() {
      var _this2 = this;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "none";
      this.focusedIndex = -1;
      this.isOpen = true;
      this.isAnimationDone = false;
      this.$el.css("display", "block");
      this.positionDropdown();
      anime({
        targets: this.el,
        opacity: [0, 1],
        duration: this.settings.animInDuration,
        easing: REGISTRY$1.animInEasing,
        begin: function begin() {
          if (typeof _this2.settings.onOpenStart === "function") {
            _this2.settings.onOpenStart.call(_this2, _this2.el, e.target);
          }
        },
        complete: function complete() {
          _this2.isAnimationDone = true;

          if (typeof _this2.settings.onOpenEnd === "function") {
            _this2.settings.onOpenEnd.call(_this2, _this2.el, e.target);
          }
        }
      });
    }
  }, {
    key: "_handleDropdownClose",
    value: function _handleDropdownClose() {
      var _this3 = this;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "none";
      this.isOpen = false;
      this.isAnimationDone = false;
      anime({
        targets: this.el,
        opacity: [1, 0],
        duration: this.settings.animOutDuration,
        easing: REGISTRY$1.animOutEasing,
        begin: function begin() {
          if (typeof _this3.settings.onCloseStart === "function") {
            _this3.settings.onCloseStart.call(_this3, _this3.el, e.target);
          }
        },
        complete: function complete() {
          _this3.isAnimationDone = true;

          _this3.$el.css("display", "none");

          if (typeof _this3.settings.onCloseEnd === "function") {
            _this3.settings.onCloseEnd.call(_this3, _this3.el, e.target);
          }
        }
      });
    }
  }, {
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(e) {
      var $elemClicked = cash_min(e.target);

      if (!$elemClicked.closest(this.el).length && this.isOpen && this.isAnimationDone && !$elemClicked.hasClass("dropdown-trigger")) {
        this._handleDropdownClose();
      }
    }
  }, {
    key: "_handleDropdownTriggerClick",
    value: function _handleDropdownTriggerClick(e) {
      e.preventDefault();
      if (this.isOpen) this._handleDropdownClose(e);else this._handleDropdownOpen(e);
    }
  }, {
    key: "_handleDropdownItemClick",
    value: function _handleDropdownItemClick(e) {
      this.$items.removeClass("focused");
      this.focusedIndex = -1;

      if (typeof this.settings.onItemClick === "function") {
        this.settings.onItemClick.call(this, this.el, e.target);
      }
    }
  }, {
    key: "_handleDropdownKeyPress",
    value: function _handleDropdownKeyPress(e) {
      if (this.isOpen) {
        if (e.keyCode == E.keys.TAB) {
          this._handleDropdownClose();

          e.preventDefault();
        } else if (e.keyCode == E.keys.ENTER && this.focusedIndex != -1) {
          this.$items.filter(".focused").trigger("click");
          e.preventDefault();
        } else {
          if (e.keyCode == E.keys.ARROW_DOWN && this.focusedIndex != this.$items.length - 1) {
            this.focusedIndex += 1;
            this.focusItem(this.focusedIndex);
            e.preventDefault();
          } else if (e.keyCode == E.keys.ARROW_UP && this.focusedIndex > 0) {
            this.focusedIndex -= 1;
            this.focusItem(this.focusedIndex);
            e.preventDefault();
          }
        }
      }
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$trigger.on("click ", this._handleDropdownTriggerClick.bind(this));
      this.$el.on("click", this._handleDropdownItemClick.bind(this));
      window.addEventListener("scroll", this.listeners[0] = this.positionDropdown.bind(this));
      document.addEventListener("click", this.listeners[1] = this._handleDocumentClick.bind(this));
      document.removeEventListener("touchstart", this.listeners[2] = this._handleDocumentClick.bind(this), {
        passive: true
      });
      window.addEventListener("keydown", this.listeners[3] = this._handleDropdownKeyPress.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$trigger.off("click");
      this.$el.off("click");
      window.removeEventListener("scroll", this.listeners[0]);
      document.removeEventListener("click", this.listeners[1]);
      document.removeEventListener("touchstart", this.listeners[2]);
      window.removeEventListener("keydown", this.listeners[3]);
    }
  }, {
    key: "focusItem",
    value: function focusItem() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.$el.children(".dropdown-item.focused").removeClass("focused");
      var $focused = this.$el.children(".dropdown-item").eq(index);
      $focused.addClass("focused");
      $focused[0].scrollIntoView();
    }
  }, {
    key: "open",
    value: function open() {
      this._handleDropdownOpen();
    }
  }, {
    key: "close",
    value: function close() {
      this._handleDropdownClose();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$2;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$2;
    }
  }]);

  return Dropdown;
}(EmpyrealComponent);

var VERSION$3 = "0.0.1";
var DEFAULTS$3 = {
  width: "300px",
  overlayColor: "rgba(0, 0, 0, 0.5)",
  animInDuration: 500,
  animOutDuration: 500
};
var REGISTRY$2 = {
  easingSlideIn: "easeOutQuad",
  easingSlideOut: "easeOutQuad"
};

var Sidenav = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Sidenav, _EmpyrealComponent);

  var _super = _createSuper(Sidenav);

  /**
   * @param {Element} el
   * @param {Object} options
   */
  function Sidenav(el, options) {
    var _this;

    _classCallCheck(this, Sidenav);

    _this = _super.call(this, el);
    _this.settings = _objectSpread2({}, DEFAULTS$3, {}, options);
    _this.$el = cash_min(_this.el);
    _this.id = _this.$el.attr("id");
    _this.trigger = E.getTrigger({
      a: {
        class: "sidenav-trigger",
        optional: {
          href: "#".concat(_this.id),
          "data-target": "#".concat(_this.id)
        }
      },
      button: {
        class: "sidenav-trigger",
        optional: {
          "data-target": "#".concat(_this.id)
        }
      }
    });
    _this.$trigger = cash_min(_this.trigger);
    _this.closeTrigger = E.getTrigger({
      a: {
        class: "sidenav-close",
        optional: {
          href: "#".concat(_this.id),
          "data-target": "#".concat(_this.id)
        }
      },
      button: {
        class: "sidenav-close",
        optional: {
          "data-target": "#".concat(_this.id)
        }
      }
    });
    _this.$closeTrigger = cash_min(_this.closeTrigger);
    _this.isOpen = false;
    _this.isAnimationDone = false;
    _this.listeners = [];
    _this.$overlay = cash_min("<div class=\"sidenav-overlay\" />");

    _this._init();

    return _this;
  }

  _createClass(Sidenav, [{
    key: "_init",
    value: function _init() {
      this.el.style.width = this.settings.width;
      this.el.style.left = "-100%";
      this.$el.after(this.$overlay);
      this.$overlay[0].style.backgroundColor = this.settings.overlayColor;

      this._setupEventHandlers();
    }
  }, {
    key: "_handleOverlayFadeIn",
    value: function _handleOverlayFadeIn() {
      this.$overlay[0].style.display = "block";
      anime({
        targets: this.$overlay[0],
        opacity: [0, 1],
        duration: this.settings.animInDuration,
        easing: REGISTRY$2.easingSlideIn
      });
    }
  }, {
    key: "_handleOverlayFadeOut",
    value: function _handleOverlayFadeOut() {
      var _this2 = this;

      anime({
        targets: this.$overlay[0],
        opacity: [1, 0],
        duration: this.settings.animOutDuration,
        easing: REGISTRY$2.easingSlideOut,
        complete: function complete() {
          _this2.$overlay[0].style.display = "none";
        }
      });
    }
  }, {
    key: "_handleSidenavOpen",
    value: function _handleSidenavOpen() {
      var _this3 = this;

      this.el.style.display = "block";
      anime({
        targets: this.el,
        left: ["-100%", 0],
        duration: this.settings.animInDuration,
        easing: REGISTRY$2.easingSlideIn,
        begin: function begin() {
          _this3.isOpen = true;
          _this3.isAnimationDone = false;
        },
        complete: function complete() {
          _this3.isAnimationDone = true;
        }
      });

      this._handleOverlayFadeIn();
    }
  }, {
    key: "_handleSidenavClose",
    value: function _handleSidenavClose() {
      var _this4 = this;

      anime({
        targets: this.el,
        left: [0, "-100%"],
        duration: this.settings.animInDuration,
        easing: REGISTRY$2.easingSlideOut,
        begin: function begin() {
          _this4.isOpen = false;
          _this4.isAnimationDone = false;
        },
        complete: function complete() {
          _this4.isAnimationDone = true;
          _this4.el.style.display = "none";
        }
      });

      this._handleOverlayFadeOut();
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(e) {
      if (e.keyCode == E.keys.ESC && this.isOpen) this._handleSidenavClose();
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$trigger.on("click touchstart", this._handleSidenavOpen.bind(this));
      this.$overlay.on("click touchstart", this._handleSidenavClose.bind(this));
      this.$closeTrigger.on("click touchstart", this._handleSidenavClose.bind(this));
      document.addEventListener("keydown", this.listeners[0] = this._handleKeydown.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$trigger.off("click touchstart");
      this.$overlay.off("click touchstart");
      this.$closeTrigger.off("click touchstart");
      document.removeEventListener("keydown", this.listeners[0]);
    }
  }, {
    key: "open",
    value: function open() {
      this._handleSidenavOpen();
    }
  }, {
    key: "close",
    value: function close() {
      this._handleSidenavClose();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$3;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$3;
    }
  }]);

  return Sidenav;
}(EmpyrealComponent);

var VERSION$4 = "0.0.1";
var DEFAULTS$4 = {
  accordion: false,
  animInDuration: 500,
  animOutDuration: 500
};

var Collapsible = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Collapsible, _EmpyrealComponent);

  var _super = _createSuper(Collapsible);

  /**
   * @param {Element} el
   * @param {Object} options
   */
  function Collapsible(el, options) {
    var _this;

    _classCallCheck(this, Collapsible);

    _this = _super.call(this, el);
    _this.settings = _objectSpread2({}, DEFAULTS$4, {}, options);
    _this.$el = cash_min(_this.el);
    _this.$headers = _this.$el.find(".collapsible-header");
    _this.$bodies = _this.$el.find(".collapsible-body");
    _this.listeners = [];

    _this._init();

    return _this;
  }

  _createClass(Collapsible, [{
    key: "_init",
    value: function _init() {
      this._setupEventHandlers();
    }
  }, {
    key: "_handleHeaderOpen",
    value: function _handleHeaderOpen(elem) {
      var $activeHeader = cash_min(elem);
      var $parent = $activeHeader.parent();
      var $activeBody = $activeHeader.siblings(".collapsible-body");
      anime.remove($activeBody[0]);
      $activeBody.css({
        display: "block",
        overflow: "hidden",
        height: 0,
        paddingTop: "",
        paddingBottom: ""
      });
      var paddTop = $activeBody.css("padding-top");
      var paddBottom = $activeBody.css("padding-bottom");
      var finalHeight = $activeBody[0].scrollHeight;
      $activeBody.css({
        paddingTop: 0,
        paddingBottom: 0
      });
      anime({
        targets: $activeBody[0],
        height: finalHeight,
        paddingTop: paddTop,
        paddingBottom: paddBottom,
        duration: this.settings.animInDuration,
        easing: "easeInOutCubic",
        complete: function complete() {
          $activeBody.css({
            overflow: "",
            paddingTop: "",
            paddingBottom: "",
            height: ""
          });
        }
      });
      $parent.addClass("active");
    }
  }, {
    key: "_handleHeaderClose",
    value: function _handleHeaderClose(elem) {
      var $activeHeader = cash_min(elem);
      var $parent = $activeHeader.parent();
      var $activeBody = $activeHeader.siblings(".collapsible-body");
      anime.remove($activeBody[0]);
      $activeBody.css("overflow", "hidden");
      anime({
        targets: $activeBody[0],
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: this.settings.animOutDuration,
        easing: "easeInOutCubic",
        complete: function complete() {
          $activeBody.css({
            height: "",
            overflow: "",
            padding: "",
            display: ""
          });
        }
      });
      $parent.removeClass("active");
    }
  }, {
    key: "_handleHeaderClick",
    value: function _handleHeaderClick(e) {
      var $parent = cash_min(e.target).parent();

      if ($parent.hasClass("active")) {
        this._handleHeaderClose(e.target);
      } else {
        this._handleHeaderOpen(e.target);
      }

      if (this.settings.accordion) {
        var _iterator = _createForOfIteratorHelper($parent.filter(".active").siblings()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var i = _step.value;

            this._handleHeaderClose(cash_min(i).find(".collapsible-header")[0]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$headers.on("click", this._handleHeaderClick.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {} // Functions used by the dev

  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$4;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$4;
    }
  }]);

  return Collapsible;
}(EmpyrealComponent);

var VERSION$5 = "0.0.1";
var DEFAULTS$5 = {
  position: "top",
  clickTrigger: false,
  offset: 10,
  animInDuration: 200,
  animOutDuration: 300
};
var REGISTRY$3 = {
  animInEasing: "easeInQuad",
  animOutEasing: "easeOutCubic"
};

var Tooltip = /*#__PURE__*/function () {
  /**
  * @param {Element} el
  * @param {Object} options
  */
  function Tooltip(el, options) {
    _classCallCheck(this, Tooltip);

    this.settings = _objectSpread2({}, DEFAULTS$5, {}, options);
    this.el = el;
    this.$el = cash_min(this.el);
    this.listeners = [];
    this.position = this.$el.data("position") || this.settings.position;
    this.isOpen = false;

    this._init();
  }

  _createClass(Tooltip, [{
    key: "_init",
    value: function _init() {
      this.$tooltip = cash_min("<div class=\"empyreal-tooltip\" />");
      this.tooltip = this.$tooltip[0];
      var tooltipContent = this.$el.data("tooltip");
      this.$tooltip.html(tooltipContent);
      cash_min("body").append(this.$tooltip);

      this._setupEventHandlers();
    }
  }, {
    key: "_positionTooltip",
    value: function _positionTooltip() {
      // Trigger position is tp
      var tp = this.$el.size(); // Tooltip position is toolp

      var toolp = this.$tooltip.size();

      if (this.position == "left") {
        this.tooltip.style.top = tp.top + tp.height / 2 - toolp.height / 2 + "px";
        this.tooltip.style.left = tp.left - toolp.width + "px";
      } else if (this.position == "right") {
        this.tooltip.style.top = tp.top + tp.height / 2 - toolp.height / 2 + "px";
        this.tooltip.style.left = tp.left + tp.width + "px";
      } else if (this.position == "bottom") {
        this.tooltip.style.top = tp.top + tp.height + "px";
        this.tooltip.style.left = tp.left + tp.width / 2 - toolp.width / 2 + "px";
      } else {
        this.tooltip.style.top = tp.top - toolp.height + "px";
        this.tooltip.style.left = tp.left + tp.width / 2 - toolp.width / 2 + "px";
      }
    }
  }, {
    key: "_handleTooltipOpen",
    value: function _handleTooltipOpen() {
      this.isOpen = true;

      this._positionTooltip();

      var translate = {
        translateY: [0, -this.settings.offset]
      };
      if (this.position == "left") translate = {
        translateX: [0, -this.settings.offset]
      };else if (this.position == "right") translate = {
        translateX: [0, this.settings.offset]
      };else if (this.position == "bottom") translate = {
        translateY: [0, this.settings.offset]
      };
      anime(_objectSpread2({
        targets: this.tooltip,
        duration: this.settings.animInDuration,
        opacity: [0, 1],
        easing: REGISTRY$3.animInEasing
      }, translate));
    }
  }, {
    key: "_handleTooltipClose",
    value: function _handleTooltipClose() {
      this.isOpen = false;
      anime({
        targets: this.tooltip,
        duration: this.settings.animOutDuration,
        opacity: [1, 0],
        easing: REGISTRY$3.animOutEasing,
        translateY: 0,
        translateX: 0
      });
    }
  }, {
    key: "_handleTriggerClick",
    value: function _handleTriggerClick() {
      if (this.isOpen) this._handleTooltipClose();else this._handleTooltipOpen();
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      if (this.settings.clickTrigger) {
        this.$el.on("click", this._handleTriggerClick.bind(this));
      } else {
        this.$el.on("mouseenter", this._handleTooltipOpen.bind(this));
        this.$el.on("mouseleave", this._handleTooltipClose.bind(this));
      }
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      if (this.settings.clickTrigger) {
        this.$el.off("click");
      } else {
        this.$el.off("mouseenter");
        this.$el.off("mouseleave");
      }
    }
  }, {
    key: "open",
    value: function open() {
      this._handleTooltipOpen();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$5;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$5;
    }
  }]);

  return Tooltip;
}();

var VERSION$6 = "0.0.1";
var DEFAULTS$6 = {
  indicators: false
};

var Carousel = /*#__PURE__*/function (_EmprealComponent) {
  _inherits(Carousel, _EmprealComponent);

  var _super = _createSuper(Carousel);

  /**
   * @param {Element} el
   * @param {Object} options
   */
  function Carousel(el, options) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, el);
    _this.settings = _objectSpread2({}, DEFAULTS$6, {}, options);
    _this.$el = cash_min(_this.el);
    _this.$nextBtn = _this.$el.find(".carousel-next");
    _this.$prevBtn = _this.$el.find(".carousel-prev");
    _this.$carouselContainer = _this.$el.find(".carousel-inner");
    _this.$carouselItems = _this.$carouselContainer.children(".carousel-item");
    _this.listeners = [];

    _this._init();

    return _this;
  }

  _createClass(Carousel, [{
    key: "_init",
    value: function _init() {
      if (this.settings.indicators) this._setupIndicators();

      this._handleCarouselItemFadeIn(0);

      this._setupEventHandlers();
    }
  }, {
    key: "_setupIndicators",
    value: function _setupIndicators() {
      var indicatorContainer = cash_min("<ol class='carousel-indicators'></ol>");
      this.$el.append(indicatorContainer);

      for (var i = 0; i < this.$carouselItems.length; i++) {
        indicatorContainer.append("<li />");
      }

      this.$indicators = indicatorContainer.children("li");
      this.$indicators.eq(0).addClass("active");
    }
  }, {
    key: "_handleIndicatorClick",
    value: function _handleIndicatorClick(e) {
      var newIndex = this.$indicators.filter(e.target).index();

      this._handleCarouselItemFadeIn(newIndex);
    }
  }, {
    key: "_returnActiveCarouselItemIndex",
    value: function _returnActiveCarouselItemIndex() {
      var activeCarouselItem = this.$carouselItems.siblings(".active");
      return activeCarouselItem.index();
    }
  }, {
    key: "_handleCarouselItemFadeIn",
    value: function _handleCarouselItemFadeIn(index) {
      var activeCarouselItem = this.$carouselItems.siblings(".active");
      activeCarouselItem.removeClass("active");
      this.$carouselItems.eq(index).addClass("active");

      if (this.settings.indicators) {
        this.$indicators.removeClass("active");
        this.$indicators.eq(index).addClass("active");
      }
    }
  }, {
    key: "_handleCarouselNext",
    value: function _handleCarouselNext() {
      var activeIndex = this._returnActiveCarouselItemIndex(); // Check if carousel item is last so loop back


      if (activeIndex == this.$carouselItems.length - 1) this._handleCarouselItemFadeIn(0);else this._handleCarouselItemFadeIn(activeIndex + 1);
    }
  }, {
    key: "_handleCarouselPrev",
    value: function _handleCarouselPrev() {
      var activeIndex = this._returnActiveCarouselItemIndex(); // Check if carousel item is last so loop back


      if (activeIndex == 0) this._handleCarouselItemFadeIn(this.$carouselItems.length - 1);else this._handleCarouselItemFadeIn(activeIndex - 1);
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$nextBtn.on("click", this._handleCarouselNext.bind(this));
      this.$prevBtn.on("click", this._handleCarouselPrev.bind(this));
      if (this.settings.indicators) this.$indicators.on("click", this._handleIndicatorClick.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$nextBtn.off("click");
      this.$prevBtn.off("click");
      if (this.settings.indicators) this.$indicators.off("click");
    }
  }, {
    key: "open",
    value: function open() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this._handleCarouselItemFadeIn(index);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$6;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$6;
    }
  }]);

  return Carousel;
}(EmpyrealComponent);

var VERSION$7 = "0.0.1";
var DEFAULTS$7 = {
  offset: 0,
  stop: Infinity,
  stopperElement: ""
};

var Pushpin = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Pushpin, _EmpyrealComponent);

  var _super = _createSuper(Pushpin);

  /**
   * @param {Element} el
   * @param {Object} options
   */
  function Pushpin(el, options) {
    var _this;

    _classCallCheck(this, Pushpin);

    _this = _super.call(this, el);
    _this.settings = _objectSpread2({}, DEFAULTS$7, {}, options);
    _this.$el = cash_min(_this.el);
    _this.listeners = [];
    _this.width = 0;
    _this.height = 0;
    _this.stop = _this.settings.stop;

    _this._init();

    return _this;
  }

  _createClass(Pushpin, [{
    key: "_init",
    value: function _init() {
      this._setupEventHandlers();
    }
  }, {
    key: "_calculateElementDimensions",
    value: function _calculateElementDimensions() {
      this.$el.css({
        position: "",
        top: "",
        left: "",
        width: "",
        height: ""
      });
      this.initialY = this.$el.offset().top;
      var size = this.$el.size();
      this.width = size.width;
      this.height = size.height;

      if (this.settings.stopperElement) {
        var stopperSize = cash_min(this.settings.stopperElement).offset();
        this.stop = stopperSize.top - this.$el.outerHeight() - 10;
      }
    }
  }, {
    key: "_handleElementPosition",
    value: function _handleElementPosition() {
      var windowY = E.getDocumentScrollTop();

      if (windowY >= this.stop - this.settings.offset) {
        this.$el.css({
          position: "absolute",
          top: this.stop
        });
      } else if (windowY < this.initialY - this.settings.offset) {
        this.$el.css({
          position: "",
          top: "",
          left: "",
          width: "",
          height: ""
        });
      } else {
        this.$el.css({
          position: "fixed",
          top: this.settings.offset,
          width: this.width,
          height: this.height
        });
      }
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      window.addEventListener("DOMContentLoaded", this._calculateElementDimensions.bind(this));
      window.addEventListener("scroll", this.listeners[0] = this._handleElementPosition.bind(this));
      window.addEventListener("resize", this.listeners[1] = this._calculateElementDimensions.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      window.removeEventListener("scroll", this.listeners[0]);
      window.removeEventListener("resize", this.listeners[1]);
    } // Functions used by the dev

  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$7;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$7;
    }
  }]);

  return Pushpin;
}(EmpyrealComponent);

var VERSION$8 = "0.0.1";
var DEFAULTS$8 = {
  offset: 0,
  activeClass: "active",
  linkNode: function linkNode(node) {
    return node;
  }
}; // Do not add `extends EmpyrealComponent` here as this takes a NodeList as input instead of a single Node

var ScrollSpy = /*#__PURE__*/function () {
  /**
   * @param {Element} el
   * @param {Object} options
   */
  function ScrollSpy(el, options) {
    _classCallCheck(this, ScrollSpy);

    this.settings = _objectSpread2({}, DEFAULTS$8, {}, options);
    this.el = el;
    this.$el = cash_min(this.el);
    this.activeSection;
    this.listeners = [];

    this._init();
  }

  _createClass(ScrollSpy, [{
    key: "_init",
    value: function _init() {
      this._calculateOffsets();

      this._setupEventHandlers();
    }
  }, {
    key: "_calculateOffsets",
    value: function _calculateOffsets() {
      this.sectionOffsets = {};

      var _iterator = _createForOfIteratorHelper(this.$el),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var section = _step.value;
          this.sectionOffsets[section.id] = section.offsetTop;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_getLinkofSection",
    value: function _getLinkofSection(id) {
      var targetLink = E.getTrigger({
        a: {
          optional: {
            href: "#" + id,
            "data-scrollspy": "#" + id
          }
        },
        button: {
          optional: {
            "data-scrollspy": "#" + id
          }
        }
      });
      var nodeTransformer = this.settings.linkNode.call(this, targetLink);
      return cash_min(nodeTransformer);
    }
  }, {
    key: "_handleWindowScroll",
    value: function _handleWindowScroll() {
      var windowTop = E.getDocumentScrollTop();
      windowTop += this.settings.offset + window.innerHeight / 2;

      for (var id in this.sectionOffsets) {
        if (this.sectionOffsets[id] < windowTop) {
          this.activeSection = document.getElementById(id);

          this._getLinkofSection(id).addClass(this.settings.activeClass).siblings().removeClass(this.settings.activeClass);
        }
      }
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      window.addEventListener("scroll", this.listeners[0] = this._handleWindowScroll.bind(this));
      document.addEventListener("DOMContentLoaded", this._calculateOffsets.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      window.removeEventListener("scroll", this.listeners[0]);
    }
  }, {
    key: "open",
    value: function open(id) {
      this._getLinkofSection(id).addClass(this.settings.activeClass).siblings().removeClass(this.settings.activeClass);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$8;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$8;
    }
  }]);

  return ScrollSpy;
}();

var VERSION$9 = "0.0.1";
var DEFAULTS$9 = {
  animInDuration: 600,
  animOutDuration: 600
};

var Lightbox = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Lightbox, _EmpyrealComponent);

  var _super = _createSuper(Lightbox);

  /**
   * @param {Element} el
   * @param {Object} options
   */
  function Lightbox(el, options) {
    var _this;

    _classCallCheck(this, Lightbox);

    _this = _super.call(this, el);
    _this.settings = _objectSpread2({}, DEFAULTS$9, {}, options);
    _this.$el = cash_min(_this.el);
    _this.id = _this.el.id;

    if (!_this.id) {
      _this.id = E.generateUUID();

      _this.$el.attr("id", _this.id);
    }

    _this.$images = _this.$el.find("img");
    _this.numberOfImages = _this.$el.find("img").length;
    _this.listeners = [];

    _this._init();

    return _this;
  }

  _createClass(Lightbox, [{
    key: "_init",
    value: function _init() {
      this.$lightbox = cash_min("<div class=\"lightbox-ui\" data-lightbox=".concat(this.id, " />"));
      this.$imageContainer = cash_min("<div class=\"lightbox-images\" />");
      this.$lightboxImages = this.$images.clone();
      this.$imageContainer.append(this.$lightboxImages);
      this.$topbar = cash_min("<div class=\"top-bar\" />");
      this.$lightboxCounter = cash_min("<span class=\"lightbox-counter\" />");
      this.$lightboxClose = cash_min("<span class=\"lightbox-close\" />");
      this.$lightboxFullscreen = cash_min("<span class=\"lightbox-fullscreen\" />");
      this.$topbar.append(this.$lightboxCounter).append(this.$lightboxClose).append(this.$lightboxFullscreen);
      this.$nextBtn = cash_min("<span class=\"right\" />");
      this.$prevBtn = cash_min("<span class=\"left\" />");
      this.$lightbox.append(this.$imageContainer).append(this.$topbar).append(this.$prevBtn).append(this.$nextBtn);
      cash_min("body").append(this.$lightbox);

      this._setupEventHandlers();
    }
  }, {
    key: "_handleLightboxOpen",
    value: function _handleLightboxOpen(e) {
      this.open(this.$images.index(e.target));
      this.$lightbox.addClass("active");
      anime({
        targets: this.$lightbox[0],
        opacity: 1,
        duration: this.settings.animInDuration,
        easing: "easeOutQuad"
      });
    }
  }, {
    key: "_handleLightboxClick",
    value: function _handleLightboxClick(e) {
      if (cash_min(e.target).hasClass("lightbox-ui") || cash_min(e.target).hasClass("lightbox-images")) this.close();
    }
  }, {
    key: "_handleFullscreenButtonClick",
    value: function _handleFullscreenButtonClick() {
      if (this.$lightbox.hasClass("fullscreen")) {
        this.$lightbox.removeClass("fullscreen");

        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        this.$lightbox.addClass("fullscreen");

        if (this.$lightbox[0].requestFullscreen) {
          this.$lightbox[0].requestFullscreen();
        } else if (this.$lightbox[0].mozRequestFullScreen) {
          this.$lightbox[0].mozRequestFullScreen();
        } else if (this.$lightbox[0].webkitRequestFullscreen) {
          this.$lightbox[0].webkitRequestFullscreen();
        } else if (this.$lightbox[0].msRequestFullscreen) {
          this.$lightbox[0].msRequestFullscreen();
        }
      }
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$images.on("click", this._handleLightboxOpen.bind(this));
      this.$nextBtn.on("click", this.next.bind(this));
      this.$prevBtn.on("click", this.prev.bind(this));
      this.$lightboxClose.on("click", this.close.bind(this));
      this.$lightboxFullscreen.on("click", this._handleFullscreenButtonClick.bind(this));
      document.addEventListener("click", this.listeners[0] = this._handleLightboxClick.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$images.off("click");
      this.$nextBtn.off("click");
      this.$prevBtn.off("click");
      this.$lightboxClose.off("click");
      this.$lightboxFullscreen.off("click");
      document.removeEventListener("click", this.listeners[0]);
    }
  }, {
    key: "next",
    value: function next() {
      var $activeImageIndex = this.$lightboxImages.filter(".active").index();

      if ($activeImageIndex + 1 == this.numberOfImages) {
        this.open(0);
      } else {
        this.open($activeImageIndex + 1);
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      var $activeImageIndex = this.$lightboxImages.filter(".active").index();

      if ($activeImageIndex == 0) {
        this.open(this.numberOfImages - 1);
      } else {
        this.open($activeImageIndex - 1);
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      if (this.$lightbox.hasClass("fullscreen")) this.$lightboxFullscreen.trigger("click");
      anime({
        targets: this.$lightbox[0],
        opacity: 0,
        duration: this.settings.animOutDuration,
        easing: "easeOutCubic",
        complete: function complete() {
          _this2.$lightbox.removeClass("active");
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var $activeImage = this.$lightboxImages.eq(index);
      this.$lightboxCounter.text(index + 1 + " / " + this.numberOfImages);
      $activeImage.addClass("active").siblings().removeClass("active");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$9;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$9;
    }
  }]);

  return Lightbox;
}(EmpyrealComponent);

function Snackbar(_ref) {
  var _ref$html = _ref.html,
      html = _ref$html === void 0 ? "" : _ref$html,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? "" : _ref$classes,
      _ref$dismiss = _ref.dismiss,
      dismiss = _ref$dismiss === void 0 ? 5000 : _ref$dismiss,
      _ref$complete = _ref.complete,
      complete = _ref$complete === void 0 ? function () {} : _ref$complete;
  var $snackbar = cash_min("<div class=\"snackbar ".concat(classes, "\" />"));
  $snackbar.html(html);
  cash_min("body").append($snackbar);
  $snackbar.css("opacity", 1);
  var topOffset = 15;
  var $snackbars = cash_min(".snackbar");

  for (var i = 0; i < $snackbars.length; i++) {
    var $node = cash_min($snackbars[$snackbars.length - i - 1]);
    var height = $node.outerHeight();
    var offset = 15;
    $node.css("top", topOffset + "px");
    topOffset += height + offset;
  }

  setTimeout(function () {
    var width = $snackbar.outerWidth() + 20;
    $snackbar.css({
      right: "-".concat(width, "px"),
      opacity: 0
    });
    complete();
    setTimeout(function () {
      $snackbar.remove();
    }, 500);
  }, dismiss);
}

var VERSION$a = "0.0.1";
var DEFAULTS$a = {
  data: [],
  highlightClass: "primary-text font-weight-400",
  dropdown: {},
  minLength: 1
};

var Autocomplete = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Autocomplete, _EmpyrealComponent);

  var _super = _createSuper(Autocomplete);

  function Autocomplete(el, options) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _super.call(this, el, options);
    _this.settings = _objectSpread2({}, DEFAULTS$a, {}, options);
    _this.$el = cash_min(_this.el);
    _this.id = _this.$el.attr("id") || E.generateUUID();
    _this.isDropdownEmpty = true;

    _this._init();

    _this.listeners = [];
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "_init",
    value: function _init() {
      this.$list = cash_min("<ul class=dropdown id=".concat("dropdown-" + this.id, "></ul>"));
      this.$el.parent().append(this.$list);
      this.renderAutocompleteItems("");
      this.dropdown = new Dropdown("#dropdown-" + this.id, _objectSpread2({
        isRelative: true
      }, this.settings.dropdown));

      this.dropdown._removeEventHandlers();

      this.dropdown.trigger = this.el;
      this.dropdown.$trigger = this.$el;

      this.dropdown._init();

      this._setupEventHandlers();
    }
  }, {
    key: "_addItem",
    value: function _addItem(text, input) {
      var href = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var startIndex = text.toLowerCase().indexOf(input);
      var value = text;

      if (startIndex != -1) {
        var highlight = text.slice(startIndex, startIndex + input.length);
        var highlightElem = "<span class='".concat(this.settings.highlightClass, "'>").concat(highlight, "</span>");
        value = text.replace(highlight, highlightElem);
      }

      var $item = cash_min("<a class=dropdown-item>".concat(value, "</a>"));
      if (href) $item.attr("href", href);
      if (image) $item.append("<img src=".concat(image, " />"));
      this.$list.append($item);
    }
  }, {
    key: "renderAutocompleteItems",
    value: function renderAutocompleteItems(input) {
      this.$list.empty();
      this.isDropdownEmpty = true;

      var _iterator = _createForOfIteratorHelper(this.settings.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (typeof item == "string") {
            if (item.toLowerCase().includes(input)) {
              this._addItem(item, input);

              this.isDropdownEmpty = false;
            }
          } else {
            var names = [item.value];

            if (item.alias) {
              var _iterator2 = _createForOfIteratorHelper(item.alias),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var alias = _step2.value;
                  names.push(alias);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            for (var _i = 0, _names = names; _i < _names.length; _i++) {
              var name = _names[_i];

              if (name.toLowerCase().includes(input)) {
                this._addItem(item.value, input, item.href, item.image);

                this.isDropdownEmpty = false;
                break;
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_handleKeyPress",
    value: function _handleKeyPress(e) {
      if (e.keyCode == E.keys.ARROW_DOWN || e.keyCode == E.keys.ARROW_UP) return;
      var input = this.$el.val().toLowerCase();
      if (input.length >= this.settings.minLength) this.renderAutocompleteItems(input);
      this.dropdown.$items = this.$list.children(".dropdown-item");
      this.dropdown.focusedIndex = -1;
      this.dropdown.calculateDropdownDimensions();
      this.dropdown.positionDropdown();
      if (!this.dropdown.isOpen) this.dropdown.open();
      if (this.isDropdownEmpty) this.$list.css("display", "none");
    }
  }, {
    key: "_handleDropdownClick",
    value: function _handleDropdownClick(e) {
      var $item = cash_min(e.target);
      this.$el.siblings("label").addClass("active");
      this.$el.val($item.text());
      this.dropdown.close();
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$el.on("keyup change paste", this._handleKeyPress.bind(this));
      this.$list.on("click", this._handleDropdownClick.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$el.off("keyup change paste");
      this.$list.off("click");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$a;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$a;
    }
  }]);

  return Autocomplete;
}(EmpyrealComponent);

var VERSION$b = "0.0.1";
var DEFAULTS$b = {
  data: [],
  placeholder: "",
  secondaryPlaceholder: "",
  autocomplete: null,
  verify: null,
  onChipAdd: null,
  onChipDelete: null,
  onChipSelect: null
};

var Chips = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Chips, _EmpyrealComponent);

  var _super = _createSuper(Chips);

  function Chips(el, options) {
    var _this;

    _classCallCheck(this, Chips);

    _this = _super.call(this, el, options);
    _this.settings = _objectSpread2({}, DEFAULTS$b, {}, options);
    _this.$el = cash_min(_this.el);
    _this.$input = _this.$el.find("input");
    _this.value = [];

    _this._init();

    return _this;
  }

  _createClass(Chips, [{
    key: "_init",
    value: function _init() {
      this.$input.attr("placeholder", this.settings.placeholder);

      var _iterator = _createForOfIteratorHelper(this.settings.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          this.add(i);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.settings.autocomplete) {
        this.autocomplete = new Autocomplete(this.$input[0], _objectSpread2({}, this.settings.autocomplete));
      }

      this._setupEventHandlers();
    }
  }, {
    key: "add",
    value: function add(_ref) {
      var tag = _ref.tag,
          image = _ref.image;
      var chip = cash_min("\n        <div class=chip tabindex=0 data-value=".concat(tag, ">\n            ").concat(tag, " <i class='material-icons close'>close</i>\n        </div>\n        "));
      if (image) chip.append("<img src=".concat(image, " />"));
      this.value.push(tag);
      chip.insertBefore(this.$input);
      if (typeof this.settings.onChipAdd === "function") this.settings.onChipAdd.call(this, tag, this.el);
      if (this.settings.secondaryPlaceholder) this.$input.attr("placeholder", this.settings.secondaryPlaceholder);
    }
  }, {
    key: "_handleInputKeypress",
    value: function _handleInputKeypress(e) {
      if (e.keyCode == E.keys.ENTER) {
        var val = this.$input.val();

        if (val != "" && this.value.indexOf(val) == -1) {
          this.add({
            tag: val
          });
          this.$input.val("");
        }
      }
    }
  }, {
    key: "_handleInputClick",
    value: function _handleInputClick(e) {
      if (cash_min(e.target).closest(".chip").length) {
        if (cash_min(e.target).hasClass("close")) {
          this.value.splice(this.value.indexOf(cash_min(e.target).closest(".chip").data("value")), 1);
          if (typeof this.settings.onChipDelete === "function") this.settings.onChipDelete.call(this, e.target, this.el);
          if (this.$el.children(".chip").length == 0) this.$input.attr("placeholder", this.settings.placeholder);
        }
      } else {
        this.$input[0].focus();
        this.$el.addClass("focused");
      }
    }
  }, {
    key: "_handleChipFocus",
    value: function _handleChipFocus(e) {
      if (typeof this.settings.onChipSelect === "function") this.settings.onChipDelete.call(this, e.target, this.el);
    }
  }, {
    key: "_handleInputBlur",
    value: function _handleInputBlur() {
      this.$el.removeClass("focused");
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$input.on("keyup", this._handleInputKeypress.bind(this));
      this.$el.on("click", this._handleInputClick.bind(this));
      this.$input.on("blur", this._handleInputBlur.bind(this));
      this.$el.children(".chip").on("focus", this._handleChipFocus.bind(this));
    }
  }, {
    key: "_removeEventHandlers",
    value: function _removeEventHandlers() {
      this.$input.off("keyup");
      this.$el.off("click");
      this.$input.off("blur");
      this.$el.children(".chip").off("focus");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEventHandlers();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$b;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$b;
    }
  }]);

  return Chips;
}(EmpyrealComponent);

var VERSION$c = "0.0.1";
var DEFAULTS$c = {
  dropdown: {}
};

var Select = /*#__PURE__*/function (_EmpyrealComponent) {
  _inherits(Select, _EmpyrealComponent);

  var _super = _createSuper(Select);

  function Select(el, options) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, el, options);
    _this.settings = _objectSpread2({}, DEFAULTS$c, {}, options);
    _this.$el = cash_min(_this.el);
    _this.id = _this.$el.attr("id") || E.generateUUID();
    _this.$input = cash_min("<input type='text' readonly='true' class=\"select-dropdown\" />");

    _this.$input.attr("id", _this.id);

    _this.isSelectMultiple = _this.el.hasAttribute("multiple");
    _this.$list = cash_min("<ul class=select-list />");
    _this.value = [];
    _this.textinput_content = [];

    _this._init();

    return _this;
  }

  _createClass(Select, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;

      cash_min("<span class='caret' />").insertAfter(this.$el);
      this.$list.insertAfter(this.$el);
      this.$input.insertAfter(this.$el);

      var _iterator = _createForOfIteratorHelper(this.$el.children()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var elem = _step.value;

          if (elem.nodeName.toLowerCase() == "option") {
            var $selectItem = this._createSelectOption(elem);

            this.$list.append($selectItem);
          } else if (elem.nodeName.toLowerCase() == "optgroup") {
            var $group = cash_min("<li class='optgroup'><p>".concat(cash_min(elem).attr("label"), "</p></li>"));

            var _iterator2 = _createForOfIteratorHelper(cash_min(elem).children()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;

                var _$selectItem = this._createSelectOption(item);

                $group.append(_$selectItem);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.$list.append($group);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.dropdown = new Dropdown(this.$list[0], _objectSpread2({
        isRelative: true,
        onOpenStart: function onOpenStart() {
          _this2.$el.siblings(".caret").addClass("active");
        },
        onCloseStart: function onCloseStart() {
          _this2.$el.siblings(".caret").removeClass("active");
        }
      }, this.settings.dropdown));

      this.dropdown._removeEventHandlers();

      this.dropdown.trigger = this.$input[0];
      this.dropdown.$trigger = this.$input;

      this.dropdown._init();

      this._setupEventHandlers();
    }
  }, {
    key: "_createSelectOption",
    value: function _createSelectOption(element) {
      var $element = cash_min(element);
      var $item = cash_min("<li>".concat($element.html(), "</li>"));

      if (this.isSelectMultiple) {
        $item = cash_min("<li class=checkbox-field><label><input type=\"checkbox\"><span>".concat($element.html(), "</span></label></li>"));
      }

      var value = $element.attr("value") || $element.text();
      $item.data("value", value);
      var img = $element.data("icon");

      if (img) {
        $item.append("<img src=\"".concat(img, "\" />"));
      }

      if ($element.attr("class")) {
        $item.attr("class", $element.attr("class"));
      }

      if (element.hasAttribute("disabled")) {
        $item.addClass("disabled");
      }

      return $item;
    }
  }, {
    key: "_updateTextInputValue",
    value: function _updateTextInputValue() {
      if (this.textinput_content.length) {
        this.$input.siblings("label").addClass("active");
      } else {
        this.$input.siblings("label").removeClass("active");
      }

      if (typeof this.textinput_content == "string") {
        this.$input.val(this.textinput_content);
      } else if (_typeof(this.textinput_content) == "object") {
        this.$input.val(this.textinput_content.join(", "));
      }
    }
  }, {
    key: "_handleSelectItemClick",
    value: function _handleSelectItemClick(e) {
      var $item = cash_min(e.target).closest("li");

      if (!$item.hasClass("disabled") && !$item.hasClass("optgroup")) {
        if (!this.isSelectMultiple) {
          this.value = $item.data("value");
          this.textinput_content = $item.text();
          this.close();
        } else {
          if ($item.hasClass("selected")) {
            this.value.splice(this.value.indexOf($item.data("value")), 1);
            this.textinput_content.splice(this.value.indexOf($item.text()), 1);
            $item.find("input[type=checkbox]").prop("checked", false);
            $item.removeClass("selected");
          } else {
            this.value.push($item.data("value"));
            this.textinput_content.push($item.text());
            $item.find("input[type=checkbox]").prop("checked", true);
            $item.addClass("selected");
          }
        }

        this._updateTextInputValue();
      }
    }
  }, {
    key: "_setupEventHandlers",
    value: function _setupEventHandlers() {
      this.$list.on("click", this._handleSelectItemClick.bind(this));
    }
  }, {
    key: "open",
    value: function open() {
      this.dropdown.open();
    }
  }, {
    key: "close",
    value: function close() {
      this.dropdown.close();
    }
  }], [{
    key: "version",
    get: function get() {
      return VERSION$c;
    }
  }, {
    key: "defaults",
    get: function get() {
      return DEFAULTS$c;
    }
  }]);

  return Select;
}(EmpyrealComponent);

var empyreal = {
  Modal: Modal,
  Tabs: Tabs,
  Dropdown: Dropdown,
  Sidenav: Sidenav,
  Collapsible: Collapsible,
  Tooltip: Tooltip,
  Carousel: Carousel,
  Pushpin: Pushpin,
  ScrollSpy: ScrollSpy,
  Lightbox: Lightbox,
  Snackbar: Snackbar,
  Autocomplete: Autocomplete,
  Select: Select,
  Chips: Chips,
  updateTextFields: E.updateTextFields(),
  jump: E.jump
};
empyreal.version = "0.0.1";

empyreal.activate = function (selector, component) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var json = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var elements = NodeList.prototype.isPrototypeOf(selector) ? selector : document.querySelectorAll(selector);
  var components = json ? {} : [];

  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      var initailize = new component(element, options);
      json ? components[element] = initailize : components.push(initailize);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return components;
};

export default empyreal;
//# sourceMappingURL=empyreal.esm.js.map
