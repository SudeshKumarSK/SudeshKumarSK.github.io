import {
  require_warning
} from "./chunk-O4EHNMGM.js";
import {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  Transition_default,
  addClass,
  hasClass,
  removeClass
} from "./chunk-IKPZBMVA.js";
import {
  arrow_default,
  computeStyles_default,
  eventListeners_default,
  flip_default,
  hide_default,
  offset_default,
  popperGenerator,
  popperOffsets_default,
  preventOverflow_default
} from "./chunk-JEL7OR3F.js";
import {
  require_react_dom
} from "./chunk-SRAQOA3L.js";
import {
  _extends,
  _objectWithoutPropertiesLoose
} from "./chunk-T4MTQRGO.js";
import {
  require_jsx_runtime
} from "./chunk-BU3YUUBE.js";
import {
  require_prop_types
} from "./chunk-46L4JSF6.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames75() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames75.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames75.default = classNames75;
        module.exports = classNames75;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames75;
        });
      } else {
        window.classNames = classNames75;
      }
    })();
  }
});

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant5 = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant5;
  }
});

// node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var require_createChainableTypeChecker = __commonJS({
  "node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createChainableTypeChecker;
    function createChainableTypeChecker(validate) {
      function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;
        if (props[propName] == null) {
          if (isRequired) {
            return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
          }
          return null;
        }
        for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
          args[_key - 6] = arguments[_key];
        }
        return validate.apply(void 0, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    module.exports = exports["default"];
  }
});

// node_modules/prop-types-extra/lib/all.js
var require_all = __commonJS({
  "node_modules/prop-types-extra/lib/all.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = all2;
    var _createChainableTypeChecker = require_createChainableTypeChecker();
    var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function all2() {
      for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }
      function allPropTypes() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var error = null;
        validators.forEach(function(validator) {
          if (error != null) {
            return;
          }
          var result = validator.apply(void 0, args);
          if (result != null) {
            error = result;
          }
        });
        return error;
      }
      return (0, _createChainableTypeChecker2.default)(allPropTypes);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-bootstrap/esm/Accordion.js
var import_classnames7 = __toESM(require_classnames());
var React12 = __toESM(require_react());
var import_react11 = __toESM(require_react());

// node_modules/uncontrollable/lib/esm/hook.js
var import_react = __toESM(require_react());

// node_modules/uncontrollable/lib/esm/utils.js
var import_invariant = __toESM(require_browser());
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}

// node_modules/uncontrollable/lib/esm/hook.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0, import_react.useRef)(propValue !== void 0);
  var _useState = (0, import_react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp2 = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react.useCallback)(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler)
      handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function(result, fieldName) {
    var _extends2;
    var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_react2 = __toESM(require_react());

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_invariant2 = __toESM(require_browser());

// node_modules/react-bootstrap/esm/ThemeProvider.js
var React2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DEFAULT_BREAKPOINTS = ["xxl", "xl", "lg", "md", "sm", "xs"];
var DEFAULT_MIN_BREAKPOINT = "xs";
var ThemeContext = React2.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
var {
  Consumer,
  Provider
} = ThemeContext;
function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  minBreakpoint = DEFAULT_MIN_BREAKPOINT,
  dir,
  children
}) {
  const contextValue = (0, import_react3.useMemo)(() => ({
    prefixes: {
      ...prefixes
    },
    breakpoints,
    minBreakpoint,
    dir
  }), [prefixes, breakpoints, minBreakpoint, dir]);
  return (0, import_jsx_runtime.jsx)(Provider, {
    value: contextValue,
    children
  });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0, import_react3.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = (0, import_react3.useContext)(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = (0, import_react3.useContext)(ThemeContext);
  return minBreakpoint;
}
function useIsRTL() {
  const {
    dir
  } = (0, import_react3.useContext)(ThemeContext);
  return dir === "rtl";
}
var ThemeProvider_default = ThemeProvider;

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_classnames3 = __toESM(require_classnames());
var React8 = __toESM(require_react());
var import_react8 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_classnames2 = __toESM(require_classnames());
var React6 = __toESM(require_react());
var import_react7 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Collapse.js
var import_classnames = __toESM(require_classnames());

// node_modules/dom-helpers/esm/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/dom-helpers/esm/ownerWindow.js
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

// node_modules/dom-helpers/esm/getComputedStyle.js
function getComputedStyle2(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

// node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}

// node_modules/dom-helpers/esm/hyphenateStyle.js
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}

// node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

// node_modules/dom-helpers/esm/css.js
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle2(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
var css_default = style;

// node_modules/react-bootstrap/esm/Collapse.js
var import_react6 = __toESM(require_react());

// node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM_default = !!(typeof window !== "undefined" && window.document && window.document.createElement);

// node_modules/dom-helpers/esm/addEventListener.js
var optionsSupported = false;
var onceSupported = false;
try {
  options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM_default) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
var options;
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
var addEventListener_default = addEventListener;

// node_modules/dom-helpers/esm/removeEventListener.js
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
var removeEventListener_default = removeEventListener;

// node_modules/dom-helpers/esm/listen.js
function listen(node, eventName, handler, options) {
  addEventListener_default(node, eventName, handler, options);
  return function() {
    removeEventListener_default(node, eventName, handler, options);
  };
}
var listen_default = listen;

// node_modules/dom-helpers/esm/triggerEvent.js
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }
  if (cancelable === void 0) {
    cancelable = true;
  }
  if (node) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

// node_modules/dom-helpers/esm/transitionEnd.js
function parseDuration(node) {
  var str = css_default(node, "transitionDuration") || "";
  var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }
  var called = false;
  var handle = setTimeout(function() {
    if (!called)
      triggerEvent(element, "transitionend", true);
  }, duration + padding);
  var remove = listen_default(element, "transitionend", function() {
    called = true;
  }, {
    once: true
  });
  return function() {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null)
    duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen_default(element, "transitionend", handler);
  return function() {
    removeEmulate();
    remove();
  };
}

// node_modules/react-bootstrap/esm/transitionEndListener.js
function parseDuration2(node, property) {
  const str = css_default(node, property) || "";
  const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration2(element, "transitionDuration");
  const delay = parseDuration2(element, "transitionDelay");
  const remove = transitionEnd(element, (e) => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

// node_modules/react-bootstrap/esm/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.filter((f) => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }
    if (acc === null)
      return f;
    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
var createChainedFunction_default = createChainedFunction;

// node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function triggerBrowserReflow(node) {
  node.offsetHeight;
}

// node_modules/react-bootstrap/esm/TransitionWrapper.js
var import_react5 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react4 = __toESM(require_react());
var toFnRef = function toFnRef2(ref) {
  return !ref || typeof ref === "function" ? ref : function(value) {
    ref.current = value;
  };
};
function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function(value) {
    if (a)
      a(value);
    if (b)
      b(value);
  };
}
function useMergedRefs(refA, refB) {
  return (0, import_react4.useMemo)(function() {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}
var useMergedRefs_default = useMergedRefs;

// node_modules/react-bootstrap/esm/safeFindDOMNode.js
var import_react_dom = __toESM(require_react_dom());
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return import_react_dom.default.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}

// node_modules/react-bootstrap/esm/TransitionWrapper.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var TransitionWrapper = import_react5.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0, import_react5.useRef)(null);
  const mergedRef = useMergedRefs_default(nodeRef, childRef);
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = (0, import_react5.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0, import_react5.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0, import_react5.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0, import_react5.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0, import_react5.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0, import_react5.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0, import_react5.useCallback)(normalize(addEndListener), [addEndListener]);
  return (0, import_jsx_runtime2.jsx)(Transition_default, {
    ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    children: typeof children === "function" ? (status, innerProps) => children(status, {
      ...innerProps,
      ref: attachRef
    }) : import_react5.default.cloneElement(children, {
      ref: attachRef
    })
  });
});
var TransitionWrapper_default = TransitionWrapper;

// node_modules/react-bootstrap/esm/Collapse.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css_default(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css_default(elem, margins[1]), 10);
}
var collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
var Collapse = import_react6.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = "height",
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  const computedDimension = typeof dimension === "function" ? dimension() : dimension;
  const handleEnter = (0, import_react6.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = "0";
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0, import_react6.useMemo)(() => createChainedFunction_default((elem) => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0, import_react6.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  const handleExit = (0, import_react6.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0, import_react6.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return (0, import_jsx_runtime3.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    children: (state, innerProps) => import_react6.default.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
    })
  });
});
Collapse.defaultProps = defaultProps;
var Collapse_default = Collapse;

// node_modules/react-bootstrap/esm/AccordionContext.js
var React5 = __toESM(require_react());
function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
var context = React5.createContext({});
context.displayName = "AccordionContext";
var AccordionContext_default = context;

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var AccordionCollapse = React6.forwardRef(({
  as: Component2 = "div",
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0, import_react7.useContext)(AccordionContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-collapse");
  return (0, import_jsx_runtime4.jsx)(Collapse_default, {
    ref,
    in: isAccordionItemSelected(activeEventKey, eventKey),
    ...props,
    className: (0, import_classnames2.default)(className, bsPrefix),
    children: (0, import_jsx_runtime4.jsx)(Component2, {
      children: React6.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = "AccordionCollapse";
var AccordionCollapse_default = AccordionCollapse;

// node_modules/react-bootstrap/esm/AccordionItemContext.js
var React7 = __toESM(require_react());
var context2 = React7.createContext({
  eventKey: ""
});
context2.displayName = "AccordionItemContext";
var AccordionItemContext_default = context2;

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var AccordionBody = React8.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-body");
  const {
    eventKey
  } = (0, import_react8.useContext)(AccordionItemContext_default);
  return (0, import_jsx_runtime5.jsx)(AccordionCollapse_default, {
    eventKey,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    children: (0, import_jsx_runtime5.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames3.default)(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = "AccordionBody";
var AccordionBody_default = AccordionBody;

// node_modules/react-bootstrap/esm/AccordionButton.js
var React9 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_classnames4 = __toESM(require_classnames());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = (0, import_react9.useContext)(AccordionContext_default);
  return (e) => {
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null ? void 0 : onSelect(eventKeyPassed, e);
    onClick == null ? void 0 : onClick(e);
  };
}
var AccordionButton = React9.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "button",
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-button");
  const {
    eventKey
  } = (0, import_react9.useContext)(AccordionItemContext_default);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0, import_react9.useContext)(AccordionContext_default);
  if (Component2 === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime6.jsx)(Component2, {
    ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: (0, import_classnames4.default)(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && "collapsed")
  });
});
AccordionButton.displayName = "AccordionButton";
var AccordionButton_default = AccordionButton;

// node_modules/react-bootstrap/esm/AccordionHeader.js
var import_classnames5 = __toESM(require_classnames());
var React10 = __toESM(require_react());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var AccordionHeader = React10.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "h2",
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-header");
  return (0, import_jsx_runtime7.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames5.default)(className, bsPrefix),
    children: (0, import_jsx_runtime7.jsx)(AccordionButton_default, {
      onClick,
      children
    })
  });
});
AccordionHeader.displayName = "AccordionHeader";
var AccordionHeader_default = AccordionHeader;

// node_modules/react-bootstrap/esm/AccordionItem.js
var import_classnames6 = __toESM(require_classnames());
var React11 = __toESM(require_react());
var import_react10 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var AccordionItem = React11.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-item");
  const contextValue = (0, import_react10.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return (0, import_jsx_runtime8.jsx)(AccordionItemContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime8.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames6.default)(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = "AccordionItem";
var AccordionItem_default = AccordionItem;

// node_modules/react-bootstrap/esm/Accordion.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var Accordion = React12.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "accordion");
  const contextValue = (0, import_react11.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return (0, import_jsx_runtime9.jsx)(AccordionContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime9.jsx)(Component2, {
      ref,
      ...controlledProps,
      className: (0, import_classnames7.default)(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = "Accordion";
var Accordion_default = Object.assign(Accordion, {
  Button: AccordionButton_default,
  Collapse: AccordionCollapse_default,
  Item: AccordionItem_default,
  Header: AccordionHeader_default,
  Body: AccordionBody_default
});

// node_modules/react-bootstrap/esm/Alert.js
var import_classnames12 = __toESM(require_classnames());
var React19 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useEventCallback.js
var import_react13 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react12 = __toESM(require_react());
function useCommittedRef(value) {
  var ref = (0, import_react12.useRef)(value);
  (0, import_react12.useEffect)(function() {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default = useCommittedRef;

// node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn) {
  var ref = useCommittedRef_default(fn);
  return (0, import_react13.useCallback)(function() {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

// node_modules/@restart/ui/esm/Anchor.js
var React14 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react14 = __toESM(require_react());
function useCallbackRef() {
  return (0, import_react14.useState)(null);
}

// node_modules/@restart/hooks/esm/useEventListener.js
var import_react15 = __toESM(require_react());
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }
  var handler = useEventCallback(listener);
  (0, import_react15.useEffect)(function() {
    var target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function() {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

// node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react16 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useInterval.js
var import_react17 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useRafInterval.js
var import_react18 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergeState.js
var import_react19 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMounted.js
var import_react20 = __toESM(require_react());
function useMounted() {
  var mounted = (0, import_react20.useRef)(true);
  var isMounted = (0, import_react20.useRef)(function() {
    return mounted.current;
  });
  (0, import_react20.useEffect)(function() {
    mounted.current = true;
    return function() {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react21 = __toESM(require_react());
function usePrevious(value) {
  var ref = (0, import_react21.useRef)(null);
  (0, import_react21.useEffect)(function() {
    ref.current = value;
  });
  return ref.current;
}

// node_modules/@restart/hooks/esm/useImage.js
var import_react22 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react24 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react23 = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react23.useLayoutEffect : import_react23.useEffect;

// node_modules/@restart/ui/esm/Button.js
var React13 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded = ["as", "disabled"];
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = "a";
    } else {
      tagName = "button";
    }
  }
  const meta = {
    tagName
  };
  if (tagName === "button") {
    return [{
      type: type || "button",
      disabled
    }, meta];
  }
  const handleClick = (event) => {
    if (disabled || tagName === "a" && isTrivialHref(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === "a") {
    href || (href = "#");
    if (disabled) {
      href = void 0;
    }
  }
  return [{
    role: role != null ? role : "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: disabled ? void 0 : tabIndex,
    href,
    target: tagName === "a" ? target : void 0,
    "aria-disabled": !disabled ? void 0 : disabled,
    rel: tagName === "a" ? rel : void 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
var Button = React13.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
  const [buttonProps, {
    tagName: Component2
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return (0, import_jsx_runtime10.jsx)(Component2, Object.assign({}, props, buttonProps, {
    ref
  }));
});
Button.displayName = "Button";
var Button_default = Button;

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded2 = ["onKeyDown"];
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref2(href) {
  return !href || href.trim() === "#";
}
var Anchor = React14.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose3(_ref, _excluded2);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref2(props.href) || props.role === "button") {
    return (0, import_jsx_runtime11.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return (0, import_jsx_runtime11.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

// node_modules/react-bootstrap/esm/Fade.js
var import_classnames8 = __toESM(require_classnames());
var React15 = __toESM(require_react());
var import_react25 = __toESM(require_react());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var defaultProps2 = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
var Fade = React15.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = (0, import_react25.useCallback)((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return (0, import_jsx_runtime12.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => React15.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames8.default)("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = defaultProps2;
Fade.displayName = "Fade";
var Fade_default = Fade;

// node_modules/react-bootstrap/esm/CloseButton.js
var import_prop_types = __toESM(require_prop_types());
var React16 = __toESM(require_react());
var import_classnames9 = __toESM(require_classnames());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var propTypes = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": import_prop_types.default.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: import_prop_types.default.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: import_prop_types.default.oneOf(["white"])
};
var defaultProps3 = {
  "aria-label": "Close"
};
var CloseButton = React16.forwardRef(({
  className,
  variant,
  ...props
}, ref) => (0, import_jsx_runtime13.jsx)("button", {
  ref,
  type: "button",
  className: (0, import_classnames9.default)("btn-close", variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps3;
var CloseButton_default = CloseButton;

// node_modules/react-bootstrap/esm/divWithClassName.js
var React17 = __toESM(require_react());
var import_classnames10 = __toESM(require_classnames());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var divWithClassName_default = (className) => React17.forwardRef((p, ref) => (0, import_jsx_runtime14.jsx)("div", {
  ...p,
  ref,
  className: (0, import_classnames10.default)(p.className, className)
}));

// node_modules/react-bootstrap/esm/createWithBsPrefix.js
var import_classnames11 = __toESM(require_classnames());

// node_modules/dom-helpers/esm/camelize.js
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function(_, chr) {
    return chr.toUpperCase();
  });
}

// node_modules/react-bootstrap/esm/createWithBsPrefix.js
var React18 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var pascalCase = (str) => str[0].toUpperCase() + camelize(str).slice(1);
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component: Component2,
  defaultProps: defaultProps41
} = {}) {
  const BsComponent = React18.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component2 || "div",
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return (0, import_jsx_runtime15.jsx)(Tag, {
      ref,
      className: (0, import_classnames11.default)(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps41;
  BsComponent.displayName = displayName;
  return BsComponent;
}

// node_modules/react-bootstrap/esm/Alert.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var DivStyledAsH4 = divWithClassName_default("h4");
DivStyledAsH4.displayName = "DivStyledAsH4";
var AlertHeading = createWithBsPrefix("alert-heading", {
  Component: DivStyledAsH4
});
var AlertLink = createWithBsPrefix("alert-link", {
  Component: Anchor_default
});
var defaultProps4 = {
  variant: "primary",
  show: true,
  transition: Fade_default,
  closeLabel: "Close alert"
};
var Alert = React19.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show,
    closeLabel,
    closeVariant,
    className,
    children,
    variant,
    onClose,
    dismissible,
    transition,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: "onClose"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "alert");
  const handleClose = useEventCallback((e) => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade_default : transition;
  const alert = (0, import_jsx_runtime17.jsxs)("div", {
    role: "alert",
    ...!Transition ? props : void 0,
    ref,
    className: (0, import_classnames12.default)(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && (0, import_jsx_runtime16.jsx)(CloseButton_default, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition)
    return show ? alert : null;
  return (0, import_jsx_runtime16.jsx)(Transition, {
    unmountOnExit: true,
    ...props,
    ref: void 0,
    in: show,
    children: alert
  });
});
Alert.displayName = "Alert";
Alert.defaultProps = defaultProps4;
var Alert_default = Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
});

// node_modules/react-bootstrap/esm/Anchor.js
var Anchor_default2 = Anchor_default;

// node_modules/react-bootstrap/esm/Badge.js
var import_classnames13 = __toESM(require_classnames());
var React20 = __toESM(require_react());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var defaultProps5 = {
  bg: "primary",
  pill: false
};
var Badge = React20.forwardRef(({
  bsPrefix,
  bg,
  pill,
  text,
  className,
  as: Component2 = "span",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "badge");
  return (0, import_jsx_runtime18.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames13.default)(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = "Badge";
Badge.defaultProps = defaultProps5;
var Badge_default = Badge;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_classnames15 = __toESM(require_classnames());
var React22 = __toESM(require_react());

// node_modules/react-bootstrap/esm/BreadcrumbItem.js
var import_classnames14 = __toESM(require_classnames());
var React21 = __toESM(require_react());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var defaultProps6 = {
  active: false,
  linkProps: {}
};
var BreadcrumbItem = React21.forwardRef(({
  bsPrefix,
  active,
  children,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "li",
  linkAs: LinkComponent = Anchor_default,
  linkProps,
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb-item");
  return (0, import_jsx_runtime19.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames14.default)(prefix, className, {
      active
    }),
    "aria-current": active ? "page" : void 0,
    children: active ? children : (0, import_jsx_runtime19.jsx)(LinkComponent, {
      ...linkProps,
      href,
      title,
      target,
      children
    })
  });
});
BreadcrumbItem.displayName = "BreadcrumbItem";
BreadcrumbItem.defaultProps = defaultProps6;
var BreadcrumbItem_default = BreadcrumbItem;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var defaultProps7 = {
  label: "breadcrumb",
  listProps: {}
};
var Breadcrumb = React22.forwardRef(({
  bsPrefix,
  className,
  listProps,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "nav",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb");
  return (0, import_jsx_runtime20.jsx)(Component2, {
    "aria-label": label,
    className,
    ref,
    ...props,
    children: (0, import_jsx_runtime20.jsx)("ol", {
      ...listProps,
      className: (0, import_classnames15.default)(prefix, listProps == null ? void 0 : listProps.className),
      children
    })
  });
});
Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.defaultProps = defaultProps7;
var Breadcrumb_default = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem_default
});

// node_modules/react-bootstrap/esm/Button.js
var import_classnames16 = __toESM(require_classnames());
var React23 = __toESM(require_react());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var defaultProps8 = {
  variant: "primary",
  active: false,
  disabled: false
};
var Button2 = React23.forwardRef(({
  as,
  bsPrefix,
  variant,
  size: size2,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn");
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component2 = tagName;
  return (0, import_jsx_runtime21.jsx)(Component2, {
    ...buttonProps,
    ...props,
    ref,
    className: (0, import_classnames16.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size2 && `${prefix}-${size2}`, props.href && props.disabled && "disabled")
  });
});
Button2.displayName = "Button";
Button2.defaultProps = defaultProps8;
var Button_default2 = Button2;

// node_modules/react-bootstrap/esm/ButtonGroup.js
var import_classnames17 = __toESM(require_classnames());
var React24 = __toESM(require_react());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var defaultProps9 = {
  vertical: false,
  role: "group"
};
var ButtonGroup = React24.forwardRef(({
  bsPrefix,
  size: size2,
  vertical,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...rest
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-group");
  let baseClass = prefix;
  if (vertical)
    baseClass = `${prefix}-vertical`;
  return (0, import_jsx_runtime22.jsx)(Component2, {
    ...rest,
    ref,
    className: (0, import_classnames17.default)(className, baseClass, size2 && `${prefix}-${size2}`)
  });
});
ButtonGroup.displayName = "ButtonGroup";
ButtonGroup.defaultProps = defaultProps9;
var ButtonGroup_default = ButtonGroup;

// node_modules/react-bootstrap/esm/ButtonToolbar.js
var import_classnames18 = __toESM(require_classnames());
var React25 = __toESM(require_react());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var defaultProps10 = {
  role: "toolbar"
};
var ButtonToolbar = React25.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-toolbar");
  return (0, import_jsx_runtime23.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames18.default)(className, prefix)
  });
});
ButtonToolbar.displayName = "ButtonToolbar";
ButtonToolbar.defaultProps = defaultProps10;
var ButtonToolbar_default = ButtonToolbar;

// node_modules/react-bootstrap/esm/Card.js
var import_classnames21 = __toESM(require_classnames());
var React29 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardImg.js
var import_classnames19 = __toESM(require_classnames());
var React26 = __toESM(require_react());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var CardImg = React26.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    variant,
    as: Component2 = "img",
    ...props
  }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, "card-img");
    return (0, import_jsx_runtime24.jsx)(Component2, {
      ref,
      className: (0, import_classnames19.default)(variant ? `${prefix}-${variant}` : prefix, className),
      ...props
    });
  }
);
CardImg.displayName = "CardImg";
var CardImg_default = CardImg;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_classnames20 = __toESM(require_classnames());
var React28 = __toESM(require_react());
var import_react26 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardHeaderContext.js
var React27 = __toESM(require_react());
var context3 = React27.createContext(null);
context3.displayName = "CardHeaderContext";
var CardHeaderContext_default = context3;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var CardHeader = React28.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = (0, import_react26.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return (0, import_jsx_runtime25.jsx)(CardHeaderContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime25.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames20.default)(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// node_modules/react-bootstrap/esm/Card.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var DivStyledAsH6 = divWithClassName_default("h6");
var CardBody = createWithBsPrefix("card-body");
var CardTitle = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});
var CardSubtitle = createWithBsPrefix("card-subtitle", {
  Component: DivStyledAsH6
});
var CardLink = createWithBsPrefix("card-link", {
  Component: "a"
});
var CardText = createWithBsPrefix("card-text", {
  Component: "p"
});
var CardFooter = createWithBsPrefix("card-footer");
var CardImgOverlay = createWithBsPrefix("card-img-overlay");
var defaultProps11 = {
  body: false
};
var Card = React29.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return (0, import_jsx_runtime26.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames21.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? (0, import_jsx_runtime26.jsx)(CardBody, {
      children
    }) : children
  });
});
Card.displayName = "Card";
Card.defaultProps = defaultProps11;
var Card_default = Object.assign(Card, {
  Img: CardImg_default,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader_default,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});

// node_modules/react-bootstrap/esm/CardGroup.js
var CardGroup_default = createWithBsPrefix("card-group");

// node_modules/@restart/hooks/esm/useUpdateEffect.js
var import_react27 = __toESM(require_react());
function useUpdateEffect(fn, deps) {
  var isFirst = (0, import_react27.useRef)(true);
  (0, import_react27.useEffect)(function() {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}
var useUpdateEffect_default = useUpdateEffect;

// node_modules/@restart/hooks/esm/useTimeout.js
var import_react30 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useUpdatedRef.js
var import_react28 = __toESM(require_react());
function useUpdatedRef(value) {
  var valueRef = (0, import_react28.useRef)(value);
  valueRef.current = value;
  return valueRef;
}

// node_modules/@restart/hooks/esm/useWillUnmount.js
var import_react29 = __toESM(require_react());
function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  (0, import_react29.useEffect)(function() {
    return function() {
      return onUnmount.current();
    };
  }, []);
}

// node_modules/@restart/hooks/esm/useTimeout.js
var MAX_DELAY_MS = Math.pow(2, 31) - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function() {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
function useTimeout() {
  var isMounted = useMounted();
  var handleRef = (0, import_react30.useRef)();
  useWillUnmount(function() {
    return clearTimeout(handleRef.current);
  });
  return (0, import_react30.useMemo)(function() {
    var clear = function clear2() {
      return clearTimeout(handleRef.current);
    };
    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }
      if (!isMounted())
        return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set,
      clear
    };
  }, []);
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_classnames23 = __toESM(require_classnames());
var React32 = __toESM(require_react());
var import_react31 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CarouselCaption.js
var CarouselCaption_default = createWithBsPrefix("carousel-caption");

// node_modules/react-bootstrap/esm/CarouselItem.js
var import_classnames22 = __toESM(require_classnames());
var React30 = __toESM(require_react());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var CarouselItem = React30.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = (0, import_classnames22.default)(className, useBootstrapPrefix(bsPrefix, "carousel-item"));
  return (0, import_jsx_runtime27.jsx)(Component2, {
    ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = "CarouselItem";
var CarouselItem_default = CarouselItem;

// node_modules/react-bootstrap/esm/ElementChildren.js
var React31 = __toESM(require_react());
function map(children, func) {
  let index = 0;
  return React31.Children.map(children, (child) => React31.isValidElement(child) ? func(child, index++) : child);
}
function forEach(children, func) {
  let index = 0;
  React31.Children.forEach(children, (child) => {
    if (React31.isValidElement(child))
      func(child, index++);
  });
}
function hasChildOfType(children, type) {
  return React31.Children.toArray(children).some((child) => React31.isValidElement(child) && child.type === type);
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var SWIPE_THRESHOLD = 40;
var defaultProps12 = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  indicatorLabels: [],
  defaultActiveIndex: 0,
  interval: 5e3,
  keyboard: true,
  pause: "hover",
  wrap: true,
  touch: true,
  prevIcon: (0, import_jsx_runtime28.jsx)("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: "Previous",
  nextIcon: (0, import_jsx_runtime28.jsx)("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: "Next"
};
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== "none" && elementStyle.visibility !== "hidden" && getComputedStyle(element.parentNode).display !== "none";
}
var Carousel = React32.forwardRef((uncontrolledProps, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    bsPrefix,
    slide,
    fade,
    controls,
    indicators,
    indicatorLabels,
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval,
    keyboard,
    onKeyDown,
    pause,
    onMouseOver,
    onMouseOut,
    wrap,
    touch,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon,
    prevLabel,
    nextIcon,
    nextLabel,
    variant,
    className,
    children,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeIndex: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const nextDirectionRef = (0, import_react31.useRef)(null);
  const [direction, setDirection] = (0, import_react31.useState)("next");
  const [paused, setPaused] = (0, import_react31.useState)(false);
  const [isSliding, setIsSliding] = (0, import_react31.useState)(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = (0, import_react31.useState)(activeIndex || 0);
  (0, import_react31.useEffect)(() => {
    if (!isSliding && activeIndex !== renderedActiveIndex) {
      if (nextDirectionRef.current) {
        setDirection(nextDirectionRef.current);
      } else {
        setDirection((activeIndex || 0) > renderedActiveIndex ? "next" : "prev");
      }
      if (slide) {
        setIsSliding(true);
      }
      setRenderedActiveIndex(activeIndex || 0);
    }
  }, [activeIndex, isSliding, renderedActiveIndex, slide]);
  (0, import_react31.useEffect)(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval;
  forEach(children, (child, index) => {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef_default(activeChildInterval);
  const prev = (0, import_react31.useCallback)((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = "prev";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]);
  const next = useEventCallback((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = "next";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = (0, import_react31.useRef)();
  (0, import_react31.useImperativeHandle)(ref, () => ({
    element: elementRef.current,
    prev,
    next
  }));
  const nextWhenVisible = useEventCallback(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === "next" ? "start" : "end";
  useUpdateEffect_default(() => {
    if (slide) {
      return;
    }
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = (0, import_react31.useCallback)((node) => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = (0, import_react31.useCallback)(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = (0, import_react31.useCallback)((event) => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
        default:
      }
    }
    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = (0, import_react31.useCallback)((event) => {
    if (pause === "hover") {
      setPaused(true);
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = (0, import_react31.useCallback)((event) => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = (0, import_react31.useRef)(0);
  const touchDeltaXRef = (0, import_react31.useRef)(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = (0, import_react31.useCallback)((event) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === "hover") {
      setPaused(true);
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = (0, import_react31.useCallback)((event) => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = (0, import_react31.useCallback)((event) => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === "hover") {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || void 0);
    }
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = (0, import_react31.useRef)();
  (0, import_react31.useEffect)(() => {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return void 0;
    }
    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : void 0);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = (0, import_react31.useMemo)(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => (event) => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return (0, import_jsx_runtime29.jsxs)(Component2, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: (0, import_classnames23.default)(className, prefix, slide && "slide", fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && (0, import_jsx_runtime28.jsx)("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => (0, import_jsx_runtime28.jsx)("button", {
        type: "button",
        "data-bs-target": "",
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? "active" : void 0,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : void 0,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), (0, import_jsx_runtime28.jsx)("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? (0, import_jsx_runtime28.jsx)(TransitionWrapper_default, {
          in: isActive,
          onEnter: isActive ? handleEnter : void 0,
          onEntered: isActive ? handleEntered : void 0,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => React32.cloneElement(child, {
            ...innerProps,
            className: (0, import_classnames23.default)(child.props.className, isActive && status !== "entered" && orderClassName, (status === "entered" || status === "exiting") && "active", (status === "entering" || status === "exiting") && directionalClassName)
          })
        }) : React32.cloneElement(child, {
          className: (0, import_classnames23.default)(child.props.className, isActive && "active")
        });
      })
    }), controls && (0, import_jsx_runtime29.jsxs)(import_jsx_runtime30.Fragment, {
      children: [(wrap || activeIndex !== 0) && (0, import_jsx_runtime29.jsxs)(Anchor_default, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && (0, import_jsx_runtime28.jsx)("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && (0, import_jsx_runtime29.jsxs)(Anchor_default, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && (0, import_jsx_runtime28.jsx)("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = "Carousel";
Carousel.defaultProps = defaultProps12;
var Carousel_default = Object.assign(Carousel, {
  Caption: CarouselCaption_default,
  Item: CarouselItem_default
});

// node_modules/react-bootstrap/esm/Col.js
var import_classnames24 = __toESM(require_classnames());
var React33 = __toESM(require_react());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "col");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === "object" && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (span)
      spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null)
      classes.push(`order${infix}-${order}`);
    if (offset != null)
      classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: (0, import_classnames24.default)(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
var Col = React33.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (props, ref) => {
    const [{
      className,
      ...colProps
    }, {
      as: Component2 = "div",
      bsPrefix,
      spans
    }] = useCol(props);
    return (0, import_jsx_runtime31.jsx)(Component2, {
      ...colProps,
      ref,
      className: (0, import_classnames24.default)(className, !spans.length && bsPrefix)
    });
  }
);
Col.displayName = "Col";
var Col_default = Col;

// node_modules/react-bootstrap/esm/Dropdown.js
var import_classnames28 = __toESM(require_classnames());
var React47 = __toESM(require_react());
var import_react46 = __toESM(require_react());

// node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

// node_modules/@restart/ui/esm/Dropdown.js
var import_react42 = __toESM(require_react());
var React40 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/uncontrollable/lib/esm/index.js
var import_react32 = __toESM(require_react());
function useUncontrolledProp2(propValue, defaultValue, handler) {
  const wasPropRef = (0, import_react32.useRef)(propValue !== void 0);
  const [stateValue, setState] = (0, import_react32.useState)(defaultValue);
  const isProp2 = propValue !== void 0;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react32.useCallback)((value, ...args) => {
    if (handler)
      handler(value, ...args);
    setState(value);
  }, [handler])];
}

// node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react33 = __toESM(require_react());
function useForceUpdate() {
  var _useReducer = (0, import_react33.useReducer)(function(state) {
    return !state;
  }, false), dispatch = _useReducer[1];
  return dispatch;
}

// node_modules/@restart/ui/esm/DropdownContext.js
var React34 = __toESM(require_react());
var DropdownContext = React34.createContext(null);
var DropdownContext_default = DropdownContext;

// node_modules/@restart/ui/esm/DropdownMenu.js
var import_react37 = __toESM(require_react());
var React35 = __toESM(require_react());

// node_modules/@restart/ui/esm/usePopper.js
var import_react35 = __toESM(require_react());

// node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
  for (key of iter.keys()) {
    if (dequal(key, tar))
      return key;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!bar.has(tmp))
          return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len))
          ;
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len])
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/@restart/hooks/esm/useSafeState.js
var import_react34 = __toESM(require_react());
function useSafeState(state) {
  var isMounted = useMounted();
  return [state[0], (0, import_react34.useCallback)(function(nextState) {
    if (!isMounted())
      return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var useSafeState_default = useSafeState;

// node_modules/@restart/ui/esm/popper.js
var createPopper2 = popperGenerator({
  defaultModifiers: [hide_default, popperOffsets_default, computeStyles_default, eventListeners_default, offset_default, flip_default, preventOverflow_default, arrow_default]
});

// node_modules/@restart/ui/esm/usePopper.js
var _excluded3 = ["enabled", "placement", "strategy", "modifiers"];
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false,
  phase: "afterWrite",
  fn: () => void 0
};
var ariaDescribedByModifier = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;
    if ("removeAttribute" in reference) {
      const ids = (reference.getAttribute("aria-describedby") || "").split(",").filter((id) => id.trim() !== popper.id);
      if (!ids.length)
        reference.removeAttribute("aria-describedby");
      else
        reference.setAttribute("aria-describedby", ids.join(","));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;
    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper.id && role === "tooltip" && "setAttribute" in reference) {
      const ids = reference.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper.id) !== -1) {
        return;
      }
      reference.setAttribute("aria-describedby", ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = "bottom",
    strategy = "absolute",
    modifiers = EMPTY_MODIFIERS
  } = _ref, config = _objectWithoutPropertiesLoose4(_ref, _excluded3);
  const prevModifiers = (0, import_react35.useRef)(modifiers);
  const popperInstanceRef = (0, import_react35.useRef)();
  const update = (0, import_react35.useCallback)(() => {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = (0, import_react35.useCallback)(() => {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = useSafeState_default((0, import_react35.useState)({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = (0, import_react35.useMemo)(() => ({
    name: "updateStateModifier",
    enabled: true,
    phase: "write",
    requires: ["computeStyles"],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach((element) => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = (0, import_react35.useMemo)(() => {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }
    return prevModifiers.current;
  }, [modifiers]);
  (0, import_react35.useEffect)(() => {
    if (!popperInstanceRef.current || !enabled)
      return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  (0, import_react35.useEffect)(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return void 0;
    }
    popperInstanceRef.current = createPopper2(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = void 0;
        setState((s) => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    };
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
var usePopper_default = usePopper;

// node_modules/dom-helpers/esm/contains.js
function contains(context6, node) {
  if (context6.contains)
    return context6.contains(node);
  if (context6.compareDocumentPosition)
    return context6 === node || !!(context6.compareDocumentPosition(node) & 16);
}

// node_modules/@restart/ui/esm/useClickOutside.js
var import_react36 = __toESM(require_react());
var import_warning = __toESM(require_warning());
var noop = () => {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = (ref) => ref && ("current" in ref ? ref.current : ref);
var InitialTriggerEvents = {
  click: "mousedown",
  mouseup: "mousedown",
  pointerup: "pointerdown"
};
function useClickOutside(ref, onClickOutside = noop, {
  disabled,
  clickTrigger = "click"
} = {}) {
  const preventMouseClickOutsideRef = (0, import_react36.useRef)(false);
  const waitingForTrigger = (0, import_react36.useRef)(false);
  const handleMouseCapture = (0, import_react36.useCallback)((e) => {
    const currentTarget = getRefTarget(ref);
    (0, import_warning.default)(!!currentTarget, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node");
    preventMouseClickOutsideRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains(currentTarget, e.target) || waitingForTrigger.current;
    waitingForTrigger.current = false;
  }, [ref]);
  const handleInitialMouse = useEventCallback((e) => {
    const currentTarget = getRefTarget(ref);
    if (currentTarget && contains(currentTarget, e.target)) {
      waitingForTrigger.current = true;
    }
  });
  const handleMouse = useEventCallback((e) => {
    if (!preventMouseClickOutsideRef.current) {
      onClickOutside(e);
    }
  });
  (0, import_react36.useEffect)(() => {
    if (disabled || ref == null)
      return void 0;
    const doc = ownerDocument(getRefTarget(ref));
    let currentEvent = (doc.defaultView || window).event;
    let removeInitialTriggerListener = null;
    if (InitialTriggerEvents[clickTrigger]) {
      removeInitialTriggerListener = listen_default(doc, InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
    }
    const removeMouseCaptureListener = listen_default(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = listen_default(doc, clickTrigger, (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    let mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map((el) => listen_default(el, "mousemove", noop));
    }
    return () => {
      removeInitialTriggerListener == null ? void 0 : removeInitialTriggerListener();
      removeMouseCaptureListener();
      removeMouseListener();
      mobileSafariHackListeners.forEach((remove) => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleInitialMouse, handleMouse]);
}
var useClickOutside_default = useClickOutside;

// node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js
function toModifierMap(modifiers) {
  const result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }
  modifiers == null ? void 0 : modifiers.forEach((m) => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map2 = {}) {
  if (Array.isArray(map2))
    return map2;
  return Object.keys(map2).map((k) => {
    map2[k].name = k;
    return map2[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$eventListe, _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? "fixed" : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents,
        options: (_modifiers$eventListe = modifiers.eventListeners) == null ? void 0 : _modifiers$eventListe.options
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

// node_modules/@restart/ui/esm/DropdownMenu.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded4 = ["children"];
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var noop2 = () => {
};
function useDropdownMenu(options = {}) {
  const context6 = (0, import_react37.useContext)(DropdownContext_default);
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const hasShownRef = (0, import_react37.useRef)(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context6
  } = options;
  const show = (context6 == null ? void 0 : context6.show) == null ? !!options.show : context6.show;
  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }
  const handleClose = (e) => {
    context6 == null ? void 0 : context6.toggle(false, e);
  };
  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context6 || {};
  const popper = usePopper_default(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement: placementOverride || placement || "bottom-start",
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop2,
    "aria-labelledby": toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context6 == null ? void 0 : context6.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  useClickOutside_default(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
var defaultProps13 = {
  usePopper: true
};
function DropdownMenu(_ref) {
  let {
    children
  } = _ref, options = _objectWithoutPropertiesLoose5(_ref, _excluded4);
  const [props, meta] = useDropdownMenu(options);
  return (0, import_jsx_runtime33.jsx)(import_jsx_runtime32.Fragment, {
    children: children(props, meta)
  });
}
DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.defaultProps = defaultProps13;
var DropdownMenu_default = DropdownMenu;

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_react39 = __toESM(require_react());
var React36 = __toESM(require_react());

// node_modules/@react-aria/ssr/dist/import.mjs
var import_react38 = __toESM(require_react(), 1);
var $704cf1d3b684cc5c$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $704cf1d3b684cc5c$var$SSRContext = (0, import_react38.default).createContext($704cf1d3b684cc5c$var$defaultContext);
function $704cf1d3b684cc5c$export$9f8ac96af4b1b2ae(props) {
  let cur = (0, import_react38.useContext)($704cf1d3b684cc5c$var$SSRContext);
  let counter = $704cf1d3b684cc5c$var$useCounter(cur === $704cf1d3b684cc5c$var$defaultContext);
  let value = (0, import_react38.useMemo)(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: cur === $704cf1d3b684cc5c$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
    current: 0
  }), [
    cur,
    counter
  ]);
  return (0, import_react38.default).createElement($704cf1d3b684cc5c$var$SSRContext.Provider, {
    value
  }, props.children);
}
var $704cf1d3b684cc5c$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $704cf1d3b684cc5c$var$componentIds = /* @__PURE__ */ new WeakMap();
function $704cf1d3b684cc5c$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react38.useContext)($704cf1d3b684cc5c$var$SSRContext);
  let ref = (0, import_react38.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react38.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $704cf1d3b684cc5c$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $704cf1d3b684cc5c$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $704cf1d3b684cc5c$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $704cf1d3b684cc5c$export$619500959fc48b26(defaultId) {
  let ctx = (0, import_react38.useContext)($704cf1d3b684cc5c$var$SSRContext);
  if (ctx === $704cf1d3b684cc5c$var$defaultContext && !$704cf1d3b684cc5c$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $704cf1d3b684cc5c$var$useCounter(!!defaultId);
  return defaultId || `react-aria${ctx.prefix}-${counter}`;
}

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var isRoleMenu = (el) => {
  var _el$getAttribute;
  return ((_el$getAttribute = el.getAttribute("role")) == null ? void 0 : _el$getAttribute.toLowerCase()) === "menu";
};
var noop3 = () => {
};
function useDropdownToggle() {
  const id = $704cf1d3b684cc5c$export$619500959fc48b26();
  const {
    show = false,
    toggle = noop3,
    setToggle,
    menuElement
  } = (0, import_react39.useContext)(DropdownContext_default) || {};
  const handleClick = (0, import_react39.useCallback)((e) => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || noop3,
    onClick: handleClick,
    "aria-expanded": !!show
  };
  if (menuElement && isRoleMenu(menuElement)) {
    props["aria-haspopup"] = true;
  }
  return [props, {
    show,
    toggle
  }];
}
function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return (0, import_jsx_runtime35.jsx)(import_jsx_runtime34.Fragment, {
    children: children(props, meta)
  });
}
DropdownToggle.displayName = "DropdownToggle";
var DropdownToggle_default = DropdownToggle;

// node_modules/@restart/ui/esm/DropdownItem.js
var React39 = __toESM(require_react());
var import_react40 = __toESM(require_react());

// node_modules/@restart/ui/esm/SelectableContext.js
var React37 = __toESM(require_react());
var SelectableContext = React37.createContext(null);
var makeEventKey = (eventKey, href = null) => {
  if (eventKey != null)
    return String(eventKey);
  return href || null;
};
var SelectableContext_default = SelectableContext;

// node_modules/@restart/ui/esm/NavContext.js
var React38 = __toESM(require_react());
var NavContext = React38.createContext(null);
NavContext.displayName = "NavContext";
var NavContext_default = NavContext;

// node_modules/@restart/ui/esm/DataKey.js
var ATTRIBUTE_PREFIX = `data-rr-ui-`;
var PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

// node_modules/@restart/ui/esm/DropdownItem.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var _excluded5 = ["eventKey", "disabled", "onClick", "active", "as"];
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = (0, import_react40.useContext)(SelectableContext_default);
  const navContext = (0, import_react40.useContext)(NavContext_default);
  const {
    activeKey
  } = navContext || {};
  const eventKey = makeEventKey(key, href);
  const isActive = active == null && key != null ? makeEventKey(activeKey) === eventKey : active;
  const handleClick = useEventCallback((event) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(event);
    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    "aria-disabled": disabled || void 0,
    "aria-selected": isActive,
    [dataAttr("dropdown-item")]: ""
  }, {
    isActive
  }];
}
var DropdownItem = React39.forwardRef((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component2 = Button_default
  } = _ref, props = _objectWithoutPropertiesLoose6(_ref, _excluded5);
  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime36.jsx)(Component2, Object.assign({}, props, {
    ref
  }, dropdownItemProps));
});
DropdownItem.displayName = "DropdownItem";
var DropdownItem_default = DropdownItem;

// node_modules/@restart/ui/esm/useWindow.js
var import_react41 = __toESM(require_react());
var Context = (0, import_react41.createContext)(canUseDOM_default ? window : void 0);
var WindowProvider = Context.Provider;
function useWindow() {
  return (0, import_react41.useContext)(Context);
}

// node_modules/@restart/ui/esm/Dropdown.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
function useRefWithUpdate() {
  const forceUpdate = useForceUpdate();
  const ref = (0, import_react42.useRef)(null);
  const attachRef = (0, import_react42.useCallback)((element) => {
    ref.current = element;
    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr("dropdown-item")}]`,
  focusFirstItemOnShow,
  placement = "bottom-start",
  children
}) {
  const window2 = useWindow();
  const [show, onToggle] = useUncontrolledProp2(rawShow, defaultShow, rawOnToggle);
  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = usePrevious(show);
  const lastSourceEvent = (0, import_react42.useRef)(null);
  const focusInDropdown = (0, import_react42.useRef)(false);
  const onSelectCtx = (0, import_react42.useContext)(SelectableContext_default);
  const toggle = (0, import_react42.useCallback)((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = useEventCallback((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, "select");
    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context6 = (0, import_react42.useMemo)(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);
  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(menuElement.ownerDocument.activeElement);
  }
  const focusToggle = useEventCallback(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = useEventCallback(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;
    if (focusType == null) {
      focusType = menuRef.current && isRoleMenu(menuRef.current) ? "keyboard" : false;
    }
    if (focusType === false || focusType === "keyboard" && !/^key.+$/.test(type)) {
      return;
    }
    const first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus)
      first.focus();
  });
  (0, import_react42.useEffect)(() => {
    if (show)
      maybeFocusFirst();
    else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    }
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0, import_react42.useEffect)(() => {
    lastSourceEvent.current = null;
  });
  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current)
      return null;
    const items = qsa(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };
  useEventListener((0, import_react42.useCallback)(() => window2.document, [window2]), "keydown", (event) => {
    var _menuRef$current, _toggleRef$current;
    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target);
    const isInput = /input|textarea/i.test(target.tagName);
    if (isInput && (key === " " || key !== "Escape" && fromMenu || key === "Escape" && target.type === "search")) {
      return;
    }
    if (!fromMenu && !fromToggle) {
      return;
    }
    if (key === "Tab" && (!menuRef.current || !show)) {
      return;
    }
    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };
    switch (key) {
      case "ArrowUp": {
        const next = getNextFocusedChild(target, -1);
        if (next && next.focus)
          next.focus();
        event.preventDefault();
        return;
      }
      case "ArrowDown":
        event.preventDefault();
        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus)
            next.focus();
        }
        return;
      case "Tab":
        addEventListener_default(target.ownerDocument, "keyup", (e) => {
          var _menuRef$current2;
          if (e.key === "Tab" && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;
      case "Escape":
        if (key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
        }
        onToggle(false, meta);
        break;
      default:
    }
  });
  return (0, import_jsx_runtime37.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: (0, import_jsx_runtime37.jsx)(DropdownContext_default.Provider, {
      value: context6,
      children
    })
  });
}
Dropdown.displayName = "Dropdown";
Dropdown.Menu = DropdownMenu_default;
Dropdown.Toggle = DropdownToggle_default;
Dropdown.Item = DropdownItem_default;
var Dropdown_default = Dropdown;

// node_modules/react-bootstrap/esm/DropdownContext.js
var React41 = __toESM(require_react());
var DropdownContext2 = React41.createContext({});
DropdownContext2.displayName = "DropdownContext";
var DropdownContext_default2 = DropdownContext2;

// node_modules/react-bootstrap/esm/DropdownItem.js
var import_classnames25 = __toESM(require_classnames());
var React42 = __toESM(require_react());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var DropdownItem2 = React42.forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component2 = Anchor_default,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-item");
  const [dropdownItemProps, meta] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime38.jsx)(Component2, {
    ...props,
    ...dropdownItemProps,
    ref,
    className: (0, import_classnames25.default)(className, prefix, meta.isActive && "active", disabled && "disabled")
  });
});
DropdownItem2.displayName = "DropdownItem";
var DropdownItem_default2 = DropdownItem2;

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_classnames26 = __toESM(require_classnames());
var React45 = __toESM(require_react());
var import_react44 = __toESM(require_react());
var import_warning2 = __toESM(require_warning());

// node_modules/react-bootstrap/esm/InputGroupContext.js
var React43 = __toESM(require_react());
var context4 = React43.createContext(null);
context4.displayName = "InputGroupContext";
var InputGroupContext_default = context4;

// node_modules/react-bootstrap/esm/NavbarContext.js
var React44 = __toESM(require_react());
var context5 = React44.createContext(null);
context5.displayName = "NavbarContext";
var NavbarContext_default = context5;

// node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js
var import_invariant3 = __toESM(require_browser());
var import_react43 = __toESM(require_react());
function useWrappedRefWithWarning(ref, componentName) {
  if (false)
    return ref;
  const warningRef = (0, import_react43.useCallback)((refValue) => {
    !(refValue == null || !refValue.isReactComponent) ? true ? (0, import_invariant3.default)(false, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. Use \`React.forwardRef\` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element`) : (0, import_invariant3.default)(false) : void 0;
  }, [componentName]);
  return useMergedRefs_default(warningRef, ref);
}

// node_modules/react-bootstrap/esm/types.js
var import_prop_types2 = __toESM(require_prop_types());
var alignDirection = import_prop_types2.default.oneOf(["start", "end"]);
var alignPropType = import_prop_types2.default.oneOfType([alignDirection, import_prop_types2.default.shape({
  sm: alignDirection
}), import_prop_types2.default.shape({
  md: alignDirection
}), import_prop_types2.default.shape({
  lg: alignDirection
}), import_prop_types2.default.shape({
  xl: alignDirection
}), import_prop_types2.default.shape({
  xxl: alignDirection
}), import_prop_types2.default.object]);

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var defaultProps14 = {
  flip: true
};
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? "top-end" : "top-start";
  const topEnd = isRTL ? "top-start" : "top-end";
  const bottomStart = isRTL ? "bottom-end" : "bottom-start";
  const bottomEnd = isRTL ? "bottom-start" : "bottom-end";
  const leftStart = isRTL ? "right-start" : "left-start";
  const leftEnd = isRTL ? "right-end" : "left-end";
  const rightStart = isRTL ? "left-start" : "right-start";
  const rightEnd = isRTL ? "left-end" : "right-end";
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === "up")
    placement = alignEnd ? topEnd : topStart;
  else if (dropDirection === "end")
    placement = alignEnd ? rightEnd : rightStart;
  else if (dropDirection === "start")
    placement = alignEnd ? leftEnd : leftStart;
  else if (dropDirection === "down-centered")
    placement = "bottom";
  else if (dropDirection === "up-centered")
    placement = "top";
  return placement;
}
var DropdownMenu2 = React45.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = (0, import_react44.useContext)(NavbarContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-menu");
  const {
    align: contextAlign,
    drop,
    isRTL
  } = (0, import_react44.useContext)(DropdownContext_default2);
  align = align || contextAlign;
  const isInputGroup = (0, import_react44.useContext)(InputGroupContext_default);
  const alignClasses = [];
  if (align) {
    if (typeof align === "object") {
      const keys = Object.keys(align);
      true ? (0, import_warning2.default)(keys.length === 1, "There should only be 1 breakpoint when passing an object to `align`") : void 0;
      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint];
        alignEnd = direction === "start";
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === "end") {
      alignEnd = true;
    }
  }
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs_default(useWrappedRefWithWarning(ref, "DropdownMenu"), menuProps.ref);
  useIsomorphicEffect_default(() => {
    if (show)
      popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup)
    return null;
  if (typeof Component2 !== "string") {
    menuProps.show = show;
    menuProps.close = () => toggle == null ? void 0 : toggle(false);
    menuProps.align = align;
  }
  let style2 = props.style;
  if (popper != null && popper.placement) {
    style2 = {
      ...props.style,
      ...menuProps.style
    };
    props["x-placement"] = popper.placement;
  }
  return (0, import_jsx_runtime39.jsx)(Component2, {
    ...props,
    ...menuProps,
    style: style2,
    ...(alignClasses.length || isNavbar) && {
      "data-bs-popper": "static"
    },
    className: (0, import_classnames26.default)(className, prefix, show && "show", alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu2.displayName = "DropdownMenu";
DropdownMenu2.defaultProps = defaultProps14;
var DropdownMenu_default2 = DropdownMenu2;

// node_modules/react-bootstrap/esm/DropdownToggle.js
var import_classnames27 = __toESM(require_classnames());
var React46 = __toESM(require_react());
var import_react45 = __toESM(require_react());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var DropdownToggle2 = React46.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = Button_default2,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-toggle");
  const dropdownContext = (0, import_react45.useContext)(DropdownContext_default);
  if (childBsPrefix !== void 0) {
    props.bsPrefix = childBsPrefix;
  }
  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = useMergedRefs_default(toggleProps.ref, useWrappedRefWithWarning(ref, "DropdownToggle"));
  return (0, import_jsx_runtime40.jsx)(Component2, {
    className: (0, import_classnames27.default)(className, prefix, split && `${prefix}-split`, (dropdownContext == null ? void 0 : dropdownContext.show) && "show"),
    ...toggleProps,
    ...props
  });
});
DropdownToggle2.displayName = "DropdownToggle";
var DropdownToggle_default2 = DropdownToggle2;

// node_modules/react-bootstrap/esm/Dropdown.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var DropdownHeader = createWithBsPrefix("dropdown-header", {
  defaultProps: {
    role: "heading"
  }
});
var DropdownDivider = createWithBsPrefix("dropdown-divider", {
  Component: "hr",
  defaultProps: {
    role: "separator"
  }
});
var DropdownItemText = createWithBsPrefix("dropdown-item-text", {
  Component: "span"
});
var defaultProps15 = {
  navbar: false,
  align: "start",
  autoClose: true,
  drop: "down"
};
var Dropdown2 = React47.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop,
    show,
    className,
    align,
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    navbar: _4,
    autoClose,
    ...props
  } = useUncontrolled(pProps, {
    show: "onToggle"
  });
  const isInputGroup = (0, import_react46.useContext)(InputGroupContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown");
  const isRTL = useIsRTL();
  const isClosingPermitted = (source) => {
    if (autoClose === false)
      return source === "click";
    if (autoClose === "inside")
      return source !== "rootClose";
    if (autoClose === "outside")
      return source !== "select";
    return true;
  };
  const handleToggle = useEventCallback((nextShow, meta) => {
    if (meta.originalEvent.currentTarget === document && (meta.source !== "keydown" || meta.originalEvent.key === "Escape"))
      meta.source = "rootClose";
    if (isClosingPermitted(meta.source))
      onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === "end";
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = (0, import_react46.useMemo)(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  const directionClasses = {
    down: prefix,
    "down-centered": `${prefix}-center`,
    up: "dropup",
    "up-centered": "dropup-center dropup",
    end: "dropend",
    start: "dropstart"
  };
  return (0, import_jsx_runtime41.jsx)(DropdownContext_default2.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime41.jsx)(Dropdown_default, {
      placement,
      show,
      onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : (0, import_jsx_runtime41.jsx)(Component2, {
        ...props,
        ref,
        className: (0, import_classnames28.default)(className, show && "show", directionClasses[drop])
      })
    })
  });
});
Dropdown2.displayName = "Dropdown";
Dropdown2.defaultProps = defaultProps15;
var Dropdown_default2 = Object.assign(Dropdown2, {
  Toggle: DropdownToggle_default2,
  Menu: DropdownMenu_default2,
  Item: DropdownItem_default2,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
});

// node_modules/react-bootstrap/esm/DropdownButton.js
var React48 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var propTypes2 = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: import_prop_types3.default.string,
  /** An `href` passed to the Toggle component */
  href: import_prop_types3.default.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: import_prop_types3.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types3.default.node.isRequired,
  /** Disables both Buttons  */
  disabled: import_prop_types3.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types3.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types3.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types3.default.string,
  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: import_prop_types3.default.oneOf(["dark"]),
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types3.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types3.default.string,
  /** @ignore */
  variant: import_prop_types3.default.string,
  /** @ignore */
  size: import_prop_types3.default.string
};
var DropdownButton = React48.forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size: size2,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime43.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  children: [(0, import_jsx_runtime42.jsx)(DropdownToggle_default2, {
    id,
    href,
    size: size2,
    variant,
    disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), (0, import_jsx_runtime42.jsx)(DropdownMenu_default2, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    variant: menuVariant,
    flip,
    children
  })]
}));
DropdownButton.displayName = "DropdownButton";
DropdownButton.propTypes = propTypes2;
var DropdownButton_default = DropdownButton;

// node_modules/react-bootstrap/esm/Form.js
var import_classnames39 = __toESM(require_classnames());
var import_prop_types5 = __toESM(require_prop_types());
var React62 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormCheck.js
var import_classnames32 = __toESM(require_classnames());
var React53 = __toESM(require_react());
var import_react49 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Feedback.js
var import_classnames29 = __toESM(require_classnames());
var React49 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var propTypes3 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: import_prop_types4.default.string,
  /** Display feedback as a tooltip. */
  tooltip: import_prop_types4.default.bool,
  as: import_prop_types4.default.elementType
};
var Feedback = React49.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: Component2 = "div",
    className,
    type = "valid",
    tooltip = false,
    ...props
  }, ref) => (0, import_jsx_runtime44.jsx)(Component2, {
    ...props,
    ref,
    className: (0, import_classnames29.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
  })
);
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes3;
var Feedback_default = Feedback;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_classnames30 = __toESM(require_classnames());
var React51 = __toESM(require_react());
var import_react47 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormContext.js
var React50 = __toESM(require_react());
var FormContext = React50.createContext({});
var FormContext_default = FormContext;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var FormCheckInput = React51.forwardRef(({
  id,
  bsPrefix,
  className,
  type = "checkbox",
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react47.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
  return (0, import_jsx_runtime45.jsx)(Component2, {
    ...props,
    ref,
    type,
    id: id || controlId,
    className: (0, import_classnames30.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormCheckInput.displayName = "FormCheckInput";
var FormCheckInput_default = FormCheckInput;

// node_modules/react-bootstrap/esm/FormCheckLabel.js
var import_classnames31 = __toESM(require_classnames());
var React52 = __toESM(require_react());
var import_react48 = __toESM(require_react());
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var FormCheckLabel = React52.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react48.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
  return (0, import_jsx_runtime46.jsx)("label", {
    ...props,
    ref,
    htmlFor: htmlFor || controlId,
    className: (0, import_classnames31.default)(className, bsPrefix)
  });
});
FormCheckLabel.displayName = "FormCheckLabel";
var FormCheckLabel_default = FormCheckLabel;

// node_modules/react-bootstrap/esm/FormCheck.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var FormCheck = React53.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style: style2,
  title = "",
  type = "checkbox",
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = "input",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
  const {
    controlId
  } = (0, import_react49.useContext)(FormContext_default);
  const innerFormContext = (0, import_react49.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel_default);
  const input = (0, import_jsx_runtime47.jsx)(FormCheckInput_default, {
    ...props,
    type: type === "switch" ? "checkbox" : type,
    ref,
    isValid,
    isInvalid,
    disabled,
    as
  });
  return (0, import_jsx_runtime47.jsx)(FormContext_default.Provider, {
    value: innerFormContext,
    children: (0, import_jsx_runtime47.jsx)("div", {
      style: style2,
      className: (0, import_classnames32.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
      children: children || (0, import_jsx_runtime49.jsxs)(import_jsx_runtime48.Fragment, {
        children: [input, hasLabel && (0, import_jsx_runtime47.jsx)(FormCheckLabel_default, {
          title,
          children: label
        }), feedback && (0, import_jsx_runtime47.jsx)(Feedback_default, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = "FormCheck";
var FormCheck_default = Object.assign(FormCheck, {
  Input: FormCheckInput_default,
  Label: FormCheckLabel_default
});

// node_modules/react-bootstrap/esm/FormControl.js
var import_classnames33 = __toESM(require_classnames());
var React54 = __toESM(require_react());
var import_react50 = __toESM(require_react());
var import_warning3 = __toESM(require_warning());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var FormControl = React54.forwardRef(({
  bsPrefix,
  type,
  size: size2,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react50.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
  let classes;
  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size2}`]: size2
    };
  }
  true ? (0, import_warning3.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.") : void 0;
  return (0, import_jsx_runtime50.jsx)(Component2, {
    ...props,
    type,
    size: htmlSize,
    ref,
    readOnly,
    id: id || controlId,
    className: (0, import_classnames33.default)(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === "color" && `${bsPrefix}-color`)
  });
});
FormControl.displayName = "FormControl";
var FormControl_default = Object.assign(FormControl, {
  Feedback: Feedback_default
});

// node_modules/react-bootstrap/esm/FormFloating.js
var FormFloating_default = createWithBsPrefix("form-floating");

// node_modules/react-bootstrap/esm/FormGroup.js
var React55 = __toESM(require_react());
var import_react51 = __toESM(require_react());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var FormGroup = React55.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const context6 = (0, import_react51.useMemo)(() => ({
    controlId
  }), [controlId]);
  return (0, import_jsx_runtime51.jsx)(FormContext_default.Provider, {
    value: context6,
    children: (0, import_jsx_runtime51.jsx)(Component2, {
      ...props,
      ref
    })
  });
});
FormGroup.displayName = "FormGroup";
var FormGroup_default = FormGroup;

// node_modules/react-bootstrap/esm/FormLabel.js
var import_classnames34 = __toESM(require_classnames());
var React56 = __toESM(require_react());
var import_react52 = __toESM(require_react());
var import_warning4 = __toESM(require_warning());
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var defaultProps16 = {
  column: false,
  visuallyHidden: false
};
var FormLabel = React56.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "label",
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react52.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
  let columnClass = "col-form-label";
  if (typeof column === "string")
    columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = (0, import_classnames34.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
  true ? (0, import_warning4.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.") : void 0;
  htmlFor = htmlFor || controlId;
  if (column)
    return (0, import_jsx_runtime52.jsx)(Col_default, {
      ref,
      as: "label",
      className: classes,
      htmlFor,
      ...props
    });
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, import_jsx_runtime52.jsx)(Component2, {
      ref,
      className: classes,
      htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = "FormLabel";
FormLabel.defaultProps = defaultProps16;
var FormLabel_default = FormLabel;

// node_modules/react-bootstrap/esm/FormRange.js
var import_classnames35 = __toESM(require_classnames());
var React57 = __toESM(require_react());
var import_react53 = __toESM(require_react());
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var FormRange = React57.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react53.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
  return (0, import_jsx_runtime53.jsx)("input", {
    ...props,
    type: "range",
    ref,
    className: (0, import_classnames35.default)(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = "FormRange";
var FormRange_default = FormRange;

// node_modules/react-bootstrap/esm/FormSelect.js
var import_classnames36 = __toESM(require_classnames());
var React58 = __toESM(require_react());
var import_react54 = __toESM(require_react());
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var FormSelect = React58.forwardRef(({
  bsPrefix,
  size: size2,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react54.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
  return (0, import_jsx_runtime54.jsx)("select", {
    ...props,
    size: htmlSize,
    ref,
    className: (0, import_classnames36.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = "FormSelect";
var FormSelect_default = FormSelect;

// node_modules/react-bootstrap/esm/FormText.js
var import_classnames37 = __toESM(require_classnames());
var React59 = __toESM(require_react());
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var FormText = React59.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    as: Component2 = "small",
    muted,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
    return (0, import_jsx_runtime55.jsx)(Component2, {
      ...props,
      ref,
      className: (0, import_classnames37.default)(className, bsPrefix, muted && "text-muted")
    });
  }
);
FormText.displayName = "FormText";
var FormText_default = FormText;

// node_modules/react-bootstrap/esm/Switch.js
var React60 = __toESM(require_react());
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var Switch = React60.forwardRef((props, ref) => (0, import_jsx_runtime56.jsx)(FormCheck_default, {
  ...props,
  ref,
  type: "switch"
}));
Switch.displayName = "Switch";
var Switch_default = Object.assign(Switch, {
  Input: FormCheck_default.Input,
  Label: FormCheck_default.Label
});

// node_modules/react-bootstrap/esm/FloatingLabel.js
var import_classnames38 = __toESM(require_classnames());
var React61 = __toESM(require_react());
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var FloatingLabel = React61.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return (0, import_jsx_runtime58.jsxs)(FormGroup_default, {
    ref,
    className: (0, import_classnames38.default)(className, bsPrefix),
    controlId,
    ...props,
    children: [children, (0, import_jsx_runtime57.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = "FloatingLabel";
var FloatingLabel_default = FloatingLabel;

// node_modules/react-bootstrap/esm/Form.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var propTypes4 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: import_prop_types5.default.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: import_prop_types5.default.bool,
  as: import_prop_types5.default.elementType
};
var Form = React62.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "form",
  ...props
}, ref) => (0, import_jsx_runtime59.jsx)(Component2, {
  ...props,
  ref,
  className: (0, import_classnames39.default)(className, validated && "was-validated")
}));
Form.displayName = "Form";
Form.propTypes = propTypes4;
var Form_default = Object.assign(Form, {
  Group: FormGroup_default,
  Control: FormControl_default,
  Floating: FormFloating_default,
  Check: FormCheck_default,
  Switch: Switch_default,
  Label: FormLabel_default,
  Text: FormText_default,
  Range: FormRange_default,
  Select: FormSelect_default,
  FloatingLabel: FloatingLabel_default
});

// node_modules/react-bootstrap/esm/Container.js
var import_classnames40 = __toESM(require_classnames());
var React63 = __toESM(require_react());
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var defaultProps17 = {
  fluid: false
};
var Container = React63.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return (0, import_jsx_runtime60.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames40.default)(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
Container.defaultProps = defaultProps17;
var Container_default = Container;

// node_modules/react-bootstrap/esm/Image.js
var import_classnames41 = __toESM(require_classnames());
var React64 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var propTypes5 = {
  /**
   * @default 'img'
   */
  bsPrefix: import_prop_types6.default.string,
  /**
   * Sets image as fluid image.
   */
  fluid: import_prop_types6.default.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: import_prop_types6.default.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: import_prop_types6.default.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: import_prop_types6.default.bool
};
var defaultProps18 = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
var Image2 = React64.forwardRef(({
  bsPrefix,
  className,
  fluid,
  rounded,
  roundedCircle,
  thumbnail,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "img");
  return (0, import_jsx_runtime61.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref,
    ...props,
    className: (0, import_classnames41.default)(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image2.displayName = "Image";
Image2.defaultProps = defaultProps18;
var Image_default = Image2;

// node_modules/react-bootstrap/esm/FigureImage.js
var import_classnames42 = __toESM(require_classnames());
var React65 = __toESM(require_react());
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var defaultProps19 = {
  fluid: true
};
var FigureImage = React65.forwardRef(({
  className,
  ...props
}, ref) => (0, import_jsx_runtime62.jsx)(Image_default, {
  ref,
  ...props,
  className: (0, import_classnames42.default)(className, "figure-img")
}));
FigureImage.displayName = "FigureImage";
FigureImage.propTypes = propTypes5;
FigureImage.defaultProps = defaultProps19;
var FigureImage_default = FigureImage;

// node_modules/react-bootstrap/esm/FigureCaption.js
var FigureCaption = createWithBsPrefix("figure-caption", {
  Component: "figcaption"
});
var FigureCaption_default = FigureCaption;

// node_modules/react-bootstrap/esm/Figure.js
var Figure = createWithBsPrefix("figure", {
  Component: "figure"
});
var Figure_default = Object.assign(Figure, {
  Image: FigureImage_default,
  Caption: FigureCaption_default
});

// node_modules/react-bootstrap/esm/InputGroup.js
var import_classnames43 = __toESM(require_classnames());
var React66 = __toESM(require_react());
var import_react55 = __toESM(require_react());
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var InputGroupText = createWithBsPrefix("input-group-text", {
  Component: "span"
});
var InputGroupCheckbox = (props) => (0, import_jsx_runtime63.jsx)(InputGroupText, {
  children: (0, import_jsx_runtime63.jsx)(FormCheckInput_default, {
    type: "checkbox",
    ...props
  })
});
var InputGroupRadio = (props) => (0, import_jsx_runtime63.jsx)(InputGroupText, {
  children: (0, import_jsx_runtime63.jsx)(FormCheckInput_default, {
    type: "radio",
    ...props
  })
});
var InputGroup = React66.forwardRef(({
  bsPrefix,
  size: size2,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
  const contextValue = (0, import_react55.useMemo)(() => ({}), []);
  return (0, import_jsx_runtime63.jsx)(InputGroupContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime63.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames43.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, hasValidation && "has-validation")
    })
  });
});
InputGroup.displayName = "InputGroup";
var InputGroup_default = Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

// node_modules/react-bootstrap/esm/ListGroup.js
var import_classnames45 = __toESM(require_classnames());
var React71 = __toESM(require_react());
var import_warning6 = __toESM(require_warning());

// node_modules/@restart/ui/esm/Nav.js
var React69 = __toESM(require_react());
var import_react57 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabContext.js
var React67 = __toESM(require_react());
var TabContext = React67.createContext(null);
var TabContext_default = TabContext;

// node_modules/@restart/ui/esm/NavItem.js
var React68 = __toESM(require_react());
var import_react56 = __toESM(require_react());
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var _excluded6 = ["as", "active", "eventKey"];
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0, import_react56.useContext)(SelectableContext_default);
  const navContext = (0, import_react56.useContext)(NavContext_default);
  const tabContext = (0, import_react56.useContext)(TabContext_default);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === "tablist")
      props.role = "tab";
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);
    props[dataAttr("event-key")] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter))
      props["aria-controls"] = contextControlledId;
  }
  if (props.role === "tab") {
    props["aria-selected"] = isActive;
    if (!isActive) {
      props.tabIndex = -1;
    }
    if (disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
  }
  props.onClick = useEventCallback((e) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(e);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
var NavItem = React68.forwardRef((_ref, ref) => {
  let {
    as: Component2 = Button_default,
    active,
    eventKey
  } = _ref, options = _objectWithoutPropertiesLoose7(_ref, _excluded6);
  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));
  props[dataAttr("active")] = meta.isActive;
  return (0, import_jsx_runtime64.jsx)(Component2, Object.assign({}, options, props, {
    ref
  }));
});
NavItem.displayName = "NavItem";
var NavItem_default = NavItem;

// node_modules/@restart/ui/esm/Nav.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var _excluded7 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var noop4 = () => {
};
var EVENT_KEY_ATTR = dataAttr("event-key");
var Nav = React69.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose8(_ref, _excluded7);
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = (0, import_react57.useRef)(false);
  const parentOnSelect = (0, import_react57.useContext)(SelectableContext_default);
  const tabContext = (0, import_react57.useContext)(TabContext_default);
  let getControlledId, getControllerId;
  if (tabContext) {
    role = role || "tablist";
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }
  const listNode = (0, import_react57.useRef)(null);
  const getNextActiveTab = (offset) => {
    const currentListNode = listNode.current;
    if (!currentListNode)
      return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector("[aria-selected=true]");
    if (!activeChild || activeChild !== document.activeElement)
      return null;
    const index = items.indexOf(activeChild);
    if (index === -1)
      return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length)
      nextIndex = 0;
    if (nextIndex < 0)
      nextIndex = items.length - 1;
    return items[nextIndex];
  };
  const handleSelect = (key, event) => {
    if (key == null)
      return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!tabContext) {
      return;
    }
    let nextActiveChild;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextActiveChild = getNextActiveTab(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild)
      return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };
  (0, import_react57.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }
    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs_default(ref, listNode);
  return (0, import_jsx_runtime65.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: (0, import_jsx_runtime65.jsx)(NavContext_default.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop4,
        getControllerId: getControllerId || noop4
      },
      children: (0, import_jsx_runtime65.jsx)(Component2, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role
      }))
    })
  });
});
Nav.displayName = "Nav";
var Nav_default = Object.assign(Nav, {
  Item: NavItem_default
});

// node_modules/react-bootstrap/esm/ListGroupItem.js
var import_classnames44 = __toESM(require_classnames());
var React70 = __toESM(require_react());
var import_warning5 = __toESM(require_warning());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var ListGroupItem = React70.forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });
  if (disabled && props.tabIndex === void 0) {
    props.tabIndex = -1;
    props["aria-disabled"] = true;
  }
  const Component2 = as || (action ? props.href ? "a" : "button" : "div");
  true ? (0, import_warning5.default)(as || !(!action && props.href), "`action=false` and `href` should not be used together.") : void 0;
  return (0, import_jsx_runtime66.jsx)(Component2, {
    ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: (0, import_classnames44.default)(className, bsPrefix, meta.isActive && "active", disabled && "disabled", variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = "ListGroupItem";
var ListGroupItem_default = ListGroupItem;

// node_modules/react-bootstrap/esm/ListGroup.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var ListGroup = React71.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = "div",
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "list-group");
  let horizontalVariant;
  if (horizontal) {
    horizontalVariant = horizontal === true ? "horizontal" : `horizontal-${horizontal}`;
  }
  true ? (0, import_warning6.default)(!(horizontal && variant === "flush"), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return (0, import_jsx_runtime67.jsx)(Nav_default, {
    ref,
    ...controlledProps,
    as,
    className: (0, import_classnames45.default)(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = "ListGroup";
var ListGroup_default = Object.assign(ListGroup, {
  Item: ListGroupItem_default
});

// node_modules/react-bootstrap/esm/Modal.js
var import_classnames48 = __toESM(require_classnames());

// node_modules/dom-helpers/esm/scrollbarSize.js
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM_default) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}

// node_modules/react-bootstrap/esm/Modal.js
var React78 = __toESM(require_react());
var import_react63 = __toESM(require_react());

// node_modules/dom-helpers/esm/activeElement.js
function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName)
      return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}

// node_modules/@restart/ui/esm/Modal.js
var import_react61 = __toESM(require_react());
var React73 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@restart/ui/esm/getScrollbarWidth.js
function getBodyScrollbarWidth(ownerDocument2 = document) {
  const window2 = ownerDocument2.defaultView;
  return Math.abs(window2.innerWidth - ownerDocument2.documentElement.clientWidth);
}

// node_modules/@restart/ui/esm/ModalManager.js
var OPEN_DATA_ATTRIBUTE = dataAttr("modal-open");
var ModalManager = class {
  constructor({
    ownerDocument: ownerDocument2,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument2;
  }
  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(_modal) {
  }
  removeModalAttributes(_modal) {
  }
  setContainerStyle(containerState) {
    const style2 = {
      overflow: "hidden"
    };
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };
    if (containerState.scrollBarWidth) {
      style2[paddingProp] = `${parseInt(css_default(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
    }
    container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
    css_default(container, style2);
  }
  reset() {
    [...this.modals].forEach((m) => this.remove(m));
  }
  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }
  add(modal) {
    let modalIdx = this.modals.indexOf(modal);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);
    if (modalIdx !== 0) {
      return modalIdx;
    }
    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };
    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }
    return modalIdx;
  }
  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    this.modals.splice(modalIdx, 1);
    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }
    this.removeModalAttributes(modal);
  }
  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }
};
var ModalManager_default = ModalManager;

// node_modules/@restart/ui/esm/useWaitForDOMRef.js
var import_react58 = __toESM(require_react());
var resolveContainerRef = (ref, document2) => {
  if (!canUseDOM_default)
    return null;
  if (ref == null)
    return (document2 || ownerDocument()).body;
  if (typeof ref === "function")
    ref = ref();
  if (ref && "current" in ref)
    ref = ref.current;
  if (ref && ("nodeType" in ref || ref.getBoundingClientRect))
    return ref;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window2 = useWindow();
  const [resolvedRef, setRef] = (0, import_react58.useState)(() => resolveContainerRef(ref, window2 == null ? void 0 : window2.document));
  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef)
      setRef(earlyRef);
  }
  (0, import_react58.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, import_react58.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_react60 = __toESM(require_react());

// node_modules/@restart/ui/esm/NoopTransition.js
var import_react59 = __toESM(require_react());
function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit
}) {
  const ref = (0, import_react59.useRef)(null);
  const hasEnteredRef = (0, import_react59.useRef)(inProp);
  const handleExited = useEventCallback(onExited);
  (0, import_react59.useEffect)(() => {
    if (inProp)
      hasEnteredRef.current = true;
    else {
      handleExited(ref.current);
    }
  }, [inProp, handleExited]);
  const combinedRef = useMergedRefs_default(ref, children.ref);
  const child = (0, import_react59.cloneElement)(children, {
    ref: combinedRef
  });
  if (inProp)
    return child;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return child;
}
var NoopTransition_default = NoopTransition;

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
function useTransition({
  in: inProp,
  onTransition
}) {
  const ref = (0, import_react60.useRef)(null);
  const isInitialRef = (0, import_react60.useRef)(true);
  const handleTransition = useEventCallback(onTransition);
  useIsomorphicEffect_default(() => {
    if (!ref.current) {
      return void 0;
    }
    let stale = false;
    handleTransition({
      in: inProp,
      element: ref.current,
      initial: isInitialRef.current,
      isStale: () => stale
    });
    return () => {
      stale = true;
    };
  }, [inProp, handleTransition]);
  useIsomorphicEffect_default(() => {
    isInitialRef.current = false;
    return () => {
      isInitialRef.current = true;
    };
  }, []);
  return ref;
}
function ImperativeTransition({
  children,
  in: inProp,
  onExited,
  onEntered,
  transition
}) {
  const [exited, setExited] = (0, import_react60.useState)(!inProp);
  if (inProp && exited) {
    setExited(false);
  }
  const ref = useTransition({
    in: !!inProp,
    onTransition: (options) => {
      const onFinish = () => {
        if (options.isStale())
          return;
        if (options.in) {
          onEntered == null ? void 0 : onEntered(options.element, options.initial);
        } else {
          setExited(true);
          onExited == null ? void 0 : onExited(options.element);
        }
      };
      Promise.resolve(transition(options)).then(onFinish, (error) => {
        if (!options.in)
          setExited(true);
        throw error;
      });
    }
  });
  const combinedRef = useMergedRefs_default(ref, children.ref);
  return exited && !inProp ? null : (0, import_react60.cloneElement)(children, {
    ref: combinedRef
  });
}
function renderTransition(Component2, runTransition, props) {
  if (Component2) {
    return (0, import_jsx_runtime68.jsx)(Component2, Object.assign({}, props));
  }
  if (runTransition) {
    return (0, import_jsx_runtime68.jsx)(ImperativeTransition, Object.assign({}, props, {
      transition: runTransition
    }));
  }
  return (0, import_jsx_runtime68.jsx)(NoopTransition_default, Object.assign({}, props));
}

// node_modules/@restart/ui/esm/utils.js
function isEscKey(e) {
  return e.code === "Escape" || e.keyCode === 27;
}

// node_modules/@restart/ui/esm/Modal.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var _excluded8 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function _objectWithoutPropertiesLoose9(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var manager;
function getManager(window2) {
  if (!manager)
    manager = new ModalManager_default({
      ownerDocument: window2 == null ? void 0 : window2.document
    });
  return manager;
}
function useModalManager(provided) {
  const window2 = useWindow();
  const modalManager = provided || getManager(window2);
  const modal = (0, import_react61.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0, import_react61.useCallback)((ref) => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, import_react61.useCallback)((ref) => {
      modal.current.backdrop = ref;
    }, [])
  });
}
var Modal = (0, import_react61.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = "dialog",
    className,
    style: style2,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    runTransition,
    backdropTransition,
    runBackdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = (props) => (0, import_jsx_runtime69.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {
    },
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref, rest = _objectWithoutPropertiesLoose9(_ref, _excluded8);
  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = (0, import_react61.useState)(!show);
  const lastFocusRef = (0, import_react61.useRef)(null);
  (0, import_react61.useImperativeHandle)(ref, () => modal, [modal]);
  if (canUseDOM_default && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }
  if (show && exited) {
    setExited(false);
  }
  const handleShow = useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = listen_default(document, "keydown", handleDocumentKeyDown);
    removeFocusListenerRef.current = listen_default(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(handleEnforceFocus),
      true
    );
    if (onShow) {
      onShow();
    }
    if (autoFocus) {
      const currentActiveElement = activeElement(document);
      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  });
  (0, import_react61.useEffect)(() => {
    if (!show || !container)
      return;
    handleShow();
  }, [
    show,
    container,
    /* should never change: */
    handleShow
  ]);
  (0, import_react61.useEffect)(() => {
    if (!exited)
      return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  });
  const handleEnforceFocus = useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    const currentActiveElement = activeElement();
    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback((e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback((e) => {
    if (keyboard && isEscKey(e) && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0, import_react61.useRef)();
  const removeKeydownListenerRef = (0, import_react61.useRef)();
  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };
  if (!container) {
    return null;
  }
  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": role === "dialog" ? true : void 0
  }, rest, {
    style: style2,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : (0, import_jsx_runtime69.jsx)("div", Object.assign({}, dialogProps, {
    children: React73.cloneElement(children, {
      role: "document"
    })
  }));
  dialog = renderTransition(transition, runTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    appear: true,
    in: !!show,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered,
    children: dialog
  });
  let backdropElement = null;
  if (backdrop) {
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    backdropElement = renderTransition(backdropTransition, runBackdropTransition, {
      in: !!show,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      children: backdropElement
    });
  }
  return (0, import_jsx_runtime69.jsx)(import_jsx_runtime70.Fragment, {
    children: import_react_dom2.default.createPortal((0, import_jsx_runtime71.jsxs)(import_jsx_runtime70.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = "Modal";
var Modal_default = Object.assign(Modal, {
  Manager: ModalManager_default
});

// node_modules/react-bootstrap/esm/BootstrapModalManager.js
var Selector = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
var BootstrapModalManager = class extends ModalManager_default {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    element.dataset[prop] = actual;
    css_default(element, {
      [prop]: `${parseFloat(css_default(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== void 0) {
      delete element.dataset[prop];
      css_default(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, "modal-open");
    if (!containerState.scrollBarWidth)
      return;
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, "modal-open");
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
  }
};
var sharedManager;
function getSharedManager(options) {
  if (!sharedManager)
    sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
var BootstrapModalManager_default = BootstrapModalManager;

// node_modules/react-bootstrap/esm/ModalBody.js
var ModalBody_default = createWithBsPrefix("modal-body");

// node_modules/react-bootstrap/esm/ModalContext.js
var React74 = __toESM(require_react());
var ModalContext = React74.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
});
var ModalContext_default = ModalContext;

// node_modules/react-bootstrap/esm/ModalDialog.js
var import_classnames46 = __toESM(require_classnames());
var React75 = __toESM(require_react());
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var ModalDialog = React75.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size: size2,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === "string" ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return (0, import_jsx_runtime72.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames46.default)(dialogClass, className, size2 && `${bsPrefix}-${size2}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: (0, import_jsx_runtime72.jsx)("div", {
      className: (0, import_classnames46.default)(`${bsPrefix}-content`, contentClassName),
      children
    })
  });
});
ModalDialog.displayName = "ModalDialog";
var ModalDialog_default = ModalDialog;

// node_modules/react-bootstrap/esm/ModalFooter.js
var ModalFooter_default = createWithBsPrefix("modal-footer");

// node_modules/react-bootstrap/esm/ModalHeader.js
var import_classnames47 = __toESM(require_classnames());
var React77 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AbstractModalHeader.js
var React76 = __toESM(require_react());
var import_react62 = __toESM(require_react());
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var defaultProps20 = {
  closeLabel: "Close",
  closeButton: false
};
var AbstractModalHeader = React76.forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context6 = (0, import_react62.useContext)(ModalContext_default);
  const handleClick = useEventCallback(() => {
    context6 == null ? void 0 : context6.onHide();
    onHide == null ? void 0 : onHide();
  });
  return (0, import_jsx_runtime74.jsxs)("div", {
    ref,
    ...props,
    children: [children, closeButton && (0, import_jsx_runtime73.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = defaultProps20;
var AbstractModalHeader_default = AbstractModalHeader;

// node_modules/react-bootstrap/esm/ModalHeader.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var defaultProps21 = {
  closeLabel: "Close",
  closeButton: false
};
var ModalHeader = React77.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-header");
  return (0, import_jsx_runtime75.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames47.default)(className, bsPrefix)
  });
});
ModalHeader.displayName = "ModalHeader";
ModalHeader.defaultProps = defaultProps21;
var ModalHeader_default = ModalHeader;

// node_modules/react-bootstrap/esm/ModalTitle.js
var DivStyledAsH42 = divWithClassName_default("h4");
var ModalTitle_default = createWithBsPrefix("modal-title", {
  Component: DivStyledAsH42
});

// node_modules/react-bootstrap/esm/Modal.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var defaultProps22 = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog_default
};
function DialogTransition(props) {
  return (0, import_jsx_runtime76.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
function BackdropTransition(props) {
  return (0, import_jsx_runtime76.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
var Modal2 = React78.forwardRef(({
  bsPrefix,
  className,
  style: style2,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
  "aria-label": ariaLabel,
  /* BaseModal props */
  show,
  animation,
  backdrop,
  keyboard,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = (0, import_react63.useState)({});
  const [animateStaticModal, setAnimateStaticModal] = (0, import_react63.useState)(false);
  const waitingForMouseUpRef = (0, import_react63.useRef)(false);
  const ignoreBackdropClickRef = (0, import_react63.useRef)(false);
  const removeStaticModalAnimationRef = (0, import_react63.useRef)(null);
  const [modal, setModalRef] = useCallbackRef();
  const mergedRef = useMergedRefs_default(ref, setModalRef);
  const handleHide = useEventCallback(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const modalContext = (0, import_react63.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    return getSharedManager({
      isRTL
    });
  }
  function updateDialogStyle(node) {
    if (!canUseDOM_default)
      return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : void 0,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : void 0
    });
  }
  const handleWindowResize = useEventCallback(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount(() => {
    removeEventListener_default(window, "resize", handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  });
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };
  const handleMouseUp = (e) => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }
    waitingForMouseUpRef.current = false;
  };
  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };
  const handleStaticBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    handleStaticModalAnimation();
  };
  const handleClick = (e) => {
    if (backdrop === "static") {
      handleStaticBackdropClick(e);
      return;
    }
    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }
    onHide == null ? void 0 : onHide();
  };
  const handleEscapeKeyDown = (e) => {
    if (keyboard) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
    } else {
      e.preventDefault();
      if (backdrop === "static") {
        handleStaticModalAnimation();
      }
    }
  };
  const handleEnter = (node, isAppearing) => {
    if (node) {
      updateDialogStyle(node);
    }
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };
  const handleExit = (node) => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };
  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing);
    addEventListener_default(window, "resize", handleWindowResize);
  };
  const handleExited = (node) => {
    if (node)
      node.style.display = "";
    onExited == null ? void 0 : onExited(node);
    removeEventListener_default(window, "resize", handleWindowResize);
  };
  const renderBackdrop = (0, import_react63.useCallback)((backdropProps) => (0, import_jsx_runtime76.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames48.default)(`${bsPrefix}-backdrop`, backdropClassName, !animation && "show")
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = {
    ...style2,
    ...modalStyle
  };
  baseModalStyle.display = "block";
  const renderDialog = (dialogProps) => (0, import_jsx_runtime76.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: (0, import_classnames48.default)(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`, !animation && "show"),
    onClick: backdrop ? handleClick : void 0,
    onMouseUp: handleMouseUp,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    children: (0, import_jsx_runtime76.jsx)(Dialog, {
      ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName,
      children
    })
  });
  return (0, import_jsx_runtime76.jsx)(ModalContext_default.Provider, {
    value: modalContext,
    children: (0, import_jsx_runtime76.jsx)(Modal_default, {
      show,
      ref: mergedRef,
      backdrop,
      container,
      keyboard: true,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow,
      onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered,
      onExit: handleExit,
      onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : void 0,
      backdropTransition: animation ? BackdropTransition : void 0,
      renderBackdrop,
      renderDialog
    })
  });
});
Modal2.displayName = "Modal";
Modal2.defaultProps = defaultProps22;
var Modal_default2 = Object.assign(Modal2, {
  Body: ModalBody_default,
  Header: ModalHeader_default,
  Title: ModalTitle_default,
  Footer: ModalFooter_default,
  Dialog: ModalDialog_default,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});

// node_modules/react-bootstrap/esm/Nav.js
var import_classnames50 = __toESM(require_classnames());
var import_all = __toESM(require_all());
var React80 = __toESM(require_react());
var import_react64 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavItem.js
var NavItem_default2 = createWithBsPrefix("nav-item");

// node_modules/react-bootstrap/esm/NavLink.js
var import_classnames49 = __toESM(require_classnames());
var React79 = __toESM(require_react());
var import_jsx_runtime77 = __toESM(require_jsx_runtime());
var defaultProps23 = {
  disabled: false
};
var NavLink = React79.forwardRef(({
  bsPrefix,
  className,
  as: Component2 = Anchor_default,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  return (0, import_jsx_runtime77.jsx)(Component2, {
    ...props,
    ...navItemProps,
    ref,
    className: (0, import_classnames49.default)(className, bsPrefix, props.disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
NavLink.defaultProps = defaultProps23;
var NavLink_default = NavLink;

// node_modules/react-bootstrap/esm/Nav.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var defaultProps24 = {
  justify: false,
  fill: false
};
var Nav2 = React80.forwardRef((uncontrolledProps, ref) => {
  const {
    as = "div",
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0, import_react64.useContext)(NavbarContext_default);
  const cardHeaderContext = (0, import_react64.useContext)(CardHeaderContext_default);
  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }
  return (0, import_jsx_runtime78.jsx)(Nav_default, {
    as,
    ref,
    activeKey,
    className: (0, import_classnames50.default)(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav2.displayName = "Nav";
Nav2.defaultProps = defaultProps24;
var Nav_default2 = Object.assign(Nav2, {
  Item: NavItem_default2,
  Link: NavLink_default
});

// node_modules/react-bootstrap/esm/Navbar.js
var import_classnames56 = __toESM(require_classnames());
var React88 = __toESM(require_react());
var import_react71 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavbarBrand.js
var import_classnames51 = __toESM(require_classnames());
var React81 = __toESM(require_react());
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var NavbarBrand = React81.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-brand");
  const Component2 = as || (props.href ? "a" : "span");
  return (0, import_jsx_runtime79.jsx)(Component2, {
    ...props,
    ref,
    className: (0, import_classnames51.default)(className, bsPrefix)
  });
});
NavbarBrand.displayName = "NavbarBrand";
var NavbarBrand_default = NavbarBrand;

// node_modules/react-bootstrap/esm/NavbarCollapse.js
var React82 = __toESM(require_react());
var import_react65 = __toESM(require_react());
var import_jsx_runtime80 = __toESM(require_jsx_runtime());
var NavbarCollapse = React82.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-collapse");
  const context6 = (0, import_react65.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime80.jsx)(Collapse_default, {
    in: !!(context6 && context6.expanded),
    ...props,
    children: (0, import_jsx_runtime80.jsx)("div", {
      ref,
      className: bsPrefix,
      children
    })
  });
});
NavbarCollapse.displayName = "NavbarCollapse";
var NavbarCollapse_default = NavbarCollapse;

// node_modules/react-bootstrap/esm/NavbarToggle.js
var import_classnames52 = __toESM(require_classnames());
var React83 = __toESM(require_react());
var import_react66 = __toESM(require_react());
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var defaultProps25 = {
  label: "Toggle navigation"
};
var NavbarToggle = React83.forwardRef(({
  bsPrefix,
  className,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "button",
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-toggler");
  const {
    onToggle,
    expanded
  } = (0, import_react66.useContext)(NavbarContext_default) || {};
  const handleClick = useEventCallback((e) => {
    if (onClick)
      onClick(e);
    if (onToggle)
      onToggle();
  });
  if (Component2 === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime81.jsx)(Component2, {
    ...props,
    ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, import_classnames52.default)(className, bsPrefix, !expanded && "collapsed"),
    children: children || (0, import_jsx_runtime81.jsx)("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = "NavbarToggle";
NavbarToggle.defaultProps = defaultProps25;
var NavbarToggle_default = NavbarToggle;

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var React87 = __toESM(require_react());
var import_react70 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_classnames55 = __toESM(require_classnames());

// node_modules/@restart/hooks/esm/useMediaQuery.js
var import_react67 = __toESM(require_react());
var matchersByWindow = /* @__PURE__ */ new WeakMap();
var getMatcher = function getMatcher2(query, targetWindow) {
  if (!query || !targetWindow)
    return void 0;
  var matchers = matchersByWindow.get(targetWindow) || /* @__PURE__ */ new Map();
  matchersByWindow.set(targetWindow, matchers);
  var mql = matchers.get(query);
  if (!mql) {
    mql = targetWindow.matchMedia(query);
    mql.refCount = 0;
    matchers.set(mql.media, mql);
  }
  return mql;
};
function useMediaQuery(query, targetWindow) {
  if (targetWindow === void 0) {
    targetWindow = typeof window === "undefined" ? void 0 : window;
  }
  var mql = getMatcher(query, targetWindow);
  var _useState = (0, import_react67.useState)(function() {
    return mql ? mql.matches : false;
  }), matches = _useState[0], setMatches = _useState[1];
  useIsomorphicEffect_default(function() {
    var mql2 = getMatcher(query, targetWindow);
    if (!mql2) {
      return setMatches(false);
    }
    var matchers = matchersByWindow.get(targetWindow);
    var handleChange = function handleChange2() {
      setMatches(mql2.matches);
    };
    mql2.refCount++;
    mql2.addListener(handleChange);
    handleChange();
    return function() {
      mql2.removeListener(handleChange);
      mql2.refCount--;
      if (mql2.refCount <= 0) {
        matchers == null ? void 0 : matchers.delete(mql2.media);
      }
      mql2 = void 0;
    };
  }, [query]);
  return matches;
}

// node_modules/@restart/hooks/esm/useBreakpoint.js
var import_react68 = __toESM(require_react());
function createBreakpointHook(breakpointValues) {
  var names = Object.keys(breakpointValues);
  function and(query, next) {
    if (query === next) {
      return next;
    }
    return query ? query + " and " + next : next;
  }
  function getNext(breakpoint) {
    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
  }
  function getMaxQuery(breakpoint) {
    var next = getNext(breakpoint);
    var value = breakpointValues[next];
    if (typeof value === "number")
      value = value - 0.2 + "px";
    else
      value = "calc(" + value + " - 0.2px)";
    return "(max-width: " + value + ")";
  }
  function getMinQuery(breakpoint) {
    var value = breakpointValues[breakpoint];
    if (typeof value === "number") {
      value = value + "px";
    }
    return "(min-width: " + value + ")";
  }
  function useBreakpoint2(breakpointOrMap, direction, window2) {
    var breakpointMap;
    if (typeof breakpointOrMap === "object") {
      breakpointMap = breakpointOrMap;
      window2 = direction;
      direction = true;
    } else {
      var _breakpointMap;
      direction = direction || true;
      breakpointMap = (_breakpointMap = {}, _breakpointMap[breakpointOrMap] = direction, _breakpointMap);
    }
    var query = (0, import_react68.useMemo)(function() {
      return Object.entries(breakpointMap).reduce(function(query2, _ref) {
        var key = _ref[0], direction2 = _ref[1];
        if (direction2 === "up" || direction2 === true) {
          query2 = and(query2, getMinQuery(key));
        }
        if (direction2 === "down" || direction2 === true) {
          query2 = and(query2, getMaxQuery(key));
        }
        return query2;
      }, "");
    }, [JSON.stringify(breakpointMap)]);
    return useMediaQuery(query, window2);
  }
  return useBreakpoint2;
}
var useBreakpoint = createBreakpointHook({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
var useBreakpoint_default = useBreakpoint;

// node_modules/react-bootstrap/esm/Offcanvas.js
var React86 = __toESM(require_react());
var import_react69 = __toESM(require_react());

// node_modules/react-bootstrap/esm/OffcanvasBody.js
var OffcanvasBody_default = createWithBsPrefix("offcanvas-body");

// node_modules/react-bootstrap/esm/OffcanvasToggling.js
var import_classnames53 = __toESM(require_classnames());
var React84 = __toESM(require_react());
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var defaultProps26 = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var transitionStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
var OffcanvasToggling = React84.forwardRef(({
  bsPrefix,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  return (0, import_jsx_runtime82.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => React84.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames53.default)(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.defaultProps = defaultProps26;
OffcanvasToggling.displayName = "OffcanvasToggling";
var OffcanvasToggling_default = OffcanvasToggling;

// node_modules/react-bootstrap/esm/OffcanvasHeader.js
var import_classnames54 = __toESM(require_classnames());
var React85 = __toESM(require_react());
var import_jsx_runtime83 = __toESM(require_jsx_runtime());
var defaultProps27 = {
  closeLabel: "Close",
  closeButton: false
};
var OffcanvasHeader = React85.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-header");
  return (0, import_jsx_runtime83.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames54.default)(className, bsPrefix)
  });
});
OffcanvasHeader.displayName = "OffcanvasHeader";
OffcanvasHeader.defaultProps = defaultProps27;
var OffcanvasHeader_default = OffcanvasHeader;

// node_modules/react-bootstrap/esm/OffcanvasTitle.js
var DivStyledAsH52 = divWithClassName_default("h5");
var OffcanvasTitle_default = createWithBsPrefix("offcanvas-title", {
  Component: DivStyledAsH52
});

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime());
var import_jsx_runtime85 = __toESM(require_jsx_runtime());
var import_jsx_runtime86 = __toESM(require_jsx_runtime());
var defaultProps28 = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: "start",
  renderStaticNode: false
};
function DialogTransition2(props) {
  return (0, import_jsx_runtime84.jsx)(OffcanvasToggling_default, {
    ...props
  });
}
function BackdropTransition2(props) {
  return (0, import_jsx_runtime84.jsx)(Fade_default, {
    ...props
  });
}
var Offcanvas = React86.forwardRef(({
  bsPrefix,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
  placement,
  responsive,
  /* BaseModal props */
  show,
  backdrop,
  keyboard,
  scroll,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  renderStaticNode,
  ...props
}, ref) => {
  const modalManager = (0, import_react69.useRef)();
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  const {
    onToggle
  } = (0, import_react69.useContext)(NavbarContext_default) || {};
  const [showOffcanvas, setShowOffcanvas] = (0, import_react69.useState)(false);
  const hideResponsiveOffcanvas = useBreakpoint_default(responsive || "xs", "up");
  (0, import_react69.useEffect)(() => {
    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
  }, [show, responsive, hideResponsiveOffcanvas]);
  const handleHide = useEventCallback(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0, import_react69.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    if (scroll) {
      if (!modalManager.current)
        modalManager.current = new BootstrapModalManager_default({
          handleContainerOverflow: false
        });
      return modalManager.current;
    }
    return getSharedManager();
  }
  const handleEnter = (node, ...args) => {
    if (node)
      node.style.visibility = "visible";
    onEnter == null ? void 0 : onEnter(node, ...args);
  };
  const handleExited = (node, ...args) => {
    if (node)
      node.style.visibility = "";
    onExited == null ? void 0 : onExited(...args);
  };
  const renderBackdrop = (0, import_react69.useCallback)((backdropProps) => (0, import_jsx_runtime84.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames55.default)(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);
  const renderDialog = (dialogProps) => (0, import_jsx_runtime84.jsx)("div", {
    ...dialogProps,
    ...props,
    className: (0, import_classnames55.default)(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children
  });
  return (0, import_jsx_runtime86.jsxs)(import_jsx_runtime85.Fragment, {
    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), (0, import_jsx_runtime84.jsx)(ModalContext_default.Provider, {
      value: modalContext,
      children: (0, import_jsx_runtime84.jsx)(Modal_default, {
        show: showOffcanvas,
        ref,
        backdrop,
        container,
        keyboard,
        autoFocus,
        enforceFocus: enforceFocus && !scroll,
        restoreFocus,
        restoreFocusOptions,
        onEscapeKeyDown,
        onShow,
        onHide: handleHide,
        onEnter: handleEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited: handleExited,
        manager: getModalManager(),
        transition: DialogTransition2,
        backdropTransition: BackdropTransition2,
        renderBackdrop,
        renderDialog
      })
    })]
  });
});
Offcanvas.displayName = "Offcanvas";
Offcanvas.defaultProps = defaultProps28;
var Offcanvas_default = Object.assign(Offcanvas, {
  Body: OffcanvasBody_default,
  Header: OffcanvasHeader_default,
  Title: OffcanvasTitle_default
});

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime());
var NavbarOffcanvas = React87.forwardRef((props, ref) => {
  const context6 = (0, import_react70.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime87.jsx)(Offcanvas_default, {
    ref,
    show: !!(context6 != null && context6.expanded),
    ...props,
    renderStaticNode: true
  });
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
var NavbarOffcanvas_default = NavbarOffcanvas;

// node_modules/react-bootstrap/esm/Navbar.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime());
var NavbarText = createWithBsPrefix("navbar-text", {
  Component: "span"
});
var defaultProps29 = {
  expand: true,
  variant: "light",
  collapseOnSelect: false
};
var Navbar = React88.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand,
    variant,
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "nav",
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: "onToggle"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "navbar");
  const handleCollapse = (0, import_react71.useCallback)((...args) => {
    onSelect == null ? void 0 : onSelect(...args);
    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]);
  if (controlledProps.role === void 0 && Component2 !== "nav") {
    controlledProps.role = "navigation";
  }
  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === "string")
    expandClass = `${expandClass}-${expand}`;
  const navbarContext = (0, import_react71.useMemo)(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded,
    expand
  }), [bsPrefix, expanded, expand, onToggle]);
  return (0, import_jsx_runtime88.jsx)(NavbarContext_default.Provider, {
    value: navbarContext,
    children: (0, import_jsx_runtime88.jsx)(SelectableContext_default.Provider, {
      value: handleCollapse,
      children: (0, import_jsx_runtime88.jsx)(Component2, {
        ref,
        ...controlledProps,
        className: (0, import_classnames56.default)(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.defaultProps = defaultProps29;
Navbar.displayName = "Navbar";
var Navbar_default = Object.assign(Navbar, {
  Brand: NavbarBrand_default,
  Collapse: NavbarCollapse_default,
  Offcanvas: NavbarOffcanvas_default,
  Text: NavbarText,
  Toggle: NavbarToggle_default
});

// node_modules/react-bootstrap/esm/NavDropdown.js
var import_classnames57 = __toESM(require_classnames());
var React89 = __toESM(require_react());
var import_jsx_runtime89 = __toESM(require_jsx_runtime());
var import_jsx_runtime90 = __toESM(require_jsx_runtime());
var NavDropdown = React89.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  const navItemPrefix = useBootstrapPrefix(void 0, "nav-item");
  return (0, import_jsx_runtime90.jsxs)(Dropdown_default2, {
    ref,
    ...props,
    className: (0, import_classnames57.default)(className, navItemPrefix),
    children: [(0, import_jsx_runtime89.jsx)(Dropdown_default2.Toggle, {
      id,
      eventKey: null,
      active,
      disabled,
      childBsPrefix: bsPrefix,
      as: NavLink_default,
      children: title
    }), (0, import_jsx_runtime89.jsx)(Dropdown_default2.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent,
      variant: menuVariant,
      children
    })]
  });
});
NavDropdown.displayName = "NavDropdown";
var NavDropdown_default = Object.assign(NavDropdown, {
  Item: Dropdown_default2.Item,
  ItemText: Dropdown_default2.ItemText,
  Divider: Dropdown_default2.Divider,
  Header: Dropdown_default2.Header
});

// node_modules/react-bootstrap/esm/Overlay.js
var React93 = __toESM(require_react());
var import_react75 = __toESM(require_react());
var import_classnames59 = __toESM(require_classnames());

// node_modules/@restart/ui/esm/Overlay.js
var React90 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
var import_react73 = __toESM(require_react());

// node_modules/@restart/ui/esm/useRootClose.js
var import_react72 = __toESM(require_react());
var noop5 = () => {
};
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger
} = {}) {
  const onClose = onRootClose || noop5;
  useClickOutside_default(ref, onClose, {
    disabled,
    clickTrigger
  });
  const handleKeyUp = useEventCallback((e) => {
    if (isEscKey(e)) {
      onClose(e);
    }
  });
  (0, import_react72.useEffect)(() => {
    if (disabled || ref == null)
      return void 0;
    const doc = ownerDocument(getRefTarget(ref));
    let currentEvent = (doc.defaultView || window).event;
    const removeKeyupListener = listen_default(doc, "keyup", (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    return () => {
      removeKeyupListener();
    };
  }, [ref, disabled, handleKeyUp]);
}
var useRootClose_default = useRootClose;

// node_modules/@restart/ui/esm/Overlay.js
var Overlay = React90.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition,
    runTransition
  } = props;
  const [rootElement, attachRef] = useCallbackRef();
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const mergedRef = useMergedRefs_default(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = (0, import_react73.useState)(!props.show);
  const popper = usePopper_default(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));
  if (props.show && exited) {
    setExited(false);
  }
  const handleHidden = (...args) => {
    setExited(true);
    if (props.onExited) {
      props.onExited(...args);
    }
  };
  const mountOverlay = props.show || !exited;
  useRootClose_default(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  const {
    onExit,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = props;
  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });
  child = renderTransition(Transition, runTransition, {
    in: !!props.show,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: child,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered
  });
  return container ? import_react_dom3.default.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
var Overlay_default = Overlay;

// node_modules/react-bootstrap/esm/useOverlayOffset.js
var import_react74 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Popover.js
var import_classnames58 = __toESM(require_classnames());
var React92 = __toESM(require_react());

// node_modules/react-bootstrap/esm/PopoverHeader.js
var PopoverHeader_default = createWithBsPrefix("popover-header");

// node_modules/react-bootstrap/esm/PopoverBody.js
var PopoverBody_default = createWithBsPrefix("popover-body");

// node_modules/react-bootstrap/esm/helpers.js
var React91 = __toESM(require_react());
function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;
  if (placement === "left") {
    bsDirection = isRTL ? "end" : "start";
  } else if (placement === "right") {
    bsDirection = isRTL ? "start" : "end";
  }
  return bsDirection;
}

// node_modules/react-bootstrap/esm/getInitialPopperStyles.js
function getInitialPopperStyles(position = "absolute") {
  return {
    position,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}

// node_modules/react-bootstrap/esm/Popover.js
var import_jsx_runtime91 = __toESM(require_jsx_runtime());
var import_jsx_runtime92 = __toESM(require_jsx_runtime());
var defaultProps30 = {
  placement: "right"
};
var Popover = React92.forwardRef(({
  bsPrefix,
  placement,
  className,
  style: style2,
  children,
  body,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "popover");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style2;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style2,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return (0, import_jsx_runtime92.jsxs)("div", {
    ref,
    role: "tooltip",
    style: computedStyle,
    "x-placement": primaryPlacement,
    className: (0, import_classnames58.default)(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [(0, import_jsx_runtime91.jsx)("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? (0, import_jsx_runtime91.jsx)(PopoverBody_default, {
      children
    }) : children]
  });
});
Popover.defaultProps = defaultProps30;
var Popover_default = Object.assign(Popover, {
  Header: PopoverHeader_default,
  Body: PopoverBody_default,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
});

// node_modules/react-bootstrap/esm/useOverlayOffset.js
function useOverlayOffset(customOffset) {
  const overlayRef = (0, import_react74.useRef)(null);
  const popoverClass = useBootstrapPrefix(void 0, "popover");
  const offset = (0, import_react74.useMemo)(() => ({
    name: "offset",
    options: {
      offset: () => {
        if (overlayRef.current && hasClass(overlayRef.current, popoverClass)) {
          return customOffset || Popover_default.POPPER_OFFSET;
        }
        return customOffset || [0, 0];
      }
    }
  }), [customOffset, popoverClass]);
  return [overlayRef, [offset]];
}

// node_modules/react-bootstrap/esm/Overlay.js
var import_jsx_runtime93 = __toESM(require_jsx_runtime());
var defaultProps31 = {
  transition: Fade_default,
  rootClose: false,
  show: false,
  placement: "top"
};
function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;
  props.ref = ref.__wrapped || (ref.__wrapped = (r) => ref(safeFindDOMNode(r)));
  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = (r) => aRef(safeFindDOMNode(r)));
}
var Overlay2 = React93.forwardRef(({
  children: overlay,
  transition,
  popperConfig = {},
  ...outerProps
}, outerRef) => {
  const popperRef = (0, import_react75.useRef)({});
  const [firstRenderedState, setFirstRenderedState] = (0, import_react75.useState)(null);
  const [ref, modifiers] = useOverlayOffset(outerProps.offset);
  const mergedRef = useMergedRefs_default(outerRef, ref);
  const actualTransition = transition === true ? Fade_default : transition || void 0;
  const handleFirstUpdate = useEventCallback((state) => {
    setFirstRenderedState(state);
    popperConfig == null ? void 0 : popperConfig.onFirstUpdate == null ? void 0 : popperConfig.onFirstUpdate(state);
  });
  useIsomorphicEffect_default(() => {
    if (firstRenderedState) {
      popperRef.current.scheduleUpdate == null ? void 0 : popperRef.current.scheduleUpdate();
    }
  }, [firstRenderedState]);
  (0, import_react75.useEffect)(() => {
    if (!outerProps.show) {
      setFirstRenderedState(null);
    }
  }, [outerProps.show]);
  return (0, import_jsx_runtime93.jsx)(Overlay_default, {
    ...outerProps,
    ref: mergedRef,
    popperConfig: {
      ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || []),
      onFirstUpdate: handleFirstUpdate
    },
    transition: actualTransition,
    children: (overlayProps, {
      arrowProps,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;
      wrapRefs(overlayProps, arrowProps);
      const updatedPlacement = popperObj == null ? void 0 : popperObj.placement;
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement: updatedPlacement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false,
        strategy: popperConfig.strategy
      });
      const hasDoneInitialMeasure = !!firstRenderedState;
      if (typeof overlay === "function")
        return overlay({
          ...overlayProps,
          placement: updatedPlacement,
          show,
          ...!transition && show && {
            className: "show"
          },
          popper,
          arrowProps,
          hasDoneInitialMeasure
        });
      return React93.cloneElement(overlay, {
        ...overlayProps,
        placement: updatedPlacement,
        arrowProps,
        popper,
        hasDoneInitialMeasure,
        className: (0, import_classnames59.default)(overlay.props.className, !transition && show && "show"),
        style: {
          ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay2.displayName = "Overlay";
Overlay2.defaultProps = defaultProps31;
var Overlay_default2 = Overlay2;

// node_modules/react-bootstrap/esm/OverlayTrigger.js
var React94 = __toESM(require_react());
var import_react76 = __toESM(require_react());
var import_warning7 = __toESM(require_warning());
var import_jsx_runtime94 = __toESM(require_jsx_runtime());
var import_jsx_runtime95 = __toESM(require_jsx_runtime());
var import_jsx_runtime96 = __toESM(require_jsx_runtime());
function normalizeDelay(delay) {
  return delay && typeof delay === "object" ? delay : {
    show: delay,
    hide: delay
  };
}
function handleMouseOverOut(handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];
  if ((!related || related !== target) && !contains(target, related)) {
    handler(...args);
  }
}
var defaultProps32 = {
  defaultShow: false,
  trigger: ["hover", "focus"]
};
function OverlayTrigger({
  trigger,
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf("auto") !== -1,
  ...props
}) {
  const triggerNodeRef = (0, import_react76.useRef)(null);
  const mergedRef = useMergedRefs_default(triggerNodeRef, children.ref);
  const timeout = useTimeout();
  const hoverStateRef = (0, import_react76.useRef)("");
  const [show, setShow] = useUncontrolledProp(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== "function" ? React94.Children.only(children).props : {};
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const handleShow = (0, import_react76.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = "show";
    if (!delay.show) {
      setShow(true);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "show")
        setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = (0, import_react76.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = "hide";
    if (!delay.hide) {
      setShow(false);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "hide")
        setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = (0, import_react76.useCallback)((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = (0, import_react76.useCallback)((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = (0, import_react76.useCallback)((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = (0, import_react76.useCallback)((...args) => {
    handleMouseOverOut(handleShow, args, "fromElement");
  }, [handleShow]);
  const handleMouseOut = (0, import_react76.useCallback)((...args) => {
    handleMouseOverOut(handleHide, args, "toElement");
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };
  if (triggers.indexOf("click") !== -1) {
    triggerProps.onClick = handleClick;
  }
  if (triggers.indexOf("focus") !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }
  if (triggers.indexOf("hover") !== -1) {
    true ? (0, import_warning7.default)(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }
  return (0, import_jsx_runtime96.jsxs)(import_jsx_runtime95.Fragment, {
    children: [typeof children === "function" ? children(triggerProps) : (0, import_react76.cloneElement)(children, triggerProps), (0, import_jsx_runtime94.jsx)(Overlay_default2, {
      ...props,
      show,
      onHide: handleHide,
      flip,
      placement,
      popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
}
OverlayTrigger.defaultProps = defaultProps32;
var OverlayTrigger_default = OverlayTrigger;

// node_modules/react-bootstrap/esm/PageItem.js
var import_classnames60 = __toESM(require_classnames());
var React95 = __toESM(require_react());
var import_jsx_runtime97 = __toESM(require_jsx_runtime());
var import_jsx_runtime98 = __toESM(require_jsx_runtime());
var defaultProps33 = {
  active: false,
  disabled: false,
  activeLabel: "(current)"
};
var PageItem = React95.forwardRef(({
  active,
  disabled,
  className,
  style: style2,
  activeLabel,
  children,
  ...props
}, ref) => {
  const Component2 = active || disabled ? "span" : Anchor_default;
  return (0, import_jsx_runtime97.jsx)("li", {
    ref,
    style: style2,
    className: (0, import_classnames60.default)(className, "page-item", {
      active,
      disabled
    }),
    children: (0, import_jsx_runtime98.jsxs)(Component2, {
      className: "page-link",
      ...props,
      children: [children, active && activeLabel && (0, import_jsx_runtime97.jsx)("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.defaultProps = defaultProps33;
PageItem.displayName = "PageItem";
var PageItem_default = PageItem;
function createButton(name, defaultValue, label = name) {
  const Button3 = React95.forwardRef(({
    children,
    ...props
  }, ref) => (0, import_jsx_runtime98.jsxs)(PageItem, {
    ...props,
    ref,
    children: [(0, import_jsx_runtime97.jsx)("span", {
      "aria-hidden": "true",
      children: children || defaultValue
    }), (0, import_jsx_runtime97.jsx)("span", {
      className: "visually-hidden",
      children: label
    })]
  }));
  Button3.displayName = name;
  return Button3;
}
var First = createButton("First", "«");
var Prev = createButton("Prev", "‹", "Previous");
var Ellipsis = createButton("Ellipsis", "…", "More");
var Next = createButton("Next", "›");
var Last = createButton("Last", "»");

// node_modules/react-bootstrap/esm/Pagination.js
var import_classnames61 = __toESM(require_classnames());
var React96 = __toESM(require_react());
var import_jsx_runtime99 = __toESM(require_jsx_runtime());
var Pagination = React96.forwardRef(({
  bsPrefix,
  className,
  size: size2,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "pagination");
  return (0, import_jsx_runtime99.jsx)("ul", {
    ref,
    ...props,
    className: (0, import_classnames61.default)(className, decoratedBsPrefix, size2 && `${decoratedBsPrefix}-${size2}`)
  });
});
Pagination.displayName = "Pagination";
var Pagination_default = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem_default,
  Next,
  Last
});

// node_modules/react-bootstrap/esm/Placeholder.js
var React98 = __toESM(require_react());

// node_modules/react-bootstrap/esm/usePlaceholder.js
var import_classnames62 = __toESM(require_classnames());
function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size: size2,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "placeholder");
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return {
    ...colProps,
    className: (0, import_classnames62.default)(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size2 && `${bsPrefix}-${size2}`, bg && `bg-${bg}`)
  };
}

// node_modules/react-bootstrap/esm/PlaceholderButton.js
var React97 = __toESM(require_react());
var import_jsx_runtime100 = __toESM(require_jsx_runtime());
var PlaceholderButton = React97.forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime100.jsx)(Button_default2, {
    ...placeholderProps,
    ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = "PlaceholderButton";
var PlaceholderButton_default = PlaceholderButton;

// node_modules/react-bootstrap/esm/Placeholder.js
var import_jsx_runtime101 = __toESM(require_jsx_runtime());
var Placeholder = React98.forwardRef(({
  as: Component2 = "span",
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime101.jsx)(Component2, {
    ...placeholderProps,
    ref
  });
});
Placeholder.displayName = "Placeholder";
var Placeholder_default = Object.assign(Placeholder, {
  Button: PlaceholderButton_default
});

// node_modules/react-bootstrap/esm/ProgressBar.js
var import_classnames63 = __toESM(require_classnames());
var React99 = __toESM(require_react());
var import_react77 = __toESM(require_react());
var import_jsx_runtime102 = __toESM(require_jsx_runtime());
var ROUND_PRECISION = 1e3;
var defaultProps34 = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  visuallyHidden: false,
  striped: false
};
function getPercentage(now, min, max) {
  const percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
function renderProgressBar({
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  className,
  style: style2,
  variant,
  bsPrefix,
  ...props
}, ref) {
  return (0, import_jsx_runtime102.jsx)("div", {
    ref,
    ...props,
    role: "progressbar",
    className: (0, import_classnames63.default)(className, `${bsPrefix}-bar`, {
      [`bg-${variant}`]: variant,
      [`${bsPrefix}-bar-animated`]: animated,
      [`${bsPrefix}-bar-striped`]: animated || striped
    }),
    style: {
      width: `${getPercentage(now, min, max)}%`,
      ...style2
    },
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max,
    children: visuallyHidden ? (0, import_jsx_runtime102.jsx)("span", {
      className: "visually-hidden",
      children: label
    }) : label
  });
}
var ProgressBar = React99.forwardRef(({
  isChild,
  ...props
}, ref) => {
  props.bsPrefix = useBootstrapPrefix(props.bsPrefix, "progress");
  if (isChild) {
    return renderProgressBar(props, ref);
  }
  const {
    min,
    now,
    max,
    label,
    visuallyHidden,
    striped,
    animated,
    bsPrefix,
    variant,
    className,
    children,
    ...wrapperProps
  } = props;
  return (0, import_jsx_runtime102.jsx)("div", {
    ref,
    ...wrapperProps,
    className: (0, import_classnames63.default)(className, bsPrefix),
    children: children ? map(children, (child) => (0, import_react77.cloneElement)(child, {
      isChild: true
    })) : renderProgressBar({
      min,
      now,
      max,
      label,
      visuallyHidden,
      striped,
      animated,
      bsPrefix,
      variant
    }, ref)
  });
});
ProgressBar.displayName = "ProgressBar";
ProgressBar.defaultProps = defaultProps34;
var ProgressBar_default = ProgressBar;

// node_modules/react-bootstrap/esm/Ratio.js
var import_classnames64 = __toESM(require_classnames());
var React100 = __toESM(require_react());
var import_jsx_runtime103 = __toESM(require_jsx_runtime());
var defaultProps35 = {
  aspectRatio: "1x1"
};
function toPercent(num) {
  if (num <= 0)
    return "100%";
  if (num < 1)
    return `${num * 100}%`;
  return `${num}%`;
}
var Ratio = React100.forwardRef(({
  bsPrefix,
  className,
  children,
  aspectRatio,
  style: style2,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "ratio");
  const isCustomRatio = typeof aspectRatio === "number";
  return (0, import_jsx_runtime103.jsx)("div", {
    ref,
    ...props,
    style: {
      ...style2,
      ...isCustomRatio && {
        "--bs-aspect-ratio": toPercent(aspectRatio)
      }
    },
    className: (0, import_classnames64.default)(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
    children: React100.Children.only(children)
  });
});
Ratio.defaultProps = defaultProps35;
var Ratio_default = Ratio;

// node_modules/react-bootstrap/esm/Row.js
var import_classnames65 = __toESM(require_classnames());
var React101 = __toESM(require_react());
var import_jsx_runtime104 = __toESM(require_jsx_runtime());
var Row = React101.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "row");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (cols != null)
      classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return (0, import_jsx_runtime104.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames65.default)(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = "Row";
var Row_default = Row;

// node_modules/react-bootstrap/esm/Spinner.js
var import_classnames66 = __toESM(require_classnames());
var React102 = __toESM(require_react());
var import_jsx_runtime105 = __toESM(require_jsx_runtime());
var Spinner = React102.forwardRef(({
  bsPrefix,
  variant,
  animation = "border",
  size: size2,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "spinner");
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return (0, import_jsx_runtime105.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames66.default)(className, bsSpinnerPrefix, size2 && `${bsSpinnerPrefix}-${size2}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = "Spinner";
var Spinner_default = Spinner;

// node_modules/react-bootstrap/esm/SplitButton.js
var React103 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var import_jsx_runtime106 = __toESM(require_jsx_runtime());
var import_jsx_runtime107 = __toESM(require_jsx_runtime());
var propTypes6 = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   * @required
   */
  id: import_prop_types7.default.string,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: import_prop_types7.default.string,
  /** An `href` passed to the non-toggle Button */
  href: import_prop_types7.default.string,
  /** An anchor `target` passed to the non-toggle Button */
  target: import_prop_types7.default.string,
  /** An `onClick` handler passed to the non-toggle Button */
  onClick: import_prop_types7.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types7.default.node.isRequired,
  /** A `type` passed to the non-toggle Button */
  type: import_prop_types7.default.string,
  /** Disables both Buttons  */
  disabled: import_prop_types7.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types7.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types7.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types7.default.string,
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types7.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types7.default.string,
  /** @ignore */
  variant: import_prop_types7.default.string,
  /** @ignore */
  size: import_prop_types7.default.string
};
var defaultProps36 = {
  toggleLabel: "Toggle dropdown",
  type: "button"
};
var SplitButton = React103.forwardRef(({
  id,
  bsPrefix,
  size: size2,
  variant,
  title,
  type,
  toggleLabel,
  children,
  onClick,
  href,
  target,
  menuRole,
  renderMenuOnMount,
  rootCloseEvent,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime107.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  as: ButtonGroup_default,
  children: [(0, import_jsx_runtime106.jsx)(Button_default2, {
    size: size2,
    variant,
    disabled: props.disabled,
    bsPrefix,
    href,
    target,
    onClick,
    type,
    children: title
  }), (0, import_jsx_runtime106.jsx)(Dropdown_default2.Toggle, {
    split: true,
    id,
    size: size2,
    variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix,
    children: (0, import_jsx_runtime106.jsx)("span", {
      className: "visually-hidden",
      children: toggleLabel
    })
  }), (0, import_jsx_runtime106.jsx)(Dropdown_default2.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    flip,
    children
  })]
}));
SplitButton.propTypes = propTypes6;
SplitButton.defaultProps = defaultProps36;
SplitButton.displayName = "SplitButton";
var SplitButton_default = SplitButton;

// node_modules/react-bootstrap/esm/SSRProvider.js
var SSRProvider_default = $704cf1d3b684cc5c$export$9f8ac96af4b1b2ae;

// node_modules/react-bootstrap/esm/Stack.js
var import_classnames67 = __toESM(require_classnames());
var React104 = __toESM(require_react());

// node_modules/react-bootstrap/esm/createUtilityClasses.js
var import_prop_types8 = __toESM(require_prop_types());
function createUtilityClassName(utilityValues, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = DEFAULT_MIN_BREAKPOINT) {
  const classes = [];
  Object.entries(utilityValues).forEach(([utilName, utilValue]) => {
    if (utilValue != null) {
      if (typeof utilValue === "object") {
        breakpoints.forEach((brkPoint) => {
          const bpValue = utilValue[brkPoint];
          if (bpValue != null) {
            const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
            classes.push(`${utilName}${infix}-${bpValue}`);
          }
        });
      } else {
        classes.push(`${utilName}-${utilValue}`);
      }
    }
  });
  return classes;
}

// node_modules/react-bootstrap/esm/Stack.js
var import_jsx_runtime108 = __toESM(require_jsx_runtime());
var Stack = React104.forwardRef(({
  as: Component2 = "div",
  bsPrefix,
  className,
  direction,
  gap,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, direction === "horizontal" ? "hstack" : "vstack");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  return (0, import_jsx_runtime108.jsx)(Component2, {
    ...props,
    ref,
    className: (0, import_classnames67.default)(className, bsPrefix, ...createUtilityClassName({
      gap
    }, breakpoints, minBreakpoint))
  });
});
Stack.displayName = "Stack";
var Stack_default = Stack;

// node_modules/react-bootstrap/esm/Tab.js
var import_prop_types9 = __toESM(require_prop_types());
var React109 = __toESM(require_react());

// node_modules/react-bootstrap/esm/TabContainer.js
var React107 = __toESM(require_react());

// node_modules/@restart/ui/esm/Tabs.js
var React106 = __toESM(require_react());
var import_react79 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabPanel.js
var React105 = __toESM(require_react());
var import_react78 = __toESM(require_react());
var import_jsx_runtime109 = __toESM(require_jsx_runtime());
var _excluded9 = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var _excluded22 = ["activeKey", "getControlledId", "getControllerId"];
var _excluded32 = ["as"];
function _objectWithoutPropertiesLoose10(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = "tabpanel",
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref, props = _objectWithoutPropertiesLoose10(_ref, _excluded9);
  const context6 = (0, import_react78.useContext)(TabContext_default);
  if (!context6)
    return [Object.assign({}, props, {
      role
    }), {
      eventKey,
      isActive: active,
      mountOnEnter,
      transition,
      unmountOnExit,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    }];
  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context6, rest = _objectWithoutPropertiesLoose10(context6, _excluded22);
  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    "aria-labelledby": getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
var TabPanel = React105.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (_ref2, ref) => {
    let {
      as: Component2 = "div"
    } = _ref2, props = _objectWithoutPropertiesLoose10(_ref2, _excluded32);
    const [tabPanelProps, {
      isActive,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      mountOnEnter,
      unmountOnExit,
      transition: Transition = NoopTransition_default
    }] = useTabPanel(props);
    return (0, import_jsx_runtime109.jsx)(TabContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime109.jsx)(SelectableContext_default.Provider, {
        value: null,
        children: (0, import_jsx_runtime109.jsx)(Transition, {
          in: isActive,
          onEnter,
          onEntering,
          onEntered,
          onExit,
          onExiting,
          onExited,
          mountOnEnter,
          unmountOnExit,
          children: (0, import_jsx_runtime109.jsx)(Component2, Object.assign({}, tabPanelProps, {
            ref,
            hidden: !isActive,
            "aria-hidden": !isActive
          }))
        })
      })
    });
  }
);
TabPanel.displayName = "TabPanel";
var TabPanel_default = TabPanel;

// node_modules/@restart/ui/esm/Tabs.js
var import_jsx_runtime110 = __toESM(require_jsx_runtime());
var Tabs = (props) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp2(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $704cf1d3b684cc5c$export$619500959fc48b26(userId);
  const generateChildId = (0, import_react79.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0, import_react79.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: (key) => generateChildId(key, "tabpane"),
    getControllerId: (key) => generateChildId(key, "tab")
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return (0, import_jsx_runtime110.jsx)(TabContext_default.Provider, {
    value: tabContext,
    children: (0, import_jsx_runtime110.jsx)(SelectableContext_default.Provider, {
      value: onSelect || null,
      children
    })
  });
};
Tabs.Panel = TabPanel_default;
var Tabs_default = Tabs;

// node_modules/react-bootstrap/esm/getTabTransitionComponent.js
function getTabTransitionComponent(transition) {
  if (typeof transition === "boolean") {
    return transition ? Fade_default : NoopTransition_default;
  }
  return transition;
}

// node_modules/react-bootstrap/esm/TabContainer.js
var import_jsx_runtime111 = __toESM(require_jsx_runtime());
var TabContainer = ({
  transition,
  ...props
}) => (0, import_jsx_runtime111.jsx)(Tabs_default, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
var TabContainer_default = TabContainer;

// node_modules/react-bootstrap/esm/TabContent.js
var TabContent_default = createWithBsPrefix("tab-content");

// node_modules/react-bootstrap/esm/TabPane.js
var import_classnames68 = __toESM(require_classnames());
var React108 = __toESM(require_react());
var import_jsx_runtime112 = __toESM(require_jsx_runtime());
var TabPane = React108.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = Fade_default
  }] = useTabPanel({
    ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, "tab-pane");
  return (0, import_jsx_runtime112.jsx)(TabContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime112.jsx)(SelectableContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime112.jsx)(Transition, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: (0, import_jsx_runtime112.jsx)(Component2, {
          ...rest,
          ref,
          className: (0, import_classnames68.default)(className, prefix, isActive && "active")
        })
      })
    })
  });
});
TabPane.displayName = "TabPane";
var TabPane_default = TabPane;

// node_modules/react-bootstrap/esm/Tab.js
var import_jsx_runtime113 = __toESM(require_jsx_runtime());
var import_jsx_runtime114 = __toESM(require_jsx_runtime());
var propTypes7 = {
  eventKey: import_prop_types9.default.oneOfType([import_prop_types9.default.string, import_prop_types9.default.number]),
  /**
   * Content for the tab title.
   */
  title: import_prop_types9.default.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: import_prop_types9.default.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: import_prop_types9.default.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: import_prop_types9.default.object
};
var Tab = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
  return (0, import_jsx_runtime114.jsx)(import_jsx_runtime113.Fragment, {});
};
Tab.propTypes = propTypes7;
var Tab_default = Object.assign(Tab, {
  Container: TabContainer_default,
  Content: TabContent_default,
  Pane: TabPane_default
});

// node_modules/react-bootstrap/esm/Table.js
var import_classnames69 = __toESM(require_classnames());
var React110 = __toESM(require_react());
var import_jsx_runtime115 = __toESM(require_jsx_runtime());
var Table = React110.forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size: size2,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "table");
  const classes = (0, import_classnames69.default)(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size2 && `${decoratedBsPrefix}-${size2}`, striped && `${decoratedBsPrefix}-${typeof striped === "string" ? `striped-${striped}` : "striped"}`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);
  const table = (0, import_jsx_runtime115.jsx)("table", {
    ...props,
    className: classes,
    ref
  });
  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;
    if (typeof responsive === "string") {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }
    return (0, import_jsx_runtime115.jsx)("div", {
      className: responsiveClass,
      children: table
    });
  }
  return table;
});
var Table_default = Table;

// node_modules/react-bootstrap/esm/Tabs.js
var React111 = __toESM(require_react());
var import_jsx_runtime116 = __toESM(require_jsx_runtime());
var import_jsx_runtime117 = __toESM(require_jsx_runtime());
var defaultProps37 = {
  variant: "tabs",
  mountOnEnter: false,
  unmountOnExit: false
};
function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, (child) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}
function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    tabAttrs,
    id
  } = child.props;
  if (title == null) {
    return null;
  }
  return (0, import_jsx_runtime116.jsx)(NavItem_default2, {
    as: "li",
    role: "presentation",
    children: (0, import_jsx_runtime116.jsx)(NavLink_default, {
      as: "button",
      type: "button",
      eventKey,
      disabled,
      id,
      className: tabClassName,
      ...tabAttrs,
      children: title
    })
  });
}
var Tabs2 = (props) => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  return (0, import_jsx_runtime117.jsxs)(Tabs_default, {
    id,
    activeKey,
    onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter,
    unmountOnExit,
    children: [(0, import_jsx_runtime116.jsx)(Nav_default2, {
      ...controlledProps,
      role: "tablist",
      as: "ul",
      children: map(children, renderTab)
    }), (0, import_jsx_runtime116.jsx)(TabContent_default, {
      children: map(children, (child) => {
        const childProps = {
          ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        delete childProps.tabAttrs;
        return (0, import_jsx_runtime116.jsx)(TabPane_default, {
          ...childProps
        });
      })
    })]
  });
};
Tabs2.defaultProps = defaultProps37;
Tabs2.displayName = "Tabs";
var Tabs_default2 = Tabs2;

// node_modules/react-bootstrap/esm/Toast.js
var React115 = __toESM(require_react());
var import_react81 = __toESM(require_react());
var import_classnames71 = __toESM(require_classnames());

// node_modules/react-bootstrap/esm/ToastFade.js
var React112 = __toESM(require_react());
var import_jsx_runtime118 = __toESM(require_jsx_runtime());
var fadeStyles2 = {
  [ENTERING]: "showing",
  [EXITING]: "showing show"
};
var ToastFade = React112.forwardRef((props, ref) => (0, import_jsx_runtime118.jsx)(Fade_default, {
  ...props,
  ref,
  transitionClasses: fadeStyles2
}));
ToastFade.displayName = "ToastFade";
var ToastFade_default = ToastFade;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_classnames70 = __toESM(require_classnames());
var React114 = __toESM(require_react());
var import_react80 = __toESM(require_react());

// node_modules/react-bootstrap/esm/ToastContext.js
var React113 = __toESM(require_react());
var ToastContext = React113.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {
  }
});
var ToastContext_default = ToastContext;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_jsx_runtime119 = __toESM(require_jsx_runtime());
var import_jsx_runtime120 = __toESM(require_jsx_runtime());
var defaultProps38 = {
  closeLabel: "Close",
  closeButton: true
};
var ToastHeader = React114.forwardRef(({
  bsPrefix,
  closeLabel,
  closeVariant,
  closeButton,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-header");
  const context6 = (0, import_react80.useContext)(ToastContext_default);
  const handleClick = useEventCallback((e) => {
    context6 == null ? void 0 : context6.onClose == null ? void 0 : context6.onClose(e);
  });
  return (0, import_jsx_runtime120.jsxs)("div", {
    ref,
    ...props,
    className: (0, import_classnames70.default)(bsPrefix, className),
    children: [children, closeButton && (0, import_jsx_runtime119.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = "ToastHeader";
ToastHeader.defaultProps = defaultProps38;
var ToastHeader_default = ToastHeader;

// node_modules/react-bootstrap/esm/ToastBody.js
var ToastBody_default = createWithBsPrefix("toast-body");

// node_modules/react-bootstrap/esm/Toast.js
var import_jsx_runtime121 = __toESM(require_jsx_runtime());
var Toast = React115.forwardRef(({
  bsPrefix,
  className,
  transition: Transition = ToastFade_default,
  show = true,
  animation = true,
  delay = 5e3,
  autohide = false,
  onClose,
  bg,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast");
  const delayRef = (0, import_react81.useRef)(delay);
  const onCloseRef = (0, import_react81.useRef)(onClose);
  (0, import_react81.useEffect)(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = useTimeout();
  const autohideToast = !!(autohide && show);
  const autohideFunc = (0, import_react81.useCallback)(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0, import_react81.useEffect)(() => {
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = (0, import_react81.useMemo)(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition && animation);
  const toast = (0, import_jsx_runtime121.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames71.default)(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return (0, import_jsx_runtime121.jsx)(ToastContext_default.Provider, {
    value: toastContext,
    children: hasAnimation && Transition ? (0, import_jsx_runtime121.jsx)(Transition, {
      in: show,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = "Toast";
var Toast_default = Object.assign(Toast, {
  Body: ToastBody_default,
  Header: ToastHeader_default
});

// node_modules/react-bootstrap/esm/ToastContainer.js
var import_classnames72 = __toESM(require_classnames());
var React116 = __toESM(require_react());
var import_jsx_runtime122 = __toESM(require_jsx_runtime());
var positionClasses = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0"
};
var ToastContainer = React116.forwardRef(({
  bsPrefix,
  position,
  containerPosition = "absolute",
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-container");
  return (0, import_jsx_runtime122.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames72.default)(bsPrefix, position && [containerPosition ? `position-${containerPosition}` : null, positionClasses[position]], className)
  });
});
ToastContainer.displayName = "ToastContainer";
var ToastContainer_default = ToastContainer;

// node_modules/react-bootstrap/esm/ToggleButton.js
var import_classnames73 = __toESM(require_classnames());
var React117 = __toESM(require_react());
var import_jsx_runtime123 = __toESM(require_jsx_runtime());
var import_jsx_runtime124 = __toESM(require_jsx_runtime());
var import_jsx_runtime125 = __toESM(require_jsx_runtime());
var noop6 = () => void 0;
var ToggleButton = React117.forwardRef(({
  bsPrefix,
  name,
  className,
  checked,
  type,
  onChange,
  value,
  disabled,
  id,
  inputRef,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "btn-check");
  return (0, import_jsx_runtime125.jsxs)(import_jsx_runtime124.Fragment, {
    children: [(0, import_jsx_runtime123.jsx)("input", {
      className: bsPrefix,
      name,
      type,
      value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange || noop6,
      id
    }), (0, import_jsx_runtime123.jsx)(Button_default2, {
      ...props,
      ref,
      className: (0, import_classnames73.default)(className, disabled && "disabled"),
      type: void 0,
      role: void 0,
      as: "label",
      htmlFor: id
    })]
  });
});
ToggleButton.displayName = "ToggleButton";
var ToggleButton_default = ToggleButton;

// node_modules/react-bootstrap/esm/ToggleButtonGroup.js
var React118 = __toESM(require_react());
var import_invariant4 = __toESM(require_browser());
var import_jsx_runtime126 = __toESM(require_jsx_runtime());
var defaultProps39 = {
  type: "radio",
  vertical: false
};
var ToggleButtonGroup = React118.forwardRef((props, ref) => {
  const {
    children,
    type,
    name,
    value,
    onChange,
    ...controlledProps
  } = useUncontrolled(props, {
    value: "onChange"
  });
  const getValues = () => value == null ? [] : [].concat(value);
  const handleToggle = (inputVal, event) => {
    if (!onChange) {
      return;
    }
    const values = getValues();
    const isActive = values.indexOf(inputVal) !== -1;
    if (type === "radio") {
      if (!isActive)
        onChange(inputVal, event);
      return;
    }
    if (isActive) {
      onChange(values.filter((n) => n !== inputVal), event);
    } else {
      onChange([...values, inputVal], event);
    }
  };
  !(type !== "radio" || !!name) ? true ? (0, import_invariant4.default)(false, 'A `name` is required to group the toggle buttons when the `type` is set to "radio"') : (0, import_invariant4.default)(false) : void 0;
  return (0, import_jsx_runtime126.jsx)(ButtonGroup_default, {
    ...controlledProps,
    ref,
    children: map(children, (child) => {
      const values = getValues();
      const {
        value: childVal,
        onChange: childOnChange
      } = child.props;
      const handler = (e) => handleToggle(childVal, e);
      return React118.cloneElement(child, {
        type,
        name: child.name || name,
        checked: values.indexOf(childVal) !== -1,
        onChange: createChainedFunction_default(childOnChange, handler)
      });
    })
  });
});
ToggleButtonGroup.defaultProps = defaultProps39;
var ToggleButtonGroup_default = Object.assign(ToggleButtonGroup, {
  Button: ToggleButton_default
});

// node_modules/react-bootstrap/esm/Tooltip.js
var import_classnames74 = __toESM(require_classnames());
var React119 = __toESM(require_react());
var import_jsx_runtime127 = __toESM(require_jsx_runtime());
var import_jsx_runtime128 = __toESM(require_jsx_runtime());
var defaultProps40 = {
  placement: "right"
};
var Tooltip = React119.forwardRef(({
  bsPrefix,
  placement,
  className,
  style: style2,
  children,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tooltip");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style2;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style2,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return (0, import_jsx_runtime128.jsxs)("div", {
    ref,
    style: computedStyle,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, import_classnames74.default)(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [(0, import_jsx_runtime127.jsx)("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), (0, import_jsx_runtime127.jsx)("div", {
      className: `${bsPrefix}-inner`,
      children
    })]
  });
});
Tooltip.defaultProps = defaultProps40;
Tooltip.displayName = "Tooltip";
var Tooltip_default = Tooltip;
export {
  Accordion_default as Accordion,
  AccordionButton_default as AccordionButton,
  AccordionCollapse_default as AccordionCollapse,
  AccordionContext_default as AccordionContext,
  Alert_default as Alert,
  Anchor_default2 as Anchor,
  Badge_default as Badge,
  Breadcrumb_default as Breadcrumb,
  BreadcrumbItem_default as BreadcrumbItem,
  Button_default2 as Button,
  ButtonGroup_default as ButtonGroup,
  ButtonToolbar_default as ButtonToolbar,
  Card_default as Card,
  CardGroup_default as CardGroup,
  CardImg_default as CardImg,
  Carousel_default as Carousel,
  CarouselItem_default as CarouselItem,
  CloseButton_default as CloseButton,
  Col_default as Col,
  Collapse_default as Collapse,
  Container_default as Container,
  Dropdown_default2 as Dropdown,
  DropdownButton_default as DropdownButton,
  Fade_default as Fade,
  Figure_default as Figure,
  FloatingLabel_default as FloatingLabel,
  Form_default as Form,
  FormCheck_default as FormCheck,
  FormControl_default as FormControl,
  FormFloating_default as FormFloating,
  FormGroup_default as FormGroup,
  FormLabel_default as FormLabel,
  FormSelect_default as FormSelect,
  FormText_default as FormText,
  Image_default as Image,
  InputGroup_default as InputGroup,
  ListGroup_default as ListGroup,
  ListGroupItem_default as ListGroupItem,
  Modal_default2 as Modal,
  ModalBody_default as ModalBody,
  ModalDialog_default as ModalDialog,
  ModalFooter_default as ModalFooter,
  ModalHeader_default as ModalHeader,
  ModalTitle_default as ModalTitle,
  Nav_default2 as Nav,
  NavDropdown_default as NavDropdown,
  NavItem_default2 as NavItem,
  NavLink_default as NavLink,
  Navbar_default as Navbar,
  NavbarBrand_default as NavbarBrand,
  Offcanvas_default as Offcanvas,
  OffcanvasBody_default as OffcanvasBody,
  OffcanvasHeader_default as OffcanvasHeader,
  OffcanvasTitle_default as OffcanvasTitle,
  Overlay_default2 as Overlay,
  OverlayTrigger_default as OverlayTrigger,
  PageItem_default as PageItem,
  Pagination_default as Pagination,
  Placeholder_default as Placeholder,
  PlaceholderButton_default as PlaceholderButton,
  Popover_default as Popover,
  PopoverBody_default as PopoverBody,
  PopoverHeader_default as PopoverHeader,
  ProgressBar_default as ProgressBar,
  Ratio_default as Ratio,
  Row_default as Row,
  SSRProvider_default as SSRProvider,
  Spinner_default as Spinner,
  SplitButton_default as SplitButton,
  Stack_default as Stack,
  Tab_default as Tab,
  TabContainer_default as TabContainer,
  TabContent_default as TabContent,
  TabPane_default as TabPane,
  Table_default as Table,
  Tabs_default2 as Tabs,
  ThemeProvider_default as ThemeProvider,
  Toast_default as Toast,
  ToastBody_default as ToastBody,
  ToastContainer_default as ToastContainer,
  ToastHeader_default as ToastHeader,
  ToggleButton_default as ToggleButton,
  ToggleButtonGroup_default as ToggleButtonGroup,
  Tooltip_default as Tooltip,
  useAccordionButton
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=react-bootstrap.js.map
