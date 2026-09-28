"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[693],{

/***/ 84657:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53806);
/* harmony import */ var components_FleetsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82196);
/* harmony import */ var components_MainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(827);
/* harmony import */ var components_TabNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15570);
/* harmony import */ var components_TabText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37738);
/* harmony import */ var context_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68774);
/* harmony import */ var hooks_useTeamIdParam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38944);
/* harmony import */ var interfaces_team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62131);
/* harmony import */ var router_paths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78263);
/* harmony import */ var _OSUpdates_components_CurrentVersionSection_CurrentVersionSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34988);












const controlsSubNav = [
  {
    name: "OS updates",
    pathname: router_paths__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.CONTROLS_OS_UPDATES
  },
  {
    name: "OS settings",
    pathname: router_paths__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.CONTROLS_OS_SETTINGS
  },
  {
    name: "Setup experience",
    pathname: router_paths__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.CONTROLS_SETUP_EXPERIENCE
  },
  {
    name: "Scripts",
    pathname: router_paths__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.CONTROLS_SCRIPTS
  },
  {
    name: "Variables",
    pathname: router_paths__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.CONTROLS_VARIABLES
  }
];
const subNavQueryParams = [
  "page",
  "order_key",
  "order_direction",
  "status"
];
const getTabIndex = (permittedControlsSubNav, path) => {
  return permittedControlsSubNav.findIndex((navItem) => {
    return path.startsWith(navItem.pathname);
  });
};
const baseClass = "manage-controls-page";
const ManageControlsPage = ({
  // TODO(sarah): decide on pattern to pass team id to subcomponents.
  // using children makes it difficult to centralize page-level control
  // over team id param
  children,
  location,
  router
}) => {
  var _a;
  const page = parseInt(((_a = location == null ? void 0 : location.query) == null ? void 0 : _a.page) || "", 10) || 0;
  const {
    config,
    isOnGlobalTeam,
    isPremiumTier,
    isGlobalAdmin,
    isTeamAdmin,
    isTeamTechnician,
    isGlobalTechnician
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context_app__WEBPACK_IMPORTED_MODULE_6__/* .AppContext */ .BR);
  const {
    currentTeamId,
    userTeams,
    teamIdForApi,
    handleTeamChange
  } = (0,hooks_useTeamIdParam__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay)({
    location,
    router,
    includeAllTeams: false,
    includeNoTeam: true,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: true,
      observer: false,
      observer_plus: false,
      technician: true
    }
  });
  const teamIdForApiToUse = isPremiumTier === false ? interfaces_team__WEBPACK_IMPORTED_MODULE_8__/* .API_NO_TEAM_ID */ .Rp : teamIdForApi;
  const permittedControlsSubNav = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let renderedSubNav = controlsSubNav;
    if (isTeamTechnician || isGlobalTechnician) {
      renderedSubNav = controlsSubNav.filter((navItem) => {
        return navItem.name === "OS settings" || navItem.name === "Scripts";
      });
    } else if (!isGlobalAdmin && !isTeamAdmin) {
      renderedSubNav = controlsSubNav.filter((navItem) => {
        return navItem.name !== "OS updates";
      });
    }
    return renderedSubNav;
  }, [isGlobalAdmin, isTeamAdmin, isTeamTechnician, isGlobalTechnician]);
  const currentTabIndex = getTabIndex(
    permittedControlsSubNav,
    (location == null ? void 0 : location.pathname) || ""
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentTabIndex === -1 && permittedControlsSubNav.length > 0) {
      const newParams = new URLSearchParams(location == null ? void 0 : location.search);
      subNavQueryParams.forEach((p) => newParams.delete(p));
      const newQuery = newParams.toString();
      router.replace(
        permittedControlsSubNav[0].pathname.concat(
          newQuery ? `?${newQuery}` : ""
        )
      );
    }
  }, [currentTabIndex, permittedControlsSubNav, location == null ? void 0 : location.search, router]);
  const navigateToNav = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (i) => {
      const navPath = permittedControlsSubNav[i].pathname;
      const newParams = new URLSearchParams(location == null ? void 0 : location.search);
      subNavQueryParams.forEach((p) => newParams.delete(p));
      const newQuery = newParams.toString();
      router.replace(
        navPath.concat(newQuery ? `?${newQuery}` : "").concat((location == null ? void 0 : location.hash) || "")
      );
    },
    [location, router, permittedControlsSubNav]
  );
  const renderBody = () => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TabNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      react_tabs__WEBPACK_IMPORTED_MODULE_1__/* .Tabs */ .tU,
      {
        selectedIndex: getTabIndex(
          permittedControlsSubNav,
          (location == null ? void 0 : location.pathname) || ""
        ),
        onSelect: navigateToNav
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__/* .TabList */ .wb, null, permittedControlsSubNav.map((navItem) => {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__/* .Tab */ .oz, { key: navItem.name, "data-text": navItem.name }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TabText__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, navItem.name));
      }))
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-nav-routed-content" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: currentTabIndex, className: "tab-nav-routed-content__fade" }, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
      teamIdForApi: teamIdForApiToUse,
      currentPage: page,
      queryParams: (0,_OSUpdates_components_CurrentVersionSection_CurrentVersionSection__WEBPACK_IMPORTED_MODULE_10__/* .parseOSUpdatesCurrentVersionsQueryParams */ .E)(
        location.query
      )
    }))));
  };
  const renderHeaderContent = () => {
    var _a2;
    if (isPremiumTier && !((_a2 = config == null ? void 0 : config.partnerships) == null ? void 0 : _a2.enable_primo) && userTeams) {
      if (userTeams.length > 1 || isOnGlobalTeam) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          components_FleetsDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          {
            currentUserFleets: userTeams,
            selectedFleetId: currentTeamId,
            onChange: handleTeamChange,
            includeAllFleets: false,
            includeUnassigned: true
          }
        );
      }
      if (!isOnGlobalTeam && userTeams.length === 1) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, userTeams[0].name);
      }
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Controls");
  };
  const renderHeader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${baseClass}__header` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${baseClass}__text` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${baseClass}__title` }, renderHeaderContent())));
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_MainContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { className: baseClass }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${baseClass}__header-wrap` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `${baseClass}__header-wrap` }, renderHeader())), renderBody());
};
/* harmony default export */ __webpack_exports__["default"] = (ManageControlsPage);


/***/ }),

/***/ 40179:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ OSSettings_OSSettings; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SideNav/index.ts + 3 modules
var SideNav = __webpack_require__(67675);
// EXTERNAL MODULE: ./frontend/services/entities/mdm.ts
var mdm = __webpack_require__(31332);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/ListItem/index.ts + 1 modules
var ListItem = __webpack_require__(83080);
// EXTERNAL MODULE: ./frontend/components/Pagination/index.ts + 1 modules
var Pagination = __webpack_require__(4891);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/UploadList/index.ts + 1 modules
var UploadList = __webpack_require__(67050);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/services/entities/certificates.ts
var certificates = __webpack_require__(85986);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/AddCertAuthorityCard/AddCertAuthorityCard.tsx





const baseClass = "add-cert-authority-card";
const AddCertAuthorityCard = ({ router }) => /* @__PURE__ */ react.createElement(Card/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__content-wrap` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__text` }, /* @__PURE__ */ react.createElement("b", null, "Add certificate authority"), /* @__PURE__ */ react.createElement("p", null, "To add certificates, a custom SCEP certificate authority must be configured in organization settings.")), /* @__PURE__ */ react.createElement(
  Button/* default */.A,
  {
    className: `${baseClass}__add-button`,
    type: "button",
    onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_CERTIFICATE_AUTHORITIES)
  },
  "Add CA"
)));
/* harmony default export */ var AddCertAuthorityCard_AddCertAuthorityCard = (AddCertAuthorityCard);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/AddCertAuthorityCard/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/AddCertificateCard/AddCertificateCard.tsx





const AddCertificateCard_baseClass = "add-cert-card";
const AddCertCard = ({ setShowModal }) => /* @__PURE__ */ react.createElement(Card/* default */.A, { className: AddCertificateCard_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${AddCertificateCard_baseClass}__content-wrap` }, /* @__PURE__ */ react.createElement("div", { className: `${AddCertificateCard_baseClass}__text` }, /* @__PURE__ */ react.createElement("b", null, "Add certificate"), /* @__PURE__ */ react.createElement("p", null, "Help your end users connect to your corporate network.")), /* @__PURE__ */ react.createElement(
  GitOpsModeTooltipWrapper/* default */.A,
  {
    tipOffset: 8,
    renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        disabled: disableChildren,
        className: `${AddCertificateCard_baseClass}__card--add-button`,
        type: "button",
        onClick: () => setShowModal(true)
      },
      "Add"
    )
  }
)));
/* harmony default export */ var AddCertificateCard = (AddCertCard);

// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/AddCertificateModal/helpers.ts

const INVALID_NAME_MSG = "Invalid characters. Only letters, numbers, spaces, dashes, and underscores allowed.";
const NAME_REQUIRED_MSG = "Name must be completed.";
const CA_REQUIRED_MSG = "Certificate authority must be completed.";
const SUBJECT_NAME_REQUIRED_MSG = "Subject name must be completed.";
const generateFormValidations = () => {
  const FORM_VALIDATIONS = {
    name: {
      validations: [
        {
          name: "required",
          required: true,
          isValid: (formData) => {
            return formData.name.trim().length > 0;
          },
          message: NAME_REQUIRED_MSG
        },
        {
          name: "invalidCharacters",
          isValid: (formData) => {
            return /^[a-zA-Z0-9 \-_]+$/.test(formData.name);
          },
          message: INVALID_NAME_MSG
        }
      ]
    },
    certAuthorityId: {
      validations: [
        {
          name: "required",
          required: true,
          isValid: (formData) => {
            return formData.certAuthorityId !== "";
          },
          message: CA_REQUIRED_MSG
        }
      ]
    },
    subjectName: {
      validations: [
        {
          name: "required",
          required: true,
          isValid: (formData) => {
            return formData.subjectName.trim().length > 0;
          },
          message: SUBJECT_NAME_REQUIRED_MSG
        }
        // accept any value, let the server handle any errors
      ]
    },
    // SAN is optional; format and length are validated server-side and surfaced
    // back to the user via the 422 error path in AddCertificateModal.tsx.
    subjectAlternativeName: { validations: [] }
  };
  return FORM_VALIDATIONS;
};
const getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const validateFormData = (formData, validationConfig, attemptedSubmit = false) => {
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
      const suppressMessage = failedValidation.required && !attemptedSubmit;
      formValidation[objKey] = {
        isValid: false,
        message: suppressMessage ? void 0 : getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/AddCertificateModal/AddCertificateModal.tsx

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















const AddCertificateModal_baseClass = "add-ct-modal";
const AddCertModal = ({
  onExit,
  onSuccess,
  currentTeamId
}) => {
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [attemptedSubmit, setAttemptedSubmit] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    name: "",
    certAuthorityId: "",
    subjectName: "",
    subjectAlternativeName: ""
  });
  const [serverErrors, setServerErrors] = (0,react.useState)({});
  const validations = (0,react.useMemo)(() => generateFormValidations(), []);
  const formValidation = (0,react.useMemo)(
    () => validateFormData(formData, validations, attemptedSubmit),
    [formData, validations, attemptedSubmit]
  );
  const {
    data: cAResp,
    isLoading: isLoadingCAs,
    isError: isErrorCAs
  } = (0,es.useQuery)(
    "certAuthorities",
    () => {
      return certificates/* default */.A.getCertificateAuthoritiesList();
    },
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      select: (data) => data.certificate_authorities
    })
  );
  const caPartials = cAResp != null ? cAResp : [];
  const caDropdownOptions = caPartials.filter((cAP) => cAP.type === "custom_scep_proxy").map((cAP) => ({
    value: cAP.id.toString(),
    label: cAP.name
  }));
  const onInputChange = (update) => {
    const updatedFormData = __spreadProps(__spreadValues({}, formData), { [update.name]: update.value });
    setFormData(updatedFormData);
    if (update.name === "name" && serverErrors.name) {
      setServerErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 }));
    }
    if (update.name === "subjectAlternativeName" && serverErrors.subjectAlternativeName) {
      setServerErrors((prev) => __spreadProps(__spreadValues({}, prev), {
        subjectAlternativeName: void 0
      }));
    }
  };
  const onChangeCA = (newValue) => {
    var _a;
    const updatedFormData = __spreadProps(__spreadValues({}, formData), {
      certAuthorityId: (_a = newValue == null ? void 0 : newValue.value) != null ? _a : ""
    });
    setFormData(updatedFormData);
  };
  const onSubmitForm = (evt) => __async(null, null, function* () {
    evt.preventDefault();
    if (!formValidation.isValid) {
      setAttemptedSubmit(true);
      return;
    }
    setIsUpdating(true);
    try {
      yield certificates/* default */.A.addCert({
        name: formData.name,
        certAuthorityId: parseInt(formData.certAuthorityId, 10),
        subjectName: formData.subjectName,
        subjectAlternativeName: formData.subjectAlternativeName,
        teamId: currentTeamId
      });
      ToastNotification/* notify */.me.success("Successfully added your certificate.");
      onSuccess();
      onExit();
    } catch (e) {
      const sanReason = (0,errors/* getErrorReason */.F3)(e, {
        nameEquals: "subject_alternative_name"
      });
      const nameConflict = (0,errors/* getErrorReason */.F3)(e, {
        reasonIncludes: "already exists"
      });
      if (sanReason) {
        setServerErrors({ subjectAlternativeName: sanReason });
      } else if (nameConflict) {
        setServerErrors({
          name: "Name is already used by another certificate."
        });
      } else {
        ToastNotification/* notify */.me.error("Couldn't add certificate. Please try again.", {
          response: e
        });
      }
    } finally {
      setIsUpdating(false);
    }
  });
  const renderForm = () => {
    var _a, _b, _c, _d, _e, _f;
    if (isLoadingCAs) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isErrorCAs) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement("form", { className: AddCertificateModal_baseClass, onSubmit: onSubmitForm }, /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        label: "Certificate authority (CA)",
        name: "certificateAuthority",
        options: caDropdownOptions,
        value: formData.certAuthorityId,
        onChange: onChangeCA,
        customNoOptionsMessage: "No certificate authorities found.",
        placeholder: "Select certificate authority",
        helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Certificate will be issued from this CA. Currently, only custom SCEP CA is supported. You can add CAs on the", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: paths/* default */.A.ADMIN_INTEGRATIONS_CERTIFICATE_AUTHORITIES,
            text: "Certificate authorities"
          }
        ), " ", "page."),
        error: (_a = formValidation.certAuthorityId) == null ? void 0 : _a.message
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "name",
        label: "Name",
        value: formData.name,
        onChange: onInputChange,
        error: (_c = serverErrors.name) != null ? _c : (_b = formValidation.name) == null ? void 0 : _b.message,
        helpText: "Letters, numbers, spaces, dashes, and underscores only. Name can be used as certificate alias to reference in configuration profiles.",
        parseTarget: true,
        placeholder: "VPN certificate",
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "subjectName",
        label: "Subject name (SN)",
        type: "textarea",
        value: formData.subjectName,
        onChange: onInputChange,
        error: (_d = formValidation.subjectName) == null ? void 0 : _d.message,
        helpText: 'Separate subject fields by ", ". For example: CN=john@example.com, O=Acme Inc.',
        parseTarget: true,
        placeholder: "CN=$FLEET_VAR_HOST_END_USER_IDP_USERNAME, O=Your Organization"
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "subjectAlternativeName",
        label: "Subject alternative name (SAN)",
        type: "textarea",
        value: formData.subjectAlternativeName,
        onChange: onInputChange,
        error: (_f = serverErrors.subjectAlternativeName) != null ? _f : (_e = formValidation.subjectAlternativeName) == null ? void 0 : _e.message,
        helpText: 'Optional. Separate fields by ", " using format KEY=value. Allowed keys: DNS, EMAIL, UPN, IP, URI.',
        parseTarget: true,
        placeholder: "UPN=$FLEET_VAR_HOST_END_USER_IDP_USERNAME, EMAIL=$FLEET_VAR_HOST_END_USER_IDP_USERNAME"
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { isLoading: isUpdating, disabled: isUpdating, type: "submit" }, "Add"), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel")));
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: AddCertificateModal_baseClass,
      title: "Add certificate",
      width: "large",
      onExit,
      isContentDisabled: isUpdating
    },
    renderForm()
  );
};
/* harmony default export */ var AddCertificateModal = (AddCertModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/AddCertificateModal/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/DeleteCertificateModal/DeleteCertificateModal.tsx

var DeleteCertificateModal_async = (__this, __arguments, generator) => {
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





const DeleteCertificateModal_baseClass = "delete-cert-template-modal";
const DeleteCertificateModal = ({
  cert,
  onSuccess,
  onExit
}) => {
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const { name, id } = cert;
  const onDelete = () => DeleteCertificateModal_async(null, null, function* () {
    setIsUpdating(true);
    try {
      yield certificates/* default */.A.deleteCert(id);
      ToastNotification/* notify */.me.success("Successfully deleted certificate.");
      setIsUpdating(false);
      onSuccess();
      onExit();
    } catch (e) {
      setIsUpdating(false);
      ToastNotification/* notify */.me.error("Couldn't delete certificate. Please try again.", {
        response: e
      });
    }
  });
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: DeleteCertificateModal_baseClass, title: "Delete certificate", onExit }, /* @__PURE__ */ react.createElement("p", null, "This action will remove the ", /* @__PURE__ */ react.createElement("b", null, name), " certificate from all hosts assigned to this fleet."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      variant: "alert",
      onClick: onDelete,
      isLoading: isUpdating,
      disabled: isUpdating
    },
    "Delete"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel")));
};
/* harmony default export */ var DeleteCertificateModal_DeleteCertificateModal = (DeleteCertificateModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/DeleteCertificateModal/index.ts



// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/ViewCertificateModal/ViewCertificateModal.tsx







const ViewCertificateModal_baseClass = "view-certificate-modal";
const ViewCertificateModal = ({ cert, onExit }) => {
  const {
    name,
    certificate_authority_name: caName,
    subject_name: subjectName,
    subject_alternative_name: subjectAlternativeName,
    created_at
  } = cert;
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: ViewCertificateModal_baseClass, title: name, width: "large", onExit }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ViewCertificateModal_baseClass}__content` }, /* @__PURE__ */ react.createElement("div", { className: `${ViewCertificateModal_baseClass}__summary` }, /* @__PURE__ */ react.createElement(DataSet/* default */.A, { title: "Certificate authority", value: caName }), /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: "Added",
      value: (0,date_format/* timeAgo */.fF)(new Date(created_at), { addSuffix: true })
    }
  )), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Subject name (SN)",
      name: "subjectName",
      type: "textarea",
      value: subjectName,
      readOnly: true
    }
  ), subjectAlternativeName && /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Subject alternative name (SAN)",
      name: "subjectAlternativeName",
      type: "textarea",
      value: subjectAlternativeName,
      readOnly: true
    }
  )), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit }, "Done"))));
};
/* harmony default export */ var ViewCertificateModal_ViewCertificateModal = (ViewCertificateModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/components/ViewCertificateModal/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/Certificates.tsx

var Certificates_defProp = Object.defineProperty;
var Certificates_defProps = Object.defineProperties;
var Certificates_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Certificates_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Certificates_hasOwnProp = Object.prototype.hasOwnProperty;
var Certificates_propIsEnum = Object.prototype.propertyIsEnumerable;
var Certificates_defNormalProp = (obj, key, value) => key in obj ? Certificates_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Certificates_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Certificates_hasOwnProp.call(b, prop))
      Certificates_defNormalProp(a, prop, b[prop]);
  if (Certificates_getOwnPropSymbols)
    for (var prop of Certificates_getOwnPropSymbols(b)) {
      if (Certificates_propIsEnum.call(b, prop))
        Certificates_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Certificates_spreadProps = (a, b) => Certificates_defProps(a, Certificates_getOwnPropDescs(b));




























const Certificates_baseClass = "certificates";
const Certificates = ({
  currentTeamId,
  router,
  currentPage = 0,
  onMutation
}) => {
  const [showAddCertModal, setShowAddCertModal] = (0,react.useState)(false);
  const [certToView, setCertToView] = (0,react.useState)(null);
  const [certToDelete, setCertToDelete] = (0,react.useState)(null);
  const { config, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const { gitOpsModeEnabled, repoURL } = (0,useGitOpsMode/* default */.A)();
  const androidMdmEnabled = !!(config == null ? void 0 : config.mdm.android_enabled_and_configured);
  const {
    data: certsResp,
    isLoading: isLoadingCerts,
    isError: isErrorCerts,
    refetch: refetchCerts
  } = (0,es.useQuery)(
    [
      {
        scope: "certificates",
        fleet_id: currentTeamId,
        page: currentPage,
        per_page: 10
      }
    ],
    ({ queryKey }) => certificates/* default */.A.getCerts(queryKey[0]),
    Certificates_spreadProps(Certificates_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier && androidMdmEnabled
    })
  );
  const {
    data: certAuthorities,
    isLoading: isLoadingCAs,
    isError: isErrorCAs
  } = (0,es.useQuery)(
    ["certAuthorities"],
    () => certificates/* default */.A.getCertificateAuthoritiesList(),
    Certificates_spreadProps(Certificates_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier && androidMdmEnabled,
      select: (data) => data.certificate_authorities
    })
  );
  const hasCustomScepCA = (certAuthorities != null ? certAuthorities : []).some(
    (ca) => ca.type === "custom_scep_proxy"
  );
  const certs = (certsResp == null ? void 0 : certsResp.certificates) || [];
  const { has_next_results: hasNext, has_previous_results: hasPrev } = (certsResp == null ? void 0 : certsResp.meta) || {};
  const onUpdateSuccess = () => {
    refetchCerts();
    onMutation();
  };
  const path = paths/* default */.A.CONTROLS_CERTIFICATES;
  const queryString = isPremiumTier ? `?fleet_id=${currentTeamId}&` : "?";
  const onPrevPage = (0,react.useCallback)(() => {
    router.push(path.concat(`${queryString}page=${currentPage - 1}`));
  }, [router, path, currentPage, queryString]);
  const onNextPage = (0,react.useCallback)(() => {
    router.push(path.concat(`${queryString}page=${currentPage + 1}`));
  }, [router, path, currentPage, queryString]);
  const onSelectCertAction = (action, cert) => {
    switch (action) {
      case "view":
        setCertToView(cert);
        break;
      case "delete":
        setCertToDelete(cert);
        break;
      default:
        break;
    }
  };
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (!androidMdmEnabled) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "Additional configuration required",
          info: "Android MDM must be turned on to add certificates.",
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      );
    }
    if (isLoadingCerts) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isErrorCerts) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (!certs.length) {
      if (isLoadingCAs) {
        return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
      }
      if (isErrorCAs) {
        return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
      }
      return hasCustomScepCA ? /* @__PURE__ */ react.createElement(AddCertificateCard, { setShowModal: setShowAddCertModal }) : /* @__PURE__ */ react.createElement(AddCertAuthorityCard_AddCertAuthorityCard, { router });
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      UploadList/* default */.A,
      {
        keyAttribute: "id",
        listItems: certs,
        ListItemComponent: ({ listItem }) => {
          const {
            name,
            certificate_authority_name: caName,
            created_at
          } = listItem;
          const details = /* @__PURE__ */ react.createElement(react.Fragment, null, caName, " \u2022 Updated", " ", (0,date_format/* timeAgo */.fF)(new Date(created_at), { addSuffix: true }));
          const certActions = [
            { label: "View certificate", value: "view" },
            {
              label: "Delete",
              value: "delete",
              disabled: gitOpsModeEnabled,
              tooltipContent: gitOpsModeEnabled && repoURL ? (0,helpers/* getGitOpsModeTipContent */.qV)(repoURL) : void 0
            }
          ];
          return /* @__PURE__ */ react.createElement(
            ListItem/* default */.A,
            {
              graphic: "file-certificate",
              title: /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: name }),
              details,
              actions: /* @__PURE__ */ react.createElement(
                ActionsDropdown/* default */.A,
                {
                  options: certActions,
                  placeholder: "Actions",
                  variant: "secondary",
                  menuAlign: "right",
                  menuPlacement: "auto",
                  onChange: (action) => onSelectCertAction(action, listItem)
                }
              )
            }
          );
        }
      }
    ), /* @__PURE__ */ react.createElement(
      Pagination/* default */.A,
      {
        disableNext: !hasNext,
        disablePrev: !hasPrev,
        hidePagination: !hasNext && !hasPrev,
        onNextPage,
        onPrevPage
      }
    ));
  };
  const showAddCertButton = isPremiumTier && androidMdmEnabled && hasCustomScepCA;
  return /* @__PURE__ */ react.createElement("div", { className: `${Certificates_baseClass}` }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Certificates", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement("div", { className: `${Certificates_baseClass}__tab-header` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Deploy certificates. Currently only Android is supported. For macOS, iOS, iPadOS and Windows use configuration profiles, and for Linux use scripts.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          text: "Learn more",
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/certificates`
        }
      ))
    }
  ), showAddCertButton && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "secondary",
          size: "small",
          onClick: () => setShowAddCertModal(true),
          disabled: disableChildren,
          icon: "plus"
        },
        "Add certificate"
      )
    }
  )), renderContent(), showAddCertModal && /* @__PURE__ */ react.createElement(
    AddCertificateModal,
    {
      onExit: () => setShowAddCertModal(false),
      onSuccess: onUpdateSuccess,
      currentTeamId
    }
  ), certToView && /* @__PURE__ */ react.createElement(ViewCertificateModal_ViewCertificateModal, { cert: certToView, onExit: () => setCertToView(null) }), certToDelete && /* @__PURE__ */ react.createElement(
    DeleteCertificateModal_DeleteCertificateModal,
    {
      cert: certToDelete,
      onSuccess: onUpdateSuccess,
      onExit: () => setCertToDelete(null)
    }
  ));
};
/* harmony default export */ var Certificates_Certificates = (Certificates);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Certificates/index.ts



// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/Graphic/index.ts
var Graphic = __webpack_require__(20881);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/AddAssetModal/AddAssetModal.tsx

var AddAssetModal_async = (__this, __arguments, generator) => {
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










const AddAssetModal_baseClass = "add-asset-modal";
const LEARN_MORE_URL = "https://fleetdm.com/learn-more-about/configuration-profile-assets";
const DEFAULT_ERROR_MESSAGE = "Couldn't add asset. Please try again.";
const FileChooser = ({ isLoading, onFileOpen }) => {
  const inputRef = (0,react.useRef)(null);
  return /* @__PURE__ */ react.createElement("div", { className: `${AddAssetModal_baseClass}__file-chooser` }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-json", className: `${AddAssetModal_baseClass}__graphic` }), /* @__PURE__ */ react.createElement("span", { className: `${AddAssetModal_baseClass}__file-chooser--title` }, "Upload asset"), /* @__PURE__ */ react.createElement("span", { className: `${AddAssetModal_baseClass}__file-chooser--message` }, "Only JSON files with com.apple.asset.* are supported. Referenced data (Reference.DataURL) must be self-hosted.", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { newTab: true, text: "Learn more", url: LEARN_MORE_URL })), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${AddAssetModal_baseClass}__upload-button`,
      variant: "secondary",
      isLoading,
      onClick: () => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.click();
      }
    },
    /* @__PURE__ */ react.createElement("span", { className: `${AddAssetModal_baseClass}__file-chooser--button-wrap` }, "Choose file ", /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "upload" }))
  ), /* @__PURE__ */ react.createElement(
    "input",
    {
      ref: inputRef,
      accept: ".json",
      id: "upload-asset",
      type: "file",
      hidden: true,
      onChange: (e) => {
        onFileOpen(e.target.files);
      }
    }
  ));
};
const FileDetails = ({ fileName }) => {
  const lastDot = fileName.lastIndexOf(".");
  const name = lastDot > 0 ? fileName.slice(0, lastDot) : fileName;
  const ext = lastDot > 0 ? fileName.slice(lastDot + 1) : "";
  return /* @__PURE__ */ react.createElement("div", { className: `${AddAssetModal_baseClass}__selected-file` }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-json", className: `${AddAssetModal_baseClass}__graphic` }), /* @__PURE__ */ react.createElement("div", { className: `${AddAssetModal_baseClass}__selected-file--details` }, /* @__PURE__ */ react.createElement("div", { className: `${AddAssetModal_baseClass}__selected-file--details--name` }, name), ext && /* @__PURE__ */ react.createElement("div", { className: `${AddAssetModal_baseClass}__selected-file--details--platform` }, ".", ext)));
};
const AddAssetModal = ({
  currentTeamId,
  onUpload,
  closeModal
}) => {
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [fileName, setFileName] = (0,react.useState)(null);
  const fileRef = (0,react.useRef)(null);
  const onDone = () => {
    fileRef.current = null;
    setFileName(null);
    closeModal();
  };
  const onFileOpen = (files) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    fileRef.current = file;
    setFileName(file.name);
  };
  const onAddAsset = () => AddAssetModal_async(null, null, function* () {
    if (!fileRef.current) {
      ToastNotification/* notify */.me.error(DEFAULT_ERROR_MESSAGE);
      return;
    }
    setIsLoading(true);
    try {
      yield mdm/* default */.A.uploadAsset({
        file: fileRef.current,
        teamId: currentTeamId
      });
      ToastNotification/* notify */.me.success("Successfully added.");
      onUpload();
    } catch (e) {
      ToastNotification/* notify */.me.error((0,errors/* getErrorReason */.F3)(e) || DEFAULT_ERROR_MESSAGE, { response: e });
    } finally {
      setIsLoading(false);
      onDone();
    }
  });
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: AddAssetModal_baseClass, title: "Add asset", onExit: onDone }, /* @__PURE__ */ react.createElement("div", { className: `${AddAssetModal_baseClass}__modal-content-wrap` }, /* @__PURE__ */ react.createElement(Card/* default */.A, { color: "grey", className: `${AddAssetModal_baseClass}__file` }, !fileName ? /* @__PURE__ */ react.createElement(FileChooser, { isLoading, onFileOpen }) : /* @__PURE__ */ react.createElement(FileDetails, { fileName })), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      onClick: onAddAsset,
      isLoading,
      disabled: !fileName
    },
    "Add asset"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onDone }, "Cancel"))));
};
/* harmony default export */ var AddAssetModal_AddAssetModal = (AddAssetModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/AddAssetModal/index.ts



// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 5 modules
var format = __webpack_require__(54070);
// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./frontend/components/buttons/CopyButton/index.ts + 2 modules
var CopyButton = __webpack_require__(57390);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/AssetListItem/AssetListItem.tsx

var AssetListItem_async = (__this, __arguments, generator) => {
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












const AssetListItem_baseClass = "asset-list-item";
const AssetDetails = ({ asset }) => {
  const uploadedAt = asset.uploaded_at ? new Date(asset.uploaded_at) : null;
  const uploadedText = !uploadedAt || Number.isNaN(uploadedAt.getTime()) ? "Uploaded" : `Uploaded ${(0,date_format/* timeAgo */.fF)(uploadedAt, { addSuffix: true })}`;
  return /* @__PURE__ */ react.createElement("div", { className: `${AssetListItem_baseClass}__details` }, /* @__PURE__ */ react.createElement("span", null, uploadedText), /* @__PURE__ */ react.createElement("span", null, "\u2022"), /* @__PURE__ */ react.createElement("span", { className: `${AssetListItem_baseClass}__identifier` }, asset.identifier), /* @__PURE__ */ react.createElement(
    CopyButton/* default */.A,
    {
      copyText: asset.identifier,
      variant: "compact",
      ariaLabel: `Copy ${asset.identifier}`
    }
  ));
};
const AssetListItem = ({
  asset,
  onClickDelete,
  isTechnician
}) => {
  const onClickDownload = () => AssetListItem_async(null, null, function* () {
    try {
      const content = yield mdm/* default */.A.downloadAsset(asset.asset_uuid);
      const formatDate = (0,format/* format */.GP)(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
      const fileContent = JSON.stringify(content, null, 2);
      const file = new File([fileContent], `${formatDate}_${asset.name}.json`);
      FileSaver_default().saveAs(file);
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn't download. Please try again.", { response: e });
    }
  });
  const actions = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${AssetListItem_baseClass}__action-button`,
      variant: "secondary",
      onClick: onClickDownload,
      ariaLabel: `Download ${asset.name}`,
      icon: "download"
    }
  ), !isTechnician && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          className: `${AssetListItem_baseClass}__action-button`,
          variant: "secondary",
          onClick: () => onClickDelete(asset),
          ariaLabel: `Delete ${asset.name}`,
          icon: "trash"
        }
      )
    }
  ));
  return /* @__PURE__ */ react.createElement(
    ListItem/* default */.A,
    {
      className: AssetListItem_baseClass,
      graphic: "file-json",
      title: /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: `UUID: ${asset.asset_uuid}`,
          underline: false,
          position: "top",
          showArrow: true
        },
        /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: asset.name })
      ),
      details: /* @__PURE__ */ react.createElement(AssetDetails, { asset }),
      actions
    }
  );
};
/* harmony default export */ var AssetListItem_AssetListItem = (AssetListItem);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/AssetListItem/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/DeleteAssetModal/DeleteAssetModal.tsx




const DeleteAssetModal_baseClass = "delete-asset-modal";
const DeleteAssetModal = ({
  assetUuid,
  onCancel,
  onDelete,
  isDeleting
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteAssetModal_baseClass,
      title: "Delete asset",
      onExit: onCancel,
      onEnter: () => onDelete(assetUuid),
      width: "large"
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DeleteAssetModal_baseClass}__content` }, /* @__PURE__ */ react.createElement("p", null, "Assets that are linked in a configuration profile will not be deleted. You will need to delete the configuration profile first.")), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        onClick: () => onDelete(assetUuid),
        variant: "alert",
        className: "delete-loading",
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeleteAssetModal_DeleteAssetModal = (DeleteAssetModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/DeleteAssetModal/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/AssetsTab/AssetsTab.tsx

var AssetsTab_async = (__this, __arguments, generator) => {
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




















const AssetsTab_baseClass = "assets-tab";
const AssetsTab = ({ currentTeamId, router }) => {
  const {
    config,
    isPremiumTier,
    isGlobalAdmin,
    isGlobalTechnician,
    isTeamTechnician
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isTechnician = isGlobalTechnician || isTeamTechnician;
  const canAddAsset = !isTechnician;
  const canTurnOnMdm = !!isGlobalAdmin;
  const mdmAppleEnabled = !!(config == null ? void 0 : config.mdm.enabled_and_configured);
  const [showAddAssetModal, setShowAddAssetModal] = (0,react.useState)(false);
  const [showDeleteAssetModal, setShowDeleteAssetModal] = (0,react.useState)(false);
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const selectedAsset = (0,react.useRef)(null);
  const {
    data: assets,
    isLoading: isLoadingAssets,
    isError: isErrorAssets,
    refetch: refetchAssets
  } = (0,es.useQuery)(
    [{ scope: "assets", team_id: currentTeamId }],
    () => mdm/* default */.A.getAssets({ fleet_id: currentTeamId }),
    {
      enabled: isPremiumTier && mdmAppleEnabled,
      refetchOnWindowFocus: false,
      select: (res) => {
        var _a;
        return (_a = res.assets) != null ? _a : [];
      }
    }
  );
  const onAddAsset = () => {
    refetchAssets();
  };
  const onClickDelete = (asset) => {
    selectedAsset.current = asset;
    setShowDeleteAssetModal(true);
  };
  const onCancelDelete = () => {
    selectedAsset.current = null;
    setShowDeleteAssetModal(false);
  };
  const onDeleteAsset = (assetUuid) => AssetsTab_async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield mdm/* default */.A.deleteAsset(assetUuid);
      refetchAssets();
      ToastNotification/* notify */.me.success("Successfully deleted.");
    } catch (e) {
      ToastNotification/* notify */.me.error((0,errors/* getErrorReason */.F3)(e) || "Couldn't delete. Please try again.", {
        response: e
      });
    } finally {
      selectedAsset.current = null;
      setShowDeleteAssetModal(false);
      setIsDeleting(false);
    }
  });
  const renderContent = () => {
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (!mdmAppleEnabled) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "Manage assets",
          info: "Supported on macOS, iOS, and iPadOS.",
          primaryButton: canTurnOnMdm ? /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM_APPLE)
            },
            "Turn on Apple MDM"
          ) : void 0
        }
      );
    }
    if (isLoadingAssets) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isErrorAssets) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (!(assets == null ? void 0 : assets.length)) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No assets",
          info: canAddAsset ? "Add assets (data or credentials) to use them in many Apple declaration (DDM) profiles. Apple only." : "No assets have been added.",
          primaryButton: canAddAsset ? /* @__PURE__ */ react.createElement(
            GitOpsModeTooltipWrapper/* default */.A,
            {
              renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
                Button/* default */.A,
                {
                  disabled: disableChildren,
                  onClick: () => setShowAddAssetModal(true)
                },
                "Add asset"
              )
            }
          ) : void 0
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      UploadList/* default */.A,
      {
        keyAttribute: "asset_uuid",
        listItems: assets,
        ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(
          AssetListItem_AssetListItem,
          {
            asset: listItem,
            onClickDelete,
            isTechnician
          }
        )
      }
    );
  };
  const showAddAssetButton = isPremiumTier && mdmAppleEnabled && canAddAsset;
  return /* @__PURE__ */ react.createElement("div", { className: AssetsTab_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${AssetsTab_baseClass}__tab-header` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Add assets (data or credentials) to use them in Apple declaration (DDM) profiles. Apple only.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/configuration-profile-assets`,
          text: "Learn more",
          newTab: true
        }
      ))
    }
  ), showAddAssetButton && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "secondary",
          size: "small",
          onClick: () => setShowAddAssetModal(true),
          disabled: disableChildren,
          icon: "plus"
        },
        "Add asset"
      )
    }
  )), renderContent(), showAddAssetModal && /* @__PURE__ */ react.createElement(
    AddAssetModal_AddAssetModal,
    {
      currentTeamId,
      onUpload: onAddAsset,
      closeModal: () => setShowAddAssetModal(false)
    }
  ), showDeleteAssetModal && selectedAsset.current && /* @__PURE__ */ react.createElement(
    DeleteAssetModal_DeleteAssetModal,
    {
      assetUuid: selectedAsset.current.asset_uuid,
      onCancel: onCancelDelete,
      onDelete: onDeleteAsset,
      isDeleting
    }
  ));
};
/* harmony default export */ var AssetsTab_AssetsTab = (AssetsTab);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/AssetsTab/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/mdm.ts
var interfaces_mdm = __webpack_require__(42550);
// EXTERNAL MODULE: ./frontend/services/entities/config_profiles.ts
var config_profiles = __webpack_require__(7733);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/StatusIndicatorWithIcon/index.ts
var StatusIndicatorWithIcon = __webpack_require__(59555);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ConfigProfileHostCountCell/ConfigProfileHostCountCell.tsx






const ConfigProfileHostCountCell_baseClass = "config-profile-host-count-cell";
const ConfigProfileHostCountCell = ({
  teamId,
  uuid,
  status,
  count,
  onClickResend
}) => {
  const renderResendButton = () => {
    if (count === 0 || uuid[0] === "d" || status !== "failed") {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${ConfigProfileHostCountCell_baseClass}__resend-button`,
        onClick: onClickResend,
        variant: "secondary",
        size: "small"
      },
      /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "refresh", color: "ui-fleet-black-75", size: "small" }),
      /* @__PURE__ */ react.createElement("span", null, "Resend")
    );
  };
  if (count === 0) {
    return /* @__PURE__ */ react.createElement("div", { className: ConfigProfileHostCountCell_baseClass }, constants/* DEFAULT_EMPTY_CELL_VALUE */.r2);
  }
  return /* @__PURE__ */ react.createElement("div", { className: ConfigProfileHostCountCell_baseClass }, /* @__PURE__ */ react.createElement("div", null, count), /* @__PURE__ */ react.createElement("div", { className: `${ConfigProfileHostCountCell_baseClass}__actions` }, renderResendButton(), /* @__PURE__ */ react.createElement(
    ViewAllHostsLink/* default */.A,
    {
      queryParams: {
        fleet_id: teamId,
        profile_uuid: uuid,
        profile_status: status
      },
      condensed: true,
      rowHover: true
    }
  )));
};
/* harmony default export */ var ConfigProfileHostCountCell_ConfigProfileHostCountCell = (ConfigProfileHostCountCell);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ConfigProfileHostCountCell/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ConfigProfileStatusTable/ConfigProfileStatusTableConfig.tsx




const STATUS_ORDER = ["verified", "verifying", "pending", "failed"];
const STATUS_DISPLAY_OPTIONS = {
  verified: {
    displayName: "Verified",
    statusName: "success"
  },
  verifying: {
    displayName: "Verifying",
    statusName: "successPartial"
  },
  pending: {
    displayName: "Pending",
    statusName: "pendingPartial"
  },
  failed: {
    displayName: "Failed",
    statusName: "error"
  }
};
const generateTableConfig = (teamId, uuid, profileStatus, onClickResend) => {
  return [
    {
      Header: "Status",
      disableSortBy: true,
      accessor: "status",
      Cell: ({ cell: { value } }) => {
        const statusOption = STATUS_DISPLAY_OPTIONS[value];
        return /* @__PURE__ */ react.createElement(
          StatusIndicatorWithIcon/* default */.A,
          {
            status: statusOption.statusName,
            value: statusOption.displayName
          }
        );
      }
    },
    {
      Header: "Hosts",
      accessor: "hosts",
      disableSortBy: true,
      Cell: ({ cell }) => {
        return /* @__PURE__ */ react.createElement(
          ConfigProfileHostCountCell_ConfigProfileHostCountCell,
          {
            teamId,
            count: cell.value,
            uuid,
            status: cell.row.original.status,
            onClickResend: () => onClickResend(cell.value, cell.row.original.status)
          }
        );
      }
    }
  ];
};
const generateTableData = (profileStatus) => {
  const tableData = STATUS_ORDER.map((status) => ({
    status,
    hosts: profileStatus[status]
  }));
  return tableData;
};

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ConfigProfileStatusTable/ConfigProfileStatusTable.tsx





const ConfigProfileStatusTable_baseClass = "config-profile-status-table";
const ConfigProfileStatusTable = ({
  teamId,
  uuid,
  profileStatus,
  onClickResend
}) => {
  const columnConfigs = (0,react.useMemo)(() => {
    return generateTableConfig(teamId, uuid, profileStatus, onClickResend);
  }, [profileStatus, teamId, uuid, onClickResend]);
  const tableData = generateTableData(profileStatus);
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: ConfigProfileStatusTable_baseClass,
      columnConfigs,
      data: tableData,
      isLoading: false,
      emptyComponent: () => /* @__PURE__ */ react.createElement(EmptyState/* default */.A, { header: "No host status available" }),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      manualSortBy: true,
      disableTableHeader: true,
      disablePagination: true,
      disableCount: true,
      hideFooter: true
    }
  );
};
/* harmony default export */ var ConfigProfileStatusTable_ConfigProfileStatusTable = (ConfigProfileStatusTable);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ConfigProfileStatusTable/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ConfigProfileStatusModal/ConfigProfileStatusModal.tsx

var ConfigProfileStatusModal_defProp = Object.defineProperty;
var ConfigProfileStatusModal_defProps = Object.defineProperties;
var ConfigProfileStatusModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ConfigProfileStatusModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ConfigProfileStatusModal_hasOwnProp = Object.prototype.hasOwnProperty;
var ConfigProfileStatusModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var ConfigProfileStatusModal_defNormalProp = (obj, key, value) => key in obj ? ConfigProfileStatusModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ConfigProfileStatusModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ConfigProfileStatusModal_hasOwnProp.call(b, prop))
      ConfigProfileStatusModal_defNormalProp(a, prop, b[prop]);
  if (ConfigProfileStatusModal_getOwnPropSymbols)
    for (var prop of ConfigProfileStatusModal_getOwnPropSymbols(b)) {
      if (ConfigProfileStatusModal_propIsEnum.call(b, prop))
        ConfigProfileStatusModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ConfigProfileStatusModal_spreadProps = (a, b) => ConfigProfileStatusModal_defProps(a, ConfigProfileStatusModal_getOwnPropDescs(b));












const ConfigProfileStatusModal_baseClass = "config-profile-status-modal";
const ConfigProfileStatusModal = ({
  name,
  uuid,
  teamId,
  platform,
  onClickResend,
  onExit
}) => {
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const isMDMEnabled = (0,interfaces_mdm/* isMDMConfiguredForPlatform */.xC)(platform, config == null ? void 0 : config.mdm);
  const { data, isLoading, isError } = (0,es.useQuery)(
    ["config-profile-status", uuid],
    () => config_profiles/* default */.A.getConfigProfileStatus(uuid),
    ConfigProfileStatusModal_spreadProps(ConfigProfileStatusModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isMDMEnabled
    })
  );
  const renderContent = () => {
    if (!isMDMEnabled) {
      const mdmLabel = (0,interfaces_mdm/* platformToMDMLabel */.BK)(platform);
      let learnMoreUrl;
      switch (mdmLabel) {
        case "Apple":
          learnMoreUrl = `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/turn-on-apple-mdm`;
          break;
        case "Windows":
          learnMoreUrl = `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/setup-windows-mdm`;
          break;
        case "Android":
          learnMoreUrl = `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/how-to-connect-android-enterprise`;
          break;
      }
      return /* @__PURE__ */ react.createElement(
        DataError/* default */.A,
        {
          verticalPaddingSize: "pad-medium",
          excludeIssueLink: true,
          title: `${mdmLabel} MDM isn't turned on.`
        },
        /* @__PURE__ */ react.createElement("span", null, "Turn on ", mdmLabel, " MDM to manage this configuration profile.", learnMoreUrl ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { text: "Learn more", newTab: true, url: learnMoreUrl }), " ") : null)
      );
    }
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-medium" });
    }
    if (!data) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      ConfigProfileStatusTable_ConfigProfileStatusTable,
      {
        teamId,
        uuid,
        profileStatus: data,
        onClickResend
      }
    );
  };
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: ConfigProfileStatusModal_baseClass, title: name, onExit }, renderContent(), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit }, "Close")));
};
/* harmony default export */ var ConfigProfileStatusModal_ConfigProfileStatusModal = (ConfigProfileStatusModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ConfigProfileStatusModal/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/DeleteProfileModal/DeleteProfileModal.tsx





const DeleteProfileModal_baseClass = "delete-profile-modal";
const generateMessageSuffix = (isPremiumTier, teamId) => {
  if (!isPremiumTier) {
    return "";
  }
  return teamId ? "assigned to this fleet" : "that are unassigned";
};
const DeleteProfileModal = ({
  profileName,
  profileId,
  onCancel,
  onDelete,
  isDeleting
}) => {
  const { isPremiumTier, currentTeam } = (0,react.useContext)(app/* AppContext */.BR);
  const messageSuffix = generateMessageSuffix(isPremiumTier, currentTeam == null ? void 0 : currentTeam.id);
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteProfileModal_baseClass,
      title: "Delete configuration profile",
      onExit: onCancel,
      onEnter: () => onDelete(profileId),
      width: "large"
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DeleteProfileModal_baseClass}__content` }, /* @__PURE__ */ react.createElement("p", null, "This action will remove the ", /* @__PURE__ */ react.createElement("b", null, profileName), " configuration profile from all hosts ", messageSuffix, "."), /* @__PURE__ */ react.createElement("p", null, "Pending profiles will be canceled.")), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        onClick: () => onDelete(profileId),
        variant: "alert",
        className: "delete-loading",
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeleteProfileModal_DeleteProfileModal = (DeleteProfileModal);

// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
// EXTERNAL MODULE: ./frontend/components/TargetLabelSelector/index.ts + 2 modules
var TargetLabelSelector = __webpack_require__(22676);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ProfileUploader/helpers.tsx

var helpers_async = (__this, __arguments, generator) => {
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





const parseFile = (file) => helpers_async(null, null, function* () {
  const nameParts = file.name.split(".");
  const name = nameParts.slice(0, -1).join(".");
  const ext = nameParts.slice(-1)[0];
  switch (ext) {
    case "xml": {
      return {
        name,
        platform: "Windows",
        ext
      };
    }
    case "mobileconfig": {
      return { name, platform: "macOS, iOS, iPadOS", ext };
    }
    case "json": {
      return { name, platform: "Android or macOS(DDM)", ext };
    }
    default: {
      throw new Error(`Invalid file type: ${ext}`);
    }
  }
});
const generateCustomTargetLabelKey = ({
  targetType,
  includeMode,
  includeLabels,
  excludeLabels
}) => {
  if (targetType !== "Custom") {
    return {};
  }
  const result = {};
  const includeNames = (0,entities_labels/* listNamesFromSelectedLabels */.XX)(includeLabels);
  const excludeNames = (0,entities_labels/* listNamesFromSelectedLabels */.XX)(excludeLabels);
  if (includeNames.length) {
    result[includeMode === "all" ? "labelsIncludeAll" : "labelsIncludeAny"] = includeNames;
  }
  if (excludeNames.length) {
    result.labelsExcludeAny = excludeNames;
  }
  return result;
};
const helpers_DEFAULT_ERROR_MESSAGE = "Couldn't add configuration profile. Please try again.";
const DEFAULT_EDIT_ERROR_MESSAGE = "Couldn't edit configuration profile. Please try again.";
const generateUnsupportedVariableErrMsg = (errMsg, couldnt, defaultMessage) => {
  const regex = /\$[A-Z0-9_]+/;
  const varName = errMsg.match(regex);
  return varName ? `${couldnt} Variable "${varName[0]}" doesn't exist.` : defaultMessage;
};
const generateSCEPLearnMoreErrMsg = (errMsg, learnMoreUrl, couldnt) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, couldnt, " ", errMsg, " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: learnMoreUrl,
      text: "Learn more",
      variant: "flash-message-link",
      newTab: true
    }
  ));
};
const helpers_getErrorMessage = (err, action = "add") => {
  var _a, _b, _c, _d;
  const apiReason = (_d = (_c = (_b = (_a = err == null ? void 0 : err.data) == null ? void 0 : _a.errors) == null ? void 0 : _b[0]) == null ? void 0 : _c.reason) != null ? _d : "";
  const couldnt = action === "edit" ? "Couldn't edit." : "Couldn't add.";
  const defaultMessage = action === "edit" ? DEFAULT_EDIT_ERROR_MESSAGE : helpers_DEFAULT_ERROR_MESSAGE;
  if (apiReason.includes("should include valid JSON")) {
    return `${couldnt} The profile should include valid JSON.`;
  }
  if (apiReason.includes("JSON is empty")) {
    return `${couldnt} The JSON file doesn't include any fields.`;
  }
  if (apiReason.includes("Keys in declaration (DDM) profile")) {
    return /* @__PURE__ */ react.createElement("div", { className: "upload-profile-invalid-keys-error" }, /* @__PURE__ */ react.createElement("span", null, couldnt, " Keys in declaration (DDM) profile must contain only letters and start with an uppercase letter. Keys in Android profile must contain only letters and start with a lowercase letter.", " "), /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        text: "Learn more",
        newTab: true,
        variant: "flash-message-link",
        url: "https://fleetdm.com/learn-more-about/how-to-craft-android-profile"
      }
    ));
  }
  if (apiReason.includes("apple declaration missing Type") || apiReason.includes("apple declaration missing Payload")) {
    return `${couldnt} Declaration (DDM) profile must include "Type" and "Payload" fields.`;
  }
  if (apiReason.includes(
    `Android configuration profile can't include "statusReportingSettings"`
  )) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", null, couldnt, " Android configuration profile can't include", '"statusReportingSettings"', " setting. To see host vitals, go to", " ", /* @__PURE__ */ react.createElement("b", null, "Host details"), "."));
  }
  if (apiReason.includes(
    "The configuration profile can't include BitLocker settings."
  )) {
    return /* @__PURE__ */ react.createElement("span", null, couldnt, " The configuration profile can't include BitLocker settings. To control these settings, go to ", /* @__PURE__ */ react.createElement("b", null, "Disk encryption"), ".");
  }
  if (apiReason.includes(
    "The configuration profile can't include FileVault settings."
  )) {
    return /* @__PURE__ */ react.createElement("span", null, couldnt, " The configuration profile can't include FileVault settings. To control these settings, go to ", /* @__PURE__ */ react.createElement("b", null, "Disk encryption"), ".");
  }
  if (apiReason.includes(
    "The configuration profile can't include Windows update settings."
  )) {
    return /* @__PURE__ */ react.createElement("span", null, apiReason, " To control these settings, go to ", /* @__PURE__ */ react.createElement("b", null, "OS updates"), ".");
  }
  if (apiReason.includes(
    "The new profile's PayloadIdentifier must match the existing profile's."
  )) {
    return "Couldn't edit. The uploaded profile must have the same PayloadIdentifier as the original profile.";
  }
  if (apiReason.includes(
    "The new profile's Identifier must match the existing profile's."
  )) {
    return "Couldn't edit. The uploaded profile must have the same identifier as the original profile.";
  }
  if (apiReason.includes(
    "The new profile's name must match the existing profile's name."
  )) {
    return "Couldn't edit. The uploaded profile must have the same name as the original profile.";
  }
  if (apiReason.includes("OS updates are already configured")) {
    return action === "edit" ? "Couldn't edit profile. OS updates are already configured. Remove the OS updates settings first." : apiReason;
  }
  if (apiReason.includes("Secret variable")) {
    return (0,SoftwarePage_helpers/* generateSecretErrMsg */.C3)(err);
  }
  if (apiReason.includes("Fleet variable") && apiReason.includes("not supported in configuration profiles")) {
    return generateUnsupportedVariableErrMsg(
      apiReason,
      couldnt,
      defaultMessage
    );
  }
  if (apiReason.includes(
    "can't be used if variables for SCEP URL and Challenge are not specified"
  )) {
    return generateSCEPLearnMoreErrMsg(
      apiReason,
      "https://fleetdm.com/learn-more-about/certificate-authorities",
      couldnt
    );
  }
  if (apiReason.includes(
    "SCEP profile for custom SCEP certificate authority requires"
  )) {
    return generateSCEPLearnMoreErrMsg(
      apiReason,
      "https://fleetdm.com/learn-more-about/custom-scep-configuration-profile",
      couldnt
    );
  }
  if (apiReason.includes(
    "SCEP profile for NDES certificate authority requires: $FLEET_VAR_NDES_SCEP_CHALLENGE"
  )) {
    return generateSCEPLearnMoreErrMsg(
      apiReason,
      "https://fleetdm.com/learn-more-about/ndes-scep-configuration-profile",
      couldnt
    );
  }
  if (apiReason.includes('"PayloadScope"')) {
    return (0,helpers/* generateGenericLearnMoreErrMsg */.G5)(apiReason);
  }
  if (apiReason.includes("Configuration profiles can't be signed")) {
    return (0,helpers/* generateGenericLearnMoreErrMsg */.G5)(apiReason);
  }
  return apiReason || defaultMessage;
};

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/EditProfileModal/EditProfileModal.tsx

var EditProfileModal_defProp = Object.defineProperty;
var EditProfileModal_defProps = Object.defineProperties;
var EditProfileModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditProfileModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditProfileModal_hasOwnProp = Object.prototype.hasOwnProperty;
var EditProfileModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditProfileModal_defNormalProp = (obj, key, value) => key in obj ? EditProfileModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditProfileModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditProfileModal_hasOwnProp.call(b, prop))
      EditProfileModal_defNormalProp(a, prop, b[prop]);
  if (EditProfileModal_getOwnPropSymbols)
    for (var prop of EditProfileModal_getOwnPropSymbols(b)) {
      if (EditProfileModal_propIsEnum.call(b, prop))
        EditProfileModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditProfileModal_spreadProps = (a, b) => EditProfileModal_defProps(a, EditProfileModal_getOwnPropDescs(b));
var EditProfileModal_async = (__this, __arguments, generator) => {
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



















const EditProfileModal_baseClass = "edit-profile-modal";
const getAcceptedExtensions = (profile) => {
  if ((0,mdm/* isDDMProfile */.p)(profile)) {
    return [".json"];
  }
  switch (profile.platform) {
    case "windows":
      return [".xml"];
    case "android":
      return [".json"];
    case "darwin":
    case "ios":
    case "ipados":
      return [".mobileconfig", ".xml"];
    default:
      return [];
  }
};
const getProfileFileExtension = (profile) => {
  if ((0,mdm/* isDDMProfile */.p)(profile)) {
    return ".json";
  }
  switch (profile.platform) {
    case "windows":
      return ".xml";
    case "android":
      return ".json";
    case "darwin":
    case "ios":
    case "ipados":
      return ".mobileconfig";
    default:
      return "";
  }
};
const labelsToSelection = (labels) => (labels != null ? labels : []).reduce((selection, label) => {
  selection[label.name] = true;
  return selection;
}, {});
const EditProfileModal = ({
  profile,
  currentTeamId,
  isPremiumTier,
  onUpdate,
  onCancel
}) => {
  var _a, _b;
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)();
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const isMDMEnabled = (0,interfaces_mdm/* isMDMConfiguredForPlatform */.xC)(
    profile.platform,
    config == null ? void 0 : config.mdm
  );
  const initialIncludeLabels = (_a = profile.labels_include_all) != null ? _a : profile.labels_include_any;
  const initialExcludeLabels = profile.labels_exclude_any;
  const hasCustomTarget = !!(initialIncludeLabels == null ? void 0 : initialIncludeLabels.length) || !!(initialExcludeLabels == null ? void 0 : initialExcludeLabels.length);
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [newFileDetails, setNewFileDetails] = (0,react.useState)(
    null
  );
  const [selectedTargetType, setSelectedTargetType] = (0,react.useState)(
    hasCustomTarget ? "Custom" : "All hosts"
  );
  const [
    selectedLabelIncludeMode,
    setSelectedLabelIncludeMode
  ] = (0,react.useState)(
    ((_b = profile.labels_include_all) == null ? void 0 : _b.length) ? "all" : "any"
  );
  const [selectedIncludeLabels, setSelectedIncludeLabels] = (0,react.useState)(
    () => labelsToSelection(initialIncludeLabels)
  );
  const [selectedExcludeLabels, setSelectedExcludeLabels] = (0,react.useState)(
    () => labelsToSelection(initialExcludeLabels)
  );
  const fileRef = (0,react.useRef)(null);
  const {
    data: labels,
    isLoading: isLoadingLabels,
    isFetching: isFetchingLabels,
    isError: isErrorLabels
  } = (0,es.useQuery)(
    ["custom_labels", currentTeamId],
    () => entities_labels/* default */.Ay.summary(currentTeamId).then((res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)),
    {
      enabled: isPremiumTier,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1e4
    }
  );
  const acceptedExtensions = getAcceptedExtensions(profile);
  const onFileSelected = (files) => EditProfileModal_async(null, null, function* () {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    try {
      const details = yield parseFile(file);
      if (!acceptedExtensions.includes(`.${details.ext}`)) {
        throw new Error(`Invalid file type: ${details.ext}`);
      }
      fileRef.current = file;
      setNewFileDetails(details);
    } catch (e) {
      ToastNotification/* notify */.me.error("Invalid file type", { response: e });
    }
  });
  const onUpdateProfile = () => EditProfileModal_async(null, null, function* () {
    var _a2;
    setIsUpdating(true);
    try {
      const labelKey = generateCustomTargetLabelKey({
        targetType: selectedTargetType,
        includeMode: selectedLabelIncludeMode,
        includeLabels: selectedIncludeLabels,
        excludeLabels: selectedExcludeLabels
      });
      yield mdm/* default */.A.updateProfile(EditProfileModal_spreadValues({
        profileUUID: profile.profile_uuid,
        profile: (_a2 = fileRef.current) != null ? _a2 : void 0
      }, labelKey));
      ToastNotification/* notify */.me.success("Successfully updated profile.");
      onUpdate();
    } catch (e) {
      ToastNotification/* notify */.me.error(helpers_getErrorMessage(e, "edit"), {
        response: e
      });
    } finally {
      setIsUpdating(false);
    }
  });
  const includeTab = {
    selectedLabels: selectedIncludeLabels,
    onSelectLabel: ({ name, value }) => setSelectedIncludeLabels((prev) => EditProfileModal_spreadProps(EditProfileModal_spreadValues({}, prev), { [name]: value })),
    showModeToggle: true,
    mode: selectedLabelIncludeMode,
    onSelectMode: setSelectedLabelIncludeMode,
    anyTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Profile will be applied to hosts that", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "have any")), " ", "of these labels."),
    allTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Profile will be applied to hosts that", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "have all")), " ", "of these labels.")
  };
  const excludeTab = {
    selectedLabels: selectedExcludeLabels,
    onSelectLabel: ({ name, value }) => setSelectedExcludeLabels((prev) => EditProfileModal_spreadProps(EditProfileModal_spreadValues({}, prev), { [name]: value }))
  };
  const hasSelectedLabels = (0,entities_labels/* listNamesFromSelectedLabels */.XX)(selectedIncludeLabels).length > 0 || (0,entities_labels/* listNamesFromSelectedLabels */.XX)(selectedExcludeLabels).length > 0;
  const renderUpdateButton = () => {
    const btn = (disabled) => /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${EditProfileModal_baseClass}__update-profile-button`,
        onClick: onUpdateProfile,
        isLoading: isUpdating,
        disabled: disabled || isUpdating || selectedTargetType === "Custom" && !hasSelectedLabels
      },
      "Update profile"
    );
    if (!isMDMEnabled) {
      const mdmLabel = (0,interfaces_mdm/* platformToMDMLabel */.BK)(profile.platform);
      return /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement("p", null, "To enable, first turn on", " ", /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              text: `${mdmLabel} MDM`,
              url: paths/* default */.A.ADMIN_INTEGRATIONS_MDM,
              variant: "tooltip-link"
            }
          ), "."),
          showArrow: true,
          position: "top",
          underline: false
        },
        " ",
        btn(true),
        " "
      );
    }
    return /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => {
          return btn(!!disableChildren);
        }
      }
    );
  };
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: EditProfileModal_baseClass, title: "Edit profile", onExit: onCancel }, isPremiumTier && isLoadingLabels && /* @__PURE__ */ react.createElement(Spinner/* default */.A, null), isPremiumTier && !isLoadingLabels && isErrorLabels && /* @__PURE__ */ react.createElement(DataError/* default */.A, null), (!isPremiumTier || !isLoadingLabels && !isErrorLabels) && /* @__PURE__ */ react.createElement("div", { className: `${EditProfileModal_baseClass}__modal-content-wrap` }, /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      canEdit: true,
      graphicName: "file-configuration-profile",
      accept: acceptedExtensions.join(","),
      message: acceptedExtensions.join(", "),
      onFileUpload: onFileSelected,
      fileDetails: {
        name: newFileDetails ? newFileDetails.name : profile.name,
        description: newFileDetails ? `.${newFileDetails.ext}` : getProfileFileExtension(profile)
      },
      gitopsCompatible: true,
      gitOpsModeEnabled,
      disabled: !isMDMEnabled
    }
  ), isPremiumTier && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      isInputField: true,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement("div", { className: `form-field ${EditProfileModal_baseClass}__target` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Target"), /* @__PURE__ */ react.createElement(
        TargetLabelSelector/* TargetLabelSelector */.Z,
        {
          selectedTargetType,
          onSelectTargetType: setSelectedTargetType,
          labels: labels || [],
          includeConfig: includeTab,
          excludeConfig: excludeTab,
          isLoadingLabels: isFetchingLabels,
          isErrorLabels,
          emptyStateDescription: "Add a label to target your configuration profile.",
          onAddLabel: () => {
            window.location.href = paths/* default */.A.LABEL_NEW_DYNAMIC;
          },
          disableOptions: !!disableChildren || !isMDMEnabled
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `${EditProfileModal_baseClass}__button-wrap` }, /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel"), renderUpdateButton())));
};
/* harmony default export */ var EditProfileModal_EditProfileModal = (EditProfileModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/EditProfileModal/index.ts



// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var interfaces_platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/utilities/strings/index.ts
var strings = __webpack_require__(12031);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ProfileListItem/ProfileListItem.tsx

var ProfileListItem_async = (__this, __arguments, generator) => {
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













const ProfileListItem_baseClass = "profile-list-item";
const LabelCount = ({
  className,
  count
}) => /* @__PURE__ */ react.createElement("div", { className: `${className}__labels--count` }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "tag", color: "ui-fleet-black-75" }), `${count} ${strings/* default */.A.pluralize(count, "label")}`);
const ProfileDetails = ({
  platform,
  uploadedAt,
  isDDM
}) => {
  const getPlatformName = () => {
    switch (platform) {
      case "windows":
        return "Windows";
      case "android":
        return "Android";
      case "linux":
        return "Linux";
      default:
        return isDDM ? "macOS, iOS, iPadOS (declaration)" : "macOS, iOS, iPadOS";
    }
  };
  return /* @__PURE__ */ react.createElement("div", { className: `${ProfileListItem_baseClass}__profile-details` }, /* @__PURE__ */ react.createElement("span", { className: `${ProfileListItem_baseClass}__platform` }, getPlatformName()), /* @__PURE__ */ react.createElement("span", null, "\u2022"), /* @__PURE__ */ react.createElement("span", { className: `${ProfileListItem_baseClass}__list-item-uploaded` }, `Uploaded ${(0,date_format/* timeAgo */.fF)(new Date(uploadedAt), { addSuffix: true })}`));
};
const createProfileExtension = (profile) => {
  if ((0,mdm/* isDDMProfile */.p)(profile)) {
    return "json";
  }
  if (profile.platform === "android") {
    return "json";
  }
  return (0,interfaces_platform/* isAppleDevice */.lg)(profile.platform) ? "mobileconfig" : "xml";
};
const createFileContent = (profile) => ProfileListItem_async(null, null, function* () {
  const content = yield mdm/* default */.A.downloadProfile(profile.profile_uuid);
  if ((0,mdm/* isDDMProfile */.p)(profile)) {
    return JSON.stringify(content, null, 2);
  }
  if (profile.platform === "android") {
    return JSON.stringify(content, null, 2);
  }
  return content;
});
const ProfileListItem = ({
  isPremium,
  profile,
  onClickInfo,
  onClickEdit,
  onClickDelete,
  isTechnician
}) => {
  const {
    updated_at,
    labels_include_all,
    labels_include_any,
    labels_exclude_any,
    name,
    platform,
    scope
  } = profile;
  const subClass = "list-item";
  const isUserScoped = scope === "User" && !(0,interfaces_platform/* isIPadOrIPhone */.l)(platform);
  const onClickDownload = () => ProfileListItem_async(null, null, function* () {
    const fileContent = yield createFileContent(profile);
    const formatDate = (0,format/* format */.GP)(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    const extension = createProfileExtension(profile);
    const filename = `${formatDate}_${name}.${extension}`;
    const file = new File([fileContent], filename);
    FileSaver_default().saveAs(file);
  });
  const labels = [
    ...labels_include_all != null ? labels_include_all : [],
    ...labels_include_any != null ? labels_include_any : [],
    ...labels_exclude_any != null ? labels_exclude_any : []
  ];
  const renderLabelInfo = () => {
    if (!isPremium || labels.length === 0) {
      return null;
    }
    return /* @__PURE__ */ react.createElement("div", { className: `${subClass}__labels` }, labels.some((label) => label.broken) && /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "warning" }), /* @__PURE__ */ react.createElement(LabelCount, { className: subClass, count: labels.length }));
  };
  return (
    // TODO - refactor to use ListItem
    /* @__PURE__ */ react.createElement("div", { className: classnames_default()(subClass, ProfileListItem_baseClass) }, /* @__PURE__ */ react.createElement("div", { className: `${subClass}__main-content` }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-configuration-profile" }), /* @__PURE__ */ react.createElement("div", { className: `${subClass}__info` }, /* @__PURE__ */ react.createElement("div", { className: `${ProfileListItem_baseClass}__title-row` }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: `UUID: ${profile.profile_uuid}`,
        underline: false,
        position: "top",
        showArrow: true
      },
      /* @__PURE__ */ react.createElement("span", { className: `${subClass}__title` }, name)
    ), isUserScoped && /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        className: `${ProfileListItem_baseClass}__scope-tooltip`,
        tipContent: "Scoped to the user channel.",
        underline: false,
        position: "top",
        showArrow: true
      },
      /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "user" })
    )), /* @__PURE__ */ react.createElement("div", { className: `${subClass}__details` }, /* @__PURE__ */ react.createElement(
      ProfileDetails,
      {
        platform,
        uploadedAt: updated_at,
        isDDM: (0,mdm/* isDDMProfile */.p)(profile)
      }
    )))), /* @__PURE__ */ react.createElement("div", { className: `${subClass}__actions-wrap` }, renderLabelInfo(), /* @__PURE__ */ react.createElement("div", { className: `${subClass}__actions` }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: "Details",
        underline: false,
        position: "top",
        showArrow: true,
        tipOffset: 8
      },
      /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${subClass}__action-button`,
          variant: "secondary",
          onClick: () => onClickInfo(profile),
          icon: "info",
          ariaLabel: `View ${profile.name} details`
        }
      )
    ), !isTechnician && // stays enabled in GitOps mode -- the modal is the only place to
    // see a profile's label targeting; it blocks saving instead
    /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: "Edit",
        underline: false,
        position: "top",
        showArrow: true,
        tipOffset: 8
      },
      /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${subClass}__action-button`,
          variant: "secondary",
          onClick: () => onClickEdit(profile),
          ariaLabel: `Edit ${profile.name}`,
          icon: "pencil"
        }
      )
    ), /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: "Download",
        underline: false,
        position: "top",
        showArrow: true,
        tipOffset: 8
      },
      /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${subClass}__action-button`,
          variant: "secondary",
          onClick: onClickDownload,
          icon: "download",
          ariaLabel: `Download ${profile.name}`
        }
      )
    ), !isTechnician && /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: "Delete",
            underline: false,
            position: "top",
            showArrow: true,
            tipOffset: 8,
            disableTooltip: disableChildren
          },
          /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              disabled: disableChildren,
              className: `${subClass}__action-button`,
              variant: "secondary",
              onClick: () => onClickDelete(profile),
              icon: "trash",
              ariaLabel: `Delete ${profile.name}`
            }
          )
        )
      }
    ))))
  );
};
/* harmony default export */ var ProfileListItem_ProfileListItem = (ProfileListItem);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ProfileListItem/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ProfileUploader/components/ProfileGraphic.tsx



const ProfileGraphic = ({
  baseClass,
  message,
  title
}) => /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__profile-graphic` }, /* @__PURE__ */ react.createElement(
  Graphic/* default */.A,
  {
    key: "file-configuration-profile-graphic",
    className: `${baseClass}__graphic`,
    name: "file-configuration-profile"
  }
), title && /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__profile-graphic--title` }, title), message && /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__profile-graphic--message` }, message));
/* harmony default export */ var components_ProfileGraphic = (ProfileGraphic);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ProfileUploader/components/AddProfileModal/AddProfileModal.tsx

var AddProfileModal_defProp = Object.defineProperty;
var AddProfileModal_defProps = Object.defineProperties;
var AddProfileModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AddProfileModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AddProfileModal_hasOwnProp = Object.prototype.hasOwnProperty;
var AddProfileModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var AddProfileModal_defNormalProp = (obj, key, value) => key in obj ? AddProfileModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AddProfileModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AddProfileModal_hasOwnProp.call(b, prop))
      AddProfileModal_defNormalProp(a, prop, b[prop]);
  if (AddProfileModal_getOwnPropSymbols)
    for (var prop of AddProfileModal_getOwnPropSymbols(b)) {
      if (AddProfileModal_propIsEnum.call(b, prop))
        AddProfileModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AddProfileModal_spreadProps = (a, b) => AddProfileModal_defProps(a, AddProfileModal_getOwnPropDescs(b));
var AddProfileModal_async = (__this, __arguments, generator) => {
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















const AddProfileModal_baseClass = "add-profile-modal";
const AddProfileModal_FileChooser = ({ isLoading, onFileOpen }) => /* @__PURE__ */ react.createElement("div", { className: `${AddProfileModal_baseClass}__file-chooser` }, /* @__PURE__ */ react.createElement(
  components_ProfileGraphic,
  {
    baseClass: AddProfileModal_baseClass,
    title: "Upload configuration profile",
    message: /* @__PURE__ */ react.createElement(react.Fragment, null, ".mobileconfig and .json for macOS, iOS, and iPadOS.", /* @__PURE__ */ react.createElement("br", null), ".json for Android.", /* @__PURE__ */ react.createElement("br", null), ".xml for Windows.")
  }
), /* @__PURE__ */ react.createElement(
  Button/* default */.A,
  {
    className: `${AddProfileModal_baseClass}__upload-button`,
    variant: "secondary",
    isLoading
  },
  /* @__PURE__ */ react.createElement("label", { htmlFor: "upload-profile" }, /* @__PURE__ */ react.createElement("span", { className: `${AddProfileModal_baseClass}__file-chooser--button-wrap` }, "Choose file ", /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "upload" })))
), /* @__PURE__ */ react.createElement(
  "input",
  {
    accept: ".json,.mobileconfig,application/x-apple-aspen-config,.xml",
    id: "upload-profile",
    type: "file",
    onChange: (e) => {
      onFileOpen(e.target.files);
    }
  }
));
const AddProfileModal_FileDetails = ({ details: { name, ext } }) => /* @__PURE__ */ react.createElement("div", { className: `${AddProfileModal_baseClass}__selected-file` }, /* @__PURE__ */ react.createElement(components_ProfileGraphic, { baseClass: AddProfileModal_baseClass }), /* @__PURE__ */ react.createElement("div", { className: `${AddProfileModal_baseClass}__selected-file--details` }, /* @__PURE__ */ react.createElement("div", { className: `${AddProfileModal_baseClass}__selected-file--details--name` }, name), /* @__PURE__ */ react.createElement("div", { className: `${AddProfileModal_baseClass}__selected-file--details--platform` }, ".", ext)));
const AddProfileModal = ({
  currentTeamId,
  isPremiumTier,
  onUpload,
  setShowModal
}) => {
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [fileDetails, setFileDetails] = (0,react.useState)(null);
  const [selectedTargetType, setSelectedTargetType] = (0,react.useState)(
    "All hosts"
  );
  const [
    selectedLabelIncludeMode,
    setSelectedLabelIncludeMode
  ] = (0,react.useState)("any");
  const [selectedIncludeLabels, setSelectedIncludeLabels] = (0,react.useState)({});
  const [selectedExcludeLabels, setSelectedExcludeLabels] = (0,react.useState)({});
  const fileRef = (0,react.useRef)(null);
  const {
    data: labels,
    isLoading: isLoadingLabels,
    isFetching: isFetchingLabels,
    isError: isErrorLabels
  } = (0,es.useQuery)(
    ["custom_labels", currentTeamId],
    () => entities_labels/* default */.Ay.summary(currentTeamId).then((res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)),
    {
      enabled: isPremiumTier,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1e4
    }
  );
  const onDone = (0,react.useCallback)(() => {
    fileRef.current = null;
    setFileDetails(null);
    setSelectedIncludeLabels({});
    setSelectedExcludeLabels({});
    setShowModal(false);
  }, [fileRef, setShowModal]);
  const onFileUpload = () => AddProfileModal_async(null, null, function* () {
    if (!fileRef.current) {
      ToastNotification/* notify */.me.error(helpers_DEFAULT_ERROR_MESSAGE);
      return;
    }
    const file = fileRef.current;
    setIsLoading(true);
    try {
      const labelKey = generateCustomTargetLabelKey({
        targetType: selectedTargetType,
        includeMode: selectedLabelIncludeMode,
        includeLabels: selectedIncludeLabels,
        excludeLabels: selectedExcludeLabels
      });
      yield mdm/* default */.A.uploadProfile(AddProfileModal_spreadValues({
        file,
        teamId: currentTeamId
      }, labelKey));
      ToastNotification/* notify */.me.success("Successfully uploaded.");
      onUpload();
    } catch (e) {
      ToastNotification/* notify */.me.error(helpers_getErrorMessage(e), {
        response: e
      });
    } finally {
      setIsLoading(false);
      onDone();
    }
  });
  const onFileOpen = (files) => AddProfileModal_async(null, null, function* () {
    if (!files || files.length === 0) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const file = files[0];
    fileRef.current = file;
    try {
      const details = yield parseFile(file);
      setFileDetails(details);
    } catch (e) {
      ToastNotification/* notify */.me.error("Invalid file type", { response: e });
    } finally {
      setIsLoading(false);
    }
  });
  const includeTab = {
    selectedLabels: selectedIncludeLabels,
    onSelectLabel: ({ name, value }) => setSelectedIncludeLabels((prev) => AddProfileModal_spreadProps(AddProfileModal_spreadValues({}, prev), { [name]: value })),
    showModeToggle: true,
    mode: selectedLabelIncludeMode,
    onSelectMode: setSelectedLabelIncludeMode,
    anyTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Profile will be applied to hosts that", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "have any")), " ", "of these labels."),
    allTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Profile will be applied to hosts that", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "have all")), " ", "of these labels.")
  };
  const excludeTab = {
    selectedLabels: selectedExcludeLabels,
    onSelectLabel: ({ name, value }) => setSelectedExcludeLabels((prev) => AddProfileModal_spreadProps(AddProfileModal_spreadValues({}, prev), { [name]: value }))
  };
  const hasSelectedLabels = (0,entities_labels/* listNamesFromSelectedLabels */.XX)(selectedIncludeLabels).length > 0 || (0,entities_labels/* listNamesFromSelectedLabels */.XX)(selectedExcludeLabels).length > 0;
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Add profile", onExit: onDone }, isPremiumTier && isLoadingLabels && /* @__PURE__ */ react.createElement(Spinner/* default */.A, null), isPremiumTier && !isLoadingLabels && isErrorLabels && /* @__PURE__ */ react.createElement(DataError/* default */.A, null), (!isPremiumTier || !isLoadingLabels && !isErrorLabels) && /* @__PURE__ */ react.createElement("div", { className: `${AddProfileModal_baseClass}__modal-content-wrap` }, /* @__PURE__ */ react.createElement(Card/* default */.A, { color: "grey", className: `${AddProfileModal_baseClass}__file` }, !fileDetails ? /* @__PURE__ */ react.createElement(AddProfileModal_FileChooser, { isLoading, onFileOpen }) : /* @__PURE__ */ react.createElement(AddProfileModal_FileDetails, { details: fileDetails })), isPremiumTier && /* @__PURE__ */ react.createElement("div", { className: `form-field ${AddProfileModal_baseClass}__target` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Target"), /* @__PURE__ */ react.createElement(
    TargetLabelSelector/* TargetLabelSelector */.Z,
    {
      selectedTargetType,
      onSelectTargetType: setSelectedTargetType,
      labels: labels || [],
      includeConfig: includeTab,
      excludeConfig: excludeTab,
      isLoadingLabels: isFetchingLabels,
      isErrorLabels,
      emptyStateDescription: "Add a label to target your configuration profile.",
      onAddLabel: () => {
        window.location.href = paths/* default */.A.LABEL_NEW_DYNAMIC;
      }
    }
  )), /* @__PURE__ */ react.createElement("div", { className: `${AddProfileModal_baseClass}__button-wrap` }, /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onDone }, "Cancel"), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${AddProfileModal_baseClass}__add-profile-button`,
      onClick: onFileUpload,
      isLoading,
      disabled: selectedTargetType === "Custom" && !hasSelectedLabels || !fileDetails
    },
    "Add profile"
  ))));
};
/* harmony default export */ var AddProfileModal_AddProfileModal = (AddProfileModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ProfileUploader/components/AddProfileModal/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ResendConfigProfileModal/ResendConfigProfileModal.tsx

var ResendConfigProfileModal_async = (__this, __arguments, generator) => {
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





const ResendConfigProfileModal_baseClass = "resend-config-profile-modal";
const ResendConfigProfileModal = ({
  name,
  uuid,
  count,
  onExit
}) => {
  const [isResending, setIsResending] = react.useState(false);
  const countText = `${count} ${count === 1 ? "host" : "hosts"}`;
  const onClickResend = () => ResendConfigProfileModal_async(null, null, function* () {
    setIsResending(true);
    try {
      yield config_profiles/* default */.A.batchResendConfigProfile(uuid);
      ToastNotification/* notify */.me.success(
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Resent the ", /* @__PURE__ */ react.createElement("b", null, name), " configuration profile.")
      );
      onExit();
    } catch (error) {
      ToastNotification/* notify */.me.error(
        "Couldn't resend the configuration profile. Please try again.",
        { response: error }
      );
    }
    setIsResending(false);
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: ResendConfigProfileModal_baseClass,
      title: "Resend configuration profile",
      onExit
    },
    /* @__PURE__ */ react.createElement("p", null, "This action will resend the ", /* @__PURE__ */ react.createElement("b", null, name), " configuration profile to", " ", /* @__PURE__ */ react.createElement("b", null, countText), ". To cancel after resending, delete and re-add the profile."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onClickResend,
        isLoading: isResending,
        disabled: isResending
      },
      "Resend"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit, disabled: isResending }, "Cancel"))
  );
};
/* harmony default export */ var ResendConfigProfileModal_ResendConfigProfileModal = (ResendConfigProfileModal);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/components/ResendConfigProfileModal/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/ConfigurationProfiles.tsx

var ConfigurationProfiles_async = (__this, __arguments, generator) => {
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




























const PROFILES_PER_PAGE = 10;
const ConfigurationProfiles_baseClass = "configuration-profiles";
const TABS_BY_INDEX = ["profiles", "assets"];
const ConfigurationProfiles = ({
  currentTeamId,
  router,
  currentPage = 0,
  activeTab = "profiles",
  onMutation
}) => {
  const {
    config,
    isPremiumTier,
    isGlobalAdmin,
    isGlobalTechnician,
    isTeamTechnician
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isTechnician = isGlobalTechnician || isTeamTechnician;
  const canAddConfigurationProfile = !isTechnician;
  const canTurnOnMdm = !!isGlobalAdmin;
  const mdmEnabled = (config == null ? void 0 : config.mdm.enabled_and_configured) || (config == null ? void 0 : config.mdm.windows_enabled_and_configured) || (config == null ? void 0 : config.mdm.android_enabled_and_configured);
  const [showAddProfileModal, setShowAddProfileModal] = (0,react.useState)(false);
  const [showEditProfileModal, setShowEditProfileModal] = (0,react.useState)(false);
  const [showDeleteProfileModal, setShowDeleteProfileModal] = (0,react.useState)(false);
  const [
    showConfigProfileStatusModal,
    setShowConfigProfileStatusModal
  ] = (0,react.useState)(false);
  const [
    showResendConfigProfileModal,
    setShowResendConfigProfileModal
  ] = (0,react.useState)(false);
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const selectedProfile = (0,react.useRef)(null);
  const selectedStatusHostCount = (0,react.useRef)(null);
  const {
    data: profilesData,
    isLoading: isLoadingProfiles,
    isError: isErrorProfiles,
    refetch: refetchProfiles
  } = (0,es.useQuery)(
    [
      {
        scope: "profiles",
        team_id: currentTeamId,
        page: currentPage,
        per_page: PROFILES_PER_PAGE
      }
    ],
    () => mdm/* default */.A.getProfiles({
      fleet_id: currentTeamId,
      page: currentPage,
      per_page: PROFILES_PER_PAGE
    }),
    {
      enabled: mdmEnabled,
      refetchOnWindowFocus: false
    }
  );
  const profiles = profilesData == null ? void 0 : profilesData.profiles;
  const meta = profilesData == null ? void 0 : profilesData.meta;
  const onUploadProfile = () => {
    refetchProfiles();
    onMutation();
  };
  const onCancelInfo = () => {
    selectedProfile.current = null;
    setShowConfigProfileStatusModal(false);
  };
  const onCancelEdit = () => {
    selectedProfile.current = null;
    setShowEditProfileModal(false);
  };
  const onUpdateProfile = () => {
    selectedProfile.current = null;
    setShowEditProfileModal(false);
    refetchProfiles();
    onMutation();
  };
  const onCancelDelete = () => {
    selectedProfile.current = null;
    setShowDeleteProfileModal(false);
  };
  const onDeleteProfile = (profileId) => ConfigurationProfiles_async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield mdm/* default */.A.deleteProfile(profileId);
      refetchProfiles();
      onMutation();
      ToastNotification/* notify */.me.success("Successfully deleted.");
    } catch (e) {
      const reason = (0,errors/* getErrorReason */.F3)(e, {
        reasonIncludes: "Policy automations"
      });
      if (reason === "") {
        ToastNotification/* notify */.me.error("Couldn't delete. Please try again.", { response: e });
      } else {
        ToastNotification/* notify */.me.error(reason, { response: e });
      }
    } finally {
      selectedProfile.current = null;
      setShowDeleteProfileModal(false);
    }
    setIsDeleting(false);
  });
  const path = paths/* default */.A.CONTROLS_CUSTOM_SETTINGS;
  const queryString = isPremiumTier ? `?fleet_id=${currentTeamId}&` : "?";
  const onPrevPage = (0,react.useCallback)(() => {
    router.push(path.concat(`${queryString}page=${currentPage - 1}`));
  }, [router, path, currentPage, queryString]);
  const onNextPage = (0,react.useCallback)(() => {
    router.push(path.concat(`${queryString}page=${currentPage + 1}`));
  }, [router, path, currentPage, queryString]);
  const handleTabChange = (index) => {
    const tabPath = TABS_BY_INDEX[index] === "assets" ? paths/* default */.A.CONTROLS_ASSETS : paths/* default */.A.CONTROLS_CUSTOM_SETTINGS;
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(tabPath, {
        fleet_id: isPremiumTier ? currentTeamId : void 0
      })
    );
  };
  const onClickInfo = (profile) => {
    selectedProfile.current = profile;
    setShowConfigProfileStatusModal(true);
  };
  const onClickEdit = (profile) => {
    selectedProfile.current = profile;
    setShowEditProfileModal(true);
  };
  const onClickDelete = (profile) => {
    selectedProfile.current = profile;
    setShowDeleteProfileModal(true);
  };
  const renderProfileList = () => {
    if (isLoadingProfiles) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isErrorProfiles) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (!(profiles == null ? void 0 : profiles.length)) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No configuration profiles",
          info: canAddConfigurationProfile ? "Add a configuration profile to enforce custom settings on your hosts." : "No configuration profiles have been added.",
          primaryButton: canAddConfigurationProfile ? /* @__PURE__ */ react.createElement(
            GitOpsModeTooltipWrapper/* default */.A,
            {
              renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
                Button/* default */.A,
                {
                  disabled: disableChildren,
                  onClick: () => setShowAddProfileModal(true)
                },
                "Add profile"
              )
            }
          ) : void 0
        }
      );
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      UploadList/* default */.A,
      {
        keyAttribute: "profile_uuid",
        listItems: profiles,
        ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(
          ProfileListItem_ProfileListItem,
          {
            isPremium: !!isPremiumTier,
            profile: listItem,
            onClickInfo,
            onClickEdit,
            onClickDelete,
            isTechnician
          }
        )
      }
    ), /* @__PURE__ */ react.createElement(
      Pagination/* default */.A,
      {
        disableNext: !(meta == null ? void 0 : meta.has_next_results),
        disablePrev: !(meta == null ? void 0 : meta.has_previous_results),
        hidePagination: !(meta == null ? void 0 : meta.has_next_results) && !(meta == null ? void 0 : meta.has_previous_results),
        onNextPage,
        onPrevPage
      }
    ));
  };
  const profilesDescription = /* @__PURE__ */ react.createElement(react.Fragment, null, isTechnician ? "View configuration profiles." : "Create and upload configuration profiles to apply custom settings.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      newTab: true,
      text: "Learn more",
      url: "https://fleetdm.com/guides/custom-os-settings"
    }
  ));
  const showAddProfileButton = mdmEnabled && canAddConfigurationProfile;
  return /* @__PURE__ */ react.createElement("div", { className: ConfigurationProfiles_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Configuration profiles", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(
    esm/* Tabs */.tU,
    {
      selectedIndex: TABS_BY_INDEX.indexOf(activeTab),
      onSelect: handleTabChange
    },
    /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Profiles")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Assets"))),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement("div", { className: "profiles-tab" }, /* @__PURE__ */ react.createElement("div", { className: "profiles-tab__tab-header" }, /* @__PURE__ */ react.createElement(
      PageDescription/* default */.A,
      {
        variant: "right-panel",
        content: profilesDescription
      }
    ), showAddProfileButton && /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        position: "left",
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "secondary",
            size: "small",
            onClick: () => setShowAddProfileModal(true),
            disabled: disableChildren,
            icon: "plus"
          },
          "Add profile"
        )
      }
    )), !mdmEnabled ? /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        variant: "header-list",
        header: "Additional configuration required",
        info: "MDM must be turned on to add configuration profiles.",
        primaryButton: canTurnOnMdm ? /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM)
          },
          "Turn on"
        ) : void 0
      }
    ) : renderProfileList())),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement(AssetsTab_AssetsTab, { currentTeamId, router }))
  )), showAddProfileModal && /* @__PURE__ */ react.createElement(
    AddProfileModal_AddProfileModal,
    {
      currentTeamId,
      isPremiumTier: !!isPremiumTier,
      onUpload: onUploadProfile,
      setShowModal: setShowAddProfileModal
    }
  ), showEditProfileModal && selectedProfile.current && /* @__PURE__ */ react.createElement(
    EditProfileModal_EditProfileModal,
    {
      profile: selectedProfile.current,
      currentTeamId,
      isPremiumTier: !!isPremiumTier,
      onUpdate: onUpdateProfile,
      onCancel: onCancelEdit
    }
  ), showDeleteProfileModal && selectedProfile.current && /* @__PURE__ */ react.createElement(
    DeleteProfileModal_DeleteProfileModal,
    {
      profileName: selectedProfile.current.name,
      profileId: selectedProfile.current.profile_uuid,
      onCancel: onCancelDelete,
      onDelete: onDeleteProfile,
      isDeleting
    }
  ), showConfigProfileStatusModal && selectedProfile.current && /* @__PURE__ */ react.createElement(
    ConfigProfileStatusModal_ConfigProfileStatusModal,
    {
      teamId: currentTeamId,
      name: selectedProfile.current.name,
      uuid: selectedProfile.current.profile_uuid,
      platform: selectedProfile.current.platform,
      onClickResend: (hostCount) => {
        selectedStatusHostCount.current = hostCount;
        setShowConfigProfileStatusModal(false);
        setShowResendConfigProfileModal(true);
      },
      onExit: onCancelInfo
    }
  ), showResendConfigProfileModal && selectedProfile.current && selectedStatusHostCount.current && /* @__PURE__ */ react.createElement(
    ResendConfigProfileModal_ResendConfigProfileModal,
    {
      name: selectedProfile.current.name,
      uuid: selectedProfile.current.profile_uuid,
      count: selectedStatusHostCount.current,
      onExit: () => {
        selectedStatusHostCount.current = null;
        setShowResendConfigProfileModal(false);
        setShowConfigProfileStatusModal(true);
      }
    }
  ));
};
/* harmony default export */ var ConfigurationProfiles_ConfigurationProfiles = (ConfigurationProfiles);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/ConfigurationProfiles/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var entities_config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/disk_encryption.ts
var disk_encryption = __webpack_require__(77155);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/permissions/index.ts
var permissions = __webpack_require__(65913);
// EXTERNAL MODULE: ./frontend/interfaces/label.ts
var label = __webpack_require__(95880);
// EXTERNAL MODULE: ./frontend/services/entities/hosts.ts
var hosts = __webpack_require__(42235);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/DiskEncryption/components/DiskEncryptionTable/DiskEncryptionTableConfig.tsx

var DiskEncryptionTableConfig_defProp = Object.defineProperty;
var DiskEncryptionTableConfig_defProps = Object.defineProperties;
var DiskEncryptionTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DiskEncryptionTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DiskEncryptionTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var DiskEncryptionTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var DiskEncryptionTableConfig_defNormalProp = (obj, key, value) => key in obj ? DiskEncryptionTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DiskEncryptionTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DiskEncryptionTableConfig_hasOwnProp.call(b, prop))
      DiskEncryptionTableConfig_defNormalProp(a, prop, b[prop]);
  if (DiskEncryptionTableConfig_getOwnPropSymbols)
    for (var prop of DiskEncryptionTableConfig_getOwnPropSymbols(b)) {
      if (DiskEncryptionTableConfig_propIsEnum.call(b, prop))
        DiskEncryptionTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DiskEncryptionTableConfig_spreadProps = (a, b) => DiskEncryptionTableConfig_defProps(a, DiskEncryptionTableConfig_getOwnPropDescs(b));





const defaultTableHeaders = [
  {
    title: "Status",
    Header: "Status",
    disableSortBy: true,
    accessor: "status",
    Cell: ({ cell: { value } }) => {
      const tooltipProp = value.tooltip ? { tooltipText: value.tooltip } : void 0;
      return /* @__PURE__ */ react.createElement(
        StatusIndicatorWithIcon/* default */.A,
        {
          status: value.statusName,
          value: value.displayName,
          tooltip: tooltipProp
        }
      );
    }
  },
  {
    title: "Hosts",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: cellProps.column.title,
        isSortedDesc: cellProps.column.isSortedDesc,
        disableSortBy: true
      }
    ),
    disableSortBy: true,
    accessor: "hosts",
    Cell: ({ cell: { value: aggregateCount } }) => {
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: aggregateCount });
    }
  },
  {
    title: "",
    Header: "",
    accessor: "linkToFilteredHosts",
    disableSortBy: true,
    Cell: (cellProps) => {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, cellProps.row.original && /* @__PURE__ */ react.createElement(ViewAllHostsLink/* default */.A, { className: "view-hosts-link", rowHover: true, noLink: true }));
    }
  }
];
const generateTableHeaders = () => {
  return defaultTableHeaders;
};
const STATUS_CELL_VALUES = {
  verified: {
    displayName: "Verified",
    statusName: "success",
    value: "verified",
    tooltip: "These hosts turned disk encryption on and sent their key to Fleet. Mesh verified with osquery."
  },
  verifying: {
    displayName: "Verifying",
    statusName: "successPartial",
    value: "verifying",
    tooltip: "These hosts acknowledged the MDM command to turn on disk encryption. Mesh is verifying with osquery and retrieving the disk encryption key. This may take up to one hour."
  },
  action_required: {
    displayName: "Action required",
    statusName: "pendingPartial",
    value: "action_required",
    tooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Ask the end user to follow ", /* @__PURE__ */ react.createElement("b", null, "Disk encryption"), " instructions on their", " ", /* @__PURE__ */ react.createElement("b", null, "My device"), " page.")
  },
  enforcing: {
    displayName: "Enforcing",
    statusName: "pendingPartial",
    value: "enforcing",
    tooltip: "These hosts will receive the MDM command to turn on disk encryption when the hosts come online."
  },
  failed: {
    displayName: "Failed",
    statusName: "error",
    value: "failed"
  },
  removing_enforcement: {
    displayName: "Removing enforcement",
    statusName: "pendingPartial",
    value: "removing_enforcement",
    tooltip: "These hosts will receive the MDM command to turn off disk encryption when the hosts come online."
  }
};
const DiskEncryptionTableConfig_STATUS_ORDER = [
  "verified",
  "verifying",
  "failed",
  "action_required",
  "enforcing",
  "removing_enforcement"
];
const ENFORCE_ONLY_STATUS_TOOLTIPS = {
  verified: "These hosts turned disk encryption on. Mesh verified with osquery.",
  verifying: "These hosts acknowledged the MDM command to turn on disk encryption. Mesh is verifying with osquery. This may take up to one hour."
};
const DiskEncryptionTableConfig_generateTableData = (platform, data, currentTeamId, isMacOSEnforceOnly = false) => {
  if (!data) return [];
  const rowFromStatusEntry = (status, statusAggregate) => {
    const enforceOnlyTooltip = isMacOSEnforceOnly ? ENFORCE_ONLY_STATUS_TOOLTIPS[status] : void 0;
    return {
      status: enforceOnlyTooltip ? DiskEncryptionTableConfig_spreadProps(DiskEncryptionTableConfig_spreadValues({}, STATUS_CELL_VALUES[status]), { tooltip: enforceOnlyTooltip }) : STATUS_CELL_VALUES[status],
      hosts: statusAggregate[platform],
      teamId: currentTeamId
    };
  };
  return DiskEncryptionTableConfig_STATUS_ORDER.map((status) => rowFromStatusEntry(status, data[status]));
};

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/DiskEncryption/components/DiskEncryptionTable/DiskEncryptionTable.tsx













const DiskEncryptionTable_baseClass = "disk-encryption-table";
const PLATFORM_TO_OSQUERY_PLATFORM = {
  macos: "darwin",
  windows: "windows",
  linux: "linux"
};
const DiskEncryptionTable = ({
  platform,
  currentTeamId,
  isMacOSEnforceOnly = false,
  router
}) => {
  const {
    data: diskEncryptionStatusData,
    error: diskEncryptionStatusError
  } = (0,es.useQuery)(
    ["disk-encryption-summary", currentTeamId],
    () => disk_encryption/* default */.A.getDiskEncryptionSummary(currentTeamId),
    {
      refetchOnWindowFocus: false,
      retry: false
    }
  );
  const { data: labels } = (0,es.useQuery)(["labelsSummary"], () => entities_labels/* default */.Ay.summary(), {
    select: (res) => res.labels,
    refetchOnWindowFocus: false,
    retry: false
  });
  const onSelectSingleRow = (0,react.useCallback)(
    (row) => {
      const { status, teamId } = row.original;
      const queryParams = {
        [hosts/* HOSTS_QUERY_PARAMS */.c.DISK_ENCRYPTION]: status == null ? void 0 : status.value,
        fleet_id: teamId
      };
      const labelId = (0,label/* getBuiltinPlatformLabelId */.iq)(
        labels,
        PLATFORM_TO_OSQUERY_PLATFORM[platform]
      );
      const endpoint = labelId !== void 0 ? paths/* default */.A.MANAGE_HOSTS_LABEL(labelId) : paths/* default */.A.MANAGE_HOSTS;
      const path = (0,url/* getPathWithQueryParams */.M8)(endpoint, queryParams);
      router.push(path);
    },
    [router, labels, platform]
  );
  const tableHeaders = generateTableHeaders();
  const tableData = DiskEncryptionTableConfig_generateTableData(
    platform,
    diskEncryptionStatusData,
    currentTeamId,
    isMacOSEnforceOnly
  );
  if (diskEncryptionStatusError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
  }
  if (!diskEncryptionStatusData) return null;
  return /* @__PURE__ */ react.createElement("div", { className: DiskEncryptionTable_baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data: tableData,
      resultsTitle: "",
      isLoading: false,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      manualSortBy: true,
      disableTableHeader: true,
      disablePagination: true,
      disableCount: true,
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No disk encryption status",
          info: "Expecting to status data? Try again in a few seconds as the system\r\n              catches up."
        }
      ),
      disableMultiRowSelect: true,
      onSelectSingleRow,
      hideFooter: true
    }
  ));
};
/* harmony default export */ var DiskEncryptionTable_DiskEncryptionTable = (DiskEncryptionTable);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/DiskEncryption/components/DiskEncryptionTable/index.ts



// EXTERNAL MODULE: ./frontend/pages/ManageControlsPage/OSSettings/cards/DiskEncryption/helpers.tsx
var DiskEncryption_helpers = __webpack_require__(89685);
;// ./frontend/pages/ManageControlsPage/OSSettings/cards/DiskEncryption/DiskEncryption.tsx

var DiskEncryption_defProp = Object.defineProperty;
var DiskEncryption_defProps = Object.defineProperties;
var DiskEncryption_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DiskEncryption_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DiskEncryption_hasOwnProp = Object.prototype.hasOwnProperty;
var DiskEncryption_propIsEnum = Object.prototype.propertyIsEnumerable;
var DiskEncryption_defNormalProp = (obj, key, value) => key in obj ? DiskEncryption_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DiskEncryption_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DiskEncryption_hasOwnProp.call(b, prop))
      DiskEncryption_defNormalProp(a, prop, b[prop]);
  if (DiskEncryption_getOwnPropSymbols)
    for (var prop of DiskEncryption_getOwnPropSymbols(b)) {
      if (DiskEncryption_propIsEnum.call(b, prop))
        DiskEncryption_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DiskEncryption_spreadProps = (a, b) => DiskEncryption_defProps(a, DiskEncryption_getOwnPropDescs(b));
var DiskEncryption_async = (__this, __arguments, generator) => {
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




























const DiskEncryption_baseClass = "disk-encryption";
const PLATFORM_TAB_NAMES = {
  macos: "macOS",
  windows: "Windows",
  linux: "Linux"
};
const getPlatformTabPath = (platform, teamId) => (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.CONTROLS_DISK_ENCRYPTION_PLATFORM(platform), {
  fleet_id: teamId
});
const MDM_REQUIRED_EMPTY_STATES = {
  macos: /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "Turn on MDM to enforce disk encryption",
      info: /* @__PURE__ */ react.createElement(react.Fragment, null, "You must turn on Apple MDM to enforce disk encryption for macOS hosts.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/turn-on-apple-mdm`,
          text: "Learn more",
          newTab: true
        }
      )),
      variant: "form"
    }
  ),
  windows: /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "Turn on MDM to enforce disk encryption",
      info: /* @__PURE__ */ react.createElement(react.Fragment, null, "You must turn on Windows MDM to enforce disk encryption for Windows hosts.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/setup-windows-mdm`,
          text: "Learn more",
          newTab: true
        }
      )),
      variant: "form"
    }
  )
};
const DiskEncryption = ({
  currentTeamId,
  onMutation,
  router,
  urlPlatformParam
}) => {
  var _a;
  const {
    isPremiumTier,
    config,
    setConfig,
    isTeamTechnician,
    isGlobalTechnician
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isTechnician = isTeamTechnician || isGlobalTechnician;
  const gitOpsModeEnabled = (_a = config == null ? void 0 : config.gitops) == null ? void 0 : _a.gitops_mode_enabled;
  const selectedPlatform = (0,interfaces_platform/* isDiskEncryptionSettingsPlatform */.z4)(urlPlatformParam) ? urlPlatformParam : void 0;
  (0,react.useEffect)(() => {
    if (!selectedPlatform) {
      router.replace(getPlatformTabPath("macos", currentTeamId));
    }
  }, [selectedPlatform, router, currentTeamId]);
  const onSelectPlatformTab = (index) => {
    router.push(
      getPlatformTabPath(
        interfaces_platform/* DISK_ENCRYPTION_SETTINGS_PLATFORMS */.ze[index],
        currentTeamId
      )
    );
  };
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const isPlatformMdmEnabled = {
    macos: !!config && permissions/* default */.A.isMacMdmEnabledAndConfigured(config),
    windows: !!config && permissions/* default */.A.isWindowsMdmEnabledAndConfigured(config),
    linux: true
  };
  const isPlatformFormDisabled = (platform) => gitOpsModeEnabled || isSaving || !isPlatformMdmEnabled[platform];
  const [formSettings, setFormSettings] = (0,react.useState)(
    () => currentTeamId === 0 ? (0,DiskEncryption_helpers/* getDiskEncryptionSettings */.u9)(config == null ? void 0 : config.mdm) : (0,DiskEncryption_helpers/* getDiskEncryptionSettings */.u9)()
  );
  const [savedSettings, setSavedSettings] = (0,react.useState)(
    formSettings
  );
  const getUpdatedAppConfig = () => DiskEncryption_async(null, null, function* () {
    try {
      const updatedConfig = yield entities_config/* default */.A.loadAll();
      setConfig(updatedConfig);
    } catch (err) {
      ToastNotification/* notify */.me.error("Could not retrieve updated app config. Please try again.", {
        response: err
      });
    }
  });
  const { isLoading: isLoadingTeam, isError: isTeamError } = (0,es.useQuery)(["team", currentTeamId], () => teams/* default */.A.load(currentTeamId), {
    refetchOnWindowFocus: false,
    retry: false,
    enabled: currentTeamId !== 0,
    select: (res) => res.fleet,
    onSuccess: (res) => {
      const settings = (0,DiskEncryption_helpers/* getDiskEncryptionSettings */.u9)(res == null ? void 0 : res.mdm);
      setFormSettings(settings);
      setSavedSettings(settings);
    }
  });
  const onToggleSetting = (key) => (value) => {
    setFormSettings((prev) => {
      const next = DiskEncryption_spreadProps(DiskEncryption_spreadValues({}, prev), { [key]: value });
      if (key === "windowsEnabled" && !value) {
        next.windowsPINRequired = false;
      }
      return next;
    });
  };
  const onSaveDiskEncryption = (platform) => DiskEncryption_async(null, null, function* () {
    if (isSaving) return;
    let formData;
    let updatedSettings;
    switch (platform) {
      case "macos":
        formData = {
          macos_settings: {
            enable_disk_encryption: formSettings.macOSEnabled,
            enable_escrow_disk_encryption_key: formSettings.macOSEscrowEnabled
          }
        };
        updatedSettings = {
          macOSEnabled: formSettings.macOSEnabled,
          macOSEscrowEnabled: formSettings.macOSEscrowEnabled
        };
        break;
      case "windows":
        formData = {
          windows_settings: {
            enable_disk_encryption: formSettings.windowsEnabled,
            require_bitlocker_pin: formSettings.windowsPINRequired
          }
        };
        updatedSettings = {
          windowsEnabled: formSettings.windowsEnabled,
          windowsPINRequired: formSettings.windowsPINRequired
        };
        break;
      case "linux":
      default:
        formData = {
          linux_settings: {
            enable_escrow_disk_encryption_key: formSettings.linuxEscrowEnabled
          }
        };
        updatedSettings = {
          linuxEscrowEnabled: formSettings.linuxEscrowEnabled
        };
    }
    setIsSaving(true);
    try {
      yield disk_encryption/* default */.A.updateDiskEncryption(formData, currentTeamId);
      ToastNotification/* notify */.me.success("Successfully updated disk encryption settings.");
      onMutation();
      setSavedSettings((prev) => DiskEncryption_spreadValues(DiskEncryption_spreadValues({}, prev), updatedSettings));
      if (currentTeamId === 0) {
        getUpdatedAppConfig();
      }
    } catch (e) {
      ToastNotification/* notify */.me.error((0,DiskEncryption_helpers/* getErrorMessage */.u1)(e), { response: e });
    } finally {
      setIsSaving(false);
    }
  });
  const renderSaveButton = (platform) => /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren || isPlatformFormDisabled(platform),
          isLoading: isSaving,
          className: `${DiskEncryption_baseClass}__save-button`,
          onClick: () => onSaveDiskEncryption(platform)
        },
        "Save"
      )
    }
  );
  const renderEnforceCheckbox = (platform, key, value) => /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      disabled: isPlatformFormDisabled(platform),
      onChange: onToggleSetting(key),
      value,
      className: `${DiskEncryption_baseClass}__checkbox`,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "If turned on, Mesh enforces disk encryption.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/mdm-disk-encryption`,
          newTab: true
        }
      ))
    },
    "Enable disk encryption"
  );
  const renderEscrowCheckbox = (platform, key, value, learnMoreLink) => /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      disabled: isPlatformFormDisabled(platform),
      onChange: onToggleSetting(key),
      value,
      className: `${DiskEncryption_baseClass}__checkbox`,
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Store the recovery key so your fleet can recover the device if the end user forgets their password.", learnMoreLink && /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { text: "Learn more", url: learnMoreLink, newTab: true })))
    },
    "Escrow recovery key with Fleet"
  );
  const renderPlatformTabPanel = (platform, isEnabled, formFields) => {
    const mdmRequiredEmptyState = isPlatformMdmEnabled[platform] ? void 0 : MDM_REQUIRED_EMPTY_STATES[platform];
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !isTechnician && (mdmRequiredEmptyState || /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${DiskEncryption_baseClass}__settings-card`, color: "white" }, /* @__PURE__ */ react.createElement("div", { className: `${DiskEncryption_baseClass}__form-fields` }, formFields), renderSaveButton(platform))), isEnabled ? /* @__PURE__ */ react.createElement(
      DiskEncryptionTable_DiskEncryptionTable,
      {
        platform,
        currentTeamId,
        isMacOSEnforceOnly: platform === "macos" && (0,DiskEncryption_helpers/* isMacOSDiskEncryptionEnforceOnly */.UW)(savedSettings),
        router
      }
    ) : isTechnician && /* @__PURE__ */ react.createElement("p", null, "Disk encryption is disabled."));
  };
  const renderContent = () => {
    if (isTeamError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (isLoadingTeam || !selectedPlatform) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(
      esm/* Tabs */.tU,
      {
        selectedIndex: interfaces_platform/* DISK_ENCRYPTION_SETTINGS_PLATFORMS */.ze.indexOf(
          selectedPlatform
        ),
        onSelect: onSelectPlatformTab
      },
      /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, interfaces_platform/* DISK_ENCRYPTION_SETTINGS_PLATFORMS */.ze.map((platform) => /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: platform }, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, PLATFORM_TAB_NAMES[platform])))),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${DiskEncryption_baseClass}__tab-panel` }, renderPlatformTabPanel(
        "macos",
        savedSettings.macOSEnabled || savedSettings.macOSEscrowEnabled,
        /* @__PURE__ */ react.createElement(react.Fragment, null, renderEnforceCheckbox(
          "macos",
          "macOSEnabled",
          formSettings.macOSEnabled
        ), renderEscrowCheckbox(
          "macos",
          "macOSEscrowEnabled",
          formSettings.macOSEscrowEnabled
        ))
      )),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${DiskEncryption_baseClass}__tab-panel` }, renderPlatformTabPanel(
        "windows",
        savedSettings.windowsEnabled,
        /* @__PURE__ */ react.createElement(react.Fragment, null, renderEnforceCheckbox(
          "windows",
          "windowsEnabled",
          formSettings.windowsEnabled
        ), /* @__PURE__ */ react.createElement(
          Checkbox/* default */.A,
          {
            disabled: isPlatformFormDisabled("windows") || !formSettings.windowsEnabled,
            onChange: onToggleSetting("windowsPINRequired"),
            value: formSettings.windowsPINRequired,
            className: `${DiskEncryption_baseClass}__checkbox`
          },
          /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react.Fragment, null, "If enabled, end users on Windows hosts will be required to set a BitLocker PIN.", /* @__PURE__ */ react.createElement("br", null), "When the PIN is set, it\u2019s required to unlock Windows hosts during startup."))
            },
            "Require BitLocker PIN"
          )
        ))
      )),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${DiskEncryption_baseClass}__tab-panel` }, renderPlatformTabPanel(
        "linux",
        savedSettings.linuxEscrowEnabled,
        renderEscrowCheckbox(
          "linux",
          "linuxEscrowEnabled",
          formSettings.linuxEscrowEnabled,
          `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/linux-disk-encryption`
        )
      ))
    ));
  };
  return /* @__PURE__ */ react.createElement("div", { className: DiskEncryption_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Disk encryption", alignLeftHeaderVertically: true }), isPremiumTier ? renderContent() : /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null));
};
/* harmony default export */ var DiskEncryption_DiskEncryption = (DiskEncryption);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/DiskEncryption/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/services/entities/host_name_template.ts



const hostNameTemplateService = {
  updateHostNameTemplate: (nameTemplate, teamId) => {
    const { HOST_NAME_TEMPLATE } = endpoints/* default */.A;
    return (0,services/* default */.Ay)("POST", HOST_NAME_TEMPLATE, {
      fleet_id: teamId,
      name_template: nameTemplate
    });
  }
};
/* harmony default export */ var host_name_template = (hostNameTemplateService);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/HostNameTemplate/HostNameTemplate.tsx

var HostNameTemplate_defProp = Object.defineProperty;
var HostNameTemplate_defProps = Object.defineProperties;
var HostNameTemplate_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var HostNameTemplate_getOwnPropSymbols = Object.getOwnPropertySymbols;
var HostNameTemplate_hasOwnProp = Object.prototype.hasOwnProperty;
var HostNameTemplate_propIsEnum = Object.prototype.propertyIsEnumerable;
var HostNameTemplate_defNormalProp = (obj, key, value) => key in obj ? HostNameTemplate_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var HostNameTemplate_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (HostNameTemplate_hasOwnProp.call(b, prop))
      HostNameTemplate_defNormalProp(a, prop, b[prop]);
  if (HostNameTemplate_getOwnPropSymbols)
    for (var prop of HostNameTemplate_getOwnPropSymbols(b)) {
      if (HostNameTemplate_propIsEnum.call(b, prop))
        HostNameTemplate_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var HostNameTemplate_spreadProps = (a, b) => HostNameTemplate_defProps(a, HostNameTemplate_getOwnPropDescs(b));
var HostNameTemplate_async = (__this, __arguments, generator) => {
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





















const HostNameTemplate_baseClass = "host-name-template";
const NAME_TEMPLATE_MAX_LENGTH = 255;
const HostNameTemplate = ({
  currentTeamId,
  router,
  onMutation
}) => {
  const { isPremiumTier, config, setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  const mdmEnabled = config == null ? void 0 : config.mdm.enabled_and_configured;
  const isNoTeam = currentTeamId === team/* API_NO_TEAM_ID */.Rp;
  const [nameTemplate, setNameTemplate] = (0,react.useState)();
  const [savedNameTemplate, setSavedNameTemplate] = (0,react.useState)();
  const {
    data: teamData,
    isLoading: isLoadingTeam,
    isError: isTeamError
  } = (0,es.useQuery)(
    ["team", currentTeamId],
    () => teams/* default */.A.load(currentTeamId),
    HostNameTemplate_spreadProps(HostNameTemplate_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier && !!mdmEnabled && !isNoTeam,
      onError: (err) => {
        ToastNotification/* notify */.me.error("Couldn't load fleet settings. Please try again.", {
          response: err
        });
      }
    })
  );
  const seededTeamRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    var _a, _b, _c, _d;
    if (seededTeamRef.current === currentTeamId) {
      return;
    }
    if (isNoTeam) {
      if (!config) {
        return;
      }
      const loaded = (_a = config.mdm.name_template) != null ? _a : "";
      setNameTemplate(loaded);
      setSavedNameTemplate(loaded);
      seededTeamRef.current = currentTeamId;
    } else if (teamData) {
      const loaded = (_d = (_c = (_b = teamData.fleet) == null ? void 0 : _b.mdm) == null ? void 0 : _c.name_template) != null ? _d : "";
      setNameTemplate(loaded);
      setSavedNameTemplate(loaded);
      seededTeamRef.current = currentTeamId;
    }
  }, [currentTeamId, isNoTeam, config, teamData]);
  const { mutate: saveNameTemplate, isLoading: updating } = (0,es.useMutation)(
    (tmpl) => host_name_template.updateHostNameTemplate(tmpl, currentTeamId),
    {
      onSuccess: (_data, tmpl) => HostNameTemplate_async(null, null, function* () {
        setSavedNameTemplate(tmpl);
        ToastNotification/* notify */.me.success("Successfully updated host name template.");
        onMutation();
        if (isNoTeam) {
          try {
            setConfig(yield entities_config/* default */.A.loadAll());
          } catch (err) {
            ToastNotification/* notify */.me.error(
              "Could not retrieve updated app config. Please try again.",
              { response: err }
            );
          }
        }
      }),
      onError: (e) => {
        ToastNotification/* notify */.me.error(
          (0,errors/* getErrorReason */.F3)(e) || "Couldn't update host name template. Please try again.",
          { response: e }
        );
      }
    }
  );
  const isFormDisabled = isLoadingTeam || isTeamError || nameTemplate === void 0;
  const isPristine = nameTemplate === savedNameTemplate;
  const renderCardBody = () => {
    var _a;
    if (!isPremiumTier) {
      return /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null);
    }
    if (mdmEnabled === void 0) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (!mdmEnabled) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "form",
          header: "Manage your hosts",
          info: "MDM must be turned on to apply host name settings.",
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      );
    }
    if (isLoadingTeam) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement("div", { className: `form ${HostNameTemplate_baseClass}__content` }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "Name template",
        name: "name-template",
        value: nameTemplate != null ? nameTemplate : "",
        onChange: (value) => setNameTemplate(value),
        placeholder: "iPad $FLEET_VAR_HOST_HARDWARE_SERIAL",
        helpText: "This will be the host's name in Mesh and on the device itself.",
        disabled: isFormDisabled || ((_a = config == null ? void 0 : config.gitops) == null ? void 0 : _a.gitops_mode_enabled),
        inputOptions: { maxLength: NAME_TEMPLATE_MAX_LENGTH }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        tipOffset: 8,
        renderChildren: (gitopsDisabled) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            disabled: isFormDisabled || isPristine || updating || gitopsDisabled,
            isLoading: updating,
            className: `${HostNameTemplate_baseClass}__save-button`,
            onClick: () => nameTemplate !== void 0 && saveNameTemplate(nameTemplate)
          },
          "Save"
        )
      }
    )));
  };
  const scopeSuffix = isNoTeam ? "." : " in this fleet.";
  const builtInVariablesUrl = `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/built-in-variables`;
  const customVariablesUrl = (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.CONTROLS_VARIABLES, {
    fleet_id: currentTeamId
  });
  const customHostVitalsUrl = (0,url/* getPathWithQueryParams */.M8)(
    paths/* default */.A.CONTROLS_VARIABLES_CUSTOM_HOST_VITALS,
    { fleet_id: currentTeamId }
  );
  const description = /* @__PURE__ */ react.createElement(react.Fragment, null, "Set a naming convention for all macOS, iOS, or iPadOS hosts", scopeSuffix, " ", "Use ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { text: "built-in", url: builtInVariablesUrl, newTab: true }), " ", "variables, ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { text: "custom", url: customVariablesUrl }), " ", "variables, or", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { text: "custom host vitals", url: customHostVitalsUrl }), " ", "variables to differentiate between hosts.");
  return /* @__PURE__ */ react.createElement("div", { className: HostNameTemplate_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Host names", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { variant: "right-panel", content: description }), renderCardBody());
};
/* harmony default export */ var HostNameTemplate_HostNameTemplate = (HostNameTemplate);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/HostNameTemplate/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Passwords/Passwords.tsx

var Passwords_defProp = Object.defineProperty;
var Passwords_defProps = Object.defineProperties;
var Passwords_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Passwords_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Passwords_hasOwnProp = Object.prototype.hasOwnProperty;
var Passwords_propIsEnum = Object.prototype.propertyIsEnumerable;
var Passwords_defNormalProp = (obj, key, value) => key in obj ? Passwords_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Passwords_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Passwords_hasOwnProp.call(b, prop))
      Passwords_defNormalProp(a, prop, b[prop]);
  if (Passwords_getOwnPropSymbols)
    for (var prop of Passwords_getOwnPropSymbols(b)) {
      if (Passwords_propIsEnum.call(b, prop))
        Passwords_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Passwords_spreadProps = (a, b) => Passwords_defProps(a, Passwords_getOwnPropDescs(b));
var Passwords_async = (__this, __arguments, generator) => {
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




















const Passwords_baseClass = "passwords";
const RECOVERY_LOCK_TOOLTIP_CONTENT = /* @__PURE__ */ react.createElement(react.Fragment, null, "Configure and escrow macOS Recovery Lock passwords. These restrict access to recoveryOS and are securely stored for authorized admin retrieval.", " ", /* @__PURE__ */ react.createElement(
  CustomLink/* default */.A,
  {
    text: "Learn more",
    url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/recovery-lock-passwords`,
    newTab: true,
    variant: "tooltip-link"
  }
));
const Passwords = ({
  currentTeamId,
  router,
  onMutation
}) => {
  const {
    isPremiumTier,
    config,
    isTeamTechnician,
    isGlobalTechnician
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isTechnician = isTeamTechnician || isGlobalTechnician;
  const mdmEnabled = config == null ? void 0 : config.mdm.enabled_and_configured;
  const [enableRecoveryLockPassword, setEnableRecoveryLockPassword] = (0,react.useState)(void 0);
  const [updating, setUpdating] = (0,react.useState)(false);
  const {
    isLoading: isLoadingTeam,
    isSuccess: isTeamSuccess,
    isError: isTeamError
  } = (0,es.useQuery)(
    ["team", currentTeamId],
    () => teams/* default */.A.load(currentTeamId),
    Passwords_spreadProps(Passwords_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: currentTeamId !== team/* API_NO_TEAM_ID */.Rp,
      select: (res) => res.fleet,
      onSuccess: (res) => {
        var _a, _b;
        setEnableRecoveryLockPassword(
          (_b = (_a = res.mdm) == null ? void 0 : _a.enable_recovery_lock_password) != null ? _b : false
        );
      },
      onError: (err) => {
        ToastNotification/* notify */.me.error("Couldn't load team settings. Please try again.", {
          response: err
        });
      }
    })
  );
  (0,react.useEffect)(() => {
    var _a;
    if (currentTeamId === team/* API_NO_TEAM_ID */.Rp) {
      setEnableRecoveryLockPassword(
        (_a = config == null ? void 0 : config.mdm.enable_recovery_lock_password) != null ? _a : false
      );
    }
  }, [currentTeamId, config == null ? void 0 : config.mdm.enable_recovery_lock_password]);
  const isTeamQuery = currentTeamId !== team/* API_NO_TEAM_ID */.Rp;
  const showLoading = isTeamQuery && isLoadingTeam;
  const isFormReady = !isTeamQuery || isTeamSuccess && !isLoadingTeam;
  const isFormDisabled = !isFormReady || isTeamError || enableRecoveryLockPassword === void 0;
  const onUpdateRecoveryLockPassword = () => Passwords_async(null, null, function* () {
    var _a;
    setUpdating(true);
    try {
      if (currentTeamId === team/* API_NO_TEAM_ID */.Rp) {
        yield entities_config/* default */.A.update({
          mdm: { enable_recovery_lock_password: enableRecoveryLockPassword }
        });
      } else {
        yield teams/* default */.A.updateConfig(
          {
            mdm: { enable_recovery_lock_password: enableRecoveryLockPassword }
          },
          currentTeamId
        );
      }
      ToastNotification/* notify */.me.success(
        "Successfully updated Recovery Lock password enforcement."
      );
      onMutation();
    } catch (e) {
      const errorMsg = (_a = (0,errors/* getErrorReason */.F3)(e)) != null ? _a : "Couldn't update Recovery Lock password enforcement. Please try again.";
      ToastNotification/* notify */.me.error(errorMsg, { response: e });
    } finally {
      setUpdating(false);
    }
  });
  return /* @__PURE__ */ react.createElement("div", { className: Passwords_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Passwords", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: "Manage passwords used for recovery, security, or administrative access across supported platforms."
    }
  ), !isPremiumTier && /* @__PURE__ */ react.createElement(PremiumFeatureMessage/* default */.A, null), isPremiumTier && mdmEnabled === void 0 && /* @__PURE__ */ react.createElement(Spinner/* default */.A, null), isPremiumTier && mdmEnabled === false && /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      variant: "form",
      header: "Manage your hosts",
      info: "MDM must be turned on to apply password settings.",
      primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
    }
  ), isPremiumTier && mdmEnabled === true && showLoading && /* @__PURE__ */ react.createElement(Spinner/* default */.A, null), isPremiumTier && mdmEnabled === true && !showLoading && !isTechnician && /* @__PURE__ */ react.createElement("div", { className: "form passwords-content" }, /* @__PURE__ */ react.createElement("div", { className: `${Passwords_baseClass}__recovery-lock-header` }, /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: RECOVERY_LOCK_TOOLTIP_CONTENT }, "Recovery Lock password")), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      disabled: isFormDisabled || (config == null ? void 0 : config.gitops.gitops_mode_enabled),
      onChange: (value) => setEnableRecoveryLockPassword(value),
      value: enableRecoveryLockPassword != null ? enableRecoveryLockPassword : false,
      className: `${Passwords_baseClass}__checkbox`,
      helpText: "This setting is only available on macOS hosts with Apple silicon."
    },
    "Turn on Recovery Lock password"
  ), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 8,
      renderChildren: (gitopsDisabled) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: isFormDisabled || gitopsDisabled,
          isLoading: updating,
          className: `${Passwords_baseClass}__save-button`,
          onClick: onUpdateRecoveryLockPassword
        },
        "Save"
      )
    }
  ))));
};
/* harmony default export */ var Passwords_Passwords = (Passwords);

;// ./frontend/pages/ManageControlsPage/OSSettings/cards/Passwords/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/OSSettingsNavItems.tsx







const getOSSettingsNavItems = (isTechnician) => {
  const items = [
    {
      title: "Disk encryption",
      urlSection: "disk-encryption",
      path: paths/* default */.A.CONTROLS_DISK_ENCRYPTION,
      Card: DiskEncryption_DiskEncryption
    },
    {
      title: "Configuration profiles",
      urlSection: "configuration-profiles",
      path: paths/* default */.A.CONTROLS_CUSTOM_SETTINGS,
      Card: ConfigurationProfiles_ConfigurationProfiles
    },
    {
      title: "Certificates",
      Card: Certificates_Certificates,
      urlSection: "certificates",
      path: paths/* default */.A.CONTROLS_CERTIFICATES,
      exclude: isTechnician
    },
    {
      title: "Passwords",
      Card: Passwords_Passwords,
      urlSection: "passwords",
      path: paths/* default */.A.CONTROLS_PASSWORDS,
      exclude: isTechnician
    },
    {
      title: "Host names",
      Card: HostNameTemplate_HostNameTemplate,
      urlSection: "host-name-template",
      path: paths/* default */.A.CONTROLS_HOST_NAME_TEMPLATE,
      exclude: isTechnician
    }
  ];
  return items.filter((item) => !item.exclude);
};
/* harmony default export */ var OSSettingsNavItems = (getOSSettingsNavItems);

// EXTERNAL MODULE: ./frontend/components/StatusIndicatorWithIcon/StatusIndicatorWithIcon.tsx
var StatusIndicatorWithIcon_StatusIndicatorWithIcon = __webpack_require__(512);
;// ./frontend/pages/ManageControlsPage/OSSettings/ProfileStatusAggregate/ProfileStatusAggregateOptions.tsx


const AGGREGATE_STATUS_DISPLAY_OPTIONS = [
  {
    value: "verified",
    text: "Verified",
    iconName: "success",
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "These hosts applied all OS settings. Mesh verified.")
  },
  {
    value: "verifying",
    text: "Verifying",
    iconName: "successPartial",
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "These hosts acknowledged all MDM commands to apply OS settings. Mesh is verifying the OS settings are applied.")
  },
  {
    value: "pending",
    text: "Pending",
    iconName: "pendingPartial",
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "These hosts will apply the latest OS settings. ", /* @__PURE__ */ react.createElement("br", null), "Click on a host to view which settings.")
  },
  {
    value: "failed",
    text: "Failed",
    iconName: "error",
    tooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "These hosts failed to apply the latest OS settings. ", /* @__PURE__ */ react.createElement("br", null), "Click on a host to view error(s).")
  }
];
/* harmony default export */ var ProfileStatusAggregateOptions = (AGGREGATE_STATUS_DISPLAY_OPTIONS);

;// ./frontend/pages/ManageControlsPage/OSSettings/ProfileStatusAggregate/ProfileStatusAggregate.tsx










const ProfileStatusAggregate_baseClass = "profile-status-aggregate";
const ProfileStatusCount = ({
  statusIcon,
  title,
  hostCount,
  tooltipText
}) => {
  const countText = hostCount === 1 ? "host" : "hosts";
  return /* @__PURE__ */ react.createElement("div", { className: `${ProfileStatusAggregate_baseClass}__profile-status-count` }, /* @__PURE__ */ react.createElement(
    StatusIndicatorWithIcon_StatusIndicatorWithIcon/* default */.A,
    {
      status: statusIcon,
      value: title,
      tooltip: { tooltipText, position: "top" },
      layout: "vertical",
      valueClassName: `${ProfileStatusAggregate_baseClass}__status-indicator-value`
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `${ProfileStatusAggregate_baseClass}__host-count` }, hostCount, " ", countText));
};
const ProfileStatusAggregate = ({
  isLoading,
  isError,
  teamId,
  aggregateProfileStatusData
}) => {
  if (isLoading) {
    return /* @__PURE__ */ react.createElement("div", { className: ProfileStatusAggregate_baseClass }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, { className: `${ProfileStatusAggregate_baseClass}__loading-spinner`, centered: false }));
  }
  if (isError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
  }
  if (!aggregateProfileStatusData) return null;
  const indicators = ProfileStatusAggregateOptions.map((status) => {
    const { value, text, iconName, tooltipText } = status;
    const count = aggregateProfileStatusData[value];
    const hostsByStatusParams = {
      fleet_id: teamId,
      [hosts/* HOSTS_QUERY_PARAMS */.c.OS_SETTINGS]: value
    };
    const path = (0,url/* getPathWithQueryParams */.M8)(
      paths/* default */.A.MANAGE_HOSTS,
      hostsByStatusParams
    );
    return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: ProfileStatusAggregate_baseClass, path }, /* @__PURE__ */ react.createElement(
      ProfileStatusCount,
      {
        key: value,
        statusIcon: iconName,
        title: text,
        hostCount: count,
        tooltipText
      }
    ));
  });
  return /* @__PURE__ */ react.createElement("div", { className: ProfileStatusAggregate_baseClass }, indicators);
};
/* harmony default export */ var ProfileStatusAggregate_ProfileStatusAggregate = (ProfileStatusAggregate);

;// ./frontend/pages/ManageControlsPage/OSSettings/ProfileStatusAggregate/index.ts



;// ./frontend/pages/ManageControlsPage/OSSettings/OSSettings.tsx

var OSSettings_defProp = Object.defineProperty;
var OSSettings_defProps = Object.defineProperties;
var OSSettings_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var OSSettings_getOwnPropSymbols = Object.getOwnPropertySymbols;
var OSSettings_hasOwnProp = Object.prototype.hasOwnProperty;
var OSSettings_propIsEnum = Object.prototype.propertyIsEnumerable;
var OSSettings_defNormalProp = (obj, key, value) => key in obj ? OSSettings_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var OSSettings_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (OSSettings_hasOwnProp.call(b, prop))
      OSSettings_defNormalProp(a, prop, b[prop]);
  if (OSSettings_getOwnPropSymbols)
    for (var prop of OSSettings_getOwnPropSymbols(b)) {
      if (OSSettings_propIsEnum.call(b, prop))
        OSSettings_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var OSSettings_spreadProps = (a, b) => OSSettings_defProps(a, OSSettings_getOwnPropDescs(b));









const OSSettings_baseClass = "os-settings";
const OSSettings = ({
  router,
  currentPage,
  teamIdForApi,
  location: { search: queryString },
  params
}) => {
  var _a;
  const { section, platform: urlPlatformParam } = params;
  const { isTeamTechnician, isGlobalTechnician } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    data: aggregateProfileStatusData,
    refetch: refetchAggregateProfileStatus,
    isError: isErrorAggregateProfileStatus,
    isLoading: isLoadingAggregateProfileStatus
  } = (0,es.useQuery)(
    ["aggregateProfileStatuses", teamIdForApi],
    () => mdm/* default */.A.getProfilesStatusSummary(teamIdForApi),
    {
      enabled: teamIdForApi !== void 0,
      refetchOnWindowFocus: false,
      retry: false
    }
  );
  const isTechnician = !!isTeamTechnician || !!isGlobalTechnician;
  const filteredNavItems = (0,react.useMemo)(() => {
    return OSSettingsNavItems(isTechnician);
  }, [isTechnician]);
  const DEFAULT_SETTINGS_SECTION = filteredNavItems[0];
  const isAssetsSubTab = section === "assets";
  const effectiveSection = isAssetsSubTab ? "configuration-profiles" : section;
  const currentFormSection = (_a = filteredNavItems.find((item) => item.urlSection === effectiveSection)) != null ? _a : DEFAULT_SETTINGS_SECTION;
  if (section && currentFormSection === DEFAULT_SETTINGS_SECTION && section !== DEFAULT_SETTINGS_SECTION.urlSection) {
    router.replace(DEFAULT_SETTINGS_SECTION.path.concat(queryString));
    return null;
  }
  if (urlPlatformParam && currentFormSection.urlSection !== "disk-encryption") {
    router.replace(currentFormSection.path.concat(queryString));
    return null;
  }
  const CurrentCard = currentFormSection.Card;
  if (teamIdForApi === void 0) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  return /* @__PURE__ */ react.createElement("div", { className: OSSettings_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "tab-panel",
      content: "Remotely enforce OS settings on hosts assigned to this fleet."
    }
  ), /* @__PURE__ */ react.createElement(
    ProfileStatusAggregate_ProfileStatusAggregate,
    {
      isLoading: isLoadingAggregateProfileStatus,
      isError: isErrorAggregateProfileStatus,
      teamId: teamIdForApi,
      aggregateProfileStatusData
    }
  ), /* @__PURE__ */ react.createElement(
    SideNav/* default */.A,
    {
      className: `${OSSettings_baseClass}__side-nav`,
      navItems: filteredNavItems.map((navItem) => OSSettings_spreadProps(OSSettings_spreadValues({}, navItem), {
        path: navItem.path.concat(queryString)
      })),
      activeItem: currentFormSection.urlSection,
      CurrentCard: /* @__PURE__ */ react.createElement(
        CurrentCard,
        {
          key: teamIdForApi,
          currentTeamId: teamIdForApi,
          onMutation: refetchAggregateProfileStatus,
          router,
          currentPage,
          activeTab: isAssetsSubTab ? "assets" : "profiles",
          urlPlatformParam
        }
      )
    }
  ));
};
/* harmony default export */ var OSSettings_OSSettings = (OSSettings);

;// ./frontend/pages/ManageControlsPage/OSSettings/index.ts




/***/ }),

/***/ 34988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ CurrentVersionSection_CurrentVersionSection; },
  E: function() { return /* binding */ parseOSUpdatesCurrentVersionsQueryParams; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/services/entities/operating_systems.ts
var operating_systems = __webpack_require__(91310);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
;// ./frontend/pages/ManageControlsPage/OSUpdates/components/OSVersionsEmptyState/OSVersionsEmptyState.tsx



const OSVersionsEmptyState = () => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "No OS versions detected",
      info: /* @__PURE__ */ react.createElement(react.Fragment, null, "This report is updated every hour to protect", /* @__PURE__ */ react.createElement("br", null), " the performance of your devices.")
    }
  );
};
/* harmony default export */ var OSVersionsEmptyState_OSVersionsEmptyState = (OSVersionsEmptyState);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/OSVersionsEmptyState/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
;// ./frontend/pages/ManageControlsPage/OSUpdates/components/OSTypeCell/OSTypeCell.tsx




const baseClass = "os-type-cell";
const OSTypeCell = ({ platform, versionName }) => {
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: platform }), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__tooltip-wrapper` }, /* @__PURE__ */ react.createElement(
    TooltipTruncatedText/* default */.A,
    {
      value: versionName,
      className: `${baseClass}__inner-text`
    }
  )));
};
/* harmony default export */ var OSTypeCell_OSTypeCell = (OSTypeCell);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/OSTypeCell/index.ts



;// ./frontend/pages/ManageControlsPage/OSUpdates/components/OSVersionTable/OSVersionTableConfig.tsx






const generateTableHeaders = (teamId) => {
  return [
    {
      title: "OS type",
      Header: "OS type",
      disableSortBy: true,
      accessor: "platform",
      Cell: ({ row }) => /* @__PURE__ */ react.createElement(
        OSTypeCell_OSTypeCell,
        {
          platform: row.original.platform,
          versionName: row.original.name_only
        }
      )
    },
    {
      title: "Version",
      Header: "Version",
      disableSortBy: true,
      accessor: "version"
    },
    {
      title: "Hosts",
      accessor: "hosts_count",
      disableSortBy: false,
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      Cell: ({ row }) => {
        const { hosts_count } = row.original;
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
              os_name: cellProps.row.original.name_only,
              os_version: cellProps.row.original.version,
              fleet_id: teamId
            },
            className: "os-hosts-link",
            rowHover: true
          }
        ));
      }
    }
  ];
};

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/OSVersionTable/OSVersionTable.tsx








const OSVersionTable_baseClass = "os-version-table";
const OSVersionTable = ({
  router,
  osVersionData,
  currentTeamId,
  isLoading,
  queryParams,
  hasNextPage
}) => {
  const columns = generateTableHeaders(currentTeamId);
  const determineQueryParamChange = (0,react.useCallback)(
    (newTableQuery) => {
      var _a;
      const changedEntry = Object.entries(newTableQuery).find(([key, val]) => {
        switch (key) {
          case "sortDirection":
            return val !== queryParams.order_direction;
          case "sortHeader":
            return val !== queryParams.order_key;
          case "pageIndex":
            return val !== queryParams.page;
          default:
            return false;
        }
      });
      return (_a = changedEntry == null ? void 0 : changedEntry[0]) != null ? _a : "";
    },
    [queryParams.order_direction, queryParams.order_key, queryParams.page]
  );
  const generateNewQueryParams = (0,react.useCallback)(
    (newTableQuery, changedParam) => {
      const newQueryParam = {
        fleet_id: currentTeamId,
        order_direction: newTableQuery.sortDirection,
        order_key: newTableQuery.sortHeader,
        page: changedParam === "pageIndex" ? newTableQuery.pageIndex : 0
      };
      return newQueryParam;
    },
    [currentTeamId]
  );
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const changedParam = determineQueryParamChange(newTableQuery);
      if (changedParam === "") return;
      const newRoute = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.CONTROLS_OS_UPDATES,
        routeTemplate: "",
        queryParams: generateNewQueryParams(newTableQuery, changedParam)
      });
      router.replace(newRoute);
    },
    [determineQueryParamChange, generateNewQueryParams, router]
  );
  const onSelectSingleRow = (0,react.useCallback)(
    (row) => {
      const { name_only, version } = row.original;
      const hostsQueryParams = {
        os_name: name_only,
        os_version: version,
        fleet_id: currentTeamId
      };
      const path = (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_HOSTS, hostsQueryParams);
      router.push(path);
    },
    [router, currentTeamId]
  );
  return /* @__PURE__ */ react.createElement("div", { className: OSVersionTable_baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: columns,
      data: osVersionData,
      isLoading,
      resultsTitle: "",
      emptyComponent: OSVersionsEmptyState_OSVersionsEmptyState,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      defaultSortHeader: queryParams.order_key,
      defaultSortDirection: queryParams.order_direction,
      pageIndex: queryParams.page,
      disableTableHeader: true,
      disableCount: true,
      pageSize: queryParams.per_page,
      onQueryChange,
      disableNextPage: !hasNextPage,
      hideFooter: !hasNextPage && queryParams.page === 0,
      disableMultiRowSelect: true,
      onSelectSingleRow
    }
  ));
};
/* harmony default export */ var OSVersionTable_OSVersionTable = (OSVersionTable);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/OSVersionTable/index.ts



;// ./frontend/pages/ManageControlsPage/OSUpdates/components/CurrentVersionSection/CurrentVersionSection.tsx

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









const CurrentVersionSection_baseClass = "os-updates-current-version-section";
const DEFAULT_SORT_DIRECTION = "desc";
const DEFAULT_SORT_HEADER = "hosts_count";
const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 8;
const parseOSUpdatesCurrentVersionsQueryParams = (queryParams) => {
  var _a, _b;
  const sortHeader = (_a = queryParams == null ? void 0 : queryParams.order_key) != null ? _a : DEFAULT_SORT_HEADER;
  const sortDirection = (_b = queryParams == null ? void 0 : queryParams.order_direction) != null ? _b : DEFAULT_SORT_DIRECTION;
  const page = (queryParams == null ? void 0 : queryParams.page) ? parseInt(queryParams.page, 10) : DEFAULT_PAGE;
  const pageSize = DEFAULT_PAGE_SIZE;
  return {
    page,
    order_key: sortHeader,
    order_direction: sortDirection,
    per_page: pageSize
  };
};
const CurrentVersionSection = ({
  router,
  currentTeamId,
  queryParams
}) => {
  const { data, isError, isLoading: isLoadingOsVersions } = (0,es.useQuery)(
    ["os_versions", currentTeamId, queryParams],
    () => (0,operating_systems/* getOSVersions */.kT)(__spreadProps(__spreadValues({
      teamId: currentTeamId
    }, queryParams), {
      query: "windows,darwin,ios,ipados"
      // We only want to show windows mac, ios, ipados versions atm.
    })),
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  );
  const generateSubTitleText = () => {
    return /* @__PURE__ */ react.createElement(
      LastUpdatedText/* default */.A,
      {
        lastUpdatedAt: data == null ? void 0 : data.counts_updated_at,
        customTooltipText: "Fleet periodically queries all hosts to retrieve operating systems. Click to view hosts for the most up-to-date lists."
      }
    );
  };
  const renderTable = () => {
    if (isLoadingOsVersions) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(
        DataError/* default */.A,
        {
          verticalPaddingSize: "pad-xxxlarge",
          description: "Refresh the page to try again.",
          excludeIssueLink: true
        }
      );
    }
    if (!data) {
      return null;
    }
    if (!data.os_versions) {
      return /* @__PURE__ */ react.createElement(OSVersionsEmptyState_OSVersionsEmptyState, null);
    }
    return /* @__PURE__ */ react.createElement(
      OSVersionTable_OSVersionTable,
      {
        router,
        osVersionData: data.os_versions,
        currentTeamId,
        isLoading: isLoadingOsVersions,
        queryParams,
        hasNextPage: data.meta.has_next_results
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: CurrentVersionSection_baseClass }, /* @__PURE__ */ react.createElement(
    SectionHeader/* default */.A,
    {
      title: "Current versions",
      subTitle: isLoadingOsVersions ? null : generateSubTitleText(),
      wrapperCustomClass: `${CurrentVersionSection_baseClass}__header`
    }
  ), renderTable());
};
/* harmony default export */ var CurrentVersionSection_CurrentVersionSection = (CurrentVersionSection);


/***/ }),

/***/ 60289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ OSUpdates_OSUpdates; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var entities_config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/pages/ManageControlsPage/OSUpdates/components/CurrentVersionSection/CurrentVersionSection.tsx + 7 modules
var CurrentVersionSection = __webpack_require__(34988);
;// ./frontend/pages/ManageControlsPage/OSUpdates/components/CurrentVersionSection/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_presence/index.ts
var validate_presence = __webpack_require__(94781);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
;// ./frontend/pages/ManageControlsPage/OSUpdates/components/AppleOSTargetForm/helpers.tsx


const getErrorMessage = (err) => {
  var _a, _b, _c;
  const originalReason = (_c = (_b = (_a = err == null ? void 0 : err.data) == null ? void 0 : _a.errors) == null ? void 0 : _b[0]) == null ? void 0 : _c.reason;
  const apiReason = originalReason == null ? void 0 : originalReason.toLowerCase();
  if (apiReason == null ? void 0 : apiReason.includes("version isn't supported by apple")) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't update. The ", /* @__PURE__ */ react.createElement("b", null, "Minimum version"), " isn't supported by Apple.");
  }
  if (apiReason == null ? void 0 : apiReason.includes("deadline isn't a valid date")) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't update. The ", /* @__PURE__ */ react.createElement("b", null, "Deadline"), " isn't a valid date.");
  }
  if (apiReason == null ? void 0 : apiReason.includes("couldn't update os updates settings")) {
    return originalReason;
  }
  return "Couldn\u2019t update. Please try again.";
};

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/AppleOSTargetForm/AppleOSTargetForm.tsx

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















const baseClass = "apple-os-target-form";
const LATEST_VERSION = "latest";
const TARGET_OPTIONS = [
  { label: "No updates enforced", value: "none" },
  { label: "Custom version", value: "custom" },
  { label: "Latest version", value: "latest" }
];
const getTargetFromMinOsVersion = (minOsVersion) => {
  if (minOsVersion === LATEST_VERSION) return "latest";
  return minOsVersion ? "custom" : "none";
};
const validateMinVersion = (value) => {
  return /^(0|[1-9]\d*)(\.(0|[1-9]\d*)){0,2}$/.test(value);
};
const validateDeadline = (value) => {
  return /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(value);
};
const validateDeadlineDays = (value) => {
  return /^[1-9]\d*$/.test(value);
};
const validateForm = (formData) => {
  const errors = {};
  if (formData.target === "none") {
    return errors;
  }
  if (formData.target === "latest") {
    if (!(0,validate_presence/* default */.A)(formData.deadlineDays)) {
      errors.deadlineDays = "The days after release is required.";
    } else if (!validateDeadlineDays(formData.deadlineDays)) {
      errors.deadlineDays = "Days after release must be a whole number of 1 or more.";
    }
    return errors;
  }
  if (!(0,validate_presence/* default */.A)(formData.minOsVersion)) {
    errors.minOsVersion = "The minimum version is required.";
  } else if (!validateMinVersion(formData.minOsVersion)) {
    errors.minOsVersion = "Minimum version must meet criteria below.";
  }
  if (!(0,validate_presence/* default */.A)(formData.deadline)) {
    errors.deadline = "The deadline is required.";
  } else if (!validateDeadline(formData.deadline)) {
    errors.deadline = "Deadline must meet criteria below.";
  }
  return errors;
};
const APPLE_PLATFORMS_TO_CONFIG_FIELDS = {
  darwin: "macos_updates",
  ios: "ios_updates",
  ipados: "ipados_updates"
};
const createAppleOSUpdatesData = (applePlatform, formData, updateNewHosts) => {
  const { target, minOsVersion, deadline, deadlineDays } = formData;
  let fields;
  switch (target) {
    case "latest":
      fields = {
        minimum_version: LATEST_VERSION,
        // A deadline can't coexist with "latest"; deadline_days replaces it.
        deadline: "",
        deadline_days: parseInt(deadlineDays, 10)
      };
      break;
    case "custom":
      fields = {
        minimum_version: minOsVersion,
        deadline,
        deadline_days: null
      };
      break;
    default:
      fields = { minimum_version: "", deadline: "", deadline_days: null };
  }
  return {
    mdm: {
      [APPLE_PLATFORMS_TO_CONFIG_FIELDS[applePlatform]]: __spreadValues(__spreadValues({}, fields), applePlatform === "darwin" ? { update_new_hosts: updateNewHosts } : {})
    }
  };
};
const AppleOSTargetForm = ({
  currentTeamId,
  applePlatform,
  defaultMinOsVersion,
  defaultDeadline,
  defaultDeadlineDays,
  defaultUpdateNewHosts,
  refetchAppConfig,
  refetchTeamConfig
}) => {
  var _a;
  const gitOpsModeEnabled = (_a = (0,react.useContext)(app/* AppContext */.BR).config) == null ? void 0 : _a.gitops.gitops_mode_enabled;
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const [target, setTarget] = (0,react.useState)(
    getTargetFromMinOsVersion(defaultMinOsVersion)
  );
  const [minOsVersion, setMinOsVersion] = (0,react.useState)(
    // The sentinel is a mode, not a version to show in the input.
    defaultMinOsVersion === LATEST_VERSION ? "" : defaultMinOsVersion
  );
  const [deadline, setDeadline] = (0,react.useState)(defaultDeadline);
  const [deadlineDays, setDeadlineDays] = (0,react.useState)(defaultDeadlineDays);
  const [minOsVersionError, setMinOsVersionError] = (0,react.useState)();
  const [updateNewHosts, setUpdateNewHosts] = (0,react.useState)(
    defaultUpdateNewHosts || false
  );
  const [deadlineError, setDeadlineError] = (0,react.useState)();
  const [deadlineDaysError, setDeadlineDaysError] = (0,react.useState)();
  const effectiveUpdateNewHosts = target === "latest" ? true : updateNewHosts;
  const handleSubmit = (e) => __async(null, null, function* () {
    e.preventDefault();
    const formData = { target, minOsVersion, deadline, deadlineDays };
    const errors = validateForm(formData);
    setMinOsVersionError(errors.minOsVersion);
    setDeadlineError(errors.deadline);
    setDeadlineDaysError(errors.deadlineDays);
    if ((0,lodash.isEmpty)(errors)) {
      setIsSaving(true);
      const updateData = createAppleOSUpdatesData(
        applePlatform,
        formData,
        effectiveUpdateNewHosts
      );
      try {
        currentTeamId === team/* APP_CONTEXT_NO_TEAM_ID */.Gl ? yield entities_config/* default */.A.update(updateData) : yield teams/* default */.A.update(updateData, currentTeamId);
        ToastNotification/* notify */.me.success("Successfully updated.");
        currentTeamId === team/* APP_CONTEXT_NO_TEAM_ID */.Gl ? refetchAppConfig() : refetchTeamConfig();
      } catch (err) {
        ToastNotification/* notify */.me.error(getErrorMessage(err), {
          response: err
        });
      } finally {
        setIsSaving(false);
      }
    }
  });
  const handleTargetChange = (option) => {
    if (!option) return;
    setTarget(option.value);
    setUpdateNewHosts(defaultUpdateNewHosts || false);
    setMinOsVersionError(void 0);
    setDeadlineError(void 0);
    setDeadlineDaysError(void 0);
  };
  const handleMinVersionChange = (val) => {
    setMinOsVersion(val);
  };
  const handleDeadlineChange = (val) => {
    setDeadline(val);
  };
  const getMinimumVersionTooltip = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Enrolled hosts are updated to exactly this version.");
  };
  return /* @__PURE__ */ react.createElement("form", { className: baseClass, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      name: "target",
      options: TARGET_OPTIONS,
      value: target,
      isDisabled: gitOpsModeEnabled,
      onChange: handleTargetChange,
      helpText: target === "latest" ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Based on host hardware.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          newTab: true,
          url: "https://fleetdm.com/learn-more-about/apple-available-os-updates"
        }
      )) : void 0
    }
  ), target === "custom" && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Minimum version",
      name: "minimum_version",
      disabled: gitOpsModeEnabled,
      tooltip: getMinimumVersionTooltip(),
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Use only versions", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "available from Apple.",
          newTab: true,
          url: "https://fleetdm.com/learn-more-about/apple-available-os-updates"
        }
      )),
      value: minOsVersion,
      error: minOsVersionError,
      onChange: handleMinVersionChange
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      disabled: gitOpsModeEnabled,
      name: "deadline",
      label: "Deadline",
      tooltip: "The end user can't dismiss the OS update once they reach this deadline. Deadline is 12:00 (Noon), the host's local time.",
      helpText: "YYYY-MM-DD format only (e.g., \u201C2024-07-01\u201D).",
      value: deadline,
      error: deadlineError,
      onChange: handleDeadlineChange
    }
  )), target === "latest" && /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      disabled: gitOpsModeEnabled,
      name: "deadline_days",
      label: "Days after release",
      helpText: "Whole number of days, 1 or more.",
      tooltip: "The number of days after Apple releases an update before hosts are required to install it.",
      value: deadlineDays,
      error: deadlineDaysError,
      onChange: setDeadlineDays
    }
  ), applePlatform === "darwin" && /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      name: "update_new_hosts",
      disabled: gitOpsModeEnabled || target === "latest",
      onChange: setUpdateNewHosts,
      value: effectiveUpdateNewHosts,
      className: `${baseClass}__checkbox`,
      labelTooltipContent: target === "latest" ? "During automated enrollment (ADE), all hosts will be updated to latest macOS version." : "During automated enrollment (ADE), hosts below the minimum version are updated to the latest version. If a minimum version isn't set, all hosts are updated to the latest version."
    },
    "Update new hosts to latest"
  ), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "right",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          type: "submit",
          isLoading: isSaving
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var AppleOSTargetForm_AppleOSTargetForm = (AppleOSTargetForm);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/AppleOSTargetForm/index.ts



// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
;// ./assets/images/ios-updates-preview.png
var ios_updates_preview_namespaceObject = __webpack_require__.p + "ios-updates-preview@5b66bd222687595c6525.png";
;// ./assets/images/ipados-updates-preview.png
var ipados_updates_preview_namespaceObject = __webpack_require__.p + "ipados-updates-preview@2d927884232186594c52.png";
;// ./assets/images/macos-updates-preview.png
var macos_updates_preview_namespaceObject = __webpack_require__.p + "macos-updates-preview@db0440503a0d97c1a8c4.png";
;// ./assets/images/windows-nudge-screenshot.png
var windows_nudge_screenshot_namespaceObject = __webpack_require__.p + "windows-nudge-screenshot@8a60391979ba3faa3baf.png";
;// ./frontend/pages/ManageControlsPage/OSUpdates/components/EndUserOSRequirementPreview/EndUserOSRequirementPreview.tsx








const EndUserOSRequirementPreview_baseClass = "os-requirement-preview";
const OSRequirementDescription = ({
  platform
}) => {
  switch (platform) {
    case "darwin":
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h3", null, "End user experience"), /* @__PURE__ */ react.createElement("p", null, "When a minimum version is enforced, end users see a native macOS notification (DDM) once per day."), /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          url: "https://fleetdm.com/learn-more-about/os-updates",
          newTab: true
        }
      ));
    case "windows":
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h3", null, "End user experience"), /* @__PURE__ */ react.createElement("p", null, "When a Windows host becomes aware of a new update, end users are able to defer restarts. Automatic restarts happen before 8am and after 5pm (end user's local time). After the deadline, restarts are forced regardless of active hours."), /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more about Windows updates in Fleet",
          url: "https://fleetdm.com/learn-more-about/os-updates",
          newTab: true
        }
      ));
    case "ios":
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h3", null, "End user experience"));
    case "ipados":
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h3", null, "End user experience"));
    default:
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
  }
};
const OSRequirementImage = ({
  platform
}) => {
  const getScreenshot = () => {
    switch (platform) {
      case "darwin":
        return macos_updates_preview_namespaceObject;
      case "windows":
        return windows_nudge_screenshot_namespaceObject;
      case "ios":
        return ios_updates_preview_namespaceObject;
      case "ipados":
        return ipados_updates_preview_namespaceObject;
      default:
        return macos_updates_preview_namespaceObject;
    }
  };
  return /* @__PURE__ */ react.createElement(
    "img",
    {
      className: `${EndUserOSRequirementPreview_baseClass}__preview-img`,
      src: getScreenshot(),
      alt: "OS update preview screenshot"
    }
  );
};
const EndUserOSRequirementPreview = ({
  platform
}) => {
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { color: "grey", paddingSize: "xxlarge", className: EndUserOSRequirementPreview_baseClass }, /* @__PURE__ */ react.createElement(OSRequirementDescription, { platform }), /* @__PURE__ */ react.createElement(OSRequirementImage, { platform }));
};
/* harmony default export */ var EndUserOSRequirementPreview_EndUserOSRequirementPreview = (EndUserOSRequirementPreview);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/EndUserOSRequirementPreview/index.ts



;// ./frontend/pages/ManageControlsPage/OSUpdates/components/WindowsTargetForm/helpers.tsx

const helpers_getErrorMessage = (err) => {
  var _a, _b, _c;
  const originalReason = (_c = (_b = (_a = err == null ? void 0 : err.data) == null ? void 0 : _a.errors) == null ? void 0 : _b[0]) == null ? void 0 : _c.reason;
  const apiReason = originalReason == null ? void 0 : originalReason.toLowerCase();
  if (apiReason == null ? void 0 : apiReason.includes("couldn't update os updates settings")) {
    return originalReason;
  }
  return "Couldn\u2019t update. Please try again.";
};

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/WindowsTargetForm/WindowsTargetForm.tsx

var WindowsTargetForm_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var WindowsTargetForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var WindowsTargetForm_hasOwnProp = Object.prototype.hasOwnProperty;
var WindowsTargetForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var WindowsTargetForm_defNormalProp = (obj, key, value) => key in obj ? WindowsTargetForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var WindowsTargetForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (WindowsTargetForm_hasOwnProp.call(b, prop))
      WindowsTargetForm_defNormalProp(a, prop, b[prop]);
  if (WindowsTargetForm_getOwnPropSymbols)
    for (var prop of WindowsTargetForm_getOwnPropSymbols(b)) {
      if (WindowsTargetForm_propIsEnum.call(b, prop))
        WindowsTargetForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var WindowsTargetForm_async = (__this, __arguments, generator) => {
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











const WindowsTargetForm_baseClass = "windows-target-form";
const WindowsTargetForm_validateDeadlineDays = (value) => {
  if (value === "") return false;
  const parsedValue = Number(value);
  return Number.isInteger(parsedValue) && parsedValue >= 0 && parsedValue <= 30;
};
const validateGracePeriodDays = (value) => {
  if (value === "") return false;
  const parsedValue = Number(value);
  return Number.isInteger(parsedValue) && parsedValue >= 0 && parsedValue <= 7;
};
const WindowsTargetForm_validateForm = (formData) => {
  const errors = {};
  const deadlineEmpty = formData.deadlineDays.trim() === "";
  const graceEmpty = formData.gracePeriodDays.trim() === "";
  if (deadlineEmpty && graceEmpty) {
    return errors;
  }
  if (!deadlineEmpty && !WindowsTargetForm_validateDeadlineDays(formData.deadlineDays)) {
    errors.deadlineDays = "Deadline must meet criteria below.";
  }
  if (deadlineEmpty && !graceEmpty) {
    errors.gracePeriodDays = "Grace period must be empty if no deadline is set.";
  } else if (!deadlineEmpty && graceEmpty) {
    errors.gracePeriodDays = "The grace period days is required.";
  } else if (!validateGracePeriodDays(formData.gracePeriodDays)) {
    errors.gracePeriodDays = "Grace period must meet criteria below.";
  }
  return errors;
};
const createMdmConfigData = (deadlineDays, gracePeriodDays) => {
  return {
    mdm: {
      windows_updates: {
        deadline_days: deadlineDays.trim() === "" ? null : parseInt(deadlineDays, 10),
        grace_period_days: gracePeriodDays.trim() === "" ? null : parseInt(gracePeriodDays, 10)
      }
    }
  };
};
const WindowsTargetForm = ({
  currentTeamId,
  defaultDeadlineDays,
  defaultGracePeriodDays,
  refetchAppConfig,
  refetchTeamConfig
}) => {
  var _a;
  const gitOpsModeEnabled = (_a = (0,react.useContext)(app/* AppContext */.BR).config) == null ? void 0 : _a.gitops.gitops_mode_enabled;
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    deadlineDays: defaultDeadlineDays.toString(),
    gracePeriodDays: defaultGracePeriodDays.toString()
  });
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const handleSubmit = (e) => WindowsTargetForm_async(null, null, function* () {
    e.preventDefault();
    const errors = WindowsTargetForm_validateForm(formData);
    if (!(0,lodash.isEmpty)(errors)) {
      setFormErrors(errors);
      return;
    }
    setIsSaving(true);
    const updateData = createMdmConfigData(
      formData.deadlineDays,
      formData.gracePeriodDays
    );
    try {
      currentTeamId === team/* APP_CONTEXT_NO_TEAM_ID */.Gl ? yield entities_config/* default */.A.update(updateData) : yield teams/* default */.A.update(updateData, currentTeamId);
      ToastNotification/* notify */.me.success("Successfully updated Windows OS update options.");
    } catch (err) {
      ToastNotification/* notify */.me.error(helpers_getErrorMessage(err), {
        response: err
      });
    } finally {
      currentTeamId === team/* APP_CONTEXT_NO_TEAM_ID */.Gl ? refetchAppConfig() : refetchTeamConfig();
      setIsSaving(false);
    }
  });
  const handleChange = (field) => (val) => {
    const newFormData = __spreadProps(WindowsTargetForm_spreadValues({}, formData), { [field]: val });
    setFormData(newFormData);
    const newErrors = WindowsTargetForm_validateForm(newFormData);
    const updatedErrors = {};
    Object.keys(formErrors).forEach((key) => {
      const k = key;
      if (newErrors[k]) {
        updatedErrors[k] = newErrors[k];
      }
    });
    setFormErrors(updatedErrors);
  };
  const handleBlur = () => {
    setFormErrors(WindowsTargetForm_validateForm(formData));
  };
  return /* @__PURE__ */ react.createElement("form", { className: WindowsTargetForm_baseClass, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      disabled: gitOpsModeEnabled,
      label: "Days after release",
      tooltip: "Number of days the end user has before updates are installed and the host is forced to restart.",
      helpText: "Number of days from 0 to 30.",
      value: formData.deadlineDays,
      error: formErrors.deadlineDays,
      onChange: handleChange("deadlineDays"),
      onBlur: handleBlur
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      disabled: gitOpsModeEnabled,
      label: "Grace period",
      tooltip: "Number of days after the deadline the end user has before the host is forced to restart (only if end user was offline when deadline passed).",
      helpText: "Number of days from 0 to 7.",
      value: formData.gracePeriodDays,
      error: formErrors.gracePeriodDays,
      onChange: handleChange("gracePeriodDays"),
      onBlur: handleBlur
    }
  ), " ", /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "right",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          type: "submit",
          isLoading: isSaving
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var WindowsTargetForm_WindowsTargetForm = (WindowsTargetForm);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/WindowsTargetForm/index.ts



;// ./frontend/pages/ManageControlsPage/OSUpdates/components/PlatformTabs/PlatformTabs.tsx










const PlatformTabs_baseClass = "platform-tabs";
const PlatformTabs = ({
  currentTeamId,
  defaultMacOSDeadline,
  defaultMacOSDeadlineDays,
  defaultMacOSVersion,
  defaultMacOSUpdateNewHosts,
  defaultIOSDeadline,
  defaultIOSDeadlineDays,
  defaultIOSVersion,
  defaultIPadOSDeadline,
  defaultIPadOSDeadlineDays,
  defaultIPadOSVersion,
  defaultWindowsDeadlineDays,
  defaultWindowsGracePeriodDays,
  selectedPlatform,
  onSelectPlatform,
  refetchAppConfig,
  refetchTeamConfig,
  isWindowsMdmEnabled,
  isAndroidMdmEnabled
}) => {
  const platformByIndex = isWindowsMdmEnabled ? ["darwin", "windows", "ios", "ipados"] : ["darwin", "ios", "ipados"];
  if (isAndroidMdmEnabled) {
    platformByIndex.push("android");
  }
  const onTabChange = (index) => {
    onSelectPlatform(platformByIndex[index]);
  };
  const isMacOSConfigured = !!defaultMacOSVersion;
  const isWindowsConfigured = !!defaultWindowsDeadlineDays;
  const isIOSConfigured = !!defaultIOSVersion;
  const isIPadOSConfigured = !!defaultIPadOSVersion;
  return /* @__PURE__ */ react.createElement("div", { className: PlatformTabs_baseClass }, /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(
    esm/* Tabs */.tU,
    {
      defaultIndex: platformByIndex.indexOf(selectedPlatform),
      onSelect: onTabChange
    },
    /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: "macOS", "data-text": "macOS" }, /* @__PURE__ */ react.createElement(TabText/* default */.A, { showCheck: isMacOSConfigured }, "macOS")), isWindowsMdmEnabled && /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: "Windows", "data-text": "Windows" }, /* @__PURE__ */ react.createElement(TabText/* default */.A, { showCheck: isWindowsConfigured }, "Windows")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: "iOS", "data-text": "iOS" }, /* @__PURE__ */ react.createElement(TabText/* default */.A, { showCheck: isIOSConfigured }, "iOS")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: "iPadOS", "data-text": "iPadOS" }, /* @__PURE__ */ react.createElement(TabText/* default */.A, { showCheck: isIPadOSConfigured }, "iPadOS")), isAndroidMdmEnabled && /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { key: "Android", "data-text": "Android" }, "Android")),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${PlatformTabs_baseClass}__tab-panel` }, /* @__PURE__ */ react.createElement(
      AppleOSTargetForm_AppleOSTargetForm,
      {
        currentTeamId,
        applePlatform: "darwin",
        defaultMinOsVersion: defaultMacOSVersion,
        defaultDeadline: defaultMacOSDeadline,
        defaultDeadlineDays: defaultMacOSDeadlineDays,
        defaultUpdateNewHosts: defaultMacOSUpdateNewHosts,
        key: currentTeamId,
        refetchAppConfig,
        refetchTeamConfig
      }
    ), /* @__PURE__ */ react.createElement("div", { className: `${PlatformTabs_baseClass}__nudge-preview` }, /* @__PURE__ */ react.createElement(
      EndUserOSRequirementPreview_EndUserOSRequirementPreview,
      {
        platform: selectedPlatform
      }
    ))),
    isWindowsMdmEnabled && /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${PlatformTabs_baseClass}__tab-panel` }, /* @__PURE__ */ react.createElement(
      WindowsTargetForm_WindowsTargetForm,
      {
        currentTeamId,
        defaultDeadlineDays: defaultWindowsDeadlineDays,
        defaultGracePeriodDays: defaultWindowsGracePeriodDays,
        key: currentTeamId,
        refetchAppConfig,
        refetchTeamConfig
      }
    ), /* @__PURE__ */ react.createElement("div", { className: `${PlatformTabs_baseClass}__nudge-preview` }, /* @__PURE__ */ react.createElement(
      EndUserOSRequirementPreview_EndUserOSRequirementPreview,
      {
        platform: selectedPlatform
      }
    ))),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${PlatformTabs_baseClass}__tab-panel` }, /* @__PURE__ */ react.createElement(
      AppleOSTargetForm_AppleOSTargetForm,
      {
        currentTeamId,
        applePlatform: "ios",
        defaultMinOsVersion: defaultIOSVersion,
        defaultDeadline: defaultIOSDeadline,
        defaultDeadlineDays: defaultIOSDeadlineDays,
        key: currentTeamId,
        refetchAppConfig,
        refetchTeamConfig
      }
    ), /* @__PURE__ */ react.createElement("div", { className: `${PlatformTabs_baseClass}__nudge-preview` }, /* @__PURE__ */ react.createElement(
      EndUserOSRequirementPreview_EndUserOSRequirementPreview,
      {
        platform: selectedPlatform
      }
    ))),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${PlatformTabs_baseClass}__tab-panel` }, /* @__PURE__ */ react.createElement(
      AppleOSTargetForm_AppleOSTargetForm,
      {
        currentTeamId,
        applePlatform: "ipados",
        defaultMinOsVersion: defaultIPadOSVersion,
        defaultDeadline: defaultIPadOSDeadline,
        defaultDeadlineDays: defaultIPadOSDeadlineDays,
        key: currentTeamId,
        refetchAppConfig,
        refetchTeamConfig
      }
    ), /* @__PURE__ */ react.createElement("div", { className: `${PlatformTabs_baseClass}__nudge-preview` }, /* @__PURE__ */ react.createElement(
      EndUserOSRequirementPreview_EndUserOSRequirementPreview,
      {
        platform: selectedPlatform
      }
    ))),
    isAndroidMdmEnabled && /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${PlatformTabs_baseClass}__tab-panel` }, /* @__PURE__ */ react.createElement("div", { className: `${PlatformTabs_baseClass}__coming-soon` }, /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("b", null, "Android updates are coming soon.")), /* @__PURE__ */ react.createElement("p", null, "Need to encourage installation of Android updates?", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: constants/* SUPPORT_LINK */.FI, text: "Let us know", newTab: true }))))
  )));
};
/* harmony default export */ var PlatformTabs_PlatformTabs = (PlatformTabs);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/PlatformTabs/index.ts



;// ./frontend/pages/ManageControlsPage/OSUpdates/components/TargetSection/TargetSection.tsx






const TargetSection_baseClass = "os-updates-target-section";
const getDefaultUpdateNewHosts = ({
  osType,
  currentTeamId,
  appConfig,
  teamConfig
}) => {
  const mdmData = currentTeamId === team/* API_NO_TEAM_ID */.Rp ? appConfig == null ? void 0 : appConfig.mdm : teamConfig == null ? void 0 : teamConfig.mdm;
  switch (osType) {
    case "darwin":
      return !!(mdmData == null ? void 0 : mdmData.macos_updates.update_new_hosts);
    case "ios":
      return !!(mdmData == null ? void 0 : mdmData.ios_updates.update_new_hosts);
    case "ipados":
      return !!(mdmData == null ? void 0 : mdmData.ipados_updates.update_new_hosts);
    default:
      return false;
  }
};
const getDefaultAppleDeadlineDays = ({
  osType,
  currentTeamId,
  appConfig,
  teamConfig
}) => {
  var _a, _b, _c, _d, _e, _f;
  const mdmData = currentTeamId === team/* API_NO_TEAM_ID */.Rp ? appConfig == null ? void 0 : appConfig.mdm : teamConfig == null ? void 0 : teamConfig.mdm;
  switch (osType) {
    case "darwin":
      return (_b = (_a = mdmData == null ? void 0 : mdmData.macos_updates.deadline_days) == null ? void 0 : _a.toString()) != null ? _b : "";
    case "ios":
      return (_d = (_c = mdmData == null ? void 0 : mdmData.ios_updates.deadline_days) == null ? void 0 : _c.toString()) != null ? _d : "";
    case "ipados":
      return (_f = (_e = mdmData == null ? void 0 : mdmData.ipados_updates.deadline_days) == null ? void 0 : _e.toString()) != null ? _f : "";
    default:
      return "";
  }
};
const getDefaultOSVersion = ({
  osType,
  currentTeamId,
  appConfig,
  teamConfig
}) => {
  var _a, _b, _c;
  const mdmData = currentTeamId === team/* API_NO_TEAM_ID */.Rp ? appConfig == null ? void 0 : appConfig.mdm : teamConfig == null ? void 0 : teamConfig.mdm;
  switch (osType) {
    case "darwin":
      return (_a = mdmData == null ? void 0 : mdmData.macos_updates.minimum_version) != null ? _a : "";
    case "ios":
      return (_b = mdmData == null ? void 0 : mdmData.ios_updates.minimum_version) != null ? _b : "";
    case "ipados":
      return (_c = mdmData == null ? void 0 : mdmData.ipados_updates.minimum_version) != null ? _c : "";
    default:
      return "";
  }
};
const getDefaultDeadline = ({
  osType,
  currentTeamId,
  appConfig,
  teamConfig
}) => {
  var _a, _b, _c;
  const mdmData = currentTeamId === team/* API_NO_TEAM_ID */.Rp ? appConfig == null ? void 0 : appConfig.mdm : teamConfig == null ? void 0 : teamConfig.mdm;
  switch (osType) {
    case "darwin":
      return (_a = mdmData == null ? void 0 : mdmData.macos_updates.deadline) != null ? _a : "";
    case "ios":
      return (_b = mdmData == null ? void 0 : mdmData.ios_updates.deadline) != null ? _b : "";
    case "ipados":
      return (_c = mdmData == null ? void 0 : mdmData.ipados_updates.deadline) != null ? _c : "";
    default:
      return "";
  }
};
const getDefaultWindowsDeadlineDays = ({
  currentTeamId,
  appConfig,
  teamConfig
}) => {
  var _a, _b, _c, _d, _e;
  return currentTeamId === team/* API_NO_TEAM_ID */.Rp ? (_b = (_a = appConfig.mdm.windows_updates.deadline_days) == null ? void 0 : _a.toString()) != null ? _b : "" : (_e = (_d = (_c = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _c.windows_updates.deadline_days) == null ? void 0 : _d.toString()) != null ? _e : "";
};
const getDefaultWindowsGracePeriodDays = ({
  currentTeamId,
  appConfig,
  teamConfig
}) => {
  var _a, _b, _c, _d, _e;
  return currentTeamId === team/* API_NO_TEAM_ID */.Rp ? (_b = (_a = appConfig.mdm.windows_updates.grace_period_days) == null ? void 0 : _a.toString()) != null ? _b : "" : (_e = (_d = (_c = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _c.windows_updates.grace_period_days) == null ? void 0 : _d.toString()) != null ? _e : "";
};
const TargetSection = ({
  appConfig,
  currentTeamId,
  isFetching,
  selectedPlatform,
  teamConfig,
  onSelectPlatform,
  refetchAppConfig,
  refetchTeamConfig
}) => {
  if (isFetching) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  const isAndroidMdmEnabled = appConfig.mdm.android_enabled_and_configured;
  const isAppleMdmEnabled = appConfig.mdm.enabled_and_configured;
  const isWindowsMdmEnabled = appConfig.mdm.windows_enabled_and_configured;
  const defaultMacOSVersion = getDefaultOSVersion({
    osType: "darwin",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultMacOSDeadline = getDefaultDeadline({
    osType: "darwin",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultIOSVersion = getDefaultOSVersion({
    osType: "ios",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultIOSDeadline = getDefaultDeadline({
    osType: "ios",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultIPadOSOSVersion = getDefaultOSVersion({
    osType: "ipados",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultIPadOSDeadline = getDefaultDeadline({
    osType: "ipados",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultMacOSDeadlineDays = getDefaultAppleDeadlineDays({
    osType: "darwin",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultIOSDeadlineDays = getDefaultAppleDeadlineDays({
    osType: "ios",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultIPadOSDeadlineDays = getDefaultAppleDeadlineDays({
    osType: "ipados",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultMacOSUpdateNewHosts = getDefaultUpdateNewHosts({
    osType: "darwin",
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultWindowsDeadlineDays = getDefaultWindowsDeadlineDays({
    currentTeamId,
    appConfig,
    teamConfig
  });
  const defaultWindowsGracePeriodDays = getDefaultWindowsGracePeriodDays({
    currentTeamId,
    appConfig,
    teamConfig
  });
  const renderTargetForms = () => {
    if (isWindowsMdmEnabled && !isAppleMdmEnabled && !isAndroidMdmEnabled) {
      return /* @__PURE__ */ react.createElement(
        WindowsTargetForm_WindowsTargetForm,
        {
          currentTeamId,
          defaultDeadlineDays: defaultWindowsDeadlineDays,
          defaultGracePeriodDays: defaultWindowsGracePeriodDays,
          refetchAppConfig,
          refetchTeamConfig
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      PlatformTabs_PlatformTabs,
      {
        currentTeamId,
        defaultMacOSVersion,
        defaultMacOSDeadline,
        defaultMacOSDeadlineDays,
        defaultIOSVersion,
        defaultIOSDeadline,
        defaultIOSDeadlineDays,
        defaultIPadOSVersion: defaultIPadOSOSVersion,
        defaultIPadOSDeadline,
        defaultIPadOSDeadlineDays,
        defaultWindowsDeadlineDays,
        defaultWindowsGracePeriodDays,
        defaultMacOSUpdateNewHosts,
        selectedPlatform,
        onSelectPlatform,
        refetchAppConfig,
        refetchTeamConfig,
        isWindowsMdmEnabled,
        isAndroidMdmEnabled
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: TargetSection_baseClass }, renderTargetForms());
};
/* harmony default export */ var TargetSection_TargetSection = (TargetSection);

;// ./frontend/pages/ManageControlsPage/OSUpdates/components/TargetSection/index.ts



;// ./frontend/pages/ManageControlsPage/OSUpdates/OSUpdates.tsx
















const OSUpdates_baseClass = "os-updates";
const getDefaultSelectedPlatform = (appConfig) => {
  if (appConfig === null) return "darwin";
  return appConfig.mdm.enabled_and_configured ? "darwin" : "windows";
};
const OSUpdates = ({ router, teamIdForApi, queryParams }) => {
  const {
    isPremiumTier,
    isGlobalAdmin,
    isTeamAdmin,
    config,
    setConfig
  } = (0,react.useContext)(app/* AppContext */.BR);
  const [
    selectedPlatformTab,
    setSelectedPlatformTab
  ] = (0,react.useState)(null);
  const {
    isFetching: isFetchingConfig,
    isLoading: isLoadingConfig,
    refetch: refetchAppConfig
  } = (0,es.useQuery)(["config"], () => entities_config/* default */.A.loadAll(), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => setConfig(data),
    // update the app context with the refetched config
    enabled: false
    // this is disabled as the config is already fetched in App.tsx
  });
  const {
    data: teamConfig,
    isFetching: isFetchingTeamConfig,
    isLoading: isLoadingTeam,
    refetch: refetchTeamConfig
  } = (0,es.useQuery)(
    ["team-config", teamIdForApi],
    () => teams/* default */.A.load(teamIdForApi),
    {
      refetchOnWindowFocus: false,
      enabled: !!teamIdForApi,
      select: (data) => data.team
    }
  );
  if (!isPremiumTier) {
    return /* @__PURE__ */ react.createElement(
      PremiumFeatureMessage/* default */.A,
      {
        className: `${OSUpdates_baseClass}__premium-feature-message`
      }
    );
  }
  if (isLoadingConfig || isLoadingTeam || isFetchingTeamConfig) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (!isGlobalAdmin && !isTeamAdmin) {
    router.replace(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.CONTROLS_OS_SETTINGS, {
        fleet_id: teamIdForApi
      })
    );
  }
  if (!(config == null ? void 0 : config.mdm.enabled_and_configured) && !(config == null ? void 0 : config.mdm.windows_enabled_and_configured)) {
    return /* @__PURE__ */ react.createElement("div", { className: OSUpdates_baseClass }, /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        header: "Additional configuration required",
        info: "Apple or Windows MDM must be turned on to change settings on your hosts.",
        primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Go to MDM settings")
      }
    ));
  }
  const selectedPlatform = selectedPlatformTab || getDefaultSelectedPlatform(config);
  return /* @__PURE__ */ react.createElement("div", { className: OSUpdates_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "tab-panel",
      content: "Remotely enforce software updates."
    }
  ), /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${OSUpdates_baseClass}__current-version-container` }, /* @__PURE__ */ react.createElement(
    CurrentVersionSection/* default */.A,
    {
      router,
      currentTeamId: teamIdForApi,
      queryParams
    }
  )), /* @__PURE__ */ react.createElement("div", { className: `${OSUpdates_baseClass}__target-container` }, /* @__PURE__ */ react.createElement(
    SectionHeader/* default */.A,
    {
      title: "Target",
      wrapperCustomClass: `${OSUpdates_baseClass}__header`
    }
  ), /* @__PURE__ */ react.createElement(
    TargetSection_TargetSection,
    {
      key: teamIdForApi,
      appConfig: config,
      currentTeamId: teamIdForApi,
      isFetching: isFetchingConfig || isFetchingTeamConfig,
      selectedPlatform,
      teamConfig,
      onSelectPlatform: setSelectedPlatformTab,
      refetchAppConfig,
      refetchTeamConfig
    }
  ))));
};
/* harmony default export */ var OSUpdates_OSUpdates = (OSUpdates);

;// ./frontend/pages/ManageControlsPage/OSUpdates/index.ts




/***/ }),

/***/ 48162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ScriptBatchDetailsPage_ScriptBatchDetailsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/ActionButtons/ActionButtons.tsx + 5 modules
var ActionButtons = __webpack_require__(93837);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/interfaces/script.ts
var script = __webpack_require__(24063);
// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/ActivityFeed/components/RunScriptDetailsModal/index.ts
var RunScriptDetailsModal = __webpack_require__(92361);
// EXTERNAL MODULE: ./frontend/pages/hosts/components/ScriptDetailsModal/index.ts + 1 modules
var ScriptDetailsModal = __webpack_require__(90886);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/scripts.ts
var scripts = __webpack_require__(87844);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/ManageControlsPage/Scripts/components/CancelScriptBatchModal/CancelScriptBatchModal.tsx




const baseClass = "cancel-script-batch-modal";
const CancelScriptBatchModal = ({
  onSubmit,
  onExit,
  scriptName,
  isCanceling
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Cancel script?",
      onExit,
      onEnter: onSubmit,
      className: baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__content` }, /* @__PURE__ */ react.createElement("p", null, "This will cancel any pending script runs for", " ", scriptName ? /* @__PURE__ */ react.createElement("b", null, scriptName) : "this batch", "."), /* @__PURE__ */ react.createElement("p", null, "If this script is currently running on a host, it will complete, but results won\u2019t appear in Fleet."), /* @__PURE__ */ react.createElement("p", null, "You cannot undo this action."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        isLoading: isCanceling,
        disabled: isCanceling,
        onClick: onSubmit,
        variant: "alert"
      },
      "Cancel script"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Back")))
  );
};
/* harmony default export */ var CancelScriptBatchModal_CancelScriptBatchModal = (CancelScriptBatchModal);

;// ./frontend/pages/ManageControlsPage/Scripts/components/CancelScriptBatchModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/ManageControlsPage/Scripts/helpers.tsx
var helpers = __webpack_require__(7681);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
;// ./frontend/pages/ManageControlsPage/Scripts/ScriptBatchDetailsPage/components/ScriptBatchHostsTable/ScriptBatchHostsTableConfig.tsx

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









const ScriptOutputCell = (cellProps) => {
  return /* @__PURE__ */ react.createElement("span", { className: "script-output-cell" }, /* @__PURE__ */ react.createElement(
    TooltipTruncatedText/* default */.A,
    {
      value: cellProps.row.original.script_output_preview
    }
  ), /* @__PURE__ */ react.createElement(
    ViewAllHostsLink/* default */.A,
    {
      customText: "View script details",
      rowHover: true,
      noLink: true,
      responsive: true
    }
  ));
};
const generateColumnConfigs = (hostStatus) => {
  let columns = [
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Host name",
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "display_name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement("span", { className: "host-name-cell" }, /* @__PURE__ */ react.createElement(
        LinkCell/* default */.A,
        {
          value: cellProps.row.original.display_name,
          path: paths/* default */.A.HOST_DETAILS(cellProps.row.original.id),
          customOnClick: (e) => {
            e.stopPropagation();
          }
        }
      ), script/* SCRIPT_BATCH_HOST_NOT_EXECUTED_STATUSES */.rh.includes(hostStatus) && /* @__PURE__ */ react.createElement(
        ViewAllHostsLink/* default */.A,
        {
          customText: "View host details",
          rowHover: true,
          noLink: true,
          responsive: true
        }
      ))
    }
  ];
  if (script/* SCRIPT_BATCH_HOST_EXECUTED_STATUSES */.fe.includes(hostStatus)) {
    columns = columns.concat([
      {
        Header: (cellProps) => /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: "Time",
            disableSortBy: false,
            isSortedDesc: cellProps.column.isSortedDesc
          }
        ),
        accessor: "script_executed_at",
        Cell: (cellProps) => {
          var _a;
          return /* @__PURE__ */ react.createElement(
            TextCell/* default */.A,
            {
              value: /* @__PURE__ */ react.createElement(
                HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T,
                {
                  timeString: (_a = cellProps.row.original.script_executed_at) != null ? _a : ""
                }
              )
            }
          );
        }
      },
      {
        Header: "Script output",
        disableSortBy: true,
        accessor: "script_output_preview",
        Cell: (cellProps) => /* @__PURE__ */ react.createElement(ScriptOutputCell, __spreadValues({}, cellProps))
      }
    ]);
  }
  return columns;
};
/* harmony default export */ var ScriptBatchHostsTableConfig = (generateColumnConfigs);

;// ./frontend/pages/ManageControlsPage/Scripts/ScriptBatchDetailsPage/components/ScriptBatchHostsTable/ScriptBatchHostsTable.tsx

var ScriptBatchHostsTable_defProp = Object.defineProperty;
var ScriptBatchHostsTable_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ScriptBatchHostsTable_hasOwnProp = Object.prototype.hasOwnProperty;
var ScriptBatchHostsTable_propIsEnum = Object.prototype.propertyIsEnumerable;
var ScriptBatchHostsTable_defNormalProp = (obj, key, value) => key in obj ? ScriptBatchHostsTable_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ScriptBatchHostsTable_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ScriptBatchHostsTable_hasOwnProp.call(b, prop))
      ScriptBatchHostsTable_defNormalProp(a, prop, b[prop]);
  if (ScriptBatchHostsTable_getOwnPropSymbols)
    for (var prop of ScriptBatchHostsTable_getOwnPropSymbols(b)) {
      if (ScriptBatchHostsTable_propIsEnum.call(b, prop))
        ScriptBatchHostsTable_defNormalProp(a, prop, b[prop]);
    }
  return a;
};










const DEFAULT_SORT_DIRECTION = "asc";
const DEFAULT_PAGE_SIZE = 20;
const DEFAULT_SORT_COLUMN = "display_name";
const ScriptBatchHostsTable_baseClass = "script-batch-hosts-table";
const ScriptBatchHostsTable = ({
  batchExecutionId,
  selectedHostStatus,
  page,
  orderDirection,
  orderKey,
  setHostScriptExecutionIdForModal,
  router,
  onDataLoaded
}) => {
  var _a;
  const perPage = DEFAULT_PAGE_SIZE;
  const { data: hostResults, isLoading, error } = (0,es.useQuery)(
    [
      {
        scope: "script_batch_host_results",
        batch_execution_id: batchExecutionId,
        status: selectedHostStatus,
        page,
        per_page: perPage,
        order_direction: orderDirection,
        order_key: orderKey
      }
    ],
    ({ queryKey }) => scripts/* default */.A.getScriptBatchHostResults(queryKey[0]),
    ScriptBatchHostsTable_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  const handleRowClick = (0,react.useCallback)(
    (row) => {
      if (script/* SCRIPT_BATCH_HOST_EXECUTED_STATUSES */.fe.includes(selectedHostStatus)) {
        setHostScriptExecutionIdForModal(row.original.script_execution_id);
      } else {
        router.push(paths/* default */.A.HOST_DETAILS(row.original.id));
      }
    },
    [router, selectedHostStatus, setHostScriptExecutionIdForModal]
  );
  const handleQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const {
        pageIndex: newPageIndex,
        sortDirection: newOrderDirection,
        sortHeader: newOrderKey
      } = newTableQuery;
      const newQueryParams = {};
      newQueryParams.status = selectedHostStatus;
      newQueryParams.order_key = newOrderKey;
      newQueryParams.order_direction = newOrderDirection;
      newQueryParams.page = newPageIndex.toString();
      if (newOrderKey !== orderKey || newOrderDirection !== orderDirection) {
        newQueryParams.page = "0";
      }
      const path = (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.CONTROLS_SCRIPTS_BATCH_DETAILS(batchExecutionId),
        queryParams: newQueryParams
      });
      router.replace(path);
    },
    [selectedHostStatus, orderKey, orderDirection, batchExecutionId, router]
  );
  (0,react.useEffect)(() => {
    if (hostResults && onDataLoaded) {
      onDataLoaded(hostResults.count);
    }
  }, [hostResults, onDataLoaded]);
  if (error) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { description: "Could not load host results." });
  }
  const columnConfigs = ScriptBatchHostsTableConfig(selectedHostStatus);
  return /* @__PURE__ */ react.createElement("div", { className: ScriptBatchHostsTable_baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs,
      data: (_a = hostResults == null ? void 0 : hostResults.hosts) != null ? _a : [],
      isLoading,
      defaultSortHeader: orderKey || DEFAULT_SORT_COLUMN,
      defaultSortDirection: orderDirection || DEFAULT_SORT_DIRECTION,
      pageIndex: page,
      pageSize: perPage,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      manualSortBy: true,
      disableTableHeader: true,
      emptyComponent: () => /* @__PURE__ */ react.createElement(react.Fragment, null),
      disableMultiRowSelect: true,
      searchable: false,
      onClickRow: handleRowClick,
      onQueryChange: handleQueryChange
    }
  ));
};
/* harmony default export */ var ScriptBatchHostsTable_ScriptBatchHostsTable = (ScriptBatchHostsTable);

;// ./frontend/pages/ManageControlsPage/Scripts/ScriptBatchDetailsPage/components/ScriptBatchHostsTable/index.ts



;// ./frontend/pages/ManageControlsPage/Scripts/ScriptBatchDetailsPage/ScriptBatchDetailsPage.tsx

var ScriptBatchDetailsPage_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ScriptBatchDetailsPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ScriptBatchDetailsPage_hasOwnProp = Object.prototype.hasOwnProperty;
var ScriptBatchDetailsPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var ScriptBatchDetailsPage_defNormalProp = (obj, key, value) => key in obj ? ScriptBatchDetailsPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ScriptBatchDetailsPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ScriptBatchDetailsPage_hasOwnProp.call(b, prop))
      ScriptBatchDetailsPage_defNormalProp(a, prop, b[prop]);
  if (ScriptBatchDetailsPage_getOwnPropSymbols)
    for (var prop of ScriptBatchDetailsPage_getOwnPropSymbols(b)) {
      if (ScriptBatchDetailsPage_propIsEnum.call(b, prop))
        ScriptBatchDetailsPage_defNormalProp(a, prop, b[prop]);
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

























const ScriptBatchDetailsPage_baseClass = "script-batch-details-page";
const EMPTY_STATE_DETAILS = {
  ran: "Hosts with successful script results appear here.",
  errored: "Hosts with error results appear here. ",
  pending: "Compatible hosts that haven't run the script appear here.",
  incompatible: "Targeted hosts with incompatible operating systems appear here.",
  canceled: "Hosts where this script run was cancelled appear here."
};
const getEmptyState = (status) => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      variant: "list",
      header: "No hosts with this status",
      info: EMPTY_STATE_DETAILS[status]
    }
  );
};
const HOSTS_STATUS_BY_INDEX = [
  "ran",
  "errored",
  "pending",
  "incompatible",
  "canceled"
];
const ScriptBatchDetailsPage = ({
  router,
  routeParams,
  location
}) => {
  var _a, _b, _c;
  const { batch_execution_id: batchExecutionId } = routeParams;
  const hostStatusParam = location.query.status;
  const pageParam = parseInt((_a = location.query.page) != null ? _a : "0", 10);
  const orderKeyParam = (_b = location.query.order_key) != null ? _b : "display_name";
  const orderDirectionParam = (_c = location.query.order_direction) != null ? _c : "asc";
  const selectedHostStatus = hostStatusParam;
  const [showCancelModal, setShowCancelModal] = (0,react.useState)(false);
  const [showBatchScriptDetails, setShowBatchScriptDetails] = (0,react.useState)(false);
  const [
    hostScriptExecutionIdForModal,
    setHostScriptExecutionIdForModal
  ] = (0,react.useState)(null);
  const [isCanceling, setIsCanceling] = (0,react.useState)(false);
  const [actualRecordCount, setActualRecordCount] = (0,react.useState)(
    null
  );
  const {
    data: batchDetails,
    isLoading,
    isError,
    refetch: refetchBatchDetails
  } = (0,es.useQuery)(
    [{ scope: "script_batch_summary", batch_execution_id: batchExecutionId }],
    ({ queryKey }) => scripts/* default */.A.getRunScriptBatchSummaryV2(queryKey[0]),
    __spreadProps(ScriptBatchDetailsPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), { enabled: !!batchExecutionId })
  );
  const pathToProgress = (0,react.useMemo)(() => {
    const params = (0,url/* buildQueryStringFromParams */.IM)({
      status: batchDetails == null ? void 0 : batchDetails.status,
      fleet_id: batchDetails == null ? void 0 : batchDetails.team_id
    });
    return paths/* default */.A.CONTROLS_SCRIPTS_BATCH_PROGRESS + (params ? `?${params}` : "");
  }, [batchDetails == null ? void 0 : batchDetails.status, batchDetails == null ? void 0 : batchDetails.team_id]);
  const onCancelBatch = (0,react.useCallback)(() => __async(null, null, function* () {
    setIsCanceling(true);
    try {
      yield scripts/* default */.A.cancelScriptBatch(batchExecutionId);
      ToastNotification/* notify */.me.success("Successfully canceled script.");
      setShowCancelModal(false);
      router.push(pathToProgress);
    } catch (error) {
      ToastNotification/* notify */.me.error("Could not cancel script. Please try again.", {
        response: error
      });
    } finally {
      setIsCanceling(false);
    }
  }), [batchExecutionId, pathToProgress, router]);
  const buildTabPath = (0,react.useCallback)(
    (index) => {
      const newHostsStatus = HOSTS_STATUS_BY_INDEX[index];
      const newParams = new URLSearchParams(location == null ? void 0 : location.search);
      newParams.set("status", newHostsStatus);
      newParams.set("page", "0");
      const newQuery = newParams.toString();
      return paths/* default */.A.CONTROLS_SCRIPTS_BATCH_DETAILS(batchExecutionId).concat(newQuery ? `?${newQuery}` : "");
    },
    [batchExecutionId, location == null ? void 0 : location.search]
  );
  const handleTabChange = (0,react.useCallback)(
    (index) => {
      router.push(buildTabPath(index));
      refetchBatchDetails();
    },
    [buildTabPath, refetchBatchDetails, router]
  );
  (0,react.useEffect)(() => {
    if (!(0,script/* isValidScriptBatchHostStatus */.UI)(selectedHostStatus)) {
      router.replace(buildTabPath(0));
    }
  }, [buildTabPath, router, selectedHostStatus]);
  const renderTabContent = ([hostStatus, hostStatusCount]) => {
    if (hostStatusCount === 0) {
      return getEmptyState(hostStatus);
    }
    const showTooltip = actualRecordCount !== null && actualRecordCount !== hostStatusCount;
    const hostCountText = /* @__PURE__ */ react.createElement("b", null, hostStatusCount, " host", hostStatusCount > 1 && "s");
    return /* @__PURE__ */ react.createElement("div", { className: `${ScriptBatchDetailsPage_baseClass}__tab-content` }, /* @__PURE__ */ react.createElement("span", { className: `${ScriptBatchDetailsPage_baseClass}__tab-content__header` }, showTooltip ? /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Some hosts may have been removed." }, hostCountText) : hostCountText, /* @__PURE__ */ react.createElement(
      ViewAllHostsLink/* default */.A,
      {
        queryParams: {
          script_batch_execution_status: selectedHostStatus,
          // refers to script batch host status, may update pending conv w Rachael
          script_batch_execution_id: batchExecutionId,
          fleet_id: batchDetails == null ? void 0 : batchDetails.team_id
        }
      }
    )), /* @__PURE__ */ react.createElement(
      ScriptBatchHostsTable_ScriptBatchHostsTable,
      {
        batchExecutionId,
        selectedHostStatus: hostStatus,
        page: pageParam,
        orderDirection: orderDirectionParam,
        orderKey: orderKeyParam,
        setHostScriptExecutionIdForModal,
        router,
        onDataLoaded: setActualRecordCount
      }
    ));
  };
  const renderContent = () => {
    if (isLoading || !batchDetails) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { description: "Could not load script batch details." });
    }
    const {
      script_name,
      status,
      targeted_host_count: targeted,
      ran_host_count: ran,
      errored_host_count: errored,
      pending_host_count: pending,
      incompatible_host_count: incompatible,
      canceled_host_count: canceled
    } = batchDetails || {};
    const getHostStatusAndCountByIndex = (i) => [
      ["ran", ran],
      ["errored", errored],
      ["pending", pending],
      ["incompatible", incompatible],
      ["canceled", canceled]
    ][i];
    const subTitle = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement("b", null, targeted), " hosts targeted (", Math.ceil(100 * ((ran + errored) / targeted)), "% responded)"), /* @__PURE__ */ react.createElement("span", { className: "when" }, (0,helpers/* getWhen */.j0)(batchDetails)));
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ScriptBatchDetailsPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to script activity", path: pathToProgress })), /* @__PURE__ */ react.createElement(
      SectionHeader/* default */.A,
      {
        wrapperCustomClass: `${ScriptBatchDetailsPage_baseClass}__header`,
        title: script_name,
        subTitle,
        details: /* @__PURE__ */ react.createElement(
          ActionButtons/* default */.A,
          {
            baseClass: ScriptBatchDetailsPage_baseClass,
            actions: [
              {
                type: "secondary",
                label: "Show script",
                buttonVariant: "secondary",
                iconName: "eye",
                onClick: () => {
                  setShowBatchScriptDetails(true);
                }
              },
              {
                type: "secondary",
                label: "Cancel",
                onClick: () => {
                  setShowCancelModal(true);
                },
                hideAction: status === "finished",
                buttonVariant: "alert"
              }
            ]
          }
        ),
        alignLeftHeaderVertically: true,
        greySubtitle: true
      }
    ), /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(
      esm/* Tabs */.tU,
      {
        selectedIndex: HOSTS_STATUS_BY_INDEX.indexOf(selectedHostStatus),
        onSelect: handleTabChange
      },
      /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, { count: batchDetails.ran_host_count }, "Ran")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(
        TabText/* default */.A,
        {
          count: batchDetails.errored_host_count,
          countVariant: "alert"
        },
        "Errored"
      )), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(
        TabText/* default */.A,
        {
          count: batchDetails.pending_host_count,
          countVariant: "pending"
        },
        "Pending"
      )), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(
        TabText/* default */.A,
        {
          count: batchDetails.incompatible_host_count,
          countVariant: "pending"
        },
        "Incompatible"
      )), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(
        TabText/* default */.A,
        {
          count: batchDetails.canceled_host_count,
          countVariant: "pending"
        },
        "Canceled"
      ))),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(getHostStatusAndCountByIndex(0))),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(getHostStatusAndCountByIndex(1))),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(getHostStatusAndCountByIndex(2))),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(getHostStatusAndCountByIndex(3))),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(getHostStatusAndCountByIndex(4)))
    )));
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: ScriptBatchDetailsPage_baseClass }, renderContent()), showCancelModal && /* @__PURE__ */ react.createElement(
    CancelScriptBatchModal_CancelScriptBatchModal,
    {
      onSubmit: onCancelBatch,
      onExit: () => {
        setShowCancelModal(false);
      },
      scriptName: batchDetails == null ? void 0 : batchDetails.script_name,
      isCanceling
    }
  ), showBatchScriptDetails && /* @__PURE__ */ react.createElement(
    ScriptDetailsModal/* default */.A,
    {
      selectedScriptId: batchDetails == null ? void 0 : batchDetails.script_id,
      onCancel: () => {
        setShowBatchScriptDetails(false);
      },
      suppressSecondaryActions: true
    }
  ), hostScriptExecutionIdForModal && /* @__PURE__ */ react.createElement(
    RunScriptDetailsModal/* default */.A,
    {
      scriptExecutionId: hostScriptExecutionIdForModal,
      onCancel: () => setHostScriptExecutionIdForModal(null)
    }
  ));
};
/* harmony default export */ var ScriptBatchDetailsPage_ScriptBatchDetailsPage = (ScriptBatchDetailsPage);

;// ./frontend/pages/ManageControlsPage/Scripts/ScriptBatchDetailsPage/index.ts




/***/ }),

/***/ 19793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Scripts_Scripts; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SideNav/index.ts + 3 modules
var SideNav = __webpack_require__(67675);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/Icon/Icon.tsx + 74 modules
var Icon = __webpack_require__(99742);
// EXTERNAL MODULE: ./frontend/components/ListItem/index.ts + 1 modules
var ListItem = __webpack_require__(83080);
// EXTERNAL MODULE: ./frontend/components/PaginatedList/index.ts + 1 modules
var PaginatedList = __webpack_require__(92459);
// EXTERNAL MODULE: ./frontend/components/ProgressBar/index.ts + 1 modules
var ProgressBar = __webpack_require__(87828);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/interfaces/script.ts
var script = __webpack_require__(24063);
// EXTERNAL MODULE: ./frontend/services/entities/scripts.ts
var entities_scripts = __webpack_require__(87844);
// EXTERNAL MODULE: ./frontend/styles/var/colors.ts
var colors = __webpack_require__(42008);
// EXTERNAL MODULE: ./frontend/pages/ManageControlsPage/Scripts/helpers.tsx
var helpers = __webpack_require__(7681);
;// ./frontend/pages/ManageControlsPage/Scripts/cards/ScriptBatchProgress/ScriptBatchProgress.tsx




















const baseClass = "script-batch-progress";
const STATUS_BY_INDEX = [
  "started",
  "scheduled",
  "finished"
];
const EMPTY_STATE_DETAILS = {
  started: /* @__PURE__ */ react.createElement(react.Fragment, null, "Scripts running on multiple hosts will appear here. ", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/batch-scripts`,
      newTab: true,
      text: "Learn more about batch scripts"
    }
  )),
  scheduled: /* @__PURE__ */ react.createElement(react.Fragment, null, "Scheduled scripts will appear here.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/batch-scripts`,
      newTab: true,
      text: "Learn more about batch scripts"
    }
  )),
  finished: /* @__PURE__ */ react.createElement(react.Fragment, null, "Completed or canceled batch scripts will appear here.")
};
const getEmptyState = (status) => {
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      variant: "list",
      header: `No batch scripts ${status}`,
      info: EMPTY_STATE_DETAILS[status]
    }
  );
};
const ScriptBatchProgress = ({
  location,
  router,
  teamId
}) => {
  const [pageNumber, setPageNumber] = (0,react.useState)(0);
  const paginatedListRef = (0,react.useRef)(
    null
  );
  const statusParam = location == null ? void 0 : location.query.status;
  const selectedStatus = statusParam;
  const DEFAULT_PAGE_SIZE = 10;
  const queryKey = {
    fleet_id: teamId,
    status: selectedStatus,
    page: pageNumber,
    per_page: DEFAULT_PAGE_SIZE
  };
  const { data, isFetching: updating } = (0,es.useQuery)([queryKey], () => entities_scripts/* default */.A.getRunScriptBatchSummaries(queryKey), {
    keepPreviousData: true
  });
  const buildTabPath = (0,react.useCallback)(
    (index) => {
      const newStatus = STATUS_BY_INDEX[index];
      const newParams = new URLSearchParams(location == null ? void 0 : location.search);
      newParams.set("status", newStatus);
      const newQuery = newParams.toString();
      return paths/* default */.A.CONTROLS_SCRIPTS_BATCH_PROGRESS.concat(
        newQuery ? `?${newQuery}` : ""
      );
    },
    [location == null ? void 0 : location.search]
  );
  const handleTabChange = (0,react.useCallback)(
    (index) => {
      router.push(buildTabPath(index));
      setPageNumber(0);
    },
    [buildTabPath, router]
  );
  const onClickRow = (r) => {
    router.push(
      paths/* default */.A.CONTROLS_SCRIPTS_BATCH_DETAILS(r.batch_execution_id).concat(
        "?status=ran"
      )
    );
    return r;
  };
  const renderRow = (summary) => {
    const {
      script_name,
      targeted_host_count,
      ran_host_count,
      errored_host_count
    } = summary;
    const when = (0,helpers/* getWhen */.j0)(summary);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ListItem/* default */.A, { title: script_name, details: when }), summary.status !== "scheduled" && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__row-right` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__status-count` }, ran_host_count + errored_host_count, " / ", targeted_host_count, " ", "hosts"), /* @__PURE__ */ react.createElement(
      ProgressBar/* default */.A,
      {
        sections: [
          {
            // results
            color: colors/* COLORS */.l["status-success"],
            portion: ran_host_count / targeted_host_count
          },
          {
            // errors
            color: colors/* COLORS */.l["status-error"],
            portion: errored_host_count / targeted_host_count
          }
        ]
      }
    ), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__row-errors` }, /* @__PURE__ */ react.createElement(
      Icon/* default */.A,
      {
        name: "error-outline",
        color: "ui-fleet-black-50",
        size: "small"
      }
    ), " ", /* @__PURE__ */ react.createElement("div", null, errored_host_count))));
  };
  (0,react.useEffect)(() => {
    if (!(0,script/* isValidScriptBatchStatus */.i_)(statusParam)) {
      router.replace(buildTabPath(0));
      setPageNumber(0);
    }
  }, [buildTabPath, router, statusParam]);
  const renderTabContent = (status) => {
    if (updating) {
      return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__loading` }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null));
    }
    const count = (data == null ? void 0 : data.count) || 0;
    const rows = (data == null ? void 0 : data.batch_executions) || [];
    if (count === 0) {
      return getEmptyState(status);
    }
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__tab-content` }, !updating && count && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__status-count` }, count, " batch script", count > 1 ? "s" : ""), /* @__PURE__ */ react.createElement(
      PaginatedList/* default */.A,
      {
        ref: paginatedListRef,
        count,
        data: rows,
        pageSize: DEFAULT_PAGE_SIZE,
        currentPage: pageNumber,
        onChangePage: setPageNumber,
        isLoading: updating,
        onClickRow,
        renderItemRow: renderRow,
        useCheckBoxes: false
      }
    ));
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Batch progress", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(
    esm/* Tabs */.tU,
    {
      selectedIndex: STATUS_BY_INDEX.indexOf(selectedStatus),
      onSelect: handleTabChange
    },
    /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Started")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Scheduled")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Finished"))),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(STATUS_BY_INDEX[0])),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(STATUS_BY_INDEX[1])),
    /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderTabContent(STATUS_BY_INDEX[2]))
  ))));
};
/* harmony default export */ var ScriptBatchProgress_ScriptBatchProgress = (ScriptBatchProgress);

// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/index.ts
var InfoBanner = __webpack_require__(38021);
// EXTERNAL MODULE: ./frontend/components/Pagination/index.ts + 1 modules
var Pagination = __webpack_require__(4891);
// EXTERNAL MODULE: ./frontend/components/UploadList/index.ts + 1 modules
var UploadList = __webpack_require__(67050);
// EXTERNAL MODULE: ./frontend/pages/ManageControlsPage/Scripts/components/DeleteScriptModal/index.ts + 1 modules
var DeleteScriptModal = __webpack_require__(21621);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/Editor/index.tsx
var Editor = __webpack_require__(96470);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/ModalFooter/index.ts + 1 modules
var ModalFooter = __webpack_require__(48262);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/pages/hosts/components/ScriptDetailsModal/RunScriptHelpText.tsx
var RunScriptHelpText = __webpack_require__(42082);
// EXTERNAL MODULE: ./frontend/pages/ManageControlsPage/Scripts/components/ScriptUploadModal/helpers.ts
var ScriptUploadModal_helpers = __webpack_require__(17590);
;// ./frontend/pages/ManageControlsPage/Scripts/components/EditScriptModal/EditScriptModal.tsx

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

















const EditScriptModal_baseClass = "edit-script-modal";
const WarningModal = ({
  onExit,
  onSave,
  scriptName,
  isSubmitting
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: `${EditScriptModal_baseClass}__warning`,
      title: "Save changes?",
      onExit
    },
    /* @__PURE__ */ react.createElement("p", null, "The changes you are making will cancel any pending script runs for", " ", /* @__PURE__ */ react.createElement("b", null, scriptName), ".", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "If this script is currently running on a host, it will complete, but results won't appear in Fleet. ", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "You cannot undo this action."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        onClick: onSave,
        className: "save-loading",
        isLoading: isSubmitting
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))
  );
};
const validate = (scriptContent) => {
  if (scriptContent.trim() === "") {
    return "Script cannot be empty";
  }
  return null;
};
const EditScriptModal = ({
  scriptId,
  scriptName,
  onExit
}) => {
  const {
    currentTeam,
    isGlobalAdmin,
    isAnyTeamAdmin,
    isGlobalMaintainer,
    isAnyTeamMaintainer,
    isTeamTechnician,
    isGlobalTechnician
  } = (0,react.useContext)(app/* AppContext */.BR);
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)();
  const isTechnician = !!isTeamTechnician || !!isGlobalTechnician;
  const canRunScripts = !!(isGlobalAdmin || isAnyTeamAdmin || isGlobalMaintainer || isAnyTeamMaintainer);
  const [scriptFormData, setScriptFormData] = (0,react.useState)("");
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [formError, setFormError] = (0,react.useState)(null);
  const [showConfirmChanges, setShowConfirmChanges] = (0,react.useState)(false);
  const {
    data: curScriptContent,
    error: isSelectedScriptContentError,
    isLoading: isLoadingSelectedScriptContent
  } = (0,es.useQuery)(
    [scriptId],
    () => entities_scripts/* default */.A.downloadScript(scriptId),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      onSuccess: (curScriptContent_) => {
        setScriptFormData(curScriptContent_);
      }
    })
  );
  const onChange = (value) => {
    setScriptFormData(value);
    const err = validate(value);
    if (!err && !!formError) {
      setFormError(validate(value));
    }
  };
  const onBlur = () => {
    setFormError(validate(scriptFormData));
  };
  const onSave = () => __async(null, null, function* () {
    const err = validate(scriptFormData);
    setFormError(err);
    if (err || isSubmitting) {
      return;
    }
    if (curScriptContent !== scriptFormData && !showConfirmChanges) {
      setShowConfirmChanges(true);
      return;
    }
    try {
      setIsSubmitting(true);
      yield entities_scripts/* default */.A.updateScript(scriptId, scriptFormData, scriptName);
      ToastNotification/* notify */.me.success("Successfully saved script.");
      onExit();
    } catch (e) {
      ToastNotification/* notify */.me.error((0,ScriptUploadModal_helpers/* getErrorMessage */.u)(e), { response: e });
    } finally {
      setIsSubmitting(false);
      setShowConfirmChanges(false);
    }
  });
  const onSubmit = (e) => __async(null, null, function* () {
    e.preventDefault();
    onSave();
  });
  const renderContent = () => {
    if (isLoadingSelectedScriptContent) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isSelectedScriptContentError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { description: "Close this modal and try again." });
    }
    let mode = "sh";
    if (scriptName.match(/\.ps1$/)) {
      mode = "powershell";
    } else if (scriptName.match(/\.py$/)) {
      mode = "python";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("form", { onSubmit }, /* @__PURE__ */ react.createElement(
      Editor/* default */.A,
      {
        mode,
        error: formError,
        label: "Script",
        onBlur,
        onChange,
        value: scriptFormData,
        readOnly: gitOpsModeEnabled
      }
    ), /* @__PURE__ */ react.createElement(
      RunScriptHelpText/* default */.A,
      {
        className: "form-field__help-text",
        isTechnician,
        canRunScripts,
        teamId: currentTeam == null ? void 0 : currentTeam.id
      }
    )), canRunScripts && /* @__PURE__ */ react.createElement(
      ModalFooter/* default */.A,
      {
        primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            renderChildren: (gitopsEnabled) => {
              return /* @__PURE__ */ react.createElement(
                Button/* default */.A,
                {
                  onClick: onSave,
                  isLoading: isSubmitting,
                  disabled: !!formError || gitopsEnabled
                },
                "Save"
              );
            }
          }
        ))
      }
    ));
  };
  const classes = classnames_default()(EditScriptModal_baseClass, {
    [`${EditScriptModal_baseClass}__hide-main`]: !!showConfirmChanges
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: classes,
      title: scriptName,
      width: "large",
      onExit
    },
    renderContent()
  ), !!showConfirmChanges && /* @__PURE__ */ react.createElement(
    WarningModal,
    {
      onExit: () => setShowConfirmChanges(false),
      onSave,
      scriptName,
      isSubmitting
    }
  ));
};
/* harmony default export */ var EditScriptModal_EditScriptModal = (EditScriptModal);

;// ./frontend/pages/ManageControlsPage/Scripts/components/EditScriptModal/index.ts



// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 5 modules
var format = __webpack_require__(54070);
// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
;// ./frontend/pages/ManageControlsPage/Scripts/components/ScriptListItem/ScriptListItem.tsx

var ScriptListItem_async = (__this, __arguments, generator) => {
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











const ScriptListItem_baseClass = "script-list-item";
const getFileRenderDetails = (fileName) => {
  const fileExtension = fileName.split(".").pop();
  switch (fileExtension) {
    case "py":
      return { graphicName: "file-py", platform: "macOS & Linux" };
    case "sh":
      return { graphicName: "file-sh", platform: "macOS & Linux" };
    case "ps1":
      return { graphicName: "file-ps1", platform: "Windows" };
    default:
      return { graphicName: "file-script", platform: null };
  }
};
const onDownload = (script) => ScriptListItem_async(null, null, function* () {
  try {
    const content = yield entities_scripts/* default */.A.downloadScript(script.id);
    const formatDate = (0,format/* format */.GP)(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    const filename = `${formatDate} ${script.name}`;
    const file = new File([content], filename);
    FileSaver_default().saveAs(file);
  } catch (e) {
    ToastNotification/* notify */.me.error("Couldn\u2019t Download. Please try again.", { response: e });
  }
});
const ScriptListItemDetails = ({
  platform,
  createdAt
}) => /* @__PURE__ */ react.createElement("div", { className: `${ScriptListItem_baseClass}__details` }, platform && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", null, platform), /* @__PURE__ */ react.createElement("span", null, "\u2022")), /* @__PURE__ */ react.createElement("span", null, "Uploaded ", /* @__PURE__ */ react.createElement(HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T, { timeString: createdAt })));
const ScriptListItem = ({
  script,
  onDelete,
  onClickScript,
  onEdit,
  isTechnician
}) => {
  const { graphicName, platform } = getFileRenderDetails(script.name);
  const onClickEdit = () => {
    onEdit(script);
  };
  const onClickDownload = () => {
    onDownload(script);
  };
  const onClickDelete = () => {
    onDelete(script);
  };
  const actions = /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${ScriptListItem_baseClass}__actions`,
      onClick: (evt) => evt.stopPropagation()
    },
    /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            disabled: disableChildren,
            onClick: onClickEdit,
            className: `${ScriptListItem_baseClass}__action-button`,
            variant: "secondary",
            ariaLabel: `Edit ${script.name}`,
            icon: "pencil"
          }
        )
      }
    ),
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${ScriptListItem_baseClass}__action-button`,
        variant: "secondary",
        onClick: onClickDownload,
        ariaLabel: `Download ${script.name}`,
        icon: "download"
      }
    ),
    /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            disabled: disableChildren,
            onClick: onClickDelete,
            className: `${ScriptListItem_baseClass}__action-button`,
            variant: "secondary",
            ariaLabel: `Delete ${script.name}`,
            icon: "trash"
          }
        )
      }
    )
  );
  return /* @__PURE__ */ react.createElement(
    ListItem/* default */.A,
    {
      className: ScriptListItem_baseClass,
      graphic: graphicName,
      title: /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: `ID: ${script.id}`,
          underline: false,
          position: "top",
          showArrow: true
        },
        /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "link", className: `${ScriptListItem_baseClass}__title-button` }, /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: script.name, fixedPositionStrategy: true }))
      ),
      details: /* @__PURE__ */ react.createElement(
        ScriptListItemDetails,
        {
          platform,
          createdAt: script.created_at
        }
      ),
      actions: isTechnician ? void 0 : actions,
      onClick: () => onClickScript(script)
    }
  );
};
/* harmony default export */ var ScriptListItem_ScriptListItem = (ScriptListItem);

;// ./frontend/pages/ManageControlsPage/Scripts/components/ScriptListItem/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
// EXTERNAL MODULE: ./frontend/utilities/file/fileUtils.tsx
var fileUtils = __webpack_require__(9106);
;// ./frontend/pages/ManageControlsPage/Scripts/components/ScriptUploader/ScriptUploader.tsx





const ScriptUploader_baseClass = "script-uploader";
const ScriptPackageUploader = ({
  forModal,
  onFileSelected,
  selectedFile,
  onButtonClick
}) => {
  var _a;
  const onFileSelect = (files) => {
    if (files && files.length > 0) {
      onFileSelected == null ? void 0 : onFileSelected(files[0]);
    }
  };
  const buttonType = forModal ? "secondary" : void 0;
  const buttonMessage = forModal ? "Choose file" : "Add script";
  const extension = (_a = selectedFile == null ? void 0 : selectedFile.name.match(/(sh|py|ps1)$/i)) == null ? void 0 : _a[1];
  let graphicName;
  switch (extension) {
    case "ps1":
      graphicName = ["file-ps1"];
      break;
    case "py":
      graphicName = ["file-py"];
      break;
    case "sh":
      graphicName = ["file-sh"];
      break;
    default:
      graphicName = ["file-sh", "file-py", "file-ps1"];
  }
  return /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      className: ScriptUploader_baseClass,
      graphicName,
      message: helpers/* SCRIPT_UPLOADER_TEXT */.hW,
      title: "Upload script",
      accept: ".sh,.py,.ps1",
      onFileUpload: onFileSelect,
      fileDetails: selectedFile ? (0,fileUtils/* getFileDetails */.P$)(selectedFile) : void 0,
      buttonType,
      buttonMessage,
      gitopsCompatible: true,
      onButtonClick
    }
  );
};
/* harmony default export */ var ScriptUploader = (ScriptPackageUploader);

;// ./frontend/pages/ManageControlsPage/Scripts/components/ScriptUploader/index.ts



;// ./frontend/pages/ManageControlsPage/Scripts/components/ScriptUploadModal/ScriptUploadModal.tsx

var ScriptUploadModal_async = (__this, __arguments, generator) => {
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








const ScriptUploadModal_baseClass = "script-upload-modal";
const ScriptUploadModal = ({
  onSubmit,
  onExit,
  currentTeamId
}) => {
  const [activeTab, setActiveTab] = (0,react.useState)("upload");
  const [selectedFile, setSelectedFile] = (0,react.useState)(null);
  const [showLoading, setShowLoading] = (0,react.useState)(false);
  const [aiPrompt, setAiPrompt] = (0,react.useState)("");
  const [isGenerating, setIsGenerating] = (0,react.useState)(false);
  const [generatedScript, setGeneratedScript] = (0,react.useState)(null);
  const [aiExplanation, setAiExplanation] = (0,react.useState)(null);
  const onUploadFile = () => ScriptUploadModal_async(null, null, function* () {
    if (!selectedFile) {
      return;
    }
    setShowLoading(true);
    try {
      yield entities_scripts/* default */.A.uploadScript(selectedFile, currentTeamId);
      ToastNotification/* notify */.me.success("Successfully uploaded script.");
      onSubmit();
    } catch (e) {
      ToastNotification/* notify */.me.error((0,ScriptUploadModal_helpers/* getErrorMessage */.u)(e), { response: e });
    } finally {
      setShowLoading(false);
    }
  });
  const handleGenerateAIScript = () => ScriptUploadModal_async(null, null, function* () {
    if (!aiPrompt.trim()) {
      ToastNotification/* notify */.me.error("Please enter a description for the AI script generator.");
      return;
    }
    setIsGenerating(true);
    try {
      const resp = yield entities_scripts/* default */.A.generateAIScript(aiPrompt);
      setGeneratedScript(resp.script);
      setAiExplanation(resp.explanation);
      ToastNotification/* notify */.me.success("Mesh AI generated script successfully!");
    } catch (e) {
      ToastNotification/* notify */.me.error((e == null ? void 0 : e.message) || "Failed to generate AI script.");
    } finally {
      setIsGenerating(false);
    }
  });
  const handleApplyGeneratedScript = () => {
    if (!generatedScript) return;
    const blob = new Blob([generatedScript], { type: "text/plain" });
    const filename = `mesh_ai_${Date.now()}.sh`;
    const file = new File([blob], filename, { type: "text/plain" });
    setSelectedFile(file);
    setActiveTab("upload");
    ToastNotification/* notify */.me.success(`Generated script loaded as ${filename}`);
  };
  const additionalInfo = (() => {
    if (!selectedFile) {
      return void 0;
    }
    if (selectedFile.name.match(/\.sh$/)) {
      return 'On macOS and Linux, script will run according to the interpreter specified in the first line: "#!/bin/sh", "#!/bin/zsh", or "#!/bin/bash"';
    }
    if (selectedFile.name.match(/\.py$/)) {
      return 'On macOS and Linux, Python scripts must start with a python shebang in the first line (for example, "#!/usr/bin/env python3" or "#!/usr/bin/python3").';
    }
    return void 0;
  })();
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Add script",
      onExit,
      onEnter: onSubmit,
      className: ScriptUploadModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { style: { display: "flex", gap: "10px", marginBottom: "16px" } }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: activeTab === "upload" ? "default" : "secondary",
        onClick: () => setActiveTab("upload"),
        size: "small"
      },
      "Upload Script File"
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: activeTab === "ai" ? "default" : "secondary",
        onClick: () => setActiveTab("ai"),
        size: "small"
      },
      "\u2728 Generate with Mesh AI"
    )),
    activeTab === "upload" ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ScriptUploadModal_baseClass}__content` }, /* @__PURE__ */ react.createElement(
      ScriptUploader,
      {
        onFileSelected: (file) => setSelectedFile(file),
        selectedFile,
        forModal: true
      }
    )), additionalInfo && /* @__PURE__ */ react.createElement("p", { className: `${ScriptUploadModal_baseClass}__additional-info` }, additionalInfo), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onUploadFile,
        disabled: !selectedFile || showLoading,
        isLoading: showLoading
      },
      "Add script"
    ))) : /* @__PURE__ */ react.createElement("div", { className: "ai-script-generator-pane", style: { display: "flex", flexDirection: "column", gap: "12px" } }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        label: "What should this script do?",
        placeholder: "e.g. Flush DNS cache, audit installed software, or clean temp storage...",
        value: aiPrompt,
        onChange: (val) => setAiPrompt(val),
        helpText: "Mesh AI sandbox strictly prevents destructive commands and generates optimized Bash or PowerShell scripts."
      }
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: handleGenerateAIScript,
        disabled: !aiPrompt.trim() || isGenerating,
        isLoading: isGenerating,
        variant: "default"
      },
      "Generate Script"
    ), generatedScript && /* @__PURE__ */ react.createElement("div", { style: { marginTop: "12px", background: "rgba(0,0,0,0.2)", padding: "12px", borderRadius: "6px", border: "1px solid var(--ui-vibrant-blue-50)" } }, /* @__PURE__ */ react.createElement("div", { style: { fontWeight: 600, color: "var(--core-vibrant-blue)", marginBottom: "6px" } }, "AI Safety Explanation:"), /* @__PURE__ */ react.createElement("p", { style: { fontSize: "12px", marginBottom: "8px", opacity: 0.9 } }, aiExplanation), /* @__PURE__ */ react.createElement("pre", { style: { maxHeight: "160px", overflowY: "auto", background: "#111", padding: "8px", borderRadius: "4px", fontSize: "12px", color: "#a5d6ff" } }, generatedScript), /* @__PURE__ */ react.createElement("div", { style: { marginTop: "10px", display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: handleApplyGeneratedScript, variant: "default", size: "small" }, "Use This Script"))))
  );
};
/* harmony default export */ var ScriptUploadModal_ScriptUploadModal = (ScriptUploadModal);

;// ./frontend/pages/ManageControlsPage/Scripts/components/ScriptUploadModal/index.ts



;// ./frontend/pages/ManageControlsPage/Scripts/cards/ScriptLibrary/ScriptLibrary.tsx

var ScriptLibrary_defProp = Object.defineProperty;
var ScriptLibrary_defProps = Object.defineProperties;
var ScriptLibrary_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ScriptLibrary_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ScriptLibrary_hasOwnProp = Object.prototype.hasOwnProperty;
var ScriptLibrary_propIsEnum = Object.prototype.propertyIsEnumerable;
var ScriptLibrary_defNormalProp = (obj, key, value) => key in obj ? ScriptLibrary_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ScriptLibrary_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ScriptLibrary_hasOwnProp.call(b, prop))
      ScriptLibrary_defNormalProp(a, prop, b[prop]);
  if (ScriptLibrary_getOwnPropSymbols)
    for (var prop of ScriptLibrary_getOwnPropSymbols(b)) {
      if (ScriptLibrary_propIsEnum.call(b, prop))
        ScriptLibrary_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ScriptLibrary_spreadProps = (a, b) => ScriptLibrary_defProps(a, ScriptLibrary_getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ScriptLibrary_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ScriptLibrary_getOwnPropSymbols)
    for (var prop of ScriptLibrary_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ScriptLibrary_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





















const ScriptLibrary_baseClass = "script-library";
const SCRIPTS_PER_PAGE = 10;
const DEFAULT_PAGE = 0;
const ScriptLibrary = ({ router, teamId, location }) => {
  var _a, _b;
  const currentPage = location.query.page ? parseInt(location.query.page, 10) : DEFAULT_PAGE;
  const { isPremiumTier, isGlobalTechnician, isTeamTechnician } = (0,react.useContext)(
    app/* AppContext */.BR
  );
  const isTechnician = isGlobalTechnician || isTeamTechnician;
  const [showDeleteScriptModal, setShowDeleteScriptModal] = (0,react.useState)(false);
  const [showEditScriptModal, setShowEditScriptModal] = (0,react.useState)(false);
  const [showAddScriptModal, setShowAddScriptModal] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (location.query.add_script !== "1") return;
    if (!isTechnician) {
      setShowAddScriptModal(true);
    }
    const _a2 = location.query, { add_script } = _a2, rest = __objRest(_a2, ["add_script"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [location.query, location.pathname, router, isTechnician]);
  const selectedScript = (0,react.useRef)(null);
  const {
    data: { scripts, meta } = {},
    isLoading,
    isError,
    refetch: refetchScripts
  } = (0,es.useQuery)(
    [
      {
        scope: "scripts",
        fleet_id: teamId,
        page: currentPage,
        per_page: SCRIPTS_PER_PAGE
      }
    ],
    ({ queryKey: [{ fleet_id, page, per_page }] }) => entities_scripts/* default */.A.getScripts({ fleet_id, page, per_page }),
    ScriptLibrary_spreadProps(ScriptLibrary_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      staleTime: 3e3
    })
  );
  const path = paths/* default */.A.CONTROLS_SCRIPTS_LIBRARY;
  const queryString = isPremiumTier ? `?fleet_id=${teamId}&` : "?";
  const onPrevPage = (0,react.useCallback)(() => {
    router.push(path.concat(`${queryString}page=${currentPage - 1}`));
  }, [router, path, currentPage, queryString]);
  const onNextPage = (0,react.useCallback)(() => {
    router.push(path.concat(`${queryString}page=${currentPage + 1}`));
  }, [router, path, currentPage, queryString]);
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  if (!config) return null;
  const onClickScript = (script) => {
    selectedScript.current = script;
    setShowEditScriptModal(true);
  };
  const onEditScript = (script) => {
    selectedScript.current = script;
    setShowEditScriptModal(true);
  };
  const onExitEditScript = () => {
    selectedScript.current = null;
    setShowEditScriptModal(false);
  };
  const onClickDelete = (script) => {
    selectedScript.current = script;
    setShowDeleteScriptModal(true);
  };
  const onCancelDelete = () => {
    setShowDeleteScriptModal(false);
    selectedScript.current = null;
  };
  const onDeleteScript = () => {
    selectedScript.current = null;
    setShowDeleteScriptModal(false);
    refetchScripts();
  };
  const renderScriptsList = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (currentPage === 0 && !(scripts == null ? void 0 : scripts.length)) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      UploadList/* default */.A,
      {
        keyAttribute: "id",
        listItems: scripts || [],
        ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(
          ScriptListItem_ScriptListItem,
          {
            script: listItem,
            onDelete: onClickDelete,
            onClickScript,
            onEdit: onEditScript,
            isTechnician
          }
        )
      }
    ), /* @__PURE__ */ react.createElement(
      Pagination/* default */.A,
      {
        disablePrev: isLoading || !(meta == null ? void 0 : meta.has_previous_results),
        disableNext: isLoading || !(meta == null ? void 0 : meta.has_next_results),
        hidePagination: !isLoading && !(meta == null ? void 0 : meta.has_previous_results) && !(meta == null ? void 0 : meta.has_next_results),
        onPrevPage,
        onNextPage
      }
    ));
  };
  const renderScriptsDisabledBanner = () => /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { color: "yellow" }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("b", null, "Running scripts is disabled in organization settings."), " You can still manage your library of macOS and Windows scripts below."));
  const canUploadScripts = !isTechnician;
  return /* @__PURE__ */ react.createElement("div", { className: ScriptLibrary_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Library", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement("div", { className: `${ScriptLibrary_baseClass}__tab-header` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: "A collection of scripts for configuring and remediating hosts."
    }
  ), canUploadScripts && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "secondary",
          size: "small",
          onClick: () => setShowAddScriptModal(true),
          disabled: disableChildren,
          icon: "plus"
        },
        "Add script"
      )
    }
  )), config.server_settings.scripts_disabled && renderScriptsDisabledBanner(), renderScriptsList(), !isLoading && !isError && currentPage === 0 && !(scripts == null ? void 0 : scripts.length) && /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      variant: "header-list",
      header: "No scripts",
      info: canUploadScripts ? helpers/* SCRIPT_UPLOADER_EMPTY_STATE_TEXT */.jR : void 0,
      primaryButton: canUploadScripts ? /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              onClick: () => setShowAddScriptModal(true),
              disabled: disableChildren
            },
            "Upload"
          )
        }
      ) : void 0
    }
  ), showDeleteScriptModal && selectedScript.current && /* @__PURE__ */ react.createElement(
    DeleteScriptModal/* default */.A,
    {
      scriptName: (_a = selectedScript.current) == null ? void 0 : _a.name,
      scriptId: (_b = selectedScript.current) == null ? void 0 : _b.id,
      onCancel: onCancelDelete,
      afterDelete: onDeleteScript
    }
  ), showEditScriptModal && selectedScript.current && /* @__PURE__ */ react.createElement(
    EditScriptModal_EditScriptModal,
    {
      scriptId: selectedScript.current.id,
      scriptName: selectedScript.current.name,
      onExit: onExitEditScript
    }
  ), showAddScriptModal && /* @__PURE__ */ react.createElement(
    ScriptUploadModal_ScriptUploadModal,
    {
      currentTeamId: teamId,
      onExit: () => setShowAddScriptModal(false),
      onSubmit: () => {
        setShowAddScriptModal(false);
        refetchScripts();
      }
    }
  ));
};
/* harmony default export */ var ScriptLibrary_ScriptLibrary = (ScriptLibrary);

;// ./frontend/pages/ManageControlsPage/Scripts/ScriptsNavItems.tsx






const useScriptNavItems = (teamId) => {
  const { isGlobalTechnician, isTeamTechnician } = (0,react.useContext)(app/* AppContext */.BR);
  return (0,react.useMemo)(() => {
    const items = [
      {
        title: "Library",
        urlSection: "library",
        path: `${paths/* default */.A.CONTROLS_SCRIPTS_LIBRARY}?fleet_id=${teamId || 0}`,
        Card: ScriptLibrary_ScriptLibrary
      }
    ];
    if (!isTeamTechnician && !isGlobalTechnician) {
      items.push({
        title: "Batch progress",
        urlSection: "progress",
        path: `${paths/* default */.A.CONTROLS_SCRIPTS_BATCH_PROGRESS}?fleet_id=${teamId || 0}`,
        Card: ScriptBatchProgress_ScriptBatchProgress
      });
    }
    return items;
  }, [teamId, isTeamTechnician, isGlobalTechnician]);
};
/* harmony default export */ var ScriptsNavItems = (useScriptNavItems);

;// ./frontend/pages/ManageControlsPage/Scripts/Scripts.tsx








const Scripts_baseClass = "scripts";
const Scripts = ({ router, location, params, teamIdForApi }) => {
  var _a;
  const { section } = params;
  const SCRIPTS_NAV_ITEMS = ScriptsNavItems(teamIdForApi);
  const DEFAULT_SCRIPTS_SECTION = SCRIPTS_NAV_ITEMS[0];
  const currentFormSection = (_a = SCRIPTS_NAV_ITEMS.find((item) => item.urlSection === section)) != null ? _a : DEFAULT_SCRIPTS_SECTION;
  if (section && currentFormSection === DEFAULT_SCRIPTS_SECTION && section !== DEFAULT_SCRIPTS_SECTION.urlSection) {
    router.replace(DEFAULT_SCRIPTS_SECTION.path);
    return null;
  }
  const CurrentCard = currentFormSection.Card;
  if (teamIdForApi === void 0) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  return /* @__PURE__ */ react.createElement("div", { className: Scripts_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "tab-panel",
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Change configuration and remediate issues on macOS, Windows, and Linux hosts.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          text: "Learn more",
          url: `${constants/* FLEET_WEBSITE_URL */.jM}/docs/using-fleet/scripts`,
          newTab: true
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(
    SideNav/* default */.A,
    {
      className: `${Scripts_baseClass}__side-nav`,
      navItems: SCRIPTS_NAV_ITEMS,
      activeItem: currentFormSection.urlSection,
      CurrentCard: /* @__PURE__ */ react.createElement(
        CurrentCard,
        {
          key: teamIdForApi,
          teamId: teamIdForApi,
          router,
          location
        }
      )
    }
  ));
};
/* harmony default export */ var Scripts_Scripts = (Scripts);


/***/ }),

/***/ 7681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hW: function() { return /* binding */ SCRIPT_UPLOADER_TEXT; },
/* harmony export */   j0: function() { return /* binding */ getWhen; },
/* harmony export */   jR: function() { return /* binding */ SCRIPT_UPLOADER_EMPTY_STATE_TEXT; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var components_HumanTimeDiffWithDateTip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24292);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52978);
/* harmony import */ var utilities_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9467);





const SCRIPT_UPLOADER_EMPTY_STATE_TEXT = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Upload shell (.sh) or Python (.py) for macOS and Linux,", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "or PowerShell (.ps1) for Windows.");
const SCRIPT_UPLOADER_TEXT = "Shell (.sh) or Python (.py) for macOS and Linux, or PowerShell (.ps1) for Windows";
const getWhen = (summary) => {
  const {
    batch_execution_id: id,
    not_before,
    started_at,
    finished_at,
    canceled
  } = summary;
  switch (summary.status) {
    case "started":
      if (!started_at || !(0,utilities_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isDateTimePast */ .Sm)(started_at)) {
        console.warn(
          `Batch run with execution id ${id} is marked as 'started' but has no past 'started_at'`
        );
        return null;
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { name: "pending-outline", color: "ui-fleet-black-50", size: "small" }), "Started", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_HumanTimeDiffWithDateTip__WEBPACK_IMPORTED_MODULE_1__/* .HumanTimeDiffWithFleetLaunchCutoff */ .e,
        {
          timeString: started_at,
          tooltipPosition: "right"
        }
      ));
    case "scheduled":
      if (!not_before || (0,utilities_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isDateTimePast */ .Sm)(not_before)) {
        console.warn(
          `Batch run with execution id ${id} is marked as 'scheduled' but has no future scheduled start time`
        );
        return null;
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { name: "clock", color: "ui-fleet-black-50", size: "small" }), "Will start", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_HumanTimeDiffWithDateTip__WEBPACK_IMPORTED_MODULE_1__/* .HumanTimeDiffWithFleetLaunchCutoff */ .e,
        {
          timeString: not_before,
          tooltipPosition: "right"
        }
      ));
    case "finished":
      if (!finished_at || !(0,utilities_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isDateTimePast */ .Sm)(finished_at)) {
        console.warn(
          `Batch run with execution id ${id} is marked as 'finished' but has no past 'finished_at' data`
        );
        return null;
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        {
          name: canceled ? "close-filled" : "success",
          color: "ui-fleet-black-50",
          size: "small"
        }
      ), canceled ? "Canceled" : "Completed", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_HumanTimeDiffWithDateTip__WEBPACK_IMPORTED_MODULE_1__/* .HumanTimeDiffWithFleetLaunchCutoff */ .e,
        {
          timeString: finished_at,
          tooltipPosition: "right"
        }
      ));
    default:
      return null;
  }
};


/***/ }),

/***/ 29965:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SetupExperience_SetupExperience; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/PremiumFeatureMessage/index.ts
var PremiumFeatureMessage = __webpack_require__(17981);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SideNav/index.ts + 3 modules
var SideNav = __webpack_require__(67675);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var entities_config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/mdm.ts
var mdm = __webpack_require__(31332);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./frontend/pages/ManageControlsPage/SetupExperience/components/SetupExperienceContentContainer/SetupExperienceContentContainer.tsx



const baseClass = "setup-experience-content-container";
const SetupExperienceContentContainer = ({
  children,
  className
}) => {
  const classNames = classnames_default()(baseClass, className);
  return /* @__PURE__ */ react.createElement("div", { className: classNames }, children);
};
/* harmony default export */ var SetupExperienceContentContainer_SetupExperienceContentContainer = (SetupExperienceContentContainer);

;// ./frontend/pages/ManageControlsPage/SetupExperience/components/SetupExperienceContentContainer/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/helpers.ts


const getManualAgentInstallSetting = (currentTeamId, globalConfig, teamConfig) => {
  var _a;
  if (currentTeamId === team/* API_NO_TEAM_ID */.Rp) {
    return (globalConfig == null ? void 0 : globalConfig.mdm.setup_experience.macos_manual_agent_install) || false;
  }
  return ((_a = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _a.setup_experience.macos_manual_agent_install) || false;
};
/* harmony default export */ var helpers = (getManualAgentInstallSetting);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/components/InstallSoftwareForm/helpers.tsx

const hasNoSoftwareUploaded = (softwareTitles) => {
  return !softwareTitles || softwareTitles.length === 0;
};
const getInstallSoftwareDuringSetupCount = (softwareTitles) => {
  if (!softwareTitles) {
    return 0;
  }
  return softwareTitles.filter(
    (software) => {
      var _a, _b;
      return ((_a = software.software_package) == null ? void 0 : _a.install_during_setup) || ((_b = software.app_store_app) == null ? void 0 : _b.install_during_setup);
    }
  ).length;
};

// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapAdvancedOptions/BootstrapAdvancedOptions.tsx

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








const BootstrapAdvancedOptions_baseClass = "bootstrap-advanced-options";
const BootstrapAdvancedOptions = ({
  currentTeamId,
  disableInstallManually,
  selectManualAgentInstall,
  onChange
}) => {
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react.useState)(false);
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const onSubmit = (e) => __async(null, null, function* () {
    e.preventDefault();
    setIsSaving(true);
    try {
      yield mdm/* default */.A.updateSetupExperienceSettings({
        fleet_id: currentTeamId,
        macos_manual_agent_install: selectManualAgentInstall
      });
      ToastNotification/* notify */.me.success("Successfully updated.");
    } catch (err) {
      ToastNotification/* notify */.me.error("Something went wrong. Please try again.", {
        response: err
      });
    }
    setIsSaving(false);
  });
  const tooltip = /* @__PURE__ */ react.createElement(react.Fragment, null, "Use this option if you're deploying a custom fleetd via bootstrap package. If enabled, Mesh won't install fleetd automatically. To use this option upload a bootstrap package first, and make sure to not use", " ", /* @__PURE__ */ react.createElement("b", null, "Install software"), " and ", /* @__PURE__ */ react.createElement("b", null, "Run script"), ".");
  return /* @__PURE__ */ react.createElement("div", { className: BootstrapAdvancedOptions_baseClass }, /* @__PURE__ */ react.createElement(
    RevealButton/* default */.A,
    {
      className: `${BootstrapAdvancedOptions_baseClass}__accordion-title`,
      isShowing: showAdvancedOptions,
      showText: "Advanced options",
      hideText: "Advanced options",
      caretPosition: "after",
      onClick: () => setShowAdvancedOptions(!showAdvancedOptions)
    }
  ), showAdvancedOptions && /* @__PURE__ */ react.createElement("form", { onSubmit }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (gitopsDisable) => /* @__PURE__ */ react.createElement("div", { className: `${BootstrapAdvancedOptions_baseClass}__advanced-options-controls` }, /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          value: selectManualAgentInstall,
          onChange,
          disabled: gitopsDisable || disableInstallManually
        },
        /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: tooltip,
            disableTooltip: gitopsDisable
          },
          "Install Fleet's agent (fleetd) manually"
        )
      ), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: gitopsDisable || disableInstallManually || isSaving,
          type: "submit",
          isLoading: isSaving
        },
        "Save"
      )))
    }
  )));
};
/* harmony default export */ var BootstrapAdvancedOptions_BootstrapAdvancedOptions = (BootstrapAdvancedOptions);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapAdvancedOptions/index.ts



// EXTERNAL MODULE: ./frontend/components/FileUploader/index.ts
var FileUploader = __webpack_require__(6511);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapPackageUploader/helpers.tsx




const UPLOAD_ERROR_MESSAGES = {
  wrongType: {
    condition: (reason) => reason.includes("invalid file type"),
    message: "Couldn\u2019t upload. The file should be a package (.pkg)."
  },
  unsigned: {
    condition: (reason) => reason.includes("file is not"),
    message: "Couldn\u2019t upload. The package must be signed. Click \u201CLearn more\u201D below to learn how to sign."
  },
  noDistribution: {
    condition: (reason) => reason.includes("Bootstrap package must be a distribution package"),
    message: /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't upload. Bootstrap package must be a distribution package.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/macos-distribution-packages`,
        text: "Learn more",
        newTab: true,
        variant: "flash-message-link"
      }
    ))
  },
  default: {
    condition: () => false,
    message: "Couldn\u2019t upload. Please try again."
  }
};
const getErrorMessage = (err) => {
  const apiReason = err.data.errors[0].reason;
  const error = Object.values(UPLOAD_ERROR_MESSAGES).find(
    (errType) => errType.condition(apiReason)
  );
  if (!error) {
    return UPLOAD_ERROR_MESSAGES.default.message;
  }
  return error.message;
};

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapPackageUploader/BootstrapPackageUploader.tsx

var BootstrapPackageUploader_async = (__this, __arguments, generator) => {
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





const BootstrapPackageUploader = ({
  currentTeamId,
  onUpload
}) => {
  const [showLoading, setShowLoading] = (0,react.useState)(false);
  const onUploadFile = (files) => BootstrapPackageUploader_async(null, null, function* () {
    setShowLoading(true);
    if (!files || files.length === 0) {
      setShowLoading(false);
      return;
    }
    const file = files[0];
    if (!file.name.includes(".pkg")) {
      ToastNotification/* notify */.me.error(UPLOAD_ERROR_MESSAGES.wrongType.message);
      setShowLoading(false);
      return;
    }
    try {
      yield mdm/* default */.A.uploadBootstrapPackage(file, currentTeamId);
      ToastNotification/* notify */.me.success("Successfully uploaded.");
      onUpload();
    } catch (e) {
      const error = e;
      const errMessage = getErrorMessage(error);
      ToastNotification/* notify */.me.error(errMessage, { response: e });
    } finally {
      setShowLoading(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      message: "Package (.pkg)",
      graphicName: "file-pkg",
      accept: ".pkg",
      onFileUpload: onUploadFile,
      isLoading: showLoading
    }
  );
};
/* harmony default export */ var BootstrapPackageUploader_BootstrapPackageUploader = (BootstrapPackageUploader);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapPackageUploader/index.ts



// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/DeleteBootstrapPackageModal/DeleteBootstrapPackageModal.tsx




const DeleteBootstrapPackageModal_baseClass = "delete-bootstrap-package-modal";
const DeleteBootstrapPackageModal = ({
  onCancel,
  onDelete
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteBootstrapPackageModal_baseClass,
      title: "Delete bootstrap package",
      onExit: onCancel,
      onEnter: () => onDelete()
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Package won't be uninstalled from existing macOS hosts. Installs or uninstalls currently running on a host will still complete."), /* @__PURE__ */ react.createElement("p", null, "Option to install Fleet's agent (fleetd) manually will be disabled, so agent will be installed automatically during automatic enollment of macOS hosts."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: () => onDelete(), variant: "alert" }, "Delete"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeleteBootstrapPackageModal_DeleteBootstrapPackageModal = (DeleteBootstrapPackageModal);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/DeleteBootstrapPackageModal/index.ts



// EXTERNAL MODULE: ./frontend/components/UploadList/index.ts + 1 modules
var UploadList = __webpack_require__(67050);
// EXTERNAL MODULE: ./frontend/components/Graphic/index.ts
var Graphic = __webpack_require__(20881);
// EXTERNAL MODULE: ./frontend/router/url_prefix.ts
var url_prefix = __webpack_require__(67409);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapPackageListItem/BootstrapPackageListItem.tsx








const BootstrapPackageListItem_baseClass = "bootstrap-package-list-item";
const DownloadPackageButton = ({ url, token, className }) => {
  return /* @__PURE__ */ react.createElement(
    "form",
    {
      key: "form",
      method: "GET",
      action: url,
      target: "_self",
      className
    },
    /* @__PURE__ */ react.createElement("input", { type: "hidden", name: "token", value: token || "" }),
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        type: "submit",
        className: `${BootstrapPackageListItem_baseClass}__list-item-button`,
        icon: "download",
        ariaLabel: "Download bootstrap package"
      }
    )
  );
};
const BootstrapPackageListItem = ({
  bootstrapPackage,
  onDelete
}) => {
  const { origin } = __webpack_require__.g.window.location;
  const path = `${endpoints/* default */.A.MDM_BOOTSTRAP_PACKAGE}`;
  const url = `${origin}${url_prefix/* default */.A}/api${path}`;
  return /* @__PURE__ */ react.createElement("div", { className: BootstrapPackageListItem_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${BootstrapPackageListItem_baseClass}__value-group ${BootstrapPackageListItem_baseClass}__list-item-data` }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-pkg" }), /* @__PURE__ */ react.createElement("div", { className: `${BootstrapPackageListItem_baseClass}__list-item-info` }, /* @__PURE__ */ react.createElement("span", { className: `${BootstrapPackageListItem_baseClass}__list-item-name` }, bootstrapPackage.name), /* @__PURE__ */ react.createElement("span", { className: `${BootstrapPackageListItem_baseClass}__list-item-uploaded` }, `Uploaded ${(0,date_format/* timeAgo */.fF)(new Date(bootstrapPackage.created_at), {
    addSuffix: true
  })}`))), /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${BootstrapPackageListItem_baseClass}__value-group ${BootstrapPackageListItem_baseClass}__list-item-actions`
    },
    /* @__PURE__ */ react.createElement(
      DownloadPackageButton,
      {
        className: `${BootstrapPackageListItem_baseClass}__list-item-button`,
        url,
        token: bootstrapPackage.token
      }
    ),
    /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disabled) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            className: `${BootstrapPackageListItem_baseClass}__list-item-button`,
            variant: "subdued",
            disabled,
            onClick: () => onDelete(bootstrapPackage),
            icon: "trash",
            ariaLabel: "Delete bootstrap package"
          }
        )
      }
    )
  ));
};
/* harmony default export */ var BootstrapPackageListItem_BootstrapPackageListItem = (BootstrapPackageListItem);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapPackageListItem/index.ts



// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/StatusIndicatorWithIcon/index.ts
var StatusIndicatorWithIcon = __webpack_require__(59555);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/interfaces/mdm.ts
var interfaces_mdm = __webpack_require__(42550);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapPackageTable/BootstrapPackageTableConfig.tsx







const COLUMN_CONFIGS = [
  {
    title: "Status",
    Header: "Status",
    disableSortBy: true,
    accessor: "status",
    Cell: ({ cell: { value } }) => {
      const tooltipProp = value.tooltip ? { tooltipText: value.tooltip } : void 0;
      return /* @__PURE__ */ react.createElement(
        StatusIndicatorWithIcon/* default */.A,
        {
          status: value.statusName,
          value: value.displayName,
          tooltip: tooltipProp
        }
      );
    }
  },
  {
    title: "Hosts",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: cellProps.column.title,
        isSortedDesc: cellProps.column.isSortedDesc,
        disableSortBy: false
      }
    ),
    accessor: "hosts",
    Cell: ({ cell: { value: aggregateCount } }) => {
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: aggregateCount, formatter: (val) => /* @__PURE__ */ react.createElement(react.Fragment, null, val) });
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
          className: "view-hosts-link",
          queryParams: {
            macos_bootstrap_package: cellProps.row.original.status.value,
            fleet_id: cellProps.row.original.teamId
          },
          rowHover: true
        }
      ));
    }
  }
];
const STATUS_CELL_VALUES = {
  installed: {
    displayName: "Installed",
    statusName: "success",
    value: interfaces_mdm/* BootstrapPackageStatus */.z$.INSTALLED,
    tooltip: "The host installed the package."
  },
  pending: {
    displayName: "Pending",
    statusName: "pendingPartial",
    value: interfaces_mdm/* BootstrapPackageStatus */.z$.PENDING,
    tooltip: "The host will install the package when it enrolls."
  },
  failed: {
    displayName: "Failed",
    statusName: "error",
    value: interfaces_mdm/* BootstrapPackageStatus */.z$.FAILED,
    tooltip: "The host failed to install the package when it enrolled."
  }
};
const generateTableData = (data, currentTeamId) => {
  if (!data) return [];
  const entries = Object.entries(data);
  return entries.map(([status, numHosts]) => ({
    status: STATUS_CELL_VALUES[status],
    hosts: numHosts,
    teamId: currentTeamId
  }));
};

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/BootstrapPackageTable/BootstrapPackageTable.tsx








const BootstrapPackageTable_baseClass = "bootstrap-package-table";
const DEFAULT_SORT_HEADER = "hosts";
const DEFAULT_SORT_DIRECTION = "asc";
const BootstrapPackageTable = ({
  currentTeamId
}) => {
  const { data: bootstrapPackageAggregate, isLoading, isError } = (0,es.useQuery)(
    ["bootstrap-package-summary", currentTeamId],
    () => mdm/* default */.A.getBootstrapPackageAggregate(currentTeamId),
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  );
  const tableData = generateTableData(bootstrapPackageAggregate, currentTeamId);
  if (isError) return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: BootstrapPackageTable_baseClass,
      columnConfigs: COLUMN_CONFIGS,
      data: tableData,
      resultsTitle: "",
      isLoading,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      defaultSortHeader: DEFAULT_SORT_HEADER,
      defaultSortDirection: DEFAULT_SORT_DIRECTION,
      disableTableHeader: true,
      disablePagination: true,
      disableCount: true,
      hideFooter: true,
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No bootstrap package status",
          info: "Expecting to status data? Try again in a few seconds as the system\r\n              catches up."
        }
      )
    }
  );
};
/* harmony default export */ var BootstrapPackageTable_BootstrapPackageTable = (BootstrapPackageTable);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/UploadedPackageView/UploadedPackageView.tsx






const UploadedPackageView_baseClass = "uploaded-package-view";
const UploadedPackageView = ({
  bootstrapPackage,
  currentTeamId,
  onDelete
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: UploadedPackageView_baseClass }, /* @__PURE__ */ react.createElement(BootstrapPackageTable_BootstrapPackageTable, { currentTeamId }), /* @__PURE__ */ react.createElement("p", null, "This package is automatically installed on macOS hosts that automatically enroll to this fleet. Delete the package to upload a new one.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: "https://fleetdm.com/learn-more-about/setup-experience/bootstrap-package",
      text: "Learn more",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement(
    UploadList/* default */.A,
    {
      keyAttribute: "name",
      listItems: [bootstrapPackage],
      ListItemComponent: ({ listItem }) => /* @__PURE__ */ react.createElement(
        BootstrapPackageListItem_BootstrapPackageListItem,
        {
          bootstrapPackage: listItem,
          onDelete
        }
      )
    }
  ));
};
/* harmony default export */ var UploadedPackageView_UploadedPackageView = (UploadedPackageView);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/components/UploadedPackageView/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/BootstrapPackage.tsx

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
var BootstrapPackage_async = (__this, __arguments, generator) => {
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






















const BootstrapPackage_baseClass = "bootstrap-package";
const PER_PAGE_SIZE = 3e3;
const BootstrapPackage = ({
  currentTeamId,
  router
}) => {
  const [
    selectedManualAgentInstall,
    setSelectedManualAgentInstall
  ] = (0,react.useState)(false);
  const [
    showDeleteBootstrapPackageModal,
    setShowDeleteBootstrapPackageModal
  ] = (0,react.useState)(false);
  const { data: macSoftwareTitles, isLoading: isLoadingSoftware } = (0,es.useQuery)(
    ["install-software", currentTeamId],
    () => mdm/* default */.A.getSetupExperienceSoftware({
      platform: "macos",
      fleet_id: currentTeamId,
      per_page: PER_PAGE_SIZE
    }),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      select: (res) => res.software_titles
    })
  );
  const { data: script, isLoading: isLoadingScript } = (0,es.useQuery)(
    ["setup-experience-script", currentTeamId],
    () => mdm/* default */.A.getSetupExperienceScript(currentTeamId),
    __spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  const {
    data: globalConfig,
    isLoading: isLoadingGlobalConfig,
    refetch: refetchGlobalConfig
  } = (0,es.useQuery)(
    ["config", currentTeamId],
    () => entities_config/* default */.A.loadAll(),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      onSuccess: (data) => {
        if (currentTeamId === team/* API_NO_TEAM_ID */.Rp) {
          setSelectedManualAgentInstall(
            helpers(currentTeamId, data)
          );
        }
      }
    })
  );
  const {
    isLoading: isLoadingTeamConfig,
    refetch: refetchTeamConfig
  } = (0,es.useQuery)(
    ["team", currentTeamId],
    () => teams/* default */.A.load(currentTeamId),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: currentTeamId !== team/* API_NO_TEAM_ID */.Rp,
      select: (res) => res.fleet,
      onSuccess: (data) => {
        setSelectedManualAgentInstall(
          helpers(currentTeamId, void 0, data)
        );
      }
    })
  );
  const {
    data: bootstrapMetadata,
    isLoading: isloadingBootstrapMetadata,
    error: errorBootstrapMetadata,
    refetch: refretchBootstrapMetadata
  } = (0,es.useQuery)(
    ["bootstrap-metadata", currentTeamId],
    () => mdm/* default */.A.getBootstrapPackageMetadata(currentTeamId),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      cacheTime: 0
    })
  );
  const onUpload = () => {
    refretchBootstrapMetadata();
  };
  const onDelete = () => BootstrapPackage_async(null, null, function* () {
    try {
      yield mdm/* default */.A.deleteBootstrapPackage(currentTeamId);
      yield mdm/* default */.A.updateSetupExperienceSettings({
        fleet_id: currentTeamId,
        macos_manual_agent_install: false
      });
      ToastNotification/* notify */.me.success("Successfully deleted.");
    } catch (err) {
      ToastNotification/* notify */.me.error("Couldn't delete. Please try again.", { response: err });
    } finally {
      setShowDeleteBootstrapPackageModal(false);
      refretchBootstrapMetadata();
      if (currentTeamId !== team/* API_NO_TEAM_ID */.Rp) {
        refetchTeamConfig();
      } else {
        refetchGlobalConfig();
      }
    }
  });
  const noPackageUploaded = errorBootstrapMetadata && errorBootstrapMetadata.status === 404 || !bootstrapMetadata;
  const hasSetupExperienceInstallSoftware = getInstallSoftwareDuringSetupCount(macSoftwareTitles) !== 0;
  const hasSetupExperienceScript = !!script;
  const renderBootstrapView = () => {
    const bootstrapPackageView = noPackageUploaded ? /* @__PURE__ */ react.createElement(BootstrapPackageUploader_BootstrapPackageUploader, { currentTeamId, onUpload }) : /* @__PURE__ */ react.createElement(
      UploadedPackageView_UploadedPackageView,
      {
        bootstrapPackage: bootstrapMetadata,
        currentTeamId,
        onDelete: () => setShowDeleteBootstrapPackageModal(true)
      }
    );
    return /* @__PURE__ */ react.createElement(react.Fragment, null, bootstrapPackageView, /* @__PURE__ */ react.createElement(
      BootstrapAdvancedOptions_BootstrapAdvancedOptions,
      {
        currentTeamId,
        disableInstallManually: noPackageUploaded || hasSetupExperienceInstallSoftware || hasSetupExperienceScript,
        selectManualAgentInstall: selectedManualAgentInstall,
        onChange: (manualAgentInstall) => {
          setSelectedManualAgentInstall(manualAgentInstall);
        }
      }
    ));
  };
  const isLoading = isloadingBootstrapMetadata || isLoadingGlobalConfig || isLoadingTeamConfig || isLoadingScript || isLoadingSoftware;
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    const mdmNotConfigured = !((globalConfig == null ? void 0 : globalConfig.mdm.enabled_and_configured) && (globalConfig == null ? void 0 : globalConfig.mdm.apple_bm_enabled_and_configured));
    if (mdmNotConfigured) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "form",
          header: "Additional configuration required",
          info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Turn on MDM and automatic enrollment to deploy a custom bootstrap package.", /* @__PURE__ */ react.createElement("br", null), "Supported on macOS."),
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      );
    }
    return renderBootstrapView();
  };
  return /* @__PURE__ */ react.createElement("section", { className: BootstrapPackage_baseClass }, /* @__PURE__ */ react.createElement(
    SectionHeader/* default */.A,
    {
      title: "Bootstrap package",
      details: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/setup-experience/bootstrap-package`,
          text: "Preview end user experience"
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: "Upload a bootstrap package to install a configuration management tool (e.g. Munki, Chef, or Puppet) on macOS hosts that automatically enroll to Fleet."
    }
  ), /* @__PURE__ */ react.createElement(SetupExperienceContentContainer_SetupExperienceContentContainer, null, renderContent()), showDeleteBootstrapPackageModal && /* @__PURE__ */ react.createElement(
    DeleteBootstrapPackageModal_DeleteBootstrapPackageModal,
    {
      onDelete,
      onCancel: () => setShowDeleteBootstrapPackageModal(false)
    }
  ));
};
/* harmony default export */ var BootstrapPackage_BootstrapPackage = (BootstrapPackage);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/BootstrapPackage/index.ts



// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var interfaces_platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/components/MDM/AndroidLatestVersionWithTooltip/index.ts + 1 modules
var AndroidLatestVersionWithTooltip = __webpack_require__(48571);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/SoftwareNameCell/index.ts
var SoftwareNameCell = __webpack_require__(81790);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/components/InstallSoftwareTable/InstallSoftwareTableConfig.tsx

var InstallSoftwareTableConfig_defProp = Object.defineProperty;
var InstallSoftwareTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var InstallSoftwareTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var InstallSoftwareTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var InstallSoftwareTableConfig_defNormalProp = (obj, key, value) => key in obj ? InstallSoftwareTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var InstallSoftwareTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (InstallSoftwareTableConfig_hasOwnProp.call(b, prop))
      InstallSoftwareTableConfig_defNormalProp(a, prop, b[prop]);
  if (InstallSoftwareTableConfig_getOwnPropSymbols)
    for (var prop of InstallSoftwareTableConfig_getOwnPropSymbols(b)) {
      if (InstallSoftwareTableConfig_propIsEnum.call(b, prop))
        InstallSoftwareTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};









const getSetupExperienceLinuxPackageCopy = (source) => {
  switch (source) {
    case "rpm_packages":
      return "rpm";
    case "deb_packages":
      return "deb";
    case "tgz_packages":
      return "tar";
    default:
      return null;
  }
};
const generateTableConfig = (platform, onSelectSoftware, manualAgentInstallBlockingSoftware = false) => {
  const headerConfigs = [
    {
      id: "selection",
      disableSortBy: true,
      Cell: (cellProps) => {
        const { checked } = cellProps.row.getToggleRowSelectedProps();
        const checkboxProps = {
          value: checked,
          onChange: () => {
            onSelectSoftware(!checked, cellProps.row.original.id);
            cellProps.row.toggleRowSelected();
          }
        };
        return /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            position: "right",
            tipOffset: 6,
            fixedPositionStrategy: true,
            renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
              Checkbox/* default */.A,
              InstallSoftwareTableConfig_spreadValues({
                disabled: disableChildren || manualAgentInstallBlockingSoftware
              }, checkboxProps)
            )
          }
        );
      }
    },
    {
      Header: "Name",
      disableSortBy: true,
      id: "name",
      // `disableSortBy` doesn't stop TableContainer's default sort header from
      // ordering this column, so the sort key has to be the rendered string.
      accessor: (originalRow) => (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(originalRow.name, originalRow.display_name),
      // The search box filters this column, which now holds the display name;
      // keep the raw name matchable so packages stay findable by filename.
      filter: (rows, _columnIds, query) => {
        const q = String(query).toLowerCase();
        return rows.filter(
          ({ original }) => [
            (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(original.name, original.display_name),
            original.name
          ].some((field) => field.toLowerCase().includes(q))
        );
      },
      Cell: (cellProps) => {
        const { name, display_name, source, icon_url } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(
          SoftwareNameCell/* default */.A,
          {
            name,
            display_name,
            source,
            iconUrl: icon_url
          }
        );
      },
      sortType: "caseInsensitive"
    },
    {
      id: "version",
      Header: () => /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "For custom packages, the first", /* @__PURE__ */ react.createElement("br", null), "added version will be installed.")
        },
        "Version"
      ),
      disableSortBy: true,
      Cell: (cellProps) => {
        var _a, _b, _c;
        if (platform === "android") {
          const androidPlayStoreId = (_a = cellProps.row.original.app_store_app) == null ? void 0 : _a.app_store_id;
          return /* @__PURE__ */ react.createElement(
            TextCell/* default */.A,
            {
              value: /* @__PURE__ */ react.createElement(
                AndroidLatestVersionWithTooltip/* default */.A,
                {
                  androidPlayStoreId: androidPlayStoreId || ""
                }
              )
            }
          );
        }
        const title = cellProps.row.original;
        let displayedVersion = ((_b = title.software_package) == null ? void 0 : _b.version) || ((_c = title.app_store_app) == null ? void 0 : _c.version);
        if (platform === "linux") {
          const packageTypeCopy = getSetupExperienceLinuxPackageCopy(
            title.source
          );
          if (packageTypeCopy) {
            displayedVersion = (displayedVersion != null ? displayedVersion : constants/* DEFAULT_EMPTY_CELL_VALUE */.r2).concat(` (.${packageTypeCopy})`);
          }
        }
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: displayedVersion });
      },
      sortType: "caseInsensitive"
    }
  ];
  return headerConfigs;
};
/* harmony default export */ var InstallSoftwareTableConfig = (generateTableConfig);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/components/InstallSoftwareTable/InstallSoftwareTable.tsx





const DEFAULT_PAGE_SIZE = 10;
const InstallSoftwareTable_baseClass = "select-software-table";
const generateHelpText = (platform) => {
  switch (platform) {
    case "windows":
      return "Policies are checked before install. Currently, custom targets (labels) don't apply during setup experience.";
    case "linux":
      return "Policies are checked before software is installed on compatible platforms. Currently, custom targets (labels) don't apply during setup experience.";
    default:
      return "Software will be installed on all hosts. Currently, custom targets (labels) don't apply during setup experience.";
  }
};
const generateSelectedRows = (softwareTitles) => {
  return softwareTitles.reduce((acc, software) => {
    var _a, _b;
    if (((_a = software.software_package) == null ? void 0 : _a.install_during_setup) || ((_b = software.app_store_app) == null ? void 0 : _b.install_during_setup)) {
      if (software.id != null) {
        acc[String(software.id)] = true;
      }
    }
    return acc;
  }, {});
};
const InstallSoftwareTable = ({
  softwareTitles,
  onChangeSoftwareSelect,
  platform,
  renderCustomCount,
  manualAgentInstallBlockingSoftware = false
}) => {
  const tableConfig = (0,react.useMemo)(() => {
    return InstallSoftwareTableConfig(
      platform,
      onChangeSoftwareSelect,
      manualAgentInstallBlockingSoftware
    );
  }, [onChangeSoftwareSelect, platform, manualAgentInstallBlockingSoftware]);
  const initialSelectedSoftwareRows = (0,react.useMemo)(() => {
    return generateSelectedRows(softwareTitles);
  }, [softwareTitles]);
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: InstallSoftwareTable_baseClass,
      data: softwareTitles,
      columnConfigs: tableConfig,
      isLoading: false,
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No software available",
          info: " There are no results to your query.",
          className: InstallSoftwareTable_baseClass
        }
      ),
      renderCount: renderCustomCount,
      defaultSelectedRows: initialSelectedSoftwareRows,
      showMarkAllPages: true,
      isAllPagesSelected: false,
      persistSelectedRows: true,
      isClientSidePagination: true,
      pageSize: DEFAULT_PAGE_SIZE,
      searchable: true,
      searchQueryColumn: "name",
      isClientSideFilter: true,
      renderTableHelpText: () => /* @__PURE__ */ react.createElement("p", { className: `${InstallSoftwareTable_baseClass}__help-text` }, generateHelpText(platform)),
      suppressHeaderActions: true
    }
  );
};
/* harmony default export */ var InstallSoftwareTable_InstallSoftwareTable = (InstallSoftwareTable);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/components/InstallSoftwareTable/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/components/InstallSoftwareForm/InstallSoftwareForm.tsx

var InstallSoftwareForm_defProp = Object.defineProperty;
var InstallSoftwareForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var InstallSoftwareForm_hasOwnProp = Object.prototype.hasOwnProperty;
var InstallSoftwareForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var InstallSoftwareForm_defNormalProp = (obj, key, value) => key in obj ? InstallSoftwareForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var InstallSoftwareForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (InstallSoftwareForm_hasOwnProp.call(b, prop))
      InstallSoftwareForm_defNormalProp(a, prop, b[prop]);
  if (InstallSoftwareForm_getOwnPropSymbols)
    for (var prop of InstallSoftwareForm_getOwnPropSymbols(b)) {
      if (InstallSoftwareForm_propIsEnum.call(b, prop))
        InstallSoftwareForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var InstallSoftwareForm_async = (__this, __arguments, generator) => {
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














const InstallSoftwareForm_baseClass = "install-software-form";
const manuallyInstallTooltipText = /* @__PURE__ */ react.createElement(react.Fragment, null, "Disabled because you manually install Fleet's agent (", /* @__PURE__ */ react.createElement("b", null, "Bootstrap package ", ">", " Advanced options"), "). Use your bootstrap package to install software during the setup experience.");
const initializeSelectedSoftwareIds = (softwareTitles) => {
  return softwareTitles.reduce((acc, software) => {
    var _a, _b;
    if (((_a = software.software_package) == null ? void 0 : _a.install_during_setup) || ((_b = software.app_store_app) == null ? void 0 : _b.install_during_setup)) {
      acc.push(software.id);
    }
    return acc;
  }, []);
};
const getAddSoftwareUrl = (platform, teamId) => {
  let path = "";
  switch (platform) {
    case "ios":
    case "ipados":
    case "android":
      path = paths/* default */.A.SOFTWARE_ADD_APP_STORE;
      break;
    case "linux":
      path = paths/* default */.A.SOFTWARE_ADD_PACKAGE;
      break;
    default:
      path = paths/* default */.A.SOFTWARE_ADD_FLEET_MAINTAINED;
  }
  const params = InstallSoftwareForm_spreadValues({
    fleet_id: teamId
  }, platform === "android" && { platform });
  return `${path}?${(0,url/* buildQueryStringFromParams */.IM)(params)}`;
};
const InstallSoftwareForm = ({
  currentTeamId,
  hasManualAgentInstall,
  softwareTitles,
  platform,
  savedRequireAllSoftwareMacOS,
  savedRequireAllSoftwareWindows,
  isWindowsMdmEnabled = false,
  router,
  refetchSoftwareTitles
}) => {
  const noSoftwareUploaded = hasNoSoftwareUploaded(softwareTitles);
  const [requireAllSoftwareMacOS, setRequireAllSoftwareMacOS] = (0,react.useState)(
    savedRequireAllSoftwareMacOS != null ? savedRequireAllSoftwareMacOS : false
  );
  const [requireAllSoftwareWindows, setRequireAllSoftwareWindows] = (0,react.useState)(
    savedRequireAllSoftwareWindows != null ? savedRequireAllSoftwareWindows : false
  );
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const initialSelectedSoftware = (0,react.useMemo)(
    () => softwareTitles ? initializeSelectedSoftwareIds(softwareTitles) : [],
    [softwareTitles]
  );
  const [touchedRequireAll, setTouchedRequireAll] = (0,react.useState)(false);
  const handleChangeRequireAllMacOS = (value) => {
    setRequireAllSoftwareMacOS(value);
    setTouchedRequireAll(true);
  };
  const handleChangeRequireAllWindows = (value) => {
    setRequireAllSoftwareWindows(value);
    setTouchedRequireAll(true);
  };
  const [selectedSoftwareIds, setSelectedSoftwareIds] = (0,react.useState)(
    initialSelectedSoftware
  );
  const installSoftwareDuringSetupCount = selectedSoftwareIds.length;
  const onChangeSoftwareSelect = (0,react.useCallback)((select, id) => {
    setSelectedSoftwareIds((prev) => {
      if (select) {
        if (prev.includes(id)) return prev;
        return [...prev, id];
      }
      return prev.filter((selectedId) => selectedId !== id);
    });
  }, []);
  const isSoftwareSelectionDirty = (0,react.useMemo)(
    () => !(0,lodash.isEqual)(
      selectedSoftwareIds.slice().sort(),
      initialSelectedSoftware.slice().sort()
    ),
    [selectedSoftwareIds, initialSelectedSoftware]
  );
  const shouldUpdateSoftware = isSoftwareSelectionDirty;
  const shouldUpdateRequireAll = (platform === "macos" || platform === "windows") && touchedRequireAll;
  const onClickSave = (evt) => InstallSoftwareForm_async(null, null, function* () {
    evt.preventDefault();
    if (!softwareTitles) return;
    setIsSaving(true);
    const errorToasts = [];
    let hadSuccess = false;
    if (shouldUpdateSoftware) {
      try {
        yield mdm/* default */.A.updateSetupExperienceSoftware(
          platform,
          currentTeamId,
          selectedSoftwareIds
        );
        hadSuccess = true;
      } catch (e) {
        errorToasts.push({
          variant: "error",
          message: "Couldn't save software. Please try again.",
          options: { response: e }
        });
      }
    }
    if (shouldUpdateRequireAll) {
      try {
        if (platform === "windows") {
          yield mdm/* default */.A.updateRequireAllSoftwareWindows(
            currentTeamId,
            requireAllSoftwareWindows
          );
        } else {
          yield mdm/* default */.A.updateRequireAllSoftwareMacOS(
            currentTeamId,
            requireAllSoftwareMacOS
          );
        }
        hadSuccess = true;
        setTouchedRequireAll(false);
      } catch (e) {
        errorToasts.push({
          variant: "error",
          message: "Couldn't update 'Cancel setup if software fails'. Please try again.",
          options: { response: e }
        });
      }
    }
    if (errorToasts.length > 0) {
      ToastNotification/* notify */.me.batch(errorToasts);
    } else if (hadSuccess) {
      ToastNotification/* notify */.me.success("Successfully updated.");
    }
    refetchSoftwareTitles();
    setIsSaving(false);
  });
  const renderCustomCount = () => {
    let orderTooltip;
    if (platform === "android") {
      orderTooltip = "Software order will vary.";
    } else if (platform === "windows" || platform === "linux") {
      orderTooltip = "Installation order will depend on software name (0-9, then A-Z). Software without a policy is installed first, then software with a policy.";
    } else {
      orderTooltip = "Installation order will depend on software name, starting with 0-9 then A-Z.";
    }
    return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("strong", null, installSoftwareDuringSetupCount, " software item", installSoftwareDuringSetupCount !== 1 && "s"), " ", "will be", " ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: orderTooltip }, "installed during setup"), ".");
  };
  const manualAgentInstallBlockingSoftware = hasManualAgentInstall && (0,interfaces_platform/* isMacOS */.U0)(platform);
  const onClickAddSoftware = (evt) => {
    evt.preventDefault();
    router.push(getAddSoftwareUrl(platform, currentTeamId));
  };
  const renderEmptyState = () => {
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        className: `${InstallSoftwareForm_baseClass}__empty-table`,
        header: "No software available to install",
        primaryButton: /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            className: `${InstallSoftwareForm_baseClass}__button`,
            onClick: onClickAddSoftware
          },
          "Add software"
        )
      }
    );
  };
  if (noSoftwareUploaded || !softwareTitles) {
    return /* @__PURE__ */ react.createElement("div", { className: InstallSoftwareForm_baseClass }, renderEmptyState());
  }
  return /* @__PURE__ */ react.createElement("div", { className: InstallSoftwareForm_baseClass }, /* @__PURE__ */ react.createElement("form", { onSubmit: onClickSave }, /* @__PURE__ */ react.createElement(
    InstallSoftwareTable_InstallSoftwareTable,
    {
      softwareTitles,
      onChangeSoftwareSelect,
      platform,
      renderCustomCount,
      manualAgentInstallBlockingSoftware
    }
  ), platform === "macos" && /* @__PURE__ */ react.createElement("div", { className: `${InstallSoftwareForm_baseClass}__macos_options` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 6,
      position: "left",
      entityType: "software",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren || manualAgentInstallBlockingSoftware,
          value: requireAllSoftwareMacOS,
          onChange: handleChangeRequireAllMacOS
        },
        /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: "If any software fails, the end user will be prompted to restart setup. Remaining software installs will be canceled.",
            disableTooltip: disableChildren
          },
          "Cancel setup if software fails"
        )
      )
    }
  )), platform === "windows" && /* @__PURE__ */ react.createElement("div", { className: `${InstallSoftwareForm_baseClass}__windows_options` }, /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 6,
      position: "left",
      entityType: "software",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          disabled: disableChildren || !isWindowsMdmEnabled,
          value: requireAllSoftwareWindows,
          onChange: handleChangeRequireAllWindows
        },
        /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: isWindowsMdmEnabled ? "For hosts that automatically enroll, if any software fails, the end user will be prompted to restart setup. Remaining software installs will be canceled." : "Turn on Windows MDM to use this option.",
            disableTooltip: disableChildren
          },
          "Cancel setup if software fails"
        )
      )
    }
  )), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      tipOffset: 6,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          className: "select-software-table__manual-install-tooltip",
          tipContent: manuallyInstallTooltipText,
          disableTooltip: disableChildren || !manualAgentInstallBlockingSoftware,
          position: "top",
          showArrow: true,
          underline: false,
          tipOffset: 12
        },
        /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            disabled: disableChildren || isSaving || manualAgentInstallBlockingSoftware,
            isLoading: isSaving,
            type: "submit"
          },
          "Save"
        )
      )
    }
  )));
};
/* harmony default export */ var InstallSoftwareForm_InstallSoftwareForm = (InstallSoftwareForm);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/components/InstallSoftwareForm/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/InstallSoftware.tsx

var InstallSoftware_defProp = Object.defineProperty;
var InstallSoftware_defProps = Object.defineProperties;
var InstallSoftware_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var InstallSoftware_getOwnPropSymbols = Object.getOwnPropertySymbols;
var InstallSoftware_hasOwnProp = Object.prototype.hasOwnProperty;
var InstallSoftware_propIsEnum = Object.prototype.propertyIsEnumerable;
var InstallSoftware_defNormalProp = (obj, key, value) => key in obj ? InstallSoftware_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var InstallSoftware_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (InstallSoftware_hasOwnProp.call(b, prop))
      InstallSoftware_defNormalProp(a, prop, b[prop]);
  if (InstallSoftware_getOwnPropSymbols)
    for (var prop of InstallSoftware_getOwnPropSymbols(b)) {
      if (InstallSoftware_propIsEnum.call(b, prop))
        InstallSoftware_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var InstallSoftware_spreadProps = (a, b) => InstallSoftware_defProps(a, InstallSoftware_getOwnPropDescs(b));























const InstallSoftware_baseClass = "install-software";
const InstallSoftware_PER_PAGE_SIZE = 3e3;
const PLATFORM_BY_INDEX = [
  "macos",
  "windows",
  "linux",
  "ios",
  "ipados",
  "android"
];
const InstallSoftware = ({
  currentTeamId,
  router,
  urlPlatformParam
}) => {
  const isValidPlatform = (0,interfaces_platform/* isSetupExperiencePlatform */.lI)(urlPlatformParam);
  const selectedPlatform = urlPlatformParam;
  const {
    data: softwareTitles,
    isLoading: isLoadingSoftwareTitles,
    isError,
    refetch: refetchSoftwareTitles
  } = (0,es.useQuery)(
    ["install-software", currentTeamId, selectedPlatform],
    () => mdm/* default */.A.getSetupExperienceSoftware({
      platform: selectedPlatform,
      fleet_id: currentTeamId,
      per_page: InstallSoftware_PER_PAGE_SIZE
    }),
    InstallSoftware_spreadProps(InstallSoftware_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      select: (res) => res.software_titles,
      enabled: isValidPlatform
    })
  );
  const { data: globalConfig, isLoading: isLoadingGlobalConfig } = (0,es.useQuery)(["config", currentTeamId], () => entities_config/* default */.A.loadAll(), InstallSoftware_spreadProps(InstallSoftware_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    enabled: isValidPlatform
  }));
  const { data: teamConfig, isLoading: isLoadingTeamConfig } = (0,es.useQuery)(["team", currentTeamId], () => teams/* default */.A.load(currentTeamId), InstallSoftware_spreadProps(InstallSoftware_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    enabled: isValidPlatform && currentTeamId !== team/* API_NO_TEAM_ID */.Rp,
    select: (res) => res.fleet
  }));
  const handleTabChange = (0,react.useCallback)(
    (index) => {
      const newPlatform = PLATFORM_BY_INDEX[index];
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.CONTROLS_INSTALL_SOFTWARE(newPlatform), {
          fleet_id: currentTeamId
        })
      );
    },
    [router]
  );
  if (!isValidPlatform) {
    router.replace(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.CONTROLS_INSTALL_SOFTWARE("macos"), {
        fleet_id: currentTeamId
      })
    );
  }
  const hasManualAgentInstall = helpers(
    currentTeamId,
    globalConfig,
    teamConfig
  );
  const isAndroidMdmEnabled = globalConfig == null ? void 0 : globalConfig.mdm.android_enabled_and_configured;
  const isWindowsMdmEnabled = globalConfig == null ? void 0 : globalConfig.mdm.windows_enabled_and_configured;
  const isLoadingConfig = isLoadingGlobalConfig || isLoadingTeamConfig;
  const renderTabContent = (platform) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (isLoadingSoftwareTitles) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (softwareTitles || softwareTitles === null) {
      const appleMdmAndAbmEnabled = (globalConfig == null ? void 0 : globalConfig.mdm.enabled_and_configured) && (globalConfig == null ? void 0 : globalConfig.mdm.apple_bm_enabled_and_configured);
      const turnOnAppleMdm = (platform === "macos" || platform === "ios" || platform === "ipados") && !appleMdmAndAbmEnabled;
      const turnOnAndroidMdm = platform === "android" && !isAndroidMdmEnabled;
      const turnOnMdm = turnOnAppleMdm || turnOnAndroidMdm;
      return turnOnMdm ? /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: platform === "android" ? "Turn on Android MDM" : "Additional configuration required",
          info: platform === "android" ? "Turn on MDM to install software during setup experience." : "Turn on MDM and automatic enrollment to install software during setup experience.",
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      ) : /* @__PURE__ */ react.createElement(
        InstallSoftwareForm_InstallSoftwareForm,
        {
          currentTeamId,
          hasManualAgentInstall,
          softwareTitles,
          platform,
          savedRequireAllSoftwareMacOS: currentTeamId ? (_b = (_a = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _a.setup_experience) == null ? void 0 : _b.require_all_software_macos : (_d = (_c = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _c.setup_experience) == null ? void 0 : _d.require_all_software_macos,
          savedRequireAllSoftwareWindows: currentTeamId ? (_f = (_e = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _e.setup_experience) == null ? void 0 : _f.require_all_software_windows : (_h = (_g = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _g.setup_experience) == null ? void 0 : _h.require_all_software_windows,
          isWindowsMdmEnabled: !!isWindowsMdmEnabled,
          router,
          refetchSoftwareTitles
        }
      );
    }
    return null;
  };
  return /* @__PURE__ */ react.createElement("section", { className: InstallSoftware_baseClass }, /* @__PURE__ */ react.createElement(
    SectionHeader/* default */.A,
    {
      title: "Install software",
      details: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/setup-experience/install-software`,
          text: "Preview end user experience"
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: selectedPlatform === "macos" ? "Install software on hosts that automatically enroll to Fleet." : "Install software on hosts that enroll to Fleet."
    }
  ), /* @__PURE__ */ react.createElement(SetupExperienceContentContainer_SetupExperienceContentContainer, null, isLoadingConfig ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, null) : /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(
    esm/* Tabs */.tU,
    {
      selectedIndex: PLATFORM_BY_INDEX.indexOf(selectedPlatform),
      onSelect: handleTabChange
    },
    /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "macOS")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Windows")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Linux")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "iOS")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "iPadOS")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Android"))),
    PLATFORM_BY_INDEX.map((platform) => {
      return /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { key: platform }, renderTabContent(platform));
    })
  ))));
};
/* harmony default export */ var InstallSoftware_InstallSoftware = (InstallSoftware);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/InstallSoftware/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/components/DeleteSetupExperienceScriptModal/DeleteSetupExperienceScriptModal.tsx

var DeleteSetupExperienceScriptModal_async = (__this, __arguments, generator) => {
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





const DeleteSetupExperienceScriptModal_baseClass = "delete-setup-experience-script-modal";
const DeleteSetupExperienceScriptModal = ({
  currentTeamId,
  scriptName,
  onExit,
  onDeleted
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onDelete = () => DeleteSetupExperienceScriptModal_async(null, null, function* () {
    setIsDeleting(true);
    try {
      yield mdm/* default */.A.deleteSetupExperienceScript(currentTeamId);
      ToastNotification/* notify */.me.success("Successfully deleted setup script.");
    } catch (error) {
      ToastNotification/* notify */.me.error("Couldn't delete the setup script. Please try again.", {
        response: error
      });
      console.error(error);
    }
    setIsDeleting(false);
    onDeleted();
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteSetupExperienceScriptModal_baseClass,
      title: "Delete setup script",
      onExit,
      isContentDisabled: isDeleting
    },
    /* @__PURE__ */ react.createElement("p", null, "This action will cancel any pending script execution for", " ", /* @__PURE__ */ react.createElement("b", null, scriptName), "."),
    /* @__PURE__ */ react.createElement("p", null, "If the script is currently running on a host it will still complete, but results won't appear in Fleet."),
    /* @__PURE__ */ react.createElement("p", null, "You cannot undo this action."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        onClick: onDelete,
        variant: "alert",
        isLoading: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteSetupExperienceScriptModal_DeleteSetupExperienceScriptModal = (DeleteSetupExperienceScriptModal);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/components/DeleteSetupExperienceScriptModal/index.ts



// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/components/SetupExperienceScriptCard/SetupExperienceScriptCard.tsx

var SetupExperienceScriptCard_async = (__this, __arguments, generator) => {
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









const SetupExperienceScriptCard_baseClass = "setup-experience-script-card";
const SetupExperienceScriptCard = ({
  script,
  onDelete
}) => {
  const onDownload = () => SetupExperienceScriptCard_async(null, null, function* () {
    var _a;
    try {
      const teamId = (_a = script.team_id) != null ? _a : team/* API_NO_TEAM_ID */.Rp;
      const data = yield mdm/* default */.A.downloadSetupExperienceScript(teamId);
      const date = /* @__PURE__ */ new Date();
      const filename = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}_${script.name}`;
      const file = new __webpack_require__.g.window.File([data], filename);
      FileSaver_default().saveAs(file);
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn't download script. Please try again.", {
        response: e
      });
    }
  });
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "medium", className: SetupExperienceScriptCard_baseClass }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-sh" }), /* @__PURE__ */ react.createElement("div", { className: `${SetupExperienceScriptCard_baseClass}__info` }, /* @__PURE__ */ react.createElement("span", { className: `${SetupExperienceScriptCard_baseClass}__profile-name` }, script.name), /* @__PURE__ */ react.createElement("span", { className: `${SetupExperienceScriptCard_baseClass}__uploaded-at` }, (0,date_format/* uploadedFromNow */.dx)(script.created_at))), /* @__PURE__ */ react.createElement("div", { className: `${SetupExperienceScriptCard_baseClass}__actions` }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${SetupExperienceScriptCard_baseClass}__download-button`,
      variant: "secondary",
      onClick: onDownload,
      icon: "download",
      ariaLabel: "Download script"
    }
  ), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${SetupExperienceScriptCard_baseClass}__delete-button`,
      variant: "secondary",
      onClick: onDelete,
      icon: "trash",
      ariaLabel: "Delete script"
    }
  )));
};
/* harmony default export */ var SetupExperienceScriptCard_SetupExperienceScriptCard = (SetupExperienceScriptCard);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/components/SetupExperienceScriptCard/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/components/SetupExperienceScriptUploader/SetupExperienceScriptUploader.tsx

var SetupExperienceScriptUploader_async = (__this, __arguments, generator) => {
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






const SetupExperienceScriptUploader_baseClass = "setup-experience-script-uploader";
const SetupExperienceScriptUploader = ({
  currentTeamId,
  hasManualAgentInstall,
  onUpload,
  className
}) => {
  const [showLoading, setShowLoading] = (0,react.useState)(false);
  const classNames = classnames_default()(SetupExperienceScriptUploader_baseClass, className);
  const onUploadFile = (files) => SetupExperienceScriptUploader_async(null, null, function* () {
    setShowLoading(true);
    if (!files || files.length === 0) {
      setShowLoading(false);
      return;
    }
    const file = files[0];
    try {
      yield mdm/* default */.A.uploadSetupExperienceScript(file, currentTeamId);
      ToastNotification/* notify */.me.success("Successfully uploaded.");
      onUpload();
    } catch (e) {
      ToastNotification/* notify */.me.error((0,errors/* getErrorReason */.F3)(e), { response: e });
    }
    setShowLoading(false);
  });
  const manuallyInstallTooltipText = /* @__PURE__ */ react.createElement(react.Fragment, null, "Disabled because you manually install Fleet's agent (", /* @__PURE__ */ react.createElement("b", null, "Bootstrap package ", ">", " Advanced options"), "). Use your bootstrap package to install software during the setup experience.");
  return /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      className: classNames,
      message: "Shell (.sh) for macOS",
      graphicName: "file-sh",
      accept: ".sh",
      buttonMessage: "Upload",
      onFileUpload: onUploadFile,
      isLoading: showLoading,
      disabled: hasManualAgentInstall,
      buttonTooltip: hasManualAgentInstall && manuallyInstallTooltipText,
      gitopsCompatible: true
    }
  );
};
/* harmony default export */ var SetupExperienceScriptUploader_SetupExperienceScriptUploader = (SetupExperienceScriptUploader);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/components/SetupExperienceScriptUploader/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/RunScript.tsx

var RunScript_defProp = Object.defineProperty;
var RunScript_defProps = Object.defineProperties;
var RunScript_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var RunScript_getOwnPropSymbols = Object.getOwnPropertySymbols;
var RunScript_hasOwnProp = Object.prototype.hasOwnProperty;
var RunScript_propIsEnum = Object.prototype.propertyIsEnumerable;
var RunScript_defNormalProp = (obj, key, value) => key in obj ? RunScript_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var RunScript_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (RunScript_hasOwnProp.call(b, prop))
      RunScript_defNormalProp(a, prop, b[prop]);
  if (RunScript_getOwnPropSymbols)
    for (var prop of RunScript_getOwnPropSymbols(b)) {
      if (RunScript_propIsEnum.call(b, prop))
        RunScript_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var RunScript_spreadProps = (a, b) => RunScript_defProps(a, RunScript_getOwnPropDescs(b));




















const RunScript_baseClass = "run-script";
const RunScript = ({ currentTeamId, router }) => {
  const [showDeleteScriptModal, setShowDeleteScriptModal] = (0,react.useState)(false);
  const {
    data: script,
    error: scriptError,
    isLoading,
    isError: isScriptError,
    refetch: refetchScript,
    remove: removeScriptFromCache
  } = (0,es.useQuery)(
    ["setup-experience-script", currentTeamId],
    () => mdm/* default */.A.getSetupExperienceScript(currentTeamId),
    RunScript_spreadProps(RunScript_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), { retry: false })
  );
  const { data: globalConfig, isLoading: isLoadingGlobalConfig } = (0,es.useQuery)(["config", currentTeamId], () => entities_config/* default */.A.loadAll(), RunScript_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL));
  const { data: teamConfig, isLoading: isLoadingTeamConfig } = (0,es.useQuery)(["team", currentTeamId], () => teams/* default */.A.load(currentTeamId), RunScript_spreadProps(RunScript_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    enabled: currentTeamId !== team/* API_NO_TEAM_ID */.Rp,
    select: (res) => res.fleet
  }));
  const onUpload = () => {
    refetchScript();
  };
  const onDelete = () => {
    removeScriptFromCache();
    setShowDeleteScriptModal(false);
    refetchScript();
  };
  const hasManualAgentInstall = helpers(
    currentTeamId,
    globalConfig,
    teamConfig
  );
  const renderContent = () => {
    if (isLoading || isLoadingGlobalConfig || isLoadingTeamConfig) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isScriptError && scriptError.status !== 404) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    const mdmNotConfigured = !((globalConfig == null ? void 0 : globalConfig.mdm.enabled_and_configured) && (globalConfig == null ? void 0 : globalConfig.mdm.apple_bm_enabled_and_configured));
    if (mdmNotConfigured) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "list",
          header: "Additional configuration required",
          info: "Supported on macOS. Turn on MDM and automatic enrollment to customize.",
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      );
    }
    return !script ? /* @__PURE__ */ react.createElement(
      SetupExperienceScriptUploader_SetupExperienceScriptUploader,
      {
        currentTeamId,
        hasManualAgentInstall,
        onUpload
      }
    ) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", { className: `${RunScript_baseClass}__run-message` }, "Script will run during setup:"), /* @__PURE__ */ react.createElement(
      SetupExperienceScriptCard_SetupExperienceScriptCard,
      {
        script,
        onDelete: () => setShowDeleteScriptModal(true)
      }
    ));
  };
  return /* @__PURE__ */ react.createElement("section", { className: RunScript_baseClass }, /* @__PURE__ */ react.createElement(
    SectionHeader/* default */.A,
    {
      title: "Run script",
      details: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/setup-experience/run-script`,
          text: "Preview end user experience"
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: "Upload a script to run on macOS hosts that automatically enroll to Fleet."
    }
  ), /* @__PURE__ */ react.createElement(SetupExperienceContentContainer_SetupExperienceContentContainer, null, renderContent()), showDeleteScriptModal && script && /* @__PURE__ */ react.createElement(
    DeleteSetupExperienceScriptModal_DeleteSetupExperienceScriptModal,
    {
      currentTeamId,
      scriptName: script.name,
      onDeleted: onDelete,
      onExit: () => setShowDeleteScriptModal(false)
    }
  ));
};
/* harmony default export */ var RunScript_RunScript = (RunScript);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/RunScript/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/AdvancedOptionsForm/AdvancedOptionsForm.tsx

var AdvancedOptionsForm_async = (__this, __arguments, generator) => {
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







const AdvancedOptionsForm_baseClass = "advanced-options-form";
const AdvancedOptionsForm = ({
  currentTeamId,
  defaultReleaseDevice
}) => {
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react.useState)(false);
  const [releaseDevice, setReleaseDevice] = (0,react.useState)(defaultReleaseDevice);
  const handleSubmit = (e) => AdvancedOptionsForm_async(null, null, function* () {
    e.preventDefault();
    try {
      yield mdm/* default */.A.updateReleaseDeviceSetting(currentTeamId, releaseDevice);
      ToastNotification/* notify */.me.success("Successfully updated.");
    } catch (err) {
      ToastNotification/* notify */.me.error("Something went wrong. Please try again.", {
        response: err
      });
    }
  });
  const tooltip = /* @__PURE__ */ react.createElement(react.Fragment, null, "When enabled, you're responsible for sending the DeviceConfigured command.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("i", null, "(Default: ", /* @__PURE__ */ react.createElement("strong", null, "Off"), ")"));
  return /* @__PURE__ */ react.createElement("div", { className: AdvancedOptionsForm_baseClass }, /* @__PURE__ */ react.createElement(
    RevealButton/* default */.A,
    {
      className: `${AdvancedOptionsForm_baseClass}__accordion-title`,
      isShowing: showAdvancedOptions,
      showText: "Advanced options",
      hideText: "Advanced options",
      caretPosition: "after",
      onClick: () => setShowAdvancedOptions(!showAdvancedOptions)
    }
  ), showAdvancedOptions && /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      value: releaseDevice,
      onChange: () => setReleaseDevice(!releaseDevice)
    },
    /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: tooltip }, "Release device manually")
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit" }, "Save")));
};
/* harmony default export */ var AdvancedOptionsForm_AdvancedOptionsForm = (AdvancedOptionsForm);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/AdvancedOptionsForm/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/DeleteAutoEnrollmentProfile/DeleteAutoEnrollmentProfile.tsx

var DeleteAutoEnrollmentProfile_async = (__this, __arguments, generator) => {
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





const DeleteAutoEnrollmentProfile_baseClass = "delete-auto-enrollment-profile-modal";
const DeleteAutoEnrollProfile = ({
  currentTeamId,
  onCancel,
  onDelete
}) => {
  const handleDelete = () => DeleteAutoEnrollmentProfile_async(null, null, function* () {
    try {
      yield mdm/* default */.A.deleteSetupEnrollmentProfile(currentTeamId);
      ToastNotification/* notify */.me.success("Successfully deleted.");
    } catch (err) {
      ToastNotification/* notify */.me.error("Couldn\u2019t delete. Please try again.", { response: err });
    }
    onDelete();
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: DeleteAutoEnrollmentProfile_baseClass,
      title: "Delete automatic enrollment profile",
      onExit: onCancel
    },
    /* @__PURE__ */ react.createElement("p", null, "Delete the automatic enrollment profile to upload a new one."),
    /* @__PURE__ */ react.createElement("p", null, "Without an automatic enrollment profile, new macOS hosts will automatically enroll with the default setup settings."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: handleDelete, variant: "alert" }, "Delete"), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel"))
  );
};
/* harmony default export */ var DeleteAutoEnrollmentProfile = (DeleteAutoEnrollProfile);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/DeleteAutoEnrollmentProfile/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/SetupAssistantProfileCard/SetupAssistantProfileCard.tsx








const SetupAssistantProfileCard = (props) => {
  const baseClass = "setup-assistant-profile-card";
  const cardClassName = classnames_default()(baseClass, {
    [`${baseClass}--default-profile`]: props.defaultProfile
  });
  const onDownload = () => {
    const date = /* @__PURE__ */ new Date();
    const filename = `${date.toISOString().split("T")[0]}_${props.defaultProfile ? "default-automatic-enrollment.json" : props.profile.name}`;
    const file = new __webpack_require__.g.window.File(
      [JSON.stringify(props.profile.enrollment_profile, null, 2)],
      filename
    );
    FileSaver_default().saveAs(file);
  };
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "medium", className: cardClassName }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-configuration-profile" }), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__info` }, props.defaultProfile ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__profile-name` }, "Default profile"), /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__description` }, "Hosts use this profile, unless you add your own.")) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__profile-name` }, props.profile.name), /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__uploaded-at` }, (0,date_format/* uploadedFromNow */.dx)(props.profile.uploaded_at)))), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__actions` }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${baseClass}__download-button`,
      variant: "secondary",
      onClick: onDownload,
      icon: "download",
      ariaLabel: "Download setup assistant profile"
    }
  ), !props.defaultProfile && /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${baseClass}__delete-button`,
      variant: "secondary",
      onClick: props.onDelete,
      icon: "trash",
      ariaLabel: "Delete setup assistant profile"
    }
  )));
};
/* harmony default export */ var SetupAssistantProfileCard_SetupAssistantProfileCard = (SetupAssistantProfileCard);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/SetupAssistantProfileUploader/helpers.ts


const helpers_UPLOAD_ERROR_MESSAGES = {
  default: {
    message: "Couldn't add. Please try again."
  }
};
const helpers_getErrorMessage = (err) => {
  if (typeof err === "string") return err;
  return (0,errors/* getErrorReason */.F3)(err) || helpers_UPLOAD_ERROR_MESSAGES.default.message;
};

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/SetupAssistantProfileUploader/SetupAssistantProfileUploader.tsx

var SetupAssistantProfileUploader_async = (__this, __arguments, generator) => {
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






const SetupAssistantProfileUploader_baseClass = "setup-assistant-profile-uploader";
const SetupAssistantProfileUploader = ({
  currentTeamId,
  onUpload
}) => {
  const [showLoading, setShowLoading] = (0,react.useState)(false);
  const onUploadFile = (files) => SetupAssistantProfileUploader_async(null, null, function* () {
    setShowLoading(true);
    if (!files || files.length === 0) {
      setShowLoading(false);
      return;
    }
    const file = files[0];
    try {
      yield mdm/* default */.A.uploadSetupEnrollmentProfile(file, currentTeamId);
      ToastNotification/* notify */.me.success("Successfully uploaded.");
      onUpload();
    } catch (e) {
      const error = e;
      const errMessage = helpers_getErrorMessage(error);
      let errComponent = /* @__PURE__ */ react.createElement(react.Fragment, null, errMessage);
      if (errMessage.includes("Couldn't add")) {
        errComponent = /* @__PURE__ */ react.createElement(react.Fragment, null, errMessage, ".", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: "https://fleetdm.com/learn-more-about/dep-profile",
            text: "Learn more",
            className: `${SetupAssistantProfileUploader_baseClass}__new-tab`,
            newTab: true,
            variant: "flash-message-link"
          }
        ));
      }
      ToastNotification/* notify */.me.error(errComponent, { response: e });
    } finally {
      setShowLoading(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    FileUploader/* default */.A,
    {
      message: "Automatic enrollment profile (.json)",
      graphicName: "file-configuration-profile",
      accept: ".json",
      buttonMessage: "Add profile",
      onFileUpload: onUploadFile,
      isLoading: showLoading,
      className: SetupAssistantProfileUploader_baseClass
    }
  );
};
/* harmony default export */ var SetupAssistantProfileUploader_SetupAssistantProfileUploader = (SetupAssistantProfileUploader);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/components/SetupAssistantProfileUploader/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/SetupAssistant.tsx

var SetupAssistant_defProp = Object.defineProperty;
var SetupAssistant_defProps = Object.defineProperties;
var SetupAssistant_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SetupAssistant_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SetupAssistant_hasOwnProp = Object.prototype.hasOwnProperty;
var SetupAssistant_propIsEnum = Object.prototype.propertyIsEnumerable;
var SetupAssistant_defNormalProp = (obj, key, value) => key in obj ? SetupAssistant_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SetupAssistant_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SetupAssistant_hasOwnProp.call(b, prop))
      SetupAssistant_defNormalProp(a, prop, b[prop]);
  if (SetupAssistant_getOwnPropSymbols)
    for (var prop of SetupAssistant_getOwnPropSymbols(b)) {
      if (SetupAssistant_propIsEnum.call(b, prop))
        SetupAssistant_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SetupAssistant_spreadProps = (a, b) => SetupAssistant_defProps(a, SetupAssistant_getOwnPropDescs(b));



















const SetupAssistant_baseClass = "setup-assistant";
const SetupAssistant = ({
  currentTeamId,
  router
}) => {
  const [showDeleteProfileModal, setShowDeleteProfileModal] = (0,react.useState)(false);
  const { data: globalConfig, isLoading: isLoadingGlobalConfig } = (0,es.useQuery)(["config", currentTeamId], () => entities_config/* default */.A.loadAll(), SetupAssistant_spreadProps(SetupAssistant_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    retry: false
  }));
  const { data: teamConfig, isLoading: isLoadingTeamConfig } = (0,es.useQuery)(["team", currentTeamId], () => teams/* default */.A.load(currentTeamId), SetupAssistant_spreadProps(SetupAssistant_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    refetchOnWindowFocus: false,
    retry: false,
    enabled: currentTeamId !== team/* API_NO_TEAM_ID */.Rp,
    select: (res) => res.fleet
  }));
  const {
    data: enrollmentProfileData,
    isLoading: isLoadingEnrollmentProfile,
    error: enrollmentProfileError,
    refetch: refetchEnrollmentProfile
  } = (0,es.useQuery)(
    ["enrollment_profile", currentTeamId],
    () => mdm/* default */.A.getSetupEnrollmentProfile(currentTeamId),
    SetupAssistant_spreadProps(SetupAssistant_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false
    })
  );
  const enrollmentProfileNotFound = (enrollmentProfileError == null ? void 0 : enrollmentProfileError.status) === 404;
  const {
    data: defaultEnrollmentProfileData,
    isLoading: isLoadingDefaultEnrollmentProfile
  } = (0,es.useQuery)(
    ["default_enrollment_profile", currentTeamId],
    () => mdm/* default */.A.getDefaultSetupEnrollmentProfile(),
    SetupAssistant_spreadProps(SetupAssistant_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      retry: false,
      enabled: enrollmentProfileNotFound
      // only fetch the default profile if there is no team enrollment profile
    })
  );
  const getReleaseDeviceSetting = () => {
    var _a;
    if (currentTeamId === team/* API_NO_TEAM_ID */.Rp) {
      return (globalConfig == null ? void 0 : globalConfig.mdm.setup_experience.apple_enable_release_device_manually) || false;
    }
    return ((_a = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _a.setup_experience.apple_enable_release_device_manually) || false;
  };
  const onUpload = () => {
    refetchEnrollmentProfile();
  };
  const onDelete = () => {
    setShowDeleteProfileModal(false);
    refetchEnrollmentProfile();
  };
  const defaultReleaseDeviceSetting = getReleaseDeviceSetting();
  const isLoading = isLoadingGlobalConfig || isLoadingTeamConfig || isLoadingEnrollmentProfile || isLoadingDefaultEnrollmentProfile;
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    const mdmNotConfigured = !((globalConfig == null ? void 0 : globalConfig.mdm.enabled_and_configured) && (globalConfig == null ? void 0 : globalConfig.mdm.apple_bm_enabled_and_configured));
    if (mdmNotConfigured) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "form",
          header: "Additional configuration required",
          info: "Supported on macOS. Turn on MDM and automatic enrollment to customize.",
          primaryButton: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => router.push(paths/* default */.A.ADMIN_INTEGRATIONS_MDM) }, "Turn on")
        }
      );
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, enrollmentProfileNotFound || !enrollmentProfileData ? /* @__PURE__ */ react.createElement(react.Fragment, null, defaultEnrollmentProfileData && /* @__PURE__ */ react.createElement(
      SetupAssistantProfileCard_SetupAssistantProfileCard,
      {
        profile: defaultEnrollmentProfileData,
        defaultProfile: true
      }
    ), /* @__PURE__ */ react.createElement(
      SetupAssistantProfileUploader_SetupAssistantProfileUploader,
      {
        currentTeamId,
        onUpload
      }
    )) : /* @__PURE__ */ react.createElement(
      SetupAssistantProfileCard_SetupAssistantProfileCard,
      {
        profile: enrollmentProfileData,
        onDelete: () => setShowDeleteProfileModal(true)
      }
    ), /* @__PURE__ */ react.createElement(
      AdvancedOptionsForm_AdvancedOptionsForm,
      {
        key: String(defaultReleaseDeviceSetting),
        currentTeamId,
        defaultReleaseDevice: defaultReleaseDeviceSetting
      }
    ));
  };
  return /* @__PURE__ */ react.createElement("section", { className: SetupAssistant_baseClass }, /* @__PURE__ */ react.createElement(
    SectionHeader/* default */.A,
    {
      title: "Setup Assistant",
      details: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/learn-more-about/setup-assistant",
          text: "Preview end user experience",
          newTab: true
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "right-panel",
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Add an automatic enrollment profile to customize Setup Assistant.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/learn-more-about/enrollment-profiles",
          text: "Learn more",
          newTab: true
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(SetupExperienceContentContainer_SetupExperienceContentContainer, null, renderContent()), showDeleteProfileModal && /* @__PURE__ */ react.createElement(
    DeleteAutoEnrollmentProfile,
    {
      currentTeamId,
      onDelete,
      onCancel: () => setShowDeleteProfileModal(false)
    }
  ));
};
/* harmony default export */ var SetupAssistant_SetupAssistant = (SetupAssistant);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/SetupAssistant/index.ts



// EXTERNAL MODULE: ./frontend/utilities/permissions/permissions.ts
var permissions = __webpack_require__(95681);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SettingsSection/index.ts + 1 modules
var SettingsSection = __webpack_require__(92277);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/TurnOnMdmTooltipWrapper/TurnOnMdmTooltipWrapper.tsx





const MDM_BY_PLATFORM = {
  apple: { url: paths/* default */.A.ADMIN_INTEGRATIONS_MDM_APPLE, text: "Apple MDM" },
  windows: { url: paths/* default */.A.ADMIN_INTEGRATIONS_MDM_WINDOWS, text: "Windows MDM" }
};
const TurnOnMdmTooltipWrapper = ({
  platform,
  isMdmEnabledAndConfigured,
  children
}) => {
  const { url, text } = MDM_BY_PLATFORM[platform];
  return /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: !isMdmEnabledAndConfigured ? /* @__PURE__ */ react.createElement("span", null, "To enable, first turn on", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url, text, variant: "tooltip-link" }), ".") : void 0,
      disableTooltip: isMdmEnabledAndConfigured,
      underline: false,
      position: "left",
      showArrow: true
    },
    children
  );
};
/* harmony default export */ var TurnOnMdmTooltipWrapper_TurnOnMdmTooltipWrapper = (TurnOnMdmTooltipWrapper);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/TurnOnMdmTooltipWrapper/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/EndUserAuthSection/EndUserAuthSection.tsx








const EndUserAuthSection_baseClass = "users-form";
const EndUserAuthSection = ({
  endUserAuthEnabled,
  lockEndUserInfo,
  onEndUserAuthChange,
  onLockEndUserInfoChange,
  isIdPConfigured,
  isMacMdmEnabledAndConfigured,
  gitOpsModeEnabled
}) => {
  return /* @__PURE__ */ react.createElement(SettingsSection/* default */.A, { title: "End user authentication" }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: !isIdPConfigured ? /* @__PURE__ */ react.createElement(react.Fragment, null, "To enable, first connect Mesh to your", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: paths/* default */.A.ADMIN_INTEGRATIONS_SSO_END_USERS,
          text: "identity provider (IdP)",
          variant: "tooltip-link"
        }
      ), ".") : void 0,
      disableTooltip: isIdPConfigured,
      underline: false,
      position: "left",
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        disabled: gitOpsModeEnabled || !isIdPConfigured,
        value: endUserAuthEnabled,
        onChange: onEndUserAuthChange,
        helpText: /* @__PURE__ */ react.createElement("span", null, "End users are required to authenticate with your", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: paths/* default */.A.ADMIN_INTEGRATIONS_SSO_END_USERS,
            text: "identity provider (IdP)"
          }
        ), ". ChromeOS not supported.")
      },
      "Require IdP authentication"
    )
  ), endUserAuthEnabled && /* @__PURE__ */ react.createElement("div", { className: `${EndUserAuthSection_baseClass}__advanced-options` }, /* @__PURE__ */ react.createElement(
    TurnOnMdmTooltipWrapper_TurnOnMdmTooltipWrapper,
    {
      platform: "apple",
      isMdmEnabledAndConfigured: !!isMacMdmEnabledAndConfigured
    },
    /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        disabled: gitOpsModeEnabled || !isIdPConfigured || !isMacMdmEnabledAndConfigured,
        value: lockEndUserInfo,
        onChange: onLockEndUserInfoChange,
        helpText: /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement("strong", null, "Account Name"), " and ", /* @__PURE__ */ react.createElement("strong", null, "Full name"), " ", "will be locked to IdP values in Setup Assistant. macOS only.")
      },
      "Lock end user info"
    )
  )));
};
/* harmony default export */ var EndUserAuthSection_EndUserAuthSection = (EndUserAuthSection);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/EndUserAuthSection/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/ManagedAccountCheckbox/ManagedAccountCheckbox.tsx



const ManagedAccountCheckbox_baseClass = "managed-account-checkbox";
const ManagedAccountCheckbox = ({
  value,
  onChange,
  disabled,
  iconTooltipContent
}) => {
  return /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      className: ManagedAccountCheckbox_baseClass,
      disabled,
      iconTooltipContent,
      value,
      onChange,
      helpText: "A hidden local admin for remote troubleshooting.",
      labelTooltipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh creates a user (_fleetadmin) and unique password for each host, accessible in ", /* @__PURE__ */ react.createElement("b", null, "Host details > Show managed account"), ".")
    },
    "Create hidden admin"
  );
};
/* harmony default export */ var ManagedAccountCheckbox_ManagedAccountCheckbox = (ManagedAccountCheckbox);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/ManagedAccountCheckbox/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/LocalAccountSection/LocalAccountSection.tsx







const LocalAccountSection_baseClass = "local-account-section";
const effectiveEnableManagedLocalAccount = (formData) => formData.enableManagedLocalAccount || formData.localAccountType !== interfaces_mdm/* EndUserLocalAccountType */.XU.ADMIN;
const LocalAccountSection = ({
  formData,
  onLocalAccountTypeChange,
  onEnableManagedLocalAccountChange,
  isMacMdmEnabledAndConfigured
}) => {
  const { localAccountType } = formData;
  const forcedByLocalAccountType = localAccountType !== interfaces_mdm/* EndUserLocalAccountType */.XU.ADMIN;
  return /* @__PURE__ */ react.createElement("div", { className: LocalAccountSection_baseClass }, /* @__PURE__ */ react.createElement(
    TurnOnMdmTooltipWrapper_TurnOnMdmTooltipWrapper,
    {
      platform: "apple",
      isMdmEnabledAndConfigured: isMacMdmEnabledAndConfigured
    },
    /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        position: "left",
        tipOffset: 8,
        isInputField: true,
        renderChildren: (gitopsEnabled) => {
          return /* @__PURE__ */ react.createElement("div", { className: `${LocalAccountSection_baseClass}__field-group` }, /* @__PURE__ */ react.createElement("h3", { className: `${LocalAccountSection_baseClass}__sub-header` }, "End user account"), /* @__PURE__ */ react.createElement("fieldset", { className: "form-field" }, /* @__PURE__ */ react.createElement(
            Radio/* default */.A,
            {
              name: "localAccountType",
              id: "localAccountTypeAdmin",
              label: "Admin",
              helpText: "End user can add and manage other users, install apps, and change settings.",
              value: interfaces_mdm/* EndUserLocalAccountType */.XU.ADMIN,
              disabled: gitopsEnabled || !isMacMdmEnabledAndConfigured,
              checked: localAccountType === interfaces_mdm/* EndUserLocalAccountType */.XU.ADMIN,
              onChange: (val) => onLocalAccountTypeChange(val)
            }
          ), /* @__PURE__ */ react.createElement(
            Radio/* default */.A,
            {
              name: "localAccountType",
              id: "localAccountTypeStandard",
              label: "Standard",
              helpText: "End user can install apps and change their own settings only.",
              value: interfaces_mdm/* EndUserLocalAccountType */.XU.STANDARD,
              checked: localAccountType === interfaces_mdm/* EndUserLocalAccountType */.XU.STANDARD,
              disabled: gitopsEnabled || !isMacMdmEnabledAndConfigured,
              onChange: (val) => onLocalAccountTypeChange(val)
            }
          ), /* @__PURE__ */ react.createElement(
            Radio/* default */.A,
            {
              name: "localAccountType",
              id: "localAccountTypeNone",
              label: "Skip (no account)",
              helpText: "No user account will be created and authentication must be handled by an IdP or other workflow.",
              disabled: gitopsEnabled || !isMacMdmEnabledAndConfigured,
              value: interfaces_mdm/* EndUserLocalAccountType */.XU.NONE,
              checked: localAccountType === interfaces_mdm/* EndUserLocalAccountType */.XU.NONE,
              onChange: (val) => onLocalAccountTypeChange(val)
            }
          )), /* @__PURE__ */ react.createElement("h3", { className: `${LocalAccountSection_baseClass}__sub-header` }, "Managed account"), /* @__PURE__ */ react.createElement(
            ManagedAccountCheckbox_ManagedAccountCheckbox,
            {
              disabled: gitopsEnabled || !isMacMdmEnabledAndConfigured || forcedByLocalAccountType,
              iconTooltipContent: forcedByLocalAccountType ? /* @__PURE__ */ react.createElement("span", null, "There must be at least one admin account on the host.") : void 0,
              value: effectiveEnableManagedLocalAccount(formData),
              onChange: onEnableManagedLocalAccountChange
            }
          ));
        }
      }
    )
  ));
};
/* harmony default export */ var LocalAccountSection_LocalAccountSection = (LocalAccountSection);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/WindowsAccountSection/WindowsAccountSection.tsx







const WindowsAccountSection_baseClass = "windows-account-section";
const WindowsAccountSection = ({
  enableManagedLocalAccount,
  onEnableManagedLocalAccountChange,
  isWindowsMdmEnabledAndConfigured
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: WindowsAccountSection_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${WindowsAccountSection_baseClass}__field-group` }, /* @__PURE__ */ react.createElement("h3", { className: `${WindowsAccountSection_baseClass}__sub-header` }, "End user account"), /* @__PURE__ */ react.createElement("div", { className: `${WindowsAccountSection_baseClass}__end-user-help-text` }, "End users get the default role for the host's platform.", " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/end-user-accounts`,
      text: "Learn more",
      newTab: true
    }
  )), /* @__PURE__ */ react.createElement("h3", { className: `${WindowsAccountSection_baseClass}__sub-header` }, "Managed account"), /* @__PURE__ */ react.createElement(
    TurnOnMdmTooltipWrapper_TurnOnMdmTooltipWrapper,
    {
      platform: "windows",
      isMdmEnabledAndConfigured: isWindowsMdmEnabledAndConfigured
    },
    /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        position: "left",
        tipOffset: 8,
        isInputField: true,
        renderChildren: (gitopsEnabled) => /* @__PURE__ */ react.createElement(
          ManagedAccountCheckbox_ManagedAccountCheckbox,
          {
            disabled: !!gitopsEnabled || !isWindowsMdmEnabledAndConfigured,
            value: enableManagedLocalAccount,
            onChange: onEnableManagedLocalAccountChange
          }
        )
      }
    )
  )));
};
/* harmony default export */ var WindowsAccountSection_WindowsAccountSection = (WindowsAccountSection);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/components/WindowsAccountSection/index.ts



;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/components/UsersForm/UsersForm.tsx

var UsersForm_defProp = Object.defineProperty;
var UsersForm_defProps = Object.defineProperties;
var UsersForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var UsersForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var UsersForm_hasOwnProp = Object.prototype.hasOwnProperty;
var UsersForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var UsersForm_defNormalProp = (obj, key, value) => key in obj ? UsersForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var UsersForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (UsersForm_hasOwnProp.call(b, prop))
      UsersForm_defNormalProp(a, prop, b[prop]);
  if (UsersForm_getOwnPropSymbols)
    for (var prop of UsersForm_getOwnPropSymbols(b)) {
      if (UsersForm_propIsEnum.call(b, prop))
        UsersForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var UsersForm_spreadProps = (a, b) => UsersForm_defProps(a, UsersForm_getOwnPropDescs(b));
var UsersForm_async = (__this, __arguments, generator) => {
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

















const UsersForm_baseClass = "users-form";
const UsersForm = ({
  currentTeamId,
  defaultIsEndUserAuthEnabled,
  defaultLockEndUserInfo,
  defaultEnableManagedLocalAccount,
  defaultLocalAccountType = interfaces_mdm/* EndUserLocalAccountType */.XU.ADMIN,
  defaultEnableManagedLocalAccountWindows,
  isIdPConfigured
}) => {
  const {
    config,
    isMacMdmEnabledAndConfigured,
    isWindowsMdmEnabledAndConfigured
  } = (0,react.useContext)(app/* AppContext */.BR);
  const gitOpsModeEnabled = !!(config == null ? void 0 : config.gitops.gitops_mode_enabled);
  const queryClient = (0,es.useQueryClient)();
  const [formData, setFormData] = (0,react.useState)({
    endUserAuthEnabled: defaultIsEndUserAuthEnabled,
    lockEndUserInfo: defaultLockEndUserInfo,
    enableManagedLocalAccount: defaultEnableManagedLocalAccount,
    localAccountType: defaultLocalAccountType,
    enableManagedLocalAccountWindows: defaultEnableManagedLocalAccountWindows
  });
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setFormData({
      endUserAuthEnabled: defaultIsEndUserAuthEnabled,
      lockEndUserInfo: defaultLockEndUserInfo,
      enableManagedLocalAccount: defaultEnableManagedLocalAccount,
      localAccountType: defaultLocalAccountType,
      enableManagedLocalAccountWindows: defaultEnableManagedLocalAccountWindows
    });
  }, [
    defaultIsEndUserAuthEnabled,
    defaultLockEndUserInfo,
    defaultEnableManagedLocalAccount,
    defaultLocalAccountType,
    defaultEnableManagedLocalAccountWindows
  ]);
  const onEndUserAuthChange = (value) => {
    setFormData((prev) => UsersForm_spreadProps(UsersForm_spreadValues({}, prev), {
      endUserAuthEnabled: value,
      lockEndUserInfo: isMacMdmEnabledAndConfigured ? value : prev.lockEndUserInfo
    }));
  };
  const onLockEndUserInfoChange = (value) => {
    setFormData((prev) => UsersForm_spreadProps(UsersForm_spreadValues({}, prev), { lockEndUserInfo: value }));
  };
  const onEnableManagedLocalAccountChange = (value) => {
    setFormData((prev) => UsersForm_spreadProps(UsersForm_spreadValues({}, prev), { enableManagedLocalAccount: value }));
  };
  const onEnableManagedLocalAccountWindowsChange = (value) => {
    setFormData((prev) => UsersForm_spreadProps(UsersForm_spreadValues({}, prev), {
      enableManagedLocalAccountWindows: value
    }));
  };
  const onLocalAccountTypeChange = (value) => {
    setFormData((prev) => UsersForm_spreadProps(UsersForm_spreadValues({}, prev), { localAccountType: value }));
  };
  const onSubmit = (e) => UsersForm_async(null, null, function* () {
    e.preventDefault();
    setIsUpdating(true);
    const canLockEndUserInfo = formData.endUserAuthEnabled && formData.lockEndUserInfo;
    try {
      yield mdm/* default */.A.updateSetupExperienceSettings(UsersForm_spreadValues({
        fleet_id: currentTeamId,
        enable_end_user_authentication: formData.endUserAuthEnabled
      }, isMacMdmEnabledAndConfigured && {
        lock_end_user_info: canLockEndUserInfo,
        enable_managed_local_account: effectiveEnableManagedLocalAccount(
          formData
        ),
        end_user_local_account_type: formData.localAccountType
      }));
      if (isWindowsMdmEnabledAndConfigured) {
        const mdmUpdate = {
          windows_settings: {
            enable_managed_local_account: formData.enableManagedLocalAccountWindows
          }
        };
        if (currentTeamId === team/* APP_CONTEXT_NO_TEAM_ID */.Gl) {
          yield entities_config/* default */.A.update({ mdm: mdmUpdate });
        } else {
          yield teams/* default */.A.updateConfig({ mdm: mdmUpdate }, currentTeamId);
        }
      }
      yield queryClient.invalidateQueries(["config"]);
      if (currentTeamId !== team/* APP_CONTEXT_NO_TEAM_ID */.Gl) {
        yield queryClient.invalidateQueries(["team", currentTeamId]);
      }
      ToastNotification/* notify */.me.success("Successfully updated.");
    } catch (err) {
      ToastNotification/* notify */.me.error("Couldn't update settings. Please try again.", {
        response: err
      });
    }
    setIsUpdating(false);
    if (isMacMdmEnabledAndConfigured) {
      setFormData((prev) => UsersForm_spreadProps(UsersForm_spreadValues({}, prev), { lockEndUserInfo: canLockEndUserInfo }));
    }
  });
  return /* @__PURE__ */ react.createElement("div", { className: UsersForm_baseClass }, /* @__PURE__ */ react.createElement("form", { onSubmit }, /* @__PURE__ */ react.createElement(
    EndUserAuthSection_EndUserAuthSection,
    {
      endUserAuthEnabled: formData.endUserAuthEnabled,
      lockEndUserInfo: formData.lockEndUserInfo,
      onEndUserAuthChange,
      onLockEndUserInfoChange,
      isIdPConfigured,
      isMacMdmEnabledAndConfigured: !!isMacMdmEnabledAndConfigured,
      gitOpsModeEnabled
    }
  ), /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, null, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "macOS")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Windows"))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement(
    LocalAccountSection_LocalAccountSection,
    {
      formData,
      onLocalAccountTypeChange,
      onEnableManagedLocalAccountChange,
      isMacMdmEnabledAndConfigured: !!isMacMdmEnabledAndConfigured
    }
  )), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement(
    WindowsAccountSection_WindowsAccountSection,
    {
      enableManagedLocalAccount: formData.enableManagedLocalAccountWindows,
      onEnableManagedLocalAccountChange: onEnableManagedLocalAccountWindowsChange,
      isWindowsMdmEnabledAndConfigured: !!isWindowsMdmEnabledAndConfigured
    }
  )))), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: disableChildren,
          isLoading: isUpdating,
          type: "submit"
        },
        "Save"
      )
    }
  )));
};
/* harmony default export */ var UsersForm_UsersForm = (UsersForm);

;// ./frontend/pages/ManageControlsPage/SetupExperience/cards/Users/Users.tsx














const Users_baseClass = "setup-experience-users";
const getEnabledManagedLocalAccount = (currentTeamId, globalConfig, teamConfig) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  if (globalConfig === void 0 && teamConfig === void 0) {
    return { managed_local_account: false };
  }
  if (currentTeamId === 0) {
    return {
      managed_local_account: (_c = (_b = (_a = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _a.setup_experience) == null ? void 0 : _b.enable_create_local_admin_account) != null ? _c : false,
      local_account_type: (_e = (_d = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _d.setup_experience) == null ? void 0 : _e.end_user_local_account_type
    };
  }
  return {
    managed_local_account: (_h = (_g = (_f = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _f.setup_experience) == null ? void 0 : _g.enable_create_local_admin_account) != null ? _h : false,
    local_account_type: (_j = (_i = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _i.setup_experience) == null ? void 0 : _j.end_user_local_account_type
  };
};
const getEnabledManagedLocalAccountWindows = (currentTeamId, globalConfig, teamConfig) => {
  var _a, _b, _c, _d, _e, _f;
  if (currentTeamId === team/* APP_CONTEXT_NO_TEAM_ID */.Gl) {
    return (_c = (_b = (_a = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _a.windows_settings) == null ? void 0 : _b.enable_managed_local_account) != null ? _c : false;
  }
  return (_f = (_e = (_d = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _d.windows_settings) == null ? void 0 : _e.enable_managed_local_account) != null ? _f : false;
};
const getEnabledEndUserAuth = (currentTeamId, globalConfig, teamConfig) => {
  var _a, _b, _c, _d;
  if (globalConfig === void 0 && teamConfig === void 0) {
    return false;
  }
  if (currentTeamId === 0) {
    return (_b = (_a = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _a.setup_experience.enable_end_user_authentication) != null ? _b : false;
  }
  return (_d = (_c = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _c.setup_experience.enable_end_user_authentication) != null ? _d : false;
};
const getLockEndUserInfo = (currentTeamId, globalConfig, teamConfig) => {
  var _a, _b, _c, _d;
  if (globalConfig === void 0 && teamConfig === void 0) {
    return false;
  }
  if (currentTeamId === 0) {
    return (_b = (_a = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _a.setup_experience.lock_end_user_info) != null ? _b : false;
  }
  return (_d = (_c = teamConfig == null ? void 0 : teamConfig.mdm) == null ? void 0 : _c.setup_experience.lock_end_user_info) != null ? _d : false;
};
const Users = ({ currentTeamId }) => {
  const { data: globalConfig, isLoading: isLoadingGlobalConfig } = (0,es.useQuery)(["config", currentTeamId], () => entities_config/* default */.A.loadAll(), {
    refetchOnWindowFocus: false,
    retry: false
  });
  const { data: teamConfig, isLoading: isLoadingTeamConfig } = (0,es.useQuery)(["team", currentTeamId], () => teams/* default */.A.load(currentTeamId), {
    refetchOnWindowFocus: false,
    retry: false,
    enabled: currentTeamId !== 0,
    select: (res) => res.fleet
  });
  const defaultIsEndUserAuthEnabled = getEnabledEndUserAuth(
    currentTeamId,
    globalConfig,
    teamConfig
  );
  const defaultLockEndUserInfo = getLockEndUserInfo(
    currentTeamId,
    globalConfig,
    teamConfig
  );
  const managedLocalAccountConfig = getEnabledManagedLocalAccount(
    currentTeamId,
    globalConfig,
    teamConfig
  );
  const enableManagedLocalAccountWindows = getEnabledManagedLocalAccountWindows(
    currentTeamId,
    globalConfig,
    teamConfig
  );
  const renderContent = () => {
    if (!globalConfig || isLoadingGlobalConfig || isLoadingTeamConfig) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(
      UsersForm_UsersForm,
      {
        currentTeamId,
        defaultIsEndUserAuthEnabled,
        defaultLockEndUserInfo,
        defaultEnableManagedLocalAccount: managedLocalAccountConfig.managed_local_account,
        defaultLocalAccountType: managedLocalAccountConfig.local_account_type,
        defaultEnableManagedLocalAccountWindows: enableManagedLocalAccountWindows,
        isIdPConfigured: (0,permissions/* isEndUserIdPConfigured */._g)(globalConfig)
      }
    );
  };
  return /* @__PURE__ */ react.createElement("section", { className: Users_baseClass }, /* @__PURE__ */ react.createElement(
    SectionHeader/* default */.A,
    {
      title: "Users",
      details: /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/setup-experience/end-user-authentication`,
          text: "Preview end user experience"
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      className: `${Users_baseClass}__page-description`,
      content: /* @__PURE__ */ react.createElement(react.Fragment, null, "Customize local user accounts. For advanced account configuration, like creating local accounts with IdP credentials via Platform Single Sign-On (PSSO), use a custom setup.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/psso-local-account`,
          text: "Learn how",
          newTab: true
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(SetupExperienceContentContainer_SetupExperienceContentContainer, null, renderContent()));
};
/* harmony default export */ var Users_Users = (Users);

;// ./frontend/pages/ManageControlsPage/SetupExperience/SetupExperienceNavItems.tsx







const SETUP_EXPERIENCE_NAV_ITEMS = [
  {
    title: "1. Users",
    urlSection: "users",
    path: paths/* default */.A.CONTROLS_USERS,
    Card: Users_Users
  },
  {
    title: "2. Bootstrap package",
    urlSection: "bootstrap-package",
    path: paths/* default */.A.CONTROLS_BOOTSTRAP_PACKAGE,
    Card: BootstrapPackage_BootstrapPackage
  },
  {
    title: "3. Install software",
    urlSection: "install-software",
    path: paths/* default */.A.CONTROLS_INSTALL_SOFTWARE("macos"),
    Card: InstallSoftware_InstallSoftware
  },
  {
    title: "4. Run script",
    urlSection: "run-script",
    path: paths/* default */.A.CONTROLS_RUN_SCRIPT,
    Card: RunScript_RunScript
  },
  {
    title: "5. Setup Assistant",
    urlSection: "setup-assistant",
    path: paths/* default */.A.CONTROLS_SETUP_ASSISTANT,
    Card: SetupAssistant_SetupAssistant
  }
];
/* harmony default export */ var SetupExperienceNavItems = (SETUP_EXPERIENCE_NAV_ITEMS);

;// ./frontend/pages/ManageControlsPage/SetupExperience/SetupExperience.tsx

var SetupExperience_defProp = Object.defineProperty;
var SetupExperience_defProps = Object.defineProperties;
var SetupExperience_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SetupExperience_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SetupExperience_hasOwnProp = Object.prototype.hasOwnProperty;
var SetupExperience_propIsEnum = Object.prototype.propertyIsEnumerable;
var SetupExperience_defNormalProp = (obj, key, value) => key in obj ? SetupExperience_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SetupExperience_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SetupExperience_hasOwnProp.call(b, prop))
      SetupExperience_defNormalProp(a, prop, b[prop]);
  if (SetupExperience_getOwnPropSymbols)
    for (var prop of SetupExperience_getOwnPropSymbols(b)) {
      if (SetupExperience_propIsEnum.call(b, prop))
        SetupExperience_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SetupExperience_spreadProps = (a, b) => SetupExperience_defProps(a, SetupExperience_getOwnPropDescs(b));






const SetupExperience_baseClass = "setup-experience";
const SetupExperience = ({
  params,
  location: { search: queryString },
  router,
  teamIdForApi
}) => {
  var _a;
  const { section, platform: urlPlatformParam } = params;
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  if (!isPremiumTier) {
    return /* @__PURE__ */ react.createElement(
      PremiumFeatureMessage/* default */.A,
      {
        className: `${SetupExperience_baseClass}__premium-feature-message`
      }
    );
  }
  const DEFAULT_SETTINGS_SECTION = SetupExperienceNavItems[0];
  const currentFormSection = (_a = SetupExperienceNavItems.find((item) => item.urlSection === section)) != null ? _a : DEFAULT_SETTINGS_SECTION;
  if (currentFormSection.urlSection !== "install-software" && urlPlatformParam) {
    router.replace(
      currentFormSection.path + queryString
      // current card doesn't support platforms yet
    );
  }
  const CurrentCard = currentFormSection.Card;
  return /* @__PURE__ */ react.createElement("div", { className: SetupExperience_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "tab-panel",
      content: "Customize the end user's setup experience."
    }
  ), /* @__PURE__ */ react.createElement(
    SideNav/* default */.A,
    {
      className: `${SetupExperience_baseClass}__side-nav`,
      navItems: SetupExperienceNavItems.map((navItem) => SetupExperience_spreadProps(SetupExperience_spreadValues({}, navItem), {
        path: navItem.path.concat(queryString)
      })),
      activeItem: currentFormSection.urlSection,
      CurrentCard: /* @__PURE__ */ react.createElement(
        CurrentCard,
        {
          key: teamIdForApi,
          currentTeamId: teamIdForApi,
          router,
          urlPlatformParam
        }
      )
    }
  ));
};
/* harmony default export */ var SetupExperience_SetupExperience = (SetupExperience);


/***/ }),

/***/ 55337:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Variables_Variables; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/pages/admin/components/SideNav/index.ts + 3 modules
var SideNav = __webpack_require__(67675);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/SectionHeader/index.ts + 1 modules
var SectionHeader = __webpack_require__(96948);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/services/entities/custom_host_vitals.ts
var custom_host_vitals = __webpack_require__(25837);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
;// ./frontend/pages/ManageControlsPage/Variables/helpers.ts

const CUSTOM_HOST_VITAL_NAME_MAX_LENGTH = 255;
const NAME_VALIDATIONS = [
  {
    name: "required",
    isValid: (formData) => formData.name.trim().length > 0,
    message: "Name is required"
  },
  {
    name: "notTooLong",
    isValid: (formData) => formData.name.trim().length <= CUSTOM_HOST_VITAL_NAME_MAX_LENGTH,
    message: `Name may not exceed ${CUSTOM_HOST_VITAL_NAME_MAX_LENGTH} characters`
  }
];
const getErrorMessage = (formData, message) => {
  if (message === void 0 || typeof message === "string") {
    return message;
  }
  return message(formData);
};
const validateFormData = (formData, isSaving = false) => {
  const formValidation = { isValid: true };
  const failedValidation = NAME_VALIDATIONS.find((validation) => {
    if (!isSaving && validation.name === "required") {
      return false;
    }
    return !validation.isValid(formData);
  });
  if (!failedValidation) {
    formValidation.name = { isValid: true };
  } else {
    formValidation.isValid = false;
    formValidation.name = {
      isValid: false,
      message: getErrorMessage(formData, failedValidation.message)
    };
  }
  return formValidation;
};

;// ./frontend/pages/ManageControlsPage/Variables/components/AddCustomHostVitalModal/AddCustomHostVitalModal.tsx










const baseClass = "add-custom-host-vital-modal";
const AddCustomHostVitalModal = ({
  onCancel,
  onSave
}) => {
  var _a;
  const [name, setName] = (0,react.useState)("");
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => validateFormData({ name: "" })
  );
  const { mutate: addCustomHostVital, isLoading: isSaving } = (0,es.useMutation)(
    () => custom_host_vitals/* default */.A.addCustomHostVital({ name: name.trim() }),
    {
      onSuccess: () => {
        ToastNotification/* notify */.me.success("Custom host vital created.");
        onSave();
      },
      onError: (error) => {
        if ((0,errors/* hasStatusKey */.S0)(error) && error.status === 409) {
          ToastNotification/* notify */.me.error("Couldn't save. Host vital name must be unique.", {
            response: error
          });
        } else {
          ToastNotification/* notify */.me.error(
            "An error occurred while saving the custom host vital. Please try again.",
            { response: error }
          );
        }
      }
    }
  );
  const onInputChange = (value) => {
    setName(value);
    setFormValidation(validateFormData({ name: value }));
  };
  const onClickSave = () => {
    const validation = validateFormData({ name }, true);
    if (!validation.isValid) {
      setFormValidation(validation);
      return;
    }
    addCustomHostVital();
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Add custom host vital",
      onExit: onCancel,
      className: baseClass
    },
    /* @__PURE__ */ react.createElement("form", { className: `${baseClass}__form` }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onInputChange,
        value: name,
        label: "Name",
        name: "name",
        error: (_a = formValidation.name) == null ? void 0 : _a.message,
        helpText: "This will be the vital's label on the host detail page.",
        inputOptions: { maxLength: CUSTOM_HOST_VITAL_NAME_MAX_LENGTH }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onClickSave,
        disabled: !formValidation.isValid || isSaving,
        isLoading: isSaving
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")))
  );
};
/* harmony default export */ var AddCustomHostVitalModal_AddCustomHostVitalModal = (AddCustomHostVitalModal);

;// ./frontend/pages/ManageControlsPage/Variables/components/AddCustomHostVitalModal/index.ts



;// ./frontend/pages/ManageControlsPage/Variables/components/DeleteCustomHostVitalModal/DeleteCustomHostVitalModal.tsx








const DeleteCustomHostVitalModal_baseClass = "delete-custom-host-vital-modal";
const DeleteCustomHostVitalModal = ({
  vital,
  onExit,
  onDelete
}) => {
  const { mutate: deleteCustomHostVital, isLoading: isDeleting } = (0,es.useMutation)(
    () => custom_host_vitals/* default */.A.deleteCustomHostVital(vital.id),
    {
      onSuccess: () => {
        ToastNotification/* notify */.me.success("Custom host vital successfully deleted.");
        onDelete();
      },
      onError: (error) => {
        const message = (0,errors/* hasStatusKey */.S0)(error) && error.status === 409 ? "This custom host vital is referenced in a configuration profile or script and can't be deleted. To resolve, edit the configuration profile or script." : "An error occurred while deleting the custom host vital. Please try again.";
        ToastNotification/* notify */.me.error(message, { response: error });
        onExit();
      }
    }
  );
  const onClickDelete = () => {
    deleteCustomHostVital();
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete custom host vital",
      onExit,
      className: DeleteCustomHostVitalModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: `${DeleteCustomHostVitalModal_baseClass}__message` }, /* @__PURE__ */ react.createElement("span", null, "Are you sure you want to delete the ", /* @__PURE__ */ react.createElement("b", null, vital.name), " host vital?"), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "Any references to the ", /* @__PURE__ */ react.createElement("b", null, `$FLEET_HOST_VITAL_${vital.id}`), " variable will break."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "alert",
        onClick: onClickDelete,
        isLoading: isDeleting,
        disabled: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel"))
  );
};
/* harmony default export */ var DeleteCustomHostVitalModal_DeleteCustomHostVitalModal = (DeleteCustomHostVitalModal);

;// ./frontend/pages/ManageControlsPage/Variables/components/DeleteCustomHostVitalModal/index.ts



;// ./frontend/pages/ManageControlsPage/Variables/components/EditCustomHostVitalModal/EditCustomHostVitalModal.tsx










const EditCustomHostVitalModal_baseClass = "edit-custom-host-vital-modal";
const EditCustomHostVitalModal = ({
  vital,
  onCancel,
  onSave
}) => {
  var _a;
  const [name, setName] = (0,react.useState)(vital.name);
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => validateFormData({ name: vital.name })
  );
  const { mutate: updateCustomHostVital, isLoading: isSaving } = (0,es.useMutation)(
    () => custom_host_vitals/* default */.A.updateCustomHostVital(vital.id, {
      name: name.trim()
    }),
    {
      onSuccess: () => {
        ToastNotification/* notify */.me.success("Custom host vital updated.");
        onSave();
      },
      onError: (error) => {
        if ((0,errors/* hasStatusKey */.S0)(error) && error.status === 409) {
          ToastNotification/* notify */.me.error("Couldn't save. Host vital name must be unique.", {
            response: error
          });
        } else {
          ToastNotification/* notify */.me.error(
            "An error occurred while updating the custom host vital. Please try again.",
            { response: error }
          );
        }
      }
    }
  );
  const onInputChange = (value) => {
    setName(value);
    setFormValidation(validateFormData({ name: value }));
  };
  const onClickSave = () => {
    const validation = validateFormData({ name }, true);
    if (!validation.isValid) {
      setFormValidation(validation);
      return;
    }
    updateCustomHostVital();
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Edit custom host vital",
      onExit: onCancel,
      className: EditCustomHostVitalModal_baseClass
    },
    /* @__PURE__ */ react.createElement("form", { className: `${EditCustomHostVitalModal_baseClass}__form` }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onInputChange,
        value: name,
        label: "Name",
        name: "name",
        error: (_a = formValidation.name) == null ? void 0 : _a.message,
        helpText: "This will be the vital's label on the host detail page.",
        inputOptions: { maxLength: CUSTOM_HOST_VITAL_NAME_MAX_LENGTH }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onClickSave,
        disabled: !formValidation.isValid || isSaving,
        isLoading: isSaving
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")))
  );
};
/* harmony default export */ var EditCustomHostVitalModal_EditCustomHostVitalModal = (EditCustomHostVitalModal);

;// ./frontend/pages/ManageControlsPage/Variables/components/EditCustomHostVitalModal/index.ts



// EXTERNAL MODULE: ./frontend/components/buttons/CopyButton/index.ts + 2 modules
var CopyButton = __webpack_require__(57390);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
;// ./frontend/pages/ManageControlsPage/Variables/cards/CustomHostVitalsTab/CustomHostVitalsTableConfig.tsx









const getTokenFromVitalId = (id) => `$FLEET_HOST_VITAL_${id}`;
const generateTableHeaders = ({
  canEdit,
  onEdit,
  onDelete
}) => {
  const columns = [
    {
      title: "Name",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      sortType: "caseInsensitive",
      accessor: "name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Variable",
      Header: "Variable",
      disableSortBy: true,
      accessor: "id",
      Cell: (cellProps) => {
        const token = getTokenFromVitalId(cellProps.row.original.id);
        return /* @__PURE__ */ react.createElement("div", { className: "custom-host-vitals-tab__token" }, /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: token }), /* @__PURE__ */ react.createElement(CopyButton/* default */.A, { copyText: token, variant: "subdued", size: "small" }));
      }
    },
    {
      title: "Updated",
      Header: "Updated",
      disableSortBy: true,
      accessor: "updated_at",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T, { timeString: cellProps.cell.value })
    }
  ];
  if (canEdit) {
    columns.push({
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => {
        const vital = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            position: "top",
            fixedPositionStrategy: true,
            renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement("div", { className: "custom-host-vitals-tab__actions" }, /* @__PURE__ */ react.createElement(
              Button/* default */.A,
              {
                variant: "secondary",
                size: "small",
                disabled: disableChildren,
                onClick: () => onEdit(vital),
                ariaLabel: `Edit ${vital.name}`
              },
              /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "pencil", size: "small" })
            ), /* @__PURE__ */ react.createElement(
              Button/* default */.A,
              {
                variant: "secondary",
                size: "small",
                disabled: disableChildren,
                onClick: () => onDelete(vital),
                ariaLabel: `Delete ${vital.name}`
              },
              /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "trash", size: "small" })
            ))
          }
        );
      }
    });
  }
  return columns;
};
/* harmony default export */ var CustomHostVitalsTableConfig = (generateTableHeaders);

;// ./frontend/pages/ManageControlsPage/Variables/cards/CustomHostVitalsTab/CustomHostVitalsTab.tsx

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



















const CustomHostVitalsTab_baseClass = "custom-host-vitals-tab";
const CUSTOM_HOST_VITALS_PAGE_SIZE = 20;
const CustomHostVitalsTab = ({
  router,
  location
}) => {
  var _a, _b, _c;
  const { isGlobalAdmin, isGlobalMaintainer } = (0,react.useContext)(app/* AppContext */.BR);
  const canEdit = isGlobalAdmin || isGlobalMaintainer;
  const searchQuery = (_a = location.query.query) != null ? _a : "";
  const parsedPage = parseInt((_b = location.query.page) != null ? _b : "", 10);
  const pageNumber = Number.isNaN(parsedPage) || parsedPage < 0 ? 0 : parsedPage;
  const sortHeader = location.query.order_key || "name";
  const sortDirection = location.query.order_direction === "desc" ? "desc" : "asc";
  const [showAddModal, setShowAddModal] = (0,react.useState)(false);
  const [vitalToEdit, setVitalToEdit] = (0,react.useState)();
  const [vitalToDelete, setVitalToDelete] = (0,react.useState)();
  const apiParams = {
    query: searchQuery,
    page: pageNumber,
    per_page: CUSTOM_HOST_VITALS_PAGE_SIZE,
    order_key: sortHeader,
    order_direction: sortDirection
  };
  const { data, isLoading, isFetching, refetch } = (0,es.useQuery)(
    ["customHostVitals", apiParams],
    () => custom_host_vitals/* default */.A.getCustomHostVitals(apiParams),
    // keepPreviousData keeps `data` populated across page/search key changes
    // so TableContainer (and its search box) doesn't unmount/remount empty.
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), { keepPreviousData: true })
  );
  const vitals = (0,react.useMemo)(() => {
    var _a2;
    return (_a2 = data == null ? void 0 : data.custom_host_vitals) != null ? _a2 : [];
  }, [data]);
  const count = (_c = data == null ? void 0 : data.count) != null ? _c : 0;
  const onQueryChange = (0,react.useCallback)(
    (queryData) => {
      const {
        searchQuery: nextSearchQuery,
        pageIndex,
        sortHeader: nextSortHeader,
        sortDirection: nextSortDirection
      } = queryData;
      const searchChanged = nextSearchQuery !== searchQuery;
      const nextPage = searchChanged ? 0 : pageIndex;
      const nextOrderKey = nextSortHeader || "name";
      const nextOrderDirection = nextSortDirection === "desc" ? "desc" : "asc";
      if (!searchChanged && nextPage === pageNumber && nextOrderKey === sortHeader && nextOrderDirection === sortDirection) {
        return;
      }
      router.replace(
        (0,helpers/* getNextLocationPath */.g2)({
          pathPrefix: paths/* default */.A.CONTROLS_VARIABLES_CUSTOM_HOST_VITALS,
          queryParams: __spreadProps(__spreadValues({}, location.query), {
            query: nextSearchQuery || void 0,
            page: nextPage || void 0,
            order_key: nextOrderKey !== "name" ? nextOrderKey : void 0,
            order_direction: nextOrderDirection !== "asc" ? nextOrderDirection : void 0
          })
        })
      );
    },
    [searchQuery, pageNumber, sortHeader, sortDirection, router, location.query]
  );
  const onClickAdd = () => setShowAddModal(true);
  const onSaveAdd = () => {
    setShowAddModal(false);
    refetch();
  };
  const onSaveEdit = () => {
    setVitalToEdit(void 0);
    refetch();
  };
  const onDeleted = () => {
    setVitalToDelete(void 0);
    refetch();
  };
  const tableHeaders = (0,react.useMemo)(
    () => CustomHostVitalsTableConfig({
      canEdit: !!canEdit,
      onEdit: setVitalToEdit,
      onDelete: setVitalToDelete
    }),
    [canEdit, setVitalToEdit, setVitalToDelete]
  );
  const renderCount = (0,react.useCallback)(
    () => /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "vitals", count }),
    [count]
  );
  const isSearching = searchQuery !== "";
  const isEmpty = !isLoading && count === 0 && !isSearching;
  const renderAddButton = (variant) => canEdit ? /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: variant === "secondary" ? "left" : void 0,
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: variant === "secondary" ? "secondary" : void 0,
          size: variant === "secondary" ? "small" : void 0,
          onClick: onClickAdd,
          disabled: disableChildren,
          icon: variant === "secondary" ? "plus" : void 0
        },
        "Add vital"
      )
    }
  ) : void 0;
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement("div", { className: `${CustomHostVitalsTab_baseClass}__loading` }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null));
    }
    if (isEmpty) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No custom host vitals",
          info: canEdit ? "Add new vitals to display custom values and access them as variables." : "No custom host vitals have been added.",
          primaryButton: renderAddButton("default")
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        columnConfigs: tableHeaders,
        data: vitals,
        isLoading: isFetching,
        defaultSortHeader: "name",
        defaultSortDirection: "asc",
        defaultSearchQuery: searchQuery,
        inputPlaceHolder: "Search by name",
        onQueryChange,
        emptyComponent: () => /* @__PURE__ */ react.createElement(
          EmptyState/* default */.A,
          {
            header: "No matching custom host vitals",
            info: "No custom host vitals match those filters."
          }
        ),
        showMarkAllPages: false,
        isAllPagesSelected: false,
        searchable: true,
        renderCount,
        manualSortBy: true,
        pageIndex: pageNumber,
        pageSize: CUSTOM_HOST_VITALS_PAGE_SIZE,
        disableNextPage: (pageNumber + 1) * CUSTOM_HOST_VITALS_PAGE_SIZE >= count
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: CustomHostVitalsTab_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Custom host vitals", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement("div", { className: `${CustomHostVitalsTab_baseClass}__tab-header` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "tab-panel",
      content: "Manage custom fields on hosts. Their values can be set manually on each host's details page, or via API integration."
    }
  ), renderAddButton("secondary")), renderContent(), showAddModal && /* @__PURE__ */ react.createElement(
    AddCustomHostVitalModal_AddCustomHostVitalModal,
    {
      onCancel: () => setShowAddModal(false),
      onSave: onSaveAdd
    }
  ), vitalToEdit && /* @__PURE__ */ react.createElement(
    EditCustomHostVitalModal_EditCustomHostVitalModal,
    {
      vital: vitalToEdit,
      onCancel: () => setVitalToEdit(void 0),
      onSave: onSaveEdit
    }
  ), vitalToDelete && /* @__PURE__ */ react.createElement(
    DeleteCustomHostVitalModal_DeleteCustomHostVitalModal,
    {
      vital: vitalToDelete,
      onExit: () => setVitalToDelete(void 0),
      onDelete: onDeleted
    }
  ));
};
/* harmony default export */ var CustomHostVitalsTab_CustomHostVitalsTab = (CustomHostVitalsTab);

;// ./frontend/pages/ManageControlsPage/Variables/cards/CustomHostVitalsTab/index.ts



// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/services/entities/variables.ts




/* harmony default export */ var entities_variables = ({
  getVariables(params) {
    const { GLOBAL_VARIABLES } = endpoints/* default */.A;
    const path = `${GLOBAL_VARIABLES}?${(0,url/* buildQueryStringFromParams */.IM)({
      page: params.page,
      per_page: params.per_page
    })}`;
    return (0,services/* default */.Ay)("GET", path);
  },
  addVariable(variable) {
    const { GLOBAL_VARIABLES } = endpoints/* default */.A;
    return (0,services/* default */.Ay)("POST", GLOBAL_VARIABLES, variable);
  },
  deleteVariable(variableId) {
    const { GLOBAL_VARIABLES } = endpoints/* default */.A;
    return (0,services/* default */.Ay)("DELETE", `${GLOBAL_VARIABLES}/${variableId}`);
  }
});

// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
;// ./frontend/pages/ManageControlsPage/Variables/components/AddCustomVariableModal/helpers.ts

const FORM_VALIDATIONS = {
  name: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.name.length > 0;
        },
        message: `Name is required`
      },
      {
        name: "validName",
        isValid: (formData) => {
          if (formData.name.length === 0) {
            return true;
          }
          return !!formData.name.match(/^[a-zA-Z0-9_]+$/);
        },
        message: "Name may only include uppercase letters, numbers, and underscores"
      },
      {
        name: "doesNotIncludePrefix",
        isValid: (formData) => {
          return !formData.name.match(/^FLEET_SECRET_/);
        },
        message: `Name should not include variable prefix`
      }
    ]
  },
  value: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.value.length > 0;
        },
        message: `Value is required`
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
const helpers_validateFormData = (formData, isSaving = false) => {
  const formValidation = {
    isValid: true
  };
  Object.keys(FORM_VALIDATIONS).forEach((key) => {
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
        message: helpers_getErrorMessage(formData, failedValidation.message)
      };
    }
  });
  return formValidation;
};

;// ./frontend/pages/ManageControlsPage/Variables/components/AddCustomVariableModal/AddCustomVariableModal.tsx

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










const AddCustomVariableModal_baseClass = "add-custom-variable-modal";
const AddCustomVariableModal = ({
  onCancel,
  onSave
}) => {
  var _a, _b;
  const [variableName, setVariableName] = (0,react.useState)("");
  const [variableValue, setVariableValue] = (0,react.useState)("");
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => helpers_validateFormData({ name: variableName, value: variableValue })
  );
  const onInputChange = (update) => {
    const name = update.name;
    let value = update.value;
    if (name === "name") {
      value = value.trimEnd().toUpperCase();
      setVariableName(value);
    } else if (name === "value") {
      setVariableValue(value);
    }
    setFormValidation(
      helpers_validateFormData({
        name: variableName,
        value: variableValue,
        [update.name]: value
      })
    );
  };
  const onClickSave = (name, value) => __async(null, null, function* () {
    const validation = helpers_validateFormData({ name, value }, true);
    if (validation.isValid) {
      setIsSaving(true);
      const newVariable = {
        name: variableName,
        value: variableValue
      };
      try {
        yield entities_variables.addVariable(newVariable);
        ToastNotification/* notify */.me.success("Variable created.");
        onSave();
      } catch (error) {
        if ((0,errors/* hasStatusKey */.S0)(error) && error.status === 409) {
          ToastNotification/* notify */.me.error("A variable with this name already exists.", {
            response: error
          });
        } else if ((0,errors/* getErrorReason */.F3)(error).includes("Missing required private key")) {
          ToastNotification/* notify */.me.error(
            /* @__PURE__ */ react.createElement(react.Fragment, null, "Couldn't save. Please configure a private key.", " ", /* @__PURE__ */ react.createElement(
              CustomLink/* default */.A,
              {
                url: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/fleet-server-private-key`,
                text: "Learn how",
                newTab: true,
                variant: "flash-message-link"
              }
            )),
            { response: error }
          );
        } else {
          ToastNotification/* notify */.me.error(
            "An error occurred while saving the variable. Please try again.",
            { response: error }
          );
        }
      } finally {
        setIsSaving(false);
      }
    } else {
      setFormValidation(validation);
    }
  });
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Add custom variable", onExit: onCancel, className: AddCustomVariableModal_baseClass }, /* @__PURE__ */ react.createElement("form", { className: `${AddCustomVariableModal_baseClass}__add-variable-form` }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      onChange: onInputChange,
      value: variableName,
      label: "Name",
      name: "name",
      parseTarget: true,
      helpText: /* @__PURE__ */ react.createElement("span", null, "You can use this in your script or configuration profile as \u201C$FLEET_SECRET_", variableName, "\u201D."),
      error: (_a = formValidation.name) == null ? void 0 : _a.message,
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      onChange: onInputChange,
      value: variableValue,
      label: "Value",
      name: "value",
      parseTarget: true,
      error: (_b = formValidation.value) == null ? void 0 : _b.message
    }
  ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      onClick: () => {
        onClickSave(variableName, variableValue);
      },
      disabled: !formValidation.isValid || isSaving,
      isLoading: isSaving
    },
    "Save"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel"))));
};
/* harmony default export */ var AddCustomVariableModal_AddCustomVariableModal = (AddCustomVariableModal);

;// ./frontend/pages/ManageControlsPage/Variables/components/AddCustomVariableModal/index.ts



// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/utilities/format_error_response/index.ts
var format_error_response = __webpack_require__(70938);
;// ./frontend/pages/ManageControlsPage/Variables/components/DeleteCustomVariableModal/DeleteCustomVariableModal.tsx

var DeleteCustomVariableModal_async = (__this, __arguments, generator) => {
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







const DeleteCustomVariableModal_baseClass = "delete-custom-variable-modal";
const DeleteCustomVariableModal = ({
  variable,
  onExit,
  onDeleteVariable
}) => {
  const [isDeleting, setIsDeleting] = (0,react.useState)(false);
  const onClickDelete = () => DeleteCustomVariableModal_async(null, null, function* () {
    var _a;
    if (!variable) {
      return;
    }
    setIsDeleting(true);
    try {
      yield entities_variables.deleteVariable(variable.id);
      ToastNotification/* notify */.me.success("Variable successfully deleted.");
      onDeleteVariable();
    } catch (error) {
      const errorObject = (0,format_error_response/* default */.A)(error);
      const isInUseError = errorObject.http_status === 409 && /used by/.test((_a = errorObject == null ? void 0 : errorObject.base) != null ? _a : "");
      const message = isInUseError && typeof (errorObject == null ? void 0 : errorObject.base) === "string" ? errorObject.base : "An error occurred while deleting the custom variable. Please try again.";
      ToastNotification/* notify */.me.error(message, { response: error });
      onExit();
    } finally {
      setIsDeleting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete custom variable?",
      onExit,
      className: DeleteCustomVariableModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: `${DeleteCustomVariableModal_baseClass}__message` }, /* @__PURE__ */ react.createElement("span", null, "This will delete the", /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: variable == null ? void 0 : variable.name })), "custom variable."), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "If this custom variable is used in any configuration profiles or scripts, they will fail. To resolve, edit the configuration profile or script."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "alert",
        onClick: onClickDelete,
        isLoading: isDeleting,
        disabled: isDeleting
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel"))
  );
};
/* harmony default export */ var DeleteCustomVariableModal_DeleteCustomVariableModal = (DeleteCustomVariableModal);

;// ./frontend/pages/ManageControlsPage/Variables/components/DeleteCustomVariableModal/index.ts



;// ./frontend/pages/ManageControlsPage/Variables/cards/GlobalVariables/GlobalVariablesTableConfig.tsx








const getTokenFromVariableName = (variableName) => `$FLEET_SECRET_${variableName.toUpperCase()}`;
const GlobalVariablesTableConfig_generateTableHeaders = ({
  canEdit,
  onDelete
}) => {
  const columns = [
    {
      title: "Name",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      sortType: "caseInsensitive",
      accessor: "name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Variable name",
      Header: "Variable name",
      disableSortBy: true,
      accessor: "id",
      Cell: (cellProps) => {
        const token = getTokenFromVariableName(cellProps.row.original.name);
        return /* @__PURE__ */ react.createElement("div", { className: "global-variables__token" }, /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: token }), /* @__PURE__ */ react.createElement(CopyButton/* default */.A, { copyText: token, variant: "subdued", size: "small" }));
      }
    },
    {
      title: "Created",
      Header: "Created",
      disableSortBy: true,
      accessor: "created_at",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T, { timeString: cellProps.cell.value })
    }
  ];
  if (canEdit) {
    columns.push({
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => {
        const variable = cellProps.row.original;
        return /* @__PURE__ */ react.createElement("div", { className: "global-variables__actions" }, /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "secondary",
            size: "small",
            onClick: () => onDelete(variable),
            ariaLabel: `Delete ${variable.name}`
          },
          /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "trash", size: "small" })
        ));
      }
    });
  }
  return columns;
};
/* harmony default export */ var GlobalVariablesTableConfig = (GlobalVariablesTableConfig_generateTableHeaders);

;// ./frontend/pages/ManageControlsPage/Variables/cards/GlobalVariables/GlobalVariables.tsx

var GlobalVariables_defProp = Object.defineProperty;
var GlobalVariables_defProps = Object.defineProperties;
var GlobalVariables_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var GlobalVariables_getOwnPropSymbols = Object.getOwnPropertySymbols;
var GlobalVariables_hasOwnProp = Object.prototype.hasOwnProperty;
var GlobalVariables_propIsEnum = Object.prototype.propertyIsEnumerable;
var GlobalVariables_defNormalProp = (obj, key, value) => key in obj ? GlobalVariables_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var GlobalVariables_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (GlobalVariables_hasOwnProp.call(b, prop))
      GlobalVariables_defNormalProp(a, prop, b[prop]);
  if (GlobalVariables_getOwnPropSymbols)
    for (var prop of GlobalVariables_getOwnPropSymbols(b)) {
      if (GlobalVariables_propIsEnum.call(b, prop))
        GlobalVariables_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var GlobalVariables_spreadProps = (a, b) => GlobalVariables_defProps(a, GlobalVariables_getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (GlobalVariables_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && GlobalVariables_getOwnPropSymbols)
    for (var prop of GlobalVariables_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && GlobalVariables_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};















const GlobalVariables_baseClass = "global-variables";
const VARIABLES_PAGE_SIZE = 20;
const GlobalVariables = ({ router, location }) => {
  var _a;
  const { isGlobalAdmin, isGlobalMaintainer } = (0,react.useContext)(app/* AppContext */.BR);
  const canEdit = isGlobalAdmin || isGlobalMaintainer;
  const [showDeleteModal, setShowDeleteModal] = (0,react.useState)(false);
  const [variableToDelete, setVariableToDelete] = (0,react.useState)();
  const [showAddModal, setShowAddModal] = (0,react.useState)(false);
  const [pageNumber, setPageNumber] = (0,react.useState)(0);
  const apiParams = { page: pageNumber, per_page: VARIABLES_PAGE_SIZE };
  const { data, isLoading, isFetching, refetch } = (0,es.useQuery)(["variables", apiParams], () => entities_variables.getVariables(apiParams), GlobalVariables_spreadProps(GlobalVariables_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    keepPreviousData: true
  }));
  const variables = (0,react.useMemo)(() => {
    var _a2;
    return (_a2 = data == null ? void 0 : data.custom_variables) != null ? _a2 : [];
  }, [data]);
  const count = (_a = data == null ? void 0 : data.count) != null ? _a : 0;
  (0,react.useEffect)(() => {
    if (location.query.add_variable !== "1") return;
    if (canEdit) {
      setShowAddModal(true);
    }
    const _a2 = location.query, { add_variable } = _a2, rest = __objRest(_a2, ["add_variable"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [location.query, location.pathname, router, canEdit]);
  const onClickAddVariable = () => {
    setShowAddModal(true);
  };
  const onSaveVariable = () => {
    setShowAddModal(false);
    refetch();
  };
  const onDeleteVariable = () => {
    setShowDeleteModal(false);
    refetch();
  };
  const onClickDeleteVariable = (0,react.useCallback)((variable) => {
    setVariableToDelete(variable);
    setShowDeleteModal(true);
  }, []);
  const onQueryChange = (0,react.useCallback)((newTableQuery) => {
    setPageNumber(newTableQuery.pageIndex);
  }, []);
  const tableHeaders = (0,react.useMemo)(
    () => GlobalVariablesTableConfig({
      canEdit: !!canEdit,
      onDelete: onClickDeleteVariable
    }),
    [canEdit, onClickDeleteVariable]
  );
  const isEmpty = !isLoading && count === 0;
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement("div", { className: `${GlobalVariables_baseClass}__loading` }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null));
    }
    if (isEmpty) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No custom variables",
          info: canEdit ? "Add a custom variable to make it available in scripts and profiles." : "No custom variables are available for scripts and profiles.",
          primaryButton: canEdit ? /* @__PURE__ */ react.createElement(
            GitOpsModeTooltipWrapper/* default */.A,
            {
              renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
                Button/* default */.A,
                {
                  onClick: onClickAddVariable,
                  disabled: disableChildren
                },
                "Add variable"
              )
            }
          ) : void 0
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        columnConfigs: tableHeaders,
        data: variables,
        isLoading: isFetching,
        defaultSortHeader: "name",
        defaultSortDirection: "asc",
        emptyComponent: () => /* @__PURE__ */ react.createElement(EmptyState/* default */.A, { header: "No custom variables" }),
        showMarkAllPages: false,
        isAllPagesSelected: false,
        onQueryChange,
        pageIndex: pageNumber,
        pageSize: VARIABLES_PAGE_SIZE,
        disableNextPage: (pageNumber + 1) * VARIABLES_PAGE_SIZE >= count
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: GlobalVariables_baseClass }, /* @__PURE__ */ react.createElement(SectionHeader/* default */.A, { title: "Global variables", alignLeftHeaderVertically: true }), /* @__PURE__ */ react.createElement("div", { className: `${GlobalVariables_baseClass}__tab-header` }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "tab-panel",
      content: "Manage one-off variables that reference the same value across all hosts."
    }
  ), canEdit && /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "left",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "secondary",
          size: "small",
          onClick: onClickAddVariable,
          disabled: disableChildren,
          icon: "plus"
        },
        "Add variable"
      )
    }
  )), renderContent(), showAddModal && /* @__PURE__ */ react.createElement(
    AddCustomVariableModal_AddCustomVariableModal,
    {
      onCancel: () => setShowAddModal(false),
      onSave: onSaveVariable
    }
  ), showDeleteModal && /* @__PURE__ */ react.createElement(
    DeleteCustomVariableModal_DeleteCustomVariableModal,
    {
      variable: variableToDelete,
      onExit: () => setShowDeleteModal(false),
      onDeleteVariable
    }
  ));
};
/* harmony default export */ var GlobalVariables_GlobalVariables = (GlobalVariables);

;// ./frontend/pages/ManageControlsPage/Variables/cards/GlobalVariables/index.ts



;// ./frontend/pages/ManageControlsPage/Variables/VariablesNavItems.tsx




const getVariablesNavItems = () => {
  return [
    {
      title: "Global variables",
      urlSection: "global-variables",
      path: paths/* default */.A.CONTROLS_VARIABLES_GLOBAL_VARIABLES,
      Card: GlobalVariables_GlobalVariables
    },
    {
      title: "Custom host vitals",
      urlSection: "custom-host-vitals",
      path: paths/* default */.A.CONTROLS_VARIABLES_CUSTOM_HOST_VITALS,
      Card: CustomHostVitalsTab_CustomHostVitalsTab
    }
  ];
};
/* harmony default export */ var VariablesNavItems = (getVariablesNavItems);

;// ./frontend/pages/ManageControlsPage/Variables/Variables.tsx

var Variables_defProp = Object.defineProperty;
var Variables_defProps = Object.defineProperties;
var Variables_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Variables_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Variables_hasOwnProp = Object.prototype.hasOwnProperty;
var Variables_propIsEnum = Object.prototype.propertyIsEnumerable;
var Variables_defNormalProp = (obj, key, value) => key in obj ? Variables_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Variables_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Variables_hasOwnProp.call(b, prop))
      Variables_defNormalProp(a, prop, b[prop]);
  if (Variables_getOwnPropSymbols)
    for (var prop of Variables_getOwnPropSymbols(b)) {
      if (Variables_propIsEnum.call(b, prop))
        Variables_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Variables_spreadProps = (a, b) => Variables_defProps(a, Variables_getOwnPropDescs(b));





const Variables_baseClass = "variables";
const Variables = ({ router, params, location }) => {
  const { section } = params;
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const navItems = (0,react.useMemo)(() => VariablesNavItems(), []);
  const defaultSection = navItems[0];
  const matchedSection = navItems.find((item) => item.urlSection === section);
  const currentSection = matchedSection != null ? matchedSection : defaultSection;
  (0,react.useEffect)(() => {
    if (!matchedSection) {
      router.replace(`${defaultSection.path}${location.search}`);
    }
  }, [matchedSection, defaultSection.path, location.search, router]);
  const CurrentCard = currentSection.Card;
  return /* @__PURE__ */ react.createElement("div", { className: Variables_baseClass }, /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      variant: "tab-panel",
      content: isPremiumTier ? "Add global variables and custom host vitals to use in scripts and configuration profiles for all fleets." : "Add global variables and custom host vitals to use in scripts and configuration profiles."
    }
  ), /* @__PURE__ */ react.createElement(
    SideNav/* default */.A,
    {
      className: `${Variables_baseClass}__side-nav`,
      navItems: navItems.map((navItem) => Variables_spreadProps(Variables_spreadValues({}, navItem), {
        path: `${navItem.path}${location.search}`
      })),
      activeItem: currentSection.urlSection,
      CurrentCard: /* @__PURE__ */ react.createElement(CurrentCard, { router, location })
    }
  ));
};
/* harmony default export */ var Variables_Variables = (Variables);


/***/ })

}]);