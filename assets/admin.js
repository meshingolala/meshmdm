"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[884],{

/***/ 14431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ ConfirmDataCollectionDisableModal_ConfirmDataCollectionDisableModal; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/interfaces/charts.ts
var charts = __webpack_require__(64549);
;// ./frontend/components/ConfirmDataCollectionDisableModal/ConfirmDataCollectionDisableModal.tsx





const baseClass = "confirm-data-collection-disable-modal";
const ConfirmDataCollectionDisableModal = ({
  scope,
  datasets,
  fleetName,
  isUpdating,
  onConfirm,
  onCancel
}) => {
  const heading = scope === "global" ? "You're about to disable data collection across this Mesh deployment." : `You're about to disable data collection for ${fleetName ? `fleet "${fleetName}"` : "this fleet"}.`;
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: baseClass,
      title: "Disable data collection",
      onExit: onCancel,
      isContentDisabled: isUpdating
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, heading), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__dataset-block` }, /* @__PURE__ */ react.createElement("p", null, "The following dataset(s) will be disabled:"), /* @__PURE__ */ react.createElement("ul", { className: `${baseClass}__dataset-list` }, datasets.map((key) => /* @__PURE__ */ react.createElement("li", { key }, /* @__PURE__ */ react.createElement("strong", null, charts/* DATASET_LABEL */.ul[key]))))), /* @__PURE__ */ react.createElement("p", null, "Previously collected data will be deleted.", " ", /* @__PURE__ */ react.createElement("strong", null, "This cannot be undone.")), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "alert", onClick: onConfirm, isLoading: isUpdating }, "Save and disable"), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")))
  );
};
/* harmony default export */ var ConfirmDataCollectionDisableModal_ConfirmDataCollectionDisableModal = (ConfirmDataCollectionDisableModal);

;// ./frontend/components/ConfirmDataCollectionDisableModal/index.ts




/***/ }),

/***/ 78789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var validator_lib_isUUID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65186);
/* harmony import */ var validator_lib_isUUID__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isUUID__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__.A = ((val) => {
  return validator_lib_isUUID__WEBPACK_IMPORTED_MODULE_0___default()(val);
});


/***/ }),

/***/ 3930:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53806);
/* harmony import */ var components_MainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(827);
/* harmony import */ var components_TabNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15570);
/* harmony import */ var components_TabText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37738);
/* harmony import */ var context_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68774);
/* harmony import */ var router_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78263);









const baseClass = "admin-wrapper";
const AdminWrapper = ({
  children,
  location: { pathname },
  router
}) => {
  const { isPremiumTier, isSandboxMode } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_app__WEBPACK_IMPORTED_MODULE_6__/* .AppContext */ .BR);
  const settingsSubNav = [
    {
      name: "Organization settings",
      pathname: router_paths__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.ADMIN_ORGANIZATION,
      exclude: isSandboxMode
    },
    {
      name: "Integrations",
      pathname: router_paths__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.ADMIN_INTEGRATIONS
    },
    {
      name: "Users",
      pathname: router_paths__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.ADMIN_USERS,
      exclude: isSandboxMode
    },
    {
      name: "Fleets",
      pathname: router_paths__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.ADMIN_FLEETS,
      exclude: !isPremiumTier
    }
  ];
  const filteredSettingsSubNav = settingsSubNav.filter((navItem) => {
    return !navItem.exclude;
  });
  const navigateToNav = (i) => {
    const navPath = filteredSettingsSubNav[i].pathname;
    router.push(navPath);
  };
  const getTabIndex = (path) => {
    return filteredSettingsSubNav.findIndex((navItem) => {
      return path.startsWith(navItem.pathname);
    });
  };
  const classNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()(baseClass, { "sandbox-mode": isSandboxMode });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_MainContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { className: classNames }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", { className: "page-header" }, "Settings"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_TabNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .tU,
    {
      selectedIndex: getTabIndex(pathname),
      onSelect: (i) => navigateToNav(i)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .TabList */ .wb, null, filteredSettingsSubNav.map((navItem) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Tab */ .oz, { key: navItem.name, "data-text": navItem.name }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_TabText__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, navItem.name));
    }))
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "tab-nav-routed-content" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    "div",
    {
      key: getTabIndex(pathname),
      className: "tab-nav-routed-content__fade"
    },
    children
  ))));
};
/* harmony default export */ __webpack_exports__["default"] = (AdminWrapper);


/***/ }),

/***/ 30867:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ AndroidMdmPage_AndroidMdmPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/mdm_android.ts
var mdm_android = __webpack_require__(51772);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AndroidMdmPage/components/TurnOffAndroidMdmModal/TurnOffAndroidMdmModal.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const baseClass = "turn-off-android-mdm-modal";
const TurnOffAndroidMdmModal = ({
  onExit,
  router
}) => {
  const { setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  const queryClient = (0,es.useQueryClient)();
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onClickConfirm = (0,react.useCallback)(() => __async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield mdm_android/* default */.A.turnOffAndroidMdm();
    } catch (e) {
      onExit();
      ToastNotification/* notify */.me.error("Couldn't turn off Android MDM. Please try again.", {
        response: e
      });
      return;
    }
    const prevConfig = queryClient.getQueryData(["config"]);
    if (prevConfig) {
      const patched = __spreadProps(__spreadValues({}, prevConfig), {
        mdm: __spreadProps(__spreadValues({}, prevConfig.mdm), { android_enabled_and_configured: false })
      });
      setConfig(patched);
      queryClient.setQueryData(["config"], patched);
    }
    ToastNotification/* notify */.me.success("Android MDM turned off successfully.");
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM);
  }), [onExit, queryClient, router, setConfig]);
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Turn off Android MDM", className: baseClass, onExit }, /* @__PURE__ */ react.createElement("p", null, "If you want to use MDM features again, you'll have to reconnect Android Enterprise."), /* @__PURE__ */ react.createElement("p", null, "End users will lose access to organization resources and all data in their Android work partition."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "alert",
          isLoading: isDeleting,
          disabled: isDeleting || disableChildren,
          onClick: onClickConfirm
        },
        "Turn off"
      )
    }
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", disabled: isDeleting, onClick: onExit }, "Cancel")));
};
/* harmony default export */ var TurnOffAndroidMdmModal_TurnOffAndroidMdmModal = (TurnOffAndroidMdmModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AndroidMdmPage/components/TurnOffAndroidMdmModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AndroidMdmPage/AndroidMdmPage.tsx

var AndroidMdmPage_defProp = Object.defineProperty;
var AndroidMdmPage_defProps = Object.defineProperties;
var AndroidMdmPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AndroidMdmPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AndroidMdmPage_hasOwnProp = Object.prototype.hasOwnProperty;
var AndroidMdmPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var AndroidMdmPage_defNormalProp = (obj, key, value) => key in obj ? AndroidMdmPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AndroidMdmPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AndroidMdmPage_hasOwnProp.call(b, prop))
      AndroidMdmPage_defNormalProp(a, prop, b[prop]);
  if (AndroidMdmPage_getOwnPropSymbols)
    for (var prop of AndroidMdmPage_getOwnPropSymbols(b)) {
      if (AndroidMdmPage_propIsEnum.call(b, prop))
        AndroidMdmPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AndroidMdmPage_spreadProps = (a, b) => AndroidMdmPage_defProps(a, AndroidMdmPage_getOwnPropDescs(b));
var AndroidMdmPage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


















const AndroidMdmPage_baseClass = "android-mdm-page";
const POPUP_WIDTH = 885;
const POPUP_HEIGHT = 600;
const TurnOnAndroidMdm = ({ router }) => {
  const { setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  const queryClient = (0,es.useQueryClient)();
  const newWindow = (0,react.useRef)(null);
  const [fetchingSignupUrl, setFetchingSignupUrl] = (0,react.useState)(false);
  const [setupSse, setSetupSse] = (0,react.useState)(false);
  const handleSSE = (0,react.useCallback)(
    (abortController) => AndroidMdmPage_async(null, null, function* () {
      try {
        yield mdm_android/* default */.A.startSSE(abortController.signal);
      } catch (e) {
        ToastNotification/* notify */.me.error("Couldn't turn on Android MDM. Please try again.", {
          response: e
        });
        setSetupSse(false);
        return;
      }
      abortController.abort();
      const prevConfig = queryClient.getQueryData(["config"]);
      if (prevConfig) {
        const patched = AndroidMdmPage_spreadProps(AndroidMdmPage_spreadValues({}, prevConfig), {
          mdm: AndroidMdmPage_spreadProps(AndroidMdmPage_spreadValues({}, prevConfig.mdm), { android_enabled_and_configured: true })
        });
        setConfig(patched);
        queryClient.setQueryData(["config"], patched);
      }
      ToastNotification/* notify */.me.success("Android MDM turned on successfully.");
      setSetupSse(false);
      router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM);
    }),
    [queryClient, router, setConfig]
  );
  (0,react.useEffect)(() => {
    const abortController = new AbortController();
    if (setupSse) {
      handleSSE(abortController);
      return () => {
        abortController.abort();
      };
    }
    return void 0;
  }, [setupSse, router, handleSSE]);
  const onConnectMdm = () => AndroidMdmPage_async(null, null, function* () {
    setFetchingSignupUrl(true);
    try {
      const res = yield mdm_android/* default */.A.getSignupUrl();
      const left = window.screenX + (window.innerWidth - POPUP_WIDTH) / 2;
      const top = window.screenY + (window.innerHeight - POPUP_HEIGHT) / 2;
      newWindow.current = window.open(
        res.android_enterprise_signup_url,
        "_blank",
        `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},top=${top},left=${left}`
      );
      setSetupSse(true);
    } catch (e) {
      const reason = (0,errors/* getErrorReason */.F3)(e);
      if (reason.includes("android enterprise already exists")) {
        ToastNotification/* notify */.me.error(
          /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't connect. Android enterprise already exists for this Mesh server. For help, please contact", " ", /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              text: "Fleet support",
              url: constants/* SUPPORT_LINK */.FI,
              newTab: true,
              variant: "flash-message-link"
            }
          )),
          { response: e }
        );
      } else {
        ToastNotification/* notify */.me.error(`Couldn't connect. ${reason || "Please try again."}`, {
          response: e
        });
      }
    }
    setFetchingSignupUrl(false);
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${AndroidMdmPage_baseClass}__turn-on-description` }, /* @__PURE__ */ react.createElement("p", null, "Connect Android Enterprise to turn on Android MDM. "), /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      text: "Learn More",
      newTab: true,
      url: "https://fleetdm.com/learn-more-about/how-to-connect-android-enterprise"
    }
  )), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          isLoading: fetchingSignupUrl,
          disabled: disableChildren,
          onClick: onConnectMdm
        },
        "Connect"
      )
    }
  ));
};
const TurnOffAndroidMdm = ({ onClickTurnOff }) => {
  const { data, isLoading, isError } = (0,es.useQuery)(
    ["android_enterprise"],
    () => mdm_android/* default */.A.getAndroidEnterprise(),
    AndroidMdmPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
  }
  if (!data) return null;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          position: "top",
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Android Enterprise in", " ", /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              newTab: true,
              text: "Google Admin Console",
              url: "https://fleetdm.com/learn-more-about/google-admin-emm",
              variant: "tooltip-link"
            }
          ))
        },
        "Android Enterprise ID"
      ),
      value: data.android_enterprise_id
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClickTurnOff, disabled: disableChildren }, "Turn off Android MDM")
    }
  ));
};
const AndroidMdmPage = ({ router }) => {
  const { isAndroidMdmEnabledAndConfigured } = (0,react.useContext)(app/* AppContext */.BR);
  const [showTurnOffMdmModal, setShowTurnOffMdmModal] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: AndroidMdmPage_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${AndroidMdmPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
    BackButton/* default */.A,
    {
      text: "Back to MDM",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
      className: `${AndroidMdmPage_baseClass}__back-to-mdm`
    }
  )), /* @__PURE__ */ react.createElement("h1", null, "Android Enterprise"), /* @__PURE__ */ react.createElement("div", { className: `${AndroidMdmPage_baseClass}__content` }, !isAndroidMdmEnabledAndConfigured ? /* @__PURE__ */ react.createElement(TurnOnAndroidMdm, { router }) : /* @__PURE__ */ react.createElement(
    TurnOffAndroidMdm,
    {
      onClickTurnOff: () => setShowTurnOffMdmModal(true)
    }
  )), showTurnOffMdmModal && /* @__PURE__ */ react.createElement(
    TurnOffAndroidMdmModal_TurnOffAndroidMdmModal,
    {
      router,
      onExit: () => setShowTurnOffMdmModal(false)
    }
  ));
};
/* harmony default export */ var AndroidMdmPage_AndroidMdmPage = (AndroidMdmPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AndroidMdmPage/index.ts




/***/ }),

/***/ 43588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ AndroidZeroTouchPage_AndroidZeroTouchPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/CopyButton/index.ts + 2 modules
var CopyButton = __webpack_require__(57390);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/mdm_android.ts
var mdm_android = __webpack_require__(51772);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AndroidZeroTouchPage/AndroidZeroTouchPage.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));













const baseClass = "android-zero-touch-page";
const AndroidZeroTouchPage = () => {
  const {
    currentUser,
    isPremiumTier,
    isAndroidMdmEnabledAndConfigured
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isTierKnown = isPremiumTier !== void 0;
  const { data: zeroTouchConfig, isLoading, isError } = (0,es.useQuery)(
    // Scoped to the user: the query client is module-scoped and survives SPA
    // logout, and the DPC extras embed a reusable enrollment token.
    ["android-zero-touch-configuration", currentUser == null ? void 0 : currentUser.id],
    () => mdm_android/* default */.A.getZeroTouchConfiguration(),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: !!isPremiumTier && !!isAndroidMdmEnabledAndConfigured && !!currentUser
    })
  );
  const hasConfig = !isError && !!zeroTouchConfig;
  const renderCodeBlock = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(
        "div",
        {
          className: `${baseClass}__dpc-extras-code ${baseClass}__dpc-extras-code--loading`
        },
        /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)
      );
    }
    if (!hasConfig) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement("pre", { className: `${baseClass}__dpc-extras-code` }, /* @__PURE__ */ react.createElement("code", null, zeroTouchConfig.dpc_extras));
  };
  const renderContent = () => {
    if (!isTierKnown) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (!isAndroidMdmEnabledAndConfigured) {
      return /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__prerequisite` }, "To enable end users to enroll to Mesh via Android zero-touch, first turn on Android MDM.");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__description` }, "To connect Mesh to Android zero-touch, go to the", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/learn-more-about/android-zero-touch-portal",
        text: "Android zero-touch portal",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__enrollment-info` }, "Android hosts will automatically enroll to the ", /* @__PURE__ */ react.createElement("b", null, "Unassigned"), " ", "fleet. Changing fleets is coming soon."), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__dpc-extras` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__dpc-extras-header` }, /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__dpc-extras-label` }, "DPC extras"), hasConfig && /* @__PURE__ */ react.createElement(
      CopyButton/* default */.A,
      {
        copyText: zeroTouchConfig.dpc_extras,
        variant: "secondary"
      }
    )), renderCodeBlock()), hasConfig && /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__instructions` }, "Select ", /* @__PURE__ */ react.createElement("b", null, "Add configuration"), ", pick ", /* @__PURE__ */ react.createElement("b", null, "Android Device Policy"), " ", "as your ", /* @__PURE__ */ react.createElement("b", null, "EMM DPC"), ", and paste this JSON into ", /* @__PURE__ */ react.createElement("b", null, "DPC extras"), "."));
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
    BackButton/* default */.A,
    {
      text: "Back to MDM",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
      className: `${baseClass}__back-to-mdm`
    }
  )), /* @__PURE__ */ react.createElement("h1", null, "Android zero-touch"), renderContent());
};
/* harmony default export */ var AndroidZeroTouchPage_AndroidZeroTouchPage = (AndroidZeroTouchPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AndroidZeroTouchPage/index.ts




/***/ }),

/***/ 2977:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ AppleBusinessManagerPage_AppleBusinessManagerPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/App/App.tsx + 4 modules
var App = __webpack_require__(38821);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/mdm_apple_bm.ts
var mdm_apple_bm = __webpack_require__(61391);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/pages/admin/components/DownloadFileButtons/helpers.ts
var helpers = __webpack_require__(29422);
;// ./frontend/pages/admin/components/DownloadFileButtons/DownloadABMKey.tsx

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};







const downloadKeyFile = (data) => {
  (0,helpers/* downloadBase64ToFile */.D)(data.public_key, "fleet-mdm-apple-bm-public-key.pem");
};
const useDownloadABMKey = ({
  onSuccess,
  onError
}) => {
  const [downloadState, setDownloadState] = (0,react.useState)(void 0);
  const handleDownload = (0,react.useCallback)(
    (evt) => __async(null, null, function* () {
      evt.preventDefault();
      setDownloadState("loading");
      try {
        const data = yield mdm_apple_bm/* default */.A.downloadPublicKey();
        downloadKeyFile(data);
        setDownloadState("success");
        onSuccess && onSuccess();
      } catch (e) {
        const msg = (0,errors/* getErrorReason */.F3)(e);
        ToastNotification/* notify */.me.error(msg, { response: e });
        setDownloadState("error");
        onError && onError(e);
      }
    }),
    [onError, onSuccess]
  );
  const memoized = (0,react.useMemo)(
    () => ({
      downloadState,
      handleDownload
    }),
    [downloadState, handleDownload]
  );
  return memoized;
};
const DownloadABMKey = ({
  baseClass,
  onSuccess,
  onError
}) => {
  const { handleDownload } = useDownloadABMKey({ onSuccess, onError });
  return /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${baseClass}__request-button`,
      variant: "secondary",
      onClick: handleDownload
    },
    /* @__PURE__ */ react.createElement("label", { htmlFor: "download-key" }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "download" }), /* @__PURE__ */ react.createElement("span", null, "Download public key"))
  );
};
/* harmony default export */ var DownloadFileButtons_DownloadABMKey = (DownloadABMKey);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AddAbmModal/helpers.tsx



const DEFAULT_ERROR_MESSAGE = "Couldn't add. Please try again.";
const generateDuplicateMessage = (msg) => {
  const orgName = msg.split("'")[1];
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't add. There's already an AB connection for the", " ", /* @__PURE__ */ react.createElement("b", null, orgName), " organization.");
};
const getErrorMessage = (err) => {
  const duplicateEntryReason = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "Apple Business Manager connection already exists"
  });
  const invalidTokenReason = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "Invalid token"
  });
  if (duplicateEntryReason) {
    return generateDuplicateMessage(duplicateEntryReason);
  }
  if (invalidTokenReason) {
    return invalidTokenReason;
  }
  return DEFAULT_ERROR_MESSAGE;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AddAbmModal/AddAbmModal.tsx

var AddAbmModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const baseClass = "add-abm-modal";
const AddAbmModal = ({ onCancel, onAdded }) => {
  const [tokenFile, setTokenFile] = (0,react.useState)(null);
  const [isUploading, setIsUploading] = (0,react.useState)(false);
  const onSelectFile = (0,react.useCallback)((files) => {
    const file = files == null ? void 0 : files[0];
    if (file) {
      setTokenFile(file);
    }
  }, []);
  const uploadAbmToken = (0,react.useCallback)(() => AddAbmModal_async(null, null, function* () {
    setIsUploading(true);
    if (!tokenFile) {
      setIsUploading(false);
      ToastNotification/* notify */.me.error("No token selected.");
      return;
    }
    try {
      yield mdm_apple_bm/* default */.A.uploadToken(tokenFile);
      ToastNotification/* notify */.me.success("Added successfully.");
      onAdded();
    } catch (e) {
      ToastNotification/* notify */.me.error(getErrorMessage(e), { response: e });
      onCancel();
    } finally {
      setIsUploading(false);
    }
  }), [tokenFile, onAdded, onCancel]);
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: baseClass, title: "Add AB", onExit: onCancel, width: "large" }, /* @__PURE__ */ react.createElement("p", null, "Follow the step-by-step guide to connect Mesh to Apple Business.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/setup-abm",
      text: "Learn how",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      className: `${baseClass}__file-uploader ${isUploading ? `${baseClass}__file-uploader--loading` : ""}`,
      accept: ".p7m",
      message: "AB token (.p7m)",
      graphicName: "file-p7m",
      buttonType: "secondary",
      buttonMessage: isUploading ? "Uploading..." : "Upload",
      fileDetails: tokenFile ? { name: tokenFile.name } : void 0,
      onFileUpload: onSelectFile
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      onClick: uploadAbmToken,
      isLoading: isUploading,
      disabled: !tokenFile || isUploading
    },
    "Add AB"
  ), /* @__PURE__ */ react.createElement(DownloadFileButtons_DownloadABMKey, { baseClass })));
};
/* harmony default export */ var AddAbmModal_AddAbmModal = (AddAbmModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AddAbmModal/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/RenewDateCell/index.ts + 1 modules
var RenewDateCell = __webpack_require__(11160);
// EXTERNAL MODULE: ./frontend/components/Tag/index.ts + 1 modules
var Tag = __webpack_require__(42619);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AppleBusinessManagerTable/OrgNameCell/OrgNameCell.tsx








const OrgNameCell_baseClass = "org-name-cell";
const OrgNameCell = ({
  orgName,
  termsExpired,
  isDefault
}) => {
  const name = termsExpired ? /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      showArrow: true,
      underline: false,
      position: "top",
      tipContent: "The AB terms have changed. To accept terms, go to AB.",
      className: `${OrgNameCell_baseClass}__tooltip-wrapper`
    },
    /* @__PURE__ */ react.createElement("span", null, orgName),
    " ",
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "warning" })
  ) : orgName;
  const cellContent = isDefault ? /* @__PURE__ */ react.createElement(react.Fragment, null, name, " ", /* @__PURE__ */ react.createElement(
    Tag/* default */.A,
    {
      size: "xsmall",
      tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Restricting Managed Apple Account sign-in to managed hosts only works if the restriction is turned on in Apple Business.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/default-ab-token`,
          text: "Learn more",
          variant: "tooltip-link",
          newTab: true
        }
      ))
    },
    "Default sign-in"
  )) : name;
  return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellContent, className: OrgNameCell_baseClass });
};
/* harmony default export */ var OrgNameCell_OrgNameCell = (OrgNameCell);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AppleBusinessManagerTable/OrgNameCell/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AppleBusinessManagerTable/AppleBusinessManagerTableConfig.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









const generateActions = (token, tokensCount, gitopsModeEnabled, repoURL) => {
  const gitOpsDisabledProps = __spreadValues({
    disabled: true
  }, repoURL ? { tooltipContent: (0,utilities_helpers/* getGitOpsModeTipContent */.qV)(repoURL) } : {});
  let toggleDefaultOption = {
    value: "toggleDefault",
    label: token.default ? "Remove default for sign-in" : "Set as default for sign-in",
    disabled: false
  };
  if (gitopsModeEnabled) {
    toggleDefaultOption = __spreadValues(__spreadValues({}, toggleDefaultOption), gitOpsDisabledProps);
  } else if (token.default && tokensCount === 1) {
    toggleDefaultOption = __spreadProps(__spreadValues({}, toggleDefaultOption), {
      disabled: true,
      tooltipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The only AB token is always the default.", /* @__PURE__ */ react.createElement("br", null), "Add another to change it.")
    });
  }
  return [
    __spreadValues({
      value: "editTeams",
      label: "Edit fleets",
      disabled: false
    }, gitopsModeEnabled ? gitOpsDisabledProps : {}),
    toggleDefaultOption,
    { value: "renew", label: "Renew", disabled: false },
    { value: "delete", label: "Delete", disabled: false }
  ];
};
const RENEW_DATE_CELL_STATUS_CONFIG = {
  warning: {
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "AB server token is less than 30 days from expiration.", /* @__PURE__ */ react.createElement("br", null), " To renew, go to ", /* @__PURE__ */ react.createElement("b", null, "Actions ", ">", " Renew."))
  },
  error: {
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "AB server token is expired.", /* @__PURE__ */ react.createElement("br", null), " To renew, go to ", /* @__PURE__ */ react.createElement("b", null, "Actions ", ">", " Renew"), ".")
  }
};
const generateTableConfig = (actionSelectHandler, tokensCount, gitopsModeEnabled, repoURL) => {
  return [
    {
      accessor: "org_name",
      sortType: "caseInsensitive",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Organization name",
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      Cell: (cellProps) => {
        const {
          terms_expired,
          org_name,
          default: isDefault
        } = cellProps.cell.row.original;
        return /* @__PURE__ */ react.createElement(
          OrgNameCell_OrgNameCell,
          {
            orgName: org_name,
            termsExpired: terms_expired,
            isDefault
          }
        );
      }
    },
    {
      accessor: "renew_date",
      sortType: "dateStrings",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Renew date",
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        RenewDateCell/* default */.A,
        {
          value: cellProps.cell.value,
          statusConfig: RENEW_DATE_CELL_STATUS_CONFIG,
          className: "abm-renew-date-cell"
        }
      )
    },
    {
      id: "macos_team",
      sortType: "caseInsensitive",
      accessor: (originalRow) => (0,team/* getFleetDisplayName */.wu)(originalRow.macos_fleet),
      Header: (cellProps) => {
        const titleWithToolTip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "macOS hosts are automatically added to this fleet on initial sync from AB. If a host is manually assigned to a different fleet before enrollment, it will enroll to the newly assigned fleet and not the default.")
          },
          "macOS fleet"
        );
        return /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithToolTip,
            isSortedDesc: cellProps.column.isSortedDesc
          }
        );
      },
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      id: "ios_team",
      sortType: "caseInsensitive",
      accessor: (originalRow) => (0,team/* getFleetDisplayName */.wu)(originalRow.ios_fleet),
      Header: (cellProps) => {
        const titleWithToolTip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "iOS hosts are automatically added to this fleet on initial sync from AB. If a host is manually assigned to a different fleet before enrollment, it will enroll to the newly assigned fleet and not the default.")
          },
          "iOS fleet"
        );
        return /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithToolTip,
            isSortedDesc: cellProps.column.isSortedDesc
          }
        );
      },
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      id: "ipados_team",
      sortType: "caseInsensitive",
      accessor: (originalRow) => (0,team/* getFleetDisplayName */.wu)(originalRow.ipados_fleet),
      Header: (cellProps) => {
        const titleWithToolTip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "iPadOS hosts are automatically added to this fleet on initial sync from AB. If a host is manually assigned to a different fleet before enrollment, it will enroll to the newly assigned fleet and not the default.")
          },
          "iPadOS fleet"
        );
        return /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithToolTip,
            isSortedDesc: cellProps.column.isSortedDesc
          }
        );
      },
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      id: "byod_team",
      sortType: "caseInsensitive",
      accessor: (originalRow) => (0,team/* getFleetDisplayName */.wu)(originalRow.byod_fleet),
      Header: (cellProps) => {
        const titleWithToolTip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "iOS/iPadOS hosts that enroll via Managed Apple Account are automatically added to this fleet.")
          },
          "BYOD fleet"
        );
        return /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithToolTip,
            isSortedDesc: cellProps.column.isSortedDesc
          }
        );
      },
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      Header: "",
      disableSortBy: true,
      // the accessor here is insignificant, we just need it as its required
      // but we don't use it.
      accessor: "id",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement("div", { className: "abm-actions-wrapper" }, /* @__PURE__ */ react.createElement(
        ActionsDropdown/* default */.A,
        {
          options: generateActions(
            cellProps.row.original,
            tokensCount,
            gitopsModeEnabled,
            repoURL
          ),
          onChange: (value) => actionSelectHandler(value, cellProps.row.original),
          menuAlign: "right",
          placeholder: "Actions",
          disabled: false,
          variant: "secondary"
        }
      ))
    }
  ];
};
const generateTableData = (data) => {
  return data;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AppleBusinessManagerTable/AppleBusinessManagerTable.tsx





const AppleBusinessManagerTable_baseClass = "apple-business-manager-table";
const AppleBusinessManagerTable = ({
  abTokens,
  onEditTokenTeam,
  onToggleTokenDefault,
  onRenewToken,
  onDeleteToken
}) => {
  const { gitOpsModeEnabled, repoURL } = (0,useGitOpsMode/* default */.A)();
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const normalizedQuery = searchQuery.toLowerCase();
  const filteredAbTokens = normalizedQuery ? abTokens.filter(
    (token) => token.org_name.toLowerCase().includes(normalizedQuery)
  ) : abTokens;
  const onSelectAction = (action, abmToken) => {
    switch (action) {
      case "editTeams":
        onEditTokenTeam(abmToken);
        break;
      case "toggleDefault":
        onToggleTokenDefault(abmToken);
        break;
      case "renew":
        onRenewToken(abmToken);
        break;
      case "delete":
        onDeleteToken(abmToken);
        break;
      default:
        break;
    }
  };
  const tableConfig = generateTableConfig(
    onSelectAction,
    abTokens.length,
    gitOpsModeEnabled,
    repoURL
  );
  const onQueryChange = (queryData) => {
    setSearchQuery(queryData.searchQuery);
  };
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableConfig,
      defaultSortHeader: "org_name",
      disablePagination: true,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      emptyComponent: () => /* @__PURE__ */ react.createElement(react.Fragment, null),
      isLoading: false,
      data: filteredAbTokens,
      className: AppleBusinessManagerTable_baseClass,
      searchable: true,
      inputPlaceHolder: "Search by organization name",
      searchQuery,
      onQueryChange
    }
  );
};
/* harmony default export */ var AppleBusinessManagerTable_AppleBusinessManagerTable = (AppleBusinessManagerTable);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/AppleBusinessManagerTable/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/DeleteAbmModal/DeleteAbmModal.tsx

var DeleteAbmModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





const DeleteAbmModal_baseClass = "delete-abm-modal";
const DeleteAbmModal = ({
  tokenOrgName,
  tokenId,
  tokenIsDefault,
  tokensCount,
  onCancel,
  onDeletedToken
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDeleteToken = (0,react.useCallback)(() => DeleteAbmModal_async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield mdm_apple_bm/* default */.A.deleteToken(tokenId);
      ToastNotification/* notify */.me.success("Deleted successfully.");
      onDeletedToken();
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn\u2019t disable automatic enrollment. Please try again.", {
        response: e
      });
      onCancel();
    }
  }), [onCancel, onDeletedToken, tokenId]);
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete AB",
      className: DeleteAbmModal_baseClass,
      onExit: onCancel,
      isContentDisabled: isDeleting
    },
    /* @__PURE__ */ react.createElement("p", null, "New hosts purchased in ", /* @__PURE__ */ react.createElement("b", null, tokenOrgName), " won't automatically enroll to Fleet.", tokenIsDefault && tokensCount === 2 && /* @__PURE__ */ react.createElement(react.Fragment, null, " Your remaining token will become the default automatically."), tokenIsDefault && tokensCount > 2 && /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "Manual enrollments may not be able to sign into Managed Apple IDs until you set a new default.")),
    /* @__PURE__ */ react.createElement("p", null, "If you want to re-enable automatic enrollment, you'll have to upload a new AB token."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: onDeleteToken,
        disabled: isDeleting,
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, disabled: isDeleting, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteAbmModal_DeleteAbmModal = (DeleteAbmModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/DeleteAbmModal/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/forms/FormField/index.ts + 1 modules
var FormField = __webpack_require__(25663);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/EditTeamsAbmModal/EditTeamsAbmModal.tsx

var EditTeamsAbmModal_defProp = Object.defineProperty;
var EditTeamsAbmModal_defProps = Object.defineProperties;
var EditTeamsAbmModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditTeamsAbmModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditTeamsAbmModal_hasOwnProp = Object.prototype.hasOwnProperty;
var EditTeamsAbmModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditTeamsAbmModal_defNormalProp = (obj, key, value) => key in obj ? EditTeamsAbmModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditTeamsAbmModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditTeamsAbmModal_hasOwnProp.call(b, prop))
      EditTeamsAbmModal_defNormalProp(a, prop, b[prop]);
  if (EditTeamsAbmModal_getOwnPropSymbols)
    for (var prop of EditTeamsAbmModal_getOwnPropSymbols(b)) {
      if (EditTeamsAbmModal_propIsEnum.call(b, prop))
        EditTeamsAbmModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditTeamsAbmModal_spreadProps = (a, b) => EditTeamsAbmModal_defProps(a, EditTeamsAbmModal_getOwnPropDescs(b));
var EditTeamsAbmModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const EditTeamsAbmModal_baseClass = "edit-teams-abm-modal";
const getOptions = (availableTeams = []) => {
  return availableTeams == null ? void 0 : availableTeams.filter((t) => t.name !== "All fleets").map((t) => ({
    value: t.name,
    label: t.name
  }));
};
const getSelectedTeamIds = ({ ios_team, ipados_team, macos_team, byod_team }, availableTeams = []) => {
  const byName = availableTeams.reduce((acc, t) => {
    acc[t.name] = t.id;
    return acc;
  }, {});
  return {
    ios_fleet_id: byName[ios_team],
    ipados_fleet_id: byName[ipados_team],
    macos_fleet_id: byName[macos_team],
    byod_fleet_id: byName[byod_team]
  };
};
const EditTeamsAbmModal = ({
  token,
  onCancel,
  onSuccess
}) => {
  const { availableTeams } = (0,react.useContext)(app/* AppContext */.BR);
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const [selectedTeamNames, setSelectedTeamNames] = (0,react.useState)(
    {
      ios_team: token.ios_fleet.name,
      ipados_team: token.ipados_fleet.name,
      macos_team: token.macos_fleet.name,
      byod_team: token.byod_fleet.name
    }
  );
  const options = (0,react.useMemo)(() => {
    return availableTeams == null ? void 0 : availableTeams.filter((t) => t.name !== "All fleets").map((t) => ({
      value: t.name,
      label: t.name
    }));
  }, [availableTeams]);
  const onSave = (0,react.useCallback)(
    (evt) => EditTeamsAbmModal_async(null, null, function* () {
      evt.preventDefault();
      setIsSaving(true);
      try {
        yield mdm_apple_bm/* default */.A.editTeams({
          tokenId: token.id,
          teams: getSelectedTeamIds(selectedTeamNames, availableTeams)
        });
        ToastNotification/* notify */.me.success(`Successfully updated fleets for ${token.org_name}`);
        onSuccess();
      } catch (e) {
        ToastNotification/* notify */.me.error("Couldn\u2019t edit. Please try again.", { response: e });
        onCancel();
      }
    }),
    [
      token.id,
      token.org_name,
      selectedTeamNames,
      availableTeams,
      onSuccess,
      onCancel
    ]
  );
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: EditTeamsAbmModal_baseClass,
      title: token.org_name,
      onExit: onCancel,
      width: "large",
      isContentDisabled: isSaving
    },
    /* @__PURE__ */ react.createElement("form", { onSubmit: onSave, className: EditTeamsAbmModal_baseClass, autoComplete: "off" }, /* @__PURE__ */ react.createElement(FormField/* default */.A, { name: "apple_id", label: "Apple ID" }, /* @__PURE__ */ react.createElement("p", null, token.apple_id)), /* @__PURE__ */ react.createElement(FormField/* default */.A, { name: "renew_date", label: "Renew date" }, /* @__PURE__ */ react.createElement(
      RenewDateCell/* default */.A,
      {
        value: token.renew_date,
        className: "abm-renew-date-cell"
      }
    )), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        searchable: false,
        options,
        onChange: (value) => {
          setSelectedTeamNames((prev) => EditTeamsAbmModal_spreadProps(EditTeamsAbmModal_spreadValues({}, prev), { macos_team: value }));
        },
        value: selectedTeamNames.macos_team,
        label: "macOS fleet",
        wrapperClassName: `${EditTeamsAbmModal_baseClass}__form-field form-field--macos`
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        searchable: false,
        options,
        onChange: (value) => {
          setSelectedTeamNames((prev) => EditTeamsAbmModal_spreadProps(EditTeamsAbmModal_spreadValues({}, prev), { ios_team: value }));
        },
        value: selectedTeamNames.ios_team,
        label: "iOS fleet",
        wrapperClassName: `${EditTeamsAbmModal_baseClass}__form-field form-field--ios`
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        searchable: false,
        options,
        onChange: (value) => setSelectedTeamNames((prev) => EditTeamsAbmModal_spreadProps(EditTeamsAbmModal_spreadValues({}, prev), { ipados_team: value })),
        value: selectedTeamNames.ipados_team,
        label: "iPadOS fleet",
        wrapperClassName: `${EditTeamsAbmModal_baseClass}__form-field form-field--ipados`
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        searchable: false,
        options,
        onChange: (value) => setSelectedTeamNames((prev) => EditTeamsAbmModal_spreadProps(EditTeamsAbmModal_spreadValues({}, prev), { byod_team: value })),
        value: selectedTeamNames.byod_team,
        label: "BYOD fleet",
        wrapperClassName: `${EditTeamsAbmModal_baseClass}__form-field form-field--byod`
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        className: "save-abm-teams-loading",
        isLoading: isSaving
      },
      "Save"
    )))
  );
};
/* harmony default export */ var EditTeamsAbmModal_EditTeamsAbmModal = (EditTeamsAbmModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/EditTeamsAbmModal/index.ts



// EXTERNAL MODULE: ./frontend/components/ModalFooter/index.ts + 1 modules
var ModalFooter = __webpack_require__(48262);
;// ./assets/images/default-for-sign-in-modal.png
var default_for_sign_in_modal_namespaceObject = __webpack_require__.p + "default-for-sign-in-modal@40e30b9c9a4b2b2ded2c.png";
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/RemoveDefaultTokenModal/RemoveDefaultTokenModal.tsx







const RemoveDefaultTokenModal_baseClass = "remove-default-token-modal";
const RemoveDefaultTokenModal = ({
  onExit,
  onRemoveDefault
}) => {
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { onExit, title: "Remove default for sign-in" }, /* @__PURE__ */ react.createElement("p", null, "If Allow Managed Apple Account on is set, hosts that manually enroll won't be able to sign in to Apple Services (e.g. iCloud) with Managed Apple Accounts."), /* @__PURE__ */ react.createElement(
    "img",
    {
      className: `${RemoveDefaultTokenModal_baseClass}__image`,
      src: default_for_sign_in_modal_namespaceObject,
      alt: "Apple Business - Access Management - Services"
    }
  ), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      newTab: true,
      url: "https://business.apple.com/main/preferences/accessmanagement/services",
      text: "Configure Apple Services"
    }
  )), /* @__PURE__ */ react.createElement(
    ModalFooter/* default */.A,
    {
      primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onRemoveDefault, variant: "alert" }, "Remove"))
    }
  ));
};
/* harmony default export */ var RemoveDefaultTokenModal_RemoveDefaultTokenModal = (RemoveDefaultTokenModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/RemoveDefaultTokenModal/index.ts



// EXTERNAL MODULE: ./frontend/components/FileUploader/FileUploader.tsx
var FileUploader_FileUploader = __webpack_require__(49109);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/RenewAbmModal/helpers.tsx


const helpers_DEFAULT_ERROR_MESSAGE = "Couldn\u2019t renew. Please try again.";
const helpers_getErrorMessage = (err) => {
  const invalidTokenReason = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "Invalid token"
  });
  if (invalidTokenReason) {
    return invalidTokenReason;
  }
  return helpers_DEFAULT_ERROR_MESSAGE;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/RenewAbmModal/RenewAbmModal.tsx

var RenewAbmModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};








const RenewAbmModal_baseClass = "renew-abm-modal";
const RenewAbmModal = ({
  tokenId,
  onCancel,
  onRenewedToken
}) => {
  const [isUploading, setIsUploading] = (0,react.useState)(false);
  const [tokenFile, setTokenFile] = (0,react.useState)(null);
  const onSelectFile = (0,react.useCallback)((files) => {
    const file = files == null ? void 0 : files[0];
    if (file) {
      setTokenFile(file);
    }
  }, []);
  const onRenewToken = (0,react.useCallback)(() => RenewAbmModal_async(null, null, function* () {
    if (!tokenFile) {
      ToastNotification/* notify */.me.error("Please provide a token file.");
      return;
    }
    setIsUploading(true);
    try {
      yield mdm_apple_bm/* default */.A.renewToken(tokenId, tokenFile);
      ToastNotification/* notify */.me.success("Renewed successfully.");
      setIsUploading(false);
      onRenewedToken();
    } catch (e) {
      ToastNotification/* notify */.me.error(helpers_getErrorMessage(e), { response: e });
      onCancel();
      setIsUploading(false);
    }
  }), [tokenFile, tokenId, onRenewedToken, onCancel]);
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Renew token",
      onExit: onCancel,
      className: RenewAbmModal_baseClass,
      isContentDisabled: isUploading,
      width: "large"
    },
    /* @__PURE__ */ react.createElement("div", { className: `${RenewAbmModal_baseClass}__page-content ${RenewAbmModal_baseClass}__setup-content` }, /* @__PURE__ */ react.createElement("p", null, "Follow the step-by-step guide to renew.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/learn-more-about/renew-abm",
        text: "Learn how",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement(
      FileUploader_FileUploader/* FileUploader */.l,
      {
        className: `${RenewAbmModal_baseClass}__file-uploader`,
        accept: ".p7m",
        buttonMessage: "Choose file",
        buttonType: "secondary",
        graphicName: "file-p7m",
        message: "AB token (.p7m)",
        onFileUpload: onSelectFile,
        fileDetails: tokenFile ? { name: tokenFile.name } : void 0
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${RenewAbmModal_baseClass}__submit-button ${isUploading ? `uploading` : ""}`,
        disabled: !tokenFile || isUploading,
        isLoading: isUploading,
        type: "button",
        onClick: onRenewToken
      },
      "Renew AB"
    )))
  );
};
/* harmony default export */ var RenewAbmModal_RenewAbmModal = (RenewAbmModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/RenewAbmModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/SetDefaultTokenModal/SetDefaultTokenModal.tsx







const SetDefaultTokenModal_baseClass = "set-default-token-modal";
const SetDefaultTokenModal = ({
  onExit,
  onSetDefault
}) => {
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { onExit, title: "Set as default for sign-in" }, /* @__PURE__ */ react.createElement("p", null, "To restrict Managed Apple Account sign-in to managed devices, you also need to turn on the restriction in Apple Business. Mesh can't turn it on for you."), /* @__PURE__ */ react.createElement(
    "img",
    {
      className: `${SetDefaultTokenModal_baseClass}__image`,
      src: default_for_sign_in_modal_namespaceObject,
      alt: "Apple Business - Access Management - Services"
    }
  ), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      newTab: true,
      url: "https://business.apple.com/main/preferences/accessmanagement/services",
      text: "Configure Apple Services"
    }
  )), /* @__PURE__ */ react.createElement(
    ModalFooter/* default */.A,
    {
      primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onSetDefault }, "Set as default"))
    }
  ));
};
/* harmony default export */ var SetDefaultTokenModal_SetDefaultTokenModal = (SetDefaultTokenModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/components/SetDefaultTokenModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/AppleBusinessManagerPage.tsx

var AppleBusinessManagerPage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





















const AppleBusinessManagerPage_baseClass = "apple-business-manager-page";
const AddAbmMessage = ({ onAddAbm }) => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "Add your AB",
      info: "Automatically enroll newly purchased Apple hosts when they're first unboxed and set up by your end users.",
      primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onAddAbm }, "Add AB")
    }
  );
};
const AppleBusinessManagerPage = ({ router }) => {
  var _a;
  const { config, isPremiumTier, setABMExpiry } = (0,react.useContext)(app/* AppContext */.BR);
  const [showRenewModal, setShowRenewModal] = (0,react.useState)(false);
  const [showDeleteModal, setShowDeleteModal] = (0,react.useState)(false);
  const [showAddAbmModal, setShowAddAbmModal] = (0,react.useState)(false);
  const [showEditTeamsModal, setShowEditTeamsModal] = (0,react.useState)(false);
  const [
    showRemoveDefaultTokenModal,
    setShowRemoveDefaultTokenModal
  ] = (0,react.useState)(false);
  const [showSetDefaultTokenModal, setShowSetDefaultTokenModal] = (0,react.useState)(
    false
  );
  const selectedToken = (0,react.useRef)(null);
  const {
    data: abTokens,
    error: errorAbmTokens,
    isLoading,
    refetch
  } = (0,es.useQuery)(
    ["abTokens"],
    () => mdm_apple_bm/* default */.A.getTokens(),
    {
      refetchOnWindowFocus: false,
      retry: (tries, error) => error.status !== 404 && error.status !== 400 && tries <= 3,
      select: (data) => data == null ? void 0 : data.ab_tokens,
      onSuccess: (data) => {
        if (data.length === 0) {
          setABMExpiry({
            earliestExpiry: "",
            needsAbmTermsRenewal: false,
            hasInvalidABMToken: false,
            invalidAbmTokenOrgNames: []
          });
        } else {
          setABMExpiry({
            earliestExpiry: (0,App/* getEarliestExpiry */.d)(data),
            needsAbmTermsRenewal: data.some((token) => token.terms_expired),
            hasInvalidABMToken: data.some((token) => token.token_invalid),
            invalidAbmTokenOrgNames: data.filter((token) => token.token_invalid).map((token) => token.org_name)
          });
        }
      },
      enabled: isPremiumTier
    }
  );
  const onEditTokenTeam = (abmToken) => {
    selectedToken.current = abmToken;
    setShowEditTeamsModal(true);
  };
  const onCancelEditTeam = (0,react.useCallback)(() => {
    selectedToken.current = null;
    setShowEditTeamsModal(false);
  }, []);
  const onEditedTeam = (0,react.useCallback)(() => {
    selectedToken.current = null;
    refetch();
    setShowEditTeamsModal(false);
  }, [refetch]);
  const onClickToggleTokenDefault = (abmToken) => {
    if (abmToken.default) {
      setShowRemoveDefaultTokenModal(true);
    } else {
      setShowSetDefaultTokenModal(true);
    }
    selectedToken.current = abmToken;
  };
  const onToggleTokenDefault = (0,react.useCallback)(
    (abmToken) => AppleBusinessManagerPage_async(null, null, function* () {
      try {
        yield mdm_apple_bm/* default */.A.updateTokenDefault(abmToken.id, !abmToken.default);
        ToastNotification/* notify */.me.success("Successfully updated default token.");
      } catch (e) {
        ToastNotification/* notify */.me.error("Couldn't update default token. Please try again.", {
          response: e
        });
      }
      refetch();
    }),
    [refetch]
  );
  const onAddAbm = () => {
    setShowAddAbmModal(true);
  };
  const onAdded = () => {
    refetch();
    setShowAddAbmModal(false);
  };
  const onRenewToken = (abmToken) => {
    selectedToken.current = abmToken;
    setShowRenewModal(true);
  };
  const onCancelRenewToken = (0,react.useCallback)(() => {
    selectedToken.current = null;
    setShowRenewModal(false);
  }, []);
  const onRenewed = (0,react.useCallback)(() => AppleBusinessManagerPage_async(null, null, function* () {
    var _a2;
    const renewedTokenId = (_a2 = selectedToken.current) == null ? void 0 : _a2.id;
    selectedToken.current = null;
    setShowRenewModal(false);
    const { data: refetchedTokens } = yield refetch();
    if (renewedTokenId !== void 0 && (refetchedTokens == null ? void 0 : refetchedTokens.length)) {
      const invalidAbmTokenOrgNames = Array.from(
        new Set(
          refetchedTokens.filter(
            (token) => token.token_invalid && token.id !== renewedTokenId
          ).map((token) => token.org_name)
        )
      );
      setABMExpiry({
        earliestExpiry: (0,App/* getEarliestExpiry */.d)(refetchedTokens),
        needsAbmTermsRenewal: refetchedTokens.some(
          (token) => token.terms_expired
        ),
        hasInvalidABMToken: invalidAbmTokenOrgNames.length > 0,
        invalidAbmTokenOrgNames
      });
    }
  }), [refetch, setABMExpiry]);
  const onDeleteToken = (abmToken) => {
    selectedToken.current = abmToken;
    setShowDeleteModal(true);
  };
  const onCancelDeleteToken = (0,react.useCallback)(() => {
    selectedToken.current = null;
    setShowDeleteModal(false);
  }, []);
  const onDeleted = (0,react.useCallback)(() => {
    selectedToken.current = null;
    refetch();
    setShowDeleteModal(false);
  }, [refetch]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  const showDataError = errorAbmTokens && errorAbmTokens.status !== 404;
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (!(config == null ? void 0 : config.mdm.enabled_and_configured)) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "Turn on Apple MDM",
          info: "To add your AB and enable automatic enrollment for macOS, iOS, and iPadOS hosts, first turn on Apple MDM.",
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      );
    }
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (showDataError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    if ((abTokens == null ? void 0 : abTokens.length) === 0) {
      return /* @__PURE__ */ react.createElement(AddAbmMessage, { onAddAbm });
    }
    if (abTokens) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Add your AB to enable automatic enrollment for company-owned hosts and enrollment, via a Managed Apple Account, for BYOD hosts."), /* @__PURE__ */ react.createElement(
        AppleBusinessManagerTable_AppleBusinessManagerTable,
        {
          abTokens,
          onEditTokenTeam,
          onToggleTokenDefault: onClickToggleTokenDefault,
          onRenewToken,
          onDeleteToken
        }
      ));
    }
    return null;
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: AppleBusinessManagerPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${AppleBusinessManagerPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
    BackButton/* default */.A,
    {
      text: "Back to MDM",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
      className: `${AppleBusinessManagerPage_baseClass}__back-to-mdm`
    }
  )), /* @__PURE__ */ react.createElement("div", { className: `${AppleBusinessManagerPage_baseClass}__page-content` }, /* @__PURE__ */ react.createElement("div", { className: `${AppleBusinessManagerPage_baseClass}__page-header-section` }, /* @__PURE__ */ react.createElement("h1", null, "Apple Business (AB)"), isPremiumTier && (abTokens == null ? void 0 : abTokens.length) !== 0 && !!(config == null ? void 0 : config.mdm.enabled_and_configured) && /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onAddAbm }, "Add AB")), /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent()))), showAddAbmModal && /* @__PURE__ */ react.createElement(
    AddAbmModal_AddAbmModal,
    {
      onAdded,
      onCancel: () => setShowAddAbmModal(false)
    }
  ), showRenewModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    RenewAbmModal_RenewAbmModal,
    {
      tokenId: selectedToken.current.id,
      onCancel: onCancelRenewToken,
      onRenewedToken: onRenewed
    }
  ), showDeleteModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    DeleteAbmModal_DeleteAbmModal,
    {
      tokenOrgName: selectedToken.current.org_name,
      tokenId: selectedToken.current.id,
      tokenIsDefault: selectedToken.current.default,
      tokensCount: (_a = abTokens == null ? void 0 : abTokens.length) != null ? _a : 0,
      onCancel: onCancelDeleteToken,
      onDeletedToken: onDeleted
    }
  ), showEditTeamsModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    EditTeamsAbmModal_EditTeamsAbmModal,
    {
      token: selectedToken.current,
      onCancel: onCancelEditTeam,
      onSuccess: onEditedTeam
    }
  ), showRemoveDefaultTokenModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    RemoveDefaultTokenModal_RemoveDefaultTokenModal,
    {
      onExit: () => setShowRemoveDefaultTokenModal(false),
      onRemoveDefault: () => {
        if (selectedToken.current) {
          onToggleTokenDefault(selectedToken.current);
          setShowRemoveDefaultTokenModal(false);
        }
      }
    }
  ), showSetDefaultTokenModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    SetDefaultTokenModal_SetDefaultTokenModal,
    {
      onExit: () => setShowSetDefaultTokenModal(false),
      onSetDefault: () => {
        if (selectedToken.current) {
          onToggleTokenDefault(selectedToken.current);
          setShowSetDefaultTokenModal(false);
        }
      }
    }
  ));
};
/* harmony default export */ var AppleBusinessManagerPage_AppleBusinessManagerPage = (AppleBusinessManagerPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleBusinessManagerPage/index.ts




/***/ }),

/***/ 45944:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ AppleMdmPage_AppleMdmPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/interfaces/mdm.ts
var mdm = __webpack_require__(42550);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/mdm_apple.ts
var mdm_apple = __webpack_require__(82635);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/components/content/ApplePushCertInfo.tsx




const ApplePushCertInfo = ({
  baseClass,
  appleAPNInfo,
  orgName,
  serverUrl,
  onClickRenew,
  onClickTurnOff
}) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("dl", { className: `${baseClass}__page-content ${baseClass}__apc-info` }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("dt", null, "Common name (CN)"), /* @__PURE__ */ react.createElement("dd", null, appleAPNInfo.common_name)), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("dt", null, "Organization name"), /* @__PURE__ */ react.createElement("dd", null, orgName)), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("dt", null, "MDM server URL"), /* @__PURE__ */ react.createElement("dd", null, serverUrl)), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("dt", null, "Renew date"), /* @__PURE__ */ react.createElement("dd", null, (0,helpers/* readableDate */.l4)(appleAPNInfo.renew_date)))), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__apns-button-wrap` }, /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onClickTurnOff }, "Turn off MDM"), /* @__PURE__ */ react.createElement(Button/* default */.A, { className: "save-loading", onClick: onClickRenew }, "Renew certificate")));
};
/* harmony default export */ var content_ApplePushCertInfo = (ApplePushCertInfo);

// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/pages/admin/components/DownloadFileButtons/helpers.ts
var DownloadFileButtons_helpers = __webpack_require__(29422);
;// ./frontend/pages/admin/components/DownloadFileButtons/DownloadCSR.tsx

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





const downloadCSRFile = (data) => {
  (0,DownloadFileButtons_helpers/* downloadBase64ToFile */.D)(data.csr, "fleet-mdm-apple.csr");
};
const useDownloadCSR = ({
  onSuccess,
  onError
}) => {
  const [downloadState, setDownloadState] = (0,react.useState)(void 0);
  const handleDownload = (0,react.useCallback)(
    (evt) => __async(null, null, function* () {
      evt.preventDefault();
      setDownloadState("loading");
      try {
        const data = yield mdm_apple/* default */.A.requestCSR();
        downloadCSRFile(data);
        setDownloadState("success");
        onSuccess && onSuccess();
      } catch (e) {
        setDownloadState("error");
        onError && onError(e);
      }
    }),
    [onError, onSuccess]
  );
  const memoized = (0,react.useMemo)(
    () => ({
      downloadState,
      handleDownload
    }),
    [downloadState, handleDownload]
  );
  return memoized;
};
const DownloadCSR = ({
  baseClass,
  onSuccess,
  onError
}) => {
  const { handleDownload } = useDownloadCSR({ onSuccess, onError });
  return /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${baseClass}__request-button`,
      variant: "secondary",
      onClick: handleDownload
    },
    /* @__PURE__ */ react.createElement("label", { htmlFor: "request-csr" }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "download" }), /* @__PURE__ */ react.createElement("span", null, "Download CSR"))
  );
};
/* harmony default export */ var DownloadFileButtons_DownloadCSR = (DownloadCSR);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/components/content/ApplePushCertSetup.tsx

var ApplePushCertSetup_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};







const ApplePushCertSetup = ({
  baseClass,
  onSetupSuccess
}) => {
  const [isUploading, setIsUploading] = (0,react.useState)(false);
  const onFileUpload = (0,react.useCallback)(
    (files) => ApplePushCertSetup_async(null, null, function* () {
      if (!(files == null ? void 0 : files.length)) {
        ToastNotification/* notify */.me.error("No file selected");
        return;
      }
      setIsUploading(true);
      try {
        yield mdm_apple/* default */.A.uploadApplePushCertificate(files[0]);
        ToastNotification/* notify */.me.success("MDM turned on successfully.");
        onSetupSuccess();
      } catch (e) {
        const msg = (0,errors/* getErrorReason */.F3)(e);
        if (msg.toLowerCase().includes("required private key")) {
          ToastNotification/* notify */.me.error(
            /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't add APNs certificate. Please configure a private key.", " ", /* @__PURE__ */ react.createElement(
              CustomLink/* default */.A,
              {
                url: "https://fleetdm.com/learn-more-about/fleet-server-private-key",
                text: "Learn how",
                newTab: true,
                variant: "flash-message-link"
              }
            )),
            { response: e }
          );
        } else {
          ToastNotification/* notify */.me.error(msg || "Couldn\u2019t connect. Please try again.", {
            response: e
          });
        }
        setIsUploading(false);
      }
    }),
    [onSetupSuccess]
  );
  const onDownloadError = (0,react.useCallback)((e) => {
    const msg = (0,errors/* getErrorReason */.F3)(e);
    if (msg.includes("is not permitted for APNS certificate signing.")) {
      ToastNotification/* notify */.me.error(msg, { response: e });
    } else if (msg.toLowerCase().includes("required private key")) {
      ToastNotification/* notify */.me.error(
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't download. Please configure a private key.", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: "https://fleetdm.com/learn-more-about/fleet-server-private-key",
            text: "Learn how",
            newTab: true,
            variant: "flash-message-link"
          }
        )),
        { response: e }
      );
    } else {
      ToastNotification/* notify */.me.error("Something's gone wrong. Please try again.", {
        response: e
      });
    }
  }, []);
  return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__page-content ${baseClass}__setup-content` }, /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__setup-description` }, "Follow the step-by-step guide to turn on Apple MDM.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/turn-on-apple-mdm",
      text: "Learn how",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement(DownloadFileButtons_DownloadCSR, { baseClass, onError: onDownloadError }), /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      className: `${baseClass}__file-uploader ${isUploading ? `${baseClass}__file-uploader--loading` : ""}`,
      accept: ".pem",
      buttonMessage: isUploading ? "Uploading..." : "Upload",
      buttonType: "secondary",
      disabled: isUploading,
      graphicName: "file-pem",
      message: "APNs certificate (.pem)",
      onFileUpload
    }
  ));
};
/* harmony default export */ var content_ApplePushCertSetup = (ApplePushCertSetup);

// EXTERNAL MODULE: ./frontend/components/FileUploader/FileUploader.tsx
var FileUploader_FileUploader = __webpack_require__(49109);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/components/modals/RenewCertModal/RenewCertModal.tsx

var RenewCertModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const baseClass = "modal renew-cert-modal";
const RenewCertModal = ({
  onCancel,
  onRenew
}) => {
  const [isUploading, setIsUploading] = (0,react.useState)(false);
  const [certFile, setCertFile] = (0,react.useState)(null);
  const onSelectFile = (0,react.useCallback)((files) => {
    const file = files == null ? void 0 : files[0];
    if (file) {
      setCertFile(file);
    }
  }, []);
  const onRenewClick = (0,react.useCallback)(() => RenewCertModal_async(null, null, function* () {
    if (!certFile) {
      ToastNotification/* notify */.me.error("Please provide a certificate file.");
      return;
    }
    setIsUploading(true);
    try {
      yield mdm_apple/* default */.A.uploadApplePushCertificate(certFile);
      ToastNotification/* notify */.me.success("APNs certificate renewed successfully.");
      setIsUploading(false);
      onRenew();
    } catch (e) {
      console.error(e);
      const msg = (0,errors/* getErrorReason */.F3)(e);
      ToastNotification/* notify */.me.error(msg || "Couldn\u2019t renew. Please try again.", {
        response: e
      });
      setIsUploading(false);
      onCancel();
    }
  }), [certFile, onCancel, onRenew]);
  const onDownloadError = (0,react.useCallback)((e) => {
    const msg = (0,errors/* getErrorReason */.F3)(e);
    if (msg.includes("is not permitted for APNS certificate signing.")) {
      ToastNotification/* notify */.me.error(msg, { response: e });
    } else if (msg.toLowerCase().includes("required private key")) {
      ToastNotification/* notify */.me.error(
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't download. Please configure a private key.", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: "https://fleetdm.com/learn-more-about/fleet-server-private-key",
            text: "Learn how",
            newTab: true,
            variant: "flash-message-link"
          }
        )),
        { response: e }
      );
    } else {
      ToastNotification/* notify */.me.error("Something's gone wrong. Please try again.", {
        response: e
      });
    }
  }, []);
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Renew certificate", onExit: onCancel, className: baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__page-content ${baseClass}__setup-content` }, /* @__PURE__ */ react.createElement("p", null, "Follow the step-by-step guide to renew.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/renew-apns",
      text: "Learn how",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement(
    FileUploader_FileUploader/* FileUploader */.l,
    {
      className: `${baseClass}__file-uploader`,
      accept: ".pem",
      buttonMessage: "Choose file",
      buttonType: "secondary",
      graphicName: "file-pem",
      message: "APNs certificate (.pem)",
      onFileUpload: onSelectFile,
      fileDetails: certFile ? { name: certFile.name } : void 0
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__button-wrap` }, /* @__PURE__ */ react.createElement(DownloadFileButtons_DownloadCSR, { baseClass, onError: onDownloadError }), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${baseClass}__submit-button ${isUploading ? `uploading` : ""}`,
      disabled: !certFile || isUploading,
      isLoading: isUploading,
      type: "button",
      onClick: onRenewClick
    },
    "Renew certificate"
  ))));
};
/* harmony default export */ var RenewCertModal_RenewCertModal = (RenewCertModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/components/modals/RenewCertModal/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/components/modals/TurnOffAppleMdmModal/TurnOffAppleMdmModal.tsx





const TurnOffAppleMdmModal_baseClass = "modal turn-off-apple-mdm-modal";
const bemClass = "turn-off-apple-mdm-modal";
const TurnOffAppleMdmModal = ({
  serverUrl,
  onConfirm,
  onCancel
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const [enteredUrl, setEnteredUrl] = (0,react.useState)("");
  const onClickConfirm = (0,react.useCallback)(() => {
    setIsDeleting(true);
    onConfirm();
  }, [onConfirm]);
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Turn off MDM", onExit: onCancel, className: TurnOffAppleMdmModal_baseClass }, /* @__PURE__ */ react.createElement("div", { className: TurnOffAppleMdmModal_baseClass }, /* @__PURE__ */ react.createElement("p", null, "If you want to use MDM features again, you'll have to upload a new APNs certificate and all end users will have to turn MDM off and back on."), /* @__PURE__ */ react.createElement("p", null, "To confirm, enter your Mesh URL: ", /* @__PURE__ */ react.createElement("b", null, serverUrl)), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      autofocus: true,
      inputWrapperClass: `${bemClass}__url-input`,
      placeholder: "https://fleet.example.com",
      value: enteredUrl,
      onChange: (val) => setEnteredUrl(val)
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "button",
      variant: "alert",
      onClick: onClickConfirm,
      isLoading: isDeleting,
      disabled: isDeleting || enteredUrl !== serverUrl
    },
    "Turn off"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, disabled: isDeleting, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var TurnOffAppleMdmModal_TurnOffAppleMdmModal = (TurnOffAppleMdmModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/components/modals/TurnOffAppleMdmModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/AppleMdmPage.tsx

var AppleMdmPage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};















const AppleMdmPage_baseClass = "apple-mdm-page";
const AppleMdmPage = ({ router }) => {
  var _a;
  const queryClient = (0,es.useQueryClient)();
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [showRenewCertModal, setShowRenewCertModal] = (0,react.useState)(false);
  const [showTurnOffMdmModal, setShowTurnOffMdmModal] = (0,react.useState)(false);
  const {
    data: appleAPNInfo,
    isLoading,
    isRefetching,
    refetch,
    error: errorMdmApple
  } = (0,es.useQuery)(
    [
      "apppleMDMPage-appleAPNInfo",
      { isMdmEnabled: (_a = config == null ? void 0 : config.mdm.enabled_and_configured) != null ? _a : false }
    ],
    () => mdm_apple/* default */.A.getAppleAPNInfo(),
    {
      retry: (tries, error) => error.status !== 404 && tries <= 3,
      enabled: config == null ? void 0 : config.mdm.enabled_and_configured,
      staleTime: 5e3,
      refetchOnWindowFocus: false,
      onSettled: () => setIsUpdating(false)
    }
  );
  const toggleRenewCertModal = () => {
    setShowRenewCertModal((prevState) => !prevState);
  };
  const toggleTurnOffMdmModal = () => {
    setShowTurnOffMdmModal((prevState) => !prevState);
  };
  const turnOffMdm = (0,react.useCallback)(() => AppleMdmPage_async(null, null, function* () {
    setIsUpdating(true);
    toggleTurnOffMdmModal();
    try {
      yield mdm_apple/* default */.A.deleteApplePushCertificate();
      yield queryClient.invalidateQueries(["config"]);
      ToastNotification/* notify */.me.success("MDM turned off successfully.");
      router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM);
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn't turn off MDM. Please try again.", {
        response: e
      });
      setIsUpdating(false);
    }
  }), [queryClient, router]);
  const onRenewCert = (0,react.useCallback)(() => {
    refetch();
    toggleRenewCertModal();
  }, [refetch]);
  const onSetupSuccess = (0,react.useCallback)(() => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM);
  }, [router]);
  const isMdmNotConfigured = errorMdmApple && errorMdmApple.status !== 404;
  const showSpinner = isLoading || isUpdating || isRefetching;
  const showError = !config || isMdmNotConfigured;
  const showContent = !showSpinner && !showError;
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: AppleMdmPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${AppleMdmPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
    BackButton/* default */.A,
    {
      text: "Back to MDM",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
      className: `${AppleMdmPage_baseClass}__back-to-mdm`
    }
  )), /* @__PURE__ */ react.createElement("h1", null, "Apple Push Certificate Portal"), showSpinner && /* @__PURE__ */ react.createElement(Spinner/* default */.A, null), showError && /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" }), showContent && (!appleAPNInfo ? /* @__PURE__ */ react.createElement(
    content_ApplePushCertSetup,
    {
      baseClass: AppleMdmPage_baseClass,
      onSetupSuccess
    }
  ) : /* @__PURE__ */ react.createElement(
    content_ApplePushCertInfo,
    {
      baseClass: AppleMdmPage_baseClass,
      appleAPNInfo,
      orgName: config.org_info.org_name,
      serverUrl: (0,mdm/* getMdmServerUrl */.rc)(config.server_settings),
      onClickRenew: toggleRenewCertModal,
      onClickTurnOff: toggleTurnOffMdmModal
    }
  )), showRenewCertModal && /* @__PURE__ */ react.createElement(
    RenewCertModal_RenewCertModal,
    {
      onCancel: toggleRenewCertModal,
      onRenew: onRenewCert
    }
  ), showTurnOffMdmModal && config && /* @__PURE__ */ react.createElement(
    TurnOffAppleMdmModal_TurnOffAppleMdmModal,
    {
      serverUrl: config.server_settings.server_url,
      onCancel: toggleTurnOffMdmModal,
      onConfirm: turnOffMdm
    }
  )));
};
/* harmony default export */ var AppleMdmPage_AppleMdmPage = (AppleMdmPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/AppleMdmPage/index.ts




/***/ }),

/***/ 58332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ MicrosoftGraphPage_MicrosoftGraphPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_uuid/valid_uuid.ts
var valid_uuid = __webpack_require__(78789);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/microsoft_graph_credentials.ts
var microsoft_graph_credentials = __webpack_require__(83246);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/strings/stringUtils.ts
var stringUtils = __webpack_require__(18165);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/MicrosoftGraphPage/DeleteMicrosoftGraphCredentialModal/DeleteMicrosoftGraphCredentialModal.tsx

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





const baseClass = "delete-microsoft-graph-credential-modal";
const DeleteMicrosoftGraphCredentialModal = ({
  onExit,
  onDeleted
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDeleteCredential = () => __async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield microsoft_graph_credentials/* default */.A.deleteCredentials();
      ToastNotification/* notify */.me.success("Successfully deleted Microsoft Graph credential.");
      onDeleted();
    } catch (err) {
      ToastNotification/* notify */.me.error("Couldn't delete Microsoft Graph credential.", {
        response: err
      });
      setIsDeleting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: baseClass,
      title: "Delete credential",
      onExit,
      width: "medium",
      isContentDisabled: isDeleting
    },
    /* @__PURE__ */ react.createElement("p", null, "Mesh will stop syncing Windows Autopilot devices from this tenant. Devices already synced will remain as pending hosts until they enroll or you delete them."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onDeleteCredential,
        variant: "alert",
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteMicrosoftGraphCredentialModal_DeleteMicrosoftGraphCredentialModal = (DeleteMicrosoftGraphCredentialModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/MicrosoftGraphPage/DeleteMicrosoftGraphCredentialModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/MicrosoftGraphPage/MicrosoftGraphPage.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var MicrosoftGraphPage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

























const MicrosoftGraphPage_baseClass = "microsoft-graph-page";
const ID_MAX_LENGTH = 255;
const SECRET_MAX_LENGTH = 1024;
const STORED_SECRET_PLACEHOLDER = constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1;
const SECRET_REQUIRED_ERROR = "Enter a client secret";
const CREDENTIAL_FIELDS = [
  "tenantId",
  "clientId",
  "clientSecret"
];
const identityMatchesStored = (ids, stored) => (0,stringUtils/* equalsIgnoreCase */.Q_)(ids.tenantId.trim(), stored.tenant_id) && (0,stringUtils/* equalsIgnoreCase */.Q_)(ids.clientId.trim(), stored.client_id);
const SERVER_ERROR_NAMES = {
  tenantId: "microsoft_graph_credentials.tenant_id",
  clientId: "microsoft_graph_credentials.client_id",
  clientSecret: "microsoft_graph_credentials.client_secret"
};
const getServerFieldErrors = (err) => {
  const errs = {};
  CREDENTIAL_FIELDS.forEach((field) => {
    const reason = (0,errors/* getErrorReason */.F3)(err, {
      nameEquals: SERVER_ERROR_NAMES[field]
    });
    if (reason) {
      errs[field] = reason;
    }
  });
  return errs;
};
const MicrosoftGraphPage = () => {
  const { config, isPremiumTier, setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  const [formData, setFormData] = (0,react.useState)({
    tenantId: "",
    clientId: "",
    clientSecret: ""
  });
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const [showDeleteModal, setShowDeleteModal] = (0,react.useState)(false);
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [dirtyFields, setDirtyFields] = (0,react.useState)({});
  const { tenantId, clientId, clientSecret } = formData;
  const { data: credentialsResponse, isLoading, isError, refetch } = (0,es.useQuery)(
    ["microsoft-graph-credentials"],
    () => microsoft_graph_credentials/* default */.A.getCredentials(),
    {
      enabled: isPremiumTier,
      // Left on React Query's default so the sync status refreshes when the admin returns from the Entra portal. The
      // sync cron runs every 5 minutes, so a snapshot taken at mount goes wrong quickly on a page left open.
      refetchOnWindowFocus: true
    }
  );
  const storedCredential = credentialsResponse == null ? void 0 : credentialsResponse.microsoft_graph_credentials[0];
  (0,react.useEffect)(() => {
    var _a, _b;
    setFormData({
      tenantId: (_a = storedCredential == null ? void 0 : storedCredential.tenant_id) != null ? _a : "",
      clientId: (_b = storedCredential == null ? void 0 : storedCredential.client_id) != null ? _b : "",
      clientSecret: storedCredential ? STORED_SECRET_PLACEHOLDER : ""
    });
    setFormErrors({});
    setDirtyFields({});
  }, [storedCredential == null ? void 0 : storedCredential.tenant_id, storedCredential == null ? void 0 : storedCredential.client_id]);
  const markDirty = (field) => setDirtyFields((prev) => prev[field] ? prev : __spreadProps(__spreadValues({}, prev), { [field]: true }));
  const onInputChange = ({ name, value }) => {
    const field = name;
    const nextValue = String(value);
    markDirty(field);
    setFormData((prev) => {
      const updated = __spreadProps(__spreadValues({}, prev), { [field]: nextValue });
      if (storedCredential && field !== "clientSecret") {
        const identityUnchanged = identityMatchesStored(
          updated,
          storedCredential
        );
        if (prev.clientSecret === STORED_SECRET_PLACEHOLDER && !identityUnchanged) {
          updated.clientSecret = "";
        } else if (prev.clientSecret === "" && identityUnchanged && !dirtyFields.clientSecret) {
          updated.clientSecret = STORED_SECRET_PLACEHOLDER;
        }
      }
      return updated;
    });
  };
  const identityChanged = !!storedCredential && !identityMatchesStored(formData, storedCredential);
  const secretChanged = clientSecret !== "" && clientSecret !== STORED_SECRET_PLACEHOLDER;
  const secretRequired = !storedCredential || identityChanged;
  (0,react.useEffect)(() => {
    if (secretRequired) {
      return;
    }
    setFormErrors(
      (prev) => prev.clientSecret === SECRET_REQUIRED_ERROR ? __spreadProps(__spreadValues({}, prev), { clientSecret: void 0 }) : prev
    );
  }, [secretRequired]);
  const validate = () => {
    const errs = {};
    if (tenantId.trim() === "") {
      errs.tenantId = "Enter a tenant ID";
    } else if (!(0,valid_uuid/* default */.A)(tenantId.trim())) {
      errs.tenantId = "Enter a tenant ID in GUID format";
    }
    if (clientId.trim() === "") {
      errs.clientId = "Enter a client ID";
    } else if (!(0,valid_uuid/* default */.A)(clientId.trim())) {
      errs.clientId = "Enter a client ID in GUID format";
    }
    if (secretRequired && !secretChanged) {
      errs.clientSecret = SECRET_REQUIRED_ERROR;
    }
    return errs;
  };
  const onBlurField = (field) => () => {
    if (!dirtyFields[field]) {
      return;
    }
    const errs = validate();
    setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { [field]: errs[field] }));
  };
  const onFocusField = (field) => () => setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { [field]: void 0 }));
  const clearInvalidCredentialBanner = () => {
    if (!(config == null ? void 0 : config.mdm.microsoft_graph_credential_invalid)) {
      return;
    }
    setConfig(__spreadProps(__spreadValues({}, config), {
      mdm: __spreadProps(__spreadValues({}, config.mdm), { microsoft_graph_credential_invalid: false })
    }));
  };
  const onSave = (evt) => MicrosoftGraphPage_async(null, null, function* () {
    evt.preventDefault();
    if (isSaving) {
      return;
    }
    const errs = validate();
    setFormErrors(errs);
    if (Object.keys(errs).length > 0) {
      return;
    }
    const credential = {
      tenant_id: tenantId.trim(),
      client_id: clientId.trim()
    };
    if (secretChanged) {
      credential.client_secret = clientSecret;
    }
    setIsSaving(true);
    try {
      yield microsoft_graph_credentials/* default */.A.applyCredentials([credential]);
      setFormData((prev) => __spreadProps(__spreadValues({}, prev), {
        clientSecret: STORED_SECRET_PLACEHOLDER
      }));
      ToastNotification/* notify */.me.success("Successfully saved Microsoft Graph credential.");
      refetch();
      clearInvalidCredentialBanner();
    } catch (e) {
      const fieldErrors = getServerFieldErrors(e);
      const messages = Object.values(fieldErrors);
      if (messages.length > 0) {
        setFormErrors((prev) => __spreadValues(__spreadValues({}, prev), fieldErrors));
        ToastNotification/* notify */.me.batch(
          messages.map((message) => ({ variant: "error", message }))
        );
      } else {
        ToastNotification/* notify */.me.error("Couldn't save Microsoft Graph credential.", {
          response: e
        });
      }
    } finally {
      setIsSaving(false);
    }
  });
  const onDeleted = () => {
    setShowDeleteModal(false);
    refetch();
    clearInvalidCredentialBanner();
  };
  const renderSyncStatus = () => {
    if (!storedCredential) {
      return null;
    }
    const {
      last_synced_at,
      last_sync_error,
      credential_invalid
    } = storedCredential;
    const showSyncError = !!last_sync_error && !credential_invalid;
    return /* @__PURE__ */ react.createElement("div", { className: `${MicrosoftGraphPage_baseClass}__sync-status` }, /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        orientation: "horizontal",
        textOnly: true,
        title: "Last synced",
        value: last_synced_at ? /* @__PURE__ */ react.createElement(HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T, { timeString: last_synced_at }) : "Never"
      }
    ), showSyncError && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        showArrow: true,
        underline: false,
        position: "top",
        tipContent: last_sync_error
      },
      /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "error" })
    ), /* @__PURE__ */ react.createElement("span", { className: "sr-only" }, last_sync_error)));
  };
  const renderField = (field, label, extra) => /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      isInputField: true,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        __spreadValues({
          label,
          name: field,
          value: formData[field],
          onChange: onInputChange,
          parseTarget: true,
          error: formErrors[field],
          onFocus: onFocusField(field),
          onBlur: onBlurField(field),
          inputOptions: {
            maxLength: field === "clientSecret" ? SECRET_MAX_LENGTH : ID_MAX_LENGTH
          },
          disabled: disableChildren || isSaving
        }, extra)
      )
    }
  );
  const renderForm = () => /* @__PURE__ */ react.createElement("form", { onSubmit: onSave }, renderField("tenantId", "Tenant ID"), renderField("clientId", "Client ID"), renderField("clientSecret", "Client secret", {
    type: "password",
    blockAutoComplete: true
  }), /* @__PURE__ */ react.createElement("div", { className: `button-wrap ${MicrosoftGraphPage_baseClass}__form-actions` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: disableChildren || isSaving,
          isLoading: isSaving
        },
        "Save"
      )
    }
  ), !!storedCredential && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "secondary",
          onClick: () => setShowDeleteModal(true),
          disabled: disableChildren || isSaving
        },
        "Delete"
      )
    }
  )));
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, renderSyncStatus(), renderForm());
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: MicrosoftGraphPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${MicrosoftGraphPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to MDM", path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM })), /* @__PURE__ */ react.createElement("h1", null, "Microsoft Graph"), /* @__PURE__ */ react.createElement("div", { className: `${MicrosoftGraphPage_baseClass}__content-container` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh uses a Microsoft Entra app registration to read your tenant's Windows Autopilot devices and show them as pending hosts. To create it, follow the instructions in the", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          text: "guide",
          url: "https://fleetdm.com/learn-more-about/connect-microsoft-graph"
        }
      ))
    }
  ), renderContent()), showDeleteModal && /* @__PURE__ */ react.createElement(
    DeleteMicrosoftGraphCredentialModal_DeleteMicrosoftGraphCredentialModal,
    {
      onExit: () => setShowDeleteModal(false),
      onDeleted
    }
  )));
};
/* harmony default export */ var MicrosoftGraphPage_MicrosoftGraphPage = (MicrosoftGraphPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/MicrosoftGraphPage/index.ts




/***/ }),

/***/ 26132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ VppPage_VppPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/mdm_apple.ts
var mdm_apple = __webpack_require__(82635);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/AddVppModal/helpers.tsx



const DEFAULT_ERROR_MESSAGE = "Couldn\u2019t add. Please try again.";
const generateDuplicateMessage = (msg) => {
  const orgName = msg.split("'")[1];
  if (!orgName) {
    return "Couldn't add. A VPP connection already exists for this organization unit.";
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't add. There's already a VPP connection for the", " ", /* @__PURE__ */ react.createElement("b", null, orgName), " organization unit.");
};
const getErrorMessage = (err) => {
  const duplicateEntryReason = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "Duplicate entry"
  });
  const invalidTokenReason = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "Invalid token"
  });
  if (duplicateEntryReason) {
    return generateDuplicateMessage(duplicateEntryReason);
  }
  if (invalidTokenReason) {
    return invalidTokenReason;
  }
  return DEFAULT_ERROR_MESSAGE;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/AddVppModal/AddVppModal.tsx

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};








const baseClass = "add-vpp-modal";
const AddVppModal = ({ onCancel, onAdded }) => {
  const [tokenFile, setTokenFile] = (0,react.useState)(null);
  const [isUploading, setIsUploading] = (0,react.useState)(false);
  const onSelectFile = (0,react.useCallback)((files) => {
    const file = files == null ? void 0 : files[0];
    if (file) {
      setTokenFile(file);
    }
  }, []);
  const uploadVppToken = (0,react.useCallback)(() => __async(null, null, function* () {
    setIsUploading(true);
    if (!tokenFile) {
      setIsUploading(false);
      ToastNotification/* notify */.me.error("No token selected.");
      return;
    }
    try {
      yield mdm_apple/* default */.A.uploadVppToken(tokenFile);
      ToastNotification/* notify */.me.success("Added successfully.");
      onAdded();
    } catch (e) {
      ToastNotification/* notify */.me.error(getErrorMessage(e), { response: e });
      onCancel();
    } finally {
      setIsUploading(false);
    }
  }), [tokenFile, onAdded, onCancel]);
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: baseClass,
      title: "Add VPP",
      onExit: onCancel,
      width: "large"
    },
    /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__description` }, "Follow the step-by-step guide to add VPP.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/learn-more-about/add-vpp",
        text: "Learn how",
        newTab: true
      }
    )),
    /* @__PURE__ */ react.createElement(
      FileUploader/* default */.A,
      {
        className: `${baseClass}__file-uploader ${isUploading ? `${baseClass}__file-uploader--loading` : ""}`,
        accept: ".vpptoken",
        message: "Content token (.vpptoken)",
        graphicName: "file-vpp",
        buttonType: "secondary",
        buttonMessage: isUploading ? "Uploading..." : "Upload",
        fileDetails: tokenFile ? { name: tokenFile.name } : void 0,
        onFileUpload: onSelectFile
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: uploadVppToken,
        isLoading: isUploading,
        disabled: !tokenFile || isUploading
      },
      "Add VPP"
    ))
  );
};
/* harmony default export */ var AddVppModal_AddVppModal = (AddVppModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/AddVppModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/DeleteVppModal/DeleteVppModal.tsx

var DeleteVppModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





const DeleteVppModal_baseClass = "delete-vpp-modal";
const DeleteVppModal = ({
  orgName,
  tokenId,
  onCancel,
  onDeletedToken
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDeleteToken = (0,react.useCallback)(() => DeleteVppModal_async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield mdm_apple/* default */.A.deleteVppToken(tokenId);
      ToastNotification/* notify */.me.success("Deleted successfully.");
      onDeletedToken();
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn\u2019t delete. Please try again.", { response: e });
      onCancel();
    }
  }), [onCancel, onDeletedToken, tokenId]);
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete VPP",
      className: DeleteVppModal_baseClass,
      onExit: onCancel,
      isContentDisabled: isDeleting
    },
    /* @__PURE__ */ react.createElement("p", null, "Apps purchased for the ", /* @__PURE__ */ react.createElement("b", null, orgName), " organization unit won't appear in Fleet, and policies that trigger automatic install of these apps will be deleted. Apps won't be uninstalled from hosts."),
    /* @__PURE__ */ react.createElement("p", null, "If you want to enable VPP integration again, you'll have to upload a new token."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: onDeleteToken,
        disabled: isDeleting,
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, disabled: isDeleting, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteVppModal_DeleteVppModal = (DeleteVppModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/DeleteVppModal/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var interfaces_team = __webpack_require__(62131);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/EditTeamsVppModal/EditTeamsVppModal.tsx

var EditTeamsVppModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const EditTeamsVppModal_baseClass = "edit-teams-vpp-modal";
const selectedValueFromToken = (token) => {
  if (!token.teams) {
    return "";
  }
  if (token.teams.length === 0) {
    return interfaces_team/* APP_CONTEXT_ALL_TEAMS_ID */.jc.toString();
  }
  return token.teams.map((team) => team.team_id).join(",");
};
const teamIdsFromSelectedValue = (selectedValue) => {
  if (!selectedValue) {
    return null;
  }
  if (selectedValue === interfaces_team/* APP_CONTEXT_ALL_TEAMS_ID */.jc.toString()) {
    return [];
  }
  const ids = selectedValue.split(",").map((str) => parseInt(str, 10)).filter((id) => !isNaN(id));
  return ids;
};
const updateSelectedValue = (prev, next) => {
  const nextParts = next.split(",").map((p) => p.trim());
  if (nextParts.length === 1) {
    return next;
  }
  const allTeamsId = interfaces_team/* APP_CONTEXT_ALL_TEAMS_ID */.jc.toString();
  const prevParts = prev.split(",").map((p) => p.trim());
  if (prevParts.includes(allTeamsId)) {
    return nextParts.filter((p) => p !== allTeamsId).join(",");
  }
  if (nextParts.includes(allTeamsId)) {
    return allTeamsId;
  }
  return next;
};
const isTokenAllTeams = (token) => {
  var _a;
  return ((_a = token.teams) == null ? void 0 : _a.length) === 0;
};
const isTokenUnassigned = (token) => token.teams === null;
const getUnavailableTeamIds = (currentTokenId, tokens) => {
  const unavailableTeamIds = {};
  tokens.forEach((token) => {
    var _a;
    if (token.id === currentTokenId) return;
    (_a = token.teams) == null ? void 0 : _a.forEach((team) => {
      unavailableTeamIds[team.team_id.toString()] = true;
    });
  });
  return unavailableTeamIds;
};
const getOptions = (availableTeams, tokens, currentToken, pendingTeamIds) => {
  const allTeamsOption = {
    label: "All fleets",
    value: interfaces_team/* APP_CONTEXT_ALL_TEAMS_ID */.jc
  };
  const allOptions = [
    allTeamsOption,
    ...availableTeams.filter((t) => t.id !== interfaces_team/* APP_CONTEXT_ALL_TEAMS_ID */.jc).map((t) => ({
      label: t.name,
      value: t.id
    }))
  ];
  const isPendingAllTeams = pendingTeamIds == null ? void 0 : pendingTeamIds.includes(
    interfaces_team/* APP_CONTEXT_ALL_TEAMS_ID */.jc.toString()
  );
  if (tokens.every(isTokenUnassigned)) {
    return allOptions;
  }
  if (tokens.some(
    (token) => isTokenAllTeams(token) && token.id !== currentToken.id
  ) && !isPendingAllTeams) {
    return [];
  }
  const anotherAssigned = tokens.filter((t) => t.id !== currentToken.id).some((t) => !isTokenAllTeams(t) && !isTokenUnassigned(t));
  let filteredOptions = allOptions;
  if (anotherAssigned && !isPendingAllTeams) {
    filteredOptions = allOptions.filter(
      (o) => o.value !== interfaces_team/* APP_CONTEXT_ALL_TEAMS_ID */.jc
    );
  }
  const unavailableTeamIds = getUnavailableTeamIds(currentToken.id, tokens);
  return filteredOptions.filter(
    (o) => !unavailableTeamIds[o.value.toString()] || pendingTeamIds.includes(o.value.toString())
  );
};
const EditTeamsVppModal = ({
  tokens,
  currentToken,
  onCancel,
  onSuccess
}) => {
  const { availableTeams } = (0,react.useContext)(app/* AppContext */.BR);
  const [selectedValue, setSelectedValue] = (0,react.useState)(
    selectedValueFromToken(currentToken)
  );
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const selectedValueArr = (0,react.useMemo)(
    () => selectedValue ? selectedValue.split(",").map((v) => v.trim()).filter(Boolean) : [],
    [selectedValue]
  );
  const options = (0,react.useMemo)(() => {
    return getOptions(
      availableTeams || [],
      tokens,
      currentToken,
      selectedValueArr
    );
  }, [availableTeams, tokens, currentToken, selectedValueArr]);
  const isAnyTokenAllTeams = (0,react.useMemo)(() => tokens.some(isTokenAllTeams), [
    tokens
  ]);
  const onChange = (0,react.useCallback)((val) => {
    setSelectedValue((prev) => updateSelectedValue(prev, val));
  }, []);
  const onSave = (0,react.useCallback)(
    (evt) => EditTeamsVppModal_async(null, null, function* () {
      evt.preventDefault();
      setIsSaving(true);
      try {
        yield mdm_apple/* default */.A.editVppTeams({
          tokenId: currentToken.id,
          teamIds: teamIdsFromSelectedValue(selectedValue)
        });
        ToastNotification/* notify */.me.success("Edited successfully.");
        onSuccess();
      } catch (e) {
        ToastNotification/* notify */.me.error("Couldn\u2019t edit. Please try again.", { response: e });
      } finally {
        setIsSaving(false);
      }
    }),
    [currentToken.id, selectedValue, onSuccess]
  );
  const isDropdownDisabled = options.length === 0 && isAnyTokenAllTeams;
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: EditTeamsVppModal_baseClass,
      title: "Edit fleets",
      onExit: onCancel,
      width: "large",
      isContentDisabled: isSaving
    },
    /* @__PURE__ */ react.createElement("p", null, "Edit fleets for ", /* @__PURE__ */ react.createElement("b", null, currentToken.org_name), "."),
    /* @__PURE__ */ react.createElement("p", null, "If you delete a fleet, App Store apps will be deleted from that fleet. Installed apps won't be uninstalled from hosts."),
    /* @__PURE__ */ react.createElement("form", { onSubmit: onSave, className: EditTeamsVppModal_baseClass, autoComplete: "off" }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        position: "top",
        underline: false,
        showArrow: true,
        tipContent: /* @__PURE__ */ react.createElement("div", { className: `${EditTeamsVppModal_baseClass}__tooltip--all-teams` }, "You can't choose fleets because you already have a VPP token assigned to all fleets. First, edit fleets for that VPP token to choose fleets here."),
        disableTooltip: !isDropdownDisabled
      },
      /* @__PURE__ */ react.createElement(
        Dropdown/* default */.A,
        {
          options,
          multi: true,
          onChange,
          placeholder: "Search fleets",
          value: selectedValue,
          label: "Fleets",
          className: `${EditTeamsVppModal_baseClass}__vpp-dropdown`,
          wrapperClassName: `${EditTeamsVppModal_baseClass}__form-field--vpp-teams ${isDropdownDisabled ? `${EditTeamsVppModal_baseClass}__form-field--disabled` : ""}`,
          tooltip: isDropdownDisabled ? void 0 : /* @__PURE__ */ react.createElement(react.Fragment, null, "Each fleet can have only one VPP token. Fleets that already have a VPP token won't show up here."),
          helpText: "App Store apps in this VPP token's Apple Business (AB) will only be available to install on hosts in these fleets.",
          disabled: isDropdownDisabled
        }
      )
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        className: "save-vpp-teams-loading",
        isLoading: isSaving,
        disabled: isDropdownDisabled
      },
      "Save"
    )))
  );
};
/* harmony default export */ var EditTeamsVppModal_EditTeamsVppModal = (EditTeamsVppModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/EditTeamsVppModal/index.ts



// EXTERNAL MODULE: ./frontend/components/FileUploader/FileUploader.tsx
var FileUploader_FileUploader = __webpack_require__(49109);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/RenewVppModal/helpers.ts


const helpers_DEFAULT_ERROR_MESSAGE = "Couldn\u2019t renew. Please try again.";
const helpers_getErrorMessage = (err) => {
  const invalidTokenReason = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "invalid"
  });
  if (invalidTokenReason) {
    return "Invalid token. Please provide a valid token from Apple Business.";
  }
  return helpers_DEFAULT_ERROR_MESSAGE;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/RenewVppModal/RenewVppModal.tsx

var RenewVppModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};








const RenewVppModal_baseClass = "modal renew-vpp-modal";
const RenewVppModal = ({
  tokenId,
  onCancel,
  onRenewedToken
}) => {
  const [isRenewing, setIsRenewing] = (0,react.useState)(false);
  const [tokenFile, setTokenFile] = (0,react.useState)(null);
  const onSelectFile = (files) => {
    const file = files == null ? void 0 : files[0];
    if (file) {
      setTokenFile(file);
    }
  };
  const onRenewToken = (0,react.useCallback)(() => RenewVppModal_async(null, null, function* () {
    setIsRenewing(true);
    if (!tokenFile) {
      setIsRenewing(false);
      ToastNotification/* notify */.me.error("No token selected.");
      return;
    }
    try {
      yield mdm_apple/* default */.A.renewVppToken(tokenId, tokenFile);
      ToastNotification/* notify */.me.success(
        "Volume Purchasing Program (VPP) integration enabled successfully."
      );
      onRenewedToken();
    } catch (e) {
      ToastNotification/* notify */.me.error(helpers_getErrorMessage(e), { response: e });
      onCancel();
    }
    setIsRenewing(false);
  }), [onCancel, onRenewedToken, tokenFile, tokenId]);
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Renew VPP",
      onExit: onCancel,
      className: RenewVppModal_baseClass,
      isContentDisabled: isRenewing,
      width: "large"
    },
    /* @__PURE__ */ react.createElement("p", { className: `${RenewVppModal_baseClass}__description` }, "Follow the step-by-step guide to renew.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/learn-more-about/renew-vpp",
        text: "Learn how",
        newTab: true
      }
    )),
    /* @__PURE__ */ react.createElement(
      FileUploader_FileUploader/* FileUploader */.l,
      {
        className: `${RenewVppModal_baseClass}__file-uploader`,
        accept: ".vpptoken",
        message: "Content token (.vpptoken)",
        graphicName: "file-vpp",
        buttonType: "secondary",
        buttonMessage: "Upload",
        fileDetails: tokenFile ? { name: tokenFile.name } : void 0,
        onFileUpload: onSelectFile
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onRenewToken,
        isLoading: isRenewing,
        disabled: !tokenFile
      },
      "Renew token"
    ))
  );
};
/* harmony default export */ var RenewVppModal_RenewVppModal = (RenewVppModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/RenewVppModal/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/RenewDateCell/index.ts + 1 modules
var RenewDateCell = __webpack_require__(11160);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/VppTable/TeamsCell/TeamsCell.tsx





const TeamsCell_baseClass = "teams-cell";
const NUM_TEAMS_IN_TOOLTIP = 3;
const generateCell = (teams) => {
  if (!teams) {
    return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: "---", grey: true });
  }
  if (teams.length === 0) {
    return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: "All fleets" });
  }
  let text = "";
  let italicize = true;
  if (teams.length === 1) {
    italicize = false;
    text = (0,interfaces_team/* getTeamDisplayName */.F1)(teams[0]);
  } else {
    text = `${teams.length} fleets`;
  }
  return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: text, italic: italicize });
};
const condenseTeams = (teams) => {
  const condensed = (teams == null ? void 0 : teams.length) && teams.slice(-NUM_TEAMS_IN_TOOLTIP).map((team) => (0,interfaces_team/* getTeamDisplayName */.F1)(team)).reverse() || [];
  return teams.length > NUM_TEAMS_IN_TOOLTIP ? condensed.concat(`+${teams.length - NUM_TEAMS_IN_TOOLTIP} more`) : condensed;
};
const TeamsCell = ({ teams }) => {
  if (!teams) {
    return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: teams });
  }
  if (teams.length === 0) {
    return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: "All fleets" });
  }
  if (teams.length === 1) {
    return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,interfaces_team/* getTeamDisplayName */.F1)(teams[0]) });
  }
  const cell = generateCell(teams);
  const condensedTeams = condenseTeams(teams);
  return /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: /* @__PURE__ */ react.createElement("ul", { className: `${TeamsCell_baseClass}__team-list` }, condensedTeams.map((teamName) => {
        return /* @__PURE__ */ react.createElement("li", { key: teamName }, teamName);
      })),
      underline: false,
      showArrow: true,
      position: "top",
      className: `${TeamsCell_baseClass}__team-text-with-tooltip`,
      tipOffset: 8
    },
    cell
  );
};
/* harmony default export */ var TeamsCell_TeamsCell = (TeamsCell);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/VppTable/TeamsCell/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/VppTable/VppTableConfig.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));







const DEFAULT_ACTION_OPTIONS = [
  { value: "editTeams", label: "Edit fleets", disabled: false },
  { value: "renew", label: "Renew", disabled: false },
  { value: "delete", label: "Delete", disabled: false }
];
const generateActions = (gitopsModeEnabled, repoURL) => {
  if (!gitopsModeEnabled) {
    return DEFAULT_ACTION_OPTIONS;
  }
  return DEFAULT_ACTION_OPTIONS.map((option) => {
    if (option.value !== "editTeams") {
      return option;
    }
    return __spreadProps(__spreadValues({}, option), {
      disabled: true,
      tooltipContent: (0,helpers/* getGitOpsModeTipContent */.qV)(repoURL)
    });
  });
};
const RENEW_DATE_CELL_STATUS_CONFIG = {
  warning: {
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "VPP content token is less than 30 days from expiration.", /* @__PURE__ */ react.createElement("br", null), "To renew, go to ", /* @__PURE__ */ react.createElement("b", null, "Actions ", ">", " Renew"), ".")
  },
  error: {
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "VPP content token is expired.", /* @__PURE__ */ react.createElement("br", null), "To renew, go to ", /* @__PURE__ */ react.createElement("b", null, "Actions ", ">", " Renew"), ".")
  }
};
const generateTableConfig = (actionSelectHandler, gitopsModeEnabled, repoURL) => {
  return [
    {
      accessor: "org_name",
      sortType: "caseInsensitive",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Organization name",
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      accessor: "location",
      Header: "Organization unit",
      disableSortBy: true,
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      accessor: "country_code",
      Header: "Country",
      disableSortBy: true,
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        TextCell/* default */.A,
        {
          value: cellProps.cell.value ? cellProps.cell.value.toUpperCase() : void 0
        }
      )
    },
    {
      accessor: "renew_date",
      Header: "Renew date",
      disableSortBy: true,
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        RenewDateCell/* default */.A,
        {
          value: cellProps.cell.value,
          statusConfig: RENEW_DATE_CELL_STATUS_CONFIG,
          className: "vpp-renew-date-cell"
        }
      )
    },
    {
      accessor: "teams",
      Header: "Fleets",
      disableSortBy: true,
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TeamsCell_TeamsCell, { teams: cellProps.cell.value })
    },
    {
      Header: "",
      disableSortBy: true,
      // the accessor here is insignificant, we just need it as its required
      // but we don't use it.
      accessor: "id",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        ActionsDropdown/* default */.A,
        {
          options: generateActions(gitopsModeEnabled, repoURL),
          onChange: (value) => actionSelectHandler(value, cellProps.row.original),
          placeholder: "Actions",
          variant: "secondary"
        }
      )
    }
  ];
};
const generateTableData = (data) => {
  return data;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/VppTable/VppTable.tsx





const VppTable_baseClass = "vpp-table";
const VppTable = ({
  vppTokens,
  onEditTokenTeam,
  onRenewToken,
  onDeleteToken
}) => {
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const gitOpsModeEnabled = config == null ? void 0 : config.gitops.gitops_mode_enabled;
  const repoURL = config == null ? void 0 : config.gitops.repository_url;
  const onSelectAction = (action, abmToken) => {
    switch (action) {
      case "editTeams":
        onEditTokenTeam(abmToken);
        break;
      case "renew":
        onRenewToken(abmToken);
        break;
      case "delete":
        onDeleteToken(abmToken);
        break;
      default:
        break;
    }
  };
  const tableConfig = generateTableConfig(
    onSelectAction,
    gitOpsModeEnabled != null ? gitOpsModeEnabled : false,
    repoURL != null ? repoURL : ""
  );
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableConfig,
      defaultSortHeader: "org_name",
      disableTableHeader: true,
      disablePagination: true,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      emptyComponent: () => /* @__PURE__ */ react.createElement(react.Fragment, null),
      isLoading: false,
      data: vppTokens,
      className: VppTable_baseClass
    }
  );
};
/* harmony default export */ var VppTable_VppTable = (VppTable);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/components/VppTable/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/VppPage.tsx



















const VppPage_baseClass = "vpp-page";
const AddVppMessage = ({ onAddVpp }) => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "Add your VPP",
      info: "Install Apple App Store apps purchased through Apple Business.",
      primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onAddVpp }, "Add VPP")
    }
  );
};
const VppPage = ({ router }) => {
  const { config, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [showRenewModal, setShowRenewModal] = (0,react.useState)(false);
  const [showDeleteModal, setShowDeleteModal] = (0,react.useState)(false);
  const [showAddVppModal, setShowAddVppModal] = (0,react.useState)(false);
  const [showEditTeamsModal, setShowEditTeamsModal] = (0,react.useState)(false);
  const selectedToken = (0,react.useRef)(null);
  const {
    data: vppTokens,
    error: errorVppTokens,
    isLoading,
    refetch
  } = (0,es.useQuery)(
    ["vpp_tokens"],
    () => mdm_apple/* default */.A.getVppTokens(),
    {
      refetchOnWindowFocus: false,
      retry: (tries, error) => error.status !== 404 && error.status !== 400 && tries <= 3,
      select: (data) => data.vpp_tokens,
      enabled: isPremiumTier
    }
  );
  const onEditTokenTeams = (token) => {
    selectedToken.current = token;
    setShowEditTeamsModal(true);
  };
  const onCancelEditTokenTeams = (0,react.useCallback)(() => {
    selectedToken.current = null;
    setShowEditTeamsModal(false);
  }, []);
  const onEditedTeams = (0,react.useCallback)(() => {
    selectedToken.current = null;
    refetch();
    setShowEditTeamsModal(false);
  }, [refetch]);
  const onAddVpp = () => {
    setShowAddVppModal(true);
  };
  const onAdded = () => {
    refetch();
    setShowAddVppModal(false);
  };
  const onRenewToken = (vppToken) => {
    selectedToken.current = vppToken;
    setShowRenewModal(true);
  };
  const onCancelRenewToken = (0,react.useCallback)(() => {
    selectedToken.current = null;
    setShowRenewModal(false);
  }, []);
  const onRenewed = (0,react.useCallback)(() => {
    selectedToken.current = null;
    refetch();
    setShowRenewModal(false);
  }, [refetch]);
  const onDeleteToken = (vppToken) => {
    selectedToken.current = vppToken;
    setShowDeleteModal(true);
  };
  const onCancelDeleteToken = (0,react.useCallback)(() => {
    selectedToken.current = null;
    setShowDeleteModal(false);
  }, []);
  const onDeleted = (0,react.useCallback)(() => {
    selectedToken.current = null;
    refetch();
    setShowDeleteModal(false);
  }, [refetch]);
  const showDataError = errorVppTokens && errorVppTokens.status !== 404;
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (!(config == null ? void 0 : config.mdm.enabled_and_configured)) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "Turn on Apple MDM",
          info: "To install Apple App Store apps purchased through Apple Business, first turn on Apple MDM.",
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      );
    }
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (showDataError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    if ((vppTokens == null ? void 0 : vppTokens.length) === 0) {
      return /* @__PURE__ */ react.createElement(AddVppMessage, { onAddVpp });
    }
    if (vppTokens) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        PageDescription/* default */.A,
        {
          content: "Add your VPP to install Apple App Store apps purchased through Apple\r\n            Business."
        }
      ), /* @__PURE__ */ react.createElement(
        VppTable_VppTable,
        {
          vppTokens,
          onEditTokenTeam: onEditTokenTeams,
          onRenewToken,
          onDeleteToken
        }
      ));
    }
    return null;
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: VppPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${VppPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to MDM", path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM })), /* @__PURE__ */ react.createElement("div", { className: `${VppPage_baseClass}__page-content` }, /* @__PURE__ */ react.createElement("div", { className: `${VppPage_baseClass}__page-header-section` }, /* @__PURE__ */ react.createElement("h1", null, "Volume Purchasing Program (VPP)"), isPremiumTier && (vppTokens == null ? void 0 : vppTokens.length) !== 0 && !!(config == null ? void 0 : config.mdm.enabled_and_configured) && /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onAddVpp }, "Add VPP")), /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent()))), showAddVppModal && /* @__PURE__ */ react.createElement(
    AddVppModal_AddVppModal,
    {
      onAdded,
      onCancel: () => setShowAddVppModal(false)
    }
  ), showRenewModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    RenewVppModal_RenewVppModal,
    {
      tokenId: selectedToken.current.id,
      onCancel: onCancelRenewToken,
      onRenewedToken: onRenewed
    }
  ), showDeleteModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    DeleteVppModal_DeleteVppModal,
    {
      orgName: selectedToken.current.org_name,
      tokenId: selectedToken.current.id,
      onCancel: onCancelDeleteToken,
      onDeletedToken: onDeleted
    }
  ), showEditTeamsModal && selectedToken.current && /* @__PURE__ */ react.createElement(
    EditTeamsVppModal_EditTeamsVppModal,
    {
      currentToken: selectedToken.current,
      tokens: vppTokens || [],
      onCancel: onCancelEditTokenTeams,
      onSuccess: onEditedTeams
    }
  ));
};
/* harmony default export */ var VppPage_VppPage = (VppPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/VppPage/index.ts




/***/ }),

/***/ 73260:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ WindowsAutomaticEnrollmentPage_WindowsAutomaticEnrollmentPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/CustomLink.tsx
var CustomLink = __webpack_require__(47867);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/UploadList/index.ts + 1 modules
var UploadList = __webpack_require__(67050);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var components_CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var entities_config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_uuid/valid_uuid.ts
var valid_uuid = __webpack_require__(78789);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AddEntraClientIDModal/helpers.ts


const FORM_VALIDATIONS = {
  clientId: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.clientId !== void 0 && formData.clientId.length > 0;
        },
        message: (formData) => formData.clientId === void 0 ? "" : `Client ID is required`
      },
      {
        name: "validUUID",
        isValid: (formData) => {
          if (formData.clientId === void 0 || formData.clientId.length === 0) {
            return true;
          }
          return (0,valid_uuid/* default */.A)(formData.clientId);
        },
        message: "Invalid UUID. Please provide a valid UUID format."
      }
    ]
  }
};
const getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const validateFormData = (formData) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(FORM_VALIDATIONS).forEach((key) => {
    const objKey = key;
    const failedValidation = FORM_VALIDATIONS[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AddEntraClientIDModal/AddEntraClientIDModal.tsx

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const baseClass = "add-entra-client-id-modal";
const AddEntraClientIdModal = ({ onExit }) => {
  var _a;
  const { setConfig, config } = (0,react.useContext)(app/* AppContext */.BR);
  const [isAdding, setIsAdding] = react.useState(false);
  const [formData, setFormData] = react.useState({
    clientId: void 0
  });
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => validateFormData({
      clientId: formData.clientId
    })
  );
  const onChangeClientId = (value) => {
    const newFormData = { clientId: value };
    setFormData(newFormData);
    const newErrs = validateFormData(newFormData);
    setFormValidation(newErrs);
  };
  const onAddClientId = () => __async(null, null, function* () {
    var _a2, _b, _c, _d;
    const clientId = (_a2 = formData.clientId) == null ? void 0 : _a2.trim().toLowerCase();
    const validation = validateFormData({ clientId });
    const clientIdExists = (_c = (_b = config == null ? void 0 : config.mdm.windows_entra_client_ids) == null ? void 0 : _b.some(
      (id) => id.toLowerCase() === clientId
    )) != null ? _c : false;
    if (clientIdExists) {
      ToastNotification/* notify */.me.error("Couldn't add client ID. Client ID already exists.");
      return;
    }
    if (validation.isValid && !clientIdExists) {
      setIsAdding(true);
      const currentClientIds = (_d = config == null ? void 0 : config.mdm.windows_entra_client_ids) != null ? _d : [];
      try {
        const updateData = yield entities_config/* default */.A.update({
          mdm: {
            windows_entra_client_ids: [...currentClientIds, clientId]
          }
        });
        setConfig(updateData);
        ToastNotification/* notify */.me.success("Successfully added client ID");
        onExit();
      } catch (error) {
        ToastNotification/* notify */.me.error("Couldn't add client ID. Please try again", {
          response: error
        });
      } finally {
        setIsAdding(false);
      }
    } else {
      setFormValidation(validation);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: baseClass,
      title: "Add Entra client ID",
      onExit,
      isContentDisabled: isAdding
    },
    /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Client ID",
        name: "client id",
        placeholder: "6d8769e6-0f8b-418d-b385-1a53968781c9",
        value: formData.clientId,
        onChange: onChangeClientId,
        error: (_a = formValidation.clientId) == null ? void 0 : _a.message,
        helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Find your ", /* @__PURE__ */ react.createElement("b", null, "Application (client) ID"), " on", " ", /* @__PURE__ */ react.createElement(
          components_CustomLink/* default */.A,
          {
            text: "Microsoft Entra ID",
            url: "https://fleetdm.com/learn-more-about/microsoft-entra-tenant-id",
            newTab: true
          }
        ), " ", "> App registrations > your MDM application > Overview.")
      }
    )),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onAddClientId,
        disabled: !formValidation.isValid,
        isLoading: isAdding
      },
      "Add"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var AddEntraClientIDModal = (AddEntraClientIdModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AddEntraClientIDModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AddEntraTenantModal/helpers.ts


const helpers_FORM_VALIDATIONS = {
  tenantId: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.tenantId !== void 0 && formData.tenantId.length > 0;
        },
        message: (formData) => formData.tenantId === void 0 ? "" : `Tenant ID is required`
      },
      {
        name: "validUUID",
        isValid: (formData) => {
          if (formData.tenantId === void 0 || formData.tenantId.length === 0) {
            return true;
          }
          return (0,valid_uuid/* default */.A)(formData.tenantId);
        },
        message: "Invalid UUID. Please provide a valid UUID format."
      }
    ]
  }
};
const helpers_getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const helpers_validateFormData = (formData) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(helpers_FORM_VALIDATIONS).forEach((key) => {
    const objKey = key;
    const failedValidation = helpers_FORM_VALIDATIONS[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: helpers_getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AddEntraTenantModal/AddEntraTenantModal.tsx

var AddEntraTenantModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const AddEntraTenantModal_baseClass = "add-entra-tenant-modal";
const AddEntraTenantModal = ({ onExit }) => {
  var _a;
  const { setConfig, config } = (0,react.useContext)(app/* AppContext */.BR);
  const [isAdding, setIsAdding] = react.useState(false);
  const [formData, setFormData] = react.useState({
    tenantId: void 0
  });
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => helpers_validateFormData({
      tenantId: formData.tenantId
    })
  );
  const onChangeTenantID = (value) => {
    const newFormData = { tenantId: value };
    setFormData(newFormData);
    const newErrs = helpers_validateFormData(newFormData);
    setFormValidation(newErrs);
  };
  const onAddTenant = () => AddEntraTenantModal_async(null, null, function* () {
    var _a2, _b, _c;
    const { tenantId } = formData;
    const validation = helpers_validateFormData({ tenantId });
    const tenantIdExists = (_b = (_a2 = config == null ? void 0 : config.mdm.windows_entra_tenant_ids) == null ? void 0 : _a2.includes(tenantId != null ? tenantId : "")) != null ? _b : false;
    if (tenantIdExists) {
      ToastNotification/* notify */.me.error("Couldn't add tenant. Tenant ID already exists.");
      return;
    }
    if (validation.isValid && !tenantIdExists) {
      setIsAdding(true);
      const currentTenantIds = (_c = config == null ? void 0 : config.mdm.windows_entra_tenant_ids) != null ? _c : [];
      try {
        const updateData = yield entities_config/* default */.A.update({
          mdm: {
            windows_entra_tenant_ids: [...currentTenantIds, tenantId]
          }
        });
        setConfig(updateData);
        ToastNotification/* notify */.me.success("Successfully added tenant");
        onExit();
      } catch (error) {
        ToastNotification/* notify */.me.error("Couldn't add tenant. Please try again", {
          response: error
        });
      } finally {
        setIsAdding(false);
      }
    } else {
      setFormValidation(validation);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: AddEntraTenantModal_baseClass,
      title: "Add Entra tenant",
      onExit,
      isContentDisabled: isAdding
    },
    /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Tenant ID",
        name: "tenant id",
        placeholder: "6d8769e6-0f8b-418d-b385-1a53968781c9",
        value: formData.tenantId,
        onChange: onChangeTenantID,
        error: (_a = formValidation.tenantId) == null ? void 0 : _a.message,
        helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Find your ", /* @__PURE__ */ react.createElement("b", null, "Tenant ID"), ", on", " ", /* @__PURE__ */ react.createElement(
          components_CustomLink/* default */.A,
          {
            text: "Microsoft Entra ID > Home",
            url: "https://fleetdm.com/learn-more-about/microsoft-entra-tenant-id",
            newTab: true
          }
        ))
      }
    )),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onAddTenant,
        disabled: !formValidation.isValid,
        isLoading: isAdding
      },
      "Add"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var AddEntraTenantModal_AddEntraTenantModal = (AddEntraTenantModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AddEntraTenantModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/DeleteEntraClientIDModal/DeleteEntraClientIDModal.tsx

var DeleteEntraClientIDModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






const DeleteEntraClientIDModal_baseClass = "delete-entra-client-id-modal";
const DeleteEntraClientIdModal = ({
  clientId,
  onExit
}) => {
  const { setConfig, config } = (0,react.useContext)(app/* AppContext */.BR);
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDeleteClientId = () => DeleteEntraClientIDModal_async(null, null, function* () {
    var _a;
    setIsDeleting(true);
    try {
      const currentClientIds = (_a = config == null ? void 0 : config.mdm.windows_entra_client_ids) != null ? _a : [];
      const updatedClientIds = currentClientIds.filter((id) => id !== clientId);
      const updateData = yield entities_config/* default */.A.update({
        mdm: {
          windows_entra_client_ids: updatedClientIds
        }
      });
      setConfig(updateData);
      ToastNotification/* notify */.me.success("Client ID deleted successfully.");
      onExit();
    } catch (err) {
      ToastNotification/* notify */.me.error("Couldn't delete client ID. Please try again.", {
        response: err
      });
    } finally {
      setIsDeleting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteEntraClientIDModal_baseClass,
      title: "Delete client ID",
      onExit,
      width: "medium",
      isContentDisabled: isDeleting
    },
    /* @__PURE__ */ react.createElement("p", null, "Windows hosts won't be able to enroll using the Microsoft Entra application with this client ID. Your other tenant IDs and client IDs are unaffected."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onDeleteClientId,
        variant: "alert",
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteEntraClientIDModal = (DeleteEntraClientIdModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/DeleteEntraClientIDModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/DeleteEntraTenantModal/DeleteEntraTenantModal.tsx

var DeleteEntraTenantModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






const DeleteEntraTenantModal_baseClass = "delete-entra-tenant-modal";
const DeleteEntraTenantModal = ({
  tenantId,
  onExit
}) => {
  const { setConfig, config } = (0,react.useContext)(app/* AppContext */.BR);
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDeleteToken = () => DeleteEntraTenantModal_async(null, null, function* () {
    var _a;
    setIsDeleting(true);
    try {
      const currentTenantIds = (_a = config == null ? void 0 : config.mdm.windows_entra_tenant_ids) != null ? _a : [];
      const updatedTenantIds = currentTenantIds.filter((id) => id !== tenantId);
      const updateData = yield entities_config/* default */.A.update({
        mdm: {
          windows_entra_tenant_ids: updatedTenantIds
        }
      });
      setConfig(updateData);
      ToastNotification/* notify */.me.success("Tenant deleted successfully.");
      onExit();
    } catch (err) {
      ToastNotification/* notify */.me.error("Couldn't delete tenant. Please try again.", {
        response: err
      });
    } finally {
      setIsDeleting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteEntraTenantModal_baseClass,
      title: "Delete tenant",
      onExit,
      width: "medium",
      isContentDisabled: isDeleting
    },
    /* @__PURE__ */ react.createElement("p", null, "This will stop both automatic (Autopilot) and manual enrollment by end users (", /* @__PURE__ */ react.createElement("b", null, "Settings > Accounts > Access work or school"), " on Windows) from this tenant."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onDeleteToken, variant: "alert", isLoading: isDeleting }, "Delete"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteEntraTenantModal_DeleteEntraTenantModal = (DeleteEntraTenantModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/DeleteEntraTenantModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraClientIDsListHeader/EntraClientIDsListHeader.tsx




const EntraClientIDsListHeader_baseClass = "entra-client-ids-list-header";
const EntraClientIDsListHeader = ({
  onClickAddClientId
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: EntraClientIDsListHeader_baseClass }, /* @__PURE__ */ react.createElement("span", { className: `${EntraClientIDsListHeader_baseClass}__name` }, "Client IDs"), /* @__PURE__ */ react.createElement("span", { className: `${EntraClientIDsListHeader_baseClass}__actions` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          variant: "secondary",
          className: `${EntraClientIDsListHeader_baseClass}__add-button`,
          onClick: onClickAddClientId,
          icon: "plus"
        },
        "Add"
      )
    }
  )));
};
/* harmony default export */ var EntraClientIDsListHeader_EntraClientIDsListHeader = (EntraClientIDsListHeader);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraClientIDsListHeader/index.ts



// EXTERNAL MODULE: ./frontend/components/ListItem/index.ts + 1 modules
var ListItem = __webpack_require__(83080);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraClientIDsListItem/EntraClientIDsListItem.tsx





const EntraClientIDsListItem_baseClass = "entra-client-ids-list-item";
const EntraClientIDsListItem = ({
  clientId,
  onClickDelete
}) => {
  return /* @__PURE__ */ react.createElement(
    ListItem/* default */.A,
    {
      className: EntraClientIDsListItem_baseClass,
      title: clientId,
      actions: /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          position: "left",
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              disabled: disableChildren,
              onClick: onClickDelete,
              className: `${EntraClientIDsListItem_baseClass}__action-button`,
              variant: "subdued",
              ariaLabel: `Delete Microsoft Entra client ID ${clientId}`,
              icon: "trash"
            }
          )
        }
      )
    }
  );
};
/* harmony default export */ var EntraClientIDsListItem_EntraClientIDsListItem = (EntraClientIDsListItem);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraClientIDsListItem/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraTenantsListHeader/EntraTenantsListHeader.tsx




const EntraTenantsListHeader_baseClass = "entra-tenants-list-header";
const EntraTenantsListHeader = ({
  onClickAddTenant
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: EntraTenantsListHeader_baseClass }, /* @__PURE__ */ react.createElement("span", { className: `${EntraTenantsListHeader_baseClass}__name` }, "Tenants"), /* @__PURE__ */ react.createElement("span", { className: `${EntraTenantsListHeader_baseClass}__actions` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          variant: "secondary",
          className: `${EntraTenantsListHeader_baseClass}__add-button`,
          onClick: onClickAddTenant,
          icon: "plus"
        },
        "Add"
      )
    }
  )));
};
/* harmony default export */ var EntraTenantsListHeader_EntraTenantsListHeader = (EntraTenantsListHeader);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraTenantsListHeader/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraTenantsListItem/EntraTenantsListItem.tsx





const EntraTenantsListItem_baseClass = "entra-tenants-list-item";
const EntraTenantsListItem = ({
  tenantId,
  onClickDelete
}) => {
  return /* @__PURE__ */ react.createElement(
    ListItem/* default */.A,
    {
      className: EntraTenantsListItem_baseClass,
      title: tenantId,
      actions: /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          position: "left",
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              disabled: disableChildren,
              onClick: onClickDelete,
              className: `${EntraTenantsListItem_baseClass}__action-button`,
              variant: "subdued",
              ariaLabel: `Delete Microsoft Entra tenant ${tenantId}`,
              icon: "trash"
            }
          )
        }
      )
    }
  );
};
/* harmony default export */ var EntraTenantsListItem_EntraTenantsListItem = (EntraTenantsListItem);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/EntraTenantsListItem/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/WindowsAutomaticEnrollmentPage.tsx





















const generateMdmTermsOfUseUrl = (domain) => {
  return `${domain}/api/mdm/microsoft/tos`;
};
const generateMdmDiscoveryUrl = (domain) => {
  return `${domain}/api/mdm/microsoft/discovery`;
};
const WindowsAutomaticEnrollmentPage_baseClass = "windows-automatic-enrollment-page";
const WindowsAutomaticEnrollmentPage = () => {
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const deletingTenantId = (0,react.useRef)(null);
  const deletingClientId = (0,react.useRef)(null);
  const [showAddTenantModal, setShowAddTenantModal] = (0,react.useState)(false);
  const [showDeleteTenantModal, setShowDeleteTenantModal] = (0,react.useState)(false);
  const [showAddClientIdModal, setShowAddClientIdModal] = (0,react.useState)(false);
  const [showDeleteClientIdModal, setShowDeleteClientIdModal] = (0,react.useState)(false);
  const onDeleteTenant = (tenantId) => {
    deletingTenantId.current = tenantId;
    setShowDeleteTenantModal(true);
  };
  const onDeleteClientId = (clientId) => {
    deletingClientId.current = clientId;
    setShowDeleteClientIdModal(true);
  };
  const renderEntraTenants = () => {
    const tenants = config == null ? void 0 : config.mdm.windows_entra_tenant_ids;
    if (!tenants || tenants.length === 0) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No tenants added",
          info: "Add your Entra tenant ID to be able to enroll Windows hosts.",
          primaryButton: /* @__PURE__ */ react.createElement(
            GitOpsModeTooltipWrapper/* default */.A,
            {
              renderChildren: (disable) => /* @__PURE__ */ react.createElement(
                Button/* default */.A,
                {
                  onClick: () => setShowAddTenantModal(true),
                  disabled: disable
                },
                "Add"
              )
            }
          )
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      UploadList/* default */.A,
      {
        className: `${WindowsAutomaticEnrollmentPage_baseClass}__tenant-list`,
        listItems: tenants,
        HeadingComponent: () => /* @__PURE__ */ react.createElement(
          EntraTenantsListHeader_EntraTenantsListHeader,
          {
            onClickAddTenant: () => setShowAddTenantModal(true)
          }
        ),
        ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(
          EntraTenantsListItem_EntraTenantsListItem,
          {
            tenantId: listItem,
            onClickDelete: () => onDeleteTenant(listItem)
          }
        )
      }
    );
  };
  const renderEntraClientIds = () => {
    const clientIds = config == null ? void 0 : config.mdm.windows_entra_client_ids;
    if (!clientIds || clientIds.length === 0) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No client IDs added",
          info: "Add your Entra application client ID to enroll Windows hosts.",
          primaryButton: /* @__PURE__ */ react.createElement(
            GitOpsModeTooltipWrapper/* default */.A,
            {
              renderChildren: (disable) => /* @__PURE__ */ react.createElement(
                Button/* default */.A,
                {
                  onClick: () => setShowAddClientIdModal(true),
                  disabled: disable
                },
                "Add"
              )
            }
          )
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      UploadList/* default */.A,
      {
        className: `${WindowsAutomaticEnrollmentPage_baseClass}__client-id-list`,
        listItems: clientIds,
        HeadingComponent: () => /* @__PURE__ */ react.createElement(
          EntraClientIDsListHeader_EntraClientIDsListHeader,
          {
            onClickAddClientId: () => setShowAddClientIdModal(true)
          }
        ),
        ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(
          EntraClientIDsListItem_EntraClientIDsListItem,
          {
            clientId: listItem,
            onClickDelete: () => onDeleteClientId(listItem)
          }
        )
      }
    );
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: WindowsAutomaticEnrollmentPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${WindowsAutomaticEnrollmentPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
    BackButton/* default */.A,
    {
      text: "Back to MDM",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
      className: `${WindowsAutomaticEnrollmentPage_baseClass}__back-to-automatic-enrollment`
    }
  )), /* @__PURE__ */ react.createElement("h1", null, "Microsoft Entra"), /* @__PURE__ */ react.createElement("div", { className: `${WindowsAutomaticEnrollmentPage_baseClass}__content-container` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "To connect Fleet to Microsoft Entra, follow the instructions in the", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          text: "guide",
          url: "https://fleetdm.com/learn-more-about/connect-microsoft-entra"
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement("section", { className: `${WindowsAutomaticEnrollmentPage_baseClass}__mdm-urls-container` }, /* @__PURE__ */ react.createElement("h2", null, "MDM URLs"), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("p", null, "You will need to copy and paste these values to create the application in Microsoft Entra."), /* @__PURE__ */ react.createElement("div", { className: `${WindowsAutomaticEnrollmentPage_baseClass}__url-inputs-wrapper` }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      inputWrapperClass: `${WindowsAutomaticEnrollmentPage_baseClass}__url-input`,
      label: "MDM terms of use URL",
      name: "mdmTermsOfUseUrl",
      tooltip: "The terms of use URL is used to display the terms of service to end users\r\n                  before turning on MDM for their host. The terms of use text informs users about\r\n                  policies that will be enforced on the host.",
      value: generateMdmTermsOfUseUrl(
        (config == null ? void 0 : config.server_settings.server_url) || ""
      ),
      enableCopy: true
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      inputWrapperClass: `${WindowsAutomaticEnrollmentPage_baseClass}__url-input`,
      label: "MDM discovery URL",
      name: "mdmDiscoveryUrl",
      tooltip: "The enrollment URL is used to connect hosts with the MDM service.",
      value: generateMdmDiscoveryUrl(
        (config == null ? void 0 : config.server_settings.server_url) || ""
      ),
      enableCopy: true
    }
  )))), /* @__PURE__ */ react.createElement("section", { className: `${WindowsAutomaticEnrollmentPage_baseClass}__tenants-container` }, /* @__PURE__ */ react.createElement("h2", null, "Entra tenants"), /* @__PURE__ */ react.createElement("div", null, renderEntraTenants())), /* @__PURE__ */ react.createElement("section", { className: `${WindowsAutomaticEnrollmentPage_baseClass}__client-ids-container` }, /* @__PURE__ */ react.createElement("h2", null, "Entra application client IDs"), /* @__PURE__ */ react.createElement("div", null, renderEntraClientIds()))), showAddTenantModal && /* @__PURE__ */ react.createElement(AddEntraTenantModal_AddEntraTenantModal, { onExit: () => setShowAddTenantModal(false) }), showDeleteTenantModal && deletingTenantId.current && /* @__PURE__ */ react.createElement(
    DeleteEntraTenantModal_DeleteEntraTenantModal,
    {
      tenantId: deletingTenantId.current,
      onExit: () => {
        deletingTenantId.current = null;
        setShowDeleteTenantModal(false);
      }
    }
  ), showAddClientIdModal && /* @__PURE__ */ react.createElement(
    AddEntraClientIDModal,
    {
      onExit: () => setShowAddClientIdModal(false)
    }
  ), showDeleteClientIdModal && deletingClientId.current && /* @__PURE__ */ react.createElement(
    DeleteEntraClientIDModal,
    {
      clientId: deletingClientId.current,
      onExit: () => {
        deletingClientId.current = null;
        setShowDeleteClientIdModal(false);
      }
    }
  )));
};
/* harmony default export */ var WindowsAutomaticEnrollmentPage_WindowsAutomaticEnrollmentPage = (WindowsAutomaticEnrollmentPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsAutomaticEnrollmentPage/index.ts




/***/ }),

/***/ 42440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ WindowsMdmPage_WindowsMdmPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/DropdownWrapper.tsx
var DropdownWrapper = __webpack_require__(78131);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/MainContent/MainContent.tsx + 16 modules
var MainContent = __webpack_require__(84789);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsMdmPage/helpers.tsx





const DEFAULT_ERROR_MESSAGE = "Unable to update Windows MDM. Please try again.";
const getErrorMessage = (err) => {
  let message = (0,errors/* getErrorReason */.F3)(err, {
    nameEquals: "mdm.windows_enabled_and_configured"
  });
  if (message) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't turn on Windows MDM. Please configure Mesh with a certificate and key pair first.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* FLEET_GUIDES_BASE_LINK */.We}/windows-mdm-setup#step-1-generate-your-certificate-and-key`,
        text: "Learn more",
        newTab: true,
        variant: "flash-message-link"
      }
    ));
  }
  message = (0,errors/* getErrorReason */.F3)(err, {
    nameEquals: "mdm.windows_migration_enabled"
  });
  if (message) {
    return message;
  }
  return DEFAULT_ERROR_MESSAGE;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsMdmPage/WindowsMdmPage.tsx

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};














const baseClass = "windows-mdm-page";
const UNASSIGNED_FLEET = "";
const useSetWindowsMdm = ({
  enableMdm,
  enableAutoMigration,
  turnOnProgrammatically,
  defaultFleet,
  router
}) => {
  const { setConfig, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const updateWindowsMdm = () => __async(null, null, function* () {
    try {
      const updatedConfig = yield config/* default */.A.updateMDMConfig(
        __spreadValues({
          enable_turn_on_windows_mdm_manually: enableMdm && !turnOnProgrammatically,
          windows_enabled_and_configured: enableMdm,
          // Migration only applies when MDM is on and enrollment is programmatic (the checkbox is hidden otherwise), so
          // derive the value to avoid re-saving a stale "enabled" state.
          windows_migration_enabled: enableMdm && turnOnProgrammatically && enableAutoMigration
        }, isPremiumTier && {
          windows_automatic_enrollment: { default_fleet: defaultFleet }
        }),
        true
      );
      setConfig(updatedConfig);
      ToastNotification/* notify */.me.success("Windows MDM settings successfully updated.");
    } catch (e) {
      ToastNotification/* notify */.me.error(getErrorMessage(e), { response: e });
    }
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM);
  });
  return updateWindowsMdm;
};
const WindowsMdmPage = ({ router }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { config, isPremiumTier, availableTeams } = (0,react.useContext)(app/* AppContext */.BR);
  const gitOpsModeEnabled = config == null ? void 0 : config.gitops.gitops_mode_enabled;
  const [mdmOn, setMdmOn] = (0,react.useState)(
    (_b = (_a = config == null ? void 0 : config.mdm) == null ? void 0 : _a.windows_enabled_and_configured) != null ? _b : false
  );
  const [autoMigration, setAutoMigration] = (0,react.useState)(
    (_d = (_c = config == null ? void 0 : config.mdm) == null ? void 0 : _c.windows_migration_enabled) != null ? _d : false
  );
  const [turnOnProgrammatically, setTurnOnProgrammatically] = (0,react.useState)(
    !((_f = (_e = config == null ? void 0 : config.mdm) == null ? void 0 : _e.enable_turn_on_windows_mdm_manually) != null ? _f : false)
  );
  const [defaultFleet, setDefaultFleet] = (0,react.useState)(
    (_i = (_h = (_g = config == null ? void 0 : config.mdm) == null ? void 0 : _g.windows_automatic_enrollment) == null ? void 0 : _h.default_fleet) != null ? _i : UNASSIGNED_FLEET
  );
  const isConnectedToEntra = !!((_k = (_j = config == null ? void 0 : config.mdm) == null ? void 0 : _j.windows_entra_tenant_ids) == null ? void 0 : _k.length);
  const updateWindowsMdm = useSetWindowsMdm({
    enableMdm: mdmOn,
    enableAutoMigration: autoMigration,
    turnOnProgrammatically,
    defaultFleet,
    router
  });
  const onChangeMdmOn = () => {
    setMdmOn(!mdmOn);
    !mdmOn ? setTurnOnProgrammatically(true) : setAutoMigration(false);
  };
  const onChangeTurnOnProgrammatically = () => {
    turnOnProgrammatically && setAutoMigration(false);
    setTurnOnProgrammatically(!turnOnProgrammatically);
  };
  const onChangeAutoMigration = () => {
    setAutoMigration(!autoMigration);
  };
  const onChangeDefaultFleet = (option) => {
    var _a2;
    setDefaultFleet((_a2 = option == null ? void 0 : option.value) != null ? _a2 : UNASSIGNED_FLEET);
  };
  const onSaveMdm = () => {
    updateWindowsMdm();
  };
  const fleetOptions = [
    { label: "Unassigned", value: UNASSIGNED_FLEET },
    ...(availableTeams != null ? availableTeams : []).filter((t) => t.id > 0).map((t) => ({ label: t.name, value: t.name }))
  ];
  const defaultFleetDropdown = /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.Ay,
    {
      name: "default-fleet",
      label: "Default fleet",
      ariaLabel: "Default fleet",
      labelClassname: `${baseClass}__default-fleet-label`,
      options: fleetOptions,
      value: defaultFleet,
      onChange: onChangeDefaultFleet,
      isDisabled: !mdmOn || !isConnectedToEntra || gitOpsModeEnabled,
      disabledTooltipContent: !isConnectedToEntra ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh must be connected to Entra to set a default fleet.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          url: paths/* default */.A.ADMIN_INTEGRATIONS_AUTOMATIC_ENROLLMENT_WINDOWS,
          newTab: true,
          variant: "tooltip-link"
        }
      )) : void 0,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "New hosts enrolled into MDM are automatically assigned to this fleet.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          url: "https://fleetdm.com/learn-more-about/windows-default-fleet",
          newTab: true
        }
      ))
    }
  );
  const programmaticToggleTooltip = /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, MDM is turned on when Fleet's agent is installed. When disabled, end users turn on MDM manually in", " ", /* @__PURE__ */ react.createElement("b", null, "Settings > Access work or school"), " (requires Microsoft Entra). Only applies to manual enrollment.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      text: "Learn more",
      url: "https://fleetdm.com/learn-more-about/mdm-enrollment",
      newTab: true,
      variant: "tooltip-link"
    }
  ));
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
    BackButton/* default */.A,
    {
      text: "Back to MDM",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
      className: `${baseClass}__back-to-mdm`
    }
  )), /* @__PURE__ */ react.createElement("h1", null, "Windows MDM"), /* @__PURE__ */ react.createElement("form", null, /* @__PURE__ */ react.createElement(
    Slider/* default */.A,
    {
      value: mdmOn,
      activeText: "Windows MDM on",
      inactiveText: "Windows MDM off",
      onChange: onChangeMdmOn,
      disabled: gitOpsModeEnabled
    }
  ), isPremiumTier && /* @__PURE__ */ react.createElement(
    Slider/* default */.A,
    {
      value: turnOnProgrammatically,
      activeText: "Turn on MDM programmatically",
      inactiveText: "Turn on MDM programmatically",
      labelTooltip: programmaticToggleTooltip,
      onChange: onChangeTurnOnProgrammatically,
      disabled: !mdmOn || gitOpsModeEnabled
    }
  ), isPremiumTier && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__section` }, /* @__PURE__ */ react.createElement("h2", { className: `${baseClass}__section-title` }, "User driven enrollment"), defaultFleetDropdown), isPremiumTier && turnOnProgrammatically && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__section` }, /* @__PURE__ */ react.createElement("h2", { className: `${baseClass}__section-title` }, "Migration"), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      disabled: !mdmOn || gitOpsModeEnabled,
      value: autoMigration,
      onChange: onChangeAutoMigration
    },
    "Automatically migrate hosts connected to another MDM solution"
  )), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onSaveMdm, disabled: disableChildren }, "Save")
    }
  ))));
};
/* harmony default export */ var WindowsMdmPage_WindowsMdmPage = (WindowsMdmPage);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/WindowsMdmPage/index.ts




/***/ }),

/***/ 11160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ RenewDateCell_RenewDateCell; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/StatusIndicator/index.ts + 1 modules
var StatusIndicator = __webpack_require__(96733);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/RenewDateCell/RenewDateCell.tsx






const baseClass = "renew-date-cell";
const RenewDateCell = ({
  value,
  statusConfig,
  className
}) => {
  const formattedDate = (0,date_format/* monthDayYearFormat */.Z7)(value);
  const classNames = classnames_default()(baseClass, className, "w250");
  let indicatorStatus = "success";
  let tooltipText = null;
  if ((0,helpers/* willExpireWithinXDays */.yw)(value, 30)) {
    indicatorStatus = "warning";
  } else if ((0,helpers/* hasLicenseExpired */.xt)(value)) {
    indicatorStatus = "error";
  }
  if (indicatorStatus !== "success" && statusConfig) {
    tooltipText = statusConfig[indicatorStatus].tooltipText;
  }
  const tooltipProp = tooltipText ? { tooltipText } : void 0;
  return /* @__PURE__ */ react.createElement(
    StatusIndicator/* default */.A,
    {
      className: classNames,
      value: formattedDate,
      indicator: indicatorStatus,
      tooltip: tooltipProp
    }
  );
};
/* harmony default export */ var RenewDateCell_RenewDateCell = (RenewDateCell);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/RenewDateCell/index.ts




/***/ }),

/***/ 54364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ IntegrationsPage_IntegrationsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var entities_config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/deep_difference/index.ts
var deep_difference = __webpack_require__(65273);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SideNav/index.ts + 3 modules
var SideNav = __webpack_require__(67675);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_url/valid_url.ts
var valid_url = __webpack_require__(90879);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/pages/admin/components/HostStatusWebhookPreviewModal/index.ts + 1 modules
var HostStatusWebhookPreviewModal = __webpack_require__(35092);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SettingsSection/index.ts + 1 modules
var SettingsSection = __webpack_require__(92277);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/pages/admin/IntegrationsPage/cards/GlobalHostStatusWebhook/GlobalHostStatusWebhook.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));












const baseClass = "app-config-form";
const GlobalHostStatusWebhook = ({
  appConfig,
  handleSubmit,
  isUpdatingSettings
}) => {
  var _a, _b, _c, _d;
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;
  const [
    showHostStatusWebhookPreviewModal,
    setShowHostStatusWebhookPreviewModal
  ] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    enableHostStatusWebhook: ((_a = appConfig.webhook_settings.host_status_webhook) == null ? void 0 : _a.enable_host_status_webhook) || false,
    destination_url: ((_b = appConfig.webhook_settings.host_status_webhook) == null ? void 0 : _b.destination_url) || "",
    hostStatusWebhookHostPercentage: ((_c = appConfig.webhook_settings.host_status_webhook) == null ? void 0 : _c.host_percentage) || 1,
    hostStatusWebhookWindow: ((_d = appConfig.webhook_settings.host_status_webhook) == null ? void 0 : _d.days_count) || 1
  });
  const {
    enableHostStatusWebhook,
    destination_url,
    hostStatusWebhookHostPercentage,
    hostStatusWebhookWindow
  } = formData;
  const [
    formErrors,
    setFormErrors
  ] = (0,react.useState)({});
  const onInputChange = ({ name, value }) => {
    setFormData(__spreadProps(__spreadValues({}, formData), { [name]: value }));
    setFormErrors({});
  };
  const getFormErrors = () => {
    const errors = {};
    if (enableHostStatusWebhook) {
      if (!destination_url) {
        errors.destination_url = "Destination URL must be present";
      } else if (!(0,valid_url/* default */.A)({ url: destination_url })) {
        errors.destination_url = "Destination URL is not a valid URL";
      }
    }
    return errors;
  };
  const validateForm = () => {
    setFormErrors(getFormErrors());
  };
  const toggleHostStatusWebhookPreviewModal = () => {
    setShowHostStatusWebhookPreviewModal(!showHostStatusWebhookPreviewModal);
    return false;
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const errors = getFormErrors();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    const formDataToSubmit = {
      webhook_settings: {
        host_status_webhook: {
          enable_host_status_webhook: enableHostStatusWebhook,
          destination_url,
          host_percentage: hostStatusWebhookHostPercentage,
          days_count: hostStatusWebhookWindow
        },
        failing_policies_webhook: appConfig.webhook_settings.failing_policies_webhook,
        vulnerabilities_webhook: appConfig.webhook_settings.vulnerabilities_webhook
      }
    };
    handleSubmit(formDataToSubmit);
  };
  const percentageHostsOptions = (0,react.useMemo)(
    () => (0,helpers/* getCustomDropdownOptions */.fj)(
      constants/* HOST_STATUS_WEBHOOK_HOST_PERCENTAGE_DROPDOWN_OPTIONS */.XL,
      hostStatusWebhookHostPercentage,
      (val) => `${val}%`
    ),
    // intentionally omit dependency so options only computed initially
    []
  );
  const windowOptions = (0,react.useMemo)(
    () => (0,helpers/* getCustomDropdownOptions */.fj)(
      constants/* HOST_STATUS_WEBHOOK_WINDOW_DROPDOWN_OPTIONS */.KH,
      hostStatusWebhookWindow,
      (val) => `${val} day${val !== 1 ? "s" : ""}`
    ),
    // intentionally omit dependency so options only computed initially
    []
  );
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Host status alerts" }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Send an alert if a portion of your hosts go offline.")
    }
  ), /* @__PURE__ */ react.createElement("form", { className: baseClass, onSubmit: onFormSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `form ${gitOpsModeEnabled ? "disabled-by-gitops-mode" : ""}`
    },
    /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        onChange: onInputChange,
        name: "enableHostStatusWebhook",
        value: enableHostStatusWebhook,
        parseTarget: true
      },
      "Enable host status webhook"
    ),
    /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__section-description` }, "A request will be sent to your configured ", /* @__PURE__ */ react.createElement("b", null, "Destination URL"), " ", "if the configured ", /* @__PURE__ */ react.createElement("b", null, "Percentage of hosts"), " have not checked into Mesh for the configured ", /* @__PURE__ */ react.createElement("b", null, "Number of days"), "."),
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "secondary",
        onClick: toggleHostStatusWebhookPreviewModal
      },
      "Preview request"
    ),
    enableHostStatusWebhook && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        placeholder: "https://server.com/example",
        label: "Destination URL",
        onChange: onInputChange,
        name: "destination_url",
        value: destination_url,
        parseTarget: true,
        onBlur: validateForm,
        error: formErrors.destination_url,
        tooltip: "Provide a URL to deliver the webhook request to."
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        label: "Percentage of hosts",
        options: percentageHostsOptions,
        onChange: onInputChange,
        name: "hostStatusWebhookHostPercentage",
        value: hostStatusWebhookHostPercentage,
        parseTarget: true,
        searchable: false,
        onBlur: validateForm,
        tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Select the minimum percentage of hosts that must fail to check into Mesh in order to trigger the webhook request.")
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        label: "Number of days",
        options: windowOptions,
        onChange: onInputChange,
        name: "hostStatusWebhookWindow",
        value: hostStatusWebhookWindow,
        parseTarget: true,
        searchable: false,
        onBlur: validateForm,
        tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Select the minimum number of days that the configured", " ", /* @__PURE__ */ react.createElement("strong", null, "Percentage of hosts"), " must fail to check into Mesh in order to trigger the webhook request.")
      }
    ))
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: Object.keys(formErrors).length > 0 || disableChildren,
          className: "button-wrap",
          isLoading: isUpdatingSettings
        },
        "Save"
      )
    }
  ))), showHostStatusWebhookPreviewModal && /* @__PURE__ */ react.createElement(
    HostStatusWebhookPreviewModal/* default */.A,
    {
      toggleModal: toggleHostStatusWebhookPreviewModal
    }
  ));
};
/* harmony default export */ var GlobalHostStatusWebhook_GlobalHostStatusWebhook = (GlobalHostStatusWebhook);

;// ./frontend/pages/admin/IntegrationsPage/cards/GlobalHostStatusWebhook/index.ts



// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/hooks/useFormValidation.ts
var useFormValidation = __webpack_require__(688);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var interfaces_errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/utilities/permissions/permissions.ts
var permissions = __webpack_require__(95681);
;// ./frontend/pages/admin/IntegrationsPage/cards/AccountProvisioning/AccountProvisioning.tsx

var AccountProvisioning_defProp = Object.defineProperty;
var AccountProvisioning_defProps = Object.defineProperties;
var AccountProvisioning_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AccountProvisioning_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AccountProvisioning_hasOwnProp = Object.prototype.hasOwnProperty;
var AccountProvisioning_propIsEnum = Object.prototype.propertyIsEnumerable;
var AccountProvisioning_defNormalProp = (obj, key, value) => key in obj ? AccountProvisioning_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AccountProvisioning_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AccountProvisioning_hasOwnProp.call(b, prop))
      AccountProvisioning_defNormalProp(a, prop, b[prop]);
  if (AccountProvisioning_getOwnPropSymbols)
    for (var prop of AccountProvisioning_getOwnPropSymbols(b)) {
      if (AccountProvisioning_propIsEnum.call(b, prop))
        AccountProvisioning_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AccountProvisioning_spreadProps = (a, b) => AccountProvisioning_defProps(a, AccountProvisioning_getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

















const AccountProvisioning_baseClass = "account-provisioning";
const isEmptyFormData = (data) => {
  return !data.tokenUrl && !data.clientId && !data.clientSecret;
};
const validate = (rawFormData) => {
  const errors = {};
  const formData = {
    tokenUrl: rawFormData.tokenUrl.trim(),
    clientId: rawFormData.clientId.trim(),
    clientSecret: rawFormData.clientSecret.trim()
  };
  if (isEmptyFormData(formData)) {
    return errors;
  }
  if (!formData.tokenUrl) {
    errors.tokenUrl = "Token URL is required.";
  } else if (!(0,valid_url/* default */.A)({ url: formData.tokenUrl, protocols: ["https"] })) {
    errors.tokenUrl = "Must be a valid https URL (e.g. https://yourdomain.okta.com/oauth2/v1/token)";
  }
  if (!formData.clientId) {
    errors.clientId = "Client ID is required.";
  }
  if (!formData.clientSecret) {
    errors.clientSecret = "Client secret is required.";
  }
  return errors;
};
const SERVER_ERROR_NAMES = {
  tokenUrl: "mdm.apple_account_provisioning.oauth_idp_token_url",
  clientId: "mdm.apple_account_provisioning.oauth_idp_client_id",
  clientSecret: "mdm.apple_account_provisioning.oauth_idp_client_secret"
};
const getServerFieldErrors = (err) => {
  const errors = {};
  Object.keys(SERVER_ERROR_NAMES).forEach((field) => {
    const reason = (0,interfaces_errors/* getErrorReason */.F3)(err, {
      nameEquals: SERVER_ERROR_NAMES[field]
    });
    if (reason) {
      errors[field] = reason;
    }
  });
  return errors;
};
const AccountProvisioning = ({ appConfig }) => {
  var _a, _b, _c;
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)();
  const queryClient = (0,es.useQueryClient)();
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [serverFormErrors, setServerFormErrors] = (0,react.useState)({});
  const {
    formData,
    setField,
    validateField,
    getError,
    setFieldError,
    clearFieldError,
    clearErrors,
    handleSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    validate,
    initialFormData: {
      clientId: ((_a = appConfig.mdm.apple_account_provisioning) == null ? void 0 : _a.oauth_idp_client_id) || "",
      clientSecret: ((_b = appConfig.mdm.apple_account_provisioning) == null ? void 0 : _b.oauth_idp_client_secret) || "",
      tokenUrl: ((_c = appConfig.mdm.apple_account_provisioning) == null ? void 0 : _c.oauth_idp_token_url) || ""
    },
    serverErrors: serverFormErrors,
    isSubmitting: isUpdating
  });
  const onFieldChange = (name, value) => {
    setField(name, value);
    if (isEmptyFormData(AccountProvisioning_spreadProps(AccountProvisioning_spreadValues({}, formData), { [name]: value }))) {
      clearErrors();
      return;
    }
    if (name === "tokenUrl" && formData.clientSecret === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1) {
      setField("clientSecret", "");
      setFieldError(
        "clientSecret",
        "Client secret must be re-entered when changing the token URL."
      );
    }
  };
  const onSubmit = (data) => __async(null, null, function* () {
    const secretToSubmit = data.clientSecret === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? void 0 : data.clientSecret;
    setIsUpdating(true);
    try {
      yield entities_config/* default */.A.update({
        mdm: {
          apple_account_provisioning: AccountProvisioning_spreadValues({
            oauth_idp_token_url: data.tokenUrl,
            oauth_idp_client_id: data.clientId
          }, secretToSubmit !== void 0 && {
            oauth_idp_client_secret: secretToSubmit
          })
        }
      });
      yield queryClient.invalidateQueries(["config"]);
      ToastNotification/* notify */.me.success("Successfully updated settings.");
    } catch (err) {
      setServerFormErrors(getServerFieldErrors(err));
      const reason = (0,interfaces_errors/* getErrorReason */.F3)(err);
      ToastNotification/* notify */.me.error(
        reason ? `Failed to update settings: ${reason}` : "Failed to update settings.",
        { response: err }
      );
    } finally {
      setIsUpdating(false);
    }
  });
  const render = () => {
    if (!(0,permissions/* isPremiumTier */.sq)(appConfig)) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      PageDescription/* default */.A,
      {
        variant: "right-panel",
        content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Create and sync macOS accounts using IdP credentials with any IdP that supports OAuth ROPG (Okta)", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            newTab: true,
            url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/idp-account-sync`,
            text: "Learn more"
          }
        ))
      }
    ), /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit(onSubmit) }, /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `form ${gitOpsModeEnabled ? "disabled-by-gitops-mode" : ""}`
      },
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Token URL",
          name: "tokenUrl",
          value: formData.tokenUrl,
          onChange: (val) => onFieldChange("tokenUrl", val),
          onBlur: () => validateField("tokenUrl"),
          onFocus: () => clearFieldError("tokenUrl"),
          error: getError("tokenUrl"),
          disabled: isSubmitting,
          placeholder: "https://yourdomain.okta.com/oauth2/v1/token",
          helpText: "Your IdP URL for verifying login credentials. For Okta, this is typically https://yourdomain.okta.com/oauth2/v1/token."
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Client ID",
          name: "clientId",
          value: formData.clientId,
          onChange: (val) => onFieldChange("clientId", val),
          onBlur: () => validateField("clientId"),
          onFocus: () => clearFieldError("clientId"),
          error: getError("clientId"),
          helpText: "In Okta, this will be in the Client Credentials section.",
          disabled: isSubmitting
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          type: "password",
          label: "Client secret",
          name: "clientSecret",
          value: formData.clientSecret,
          onChange: (val) => onFieldChange("clientSecret", val),
          onBlur: () => validateField("clientSecret"),
          onFocus: () => clearFieldError("clientSecret"),
          error: getError("clientSecret"),
          helpText: "In Okta, this will be in the Client Credentials section.",
          disabled: isSubmitting
        }
      )
    ), /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            disabled: disableChildren || isSubmitting,
            isLoading: isSubmitting
          },
          "Save"
        )
      }
    )));
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Account provisioning", className: AccountProvisioning_baseClass }, render());
};
/* harmony default export */ var AccountProvisioning_AccountProvisioning = (AccountProvisioning);

;// ./frontend/pages/admin/IntegrationsPage/cards/AccountProvisioning/index.ts



// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/PremiumFeatureMessage.tsx
var PremiumFeatureMessage_PremiumFeatureMessage = __webpack_require__(26291);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/pages/admin/IntegrationsPage/cards/Calendars/Calendars.tsx

var Calendars_defProp = Object.defineProperty;
var Calendars_defProps = Object.defineProperties;
var Calendars_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Calendars_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Calendars_hasOwnProp = Object.prototype.hasOwnProperty;
var Calendars_propIsEnum = Object.prototype.propertyIsEnumerable;
var Calendars_defNormalProp = (obj, key, value) => key in obj ? Calendars_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Calendars_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Calendars_hasOwnProp.call(b, prop))
      Calendars_defNormalProp(a, prop, b[prop]);
  if (Calendars_getOwnPropSymbols)
    for (var prop of Calendars_getOwnPropSymbols(b)) {
      if (Calendars_propIsEnum.call(b, prop))
        Calendars_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Calendars_spreadProps = (a, b) => Calendars_defProps(a, Calendars_getOwnPropDescs(b));
var Calendars_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
















const CREATING_SERVICE_ACCOUNT = "https://www.fleetdm.com/learn-more-about/creating-service-accounts";
const GOOGLE_WORKSPACE_DOMAINS = "https://www.fleetdm.com/learn-more-about/google-workspace-domains";
const DOMAIN_WIDE_DELEGATION = "https://www.fleetdm.com/learn-more-about/domain-wide-delegation";
const ENABLING_CALENDAR_API = "https://www.fleetdm.com/learn-more-about/enabling-calendar-api";
const OAUTH_SCOPES = "https://www.googleapis.com/auth/calendar.events,https://www.googleapis.com/auth/calendar.settings.readonly";
const API_KEY_JSON_PLACEHOLDER = `{
  "type": "service_account",
  "project_id": "fleet-in-your-calendar",
  "private_key_id": "<private key id>",
  "private_key": "-----BEGIN PRIVATE KEY----\\n<private key>\\n-----END PRIVATE KEY-----\\n",
  "client_email": "fleet-calendar-events@fleet-in-your-calendar.iam.gserviceaccount.com",
  "client_id": "<client id>",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/fleet-calendar-events%40fleet-in-your-calendar.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}`;
const isObfuscatedApiKey = (apiKeyJson) => {
  if (!apiKeyJson || Object.keys(apiKeyJson).length === 0) {
    return false;
  }
  return Object.values(apiKeyJson).every(
    (value) => value === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1
  );
};
const isErrorWithMessage = (error) => {
  return error.message !== void 0;
};
const Calendars_baseClass = "calendars-integration";
const Calendars = ({ appConfig }) => {
  const { currentTeam, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const queryClient = (0,es.useQueryClient)();
  const [formData, setFormData] = (0,react.useState)({
    domain: "",
    apiKeyJson: ""
  });
  const [isUpdatingSettings, setIsUpdatingSettings] = (0,react.useState)(false);
  const [formErrors, setFormErrors] = (0,react.useState)({});
  (0,react.useEffect)(() => {
    if (appConfig && Array.isArray(appConfig.integrations.google_calendar) && appConfig.integrations.google_calendar.length > 0) {
      const apiKeyJsonObj = appConfig.integrations.google_calendar[0].api_key_json;
      if (isObfuscatedApiKey(apiKeyJsonObj)) {
        setFormData({
          domain: appConfig.integrations.google_calendar[0].domain,
          apiKeyJson: constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1
        });
      } else {
        setFormData({
          domain: appConfig.integrations.google_calendar[0].domain,
          apiKeyJson: JSON.stringify(apiKeyJsonObj, null, "	")
        });
      }
    }
  }, [appConfig]);
  const gomEnabled = appConfig.gitops.gitops_mode_enabled;
  const { apiKeyJson, domain } = formData;
  const validateForm = (curFormData) => {
    const errors = {};
    if (!curFormData.apiKeyJson && !!curFormData.domain) {
      errors.apiKeyJson = "API key JSON must be completed";
    }
    if (!curFormData.domain && !!curFormData.apiKeyJson) {
      errors.domain = "Domain must be completed";
    }
    if (curFormData.apiKeyJson && curFormData.apiKeyJson !== constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1) {
      try {
        JSON.parse(curFormData.apiKeyJson);
      } catch (e) {
        if (isErrorWithMessage(e)) {
          errors.apiKeyJson = e.message.toString();
        } else {
          throw e;
        }
      }
    }
    return errors;
  };
  const onInputChange = (0,react.useCallback)(
    ({ name, value }) => {
      const newFormData = Calendars_spreadProps(Calendars_spreadValues({}, formData), { [name]: value });
      setFormData(newFormData);
      setFormErrors(validateForm(newFormData));
    },
    [formData]
  );
  if (!isPremiumTier)
    return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Calendar events" }, /* @__PURE__ */ react.createElement(PremiumFeatureMessage_PremiumFeatureMessage/* default */.A, null));
  const onFormSubmit = (evt) => Calendars_async(null, null, function* () {
    setIsUpdatingSettings(true);
    evt.preventDefault();
    let apiKeyToSubmit;
    if (formData.apiKeyJson === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1) {
      apiKeyToSubmit = void 0;
    } else if (formData.apiKeyJson && formData.apiKeyJson !== constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1) {
      apiKeyToSubmit = JSON.parse(formData.apiKeyJson);
    } else {
      apiKeyToSubmit = null;
    }
    const formDataToSubmit = apiKeyToSubmit === null && formData.domain === "" ? [] : [
      Calendars_spreadValues({
        domain: formData.domain
      }, apiKeyToSubmit !== void 0 && {
        api_key_json: apiKeyToSubmit
      })
    ];
    const destination = {
      google_calendar: formDataToSubmit
    };
    try {
      yield entities_config/* default */.A.update({ integrations: destination });
      ToastNotification/* notify */.me.success("Successfully saved calendar integration settings.");
      yield queryClient.invalidateQueries(["config"]);
    } catch (e) {
      ToastNotification/* notify */.me.error("Could not save calendar integration settings.", {
        response: e
      });
    } finally {
      setIsUpdatingSettings(false);
    }
  });
  const renderForm = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${Calendars_baseClass}__section-instructions` }, /* @__PURE__ */ react.createElement("p", null, "1. Go to the ", /* @__PURE__ */ react.createElement("b", null, "Service Accounts"), " page in Google Cloud Platform.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        text: "View page",
        url: CREATING_SERVICE_ACCOUNT,
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement("p", null, "2. Create a new project for your service account.", /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Create project"), "."), /* @__PURE__ */ react.createElement("li", null, 'Enter "Fleet calendar events" as the project name.'), /* @__PURE__ */ react.createElement("li", null, `For "Organization" and "Location", select your calendar's organization.`), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Create"), "."))), /* @__PURE__ */ react.createElement("p", null, "3. Create the service account.", /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Create service account"), "."), /* @__PURE__ */ react.createElement("li", null, 'Set the service account name to "Fleet calendar events".'), /* @__PURE__ */ react.createElement("li", null, 'Set the service account ID to "fleet-calendar-events".'), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Create and continue"), "."), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Done"), " at the bottom of the form. (No need to complete the optional steps.)"))), /* @__PURE__ */ react.createElement("p", null, "4. Create an API key.", " ", /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "Click the ", /* @__PURE__ */ react.createElement("b", null, "Actions"), " menu for your new service account."), /* @__PURE__ */ react.createElement("li", null, "Select ", /* @__PURE__ */ react.createElement("b", null, "Manage keys"), "."), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Add key > Create new key"), "."), /* @__PURE__ */ react.createElement("li", null, "Select the JSON key type."), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Create"), " to create the key & download a JSON file."))), /* @__PURE__ */ react.createElement("p", { className: `${Calendars_baseClass}__configuration` }, "5. Configure your service account integration in Mesh using the form below.", /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "Paste the full contents of the JSON file downloaded when creating your service account API key."), /* @__PURE__ */ react.createElement("li", null, "Set your primary domain. (If the end user is signed into multiple Google accounts, this will be used to identify their work calendar.)"), /* @__PURE__ */ react.createElement("li", null, /* @__PURE__ */ react.createElement("div", { className: `${Calendars_baseClass}__save-changes` }, "Save your changes.", /* @__PURE__ */ react.createElement(Card/* default */.A, null, /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "API key JSON",
        onChange: onInputChange,
        name: "apiKeyJson",
        value: apiKeyJson,
        parseTarget: true,
        type: "textarea",
        placeholder: API_KEY_JSON_PLACEHOLDER,
        inputClassName: `${Calendars_baseClass}__api-key-json`,
        error: formErrors.apiKeyJson,
        disabled: gomEnabled,
        helpText: apiKeyJson === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "API key is configured. Replace with a new key to update." : void 0
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Primary domain",
        onChange: onInputChange,
        name: "domain",
        value: domain,
        parseTarget: true,
        placeholder: "example.com",
        helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "You can find your primary domain in Google Workspace", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: GOOGLE_WORKSPACE_DOMAINS,
            text: "here",
            newTab: true
          }
        )),
        error: formErrors.domain,
        disabled: gomEnabled
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        tipOffset: 8,
        renderChildren: (dC) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            disabled: Object.keys(formErrors).length > 0 || dC,
            className: "save-loading",
            isLoading: isUpdatingSettings
          },
          "Save"
        )
      }
    )))))))), /* @__PURE__ */ react.createElement("p", null, "6. Authorize the service account via domain-wide delegation.", /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "In Google Workspace, go to", " ", /* @__PURE__ */ react.createElement("b", null, "Security > Access and data control > API controls > Manage Domain Wide Delegation"), ".", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: DOMAIN_WIDE_DELEGATION,
        text: "View page",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement("li", null, "Under ", /* @__PURE__ */ react.createElement("b", null, "API clients"), ", click ", /* @__PURE__ */ react.createElement("b", null, "Add new"), "."), /* @__PURE__ */ react.createElement("li", null, "Enter the client ID for the service account. You can find this in your downloaded API key JSON file (", /* @__PURE__ */ react.createElement("span", { className: `${Calendars_baseClass}__code` }, "client_id"), "), or under ", /* @__PURE__ */ react.createElement("b", null, "Advanced Settings"), " when viewing the service account."), /* @__PURE__ */ react.createElement("li", null, /* @__PURE__ */ react.createElement("div", { className: `${Calendars_baseClass}__oauth-scopes` }, "For the OAuth scopes, paste the following value:", /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        readOnly: true,
        name: "oauth-scopes",
        enableCopy: true,
        type: "textarea",
        value: OAUTH_SCOPES
      }
    ))), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Authorize"), "."))), /* @__PURE__ */ react.createElement("p", null, "7. Enable the Google Calendar API.", /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "In the Google Cloud console API library, go to the Google Calendar API.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: ENABLING_CALENDAR_API,
        text: "View page",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement("li", null, 'Make sure the "Fleet calendar events" project is selected at the top of the page.'), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Enable"), "."))), /* @__PURE__ */ react.createElement("p", null, "Now head over to", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_POLICIES, {
          fleet_id: currentTeam == null ? void 0 : currentTeam.id
        }),
        text: "Policies > Manage automations"
      }
    ), " ", "to finish setup.")));
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Calendar events", className: Calendars_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "To create calendar events for end users with failing policies, you'll need to configure a dedicated Google Workspace service account."),
      variant: "right-panel"
    }
  ), renderForm());
};
/* harmony default export */ var Calendars_Calendars = (Calendars);

;// ./frontend/pages/admin/IntegrationsPage/cards/Calendars/index.ts



// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/services/entities/certificates.ts
var certificates = __webpack_require__(85986);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CustomESTForm/helpers.ts


const generateFormValidations = (customESTIntegrations, isEditing) => {
  const FORM_VALIDATIONS = {
    name: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.name.length > 0;
          }
        },
        {
          name: "invalidCharacters",
          isValid: (formData) => {
            return /^[a-zA-Z0-9_]+$/.test(formData.name);
          },
          message: "Invalid characters. Only letters, numbers and underscores allowed."
        },
        {
          name: "unique",
          isValid: (formData) => {
            return isEditing || customESTIntegrations.find(
              (cert) => cert.name === formData.name && cert.type === "custom_est_proxy"
            ) === void 0;
          },
          message: "Name is already used by another custom EST CA."
        }
      ]
    },
    url: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.url.length > 0;
          }
        },
        {
          name: "validUrl",
          isValid: (formData) => {
            return (0,valid_url/* default */.A)({ url: formData.url });
          },
          message: "Must be a valid URL."
        }
      ]
    },
    username: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.username.length > 0;
          }
        }
      ]
    },
    password: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.password.length > 0;
          }
        }
      ]
    }
  };
  return FORM_VALIDATIONS;
};
const getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const validateFormData = (formData, validationConfig) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(validationConfig).forEach((key) => {
    const objKey = key;
    const failedValidation = validationConfig[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CustomESTForm/CustomESTForm.tsx







const CustomESTForm = ({
  formData,
  certAuthorities,
  submitBtnText,
  isSubmitting,
  isEditing = false,
  isDirty = true,
  onChange,
  onSubmit,
  onCancel
}) => {
  var _a, _b, _c, _d;
  const validationsConfig = (0,react.useMemo)(() => {
    return generateFormValidations(certAuthorities != null ? certAuthorities : [], isEditing);
  }, [certAuthorities, isEditing]);
  const validations = (0,react.useMemo)(() => {
    return validateFormData(formData, validationsConfig);
  }, [formData, validationsConfig]);
  const { name, url, username, password } = formData;
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  return /* @__PURE__ */ react.createElement("form", { onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Name",
      name: "name",
      value: name,
      error: (_a = validations.name) == null ? void 0 : _a.message,
      onChange,
      parseTarget: true,
      placeholder: "WIFI_CERTIFICATE",
      helpText: "Letters, numbers, and underscores only.",
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "URL",
      name: "url",
      value: url,
      error: (_b = validations.url) == null ? void 0 : _b.message,
      onChange,
      parseTarget: true,
      placeholder: "https://example.com/well-known/est/abc123"
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Username",
      name: "username",
      value: username,
      error: (_c = validations.username) == null ? void 0 : _c.message,
      onChange,
      parseTarget: true,
      helpText: "The username used to authenticate with the EST endpoint."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      type: "password",
      label: "Password",
      name: "password",
      value: password,
      error: (_d = validations.password) == null ? void 0 : _d.message,
      onChange,
      parseTarget: true,
      helpText: "The password used to authenticate with the EST endpoint."
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: "Complete all required fields to save.",
      underline: false,
      position: "top",
      disableTooltip: validations.isValid,
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        isLoading: isSubmitting,
        disabled: !validations.isValid || isSubmitting || !isDirty
      },
      submitBtnText
    )
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")));
};
/* harmony default export */ var CustomESTForm_CustomESTForm = (CustomESTForm);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CustomSCEPForm/helpers.ts


const helpers_generateFormValidations = (certAuthorities, isEditing) => {
  const FORM_VALIDATIONS = {
    name: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.name.length > 0;
          }
        },
        {
          name: "invalidCharacters",
          isValid: (formData) => {
            return /^[a-zA-Z0-9_]+$/.test(formData.name);
          },
          message: "Invalid characters. Only letters, numbers and underscores allowed."
        },
        {
          name: "unique",
          isValid: (formData) => {
            return isEditing || certAuthorities.find(
              (cert) => cert.type === "custom_scep_proxy" && cert.name === formData.name
            ) === void 0;
          },
          message: "Name is already used by another custom SCEP CA."
        }
      ]
    },
    scepURL: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.scepURL.length > 0;
          }
        },
        {
          name: "validUrl",
          isValid: (formData) => {
            return (0,valid_url/* default */.A)({ url: formData.scepURL });
          },
          message: "Must be a valid URL."
        }
      ]
    },
    challenge: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.challenge.length > 0;
          }
        }
      ]
    }
  };
  return FORM_VALIDATIONS;
};
const helpers_getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const helpers_validateFormData = (formData, validationConfig) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(validationConfig).forEach((key) => {
    const objKey = key;
    const failedValidation = validationConfig[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: helpers_getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CustomSCEPForm/CustomSCEPForm.tsx

var CustomSCEPForm_defProp = Object.defineProperty;
var CustomSCEPForm_defProps = Object.defineProperties;
var CustomSCEPForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var CustomSCEPForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CustomSCEPForm_hasOwnProp = Object.prototype.hasOwnProperty;
var CustomSCEPForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var CustomSCEPForm_defNormalProp = (obj, key, value) => key in obj ? CustomSCEPForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CustomSCEPForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CustomSCEPForm_hasOwnProp.call(b, prop))
      CustomSCEPForm_defNormalProp(a, prop, b[prop]);
  if (CustomSCEPForm_getOwnPropSymbols)
    for (var prop of CustomSCEPForm_getOwnPropSymbols(b)) {
      if (CustomSCEPForm_propIsEnum.call(b, prop))
        CustomSCEPForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CustomSCEPForm_spreadProps = (a, b) => CustomSCEPForm_defProps(a, CustomSCEPForm_getOwnPropDescs(b));






const CustomSCEPForm = ({
  certAuthorities,
  formData,
  submitBtnText,
  isSubmitting,
  isEditing = false,
  isDirty = true,
  onChange,
  onSubmit,
  onCancel
}) => {
  var _a, _b;
  const validations = (0,react.useMemo)(
    () => helpers_generateFormValidations(certAuthorities != null ? certAuthorities : [], isEditing),
    [certAuthorities, isEditing]
  );
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => helpers_validateFormData(formData, validations)
  );
  const { name, scepURL, challenge } = formData;
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  const onInputChange = (update) => {
    setFormValidation(
      helpers_validateFormData(
        CustomSCEPForm_spreadProps(CustomSCEPForm_spreadValues({}, formData), { [update.name]: update.value }),
        validations
      )
    );
    onChange(update);
  };
  return /* @__PURE__ */ react.createElement("form", { onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Name",
      name: "name",
      value: name,
      error: (_a = formValidation.name) == null ? void 0 : _a.message,
      onChange: onInputChange,
      parseTarget: true,
      placeholder: "WIFI_CERTIFICATE",
      helpText: "Letters, numbers, and underscores only. Mesh will create configuration profile variables with the name as suffix (e.g. $FLEET_VAR_CUSTOM_SCEP_CHALLENGE_WIFI_CERTIFICATE).",
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "SCEP URL",
      name: "scepURL",
      value: scepURL,
      error: (_b = formValidation.scepURL) == null ? void 0 : _b.message,
      onChange: onInputChange,
      parseTarget: true,
      placeholder: "https://example.com/scep"
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      type: "password",
      label: "Challenge",
      name: "challenge",
      value: challenge,
      onChange: onInputChange,
      parseTarget: true,
      helpText: "Password to authenticate with a SCEP server."
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: "Complete all required fields to save.",
      underline: false,
      position: "top",
      disableTooltip: formValidation.isValid,
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        isLoading: isSubmitting,
        disabled: !formValidation.isValid || isSubmitting || !isDirty
      },
      submitBtnText
    )
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")));
};
/* harmony default export */ var CustomSCEPForm_CustomSCEPForm = (CustomSCEPForm);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CustomSCEPForm/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/DigicertForm/helpers.ts


const DigicertForm_helpers_generateFormValidations = (certAuthorities, isEditing) => {
  const FORM_VALIDATIONS = {
    name: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.name.length > 0;
          }
        },
        {
          name: "invalidCharacters",
          isValid: (formData) => {
            return /^[a-zA-Z0-9_]+$/.test(formData.name);
          },
          message: "Invalid characters. Only letters, numbers and underscores allowed."
        },
        {
          name: "unique",
          isValid: (formData) => {
            return isEditing || certAuthorities.find(
              (cert) => cert.type === "digicert" && cert.name === formData.name
            ) === void 0;
          },
          message: "Name is already used by another DigiCert CA."
        }
      ]
    },
    url: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.url.length > 0;
          }
        },
        {
          name: "validUrl",
          isValid: (formData) => {
            return (0,valid_url/* default */.A)({ url: formData.url });
          },
          message: "Must be a valid URL."
        }
      ]
    },
    apiToken: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.apiToken.length > 0;
          }
        }
      ]
    },
    profileId: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.profileId.length > 0;
          }
        }
      ]
    },
    commonName: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.commonName.length > 0;
          }
        }
      ]
    },
    certificateSeatId: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.certificateSeatId.length > 0;
          }
        }
      ]
    }
  };
  return FORM_VALIDATIONS;
};
const DigicertForm_helpers_getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const DigicertForm_helpers_validateFormData = (formData, validationConfig) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(validationConfig).forEach((key) => {
    const objKey = key;
    const failedValidation = validationConfig[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: DigicertForm_helpers_getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/DigicertForm/DigicertForm.tsx

var DigicertForm_defProp = Object.defineProperty;
var DigicertForm_defProps = Object.defineProperties;
var DigicertForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DigicertForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DigicertForm_hasOwnProp = Object.prototype.hasOwnProperty;
var DigicertForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var DigicertForm_defNormalProp = (obj, key, value) => key in obj ? DigicertForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DigicertForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DigicertForm_hasOwnProp.call(b, prop))
      DigicertForm_defNormalProp(a, prop, b[prop]);
  if (DigicertForm_getOwnPropSymbols)
    for (var prop of DigicertForm_getOwnPropSymbols(b)) {
      if (DigicertForm_propIsEnum.call(b, prop))
        DigicertForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DigicertForm_spreadProps = (a, b) => DigicertForm_defProps(a, DigicertForm_getOwnPropDescs(b));







const DigicertForm_baseClass = "digicert-form";
const DigicertForm = ({
  certAuthorities,
  formData,
  submitBtnText,
  isSubmitting,
  isEditing = false,
  isDirty = true,
  onChange,
  onSubmit,
  onCancel
}) => {
  var _a, _b;
  const validations = (0,react.useMemo)(
    () => DigicertForm_helpers_generateFormValidations(certAuthorities != null ? certAuthorities : [], isEditing),
    [certAuthorities, isEditing]
  );
  const [formValidation, setFormValidation] = (0,react.useState)(
    () => DigicertForm_helpers_validateFormData(formData, validations)
  );
  const {
    name,
    url,
    apiToken,
    profileId,
    commonName,
    userPrincipalName,
    certificateSeatId
  } = formData;
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  const onInputChange = (update) => {
    setFormValidation(
      DigicertForm_helpers_validateFormData(
        DigicertForm_spreadProps(DigicertForm_spreadValues({}, formData), { [update.name]: update.value }),
        validations
      )
    );
    onChange(update);
  };
  return /* @__PURE__ */ react.createElement("form", { className: DigicertForm_baseClass, onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "name",
      label: "Name",
      value: name,
      onChange: onInputChange,
      error: (_a = formValidation.name) == null ? void 0 : _a.message,
      helpText: "Letters, numbers, and underscores only. Mesh will create configuration profile variables with the name as suffix (e.g. $FLEET_VAR_DIGICERT_DATA_WIFI_CERTIFICATE).",
      parseTarget: true,
      placeholder: "WIFI_CERTIFICATE",
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "url",
      label: "URL",
      value: url,
      onChange: onInputChange,
      error: (_b = formValidation.url) == null ? void 0 : _b.message,
      parseTarget: true,
      helpText: "DigiCert ONE instance URL."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      type: "password",
      name: "apiToken",
      label: "API token",
      value: apiToken,
      onChange: onInputChange,
      parseTarget: true,
      helpText: "DigiCert One API token for service user."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "profileId",
      label: "Profile GUID",
      value: profileId,
      onChange: onInputChange,
      parseTarget: true,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "You can find the ", /* @__PURE__ */ react.createElement("b", null, "Profile GUID"), " by opening one of the", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "DigiCert profiles",
          url: "https://demo.one.digicert.com/mpki/policies/profiles",
          newTab: true
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "commonName",
      label: "Certificate common name (CN)",
      value: commonName,
      onChange: onInputChange,
      parseTarget: true,
      helpText: "Certificates delivered to your hosts will have this CN in the subject.",
      placeholder: "$FLEET_VAR_HOST_HARDWARE_SERIAL"
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "userPrincipalName",
      label: "User principal name (UPN)",
      value: userPrincipalName,
      onChange: onInputChange,
      parseTarget: true,
      helpText: "Certificates delivered to your hosts will have this UPN attribute in Subject Alternative Name (SAN). (optional)",
      placeholder: "$FLEET_VAR_HOST_HARDWARE_SERIAL"
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "certificateSeatId",
      label: "Certificate seat ID",
      value: certificateSeatId,
      onChange: onInputChange,
      parseTarget: true,
      helpText: "Certificates delivered to your hosts will be assigned to this seat ID in DigiCert.",
      placeholder: "$FLEET_VAR_HOST_HARDWARE_SERIAL"
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: "Complete all required fields to save.",
      underline: false,
      position: "top",
      disableTooltip: formValidation.isValid,
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        isLoading: isSubmitting,
        disabled: !formValidation.isValid || isSubmitting || !isDirty,
        type: "submit"
      },
      submitBtnText
    )
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")));
};
/* harmony default export */ var DigicertForm_DigicertForm = (DigicertForm);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/DigicertForm/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/HydrantForm/helpers.ts


const HydrantForm_helpers_generateFormValidations = (certAuthorities, isEditing) => {
  const FORM_VALIDATIONS = {
    name: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.name.length > 0;
          }
        },
        {
          name: "validCharacters",
          isValid: (formData) => {
            return /^[a-zA-Z0-9_]+$/.test(formData.name);
          },
          message: "Invalid characters. Only letters, numbers and underscores allowed."
        },
        {
          name: "unique",
          isValid: (formData) => {
            return isEditing || certAuthorities.find(
              (cert) => cert.type === "hydrant" && cert.name === formData.name
            ) === void 0;
          },
          message: "Name is already used by another Hydrant CA."
        }
      ]
    },
    url: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.url.length > 0;
          }
        },
        {
          name: "validUrl",
          isValid: (formData) => {
            return (0,valid_url/* default */.A)({ url: formData.url });
          },
          message: "Must be a valid URL."
        }
      ]
    },
    clientId: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.clientId.length > 0;
          }
        }
      ]
    },
    clientSecret: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.clientSecret.length > 0;
          }
        }
      ]
    }
  };
  return FORM_VALIDATIONS;
};
const HydrantForm_helpers_getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const HydrantForm_helpers_validateFormData = (formData, validationConfig) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(validationConfig).forEach((key) => {
    const objKey = key;
    const failedValidation = validationConfig[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: HydrantForm_helpers_getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/HydrantForm/HydrantForm.tsx

var HydrantForm_defProp = Object.defineProperty;
var HydrantForm_defProps = Object.defineProperties;
var HydrantForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var HydrantForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var HydrantForm_hasOwnProp = Object.prototype.hasOwnProperty;
var HydrantForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var HydrantForm_defNormalProp = (obj, key, value) => key in obj ? HydrantForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var HydrantForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (HydrantForm_hasOwnProp.call(b, prop))
      HydrantForm_defNormalProp(a, prop, b[prop]);
  if (HydrantForm_getOwnPropSymbols)
    for (var prop of HydrantForm_getOwnPropSymbols(b)) {
      if (HydrantForm_propIsEnum.call(b, prop))
        HydrantForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var HydrantForm_spreadProps = (a, b) => HydrantForm_defProps(a, HydrantForm_getOwnPropDescs(b));






const HydrantForm_baseClass = "hydrant-form";
const HydrantForm = ({
  certAuthorities,
  formData,
  submitBtnText,
  isSubmitting,
  isEditing = false,
  isDirty = true,
  onChange,
  onSubmit,
  onCancel
}) => {
  var _a, _b;
  const validations = (0,react.useMemo)(
    () => HydrantForm_helpers_generateFormValidations(certAuthorities != null ? certAuthorities : [], isEditing),
    [certAuthorities, isEditing]
  );
  const [formValidation, setFormValidation] = (0,react.useState)(
    () => HydrantForm_helpers_validateFormData(formData, validations)
  );
  const { name, url, clientId, clientSecret } = formData;
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  const onInputChange = (update) => {
    setFormValidation(
      HydrantForm_helpers_validateFormData(
        HydrantForm_spreadProps(HydrantForm_spreadValues({}, formData), { [update.name]: update.value }),
        validations
      )
    );
    onChange(update);
  };
  return /* @__PURE__ */ react.createElement("form", { className: HydrantForm_baseClass, onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "name",
      label: "Name",
      value: name,
      onChange: onInputChange,
      error: (_a = formValidation.name) == null ? void 0 : _a.message,
      helpText: "Letters, numbers, and underscores only. Mesh will create configuration profile variables with the name as suffix (e.g. $FLEET_VAR_HYDRANT_DATA_WIFI_CERTIFICATE).",
      parseTarget: true,
      placeholder: "WIFI_CERTIFICATE",
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "url",
      label: "URL",
      value: url,
      onChange: onInputChange,
      error: (_b = formValidation.url) == null ? void 0 : _b.message,
      parseTarget: true,
      helpText: "EST endpoint provided by Hydrant.",
      placeholder: "https://example.hydrantid.com/.well-known/est/abc123"
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "clientId",
      label: "Client ID",
      value: clientId,
      onChange: onInputChange,
      parseTarget: true,
      helpText: "Client ID provided by Hydrant."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "clientSecret",
      label: "Client secret",
      value: clientSecret,
      onChange: onInputChange,
      parseTarget: true,
      helpText: "Client secret provided by Hydrant."
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: "Complete all required fields to save.",
      underline: false,
      position: "top",
      disableTooltip: formValidation.isValid,
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        isLoading: isSubmitting,
        disabled: !formValidation.isValid || isSubmitting || !isDirty,
        type: "submit"
      },
      submitBtnText
    )
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")));
};
/* harmony default export */ var HydrantForm_HydrantForm = (HydrantForm);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/HydrantForm/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/NDESForm/helpers.ts
/* unused harmony import specifier */ var getErrorReason;



const FORM_VALIDATIONS = {
  scepURL: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.scepURL.length > 0;
        }
      },
      {
        name: "validUrl",
        isValid: (formData) => {
          return (0,valid_url/* default */.A)({ url: formData.scepURL });
        },
        message: "Must be a valid URL."
      }
    ]
  },
  adminURL: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.adminURL.length > 0;
        }
      },
      {
        name: "validUrl",
        isValid: (formData) => {
          return (0,valid_url/* default */.A)({ url: formData.adminURL });
        },
        message: "Must be a valid URL"
      }
    ]
  },
  username: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.username.length > 0;
        }
      }
    ]
  },
  password: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.password.length > 0;
        }
      }
    ]
  }
};
const getValifationErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const NDESForm_helpers_validateFormData = (formData) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(FORM_VALIDATIONS).forEach((key) => {
    const objKey = key;
    const failedValidation = FORM_VALIDATIONS[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: getValifationErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};
const BAD_SCEP_URL_ERROR = "Invalid SCEP URL. Please correct and try again.";
const BAD_CREDENTIALS_ERROR = "Couldn't add. Admin URL or credentials are invalid.";
const CACHE_ERROR = "The NDES password cache is full. Please increase the number of cached passwords in NDES and try again. By default, NDES caches 5 passwords and they expire 60 minutes after they are created.";
const INSUFFICIENT_PERMISSIONS_ERROR = "Couldn't add. This account doesn't have sufficient permissions. Please use the account with enroll permission.";
const SCEP_URL_TIMEOUT_ERROR = "Couldn't add. Request to NDES (SCEP URL) timed out. Please try again.";
const ADMIN_URL_TIMEOUT_ERROR = "Couldn't add. Request to NDES (admin URL) timed out. Please try again.";
const DEFAULT_ERROR = "Something went wrong updating your SCEP server. Please try again.";
const NDESForm_helpers_getErrorMessage = (err, formData) => {
  const reason = getErrorReason(err);
  if (reason.includes("invalid admin URL or credentials")) {
    return BAD_CREDENTIALS_ERROR;
  } else if (reason.includes("the password cache is full")) {
    return CACHE_ERROR;
  } else if (reason.includes("does not have sufficient permissions")) {
    INSUFFICIENT_PERMISSIONS_ERROR;
  } else if (reason.includes(formData.scepURL) && reason.includes("context deadline exceeded")) {
    return SCEP_URL_TIMEOUT_ERROR;
  } else if (reason.includes(formData.adminURL) && reason.includes("context deadline exceeded")) {
    return ADMIN_URL_TIMEOUT_ERROR;
  } else if (reason.includes("invalid SCEP URL")) {
    return BAD_SCEP_URL_ERROR;
  }
  return DEFAULT_ERROR;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/NDESForm/NDESForm.tsx






const NDESForm = ({
  formData,
  submitBtnText,
  isSubmitting,
  isDirty = true,
  onChange,
  onSubmit,
  onCancel
}) => {
  var _a, _b;
  const formValidation = NDESForm_helpers_validateFormData(formData);
  const { scepURL, adminURL, username, password } = formData;
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  return /* @__PURE__ */ react.createElement("form", { onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "SCEP URL",
      name: "scepURL",
      value: scepURL,
      error: (_a = formValidation.scepURL) == null ? void 0 : _a.message,
      onChange,
      parseTarget: true,
      placeholder: "https://example.com/certsrv/mscep/mscep.dll",
      helpText: "The URL used by client devices to request and retrieve certificates."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Admin URL",
      name: "adminURL",
      value: adminURL,
      error: (_b = formValidation.adminURL) == null ? void 0 : _b.message,
      onChange,
      parseTarget: true,
      placeholder: "https://example.com/certsrv/mscep_admin/",
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "The URL for the ", /* @__PURE__ */ react.createElement("b", null, "Network Device Enrollment Service"), " page to view configuration details. Okta calls this the ", /* @__PURE__ */ react.createElement("b", null, "Challenge URL"), ".")
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Username",
      name: "username",
      value: username,
      onChange,
      parseTarget: true,
      placeholder: "username@example.microsoft.com",
      helpText: "For NDES, this is the username in the down-level logon name\r\n        format required to log in to the SCEP admin page. Okta generates this for you."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Password",
      name: "password",
      value: password,
      type: "password",
      onChange,
      parseTarget: true,
      blockAutoComplete: true,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "For NDES, the password required to log in to the", " ", /* @__PURE__ */ react.createElement("b", null, "Network Device Enrollment Service"), " page. Okta generates this for you.")
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: "Complete all required fields to save.",
      underline: false,
      position: "top",
      disableTooltip: formValidation.isValid,
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        isLoading: isSubmitting,
        disabled: !formValidation.isValid || isSubmitting || !isDirty
      },
      submitBtnText
    )
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")));
};
/* harmony default export */ var NDESForm_NDESForm = (NDESForm);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/NDESForm/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/SmallstepForm/helpers.ts


const SmallstepForm_helpers_generateFormValidations = (smallstepIntegrations, isEditing) => {
  const FORM_VALIDATIONS = {
    name: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.name.length > 0;
          }
        },
        {
          name: "invalidCharacters",
          isValid: (formData) => {
            return /^[a-zA-Z0-9_]+$/.test(formData.name);
          },
          message: "Invalid characters. Only letters, numbers and underscores allowed."
        },
        {
          name: "unique",
          isValid: (formData) => {
            return isEditing || smallstepIntegrations.find(
              (cert) => cert.name === formData.name
            ) === void 0;
          },
          message: "Name is already used by another custom SCEP CA."
        }
      ]
    },
    scepURL: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.scepURL.length > 0;
          }
        },
        {
          name: "validUrl",
          isValid: (formData) => {
            return (0,valid_url/* default */.A)({ url: formData.scepURL });
          },
          message: "Must be a valid URL."
        }
      ]
    },
    challengeURL: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.challengeURL.length > 0;
          }
        },
        {
          name: "validUrl",
          isValid: (formData) => {
            return (0,valid_url/* default */.A)({ url: formData.challengeURL });
          },
          message: "Must be a valid URL."
        }
      ]
    },
    username: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.username.length > 0;
          }
        }
      ]
    },
    password: {
      validations: [
        {
          name: "required",
          isValid: (formData) => {
            return formData.password.length > 0;
          }
        }
      ]
    }
  };
  return FORM_VALIDATIONS;
};
const SmallstepForm_helpers_getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const SmallstepForm_helpers_validateFormData = (formData, validationConfig) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(validationConfig).forEach((key) => {
    const objKey = key;
    const failedValidation = validationConfig[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false,
        message: SmallstepForm_helpers_getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/SmallstepForm/SmallstepForm.tsx







const SmallstepForm = ({
  certAuthorities,
  formData,
  submitBtnText,
  isSubmitting,
  isEditing = false,
  isDirty = true,
  onChange,
  onSubmit,
  onCancel
}) => {
  var _a, _b, _c, _d, _e;
  const validationsConfig = (0,react.useMemo)(() => {
    return SmallstepForm_helpers_generateFormValidations(certAuthorities != null ? certAuthorities : [], isEditing);
  }, [certAuthorities, isEditing]);
  const validations = (0,react.useMemo)(() => {
    return SmallstepForm_helpers_validateFormData(formData, validationsConfig);
  }, [formData, validationsConfig]);
  const { name, scepURL, challengeURL, username, password } = formData;
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  return /* @__PURE__ */ react.createElement("form", { onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Name",
      name: "name",
      value: name,
      error: (_a = validations.name) == null ? void 0 : _a.message,
      onChange,
      parseTarget: true,
      placeholder: "WIFI_CERTIFICATE",
      helpText: "Letters, numbers, and underscores only. Mesh will create configuration profile variables with the name as suffix (e.g. $FLEET_VAR_SMALLSTEP_DATA_WIFI_CERTIFICATE).",
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "SCEP URL",
      name: "scepURL",
      value: scepURL,
      error: (_b = validations.scepURL) == null ? void 0 : _b.message,
      onChange,
      parseTarget: true,
      placeholder: "https://example.scep.smallstep.com/p/agents/integration-fleet-xr9f4db7"
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Challenge URL",
      name: "challengeURL",
      value: challengeURL,
      error: (_c = validations.challengeURL) == null ? void 0 : _c.message,
      onChange,
      parseTarget: true,
      placeholder: "https://example.scep.smallstep.com/fleet/xr9f4db7-83f1-48ab-8982-8b6870d4fl85/challenge",
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Smallstep calls this the ", /* @__PURE__ */ react.createElement("b", null, "SCEP Challenge URL"), ".")
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Username",
      name: "username",
      value: username,
      error: (_d = validations.username) == null ? void 0 : _d.message,
      onChange,
      parseTarget: true,
      placeholder: "r9c5faea-af93-4679-922c-5548c6254438",
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Smallstep calls this the", " ", /* @__PURE__ */ react.createElement("b", null, "Challenge Basic Authentication Username"), ".")
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      type: "password",
      label: "Password",
      name: "password",
      value: password,
      error: (_e = validations.password) == null ? void 0 : _e.message,
      onChange,
      parseTarget: true,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Smallstep calls this the", " ", /* @__PURE__ */ react.createElement("b", null, "Challenge Basic Authentication Password"), ".")
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: "Complete all required fields to save.",
      underline: false,
      position: "top",
      disableTooltip: validations.isValid,
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        isLoading: isSubmitting,
        disabled: !validations.isValid || isSubmitting || !isDirty
      },
      submitBtnText
    )
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")));
};
/* harmony default export */ var SmallstepForm_SmallstepForm = (SmallstepForm);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/helpers.tsx

const CA_LABEL_BY_TYPE = {
  custom_est_proxy: "Custom Enrollment Over Secure Transport (EST)",
  custom_scep_proxy: "Custom Simple Certificate Enrollment Protocol (SCEP)",
  digicert: "DigiCert",
  hydrant: "Hydrant Enrollment Over Secure Transport (EST)",
  ndes_scep_proxy: "Dynamic SCEP - Okta CA or Microsoft Network Device Enrollment Service (NDES)",
  smallstep: "Smallstep"
};
/* harmony default export */ var components_helpers = (CA_LABEL_BY_TYPE);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/AddCertAuthorityModal/helpers.tsx

var helpers_defProp = Object.defineProperty;
var helpers_defProps = Object.defineProperties;
var helpers_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var helpers_getOwnPropSymbols = Object.getOwnPropertySymbols;
var helpers_hasOwnProp = Object.prototype.hasOwnProperty;
var helpers_propIsEnum = Object.prototype.propertyIsEnumerable;
var helpers_defNormalProp = (obj, key, value) => key in obj ? helpers_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var helpers_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (helpers_hasOwnProp.call(b, prop))
      helpers_defNormalProp(a, prop, b[prop]);
  if (helpers_getOwnPropSymbols)
    for (var prop of helpers_getOwnPropSymbols(b)) {
      if (helpers_propIsEnum.call(b, prop))
        helpers_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var helpers_spreadProps = (a, b) => helpers_defProps(a, helpers_getOwnPropDescs(b));





const DEFAULT_CERT_AUTHORITY_OPTIONS = [
  {
    label: components_helpers.custom_est_proxy,
    value: "custom_est_proxy"
  },
  {
    label: components_helpers.custom_scep_proxy,
    value: "custom_scep_proxy"
  },
  { label: components_helpers.digicert, value: "digicert" },
  {
    label: components_helpers.hydrant,
    value: "hydrant"
  },
  {
    label: components_helpers.ndes_scep_proxy,
    value: "ndes_scep_proxy"
  },
  {
    label: components_helpers.smallstep,
    value: "smallstep"
  }
];
const generateDropdownOptions = (hasNDESCert) => {
  return DEFAULT_CERT_AUTHORITY_OPTIONS.map((option) => {
    if (option.value === "ndes_scep_proxy" && hasNDESCert) {
      return helpers_spreadProps(helpers_spreadValues({}, option), {
        disabled: true,
        tooltipContent: "Only one NDES can be added."
      });
    }
    return option;
  });
};
const generateAddCertAuthorityData = (certAuthorityType, formData) => {
  switch (certAuthorityType) {
    case "ndes_scep_proxy": {
      const {
        scepURL,
        adminURL,
        username,
        password
      } = formData;
      return {
        ndes_scep_proxy: {
          url: scepURL,
          admin_url: adminURL,
          username,
          password
        }
      };
    }
    case "digicert": {
      const {
        name,
        url: digicertUrl,
        apiToken,
        profileId,
        commonName,
        userPrincipalName,
        certificateSeatId
      } = formData;
      return {
        digicert: {
          name,
          url: digicertUrl,
          api_token: apiToken,
          profile_id: profileId,
          certificate_common_name: commonName,
          certificate_user_principal_names: [userPrincipalName],
          certificate_seat_id: certificateSeatId
        }
      };
    }
    case "custom_scep_proxy": {
      const {
        name: customSCEPName,
        scepURL: customSCEPUrl,
        challenge
      } = formData;
      return {
        custom_scep_proxy: {
          name: customSCEPName,
          url: customSCEPUrl,
          challenge
        }
      };
    }
    case "hydrant": {
      const {
        name: hydrantName,
        url,
        clientId,
        clientSecret
      } = formData;
      return {
        hydrant: {
          name: hydrantName,
          url,
          client_id: clientId,
          client_secret: clientSecret
        }
      };
    }
    case "smallstep": {
      const {
        name: smallstepName,
        scepURL: smallstepScepURL,
        challengeURL,
        username: smallstepUsername,
        password: smallstepPassword
      } = formData;
      return {
        smallstep: {
          name: smallstepName,
          url: smallstepScepURL,
          challenge_url: challengeURL,
          username: smallstepUsername,
          password: smallstepPassword
        }
      };
    }
    case "custom_est_proxy": {
      const {
        name: customESTName,
        url: customESTUrl,
        username: customESTUsername,
        password: customESTPassword
      } = formData;
      return {
        custom_est_proxy: {
          name: customESTName,
          url: customESTUrl,
          username: customESTUsername,
          password: customESTPassword
        }
      };
    }
    default:
      throw new Error(
        `Unknown certificate authority type: ${certAuthorityType}`
      );
  }
};
const helpers_DEFAULT_ERROR = "Please try again.";
const INVALID_API_TOKEN_ERROR = "Invalid API token. Please correct and try again.";
const INVALID_PROFILE_GUID_ERROR = "Invalid profile GUID. Please correct and try again.";
const INVALID_URL_ERROR = "Invalid URL. Please correct and try again.";
const PRIVATE_KEY_NOT_CONFIGURED_ERROR = /* @__PURE__ */ react.createElement(react.Fragment, null, "Private key must be configured.", " ", /* @__PURE__ */ react.createElement(
  CustomLink/* default */.A,
  {
    text: "Learn more",
    url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/fleet-server-private-key`,
    newTab: true,
    variant: "flash-message-link"
  }
));
const INVALID_ADMIN_URL_OR_CREDENTIALS_ERROR = "Invalid admin URL or credentials. Please correct and try again.";
const INVALID_ADMIN_URL_ERROR = "Invalid admin URL. Please correct and try again.";
const INVALID_USERNAME_ERROR = "Invalid username. Please correct and try again.";
const INVALID_PASSWORD_ERROR = "Invalid password. Please correct and try again.";
const ADMIN_URL_CONNECTION_ERROR = "Couldn't connect to admin URL. Please correct and try again.";
const NDES_PASSWORD_CACHE_FULL_ERROR = "The NDES password cache is full. Please increase the number of cached passwords in NDES and try again.";
const INVALID_CHALLENGE_ERROR = "Invalid challenge. Please correct and try again.";
const INVALID_CHALLENGE_URL_OR_CREDENTIALS_ERROR = "Invalid challenge URL or credentials. Please correct and try again.";
const INVALID_URL_PATTERN = /Invalid [\w ]*URL\./;
const getDisplayErrMessage = (err) => {
  let message = helpers_DEFAULT_ERROR;
  const rawReason = (0,interfaces_errors/* getErrorReason */.F3)(err);
  const reason = rawReason.toLowerCase();
  const invalidUrlMatch = rawReason.match(INVALID_URL_PATTERN);
  if (reason.includes("invalid api token")) {
    message = INVALID_API_TOKEN_ERROR;
  } else if (reason.includes("invalid profile guid")) {
    message = INVALID_PROFILE_GUID_ERROR;
  } else if (reason.includes("private key")) {
    message = PRIVATE_KEY_NOT_CONFIGURED_ERROR;
  } else if (reason.includes("admin url or credentials")) {
    message = INVALID_ADMIN_URL_OR_CREDENTIALS_ERROR;
  } else if (reason.includes("invalid ndes scep admin url")) {
    message = INVALID_ADMIN_URL_ERROR;
  } else if (reason.includes("invalid ndes scep username")) {
    message = INVALID_USERNAME_ERROR;
  } else if (reason.includes("invalid ndes scep password")) {
    message = INVALID_PASSWORD_ERROR;
  } else if (reason.includes("couldn't connect to ndes scep admin url")) {
    message = ADMIN_URL_CONNECTION_ERROR;
  } else if (reason.includes("password cache is full")) {
    message = NDES_PASSWORD_CACHE_FULL_ERROR;
  } else if (reason.includes("invalid challenge url")) {
    message = INVALID_CHALLENGE_URL_OR_CREDENTIALS_ERROR;
  } else if (reason.includes("invalid challenge")) {
    message = INVALID_CHALLENGE_ERROR;
  } else if (invalidUrlMatch) {
    message = `${invalidUrlMatch[0]} Please correct and try again.`;
  } else if (reason.includes("invalid url") || reason.includes("no such host")) {
    message = INVALID_URL_ERROR;
  } else {
    message = helpers_DEFAULT_ERROR;
  }
  return message;
};
const AddCertAuthorityModal_helpers_getErrorMessage = (err) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't add certificate authority. ", getDisplayErrMessage(err));
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/AddCertAuthorityModal/AddCertAuthorityModal.tsx

var AddCertAuthorityModal_defProp = Object.defineProperty;
var AddCertAuthorityModal_defProps = Object.defineProperties;
var AddCertAuthorityModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AddCertAuthorityModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AddCertAuthorityModal_hasOwnProp = Object.prototype.hasOwnProperty;
var AddCertAuthorityModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var AddCertAuthorityModal_defNormalProp = (obj, key, value) => key in obj ? AddCertAuthorityModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AddCertAuthorityModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AddCertAuthorityModal_hasOwnProp.call(b, prop))
      AddCertAuthorityModal_defNormalProp(a, prop, b[prop]);
  if (AddCertAuthorityModal_getOwnPropSymbols)
    for (var prop of AddCertAuthorityModal_getOwnPropSymbols(b)) {
      if (AddCertAuthorityModal_propIsEnum.call(b, prop))
        AddCertAuthorityModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AddCertAuthorityModal_spreadProps = (a, b) => AddCertAuthorityModal_defProps(a, AddCertAuthorityModal_getOwnPropDescs(b));
var AddCertAuthorityModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};












const AddCertAuthorityModal_baseClass = "add-cert-authority-modal";
const AddCertAuthorityModal = ({
  certAuthorities,
  onExit
}) => {
  const dropdownOptions = (0,react.useMemo)(() => {
    return generateDropdownOptions(
      certAuthorities.some((cert) => cert.type === "ndes_scep_proxy")
    );
  }, [certAuthorities]);
  const [
    certAuthorityType,
    setCertAuthorityType
  ] = (0,react.useState)(
    dropdownOptions[0].value
  );
  const [isAdding, setIsAdding] = (0,react.useState)(false);
  const [digicertFormData, setDigicertFormData] = (0,react.useState)({
    name: "",
    url: "https://one.digicert.com",
    apiToken: "",
    profileId: "",
    commonName: "",
    userPrincipalName: "",
    certificateSeatId: ""
  });
  const [hydrantFormData, setHydrantFormData] = (0,react.useState)({
    name: "",
    url: "",
    clientId: "",
    clientSecret: ""
  });
  const [ndesFormData, setNDESFormData] = (0,react.useState)({
    scepURL: "",
    adminURL: "",
    username: "",
    password: ""
  });
  const [
    customSCEPFormData,
    setCustomSCEPFormData
  ] = (0,react.useState)({
    name: "",
    scepURL: "",
    challenge: ""
  });
  const [
    smallstepFormData,
    setSmallstepFormData
  ] = (0,react.useState)({
    name: "",
    scepURL: "",
    challengeURL: "",
    username: "",
    password: ""
  });
  const [
    customESTFormData,
    setCustomESTFormData
  ] = (0,react.useState)({
    name: "",
    url: "",
    username: "",
    password: ""
  });
  const onChangeDropdown = (value) => {
    setCertAuthorityType(value);
  };
  const onChangeForm = (update) => {
    let setFormData;
    let formData;
    switch (certAuthorityType) {
      case "digicert":
        setFormData = setDigicertFormData;
        formData = digicertFormData;
        break;
      case "hydrant":
        setFormData = setHydrantFormData;
        formData = hydrantFormData;
        break;
      case "ndes_scep_proxy":
        setFormData = setNDESFormData;
        formData = ndesFormData;
        break;
      case "custom_scep_proxy":
        setFormData = setCustomSCEPFormData;
        formData = customSCEPFormData;
        break;
      case "smallstep":
        setFormData = setSmallstepFormData;
        formData = smallstepFormData;
        break;
      case "custom_est_proxy":
        setFormData = setCustomESTFormData;
        formData = customESTFormData;
        break;
      default:
        return;
    }
    setFormData(AddCertAuthorityModal_spreadProps(AddCertAuthorityModal_spreadValues({}, formData), {
      [update.name]: update.value
    }));
  };
  const onAddCertAuthority = () => AddCertAuthorityModal_async(null, null, function* () {
    let formData;
    switch (certAuthorityType) {
      case "digicert":
        formData = digicertFormData;
        break;
      case "hydrant":
        formData = hydrantFormData;
        break;
      case "ndes_scep_proxy":
        formData = ndesFormData;
        break;
      case "custom_scep_proxy":
        formData = customSCEPFormData;
        break;
      case "smallstep":
        formData = smallstepFormData;
        break;
      case "custom_est_proxy":
        formData = customESTFormData;
        break;
      default:
        return;
    }
    const addCertAuthorityData = generateAddCertAuthorityData(
      certAuthorityType,
      formData
    );
    if (!addCertAuthorityData) {
      return;
    }
    setIsAdding(true);
    try {
      yield certificates/* default */.A.addCertificateAuthority(addCertAuthorityData);
      ToastNotification/* notify */.me.success("Successfully added your certificate authority.");
      onExit();
    } catch (e) {
      ToastNotification/* notify */.me.error(AddCertAuthorityModal_helpers_getErrorMessage(e), { response: e });
    }
    setIsAdding(false);
  });
  const renderForm = () => {
    const submitBtnText = "Add CA";
    switch (certAuthorityType) {
      case "digicert":
        return /* @__PURE__ */ react.createElement(
          DigicertForm_DigicertForm,
          {
            formData: digicertFormData,
            certAuthorities,
            submitBtnText,
            isSubmitting: isAdding,
            onChange: onChangeForm,
            onSubmit: onAddCertAuthority,
            onCancel: onExit
          }
        );
      case "hydrant":
        return /* @__PURE__ */ react.createElement(
          HydrantForm_HydrantForm,
          {
            formData: hydrantFormData,
            certAuthorities,
            submitBtnText,
            isSubmitting: isAdding,
            onChange: onChangeForm,
            onSubmit: onAddCertAuthority,
            onCancel: onExit
          }
        );
      case "ndes_scep_proxy":
        return /* @__PURE__ */ react.createElement(
          NDESForm_NDESForm,
          {
            formData: ndesFormData,
            submitBtnText,
            isSubmitting: isAdding,
            onChange: onChangeForm,
            onSubmit: onAddCertAuthority,
            onCancel: onExit
          }
        );
      case "custom_scep_proxy":
        return /* @__PURE__ */ react.createElement(
          CustomSCEPForm_CustomSCEPForm,
          {
            formData: customSCEPFormData,
            certAuthorities,
            submitBtnText,
            isSubmitting: isAdding,
            onChange: onChangeForm,
            onSubmit: onAddCertAuthority,
            onCancel: onExit
          }
        );
      case "smallstep":
        return /* @__PURE__ */ react.createElement(
          SmallstepForm_SmallstepForm,
          {
            formData: smallstepFormData,
            certAuthorities,
            submitBtnText,
            isSubmitting: isAdding,
            onChange: onChangeForm,
            onSubmit: onAddCertAuthority,
            onCancel: onExit
          }
        );
      case "custom_est_proxy":
        return /* @__PURE__ */ react.createElement(
          CustomESTForm_CustomESTForm,
          {
            formData: customESTFormData,
            certAuthorities,
            submitBtnText,
            isSubmitting: isAdding,
            onChange: onChangeForm,
            onSubmit: onAddCertAuthority,
            onCancel: onExit
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: AddCertAuthorityModal_baseClass,
      title: "Add certificate authority (CA)",
      width: "large",
      onExit,
      isContentDisabled: isAdding
    },
    /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: dropdownOptions,
        value: certAuthorityType,
        className: `${AddCertAuthorityModal_baseClass}__cert-authority-dropdown`,
        onChange: onChangeDropdown,
        searchable: false
      }
    ),
    renderForm()
  );
};
/* harmony default export */ var AddCertAuthorityModal_AddCertAuthorityModal = (AddCertAuthorityModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/AddCertAuthorityModal/index.ts



// EXTERNAL MODULE: ./frontend/components/UploadList/index.ts + 1 modules
var UploadList = __webpack_require__(67050);
;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CertAuthorityListHeader/CertAuthorityListHeader.tsx




const CertAuthorityListHeader_baseClass = "cert-authority-list-header";
const CertAuthorityListHeader = ({
  onClickAddCertAuthority
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: CertAuthorityListHeader_baseClass }, /* @__PURE__ */ react.createElement("span", { className: `${CertAuthorityListHeader_baseClass}__name` }, "Certificate authority (CA)"), /* @__PURE__ */ react.createElement("span", { className: `${CertAuthorityListHeader_baseClass}__actions` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          variant: "secondary",
          className: `${CertAuthorityListHeader_baseClass}__add-button`,
          onClick: onClickAddCertAuthority,
          icon: "plus"
        },
        "Add CA"
      )
    }
  )));
};
/* harmony default export */ var CertAuthorityListHeader_CertAuthorityListHeader = (CertAuthorityListHeader);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CertAuthorityListHeader/index.ts



// EXTERNAL MODULE: ./frontend/components/ListItem/index.ts + 1 modules
var ListItem = __webpack_require__(83080);
;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CertAuthorityListItem/CertAuthorityListItem.tsx





const CertAuthorityListItem_baseClass = "cert-authority-list-item";
const Actions = ({ onEdit, onDelete }) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          onClick: onEdit,
          className: `${CertAuthorityListItem_baseClass}__action-button`,
          variant: "subdued",
          icon: "pencil",
          ariaLabel: "Edit certificate authority"
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          onClick: onDelete,
          className: `${CertAuthorityListItem_baseClass}__action-button`,
          variant: "subdued",
          icon: "trash",
          ariaLabel: "Delete certificate authority"
        }
      )
    }
  ));
};
const CertAuthorityListItem = ({
  cert,
  onClickEdit,
  onClickDelete
}) => {
  return /* @__PURE__ */ react.createElement(
    ListItem/* default */.A,
    {
      className: CertAuthorityListItem_baseClass,
      graphic: "file-certificate",
      title: cert.name,
      details: cert.description,
      actions: /* @__PURE__ */ react.createElement(Actions, { onEdit: onClickEdit, onDelete: onClickDelete })
    }
  );
};
/* harmony default export */ var CertAuthorityListItem_CertAuthorityListItem = (CertAuthorityListItem);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CertAuthorityListItem/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CertificateAuthorityList/CertificateAuthorityList.tsx

var CertificateAuthorityList_defProp = Object.defineProperty;
var CertificateAuthorityList_defProps = Object.defineProperties;
var CertificateAuthorityList_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var CertificateAuthorityList_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CertificateAuthorityList_hasOwnProp = Object.prototype.hasOwnProperty;
var CertificateAuthorityList_propIsEnum = Object.prototype.propertyIsEnumerable;
var CertificateAuthorityList_defNormalProp = (obj, key, value) => key in obj ? CertificateAuthorityList_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CertificateAuthorityList_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CertificateAuthorityList_hasOwnProp.call(b, prop))
      CertificateAuthorityList_defNormalProp(a, prop, b[prop]);
  if (CertificateAuthorityList_getOwnPropSymbols)
    for (var prop of CertificateAuthorityList_getOwnPropSymbols(b)) {
      if (CertificateAuthorityList_propIsEnum.call(b, prop))
        CertificateAuthorityList_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CertificateAuthorityList_spreadProps = (a, b) => CertificateAuthorityList_defProps(a, CertificateAuthorityList_getOwnPropDescs(b));





const CertificateAuthorityList_baseClass = "certificate-authority-list";
const generateListData = (certAuthorities) => {
  return certAuthorities.map((cert) => {
    return CertificateAuthorityList_spreadProps(CertificateAuthorityList_spreadValues({}, cert), {
      description: components_helpers[cert.type]
    });
  });
};
const CertificateAuthorityList = ({
  certAuthorities,
  onAddCertAuthority,
  onClickEdit,
  onClickDelete
}) => {
  const listData = (0,react.useMemo)(() => generateListData(certAuthorities), [
    certAuthorities
  ]);
  return /* @__PURE__ */ react.createElement(
    UploadList/* default */.A,
    {
      className: CertificateAuthorityList_baseClass,
      keyAttribute: "name",
      listItems: listData,
      HeadingComponent: () => /* @__PURE__ */ react.createElement(CertAuthorityListHeader_CertAuthorityListHeader, { onClickAddCertAuthority: onAddCertAuthority }),
      ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(
        CertAuthorityListItem_CertAuthorityListItem,
        {
          cert: listItem,
          onClickEdit: () => onClickEdit(listItem),
          onClickDelete: () => onClickDelete(listItem)
        }
      )
    }
  );
};
/* harmony default export */ var CertificateAuthorityList_CertificateAuthorityList = (CertificateAuthorityList);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CertificateAuthorityList/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/DeleteCertificateAuthorityModal/DeleteCertificateAuthorityModal.tsx

var DeleteCertificateAuthorityModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






const DeleteCertificateAuthorityModal_baseClass = "delete-certificate-authority-modal";
const DeleteCertificateAuthorityModal = ({
  certAuthority,
  onExit
}) => {
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const onDeleteCertAuthority = () => DeleteCertificateAuthorityModal_async(null, null, function* () {
    setIsUpdating(true);
    try {
      yield certificates/* default */.A.deleteCertificateAuthority(certAuthority.id);
      ToastNotification/* notify */.me.success("Successfully deleted your certificate authority.");
      setIsUpdating(false);
      onExit();
    } catch (e) {
      setIsUpdating(false);
      const status = e == null ? void 0 : e.status;
      const reason = status === 409 ? (0,interfaces_errors/* getErrorReason */.F3)(e) : "";
      ToastNotification/* notify */.me.error(
        reason || "Couldn't delete certificate authority. Please try again.",
        { response: e }
      );
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteCertificateAuthorityModal_baseClass,
      title: "Delete certificate authority (CA)",
      onExit
    },
    /* @__PURE__ */ react.createElement("p", null, "Mesh won't remove certificates from the certificate authority (", /* @__PURE__ */ react.createElement("b", null, certAuthority.name), ") on existing hosts."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "alert",
        onClick: onDeleteCertAuthority,
        isLoading: isUpdating,
        disabled: isUpdating
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel"))
  );
};
/* harmony default export */ var DeleteCertificateAuthorityModal_DeleteCertificateAuthorityModal = (DeleteCertificateAuthorityModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/DeleteCertificateAuthorityModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/CustomESTForm/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/SmallstepForm/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/EditCertAuthorityModal/helpers.tsx

var EditCertAuthorityModal_helpers_defProp = Object.defineProperty;
var EditCertAuthorityModal_helpers_defProps = Object.defineProperties;
var EditCertAuthorityModal_helpers_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditCertAuthorityModal_helpers_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditCertAuthorityModal_helpers_hasOwnProp = Object.prototype.hasOwnProperty;
var EditCertAuthorityModal_helpers_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditCertAuthorityModal_helpers_defNormalProp = (obj, key, value) => key in obj ? EditCertAuthorityModal_helpers_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditCertAuthorityModal_helpers_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditCertAuthorityModal_helpers_hasOwnProp.call(b, prop))
      EditCertAuthorityModal_helpers_defNormalProp(a, prop, b[prop]);
  if (EditCertAuthorityModal_helpers_getOwnPropSymbols)
    for (var prop of EditCertAuthorityModal_helpers_getOwnPropSymbols(b)) {
      if (EditCertAuthorityModal_helpers_propIsEnum.call(b, prop))
        EditCertAuthorityModal_helpers_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditCertAuthorityModal_helpers_spreadProps = (a, b) => EditCertAuthorityModal_helpers_defProps(a, EditCertAuthorityModal_helpers_getOwnPropDescs(b));




const generateDefaultFormData = (certAuthority) => {
  var _a, _b;
  switch (certAuthority.type) {
    case "ndes_scep_proxy":
      return {
        scepURL: certAuthority.url,
        adminURL: certAuthority.admin_url,
        username: certAuthority.username,
        password: certAuthority.password
      };
    case "digicert":
      return {
        name: certAuthority.name,
        url: certAuthority.url,
        apiToken: certAuthority.api_token,
        profileId: certAuthority.profile_id,
        commonName: certAuthority.certificate_common_name,
        userPrincipalName: (_b = (_a = certAuthority.certificate_user_principal_names) == null ? void 0 : _a[0]) != null ? _b : "",
        certificateSeatId: certAuthority.certificate_seat_id
      };
    case "hydrant":
      return {
        name: certAuthority.name,
        url: certAuthority.url,
        clientId: certAuthority.client_id,
        clientSecret: certAuthority.client_secret
      };
    case "smallstep":
      return {
        name: certAuthority.name,
        scepURL: certAuthority.url,
        challengeURL: certAuthority.challenge_url,
        username: certAuthority.username,
        password: certAuthority.password
      };
    case "custom_scep_proxy": {
      const customSCEPcert = certAuthority;
      return {
        name: customSCEPcert.name,
        scepURL: customSCEPcert.url,
        challenge: customSCEPcert.challenge
      };
    }
    case "custom_est_proxy":
      return {
        name: certAuthority.name,
        url: certAuthority.url,
        username: certAuthority.username,
        password: certAuthority.password
      };
    default:
      throw new Error(
        `Unknown certificate authority type: ${certAuthority.type}`
      );
  }
};
const generateEditCertAuthorityData = (certAuthority, formData) => {
  const certAuthWithoutType = Object.assign({}, certAuthority);
  delete certAuthWithoutType.type;
  delete certAuthWithoutType.id;
  switch (certAuthority.type) {
    case "ndes_scep_proxy": {
      const {
        scepURL,
        adminURL,
        username,
        password
      } = formData;
      return {
        ndes_scep_proxy: (0,deep_difference/* default */.A)(
          {
            url: scepURL,
            admin_url: adminURL,
            username,
            password
          },
          certAuthWithoutType
        )
      };
    }
    case "digicert": {
      const {
        name,
        url: digicertUrl,
        apiToken,
        profileId,
        commonName,
        userPrincipalName,
        certificateSeatId
      } = formData;
      return {
        digicert: (0,deep_difference/* default */.A)(
          {
            name,
            url: digicertUrl,
            api_token: apiToken,
            profile_id: profileId,
            certificate_common_name: commonName,
            certificate_user_principal_names: [userPrincipalName],
            certificate_seat_id: certificateSeatId
          },
          certAuthWithoutType
        )
      };
    }
    case "hydrant": {
      const {
        name: hydrantName,
        url: hydrantUrl,
        clientId,
        clientSecret
      } = formData;
      return {
        hydrant: (0,deep_difference/* default */.A)(
          {
            name: hydrantName,
            url: hydrantUrl,
            client_id: clientId,
            client_secret: clientSecret
          },
          certAuthWithoutType
        )
      };
    }
    case "smallstep": {
      const {
        name: smallstepName,
        scepURL: smallstepURL,
        challengeURL: smallstepChallengeURL,
        username: smallstepUsername,
        password: smallstepPassword
      } = formData;
      return {
        smallstep: (0,deep_difference/* default */.A)(
          {
            name: smallstepName,
            url: smallstepURL,
            challenge_url: smallstepChallengeURL,
            username: smallstepUsername,
            password: smallstepPassword
          },
          certAuthWithoutType
        )
      };
    }
    case "custom_scep_proxy": {
      const {
        name: customSCEPName,
        scepURL: customSCEPUrl,
        challenge
      } = formData;
      return {
        custom_scep_proxy: (0,deep_difference/* default */.A)(
          {
            name: customSCEPName,
            url: customSCEPUrl,
            challenge
          },
          certAuthWithoutType
        )
      };
    }
    case "custom_est_proxy": {
      const {
        name: customESTName,
        url: customESTUrl,
        username: customESTUsername,
        password: customESTPassword
      } = formData;
      const diff = {
        custom_est_proxy: (0,deep_difference/* default */.A)(
          {
            name: customESTName,
            url: customESTUrl,
            username: customESTUsername,
            password: customESTPassword
          },
          certAuthWithoutType
        )
      };
      if (diff.custom_est_proxy.url) {
        if (!diff.custom_est_proxy.username) {
          diff.custom_est_proxy.username = customESTUsername;
        }
        if (!diff.custom_est_proxy.password) {
          diff.custom_est_proxy.password = customESTPassword;
        }
      }
      return diff;
    }
    default:
      throw new Error(
        `Unknown certificate authority type: ${certAuthority.type}`
      );
  }
};
const updateFormData = (certAuthority, prevFormData, update) => {
  const newData = EditCertAuthorityModal_helpers_spreadProps(EditCertAuthorityModal_helpers_spreadValues({}, prevFormData), { [update.name]: update.value });
  switch (certAuthority.type) {
    case "digicert": {
      const formData = prevFormData;
      if (update.name === "name" || update.name === "url" || update.name === "profileId") {
        return EditCertAuthorityModal_helpers_spreadProps(EditCertAuthorityModal_helpers_spreadValues({}, newData), {
          apiToken: formData.apiToken === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "" : formData.apiToken
        });
      }
      break;
    }
    case "ndes_scep_proxy": {
      const formData = prevFormData;
      if (update.name === "scepURL" || update.name === "adminURL" || update.name === "username") {
        return EditCertAuthorityModal_helpers_spreadProps(EditCertAuthorityModal_helpers_spreadValues({}, newData), {
          password: formData.password === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "" : formData.password
        });
      }
      break;
    }
    case "custom_scep_proxy": {
      const formData = prevFormData;
      if (update.name === "name" || update.name === "scepURL") {
        return EditCertAuthorityModal_helpers_spreadProps(EditCertAuthorityModal_helpers_spreadValues({}, newData), {
          challenge: formData.challenge === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "" : formData.challenge
        });
      }
      break;
    }
    case "hydrant": {
      const formData = prevFormData;
      if (update.name === "name" || update.name === "url") {
        return EditCertAuthorityModal_helpers_spreadProps(EditCertAuthorityModal_helpers_spreadValues({}, newData), {
          clientId: formData.clientId === certAuthority.client_id ? "" : formData.clientId,
          clientSecret: formData.clientSecret === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "" : formData.clientSecret
        });
      }
      break;
    }
    case "smallstep": {
      const formData = prevFormData;
      if (update.name === "name" || update.name === "scepURL" || update.name === "challengeURL" || update.name === "username") {
        return EditCertAuthorityModal_helpers_spreadProps(EditCertAuthorityModal_helpers_spreadValues({}, newData), {
          password: formData.password === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "" : formData.password
        });
      }
      break;
    }
    case "custom_est_proxy": {
      const formData = prevFormData;
      if (update.name === "url") {
        return EditCertAuthorityModal_helpers_spreadProps(EditCertAuthorityModal_helpers_spreadValues({}, newData), {
          username: formData.username === certAuthority.username ? "" : formData.username,
          password: formData.password === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "" : formData.password
        });
      }
      break;
    }
    default:
      throw new Error(
        `Unknown certificate authority type: ${certAuthority.type}`
      );
  }
  return newData;
};
const EditCertAuthorityModal_helpers_getErrorMessage = (err) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't edit certificate authority. ", getDisplayErrMessage(err));
};

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/EditCertAuthorityModal/EditCertAuthorityModal.tsx

var EditCertAuthorityModal_defProp = Object.defineProperty;
var EditCertAuthorityModal_defProps = Object.defineProperties;
var EditCertAuthorityModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditCertAuthorityModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditCertAuthorityModal_hasOwnProp = Object.prototype.hasOwnProperty;
var EditCertAuthorityModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditCertAuthorityModal_defNormalProp = (obj, key, value) => key in obj ? EditCertAuthorityModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditCertAuthorityModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditCertAuthorityModal_hasOwnProp.call(b, prop))
      EditCertAuthorityModal_defNormalProp(a, prop, b[prop]);
  if (EditCertAuthorityModal_getOwnPropSymbols)
    for (var prop of EditCertAuthorityModal_getOwnPropSymbols(b)) {
      if (EditCertAuthorityModal_propIsEnum.call(b, prop))
        EditCertAuthorityModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditCertAuthorityModal_spreadProps = (a, b) => EditCertAuthorityModal_defProps(a, EditCertAuthorityModal_getOwnPropDescs(b));
var EditCertAuthorityModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};















const EditCertAuthorityModal_baseClass = "edit-cert-authority-modal";
const EditCertAuthorityModal = ({
  certAuthority,
  onExit
}) => {
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [isDirty, setIsDirty] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)();
  const { data: fullCertAuthority, isLoading, isError } = (0,es.useQuery)(
    ["cert-authority", certAuthority.id],
    () => certificates/* default */.A.getCertificateAuthority(certAuthority.id),
    EditCertAuthorityModal_spreadProps(EditCertAuthorityModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      onSuccess: (data) => {
        setFormData(generateDefaultFormData(data));
      }
    })
  );
  const onChangeForm = (update) => {
    if (!fullCertAuthority) return;
    setFormData((prevFormData) => {
      if (!prevFormData) return prevFormData;
      return updateFormData(fullCertAuthority, prevFormData, update);
    });
    setIsDirty(true);
  };
  const onEditCertAuthority = () => EditCertAuthorityModal_async(null, null, function* () {
    if (!fullCertAuthority || !formData) {
      return;
    }
    const editPatchData = generateEditCertAuthorityData(
      fullCertAuthority,
      formData
    );
    setIsUpdating(true);
    try {
      yield certificates/* default */.A.editCertificateAuthority(
        certAuthority.id,
        editPatchData
      );
      ToastNotification/* notify */.me.success("Successfully edited certificate authority.");
      onExit();
    } catch (e) {
      ToastNotification/* notify */.me.error(EditCertAuthorityModal_helpers_getErrorMessage(e), { response: e });
    }
    setIsUpdating(false);
  });
  const getFormComponent = () => {
    switch (certAuthority.type) {
      case "ndes_scep_proxy":
        return NDESForm_NDESForm;
      case "digicert":
        return DigicertForm_DigicertForm;
      case "hydrant":
        return HydrantForm_HydrantForm;
      case "smallstep":
        return SmallstepForm_SmallstepForm;
      case "custom_scep_proxy":
        return CustomSCEPForm_CustomSCEPForm;
      case "custom_est_proxy":
        return CustomESTForm_CustomESTForm;
      default:
        throw new Error(
          `Unknown certificate authority type: ${certAuthority.type}`
        );
    }
  };
  const renderForm = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { className: `${EditCertAuthorityModal_baseClass}__data-error` });
    }
    const FormComponent = getFormComponent();
    if (!FormComponent || !formData) return /* @__PURE__ */ react.createElement(react.Fragment, null);
    return /* @__PURE__ */ react.createElement(
      FormComponent,
      {
        formData,
        submitBtnText: "Save",
        isSubmitting: isUpdating,
        isDirty,
        onChange: onChangeForm,
        onSubmit: onEditCertAuthority,
        onCancel: onExit
      }
    );
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: EditCertAuthorityModal_baseClass,
      title: "Edit certificate authority (CA)",
      width: "large",
      onExit,
      isContentDisabled: isUpdating
    },
    renderForm()
  );
};
/* harmony default export */ var EditCertAuthorityModal_EditCertAuthorityModal = (EditCertAuthorityModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/components/EditCertAuthorityModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/CertificateAuthorities.tsx

var CertificateAuthorities_defProp = Object.defineProperty;
var CertificateAuthorities_defProps = Object.defineProperties;
var CertificateAuthorities_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var CertificateAuthorities_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CertificateAuthorities_hasOwnProp = Object.prototype.hasOwnProperty;
var CertificateAuthorities_propIsEnum = Object.prototype.propertyIsEnumerable;
var CertificateAuthorities_defNormalProp = (obj, key, value) => key in obj ? CertificateAuthorities_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CertificateAuthorities_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CertificateAuthorities_hasOwnProp.call(b, prop))
      CertificateAuthorities_defNormalProp(a, prop, b[prop]);
  if (CertificateAuthorities_getOwnPropSymbols)
    for (var prop of CertificateAuthorities_getOwnPropSymbols(b)) {
      if (CertificateAuthorities_propIsEnum.call(b, prop))
        CertificateAuthorities_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CertificateAuthorities_spreadProps = (a, b) => CertificateAuthorities_defProps(a, CertificateAuthorities_getOwnPropDescs(b));


















const CertificateAuthorities = () => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [showAddCertAuthorityModal, setShowAddCertAuthorityModal] = (0,react.useState)(
    false
  );
  const [showEditCertAuthorityModal, setShowEditCertAuthorityModal] = (0,react.useState)(
    false
  );
  const [
    showDeleteCertAuthorityModal,
    setShowDeleteCertAuthorityModal
  ] = (0,react.useState)(false);
  const [
    selectedCertAuthority,
    setSelectedCertAuthority
  ] = (0,react.useState)(null);
  const {
    data: certAuthorities,
    isLoading,
    isError,
    refetch: refetchCertAuthorities
  } = (0,es.useQuery)(
    "certAuthorities",
    () => {
      return certificates/* default */.A.getCertificateAuthoritiesList();
    },
    CertificateAuthorities_spreadProps(CertificateAuthorities_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      select: (data) => data.certificate_authorities
    })
  );
  const onAddCertAuthority = () => {
    setShowAddCertAuthorityModal(true);
  };
  const onAddedNewCertAuthority = () => {
    refetchCertAuthorities();
    setShowAddCertAuthorityModal(false);
  };
  const onEditCertAuthority = (cert) => {
    setSelectedCertAuthority(cert);
    setShowEditCertAuthorityModal(true);
  };
  const onEditedCertAuthority = () => {
    refetchCertAuthorities();
    setShowEditCertAuthorityModal(false);
  };
  const onDeleteCertAuthority = (cert) => {
    setSelectedCertAuthority(cert);
    setShowDeleteCertAuthorityModal(true);
  };
  const onDeletedCertAuthority = () => {
    refetchCertAuthorities();
    setShowDeleteCertAuthorityModal(false);
  };
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    const pageDescription = /* @__PURE__ */ react.createElement(
      PageDescription/* default */.A,
      {
        variant: "right-panel",
        content: /* @__PURE__ */ react.createElement(react.Fragment, null, "To help your end users connect to Wi-Fi or VPNs, you can add your certificate authority.", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            text: "Learn more",
            url: "https://fleetdm.com/learn-more-about/certificate-authorities",
            newTab: true
          }
        ))
      }
    );
    if (certAuthorities === void 0 || certAuthorities.length === 0) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, pageDescription, /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No certificate authorities",
          info: "Add a certificate authority (CA) to help end users connect to Wi-Fi or VPNs.",
          primaryButton: /* @__PURE__ */ react.createElement(
            GitOpsModeTooltipWrapper/* default */.A,
            {
              renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
                Button/* default */.A,
                {
                  disabled: disableChildren,
                  onClick: onAddCertAuthority
                },
                "Add certificate authority"
              )
            }
          )
        }
      ));
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, pageDescription, /* @__PURE__ */ react.createElement(
      CertificateAuthorityList_CertificateAuthorityList,
      {
        certAuthorities,
        onAddCertAuthority,
        onClickEdit: onEditCertAuthority,
        onClickDelete: onDeleteCertAuthority
      }
    ));
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Certificate authorities" }, renderContent(), showAddCertAuthorityModal && certAuthorities && /* @__PURE__ */ react.createElement(
    AddCertAuthorityModal_AddCertAuthorityModal,
    {
      certAuthorities,
      onExit: onAddedNewCertAuthority
    }
  ), showEditCertAuthorityModal && selectedCertAuthority && certAuthorities && /* @__PURE__ */ react.createElement(
    EditCertAuthorityModal_EditCertAuthorityModal,
    {
      certAuthority: selectedCertAuthority,
      onExit: onEditedCertAuthority
    }
  ), showDeleteCertAuthorityModal && selectedCertAuthority && /* @__PURE__ */ react.createElement(
    DeleteCertificateAuthorityModal_DeleteCertificateAuthorityModal,
    {
      certAuthority: selectedCertAuthority,
      onExit: onDeletedCertAuthority
    }
  ));
};
/* harmony default export */ var CertificateAuthorities_CertificateAuthorities = (CertificateAuthorities);

;// ./frontend/pages/admin/IntegrationsPage/cards/CertificateAuthorities/index.ts



// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
;// ./frontend/pages/admin/IntegrationsPage/cards/ChangeManagement/ChangeManagement.tsx

var ChangeManagement_defProp = Object.defineProperty;
var ChangeManagement_defProps = Object.defineProperties;
var ChangeManagement_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ChangeManagement_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ChangeManagement_hasOwnProp = Object.prototype.hasOwnProperty;
var ChangeManagement_propIsEnum = Object.prototype.propertyIsEnumerable;
var ChangeManagement_defNormalProp = (obj, key, value) => key in obj ? ChangeManagement_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ChangeManagement_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ChangeManagement_hasOwnProp.call(b, prop))
      ChangeManagement_defNormalProp(a, prop, b[prop]);
  if (ChangeManagement_getOwnPropSymbols)
    for (var prop of ChangeManagement_getOwnPropSymbols(b)) {
      if (ChangeManagement_propIsEnum.call(b, prop))
        ChangeManagement_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ChangeManagement_spreadProps = (a, b) => ChangeManagement_defProps(a, ChangeManagement_getOwnPropDescs(b));
var ChangeManagement_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



















const ChangeManagement_baseClass = "change-management";
const ChangeManagement_validate = (formData) => {
  const errs = {};
  const { gitOpsModeEnabled, repoURL } = formData;
  if (gitOpsModeEnabled) {
    if (!repoURL) {
      errs.repository_url = "Git repository URL is required when GitOps mode is enabled";
    } else if (!(0,valid_url/* default */.A)({ url: repoURL, protocols: ["http", "https"] })) {
      errs.repository_url = "Git repository URL must include protocol (e.g. https://)";
    }
  }
  return errs;
};
const ChangeManagement = () => {
  const { setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  const [formData, setFormData] = (0,react.useState)({
    // dummy values, will be populated with fresh config API response
    gitOpsModeEnabled: false,
    repoURL: "",
    exceptLabels: false,
    exceptSoftware: false,
    exceptSecrets: true
  });
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const { isLoading: isLoadingConfig, error: isLoadingConfigError } = (0,es.useQuery)(["integrations"], () => entities_config/* default */.A.loadAll(), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      const {
        gitops: {
          gitops_mode_enabled: gitOpsModeEnabled2,
          repository_url: repoURL2,
          exceptions
        }
      } = data;
      setFormData({
        gitOpsModeEnabled: gitOpsModeEnabled2,
        repoURL: repoURL2,
        exceptLabels: exceptions.labels,
        exceptSoftware: exceptions.software,
        exceptSecrets: exceptions.secrets
      });
      setConfig(data);
    }
  });
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  if (!isPremiumTier)
    return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Change management" }, /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null));
  const {
    gitOpsModeEnabled,
    repoURL,
    exceptLabels,
    exceptSoftware,
    exceptSecrets
  } = formData;
  if (isLoadingConfig) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isLoadingConfigError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
  }
  const handleSubmit = (evt) => ChangeManagement_async(null, null, function* () {
    evt.preventDefault();
    const errs = ChangeManagement_validate(formData);
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    setIsUpdating(true);
    try {
      const updatedConfig = yield entities_config/* default */.A.update({
        gitops: {
          gitops_mode_enabled: formData.gitOpsModeEnabled,
          repository_url: formData.repoURL,
          exceptions: {
            labels: formData.exceptLabels,
            software: formData.exceptSoftware,
            secrets: formData.exceptSecrets
          }
        }
      });
      setFormData({
        gitOpsModeEnabled: updatedConfig.gitops.gitops_mode_enabled,
        repoURL: updatedConfig.gitops.repository_url,
        exceptLabels: updatedConfig.gitops.exceptions.labels,
        exceptSoftware: updatedConfig.gitops.exceptions.software,
        exceptSecrets: updatedConfig.gitops.exceptions.secrets
      });
      setConfig(updatedConfig);
      ToastNotification/* notify */.me.success("Successfully updated settings");
    } catch (e) {
      const message = (0,interfaces_errors/* getErrorReason */.F3)(e);
      ToastNotification/* notify */.me.error(message || "Failed to update settings", { response: e });
    } finally {
      setIsUpdating(false);
    }
  });
  const onInputChange = ({ name, value }) => {
    const newFormData = ChangeManagement_spreadProps(ChangeManagement_spreadValues({}, formData), { [name]: value });
    setFormData(newFormData);
    const newErrs = ChangeManagement_validate(newFormData);
    const errsToSet = {};
    Object.keys(formErrors).forEach((k) => {
      if (newErrs[k]) {
        errsToSet[k] = newErrs[k];
      }
    });
    setFormErrors(errsToSet);
  };
  const onInputBlur = () => {
    setFormErrors(ChangeManagement_validate(formData));
  };
  return /* @__PURE__ */ react.createElement("div", { className: ChangeManagement_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Change management" }), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "When using a git repository to manage Fleet, you can optionally put the UI in GitOps mode. This prevents you from making changes in the UI that would be overridden by GitOps workflows.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/gitops`,
          text: "Learn more about GitOps"
        }
      )),
      variant: "right-panel"
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: onInputChange,
      name: "gitOpsModeEnabled",
      value: gitOpsModeEnabled,
      parseTarget: true
    },
    /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "GitOps mode is a UI-only setting. API permissions are restricted based on user role." }, "Enable GitOps mode")
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Git repository URL",
      onChange: onInputChange,
      name: "repoURL",
      value: repoURL,
      parseTarget: true,
      onBlur: onInputBlur,
      error: formErrors.repository_url,
      helpText: "When GitOps mode is enabled, you will be directed here to make changes.",
      disabled: !gitOpsModeEnabled
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `form-field` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Opt-in to managing outside of git. Running GitOps won\u2019t override changes made in the UI or API." }, "Exceptions")), /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: onInputChange,
      name: "exceptLabels",
      value: exceptLabels,
      parseTarget: true
    },
    "Labels"
  ), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: onInputChange,
      name: "exceptSoftware",
      value: exceptSoftware,
      parseTarget: true
    },
    "Software"
  ), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: onInputChange,
      name: "exceptSecrets",
      value: exceptSecrets,
      parseTarget: true
    },
    "Enroll secrets"
  ))), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "submit",
      disabled: !!Object.keys(formErrors).length,
      isLoading: isUpdating
    },
    "Save"
  ))));
};
/* harmony default export */ var ChangeManagement_ChangeManagement = (ChangeManagement);

;// ./frontend/pages/admin/IntegrationsPage/cards/ChangeManagement/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/config.ts
var interfaces_config = __webpack_require__(77906);
// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/services/entities/conditional_access.ts



const conditionalAccessService = {
  triggerMicrosoftConditionalAccess: (msTenantId) => {
    return (0,services/* default */.Ay)("POST", endpoints/* default */.A.CONDITIONAL_ACCESS_MICROSOFT, {
      microsoft_tenant_id: msTenantId
    });
  },
  confirmMicrosoftConditionalAccess: () => {
    return (0,services/* default */.Ay)("POST", endpoints/* default */.A.CONDITIONAL_ACCESS_MICROSOFT_CONFIRM);
  },
  deleteMicrosoftConditionalAccess: () => {
    return (0,services/* default */.Ay)("DELETE", endpoints/* default */.A.CONDITIONAL_ACCESS_MICROSOFT);
  },
  getIdpAppleProfile: () => {
    return (0,services/* default */.Ay)(
      "GET",
      endpoints/* default */.A.CONDITIONAL_ACCESS_IDP_APPLE_PROFILE,
      void 0,
      "text"
    );
  },
  getIdpSigningCert: () => {
    return (0,services/* default */.Ay)(
      "GET",
      endpoints/* default */.A.CONDITIONAL_ACCESS_IDP_SIGNING_CERT,
      void 0,
      "blob"
    );
  }
};
/* harmony default export */ var conditional_access = (conditionalAccessService);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/SectionCard/SectionCard.tsx





const SectionCard_baseClass = "section-card";
const SectionCard = ({
  children,
  header,
  iconName,
  cta,
  className
}) => {
  const cardClasses = classnames_default()(SectionCard_baseClass, className);
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: cardClasses, color: "grey" }, /* @__PURE__ */ react.createElement("div", { className: `${SectionCard_baseClass}__content-wrapper` }, iconName && /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: iconName }), /* @__PURE__ */ react.createElement("div", { className: `${SectionCard_baseClass}__content` }, header && /* @__PURE__ */ react.createElement("h3", null, header), children)), cta && /* @__PURE__ */ react.createElement("div", { className: `${SectionCard_baseClass}__cta` }, cta));
};
/* harmony default export */ var SectionCard_SectionCard = (SectionCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/SectionCard/index.ts



// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
;// ./frontend/pages/admin/IntegrationsPage/cards/ConditionalAccess/components/EntraConditionalAccessModal/EntraConditionalAccessModal.tsx

var EntraConditionalAccessModal_defProp = Object.defineProperty;
var EntraConditionalAccessModal_defProps = Object.defineProperties;
var EntraConditionalAccessModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EntraConditionalAccessModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EntraConditionalAccessModal_hasOwnProp = Object.prototype.hasOwnProperty;
var EntraConditionalAccessModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var EntraConditionalAccessModal_defNormalProp = (obj, key, value) => key in obj ? EntraConditionalAccessModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EntraConditionalAccessModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EntraConditionalAccessModal_hasOwnProp.call(b, prop))
      EntraConditionalAccessModal_defNormalProp(a, prop, b[prop]);
  if (EntraConditionalAccessModal_getOwnPropSymbols)
    for (var prop of EntraConditionalAccessModal_getOwnPropSymbols(b)) {
      if (EntraConditionalAccessModal_propIsEnum.call(b, prop))
        EntraConditionalAccessModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EntraConditionalAccessModal_spreadProps = (a, b) => EntraConditionalAccessModal_defProps(a, EntraConditionalAccessModal_getOwnPropDescs(b));
var EntraConditionalAccessModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const EntraConditionalAccessModal_baseClass = "entra-conditional-access-modal";
const MSETID = "microsoft_entra_tenant_id";
const EntraConditionalAccessModal_validate = (formData) => {
  const errs = {};
  if (!formData[MSETID]) {
    errs[MSETID] = "Tenant ID must be present";
  }
  return errs;
};
const EntraConditionalAccessModal = ({
  onCancel,
  onSuccess
}) => {
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    [MSETID]: ""
  });
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const onSubmit = (evt) => EntraConditionalAccessModal_async(null, null, function* () {
    evt.preventDefault();
    const errs = EntraConditionalAccessModal_validate(formData);
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    setIsUpdating(true);
    try {
      const {
        microsoft_authentication_url: msAuthURL
      } = yield conditional_access.triggerMicrosoftConditionalAccess(
        formData[MSETID]
      );
      window.open(msAuthURL);
      setIsUpdating(false);
      onSuccess();
    } catch (e) {
      ToastNotification/* notify */.me.error(
        "Could not update conditional access integration settings.",
        { response: e }
      );
      setIsUpdating(false);
    }
  });
  const onInputChange = ({ name, value }) => {
    setFormData(EntraConditionalAccessModal_spreadProps(EntraConditionalAccessModal_spreadValues({}, formData), { [name]: value }));
    setFormErrors({});
  };
  const onInputBlur = () => {
    setFormErrors(EntraConditionalAccessModal_validate(formData));
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Microsoft Entra conditional access",
      onExit: onCancel,
      className: EntraConditionalAccessModal_baseClass,
      width: "large"
    },
    /* @__PURE__ */ react.createElement("form", { onSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement("p", { className: `${EntraConditionalAccessModal_baseClass}__instructions` }, "To configure Microsoft Entra conditional access, follow the instructions in the", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/entra-conditional-access`,
        text: "guide",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Microsoft Entra tenant ID",
        helpText: "You can find this in your Microsoft Entra admin center.",
        onChange: onInputChange,
        name: MSETID,
        value: formData[MSETID],
        parseTarget: true,
        onBlur: onInputBlur,
        error: formErrors[MSETID]
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        disabled: !!(0,lodash.size)(formErrors),
        isLoading: isUpdating
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var EntraConditionalAccessModal_EntraConditionalAccessModal = (EntraConditionalAccessModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/ConditionalAccess/components/EntraConditionalAccessModal/index.ts



// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
;// ./frontend/pages/admin/IntegrationsPage/cards/ConditionalAccess/components/OktaConditionalAccessModal/OktaConditionalAccessModal.tsx

var OktaConditionalAccessModal_defProp = Object.defineProperty;
var OktaConditionalAccessModal_defProps = Object.defineProperties;
var OktaConditionalAccessModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var OktaConditionalAccessModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var OktaConditionalAccessModal_hasOwnProp = Object.prototype.hasOwnProperty;
var OktaConditionalAccessModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var OktaConditionalAccessModal_defNormalProp = (obj, key, value) => key in obj ? OktaConditionalAccessModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var OktaConditionalAccessModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (OktaConditionalAccessModal_hasOwnProp.call(b, prop))
      OktaConditionalAccessModal_defNormalProp(a, prop, b[prop]);
  if (OktaConditionalAccessModal_getOwnPropSymbols)
    for (var prop of OktaConditionalAccessModal_getOwnPropSymbols(b)) {
      if (OktaConditionalAccessModal_propIsEnum.call(b, prop))
        OktaConditionalAccessModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var OktaConditionalAccessModal_spreadProps = (a, b) => OktaConditionalAccessModal_defProps(a, OktaConditionalAccessModal_getOwnPropDescs(b));
var OktaConditionalAccessModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
















const OktaConditionalAccessModal_baseClass = "okta-conditional-access-modal";
const OKTA_IDP_ID = "okta_idp_id";
const OKTA_ACS_URL = "okta_acs_url";
const OKTA_AUDIENCE_URI = "okta_audience_uri";
const OKTA_CERTIFICATE = "okta_certificate";
const OktaConditionalAccessModal_validate = (formData) => {
  const errs = {};
  const maxURLLength = 2048;
  const maxCertLength = 8192;
  if (!formData[OKTA_IDP_ID] || !formData[OKTA_IDP_ID].trim()) {
    errs[OKTA_IDP_ID] = "IdP ID must be present";
  } else if (formData[OKTA_IDP_ID].length > maxURLLength) {
    errs[OKTA_IDP_ID] = `IdP ID must be ${maxURLLength} characters or less`;
  }
  if (!formData[OKTA_ACS_URL] || !formData[OKTA_ACS_URL].trim()) {
    errs[OKTA_ACS_URL] = "Assertion consumer service URL must be present";
  } else if (formData[OKTA_ACS_URL].length > maxURLLength) {
    errs[OKTA_ACS_URL] = `Assertion consumer service URL must be ${maxURLLength} characters or less`;
  } else if (!(0,valid_url/* default */.A)({ url: formData[OKTA_ACS_URL], protocols: ["http", "https"] })) {
    errs[OKTA_ACS_URL] = "Assertion consumer service URL must be a valid URL with http or https scheme and a host";
  }
  if (!formData[OKTA_AUDIENCE_URI] || !formData[OKTA_AUDIENCE_URI].trim()) {
    errs[OKTA_AUDIENCE_URI] = "Audience URI must be present";
  } else if (formData[OKTA_AUDIENCE_URI].length > maxURLLength) {
    errs[OKTA_AUDIENCE_URI] = `Audience URI must be ${maxURLLength} characters or less`;
  }
  if (!formData[OKTA_CERTIFICATE] || !formData[OKTA_CERTIFICATE].trim()) {
    errs[OKTA_CERTIFICATE] = "Certificate must be present";
  } else if (formData[OKTA_CERTIFICATE].length > maxCertLength) {
    errs[OKTA_CERTIFICATE] = `Certificate must be ${maxCertLength} characters or less`;
  }
  return errs;
};
const OktaConditionalAccessModal = ({
  onCancel,
  onSuccess
}) => {
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    [OKTA_IDP_ID]: "",
    [OKTA_ACS_URL]: "",
    [OKTA_AUDIENCE_URI]: "",
    [OKTA_CERTIFICATE]: ""
  });
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [certFile, setCertFile] = (0,react.useState)(null);
  const { data: appleProfile = "" } = (0,es.useQuery)(
    ["appleProfile"],
    conditional_access.getIdpAppleProfile,
    OktaConditionalAccessModal_spreadProps(OktaConditionalAccessModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      onError: (e) => {
        var _a, _b;
        let errorReason = "";
        try {
          if (e.data && typeof e.data === "string") {
            const parsedError = JSON.parse(e.data);
            errorReason = ((_b = (_a = parsedError.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.reason) || "";
          } else {
            errorReason = (0,interfaces_errors/* getErrorReason */.F3)(e);
          }
        } catch (e2) {
          errorReason = (0,interfaces_errors/* getErrorReason */.F3)(e);
        }
        const message = errorReason ? `Failed to load Apple profile: ${errorReason}` : "Failed to load Apple profile.";
        ToastNotification/* notify */.me.error(message, { response: e });
      }
    })
  );
  const [isDownloadingCert, setIsDownloadingCert] = (0,react.useState)(false);
  const onDownloadSigningCert = (0,react.useCallback)(() => OktaConditionalAccessModal_async(null, null, function* () {
    setIsDownloadingCert(true);
    try {
      const blob = yield conditional_access.getIdpSigningCert();
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "fleet-idp-signing-cert.pem";
      downloadLink.click();
      downloadLink.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      ToastNotification/* notify */.me.error("Failed to download signing certificate.", { response: e });
    } finally {
      setIsDownloadingCert(false);
    }
  }), []);
  const onSubmit = (evt) => OktaConditionalAccessModal_async(null, null, function* () {
    var _a;
    evt.preventDefault();
    const errs = OktaConditionalAccessModal_validate(formData);
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    if (!config) {
      return;
    }
    setIsUpdating(true);
    try {
      const updatedConfig = yield entities_config/* default */.A.update({
        conditional_access: {
          okta_idp_id: formData[OKTA_IDP_ID],
          okta_assertion_consumer_service_url: formData[OKTA_ACS_URL],
          okta_audience_uri: formData[OKTA_AUDIENCE_URI],
          okta_certificate: formData[OKTA_CERTIFICATE],
          // Preserve existing Microsoft Entra settings
          microsoft_entra_tenant_id: ((_a = config.conditional_access) == null ? void 0 : _a.microsoft_entra_tenant_id) || ""
        }
      });
      ToastNotification/* notify */.me.success("Successfully configured Okta conditional access");
      setIsUpdating(false);
      onSuccess(updatedConfig);
    } catch (e) {
      ToastNotification/* notify */.me.error(
        "Could not update conditional access integration settings.",
        { response: e }
      );
      setIsUpdating(false);
    }
  });
  const onInputChange = ({ name, value }) => {
    const newFormData = OktaConditionalAccessModal_spreadProps(OktaConditionalAccessModal_spreadValues({}, formData), { [name]: value });
    setFormData(newFormData);
    const newErrs = OktaConditionalAccessModal_validate(newFormData);
    const errsToSet = {};
    Object.keys(formErrors).forEach((k) => {
      if (newErrs[k]) {
        errsToSet[k] = newErrs[k];
      }
    });
    setFormErrors(errsToSet);
  };
  const onInputBlur = () => {
    setFormErrors(OktaConditionalAccessModal_validate(formData));
  };
  const onDeleteFile = () => {
    setCertFile(null);
    setFormData(OktaConditionalAccessModal_spreadProps(OktaConditionalAccessModal_spreadValues({}, formData), { [OKTA_CERTIFICATE]: "" }));
    setFormErrors(OktaConditionalAccessModal_spreadProps(OktaConditionalAccessModal_spreadValues({}, formErrors), {
      [OKTA_CERTIFICATE]: "Certificate must be present"
    }));
  };
  const onSelectFile = (0,react.useCallback)(
    (files) => {
      const file = files == null ? void 0 : files[0];
      if (!file) return;
      if (!file.name.match(/\.(pem|crt|cer|cert)$/i)) {
        ToastNotification/* notify */.me.error(
          "Invalid file type. Please upload a .pem, .crt, .cer, or .cert file."
        );
        return;
      }
      const reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener("load", () => {
        const content = reader.result;
        if (!content.includes("-----BEGIN CERTIFICATE-----") || !content.includes("-----END CERTIFICATE-----")) {
          ToastNotification/* notify */.me.error(
            "Invalid certificate format. The file must be a valid PEM-encoded certificate."
          );
          return;
        }
        const newFormData = OktaConditionalAccessModal_spreadProps(OktaConditionalAccessModal_spreadValues({}, formData), { [OKTA_CERTIFICATE]: content });
        setCertFile(file);
        setFormData(newFormData);
        setFormErrors(OktaConditionalAccessModal_validate(newFormData));
      });
      reader.addEventListener("error", () => {
        ToastNotification/* notify */.me.error("Failed to read the certificate file.");
      });
    },
    [formData]
  );
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Okta conditional access",
      onExit: onCancel,
      className: OktaConditionalAccessModal_baseClass,
      width: "xlarge"
    },
    /* @__PURE__ */ react.createElement("form", { onSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement("p", { className: `${OktaConditionalAccessModal_baseClass}__instructions` }, "To configure Okta conditional access, follow the instructions in the", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/okta-conditional-access`,
        text: "guide",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement("div", { className: `${OktaConditionalAccessModal_baseClass}__certificate-section` }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: "Upload this certificate in Okta when creating the Mesh IdP.",
        underline: true
      },
      "Identity provider (IdP) signature certificate"
    ), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "secondary",
        onClick: onDownloadSigningCert,
        isLoading: isDownloadingCert,
        disabled: isDownloadingCert,
        icon: "download",
        iconPosition: "right"
      },
      /* @__PURE__ */ react.createElement("span", null, "Download certificate")
    )), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        enableCopy: true,
        label: "User scope profile",
        readOnly: true,
        value: appleProfile,
        type: "textarea"
      }
    ), /* @__PURE__ */ react.createElement("p", { className: `${OktaConditionalAccessModal_baseClass}__field-instructions` }, "You can find the following fields in Okta after creating an IdP in", " ", /* @__PURE__ */ react.createElement("strong", null, "Security"), " > ", /* @__PURE__ */ react.createElement("strong", null, "Identity Providers"), " ", "> ", /* @__PURE__ */ react.createElement("strong", null, "SAML 2.0 IdP"), "."), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "IdP ID",
        onChange: onInputChange,
        name: OKTA_IDP_ID,
        value: formData[OKTA_IDP_ID],
        parseTarget: true,
        onBlur: onInputBlur,
        error: formErrors[OKTA_IDP_ID]
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Assertion consumer service URL",
        onChange: onInputChange,
        name: OKTA_ACS_URL,
        value: formData[OKTA_ACS_URL],
        parseTarget: true,
        onBlur: onInputBlur,
        error: formErrors[OKTA_ACS_URL]
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Audience URI",
        onChange: onInputChange,
        name: OKTA_AUDIENCE_URI,
        value: formData[OKTA_AUDIENCE_URI],
        parseTarget: true,
        onBlur: onInputBlur,
        error: formErrors[OKTA_AUDIENCE_URI]
      }
    ), /* @__PURE__ */ react.createElement(
      FileUploader/* default */.A,
      {
        graphicName: "file-pem",
        title: "Okta certificate",
        message: /* @__PURE__ */ react.createElement(react.Fragment, null, "Upload the certificate provided by Okta during the", " ", /* @__PURE__ */ react.createElement("strong", null, "Set Up Authenticator"), " workflow"),
        internalError: formErrors[OKTA_CERTIFICATE],
        onFileUpload: onSelectFile,
        buttonType: "secondary",
        buttonMessage: "Upload",
        accept: ".pem,.crt,.cer,.cert",
        fileDetails: certFile ? { name: certFile.name } : void 0,
        onDeleteFile
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        disabled: !!(0,lodash.size)(formErrors),
        isLoading: isUpdating
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var OktaConditionalAccessModal_OktaConditionalAccessModal = (OktaConditionalAccessModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/ConditionalAccess/components/OktaConditionalAccessModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/ConditionalAccess/ConditionalAccess.tsx

var ConditionalAccess_defProp = Object.defineProperty;
var ConditionalAccess_defProps = Object.defineProperties;
var ConditionalAccess_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ConditionalAccess_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ConditionalAccess_hasOwnProp = Object.prototype.hasOwnProperty;
var ConditionalAccess_propIsEnum = Object.prototype.propertyIsEnumerable;
var ConditionalAccess_defNormalProp = (obj, key, value) => key in obj ? ConditionalAccess_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ConditionalAccess_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ConditionalAccess_hasOwnProp.call(b, prop))
      ConditionalAccess_defNormalProp(a, prop, b[prop]);
  if (ConditionalAccess_getOwnPropSymbols)
    for (var prop of ConditionalAccess_getOwnPropSymbols(b)) {
      if (ConditionalAccess_propIsEnum.call(b, prop))
        ConditionalAccess_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ConditionalAccess_spreadProps = (a, b) => ConditionalAccess_defProps(a, ConditionalAccess_getOwnPropDescs(b));
var ConditionalAccess_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





















const ConditionalAccess_baseClass = "conditional-access";
const DeleteConditionalAccessModal = ({
  toggleDeleteConditionalAccessModal,
  onDelete,
  provider,
  config
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const providerName = provider === "microsoft-entra" ? "Microsoft Entra" : "Okta";
  const handleDelete = () => ConditionalAccess_async(null, null, function* () {
    var _a, _b;
    setIsDeleting(true);
    try {
      let updatedConfig;
      if (provider === "microsoft-entra") {
        yield conditional_access.deleteMicrosoftConditionalAccess();
        updatedConfig = yield entities_config/* default */.A.loadAll();
      } else {
        updatedConfig = yield entities_config/* default */.A.update({
          conditional_access: {
            okta_idp_id: "",
            okta_assertion_consumer_service_url: "",
            okta_audience_uri: "",
            okta_certificate: "",
            // Preserve existing Microsoft Entra settings
            microsoft_entra_tenant_id: ((_a = config == null ? void 0 : config.conditional_access) == null ? void 0 : _a.microsoft_entra_tenant_id) || "",
            microsoft_entra_connection_configured: ((_b = config == null ? void 0 : config.conditional_access) == null ? void 0 : _b.microsoft_entra_connection_configured) || false
          }
        });
      }
      ToastNotification/* notify */.me.success(`Successfully disconnected from ${providerName}.`);
      toggleDeleteConditionalAccessModal();
      onDelete(updatedConfig);
    } catch (e) {
      ToastNotification/* notify */.me.error(
        `Could not disconnect from ${providerName}, please try again.`,
        { response: e }
      );
    }
    setIsDeleting(false);
  });
  const copy = provider === "microsoft-entra" ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Before you delete, first unblock all end users.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      text: "Learn how",
      url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/disable-entra-conditional-access`,
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement("p", null, "If you don't, end users will stay blocked even after deleting Entra.")) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Before you delete, first unblock all end users.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      text: "Learn how",
      url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/disable-okta-conditional-access`,
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement("p", null, "If you don't, end users will stay blocked even after deleting Okta."));
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete",
      onExit: toggleDeleteConditionalAccessModal,
      onEnter: handleDelete
    },
    copy,
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: handleDelete,
        isLoading: isDeleting,
        disabled: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: toggleDeleteConditionalAccessModal,
        variant: "secondary",
        disabled: isDeleting
      },
      "Cancel"
    ))
  );
};
var EntraPhase = /* @__PURE__ */ ((EntraPhase2) => {
  EntraPhase2["NotConfigured"] = "not-configured";
  EntraPhase2["ConfirmingConfigured"] = "confirming-configured";
  EntraPhase2["ConfirmationError"] = "confirmation-error";
  EntraPhase2["AwaitingOAuth"] = "awaiting-oauth";
  EntraPhase2["Configured"] = "configured";
  EntraPhase2["ConsentMissing"] = "consent-missing";
  return EntraPhase2;
})(EntraPhase || {});
const ConditionalAccess = () => {
  var _a, _b, _c;
  const { isPremiumTier, setConfig, config } = (0,react.useContext)(app/* AppContext */.BR);
  const [entraPhase, setEntraPhase] = (0,react.useState)(
    "not-configured" /* NotConfigured */
  );
  const [showEntraModal, setShowEntraModal] = (0,react.useState)(false);
  const [showOktaModal, setShowOktaModal] = (0,react.useState)(false);
  const [providerToDelete, setProviderToDelete] = (0,react.useState)(null);
  const [bypassDisabled, setBypassDisabled] = (0,react.useState)(
    ((_a = config == null ? void 0 : config.conditional_access) == null ? void 0 : _a.bypass_disabled) || false
  );
  const [isUpdatingBypass, setIsUpdatingBypass] = (0,react.useState)(false);
  (0,es.useQuery)(["confirmAccess"], conditional_access.confirmMicrosoftConditionalAccess, ConditionalAccess_spreadProps(ConditionalAccess_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    // only make this call at the appropriate UI phase
    enabled: entraPhase === "confirming-configured" /* ConfirmingConfigured */ && isPremiumTier,
    onSuccess: ({ configuration_completed, setup_error }) => {
      if (configuration_completed) {
        setEntraPhase("configured" /* Configured */);
        ToastNotification/* notify */.me.success(
          "Successfully verified Microsoft Entra conditional access integration"
        );
      } else {
        setEntraPhase("consent-missing" /* ConsentMissing */);
        if (
          // IT admin did not complete the consent.
          !setup_error || // IT admin clicked "Cancel" in the consent dialog.
          setup_error.includes(
            "A Microsoft Entra admin did not consent to the permissions requested by the conditional access integration"
          )
        ) {
          ToastNotification/* notify */.me.error(
            "Couldn't update. Mesh didn't get permissions for Entra. Please try again and accept the permissions."
          );
        } else if (setup_error.includes(
          'No "Fleet conditional access" Entra ID group was found'
        )) {
          ToastNotification/* notify */.me.error(
            `Couldn't connect. The "Fleet conditional access" group doesn't exist in Entra. Please create the group and try again.`
          );
        } else {
          ToastNotification/* notify */.me.error(
            "Couldn't connect. Please contact your Mesh administrator."
          );
        }
      }
    },
    onError: () => {
      setEntraPhase("confirmation-error" /* ConfirmationError */);
    }
  }));
  const {
    microsoft_entra_tenant_id: entraTenantId,
    microsoft_entra_connection_configured: entraConfigured
  } = (config == null ? void 0 : config.conditional_access) || {};
  const oktaConfigured = (0,interfaces_config/* isOktaConditionalAccessConfigured */.Wf)(config);
  (0,react.useEffect)(() => {
    const finalStates = [
      "awaiting-oauth" /* AwaitingOAuth */,
      // Don't check config if we're in AwaitingOAuth phase
      "confirmation-error" /* ConfirmationError */,
      // Don't do confirm call if we are in a final error state
      "consent-missing" /* ConsentMissing */
      // Don't do confirm call if after tenant ID provided, something went wrong
    ];
    if (finalStates.includes(entraPhase)) {
      return;
    }
    if (entraPhase === "configured" /* Configured */ && !entraConfigured && entraTenantId) {
      return;
    }
    if (entraTenantId) {
      if (!entraConfigured) {
        setEntraPhase("confirming-configured" /* ConfirmingConfigured */);
      } else {
        setEntraPhase("configured" /* Configured */);
      }
    } else {
      setEntraPhase("not-configured" /* NotConfigured */);
    }
  }, [entraTenantId, entraConfigured, entraPhase]);
  if (!isPremiumTier) {
    return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Conditional access" }, /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null));
  }
  const toggleDeleteModal = () => {
    setProviderToDelete(null);
  };
  const toggleEntraModal = () => {
    setShowEntraModal(!showEntraModal);
  };
  const handleEntraModalSuccess = () => {
    setShowEntraModal(false);
    setEntraPhase("awaiting-oauth" /* AwaitingOAuth */);
  };
  const onDeleteConditionalAccess = (updatedConfig) => {
    setConfig(updatedConfig);
  };
  const toggleOktaModal = () => {
    setShowOktaModal(!showOktaModal);
  };
  const handleOktaModalSuccess = (updatedConfig) => {
    setShowOktaModal(false);
    setConfig(updatedConfig);
  };
  const handleEntraDelete = () => {
    setProviderToDelete("microsoft-entra");
  };
  const handleOktaDelete = () => {
    setProviderToDelete("okta");
  };
  const handleSaveBypassSettings = (evt) => ConditionalAccess_async(null, null, function* () {
    var _a2, _b2, _c2, _d, _e;
    evt.preventDefault();
    setIsUpdatingBypass(true);
    try {
      const updatedConfig = yield entities_config/* default */.A.update({
        conditional_access: {
          bypass_disabled: bypassDisabled,
          // Preserve existing settings
          okta_idp_id: ((_a2 = config == null ? void 0 : config.conditional_access) == null ? void 0 : _a2.okta_idp_id) || "",
          okta_assertion_consumer_service_url: ((_b2 = config == null ? void 0 : config.conditional_access) == null ? void 0 : _b2.okta_assertion_consumer_service_url) || "",
          okta_audience_uri: ((_c2 = config == null ? void 0 : config.conditional_access) == null ? void 0 : _c2.okta_audience_uri) || "",
          okta_certificate: ((_d = config == null ? void 0 : config.conditional_access) == null ? void 0 : _d.okta_certificate) || "",
          microsoft_entra_tenant_id: ((_e = config == null ? void 0 : config.conditional_access) == null ? void 0 : _e.microsoft_entra_tenant_id) || ""
        }
      });
      setConfig(updatedConfig);
      ToastNotification/* notify */.me.success("Successfully updated conditional access settings.");
    } catch (e) {
      ToastNotification/* notify */.me.error("Could not update conditional access settings.", {
        response: e
      });
    }
    setIsUpdatingBypass(false);
  });
  const renderOktaContent = () => {
    var _a2;
    return /* @__PURE__ */ react.createElement(
      SectionCard_SectionCard,
      {
        header: oktaConfigured ? void 0 : "Okta",
        iconName: oktaConfigured ? "success" : void 0,
        cta: oktaConfigured ? /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "subdued",
            onClick: handleOktaDelete,
            icon: "trash",
            iconPosition: "right"
          },
          "Delete"
        ) : /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: toggleOktaModal }, "Connect")
      },
      oktaConfigured ? /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, "IdP ID:"), " ", (_a2 = config == null ? void 0 : config.conditional_access) == null ? void 0 : _a2.okta_idp_id)
        },
        "Okta"
      ), " ", "conditional access connected.") : "Connect Okta to enable conditional access."
    );
  };
  const renderEntraContent = () => {
    if (entraPhase === "confirmation-error" /* ConfirmationError */) {
      return /* @__PURE__ */ react.createElement(SectionCard_SectionCard, { header: "Microsoft Entra" }, /* @__PURE__ */ react.createElement(DataError/* default */.A, null));
    }
    if (entraPhase === "confirming-configured" /* ConfirmingConfigured */) {
      return /* @__PURE__ */ react.createElement(
        SectionCard_SectionCard,
        {
          header: "Microsoft Entra",
          cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { isLoading: true, disabled: true }, "Connect")
        },
        "Please wait until Microsoft Entra configuration is confirmed."
      );
    }
    const entraIsConfigured = entraPhase === "configured" /* Configured */;
    const entraIsAwaitingOAuth = entraPhase === "awaiting-oauth" /* AwaitingOAuth */;
    let entraIconName;
    if (entraIsConfigured) {
      entraIconName = "success";
    } else if (entraIsAwaitingOAuth) {
      entraIconName = "pending-outline";
    }
    let entraCta;
    if (entraIsConfigured) {
      entraCta = /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "subdued",
          onClick: handleEntraDelete,
          icon: "trash",
          iconPosition: "right"
        },
        "Delete"
      );
    } else if (!entraIsAwaitingOAuth) {
      entraCta = /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: toggleEntraModal }, "Connect");
    }
    let entraContent;
    if (entraIsConfigured) {
      entraContent = /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, "Tenant ID:"), " ", entraTenantId)
        },
        "Microsoft Entra"
      ), " ", "conditional access connected.");
    } else if (entraIsAwaitingOAuth) {
      entraContent = "To complete your integration, follow the instructions in the other tab, then refresh this page to verify.";
    } else {
      entraContent = "Connect Entra to enable conditional access.";
    }
    return /* @__PURE__ */ react.createElement(
      SectionCard_SectionCard,
      {
        header: entraIsConfigured || entraIsAwaitingOAuth ? void 0 : "Microsoft Entra",
        iconName: entraIconName,
        cta: entraCta
      },
      entraContent
    );
  };
  const renderContent = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${ConditionalAccess_baseClass}__cards` }, renderOktaContent(), renderEntraContent());
  };
  return /* @__PURE__ */ react.createElement("div", { className: ConditionalAccess_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${ConditionalAccess_baseClass}__connections` }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Conditional access" }), /* @__PURE__ */ react.createElement("p", { className: `${ConditionalAccess_baseClass}__page-description` }, "Block hosts failing policies from logging in with single sign-on. Once connected, enable or disable on the", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: paths/* default */.A.MANAGE_POLICIES, text: "Policies" }), " page."), renderContent(), showEntraModal && /* @__PURE__ */ react.createElement(
    EntraConditionalAccessModal_EntraConditionalAccessModal,
    {
      onCancel: toggleEntraModal,
      onSuccess: handleEntraModalSuccess
    }
  ), showOktaModal && /* @__PURE__ */ react.createElement(
    OktaConditionalAccessModal_OktaConditionalAccessModal,
    {
      onCancel: toggleOktaModal,
      onSuccess: handleOktaModalSuccess
    }
  ), providerToDelete && /* @__PURE__ */ react.createElement(
    DeleteConditionalAccessModal,
    {
      onDelete: onDeleteConditionalAccess,
      toggleDeleteConditionalAccessModal: toggleDeleteModal,
      provider: providerToDelete,
      config
    }
  )), oktaConfigured && /* @__PURE__ */ react.createElement("div", { className: `${ConditionalAccess_baseClass}__end-user-experience` }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "End user experience" }), /* @__PURE__ */ react.createElement("form", { onSubmit: handleSaveBypassSettings }, /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: () => setBypassDisabled(!bypassDisabled),
      name: "bypassDisabled",
      value: !bypassDisabled
    },
    /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Bypassing is valid for a single login attempt and is tracked in audit logs. Critical policies can never be bypassed.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")")),
        showArrow: false
      },
      "Bypass for non-critical policies"
    )
  ), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "submit",
      isLoading: isUpdatingBypass,
      disabled: bypassDisabled === ((_c = (_b = config == null ? void 0 : config.conditional_access) == null ? void 0 : _b.bypass_disabled) != null ? _c : false) || !config
    },
    "Save"
  ))));
};
/* harmony default export */ var ConditionalAccess_ConditionalAccess = (ConditionalAccess);

;// ./frontend/pages/admin/IntegrationsPage/cards/ConditionalAccess/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/components/GoogleWorkspaceSection/GoogleWorkspaceSection.tsx

var GoogleWorkspaceSection_defProp = Object.defineProperty;
var GoogleWorkspaceSection_defProps = Object.defineProperties;
var GoogleWorkspaceSection_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var GoogleWorkspaceSection_getOwnPropSymbols = Object.getOwnPropertySymbols;
var GoogleWorkspaceSection_hasOwnProp = Object.prototype.hasOwnProperty;
var GoogleWorkspaceSection_propIsEnum = Object.prototype.propertyIsEnumerable;
var GoogleWorkspaceSection_defNormalProp = (obj, key, value) => key in obj ? GoogleWorkspaceSection_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var GoogleWorkspaceSection_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (GoogleWorkspaceSection_hasOwnProp.call(b, prop))
      GoogleWorkspaceSection_defNormalProp(a, prop, b[prop]);
  if (GoogleWorkspaceSection_getOwnPropSymbols)
    for (var prop of GoogleWorkspaceSection_getOwnPropSymbols(b)) {
      if (GoogleWorkspaceSection_propIsEnum.call(b, prop))
        GoogleWorkspaceSection_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var GoogleWorkspaceSection_spreadProps = (a, b) => GoogleWorkspaceSection_defProps(a, GoogleWorkspaceSection_getOwnPropDescs(b));
var GoogleWorkspaceSection_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};











const GoogleWorkspaceSection_API_KEY_JSON_PLACEHOLDER = `{
  "type": "service_account",
  "project_id": "fleet-idp-sync",
  "private_key_id": "<private key id>",
  "private_key": "-----BEGIN PRIVATE KEY----\\n<private key>\\n-----END PRIVATE KEY-----\\n",
  "client_email": "fleet-idp-sync@fleet-idp-sync.iam.gserviceaccount.com",
  "client_id": "<client id>",
  "token_uri": "https://oauth2.googleapis.com/token",
  "universe_domain": "googleapis.com"
}`;
const GoogleWorkspaceSection_isObfuscatedApiKey = (apiKeyJson) => {
  if (!apiKeyJson || Object.keys(apiKeyJson).length === 0) {
    return false;
  }
  return Object.values(apiKeyJson).every(
    (value) => value === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1
  );
};
const GoogleWorkspaceSection_isErrorWithMessage = (error) => {
  return error.message !== void 0;
};
const GoogleWorkspaceSection_baseClass = "google-workspace-section";
const GoogleWorkspaceSection = ({
  appConfig
}) => {
  const queryClient = (0,es.useQueryClient)();
  const [formData, setFormData] = (0,react.useState)({
    domain: "",
    impersonatedUserEmail: "",
    apiKeyJson: ""
  });
  const [isUpdatingSettings, setIsUpdatingSettings] = (0,react.useState)(false);
  const [formErrors, setFormErrors] = (0,react.useState)({});
  (0,react.useEffect)(() => {
    const integrations = appConfig == null ? void 0 : appConfig.integrations.google_workspace;
    if (Array.isArray(integrations) && integrations.length > 0) {
      const { domain: domain2, impersonated_user_email, api_key_json } = integrations[0];
      setFormData({
        domain: domain2,
        impersonatedUserEmail: impersonated_user_email,
        apiKeyJson: GoogleWorkspaceSection_isObfuscatedApiKey(api_key_json) ? constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 : JSON.stringify(api_key_json, null, "	")
      });
    }
  }, [appConfig]);
  const gomEnabled = appConfig.gitops.gitops_mode_enabled;
  const { apiKeyJson, domain, impersonatedUserEmail } = formData;
  const validateForm = (curFormData) => {
    const errors = {};
    const anyFilled = !!curFormData.domain || !!curFormData.impersonatedUserEmail || !!curFormData.apiKeyJson;
    if (anyFilled) {
      if (!curFormData.domain) {
        errors.domain = "Primary domain must be completed";
      }
      if (!curFormData.impersonatedUserEmail) {
        errors.impersonatedUserEmail = "Admin email must be completed";
      }
      if (!curFormData.apiKeyJson) {
        errors.apiKeyJson = "API key JSON must be completed";
      }
    }
    if (curFormData.apiKeyJson && curFormData.apiKeyJson !== constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1) {
      try {
        JSON.parse(curFormData.apiKeyJson);
      } catch (e) {
        if (GoogleWorkspaceSection_isErrorWithMessage(e)) {
          errors.apiKeyJson = e.message.toString();
        } else {
          throw e;
        }
      }
    }
    return errors;
  };
  const onInputChange = (0,react.useCallback)(
    ({ name, value }) => {
      const newFormData = GoogleWorkspaceSection_spreadProps(GoogleWorkspaceSection_spreadValues({}, formData), { [name]: value });
      setFormData(newFormData);
      setFormErrors(validateForm(newFormData));
    },
    [formData]
  );
  const onFormSubmit = (evt) => GoogleWorkspaceSection_async(null, null, function* () {
    evt.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setIsUpdatingSettings(true);
    try {
      const isDisconnect = !domain && !impersonatedUserEmail && !apiKeyJson;
      let googleWorkspace = [];
      if (!isDisconnect) {
        const entry = {
          domain,
          impersonated_user_email: impersonatedUserEmail
        };
        if (apiKeyJson && apiKeyJson !== constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1) {
          entry.api_key_json = JSON.parse(apiKeyJson);
        }
        googleWorkspace = [entry];
      }
      yield entities_config/* default */.A.update({
        integrations: { google_workspace: googleWorkspace }
      });
      ToastNotification/* notify */.me.success(
        "Successfully saved Google Workspace integration settings."
      );
      yield queryClient.invalidateQueries(["config"]);
      yield queryClient.invalidateQueries(["scim_details"]);
    } catch (e) {
      ToastNotification/* notify */.me.error("Could not save Google Workspace integration settings.", {
        response: e
      });
    } finally {
      setIsUpdatingSettings(false);
    }
  });
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Google Workspace", className: GoogleWorkspaceSection_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Configure these settings to populate IdP host vitals from Google Workspace. When Google Workspace is connected, Mesh ignores SCIM provisioning from other IdPs (e.g Okta, Entra ID)."),
      variant: "right-panel"
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement(Card/* default */.A, null, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "API key JSON",
      onChange: onInputChange,
      name: "apiKeyJson",
      value: apiKeyJson,
      parseTarget: true,
      type: "textarea",
      placeholder: GoogleWorkspaceSection_API_KEY_JSON_PLACEHOLDER,
      inputClassName: `${GoogleWorkspaceSection_baseClass}__api-key-json`,
      error: formErrors.apiKeyJson,
      disabled: gomEnabled,
      helpText: apiKeyJson === constants/* UNCHANGED_PASSWORD_API_RESPONSE */.n1 ? "API key is configured. Replace with a new key to update." : "Paste the full contents of the service account JSON key file."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Primary domain",
      onChange: onInputChange,
      name: "domain",
      value: domain,
      parseTarget: true,
      placeholder: "example.com",
      error: formErrors.domain,
      disabled: gomEnabled,
      helpText: "Your Google Workspace primary domain."
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Admin email to impersonate",
      onChange: onInputChange,
      name: "impersonatedUserEmail",
      value: impersonatedUserEmail,
      parseTarget: true,
      placeholder: "admin@example.com",
      error: formErrors.impersonatedUserEmail,
      disabled: gomEnabled,
      helpText: "A Google Workspace admin the service account impersonates via domain-wide delegation."
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: Object.keys(formErrors).length > 0 || disableChildren,
          className: "save-loading",
          isLoading: isUpdatingSettings
        },
        "Save"
      )
    }
  )))));
};
/* harmony default export */ var GoogleWorkspaceSection_GoogleWorkspaceSection = (GoogleWorkspaceSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/components/GoogleWorkspaceSection/index.ts



// EXTERNAL MODULE: ./frontend/services/entities/idp.ts
var idp = __webpack_require__(83947);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/components/IdentityProviderSection/IdentityProviderSection.tsx

var IdentityProviderSection_defProp = Object.defineProperty;
var IdentityProviderSection_getOwnPropSymbols = Object.getOwnPropertySymbols;
var IdentityProviderSection_hasOwnProp = Object.prototype.hasOwnProperty;
var IdentityProviderSection_propIsEnum = Object.prototype.propertyIsEnumerable;
var IdentityProviderSection_defNormalProp = (obj, key, value) => key in obj ? IdentityProviderSection_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var IdentityProviderSection_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (IdentityProviderSection_hasOwnProp.call(b, prop))
      IdentityProviderSection_defNormalProp(a, prop, b[prop]);
  if (IdentityProviderSection_getOwnPropSymbols)
    for (var prop of IdentityProviderSection_getOwnPropSymbols(b)) {
      if (IdentityProviderSection_propIsEnum.call(b, prop))
        IdentityProviderSection_defNormalProp(a, prop, b[prop]);
    }
  return a;
};














const IdentityProviderSection_baseClass = "identity-provider-section";
const AddEndUserInfoCard = () => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "No IdP connected",
      info: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn how to connect your IdP",
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/connect-idp`
        }
      )
    }
  );
};
const ReceivedEndUserInfoCard = ({
  receivedAt
}) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      iconName: "success",
      cta: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/troubleshoot-idp-connection`
        }
      )
    },
    /* @__PURE__ */ react.createElement("p", { className: `${IdentityProviderSection_baseClass}__section-card-content` }, "Received information from your IdP", " ", /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        showArrow: true,
        position: "top",
        tipContent: (0,helpers/* internationalTimeFormat */.Fs)(new Date(receivedAt)),
        underline: false,
        className: `${IdentityProviderSection_baseClass}__received-tooltip`
      },
      "(",
      (0,date_format/* dateAgo */.gY)(receivedAt),
      ")"
    ), ".")
  );
};
const FailedEndUserInfoCard = ({
  receivedAt,
  details
}) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      iconName: "error",
      cta: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/troubleshoot-idp-connection`
        }
      )
    },
    /* @__PURE__ */ react.createElement("p", { className: `${IdentityProviderSection_baseClass}__section-card-content` }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        showArrow: true,
        position: "top",
        tipContent: `Error: ${details}`,
        underline: false,
        className: `${IdentityProviderSection_baseClass}__received-tooltip`
      },
      "Failed to receive information from your IdP (",
      (0,date_format/* dateAgo */.gY)(receivedAt),
      ")."
    ))
  );
};
const IdentityProviderSection = () => {
  const { data: scimIdPDetails, isLoading, isError } = (0,es.useQuery)(
    ["scim_details"],
    () => idp/* default */.A.getSCIMDetails(),
    IdentityProviderSection_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  const renderContent = () => {
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (!scimIdPDetails) return null;
    if (scimIdPDetails.last_request === null) {
      return /* @__PURE__ */ react.createElement(AddEndUserInfoCard, null);
    } else if (scimIdPDetails.last_request.status === "success") {
      return /* @__PURE__ */ react.createElement(
        ReceivedEndUserInfoCard,
        {
          receivedAt: scimIdPDetails.last_request.requested_at
        }
      );
    } else if (scimIdPDetails.last_request.status === "error") {
      return /* @__PURE__ */ react.createElement(
        FailedEndUserInfoCard,
        {
          receivedAt: scimIdPDetails.last_request.requested_at,
          details: scimIdPDetails.last_request.details
        }
      );
    }
    return null;
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "User mapping" }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Connect Mesh to your IdP to sync end user information (e.g. groups) to hosts."),
      variant: "right-panel"
    }
  ), renderContent());
};
/* harmony default export */ var IdentityProviderSection_IdentityProviderSection = (IdentityProviderSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/components/IdentityProviderSection/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/IdentityProviders.tsx






const IdentityProviders_baseClass = "identity-providers";
const IdentityProviders = ({
  appConfig,
  isPremiumTier
}) => {
  if (!isPremiumTier) {
    return /* @__PURE__ */ react.createElement("div", { className: IdentityProviders_baseClass }, /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Identity provider (IdP)" }, /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null)));
  }
  return /* @__PURE__ */ react.createElement("div", { className: IdentityProviders_baseClass }, /* @__PURE__ */ react.createElement(IdentityProviderSection_IdentityProviderSection, null), /* @__PURE__ */ react.createElement(GoogleWorkspaceSection_GoogleWorkspaceSection, { appConfig }));
};
/* harmony default export */ var IdentityProviders_IdentityProviders = (IdentityProviders);

;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_email/valid_email.ts
var valid_email = __webpack_require__(48907);
;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/components/IntegrationForm/IntegrationForm.tsx









const IntegrationForm_baseClass = "integration-form";
const validateForm = (data, destination) => {
  const errors = {};
  if (!data.url) {
    errors.url = "Enter a URL";
  } else if (!(0,valid_url/* default */.A)({ url: data.url, protocols: ["https"] })) {
    errors.url = "Enter a valid HTTPS URL";
  }
  if (!data.apiToken) {
    errors.apiToken = "Enter an API token";
  }
  if (destination === "jira") {
    if (!data.username) {
      errors.username = "Enter a username";
    }
    if (!data.projectKey) {
      errors.projectKey = "Enter a project key";
    }
  } else {
    if (!data.email) {
      errors.email = "Enter an email";
    } else if (!(0,valid_email/* default */.A)(data.email)) {
      errors.email = "Enter a valid email";
    }
    if (!data.groupId) {
      errors.groupId = "Enter a group ID";
    }
  }
  return errors;
};
const IntegrationForm = ({
  onCancel,
  onSubmit,
  integrationEditing,
  integrations,
  integrationEditingUrl,
  integrationEditingUsername,
  integrationEditingEmail,
  integrationEditingApiToken,
  integrationEditingProjectKey,
  integrationEditingGroupId,
  integrationEnableSoftwareVulnerabilities,
  integrationEditingType,
  destination,
  testingConnection,
  gitOpsModeEnabled
}) => {
  const { jira: jiraIntegrations, zendesk: zendeskIntegrations } = integrations;
  const [integrationDestination, setIntegrationDestination] = (0,react.useState)(
    integrationEditingType || destination || "jira"
  );
  (0,react.useEffect)(() => {
    setIntegrationDestination(destination || integrationEditingType || "jira");
  }, [destination, integrationEditingType]);
  const {
    formData,
    setField,
    getError,
    clearFieldError,
    validateField,
    handleSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: {
      url: integrationEditingUrl || "",
      username: integrationEditingUsername || "",
      email: integrationEditingEmail || "",
      apiToken: integrationEditingApiToken || "",
      projectKey: integrationEditingProjectKey || "",
      groupId: integrationEditingGroupId || 0,
      enableSoftwareVulnerabilities: integrationEnableSoftwareVulnerabilities || false
    },
    validate: (data) => validateForm(data, integrationDestination),
    isSubmitting: testingConnection,
    skipTrim: ["apiToken"]
  });
  (0,react.useEffect)(() => {
    if (integrationDestination === "jira") {
      clearFieldError("email");
      clearFieldError("groupId");
    } else {
      clearFieldError("username");
      clearFieldError("projectKey");
    }
  }, [integrationDestination, clearFieldError]);
  const createSubmitData = (data) => {
    let jiraIntegrationSubmitData = jiraIntegrations || [];
    let zendeskIntegrationSubmitData = zendeskIntegrations || [];
    if (integrationDestination === "jira") {
      if (integrationEditing && (integrationEditing.originalIndex || integrationEditing.originalIndex === 0) && integrationEditing.username) {
        jiraIntegrationSubmitData.splice(integrationEditing.originalIndex, 1, {
          url: data.url,
          username: data.username || "",
          api_token: data.apiToken,
          project_key: data.projectKey || ""
        });
      } else {
        jiraIntegrationSubmitData = [
          ...jiraIntegrationSubmitData,
          {
            url: data.url,
            username: data.username || "",
            api_token: data.apiToken,
            project_key: data.projectKey || ""
          }
        ];
      }
      return jiraIntegrationSubmitData;
    }
    if (integrationEditing && (integrationEditing.originalIndex || integrationEditing.originalIndex === 0) && integrationEditing.email) {
      zendeskIntegrationSubmitData.splice(integrationEditing.originalIndex, 1, {
        url: data.url,
        email: data.email || "",
        api_token: data.apiToken,
        group_id: Number(data.groupId) || 0
      });
    } else {
      zendeskIntegrationSubmitData = [
        ...zendeskIntegrationSubmitData,
        {
          url: data.url,
          email: data.email || "",
          api_token: data.apiToken,
          group_id: Number(data.groupId) || 0
        }
      ];
    }
    return zendeskIntegrationSubmitData;
  };
  const onValidSubmit = (data) => onSubmit(createSubmitData(data), integrationDestination);
  if (testingConnection) {
    return /* @__PURE__ */ react.createElement("div", { className: `${IntegrationForm_baseClass}__testing-connection` }, /* @__PURE__ */ react.createElement("strong", null, "Testing connection"), /* @__PURE__ */ react.createElement(Spinner/* default */.A, null));
  }
  return /* @__PURE__ */ react.createElement(
    "form",
    {
      className: `${IntegrationForm_baseClass}__form`,
      onSubmit: handleSubmit(onValidSubmit),
      autoComplete: "off",
      noValidate: true
    },
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        autofocus: true,
        name: "url",
        label: "URL",
        placeholder: integrationDestination === "jira" ? "https://example.atlassian.net" : "https://example.zendesk.com",
        value: formData.url,
        onChange: (value) => setField("url", value),
        onFocus: () => clearFieldError("url"),
        onBlur: () => validateField("url"),
        error: getError("url"),
        disabled: gitOpsModeEnabled || isSubmitting
      }
    ),
    integrationDestination === "jira" ? /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "username",
        label: "Username",
        placeholder: "name@example.com",
        value: formData.username || "",
        onChange: (value) => setField("username", value),
        onFocus: () => clearFieldError("username"),
        onBlur: () => validateField("username"),
        error: getError("username"),
        disabled: gitOpsModeEnabled || isSubmitting
      }
    ) : /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "email",
        label: "Email",
        placeholder: "name@example.com",
        type: "email",
        value: formData.email || "",
        onChange: (value) => setField("email", value),
        onFocus: () => clearFieldError("email"),
        onBlur: () => validateField("email"),
        error: getError("email"),
        disabled: gitOpsModeEnabled || isSubmitting
      }
    ),
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "apiToken",
        label: "API token",
        value: formData.apiToken,
        onChange: (value) => setField("apiToken", value),
        onFocus: () => clearFieldError("apiToken"),
        onBlur: () => validateField("apiToken"),
        error: getError("apiToken"),
        disabled: gitOpsModeEnabled || isSubmitting
      }
    ),
    integrationDestination === "jira" ? /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "projectKey",
        label: "Project key",
        placeholder: "JRAEXAMPLE",
        value: formData.projectKey || "",
        onChange: (value) => setField("projectKey", value),
        onFocus: () => clearFieldError("projectKey"),
        onBlur: () => validateField("projectKey"),
        error: getError("projectKey"),
        disabled: gitOpsModeEnabled || isSubmitting,
        tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "To find the Jira project key, head to your project in Jira. Your project key is located in the URL. For example, in \u201Cjira.example.com/projects/JRAEXAMPLE,\u201D \u201CJRAEXAMPLE\u201D is your project key.")
      }
    ) : /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "groupId",
        label: "Group ID",
        placeholder: "28134038",
        type: "number",
        value: formData.groupId || "",
        onChange: (value) => setField("groupId", value ? Number(value) : 0),
        onFocus: () => clearFieldError("groupId"),
        onBlur: () => validateField("groupId"),
        error: getError("groupId"),
        disabled: gitOpsModeEnabled || isSubmitting,
        tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "To find the Zendesk group ID, select", " ", /* @__PURE__ */ react.createElement("strong", null, "Admin > People > Groups"), ". Find the group and select it. The group ID will appear in the search field.")
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        tipOffset: 8,
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            disabled: disableChildren || isSubmitting,
            isLoading: isSubmitting
          },
          "Add"
        )
      }
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var IntegrationForm_IntegrationForm = (IntegrationForm);

;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/components/IntegrationForm/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/components/AddIntegrationModal/AddTicketDestinationModal.tsx








const AddTicketDestinationModal_baseClass = "add-integration-modal";
const destinationOptions = [
  { label: "Jira", value: "jira" },
  { label: "Zendesk", value: "zendesk" }
];
const AddTicketDestinationModal = ({
  onCancel,
  onSubmit,
  integrations,
  testingConnection
}) => {
  var _a;
  const gitOpsModeEnabled = (_a = (0,react.useContext)(app/* AppContext */.BR).config) == null ? void 0 : _a.gitops.gitops_mode_enabled;
  const [destination, setDestination] = (0,react.useState)("jira");
  const onDestinationChange = (selectedDestination) => {
    setDestination((selectedDestination == null ? void 0 : selectedDestination.value) || "jira");
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Add ticket destination",
      onExit: onCancel,
      className: AddTicketDestinationModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: "form" }, !testingConnection && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        name: "destination",
        label: "Ticket destination",
        onChange: onDestinationChange,
        value: destination,
        options: destinationOptions,
        className: `${AddTicketDestinationModal_baseClass}__destination-dropdown`,
        wrapperClassname: `${AddTicketDestinationModal_baseClass}__form-field ${AddTicketDestinationModal_baseClass}__form-field--platform`,
        isDisabled: gitOpsModeEnabled
      }
    ), /* @__PURE__ */ react.createElement(
      PageDescription/* default */.A,
      {
        variant: "modal",
        content: /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: "https://github.com/fleetdm/fleet/issues/new?assignees=&labels=idea&template=feature-request.md&title=",
            text: "Suggest a new destination",
            newTab: true
          }
        )
      }
    )), /* @__PURE__ */ react.createElement(
      IntegrationForm_IntegrationForm,
      {
        onCancel,
        onSubmit,
        integrations,
        destination,
        testingConnection,
        gitOpsModeEnabled
      }
    ))
  );
};
/* harmony default export */ var AddIntegrationModal_AddTicketDestinationModal = (AddTicketDestinationModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/components/AddIntegrationModal/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/components/DeleteIntegrationModal/DeleteIntegrationModal.tsx




const DeleteIntegrationModal_baseClass = "delete-integration-modal";
const DeleteIntegrationModal = ({
  url,
  projectKey,
  onSubmit,
  onCancel,
  isUpdatingIntegration
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete integration",
      onExit: onCancel,
      onEnter: onSubmit,
      className: DeleteIntegrationModal_baseClass
    },
    /* @__PURE__ */ react.createElement("form", { className: `${DeleteIntegrationModal_baseClass}__form` }, /* @__PURE__ */ react.createElement("p", null, "This action will delete the", " ", /* @__PURE__ */ react.createElement("span", { className: `${DeleteIntegrationModal_baseClass}__url` }, url, " - ", projectKey), " ", "integration."), /* @__PURE__ */ react.createElement("p", null, "The automations that use this integration will be turned off."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        onClick: onSubmit,
        variant: "alert",
        className: "delete-loading",
        isLoading: isUpdatingIntegration
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeleteIntegrationModal_DeleteIntegrationModal = (DeleteIntegrationModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/components/DeleteIntegrationModal/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
;// ./assets/images/icon-jira-24x24@2x.png
var icon_jira_24x24_2x_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATsSURBVHgB7ZnNbxtFGMbf+dg1SQhtQgABrVUacEOFUA9NTzlxM0ICIXKBiguHnrD5EJJ7YnNqyiW2L/wBHDiEG5JzRuLUIHHhUKEmihCmEErt4tSxd2d2+s6u7dhp1t611+rFj2TteHd29n1mfvvOeAww0UQTTfQkRWAcWv3NPPfGa2lOzauuhC93LfIHjEkUxqDZUzNpsN11SuADzqCQstQSjEmxGzDe/3WZM1o0EqYfNIG3gcGN85ZKwhgUH0KIDSgnDa4snr2wlJyamem5rABuSQGrceMU3wgIL/h1xljyqenpxy5jT10ZB06xGNDYAJVFLC5x0wRCAgZ2DDiNZgCxmf749rtg8h8opUkdNjOMfnegO3iPcdiMy8RIBmbnn0kTytYp50mKURFKQTrOwPvixGloA89m7y1zQoqM8yXOOeiPNiFsG5TrDm4gJpwiZ6GLq8qsnq+lXdsuCsdJSiFAYnqRjgCBZVc4sHDmDMyengvV3qjZKfII1F+3cYalHjbc4Mi83/udIzfgsFbDhCRDtTcqTpEMpG6oZcZ4kTLmYUN1wIxh0K2jNoRlu9mEOpoApcI1PAJOoRC6aCmzmYA0FVDEG5IuLnA0OhoZ2cJGI6RR8s5hGdmozr/04j5OaCkIqWFwCjUCkkOaSVjH9J7UljFl+r3Oj7DRve+PiHe+qohbEJJ8hLf/DCE1DE4DDWhssGu8SeroSQQzDvOw0UfKe4LHMi2YYObvfjPzCxHweRQTUXEKRKgHG93zJwnHvI2Tj5RTFcIu7G+8YHVXW7TUq+hzA5/2DoRUWJwCR6AHmyB5OLE2TlVKecFWZv54tR2L3MGkFGkkwuIUaMAlYEE3Nn2e5ONECnxK5Kv5uepJ1bSJYXBSHD55zlJPB1UJNEBcmIIIotzEUT/dt04dlxkKh0KFTa++zNlDfCuCntvnxhx+bkNIYUyfmRyy5yx1oouzX1UXibI3MM2uuGGWGr5KhMK3uzfJg6AKPPCChJJg3stU6PsetIR1dODahNZa97XnP/1n0XFEnhFY0Q3q/tfZQy/+ApfeCraFAdndXP+XeOBElvpaXUEON8OY6JJlCyjsWaR66trOZUrNDUyxK3qpfTRrm1hm3pxyzISNny3BITMoeC02qMJ/P62VF96y9tDqJfy6ACGEOF3C2EBcuHbgNJ08hreiz+tAvVBb8fpl4pno0o8I9vU718lOmGfxUJWGxGl6OvFh5eBBSoKCtgHPYKssu8q+ORIKm55nQQQNg9O9v8pQ/7/m4dJBqL38aOHEDcPG61tugmeiBK8VaTX6+xq5hY6zECE7zc7Ne/OEbC3y2kdX+B9vMShlSTTcXNTgtUIh1HNDRJyMRAISuEtRq1Q8tjpj3n5xldy2mcrevTkz1A+aofeFouBUq9yH/XIZhxtfWKOz6POwISbLVIovD71XNPRv4ig4cUyZVL+0so0OzsiuLMmGzI0SvNc2jKCwOLUnrM7PTJyk8ES28d0rI+/SxbK1OAinRr0Of+/tgt1o4paF2gJOMrB5OZYtxlh25gbhpLdaXOGtf0rIUi6u4LVGQqinoQCc9MqzWX+I6dLeBkaycQavFfsfHMdxwt63//2zvFWr3c/EHbxW7P8PHMfJcexS8/AgN47gtWJDqKfRFk6uFFeF63xhf//m2P5immiiiSZ6snoEMQ0qN64w86sAAAAASUVORK5CYII=";
;// ./assets/images/icon-zendesk-32x24@2x.png
var icon_zendesk_32x24_2x_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHpSURBVHgBpZXRTcMwEIZ/O84bD2xARggSBYSUKp0AmAA6ATBBywSwATABMAERFFRRJDqCR+C9SczFKS1pnTZ2v5c48Z3vP/e3y9CKFJxQCUaDjh7uRS9giGELU9ecHhJOMIlNUNTA56DPkatnuMBYAnckRNotBhy+uKXnD+yQ+Hx9gBsS3qSD4VCWAoaJhMqvYUV2Cmcod1q8FFDw9X5Lv8l6EUrvVBejjzFcUPnVYi6fjb4GfVK3q81hTKbvYrKL0du9fm8dhbCBHK8bXUBU3kp1HRzGAdI0QM4CcCWxJcZIkrlPwqI4v9GxTVB4oiPbN00JY0Lhi7rjGZI4P3ukVc3zy1ADXrduksOGMN6m4i80ChpmlI7/v3sbCRDZnUVxLDp+MwF77R5dtyeN4w2OdxfQal+Qi/toSo3jTYi1EdrxqtFimhWON7F6B7TjvUc0Z6XjTYgVxR0d/2b1v1IvYFPHFw2INJxdZmkqMV4+EWYB2vGqueNZNnd8eVGR+CymCcDTAYDvk5mjhL5XTseyB2wdX/C34H77jHbum0ZxTSR9974prmcWYOv4xVyl7qnZ7bWxiho8iC6rAuwdX8U2N0cP4WHA58WtHF+lFZ075NIpE5elAN/W8UvEcIIdc+145wWmKOzAjeAXEDLErwp1o2kAAAAASUVORK5CYII=";
;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/IntegrationsTableConfig.tsx

var IntegrationsTableConfig_defProp = Object.defineProperty;
var IntegrationsTableConfig_defProps = Object.defineProperties;
var IntegrationsTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var IntegrationsTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var IntegrationsTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var IntegrationsTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var IntegrationsTableConfig_defNormalProp = (obj, key, value) => key in obj ? IntegrationsTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var IntegrationsTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (IntegrationsTableConfig_hasOwnProp.call(b, prop))
      IntegrationsTableConfig_defNormalProp(a, prop, b[prop]);
  if (IntegrationsTableConfig_getOwnPropSymbols)
    for (var prop of IntegrationsTableConfig_getOwnPropSymbols(b)) {
      if (IntegrationsTableConfig_propIsEnum.call(b, prop))
        IntegrationsTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var IntegrationsTableConfig_spreadProps = (a, b) => IntegrationsTableConfig_defProps(a, IntegrationsTableConfig_getOwnPropDescs(b));






const generateTableHeaders = (actionSelectHandler) => {
  return [
    {
      title: "",
      Header: "",
      disableSortBy: true,
      sortType: "caseInsensitive",
      accessor: "type",
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement("div", { className: "logo-cell" }, /* @__PURE__ */ react.createElement(
          "img",
          {
            src: cellProps.cell.value === "jira" ? icon_jira_24x24_2x_namespaceObject : icon_zendesk_32x24_2x_namespaceObject,
            alt: "integration-icon",
            className: cellProps.cell.value === "jira" ? "jira-icon" : "zendesk-icon"
          }
        ));
      }
    },
    {
      title: "Name",
      Header: "Name",
      disableSortBy: true,
      sortType: "caseInsensitive",
      accessor: "name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value, className: "w400" })
    },
    {
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: "row-hover-button",
          variant: "subdued",
          size: "small",
          ariaLabel: "Delete integration",
          onClick: () => actionSelectHandler("delete", cellProps.row.original)
        },
        /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "trash" })
      )
    }
  ];
};
const generateActionDropdownOptions = () => {
  return [
    {
      label: "Delete",
      disabled: false,
      value: "delete"
    }
  ];
};
const enhanceJiraData = (jiraIntegrations) => {
  return jiraIntegrations.map((integration, index) => {
    return {
      url: integration.url,
      username: integration.username,
      apiToken: integration.api_token,
      projectKey: integration.project_key,
      enableSoftwareVulnerabilities: integration.enable_software_vulnerabilities,
      name: `${integration.url} - ${integration.project_key}`,
      actions: generateActionDropdownOptions(),
      originalIndex: index,
      type: "jira"
    };
  });
};
const enhanceZendeskData = (zendeskIntegrations) => {
  return zendeskIntegrations.map((integration, index) => {
    return {
      url: integration.url,
      email: integration.email,
      apiToken: integration.api_token,
      groupId: integration.group_id,
      enableSoftwareVulnerabilities: integration.enable_software_vulnerabilities,
      name: `${integration.url} - ${integration.group_id}`,
      actions: generateActionDropdownOptions(),
      originalIndex: index,
      type: "zendesk"
    };
  });
};
const combineDataSets = (jiraIntegrations, zendeskIntegrations) => {
  const combine = [
    ...enhanceJiraData(jiraIntegrations),
    ...enhanceZendeskData(zendeskIntegrations)
  ];
  return combine.map((integration, index) => {
    return IntegrationsTableConfig_spreadProps(IntegrationsTableConfig_spreadValues({}, integration), { tableIndex: index });
  });
};


;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/TicketDestinations.tsx

















const TicketDestinations_baseClass = "integrations-management";
const VALIDATION_FAILED_ERROR = "There was a problem with the information you provided.";
const BAD_REQUEST_ERROR = "Invalid login credentials or URL. Please correct and try again.";
const UNKNOWN_ERROR = "We experienced an error when attempting to connect. Please try again later.";
const TicketDestinations = () => {
  var _a;
  const [
    showAddTicketDestinationModal,
    setShowAddTicketDestinationModal
  ] = (0,react.useState)(false);
  const [showDeleteIntegrationModal, setShowDeleteIntegrationModal] = (0,react.useState)(
    false
  );
  const [
    integrationEditing,
    setIntegrationEditing
  ] = (0,react.useState)();
  const [isUpdatingIntegration, setIsUpdatingIntegration] = (0,react.useState)(false);
  const [jiraIntegrations, setJiraIntegrations] = (0,react.useState)();
  const [zendeskIntegrations, setZendeskIntegrations] = (0,react.useState)();
  const [testingConnection, setTestingConnection] = (0,react.useState)(false);
  const {
    data: integrations,
    isLoading: isLoadingIntegrations,
    error: loadingIntegrationsError,
    refetch: refetchIntegrations
  } = (0,es.useQuery)(
    ["integrations"],
    () => entities_config/* default */.A.loadAll(),
    {
      select: (data) => {
        return data.integrations;
      },
      onSuccess: (data) => {
        if (data) {
          setJiraIntegrations(data.jira);
          setZendeskIntegrations(data.zendesk);
        }
      }
    }
  );
  const toggleAddTicketDestinationModal = (0,react.useCallback)(() => {
    setShowAddTicketDestinationModal(!showAddTicketDestinationModal);
  }, [showAddTicketDestinationModal, setShowAddTicketDestinationModal]);
  const toggleDeleteIntegrationModal = (0,react.useCallback)(
    (integration) => {
      setShowDeleteIntegrationModal(!showDeleteIntegrationModal);
      integration ? setIntegrationEditing(integration) : setIntegrationEditing(void 0);
    },
    [
      showDeleteIntegrationModal,
      setShowDeleteIntegrationModal,
      setIntegrationEditing
    ]
  );
  const onAddSubmit = (0,react.useCallback)(
    (integrationSubmitData, integrationDestination) => {
      const destination = () => {
        if (integrationDestination === "jira") {
          return {
            jira: integrationSubmitData,
            zendesk: zendeskIntegrations
          };
        }
        return {
          zendesk: integrationSubmitData,
          jira: jiraIntegrations
        };
      };
      setTestingConnection(true);
      return entities_config/* default */.A.update({ integrations: destination() }).then(() => {
        ToastNotification/* notify */.me.success(
          /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully added", " ", /* @__PURE__ */ react.createElement("b", null, integrationSubmitData[integrationSubmitData.length - 1].url, " -", " ", integrationSubmitData[integrationSubmitData.length - 1].project_key || integrationSubmitData[integrationSubmitData.length - 1].group_id))
        );
        toggleAddTicketDestinationModal();
        refetchIntegrations();
      }).catch((addError) => {
        var _a2, _b, _c, _d;
        if ((_a2 = addError.data) == null ? void 0 : _a2.message.includes("Validation Failed")) {
          if ((_b = addError.data) == null ? void 0 : _b.errors[0].reason.includes(
            "duplicate Jira integration"
          )) {
            ToastNotification/* notify */.me.error(
              /* @__PURE__ */ react.createElement(react.Fragment, null, "Could not add", " ", /* @__PURE__ */ react.createElement("b", null, integrationSubmitData[integrationSubmitData.length - 1].url, " ", "-", " ", integrationSubmitData[integrationSubmitData.length - 1].project_key || integrationSubmitData[integrationSubmitData.length - 1].group_id), ". This integration already exists"),
              { response: addError }
            );
          } else {
            ToastNotification/* notify */.me.error(VALIDATION_FAILED_ERROR, { response: addError });
          }
        } else if ((_c = addError.data) == null ? void 0 : _c.message.includes("Bad request")) {
          ToastNotification/* notify */.me.error(BAD_REQUEST_ERROR, { response: addError });
        } else if ((_d = addError.data) == null ? void 0 : _d.message.includes("Unknown Error")) {
          ToastNotification/* notify */.me.error(UNKNOWN_ERROR, { response: addError });
        } else {
          ToastNotification/* notify */.me.error(
            /* @__PURE__ */ react.createElement(react.Fragment, null, "Could not add", " ", /* @__PURE__ */ react.createElement("b", null, integrationSubmitData[integrationSubmitData.length - 1].url), ". Please try again."),
            { response: addError }
          );
        }
      }).finally(() => {
        setTestingConnection(false);
      });
    },
    [toggleAddTicketDestinationModal]
  );
  const onDeleteSubmit = (0,react.useCallback)(() => {
    if (integrationEditing) {
      const deleteIntegrationDestination = () => {
        if (integrationEditing.type === "jira") {
          integrations == null ? void 0 : integrations.jira.splice(integrationEditing.originalIndex, 1);
          return entities_config/* default */.A.update({
            integrations: {
              jira: integrations == null ? void 0 : integrations.jira,
              zendesk: zendeskIntegrations
            }
          });
        }
        integrations == null ? void 0 : integrations.zendesk.splice(integrationEditing.originalIndex, 1);
        return entities_config/* default */.A.update({
          integrations: {
            zendesk: integrations == null ? void 0 : integrations.zendesk,
            jira: jiraIntegrations
          }
        });
      };
      setIsUpdatingIntegration(true);
      deleteIntegrationDestination().then(() => {
        var _a2;
        ToastNotification/* notify */.me.success(
          /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully deleted", " ", /* @__PURE__ */ react.createElement("b", null, integrationEditing.url, " -", " ", integrationEditing.projectKey || ((_a2 = integrationEditing.groupId) == null ? void 0 : _a2.toString())))
        );
        refetchIntegrations();
      }).catch((deleteError) => {
        var _a2;
        ToastNotification/* notify */.me.error(
          /* @__PURE__ */ react.createElement(react.Fragment, null, "Could not delete", " ", /* @__PURE__ */ react.createElement("b", null, integrationEditing.url, " -", " ", integrationEditing.projectKey || ((_a2 = integrationEditing.groupId) == null ? void 0 : _a2.toString())), ". Please try again."),
          { response: deleteError }
        );
      }).finally(() => {
        setIsUpdatingIntegration(false);
        toggleDeleteIntegrationModal();
      });
    }
  }, [integrationEditing, toggleDeleteIntegrationModal]);
  const onActionSelection = (0,react.useCallback)(
    (action, integration) => {
      switch (action) {
        case "delete":
          toggleDeleteIntegrationModal(integration);
          break;
        default:
      }
    },
    [toggleDeleteIntegrationModal]
  );
  const tableHeaders = (0,react.useMemo)(() => generateTableHeaders(onActionSelection), [
    onActionSelection
  ]);
  const tableData = (0,react.useMemo)(
    () => combineDataSets(jiraIntegrations || [], zendeskIntegrations || []),
    [jiraIntegrations, zendeskIntegrations]
  );
  const renderTable = () => {
    if (loadingIntegrationsError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (isLoadingIntegrations) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        columnConfigs: tableHeaders,
        data: tableData,
        defaultSortHeader: "name",
        defaultSortDirection: "asc",
        isLoading: false,
        actionButton: {
          name: "add integration",
          buttonText: "Add integration",
          variant: "default",
          onClick: toggleAddTicketDestinationModal,
          hideButton: !(tableData == null ? void 0 : tableData.length)
        },
        resultsTitle: "integrations",
        emptyComponent: () => /* @__PURE__ */ react.createElement(
          EmptyState/* default */.A,
          {
            header: "No ticket destinations",
            info: "Create tickets whenever Mesh detects vulnerabilities or failing policies.",
            primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: toggleAddTicketDestinationModal }, "Add ticket destination")
          }
        ),
        showMarkAllPages: false,
        isAllPagesSelected: false,
        disablePagination: true
      }
    );
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Ticketing", className: TicketDestinations_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Add or edit integrations to create tickets when Mesh detects new vulnerabilities.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/policy-automations`,
          text: "Learn more",
          newTab: true
        }
      )),
      variant: "right-panel"
    }
  ), renderTable(), showAddTicketDestinationModal && /* @__PURE__ */ react.createElement(
    AddIntegrationModal_AddTicketDestinationModal,
    {
      onCancel: toggleAddTicketDestinationModal,
      onSubmit: onAddSubmit,
      integrations: integrations || { jira: [], zendesk: [] },
      testingConnection
    }
  ), showDeleteIntegrationModal && /* @__PURE__ */ react.createElement(
    DeleteIntegrationModal_DeleteIntegrationModal,
    {
      onCancel: toggleDeleteIntegrationModal,
      onSubmit: onDeleteSubmit,
      url: (integrationEditing == null ? void 0 : integrationEditing.url) || "",
      projectKey: (integrationEditing == null ? void 0 : integrationEditing.projectKey) || ((_a = integrationEditing == null ? void 0 : integrationEditing.groupId) == null ? void 0 : _a.toString()) || "",
      isUpdatingIntegration
    }
  ));
};
/* harmony default export */ var Integrations_TicketDestinations = (TicketDestinations);

;// ./frontend/pages/admin/IntegrationsPage/cards/Integrations/index.ts



// EXTERNAL MODULE: ./frontend/services/entities/mdm.ts
var mdm = __webpack_require__(31332);
// EXTERNAL MODULE: ./frontend/services/entities/mdm_apple.ts
var mdm_apple = __webpack_require__(82635);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AndroidZeroTouchSection/AndroidZeroTouchSection.tsx








const AndroidZeroTouchSection_baseClass = "android-zero-touch-section";
const AndroidZeroTouchSection = ({
  router,
  isPremiumTier
}) => {
  const { isAndroidMdmEnabledAndConfigured } = (0,react.useContext)(app/* AppContext */.BR);
  const navigateToSetup = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM_ANDROID_ZERO_TOUCH);
  };
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (!isAndroidMdmEnabledAndConfigured) {
      return /* @__PURE__ */ react.createElement(SectionCard_SectionCard, { header: "Android enrollment" }, "To enable end users to enroll to Mesh via Android zero-touch, first turn on Android MDM.");
    }
    return /* @__PURE__ */ react.createElement(
      SectionCard_SectionCard,
      {
        cta: /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            onClick: navigateToSetup,
            variant: "subdued",
            icon: "chevron-right",
            iconPosition: "right"
          },
          "Setup"
        )
      },
      "To automatically enroll company-owned Android hosts when they're first unboxed, connect Mesh to Android zero-touch."
    );
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Android zero-touch", className: AndroidZeroTouchSection_baseClass }, renderContent());
};
/* harmony default export */ var AndroidZeroTouchSection_AndroidZeroTouchSection = (AndroidZeroTouchSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AndroidZeroTouchSection/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AppleBusinessManagerSection/AppleAutomaticEnrollmentCard/AppleAutomaticEnrollmentCard.tsx




const AppleAutomaticEnrollmentCard = ({
  isAppleMdmOn,
  viewDetails,
  configured,
  onlyAllowAppleBusinessEnrollment
}) => {
  const AppleMdmDisabledCard = /* @__PURE__ */ react.createElement(SectionCard_SectionCard, { header: "Automatic enrollment for Apple (macOS, iOS, iPadOS) hosts." }, "To enable automatic enrollment for macOS, iOS, and iPadOS hosts, first turn on Apple MDM.");
  const AbmConfiguredCard = /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      iconName: "success",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: viewDetails, variant: "subdued", icon: "pencil" }, "Edit")
    },
    onlyAllowAppleBusinessEnrollment ? "Company-owned (ADE) enrollment for Apple (macOS, iOS, iPadOS) is enabled." : "Company-owned (ADE) and personal (BYOD) enrollment for Apple (macOS, iOS, iPadOS) is enabled."
  );
  const AbmNotConfiguredCard = /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      header: onlyAllowAppleBusinessEnrollment ? "Apple (macOS, iOS, iPadOS) company-owned hosts enrollment" : "Apple (macOS, iOS, iPadOS) company-owned and personal hosts enrollment",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { className: "add-abm-button", onClick: viewDetails }, "Add AB")
    },
    onlyAllowAppleBusinessEnrollment ? "Company-owned Apple hosts will enroll with Automated Device Enrollment (ADE) when they're first unboxed." : "Company-owned Apple hosts will enroll with Automated Device Enrollment (ADE) when they&apos;re first unboxed. Personal (BYOD) hosts will enroll when end users sign in with Managed Apple Account."
  );
  if (!isAppleMdmOn) {
    return AppleMdmDisabledCard;
  }
  return configured ? AbmConfiguredCard : AbmNotConfiguredCard;
};
/* harmony default export */ var AppleAutomaticEnrollmentCard_AppleAutomaticEnrollmentCard = (AppleAutomaticEnrollmentCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AppleBusinessManagerSection/AppleAutomaticEnrollmentCard/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AppleBusinessManagerSection/VppCard/VppCard.tsx




const VppCard_baseClass = "vpp-card";
const VppCard = ({ isAppleMdmOn, isVppOn, viewDetails }) => {
  const AppleMdmDisabledCard = /* @__PURE__ */ react.createElement(SectionCard_SectionCard, { header: "Volume Purchasing Program (VPP)" }, "To enable Volume Purchasing Program (VPP), first turn on Apple (macOS, iOS, iPadOS) MDM.");
  const VppOnCard = /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      iconName: "success",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: viewDetails, variant: "subdued", icon: "pencil" }, "Edit")
    },
    "Volume Purchasing Program (VPP) is enabled."
  );
  const VppOffCard = /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      header: "Volume Purchasing Program (VPP)",
      cta: /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${VppCard_baseClass}__add-vpp-button`,
          onClick: viewDetails
        },
        "Add VPP"
      )
    },
    "Add a VPP connection to install Apple App Store apps purchased through Apple Business."
  );
  if (!isAppleMdmOn) {
    return AppleMdmDisabledCard;
  }
  return isVppOn ? VppOnCard : VppOffCard;
};
/* harmony default export */ var VppCard_VppCard = (VppCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AppleBusinessManagerSection/AppleBusinessManagerSection.tsx








const AppleBusinessManagerSection_baseClass = "apple-business-manager-section";
const AppleBusinessManagerSection = ({
  router,
  isPremiumTier,
  isVppOn
}) => {
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const navigateToAppleAutomaticEnrollment = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_APPLE_BUSINESS_MANAGER);
  };
  const navigateToVppSetup = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_VPP_SETUP);
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Apple Business (AB)", className: AppleBusinessManagerSection_baseClass }, !isPremiumTier ? /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null) : /* @__PURE__ */ react.createElement("div", { className: `${AppleBusinessManagerSection_baseClass}__content` }, /* @__PURE__ */ react.createElement(
    AppleAutomaticEnrollmentCard_AppleAutomaticEnrollmentCard,
    {
      viewDetails: navigateToAppleAutomaticEnrollment,
      isAppleMdmOn: !!(config == null ? void 0 : config.mdm.enabled_and_configured),
      configured: !!(config == null ? void 0 : config.mdm.apple_bm_enabled_and_configured),
      onlyAllowAppleBusinessEnrollment: !!(config == null ? void 0 : config.mdm.only_allow_apple_business_enrollment)
    }
  ), /* @__PURE__ */ react.createElement(
    VppCard_VppCard,
    {
      viewDetails: navigateToVppSetup,
      isAppleMdmOn: !!(config == null ? void 0 : config.mdm.enabled_and_configured),
      isVppOn
    }
  )));
};
/* harmony default export */ var AppleBusinessManagerSection_AppleBusinessManagerSection = (AppleBusinessManagerSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/AppleBusinessManagerSection/index.ts



// EXTERNAL MODULE: ./node_modules/validator/lib/isURL.js
var isURL = __webpack_require__(77844);
var isURL_default = /*#__PURE__*/__webpack_require__.n(isURL);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/Button.tsx
var Button_Button = __webpack_require__(84547);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/Radio.tsx
var Radio = __webpack_require__(99987);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/Slider.tsx
var Slider = __webpack_require__(33427);
;// ./assets/videos/mdm-migration-video.mp4
var mdm_migration_video_namespaceObject = __webpack_require__.p + "mdm-migration-video@1895a73b900b9b0aa0dd.mp4";
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/ExampleWebhookUrlPayloadModal/ExampleWebhookUrlPayloadModal.tsx





const ExampleWebhookUrlPayloadModal_baseClass = "example-webhook-url-payload-modal";
const EXAMPLE_PAYLOAD = {
  timestamp: "0000-00-00T00:00:00Z",
  host: {
    id: 1,
    uuid: "1234-5678-9101-1121",
    hardware_serial: "V2RG6Y7VYL"
  }
};
const ExampleWebhookUrlPayloadModal = ({
  onCancel
}) => {
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Example payload", onExit: onCancel, className: ExampleWebhookUrlPayloadModal_baseClass }, /* @__PURE__ */ react.createElement("p", null, "An example request sent to your configured ", /* @__PURE__ */ react.createElement("b", null, "Webhook URL"), "."), /* @__PURE__ */ react.createElement("pre", { className: `${ExampleWebhookUrlPayloadModal_baseClass}__endpoint-preview` }, "POST https://organization.com/send-request-here"), /* @__PURE__ */ react.createElement("div", { className: `${ExampleWebhookUrlPayloadModal_baseClass}__webhook-preview` }, /* @__PURE__ */ react.createElement(
    "pre",
    {
      dangerouslySetInnerHTML: {
        __html: (0,helpers/* syntaxHighlight */._j)(EXAMPLE_PAYLOAD)
      }
    }
  )), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close")));
};
/* harmony default export */ var ExampleWebhookUrlPayloadModal_ExampleWebhookUrlPayloadModal = (ExampleWebhookUrlPayloadModal);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EndUserMigrationSection/EndUserMigrationSection.tsx

var EndUserMigrationSection_defProp = Object.defineProperty;
var EndUserMigrationSection_defProps = Object.defineProperties;
var EndUserMigrationSection_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EndUserMigrationSection_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EndUserMigrationSection_hasOwnProp = Object.prototype.hasOwnProperty;
var EndUserMigrationSection_propIsEnum = Object.prototype.propertyIsEnumerable;
var EndUserMigrationSection_defNormalProp = (obj, key, value) => key in obj ? EndUserMigrationSection_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EndUserMigrationSection_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EndUserMigrationSection_hasOwnProp.call(b, prop))
      EndUserMigrationSection_defNormalProp(a, prop, b[prop]);
  if (EndUserMigrationSection_getOwnPropSymbols)
    for (var prop of EndUserMigrationSection_getOwnPropSymbols(b)) {
      if (EndUserMigrationSection_propIsEnum.call(b, prop))
        EndUserMigrationSection_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EndUserMigrationSection_spreadProps = (a, b) => EndUserMigrationSection_defProps(a, EndUserMigrationSection_getOwnPropDescs(b));
var EndUserMigrationSection_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




















const EndUserMigrationSection_baseClass = "end-user-migration-section";
const VOLUNTARY_MODE_DESCRIPTION = "The end user sees the above window when they select Migrate to Mesh in the Mesh Desktop menu. If they\u2019re unenrolled from your old MDM, the window appears every 15-20 minutes.";
const FORCED_MODE_DESCRIPTION = "The end user sees the above window every 15-20 minutes.";
const validateWebhookUrl = (val) => {
  return isURL_default()(val, {
    protocols: ["http", "https"],
    require_protocol: true,
    require_valid_protocol: true
  });
};
const EndUserMigrationSection = ({ router }) => {
  const { config, isPremiumTier, setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  const [formData, setFormData] = (0,react.useState)({
    isEnabled: (config == null ? void 0 : config.mdm.macos_migration.enable) || false,
    mode: (config == null ? void 0 : config.mdm.macos_migration.mode) || "voluntary",
    webhookUrl: (config == null ? void 0 : config.mdm.macos_migration.webhook_url) || ""
  });
  const [showExamplePayload, setShowExamplePayload] = (0,react.useState)(false);
  const [isValidWebhookUrl, setIsValidWebhookUrl] = (0,react.useState)(true);
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const toggleExamplePayloadModal = () => {
    setShowExamplePayload(!showExamplePayload);
  };
  const toggleMigrationEnabled = () => {
    setFormData((prevFormData) => EndUserMigrationSection_spreadProps(EndUserMigrationSection_spreadValues({}, prevFormData), {
      isEnabled: !prevFormData.isEnabled
    }));
  };
  const onClickConnect = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM);
  };
  const onChangeMode = (mode) => {
    const newMode = mode;
    setFormData((prevFormData) => EndUserMigrationSection_spreadProps(EndUserMigrationSection_spreadValues({}, prevFormData), { mode: newMode }));
  };
  const onChangeWebhookUrl = (webhookUrl) => {
    setFormData((prevFormData) => EndUserMigrationSection_spreadProps(EndUserMigrationSection_spreadValues({}, prevFormData), { webhookUrl }));
    setIsValidWebhookUrl(validateWebhookUrl(webhookUrl));
  };
  const onSubmit = (e) => EndUserMigrationSection_async(null, null, function* () {
    e.preventDefault();
    if (formData.isEnabled && !validateWebhookUrl(formData.webhookUrl)) {
      setIsValidWebhookUrl(false);
      return;
    }
    setIsUpdating(true);
    try {
      const updatedConfig = yield entities_config/* default */.A.update({
        mdm: {
          macos_migration: {
            enable: formData.isEnabled,
            mode: formData.mode,
            webhook_url: formData.webhookUrl
          }
        }
      });
      ToastNotification/* notify */.me.success("Successfully updated end user migration.");
      setConfig(updatedConfig);
    } catch (err) {
      if ((0,interfaces_errors/* getErrorReason */.F3)(err, {
        nameEquals: "macos_migration.webhook_url"
      })) {
        setIsValidWebhookUrl(false);
        return;
      }
      ToastNotification/* notify */.me.error("Could not update. Please try again.", { response: err });
    } finally {
      setIsUpdating(false);
    }
  });
  const isGitOpsModeEnabled = config == null ? void 0 : config.gitops.gitops_mode_enabled;
  const formClasses = classnames_default()(`${EndUserMigrationSection_baseClass}__end-user-migration-form`, {
    disabled: !formData.isEnabled || isGitOpsModeEnabled
  });
  if (!isPremiumTier) {
    return /* @__PURE__ */ react.createElement("div", { className: EndUserMigrationSection_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "End user migration workflow" }), /* @__PURE__ */ react.createElement(PremiumFeatureMessage_PremiumFeatureMessage/* default */.A, null));
  }
  if (!(config == null ? void 0 : config.mdm.apple_bm_enabled_and_configured)) {
    return /* @__PURE__ */ react.createElement("div", { className: EndUserMigrationSection_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "End user migration workflow" }), /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        variant: "list",
        className: `${EndUserMigrationSection_baseClass}__abm-connect-message`,
        header: "Migration workflow for macOS hosts",
        info: "Connect to Apple Business to get started.",
        primaryButton: /* @__PURE__ */ react.createElement(Button_Button/* default */.A, { onClick: onClickConnect }, "Connect")
      }
    ));
  }
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { className: EndUserMigrationSection_baseClass, title: "End user migration workflow" }, /* @__PURE__ */ react.createElement("form", null, /* @__PURE__ */ react.createElement("p", null, "Control the end user migration workflow for macOS hosts.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/end-user-migration-workflow",
      text: "Learn more",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement(
    "video",
    {
      src: mdm_migration_video_namespaceObject,
      className: `${EndUserMigrationSection_baseClass}__preview-video`,
      controls: true,
      autoPlay: true,
      loop: true,
      muted: true
    }
  ), /* @__PURE__ */ react.createElement(
    Slider/* default */.A,
    {
      value: formData.isEnabled,
      onChange: toggleMigrationEnabled,
      activeText: "Enabled",
      inactiveText: "Disabled",
      disabled: isGitOpsModeEnabled
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `form ${formClasses}` }, /* @__PURE__ */ react.createElement("div", { className: `form-field ${EndUserMigrationSection_baseClass}__mode-field` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Mode"), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      disabled: !formData.isEnabled || isGitOpsModeEnabled,
      checked: formData.mode === "voluntary",
      value: "voluntary",
      id: "voluntary",
      label: "Voluntary",
      onChange: onChangeMode,
      className: `${EndUserMigrationSection_baseClass}__voluntary-radio`,
      name: "mode-type"
    }
  ), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      disabled: !formData.isEnabled || isGitOpsModeEnabled,
      checked: formData.mode === "forced",
      value: "forced",
      id: "forced",
      label: "Forced",
      onChange: onChangeMode,
      className: `${EndUserMigrationSection_baseClass}__forced-radio`,
      name: "mode-type"
    }
  )), /* @__PURE__ */ react.createElement("p", null, formData.mode === "voluntary" ? VOLUNTARY_MODE_DESCRIPTION : FORCED_MODE_DESCRIPTION), /* @__PURE__ */ react.createElement("p", null, "To edit the organization name, avatar (logo), and contact link, head to the ", /* @__PURE__ */ react.createElement("b", null, "Organization settings"), " > ", /* @__PURE__ */ react.createElement("b", null, "Organization info"), " ", "page."), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      readOnly: !formData.isEnabled || isGitOpsModeEnabled,
      name: "webhook_url",
      label: "Webhook URL",
      value: formData.webhookUrl,
      onChange: onChangeWebhookUrl,
      error: !isValidWebhookUrl ? "Must be a valid URL." : void 0,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "When the end users clicks ", /* @__PURE__ */ react.createElement("b", null, "Start"), ", a JSON payload is sent to this URL if the end user is enrolled to your old MDM. Receive this webhook using your automation tool (ex. Tines) to unenroll your end users from your old MDM solution.")
    }
  )), /* @__PURE__ */ react.createElement(
    Button_Button/* default */.A,
    {
      className: `${EndUserMigrationSection_baseClass}__preview-button`,
      variant: "secondary",
      onClick: toggleExamplePayloadModal
    },
    "Example payload"
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button_Button/* default */.A,
        {
          onClick: onSubmit,
          disabled: disableChildren || isUpdating,
          isLoading: isUpdating
        },
        "Save"
      )
    }
  )), showExamplePayload && /* @__PURE__ */ react.createElement(ExampleWebhookUrlPayloadModal_ExampleWebhookUrlPayloadModal, { onCancel: toggleExamplePayloadModal }));
};
/* harmony default export */ var EndUserMigrationSection_EndUserMigrationSection = (EndUserMigrationSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EndUserMigrationSection/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EulaSection/components/DeleteEulaModal/DeleteEulaModal.tsx




const DeleteEulaModal_baseClass = "delete-eula-modal";
const DeleteEulaModal = ({ onDelete, onCancel }) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteEulaModal_baseClass,
      title: "Delete EULA",
      onExit: onCancel,
      onEnter: () => onDelete()
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "End users won\u2019t be required to agree to this EULA on macOS hosts that automatically enroll."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: () => onDelete(), variant: "alert" }, "Delete"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeleteEulaModal_DeleteEulaModal = (DeleteEulaModal);

// EXTERNAL MODULE: ./frontend/components/FileUploader/FileUploader.tsx
var FileUploader_FileUploader = __webpack_require__(49109);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EulaSection/components/EulaUploader/helpers.ts


const UPLOAD_ERROR_MESSAGES = {
  wrongType: {
    condition: (reason) => reason.includes("invalid file type"),
    message: "Couldn\u2019t upload EULA. The file must be a PDF (.pdf)."
  },
  default: {
    condition: lodash.noop,
    message: "Couldn\u2019t upload EULA. Please try again."
  }
};
const EulaUploader_helpers_getErrorMessage = (err) => {
  const apiReason = err.data.errors[0].reason;
  const error = Object.values(UPLOAD_ERROR_MESSAGES).find(
    (errType) => errType.condition(apiReason)
  );
  if (!error) {
    return UPLOAD_ERROR_MESSAGES.default.message;
  }
  return error.message;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EulaSection/components/EulaUploader/EulaUploader.tsx

var EulaUploader_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






const EulaUploader_baseClass = "eula-uploader";
const EulaUploader = ({ onUpload }) => {
  const [showLoading, setShowLoading] = (0,react.useState)(false);
  const onUploadFile = (files) => EulaUploader_async(null, null, function* () {
    setShowLoading(true);
    if (!files || files.length === 0) {
      setShowLoading(false);
      return;
    }
    const file = files[0];
    if (!file.name.includes(".pdf")) {
      ToastNotification/* notify */.me.error(UPLOAD_ERROR_MESSAGES.wrongType.message);
      setShowLoading(false);
      return;
    }
    try {
      yield mdm/* default */.A.uploadEULA(file);
      ToastNotification/* notify */.me.success("Successfully updated end user authentication.");
      onUpload();
    } catch (e) {
      const error = e;
      const errMessage = EulaUploader_helpers_getErrorMessage(error);
      ToastNotification/* notify */.me.error(errMessage, { response: e });
    } finally {
      setShowLoading(false);
    }
  });
  return /* @__PURE__ */ react.createElement("div", { className: EulaUploader_baseClass }, /* @__PURE__ */ react.createElement("p", null, "Require end users to agree to a EULA when they first set up their new macOS hosts.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/end-user-license-agreement",
      text: "Learn more",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement(
    FileUploader_FileUploader/* default */.A,
    {
      graphicName: "file-pdf",
      message: "PDF (.pdf)",
      onFileUpload: onUploadFile,
      accept: ".pdf",
      isLoading: showLoading,
      gitopsCompatible: true
    }
  ));
};
/* harmony default export */ var EulaUploader_EulaUploader = (EulaUploader);

// EXTERNAL MODULE: ./frontend/components/Graphic/index.ts
var Graphic = __webpack_require__(20881);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EulaSection/components/EulaListItem/EulaListItem.tsx








const EulaListItem_baseClass = "eula-list-item";
const EulaListItem = ({ eulaData, onDelete }) => {
  const onOpenEula = () => {
    window.open(`/api${endpoints/* default */.A.MDM_EULA(eulaData.token)}`, "_blank");
  };
  return /* @__PURE__ */ react.createElement("div", { className: EulaListItem_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${EulaListItem_baseClass}__value-group ${EulaListItem_baseClass}__list-item-data` }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-pdf" }), /* @__PURE__ */ react.createElement("div", { className: `${EulaListItem_baseClass}__list-item-info` }, /* @__PURE__ */ react.createElement("span", { className: `${EulaListItem_baseClass}__list-item-name` }, eulaData.name), /* @__PURE__ */ react.createElement("span", { className: `${EulaListItem_baseClass}__list-item-uploaded` }, `Uploaded ${(0,date_format/* timeAgo */.fF)(new Date(eulaData.created_at), {
    addSuffix: true
  })}`))), /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${EulaListItem_baseClass}__value-group ${EulaListItem_baseClass}__list-item-actions`
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${EulaListItem_baseClass}__list-item-button`,
        variant: "subdued",
        onClick: onOpenEula
      },
      /* @__PURE__ */ react.createElement(
        Icon/* default */.A,
        {
          name: "external-link",
          size: "medium",
          className: `${EulaListItem_baseClass}__external-icon`
        }
      )
    ),
    /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            className: `${EulaListItem_baseClass}__list-item-button`,
            variant: "subdued",
            onClick: () => onDelete(),
            disabled: disableChildren
          },
          /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "trash" })
        )
      }
    )
  ));
};
/* harmony default export */ var EulaListItem_EulaListItem = (EulaListItem);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EulaSection/components/UploadedEulaView/UploadedEulaView.tsx





const UploadedEulaView_baseClass = "uploaded-eula-view";
const UploadedEulaView = ({
  eulaMetadata,
  onDelete
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: UploadedEulaView_baseClass }, /* @__PURE__ */ react.createElement("p", null, "Require end users to agree to a EULA when they first set up their new macOS hosts.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/setup-experience/end-user-authentication",
      text: "Learn more",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement(
    UploadList/* default */.A,
    {
      keyAttribute: "name",
      listItems: [eulaMetadata],
      ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(EulaListItem_EulaListItem, { eulaData: listItem, onDelete })
    }
  ));
};
/* harmony default export */ var UploadedEulaView_UploadedEulaView = (UploadedEulaView);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EulaSection/EulaSection.tsx

var EulaSection_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};







const EulaSection_baseClass = "eula-section";
const EulaSection = ({
  eulaMetadata,
  isEulaUploaded,
  onUpload,
  onDelete
}) => {
  const [showDeleteEulaModal, setShowDeleteEulaModal] = (0,react.useState)(false);
  const onDeleteEula = () => EulaSection_async(null, null, function* () {
    if (!eulaMetadata) return;
    try {
      yield mdm/* default */.A.deleteEULA(eulaMetadata.token);
      ToastNotification/* notify */.me.success("Successfully deleted.");
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn\u2019t delete. Please try again.", { response: e });
    } finally {
      setShowDeleteEulaModal(false);
      onDelete();
    }
  });
  return /* @__PURE__ */ react.createElement(
    SettingsSection/* default */.A,
    {
      className: EulaSection_baseClass,
      title: "End user license agreement (EULA)",
      id: "end-user-license-agreement"
    },
    /* @__PURE__ */ react.createElement("div", { className: `${EulaSection_baseClass}__content` }, !isEulaUploaded || !eulaMetadata ? /* @__PURE__ */ react.createElement(EulaUploader_EulaUploader, { onUpload }) : /* @__PURE__ */ react.createElement(
      UploadedEulaView_UploadedEulaView,
      {
        eulaMetadata,
        onDelete: () => setShowDeleteEulaModal(true)
      }
    )),
    showDeleteEulaModal && /* @__PURE__ */ react.createElement(
      DeleteEulaModal_DeleteEulaModal,
      {
        onDelete: onDeleteEula,
        onCancel: () => setShowDeleteEulaModal(false)
      }
    )
  );
};
/* harmony default export */ var EulaSection_EulaSection = (EulaSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/EulaSection/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/AndroidMdmCard/AndroidMdmCard.tsx





const AndroidMdmCard_baseClass = "android-mdm-card";
const TurnOnAndroidMdmCard = ({
  onClickTurnOn
}) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      className: AndroidMdmCard_baseClass,
      header: "Turn on Android MDM",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClickTurnOn }, "Turn on")
    },
    "Enforce settings, OS updates, and more."
  );
};
const TurnOffAndroidMdmCard = ({
  onClickEdit
}) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      className: AndroidMdmCard_baseClass,
      iconName: "success",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClickEdit, variant: "subdued", icon: "pencil" }, "Edit")
    },
    "Android MDM turned on."
  );
};
const AndroidMdmCard = ({
  turnOffAndroidMdm,
  editAndroidMdm
}) => {
  const { isAndroidMdmEnabledAndConfigured } = (0,react.useContext)(app/* AppContext */.BR);
  if (isAndroidMdmEnabledAndConfigured === void 0) {
    return null;
  }
  return isAndroidMdmEnabledAndConfigured ? /* @__PURE__ */ react.createElement(TurnOffAndroidMdmCard, { onClickEdit: editAndroidMdm }) : /* @__PURE__ */ react.createElement(TurnOnAndroidMdmCard, { onClickTurnOn: turnOffAndroidMdm });
};
/* harmony default export */ var AndroidMdmCard_AndroidMdmCard = (AndroidMdmCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/AndroidMdmCard/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/AppleMdmCard/AppleMdmCard.tsx





const AppleMdmCard_baseClass = "apple-mdm-card";
const TurnOnAppleMdmCard = ({ onClickTurnOn }) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      className: AppleMdmCard_baseClass,
      header: "Turn on Apple (macOS, iOS, iPadOS) MDM",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClickTurnOn }, "Turn on")
    },
    "Enforce settings, OS updates, disk encryption, and more."
  );
};
const SeeDetailsAppleMdmCard = ({
  onClickDetails
}) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      iconName: "success",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClickDetails, variant: "subdued", icon: "pencil" }, "Edit")
    },
    "Apple (macOS, iOS, iPadOS) MDM turned on."
  );
};
const AppleMdmCard = ({
  appleAPNSInfo,
  errorData,
  turnOnAppleMdm,
  viewDetails
}) => {
  const showError = errorData !== null && errorData.status !== 404 && errorData.status !== 400;
  if (showError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
  }
  return appleAPNSInfo !== void 0 ? /* @__PURE__ */ react.createElement(SeeDetailsAppleMdmCard, { onClickDetails: viewDetails }) : /* @__PURE__ */ react.createElement(TurnOnAppleMdmCard, { onClickTurnOn: turnOnAppleMdm });
};
/* harmony default export */ var AppleMdmCard_AppleMdmCard = (AppleMdmCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/AppleMdmCard/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/WindowsMdmCard/WindowsMdmCard.tsx





const WindowsMdmCard_baseClass = "windows-mdm-card";
const TurnOnWindowsMdmCard = ({
  onClickTurnOn
}) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      className: WindowsMdmCard_baseClass,
      header: "Turn on Windows MDM",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClickTurnOn }, "Turn on")
    },
    "Turn MDM on for Windows hosts with fleetd."
  );
};
const TurnOffWindowsMdmCard = ({
  onClickEdit
}) => {
  return /* @__PURE__ */ react.createElement(
    SectionCard_SectionCard,
    {
      iconName: "success",
      cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClickEdit, variant: "subdued", icon: "pencil" }, "Edit")
    },
    "Windows MDM turned on (servers excluded)."
  );
};
const WindowsMdmCard = ({
  turnOnWindowsMdm,
  editWindowsMdm
}) => {
  var _a, _b;
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const isWindowsMdmEnabled = (_b = (_a = config == null ? void 0 : config.mdm) == null ? void 0 : _a.windows_enabled_and_configured) != null ? _b : false;
  return isWindowsMdmEnabled ? /* @__PURE__ */ react.createElement(TurnOffWindowsMdmCard, { onClickEdit: editWindowsMdm }) : /* @__PURE__ */ react.createElement(TurnOnWindowsMdmCard, { onClickTurnOn: turnOnWindowsMdm });
};
/* harmony default export */ var WindowsMdmCard_WindowsMdmCard = (WindowsMdmCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/WindowsMdmCard/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/MdmSettingsSection.tsx









const MdmSettingsSection_baseClass = "mdm-settings-section";
const MdmSettingsSection = ({
  isLoading,
  isError,
  appleAPNSError,
  router,
  appleAPNSInfo
}) => {
  const navigateToAppleMdm = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM_APPLE);
  };
  const navigateToWindowsMdm = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM_WINDOWS);
  };
  const navigateToAndroidMdm = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM_ANDROID);
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      AppleMdmCard_AppleMdmCard,
      {
        appleAPNSInfo,
        errorData: appleAPNSError,
        turnOnAppleMdm: navigateToAppleMdm,
        viewDetails: navigateToAppleMdm
      }
    ), /* @__PURE__ */ react.createElement(
      WindowsMdmCard_WindowsMdmCard,
      {
        turnOnWindowsMdm: navigateToWindowsMdm,
        editWindowsMdm: navigateToWindowsMdm
      }
    ), /* @__PURE__ */ react.createElement(
      AndroidMdmCard_AndroidMdmCard,
      {
        turnOffAndroidMdm: navigateToAndroidMdm,
        editAndroidMdm: navigateToAndroidMdm
      }
    ));
  };
  return /* @__PURE__ */ react.createElement(
    SettingsSection/* default */.A,
    {
      title: "Mobile device management (MDM)",
      className: MdmSettingsSection_baseClass
    },
    renderContent()
  );
};
/* harmony default export */ var MdmSettingsSection_MdmSettingsSection = (MdmSettingsSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MdmSettingsSection/index.ts



// EXTERNAL MODULE: ./frontend/services/entities/microsoft_graph_credentials.ts
var microsoft_graph_credentials = __webpack_require__(83246);
;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MicrosoftEntraSection/MicrosoftGraphCard/MicrosoftGraphCard.tsx




const StoredCredentialCard = ({
  iconName,
  editCredential,
  children
}) => /* @__PURE__ */ react.createElement(
  SectionCard_SectionCard,
  {
    iconName,
    cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: editCredential, variant: "subdued", icon: "pencil" }, "Edit")
  },
  children
);
const MicrosoftGraphCard = ({
  credentialAdded,
  credentialInvalid,
  credentialStatusUnavailable = false,
  onViewDetails
}) => {
  if (credentialStatusUnavailable) {
    return /* @__PURE__ */ react.createElement(StoredCredentialCard, { iconName: "warning", editCredential: onViewDetails }, "Couldn't load the Microsoft Graph connection status.");
  }
  if (!credentialAdded) {
    return /* @__PURE__ */ react.createElement(
      SectionCard_SectionCard,
      {
        header: "Microsoft Graph",
        cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onViewDetails }, "Connect")
      },
      "Add a Microsoft Entra app registration to sync Windows Autopilot devices to Mesh as pending hosts."
    );
  }
  if (credentialInvalid) {
    return /* @__PURE__ */ react.createElement(StoredCredentialCard, { iconName: "error", editCredential: onViewDetails }, "Microsoft Graph credential is invalid. Windows Autopilot devices won't sync to Mesh as pending hosts.");
  }
  return /* @__PURE__ */ react.createElement(StoredCredentialCard, { iconName: "success", editCredential: onViewDetails }, "Microsoft Graph connected.");
};
/* harmony default export */ var MicrosoftGraphCard_MicrosoftGraphCard = (MicrosoftGraphCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MicrosoftEntraSection/MicrosoftGraphCard/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MicrosoftEntraSection/WindowsAutomaticEnrollmentCard/WindowsEnrollmentCard.tsx




const WindowsMdmDisabledCard = /* @__PURE__ */ react.createElement(SectionCard_SectionCard, { header: "Windows enrollment" }, "To enable end users to enroll to Mesh via Microsoft Entra (e.g. Autopilot), first turn on Windows MDM.");
const WindowsTenantAddedCard = ({
  editTenants
}) => /* @__PURE__ */ react.createElement(
  SectionCard_SectionCard,
  {
    iconName: "success",
    cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: editTenants, variant: "subdued", icon: "pencil" }, "Edit")
  },
  "Microsoft Entra tenant ID added."
);
const WindowsTenantNotAddedCard = ({
  addTenant
}) => /* @__PURE__ */ react.createElement(
  SectionCard_SectionCard,
  {
    header: "Windows enrollment",
    cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: addTenant }, "Connect")
  },
  "To enable end users to enroll to Mesh via Microsoft Entra (e.g. Autopilot), you need to add Entra tenant ID first."
);
const WindowsAutomaticEnrollmentCard = ({
  windowsMdmEnabled,
  tenantAdded,
  onViewDetails
}) => {
  if (!windowsMdmEnabled) {
    return WindowsMdmDisabledCard;
  }
  if (tenantAdded) {
    return /* @__PURE__ */ react.createElement(WindowsTenantAddedCard, { editTenants: onViewDetails });
  }
  return /* @__PURE__ */ react.createElement(WindowsTenantNotAddedCard, { addTenant: onViewDetails });
};
/* harmony default export */ var WindowsEnrollmentCard = (WindowsAutomaticEnrollmentCard);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MicrosoftEntraSection/WindowsAutomaticEnrollmentCard/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MicrosoftEntraSection/MicrosoftEntraSection.tsx









const MicrosoftEntraSection_baseClass = "microsoft-entra-section";
const MicrosoftEntraSection = ({
  router,
  windowsMdmEnabled,
  tenantAdded,
  isPremiumTier
}) => {
  const {
    data: credentialsResponse,
    isLoading: isLoadingCredentials,
    isError: isCredentialsError
  } = (0,es.useQuery)(
    ["microsoft-graph-credentials"],
    () => microsoft_graph_credentials/* default */.A.getCredentials(),
    {
      enabled: isPremiumTier,
      // Matches MicrosoftGraphPage, which shares this query key: the card's connected/invalid state should refresh when
      // the admin returns from the Entra portal.
      refetchOnWindowFocus: true
    }
  );
  const credential = credentialsResponse == null ? void 0 : credentialsResponse.microsoft_graph_credentials[0];
  const navigateToWindowsEnrollment = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_AUTOMATIC_ENROLLMENT_WINDOWS);
  };
  const navigateToMicrosoftGraph = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MICROSOFT_GRAPH);
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Microsoft Entra", className: MicrosoftEntraSection_baseClass }, !isPremiumTier ? /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    WindowsEnrollmentCard,
    {
      windowsMdmEnabled,
      tenantAdded,
      onViewDetails: navigateToWindowsEnrollment
    }
  ), !isLoadingCredentials && /* @__PURE__ */ react.createElement(
    MicrosoftGraphCard_MicrosoftGraphCard,
    {
      credentialAdded: !!credential,
      credentialInvalid: !!(credential == null ? void 0 : credential.credential_invalid),
      credentialStatusUnavailable: isCredentialsError,
      onViewDetails: navigateToMicrosoftGraph
    }
  )));
};
/* harmony default export */ var MicrosoftEntraSection_MicrosoftEntraSection = (MicrosoftEntraSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/components/MicrosoftEntraSection/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/MdmSettings.tsx

var MdmSettings_defProp = Object.defineProperty;
var MdmSettings_defProps = Object.defineProperties;
var MdmSettings_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MdmSettings_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MdmSettings_hasOwnProp = Object.prototype.hasOwnProperty;
var MdmSettings_propIsEnum = Object.prototype.propertyIsEnumerable;
var MdmSettings_defNormalProp = (obj, key, value) => key in obj ? MdmSettings_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MdmSettings_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MdmSettings_hasOwnProp.call(b, prop))
      MdmSettings_defNormalProp(a, prop, b[prop]);
  if (MdmSettings_getOwnPropSymbols)
    for (var prop of MdmSettings_getOwnPropSymbols(b)) {
      if (MdmSettings_propIsEnum.call(b, prop))
        MdmSettings_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MdmSettings_spreadProps = (a, b) => MdmSettings_defProps(a, MdmSettings_getOwnPropDescs(b));











const MdmSettings_baseClass = "mdm-settings";
const MdmSettings = ({
  router,
  appConfig,
  isPremiumTier = false
}) => {
  var _a;
  const isMdmEnabled = !!(appConfig == null ? void 0 : appConfig.mdm.enabled_and_configured);
  const {
    data: APNSInfo,
    isLoading: isLoadingAPNSInfo,
    isError: isAPNSInfoError,
    error: errorAPNSInfo
  } = (0,es.useQuery)(
    ["appleAPNInfo", { isMdmEnabled }],
    () => mdm_apple/* default */.A.getAppleAPNInfo(),
    MdmSettings_spreadProps(MdmSettings_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: (tries, error) => error.status !== 404 && tries <= 3,
      staleTime: 5e3,
      enabled: isMdmEnabled
    })
  );
  const {
    data: vppData,
    isLoading: isLoadingVpp,
    isError: isVppError
  } = (0,es.useQuery)(
    ["vppInfo", { isMdmEnabled }],
    () => mdm_apple/* default */.A.getVppTokens(),
    MdmSettings_spreadProps(MdmSettings_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      enabled: isPremiumTier && isMdmEnabled
    })
  );
  const {
    data: eulaMetadata,
    isLoading: isLoadingEula,
    isError: isEulaError,
    error: eulaError,
    refetch: refetchEulaMetadata
  } = (0,es.useQuery)(
    ["eula-metadata", { isMdmEnabled }],
    () => mdm/* default */.A.getEULAMetadata(),
    MdmSettings_spreadProps(MdmSettings_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      enabled: isPremiumTier && isMdmEnabled
    })
  );
  const isLoading = isLoadingAPNSInfo || isLoadingVpp || isLoadingEula;
  const noVppTokenUploaded = !vppData || !vppData.vpp_tokens.length;
  const hasVppError = isVppError && !noVppTokenUploaded;
  const noEulaUploaded = eulaError && eulaError.status === 404;
  const hasEulaError = isEulaError && !noEulaUploaded;
  const hasError = isAPNSInfoError || hasVppError || hasEulaError;
  const hasAllData = !isMdmEnabled || !!APNSInfo;
  return /* @__PURE__ */ react.createElement("div", { className: MdmSettings_baseClass }, /* @__PURE__ */ react.createElement(
    MdmSettingsSection_MdmSettingsSection,
    {
      isLoading,
      isError: hasError,
      appleAPNSInfo: APNSInfo,
      appleAPNSError: errorAPNSInfo,
      router
    }
  ), !isLoading && !hasError && hasAllData && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    AndroidZeroTouchSection_AndroidZeroTouchSection,
    {
      router,
      isPremiumTier
    }
  ), /* @__PURE__ */ react.createElement(
    AppleBusinessManagerSection_AppleBusinessManagerSection,
    {
      router,
      isPremiumTier,
      isVppOn: !noVppTokenUploaded
    }
  ), /* @__PURE__ */ react.createElement(
    MicrosoftEntraSection_MicrosoftEntraSection,
    {
      router,
      windowsMdmEnabled: !!(appConfig == null ? void 0 : appConfig.mdm.windows_enabled_and_configured),
      tenantAdded: !!((_a = appConfig == null ? void 0 : appConfig.mdm.windows_entra_tenant_ids) == null ? void 0 : _a.length),
      isPremiumTier
    }
  ), isPremiumTier && !!(appConfig == null ? void 0 : appConfig.mdm.apple_bm_enabled_and_configured) && isMdmEnabled && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    EulaSection_EulaSection,
    {
      eulaMetadata,
      isEulaUploaded: !noEulaUploaded,
      onUpload: refetchEulaMetadata,
      onDelete: refetchEulaMetadata
    }
  ), /* @__PURE__ */ react.createElement(EndUserMigrationSection_EndUserMigrationSection, { router }))));
};
/* harmony default export */ var MdmSettings_MdmSettings = (MdmSettings);

;// ./frontend/pages/admin/IntegrationsPage/cards/MdmSettings/index.ts



// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/components/EndUserAuthSection/helpers.ts


const newFormDataIdp = (config) => {
  var _a, _b, _c, _d;
  return {
    idp_name: ((_a = config == null ? void 0 : config.idp_name) == null ? void 0 : _a.trim()) || "",
    entity_id: ((_b = config == null ? void 0 : config.entity_id) == null ? void 0 : _b.trim()) || "",
    metadata_url: ((_c = config == null ? void 0 : config.metadata_url) == null ? void 0 : _c.trim()) || "",
    metadata: ((_d = config == null ? void 0 : config.metadata) == null ? void 0 : _d.trim()) || ""
  };
};
const helpers_isEmptyFormData = (data) => {
  return !data.idp_name.trim() && !data.entity_id.trim() && !data.metadata.trim() && !data.metadata_url.trim();
};
const trimFormDataIdp = (data) => ({
  idp_name: data.idp_name.trim(),
  entity_id: data.entity_id.trim(),
  metadata_url: data.metadata_url.trim(),
  metadata: data.metadata.trim()
});
const METADATA_SIBLING = {
  metadata: "metadata_url",
  metadata_url: "metadata"
};
const validateEndUserAuthForm = (formData) => {
  const errors = {};
  const data = trimFormDataIdp(formData);
  if (helpers_isEmptyFormData(data)) {
    return errors;
  }
  if (!data.idp_name) {
    errors.idp_name = "Enter an identity provider name";
  }
  if (!data.entity_id) {
    errors.entity_id = "Enter an entity ID";
  }
  if (!data.metadata && !data.metadata_url) {
    errors.metadata = "Enter metadata or a metadata URL";
    errors.metadata_url = "Enter metadata or a metadata URL";
  } else if (data.metadata_url) {
    if (!isURL_default()(data.metadata_url)) {
      errors.metadata_url = "Enter a valid metadata URL";
    } else if (!isURL_default()(data.metadata_url, {
      require_protocol: true,
      protocols: ["http", "https"]
    })) {
      errors.metadata_url = "Enter a metadata URL starting with https:// or http://";
    }
  }
  return errors;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/components/EndUserAuthSection/EndUserAuthSection.tsx

var EndUserAuthSection_defProp = Object.defineProperty;
var EndUserAuthSection_defProps = Object.defineProperties;
var EndUserAuthSection_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EndUserAuthSection_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EndUserAuthSection_hasOwnProp = Object.prototype.hasOwnProperty;
var EndUserAuthSection_propIsEnum = Object.prototype.propertyIsEnumerable;
var EndUserAuthSection_defNormalProp = (obj, key, value) => key in obj ? EndUserAuthSection_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EndUserAuthSection_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EndUserAuthSection_hasOwnProp.call(b, prop))
      EndUserAuthSection_defNormalProp(a, prop, b[prop]);
  if (EndUserAuthSection_getOwnPropSymbols)
    for (var prop of EndUserAuthSection_getOwnPropSymbols(b)) {
      if (EndUserAuthSection_propIsEnum.call(b, prop))
        EndUserAuthSection_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EndUserAuthSection_spreadProps = (a, b) => EndUserAuthSection_defProps(a, EndUserAuthSection_getOwnPropDescs(b));
var EndUserAuthSection_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};













const EndUserAuthSection_baseClass = "end-user-auth-section";
const EndUserAuthSection = ({
  endUserAuth,
  onDirtyChange,
  // Notify parent component of changes, since we're calling our own API
  // rather than using the common config update handler.
  onSubmit: announceChanges
}) => {
  const { config, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const gitOpsModeEnabled = config == null ? void 0 : config.gitops.gitops_mode_enabled;
  const originalFormData = (0,react.useRef)(newFormDataIdp(endUserAuth));
  const {
    formData,
    setField,
    reset,
    getError,
    clearFieldError,
    validateField,
    handleSubmit,
    clearErrors,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: originalFormData.current,
    validate: validateEndUserAuthForm
  });
  const hasUnsavedChanges = !(0,lodash.isEqual)(
    (0,useFormValidation/* trimFormData */.R)(formData),
    originalFormData.current
  );
  const onFieldChange = (name, value) => {
    setField(name, value);
    if (helpers_isEmptyFormData(EndUserAuthSection_spreadProps(EndUserAuthSection_spreadValues({}, formData), { [name]: value }))) {
      clearErrors();
      return;
    }
    const sibling = METADATA_SIBLING[name];
    if (value.trim() && sibling && !formData[sibling].trim()) {
      clearFieldError(sibling);
    }
  };
  (0,react.useEffect)(() => {
    onDirtyChange(hasUnsavedChanges);
  }, [hasUnsavedChanges, onDirtyChange]);
  (0,react.useEffect)(() => () => onDirtyChange(false), [onDirtyChange]);
  const onValidSubmit = (submitData) => EndUserAuthSection_async(null, null, function* () {
    if (gitOpsModeEnabled) {
      return;
    }
    try {
      yield entities_config/* default */.A.update({
        mdm: {
          end_user_authentication: EndUserAuthSection_spreadValues({}, submitData)
        }
      });
      ToastNotification/* notify */.me.success("Successfully updated end user authentication.");
      originalFormData.current = submitData;
      reset(submitData);
      announceChanges();
    } catch (err) {
      const ae = typeof err === "object" ? err : {};
      if (ae.status === 422) {
        ToastNotification/* notify */.me.error(`Couldn't update: ${(0,interfaces_errors/* expandErrorReasonRequired */.O_)(err)}.`, {
          response: err
        });
        return;
      }
      ToastNotification/* notify */.me.error("Couldn't update. Please try again.", { response: err });
    }
  });
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit(onValidSubmit) }, /* @__PURE__ */ react.createElement("p", null, "After configuring, head to", " ", /* @__PURE__ */ react.createElement("strong", null, "Controls > Setup experience > End user authentication"), " ", "to require end users to authenticate.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        text: "Learn more",
        url: "https://fleetdm.com/learn-more-about/end-user-authentication",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `form ${gitOpsModeEnabled ? "disabled-by-gitops-mode" : ""}`
      },
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Identity provider name",
          name: "idp_name",
          value: formData.idp_name,
          error: getError("idp_name"),
          onChange: (value) => onFieldChange("idp_name", value),
          onFocus: () => clearFieldError("idp_name"),
          onBlur: () => validateField("idp_name"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "A required human friendly name for the identity provider that will provide single sign-on authentication."
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Entity ID",
          name: "entity_id",
          value: formData.entity_id,
          error: getError("entity_id"),
          onChange: (value) => onFieldChange("entity_id", value),
          onFocus: () => clearFieldError("entity_id"),
          onBlur: () => validateField("entity_id"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "The Entity ID is a required URI that you use to identify Mesh when configuring the identity provider. Okta calls this Audience Restriction."
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Metadata URL",
          helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "If both ", /* @__PURE__ */ react.createElement("b", null, "Metadata URL"), " and ", /* @__PURE__ */ react.createElement("b", null, "Metadata"), " are specified,", " ", /* @__PURE__ */ react.createElement("b", null, "Metadata URL"), " will be used."),
          name: "metadata_url",
          value: formData.metadata_url,
          error: getError("metadata_url"),
          onChange: (value) => onFieldChange("metadata_url", value),
          onFocus: () => clearFieldError("metadata_url"),
          onBlur: () => validateField("metadata_url"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "Metadata URL provided by the identity provider."
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Metadata",
          type: "textarea",
          name: "metadata",
          value: formData.metadata,
          error: getError("metadata"),
          onChange: (value) => onFieldChange("metadata", value),
          onFocus: () => clearFieldError("metadata"),
          onBlur: () => validateField("metadata"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "Metadata XML provided by the identity provider."
        }
      )
    ), /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button_Button/* default */.A,
          {
            type: "submit",
            disabled: isSubmitting || disableChildren,
            isLoading: isSubmitting,
            className: "button-wrap"
          },
          "Save"
        )
      }
    ));
  };
  return /* @__PURE__ */ react.createElement("div", { className: EndUserAuthSection_baseClass }, renderContent());
};
/* harmony default export */ var EndUserAuthSection_EndUserAuthSection = (EndUserAuthSection);

;// ./frontend/pages/admin/IntegrationsPage/cards/IdentityProviders/components/EndUserAuthSection/index.ts



;// ./frontend/pages/admin/IntegrationsPage/cards/Sso/helpers.ts



const newSsoFormData = (appConfig) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
  return {
    enableSso: (_b = (_a = appConfig.sso_settings) == null ? void 0 : _a.enable_sso) != null ? _b : false,
    idpName: (_e = (_d = (_c = appConfig.sso_settings) == null ? void 0 : _c.idp_name) == null ? void 0 : _d.trim()) != null ? _e : "",
    entityId: (_h = (_g = (_f = appConfig.sso_settings) == null ? void 0 : _f.entity_id) == null ? void 0 : _g.trim()) != null ? _h : "",
    idpImageUrl: (_k = (_j = (_i = appConfig.sso_settings) == null ? void 0 : _i.idp_image_url) == null ? void 0 : _j.trim()) != null ? _k : "",
    metadata: (_n = (_m = (_l = appConfig.sso_settings) == null ? void 0 : _l.metadata) == null ? void 0 : _m.trim()) != null ? _n : "",
    metadataUrl: (_q = (_p = (_o = appConfig.sso_settings) == null ? void 0 : _o.metadata_url) == null ? void 0 : _p.trim()) != null ? _q : "",
    enableSsoIdpLogin: (_s = (_r = appConfig.sso_settings) == null ? void 0 : _r.enable_sso_idp_login) != null ? _s : false,
    enableJitProvisioning: (_u = (_t = appConfig.sso_settings) == null ? void 0 : _t.enable_jit_provisioning) != null ? _u : false
  };
};
const helpers_METADATA_SIBLING = {
  metadata: "metadataUrl",
  metadataUrl: "metadata"
};
const validateSsoForm = (formData) => {
  const errors = {};
  const {
    enableSso,
    idpImageUrl,
    metadata,
    metadataUrl,
    entityId,
    idpName
  } = (0,useFormValidation/* trimFormData */.R)(formData);
  if (!enableSso) {
    return errors;
  }
  if (idpImageUrl && !(0,valid_url/* default */.A)({ url: idpImageUrl })) {
    errors.idpImageUrl = "Enter a valid IdP image URL";
  }
  if (!metadata && !metadataUrl) {
    errors.metadataUrl = "Enter metadata or a metadata URL";
    errors.metadata = "Enter metadata or a metadata URL";
  } else if (metadataUrl) {
    if (!(0,valid_url/* default */.A)({ url: metadataUrl })) {
      errors.metadataUrl = "Enter a valid metadata URL";
    } else if (!(0,valid_url/* default */.A)({ url: metadataUrl, protocols: ["http", "https"] })) {
      errors.metadataUrl = "Enter a metadata URL starting with https:// or http://";
    }
  }
  if (!entityId) {
    errors.entityId = "Enter an entity ID";
  }
  if (!idpName) {
    errors.idpName = "Enter an identity provider name";
  }
  return errors;
};

;// ./frontend/pages/admin/IntegrationsPage/cards/Sso/Sso.tsx

var Sso_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

















const AUTH_TARGETS_BY_INDEX = ["fleet-users", "end-users"];
const Sso = ({
  appConfig,
  handleSubmit,
  isPremiumTier,
  isUpdatingSettings,
  router,
  subsection
}) => {
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;
  const selectedAuthTarget = subsection;
  const {
    formData,
    setField,
    commitFields,
    reset,
    getError,
    clearFieldError,
    validateField,
    handleSubmit: onFormSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: newSsoFormData(appConfig),
    validate: validateSsoForm,
    isSubmitting: isUpdatingSettings
  });
  const {
    enableSso,
    idpName,
    entityId,
    idpImageUrl,
    metadata,
    metadataUrl,
    enableSsoIdpLogin,
    enableJitProvisioning
  } = formData;
  const originalFormData = (0,react.useRef)(formData);
  const onFieldChange = (name, value) => {
    setField(name, value);
    const sibling = helpers_METADATA_SIBLING[name];
    if (value.trim() && sibling && !formData[sibling].trim()) {
      clearFieldError(sibling);
    }
  };
  const onValidSubmit = (submitData) => Sso_async(null, null, function* () {
    var _a, _b, _c, _d;
    if (gitOpsModeEnabled) {
      return;
    }
    const formDataToSubmit = {
      sso_settings: {
        entity_id: submitData.entityId,
        idp_image_url: submitData.idpImageUrl,
        metadata: submitData.metadata,
        metadata_url: submitData.metadataUrl,
        idp_name: submitData.idpName,
        enable_sso: submitData.enableSso,
        enable_sso_idp_login: submitData.enableSsoIdpLogin,
        enable_jit_provisioning: submitData.enableJitProvisioning,
        issuer_uri: (_b = (_a = appConfig.sso_settings) == null ? void 0 : _a.issuer_uri) != null ? _b : "",
        enable_jit_role_sync: (_d = (_c = appConfig.sso_settings) == null ? void 0 : _c.enable_jit_role_sync) != null ? _d : false
      }
    };
    if (yield handleSubmit(formDataToSubmit)) {
      originalFormData.current = submitData;
      reset(submitData);
    }
  });
  const [endUserHasUnsavedChanges, setEndUserHasUnsavedChanges] = (0,react.useState)(
    false
  );
  const hasUnsavedChanges = !(0,lodash.isEqual)((0,useFormValidation/* trimFormData */.R)(formData), originalFormData.current) || endUserHasUnsavedChanges;
  const handleTabChange = (0,react.useCallback)(
    (index) => {
      if (hasUnsavedChanges && // eslint-disable-next-line no-alert
      !confirm("Switch tabs?\n\nChanges you made will not be saved.")) {
        return;
      }
      reset(originalFormData.current);
      const newSubsection = AUTH_TARGETS_BY_INDEX[index];
      router.push(
        newSubsection === "end-users" ? paths/* default */.A.ADMIN_INTEGRATIONS_SSO_END_USERS : paths/* default */.A.ADMIN_INTEGRATIONS_SSO_FLEET_USERS
      );
    },
    [hasUnsavedChanges, reset, router]
  );
  const renderFleetSsoTab = () => {
    return /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit(onValidSubmit), autoComplete: "off" }, /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `form ${gitOpsModeEnabled ? "disabled-by-gitops-mode" : ""}`
      },
      /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          onChange: (value) => commitFields({ enableSso: value }),
          name: "enableSso",
          value: enableSso,
          disabled: isSubmitting || gitOpsModeEnabled
        },
        "Enable single sign-on"
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Identity provider name",
          name: "idpName",
          value: idpName,
          error: getError("idpName"),
          onChange: (value) => onFieldChange("idpName", value),
          onFocus: () => clearFieldError("idpName"),
          onBlur: () => validateField("idpName"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "A required human friendly name for the identity provider that will provide single sign-on authentication."
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Entity ID",
          helpText: "The URI you provide here must exactly match the Entity ID field used in the identity provider configuration.",
          name: "entityId",
          value: entityId,
          error: getError("entityId"),
          onChange: (value) => onFieldChange("entityId", value),
          onFocus: () => clearFieldError("entityId"),
          onBlur: () => validateField("entityId"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "The Entity ID is a required URI that you use to identify Mesh when configuring the identity provider. Okta calls this Audience Restriction."
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "IdP image URL",
          name: "idpImageUrl",
          value: idpImageUrl,
          error: getError("idpImageUrl"),
          onChange: (value) => onFieldChange("idpImageUrl", value),
          onFocus: () => clearFieldError("idpImageUrl"),
          onBlur: () => validateField("idpImageUrl"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: `An optional link to an image such
            as a logo for the identity provider.`
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Metadata",
          type: "textarea",
          name: "metadata",
          value: metadata,
          error: getError("metadata"),
          onChange: (value) => onFieldChange("metadata", value),
          onFocus: () => clearFieldError("metadata"),
          onBlur: () => validateField("metadata"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "Metadata XML provided by the identity provider."
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Metadata URL",
          helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "If both ", /* @__PURE__ */ react.createElement("b", null, "Metadata URL"), " and ", /* @__PURE__ */ react.createElement("b", null, "Metadata"), " are specified,", " ", /* @__PURE__ */ react.createElement("b", null, "Metadata URL"), " will be used."),
          name: "metadataUrl",
          value: metadataUrl,
          error: getError("metadataUrl"),
          onChange: (value) => onFieldChange("metadataUrl", value),
          onFocus: () => clearFieldError("metadataUrl"),
          onBlur: () => validateField("metadataUrl"),
          disabled: isSubmitting || gitOpsModeEnabled,
          tooltip: "Metadata URL provided by the identity provider."
        }
      ),
      /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          onChange: (value) => commitFields({ enableSsoIdpLogin: value }),
          name: "enableSsoIdpLogin",
          value: enableSsoIdpLogin,
          disabled: isSubmitting || gitOpsModeEnabled
        },
        "Allow SSO login initiated by identity provider"
      ),
      isPremiumTier && /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          onChange: (value) => commitFields({ enableJitProvisioning: value }),
          name: "enableJitProvisioning",
          value: enableJitProvisioning,
          disabled: isSubmitting || gitOpsModeEnabled,
          helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/just-in-time-provisioning`,
              text: "Learn more",
              newTab: true
            }
          ), " ", "about just-in-time (JIT) user provisioning.")
        },
        "Create user and sync permissions on login"
      )
    ), /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            disabled: isSubmitting || disableChildren,
            className: "button-wrap",
            isLoading: isSubmitting
          },
          "Save"
        )
      }
    ));
  };
  const onSubmitEndUserSso = () => Sso_async(null, null, function* () {
    yield handleSubmit({});
  });
  const renderEndUserSsoTab = () => {
    var _a;
    return /* @__PURE__ */ react.createElement(
      EndUserAuthSection_EndUserAuthSection,
      {
        endUserAuth: (_a = appConfig.mdm) == null ? void 0 : _a.end_user_authentication,
        onDirtyChange: setEndUserHasUnsavedChanges,
        onSubmit: onSubmitEndUserSso
      }
    );
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Authentication (SSO)" }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Configure authentication for Mesh users logging into Mesh or end users enrolling their hosts. To populate identity provider (IdP) host vitals and automatically delete Mesh users, head to", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Identity provider (IdP)",
          url: paths/* default */.A.ADMIN_INTEGRATIONS_IDENTITY_PROVIDER
        }
      ), "."),
      variant: "right-panel"
    }
  ), /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(
    esm/* Tabs */.tU,
    {
      selectedIndex: AUTH_TARGETS_BY_INDEX.indexOf(selectedAuthTarget),
      onSelect: handleTabChange
    },
    /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Mesh users")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "End users"))),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { key: "fleet-users" }, renderFleetSsoTab()),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { key: "end-users" }, renderEndUserSsoTab())
  )));
};
/* harmony default export */ var Sso_Sso = (Sso);

;// ./frontend/pages/admin/IntegrationsPage/cards/Sso/index.ts



;// ./frontend/pages/admin/IntegrationsPage/IntegrationNavItems.tsx












const getIntegrationSettingsNavItems = () => {
  const items = [
    {
      title: "Ticketing",
      urlSection: "ticket-destinations",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_TICKET_DESTINATIONS,
      Card: Integrations_TicketDestinations
    },
    {
      title: "MDM",
      urlSection: "mdm",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
      Card: MdmSettings_MdmSettings
    },
    {
      title: "Calendar events",
      urlSection: "calendars",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_CALENDARS,
      Card: Calendars_Calendars
    },
    {
      title: "Change management",
      urlSection: "change-management",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_CHANGE_MANAGEMENT,
      Card: ChangeManagement_ChangeManagement
    },
    {
      title: "Authentication (SSO)",
      urlSection: "sso",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_SSO_FLEET_USERS,
      Card: Sso_Sso
    },
    {
      title: "Account provisioning",
      urlSection: "account-provisioning",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_FPSSO,
      Card: AccountProvisioning_AccountProvisioning
    },
    {
      title: "User mapping",
      urlSection: "identity-provider",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_IDENTITY_PROVIDER,
      Card: IdentityProviders_IdentityProviders
    },
    {
      title: "Certificate authorities",
      urlSection: "certificate-authorities",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_CERTIFICATE_AUTHORITIES,
      Card: CertificateAuthorities_CertificateAuthorities
    },
    {
      title: "Host status alerts",
      urlSection: "host-status-webhook",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_HOST_STATUS_WEBHOOK,
      Card: GlobalHostStatusWebhook_GlobalHostStatusWebhook
    },
    {
      title: "Conditional access",
      urlSection: "conditional-access",
      path: paths/* default */.A.ADMIN_INTEGRATIONS_CONDITIONAL_ACCESS,
      Card: ConditionalAccess_ConditionalAccess
    }
  ];
  return items;
};
/* harmony default export */ var IntegrationNavItems = (getIntegrationSettingsNavItems);

;// ./frontend/pages/admin/IntegrationsPage/IntegrationsPage.tsx

var IntegrationsPage_defProp = Object.defineProperty;
var IntegrationsPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var IntegrationsPage_hasOwnProp = Object.prototype.hasOwnProperty;
var IntegrationsPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var IntegrationsPage_defNormalProp = (obj, key, value) => key in obj ? IntegrationsPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var IntegrationsPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (IntegrationsPage_hasOwnProp.call(b, prop))
      IntegrationsPage_defNormalProp(a, prop, b[prop]);
  if (IntegrationsPage_getOwnPropSymbols)
    for (var prop of IntegrationsPage_getOwnPropSymbols(b)) {
      if (IntegrationsPage_propIsEnum.call(b, prop))
        IntegrationsPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var IntegrationsPage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};










const IntegrationsPage_baseClass = "integrations";
const IntegrationsPage = ({
  router,
  params
}) => {
  var _a;
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  let { section } = params;
  const { subsection } = params;
  if (!section && !!subsection) {
    section = "sso";
  }
  const [isUpdatingSettings, setIsUpdatingSettings] = (0,react.useState)(false);
  const {
    data: appConfig,
    isLoading: isLoadingAppConfig,
    isFetching: isFetchingAppConfig,
    refetch: refetchConfig
  } = (0,es.useQuery)(["config"], () => entities_config/* default */.A.loadAll(), IntegrationsPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL));
  const onUpdateSettings = (0,react.useCallback)(
    (formUpdates) => IntegrationsPage_async(null, null, function* () {
      if (!appConfig) {
        return false;
      }
      const diff = (0,deep_difference/* default */.A)(formUpdates, appConfig);
      if (Object.keys(diff).length === 0) {
        refetchConfig();
        return true;
      }
      setIsUpdatingSettings(true);
      diff.agent_options = formUpdates.agent_options;
      try {
        yield entities_config/* default */.A.update(diff);
        ToastNotification/* notify */.me.success("Successfully updated settings.");
        refetchConfig();
        return true;
      } catch (err) {
        ToastNotification/* notify */.me.error("Could not update settings", { response: err });
        return false;
      } finally {
        setIsUpdatingSettings(false);
      }
    }),
    [appConfig, refetchConfig]
  );
  if (!appConfig) return /* @__PURE__ */ react.createElement(react.Fragment, null);
  const navItems = IntegrationNavItems();
  const DEFAULT_SETTINGS_SECTION = navItems[0];
  const currentSection = (_a = navItems.find((item) => item.urlSection === section)) != null ? _a : DEFAULT_SETTINGS_SECTION;
  const CurrentCard = currentSection.Card;
  const isLoading = isLoadingAppConfig || isFetchingAppConfig;
  return /* @__PURE__ */ react.createElement("div", { className: `${IntegrationsPage_baseClass}` }, /* @__PURE__ */ react.createElement(
    SideNav/* default */.A,
    {
      className: `${IntegrationsPage_baseClass}__side-nav`,
      navItems,
      activeItem: currentSection.urlSection,
      CurrentCard: !isLoading && appConfig ? /* @__PURE__ */ react.createElement(
        CurrentCard,
        {
          router,
          appConfig,
          handleSubmit: onUpdateSettings,
          isPremiumTier,
          isUpdatingSettings,
          subsection
        }
      ) : /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)
    }
  ));
};
/* harmony default export */ var IntegrationsPage_IntegrationsPage = (IntegrationsPage);

;// ./frontend/pages/admin/IntegrationsPage/index.ts




/***/ }),

/***/ 70058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ AgentOptionsPage_AgentOptionsPage; }
});

// EXTERNAL MODULE: ./node_modules/js-yaml/dist/js-yaml.mjs
var js_yaml = __webpack_require__(20382);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_yaml/index.js
var validate_yaml = __webpack_require__(55069);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/YamlAce/index.jsx
var YamlAce = __webpack_require__(82907);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/services/entities/osquery_options.ts




/* harmony default export */ var osquery_options = ({
  // Unneeded for teams, but might need this for global
  loadAll: () => {
    const { OSQUERY_OPTIONS } = endpoints/* default */.A;
    return (0,services/* default */.Ay)("GET", OSQUERY_OPTIONS);
  },
  update: (agentOptions, endpoint) => {
    return (0,services/* default */.Ay)("POST", endpoint, agentOptions);
  },
  updateTeam: (teamId, agentOptions) => {
    if (!teamId || teamId <= team/* API_NO_TEAM_ID */.Rp) {
      return Promise.reject(
        new Error(
          `Invalid team id: ${teamId} must be greater than ${team/* API_NO_TEAM_ID */.Rp}`
        )
      );
    }
    const { TEAMS_AGENT_OPTIONS } = endpoints/* default */.A;
    return (0,services/* default */.Ay)("POST", TEAMS_AGENT_OPTIONS(teamId), agentOptions);
  }
});

// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/yaml/index.ts
var yaml = __webpack_require__(66584);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/AgentOptionsPage/AgentOptionsPage.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));


















const baseClass = "agent-options";
const AgentOptionsPage = ({
  location,
  router
}) => {
  var _a;
  const gitOpsModeEnabled = (_a = (0,react.useContext)(app/* AppContext */.BR).config) == null ? void 0 : _a.gitops.gitops_mode_enabled;
  const { isRouteOk, teamIdForApi } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: false,
    includeNoTeam: false,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: false,
      observer: false,
      observer_plus: false,
      technician: false
    }
  });
  const [teamName, setTeamName] = (0,react.useState)("");
  const [formData, setFormData] = (0,react.useState)({});
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [isUpdatingAgentOptions, setIsUpdatingAgentOptions] = (0,react.useState)(false);
  const { agentOptions } = formData;
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const {
    isFetching: isFetchingTeamOptions,
    refetch: refetchTeamOptions
  } = (0,es.useQuery)(
    ["team_details", teamIdForApi],
    () => teams/* default */.A.load(teamIdForApi),
    {
      enabled: isRouteOk && !!teamIdForApi,
      select: (data) => data.team,
      onSuccess: (data) => {
        setFormData({
          agentOptions: (0,yaml/* agentOptionsToYaml */.k_)(data.agent_options)
        });
        setTeamName(data.name);
      },
      onError: (error) => handlePageError(error),
      refetchOnWindowFocus: false
    }
  );
  const validateForm = () => {
    const errors = {};
    if (agentOptions) {
      const { error: yamlError, valid: yamlValid } = (0,validate_yaml/* default */.A)(agentOptions);
      if (!yamlValid) {
        errors.agent_options = (0,yaml/* constructErrorString */.V4)(yamlError);
      }
    }
    setFormErrors(errors);
  };
  (0,react.useEffect)(() => {
    validateForm();
  }, [formData]);
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setIsUpdatingAgentOptions(true);
    const formDataToSubmit = agentOptions ? js_yaml/* default.load */.Ay.load(agentOptions) : constants/* EMPTY_AGENT_OPTIONS */.tU;
    osquery_options.updateTeam(teamIdForApi, formDataToSubmit).then(() => {
      ToastNotification/* notify */.me.success(`Successfully updated ${teamName} fleet agent options.`);
      refetchTeamOptions();
    }).catch((response) => {
      console.error(response);
      const reason = response.data.errors[0].reason;
      const agentOptionsInvalid = reason.includes("unsupported key provided") || reason.includes("invalid value type");
      ToastNotification/* notify */.me.error(
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't update ", teamName, " fleet agent options:", reason, agentOptionsInvalid && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("br", null), "If you're not using the latest osquery, use the fleetctl apply --force command to override validation.")),
        { response }
      );
    }).finally(() => {
      setIsUpdatingAgentOptions(false);
    });
  };
  const handleAgentOptionsChange = (value) => {
    setFormData(__spreadProps(__spreadValues({}, formData), { agentOptions: value }));
  };
  return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Agent options configure Fleet's agent (fleetd). When you update agent options, they will be applied the next time a host checks in to Fleet.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/learn-more-about/agent-options",
          text: "Learn more about agent options",
          newTab: true,
          multiline: true
        }
      ))
    }
  ), isFetchingTeamOptions ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, null) : /* @__PURE__ */ react.createElement(
    "form",
    {
      className: `${baseClass}__form`,
      onSubmit: onFormSubmit,
      autoComplete: "off"
    },
    /* @__PURE__ */ react.createElement(
      YamlAce/* default */.A,
      {
        wrapperClassName: `${baseClass}__text-editor-wrapper`,
        onChange: handleAgentOptionsChange,
        name: "agentOptions",
        value: agentOptions,
        parseTarget: true,
        error: formErrors.agent_options,
        label: "YAML",
        disabled: gitOpsModeEnabled
      }
    ),
    /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            disabled: disableChildren,
            className: "save-loading",
            isLoading: isUpdatingAgentOptions
          },
          "Save"
        )
      }
    )
  ));
};
/* harmony default export */ var AgentOptionsPage_AgentOptionsPage = (AgentOptionsPage);

;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/AgentOptionsPage/index.ts




/***/ }),

/***/ 59104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ TeamSettings_TeamSettings; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/ConfirmDataCollectionDisableModal/index.ts + 1 modules
var ConfirmDataCollectionDisableModal = __webpack_require__(14431);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_url/valid_url.ts
var valid_url = __webpack_require__(90879);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/pages/admin/components/HostStatusWebhookPreviewModal/index.ts + 1 modules
var HostStatusWebhookPreviewModal = __webpack_require__(35092);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/TeamSettings/components/HistoricalDataTeamControls/HistoricalDataTeamControls.tsx





const HistoricalDataTeamControls = ({
  disableHostsActive,
  disableVulnerabilities,
  globalHostsActiveDisabled,
  globalVulnerabilitiesDisabled,
  onChange
}) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Activity & data retention" }), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren || globalHostsActiveDisabled,
          onChange,
          name: "disableHostsActive",
          value: disableHostsActive,
          parseTarget: true,
          labelTooltipContent: globalHostsActiveDisabled ? "Disabled globally" : !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, Mesh stops collecting hosts online data for this fleet's contribution to the dashboard chart.")
        },
        "Disable hosts online historical reporting"
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren || globalVulnerabilitiesDisabled,
          onChange,
          name: "disableVulnerabilities",
          value: disableVulnerabilities,
          parseTarget: true,
          labelTooltipContent: globalVulnerabilitiesDisabled ? "Disabled globally" : !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, Mesh stops collecting vulnerability exposure data for this fleet's contribution to the dashboard chart.")
        },
        "Disable vulnerability exposure historical reporting"
      )
    }
  ));
};
/* harmony default export */ var HistoricalDataTeamControls_HistoricalDataTeamControls = (HistoricalDataTeamControls);

;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/TeamSettings/components/HistoricalDataTeamControls/index.ts



// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/TeamSettings/components/TeamHostExpiryToggle/TeamHostExpiryToggle.tsx





const baseClass = "team-host-expiry-toggle";
const TeamHostExpiryToggle = ({
  globalHostExpiryEnabled,
  globalHostExpiryWindow,
  teamExpiryEnabled,
  setTeamExpiryEnabled,
  gitopsModeEnabled
}) => {
  const renderHelpText = () => (
    // this will never be rendered while globalHostExpiryWindow is undefined
    globalHostExpiryEnabled ? /* @__PURE__ */ react.createElement("div", { className: "help-text" }, "Host expiry is globally enabled in organization settings. By default, hosts expire after ", globalHostExpiryWindow, " days.", " ", !teamExpiryEnabled && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: (e) => {
          e.preventDefault();
          setTeamExpiryEnabled(true);
        },
        className: `${baseClass}__add-custom-window`,
        variant: "subdued",
        size: "small"
      },
      /* @__PURE__ */ react.createElement(react.Fragment, null, "Add custom expiry window", /* @__PURE__ */ react.createElement(
        Icon/* default */.A,
        {
          name: "chevron-right",
          color: "ui-fleet-black-75",
          size: "small"
        }
      ))
    )) : /* @__PURE__ */ react.createElement(react.Fragment, null)
  );
  return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}` }, /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      name: "enableHostExpiry",
      onChange: setTeamExpiryEnabled,
      value: teamExpiryEnabled || globalHostExpiryEnabled,
      disabled: globalHostExpiryEnabled || gitopsModeEnabled,
      helpText: renderHelpText(),
      labelTooltipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, allows automatic cleanup of hosts that have not communicated with Mesh in the number of days specified in the", " ", /* @__PURE__ */ react.createElement("strong", null, "Host expiry window"), " setting.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "Off"), ")"))
    },
    "Enable host expiry"
  ));
};
/* harmony default export */ var TeamHostExpiryToggle_TeamHostExpiryToggle = (TeamHostExpiryToggle);

;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/TeamSettings/components/TeamHostExpiryToggle/index.ts



;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/TeamSettings/TeamSettings.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





















const TeamSettings_baseClass = "team-settings";
const HOST_EXPIRY_ERROR_TEXT = "Host expiry window must be a positive number.";
const validateTeamSettingsFormData = (curGlobalHostExpiryEnabled = false, curFormData) => {
  const errors = {};
  const numHostExpiryWindow = Number(curFormData.teamHostExpiryWindow);
  if (
    // with no global setting, team window can't be empty if enabled
    !curGlobalHostExpiryEnabled && curFormData.teamHostExpiryEnabled && !numHostExpiryWindow || // if nonempty, must be a positive number
    isNaN(numHostExpiryWindow) || // if overriding a global setting, can be empty to disable local setting
    numHostExpiryWindow < 0
  ) {
    errors.host_expiry_window = HOST_EXPIRY_ERROR_TEXT;
  }
  if (curFormData.teamHostStatusWebhookEnabled) {
    if (!(0,valid_url/* default */.A)({ url: curFormData.teamHostStatusWebhookDestinationUrl })) {
      const errorPrefix = curFormData.teamHostStatusWebhookDestinationUrl ? `${curFormData.teamHostStatusWebhookDestinationUrl} is not` : "Please enter";
      errors.host_status_webhook_destination_url = `${errorPrefix} a valid webhook destination URL`;
    }
  }
  return errors;
};
const TeamSettings = ({ location, router }) => {
  var _a, _b, _c, _d, _e, _f;
  const [formData, setFormData] = (0,react.useState)({
    teamHostExpiryEnabled: false,
    teamHostExpiryWindow: "",
    teamHostStatusWebhookEnabled: false,
    teamHostStatusWebhookDestinationUrl: "",
    teamHostStatusWebhookHostPercentage: 1,
    teamHostStatusWebhookWindow: 1,
    disableHostsActive: false,
    disableVulnerabilities: false
  });
  const [originalDisable, setOriginalDisable] = (0,react.useState)({
    disableHostsActive: false,
    disableVulnerabilities: false
  });
  const [confirmModalOpen, setConfirmModalOpen] = (0,react.useState)(false);
  const [isInitialTeamConfig, setIsInitialTeamConfig] = (0,react.useState)(true);
  const [
    percentageHostsDropdownOptions,
    setPercentageHostsDropdownOptions
  ] = (0,react.useState)([]);
  const [windowDropdownOptions, setWindowDropdownOptions] = (0,react.useState)([]);
  const [updatingTeamSettings, setUpdatingTeamSettings] = (0,react.useState)(false);
  const [formErrors, setFormErrors] = (0,react.useState)(
    {}
  );
  const [
    showHostStatusWebhookPreviewModal,
    setShowHostStatusWebhookPreviewModal
  ] = (0,react.useState)(false);
  const toggleHostStatusWebhookPreviewModal = () => {
    setShowHostStatusWebhookPreviewModal(!showHostStatusWebhookPreviewModal);
  };
  const { isRouteOk, teamIdForApi } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: false,
    includeNoTeam: false,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: false,
      observer: false,
      observer_plus: false,
      technician: false
    }
  });
  const {
    data: appConfig,
    isLoading: isLoadingAppConfig,
    error: errorLoadGlobalConfig
  } = (0,es.useQuery)(
    ["globalConfig"],
    () => config/* default */.A.loadAll(),
    { refetchOnWindowFocus: false }
  );
  const {
    host_expiry_settings: {
      host_expiry_enabled: globalHostExpiryEnabled,
      host_expiry_window: globalHostExpiryWindow
    },
    gitops: { gitops_mode_enabled: gitopsModeEnabled }
  } = appConfig != null ? appConfig : { host_expiry_settings: {}, gitops: {} };
  const globalHostsActiveDisabled = !((_c = (_b = (_a = appConfig == null ? void 0 : appConfig.features) == null ? void 0 : _a.historical_data) == null ? void 0 : _b.uptime) != null ? _c : true);
  const globalVulnerabilitiesDisabled = !((_f = (_e = (_d = appConfig == null ? void 0 : appConfig.features) == null ? void 0 : _d.historical_data) == null ? void 0 : _e.vulnerabilities) != null ? _f : true);
  const {
    data: teamConfig,
    isLoading: isLoadingTeamConfig,
    refetch: refetchTeamConfig,
    error: errorLoadTeamConfig
  } = (0,es.useQuery)(
    ["teamConfig", teamIdForApi],
    () => teams/* default */.A.load(teamIdForApi),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isRouteOk && !!teamIdForApi,
      select: (data) => data.team,
      onSuccess: (tC) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
        const teamHistoricalData = (_a2 = tC == null ? void 0 : tC.features) == null ? void 0 : _a2.historical_data;
        const disableHostsActive = teamHistoricalData ? !teamHistoricalData.uptime : false;
        const disableVulnerabilities = teamHistoricalData ? !teamHistoricalData.vulnerabilities : false;
        setFormData({
          // host expiry settings
          teamHostExpiryEnabled: (_c2 = (_b2 = tC == null ? void 0 : tC.host_expiry_settings) == null ? void 0 : _b2.host_expiry_enabled) != null ? _c2 : false,
          teamHostExpiryWindow: (_e2 = (_d2 = tC == null ? void 0 : tC.host_expiry_settings) == null ? void 0 : _d2.host_expiry_window) != null ? _e2 : "",
          // host status webhook settings
          teamHostStatusWebhookEnabled: (_h = (_g = (_f2 = tC == null ? void 0 : tC.webhook_settings) == null ? void 0 : _f2.host_status_webhook) == null ? void 0 : _g.enable_host_status_webhook) != null ? _h : false,
          teamHostStatusWebhookDestinationUrl: (_k = (_j = (_i = tC == null ? void 0 : tC.webhook_settings) == null ? void 0 : _i.host_status_webhook) == null ? void 0 : _j.destination_url) != null ? _k : "",
          teamHostStatusWebhookHostPercentage: (_n = (_m = (_l = tC == null ? void 0 : tC.webhook_settings) == null ? void 0 : _l.host_status_webhook) == null ? void 0 : _m.host_percentage) != null ? _n : 1,
          teamHostStatusWebhookWindow: (_q = (_p = (_o = tC == null ? void 0 : tC.webhook_settings) == null ? void 0 : _o.host_status_webhook) == null ? void 0 : _p.days_count) != null ? _q : 1,
          disableHostsActive,
          disableVulnerabilities
        });
        setOriginalDisable({ disableHostsActive, disableVulnerabilities });
      }
    })
  );
  (0,react.useEffect)(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2;
    if (isInitialTeamConfig) {
      setPercentageHostsDropdownOptions(
        (0,helpers/* getCustomDropdownOptions */.fj)(
          constants/* HOST_STATUS_WEBHOOK_HOST_PERCENTAGE_DROPDOWN_OPTIONS */.XL,
          (_c2 = (_b2 = (_a2 = teamConfig == null ? void 0 : teamConfig.webhook_settings) == null ? void 0 : _a2.host_status_webhook) == null ? void 0 : _b2.host_percentage) != null ? _c2 : 1,
          (val) => `${val}%`
        )
      );
      setWindowDropdownOptions(
        (0,helpers/* getCustomDropdownOptions */.fj)(
          constants/* HOST_STATUS_WEBHOOK_WINDOW_DROPDOWN_OPTIONS */.KH,
          (_f2 = (_e2 = (_d2 = teamConfig == null ? void 0 : teamConfig.webhook_settings) == null ? void 0 : _d2.host_status_webhook) == null ? void 0 : _e2.days_count) != null ? _f2 : 1,
          (val) => `${val} day${val !== 1 ? "s" : ""}`
        )
      );
    }
  }, [teamConfig]);
  const onInputChange = (0,react.useCallback)(
    (newVal) => {
      const { name, value } = newVal;
      const newFormData = __spreadProps(__spreadValues({}, formData), { [name]: value });
      setFormData(newFormData);
      setFormErrors((prev) => {
        const next = validateTeamSettingsFormData(
          globalHostExpiryEnabled,
          newFormData
        );
        if (!prev.host_status_webhook_destination_url) {
          delete next.host_status_webhook_destination_url;
        }
        return next;
      });
    },
    [formData, globalHostExpiryEnabled]
  );
  const onHostStatusWebhookUrlBlur = () => {
    setFormErrors(
      validateTeamSettingsFormData(globalHostExpiryEnabled, formData)
    );
  };
  const datasetsBeingDisabled = (0,react.useMemo)(() => {
    const list = [];
    if (!originalDisable.disableHostsActive && formData.disableHostsActive && !globalHostsActiveDisabled) {
      list.push("uptime");
    }
    if (!originalDisable.disableVulnerabilities && formData.disableVulnerabilities && !globalVulnerabilitiesDisabled) {
      list.push("vulnerabilities");
    }
    return list;
  }, [
    originalDisable,
    formData.disableHostsActive,
    formData.disableVulnerabilities,
    globalHostsActiveDisabled,
    globalVulnerabilitiesDisabled
  ]);
  const performSave = (0,react.useCallback)(() => {
    setUpdatingTeamSettings(true);
    const castedHostExpiryWindow = Number(formData.teamHostExpiryWindow);
    let enableHostExpiry;
    if (globalHostExpiryEnabled) {
      if (!castedHostExpiryWindow) {
        enableHostExpiry = false;
      } else {
        enableHostExpiry = formData.teamHostExpiryEnabled;
      }
    } else {
      enableHostExpiry = formData.teamHostExpiryEnabled;
    }
    teams/* default */.A.update(
      {
        host_expiry_settings: {
          host_expiry_enabled: enableHostExpiry,
          host_expiry_window: castedHostExpiryWindow
        },
        webhook_settings: {
          host_status_webhook: {
            enable_host_status_webhook: formData.teamHostStatusWebhookEnabled,
            destination_url: formData.teamHostStatusWebhookDestinationUrl,
            host_percentage: formData.teamHostStatusWebhookHostPercentage,
            days_count: formData.teamHostStatusWebhookWindow
          }
        },
        features: {
          historical_data: {
            uptime: !formData.disableHostsActive,
            vulnerabilities: !formData.disableVulnerabilities
          }
        }
      },
      teamIdForApi
    ).then(() => {
      ToastNotification/* notify */.me.success("Successfully updated settings.");
      refetchTeamConfig();
      setIsInitialTeamConfig(false);
      setConfirmModalOpen(false);
    }).catch((errorResponse) => {
      ToastNotification/* notify */.me.error(
        `Could not update fleet settings. ${errorResponse.data.errors[0].reason}`,
        { response: errorResponse }
      );
    }).finally(() => {
      setUpdatingTeamSettings(false);
    });
  }, [formData, globalHostExpiryEnabled, refetchTeamConfig, teamIdForApi]);
  const updateTeamSettings = (0,react.useCallback)(
    (evt) => {
      evt.preventDefault();
      const errors = validateTeamSettingsFormData(
        globalHostExpiryEnabled,
        formData
      );
      setFormErrors(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      if (datasetsBeingDisabled.length > 0) {
        setConfirmModalOpen(true);
        return;
      }
      performSave();
    },
    [datasetsBeingDisabled, performSave, globalHostExpiryEnabled, formData]
  );
  const renderForm = () => {
    if (errorLoadGlobalConfig || errorLoadTeamConfig) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    if (isLoadingTeamConfig || isLoadingAppConfig) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement("form", { onSubmit: updateTeamSettings }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Webhook settings" }), /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        name: "teamHostStatusWebhookEnabled",
        onChange: ({ name: n, value: v }) => onInputChange({ name: n, value: v }),
        parseTarget: true,
        value: formData.teamHostStatusWebhookEnabled,
        helpText: `This will trigger webhooks specific to this fleet, separate from the global host status webhook.`,
        labelTooltipContent: "Send an alert if a portion of your hosts go offline.",
        disabled: gitopsModeEnabled
      },
      "Enable host status webhook"
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "secondary",
        onClick: toggleHostStatusWebhookPreviewModal
      },
      "Preview request"
    ), formData.teamHostStatusWebhookEnabled && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        placeholder: "https://server.com/example",
        label: "Host status webhook destination URL",
        onChange: onInputChange,
        name: "teamHostStatusWebhookDestinationUrl",
        value: formData.teamHostStatusWebhookDestinationUrl,
        parseTarget: true,
        onBlur: onHostStatusWebhookUrlBlur,
        error: formErrors.host_status_webhook_destination_url,
        disabled: gitopsModeEnabled,
        tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Provide a URL to deliver the webhook request to.")
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        label: "Host status webhook %",
        options: percentageHostsDropdownOptions,
        onChange: onInputChange,
        name: "teamHostStatusWebhookHostPercentage",
        value: formData.teamHostStatusWebhookHostPercentage,
        parseTarget: true,
        searchable: false,
        disabled: gitopsModeEnabled,
        tooltip: /* @__PURE__ */ react.createElement("p", null, "Select the minimum percentage of hosts that", /* @__PURE__ */ react.createElement("br", null), "must fail to check into Mesh in order to trigger", /* @__PURE__ */ react.createElement("br", null), "the webhook request.")
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        label: "Host status webhook window",
        options: windowDropdownOptions,
        onChange: onInputChange,
        name: "teamHostStatusWebhookWindow",
        value: formData.teamHostStatusWebhookWindow,
        parseTarget: true,
        disabled: gitopsModeEnabled,
        searchable: false,
        tooltip: /* @__PURE__ */ react.createElement("p", null, "Select the minimum number of days that the", /* @__PURE__ */ react.createElement("br", null), "configured ", /* @__PURE__ */ react.createElement("b", null, "Percentage of hosts"), " must fail to", /* @__PURE__ */ react.createElement("br", null), "check into Mesh in order to trigger the", /* @__PURE__ */ react.createElement("br", null), "webhook request.")
      }
    )), /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Host expiry settings" }), globalHostExpiryEnabled !== void 0 && /* @__PURE__ */ react.createElement(
      TeamHostExpiryToggle_TeamHostExpiryToggle,
      {
        globalHostExpiryEnabled,
        globalHostExpiryWindow,
        teamExpiryEnabled: formData.teamHostExpiryEnabled,
        setTeamExpiryEnabled: (isEnabled) => onInputChange({ name: "teamHostExpiryEnabled", value: isEnabled }),
        gitopsModeEnabled
      }
    ), formData.teamHostExpiryEnabled && /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Host expiry window",
        type: "text",
        onChange: onInputChange,
        parseTarget: true,
        name: "teamHostExpiryWindow",
        value: formData.teamHostExpiryWindow,
        error: formErrors.host_expiry_window,
        disabled: gitopsModeEnabled
      }
    ), /* @__PURE__ */ react.createElement(
      HistoricalDataTeamControls_HistoricalDataTeamControls,
      {
        disableHostsActive: formData.disableHostsActive,
        disableVulnerabilities: formData.disableVulnerabilities,
        globalHostsActiveDisabled,
        globalVulnerabilitiesDisabled,
        onChange: ({ name, value }) => onInputChange({ name, value })
      }
    ), /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            className: "button-wrap",
            isLoading: updatingTeamSettings,
            disabled: Object.keys(formErrors).length > 0 || disableChildren
          },
          "Save"
        )
      }
    ));
  };
  return /* @__PURE__ */ react.createElement("section", { className: `${TeamSettings_baseClass}` }, renderForm(), showHostStatusWebhookPreviewModal && /* @__PURE__ */ react.createElement(
    HostStatusWebhookPreviewModal/* default */.A,
    {
      toggleModal: toggleHostStatusWebhookPreviewModal,
      isTeamScope: true
    }
  ), confirmModalOpen && /* @__PURE__ */ react.createElement(
    ConfirmDataCollectionDisableModal/* default */.A,
    {
      scope: "fleet",
      datasets: datasetsBeingDisabled,
      fleetName: teamConfig == null ? void 0 : teamConfig.name,
      isUpdating: updatingTeamSettings,
      onConfirm: performSave,
      onCancel: () => setConfirmModalOpen(false)
    }
  ));
};
/* harmony default export */ var TeamSettings_TeamSettings = (TeamSettings);

;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/TeamSettings/index.ts




/***/ }),

/***/ 36813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ UsersPage_UsersPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/UserForm/index.ts
var UserForm = __webpack_require__(98148);
;// ./frontend/pages/admin/ManageUsersPage/components/AddUserModal/AddUserModal.tsx




const baseClass = "add-user-modal";
const AddUserModal = ({
  onCancel,
  onSubmit,
  currentTeam,
  defaultGlobalRole,
  defaultTeamRole,
  defaultTeams,
  availableTeams,
  isPremiumTier,
  smtpConfigured,
  sesConfigured,
  canUseSso,
  isModifiedByGlobalAdmin,
  isUpdatingUsers,
  addUserErrors
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Add user",
      onExit: onCancel,
      className: baseClass,
      width: "large"
    },
    /* @__PURE__ */ react.createElement(
      UserForm/* default */.A,
      {
        serverErrors: addUserErrors,
        defaultGlobalRole,
        defaultTeamRole,
        defaultTeams,
        onCancel,
        onSubmit,
        availableTeams: availableTeams || [],
        isPremiumTier,
        smtpConfigured,
        sesConfigured,
        canUseSso,
        isModifiedByGlobalAdmin,
        currentTeam,
        isNewUser: true,
        isUpdatingUsers
      }
    )
  );
};
/* harmony default export */ var AddUserModal_AddUserModal = (AddUserModal);

;// ./frontend/pages/admin/ManageUsersPage/components/AddUserModal/index.ts



// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/invites.ts
var invites = __webpack_require__(63494);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var entities_teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var users = __webpack_require__(7176);
;// ./frontend/pages/admin/ManageUsersPage/components/EditUserModal/EditUserModal.tsx




const EditUserModal_baseClass = "edit-user-modal";
const EditUserModal = ({
  onCancel,
  onSubmit,
  defaultName,
  defaultEmail,
  defaultGlobalRole,
  defaultTeamRole,
  defaultTeams,
  availableTeams,
  isPremiumTier,
  smtpConfigured,
  sesConfigured,
  canUseSso,
  isSsoEnabled,
  isMfaEnabled,
  isApiOnly,
  currentTeam,
  editUserErrors,
  isModifiedByGlobalAdmin,
  isInvitePending,
  isUpdatingUsers
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Edit user",
      onExit: onCancel,
      className: `${EditUserModal_baseClass}__edit-user-modal`
    },
    /* @__PURE__ */ react.createElement(
      UserForm/* default */.A,
      {
        serverErrors: editUserErrors,
        defaultName,
        defaultEmail,
        defaultGlobalRole,
        defaultTeamRole,
        defaultTeams,
        onCancel,
        onSubmit,
        availableTeams,
        isPremiumTier,
        smtpConfigured,
        sesConfigured,
        canUseSso,
        isSsoEnabled,
        isMfaEnabled,
        isApiOnly,
        isModifiedByGlobalAdmin,
        isInvitePending,
        currentTeam,
        isUpdatingUsers
      }
    )
  );
};
/* harmony default export */ var EditUserModal_EditUserModal = (EditUserModal);

;// ./frontend/pages/admin/ManageUsersPage/components/EditUserModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/UserForm/UserForm.tsx + 2 modules
var UserForm_UserForm = __webpack_require__(15815);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/helpers/userManagementHelpers.ts
var userManagementHelpers = __webpack_require__(55308);
;// ./frontend/pages/admin/ManageUsersPage/helpers/index.ts



// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.es.js
var react_select_es = __webpack_require__(92016);
// EXTERNAL MODULE: ./frontend/utilities/auth_token/index.ts + 1 modules
var auth_token = __webpack_require__(47936);
// EXTERNAL MODULE: ./frontend/utilities/debounce/index.ts
var debounce = __webpack_require__(14332);
// EXTERNAL MODULE: ./frontend/utilities/permissions/index.ts
var permissions = __webpack_require__(65913);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/UsersPage/components/AutocompleteDropdown/AutocompleteDropdown.tsx







const AutocompleteDropdown_baseClass = "autocomplete-dropdown";
const debounceOptions = {
  timeout: 300,
  leading: false,
  trailing: true
};
const createUrl = (baseUrl, input) => {
  return `/api${baseUrl}?query=${input}`;
};
const generateOptionLabel = (user, team) => {
  var _a;
  const userTeamIds = user.teams.map((currentTeam) => currentTeam.id);
  if (permissions/* default */.A.isOnGlobalTeam(user)) {
    return `${user.name} - Global user`;
  } else if (userTeamIds.includes(team.id)) {
    const teamName = (_a = user.teams.find(
      (currentTeam) => currentTeam.id === team.id
    )) == null ? void 0 : _a.name;
    return `${user.name} - Already has access to ${teamName}`;
  }
  return user.name;
};
const AutocompleteDropdown = ({
  className,
  disabled,
  disabledOptions,
  autoFocus,
  placeholder,
  onChange,
  id,
  resourceUrl,
  value,
  team
}) => {
  const wrapperClass = classnames_default()(AutocompleteDropdown_baseClass, className);
  const filterOptions = (0,react.useCallback)((options) => {
    return options;
  }, []);
  const createDropdownOptions = (users) => {
    return users.map((user) => {
      return {
        value: user.id,
        label: generateOptionLabel(user, team),
        disabled: disabledOptions.includes(user.id) || user.global_role !== null
      };
    });
  };
  const getOptions = (0,debounce/* default */.A)((input, callback) => {
    if (!input) {
      return callback([]);
    }
    fetch(createUrl(resourceUrl, input), {
      headers: {
        authorization: `Bearer ${auth_token/* default */.A.get()}`
      }
    }).then((res) => {
      return res.json();
    }).then((json) => {
      const optionsData = createDropdownOptions(json.users);
      callback(null, { options: optionsData });
    }).catch((err) => {
      console.log("There was an error", err);
    });
  }, debounceOptions);
  return /* @__PURE__ */ react.createElement("div", { className: wrapperClass }, /* @__PURE__ */ react.createElement(
    react_select_es/* Async */.jg,
    {
      noResultsText: "Nothing found",
      autoload: false,
      cache: false,
      id,
      loadOptions: getOptions,
      disabled,
      placeholder,
      onChange,
      value,
      filterOptions,
      multi: true,
      searchable: true,
      autoFocus
    }
  ));
};
/* harmony default export */ var AutocompleteDropdown_AutocompleteDropdown = (AutocompleteDropdown);

;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/UsersPage/components/AutocompleteDropdown/index.ts



// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/UsersPage/components/AddUsersModal/AddUsersModal.tsx






const AddUsersModal_baseClass = "add-user-modal";
const AddUsersModal = ({
  disabledUsers,
  onCancel,
  onSubmit,
  onCreateNewTeamUser,
  team
}) => {
  const [selectedUsers, setSelectedUsers] = (0,react.useState)([]);
  const onChangeDropdown = (0,react.useCallback)(
    (values) => {
      setSelectedUsers(values);
    },
    [setSelectedUsers]
  );
  const onFormSubmit = (0,react.useCallback)(() => {
    const newUsers = selectedUsers.map(
      (user) => {
        return { id: user.value, role: "observer" };
      }
    );
    onSubmit({ users: newUsers });
  }, [selectedUsers, onSubmit]);
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { onExit: onCancel, title: "Add users", className: AddUsersModal_baseClass }, /* @__PURE__ */ react.createElement("form", { className: `${AddUsersModal_baseClass}__form` }, /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("label", { className: "form-field__label", htmlFor: "user-autocomplete" }, "Grant users access to this fleet"), /* @__PURE__ */ react.createElement(
    AutocompleteDropdown_AutocompleteDropdown,
    {
      team,
      id: "user-autocomplete",
      resourceUrl: endpoints/* default */.A.USERS,
      onChange: onChangeDropdown,
      placeholder: "Search users by name",
      disabledOptions: disabledUsers,
      value: selectedUsers,
      autoFocus: true
    }
  )), /* @__PURE__ */ react.createElement("p", null, "User not here?\xA0", /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCreateNewTeamUser, variant: "link" }, "Add a user")), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      disabled: selectedUsers.length === 0,
      type: "button",
      onClick: onFormSubmit
    },
    "Add users"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var AddUsersModal_AddUsersModal = (AddUsersModal);

// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/UsersPage/components/EmptyUsersTable.tsx







const infoLink = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: paths/* default */.A.ADMIN_USERS, text: "Global users" }), " can still access this fleet.");
const CreateUserButton = ({
  className,
  isGlobalAdmin,
  isTeamAdmin,
  toggleAddUserModal,
  toggleCreateMemberModal,
  disabled = false
}) => {
  if (!isGlobalAdmin && !isTeamAdmin) {
    return null;
  }
  if (isGlobalAdmin) {
    return /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${className}__create-button`,
        onClick: toggleAddUserModal,
        disabled
      },
      "Add user"
    );
  }
  return /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${className}__create-button`,
      onClick: toggleCreateMemberModal,
      disabled
    },
    "Add user"
  );
};
const EmptyMembersTable = ({
  className,
  isGlobalAdmin,
  isTeamAdmin,
  searchString,
  toggleAddUserModal,
  toggleCreateMemberModal
}) => {
  if (searchString !== "") {
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        header: "No users match the current criteria",
        info: "Expecting to see users? Try again in a few seconds as the system catches up."
      }
    );
  }
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "No users on this fleet",
      info: infoLink,
      primaryButton: /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          tipOffset: 8,
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            CreateUserButton,
            {
              className,
              isGlobalAdmin,
              isTeamAdmin,
              toggleAddUserModal,
              toggleCreateMemberModal,
              disabled: disableChildren
            }
          )
        }
      )
    }
  );
};
/* harmony default export */ var EmptyUsersTable = (EmptyMembersTable);

;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/UsersPage/components/RemoveUserModal/RemoveUserModal.tsx




const RemoveUserModal_baseClass = "remove-user-modal";
const RemoveUserModal = ({
  userName,
  teamName,
  isUpdatingUsers,
  onSubmit,
  onCancel
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Remove user",
      onExit: onCancel,
      onEnter: onSubmit,
      className: RemoveUserModal_baseClass
    },
    /* @__PURE__ */ react.createElement("p", null, "You are about to remove", " ", /* @__PURE__ */ react.createElement("span", { className: `${RemoveUserModal_baseClass}__name` }, userName), " from", " ", /* @__PURE__ */ react.createElement("span", { className: `${RemoveUserModal_baseClass}__team-name` }, teamName), "."),
    /* @__PURE__ */ react.createElement("p", null, "If ", userName, " is not assigned to any other fleet, they will lose access."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: onSubmit,
        className: "remove-loading",
        isLoading: isUpdatingUsers
      },
      "Remove"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var RemoveUserModal_RemoveUserModal = (RemoveUserModal);

// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/TextCell.tsx
var TextCell = __webpack_require__(3728);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TooltipTruncatedTextCell/index.ts + 1 modules
var TooltipTruncatedTextCell = __webpack_require__(16240);
// EXTERNAL MODULE: ./frontend/components/Tag/index.ts + 1 modules
var Tag = __webpack_require__(42619);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/utilities/strings/index.ts
var strings = __webpack_require__(12031);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/UsersPage/UsersPageTableConfig.tsx










const renderApiUserIndicator = () => {
  return /* @__PURE__ */ react.createElement(
    Tag/* default */.A,
    {
      tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "This user was created using fleetctl and", /* @__PURE__ */ react.createElement("br", null), " only has API access.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          newTab: true,
          url: "https://fleetdm.com/docs/using-fleet/fleetctl-cli#using-fleetctl-with-an-api-only-user",
          variant: "tooltip-link"
        }
      )),
      size: "xsmall"
    },
    "API"
  );
};
const generateColumnConfigs = (actionSelectHandler, currentUser) => {
  return [
    {
      title: "Name",
      Header: "Name",
      disableSortBy: true,
      sortType: "caseInsensitive",
      accessor: "name",
      Cell: (cellProps) => {
        const apiOnlyUser = "api_only" in cellProps.row.original ? cellProps.row.original.api_only : false;
        return /* @__PURE__ */ react.createElement(
          TooltipTruncatedTextCell/* default */.A,
          {
            value: cellProps.cell.value,
            suffix: apiOnlyUser && renderApiUserIndicator()
          }
        );
      }
    },
    {
      title: "Role",
      Header: "Role",
      disableSortBy: true,
      accessor: "role",
      Cell: (cellProps) => {
        if (cellProps.cell.value === "GitOps") {
          return /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The GitOps role is only available on the command-line", /* @__PURE__ */ react.createElement("br", null), "when creating an API-only user. This user has no", /* @__PURE__ */ react.createElement("br", null), "access to the UI.")
            },
            "GitOps"
          );
        }
        if (cellProps.cell.value === "Observer+") {
          return /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Users with the Observer+ role have access to all of", /* @__PURE__ */ react.createElement("br", null), "the same functions as an Observer, with the added", /* @__PURE__ */ react.createElement("br", null), "ability to run any live report against all hosts.")
            },
            cellProps.cell.value
          );
        }
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value });
      }
    },
    {
      title: "Email",
      Header: "Email",
      disableSortBy: true,
      accessor: "email",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { className: "w400", value: cellProps.cell.value })
    },
    {
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => {
        const rowUser = cellProps.row.original;
        const canManageUser = permissions/* default */.A.isAdminForAllUserTeams(
          currentUser,
          rowUser
        );
        const dropdown = /* @__PURE__ */ react.createElement(
          ActionsDropdown/* default */.A,
          {
            options: cellProps.cell.value,
            onChange: (value) => actionSelectHandler(value, rowUser),
            placeholder: "Actions",
            variant: "secondary",
            disabled: !canManageUser
          }
        );
        if (canManageUser) {
          return dropdown;
        }
        return /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            position: "top",
            showArrow: true,
            underline: false,
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "This user can't be managed because they're a member of other fleets you're not an admin of.")
          },
          dropdown
        );
      }
    }
  ];
};
const generateActionDropdownOptions = () => {
  return [
    {
      label: "Edit",
      disabled: false,
      value: "edit"
    },
    {
      label: "Remove",
      disabled: false,
      value: "remove"
    }
  ];
};
const generateRole = (teamId, teams) => {
  var _a, _b;
  const role = (_b = (_a = teams.find((team) => teamId === team.id)) == null ? void 0 : _a.role) != null ? _b : "Unassigned";
  return strings/* default */.A.capitalizeRole(role);
};
const enhanceUsersData = (teamId, users) => {
  return Object.values(users).map((user) => {
    return {
      name: user.name,
      email: user.email,
      role: generateRole(teamId, user.teams),
      teams: user.teams,
      sso_enabled: user.sso_enabled,
      mfa_enabled: user.mfa_enabled,
      global_role: user.global_role,
      actions: generateActionDropdownOptions(),
      id: user.id,
      api_only: user.api_only
    };
  });
};
const generateDataSet = (teamId, users) => {
  return [...enhanceUsersData(teamId, users)];
};


;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/UsersPage/UsersPage.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));























const UsersPage_baseClass = "team-users";
const noUsersClass = "no-team-users";
const UsersPage = ({ location, router }) => {
  var _a, _b, _c;
  const { config, currentUser, isGlobalAdmin, isPremiumTier } = (0,react.useContext)(
    app/* AppContext */.BR
  );
  const { isRouteOk, isTeamAdmin, teamIdForApi } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: false,
    includeNoTeam: false,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: false,
      observer: false,
      observer_plus: false,
      technician: false
    }
  });
  const smtpConfigured = ((_a = config == null ? void 0 : config.smtp_settings) == null ? void 0 : _a.configured) || false;
  const sesConfigured = ((_b = config == null ? void 0 : config.email) == null ? void 0 : _b.backend) === "ses" || false;
  const canUseSso = ((_c = config == null ? void 0 : config.sso_settings) == null ? void 0 : _c.enable_sso) || false;
  const [showAddUserModal, setShowAddUserModal] = (0,react.useState)(false);
  const [showRemoveUserModal, setShowRemoveUserModal] = (0,react.useState)(false);
  const [showEditUserModal, setShowEditUserModal] = (0,react.useState)(false);
  const [showCreateUserModal, setShowCreateUserModal] = (0,react.useState)(false);
  const [isUpdatingUsers, setIsUpdatingUsers] = (0,react.useState)(false);
  const [userEditing, setUserEditing] = (0,react.useState)();
  const [searchString, setSearchString] = (0,react.useState)("");
  const [addUserErrors, setAddUserErrors] = (0,react.useState)({});
  const [editUserErrors, setEditUserErrors] = (0,react.useState)({});
  const toggleAddUserModal = (0,react.useCallback)(() => {
    setShowAddUserModal(!showAddUserModal);
  }, [showAddUserModal, setShowAddUserModal]);
  const toggleRemoveUserModal = (0,react.useCallback)(
    (user) => {
      setShowRemoveUserModal(!showRemoveUserModal);
      user ? setUserEditing(user) : setUserEditing(void 0);
    },
    [showRemoveUserModal, setShowRemoveUserModal, setUserEditing]
  );
  const {
    data: teamUsers,
    isLoading: isLoadingUsers,
    error: loadingUsersError,
    refetch: refetchUsers
  } = (0,es.useQuery)(
    ["users", teamIdForApi, searchString],
    () => users/* default */.A.loadAll({ teamId: teamIdForApi, globalFilter: searchString }),
    {
      enabled: isRouteOk && !!teamIdForApi,
      select: (data) => generateDataSet(teamIdForApi || 0, data)
      // Note: `enabled` condition ensures that teamIdForApi will be defined here but TypeScript can't infer type assertion
    }
  );
  const {
    data: teams,
    isLoading: isLoadingTeams,
    error: loadingTeamsError
  } = (0,es.useQuery)(
    ["teams"],
    () => entities_teams/* default */.A.loadAll(),
    {
      enabled: isRouteOk,
      select: (data) => data.teams
    }
  );
  const currentTeamDetails = (0,react.useMemo)(
    () => teams == null ? void 0 : teams.find((team) => team.id === teamIdForApi),
    [teams, teamIdForApi]
  );
  const toggleEditUserModal = (0,react.useCallback)(
    (user) => {
      setShowEditUserModal(!showEditUserModal);
      user ? setUserEditing(user) : setUserEditing(void 0);
      setEditUserErrors({});
    },
    [showEditUserModal, setShowEditUserModal, setUserEditing]
  );
  const toggleCreateUserModal = (0,react.useCallback)(() => {
    setShowCreateUserModal(!showCreateUserModal);
    setShowAddUserModal(false);
  }, [showCreateUserModal, setShowCreateUserModal, setShowAddUserModal]);
  const onRemoveUserSubmit = (0,react.useCallback)(() => {
    const removedUsers = { users: [{ id: userEditing == null ? void 0 : userEditing.id }] };
    setIsUpdatingUsers(true);
    entities_teams/* default */.A.removeUsers(teamIdForApi, removedUsers).then(() => {
      ToastNotification/* notify */.me.success(`Successfully removed ${(userEditing == null ? void 0 : userEditing.name) || "user"}`);
      if (currentUser && currentUser.id === removedUsers.users[0].id) {
        window.location.href = paths/* default */.A.ROOT;
      }
    }).catch(() => ToastNotification/* notify */.me.error("Unable to remove users. Please try again.")).finally(() => {
      setIsUpdatingUsers(false);
      toggleRemoveUserModal();
      refetchUsers();
    });
  }, [
    userEditing == null ? void 0 : userEditing.id,
    userEditing == null ? void 0 : userEditing.name,
    teamIdForApi,
    currentUser,
    toggleRemoveUserModal,
    refetchUsers
  ]);
  const onAddUserSubmit = (0,react.useCallback)(
    (newUsers) => {
      entities_teams/* default */.A.addUsers(currentTeamDetails == null ? void 0 : currentTeamDetails.id, newUsers).then(() => {
        const count = newUsers.users.length;
        ToastNotification/* notify */.me.success(
          `${count} ${count === 1 ? "user" : "users"} successfully added to ${currentTeamDetails == null ? void 0 : currentTeamDetails.name}.`
        );
      }).catch(() => ToastNotification/* notify */.me.error("Could not add users. Please try again.")).finally(() => {
        toggleAddUserModal();
        refetchUsers();
      });
    },
    [
      currentTeamDetails == null ? void 0 : currentTeamDetails.id,
      currentTeamDetails == null ? void 0 : currentTeamDetails.name,
      toggleAddUserModal,
      refetchUsers
    ]
  );
  const onCreateUserSubmit = (formData) => {
    setIsUpdatingUsers(true);
    if (formData.newUserType === UserForm_UserForm/* NewUserType */.C.AdminInvited) {
      const requestData = __spreadProps(__spreadValues({}, formData), {
        invited_by: formData.currentUserId
      });
      delete requestData.currentUserId;
      delete requestData.newUserType;
      delete requestData.password;
      invites/* default */.A.create(requestData).then(() => {
        var _a2, _b2;
        const senderAddressMessage = ((_a2 = config == null ? void 0 : config.smtp_settings) == null ? void 0 : _a2.sender_address) ? ` from ${(_b2 = config == null ? void 0 : config.smtp_settings) == null ? void 0 : _b2.sender_address}` : "";
        ToastNotification/* notify */.me.success(
          `An invitation email was sent${senderAddressMessage} to ${formData.email}.`
        );
        refetchUsers();
        toggleCreateUserModal();
      }).catch((userErrors) => {
        const fieldErrors = userManagementHelpers/* default */.Ay.getUserFieldErrors(
          userErrors
        );
        if (fieldErrors) {
          setAddUserErrors(fieldErrors);
        } else {
          ToastNotification/* notify */.me.error("Could not invite user. Please try again.", {
            response: userErrors
          });
        }
      }).finally(() => {
        setIsUpdatingUsers(false);
      });
    } else {
      const requestData = __spreadValues({}, formData);
      delete requestData.currentUserId;
      delete requestData.newUserType;
      users/* default */.A.createUserWithoutInvitation(requestData).then(() => {
        ToastNotification/* notify */.me.success(`Successfully created ${requestData.name}.`);
        refetchUsers();
        toggleCreateUserModal();
      }).catch((userErrors) => {
        const fieldErrors = userManagementHelpers/* default */.Ay.getUserFieldErrors(
          userErrors
        );
        if (fieldErrors) {
          setAddUserErrors(fieldErrors);
        } else {
          ToastNotification/* notify */.me.error("Could not create user. Please try again.", {
            response: userErrors
          });
        }
      }).finally(() => {
        setIsUpdatingUsers(false);
      });
    }
  };
  const onEditUserSubmit = (0,react.useCallback)(
    (formData) => {
      const updatedAttrs = userManagementHelpers/* default */.Ay.generateUpdateData(
        userEditing,
        formData
      );
      setIsUpdatingUsers(true);
      const userName = userEditing == null ? void 0 : userEditing.name;
      userEditing && users/* default */.A.update(userEditing.id, updatedAttrs).then(() => {
        ToastNotification/* notify */.me.success(`Successfully edited ${userName || "user"}.`);
        if (currentUser && userEditing && currentUser.id === userEditing.id) {
          const selectedTeam = formData.teams.filter(
            (thisTeam) => thisTeam.id === teamIdForApi
          );
          if (selectedTeam && selectedTeam[0].role !== "admin") {
            window.location.href = paths/* default */.A.ROOT;
          }
        } else {
          refetchUsers();
        }
        toggleEditUserModal();
      }).catch((userErrors) => {
        const fieldErrors = userManagementHelpers/* default */.Ay.getUserFieldErrors(
          userErrors
        );
        if (fieldErrors) {
          setEditUserErrors(fieldErrors);
        } else {
          ToastNotification/* notify */.me.error(
            `Could not edit ${userName || "user"}. Please try again.`,
            { response: userErrors }
          );
        }
      }).finally(() => {
        setIsUpdatingUsers(false);
      });
    },
    [userEditing, currentUser, toggleEditUserModal, teamIdForApi, refetchUsers]
  );
  const onActionSelection = (0,react.useCallback)(
    (action, user) => {
      switch (action) {
        case "edit":
          toggleEditUserModal(user);
          break;
        case "remove":
          toggleRemoveUserModal(user);
          break;
        default:
      }
    },
    [toggleEditUserModal, toggleRemoveUserModal]
  );
  const renderUsersCount = (0,react.useCallback)(() => {
    if ((teamUsers == null ? void 0 : teamUsers.length) === 0 && searchString === "") {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "users", count: teamUsers == null ? void 0 : teamUsers.length });
  }, [teamUsers == null ? void 0 : teamUsers.length, searchString]);
  const columnConfigs = (0,react.useMemo)(
    () => generateColumnConfigs(onActionSelection, currentUser),
    [onActionSelection, currentUser]
  );
  if (!isRouteOk) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  const userIds = teamUsers ? teamUsers.map((user) => user.id) : [];
  return /* @__PURE__ */ react.createElement("div", { className: UsersPage_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Manage users with access to this fleet.", " ", isGlobalAdmin && /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: paths/* default */.A.ADMIN_USERS,
          text: "Manage users with global access here"
        }
      ))
    }
  ), loadingUsersError || loadingTeamsError || !currentTeamDetails && !isLoadingTeams && !isLoadingUsers ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      resultsTitle: "users",
      columnConfigs,
      data: teamUsers || [],
      isLoading: isLoadingUsers,
      defaultSortHeader: "name",
      defaultSortDirection: "asc",
      actionButton: {
        name: "add user",
        buttonText: isGlobalAdmin ? "Add users" : "Add user",
        variant: "secondary",
        iconSvg: "plus",
        iconPosition: "left",
        onClick: isGlobalAdmin ? toggleAddUserModal : toggleCreateUserModal,
        hideButton: userIds.length === 0 && searchString === ""
      },
      onQueryChange: ({ searchQuery }) => setSearchString(searchQuery),
      inputPlaceHolder: "Search",
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyUsersTable,
        {
          className: noUsersClass,
          isGlobalAdmin: !!isGlobalAdmin,
          isTeamAdmin: !!isTeamAdmin,
          searchString,
          toggleAddUserModal,
          toggleCreateMemberModal: toggleCreateUserModal
        }
      ),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      searchable: userIds.length > 0 || searchString !== "",
      renderCount: renderUsersCount
    }
  ), showAddUserModal && currentTeamDetails ? /* @__PURE__ */ react.createElement(
    AddUsersModal_AddUsersModal,
    {
      team: currentTeamDetails,
      disabledUsers: userIds,
      onCancel: toggleAddUserModal,
      onSubmit: onAddUserSubmit,
      onCreateNewTeamUser: toggleCreateUserModal
    }
  ) : null, showEditUserModal && /* @__PURE__ */ react.createElement(
    EditUserModal_EditUserModal,
    {
      editUserErrors,
      onCancel: toggleEditUserModal,
      onSubmit: onEditUserSubmit,
      defaultName: userEditing == null ? void 0 : userEditing.name,
      defaultEmail: userEditing == null ? void 0 : userEditing.email,
      defaultGlobalRole: (userEditing == null ? void 0 : userEditing.global_role) || null,
      defaultTeamRole: userEditing == null ? void 0 : userEditing.role,
      defaultTeams: userEditing == null ? void 0 : userEditing.teams,
      availableTeams: teams || [],
      isPremiumTier: isPremiumTier || false,
      smtpConfigured,
      sesConfigured,
      canUseSso,
      isSsoEnabled: userEditing == null ? void 0 : userEditing.sso_enabled,
      isMfaEnabled: userEditing == null ? void 0 : userEditing.mfa_enabled,
      isModifiedByGlobalAdmin: isGlobalAdmin,
      currentTeam: currentTeamDetails,
      isUpdatingUsers,
      isApiOnly: (userEditing == null ? void 0 : userEditing.api_only) || false
    }
  ), showCreateUserModal && currentTeamDetails && /* @__PURE__ */ react.createElement(
    AddUserModal_AddUserModal,
    {
      addUserErrors,
      onCancel: toggleCreateUserModal,
      onSubmit: onCreateUserSubmit,
      defaultGlobalRole: null,
      defaultTeamRole: "Observer",
      defaultTeams: [
        { id: currentTeamDetails.id, name: "", role: "observer" }
      ],
      availableTeams: teams,
      isPremiumTier: isPremiumTier || false,
      smtpConfigured,
      sesConfigured,
      canUseSso,
      currentTeam: currentTeamDetails,
      isModifiedByGlobalAdmin: isGlobalAdmin,
      isUpdatingUsers
    }
  ), showRemoveUserModal && currentTeamDetails && /* @__PURE__ */ react.createElement(
    RemoveUserModal_RemoveUserModal,
    {
      userName: (userEditing == null ? void 0 : userEditing.name) || "",
      teamName: currentTeamDetails.name,
      isUpdatingUsers,
      onCancel: toggleRemoveUserModal,
      onSubmit: onRemoveUserSubmit
    }
  ));
};
/* harmony default export */ var UsersPage_UsersPage = (UsersPage);


/***/ }),

/***/ 35533:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ TeamDetailsWrapper_TeamDetailsWrapper; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/ActionButtons/ActionButtons.tsx + 5 modules
var ActionButtons = __webpack_require__(93837);
// EXTERNAL MODULE: ./frontend/components/FleetsDropdown/index.tsx + 1 modules
var FleetsDropdown = __webpack_require__(82196);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/enroll_secret.ts + 1 modules
var enroll_secret = __webpack_require__(90295);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var entities_teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var users = __webpack_require__(7176);
// EXTERNAL MODULE: ./frontend/utilities/format_error_response/index.ts
var format_error_response = __webpack_require__(70938);
// EXTERNAL MODULE: ./frontend/utilities/sort/index.ts + 1 modules
var sort = __webpack_require__(81302);
// EXTERNAL MODULE: ./frontend/components/AddHostsModal/index.ts + 11 modules
var AddHostsModal = __webpack_require__(60819);
// EXTERNAL MODULE: ./frontend/components/EnrollSecrets/DeleteSecretModal/index.ts + 1 modules
var DeleteSecretModal = __webpack_require__(75273);
// EXTERNAL MODULE: ./frontend/components/EnrollSecrets/EnrollSecretModal/index.ts + 5 modules
var EnrollSecretModal = __webpack_require__(66654);
// EXTERNAL MODULE: ./frontend/components/EnrollSecrets/SecretEditorModal/index.ts + 1 modules
var SecretEditorModal = __webpack_require__(63022);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageFleetsPage/components/DeleteFleetModal/index.ts + 1 modules
var DeleteFleetModal = __webpack_require__(31531);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageFleetsPage/components/RenameFleetModal/index.ts + 1 modules
var RenameFleetModal = __webpack_require__(56506);
;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/TeamDetailsWrapper.tsx

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


























const baseClass = "team-details";
const teamDetailsSubNav = [
  {
    name: "Users",
    getPathname: paths/* default */.A.FLEET_DETAILS_USERS
  },
  {
    name: "Agent options",
    getPathname: paths/* default */.A.FLEET_DETAILS_OPTIONS
  },
  {
    name: "Settings",
    getPathname: paths/* default */.A.FLEET_DETAILS_SETTINGS
  }
];
const generateUpdateData = (currentTeam, formData) => {
  if (currentTeam.name !== formData.name) {
    return {
      name: formData.name
    };
  }
  return null;
};
const getTabIndex = (path, teamId) => {
  return teamDetailsSubNav.findIndex((navItem) => {
    return navItem.getPathname(teamId).includes(path);
  });
};
const TeamDetailsWrapper = ({
  router,
  children,
  location
}) => {
  var _a, _b;
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const {
    isGlobalAdmin,
    isPremiumTier,
    setAvailableTeams,
    setUserSettings,
    setCurrentUser,
    config
  } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    currentTeamId,
    currentTeamName,
    isAnyTeamSelected,
    isRouteOk,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: false,
    includeNoTeam: false,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: false,
      observer: false,
      observer_plus: false,
      technician: false
    }
  });
  const [selectedSecret, setSelectedSecret] = (0,react.useState)();
  const [showAddHostsModal, setShowAddHostsModal] = (0,react.useState)(false);
  const [
    showManageEnrollSecretsModal,
    setShowManageEnrollSecretsModal
  ] = (0,react.useState)(false);
  const [showDeleteSecretModal, setShowDeleteSecretModal] = (0,react.useState)(false);
  const [showEnrollSecretModal, setShowEnrollSecretModal] = (0,react.useState)(false);
  const [showSecretEditorModal, setShowSecretEditorModal] = (0,react.useState)(false);
  const [showDeleteFleetModal, setShowDeleteFleetModal] = (0,react.useState)(false);
  const [showRenameFleetModal, setShowRenameFleetModal] = (0,react.useState)(false);
  const [backendValidators, setBackendValidators] = (0,react.useState)({});
  const [isUpdatingTeams, setIsUpdatingTeams] = (0,react.useState)(false);
  const [isUpdatingSecret, setIsUpdatingSecret] = (0,react.useState)(false);
  const { refetch: refetchMe } = (0,es.useQuery)(["me"], () => users/* default */.A.me(), {
    enabled: false,
    onSuccess: ({ user, available_teams, settings }) => {
      setCurrentUser(user);
      setAvailableTeams(user, available_teams);
      setUserSettings(settings);
    }
  });
  const {
    data: teams,
    isLoading: isLoadingTeams,
    refetch: refetchTeams
  } = (0,es.useQuery)(
    ["teams"],
    () => entities_teams/* default */.A.loadAll(),
    {
      enabled: isRouteOk,
      select: (data) => data.teams.sort((a, b) => sort/* default */.A.caseInsensitiveAsc(a.name, b.name)),
      onSuccess: (responseTeams) => {
        if (!(responseTeams == null ? void 0 : responseTeams.find((team) => team.id === teamIdForApi))) {
          handlePageError({ status: 404 });
        }
      },
      onError: (error) => handlePageError(error)
    }
  );
  const currentTeamDetails = teams == null ? void 0 : teams.find((team) => team.id === teamIdForApi);
  const {
    isLoading: isTeamSecretsLoading,
    data: teamSecrets,
    refetch: refetchTeamSecrets
  } = (0,es.useQuery)(
    ["team secrets", teamIdForApi],
    () => {
      return enroll_secret/* default */.A.getTeamEnrollSecrets(teamIdForApi);
    },
    {
      enabled: isRouteOk,
      select: (data) => data.secrets
    }
  );
  const navigateToNav = (i) => {
    const navPath = teamDetailsSubNav[i].getPathname(teamIdForApi);
    router.push(navPath);
  };
  const toggleAddHostsModal = (0,react.useCallback)(() => {
    setShowAddHostsModal(!showAddHostsModal);
  }, [showAddHostsModal, setShowAddHostsModal]);
  const toggleManageEnrollSecretsModal = (0,react.useCallback)(() => {
    setShowManageEnrollSecretsModal(!showManageEnrollSecretsModal);
  }, [showManageEnrollSecretsModal, setShowManageEnrollSecretsModal]);
  const toggleDeleteSecretModal = (0,react.useCallback)(() => {
    setShowDeleteSecretModal(!showDeleteSecretModal);
    setShowEnrollSecretModal(!showEnrollSecretModal);
  }, [
    setShowDeleteSecretModal,
    showDeleteSecretModal,
    setShowEnrollSecretModal,
    showEnrollSecretModal
  ]);
  const toggleSecretEditorModal = (0,react.useCallback)(() => {
    setShowSecretEditorModal(!showSecretEditorModal);
    setShowEnrollSecretModal(!showEnrollSecretModal);
  }, [
    setShowSecretEditorModal,
    showSecretEditorModal,
    setShowEnrollSecretModal,
    showEnrollSecretModal
  ]);
  const toggleDeleteFleetModal = (0,react.useCallback)(() => {
    setShowDeleteFleetModal(!showDeleteFleetModal);
  }, [showDeleteFleetModal, setShowDeleteFleetModal]);
  const toggleRenameFleetModal = (0,react.useCallback)(() => {
    setShowRenameFleetModal(!showRenameFleetModal);
    setBackendValidators({});
  }, [showRenameFleetModal, setShowRenameFleetModal, setBackendValidators]);
  const onSaveSecret = (enrollSecretString) => __async(null, null, function* () {
    const currentSecrets = teamSecrets || [];
    const newSecrets = currentSecrets.filter(
      (s) => s.secret !== (selectedSecret == null ? void 0 : selectedSecret.secret)
    );
    if (enrollSecretString) {
      newSecrets.push({ secret: enrollSecretString });
    }
    setIsUpdatingSecret(true);
    try {
      yield enroll_secret/* default */.A.modifyTeamEnrollSecrets(teamIdForApi, newSecrets);
      refetchTeamSecrets();
      toggleSecretEditorModal();
      isPremiumTier && refetchTeams();
      ToastNotification/* notify */.me.success(
        `Successfully ${selectedSecret ? "edited" : "added"} enroll secret.`
      );
    } catch (error) {
      console.error(error);
      ToastNotification/* notify */.me.error(
        `Could not ${selectedSecret ? "edit" : "add"} enroll secret. Please try again.`,
        { response: error }
      );
    } finally {
      setIsUpdatingSecret(false);
    }
  });
  const onDeleteSecret = () => __async(null, null, function* () {
    const currentSecrets = teamSecrets || [];
    const newSecrets = currentSecrets.filter(
      (s) => s.secret !== (selectedSecret == null ? void 0 : selectedSecret.secret)
    );
    setIsUpdatingSecret(true);
    try {
      yield enroll_secret/* default */.A.modifyTeamEnrollSecrets(teamIdForApi, newSecrets);
      refetchTeamSecrets();
      toggleDeleteSecretModal();
      refetchTeams();
      ToastNotification/* notify */.me.success(`Successfully deleted enroll secret.`);
    } catch (error) {
      console.error(error);
      ToastNotification/* notify */.me.error("Could not delete enroll secret. Please try again.", {
        response: error
      });
    } finally {
      setIsUpdatingSecret(false);
    }
  });
  const onDeleteSubmit = (0,react.useCallback)(() => __async(null, null, function* () {
    if (!teamIdForApi) {
      return;
    }
    setIsUpdatingTeams(true);
    try {
      yield entities_teams/* default */.A.destroy(teamIdForApi);
      ToastNotification/* notify */.me.success(`Successfully deleted ${currentTeamName}.`);
      router.push(paths/* default */.A.ADMIN_FLEETS);
    } catch (response) {
      ToastNotification/* notify */.me.error("Something went wrong removing the fleet", { response });
      console.error(response);
    } finally {
      toggleDeleteFleetModal();
      setIsUpdatingTeams(false);
    }
  }), [teamIdForApi, currentTeamName, router, toggleDeleteFleetModal]);
  const onEditSubmit = (0,react.useCallback)(
    (formData) => __async(null, null, function* () {
      if (!currentTeamDetails) {
        return;
      }
      const updatedAttrs = generateUpdateData(currentTeamDetails, formData);
      if (!updatedAttrs) {
        toggleRenameFleetModal();
        return;
      }
      setIsUpdatingTeams(true);
      try {
        yield entities_teams/* default */.A.update(updatedAttrs, teamIdForApi);
        ToastNotification/* notify */.me.success(
          `Successfully updated fleet name to ${updatedAttrs == null ? void 0 : updatedAttrs.name}`
        );
        setBackendValidators({});
        refetchTeams();
        refetchMe();
        toggleRenameFleetModal();
      } catch (response) {
        console.error(response);
        const errorObject = (0,format_error_response/* default */.A)(response);
        if (errorObject.base.includes("Duplicate")) {
          setBackendValidators({
            name: `A fleet with this name already exists`
          });
        } else if (errorObject.base.includes("all teams")) {
          setBackendValidators({
            name: `"All fleets" is a reserved fleet name. Please try another name.`
          });
        } else if (errorObject.base.includes("no team")) {
          setBackendValidators({
            name: `"Unassigned" is a reserved fleet name. Please try another name.`
          });
        } else {
          ToastNotification/* notify */.me.error("Could not create fleet. Please try again.", {
            response
          });
        }
      } finally {
        setIsUpdatingTeams(false);
      }
    }),
    [
      currentTeamDetails,
      toggleRenameFleetModal,
      teamIdForApi,
      refetchTeams,
      refetchMe
    ]
  );
  if (!isRouteOk || isLoadingTeams || isTeamSecretsLoading || !(userTeams == null ? void 0 : userTeams.length) || currentTeamDetails === void 0) {
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__loading-spinner` }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null));
  }
  const hostCount = currentTeamDetails.host_count;
  let hostsTotalDisplay;
  if (hostCount !== void 0) {
    hostsTotalDisplay = hostCount === 1 ? `${hostCount} host` : `${hostCount} hosts`;
  }
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, isGlobalAdmin ? /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to fleets", path: paths/* default */.A.ADMIN_FLEETS })) : /* @__PURE__ */ react.createElement(react.Fragment, null), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__team-header` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__team-details` }, (userTeams == null ? void 0 : userTeams.length) === 1 ? /* @__PURE__ */ react.createElement("h1", null, currentTeamDetails.name) : /* @__PURE__ */ react.createElement(
    FleetsDropdown/* default */.A,
    {
      selectedFleetId: currentTeamId,
      currentUserFleets: userTeams || [],
      isDisabled: isLoadingTeams,
      includeAllFleets: false,
      onChange: handleTeamChange
    }
  ), !!hostsTotalDisplay && /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__host-count` }, hostsTotalDisplay)), /* @__PURE__ */ react.createElement(
    ActionButtons/* default */.A,
    {
      baseClass,
      actions: [
        {
          type: "primary",
          label: "Add hosts",
          onClick: toggleAddHostsModal
        },
        {
          type: "secondary",
          label: "Manage enroll secrets",
          buttonVariant: "secondary",
          onClick: toggleManageEnrollSecretsModal,
          gitOpsModeCompatible: true
        },
        {
          type: "secondary",
          label: "Rename fleet",
          buttonVariant: "secondary",
          onClick: toggleRenameFleetModal,
          gitOpsModeCompatible: true
        },
        {
          type: "secondary",
          label: "Delete fleet",
          buttonVariant: "secondary",
          hideAction: !isGlobalAdmin,
          onClick: toggleDeleteFleetModal,
          gitOpsModeCompatible: true
        }
      ]
    }
  )), /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(
    esm/* Tabs */.tU,
    {
      selectedIndex: getTabIndex(
        location.pathname,
        currentTeamDetails.id
      ),
      onSelect: (i) => navigateToNav(i)
    },
    /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, teamDetailsSubNav.map((navItem) => {
      return /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: navItem.name, "data-text": navItem.name }, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, navItem.name));
    }))
  )), showAddHostsModal && /* @__PURE__ */ react.createElement(
    AddHostsModal/* default */.A,
    {
      currentTeamName,
      enrollSecret: (_a = teamSecrets == null ? void 0 : teamSecrets[0]) == null ? void 0 : _a.secret,
      isAnyTeamSelected,
      isLoading: isLoadingTeams,
      onCancel: toggleAddHostsModal,
      openEnrollSecretModal: toggleManageEnrollSecretsModal
    }
  ), showManageEnrollSecretsModal && /* @__PURE__ */ react.createElement(
    EnrollSecretModal/* default */.A,
    {
      selectedTeamId: teamIdForApi || 0,
      primoMode: ((_b = config == null ? void 0 : config.partnerships) == null ? void 0 : _b.enable_primo) || false,
      teams: teams || [],
      onReturnToApp: toggleManageEnrollSecretsModal,
      toggleSecretEditorModal,
      toggleDeleteSecretModal,
      setSelectedSecret
    }
  ), showSecretEditorModal && /* @__PURE__ */ react.createElement(
    SecretEditorModal/* default */.A,
    {
      selectedTeam: currentTeamDetails.id,
      teams: teams || [],
      onSaveSecret,
      toggleSecretEditorModal,
      selectedSecret,
      isUpdatingSecret
    }
  ), showDeleteSecretModal && /* @__PURE__ */ react.createElement(
    DeleteSecretModal/* default */.A,
    {
      onDeleteSecret,
      toggleDeleteSecretModal,
      isUpdatingSecret
    }
  ), showDeleteFleetModal && /* @__PURE__ */ react.createElement(
    DeleteFleetModal/* default */.A,
    {
      onCancel: toggleDeleteFleetModal,
      onSubmit: onDeleteSubmit,
      name: currentTeamDetails.name,
      isUpdatingFleets: isUpdatingTeams
    }
  ), showRenameFleetModal && /* @__PURE__ */ react.createElement(
    RenameFleetModal/* default */.A,
    {
      onCancel: toggleRenameFleetModal,
      onSubmit: onEditSubmit,
      defaultName: currentTeamDetails.name,
      backendValidators,
      isUpdatingFleets: isUpdatingTeams
    }
  ), /* @__PURE__ */ react.createElement("div", { key: location.pathname, className: "tab-nav-routed-content" }, children)));
};
/* harmony default export */ var TeamDetailsWrapper_TeamDetailsWrapper = (TeamDetailsWrapper);

;// ./frontend/pages/admin/ManageFleetsPage/TeamDetailsWrapper/index.ts




/***/ }),

/***/ 31531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ DeleteFleetModal_DeleteFleetModal; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/admin/ManageFleetsPage/components/DeleteFleetModal/DeleteFleetModal.tsx




const baseClass = "delete-fleet-modal";
const DeleteFleetModal = ({
  name,
  isUpdatingFleets,
  onSubmit,
  onCancel
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete fleet",
      onExit: onCancel,
      onEnter: onSubmit,
      className: baseClass
    },
    /* @__PURE__ */ react.createElement("p", null, "This will delete the", " ", /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__name` }, name), " fleet."),
    /* @__PURE__ */ react.createElement("p", null, "Users on this fleet who are not assigned to other fleets won't be able to log in."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        onClick: onSubmit,
        variant: "alert",
        className: "delete-loading",
        isLoading: isUpdatingFleets
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteFleetModal_DeleteFleetModal = (DeleteFleetModal);

;// ./frontend/pages/admin/ManageFleetsPage/components/DeleteFleetModal/index.ts




/***/ }),

/***/ 56506:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ RenameFleetModal_RenameFleetModal; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/pages/admin/ManageFleetsPage/components/RenameFleetModal/RenameFleetModal.tsx






const baseClass = "rename-fleet-modal";
const RenameFleetModal = ({
  onCancel,
  onSubmit,
  defaultName,
  backendValidators,
  isUpdatingFleets
}) => {
  const [name, setName] = (0,react.useState)(defaultName);
  const [errors, setErrors] = (0,react.useState)(
    backendValidators
  );
  (0,react.useEffect)(() => {
    setErrors(backendValidators);
  }, [backendValidators]);
  const onInputChange = (0,react.useCallback)(
    (value) => {
      setName(value);
      setErrors({});
    },
    [setName]
  );
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ name: name.trim() });
  };
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Rename fleet", onExit: onCancel, className: baseClass }, /* @__PURE__ */ react.createElement(
    "form",
    {
      className: `${baseClass}__form`,
      onSubmit: onFormSubmit,
      autoComplete: "off"
    },
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        autofocus: true,
        name: "name",
        onChange: onInputChange,
        onBlur: () => {
          setName(name.trim());
        },
        label: "Fleet name",
        placeholder: "Fleet name",
        value: name,
        error: errors.name,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        disabled: name.trim() === "",
        className: "save-loading",
        isLoading: isUpdatingFleets
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))
  ));
};
/* harmony default export */ var RenameFleetModal_RenameFleetModal = (RenameFleetModal);

;// ./frontend/pages/admin/ManageFleetsPage/components/RenameFleetModal/index.ts




/***/ }),

/***/ 46455:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ManageFleetsPage_ManageFleetsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var users = __webpack_require__(7176);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/admin/ManageFleetsPage/components/CreateFleetModal/CreateFleetModal.tsx






const baseClass = "create-fleet-modal";
const CreateFleetModal = ({
  onCancel,
  onSubmit,
  backendValidators,
  isUpdatingFleets
}) => {
  const [name, setName] = (0,react.useState)("");
  const [errors, setErrors] = (0,react.useState)(
    backendValidators
  );
  (0,react.useEffect)(() => {
    setErrors(backendValidators);
  }, [backendValidators]);
  const onInputChange = (0,react.useCallback)(
    (value) => {
      setName(value);
      setErrors({});
    },
    [setName]
  );
  const onFormSubmit = (0,react.useCallback)(
    (evt) => {
      evt.preventDefault();
      onSubmit({
        name: name.trim()
      });
    },
    [onSubmit, name]
  );
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Add fleet", onExit: onCancel, className: baseClass }, /* @__PURE__ */ react.createElement(
    "form",
    {
      className: `${baseClass}__form`,
      onSubmit: onFormSubmit,
      autoComplete: "off"
    },
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        autofocus: true,
        name: "name",
        onChange: onInputChange,
        onBlur: () => {
          setName(name.trim());
        },
        label: "Fleet name",
        placeholder: "Workstations",
        value: name,
        error: errors.name,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        disabled: name.trim() === "",
        className: "create-loading",
        isLoading: isUpdatingFleets
      },
      "Create"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))
  ));
};
/* harmony default export */ var CreateFleetModal_CreateFleetModal = (CreateFleetModal);

;// ./frontend/pages/admin/ManageFleetsPage/components/CreateFleetModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/admin/ManageFleetsPage/components/DeleteFleetModal/index.ts + 1 modules
var DeleteFleetModal = __webpack_require__(31531);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageFleetsPage/components/RenameFleetModal/index.ts + 1 modules
var RenameFleetModal = __webpack_require__(56506);
// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
;// ./frontend/pages/admin/ManageFleetsPage/FleetTableConfig.tsx







const generateTableHeaders = (actionSelectHandler) => {
  return [
    {
      title: "Name",
      Header: "Name",
      disableSortBy: true,
      sortType: "caseInsensitive",
      accessor: "name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        LinkCell/* default */.A,
        {
          className: "w400",
          value: cellProps.cell.value,
          path: paths/* default */.A.FLEET_DETAILS_USERS(cellProps.row.original.id),
          tooltipTruncate: true
        }
      )
    },
    // TODO: need to add this info to API
    {
      title: "Hosts",
      Header: "Hosts",
      disableSortBy: true,
      accessor: "host_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Users",
      Header: "Users",
      disableSortBy: true,
      accessor: "user_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          position: "left",
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            "div",
            {
              className: disableChildren ? "disabled-by-gitops-mode fleet-actions-wrapper" : "fleet-actions-wrapper"
            },
            /* @__PURE__ */ react.createElement(
              ActionsDropdown/* default */.A,
              {
                options: cellProps.cell.value,
                onChange: (value) => actionSelectHandler(value, cellProps.row.original),
                placeholder: "Actions",
                disabled: disableChildren,
                variant: "secondary"
              }
            )
          )
        }
      )
    }
  ];
};
const generateActionDropdownOptions = () => {
  return [
    {
      label: "Rename",
      disabled: false,
      value: "rename"
    },
    {
      label: "Delete",
      disabled: false,
      value: "delete"
    }
  ];
};
const enhanceFleetData = (fleets) => {
  return Object.values(fleets).map((fleet) => {
    return {
      description: fleet.description,
      name: fleet.name,
      host_count: fleet.host_count,
      user_count: fleet.user_count,
      actions: generateActionDropdownOptions(),
      id: fleet.id
    };
  });
};
const generateDataSet = (fleets) => {
  return [...enhanceFleetData(fleets)];
};


;// ./frontend/pages/admin/ManageFleetsPage/ManageFleetsPage.tsx

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





















const ManageFleetsPage_baseClass = "manage-fleets";
const noFleetsClass = "no-fleets";
const ManageFleetsPage = ({
  router,
  location
}) => {
  var _a, _b, _c;
  const {
    currentTeam,
    setCurrentTeam,
    setCurrentUser,
    setAvailableTeams,
    setUserSettings,
    config
  } = (0,react.useContext)(app/* AppContext */.BR);
  const [isUpdatingFleets, setIsUpdatingFleets] = (0,react.useState)(false);
  const [showCreateFleetModal, setShowCreateFleetModal] = (0,react.useState)(false);
  const isCreateFleetDisabled = !!((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo) || !!(((_b = config == null ? void 0 : config.gitops) == null ? void 0 : _b.gitops_mode_enabled) && ((_c = config == null ? void 0 : config.gitops) == null ? void 0 : _c.repository_url));
  (0,react.useEffect)(() => {
    if (location.query.create_fleet !== "1") return;
    if (!config) return;
    if (!isCreateFleetDisabled) {
      setShowCreateFleetModal(true);
    }
    const _a2 = location.query, { create_fleet } = _a2, rest = __objRest(_a2, ["create_fleet"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [
    location.query,
    location.pathname,
    router,
    isCreateFleetDisabled,
    config
  ]);
  const [showDeleteFleetModal, setShowDeleteFleetModal] = (0,react.useState)(false);
  const [showRenameFleetModal, setShowRenameFleetModal] = (0,react.useState)(false);
  const [fleetEditing, setFleetEditing] = (0,react.useState)();
  const [backendValidators, setBackendValidators] = (0,react.useState)({});
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const { refetch: refetchMe } = (0,es.useQuery)(["me"], () => users/* default */.A.me(), {
    enabled: false,
    onSuccess: ({ user, available_teams, settings }) => {
      setCurrentUser(user);
      setAvailableTeams(user, available_teams);
      setUserSettings(settings);
    }
  });
  const {
    data: fleets,
    isFetching: isFetchingFleets,
    error: loadingFleetsError,
    refetch: refetchFleets
  } = (0,es.useQuery)(
    ["teams"],
    () => teams/* default */.A.loadAll(),
    {
      select: (data) => data.teams,
      onError: (error) => handlePageError(error)
    }
  );
  const toggleCreateFleetModal = (0,react.useCallback)(() => {
    setShowCreateFleetModal(!showCreateFleetModal);
    setBackendValidators({});
  }, [showCreateFleetModal, setShowCreateFleetModal, setBackendValidators]);
  const toggleDeleteFleetModal = (0,react.useCallback)(
    (fleet) => {
      setShowDeleteFleetModal(!showDeleteFleetModal);
      fleet ? setFleetEditing(fleet) : setFleetEditing(void 0);
    },
    [showDeleteFleetModal, setShowDeleteFleetModal, setFleetEditing]
  );
  const toggleRenameFleetModal = (0,react.useCallback)(
    (fleet) => {
      setShowRenameFleetModal(!showRenameFleetModal);
      setBackendValidators({});
      fleet ? setFleetEditing(fleet) : setFleetEditing(void 0);
    },
    [
      showRenameFleetModal,
      setShowRenameFleetModal,
      setFleetEditing,
      setBackendValidators
    ]
  );
  const onCreateSubmit = (0,react.useCallback)(
    (formData) => {
      setIsUpdatingFleets(true);
      teams/* default */.A.create(formData).then(() => {
        ToastNotification/* notify */.me.success(`Successfully created ${formData.name}.`);
        setBackendValidators({});
        toggleCreateFleetModal();
        refetchMe();
        refetchFleets();
      }).catch((createError) => {
        const rawReason = createError.data.errors[0].reason;
        const errMsg = rawReason.toLowerCase();
        if (errMsg.includes("must differ")) {
          setBackendValidators({ name: rawReason });
        } else if (errMsg.includes("duplicate")) {
          setBackendValidators({
            name: "A fleet with this name already exists"
          });
        } else if (errMsg.includes("all teams") || errMsg.includes("all fleets") || errMsg.includes("no team") || errMsg.includes("unassigned")) {
          setBackendValidators({
            name: `"${formData.name}" is a reserved fleet name. Please try another name.`
          });
        } else {
          ToastNotification/* notify */.me.error("Could not create fleet. Please try again.", {
            response: createError
          });
          toggleCreateFleetModal();
        }
      }).finally(() => {
        setIsUpdatingFleets(false);
      });
    },
    [toggleCreateFleetModal, refetchMe, refetchFleets]
  );
  const onDeleteSubmit = (0,react.useCallback)(() => {
    if (fleetEditing) {
      setIsUpdatingFleets(true);
      teams/* default */.A.destroy(fleetEditing.id).then(() => {
        ToastNotification/* notify */.me.success(`Successfully deleted ${fleetEditing.name}.`);
        if ((currentTeam == null ? void 0 : currentTeam.id) === fleetEditing.id) {
          setCurrentTeam(void 0);
        }
      }).catch(() => {
        ToastNotification/* notify */.me.error(
          `Could not delete ${fleetEditing.name}. Please try again.`
        );
      }).finally(() => {
        setIsUpdatingFleets(false);
        refetchMe();
        refetchFleets();
        toggleDeleteFleetModal();
      });
    }
  }, [
    currentTeam,
    fleetEditing,
    refetchMe,
    refetchFleets,
    setCurrentTeam,
    toggleDeleteFleetModal
  ]);
  const onRenameSubmit = (0,react.useCallback)(
    (formData) => {
      if (formData.name === (fleetEditing == null ? void 0 : fleetEditing.name)) {
        toggleRenameFleetModal();
      } else if (fleetEditing) {
        setIsUpdatingFleets(true);
        teams/* default */.A.update(formData, fleetEditing.id).then(() => {
          ToastNotification/* notify */.me.success(
            `Successfully updated fleet name to ${formData.name}.`
          );
          setBackendValidators({});
          toggleRenameFleetModal();
          refetchFleets();
        }).catch((updateError) => {
          console.error(updateError);
          const rawReason = updateError.data.errors[0].reason;
          const errMsg = rawReason.toLowerCase();
          if (errMsg.includes("must differ")) {
            setBackendValidators({ name: rawReason });
          } else if (errMsg.includes("duplicate")) {
            setBackendValidators({
              name: "A fleet with this name already exists"
            });
          } else if (errMsg.includes("all teams") || errMsg.includes("all fleets")) {
            setBackendValidators({
              name: `"All fleets" is a reserved fleet name.`
            });
          } else if (errMsg.includes("no team") || errMsg.includes("unassigned")) {
            setBackendValidators({
              name: `"Unassigned" is a reserved fleet name. Please try another name.`
            });
          } else {
            ToastNotification/* notify */.me.error(
              `Could not rename ${fleetEditing.name}. Please try again.`,
              { response: updateError }
            );
          }
        }).finally(() => {
          setIsUpdatingFleets(false);
        });
      }
    },
    [fleetEditing, toggleRenameFleetModal, refetchFleets]
  );
  const onActionSelection = (0,react.useCallback)(
    (action, fleet) => {
      switch (action) {
        case "rename":
          toggleRenameFleetModal(fleet);
          break;
        case "delete":
          toggleDeleteFleetModal(fleet);
          break;
        default:
      }
    },
    [toggleRenameFleetModal, toggleDeleteFleetModal]
  );
  const tableHeaders = (0,react.useMemo)(() => generateTableHeaders(onActionSelection), [
    onActionSelection
  ]);
  const tableData = (0,react.useMemo)(() => fleets ? generateDataSet(fleets) : [], [
    fleets
  ]);
  const renderFleetCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "fleets", count: fleets == null ? void 0 : fleets.length });
  }, [fleets]);
  const disabledPrimaryActionTooltip = (() => {
    var _a2, _b2;
    if (!isCreateFleetDisabled) return null;
    if ((_a2 = config == null ? void 0 : config.partnerships) == null ? void 0 : _a2.enable_primo) return constants/* PRIMO_TOOLTIP */.OL;
    if ((_b2 = config == null ? void 0 : config.gitops) == null ? void 0 : _b2.repository_url) {
      return (0,helpers/* getGitOpsModeTipContent */.qV)(config.gitops.repository_url);
    }
    return null;
  })();
  return /* @__PURE__ */ react.createElement("div", { className: ManageFleetsPage_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Use fleets to group hosts together with their own controls, reports, and policies.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/fleets`,
          newTab: true
        }
      ))
    }
  ), loadingFleetsError ? /* @__PURE__ */ react.createElement(DataError/* default */.A, null) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data: tableData,
      isLoading: isFetchingFleets,
      defaultSortHeader: "name",
      defaultSortDirection: "asc",
      actionButton: {
        name: "create fleet",
        buttonText: "Add fleet",
        variant: "default",
        onClick: toggleCreateFleetModal,
        hideButton: false,
        disabledTooltipContent: disabledPrimaryActionTooltip
      },
      resultsTitle: "fleets",
      emptyComponent: () => {
        const rawButton = /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            disabled: !!disabledPrimaryActionTooltip,
            onClick: toggleCreateFleetModal,
            className: `${noFleetsClass}__create-button`
          },
          "Add fleet"
        );
        const primaryButton = disabledPrimaryActionTooltip ? /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: disabledPrimaryActionTooltip,
            position: "top",
            underline: false,
            showArrow: true,
            tipOffset: 8
          },
          rawButton
        ) : rawButton;
        return /* @__PURE__ */ react.createElement(
          EmptyState/* default */.A,
          {
            header: "No fleets yet",
            info: "Add a fleet to add hosts and assign users.",
            primaryButton
          }
        );
      },
      showMarkAllPages: false,
      isAllPagesSelected: false,
      isClientSidePagination: true,
      renderCount: renderFleetCount
    }
  ), showCreateFleetModal && /* @__PURE__ */ react.createElement(
    CreateFleetModal_CreateFleetModal,
    {
      onCancel: toggleCreateFleetModal,
      onSubmit: onCreateSubmit,
      backendValidators,
      isUpdatingFleets
    }
  ), showDeleteFleetModal && /* @__PURE__ */ react.createElement(
    DeleteFleetModal/* default */.A,
    {
      onCancel: toggleDeleteFleetModal,
      onSubmit: onDeleteSubmit,
      name: (fleetEditing == null ? void 0 : fleetEditing.name) || "",
      isUpdatingFleets
    }
  ), showRenameFleetModal && /* @__PURE__ */ react.createElement(
    RenameFleetModal/* default */.A,
    {
      onCancel: toggleRenameFleetModal,
      onSubmit: onRenameSubmit,
      defaultName: (fleetEditing == null ? void 0 : fleetEditing.name) || "",
      backendValidators,
      isUpdatingFleets
    }
  ));
};
/* harmony default export */ var ManageFleetsPage_ManageFleetsPage = (ManageFleetsPage);

;// ./frontend/pages/admin/ManageFleetsPage/index.ts




/***/ }),

/***/ 15251:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ CreateApiUserPage_CreateApiUserPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var entities_teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var users = __webpack_require__(7176);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputFieldHiddenContent/index.ts + 1 modules
var InputFieldHiddenContent = __webpack_require__(48333);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/InfoBanner.tsx
var InfoBanner = __webpack_require__(36321);
;// ./frontend/pages/admin/ManageUsersPage/components/ApiKeyDisplay/ApiKeyDisplay.tsx





const baseClass = "api-key-display";
const ApiKeyDisplay = ({
  newUserName,
  apiKey,
  onDone
}) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h1", null, newUserName), /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    InputFieldHiddenContent/* default */.A,
    {
      value: apiKey,
      name: "api-key",
      label: "API key"
    }
  ), /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { color: "yellow" }, "Please make a note of this API key since it is the only time you will be able to view it."), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onDone }, "Done"))));
};
/* harmony default export */ var ApiKeyDisplay_ApiKeyDisplay = (ApiKeyDisplay);

;// ./frontend/pages/admin/ManageUsersPage/components/ApiKeyDisplay/index.ts



// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/ApiUserForm/index.ts + 8 modules
var ApiUserForm = __webpack_require__(74835);
;// ./frontend/pages/admin/ManageUsersPage/CreateApiUserPage/CreateApiUserPage.tsx













const CreateApiUserPage_baseClass = "create-api-user-page";
const CreateApiUserPage = ({ router }) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [apiKey, setApiKey] = (0,react.useState)(null);
  const [createdUserName, setCreatedUserName] = (0,react.useState)("");
  const { data: teams } = (0,es.useQuery)(
    ["teams"],
    () => entities_teams/* default */.A.loadAll(),
    {
      enabled: !!isPremiumTier,
      select: (data) => data.teams
    }
  );
  const handleSubmit = (formData) => {
    setIsSubmitting(true);
    return users/* default */.A.createApiOnlyUser({
      name: formData.name,
      global_role: formData.global_role,
      fleets: formData.fleets.map((f) => {
        var _a;
        return {
          id: f.id,
          role: (_a = f.role) != null ? _a : "observer"
        };
      }),
      api_endpoints: formData.api_endpoints
    }).then((response) => {
      setCreatedUserName(formData.name);
      if (response.token) {
        setApiKey(response.token);
      } else {
        ToastNotification/* notify */.me.error(
          `${formData.name} has been created, but the API key could not be retrieved. Contact your administrator.`
        );
        router.push(paths/* default */.A.ADMIN_USERS);
      }
    }).catch(() => {
      ToastNotification/* notify */.me.error("Could not create user. Please try again.");
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  const handleDone = () => {
    ToastNotification/* notify */.me.success(`${createdUserName} has been created!`);
    router.push(paths/* default */.A.ADMIN_USERS);
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: CreateApiUserPage_baseClass }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to users", path: paths/* default */.A.ADMIN_USERS }), apiKey ? /* @__PURE__ */ react.createElement(
    ApiKeyDisplay_ApiKeyDisplay,
    {
      newUserName: createdUserName,
      apiKey,
      onDone: handleDone
    }
  ) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("h1", null, "New API-only user"), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "This user will have access to the Mesh API, but will not be able to log into the UI." })), /* @__PURE__ */ react.createElement(
    ApiUserForm/* default */.A,
    {
      isPremiumTier,
      onCancel: () => router.push(paths/* default */.A.ADMIN_USERS),
      onSubmit: handleSubmit,
      availableTeams: teams || [],
      isSubmitting
    }
  )));
};
/* harmony default export */ var CreateApiUserPage_CreateApiUserPage = (CreateApiUserPage);

;// ./frontend/pages/admin/ManageUsersPage/CreateApiUserPage/index.ts




/***/ }),

/***/ 84151:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ CreateUserPage_CreateUserPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/invites.ts
var invites = __webpack_require__(63494);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var entities_teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var users = __webpack_require__(7176);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/UserForm/index.ts
var UserForm = __webpack_require__(98148);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/UserForm/UserForm.tsx + 2 modules
var UserForm_UserForm = __webpack_require__(15815);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/helpers/userManagementHelpers.ts
var userManagementHelpers = __webpack_require__(55308);
;// ./frontend/pages/admin/ManageUsersPage/CreateUserPage/CreateUserPage.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));













const baseClass = "create-user-page";
const CreateUserPage = ({ router }) => {
  var _a, _b, _c;
  const { config, currentUser, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const { data: teams } = (0,es.useQuery)(
    ["teams"],
    () => entities_teams/* default */.A.loadAll(),
    {
      enabled: !!isPremiumTier,
      select: (data) => data.teams
    }
  );
  const handleSubmit = (formData) => {
    setIsSubmitting(true);
    if (formData.newUserType === UserForm_UserForm/* NewUserType */.C.AdminInvited) {
      const requestData2 = __spreadProps(__spreadValues({}, formData), {
        invited_by: formData.currentUserId
      });
      delete requestData2.currentUserId;
      delete requestData2.newUserType;
      delete requestData2.password;
      return invites/* default */.A.create(requestData2).then(() => {
        ToastNotification/* notify */.me.success(`${formData.name} has been invited!`);
        router.push(paths/* default */.A.ADMIN_USERS);
      }).catch((userErrors) => {
        const fieldErrors = (0,userManagementHelpers/* getUserFieldErrors */.jk)(userErrors);
        if (fieldErrors) {
          setFormErrors(fieldErrors);
        } else {
          ToastNotification/* notify */.me.error("Could not create user. Please try again.", {
            response: userErrors
          });
        }
      }).finally(() => {
        setIsSubmitting(false);
      });
    }
    const requestData = __spreadValues({}, formData);
    delete requestData.currentUserId;
    delete requestData.newUserType;
    return users/* default */.A.createUserWithoutInvitation(requestData).then(() => {
      ToastNotification/* notify */.me.success(`${requestData.name} has been created!`);
      router.push(paths/* default */.A.ADMIN_USERS);
    }).catch((userErrors) => {
      const fieldErrors = (0,userManagementHelpers/* getUserFieldErrors */.jk)(userErrors);
      if (fieldErrors) {
        setFormErrors(fieldErrors);
      } else {
        ToastNotification/* notify */.me.error("Could not create user. Please try again.", {
          response: userErrors
        });
      }
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to users", path: paths/* default */.A.ADMIN_USERS }), /* @__PURE__ */ react.createElement("h1", null, "New user"), /* @__PURE__ */ react.createElement(
    UserForm/* default */.A,
    {
      isNewUser: true,
      isModifiedByGlobalAdmin: true,
      onCancel: () => router.push(paths/* default */.A.ADMIN_USERS),
      onSubmit: handleSubmit,
      availableTeams: teams || [],
      isPremiumTier: isPremiumTier || false,
      smtpConfigured: ((_a = config == null ? void 0 : config.smtp_settings) == null ? void 0 : _a.configured) || false,
      sesConfigured: ((_b = config == null ? void 0 : config.email) == null ? void 0 : _b.backend) === "ses" || false,
      canUseSso: ((_c = config == null ? void 0 : config.sso_settings) == null ? void 0 : _c.enable_sso) || false,
      currentUserId: currentUser == null ? void 0 : currentUser.id,
      serverErrors: formErrors,
      isUpdatingUsers: isSubmitting
    }
  )));
};
/* harmony default export */ var CreateUserPage_CreateUserPage = (CreateUserPage);

;// ./frontend/pages/admin/ManageUsersPage/CreateUserPage/index.ts




/***/ }),

/***/ 55092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ EditUserPage_EditUserPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/invites.ts
var invites = __webpack_require__(63494);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var entities_teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var users = __webpack_require__(7176);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/ApiUserForm/index.ts + 8 modules
var ApiUserForm = __webpack_require__(74835);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/UserForm/index.ts
var UserForm = __webpack_require__(98148);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/helpers/userManagementHelpers.ts
var userManagementHelpers = __webpack_require__(55308);
;// ./frontend/pages/admin/ManageUsersPage/EditUserPage/EditUserPage.tsx
















const baseClass = "edit-user-page";
const EditUserPage = ({ router, params, location }) => {
  var _a, _b, _c, _d;
  const entityId = parseInt(params.user_id, 10);
  const isInvite = ((_a = location.query) == null ? void 0 : _a.type) === "invite";
  const { config, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const queryClient = (0,es.useQueryClient)();
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const { data: user, isLoading: isLoadingUser, error: userError } = (0,es.useQuery)(["user", entityId], () => users/* default */.A.getUserById(entityId), {
    enabled: !isInvite
  });
  const {
    data: invite,
    isLoading: isLoadingInvite,
    error: inviteError
  } = (0,es.useQuery)(
    ["invites", entityId],
    () => invites/* default */.A.loadAll({ globalFilter: "" }),
    {
      enabled: isInvite,
      select: (invites) => invites.find((i) => i.id === entityId)
    }
  );
  const { data: teams, isLoading: isLoadingTeams } = (0,es.useQuery)(["teams"], () => entities_teams/* default */.A.loadAll(), {
    enabled: !!isPremiumTier,
    select: (data) => data.teams
  });
  const isLoading = (isInvite ? isLoadingInvite : isLoadingUser) || isPremiumTier && isLoadingTeams;
  const hasError = isInvite ? !!inviteError : !!userError;
  const entityData = isInvite ? invite : user;
  const handleHumanUserSubmit = (formData) => {
    if (!entityData) return void 0;
    setIsSubmitting(true);
    setFormErrors({});
    if (isInvite) {
      return invites/* default */.A.update(entityId, formData).then(() => {
        let msg = `Successfully edited ${formData.name}`;
        if (entityData.email !== formData.email) {
          msg += `. A confirmation email was sent to ${formData.email}.`;
        }
        ToastNotification/* notify */.me.success(msg);
        router.push(paths/* default */.A.ADMIN_USERS);
      }).catch((inviteErrors) => {
        const fieldErrors = (0,userManagementHelpers/* getUserFieldErrors */.jk)(inviteErrors);
        if (fieldErrors) {
          setFormErrors(fieldErrors);
        } else {
          ToastNotification/* notify */.me.error(
            `Could not edit ${entityData.name}. Please try again.`,
            { response: inviteErrors }
          );
        }
      }).finally(() => {
        setIsSubmitting(false);
      });
    }
    if (formData.new_password === "") {
      formData.new_password = null;
    }
    const requestData = {};
    if (formData.name !== entityData.name) requestData.name = formData.name;
    if (formData.email !== entityData.email) requestData.email = formData.email;
    if (formData.sso_enabled !== entityData.sso_enabled)
      requestData.sso_enabled = formData.sso_enabled;
    if (formData.mfa_enabled !== entityData.mfa_enabled)
      requestData.mfa_enabled = formData.mfa_enabled;
    if (formData.global_role !== entityData.global_role)
      requestData.global_role = formData.global_role;
    if (formData.teams && formData.teams.length > 0)
      requestData.teams = formData.teams;
    if (formData.new_password) requestData.new_password = formData.new_password;
    let successMessage = `Successfully edited ${formData.name}`;
    if (entityData.email !== formData.email) {
      successMessage += `. A confirmation email was sent to ${formData.email}.`;
    }
    return users/* default */.A.update(entityId, requestData).then(() => {
      queryClient.invalidateQueries(["user", entityId]);
      ToastNotification/* notify */.me.success(successMessage);
      router.push(paths/* default */.A.ADMIN_USERS);
    }).catch((userErrors) => {
      const fieldErrors = (0,userManagementHelpers/* getUserFieldErrors */.jk)(userErrors);
      if (fieldErrors) {
        setFormErrors(fieldErrors);
      } else {
        ToastNotification/* notify */.me.error(`Could not edit ${entityData.name}. Please try again.`, {
          response: userErrors
        });
      }
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  const handleApiUserSubmit = (formData) => {
    if (!entityData) return void 0;
    setIsSubmitting(true);
    setFormErrors({});
    return users/* default */.A.updateApiOnlyUser(entityId, {
      name: formData.name,
      global_role: formData.global_role,
      fleets: formData.fleets.map((f) => {
        var _a2;
        return {
          id: f.id,
          role: (_a2 = f.role) != null ? _a2 : "observer"
        };
      }),
      api_endpoints: formData.api_endpoints
    }).then(() => {
      queryClient.invalidateQueries(["user", entityId]);
      ToastNotification/* notify */.me.success(`Successfully edited ${formData.name}.`);
      router.push(paths/* default */.A.ADMIN_USERS);
    }).catch(() => {
      ToastNotification/* notify */.me.error(`Could not edit ${entityData.name}. Please try again.`);
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null));
  }
  if (hasError || !entityData) {
    return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to users", path: paths/* default */.A.ADMIN_USERS }), /* @__PURE__ */ react.createElement(DataError/* default */.A, null));
  }
  const showApiForm = !isInvite && entityData.api_only;
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to users", path: paths/* default */.A.ADMIN_USERS }), showApiForm ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h1", null, "Edit API-only user"), /* @__PURE__ */ react.createElement(
    ApiUserForm/* default */.A,
    {
      onCancel: () => router.push(paths/* default */.A.ADMIN_USERS),
      onSubmit: handleApiUserSubmit,
      availableTeams: teams || [],
      defaultData: {
        name: entityData.name,
        global_role: entityData.global_role,
        fleets: entityData.teams,
        api_endpoints: entityData.api_endpoints
      },
      isSubmitting,
      isPremiumTier
    }
  )) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h1", null, "Edit user"), /* @__PURE__ */ react.createElement(
    UserForm/* default */.A,
    {
      onCancel: () => router.push(paths/* default */.A.ADMIN_USERS),
      onSubmit: handleHumanUserSubmit,
      availableTeams: teams || [],
      isPremiumTier: isPremiumTier || false,
      smtpConfigured: ((_b = config == null ? void 0 : config.smtp_settings) == null ? void 0 : _b.configured) || false,
      sesConfigured: ((_c = config == null ? void 0 : config.email) == null ? void 0 : _c.backend) === "ses" || false,
      canUseSso: ((_d = config == null ? void 0 : config.sso_settings) == null ? void 0 : _d.enable_sso) || false,
      isSsoEnabled: entityData == null ? void 0 : entityData.sso_enabled,
      isMfaEnabled: entityData.mfa_enabled,
      isApiOnly: false,
      isInvitePending: isInvite,
      isModifiedByGlobalAdmin: true,
      defaultName: entityData == null ? void 0 : entityData.name,
      defaultEmail: entityData == null ? void 0 : entityData.email,
      defaultGlobalRole: entityData == null ? void 0 : entityData.global_role,
      defaultTeams: entityData == null ? void 0 : entityData.teams,
      serverErrors: formErrors,
      isUpdatingUsers: isSubmitting
    }
  )));
};
/* harmony default export */ var EditUserPage_EditUserPage = (EditUserPage);

;// ./frontend/pages/admin/ManageUsersPage/EditUserPage/index.ts




/***/ }),

/***/ 74835:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ ApiUserForm_ApiUserForm; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
// EXTERNAL MODULE: ./frontend/hooks/useFormValidation.ts
var useFormValidation = __webpack_require__(688);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/helpers/userManagementHelpers.ts
var userManagementHelpers = __webpack_require__(55308);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputFieldWithIcon/InputFieldWithIcon.tsx
var InputFieldWithIcon = __webpack_require__(7075);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/TextCell.tsx
var TextCell = __webpack_require__(3728);
// EXTERNAL MODULE: ./frontend/components/Tag/index.ts + 1 modules
var Tag = __webpack_require__(42619);
;// ./frontend/interfaces/api_endpoint.ts

const endpointKey = (ep) => `${ep.method} ${ep.path}`;

// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/services/entities/api_endpoints.ts

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


/* harmony default export */ var api_endpoints = ({
  loadAll: () => __async(null, null, function* () {
    const { REST_API_ENDPOINTS } = endpoints/* default */.A;
    const response = yield (0,services/* default */.Ay)(
      "GET",
      REST_API_ENDPOINTS
    );
    return response.api_endpoints;
  })
});

;// ./frontend/pages/admin/ManageUsersPage/components/ApiEndpointSelectorTable/ApiEndpointSelectorTable.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));












const baseClass = "endpoint-selector-table";
const normalizePath = (s) => s.toLowerCase().replace(/:[a-z0-9_]+/g, ":_");
const WORD_SPLIT_RE = /[\s/_-]+/;
const scoreField = (field, query) => {
  if (!field || !query) return 0;
  if (field === query) return 100;
  if (field.startsWith(query)) return 90;
  if (field.split(WORD_SPLIT_RE).filter(Boolean).includes(query)) return 70;
  if (field.includes(query)) return 50;
  return 0;
};
const scoreEndpoint = (ep, query) => Math.max(
  scoreField(ep.display_name.toLowerCase(), query),
  scoreField(normalizePath(ep.path), query),
  ep.method.toLowerCase().includes(query) ? 10 : 0
);
const pathDepth = (path) => path.split("/").filter(Boolean).length;
const NameCell = (cellProps) => {
  const { deprecated } = cellProps.row.original;
  return /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__name-cell` }, /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value, className: "" }), deprecated && /* @__PURE__ */ react.createElement(
    Tag/* default */.A,
    {
      tooltip: "This endpoint is deprecated and may be removed in a future version.",
      size: "small"
    },
    "Deprecated"
  ));
};
const searchResultsTableHeaders = [
  {
    title: "Name",
    Header: "Name",
    accessor: "display_name",
    disableSortBy: true,
    Cell: NameCell
  },
  {
    title: "Method",
    Header: "Method",
    accessor: "method",
    disableSortBy: true,
    Cell: (cellProps) => /* @__PURE__ */ react.createElement("code", null, cellProps.cell.value)
  },
  {
    title: "Path",
    Header: "Path",
    accessor: "path",
    disableSortBy: true,
    Cell: (cellProps) => /* @__PURE__ */ react.createElement("code", null, cellProps.cell.value)
  }
];
const generateSelectedTableHeaders = (handleRemove, disabled) => [
  ...searchResultsTableHeaders,
  {
    id: "delete",
    Header: "",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: () => handleRemove(cellProps.row),
        variant: "subdued",
        icon: "close-filled",
        ariaLabel: "Remove",
        disabled
      }
    ),
    disableHidden: true
  }
];
const ApiEndpointSelectorTable = ({
  selectedEndpoints,
  onSelectionChange,
  disabled
}) => {
  const [searchText, setSearchText] = (0,react.useState)("");
  const dropdownRef = (0,react.useRef)(null);
  const { data: apiEndpoints, isLoading, error } = (0,es.useQuery)(["api_endpoints"], () => api_endpoints.loadAll(), {
    refetchOnWindowFocus: false
  });
  const allRows = (0,react.useMemo)(
    () => (apiEndpoints || []).map((ep) => __spreadProps(__spreadValues({}, ep), {
      id: endpointKey(ep)
    })),
    [apiEndpoints]
  );
  const searchResults = (0,react.useMemo)(() => {
    if ((0,lodash.isEmpty)(searchText)) return [];
    const query = normalizePath(searchText);
    return allRows.filter((ep) => !selectedEndpoints.some((s) => endpointKey(s) === ep.id)).map((ep) => ({ ep, score: scoreEndpoint(ep, query) })).filter(({ score }) => score > 0).sort(
      (a, b) => b.score - a.score || pathDepth(a.ep.path) - pathDepth(b.ep.path)
    ).map(({ ep }) => ep);
  }, [allRows, searchText, selectedEndpoints]);
  const selectedRows = (0,react.useMemo)(
    () => allRows.filter(
      (ep) => selectedEndpoints.some((s) => endpointKey(s) === ep.id)
    ),
    [allRows, selectedEndpoints]
  );
  (0,react.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchText("");
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSearchText("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleRowSelect = (0,react.useCallback)(
    (row) => {
      const { method, path } = row.original;
      if (!selectedEndpoints.some((s) => s.method === method && s.path === path)) {
        onSelectionChange([...selectedEndpoints, { method, path }]);
      }
      setSearchText("");
    },
    [selectedEndpoints, onSelectionChange]
  );
  const handleRowRemove = (0,react.useCallback)(
    (row) => {
      const { method, path } = row.original;
      onSelectionChange(
        selectedEndpoints.filter((s) => s.method !== method || s.path !== path)
      );
    },
    [selectedEndpoints, onSelectionChange]
  );
  const selectedTableHeaders = (0,react.useMemo)(
    () => generateSelectedTableHeaders(handleRowRemove, disabled),
    [handleRowRemove, disabled]
  );
  const isDropdownOpen = !(0,lodash.isEmpty)(searchText);
  const showResults = isDropdownOpen && !error;
  const showSearchError = isDropdownOpen && !!error;
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    InputFieldWithIcon/* default */.A,
    {
      type: "search",
      iconSvg: "search",
      value: searchText,
      placeholder: "Search by name or path",
      onChange: setSearchText,
      disabled
    }
  ), /* @__PURE__ */ react.createElement("span", { className: "form-field__help-text" }, "You can find this information in the", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/docs/rest-api/rest-api",
      text: "REST API docs",
      newTab: true
    }
  )), showResults && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__search-dropdown`, ref: dropdownRef }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: searchResultsTableHeaders,
      data: searchResults,
      isLoading,
      emptyComponent: () => /* @__PURE__ */ react.createElement("div", { className: "empty-search" }, /* @__PURE__ */ react.createElement("div", { className: "empty-search__inner" }, /* @__PURE__ */ react.createElement("h4", null, "No matching API endpoints."), /* @__PURE__ */ react.createElement("p", null, "Please check the API documentation and try again.", /* @__PURE__ */ react.createElement("br", null), "Experimental endpoints are not supported."))),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableCount: true,
      disableMultiRowSelect: true,
      disablePagination: true,
      manualSortBy: true,
      onClickRow: disabled ? void 0 : handleRowSelect
    }
  )), showSearchError && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__search-dropdown`, ref: dropdownRef }, /* @__PURE__ */ react.createElement(DataError/* default */.A, null)), selectedRows.length > 0 && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__selected-table` }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: selectedTableHeaders,
      data: selectedRows,
      isLoading: false,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableCount: true,
      disablePagination: true,
      emptyComponent: () => /* @__PURE__ */ react.createElement(react.Fragment, null)
    }
  )));
};
/* harmony default export */ var ApiEndpointSelectorTable_ApiEndpointSelectorTable = (ApiEndpointSelectorTable);

;// ./frontend/pages/admin/ManageUsersPage/components/ApiEndpointSelectorTable/index.ts



;// ./frontend/pages/admin/ManageUsersPage/components/ApiAccessSection/ApiAccessSection.tsx





const ApiAccessSection_baseClass = "api-access-section";
var ApiAccessType = /* @__PURE__ */ ((ApiAccessType2) => {
  ApiAccessType2["AllEndpoints"] = "ALL_ENDPOINTS";
  ApiAccessType2["SpecificEndpoints"] = "SPECIFIC_ENDPOINTS";
  return ApiAccessType2;
})(ApiAccessType || {});
const ApiAccessSection = ({
  isSpecificEndpoints,
  onAccessTypeChange,
  selectedEndpoints,
  onEndpointSelectionChange,
  error,
  disabled
}) => {
  const handleAccessTypeChange = (0,react.useCallback)(
    (value) => {
      onAccessTypeChange(value === "SPECIFIC_ENDPOINTS" /* SpecificEndpoints */);
    },
    [onAccessTypeChange]
  );
  return /* @__PURE__ */ react.createElement("div", { className: ApiAccessSection_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${ApiAccessSection_baseClass}__access-type-field form-field` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "API access"), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      className: `${ApiAccessSection_baseClass}__radio-input`,
      label: "All API endpoints",
      id: "all-endpoints",
      checked: !isSpecificEndpoints,
      value: "ALL_ENDPOINTS" /* AllEndpoints */,
      name: "api-access-type",
      onChange: handleAccessTypeChange,
      disabled
    }
  ), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      className: `${ApiAccessSection_baseClass}__radio-input`,
      label: "Specific API endpoints",
      id: "specific-endpoints",
      checked: isSpecificEndpoints,
      value: "SPECIFIC_ENDPOINTS" /* SpecificEndpoints */,
      name: "api-access-type",
      onChange: handleAccessTypeChange,
      disabled
    }
  )), isSpecificEndpoints && /* @__PURE__ */ react.createElement("div", { className: `${ApiAccessSection_baseClass}__endpoint-selector` }, /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Specifying endpoints can narrow down a user's API access, but will not grant additional permissions otherwise forbidden by their role." }, "Select API endpoints"))), /* @__PURE__ */ react.createElement(
    ApiEndpointSelectorTable_ApiEndpointSelectorTable,
    {
      selectedEndpoints,
      onSelectionChange: onEndpointSelectionChange,
      disabled
    }
  ), error && /* @__PURE__ */ react.createElement("div", { className: "form-field__label form-field__label--error" }, error)));
};
/* harmony default export */ var ApiAccessSection_ApiAccessSection = (ApiAccessSection);

;// ./frontend/pages/admin/ManageUsersPage/components/ApiAccessSection/index.ts



// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/SelectedTeamsForm/SelectedTeamsForm.tsx
var SelectedTeamsForm = __webpack_require__(91129);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_presence/index.ts
var validate_presence = __webpack_require__(94781);
;// ./frontend/pages/admin/ManageUsersPage/components/ApiUserForm/helpers.ts


const validateApiUserForm = (data, { isPremiumTier }) => {
  const errors = {};
  if (!(0,validate_presence/* default */.A)(data.name)) {
    errors.name = "Enter a name";
  }
  if (isPremiumTier) {
    if (!data.isGlobalUser && data.fleets.length === 0) {
      errors.fleets = "Select at least one fleet";
    }
    if (data.isSpecificEndpoints && data.api_endpoints.length === 0) {
      errors.api_endpoints = "Select at least one API endpoint";
    }
  }
  return errors;
};

;// ./frontend/pages/admin/ManageUsersPage/components/ApiUserForm/ApiUserForm.tsx

var ApiUserForm_defProp = Object.defineProperty;
var ApiUserForm_defProps = Object.defineProperties;
var ApiUserForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ApiUserForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ApiUserForm_hasOwnProp = Object.prototype.hasOwnProperty;
var ApiUserForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var ApiUserForm_defNormalProp = (obj, key, value) => key in obj ? ApiUserForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ApiUserForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ApiUserForm_hasOwnProp.call(b, prop))
      ApiUserForm_defNormalProp(a, prop, b[prop]);
  if (ApiUserForm_getOwnPropSymbols)
    for (var prop of ApiUserForm_getOwnPropSymbols(b)) {
      if (ApiUserForm_propIsEnum.call(b, prop))
        ApiUserForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ApiUserForm_spreadProps = (a, b) => ApiUserForm_defProps(a, ApiUserForm_getOwnPropDescs(b));











var UserTeamType = /* @__PURE__ */ ((UserTeamType2) => {
  UserTeamType2["GlobalUser"] = "GLOBAL_USER";
  UserTeamType2["AssignTeams"] = "ASSIGN_TEAMS";
  return UserTeamType2;
})(UserTeamType || {});
const ApiUserForm = ({
  isPremiumTier,
  onCancel,
  onSubmit,
  availableTeams,
  defaultData,
  isSubmitting: isSubmittingProp = false
}) => {
  var _a, _b, _c, _d, _e, _f;
  const isNewUser = defaultData === void 0;
  const validate = (data) => validateApiUserForm(data, { isPremiumTier });
  const {
    formData,
    setField,
    commitFields,
    getError,
    clearFieldError,
    validateField,
    handleSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: {
      name: (_a = defaultData == null ? void 0 : defaultData.name) != null ? _a : "",
      global_role: (_b = defaultData == null ? void 0 : defaultData.global_role) != null ? _b : isPremiumTier ? "gitops" : "observer",
      isGlobalUser: !((_c = defaultData == null ? void 0 : defaultData.fleets) == null ? void 0 : _c.length),
      fleets: (_d = defaultData == null ? void 0 : defaultData.fleets) != null ? _d : [],
      // null (all endpoints) and undefined (field not set / free tier) both mean
      // "all endpoints"
      isSpecificEndpoints: !!((_e = defaultData == null ? void 0 : defaultData.api_endpoints) == null ? void 0 : _e.length),
      api_endpoints: (_f = defaultData == null ? void 0 : defaultData.api_endpoints) != null ? _f : []
    },
    validate,
    isSubmitting: isSubmittingProp
  });
  const onValidSubmit = (data) => {
    let apiEndpoints;
    if (isPremiumTier) {
      apiEndpoints = data.isSpecificEndpoints ? data.api_endpoints : null;
    }
    return onSubmit({
      name: data.name,
      global_role: data.isGlobalUser ? data.global_role : null,
      fleets: data.isGlobalUser ? [] : data.fleets.map((f) => ApiUserForm_spreadProps(ApiUserForm_spreadValues({}, f), { role: f.role || "observer" })),
      api_endpoints: apiEndpoints
    });
  };
  const onRoleChange = (newValue) => {
    if (newValue) {
      commitFields({ global_role: newValue.value });
    }
  };
  const onIsGlobalUserChange = (value) => {
    commitFields({ isGlobalUser: value === "GLOBAL_USER" /* GlobalUser */ });
  };
  const onAccessTypeChange = (isSpecific) => {
    commitFields(
      isSpecific ? { isSpecificEndpoints: true } : { isSpecificEndpoints: false, api_endpoints: [] }
    );
  };
  const renderGlobalRoleForm = () => /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      name: "Role",
      label: "Role",
      value: formData.global_role,
      options: (0,userManagementHelpers/* roleOptions */.zF)({ isPremiumTier, isApiOnly: true }),
      onChange: onRoleChange,
      isSearchable: false,
      isDisabled: isSubmitting
    }
  );
  const renderPermissions = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: "form-field team-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Permissions"), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      label: "Global user",
      id: "global-user",
      checked: formData.isGlobalUser,
      value: "GLOBAL_USER" /* GlobalUser */,
      name: "user-team-type",
      onChange: onIsGlobalUserChange,
      disabled: isSubmitting
    }
  ), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      label: "Assign to fleet(s)",
      id: "assign-teams",
      checked: !formData.isGlobalUser,
      value: "ASSIGN_TEAMS" /* AssignTeams */,
      name: "user-team-type",
      onChange: onIsGlobalUserChange,
      disabled: isSubmitting || !availableTeams.length
    }
  )), formData.isGlobalUser ? renderGlobalRoleForm() : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    SelectedTeamsForm/* default */.A,
    {
      availableTeams,
      usersCurrentTeams: formData.fleets,
      onFormChange: (fleets) => commitFields({ fleets }),
      isApiOnly: true,
      disabled: isSubmitting
    }
  ), getError("fleets") && /* @__PURE__ */ react.createElement("div", { className: "form-field__label form-field__label--error" }, getError("fleets"))));
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("form", { autoComplete: "off", onSubmit: handleSubmit(onValidSubmit) }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "name",
      label: "Name",
      value: formData.name,
      onChange: (value) => setField("name", value),
      onFocus: () => clearFieldError("name"),
      onBlur: () => validateField("name"),
      error: getError("name"),
      disabled: isSubmitting,
      autofocus: true,
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  ), isPremiumTier ? renderPermissions() : renderGlobalRoleForm(), isPremiumTier && /* @__PURE__ */ react.createElement(
    ApiAccessSection_ApiAccessSection,
    {
      isSpecificEndpoints: formData.isSpecificEndpoints,
      onAccessTypeChange,
      selectedEndpoints: formData.api_endpoints,
      onEndpointSelectionChange: (api_endpoints) => commitFields({ api_endpoints }),
      error: getError("api_endpoints"),
      disabled: isSubmitting
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "user-management-form__footer" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "submit",
      isLoading: isSubmitting,
      disabled: isSubmitting
    },
    isNewUser ? "Add" : "Save"
  ))));
};
/* harmony default export */ var ApiUserForm_ApiUserForm = (ApiUserForm);

;// ./frontend/pages/admin/ManageUsersPage/components/ApiUserForm/index.ts




/***/ }),

/***/ 91129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var components_forms_fields_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5410);
/* harmony import */ var components_forms_fields_DropdownWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41995);
/* harmony import */ var _helpers_userManagementHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55308);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




const baseClass = "selected-teams-form";
const generateFormListItems = (allTeams, currentTeams) => {
  return allTeams.map((team) => {
    const foundTeam = currentTeams.find(
      (currentTeam) => currentTeam.id === team.id
    );
    return __spreadProps(__spreadValues({}, team), {
      role: foundTeam ? foundTeam.role : "observer",
      isChecked: foundTeam !== void 0
    });
  });
};
const generateSelectedTeamData = (teamsFormList) => {
  return teamsFormList.reduce((selectedTeams, teamItem) => {
    if (teamItem.isChecked) {
      selectedTeams.push({
        description: teamItem.description,
        id: teamItem.id,
        host_count: teamItem.host_count,
        user_count: teamItem.user_count,
        name: teamItem.name,
        role: teamItem.role
      });
    }
    return selectedTeams;
  }, []);
};
const updateFormState = (prevTeamItems, teamId, newValue) => {
  const prevItemIndex = prevTeamItems.findIndex((item) => item.id === teamId);
  const prevItem = prevTeamItems[prevItemIndex];
  if (typeof newValue === "boolean") {
    prevItem.isChecked = newValue;
  } else {
    prevItem.role = newValue == null ? void 0 : newValue.value;
  }
  return [...prevTeamItems];
};
const useSelectedTeamState = (allTeams, currentTeams, formChange) => {
  const [teamsFormList, setTeamsFormList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    return generateFormListItems(allTeams, currentTeams);
  });
  const updateSelectedTeams = (teamId, newValue) => {
    setTeamsFormList((prevState) => {
      const updatedTeamFormList = updateFormState(prevState, teamId, newValue);
      const selectedTeamsData = generateSelectedTeamData(updatedTeamFormList);
      formChange(selectedTeamsData);
      return updatedTeamFormList;
    });
  };
  return [teamsFormList, updateSelectedTeams];
};
const SelectedTeamsForm = ({
  availableTeams,
  usersCurrentTeams,
  onFormChange,
  isApiOnly,
  onMenuOpen,
  disabled
}) => {
  const [teamsFormList, updateSelectedTeams] = useSelectedTeamState(
    availableTeams,
    usersCurrentTeams,
    onFormChange
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: `${baseClass}__list` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: `${baseClass}__header` }, "Fleets"), teamsFormList.map((teamItem) => {
    const { isChecked, name, role, id } = teamItem;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: id, className: `${baseClass}__team-item` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      components_forms_fields_Checkbox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
      {
        value: isChecked,
        name,
        disabled,
        onChange: (newValue) => updateSelectedTeams(teamItem.id, newValue)
      },
      name
    ), isChecked && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      components_forms_fields_DropdownWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      {
        name,
        value: role,
        className: `${baseClass}__role-dropdown`,
        options: (0,_helpers_userManagementHelpers__WEBPACK_IMPORTED_MODULE_3__/* .roleOptions */ .zF)({ isPremiumTier: true, isApiOnly }),
        isSearchable: false,
        isDisabled: disabled,
        onChange: (newValue) => updateSelectedTeams(teamItem.id, newValue),
        onMenuOpen
      }
    ));
  }));
};
/* harmony default export */ __webpack_exports__.A = (SelectedTeamsForm);


/***/ }),

/***/ 15815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: function() { return /* reexport */ NewUserType; },
  A: function() { return /* binding */ UserForm_UserForm; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/InfoBanner.tsx
var InfoBanner = __webpack_require__(36321);
// EXTERNAL MODULE: ./frontend/components/ModalFooter/index.ts + 1 modules
var ModalFooter = __webpack_require__(48262);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useFormValidation.ts
var useFormValidation = __webpack_require__(688);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/helpers/userManagementHelpers.ts
var userManagementHelpers = __webpack_require__(55308);
// EXTERNAL MODULE: ./frontend/pages/admin/ManageUsersPage/components/SelectedTeamsForm/SelectedTeamsForm.tsx
var SelectedTeamsForm = __webpack_require__(91129);
;// ./frontend/pages/admin/ManageUsersPage/components/SelectRoleForm/SelectRoleForm.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));




const generateSelectedTeamData = (allTeams, updatedTeam) => {
  return allTeams.map(
    (teamItem) => __spreadProps(__spreadValues({}, teamItem), {
      role: teamItem.id === (updatedTeam == null ? void 0 : updatedTeam.id) ? updatedTeam.role : teamItem.role
    })
  );
};
const SelectRoleForm = ({
  defaultTeamRole,
  currentTeam,
  teams,
  onFormChange,
  isApiOnly,
  onMenuOpen,
  disabled
}) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [selectedRole, setSelectedRole] = (0,react.useState)({
    value: defaultTeamRole.toLowerCase(),
    label: defaultTeamRole
  });
  const updateSelectedRole = (newRoleValue) => {
    if (newRoleValue) {
      const updatedTeam = __spreadProps(__spreadValues({}, currentTeam), {
        role: newRoleValue.value
      });
      onFormChange(generateSelectedTeamData(teams, updatedTeam));
      setSelectedRole(newRoleValue);
    }
  };
  return /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      name: "Team role",
      label: "Role",
      options: (0,userManagementHelpers/* roleOptions */.zF)({ isPremiumTier, isApiOnly }),
      value: selectedRole,
      onChange: updateSelectedRole,
      isSearchable: false,
      isDisabled: disabled,
      onMenuOpen
    }
  );
};
/* harmony default export */ var SelectRoleForm_SelectRoleForm = (SelectRoleForm);

// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_email/valid_email.ts
var valid_email = __webpack_require__(48907);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_password/index.ts
var valid_password = __webpack_require__(24675);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_presence/index.ts
var validate_presence = __webpack_require__(94781);
;// ./frontend/pages/admin/ManageUsersPage/components/UserForm/helpers.ts




var NewUserType = /* @__PURE__ */ ((NewUserType2) => {
  NewUserType2["AdminInvited"] = "ADMIN_INVITED";
  NewUserType2["AdminCreated"] = "ADMIN_CREATED";
  return NewUserType2;
})(NewUserType || {});
const PASSWORD_ERRORS = {
  too_short: "Enter a password with at least 12 characters",
  too_long: "Enter a password with 48 characters or fewer",
  invalid_format: "Enter a password with at least 1 number and 1 symbol"
};
const isPasswordShown = (data, { isNewUser, isInvitePending }) => (isNewUser && data.newUserType !== "ADMIN_INVITED" /* AdminInvited */ || !isNewUser && !isInvitePending) && !data.sso_enabled;
const isPasswordRequired = (data, { isNewUser, isSsoEnabled }) => isNewUser && data.newUserType === "ADMIN_CREATED" /* AdminCreated */ || !!isSsoEnabled;
const validateUserForm = (data, context) => {
  const errors = {};
  if (!(0,validate_presence/* default */.A)(data.name)) {
    errors.name = "Enter a name";
  }
  if (!context.isEmailReadOnly) {
    if (!(0,validate_presence/* default */.A)(data.email)) {
      errors.email = "Enter an email";
    } else if (!(0,valid_email/* default */.A)(data.email)) {
      errors.email = "Enter a valid email";
    }
  }
  if (isPasswordShown(data, context)) {
    const hasPassword = (0,validate_presence/* default */.A)(data.password);
    if (!hasPassword && isPasswordRequired(data, context)) {
      errors.password = "Enter a password";
    } else if (hasPassword) {
      const { error_code: errorCode, error } = (0,valid_password/* default */.A)(data.password);
      if (errorCode) {
        errors.password = PASSWORD_ERRORS[errorCode] || error;
      }
    }
  }
  if (context.isPremiumTier && !data.global_role && !data.teams.length) {
    errors.teams = "Select at least one fleet";
  }
  return errors;
};

;// ./frontend/pages/admin/ManageUsersPage/components/UserForm/UserForm.tsx

var UserForm_defProp = Object.defineProperty;
var UserForm_defProps = Object.defineProperties;
var UserForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var UserForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var UserForm_hasOwnProp = Object.prototype.hasOwnProperty;
var UserForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var UserForm_defNormalProp = (obj, key, value) => key in obj ? UserForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var UserForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (UserForm_hasOwnProp.call(b, prop))
      UserForm_defNormalProp(a, prop, b[prop]);
  if (UserForm_getOwnPropSymbols)
    for (var prop of UserForm_getOwnPropSymbols(b)) {
      if (UserForm_propIsEnum.call(b, prop))
        UserForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var UserForm_spreadProps = (a, b) => UserForm_defProps(a, UserForm_getOwnPropDescs(b));



















const baseClass = "user-form";
var UserTeamType = /* @__PURE__ */ ((UserTeamType2) => {
  UserTeamType2["GlobalUser"] = "GLOBAL_USER";
  UserTeamType2["AssignTeams"] = "ASSIGN_TEAMS";
  return UserTeamType2;
})(UserTeamType || {});
const UserForm = ({
  availableTeams,
  onCancel,
  onSubmit,
  defaultName,
  defaultEmail,
  currentUserId,
  currentTeam,
  isModifiedByGlobalAdmin,
  defaultGlobalRole,
  defaultTeamRole,
  defaultTeams,
  isPremiumTier,
  smtpConfigured,
  sesConfigured,
  canUseSso,
  isSsoEnabled,
  isMfaEnabled,
  isApiOnly,
  isNewUser = false,
  isInvitePending,
  serverErrors,
  isUpdatingUsers
}) => {
  var _a;
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const isPrimoMode = ((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo) || false;
  const formId = (0,react.useId)();
  const isEmailReadOnly = !isNewUser && !(smtpConfigured || sesConfigured);
  const validationContext = {
    isNewUser,
    isInvitePending,
    isSsoEnabled,
    isPremiumTier,
    isEmailReadOnly
  };
  const validate = (data) => validateUserForm(data, validationContext);
  const {
    formData,
    setField,
    commitFields,
    getError,
    clearFieldError,
    validateField,
    handleSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: {
      email: defaultEmail || "",
      name: defaultName || "",
      newUserType: isNewUser ? NewUserType.AdminCreated : null,
      password: "",
      sso_enabled: isSsoEnabled || false,
      mfa_enabled: isMfaEnabled || false,
      global_role: defaultGlobalRole || null,
      teams: defaultTeams || []
    },
    validate,
    serverErrors,
    isSubmitting: isUpdatingUsers,
    skipTrim: ["password"]
  });
  const isGlobalUser = formData.global_role !== null;
  (0,react.useEffect)(() => {
    if (isPrimoMode) {
      commitFields({ global_role: "observer", teams: [] });
    }
  }, [isPrimoMode, commitFields]);
  (0,react.useEffect)(() => {
    if (!canUseSso && !isNewUser && isSsoEnabled) {
      commitFields({ sso_enabled: false });
    }
  }, []);
  const onGlobalUserRoleChange = (selected) => {
    if (selected) {
      commitFields({ global_role: selected.value });
    }
  };
  const onIsGlobalUserChange = (value) => {
    commitFields({
      global_role: value === "GLOBAL_USER" /* GlobalUser */ ? "observer" : null
    });
  };
  const buildSubmitData = (data) => {
    const submitData = {
      email: data.email,
      name: data.name,
      newUserType: data.newUserType,
      password: data.password,
      sso_enabled: data.sso_enabled,
      mfa_enabled: data.mfa_enabled,
      global_role: data.global_role,
      teams: data.teams,
      currentUserId
    };
    if (!isNewUser && !isInvitePending) {
      submitData.new_password = data.password;
      submitData.password = null;
      delete submitData.newUserType;
      if (data.sso_enabled) {
        submitData.new_password = null;
      }
    }
    if (submitData.sso_enabled || data.newUserType === NewUserType.AdminInvited) {
      submitData.password = null;
    }
    if (submitData.sso_enabled) {
      submitData.mfa_enabled = false;
    }
    return data.global_role !== null ? UserForm_spreadProps(UserForm_spreadValues({}, submitData), { global_role: data.global_role, teams: [] }) : UserForm_spreadProps(UserForm_spreadValues({}, submitData), { global_role: null, teams: data.teams });
  };
  const onValidSubmit = (data) => onSubmit(buildSubmitData(data));
  const renderGlobalRoleForm = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, isPremiumTier && /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { className: `${baseClass}__user-permissions-info` }, /* @__PURE__ */ react.createElement("p", null, "Global users can manage or observe all users, entities, and settings in Fleet."), /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/docs/using-fleet/permissions#user-permissions",
        text: "Learn more about user permissions",
        newTab: true,
        variant: "banner-link"
      }
    )), /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        label: "Role",
        name: "Role",
        className: `${baseClass}__global-role-dropdown`,
        options: (0,userManagementHelpers/* roleOptions */.zF)({ isPremiumTier, isApiOnly }),
        value: formData.global_role || "Observer",
        onChange: onGlobalUserRoleChange,
        isSearchable: false,
        isDisabled: isSubmitting
      }
    ));
  };
  const renderNoTeamsMessage = () => {
    return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("strong", null, "You have no fleets.")), /* @__PURE__ */ react.createElement("p", null, "Expecting to see fleets? Try again in a few seconds as the system catches up or\xA0", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        className: `${baseClass}__create-team-link`,
        url: paths/* default */.A.ADMIN_FLEETS,
        text: "create a fleet"
      }
    ), "."));
  };
  const renderTeamsForm = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !!availableTeams.length && (isModifiedByGlobalAdmin ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      InfoBanner/* default */.A,
      {
        color: "grey",
        className: `${baseClass}__user-permissions-info`
      },
      /* @__PURE__ */ react.createElement("p", null, "Users can manage or observe fleet-specific users, entities, and settings in Fleet."),
      /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/docs/using-fleet/permissions#team-member-permissions",
          text: "Learn more about user permissions",
          newTab: true,
          variant: "banner-link"
        }
      )
    ), /* @__PURE__ */ react.createElement(
      SelectedTeamsForm/* default */.A,
      {
        availableTeams,
        usersCurrentTeams: formData.teams,
        onFormChange: (teams) => commitFields({ teams }),
        isApiOnly,
        disabled: isSubmitting
      }
    )) : /* @__PURE__ */ react.createElement(
      SelectRoleForm_SelectRoleForm,
      {
        currentTeam: currentTeam || formData.teams[0],
        teams: formData.teams,
        defaultTeamRole: defaultTeamRole || "Observer",
        onFormChange: (teams) => commitFields({ teams }),
        isApiOnly,
        disabled: isSubmitting
      }
    )), getError("teams") && /* @__PURE__ */ react.createElement("div", { className: "form-field__label form-field__label--error" }, getError("teams")), !availableTeams.length && renderNoTeamsMessage());
  };
  if (!isPremiumTier && !isGlobalUser) {
    console.log(
      `Note: Mesh Free UI does not have fleets options.

        User ${formData.name} is already assigned to a fleet and cannot be reassigned without access to Mesh Premium UI.`
    );
  }
  const renderAccountSection = () => /* @__PURE__ */ react.createElement("div", { className: "form-field" }, isModifiedByGlobalAdmin ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Account"), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      className: `${baseClass}__radio-input`,
      label: "Add user",
      id: "create-user",
      checked: formData.newUserType !== NewUserType.AdminInvited,
      value: NewUserType.AdminCreated,
      name: "new-user-type",
      onChange: (value) => commitFields({ newUserType: value }),
      disabled: isSubmitting
    }
  ), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      className: `${baseClass}__radio-input`,
      label: "Invite user",
      id: "invite-user",
      disabled: isSubmitting || !(smtpConfigured || sesConfigured),
      checked: formData.newUserType === NewUserType.AdminInvited,
      value: NewUserType.AdminInvited,
      name: "new-user-type",
      onChange: (value) => commitFields({ newUserType: value }),
      tooltip: smtpConfigured || sesConfigured ? "" : /* @__PURE__ */ react.createElement(react.Fragment, null, 'The "Invite user" feature requires that SMTP or SES is configured in order to send invitation emails.', /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "SMTP can be configured in Settings > Organization settings.")
    }
  )) : /* @__PURE__ */ react.createElement(
    "input",
    {
      type: "hidden",
      id: "create-user",
      value: NewUserType.AdminCreated,
      name: "new-user-type"
    }
  ));
  const renderNameAndEmailSection = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Full name",
      autofocus: true,
      error: getError("name"),
      name: "name",
      onChange: (value) => setField("name", value),
      onFocus: () => clearFieldError("name"),
      onBlur: () => validateField("name"),
      placeholder: "Full name",
      value: formData.name,
      disabled: isSubmitting,
      inputOptions: {
        maxLength: 80
      }
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Email",
      error: getError("email"),
      name: "email",
      type: "email",
      onChange: (value) => setField("email", value),
      onFocus: () => clearFieldError("email"),
      onBlur: () => validateField("email"),
      placeholder: "Email",
      value: formData.email,
      disabled: isSubmitting,
      readOnly: isEmailReadOnly,
      tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Editing an email address requires that SMTP or SES is configured in order to send a validation email.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "Users with Admin role can configure SMTP in", " ", /* @__PURE__ */ react.createElement("strong", null, "Settings > Organization settings"), ".")
    }
  ));
  const renderAuthenticationSection = () => /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Authentication"), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      className: `${baseClass}__radio-input`,
      label: canUseSso ? "Single sign-on" : /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "SSO is not enabled in organization settings. User must sign in with a password.")
        },
        "Single sign-on"
      ),
      id: "single-sign-on-authentication",
      checked: !!formData.sso_enabled,
      value: "true",
      name: "authentication-type",
      onChange: () => commitFields({ sso_enabled: true }),
      disabled: isSubmitting || !canUseSso
    }
  ), /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      className: `${baseClass}__radio-input`,
      label: "Password",
      id: "password-authentication",
      checked: !formData.sso_enabled,
      value: "false",
      name: "authentication-type",
      onChange: () => commitFields({ sso_enabled: false }),
      disabled: isSubmitting
    }
  ));
  const renderPasswordSection = () => /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__${isNewUser ? "" : "edit-"}password` }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Password",
      error: getError("password"),
      name: "password",
      onChange: (value) => setField("password", value),
      onFocus: () => clearFieldError("password"),
      onBlur: () => validateField("password"),
      placeholder: isNewUser ? "Password" : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      value: formData.password,
      type: "password",
      disabled: isSubmitting,
      helpText: "12-48 characters, with at least 1 number (e.g. 0 - 9) and 1 symbol (e.g. &*#).",
      blockAutoComplete: true,
      tooltip: isNewUser ? /* @__PURE__ */ react.createElement(react.Fragment, null, "This password is temporary. This user will be asked to set a new password after logging in to the Mesh UI.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "This user will not be asked to set a new password after logging in to fleetctl or the Mesh API.") : void 0
    }
  ));
  const renderTwoFactorAuthenticationOption = () => /* @__PURE__ */ react.createElement("div", { className: "form-field" }, formData.newUserType === NewUserType.AdminInvited && /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Password"), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      name: "mfa_enabled",
      onChange: (value) => commitFields({ mfa_enabled: value }),
      value: formData.mfa_enabled,
      wrapperClassName: `${baseClass}__2fa`,
      helpText: "User will be asked to authenticate with a magic link that will be sent to their email.",
      disabled: isSubmitting || !smtpConfigured && !sesConfigured
    },
    smtpConfigured || sesConfigured ? "Enable two-factor authentication (email)" : /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "This feature requires that SMTP or SES is configured in order to send authentication emails.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "SMTP can be configured in Settings > Organization settings.")
      },
      "Enable two-factor authentication (email)"
    )
  ));
  const renderGlobalAdminOptions = () => {
    if (isPrimoMode) {
      return /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: constants/* PRIMO_TOOLTIP */.OL,
          tipOffset: 20,
          position: "right",
          showArrow: true,
          underline: false
        },
        /* @__PURE__ */ react.createElement(
          Radio/* default */.A,
          {
            className: `${baseClass}__radio-input`,
            label: "Global user",
            id: "global-user",
            checked: isGlobalUser,
            value: "GLOBAL_USER" /* GlobalUser */,
            name: "user-team-type",
            onChange: onIsGlobalUserChange,
            disabled: true
          }
        ),
        /* @__PURE__ */ react.createElement(
          Radio/* default */.A,
          {
            className: `${baseClass}__radio-input`,
            label: "Assign to fleet(s)",
            id: "assign-teams",
            checked: !isGlobalUser,
            value: "ASSIGN_TEAMS" /* AssignTeams */,
            name: "user-team-type",
            onChange: onIsGlobalUserChange,
            disabled: true
          }
        )
      );
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        className: `${baseClass}__radio-input`,
        label: "Global user",
        id: "global-user",
        checked: isGlobalUser,
        value: "GLOBAL_USER" /* GlobalUser */,
        name: "user-team-type",
        onChange: onIsGlobalUserChange,
        disabled: isSubmitting
      }
    ), /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        className: `${baseClass}__radio-input`,
        label: `Assign to fleet(s)`,
        id: "assign-teams",
        checked: !isGlobalUser,
        value: "ASSIGN_TEAMS" /* AssignTeams */,
        name: "user-team-type",
        onChange: onIsGlobalUserChange,
        disabled: isSubmitting || !availableTeams.length
      }
    ));
  };
  const renderPremiumRoleOptions = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: "form-field team-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Permissions"), isModifiedByGlobalAdmin ? renderGlobalAdminOptions() : /* @__PURE__ */ react.createElement(react.Fragment, null, currentTeam ? currentTeam.name : "")), isGlobalUser ? renderGlobalRoleForm() : renderTeamsForm());
  const renderFormContent = () => {
    return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
      "form",
      {
        autoComplete: "off",
        id: formId,
        onSubmit: handleSubmit(onValidSubmit)
      },
      isNewUser && renderAccountSection(),
      renderNameAndEmailSection(),
      renderAuthenticationSection(),
      isPasswordShown(formData, validationContext) && renderPasswordSection(),
      (isPremiumTier || isMfaEnabled) && !formData.sso_enabled && renderTwoFactorAuthenticationOption(),
      isPremiumTier ? renderPremiumRoleOptions() : renderGlobalRoleForm()
    ));
  };
  const renderFooter = () => /* @__PURE__ */ react.createElement(
    ModalFooter/* default */.A,
    {
      primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          formId,
          className: `${isNewUser ? "add" : "save"}-loading
          `,
          isLoading: isSubmitting,
          disabled: isSubmitting
        },
        isNewUser ? "Add" : "Save"
      ))
    }
  );
  return /* @__PURE__ */ react.createElement(react.Fragment, null, renderFormContent(), renderFooter());
};
/* harmony default export */ var UserForm_UserForm = (UserForm);


/***/ }),

/***/ 98148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* reexport safe */ _UserForm__WEBPACK_IMPORTED_MODULE_0__.A; }
/* harmony export */ });
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15815);




/***/ }),

/***/ 55308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jk: function() { return /* binding */ getUserFieldErrors; },
/* harmony export */   zF: function() { return /* binding */ roleOptions; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const generateUpdateData = (currentUserData, formData) => {
  const updatableFields = [
    "global_role",
    "teams",
    "name",
    "email",
    "sso_enabled",
    "mfa_enabled"
  ];
  return Object.keys(formData).reduce(
    (updatedAttributes, attr) => {
      const key = attr;
      if (updatableFields.includes(attr) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(formData[key], currentUserData[key])) {
        updatedAttributes[attr] = formData[key];
      }
      return updatedAttributes;
    },
    {}
  );
};
const roleOptions = ({
  isPremiumTier,
  isApiOnly
}) => {
  const roles = [
    {
      label: "Observer",
      value: "observer"
    },
    {
      label: "Maintainer",
      value: "maintainer"
    },
    {
      label: "Admin",
      value: "admin"
    }
  ];
  if (isPremiumTier) {
    roles.splice(1, 0, {
      label: "Observer+",
      value: "observer_plus"
    });
    roles.splice(2, 0, {
      label: "Technician",
      value: "technician"
    });
    if (isApiOnly) {
      roles.splice(3, 0, {
        label: "GitOps",
        value: "gitops"
      });
    }
  }
  return roles;
};
const getUserFieldErrors = (userErrors) => {
  var _a, _b, _c;
  const reason = (_c = (_b = (_a = userErrors.data.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.reason) != null ? _c : "";
  if (reason.includes("already invited") || reason.includes("Invite") && reason.includes("already exists")) {
    return { email: "Enter an email that hasn't already been invited" };
  }
  if (reason.includes("already exists") || reason.includes("Duplicate")) {
    return { email: "Enter an email that isn't already in use" };
  }
  if (reason.includes("required criteria")) {
    return { password: "Enter a password that meets the requirements below" };
  }
  if (reason.includes("password too long")) {
    return { password: "Enter a password with 48 characters or fewer" };
  }
  return null;
};
/* harmony default export */ __webpack_exports__.Ay = ({
  generateUpdateData,
  roleOptions,
  getUserFieldErrors
});


/***/ }),

/***/ 82318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ManageUsersPage_ManageUsersPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/invites.ts
var entities_invites = __webpack_require__(63494);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var entities_users = __webpack_require__(7176);
// EXTERNAL MODULE: ./frontend/utilities/auth_token/index.ts + 1 modules
var auth_token = __webpack_require__(47936);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/admin/ManageUsersPage/components/DeleteUserModal/DeleteUserModal.tsx




const baseClass = "delete-user-form";
const DeleteUserModal = ({
  name,
  onDelete,
  onCancel,
  isUpdatingUsers
}) => {
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Delete user", onExit: onCancel, onEnter: onDelete }, /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement("p", null, "You are about to delete", " ", /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__name` }, name), " from Fleet."), /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__warning` }, "This action cannot be undone."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "button",
      variant: "alert",
      onClick: onDelete,
      className: "delete-loading",
      isLoading: isUpdatingUsers
    },
    "Delete"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var DeleteUserModal_DeleteUserModal = (DeleteUserModal);

;// ./frontend/pages/admin/ManageUsersPage/components/DeleteUserModal/index.ts



;// ./frontend/pages/admin/ManageUsersPage/components/ResetPasswordModal/ResetPasswordModal.tsx




const ResetPasswordModal_baseClass = "reset-password-modal";
const ResetPasswordModal = ({
  onResetConfirm,
  onResetCancel
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Require password reset",
      onExit: onResetCancel,
      onEnter: onResetConfirm
    },
    /* @__PURE__ */ react.createElement("div", { className: ResetPasswordModal_baseClass }, /* @__PURE__ */ react.createElement("p", null, "This user will be asked to reset their password after their next successful log in to Fleet.", /* @__PURE__ */ react.createElement("br", null), "This will revoke all active Mesh API tokens for this user."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: onResetConfirm }, "Confirm"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onResetCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var ResetPasswordModal_ResetPasswordModal = (ResetPasswordModal);

;// ./frontend/pages/admin/ManageUsersPage/components/ResetPasswordModal/index.ts



;// ./frontend/pages/admin/ManageUsersPage/components/ResetSessionsModal/ResetSessionsModal.tsx




const ResetSessionsModal_baseClass = "reset-sessions-modal";
const ResetSessionsModal = ({
  onResetConfirm,
  onResetCancel
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Reset sessions",
      onExit: onResetCancel,
      onEnter: onResetConfirm
    },
    /* @__PURE__ */ react.createElement("div", { className: ResetSessionsModal_baseClass }, /* @__PURE__ */ react.createElement("p", null, "This user will be logged out of Fleet.", /* @__PURE__ */ react.createElement("br", null), "This will revoke all active Mesh API tokens for this user."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: onResetConfirm }, "Confirm"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onResetCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var ResetSessionsModal_ResetSessionsModal = (ResetSessionsModal);

;// ./frontend/pages/admin/ManageUsersPage/components/ResetSessionsModal/index.ts



// EXTERNAL MODULE: ./frontend/components/StatusIndicator/index.ts + 1 modules
var StatusIndicator = __webpack_require__(96733);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/TextCell.tsx
var TextCell = __webpack_require__(3728);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TooltipTruncatedTextCell/index.ts + 1 modules
var TooltipTruncatedTextCell = __webpack_require__(16240);
// EXTERNAL MODULE: ./frontend/components/Tag/index.ts + 1 modules
var Tag = __webpack_require__(42619);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/pages/admin/ManageUsersPage/components/UsersTable/UsersTableConfig.tsx











const UsersTableConfig_baseClass = "users-table";
const renderApiUserIndicator = () => {
  return /* @__PURE__ */ react.createElement(Tag/* default */.A, { tooltip: "This user only has API access.", size: "xsmall" }, "API");
};
const renderApiEndpointCount = (count) => /* @__PURE__ */ react.createElement(Tag/* default */.A, { size: "xsmall" }, `${count} API endpoint${count === 1 ? "" : "s"}`);
const USER_INACTIVE_TOOLTIP = "Hasn't logged in for 30+ days";
const API_ONLY_INACTIVE_TOOLTIP = "No API activity for 30+ days";
const USER_STATUS_DISPLAY_TEXT = {
  active: "Active",
  inactive: "Inactive",
  no_access: "No access"
};
const generateUserStatus = (user) => {
  var _a;
  return USER_STATUS_DISPLAY_TEXT[(_a = user.status) != null ? _a : "active"];
};
const generateInviteStatus = (invite) => invite.global_role === null && invite.teams.length === 0 ? "No access" : "Invite pending";
const renderRole = (cellProps) => {
  if (cellProps.cell.value === "GitOps") {
    return /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The GitOps role is only available for API-only", /* @__PURE__ */ react.createElement("br", null), "users. This user has no access to the UI.")
      },
      "GitOps"
    );
  }
  if (cellProps.cell.value === "Observer+") {
    return /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Users with the Observer+ role have access to all of", /* @__PURE__ */ react.createElement("br", null), "the same functions as an Observer, with the added", /* @__PURE__ */ react.createElement("br", null), "ability to run any live report against all hosts.")
      },
      cellProps.cell.value
    );
  }
  if (cellProps.cell.value === helpers/* ROLE_VARIOUS */.jM) {
    const { roleGroups } = cellProps.row.original;
    return /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: roleGroups.map(({ role, names }) => /* @__PURE__ */ react.createElement("span", { key: role }, /* @__PURE__ */ react.createElement("b", null, role, ":"), " ", names.join(", "), /* @__PURE__ */ react.createElement("br", null))),
        underline: false,
        showArrow: true,
        position: "top",
        tipOffset: 10,
        fixedPositionStrategy: true
      },
      /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: helpers/* ROLE_VARIOUS */.jM, grey: true, italic: true })
    );
  }
  return /* @__PURE__ */ react.createElement(
    TextCell/* default */.A,
    {
      value: cellProps.cell.value,
      grey: (0,helpers/* greyCell */.iZ)(cellProps.cell.value),
      italic: (0,helpers/* greyCell */.iZ)(cellProps.cell.value),
      className: "permissions-text"
    }
  );
};
const generateTableHeaders = (actionSelectHandler, isPremiumTier) => {
  const tableHeaders = [
    {
      title: "Name",
      Header: "Name",
      disableSortBy: true,
      accessor: "name",
      Cell: (cellProps) => {
        const apiOnlyUser = "api_only" in cellProps.row.original ? cellProps.row.original.api_only : false;
        return /* @__PURE__ */ react.createElement(
          TooltipTruncatedTextCell/* default */.A,
          {
            value: cellProps.cell.value,
            suffix: apiOnlyUser && renderApiUserIndicator()
          }
        );
      }
    },
    {
      title: "Permissions",
      Header: "Permissions",
      accessor: "role",
      // react-table derives the cell/header DOM classes and the sort key from
      // `id`, so this keeps them as `permissions__*` without renaming the
      // underlying row field.
      id: "permissions",
      disableSortBy: true,
      Cell: (cellProps) => {
        const { apiEndpointCount } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement("div", { className: `${UsersTableConfig_baseClass}__permissions-content` }, renderRole(cellProps), apiEndpointCount > 0 && renderApiEndpointCount(apiEndpointCount));
      }
    },
    {
      title: "Status",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "status",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        StatusIndicator/* default */.A,
        {
          value: cellProps.cell.value,
          tooltip: cellProps.cell.value === "Inactive" ? {
            tooltipText: cellProps.row.original.api_only ? API_ONLY_INACTIVE_TOOLTIP : USER_INACTIVE_TOOLTIP
          } : void 0
        }
      )
    },
    {
      title: "Email",
      Header: "Email",
      disableSortBy: true,
      accessor: "email",
      Cell: (cellProps) => {
        const isApiOnly = cellProps.row.original.api_only;
        if (isApiOnly) {
          return /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: "API-only users do not receive emails or log into the UI.",
              underline: false
            },
            "---"
          );
        }
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value });
      }
    },
    {
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        "div",
        {
          role: "presentation",
          onClick: (e) => e.stopPropagation(),
          onKeyDown: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ react.createElement(
          ActionsDropdown/* default */.A,
          {
            className: "row-hover-button",
            options: cellProps.cell.value,
            onChange: (value) => actionSelectHandler(value, cellProps.row.original),
            placeholder: "Actions",
            menuAlign: "right",
            variant: "secondary"
          }
        )
      )
    }
  ];
  if (isPremiumTier) {
    tableHeaders.splice(2, 0, {
      title: "Fleets",
      Header: "Fleets",
      accessor: "teams",
      disableSortBy: true,
      Cell: (cellProps) => {
        const { teamNames } = cellProps.row.original;
        if (teamNames.length > 1) {
          return /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: (0,helpers/* tooltipTextWithLineBreaks */.zd)(teamNames),
              underline: false,
              showArrow: true,
              position: "top",
              tipOffset: 10,
              fixedPositionStrategy: true
            },
            /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value, grey: true, italic: true })
          );
        }
        const isGrey = (0,helpers/* greyCell */.iZ)(cellProps.cell.value);
        return /* @__PURE__ */ react.createElement(
          TextCell/* default */.A,
          {
            value: cellProps.cell.value,
            grey: isGrey,
            italic: isGrey && cellProps.cell.value !== helpers/* ROLE_GLOBAL */.NG
          }
        );
      }
    });
  }
  return tableHeaders;
};
const generateActionDropdownOptions = (isCurrentUser, isInvitePending, isSsoEnabled, isApiOnly) => {
  const disableDelete = isCurrentUser;
  let dropdownOptions = [
    {
      label: "Edit",
      disabled: false,
      value: isCurrentUser ? "editMyAccount" : "edit"
    },
    {
      label: "Require password reset",
      disabled: isInvitePending,
      value: "passwordReset"
    },
    {
      label: "Reset sessions",
      disabled: isInvitePending,
      value: "resetSessions"
    },
    {
      label: "Delete",
      disabled: disableDelete,
      value: "delete",
      tooltipContent: disableDelete ? /* @__PURE__ */ react.createElement(react.Fragment, null, "There must be at least one Admin", /* @__PURE__ */ react.createElement("br", null), "user on the account. To delete this", /* @__PURE__ */ react.createElement("br", null), "user, add or set existing user with", /* @__PURE__ */ react.createElement("br", null), 'role of "Admin".') : void 0
    }
  ];
  if (isCurrentUser) {
    dropdownOptions = dropdownOptions.filter(
      (option) => option.label !== "Reset sessions"
    );
  }
  if (isSsoEnabled || isApiOnly) {
    dropdownOptions = dropdownOptions.filter(
      (option) => option.label !== "Require password reset"
    );
  }
  return dropdownOptions;
};
const enhanceUserData = (users, currentUserId) => {
  return users.map((user) => {
    var _a, _b;
    return {
      name: user.name || constants/* DEFAULT_EMPTY_CELL_VALUE */.r2,
      status: generateUserStatus(user),
      email: user.email,
      teams: (0,helpers/* generateTeam */.ph)(user.teams, user.global_role),
      teamNames: (0,helpers/* generateTeamNames */.BS)(user.teams),
      roleGroups: (0,helpers/* generateRoleGroups */.AQ)(user.teams),
      role: (0,helpers/* generateRole */.Iw)(user.teams, user.global_role),
      actions: generateActionDropdownOptions(
        user.id === currentUserId,
        false,
        user.sso_enabled,
        user.api_only
      ),
      id: `user-${user.id}`,
      apiId: user.id,
      type: "user",
      api_only: user.api_only,
      apiEndpointCount: (_b = (_a = user.api_endpoints) == null ? void 0 : _a.length) != null ? _b : 0
    };
  });
};
const enhanceInviteData = (invites) => {
  return invites.map((invite) => {
    return {
      name: invite.name || constants/* DEFAULT_EMPTY_CELL_VALUE */.r2,
      status: generateInviteStatus(invite),
      email: invite.email,
      teams: (0,helpers/* generateTeam */.ph)(invite.teams, invite.global_role),
      teamNames: (0,helpers/* generateTeamNames */.BS)(invite.teams),
      roleGroups: (0,helpers/* generateRoleGroups */.AQ)(invite.teams),
      role: (0,helpers/* generateRole */.Iw)(invite.teams, invite.global_role),
      actions: generateActionDropdownOptions(
        false,
        true,
        invite.sso_enabled,
        false
      ),
      id: `invite-${invite.id}`,
      apiId: invite.id,
      type: "invite",
      api_only: false,
      // api only users are created through fleetctl and not invites
      apiEndpointCount: 0
    };
  });
};
const combineDataSets = (users, invites, currentUserId) => {
  return [
    ...enhanceUserData(users, currentUserId),
    ...enhanceInviteData(invites)
  ];
};


;// ./frontend/pages/admin/ManageUsersPage/components/UsersTable/UsersTable.tsx


















const ADD_USER_OPTIONS = [
  {
    label: "Regular user",
    value: "human",
    helpText: "A human with access to Fleet"
  },
  {
    label: "API-only user",
    value: "api",
    helpText: "For GitOps or Mesh API automations"
  }
];
const EmptyUsersTable = () => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    header: "No users match the current criteria",
    info: "Expecting to see users? Try again in a few seconds as the system catches up."
  }
);
const UsersTable = ({ router }) => {
  const { currentUser, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [showDeleteUserModal, setShowDeleteUserModal] = (0,react.useState)(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = (0,react.useState)(false);
  const [showResetSessionsModal, setShowResetSessionsModal] = (0,react.useState)(false);
  const [isUpdatingUsers, setIsUpdatingUsers] = (0,react.useState)(false);
  const [userEditing, setUserEditing] = (0,react.useState)(null);
  const [querySearchText, setQuerySearchText] = (0,react.useState)("");
  const {
    data: users,
    isFetching: isFetchingUsers,
    error: loadingUsersError,
    refetch: refetchUsers
  } = (0,es.useQuery)(
    ["users", querySearchText],
    () => entities_users/* default */.A.loadAll({ globalFilter: querySearchText }),
    {
      select: (data) => data,
      refetchOnWindowFocus: false
    }
  );
  const {
    data: invites,
    isFetching: isFetchingInvites,
    error: loadingInvitesError,
    refetch: refetchInvites
  } = (0,es.useQuery)(
    ["invites", querySearchText],
    () => entities_invites/* default */.A.loadAll({ globalFilter: querySearchText }),
    {
      select: (data) => {
        return data;
      },
      refetchOnWindowFocus: false
    }
  );
  const toggleDeleteUserModal = (0,react.useCallback)(
    (user) => {
      setShowDeleteUserModal(!showDeleteUserModal);
      setUserEditing(!showDeleteUserModal ? user != null ? user : null : null);
    },
    [showDeleteUserModal, setShowDeleteUserModal, setUserEditing]
  );
  const toggleResetPasswordUserModal = (0,react.useCallback)(
    (user) => {
      setShowResetPasswordModal(!showResetPasswordModal);
      setUserEditing(!showResetPasswordModal ? user != null ? user : null : null);
    },
    [showResetPasswordModal, setShowResetPasswordModal, setUserEditing]
  );
  const toggleResetSessionsUserModal = (0,react.useCallback)(
    (user) => {
      setShowResetSessionsModal(!showResetSessionsModal);
      setUserEditing(!showResetSessionsModal ? user != null ? user : null : null);
    },
    [showResetSessionsModal, setShowResetSessionsModal, setUserEditing]
  );
  const goToEditUser = (0,react.useCallback)(
    (user) => {
      if (user.type === "user" && user.apiId === (currentUser == null ? void 0 : currentUser.id)) {
        router.push(paths/* default */.A.ACCOUNT);
        return;
      }
      const editPath = paths/* default */.A.ADMIN_USERS_EDIT(user.apiId);
      router.push(
        user.type === "invite" ? `${editPath}?type=invite` : editPath
      );
    },
    [router, currentUser == null ? void 0 : currentUser.id]
  );
  const onActionSelect = (0,react.useCallback)(
    (value, user) => {
      switch (value) {
        case "edit":
        case "editMyAccount":
          goToEditUser(user);
          break;
        case "delete":
          toggleDeleteUserModal(user);
          break;
        case "passwordReset":
          toggleResetPasswordUserModal(user);
          break;
        case "resetSessions":
          toggleResetSessionsUserModal(user);
          break;
        default:
          return null;
      }
      return null;
    },
    [
      goToEditUser,
      toggleDeleteUserModal,
      toggleResetPasswordUserModal,
      toggleResetSessionsUserModal
    ]
  );
  const onTableQueryChange = (0,react.useCallback)(
    (queryData) => {
      const { searchQuery } = queryData;
      setQuerySearchText(searchQuery);
      refetchUsers();
      refetchInvites();
    },
    [refetchUsers, refetchInvites]
  );
  const onDeleteUser = () => {
    if (!userEditing) return;
    setIsUpdatingUsers(true);
    if (userEditing.type === "invite") {
      entities_invites/* default */.A.destroy(userEditing.apiId).then(() => {
        ToastNotification/* notify */.me.success(`Successfully deleted ${userEditing == null ? void 0 : userEditing.name}.`);
      }).catch(() => {
        ToastNotification/* notify */.me.error(
          `Could not delete ${userEditing == null ? void 0 : userEditing.name}. Please try again.`
        );
      }).finally(() => {
        toggleDeleteUserModal();
        refetchInvites();
        setIsUpdatingUsers(false);
      });
    } else {
      entities_users/* default */.A.destroy(userEditing.apiId).then(() => {
        ToastNotification/* notify */.me.success(`Successfully deleted ${userEditing == null ? void 0 : userEditing.name}.`);
      }).catch(() => {
        ToastNotification/* notify */.me.error(
          `Could not delete ${userEditing == null ? void 0 : userEditing.name}. Please try again.`
        );
      }).finally(() => {
        toggleDeleteUserModal();
        refetchUsers();
        setIsUpdatingUsers(false);
      });
    }
  };
  const onResetSessions = () => {
    if (!userEditing) return;
    const isResettingCurrentUser = userEditing.type === "user" && (currentUser == null ? void 0 : currentUser.id) === userEditing.apiId;
    entities_users/* default */.A.deleteSessions(userEditing.apiId).then(() => {
      if (isResettingCurrentUser) {
        auth_token/* default */.A.remove();
        setTimeout(() => {
          window.location.href = paths/* default */.A.ROOT;
        }, 500);
        return;
      }
      ToastNotification/* notify */.me.success("Successfully reset sessions.");
    }).catch(() => {
      ToastNotification/* notify */.me.error("Could not reset sessions. Please try again.");
    }).finally(() => {
      toggleResetSessionsUserModal();
    });
  };
  const resetPassword = () => {
    if (!userEditing) return;
    entities_users/* default */.A.requirePasswordReset(userEditing.apiId, { require: true }).then(() => {
      ToastNotification/* notify */.me.success("Successfully required a password reset.");
    }).catch(() => {
      ToastNotification/* notify */.me.error("Could not require a password reset. Please try again.");
    }).finally(() => {
      toggleResetPasswordUserModal();
    });
  };
  const renderDeleteUserModal = () => {
    if (!userEditing) return null;
    return /* @__PURE__ */ react.createElement(
      DeleteUserModal_DeleteUserModal,
      {
        name: userEditing.name,
        onDelete: onDeleteUser,
        onCancel: toggleDeleteUserModal,
        isUpdatingUsers
      }
    );
  };
  const renderResetPasswordModal = () => {
    return /* @__PURE__ */ react.createElement(
      ResetPasswordModal_ResetPasswordModal,
      {
        onResetConfirm: resetPassword,
        onResetCancel: toggleResetPasswordUserModal
      }
    );
  };
  const renderResetSessionsModal = () => {
    return /* @__PURE__ */ react.createElement(
      ResetSessionsModal_ResetSessionsModal,
      {
        onResetConfirm: onResetSessions,
        onResetCancel: toggleResetSessionsUserModal
      }
    );
  };
  const tableHeaders = (0,react.useMemo)(
    () => generateTableHeaders(onActionSelect, isPremiumTier || false),
    [onActionSelect, isPremiumTier]
  );
  const loadingTableData = isFetchingUsers || isFetchingInvites;
  const tableDataError = loadingUsersError || loadingInvitesError;
  const tableData = (0,react.useMemo)(
    () => !loadingTableData && !tableDataError && users && invites && (currentUser == null ? void 0 : currentUser.id) ? combineDataSets(users, invites, currentUser.id) : [],
    [loadingTableData, tableDataError, users, invites, currentUser == null ? void 0 : currentUser.id]
  );
  const renderUsersCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "users", count: tableData == null ? void 0 : tableData.length });
  }, [tableData == null ? void 0 : tableData.length]);
  const onAddUserSelect = (0,react.useCallback)(
    (value) => {
      if (value === "human") {
        router.push(paths/* default */.A.ADMIN_USERS_NEW_HUMAN);
      } else if (value === "api") {
        router.push(paths/* default */.A.ADMIN_USERS_NEW_API);
      }
    },
    [router]
  );
  const renderAddUserControl = (0,react.useCallback)(
    () => /* @__PURE__ */ react.createElement(
      ActionsDropdown/* default */.A,
      {
        options: ADD_USER_OPTIONS,
        onChange: onAddUserSelect,
        placeholder: "Add user",
        variant: "primary",
        buttonLabel: "Add user",
        className: "add-user-dropdown",
        menuAlign: "left"
      }
    ),
    [onAddUserSelect]
  );
  return /* @__PURE__ */ react.createElement(react.Fragment, null, tableDataError ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data: tableData,
      isLoading: loadingTableData,
      defaultSortHeader: "name",
      defaultSortDirection: "asc",
      inputPlaceHolder: "Search by name or email",
      customControl: renderAddUserControl,
      onQueryChange: onTableQueryChange,
      resultsTitle: "users",
      emptyComponent: EmptyUsersTable,
      searchable: true,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      isClientSidePagination: true,
      renderCount: renderUsersCount,
      disableMultiRowSelect: true,
      onClickRow: (row) => goToEditUser(row.original)
    }
  ), showDeleteUserModal && renderDeleteUserModal(), showResetSessionsModal && renderResetSessionsModal(), showResetPasswordModal && renderResetPasswordModal());
};
/* harmony default export */ var UsersTable_UsersTable = (UsersTable);

;// ./frontend/pages/admin/ManageUsersPage/components/UsersTable/index.ts



;// ./frontend/pages/admin/ManageUsersPage/ManageUsersPage.tsx




const ManageUsersPage_baseClass = "manage-users";
const ManageUsersPage = ({ router }) => {
  return /* @__PURE__ */ react.createElement("div", { className: `${ManageUsersPage_baseClass}` }, /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "Manage who can access Mesh and what they can do." }), /* @__PURE__ */ react.createElement(UsersTable_UsersTable, { router }));
};
/* harmony default export */ var ManageUsersPage_ManageUsersPage = (ManageUsersPage);

;// ./frontend/pages/admin/ManageUsersPage/index.ts




/***/ }),

/***/ 27987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ OrgSettingsPage_OrgSettingsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/utilities/deep_difference/index.ts
var deep_difference = __webpack_require__(65273);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SideNav/index.ts + 3 modules
var SideNav = __webpack_require__(67675);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/ConfirmDataCollectionDisableModal/index.ts + 1 modules
var ConfirmDataCollectionDisableModal = __webpack_require__(14431);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_url/valid_url.ts
var valid_url = __webpack_require__(90879);
// EXTERNAL MODULE: ./frontend/utilities/permissions/permissions.ts
var permissions = __webpack_require__(95681);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SettingsSection/index.ts + 1 modules
var SettingsSection = __webpack_require__(92277);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/ActivityDataRetentionSection/ActivityDataRetentionSection.tsx









const ActivityDataRetentionSection = ({
  onInputChange,
  formData
}) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    disableQueryReports,
    deleteActivities,
    activityExpiryWindow,
    preserveHostActivitiesOnReenrollment,
    disableHostsActive,
    disableVulnerabilities
  } = formData;
  const activityExpiryWindowOptions = (0,react.useMemo)(
    () => (0,helpers/* getCustomDropdownOptions */.fj)(
      constants/* ACTIVITY_EXPIRY_WINDOW_DROPDOWN_OPTIONS */.qC,
      activityExpiryWindow,
      // it's safe to assume that frequency is a number
      (frequency) => `${frequency} days`
    ),
    // intentionally leave activityExpiryWindow out of the dependencies, so that the custom
    // options are maintained even if the user changes the frequency in the UI
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [deleteActivities]
  );
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Activity & data retention" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: onInputChange,
          name: "deleteActivities",
          value: deleteActivities,
          parseTarget: true,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, allows automatic cleanup of audit logs older than the number of days specified.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "Off"), ")"))
        },
        "Delete activities"
      )
    }
  ), deleteActivities && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      isInputField: true,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Dropdown/* default */.A,
        {
          disabled: disableChildren,
          searchable: false,
          options: activityExpiryWindowOptions,
          onChange: onInputChange,
          placeholder: "Select",
          value: activityExpiryWindow,
          label: "Max activity age",
          name: "activityExpiryWindow",
          parseTarget: true
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: onInputChange,
          name: "preserveHostActivitiesOnReenrollment",
          value: preserveHostActivitiesOnReenrollment,
          parseTarget: true,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, preserves host activities after a wipe and re-enrollment. Supported for company-owned (AB) Apple hosts and Android hosts.", " ", /* @__PURE__ */ react.createElement("strong", null, "Delete activities > Max activity age "), "still applies.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "Off"), ")"))
        },
        "Preserve host activities on re-enrollment"
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: () => onInputChange({
            name: "disableQueryReports",
            value: !disableQueryReports
          }),
          name: "disableQueryReports",
          value: !disableQueryReports,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "Disabling stored results will decrease database usage, but will prevent you from accessing report results in Mesh and will delete existing results. This can also be disabled on a per-report basis.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")")),
          helpText: "Disabling this setting will delete all existing report results in Fleet."
        },
        "Store report results"
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: () => onInputChange({
            name: "disableHostsActive",
            value: !disableHostsActive
          }),
          name: "disableHostsActive",
          value: !disableHostsActive,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When disabled, Mesh stops collecting hourly hosts online data used by the dashboard chart.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")"))
        },
        "Hosts online historical reporting"
      )
    }
  ), isPremiumTier && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: () => onInputChange({
            name: "disableVulnerabilities",
            value: !disableVulnerabilities
          }),
          name: "disableVulnerabilities",
          value: !disableVulnerabilities,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When disabled, Mesh stops collecting historical vulnerability exposure data used by the dashboard chart.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")"))
        },
        "Vulnerability exposure historical reporting"
      )
    }
  ));
};
/* harmony default export */ var ActivityDataRetentionSection_ActivityDataRetentionSection = (ActivityDataRetentionSection);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/ActivityDataRetentionSection/index.ts



;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/FeaturesSection/FeaturesSection.tsx





const FeaturesSection = ({
  formData,
  onInputChange
}) => {
  const { disableLiveQuery, disableScripts, disableAIFeatures } = formData;
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Features" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: () => onInputChange({
            name: "disableLiveQuery",
            value: !disableLiveQuery
          }),
          name: "disableLiveQuery",
          value: !disableLiveQuery,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When disabled, removes the ability to run live reports (ad hoc reports executed via the UI or fleetctl).", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")"))
        },
        "Live reports"
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: () => onInputChange({ name: "disableScripts", value: !disableScripts }),
          name: "disableScripts",
          value: !disableScripts,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "Disabling script execution will block access to run scripts. Scripts may still be added and removed in the UI and API. Features that run scripts under-the-hood (e.g. software install, lock/wipe, script-only packages) will still be available.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("b", null, "On"), ")"))
        },
        "Script execution"
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: () => onInputChange({
            name: "disableAIFeatures",
            value: !disableAIFeatures
          }),
          name: "disableAIFeatures",
          value: !disableAIFeatures,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When disabled, removes AI features such as pre-filling forms with descriptions generated by a large language model (LLM).", " ", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")")),
          helpText: "When enabled, only policy queries (SQL) are sent to the LLM. Mesh doesn't use this data to train models."
        },
        "Generative AI"
      )
    }
  ));
};
/* harmony default export */ var FeaturesSection_FeaturesSection = (FeaturesSection);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/FeaturesSection/index.ts



// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/HostLifecycleSection/HostLifecycleSection.tsx








const HostLifecycleSection = ({
  isPremiumTier = false,
  onInputChange,
  formData,
  formErrors = {}
}) => {
  const {
    enableHostExpiry,
    hostExpiryWindow,
    requireHardwareAttestation,
    onlyAllowAppleBusinessEnrollment
  } = formData;
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Host lifecycle" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: onInputChange,
          name: "enableHostExpiry",
          value: enableHostExpiry,
          parseTarget: true,
          labelTooltipContent: !disableChildren && /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, allows automatic cleanup of hosts that have not communicated with Mesh in the number of days specified.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "Off"), ")"))
        },
        "Host expiry"
      )
    }
  ), enableHostExpiry && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      isInputField: true,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          disabled: disableChildren,
          label: "Host expiry window",
          type: "number",
          onChange: onInputChange,
          name: "hostExpiryWindow",
          value: hostExpiryWindow,
          parseTarget: true,
          error: formErrors.hostExpiryWindow
        }
      )
    }
  ), isPremiumTier && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: onInputChange,
          name: "requireHardwareAttestation",
          value: requireHardwareAttestation,
          parseTarget: true,
          helpText: /* @__PURE__ */ react.createElement("span", null, "Apple hosts that support Managed Device Attestation that auto-enroll (DEP) will use ACME with Managed Device Attestation.", /* @__PURE__ */ react.createElement("br", null), ' If "Allow only Apple Business enrollments" is also enabled, some hosts may be unable to enroll.', " ", /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              text: "Learn more",
              newTab: true,
              url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/device-attestation`
            }
          ))
        },
        "Use hardware attestation"
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren,
          onChange: onInputChange,
          name: "onlyAllowAppleBusinessEnrollment",
          value: onlyAllowAppleBusinessEnrollment,
          parseTarget: true,
          helpText: "Enabling this setting will allow only hosts from Apple Business to use MDM features. Manually turning on MDM won't work."
        },
        "Allow only Apple Business enrollments"
      )
    }
  )));
};
/* harmony default export */ var HostLifecycleSection_HostLifecycleSection = (HostLifecycleSection);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/HostLifecycleSection/index.ts



;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/ServerAuthenticationSection/ServerAuthenticationSection.tsx






const ServerAuthenticationSection = ({
  formData,
  onInputChange,
  formErrors = {},
  onInputBlur,
  appConfig
}) => {
  const {
    ssoUserURL,
    mdmAppleServerURL,
    domain,
    verifySSLCerts,
    enableStartTLS
  } = formData;
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Server & authentication" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      isInputField: true,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          disabled: disableChildren,
          label: "SSO user URL",
          onChange: onInputChange,
          onBlur: onInputBlur,
          name: "ssoUserURL",
          value: ssoUserURL,
          parseTarget: true,
          error: formErrors.ssoUserURL,
          tooltip: !disableChildren && // Manual break: too long for `text-wrap: balance` (~6-line cap).
          /* @__PURE__ */ react.createElement(react.Fragment, null, "Update this URL if you want your Mesh users (admins, maintainers, observers) to login via SSO using a URL that's different than the base URL of your Fleet instance.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "If not configured, login via SSO will use the base URL of the Mesh instance.")
        }
      )
    }
  ), (appConfig == null ? void 0 : appConfig.mdm.enabled_and_configured) && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      isInputField: true,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          disabled: disableChildren,
          label: "Apple MDM server URL",
          onChange: onInputChange,
          onBlur: onInputBlur,
          name: "mdmAppleServerURL",
          value: mdmAppleServerURL,
          parseTarget: true,
          error: formErrors.mdmAppleServerURL,
          tooltip: !disableChildren && "Update this URL if you're self-hosting Mesh and you want your hosts to talk to this URL for MDM features. If not configured, hosts will use the base URL of the Mesh instance.",
          helpText: "If this URL changes and hosts already have MDM turned on, the end users will have to turn MDM off and back on to use MDM features."
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Domain",
      onChange: onInputChange,
      onBlur: onInputBlur,
      name: "domain",
      value: domain,
      parseTarget: true,
      error: formErrors.domain,
      tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "If you need to specify a HELO domain, you can do it here.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "Blank"), ")"))
    }
  ), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: onInputChange,
      name: "verifySSLCerts",
      value: verifySSLCerts,
      parseTarget: true,
      labelTooltipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Turn this off (not recommended) if you use a self-signed certificate.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")"))
    },
    "Verify SSL certs"
  ), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: onInputChange,
      name: "enableStartTLS",
      value: enableStartTLS,
      parseTarget: true,
      labelTooltipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Detects if STARTTLS is enabled in your SMTP server and starts to use it.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "On"), ")"))
    },
    "Enable STARTTLS"
  ));
};
/* harmony default export */ var ServerAuthenticationSection_ServerAuthenticationSection = (ServerAuthenticationSection);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/components/ServerAuthenticationSection/index.ts



;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/Advanced.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const validateFormData = ({
  ssoUserURL,
  mdmAppleServerURL,
  domain,
  hostExpiryWindow,
  enableHostExpiry
}) => {
  const errors = {};
  if (!ssoUserURL) {
    delete errors.ssoUserURL;
  } else if (!(0,valid_url/* default */.A)({
    url: ssoUserURL
  })) {
    errors.ssoUserURL = "SSO user URL is not a valid URL";
  }
  if (!mdmAppleServerURL) {
    delete errors.mdmAppleServerURL;
  } else if (!(0,valid_url/* default */.A)({
    url: mdmAppleServerURL,
    allowLocalHost: false,
    protocols: ["http", "https"]
  })) {
    errors.mdmAppleServerURL = "Apple MDM server URL is not a valid URL";
  }
  if (!domain) {
    delete errors.domain;
  } else if (!(0,valid_url/* default */.A)({ url: domain })) {
    errors.domain = "Domain is not a valid URL";
  }
  if (enableHostExpiry && (!hostExpiryWindow || parseInt(hostExpiryWindow, 10) <= 0)) {
    errors.hostExpiryWindow = "Host expiry window must be a positive number";
  }
  return errors;
};
const Advanced = ({
  appConfig,
  handleSubmit,
  isUpdatingSettings
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const [formData, setFormData] = (0,react.useState)({
    ssoUserURL: ((_a = appConfig.sso_settings) == null ? void 0 : _a.sso_server_url) || "",
    mdmAppleServerURL: ((_b = appConfig.mdm) == null ? void 0 : _b.apple_server_url) || "",
    domain: ((_c = appConfig.smtp_settings) == null ? void 0 : _c.domain) || "",
    verifySSLCerts: ((_d = appConfig.smtp_settings) == null ? void 0 : _d.verify_ssl_certs) || false,
    enableStartTLS: (_e = appConfig.smtp_settings) == null ? void 0 : _e.enable_start_tls,
    enableHostExpiry: appConfig.host_expiry_settings.host_expiry_enabled || false,
    hostExpiryWindow: appConfig.host_expiry_settings.host_expiry_window && appConfig.host_expiry_settings.host_expiry_window.toString() || "0",
    deleteActivities: appConfig.activity_expiry_settings.activity_expiry_enabled || false,
    activityExpiryWindow: appConfig.activity_expiry_settings.activity_expiry_window || 30,
    disableLiveQuery: appConfig.server_settings.live_query_disabled || false,
    disableScripts: appConfig.server_settings.scripts_disabled || false,
    disableAIFeatures: appConfig.server_settings.ai_features_disabled || false,
    disableQueryReports: appConfig.server_settings.query_reports_disabled || false,
    requireHardwareAttestation: ((_f = appConfig.mdm) == null ? void 0 : _f.apple_require_hardware_attestation) || false,
    onlyAllowAppleBusinessEnrollment: appConfig.mdm.only_allow_apple_business_enrollment,
    preserveHostActivitiesOnReenrollment: appConfig.activity_expiry_settings.preserve_host_activities_on_reenrollment || false,
    disableHostsActive: !((_i = (_h = (_g = appConfig.features) == null ? void 0 : _g.historical_data) == null ? void 0 : _h.uptime) != null ? _i : true),
    disableVulnerabilities: !((_l = (_k = (_j = appConfig.features) == null ? void 0 : _j.historical_data) == null ? void 0 : _k.vulnerabilities) != null ? _l : true)
  });
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [confirmModalOpen, setConfirmModalOpen] = (0,react.useState)(false);
  const onInputChange = ({
    name,
    value
  }) => {
    const newFormData = __spreadProps(__spreadValues({}, formData), { [name]: value });
    setFormData(newFormData);
    const newErrs = validateFormData(newFormData);
    const errsToSet = {};
    Object.keys(formErrors).forEach((k) => {
      if (newErrs[k]) {
        errsToSet[k] = newErrs[k];
      }
    });
    setFormErrors(errsToSet);
  };
  const onInputBlur = () => {
    setFormErrors(validateFormData(formData));
  };
  const datasetsBeingDisabled = (0,react.useMemo)(() => {
    var _a2, _b2, _c2;
    const list = [];
    const original = (_a2 = appConfig.features) == null ? void 0 : _a2.historical_data;
    if (((_b2 = original == null ? void 0 : original.uptime) != null ? _b2 : true) && formData.disableHostsActive) {
      list.push("uptime");
    }
    if (((_c2 = original == null ? void 0 : original.vulnerabilities) != null ? _c2 : true) && formData.disableVulnerabilities) {
      list.push("vulnerabilities");
    }
    return list;
  }, [appConfig, formData.disableHostsActive, formData.disableVulnerabilities]);
  const performSave = () => __async(null, null, function* () {
    const payload = {
      server_settings: {
        live_reporting_disabled: formData.disableLiveQuery,
        discard_reports_data: formData.disableQueryReports,
        scripts_disabled: formData.disableScripts,
        deferred_save_host: appConfig.server_settings.deferred_save_host,
        ai_features_disabled: formData.disableAIFeatures
      },
      smtp_settings: {
        domain: formData.domain,
        verify_ssl_certs: formData.verifySSLCerts,
        enable_start_tls: formData.enableStartTLS || false
      },
      host_expiry_settings: {
        host_expiry_enabled: formData.enableHostExpiry,
        host_expiry_window: parseInt(formData.hostExpiryWindow, 10) || void 0
      },
      activity_expiry_settings: {
        activity_expiry_enabled: formData.deleteActivities,
        activity_expiry_window: formData.activityExpiryWindow || void 0,
        preserve_host_activities_on_reenrollment: formData.preserveHostActivitiesOnReenrollment
      },
      mdm: {
        apple_server_url: formData.mdmAppleServerURL,
        apple_require_hardware_attestation: formData.requireHardwareAttestation,
        only_allow_apple_business_enrollment: formData.onlyAllowAppleBusinessEnrollment
      },
      sso_settings: {
        sso_server_url: formData.ssoUserURL
      },
      features: {
        historical_data: {
          uptime: !formData.disableHostsActive,
          vulnerabilities: !formData.disableVulnerabilities
        }
      }
    };
    try {
      const ok = yield handleSubmit(payload);
      if (ok) {
        setConfirmModalOpen(false);
      }
    } catch (e) {
    }
  });
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const errs = validateFormData(formData);
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    if (datasetsBeingDisabled.length > 0) {
      setConfirmModalOpen(true);
      return;
    }
    performSave();
  };
  const isPremiumLicense = (0,permissions/* isPremiumTier */.sq)(appConfig);
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement(
    HostLifecycleSection_HostLifecycleSection,
    {
      onInputChange,
      formData,
      formErrors,
      isPremiumTier: isPremiumLicense
    }
  ), /* @__PURE__ */ react.createElement(
    ActivityDataRetentionSection_ActivityDataRetentionSection,
    {
      formData,
      onInputChange
    }
  ), /* @__PURE__ */ react.createElement(FeaturesSection_FeaturesSection, { formData, onInputChange }), /* @__PURE__ */ react.createElement(
    ServerAuthenticationSection_ServerAuthenticationSection,
    {
      formData,
      onInputChange,
      onInputBlur,
      formErrors,
      appConfig
    }
  ), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "submit",
      disabled: Object.keys(formErrors).length > 0,
      className: "save-loading button-wrap",
      isLoading: isUpdatingSettings
    },
    "Save"
  )), confirmModalOpen && /* @__PURE__ */ react.createElement(
    ConfirmDataCollectionDisableModal/* default */.A,
    {
      scope: "global",
      datasets: datasetsBeingDisabled,
      isUpdating: isUpdatingSettings,
      onConfirm: performSave,
      onCancel: () => setConfirmModalOpen(false)
    }
  ));
};
/* harmony default export */ var Advanced_Advanced = (Advanced);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Advanced/index.ts



// EXTERNAL MODULE: ./node_modules/js-yaml/dist/js-yaml.mjs
var js_yaml = __webpack_require__(20382);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_yaml/index.js
var validate_yaml = __webpack_require__(55069);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/InfoBanner.tsx
var InfoBanner = __webpack_require__(36321);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/YamlAce/index.jsx
var YamlAce = __webpack_require__(82907);
// EXTERNAL MODULE: ./frontend/utilities/yaml/index.ts
var yaml = __webpack_require__(66584);
;// ./frontend/pages/admin/OrgSettingsPage/cards/Agents/Agents.tsx

var Agents_defProp = Object.defineProperty;
var Agents_defProps = Object.defineProperties;
var Agents_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Agents_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Agents_hasOwnProp = Object.prototype.hasOwnProperty;
var Agents_propIsEnum = Object.prototype.propertyIsEnumerable;
var Agents_defNormalProp = (obj, key, value) => key in obj ? Agents_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Agents_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Agents_hasOwnProp.call(b, prop))
      Agents_defNormalProp(a, prop, b[prop]);
  if (Agents_getOwnPropSymbols)
    for (var prop of Agents_getOwnPropSymbols(b)) {
      if (Agents_propIsEnum.call(b, prop))
        Agents_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Agents_spreadProps = (a, b) => Agents_defProps(a, Agents_getOwnPropDescs(b));













const baseClass = "app-config-form";
const Agents = ({
  appConfig,
  handleSubmit,
  isPremiumTier,
  isUpdatingSettings
}) => {
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;
  const { ADMIN_FLEETS } = paths/* default */.A;
  const [formData, setFormData] = (0,react.useState)({
    agentOptions: (0,yaml/* agentOptionsToYaml */.k_)(appConfig.agent_options)
  });
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const { agentOptions } = formData;
  const handleAgentOptionsChange = (value) => {
    setFormData(Agents_spreadProps(Agents_spreadValues({}, formData), { agentOptions: value }));
  };
  const validateForm = () => {
    const errors = {};
    if (agentOptions) {
      const { error: yamlError, valid: yamlValid } = (0,validate_yaml/* default */.A)(agentOptions);
      if (!yamlValid) {
        errors.agent_options = (0,yaml/* constructErrorString */.V4)(yamlError);
      }
    }
    setFormErrors(errors);
  };
  (0,react.useEffect)(() => {
    validateForm();
  }, [agentOptions]);
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formDataToSubmit = agentOptions ? {
      agent_options: js_yaml/* default.load */.Ay.load(agentOptions)
    } : { agent_options: constants/* EMPTY_AGENT_OPTIONS */.tU };
    handleSubmit(formDataToSubmit);
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Agent options" }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__section-description` }, "Agent options configure Fleet's agent (fleetd). When you update agent options, they will be applied the next time a host checks in to Fleet.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/docs/configuration/agent-configuration",
          text: "Learn more about agent options",
          newTab: true,
          multiline: true
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit, autoComplete: "off" }, isPremiumTier ? /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, null, /* @__PURE__ */ react.createElement("div", null, "These options are not applied to hosts in a fleet. To update agent options for hosts in a fleet, head to the\xA0", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: ADMIN_FLEETS, text: "Fleets page" }), ".")) : /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, null, "Want some hosts to have different options?\xA0", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/docs/using-fleet/teams",
      text: "Learn more about fleets",
      newTab: true,
      variant: "banner-link"
    }
  )), /* @__PURE__ */ react.createElement(
    YamlAce/* default */.A,
    {
      onChange: handleAgentOptionsChange,
      name: "agentOptions",
      value: agentOptions,
      parseTarget: true,
      error: formErrors.agent_options,
      label: "YAML",
      disabled: gitOpsModeEnabled
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: Object.keys(formErrors).length > 0 || disableChildren,
          className: "button-wrap",
          isLoading: isUpdatingSettings
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var Agents_Agents = (Agents);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Agents/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(57761);
;// ./frontend/components/forms/validators/valid_hostname/valid_hostname.ts


/* harmony default export */ var valid_hostname = ((addr) => {
  const fqdnOpts = { require_tld: false };
  const isValid = (0,validator.isFQDN)(addr, fqdnOpts) || (0,validator.isIP)(addr);
  if (!isValid) {
    const lastColonIndex = addr.lastIndexOf(":");
    if (lastColonIndex > 0) {
      const port = addr.substring(lastColonIndex + 1);
      let host = addr.substring(0, lastColonIndex);
      if (host.startsWith("[") && host.endsWith("]")) {
        host = host.slice(1, -1);
      }
      if ((0,validator.isPort)(port) && ((0,validator.isFQDN)(host, fqdnOpts) || (0,validator.isIP)(host))) {
        return true;
      }
    }
  }
  return isValid;
});

// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
;// ./frontend/pages/admin/OrgSettingsPage/cards/constants.ts

const DEFAULT_TRANSPARENCY_URL = "https://fleetdm.com/transparency";
const authMethodOptions = [
  { label: "Plain", value: "authmethod_plain" },
  { label: "Cram MD5", value: "authmethod_cram_md5" },
  { label: "Login", value: "authmethod_login" }
];
const authTypeOptions = [
  { label: "Username and password", value: "authtype_username_password" },
  { label: "None", value: "authtype_none" }
];
/* harmony default export */ var cards_constants = ({
  authMethodOptions,
  authTypeOptions
});

;// ./frontend/pages/admin/OrgSettingsPage/cards/FleetDesktop/FleetDesktop.tsx

var FleetDesktop_defProp = Object.defineProperty;
var FleetDesktop_defProps = Object.defineProperties;
var FleetDesktop_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var FleetDesktop_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FleetDesktop_hasOwnProp = Object.prototype.hasOwnProperty;
var FleetDesktop_propIsEnum = Object.prototype.propertyIsEnumerable;
var FleetDesktop_defNormalProp = (obj, key, value) => key in obj ? FleetDesktop_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FleetDesktop_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FleetDesktop_hasOwnProp.call(b, prop))
      FleetDesktop_defNormalProp(a, prop, b[prop]);
  if (FleetDesktop_getOwnPropSymbols)
    for (var prop of FleetDesktop_getOwnPropSymbols(b)) {
      if (FleetDesktop_propIsEnum.call(b, prop))
        FleetDesktop_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var FleetDesktop_spreadProps = (a, b) => FleetDesktop_defProps(a, FleetDesktop_getOwnPropDescs(b));













const END_USER_AUTH_LABEL_ID = "end-user-authentication-label";
const SSO_REQUIRES_IDP_TOOLTIP = "This setting requires an IdP configured in Settings > Integrations > Authentication (SSO) > End users.";
const SSO_TOKEN_ROTATION_TOOLTIP = "Fleet still rotates the token. SSO authentication is added on top.";
var EndUserAuthType = /* @__PURE__ */ ((EndUserAuthType2) => {
  EndUserAuthType2["TOKEN_ROTATION"] = "token_rotation";
  EndUserAuthType2["SSO"] = "sso";
  return EndUserAuthType2;
})(EndUserAuthType || {});
const FleetDesktop = ({
  appConfig,
  handleSubmit,
  isPremiumTier,
  isUpdatingSettings
}) => {
  var _a, _b, _c, _d;
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;
  const [formData, setFormData] = (0,react.useState)({
    transparencyURL: ((_a = appConfig.fleet_desktop) == null ? void 0 : _a.transparency_url) || DEFAULT_TRANSPARENCY_URL,
    alternativeBrowserHost: ((_b = appConfig.fleet_desktop) == null ? void 0 : _b.alternative_browser_host) || "",
    ssoEnabled: (_d = (_c = appConfig.fleet_desktop) == null ? void 0 : _c.sso_enabled) != null ? _d : false
  });
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const onInputChange = ({ name, value }) => {
    setFormData((prevFormData) => FleetDesktop_spreadProps(FleetDesktop_spreadValues({}, prevFormData), {
      [name]: value.toString()
    }));
    setFormErrors((prevErrors) => {
      const newErrors = FleetDesktop_spreadValues({}, prevErrors);
      delete newErrors[name];
      return newErrors;
    });
  };
  const onEndUserAuthChange = (value) => {
    setFormData((prevFormData) => FleetDesktop_spreadProps(FleetDesktop_spreadValues({}, prevFormData), {
      ssoEnabled: value === "sso" /* SSO */
    }));
  };
  const validateForm = () => {
    const { transparencyURL, alternativeBrowserHost } = formData;
    const errors = {};
    if (transparencyURL && !(0,valid_url/* default */.A)({ url: transparencyURL, protocols: ["http", "https"] })) {
      errors.transparencyURL = `Custom transparency URL must include protocol (e.g. https://)`;
    }
    if (alternativeBrowserHost && !valid_hostname(alternativeBrowserHost)) {
      errors.alternativeBrowserHost = `Browser host must be a valid hostname or IP address (e.g. example.com, 192.168.1.50) and may include a port.`;
    }
    setFormErrors(errors);
  };
  const getAlternativeBrowserHostUrlTooltip = () => /* @__PURE__ */ react.createElement(react.Fragment, null, "If you are using mTLS for your agent-server communication, specify an alternative host to direct Mesh Desktop through.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/alternative-browser-host",
      text: "Learn more ",
      variant: "tooltip-link",
      newTab: true
    }
  ));
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formDataForAPI = {
      fleet_desktop: {
        transparency_url: formData.transparencyURL,
        alternative_browser_host: formData.alternativeBrowserHost,
        sso_enabled: formData.ssoEnabled
      }
    };
    handleSubmit(formDataForAPI);
  };
  if (!isPremiumTier) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null);
  }
  const isIdPConfigured = (0,permissions/* isEndUserIdPConfigured */._g)(appConfig);
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Fleet Desktop" }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: "Customize the Mesh Desktop experience."
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Custom transparency URL",
      onChange: onInputChange,
      name: "transparencyURL",
      value: formData.transparencyURL,
      parseTarget: true,
      onBlur: validateForm,
      error: formErrors.transparencyURL,
      placeholder: "https://fleetdm.com/transparency",
      disabled: gitOpsModeEnabled,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, " ", 'By default, end users who click "About Fleet" in the Mesh Desktop menu are taken to', " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/transparency",
          text: "https://fleetdm.com/transparency",
          newTab: true,
          multiline: true
        }
      ), " ")
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: getAlternativeBrowserHostUrlTooltip() }, "Browser host"),
      onChange: onInputChange,
      onBlur: validateForm,
      name: "alternativeBrowserHost",
      value: formData.alternativeBrowserHost,
      parseTarget: true,
      error: formErrors.alternativeBrowserHost,
      disabled: gitOpsModeEnabled,
      helpText: "If not set, Mesh Desktop uses your Mesh web address."
    }
  ), /* @__PURE__ */ react.createElement(
    "fieldset",
    {
      className: "form-field",
      "aria-labelledby": END_USER_AUTH_LABEL_ID
    },
    /* @__PURE__ */ react.createElement("div", { className: "form-field__label", id: END_USER_AUTH_LABEL_ID }, "End user authentication"),
    /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        label: "Hourly token rotation",
        id: "end-user-auth-token-rotation",
        name: "end-user-authentication",
        value: "token_rotation" /* TOKEN_ROTATION */,
        checked: !formData.ssoEnabled,
        disabled: gitOpsModeEnabled,
        onChange: onEndUserAuthChange
      }
    ),
    /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        label: /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            showArrow: true,
            underline: false,
            position: "right",
            tipOffset: 12,
            tipContent: isIdPConfigured ? SSO_TOKEN_ROTATION_TOOLTIP : SSO_REQUIRES_IDP_TOOLTIP
          },
          "Single sign-on (SSO)"
        ),
        id: "end-user-auth-sso",
        name: "end-user-authentication",
        value: "sso" /* SSO */,
        checked: formData.ssoEnabled,
        disabled: gitOpsModeEnabled || !isIdPConfigured,
        onChange: onEndUserAuthChange
      }
    )
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: Object.keys(formErrors).length > 0 || disableChildren,
          className: "button-wrap",
          isLoading: isUpdatingSettings
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var FleetDesktop_FleetDesktop = (FleetDesktop);

;// ./frontend/pages/admin/OrgSettingsPage/cards/FleetDesktop/index.ts



// EXTERNAL MODULE: ./frontend/components/icons/OrgLogoIcon/index.js + 1 modules
var OrgLogoIcon = __webpack_require__(20794);
// EXTERNAL MODULE: ./frontend/services/entities/logo.ts
var logo = __webpack_require__(93645);
// EXTERNAL MODULE: ./frontend/utilities/file/orgLogoFile.ts
var orgLogoFile = __webpack_require__(3466);
;// ./frontend/pages/admin/OrgSettingsPage/cards/Info/Info.tsx

var Info_defProp = Object.defineProperty;
var Info_defProps = Object.defineProperties;
var Info_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Info_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Info_hasOwnProp = Object.prototype.hasOwnProperty;
var Info_propIsEnum = Object.prototype.propertyIsEnumerable;
var Info_defNormalProp = (obj, key, value) => key in obj ? Info_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Info_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Info_hasOwnProp.call(b, prop))
      Info_defNormalProp(a, prop, b[prop]);
  if (Info_getOwnPropSymbols)
    for (var prop of Info_getOwnPropSymbols(b)) {
      if (Info_propIsEnum.call(b, prop))
        Info_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Info_spreadProps = (a, b) => Info_defProps(a, Info_getOwnPropDescs(b));
var Info_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};














const Info_baseClass = "app-config-form";
const cardClass = "org-info";
const LogoCard = ({
  label,
  mode,
  state,
  originalUrl,
  inputRef,
  onEdit,
  onDelete,
  onFileChange
}) => {
  let previewSrc = originalUrl;
  if (state.pendingUpload) {
    previewSrc = state.pendingUpload.url;
  } else if (state.pendingDelete) {
    previewSrc = "";
  }
  const hasCustomLogo = previewSrc !== "";
  return /* @__PURE__ */ react.createElement("div", { className: `${cardClass}__logo-card` }, /* @__PURE__ */ react.createElement("div", { className: `${cardClass}__logo-card-header` }, /* @__PURE__ */ react.createElement("span", { className: "form-field__label" }, label), /* @__PURE__ */ react.createElement("div", { className: `${cardClass}__logo-card-actions` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "top",
      tipOffset: 4,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "subdued",
          onClick: onEdit,
          disabled: disableChildren,
          title: "Replace logo",
          icon: "pencil",
          ariaLabel: "Replace logo"
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "top",
      tipOffset: 4,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "subdued",
          onClick: onDelete,
          disabled: disableChildren || !hasCustomLogo,
          title: "Remove logo",
          icon: "trash",
          ariaLabel: "Remove logo"
        }
      )
    }
  ))), /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${cardClass}__icon-preview ${cardClass}__${mode}-background`
    },
    /* @__PURE__ */ react.createElement(OrgLogoIcon/* default */.A, { className: `${cardClass}__icon-img`, src: previewSrc })
  ), /* @__PURE__ */ react.createElement(
    "input",
    {
      ref: inputRef,
      type: "file",
      accept: orgLogoFile/* ORG_LOGO_ACCEPT */.Qi,
      onChange: (e) => onFileChange(e, mode),
      className: `${cardClass}__hidden-file-input`
    }
  ));
};
const Info = ({
  appConfig,
  handleSubmit,
  isUpdatingSettings
}) => {
  const queryClient = (0,es.useQueryClient)();
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;
  const [formData, setFormData] = (0,react.useState)({
    orgName: appConfig.org_info.org_name || "",
    orgSupportURL: appConfig.org_info.contact_url || "https://fleetdm.com/company/contact"
  });
  const { orgName, orgSupportURL } = formData;
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const lightOriginalUrl = appConfig.org_info.org_logo_url_light_mode || appConfig.org_info.org_logo_url_light_background || "";
  const darkOriginalUrl = appConfig.org_info.org_logo_url_dark_mode || appConfig.org_info.org_logo_url || "";
  const [lightLogo, setLightLogo] = (0,react.useState)({
    pendingUpload: null,
    pendingDelete: false
  });
  const [darkLogo, setDarkLogo] = (0,react.useState)({
    pendingUpload: null,
    pendingDelete: false
  });
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const lightInputRef = (0,react.useRef)(null);
  const darkInputRef = (0,react.useRef)(null);
  const pendingUrlsRef = (0,react.useRef)([]);
  (0,react.useEffect)(() => {
    var _a, _b;
    pendingUrlsRef.current = [
      (_a = lightLogo.pendingUpload) == null ? void 0 : _a.url,
      (_b = darkLogo.pendingUpload) == null ? void 0 : _b.url
    ].filter((u) => !!u);
  }, [lightLogo.pendingUpload, darkLogo.pendingUpload]);
  (0,react.useEffect)(
    () => () => {
      pendingUrlsRef.current.forEach((u) => URL.revokeObjectURL(u));
    },
    []
  );
  const onInputChange = ({ name, value }) => {
    setFormData(Info_spreadProps(Info_spreadValues({}, formData), { [name]: value }));
    setFormErrors({});
  };
  const computeFormErrors = () => {
    const errors = {};
    if (!orgName) {
      errors.org_name = "Organization name must be present";
    }
    if (!orgSupportURL) {
      errors.org_support_url = `Organization support URL must be present`;
    } else if (!(0,valid_url/* default */.A)({ url: orgSupportURL, protocols: ["http", "https", "file"] })) {
      errors.org_support_url = "Organization support URL is not a valid URL";
    }
    return errors;
  };
  const validateForm = () => {
    setFormErrors(computeFormErrors());
  };
  const setLogoFile = (setter, file) => {
    const url = URL.createObjectURL(file);
    setter((prev) => {
      if (prev.pendingUpload) URL.revokeObjectURL(prev.pendingUpload.url);
      return Info_spreadProps(Info_spreadValues({}, prev), {
        pendingUpload: { file, url },
        pendingDelete: false
      });
    });
  };
  const onLogoFileChange = (e, mode) => Info_async(null, null, function* () {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    e.target.value = "";
    if (!file) return;
    const result = yield (0,orgLogoFile/* validateOrgLogoFile */.Ol)(file);
    if (!result.valid) {
      ToastNotification/* notify */.me.error(result.error || "Invalid logo file.");
      return;
    }
    setLogoFile(mode === "light" ? setLightLogo : setDarkLogo, file);
  });
  const onLightDelete = () => setLightLogo((prev) => {
    if (prev.pendingUpload) URL.revokeObjectURL(prev.pendingUpload.url);
    return Info_spreadProps(Info_spreadValues({}, prev), { pendingUpload: null, pendingDelete: true });
  });
  const onDarkDelete = () => setDarkLogo((prev) => {
    if (prev.pendingUpload) URL.revokeObjectURL(prev.pendingUpload.url);
    return Info_spreadProps(Info_spreadValues({}, prev), { pendingUpload: null, pendingDelete: true });
  });
  const onFormSubmit = (evt) => Info_async(null, null, function* () {
    evt.preventDefault();
    const errors = computeFormErrors();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setIsSaving(true);
    try {
      let orgInfoOk = false;
      try {
        const formDataToSubmit = {
          org_info: {
            org_name: orgName,
            contact_url: orgSupportURL
          }
        };
        orgInfoOk = yield handleSubmit(formDataToSubmit);
      } catch (e) {
        ToastNotification/* notify */.me.error("Couldn't save organization info. Please try again.", {
          response: e
        });
        return;
      }
      if (!orgInfoOk) return;
      const lightDeleted = lightLogo.pendingDelete && !!lightOriginalUrl;
      const darkDeleted = darkLogo.pendingDelete && !!darkOriginalUrl;
      const opsByMode = {};
      if (lightLogo.pendingUpload) {
        const f = lightLogo.pendingUpload.file;
        opsByMode.light = () => logo/* default */.A.upload(f, "light");
      } else if (lightDeleted) {
        opsByMode.light = () => logo/* default */.A.delete("light");
      }
      if (darkLogo.pendingUpload) {
        const f = darkLogo.pendingUpload.file;
        opsByMode.dark = () => logo/* default */.A.upload(f, "dark");
      } else if (darkDeleted) {
        opsByMode.dark = () => logo/* default */.A.delete("dark");
      }
      const failedModes = [];
      const succeededModes = [];
      const pendingOps = [];
      if (opsByMode.light) {
        pendingOps.push({ mode: "light", op: opsByMode.light });
      }
      if (opsByMode.dark) {
        pendingOps.push({ mode: "dark", op: opsByMode.dark });
      }
      for (const { mode, op } of pendingOps) {
        try {
          yield op();
          succeededModes.push(mode);
        } catch (e) {
          failedModes.push(mode);
        }
      }
      if (succeededModes.length > 0) {
        yield queryClient.invalidateQueries(["config"]);
      }
      const reset = (prev) => {
        if (prev.pendingUpload) URL.revokeObjectURL(prev.pendingUpload.url);
        return Info_spreadProps(Info_spreadValues({}, prev), { pendingUpload: null, pendingDelete: false });
      };
      if (succeededModes.includes("light")) setLightLogo(reset);
      if (succeededModes.includes("dark")) setDarkLogo(reset);
      if (failedModes.length > 0) {
        const label = failedModes.map((m) => `${m} mode`).join(" and ");
        ToastNotification/* notify */.me.error(`Couldn't update the ${label} logo. Please try again.`);
      }
    } finally {
      setIsSaving(false);
    }
  });
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { className: cardClass, title: "Organization info" }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: /* @__PURE__ */ react.createElement("p", { className: `${Info_baseClass}__section-description` }, "This logo is displayed in the top navigation, setup experience window, and MDM migration dialog. Please use", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/learn-more-about/organization-logo-size",
          text: "recommended sizes",
          newTab: true
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement("div", { className: `${cardClass}__logo-grid` }, /* @__PURE__ */ react.createElement(
    LogoCard,
    {
      label: "Organization logo (light mode)",
      mode: "light",
      state: lightLogo,
      originalUrl: lightOriginalUrl,
      inputRef: lightInputRef,
      onEdit: () => {
        var _a;
        return (_a = lightInputRef.current) == null ? void 0 : _a.click();
      },
      onDelete: onLightDelete,
      onFileChange: onLogoFileChange
    }
  ), /* @__PURE__ */ react.createElement(
    LogoCard,
    {
      label: "Organization logo (dark mode)",
      mode: "dark",
      state: darkLogo,
      originalUrl: darkOriginalUrl,
      inputRef: darkInputRef,
      onEdit: () => {
        var _a;
        return (_a = darkInputRef.current) == null ? void 0 : _a.click();
      },
      onDelete: onDarkDelete,
      onFileChange: onLogoFileChange
    }
  )), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Organization name",
      onChange: onInputChange,
      name: "orgName",
      value: orgName,
      parseTarget: true,
      onBlur: validateForm,
      error: formErrors.org_name,
      disabled: gitOpsModeEnabled
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, 'URL is used in "Reach out to IT" links shown to the end user (e.g. self service and during MDM migration).')
        },
        "Organization support URL"
      ),
      onChange: onInputChange,
      name: "orgSupportURL",
      value: orgSupportURL,
      parseTarget: true,
      onBlur: validateForm,
      error: formErrors.org_support_url,
      disabled: gitOpsModeEnabled
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: Object.keys(formErrors).length > 0 || disableChildren,
          className: "button-wrap",
          isLoading: isUpdatingSettings || isSaving
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var Info_Info = (Info);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Info/index.ts



// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_email/valid_email.ts
var valid_email = __webpack_require__(48907);
// EXTERNAL MODULE: ./frontend/hooks/useFormValidation.ts
var useFormValidation = __webpack_require__(688);
;// ./frontend/pages/admin/OrgSettingsPage/cards/Smtp/Smtp.tsx
















const validate = (data) => {
  const errors = {};
  const {
    enableSMTP,
    smtpSenderAddress,
    smtpServer,
    smtpPort,
    smtpAuthenticationType,
    smtpUsername,
    smtpPassword
  } = data;
  if (enableSMTP) {
    if (!smtpSenderAddress) {
      errors.smtpSenderAddress = "Enter a sender address";
    } else if (!(0,valid_email/* default */.A)(smtpSenderAddress)) {
      errors.smtpSenderAddress = "Enter a valid sender address";
    }
    if (!smtpServer) {
      errors.smtpServer = "Enter an SMTP server";
    }
    if (!smtpPort) {
      errors.smtpPort = "Enter a server port";
    }
    if (smtpAuthenticationType === "authtype_username_password") {
      if (!smtpUsername) {
        errors.smtpUsername = "Enter an SMTP username";
      }
      if (!smtpPassword) {
        errors.smtpPassword = "Enter an SMTP password";
      }
    }
  } else if (smtpSenderAddress && !(0,valid_email/* default */.A)(smtpSenderAddress)) {
    errors.smtpSenderAddress = "Enter a valid sender address";
  }
  return errors;
};
const Smtp_baseClass = "app-config-form";
const Smtp = ({
  appConfig,
  handleSubmit,
  isUpdatingSettings
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;
  const sesConfigured = ((_a = appConfig.email) == null ? void 0 : _a.backend) === "ses" || false;
  const {
    formData,
    setField,
    commitFields,
    getError,
    clearFieldError,
    validateField,
    handleSubmit: onSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: {
      enableSMTP: ((_b = appConfig.smtp_settings) == null ? void 0 : _b.enable_smtp) || false,
      smtpSenderAddress: ((_c = appConfig.smtp_settings) == null ? void 0 : _c.sender_address) || "",
      smtpServer: ((_d = appConfig.smtp_settings) == null ? void 0 : _d.server) || "",
      smtpPort: (_e = appConfig.smtp_settings) == null ? void 0 : _e.port,
      smtpEnableSSLTLS: ((_f = appConfig.smtp_settings) == null ? void 0 : _f.enable_ssl_tls) || false,
      smtpAuthenticationType: ((_g = appConfig.smtp_settings) == null ? void 0 : _g.authentication_type) || "",
      smtpUsername: ((_h = appConfig.smtp_settings) == null ? void 0 : _h.user_name) || "",
      smtpPassword: ((_i = appConfig.smtp_settings) == null ? void 0 : _i.password) || "",
      smtpAuthenticationMethod: ((_j = appConfig.smtp_settings) == null ? void 0 : _j.authentication_method) || ""
    },
    validate,
    isSubmitting: isUpdatingSettings,
    skipTrim: ["smtpPassword"]
  });
  const onValidSubmit = (data) => handleSubmit({
    smtp_settings: {
      enable_smtp: data.enableSMTP,
      sender_address: data.smtpSenderAddress,
      server: data.smtpServer,
      port: Number(data.smtpPort),
      authentication_type: data.smtpAuthenticationType,
      user_name: data.smtpUsername,
      password: data.smtpPassword,
      enable_ssl_tls: data.smtpEnableSSLTLS,
      authentication_method: data.smtpAuthenticationMethod
    }
  });
  const renderSmtpAuthCredentials = () => {
    if (formData.smtpAuthenticationType === "authtype_none") {
      return null;
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "SMTP username",
        name: "smtpUsername",
        value: formData.smtpUsername,
        onChange: (value) => setField("smtpUsername", value),
        onFocus: () => clearFieldError("smtpUsername"),
        onBlur: () => validateField("smtpUsername"),
        error: getError("smtpUsername"),
        blockAutoComplete: true,
        ignore1password: false,
        disabled: isSubmitting
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "SMTP password",
        type: "password",
        name: "smtpPassword",
        value: formData.smtpPassword,
        onChange: (value) => setField("smtpPassword", value),
        onFocus: () => clearFieldError("smtpPassword"),
        onBlur: () => validateField("smtpPassword"),
        error: getError("smtpPassword"),
        blockAutoComplete: true,
        ignore1password: false,
        disabled: isSubmitting
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        label: "Auth method",
        options: authMethodOptions,
        placeholder: "",
        onChange: (value) => commitFields({ smtpAuthenticationMethod: value }),
        name: "smtpAuthenticationMethod",
        value: formData.smtpAuthenticationMethod,
        disabled: isSubmitting
      }
    ));
  };
  const renderSesEnabled = () => {
    const sesBaseClass = `${Smtp_baseClass}__ses-enabled`;
    return /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "xxlarge", className: sesBaseClass }, /* @__PURE__ */ react.createElement("div", { className: `${sesBaseClass}__content` }, /* @__PURE__ */ react.createElement("p", { className: `${sesBaseClass}__title` }, "Email already configured"), /* @__PURE__ */ react.createElement("p", null, "To configure SMTP,", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: isPremiumTier ? constants/* CONTACT_FLEET_LINK */.F6 : "https://fleetdm.com/slack",
        text: "get help",
        newTab: true
      }
    ))));
  };
  const renderSmtpForm = () => {
    return /* @__PURE__ */ react.createElement("form", { onSubmit: onSubmit(onValidSubmit), autoComplete: "off" }, /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `form ${gitOpsModeEnabled ? "disabled-by-gitops-mode" : ""}`
      },
      /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          name: "enableSMTP",
          value: formData.enableSMTP,
          onChange: (value) => commitFields({ enableSMTP: value }),
          disabled: isSubmitting
        },
        "Enable SMTP"
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "Sender address",
          name: "smtpSenderAddress",
          value: formData.smtpSenderAddress,
          onChange: (value) => setField("smtpSenderAddress", value),
          onFocus: () => clearFieldError("smtpSenderAddress"),
          onBlur: () => validateField("smtpSenderAddress"),
          error: getError("smtpSenderAddress"),
          tooltip: "The sender address for emails from Fleet.",
          disabled: isSubmitting
        }
      ),
      /* @__PURE__ */ react.createElement("div", { className: "smtp-server-inputs" }, /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "SMTP server",
          name: "smtpServer",
          value: formData.smtpServer,
          onChange: (value) => setField("smtpServer", value),
          onFocus: () => clearFieldError("smtpServer"),
          onBlur: () => validateField("smtpServer"),
          error: getError("smtpServer"),
          tooltip: "The hostname / private IP address and corresponding port of your organization's SMTP server.",
          disabled: isSubmitting
        }
      ), /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          label: "\xA0",
          type: "number",
          name: "smtpPort",
          value: formData.smtpPort,
          onChange: (value) => setField("smtpPort", value ? Number(value) : void 0),
          onFocus: () => clearFieldError("smtpPort"),
          onBlur: () => validateField("smtpPort"),
          error: getError("smtpPort"),
          disabled: isSubmitting
        }
      )),
      /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          name: "smtpEnableSSLTLS",
          value: formData.smtpEnableSSLTLS,
          onChange: (value) => commitFields({ smtpEnableSSLTLS: value }),
          labelTooltipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "To disable this setting, STARTTLS must first be disabled in", " ", /* @__PURE__ */ react.createElement("strong", null, "Organization settings"), " >", " ", /* @__PURE__ */ react.createElement("strong", null, "Advanced options"), "."),
          disabled: isSubmitting
        },
        "Use SSL/TLS to connect (recommended)"
      ),
      /* @__PURE__ */ react.createElement(
        Dropdown/* default */.A,
        {
          label: "Authentication type",
          options: authTypeOptions,
          onChange: (value) => commitFields({ smtpAuthenticationType: value }),
          name: "smtpAuthenticationType",
          value: formData.smtpAuthenticationType,
          disabled: isSubmitting,
          tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "If your mail server requires authentication, you need to specify the authentication type here.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("strong", null, "No Authentication"), " - Select this if your SMTP is open.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("strong", null, "Username & Password"), " - Select this if your SMTP server requires authentication with a username and password.")
        }
      ),
      renderSmtpAuthCredentials()
    ), /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: disableChildren ? "" : "Saving changes will send a test email",
            position: "right",
            className: "button-wrap",
            tipOffset: 8,
            showArrow: true,
            underline: false
          },
          /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              type: "submit",
              disabled: disableChildren || isSubmitting,
              isLoading: isSubmitting
            },
            "Save"
          )
        )
      }
    ));
  };
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "SMTP options" }, sesConfigured ? renderSesEnabled() : renderSmtpForm());
};
/* harmony default export */ var Smtp_Smtp = (Smtp);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Smtp/index.ts



;// ./frontend/pages/admin/OrgSettingsPage/cards/Statistics/Statistics.tsx

var Statistics_defProp = Object.defineProperty;
var Statistics_defProps = Object.defineProperties;
var Statistics_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Statistics_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Statistics_hasOwnProp = Object.prototype.hasOwnProperty;
var Statistics_propIsEnum = Object.prototype.propertyIsEnumerable;
var Statistics_defNormalProp = (obj, key, value) => key in obj ? Statistics_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Statistics_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Statistics_hasOwnProp.call(b, prop))
      Statistics_defNormalProp(a, prop, b[prop]);
  if (Statistics_getOwnPropSymbols)
    for (var prop of Statistics_getOwnPropSymbols(b)) {
      if (Statistics_propIsEnum.call(b, prop))
        Statistics_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Statistics_spreadProps = (a, b) => Statistics_defProps(a, Statistics_getOwnPropDescs(b));







const Statistics_baseClass = "app-config-form";
const Statistics = ({
  appConfig,
  handleSubmit,
  isPremiumTier,
  isUpdatingSettings
}) => {
  const [formData, setFormData] = (0,react.useState)({
    enableUsageStatistics: appConfig.server_settings.enable_analytics
  });
  const { enableUsageStatistics } = formData;
  const onInputChange = ({ name, value }) => {
    setFormData(Statistics_spreadProps(Statistics_spreadValues({}, formData), { [name]: value }));
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formDataToSubmit = {
      server_settings: {
        enable_analytics: enableUsageStatistics,
        deferred_save_host: appConfig.server_settings.deferred_save_host,
        discard_reports_data: appConfig.server_settings.query_reports_disabled,
        scripts_disabled: appConfig.server_settings.scripts_disabled
      }
    };
    handleSubmit(formDataToSubmit);
  };
  const telemetryAlwaysEnabled = isPremiumTier && !appConfig.license.allow_disable_telemetry;
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "Usage statistics" }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: /* @__PURE__ */ react.createElement("p", { className: `${Statistics_baseClass}__section-description` }, "Help us improve Mesh by sending us anonymous usage statistics.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "This information helps our team better understand feature adoption and usage, and allows us to see how Mesh is adding value, so that we can make better product decisions. Mesh Premium customers always submit usage statistics data.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/docs/using-fleet/usage-statistics#usage-statistics",
          text: "Learn more",
          newTab: true
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: onFormSubmit, autoComplete: "off" }, /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      onChange: onInputChange,
      name: "enableUsageStatistics",
      value: telemetryAlwaysEnabled ? true : enableUsageStatistics,
      parseTarget: true,
      disabled: telemetryAlwaysEnabled
    },
    "Enable usage statistics"
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: disableChildren || telemetryAlwaysEnabled,
          className: "button-wrap",
          isLoading: isUpdatingSettings
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var Statistics_Statistics = (Statistics);

;// ./frontend/pages/admin/OrgSettingsPage/cards/Statistics/index.ts



// EXTERNAL MODULE: ./frontend/utilities/error_messages.ts
var error_messages = __webpack_require__(86375);
;// ./frontend/pages/admin/OrgSettingsPage/cards/WebAddress/WebAddress.tsx









const WebAddress_validate = ({ serverURL }) => {
  const errors = {};
  if (!serverURL) {
    errors.serverURL = "Enter your Mesh web address";
  } else if (!(0,valid_url/* default */.A)({
    url: serverURL,
    protocols: ["http", "https"],
    allowLocalHost: true
  })) {
    errors.serverURL = error_messages/* default */.A;
  }
  return errors;
};
const WebAddress_baseClass = "app-config-form";
const WebAddress = ({
  appConfig,
  handleSubmit,
  isUpdatingSettings
}) => {
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;
  const {
    formData,
    setField,
    getError,
    clearFieldError,
    validateField,
    handleSubmit: onSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: {
      serverURL: appConfig.server_settings.server_url || ""
    },
    validate: WebAddress_validate,
    isSubmitting: isUpdatingSettings
  });
  const onValidSubmit = (data) => handleSubmit({
    server_settings: {
      server_url: data.serverURL
    }
  });
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { className: WebAddress_baseClass, title: "Fleet web address" }, /* @__PURE__ */ react.createElement("form", { onSubmit: onSubmit(onValidSubmit), autoComplete: "off" }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "URL",
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Include base path only (eg. no ", /* @__PURE__ */ react.createElement("code", null, "/latest"), ")"),
      name: "serverURL",
      value: formData.serverURL,
      onChange: (value) => setField("serverURL", value),
      onFocus: () => clearFieldError("serverURL"),
      onBlur: () => validateField("serverURL"),
      error: getError("serverURL"),
      tooltip: "The base URL of this instance for use in Mesh links.",
      disabled: gitOpsModeEnabled || isSubmitting
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: disableChildren || isSubmitting,
          className: "button-wrap",
          isLoading: isSubmitting
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var WebAddress_WebAddress = (WebAddress);

;// ./frontend/pages/admin/OrgSettingsPage/cards/WebAddress/index.ts



;// ./frontend/pages/admin/OrgSettingsPage/OrgSettingsNavItems.tsx









const ORG_SETTINGS_NAV_ITEMS = [
  {
    title: "Organization info",
    urlSection: "organization",
    path: paths/* default */.A.ADMIN_ORGANIZATION_INFO,
    Card: Info_Info
  },
  {
    title: "Fleet web address",
    urlSection: "webaddress",
    path: paths/* default */.A.ADMIN_ORGANIZATION_WEBADDRESS,
    Card: WebAddress_WebAddress
  },
  {
    title: "SMTP options",
    urlSection: "smtp",
    path: paths/* default */.A.ADMIN_ORGANIZATION_SMTP,
    Card: Smtp_Smtp
  },
  {
    title: "Agent options",
    urlSection: "agents",
    path: paths/* default */.A.ADMIN_ORGANIZATION_AGENTS,
    Card: Agents_Agents
  },
  {
    title: "Usage statistics",
    urlSection: "statistics",
    path: paths/* default */.A.ADMIN_ORGANIZATION_STATISTICS,
    Card: Statistics_Statistics
  },
  {
    title: "Fleet Desktop",
    urlSection: "fleet-desktop",
    path: paths/* default */.A.ADMIN_ORGANIZATION_FLEET_DESKTOP,
    // isPremium: true,
    Card: FleetDesktop_FleetDesktop
  },
  {
    title: "Advanced options",
    urlSection: "advanced",
    path: paths/* default */.A.ADMIN_ORGANIZATION_ADVANCED,
    Card: Advanced_Advanced
  }
];
/* harmony default export */ var OrgSettingsNavItems = (ORG_SETTINGS_NAV_ITEMS);

;// ./frontend/pages/admin/OrgSettingsPage/OrgSettingsPage.tsx

var OrgSettingsPage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};











const OrgSettingsPage_baseClass = "org-settings";
const OrgSettingsPage = ({ params, router }) => {
  var _a;
  const { section } = params;
  const DEFAULT_SETTINGS_SECTION = OrgSettingsNavItems[0];
  const [isUpdatingSettings, setIsUpdatingSettings] = (0,react.useState)(false);
  const { isFreeTier, isPremiumTier, setConfig, isSandboxMode } = (0,react.useContext)(
    app/* AppContext */.BR
  );
  if (isSandboxMode) {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS);
  }
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const {
    data: appConfig,
    isLoading: isLoadingAppConfig,
    refetch: refetchConfig
  } = (0,es.useQuery)(["config"], () => config/* default */.A.loadAll(), {
    select: (data) => data,
    onSuccess: (data) => {
      setConfig(data);
    }
  });
  const onFormSubmit = (0,react.useCallback)(
    (formUpdates) => OrgSettingsPage_async(null, null, function* () {
      if (!appConfig) {
        return false;
      }
      setIsUpdatingSettings(true);
      const diff = (0,deep_difference/* default */.A)(formUpdates, appConfig);
      diff.agent_options = formUpdates.agent_options;
      try {
        yield config/* default */.A.update(diff);
        ToastNotification/* notify */.me.success("Successfully updated settings.");
        refetchConfig();
        return true;
      } catch (response) {
        const resp = response;
        if (resp == null ? void 0 : resp.data.errors[0].reason.includes("could not dial smtp host")) {
          ToastNotification/* notify */.me.error("Could not connect to SMTP server. Please try again.", {
            response
          });
        } else if (resp == null ? void 0 : resp.data.errors) {
          const reason = resp == null ? void 0 : resp.data.errors[0].reason;
          const agentOptionsInvalid = reason.includes("unsupported key provided") || reason.includes("invalid value type");
          const isAgentOptionsError = agentOptionsInvalid || reason.includes("script_execution_timeout' value exceeds limit.");
          ToastNotification/* notify */.me.error(
            /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't update", " ", isAgentOptionsError ? "agent options" : "settings", ": ", reason, agentOptionsInvalid && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("br", null), "If you're not using the latest osquery, use the fleetctl apply --force command to override validation.")),
            { response }
          );
        }
        return false;
      } finally {
        setIsUpdatingSettings(false);
      }
    }),
    [appConfig, refetchConfig]
  );
  let navItems = OrgSettingsNavItems;
  if (!isPremiumTier) {
    navItems = OrgSettingsNavItems.filter(
      (item) => item.urlSection !== "fleet-desktop"
    );
  }
  const currentFormSection = (_a = navItems.find((item) => item.urlSection === section)) != null ? _a : DEFAULT_SETTINGS_SECTION;
  const CurrentCard = currentFormSection.Card;
  if (isFreeTier && section === "fleet-desktop") {
    handlePageError({ status: 403 });
    return null;
  }
  return /* @__PURE__ */ react.createElement("div", { className: `${OrgSettingsPage_baseClass}` }, /* @__PURE__ */ react.createElement(
    SideNav/* default */.A,
    {
      className: `${OrgSettingsPage_baseClass}__side-nav`,
      navItems,
      activeItem: currentFormSection.urlSection,
      CurrentCard: !isLoadingAppConfig && appConfig ? /* @__PURE__ */ react.createElement(
        CurrentCard,
        {
          appConfig,
          handleSubmit: onFormSubmit,
          isUpdatingSettings,
          isPremiumTier,
          router
        }
      ) : /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)
    }
  ));
};
/* harmony default export */ var OrgSettingsPage_OrgSettingsPage = (OrgSettingsPage);

;// ./frontend/pages/admin/OrgSettingsPage/index.ts




/***/ }),

/***/ 29422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ downloadBase64ToFile; }
/* harmony export */ });

const downloadBase64ToFile = (data, fileName) => {
  const linkSource = `data:application/octet-stream;base64,${data}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};


/***/ }),

/***/ 35092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ HostStatusWebhookPreviewModal_HostStatusWebhookPreviewModal; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/pages/admin/components/HostStatusWebhookPreviewModal/HostStatusWebhookPreviewModal.tsx





const baseClass = "host-status-webhook-preview-modal";
const getHostStatusPreview = (teamScope) => {
  const data = {
    unseen_hosts: 1,
    total_hosts: 2,
    days_unseen: 3,
    team_id: 123
  };
  if (!teamScope) {
    delete data.team_id;
  }
  return {
    text: "More than X% of your hosts have not checked into Mesh for more than Y days. You've been sent this message because the Host status webhook is enabled in your Mesh instance.",
    data
  };
};
const HostStatusWebhookPreviewModal = ({
  isTeamScope = false,
  toggleModal
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Host status webhook",
      onExit: toggleModal,
      onEnter: toggleModal,
      className: baseClass
    },
    /* @__PURE__ */ react.createElement("p", null, "An example request sent to your configured ", /* @__PURE__ */ react.createElement("b", null, "Destination URL"), "."),
    /* @__PURE__ */ react.createElement(
      "pre",
      {
        dangerouslySetInnerHTML: {
          __html: (0,helpers/* syntaxHighlight */._j)(getHostStatusPreview(isTeamScope))
        }
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: toggleModal }, "Close"))
  );
};
/* harmony default export */ var HostStatusWebhookPreviewModal_HostStatusWebhookPreviewModal = (HostStatusWebhookPreviewModal);

;// ./frontend/pages/admin/components/HostStatusWebhookPreviewModal/index.ts




/***/ }),

/***/ 83246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97126);
/* harmony import */ var utilities_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90508);



/* harmony default export */ __webpack_exports__.A = ({
  getCredentials: () => {
    const { MDM_MICROSOFT_GRAPH_CREDENTIALS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
    return (0,services__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)("GET", MDM_MICROSOFT_GRAPH_CREDENTIALS);
  },
  applyCredentials: (credentials) => {
    const { MDM_MICROSOFT_GRAPH_CREDENTIALS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
    return (0,services__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)("PUT", MDM_MICROSOFT_GRAPH_CREDENTIALS, {
      microsoft_graph_credentials: credentials
    });
  },
  deleteCredentials: () => {
    const { MDM_MICROSOFT_GRAPH_CREDENTIALS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
    return (0,services__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)("PUT", MDM_MICROSOFT_GRAPH_CREDENTIALS, {
      microsoft_graph_credentials: []
    });
  }
});


/***/ }),

/***/ 66584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V4: function() { return /* binding */ constructErrorString; },
/* harmony export */   k_: function() { return /* binding */ agentOptionsToYaml; }
/* harmony export */ });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20382);


const constructErrorString = (yamlError) => {
  return `${yamlError.name}: ${yamlError.reason} at line ${yamlError.line}`;
};
const agentOptionsToYaml = (agentOpts) => {
  agentOpts || (agentOpts = { config: {} });
  if (!agentOpts.overrides || Object.keys(agentOpts.overrides).length === 0) {
    delete agentOpts.overrides;
  }
  return js_yaml__WEBPACK_IMPORTED_MODULE_0__/* ["default"].dump */ .Ay.dump(agentOpts);
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (constructErrorString)));


/***/ }),

/***/ 82907:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45584);



const YamlAce = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/* import() | ace-editor */[__webpack_require__.e(96), __webpack_require__.e(76), __webpack_require__.e(638)]).then(__webpack_require__.bind(__webpack_require__, 72921)));
const LazyYamlAce = (props) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
  fallback: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    verticalPadding: "small"
  })
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(YamlAce, props));
/* harmony default export */ __webpack_exports__.A = (LazyYamlAce);


/***/ }),

/***/ 55069:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export validateYaml */
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20382);


const invalidYamlResponse = (message) => {
  return {
    valid: false,
    error: message
  };
};
const validYamlResponse = {
  valid: true,
  error: null
};
const validateYaml = (yamlText) => {
  if (!yamlText) {
    return invalidYamlResponse("YAML text must be present");
  }
  try {
    js_yaml__WEBPACK_IMPORTED_MODULE_0__/* ["default"].load */ .Ay.load(yamlText);
    return validYamlResponse;
  } catch (error) {
    if (error instanceof js_yaml__WEBPACK_IMPORTED_MODULE_0__/* ["default"].YAMLException */ .Ay.YAMLException) {
      return invalidYamlResponse({
        name: "Syntax Error",
        reason: error.reason,
        line: error.mark.line
      });
    }
    return invalidYamlResponse(error.message);
  }
};
/* harmony default export */ __webpack_exports__.A = (validateYaml);


/***/ })

}]);