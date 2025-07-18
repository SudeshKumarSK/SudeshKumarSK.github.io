import {
  require_react_dom
} from "./chunk-SRAQOA3L.js";
import {
  require_jsx_runtime
} from "./chunk-BU3YUUBE.js";
import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/@react-google-maps/api/dist/esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var React = __toESM(require_react());
var import_react = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_react_dom = __toESM(require_react_dom());
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var NODE_ENV = "development";
var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== "production") {
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
var invariant_1 = invariant;
var MapContext = (0, import_react.createContext)(null);
function useGoogleMap() {
  invariant_1(!!import_react.useContext, "useGoogleMap is React hook and requires React version 16.8+");
  const map = (0, import_react.useContext)(MapContext);
  invariant_1(!!map, "useGoogleMap needs a GoogleMap available up in the tree");
  return map;
}
function reduce(obj, fn, acc) {
  return Object.keys(obj).reduce(function reducer(newAcc, key) {
    return fn(newAcc, obj[key], key);
  }, acc);
}
function forEach(obj, fn) {
  Object.keys(obj).forEach((key) => {
    return fn(obj[key], key);
  });
}
function applyUpdaterToNextProps(updaterMap2, prevProps, nextProps, instance) {
  const map = {};
  const iter = (fn, key) => {
    const nextValue = nextProps[key];
    if (nextValue !== prevProps[key]) {
      map[key] = nextValue;
      fn(instance, nextValue);
    }
  };
  forEach(updaterMap2, iter);
  return map;
}
function registerEvents(props, instance, eventMap2) {
  const registeredList = reduce(eventMap2, function reducer(acc, googleEventName, onEventName) {
    if (typeof props[onEventName] === "function") {
      acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
    }
    return acc;
  }, []);
  return registeredList;
}
function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}
function unregisterEvents(events = []) {
  events.forEach(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents({ updaterMap: updaterMap2, eventMap: eventMap2, prevProps, nextProps, instance }) {
  const registeredEvents = registerEvents(nextProps, instance, eventMap2);
  applyUpdaterToNextProps(updaterMap2, prevProps, nextProps, instance);
  return registeredEvents;
}
var eventMap$i = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap$i = {
  extraMapTypes(map, extra) {
    extra.forEach(function forEachExtra(it, i) {
      map.mapTypes.set(String(i), it);
    });
  },
  center(map, center) {
    map.setCenter(center);
  },
  clickableIcons(map, clickable) {
    map.setClickableIcons(clickable);
  },
  heading(map, heading) {
    map.setHeading(heading);
  },
  mapTypeId(map, mapTypeId) {
    map.setMapTypeId(mapTypeId);
  },
  options(map, options) {
    map.setOptions(options);
  },
  streetView(map, streetView) {
    map.setStreetView(streetView);
  },
  tilt(map, tilt) {
    map.setTilt(tilt);
  },
  zoom(map, zoom) {
    map.setZoom(zoom);
  }
};
function GoogleMapFunctional({
  children,
  options,
  id,
  mapContainerStyle,
  mapContainerClassName,
  center,
  // clickableIcons,
  // extraMapTypes,
  // heading,
  // mapTypeId,
  onClick,
  onDblClick,
  onDrag,
  onDragEnd,
  onDragStart,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseDown,
  onMouseUp,
  onRightClick,
  // onMapTypeIdChanged,
  // onTilesLoaded,
  // onBoundsChanged,
  onCenterChanged,
  // onHeadingChanged,
  // onIdle,
  // onProjectionChanged,
  // onResize,
  // onTiltChanged,
  // onZoomChanged,
  onLoad,
  onUnmount
}) {
  const [map, setMap] = (0, import_react.useState)(null);
  const ref = (0, import_react.useRef)(null);
  const [centerChangedListener, setCenterChangedListener] = (0, import_react.useState)(null);
  const [dblclickListener, setDblclickListener] = (0, import_react.useState)(null);
  const [dragendListener, setDragendListener] = (0, import_react.useState)(null);
  const [dragstartListener, setDragstartListener] = (0, import_react.useState)(null);
  const [mousedownListener, setMousedownListener] = (0, import_react.useState)(null);
  const [mousemoveListener, setMousemoveListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  const [mouseupListener, setMouseupListener] = (0, import_react.useState)(null);
  const [rightclickListener, setRightclickListener] = (0, import_react.useState)(null);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [dragListener, setDragListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (options && map !== null) {
      map.setOptions(options);
    }
  }, [map, options]);
  (0, import_react.useEffect)(() => {
    if (map !== null && typeof center !== "undefined") {
      map.setCenter(center);
    }
  }, [map, center]);
  (0, import_react.useEffect)(() => {
    if (map && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(map, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  (0, import_react.useEffect)(() => {
    if (map && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(map, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  (0, import_react.useEffect)(() => {
    if (map && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(map, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  (0, import_react.useEffect)(() => {
    if (map && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(map, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  (0, import_react.useEffect)(() => {
    if (map && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(map, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  (0, import_react.useEffect)(() => {
    if (map && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(map, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (map && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(map, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (map && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(map, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  (0, import_react.useEffect)(() => {
    if (map && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(map, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  (0, import_react.useEffect)(() => {
    if (map && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(map, "click", onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (map && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(map, "drag", onDrag));
    }
  }, [onDrag]);
  (0, import_react.useEffect)(() => {
    if (map && onCenterChanged) {
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      setCenterChangedListener(google.maps.event.addListener(map, "center_changed", onCenterChanged));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    const map2 = ref.current === null ? null : new google.maps.Map(ref.current, options);
    setMap(map2);
    if (map2 !== null && onLoad) {
      onLoad(map2);
    }
    return () => {
      if (map2 !== null) {
        if (onUnmount) {
          onUnmount(map2);
        }
      }
    };
  }, []);
  return (0, import_jsx_runtime.jsx)("div", Object.assign({ id, ref, style: mapContainerStyle, className: mapContainerClassName }, { children: (0, import_jsx_runtime.jsx)(MapContext.Provider, Object.assign({ value: map }, { children: map !== null ? children : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}) })) }));
}
(0, import_react.memo)(GoogleMapFunctional);
var GoogleMap = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      map: null
    };
    this.registeredEvents = [];
    this.mapRef = null;
    this.getInstance = () => {
      if (this.mapRef === null) {
        return null;
      }
      return new google.maps.Map(this.mapRef, this.props.options);
    };
    this.panTo = (latLng) => {
      const map = this.getInstance();
      if (map) {
        map.panTo(latLng);
      }
    };
    this.setMapCallback = () => {
      if (this.state.map !== null) {
        if (this.props.onLoad) {
          this.props.onLoad(this.state.map);
        }
      }
    };
    this.getRef = (ref) => {
      this.mapRef = ref;
    };
  }
  componentDidMount() {
    const map = this.getInstance();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$i,
      eventMap: eventMap$i,
      prevProps: {},
      nextProps: this.props,
      instance: map
    });
    this.setState(function setMap() {
      return {
        map
      };
    }, this.setMapCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.map !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$i,
        eventMap: eventMap$i,
        prevProps,
        nextProps: this.props,
        instance: this.state.map
      });
    }
  }
  componentWillUnmount() {
    if (this.state.map !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.map);
      }
      unregisterEvents(this.registeredEvents);
    }
  }
  render() {
    return (0, import_jsx_runtime.jsx)("div", Object.assign({ id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName }, { children: (0, import_jsx_runtime.jsx)(MapContext.Provider, Object.assign({ value: this.state.map }, { children: this.state.map !== null ? this.props.children : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}) })) }));
  }
};
function __rest$1(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var isBrowser = typeof document !== "undefined";
function injectScript({ url, id, nonce }) {
  if (!isBrowser) {
    return Promise.reject(new Error("document is undefined"));
  }
  return new Promise(function injectScriptCallback(resolve, reject) {
    const existingScript = document.getElementById(id);
    const windowWithGoogleMap = window;
    if (existingScript) {
      const dataStateAttribute = existingScript.getAttribute("data-state");
      if (existingScript.src === url && dataStateAttribute !== "error") {
        if (dataStateAttribute === "ready") {
          return resolve(id);
        } else {
          const originalInitMap = windowWithGoogleMap.initMap;
          const originalErrorCallback = existingScript.onerror;
          windowWithGoogleMap.initMap = function initMap() {
            if (originalInitMap) {
              originalInitMap();
            }
            resolve(id);
          };
          existingScript.onerror = function(err) {
            if (originalErrorCallback) {
              originalErrorCallback(err);
            }
            reject(err);
          };
          return;
        }
      } else {
        existingScript.remove();
      }
    }
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id = id;
    script.async = true;
    script.nonce = nonce;
    script.onerror = function onerror(err) {
      script.setAttribute("data-state", "error");
      reject(err);
    };
    windowWithGoogleMap.initMap = function onload() {
      script.setAttribute("data-state", "ready");
      resolve(id);
    };
    document.head.appendChild(script);
  }).catch((err) => {
    console.error("injectScript error: ", err);
    throw err;
  });
}
function isGoogleFontStyle(element) {
  const href = element.href;
  if (href && (href.indexOf("https://fonts.googleapis.com/css?family=Roboto") === 0 || href.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text") === 0)) {
    return true;
  }
  if (element.tagName.toLowerCase() === "style" && // @ts-ignore
  element.styleSheet && // @ts-ignore
  element.styleSheet.cssText && // @ts-ignore
  element.styleSheet.cssText.replace("\r\n", "").indexOf(".gm-style") === 0) {
    element.styleSheet.cssText = "";
    return true;
  }
  if (element.tagName.toLowerCase() === "style" && element.innerHTML && element.innerHTML.replace("\r\n", "").indexOf(".gm-style") === 0) {
    element.innerHTML = "";
    return true;
  }
  if (element.tagName.toLowerCase() === "style" && // @ts-ignore
  !element.styleSheet && !element.innerHTML) {
    return true;
  }
  return false;
}
function preventGoogleFonts() {
  const head = document.getElementsByTagName("head")[0];
  const trueInsertBefore = head.insertBefore.bind(head);
  head.insertBefore = function insertBefore(newElement, referenceElement) {
    if (!isGoogleFontStyle(newElement)) {
      Reflect.apply(trueInsertBefore, head, [newElement, referenceElement]);
    }
  };
  const trueAppend = head.appendChild.bind(head);
  head.appendChild = function appendChild(textNode) {
    if (!isGoogleFontStyle(textNode)) {
      Reflect.apply(trueAppend, head, [textNode]);
    }
  };
}
function makeLoadScriptUrl({ googleMapsApiKey, googleMapsClientId, version = "weekly", language, region, libraries, channel, mapIds, authReferrerPolicy }) {
  const params = [];
  invariant_1(googleMapsApiKey && googleMapsClientId || !(googleMapsApiKey && googleMapsClientId), "You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.");
  if (googleMapsApiKey) {
    params.push(`key=${googleMapsApiKey}`);
  } else if (googleMapsClientId) {
    params.push(`client=${googleMapsClientId}`);
  }
  if (version) {
    params.push(`v=${version}`);
  }
  if (language) {
    params.push(`language=${language}`);
  }
  if (region) {
    params.push(`region=${region}`);
  }
  if (libraries && libraries.length) {
    params.push(`libraries=${libraries.sort().join(",")}`);
  }
  if (channel) {
    params.push(`channel=${channel}`);
  }
  if (mapIds && mapIds.length) {
    params.push(`map_ids=${mapIds.join(",")}`);
  }
  if (authReferrerPolicy) {
    params.push(`auth_referrer_policy=${authReferrerPolicy}`);
  }
  params.push("callback=initMap");
  return `https://maps.googleapis.com/maps/api/js?${params.join("&")}`;
}
var cleaningUp = false;
function DefaultLoadingElement() {
  return (0, import_jsx_runtime.jsx)("div", { children: `Loading...` });
}
var defaultLoadScriptProps = {
  id: "script-loader",
  version: "weekly"
};
var LoadScript = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.check = (0, import_react.createRef)();
    this.state = {
      loaded: false
    };
    this.cleanupCallback = () => {
      delete window.google.maps;
      this.injectScript();
    };
    this.isCleaningUp = () => __awaiter(this, void 0, void 0, function* () {
      function promiseCallback(resolve) {
        if (!cleaningUp) {
          resolve();
        } else {
          if (isBrowser) {
            const timer = window.setInterval(function interval() {
              if (!cleaningUp) {
                window.clearInterval(timer);
                resolve();
              }
            }, 1);
          }
        }
        return;
      }
      return new Promise(promiseCallback);
    });
    this.cleanup = () => {
      cleaningUp = true;
      const script = document.getElementById(this.props.id);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function filter(script2) {
        return typeof script2.src === "string" && script2.src.includes("maps.googleapis");
      }).forEach(function forEach2(script2) {
        if (script2.parentNode) {
          script2.parentNode.removeChild(script2);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function filter(link) {
        return link.href === "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans";
      }).forEach(function forEach2(link) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function filter(style) {
        return style.innerText !== void 0 && style.innerText.length > 0 && style.innerText.includes(".gm-");
      }).forEach(function forEach2(style) {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
    };
    this.injectScript = () => {
      if (this.props.preventGoogleFontsLoading) {
        preventGoogleFonts();
      }
      invariant_1(!!this.props.id, 'LoadScript requires "id" prop to be a string: %s', this.props.id);
      const injectScriptOptions = {
        id: this.props.id,
        nonce: this.props.nonce,
        url: makeLoadScriptUrl(this.props)
      };
      injectScript(injectScriptOptions).then(() => {
        if (this.props.onLoad) {
          this.props.onLoad();
        }
        this.setState(function setLoaded() {
          return {
            loaded: true
          };
        });
        return;
      }).catch((err) => {
        if (this.props.onError) {
          this.props.onError(err);
        }
        console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${this.props.googleMapsApiKey || "-"}) or Client ID (${this.props.googleMapsClientId || "-"}) to <LoadScript />
          Otherwise it is a Network issue.
        `);
      });
    };
  }
  componentDidMount() {
    if (isBrowser) {
      if (window.google && window.google.maps && !cleaningUp) {
        console.error("google api is already presented");
        return;
      }
      this.isCleaningUp().then(this.injectScript).catch(function error(err) {
        console.error("Error at injecting script after cleaning up: ", err);
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.libraries !== prevProps.libraries) {
      console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables");
    }
    if (isBrowser && prevProps.language !== this.props.language) {
      this.cleanup();
      this.setState(function setLoaded() {
        return {
          loaded: false
        };
      }, this.cleanupCallback);
    }
  }
  componentWillUnmount() {
    if (isBrowser) {
      this.cleanup();
      const timeoutCallback = () => {
        if (!this.check.current) {
          delete window.google;
          cleaningUp = false;
        }
      };
      window.setTimeout(timeoutCallback, 1);
      if (this.props.onUnmount) {
        this.props.onUnmount();
      }
    }
  }
  render() {
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("div", { ref: this.check }), this.state.loaded ? this.props.children : this.props.loadingElement || (0, import_jsx_runtime.jsx)(DefaultLoadingElement, {})] });
  }
};
LoadScript.defaultProps = defaultLoadScriptProps;
var previouslyLoadedUrl;
function useLoadScript({ id = defaultLoadScriptProps.id, version = defaultLoadScriptProps.version, nonce, googleMapsApiKey, googleMapsClientId, language, region, libraries, preventGoogleFontsLoading, channel, mapIds, authReferrerPolicy }) {
  const isMounted = (0, import_react.useRef)(false);
  const [isLoaded, setLoaded] = (0, import_react.useState)(false);
  const [loadError, setLoadError] = (0, import_react.useState)(void 0);
  (0, import_react.useEffect)(function trackMountedState() {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0, import_react.useEffect)(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  (0, import_react.useEffect)(function validateLoadedState() {
    if (isLoaded) {
      invariant_1(!!window.google, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.");
    }
  }, [isLoaded]);
  const url = makeLoadScriptUrl({
    version,
    googleMapsApiKey,
    googleMapsClientId,
    language,
    region,
    libraries,
    channel,
    mapIds,
    authReferrerPolicy
  });
  (0, import_react.useEffect)(function loadScriptAndModifyLoadedState() {
    if (!isBrowser) {
      return;
    }
    function setLoadedIfMounted() {
      if (isMounted.current) {
        setLoaded(true);
        previouslyLoadedUrl = url;
      }
    }
    if (window.google && window.google.maps && previouslyLoadedUrl === url) {
      setLoadedIfMounted();
      return;
    }
    injectScript({ id, url, nonce }).then(setLoadedIfMounted).catch(function handleInjectError(err) {
      if (isMounted.current) {
        setLoadError(err);
      }
      console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${googleMapsApiKey || "-"}) or Client ID (${googleMapsClientId || "-"})
        Otherwise it is a Network issue.
      `);
      console.error(err);
    });
  }, [id, url, nonce]);
  const prevLibraries = (0, import_react.useRef)();
  (0, import_react.useEffect)(function checkPerformance() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables");
    }
    prevLibraries.current = libraries;
  }, [libraries]);
  return { isLoaded, loadError, url };
}
var defaultLoadingElement = (0, import_jsx_runtime.jsx)(DefaultLoadingElement, {});
function LoadScriptNext(_a) {
  var { loadingElement, onLoad, onError, onUnmount, children } = _a, hookOptions = __rest$1(_a, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);
  const { isLoaded, loadError } = useLoadScript(hookOptions);
  (0, import_react.useEffect)(function handleOnLoad() {
    if (isLoaded && typeof onLoad === "function") {
      onLoad();
    }
  }, [isLoaded, onLoad]);
  (0, import_react.useEffect)(function handleOnError() {
    if (loadError && typeof onError === "function") {
      onError(loadError);
    }
  }, [loadError, onError]);
  (0, import_react.useEffect)(function handleOnUnmount() {
    return () => {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, [onUnmount]);
  return isLoaded ? children : loadingElement || defaultLoadingElement;
}
var LoadScriptNext$1 = (0, import_react.memo)(LoadScriptNext);
var fastDeepEqual$1 = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var DEFAULT_ID = "__googleMapsScriptId";
var LoaderStatus;
(function(LoaderStatus2) {
  LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
  LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
var Loader = class {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version }) {
    this.CALLBACK = "__googleMapsCallback";
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.apiKey = apiKey;
    this.authReferrerPolicy = authReferrerPolicy;
    this.channel = channel;
    this.client = client;
    this.id = id || DEFAULT_ID;
    this.language = language;
    this.libraries = libraries;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.region = region;
    this.retries = retries;
    this.url = url;
    this.version = version;
    if (Loader.instance) {
      if (!fastDeepEqual$1(this.options, Loader.instance.options)) {
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
      }
      return Loader.instance;
    }
    Loader.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    if (this.errors.length) {
      return LoaderStatus.FAILURE;
    }
    if (this.done) {
      return LoaderStatus.SUCCESS;
    }
    if (this.loading) {
      return LoaderStatus.LOADING;
    }
    return LoaderStatus.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   */
  createUrl() {
    let url = this.url;
    url += `?callback=${this.CALLBACK}`;
    if (this.apiKey) {
      url += `&key=${this.apiKey}`;
    }
    if (this.channel) {
      url += `&channel=${this.channel}`;
    }
    if (this.client) {
      url += `&client=${this.client}`;
    }
    if (this.libraries.length > 0) {
      url += `&libraries=${this.libraries.join(",")}`;
    }
    if (this.language) {
      url += `&language=${this.language}`;
    }
    if (this.region) {
      url += `&region=${this.region}`;
    }
    if (this.version) {
      url += `&v=${this.version}`;
    }
    if (this.mapIds) {
      url += `&map_ids=${this.mapIds.join(",")}`;
    }
    if (this.authReferrerPolicy) {
      url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
    }
    return url;
  }
  deleteScript() {
    const script = document.getElementById(this.id);
    if (script) {
      script.remove();
    }
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   */
  loadPromise() {
    return new Promise((resolve, reject) => {
      this.loadCallback((err) => {
        if (!err) {
          resolve(window.google);
        } else {
          reject(err.error);
        }
      });
    });
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   */
  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const url = this.createUrl();
    const script = document.createElement("script");
    script.id = this.id;
    script.type = "text/javascript";
    script.src = url;
    script.onerror = this.loadErrorCallback.bind(this);
    script.defer = true;
    script.async = true;
    if (this.nonce) {
      script.nonce = this.nonce;
    }
    document.head.appendChild(script);
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript();
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }
  loadErrorCallback(e) {
    this.errors.push(e);
    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * Math.pow(2, this.errors.length);
      console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.onerrorEvent = e;
      this.callback();
    }
  }
  setCallback() {
    window.__googleMapsCallback = this.callback.bind(this);
  }
  callback() {
    this.done = true;
    this.loading = false;
    this.callbacks.forEach((cb) => {
      cb(this.onerrorEvent);
    });
    this.callbacks = [];
  }
  execute() {
    this.resetIfRetryingFailed();
    if (this.done) {
      this.callback();
    } else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.");
        this.callback();
        return;
      }
      if (this.loading)
        ;
      else {
        this.loading = true;
        this.setCallback();
        this.setScript();
      }
    }
  }
};
function useJsApiLoader({
  id = defaultLoadScriptProps.id,
  version = defaultLoadScriptProps.version,
  nonce,
  googleMapsApiKey,
  // googleMapsClientId,
  language,
  region,
  libraries,
  preventGoogleFontsLoading,
  // channel,
  mapIds,
  authReferrerPolicy
}) {
  const isMounted = (0, import_react.useRef)(false);
  const [isLoaded, setLoaded] = (0, import_react.useState)(false);
  const [loadError, setLoadError] = (0, import_react.useState)(void 0);
  (0, import_react.useEffect)(function trackMountedState() {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const loader = (0, import_react.useMemo)(function memo2() {
    return new Loader({
      id,
      apiKey: googleMapsApiKey,
      version,
      libraries,
      language,
      region,
      mapIds,
      nonce,
      authReferrerPolicy
    });
  }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce, authReferrerPolicy]);
  (0, import_react.useEffect)(function effect() {
    if (isLoaded) {
      return;
    } else {
      loader.load().then(function then() {
        if (isMounted.current)
          setLoaded(true);
      }).catch(function onrejected(error) {
        setLoadError(error);
      });
    }
  }, []);
  (0, import_react.useEffect)(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  const prevLibraries = (0, import_react.useRef)();
  (0, import_react.useEffect)(function effect() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables");
    }
    prevLibraries.current = libraries;
  }, [libraries]);
  return { isLoaded, loadError };
}
var eventMap$h = {};
var updaterMap$h = {
  options(instance, options) {
    instance.setOptions(options);
  }
};
function TrafficLayerFunctional({ options, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    const trafficLayer = new google.maps.TrafficLayer(Object.assign(Object.assign({}, options || {}), { map }));
    setInstance(trafficLayer);
    if (onLoad) {
      onLoad(trafficLayer);
    }
    return () => {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var TrafficLayerF = (0, import_react.memo)(TrafficLayerFunctional);
var TrafficLayer = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      trafficLayer: null
    };
    this.setTrafficLayerCallback = () => {
      if (this.state.trafficLayer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.trafficLayer);
      }
    };
    this.registeredEvents = [];
  }
  componentDidMount() {
    const trafficLayer = new google.maps.TrafficLayer(Object.assign(Object.assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$h,
      eventMap: eventMap$h,
      prevProps: {},
      nextProps: this.props,
      instance: trafficLayer
    });
    this.setState(function setTrafficLayer() {
      return {
        trafficLayer
      };
    }, this.setTrafficLayerCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.trafficLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$h,
        eventMap: eventMap$h,
        prevProps,
        nextProps: this.props,
        instance: this.state.trafficLayer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.trafficLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.trafficLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.trafficLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
};
TrafficLayer.contextType = MapContext;
function BicyclingLayerFunctional({ onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    const bicyclingLayer = new google.maps.BicyclingLayer();
    setInstance(bicyclingLayer);
    bicyclingLayer.setMap(map);
    if (onLoad) {
      onLoad(bicyclingLayer);
    }
    return () => {
      if (bicyclingLayer !== null) {
        if (onUnmount) {
          onUnmount(bicyclingLayer);
        }
        bicyclingLayer.setMap(null);
      }
    };
  }, []);
  return null;
}
var BicyclingLayerF = (0, import_react.memo)(BicyclingLayerFunctional);
var BicyclingLayer = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      bicyclingLayer: null
    };
    this.setBicyclingLayerCallback = () => {
      if (this.state.bicyclingLayer !== null) {
        this.state.bicyclingLayer.setMap(this.context);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.bicyclingLayer);
        }
      }
    };
  }
  componentDidMount() {
    const bicyclingLayer = new google.maps.BicyclingLayer();
    this.setState(() => {
      return {
        bicyclingLayer
      };
    }, this.setBicyclingLayerCallback);
  }
  componentWillUnmount() {
    if (this.state.bicyclingLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.bicyclingLayer);
      }
      this.state.bicyclingLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
};
BicyclingLayer.contextType = MapContext;
function TransitLayerFunctional({ onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    const transitLayer = new google.maps.TransitLayer();
    setInstance(transitLayer);
    transitLayer.setMap(map);
    if (onLoad) {
      onLoad(transitLayer);
    }
    return () => {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        this.state.transitLayer.setMap(null);
      }
    };
  }, []);
  return null;
}
var TransitLayerF = (0, import_react.memo)(TransitLayerFunctional);
var TransitLayer = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      transitLayer: null
    };
    this.setTransitLayerCallback = () => {
      if (this.state.transitLayer !== null) {
        this.state.transitLayer.setMap(this.context);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.transitLayer);
        }
      }
    };
  }
  componentDidMount() {
    const transitLayer = new google.maps.TransitLayer();
    this.setState(function setTransitLayer() {
      return {
        transitLayer
      };
    }, this.setTransitLayerCallback);
  }
  componentWillUnmount() {
    if (this.state.transitLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.transitLayer);
      }
      this.state.transitLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
};
TransitLayer.contextType = MapContext;
var eventMap$g = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
};
var updaterMap$g = {
  drawingMode(instance, drawingMode) {
    instance.setDrawingMode(drawingMode);
  },
  options(instance, options) {
    instance.setOptions(options);
  }
};
function DrawingManagerFunctional({ options, drawingMode, onCircleComplete, onMarkerComplete, onOverlayComplete, onPolygonComplete, onPolylineComplete, onRectangleComplete, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [circlecompleteListener, setCircleCompleteListener] = (0, import_react.useState)(null);
  const [markercompleteListener, setMarkerCompleteListener] = (0, import_react.useState)(null);
  const [overlaycompleteListener, setOverlayCompleteListener] = (0, import_react.useState)(null);
  const [polygoncompleteListener, setPolygonCompleteListener] = (0, import_react.useState)(null);
  const [polylinecompleteListener, setPolylineCompleteListener] = (0, import_react.useState)(null);
  const [rectanglecompleteListener, setRectangleCompleteListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (drawingMode && instance !== null) {
      instance.setDrawingMode(drawingMode);
    }
  }, [instance, drawingMode]);
  (0, import_react.useEffect)(() => {
    if (instance && onCircleComplete) {
      if (circlecompleteListener !== null) {
        google.maps.event.removeListener(circlecompleteListener);
      }
      setCircleCompleteListener(google.maps.event.addListener(instance, "circlecomplete", onCircleComplete));
    }
  }, [instance, onCircleComplete]);
  (0, import_react.useEffect)(() => {
    if (instance && onMarkerComplete) {
      if (markercompleteListener !== null) {
        google.maps.event.removeListener(markercompleteListener);
      }
      setMarkerCompleteListener(google.maps.event.addListener(instance, "markercomplete", onMarkerComplete));
    }
  }, [instance, onMarkerComplete]);
  (0, import_react.useEffect)(() => {
    if (instance && onOverlayComplete) {
      if (overlaycompleteListener !== null) {
        google.maps.event.removeListener(overlaycompleteListener);
      }
      setOverlayCompleteListener(google.maps.event.addListener(instance, "overlaycomplete", onOverlayComplete));
    }
  }, [instance, onOverlayComplete]);
  (0, import_react.useEffect)(() => {
    if (instance && onPolygonComplete) {
      if (polygoncompleteListener !== null) {
        google.maps.event.removeListener(polygoncompleteListener);
      }
      setPolygonCompleteListener(google.maps.event.addListener(instance, "polygoncomplete", onPolygonComplete));
    }
  }, [instance, onPolygonComplete]);
  (0, import_react.useEffect)(() => {
    if (instance && onPolylineComplete) {
      if (polylinecompleteListener !== null) {
        google.maps.event.removeListener(polylinecompleteListener);
      }
      setPolylineCompleteListener(google.maps.event.addListener(instance, "polylinecomplete", onPolylineComplete));
    }
  }, [instance, onPolylineComplete]);
  (0, import_react.useEffect)(() => {
    if (instance && onRectangleComplete) {
      if (rectanglecompleteListener !== null) {
        google.maps.event.removeListener(rectanglecompleteListener);
      }
      setRectangleCompleteListener(google.maps.event.addListener(instance, "rectanglecomplete", onRectangleComplete));
    }
  }, [instance, onRectangleComplete]);
  (0, import_react.useEffect)(() => {
    invariant_1(!!google.maps.drawing, `Did you include prop libraries={['drawing']} in the URL? %s`, google.maps.drawing);
    const drawingManager = new google.maps.drawing.DrawingManager(Object.assign(Object.assign({}, options || {}), { map }));
    if (drawingMode) {
      drawingManager.setDrawingMode(drawingMode);
    }
    if (onCircleComplete) {
      setCircleCompleteListener(google.maps.event.addListener(drawingManager, "circlecomplete", onCircleComplete));
    }
    if (onMarkerComplete) {
      setMarkerCompleteListener(google.maps.event.addListener(drawingManager, "markercomplete", onMarkerComplete));
    }
    if (onOverlayComplete) {
      setOverlayCompleteListener(google.maps.event.addListener(drawingManager, "overlaycomplete", onOverlayComplete));
    }
    if (onPolygonComplete) {
      setPolygonCompleteListener(google.maps.event.addListener(drawingManager, "polygoncomplete", onPolygonComplete));
    }
    if (onPolylineComplete) {
      setPolylineCompleteListener(google.maps.event.addListener(drawingManager, "polylinecomplete", onPolylineComplete));
    }
    if (onRectangleComplete) {
      setRectangleCompleteListener(google.maps.event.addListener(drawingManager, "rectanglecomplete", onRectangleComplete));
    }
    setInstance(drawingManager);
    if (onLoad) {
      onLoad(drawingManager);
    }
    return () => {
      if (instance !== null) {
        if (circlecompleteListener) {
          google.maps.event.removeListener(circlecompleteListener);
        }
        if (markercompleteListener) {
          google.maps.event.removeListener(markercompleteListener);
        }
        if (overlaycompleteListener) {
          google.maps.event.removeListener(overlaycompleteListener);
        }
        if (polygoncompleteListener) {
          google.maps.event.removeListener(polygoncompleteListener);
        }
        if (polylinecompleteListener) {
          google.maps.event.removeListener(polylinecompleteListener);
        }
        if (rectanglecompleteListener) {
          google.maps.event.removeListener(rectanglecompleteListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var DrawingManagerF = (0, import_react.memo)(DrawingManagerFunctional);
var DrawingManager = class extends import_react.PureComponent {
  constructor(props) {
    super(props);
    this.registeredEvents = [];
    this.state = {
      drawingManager: null
    };
    this.setDrawingManagerCallback = () => {
      if (this.state.drawingManager !== null && this.props.onLoad) {
        this.props.onLoad(this.state.drawingManager);
      }
    };
    invariant_1(!!google.maps.drawing, `Did you include prop libraries={['drawing']} in the URL? %s`, google.maps.drawing);
  }
  componentDidMount() {
    const drawingManager = new google.maps.drawing.DrawingManager(Object.assign(Object.assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$g,
      eventMap: eventMap$g,
      prevProps: {},
      nextProps: this.props,
      instance: drawingManager
    });
    this.setState(function setDrawingManager() {
      return {
        drawingManager
      };
    }, this.setDrawingManagerCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.drawingManager !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$g,
        eventMap: eventMap$g,
        prevProps,
        nextProps: this.props,
        instance: this.state.drawingManager
      });
    }
  }
  componentWillUnmount() {
    if (this.state.drawingManager !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.drawingManager);
      }
      unregisterEvents(this.registeredEvents);
      this.state.drawingManager.setMap(null);
    }
  }
  render() {
    return null;
  }
};
DrawingManager.contextType = MapContext;
var eventMap$f = {
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDraggableChanged: "draggable_changed",
  onDragStart: "dragstart",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onPositionChanged: "position_changed",
  onRightClick: "rightclick",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$f = {
  animation(instance, animation) {
    instance.setAnimation(animation);
  },
  clickable(instance, clickable) {
    instance.setClickable(clickable);
  },
  cursor(instance, cursor) {
    instance.setCursor(cursor);
  },
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  icon(instance, icon) {
    instance.setIcon(icon);
  },
  label(instance, label) {
    instance.setLabel(label);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  opacity(instance, opacity) {
    instance.setOpacity(opacity);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  position(instance, position) {
    instance.setPosition(position);
  },
  shape(instance, shape) {
    instance.setShape(shape);
  },
  title(instance, title) {
    instance.setTitle(title);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
var defaultOptions$5 = {};
function MarkerFunctional({ position, options, clusterer, noClustererRedraw, children, draggable, visible, animation, clickable, cursor, icon, label, opacity, shape, title, zIndex, onClick, onDblClick, onDrag, onDragEnd, onDragStart, onMouseOut, onMouseOver, onMouseUp, onMouseDown, onRightClick, onClickableChanged, onCursorChanged, onAnimationChanged, onDraggableChanged, onFlatChanged, onIconChanged, onPositionChanged, onShapeChanged, onTitleChanged, onVisibleChanged, onZindexChanged, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [dblclickListener, setDblclickListener] = (0, import_react.useState)(null);
  const [dragendListener, setDragendListener] = (0, import_react.useState)(null);
  const [dragstartListener, setDragstartListener] = (0, import_react.useState)(null);
  const [mousedownListener, setMousedownListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  const [mouseupListener, setMouseupListener] = (0, import_react.useState)(null);
  const [rightclickListener, setRightclickListener] = (0, import_react.useState)(null);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [dragListener, setDragListener] = (0, import_react.useState)(null);
  const [clickableChangedListener, setClickableChangedListener] = (0, import_react.useState)(null);
  const [cursorChangedListener, setCursorChangedListener] = (0, import_react.useState)(null);
  const [animationChangedListener, setAnimationChangedListener] = (0, import_react.useState)(null);
  const [draggableChangedListener, setDraggableChangedListener] = (0, import_react.useState)(null);
  const [flatChangedListener, setFlatChangedListener] = (0, import_react.useState)(null);
  const [iconChangedListener, setIconChangedListener] = (0, import_react.useState)(null);
  const [positionChangedListener, setPositionChangedListener] = (0, import_react.useState)(null);
  const [shapeChangedListener, setShapeChangedListener] = (0, import_react.useState)(null);
  const [titleChangedListener, setTitleChangedListener] = (0, import_react.useState)(null);
  const [visibleChangedListener, setVisibleChangedListener] = (0, import_react.useState)(null);
  const [zIndexChangedListener, setZindexChangedListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0, import_react.useEffect)(() => {
    if (position && instance !== null) {
      instance.setPosition(position);
    }
  }, [instance, position]);
  (0, import_react.useEffect)(() => {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0, import_react.useEffect)(() => {
    if (animation && instance !== null) {
      instance.setAnimation(animation);
    }
  }, [instance, animation]);
  (0, import_react.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  (0, import_react.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  (0, import_react.useEffect)(() => {
    if (instance && onClickableChanged) {
      if (clickableChangedListener !== null) {
        google.maps.event.removeListener(clickableChangedListener);
      }
      setClickableChangedListener(google.maps.event.addListener(instance, "clickable_changed", onClickableChanged));
    }
  }, [onClickableChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onCursorChanged) {
      if (cursorChangedListener !== null) {
        google.maps.event.removeListener(cursorChangedListener);
      }
      setCursorChangedListener(google.maps.event.addListener(instance, "cursor_changed", onCursorChanged));
    }
  }, [onCursorChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onAnimationChanged) {
      if (animationChangedListener !== null) {
        google.maps.event.removeListener(animationChangedListener);
      }
      setAnimationChangedListener(google.maps.event.addListener(instance, "animation_changed", onAnimationChanged));
    }
  }, [onAnimationChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onDraggableChanged) {
      if (draggableChangedListener !== null) {
        google.maps.event.removeListener(draggableChangedListener);
      }
      setDraggableChangedListener(google.maps.event.addListener(instance, "draggable_changed", onDraggableChanged));
    }
  }, [onDraggableChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onFlatChanged) {
      if (flatChangedListener !== null) {
        google.maps.event.removeListener(flatChangedListener);
      }
      setFlatChangedListener(google.maps.event.addListener(instance, "flat_changed", onFlatChanged));
    }
  }, [onFlatChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onIconChanged) {
      if (iconChangedListener !== null) {
        google.maps.event.removeListener(iconChangedListener);
      }
      setIconChangedListener(google.maps.event.addListener(instance, "icon_changed", onIconChanged));
    }
  }, [onIconChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onPositionChanged) {
      if (positionChangedListener !== null) {
        google.maps.event.removeListener(positionChangedListener);
      }
      setPositionChangedListener(google.maps.event.addListener(instance, "position_changed", onPositionChanged));
    }
  }, [onPositionChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onShapeChanged) {
      if (shapeChangedListener !== null) {
        google.maps.event.removeListener(shapeChangedListener);
      }
      setShapeChangedListener(google.maps.event.addListener(instance, "shape_changed", onShapeChanged));
    }
  }, [onShapeChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onTitleChanged) {
      if (titleChangedListener !== null) {
        google.maps.event.removeListener(titleChangedListener);
      }
      setTitleChangedListener(google.maps.event.addListener(instance, "title_changed", onTitleChanged));
    }
  }, [onTitleChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onVisibleChanged) {
      if (visibleChangedListener !== null) {
        google.maps.event.removeListener(visibleChangedListener);
      }
      setVisibleChangedListener(google.maps.event.addListener(instance, "visible_changed", onVisibleChanged));
    }
  }, [onVisibleChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onZindexChanged) {
      if (zIndexChangedListener !== null) {
        google.maps.event.removeListener(zIndexChangedListener);
      }
      setZindexChangedListener(google.maps.event.addListener(instance, "zindex_changed", onZindexChanged));
    }
  }, [onZindexChanged]);
  (0, import_react.useEffect)(() => {
    const markerOptions = Object.assign(Object.assign(Object.assign({}, options || defaultOptions$5), clusterer ? defaultOptions$5 : { map }), { position });
    const marker = new google.maps.Marker(markerOptions);
    if (clusterer) {
      clusterer.addMarker(marker, !!noClustererRedraw);
    } else {
      marker.setMap(map);
    }
    if (position) {
      marker.setPosition(position);
    }
    if (typeof visible !== "undefined") {
      marker.setVisible(visible);
    }
    if (typeof draggable !== "undefined") {
      marker.setDraggable(draggable);
    }
    if (typeof clickable !== "undefined") {
      marker.setClickable(clickable);
    }
    if (typeof cursor === "string") {
      marker.setCursor(cursor);
    }
    if (icon) {
      marker.setIcon(icon);
    }
    if (typeof label !== "undefined") {
      marker.setLabel(label);
    }
    if (typeof opacity !== "undefined") {
      marker.setOpacity(opacity);
    }
    if (shape) {
      marker.setShape(shape);
    }
    if (typeof title === "string") {
      marker.setTitle(title);
    }
    if (typeof zIndex === "number") {
      marker.setZIndex(zIndex);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(marker, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(marker, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(marker, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(marker, "mousedown", onMouseDown));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(marker, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(marker, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(marker, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(marker, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(marker, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(marker, "drag", onDrag));
    }
    if (onClickableChanged) {
      setClickableChangedListener(google.maps.event.addListener(marker, "clickable_changed", onClickableChanged));
    }
    if (onCursorChanged) {
      setCursorChangedListener(google.maps.event.addListener(marker, "cursor_changed", onCursorChanged));
    }
    if (onAnimationChanged) {
      setAnimationChangedListener(google.maps.event.addListener(marker, "animation_changed", onAnimationChanged));
    }
    if (onDraggableChanged) {
      setDraggableChangedListener(google.maps.event.addListener(marker, "draggable_changed", onDraggableChanged));
    }
    if (onFlatChanged) {
      setFlatChangedListener(google.maps.event.addListener(marker, "flat_changed", onFlatChanged));
    }
    if (onIconChanged) {
      setIconChangedListener(google.maps.event.addListener(marker, "icon_changed", onIconChanged));
    }
    if (onPositionChanged) {
      setPositionChangedListener(google.maps.event.addListener(marker, "position_changed", onPositionChanged));
    }
    if (onShapeChanged) {
      setShapeChangedListener(google.maps.event.addListener(marker, "shape_changed", onShapeChanged));
    }
    if (onTitleChanged) {
      setTitleChangedListener(google.maps.event.addListener(marker, "title_changed", onTitleChanged));
    }
    if (onVisibleChanged) {
      setVisibleChangedListener(google.maps.event.addListener(marker, "visible_changed", onVisibleChanged));
    }
    if (onZindexChanged) {
      setZindexChangedListener(google.maps.event.addListener(marker, "zindex_changed", onZindexChanged));
    }
    setInstance(marker);
    if (onLoad) {
      onLoad(marker);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (clickableChangedListener !== null) {
        google.maps.event.removeListener(clickableChangedListener);
      }
      if (cursorChangedListener !== null) {
        google.maps.event.removeListener(cursorChangedListener);
      }
      if (animationChangedListener !== null) {
        google.maps.event.removeListener(animationChangedListener);
      }
      if (draggableChangedListener !== null) {
        google.maps.event.removeListener(draggableChangedListener);
      }
      if (flatChangedListener !== null) {
        google.maps.event.removeListener(flatChangedListener);
      }
      if (iconChangedListener !== null) {
        google.maps.event.removeListener(iconChangedListener);
      }
      if (positionChangedListener !== null) {
        google.maps.event.removeListener(positionChangedListener);
      }
      if (titleChangedListener !== null) {
        google.maps.event.removeListener(titleChangedListener);
      }
      if (visibleChangedListener !== null) {
        google.maps.event.removeListener(visibleChangedListener);
      }
      if (zIndexChangedListener !== null) {
        google.maps.event.removeListener(zIndexChangedListener);
      }
      if (onUnmount) {
        onUnmount(marker);
      }
      if (clusterer) {
        clusterer.removeMarker(marker, !!noClustererRedraw);
      } else if (marker) {
        marker.setMap(null);
      }
    };
  }, []);
  const chx = (0, import_react.useMemo)(() => {
    return children ? import_react.Children.map(children, (child) => {
      if (!(0, import_react.isValidElement)(child)) {
        return child;
      }
      const elementChild = child;
      return (0, import_react.cloneElement)(elementChild, { anchor: instance });
    }) : null;
  }, [children, instance]);
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: chx }) || null;
}
var MarkerF = (0, import_react.memo)(MarkerFunctional);
var Marker = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
  }
  componentDidMount() {
    const markerOptions = Object.assign(Object.assign(Object.assign({}, this.props.options || defaultOptions$5), this.props.clusterer ? defaultOptions$5 : { map: this.context }), { position: this.props.position });
    this.marker = new google.maps.Marker(markerOptions);
    if (this.props.clusterer) {
      this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw);
    } else {
      this.marker.setMap(this.context);
    }
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$f,
      eventMap: eventMap$f,
      prevProps: {},
      nextProps: this.props,
      instance: this.marker
    });
    if (this.props.onLoad) {
      this.props.onLoad(this.marker);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.marker) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$f,
        eventMap: eventMap$f,
        prevProps,
        nextProps: this.props,
        instance: this.marker
      });
    }
  }
  componentWillUnmount() {
    if (this.marker) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.marker);
      }
      unregisterEvents(this.registeredEvents);
      if (this.props.clusterer) {
        this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw);
      } else {
        this.marker && this.marker.setMap(null);
      }
    }
  }
  render() {
    let children = null;
    if (this.props.children) {
      children = import_react.Children.map(this.props.children, (child) => {
        if (!(0, import_react.isValidElement)(child)) {
          return child;
        }
        const elementChild = child;
        return (0, import_react.cloneElement)(elementChild, { anchor: this.marker });
      });
    }
    return children || null;
  }
};
Marker.contextType = MapContext;
var ClusterIcon = (
  /** @class */
  function() {
    function ClusterIcon2(cluster, styles) {
      cluster.getClusterer().extend(ClusterIcon2, google.maps.OverlayView);
      this.cluster = cluster;
      this.clusterClassName = this.cluster.getClusterer().getClusterClass();
      this.className = this.clusterClassName;
      this.styles = styles;
      this.center = void 0;
      this.div = null;
      this.sums = null;
      this.visible = false;
      this.boundsChangedListener = null;
      this.url = "";
      this.height = 0;
      this.width = 0;
      this.anchorText = [0, 0];
      this.anchorIcon = [0, 0];
      this.textColor = "black";
      this.textSize = 11;
      this.textDecoration = "none";
      this.fontWeight = "bold";
      this.fontStyle = "normal";
      this.fontFamily = "Arial,sans-serif";
      this.backgroundPosition = "0 0";
      this.cMouseDownInCluster = null;
      this.cDraggingMapByCluster = null;
      this.timeOut = null;
      this.setMap(cluster.getMap());
      this.onBoundsChanged = this.onBoundsChanged.bind(this);
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.draw = this.draw.bind(this);
      this.hide = this.hide.bind(this);
      this.show = this.show.bind(this);
      this.useStyle = this.useStyle.bind(this);
      this.setCenter = this.setCenter.bind(this);
      this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
    }
    ClusterIcon2.prototype.onBoundsChanged = function() {
      this.cDraggingMapByCluster = this.cMouseDownInCluster;
    };
    ClusterIcon2.prototype.onMouseDown = function() {
      this.cMouseDownInCluster = true;
      this.cDraggingMapByCluster = false;
    };
    ClusterIcon2.prototype.onClick = function(event) {
      this.cMouseDownInCluster = false;
      if (!this.cDraggingMapByCluster) {
        var markerClusterer_1 = this.cluster.getClusterer();
        google.maps.event.trigger(markerClusterer_1, "click", this.cluster);
        google.maps.event.trigger(markerClusterer_1, "clusterclick", this.cluster);
        if (markerClusterer_1.getZoomOnClick()) {
          var maxZoom_1 = markerClusterer_1.getMaxZoom();
          var bounds_1 = this.cluster.getBounds();
          var map = markerClusterer_1.getMap();
          if (map !== null && "fitBounds" in map) {
            map.fitBounds(bounds_1);
          }
          this.timeOut = window.setTimeout(function() {
            var map2 = markerClusterer_1.getMap();
            if (map2 !== null) {
              if ("fitBounds" in map2) {
                map2.fitBounds(bounds_1);
              }
              var zoom = map2.getZoom() || 0;
              if (maxZoom_1 !== null && zoom > maxZoom_1) {
                map2.setZoom(maxZoom_1 + 1);
              }
            }
          }, 100);
        }
        event.cancelBubble = true;
        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    };
    ClusterIcon2.prototype.onMouseOver = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseover", this.cluster);
    };
    ClusterIcon2.prototype.onMouseOut = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseout", this.cluster);
    };
    ClusterIcon2.prototype.onAdd = function() {
      var _a;
      this.div = document.createElement("div");
      this.div.className = this.className;
      if (this.visible) {
        this.show();
      }
      (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a.overlayMouseTarget.appendChild(this.div);
      var map = this.getMap();
      if (map !== null) {
        this.boundsChangedListener = google.maps.event.addListener(map, "bounds_changed", this.onBoundsChanged);
        this.div.addEventListener("mousedown", this.onMouseDown);
        this.div.addEventListener("click", this.onClick);
        this.div.addEventListener("mouseover", this.onMouseOver);
        this.div.addEventListener("mouseout", this.onMouseOut);
      }
    };
    ClusterIcon2.prototype.onRemove = function() {
      if (this.div && this.div.parentNode) {
        this.hide();
        if (this.boundsChangedListener !== null) {
          google.maps.event.removeListener(this.boundsChangedListener);
        }
        this.div.removeEventListener("mousedown", this.onMouseDown);
        this.div.removeEventListener("click", this.onClick);
        this.div.removeEventListener("mouseover", this.onMouseOver);
        this.div.removeEventListener("mouseout", this.onMouseOut);
        this.div.parentNode.removeChild(this.div);
        if (this.timeOut !== null) {
          window.clearTimeout(this.timeOut);
          this.timeOut = null;
        }
        this.div = null;
      }
    };
    ClusterIcon2.prototype.draw = function() {
      if (this.visible && this.div !== null && this.center) {
        var pos = this.getPosFromLatLng(this.center);
        this.div.style.top = pos !== null ? "".concat(pos.y, "px") : "0";
        this.div.style.left = pos !== null ? "".concat(pos.x, "px") : "0";
      }
    };
    ClusterIcon2.prototype.hide = function() {
      if (this.div) {
        this.div.style.display = "none";
      }
      this.visible = false;
    };
    ClusterIcon2.prototype.show = function() {
      var _a, _b, _c, _d;
      if (this.div && this.center) {
        var divTitle = this.sums === null || typeof this.sums.title === "undefined" || this.sums.title === "" ? this.cluster.getClusterer().getTitle() : this.sums.title;
        var bp = this.backgroundPosition.split(" ");
        var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ""), 10);
        var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ""), 10);
        var pos = this.getPosFromLatLng(this.center);
        this.div.className = this.className;
        this.div.setAttribute("style", "cursor: pointer; position: absolute; top: ".concat(pos !== null ? "".concat(pos.y, "px") : "0", "; left: ").concat(pos !== null ? "".concat(pos.x, "px") : "0", "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
        var img = document.createElement("img");
        img.alt = divTitle;
        img.src = this.url;
        img.width = this.width;
        img.height = this.height;
        img.setAttribute("style", "position: absolute; top: ".concat(spriteV, "px; left: ").concat(spriteH, "px"));
        if (!this.cluster.getClusterer().enableRetinaIcons) {
          img.style.clip = "rect(-".concat(spriteV, "px, -").concat(spriteH + this.width, "px, -").concat(spriteV + this.height, ", -").concat(spriteH, ")");
        }
        var textElm = document.createElement("div");
        textElm.setAttribute("style", "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px"));
        if ((_a = this.sums) === null || _a === void 0 ? void 0 : _a.text)
          textElm.innerText = "".concat((_b = this.sums) === null || _b === void 0 ? void 0 : _b.text);
        if ((_c = this.sums) === null || _c === void 0 ? void 0 : _c.html)
          textElm.innerHTML = "".concat((_d = this.sums) === null || _d === void 0 ? void 0 : _d.html);
        this.div.innerHTML = "";
        this.div.appendChild(img);
        this.div.appendChild(textElm);
        this.div.title = divTitle;
        this.div.style.display = "";
      }
      this.visible = true;
    };
    ClusterIcon2.prototype.useStyle = function(sums) {
      this.sums = sums;
      var styles = this.cluster.getClusterer().getStyles();
      var style = styles[Math.min(styles.length - 1, Math.max(0, sums.index - 1))];
      this.url = style.url;
      this.height = style.height;
      this.width = style.width;
      if (style.className)
        this.className = "".concat(this.clusterClassName, " ").concat(style.className);
      this.anchorText = style.anchorText || [0, 0];
      this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
      this.textColor = style.textColor || "black";
      this.textSize = style.textSize || 11;
      this.textDecoration = style.textDecoration || "none";
      this.fontWeight = style.fontWeight || "bold";
      this.fontStyle = style.fontStyle || "normal";
      this.fontFamily = style.fontFamily || "Arial,sans-serif";
      this.backgroundPosition = style.backgroundPosition || "0 0";
    };
    ClusterIcon2.prototype.setCenter = function(center) {
      this.center = center;
    };
    ClusterIcon2.prototype.getPosFromLatLng = function(latlng) {
      var pos = this.getProjection().fromLatLngToDivPixel(latlng);
      if (pos !== null) {
        pos.x -= this.anchorIcon[1];
        pos.y -= this.anchorIcon[0];
      }
      return pos;
    };
    return ClusterIcon2;
  }()
);
var Cluster$1 = (
  /** @class */
  function() {
    function Cluster2(markerClusterer) {
      this.markerClusterer = markerClusterer;
      this.map = this.markerClusterer.getMap();
      this.gridSize = this.markerClusterer.getGridSize();
      this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
      this.averageCenter = this.markerClusterer.getAverageCenter();
      this.markers = [];
      this.center = void 0;
      this.bounds = null;
      this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
      this.getSize = this.getSize.bind(this);
      this.getMarkers = this.getMarkers.bind(this);
      this.getCenter = this.getCenter.bind(this);
      this.getMap = this.getMap.bind(this);
      this.getClusterer = this.getClusterer.bind(this);
      this.getBounds = this.getBounds.bind(this);
      this.remove = this.remove.bind(this);
      this.addMarker = this.addMarker.bind(this);
      this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this);
      this.calculateBounds = this.calculateBounds.bind(this);
      this.updateIcon = this.updateIcon.bind(this);
      this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
    }
    Cluster2.prototype.getSize = function() {
      return this.markers.length;
    };
    Cluster2.prototype.getMarkers = function() {
      return this.markers;
    };
    Cluster2.prototype.getCenter = function() {
      return this.center;
    };
    Cluster2.prototype.getMap = function() {
      return this.map;
    };
    Cluster2.prototype.getClusterer = function() {
      return this.markerClusterer;
    };
    Cluster2.prototype.getBounds = function() {
      var bounds = new google.maps.LatLngBounds(this.center, this.center);
      var markers = this.getMarkers();
      for (var i = 0; i < markers.length; i++) {
        var position = markers[i].getPosition();
        if (position) {
          bounds.extend(position);
        }
      }
      return bounds;
    };
    Cluster2.prototype.remove = function() {
      this.clusterIcon.setMap(null);
      this.markers = [];
      delete this.markers;
    };
    Cluster2.prototype.addMarker = function(marker) {
      var _a;
      if (this.isMarkerAlreadyAdded(marker)) {
        return false;
      }
      if (!this.center) {
        var position = marker.getPosition();
        if (position) {
          this.center = position;
          this.calculateBounds();
        }
      } else {
        if (this.averageCenter) {
          var position = marker.getPosition();
          if (position) {
            var length_1 = this.markers.length + 1;
            this.center = new google.maps.LatLng((this.center.lat() * (length_1 - 1) + position.lat()) / length_1, (this.center.lng() * (length_1 - 1) + position.lng()) / length_1);
            this.calculateBounds();
          }
        }
      }
      marker.isAdded = true;
      this.markers.push(marker);
      var mCount = this.markers.length;
      var maxZoom = this.markerClusterer.getMaxZoom();
      var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
      if (maxZoom !== null && typeof zoom !== "undefined" && zoom > maxZoom) {
        if (marker.getMap() !== this.map) {
          marker.setMap(this.map);
        }
      } else if (mCount < this.minClusterSize) {
        if (marker.getMap() !== this.map) {
          marker.setMap(this.map);
        }
      } else if (mCount === this.minClusterSize) {
        for (var i = 0; i < mCount; i++) {
          this.markers[i].setMap(null);
        }
      } else {
        marker.setMap(null);
      }
      return true;
    };
    Cluster2.prototype.isMarkerInClusterBounds = function(marker) {
      if (this.bounds !== null) {
        var position = marker.getPosition();
        if (position) {
          return this.bounds.contains(position);
        }
      }
      return false;
    };
    Cluster2.prototype.calculateBounds = function() {
      this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    };
    Cluster2.prototype.updateIcon = function() {
      var _a;
      var mCount = this.markers.length;
      var maxZoom = this.markerClusterer.getMaxZoom();
      var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
      if (maxZoom !== null && typeof zoom !== "undefined" && zoom > maxZoom) {
        this.clusterIcon.hide();
        return;
      }
      if (mCount < this.minClusterSize) {
        this.clusterIcon.hide();
        return;
      }
      if (this.center) {
        this.clusterIcon.setCenter(this.center);
      }
      this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
      this.clusterIcon.show();
    };
    Cluster2.prototype.isMarkerAlreadyAdded = function(marker) {
      if (this.markers.includes) {
        return this.markers.includes(marker);
      }
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          return true;
        }
      }
      return false;
    };
    return Cluster2;
  }()
);
function CALCULATOR(markers, numStyles) {
  var count = markers.length;
  var numberOfDigits = count.toString().length;
  var index = Math.min(numberOfDigits, numStyles);
  return {
    text: count.toString(),
    index,
    title: ""
  };
}
var BATCH_SIZE = 2e3;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";
var IMAGE_EXTENSION = "png";
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = "cluster";
var Clusterer = (
  /** @class */
  function() {
    function Clusterer2(map, optMarkers, optOptions) {
      if (optMarkers === void 0) {
        optMarkers = [];
      }
      if (optOptions === void 0) {
        optOptions = {};
      }
      this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this);
      this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this);
      this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this);
      this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this);
      this.addToClosestCluster = this.addToClosestCluster.bind(this);
      this.getImageExtension = this.getImageExtension.bind(this);
      this.setImageExtension = this.setImageExtension.bind(this);
      this.getExtendedBounds = this.getExtendedBounds.bind(this);
      this.getAverageCenter = this.getAverageCenter.bind(this);
      this.setAverageCenter = this.setAverageCenter.bind(this);
      this.getTotalClusters = this.getTotalClusters.bind(this);
      this.fitMapToMarkers = this.fitMapToMarkers.bind(this);
      this.getIgnoreHidden = this.getIgnoreHidden.bind(this);
      this.setIgnoreHidden = this.setIgnoreHidden.bind(this);
      this.getClusterClass = this.getClusterClass.bind(this);
      this.setClusterClass = this.setClusterClass.bind(this);
      this.getTotalMarkers = this.getTotalMarkers.bind(this);
      this.getZoomOnClick = this.getZoomOnClick.bind(this);
      this.setZoomOnClick = this.setZoomOnClick.bind(this);
      this.getBatchSizeIE = this.getBatchSizeIE.bind(this);
      this.setBatchSizeIE = this.setBatchSizeIE.bind(this);
      this.createClusters = this.createClusters.bind(this);
      this.onZoomChanged = this.onZoomChanged.bind(this);
      this.getImageSizes = this.getImageSizes.bind(this);
      this.setImageSizes = this.setImageSizes.bind(this);
      this.getCalculator = this.getCalculator.bind(this);
      this.setCalculator = this.setCalculator.bind(this);
      this.removeMarkers = this.removeMarkers.bind(this);
      this.resetViewport = this.resetViewport.bind(this);
      this.getImagePath = this.getImagePath.bind(this);
      this.setImagePath = this.setImagePath.bind(this);
      this.pushMarkerTo = this.pushMarkerTo.bind(this);
      this.removeMarker = this.removeMarker.bind(this);
      this.clearMarkers = this.clearMarkers.bind(this);
      this.setupStyles = this.setupStyles.bind(this);
      this.getGridSize = this.getGridSize.bind(this);
      this.setGridSize = this.setGridSize.bind(this);
      this.getClusters = this.getClusters.bind(this);
      this.getMaxZoom = this.getMaxZoom.bind(this);
      this.setMaxZoom = this.setMaxZoom.bind(this);
      this.getMarkers = this.getMarkers.bind(this);
      this.addMarkers = this.addMarkers.bind(this);
      this.getStyles = this.getStyles.bind(this);
      this.setStyles = this.setStyles.bind(this);
      this.addMarker = this.addMarker.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.getTitle = this.getTitle.bind(this);
      this.setTitle = this.setTitle.bind(this);
      this.repaint = this.repaint.bind(this);
      this.onIdle = this.onIdle.bind(this);
      this.redraw = this.redraw.bind(this);
      this.extend = this.extend.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.draw = this.draw.bind(this);
      this.extend(Clusterer2, google.maps.OverlayView);
      this.markers = [];
      this.clusters = [];
      this.listeners = [];
      this.activeMap = null;
      this.ready = false;
      this.gridSize = optOptions.gridSize || 60;
      this.minClusterSize = optOptions.minimumClusterSize || 2;
      this.maxZoom = optOptions.maxZoom || null;
      this.styles = optOptions.styles || [];
      this.title = optOptions.title || "";
      this.zoomOnClick = true;
      if (optOptions.zoomOnClick !== void 0) {
        this.zoomOnClick = optOptions.zoomOnClick;
      }
      this.averageCenter = false;
      if (optOptions.averageCenter !== void 0) {
        this.averageCenter = optOptions.averageCenter;
      }
      this.ignoreHidden = false;
      if (optOptions.ignoreHidden !== void 0) {
        this.ignoreHidden = optOptions.ignoreHidden;
      }
      this.enableRetinaIcons = false;
      if (optOptions.enableRetinaIcons !== void 0) {
        this.enableRetinaIcons = optOptions.enableRetinaIcons;
      }
      this.imagePath = optOptions.imagePath || IMAGE_PATH;
      this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
      this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
      this.calculator = optOptions.calculator || CALCULATOR;
      this.batchSize = optOptions.batchSize || BATCH_SIZE;
      this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
      this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;
      if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
        this.batchSize = this.batchSizeIE;
      }
      this.timerRefStatic = null;
      this.setupStyles();
      this.addMarkers(optMarkers, true);
      this.setMap(map);
    }
    Clusterer2.prototype.onZoomChanged = function() {
      var _a, _b;
      this.resetViewport(false);
      if (((_a = this.getMap()) === null || _a === void 0 ? void 0 : _a.getZoom()) === (this.get("minZoom") || 0) || ((_b = this.getMap()) === null || _b === void 0 ? void 0 : _b.getZoom()) === this.get("maxZoom")) {
        google.maps.event.trigger(this, "idle");
      }
    };
    Clusterer2.prototype.onIdle = function() {
      this.redraw();
    };
    Clusterer2.prototype.onAdd = function() {
      var map = this.getMap();
      this.activeMap = map;
      this.ready = true;
      this.repaint();
      if (map !== null) {
        this.listeners = [
          google.maps.event.addListener(map, "zoom_changed", this.onZoomChanged),
          google.maps.event.addListener(map, "idle", this.onIdle)
        ];
      }
    };
    Clusterer2.prototype.onRemove = function() {
      for (var i = 0; i < this.markers.length; i++) {
        if (this.markers[i].getMap() !== this.activeMap) {
          this.markers[i].setMap(this.activeMap);
        }
      }
      for (var i = 0; i < this.clusters.length; i++) {
        this.clusters[i].remove();
      }
      this.clusters = [];
      for (var i = 0; i < this.listeners.length; i++) {
        google.maps.event.removeListener(this.listeners[i]);
      }
      this.listeners = [];
      this.activeMap = null;
      this.ready = false;
    };
    Clusterer2.prototype.draw = function() {
      return;
    };
    Clusterer2.prototype.setupStyles = function() {
      if (this.styles.length > 0) {
        return;
      }
      for (var i = 0; i < this.imageSizes.length; i++) {
        this.styles.push({
          url: "".concat(this.imagePath + (i + 1), ".").concat(this.imageExtension),
          height: this.imageSizes[i],
          width: this.imageSizes[i]
        });
      }
    };
    Clusterer2.prototype.fitMapToMarkers = function() {
      var markers = this.getMarkers();
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < markers.length; i++) {
        var position = markers[i].getPosition();
        if (position) {
          bounds.extend(position);
        }
      }
      var map = this.getMap();
      if (map !== null && "fitBounds" in map) {
        map.fitBounds(bounds);
      }
    };
    Clusterer2.prototype.getGridSize = function() {
      return this.gridSize;
    };
    Clusterer2.prototype.setGridSize = function(gridSize) {
      this.gridSize = gridSize;
    };
    Clusterer2.prototype.getMinimumClusterSize = function() {
      return this.minClusterSize;
    };
    Clusterer2.prototype.setMinimumClusterSize = function(minimumClusterSize) {
      this.minClusterSize = minimumClusterSize;
    };
    Clusterer2.prototype.getMaxZoom = function() {
      return this.maxZoom;
    };
    Clusterer2.prototype.setMaxZoom = function(maxZoom) {
      this.maxZoom = maxZoom;
    };
    Clusterer2.prototype.getStyles = function() {
      return this.styles;
    };
    Clusterer2.prototype.setStyles = function(styles) {
      this.styles = styles;
    };
    Clusterer2.prototype.getTitle = function() {
      return this.title;
    };
    Clusterer2.prototype.setTitle = function(title) {
      this.title = title;
    };
    Clusterer2.prototype.getZoomOnClick = function() {
      return this.zoomOnClick;
    };
    Clusterer2.prototype.setZoomOnClick = function(zoomOnClick) {
      this.zoomOnClick = zoomOnClick;
    };
    Clusterer2.prototype.getAverageCenter = function() {
      return this.averageCenter;
    };
    Clusterer2.prototype.setAverageCenter = function(averageCenter) {
      this.averageCenter = averageCenter;
    };
    Clusterer2.prototype.getIgnoreHidden = function() {
      return this.ignoreHidden;
    };
    Clusterer2.prototype.setIgnoreHidden = function(ignoreHidden) {
      this.ignoreHidden = ignoreHidden;
    };
    Clusterer2.prototype.getEnableRetinaIcons = function() {
      return this.enableRetinaIcons;
    };
    Clusterer2.prototype.setEnableRetinaIcons = function(enableRetinaIcons) {
      this.enableRetinaIcons = enableRetinaIcons;
    };
    Clusterer2.prototype.getImageExtension = function() {
      return this.imageExtension;
    };
    Clusterer2.prototype.setImageExtension = function(imageExtension) {
      this.imageExtension = imageExtension;
    };
    Clusterer2.prototype.getImagePath = function() {
      return this.imagePath;
    };
    Clusterer2.prototype.setImagePath = function(imagePath) {
      this.imagePath = imagePath;
    };
    Clusterer2.prototype.getImageSizes = function() {
      return this.imageSizes;
    };
    Clusterer2.prototype.setImageSizes = function(imageSizes) {
      this.imageSizes = imageSizes;
    };
    Clusterer2.prototype.getCalculator = function() {
      return this.calculator;
    };
    Clusterer2.prototype.setCalculator = function(calculator) {
      this.calculator = calculator;
    };
    Clusterer2.prototype.getBatchSizeIE = function() {
      return this.batchSizeIE;
    };
    Clusterer2.prototype.setBatchSizeIE = function(batchSizeIE) {
      this.batchSizeIE = batchSizeIE;
    };
    Clusterer2.prototype.getClusterClass = function() {
      return this.clusterClass;
    };
    Clusterer2.prototype.setClusterClass = function(clusterClass) {
      this.clusterClass = clusterClass;
    };
    Clusterer2.prototype.getMarkers = function() {
      return this.markers;
    };
    Clusterer2.prototype.getTotalMarkers = function() {
      return this.markers.length;
    };
    Clusterer2.prototype.getClusters = function() {
      return this.clusters;
    };
    Clusterer2.prototype.getTotalClusters = function() {
      return this.clusters.length;
    };
    Clusterer2.prototype.addMarker = function(marker, optNoDraw) {
      this.pushMarkerTo(marker);
      if (!optNoDraw) {
        this.redraw();
      }
    };
    Clusterer2.prototype.addMarkers = function(markers, optNoDraw) {
      for (var key in markers) {
        if (Object.prototype.hasOwnProperty.call(markers, key)) {
          this.pushMarkerTo(markers[key]);
        }
      }
      if (!optNoDraw) {
        this.redraw();
      }
    };
    Clusterer2.prototype.pushMarkerTo = function(marker) {
      var _this = this;
      if (marker.getDraggable()) {
        google.maps.event.addListener(marker, "dragend", function() {
          if (_this.ready) {
            marker.isAdded = false;
            _this.repaint();
          }
        });
      }
      marker.isAdded = false;
      this.markers.push(marker);
    };
    Clusterer2.prototype.removeMarker_ = function(marker) {
      var index = -1;
      if (this.markers.indexOf) {
        index = this.markers.indexOf(marker);
      } else {
        for (var i = 0; i < this.markers.length; i++) {
          if (marker === this.markers[i]) {
            index = i;
            break;
          }
        }
      }
      if (index === -1) {
        return false;
      }
      marker.setMap(null);
      this.markers.splice(index, 1);
      return true;
    };
    Clusterer2.prototype.removeMarker = function(marker, optNoDraw) {
      var removed = this.removeMarker_(marker);
      if (!optNoDraw && removed) {
        this.repaint();
      }
      return removed;
    };
    Clusterer2.prototype.removeMarkers = function(markers, optNoDraw) {
      var removed = false;
      for (var i = 0; i < markers.length; i++) {
        removed = removed || this.removeMarker_(markers[i]);
      }
      if (!optNoDraw && removed) {
        this.repaint();
      }
      return removed;
    };
    Clusterer2.prototype.clearMarkers = function() {
      this.resetViewport(true);
      this.markers = [];
    };
    Clusterer2.prototype.repaint = function() {
      var oldClusters = this.clusters.slice();
      this.clusters = [];
      this.resetViewport(false);
      this.redraw();
      setTimeout(function timeout() {
        for (var i = 0; i < oldClusters.length; i++) {
          oldClusters[i].remove();
        }
      }, 0);
    };
    Clusterer2.prototype.getExtendedBounds = function(bounds) {
      var projection = this.getProjection();
      var trPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng())
      );
      if (trPix !== null) {
        trPix.x += this.gridSize;
        trPix.y -= this.gridSize;
      }
      var blPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng())
      );
      if (blPix !== null) {
        blPix.x -= this.gridSize;
        blPix.y += this.gridSize;
      }
      if (trPix !== null) {
        var point1 = projection.fromDivPixelToLatLng(trPix);
        if (point1 !== null) {
          bounds.extend(point1);
        }
      }
      if (blPix !== null) {
        var point2 = projection.fromDivPixelToLatLng(blPix);
        if (point2 !== null) {
          bounds.extend(point2);
        }
      }
      return bounds;
    };
    Clusterer2.prototype.redraw = function() {
      this.createClusters(0);
    };
    Clusterer2.prototype.resetViewport = function(optHide) {
      for (var i = 0; i < this.clusters.length; i++) {
        this.clusters[i].remove();
      }
      this.clusters = [];
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        marker.isAdded = false;
        if (optHide) {
          marker.setMap(null);
        }
      }
    };
    Clusterer2.prototype.distanceBetweenPoints = function(p1, p2) {
      var R = 6371;
      var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
      var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    };
    Clusterer2.prototype.isMarkerInBounds = function(marker, bounds) {
      var position = marker.getPosition();
      if (position) {
        return bounds.contains(position);
      }
      return false;
    };
    Clusterer2.prototype.addToClosestCluster = function(marker) {
      var cluster;
      var distance = 4e4;
      var clusterToAddTo = null;
      for (var i = 0; i < this.clusters.length; i++) {
        cluster = this.clusters[i];
        var center = cluster.getCenter();
        var position = marker.getPosition();
        if (center && position) {
          var d = this.distanceBetweenPoints(center, position);
          if (d < distance) {
            distance = d;
            clusterToAddTo = cluster;
          }
        }
      }
      if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
        clusterToAddTo.addMarker(marker);
      } else {
        cluster = new Cluster$1(this);
        cluster.addMarker(marker);
        this.clusters.push(cluster);
      }
    };
    Clusterer2.prototype.createClusters = function(iFirst) {
      var _this = this;
      if (!this.ready) {
        return;
      }
      if (iFirst === 0) {
        google.maps.event.trigger(this, "clusteringbegin", this);
        if (this.timerRefStatic !== null) {
          window.clearTimeout(this.timerRefStatic);
          delete this.timerRefStatic;
        }
      }
      var map = this.getMap();
      var bounds = map !== null && "getBounds" in map ? map.getBounds() : null;
      var zoom = (map === null || map === void 0 ? void 0 : map.getZoom()) || 0;
      var mapBounds = zoom > 3 ? new google.maps.LatLngBounds(bounds === null || bounds === void 0 ? void 0 : bounds.getSouthWest(), bounds === null || bounds === void 0 ? void 0 : bounds.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
      var extendedMapBounds = this.getExtendedBounds(mapBounds);
      var iLast = Math.min(iFirst + this.batchSize, this.markers.length);
      for (var i = iFirst; i < iLast; i++) {
        var marker = this.markers[i];
        if (!marker.isAdded && this.isMarkerInBounds(marker, extendedMapBounds) && (!this.ignoreHidden || this.ignoreHidden && marker.getVisible())) {
          this.addToClosestCluster(marker);
        }
      }
      if (iLast < this.markers.length) {
        this.timerRefStatic = window.setTimeout(function() {
          _this.createClusters(iLast);
        }, 0);
      } else {
        this.timerRefStatic = null;
        google.maps.event.trigger(this, "clusteringend", this);
        for (var i = 0; i < this.clusters.length; i++) {
          this.clusters[i].updateIcon();
        }
      }
    };
    Clusterer2.prototype.extend = function(obj1, obj2) {
      return function applyExtend(object) {
        for (var property in object.prototype) {
          this.prototype[property] = object.prototype[property];
        }
        return this;
      }.apply(obj1, [obj2]);
    };
    return Clusterer2;
  }()
);
var eventMap$e = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
};
var updaterMap$e = {
  averageCenter(instance, averageCenter) {
    instance.setAverageCenter(averageCenter);
  },
  batchSizeIE(instance, batchSizeIE) {
    instance.setBatchSizeIE(batchSizeIE);
  },
  calculator(instance, calculator) {
    instance.setCalculator(calculator);
  },
  clusterClass(instance, clusterClass) {
    instance.setClusterClass(clusterClass);
  },
  enableRetinaIcons(instance, enableRetinaIcons) {
    instance.setEnableRetinaIcons(enableRetinaIcons);
  },
  gridSize(instance, gridSize) {
    instance.setGridSize(gridSize);
  },
  ignoreHidden(instance, ignoreHidden) {
    instance.setIgnoreHidden(ignoreHidden);
  },
  imageExtension(instance, imageExtension) {
    instance.setImageExtension(imageExtension);
  },
  imagePath(instance, imagePath) {
    instance.setImagePath(imagePath);
  },
  imageSizes(instance, imageSizes) {
    instance.setImageSizes(imageSizes);
  },
  maxZoom(instance, maxZoom) {
    instance.setMaxZoom(maxZoom);
  },
  minimumClusterSize(instance, minimumClusterSize) {
    instance.setMinimumClusterSize(minimumClusterSize);
  },
  styles(instance, styles) {
    instance.setStyles(styles);
  },
  title(instance, title) {
    instance.setTitle(title);
  },
  zoomOnClick(instance, zoomOnClick) {
    instance.setZoomOnClick(zoomOnClick);
  }
};
var defaultOptions$4 = {};
function MarkerClustererFunctional(props) {
  const { children, options, averageCenter, batchSizeIE, calculator, clusterClass, enableRetinaIcons, gridSize, ignoreHidden, imageExtension, imagePath, imageSizes, maxZoom, minimumClusterSize, styles, title, zoomOnClick, onClick, onClusteringBegin, onClusteringEnd, onMouseOver, onMouseOut, onLoad, onUnmount } = props;
  const [instance, setInstance] = (0, import_react.useState)(null);
  const map = (0, import_react.useContext)(MapContext);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [clusteringBeginListener, setClusteringBeginListener] = (0, import_react.useState)(null);
  const [clusteringEndListener, setClusteringEndListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, eventMap$e.onMouseOut, onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, eventMap$e.onMouseOver, onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, eventMap$e.onClick, onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onClusteringBegin) {
      if (clusteringBeginListener !== null) {
        google.maps.event.removeListener(clusteringBeginListener);
      }
      setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringBegin, onClusteringBegin));
    }
  }, [onClusteringBegin]);
  (0, import_react.useEffect)(() => {
    if (instance && onClusteringEnd) {
      if (clusteringEndListener !== null) {
        google.maps.event.removeListener(clusteringEndListener);
      }
      setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringEnd, onClusteringEnd));
    }
  }, [onClusteringEnd]);
  (0, import_react.useEffect)(() => {
    if (typeof averageCenter !== "undefined" && instance !== null) {
      updaterMap$e.averageCenter(instance, averageCenter);
    }
  }, [instance, averageCenter]);
  (0, import_react.useEffect)(() => {
    if (typeof batchSizeIE !== "undefined" && instance !== null) {
      updaterMap$e.batchSizeIE(instance, batchSizeIE);
    }
  }, [instance, batchSizeIE]);
  (0, import_react.useEffect)(() => {
    if (typeof calculator !== "undefined" && instance !== null) {
      updaterMap$e.calculator(instance, calculator);
    }
  }, [instance, calculator]);
  (0, import_react.useEffect)(() => {
    if (typeof clusterClass !== "undefined" && instance !== null) {
      updaterMap$e.clusterClass(instance, clusterClass);
    }
  }, [instance, clusterClass]);
  (0, import_react.useEffect)(() => {
    if (typeof enableRetinaIcons !== "undefined" && instance !== null) {
      updaterMap$e.enableRetinaIcons(instance, enableRetinaIcons);
    }
  }, [instance, enableRetinaIcons]);
  (0, import_react.useEffect)(() => {
    if (typeof gridSize !== "undefined" && instance !== null) {
      updaterMap$e.gridSize(instance, gridSize);
    }
  }, [instance, gridSize]);
  (0, import_react.useEffect)(() => {
    if (typeof ignoreHidden !== "undefined" && instance !== null) {
      updaterMap$e.ignoreHidden(instance, ignoreHidden);
    }
  }, [instance, ignoreHidden]);
  (0, import_react.useEffect)(() => {
    if (typeof imageExtension !== "undefined" && instance !== null) {
      updaterMap$e.imageExtension(instance, imageExtension);
    }
  }, [instance, imageExtension]);
  (0, import_react.useEffect)(() => {
    if (typeof imagePath !== "undefined" && instance !== null) {
      updaterMap$e.imagePath(instance, imagePath);
    }
  }, [instance, imagePath]);
  (0, import_react.useEffect)(() => {
    if (typeof imageSizes !== "undefined" && instance !== null) {
      updaterMap$e.imageSizes(instance, imageSizes);
    }
  }, [instance, imageSizes]);
  (0, import_react.useEffect)(() => {
    if (typeof maxZoom !== "undefined" && instance !== null) {
      updaterMap$e.maxZoom(instance, maxZoom);
    }
  }, [instance, maxZoom]);
  (0, import_react.useEffect)(() => {
    if (typeof minimumClusterSize !== "undefined" && instance !== null) {
      updaterMap$e.minimumClusterSize(instance, minimumClusterSize);
    }
  }, [instance, minimumClusterSize]);
  (0, import_react.useEffect)(() => {
    if (typeof styles !== "undefined" && instance !== null) {
      updaterMap$e.styles(instance, styles);
    }
  }, [instance, styles]);
  (0, import_react.useEffect)(() => {
    if (typeof title !== "undefined" && instance !== null) {
      updaterMap$e.title(instance, title);
    }
  }, [instance, title]);
  (0, import_react.useEffect)(() => {
    if (typeof zoomOnClick !== "undefined" && instance !== null) {
      updaterMap$e.zoomOnClick(instance, zoomOnClick);
    }
  }, [instance, zoomOnClick]);
  (0, import_react.useEffect)(() => {
    if (!map)
      return;
    const clustererOptions = Object.assign({}, options || defaultOptions$4);
    const clusterer = new Clusterer(map, [], clustererOptions);
    if (averageCenter) {
      updaterMap$e.averageCenter(clusterer, averageCenter);
    }
    if (batchSizeIE) {
      updaterMap$e.batchSizeIE(clusterer, batchSizeIE);
    }
    if (calculator) {
      updaterMap$e.calculator(clusterer, calculator);
    }
    if (clusterClass) {
      updaterMap$e.clusterClass(clusterer, clusterClass);
    }
    if (enableRetinaIcons) {
      updaterMap$e.enableRetinaIcons(clusterer, enableRetinaIcons);
    }
    if (gridSize) {
      updaterMap$e.gridSize(clusterer, gridSize);
    }
    if (ignoreHidden) {
      updaterMap$e.ignoreHidden(clusterer, ignoreHidden);
    }
    if (imageExtension) {
      updaterMap$e.imageExtension(clusterer, imageExtension);
    }
    if (imagePath) {
      updaterMap$e.imagePath(clusterer, imagePath);
    }
    if (imageSizes) {
      updaterMap$e.imageSizes(clusterer, imageSizes);
    }
    if (maxZoom) {
      updaterMap$e.maxZoom(clusterer, maxZoom);
    }
    if (minimumClusterSize) {
      updaterMap$e.minimumClusterSize(clusterer, minimumClusterSize);
    }
    if (styles) {
      updaterMap$e.styles(clusterer, styles);
    }
    if (title) {
      updaterMap$e.title(clusterer, title);
    }
    if (zoomOnClick) {
      updaterMap$e.zoomOnClick(clusterer, zoomOnClick);
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOut, onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOver, onMouseOver));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(clusterer, eventMap$e.onClick, onClick));
    }
    if (onClusteringBegin) {
      setClusteringBeginListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringBegin, onClusteringBegin));
    }
    if (onClusteringEnd) {
      setClusteringEndListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringEnd, onClusteringEnd));
    }
    setInstance(clusterer);
    if (onLoad) {
      onLoad(clusterer);
    }
    return () => {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (clusteringBeginListener !== null) {
        google.maps.event.removeListener(clusteringBeginListener);
      }
      if (clusteringEndListener !== null) {
        google.maps.event.removeListener(clusteringEndListener);
      }
      if (onUnmount) {
        onUnmount(clusterer);
      }
    };
  }, []);
  return instance !== null ? children(instance) || null : null;
}
var MarkerClustererF = (0, import_react.memo)(MarkerClustererFunctional);
var ClustererComponent = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      markerClusterer: null
    };
    this.setClustererCallback = () => {
      if (this.state.markerClusterer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.markerClusterer);
      }
    };
  }
  componentDidMount() {
    if (this.context) {
      const markerClusterer = new Clusterer(this.context, [], this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$e,
        eventMap: eventMap$e,
        prevProps: {},
        nextProps: this.props,
        instance: markerClusterer
      });
      this.setState(() => {
        return {
          markerClusterer
        };
      }, this.setClustererCallback);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.markerClusterer) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$e,
        eventMap: eventMap$e,
        prevProps,
        nextProps: this.props,
        instance: this.state.markerClusterer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.markerClusterer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.markerClusterer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.markerClusterer.setMap(null);
    }
  }
  render() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  }
};
ClustererComponent.contextType = MapContext;
function cancelHandler(event) {
  event.cancelBubble = true;
  if (event.stopPropagation) {
    event.stopPropagation();
  }
}
var InfoBox = (
  /** @class */
  function() {
    function InfoBox2(options) {
      if (options === void 0) {
        options = {};
      }
      this.getCloseClickHandler = this.getCloseClickHandler.bind(this);
      this.closeClickHandler = this.closeClickHandler.bind(this);
      this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this);
      this.addClickHandler = this.addClickHandler.bind(this);
      this.getCloseBoxImg = this.getCloseBoxImg.bind(this);
      this.getBoxWidths = this.getBoxWidths.bind(this);
      this.setBoxStyle = this.setBoxStyle.bind(this);
      this.setPosition = this.setPosition.bind(this);
      this.getPosition = this.getPosition.bind(this);
      this.setOptions = this.setOptions.bind(this);
      this.setContent = this.setContent.bind(this);
      this.setVisible = this.setVisible.bind(this);
      this.getContent = this.getContent.bind(this);
      this.getVisible = this.getVisible.bind(this);
      this.setZIndex = this.setZIndex.bind(this);
      this.getZIndex = this.getZIndex.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.panBox = this.panBox.bind(this);
      this.extend = this.extend.bind(this);
      this.close = this.close.bind(this);
      this.draw = this.draw.bind(this);
      this.show = this.show.bind(this);
      this.hide = this.hide.bind(this);
      this.open = this.open.bind(this);
      this.extend(InfoBox2, google.maps.OverlayView);
      this.content = options.content || "";
      this.disableAutoPan = options.disableAutoPan || false;
      this.maxWidth = options.maxWidth || 0;
      this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
      this.position = options.position || new google.maps.LatLng(0, 0);
      this.zIndex = options.zIndex || null;
      this.boxClass = options.boxClass || "infoBox";
      this.boxStyle = options.boxStyle || {};
      this.closeBoxMargin = options.closeBoxMargin || "2px";
      this.closeBoxURL = options.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
      if (options.closeBoxURL === "") {
        this.closeBoxURL = "";
      }
      this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);
      if (typeof options.visible === "undefined") {
        if (typeof options.isHidden === "undefined") {
          options.visible = true;
        } else {
          options.visible = !options.isHidden;
        }
      }
      this.isHidden = !options.visible;
      this.alignBottom = options.alignBottom || false;
      this.pane = options.pane || "floatPane";
      this.enableEventPropagation = options.enableEventPropagation || false;
      this.div = null;
      this.closeListener = null;
      this.moveListener = null;
      this.mapListener = null;
      this.contextListener = null;
      this.eventListeners = null;
      this.fixedWidthSet = null;
    }
    InfoBox2.prototype.createInfoBoxDiv = function() {
      var _this = this;
      var ignoreHandler = function(event) {
        event.returnValue = false;
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (!_this.enableEventPropagation) {
          cancelHandler(event);
        }
      };
      if (!this.div) {
        this.div = document.createElement("div");
        this.setBoxStyle();
        if (typeof this.content === "string") {
          this.div.innerHTML = this.getCloseBoxImg() + this.content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(this.content);
        }
        var panes = this.getPanes();
        if (panes !== null) {
          panes[this.pane].appendChild(this.div);
        }
        this.addClickHandler();
        if (this.div.style.width) {
          this.fixedWidthSet = true;
        } else {
          if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
            this.div.style.width = this.maxWidth + "px";
            this.fixedWidthSet = true;
          } else {
            var bw = this.getBoxWidths();
            this.div.style.width = this.div.offsetWidth - bw.left - bw.right + "px";
            this.fixedWidthSet = false;
          }
        }
        this.panBox(this.disableAutoPan);
        if (!this.enableEventPropagation) {
          this.eventListeners = [];
          var events = [
            "mousedown",
            "mouseover",
            "mouseout",
            "mouseup",
            "click",
            "dblclick",
            "touchstart",
            "touchend",
            "touchmove"
          ];
          for (var i = 0; i < events.length; i++) {
            this.eventListeners.push(google.maps.event.addListener(this.div, events[i], cancelHandler));
          }
          this.eventListeners.push(google.maps.event.addListener(this.div, "mouseover", function() {
            if (_this.div) {
              _this.div.style.cursor = "default";
            }
          }));
        }
        this.contextListener = google.maps.event.addListener(this.div, "contextmenu", ignoreHandler);
        google.maps.event.trigger(this, "domready");
      }
    };
    InfoBox2.prototype.getCloseBoxImg = function() {
      var img = "";
      if (this.closeBoxURL !== "") {
        img = '<img alt=""';
        img += ' aria-hidden="true"';
        img += " src='" + this.closeBoxURL + "'";
        img += " align=right";
        img += " style='";
        img += " position: relative;";
        img += " cursor: pointer;";
        img += " margin: " + this.closeBoxMargin + ";";
        img += "'>";
      }
      return img;
    };
    InfoBox2.prototype.addClickHandler = function() {
      this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== "" ? google.maps.event.addListener(this.div.firstChild, "click", this.getCloseClickHandler()) : null;
    };
    InfoBox2.prototype.closeClickHandler = function(event) {
      event.cancelBubble = true;
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      google.maps.event.trigger(this, "closeclick");
      this.close();
    };
    InfoBox2.prototype.getCloseClickHandler = function() {
      return this.closeClickHandler;
    };
    InfoBox2.prototype.panBox = function(disablePan) {
      if (this.div && !disablePan) {
        var map = this.getMap();
        if (map instanceof google.maps.Map) {
          var xOffset = 0;
          var yOffset = 0;
          var bounds = map.getBounds();
          if (bounds && !bounds.contains(this.position)) {
            map.setCenter(this.position);
          }
          var mapDiv = map.getDiv();
          var mapWidth = mapDiv.offsetWidth;
          var mapHeight = mapDiv.offsetHeight;
          var iwOffsetX = this.pixelOffset.width;
          var iwOffsetY = this.pixelOffset.height;
          var iwWidth = this.div.offsetWidth;
          var iwHeight = this.div.offsetHeight;
          var padX = this.infoBoxClearance.width;
          var padY = this.infoBoxClearance.height;
          var projection = this.getProjection();
          var pixPosition = projection.fromLatLngToContainerPixel(this.position);
          if (pixPosition !== null) {
            if (pixPosition.x < -iwOffsetX + padX) {
              xOffset = pixPosition.x + iwOffsetX - padX;
            } else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
              xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
            }
            if (this.alignBottom) {
              if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
                yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
              } else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
                yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
              }
            } else {
              if (pixPosition.y < -iwOffsetY + padY) {
                yOffset = pixPosition.y + iwOffsetY - padY;
              } else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
                yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
              }
            }
          }
          if (!(xOffset === 0 && yOffset === 0)) {
            map.panBy(xOffset, yOffset);
          }
        }
      }
    };
    InfoBox2.prototype.setBoxStyle = function() {
      if (this.div) {
        this.div.className = this.boxClass;
        this.div.style.cssText = "";
        var boxStyle = this.boxStyle;
        for (var i in boxStyle) {
          if (Object.prototype.hasOwnProperty.call(boxStyle, i)) {
            this.div.style[i] = boxStyle[i];
          }
        }
        this.div.style.webkitTransform = "translateZ(0)";
        if (typeof this.div.style.opacity !== "undefined" && this.div.style.opacity !== "") {
          var opacity = parseFloat(this.div.style.opacity || "");
          this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
          this.div.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }
        this.div.style.position = "absolute";
        this.div.style.visibility = "hidden";
        if (this.zIndex !== null) {
          this.div.style.zIndex = this.zIndex + "";
        }
        if (!this.div.style.overflow) {
          this.div.style.overflow = "auto";
        }
      }
    };
    InfoBox2.prototype.getBoxWidths = function() {
      var bw = { top: 0, bottom: 0, left: 0, right: 0 };
      if (!this.div) {
        return bw;
      }
      if (document.defaultView) {
        var ownerDocument = this.div.ownerDocument;
        var computedStyle = ownerDocument && ownerDocument.defaultView ? ownerDocument.defaultView.getComputedStyle(this.div, "") : null;
        if (computedStyle) {
          bw.top = parseInt(computedStyle.borderTopWidth || "", 10) || 0;
          bw.bottom = parseInt(computedStyle.borderBottomWidth || "", 10) || 0;
          bw.left = parseInt(computedStyle.borderLeftWidth || "", 10) || 0;
          bw.right = parseInt(computedStyle.borderRightWidth || "", 10) || 0;
        }
      } else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.documentElement.currentStyle
      ) {
        var currentStyle = this.div.currentStyle;
        if (currentStyle) {
          bw.top = parseInt(currentStyle.borderTopWidth || "", 10) || 0;
          bw.bottom = parseInt(currentStyle.borderBottomWidth || "", 10) || 0;
          bw.left = parseInt(currentStyle.borderLeftWidth || "", 10) || 0;
          bw.right = parseInt(currentStyle.borderRightWidth || "", 10) || 0;
        }
      }
      return bw;
    };
    InfoBox2.prototype.onRemove = function() {
      if (this.div && this.div.parentNode) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
      }
    };
    InfoBox2.prototype.draw = function() {
      this.createInfoBoxDiv();
      if (this.div) {
        var projection = this.getProjection();
        var pixPosition = projection.fromLatLngToDivPixel(this.position);
        if (pixPosition !== null) {
          this.div.style.left = pixPosition.x + this.pixelOffset.width + "px";
          if (this.alignBottom) {
            this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + "px";
          } else {
            this.div.style.top = pixPosition.y + this.pixelOffset.height + "px";
          }
        }
        if (this.isHidden) {
          this.div.style.visibility = "hidden";
        } else {
          this.div.style.visibility = "visible";
        }
      }
    };
    InfoBox2.prototype.setOptions = function(options) {
      if (options === void 0) {
        options = {};
      }
      if (typeof options.boxClass !== "undefined") {
        this.boxClass = options.boxClass;
        this.setBoxStyle();
      }
      if (typeof options.boxStyle !== "undefined") {
        this.boxStyle = options.boxStyle;
        this.setBoxStyle();
      }
      if (typeof options.content !== "undefined") {
        this.setContent(options.content);
      }
      if (typeof options.disableAutoPan !== "undefined") {
        this.disableAutoPan = options.disableAutoPan;
      }
      if (typeof options.maxWidth !== "undefined") {
        this.maxWidth = options.maxWidth;
      }
      if (typeof options.pixelOffset !== "undefined") {
        this.pixelOffset = options.pixelOffset;
      }
      if (typeof options.alignBottom !== "undefined") {
        this.alignBottom = options.alignBottom;
      }
      if (typeof options.position !== "undefined") {
        this.setPosition(options.position);
      }
      if (typeof options.zIndex !== "undefined") {
        this.setZIndex(options.zIndex);
      }
      if (typeof options.closeBoxMargin !== "undefined") {
        this.closeBoxMargin = options.closeBoxMargin;
      }
      if (typeof options.closeBoxURL !== "undefined") {
        this.closeBoxURL = options.closeBoxURL;
      }
      if (typeof options.infoBoxClearance !== "undefined") {
        this.infoBoxClearance = options.infoBoxClearance;
      }
      if (typeof options.isHidden !== "undefined") {
        this.isHidden = options.isHidden;
      }
      if (typeof options.visible !== "undefined") {
        this.isHidden = !options.visible;
      }
      if (typeof options.enableEventPropagation !== "undefined") {
        this.enableEventPropagation = options.enableEventPropagation;
      }
      if (this.div) {
        this.draw();
      }
    };
    InfoBox2.prototype.setContent = function(content) {
      this.content = content;
      if (this.div) {
        if (this.closeListener) {
          google.maps.event.removeListener(this.closeListener);
          this.closeListener = null;
        }
        if (!this.fixedWidthSet) {
          this.div.style.width = "";
        }
        if (typeof content === "string") {
          this.div.innerHTML = this.getCloseBoxImg() + content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(content);
        }
        if (!this.fixedWidthSet) {
          this.div.style.width = this.div.offsetWidth + "px";
          if (typeof content === "string") {
            this.div.innerHTML = this.getCloseBoxImg() + content;
          } else {
            this.div.innerHTML = this.getCloseBoxImg();
            this.div.appendChild(content);
          }
        }
        this.addClickHandler();
      }
      google.maps.event.trigger(this, "content_changed");
    };
    InfoBox2.prototype.setPosition = function(latLng) {
      this.position = latLng;
      if (this.div) {
        this.draw();
      }
      google.maps.event.trigger(this, "position_changed");
    };
    InfoBox2.prototype.setVisible = function(isVisible) {
      this.isHidden = !isVisible;
      if (this.div) {
        this.div.style.visibility = this.isHidden ? "hidden" : "visible";
      }
    };
    InfoBox2.prototype.setZIndex = function(index) {
      this.zIndex = index;
      if (this.div) {
        this.div.style.zIndex = index + "";
      }
      google.maps.event.trigger(this, "zindex_changed");
    };
    InfoBox2.prototype.getContent = function() {
      return this.content;
    };
    InfoBox2.prototype.getPosition = function() {
      return this.position;
    };
    InfoBox2.prototype.getZIndex = function() {
      return this.zIndex;
    };
    InfoBox2.prototype.getVisible = function() {
      var map = this.getMap();
      return typeof map === "undefined" || map === null ? false : !this.isHidden;
    };
    InfoBox2.prototype.show = function() {
      this.isHidden = false;
      if (this.div) {
        this.div.style.visibility = "visible";
      }
    };
    InfoBox2.prototype.hide = function() {
      this.isHidden = true;
      if (this.div) {
        this.div.style.visibility = "hidden";
      }
    };
    InfoBox2.prototype.open = function(map, anchor) {
      var _this = this;
      if (anchor) {
        this.position = anchor.getPosition();
        this.moveListener = google.maps.event.addListener(anchor, "position_changed", function() {
          var position = anchor.getPosition();
          _this.setPosition(position);
        });
        this.mapListener = google.maps.event.addListener(anchor, "map_changed", function() {
          _this.setMap(anchor.map);
        });
      }
      this.setMap(map);
      if (this.div) {
        this.panBox();
      }
    };
    InfoBox2.prototype.close = function() {
      if (this.closeListener) {
        google.maps.event.removeListener(this.closeListener);
        this.closeListener = null;
      }
      if (this.eventListeners) {
        for (var i = 0; i < this.eventListeners.length; i++) {
          google.maps.event.removeListener(this.eventListeners[i]);
        }
        this.eventListeners = null;
      }
      if (this.moveListener) {
        google.maps.event.removeListener(this.moveListener);
        this.moveListener = null;
      }
      if (this.mapListener) {
        google.maps.event.removeListener(this.mapListener);
        this.mapListener = null;
      }
      if (this.contextListener) {
        google.maps.event.removeListener(this.contextListener);
        this.contextListener = null;
      }
      this.setMap(null);
    };
    InfoBox2.prototype.extend = function(obj1, obj2) {
      return function applyExtend(object) {
        for (var property in object.prototype) {
          if (!Object.prototype.hasOwnProperty.call(this, property)) {
            this.prototype[property] = object.prototype[property];
          }
        }
        return this;
      }.apply(obj1, [obj2]);
    };
    return InfoBox2;
  }()
);
var eventMap$d = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$d = {
  options(instance, options) {
    instance.setOptions(options);
  },
  position(instance, position) {
    if (position instanceof google.maps.LatLng) {
      instance.setPosition(position);
    } else {
      instance.setPosition(new google.maps.LatLng(position.lat, position.lng));
    }
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
var defaultOptions$3 = {};
function InfoBoxFunctional({ children, anchor, options, position, zIndex, onCloseClick, onDomReady, onContentChanged, onPositionChanged, onZindexChanged, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [closeclickListener, setCloseClickListener] = (0, import_react.useState)(null);
  const [domreadyclickListener, setDomReadyClickListener] = (0, import_react.useState)(null);
  const [contentchangedclickListener, setContentChangedClickListener] = (0, import_react.useState)(null);
  const [positionchangedclickListener, setPositionChangedClickListener] = (0, import_react.useState)(null);
  const [zindexchangedclickListener, setZindexChangedClickListener] = (0, import_react.useState)(null);
  const containerElementRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (map && instance !== null) {
      instance.close();
      if (anchor) {
        instance.open(map, anchor);
      } else if (instance.getPosition()) {
        instance.open(map);
      }
    }
  }, [map, instance, anchor]);
  (0, import_react.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (position && instance !== null) {
      const positionLatLng = position instanceof google.maps.LatLng ? position : new google.maps.LatLng(position.lat, position.lng);
      instance.setPosition(positionLatLng);
    }
  }, [position]);
  (0, import_react.useEffect)(() => {
    if (typeof zIndex === "number" && instance !== null) {
      instance.setZIndex(zIndex);
    }
  }, [zIndex]);
  (0, import_react.useEffect)(() => {
    if (instance && onCloseClick) {
      if (closeclickListener !== null) {
        google.maps.event.removeListener(closeclickListener);
      }
      setCloseClickListener(google.maps.event.addListener(instance, "closeclick", onCloseClick));
    }
  }, [onCloseClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDomReady) {
      if (domreadyclickListener !== null) {
        google.maps.event.removeListener(domreadyclickListener);
      }
      setDomReadyClickListener(google.maps.event.addListener(instance, "domready", onDomReady));
    }
  }, [onDomReady]);
  (0, import_react.useEffect)(() => {
    if (instance && onContentChanged) {
      if (contentchangedclickListener !== null) {
        google.maps.event.removeListener(contentchangedclickListener);
      }
      setContentChangedClickListener(google.maps.event.addListener(instance, "content_changed", onContentChanged));
    }
  }, [onContentChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onPositionChanged) {
      if (positionchangedclickListener !== null) {
        google.maps.event.removeListener(positionchangedclickListener);
      }
      setPositionChangedClickListener(google.maps.event.addListener(instance, "position_changed", onPositionChanged));
    }
  }, [onPositionChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onZindexChanged) {
      if (zindexchangedclickListener !== null) {
        google.maps.event.removeListener(zindexchangedclickListener);
      }
      setZindexChangedClickListener(google.maps.event.addListener(instance, "zindex_changed", onZindexChanged));
    }
  }, [onZindexChanged]);
  (0, import_react.useEffect)(() => {
    if (map) {
      const _a = options || defaultOptions$3, { position: position2 } = _a, infoBoxOptions = __rest$1(_a, ["position"]);
      let positionLatLng;
      if (position2 && !(position2 instanceof google.maps.LatLng)) {
        positionLatLng = new google.maps.LatLng(position2.lat, position2.lng);
      }
      const infoBox = new InfoBox(Object.assign(Object.assign({}, infoBoxOptions), positionLatLng ? { position: positionLatLng } : {}));
      containerElementRef.current = document.createElement("div");
      setInstance(infoBox);
      if (onCloseClick) {
        setCloseClickListener(google.maps.event.addListener(infoBox, "closeclick", onCloseClick));
      }
      if (onDomReady) {
        setDomReadyClickListener(google.maps.event.addListener(infoBox, "domready", onDomReady));
      }
      if (onContentChanged) {
        setContentChangedClickListener(google.maps.event.addListener(infoBox, "content_changed", onContentChanged));
      }
      if (onPositionChanged) {
        setPositionChangedClickListener(google.maps.event.addListener(infoBox, "position_changed", onPositionChanged));
      }
      if (onZindexChanged) {
        setZindexChangedClickListener(google.maps.event.addListener(infoBox, "zindex_changed", onZindexChanged));
      }
      infoBox.setContent(containerElementRef.current);
      if (anchor) {
        infoBox.open(map, anchor);
      } else if (infoBox.getPosition()) {
        infoBox.open(map);
      } else {
        invariant_1(false, "You must provide either an anchor or a position prop for <InfoBox>.");
      }
      if (onLoad) {
        onLoad(infoBox);
      }
    }
    return () => {
      if (instance !== null) {
        if (closeclickListener) {
          google.maps.event.removeListener(closeclickListener);
        }
        if (contentchangedclickListener) {
          google.maps.event.removeListener(contentchangedclickListener);
        }
        if (domreadyclickListener) {
          google.maps.event.removeListener(domreadyclickListener);
        }
        if (positionchangedclickListener) {
          google.maps.event.removeListener(positionchangedclickListener);
        }
        if (zindexchangedclickListener) {
          google.maps.event.removeListener(zindexchangedclickListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.close();
      }
    };
  }, []);
  return containerElementRef.current ? (0, import_react_dom.createPortal)(import_react.Children.only(children), containerElementRef.current) : null;
}
var InfoBoxF = (0, import_react.memo)(InfoBoxFunctional);
var InfoBoxComponent = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.containerElement = null;
    this.state = {
      infoBox: null
    };
    this.open = (infoBox, anchor) => {
      if (anchor) {
        infoBox.open(this.context, anchor);
      } else if (infoBox.getPosition()) {
        infoBox.open(this.context);
      } else {
        invariant_1(false, "You must provide either an anchor or a position prop for <InfoBox>.");
      }
    };
    this.setInfoBoxCallback = () => {
      if (this.state.infoBox !== null && this.containerElement !== null) {
        this.state.infoBox.setContent(this.containerElement);
        this.open(this.state.infoBox, this.props.anchor);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.infoBox);
        }
      }
    };
  }
  componentDidMount() {
    const _a = this.props.options || {}, { position } = _a, infoBoxOptions = __rest$1(_a, ["position"]);
    let positionLatLng;
    if (position && !(position instanceof google.maps.LatLng)) {
      positionLatLng = new google.maps.LatLng(position.lat, position.lng);
    }
    const infoBox = new InfoBox(Object.assign(Object.assign({}, infoBoxOptions), positionLatLng ? { position: positionLatLng } : {}));
    this.containerElement = document.createElement("div");
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$d,
      eventMap: eventMap$d,
      prevProps: {},
      nextProps: this.props,
      instance: infoBox
    });
    this.setState({ infoBox }, this.setInfoBoxCallback);
  }
  componentDidUpdate(prevProps) {
    const { infoBox } = this.state;
    if (infoBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$d,
        eventMap: eventMap$d,
        prevProps,
        nextProps: this.props,
        instance: infoBox
      });
    }
  }
  componentWillUnmount() {
    const { onUnmount } = this.props;
    const { infoBox } = this.state;
    if (infoBox !== null) {
      if (onUnmount) {
        onUnmount(infoBox);
      }
      unregisterEvents(this.registeredEvents);
      infoBox.close();
    }
  }
  render() {
    return this.containerElement ? (0, import_react_dom.createPortal)(import_react.Children.only(this.props.children), this.containerElement) : null;
  }
};
InfoBoxComponent.contextType = MapContext;
var fastDeepEqual = function equal2(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal2(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal2(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var kdbush = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function sortKD(ids, coords, nodeSize, left, right, depth) {
      if (right - left <= nodeSize) {
        return;
      }
      var m = left + right >> 1;
      select(ids, coords, m, left, right, depth % 2);
      sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
      sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
    }
    function select(ids, coords, k, left, right, inc) {
      while (right > left) {
        if (right - left > 600) {
          var n = right - left + 1;
          var m = k - left + 1;
          var z = Math.log(n);
          var s = 0.5 * Math.exp(2 * z / 3);
          var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
          var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
          var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
          select(ids, coords, k, newLeft, newRight, inc);
        }
        var t = coords[2 * k + inc];
        var i = left;
        var j = right;
        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) {
          swapItem(ids, coords, left, right);
        }
        while (i < j) {
          swapItem(ids, coords, i, j);
          i++;
          j--;
          while (coords[2 * i + inc] < t) {
            i++;
          }
          while (coords[2 * j + inc] > t) {
            j--;
          }
        }
        if (coords[2 * left + inc] === t) {
          swapItem(ids, coords, left, j);
        } else {
          j++;
          swapItem(ids, coords, j, right);
        }
        if (j <= k) {
          left = j + 1;
        }
        if (k <= j) {
          right = j - 1;
        }
      }
    }
    function swapItem(ids, coords, i, j) {
      swap(ids, i, j);
      swap(coords, 2 * i, 2 * j);
      swap(coords, 2 * i + 1, 2 * j + 1);
    }
    function swap(arr, i, j) {
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
      var stack = [0, ids.length - 1, 0];
      var result = [];
      var x, y;
      while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();
        if (right - left <= nodeSize) {
          for (var i = left; i <= right; i++) {
            x = coords[2 * i];
            y = coords[2 * i + 1];
            if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
              result.push(ids[i]);
            }
          }
          continue;
        }
        var m = Math.floor((left + right) / 2);
        x = coords[2 * m];
        y = coords[2 * m + 1];
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
          result.push(ids[m]);
        }
        var nextAxis = (axis + 1) % 2;
        if (axis === 0 ? minX <= x : minY <= y) {
          stack.push(left);
          stack.push(m - 1);
          stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
          stack.push(m + 1);
          stack.push(right);
          stack.push(nextAxis);
        }
      }
      return result;
    }
    function within(ids, coords, qx, qy, r, nodeSize) {
      var stack = [0, ids.length - 1, 0];
      var result = [];
      var r2 = r * r;
      while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();
        if (right - left <= nodeSize) {
          for (var i = left; i <= right; i++) {
            if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) {
              result.push(ids[i]);
            }
          }
          continue;
        }
        var m = Math.floor((left + right) / 2);
        var x = coords[2 * m];
        var y = coords[2 * m + 1];
        if (sqDist(x, y, qx, qy) <= r2) {
          result.push(ids[m]);
        }
        var nextAxis = (axis + 1) % 2;
        if (axis === 0 ? qx - r <= x : qy - r <= y) {
          stack.push(left);
          stack.push(m - 1);
          stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
          stack.push(m + 1);
          stack.push(right);
          stack.push(nextAxis);
        }
      }
      return result;
    }
    function sqDist(ax, ay, bx, by) {
      var dx = ax - bx;
      var dy = ay - by;
      return dx * dx + dy * dy;
    }
    var defaultGetX = function(p) {
      return p[0];
    };
    var defaultGetY = function(p) {
      return p[1];
    };
    var KDBush2 = function KDBush3(points, getX2, getY2, nodeSize, ArrayType) {
      if (getX2 === void 0)
        getX2 = defaultGetX;
      if (getY2 === void 0)
        getY2 = defaultGetY;
      if (nodeSize === void 0)
        nodeSize = 64;
      if (ArrayType === void 0)
        ArrayType = Float64Array;
      this.nodeSize = nodeSize;
      this.points = points;
      var IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;
      var ids = this.ids = new IndexArrayType(points.length);
      var coords = this.coords = new ArrayType(points.length * 2);
      for (var i = 0; i < points.length; i++) {
        ids[i] = i;
        coords[2 * i] = getX2(points[i]);
        coords[2 * i + 1] = getY2(points[i]);
      }
      sortKD(ids, coords, nodeSize, 0, ids.length - 1, 0);
    };
    KDBush2.prototype.range = function range$1(minX, minY, maxX, maxY) {
      return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    };
    KDBush2.prototype.within = function within$1(x, y, r) {
      return within(this.ids, this.coords, x, y, r, this.nodeSize);
    };
    return KDBush2;
  });
})(kdbush);
var KDBush = kdbush.exports;
var defaultOptions$2 = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: false,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: false,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (props) => props
  // props => ({sum: props.my_value})
};
var fround = Math.fround || ((tmp) => (x) => {
  tmp[0] = +x;
  return tmp[0];
})(new Float32Array(1));
var Supercluster = class {
  constructor(options) {
    this.options = extend$1(Object.create(defaultOptions$2), options);
    this.trees = new Array(this.options.maxZoom + 1);
  }
  load(points) {
    const { log, minZoom, maxZoom, nodeSize } = this.options;
    if (log)
      console.time("total time");
    const timerId = `prepare ${points.length} points`;
    if (log)
      console.time(timerId);
    this.points = points;
    let clusters = [];
    for (let i = 0; i < points.length; i++) {
      if (!points[i].geometry)
        continue;
      clusters.push(createPointCluster(points[i], i));
    }
    this.trees[maxZoom + 1] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
    if (log)
      console.timeEnd(timerId);
    for (let z = maxZoom; z >= minZoom; z--) {
      const now = +Date.now();
      clusters = this._cluster(clusters, z);
      this.trees[z] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
      if (log)
        console.log("z%d: %d clusters in %dms", z, clusters.length, +Date.now() - now);
    }
    if (log)
      console.timeEnd("total time");
    return this;
  }
  getClusters(bbox, zoom) {
    let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    const minLat = Math.max(-90, Math.min(90, bbox[1]));
    let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    const maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360) {
      minLng = -180;
      maxLng = 180;
    } else if (minLng > maxLng) {
      const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
      const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    const tree = this.trees[this._limitZoom(zoom)];
    const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    const clusters = [];
    for (const id of ids) {
      const c = tree.points[id];
      clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    const originId = this._getOriginId(clusterId);
    const originZoom = this._getOriginZoom(clusterId);
    const errorMsg = "No cluster with the specified id.";
    const index = this.trees[originZoom];
    if (!index)
      throw new Error(errorMsg);
    const origin = index.points[originId];
    if (!origin)
      throw new Error(errorMsg);
    const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    const ids = index.within(origin.x, origin.y, r);
    const children = [];
    for (const id of ids) {
      const c = index.points[id];
      if (c.parentId === clusterId) {
        children.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
      }
    }
    if (children.length === 0)
      throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;
    const leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);
    return leaves;
  }
  getTile(z, x, y) {
    const tree = this.trees[this._limitZoom(z)];
    const z2 = Math.pow(2, z);
    const { extent, radius } = this.options;
    const p = radius / extent;
    const top = (y - p) / z2;
    const bottom = (y + 1 + p) / z2;
    const tile = {
      features: []
    };
    this._addTileFeatures(
      tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
      tree.points,
      x,
      y,
      z2,
      tile
    );
    if (x === 0) {
      this._addTileFeatures(
        tree.range(1 - p / z2, top, 1, bottom),
        tree.points,
        z2,
        y,
        z2,
        tile
      );
    }
    if (x === z2 - 1) {
      this._addTileFeatures(
        tree.range(0, top, p / z2, bottom),
        tree.points,
        -1,
        y,
        z2,
        tile
      );
    }
    return tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    let expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
      const children = this.getChildren(clusterId);
      expansionZoom++;
      if (children.length !== 1)
        break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    const children = this.getChildren(clusterId);
    for (const child of children) {
      const props = child.properties;
      if (props && props.cluster) {
        if (skipped + props.point_count <= offset) {
          skipped += props.point_count;
        } else {
          skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
        }
      } else if (skipped < offset) {
        skipped++;
      } else {
        result.push(child);
      }
      if (result.length === limit)
        break;
    }
    return skipped;
  }
  _addTileFeatures(ids, points, x, y, z2, tile) {
    for (const i of ids) {
      const c = points[i];
      const isCluster = c.numPoints;
      let tags, px, py;
      if (isCluster) {
        tags = getClusterProperties(c);
        px = c.x;
        py = c.y;
      } else {
        const p = this.points[c.index];
        tags = p.properties;
        px = lngX(p.geometry.coordinates[0]);
        py = latY(p.geometry.coordinates[1]);
      }
      const f = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (px * z2 - x)),
          Math.round(this.options.extent * (py * z2 - y))
        ]],
        tags
      };
      let id;
      if (isCluster) {
        id = c.id;
      } else if (this.options.generateId) {
        id = c.index;
      } else if (this.points[c.index].id) {
        id = this.points[c.index].id;
      }
      if (id !== void 0)
        f.id = id;
      tile.features.push(f);
    }
  }
  _limitZoom(z) {
    return Math.max(this.options.minZoom, Math.min(+z, this.options.maxZoom + 1));
  }
  _cluster(points, zoom) {
    const clusters = [];
    const { radius, extent, reduce: reduce2, minPoints } = this.options;
    const r = radius / (extent * Math.pow(2, zoom));
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (p.zoom <= zoom)
        continue;
      p.zoom = zoom;
      const tree = this.trees[zoom + 1];
      const neighborIds = tree.within(p.x, p.y, r);
      const numPointsOrigin = p.numPoints || 1;
      let numPoints = numPointsOrigin;
      for (const neighborId of neighborIds) {
        const b = tree.points[neighborId];
        if (b.zoom > zoom)
          numPoints += b.numPoints || 1;
      }
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        let wx = p.x * numPointsOrigin;
        let wy = p.y * numPointsOrigin;
        let clusterProperties = reduce2 && numPointsOrigin > 1 ? this._map(p, true) : null;
        const id = (i << 5) + (zoom + 1) + this.points.length;
        for (const neighborId of neighborIds) {
          const b = tree.points[neighborId];
          if (b.zoom <= zoom)
            continue;
          b.zoom = zoom;
          const numPoints2 = b.numPoints || 1;
          wx += b.x * numPoints2;
          wy += b.y * numPoints2;
          b.parentId = id;
          if (reduce2) {
            if (!clusterProperties)
              clusterProperties = this._map(p, true);
            reduce2(clusterProperties, this._map(b));
          }
        }
        p.parentId = id;
        clusters.push(createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));
      } else {
        clusters.push(p);
        if (numPoints > 1) {
          for (const neighborId of neighborIds) {
            const b = tree.points[neighborId];
            if (b.zoom <= zoom)
              continue;
            b.zoom = zoom;
            clusters.push(b);
          }
        }
      }
    }
    return clusters;
  }
  // get index of the point from which the cluster originated
  _getOriginId(clusterId) {
    return clusterId - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(clusterId) {
    return (clusterId - this.points.length) % 32;
  }
  _map(point, clone) {
    if (point.numPoints) {
      return clone ? extend$1({}, point.properties) : point.properties;
    }
    const original = this.points[point.index].properties;
    const result = this.options.map(original);
    return clone && result === original ? extend$1({}, result) : result;
  }
};
function createCluster(x, y, id, numPoints, properties) {
  return {
    x: fround(x),
    // weighted cluster center; round for consistency with Float32Array index
    y: fround(y),
    zoom: Infinity,
    // the last zoom the cluster was processed at
    id,
    // encodes index of the first child of the cluster and its zoom level
    parentId: -1,
    // parent cluster id
    numPoints,
    properties
  };
}
function createPointCluster(p, id) {
  const [x, y] = p.geometry.coordinates;
  return {
    x: fround(lngX(x)),
    // projected point coordinates
    y: fround(latY(y)),
    zoom: Infinity,
    // the last zoom the point was processed at
    index: id,
    // index of the source feature in the original input array,
    parentId: -1
    // parent cluster id
  };
}
function getClusterJSON(cluster) {
  return {
    type: "Feature",
    id: cluster.id,
    properties: getClusterProperties(cluster),
    geometry: {
      type: "Point",
      coordinates: [xLng(cluster.x), yLat(cluster.y)]
    }
  };
}
function getClusterProperties(cluster) {
  const count = cluster.numPoints;
  const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
  return extend$1(extend$1({}, cluster.properties), {
    cluster: true,
    cluster_id: cluster.id,
    point_count: count,
    point_count_abbreviated: abbrev
  });
}
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  const sin = Math.sin(lat * Math.PI / 180);
  const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y < 0 ? 0 : y > 1 ? 1 : y;
}
function xLng(x) {
  return (x - 0.5) * 360;
}
function yLat(y) {
  const y2 = (180 - y * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}
function extend$1(dest, src) {
  for (const id in src)
    dest[id] = src[id];
  return dest;
}
function getX(p) {
  return p.x;
}
function getY(p) {
  return p.y;
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var Cluster = class {
  constructor({ markers, position }) {
    this.markers = markers;
    if (position) {
      if (position instanceof google.maps.LatLng) {
        this._position = position;
      } else {
        this._position = new google.maps.LatLng(position);
      }
    }
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position) {
      return void 0;
    }
    return this.markers.reduce((bounds, marker) => {
      return bounds.extend(marker.getPosition());
    }, new google.maps.LatLngBounds(this._position, this._position));
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((m) => m.getVisible()).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(marker) {
    this.markers.push(marker);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    if (this.marker) {
      this.marker.setMap(null);
      delete this.marker;
    }
    this.markers.length = 0;
  }
};
var filterMarkersToPaddedViewport = (map, mapCanvasProjection, markers, viewportPadding) => {
  const extendedMapBounds = extendBoundsToPaddedViewport(map.getBounds(), mapCanvasProjection, viewportPadding);
  return markers.filter((marker) => extendedMapBounds.contains(marker.getPosition()));
};
var extendBoundsToPaddedViewport = (bounds, projection, pixels) => {
  const { northEast, southWest } = latLngBoundsToPixelBounds(bounds, projection);
  const extendedPixelBounds = extendPixelBounds({ northEast, southWest }, pixels);
  return pixelBoundsToLatLngBounds(extendedPixelBounds, projection);
};
var distanceBetweenPoints = (p1, p2) => {
  const R = 6371;
  const dLat = (p2.lat - p1.lat) * Math.PI / 180;
  const dLon = (p2.lng - p1.lng) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
var latLngBoundsToPixelBounds = (bounds, projection) => {
  return {
    northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
    southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest())
  };
};
var extendPixelBounds = ({ northEast, southWest }, pixels) => {
  northEast.x += pixels;
  northEast.y -= pixels;
  southWest.x -= pixels;
  southWest.y += pixels;
  return { northEast, southWest };
};
var pixelBoundsToLatLngBounds = ({ northEast, southWest }, projection) => {
  const bounds = new google.maps.LatLngBounds();
  bounds.extend(projection.fromDivPixelToLatLng(northEast));
  bounds.extend(projection.fromDivPixelToLatLng(southWest));
  return bounds;
};
var AbstractAlgorithm = class {
  constructor({ maxZoom = 16 }) {
    this.maxZoom = maxZoom;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers, map})
   *    }
   * }
   * ```
   */
  noop({ markers }) {
    return noop$1(markers);
  }
};
var AbstractViewportAlgorithm = class extends AbstractAlgorithm {
  constructor(_a) {
    var { viewportPadding = 60 } = _a, options = __rest(_a, ["viewportPadding"]);
    super(options);
    this.viewportPadding = 60;
    this.viewportPadding = viewportPadding;
  }
  calculate({ markers, map, mapCanvasProjection }) {
    if (map.getZoom() >= this.maxZoom) {
      return {
        clusters: this.noop({
          markers,
          map,
          mapCanvasProjection
        }),
        changed: false
      };
    }
    return {
      clusters: this.cluster({
        markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
        map,
        mapCanvasProjection
      })
    };
  }
};
var noop$1 = (markers) => {
  const clusters = markers.map((marker) => new Cluster({
    position: marker.getPosition(),
    markers: [marker]
  }));
  return clusters;
};
var GridAlgorithm = class extends AbstractViewportAlgorithm {
  constructor(_a) {
    var { maxDistance = 4e4, gridSize = 40 } = _a, options = __rest(_a, ["maxDistance", "gridSize"]);
    super(options);
    this.clusters = [];
    this.maxDistance = maxDistance;
    this.gridSize = gridSize;
    this.state = { zoom: null };
  }
  calculate({ markers, map, mapCanvasProjection }) {
    const state = { zoom: map.getZoom() };
    let changed = false;
    if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom)
      ;
    else {
      changed = !fastDeepEqual(this.state, state);
    }
    this.state = state;
    if (map.getZoom() >= this.maxZoom) {
      return {
        clusters: this.noop({
          markers,
          map,
          mapCanvasProjection
        }),
        changed
      };
    }
    return {
      clusters: this.cluster({
        markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
        map,
        mapCanvasProjection
      })
    };
  }
  cluster({ markers, map, mapCanvasProjection }) {
    this.clusters = [];
    markers.forEach((marker) => {
      this.addToClosestCluster(marker, map, mapCanvasProjection);
    });
    return this.clusters;
  }
  addToClosestCluster(marker, map, projection) {
    let maxDistance = this.maxDistance;
    let cluster = null;
    for (let i = 0; i < this.clusters.length; i++) {
      const candidate = this.clusters[i];
      const distance = distanceBetweenPoints(candidate.bounds.getCenter().toJSON(), marker.getPosition().toJSON());
      if (distance < maxDistance) {
        maxDistance = distance;
        cluster = candidate;
      }
    }
    if (cluster && extendBoundsToPaddedViewport(cluster.bounds, projection, this.gridSize).contains(marker.getPosition())) {
      cluster.push(marker);
    } else {
      const cluster2 = new Cluster({ markers: [marker] });
      this.clusters.push(cluster2);
    }
  }
};
var NoopAlgorithm = class extends AbstractAlgorithm {
  constructor(_a) {
    var options = __rest(_a, []);
    super(options);
  }
  calculate({ markers, map, mapCanvasProjection }) {
    return {
      clusters: this.cluster({ markers, map, mapCanvasProjection }),
      changed: false
    };
  }
  cluster(input) {
    return this.noop(input);
  }
};
var SuperClusterAlgorithm = class extends AbstractAlgorithm {
  constructor(_a) {
    var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
    super({ maxZoom });
    this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
    this.state = { zoom: null };
  }
  calculate(input) {
    let changed = false;
    if (!fastDeepEqual(input.markers, this.markers)) {
      changed = true;
      this.markers = [...input.markers];
      const points = this.markers.map((marker) => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              marker.getPosition().lng(),
              marker.getPosition().lat()
            ]
          },
          properties: { marker }
        };
      });
      this.superCluster.load(points);
    }
    const state = { zoom: input.map.getZoom() };
    if (!changed) {
      if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom)
        ;
      else {
        changed = changed || !fastDeepEqual(this.state, state);
      }
    }
    this.state = state;
    if (changed) {
      this.clusters = this.cluster(input);
    }
    return { clusters: this.clusters, changed };
  }
  cluster({ map }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map(this.transformCluster.bind(this));
  }
  transformCluster({ geometry: { coordinates: [lng, lat] }, properties }) {
    if (properties.cluster) {
      return new Cluster({
        markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf) => leaf.properties.marker),
        position: new google.maps.LatLng({ lat, lng })
      });
    } else {
      const marker = properties.marker;
      return new Cluster({
        markers: [marker],
        position: marker.getPosition()
      });
    }
  }
};
var ClusterStats = class {
  constructor(markers, clusters) {
    this.markers = { sum: markers.length };
    const clusterMarkerCounts = clusters.map((a) => a.count);
    const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
    this.clusters = {
      count: clusters.length,
      markers: {
        mean: clusterMarkerSum / clusters.length,
        sum: clusterMarkerSum,
        min: Math.min(...clusterMarkerCounts),
        max: Math.max(...clusterMarkerCounts)
      }
    };
  }
};
var DefaultRenderer = class {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({ count, position }, stats) {
    const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
    const svg = window.btoa(`
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);
    return new google.maps.Marker({
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new google.maps.Size(45, 45)
      },
      label: {
        text: String(count),
        color: "rgba(255,255,255,0.9)",
        fontSize: "12px"
      },
      title: `Cluster of ${count} markers`,
      // adjust zIndex to be above other markers
      zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count
    });
  }
};
function extend(type1, type2) {
  for (let property in type2.prototype) {
    type1.prototype[property] = type2.prototype[property];
  }
}
var OverlayViewSafe = class {
  constructor() {
    extend(OverlayViewSafe, google.maps.OverlayView);
  }
};
var MarkerClustererEvents;
(function(MarkerClustererEvents2) {
  MarkerClustererEvents2["CLUSTERING_BEGIN"] = "clusteringbegin";
  MarkerClustererEvents2["CLUSTERING_END"] = "clusteringend";
  MarkerClustererEvents2["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
var defaultOnClusterClickHandler = (_, cluster, map) => {
  map.fitBounds(cluster.bounds);
};
var MarkerClusterer = class extends OverlayViewSafe {
  constructor({ map, markers = [], algorithm = new SuperClusterAlgorithm({}), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler }) {
    super();
    this.markers = [...markers];
    this.clusters = [];
    this.algorithm = algorithm;
    this.renderer = renderer;
    this.onClusterClick = onClusterClick;
    if (map) {
      this.setMap(map);
    }
  }
  addMarker(marker, noDraw) {
    if (this.markers.includes(marker)) {
      return;
    }
    this.markers.push(marker);
    if (!noDraw) {
      this.render();
    }
  }
  addMarkers(markers, noDraw) {
    markers.forEach((marker) => {
      this.addMarker(marker, true);
    });
    if (!noDraw) {
      this.render();
    }
  }
  removeMarker(marker, noDraw) {
    const index = this.markers.indexOf(marker);
    if (index === -1) {
      return false;
    }
    marker.setMap(null);
    this.markers.splice(index, 1);
    if (!noDraw) {
      this.render();
    }
    return true;
  }
  removeMarkers(markers, noDraw) {
    let removed = false;
    markers.forEach((marker) => {
      removed = this.removeMarker(marker, true) || removed;
    });
    if (removed && !noDraw) {
      this.render();
    }
    return removed;
  }
  clearMarkers(noDraw) {
    this.markers.length = 0;
    if (!noDraw) {
      this.render();
    }
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const map = this.getMap();
    if (map instanceof google.maps.Map && this.getProjection()) {
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
      const { clusters, changed } = this.algorithm.calculate({
        markers: this.markers,
        map,
        mapCanvasProjection: this.getProjection()
      });
      if (changed || changed == void 0) {
        this.reset();
        this.clusters = clusters;
        this.renderClusters();
      }
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
    this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener);
    this.reset();
  }
  reset() {
    this.markers.forEach((marker) => marker.setMap(null));
    this.clusters.forEach((cluster) => cluster.delete());
    this.clusters = [];
  }
  renderClusters() {
    const stats = new ClusterStats(this.markers, this.clusters);
    const map = this.getMap();
    this.clusters.forEach((cluster) => {
      if (cluster.markers.length === 1) {
        cluster.marker = cluster.markers[0];
      } else {
        cluster.marker = this.renderer.render(cluster, stats);
        if (this.onClusterClick) {
          cluster.marker.addListener(
            "click",
            /* istanbul ignore next */
            (event) => {
              google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
              this.onClusterClick(event, cluster, map);
            }
          );
        }
      }
      cluster.marker.setMap(map);
    });
  }
};
var index_esm = Object.freeze({
  __proto__: null,
  AbstractAlgorithm,
  AbstractViewportAlgorithm,
  Cluster,
  ClusterStats,
  DefaultRenderer,
  GridAlgorithm,
  MarkerClusterer,
  get MarkerClustererEvents() {
    return MarkerClustererEvents;
  },
  NoopAlgorithm,
  SuperClusterAlgorithm,
  defaultOnClusterClickHandler,
  distanceBetweenPoints,
  extendBoundsToPaddedViewport,
  extendPixelBounds,
  filterMarkersToPaddedViewport,
  noop: noop$1,
  pixelBoundsToLatLngBounds
});
function useGoogleMarkerClusterer(options) {
  const map = useGoogleMap();
  const [markerClusterer, setMarkerClusterer] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (map && markerClusterer === null) {
      const markerCluster = new MarkerClusterer(Object.assign(Object.assign({}, options), { map }));
      setMarkerClusterer(markerCluster);
    }
  }, [map]);
  return markerClusterer;
}
function GoogleMarkerClusterer({ children, options }) {
  const markerClusterer = useGoogleMarkerClusterer(options);
  return markerClusterer !== null ? children(markerClusterer) : null;
}
var GoogleMarkerClusterer$1 = (0, import_react.memo)(GoogleMarkerClusterer);
var eventMap$c = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$c = {
  options(instance, options) {
    instance.setOptions(options);
  },
  position(instance, position) {
    instance.setPosition(position);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
function InfoWindowFunctional({ children, anchor, options, position, zIndex, onCloseClick, onDomReady, onContentChanged, onPositionChanged, onZindexChanged, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [closeclickListener, setCloseClickListener] = (0, import_react.useState)(null);
  const [domreadyclickListener, setDomReadyClickListener] = (0, import_react.useState)(null);
  const [contentchangedclickListener, setContentChangedClickListener] = (0, import_react.useState)(null);
  const [positionchangedclickListener, setPositionChangedClickListener] = (0, import_react.useState)(null);
  const [zindexchangedclickListener, setZindexChangedClickListener] = (0, import_react.useState)(null);
  const containerElementRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.close();
      if (anchor) {
        instance.open(map, anchor);
      } else if (instance.getPosition()) {
        instance.open(map);
      }
    }
  }, [map, instance, anchor]);
  (0, import_react.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (position && instance !== null) {
      instance.setPosition(position);
    }
  }, [position]);
  (0, import_react.useEffect)(() => {
    if (typeof zIndex === "number" && instance !== null) {
      instance.setZIndex(zIndex);
    }
  }, [zIndex]);
  (0, import_react.useEffect)(() => {
    if (instance && onCloseClick) {
      if (closeclickListener !== null) {
        google.maps.event.removeListener(closeclickListener);
      }
      setCloseClickListener(google.maps.event.addListener(instance, "closeclick", onCloseClick));
    }
  }, [onCloseClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDomReady) {
      if (domreadyclickListener !== null) {
        google.maps.event.removeListener(domreadyclickListener);
      }
      setDomReadyClickListener(google.maps.event.addListener(instance, "domready", onDomReady));
    }
  }, [onDomReady]);
  (0, import_react.useEffect)(() => {
    if (instance && onContentChanged) {
      if (contentchangedclickListener !== null) {
        google.maps.event.removeListener(contentchangedclickListener);
      }
      setContentChangedClickListener(google.maps.event.addListener(instance, "content_changed", onContentChanged));
    }
  }, [onContentChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onPositionChanged) {
      if (positionchangedclickListener !== null) {
        google.maps.event.removeListener(positionchangedclickListener);
      }
      setPositionChangedClickListener(google.maps.event.addListener(instance, "position_changed", onPositionChanged));
    }
  }, [onPositionChanged]);
  (0, import_react.useEffect)(() => {
    if (instance && onZindexChanged) {
      if (zindexchangedclickListener !== null) {
        google.maps.event.removeListener(zindexchangedclickListener);
      }
      setZindexChangedClickListener(google.maps.event.addListener(instance, "zindex_changed", onZindexChanged));
    }
  }, [onZindexChanged]);
  (0, import_react.useEffect)(() => {
    const infoWindow = new google.maps.InfoWindow(Object.assign({}, options || {}));
    setInstance(infoWindow);
    containerElementRef.current = document.createElement("div");
    if (onCloseClick) {
      setCloseClickListener(google.maps.event.addListener(infoWindow, "closeclick", onCloseClick));
    }
    if (onDomReady) {
      setDomReadyClickListener(google.maps.event.addListener(infoWindow, "domready", onDomReady));
    }
    if (onContentChanged) {
      setContentChangedClickListener(google.maps.event.addListener(infoWindow, "content_changed", onContentChanged));
    }
    if (onPositionChanged) {
      setPositionChangedClickListener(google.maps.event.addListener(infoWindow, "position_changed", onPositionChanged));
    }
    if (onZindexChanged) {
      setZindexChangedClickListener(google.maps.event.addListener(infoWindow, "zindex_changed", onZindexChanged));
    }
    infoWindow.setContent(containerElementRef.current);
    if (position) {
      infoWindow.setPosition(position);
    }
    if (zIndex) {
      infoWindow.setZIndex(zIndex);
    }
    if (anchor) {
      infoWindow.open(map, anchor);
    } else if (infoWindow.getPosition()) {
      infoWindow.open(map);
    } else {
      invariant_1(false, `You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.`);
    }
    if (onLoad) {
      onLoad(infoWindow);
    }
    return () => {
      if (closeclickListener) {
        google.maps.event.removeListener(closeclickListener);
      }
      if (contentchangedclickListener) {
        google.maps.event.removeListener(contentchangedclickListener);
      }
      if (domreadyclickListener) {
        google.maps.event.removeListener(domreadyclickListener);
      }
      if (positionchangedclickListener) {
        google.maps.event.removeListener(positionchangedclickListener);
      }
      if (zindexchangedclickListener) {
        google.maps.event.removeListener(zindexchangedclickListener);
      }
      if (onUnmount) {
        onUnmount(infoWindow);
      }
      infoWindow.close();
    };
  }, []);
  return containerElementRef.current ? (0, import_react_dom.createPortal)(import_react.Children.only(children), containerElementRef.current) : null;
}
var InfoWindowF = (0, import_react.memo)(InfoWindowFunctional);
var InfoWindow = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.containerElement = null;
    this.state = {
      infoWindow: null
    };
    this.open = (infoWindow, anchor) => {
      if (anchor) {
        infoWindow.open(this.context, anchor);
      } else if (infoWindow.getPosition()) {
        infoWindow.open(this.context);
      } else {
        invariant_1(false, `You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.`);
      }
    };
    this.setInfoWindowCallback = () => {
      if (this.state.infoWindow !== null && this.containerElement !== null) {
        this.state.infoWindow.setContent(this.containerElement);
        this.open(this.state.infoWindow, this.props.anchor);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.infoWindow);
        }
      }
    };
  }
  componentDidMount() {
    const infoWindow = new google.maps.InfoWindow(Object.assign({}, this.props.options || {}));
    this.containerElement = document.createElement("div");
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$c,
      eventMap: eventMap$c,
      prevProps: {},
      nextProps: this.props,
      instance: infoWindow
    });
    this.setState(() => {
      return {
        infoWindow
      };
    }, this.setInfoWindowCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$c,
        eventMap: eventMap$c,
        prevProps,
        nextProps: this.props,
        instance: this.state.infoWindow
      });
    }
  }
  componentWillUnmount() {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.infoWindow);
      }
      this.state.infoWindow.close();
    }
  }
  render() {
    return this.containerElement ? (0, import_react_dom.createPortal)(import_react.Children.only(this.props.children), this.containerElement) : null;
  }
};
InfoWindow.contextType = MapContext;
var eventMap$b = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$b = {
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  path(instance, path) {
    instance.setPath(path);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
var defaultOptions$1 = {};
function PolylineFunctional({ options, draggable, editable, visible, path, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [dblclickListener, setDblclickListener] = (0, import_react.useState)(null);
  const [dragendListener, setDragendListener] = (0, import_react.useState)(null);
  const [dragstartListener, setDragstartListener] = (0, import_react.useState)(null);
  const [mousedownListener, setMousedownListener] = (0, import_react.useState)(null);
  const [mousemoveListener, setMousemoveListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  const [mouseupListener, setMouseupListener] = (0, import_react.useState)(null);
  const [rightclickListener, setRightclickListener] = (0, import_react.useState)(null);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [dragListener, setDragListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0, import_react.useEffect)(() => {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0, import_react.useEffect)(() => {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0, import_react.useEffect)(() => {
    if (typeof path !== "undefined" && instance !== null) {
      instance.setPath(path);
    }
  }, [instance, path]);
  (0, import_react.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  (0, import_react.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  (0, import_react.useEffect)(() => {
    const polyline = new google.maps.Polyline(Object.assign(Object.assign({}, options || defaultOptions$1), { map }));
    if (path) {
      polyline.setPath(path);
    }
    if (typeof visible !== "undefined") {
      polyline.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      polyline.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      polyline.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(polyline, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(polyline, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(polyline, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(polyline, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(polyline, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(polyline, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(polyline, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(polyline, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(polyline, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(polyline, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(polyline, "drag", onDrag));
    }
    setInstance(polyline);
    if (onLoad) {
      onLoad(polyline);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (onUnmount) {
        onUnmount(polyline);
      }
      polyline.setMap(null);
    };
  }, []);
  return null;
}
var PolylineF = (0, import_react.memo)(PolylineFunctional);
var Polyline = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      polyline: null
    };
    this.setPolylineCallback = () => {
      if (this.state.polyline !== null && this.props.onLoad) {
        this.props.onLoad(this.state.polyline);
      }
    };
  }
  componentDidMount() {
    const polyline = new google.maps.Polyline(Object.assign(Object.assign({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$b,
      eventMap: eventMap$b,
      prevProps: {},
      nextProps: this.props,
      instance: polyline
    });
    this.setState(function setPolyline() {
      return {
        polyline
      };
    }, this.setPolylineCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.polyline !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$b,
        eventMap: eventMap$b,
        prevProps,
        nextProps: this.props,
        instance: this.state.polyline
      });
    }
  }
  componentWillUnmount() {
    if (this.state.polyline !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polyline);
      }
      unregisterEvents(this.registeredEvents);
      this.state.polyline.setMap(null);
    }
  }
  render() {
    return null;
  }
};
Polyline.contextType = MapContext;
var eventMap$a = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$a = {
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  path(instance, path) {
    instance.setPath(path);
  },
  paths(instance, paths) {
    instance.setPaths(paths);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
function PolygonFunctional({ options, draggable, editable, visible, path, paths, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [dblclickListener, setDblclickListener] = (0, import_react.useState)(null);
  const [dragendListener, setDragendListener] = (0, import_react.useState)(null);
  const [dragstartListener, setDragstartListener] = (0, import_react.useState)(null);
  const [mousedownListener, setMousedownListener] = (0, import_react.useState)(null);
  const [mousemoveListener, setMousemoveListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  const [mouseupListener, setMouseupListener] = (0, import_react.useState)(null);
  const [rightclickListener, setRightclickListener] = (0, import_react.useState)(null);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [dragListener, setDragListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0, import_react.useEffect)(() => {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0, import_react.useEffect)(() => {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0, import_react.useEffect)(() => {
    if (typeof path !== "undefined" && instance !== null) {
      instance.setPath(path);
    }
  }, [instance, path]);
  (0, import_react.useEffect)(() => {
    if (typeof paths !== "undefined" && instance !== null) {
      instance.setPaths(paths);
    }
  }, [instance, paths]);
  (0, import_react.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  (0, import_react.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  (0, import_react.useEffect)(() => {
    const polygon = new google.maps.Polygon(Object.assign(Object.assign({}, options || {}), { map }));
    if (path) {
      polygon.setPath(path);
    }
    if (paths) {
      polygon.setPaths(paths);
    }
    if (typeof visible !== "undefined") {
      polygon.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      polygon.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      polygon.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(polygon, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(polygon, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(polygon, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(polygon, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(polygon, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(polygon, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(polygon, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(polygon, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(polygon, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(polygon, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(polygon, "drag", onDrag));
    }
    setInstance(polygon);
    if (onLoad) {
      onLoad(polygon);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (onUnmount) {
        onUnmount(polygon);
      }
      polygon.setMap(null);
    };
  }, []);
  return null;
}
var PolygonF = (0, import_react.memo)(PolygonFunctional);
var Polygon = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      polygon: null
    };
    this.setPolygonCallback = () => {
      if (this.state.polygon !== null && this.props.onLoad) {
        this.props.onLoad(this.state.polygon);
      }
    };
  }
  componentDidMount() {
    const polygon = new google.maps.Polygon(Object.assign(Object.assign({}, this.props.options || {}), {
      // @ts-ignore
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$a,
      eventMap: eventMap$a,
      prevProps: {},
      nextProps: this.props,
      instance: polygon
    });
    this.setState(function setPolygon() {
      return {
        polygon
      };
    }, this.setPolygonCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.polygon !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$a,
        eventMap: eventMap$a,
        prevProps,
        nextProps: this.props,
        instance: this.state.polygon
      });
    }
  }
  componentWillUnmount() {
    if (this.state.polygon !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polygon);
      }
      unregisterEvents(this.registeredEvents);
      this.state.polygon && this.state.polygon.setMap(null);
    }
  }
  render() {
    return null;
  }
};
Polygon.contextType = MapContext;
var eventMap$9 = {
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$9 = {
  bounds(instance, bounds) {
    instance.setBounds(bounds);
  },
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
function RectangleFunctional({ options, bounds, draggable, editable, visible, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onBoundsChanged, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [dblclickListener, setDblclickListener] = (0, import_react.useState)(null);
  const [dragendListener, setDragendListener] = (0, import_react.useState)(null);
  const [dragstartListener, setDragstartListener] = (0, import_react.useState)(null);
  const [mousedownListener, setMousedownListener] = (0, import_react.useState)(null);
  const [mousemoveListener, setMousemoveListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  const [mouseupListener, setMouseupListener] = (0, import_react.useState)(null);
  const [rightclickListener, setRightclickListener] = (0, import_react.useState)(null);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [dragListener, setDragListener] = (0, import_react.useState)(null);
  const [boundsChangedListener, setBoundsChangedListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0, import_react.useEffect)(() => {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0, import_react.useEffect)(() => {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0, import_react.useEffect)(() => {
    if (typeof bounds !== "undefined" && instance !== null) {
      instance.setBounds(bounds);
    }
  }, [instance, bounds]);
  (0, import_react.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  (0, import_react.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  (0, import_react.useEffect)(() => {
    if (instance && onBoundsChanged) {
      if (boundsChangedListener !== null) {
        google.maps.event.removeListener(boundsChangedListener);
      }
      setBoundsChangedListener(google.maps.event.addListener(instance, "bounds_changed", onBoundsChanged));
    }
  }, [onBoundsChanged]);
  (0, import_react.useEffect)(() => {
    const rectangle = new google.maps.Rectangle(Object.assign(Object.assign({}, options || {}), { map }));
    if (typeof visible !== "undefined") {
      rectangle.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      rectangle.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      rectangle.setDraggable(draggable);
    }
    if (typeof bounds !== "undefined") {
      rectangle.setBounds(bounds);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(rectangle, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(rectangle, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(rectangle, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(rectangle, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(rectangle, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(rectangle, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(rectangle, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(rectangle, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(rectangle, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(rectangle, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(rectangle, "drag", onDrag));
    }
    if (onBoundsChanged) {
      setBoundsChangedListener(google.maps.event.addListener(rectangle, "bounds_changed", onBoundsChanged));
    }
    setInstance(rectangle);
    if (onLoad) {
      onLoad(rectangle);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      if (boundsChangedListener !== null) {
        google.maps.event.removeListener(boundsChangedListener);
      }
      if (onUnmount) {
        onUnmount(rectangle);
      }
      rectangle.setMap(null);
    };
  }, []);
  return null;
}
var RectangleF = (0, import_react.memo)(RectangleFunctional);
var Rectangle = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      rectangle: null
    };
    this.setRectangleCallback = () => {
      if (this.state.rectangle !== null && this.props.onLoad) {
        this.props.onLoad(this.state.rectangle);
      }
    };
  }
  componentDidMount() {
    const rectangle = new google.maps.Rectangle(Object.assign(Object.assign({}, this.props.options || {}), {
      // @ts-ignore
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$9,
      eventMap: eventMap$9,
      prevProps: {},
      nextProps: this.props,
      instance: rectangle
    });
    this.setState(function setRectangle() {
      return {
        rectangle
      };
    }, this.setRectangleCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.rectangle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$9,
        eventMap: eventMap$9,
        prevProps,
        nextProps: this.props,
        instance: this.state.rectangle
      });
    }
  }
  componentWillUnmount() {
    if (this.state.rectangle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.rectangle);
      }
      unregisterEvents(this.registeredEvents);
      this.state.rectangle.setMap(null);
    }
  }
  render() {
    return null;
  }
};
Rectangle.contextType = MapContext;
var eventMap$8 = {
  onCenterChanged: "center_changed",
  onRadiusChanged: "radius_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$8 = {
  center(instance, center) {
    instance.setCenter(center);
  },
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  radius(instance, radius) {
    instance.setRadius(radius);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
var defaultOptions = {};
function CircleFunctional({ options, center, radius, draggable, editable, visible, onDblClick, onDragEnd, onDragStart, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onClick, onDrag, onCenterChanged, onRadiusChanged, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [dblclickListener, setDblclickListener] = (0, import_react.useState)(null);
  const [dragendListener, setDragendListener] = (0, import_react.useState)(null);
  const [dragstartListener, setDragstartListener] = (0, import_react.useState)(null);
  const [mousedownListener, setMousedownListener] = (0, import_react.useState)(null);
  const [mousemoveListener, setMousemoveListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  const [mouseupListener, setMouseupListener] = (0, import_react.useState)(null);
  const [rightclickListener, setRightclickListener] = (0, import_react.useState)(null);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [dragListener, setDragListener] = (0, import_react.useState)(null);
  const [centerChangedListener, setCenterChangedListener] = (0, import_react.useState)(null);
  const [radiusChangedListener, setRadiusChangedListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (typeof options !== "undefined" && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    if (typeof draggable !== "undefined" && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0, import_react.useEffect)(() => {
    if (typeof editable !== "undefined" && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0, import_react.useEffect)(() => {
    if (typeof visible !== "undefined" && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0, import_react.useEffect)(() => {
    if (typeof radius === "number" && instance !== null) {
      instance.setRadius(radius);
    }
  }, [instance, radius]);
  (0, import_react.useEffect)(() => {
    if (typeof center !== "undefined" && instance !== null) {
      instance.setCenter(center);
    }
  }, [instance, center]);
  (0, import_react.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, "dragend", onDragEnd));
    }
  }, [onDragEnd]);
  (0, import_react.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, "dragstart", onDragStart));
    }
  }, [onDragStart]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  (0, import_react.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, "drag", onDrag));
    }
  }, [onDrag]);
  (0, import_react.useEffect)(() => {
    if (instance && onCenterChanged) {
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      setCenterChangedListener(google.maps.event.addListener(instance, "center_changed", onCenterChanged));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onRadiusChanged) {
      if (radiusChangedListener !== null) {
        google.maps.event.removeListener(radiusChangedListener);
      }
      setRadiusChangedListener(google.maps.event.addListener(instance, "radius_changed", onRadiusChanged));
    }
  }, [onRadiusChanged]);
  (0, import_react.useEffect)(() => {
    const circle = new google.maps.Circle(Object.assign(Object.assign({}, options || defaultOptions), { map }));
    if (typeof radius === "number") {
      circle.setRadius(radius);
    }
    if (typeof center !== "undefined") {
      circle.setCenter(center);
    }
    if (typeof radius === "number") {
      circle.setRadius(radius);
    }
    if (typeof visible !== "undefined") {
      circle.setVisible(visible);
    }
    if (typeof editable !== "undefined") {
      circle.setEditable(editable);
    }
    if (typeof draggable !== "undefined") {
      circle.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(circle, "dblclick", onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(circle, "dragend", onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(circle, "dragstart", onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(circle, "mousedown", onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(circle, "mousemove", onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(circle, "mouseout", onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(circle, "mouseover", onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(circle, "mouseup", onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(circle, "rightclick", onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(circle, "click", onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(circle, "drag", onDrag));
    }
    if (onCenterChanged) {
      setCenterChangedListener(google.maps.event.addListener(circle, "center_changed", onCenterChanged));
    }
    if (onRadiusChanged) {
      setRadiusChangedListener(google.maps.event.addListener(circle, "radius_changed", onRadiusChanged));
    }
    setInstance(circle);
    if (onLoad) {
      onLoad(circle);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      if (radiusChangedListener !== null) {
        google.maps.event.removeListener(radiusChangedListener);
      }
      if (onUnmount) {
        onUnmount(circle);
      }
      circle.setMap(null);
    };
  }, []);
  return null;
}
var CircleF = (0, import_react.memo)(CircleFunctional);
var Circle = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      circle: null
    };
    this.setCircleCallback = () => {
      if (this.state.circle !== null && this.props.onLoad) {
        this.props.onLoad(this.state.circle);
      }
    };
  }
  componentDidMount() {
    const circle = new google.maps.Circle(Object.assign(Object.assign({}, this.props.options || {}), {
      // @ts-ignore
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$8,
      eventMap: eventMap$8,
      prevProps: {},
      nextProps: this.props,
      instance: circle
    });
    this.setState(function setCircle() {
      return {
        circle
      };
    }, this.setCircleCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.circle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$8,
        eventMap: eventMap$8,
        prevProps,
        nextProps: this.props,
        instance: this.state.circle
      });
    }
  }
  componentWillUnmount() {
    if (this.state.circle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.circle);
      }
      unregisterEvents(this.registeredEvents);
      this.state.circle && this.state.circle.setMap(null);
    }
  }
  render() {
    return null;
  }
};
Circle.contextType = MapContext;
var eventMap$7 = {
  onClick: "click",
  onDblClick: "dblclick",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAddFeature: "addfeature",
  onRemoveFeature: "removefeature",
  onRemoveProperty: "removeproperty",
  onSetGeometry: "setgeometry",
  onSetProperty: "setproperty"
};
var updaterMap$7 = {
  add(instance, feature) {
    instance.add(feature);
  },
  addgeojson(instance, geojson, options) {
    instance.addGeoJson(geojson, options);
  },
  contains(instance, feature) {
    instance.contains(feature);
  },
  foreach(instance, callback) {
    instance.forEach(callback);
  },
  loadgeojson(instance, url, options, callback) {
    instance.loadGeoJson(url, options, callback);
  },
  overridestyle(instance, feature, style) {
    instance.overrideStyle(feature, style);
  },
  remove(instance, feature) {
    instance.remove(feature);
  },
  revertstyle(instance, feature) {
    instance.revertStyle(feature);
  },
  controlposition(instance, controlPosition) {
    instance.setControlPosition(controlPosition);
  },
  controls(instance, controls) {
    instance.setControls(controls);
  },
  drawingmode(instance, mode) {
    instance.setDrawingMode(mode);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  style(instance, style) {
    instance.setStyle(style);
  },
  togeojson(instance, callback) {
    instance.toGeoJson(callback);
  }
};
function DataFunctional({ options, onClick, onDblClick, onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onRightClick, onAddFeature, onRemoveFeature, onRemoveProperty, onSetGeometry, onSetProperty, onLoad, onUnmount }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  const [dblclickListener, setDblclickListener] = (0, import_react.useState)(null);
  const [mousedownListener, setMousedownListener] = (0, import_react.useState)(null);
  const [mousemoveListener, setMousemoveListener] = (0, import_react.useState)(null);
  const [mouseoutListener, setMouseoutListener] = (0, import_react.useState)(null);
  const [mouseoverListener, setMouseoverListener] = (0, import_react.useState)(null);
  const [mouseupListener, setMouseupListener] = (0, import_react.useState)(null);
  const [rightclickListener, setRightclickListener] = (0, import_react.useState)(null);
  const [clickListener, setClickListener] = (0, import_react.useState)(null);
  const [addFeatureListener, setAddFeatureListener] = (0, import_react.useState)(null);
  const [removeFeatureListener, setRemoveFeatureListener] = (0, import_react.useState)(null);
  const [removePropertyListener, setRemovePropertyListener] = (0, import_react.useState)(null);
  const [setGeometryListener, setSetGeometryListener] = (0, import_react.useState)(null);
  const [setPropertyListener, setSetPropertyListener] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, "dblclick", onDblClick));
    }
  }, [onDblClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, "mousedown", onMouseDown));
    }
  }, [onMouseDown]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, "mousemove", onMouseMove));
    }
  }, [onMouseMove]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, "mouseout", onMouseOut));
    }
  }, [onMouseOut]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, "mouseover", onMouseOver));
    }
  }, [onMouseOver]);
  (0, import_react.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, "mouseup", onMouseUp));
    }
  }, [onMouseUp]);
  (0, import_react.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, "rightclick", onRightClick));
    }
  }, [onRightClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, "click", onClick));
    }
  }, [onClick]);
  (0, import_react.useEffect)(() => {
    if (instance && onAddFeature) {
      if (addFeatureListener !== null) {
        google.maps.event.removeListener(addFeatureListener);
      }
      setAddFeatureListener(google.maps.event.addListener(instance, "addfeature", onAddFeature));
    }
  }, [onAddFeature]);
  (0, import_react.useEffect)(() => {
    if (instance && onRemoveFeature) {
      if (removeFeatureListener !== null) {
        google.maps.event.removeListener(removeFeatureListener);
      }
      setRemoveFeatureListener(google.maps.event.addListener(instance, "removefeature", onRemoveFeature));
    }
  }, [onRemoveFeature]);
  (0, import_react.useEffect)(() => {
    if (instance && onRemoveProperty) {
      if (removePropertyListener !== null) {
        google.maps.event.removeListener(removePropertyListener);
      }
      setRemovePropertyListener(google.maps.event.addListener(instance, "removeproperty", onRemoveProperty));
    }
  }, [onRemoveProperty]);
  (0, import_react.useEffect)(() => {
    if (instance && onSetGeometry) {
      if (setGeometryListener !== null) {
        google.maps.event.removeListener(setGeometryListener);
      }
      setSetGeometryListener(google.maps.event.addListener(instance, "setgeometry", onSetGeometry));
    }
  }, [onSetGeometry]);
  (0, import_react.useEffect)(() => {
    if (instance && onSetProperty) {
      if (setPropertyListener !== null) {
        google.maps.event.removeListener(setPropertyListener);
      }
      setSetPropertyListener(google.maps.event.addListener(instance, "setproperty", onSetProperty));
    }
  }, [onSetProperty]);
  (0, import_react.useEffect)(() => {
    if (map !== null) {
      const data = new google.maps.Data(Object.assign(Object.assign({}, options || {}), { map }));
      if (onDblClick) {
        setDblclickListener(google.maps.event.addListener(data, "dblclick", onDblClick));
      }
      if (onMouseDown) {
        setMousedownListener(google.maps.event.addListener(data, "mousedown", onMouseDown));
      }
      if (onMouseMove) {
        setMousemoveListener(google.maps.event.addListener(data, "mousemove", onMouseMove));
      }
      if (onMouseOut) {
        setMouseoutListener(google.maps.event.addListener(data, "mouseout", onMouseOut));
      }
      if (onMouseOver) {
        setMouseoverListener(google.maps.event.addListener(data, "mouseover", onMouseOver));
      }
      if (onMouseUp) {
        setMouseupListener(google.maps.event.addListener(data, "mouseup", onMouseUp));
      }
      if (onRightClick) {
        setRightclickListener(google.maps.event.addListener(data, "rightclick", onRightClick));
      }
      if (onClick) {
        setClickListener(google.maps.event.addListener(data, "click", onClick));
      }
      if (onAddFeature) {
        setAddFeatureListener(google.maps.event.addListener(data, "addfeature", onAddFeature));
      }
      if (onRemoveFeature) {
        setRemoveFeatureListener(google.maps.event.addListener(data, "removefeature", onRemoveFeature));
      }
      if (onRemoveProperty) {
        setRemovePropertyListener(google.maps.event.addListener(data, "removeproperty", onRemoveProperty));
      }
      if (onSetGeometry) {
        setSetGeometryListener(google.maps.event.addListener(data, "setgeometry", onSetGeometry));
      }
      if (onSetProperty) {
        setSetPropertyListener(google.maps.event.addListener(data, "setproperty", onSetProperty));
      }
      setInstance(data);
      if (onLoad) {
        onLoad(data);
      }
    }
    return () => {
      if (instance) {
        if (dblclickListener !== null) {
          google.maps.event.removeListener(dblclickListener);
        }
        if (mousedownListener !== null) {
          google.maps.event.removeListener(mousedownListener);
        }
        if (mousemoveListener !== null) {
          google.maps.event.removeListener(mousemoveListener);
        }
        if (mouseoutListener !== null) {
          google.maps.event.removeListener(mouseoutListener);
        }
        if (mouseoverListener !== null) {
          google.maps.event.removeListener(mouseoverListener);
        }
        if (mouseupListener !== null) {
          google.maps.event.removeListener(mouseupListener);
        }
        if (rightclickListener !== null) {
          google.maps.event.removeListener(rightclickListener);
        }
        if (clickListener !== null) {
          google.maps.event.removeListener(clickListener);
        }
        if (addFeatureListener !== null) {
          google.maps.event.removeListener(addFeatureListener);
        }
        if (removeFeatureListener !== null) {
          google.maps.event.removeListener(removeFeatureListener);
        }
        if (removePropertyListener !== null) {
          google.maps.event.removeListener(removePropertyListener);
        }
        if (setGeometryListener !== null) {
          google.maps.event.removeListener(setGeometryListener);
        }
        if (setPropertyListener !== null) {
          google.maps.event.removeListener(setPropertyListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var DataF = (0, import_react.memo)(DataFunctional);
var Data = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      data: null
    };
    this.setDataCallback = () => {
      if (this.state.data !== null && this.props.onLoad) {
        this.props.onLoad(this.state.data);
      }
    };
  }
  componentDidMount() {
    if (this.context !== null) {
      const data = new google.maps.Data(Object.assign(Object.assign({}, this.props.options || {}), { map: this.context }));
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps: {},
        nextProps: this.props,
        instance: data
      });
      this.setState(() => {
        return {
          data
        };
      }, this.setDataCallback);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.data !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps,
        nextProps: this.props,
        instance: this.state.data
      });
    }
  }
  componentWillUnmount() {
    if (this.state.data !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.data);
      }
      unregisterEvents(this.registeredEvents);
      if (this.state.data) {
        this.state.data.setMap(null);
      }
    }
  }
  render() {
    return null;
  }
};
Data.contextType = MapContext;
var eventMap$6 = {
  onClick: "click",
  onDefaultViewportChanged: "defaultviewport_changed",
  onStatusChanged: "status_changed"
};
var updaterMap$6 = {
  options(instance, options) {
    instance.setOptions(options);
  },
  url(instance, url) {
    instance.setUrl(url);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
var KmlLayer = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      kmlLayer: null
    };
    this.setKmlLayerCallback = () => {
      if (this.state.kmlLayer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.kmlLayer);
      }
    };
  }
  componentDidMount() {
    const kmlLayer = new google.maps.KmlLayer(Object.assign(Object.assign({}, this.props.options), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$6,
      eventMap: eventMap$6,
      prevProps: {},
      nextProps: this.props,
      instance: kmlLayer
    });
    this.setState(function setLmlLayer() {
      return {
        kmlLayer
      };
    }, this.setKmlLayerCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.kmlLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$6,
        eventMap: eventMap$6,
        prevProps,
        nextProps: this.props,
        instance: this.state.kmlLayer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.kmlLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.kmlLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.kmlLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
};
KmlLayer.contextType = MapContext;
function getOffsetOverride(containerElement, getPixelPositionOffset) {
  return typeof getPixelPositionOffset === "function" ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight) : {
    x: 0,
    y: 0
  };
}
function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
}
function createLatLngBounds(inst, Type) {
  return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
}
function ensureOfType(inst, type, factory) {
  return inst instanceof type ? inst : factory(inst, type);
}
function ensureOfTypeBounds(inst, type, factory) {
  return inst instanceof type ? inst : factory(inst, type);
}
function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  const ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  const sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
  if (ne && sw) {
    return {
      left: `${sw.x + offset.x}px`,
      top: `${ne.y + offset.y}px`,
      width: `${ne.x - sw.x - offset.x}px`,
      height: `${sw.y - ne.y - offset.y}px`
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  const point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);
  if (point) {
    const { x, y } = point;
    return {
      left: `${x + offset.x}px`,
      top: `${y + offset.y}px`
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function getLayoutStyles(mapCanvasProjection, offset, bounds, position) {
  return bounds !== void 0 ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfTypeBounds(bounds, google.maps.LatLngBounds, createLatLngBounds)) : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
}
function arePositionsEqual(currentPosition, previousPosition) {
  return currentPosition.left === previousPosition.left && currentPosition.top === previousPosition.top && currentPosition.width === previousPosition.height && currentPosition.height === previousPosition.height;
}
function createOverlay(container, pane, position, bounds, getPixelPositionOffset) {
  class Overlay extends google.maps.OverlayView {
    constructor(container2, pane2, position2, bounds2) {
      super();
      this.container = container2;
      this.pane = pane2;
      this.position = position2;
      this.bounds = bounds2;
    }
    onAdd() {
      var _a;
      const pane2 = (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a[this.pane];
      pane2 === null || pane2 === void 0 ? void 0 : pane2.appendChild(this.container);
    }
    draw() {
      const projection = this.getProjection();
      const offset = Object.assign({}, this.container ? getOffsetOverride(this.container, getPixelPositionOffset) : {
        x: 0,
        y: 0
      });
      const layoutStyles = getLayoutStyles(projection, offset, this.bounds, this.position);
      for (const [key, value] of Object.entries(layoutStyles)) {
        this.container.style[key] = value;
      }
    }
    onRemove() {
      if (this.container.parentNode !== null) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  }
  return new Overlay(container, pane, position, bounds);
}
function convertToLatLngString(latLngLike) {
  if (!latLngLike) {
    return "";
  }
  const latLng = latLngLike instanceof google.maps.LatLng ? latLngLike : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
  return latLng + "";
}
function convertToLatLngBoundsString(latLngBoundsLike) {
  if (!latLngBoundsLike) {
    return "";
  }
  const latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds ? latLngBoundsLike : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
  return latLngBounds + "";
}
var FLOAT_PANE = `floatPane`;
var MAP_PANE = `mapPane`;
var MARKER_LAYER = `markerLayer`;
var OVERLAY_LAYER = `overlayLayer`;
var OVERLAY_MOUSE_TARGET = `overlayMouseTarget`;
function OverlayViewFunctional({ position, bounds, mapPaneName, zIndex, onLoad, onUnmount, getPixelPositionOffset, children }) {
  const map = (0, import_react.useContext)(MapContext);
  const container = (0, import_react.useMemo)(() => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    return div;
  }, []);
  const overlay = (0, import_react.useMemo)(() => {
    return createOverlay(container, mapPaneName, position, bounds, getPixelPositionOffset);
  }, [container, mapPaneName, position, bounds]);
  (0, import_react.useEffect)(() => {
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(overlay);
    overlay === null || overlay === void 0 ? void 0 : overlay.setMap(map);
    return () => {
      onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(overlay);
      overlay === null || overlay === void 0 ? void 0 : overlay.setMap(null);
    };
  }, [map, overlay]);
  (0, import_react.useEffect)(() => {
    container.style.zIndex = `${zIndex}`;
  }, [zIndex, container]);
  return ReactDOM.createPortal(children, container);
}
var OverlayViewF = (0, import_react.memo)(OverlayViewFunctional);
var OverlayView = class extends import_react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paneEl: null,
      containerStyle: {
        // set initial position
        position: "absolute"
      }
    };
    this.updatePane = () => {
      const mapPaneName = this.props.mapPaneName;
      const mapPanes = this.overlayView.getPanes();
      invariant_1(!!mapPaneName, `OverlayView requires props.mapPaneName but got %s`, mapPaneName);
      if (mapPanes) {
        this.setState({
          paneEl: mapPanes[mapPaneName]
        });
      } else {
        this.setState({
          paneEl: null
        });
      }
    };
    this.onAdd = () => {
      var _a, _b;
      this.updatePane();
      (_b = (_a = this.props).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a, this.overlayView);
    };
    this.onPositionElement = () => {
      const mapCanvasProjection = this.overlayView.getProjection();
      const offset = Object.assign({ x: 0, y: 0 }, this.containerRef.current ? getOffsetOverride(this.containerRef.current, this.props.getPixelPositionOffset) : {});
      const layoutStyles = getLayoutStyles(mapCanvasProjection, offset, this.props.bounds, this.props.position);
      const { left, top, width, height } = this.state.containerStyle;
      if (!arePositionsEqual(layoutStyles, { left, top, width, height })) {
        this.setState({
          containerStyle: Object.assign(Object.assign({}, layoutStyles), { position: "absolute" })
        });
      }
    };
    this.draw = () => {
      this.onPositionElement();
    };
    this.onRemove = () => {
      var _a, _b;
      this.setState(() => ({
        paneEl: null
      }));
      (_b = (_a = this.props).onUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, this.overlayView);
    };
    this.containerRef = (0, import_react.createRef)();
    const overlayView = new google.maps.OverlayView();
    overlayView.onAdd = this.onAdd;
    overlayView.draw = this.draw;
    overlayView.onRemove = this.onRemove;
    this.overlayView = overlayView;
  }
  componentDidMount() {
    this.overlayView.setMap(this.context);
  }
  componentDidUpdate(prevProps) {
    const prevPositionString = convertToLatLngString(prevProps.position);
    const positionString = convertToLatLngString(this.props.position);
    const prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
    const boundsString = convertToLatLngBoundsString(this.props.bounds);
    if (prevPositionString !== positionString || prevBoundsString !== boundsString) {
      this.overlayView.draw();
    }
    if (prevProps.mapPaneName !== this.props.mapPaneName) {
      this.updatePane();
    }
  }
  componentWillUnmount() {
    this.overlayView.setMap(null);
  }
  render() {
    const paneEl = this.state.paneEl;
    if (paneEl) {
      return ReactDOM.createPortal((0, import_jsx_runtime.jsx)("div", Object.assign({ ref: this.containerRef, style: this.state.containerStyle }, { children: import_react.Children.only(this.props.children) })), paneEl);
    } else {
      return null;
    }
  }
};
OverlayView.FLOAT_PANE = `floatPane`;
OverlayView.MAP_PANE = `mapPane`;
OverlayView.MARKER_LAYER = `markerLayer`;
OverlayView.OVERLAY_LAYER = `overlayLayer`;
OverlayView.OVERLAY_MOUSE_TARGET = `overlayMouseTarget`;
OverlayView.contextType = MapContext;
function noop() {
  return;
}
var eventMap$5 = {
  onDblClick: "dblclick",
  onClick: "click"
};
var updaterMap$5 = {
  opacity(instance, opacity) {
    instance.setOpacity(opacity);
  }
};
function GroundOverlayFunctional({ url, bounds, options, visible }) {
  const map = (0, import_react.useContext)(MapContext);
  const imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
  const groundOverlay = (0, import_react.useMemo)(() => {
    const overlay = new google.maps.GroundOverlay(url, imageBounds, Object.assign({}, options));
    return overlay;
  }, []);
  (0, import_react.useEffect)(() => {
    if (groundOverlay !== null) {
      groundOverlay.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (typeof url !== "undefined" && groundOverlay !== null) {
      groundOverlay.set("url", url);
      groundOverlay.setMap(map);
    }
  }, [groundOverlay, url]);
  (0, import_react.useEffect)(() => {
    if (typeof visible !== "undefined" && groundOverlay !== null) {
      groundOverlay.setOpacity(visible ? 1 : 0);
    }
  }, [groundOverlay, visible]);
  (0, import_react.useEffect)(() => {
    const newBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
    if (typeof bounds !== "undefined" && groundOverlay !== null) {
      groundOverlay.set("bounds", newBounds);
      groundOverlay.setMap(map);
    }
  }, [groundOverlay, bounds]);
  return null;
}
var GroundOverlayF = (0, import_react.memo)(GroundOverlayFunctional);
var GroundOverlay = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      groundOverlay: null
    };
    this.setGroundOverlayCallback = () => {
      if (this.state.groundOverlay !== null && this.props.onLoad) {
        this.props.onLoad(this.state.groundOverlay);
      }
    };
  }
  componentDidMount() {
    invariant_1(!!this.props.url || !!this.props.bounds, `For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by \`react-google-maps-api\`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just \`key={url}\` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655`);
    const groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, Object.assign(Object.assign({}, this.props.options), { map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$5,
      eventMap: eventMap$5,
      prevProps: {},
      nextProps: this.props,
      instance: groundOverlay
    });
    this.setState(function setGroundOverlay() {
      return {
        groundOverlay
      };
    }, this.setGroundOverlayCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.groundOverlay !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$5,
        eventMap: eventMap$5,
        prevProps,
        nextProps: this.props,
        instance: this.state.groundOverlay
      });
    }
  }
  componentWillUnmount() {
    if (this.state.groundOverlay) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.groundOverlay);
      }
      this.state.groundOverlay.setMap(null);
    }
  }
  render() {
    return null;
  }
};
GroundOverlay.defaultProps = {
  onLoad: noop
};
GroundOverlay.contextType = MapContext;
var eventMap$4 = {};
var updaterMap$4 = {
  data(instance, data) {
    instance.setData(data);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  }
};
function HeatmapLayerFunctional({ data, onLoad, onUnmount, options }) {
  const map = (0, import_react.useContext)(MapContext);
  const [instance, setInstance] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (!google.maps.visualization) {
      invariant_1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    invariant_1(!!data, "data property is required in HeatmapLayer %s", data);
  }, [data]);
  (0, import_react.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0, import_react.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0, import_react.useEffect)(() => {
    const heatmapLayer = new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({}, options || {}), {
      data,
      map
    }));
    setInstance(heatmapLayer);
    if (onLoad) {
      onLoad(heatmapLayer);
    }
    return () => {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var HeatmapLayerF = (0, import_react.memo)(HeatmapLayerFunctional);
var HeatmapLayer = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      heatmapLayer: null
    };
    this.setHeatmapLayerCallback = () => {
      if (this.state.heatmapLayer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.heatmapLayer);
      }
    };
  }
  componentDidMount() {
    invariant_1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization);
    invariant_1(!!this.props.data, "data property is required in HeatmapLayer %s", this.props.data);
    const heatmapLayer = new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({}, this.props.options || {}), { data: this.props.data, map: this.context }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$4,
      eventMap: eventMap$4,
      prevProps: {},
      nextProps: this.props,
      instance: heatmapLayer
    });
    this.setState(function setHeatmapLayer() {
      return {
        heatmapLayer
      };
    }, this.setHeatmapLayerCallback);
  }
  componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$4,
      eventMap: eventMap$4,
      prevProps,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  }
  componentWillUnmount() {
    if (this.state.heatmapLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.heatmapLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.heatmapLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
};
HeatmapLayer.contextType = MapContext;
var eventMap$3 = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap$3 = {
  register(instance, provider, options) {
    instance.registerPanoProvider(provider, options);
  },
  links(instance, links) {
    instance.setLinks(links);
  },
  motionTracking(instance, motionTracking) {
    instance.setMotionTracking(motionTracking);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  pano(instance, pano) {
    instance.setPano(pano);
  },
  position(instance, position) {
    instance.setPosition(position);
  },
  pov(instance, pov) {
    instance.setPov(pov);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  },
  zoom(instance, zoom) {
    instance.setZoom(zoom);
  }
};
var StreetViewPanorama = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      streetViewPanorama: null
    };
    this.setStreetViewPanoramaCallback = () => {
      if (this.state.streetViewPanorama !== null && this.props.onLoad) {
        this.props.onLoad(this.state.streetViewPanorama);
      }
    };
  }
  componentDidMount() {
    const streetViewPanorama = this.context.getStreetView();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$3,
      eventMap: eventMap$3,
      prevProps: {},
      nextProps: this.props,
      instance: streetViewPanorama
    });
    this.setState(() => {
      return {
        streetViewPanorama
      };
    }, this.setStreetViewPanoramaCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.streetViewPanorama !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$3,
        eventMap: eventMap$3,
        prevProps,
        nextProps: this.props,
        instance: this.state.streetViewPanorama
      });
    }
  }
  componentWillUnmount() {
    if (this.state.streetViewPanorama !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewPanorama);
      }
      unregisterEvents(this.registeredEvents);
      this.state.streetViewPanorama.setVisible(false);
    }
  }
  render() {
    return null;
  }
};
StreetViewPanorama.contextType = MapContext;
var StreetViewService = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      streetViewService: null
    };
    this.setStreetViewServiceCallback = () => {
      if (this.state.streetViewService !== null && this.props.onLoad) {
        this.props.onLoad(this.state.streetViewService);
      }
    };
  }
  componentDidMount() {
    const streetViewService = new google.maps.StreetViewService();
    this.setState(function setStreetViewService() {
      return {
        streetViewService
      };
    }, this.setStreetViewServiceCallback);
  }
  componentWillUnmount() {
    if (this.state.streetViewService !== null && this.props.onUnmount) {
      this.props.onUnmount(this.state.streetViewService);
    }
  }
  render() {
    return null;
  }
};
StreetViewService.contextType = MapContext;
var DirectionsService = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      directionsService: null
    };
    this.setDirectionsServiceCallback = () => {
      if (this.state.directionsService !== null && this.props.onLoad) {
        this.props.onLoad(this.state.directionsService);
      }
    };
  }
  componentDidMount() {
    invariant_1(!!this.props.options, "DirectionsService expected options object as parameter, but got %s", this.props.options);
    const directionsService = new google.maps.DirectionsService();
    this.setState(function setDirectionsService() {
      return {
        directionsService
      };
    }, this.setDirectionsServiceCallback);
  }
  componentDidUpdate() {
    if (this.state.directionsService !== null) {
      this.state.directionsService.route(this.props.options, this.props.callback);
    }
  }
  componentWillUnmount() {
    if (this.state.directionsService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsService);
      }
    }
  }
  render() {
    return null;
  }
};
var eventMap$2 = {
  onDirectionsChanged: "directions_changed"
};
var updaterMap$2 = {
  directions(instance, directions) {
    instance.setDirections(directions);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  panel(instance, panel) {
    instance.setPanel(panel);
  },
  routeIndex(instance, routeIndex) {
    instance.setRouteIndex(routeIndex);
  }
};
var DirectionsRenderer = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.state = {
      directionsRenderer: null
    };
    this.setDirectionsRendererCallback = () => {
      if (this.state.directionsRenderer !== null) {
        this.state.directionsRenderer.setMap(this.context);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.directionsRenderer);
        }
      }
    };
  }
  componentDidMount() {
    const directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$2,
      eventMap: eventMap$2,
      prevProps: {},
      nextProps: this.props,
      instance: directionsRenderer
    });
    this.setState(function setDirectionsRenderer() {
      return {
        directionsRenderer
      };
    }, this.setDirectionsRendererCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.directionsRenderer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$2,
        eventMap: eventMap$2,
        prevProps,
        nextProps: this.props,
        instance: this.state.directionsRenderer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.directionsRenderer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsRenderer);
      }
      unregisterEvents(this.registeredEvents);
      if (this.state.directionsRenderer) {
        this.state.directionsRenderer.setMap(null);
      }
    }
  }
  render() {
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  }
};
DirectionsRenderer.contextType = MapContext;
var DistanceMatrixService = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      distanceMatrixService: null
    };
    this.setDistanceMatrixServiceCallback = () => {
      if (this.state.distanceMatrixService !== null && this.props.onLoad) {
        this.props.onLoad(this.state.distanceMatrixService);
      }
    };
  }
  componentDidMount() {
    invariant_1(!!this.props.options, "DistanceMatrixService expected options object as parameter, but go %s", this.props.options);
    const distanceMatrixService = new google.maps.DistanceMatrixService();
    this.setState(function setDistanceMatrixService() {
      return {
        distanceMatrixService
      };
    }, this.setDistanceMatrixServiceCallback);
  }
  componentDidUpdate() {
    if (this.state.distanceMatrixService !== null) {
      this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
    }
  }
  componentWillUnmount() {
    if (this.state.distanceMatrixService !== null && this.props.onUnmount) {
      this.props.onUnmount(this.state.distanceMatrixService);
    }
  }
  render() {
    return null;
  }
};
var eventMap$1 = {
  onPlacesChanged: "places_changed"
};
var updaterMap$1 = {
  bounds(instance, bounds) {
    instance.setBounds(bounds);
  }
};
var StandaloneSearchBox = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.containerElement = (0, import_react.createRef)();
    this.state = {
      searchBox: null
    };
    this.setSearchBoxCallback = () => {
      if (this.state.searchBox !== null && this.props.onLoad) {
        this.props.onLoad(this.state.searchBox);
      }
    };
  }
  componentDidMount() {
    invariant_1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    if (this.containerElement !== null && this.containerElement.current !== null) {
      const input = this.containerElement.current.querySelector("input");
      if (input !== null) {
        const searchBox = new google.maps.places.SearchBox(input, this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$1,
          eventMap: eventMap$1,
          prevProps: {},
          nextProps: this.props,
          instance: searchBox
        });
        this.setState(function setSearchBox() {
          return {
            searchBox
          };
        }, this.setSearchBoxCallback);
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.searchBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$1,
        eventMap: eventMap$1,
        prevProps,
        nextProps: this.props,
        instance: this.state.searchBox
      });
    }
  }
  componentWillUnmount() {
    if (this.state.searchBox !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.searchBox);
      }
      unregisterEvents(this.registeredEvents);
    }
  }
  render() {
    return (0, import_jsx_runtime.jsx)("div", Object.assign({ ref: this.containerElement }, { children: import_react.Children.only(this.props.children) }));
  }
};
StandaloneSearchBox.contextType = MapContext;
var eventMap = {
  onPlaceChanged: "place_changed"
};
var updaterMap = {
  bounds(instance, bounds) {
    instance.setBounds(bounds);
  },
  restrictions(instance, restrictions) {
    instance.setComponentRestrictions(restrictions);
  },
  fields(instance, fields) {
    instance.setFields(fields);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  types(instance, types) {
    instance.setTypes(types);
  }
};
var Autocomplete = class extends import_react.PureComponent {
  constructor() {
    super(...arguments);
    this.registeredEvents = [];
    this.containerElement = (0, import_react.createRef)();
    this.state = {
      autocomplete: null
    };
    this.setAutocompleteCallback = () => {
      if (this.state.autocomplete !== null && this.props.onLoad) {
        this.props.onLoad(this.state.autocomplete);
      }
    };
  }
  componentDidMount() {
    invariant_1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    const input = this.containerElement.current.querySelector("input");
    if (input) {
      const autocomplete = new google.maps.places.Autocomplete(input, this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap,
        eventMap,
        prevProps: {},
        nextProps: this.props,
        instance: autocomplete
      });
      this.setState(() => {
        return {
          autocomplete
        };
      }, this.setAutocompleteCallback);
    }
  }
  componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap,
      eventMap,
      prevProps,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  }
  componentWillUnmount() {
    if (this.state.autocomplete !== null) {
      unregisterEvents(this.registeredEvents);
    }
  }
  render() {
    return (0, import_jsx_runtime.jsx)("div", Object.assign({ ref: this.containerElement, className: this.props.className }, { children: import_react.Children.only(this.props.children) }));
  }
};
Autocomplete.defaultProps = {
  className: ""
};
Autocomplete.contextType = MapContext;
export {
  Autocomplete,
  BicyclingLayer,
  BicyclingLayerF,
  Circle,
  CircleF,
  Data,
  DataF,
  DirectionsRenderer,
  DirectionsService,
  DistanceMatrixService,
  DrawingManager,
  DrawingManagerF,
  FLOAT_PANE,
  GoogleMap,
  index_esm as GoogleMapsMarkerClusterer,
  GoogleMarkerClusterer$1 as GoogleMarkerClusterer,
  GroundOverlay,
  GroundOverlayF,
  HeatmapLayer,
  HeatmapLayerF,
  InfoBoxComponent as InfoBox,
  InfoBoxF,
  InfoWindow,
  InfoWindowF,
  KmlLayer,
  LoadScript,
  LoadScriptNext$1 as LoadScriptNext,
  MAP_PANE,
  MARKER_LAYER,
  MapContext,
  Marker,
  ClustererComponent as MarkerClusterer,
  MarkerClustererF,
  MarkerF,
  OVERLAY_LAYER,
  OVERLAY_MOUSE_TARGET,
  OverlayView,
  OverlayViewF,
  Polygon,
  PolygonF,
  Polyline,
  PolylineF,
  Rectangle,
  RectangleF,
  StandaloneSearchBox,
  StreetViewPanorama,
  StreetViewService,
  TrafficLayer,
  TrafficLayerF,
  TransitLayer,
  TransitLayerF,
  useGoogleMap,
  useJsApiLoader,
  useLoadScript
};
/*! Bundled license information:

@react-google-maps/api/dist/esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@react-google-maps_api.js.map
