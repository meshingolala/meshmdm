"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[944],{

/***/ 70699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ FileProgressModal_FileProgressModal; }
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/FileDetails/index.ts + 1 modules
var FileDetails = __webpack_require__(36291);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/components/FileProgressModal/FileProgressModal.tsx






const baseClass = "file-progress-modal";
const FileProgressModal = ({
  graphicNames = "file-pkg",
  fileDetails,
  fileProgress
}) => /* @__PURE__ */ react.createElement(
  Modal/* default */.A,
  {
    className: baseClass,
    title: "Add software",
    width: "large",
    onExit: lodash.noop,
    disableClosingModal: true
  },
  /* @__PURE__ */ react.createElement(Card/* default */.A, { color: "grey", className: `${baseClass}__card` }, /* @__PURE__ */ react.createElement(
    FileDetails/* default */.A,
    {
      graphicNames,
      fileDetails,
      progress: fileProgress,
      canEdit: false,
      onFileSelect: lodash.noop
    }
  ))
);
/* harmony default export */ var FileProgressModal_FileProgressModal = (FileProgressModal);

;// ./frontend/components/FileProgressModal/index.ts




/***/ }),

/***/ 5719:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ LastUpdatedHostCount_LastUpdatedHostCount; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
;// ./frontend/components/LastUpdatedHostCount/LastUpdatedHostCount.tsx



const baseClass = "last-updated-host-count";
const LastUpdatedHostCount = ({
  hostCount,
  lastUpdatedAt
}) => {
  const tooltipContent = /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time host data was updated. ", /* @__PURE__ */ react.createElement("br", null), "Click the host count to see the most", /* @__PURE__ */ react.createElement("br", null), " up-to-date host count.");
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, hostCount), lastUpdatedAt !== void 0 && /* @__PURE__ */ react.createElement(
    LastUpdatedText/* default */.A,
    {
      lastUpdatedAt,
      customTooltipText: tooltipContent
    }
  ));
};
/* harmony default export */ var LastUpdatedHostCount_LastUpdatedHostCount = (LastUpdatedHostCount);

;// ./frontend/components/LastUpdatedHostCount/index.ts




/***/ }),

/***/ 48392:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ TeamsHeader_TeamsHeader; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/FleetsDropdown/index.tsx + 1 modules
var FleetsDropdown = __webpack_require__(82196);
;// ./frontend/components/TeamsHeader/TeamsHeader.tsx



const TeamsHeader = ({
  isOnGlobalTeam,
  currentTeamId,
  userTeams = [],
  onTeamChange
}) => {
  if (userTeams) {
    if (userTeams.length > 1 || isOnGlobalTeam) {
      return /* @__PURE__ */ react.createElement(
        FleetsDropdown/* default */.A,
        {
          currentUserFleets: userTeams,
          selectedFleetId: currentTeamId,
          onChange: onTeamChange,
          includeUnassigned: true
        }
      );
    }
    if (userTeams.length === 1 && !isOnGlobalTeam) {
      return /* @__PURE__ */ react.createElement("h1", null, userTeams[0].name);
    }
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null);
};
/* harmony default export */ var TeamsHeader_TeamsHeader = (TeamsHeader);

;// ./frontend/components/TeamsHeader/index.ts




/***/ }),

/***/ 63898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


const useBlockNavigation = (block) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!block) return void 0;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = true;
    };
    addEventListener("beforeunload", handler);
    return () => removeEventListener("beforeunload", handler);
  }, [block]);
};
/* harmony default export */ __webpack_exports__.A = (useBlockNavigation);


/***/ }),

/***/ 37965:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareAppStore_SoftwareAppStore; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/InfoBanner.tsx
var InfoBanner = __webpack_require__(36321);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareOptionsSelector/SoftwareOptionsSelector.tsx
var SoftwareOptionsSelector = __webpack_require__(65019);
;// ./frontend/pages/SoftwarePage/components/forms/SoftwareAndroidForm/helpers.tsx

const generateFormValidation = (formData) => {
  const formValidation = {
    isValid: true
  };
  if (!formData.applicationID) {
    formValidation.isValid = false;
  }
  return formValidation;
};
/* harmony default export */ var SoftwareAndroidForm_helpers = (generateFormValidation);

;// ./frontend/pages/SoftwarePage/components/forms/SoftwareAndroidForm/SoftwareAndroidForm.tsx

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












const baseClass = "software-android-form";
const SoftwareAndroidForm = ({
  softwareAndroidForEdit,
  onSubmit,
  isLoading = false,
  onCancel
}) => {
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const [formData, setFormData] = (0,react.useState)(
    softwareAndroidForEdit ? {
      applicationID: softwareAndroidForEdit.app_store_id || "",
      selfService: softwareAndroidForEdit.self_service || false,
      // 4.77 Currently unavailable to change
      automaticInstall: softwareAndroidForEdit.automatic_install || false,
      // 4.77 Currently unavailable for Android apps
      targetType: (0,helpers/* getTargetType */.Ag)(softwareAndroidForEdit),
      customTarget: (0,helpers/* getCustomTarget */.lQ)(softwareAndroidForEdit),
      labelTargets: (0,helpers/* generateSelectedLabels */.ER)(softwareAndroidForEdit),
      categories: softwareAndroidForEdit.categories || [],
      platform: "android"
    } : {
      applicationID: "",
      selfService: true,
      // Default to true for new Android apps
      automaticInstall: false,
      // 4.77 Currently not available for Android apps
      targetType: "All hosts",
      customTarget: "labelsIncludeAny",
      labelTargets: {},
      categories: [],
      platform: "android"
    }
  );
  const [formValidation, setFormValidation] = (0,react.useState)({
    isValid: !!softwareAndroidForEdit
    // Disables submit before Android application ID is entered
  });
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
  };
  const onInputChange = ({ name, value }) => {
    const newFormData = __spreadProps(__spreadValues({}, formData), { [name]: value });
    setFormData(newFormData);
    setFormValidation(SoftwareAndroidForm_helpers(newFormData));
  };
  const isSubmitDisabled = !formValidation.isValid;
  const renderContent = () => {
    if (softwareAndroidForEdit) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__form-fields` }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        autofocus: true,
        label: "Application ID",
        placeholder: "com.android.chrome",
        helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "The ID at the end of the app's", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            text: "Google Play URL",
            url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/google-play-store`,
            newTab: true
          }
        ), " ", 'E.g. "com.android.chrome" from "https://play.google.com/store/apps/details?id=com.android.chrome"'),
        onChange: onInputChange,
        name: "applicationID",
        value: formData.applicationID,
        parseTarget: true,
        disabled: gitOpsModeEnabled
      }
    )), (0,helpers/* isAndroidWebApp */.VI)(formData.applicationID) && /* @__PURE__ */ react.createElement(
      InfoBanner/* default */.A,
      {
        color: "yellow",
        cta: /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/android-web-apps-chrome-required`,
            text: "Learn more",
            newTab: true
          }
        )
      },
      "This is an Android web app and it requires Google Chrome to work. Please make sure you add Google Chrome to this fleet."
    ), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(SoftwareOptionsSelector/* AndroidOptionsDescription */.e, null)));
  };
  const contentWrapperClasses = classnames_default()(`${baseClass}__content-wrapper`, {
    [`${baseClass}__content-disabled`]: isLoading
  });
  const formContentClasses = classnames_default()(`${baseClass}__form-content`, {
    [`${baseClass}__form-content--disabled`]: gitOpsModeEnabled
  });
  return /* @__PURE__ */ react.createElement("form", { className: baseClass, onSubmit: onFormSubmit }, isLoading && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__overlay` }), /* @__PURE__ */ react.createElement("div", { className: contentWrapperClasses }, /* @__PURE__ */ react.createElement("div", { className: formContentClasses }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent())), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__action-buttons` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      entityType: "software",
      position: "top",
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: disableChildren || isSubmitDisabled,
          isLoading,
          className: `${baseClass}__add-software-btn`
        },
        softwareAndroidForEdit ? "Save" : "Add software"
      )
    }
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var SoftwareAndroidForm_SoftwareAndroidForm = (SoftwareAndroidForm);

;// ./frontend/pages/SoftwarePage/components/forms/SoftwareAndroidForm/index.ts



// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/helpers.tsx
var SoftwareAddPage_helpers = __webpack_require__(54184);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/SoftwareAppStoreAndroid/helpers.tsx



const getErrorMessage = (e) => {
  const reason = (0,errors/* getErrorReason */.F3)(e);
  if (reason.includes("find ID on the Play Store")) {
    return reason;
  }
  if (reason.toLowerCase().includes("already")) {
    const alreadyAvailableMessage = (0,SoftwareAddPage_helpers/* formatAlreadyAvailableInstallMessage */.JZ)(
      reason
    );
    if (alreadyAvailableMessage) {
      return alreadyAvailableMessage;
    }
    if (reason.includes("VPPApp")) {
      return `${SoftwareAddPage_helpers/* ADD_SOFTWARE_ERROR_PREFIX */.wy} The software is already available to install in this fleet.`;
    }
  }
  if (reason) {
    return `${SoftwareAddPage_helpers/* ADD_SOFTWARE_ERROR_PREFIX */.wy} ${(0,SoftwareAddPage_helpers/* ensurePeriod */.U_)(reason)}`;
  }
  return SoftwareAddPage_helpers/* DEFAULT_ADD_SOFTWARE_ERROR_MESSAGE */.Zx;
};

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/SoftwareAppStoreAndroid/SoftwareAppStoreAndroid.tsx

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











const SoftwareAppStoreAndroid_baseClass = "software-app-store-android";
const EnableAndroidMdmMessage = ({
  onEnableMdm,
  isGlobalAdmin
}) => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    variant: "form",
    header: "Android MDM isn't enabled",
    info: isGlobalAdmin ? "To add Android apps, first enable Android MDM." : "To add Android apps, ask your admin to enable Android MDM.",
    primaryButton: isGlobalAdmin ? /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onEnableMdm }, "Enable Android MDM") : void 0
  }
);
const SoftwareAppStoreAndroid = ({
  currentTeamId,
  router
}) => {
  const {
    isPremiumTier,
    isAndroidMdmEnabledAndConfigured,
    isGlobalAdmin
  } = (0,react.useContext)(app/* AppContext */.BR);
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const goBackToSoftwareLibrary = () => {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_LIBRARY, {
        fleet_id: currentTeamId
      })
    );
  };
  const onEnableAndroidMdm = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM_ANDROID);
  };
  const onAddSoftware = (formData) => __async(null, null, function* () {
    if (!formData.applicationID) {
      return;
    }
    setIsLoading(true);
    try {
      const {
        software_title_id: softwareAppStoreTitleId,
        name: softwareTitleName
      } = yield software/* default */.A.addAppStoreApp(currentTeamId, formData);
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("strong", null, softwareTitleName || "Android app"), " successfully added.")
      );
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_TITLE_DETAILS(softwareAppStoreTitleId.toString()),
          { fleet_id: currentTeamId }
        )
      );
    } catch (e) {
      ToastNotification/* notify */.me.error(getErrorMessage(e), { response: e });
    }
    setIsLoading(false);
  });
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, { className: `${SoftwareAppStoreAndroid_baseClass}__premium-message` });
    }
    if (!isAndroidMdmEnabledAndConfigured) {
      return /* @__PURE__ */ react.createElement(
        EnableAndroidMdmMessage,
        {
          onEnableMdm: onEnableAndroidMdm,
          isGlobalAdmin
        }
      );
    }
    return /* @__PURE__ */ react.createElement("div", { className: `${SoftwareAppStoreAndroid_baseClass}__content` }, /* @__PURE__ */ react.createElement(
      SoftwareAndroidForm_SoftwareAndroidForm,
      {
        onSubmit: onAddSoftware,
        onCancel: goBackToSoftwareLibrary,
        isLoading
      }
    ));
  };
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareAppStoreAndroid_baseClass }, renderContent());
};
/* harmony default export */ var SoftwareAppStoreAndroid_SoftwareAppStoreAndroid = (SoftwareAppStoreAndroid);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/SoftwareAppStoreAndroid/index.ts



// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/modals/CategoriesEndUserExperienceModal/index.ts
var CategoriesEndUserExperienceModal = __webpack_require__(72753);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/services/entities/mdm_apple.ts
var mdm_apple = __webpack_require__(82635);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareVppForm/index.ts + 2 modules
var SoftwareVppForm = __webpack_require__(26783);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/SoftwareAppStoreVpp/helpers.tsx



const teamHasVPPToken = (currentTeamId, tokens) => {
  if (!tokens || tokens.length === 0) {
    return false;
  }
  return tokens.some((token) => {
    var _a, _b;
    if (((_a = token.teams) == null ? void 0 : _a.length) === 0) {
      return true;
    }
    return (_b = token.teams) == null ? void 0 : _b.some((team) => team.team_id === currentTeamId);
  });
};
const helpers_getErrorMessage = (e) => {
  const reason = (0,errors/* getErrorReason */.F3)(e);
  if (reason.toLowerCase().includes("already")) {
    const alreadyAvailableMessage = (0,SoftwareAddPage_helpers/* formatAlreadyAvailableInstallMessage */.JZ)(
      reason
    );
    if (alreadyAvailableMessage) {
      return alreadyAvailableMessage;
    }
    if (reason.includes("VPPApp")) {
      return `${SoftwareAddPage_helpers/* ADD_SOFTWARE_ERROR_PREFIX */.wy} The software is already available to install in this fleet.`;
    }
  }
  if (reason) {
    return `${SoftwareAddPage_helpers/* ADD_SOFTWARE_ERROR_PREFIX */.wy} ${(0,SoftwareAddPage_helpers/* ensurePeriod */.U_)(reason)}`;
  }
  return SoftwareAddPage_helpers/* DEFAULT_ADD_SOFTWARE_ERROR_MESSAGE */.Zx;
};

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/SoftwareAppStoreVpp/SoftwareAppStoreVpp.tsx

var SoftwareAppStoreVpp_defProp = Object.defineProperty;
var SoftwareAppStoreVpp_defProps = Object.defineProperties;
var SoftwareAppStoreVpp_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SoftwareAppStoreVpp_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SoftwareAppStoreVpp_hasOwnProp = Object.prototype.hasOwnProperty;
var SoftwareAppStoreVpp_propIsEnum = Object.prototype.propertyIsEnumerable;
var SoftwareAppStoreVpp_defNormalProp = (obj, key, value) => key in obj ? SoftwareAppStoreVpp_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SoftwareAppStoreVpp_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SoftwareAppStoreVpp_hasOwnProp.call(b, prop))
      SoftwareAppStoreVpp_defNormalProp(a, prop, b[prop]);
  if (SoftwareAppStoreVpp_getOwnPropSymbols)
    for (var prop of SoftwareAppStoreVpp_getOwnPropSymbols(b)) {
      if (SoftwareAppStoreVpp_propIsEnum.call(b, prop))
        SoftwareAppStoreVpp_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SoftwareAppStoreVpp_spreadProps = (a, b) => SoftwareAppStoreVpp_defProps(a, SoftwareAppStoreVpp_getOwnPropDescs(b));
var SoftwareAppStoreVpp_async = (__this, __arguments, generator) => {
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



















const SoftwareAppStoreVpp_baseClass = "software-app-store-vpp";
const EnableVppMessage = ({
  onEnableVpp,
  isGlobalAdmin
}) => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    variant: "list",
    header: "Volume Purchasing Program (VPP) isn't enabled",
    info: isGlobalAdmin ? "Enable VPP to add App Store apps (MDM required)." : "To add App Store apps, ask your admin to enable VPP.",
    primaryButton: isGlobalAdmin ? /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onEnableVpp }, "Enable VPP") : void 0
  }
);
const AddTeamToVppMessage = ({
  onEditVpp,
  isGlobalAdmin
}) => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    variant: "list",
    header: "This fleet isn't added to Volume Purchasing Program (VPP)",
    info: isGlobalAdmin ? "To add App Store apps, first add this fleet to VPP." : "To add App Store apps, ask your admin to add this fleet to VPP.",
    primaryButton: isGlobalAdmin ? /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onEditVpp }, "Edit VPP") : void 0
  }
);
const NoVppAppsMessage = () => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    variant: "list",
    header: "You don't have any App Store apps",
    info: /* @__PURE__ */ react.createElement(react.Fragment, null, "You must purchase apps in", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/abm-apps`,
        text: "Apple Business",
        newTab: true
      }
    ), /* @__PURE__ */ react.createElement("br", null), "App Store apps that are already added to this fleet are not listed.")
  }
);
const SoftwareAppStoreVpp = ({
  currentTeamId,
  router
}) => {
  const { isPremiumTier, isGlobalAdmin } = (0,react.useContext)(app/* AppContext */.BR);
  const queryClient = (0,es.useQueryClient)();
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [
    showPreviewEndUserExperience,
    setShowPreviewEndUserExperience
  ] = (0,react.useState)(false);
  const [isIosOrIpadosApp, setIsIosOrIpadosApp] = (0,react.useState)(false);
  const {
    data: vppInfo,
    isLoading: isLoadingVppInfo,
    error: errorVppInfo
  } = (0,es.useQuery)(
    ["vppInfo", currentTeamId],
    () => mdm_apple/* default */.A.getVppTokens(),
    SoftwareAppStoreVpp_spreadProps(SoftwareAppStoreVpp_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      staleTime: 3e4,
      retry: (tries, error) => error.status !== 404 && tries <= 3
    })
  );
  const {
    data: labels,
    isLoading: isLoadingLabels,
    isError: isErrorLabels
  } = (0,es.useQuery)(
    ["custom_labels"],
    () => entities_labels/* default */.Ay.summary(currentTeamId).then((res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)),
    SoftwareAppStoreVpp_spreadProps(SoftwareAppStoreVpp_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier,
      staleTime: 1e4
    })
  );
  const noVppTokenUploaded = !vppInfo || !vppInfo.vpp_tokens.length;
  const hasVppToken = teamHasVPPToken(currentTeamId, vppInfo == null ? void 0 : vppInfo.vpp_tokens);
  const {
    data: vppApps,
    isLoading: isLoadingVppApps,
    error: errorVppApps
  } = (0,es.useQuery)(
    ["vppSoftware", currentTeamId],
    () => mdm_apple/* default */.A.getVppApps(currentTeamId),
    SoftwareAppStoreVpp_spreadProps(SoftwareAppStoreVpp_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: hasVppToken,
      staleTime: 3e4,
      select: (res) => res.app_store_apps
    })
  );
  const goBackToSoftwareLibrary = () => {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_LIBRARY, {
        fleet_id: currentTeamId
      })
    );
  };
  const onClickPreviewEndUserExperience = (iosOrIpadosApp) => {
    setShowPreviewEndUserExperience(!showPreviewEndUserExperience);
    setIsIosOrIpadosApp(iosOrIpadosApp || false);
  };
  const onAddSoftware = (formData) => SoftwareAppStoreVpp_async(null, null, function* () {
    if (!formData.selectedApp) {
      return;
    }
    setIsLoading(true);
    try {
      const {
        software_title_id: softwareVppTitleId
      } = yield software/* default */.A.addAppStoreApp(currentTeamId, formData);
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, formData.selectedApp.name), " successfully added.")
      );
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-titles" }]
      });
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-library" }]
      });
      queryClient.invalidateQueries({
        queryKey: ["vppSoftware", currentTeamId]
      });
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_TITLE_DETAILS(softwareVppTitleId.toString()),
          { fleet_id: currentTeamId }
        )
      );
    } catch (e) {
      ToastNotification/* notify */.me.error(helpers_getErrorMessage(e), { response: e });
    }
    setIsLoading(false);
  });
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, { className: `${SoftwareAppStoreVpp_baseClass}__premium-message` });
    }
    if (isLoadingVppInfo || isLoadingVppApps || isLoadingLabels) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (errorVppInfo || errorVppApps || isErrorLabels) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    if (noVppTokenUploaded) {
      return /* @__PURE__ */ react.createElement(
        EnableVppMessage,
        {
          onEnableVpp: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_VPP),
          isGlobalAdmin
        }
      );
    }
    if (!hasVppToken) {
      return /* @__PURE__ */ react.createElement(
        AddTeamToVppMessage,
        {
          onEditVpp: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_VPP),
          isGlobalAdmin
        }
      );
    }
    if (!vppApps) {
      return /* @__PURE__ */ react.createElement(NoVppAppsMessage, null);
    }
    return /* @__PURE__ */ react.createElement("div", { className: `${SoftwareAppStoreVpp_baseClass}__content` }, /* @__PURE__ */ react.createElement(
      SoftwareVppForm/* default */.A,
      {
        labels: labels || [],
        onSubmit: onAddSoftware,
        onCancel: goBackToSoftwareLibrary,
        onClickPreviewEndUserExperience,
        isLoading,
        vppApps
      }
    ), showPreviewEndUserExperience && /* @__PURE__ */ react.createElement(
      CategoriesEndUserExperienceModal/* default */.A,
      {
        onCancel: onClickPreviewEndUserExperience,
        teamId: currentTeamId,
        isIosOrIpadosApp
      }
    ));
  };
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareAppStoreVpp_baseClass }, renderContent());
};
/* harmony default export */ var SoftwareAppStoreVpp_SoftwareAppStoreVpp = (SoftwareAppStoreVpp);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/SoftwareAppStoreVpp/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/SoftwareAppStore.tsx







const SoftwareAppStore_baseClass = "software-app-store";
const platformOptions = [
  { label: "Apple (macOS, iOS, and iPadOS)", value: "apple" },
  { label: "Android", value: "android" }
];
const SoftwareAppStore = ({
  currentTeamId,
  router,
  location
}) => {
  const platform = location.query.platform || "apple";
  const onDestinationChange = (selectedPlatform) => {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_ADD_APP_STORE, {
        fleet_id: currentTeamId,
        platform: selectedPlatform == null ? void 0 : selectedPlatform.value
      })
    );
  };
  const renderDropdown = () => /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      name: "platform",
      label: "Platform",
      onChange: onDestinationChange,
      value: platform,
      options: platformOptions,
      className: `${SoftwareAppStore_baseClass}__platform-dropdown`,
      wrapperClassname: `${SoftwareAppStore_baseClass}__form-field ${SoftwareAppStore_baseClass}__form-field--platform`
    }
  );
  const renderContent = () => platform === "apple" ? /* @__PURE__ */ react.createElement(SoftwareAppStoreVpp_SoftwareAppStoreVpp, { currentTeamId, router }) : /* @__PURE__ */ react.createElement(SoftwareAppStoreAndroid_SoftwareAppStoreAndroid, { currentTeamId, router });
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareAppStore_baseClass }, renderDropdown(), renderContent());
};
/* harmony default export */ var SoftwareAppStore_SoftwareAppStore = (SoftwareAppStore);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAppStore/index.ts




/***/ }),

/***/ 64922:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: function() { return /* binding */ GitOpsCustomPackageBanner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75942);
/* harmony import */ var components_CustomLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24432);
/* harmony import */ var components_DataError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79519);
/* harmony import */ var components_FileProgressModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70699);
/* harmony import */ var components_InfoBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38021);
/* harmony import */ var components_PremiumFeatureMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17981);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45584);
/* harmony import */ var components_ToastNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46157);
/* harmony import */ var context_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68774);
/* harmony import */ var hooks_useBlockNavigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63898);
/* harmony import */ var hooks_useGitOpsMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4346);
/* harmony import */ var pages_SoftwarePage_components_forms_PackageForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62190);
/* harmony import */ var pages_SoftwarePage_components_modals_CategoriesEndUserExperienceModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72753);
/* harmony import */ var router_paths__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78263);
/* harmony import */ var services_entities_labels__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97873);
/* harmony import */ var services_entities_software__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77931);
/* harmony import */ var utilities_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(89937);
/* harmony import */ var utilities_file_fileUtils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9106);
/* harmony import */ var utilities_url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(12968);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(30415);

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





















const baseClass = "software-custom-package";
const GitOpsCustomPackageBanner = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_InfoBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, { icon: "info-outline", iconColor: "ui-fleet-black-50" }, "Add custom packages in GitOps mode so Mesh can host your software. After adding, copy its SHA-256 hash into your YAML so the next GitOps workflow doesn't delete it.", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  components_CustomLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  {
    url: `${utilities_constants__WEBPACK_IMPORTED_MODULE_17__/* .LEARN_MORE_ABOUT_BASE_LINK */ .CW}/yaml-software`,
    text: "YAML docs",
    newTab: true
  }
));
const SoftwareCustomPackage = ({
  currentTeamId,
  router,
  isSidePanelOpen,
  setSidePanelOpen
}) => {
  const { isPremiumTier } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context_app__WEBPACK_IMPORTED_MODULE_9__/* .AppContext */ .BR);
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  const { gitOpsModeEnabled } = (0,hooks_useGitOpsMode__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)("software");
  const [uploadProgress, setUploadProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [uploadDetails, setUploadDetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [
    showPreviewEndUserExperience,
    setShowPreviewEndUserExperience
  ] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [
    isIpadOrIphoneSoftwareSource,
    setIsIpadOrIphoneSoftwareSource
  ] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    data: labels,
    isLoading: isLoadingLabels,
    isError: isErrorLabels
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
    ["custom_labels"],
    () => services_entities_labels__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.summary(currentTeamId).then((res) => (0,services_entities_labels__WEBPACK_IMPORTED_MODULE_15__/* .getCustomLabels */ .f2)(res.labels)),
    __spreadProps(__spreadValues({}, utilities_constants__WEBPACK_IMPORTED_MODULE_17__/* .DEFAULT_USE_QUERY_OPTIONS */ .QL), {
      enabled: isPremiumTier
    })
  );
  (0,hooks_useBlockNavigation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(!!uploadDetails);
  const onClickPreviewEndUserExperience = (isIosOrIpadosApp = false) => {
    setShowPreviewEndUserExperience(!showPreviewEndUserExperience);
    setIsIpadOrIphoneSoftwareSource(isIosOrIpadosApp);
  };
  const onCancel = () => {
    router.push(
      (0,utilities_url__WEBPACK_IMPORTED_MODULE_19__/* .getPathWithQueryParams */ .M8)(router_paths__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.SOFTWARE_LIBRARY, {
        fleet_id: currentTeamId
      })
    );
  };
  const onSubmit = (formData) => __async(null, null, function* () {
    var _a, _b;
    if (!formData.software) {
      components_ToastNotification__WEBPACK_IMPORTED_MODULE_8__/* .notify */ .me.error(`Couldn't add. Please refresh the page and try again.`);
      return;
    }
    setUploadDetails((0,utilities_file_fileUtils__WEBPACK_IMPORTED_MODULE_18__/* .getFileDetails */ .P$)(formData.software));
    try {
      const {
        software_package: { title_id: softwarePackageTitleId }
      } = yield services_entities_software__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A.addSoftwarePackage({
        data: formData,
        teamId: currentTeamId,
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.progress || 0;
          setUploadProgress(Math.max(progress - 0.03, 0.01));
        }
      });
      if (!gitOpsModeEnabled) {
        components_ToastNotification__WEBPACK_IMPORTED_MODULE_8__/* .notify */ .me.success(
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, (_a = formData.software) == null ? void 0 : _a.name), " successfully added.", formData.selfService ? " The end user can install from Mesh Desktop." : "")
        );
      }
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-titles" }]
      });
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-library" }]
      });
      const newQueryParams = {
        fleet_id: currentTeamId
      };
      router.push(
        (0,utilities_url__WEBPACK_IMPORTED_MODULE_19__/* .getPathWithQueryParams */ .M8)(
          router_paths__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.SOFTWARE_TITLE_DETAILS(softwarePackageTitleId.toString()),
          newQueryParams
        )
      );
    } catch (e) {
      components_ToastNotification__WEBPACK_IMPORTED_MODULE_8__/* .notify */ .me.error((0,_helpers__WEBPACK_IMPORTED_MODULE_20__/* .getErrorMessage */ .u)(e, (_b = formData.software) == null ? void 0 : _b.name), {
        response: e
      });
    }
    setUploadDetails(null);
  });
  const renderContent = () => {
    if (isLoadingLabels) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null);
    }
    if (isErrorLabels) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_DataError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, gitOpsModeEnabled && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(GitOpsCustomPackageBanner, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      pages_SoftwarePage_components_forms_PackageForm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
      {
        labels: labels || [],
        showSchemaButton: !isSidePanelOpen,
        onClickShowSchema: () => setSidePanelOpen(true),
        className: `${baseClass}__package-form`,
        onCancel,
        onSubmit,
        onClickPreviewEndUserExperience
      }
    ), uploadDetails && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      components_FileProgressModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
      {
        fileDetails: uploadDetails,
        fileProgress: uploadProgress
      }
    ), showPreviewEndUserExperience && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      pages_SoftwarePage_components_modals_CategoriesEndUserExperienceModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
      {
        onCancel: onClickPreviewEndUserExperience,
        teamId: currentTeamId,
        isIosOrIpadosApp: isIpadOrIphoneSoftwareSource
      }
    ));
  };
  if (!isPremiumTier) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_PremiumFeatureMessage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, { className: `${baseClass}__premium-message` });
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: baseClass }, renderContent());
};
/* harmony default export */ __webpack_exports__.A = (SoftwareCustomPackage);


/***/ }),

/***/ 30415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ getErrorMessage; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53110);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var components_CustomLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24432);
/* harmony import */ var interfaces_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12755);
/* harmony import */ var pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30104);
/* harmony import */ var utilities_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89937);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54184);








const getErrorMessage = (err, softwareTitle) => {
  var _a, _b;
  const isTimeout = (0,axios__WEBPACK_IMPORTED_MODULE_0__/* .isAxiosError */ .F0)(err) && (((_a = err.response) == null ? void 0 : _a.status) === 504 || ((_b = err.response) == null ? void 0 : _b.status) === 408);
  const reason = (0,interfaces_errors__WEBPACK_IMPORTED_MODULE_3__/* .getErrorReason */ .F3)(err);
  if (isTimeout) {
    return _helpers__WEBPACK_IMPORTED_MODULE_6__/* .REQUEST_TIMEOUT_ERROR_MESSAGE */ .pX;
  }
  if (reason.toLowerCase().includes("already")) {
    const alreadyAvailableMessage = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatAlreadyAvailableInstallMessage */ .JZ)(
      reason
    );
    if (alreadyAvailableMessage) {
      return alreadyAvailableMessage;
    }
  }
  const differentFileTypeMessage = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatDifferentFileTypeMessage */ .i0)(
    reason,
    softwareTitle
  );
  if (differentFileTypeMessage) {
    return differentFileTypeMessage;
  }
  if (reason.includes("Secret variable")) {
    return (0,pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_4__/* .generateSecretErrMsg */ .C3)(err);
  }
  if (reason.includes("Unable to extract necessary metadata")) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, _helpers__WEBPACK_IMPORTED_MODULE_6__/* .ADD_SOFTWARE_ERROR_PREFIX */ .wy, " Unable to extract necessary metadata.", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      components_CustomLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      {
        url: `${utilities_constants__WEBPACK_IMPORTED_MODULE_5__/* .LEARN_MORE_ABOUT_BASE_LINK */ .CW}/package-metadata-extraction`,
        text: "Learn more",
        newTab: true,
        variant: "flash-message-link"
      }
    ));
  }
  if (reason.includes("not a valid .tar.gz archive")) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, _helpers__WEBPACK_IMPORTED_MODULE_6__/* .ADD_SOFTWARE_ERROR_PREFIX */ .wy, " This is not a valid .tar.gz archive.", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      components_CustomLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      {
        url: `${utilities_constants__WEBPACK_IMPORTED_MODULE_5__/* .LEARN_MORE_ABOUT_BASE_LINK */ .CW}/tarball-archives`,
        text: "Learn more",
        newTab: true,
        variant: "flash-message-link"
      }
    ));
  }
  if (reason.startsWith("Couldn't add.")) {
    return `${(0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .ensurePeriod */ .U_)(reason)}`;
  }
  if (reason) {
    return `${_helpers__WEBPACK_IMPORTED_MODULE_6__/* .ADD_SOFTWARE_ERROR_PREFIX */ .wy} ${(0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .ensurePeriod */ .U_)(reason)}`;
  }
  return _helpers__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_ADD_SOFTWARE_ERROR_MESSAGE */ .Zx;
};


/***/ }),

/***/ 88848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _SoftwareCustomPackage__WEBPACK_IMPORTED_MODULE_0__.A; }
/* harmony export */ });
/* harmony import */ var _SoftwareCustomPackage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64922);




/***/ }),

/***/ 55133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ FleetAppDetailsForm_FleetAppDetailsForm; },
  E: function() { return /* binding */ softwareAlreadyAddedTipContent; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/TargetLabelSelector/index.ts + 2 modules
var TargetLabelSelector = __webpack_require__(22676);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/AdvancedOptionsFields/index.ts + 1 modules
var AdvancedOptionsFields = __webpack_require__(59012);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySelector/index.ts + 1 modules
var SoftwareDeploySelector = __webpack_require__(66081);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareOptionsSelector/index.ts
var SoftwareOptionsSelector = __webpack_require__(98601);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_query/index.ts
var validate_query = __webpack_require__(22184);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetAppDetailsForm/helpers.tsx


const FORM_VALIDATION_CONFIG = {
  preInstallQuery: {
    validations: [
      {
        name: "invalidQuery",
        isValid: (formData) => {
          var _a;
          const query = (_a = formData.preInstallQuery) != null ? _a : "";
          if (query.trim() === "") {
            return true;
          }
          const { valid } = (0,validate_query/* validateQuery */.B4)(query);
          return valid;
        },
        message: (formData) => {
          var _a;
          const query = (_a = formData.preInstallQuery) != null ? _a : "";
          if (query.trim() === "") {
            return "";
          }
          const { error } = (0,validate_query/* validateQuery */.B4)(query);
          return error != null ? error : "Invalid query";
        }
      }
    ]
  },
  customTarget: {
    validations: [
      {
        name: "requiredLabelTargets",
        isValid: (formData) => {
          if (formData.targetType === "All hosts") return true;
          return Object.keys(formData.labelTargets).find(
            (key) => formData.labelTargets[key]
          ) !== void 0;
        }
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
const generateFormValidation = (formData) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(FORM_VALIDATION_CONFIG).forEach(
    (objKey) => {
      const failedValidation = FORM_VALIDATION_CONFIG[objKey].validations.find(
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
    }
  );
  return formValidation;
};

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetAppDetailsForm/FleetAppDetailsForm.tsx

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


















const baseClass = "fleet-app-details-form";
const softwareAlreadyAddedTipContent = (softwareTitleId, teamId) => {
  const pathToSoftwareTitles = softwareTitleId ? (0,url/* getPathWithQueryParams */.M8)(
    paths/* default */.A.SOFTWARE_TITLE_DETAILS(softwareTitleId.toString()),
    {
      fleet_id: teamId
    }
  ) : "";
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "You already added this software.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: pathToSoftwareTitles,
      text: "View software",
      variant: "tooltip-link"
    }
  ));
};
const FleetAppDetailsForm = ({
  categories,
  defaultInstallScript,
  defaultPostInstallScript,
  defaultUninstallScript,
  teamId,
  onCancel,
  onSubmit,
  softwareTitleId,
  platform
}) => {
  var _a;
  const [formData, setFormData] = (0,react.useState)({
    selfService: false,
    forceInstall: false,
    patch: false,
    patchOption: "closed",
    endUserExperience: "immediate",
    preInstallQuery: "",
    installScript: defaultInstallScript,
    postInstallScript: defaultPostInstallScript,
    uninstallScript: defaultUninstallScript,
    targetType: "All hosts",
    customTarget: "labelsIncludeAny",
    labelTargets: {},
    categories: categories || []
  });
  const [formValidation, setFormValidation] = (0,react.useState)({
    isValid: true
  });
  const {
    data: labels,
    isLoading: isLoadingLabels,
    isError: isErrorLabels
  } = (0,es.useQuery)(
    ["custom_labels", teamId],
    () => entities_labels/* default */.Ay.summary(teamId ? parseInt(teamId, 10) : null).then((res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)),
    __spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react.useState)(false);
  const onToggleSelfService = () => {
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
      selfService: !prevData.selfService
    }));
  };
  const onSelectTargetType = (value) => {
    const newData = __spreadProps(__spreadValues({}, formData), { targetType: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectCustomTarget = (value) => {
    const newData = __spreadProps(__spreadValues({}, formData), { customTarget: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectLabel = ({ name, value }) => {
    const newData = __spreadProps(__spreadValues({}, formData), {
      labelTargets: __spreadProps(__spreadValues({}, formData.labelTargets), { [name]: value })
    });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onChangeInstallScript = (value) => {
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), { installScript: value }));
  };
  const onChangePreInstallQuery = (value) => {
    const newData = __spreadProps(__spreadValues({}, formData), { preInstallQuery: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onChangePostInstallScript = (value) => {
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), { postInstallScript: value }));
  };
  const onChangeUninstallScript = (value) => {
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), { uninstallScript: value }));
  };
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
  };
  const isSoftwareAlreadyAdded = !!softwareTitleId;
  const isSubmitDisabled = isSoftwareAlreadyAdded || !formValidation.isValid;
  return /* @__PURE__ */ react.createElement("form", { className: baseClass, onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
    SoftwareOptionsSelector/* default */.A,
    {
      formData,
      onToggleSelfService,
      onClickPreviewEndUserExperience: () => void 0,
      onSelectCategory: () => void 0
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      entityType: "software",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        SoftwareDeploySelector/* SoftwareDeploySelector */.Yw,
        {
          forceInstall: formData.forceInstall,
          patch: formData.patch,
          patchOption: formData.patchOption,
          platform,
          endUserExperience: formData.endUserExperience,
          onToggleForceInstall: (forceInstall) => setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), { forceInstall })),
          onTogglePatch: (patch) => setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), { patch })),
          onSelectPatchOption: (patchOption) => setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), { patchOption })),
          onSelectEndUserExperience: (endUserExperience) => setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), { endUserExperience })),
          disabled: disableChildren
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      entityType: "software",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        TargetLabelSelector/* DropdownTargetLabelSelector */.m,
        {
          selectedTargetType: formData.targetType,
          selectedCustomTarget: formData.customTarget,
          selectedLabels: formData.labelTargets,
          customTargetOptions: helpers/* CUSTOM_TARGET_OPTIONS */.fK,
          className: `${baseClass}__target`,
          onSelectTargetType,
          onSelectCustomTarget,
          onSelectLabel,
          labels: labels || [],
          isLoadingLabels,
          isErrorLabels,
          dropdownHelpText: (0,helpers/* generateHelpText */.a3)(
            formData.forceInstall,
            formData.customTarget
          ),
          disableOptions: disableChildren
        }
      )
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__advanced-options` }, /* @__PURE__ */ react.createElement(
    RevealButton/* default */.A,
    {
      isShowing: showAdvancedOptions,
      showText: "Advanced options",
      hideText: "Advanced options",
      caretPosition: "after",
      onClick: () => setShowAdvancedOptions(!showAdvancedOptions)
    }
  ), showAdvancedOptions && /* @__PURE__ */ react.createElement(
    AdvancedOptionsFields/* default */.A,
    {
      showSchemaButton: false,
      installScriptHelpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Use the $INSTALLER_PATH variable to point to the installer.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/install-scripts`,
          text: "Learn more about install scripts",
          newTab: true
        }
      )),
      postInstallScriptHelpText: "",
      uninstallScriptHelpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "$PACKAGE_ID will be populated after the software is added.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/uninstall-scripts`,
          text: "Learn more about uninstall scripts",
          newTab: true
        }
      )),
      errors: {
        preInstallQuery: (_a = formValidation.preInstallQuery) == null ? void 0 : _a.message
      },
      preInstallQuery: formData.preInstallQuery,
      installScript: formData.installScript,
      postInstallScript: formData.postInstallScript,
      uninstallScript: formData.uninstallScript,
      onClickShowSchema: () => void 0,
      onChangePreInstallQuery,
      onChangeInstallScript,
      onChangePostInstallScript,
      onChangeUninstallScript,
      gitopsCompatible: true,
      gitOpsModeEnabled,
      preInstallQueryLocked: formData.patch && (formData.patchOption === "closed" || formData.patchOption === "force" && formData.endUserExperience === "notify")
    }
  )), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__action-buttons` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      entityType: "software",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: softwareAlreadyAddedTipContent(
            softwareTitleId,
            teamId
          ),
          disableTooltip: !isSoftwareAlreadyAdded,
          position: "left",
          showArrow: true,
          underline: false,
          tipOffset: 10
        },
        /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            disabled: disableChildren || isSubmitDisabled
          },
          "Add software"
        )
      )
    }
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")));
};
/* harmony default export */ var FleetAppDetailsForm_FleetAppDetailsForm = (FleetAppDetailsForm);


/***/ }),

/***/ 99301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S4: function() { return /* binding */ getFleetAppPolicyDescription; },
/* harmony export */   fP: function() { return /* binding */ getFleetAppPolicyName; },
/* harmony export */   u1: function() { return /* binding */ getErrorMessage; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53110);
/* harmony import */ var interfaces_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12755);
/* harmony import */ var pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30104);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54184);





const getFleetAppPolicyName = (appName) => {
  return `[Install software] ${appName}`;
};
const getFleetAppPolicyDescription = (appName) => {
  return `Policy triggers automatic install of ${appName} on each host that's missing this software.`;
};
const getErrorMessage = (err) => {
  var _a, _b;
  const responseStatus = (_b = (0,axios__WEBPACK_IMPORTED_MODULE_0__/* .isAxiosError */ .F0)(err) ? (_a = err.response) == null ? void 0 : _a.status : void 0) != null ? _b : (0,interfaces_errors__WEBPACK_IMPORTED_MODULE_1__/* .hasStatusKey */ .S0)(err) ? err.status : void 0;
  const isTimeout = responseStatus === 504 || responseStatus === 408 || responseStatus === 499;
  const reason = (0,interfaces_errors__WEBPACK_IMPORTED_MODULE_1__/* .getErrorReason */ .F3)(err);
  if (isTimeout || reason.includes("json decoder error")) {
    return _helpers__WEBPACK_IMPORTED_MODULE_3__/* .REQUEST_TIMEOUT_ERROR_MESSAGE */ .pX;
  }
  if (reason.includes("can be added to the same fleet")) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .ensurePeriod */ .U_)(reason);
  }
  if (reason.toLowerCase().includes("already")) {
    const alreadyAvailableMessage = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .formatAlreadyAvailableInstallMessage */ .JZ)(
      reason
    );
    if (alreadyAvailableMessage) {
      return alreadyAvailableMessage;
    }
  }
  if (reason.includes("Secret variable")) {
    return (0,pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_2__/* .generateSecretErrMsg */ .C3)(err);
  }
  if (reason) {
    return `${_helpers__WEBPACK_IMPORTED_MODULE_3__/* .ADD_SOFTWARE_ERROR_PREFIX */ .wy} ${(0,_helpers__WEBPACK_IMPORTED_MODULE_3__/* .ensurePeriod */ .U_)(reason)}`;
  }
  return _helpers__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_ADD_SOFTWARE_ERROR_MESSAGE */ .Zx;
};


/***/ }),

/***/ 67902:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ FleetMaintainedAppDetailsPage_FleetMaintainedAppDetailsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/SidePanelPage/index.ts + 1 modules
var SidePanelPage = __webpack_require__(56118);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var interfaces_platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySelector/index.ts + 1 modules
var SoftwareDeploySelector = __webpack_require__(66081);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/services/entities/team_policies.ts
var team_policies = __webpack_require__(80396);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/AddFleetAppSoftwareModal/AddFleetAppSoftwareModal.tsx





const baseClass = "add-fleet-app-software-modal";
const AddFleetAppSoftwareModal = () => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: baseClass,
      title: "Add software",
      width: "large",
      onExit: lodash.noop,
      disableClosingModal: true
    },
    /* @__PURE__ */ react.createElement(Spinner/* default */.A, { centered: false, className: `${baseClass}__spinner` }),
    /* @__PURE__ */ react.createElement("p", null, "Uploading software so that it's available for install. This may take a few minutes.")
  );
};
/* harmony default export */ var AddFleetAppSoftwareModal_AddFleetAppSoftwareModal = (AddFleetAppSoftwareModal);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/AddFleetAppSoftwareModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetAppDetailsForm/FleetAppDetailsForm.tsx + 1 modules
var FleetAppDetailsForm = __webpack_require__(55133);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetAppDetailsForm/index.ts



// EXTERNAL MODULE: ./frontend/components/buttons/CopyButton/index.ts + 2 modules
var CopyButton = __webpack_require__(57390);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetAppDetailsModal/FleetAppDetailsModal.tsx










const FleetAppDetailsModal_baseClass = "fleet-app-details-modal";
const SLUG_TOOLTIP_MESSAGE = /* @__PURE__ */ react.createElement(react.Fragment, null, "Used to manage apps in Gitops.", " ", /* @__PURE__ */ react.createElement(
  CustomLink/* default */.A,
  {
    newTab: true,
    url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/gitops`,
    text: "Learn more",
    variant: "tooltip-link"
  }
));
const URL_TOOLTIP_MESSAGE = /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh downloads the package from the URL and stores it. Hosts download it from Mesh before install.");
const FleetAppDetailsModal = ({
  name,
  platform,
  version,
  slug,
  url,
  onCancel
}) => {
  let versionElement = /* @__PURE__ */ react.createElement(react.Fragment, null, version);
  if (version === "latest") {
    versionElement = /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "To preview the version, download ", name, " using the URL below.")
      },
      "Latest"
    );
  }
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: FleetAppDetailsModal_baseClass, title: "Software details", onExit: onCancel }, /* @__PURE__ */ react.createElement("div", { className: `${FleetAppDetailsModal_baseClass}__modal-content` }, /* @__PURE__ */ react.createElement(DataSet/* default */.A, { title: "Name", value: name }), /* @__PURE__ */ react.createElement(DataSet/* default */.A, { title: "Version", value: versionElement }), slug && /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: SLUG_TOOLTIP_MESSAGE }, "Fleet-maintained app slug"),
      value: /* @__PURE__ */ react.createElement(react.Fragment, null, slug, /* @__PURE__ */ react.createElement(CopyButton/* default */.A, { copyText: slug, variant: "compact" }))
    }
  ), /* @__PURE__ */ react.createElement(DataSet/* default */.A, { title: "Platform", value: constants/* PLATFORM_DISPLAY_NAMES */.uc[platform] }), url && /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: URL_TOOLTIP_MESSAGE }, "URL"),
      value: /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: url })
    }
  )), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close")));
};
/* harmony default export */ var FleetAppDetailsModal_FleetAppDetailsModal = (FleetAppDetailsModal);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetAppDetailsModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/helpers.tsx
var helpers = __webpack_require__(99301);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetMaintainedAppDetailsPage.tsx

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



























const FleetMaintainedAppDetailsPage_baseClass = "fleet-maintained-app-details-page";
const FleetAppSummary = ({
  name,
  platform,
  version,
  onClickShowAppDetails
}) => {
  let versionElement = /* @__PURE__ */ react.createElement(react.Fragment, null, version);
  if (version === "latest") {
    versionElement = /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "To preview the version, select ", /* @__PURE__ */ react.createElement("strong", null, "Show details"), " and download ", name, " using the URL.")
      },
      "Latest"
    );
  }
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary` }, /* @__PURE__ */ react.createElement("div", { className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary--left` }, /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { name, size: "medium" }), /* @__PURE__ */ react.createElement("div", { className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary--details` }, /* @__PURE__ */ react.createElement("div", { className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary--title` }, name), /* @__PURE__ */ react.createElement("div", { className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary--info` }, /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary--details--platform`
    },
    interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc[platform]
  ), "\u2022", /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary--details--version`
    },
    versionElement
  )))), /* @__PURE__ */ react.createElement("div", { className: `${FleetMaintainedAppDetailsPage_baseClass}__fleet-app-summary--show-details` }, /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "subdued", onClick: onClickShowAppDetails, icon: "info" }, "Show details")));
};
const FleetMaintainedAppDetailsPage = ({
  location,
  router,
  routeParams
}) => {
  const teamId = location.query.fleet_id;
  const appId = parseInt(routeParams.id, 10);
  if (isNaN(appId)) {
    router.push(paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED);
  }
  const queryClient = (0,es.useQueryClient)();
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [
    showAddFleetAppSoftwareModal,
    setShowAddFleetAppSoftwareModal
  ] = (0,react.useState)(false);
  const [showAppDetailsModal, setShowAppDetailsModal] = (0,react.useState)(false);
  const {
    data: fleetApp,
    isLoading: isLoadingFleetApp,
    isError: isErrorFleetApp
  } = (0,es.useQuery)(
    ["fleet-maintained-app", appId],
    () => software/* default */.A.getFleetMaintainedApp(appId, teamId),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier,
      retry: false,
      select: (res) => res.fleet_maintained_app,
      onError: (error) => handlePageError(error)
    })
  );
  const onClickShowAppDetails = () => {
    setShowAppDetailsModal(true);
  };
  const backToAddSoftwareUrl = (0,url/* getPathWithQueryParams */.M8)(
    paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED,
    { fleet_id: teamId }
  );
  const onCancel = () => {
    router.push(backToAddSoftwareUrl);
  };
  const onSubmit = (formData) => __async(null, null, function* () {
    if (!teamId) return;
    setShowAddFleetAppSoftwareModal(true);
    const refreshAndGoToTitle = (titleId) => {
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-titles" }]
      });
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-library" }]
      });
      queryClient.invalidateQueries({
        queryKey: [{ scope: "fleet-maintained-apps" }]
      });
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_TITLE_DETAILS(titleId.toString()),
          { fleet_id: teamId }
        )
      );
    };
    let softwareFmaTitleId;
    try {
      const response = yield software/* default */.A.addFleetMaintainedApp(
        parseInt(teamId, 10),
        __spreadProps(__spreadValues({}, formData), {
          appId
        })
      );
      const addedSoftwareTitleId = response.software_title_id;
      softwareFmaTitleId = addedSoftwareTitleId;
      if (formData.patch) {
        yield team_policies/* default */.A.create(__spreadValues(__spreadValues({
          team_id: parseInt(teamId, 10),
          type: "patch",
          patch_software_title_id: addedSoftwareTitleId
        }, formData.patchOption !== "manual" && {
          software_title_id: addedSoftwareTitleId
        }), (0,SoftwareDeploySelector/* getPatchPolicyFlags */.kl)(
          formData.patchOption,
          formData.endUserExperience
        )));
      }
      refreshAndGoToTitle(addedSoftwareTitleId);
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, fleetApp == null ? void 0 : fleetApp.name), " successfully added.")
      );
    } catch (error) {
      const ae = typeof error === "object" ? error : {};
      if (softwareFmaTitleId) {
        refreshAndGoToTitle(softwareFmaTitleId);
        ToastNotification/* notify */.me.error(
          "Software was added, but the deployment settings couldn't be saved. Try again from Actions > Deploy.",
          { response: error }
        );
      } else {
        ToastNotification/* notify */.me.error((0,helpers/* getErrorMessage */.u1)(ae), { response: error });
      }
    }
    setShowAddFleetAppSoftwareModal(false);
  });
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (isLoadingFleetApp) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isErrorFleetApp) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    if (fleetApp) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        BackButton/* default */.A,
        {
          text: "Back to add software",
          path: backToAddSoftwareUrl,
          className: `${FleetMaintainedAppDetailsPage_baseClass}__back-to-add-software`
        }
      ), /* @__PURE__ */ react.createElement("h1", null, fleetApp.name), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "Add software to your library." }), /* @__PURE__ */ react.createElement("div", { className: `${FleetMaintainedAppDetailsPage_baseClass}__page-content` }, /* @__PURE__ */ react.createElement(
        FleetAppSummary,
        {
          name: fleetApp.name,
          platform: fleetApp.platform,
          version: fleetApp.version,
          onClickShowAppDetails
        }
      ), /* @__PURE__ */ react.createElement(
        FleetAppDetailsForm/* default */.A,
        {
          categories: fleetApp.categories,
          defaultInstallScript: fleetApp.install_script,
          defaultPostInstallScript: fleetApp.post_install_script,
          defaultUninstallScript: fleetApp.uninstall_script,
          teamId,
          onCancel,
          onSubmit,
          softwareTitleId: fleetApp.software_title_id,
          platform: fleetApp.platform
        }
      )));
    }
    return null;
  };
  return /* @__PURE__ */ react.createElement(SidePanelPage/* default */.A, null, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: FleetMaintainedAppDetailsPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent())), showAddFleetAppSoftwareModal && /* @__PURE__ */ react.createElement(AddFleetAppSoftwareModal_AddFleetAppSoftwareModal, null), showAppDetailsModal && fleetApp && /* @__PURE__ */ react.createElement(
    FleetAppDetailsModal_FleetAppDetailsModal,
    {
      name: fleetApp.name,
      platform: fleetApp.platform,
      version: fleetApp.version,
      slug: fleetApp.slug,
      url: fleetApp.url,
      onCancel: () => setShowAppDetailsModal(false)
    }
  )));
};
/* harmony default export */ var FleetMaintainedAppDetailsPage_FleetMaintainedAppDetailsPage = (FleetMaintainedAppDetailsPage);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/index.ts




/***/ }),

/***/ 23952:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareFleetMaintained_SoftwareFleetMaintained; }
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/FleetAppDetailsForm/FleetAppDetailsForm.tsx + 1 modules
var FleetAppDetailsForm = __webpack_require__(55133);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
;// ./frontend/components/TableContainer/DataTable/InstallerActionCell/InstallerActionCell.tsx










const baseClass = "installer-action-cell";
const InstallerActionCell = ({
  value,
  router,
  className = "w250",
  teamId
}) => {
  const cellClasses = classnames_default()(baseClass, className);
  if (!value) {
    return /* @__PURE__ */ react.createElement(
      TextCell/* default */.A,
      {
        className: cellClasses,
        emptyCellTooltipText: "Currently unavailable for this platform."
      }
    );
  }
  const { id, software_title_id: softwareTitleId } = value;
  const onClick = () => {
    const path = (0,url/* getPathWithQueryParams */.M8)(
      paths/* default */.A.SOFTWARE_FLEET_MAINTAINED_DETAILS(id),
      { fleet_id: teamId }
    );
    if (router && path) {
      router == null ? void 0 : router.push(path);
    }
  };
  if (softwareTitleId) {
    return /* @__PURE__ */ react.createElement("div", { className: cellClasses }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: (0,FleetAppDetailsForm/* softwareAlreadyAddedTipContent */.E)(
          softwareTitleId,
          teamId == null ? void 0 : teamId.toString()
        ),
        disableTooltip: !softwareTitleId,
        position: "top",
        underline: false,
        showArrow: true,
        clickable: true,
        tipOffset: 10
      },
      /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "success" })
    ));
  }
  return /* @__PURE__ */ react.createElement("div", { className: cellClasses }, /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "pill", onClick }, "Add"));
};
/* harmony default export */ var InstallerActionCell_InstallerActionCell = (InstallerActionCell);

;// ./frontend/components/TableContainer/DataTable/InstallerActionCell/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/SoftwareNameCell/index.ts
var SoftwareNameCell = __webpack_require__(81790);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppsTable/FleetMaintainedAppsTableConfig.tsx





const generateTableConfig = (router, teamId) => {
  return [
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Name", isSortedDesc: cellProps.column.isSortedDesc }),
      accessor: "name",
      Cell: (cellProps) => {
        const { name } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(SoftwareNameCell/* default */.A, { name });
      },
      sortType: "caseInsensitive"
    },
    {
      Header: "macOS",
      accessor: "macos",
      Cell: (cellProps) => {
        const { macos } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(InstallerActionCell_InstallerActionCell, { teamId, value: macos, router });
      },
      disableSortBy: true
    },
    {
      Header: "Windows",
      accessor: "windows",
      Cell: (cellProps) => {
        const { windows } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(
          InstallerActionCell_InstallerActionCell,
          {
            teamId,
            value: windows,
            router
          }
        );
      },
      disableSortBy: true
    }
  ];
};

// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/DropdownWrapper.tsx
var DropdownWrapper = __webpack_require__(78131);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/Slider.tsx
var Slider = __webpack_require__(33427);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppsTable/FmaFilters/FmaFilters.tsx




const statusBaseClass = "fma-status-select";
const platformBaseClass = "fma-platform-select";
const FmaPlatformFilter = ({
  value,
  onChange,
  className
}) => {
  const options = (0,react.useMemo)(() => {
    return [
      {
        value: "all",
        label: "All platforms",
        isDisabled: false
      },
      {
        value: "macos",
        label: "macOS",
        isDisabled: false
      },
      {
        value: "windows",
        label: "Windows",
        isDisabled: false
      }
    ];
  }, []);
  const handleChange = (newValue) => {
    if (!newValue) return;
    onChange(newValue.value);
  };
  return /* @__PURE__ */ react.createElement("div", { className: `${platformBaseClass} ${className || ""}` }, /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.Ay,
    {
      name: "fma-platform-filter",
      options,
      value,
      onChange: handleChange,
      variant: "table-filter",
      isSearchable: false,
      placeholder: "Filter by platform",
      className: platformBaseClass,
      iconName: "filter-alt"
    }
  ));
};
const FmaStatusFilter = ({
  value,
  onChange,
  className
}) => {
  const handleChange = () => {
    onChange(value === "all" ? "available" : "all");
  };
  const enabled = value === "available";
  return /* @__PURE__ */ react.createElement("div", { className: `${statusBaseClass} ${className || ""}` }, /* @__PURE__ */ react.createElement(
    Slider/* default */.A,
    {
      onChange: handleChange,
      value: enabled,
      inactiveText: "Hide added apps",
      activeText: "Hide added apps"
    }
  ));
};

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppsTable/FleetMaintainedAppsTable.tsx

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









const FleetMaintainedAppsTable_baseClass = "fleet-maintained-apps-table";
const EmptyFleetAppsTable = () => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    header: "No items match the current search criteria",
    info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Can't find app?", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        newTab: true,
        url: "https://fleetdm.com/feature-request",
        text: "File an issue on GitHub"
      }
    ))
  }
);
const combineAppsByPlatform = (fmaList) => {
  const combinedApps = {};
  fmaList.forEach((app) => {
    const _a = app, { name, platform } = _a, rest = __objRest(_a, ["name", "platform"]);
    const appToken = app.slug.split("/")[0];
    if (!combinedApps[appToken]) {
      combinedApps[appToken] = { name, macos: null, windows: null };
    }
    if (platform === "darwin") {
      combinedApps[appToken].macos = __spreadValues({
        platform
      }, rest);
    } else if (platform === "windows") {
      combinedApps[appToken].windows = __spreadValues({
        platform
      }, rest);
    }
  });
  return Object.values(combinedApps);
};
const FleetMaintainedAppsTable = ({
  teamId,
  isLoading,
  data,
  router,
  query,
  perPage,
  orderDirection,
  platformParam,
  statusParam,
  orderKey,
  currentPage
}) => {
  var _a, _b;
  const status = statusParam || "all";
  const platform = platformParam || "all";
  const determineQueryParamChange = (0,react.useCallback)(
    (newTableQuery) => {
      var _a2;
      const changedEntry = Object.entries(newTableQuery).find(([key, val]) => {
        switch (key) {
          case "searchQuery":
            return val !== query;
          case "sortDirection":
            return val !== orderDirection;
          case "sortHeader":
            return val !== orderKey;
          case "pageIndex":
            return val !== currentPage;
          case "platform":
            return val !== platformParam;
          case "status":
            return val !== statusParam;
          default:
            return false;
        }
      });
      return (_a2 = changedEntry == null ? void 0 : changedEntry[0]) != null ? _a2 : "";
    },
    [currentPage, orderDirection, orderKey, query, platformParam, statusParam]
  );
  const generateNewQueryParams = (0,react.useCallback)(
    (newTableQuery, changedParam, nextPlatform, nextStatus) => {
      const newQueryParam = {
        query: newTableQuery.searchQuery,
        fleet_id: teamId,
        order_direction: newTableQuery.sortDirection,
        order_key: newTableQuery.sortHeader,
        page: changedParam === "pageIndex" ? newTableQuery.pageIndex : 0,
        platform: nextPlatform === "all" ? void 0 : nextPlatform,
        status: nextStatus === "all" ? void 0 : nextStatus
      };
      return newQueryParam;
    },
    [teamId]
  );
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const changedParam = determineQueryParamChange(newTableQuery);
      if (changedParam === "") return;
      const newRoute = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED,
        routeTemplate: "",
        queryParams: generateNewQueryParams(
          newTableQuery,
          changedParam,
          platform,
          status
        )
      });
      router.replace(newRoute);
    },
    [
      determineQueryParamChange,
      generateNewQueryParams,
      router,
      platform,
      status
    ]
  );
  const tableHeadersConfig = (0,react.useMemo)(() => {
    if (!data) return [];
    return generateTableConfig(router, teamId);
  }, [data, router, teamId]);
  const combinedAppsByPlatform = (_b = data && combineAppsByPlatform((_a = data.fleet_maintained_apps) != null ? _a : [])) != null ? _b : [];
  const renderCount = () => {
    if (!data) return null;
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count: data.count });
  };
  const handleFmaStatusDropdownChange = (newStatus) => {
    const newRoute = (0,helpers/* getNextLocationPath */.g2)({
      pathPrefix: paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED,
      routeTemplate: "",
      queryParams: generateNewQueryParams(
        {
          searchQuery: query,
          sortDirection: orderDirection,
          sortHeader: orderKey,
          pageIndex: currentPage,
          pageSize: perPage
        },
        "status",
        platform,
        newStatus
      )
    });
    router.replace(newRoute);
  };
  const handleFmaPlatformDropdownChange = (newPlatform) => {
    const newRoute = (0,helpers/* getNextLocationPath */.g2)({
      pathPrefix: paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED,
      routeTemplate: "",
      queryParams: generateNewQueryParams(
        {
          searchQuery: query,
          sortDirection: orderDirection,
          sortHeader: orderKey,
          pageIndex: currentPage,
          pageSize: perPage
        },
        "platform",
        newPlatform,
        status
      )
    });
    router.replace(newRoute);
  };
  const renderCustomControls = () => /* @__PURE__ */ react.createElement("div", { className: `${FleetMaintainedAppsTable_baseClass}__filters` }, /* @__PURE__ */ react.createElement(
    FmaStatusFilter,
    {
      value: status,
      onChange: handleFmaStatusDropdownChange,
      className: `${FleetMaintainedAppsTable_baseClass}__status-filter`
    }
  ), /* @__PURE__ */ react.createElement(
    FmaPlatformFilter,
    {
      value: platform,
      onChange: handleFmaPlatformDropdownChange,
      className: `${FleetMaintainedAppsTable_baseClass}__platform-filter`
    }
  ));
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: FleetMaintainedAppsTable_baseClass,
      columnConfigs: tableHeadersConfig,
      data: combinedAppsByPlatform,
      isLoading,
      resultsTitle: "items",
      emptyComponent: EmptyFleetAppsTable,
      defaultSortHeader: orderKey,
      defaultSortDirection: orderDirection,
      pageIndex: currentPage,
      defaultSearchQuery: query,
      manualSortBy: true,
      pageSize: perPage,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableNextPage: !(data == null ? void 0 : data.meta.has_next_results),
      searchable: true,
      inputPlaceHolder: "Search by name",
      onQueryChange,
      renderCount,
      customControl: renderCustomControls,
      stackControls: true
    }
  );
};
/* harmony default export */ var FleetMaintainedAppsTable_FleetMaintainedAppsTable = (FleetMaintainedAppsTable);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppsTable/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/SoftwareFleetMaintained.tsx

var SoftwareFleetMaintained_defProp = Object.defineProperty;
var SoftwareFleetMaintained_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SoftwareFleetMaintained_hasOwnProp = Object.prototype.hasOwnProperty;
var SoftwareFleetMaintained_propIsEnum = Object.prototype.propertyIsEnumerable;
var SoftwareFleetMaintained_defNormalProp = (obj, key, value) => key in obj ? SoftwareFleetMaintained_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SoftwareFleetMaintained_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SoftwareFleetMaintained_hasOwnProp.call(b, prop))
      SoftwareFleetMaintained_defNormalProp(a, prop, b[prop]);
  if (SoftwareFleetMaintained_getOwnPropSymbols)
    for (var prop of SoftwareFleetMaintained_getOwnPropSymbols(b)) {
      if (SoftwareFleetMaintained_propIsEnum.call(b, prop))
        SoftwareFleetMaintained_defNormalProp(a, prop, b[prop]);
    }
  return a;
};










const SoftwareFleetMaintained_baseClass = "software-fleet-maintained";
const DATA_STALE_TIME = 3e4;
const QUERY_OPTIONS = {
  keepPreviousData: true,
  staleTime: DATA_STALE_TIME
};
const DEFAULT_SORT_DIRECTION = "asc";
const DEFAULT_SORT_HEADER = "name";
const DEFAULT_PAGE_SIZE = 100;
const DEFAULT_PAGE = 0;
const SoftwareFleetMaintained = ({
  currentTeamId,
  router,
  location
}) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    order_key = DEFAULT_SORT_HEADER,
    order_direction = DEFAULT_SORT_DIRECTION,
    query = "",
    page,
    platform,
    status
  } = location.query;
  const currentPage = page ? parseInt(page, 10) : DEFAULT_PAGE;
  let apiPlatform;
  if (platform === "macos") {
    apiPlatform = "darwin";
  } else if (platform === "windows") {
    apiPlatform = "windows";
  }
  const availableOnly = status === "available" ? true : void 0;
  const { data, isLoading, isFetching, isError } = (0,es.useQuery)(
    [
      {
        scope: "fleet-maintained-apps",
        page: currentPage,
        per_page: DEFAULT_PAGE_SIZE,
        query,
        order_direction,
        order_key,
        team_id: currentTeamId,
        platform: apiPlatform,
        available: availableOnly
      }
    ],
    ({ queryKey: [queryKey] }) => {
      return software/* default */.A.getFleetMaintainedApps((0,lodash.omit)(queryKey, "scope"));
    },
    SoftwareFleetMaintained_spreadValues(SoftwareFleetMaintained_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), QUERY_OPTIONS)
  );
  if (!isPremiumTier) {
    return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, { className: `${SoftwareFleetMaintained_baseClass}__premium-message` });
  }
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
  }
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareFleetMaintained_baseClass }, /* @__PURE__ */ react.createElement(
    FleetMaintainedAppsTable_FleetMaintainedAppsTable,
    {
      data,
      isLoading: isFetching,
      router,
      query,
      teamId: currentTeamId,
      orderDirection: order_direction,
      orderKey: order_key,
      perPage: DEFAULT_PAGE_SIZE,
      currentPage,
      platformParam: platform,
      statusParam: status
    }
  ));
};
/* harmony default export */ var SoftwareFleetMaintained_SoftwareFleetMaintained = (SoftwareFleetMaintained);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/index.ts




/***/ }),

/***/ 54184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JZ: function() { return /* binding */ formatAlreadyAvailableInstallMessage; },
/* harmony export */   U_: function() { return /* binding */ ensurePeriod; },
/* harmony export */   Zx: function() { return /* binding */ DEFAULT_ADD_SOFTWARE_ERROR_MESSAGE; },
/* harmony export */   i0: function() { return /* binding */ formatDifferentFileTypeMessage; },
/* harmony export */   pX: function() { return /* binding */ REQUEST_TIMEOUT_ERROR_MESSAGE; },
/* harmony export */   wy: function() { return /* binding */ ADD_SOFTWARE_ERROR_PREFIX; }
/* harmony export */ });
/* unused harmony export DIFFERENT_FILE_TYPE_MESSAGE */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


const ADD_SOFTWARE_ERROR_PREFIX = "Couldn't add.";
const DEFAULT_ADD_SOFTWARE_ERROR_MESSAGE = `${ADD_SOFTWARE_ERROR_PREFIX} Please try again.`;
const REQUEST_TIMEOUT_ERROR_MESSAGE = `${ADD_SOFTWARE_ERROR_PREFIX} The request timed out. Make sure your server, and any proxy or load balancer in front of Fleet, allows enough time to transfer large installers.`;
const DIFFERENT_FILE_TYPE_MESSAGE = "The selected package is for a different file type.";
const ensurePeriod = (str) => {
  if (str && !str.endsWith(".")) {
    return `${str}.`;
  }
  return str;
};
const formatAlreadyAvailableInstallMessage = (msg) => {
  const cleaned = msg.replace(/^Couldn't add software\.?\s*/, "");
  const fmaMatch = cleaned.match(
    /^(.+?) already has a Fleet-maintained app on the (.+?) fleet\./
  );
  if (fmaMatch) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ADD_SOFTWARE_ERROR_PREFIX, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, fmaMatch[1]), " already has a Fleet-maintained app on the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, fmaMatch[2]), " fleet.");
  }
  const vppMatch = cleaned.match(
    /^(.+?) already has an Apple App Store \(VPP\) on the (.+?) fleet\./
  );
  if (vppMatch) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ADD_SOFTWARE_ERROR_PREFIX, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, vppMatch[1]), " already has an Apple App Store (VPP) on the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, vppMatch[2]), " fleet.");
  }
  const packageMatch = cleaned.match(
    /^(.+?) already has a software package on the (.+?) fleet\./
  );
  if (packageMatch) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ADD_SOFTWARE_ERROR_PREFIX, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, packageMatch[1]), " already has a software package on the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, packageMatch[2]), " fleet.");
  }
  const limitMatch = cleaned.match(
    /^(.+?) already has (\d+) packages\. Before adding, delete one you no longer use\./
  );
  if (limitMatch) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ADD_SOFTWARE_ERROR_PREFIX, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, limitMatch[1]), " already has", " ", limitMatch[2], " packages. Before adding, delete one you no longer use.");
  }
  const legacyInstallerMatch = cleaned.match(
    /^(.+?) already has an installer available for the (.+?) fleet\./
  );
  if (legacyInstallerMatch) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ADD_SOFTWARE_ERROR_PREFIX, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, legacyInstallerMatch[1]), " already has an installer available for the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, legacyInstallerMatch[2]), " fleet.");
  }
  const legacyQuotedMatch = cleaned.match(
    /^(?:SoftwareInstaller|In-house app) "(.+?)" already.+ fleet "(.+?)"\./
  );
  if (legacyQuotedMatch) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ADD_SOFTWARE_ERROR_PREFIX, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, legacyQuotedMatch[1]), " already has an installer available for the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, legacyQuotedMatch[2]), " fleet.");
  }
  return null;
};
const formatDifferentFileTypeMessage = (msg, softwareTitle) => {
  if (!softwareTitle || !msg.includes(DIFFERENT_FILE_TYPE_MESSAGE)) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ADD_SOFTWARE_ERROR_PREFIX, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, softwareTitle), " already has an installer of a different file type.");
};


/***/ }),

/***/ 33277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareAddPage_SoftwareAddPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/side_panels/QuerySidePanel/index.ts + 15 modules
var QuerySidePanel = __webpack_require__(37863);
// EXTERNAL MODULE: ./frontend/components/SidePanelContent/index.ts + 1 modules
var SidePanelContent = __webpack_require__(90125);
// EXTERNAL MODULE: ./frontend/components/SidePanelPage/index.ts + 1 modules
var SidePanelPage = __webpack_require__(56118);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/context/query.tsx
var query = __webpack_require__(83535);
// EXTERNAL MODULE: ./frontend/hooks/useToggleSidePanel.ts
var useToggleSidePanel = __webpack_require__(7714);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareAddPage.tsx
















const baseClass = "software-add-page";
const addSoftwareSubNav = [
  {
    name: "Fleet-maintained",
    pathname: paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED
  },
  {
    name: "App store",
    pathname: paths/* default */.A.SOFTWARE_ADD_APP_STORE
  },
  {
    name: "Custom package",
    pathname: paths/* default */.A.SOFTWARE_ADD_PACKAGE
  }
];
const getTabIndex = (path) => {
  return addSoftwareSubNav.findIndex((navItem) => {
    return path.startsWith(navItem.pathname);
  });
};
const SoftwareAddPage = ({
  children,
  location,
  router
}) => {
  const { selectedOsqueryTable, setSelectedOsqueryTable } = (0,react.useContext)(
    query/* QueryContext */.c
  );
  const { isSidePanelOpen, setSidePanelOpen } = (0,useToggleSidePanel/* default */.A)(false);
  const navigateToNav = (0,react.useCallback)(
    (i) => {
      setSidePanelOpen(false);
      const navPath = (0,url/* getPathWithQueryParams */.M8)(addSoftwareSubNav[i].pathname, {
        fleet_id: location.query.fleet_id
      });
      router.replace(navPath);
    },
    [location.query.fleet_id, router, setSidePanelOpen]
  );
  if (!location.query.fleet_id) {
    router.replace(
      (0,url/* getPathWithQueryParams */.M8)(location.pathname, {
        fleet_id: team/* APP_CONTEXT_NO_TEAM_ID */.Gl
      })
    );
    return null;
  }
  const onOsqueryTableSelect = (tableName) => {
    setSelectedOsqueryTable(tableName);
  };
  const backUrl = (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_LIBRARY, {
    fleet_id: location.query.fleet_id
  });
  return /* @__PURE__ */ react.createElement(SidePanelPage/* default */.A, null, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
    BackButton/* default */.A,
    {
      text: "Back to software",
      path: backUrl,
      className: `${baseClass}__back-to-software`
    }
  )), /* @__PURE__ */ react.createElement("h1", null, "Add software"), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "Add software to your library. You can add it to self service later." }), /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(
    esm/* Tabs */.tU,
    {
      selectedIndex: getTabIndex((location == null ? void 0 : location.pathname) || ""),
      onSelect: navigateToNav
    },
    /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, addSoftwareSubNav.map((navItem) => {
      return /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: navItem.name, "data-text": navItem.name }, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, navItem.name));
    }))
  )), /* @__PURE__ */ react.createElement("div", { key: location == null ? void 0 : location.pathname, className: "tab-nav-routed-content" }, react.cloneElement(children, {
    router,
    currentTeamId: parseInt(location.query.fleet_id, 10),
    isSidePanelOpen,
    setSidePanelOpen
  }))), isSidePanelOpen && /* @__PURE__ */ react.createElement(SidePanelContent/* default */.A, null, /* @__PURE__ */ react.createElement(
    QuerySidePanel/* default */.A,
    {
      key: "query-side-panel",
      onOsqueryTableSelect,
      selectedOsqueryTable,
      onClose: () => setSidePanelOpen(false)
    }
  ))));
};
/* harmony default export */ var SoftwareAddPage_SoftwareAddPage = (SoftwareAddPage);

;// ./frontend/pages/SoftwarePage/SoftwareAddPage/index.ts




/***/ }),

/***/ 71554:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareInventory_SoftwareInventory; }
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/EmptySoftwareTable/index.ts + 1 modules
var EmptySoftwareTable = __webpack_require__(73870);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareInventory/SoftwareInventoryTable/helpers.ts
var SoftwareInventoryTable_helpers = __webpack_require__(91262);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/SoftwareNameCell/index.ts
var SoftwareNameCell = __webpack_require__(81790);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var interfaces_software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/VersionCell/index.ts + 1 modules
var VersionCell = __webpack_require__(33745);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/VulnerabilitiesCell/index.ts + 1 modules
var VulnerabilitiesCell = __webpack_require__(29844);
;// ./frontend/pages/SoftwarePage/SoftwareInventory/SoftwareInventoryTable/SoftwareInventoryTableConfig.tsx













const getSoftwareNameCellData = (softwareTitle, teamId) => {
  const softwareTitleDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
    paths/* default */.A.SOFTWARE_TITLE_DETAILS(softwareTitle.id.toString()),
    { fleet_id: teamId }
  );
  const { software_package, app_store_app } = softwareTitle;
  let hasInstaller = false;
  let isSelfService = false;
  let installType;
  let iconUrl = null;
  if (software_package) {
    hasInstaller = true;
    isSelfService = software_package.self_service;
    installType = software_package.automatic_install_policies && software_package.automatic_install_policies.length > 0 ? "automatic" : "manual";
  } else if (app_store_app) {
    hasInstaller = true;
    isSelfService = app_store_app.self_service;
    iconUrl = app_store_app.icon_url;
    installType = app_store_app.automatic_install_policies && app_store_app.automatic_install_policies.length > 0 ? "automatic" : "manual";
  }
  if (softwareTitle.icon_url) {
    iconUrl = softwareTitle.icon_url;
  }
  const automaticInstallPoliciesCount = (0,SoftwarePage_helpers/* getAutomaticInstallPoliciesCount */.YQ)(
    softwareTitle
  );
  const isAllTeams = teamId === void 0;
  return {
    name: softwareTitle.name,
    displayName: softwareTitle.display_name,
    bundleIdentifier: softwareTitle.bundle_identifier,
    source: softwareTitle.source,
    path: softwareTitleDetailsPath,
    hasInstaller: hasInstaller && !isAllTeams,
    isSelfService,
    installType,
    iconUrl,
    automaticInstallPoliciesCount
  };
};
const generateTableHeaders = (router, teamId) => {
  const softwareTableHeaders = [
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Name", isSortedDesc: cellProps.column.isSortedDesc }),
      disableSortBy: false,
      accessor: "name",
      Cell: (cellProps) => {
        var _a;
        const nameCellData = getSoftwareNameCellData(
          cellProps.row.original,
          teamId
        );
        const isAndroidPlayStoreApp = !!cellProps.row.original.app_store_app && cellProps.row.original.source === "android_apps";
        return /* @__PURE__ */ react.createElement(
          SoftwareNameCell/* default */.A,
          {
            name: nameCellData.name,
            display_name: nameCellData.displayName,
            bundle_identifier: nameCellData.bundleIdentifier,
            source: nameCellData.source,
            path: nameCellData.path,
            router,
            hasInstaller: nameCellData.hasInstaller,
            isSelfService: nameCellData.isSelfService,
            iconUrl: (_a = nameCellData.iconUrl) != null ? _a : void 0,
            automaticInstallPoliciesCount: nameCellData.automaticInstallPoliciesCount,
            isIosOrIpadosApp: (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(nameCellData.source),
            isAndroidPlayStoreApp,
            isAppStoreApp: !!cellProps.row.original.app_store_app,
            autoUpdateEnabled: cellProps.row.original.auto_update_enabled,
            autoUpdateWindowStart: cellProps.row.original.auto_update_window_start,
            autoUpdateWindowEnd: cellProps.row.original.auto_update_window_end
          }
        );
      },
      sortType: "caseInsensitive"
    },
    {
      Header: "Version",
      disableSortBy: true,
      accessor: "versions",
      Cell: VersionCell/* VersionsColumnCell */.M
    },
    {
      Header: "Type",
      disableSortBy: true,
      accessor: "source",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,interfaces_software/* formatSoftwareType */.Nt)(cellProps.row.original) })
    },
    // the "vulnerabilities" accessor is used but the data is actually coming
    // from the version attribute. We do this as we already have a "versions"
    // attribute used for the "Version" column and we cannot reuse. This is a
    // limitation of react-table.
    // With the versions data, we can sum up the vulnerabilities to get the
    // total number of vulnerabilities for the software title
    {
      Header: "Vulnerabilities",
      disableSortBy: true,
      Cell: (cellProps) => {
        var _a;
        const vulnDetectionNotSupported = (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(cellProps.row.original.source) || cellProps.row.original.source === "tgz_packages";
        if (vulnDetectionNotSupported) {
          return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: "Not supported", grey: true });
        }
        const vulnerabilities = (0,SoftwareInventoryTable_helpers/* getVulnerabilities */.JF)(
          (_a = cellProps.row.original.versions) != null ? _a : []
        );
        return /* @__PURE__ */ react.createElement(VulnerabilitiesCell/* default */.A, { vulnerabilities });
      }
    },
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Hosts",
          disableSortBy: false,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      accessor: "hosts_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      Header: "",
      id: "view-all-hosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        const { source } = cellProps.row.original;
        const hostCountNotSupported = interfaces_software/* NO_VERSION_OR_HOST_DATA_SOURCES */.gm.includes(
          source
        );
        if (hostCountNotSupported) return null;
        return /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              software_title_id: cellProps.row.original.id,
              fleet_id: teamId
            },
            className: "software-link",
            rowHover: true
          }
        );
      }
    }
  ];
  return softwareTableHeaders;
};
/* harmony default export */ var SoftwareInventoryTableConfig = (generateTableHeaders);

;// ./frontend/pages/SoftwarePage/SoftwareInventory/SoftwareInventoryTable/SoftwareVersionsTableConfig.tsx










const SoftwareVersionsTableConfig_generateTableHeaders = (router, teamId) => {
  const softwareTableHeaders = [
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Name", isSortedDesc: cellProps.column.isSortedDesc }),
      disableSortBy: false,
      accessor: "name",
      Cell: (cellProps) => {
        const {
          id,
          name,
          display_name,
          bundle_identifier,
          source
        } = cellProps.row.original;
        const softwareVersionDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_VERSION_DETAILS(id.toString()),
          {
            fleet_id: teamId
          }
        );
        return /* @__PURE__ */ react.createElement(
          SoftwareNameCell/* default */.A,
          {
            name,
            display_name,
            bundle_identifier,
            source,
            path: softwareVersionDetailsPath,
            router
          }
        );
      },
      sortType: "caseInsensitive"
    },
    {
      Header: "Version",
      disableSortBy: true,
      accessor: "version",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,interfaces_software/* formatSoftwareVersion */.hK)(cellProps.row.original) })
    },
    {
      Header: "Type",
      disableSortBy: true,
      accessor: "source",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,interfaces_software/* formatSoftwareType */.Nt)(cellProps.row.original) })
    },
    {
      Header: "Vulnerabilities",
      disableSortBy: true,
      accessor: "vulnerabilities",
      Cell: (cellProps) => {
        if (["ipados_apps", "ios_apps"].includes(cellProps.row.original.source)) {
          return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: "Not supported", grey: true });
        }
        return /* @__PURE__ */ react.createElement(VulnerabilitiesCell/* default */.A, { vulnerabilities: cellProps.cell.value });
      }
    },
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Hosts",
          disableSortBy: false,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      accessor: "hosts_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      Header: "",
      id: "view-all-hosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(react.Fragment, null, cellProps.row.original && /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              software_version_id: cellProps.row.original.id,
              fleet_id: teamId
              // TODO: do we need fleet id here?
            },
            className: "software-link",
            rowHover: true
          }
        ));
      }
    }
  ];
  return softwareTableHeaders;
};
/* harmony default export */ var SoftwareVersionsTableConfig = (SoftwareVersionsTableConfig_generateTableHeaders);

;// ./frontend/pages/SoftwarePage/SoftwareInventory/SoftwareInventoryTable/SoftwareInventoryTable.tsx

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
















const isSoftwareTitles = (data) => {
  if (!data) return false;
  return data.software_titles !== void 0;
};
const baseClass = "software-inventory-table";
const SoftwareTable = ({
  router,
  data,
  showVersions,
  installableSoftwareExists,
  isSoftwareEnabled,
  query,
  perPage,
  orderDirection,
  orderKey,
  vulnFilters,
  currentPage,
  teamId,
  isLoading,
  onAddFiltersClick
}) => {
  const currentPath = showVersions ? paths/* default */.A.SOFTWARE_VERSIONS : paths/* default */.A.SOFTWARE_INVENTORY;
  const determineQueryParamChange = (0,react.useCallback)(
    (newTableQuery) => {
      var _a;
      const changedEntry = Object.entries(newTableQuery).find(([key, val]) => {
        switch (key) {
          case "searchQuery":
            return val !== query;
          case "sortDirection":
            return val !== orderDirection;
          case "sortHeader":
            return val !== orderKey;
          case "pageIndex":
            return val !== currentPage;
          default:
            return false;
        }
      });
      return (_a = changedEntry == null ? void 0 : changedEntry[0]) != null ? _a : "";
    },
    [currentPage, orderDirection, orderKey, query]
  );
  const generateNewQueryParams = (0,react.useCallback)(
    (newTableQuery, changedParam) => {
      const newQueryParam = __spreadValues({
        query: newTableQuery.searchQuery,
        fleet_id: teamId,
        order_direction: newTableQuery.sortDirection,
        order_key: newTableQuery.sortHeader,
        page: changedParam === "pageIndex" || changedParam === "" ? newTableQuery.pageIndex : 0
      }, (0,SoftwareInventoryTable_helpers/* buildSoftwareVulnFiltersQueryParams */.yz)(vulnFilters));
      return newQueryParam;
    },
    [teamId, vulnFilters]
  );
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const changedParam = determineQueryParamChange(newTableQuery);
      const newRoute = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: currentPath,
        routeTemplate: "",
        queryParams: generateNewQueryParams(newTableQuery, changedParam)
      });
      router.replace(newRoute);
    },
    [determineQueryParamChange, generateNewQueryParams, router, currentPath]
  );
  let tableData;
  let generateTableConfig;
  if (data === void 0) {
    tableData;
    generateTableConfig = () => [];
  } else if (isSoftwareTitles(data)) {
    tableData = data.software_titles;
    generateTableConfig = SoftwareInventoryTableConfig;
  } else {
    tableData = data.software;
    generateTableConfig = SoftwareVersionsTableConfig;
  }
  const softwareTableHeaders = (0,react.useMemo)(() => {
    if (!data) return [];
    return generateTableConfig(router, teamId);
  }, [generateTableConfig, data, router, teamId]);
  const hasData = tableData && tableData.length > 0;
  const hasQuery = query !== "";
  const vulnFilterDetails = (0,SoftwareInventoryTable_helpers/* getVulnFilterRenderDetails */.ol)(vulnFilters);
  const hasVulnFilters = vulnFilterDetails.filterCount > 0;
  const isTrulyEmpty = !hasData && !hasQuery && !hasVulnFilters && !showVersions;
  const controlsDisabled = !isSoftwareEnabled || isTrulyEmpty;
  const handleShowVersionsToggle = () => {
    const queryParams = __spreadValues({
      query,
      fleet_id: teamId,
      order_direction: orderDirection,
      order_key: orderKey,
      page: 0
    }, (0,SoftwareInventoryTable_helpers/* buildSoftwareVulnFiltersQueryParams */.yz)(vulnFilters));
    router.replace(
      (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: showVersions ? paths/* default */.A.SOFTWARE_INVENTORY : paths/* default */.A.SOFTWARE_VERSIONS,
        routeTemplate: "",
        queryParams
      })
    );
  };
  const handleRowSelect = (row) => {
    if (!row.original.id) return;
    const detailsPath = showVersions ? paths/* default */.A.SOFTWARE_VERSION_DETAILS(row.original.id.toString()) : paths/* default */.A.SOFTWARE_TITLE_DETAILS(row.original.id.toString());
    router.push((0,url/* getPathWithQueryParams */.M8)(detailsPath, { fleet_id: teamId }));
  };
  const renderSoftwareCount = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count: data == null ? void 0 : data.count }), tableData && (data == null ? void 0 : data.counts_updated_at) && /* @__PURE__ */ react.createElement(
      LastUpdatedText/* default */.A,
      {
        lastUpdatedAt: data.counts_updated_at,
        customTooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time software data was ", /* @__PURE__ */ react.createElement("br", null), "updated, including vulnerabilities ", /* @__PURE__ */ react.createElement("br", null), "and host counts.")
      }
    ));
  };
  const renderCustomControls = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Slider/* default */.A,
      {
        value: showVersions,
        onChange: handleShowVersionsToggle,
        inactiveText: "Show versions",
        activeText: "Show versions",
        disabled: controlsDisabled
      }
    ), /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        className: `${baseClass}__filters`,
        position: "left",
        underline: false,
        showArrow: true,
        tipOffset: 12,
        tipContent: vulnFilterDetails.tooltipText,
        disableTooltip: !hasVulnFilters
      },
      /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "secondary",
          onClick: onAddFiltersClick,
          disabled: controlsDisabled,
          icon: "filter"
        },
        /* @__PURE__ */ react.createElement("span", null, vulnFilterDetails.buttonText)
      )
    ));
  };
  const renderTableHelpText = () => /* @__PURE__ */ react.createElement("div", null, "Seeing unexpected software or vulnerabilities?", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: constants/* GITHUB_NEW_ISSUE_LINK */.CO,
      text: "File an issue on GitHub",
      newTab: true
    }
  ));
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: softwareTableHeaders,
      data: tableData != null ? tableData : [],
      isLoading,
      resultsTitle: "items",
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptySoftwareTable/* default */.A,
        {
          vulnFilters,
          isSoftwareDisabled: !isSoftwareEnabled,
          noSearchQuery: query === "",
          installableSoftwareExists
        }
      ),
      defaultSortHeader: orderKey,
      defaultSortDirection: orderDirection,
      pageIndex: currentPage,
      defaultSearchQuery: query,
      manualSortBy: true,
      pageSize: perPage,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableNextPage: !(data == null ? void 0 : data.meta.has_next_results),
      searchable: true,
      disableSearch: controlsDisabled,
      inputPlaceHolder: "Search by name or vulnerability (CVE)",
      onQueryChange,
      customControl: renderCustomControls,
      stackControls: true,
      renderCount: renderSoftwareCount,
      renderTableHelpText,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect
    }
  ));
};
/* harmony default export */ var SoftwareInventoryTable = (SoftwareTable);

;// ./frontend/pages/SoftwarePage/SoftwareInventory/SoftwareInventoryTable/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareInventory/SoftwareInventory.tsx

var SoftwareInventory_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SoftwareInventory_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SoftwareInventory_hasOwnProp = Object.prototype.hasOwnProperty;
var SoftwareInventory_propIsEnum = Object.prototype.propertyIsEnumerable;
var SoftwareInventory_defNormalProp = (obj, key, value) => key in obj ? SoftwareInventory_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SoftwareInventory_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SoftwareInventory_hasOwnProp.call(b, prop))
      SoftwareInventory_defNormalProp(a, prop, b[prop]);
  if (SoftwareInventory_getOwnPropSymbols)
    for (var prop of SoftwareInventory_getOwnPropSymbols(b)) {
      if (SoftwareInventory_propIsEnum.call(b, prop))
        SoftwareInventory_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));








const SoftwareInventory_baseClass = "software-inventory";
const DATA_STALE_TIME = 3e4;
const QUERY_OPTIONS = {
  keepPreviousData: true,
  staleTime: DATA_STALE_TIME
};
const SoftwareInventory = ({
  router,
  isSoftwareEnabled,
  query,
  perPage,
  orderDirection,
  orderKey,
  vulnFilters,
  currentPage,
  teamId,
  onAddFiltersClick
}) => {
  const showVersions = location.pathname === paths/* default */.A.SOFTWARE_VERSIONS;
  const {
    data: titlesData,
    isFetching: isTitlesFetching,
    isLoading: isTitlesLoading,
    isError: isTitlesError
  } = (0,es.useQuery)(
    [
      SoftwareInventory_spreadValues({
        scope: "software-titles",
        page: currentPage,
        perPage,
        query,
        orderDirection,
        orderKey,
        teamId
      }, vulnFilters)
    ],
    ({ queryKey: [queryKey] }) => software/* default */.A.getSoftwareTitles((0,lodash.omit)(queryKey, "scope")),
    __spreadProps(SoftwareInventory_spreadValues({}, QUERY_OPTIONS), {
      enabled: location.pathname === paths/* default */.A.SOFTWARE_INVENTORY
    })
  );
  const {
    data: versionsData,
    isFetching: isVersionsFetching,
    isLoading: isVersionsLoading,
    isError: isVersionsError
  } = (0,es.useQuery)(
    [
      SoftwareInventory_spreadValues(SoftwareInventory_spreadValues({
        scope: "software-versions",
        page: currentPage,
        perPage,
        query,
        orderDirection,
        orderKey,
        teamId
      }, vulnFilters), showVersions ? { without_vulnerability_details: true } : {})
    ],
    ({ queryKey: [queryKey] }) => software/* default */.A.getSoftwareVersions((0,lodash.omit)(queryKey, "scope")),
    __spreadProps(SoftwareInventory_spreadValues({}, QUERY_OPTIONS), {
      enabled: location.pathname === paths/* default */.A.SOFTWARE_VERSIONS
    })
  );
  const {
    data: titlesAvailableForInstallResponse,
    isFetching: isTitlesAFIFetching,
    isLoading: isTitlesAFILoading,
    isError: isTitlesAFIError
  } = (0,es.useQuery)(
    [
      SoftwareInventory_spreadValues({
        scope: "software-titles",
        page: 0,
        perPage,
        query: "",
        orderDirection,
        orderKey,
        teamId,
        availableForInstall: true
      }, vulnFilters)
    ],
    ({ queryKey: [queryKey] }) => software/* default */.A.getSoftwareTitles((0,lodash.omit)(queryKey, "scope")),
    __spreadProps(SoftwareInventory_spreadValues({}, QUERY_OPTIONS), {
      enabled: location.pathname === paths/* default */.A.SOFTWARE_VERSIONS && !isVersionsLoading && !isVersionsFetching && versionsData !== void 0 && versionsData.count === 0
    })
  );
  if (isTitlesLoading || isVersionsLoading || isTitlesAFILoading) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isTitlesError || isVersionsError || isTitlesAFIError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
  }
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareInventory_baseClass }, /* @__PURE__ */ react.createElement(
    SoftwareInventoryTable,
    {
      router,
      data: showVersions ? versionsData : titlesData,
      showVersions,
      installableSoftwareExists: !!(titlesAvailableForInstallResponse == null ? void 0 : titlesAvailableForInstallResponse.count),
      isSoftwareEnabled,
      query,
      perPage,
      orderDirection,
      orderKey,
      currentPage,
      teamId,
      isLoading: isTitlesFetching || isVersionsFetching || isTitlesAFIFetching,
      onAddFiltersClick,
      vulnFilters
    }
  ));
};
/* harmony default export */ var SoftwareInventory_SoftwareInventory = (SoftwareInventory);

;// ./frontend/pages/SoftwarePage/SoftwareInventory/index.ts




/***/ }),

/***/ 68063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SelfServiceCategoriesPage_SelfServiceCategoriesPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/FleetsDropdown/index.tsx + 1 modules
var FleetsDropdown = __webpack_require__(82196);
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
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/UploadList/index.ts + 1 modules
var UploadList = __webpack_require__(67050);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/self_service_categories.ts
var self_service_categories = __webpack_require__(23543);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/AddCategoryModal/AddCategoryModal.tsx

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







const baseClass = "add-category-modal";
const AddCategoryModal = ({
  fleetId,
  onExit,
  onSuccess
}) => {
  const [name, setName] = (0,react.useState)("");
  const [error, setError] = (0,react.useState)(null);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const trimmedName = name.trim();
  const isDisabled = trimmedName.length === 0 || isSubmitting;
  const onNameChange = (value) => {
    setName(value);
    if (error) setError(null);
  };
  const onSubmit = (event) => __async(null, null, function* () {
    event.preventDefault();
    if (isDisabled) return;
    setIsSubmitting(true);
    try {
      yield self_service_categories/* default */.A.addCategory({
        fleet_id: fleetId,
        name: trimmedName
      });
      onSuccess();
    } catch (e) {
      if ((0,errors/* hasStatusKey */.S0)(e) && e.status === 409) {
        setError(
          "A self-service category with this name already exists in this fleet."
        );
      } else {
        setError("Couldn't add self-service category.");
      }
      setIsSubmitting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Add category",
      onExit,
      className: baseClass,
      isContentDisabled: isSubmitting
    },
    /* @__PURE__ */ react.createElement("form", { className: `${baseClass}__form`, onSubmit }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Name",
        name: "name",
        value: name,
        onChange: onNameChange,
        error,
        autofocus: true,
        ignore1password: true,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", disabled: isDisabled, isLoading: isSubmitting }, "Add"), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit, disabled: isSubmitting }, "Cancel")))
  );
};
/* harmony default export */ var AddCategoryModal_AddCategoryModal = (AddCategoryModal);

;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/AddCategoryModal/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/DeleteCategoryModal/DeleteCategoryModal.tsx

var DeleteCategoryModal_async = (__this, __arguments, generator) => {
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





const DeleteCategoryModal_baseClass = "delete-category-modal";
const DeleteCategoryModal = ({
  category,
  onExit,
  onSuccess
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDelete = () => DeleteCategoryModal_async(null, null, function* () {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      yield self_service_categories/* default */.A.deleteCategory(category.id);
      onSuccess();
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn't delete self-service category.", { response: e });
      setIsDeleting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete category",
      onExit,
      className: DeleteCategoryModal_baseClass,
      isContentDisabled: isDeleting
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", { className: `${DeleteCategoryModal_baseClass}__body` }, "The category will be removed from all associated software."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "alert",
        disabled: isDeleting,
        isLoading: isDeleting,
        onClick: onDelete
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit, disabled: isDeleting }, "Cancel")))
  );
};
/* harmony default export */ var DeleteCategoryModal_DeleteCategoryModal = (DeleteCategoryModal);

;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/DeleteCategoryModal/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/EditCategoryModal/EditCategoryModal.tsx

var EditCategoryModal_async = (__this, __arguments, generator) => {
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







const EditCategoryModal_baseClass = "edit-category-modal";
const EditCategoryModal = ({
  category,
  onExit,
  onSuccess
}) => {
  const [name, setName] = (0,react.useState)(category.name);
  const [error, setError] = (0,react.useState)(null);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const trimmedName = name.trim();
  const isUnchanged = trimmedName === category.name;
  const isDisabled = trimmedName.length === 0 || isUnchanged || isSubmitting;
  const onNameChange = (value) => {
    setName(value);
    if (error) setError(null);
  };
  const onSubmit = (event) => EditCategoryModal_async(null, null, function* () {
    event.preventDefault();
    if (isDisabled) return;
    setIsSubmitting(true);
    try {
      yield self_service_categories/* default */.A.updateCategory(category.id, {
        name: trimmedName
      });
      onSuccess();
    } catch (e) {
      if ((0,errors/* hasStatusKey */.S0)(e) && e.status === 409) {
        setError(
          "A self-service category with this name already exists in this fleet."
        );
      } else {
        setError("Couldn't update self-service category.");
      }
      setIsSubmitting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Edit category",
      onExit,
      className: EditCategoryModal_baseClass,
      isContentDisabled: isSubmitting
    },
    /* @__PURE__ */ react.createElement("form", { className: `${EditCategoryModal_baseClass}__form`, onSubmit }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Name",
        name: "name",
        value: name,
        onChange: onNameChange,
        error,
        autofocus: true,
        ignore1password: true,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", disabled: isDisabled, isLoading: isSubmitting }, "Save"), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit, disabled: isSubmitting }, "Cancel")))
  );
};
/* harmony default export */ var EditCategoryModal_EditCategoryModal = (EditCategoryModal);

;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/EditCategoryModal/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/SelfServiceCategoriesPage.tsx

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
























const SelfServiceCategoriesPage_baseClass = "self-service-categories-page";
const SelfServiceCategoriesPage = ({
  router,
  location
}) => {
  var _a;
  const {
    config,
    isPremiumTier,
    isGlobalAdmin,
    isGlobalMaintainer
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isPrimoMode = ((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo) || false;
  const queryClient = (0,es.useQueryClient)();
  const {
    currentTeamId,
    teamIdForApi,
    userTeams,
    handleTeamChange,
    isRouteOk,
    isTeamAdmin,
    isTeamMaintainer
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: false,
    includeNoTeam: true
  });
  const fleetId = teamIdForApi != null ? teamIdForApi : 0;
  const backToLibraryPath = (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_LIBRARY, {
    fleet_id: teamIdForApi
  });
  const canManage = !!isGlobalAdmin || !!isGlobalMaintainer || !!isTeamAdmin || !!isTeamMaintainer;
  const [showAddModal, setShowAddModal] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (location.query.add_category !== "1") return;
    if (canManage) {
      setShowAddModal(true);
    }
    const _a2 = location.query, { add_category } = _a2, rest = __objRest(_a2, ["add_category"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [location.query, location.pathname, router, canManage]);
  const [
    categoryToEdit,
    setCategoryToEdit
  ] = (0,react.useState)(null);
  const [
    categoryToDelete,
    setCategoryToDelete
  ] = (0,react.useState)(null);
  const { data: categoriesData, isLoading, isError } = (0,es.useQuery)(
    ["selfServiceCategories", teamIdForApi],
    () => self_service_categories/* default */.A.getCategories(teamIdForApi),
    {
      enabled: !!isPremiumTier && isRouteOk && teamIdForApi !== void 0,
      refetchOnWindowFocus: false
    }
  );
  const invalidateList = () => {
    queryClient.invalidateQueries(["selfServiceCategories", teamIdForApi]);
  };
  const onAddSuccess = () => {
    invalidateList();
    setShowAddModal(false);
    ToastNotification/* notify */.me.success("Successfully added self-service category.");
  };
  const onEditSuccess = () => {
    invalidateList();
    setCategoryToEdit(null);
    ToastNotification/* notify */.me.success("Successfully updated self-service category.");
  };
  const onDeleteSuccess = () => {
    invalidateList();
    setCategoryToDelete(null);
    ToastNotification/* notify */.me.success("Successfully deleted self-service category.");
  };
  const renderHeader = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to software library", path: backToLibraryPath }), isPremiumTier && !isPrimoMode ? /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceCategoriesPage_baseClass}__fleet-row` }, /* @__PURE__ */ react.createElement(
    FleetsDropdown/* default */.A,
    {
      currentUserFleets: userTeams != null ? userTeams : [],
      selectedFleetId: currentTeamId,
      onChange: handleTeamChange,
      includeAllFleets: false,
      includeUnassigned: true
    }
  )) : /* @__PURE__ */ react.createElement("h1", null, "Self-service categories"), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Manage self-service categories.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/learn-more-about/self-service-software-categories",
          text: "Learn more",
          newTab: true
        }
      ))
    }
  ));
  const renderBody = () => {
    var _a2;
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(
        Card/* default */.A,
        {
          color: "grey",
          paddingSize: "xxlarge",
          className: `${SelfServiceCategoriesPage_baseClass}__premium-card`
        },
        /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null)
      );
    }
    if (!isRouteOk || isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge", selfCenter: true });
    }
    const categories = (_a2 = categoriesData == null ? void 0 : categoriesData.self_service_categories) != null ? _a2 : [];
    const hasCategories = categories.length > 0;
    if (!hasCategories) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No self-service categories",
          info: canManage ? "Add category to group your software and scripts in self service." : "No self-service categories are available.",
          primaryButton: canManage ? /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => setShowAddModal(true) }, "Add category") : void 0
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      UploadList/* default */.A,
      {
        className: `${SelfServiceCategoriesPage_baseClass}__list`,
        keyAttribute: "id",
        listItems: categories,
        HeadingComponent: () => /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceCategoriesPage_baseClass}__list-header` }, /* @__PURE__ */ react.createElement("span", { className: `${SelfServiceCategoriesPage_baseClass}__list-title` }, "Self-service categories"), canManage && /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "secondary",
            onClick: () => setShowAddModal(true),
            icon: "plus"
          },
          "Add category"
        )),
        ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceCategoriesPage_baseClass}__row` }, /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceCategoriesPage_baseClass}__row-name` }, /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: listItem.name })), canManage && /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceCategoriesPage_baseClass}__row-actions` }, /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "secondary",
            onClick: () => setCategoryToEdit(listItem),
            ariaLabel: `Edit ${listItem.name}`,
            title: "Edit",
            icon: "pencil"
          }
        ), /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "secondary",
            onClick: () => setCategoryToDelete(listItem),
            ariaLabel: `Delete ${listItem.name}`,
            title: "Delete",
            icon: "trash"
          }
        )))
      }
    );
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: SelfServiceCategoriesPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderHeader(), renderBody(), showAddModal && /* @__PURE__ */ react.createElement(
    AddCategoryModal_AddCategoryModal,
    {
      fleetId,
      onExit: () => setShowAddModal(false),
      onSuccess: onAddSuccess
    }
  ), categoryToEdit && /* @__PURE__ */ react.createElement(
    EditCategoryModal_EditCategoryModal,
    {
      category: categoryToEdit,
      onExit: () => setCategoryToEdit(null),
      onSuccess: onEditSuccess
    }
  ), categoryToDelete && /* @__PURE__ */ react.createElement(
    DeleteCategoryModal_DeleteCategoryModal,
    {
      category: categoryToDelete,
      onExit: () => setCategoryToDelete(null),
      onSuccess: onDeleteSuccess
    }
  )));
};
/* harmony default export */ var SelfServiceCategoriesPage_SelfServiceCategoriesPage = (SelfServiceCategoriesPage);

;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SelfServiceCategoriesPage/index.ts




/***/ }),

/***/ 18016:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareLibrary_SoftwareLibrary; }
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/EmptySoftwareTable/index.ts + 1 modules
var EmptySoftwareTable = __webpack_require__(73870);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/SoftwareNameCell/index.ts
var SoftwareNameCell = __webpack_require__(81790);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var interfaces_software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/VersionCell/index.ts + 1 modules
var VersionCell = __webpack_require__(33745);
;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SoftwareLibraryTable/SoftwareLibraryTableConfig.tsx












const getSoftwareNameCellData = (softwareTitle, teamId) => {
  const softwareTitleDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
    paths/* default */.A.SOFTWARE_TITLE_DETAILS(softwareTitle.id.toString()),
    { fleet_id: teamId }
  );
  const { software_package, app_store_app } = softwareTitle;
  let hasInstaller = false;
  let isSelfService = false;
  let installType;
  let iconUrl = null;
  if (software_package) {
    hasInstaller = true;
    isSelfService = software_package.self_service;
    installType = software_package.automatic_install_policies && software_package.automatic_install_policies.length > 0 ? "automatic" : "manual";
  } else if (app_store_app) {
    hasInstaller = true;
    isSelfService = app_store_app.self_service;
    iconUrl = app_store_app.icon_url;
    installType = app_store_app.automatic_install_policies && app_store_app.automatic_install_policies.length > 0 ? "automatic" : "manual";
  }
  if (softwareTitle.icon_url) {
    iconUrl = softwareTitle.icon_url;
  }
  const automaticInstallPoliciesCount = (0,SoftwarePage_helpers/* getAutomaticInstallPoliciesCount */.YQ)(
    softwareTitle
  );
  return {
    name: softwareTitle.name,
    displayName: softwareTitle.display_name,
    source: softwareTitle.source,
    path: softwareTitleDetailsPath,
    hasInstaller,
    isSelfService,
    installType,
    iconUrl,
    automaticInstallPoliciesCount
  };
};
const getLibraryVersion = (softwareTitle) => {
  if (softwareTitle.software_package) {
    return softwareTitle.software_package.version || null;
  }
  if (softwareTitle.app_store_app) {
    return softwareTitle.app_store_app.latest_version || null;
  }
  return null;
};
const generateTableHeaders = (router, teamId) => {
  const softwareTableHeaders = [
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Name", isSortedDesc: cellProps.column.isSortedDesc }),
      disableSortBy: false,
      accessor: "name",
      Cell: (cellProps) => {
        var _a;
        const nameCellData = getSoftwareNameCellData(
          cellProps.row.original,
          teamId
        );
        const isAndroidPlayStoreApp = !!cellProps.row.original.app_store_app && cellProps.row.original.source === "android_apps";
        return /* @__PURE__ */ react.createElement(
          SoftwareNameCell/* default */.A,
          {
            name: nameCellData.name,
            display_name: nameCellData.displayName,
            source: nameCellData.source,
            path: nameCellData.path,
            router,
            hasInstaller: nameCellData.hasInstaller,
            isSelfService: nameCellData.isSelfService,
            iconUrl: (_a = nameCellData.iconUrl) != null ? _a : void 0,
            automaticInstallPoliciesCount: nameCellData.automaticInstallPoliciesCount,
            isIosOrIpadosApp: (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(nameCellData.source),
            isAndroidPlayStoreApp,
            isAppStoreApp: !!cellProps.row.original.app_store_app,
            autoUpdateEnabled: cellProps.row.original.auto_update_enabled,
            autoUpdateWindowStart: cellProps.row.original.auto_update_window_start,
            autoUpdateWindowEnd: cellProps.row.original.auto_update_window_end
          }
        );
      },
      sortType: "caseInsensitive"
    },
    {
      Header: "Installed version",
      disableSortBy: true,
      accessor: "versions",
      Cell: VersionCell/* VersionsColumnCell */.M
    },
    {
      Header: "Library version",
      disableSortBy: true,
      // Use a unique id since we can't use the same accessor twice
      id: "library_version",
      Cell: (cellProps) => {
        const version = getLibraryVersion(cellProps.row.original);
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: version || "---", grey: !version });
      }
    },
    {
      Header: "Type",
      disableSortBy: true,
      accessor: "source",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,interfaces_software/* formatSoftwareType */.Nt)(cellProps.row.original) })
    },
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Hosts with any version installed." }, "Hosts"),
          disableSortBy: false,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      accessor: "hosts_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      Header: "",
      id: "view-all-hosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        const { source } = cellProps.row.original;
        const hostCountNotSupported = interfaces_software/* NO_VERSION_OR_HOST_DATA_SOURCES */.gm.includes(
          source
        );
        if (hostCountNotSupported) return null;
        return /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              software_title_id: cellProps.row.original.id,
              fleet_id: teamId
            },
            className: "software-link",
            rowHover: true
          }
        );
      }
    }
  ];
  return softwareTableHeaders;
};
/* harmony default export */ var SoftwareLibraryTableConfig = (generateTableHeaders);

;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SoftwareLibraryTable/SoftwareLibraryTable.tsx
















const baseClass = "software-library-table";
const SoftwareLibraryTable = ({
  router,
  data,
  isSoftwareEnabled,
  query,
  perPage,
  orderDirection,
  orderKey,
  selfServiceOnly,
  currentPage,
  teamId,
  isLoading
}) => {
  const {
    isGlobalAdmin,
    isGlobalMaintainer,
    isTeamAdmin,
    isTeamMaintainer
  } = (0,react.useContext)(app/* AppContext */.BR);
  const canAddSoftware = isGlobalAdmin || isGlobalMaintainer || isTeamAdmin || isTeamMaintainer;
  const determineQueryParamChange = (0,react.useCallback)(
    (newTableQuery) => {
      var _a;
      const changedEntry = Object.entries(newTableQuery).find(([key, val]) => {
        switch (key) {
          case "searchQuery":
            return val !== query;
          case "sortDirection":
            return val !== orderDirection;
          case "sortHeader":
            return val !== orderKey;
          case "pageIndex":
            return val !== currentPage;
          default:
            return false;
        }
      });
      return (_a = changedEntry == null ? void 0 : changedEntry[0]) != null ? _a : "";
    },
    [currentPage, orderDirection, orderKey, query]
  );
  const generateNewQueryParams = (0,react.useCallback)(
    (newTableQuery, changedParam) => {
      const newQueryParam = {
        query: newTableQuery.searchQuery,
        fleet_id: teamId,
        order_direction: newTableQuery.sortDirection,
        order_key: newTableQuery.sortHeader,
        page: changedParam === "pageIndex" || changedParam === "" ? newTableQuery.pageIndex : 0
      };
      if (selfServiceOnly) {
        newQueryParam.self_service = "true";
      }
      return newQueryParam;
    },
    [selfServiceOnly, teamId]
  );
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const changedParam = determineQueryParamChange(newTableQuery);
      const newRoute = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.SOFTWARE_LIBRARY,
        routeTemplate: "",
        queryParams: generateNewQueryParams(newTableQuery, changedParam)
      });
      router.replace(newRoute);
    },
    [determineQueryParamChange, generateNewQueryParams, router]
  );
  const tableData = data == null ? void 0 : data.software_titles;
  const softwareTableHeaders = (0,react.useMemo)(() => {
    if (!data) return [];
    return SoftwareLibraryTableConfig(router, teamId);
  }, [data, router, teamId]);
  const hasData = tableData && tableData.length > 0;
  const hasQuery = query !== "";
  const isTrulyEmpty = !hasData && !hasQuery && !selfServiceOnly;
  const controlsDisabled = !isSoftwareEnabled || isTrulyEmpty;
  const handleSelfServiceToggle = () => {
    const queryParams = {
      query,
      fleet_id: teamId,
      order_direction: orderDirection,
      order_key: orderKey,
      page: 0
    };
    if (!selfServiceOnly) {
      queryParams.self_service = "true";
    }
    router.replace(
      (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.SOFTWARE_LIBRARY,
        routeTemplate: "",
        queryParams
      })
    );
  };
  const handleRowSelect = (row) => {
    if (!row.original.id) return;
    const detailsPath = paths/* default */.A.SOFTWARE_TITLE_DETAILS(
      row.original.id.toString()
    );
    router.push((0,url/* getPathWithQueryParams */.M8)(detailsPath, { fleet_id: teamId }));
  };
  const renderSoftwareCount = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count: data == null ? void 0 : data.count }), tableData && (data == null ? void 0 : data.counts_updated_at) && /* @__PURE__ */ react.createElement(
      LastUpdatedText/* default */.A,
      {
        lastUpdatedAt: data.counts_updated_at,
        customTooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time software data was ", /* @__PURE__ */ react.createElement("br", null), "updated, including vulnerabilities ", /* @__PURE__ */ react.createElement("br", null), "and host counts.")
      }
    ));
  };
  const onClickCategories = () => {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_LIBRARY_CATEGORIES, {
        fleet_id: teamId
      })
    );
  };
  const renderCustomControls = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__controls` }, /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onClickCategories, icon: "settings" }, "Categories"), /* @__PURE__ */ react.createElement(
      Slider/* default */.A,
      {
        value: selfServiceOnly,
        onChange: handleSelfServiceToggle,
        inactiveText: "Self service only",
        activeText: "Self service only",
        disabled: controlsDisabled
      }
    ));
  };
  const renderTableHelpText = () => /* @__PURE__ */ react.createElement("div", null, "Seeing unexpected software?", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: constants/* GITHUB_NEW_ISSUE_LINK */.CO,
      text: "File an issue on GitHub",
      newTab: true
    }
  ));
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: softwareTableHeaders,
      data: tableData != null ? tableData : [],
      isLoading,
      resultsTitle: "items",
      emptyComponent: () => {
        if (!isSoftwareEnabled) {
          return /* @__PURE__ */ react.createElement(EmptySoftwareTable/* default */.A, { isSoftwareDisabled: true });
        }
        if (query !== "" || selfServiceOnly) {
          return /* @__PURE__ */ react.createElement(
            EmptyState/* default */.A,
            {
              header: "No items match the current search criteria",
              info: "Expecting to see software? Check back later."
            }
          );
        }
        return /* @__PURE__ */ react.createElement(
          EmptyState/* default */.A,
          {
            header: "No software available",
            info: canAddSoftware ? "Add software to your library to get started." : "Software added to this fleet's library will appear here.",
            primaryButton: canAddSoftware ? /* @__PURE__ */ react.createElement(
              Button/* default */.A,
              {
                onClick: () => router.push(
                  (0,url/* getPathWithQueryParams */.M8)(
                    paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED,
                    { fleet_id: teamId }
                  )
                )
              },
              "Add software"
            ) : void 0
          }
        );
      },
      defaultSortHeader: orderKey,
      defaultSortDirection: orderDirection,
      pageIndex: currentPage,
      defaultSearchQuery: query,
      manualSortBy: true,
      pageSize: perPage,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableNextPage: !(data == null ? void 0 : data.meta.has_next_results),
      searchable: true,
      disableSearch: controlsDisabled,
      inputPlaceHolder: "Search by name",
      onQueryChange,
      customControl: renderCustomControls,
      stackControls: true,
      renderCount: renderSoftwareCount,
      renderTableHelpText,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect
    }
  ));
};
/* harmony default export */ var SoftwareLibraryTable_SoftwareLibraryTable = (SoftwareLibraryTable);

;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SoftwareLibraryTable/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareLibrary/SoftwareLibrary.tsx

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








const SoftwareLibrary_baseClass = "software-library";
const DATA_STALE_TIME = 3e4;
const QUERY_OPTIONS = {
  keepPreviousData: true,
  staleTime: DATA_STALE_TIME
};
const SoftwareLibrary = ({
  router,
  isSoftwareEnabled,
  query,
  perPage,
  orderDirection,
  orderKey,
  selfServiceOnly,
  currentPage,
  teamId
}) => {
  const {
    data: titlesData,
    isFetching: isTitlesFetching,
    isLoading: isTitlesLoading,
    isError: isTitlesError
  } = (0,es.useQuery)(
    [
      __spreadValues({
        scope: "software-library",
        page: currentPage,
        perPage,
        query,
        orderDirection,
        orderKey,
        teamId,
        availableForInstall: true
      }, selfServiceOnly ? { selfService: true } : {})
    ],
    ({ queryKey: [queryKey] }) => software/* default */.A.getSoftwareTitles((0,lodash.omit)(queryKey, "scope")),
    __spreadProps(__spreadValues({}, QUERY_OPTIONS), {
      // Uses window.location (not a prop) — safe because this component
      // is only mounted at the /software/library route.
      enabled: teamId !== void 0 && window.location.pathname === paths/* default */.A.SOFTWARE_LIBRARY
    })
  );
  if (isTitlesLoading) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isTitlesError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
  }
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareLibrary_baseClass }, /* @__PURE__ */ react.createElement(
    SoftwareLibraryTable_SoftwareLibraryTable,
    {
      router,
      data: titlesData,
      isSoftwareEnabled,
      query,
      perPage,
      orderDirection,
      orderKey,
      selfServiceOnly,
      currentPage,
      teamId,
      isLoading: isTitlesFetching
    }
  ));
};
/* harmony default export */ var SoftwareLibrary_SoftwareLibrary = (SoftwareLibrary);

;// ./frontend/pages/SoftwarePage/SoftwareLibrary/index.ts




/***/ }),

/***/ 78833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareOS_SoftwareOS; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/services/entities/operating_systems.ts
var operating_systems = __webpack_require__(91310);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/OperatingSystems/OSTableConfig.tsx
var OSTableConfig = __webpack_require__(93588);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/EmptySoftwareTable/index.ts + 1 modules
var EmptySoftwareTable = __webpack_require__(73870);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/pages/SoftwarePage/SoftwareOS/SoftwareOSTable/SoftwareOSTable.tsx













const baseClass = "software-os-table";
const PLATFORM_FILTER_OPTIONS = [
  {
    disabled: false,
    label: "All platforms",
    value: "all"
  },
  {
    disabled: false,
    label: "macOS",
    value: "darwin"
  },
  {
    disabled: false,
    label: "Windows",
    value: "windows"
  },
  {
    disabled: false,
    label: "Linux",
    value: "linux"
  },
  {
    disabled: false,
    label: "ChromeOS",
    value: "chrome"
  },
  {
    disabled: false,
    label: "iOS",
    value: "ios"
  },
  {
    disabled: false,
    label: "iPadOS",
    value: "ipados"
  },
  {
    disabled: false,
    label: "Android",
    value: "android"
  }
];
const SoftwareOSTable = ({
  router,
  isSoftwareEnabled,
  data,
  perPage,
  orderDirection,
  orderKey,
  currentPage,
  teamId,
  isLoading,
  platform = "all"
}) => {
  var _a;
  const determineQueryParamChange = (0,react.useCallback)(
    (newTableQuery) => {
      var _a2;
      const changedEntry = Object.entries(newTableQuery).find(([key, val]) => {
        switch (key) {
          case "sortDirection":
            return val !== orderDirection;
          case "sortHeader":
            return val !== orderKey;
          case "pageIndex":
            return val !== currentPage;
          case "platform":
            return val !== platform;
          default:
            return false;
        }
      });
      return (_a2 = changedEntry == null ? void 0 : changedEntry[0]) != null ? _a2 : "";
    },
    [platform, currentPage, orderDirection, orderKey]
  );
  const generateNewQueryParams = (0,react.useCallback)(
    (newTableQuery, changedParam) => {
      return {
        fleet_id: teamId,
        order_direction: newTableQuery.sortDirection,
        order_key: newTableQuery.sortHeader,
        page: changedParam === "pageIndex" ? newTableQuery.pageIndex : 0,
        platform
      };
    },
    [teamId, platform]
  );
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const changedParam = determineQueryParamChange(newTableQuery);
      if (changedParam === "") return;
      const newRoute = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.SOFTWARE_OS,
        routeTemplate: "",
        queryParams: generateNewQueryParams(newTableQuery, changedParam)
      });
      router.replace(newRoute);
    },
    [determineQueryParamChange, generateNewQueryParams, router]
  );
  const softwareTableHeaders = (0,react.useMemo)(() => {
    if (!data) return [];
    return (0,OSTableConfig/* default */.A)(teamId, router, {
      includeName: true,
      includeVulnerabilities: true,
      includeIcon: true
    });
  }, [data, router, teamId]);
  const handleRowSelect = (row) => {
    const path = (0,url/* getPathWithQueryParams */.M8)(
      paths/* default */.A.SOFTWARE_OS_DETAILS(Number(row.original.os_version_id)),
      { fleet_id: teamId }
    );
    router.push(path);
  };
  const hasData = (data == null ? void 0 : data.os_versions) && (data == null ? void 0 : data.os_versions.length) > 0;
  const hasPlatformFilter = platform !== "all";
  const isTrulyEmpty = !hasData && !hasPlatformFilter;
  const controlsDisabled = !isSoftwareEnabled || isTrulyEmpty;
  const renderSoftwareCount = () => {
    if (!data) return null;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count: data == null ? void 0 : data.count }), !controlsDisabled && (data == null ? void 0 : data.counts_updated_at) && /* @__PURE__ */ react.createElement(
      LastUpdatedText/* default */.A,
      {
        lastUpdatedAt: data.counts_updated_at,
        customTooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time software data was ", /* @__PURE__ */ react.createElement("br", null), "updated, including vulnerabilities ", /* @__PURE__ */ react.createElement("br", null), "and host counts.")
      }
    ));
  };
  const renderTableHelpText = () => {
    return /* @__PURE__ */ react.createElement("div", null, "Seeing unexpected software or vulnerabilities?", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: constants/* GITHUB_NEW_ISSUE_LINK */.CO,
        text: "File an issue on GitHub",
        newTab: true
      }
    ));
  };
  const handlePlatformFilterDropdownChange = (platformSelected) => {
    router == null ? void 0 : router.replace(
      (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.SOFTWARE_OS,
        queryParams: {
          fleet_id: teamId,
          order_direction: orderDirection,
          order_key: orderKey,
          page: 0,
          platform: platformSelected == null ? void 0 : platformSelected.value
        }
      })
    );
  };
  const renderPlatformDropdown = () => {
    return /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        name: "os-platform-dropdown",
        value: platform || "all",
        className: `${baseClass}__platform-dropdown`,
        options: PLATFORM_FILTER_OPTIONS,
        onChange: handlePlatformFilterDropdownChange,
        variant: "table-filter",
        isDisabled: controlsDisabled
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: softwareTableHeaders,
      data: (_a = data == null ? void 0 : data.os_versions) != null ? _a : [],
      isLoading,
      resultsTitle: "items",
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptySoftwareTable/* default */.A,
        {
          tableName: "operating systems",
          isSoftwareDisabled: !isSoftwareEnabled,
          noSearchQuery: true
        }
      ),
      defaultSortHeader: orderKey,
      defaultSortDirection: orderDirection,
      pageIndex: currentPage,
      manualSortBy: true,
      pageSize: perPage,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      customControl: renderPlatformDropdown,
      disableNextPage: !(data == null ? void 0 : data.meta.has_next_results),
      searchable: false,
      onQueryChange,
      renderCount: renderSoftwareCount,
      renderTableHelpText,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect
    }
  ));
};
/* harmony default export */ var SoftwareOSTable_SoftwareOSTable = (SoftwareOSTable);

;// ./frontend/pages/SoftwarePage/SoftwareOS/SoftwareOSTable/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareOS/SoftwareOS.tsx

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






const SoftwareOS_baseClass = "software-os";
const SoftwareOS = ({
  router,
  isSoftwareEnabled,
  perPage,
  orderDirection,
  orderKey,
  currentPage,
  teamId,
  platform
}) => {
  const queryParams = {
    page: currentPage,
    per_page: perPage,
    order_direction: orderDirection,
    order_key: orderKey,
    platform: platform === "all" ? void 0 : platform,
    teamId,
    max_vulnerabilities: 3
  };
  const { data, isFetching, isLoading, isError } = (0,es.useQuery)(
    [
      __spreadValues({
        scope: "software-os"
      }, queryParams)
    ],
    () => (0,operating_systems/* getOSVersions */.kT)(queryParams),
    {
      keepPreviousData: true,
      staleTime: 3e4
    }
  );
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
  }
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareOS_baseClass }, /* @__PURE__ */ react.createElement(
    SoftwareOSTable_SoftwareOSTable,
    {
      router,
      data,
      isSoftwareEnabled,
      perPage,
      orderDirection,
      orderKey,
      currentPage,
      teamId,
      isLoading: isFetching,
      platform
    }
  ));
};
/* harmony default export */ var SoftwareOS_SoftwareOS = (SoftwareOS);

;// ./frontend/pages/SoftwarePage/SoftwareOS/index.ts




/***/ }),

/***/ 2221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareOSDetailsPage_SoftwareOSDetailsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/CardHeader/index.ts + 1 modules
var CardHeader = __webpack_require__(60678);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TeamsHeader/index.ts + 1 modules
var TeamsHeader = __webpack_require__(48392);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var interfaces_platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/services/entities/operating_systems.ts
var operating_systems = __webpack_require__(91310);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/DetailsNoHosts/index.ts + 1 modules
var DetailsNoHosts = __webpack_require__(49634);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/SoftwareDetailsSummary/index.ts
var SoftwareDetailsSummary = __webpack_require__(71436);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/VulnerabilitiesCell/index.ts + 1 modules
var VulnerabilitiesCell = __webpack_require__(29844);
;// ./frontend/pages/SoftwarePage/components/tables/OSKernelsTable/OSKernelsTableConfig.tsx










const generateTableConfig = ({
  teamId,
  osName,
  osVersion
}) => {
  const tableHeaders = [
    {
      title: "Version",
      Header: "Version",
      disableSortBy: true,
      accessor: "version",
      Cell: (cellProps) => {
        if (!cellProps.cell.value) {
          return /* @__PURE__ */ react.createElement(TextCell/* default */.A, null);
        }
        const { id } = cellProps.row.original;
        const softwareVersionDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_VERSION_DETAILS(id.toString()),
          { fleet_id: teamId }
        );
        return /* @__PURE__ */ react.createElement(
          LinkCell/* default */.A,
          {
            className: "name-link",
            path: softwareVersionDetailsPath,
            value: cellProps.cell.value
          }
        );
      }
    },
    {
      title: "Vulnerabilities",
      Header: "Vulnerabilities",
      disableSortBy: true,
      accessor: "vulnerabilities",
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(VulnerabilitiesCell/* default */.A, { vulnerabilities: cellProps.cell.value });
      }
    },
    {
      title: "Hosts",
      Header: () => {
        const titleWithToolTip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Linux hosts may have multiple kernels", /* @__PURE__ */ react.createElement("br", null), " installed. Containers do not have their", /* @__PURE__ */ react.createElement("br", null), " own kernel."),
            className: "status-header"
          },
          "Hosts"
        );
        return /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: titleWithToolTip, disableSortBy: true });
      },
      disableSortBy: true,
      accessor: "hosts_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "",
      Header: "",
      accessor: "linkToFilteredHosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(react.Fragment, null, cellProps.row.original && /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              software_version_id: cellProps.row.original.id,
              fleet_id: teamId,
              os_name: osName,
              os_version: osVersion
            },
            className: "software-link",
            rowHover: true
          }
        ));
      }
    }
  ];
  return tableHeaders;
};
/* harmony default export */ var OSKernelsTableConfig = (generateTableConfig);

;// ./frontend/pages/SoftwarePage/components/tables/OSKernelsTable/OSKernelsTable.tsx











const baseClass = "os-kernels-table";
const NoKernelsDetected = () => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "No kernels detected",
      info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Expecting to see kernels?", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: constants/* GITHUB_NEW_ISSUE_LINK */.CO,
          text: "File an issue on GitHub",
          newTab: true
        }
      ))
    }
  );
};
const OSKernelsTable = ({
  osName,
  osVersion,
  data,
  isLoading,
  className,
  router,
  teamIdForApi
}) => {
  const classNames = classnames_default()(baseClass, className);
  const handleRowSelect = (row) => {
    if (row.original.cve) {
      const cveName = row.original.cve.toString();
      const softwareVulnerabilityDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
        paths/* default */.A.SOFTWARE_VULNERABILITY_DETAILS(cveName),
        {
          fleet_id: teamIdForApi
        }
      );
      router.push(softwareVulnerabilityDetailsPath);
    }
  };
  const tableHeaders = OSKernelsTableConfig({
    teamId: teamIdForApi,
    osName,
    osVersion
  });
  const rendersOsKernelsVersionCount = () => /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count: data == null ? void 0 : data.length });
  return /* @__PURE__ */ react.createElement("div", { className: classNames }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data,
      defaultSortHeader: "hosts_count",
      emptyComponent: NoKernelsDetected,
      isLoading,
      isClientSidePagination: true,
      isClientSideFilter: true,
      pageSize: 20,
      resultsTitle: "items",
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect,
      disableTableHeader: data.length === 0,
      renderCount: rendersOsKernelsVersionCount
    }
  ));
};
/* harmony default export */ var OSKernelsTable_OSKernelsTable = (OSKernelsTable);

;// ./frontend/pages/SoftwarePage/components/tables/OSKernelsTable/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/SoftwareVulnerabilitiesTable/index.ts
var SoftwareVulnerabilitiesTable = __webpack_require__(82296);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/SoftwareVulnerabilitiesTable/SoftwareVulnerabilitiesTable.tsx + 1 modules
var SoftwareVulnerabilitiesTable_SoftwareVulnerabilitiesTable = __webpack_require__(56884);
;// ./frontend/pages/SoftwarePage/SoftwareOSDetailsPage/SoftwareOSDetailsPage.tsx

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



















const SoftwareOSDetailsPage_baseClass = "software-os-details-page";
const SummaryCard = ({
  osVersion,
  countsUpdatedAt,
  teamIdForApi
}) => /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${SoftwareOSDetailsPage_baseClass}__summary-section` }, /* @__PURE__ */ react.createElement(
  SoftwareDetailsSummary/* default */.A,
  {
    displayName: osVersion.name,
    hostCount: osVersion.hosts_count,
    countsUpdatedAt,
    queryParams: {
      os_name: osVersion.name_only,
      os_version: osVersion.version,
      fleet_id: teamIdForApi
    },
    name: osVersion.platform,
    isOperatingSystem: true
  }
));
const VulnerabilitiesCard = ({
  osVersion,
  isLoading,
  router,
  teamIdForApi
}) => {
  const supportsVulns = interfaces_platform/* VULN_SUPPORTED_PLATFORMS */.qE.includes(osVersion.platform) || (0,interfaces_platform/* isLinuxLike */.eX)(osVersion.platform);
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${SoftwareOSDetailsPage_baseClass}__vulnerabilities-section` }, /* @__PURE__ */ react.createElement(CardHeader/* default */.A, { header: "Vulnerabilities" }), supportsVulns ? /* @__PURE__ */ react.createElement(
    SoftwareVulnerabilitiesTable/* default */.A,
    {
      data: osVersion.vulnerabilities,
      itemName: "version",
      isLoading,
      router,
      teamIdForApi
    }
  ) : /* @__PURE__ */ react.createElement(
    SoftwareVulnerabilitiesTable_SoftwareVulnerabilitiesTable/* VulnsNotSupported */.s,
    {
      platformText: constants/* PLATFORM_DISPLAY_NAMES */.uc[osVersion.platform] || osVersion.platform
    }
  ));
};
const KernelsCard = ({
  osVersion,
  isLoading,
  router,
  teamIdForApi
}) => /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${SoftwareOSDetailsPage_baseClass}__summary-section` }, /* @__PURE__ */ react.createElement(CardHeader/* default */.A, { header: "Kernels" }), /* @__PURE__ */ react.createElement(
  OSKernelsTable_OSKernelsTable,
  {
    osName: osVersion.name_only,
    osVersion: osVersion.version,
    data: osVersion.kernels,
    isLoading,
    router,
    teamIdForApi
  }
));
const SoftwareOSDetailsPage = ({
  routeParams,
  router,
  location
}) => {
  const { isPremiumTier, isOnGlobalTeam, config } = (0,react.useContext)(app/* AppContext */.BR);
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const osVersionIdFromURL = parseInt(routeParams.id, 10);
  const {
    currentTeamId,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true
  });
  const [maxVulnerabilities, setMaxVulnerabilities] = (0,react.useState)(0);
  const {
    data: { os_version: osVersionDetails, counts_updated_at } = {},
    isLoading,
    isError: isOsVersionError
  } = (0,es.useQuery)(
    [
      {
        scope: "osVersionDetails",
        os_version_id: osVersionIdFromURL,
        teamId: teamIdForApi,
        max_vulnerabilities: maxVulnerabilities
      }
    ],
    ({ queryKey }) => operating_systems/* default */.Ay.getOSVersion(queryKey[0]),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      enabled: !!osVersionIdFromURL,
      select: (data) => ({
        os_version: data.os_version,
        counts_updated_at: data.counts_updated_at
      }),
      onError: (error) => {
        if (!(0,errors/* ignoreAxiosError */.j8)(error, [403, 404])) {
          handlePageError(error);
        }
      },
      onSuccess: (data) => {
        const {
          os_version: { platform, vulnerabilities_count }
        } = data;
        if (!(0,interfaces_platform/* isLinuxLike */.eX)(platform) && vulnerabilities_count && vulnerabilities_count > 0 && maxVulnerabilities === 0) {
          setMaxVulnerabilities(void 0);
        }
      }
    })
  );
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      handleTeamChange(teamId);
    },
    [handleTeamChange]
  );
  const renderContent = () => {
    var _a;
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (!osVersionDetails && !isOsVersionError) {
      return null;
    }
    const isLinuxPlatform = (0,interfaces_platform/* isLinuxLike */.eX)((osVersionDetails == null ? void 0 : osVersionDetails.platform) || "");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, isPremiumTier && !((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo) && /* @__PURE__ */ react.createElement(
      TeamsHeader/* default */.A,
      {
        isOnGlobalTeam,
        currentTeamId,
        userTeams,
        onTeamChange
      }
    ), isOsVersionError || !osVersionDetails ? /* @__PURE__ */ react.createElement(
      DetailsNoHosts/* default */.A,
      {
        header: "OS not detected",
        details: "No hosts have this OS installed."
      }
    ) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      SummaryCard,
      {
        osVersion: osVersionDetails,
        countsUpdatedAt: counts_updated_at,
        teamIdForApi
      }
    ), !isLinuxPlatform && /* @__PURE__ */ react.createElement(
      VulnerabilitiesCard,
      {
        osVersion: osVersionDetails,
        isLoading,
        router,
        teamIdForApi
      }
    ), isLinuxPlatform && /* @__PURE__ */ react.createElement(
      KernelsCard,
      {
        osVersion: osVersionDetails,
        isLoading,
        router,
        teamIdForApi
      }
    )));
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: SoftwareOSDetailsPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent()));
};
/* harmony default export */ var SoftwareOSDetailsPage_SoftwareOSDetailsPage = (SoftwareOSDetailsPage);

;// ./frontend/pages/SoftwarePage/SoftwareOSDetailsPage/index.ts




/***/ }),

/***/ 79244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ EDIT_SOFTWARE_ERROR_PREFIX; },
/* harmony export */   u: function() { return /* binding */ getErrorMessage; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53110);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var interfaces_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12755);
/* harmony import */ var pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30104);
/* harmony import */ var pages_SoftwarePage_SoftwareAddPage_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54184);






const EDIT_SOFTWARE_ERROR_PREFIX = "Couldn't edit software.";
const DEFAULT_ERROR_MESSAGE = `${EDIT_SOFTWARE_ERROR_PREFIX} Please try again.`;
const getErrorMessage = (err, software) => {
  var _a, _b;
  const isTimeout = (0,axios__WEBPACK_IMPORTED_MODULE_0__/* .isAxiosError */ .F0)(err) && (((_a = err.response) == null ? void 0 : _a.status) === 504 || ((_b = err.response) == null ? void 0 : _b.status) === 408);
  const reason = (0,interfaces_errors__WEBPACK_IMPORTED_MODULE_2__/* .getErrorReason */ .F3)(err);
  if (isTimeout) {
    return `${EDIT_SOFTWARE_ERROR_PREFIX} Request timeout. Please make sure your server and load balancer timeout is long enough.`;
  } else if (reason.includes("selected package is")) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Couldn't edit", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, (0,pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getDisplayedSoftwareName */ .Yd)(software.name, software.display_name)), ".", " ", reason);
  } else if (reason.includes("Secret variable")) {
    return (0,pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_3__/* .generateSecretErrMsg */ .C3)(err).replace("Couldn't add", "Couldn't edit");
  } else if (reason.includes("some or all of the categories provided")) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Couldn't edit", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, (0,pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getDisplayedSoftwareName */ .Yd)(software.name, software.display_name)), ".", " ", "Some or all of the categories provided were not found. Please refresh the page and try again.");
  }
  if (!reason) {
    return DEFAULT_ERROR_MESSAGE;
  }
  const withoutLeadingVerb = reason.replace(/^Couldn't [^.]*\.\s*/, "");
  return withoutLeadingVerb ? `${EDIT_SOFTWARE_ERROR_PREFIX} ${(0,pages_SoftwarePage_SoftwareAddPage_helpers__WEBPACK_IMPORTED_MODULE_4__/* .ensurePeriod */ .U_)(withoutLeadingVerb)}` : DEFAULT_ERROR_MESSAGE;
};


/***/ }),

/***/ 95576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareTitleDetailsPage_SoftwareTitleDetailsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TeamsHeader/index.ts + 1 modules
var TeamsHeader = __webpack_require__(48392);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var interfaces_software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/router/url_prefix.ts
var url_prefix = __webpack_require__(67409);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/LibraryItemAccordion/helpers.ts

const deriveAccordionRowState = ({
  rowVersion,
  activeVersion,
  pinnedVersion
}) => {
  const isActive = !!activeVersion && rowVersion === activeVersion;
  if (!isActive) return { isActive: false };
  if (!pinnedVersion) return { isActive: true, badgeState: "latest" };
  if (pinnedVersion.startsWith("^")) {
    return { isActive: true, badgeState: "majorVersion" };
  }
  return { isActive: true, badgeState: "pinned" };
};

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/helpers.ts

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





const canDownloadInstallerRow = (rowIsActive, hasInstallerReadPermission) => rowIsActive && hasInstallerReadPermission;
const resolveDownloadTarget = (clicked, fallback) => {
  var _a;
  return (_a = clicked != null ? clicked : fallback) != null ? _a : null;
};
const buildInstallerDownloadUrl = (softwareTitleId, token, origin = __webpack_require__.g.window.location.origin) => `${origin}${url_prefix/* default */.A}/api${endpoints/* default */.A.SOFTWARE_PACKAGE_TOKEN(
  softwareTitleId
)}/${token}`;
const buildLibraryVersionRows = ({
  fleetMaintainedVersions,
  activeVersion,
  pinnedVersion,
  addedTimestamp
}) => {
  if (fleetMaintainedVersions == null ? void 0 : fleetMaintainedVersions.length) {
    return fleetMaintainedVersions.map((v) => __spreadValues(__spreadValues({}, v), deriveAccordionRowState({
      rowVersion: v.version,
      activeVersion,
      pinnedVersion
    })));
  }
  return [
    {
      id: -1,
      version: activeVersion != null ? activeVersion : "",
      uploaded_at: addedTimestamp,
      isActive: true
    }
  ];
};
const getInstallerCardInfo = (softwareTitle) => {
  const installerData = softwareTitle.software_package ? softwareTitle.software_package : softwareTitle.app_store_app;
  const isPackage = (0,interfaces_software/* isSoftwarePackage */.Az)(installerData);
  return {
    softwareTitleName: softwareTitle.name,
    softwareDisplayName: (0,helpers/* getDisplayedSoftwareName */.Yd)(
      softwareTitle.name,
      softwareTitle.display_name
    ),
    softwareInstaller: installerData,
    name: isPackage && installerData.name || softwareTitle.name,
    version: (isPackage ? installerData.version : installerData.latest_version) || null,
    source: softwareTitle.source,
    iconUrl: softwareTitle.icon_url,
    displayName: softwareTitle.display_name,
    addedTimestamp: isPackage ? installerData.uploaded_at : installerData.created_at,
    status: isPackage ? (0,interfaces_software/* aggregateInstallStatusCounts */.BY)(installerData.status) : installerData.status,
    isSelfService: installerData.self_service,
    isScriptPackage: interfaces_software/* SCRIPT_PACKAGE_SOURCES */.i0.includes(softwareTitle.source) || false,
    autoUpdateEnabled: softwareTitle.auto_update_enabled,
    autoUpdateStartTime: softwareTitle.auto_update_window_start,
    autoUpdateEndTime: softwareTitle.auto_update_window_end
  };
};

// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
;// ./frontend/hooks/useSoftwareInstallerMeta.ts









const useSoftwareInstaller = (softwareTitle) => {
  const appContext = (0,react.useContext)(app/* AppContext */.BR);
  const { gitOpsModeEnabled, repoURL } = (0,useGitOpsMode/* default */.A)("software");
  return (0,react.useMemo)(() => {
    if (!softwareTitle.software_package && !softwareTitle.app_store_app) {
      return void 0;
    }
    const cardInfo = getInstallerCardInfo(softwareTitle);
    const { softwareInstaller, source } = cardInfo;
    const isIosOrIpadosApp = (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(source);
    const installerType = (0,interfaces_software/* isSoftwarePackage */.Az)(softwareInstaller) ? "package" : "app-store";
    const isAndroidPlayStoreApp = "platform" in softwareInstaller && (0,platform/* isAndroid */.m0)(softwareInstaller.platform);
    const isAndroidPlayStoreWebApp = isAndroidPlayStoreApp && "app_store_id" in softwareInstaller ? (0,helpers/* isAndroidWebApp */.VI)(softwareInstaller.app_store_id) : false;
    const isFleetMaintainedApp = "fleet_maintained_app_id" in softwareInstaller && !!softwareInstaller.fleet_maintained_app_id;
    const isLatestFmaVersion = isFleetMaintainedApp && "fleet_maintained_versions" in softwareInstaller && !!softwareInstaller.fleet_maintained_versions && softwareInstaller.fleet_maintained_versions.every(
      (fma) => {
        var _a, _b;
        return (
          // Verify that the installer version is not older than any known
          // Fleet‑maintained version by requiring compareVersions to return
          // 0 (equal) or 1 (greater) for every entry.
          (0,utilities_helpers/* compareVersions */.Zy)((_a = softwareInstaller.version) != null ? _a : "", (_b = fma.version) != null ? _b : "") >= 0
        );
      }
    );
    const fmaVersions = isFleetMaintainedApp && "fleet_maintained_versions" in softwareInstaller ? softwareInstaller.fleet_maintained_versions : [];
    const isCustomPackage = installerType === "package" && !isFleetMaintainedApp;
    const sha256 = "hash_sha256" in softwareInstaller && softwareInstaller.hash_sha256 || void 0;
    const androidPlayStoreId = isAndroidPlayStoreApp && "app_store_id" in softwareInstaller ? softwareInstaller == null ? void 0 : softwareInstaller.app_store_id : void 0;
    const {
      automatic_install_policies: automaticInstallPolicies
    } = softwareInstaller;
    const patchPolicy = "patch_policy" in softwareInstaller ? softwareInstaller.patch_policy : void 0;
    const {
      isGlobalAdmin,
      isGlobalMaintainer,
      isTeamAdmin,
      isTeamMaintainer
    } = appContext;
    const canManageSoftware = !!(isGlobalAdmin || isGlobalMaintainer || isTeamAdmin || isTeamMaintainer);
    return {
      cardInfo,
      meta: {
        installerType,
        isAndroidPlayStoreApp,
        isAndroidPlayStoreWebApp,
        isFleetMaintainedApp,
        isLatestFmaVersion,
        fmaVersions,
        isCustomPackage,
        isIosOrIpadosApp,
        sha256,
        androidPlayStoreId,
        patchPolicy,
        automaticInstallPolicies,
        gitOpsModeEnabled,
        repoURL,
        canManageSoftware,
        softwareInstaller
      }
    };
  }, [softwareTitle, appContext, gitOpsModeEnabled, repoURL]);
};

// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var entities_software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/permissions/permissions.ts
var permissions = __webpack_require__(95681);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/DetailsNoHosts/index.ts + 1 modules
var DetailsNoHosts = __webpack_require__(49634);
// EXTERNAL MODULE: ./frontend/components/FileProgressModal/index.ts + 1 modules
var FileProgressModal = __webpack_require__(70699);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/hooks/useBlockNavigation.ts
var useBlockNavigation = __webpack_require__(63898);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/PackageForm/index.ts + 15 modules
var PackageForm = __webpack_require__(62190);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/modals/CategoriesEndUserExperienceModal/index.ts
var CategoriesEndUserExperienceModal = __webpack_require__(72753);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareCustomPackage/helpers.tsx
var SoftwareCustomPackage_helpers = __webpack_require__(30415);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/utilities/file/fileUtils.tsx
var fileUtils = __webpack_require__(9106);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/AddPackageModal/helpers.ts


const getFileTypeRestriction = (existingPackageName) => {
  const extension = (0,fileUtils/* getExtensionFromFileName */.bv)(existingPackageName);
  if (!extension) return null;
  const platform = fileUtils/* FILE_EXTENSIONS_TO_PLATFORM_DISPLAY_NAME */.HZ[extension];
  if (!platform) return null;
  const accept = extension === "tar.gz" ? "application/gzip,.tgz" : `.${extension}`;
  return {
    accept,
    label: `${platform} (.${extension})`
  };
};

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/AddPackageModal/AddPackageModal.tsx

var AddPackageModal_defProp = Object.defineProperty;
var AddPackageModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AddPackageModal_hasOwnProp = Object.prototype.hasOwnProperty;
var AddPackageModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var AddPackageModal_defNormalProp = (obj, key, value) => key in obj ? AddPackageModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AddPackageModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AddPackageModal_hasOwnProp.call(b, prop))
      AddPackageModal_defNormalProp(a, prop, b[prop]);
  if (AddPackageModal_getOwnPropSymbols)
    for (var prop of AddPackageModal_getOwnPropSymbols(b)) {
      if (AddPackageModal_propIsEnum.call(b, prop))
        AddPackageModal_defNormalProp(a, prop, b[prop]);
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















const baseClass = "add-package-modal";
const AddPackageModal = ({
  softwareTitleId,
  softwareTitleName,
  teamId,
  existingPackageName,
  onExit,
  onSuccess
}) => {
  const queryClient = (0,es.useQueryClient)();
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const restriction = getFileTypeRestriction(existingPackageName);
  const [uploadProgress, setUploadProgress] = (0,react.useState)(0);
  const [uploadDetails, setUploadDetails] = (0,react.useState)(null);
  const [
    showPreviewEndUserExperience,
    setShowPreviewEndUserExperience
  ] = (0,react.useState)(false);
  const [
    isIpadOrIphoneSoftwareSource,
    setIsIpadOrIphoneSoftwareSource
  ] = (0,react.useState)(false);
  const { data: labels } = (0,es.useQuery)(
    ["custom_labels"],
    () => entities_labels/* default */.Ay.summary(teamId).then((res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)),
    AddPackageModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  (0,useBlockNavigation/* default */.A)(!!uploadDetails);
  const onClickPreviewEndUserExperience = (isIosOrIpadosApp = false) => {
    setShowPreviewEndUserExperience(!showPreviewEndUserExperience);
    setIsIpadOrIphoneSoftwareSource(isIosOrIpadosApp);
  };
  const onSubmit = (formData) => __async(null, null, function* () {
    if (!formData.software) {
      ToastNotification/* notify */.me.error("Couldn't add. Please refresh the page and try again.");
      return;
    }
    setUploadDetails((0,fileUtils/* getFileDetails */.P$)(formData.software));
    try {
      yield entities_software/* default */.A.addSoftwarePackage({
        data: formData,
        teamId,
        softwareTitleId,
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.progress || 0;
          setUploadProgress(Math.max(progress - 0.03, 0.01));
        }
      });
      if (!gitOpsModeEnabled) {
        ToastNotification/* notify */.me.success(
          /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully added new ", /* @__PURE__ */ react.createElement("b", null, formData.software.name), " package.")
        );
      }
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-titles" }]
      });
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-library" }]
      });
      onSuccess();
    } catch (e) {
      ToastNotification/* notify */.me.error((0,SoftwareCustomPackage_helpers/* getErrorMessage */.u)(e, softwareTitleName), { response: e });
    }
    setUploadDetails(null);
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: baseClass,
      title: "Add package",
      onExit,
      width: "large"
    },
    /* @__PURE__ */ react.createElement(
      PackageForm/* default */.A,
      {
        labels: labels || [],
        className: `${baseClass}__package-form`,
        onCancel: onExit,
        onSubmit,
        onClickPreviewEndUserExperience,
        multiPackageContext: true,
        restrictedFileAccept: restriction == null ? void 0 : restriction.accept,
        restrictedFileTypeLabel: restriction == null ? void 0 : restriction.label,
        initialTargetType: "Custom"
      }
    )
  ), uploadDetails && /* @__PURE__ */ react.createElement(
    FileProgressModal/* default */.A,
    {
      fileDetails: uploadDetails,
      fileProgress: uploadProgress
    }
  ), showPreviewEndUserExperience && /* @__PURE__ */ react.createElement(
    CategoriesEndUserExperienceModal/* default */.A,
    {
      onCancel: onClickPreviewEndUserExperience,
      teamId,
      isIosOrIpadosApp: isIpadOrIphoneSoftwareSource
    }
  ));
};
/* harmony default export */ var AddPackageModal_AddPackageModal = (AddPackageModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/AddPackageModal/index.ts



// EXTERNAL MODULE: ./frontend/components/InfoBanner/index.ts
var InfoBanner = __webpack_require__(38021);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/DeleteSoftwareModal/DeleteSoftwareModal.tsx

var DeleteSoftwareModal_async = (__this, __arguments, generator) => {
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







const DeleteSoftwareModal_baseClass = "delete-software-modal";
const DELETE_SW_USED_BY_PATCH_POLICY_ERROR_MSG = "Couldn't delete. This software has a patch policy. Please remove the patch policy and try again.";
const DELETE_SW_USED_BY_POLICY_ERROR_MSG = "Couldn't delete. Policy automation uses this software. Please disable policy automation for this software and try again.";
const DELETE_SW_INSTALLED_DURING_SETUP_ERROR_MSG = /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't delete. This software is installed during new host setup. Please remove software in ", /* @__PURE__ */ react.createElement("strong", null, "Controls > Setup experience"), " ", "and try again.");
const getPlatformMessage = (isAppStoreApp, isAndroidApp) => {
  if (isAndroidApp) {
    return /* @__PURE__ */ react.createElement("p", null, "Software ", /* @__PURE__ */ react.createElement("strong", null, "will be uninstalled"), " from hosts.");
  }
  if (isAppStoreApp) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Software ", /* @__PURE__ */ react.createElement("strong", null, "won't be uninstalled"), " from hosts."), /* @__PURE__ */ react.createElement("p", null, "Pending or already started installs and uninstalls won't be canceled, and the results won't appear in Fleet."));
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Software ", /* @__PURE__ */ react.createElement("strong", null, "won't be uninstalled"), " from hosts."), /* @__PURE__ */ react.createElement("p", null, "Pending installs and uninstalls will be canceled. If they have already started, they won' be canceled, and the results won't appear in Fleet."));
};
const DeleteSoftwareModal = ({
  softwareId,
  teamId,
  installerId,
  onExit,
  onSuccess,
  gitOpsModeEnabled,
  isAppStoreApp = false,
  isAndroidApp = false,
  canActivateMultiplePackages = false
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDeleteSoftware = (0,react.useCallback)(() => DeleteSoftwareModal_async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield entities_software/* default */.A.deleteSoftwareInstaller(
        softwareId,
        teamId,
        installerId
      );
      ToastNotification/* notify */.me.success("Successfully deleted software.");
      onSuccess();
    } catch (error) {
      const reason = (0,errors/* getErrorReason */.F3)(error);
      if (reason.includes("This software has a patch policy")) {
        ToastNotification/* notify */.me.error(DELETE_SW_USED_BY_PATCH_POLICY_ERROR_MSG, {
          response: error
        });
      } else if (reason.includes("Policy automation uses this software")) {
        ToastNotification/* notify */.me.error(DELETE_SW_USED_BY_POLICY_ERROR_MSG, { response: error });
      } else if (reason.includes("This software is installed during")) {
        ToastNotification/* notify */.me.error(DELETE_SW_INSTALLED_DURING_SETUP_ERROR_MSG, {
          response: error
        });
      } else {
        ToastNotification/* notify */.me.error("Couldn't delete. Please try again.", {
          response: error
        });
      }
    }
    setIsDeleting(false);
    onExit();
  }), [softwareId, teamId, installerId, onSuccess, onExit]);
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteSoftwareModal_baseClass,
      title: canActivateMultiplePackages ? "Delete package" : "Delete software",
      onExit,
      isContentDisabled: isDeleting
    },
    gitOpsModeEnabled && /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { className: `${DeleteSoftwareModal_baseClass}__gitops-warning` }, "You are currently in GitOps mode. If the package is defined in GitOps, it will reappear when GitOps runs."),
    getPlatformMessage(isAppStoreApp, isAndroidApp),
    !canActivateMultiplePackages && /* @__PURE__ */ react.createElement("p", null, "Custom icon and display name will be deleted."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "alert",
        onClick: onDeleteSoftware,
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel"))
  );
};
/* harmony default export */ var DeleteSoftwareModal_DeleteSoftwareModal = (DeleteSoftwareModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/DeleteSoftwareModal/index.ts



// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareVppForm/index.ts + 2 modules
var SoftwareVppForm = __webpack_require__(26783);
// EXTERNAL MODULE: ./frontend/utilities/deep_difference/index.ts
var deep_difference = __webpack_require__(65273);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/ConfirmSaveChangesModal/ConfirmSaveChangesModal.tsx




const ConfirmSaveChangesModal_baseClass = "save-changes-modal";
const ConfirmSaveChangesModal = ({
  onSaveChanges,
  softwareInstallerName,
  installerType,
  onClose,
  isLoading
}) => {
  const warningText = installerType === "package" ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "The changes you are making will cancel any pending installs and uninstalls", softwareInstallerName ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, " ", softwareInstallerName)) : "", "."), /* @__PURE__ */ react.createElement("p", null, "Installs or uninstalls currently running on a host will still complete, but results won't appear in Fleet."), /* @__PURE__ */ react.createElement("p", null, "You cannot undo this action.")) : /* @__PURE__ */ react.createElement("p", null, "When targets change, pending installs will still complete.");
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Save changes?", onExit: onClose }, /* @__PURE__ */ react.createElement("form", { className: `${ConfirmSaveChangesModal_baseClass}__form` }, warningText, /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "button",
      onClick: onSaveChanges,
      className: "save-loading",
      isLoading
    },
    "Save"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClose, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var ConfirmSaveChangesModal_ConfirmSaveChangesModal = (ConfirmSaveChangesModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/ConfirmSaveChangesModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditSoftwareModal/helpers.tsx
var EditSoftwareModal_helpers = __webpack_require__(79244);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditSoftwareModal/EditSoftwareModal.tsx

var EditSoftwareModal_defProp = Object.defineProperty;
var EditSoftwareModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditSoftwareModal_hasOwnProp = Object.prototype.hasOwnProperty;
var EditSoftwareModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditSoftwareModal_defNormalProp = (obj, key, value) => key in obj ? EditSoftwareModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditSoftwareModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditSoftwareModal_hasOwnProp.call(b, prop))
      EditSoftwareModal_defNormalProp(a, prop, b[prop]);
  if (EditSoftwareModal_getOwnPropSymbols)
    for (var prop of EditSoftwareModal_getOwnPropSymbols(b)) {
      if (EditSoftwareModal_propIsEnum.call(b, prop))
        EditSoftwareModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditSoftwareModal_async = (__this, __arguments, generator) => {
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



















const EditSoftwareModal_baseClass = "edit-software-modal";
const EditSoftwareModal = ({
  softwareId,
  teamId,
  installerId,
  softwareInstaller,
  onExit,
  refetchSoftwareTitle,
  installerType,
  isFleetMaintainedApp = false,
  isIosOrIpadosApp = false,
  name,
  displayName,
  source,
  iconUrl = void 0,
  canActivateMultiplePackages = false,
  preInstallQueryLocked = false
}) => {
  var _a, _b;
  const queryClient = (0,es.useQueryClient)();
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const isGitOpsCompatible = gitOpsModeEnabled && (isFleetMaintainedApp || canActivateMultiplePackages);
  const notifyLocksPreInstallQuery = "patch_policy" in softwareInstaller && !!((_a = softwareInstaller.patch_policy) == null ? void 0 : _a.notify_before_patching);
  const effectivePreInstallQueryLocked = preInstallQueryLocked || "patch_policy" in softwareInstaller && !!((_b = softwareInstaller.patch_policy) == null ? void 0 : _b.patch_when_closed) || notifyLocksPreInstallQuery;
  const formClassNames = classnames_default()(`${EditSoftwareModal_baseClass}__package-form`, {
    [`${EditSoftwareModal_baseClass}__package-form--disabled`]: isGitOpsCompatible
  });
  const [editSoftwareModalClasses, setEditSoftwareModalClasses] = (0,react.useState)(
    EditSoftwareModal_baseClass
  );
  const [isUpdatingSoftware, setIsUpdatingSoftware] = (0,react.useState)(false);
  const [
    showConfirmSaveChangesModal,
    setShowConfirmSaveChangesModal
  ] = (0,react.useState)(false);
  const [
    showPreviewEndUserExperienceModal,
    setShowPreviewEndUserExperienceModal
  ] = (0,react.useState)(false);
  const [
    pendingPackageUpdates,
    setPendingPackageUpdates
  ] = (0,react.useState)({
    software: null,
    installScript: "",
    selfService: false,
    automaticInstall: false,
    targetType: "",
    customTarget: "",
    labelTargets: {},
    categories: []
  });
  const [
    pendingVppUpdates,
    setPendingVppUpdates
  ] = (0,react.useState)({
    selfService: false,
    automaticInstall: false,
    targetType: "",
    customTarget: "",
    labelTargets: {},
    categories: []
  });
  const [uploadProgress, setUploadProgress] = (0,react.useState)(0);
  const [showFileProgressModal, setShowFileProgressModal] = (0,react.useState)(false);
  const { data: labels } = (0,es.useQuery)(
    ["custom_labels"],
    () => entities_labels/* default */.Ay.summary(teamId).then((res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)),
    EditSoftwareModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  (0,react.useEffect)(() => {
    setEditSoftwareModalClasses(
      classnames_default()(EditSoftwareModal_baseClass, {
        [`${EditSoftwareModal_baseClass}--hidden`]: showConfirmSaveChangesModal || showPreviewEndUserExperienceModal || !!pendingPackageUpdates.software && isUpdatingSoftware
      })
    );
  }, [
    showConfirmSaveChangesModal,
    showPreviewEndUserExperienceModal,
    pendingPackageUpdates.software,
    isUpdatingSoftware
  ]);
  (0,useBlockNavigation/* default */.A)(isUpdatingSoftware);
  (0,react.useEffect)(() => {
    let timeoutId;
    if (isUpdatingSoftware) {
      timeoutId = setTimeout(() => {
        setShowFileProgressModal(true);
      }, 3e3);
    } else {
      setShowFileProgressModal(false);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isUpdatingSoftware]);
  (0,react.useEffect)(() => {
    if (showFileProgressModal) {
      setShowConfirmSaveChangesModal(false);
    }
  }, [showFileProgressModal]);
  const toggleConfirmSaveChangesModal = () => {
    setShowConfirmSaveChangesModal(!showConfirmSaveChangesModal);
  };
  const togglePreviewEndUserExperienceModal = () => {
    setShowPreviewEndUserExperienceModal(!showPreviewEndUserExperienceModal);
  };
  const onEditPackage = (formData) => EditSoftwareModal_async(null, null, function* () {
    var _a2;
    setIsUpdatingSoftware(true);
    try {
      yield entities_software/* default */.A.editSoftwarePackage({
        data: formData,
        orignalPackage: softwareInstaller,
        softwareId,
        installerId,
        teamId,
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.progress || 0;
          setUploadProgress(Math.max(progress - 0.03, 0.01));
        },
        omitPreInstallQuery: effectivePreInstallQueryLocked
      });
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully edited ", /* @__PURE__ */ react.createElement("b", null, (_a2 = formData.software) == null ? void 0 : _a2.name), ".", formData.selfService ? " The end user can install from Mesh Desktop." : "")
      );
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-titles" }]
      });
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-library" }]
      });
      refetchSoftwareTitle();
      onExit();
    } catch (e) {
      ToastNotification/* notify */.me.error((0,EditSoftwareModal_helpers/* getErrorMessage */.u)(e, softwareInstaller), {
        response: e
      });
    }
    setIsUpdatingSoftware(false);
  });
  const isOnlySelfServiceUpdated = (updates) => {
    return Object.keys(updates).length === 1 && "selfService" in updates;
  };
  const onClickSavePackage = (formData) => {
    var _a2;
    const softwarePackage = softwareInstaller;
    const currentData = {
      software: null,
      installScript: softwarePackage.install_script || "",
      preInstallQuery: softwarePackage.pre_install_query || "",
      postInstallScript: softwarePackage.post_install_script || "",
      uninstallScript: softwarePackage.uninstall_script || "",
      selfService: softwarePackage.self_service || false,
      installType: (0,helpers/* getInstallType */.Kr)(softwarePackage),
      targetType: (0,helpers/* getTargetType */.Ag)(softwarePackage),
      customTarget: (0,helpers/* getCustomTarget */.lQ)(softwarePackage),
      labelTargets: (0,helpers/* generateSelectedLabels */.ER)(softwarePackage)
    };
    setPendingPackageUpdates(formData);
    const updates = (0,deep_difference/* default */.A)(formData, currentData);
    if (!((_a2 = formData.categories) == null ? void 0 : _a2.length)) {
      formData.categories = [""];
    }
    if (isOnlySelfServiceUpdated(updates)) {
      onEditPackage(formData);
    } else {
      setShowConfirmSaveChangesModal(true);
    }
  };
  const onEditVpp = (formData) => EditSoftwareModal_async(null, null, function* () {
    setIsUpdatingSoftware(true);
    try {
      yield entities_software/* default */.A.editAppStoreApp(softwareId, teamId, formData);
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully edited ", /* @__PURE__ */ react.createElement("b", null, softwareInstaller.name), ".", formData.selfService ? " The end user can install from Mesh Desktop." : "")
      );
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-titles" }]
      });
      queryClient.invalidateQueries({
        queryKey: [{ scope: "software-library" }]
      });
      onExit();
      refetchSoftwareTitle();
    } catch (e) {
      ToastNotification/* notify */.me.error((0,EditSoftwareModal_helpers/* getErrorMessage */.u)(e, softwareInstaller), {
        response: e
      });
    }
    setIsUpdatingSoftware(false);
  });
  const onClickSaveVpp = (formData) => EditSoftwareModal_async(null, null, function* () {
    const currentData = {
      selfService: softwareInstaller.self_service || false,
      automaticInstall: softwareInstaller.automatic_install || false,
      targetType: (0,helpers/* getTargetType */.Ag)(softwareInstaller),
      customTarget: (0,helpers/* getCustomTarget */.lQ)(softwareInstaller),
      labelTargets: (0,helpers/* generateSelectedLabels */.ER)(softwareInstaller)
    };
    setPendingVppUpdates(formData);
    const updates = (0,deep_difference/* default */.A)(formData, currentData);
    if (isOnlySelfServiceUpdated(updates)) {
      onEditVpp(formData);
    } else {
      setShowConfirmSaveChangesModal(true);
    }
  });
  const onClickConfirmChanges = () => {
    if (installerType === "package") {
      onEditPackage(pendingPackageUpdates);
    } else {
      onEditVpp(pendingVppUpdates);
    }
  };
  const renderForm = () => {
    if (installerType === "package") {
      const softwarePackage = softwareInstaller;
      return /* @__PURE__ */ react.createElement(
        PackageForm/* default */.A,
        {
          labels: labels || [],
          className: formClassNames,
          isEditingSoftware: true,
          isFleetMaintainedApp,
          onCancel: onExit,
          onSubmit: onClickSavePackage,
          onClickPreviewEndUserExperience: togglePreviewEndUserExperienceModal,
          defaultSoftware: softwareInstaller,
          defaultInstallScript: softwarePackage.install_script,
          defaultPreInstallQuery: softwarePackage.pre_install_query,
          defaultPostInstallScript: softwarePackage.post_install_script,
          defaultUninstallScript: softwarePackage.uninstall_script,
          defaultSelfService: softwarePackage.self_service,
          defaultCategories: softwarePackage.categories,
          gitopsCompatible: isGitOpsCompatible,
          teamId,
          preInstallQueryLocked: effectivePreInstallQueryLocked
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      SoftwareVppForm/* default */.A,
      {
        labels: labels || [],
        softwareVppForEdit: softwareInstaller,
        onSubmit: onClickSaveVpp,
        onCancel: onExit,
        isLoading: isUpdatingSoftware,
        onClickPreviewEndUserExperience: togglePreviewEndUserExperienceModal,
        teamId
      }
    );
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: editSoftwareModalClasses,
      title: canActivateMultiplePackages ? "Edit package" : "Edit software",
      onExit,
      width: "large"
    },
    renderForm()
  ), showConfirmSaveChangesModal && /* @__PURE__ */ react.createElement(
    ConfirmSaveChangesModal_ConfirmSaveChangesModal,
    {
      onClose: toggleConfirmSaveChangesModal,
      softwareInstallerName: softwareInstaller == null ? void 0 : softwareInstaller.name,
      installerType,
      onSaveChanges: onClickConfirmChanges,
      isLoading: isUpdatingSoftware
    }
  ), showPreviewEndUserExperienceModal && /* @__PURE__ */ react.createElement(
    CategoriesEndUserExperienceModal/* default */.A,
    {
      name,
      displayName,
      source,
      iconUrl,
      onCancel: togglePreviewEndUserExperienceModal,
      teamId,
      isIosOrIpadosApp,
      mobileVersion: "latest_version" in softwareInstaller && softwareInstaller.latest_version || softwareInstaller.version
    }
  ), !!pendingPackageUpdates.software && showFileProgressModal && /* @__PURE__ */ react.createElement(
    FileProgressModal/* default */.A,
    {
      fileDetails: (0,fileUtils/* getFileDetails */.P$)(pendingPackageUpdates.software),
      fileProgress: uploadProgress
    }
  ));
};
/* harmony default export */ var EditSoftwareModal_EditSoftwareModal = (EditSoftwareModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditSoftwareModal/index.ts



// EXTERNAL MODULE: ./frontend/components/buttons/CopyButton/index.ts + 2 modules
var CopyButton = __webpack_require__(57390);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/TruncatedTextList/index.ts + 1 modules
var TruncatedTextList = __webpack_require__(24039);
// EXTERNAL MODULE: ./frontend/components/Graphic/index.ts
var Graphic = __webpack_require__(20881);
// EXTERNAL MODULE: ./frontend/components/MDM/AndroidLatestVersionWithTooltip/index.ts + 1 modules
var AndroidLatestVersionWithTooltip = __webpack_require__(48571);
// EXTERNAL MODULE: ./frontend/hooks/useCheckTruncatedElement.ts
var useCheckTruncatedElement = __webpack_require__(16087);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareInstallerCard/InstallerDetailsWidget/InstallerDetailsWidget.tsx













const InstallerDetailsWidget_baseClass = "installer-details-widget";
const InstallerName = ({ name, disableTooltip }) => {
  const titleRef = react.useRef(null);
  const isTruncated = (0,useCheckTruncatedElement/* useCheckTruncatedElement */.K)(titleRef);
  return /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: name,
      position: "top",
      underline: false,
      disableTooltip: disableTooltip || !isTruncated,
      showArrow: true
    },
    /* @__PURE__ */ react.createElement("div", { ref: titleRef, className: `${InstallerDetailsWidget_baseClass}__title` }, name)
  );
};
const renderInstallerDisplayText = (installerType, isFma, androidPlayStoreId) => {
  if (installerType === "package") {
    return isFma ? "Fleet-maintained" : "Custom package";
  }
  if (androidPlayStoreId) {
    if ((0,helpers/* isAndroidWebApp */.VI)(androidPlayStoreId)) {
      return "Web app";
    }
    return "Google Play Store";
  }
  return "App Store (VPP)";
};
const InstallerDetailsWidget = ({
  className,
  softwareName,
  installerType,
  addedTimestamp,
  version,
  isFma,
  isLatestFmaVersion = false,
  isScriptPackage,
  source,
  androidPlayStoreId,
  customDetails,
  hideInstallerType = false,
  disableTooltips = false
}) => {
  const classNames = classnames_default()(InstallerDetailsWidget_baseClass, className);
  const renderIcon = () => {
    if (installerType === "app-store") {
      if (androidPlayStoreId) {
        return /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { name: "androidPlayStore", size: "medium" });
      }
      return /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { name: "appleAppStore", size: "medium" });
    }
    if (source === "py_packages") {
      return /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-py" });
    }
    return /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-pkg" });
  };
  const renderDetails = () => {
    if (customDetails) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, customDetails);
    }
    const renderVersionChip = () => {
      if (isScriptPackage || (0,helpers/* isAndroidWebApp */.VI)(androidPlayStoreId)) {
        return null;
      }
      if (androidPlayStoreId) {
        if (disableTooltips) return /* @__PURE__ */ react.createElement("span", null, "Latest");
        return /* @__PURE__ */ react.createElement(
          AndroidLatestVersionWithTooltip/* default */.A,
          {
            androidPlayStoreId
          }
        );
      }
      if (!version) {
        return /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            disableTooltip: disableTooltips,
            tipContent: /* @__PURE__ */ react.createElement("span", null, "Mesh couldn't read the version from ", softwareName, ".", installerType === "package" && /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement(
              CustomLink/* default */.A,
              {
                newTab: true,
                url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/read-package-version`,
                text: "Learn more",
                variant: "tooltip-link"
              }
            )))
          },
          /* @__PURE__ */ react.createElement("span", null, "Version (unknown)")
        );
      }
      if (isFma) {
        return /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            disableTooltip: disableTooltips,
            tipContent: /* @__PURE__ */ react.createElement("span", null, "You can change the version in ", /* @__PURE__ */ react.createElement("strong", null, "Actions > Edit"), " ", "software.")
          },
          /* @__PURE__ */ react.createElement("span", null, version, " ", isLatestFmaVersion ? "(latest)" : "")
        );
      }
      if (installerType === "app-store") {
        return /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            disableTooltip: disableTooltips,
            tipContent: /* @__PURE__ */ react.createElement("span", null, "Updated every hour.")
          },
          /* @__PURE__ */ react.createElement("span", null, version)
        );
      }
      return /* @__PURE__ */ react.createElement("span", null, version);
    };
    const renderTimeStampChip = () => addedTimestamp ? /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        disableTooltip: disableTooltips,
        tipContent: (0,utilities_helpers/* internationalTimeFormat */.Fs)(new Date(addedTimestamp)),
        underline: false
      },
      (0,date_format/* addedFromNow */.PI)(addedTimestamp)
    ) : null;
    const parts = [];
    if (!hideInstallerType) {
      parts.push(
        renderInstallerDisplayText(installerType, isFma, androidPlayStoreId)
      );
    }
    const versionChip = renderVersionChip();
    if (versionChip) parts.push(versionChip);
    const timeStampChip = renderTimeStampChip();
    if (timeStampChip) parts.push(timeStampChip);
    return parts.map((part, i) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ react.createElement(react.Fragment, { key: i }, i > 0 && /* @__PURE__ */ react.createElement(react.Fragment, null, " \u2022 "), part)
    ));
  };
  return /* @__PURE__ */ react.createElement("div", { className: classNames }, renderIcon(), /* @__PURE__ */ react.createElement("div", { className: `${InstallerDetailsWidget_baseClass}__info` }, /* @__PURE__ */ react.createElement(InstallerName, { name: softwareName, disableTooltip: disableTooltips }), /* @__PURE__ */ react.createElement("div", { className: `${InstallerDetailsWidget_baseClass}__details` }, renderDetails())));
};
/* harmony default export */ var InstallerDetailsWidget_InstallerDetailsWidget = (InstallerDetailsWidget);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareInstallerCard/InstallerDetailsWidget/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/LibraryItemAccordion/LibraryItemAccordion.tsx













const LibraryItemAccordion_baseClass = "library-item-accordion";
const LABEL_KIND_HEADING = {
  includeAny: "Include any",
  includeAll: "Include all",
  excludeAny: "Exclude any"
};
const ALL_HOSTS_LABEL = "All hosts";
const LibraryItemAccordion = ({
  filename,
  version,
  addedAt,
  installerType = "package",
  androidPlayStoreId,
  isFma = false,
  isLatestFmaVersion,
  isScriptPackage = false,
  source,
  isTarballPackage = false,
  isIosOrIpadosApp = false,
  isActive,
  canEditSoftware,
  badgeState,
  labels,
  labelKind = "includeAny",
  installed,
  pending,
  failed,
  installedPath,
  pendingPath,
  failedPath,
  hashSha256,
  canDownload,
  onBadgeClick,
  onLabelCountClick,
  onLabelsClick,
  onEditClick,
  onDownloadClick,
  onTrashClick,
  canActivateMultiplePackages = false,
  isSelfService = false,
  hasAutoInstallPolicy = false,
  isAndroidPlayStoreApp = false,
  onSelfServiceClick,
  onAutoInstallClick
}) => {
  var _a;
  const [expanded, setExpanded] = (0,react.useState)(false);
  const labelCount = (_a = labels == null ? void 0 : labels.length) != null ? _a : 0;
  const hasLabelScope = labelCount > 0;
  const showAllHostsBadge = isActive && !hasLabelScope;
  const canExpand = isActive;
  const isExpanded = canExpand && expanded;
  const toggleExpanded = () => {
    if (!canExpand) return;
    setExpanded((prev) => !prev);
  };
  const inactiveTooltip = /* @__PURE__ */ react.createElement(react.Fragment, null, "Select ", /* @__PURE__ */ react.createElement("strong", null, "Actions > Versions"), " and pin this version to rollback.");
  const sortedLabelNames = (labels != null ? labels : []).map((l) => l.name).sort((a, b) => a.localeCompare(b));
  const renderLabelCountTooltip = () => /* @__PURE__ */ react.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ react.createElement("strong", null, LABEL_KIND_HEADING[labelKind], ":"), /* @__PURE__ */ react.createElement("br", null), sortedLabelNames.map((name, i) => /* @__PURE__ */ react.createElement(react.Fragment, { key: name }, name, i < sortedLabelNames.length - 1 && /* @__PURE__ */ react.createElement("br", null))));
  const handleBadgeClick = (handler) => (e) => {
    e.stopPropagation();
    handler == null ? void 0 : handler();
  };
  const renderStatusBadge = (iconName, label) => {
    if (onBadgeClick) {
      return /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "subdued",
          size: "small",
          onClick: handleBadgeClick(onBadgeClick),
          className: `${LibraryItemAccordion_baseClass}__badge-button`,
          icon: iconName
        },
        /* @__PURE__ */ react.createElement("span", null, label)
      );
    }
    return /* @__PURE__ */ react.createElement(
      "span",
      {
        className: `${LibraryItemAccordion_baseClass}__badge-button ${LibraryItemAccordion_baseClass}__badge-button--static`
      },
      /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: iconName }),
      /* @__PURE__ */ react.createElement("span", null, label)
    );
  };
  const renderRowActionIcon = ({
    iconName,
    tooltipContent,
    ariaLabel,
    onClick,
    canClick = true
  }) => /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: tooltipContent,
      showArrow: true,
      underline: false,
      position: "top",
      tipOffset: 8,
      textBalanced: false
    },
    onClick && canClick ? /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        onClick: handleBadgeClick(onClick),
        className: `${LibraryItemAccordion_baseClass}__icon-button`,
        ariaLabel,
        icon: iconName
      }
    ) : /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: iconName })
  );
  const renderSelfServiceIcon = () => renderRowActionIcon({
    iconName: "user",
    tooltipContent: (0,helpers/* getSelfServiceTooltip */.F$)(
      !!isIosOrIpadosApp,
      !!isAndroidPlayStoreApp
    ),
    // Same modal opens regardless of which icon is clicked; the icon glyph
    // carries the contextual signal ("self-service is on for this package").
    ariaLabel: "Edit package",
    onClick: onSelfServiceClick,
    canClick: canEditSoftware
  });
  const renderAutoInstallIcon = () => renderRowActionIcon({
    iconName: "refresh",
    tooltipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Policy triggers install."),
    ariaLabel: "View auto-install policies",
    onClick: onAutoInstallClick
  });
  const renderHeaderBadges = () => {
    if (!isActive) return null;
    return /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__badges` }, isFma && badgeState === "latest" && renderStatusBadge("refresh", "Latest"), canActivateMultiplePackages && isSelfService && renderSelfServiceIcon(), canActivateMultiplePackages && hasAutoInstallPolicy && renderAutoInstallIcon(), badgeState === "pinned" && renderStatusBadge("pin", "Pinned"), badgeState === "majorVersion" && renderStatusBadge("pin", "Major version"), hasLabelScope && /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: renderLabelCountTooltip(),
        showArrow: true,
        underline: false,
        position: "top",
        tipOffset: 8
      },
      canEditSoftware ? /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "subdued",
          size: "small",
          onClick: handleBadgeClick(onLabelCountClick),
          className: `${LibraryItemAccordion_baseClass}__badge-button`,
          icon: "tag"
        },
        /* @__PURE__ */ react.createElement("span", null, labelCount)
      ) : /* @__PURE__ */ react.createElement(
        "span",
        {
          className: `${LibraryItemAccordion_baseClass}__badge-button ${LibraryItemAccordion_baseClass}__badge-button--static`
        },
        /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "tag" }),
        /* @__PURE__ */ react.createElement("span", null, labelCount)
      )
    ), showAllHostsBadge && (canEditSoftware ? /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        size: "small",
        onClick: handleBadgeClick(onLabelCountClick),
        className: `${LibraryItemAccordion_baseClass}__badge-button`,
        icon: "tag"
      },
      /* @__PURE__ */ react.createElement("span", null, ALL_HOSTS_LABEL)
    ) : /* @__PURE__ */ react.createElement(
      "span",
      {
        className: `${LibraryItemAccordion_baseClass}__badge-button ${LibraryItemAccordion_baseClass}__badge-button--static`
      },
      /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "tag" }),
      /* @__PURE__ */ react.createElement("span", null, ALL_HOSTS_LABEL)
    )));
  };
  const renderStatusCount = (iconName, count, label, iconTooltip, path, trailing) => /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__status-count` }, iconTooltip ? /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: iconTooltip,
      showArrow: true,
      underline: false,
      position: "top",
      tipOffset: 8,
      clickable: false
    },
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: iconName })
  ) : /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: iconName }), /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: path,
      text: `${count} ${label}`,
      className: `${LibraryItemAccordion_baseClass}__status-count-link`
    }
  ), trailing);
  const isAndroidApp = !!androidPlayStoreId;
  const installedLabel = isScriptPackage ? "ran" : "installed";
  const getStatusCountTooltip = () => {
    if (isAndroidApp) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "Latest status from the Google Play Store");
    }
    if (isTarballPackage) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "Latest status from policy automation or manual install.");
    }
    if (isIosOrIpadosApp) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "Latest status from setup experience or manual install.");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Latest status from policy automation,", /* @__PURE__ */ react.createElement("br", null), "setup experience, or manual install.");
  };
  const getInstalledIconTooltip = () => {
    if (isScriptPackage) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "The script successfully", /* @__PURE__ */ react.createElement("br", null), "ran on these hosts.");
    }
    if (isAndroidApp) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Software is installed on these hosts", /* @__PURE__ */ react.createElement("br", null), "(install script finished with exit code 0).", /* @__PURE__ */ react.createElement("br", null), "Currently, if the software is uninstalled,", /* @__PURE__ */ react.createElement("br", null), `the "Installed" status won't be updated.`);
  };
  const getPendingIconTooltip = () => {
    if (isScriptPackage) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh is running the script or will do", /* @__PURE__ */ react.createElement("br", null), "so when the host comes online.");
    }
    if (isAndroidApp) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "Software will be installed or configuration will", /* @__PURE__ */ react.createElement("br", null), "be applied the next time the host checks in.");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh is installing/uninstalling or will", /* @__PURE__ */ react.createElement("br", null), "do so when the host comes online.");
  };
  const getFailedIconTooltip = () => {
    if (isScriptPackage) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "These hosts failed to run the script.", /* @__PURE__ */ react.createElement("br", null), "Click on a host to view error(s).");
    }
    if (isAndroidApp) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "Software failed to install or configuration failed to apply.");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "These hosts failed to install/uninstall", /* @__PURE__ */ react.createElement("br", null), "software. Click on a host to view error(s).");
  };
  const installedIconTooltip = getInstalledIconTooltip();
  const pendingIconTooltip = getPendingIconTooltip();
  const failedIconTooltip = getFailedIconTooltip();
  const statusCountsTooltip = getStatusCountTooltip();
  const renderLabelsBlock = () => {
    if (!hasLabelScope) return null;
    return /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__data-row` }, /* @__PURE__ */ react.createElement("p", { className: `${LibraryItemAccordion_baseClass}__data-heading` }, LABEL_KIND_HEADING[labelKind]), /* @__PURE__ */ react.createElement(
      TruncatedTextList/* default */.A,
      {
        className: `${LibraryItemAccordion_baseClass}__data-value`,
        items: sortedLabelNames,
        onClick: canEditSoftware ? onLabelsClick : void 0
      }
    ));
  };
  const renderHashBlock = () => {
    if (!hashSha256) return null;
    return /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__data-row` }, /* @__PURE__ */ react.createElement("p", { className: `${LibraryItemAccordion_baseClass}__data-heading` }, "Hash"), /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__hash-row` }, /* @__PURE__ */ react.createElement(
      TooltipTruncatedText/* default */.A,
      {
        className: `${LibraryItemAccordion_baseClass}__hash`,
        value: hashSha256
      }
    ), /* @__PURE__ */ react.createElement(
      CopyButton/* default */.A,
      {
        copyText: hashSha256,
        variant: "subdued",
        ariaLabel: "Copy hash to clipboard"
      }
    )));
  };
  const renderTrashButtonBody = (disabled) => /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      variant: "secondary",
      disabled,
      onClick: onTrashClick,
      ariaLabel: "Delete this version",
      className: `${LibraryItemAccordion_baseClass}__trash-button`,
      icon: "trash"
    }
  );
  const isAppStore = installerType === "app-store";
  const lockedByGitOpsMode = isFma || isAppStore || canActivateMultiplePackages;
  const renderTrashButton = () => lockedByGitOpsMode ? /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "top",
      tipOffset: 8,
      entityType: "software",
      renderChildren: (gitOpsDisabled) => renderTrashButtonBody(!!gitOpsDisabled)
    }
  ) : renderTrashButtonBody(false);
  const handleHeaderKeyDown = (e) => {
    if (!canExpand) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleExpanded();
    }
  };
  const headerButton = /* @__PURE__ */ react.createElement(
    "div",
    {
      role: "button",
      className: `${LibraryItemAccordion_baseClass}__header`,
      onClick: toggleExpanded,
      onKeyDown: handleHeaderKeyDown,
      "aria-expanded": isExpanded,
      "aria-disabled": !canExpand,
      tabIndex: canExpand ? 0 : -1
    },
    /* @__PURE__ */ react.createElement(
      "span",
      {
        className: classnames_default()(`${LibraryItemAccordion_baseClass}__chevron`, {
          [`${LibraryItemAccordion_baseClass}__chevron--open`]: isExpanded
        })
      },
      /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "chevron-right", color: "ui-fleet-black-75" })
    ),
    /* @__PURE__ */ react.createElement(
      InstallerDetailsWidget_InstallerDetailsWidget,
      {
        className: `${LibraryItemAccordion_baseClass}__installer-details`,
        softwareName: filename,
        installerType,
        version,
        addedTimestamp: addedAt,
        isFma,
        isLatestFmaVersion,
        isScriptPackage,
        source,
        androidPlayStoreId,
        hideInstallerType: true,
        disableTooltips: !isActive
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__header-right` }, renderHeaderBadges())
  );
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      className: classnames_default()(LibraryItemAccordion_baseClass, {
        [`${LibraryItemAccordion_baseClass}--inactive`]: !isActive,
        [`${LibraryItemAccordion_baseClass}--expanded`]: isExpanded
      })
    },
    isActive ? headerButton : /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        className: `${LibraryItemAccordion_baseClass}__inactive-tooltip`,
        tipContent: inactiveTooltip,
        showArrow: true,
        underline: false,
        position: "top",
        tipOffset: 8,
        disableTooltip: !canEditSoftware
      },
      headerButton
    ),
    isExpanded && /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__panel` }, /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__status-column` }, /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__status-counts` }, renderStatusCount(
      "success",
      installed,
      installedLabel,
      installedIconTooltip,
      installedPath,
      /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          className: `${LibraryItemAccordion_baseClass}__status-counts-info`,
          tipContent: statusCountsTooltip,
          showArrow: true,
          underline: false,
          position: "top",
          tipOffset: 8
        },
        /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "info-outline", color: "ui-fleet-black-50" })
      )
    ), renderStatusCount(
      "pending-outline",
      pending,
      "pending",
      pendingIconTooltip,
      pendingPath
    ), renderStatusCount(
      "error",
      failed,
      "failed",
      failedIconTooltip,
      failedPath
    ))), /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__details-column` }, renderLabelsBlock(), renderHashBlock()), /* @__PURE__ */ react.createElement("div", { className: `${LibraryItemAccordion_baseClass}__actions-column` }, canEditSoftware && onEditClick && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "secondary",
        onClick: onEditClick,
        ariaLabel: "Edit software",
        className: `${LibraryItemAccordion_baseClass}__edit-button`,
        icon: "pencil"
      }
    ), canDownload && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "secondary",
        onClick: onDownloadClick,
        ariaLabel: "Download installer",
        className: `${LibraryItemAccordion_baseClass}__download-button`,
        icon: "download"
      }
    ), canEditSoftware && renderTrashButton()))
  );
};
/* harmony default export */ var LibraryItemAccordion_LibraryItemAccordion = (LibraryItemAccordion);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/LibraryItemAccordion/LibraryItemAccordionList.tsx


const LibraryItemAccordionList_baseClass = "library-item-accordion-list";
const LibraryItemAccordionList = ({
  children,
  className
}) => {
  const classes = className ? `${LibraryItemAccordionList_baseClass} ${className}` : LibraryItemAccordionList_baseClass;
  return /* @__PURE__ */ react.createElement("div", { className: classes }, children);
};
/* harmony default export */ var LibraryItemAccordion_LibraryItemAccordionList = (LibraryItemAccordionList);

// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/SoftwareInstallPolicyBadges/SoftwareInstallPolicyBadges.tsx
var SoftwareInstallPolicyBadges = __webpack_require__(77823);
;// ./frontend/components/SoftwareInstallPolicyBadges/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareInstallerCard/InstallerPoliciesTable/InstallerPoliciesTableConfig.tsx







const generateInstallerPoliciesTableConfig = ({
  teamId
}) => {
  const tableHeaders = [
    {
      accessor: "name",
      title: "Name",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        LinkCell/* default */.A,
        {
          value: cellProps.cell.value,
          tooltipTruncate: true,
          path: (0,url/* getPathWithQueryParams */.M8)(
            paths/* default */.A.POLICY_DETAILS(cellProps.row.original.id),
            {
              fleet_id: teamId
            }
          ),
          className: "w400",
          suffix: /* @__PURE__ */ react.createElement(
            SoftwareInstallPolicyBadges/* default */.A,
            {
              policyType: cellProps.row.original.type
            }
          )
        }
      )
    }
  ];
  return tableHeaders;
};
/* harmony default export */ var InstallerPoliciesTableConfig = (generateInstallerPoliciesTableConfig);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareInstallerCard/InstallerPoliciesTable/InstallerPoliciesTable.tsx






const InstallerPoliciesTable_baseClass = "installer-policies-table";
const InstallerPoliciesTable = ({
  className,
  teamId,
  isLoading = false,
  policies,
  hideCount = false
}) => {
  const classNames = classnames_default()(InstallerPoliciesTable_baseClass, className);
  const softwareStatusHeaders = InstallerPoliciesTableConfig({
    teamId
  });
  const renderInstallerPoliciesCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "policies", count: policies == null ? void 0 : policies.length });
  }, [policies == null ? void 0 : policies.length]);
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: classNames,
      isLoading,
      columnConfigs: softwareStatusHeaders,
      data: policies || [],
      renderCount: renderInstallerPoliciesCount,
      disableCount: hideCount,
      disablePagination: true,
      disableMultiRowSelect: true,
      emptyComponent: () => /* @__PURE__ */ react.createElement(react.Fragment, null),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      hideFooter: true
    }
  );
};
/* harmony default export */ var InstallerPoliciesTable_InstallerPoliciesTable = (InstallerPoliciesTable);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareInstallerCard/InstallerPoliciesTable/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/PoliciesModal/PoliciesModal.tsx





const PoliciesModal_baseClass = "policies-modal";
const PoliciesModal = ({ policies, teamId, onExit }) => {
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: PoliciesModal_baseClass, title: "Policies", onExit }, /* @__PURE__ */ react.createElement(react.Fragment, null, policies.length === 0 ? /* @__PURE__ */ react.createElement("p", { className: `${PoliciesModal_baseClass}__empty` }, "No policies are linked to this software.") : /* @__PURE__ */ react.createElement(
    InstallerPoliciesTable_InstallerPoliciesTable,
    {
      teamId,
      policies,
      hideCount: true
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit }, "Done"))));
};
/* harmony default export */ var PoliciesModal_PoliciesModal = (PoliciesModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/PoliciesModal/index.ts



// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
;// ./frontend/components/Chip/Chip.tsx





const Chip_baseClass = "chip";
const Chip = ({
  icon,
  text,
  trailingIcon,
  className,
  onClick,
  tooltip,
  tooltipTextBalanced
}) => {
  const classNames = classnames_default()(
    Chip_baseClass,
    className,
    onClick && `${Chip_baseClass}__clickable-chip`
  );
  const content = /* @__PURE__ */ react.createElement(react.Fragment, null, icon && /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: icon, size: "small", color: "ui-fleet-black-75" }), /* @__PURE__ */ react.createElement("span", { className: `${Chip_baseClass}__text` }, text), trailingIcon && /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: trailingIcon, size: "small", color: "ui-fleet-black-75" }));
  const chip = onClick ? (
    // use a button element so that the chip can be focused and clicked
    // with the keyboard
    /* @__PURE__ */ react.createElement("button", { type: "button", className: classNames, onClick }, content)
  ) : /* @__PURE__ */ react.createElement("div", { className: classNames }, content);
  if (!tooltip) {
    return chip;
  }
  return /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: tooltip,
      position: "top",
      underline: false,
      showArrow: true,
      tipOffset: 8,
      textBalanced: tooltipTextBalanced
    },
    chip
  );
};
/* harmony default export */ var Chip_Chip = (Chip);

;// ./frontend/components/Chip/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/SoftwareDetailsSummary/index.ts
var SoftwareDetailsSummary = __webpack_require__(71436);
// EXTERNAL MODULE: ./frontend/utilities/strings/stringUtils.ts
var stringUtils = __webpack_require__(18165);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySelector/index.ts + 1 modules
var SoftwareDeploySelector = __webpack_require__(66081);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareFleetMaintained/FleetMaintainedAppDetailsPage/helpers.tsx
var FleetMaintainedAppDetailsPage_helpers = __webpack_require__(99301);
// EXTERNAL MODULE: ./frontend/services/entities/team_policies.ts
var team_policies = __webpack_require__(80396);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/DeployModal/DeployModal.tsx

var DeployModal_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DeployModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DeployModal_hasOwnProp = Object.prototype.hasOwnProperty;
var DeployModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var DeployModal_defNormalProp = (obj, key, value) => key in obj ? DeployModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DeployModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DeployModal_hasOwnProp.call(b, prop))
      DeployModal_defNormalProp(a, prop, b[prop]);
  if (DeployModal_getOwnPropSymbols)
    for (var prop of DeployModal_getOwnPropSymbols(b)) {
      if (DeployModal_propIsEnum.call(b, prop))
        DeployModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var DeployModal_async = (__this, __arguments, generator) => {
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













const DeployModal_baseClass = "deploy-modal";
const DeployModal = ({
  softwareTitle,
  teamId,
  onExit,
  onSuccess
}) => {
  var _a;
  const softwarePackage = softwareTitle.software_package;
  const automaticInstallPolicies = (_a = softwarePackage == null ? void 0 : softwarePackage.automatic_install_policies) != null ? _a : [];
  const patchPolicy = softwarePackage == null ? void 0 : softwarePackage.patch_policy;
  const forceInstallPolicy = automaticInstallPolicies.find(
    (policy) => policy.type === "dynamic" && policy.name === (0,FleetMaintainedAppDetailsPage_helpers/* getFleetAppPolicyName */.fP)(softwareTitle.name)
  );
  const patchHasAutomation = !!patchPolicy && automaticInstallPolicies.some((policy) => policy.id === patchPolicy.id);
  let initialPatchOption = patchPolicy ? "manual" : "closed";
  if (patchPolicy == null ? void 0 : patchPolicy.patch_when_closed) {
    initialPatchOption = "closed";
  } else if (patchHasAutomation) {
    initialPatchOption = "force";
  }
  const initialEndUserExperience = (patchPolicy == null ? void 0 : patchPolicy.notify_before_patching) && !(patchPolicy == null ? void 0 : patchPolicy.patch_when_closed) ? "notify" : "immediate";
  const [forceInstall, setForceInstall] = (0,react.useState)(!!forceInstallPolicy);
  const [patch, setPatch] = (0,react.useState)(!!patchPolicy);
  const [patchOption, setPatchOption] = (0,react.useState)(
    initialPatchOption
  );
  const [endUserExperience, setEndUserExperience] = (0,react.useState)(
    initialEndUserExperience
  );
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const platform = (0,interfaces_software/* getInstallablePlatform */.N2)(softwareTitle.source);
  const fleetMaintainedAppId = softwarePackage == null ? void 0 : softwarePackage.fleet_maintained_app_id;
  const {
    data: fleetMaintainedApp,
    isLoading: isLoadingFleetMaintainedApp
  } = (0,es.useQuery)(
    ["fleet-maintained-app", fleetMaintainedAppId, teamId],
    () => entities_software/* default */.A.getFleetMaintainedApp(
      fleetMaintainedAppId,
      String(teamId)
    ),
    __spreadProps(DeployModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: !!fleetMaintainedAppId && !forceInstallPolicy,
      select: (res) => res.fleet_maintained_app
    })
  );
  const onSave = () => DeployModal_async(null, null, function* () {
    setIsSaving(true);
    let savedAnyChange = false;
    const patchFlags = (0,SoftwareDeploySelector/* getPatchPolicyFlags */.kl)(patchOption, endUserExperience);
    try {
      if (forceInstall !== !!forceInstallPolicy) {
        if (forceInstall) {
          if (!(fleetMaintainedApp == null ? void 0 : fleetMaintainedApp.automatic_install_query)) {
            ToastNotification/* notify */.me.error(
              "Couldn't create the Force install policy. Try again."
            );
            return;
          }
          yield team_policies/* default */.A.create({
            team_id: teamId,
            name: (0,FleetMaintainedAppDetailsPage_helpers/* getFleetAppPolicyName */.fP)(softwareTitle.name),
            description: (0,FleetMaintainedAppDetailsPage_helpers/* getFleetAppPolicyDescription */.S4)(softwareTitle.name),
            query: fleetMaintainedApp.automatic_install_query,
            platform: fleetMaintainedApp.platform,
            software_title_id: softwareTitle.id
          });
        } else if (forceInstallPolicy) {
          yield team_policies/* default */.A.destroy(teamId, [forceInstallPolicy.id]);
        }
        savedAnyChange = true;
      }
      if (patch !== !!patchPolicy) {
        if (patch) {
          yield team_policies/* default */.A.create(DeployModal_spreadValues(DeployModal_spreadValues({
            team_id: teamId,
            type: "patch",
            patch_software_title_id: softwareTitle.id
          }, patchOption !== "manual" && {
            software_title_id: softwareTitle.id
          }), patchFlags));
        } else if (patchPolicy) {
          yield team_policies/* default */.A.destroy(teamId, [patchPolicy.id]);
        }
        savedAnyChange = true;
      } else if (patch && patchPolicy && (patchOption !== initialPatchOption || endUserExperience !== initialEndUserExperience || patchHasAutomation !== (patchOption !== "manual") || patchPolicy.patch_when_closed !== patchFlags.patch_when_closed || patchPolicy.notify_before_patching !== patchFlags.notify_before_patching || patchPolicy.continuous_automations_enabled !== patchFlags.continuous_automations_enabled)) {
        yield team_policies/* default */.A.update(patchPolicy.id, DeployModal_spreadValues({
          team_id: teamId,
          software_title_id: patchOption === "manual" ? null : softwareTitle.id
        }, patchFlags));
        savedAnyChange = true;
      }
      if (savedAnyChange) {
        ToastNotification/* notify */.me.success("Successfully updated deploy options.");
      }
      onSuccess();
      onExit();
    } catch (error) {
      if (savedAnyChange) {
        ToastNotification/* notify */.me.error(
          "Some changes were saved, but others couldn't be. Try again.",
          { response: error }
        );
        onSuccess();
        onExit();
      } else {
        ToastNotification/* notify */.me.error((0,errors/* getErrorReason */.F3)(error), { response: error });
      }
    } finally {
      setIsSaving(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeployModal_baseClass,
      title: "Deploy",
      onExit,
      isContentDisabled: isSaving
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        entityType: "software",
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          SoftwareDeploySelector/* SoftwareDeploySelector */.Yw,
          {
            forceInstall,
            patch,
            patchOption,
            platform,
            endUserExperience,
            onToggleForceInstall: setForceInstall,
            onTogglePatch: setPatch,
            onSelectPatchOption: setPatchOption,
            onSelectEndUserExperience: setEndUserExperience,
            disabled: disableChildren || isLoadingFleetMaintainedApp,
            showPatchWhenClosedNotice: true,
            hideLabel: true
          }
        )
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        entityType: "software",
        position: "top",
        tipOffset: 8,
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            onClick: onSave,
            isLoading: isSaving,
            disabled: disableChildren || isLoadingFleetMaintainedApp
          },
          "Save"
        )
      }
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel")))
  );
};
/* harmony default export */ var DeployModal_DeployModal = (DeployModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/DeployModal/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/ModalFooter/index.ts + 1 modules
var ModalFooter = __webpack_require__(48262);
// EXTERNAL MODULE: ./frontend/components/TargetLabelSelector/index.ts + 2 modules
var TargetLabelSelector = __webpack_require__(22676);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditAutoUpdateConfigModal/helpers.tsx

const validateTimeFormat = (time) => {
  if (!time.match(/^[0-9]{2}:[0-9]{2}$/)) {
    return false;
  }
  const [hours, minutes] = time.split(":").map(Number);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return false;
  }
  return true;
};
const validateWindowLength = (formData, validations) => {
  if (formData.autoUpdateStartTime.length === 0 || formData.autoUpdateEndTime.length === 0 || !(validations == null ? void 0 : validations.autoUpdateStartTime) || !validations.autoUpdateStartTime.isValid || !validations.autoUpdateEndTime || !validations.autoUpdateEndTime.isValid) {
    return true;
  }
  const [startHours, startMinutes] = formData.autoUpdateStartTime.split(":").map(Number);
  const [endHours, endMinutes] = formData.autoUpdateEndTime.split(":").map(Number);
  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;
  return endTotalMinutes < startTotalMinutes || endTotalMinutes - startTotalMinutes >= 60;
};
const FORM_VALIDATIONS = {
  autoUpdateStartTime: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.autoUpdateStartTime.length > 0;
        },
        message: `Earliest start time is required`
      },
      {
        name: "valid",
        isValid: (formData) => {
          if (formData.autoUpdateStartTime.length === 0) {
            return true;
          }
          return validateTimeFormat(formData.autoUpdateStartTime);
        },
        message: `Use HH:MM format (24-hour clock)`
      }
    ]
  },
  autoUpdateEndTime: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.autoUpdateEndTime.length > 0;
        },
        message: `Latest start time is required`
      },
      {
        name: "valid",
        isValid: (formData) => {
          if (formData.autoUpdateEndTime.length === 0) {
            return true;
          }
          return validateTimeFormat(formData.autoUpdateEndTime);
        },
        message: `Use HH:MM format (24-hour clock)`
      }
    ]
  },
  targets: {
    validations: [
      {
        name: "custom_labels_selected",
        isValid: (formData) => {
          return formData.targetType !== "Custom" || Object.values(formData.labelTargets).filter((v) => v).length > 0;
        },
        message: `At least one label target must be selected`
      }
    ]
  },
  windowLength: {
    validations: [
      {
        name: "minimum_length",
        isValid: validateWindowLength,
        message: `Update window must be at least 60 minutes long`
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
const validateFormData = (formData, isSaving = false) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(FORM_VALIDATIONS).forEach((key) => {
    if (!formData.autoUpdateEnabled && key !== "targets") {
      return;
    }
    const objKey = key;
    const failedValidation = FORM_VALIDATIONS[objKey].validations.find(
      (validation) => {
        if (!isSaving && validation.name === "required") {
          return false;
        }
        return !validation.isValid(formData, formValidation);
      }
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

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditAutoUpdateConfigModal/EditAutoUpdateConfigModal.tsx

var EditAutoUpdateConfigModal_defProp = Object.defineProperty;
var EditAutoUpdateConfigModal_defProps = Object.defineProperties;
var EditAutoUpdateConfigModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditAutoUpdateConfigModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditAutoUpdateConfigModal_hasOwnProp = Object.prototype.hasOwnProperty;
var EditAutoUpdateConfigModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditAutoUpdateConfigModal_defNormalProp = (obj, key, value) => key in obj ? EditAutoUpdateConfigModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditAutoUpdateConfigModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditAutoUpdateConfigModal_hasOwnProp.call(b, prop))
      EditAutoUpdateConfigModal_defNormalProp(a, prop, b[prop]);
  if (EditAutoUpdateConfigModal_getOwnPropSymbols)
    for (var prop of EditAutoUpdateConfigModal_getOwnPropSymbols(b)) {
      if (EditAutoUpdateConfigModal_propIsEnum.call(b, prop))
        EditAutoUpdateConfigModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditAutoUpdateConfigModal_spreadProps = (a, b) => EditAutoUpdateConfigModal_defProps(a, EditAutoUpdateConfigModal_getOwnPropDescs(b));
var EditAutoUpdateConfigModal_async = (__this, __arguments, generator) => {
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


















const EditAutoUpdateConfigModal_baseClass = "edit-auto-update-config-modal";
const formClass = "edit-auto-update-config-form";
const EditAutoUpdateConfigModal = ({
  softwareTitle,
  teamId,
  refetchSoftwareTitle,
  onExit
}) => {
  var _a, _b, _c, _d, _e, _f;
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const formClassNames = classnames_default()(formClass, {
    [`edit-auto-update-config-form--disabled`]: gitOpsModeEnabled
  });
  const [isUpdatingConfiguration, setIsUpdatingConfiguration] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    autoUpdateEnabled: softwareTitle.auto_update_enabled || false,
    autoUpdateStartTime: softwareTitle.auto_update_window_start || "",
    autoUpdateEndTime: softwareTitle.auto_update_window_end || "",
    targetType: (0,helpers/* getTargetType */.Ag)(softwareTitle.app_store_app),
    customTarget: (0,helpers/* getCustomTarget */.lQ)(softwareTitle.app_store_app),
    labelTargets: (0,helpers/* generateSelectedLabels */.ER)(
      softwareTitle.app_store_app
    )
  });
  const { data: labels } = (0,es.useQuery)(
    ["custom_labels"],
    () => entities_labels/* default */.Ay.summary(teamId).then((res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)),
    EditAutoUpdateConfigModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => validateFormData(formData)
  );
  const onSubmitForm = (evt) => EditAutoUpdateConfigModal_async(null, null, function* () {
    evt.preventDefault();
    const newValidation = validateFormData(formData, true);
    setFormValidation(newValidation);
    if (!newValidation.isValid) {
      return false;
    }
    setIsUpdatingConfiguration(true);
    try {
      yield entities_software/* default */.A.editAppStoreApp(softwareTitle.id, teamId, formData);
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("strong", null, (0,helpers/* getDisplayedSoftwareName */.Yd)(
          softwareTitle.name,
          softwareTitle.display_name
        )), " ", "configuration updated.")
      );
      refetchSoftwareTitle();
      onExit();
    } catch (e) {
      ToastNotification/* notify */.me.error(
        "An error occurred while updating the configuration. Please try again.",
        { response: e }
      );
    }
    setIsUpdatingConfiguration(false);
    return true;
  });
  const onToggleEnabled = (value) => {
    const newFormData = EditAutoUpdateConfigModal_spreadProps(EditAutoUpdateConfigModal_spreadValues({}, formData), { autoUpdateEnabled: value });
    setFormData(newFormData);
    setFormValidation(validateFormData(newFormData));
  };
  const onChangeTimeField = (update) => {
    const value = update.value.substring(0, 5).replace(/[^0-9:]/g, "");
    const newFormData = EditAutoUpdateConfigModal_spreadProps(EditAutoUpdateConfigModal_spreadValues({}, formData), { [update.name]: value });
    setFormData(newFormData);
    const newValidation = validateFormData(newFormData);
    const fieldName = update.name;
    const fieldValidation = newValidation[fieldName];
    if (fieldValidation == null ? void 0 : fieldValidation.isValid) {
      setFormValidation(newValidation);
    }
  };
  const onSelectTargetType = (value) => {
    const newData = EditAutoUpdateConfigModal_spreadProps(EditAutoUpdateConfigModal_spreadValues({}, formData), { targetType: value });
    setFormData(newData);
    setFormValidation(validateFormData(newData));
  };
  const onSelectCustomTargetOption = (value) => {
    const newData = EditAutoUpdateConfigModal_spreadProps(EditAutoUpdateConfigModal_spreadValues({}, formData), { customTarget: value });
    setFormData(newData);
    setFormValidation(validateFormData(newData));
  };
  const onSelectLabel = ({ name, value }) => {
    const newData = EditAutoUpdateConfigModal_spreadProps(EditAutoUpdateConfigModal_spreadValues({}, formData), {
      labelTargets: EditAutoUpdateConfigModal_spreadProps(EditAutoUpdateConfigModal_spreadValues({}, formData.labelTargets), { [name]: value })
    });
    setFormData(newData);
    setFormValidation(validateFormData(newData));
  };
  const earliestStartTimeError = ((_a = formValidation.autoUpdateStartTime) == null ? void 0 : _a.message) || (((_b = formValidation.windowLength) == null ? void 0 : _b.message) ? "Earliest start time" : void 0);
  const latestStartTimeError = ((_c = formValidation.autoUpdateEndTime) == null ? void 0 : _c.message) || (((_d = formValidation.windowLength) == null ? void 0 : _d.message) ? "Latest start time" : void 0);
  const updateWindowLabel = ((_e = formValidation.windowLength) == null ? void 0 : _e.message) || /* @__PURE__ */ react.createElement(react.Fragment, null, "Update window (host local time)");
  const updateWindowLabelClass = classnames_default()("form-field__label", {
    "form-field__label--error": !!((_f = formValidation.windowLength) == null ? void 0 : _f.message)
  });
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: EditAutoUpdateConfigModal_baseClass, title: "Schedule auto updates", onExit }, /* @__PURE__ */ react.createElement("div", { className: formClassNames }, /* @__PURE__ */ react.createElement("div", { className: `${formClass}__form-frame` }, /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "medium" }, /* @__PURE__ */ react.createElement("div", { className: `${formClass}__auto-update-config` }, /* @__PURE__ */ react.createElement("div", { className: `form-field` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Auto updates"), /* @__PURE__ */ react.createElement("div", { className: "form-field__subtitle" }, "Automatically update", " ", /* @__PURE__ */ react.createElement("strong", null, (0,helpers/* getDisplayedSoftwareName */.Yd)(
    softwareTitle.name,
    softwareTitle.display_name
  )), " ", "on all targeted hosts when a new version is available."), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      value: formData.autoUpdateEnabled,
      onChange: (newVal) => onToggleEnabled(newVal)
    },
    "Enable auto updates"
  ))), formData.autoUpdateEnabled && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: updateWindowLabelClass }, updateWindowLabel), /* @__PURE__ */ react.createElement("div", { className: "form-field__subtitle" }, 'Times are formatted as HH:MM in 24 hour time (e.g., "13:37").'))), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("div", { className: `${formClass}__auto-update-schedule-form` }, /* @__PURE__ */ react.createElement("span", { className: "date-time-inputs" }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      value: formData.autoUpdateStartTime,
      onChange: onChangeTimeField,
      onBlur: () => setFormValidation(validateFormData(formData)),
      label: "Earliest start time",
      name: "autoUpdateStartTime",
      parseTarget: true,
      error: earliestStartTimeError
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      value: formData.autoUpdateEndTime,
      onChange: onChangeTimeField,
      onBlur: () => setFormValidation(validateFormData(formData)),
      label: "Latest start time",
      name: "autoUpdateEndTime",
      parseTarget: true,
      error: latestStartTimeError
    }
  ))))))), /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "medium" }, /* @__PURE__ */ react.createElement(
    TargetLabelSelector/* DropdownTargetLabelSelector */.m,
    {
      selectedTargetType: formData.targetType,
      selectedCustomTarget: formData.customTarget,
      selectedLabels: formData.labelTargets,
      customTargetOptions: helpers/* CUSTOM_TARGET_OPTIONS */.fK,
      className: `${formClass}__target`,
      onSelectTargetType,
      onSelectCustomTarget: onSelectCustomTargetOption,
      onSelectLabel,
      labels: labels || [],
      dropdownHelpText: (0,helpers/* generateHelpText */.a3)(false, formData.customTarget),
      subTitle: "Changes to targets will also apply to self service."
    }
  )))), /* @__PURE__ */ react.createElement(
    ModalFooter/* default */.A,
    {
      primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          entityType: "software",
          position: "top",
          tipOffset: 8,
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              type: "submit",
              onClick: onSubmitForm,
              isLoading: isUpdatingConfiguration,
              disabled: !formValidation.isValid || isUpdatingConfiguration || disableChildren
            },
            "Save"
          )
        }
      ))
    }
  ));
};
/* harmony default export */ var EditAutoUpdateConfigModal_EditAutoUpdateConfigModal = (EditAutoUpdateConfigModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditAutoUpdateConfigModal/index.ts



// EXTERNAL MODULE: ./frontend/components/Editor/index.tsx
var Editor = __webpack_require__(96470);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditConfigurationModal/helpers.tsx


const DEFAULT_ERROR_MESSAGE = "Couldn't update configuration. Please try again.";
const PROFILE_ONLY_VARIABLE_PATTERNS = [
  /^NDES_SCEP_(CHALLENGE|PROXY_URL)$/,
  /^CUSTOM_SCEP_(CHALLENGE|PROXY_URL)_/,
  /^SCEP_RENEWAL_ID$/,
  /^DIGICERT_(DATA|PASSWORD)_/,
  /^SCEP_WINDOWS_CERTIFICATE_ID$/,
  /^SMALLSTEP_SCEP_(CHALLENGE|PROXY_URL)_/
];
const isProfileOnlyVariable = (varNameWithoutPrefix) => {
  return PROFILE_ONLY_VARIABLE_PATTERNS.some(
    (pattern) => pattern.test(varNameWithoutPrefix)
  );
};
const generateUnsupportedVariableErrMsg = (errMsg) => {
  const match = errMsg.match(/\$FLEET_VAR_(\w+)/);
  if (!match) {
    return DEFAULT_ERROR_MESSAGE;
  }
  const fullVarName = match[0];
  const varNameWithoutPrefix = match[1];
  if (isProfileOnlyVariable(varNameWithoutPrefix)) {
    return `Couldn't edit. Variable "${fullVarName}" isn't supported in managed configuration. It can only be used in configuration profiles.`;
  }
  return `Couldn't edit. Variable "${fullVarName}" doesn't exist.`;
};
const generateMissingSecretErrMsg = (errMsg) => {
  const regex = /"\$FLEET_SECRET_\w+"/g;
  const varNames = [];
  let m = regex.exec(errMsg);
  while (m) {
    varNames.push(m[0].replace(/"/g, ""));
    m = regex.exec(errMsg);
  }
  if (varNames.length === 0) {
    return DEFAULT_ERROR_MESSAGE;
  }
  const plural = varNames.length > 1 ? "s" : "";
  const verb = varNames.length > 1 ? "don't" : "doesn't";
  const quoted = varNames.map((v) => `"${v}"`).join(", ");
  return `Couldn't edit. Variable${plural} ${quoted} ${verb} exist.`;
};
const helpers_getErrorMessage = (err) => {
  const reason = (0,errors/* getErrorReason */.F3)(err);
  if (reason.includes("unsupported variable") && reason.includes("$FLEET_VAR_")) {
    return generateUnsupportedVariableErrMsg(reason);
  }
  if (reason.includes("missing from database") && reason.includes("$FLEET_SECRET_")) {
    return generateMissingSecretErrMsg(reason);
  }
  return reason || DEFAULT_ERROR_MESSAGE;
};
const isErrorWithMessage = (error) => {
  return typeof error === "object" && error !== null && "message" in error && typeof error.message === "string";
};
const validateJson = (value) => {
  if (!value) {
    return null;
  }
  try {
    JSON.parse(value);
  } catch (e) {
    if (isErrorWithMessage(e)) {
      return e.message.toString();
    }
    throw e;
  }
  return null;
};
const validateXml = (value) => {
  var _a;
  if (!value) {
    return null;
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(value, "application/xml");
  const parseError = doc.querySelector("parsererror");
  if (parseError) {
    return "Invalid XML";
  }
  const root = doc.documentElement;
  if (root.tagName === "dict") {
    return null;
  }
  if (root.tagName === "plist" && ((_a = root.firstElementChild) == null ? void 0 : _a.tagName) === "dict") {
    return null;
  }
  if (root.tagName === "plist") {
    return "<plist> root must contain a <dict> element.";
  }
  return "Root element must be <dict>. Apple managed app configurations require a <dict> root element.";
};
const getPlatformLabel = (platform) => {
  switch (platform) {
    case "ios":
      return "iOS";
    case "ipados":
      return "iPadOS";
    case "android":
      return "Android";
    default:
      return platform;
  }
};

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditConfigurationModal/EditConfigurationModal.tsx

var EditConfigurationModal_async = (__this, __arguments, generator) => {
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













const EditConfigurationModal_baseClass = "edit-configuration-modal";
const EditConfigurationModal = ({
  softwareInstaller,
  softwareId,
  teamId,
  isApplePlatform,
  refetchSoftwareTitle,
  onExit
}) => {
  const isInHouseApp = (0,interfaces_software/* isSoftwarePackage */.Az)(softwareInstaller);
  const XML_EMPTY = "<dict>\n  \n</dict>";
  const validateForm = (curFormData) => {
    if (isApplePlatform) {
      return validateXml(curFormData);
    }
    return validateJson(curFormData);
  };
  const getInitialValue = () => {
    if (isApplePlatform) {
      return softwareInstaller.configuration || XML_EMPTY;
    }
    return JSON.stringify(softwareInstaller.configuration, null, "	") || "{}";
  };
  const isEmptyAppleConfig = isApplePlatform && !softwareInstaller.configuration;
  const onEditorLoad = (0,react.useCallback)(
    (editor) => {
      if (isEmptyAppleConfig) {
        editor.moveCursorTo(1, 2);
        editor.clearSelection();
      }
    },
    [isEmptyAppleConfig]
  );
  const initialValue = getInitialValue();
  const [isUpdatingConfiguration, setIsUpdatingConfiguration] = (0,react.useState)(false);
  const [canSaveForm, setCanSaveForm] = (0,react.useState)(!validateForm(initialValue));
  const [formData, setFormData] = (0,react.useState)(initialValue);
  const [formError, setFormError] = (0,react.useState)(
    () => validateForm(initialValue)
  );
  const buildSubmitPayload = () => {
    if (isApplePlatform) {
      return { configuration: formData };
    }
    if (formData === "") {
      return { configuration: {} };
    }
    return {
      configuration: JSON.parse(formData)
    };
  };
  const onEditConfiguration = (evt) => EditConfigurationModal_async(null, null, function* () {
    setIsUpdatingConfiguration(true);
    evt.preventDefault();
    try {
      if (isInHouseApp) {
        yield entities_software/* default */.A.editSoftwarePackage({
          data: buildSubmitPayload(),
          softwareId,
          teamId
        });
      } else {
        yield entities_software/* default */.A.editAppStoreApp(
          softwareId,
          teamId,
          buildSubmitPayload()
        );
      }
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("strong", null, (0,helpers/* getDisplayedSoftwareName */.Yd)(
          softwareInstaller.name,
          softwareInstaller.display_name
        )), " ", "configuration updated.")
      );
      refetchSoftwareTitle();
      onExit();
    } catch (e) {
      ToastNotification/* notify */.me.error(helpers_getErrorMessage(e), { response: e });
    }
    setIsUpdatingConfiguration(false);
  });
  const onInputChange = (value) => {
    setFormData(value);
    const error = validateForm(value);
    setFormError(error);
    setCanSaveForm(!error);
  };
  const editorMode = isApplePlatform ? "xml" : "json";
  const renderHelpText = () => {
    if (isApplePlatform) {
      return /* @__PURE__ */ react.createElement("div", { className: `${EditConfigurationModal_baseClass}__help-text` }, "Managed app configuration, also known as App Config.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          text: "Learn more",
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/ios-software-managed-configuration`
        }
      ));
    }
    return /* @__PURE__ */ react.createElement("div", { className: `${EditConfigurationModal_baseClass}__help-text` }, "The Android app's configuration in JSON format.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        newTab: true,
        text: "Learn more",
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/android-software-managed-configuration`
      }
    ));
  };
  const renderDescription = () => {
    if (!isApplePlatform) {
      return null;
    }
    return /* @__PURE__ */ react.createElement("p", { className: `${EditConfigurationModal_baseClass}__description` }, "Configuration edits, including variable changes, are only applied during future installs and updates. Learn more about", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        newTab: true,
        text: "variables",
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/fleet-variables`
      }
    ));
  };
  const renderForm = () => /* @__PURE__ */ react.createElement(
    Editor/* default */.A,
    {
      mode: editorMode,
      value: formData,
      helpText: renderHelpText(),
      onChange: onInputChange,
      onLoad: onEditorLoad,
      readOnly: isUpdatingConfiguration,
      error: formError,
      label: "Configuration"
    }
  );
  const renderInstallerDetails = () => {
    if (isApplePlatform) {
      const version = isInHouseApp ? softwareInstaller.version : softwareInstaller.latest_version;
      return /* @__PURE__ */ react.createElement(
        InstallerDetailsWidget_InstallerDetailsWidget,
        {
          softwareName: softwareInstaller.name,
          installerType: isInHouseApp ? "package" : "app-store",
          version,
          isFma: false,
          isScriptPackage: false
        }
      );
    }
    const appStoreApp = softwareInstaller;
    return /* @__PURE__ */ react.createElement(
      InstallerDetailsWidget_InstallerDetailsWidget,
      {
        softwareName: appStoreApp.name,
        androidPlayStoreId: appStoreApp.app_store_id,
        customDetails: getPlatformLabel(appStoreApp.platform),
        installerType: "app-store",
        isFma: false,
        isScriptPackage: false
      }
    );
  };
  const renderFooter = () => {
    if (isApplePlatform) {
      return /* @__PURE__ */ react.createElement(
        ModalFooter/* default */.A,
        {
          primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              type: "submit",
              onClick: onEditConfiguration,
              isLoading: isUpdatingConfiguration,
              disabled: !canSaveForm || isUpdatingConfiguration
            },
            "Save"
          ))
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      ModalFooter/* default */.A,
      {
        primaryButtons: /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            onClick: onEditConfiguration,
            isLoading: isUpdatingConfiguration,
            disabled: !canSaveForm || isUpdatingConfiguration
          },
          "Save"
        )
      }
    );
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: EditConfigurationModal_baseClass,
      title: "Edit configuration",
      onExit,
      width: "large"
    },
    renderInstallerDetails(),
    renderDescription(),
    renderForm(),
    renderFooter()
  );
};
/* harmony default export */ var EditConfigurationModal_EditConfigurationModal = (EditConfigurationModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditConfigurationModal/index.ts



// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/SelfServicePreview/index.ts + 2 modules
var SelfServicePreview = __webpack_require__(42526);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/SoftwareDetailsSummary/SoftwareDetailsSummary.tsx
var SoftwareDetailsSummary_SoftwareDetailsSummary = __webpack_require__(73967);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/modals/CategoriesEndUserExperienceModal/CategoriesEndUserExperienceModal.tsx
var CategoriesEndUserExperienceModal_CategoriesEndUserExperienceModal = __webpack_require__(25862);
// EXTERNAL MODULE: ./frontend/services/entities/self_service_categories.ts
var self_service_categories = __webpack_require__(23543);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/VulnerabilitiesCell/index.ts + 1 modules
var VulnerabilitiesCell = __webpack_require__(29844);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/TitleVersionsTable/TitleVersionsTableConfig.tsx

var TitleVersionsTableConfig_defProp = Object.defineProperty;
var TitleVersionsTableConfig_defProps = Object.defineProperties;
var TitleVersionsTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TitleVersionsTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TitleVersionsTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var TitleVersionsTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var TitleVersionsTableConfig_defNormalProp = (obj, key, value) => key in obj ? TitleVersionsTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TitleVersionsTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TitleVersionsTableConfig_hasOwnProp.call(b, prop))
      TitleVersionsTableConfig_defNormalProp(a, prop, b[prop]);
  if (TitleVersionsTableConfig_getOwnPropSymbols)
    for (var prop of TitleVersionsTableConfig_getOwnPropSymbols(b)) {
      if (TitleVersionsTableConfig_propIsEnum.call(b, prop))
        TitleVersionsTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TitleVersionsTableConfig_spreadProps = (a, b) => TitleVersionsTableConfig_defProps(a, TitleVersionsTableConfig_getOwnPropDescs(b));









const generateSoftwareTitleVersionsTableConfig = ({
  teamId,
  isIPadOSOrIOSApp,
  source
}) => {
  const tableHeaders = [
    {
      title: "Version",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Version",
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      accessor: "version",
      sortType: "version",
      Cell: (cellProps) => {
        if (!cellProps.cell.value) {
          return /* @__PURE__ */ react.createElement(TextCell/* default */.A, null);
        }
        const { id } = cellProps.row.original;
        const softwareVersionDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_VERSION_DETAILS(id.toString()),
          { fleet_id: teamId }
        );
        return /* @__PURE__ */ react.createElement(
          LinkCell/* default */.A,
          {
            className: "name-link",
            path: softwareVersionDetailsPath,
            value: (0,interfaces_software/* formatSoftwareVersion */.hK)(TitleVersionsTableConfig_spreadProps(TitleVersionsTableConfig_spreadValues({}, cellProps.row.original), { source }))
          }
        );
      }
    },
    {
      title: "Vulnerabilities",
      Header: "Vulnerabilities",
      disableSortBy: true,
      // the "vulnerabilities" accessor is used but the data is actually coming
      // from the version attribute. We do this as we already have a "versions"
      // attribute used for the "Version" column and we cannot reuse. This is a
      // limitation of react-table.
      // With the versions data, we can sum up the vulnerabilities to get the
      // total number of vulnerabilities for the software title
      accessor: "vulnerabilities",
      Cell: (cellProps) => {
        if (isIPadOSOrIOSApp) {
          return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: "Not supported", grey: true });
        }
        return /* @__PURE__ */ react.createElement(VulnerabilitiesCell/* default */.A, { vulnerabilities: cellProps.cell.value });
      }
    },
    {
      title: "Hosts",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Hosts",
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      accessor: "hosts_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "",
      Header: "",
      accessor: "linkToFilteredHosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(react.Fragment, null, cellProps.row.original && /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              software_version_id: cellProps.row.original.id,
              fleet_id: teamId
            },
            className: "software-link",
            rowHover: true
          }
        ));
      }
    }
  ];
  return tableHeaders;
};
/* harmony default export */ var TitleVersionsTableConfig = (generateSoftwareTitleVersionsTableConfig);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/TitleVersionsTable/TitleVersionsTable.tsx











const DEFAULT_SORT_HEADER = "hosts_count";
const DEFAULT_SORT_DIRECTION = "desc";
const DEFAULT_PAGE_SIZE = 10;
const TitleVersionsTable_baseClass = "software-title-versions-table";
const TitleVersionsLastUpdatedInfo = (lastUpdatedAt) => {
  return /* @__PURE__ */ react.createElement(
    LastUpdatedText/* default */.A,
    {
      lastUpdatedAt,
      customTooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time software data was ", /* @__PURE__ */ react.createElement("br", null), "updated, including vulnerabilities ", /* @__PURE__ */ react.createElement("br", null), "and host counts.")
    }
  );
};
const NoVersionsDetected = (isAvailableForInstall = false) => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: isAvailableForInstall ? "No versions detected" : "No versions detected for this software item",
      info: isAvailableForInstall ? "Install this software on a host to see versions." : /* @__PURE__ */ react.createElement(react.Fragment, null, "Expecting to see versions?", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: constants/* GITHUB_NEW_ISSUE_LINK */.CO,
          text: "File an issue on GitHub",
          newTab: true
        }
      ))
    }
  );
};
const TitleVersionsTable = ({
  router,
  data,
  source,
  isLoading,
  teamIdForApi,
  isIPadOSOrIOSApp,
  isAvailableForInstall,
  countsUpdatedAt
}) => {
  const handleRowSelect = (row) => {
    if (row.original.id) {
      const softwareVersionId = row.original.id;
      const softwareVersionDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
        paths/* default */.A.SOFTWARE_VERSION_DETAILS(softwareVersionId.toString()),
        { fleet_id: teamIdForApi }
      );
      router.push(softwareVersionDetailsPath);
    }
  };
  const softwareTableHeaders = (0,react.useMemo)(
    () => TitleVersionsTableConfig({
      teamId: teamIdForApi,
      isIPadOSOrIOSApp,
      source
    }),
    [teamIdForApi, isIPadOSOrIOSApp, source]
  );
  const renderVersionsCount = () => /* @__PURE__ */ react.createElement(react.Fragment, null, (data == null ? void 0 : data.length) > 0 && /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "versions", count: data == null ? void 0 : data.length }), countsUpdatedAt && TitleVersionsLastUpdatedInfo(countsUpdatedAt));
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: TitleVersionsTable_baseClass,
      columnConfigs: softwareTableHeaders,
      data,
      isLoading,
      emptyComponent: () => NoVersionsDetected(isAvailableForInstall),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      defaultSortHeader: DEFAULT_SORT_HEADER,
      defaultSortDirection: DEFAULT_SORT_DIRECTION,
      pageSize: DEFAULT_PAGE_SIZE,
      isClientSidePagination: true,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect,
      renderCount: renderVersionsCount,
      hideFooter: (data == null ? void 0 : data.length) <= DEFAULT_PAGE_SIZE
    }
  );
};
/* harmony default export */ var TitleVersionsTable_TitleVersionsTable = (TitleVersionsTable);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditIconModal/EditIconModal.tsx

var EditIconModal_defProp = Object.defineProperty;
var EditIconModal_defProps = Object.defineProperties;
var EditIconModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditIconModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditIconModal_hasOwnProp = Object.prototype.hasOwnProperty;
var EditIconModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditIconModal_defNormalProp = (obj, key, value) => key in obj ? EditIconModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditIconModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditIconModal_hasOwnProp.call(b, prop))
      EditIconModal_defNormalProp(a, prop, b[prop]);
  if (EditIconModal_getOwnPropSymbols)
    for (var prop of EditIconModal_getOwnPropSymbols(b)) {
      if (EditIconModal_propIsEnum.call(b, prop))
        EditIconModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditIconModal_spreadProps = (a, b) => EditIconModal_defProps(a, EditIconModal_getOwnPropDescs(b));
var EditIconModal_async = (__this, __arguments, generator) => {
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

























const EditIconModal_baseClass = "edit-icon-modal";
const ACCEPTED_EXTENSIONS = ".png";
const MIN_DIMENSION = 120;
const MAX_DIMENSION = 1024;
const MAX_FILE_SIZE = 100 * 1024;
const UPLOAD_MESSAGE = `The icon must be a PNG file and square, with dimensions ranging from ${MIN_DIMENSION}x${MIN_DIMENSION} px to ${MAX_DIMENSION}x${MAX_DIMENSION} px.`;
const EditIconModal_DEFAULT_ERROR_MESSAGE = "Couldn't edit. Please try again.";
const getFilenameFromContentDisposition = (header) => {
  if (!header) return null;
  const matchExtended = header.match(/filename\*\s*=\s*([^;]+)/);
  if (matchExtended) {
    const value = matchExtended[1].trim().replace(/^UTF-8''/, "");
    return decodeURIComponent(value);
  }
  const matchStandard = header.match(/filename\s*=\s*["']?([^"';]+)["']?/);
  return matchStandard ? matchStandard[1] : null;
};
const makeFileDetails = (file, dimensions) => ({
  name: file.name,
  description: `Software icon \u2022 ${dimensions || "?"}x${dimensions || "?"} px`
});
const defaultIconState = {
  previewUrl: null,
  formData: null,
  dimensions: null,
  fileDetails: null,
  status: "apiCustom"
};
const EditIconModal = ({
  softwareId,
  teamIdForApi,
  software,
  onExit,
  refetchSoftwareTitle,
  iconUploadedAt,
  setIconUploadedAt,
  installerType,
  previewInfo
}) => {
  var _a;
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const queryClient = (0,es.useQueryClient)();
  const isSoftwarePackage = installerType === "package";
  const isIosOrIpadosApp = (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(
    (previewInfo == null ? void 0 : previewInfo.source) || ""
  );
  const isAndroidApp = (0,interfaces_software/* isAndroidSoftwareSource */._K)((previewInfo == null ? void 0 : previewInfo.source) || "");
  const shouldFetchCustomIcon = !!previewInfo.currentIconUrl && previewInfo.currentIconUrl.startsWith("/api/");
  const hasNameBeenModified = previewInfo.titleName !== previewInfo.name;
  const defaultName = hasNameBeenModified ? previewInfo.name : "";
  const [displayName, setDisplayName] = (0,react.useState)(defaultName);
  const [iconState, setIconState] = (0,react.useState)(defaultIconState);
  const [previewTabIndex, setPreviewTabIndex] = (0,react.useState)(0);
  const [isUpdatingSoftwareInfo, setIsUpdatingSoftwareInfo] = (0,react.useState)(false);
  const [isFirstLoadWithCustomIcon, setIsFirstLoadWithCustomIcon] = (0,react.useState)(
    shouldFetchCustomIcon
  );
  const originalIsApiCustom = !!previewInfo.currentIconUrl && previewInfo.currentIconUrl.startsWith("/api/");
  const originalIsVpp = !!previewInfo.currentIconUrl && !previewInfo.currentIconUrl.startsWith("/api/");
  const isCustomUpload = iconState.status === "customUpload";
  const isRemovedCustom = originalIsApiCustom && iconState.status === "fallback" && !iconState.formData;
  const canSaveIcon = isCustomUpload || isRemovedCustom;
  const canSaveDisplayName = hasNameBeenModified && displayName === "" || // user cleared an override display name
  !hasNameBeenModified && displayName !== "" || // user set an override display name
  hasNameBeenModified && displayName !== "" && displayName !== previewInfo.name;
  const canSaveForm = canSaveIcon || canSaveDisplayName;
  const setCurrentApiCustomIcon = (0,react.useCallback)(
    (file, width, previewUrl) => setIconState({
      previewUrl,
      formData: { icon: file, display_name: displayName },
      dimensions: width,
      fileDetails: makeFileDetails(file, width),
      status: "apiCustom"
    }),
    [displayName]
  );
  const setCustomUpload = (file, width, previewUrl) => setIconState({
    previewUrl,
    formData: { icon: file },
    dimensions: width,
    fileDetails: makeFileDetails(file, width),
    status: "customUpload"
  });
  const resetIconState = (0,react.useCallback)(() => {
    const defaultPreviewUrl = previewInfo.currentIconUrl && !previewInfo.currentIconUrl.startsWith("/api/") ? previewInfo.currentIconUrl : null;
    setIconState({
      previewUrl: defaultPreviewUrl,
      formData: null,
      dimensions: null,
      fileDetails: null,
      status: "fallback"
    });
  }, [previewInfo.currentIconUrl]);
  const { data: customIconData, isError: isCustomIconError } = (0,es.useQuery)(
    ["softwareIcon", softwareId, teamIdForApi, iconUploadedAt],
    () => entities_software/* default */.A.getSoftwareIcon(softwareId, teamIdForApi),
    {
      enabled: shouldFetchCustomIcon,
      retry: false,
      select: (response) => response ? {
        blob: response.data,
        filename: getFilenameFromContentDisposition(
          response.headers["content-disposition"]
        ),
        url: URL.createObjectURL(response.data)
      } : ""
    }
  );
  const { data: categories } = (0,es.useQuery)(
    ["selfServiceCategories", teamIdForApi],
    () => self_service_categories/* default */.A.getCategories(teamIdForApi),
    {
      select: (response) => response.self_service_categories,
      staleTime: 6e4
    }
  );
  const hasCategories = ((_a = categories == null ? void 0 : categories.length) != null ? _a : 0) > 0;
  const onExitEditIconModal = () => {
    resetIconState();
    onExit();
  };
  const onInputChange = ({ value }) => {
    setDisplayName(value || "");
    setIconState(
      (prev) => prev.formData ? EditIconModal_spreadProps(EditIconModal_spreadValues({}, prev), {
        formData: EditIconModal_spreadProps(EditIconModal_spreadValues({}, prev.formData), { display_name: value })
      }) : prev
    );
  };
  const onFileSelect = (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > MAX_FILE_SIZE) {
        ToastNotification/* notify */.me.error("Couldn't edit. Icon must be 100KB or less.");
        return;
      }
      if (file.type !== "image/png") {
        ToastNotification/* notify */.me.error("Couldn't edit. Must be a PNG file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const { width, height } = img;
          if (width !== height || width < MIN_DIMENSION || width > MAX_DIMENSION) {
            ToastNotification/* notify */.me.error(
              `Couldn't edit. Icon must be square, between ${MIN_DIMENSION}x${MIN_DIMENSION}px and ${MAX_DIMENSION}x${MAX_DIMENSION}px.`
            );
            return;
          }
          const previewUrl = URL.createObjectURL(file);
          setCustomUpload(file, width, previewUrl);
        };
        if (e.target && typeof e.target.result === "string") {
          img.src = e.target.result;
        } else {
          ToastNotification/* notify */.me.error("FileReader result was not a string.");
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const onDeleteFile = () => resetIconState();
  const onTabChange = (index) => setPreviewTabIndex(index);
  (0,react.useEffect)(() => {
    if (isCustomIconError && isFirstLoadWithCustomIcon) {
      setIsFirstLoadWithCustomIcon(false);
      resetIconState();
      return;
    }
    if (shouldFetchCustomIcon && iconState.status === "apiCustom" && customIconData && !iconState.previewUrl) {
      const img = new Image();
      img.onload = () => {
        fetch(customIconData.url).then((res) => {
          const filename = customIconData.filename || "icon.png";
          return res.blob().then((blob) => ({ blob, filename }));
        }).then(({ blob, filename }) => {
          setCurrentApiCustomIcon(
            new File([blob], filename, { type: "image/png" }),
            img.width,
            customIconData.url
          );
          setIsFirstLoadWithCustomIcon(false);
        });
      };
      img.src = customIconData.url;
      return;
    }
    if (originalIsVpp && iconState.status !== "customUpload") {
      setIconState({
        previewUrl: previewInfo.currentIconUrl,
        formData: null,
        dimensions: null,
        fileDetails: null,
        status: "fallback"
      });
    }
  }, [
    customIconData,
    isCustomIconError,
    isFirstLoadWithCustomIcon,
    iconState.status,
    shouldFetchCustomIcon,
    iconState.previewUrl,
    previewInfo.currentIconUrl,
    originalIsVpp,
    setCurrentApiCustomIcon,
    resetIconState
  ]);
  const fileDetails = iconState.formData && iconState.formData.icon ? {
    name: iconState.formData.icon.name,
    description: `Software icon \u2022 ${iconState.dimensions || "?"}x${iconState.dimensions || "?"} px`
  } : void 0;
  const renderPreviewFleetCard = () => {
    const {
      type,
      versions,
      source,
      currentIconUrl,
      countsUpdatedAt
    } = previewInfo;
    return /* @__PURE__ */ react.createElement(
      Card/* default */.A,
      {
        color: "grey",
        className: `${EditIconModal_baseClass}__preview-card`,
        paddingSize: "xlarge"
      },
      /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${EditIconModal_baseClass}__preview-card__fleet` }, /* @__PURE__ */ react.createElement(
        SoftwareDetailsSummary_SoftwareDetailsSummary/* default */.Ay,
        {
          displayName: displayName || previewInfo.titleName,
          name: previewInfo.titleName,
          type,
          source,
          iconUrl: !currentIconUrl && software.icon_url ? software.icon_url : null,
          versions,
          iconPreviewUrl: iconState.previewUrl,
          iconUploadedAt
        }
      ), /* @__PURE__ */ react.createElement("div", { className: `${EditIconModal_baseClass}__preview-results-count` }, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "versions", count: versions }), countsUpdatedAt && TitleVersionsLastUpdatedInfo(countsUpdatedAt)), /* @__PURE__ */ react.createElement("div", { className: `data-table-block ${EditIconModal_baseClass}__preview-table` }, /* @__PURE__ */ react.createElement("div", { className: "data-table data-table__wrapper" }, /* @__PURE__ */ react.createElement("table", { className: "data-table__table" }, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", { role: "row" }, /* @__PURE__ */ react.createElement(
        "th",
        {
          className: "version__header",
          colSpan: 1,
          role: "columnheader"
        },
        /* @__PURE__ */ react.createElement("div", { className: "column-header" }, "Version")
      ), /* @__PURE__ */ react.createElement(
        "th",
        {
          className: "vulnerabilities__header",
          colSpan: 1,
          role: "columnheader"
        },
        /* @__PURE__ */ react.createElement("div", { className: "column-header" }, "Vulnerabilities")
      ))), /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement("tr", { className: "single-row", role: "row" }, /* @__PURE__ */ react.createElement("td", { className: "version__cell", role: "cell" }, "88.0.1"), /* @__PURE__ */ react.createElement("td", { className: "vulnerabilities__cell", role: "cell" }, /* @__PURE__ */ react.createElement(
        "div",
        {
          className: "vulnerabilities-cell__vulnerability-text-with-tooltip",
          "data-tip": "true",
          "data-for": "86"
        },
        /* @__PURE__ */ react.createElement("span", { className: "text-cell w250 italic-cell" }, "20 vulnerabilities")
      )))))))),
      /* @__PURE__ */ react.createElement(
        "div",
        {
          className: `${EditIconModal_baseClass}__mask-overlay ${EditIconModal_baseClass}__mask-overlay--fleet`
        }
      )
    );
  };
  const renderPreviewSelfServiceCard = () => /* @__PURE__ */ react.createElement(
    SelfServicePreview/* default */.A,
    {
      isIosOrIpadosApp,
      contactUrl: (config == null ? void 0 : config.org_info.contact_url) || "",
      name: previewInfo.name,
      displayName: displayName || previewInfo.titleName,
      versionLabel: "latest_version" in software ? software.latest_version : software.version || previewInfo.selfServiceVersion || "Version (unknown)",
      hasCategories,
      renderIcon: () => iconState.previewUrl && (0,helpers/* isSafeImagePreviewUrl */.KY)(iconState.previewUrl) ? /* @__PURE__ */ react.createElement(
        "img",
        {
          src: iconState.previewUrl,
          alt: "Uploaded self-service icon",
          style: {
            width: 24,
            height: 24,
            borderRadius: "4px",
            overflow: "hidden"
          }
        }
      ) : /* @__PURE__ */ react.createElement(
        SoftwareIcon/* default */.A,
        {
          name: previewInfo.name,
          source: previewInfo.source,
          url: isSoftwarePackage ? void 0 : software.icon_url,
          uploadedAt: iconUploadedAt
        }
      ),
      renderTable: () => /* @__PURE__ */ react.createElement(
        CategoriesEndUserExperienceModal_CategoriesEndUserExperienceModal/* BasicSoftwareTable */.k,
        {
          name: displayName || previewInfo.titleName,
          displayName: displayName || previewInfo.titleName,
          source: previewInfo.source,
          iconUrl: isSoftwarePackage ? void 0 : software.icon_url,
          previewIcon: iconState.previewUrl && (0,helpers/* isSafeImagePreviewUrl */.KY)(iconState.previewUrl) ? /* @__PURE__ */ react.createElement(
            "img",
            {
              src: iconState.previewUrl,
              alt: "Uploaded self-service icon",
              style: {
                width: 24,
                height: 24,
                borderRadius: "4px",
                overflow: "hidden"
              }
            }
          ) : /* @__PURE__ */ react.createElement(
            SoftwareIcon/* default */.A,
            {
              name: previewInfo.titleName,
              source: previewInfo.source,
              url: isSoftwarePackage ? void 0 : software.icon_url,
              uploadedAt: iconUploadedAt
            }
          )
        }
      )
    }
  );
  const defaultDisplayName = (0,helpers/* getDisplayedSoftwareName */.Yd)(previewInfo.titleName);
  const renderForm = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Display name",
      onChange: onInputChange,
      name: "displayName",
      value: displayName,
      parseTarget: true,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Optional. If left blank, Mesh will use", " ", /* @__PURE__ */ react.createElement("strong", null, defaultDisplayName), "."),
      autofocus: true
    }
  ), /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      label: "Icon",
      canEdit: true,
      onDeleteFile,
      graphicName: "file-png",
      accept: ACCEPTED_EXTENSIONS,
      message: UPLOAD_MESSAGE,
      onFileUpload: onFileSelect,
      buttonMessage: "Choose file",
      buttonType: "secondary",
      className: `${EditIconModal_baseClass}__file-uploader`,
      fileDetails,
      gitopsCompatible: false
    }
  ), /* @__PURE__ */ react.createElement("h2", null, "Preview"), isAndroidApp ? renderPreviewFleetCard() : /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: previewTabIndex, onSelect: onTabChange }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Mesh")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Self service"))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderPreviewFleetCard()), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderPreviewSelfServiceCard()))));
  const onClickSave = () => EditIconModal_async(null, null, function* () {
    var _a2;
    setIsUpdatingSoftwareInfo(true);
    const errorToasts = [];
    let iconSucceeded = false;
    let nameSucceeded = false;
    let iconSuccessMessage = null;
    let nameSuccessMessage = null;
    try {
      try {
        if (iconState.status === "fallback" && originalIsApiCustom && !((_a2 = iconState.formData) == null ? void 0 : _a2.icon)) {
          yield entities_software/* default */.A.deleteSoftwareIcon(softwareId, teamIdForApi);
          iconSucceeded = true;
          iconSuccessMessage = /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully removed icon from ", /* @__PURE__ */ react.createElement("b", null, software == null ? void 0 : software.name), ".");
        } else if (iconState.status === "customUpload" && iconState.formData) {
          yield entities_software/* default */.A.editSoftwareIcon(
            softwareId,
            teamIdForApi,
            iconState.formData
          );
          iconSucceeded = true;
          iconSuccessMessage = /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully edited ", /* @__PURE__ */ react.createElement("b", null, previewInfo.name), ".");
        }
      } catch (e) {
        const errorMessage = (0,errors/* getErrorReason */.F3)(e) || EditIconModal_DEFAULT_ERROR_MESSAGE;
        errorToasts.push({
          variant: "error",
          message: errorMessage,
          options: { response: e }
        });
      }
      if (canSaveDisplayName) {
        try {
          const trimmedDisplayName = (displayName != null ? displayName : "").trim();
          yield installerType === "package" ? entities_software/* default */.A.editSoftwarePackage({
            data: { displayName: trimmedDisplayName },
            softwareId,
            // Multi-package titles require `installer_id` on any edit; display_name
            // is title-level, so target the first-added package (`software` is
            // `software_package`, which mirrors `packages[0]`).
            installerId: software.installer_id,
            teamId: teamIdForApi
          }) : entities_software/* default */.A.editAppStoreApp(softwareId, teamIdForApi, {
            displayName: trimmedDisplayName
          });
          nameSucceeded = true;
          nameSuccessMessage = trimmedDisplayName === "" ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully removed custom name for ", /* @__PURE__ */ react.createElement("b", null, previewInfo.name), ".") : /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully renamed ", /* @__PURE__ */ react.createElement("b", null, previewInfo.name), " to", " ", /* @__PURE__ */ react.createElement("b", null, trimmedDisplayName), ".");
        } catch (e) {
          const errorMessage = (0,errors/* getErrorReason */.F3)(e) || EditIconModal_DEFAULT_ERROR_MESSAGE;
          errorToasts.push({
            variant: "error",
            message: errorMessage,
            options: { response: e }
          });
        }
      }
      if (errorToasts.length > 0) {
        ToastNotification/* notify */.me.batch(errorToasts);
      } else if (iconSucceeded && nameSucceeded) {
        ToastNotification/* notify */.me.success(
          /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully edited", " ", /* @__PURE__ */ react.createElement("b", null, displayName === "" ? previewInfo.name : displayName), ".")
        );
        queryClient.invalidateQueries({
          queryKey: [{ scope: "software-titles" }]
        });
        queryClient.invalidateQueries({
          queryKey: [{ scope: "software-library" }]
        });
        refetchSoftwareTitle();
        setIconUploadedAt((/* @__PURE__ */ new Date()).toISOString());
        onExitEditIconModal();
      } else if (iconSucceeded && iconSuccessMessage) {
        ToastNotification/* notify */.me.success(iconSuccessMessage);
        queryClient.invalidateQueries({
          queryKey: [{ scope: "software-titles" }]
        });
        queryClient.invalidateQueries({
          queryKey: [{ scope: "software-library" }]
        });
        refetchSoftwareTitle();
        setIconUploadedAt((/* @__PURE__ */ new Date()).toISOString());
        onExitEditIconModal();
      } else if (nameSucceeded && nameSuccessMessage) {
        ToastNotification/* notify */.me.success(nameSuccessMessage);
        queryClient.invalidateQueries({
          queryKey: [{ scope: "software-titles" }]
        });
        queryClient.invalidateQueries({
          queryKey: [{ scope: "software-library" }]
        });
        refetchSoftwareTitle();
        setIconUploadedAt((/* @__PURE__ */ new Date()).toISOString());
        onExitEditIconModal();
      }
    } catch (e) {
      const errorMessage = (0,errors/* getErrorReason */.F3)(e) || EditIconModal_DEFAULT_ERROR_MESSAGE;
      ToastNotification/* notify */.me.error(errorMessage, { response: e });
    } finally {
      setIsUpdatingSoftwareInfo(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: EditIconModal_baseClass,
      title: "Edit appearance",
      onExit: onExitEditIconModal
    },
    isFirstLoadWithCustomIcon ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, null) : renderForm(),
    /* @__PURE__ */ react.createElement(
      ModalFooter/* default */.A,
      {
        primaryButtons: /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            onClick: onClickSave,
            isLoading: isUpdatingSoftwareInfo,
            disabled: !canSaveForm || isUpdatingSoftwareInfo
          },
          "Save"
        )
      }
    )
  );
};
/* harmony default export */ var EditIconModal_EditIconModal = (EditIconModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditIconModal/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareSummaryCard/SoftwareSummaryCard.tsx



















const SoftwareSummaryCard_baseClass = "software-summary-card";
const getPolicyChipTooltip = (isPatchPolicyOnly, isSinglePolicy) => {
  if (isPatchPolicyOnly) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Policy fails if the host is on an older version.");
  }
  return isSinglePolicy ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Policy triggers install.") : /* @__PURE__ */ react.createElement(react.Fragment, null, "Policies trigger install.");
};
const SoftwareSummaryCard = ({
  softwareTitle,
  softwareId,
  teamId,
  router,
  refetchSoftwareTitle,
  onClickVersions,
  canActivateMultiplePackages = false
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const installerResult = useSoftwareInstaller(softwareTitle);
  const [iconUploadedAt, setIconUploadedAt] = (0,react.useState)("");
  const [showEditIconModal, setShowEditIconModal] = (0,react.useState)(false);
  const [showEditSoftwareModal, setShowEditSoftwareModal] = (0,react.useState)(false);
  const [showDeployModal, setShowDeployModal] = (0,react.useState)(false);
  const [showEditConfigurationModal, setShowEditConfigurationModal] = (0,react.useState)(
    false
  );
  const [
    showEditAutoUpdateConfigModal,
    setShowEditAutoUpdateConfigModal
  ] = (0,react.useState)(false);
  const [showPoliciesModal, setShowPoliciesModal] = (0,react.useState)(false);
  const softwareDisplayName = (0,helpers/* getDisplayedSoftwareName */.Yd)(
    softwareTitle.name,
    softwareTitle.display_name,
    softwareTitle.bundle_identifier
  );
  const installerType = installerResult == null ? void 0 : installerResult.meta.installerType;
  const isFleetMaintainedApp = !!(installerResult == null ? void 0 : installerResult.meta.isFleetMaintainedApp);
  const isAndroidPlayStoreApp = !!(installerResult == null ? void 0 : installerResult.meta.isAndroidPlayStoreApp);
  const isCustomPackage = !!(installerResult == null ? void 0 : installerResult.meta.isCustomPackage);
  const isIosOrIpadosApp = !!(installerResult == null ? void 0 : installerResult.meta.isIosOrIpadosApp);
  const canManageSoftware = !!(installerResult == null ? void 0 : installerResult.meta.canManageSoftware);
  const packageAutoInstallPolicies = (_a = softwareTitle.software_package) == null ? void 0 : _a.automatic_install_policies;
  const appStoreAutoInstallPolicies = (_b = softwareTitle.app_store_app) == null ? void 0 : _b.automatic_install_policies;
  const patchPolicy = (_c = softwareTitle.software_package) == null ? void 0 : _c.patch_policy;
  const mergedPolicies = (0,react.useMemo)(
    () => (0,helpers/* mergePolicies */.$p)({
      automaticInstallPolicies: packageAutoInstallPolicies != null ? packageAutoInstallPolicies : appStoreAutoInstallPolicies,
      patchPolicy
    }),
    [packageAutoInstallPolicies, appStoreAutoInstallPolicies, patchPolicy]
  );
  const isSelfService = !!((_d = softwareTitle.software_package) == null ? void 0 : _d.self_service) || !!((_e = softwareTitle.app_store_app) == null ? void 0 : _e.self_service);
  const hasLinkedPolicies = mergedPolicies.length > 0;
  const isPatchPolicyOnly = hasLinkedPolicies && mergedPolicies.every((p) => !p.type.has("dynamic"));
  const isAppleVpp = installerType === "app-store" && !isAndroidPlayStoreApp;
  const customPackageCount = (_g = (_f = softwareTitle.packages) == null ? void 0 : _f.length) != null ? _g : 1;
  const customPackageChipLabel = (0,stringUtils/* pluralize */.td)(
    customPackageCount,
    "Custom package"
  );
  const installerKindLabel = (_h = [
    [isFleetMaintainedApp, "Fleet-maintained"],
    [isAppleVpp, "App Store (VPP)"],
    [isAndroidPlayStoreApp, "Play Store"],
    [isCustomPackage, customPackageChipLabel]
  ].find(([flag]) => flag)) == null ? void 0 : _h[1];
  const showSelfServiceChip = isSelfService && !canActivateMultiplePackages;
  const showAutoInstallChip = hasLinkedPolicies && !canActivateMultiplePackages;
  const showAutoUpdateChip = !!softwareTitle.app_store_app && isIosOrIpadosApp && !!softwareTitle.auto_update_enabled && !!softwareTitle.auto_update_window_start && !!softwareTitle.auto_update_window_end;
  const canEditAutoUpdateConfig = !!softwareTitle.app_store_app && isIosOrIpadosApp && canManageSoftware;
  const showHeaderPills = !!installerKindLabel || showSelfServiceChip || showAutoInstallChip || showAutoUpdateChip;
  const headerPills = (0,react.useMemo)(() => {
    var _a2, _b2;
    if (!showHeaderPills) {
      return void 0;
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, installerKindLabel && /* @__PURE__ */ react.createElement(Chip_Chip, { text: installerKindLabel }), showSelfServiceChip && /* @__PURE__ */ react.createElement(
      Chip_Chip,
      {
        icon: "user",
        text: "Self service",
        tooltip: (0,helpers/* getSelfServiceTooltip */.F$)(
          (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(softwareTitle.source),
          (0,interfaces_software/* isAndroidSoftwareSource */._K)(softwareTitle.source)
        ),
        tooltipTextBalanced: false
      }
    ), showAutoInstallChip && /* @__PURE__ */ react.createElement(
      Chip_Chip,
      {
        icon: isPatchPolicyOnly ? void 0 : "refresh",
        text: isPatchPolicyOnly ? "Patch policy" : "Auto install",
        onClick: () => {
          if (mergedPolicies.length === 1) {
            router.push(
              (0,url/* getPathWithQueryParams */.M8)(
                paths/* default */.A.POLICY_DETAILS(mergedPolicies[0].id),
                { fleet_id: teamId }
              )
            );
            return;
          }
          setShowPoliciesModal(true);
        },
        tooltip: getPolicyChipTooltip(
          isPatchPolicyOnly,
          mergedPolicies.length === 1
        )
      }
    ), showAutoUpdateChip && /* @__PURE__ */ react.createElement(
      Chip_Chip,
      {
        icon: "refresh",
        text: "Auto updates",
        onClick: canEditAutoUpdateConfig ? () => setShowEditAutoUpdateConfigModal(true) : void 0,
        tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Between", " ", (0,utilities_helpers/* internationalTimeOnlyFormat */.nq)(
          (_a2 = softwareTitle.auto_update_window_start) != null ? _a2 : ""
        ), " ", "and", " ", (0,utilities_helpers/* internationalTimeOnlyFormat */.nq)(
          (_b2 = softwareTitle.auto_update_window_end) != null ? _b2 : ""
        ), " ", "(host local time).")
      }
    ));
  }, [
    showHeaderPills,
    installerKindLabel,
    showSelfServiceChip,
    showAutoInstallChip,
    isPatchPolicyOnly,
    mergedPolicies,
    softwareTitle.source,
    showAutoUpdateChip,
    canEditAutoUpdateConfig,
    softwareTitle.auto_update_window_start,
    softwareTitle.auto_update_window_end,
    router,
    teamId
  ]);
  const policiesModal = showPoliciesModal && /* @__PURE__ */ react.createElement(
    PoliciesModal_PoliciesModal,
    {
      policies: mergedPolicies,
      teamId,
      onExit: () => setShowPoliciesModal(false)
    }
  );
  if (!installerResult) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Card/* default */.A, { className: SoftwareSummaryCard_baseClass }, /* @__PURE__ */ react.createElement(
      SoftwareDetailsSummary/* default */.A,
      {
        displayName: softwareDisplayName,
        type: (0,interfaces_software/* formatSoftwareType */.Nt)(softwareTitle),
        versions: (_j = (_i = softwareTitle.versions) == null ? void 0 : _i.length) != null ? _j : 0,
        hostCount: softwareTitle.hosts_count,
        countsUpdatedAt: softwareTitle.counts_updated_at,
        queryParams: { software_title_id: softwareId, fleet_id: teamId },
        name: softwareTitle.name,
        source: softwareTitle.source,
        iconUrl: softwareTitle.icon_url,
        iconUploadedAt,
        headerPills
      }
    )), policiesModal);
  }
  const { softwareInstaller, isAndroidPlayStoreWebApp } = installerResult.meta;
  const canEditAppearance = canManageSoftware;
  const canEditSoftware = canManageSoftware && !isAndroidPlayStoreApp;
  const canEditConfiguration = canManageSoftware && (isAndroidPlayStoreApp && !isAndroidPlayStoreWebApp || isIosOrIpadosApp);
  const canDeploySoftware = canManageSoftware && isFleetMaintainedApp && !!isPremiumTier;
  const canManageVersions = canManageSoftware && isFleetMaintainedApp && !!isPremiumTier;
  const hasValidTeamId = typeof teamId === "number" && teamId >= 0;
  const softwareInstallerOnTeam = hasValidTeamId && softwareInstaller;
  const onClickEditAppearance = () => setShowEditIconModal(true);
  const onClickEditSoftware = () => setShowEditSoftwareModal(true);
  const onClickDeploy = () => setShowDeployModal(true);
  const onClickEditConfiguration = () => setShowEditConfigurationModal(true);
  const onClickEditAutoUpdateConfig = () => setShowEditAutoUpdateConfigModal(true);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Card/* default */.A, { className: SoftwareSummaryCard_baseClass }, /* @__PURE__ */ react.createElement(
    SoftwareDetailsSummary/* default */.A,
    {
      displayName: softwareDisplayName,
      type: (0,interfaces_software/* formatSoftwareType */.Nt)(softwareTitle),
      versions: (_l = (_k = softwareTitle.versions) == null ? void 0 : _k.length) != null ? _l : 0,
      hostCount: softwareTitle.hosts_count,
      countsUpdatedAt: softwareTitle.counts_updated_at,
      queryParams: {
        software_title_id: softwareId,
        fleet_id: teamId
      },
      name: softwareTitle.name,
      source: softwareTitle.source,
      iconUrl: softwareTitle.icon_url,
      iconUploadedAt,
      canManageSoftware,
      onClickEditAppearance: canEditAppearance ? onClickEditAppearance : void 0,
      onClickEditSoftware: (
        // Multi-package titles move per-installer editing to the Library
        // accordion row; the page-level Edit button collapses to a single
        // pencil-icon Edit-appearance button below. Single-package types
        // (FMA, VPP, Google Play, iOS in-house .ipa) keep the Actions
        // dropdown.
        canEditSoftware && !canActivateMultiplePackages ? onClickEditSoftware : void 0
      ),
      useSingleEditAppearanceButton: canActivateMultiplePackages,
      onClickDeploy: canDeploySoftware ? onClickDeploy : void 0,
      onClickVersions: canManageVersions ? onClickVersions : void 0,
      onClickEditConfiguration: canEditConfiguration ? onClickEditConfiguration : void 0,
      onClickEditAutoUpdateConfig: canEditAutoUpdateConfig ? onClickEditAutoUpdateConfig : void 0,
      headerPills,
      isAppleVpp
    }
  )), showEditIconModal && softwareInstallerOnTeam && /* @__PURE__ */ react.createElement(
    EditIconModal_EditIconModal,
    {
      softwareId,
      teamIdForApi: teamId,
      software: softwareInstaller,
      onExit: () => setShowEditIconModal(false),
      refetchSoftwareTitle,
      iconUploadedAt,
      setIconUploadedAt,
      installerType: installerResult.meta.installerType,
      previewInfo: {
        name: softwareDisplayName,
        titleName: softwareTitle.name,
        type: (0,interfaces_software/* formatSoftwareType */.Nt)(softwareTitle),
        source: softwareTitle.source,
        currentIconUrl: softwareTitle.icon_url,
        versions: (_n = (_m = softwareTitle.versions) == null ? void 0 : _m.length) != null ? _n : 0,
        countsUpdatedAt: softwareTitle.counts_updated_at,
        selfServiceVersion: softwareInstaller.version
      }
    }
  ), showEditSoftwareModal && softwareInstallerOnTeam && /* @__PURE__ */ react.createElement(
    EditSoftwareModal_EditSoftwareModal,
    {
      softwareId,
      teamId,
      softwareInstaller,
      onExit: () => setShowEditSoftwareModal(false),
      refetchSoftwareTitle,
      installerType: installerResult.meta.installerType,
      isFleetMaintainedApp,
      isIosOrIpadosApp,
      name: softwareTitle.name,
      displayName: softwareDisplayName,
      source: softwareTitle.source,
      iconUrl: softwareTitle.icon_url,
      preInstallQueryLocked: (_p = (_o = softwareTitle.software_package) == null ? void 0 : _o.patch_policy) == null ? void 0 : _p.patch_when_closed
    }
  ), showDeployModal && softwareInstallerOnTeam && /* @__PURE__ */ react.createElement(
    DeployModal_DeployModal,
    {
      softwareTitle,
      teamId,
      onSuccess: refetchSoftwareTitle,
      onExit: () => setShowDeployModal(false)
    }
  ), showEditConfigurationModal && softwareInstallerOnTeam && /* @__PURE__ */ react.createElement(
    EditConfigurationModal_EditConfigurationModal,
    {
      softwareInstaller,
      softwareId,
      teamId,
      isApplePlatform: isIosOrIpadosApp,
      refetchSoftwareTitle,
      onExit: () => setShowEditConfigurationModal(false)
    }
  ), showEditAutoUpdateConfigModal && softwareInstallerOnTeam && /* @__PURE__ */ react.createElement(
    EditAutoUpdateConfigModal_EditAutoUpdateConfigModal,
    {
      softwareTitle,
      teamId,
      refetchSoftwareTitle,
      onExit: () => setShowEditAutoUpdateConfigModal(false)
    }
  ), policiesModal);
};
/* harmony default export */ var SoftwareSummaryCard_SoftwareSummaryCard = (SoftwareSummaryCard);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareSummaryCard/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/TitleVersionsTable/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/VersionsModal/helpers.ts


const LATEST_VERSION_VALUE = "";
const majorOf = (version) => version.split(".")[0];
const deriveVersionOptions = (versions) => {
  const sorted = [...versions].sort(
    (a, b) => (0,utilities_helpers/* compareVersions */.Zy)(b.version, a.version)
  );
  const options = [
    { value: LATEST_VERSION_VALUE, label: "Automatically update to latest" }
  ];
  sorted.forEach((v) => {
    options.push({ value: v.version, label: `Pin to ${v.version}` });
  });
  if (sorted.length) {
    const major = majorOf(sorted[0].version);
    options.push({
      value: `^${major}`,
      label: `Pin to major version (${major})`
    });
  }
  return options;
};
const getPreselectedVersionValue = (pinnedVersion) => pinnedVersion || LATEST_VERSION_VALUE;

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/VersionsModal/VersionsModal.tsx

var VersionsModal_async = (__this, __arguments, generator) => {
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










const VersionsModal_baseClass = "versions-modal";
const VersionsModal = ({
  softwareTitle,
  softwareId,
  teamId,
  refetchSoftwareTitle,
  onExit
}) => {
  const pkg = softwareTitle.software_package;
  const initialValue = getPreselectedVersionValue(pkg == null ? void 0 : pkg.pinned_version);
  const options = (0,react.useMemo)(() => {
    var _a;
    const opts = deriveVersionOptions((_a = pkg == null ? void 0 : pkg.fleet_maintained_versions) != null ? _a : []);
    if (initialValue && !opts.some((o) => o.value === initialValue)) {
      const label = initialValue.startsWith("^") ? `Pin to major version (${initialValue.slice(1)})` : `Pin to ${initialValue}`;
      opts.push({ value: initialValue, label });
    }
    return opts;
  }, [pkg == null ? void 0 : pkg.fleet_maintained_versions, initialValue]);
  const [selectedValue, setSelectedValue] = (0,react.useState)(initialValue);
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const hasChanges = selectedValue !== initialValue;
  const onSave = (evt) => VersionsModal_async(null, null, function* () {
    evt.preventDefault();
    setIsSaving(true);
    try {
      yield entities_software/* default */.A.editSoftwarePackage({
        data: { pinnedVersion: selectedValue },
        softwareId,
        teamId
      });
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully updated", " ", /* @__PURE__ */ react.createElement("b", null, (0,helpers/* getDisplayedSoftwareName */.Yd)(
          softwareTitle.name,
          softwareTitle.display_name
        )), " ", "version.")
      );
      refetchSoftwareTitle();
      onExit();
    } catch (error) {
      ToastNotification/* notify */.me.error("Couldn't update version. Please try again.");
      setIsSaving(false);
    }
  });
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: VersionsModal_baseClass, title: "Versions", onExit }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("fieldset", { className: `${VersionsModal_baseClass}__form form-field` }, options.map((option) => {
    const optionId = option.value || "latest";
    return /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        key: optionId,
        name: "versionPin",
        id: `version-pin-${optionId}`,
        label: option.label,
        value: option.value,
        checked: selectedValue === option.value,
        onChange: setSelectedValue
      }
    );
  })), /* @__PURE__ */ react.createElement(
    ModalFooter/* default */.A,
    {
      primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          entityType: "software",
          position: "top",
          tipOffset: 8,
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              type: "submit",
              onClick: onSave,
              isLoading: isSaving,
              disabled: !hasChanges || isSaving || !!disableChildren
            },
            "Save"
          )
        }
      ))
    }
  )));
};
/* harmony default export */ var VersionsModal_VersionsModal = (VersionsModal);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/VersionsModal/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/SoftwareTitleDetailsPage.tsx

var SoftwareTitleDetailsPage_defProp = Object.defineProperty;
var SoftwareTitleDetailsPage_defProps = Object.defineProperties;
var SoftwareTitleDetailsPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SoftwareTitleDetailsPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SoftwareTitleDetailsPage_hasOwnProp = Object.prototype.hasOwnProperty;
var SoftwareTitleDetailsPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var SoftwareTitleDetailsPage_defNormalProp = (obj, key, value) => key in obj ? SoftwareTitleDetailsPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SoftwareTitleDetailsPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SoftwareTitleDetailsPage_hasOwnProp.call(b, prop))
      SoftwareTitleDetailsPage_defNormalProp(a, prop, b[prop]);
  if (SoftwareTitleDetailsPage_getOwnPropSymbols)
    for (var prop of SoftwareTitleDetailsPage_getOwnPropSymbols(b)) {
      if (SoftwareTitleDetailsPage_propIsEnum.call(b, prop))
        SoftwareTitleDetailsPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SoftwareTitleDetailsPage_spreadProps = (a, b) => SoftwareTitleDetailsPage_defProps(a, SoftwareTitleDetailsPage_getOwnPropDescs(b));
var SoftwareTitleDetailsPage_async = (__this, __arguments, generator) => {
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



































const SoftwareTitleDetailsPage_baseClass = "software-title-details-page";
const pickLabels = (source) => {
  var _a, _b;
  if ((_a = source.labels_include_all) == null ? void 0 : _a.length) {
    return { labels: source.labels_include_all, kind: "includeAll" };
  }
  if ((_b = source.labels_exclude_any) == null ? void 0 : _b.length) {
    return { labels: source.labels_exclude_any, kind: "excludeAny" };
  }
  return { labels: source.labels_include_any, kind: "includeAny" };
};
const SoftwareTitleDetailsPage = ({
  router,
  routeParams,
  location
}) => {
  var _a;
  const { isPremiumTier, isOnGlobalTeam, currentUser, config } = (0,react.useContext)(
    app/* AppContext */.BR
  );
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const queryClient = (0,es.useQueryClient)();
  const softwareId = parseInt(routeParams.id, 10);
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const {
    currentTeamId,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true
  });
  const canEditSoftware = (0,permissions/* canWriteSoftware */.T1)(currentUser, currentTeamId != null ? currentTeamId : null);
  const canDownloadInstaller = (0,permissions/* canDownloadSoftwareInstaller */.kp)(
    currentUser,
    currentTeamId != null ? currentTeamId : null
  );
  const [showLibraryEditModal, setShowLibraryEditModal] = (0,react.useState)(false);
  const [showDeleteModal, setShowDeleteModal] = (0,react.useState)(false);
  const [showAddPackageModal, setShowAddPackageModal] = (0,react.useState)(false);
  const [selectedPackagePolicies, setSelectedPackagePolicies] = (0,react.useState)(null);
  const [selectedInstallerId, setSelectedInstallerId] = (0,react.useState)(
    null
  );
  const [showVersionsModal, setShowVersionsModal] = (0,react.useState)(false);
  const {
    data: softwareTitle,
    isLoading: isSoftwareTitleLoading,
    isError: isSoftwareTitleError,
    refetch: refetchSoftwareTitle
  } = (0,es.useQuery)(
    [{ scope: "softwareById", softwareId, teamId: teamIdForApi }],
    ({ queryKey }) => entities_software/* default */.A.getSoftwareTitle(queryKey[0]),
    SoftwareTitleDetailsPage_spreadProps(SoftwareTitleDetailsPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      select: (data) => data.software_title,
      onError: (error) => {
        if (!(0,errors/* ignoreAxiosError */.j8)(error, [403, 404])) {
          handlePageError(error);
        }
      }
    })
  );
  const isAvailableForInstall = !!(softwareTitle == null ? void 0 : softwareTitle.software_package) || !!(softwareTitle == null ? void 0 : softwareTitle.app_store_app);
  const installerResult = useSoftwareInstaller(
    softwareTitle != null ? softwareTitle : {}
  );
  const canActivateMultiplePackages = !!isPremiumTier && !!(installerResult == null ? void 0 : installerResult.meta.isCustomPackage) && !installerResult.meta.isIosOrIpadosApp;
  const onDeleteInstaller = (0,react.useCallback)(() => {
    var _a2;
    queryClient.invalidateQueries({ queryKey: [{ scope: "software-titles" }] });
    queryClient.invalidateQueries({
      queryKey: [{ scope: "software-library" }]
    });
    if ((_a2 = softwareTitle == null ? void 0 : softwareTitle.versions) == null ? void 0 : _a2.length) {
      refetchSoftwareTitle();
      return;
    }
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_LIBRARY, {
        fleet_id: teamIdForApi
      })
    );
  }, [queryClient, refetchSoftwareTitle, router, softwareTitle, teamIdForApi]);
  const onDownloadInstaller = (0,react.useCallback)(
    (pkg) => SoftwareTitleDetailsPage_async(null, null, function* () {
      const target = resolveDownloadTarget(
        pkg,
        softwareTitle == null ? void 0 : softwareTitle.software_package
      );
      if (!target || typeof teamIdForApi !== "number") return;
      try {
        const resp = yield entities_software/* default */.A.getSoftwarePackageToken(
          softwareId,
          teamIdForApi,
          target.installer_id
        );
        if (!resp.token) {
          throw new Error("No download token returned");
        }
        const a = document.createElement("a");
        a.href = buildInstallerDownloadUrl(softwareId, resp.token);
        a.download = target.name;
        a.click();
        a.remove();
      } catch (e) {
        ToastNotification/* notify */.me.error("Couldn't download. Please try again.");
      }
    }),
    [softwareId, softwareTitle, teamIdForApi]
  );
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      handleTeamChange(teamId);
    },
    [handleTeamChange]
  );
  const renderSoftwareSummaryCard = (title) => {
    return /* @__PURE__ */ react.createElement(
      SoftwareSummaryCard_SoftwareSummaryCard,
      {
        softwareTitle: title,
        softwareId,
        teamId: teamIdForApi,
        router,
        refetchSoftwareTitle,
        onClickVersions: () => setShowVersionsModal(true),
        canActivateMultiplePackages
      }
    );
  };
  const renderLibrarySection = (title) => {
    var _a2;
    if (!isPremiumTier || !isAvailableForInstall) {
      return null;
    }
    const packages = (_a2 = title.packages) != null ? _a2 : title.software_package ? [title.software_package] : [];
    const appStore = title.app_store_app;
    if (packages.length === 0 && !appStore) {
      return null;
    }
    const openEditModal = (id) => {
      setSelectedInstallerId(id != null ? id : null);
      setShowLibraryEditModal(true);
    };
    const openDeleteModal = (id) => {
      setSelectedInstallerId(id != null ? id : null);
      setShowDeleteModal(true);
    };
    const statusPath = (software_status) => (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_HOSTS, {
      software_title_id: softwareId,
      software_status,
      fleet_id: currentTeamId != null ? currentTeamId : team/* APP_CONTEXT_NO_TEAM_ID */.Gl
    });
    const renderAppStoreRow = () => {
      var _a3, _b, _c, _d, _e, _f;
      if (!appStore) return null;
      const { labels, kind } = pickLabels(appStore);
      const isAndroidPlayStoreApp = appStore.platform === "android";
      const isIosOrIpadosApp = (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(title.source);
      return /* @__PURE__ */ react.createElement(
        LibraryItemAccordion_LibraryItemAccordion,
        {
          filename: appStore.name,
          version: appStore.latest_version,
          addedAt: appStore.created_at,
          installerType: "app-store",
          androidPlayStoreId: isAndroidPlayStoreApp ? appStore.app_store_id : void 0,
          isIosOrIpadosApp,
          isActive: true,
          badgeState: "latest",
          labels,
          labelKind: kind,
          canEditSoftware,
          installed: (_b = (_a3 = appStore.status) == null ? void 0 : _a3.installed) != null ? _b : 0,
          pending: (_d = (_c = appStore.status) == null ? void 0 : _c.pending) != null ? _d : 0,
          failed: (_f = (_e = appStore.status) == null ? void 0 : _e.failed) != null ? _f : 0,
          installedPath: statusPath("installed"),
          pendingPath: statusPath("pending"),
          failedPath: statusPath("failed"),
          onLabelCountClick: () => openEditModal(),
          onLabelsClick: () => openEditModal(),
          onEditClick: () => openEditModal(),
          onTrashClick: () => openDeleteModal()
        }
      );
    };
    const renderPackageRows = (pkg) => {
      var _a3, _b, _c;
      if (!pkg) return null;
      const { labels, kind } = pickLabels(pkg);
      const isFma = (_a3 = installerResult == null ? void 0 : installerResult.meta.isFleetMaintainedApp) != null ? _a3 : false;
      const isLatestFmaVersion = (_b = installerResult == null ? void 0 : installerResult.meta.isLatestFmaVersion) != null ? _b : false;
      const isScriptPackage = (_c = installerResult == null ? void 0 : installerResult.cardInfo.isScriptPackage) != null ? _c : false;
      const isIosOrIpadosApp = (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(title.source);
      const perPackagePolicies = (0,helpers/* mergePolicies */.$p)({
        automaticInstallPolicies: pkg.automatic_install_policies,
        patchPolicy: pkg.patch_policy
      });
      const hasAutoInstallPolicy = perPackagePolicies.length > 0;
      const { installed, pending, failed } = (0,interfaces_software/* aggregateInstallStatusCounts */.BY)(
        pkg.status
      );
      const rows = buildLibraryVersionRows({
        fleetMaintainedVersions: pkg.fleet_maintained_versions,
        activeVersion: pkg.version,
        pinnedVersion: pkg.pinned_version,
        addedTimestamp: pkg.uploaded_at
      });
      return rows.map((row) => {
        var _a4, _b2;
        return /* @__PURE__ */ react.createElement(
          LibraryItemAccordion_LibraryItemAccordion,
          {
            key: `${pkg.installer_id}-${row.id}`,
            filename: (_a4 = row.filename) != null ? _a4 : pkg.name,
            version: row.version,
            addedAt: row.uploaded_at,
            installerType: "package",
            isFma,
            isLatestFmaVersion: row.isActive && isLatestFmaVersion,
            isScriptPackage,
            source: title.source,
            isTarballPackage: title.source === "tgz_packages",
            isIosOrIpadosApp,
            isActive: row.isActive,
            badgeState: row.badgeState,
            canActivateMultiplePackages,
            isSelfService: pkg.self_service,
            hasAutoInstallPolicy,
            labels: row.isActive ? labels : null,
            labelKind: kind,
            canEditSoftware,
            installed: row.isActive ? installed : 0,
            pending: row.isActive ? pending : 0,
            failed: row.isActive ? failed : 0,
            installedPath: statusPath("installed"),
            pendingPath: statusPath("pending"),
            failedPath: statusPath("failed"),
            hashSha256: row.isActive ? (_b2 = pkg.hash_sha256) != null ? _b2 : null : null,
            canDownload: canDownloadInstallerRow(
              row.isActive,
              canDownloadInstaller
            ),
            onBadgeClick: isFma && canEditSoftware ? () => setShowVersionsModal(true) : void 0,
            onLabelCountClick: () => openEditModal(pkg.installer_id),
            onLabelsClick: () => openEditModal(pkg.installer_id),
            onEditClick: () => openEditModal(pkg.installer_id),
            onDownloadClick: () => onDownloadInstaller(pkg),
            onTrashClick: () => openDeleteModal(pkg.installer_id),
            onSelfServiceClick: () => openEditModal(pkg.installer_id),
            onAutoInstallClick: () => {
              if (perPackagePolicies.length === 1) {
                router.push(
                  (0,url/* getPathWithQueryParams */.M8)(
                    paths/* default */.A.POLICY_DETAILS(perPackagePolicies[0].id),
                    { fleet_id: teamIdForApi }
                  )
                );
                return;
              }
              setSelectedPackagePolicies(perPackagePolicies);
            }
          }
        );
      });
    };
    const showAddPackageAction = canActivateMultiplePackages && canEditSoftware;
    const atPackageLimit = packages.length >= interfaces_software/* MAX_PACKAGES_PER_TITLE */.Of;
    const addPackageButton = showAddPackageAction && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "secondary",
        onClick: () => setShowAddPackageModal(true),
        disabled: atPackageLimit,
        icon: "plus"
      },
      "Add package"
    );
    const headerAction = showAddPackageAction && atPackageLimit ? /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "This title already has ", interfaces_software/* MAX_PACKAGES_PER_TITLE */.Of, " packages. Delete one you no longer use before adding."),
        showArrow: true,
        position: "left",
        underline: false
      },
      addPackageButton
    ) : addPackageButton;
    return /* @__PURE__ */ react.createElement("section", { className: `${SoftwareTitleDetailsPage_baseClass}__section` }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Library" }), /* @__PURE__ */ react.createElement("div", { className: `${SoftwareTitleDetailsPage_baseClass}__library-description-row` }, /* @__PURE__ */ react.createElement(
      PageDescription/* default */.A,
      {
        content: canActivateMultiplePackages && canEditSoftware ? "Add packages for a staged rollout or to support multiple architectures." : "Software available to be installed"
      }
    ), headerAction), /* @__PURE__ */ react.createElement(LibraryItemAccordion_LibraryItemAccordionList, null, appStore ? renderAppStoreRow() : packages.map(renderPackageRows)));
  };
  const renderInventorySection = (title) => {
    var _a2;
    const showInventorySection = !!title.hosts_count && !interfaces_software/* NO_VERSION_OR_HOST_DATA_SOURCES */.gm.includes(title.source);
    if (!showInventorySection) {
      return null;
    }
    return /* @__PURE__ */ react.createElement("section", { className: `${SoftwareTitleDetailsPage_baseClass}__section` }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Inventory" }), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "Versions installed across all hosts" }), /* @__PURE__ */ react.createElement(
      TitleVersionsTable_TitleVersionsTable,
      {
        router,
        data: (_a2 = title.versions) != null ? _a2 : [],
        source: title.source,
        isLoading: isSoftwareTitleLoading,
        teamIdForApi,
        isIPadOSOrIOSApp: (0,interfaces_software/* isIpadOrIphoneSoftwareSource */.bV)(title.source),
        isAvailableForInstall,
        countsUpdatedAt: title.counts_updated_at
      }
    ));
  };
  const findSelectedPackage = (title) => {
    var _a2, _b;
    if (selectedInstallerId === null) return null;
    return (_b = (_a2 = title.packages) == null ? void 0 : _a2.find((p) => p.installer_id === selectedInstallerId)) != null ? _b : null;
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedInstallerId(null);
  };
  const closeLibraryEditModal = () => {
    setShowLibraryEditModal(false);
    setSelectedInstallerId(null);
  };
  const renderDeleteModal = (title) => {
    if (!showDeleteModal || typeof teamIdForApi !== "number") return null;
    const meta = installerResult == null ? void 0 : installerResult.meta;
    const isAndroidApp = !!(meta == null ? void 0 : meta.isAndroidPlayStoreApp);
    const isAppStoreApp = (meta == null ? void 0 : meta.installerType) === "app-store" && !isAndroidApp;
    const selected = findSelectedPackage(title);
    return /* @__PURE__ */ react.createElement(
      DeleteSoftwareModal_DeleteSoftwareModal,
      {
        softwareId,
        teamId: teamIdForApi,
        installerId: selected == null ? void 0 : selected.installer_id,
        gitOpsModeEnabled,
        isAppStoreApp,
        isAndroidApp,
        canActivateMultiplePackages,
        onExit: closeDeleteModal,
        onSuccess: () => {
          closeDeleteModal();
          onDeleteInstaller();
        }
      }
    );
  };
  const renderLibraryEditModal = (title) => {
    if (!showLibraryEditModal || !installerResult) return null;
    const { meta } = installerResult;
    const selected = findSelectedPackage(title);
    return /* @__PURE__ */ react.createElement(
      EditSoftwareModal_EditSoftwareModal,
      {
        softwareId,
        teamId: currentTeamId != null ? currentTeamId : team/* APP_CONTEXT_NO_TEAM_ID */.Gl,
        installerId: selected == null ? void 0 : selected.installer_id,
        softwareInstaller: selected != null ? selected : meta.softwareInstaller,
        refetchSoftwareTitle,
        onExit: closeLibraryEditModal,
        installerType: meta.installerType,
        isFleetMaintainedApp: meta.isFleetMaintainedApp,
        isIosOrIpadosApp: meta.isIosOrIpadosApp,
        name: title.name,
        displayName: (0,helpers/* getDisplayedSoftwareName */.Yd)(title.name, title.display_name),
        source: title.source,
        iconUrl: title.icon_url,
        canActivateMultiplePackages
      }
    );
  };
  const renderPackagePoliciesModal = () => {
    if (!selectedPackagePolicies) return null;
    return /* @__PURE__ */ react.createElement(
      PoliciesModal_PoliciesModal,
      {
        policies: selectedPackagePolicies,
        teamId: teamIdForApi,
        onExit: () => setSelectedPackagePolicies(null)
      }
    );
  };
  const renderAddPackageModal = (title) => {
    var _a2, _b, _c, _d, _e;
    if (!showAddPackageModal || typeof teamIdForApi !== "number") return null;
    const existingPackageName = (_e = (_d = (_b = (_a2 = title.packages) == null ? void 0 : _a2[0]) == null ? void 0 : _b.name) != null ? _d : (_c = title.software_package) == null ? void 0 : _c.name) != null ? _e : "";
    return /* @__PURE__ */ react.createElement(
      AddPackageModal_AddPackageModal,
      {
        softwareTitleId: softwareId,
        softwareTitleName: (0,helpers/* getDisplayedSoftwareName */.Yd)(
          title.name,
          title.display_name
        ),
        teamId: teamIdForApi,
        existingPackageName,
        onExit: () => setShowAddPackageModal(false),
        onSuccess: () => {
          setShowAddPackageModal(false);
          refetchSoftwareTitle();
        }
      }
    );
  };
  const renderVersionsModal = (title) => {
    if (!showVersionsModal || !title.software_package || typeof teamIdForApi !== "number") {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      VersionsModal_VersionsModal,
      {
        softwareTitle: title,
        softwareId,
        teamId: teamIdForApi,
        refetchSoftwareTitle,
        onExit: () => setShowVersionsModal(false)
      }
    );
  };
  const renderContent = () => {
    if (isSoftwareTitleLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isSoftwareTitleError) {
      return /* @__PURE__ */ react.createElement(
        DetailsNoHosts/* default */.A,
        {
          header: currentTeamId === team/* APP_CONTEXT_ALL_TEAMS_ID */.jc ? "Software not found" : "Software not found in this fleet",
          details: "Expecting to see software? Check back later."
        }
      );
    }
    if (softwareTitle) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, renderSoftwareSummaryCard(softwareTitle), renderLibrarySection(softwareTitle), renderInventorySection(softwareTitle), renderLibraryEditModal(softwareTitle), renderDeleteModal(softwareTitle), renderAddPackageModal(softwareTitle), renderPackagePoliciesModal(), renderVersionsModal(softwareTitle));
    }
    return null;
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: SoftwareTitleDetailsPage_baseClass }, isPremiumTier && !((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo) && /* @__PURE__ */ react.createElement(
    TeamsHeader/* default */.A,
    {
      isOnGlobalTeam,
      currentTeamId,
      userTeams,
      onTeamChange
    }
  ), /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent()));
};
/* harmony default export */ var SoftwareTitleDetailsPage_SoftwareTitleDetailsPage = (SoftwareTitleDetailsPage);

;// ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/index.ts




/***/ }),

/***/ 94580:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareVersionDetailsPage_SoftwareVersionDetailsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TeamsHeader/index.ts + 1 modules
var TeamsHeader = __webpack_require__(48392);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/services/entities/host_count.ts
var host_count = __webpack_require__(12740);
// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var entities_software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/DetailsNoHosts/index.ts + 1 modules
var DetailsNoHosts = __webpack_require__(49634);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/SoftwareDetailsSummary/index.ts
var SoftwareDetailsSummary = __webpack_require__(71436);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/SoftwareVulnerabilitiesTable/index.ts
var SoftwareVulnerabilitiesTable = __webpack_require__(82296);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/SoftwareVulnerabilitiesTable/SoftwareVulnerabilitiesTable.tsx + 1 modules
var SoftwareVulnerabilitiesTable_SoftwareVulnerabilitiesTable = __webpack_require__(56884);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
;// ./frontend/pages/SoftwarePage/SoftwareVersionDetailsPage/SoftwareVersionDetailsPage.tsx

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



















const baseClass = "software-version-details-page";
const getVulnUnsupportedSourceText = (source) => {
  if ((0,software/* isAndroidSoftwareSource */._K)(source)) return "Android";
  if ((0,software/* isIpadOrIphoneSoftwareSource */.bV)(source)) {
    return source === "ios_apps" ? "iOS" : "iPadOS";
  }
  return void 0;
};
const SoftwareVersionDetailsPage = ({
  routeParams,
  router,
  location
}) => {
  const { isPremiumTier, isOnGlobalTeam, config } = (0,react.useContext)(app/* AppContext */.BR);
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const versionId = parseInt(routeParams.id, 10);
  const {
    currentTeamId,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true
  });
  const {
    data: softwareVersion,
    isLoading: isSoftwareVersionLoading,
    isError: isSoftwareVersionError
  } = (0,es.useQuery)(
    [{ scope: "softwareVersion", versionId, teamId: teamIdForApi }],
    ({ queryKey }) => entities_software/* default */.A.getSoftwareVersion(queryKey[0]),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      select: (data) => data.software,
      onError: (error) => {
        if (!(0,errors/* ignoreAxiosError */.j8)(error, [403, 404])) {
          handlePageError(error);
        }
      }
    })
  );
  const { data: hostsCount } = (0,es.useQuery)(
    [{ scope: "hosts_count", softwareVersionId: versionId }],
    ({ queryKey }) => host_count/* default */.A.load(queryKey[0]),
    {
      keepPreviousData: true,
      staleTime: 1e4,
      // stale time can be adjusted if fresher data is desired
      select: (data) => data.count
    }
  );
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      handleTeamChange(teamId);
    },
    [handleTeamChange]
  );
  const renderVulnTable = (swVersion) => {
    var _a;
    const vulnUnsupportedSource = getVulnUnsupportedSourceText(
      swVersion.source
    );
    if (vulnUnsupportedSource) {
      return /* @__PURE__ */ react.createElement(SoftwareVulnerabilitiesTable_SoftwareVulnerabilitiesTable/* VulnsNotSupported */.s, { platformText: vulnUnsupportedSource });
    }
    return /* @__PURE__ */ react.createElement(
      SoftwareVulnerabilitiesTable/* default */.A,
      {
        data: (_a = swVersion.vulnerabilities) != null ? _a : [],
        itemName: "software item",
        isLoading: isSoftwareVersionLoading,
        router,
        teamIdForApi
      }
    );
  };
  const renderContent = () => {
    var _a;
    if (isSoftwareVersionLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (!softwareVersion && !isSoftwareVersionError) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, isPremiumTier && !((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo) && /* @__PURE__ */ react.createElement(
      TeamsHeader/* default */.A,
      {
        isOnGlobalTeam,
        currentTeamId,
        userTeams,
        onTeamChange
      }
    ), isSoftwareVersionError ? /* @__PURE__ */ react.createElement(
      DetailsNoHosts/* default */.A,
      {
        header: "Software not detected",
        details: "No hosts have this software installed."
      }
    ) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${baseClass}__summary-section` }, /* @__PURE__ */ react.createElement(
      SoftwareDetailsSummary/* default */.A,
      {
        displayName: `${(0,helpers/* getDisplayedSoftwareName */.Yd)(
          softwareVersion.name,
          softwareVersion.display_name,
          softwareVersion.bundle_identifier
        )}, ${(0,software/* formatSoftwareVersion */.hK)(softwareVersion)}`,
        type: (0,software/* formatSoftwareType */.Nt)(softwareVersion),
        hostCount: hostsCount,
        queryParams: {
          software_version_id: softwareVersion.id,
          fleet_id: teamIdForApi
        },
        name: softwareVersion.name,
        source: softwareVersion.source
      }
    )), /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${baseClass}__vulnerabilities-section` }, /* @__PURE__ */ react.createElement("h2", { className: "section__header" }, "Vulnerabilities"), renderVulnTable(softwareVersion))));
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent()));
};
/* harmony default export */ var SoftwareVersionDetailsPage_SoftwareVersionDetailsPage = (SoftwareVersionDetailsPage);

;// ./frontend/pages/SoftwarePage/SoftwareVersionDetailsPage/index.ts




/***/ }),

/***/ 61133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareVulnerabilities_SoftwareVulnerabilities; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/services/entities/vulnerabilities.ts
var vulnerabilities = __webpack_require__(4514);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/strings/stringUtils.ts
var stringUtils = __webpack_require__(18165);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
;// ./frontend/pages/SoftwarePage/components/tables/SoftwareVulnerabilitiesTable/EmptyVulnerabilitiesTable/EmptyVulnerabilitiesTable.tsx

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



const LearnMoreLink = () => /* @__PURE__ */ react.createElement(
  CustomLink/* default */.A,
  {
    url: "https://fleetdm.com/learn-more-about/vulnerability-processing",
    text: "Learn more",
    newTab: true
  }
);
const emptyStateDetails = {
  "no-vulns-detected": {
    header: "No vulnerabilities detected",
    info: "Vulnerability data will appear after the next scheduled check-in."
  },
  "no-matching-items": {
    header: "No items match the current search criteria",
    info: "Expecting to see vulnerabilities? Check back later."
  },
  "invalid-cve": {
    header: "That vulnerability (CVE) is not valid",
    info: 'Try updating your search to use CVE format: "CVE-YYYY-<4 or more digits>"'
  },
  "unknown-cve": {
    header: "This is not a known CVE",
    info: "None of Fleet's vulnerability sources are aware of this CVE.",
    additionalInfo: /* @__PURE__ */ react.createElement(LearnMoreLink, null)
  },
  "known-vuln": {
    header: "This is a known vulnerability (CVE), but it wasn't detected on any hosts",
    additionalInfo: /* @__PURE__ */ react.createElement(LearnMoreLink, null)
  }
};
const EmptyVulnerabilitiesTable = ({
  isPremiumTier,
  teamId,
  exploitedFilter,
  isSoftwareDisabled,
  emptyStateReason
}) => {
  if (isSoftwareDisabled) {
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        header: "Software inventory disabled",
        info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Users with the admin role can", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: "https://fleetdm.com/docs/using-fleet/vulnerability-processing#configuration",
            text: "turn on software inventory",
            newTab: true
          }
        ), ".")
      }
    );
  }
  const defaultEmptyState = {
    header: "No items match the current search criteria",
    info: "Expecting to see vulnerabilities? Check back later."
  };
  const emptyState = emptyStateReason ? __spreadValues(__spreadValues({}, defaultEmptyState), emptyStateDetails[emptyStateReason]) : defaultEmptyState;
  if (emptyStateReason === "known-vuln" && teamId !== void 0) {
    emptyState.header += " in this fleet";
  }
  if (isPremiumTier && exploitedFilter && emptyStateReason !== "unknown-cve" && emptyStateReason !== "invalid-cve") {
    emptyState.info = "Try removing the exploited vulnerabilities filter to expand your search.";
  }
  return /* @__PURE__ */ react.createElement(EmptyState/* default */.A, __spreadValues({}, emptyState));
};
/* harmony default export */ var EmptyVulnerabilitiesTable_EmptyVulnerabilitiesTable = (EmptyVulnerabilitiesTable);

;// ./frontend/pages/SoftwarePage/components/tables/SoftwareVulnerabilitiesTable/EmptyVulnerabilitiesTable/index.ts



// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilities/SoftwareVulnerabilitiesTable/helpers.ts

const getExploitedVulnerabilitiesDropdownOptions = (isPremiumTier = false) => {
  const disabledTooltipContent = "Available in Fleet Premium.";
  return [
    {
      isDisabled: false,
      label: "All vulnerabilities",
      value: "false",
      helpText: "All vulnerabilities detected on your hosts."
    },
    {
      isDisabled: !isPremiumTier,
      label: "Exploited vulnerabilities",
      value: "true",
      helpText: "Vulnerabilities that have been actively exploited in the wild.",
      tooltipContent: !isPremiumTier ? disabledTooltipContent : void 0
    }
  ];
};
const isValidCVEFormat = (query) => {
  if (query.length < 9) {
    return false;
  }
  const cveRegex = /^CVE-\d{4}-\d{4,}$/i;
  return cveRegex.test(query);
};

// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/ProbabilityOfExploit/ProbabilityOfExploit.tsx
var ProbabilityOfExploit = __webpack_require__(39435);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/interfaces/operating_system.ts
var operating_system = __webpack_require__(49817);
;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilities/SoftwareVulnerabilitiesTable/VulnerabilitiesTableConfig.tsx













const generateTableHeaders = (isPremiumTier, router, configOptions, teamId) => {
  const tableHeaders = [
    {
      title: "Vulnerability",
      Header: "Vulnerability",
      disableSortBy: true,
      accessor: "cve",
      Cell: (cellProps) => {
        if (!(configOptions == null ? void 0 : configOptions.includeIcon)) {
          return /* @__PURE__ */ react.createElement(
            TextCell/* default */.A,
            {
              value: cellProps.cell.value,
              formatter: (name) => (0,operating_system/* formatOperatingSystemDisplayName */.xE)(name)
            }
          );
        }
        const { cve } = cellProps.row.original;
        const softwareVulnerabilitiesDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_VULNERABILITY_DETAILS(cve),
          { fleet_id: teamId }
        );
        const onClickVulnerability = (e) => {
          e.stopPropagation();
          router == null ? void 0 : router.push(softwareVulnerabilitiesDetailsPath);
        };
        return /* @__PURE__ */ react.createElement(
          LinkCell/* default */.A,
          {
            path: softwareVulnerabilitiesDetailsPath,
            customOnClick: onClickVulnerability,
            value: cve
          }
        );
      }
    },
    {
      title: "Severity",
      accessor: "cvss_score",
      disableSortBy: false,
      Header: (headerProps) => {
        const titleWithTooltip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The worst case impact across different environments (CVSS version 3.x base score).")
          },
          "Severity"
        );
        return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithTooltip,
            isSortedDesc: headerProps.column.isSortedDesc
          }
        ));
      },
      Cell: ({ cell: { value } }) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { formatter: helpers/* formatSeverity */.JE, value })
    },
    {
      title: "Probability of exploit",
      accessor: "epss_probability",
      disableSortBy: false,
      Header: (headerProps) => {
        const titleWithTooltip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            className: "epss_probability",
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The probability that this vulnerability will be exploited in the next 30 days (EPSS probability). ", /* @__PURE__ */ react.createElement("br", null), "This data is reported by FIRST.org."),
            fixedPositionStrategy: true
          },
          "Probability of exploit"
        );
        return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithTooltip,
            isSortedDesc: headerProps.column.isSortedDesc
          }
        ));
      },
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        ProbabilityOfExploit/* default */.A,
        {
          probabilityOfExploit: cellProps.row.original.epss_probability,
          cisaKnownExploit: cellProps.row.original.cisa_known_exploit
        }
      )
    },
    {
      title: "Published",
      accessor: "cve_published",
      disableSortBy: false,
      Header: (headerProps) => {
        const titleWithTooltip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The date this vulnerability was published in the National Vulnerability Database (NVD).")
          },
          "Published"
        );
        return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithTooltip,
            isSortedDesc: headerProps.column.isSortedDesc
          }
        ));
      },
      Cell: ({ cell: { value } }) => {
        const valString = typeof value === "number" ? value.toString() : value;
        return /* @__PURE__ */ react.createElement(
          TextCell/* default */.A,
          {
            value: valString ? { timeString: valString } : void 0,
            formatter: valString ? HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T : void 0
          }
        );
      }
    },
    {
      title: "Detected",
      accessor: "created_at",
      disableSortBy: false,
      Header: (headerProps) => {
        const titleWithTooltip = /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The date this vulnerability first appeared on a host.")
          },
          "Detected"
        );
        return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: titleWithTooltip,
            isSortedDesc: headerProps.column.isSortedDesc
          }
        ));
      },
      Cell: (cellProps) => {
        const createdAt = cellProps.row.original.created_at || "";
        return /* @__PURE__ */ react.createElement(
          TextCell/* default */.A,
          {
            value: { timeString: createdAt },
            formatter: HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T
          }
        );
      }
    },
    {
      title: "Hosts",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Hosts",
          disableSortBy: false,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      accessor: "hosts_count",
      Cell: (cellProps) => {
        const { hosts_count } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: hosts_count });
      }
    },
    {
      title: "",
      Header: "",
      accessor: "linkToFilteredHosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(react.Fragment, null, cellProps.row.original && /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              vulnerability: cellProps.row.original.cve,
              fleet_id: teamId
            },
            className: "vulnerabilities-link",
            rowHover: true
          }
        ));
      }
    }
  ];
  if (!isPremiumTier) {
    return tableHeaders.filter(
      (header) => header.accessor !== "epss_probability" && header.accessor !== "cve_published" && header.accessor !== "cvss_score"
    );
  }
  return tableHeaders;
};
/* harmony default export */ var VulnerabilitiesTableConfig = (generateTableHeaders);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilities/SoftwareVulnerabilitiesTable/SoftwareVulnerabilitiesTable.tsx
















const baseClass = "software-vulnerabilities-table";
const SoftwareVulnerabilitiesTable = ({
  router,
  isSoftwareEnabled,
  data,
  emptyStateReason,
  query = "",
  perPage,
  orderDirection,
  orderKey,
  showExploitedVulnerabilitiesOnly,
  currentPage,
  teamId,
  isLoading
}) => {
  var _a, _b;
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const determineQueryParamChange = (0,react.useCallback)(
    (newTableQuery) => {
      var _a2;
      const changedEntry = Object.entries(newTableQuery).find(([key, val]) => {
        switch (key) {
          case "sortDirection":
            return val !== orderDirection;
          case "sortHeader":
            return val !== orderKey;
          case "pageIndex":
            return val !== currentPage;
          case "searchQuery":
            return val !== query;
          case "exploit":
            return val !== showExploitedVulnerabilitiesOnly.toString();
          default:
            return false;
        }
      });
      return (_a2 = changedEntry == null ? void 0 : changedEntry[0]) != null ? _a2 : "";
    },
    [
      currentPage,
      orderDirection,
      orderKey,
      query,
      showExploitedVulnerabilitiesOnly
    ]
  );
  const generateNewQueryParams = (0,react.useCallback)(
    (newTableQuery, changedParam) => {
      return {
        fleet_id: teamId,
        exploit: showExploitedVulnerabilitiesOnly.toString(),
        query: newTableQuery.searchQuery,
        order_direction: newTableQuery.sortDirection,
        order_key: newTableQuery.sortHeader,
        page: changedParam === "pageIndex" ? newTableQuery.pageIndex : 0
      };
    },
    [teamId, showExploitedVulnerabilitiesOnly]
  );
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      if ((0,stringUtils/* isIncompleteQuoteQuery */.XX)(newTableQuery.searchQuery)) {
        return;
      }
      const changedParam = determineQueryParamChange(newTableQuery);
      if (changedParam === "") return;
      const newRoute = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.SOFTWARE_VULNERABILITIES,
        routeTemplate: "",
        queryParams: generateNewQueryParams(newTableQuery, changedParam)
      });
      router.replace(newRoute);
    },
    [determineQueryParamChange, generateNewQueryParams, router]
  );
  const hasData = ((_b = (_a = data == null ? void 0 : data.vulnerabilities) == null ? void 0 : _a.length) != null ? _b : 0) > 0;
  const hasQuery = query !== "";
  const isTrulyEmpty = !hasData && !hasQuery && !showExploitedVulnerabilitiesOnly;
  const controlsDisabled = !isSoftwareEnabled || isTrulyEmpty;
  const vulnerabilitiesTableHeaders = (0,react.useMemo)(() => {
    if (!data) return [];
    return VulnerabilitiesTableConfig(
      isPremiumTier,
      router,
      {
        includeName: true,
        includeVulnerabilities: true,
        includeIcon: true
      },
      teamId
    );
  }, [data, isPremiumTier, router, teamId]);
  const handleExploitedVulnFilterDropdownChange = (isFilterExploited) => {
    router.replace(
      (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.SOFTWARE_VULNERABILITIES,
        routeTemplate: "",
        queryParams: {
          query,
          fleet_id: teamId,
          order_direction: orderDirection,
          order_key: orderKey,
          exploit: isFilterExploited,
          page: 0
          // resets page index
        }
      })
    );
  };
  const handleRowSelect = (row) => {
    if (row.original.cve) {
      const cveName = row.original.cve.toString();
      const softwareVulnerabilityDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
        paths/* default */.A.SOFTWARE_VULNERABILITY_DETAILS(cveName),
        {
          fleet_id: teamId
        }
      );
      router.push(softwareVulnerabilityDetailsPath);
    }
  };
  const renderVulnerabilityCount = () => {
    if (!data) return null;
    const count = data == null ? void 0 : data.count;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count }), (data == null ? void 0 : data.vulnerabilities) && (data == null ? void 0 : data.counts_updated_at) && /* @__PURE__ */ react.createElement(
      LastUpdatedText/* default */.A,
      {
        lastUpdatedAt: data.counts_updated_at,
        customTooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time software data was ", /* @__PURE__ */ react.createElement("br", null), "updated, including vulnerabilities ", /* @__PURE__ */ react.createElement("br", null), "and host counts.")
      }
    ));
  };
  const renderTableHelpText = () => {
    return /* @__PURE__ */ react.createElement("div", null, "Seeing unexpected software or vulnerabilities?", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: constants/* GITHUB_NEW_ISSUE_LINK */.CO,
        text: "File an issue on GitHub",
        newTab: true
      }
    ));
  };
  const renderExploitedVulnerabilitiesDropdown = () => {
    return /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        name: "exploited-vuln-filter",
        value: showExploitedVulnerabilitiesOnly.toString(),
        className: `${baseClass}__exploited-vulnerabilities-filter`,
        options: getExploitedVulnerabilitiesDropdownOptions(isPremiumTier),
        onChange: (newValue) => newValue && handleExploitedVulnFilterDropdownChange(newValue.value),
        variant: "table-filter",
        isDisabled: controlsDisabled
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: vulnerabilitiesTableHeaders,
      data: (data == null ? void 0 : data.vulnerabilities) || [],
      isLoading,
      resultsTitle: "items",
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyVulnerabilitiesTable_EmptyVulnerabilitiesTable,
        {
          isPremiumTier,
          teamId,
          exploitedFilter: showExploitedVulnerabilitiesOnly,
          isSoftwareDisabled: !isSoftwareEnabled,
          emptyStateReason
        }
      ),
      defaultSearchQuery: query,
      defaultSortHeader: orderKey,
      defaultSortDirection: orderDirection,
      pageIndex: currentPage,
      manualSortBy: true,
      pageSize: perPage,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableNextPage: !(data == null ? void 0 : data.meta.has_next_results),
      searchable: true,
      disableSearch: controlsDisabled,
      searchQueryColumn: "vulnerability",
      inputPlaceHolder: "Search by CVE",
      searchToolTipText: constants/* VULNERABILITIES_SEARCH_BOX_TOOLTIP */.wr,
      onQueryChange,
      customControl: renderExploitedVulnerabilitiesDropdown,
      stackControls: true,
      renderCount: renderVulnerabilityCount,
      renderTableHelpText,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect
    }
  ));
};
/* harmony default export */ var SoftwareVulnerabilitiesTable_SoftwareVulnerabilitiesTable = (SoftwareVulnerabilitiesTable);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilities/SoftwareVulnerabilitiesTable/index.ts



;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilities/SoftwareVulnerabilities.tsx

var SoftwareVulnerabilities_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SoftwareVulnerabilities_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SoftwareVulnerabilities_hasOwnProp = Object.prototype.hasOwnProperty;
var SoftwareVulnerabilities_propIsEnum = Object.prototype.propertyIsEnumerable;
var SoftwareVulnerabilities_defNormalProp = (obj, key, value) => key in obj ? SoftwareVulnerabilities_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SoftwareVulnerabilities_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SoftwareVulnerabilities_hasOwnProp.call(b, prop))
      SoftwareVulnerabilities_defNormalProp(a, prop, b[prop]);
  if (SoftwareVulnerabilities_getOwnPropSymbols)
    for (var prop of SoftwareVulnerabilities_getOwnPropSymbols(b)) {
      if (SoftwareVulnerabilities_propIsEnum.call(b, prop))
        SoftwareVulnerabilities_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









const SoftwareVulnerabilities_baseClass = "software-vulnerabilities";
const SoftwareVulnerabilities = ({
  router,
  isSoftwareEnabled,
  query,
  perPage,
  orderDirection,
  orderKey,
  currentPage,
  teamId,
  showExploitedVulnerabilitiesOnly
}) => {
  const [tableData, setTableData] = (0,react.useState)();
  const [
    emptyStateReason,
    setEmptyStateReason
  ] = (0,react.useState)();
  const queryParams = {
    page: currentPage,
    per_page: perPage,
    order_direction: orderDirection,
    order_key: orderKey,
    teamId,
    query,
    exploit: showExploitedVulnerabilitiesOnly
  };
  const isExactMatchQuery = (() => {
    if (query) {
      const pattern = /^(['"]).*\1$/;
      return pattern.test(query);
    }
    return false;
  })();
  const { isFetching, isLoading, isError } = (0,es.useQuery)(
    [
      SoftwareVulnerabilities_spreadValues({
        scope: "software-vulnerabilities"
      }, queryParams)
    ],
    () => (0,vulnerabilities/* getVulnerabilities */.J)(queryParams),
    {
      keepPreviousData: true,
      enabled: !isExactMatchQuery && isSoftwareEnabled,
      onSuccess: (data) => {
        setTableData(data);
        if (data.count === 0) {
          if (queryParams.exploit || queryParams.query && queryParams.query.length > 0) {
            setEmptyStateReason("no-matching-items");
          } else {
            setEmptyStateReason("no-vulns-detected");
          }
        }
      }
    }
  );
  const {
    isLoading: isLoadingExactMatch,
    isFetching: isFetchingExactMatch,
    refetch: refetchExactMatch
  } = (0,es.useQuery)(
    [
      {
        scope: "softwareVulnByCVE",
        vulnerability: query && (0,stringUtils/* stripQuotes */.Ir)(query) || "",
        teamId
      }
    ],
    ({ queryKey }) => {
      return vulnerabilities/* default */.A.getVulnerability(queryKey[0]);
    },
    __spreadProps(SoftwareVulnerabilities_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      onSuccess: (data) => {
        if (!data) {
          setTableData({
            count: 0,
            counts_updated_at: "",
            vulnerabilities: [],
            meta: {
              has_next_results: false,
              has_previous_results: false
            }
          });
          setEmptyStateReason("known-vuln");
        } else if (queryParams.exploit && !data.vulnerability.cisa_known_exploit) {
          setTableData({
            count: 0,
            counts_updated_at: "",
            vulnerabilities: [],
            meta: {
              has_next_results: false,
              has_previous_results: false
            }
          });
          setEmptyStateReason("no-matching-items");
        } else {
          setTableData({
            count: 1,
            counts_updated_at: data.vulnerability.hosts_count_updated_at,
            vulnerabilities: [data.vulnerability],
            meta: {
              has_next_results: false,
              has_previous_results: false
            }
          });
        }
      },
      onError: (err) => {
        var _a, _b;
        const error = err;
        if (error.status === 400) {
          if (((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.errors) && error.data.errors[0].reason.includes(
            "That vulnerability (CVE) is not valid."
          )) {
            setTableData({
              count: 0,
              counts_updated_at: "",
              vulnerabilities: [],
              meta: {
                has_next_results: false,
                has_previous_results: false
              }
            });
            setEmptyStateReason("invalid-cve");
          }
        } else if (error.status === 404) {
          if (((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.errors) && (error.data.errors[0].reason.includes("This is not a known CVE.") || error.data.errors[0].reason.includes(
            "was not found in the datastore"
          ))) {
            if (query && !isValidCVEFormat((0,stringUtils/* stripQuotes */.Ir)(query))) {
              setEmptyStateReason("invalid-cve");
            } else {
              setEmptyStateReason("unknown-cve");
            }
          }
          setTableData({
            count: 0,
            counts_updated_at: "",
            vulnerabilities: [],
            meta: {
              has_next_results: false,
              has_previous_results: false
            }
          });
        }
      },
      enabled: isExactMatchQuery && isSoftwareEnabled
    })
  );
  (0,react.useEffect)(() => {
    if (isExactMatchQuery) {
      refetchExactMatch();
    }
  }, [queryParams.exploit, isExactMatchQuery]);
  if (!tableData && (isLoading || isLoadingExactMatch)) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
  }
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareVulnerabilities_baseClass }, /* @__PURE__ */ react.createElement(
    SoftwareVulnerabilitiesTable_SoftwareVulnerabilitiesTable,
    {
      router,
      data: tableData,
      emptyStateReason,
      query,
      showExploitedVulnerabilitiesOnly,
      isSoftwareEnabled,
      perPage,
      orderDirection,
      orderKey,
      currentPage,
      teamId,
      isLoading: isFetching || isFetchingExactMatch
    }
  ));
};
/* harmony default export */ var SoftwareVulnerabilities_SoftwareVulnerabilities = (SoftwareVulnerabilities);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilities/index.ts




/***/ }),

/***/ 54676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwareVulnerabilityDetailsPage_SoftwareVulnerabilityDetailsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TeamsHeader/index.ts + 1 modules
var TeamsHeader = __webpack_require__(48392);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/services/entities/vulnerabilities.ts
var vulnerabilities = __webpack_require__(4514);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/cards/DetailsNoHosts/index.ts + 1 modules
var DetailsNoHosts = __webpack_require__(49634);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableContainer.tsx + 3 modules
var TableContainer_TableContainer = __webpack_require__(13566);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/OSIcon/index.ts + 1 modules
var OSIcon = __webpack_require__(90581);
;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnOSVersions/SwVulnOSTableConfig.tsx









const generateColumnConfigs = (isPremiumTier, router, teamIdForApi) => {
  const configs = [
    {
      Header: "Name",
      disableSortBy: true,
      accessor: "name_only",
      Cell: ({ row }) => {
        const { name, os_version_id, platform } = row.original;
        const path = (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_OS_DETAILS(os_version_id),
          { fleet_id: teamIdForApi }
        );
        return /* @__PURE__ */ react.createElement(
          LinkCell/* default */.A,
          {
            path,
            tooltipTruncate: true,
            prefix: /* @__PURE__ */ react.createElement(OSIcon/* default */.A, { name: platform }),
            value: name
          }
        );
      }
    },
    {
      Header: "Version",
      disableSortBy: true,
      accessor: "version",
      Cell: ({ cell }) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cell.value })
    },
    {
      Header: () => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: (
            // Wrapper span groups "Resolved in" and the suffix into a
            // single flex item under HeaderCell's wrapper span — keeps
            // them on one line without a flex gap appearing between them.
            /* @__PURE__ */ react.createElement("span", null, "Resolved in ", /* @__PURE__ */ react.createElement("span", { className: "resolved-suffix" }, "version"))
          ),
          disableSortBy: true
        }
      ),
      disableSortBy: true,
      accessor: "resolved_in_version",
      Cell: ({ cell }) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cell.value })
    },
    {
      Header: "Hosts",
      disableSortBy: true,
      accessor: "hosts_count",
      Cell: ({ row }) => {
        const { hosts_count } = row.original;
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: hosts_count });
      }
    },
    {
      Header: "",
      id: "view-all-hosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(react.Fragment, null, cellProps.row.original && /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              os_version_id: cellProps.row.original.os_version_id
            },
            responsive: true,
            rowHover: true
          }
        ));
      }
    }
  ];
  if (!isPremiumTier) {
    return configs.filter(
      (header) => header.accessor !== "resolved_in_version"
    );
  }
  return configs;
};
/* harmony default export */ var SwVulnOSTableConfig = (generateColumnConfigs);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnOSVersions/SoftwareVulnOSVersions.tsx









const baseClass = "software-vuln-os-versions";
const SoftwareVulnOSVersions = ({
  osVersions,
  isPremiumTier,
  router,
  teamIdForApi
}) => {
  const columnConfigs = (0,react.useMemo)(
    () => SwVulnOSTableConfig(isPremiumTier, router, teamIdForApi),
    [isPremiumTier, router, teamIdForApi]
  );
  const handleRowSelect = (row) => {
    if (row.original.os_version_id) {
      const softwareOsVersionId = Number(row.original.os_version_id);
      const softwareOsDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
        paths/* default */.A.SOFTWARE_OS_DETAILS(softwareOsVersionId),
        { fleet_id: teamIdForApi }
      );
      router.push(softwareOsDetailsPath);
    }
  };
  const renderVulnerableOSCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count: osVersions == null ? void 0 : osVersions.length });
  }, [osVersions == null ? void 0 : osVersions.length]);
  const renderVulnerableOSTable = () => {
    return /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        columnConfigs,
        data: osVersions,
        defaultSortHeader: "hosts",
        defaultSortDirection: "desc",
        isClientSidePagination: true,
        isLoading: false,
        emptyComponent: () => /* @__PURE__ */ react.createElement(react.Fragment, null),
        showMarkAllPages: false,
        isAllPagesSelected: false,
        disableMultiRowSelect: true,
        hideFooter: osVersions.length <= TableContainer_TableContainer/* DEFAULT_PAGE_SIZE */.y,
        onSelectSingleRow: handleRowSelect,
        renderCount: renderVulnerableOSCount
      }
    );
  };
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement("h2", null, "Vulnerable OS"), renderVulnerableOSTable());
};
/* harmony default export */ var SoftwareVulnOSVersions_SoftwareVulnOSVersions = (SoftwareVulnOSVersions);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnOSVersions/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnSoftwareVersions/SwVulnSwTableConfig.tsx










const SwVulnSwTableConfig_generateColumnConfigs = (isPremiumTier, router, teamIdForApi) => {
  const configs = [
    {
      Header: "Name",
      disableSortBy: true,
      accessor: "name",
      Cell: ({ row }) => {
        const { name, id, source } = row.original;
        const path = (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.SOFTWARE_VERSION_DETAILS(id.toString()),
          { fleet_id: teamIdForApi }
        );
        return /* @__PURE__ */ react.createElement(
          LinkCell/* default */.A,
          {
            path,
            tooltipTruncate: true,
            prefix: /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { name, source }),
            value: name
          }
        );
      }
    },
    {
      Header: "Version",
      disableSortBy: true,
      accessor: "version",
      Cell: ({ row }) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,software/* formatSoftwareVersion */.hK)(row.original) })
    },
    {
      Header: () => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: (
            // Wrapper span groups "Resolved in" and the suffix into a
            // single flex item under HeaderCell's wrapper span — keeps
            // them on one line without a flex gap appearing between them.
            /* @__PURE__ */ react.createElement("span", null, "Resolved in ", /* @__PURE__ */ react.createElement("span", { className: "resolved-suffix" }, "version"))
          ),
          disableSortBy: true
        }
      ),
      disableSortBy: true,
      accessor: "resolved_in_version",
      Cell: ({ cell }) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cell.value })
    },
    {
      Header: "Hosts",
      disableSortBy: true,
      accessor: "hosts_count",
      Cell: ({ row }) => {
        const { hosts_count } = row.original;
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: hosts_count });
      }
    },
    {
      Header: "",
      id: "view-all-hosts",
      disableSortBy: true,
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(react.Fragment, null, cellProps.row.original && /* @__PURE__ */ react.createElement(
          ViewAllHostsLink/* default */.A,
          {
            queryParams: {
              software_version_id: cellProps.row.original.id
            },
            responsive: true,
            rowHover: true
          }
        ));
      }
    }
  ];
  if (!isPremiumTier) {
    return configs.filter(
      (header) => header.accessor !== "resolved_in_version"
    );
  }
  return configs;
};
/* harmony default export */ var SwVulnSwTableConfig = (SwVulnSwTableConfig_generateColumnConfigs);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnSoftwareVersions/SoftwareVulnSoftwareVersions.tsx








const SoftwareVulnSoftwareVersions_baseClass = "software-vuln-software-versions";
const SoftwareVulnSoftwareVersions = ({
  vulnSoftware,
  isPremiumTier,
  router,
  teamIdForApi
}) => {
  const columnConfigs = (0,react.useMemo)(
    () => SwVulnSwTableConfig(isPremiumTier, router, teamIdForApi),
    [isPremiumTier, router, teamIdForApi]
  );
  const handleRowSelect = (row) => {
    if (row.original.id) {
      const softwareVersionId = row.original.id;
      const softwareVersionDetailsPath = (0,url/* getPathWithQueryParams */.M8)(
        paths/* default */.A.SOFTWARE_VERSION_DETAILS(softwareVersionId.toString()),
        {
          fleet_id: teamIdForApi
        }
      );
      router.push(softwareVersionDetailsPath);
    }
  };
  const renderVulnerableSoftwareCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "items", count: vulnSoftware == null ? void 0 : vulnSoftware.length });
  }, [vulnSoftware == null ? void 0 : vulnSoftware.length]);
  const renderVulnerableSoftwareTable = () => {
    return /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        columnConfigs,
        data: vulnSoftware,
        defaultSortHeader: "hosts",
        defaultSortDirection: "desc",
        isClientSidePagination: true,
        isLoading: false,
        emptyComponent: () => /* @__PURE__ */ react.createElement(react.Fragment, null),
        showMarkAllPages: false,
        isAllPagesSelected: false,
        disableMultiRowSelect: true,
        onSelectSingleRow: handleRowSelect,
        renderCount: renderVulnerableSoftwareCount
      }
    );
  };
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: SoftwareVulnSoftwareVersions_baseClass }, /* @__PURE__ */ react.createElement("h2", null, "Vulnerable software"), renderVulnerableSoftwareTable());
};
/* harmony default export */ var SoftwareVulnSoftwareVersions_SoftwareVulnSoftwareVersions = (SoftwareVulnSoftwareVersions);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnSoftwareVersions/index.ts



// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedHostCount/index.ts + 1 modules
var LastUpdatedHostCount = __webpack_require__(5719);
// EXTERNAL MODULE: ./frontend/components/ProbabilityOfExploit/ProbabilityOfExploit.tsx
var ProbabilityOfExploit = __webpack_require__(39435);
;// ./frontend/components/ProbabilityOfExploit/index.ts



// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnSummary/SoftwareVulnSummary.tsx











const SoftwareVulnSummary_baseClass = "software-vuln-summary";
const SoftwareVulnSummary = ({
  vuln,
  isPremiumTier,
  teamIdForApi
}) => {
  const {
    cve,
    details_link,
    cve_description,
    cvss_score,
    epss_probability,
    cisa_known_exploit,
    cve_published,
    created_at,
    hosts_count,
    hosts_count_updated_at
  } = vuln;
  const hostCountPath = (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_HOSTS, {
    vulnerability: cve,
    fleet_id: teamIdForApi
  });
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: SoftwareVulnSummary_baseClass }, /* @__PURE__ */ react.createElement("span", { className: `${SoftwareVulnSummary_baseClass}__header` }, /* @__PURE__ */ react.createElement("h1", null, cve), /* @__PURE__ */ react.createElement("span", { className: `${SoftwareVulnSummary_baseClass}__header__links` }, /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: details_link, text: "Visit NVD page", newTab: true }))), isPremiumTier && cve_description && /* @__PURE__ */ react.createElement("div", { className: `${SoftwareVulnSummary_baseClass}__description` }, cve_description), /* @__PURE__ */ react.createElement("dl", { className: `${SoftwareVulnSummary_baseClass}__description-list` }, isPremiumTier && /* @__PURE__ */ react.createElement(react.Fragment, null, cvss_score && /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "The worst case impact across different environments (CVSS version 3.x base score). This data is reported by the National Vulnerability Database (NVD)." }, "Severity"),
      value: cvss_score,
      textOnly: true
    }
  ), epss_probability && /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "The probability that this vulnerability will be exploited in the next 30 days (EPSS probability). This data is reported by FIRST.org." }, "Probability of exploit"),
      value: /* @__PURE__ */ react.createElement(
        ProbabilityOfExploit/* default */.A,
        {
          probabilityOfExploit: epss_probability,
          cisaKnownExploit: cisa_known_exploit,
          tooltipPosition: "bottom"
        }
      )
    }
  ), cve_published && /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The date this vulnerability was published in the National Vulnerability Database (NVD).")
        },
        "Published"
      ),
      value: /* @__PURE__ */ react.createElement(
        HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T,
        {
          timeString: cve_published,
          tooltipPosition: "bottom"
        }
      ),
      textOnly: true
    }
  )), /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The date this vulnerability first appeared on a host.")
        },
        "Detected"
      ),
      value: /* @__PURE__ */ react.createElement(
        HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T,
        {
          timeString: created_at,
          tooltipPosition: "bottom"
        }
      ),
      textOnly: true
    }
  ), /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: "Affected hosts",
      value: /* @__PURE__ */ react.createElement(
        LastUpdatedHostCount/* default */.A,
        {
          hostCount: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "View all affected hosts" }, /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              url: hostCountPath,
              text: hosts_count.toString()
            }
          )),
          lastUpdatedAt: hosts_count_updated_at
        }
      ),
      textOnly: true
    }
  )));
};
/* harmony default export */ var SoftwareVulnSummary_SoftwareVulnSummary = (SoftwareVulnSummary);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/SoftwareVulnerabilityDetailsPage.tsx

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















const SoftwareVulnerabilityDetailsPage_baseClass = "software-vulnerability-details-page";
const SoftwareVulnerabilityDetailsPage = ({
  router,
  routeParams,
  location
}) => {
  const { isPremiumTier, isOnGlobalTeam, config } = (0,react.useContext)(app/* AppContext */.BR);
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const {
    currentTeamId,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true
  });
  const {
    data: vuln,
    isLoading: isVulnLoading,
    isError: isVulnError
  } = (0,es.useQuery)(
    [
      {
        scope: "softwareVulnByCVE",
        vulnerability: routeParams.cve,
        teamId: teamIdForApi
      }
    ],
    ({ queryKey }) => {
      return vulnerabilities/* default */.A.getVulnerability(queryKey[0]);
    },
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      onError: (error) => {
        if (!(0,errors/* ignoreAxiosError */.j8)(error, [403, 404])) {
          handlePageError(error);
        }
      }
    })
  );
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      handleTeamChange(teamId);
    },
    [handleTeamChange]
  );
  const renderCards = (v) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    SoftwareVulnSummary_SoftwareVulnSummary,
    {
      vuln: v.vulnerability,
      isPremiumTier: isPremiumTier != null ? isPremiumTier : false,
      teamIdForApi
    }
  ), !!v.os_versions && v.os_versions.length > 0 && /* @__PURE__ */ react.createElement(
    SoftwareVulnOSVersions_SoftwareVulnOSVersions,
    {
      osVersions: v.os_versions,
      isPremiumTier: isPremiumTier != null ? isPremiumTier : false,
      router,
      teamIdForApi
    }
  ), !!v.software && v.software.length > 0 && /* @__PURE__ */ react.createElement(
    SoftwareVulnSoftwareVersions_SoftwareVulnSoftwareVersions,
    {
      vulnSoftware: v.software,
      isPremiumTier: isPremiumTier != null ? isPremiumTier : false,
      router,
      teamIdForApi
    }
  ));
  const renderContent = () => {
    var _a;
    if (isVulnLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, isPremiumTier && !((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo) && /* @__PURE__ */ react.createElement(
      TeamsHeader/* default */.A,
      {
        isOnGlobalTeam,
        currentTeamId,
        userTeams,
        onTeamChange
      }
    ), isVulnError || !vuln ? /* @__PURE__ */ react.createElement(
      DetailsNoHosts/* default */.A,
      {
        header: "Vulnerability not detected",
        details: `No hosts are affected by ${routeParams.cve}.`
      }
    ) : renderCards(vuln));
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: SoftwareVulnerabilityDetailsPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent()));
};
/* harmony default export */ var SoftwareVulnerabilityDetailsPage_SoftwareVulnerabilityDetailsPage = (SoftwareVulnerabilityDetailsPage);

;// ./frontend/pages/SoftwarePage/SoftwareVulnerabilityDetailsPage/index.ts




/***/ }),

/***/ 49634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ DetailsNoHosts_DetailsNoHosts; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
;// ./frontend/pages/SoftwarePage/components/cards/DetailsNoHosts/DetailsNoHosts.tsx



const baseClass = "details-no-hosts";
const DetailsNoHosts = ({ header, details }) => {
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement("h2", null, header), /* @__PURE__ */ react.createElement("p", null, details));
};
/* harmony default export */ var DetailsNoHosts_DetailsNoHosts = (DetailsNoHosts);

;// ./frontend/pages/SoftwarePage/components/cards/DetailsNoHosts/index.ts




/***/ }),

/***/ 42526:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ SelfServicePreview_SelfServicePreview; }
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/forms/fields/SearchField/index.ts + 1 modules
var SearchField = __webpack_require__(90710);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceHeader/index.ts + 1 modules
var SelfServiceHeader = __webpack_require__(33429);
;// ./assets/images/preview-self-service-mobile-icon.png
var preview_self_service_mobile_icon_namespaceObject = __webpack_require__.p + "preview-self-service-mobile-icon@0f67449fe5cb98eb7651.png";
;// ./frontend/pages/SoftwarePage/components/cards/SelfServicePreview/SelfServicePreview.tsx









const baseClass = "self-service-preview";
const SelfServicePreview = ({
  isIosOrIpadosApp,
  contactUrl,
  name,
  displayName,
  versionLabel,
  hasCategories,
  renderIcon,
  renderTable
}) => {
  if (isIosOrIpadosApp) {
    return /* @__PURE__ */ react.createElement(
      Card/* default */.A,
      {
        color: "white",
        className: `${baseClass}__preview-card ${baseClass}__preview-card--mobile`,
        paddingSize: "xlarge"
      },
      /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__preview-img-container--mobile` }, /* @__PURE__ */ react.createElement(
        "img",
        {
          className: `${baseClass}__preview-img--mobile`,
          src: preview_self_service_mobile_icon_namespaceObject,
          alt: "Preview icon on Mesh Desktop > Self service"
        }
      )),
      /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__self-service-preview--mobile` }, renderIcon(), /* @__PURE__ */ react.createElement(
        "div",
        {
          className: `${baseClass}__self-service-preview-name-version--mobile`
        },
        /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__self-service-preview-name--mobile` }, /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: displayName || name })),
        /* @__PURE__ */ react.createElement(
          "div",
          {
            className: `${baseClass}__self-service-preview-version--mobile`
          },
          versionLabel
        )
      ))
    );
  }
  return /* @__PURE__ */ react.createElement(
    Card/* default */.A,
    {
      color: "grey",
      className: `${baseClass}__preview-card`,
      paddingSize: "xlarge"
    },
    /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__disabled-overlay` }),
    /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${baseClass}__preview-card__self-service` }, /* @__PURE__ */ react.createElement(SelfServiceHeader/* default */.A, { contactUrl, variant: "preview" }), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__filter-row` }, hasCategories && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__static-dropdown`, "aria-hidden": "true" }, /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__static-dropdown-label` }, "All"), /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "chevron-down", color: "ui-fleet-black-75" })), /* @__PURE__ */ react.createElement(SearchField/* default */.A, { placeholder: "Search by name", onChange: lodash.noop, disabled: true })), renderTable && renderTable())
  );
};
/* harmony default export */ var SelfServicePreview_SelfServicePreview = (SelfServicePreview);

;// ./frontend/pages/SoftwarePage/components/cards/SelfServicePreview/index.ts




/***/ }),

/***/ 73967:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports ACTION_EDIT_APPEARANCE, ACTION_EDIT_SOFTWARE, ACTION_EDIT_CONFIGURATION, ACTION_DEPLOY, ACTION_VERSIONS, ACTION_EDIT_AUTO_UPDATE_CONFIGURATION, buildActionOptions */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var components_ActionsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74953);
/* harmony import */ var components_CustomLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24432);
/* harmony import */ var components_DataSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83573);
/* harmony import */ var components_GitOpsModeTooltipWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59333);
/* harmony import */ var components_LastUpdatedHostCount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5719);
/* harmony import */ var components_TooltipTruncatedText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25809);
/* harmony import */ var components_TooltipWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52603);
/* harmony import */ var components_TooltipWrapperArchLinuxRolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64018);
/* harmony import */ var hooks_useGitOpsMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4346);
/* harmony import */ var interfaces_software__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56906);
/* harmony import */ var pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30104);
/* harmony import */ var router_paths__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78263);
/* harmony import */ var utilities_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9467);
/* harmony import */ var utilities_url__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12968);
/* harmony import */ var _icons_OSIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90581);
/* harmony import */ var _icons_SoftwareIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69906);




















const ACTION_EDIT_APPEARANCE = "edit_appearance";
const ACTION_EDIT_SOFTWARE = "edit_software";
const ACTION_EDIT_CONFIGURATION = "edit_configuration";
const ACTION_DEPLOY = "deploy";
const ACTION_VERSIONS = "versions";
const ACTION_EDIT_AUTO_UPDATE_CONFIGURATION = "edit_auto_update_configuration";
const buildActionOptions = ({
  gitOpsModeEnabled,
  repoURL,
  isAppleVpp = false,
  canEditSoftware,
  canEditConfiguration,
  canDeploySoftware,
  canManageVersions,
  canConfigureAutoUpdate
}) => {
  let disableEditAppearanceTooltipContent;
  let disableEditSoftwareTooltipContent;
  let disabledEditConfigurationTooltipContent;
  if (gitOpsModeEnabled) {
    const gitOpsModeTooltipContent = repoURL && (0,utilities_helpers__WEBPACK_IMPORTED_MODULE_15__/* .getGitOpsModeTipContent */ .qV)(repoURL);
    disableEditAppearanceTooltipContent = gitOpsModeTooltipContent;
    disabledEditConfigurationTooltipContent = gitOpsModeTooltipContent;
    if (isAppleVpp) {
      disableEditSoftwareTooltipContent = gitOpsModeTooltipContent;
    }
  }
  const options = [
    {
      label: "Edit appearance",
      value: ACTION_EDIT_APPEARANCE,
      disabled: gitOpsModeEnabled,
      tooltipContent: disableEditAppearanceTooltipContent
    }
  ];
  if (canEditSoftware) {
    options.push({
      label: "Edit software",
      value: ACTION_EDIT_SOFTWARE,
      disabled: !!gitOpsModeEnabled && isAppleVpp,
      tooltipContent: disableEditSoftwareTooltipContent
    });
  }
  if (canEditConfiguration) {
    options.push({
      label: "Edit configuration",
      value: ACTION_EDIT_CONFIGURATION,
      disabled: gitOpsModeEnabled,
      tooltipContent: disabledEditConfigurationTooltipContent
    });
  }
  if (canDeploySoftware) {
    options.push({
      label: "Deploy",
      value: ACTION_DEPLOY
    });
  }
  if (canManageVersions) {
    options.push({
      label: "Versions",
      value: ACTION_VERSIONS
    });
  }
  if (canConfigureAutoUpdate) {
    options.push({
      label: "Schedule auto updates",
      value: ACTION_EDIT_AUTO_UPDATE_CONFIGURATION
    });
  }
  return options;
};
const baseClass = "software-details-summary";
const SoftwareDetailsSummary = ({
  displayName,
  type,
  hostCount,
  countsUpdatedAt,
  queryParams,
  name,
  source,
  versions,
  iconUrl,
  isOperatingSystem,
  canManageSoftware = false,
  onClickEditAppearance,
  onClickEditSoftware,
  onClickDeploy,
  onClickVersions,
  onClickEditConfiguration,
  onClickEditAutoUpdateConfig,
  iconPreviewUrl,
  iconUploadedAt,
  headerPills,
  isAppleVpp = false,
  useSingleEditAppearanceButton = false
}) => {
  const hostCountPath = (0,utilities_url__WEBPACK_IMPORTED_MODULE_16__/* .getPathWithQueryParams */ .M8)(router_paths__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.MANAGE_HOSTS, queryParams);
  const { gitOpsModeEnabled, repoURL } = (0,hooks_useGitOpsMode__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)("software");
  const isRollingArch = interfaces_software__WEBPACK_IMPORTED_MODULE_12__/* .ROLLING_ARCH_LINUX_VERSIONS */ .s.includes(displayName);
  const onSelectSoftwareAction = (value) => {
    switch (value) {
      case ACTION_EDIT_APPEARANCE:
        onClickEditAppearance && onClickEditAppearance();
        break;
      case ACTION_EDIT_SOFTWARE:
        onClickEditSoftware && onClickEditSoftware();
        break;
      case ACTION_DEPLOY:
        onClickDeploy && onClickDeploy();
        break;
      case ACTION_VERSIONS:
        onClickVersions && onClickVersions();
        break;
      case ACTION_EDIT_CONFIGURATION:
        onClickEditConfiguration && onClickEditConfiguration();
        break;
      case ACTION_EDIT_AUTO_UPDATE_CONFIGURATION:
        onClickEditAutoUpdateConfig && onClickEditAutoUpdateConfig();
        break;
      default:
    }
  };
  const showHostCount = !!hostCount && !interfaces_software__WEBPACK_IMPORTED_MODULE_12__/* .NO_VERSION_OR_HOST_DATA_SOURCES */ .gm.includes(source || "");
  const renderSoftwareIcon = () => {
    if (typeof iconPreviewUrl === "string" && (0,pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_13__/* .isSafeImagePreviewUrl */ .KY)(iconPreviewUrl)) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        "img",
        {
          src: iconPreviewUrl,
          alt: "Uploaded icon preview",
          style: { width: 96, height: 96 }
        }
      );
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      _icons_SoftwareIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,
      {
        name,
        source,
        url: iconUrl,
        uploadedAt: iconUploadedAt,
        size: "xlarge"
      }
    );
  };
  const actionOptions = buildActionOptions({
    gitOpsModeEnabled,
    repoURL,
    isAppleVpp,
    canEditSoftware: !!onClickEditSoftware,
    canEditConfiguration: !!onClickEditConfiguration,
    canDeploySoftware: !!onClickDeploy,
    canManageVersions: !!onClickVersions,
    canConfigureAutoUpdate: !!onClickEditAutoUpdateConfig
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    "div",
    {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(baseClass, {
        [`${baseClass}--has-pills`]: !!headerPills
      })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__icon-wrap` }, isOperatingSystem ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons_OSIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, { name, size: "xlarge" }) : renderSoftwareIcon()),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__info` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      "h1",
      {
        "aria-label": "software display name",
        className: `${baseClass}__title`
      },
      isRollingArch ? (
        // wrap a tooltip around the "rolling" suffix
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, displayName.slice(0, -8), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_TooltipWrapperArchLinuxRolling__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null))
      ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_TooltipTruncatedText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { value: displayName })
    ), canManageSoftware && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__actions-wrapper` }, useSingleEditAppearanceButton ? (
      // GitOps mode wraps the button so hover surfaces the
      // "Managed by GitOps" tooltip + repo link, mirroring how the
      // Actions dropdown's items are disabled with the same tip.
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        components_GitOpsModeTooltipWrapper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
        {
          entityType: "software",
          position: "top",
          renderChildren: (disableChildren) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
            components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            {
              variant: "subdued",
              onClick: onClickEditAppearance,
              disabled: disableChildren || !onClickEditAppearance,
              icon: "pencil"
            },
            "Edit"
          )
        }
      )
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      components_ActionsDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      {
        className: `${baseClass}__actions-dropdown`,
        onChange: onSelectSoftwareAction,
        placeholder: "Actions",
        options: actionOptions,
        variant: "secondary",
        menuAlign: "right"
      }
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("dl", { className: `${baseClass}__description-list` }, !!type && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_DataSet__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, { title: "Type", value: type }), !!versions && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_DataSet__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, { title: "Versions", value: versions }), showHostCount && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      components_DataSet__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
      {
        title: "Hosts",
        value: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
          components_LastUpdatedHostCount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
          {
            hostCount: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_TooltipWrapper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, { tipContent: "View all hosts" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
              components_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
              {
                url: hostCountPath,
                text: hostCount.toString()
              }
            )),
            lastUpdatedAt: countsUpdatedAt
          }
        )
      }
    )), headerPills && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__header-pills` }, headerPills))
  ));
};
/* harmony default export */ __webpack_exports__.Ay = (SoftwareDetailsSummary);


/***/ }),

/***/ 71436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* reexport safe */ _SoftwareDetailsSummary__WEBPACK_IMPORTED_MODULE_0__.Ay; }
/* harmony export */ });
/* harmony import */ var _SoftwareDetailsSummary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73967);




/***/ }),

/***/ 59012:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ AdvancedOptionsFields_AdvancedOptionsFields; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Editor/index.tsx
var Editor = __webpack_require__(96470);
// EXTERNAL MODULE: ./frontend/components/SQLEditor/index.tsx
var SQLEditor = __webpack_require__(98220);
;// ./frontend/pages/SoftwarePage/components/forms/AdvancedOptionsFields/AdvancedOptionsFields.tsx






const baseClass = "advanced-options-fields";
const AdvancedOptionsFields = ({
  showSchemaButton,
  installScriptTooltip,
  installScriptHelpText,
  installScriptReadOnly = false,
  postInstallScriptHelpText,
  uninstallScriptTooltip,
  uninstallScriptHelpText,
  errors,
  preInstallQuery,
  installScript,
  postInstallScript,
  uninstallScript,
  className,
  onClickShowSchema,
  onChangePreInstallQuery,
  onChangeInstallScript,
  onChangePostInstallScript,
  onChangeUninstallScript,
  gitopsCompatible = false,
  gitOpsModeEnabled = false,
  preInstallQueryLocked = false
}) => {
  const classNames = classnames_default()(baseClass, className);
  const disableFields = gitopsCompatible && gitOpsModeEnabled;
  const renderLabelComponent = () => {
    if (!showSchemaButton) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        onClick: onClickShowSchema,
        icon: "info",
        iconPosition: "right"
      },
      "Schema"
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: classNames }, /* @__PURE__ */ react.createElement(
    SQLEditor/* default */.A,
    {
      className: "form-field",
      focus: true,
      error: errors.preInstallQuery,
      value: preInstallQuery,
      placeholder: "SELECT * FROM osquery_info WHERE start_time > 1",
      label: "Pre-install query",
      name: "preInstallQuery",
      maxLines: 10,
      onChange: onChangePreInstallQuery,
      labelActionComponent: renderLabelComponent(),
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Software will be installed only if the query returns results.", preInstallQueryLocked && /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "Pre-install query won't run when install is triggered via self-service, manually on the host, or during the setup experience.")),
      readOnly: disableFields || preInstallQueryLocked
    }
  ), /* @__PURE__ */ react.createElement(
    Editor/* default */.A,
    {
      wrapEnabled: true,
      maxLines: 10,
      name: "install-script",
      onChange: onChangeInstallScript,
      value: installScript,
      helpText: installScriptHelpText,
      label: "Install script",
      labelTooltip: installScriptTooltip,
      readOnly: disableFields || installScriptReadOnly
    }
  ), /* @__PURE__ */ react.createElement(
    Editor/* default */.A,
    {
      label: "Post-install script",
      focus: true,
      error: errors.postInstallScript,
      wrapEnabled: true,
      name: "post-install-script-editor",
      maxLines: 10,
      onChange: onChangePostInstallScript,
      value: postInstallScript,
      helpText: postInstallScriptHelpText,
      readOnly: disableFields
    }
  ), /* @__PURE__ */ react.createElement(
    Editor/* default */.A,
    {
      label: "Uninstall script",
      labelTooltip: uninstallScriptTooltip,
      focus: true,
      wrapEnabled: true,
      name: "uninstall-script-editor",
      maxLines: 20,
      onChange: onChangeUninstallScript,
      value: uninstallScript,
      helpText: uninstallScriptHelpText,
      readOnly: disableFields
    }
  ));
};
/* harmony default export */ var AdvancedOptionsFields_AdvancedOptionsFields = (react.memo(AdvancedOptionsFields));

;// ./frontend/pages/SoftwarePage/components/forms/AdvancedOptionsFields/index.ts




/***/ }),

/***/ 62190:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ PackageForm_PackageForm; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/index.ts
var InfoBanner = __webpack_require__(38021);
// EXTERNAL MODULE: ./frontend/components/TargetLabelSelector/index.ts + 2 modules
var TargetLabelSelector = __webpack_require__(22676);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
;// ./frontend/interfaces/package_type.ts

const fleetMaintainedPackageTypes = ["dmg", "zip"];
const unixPackageTypes = ["pkg", "deb", "rpm", "dmg", "zip", "tar.gz"];
const windowsPackageTypes = ["msi", "msix", "exe", "zip"];
const scriptOnlyPackageTypes = ["sh", "ps1", "py"];
const iosIpadosPackageTypes = ["ipa"];
const packageTypes = [
  ...unixPackageTypes,
  ...windowsPackageTypes,
  ...scriptOnlyPackageTypes,
  ...iosIpadosPackageTypes
];
const isWindowsPackageType = (s) => {
  return windowsPackageTypes.includes(s);
};
const isUnixPackageType = (s) => {
  return unixPackageTypes.includes(s);
};
const isFleetMaintainedPackageType = (s) => {
  return fleetMaintainedPackageTypes.includes(s);
};
const isIosIpadosPackageType = (s) => {
  return iosIpadosPackageTypes.includes(s);
};
const isScriptOnlyPackageType = (s) => {
  return scriptOnlyPackageTypes.includes(s);
};
const isPackageType = (s) => {
  return packageTypes.includes(s);
};

// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareOptionsSelector/index.ts
var SoftwareOptionsSelector = __webpack_require__(98601);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/helpers.tsx
var SoftwareAddPage_helpers = __webpack_require__(54184);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareAddPage/SoftwareCustomPackage/SoftwareCustomPackage.tsx
var SoftwareCustomPackage = __webpack_require__(64922);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareTitleDetailsPage/EditSoftwareModal/helpers.tsx
var EditSoftwareModal_helpers = __webpack_require__(79244);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/file/fileUtils.tsx
var fileUtils = __webpack_require__(9106);
;// ./pkg/file/scripts/install_deb.sh
var install_deb_namespaceObject = "#!/bin/sh\r\n\r\napt-get install --assume-yes -f \"$INSTALLER_PATH\"\r\n";
;// ./pkg/file/scripts/install_msi.ps1
var install_msi_namespaceObject = "$logFile = \"${env:TEMP}/fleet-install-software.log\"\r\n\r\n# MSI exit codes that indicate success. 3010 = ERROR_SUCCESS_REBOOT_REQUIRED,\r\n# 1641 = ERROR_SUCCESS_REBOOT_INITIATED. Treat these as success rather than failure.\r\n$successCodes = @(0, 3010, 1641)\r\n\r\ntry {\r\n\r\n$installProcess = Start-Process msiexec.exe `\r\n  -ArgumentList \"/quiet /norestart /lv `\"${logFile}`\" /i `\"${env:INSTALLER_PATH}`\"\" `\r\n  -PassThru -Verb RunAs -Wait\r\n\r\nGet-Content $logFile -Tail 500\r\n\r\nif ($successCodes -contains $installProcess.ExitCode) {\r\n  Exit 0\r\n}\r\n\r\nExit $installProcess.ExitCode\r\n\r\n} catch {\r\n  Write-Host \"Error: $_\"\r\n  Exit 1\r\n}\r\n";
;// ./pkg/file/scripts/install_pkg.sh
var install_pkg_namespaceObject = "#!/bin/sh\r\n\r\ninstaller -pkg \"$INSTALLER_PATH\" -target /\r\n";
;// ./pkg/file/scripts/install_rpm.sh
var install_rpm_namespaceObject = "#!/bin/sh\r\n\r\ndnf install --assumeyes \"$INSTALLER_PATH\"\r\n";
;// ./frontend/utilities/software_install_scripts.ts






const getDefaultInstallScript = (fileName) => {
  const extension = (0,fileUtils/* getExtensionFromFileName */.bv)(fileName);
  switch (extension) {
    case "pkg":
      return install_pkg_namespaceObject;
    case "msi":
      return install_msi_namespaceObject;
    case "deb":
      return install_deb_namespaceObject;
    case "rpm":
      return install_rpm_namespaceObject;
    case "exe":
    case "zip":
    case "tar.gz":
    case "sh":
    case "ps1":
    case "py":
    case "ipa":
      return "";
    default:
      throw new Error(`unsupported file extension: ${extension}`);
  }
};
/* harmony default export */ var software_install_scripts = (getDefaultInstallScript);

;// ./pkg/file/scripts/uninstall_deb.sh
var uninstall_deb_namespaceObject = "package_name=$PACKAGE_ID\r\n\r\n# Fleet uninstalls app using product name that's extracted on upload\r\napt-get remove --purge --assume-yes \"$package_name\"\r\n";
;// ./pkg/file/scripts/uninstall_msi_with_upgrade_code.ps1
var uninstall_msi_with_upgrade_code_namespaceObject = "# Fleet uninstalls app by finding all related product codes for the specified upgrade code\r\n$inst = New-Object -ComObject \"WindowsInstaller.Installer\"\r\n$timeoutSeconds = 300  # 5 minute timeout per product\r\n\r\n# MSI exit codes that indicate success. 3010 = ERROR_SUCCESS_REBOOT_REQUIRED,\r\n# 1641 = ERROR_SUCCESS_REBOOT_INITIATED. Treat these as success rather than failure.\r\n$successCodes = @(0, 3010, 1641)\r\n\r\nforeach ($product_code in $inst.RelatedProducts(\"$UPGRADE_CODE\")) {\r\n    $process = Start-Process msiexec -ArgumentList @(\"/quiet\", \"/x\", $product_code, \"/norestart\") -PassThru\r\n\r\n    # Wait for process with timeout\r\n    $completed = $process.WaitForExit($timeoutSeconds * 1000)\r\n\r\n    if (-not $completed) {\r\n        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue\r\n        Exit 1603  # ERROR_UNINSTALL_FAILURE\r\n    }\r\n\r\n    # If the uninstall failed, bail\r\n    if ($successCodes -notcontains $process.ExitCode) {\r\n        Write-Output \"Uninstall for $($product_code) exited $($process.ExitCode)\"\r\n        Exit $process.ExitCode\r\n    }\r\n}\r\n\r\n# All uninstalls succeeded; exit success\r\nExit 0\r\n";
;// ./pkg/file/scripts/uninstall_pkg.sh
var uninstall_pkg_namespaceObject = "#!/bin/sh\r\n\r\n# Fleet extracts and saves package IDs.\r\npkg_ids=$PACKAGE_ID\r\n\r\n# For each package id, get all .app folders associated with the package and remove them.\r\nfor pkg_id in \"${pkg_ids[@]}\"\r\ndo\r\n  # Get volume and location of the package.\r\n  volume=$(pkgutil --pkg-info \"$pkg_id\" | grep -i \"volume\" | awk '{if (NF>1) print $NF}')\r\n  location=$(pkgutil --pkg-info \"$pkg_id\" | grep -i \"location\" | awk '{if (NF>1) print $NF}')\r\n  # Check if this package id corresponds to a valid/installed package\r\n  if [[ ! -z \"$volume\" ]]; then\r\n    # Remove individual directories that end with \".app\" belonging to the package.\r\n    # Only process directories that end with \".app\" to prevent Fleet from removing top level directories.\r\n    pkgutil --only-dirs --files \"$pkg_id\" | grep \"\\.app$\" | sed -e 's@^@'\"$volume\"\"$location\"'/@' | tr '\\n' '\\0' | xargs -n 1 -0 rm -rf\r\n    # Remove receipts\r\n    pkgutil --forget \"$pkg_id\"\r\n  else\r\n    echo \"WARNING: volume is empty for package ID $pkg_id\"\r\n  fi\r\ndone\r\n";
;// ./pkg/file/scripts/uninstall_rpm.sh
var uninstall_rpm_namespaceObject = "package_name=$PACKAGE_ID\r\n\r\n# Fleet uninstalls app using product name that's extracted on upload\r\ndnf remove --assumeyes \"$package_name\"\r\n";
;// ./frontend/utilities/software_uninstall_scripts.ts






const getDefaultUninstallScript = (fileName) => {
  const extension = (0,fileUtils/* getExtensionFromFileName */.bv)(fileName);
  switch (extension) {
    case "pkg":
      return uninstall_pkg_namespaceObject;
    case "msi":
      return uninstall_msi_with_upgrade_code_namespaceObject;
    case "deb":
      return uninstall_deb_namespaceObject;
    case "rpm":
      return uninstall_rpm_namespaceObject;
    case "exe":
    case "tar.gz":
    case "sh":
    case "ps1":
    case "py":
    case "ipa":
      return "";
    default:
      throw new Error(`unsupported file extension: ${extension}`);
  }
};
/* harmony default export */ var software_uninstall_scripts = (getDefaultUninstallScript);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/AdvancedOptionsFields/index.ts + 1 modules
var AdvancedOptionsFields = __webpack_require__(59012);
;// ./frontend/pages/SoftwarePage/components/forms/PackageAdvancedOptions/PackageAdvancedOptions.tsx









const getSupportedScriptTypeText = (pkgType) => {
  const isPowerShell = isWindowsPackageType(pkgType) || pkgType === "ps1";
  return `Currently, ${isPowerShell ? "PowerS" : "s"}hell scripts are supported.`;
};
const PKG_TYPE_TO_ID_TEXT = {
  pkg: "package IDs",
  deb: "package name",
  rpm: "package name",
  msi: "product code",
  msix: "product code or package family name",
  exe: "software name",
  zip: "software name",
  sh: "package name",
  ps1: "package name",
  ipa: "software name"
};
const getInstallScriptTooltip = (pkgType) => {
  if (pkgType === "exe" || pkgType === "tar.gz") {
    if (pkgType === "exe") {
      return "Required for .exe packages.";
    }
    return "Required for .tar.gz archives.";
  }
  if (pkgType === "zip" && isWindowsPackageType(pkgType)) {
    return "Required for .zip packages.";
  }
  return void 0;
};
const getInstallHelpText = (pkgType) => {
  if (isScriptOnlyPackageType(pkgType)) {
    return "The uploaded script's contents are used as the install script. To change it, upload a new file.";
  }
  if (pkgType === "exe") {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "For Windows, Mesh only creates install scripts for .msi packages. Use the $INSTALLER_PATH variable to point to the installer.", " ", getSupportedScriptTypeText(pkgType), " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/exe-install-scripts`,
        text: "Learn more",
        newTab: true
      }
    ));
  }
  if (pkgType === "zip") {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "For Windows, Mesh only creates install scripts for .msi packages. Use the $INSTALLER_PATH variable to point to the installer.", " ", getSupportedScriptTypeText(pkgType), " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/exe-install-scripts`,
        text: "Learn more",
        newTab: true
      }
    ));
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "Use the $INSTALLER_PATH variable to point to the installer.", " ", getSupportedScriptTypeText(pkgType), " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/install-scripts`,
      text: "Learn more about install scripts",
      newTab: true
    }
  ));
};
const getPostInstallHelpText = (pkgType) => {
  return getSupportedScriptTypeText(pkgType);
};
const getUninstallScriptTooltip = (pkgType) => {
  if (pkgType === "exe" || pkgType === "tar.gz") {
    if (pkgType === "exe") {
      return "Required for .exe packages.";
    }
    return "Required for .tar.gz archives.";
  }
  if (pkgType === "zip" && isWindowsPackageType(pkgType)) {
    return "Required for .zip packages.";
  }
  return void 0;
};
const getUninstallHelpText = (pkgType) => {
  if (isScriptOnlyPackageType(pkgType)) {
    return getSupportedScriptTypeText(pkgType);
  }
  if (pkgType === "zip" && isWindowsPackageType(pkgType)) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "For Windows, Mesh only creates uninstall scripts for .msi packages. $PACKAGE_ID will be populated with the software name from the .zip file after it's added. ", getSupportedScriptTypeText(pkgType), " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/exe-install-scripts`,
        text: "Learn more",
        newTab: true
      }
    ));
  }
  if (isFleetMaintainedPackageType(pkgType)) {
    return "Currently, only shell scripts are supported.";
  }
  if (pkgType === "exe") {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "For Windows, Mesh only creates uninstall scripts for .msi packages. $PACKAGE_ID will be populated with the software name from the .exe file after it's added. ", getSupportedScriptTypeText(pkgType), " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/exe-install-scripts`,
        text: "Learn more",
        newTab: true
      }
    ));
  }
  if (pkgType === "tar.gz") {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Currently, only shell scripts are supported.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/uninstall-scripts`,
        text: "Learn more about uninstall scripts",
        newTab: true
      }
    ));
  }
  if (pkgType === "msi") {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "$UPGRADE_CODE will be populated with the .msi's upgrade code if available, and $PACKAGE_ID will be populated with its product code, after the software is added. ", getSupportedScriptTypeText(pkgType), " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/uninstall-scripts`,
        text: "Learn more about uninstall scripts",
        newTab: true
      }
    ));
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "$PACKAGE_ID will be populated with the ", PKG_TYPE_TO_ID_TEXT[pkgType], " from the .", pkgType, " file after the software is added.", " ", getSupportedScriptTypeText(pkgType), " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/uninstall-scripts`,
      text: "Learn more about uninstall scripts",
      newTab: true
    }
  ));
};
const baseClass = "package-advanced-options";
const PackageAdvancedOptions = ({
  showSchemaButton = false,
  errors,
  selectedPackage,
  preInstallQuery,
  installScript,
  postInstallScript,
  uninstallScript,
  onClickShowSchema = lodash.noop,
  onChangePreInstallQuery,
  onChangeInstallScript,
  onChangePostInstallScript,
  onChangeUninstallScript,
  gitopsCompatible = false,
  gitOpsModeEnabled = false,
  preInstallQueryLocked = false
}) => {
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react.useState)(false);
  const name = (selectedPackage == null ? void 0 : selectedPackage.name) || "";
  const ext = (0,fileUtils/* getExtensionFromFileName */.bv)(name);
  const renderAdvancedOptions = () => {
    if (!isPackageType(ext)) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      AdvancedOptionsFields/* default */.A,
      {
        className: `${baseClass}__input-fields`,
        showSchemaButton,
        installScriptTooltip: getInstallScriptTooltip(ext),
        installScriptHelpText: getInstallHelpText(ext),
        installScriptReadOnly: isScriptOnlyPackageType(ext),
        postInstallScriptHelpText: getPostInstallHelpText(ext),
        uninstallScriptTooltip: getUninstallScriptTooltip(ext),
        uninstallScriptHelpText: getUninstallHelpText(ext),
        errors,
        preInstallQuery,
        installScript,
        postInstallScript,
        uninstallScript,
        onClickShowSchema,
        onChangePreInstallQuery,
        onChangeInstallScript,
        onChangePostInstallScript,
        onChangeUninstallScript,
        gitopsCompatible,
        gitOpsModeEnabled,
        preInstallQueryLocked
      }
    );
  };
  const requiresAdvancedOptions = ext === "exe" || ext === "zip" || ext === "tar.gz";
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    RevealButton/* default */.A,
    {
      className: `${baseClass}__accordion-title`,
      isShowing: showAdvancedOptions,
      showText: "Advanced options",
      hideText: "Advanced options",
      caretPosition: "after",
      onClick: () => setShowAdvancedOptions(!showAdvancedOptions),
      disabled: !selectedPackage || requiresAdvancedOptions,
      disabledTooltipContent: requiresAdvancedOptions ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Install and uninstall scripts are required for .", ext, " packages.") : /* @__PURE__ */ react.createElement(react.Fragment, null, "Choose a file to modify advanced options.")
    }
  ), (showAdvancedOptions || ext === "exe" || ext === "zip" || ext === "tar.gz") && !!selectedPackage && renderAdvancedOptions());
};
/* harmony default export */ var PackageAdvancedOptions_PackageAdvancedOptions = (PackageAdvancedOptions);

;// ./frontend/pages/SoftwarePage/components/forms/PackageAdvancedOptions/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySlider/index.ts + 1 modules
var SoftwareDeploySlider = __webpack_require__(2191);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_query/index.ts
var validate_query = __webpack_require__(22184);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/scripts_encoding.ts
var scripts_encoding = __webpack_require__(91176);
;// ./frontend/pages/SoftwarePage/components/forms/PackageForm/helpers.tsx

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






const FORM_VALIDATION_CONFIG = {
  software: {
    validations: [
      {
        name: "required",
        isValid: (formData) => formData.software !== null
      }
    ]
  },
  preInstallQuery: {
    validations: [
      {
        name: "invalidQuery",
        // Allow all SQL including empty SQL: this field never blocks form submission Request: #35058
        isValid: () => true,
        message: (formData) => {
          const query = formData.preInstallQuery;
          if (!query) {
            return "";
          }
          const { error } = (0,validate_query/* validateQuery */.B4)(query);
          return error || "";
        }
      }
    ]
  },
  installScript: {
    validations: [
      {
        name: "requiredForExe",
        isValid: (formData) => {
          var _a, _b, _c;
          if (((_a = formData.software) == null ? void 0 : _a.type) === "exe" || (0,fileUtils/* getExtensionFromFileName */.bv)(((_b = formData.software) == null ? void 0 : _b.name) || "") === "exe") {
            return ((_c = formData.installScript) != null ? _c : "").trim().length > 0;
          }
          return true;
        },
        message: "Install script is required for .exe packages."
      },
      {
        name: "requiredForZip",
        isValid: (formData) => {
          var _a, _b, _c;
          if (((_a = formData.software) == null ? void 0 : _a.type) === "zip" || (0,fileUtils/* getExtensionFromFileName */.bv)(((_b = formData.software) == null ? void 0 : _b.name) || "") === "zip") {
            return ((_c = formData.installScript) != null ? _c : "").trim().length > 0;
          }
          return true;
        },
        message: "Install script is required for .zip packages."
      },
      {
        name: "requiredForTgz",
        isValid: (formData) => {
          var _a, _b;
          if (((_a = formData.software) == null ? void 0 : _a.name) && (0,fileUtils/* getExtensionFromFileName */.bv)(formData.software.name) === "tar.gz") {
            return ((_b = formData.installScript) != null ? _b : "").trim().length > 0;
          }
          return true;
        },
        message: "Install script is required for .tar.gz archives."
      }
    ]
  },
  uninstallScript: {
    validations: [
      {
        name: "requiredForExe",
        isValid: (formData) => {
          var _a, _b, _c;
          if (((_a = formData.software) == null ? void 0 : _a.type) === "exe" || (0,fileUtils/* getExtensionFromFileName */.bv)(((_b = formData.software) == null ? void 0 : _b.name) || "") === "exe") {
            return ((_c = formData.uninstallScript) != null ? _c : "").trim().length > 0;
          }
          return true;
        },
        message: "Uninstall script is required for .exe packages."
      },
      {
        name: "requiredForZip",
        isValid: (formData) => {
          var _a, _b, _c;
          if (((_a = formData.software) == null ? void 0 : _a.type) === "zip" || (0,fileUtils/* getExtensionFromFileName */.bv)(((_b = formData.software) == null ? void 0 : _b.name) || "") === "zip") {
            return ((_c = formData.uninstallScript) != null ? _c : "").trim().length > 0;
          }
          return true;
        },
        message: "Uninstall script is required for .zip packages."
      },
      {
        name: "requiredForTgz",
        isValid: (formData) => {
          var _a, _b;
          if (((_a = formData.software) == null ? void 0 : _a.name) && (0,fileUtils/* getExtensionFromFileName */.bv)(formData.software.name) === "tar.gz") {
            return ((_b = formData.uninstallScript) != null ? _b : "").trim().length > 0;
          }
          return true;
        },
        message: "Uninstall script is required for .tar.gz archives."
      }
    ]
  },
  customTarget: {
    validations: [
      {
        name: "requiredLabelTargets",
        isValid: (formData) => {
          if (formData.targetType === "All hosts") return true;
          return Object.keys(formData.labelTargets).find(
            (key) => formData.labelTargets[key]
          ) !== void 0;
        }
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
const generateFormValidation = (formData) => {
  const formValidation = {
    isValid: true,
    software: {
      isValid: false
    }
  };
  Object.keys(FORM_VALIDATION_CONFIG).forEach((key) => {
    const objKey = key;
    const failedValidation = FORM_VALIDATION_CONFIG[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = __spreadValues({
        isValid: true
      }, objKey === "preInstallQuery" && {
        message: getErrorMessage(
          formData,
          FORM_VALIDATION_CONFIG[objKey].validations[0].message
        )
      });
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
const createTooltipContent = (formValidation, repoURL, disabledFieldsForGitOps) => {
  if (disabledFieldsForGitOps && repoURL) {
    return (0,utilities_helpers/* getGitOpsModeTipContent */.qV)(repoURL);
  }
  const messages = Object.values(formValidation).filter((field) => field.isValid === false && field.message).map((field) => field.message);
  if (messages.length === 0) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, messages.map((message, index) => /* @__PURE__ */ react.createElement(react.Fragment, null, message, index < messages.length - 1 && /* @__PURE__ */ react.createElement("br", null))));
};
const estimateUploadSize = (formData) => {
  var _a;
  const scripts = [
    formData.installScript,
    formData.uninstallScript,
    formData.preInstallQuery,
    formData.postInstallScript
  ];
  let scriptsSize = 0;
  scripts.forEach((script) => {
    var _a2;
    scriptsSize += ((_a2 = (0,scripts_encoding/* encodeScriptBase64 */.p)(script)) == null ? void 0 : _a2.length) || 0;
  });
  let fieldsSize = String(formData.selfService).length + String(formData.automaticInstall).length;
  const encoder = new TextEncoder();
  formData.categories.forEach((category) => {
    fieldsSize += encoder.encode(category).length;
  });
  if (formData.targetType === "Custom") {
    (0,labels/* listNamesFromSelectedLabels */.XX)(formData.labelTargets).forEach((label) => {
      fieldsSize += encoder.encode(label).length;
    });
  }
  return (((_a = formData.software) == null ? void 0 : _a.size) || 0) + scriptsSize + fieldsSize;
};
/* harmony default export */ var PackageForm_helpers = ((/* unused pure expression or super */ null && (generateFormValidation)));

;// ./frontend/pages/SoftwarePage/components/forms/PackageForm/PackageForm.tsx

var PackageForm_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var PackageForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PackageForm_hasOwnProp = Object.prototype.hasOwnProperty;
var PackageForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var PackageForm_defNormalProp = (obj, key, value) => key in obj ? PackageForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PackageForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PackageForm_hasOwnProp.call(b, prop))
      PackageForm_defNormalProp(a, prop, b[prop]);
  if (PackageForm_getOwnPropSymbols)
    for (var prop of PackageForm_getOwnPropSymbols(b)) {
      if (PackageForm_propIsEnum.call(b, prop))
        PackageForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
























const PackageForm_baseClass = "package-form";
const getGraphicName = (ext) => {
  if (ext === "sh") {
    return "file-sh";
  } else if (ext === "ps1") {
    return "file-ps1";
  } else if (ext === "py") {
    return "file-py";
  }
  return "file-pkg";
};
const renderSoftwareDeployWarningBanner = () => /* @__PURE__ */ react.createElement(
  InfoBanner/* default */.A,
  {
    color: "yellow",
    className: `${PackageForm_baseClass}__deploy-warning`,
    cta: /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/query-templates-for-automatic-install-software`,
        text: "Learn more",
        newTab: true
      }
    )
  },
  "Installing software over existing installations might cause issues. Fleet's policy may not detect these existing installations. Please create a test fleet in Mesh to verify a smooth installation."
);
const renderFileTypeMessage = () => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Supports .pkg, .sh, and .py" }, "macOS"), ", ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Supports .ipa" }, "iOS/iPadOS"), ",", " ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Supports .msi, .exe, .ps1" }, "Windows"), ", or", " ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Supports .deb, .rpm, .tar.gz, .sh, and .py" }, "Linux"));
};
const ACCEPTED_EXTENSIONS = ".pkg,.msi,.exe,.deb,.rpm,application/gzip,.tgz,.sh,.ps1,.py,.ipa";
const PackageForm = ({
  labels,
  showSchemaButton = false,
  onClickShowSchema,
  onCancel,
  onSubmit,
  onClickPreviewEndUserExperience,
  isEditingSoftware = false,
  isFleetMaintainedApp = false,
  defaultSoftware,
  defaultInstallScript,
  defaultPreInstallQuery,
  defaultPostInstallScript,
  defaultUninstallScript,
  defaultSelfService,
  defaultCategories,
  className,
  gitopsCompatible = false,
  teamId,
  multiPackageContext = false,
  restrictedFileAccept,
  restrictedFileTypeLabel,
  initialTargetType,
  preInstallQueryLocked = false
}) => {
  var _a, _b;
  const { gitOpsModeEnabled, repoURL } = (0,useGitOpsMode/* default */.A)("software");
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const maxSoftwarePackageSize = config == null ? void 0 : config.max_software_package_size;
  const initialFormData = {
    // `formData.software` is typed as `File | null` (its shape once a user
    // picks a file), but on the edit flow we seed it with the existing
    // installer so truthy-gated UI (advanced options, file details) reads
    // correctly before any re-upload. `File` is not extended to include the
    // installer types because `formData.software` becomes a real `File` the
    // moment `onFileSelect` fires, and downstream (multipart upload) needs
    // that shape.
    software: defaultSoftware || null,
    installScript: defaultInstallScript || "",
    preInstallQuery: defaultPreInstallQuery || "",
    postInstallScript: defaultPostInstallScript || "",
    uninstallScript: defaultUninstallScript || "",
    selfService: defaultSelfService || false,
    targetType: initialTargetType != null ? initialTargetType : (0,helpers/* getTargetType */.Ag)(defaultSoftware),
    customTarget: (0,helpers/* getCustomTarget */.lQ)(defaultSoftware),
    labelTargets: (0,helpers/* generateSelectedLabels */.ER)(defaultSoftware),
    automaticInstall: false,
    categories: defaultCategories || []
  };
  const [formData, setFormData] = (0,react.useState)(initialFormData);
  const [formValidation, setFormValidation] = (0,react.useState)({
    isValid: false,
    software: { isValid: false }
  });
  (0,react.useEffect)(() => {
    if (!gitOpsModeEnabled) {
      return;
    }
    const hasLabelTargets = Object.values(formData.labelTargets).some(Boolean);
    if (formData.targetType !== "Custom" || hasLabelTargets) {
      return;
    }
    const normalized = __spreadProps(PackageForm_spreadValues({}, formData), { targetType: "All hosts" });
    setFormData(normalized);
    setFormValidation(generateFormValidation(normalized));
  }, [gitOpsModeEnabled, formData]);
  const notifyTooLarge = () => {
    const errorPrefix = isEditingSoftware ? EditSoftwareModal_helpers/* EDIT_SOFTWARE_ERROR_PREFIX */.V : SoftwareAddPage_helpers/* ADD_SOFTWARE_ERROR_PREFIX */.wy;
    ToastNotification/* notify */.me.error(
      `${errorPrefix} The maximum file size is ${(0,fileUtils/* formatFileSize */.v7)(
        maxSoftwarePackageSize || 0
      )}.`
    );
  };
  const onFileSelect = (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (maxSoftwarePackageSize !== void 0 && file.size > maxSoftwarePackageSize) {
        notifyTooLarge();
        return;
      }
      if (isEditingSoftware) {
        const newData = __spreadProps(PackageForm_spreadValues({}, formData), { software: file });
        setFormData(newData);
        setFormValidation(generateFormValidation(newData));
      } else {
        let newDefaultInstallScript;
        try {
          newDefaultInstallScript = software_install_scripts(file.name);
        } catch (e) {
          ToastNotification/* notify */.me.error(SoftwareAddPage_helpers/* ADD_SOFTWARE_ERROR_PREFIX */.wy, {
            response: {
              data: {
                message: e instanceof Error ? e.message : String(e)
              }
            }
          });
          return;
        }
        let newDefaultUninstallScript;
        try {
          newDefaultUninstallScript = software_uninstall_scripts(file.name);
        } catch (e) {
          ToastNotification/* notify */.me.error(SoftwareAddPage_helpers/* ADD_SOFTWARE_ERROR_PREFIX */.wy, {
            response: {
              data: {
                message: e instanceof Error ? e.message : String(e)
              }
            }
          });
          return;
        }
        const newData = __spreadProps(PackageForm_spreadValues({}, formData), {
          software: file,
          installScript: newDefaultInstallScript || "",
          uninstallScript: newDefaultUninstallScript || ""
        });
        setFormData(newData);
        setFormValidation(generateFormValidation(newData));
      }
    }
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (maxSoftwarePackageSize !== void 0 && estimateUploadSize(formData) > maxSoftwarePackageSize) {
      notifyTooLarge();
      return;
    }
    onSubmit(formData);
  };
  const onChangeInstallScript = (value) => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), { installScript: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onChangePreInstallQuery = (value) => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), { preInstallQuery: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onChangePostInstallScript = (value) => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), { postInstallScript: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onChangeUninstallScript = (value) => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), { uninstallScript: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onToggleAutomaticInstall = (0,react.useCallback)(
    (value) => {
      const automaticInstall = typeof value === "boolean" ? value : !formData.automaticInstall;
      setFormData(__spreadProps(PackageForm_spreadValues({}, formData), { automaticInstall }));
    },
    [formData]
  );
  const onToggleSelfService = () => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), { selfService: !formData.selfService });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectCategory = ({
    name,
    value
  }) => {
    let newCategories;
    if (value) {
      newCategories = formData.categories.includes(name) ? formData.categories : [...formData.categories, name];
    } else {
      newCategories = formData.categories.filter((cat) => cat !== name);
    }
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), {
      categories: newCategories
    });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectTargetType = (value) => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), { targetType: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectCustomTarget = (value) => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), { customTarget: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectLabel = ({ name, value }) => {
    const newData = __spreadProps(PackageForm_spreadValues({}, formData), {
      labelTargets: __spreadProps(PackageForm_spreadValues({}, formData.labelTargets), { [name]: value })
    });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const disableFieldsForGitOps = gitopsCompatible && gitOpsModeEnabled;
  const isSubmitDisabled = !formValidation.isValid || disableFieldsForGitOps;
  const submitTooltipContent = createTooltipContent(
    formValidation,
    repoURL,
    disableFieldsForGitOps
  );
  const classNames = classnames_default()(PackageForm_baseClass, className);
  const ext = (0,fileUtils/* getExtensionFromFileName */.bv)(((_a = formData == null ? void 0 : formData.software) == null ? void 0 : _a.name) || "");
  const isExePackage = ext === "exe";
  const isTarballPackage = ext === "tar.gz";
  const isScriptPackage = isScriptOnlyPackageType(ext);
  const isIpaPackage = ext === "ipa";
  const canEditFile = isEditingSoftware && !isTarballPackage && !isFleetMaintainedApp;
  (0,react.useEffect)(() => {
    if ((isExePackage || isTarballPackage || isScriptPackage || isIpaPackage) && formData.automaticInstall) {
      onToggleAutomaticInstall(false);
    }
  }, [
    formData.automaticInstall,
    isExePackage,
    isTarballPackage,
    isScriptPackage,
    isIpaPackage,
    onToggleAutomaticInstall
  ]);
  const showAdvancedOptions = formData.software && !isIpaPackage;
  const showDeploySoftwareSlider = !!formData.software && // show after selection
  !gitOpsModeEnabled && // hide in gitOps mode
  !isEditingSoftware && // show only on add, not edit
  !multiPackageContext && // hide in the multi-package add modal — per Figma 2:130 the modal omits the deploy slider
  // automatic install is not supported for ipa packages, exe, tarball, or script packages
  !isIpaPackage && !isExePackage && !isTarballPackage && !isScriptPackage;
  const renderSoftwareDeploySlider = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    SoftwareDeploySlider/* default */.A,
    {
      deploySoftware: formData.automaticInstall,
      onToggleDeploySoftware: onToggleAutomaticInstall
    }
  ), formData.automaticInstall && renderSoftwareDeployWarningBanner());
  const showSoftwareOptionsSelector = !gitOpsModeEnabled && (isEditingSoftware || !!formData.software);
  const showTargetLabelSelector = !gitOpsModeEnabled && (isEditingSoftware || multiPackageContext || !!formData.software);
  const renderSoftwareOptionsSelector = () => /* @__PURE__ */ react.createElement(
    SoftwareOptionsSelector/* default */.A,
    {
      formData,
      onToggleSelfService,
      onSelectCategory,
      isEditingSoftware,
      onClickPreviewEndUserExperience: () => onClickPreviewEndUserExperience(isIpaPackage),
      teamId
    }
  );
  const renderTargetLabelSelector = () => /* @__PURE__ */ react.createElement(react.Fragment, null, !isEditingSoftware && /* @__PURE__ */ react.createElement(
    InfoBanner/* default */.A,
    {
      icon: "info-outline",
      iconColor: "ui-fleet-black-50",
      className: `${PackageForm_baseClass}__multi-package-banner`
    },
    "If multiple packages of the same software target the same host, Fleet will install the one that was added first."
  ), /* @__PURE__ */ react.createElement(
    TargetLabelSelector/* DropdownTargetLabelSelector */.m,
    {
      selectedTargetType: formData.targetType,
      selectedCustomTarget: formData.customTarget,
      selectedLabels: formData.labelTargets,
      customTargetOptions: helpers/* CUSTOM_TARGET_OPTIONS */.fK,
      className: `${PackageForm_baseClass}__target`,
      onSelectTargetType,
      onSelectCustomTarget,
      onSelectLabel,
      labels: labels || [],
      dropdownHelpText: formData.targetType === "Custom" && (0,helpers/* generateHelpText */.a3)(formData.automaticInstall, formData.customTarget)
    }
  ));
  return /* @__PURE__ */ react.createElement("div", { className: classNames }, /* @__PURE__ */ react.createElement("form", { className: `${PackageForm_baseClass}__form`, onSubmit: onFormSubmit }, /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      canEdit: canEditFile,
      graphicName: getGraphicName(ext || ""),
      accept: restrictedFileAccept != null ? restrictedFileAccept : ACCEPTED_EXTENSIONS,
      message: restrictedFileTypeLabel != null ? restrictedFileTypeLabel : renderFileTypeMessage(),
      onFileUpload: onFileSelect,
      buttonMessage: "Choose file",
      buttonType: "secondary",
      className: `${PackageForm_baseClass}__file-uploader`,
      fileDetails: formData.software ? (0,fileUtils/* getFileDetails */.P$)(formData.software) : void 0,
      gitopsCompatible,
      gitOpsModeEnabled
    }
  ), multiPackageContext && gitOpsModeEnabled && /* @__PURE__ */ react.createElement(SoftwareCustomPackage/* GitOpsCustomPackageBanner */.E, null), (showDeploySoftwareSlider || showSoftwareOptionsSelector || showTargetLabelSelector) && // Only show container if any one component will render — avoids stray gap spacing
  /* @__PURE__ */ react.createElement(
    "div",
    {
      className: gitopsCompatible && gitOpsModeEnabled ? `${PackageForm_baseClass}__form-fields--gitops-disabled form` : "form"
    },
    showDeploySoftwareSlider && renderSoftwareDeploySlider(),
    (showSoftwareOptionsSelector || showTargetLabelSelector) && /* @__PURE__ */ react.createElement("div", { className: `${PackageForm_baseClass}__form-frame` }, showSoftwareOptionsSelector && renderSoftwareOptionsSelector(), showTargetLabelSelector && renderTargetLabelSelector())
  ), showAdvancedOptions && /* @__PURE__ */ react.createElement(
    PackageAdvancedOptions_PackageAdvancedOptions,
    {
      showSchemaButton,
      selectedPackage: formData.software,
      errors: {
        preInstallQuery: (_b = formValidation.preInstallQuery) == null ? void 0 : _b.message
      },
      preInstallQuery: formData.preInstallQuery,
      installScript: formData.installScript,
      postInstallScript: formData.postInstallScript,
      uninstallScript: formData.uninstallScript,
      onClickShowSchema,
      onChangePreInstallQuery,
      onChangeInstallScript,
      onChangePostInstallScript,
      onChangeUninstallScript,
      gitopsCompatible,
      gitOpsModeEnabled,
      preInstallQueryLocked
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `${PackageForm_baseClass}__action-buttons` }, /* @__PURE__ */ (() => {
    const submitButton = /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", disabled: isSubmitDisabled }, isEditingSoftware || multiPackageContext ? "Save" : "Add software");
    return submitTooltipContent ? /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: submitTooltipContent,
        underline: false,
        showArrow: true,
        tipOffset: 10,
        position: "left"
      },
      submitButton
    ) : submitButton;
  })(), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel"))));
};
/* harmony default export */ var PackageForm_PackageForm = (react.memo(PackageForm));

;// ./frontend/pages/SoftwarePage/components/forms/PackageForm/index.ts




/***/ }),

/***/ 2191:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ SoftwareDeploySlider_SoftwareDeploySlider; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
;// ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySlider/SoftwareDeploySlider.tsx




const baseClass = "software-deploy-slider";
const LABEL_TOOLTIP = "Automatically install only on hosts missing this software.";
const SoftwareDeploySlider = ({
  deploySoftware,
  onToggleDeploySoftware,
  className
}) => {
  const sliderClassNames = classnames_default()(`${baseClass}__container`, className);
  return /* @__PURE__ */ react.createElement("div", { className: sliderClassNames }, /* @__PURE__ */ react.createElement(
    Slider/* default */.A,
    {
      value: deploySoftware,
      onChange: onToggleDeploySoftware,
      activeText: "Deploy",
      inactiveText: "Deploy",
      className: `${baseClass}__deploy-slider`,
      labelTooltip: LABEL_TOOLTIP
    }
  ));
};
/* harmony default export */ var SoftwareDeploySlider_SoftwareDeploySlider = (SoftwareDeploySlider);

;// ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySlider/index.ts




/***/ }),

/***/ 65019:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ AndroidOptionsDescription; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75942);
/* harmony import */ var components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74953);
/* harmony import */ var components_CustomLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24432);
/* harmony import */ var components_DataError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79519);
/* harmony import */ var components_forms_fields_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5410);
/* harmony import */ var components_forms_fields_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26806);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45584);
/* harmony import */ var interfaces_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43015);
/* harmony import */ var pages_hosts_details_cards_Software_SelfService_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17190);
/* harmony import */ var pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30104);
/* harmony import */ var router_paths__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78263);
/* harmony import */ var services_entities_self_service_categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23543);
/* harmony import */ var utilities_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89937);
/* harmony import */ var utilities_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12968);

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
















const baseClass = "software-options-selector";
const AndroidOptionsDescription = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Currently, Android apps can only be added as self-service and the end user can install them from the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong", null, "Play Store"), " in their work profile. Additionally, you can install it when hosts enroll on the", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
  components_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
  {
    url: router_paths__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.CONTROLS_INSTALL_SOFTWARE("android"),
    text: "Setup experience"
  }
), " ", "page.");
const CategoriesSelector = ({
  onSelectCategory,
  selectedCategories,
  onClickPreviewEndUserExperience,
  teamId
}) => {
  const isDynamic = teamId !== void 0;
  const { data: dynamicCategories, isLoading, isError } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["selfServiceCategories", teamId],
    () => services_entities_self_service_categories__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.getCategories(teamId),
    __spreadProps(__spreadValues({}, utilities_constants__WEBPACK_IMPORTED_MODULE_14__/* .DEFAULT_USE_QUERY_OPTIONS */ .QL), {
      // Don't retry on failure — a stale picker is worse than a fast error
      retry: false,
      enabled: isDynamic,
      select: (res) => res.self_service_categories.map((c) => ({
        id: c.id,
        label: c.name,
        value: c.name
      }))
    })
  );
  const categories = isDynamic ? dynamicCategories || [] : pages_hosts_details_cards_Software_SelfService_helpers__WEBPACK_IMPORTED_MODULE_10__/* .CATEGORIES_ITEMS */ .iT.map((c) => ({
    id: c.id,
    label: c.label,
    value: c.value
  }));
  const showEmptyState = isDynamic && !isLoading && !isError && categories.length === 0;
  const renderList = () => {
    if (isDynamic && isLoading) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__categories-loading` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { centered: false, small: true }));
    }
    if (isDynamic && isError) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        components_DataError__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
        {
          className: `${baseClass}__categories-error`,
          verticalPaddingSize: "pad-large"
        }
      );
    }
    if (showEmptyState) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__categories-empty` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        components_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
        {
          url: (0,utilities_url__WEBPACK_IMPORTED_MODULE_15__/* .getPathWithQueryParams */ .M8)(router_paths__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.SOFTWARE_LIBRARY_CATEGORIES, {
            fleet_id: teamId
          }),
          text: "Add category"
        }
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "to assign software to it."));
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__categories-selector` }, categories.map((cat) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__label`, key: cat.id }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      components_forms_fields_Checkbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
      {
        className: `${baseClass}__checkbox`,
        name: cat.value,
        value: selectedCategories.includes(cat.value),
        onChange: onSelectCategory,
        parseTarget: true
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__label-name` }, cat.label)
    ))));
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "form-field__label" }, "Categories"), renderList(), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    {
      variant: "secondary",
      onClick: onClickPreviewEndUserExperience,
      className: `${baseClass}__preview-button`
    },
    "Preview end user experience"
  ));
};
const SoftwareOptionsSelector = ({
  formData,
  onToggleSelfService,
  onClickPreviewEndUserExperience,
  onSelectCategory,
  platform,
  className,
  isIpaPackage,
  isEditingSoftware,
  disableOptions = false,
  teamId
}) => {
  const classNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()(baseClass, className);
  const isPlatformIosOrIpados = (0,interfaces_platform__WEBPACK_IMPORTED_MODULE_9__/* .isIPadOrIPhone */ .l)(platform || "") || isIpaPackage || false;
  const isPlatformAndroid = (0,interfaces_platform__WEBPACK_IMPORTED_MODULE_9__/* .isAndroid */ .m0)(platform || "");
  const isSelfServiceDisabled = disableOptions;
  const canSelectSoftwareCategories = formData.selfService && isEditingSoftware;
  const renderOptionsDescription = () => isPlatformAndroid ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(AndroidOptionsDescription, null) : null;
  const selfServiceLabelTooltip = !isSelfServiceDisabled ? (0,pages_SoftwarePage_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getSelfServiceTooltip */ .F$)(isPlatformIosOrIpados, isPlatformAndroid) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `form-field ${classNames}` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "form-field__label" }, "Options"), renderOptionsDescription(), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__self-service` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    components_forms_fields_Slider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
    {
      value: formData.selfService,
      onChange: onToggleSelfService,
      inactiveText: "Self service",
      activeText: "Self service",
      labelTooltip: selfServiceLabelTooltip,
      className: `${baseClass}__self-service-slider`,
      disabled: isSelfServiceDisabled
    }
  ), canSelectSoftwareCategories && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    CategoriesSelector,
    {
      onSelectCategory,
      selectedCategories: formData.categories,
      onClickPreviewEndUserExperience,
      teamId
    }
  )));
};
/* harmony default export */ __webpack_exports__.A = (SoftwareOptionsSelector);


/***/ }),

/***/ 98601:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* reexport safe */ _SoftwareOptionsSelector__WEBPACK_IMPORTED_MODULE_0__.A; }
/* harmony export */ });
/* harmony import */ var _SoftwareOptionsSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65019);




/***/ }),

/***/ 26783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ SoftwareVppForm_SoftwareVppForm; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/FileDetails/index.ts + 1 modules
var FileDetails = __webpack_require__(36291);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/TargetLabelSelector/index.ts + 2 modules
var TargetLabelSelector = __webpack_require__(22676);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareOptionsSelector/index.ts
var SoftwareOptionsSelector = __webpack_require__(98601);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySlider/index.ts + 1 modules
var SoftwareDeploySlider = __webpack_require__(2191);
;// ./frontend/pages/SoftwarePage/components/forms/SoftwareVppForm/helpers.tsx

const FORM_VALIDATION_CONFIG = {
  customTarget: {
    validations: [
      {
        name: "requiredLabelTargets",
        isValid: (formData) => {
          if (formData.targetType === "All hosts") return true;
          return Object.keys(formData.labelTargets).find(
            (key) => formData.labelTargets[key]
          ) !== void 0;
        }
      }
    ]
  }
};
const getUniqueAppId = (app) => `${app.app_store_id}_${app.platform}`;
const generateFormValidation = (formData) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(FORM_VALIDATION_CONFIG).forEach((key) => {
    const objKey = key;
    const failedValidation = FORM_VALIDATION_CONFIG[objKey].validations.find(
      (validation) => !validation.isValid(formData)
    );
    if (!failedValidation) {
      formValidation[objKey] = {
        isValid: true
      };
    } else {
      formValidation.isValid = false;
      formValidation[objKey] = {
        isValid: false
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/SoftwarePage/components/forms/SoftwareVppForm/SoftwareVppForm.tsx

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
















const baseClass = "software-vpp-form";
const VppAppListItem = ({
  app,
  selected,
  uniqueAppId,
  onSelect
}) => {
  return /* @__PURE__ */ react.createElement("li", { className: `${baseClass}__list-item` }, /* @__PURE__ */ react.createElement(
    Radio/* default */.A,
    {
      label: /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__app-info` }, /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { url: app.icon_url }), /* @__PURE__ */ react.createElement("span", null, app.name)),
      id: `vppApp-${uniqueAppId}`,
      checked: selected,
      value: uniqueAppId,
      name: "vppApp",
      onChange: () => onSelect(app)
    }
  ), app.platform && /* @__PURE__ */ react.createElement("div", { className: "app-platform" }, platform/* PLATFORM_DISPLAY_NAMES */.uc[app.platform]));
};
const VppAppList = ({ apps, selectedApp, onSelect }) => {
  const uniqueSelectedAppId = selectedApp ? getUniqueAppId(selectedApp) : null;
  return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__list-container` }, /* @__PURE__ */ react.createElement("ul", { className: `${baseClass}__list` }, apps.map((app) => {
    const uniqueAppId = getUniqueAppId(app);
    return /* @__PURE__ */ react.createElement(
      VppAppListItem,
      {
        key: uniqueAppId,
        app,
        selected: uniqueSelectedAppId === uniqueAppId,
        uniqueAppId,
        onSelect
      }
    );
  })));
};
const SoftwareVppForm = ({
  labels,
  vppApps,
  softwareVppForEdit,
  onSubmit,
  isLoading = false,
  onCancel,
  onClickPreviewEndUserExperience,
  teamId
}) => {
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const [formData, setFormData] = (0,react.useState)(
    softwareVppForEdit ? {
      selfService: softwareVppForEdit.self_service || false,
      automaticInstall: softwareVppForEdit.automatic_install || false,
      targetType: (0,helpers/* getTargetType */.Ag)(softwareVppForEdit),
      customTarget: (0,helpers/* getCustomTarget */.lQ)(softwareVppForEdit),
      labelTargets: (0,helpers/* generateSelectedLabels */.ER)(softwareVppForEdit),
      categories: softwareVppForEdit.categories || []
    } : {
      selectedApp: null,
      selfService: false,
      automaticInstall: false,
      targetType: "All hosts",
      customTarget: "labelsIncludeAny",
      labelTargets: {},
      categories: []
    }
  );
  const [formValidation, setFormValidation] = (0,react.useState)({
    isValid: false
    // Disables submit before VPP to add is selected and before edit VPP is edited
  });
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
  };
  const onSelectApp = (app) => {
    if ("selectedApp" in formData) {
      const newFormData = __spreadProps(__spreadValues({}, formData), {
        selectedApp: app,
        selfService: app.platform === "ios" || app.platform === "ipados" ? false : formData.selfService,
        automaticInstall: app.platform === "ios" || app.platform === "ipados" ? false : formData.automaticInstall
      });
      setFormData(newFormData);
      setFormValidation(generateFormValidation(newFormData));
    }
  };
  const onToggleSelfService = () => {
    const newData = __spreadProps(__spreadValues({}, formData), { selfService: !formData.selfService });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectCategory = ({
    name,
    value
  }) => {
    let newCategories;
    if (value) {
      newCategories = formData.categories.includes(name) ? formData.categories : [...formData.categories, name];
    } else {
      newCategories = formData.categories.filter((cat) => cat !== name);
    }
    const newData = __spreadProps(__spreadValues({}, formData), {
      categories: newCategories
    });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onToggleAutomaticInstall = () => {
    const newData = __spreadProps(__spreadValues({}, formData), {
      automaticInstall: !formData.automaticInstall
    });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectTargetType = (value) => {
    const newData = __spreadProps(__spreadValues({}, formData), { targetType: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectCustomTargetOption = (value) => {
    const newData = __spreadProps(__spreadValues({}, formData), { customTarget: value });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const onSelectLabel = ({ name, value }) => {
    const newData = __spreadProps(__spreadValues({}, formData), {
      labelTargets: __spreadProps(__spreadValues({}, formData.labelTargets), { [name]: value })
    });
    setFormData(newData);
    setFormValidation(generateFormValidation(newData));
  };
  const isSubmitDisabled = !formValidation.isValid;
  const renderContent = () => {
    if (softwareVppForEdit) {
      const isAppleMobile = (0,software/* isIpadOrIphoneSoftware */.w9)(softwareVppForEdit.platform);
      return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__form-fields` }, /* @__PURE__ */ react.createElement(
        FileDetails/* default */.A,
        {
          graphicNames: "app-store",
          fileDetails: {
            name: softwareVppForEdit.name,
            description: platform/* PLATFORM_DISPLAY_NAMES */.uc[softwareVppForEdit.platform]
          },
          canEdit: false
        }
      ), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__form-frame` }, /* @__PURE__ */ react.createElement(
        SoftwareOptionsSelector/* default */.A,
        {
          platform: softwareVppForEdit.platform,
          formData,
          onToggleSelfService,
          onSelectCategory,
          isEditingSoftware: true,
          onClickPreviewEndUserExperience: () => onClickPreviewEndUserExperience(isAppleMobile),
          teamId
        }
      ), /* @__PURE__ */ react.createElement(
        TargetLabelSelector/* DropdownTargetLabelSelector */.m,
        {
          selectedTargetType: formData.targetType,
          selectedCustomTarget: formData.customTarget,
          selectedLabels: formData.labelTargets,
          customTargetOptions: helpers/* CUSTOM_TARGET_OPTIONS */.fK,
          className: `${baseClass}__target`,
          onSelectTargetType,
          onSelectCustomTarget: onSelectCustomTargetOption,
          onSelectLabel,
          labels: labels || [],
          dropdownHelpText: (0,helpers/* generateHelpText */.a3)(false, formData.customTarget),
          subTitle: isAppleMobile ? "Changing this will also apply to targets for auto-updates." : ""
        }
      )));
    }
    const showDeploySoftwareSlider = !!formData.selectedApp && !(0,software/* isIpadOrIphoneSoftware */.w9)(formData.selectedApp.platform);
    if (vppApps) {
      return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__form-fields` }, /* @__PURE__ */ react.createElement(
        VppAppList,
        {
          apps: vppApps,
          selectedApp: formData.selectedApp || null,
          onSelect: onSelectApp
        }
      ), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__help-text` }, "These apps were added in Apple Business (AB). To add more apps, head to ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: "https://business.apple.com", text: "AB", newTab: true })), formData.selectedApp && /* @__PURE__ */ react.createElement(
        SoftwareOptionsSelector/* default */.A,
        {
          platform: formData.selectedApp.platform,
          formData,
          onToggleSelfService,
          onSelectCategory,
          onClickPreviewEndUserExperience: () => {
            var _a;
            return onClickPreviewEndUserExperience(
              (0,software/* isIpadOrIphoneSoftware */.w9)(((_a = formData.selectedApp) == null ? void 0 : _a.platform) || "")
            );
          },
          teamId
        }
      ), showDeploySoftwareSlider && /* @__PURE__ */ react.createElement(
        SoftwareDeploySlider/* default */.A,
        {
          deploySoftware: formData.automaticInstall,
          onToggleDeploySoftware: onToggleAutomaticInstall
        }
      ));
    }
    return null;
  };
  const contentWrapperClasses = classnames_default()(`${baseClass}__content-wrapper`, {
    [`${baseClass}__content-disabled`]: isLoading
  });
  const formContentClasses = classnames_default()(`${baseClass}__form-content`, {
    [`${baseClass}__form-content--disabled`]: gitOpsModeEnabled
  });
  return /* @__PURE__ */ react.createElement("form", { className: baseClass, onSubmit: onFormSubmit }, isLoading && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__overlay` }), /* @__PURE__ */ react.createElement("div", { className: contentWrapperClasses }, /* @__PURE__ */ react.createElement("div", { className: formContentClasses }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderContent())), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__action-buttons` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      entityType: "software",
      position: "top",
      tipOffset: 8,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          disabled: disableChildren || isSubmitDisabled,
          isLoading,
          className: `${baseClass}__add-software-btn`
        },
        softwareVppForEdit ? "Save" : "Add software"
      )
    }
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var SoftwareVppForm_SoftwareVppForm = (SoftwareVppForm);

;// ./frontend/pages/SoftwarePage/components/forms/SoftwareVppForm/index.ts




/***/ }),

/***/ 25862:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: function() { return /* binding */ BasicSoftwareTable; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75942);
/* harmony import */ var components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74953);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52978);
/* harmony import */ var components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99958);
/* harmony import */ var components_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34724);
/* harmony import */ var components_TableContainer_DataTable_HeaderCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40925);
/* harmony import */ var components_TableContainer_DataTable_SoftwareNameCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81790);
/* harmony import */ var context_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68774);
/* harmony import */ var services_entities_self_service_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23543);
/* harmony import */ var utilities_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89937);
/* harmony import */ var _cards_SelfServicePreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42526);
/* harmony import */ var _icons_SoftwareIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69906);














const baseClass = "categories-end-user-experience-preview-modal";
const InstalledCell = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "span",
  {
    className: `${baseClass}__status-cell ${baseClass}__status-cell--installed`
  },
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { name: "success" }),
  "Installed"
);
const NeverInstalledCell = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "span",
  {
    className: `${baseClass}__status-cell ${baseClass}__status-cell--never-installed`
  },
  utilities_constants__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_EMPTY_CELL_VALUE */ .r2
);
const columns = [
  {
    Header: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TableContainer_DataTable_HeaderCell__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, { value: "Name", isSortedDesc: cellProps.column.isSortedDesc }),
    accessor: "name",
    disableSortBy: true
  },
  {
    Header: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      components_TableContainer_DataTable_HeaderCell__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
      {
        value: "Install status",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "install_status",
    disableSortBy: true
  }
];
const EXAMPLE_SOFTWARE_ROWS = [
  { title: "Adobe Acrobat Reader" },
  { title: "Box Drive" }
];
const getData = (name, displayName, iconUrl, source, previewIcon) => {
  const currentSoftwareRow = {
    name: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      components_TableContainer_DataTable_SoftwareNameCell__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
      {
        name,
        display_name: displayName,
        source,
        iconUrl,
        pageContext: "deviceUser",
        isSelfService: true,
        previewIcon
      }
    ),
    install_status: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NeverInstalledCell, null)
  };
  const exampleSoftwareRows = EXAMPLE_SOFTWARE_ROWS.filter(
    (item) => item.title !== name
  ).map((item) => ({
    name: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      components_TableContainer_DataTable_SoftwareNameCell__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
      {
        name: item.title,
        source: "apps",
        pageContext: "deviceUser",
        isSelfService: true
      }
    ),
    install_status: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(InstalledCell, null)
  }));
  return [currentSoftwareRow, ...exampleSoftwareRows];
};
const EmptyState = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "No software found");
const BasicSoftwareTable = ({
  name,
  displayName,
  source,
  iconUrl = null,
  previewIcon
}) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    components_TableContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
    {
      columnConfigs: columns,
      data: getData(name, displayName, iconUrl, source, previewIcon),
      isLoading: false,
      emptyComponent: EmptyState,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      searchable: false,
      disablePagination: true,
      disableCount: true,
      disableTableHeader: true,
      disableHighlightOnHover: true
    }
  );
};
const CategoriesEndUserExperienceModal = ({
  onCancel,
  teamId,
  isIosOrIpadosApp = false,
  name = "Software name",
  displayName = "Software name",
  iconUrl,
  source,
  mobileVersion
}) => {
  var _a;
  const { config } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context_app__WEBPACK_IMPORTED_MODULE_8__/* .AppContext */ .BR);
  const { data: categories } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
    ["selfServiceCategories", teamId],
    () => services_entities_self_service_categories__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.getCategories(teamId),
    {
      select: (response) => response.self_service_categories,
      staleTime: 6e4
    }
  );
  const hasCategories = ((_a = categories == null ? void 0 : categories.length) != null ? _a : 0) > 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, { title: "End user experience", onExit: onCancel, className: baseClass }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "What end users see:"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _cards_SelfServicePreview__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
    {
      isIosOrIpadosApp,
      contactUrl: (config == null ? void 0 : config.org_info.contact_url) || "",
      name,
      displayName: displayName || name,
      versionLabel: mobileVersion || "Version (unknown)",
      hasCategories,
      renderIcon: () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _icons_SoftwareIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
        {
          name,
          source,
          url: iconUrl != null ? iconUrl : void 0
        }
      ),
      renderTable: () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        BasicSoftwareTable,
        {
          name,
          displayName,
          source,
          iconUrl
        }
      )
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { onClick: onCancel }, "Close")));
};
/* harmony default export */ __webpack_exports__.A = (CategoriesEndUserExperienceModal);


/***/ }),

/***/ 72753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* reexport safe */ _CategoriesEndUserExperienceModal__WEBPACK_IMPORTED_MODULE_0__.A; }
/* harmony export */ });
/* harmony import */ var _CategoriesEndUserExperienceModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25862);




/***/ }),

/***/ 82296:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* reexport safe */ _SoftwareVulnerabilitiesTable__WEBPACK_IMPORTED_MODULE_0__.A; }
/* harmony export */ });
/* harmony import */ var _SoftwareVulnerabilitiesTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56884);




/***/ }),

/***/ 49827:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ SoftwarePage_SoftwarePage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/buttons/AutomationsButton/index.ts + 1 modules
var AutomationsButton = __webpack_require__(85396);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/components/TeamsHeader/index.ts + 1 modules
var TeamsHeader = __webpack_require__(48392);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
;// ./frontend/pages/SoftwarePage/components/modals/AddSoftwareModal/AddSoftwareModal.tsx





const baseClass = "add-software-modal";
const AllTeamsMessage = ({ onExit }) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Please select a fleet first. Software can't be added when", " ", /* @__PURE__ */ react.createElement("b", null, "All teams"), " is selected."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit }, "Close")));
};
const AddSoftwareModal = ({ onExit, isFreeTier }) => {
  const renderModalContent = () => {
    if (isFreeTier) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit }, "Close")));
    }
    return /* @__PURE__ */ react.createElement(AllTeamsMessage, { onExit });
  };
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Add software", onExit, className: baseClass }, renderModalContent());
};
/* harmony default export */ var AddSoftwareModal_AddSoftwareModal = (AddSoftwareModal);

;// ./frontend/pages/SoftwarePage/components/modals/AddSoftwareModal/index.ts



// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_url/valid_url.ts
var valid_url = __webpack_require__(90879);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/hooks/useDeepEffect.ts
var useDeepEffect = __webpack_require__(98598);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/interfaces/config.ts
var interfaces_config = __webpack_require__(77906);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/pages/SoftwarePage/components/modals/PreviewPayloadModal/PreviewPayloadModal.tsx







const PreviewPayloadModal_baseClass = "preview-data-modal";
const PreviewPayloadModal = ({
  onCancel
}) => {
  const { isFreeTier } = (0,react.useContext)(app/* AppContext */.BR);
  const json = {
    timestamp: "0000-00-00T00:00:00Z",
    vulnerability: {
      cve: "CVE-2014-9471",
      details_link: "https://nvd.nist.gov/vuln/detail/CVE-2014-9471",
      epss_probability: 0.7,
      cvss_score: 5.7,
      cisa_known_exploit: true,
      cve_published: "2014-10-10T00:00:00Z",
      hosts_affected: [
        {
          id: 1,
          display_name: "macbook-1",
          url: "https://fleet.example.com/hosts/1",
          software_installed_paths: ["/usr/lib/some-path"]
        },
        {
          id: 2,
          display_name: "macbook-2",
          url: "https://fleet.example.com/hosts/2"
        }
      ]
    }
  };
  if (isFreeTier) {
    delete json.vulnerability.epss_probability;
    delete json.vulnerability.cvss_score;
    delete json.vulnerability.cisa_known_exploit;
    delete json.vulnerability.cve_published;
  }
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Example payload",
      onExit: onCancel,
      onEnter: onCancel,
      className: PreviewPayloadModal_baseClass
    },
    /* @__PURE__ */ react.createElement("p", null, "Want to learn more about how automations in Mesh work?", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/docs/using-fleet/automations",
        text: "Check out the Mesh documentation",
        newTab: true
      }
    )),
    /* @__PURE__ */ react.createElement("div", { className: `${PreviewPayloadModal_baseClass}__payload-request-preview` }, /* @__PURE__ */ react.createElement("pre", null, "POST https://server.com/example")),
    /* @__PURE__ */ react.createElement("div", { className: `${PreviewPayloadModal_baseClass}__payload-webhook-preview` }, /* @__PURE__ */ react.createElement("pre", { dangerouslySetInnerHTML: { __html: (0,helpers/* syntaxHighlight */._j)(json) } })),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close"))
  );
};
/* harmony default export */ var PreviewPayloadModal_PreviewPayloadModal = (PreviewPayloadModal);

;// ./frontend/pages/SoftwarePage/components/modals/PreviewPayloadModal/index.ts



;// ./assets/images/jira-vuln-software-preview-400x517@2x.png
var jira_vuln_software_preview_400x517_2x_namespaceObject = __webpack_require__.p + "jira-vuln-software-preview-400x517@2x@e81ae4ee12e444011656.png";
;// ./assets/images/jira-vuln-software-preview-premium-400x517@2x.png
var jira_vuln_software_preview_premium_400x517_2x_namespaceObject = __webpack_require__.p + "jira-vuln-software-preview-premium-400x517@2x@abbca148337388ec9478.png";
;// ./assets/images/zendesk-vuln-software-preview-400x455@2x.png
var zendesk_vuln_software_preview_400x455_2x_namespaceObject = __webpack_require__.p + "zendesk-vuln-software-preview-400x455@2x@5ff92eded21405fa63a4.png";
;// ./assets/images/zendesk-vuln-software-preview-premium-400x455@2x.png
var zendesk_vuln_software_preview_premium_400x455_2x_namespaceObject = __webpack_require__.p + "zendesk-vuln-software-preview-premium-400x455@2x@f56365fa55bb214ecac6.png";
;// ./frontend/pages/SoftwarePage/components/modals/PreviewTicketModal/PreviewTicketModal.tsx










const PreviewTicketModal_baseClass = "preview-ticket-modal";
const PreviewTicketModal = ({
  onCancel,
  integrationType
}) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const screenshot = integrationType === "jira" ? /* @__PURE__ */ react.createElement(
    "img",
    {
      src: isPremiumTier ? jira_vuln_software_preview_premium_400x517_2x_namespaceObject : jira_vuln_software_preview_400x517_2x_namespaceObject,
      alt: "Jira ticket",
      className: `${PreviewTicketModal_baseClass}__jira-screenshot`
    }
  ) : /* @__PURE__ */ react.createElement(
    "img",
    {
      src: isPremiumTier ? zendesk_vuln_software_preview_premium_400x455_2x_namespaceObject : zendesk_vuln_software_preview_400x455_2x_namespaceObject,
      alt: "Zendesk ticket",
      className: `${PreviewTicketModal_baseClass}__zendesk-screenshot`
    }
  );
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Example ticket",
      onExit: onCancel,
      onEnter: onCancel,
      className: PreviewTicketModal_baseClass,
      width: "large"
    },
    /* @__PURE__ */ react.createElement("p", { className: "automations-learn-more" }, "Want to learn more about how automations in Mesh work?", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/docs/using-fleet/automations",
        text: "Check out the Mesh documentation",
        newTab: true
      }
    )),
    /* @__PURE__ */ react.createElement("div", { className: `${PreviewTicketModal_baseClass}__example` }, screenshot),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close"))
  );
};
/* harmony default export */ var PreviewTicketModal_PreviewTicketModal = (PreviewTicketModal);

;// ./frontend/pages/SoftwarePage/components/modals/PreviewTicketModal/index.ts



;// ./frontend/pages/SoftwarePage/components/modals/ManageSoftwareAutomationsModal/ManageSoftwareAutomationsModal.tsx

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






















const isGlobalSWConfig = (config) => "vulnerabilities" in config;
const validateWebhookURL = (url) => {
  const errors = {};
  if (!url) {
    errors.url = "Please add a destination URL";
  } else if (!(0,valid_url/* default */.A)({ url })) {
    errors.url = "Destination URL is not a valid URL";
  } else {
    delete errors.url;
  }
  return { valid: (0,lodash.isEmpty)(errors), errors };
};
const ManageSoftwareAutomationsModal_baseClass = "manage-software-automations-modal";
const ManageAutomationsModal = ({
  router,
  onCancel: onReturnToApp,
  onCreateWebhookSubmit,
  togglePreviewPayloadModal,
  togglePreviewTicketModal,
  showPreviewPayloadModal,
  showPreviewTicketModal,
  softwareConfig
}) => {
  var _a, _b, _c;
  const vulnWebhookSettings = (_a = softwareConfig == null ? void 0 : softwareConfig.webhook_settings) == null ? void 0 : _a.vulnerabilities_webhook;
  const softwareVulnerabilityWebhookEnabled = !!(vulnWebhookSettings == null ? void 0 : vulnWebhookSettings.enable_vulnerabilities_webhook);
  const currentDestinationUrl = (vulnWebhookSettings == null ? void 0 : vulnWebhookSettings.destination_url) || "";
  const isVulnIntegrationEnabled = !!((_b = softwareConfig == null ? void 0 : softwareConfig.integrations.jira) == null ? void 0 : _b.some(
    (j) => j.enable_software_vulnerabilities
  )) || !!((_c = softwareConfig == null ? void 0 : softwareConfig.integrations.zendesk) == null ? void 0 : _c.some(
    (z) => z.enable_software_vulnerabilities
  ));
  const softwareVulnerabilityAutomationEnabled = softwareVulnerabilityWebhookEnabled || isVulnIntegrationEnabled;
  const [destinationUrl, setDestinationUrl] = (0,react.useState)(
    currentDestinationUrl || ""
  );
  const [errors, setErrors] = (0,react.useState)({});
  const [softwareAutomationsEnabled, setSoftwareAutomationsEnabled] = (0,react.useState)(
    softwareVulnerabilityAutomationEnabled || false
  );
  const [integrationEnabled, setIntegrationEnabled] = (0,react.useState)(
    !softwareVulnerabilityWebhookEnabled
  );
  const [jiraIntegrationsIndexed, setJiraIntegrationsIndexed] = (0,react.useState)();
  const [zendeskIntegrationsIndexed, setZendeskIntegrationsIndexed] = (0,react.useState)();
  const [allIntegrationsIndexed, setAllIntegrationsIndexed] = (0,react.useState)();
  const [
    selectedIntegration,
    setSelectedIntegration
  ] = (0,react.useState)();
  const { config: globalConfigFromContext, isFreeTier } = (0,react.useContext)(
    app/* AppContext */.BR
  );
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)("software");
  const maxAgeInNanoseconds = isGlobalSWConfig(softwareConfig) ? softwareConfig.vulnerabilities.recent_vulnerability_max_age : globalConfigFromContext == null ? void 0 : globalConfigFromContext.vulnerabilities.recent_vulnerability_max_age;
  const recentVulnerabilityMaxAge = maxAgeInNanoseconds ? Math.round(maxAgeInNanoseconds / 864e11) : interfaces_config/* CONFIG_DEFAULT_RECENT_VULNERABILITY_MAX_AGE_IN_DAYS */.fx;
  (0,useDeepEffect/* default */.A)(() => {
    setSoftwareAutomationsEnabled(
      softwareVulnerabilityAutomationEnabled || false
    );
  }, [softwareVulnerabilityAutomationEnabled]);
  (0,useDeepEffect/* default */.A)(() => {
    if (destinationUrl) {
      setErrors({});
    }
  }, [destinationUrl]);
  const { data: integrations } = (0,es.useQuery)(
    ["integrations"],
    () => config/* default */.A.loadAll(),
    {
      select: (data) => {
        return data.integrations;
      },
      onSuccess: (data) => {
        const addJiraIndexed = data.jira ? data.jira.map((integration, index) => {
          return __spreadProps(__spreadValues({}, integration), {
            originalIndex: index,
            type: "jira"
          });
        }) : [];
        setJiraIntegrationsIndexed(addJiraIndexed);
        const addZendeskIndexed = data.zendesk ? data.zendesk.map((integration, index) => {
          return __spreadProps(__spreadValues({}, integration), {
            originalIndex: index,
            type: "zendesk"
          });
        }) : [];
        setZendeskIntegrationsIndexed(addZendeskIndexed);
      }
    }
  );
  (0,react.useEffect)(() => {
    if (jiraIntegrationsIndexed && zendeskIntegrationsIndexed) {
      const combineDataSets = jiraIntegrationsIndexed.concat(
        zendeskIntegrationsIndexed
      );
      setAllIntegrationsIndexed(
        combineDataSets == null ? void 0 : combineDataSets.map((integration, index) => {
          return __spreadProps(__spreadValues({}, integration), { dropdownIndex: index });
        })
      );
    }
  }, [
    jiraIntegrationsIndexed,
    zendeskIntegrationsIndexed,
    setAllIntegrationsIndexed
  ]);
  (0,react.useEffect)(() => {
    if (allIntegrationsIndexed) {
      const currentSelectedIntegration = allIntegrationsIndexed.find(
        (integration) => {
          return integration.enable_software_vulnerabilities === true;
        }
      );
      setSelectedIntegration(currentSelectedIntegration);
    }
  }, [allIntegrationsIndexed]);
  const onAddIntegration = () => {
    router.push(paths/* default */.A.ADMIN_INTEGRATIONS);
  };
  const onURLChange = (value) => {
    setDestinationUrl(value);
  };
  const onURLBlur = () => {
    if (!softwareAutomationsEnabled || gitOpsModeEnabled) {
      return;
    }
    const { errors: webhookErrors } = validateWebhookURL(destinationUrl);
    setErrors((prevErrs) => __spreadValues(__spreadValues({}, (0,lodash.omit)(prevErrs, "url")), webhookErrors));
  };
  const handleSaveAutomation = (evt) => {
    evt.preventDefault();
    const {
      valid: validWebhookUrl,
      errors: errorsWebhookUrl
    } = validateWebhookURL(destinationUrl);
    if (!validWebhookUrl) {
      setErrors((prevErrs) => __spreadValues(__spreadValues({}, prevErrs), errorsWebhookUrl));
    } else {
      setErrors((prevErrs) => (0,lodash.omit)(prevErrs, "url"));
    }
    const configSoftwareAutomations = {
      webhook_settings: {
        vulnerabilities_webhook: {
          destination_url: validWebhookUrl ? destinationUrl : currentDestinationUrl,
          // if new destination url is not valid, revert to current destination url
          enable_vulnerabilities_webhook: softwareVulnerabilityWebhookEnabled
        }
      },
      integrations: {
        jira: (integrations == null ? void 0 : integrations.jira) || [],
        zendesk: (integrations == null ? void 0 : integrations.zendesk) || []
      }
    };
    const readyForSubmission = () => {
      if (!softwareAutomationsEnabled) {
        configSoftwareAutomations.webhook_settings.vulnerabilities_webhook.enable_vulnerabilities_webhook = false;
        const disableAllJira = configSoftwareAutomations.integrations.jira.map(
          (integration) => {
            return __spreadProps(__spreadValues({}, integration), { enable_software_vulnerabilities: false });
          }
        );
        configSoftwareAutomations.integrations.jira = disableAllJira;
        const disableAllZendesk = configSoftwareAutomations.integrations.zendesk.map(
          (integration) => {
            return __spreadProps(__spreadValues({}, integration), {
              enable_software_vulnerabilities: false
            });
          }
        );
        configSoftwareAutomations.integrations.zendesk = disableAllZendesk;
        return true;
      }
      if (!integrationEnabled) {
        if (!(0,lodash.isEmpty)(errorsWebhookUrl)) {
          return false;
        }
        configSoftwareAutomations.webhook_settings.vulnerabilities_webhook.enable_vulnerabilities_webhook = true;
        const disableAllJira = configSoftwareAutomations.integrations.jira.map(
          (integration) => {
            return __spreadProps(__spreadValues({}, integration), {
              enable_software_vulnerabilities: false
            });
          }
        );
        configSoftwareAutomations.integrations.jira = disableAllJira;
        const disableAllZendesk = configSoftwareAutomations.integrations.zendesk.map(
          (integration) => {
            return __spreadProps(__spreadValues({}, integration), {
              enable_software_vulnerabilities: false
            });
          }
        );
        configSoftwareAutomations.integrations.zendesk = disableAllZendesk;
        return true;
      }
      configSoftwareAutomations.webhook_settings.vulnerabilities_webhook.enable_vulnerabilities_webhook = false;
      const enableSelectedJiraIntegrationOnly = configSoftwareAutomations.integrations.jira.map(
        (integration, index) => {
          return __spreadProps(__spreadValues({}, integration), {
            enable_software_vulnerabilities: (selectedIntegration == null ? void 0 : selectedIntegration.type) === "jira" ? index === (selectedIntegration == null ? void 0 : selectedIntegration.originalIndex) : false
          });
        }
      );
      configSoftwareAutomations.integrations.jira = enableSelectedJiraIntegrationOnly;
      const enableSelectedZendeskIntegrationOnly = configSoftwareAutomations.integrations.zendesk.map(
        (integration, index) => {
          return __spreadProps(__spreadValues({}, integration), {
            enable_software_vulnerabilities: (selectedIntegration == null ? void 0 : selectedIntegration.type) === "zendesk" ? index === (selectedIntegration == null ? void 0 : selectedIntegration.originalIndex) : false
          });
        }
      );
      configSoftwareAutomations.integrations.zendesk = enableSelectedZendeskIntegrationOnly;
      return true;
    };
    if (!readyForSubmission()) {
      return;
    }
    onCreateWebhookSubmit(configSoftwareAutomations);
    onReturnToApp();
  };
  const createIntegrationDropdownOptions = () => {
    const integrationOptions = allIntegrationsIndexed == null ? void 0 : allIntegrationsIndexed.map((i) => {
      return {
        value: String(i.dropdownIndex),
        label: `${i.url} - ${i.project_key || i.group_id}`
      };
    });
    return integrationOptions;
  };
  const onChangeSelectIntegration = (selectIntegrationIndex) => {
    const integrationWithIndex = allIntegrationsIndexed == null ? void 0 : allIntegrationsIndexed.find(
      (integ) => integ.dropdownIndex === parseInt(selectIntegrationIndex, 10)
    );
    setSelectedIntegration(integrationWithIndex);
  };
  const onRadioChange = (enableIntegration) => {
    return () => {
      setIntegrationEnabled(enableIntegration);
    };
  };
  const renderTicket = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ManageSoftwareAutomationsModal_baseClass}__software-automation-description` }, isFreeTier ? /* @__PURE__ */ react.createElement(react.Fragment, null, "A ticket will be created in your ", /* @__PURE__ */ react.createElement("b", null, "Integration"), " for each detected vulnerability (CVE).") : /* @__PURE__ */ react.createElement(react.Fragment, null, "A ticket will be created in your ", /* @__PURE__ */ react.createElement("b", null, "Integration"), " if a detected vulnerability (CVE) was published in the last", " ", recentVulnerabilityMaxAge || interfaces_config/* CONFIG_DEFAULT_RECENT_VULNERABILITY_MAX_AGE_IN_DAYS */.fx, " ", "days.")), jiraIntegrationsIndexed && jiraIntegrationsIndexed.length > 0 || zendeskIntegrationsIndexed && zendeskIntegrationsIndexed.length > 0 ? /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        disabled: gitOpsModeEnabled,
        searchable: true,
        options: createIntegrationDropdownOptions(),
        onChange: onChangeSelectIntegration,
        placeholder: "Select integration",
        value: selectedIntegration == null ? void 0 : selectedIntegration.dropdownIndex,
        label: "Integration",
        wrapperClassName: `${ManageSoftwareAutomationsModal_baseClass}__form-field ${ManageSoftwareAutomationsModal_baseClass}__form-field--frequency`,
        helpText: "For each new vulnerability detected, Mesh will create a ticket with a list of the affected hosts."
      }
    ) : /* @__PURE__ */ react.createElement("div", { className: `form-field ${ManageSoftwareAutomationsModal_baseClass}__no-integrations` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "You have no integrations."), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onAddIntegration,
        disabled: gitOpsModeEnabled || !softwareAutomationsEnabled
      },
      "Add integration"
    ))), !!selectedIntegration && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "secondary",
        onClick: togglePreviewTicketModal
      },
      "Preview ticket"
    ));
  };
  const renderWebhook = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ManageSoftwareAutomationsModal_baseClass}__software-automation-description` }, /* @__PURE__ */ react.createElement("p", null, isFreeTier ? /* @__PURE__ */ react.createElement(react.Fragment, null, "A request will be sent to your configured ", /* @__PURE__ */ react.createElement("b", null, "Destination URL"), " ", "for each detected vulnerability (CVE).") : /* @__PURE__ */ react.createElement(react.Fragment, null, "A request will be sent to your configured ", /* @__PURE__ */ react.createElement("b", null, "Destination URL"), " ", "if a detected vulnerability (CVE) was published in the last", " ", recentVulnerabilityMaxAge || "30", " days."))), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        inputWrapperClass: `${ManageSoftwareAutomationsModal_baseClass}__url-input`,
        name: "webhook-url",
        label: "Destination URL",
        type: "text",
        value: destinationUrl,
        onChange: onURLChange,
        onBlur: onURLBlur,
        error: errors.url,
        helpText: "For each new vulnerability detected, Mesh will send a JSON payload to this URL with a list of the affected hosts.",
        placeholder: "https://server.com/example",
        tooltip: "Provide a URL to deliver a webhook request to.",
        disabled: !softwareAutomationsEnabled || gitOpsModeEnabled
      }
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "secondary",
        onClick: togglePreviewPayloadModal
      },
      "Example payload"
    ));
  };
  if (showPreviewTicketModal && (selectedIntegration == null ? void 0 : selectedIntegration.type)) {
    return /* @__PURE__ */ react.createElement(
      PreviewTicketModal_PreviewTicketModal,
      {
        integrationType: selectedIntegration.type,
        onCancel: togglePreviewTicketModal
      }
    );
  }
  if (showPreviewPayloadModal) {
    return /* @__PURE__ */ react.createElement(PreviewPayloadModal_PreviewPayloadModal, { onCancel: togglePreviewPayloadModal });
  }
  const renderSaveButton = () => {
    const hasIntegrations = !((jiraIntegrationsIndexed && jiraIntegrationsIndexed.length === 0 || zendeskIntegrationsIndexed && zendeskIntegrationsIndexed.length === 0) && integrationEnabled && softwareAutomationsEnabled);
    const renderRawButton = (gomDisabled = false) => /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Add an integration to create tickets for vulnerability automations."),
        disableTooltip: hasIntegrations || gomDisabled,
        position: "bottom",
        underline: false,
        showArrow: true,
        tipOffset: 6
      },
      /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          onClick: handleSaveAutomation,
          disabled: softwareAutomationsEnabled && integrationEnabled && !selectedIntegration || softwareAutomationsEnabled && !integrationEnabled && destinationUrl === "" || gomDisabled
        },
        "Save"
      )
    );
    return /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        entityType: "software",
        renderChildren: renderRawButton,
        tipOffset: 6
      }
    );
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      onExit: onReturnToApp,
      title: "Manage automations",
      className: ManageSoftwareAutomationsModal_baseClass,
      width: "large"
    },
    /* @__PURE__ */ react.createElement("div", { className: `${ManageSoftwareAutomationsModal_baseClass} form` }, /* @__PURE__ */ react.createElement(
      Slider/* default */.A,
      {
        disabled: gitOpsModeEnabled,
        value: softwareAutomationsEnabled,
        onChange: () => setSoftwareAutomationsEnabled(!softwareAutomationsEnabled),
        inactiveText: "Vulnerability automations disabled",
        activeText: "Vulnerability automations enabled"
      }
    ), /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `form ${ManageSoftwareAutomationsModal_baseClass}__software-automations${softwareAutomationsEnabled ? "" : "__disabled"}`
      },
      /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Workflow"), /* @__PURE__ */ react.createElement(
        Radio/* default */.A,
        {
          className: `${ManageSoftwareAutomationsModal_baseClass}__radio-input`,
          label: "Ticket",
          id: "ticket-radio-btn",
          checked: integrationEnabled,
          value: "ticket",
          name: "workflow-type",
          onChange: onRadioChange(true),
          disabled: !softwareAutomationsEnabled || gitOpsModeEnabled
        }
      ), /* @__PURE__ */ react.createElement(
        Radio/* default */.A,
        {
          className: `${ManageSoftwareAutomationsModal_baseClass}__radio-input`,
          label: "Webhook",
          id: "webhook-radio-btn",
          checked: !integrationEnabled,
          value: "webhook",
          name: "workflow-type",
          onChange: onRadioChange(false),
          disabled: !softwareAutomationsEnabled || gitOpsModeEnabled
        }
      )),
      integrationEnabled ? renderTicket() : renderWebhook(),
      /* @__PURE__ */ react.createElement("p", null, "Vulnerability automations currently run for software vulnerabilities. Interested in automations for OS vulnerabilities?", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: constants/* SUPPORT_LINK */.FI,
          text: "Let us know",
          newTab: true,
          disableKeyboardNavigation: !softwareAutomationsEnabled
        }
      ))
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, renderSaveButton(), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onReturnToApp, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var ManageSoftwareAutomationsModal = (ManageAutomationsModal);

;// ./frontend/pages/SoftwarePage/components/modals/ManageSoftwareAutomationsModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/modals/SoftwareFiltersModal/index.ts + 1 modules
var SoftwareFiltersModal = __webpack_require__(26046);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/SoftwareInventory/SoftwareInventoryTable/helpers.ts
var SoftwareInventoryTable_helpers = __webpack_require__(91262);
;// ./frontend/pages/SoftwarePage/SoftwarePage.tsx

var SoftwarePage_defProp = Object.defineProperty;
var SoftwarePage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SoftwarePage_hasOwnProp = Object.prototype.hasOwnProperty;
var SoftwarePage_propIsEnum = Object.prototype.propertyIsEnumerable;
var SoftwarePage_defNormalProp = (obj, key, value) => key in obj ? SoftwarePage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SoftwarePage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SoftwarePage_hasOwnProp.call(b, prop))
      SoftwarePage_defNormalProp(a, prop, b[prop]);
  if (SoftwarePage_getOwnPropSymbols)
    for (var prop of SoftwarePage_getOwnPropSymbols(b)) {
      if (SoftwarePage_propIsEnum.call(b, prop))
        SoftwarePage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (SoftwarePage_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && SoftwarePage_getOwnPropSymbols)
    for (var prop of SoftwarePage_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && SoftwarePage_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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
























const softwareSubNav = [
  {
    name: "Inventory",
    pathname: paths/* default */.A.SOFTWARE_INVENTORY
  },
  {
    name: "OS",
    pathname: paths/* default */.A.SOFTWARE_OS
  },
  {
    name: "Vulnerabilities",
    pathname: paths/* default */.A.SOFTWARE_VULNERABILITIES
  }
];
const premiumSoftwareSubNav = [
  ...softwareSubNav,
  {
    name: "Library",
    pathname: paths/* default */.A.SOFTWARE_LIBRARY
  }
];
const getTabIndex = (path, navItems) => {
  return navItems.findIndex((navItem) => {
    if (navItem.name === "Inventory" && paths/* default */.A.SOFTWARE_VERSIONS === path) {
      return true;
    }
    return path.startsWith(navItem.pathname);
  });
};
const DEFAULT_SORT_DIRECTION = "desc";
const DEFAULT_SORT_HEADER = "hosts_count";
const DEFAULT_PAGE_SIZE = 50;
const DEFAULT_PAGE = 0;
const SoftwarePage_baseClass = "software-page";
const SoftwarePage = ({ children, router, location }) => {
  var _a;
  const {
    config: globalConfigFromContext,
    isFreeTier,
    isGlobalAdmin,
    isGlobalMaintainer,
    isOnGlobalTeam,
    isTeamAdmin,
    isTeamMaintainer,
    isPremiumTier
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isPrimoMode = ((_a = globalConfigFromContext == null ? void 0 : globalConfigFromContext.partnerships) == null ? void 0 : _a.enable_primo) || false;
  const queryParams = location.query;
  const sortHeader = queryParams && queryParams.order_key ? queryParams.order_key : DEFAULT_SORT_HEADER;
  const sortDirection = (queryParams == null ? void 0 : queryParams.order_direction) === void 0 ? DEFAULT_SORT_DIRECTION : queryParams.order_direction;
  const page = queryParams && queryParams.page ? parseInt(queryParams.page, 10) : DEFAULT_PAGE;
  const platform = (queryParams == null ? void 0 : queryParams.platform) || "all";
  const query = queryParams && queryParams.query ? queryParams.query : "";
  const showExploitedVulnerabilitiesOnly = queryParams !== void 0 && queryParams.exploit === "true";
  const selfServiceOnly = (queryParams == null ? void 0 : queryParams.self_service) === "true";
  const softwareVulnFilters = (0,SoftwareInventoryTable_helpers/* getSoftwareVulnFiltersFromQueryParams */.WB)(
    queryParams
  );
  const [showManageAutomationsModal, setShowManageAutomationsModal] = (0,react.useState)(
    false
  );
  const [showPreviewPayloadModal, setShowPreviewPayloadModal] = (0,react.useState)(false);
  const [showPreviewTicketModal, setShowPreviewTicketModal] = (0,react.useState)(false);
  const [showAddSoftwareModal, setShowAddSoftwareModal] = (0,react.useState)(false);
  const [showSoftwareFiltersModal, setShowSoftwareFiltersModal] = (0,react.useState)(
    false
  );
  const {
    currentTeamId,
    isAllTeamsSelected,
    isRouteOk,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true,
    // When switching to "All fleets", remove self_service param (Library-only)
    overrideParamsOnTeamChange: {
      self_service: (newTeamId) => newTeamId === team/* APP_CONTEXT_ALL_TEAMS_ID */.jc
    }
  });
  const {
    data: softwareConfig,
    error: softwareConfigError,
    isFetching: isFetchingSoftwareConfig,
    refetch: refetchSoftwareConfig
  } = (0,es.useQuery)(
    [{ scope: "softwareConfig", teamId: teamIdForApi }],
    ({ queryKey }) => {
      const { teamId } = queryKey[0];
      return teamId ? teams/* default */.A.load(teamId) : config/* default */.A.loadAll();
    },
    {
      enabled: isRouteOk,
      select: (data) => "team" in data ? data.team : data
    }
  );
  const isSoftwareConfigLoaded = !isFetchingSoftwareConfig && !softwareConfigError && !!softwareConfig;
  (0,react.useEffect)(() => {
    if ((queryParams == null ? void 0 : queryParams.manage_automations) !== "1") return;
    if (!isSoftwareConfigLoaded) return;
    if (isGlobalAdmin && (isAllTeamsSelected || isPrimoMode)) {
      setShowManageAutomationsModal(true);
    }
    const _a2 = queryParams, { manage_automations } = _a2, rest = __objRest(_a2, ["manage_automations"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [
    queryParams,
    isSoftwareConfigLoaded,
    isAllTeamsSelected,
    isPrimoMode,
    isGlobalAdmin,
    location.pathname,
    router
  ]);
  const toggleManageAutomationsModal = (0,react.useCallback)(() => {
    setShowManageAutomationsModal(!showManageAutomationsModal);
  }, [setShowManageAutomationsModal, showManageAutomationsModal]);
  const togglePreviewPayloadModal = (0,react.useCallback)(() => {
    setShowPreviewPayloadModal(!showPreviewPayloadModal);
  }, [setShowPreviewPayloadModal, showPreviewPayloadModal]);
  const togglePreviewTicketModal = (0,react.useCallback)(() => {
    setShowPreviewTicketModal(!showPreviewTicketModal);
  }, [setShowPreviewTicketModal, showPreviewTicketModal]);
  const toggleSoftwareFiltersModal = (0,react.useCallback)(() => {
    setShowSoftwareFiltersModal(!showSoftwareFiltersModal);
  }, [setShowSoftwareFiltersModal, showSoftwareFiltersModal]);
  const onCreateWebhookSubmit = (configSoftwareAutomations) => __async(null, null, function* () {
    try {
      const request = config/* default */.A.update(configSoftwareAutomations);
      yield request.then(() => {
        ToastNotification/* notify */.me.success("Successfully updated vulnerability automations.");
        refetchSoftwareConfig();
      });
    } catch (e) {
      ToastNotification/* notify */.me.error(
        "Could not update vulnerability automations. Please try again."
      );
    } finally {
      toggleManageAutomationsModal();
    }
  });
  const onAddSoftware = (0,react.useCallback)(() => {
    if (currentTeamId === team/* APP_CONTEXT_ALL_TEAMS_ID */.jc) {
      setShowAddSoftwareModal(true);
    } else {
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED, {
          fleet_id: currentTeamId
        })
      );
    }
  }, [currentTeamId, router]);
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      handleTeamChange(teamId);
    },
    [handleTeamChange]
  );
  const isOnLibraryTab = location.pathname.startsWith(paths/* default */.A.SOFTWARE_LIBRARY);
  (0,react.useEffect)(() => {
    if (isPremiumTier === void 0) return;
    if (!isRouteOk) return;
    if (isOnLibraryTab && (!isPremiumTier || isAllTeamsSelected)) {
      router.replace(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.SOFTWARE_INVENTORY, {
          fleet_id: teamIdForApi
        })
      );
    }
  }, [
    isPremiumTier,
    isRouteOk,
    isAllTeamsSelected,
    isOnLibraryTab,
    teamIdForApi,
    router
  ]);
  const onApplyVulnFilters = (vulnFilters) => {
    const newQueryParams = SoftwarePage_spreadValues({
      query,
      teamId: currentTeamId,
      orderDirection: sortDirection,
      orderKey: sortHeader,
      page: 0
    }, (0,SoftwareInventoryTable_helpers/* buildSoftwareVulnFiltersQueryParams */.yz)(vulnFilters));
    router.replace(
      (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: location.pathname,
        routeTemplate: "",
        queryParams: (0,url/* convertParamsToSnakeCase */.vF)(newQueryParams)
      })
    );
    toggleSoftwareFiltersModal();
  };
  const navItems = isPremiumTier ? premiumSoftwareSubNav : softwareSubNav;
  const navigateToNav = (0,react.useCallback)(
    (i) => {
      const teamIdParam = {
        fleet_id: location == null ? void 0 : location.query.fleet_id,
        page: 0
        // Fixes flakey page reset in API call when switching between tabs
      };
      const navPath = (0,url/* getPathWithQueryParams */.M8)(navItems[i].pathname, teamIdParam);
      router.replace(navPath);
    },
    [location == null ? void 0 : location.query.fleet_id, navItems, router]
  );
  const renderPageActions = () => {
    const canManageAutomations = isGlobalAdmin;
    const canAddSoftware = isGlobalAdmin || isGlobalMaintainer || isTeamAdmin || isTeamMaintainer;
    if (!isSoftwareConfigLoaded) return null;
    return /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__action-buttons` }, canManageAutomations && /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        underline: false,
        tipContent: /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__header__tooltip` }, "Select \u201CAll fleets\u201D to manage automations."),
        disableTooltip: isAllTeamsSelected || isPrimoMode,
        position: "top",
        showArrow: true
      },
      /* @__PURE__ */ react.createElement(
        AutomationsButton/* default */.A,
        {
          disabled: !isAllTeamsSelected && !isPrimoMode,
          onClick: toggleManageAutomationsModal,
          className: `${SoftwarePage_baseClass}__manage-automations`
        }
      )
    ), canAddSoftware && /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        underline: false,
        tipContent: /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__header__tooltip` }, isPremiumTier ? "Select a fleet to add software." : "This feature is included in Mesh Premium."),
        disableTooltip: !isAllTeamsSelected,
        position: "top",
        showArrow: true
      },
      /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onAddSoftware, disabled: isAllTeamsSelected }, /* @__PURE__ */ react.createElement("span", null, "Add software"))
    ));
  };
  const renderHeaderDescription = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Manage software and search for installed software, OS, and vulnerabilities.");
  };
  const renderBody = () => {
    var _a2;
    const isLibraryDisabled = isAllTeamsSelected;
    return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(
      esm/* Tabs */.tU,
      {
        selectedIndex: getTabIndex((location == null ? void 0 : location.pathname) || "", navItems),
        onSelect: (i) => navigateToNav(i)
      },
      /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, navItems.map((navItem) => {
        const isDisabledTab = navItem.name === "Library" && isLibraryDisabled;
        if (isDisabledTab) {
          return /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: navItem.name, "data-text": navItem.name, disabled: true }, /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: "Select a fleet to view its software library.",
              showArrow: true,
              position: "top",
              tipOffset: 12,
              underline: false
            },
            /* @__PURE__ */ react.createElement(TabText/* default */.A, null, navItem.name)
          ));
        }
        return /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: navItem.name, "data-text": navItem.name }, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, navItem.name));
      }))
    )), /* @__PURE__ */ react.createElement("div", { key: location == null ? void 0 : location.pathname, className: "tab-nav-routed-content" }, react.cloneElement(children, {
      router,
      isSoftwareEnabled: Boolean(
        (_a2 = softwareConfig == null ? void 0 : softwareConfig.features) == null ? void 0 : _a2.enable_software_inventory
      ),
      perPage: DEFAULT_PAGE_SIZE,
      orderDirection: sortDirection,
      orderKey: sortHeader,
      currentPage: page,
      teamId: teamIdForApi,
      // TODO: move down into the Software Titles component
      platform,
      query,
      showExploitedVulnerabilitiesOnly,
      selfServiceOnly,
      vulnFilters: softwareVulnFilters,
      onAddFiltersClick: toggleSoftwareFiltersModal
    })));
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: SoftwarePage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__header-wrap` }, /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__text` }, /* @__PURE__ */ react.createElement("div", { className: `${SoftwarePage_baseClass}__title` }, isPremiumTier && !isPrimoMode ? /* @__PURE__ */ react.createElement(
    TeamsHeader/* default */.A,
    {
      isOnGlobalTeam,
      currentTeamId,
      userTeams,
      onTeamChange
    }
  ) : /* @__PURE__ */ react.createElement("h1", null, "Software")))), renderPageActions()), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: renderHeaderDescription() })), renderBody(), showManageAutomationsModal && softwareConfig && /* @__PURE__ */ react.createElement(
    ManageSoftwareAutomationsModal,
    {
      router,
      onCancel: toggleManageAutomationsModal,
      onCreateWebhookSubmit,
      togglePreviewPayloadModal,
      togglePreviewTicketModal,
      showPreviewPayloadModal,
      showPreviewTicketModal,
      softwareConfig
    }
  ), showAddSoftwareModal && /* @__PURE__ */ react.createElement(
    AddSoftwareModal_AddSoftwareModal,
    {
      onExit: () => setShowAddSoftwareModal(false),
      isFreeTier
    }
  ), showSoftwareFiltersModal && /* @__PURE__ */ react.createElement(
    SoftwareFiltersModal/* default */.A,
    {
      onExit: toggleSoftwareFiltersModal,
      onSubmit: onApplyVulnFilters,
      vulnFilters: softwareVulnFilters,
      isPremiumTier: isPremiumTier || false
    }
  )));
};
/* harmony default export */ var SoftwarePage_SoftwarePage = (SoftwarePage);

;// ./frontend/pages/SoftwarePage/index.ts




/***/ })

}]);