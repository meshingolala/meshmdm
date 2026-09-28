"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[964],{

/***/ 37243:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ManageHostsPage_ManageHostsPage; }
});

// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 5 modules
var format = __webpack_require__(54070);
// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/FleetsDropdown/index.tsx + 1 modules
var FleetsDropdown = __webpack_require__(82196);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/InfoBanner.tsx
var InfoBanner = __webpack_require__(36321);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
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
// EXTERNAL MODULE: ./frontend/context/table.tsx
var table = __webpack_require__(69807);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/pages/labels/helpers.ts
var helpers = __webpack_require__(67021);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config_profiles.ts
var config_profiles = __webpack_require__(7733);
// EXTERNAL MODULE: ./frontend/services/entities/enroll_secret.ts + 1 modules
var enroll_secret = __webpack_require__(90295);
// EXTERNAL MODULE: ./frontend/services/entities/host_count.ts
var host_count = __webpack_require__(12740);
// EXTERNAL MODULE: ./frontend/services/entities/hosts.ts
var hosts = __webpack_require__(42235);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/services/entities/operating_systems.ts
var operating_systems = __webpack_require__(91310);
// EXTERNAL MODULE: ./frontend/services/entities/policies.ts
var policies = __webpack_require__(10664);
// EXTERNAL MODULE: ./frontend/services/entities/scripts.ts
var entities_scripts = __webpack_require__(87844);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var entities_teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/services/entities/users.ts
var users = __webpack_require__(7176);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/sort/index.ts + 1 modules
var sort = __webpack_require__(81302);
// EXTERNAL MODULE: ./frontend/utilities/strings/stringUtils.ts
var stringUtils = __webpack_require__(18165);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/AddHostsModal/index.ts + 11 modules
var AddHostsModal = __webpack_require__(60819);
// EXTERNAL MODULE: ./frontend/components/EnrollSecrets/DeleteSecretModal/index.ts + 1 modules
var DeleteSecretModal = __webpack_require__(75273);
// EXTERNAL MODULE: ./frontend/components/EnrollSecrets/EnrollSecretModal/index.ts + 5 modules
var EnrollSecretModal = __webpack_require__(66654);
// EXTERNAL MODULE: ./frontend/components/EnrollSecrets/SecretEditorModal/index.ts + 1 modules
var SecretEditorModal = __webpack_require__(63022);
// EXTERNAL MODULE: ./frontend/pages/hosts/components/DeleteHostModal/index.ts + 1 modules
var DeleteHostModal = __webpack_require__(49619);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var interfaces_platform = __webpack_require__(43015);
;// ./frontend/pages/hosts/components/DeleteHostModal/helpers.ts


const deleteCopyGroup = (platform) => {
  if ((0,interfaces_platform/* isAndroid */.m0)(platform)) return "android";
  if ((0,interfaces_platform/* isIPadOrIPhone */.l)(platform)) return "ios";
  if ((0,interfaces_platform/* isMacOS */.U0)(platform)) return "macos";
  if ((0,interfaces_platform/* isWindows */.uF)(platform)) return "windows";
  if ((0,interfaces_platform/* isLinuxLike */.eX)(platform)) return "linux";
  return "other";
};
const getSharedDeleteHostTarget = (hosts) => {
  var _a, _b, _c;
  if (hosts.length === 0) {
    return void 0;
  }
  const [first, ...rest] = hosts;
  const group = deleteCopyGroup(first.platform);
  if (group === "other") {
    return void 0;
  }
  const target = {
    platform: first.platform,
    isMdmEnrolledInFleet: !!((_a = first.mdm) == null ? void 0 : _a.connected_to_fleet),
    mdmEnrollmentStatus: (_c = (_b = first.mdm) == null ? void 0 : _b.enrollment_status) != null ? _c : null
  };
  const sameCopy = rest.every((host) => {
    var _a2, _b2, _c2;
    if (deleteCopyGroup(host.platform) !== group) {
      return false;
    }
    if (group !== "macos") {
      return true;
    }
    return !!((_a2 = host.mdm) == null ? void 0 : _a2.connected_to_fleet) === target.isMdmEnrolledInFleet && ((_c2 = (_b2 = host.mdm) == null ? void 0 : _b2.enrollment_status) != null ? _c2 : null) === target.mdmEnrollmentStatus;
  });
  return sameCopy ? target : void 0;
};

// EXTERNAL MODULE: ./frontend/pages/hosts/components/TransferHostModal/index.ts + 1 modules
var TransferHostModal = __webpack_require__(62438);
// EXTERNAL MODULE: ./frontend/pages/hosts/ManageHostsPage/components/DeleteLabelModal/index.ts + 1 modules
var DeleteLabelModal = __webpack_require__(59105);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(51339);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(83725);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.find.js
var esnext_iterator_find = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__(35019);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
;// ./frontend/pages/hosts/ManageHostsPage/components/EditColumnsModal/EditColumnsModal.jsx

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









const baseClass = "edit-columns-modal";
const useCheckboxListStateManagement = (allColumns, hiddenColumns) => {
  const [columnItems, setColumnItems] = (0,react.useState)(() => {
    return allColumns.map((column) => {
      return {
        name: column.title,
        id: column.id,
        isChecked: !hiddenColumns.includes(column.id),
        disableHidden: column.disableHidden
      };
    });
  });
  const updateColumnItems = (columnId) => {
    setColumnItems((prevState) => {
      const selectedColumn = columnItems.find((column) => column.id === columnId);
      const updatedColumn = __spreadProps(__spreadValues({}, selectedColumn), {
        isChecked: !selectedColumn.isChecked
      });
      const newState = prevState.map((currentColumn) => {
        return currentColumn.id === columnId ? updatedColumn : currentColumn;
      });
      return newState;
    });
  };
  return [columnItems, updateColumnItems];
};
const getHiddenColumns = (columns) => {
  return columns.filter((column) => !column.isChecked).map((column) => column.id);
};
const EditColumnsModal = ({
  columns,
  hiddenColumns,
  onSaveColumns,
  onCancelColumns
}) => {
  const [columnItems, updateColumnItems] = useCheckboxListStateManagement(columns, hiddenColumns);
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, {
    title: "Edit columns",
    onExit: onCancelColumns,
    className: baseClass
  }, /* @__PURE__ */ react.createElement("div", {
    className: "form"
  }, /* @__PURE__ */ react.createElement("p", null, "Choose which columns you see:"), /* @__PURE__ */ react.createElement("div", {
    className: `${baseClass}__column-headers`
  }, columnItems.map((column) => {
    if (column.disableHidden) return null;
    return /* @__PURE__ */ react.createElement("div", {
      key: column.id
    }, /* @__PURE__ */ react.createElement(Checkbox/* default */.A, {
      name: column.name,
      value: column.isChecked,
      onChange: () => updateColumnItems(column.id)
    }, /* @__PURE__ */ react.createElement("span", null, column.name)));
  })), /* @__PURE__ */ react.createElement("div", {
    className: "modal-cta-wrap"
  }, /* @__PURE__ */ react.createElement(Button/* default */.A, {
    onClick: () => onSaveColumns(getHiddenColumns(columnItems))
  }, "Save"), /* @__PURE__ */ react.createElement(Button/* default */.A, {
    onClick: onCancelColumns,
    variant: "secondary"
  }, "Cancel"))));
};
EditColumnsModal.propTypes = {
  columns: prop_types_default().arrayOf((prop_types_default()).object),
  // eslint-disable-line react/forbid-prop-types
  hiddenColumns: prop_types_default().arrayOf((prop_types_default()).string),
  onSaveColumns: (prop_types_default()).func,
  onCancelColumns: (prop_types_default()).func
};
/* harmony default export */ var EditColumnsModal_EditColumnsModal = (EditColumnsModal);

// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_url/valid_url.ts
var valid_url = __webpack_require__(90879);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
;// ./frontend/pages/hosts/ManageHostsPage/components/HostActivityAutomationsModal/HostActivityAutomationsModal.tsx

var HostActivityAutomationsModal_defProp = Object.defineProperty;
var HostActivityAutomationsModal_defProps = Object.defineProperties;
var HostActivityAutomationsModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var HostActivityAutomationsModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var HostActivityAutomationsModal_hasOwnProp = Object.prototype.hasOwnProperty;
var HostActivityAutomationsModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var HostActivityAutomationsModal_defNormalProp = (obj, key, value) => key in obj ? HostActivityAutomationsModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var HostActivityAutomationsModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (HostActivityAutomationsModal_hasOwnProp.call(b, prop))
      HostActivityAutomationsModal_defNormalProp(a, prop, b[prop]);
  if (HostActivityAutomationsModal_getOwnPropSymbols)
    for (var prop of HostActivityAutomationsModal_getOwnPropSymbols(b)) {
      if (HostActivityAutomationsModal_propIsEnum.call(b, prop))
        HostActivityAutomationsModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var HostActivityAutomationsModal_spreadProps = (a, b) => HostActivityAutomationsModal_defProps(a, HostActivityAutomationsModal_getOwnPropDescs(b));











const HostActivityAutomationsModal_baseClass = "host-activity-automations-modal";
const HostActivityAutomationsModal = ({
  automationSettings,
  fleetName,
  onSubmit,
  onExit,
  isUpdating
}) => {
  const {
    enable_host_activities_webhook: enabled = false,
    destination_url: url = ""
  } = automationSettings || {};
  const [formData, setFormData] = (0,react.useState)({
    enabled,
    url
  });
  const [formErrors, setFormErrors] = (0,react.useState)(
    {}
  );
  const [showExamplePayload, setShowExamplePayload] = (0,react.useState)(false);
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)();
  const isValidDestinationURL = (destinationURL) => (0,valid_url/* default */.A)({ url: destinationURL || "", protocols: ["http", "https"] });
  const validateForm = (data) => {
    const errors = {};
    if (data.enabled && !isValidDestinationURL(data.url)) {
      const errorPrefix = data.url ? `${data.url} is not` : "Please enter";
      errors.url = `${errorPrefix} a valid destination URL`;
    }
    return errors;
  };
  const onFeatureEnabledChange = () => {
    const newFormData = HostActivityAutomationsModal_spreadProps(HostActivityAutomationsModal_spreadValues({}, formData), { enabled: !formData.enabled });
    const isDisabling = newFormData.enabled === false;
    if (isDisabling) {
      if (!isValidDestinationURL(newFormData.url)) {
        newFormData.url = "";
      }
      setFormErrors({});
      setShowExamplePayload(false);
    }
    setFormData(newFormData);
  };
  const onUrlChange = (value) => {
    const newFormData = HostActivityAutomationsModal_spreadProps(HostActivityAutomationsModal_spreadValues({}, formData), { url: value });
    if (formErrors.url) {
      setFormErrors(validateForm(newFormData));
    }
    setFormData(newFormData);
  };
  const onModalSubmit = () => {
    if (gitOpsModeEnabled) {
      return;
    }
    const newErrors = validateForm(formData);
    setFormErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };
  const renderExamplePayload = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("pre", null, "POST https://server.com/example"), /* @__PURE__ */ react.createElement(
      "pre",
      {
        dangerouslySetInnerHTML: {
          __html: (0,utilities_helpers/* syntaxHighlight */._j)({
            timestamp: "0000-00-00T00:00:00Z",
            actor_full_name: "Anna Chao",
            actor_id: 321,
            actor_email: "anna.chao@example.com",
            type: "ran_script",
            details: {
              host_id: 42,
              host_display_name: "Anna's MacBook Pro",
              script_name: "remediate.sh",
              script_execution_id: "e797d6c6-3aae-11ee-be56-0242ac120002",
              async: true
            }
          })
        }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "form-field__help-text" }, "To see the data included in each activity, check out the documentation for", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/learn-more-about/audit-logs",
        text: "audit logs",
        newTab: true
      }
    )));
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: HostActivityAutomationsModal_baseClass,
      title: "Activity automations",
      width: "large",
      onExit,
      onEnter: onModalSubmit
    },
    /* @__PURE__ */ react.createElement("div", { className: `${HostActivityAutomationsModal_baseClass} form` }, /* @__PURE__ */ react.createElement("p", null, "Send webhooks for host-level activities on the ", /* @__PURE__ */ react.createElement("b", null, fleetName), " ", "fleet. These activities can be found on individual host detail pages under ", /* @__PURE__ */ react.createElement("b", null, "Activity > Past"), "."), /* @__PURE__ */ react.createElement(
      Slider/* default */.A,
      {
        value: formData.enabled,
        onChange: onFeatureEnabledChange,
        inactiveText: "Disabled",
        activeText: "Enabled",
        disabled: gitOpsModeEnabled
      }
    ), /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `form ${formData.enabled ? "" : "form-fields--disabled"}`
      },
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          placeholder: "https://server.com/example",
          label: "Destination URL",
          onChange: onUrlChange,
          name: "url",
          value: formData.url,
          error: formErrors.url,
          helpText: "Fleet will send a JSON payload to this URL whenever a new activity is generated.",
          disabled: !formData.enabled || gitOpsModeEnabled
        }
      )
    ), /* @__PURE__ */ react.createElement(
      RevealButton/* default */.A,
      {
        isShowing: showExamplePayload,
        className: `${HostActivityAutomationsModal_baseClass}__show-example-payload-toggle`,
        hideText: "Example payload",
        showText: "Example payload",
        caretPosition: "after",
        onClick: () => {
          setShowExamplePayload(!showExamplePayload);
        }
      }
    ), showExamplePayload && renderExamplePayload(), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        tipOffset: 8,
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            onClick: onModalSubmit,
            className: "save-loading",
            isLoading: isUpdating,
            disabled: disableChildren || isUpdating || Object.keys(formErrors).length > 0
          },
          "Save"
        )
      }
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var HostActivityAutomationsModal_HostActivityAutomationsModal = (HostActivityAutomationsModal);

;// ./frontend/pages/hosts/ManageHostsPage/components/HostActivityAutomationsModal/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/interfaces/mdm.ts
var interfaces_mdm = __webpack_require__(42550);
// EXTERNAL MODULE: ./frontend/interfaces/operating_system.ts
var operating_system = __webpack_require__(49817);
// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/ABMIssueHosts/ABMIssueHosts.tsx
var ABMIssueHosts = __webpack_require__(19543);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
;// ./frontend/pages/hosts/ManageHostsPage/HostsPageConfig.tsx


const MANAGE_HOSTS_PAGE_FILTER_KEYS = [
  "query",
  "fleet_id",
  "policy_id",
  "policy_response",
  "apple_settings",
  "macos_settings",
  "software_id",
  "software_version_id",
  "software_title_id",
  hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS,
  "status",
  "mdm_id",
  "mdm_enrollment_status",
  "os_name",
  "os_version",
  "os_version_id",
  "vulnerability",
  "munki_issue_id",
  "low_disk_space",
  hosts/* HOSTS_QUERY_PARAMS */.c.OS_SETTINGS,
  hosts/* HOSTS_QUERY_PARAMS */.c.DISK_ENCRYPTION,
  "macos_bootstrap_package",
  "bootstrap_package",
  "profile_status",
  "profile_uuid",
  "dep_profile_error",
  "dep_assign_profile_response",
  hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_STATUS,
  hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_ID
];
const MANAGE_HOSTS_PAGE_LABEL_INCOMPATIBLE_QUERY_PARAMS = [
  "policy_id",
  "policy_response",
  "software_id",
  "software_version_id",
  "software_title_id",
  hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS,
  "macos_bootstrap_package",
  "bootstrap_package",
  "apple_settings",
  "macos_settings",
  hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_STATUS,
  hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_ID
];
const LABEL_SLUG_PREFIX = "labels/";
const DEFAULT_SORT_HEADER = "display_name";
const DEFAULT_SORT_DIRECTION = "asc";
const DEFAULT_PAGE_SIZE = 50;
const DEFAULT_PAGE_INDEX = 0;
const TIME_AGO_SORT_HEADERS = /* @__PURE__ */ new Set([
  "seen_time",
  "detail_updated_at",
  "last_restarted_at",
  "last_enrolled_at"
]);
const toApiSortBy = (sortBy) => sortBy.map((s) => {
  if (!TIME_AGO_SORT_HEADERS.has(s.key)) return s;
  return {
    key: s.key,
    direction: s.direction === "asc" ? "desc" : "asc"
  };
});
const hostSelectStatuses = (isPremiumTier) => {
  const baseStatuses = [
    {
      disabled: false,
      label: "All hosts",
      value: "",
      helpText: "All hosts added to Fleet."
    },
    {
      disabled: false,
      label: "Online hosts",
      value: "online",
      helpText: "Hosts that have recently checked into Fleet."
    },
    {
      disabled: false,
      label: "Offline hosts",
      value: "offline",
      helpText: "Hosts that haven't recently checked into Fleet."
    },
    {
      disabled: false,
      label: "Missing hosts",
      value: "missing",
      helpText: "Hosts that have been offline for 30 days or more."
    },
    {
      disabled: false,
      label: "New hosts",
      value: "new",
      helpText: "Hosts added to Mesh in the last 24 hours."
    },
    {
      disabled: false,
      label: "Enrolled hosts",
      value: "enrolled",
      helpText: "Hosts that have enrolled to Fleet. Excludes hosts pending enrollment."
    }
  ];
  const premiumStatuses = [
    {
      disabled: false,
      label: "Pending hosts",
      value: "pending",
      helpText: "Hosts pending enrollment."
    }
  ];
  return [...baseStatuses, ...isPremiumTier ? premiumStatuses : []];
};
const OS_SETTINGS_FILTER_OPTIONS = [
  {
    disabled: false,
    label: "Verified",
    value: "verified"
  },
  {
    disabled: false,
    label: "Verifying",
    value: "verifying"
  },
  {
    disabled: false,
    label: "Pending",
    value: "pending"
  },
  {
    disabled: false,
    label: "Failed",
    value: "failed"
  }
];

;// ./frontend/pages/hosts/ManageHostsPage/components/BootstrapPackageStatusFilter/BootstrapPackageStatusFilter.tsx




const BootstrapPackageStatusFilter_baseClass = "bootstrap-package-status-filter";
const BOOTSTRAP_PACKAGE_STATUS = [
  {
    disabled: false,
    label: "Installed",
    value: interfaces_mdm/* BootstrapPackageStatus */.z$.INSTALLED
  },
  {
    disabled: false,
    label: "Pending",
    value: interfaces_mdm/* BootstrapPackageStatus */.z$.PENDING
  },
  {
    disabled: false,
    label: "Failed",
    value: interfaces_mdm/* BootstrapPackageStatus */.z$.FAILED
  }
];
const BootstrapPackageStatusFilter = ({
  bootstrapPackageStatus,
  onChange
}) => {
  const value = bootstrapPackageStatus;
  return /* @__PURE__ */ react.createElement("div", { className: BootstrapPackageStatusFilter_baseClass }, /* @__PURE__ */ react.createElement(
    Dropdown/* default */.A,
    {
      value,
      className: `${BootstrapPackageStatusFilter_baseClass}__status-filter`,
      options: BOOTSTRAP_PACKAGE_STATUS,
      searchable: false,
      onChange,
      iconName: "filter-alt"
    }
  ));
};
/* harmony default export */ var BootstrapPackageStatusFilter_BootstrapPackageStatusFilter = (BootstrapPackageStatusFilter);

;// ./frontend/pages/hosts/ManageHostsPage/components/DiskEncryptionStatusFilter/DiskEncryptionStatusFilter.tsx



const DiskEncryptionStatusFilter_baseClass = "disk-encryption-status-filter";
const DISK_ENCRYPTION_STATUS_OPTIONS = [
  {
    disabled: false,
    label: "Verified",
    value: "verified"
  },
  {
    disabled: false,
    label: "Verifying",
    value: "verifying"
  },
  {
    disabled: false,
    label: "Action required",
    value: "action_required"
  },
  {
    disabled: false,
    label: "Enforcing",
    value: "enforcing"
  },
  {
    disabled: false,
    label: "Failed",
    value: "failed"
  },
  {
    disabled: false,
    label: "Removing enforcement",
    value: "removing_enforcement"
  }
];
const DiskEncryptionStatusFilter = ({
  diskEncryptionStatus,
  onChange
}) => {
  const value = diskEncryptionStatus;
  return /* @__PURE__ */ react.createElement("div", { className: DiskEncryptionStatusFilter_baseClass }, /* @__PURE__ */ react.createElement(
    Dropdown/* default */.A,
    {
      value,
      className: `${DiskEncryptionStatusFilter_baseClass}__status-filter`,
      options: DISK_ENCRYPTION_STATUS_OPTIONS,
      searchable: false,
      onChange,
      iconName: "filter-alt"
    }
  ));
};
/* harmony default export */ var DiskEncryptionStatusFilter_DiskEncryptionStatusFilter = (DiskEncryptionStatusFilter);

;// ./frontend/pages/hosts/ManageHostsPage/components/DiskEncryptionStatusFilter/index.ts



// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/Tag/index.ts + 1 modules
var Tag = __webpack_require__(42619);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/hooks/useCheckTruncatedElement.ts
var useCheckTruncatedElement = __webpack_require__(16087);
;// ./frontend/pages/hosts/ManageHostsPage/components/FilterPill/FilterPill.tsx







const FilterPill_baseClass = "filter-pill";
const FilterPill = ({
  label,
  icon,
  tooltipDescription,
  className,
  onClear
}) => {
  const baseClasses = classnames_default()(FilterPill_baseClass, className);
  const labelClasses = `${FilterPill_baseClass}__label`;
  const pillText = (0,react.useRef)(null);
  const isTruncated = (0,useCheckTruncatedElement/* useCheckTruncatedElement */.K)(pillText);
  const [tooltipContent, setTooltipContent] = (0,react.useState)(tooltipDescription);
  if (isTruncated && !tooltipContent) {
    setTooltipContent(label);
  }
  const labelWithTooltip = tooltipContent ? /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: tooltipContent,
      position: "top",
      underline: false,
      showArrow: true,
      tipOffset: 12
    },
    /* @__PURE__ */ react.createElement("span", { ref: pillText, className: `${FilterPill_baseClass}__tooltip-text` }, label)
  ) : /* @__PURE__ */ react.createElement("span", { ref: pillText, className: `${FilterPill_baseClass}__tooltip-text` }, label);
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      className: baseClasses,
      role: "status",
      "aria-label": `hosts filtered by ${label}`
    },
    /* @__PURE__ */ react.createElement(
      Tag/* default */.A,
      {
        type: "dismissible",
        className: labelClasses,
        onDismiss: onClear,
        dismissLabel: `Remove ${label} filter`
      },
      icon && /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: icon }),
      labelWithTooltip
    )
  );
};
/* harmony default export */ var FilterPill_FilterPill = (FilterPill);

;// ./frontend/pages/hosts/ManageHostsPage/components/FilterPill/index.ts



;// ./frontend/pages/hosts/ManageHostsPage/components/PoliciesFilter/PoliciesFilter.tsx




const PoliciesFilter_baseClass = "policies-filter";
const POLICY_RESPONSE_OPTIONS = [
  {
    disabled: false,
    label: "Pass",
    value: constants/* PolicyResponse */.iI.PASSING
  },
  {
    disabled: false,
    label: "Fail",
    value: constants/* PolicyResponse */.iI.FAILING
  }
];
const PoliciesFilter = ({
  policyResponse,
  onChange
}) => {
  const value = policyResponse;
  return /* @__PURE__ */ react.createElement("div", { className: PoliciesFilter_baseClass }, /* @__PURE__ */ react.createElement(
    Dropdown/* default */.A,
    {
      value,
      className: `${PoliciesFilter_baseClass}__status-filter`,
      options: POLICY_RESPONSE_OPTIONS,
      searchable: false,
      onChange,
      iconName: "filter-alt"
    }
  ));
};
/* harmony default export */ var PoliciesFilter_PoliciesFilter = (PoliciesFilter);

;// ./frontend/pages/hosts/ManageHostsPage/components/PoliciesFilter/index.ts



;// ./frontend/pages/hosts/ManageHostsPage/components/HostsFilterBlock/HostsFilterBlock.tsx

var HostsFilterBlock_defProp = Object.defineProperty;
var HostsFilterBlock_defProps = Object.defineProperties;
var HostsFilterBlock_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var HostsFilterBlock_getOwnPropSymbols = Object.getOwnPropertySymbols;
var HostsFilterBlock_hasOwnProp = Object.prototype.hasOwnProperty;
var HostsFilterBlock_propIsEnum = Object.prototype.propertyIsEnumerable;
var HostsFilterBlock_defNormalProp = (obj, key, value) => key in obj ? HostsFilterBlock_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var HostsFilterBlock_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (HostsFilterBlock_hasOwnProp.call(b, prop))
      HostsFilterBlock_defNormalProp(a, prop, b[prop]);
  if (HostsFilterBlock_getOwnPropSymbols)
    for (var prop of HostsFilterBlock_getOwnPropSymbols(b)) {
      if (HostsFilterBlock_propIsEnum.call(b, prop))
        HostsFilterBlock_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var HostsFilterBlock_spreadProps = (a, b) => HostsFilterBlock_defProps(a, HostsFilterBlock_getOwnPropDescs(b));


















const HostsFilterBlock_baseClass = "hosts-filter-block";
const HostsFilterBlock = ({
  params: {
    policyId,
    macSettingsStatus,
    softwareId,
    softwareTitleId,
    softwareVersionId,
    mdmId,
    mdmEnrollmentStatus,
    lowDiskSpaceHosts,
    osVersionId,
    osName,
    osVersion,
    vulnerability,
    munkiIssueId,
    munkiIssueDetails,
    policyResponse,
    osVersions,
    softwareDetails,
    policy,
    mdmSolutionDetails,
    osSettingsStatus,
    diskEncryptionStatus,
    bootstrapPackageStatus,
    softwareStatus,
    configProfileStatus,
    configProfileUUID,
    configProfile,
    scriptBatchExecutionStatus,
    scriptBatchExecutionId,
    scriptBatchRanAt,
    scriptBatchScriptName,
    depProfileError,
    depAssignProfileResponse
  },
  selectedLabel,
  isOnlyObserver,
  handleClearRouteParam,
  handleClearFilter,
  onChangePoliciesFilter,
  onChangeOsSettingsFilter,
  onChangeDiskEncryptionStatusFilter,
  onChangeBootstrapPackageStatusFilter,
  onChangeMacSettingsFilter,
  onChangeSoftwareInstallStatusFilter,
  onChangeConfigProfileStatusFilter,
  onChangeScriptBatchStatusFilter,
  onClickEditLabel,
  onClickDeleteLabel,
  isLoading = false,
  isScriptPackage
}) => {
  const { currentUser, isOnGlobalTeam } = (0,react.useContext)(app/* AppContext */.BR);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null);
  }
  const renderLabelFilterPill = () => {
    if (selectedLabel) {
      const {
        description,
        display_text,
        label_type,
        label_membership_type
      } = selectedLabel;
      const pillLabel = (0,constants/* isPlatformLabelNameFromAPI */.PD)(display_text) && constants/* PLATFORM_LABEL_DISPLAY_NAMES */.Xd[display_text] || display_text;
      if (label_type === "builtin" && Object.keys(constants/* PLATFORM_TYPE_ICONS */.CP).includes(
        display_text
      )) {
        return /* @__PURE__ */ react.createElement(react.Fragment, null);
      }
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        FilterPill_FilterPill,
        {
          label: pillLabel,
          tooltipDescription: description,
          onClear: handleClearRouteParam
        }
      ), label_type !== "builtin" && !isOnlyObserver && (isOnGlobalTeam || (currentUser == null ? void 0 : currentUser.id) === selectedLabel.author_id) && /* @__PURE__ */ react.createElement(
        GitOpsModeTooltipWrapper/* default */.A,
        {
          entityType: "labels",
          renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
            react.Fragment,
            null,
            // TODO - remove condition if/when can edit host_vitals labels
            label_membership_type !== "host_vitals" && /* @__PURE__ */ react.createElement(
              Button/* default */.A,
              {
                className: `${HostsFilterBlock_baseClass}__action-btn`,
                onClick: onClickEditLabel,
                variant: "secondary",
                size: "small",
                disabled: disableChildren,
                icon: "pencil",
                ariaLabel: "Edit label"
              }
            ),
            /* @__PURE__ */ react.createElement(
              Button/* default */.A,
              {
                className: `${HostsFilterBlock_baseClass}__action-btn`,
                onClick: onClickDeleteLabel,
                variant: "secondary",
                size: "small",
                disabled: disableChildren,
                icon: "trash",
                ariaLabel: "Delete label"
              }
            )
          )
        }
      ));
    }
    return null;
  };
  const renderOSFilterBlock = () => {
    let os;
    if (osVersionId) {
      os = osVersions == null ? void 0 : osVersions.find(
        (v) => v.os_version_id === parseInt(osVersionId, 10)
      );
    } else if (osName && osVersion) {
      const name2 = osName;
      const vers = osVersion;
      os = osVersions == null ? void 0 : osVersions.find(
        ({ name_only: name_only2, version: version2 }) => name_only2.toLowerCase() === name2.toLowerCase() && version2.toLowerCase() === vers.toLowerCase()
      );
    }
    if (!os) return null;
    const { name, name_only, version } = os;
    const label = (0,operating_system/* formatOperatingSystemDisplayName */.xE)(
      name_only || version ? `${name_only || ""} ${version || ""}` : `${name || ""}`
    );
    const TooltipDescription = /* @__PURE__ */ react.createElement("span", null, "Hosts with ", (0,operating_system/* formatOperatingSystemDisplayName */.xE)(name_only || name), ",", /* @__PURE__ */ react.createElement("br", null), version && `${version} installed`);
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label,
        tooltipDescription: TooltipDescription,
        onClear: () => handleClearFilter(["os_version_id", "os_name", "os_version"])
      }
    );
  };
  const renderVulnerabilityFilterBlock = () => {
    if (!vulnerability) return null;
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label: vulnerability,
        tooltipDescription: /* @__PURE__ */ react.createElement("span", null, "Hosts affected by the specified CVE."),
        onClear: () => handleClearFilter(["vulnerability"])
      }
    );
  };
  const renderPoliciesFilterBlock = () => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      PoliciesFilter_PoliciesFilter,
      {
        policyResponse,
        onChange: onChangePoliciesFilter
      }
    ), /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        icon: "policy",
        label: (_a = policy == null ? void 0 : policy.name) != null ? _a : "...",
        onClear: () => handleClearFilter(["policy_id", "policy_response"]),
        className: `${HostsFilterBlock_baseClass}__policies-filter-pill`
      }
    ));
  };
  const renderMacSettingsStatusFilterBlock = () => {
    const label = "Apple settings";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        value: macSettingsStatus,
        className: `${HostsFilterBlock_baseClass}__macsettings-dropdown`,
        options: OS_SETTINGS_FILTER_OPTIONS,
        onChange: onChangeMacSettingsFilter,
        searchable: false,
        iconName: "filter-alt"
      }
    ), /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label,
        onClear: () => handleClearFilter(["macos_settings", "apple_settings"])
      }
    ));
  };
  const renderSoftwareFilterBlock = (additionalClearParams) => {
    if (!softwareDetails) return null;
    const { name, display_name, version } = softwareDetails;
    let label = (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(name, display_name);
    if (version) {
      label += ` ${(0,software/* formatSoftwareVersion */.hK)(HostsFilterBlock_spreadProps(HostsFilterBlock_spreadValues({}, softwareDetails), { version }))}`;
    }
    const clearParams = [
      "software_id",
      "software_version_id",
      "software_title_id"
    ];
    if (additionalClearParams == null ? void 0 : additionalClearParams.length) {
      clearParams.push(...additionalClearParams);
    }
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label,
        onClear: () => handleClearFilter(clearParams)
      }
    );
  };
  const renderMDMSolutionFilterBlock = () => {
    if (!mdmSolutionDetails) return null;
    const { name, server_url } = mdmSolutionDetails;
    const label = name ? `${name} ${server_url}` : `${server_url}`;
    const TooltipDescription = /* @__PURE__ */ react.createElement("span", null, "Host enrolled", name !== "Unknown" && ` to ${name}`, /* @__PURE__ */ react.createElement("br", null), " at ", server_url);
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label,
        tooltipDescription: TooltipDescription,
        onClear: () => handleClearFilter(["mdm_id"])
      }
    );
  };
  const renderMDMEnrollmentFilterBlock = () => {
    var _a;
    if (!mdmEnrollmentStatus) return null;
    const matchedStatus = Object.entries(interfaces_mdm/* MDM_ENROLLMENT_STATUS_UI_MAP */.rK).find(
      ([, v]) => v.filterValue === mdmEnrollmentStatus
    );
    const label = `MDM status: ${(_a = matchedStatus == null ? void 0 : matchedStatus[1].displayName) != null ? _a : mdmEnrollmentStatus}`;
    const apiStatus = matchedStatus == null ? void 0 : matchedStatus[0];
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label,
        tooltipDescription: apiStatus ? constants/* MDM_STATUS_TOOLTIP */.YQ[apiStatus] : void 0,
        onClear: () => handleClearFilter(["mdm_enrollment_status"])
      }
    );
  };
  const renderMunkiIssueFilterBlock = () => {
    if (munkiIssueDetails) {
      return /* @__PURE__ */ react.createElement(
        FilterPill_FilterPill,
        {
          label: munkiIssueDetails.name,
          tooltipDescription: /* @__PURE__ */ react.createElement("span", null, "Hosts that reported this Munki issue ", /* @__PURE__ */ react.createElement("br", null), "the last time Munki ran on each host."),
          onClear: () => handleClearFilter(["munki_issue_id"])
        }
      );
    }
    return null;
  };
  const renderLowDiskSpaceFilterBlock = () => {
    const TooltipDescription = /* @__PURE__ */ react.createElement("span", null, "Hosts that have ", lowDiskSpaceHosts, " GB or less ", /* @__PURE__ */ react.createElement("br", null), "disk space available.");
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label: "Low disk space",
        tooltipDescription: TooltipDescription,
        onClear: () => handleClearFilter(["low_disk_space"])
      }
    );
  };
  const renderOsSettingsBlock = () => {
    const label = "OS settings";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        value: osSettingsStatus,
        className: `${HostsFilterBlock_baseClass}__os_settings-dropdown`,
        options: OS_SETTINGS_FILTER_OPTIONS,
        onChange: onChangeOsSettingsFilter,
        searchable: false,
        iconName: "filter-alt"
      }
    ), /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label,
        onClear: () => handleClearFilter([hosts/* HOSTS_QUERY_PARAMS */.c.OS_SETTINGS])
      }
    ));
  };
  const renderDiskEncryptionStatusBlock = () => {
    if (!diskEncryptionStatus) return null;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      DiskEncryptionStatusFilter_DiskEncryptionStatusFilter,
      {
        diskEncryptionStatus,
        onChange: onChangeDiskEncryptionStatusFilter
      }
    ), /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label: "OS settings: Disk encryption",
        onClear: () => handleClearFilter([hosts/* HOSTS_QUERY_PARAMS */.c.DISK_ENCRYPTION])
      }
    ));
  };
  const renderBootstrapPackageStatusBlock = () => {
    if (!bootstrapPackageStatus) return null;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      BootstrapPackageStatusFilter_BootstrapPackageStatusFilter,
      {
        bootstrapPackageStatus,
        onChange: onChangeBootstrapPackageStatusFilter
      }
    ), /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label: "macOS settings: bootstrap package",
        onClear: () => handleClearFilter(["macos_bootstrap_package", "bootstrap_package"])
      }
    ));
  };
  const renderSoftwareInstallStatusBlock = () => {
    const OPTIONS = [
      { value: "installed", label: isScriptPackage ? "Ran" : "Installed" },
      { value: "failed", label: "Failed" },
      { value: "pending", label: "Pending" }
    ];
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        value: softwareStatus,
        className: `${HostsFilterBlock_baseClass}__sw-install-status-dropdown`,
        options: OPTIONS,
        searchable: false,
        onChange: onChangeSoftwareInstallStatusFilter,
        iconName: "filter-alt"
      }
    ), renderSoftwareFilterBlock([hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS]));
  };
  const renderConfigProfileStatusBlock = () => {
    const OPTIONS = [
      { value: "verified", label: "Verified" },
      { value: "verifying", label: "Verifying" },
      { value: "pending", label: "Pending" },
      { value: "failed", label: "Failed" }
    ];
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        value: configProfileStatus,
        className: `${HostsFilterBlock_baseClass}__config-profile-status-dropdown`,
        options: OPTIONS,
        searchable: false,
        onChange: onChangeConfigProfileStatusFilter,
        iconName: "filter-alt"
      }
    ), /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label: `OS settings: ${configProfile == null ? void 0 : configProfile.name}`,
        onClear: () => handleClearFilter(["profile_status", "profile_uuid"])
      }
    ));
  };
  const renderScriptBatchExecutionBlock = () => {
    const OPTIONS = [
      { value: "ran", label: "Ran" },
      { value: "errored", label: "Error" },
      { value: "pending", label: "Pending" },
      { value: "incompatible", label: "Incompatible" },
      { value: "canceled", label: "Canceled" }
    ];
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        value: scriptBatchExecutionStatus,
        className: `${HostsFilterBlock_baseClass}__script-batch-status-dropdown`,
        options: OPTIONS,
        searchable: false,
        onChange: onChangeScriptBatchStatusFilter,
        iconName: "filter-alt"
      }
    ), scriptBatchScriptName && /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        label: scriptBatchScriptName,
        onClear: () => handleClearFilter([
          hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_ID,
          hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_STATUS
        ]),
        tooltipDescription: scriptBatchRanAt ? (0,date_format/* dateAgo */.gY)(scriptBatchRanAt) : null
      }
    ));
  };
  const renderDepProfileError = () => {
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        className: `${HostsFilterBlock_baseClass}__abm-issue-filter-pill`,
        label: "Apple Business (AB) issues",
        tooltipDescription: (0,ABMIssueHosts/* abmIssueTooltip */.T)(),
        onClear: () => handleClearFilter(["dep_profile_error"])
      }
    );
  };
  const renderDepAssignProfileResponse = () => {
    const renderLabel = () => {
      switch (depAssignProfileResponse) {
        case "SUCCESS":
          return "Apple Business (AB) profile assignment successful";
        case "FAILED":
          return "Apple Business (AB) issue: Failed";
        case "THROTTLED":
          return "Apple Business (AB) issue: Throttled";
        case "NOT_ACCESSIBLE":
          return "Apple Business (AB) issue: Not accessible";
        default:
          return "Apple Business (AB) issues";
      }
    };
    const renderTooltip = () => {
      switch (depAssignProfileResponse) {
        case "SUCCESS":
          return "Hosts that had a successful response from Apple Business (AB) for profile assignment.";
        case "FAILED":
          return /* @__PURE__ */ react.createElement(react.Fragment, null, "Migration or new Mac setup won't work. Apple's servers rejected the request to assign a profile to these hosts. Fleet will try again every hour.");
        case "THROTTLED":
          return /* @__PURE__ */ react.createElement(react.Fragment, null, "Migration or new Mac setup won't work. Mesh hit Apple's API rate limit when preparing the macOS Setup Assistant for these hosts. Mesh will try again within 24 hours of each host's last throttled response.");
        case "NOT_ACCESSIBLE":
          return /* @__PURE__ */ react.createElement(react.Fragment, null, "Migration or new Mac setup won't work. Details are not accessible from Apple Business (AB). Verify these hosts are assigned to your MDM server and Mesh has access permissions.");
        default:
          return (0,ABMIssueHosts/* abmIssueTooltip */.T)();
      }
    };
    return /* @__PURE__ */ react.createElement(
      FilterPill_FilterPill,
      {
        className: `${HostsFilterBlock_baseClass}__abm-issue-filter-pill`,
        label: renderLabel(),
        tooltipDescription: renderTooltip(),
        onClear: () => handleClearFilter(["dep_assign_profile_response"])
      }
    );
  };
  const showSelectedLabel = selectedLabel && selectedLabel.type !== "all" && selectedLabel.type !== "platform";
  if (showSelectedLabel || policyId || macSettingsStatus || softwareId || softwareTitleId || softwareVersionId || softwareStatus || mdmId || mdmEnrollmentStatus || lowDiskSpaceHosts || osVersionId || osName && osVersion || munkiIssueId || osSettingsStatus || diskEncryptionStatus || bootstrapPackageStatus || vulnerability || configProfileStatus && configProfileUUID && configProfile || scriptBatchExecutionStatus && scriptBatchExecutionId || depProfileError || depAssignProfileResponse) {
    const renderFilterPill = () => {
      switch (true) {
        // backend allows for pill combos (label + low disk space) OR
        // (label + mdm solution) OR (label + mdm enrollment status) OR
        // (label + os settings) OR (label + disk encryption)
        case (showSelectedLabel && !!lowDiskSpaceHosts):
          return /* @__PURE__ */ react.createElement(react.Fragment, null, renderLabelFilterPill(), " ", renderLowDiskSpaceFilterBlock());
        case (showSelectedLabel && !!mdmId):
          return /* @__PURE__ */ react.createElement(react.Fragment, null, renderLabelFilterPill(), " ", renderMDMSolutionFilterBlock());
        case (showSelectedLabel && !!mdmEnrollmentStatus):
          return /* @__PURE__ */ react.createElement(react.Fragment, null, renderLabelFilterPill(), " ", renderMDMEnrollmentFilterBlock());
        case (showSelectedLabel && !!osSettingsStatus):
          return /* @__PURE__ */ react.createElement(react.Fragment, null, renderLabelFilterPill(), " ", renderOsSettingsBlock());
        case (showSelectedLabel && !!diskEncryptionStatus):
          return /* @__PURE__ */ react.createElement(react.Fragment, null, renderLabelFilterPill(), " ", renderDiskEncryptionStatusBlock());
        case showSelectedLabel:
          return renderLabelFilterPill();
        case !!policyId:
          return renderPoliciesFilterBlock();
        case !!macSettingsStatus:
          return renderMacSettingsStatusFilterBlock();
        case !!softwareStatus:
          return renderSoftwareInstallStatusBlock();
        case (!!softwareId || !!softwareVersionId || !!softwareTitleId):
          if (!!osVersionId || !!osName && !!osVersion) {
            return /* @__PURE__ */ react.createElement("div", { className: `${HostsFilterBlock_baseClass}__multi-filter` }, renderSoftwareFilterBlock(), renderOSFilterBlock());
          }
          return renderSoftwareFilterBlock();
        case !!mdmId:
          return renderMDMSolutionFilterBlock();
        case !!mdmEnrollmentStatus:
          return renderMDMEnrollmentFilterBlock();
        case (!!osVersionId || !!osName && !!osVersion):
          return renderOSFilterBlock();
        case !!vulnerability:
          return renderVulnerabilityFilterBlock();
        case !!munkiIssueId:
          return renderMunkiIssueFilterBlock();
        case !!lowDiskSpaceHosts:
          return renderLowDiskSpaceFilterBlock();
        case !!osSettingsStatus:
          return renderOsSettingsBlock();
        case !!diskEncryptionStatus:
          return renderDiskEncryptionStatusBlock();
        case !!bootstrapPackageStatus:
          return renderBootstrapPackageStatusBlock();
        case (!!configProfileStatus && !!configProfileUUID && !!configProfile):
          return renderConfigProfileStatusBlock();
        case (!!scriptBatchExecutionStatus && !!scriptBatchExecutionId):
          return renderScriptBatchExecutionBlock();
        case !!depProfileError:
          return renderDepProfileError();
        case !!depAssignProfileResponse:
          return renderDepAssignProfileResponse();
        default:
          return null;
      }
    };
    return /* @__PURE__ */ react.createElement("div", { className: `${HostsFilterBlock_baseClass}__labels-active-filter-wrap` }, renderFilterPill());
  }
  return null;
};
/* harmony default export */ var HostsFilterBlock_HostsFilterBlock = (HostsFilterBlock);

;// ./frontend/pages/hosts/ManageHostsPage/components/HostsFilterBlock/index.ts



// EXTERNAL MODULE: ./node_modules/react-select-5/dist/index-a7690a33.esm.js + 2 modules
var index_a7690a33_esm = __webpack_require__(92308);
// EXTERNAL MODULE: ./node_modules/react-select-5/dist/react-select.esm.js + 7 modules
var react_select_esm = __webpack_require__(81607);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
;// ./frontend/pages/hosts/ManageHostsPage/components/CustomDropdownIndicator/CustomDropdownIndicator.tsx

var CustomDropdownIndicator_defProp = Object.defineProperty;
var CustomDropdownIndicator_defProps = Object.defineProperties;
var CustomDropdownIndicator_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var CustomDropdownIndicator_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CustomDropdownIndicator_hasOwnProp = Object.prototype.hasOwnProperty;
var CustomDropdownIndicator_propIsEnum = Object.prototype.propertyIsEnumerable;
var CustomDropdownIndicator_defNormalProp = (obj, key, value) => key in obj ? CustomDropdownIndicator_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CustomDropdownIndicator_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CustomDropdownIndicator_hasOwnProp.call(b, prop))
      CustomDropdownIndicator_defNormalProp(a, prop, b[prop]);
  if (CustomDropdownIndicator_getOwnPropSymbols)
    for (var prop of CustomDropdownIndicator_getOwnPropSymbols(b)) {
      if (CustomDropdownIndicator_propIsEnum.call(b, prop))
        CustomDropdownIndicator_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CustomDropdownIndicator_spreadProps = (a, b) => CustomDropdownIndicator_defProps(a, CustomDropdownIndicator_getOwnPropDescs(b));



const CustomDropdownIndicator_baseClass = "custom-dropdown-indicator";
const CustomDropdownIndicator = (props) => {
  const { isFocused, selectProps } = props;
  const color = isFocused || selectProps.menuIsOpen ? "core-fleet-black" : "ui-fleet-black-75";
  return /* @__PURE__ */ react.createElement(index_a7690a33_esm.c.DropdownIndicator, CustomDropdownIndicator_spreadProps(CustomDropdownIndicator_spreadValues({}, props), { className: CustomDropdownIndicator_baseClass }), /* @__PURE__ */ react.createElement(
    Icon/* default */.A,
    {
      name: "chevron-down",
      color,
      className: `${CustomDropdownIndicator_baseClass}__icon`
    }
  ));
};
/* harmony default export */ var CustomDropdownIndicator_CustomDropdownIndicator = (CustomDropdownIndicator);

;// ./frontend/pages/hosts/ManageHostsPage/components/CustomDropdownIndicator/index.ts



// EXTERNAL MODULE: ./frontend/components/Icon/Icon.tsx + 74 modules
var Icon_Icon = __webpack_require__(99742);
;// ./frontend/pages/hosts/ManageHostsPage/components/CustomLabelGroupHeading/CustomLabelGroupHeading.tsx

var CustomLabelGroupHeading_defProp = Object.defineProperty;
var CustomLabelGroupHeading_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CustomLabelGroupHeading_hasOwnProp = Object.prototype.hasOwnProperty;
var CustomLabelGroupHeading_propIsEnum = Object.prototype.propertyIsEnumerable;
var CustomLabelGroupHeading_defNormalProp = (obj, key, value) => key in obj ? CustomLabelGroupHeading_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CustomLabelGroupHeading_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CustomLabelGroupHeading_hasOwnProp.call(b, prop))
      CustomLabelGroupHeading_defNormalProp(a, prop, b[prop]);
  if (CustomLabelGroupHeading_getOwnPropSymbols)
    for (var prop of CustomLabelGroupHeading_getOwnPropSymbols(b)) {
      if (CustomLabelGroupHeading_propIsEnum.call(b, prop))
        CustomLabelGroupHeading_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const CustomLabelGroupHeading_baseClass = "custom-label-group-heading";
const CustomLabelGroupHeading = (props) => {
  const { data, selectProps } = props;
  const {
    labelQuery,
    canAddNewLabels,
    onAddLabel,
    onChangeLabelQuery,
    onClickLabelSearchInput,
    onBlurLabelSearchInput
  } = selectProps;
  const inputRef = (0,react.useRef)(null);
  const handleInputClick = (event) => {
    var _a;
    onClickLabelSearchInput && onClickLabelSearchInput(event);
    (_a = inputRef.current) == null ? void 0 : _a.focus();
    event.stopPropagation();
  };
  return data.type === "platform" ? /* @__PURE__ */ react.createElement(index_a7690a33_esm.c.GroupHeading, CustomLabelGroupHeading_spreadValues({}, props), /* @__PURE__ */ react.createElement("div", { className: `${CustomLabelGroupHeading_baseClass}__labels-header` }, /* @__PURE__ */ react.createElement("span", { className: `${CustomLabelGroupHeading_baseClass}__label-title` }, props.children))) : /* @__PURE__ */ react.createElement(index_a7690a33_esm.c.GroupHeading, CustomLabelGroupHeading_spreadValues({}, props), /* @__PURE__ */ react.createElement("div", { className: `${CustomLabelGroupHeading_baseClass}__labels-header` }, /* @__PURE__ */ react.createElement("span", { className: `${CustomLabelGroupHeading_baseClass}__label-title` }, props.children)), /* @__PURE__ */ react.createElement("div", { className: `${CustomLabelGroupHeading_baseClass}__field` }, /* @__PURE__ */ react.createElement(
    "input",
    {
      className: `${CustomLabelGroupHeading_baseClass}__input`,
      ref: inputRef,
      value: labelQuery,
      name: "label-search-input",
      type: "text",
      placeholder: "Filter labels by name...",
      onKeyDown: (event) => {
        event.stopPropagation();
      },
      onChange: onChangeLabelQuery,
      onClick: handleInputClick,
      onBlur: onBlurLabelSearchInput
    }
  ), /* @__PURE__ */ react.createElement(Icon_Icon/* default */.A, { name: "search" }), canAddNewLabels && /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${CustomLabelGroupHeading_baseClass}__add-label-button`,
      variant: "secondary",
      onClick: onAddLabel,
      icon: "plus",
      ariaLabel: "Add label"
    }
  )));
};
/* harmony default export */ var CustomLabelGroupHeading_CustomLabelGroupHeading = (CustomLabelGroupHeading);

;// ./frontend/pages/hosts/ManageHostsPage/components/CustomLabelGroupHeading/index.ts



;// ./frontend/pages/hosts/ManageHostsPage/components/LabelFilterSelect/constants.ts

const NO_LABELS_OPTION = {
  label: "No custom labels",
  isDisabled: true
};
const EMPTY_OPTION = {
  label: "No matching labels",
  isDisabled: true
};
const FILTERED_LINUX = ["Red Hat Linux", "CentOS Linux", "Ubuntu Linux"];

;// ./frontend/pages/hosts/ManageHostsPage/components/LabelFilterSelect/helpers.ts



const createOptionGroup = (type, label, labels) => {
  return {
    type,
    label,
    options: labels
  };
};
const createCustomLabelOptions = (labels, query) => {
  const customLabels = (0,entities_labels/* getCustomLabels */.f2)(labels);
  let customLabelGroupOptions;
  if (customLabels.length === 0) {
    customLabelGroupOptions = [NO_LABELS_OPTION];
  } else {
    const matchingLabels = customLabels.filter(
      (label) => (
        // case-insensitive matching
        label.display_text.toLowerCase().includes(query.toLowerCase())
      )
    );
    customLabelGroupOptions = matchingLabels.length !== 0 ? matchingLabels : [EMPTY_OPTION];
  }
  return customLabelGroupOptions;
};
const createDropdownOptions = (labels, query) => {
  const builtInLabels = labels.filter(
    // we filter out All Hosts as that is included in hosts status dropdown filter
    (label) => label.type === "platform" && label.name !== "All Hosts" && !FILTERED_LINUX.includes(label.name)
  );
  const customLabels = createCustomLabelOptions(labels, query);
  const options = [
    createOptionGroup("platform", "Platforms", builtInLabels),
    createOptionGroup("custom", "Labels", customLabels)
  ];
  return options;
};

;// ./frontend/pages/hosts/ManageHostsPage/components/LabelFilterSelect/LabelFilterSelect.tsx

var LabelFilterSelect_defProp = Object.defineProperty;
var LabelFilterSelect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var LabelFilterSelect_hasOwnProp = Object.prototype.hasOwnProperty;
var LabelFilterSelect_propIsEnum = Object.prototype.propertyIsEnumerable;
var LabelFilterSelect_defNormalProp = (obj, key, value) => key in obj ? LabelFilterSelect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var LabelFilterSelect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (LabelFilterSelect_hasOwnProp.call(b, prop))
      LabelFilterSelect_defNormalProp(a, prop, b[prop]);
  if (LabelFilterSelect_getOwnPropSymbols)
    for (var prop of LabelFilterSelect_getOwnPropSymbols(b)) {
      if (LabelFilterSelect_propIsEnum.call(b, prop))
        LabelFilterSelect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (LabelFilterSelect_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && LabelFilterSelect_getOwnPropSymbols)
    for (var prop of LabelFilterSelect_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && LabelFilterSelect_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};










const LabelFilterSelect_baseClass = "label-filter-select";
const formatOptionLabel = (data) => {
  const isLabel = "display_text" in data;
  const isPlatform = isLabel && data.type === "platform";
  let displayText = isLabel ? data.display_text : data.label;
  if (isLabel && isPlatform) {
    if ((0,constants/* isPlatformLabelNameFromAPI */.PD)(data.display_text)) {
      displayText = constants/* PLATFORM_LABEL_DISPLAY_NAMES */.Xd[data.display_text];
    }
  }
  return /* @__PURE__ */ react.createElement("div", { className: "option-label" }, isLabel && (0,constants/* hasPlatformTypeIcon */.J6)(data.display_text) && /* @__PURE__ */ react.createElement(
    Icon/* default */.A,
    {
      name: constants/* PLATFORM_TYPE_ICONS */.CP[data.display_text],
      className: "option-icon"
    }
  ), /* @__PURE__ */ react.createElement(
    TooltipTruncatedText/* default */.A,
    {
      className: "option-label__text",
      value: displayText,
      fixedPositionStrategy: true
    }
  ));
};
const LoadingMenu = (props) => {
  return /* @__PURE__ */ react.createElement(index_a7690a33_esm.c.Menu, LabelFilterSelect_spreadValues({}, props), /* @__PURE__ */ react.createElement("div", { className: `${LabelFilterSelect_baseClass}__menu-loading` }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)));
};
const LabelFilterSelect = ({
  labels,
  selectedLabel,
  canAddNewLabels,
  className,
  onChange,
  onAddLabel,
  isLoading = false,
  isDisabled = false
}) => {
  const [labelQuery, setLabelQuery] = (0,react.useState)("");
  const [menuIsOpen, setMenuIsOpen] = (0,react.useState)(false);
  const isLabelSearchInputFocusedRef = (0,react.useRef)(false);
  const selectRef = (0,react.useRef)(null);
  const options = (0,react.useMemo)(() => createDropdownOptions(labels, labelQuery), [
    labels,
    labelQuery
  ]);
  const handleChange = (option) => {
    var _a;
    if (option === null) return;
    if ("type" in option) {
      setLabelQuery("");
      (_a = selectRef.current) == null ? void 0 : _a.blur();
      onChange(option);
    }
  };
  const toggleMenu = () => {
    var _a;
    menuIsOpen && ((_a = selectRef.current) == null ? void 0 : _a.blur());
    setMenuIsOpen(!menuIsOpen);
  };
  const onChangeLabelQuery = (event) => {
    event.stopPropagation();
    setLabelQuery(event.target.value);
  };
  const onBlur = () => {
    if (!isLabelSearchInputFocusedRef.current) {
      isLabelSearchInputFocusedRef.current = false;
      setMenuIsOpen(false);
    }
  };
  const onKeyDown = (e) => {
    var _a, _b;
    if (e.key === "Escape") {
      setMenuIsOpen(false);
      (_a = selectRef.current) == null ? void 0 : _a.blur();
    } else if (e.key === "Tab" && !e.shiftKey) {
      setMenuIsOpen(false);
      (_b = selectRef.current) == null ? void 0 : _b.blur();
    } else {
      setMenuIsOpen(true);
    }
  };
  const onClickLabelSearchInput = () => {
    isLabelSearchInputFocusedRef.current = true;
  };
  const onBlurLabelSearchInput = () => {
    isLabelSearchInputFocusedRef.current = false;
  };
  const getOptionLabel = (option) => {
    if ("display_text" in option) {
      return option.display_text;
    }
    return option.label;
  };
  const getOptionValue = (option) => {
    if ("id" in option) {
      return option.id.toString();
    }
    return option.label;
  };
  const classes = classnames_default()(LabelFilterSelect_baseClass, className);
  const ValueContainer = (_a) => {
    var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
    return index_a7690a33_esm.c.ValueContainer && /* @__PURE__ */ react.createElement(index_a7690a33_esm.c.ValueContainer, LabelFilterSelect_spreadValues({}, props), !!children && /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "filter-alt", className: "filter-icon" }), children);
  };
  return /* @__PURE__ */ react.createElement("div", { className: classes, onClick: isDisabled ? void 0 : toggleMenu }, /* @__PURE__ */ react.createElement(
    react_select_esm/* default */.Ay,
    LabelFilterSelect_spreadValues({
      ref: selectRef,
      name: "input-filter-select",
      classNamePrefix: LabelFilterSelect_baseClass,
      defaultMenuIsOpen: false,
      placeholder: "Filter by platform or label",
      value: selectedLabel,
      isSearchable: false,
      isDisabled,
      components: {
        GroupHeading: CustomLabelGroupHeading_CustomLabelGroupHeading,
        DropdownIndicator: CustomDropdownIndicator_CustomDropdownIndicator,
        ValueContainer,
        Menu: isLoading ? LoadingMenu : index_a7690a33_esm.c.Menu
      },
      onChange: handleChange,
      closeMenuOnSelect: true
    }, {
      menuIsOpen,
      options,
      formatOptionLabel,
      getOptionLabel,
      getOptionValue,
      labelQuery,
      canAddNewLabels,
      onKeyDown,
      onAddLabel,
      onBlur,
      onChangeLabelQuery,
      onClickLabelSearchInput,
      onBlurLabelSearchInput
    })
  ));
};
/* harmony default export */ var LabelFilterSelect_LabelFilterSelect = (LabelFilterSelect);

;// ./frontend/pages/hosts/ManageHostsPage/components/LabelFilterSelect/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/interfaces/script.ts
var interfaces_script = __webpack_require__(24063);
// EXTERNAL MODULE: ./frontend/pages/hosts/components/ScriptDetailsModal/index.ts + 1 modules
var ScriptDetailsModal = __webpack_require__(90886);
// EXTERNAL MODULE: ./frontend/components/PaginatedList/index.ts + 1 modules
var PaginatedList = __webpack_require__(92459);
;// ./frontend/pages/hosts/ManageHostsPage/components/RunScriptBatchPaginatedList/RunScriptBatchPaginatedList.tsx

var RunScriptBatchPaginatedList_defProp = Object.defineProperty;
var RunScriptBatchPaginatedList_getOwnPropSymbols = Object.getOwnPropertySymbols;
var RunScriptBatchPaginatedList_hasOwnProp = Object.prototype.hasOwnProperty;
var RunScriptBatchPaginatedList_propIsEnum = Object.prototype.propertyIsEnumerable;
var RunScriptBatchPaginatedList_defNormalProp = (obj, key, value) => key in obj ? RunScriptBatchPaginatedList_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var RunScriptBatchPaginatedList_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (RunScriptBatchPaginatedList_hasOwnProp.call(b, prop))
      RunScriptBatchPaginatedList_defNormalProp(a, prop, b[prop]);
  if (RunScriptBatchPaginatedList_getOwnPropSymbols)
    for (var prop of RunScriptBatchPaginatedList_getOwnPropSymbols(b)) {
      if (RunScriptBatchPaginatedList_propIsEnum.call(b, prop))
        RunScriptBatchPaginatedList_defNormalProp(a, prop, b[prop]);
    }
  return a;
};







const RunScriptBatchPaginatedList_baseClass = "run-script-batch-paginated-list";
const SCRIPT_BATCH_PAGE_SIZE = 6;
const RunScriptBatchPaginatedList = ({
  onRunScript: _onRunScript,
  isUpdating,
  isFreeTier,
  teamId,
  scriptCount,
  setScriptForDetails
}) => {
  const [pageNumber, setPageNumber] = (0,react.useState)(0);
  const queryKey = (0,interfaces_script/* addTeamIdCriteria */.V8)(
    {
      scope: "scripts",
      page: pageNumber,
      per_page: SCRIPT_BATCH_PAGE_SIZE
    },
    teamId,
    isFreeTier
  );
  const { data, isFetching } = (0,es.useQuery)([queryKey], () => {
    return entities_scripts/* default */.A.getScripts(queryKey);
  });
  const onRunScript = (0,react.useCallback)(
    (script, onChange) => {
      _onRunScript(script);
      onChange(RunScriptBatchPaginatedList_spreadValues({ hasRun: true }, script));
      return script;
    },
    [_onRunScript]
  );
  const onClickScriptRow = (0,react.useCallback)((script) => {
    setScriptForDetails(script);
    return script;
  }, []);
  const renderScriptRow = (script, onChange) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("a", null, script.name), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: "row-hover-button",
      variant: "secondary",
      onClick: (e) => {
        e.stopPropagation();
        onRunScript(script, onChange);
      }
    },
    script.hasRun ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Run again", /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "refresh", color: "ui-fleet-black-75" })) : /* @__PURE__ */ react.createElement(react.Fragment, null, "Run script", /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "run" }))
  ));
  return /* @__PURE__ */ react.createElement("div", { className: `${RunScriptBatchPaginatedList_baseClass}` }, /* @__PURE__ */ react.createElement(
    PaginatedList/* default */.A,
    {
      renderItemRow: renderScriptRow,
      count: scriptCount,
      data: (data == null ? void 0 : data.scripts) || [],
      onChangePage: setPageNumber,
      currentPage: pageNumber,
      onClickRow: onClickScriptRow,
      setDirtyOnClickRow: false,
      pageSize: SCRIPT_BATCH_PAGE_SIZE,
      disabled: isUpdating,
      useCheckBoxes: false,
      isLoading: isUpdating || isFetching
    }
  ));
};
/* harmony default export */ var RunScriptBatchPaginatedList_RunScriptBatchPaginatedList = (RunScriptBatchPaginatedList);

;// ./frontend/pages/hosts/ManageHostsPage/components/RunScriptBatchPaginatedList/index.ts



// EXTERNAL MODULE: ./node_modules/date-fns/parse.mjs + 43 modules
var parse = __webpack_require__(58380);
// EXTERNAL MODULE: ./node_modules/date-fns/isValid.mjs + 1 modules
var isValid = __webpack_require__(16074);
;// ./frontend/pages/hosts/ManageHostsPage/components/RunScriptBatchModal/helpers.ts


const FORM_VALIDATIONS = {
  date: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.date.length > 0;
        }
      },
      {
        name: "validDate",
        isValid: (formData) => {
          if (!formData.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            return false;
          }
          const parsedDate = (0,parse/* parse */.qg)(formData.date, "yyyy-MM-dd", /* @__PURE__ */ new Date());
          return (0,isValid/* isValid */.f)(parsedDate);
        },
        message: "Date (UTC) must have valid format"
      },
      {
        name: "notInPast",
        isValid: (formData) => {
          const now = /* @__PURE__ */ new Date();
          const parsedDate = (0,parse/* parse */.qg)(
            `${formData.date} 23:59:59.999`,
            "yyyy-MM-dd HH:mm:ss.SSS",
            now
          );
          return parsedDate >= now;
        },
        message: `Date (UTC) cannot be in the past`
      }
    ]
  },
  time: {
    validations: [
      {
        name: "required",
        isValid: (formData) => {
          return formData.time.length > 0;
        }
      },
      {
        name: "validTime",
        isValid: (formData) => {
          if (!formData.time.match(/^\d{2}:\d{2}$/)) {
            return false;
          }
          const parsedDate = (0,parse/* parse */.qg)(
            `1982-10-13 ${formData.time}`,
            "yyyy-MM-dd HH:mm",
            /* @__PURE__ */ new Date()
          );
          return (0,isValid/* isValid */.f)(parsedDate);
        },
        message: "Time (UTC) must have valid format"
      },
      {
        name: "notInPast",
        isValid: (formData, validations) => {
          var _a;
          if (((_a = validations == null ? void 0 : validations.date) == null ? void 0 : _a.isValid) === false) {
            return true;
          }
          const parsedDate = (0,parse/* parse */.qg)(
            `${formData.date} ${formData.time}:00.000Z`,
            "yyyy-MM-dd HH:mm:ss.SSSX",
            /* @__PURE__ */ new Date()
          );
          return parsedDate >= /* @__PURE__ */ new Date();
        },
        message: `Time (UTC) cannot be in the past`
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
const validateFormData = (formData, runMode = "run_now") => {
  const formValidation = {
    isValid: true
  };
  if (runMode === "run_now") {
    return formValidation;
  }
  Object.keys(FORM_VALIDATIONS).forEach((key) => {
    const objKey = key;
    const failedValidation = FORM_VALIDATIONS[objKey].validations.find(
      (validation) => !validation.isValid(formData, formValidation)
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

;// ./frontend/pages/hosts/ManageHostsPage/components/RunScriptBatchModal/RunScriptBatchModal.tsx

var RunScriptBatchModal_defProp = Object.defineProperty;
var RunScriptBatchModal_defProps = Object.defineProperties;
var RunScriptBatchModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var RunScriptBatchModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var RunScriptBatchModal_hasOwnProp = Object.prototype.hasOwnProperty;
var RunScriptBatchModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var RunScriptBatchModal_defNormalProp = (obj, key, value) => key in obj ? RunScriptBatchModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var RunScriptBatchModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (RunScriptBatchModal_hasOwnProp.call(b, prop))
      RunScriptBatchModal_defNormalProp(a, prop, b[prop]);
  if (RunScriptBatchModal_getOwnPropSymbols)
    for (var prop of RunScriptBatchModal_getOwnPropSymbols(b)) {
      if (RunScriptBatchModal_propIsEnum.call(b, prop))
        RunScriptBatchModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var RunScriptBatchModal_spreadProps = (a, b) => RunScriptBatchModal_defProps(a, RunScriptBatchModal_getOwnPropDescs(b));
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





















const RunScriptBatchModal_baseClass = "run-script-batch-modal";
const RunScriptBatchModal = ({
  runByFilters = false,
  filters,
  totalFilteredHostsCount,
  selectedHostIds,
  teamId,
  isFreeTier,
  onCancel
}) => {
  const [currentTimeUTC, setCurrentTimeUTC] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    const intervalId = setInterval(() => {
      const now = /* @__PURE__ */ new Date();
      const hours = now.getUTCHours().toString().padStart(2, "0");
      const minutes = now.getUTCMinutes().toString().padStart(2, "0");
      setCurrentTimeUTC(`The current time in UTC is ${hours}:${minutes}`);
    }, 1e3);
    return () => clearInterval(intervalId);
  }, []);
  const [batchRunDate, setBatchRunDate] = (0,react.useState)("");
  const [batchRunTime, setBatchRunTime] = (0,react.useState)("");
  const [
    formValidation,
    setFormValidation
  ] = (0,react.useState)(
    () => validateFormData({ date: batchRunDate, time: batchRunTime })
  );
  const [runMode, setRunMode] = (0,react.useState)("run_now");
  const [selectedScript, setSelectedScript] = (0,react.useState)(
    void 0
  );
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [scriptForDetails, setScriptForDetails] = (0,react.useState)(void 0);
  const { data: scripts } = (0,es.useQuery)(
    [(0,interfaces_script/* addTeamIdCriteria */.V8)({ scope: "scripts" }, teamId, isFreeTier)],
    ({ queryKey }) => {
      return entities_scripts/* default */.A.getScripts(queryKey[0]);
    },
    RunScriptBatchModal_spreadProps(RunScriptBatchModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      keepPreviousData: true,
      select: (data) => {
        return data.scripts || [];
      }
    })
  );
  const onChangeRunMode = (mode) => {
    setRunMode(mode);
    setFormValidation(
      validateFormData({ date: batchRunDate, time: batchRunTime }, mode)
    );
  };
  const onInputChange = (update) => {
    if (update.name === "date") {
      setBatchRunDate(update.value);
    } else if (update.name === "time") {
      setBatchRunTime(update.value);
    }
    setFormValidation(
      validateFormData(
        {
          date: batchRunDate,
          time: batchRunTime,
          [update.name]: update.value
        },
        runMode
      )
    );
  };
  const onRunScriptBatch = (0,react.useCallback)(
    (script) => __async(null, null, function* () {
      setIsUpdating(true);
      let body;
      if (runByFilters) {
        body = {
          script_id: script.id,
          filters: (0,interfaces_script/* addTeamIdCriteria */.V8)(filters, teamId, isFreeTier)
        };
      } else {
        body = {
          script_id: script.id,
          host_ids: selectedHostIds
        };
      }
      if (runMode === "schedule") {
        body.not_before = `${batchRunDate}T${batchRunTime}:00.000Z`;
      }
      try {
        yield entities_scripts/* default */.A.runScriptBatch(body);
        if (runMode === "schedule") {
          ToastNotification/* notify */.me.success(
            /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully scheduled script.", " ", /* @__PURE__ */ react.createElement(
              CustomLink/* default */.A,
              {
                url: (0,url/* getPathWithQueryParams */.M8)(
                  paths/* default */.A.CONTROLS_SCRIPTS_BATCH_PROGRESS,
                  {
                    status: "scheduled",
                    fleet_id: teamId
                  }
                ),
                text: "Show schedule"
              }
            ))
          );
        } else {
          ToastNotification/* notify */.me.success(
            /* @__PURE__ */ react.createElement(react.Fragment, null, "Successfully ran script.", " ", /* @__PURE__ */ react.createElement(
              CustomLink/* default */.A,
              {
                url: (0,url/* getPathWithQueryParams */.M8)(
                  paths/* default */.A.CONTROLS_SCRIPTS_BATCH_PROGRESS,
                  {
                    status: "started",
                    fleet_id: teamId
                  }
                ),
                text: "Show script activity"
              }
            ))
          );
        }
        onCancel();
      } catch (error) {
        let errorMessage = "Could not run script.";
        if ((0,errors/* getErrorReason */.F3)(error).includes("too many hosts")) {
          errorMessage = "Could not run script: too many hosts targeted. Please try again with fewer hosts.";
        }
        ToastNotification/* notify */.me.error(errorMessage, { response: error });
      } finally {
        setIsUpdating(false);
      }
    }),
    [selectedHostIds, runMode, batchRunDate, batchRunTime]
  );
  const renderModalContent = () => {
    var _a, _b;
    if (scripts === void 0) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (!scripts.length) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          variant: "header-list",
          header: "No scripts available",
          info: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              url: (0,url/* getPathWithQueryParams */.M8)(
                paths/* default */.A.CONTROLS_SCRIPTS,
                !isFreeTier ? { fleet_id: teamId } : void 0
              ),
              text: "Add a script"
            }
          ), " ", "to this fleet.")
        }
      );
    }
    if (!selectedScript) {
      const targetCount = runByFilters ? totalFilteredHostsCount : selectedHostIds.length;
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Run a script on", " ", /* @__PURE__ */ react.createElement("b", null, targetCount.toLocaleString(), " host", targetCount > 1 ? "s" : ""), ", or schedule a script to run on targeted hosts in the future."), /* @__PURE__ */ react.createElement(
        RunScriptBatchPaginatedList_RunScriptBatchPaginatedList,
        {
          onRunScript: (script) => setSelectedScript(script),
          isUpdating,
          teamId,
          isFreeTier,
          scriptCount: scripts.length,
          setScriptForDetails
        }
      ));
    }
    const platforms = selectedScript.name.indexOf(".ps1") > 0 ? "Windows" : "macOS and Linux";
    return /* @__PURE__ */ react.createElement("div", { className: `${RunScriptBatchModal_baseClass}__script-schedule` }, /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("b", null, selectedScript.name), " will run on compatible hosts (", platforms, ")."), /* @__PURE__ */ react.createElement("div", { className: `${RunScriptBatchModal_baseClass}__script-run-mode-form` }, /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Schedule"), /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        className: `${RunScriptBatchModal_baseClass}__radio-input`,
        label: "Run now",
        id: "run-now-batch-scripts-radio-btn",
        checked: runMode === "run_now",
        value: "Run now",
        name: "run-mode",
        onChange: () => onChangeRunMode("run_now")
      }
    ), /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        className: `${RunScriptBatchModal_baseClass}__radio-input`,
        label: "Schedule for later",
        id: "custom-target-radio-btn",
        checked: runMode === "schedule",
        value: "Custom",
        name: "target-type",
        onChange: () => onChangeRunMode("schedule")
      }
    )), runMode === "schedule" && /* @__PURE__ */ react.createElement("div", { className: `${RunScriptBatchModal_baseClass}__script-schedule-form` }, /* @__PURE__ */ react.createElement("span", { className: "date-time-inputs" }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onInputChange,
        value: batchRunDate,
        label: "Date (UTC)",
        name: "date",
        parseTarget: true,
        helpText: 'YYYY-MM-DD format (e.g., "2024-07-01").',
        error: (_a = formValidation.date) == null ? void 0 : _a.message
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onInputChange,
        value: batchRunTime,
        label: "Time (UTC)",
        name: "time",
        parseTarget: true,
        helpText: 'HH:MM 24-hour format (e.g., "13:37").',
        error: (_b = formValidation.time) == null ? void 0 : _b.message,
        tooltip: currentTimeUTC
      }
    )))));
  };
  const classes = classnames_default()(RunScriptBatchModal_baseClass, {
    [`${RunScriptBatchModal_baseClass}__hide-main`]: !!scriptForDetails
  });
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Run script",
      onExit: onCancel,
      onEnter: onCancel,
      className: classes,
      disableClosingModal: isUpdating
    },
    renderModalContent(),
    !selectedScript && !scriptForDetails && /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { disabled: isUpdating, onClick: onCancel }, "Close")),
    selectedScript && /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: "Enter a date and time to schedule this script.",
        underline: false,
        position: "top",
        disableTooltip: formValidation.isValid,
        showArrow: true
      },
      /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          disabled: isUpdating || !formValidation.isValid,
          onClick: () => onRunScriptBatch(selectedScript),
          isLoading: isUpdating
        },
        "Run"
      )
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        disabled: isUpdating,
        variant: "secondary",
        onClick: () => {
          setSelectedScript(void 0);
        }
      },
      "Cancel"
    ))
  ), !!scriptForDetails && !selectedScript && /* @__PURE__ */ react.createElement(
    ScriptDetailsModal/* default */.A,
    {
      onCancel: () => setScriptForDetails(void 0),
      selectedScriptDetails: scriptForDetails,
      suppressSecondaryActions: true,
      customPrimaryButtons: /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          onClick: () => {
            setScriptForDetails(void 0);
            setSelectedScript(scriptForDetails);
          },
          isLoading: isUpdating
        },
        "Run"
      ), /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          onClick: () => setScriptForDetails(void 0),
          variant: "subdued"
        },
        "Go back"
      ))
    }
  ));
};
/* harmony default export */ var RunScriptBatchModal_RunScriptBatchModal = (RunScriptBatchModal);

;// ./frontend/pages/hosts/ManageHostsPage/components/RunScriptBatchModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/hosts/ManageHostsPage/helpers.ts
var ManageHostsPage_helpers = __webpack_require__(53817);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/NotSupported/index.ts + 1 modules
var NotSupported = __webpack_require__(16511);
// EXTERNAL MODULE: ./frontend/components/StatusIndicator/index.ts + 1 modules
var StatusIndicator = __webpack_require__(96733);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
;// ./frontend/components/TableContainer/DataTable/HostMdmStatusCell/HostMdmStatusCell.tsx










const HostMdmStatusCell_baseClass = "host-mdm-status-cell";
const HostMdmStatusCell = ({
  row: {
    original: { id, mdm, platform }
  },
  cell: { value }
}) => {
  var _a, _b;
  if ((0,interfaces_platform/* isChrome */.H8)(platform) || (0,interfaces_platform/* isLinuxLike */.eX)(platform)) {
    return NotSupported/* default */.A;
  }
  if (!value) {
    return /* @__PURE__ */ react.createElement("span", { className: `${HostMdmStatusCell_baseClass}` }, constants/* DEFAULT_EMPTY_CELL_VALUE */.r2);
  }
  const displayValue = (_b = (_a = interfaces_mdm/* MDM_ENROLLMENT_STATUS_UI_MAP */.rK[value]) == null ? void 0 : _a.displayName) != null ? _b : value;
  return /* @__PURE__ */ react.createElement("span", { className: `${HostMdmStatusCell_baseClass}` }, !constants/* MDM_STATUS_TOOLTIP */.YQ[value] ? displayValue : /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      className: `${HostMdmStatusCell_baseClass}__tooltip`,
      tipContent: constants/* MDM_STATUS_TOOLTIP */.YQ[value]
    },
    displayValue
  ), (mdm == null ? void 0 : mdm.dep_profile_error) && /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: /* @__PURE__ */ react.createElement("span", { className: "tooltip__tooltip-text" }, "Migration or new Mac setup won't work. There's an issue with this host's Apple Business (AB) profile assignment.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: `${paths/* default */.A.HOST_DETAILS(id)}?show_mdm_status=true`,
          text: "View details",
          variant: "tooltip-link"
        }
      )),
      position: "top",
      underline: false,
      showArrow: true,
      tipOffset: 8
    },
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "error-outline", color: "status-error", size: "medium" })
  ));
};
/* harmony default export */ var HostMdmStatusCell_HostMdmStatusCell = (HostMdmStatusCell);

// EXTERNAL MODULE: ./frontend/pages/hosts/components/IssuesIndicator/index.ts + 1 modules
var IssuesIndicator = __webpack_require__(90352);
;// ./frontend/components/TableContainer/DataTable/IssueCell/IssueCell.tsx





const IssueCell = ({ issues, rowId }) => {
  if ((0,lodash.isEmpty)(issues) || issues.total_issues_count === 0) {
    return /* @__PURE__ */ react.createElement("span", { className: "text-muted" }, constants/* DEFAULT_EMPTY_CELL_VALUE */.r2);
  }
  return /* @__PURE__ */ react.createElement(
    IssuesIndicator/* default */.A,
    {
      totalIssuesCount: issues.total_issues_count,
      criticalVulnerabilitiesCount: issues.critical_vulnerabilities_count,
      failingPoliciesCount: issues.failing_policies_count,
      rowId
    }
  );
};
/* harmony default export */ var IssueCell_IssueCell = (IssueCell);

// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/LinkCell.tsx
var LinkCell = __webpack_require__(42690);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/TextCell.tsx
var TextCell = __webpack_require__(3728);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TooltipTruncatedTextCell/index.ts + 1 modules
var TooltipTruncatedTextCell = __webpack_require__(16240);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapperArchLinuxRolling/index.tsx + 1 modules
var TooltipWrapperArchLinuxRolling = __webpack_require__(64018);
// EXTERNAL MODULE: ./frontend/pages/hosts/components/DiskSpaceIndicator/index.ts + 1 modules
var DiskSpaceIndicator = __webpack_require__(22843);
// EXTERNAL MODULE: ./frontend/pages/hosts/helpers.tsx
var hosts_helpers = __webpack_require__(36849);
;// ./frontend/pages/hosts/ManageHostsPage/HostTableConfig.tsx

var HostTableConfig_defProp = Object.defineProperty;
var HostTableConfig_defProps = Object.defineProperties;
var HostTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var HostTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var HostTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var HostTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var HostTableConfig_defNormalProp = (obj, key, value) => key in obj ? HostTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var HostTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (HostTableConfig_hasOwnProp.call(b, prop))
      HostTableConfig_defNormalProp(a, prop, b[prop]);
  if (HostTableConfig_getOwnPropSymbols)
    for (var prop of HostTableConfig_getOwnPropSymbols(b)) {
      if (HostTableConfig_propIsEnum.call(b, prop))
        HostTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var HostTableConfig_spreadProps = (a, b) => HostTableConfig_defProps(a, HostTableConfig_getOwnPropDescs(b));





















const NEVER_FETCHED_TOOLTIP = "This host has not reported vitals yet, even if it has checked in.";
const MAX_EMAILS_BEFORE_MORE_LINE = 5;
const sourcePriority = (source) => {
  if (source === "mdm_idp_accounts" || source === "idp") return 0;
  if (source === "google_chrome_profiles") return 1;
  return 2;
};
const getPrimaryDeviceUser = (users) => {
  if (!(users == null ? void 0 : users.length)) {
    return { primaryEmail: void 0, suffixCount: 0, tooltipLines: [] };
  }
  const byPriority = users.map((u, i) => ({ u, i })).sort((a, b) => {
    const pa = sourcePriority(a.u.source);
    const pb = sourcePriority(b.u.source);
    return pa === pb ? a.i - b.i : pa - pb;
  }).map(({ u }) => u);
  const seen = /* @__PURE__ */ new Set();
  const uniqueUsers = byPriority.filter((u) => {
    if (seen.has(u.email)) return false;
    seen.add(u.email);
    return true;
  });
  const primary = uniqueUsers[0];
  const suffixCount = uniqueUsers.length - 1;
  if (suffixCount === 0) {
    return { primaryEmail: primary.email, suffixCount, tooltipLines: [] };
  }
  const orderedEmails = uniqueUsers.map((u) => u.email);
  const remainder = orderedEmails.length - MAX_EMAILS_BEFORE_MORE_LINE;
  return {
    primaryEmail: primary.email,
    suffixCount,
    tooltipLines: remainder > 1 ? orderedEmails.slice(0, MAX_EMAILS_BEFORE_MORE_LINE).concat(`+${remainder} more`) : orderedEmails
  };
};
const lastSeenTime = (status, seenTime, platform) => {
  if (platform && (0,interfaces_platform/* isMobilePlatform */.Ck)(platform)) {
    return "Last seen: Not supported";
  }
  if (status !== "online") {
    return `Last seen: ${(0,utilities_helpers/* humanHostLastSeen */.Hu)(seenTime)}`;
  }
  return "Online";
};
const allHostTableHeaders = (teamId) => [
  // We are using React Table useRowSelect functionality for the selection header.
  // More information on its API can be found here
  // https://react-table.tanstack.com/docs/api/useRowSelect
  {
    id: "selection",
    Header: (cellProps) => {
      const props = cellProps.getToggleAllRowsSelectedProps();
      const checkboxProps = {
        value: props.checked,
        indeterminate: props.indeterminate,
        onChange: () => cellProps.toggleAllRowsSelected()
      };
      return /* @__PURE__ */ react.createElement(Checkbox/* default */.A, HostTableConfig_spreadProps(HostTableConfig_spreadValues({}, checkboxProps), { enableEnterToCheck: true }));
    },
    Cell: (cellProps) => {
      const props = cellProps.row.getToggleRowSelectedProps();
      const checkboxProps = {
        value: props.checked,
        onChange: () => cellProps.row.toggleRowSelected()
      };
      return /* @__PURE__ */ react.createElement(Checkbox/* default */.A, HostTableConfig_spreadProps(HostTableConfig_spreadValues({}, checkboxProps), { enableEnterToCheck: true }));
    },
    disableHidden: true
  },
  {
    Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Host", isSortedDesc: cellProps.column.isSortedDesc }),
    accessor: "display_name",
    id: "display_name",
    Cell: (cellProps) => {
      return /* @__PURE__ */ react.createElement(
        LinkCell/* default */.A,
        {
          value: cellProps.cell.value,
          path: paths/* default */.A.HOST_DETAILS(cellProps.row.original.id, teamId),
          title: lastSeenTime(
            cellProps.row.original.status,
            cellProps.row.original.seen_time,
            cellProps.row.original.platform
          )
        }
      );
    },
    disableHidden: true
  },
  // Fleet
  {
    title: "Mesh",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Mesh", isSortedDesc: cellProps.column.isSortedDesc }),
    accessor: "team_name",
    id: "team_name",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value, formatter: utilities_helpers/* hostTeamName */.Ld })
  },
  // Operating system (OS)
  {
    title: "Operating system",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Operating system",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "os_version",
    id: "os_version",
    // TODO(android): is Android supported? what about the os versions endpoint and dashboard card?
    Cell: (cellProps) => {
      const os_version = cellProps.cell.value;
      const versionForRender = software/* ROLLING_ARCH_LINUX_VERSIONS */.s.includes(
        os_version
      ) ? (
        // wrap a tooltip around the "rolling" suffix
        /* @__PURE__ */ react.createElement(react.Fragment, null, os_version.slice(0, -8), "\xA0", /* @__PURE__ */ react.createElement(TooltipWrapperArchLinuxRolling/* default */.A, null))
      ) : os_version;
      return /* @__PURE__ */ react.createElement(TooltipTruncatedTextCell/* default */.A, { value: versionForRender });
    }
  },
  // Hardware model
  {
    title: "Hardware model",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Hardware model",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "hardware_model",
    id: "hardware_model",
    Cell: (cellProps) => {
      const { value, tooltip, alwaysShowTooltip } = (0,hosts_helpers/* getHardwareModelDisplay */.uh)(
        cellProps.row.original.platform,
        cellProps.cell.value,
        cellProps.row.original.hardware_marketing_name
      );
      return /* @__PURE__ */ react.createElement(
        TooltipTruncatedTextCell/* default */.A,
        {
          value,
          tooltip,
          alwaysShowTooltip,
          className: "w250"
        }
      );
    }
  },
  // User email
  {
    title: "User email",
    Header: "User email",
    disableSortBy: true,
    accessor: "device_mapping",
    id: "device_mapping",
    Cell: (cellProps) => {
      const { primaryEmail, suffixCount, tooltipLines } = getPrimaryDeviceUser(
        cellProps.cell.value || []
      );
      return /* @__PURE__ */ react.createElement(
        TooltipTruncatedTextCell/* default */.A,
        {
          value: primaryEmail,
          tooltip: tooltipLines.length > 0 ? (0,utilities_helpers/* tooltipTextWithLineBreaks */.zd)(tooltipLines) : void 0,
          suffix: suffixCount > 0 ? `+${suffixCount}` : void 0,
          justifySuffixEnd: true,
          alwaysShowTooltip: suffixCount > 0,
          className: "w250"
        }
      );
    }
  },
  // UUID
  {
    title: "UUID",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "UUID", isSortedDesc: cellProps.column.isSortedDesc }),
    accessor: "uuid",
    id: "uuid",
    Cell: ({ cell: { value } }) => value ? /* @__PURE__ */ react.createElement(TooltipTruncatedTextCell/* default */.A, { value }) : /* @__PURE__ */ react.createElement(TextCell/* default */.A, null)
  },
  // Serial number
  {
    title: "Serial number",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Serial number",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "hardware_serial",
    id: "hardware_serial",
    Cell: (cellProps) => {
      var _a, _b;
      if ((0,interfaces_mdm/* isBYODAccountDrivenUserEnrollment */.bO)(
        (_b = (_a = cellProps.row.original.mdm) == null ? void 0 : _a.enrollment_status) != null ? _b : null
      )) {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value });
    }
  },
  // Last fetched
  {
    title: "Last fetched",
    Header: (cellProps) => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time the host", /* @__PURE__ */ react.createElement("br", null), " reported vitals.")
        },
        "Last fetched"
      );
      return /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: titleWithToolTip,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      );
    },
    accessor: "detail_updated_at",
    id: "detail_updated_at",
    Cell: (cellProps) => (
      // TODO(android): android doesn't support refetch?
      /* @__PURE__ */ react.createElement(
        TextCell/* default */.A,
        {
          value: /* @__PURE__ */ react.createElement(
            HumanTimeDiffWithDateTip/* HumanTimeDiffWithFleetLaunchCutoff */.e,
            {
              timeString: cellProps.cell.value,
              neverTooltip: NEVER_FETCHED_TOOLTIP
            }
          )
        }
      )
    )
  },
  // Disk space available
  {
    title: "Disk space available",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Disk space available",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "gigs_disk_space_available",
    id: "gigs_disk_space_available",
    Cell: (cellProps) => {
      const {
        platform,
        percent_disk_space_available,
        gigs_disk_space_available,
        gigs_total_disk_space,
        gigs_all_disk_space
      } = cellProps.row.original;
      if (platform === "chrome") {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(
        DiskSpaceIndicator/* default */.A,
        {
          gigsDiskSpaceAvailable: gigs_disk_space_available,
          percentDiskSpaceAvailable: percent_disk_space_available,
          gigsTotalDiskSpace: gigs_total_disk_space,
          gigsAllDiskSpace: gigs_all_disk_space,
          platform
        }
      );
    }
  },
  // CPU
  {
    title: "CPU",
    Header: "CPU",
    disableSortBy: true,
    accessor: "cpu_type",
    id: "cpu_type",
    Cell: (cellProps) => {
      if (cellProps.row.original.platform === "ios" || cellProps.row.original.platform === "ipados") {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value });
    }
  },
  // RAM
  {
    title: "RAM",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "RAM", isSortedDesc: cellProps.column.isSortedDesc }),
    accessor: "memory",
    id: "memory",
    Cell: (cellProps) => {
      if (cellProps.row.original.platform === "ios" || cellProps.row.original.platform === "ipados") {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value, formatter: utilities_helpers/* humanHostMemory */.nm });
    }
  },
  // MAC address
  {
    title: "MAC address",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "MAC address",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "primary_mac",
    id: "primary_mac",
    Cell: (cellProps) => {
      if ((0,interfaces_platform/* isAndroid */.m0)(cellProps.row.original.platform)) {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value });
    }
  },
  // Status
  {
    title: "Status",
    Header: () => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Status", disableSortBy: true }),
    disableSortBy: true,
    accessor: "status",
    id: "status",
    Cell: (cellProps) => {
      var _a;
      const { platform } = cellProps.row.original;
      if (((_a = cellProps.row.original.mdm) == null ? void 0 : _a.enrollment_status) === "Pending" && ((0,interfaces_platform/* isAppleDevice */.lg)(platform) || (0,interfaces_platform/* isWindows */.uF)(platform))) {
        return /* @__PURE__ */ react.createElement(
          StatusIndicator/* default */.A,
          {
            value: constants/* DEFAULT_EMPTY_CELL_VALUE */.r2,
            tooltip: {
              tooltipText: (0,hosts_helpers/* getHostStatusTooltipText */.Pt)(
                constants/* DEFAULT_EMPTY_CELL_VALUE */.r2,
                platform
              )
            }
          }
        );
      }
      return /* @__PURE__ */ react.createElement(StatusIndicator/* default */.A, { value: cellProps.cell.value });
    }
  },
  // Issues
  {
    title: "Issues",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Issues", isSortedDesc: cellProps.column.isSortedDesc }),
    accessor: "issues",
    id: "issues",
    sortDescFirst: true,
    Cell: (cellProps) => {
      if ((0,interfaces_platform/* isMobilePlatform */.Ck)(cellProps.row.original.platform)) {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(
        IssueCell_IssueCell,
        {
          issues: cellProps.row.original.issues,
          rowId: cellProps.row.original.id
        }
      );
    }
  },
  // MDM status
  {
    title: "MDM status",
    Header: () => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "To filter by MDM status, head to the Dashboard page.")
        },
        "MDM status"
      );
      return /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: titleWithToolTip, disableSortBy: true });
    },
    disableSortBy: true,
    accessor: (originalRow) => originalRow.mdm.enrollment_status,
    id: "mdm.enrollment_status",
    Cell: HostMdmStatusCell_HostMdmStatusCell
  },
  // MDM server URL
  {
    title: "MDM server URL",
    Header: () => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The MDM server that updates settings on the host. To", /* @__PURE__ */ react.createElement("br", null), "filter by MDM server URL, head to the Dashboard page.")
        },
        "MDM server URL"
      );
      return /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: titleWithToolTip, disableSortBy: true });
    },
    disableSortBy: true,
    accessor: (originalRow) => originalRow.mdm.server_url,
    id: "mdm.server_url",
    Cell: (cellProps) => {
      if (cellProps.row.original.platform === "chrome") {
        return NotSupported/* default */.A;
      }
      if (cellProps.cell.value) {
        return /* @__PURE__ */ react.createElement(TooltipTruncatedTextCell/* default */.A, { value: cellProps.cell.value });
      }
      return /* @__PURE__ */ react.createElement("span", { className: "text-muted" }, constants/* DEFAULT_EMPTY_CELL_VALUE */.r2);
    }
  },
  // Hostname
  {
    title: "Hostname",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Hostname",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "hostname",
    id: "hostname",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TooltipTruncatedTextCell/* default */.A, { value: cellProps.cell.value })
  },
  // Computer name
  {
    title: "Computer name",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Computer name",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "computer_name",
    id: "computer_name",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
  },
  // Private IP address
  {
    title: "Private IP address",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Private IP address",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "primary_ip",
    id: "primary_ip",
    Cell: (cellProps) => {
      if ((0,interfaces_platform/* isMobilePlatform */.Ck)(cellProps.row.original.platform)) {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value });
    }
  },
  // Public IP address
  {
    title: "Public IP address",
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "The IP address the host uses to connect to Fleet." }, "Public IP address"),
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    accessor: "public_ip",
    id: "public_ip",
    Cell: (cellProps) => {
      var _a;
      if ((0,interfaces_platform/* isMobilePlatform */.Ck)(cellProps.row.original.platform)) {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (_a = cellProps.cell.value) != null ? _a : constants/* DEFAULT_EMPTY_CELL_VALUE */.r2 });
    }
  },
  // Agent
  {
    title: "Agent",
    Header: (cellProps) => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: "Only supported on hosts that run Fleet's agent: macOS, Windows, Linux, and ChromeOS.",
          tooltipClass: "host-table-header-tooltip",
          fixedPositionStrategy: true
        },
        "Agent"
      );
      return /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: titleWithToolTip,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      );
    },
    accessor: (row) => row.orbit_version || row.osquery_version,
    id: "agent",
    Cell: (cellProps) => {
      const {
        platform,
        orbit_version,
        osquery_version,
        fleet_desktop_version
      } = cellProps.row.original;
      if ((0,interfaces_platform/* isMobilePlatform */.Ck)(platform)) {
        return NotSupported/* default */.A;
      }
      const isChromeOrVanillaOsquery = platform === "chrome" || !orbit_version || orbit_version === constants/* DEFAULT_EMPTY_CELL_VALUE */.r2;
      if (isChromeOrVanillaOsquery) {
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: osquery_version });
      }
      return /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "osquery: ", osquery_version, /* @__PURE__ */ react.createElement("br", null), "Orbit: ", orbit_version, fleet_desktop_version && fleet_desktop_version !== constants/* DEFAULT_EMPTY_CELL_VALUE */.r2 && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("br", null), "Mesh Desktop: ", fleet_desktop_version))
        },
        orbit_version
      );
    }
  },
  // Last seen
  {
    title: "Last seen",
    Header: (cellProps) => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time the ", /* @__PURE__ */ react.createElement("br", null), "host was online.")
        },
        "Last seen"
      );
      return /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: titleWithToolTip,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      );
    },
    accessor: "seen_time",
    id: "seen_time",
    Cell: (cellProps) => {
      if ((0,interfaces_platform/* isMobilePlatform */.Ck)(cellProps.row.original.platform)) {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(
        TextCell/* default */.A,
        {
          value: { timeString: cellProps.cell.value },
          formatter: HumanTimeDiffWithDateTip/* HumanTimeDiffWithFleetLaunchCutoff */.e
        }
      );
    }
  },
  // Last restarted
  {
    title: "Last restarted",
    Header: (cellProps) => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: "Only supported on macOS, Windows, and Linux, where Fleet's agent can measure system uptime.",
          tooltipClass: "host-table-header-tooltip",
          fixedPositionStrategy: true
        },
        "Last restarted"
      );
      return /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: titleWithToolTip,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      );
    },
    accessor: "last_restarted_at",
    id: "last_restarted_at",
    Cell: (cellProps) => {
      const { platform, last_restarted_at } = cellProps.row.original;
      if ((0,interfaces_platform/* isMobilePlatform */.Ck)(platform) || platform === "chrome") {
        return NotSupported/* default */.A;
      }
      return /* @__PURE__ */ react.createElement(
        TextCell/* default */.A,
        {
          value: {
            timeString: last_restarted_at
          },
          formatter: HumanTimeDiffWithDateTip/* HumanTimeDiffWithFleetLaunchCutoff */.e
        }
      );
    }
  },
  // Added to Fleet
  {
    title: "Added to Fleet",
    Header: (cellProps) => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The last time the ", /* @__PURE__ */ react.createElement("br", null), " host enrolled with Fleet.")
        },
        "Added to Fleet"
      );
      return /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: titleWithToolTip,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      );
    },
    accessor: "last_enrolled_at",
    id: "last_enrolled_at",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(
      TextCell/* default */.A,
      {
        value: { timeString: cellProps.cell.value },
        formatter: HumanTimeDiffWithDateTip/* HumanTimeDiffWithFleetLaunchCutoff */.e
      }
    )
  }
];
const defaultHiddenColumns = [
  "hostname",
  "computer_name",
  "device_mapping",
  "primary_mac",
  "public_ip",
  "primary_ip",
  "issues",
  "cpu_type",
  // TODO: should those be mdm.<blah>?
  "mdm.server_url",
  "mdm.enrollment_status",
  "memory",
  "uptime",
  "uuid",
  "seen_time",
  "hardware_model",
  "hardware_serial",
  "last_enrolled_at"
];
const generateAvailableTableHeaders = ({
  isFreeTier = true,
  isOnlyObserver = true,
  teamId
}) => {
  return allHostTableHeaders(teamId).reduce(
    (columns, currentColumn) => {
      if (isFreeTier) {
        if (isOnlyObserver && ["selection", "team_name"].includes(currentColumn.id || "")) {
          return columns;
        }
        if (currentColumn.id === "team_name" || currentColumn.id === "mdm.server_url" || currentColumn.id === "mdm.enrollment_status") {
          return columns;
        }
      } else if (isOnlyObserver && currentColumn.id === "selection") {
        return columns;
      }
      columns.push(currentColumn);
      return columns;
    },
    []
  );
};
const generateVisibleTableColumns = ({
  hiddenColumns,
  isFreeTier = true,
  isOnlyObserver = true,
  teamId
}) => {
  return generateAvailableTableHeaders({
    isFreeTier,
    isOnlyObserver,
    teamId
  }).filter((column) => {
    return !hiddenColumns.includes(column.id);
  });
};


;// ./frontend/pages/hosts/ManageHostsPage/ManageHostsPage.tsx

var ManageHostsPage_defProp = Object.defineProperty;
var ManageHostsPage_defProps = Object.defineProperties;
var ManageHostsPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ManageHostsPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ManageHostsPage_hasOwnProp = Object.prototype.hasOwnProperty;
var ManageHostsPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var ManageHostsPage_defNormalProp = (obj, key, value) => key in obj ? ManageHostsPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ManageHostsPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ManageHostsPage_hasOwnProp.call(b, prop))
      ManageHostsPage_defNormalProp(a, prop, b[prop]);
  if (ManageHostsPage_getOwnPropSymbols)
    for (var prop of ManageHostsPage_getOwnPropSymbols(b)) {
      if (ManageHostsPage_propIsEnum.call(b, prop))
        ManageHostsPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ManageHostsPage_spreadProps = (a, b) => ManageHostsPage_defProps(a, ManageHostsPage_getOwnPropDescs(b));
var ManageHostsPage_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ManageHostsPage_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ManageHostsPage_getOwnPropSymbols)
    for (var prop of ManageHostsPage_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ManageHostsPage_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ManageHostsPage_async = (__this, __arguments, generator) => {
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























































const CSV_HOSTS_TITLE = "Hosts";
const ManageHostsPage_baseClass = "manage-hosts";
const ManageHostsPage = ({
  route,
  router,
  params: routeParams,
  location
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const routeTemplate = (_a = route == null ? void 0 : route.path) != null ? _a : "";
  const queryParams = location.query;
  const {
    config,
    currentUser,
    filteredHostsPath,
    isGlobalAdmin,
    isGlobalMaintainer,
    isGlobalTechnician,
    isOnGlobalTeam,
    isOnlyObserver,
    isPremiumTier,
    isFreeTier,
    userSettings,
    setFilteredHostsPath,
    setFilteredPoliciesPath,
    setFilteredQueriesPath,
    setFilteredSoftwarePath
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isPrimoMode = (_b = config == null ? void 0 : config.partnerships) == null ? void 0 : _b.enable_primo;
  const { setResetSelectedRows } = (0,react.useContext)(table/* TableContext */.G);
  const shouldStripScriptBatchExecParamOnTeamChange = (newTeamId, curTeamId) => newTeamId !== curTeamId;
  const {
    currentTeamId,
    isAllTeamsSelected,
    currentTeamName,
    isAnyTeamSelected,
    isRouteOk,
    isTeamAdmin,
    isTeamMaintainer,
    isTeamTechnician,
    isTeamMaintainerOrTeamAdmin,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true,
    overrideParamsOnTeamChange: {
      // remove the software status filter when selecting All teams
      [hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS]: (newTeamId) => newTeamId === team/* API_ALL_TEAMS_ID */.s_,
      // remove batch script summary results filters on team change
      [hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_ID]: shouldStripScriptBatchExecParamOnTeamChange,
      [hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_STATUS]: shouldStripScriptBatchExecParamOnTeamChange
    }
  });
  const initialSortBy = (() => {
    let key = DEFAULT_SORT_HEADER;
    let direction = DEFAULT_SORT_DIRECTION;
    if (queryParams) {
      const { order_key, order_direction } = queryParams;
      key = order_key || key;
      direction = order_direction || direction;
    }
    return [{ key, direction }];
  })();
  const initialQuery = (() => {
    var _a2;
    return (_a2 = queryParams.query) != null ? _a2 : "";
  })();
  const curPageFromURL = (() => queryParams && queryParams.page ? parseInt(queryParams == null ? void 0 : queryParams.page, 10) : 0)();
  const [showDeleteSecretModal, setShowDeleteSecretModal] = (0,react.useState)(false);
  const [showSecretEditorModal, setShowSecretEditorModal] = (0,react.useState)(false);
  const [showEnrollSecretModal, setShowEnrollSecretModal] = (0,react.useState)(false);
  const [showDeleteLabelModal, setShowDeleteLabelModal] = (0,react.useState)(false);
  const [showEditColumnsModal, setShowEditColumnsModal] = (0,react.useState)(false);
  const [showAddHostsModal, setShowAddHostsModal] = (0,react.useState)(false);
  const [showTransferHostModal, setShowTransferHostModal] = (0,react.useState)(false);
  const [showDeleteHostModal, setShowDeleteHostModal] = (0,react.useState)(false);
  const [showRunScriptBatchModal, setShowRunScriptBatchModal] = (0,react.useState)(false);
  const [
    showHostActivityAutomationsModal,
    setShowHostActivityAutomationsModal
  ] = (0,react.useState)(false);
  const canEnrollHosts = isGlobalAdmin || isGlobalMaintainer || isTeamAdmin || isTeamMaintainer;
  const canManageHostActivityAutomations = isGlobalAdmin || isTeamAdmin;
  (0,react.useEffect)(() => {
    if ((queryParams == null ? void 0 : queryParams.add_hosts) !== "1") return;
    if (isGlobalAdmin === void 0 || !isRouteOk) return;
    if (canEnrollHosts) {
      setShowAddHostsModal(true);
    }
    const _a2 = queryParams, { add_hosts } = _a2, rest = ManageHostsPage_objRest(_a2, ["add_hosts"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [
    queryParams,
    location.pathname,
    router,
    canEnrollHosts,
    isGlobalAdmin,
    isRouteOk
  ]);
  (0,react.useEffect)(() => {
    if ((queryParams == null ? void 0 : queryParams.manage_enroll_secrets) !== "1") return;
    if (isGlobalAdmin === void 0 || !isRouteOk) return;
    if (canEnrollHosts) {
      setShowEnrollSecretModal(true);
    }
    const _a2 = queryParams, { manage_enroll_secrets } = _a2, rest = ManageHostsPage_objRest(_a2, ["manage_enroll_secrets"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [
    queryParams,
    location.pathname,
    router,
    canEnrollHosts,
    isGlobalAdmin,
    isRouteOk
  ]);
  (0,react.useEffect)(() => {
    if ((queryParams == null ? void 0 : queryParams.manage_activity_automations) !== "1") return;
    if (isGlobalAdmin === void 0 || !isRouteOk) return;
    if (canManageHostActivityAutomations && !!isPremiumTier && !isAllTeamsSelected) {
      setShowHostActivityAutomationsModal(true);
    }
    router.replace({
      pathname: location.pathname,
      query: (0,lodash.omit)(queryParams, "manage_activity_automations")
    });
  }, [
    queryParams,
    location.pathname,
    router,
    canManageHostActivityAutomations,
    isPremiumTier,
    isAllTeamsSelected,
    isGlobalAdmin,
    isRouteOk
  ]);
  const [hiddenColumns, setHiddenColumns] = (0,react.useState)(
    (userSettings == null ? void 0 : userSettings.hidden_host_columns) || defaultHiddenColumns
  );
  const [selectedLabel, setSelectedLabel] = (0,react.useState)();
  const [selectedSecret, setSelectedSecret] = (0,react.useState)();
  const [selectedHostIds, setSelectedHostIds] = (0,react.useState)([]);
  const [isAllMatchingHostsSelected, setIsAllMatchingHostsSelected] = (0,react.useState)(
    false
  );
  const [searchQuery, setSearchQuery] = (0,react.useState)(initialQuery);
  const [sortBy, setSortBy] = (0,react.useState)(initialSortBy);
  const apiSortBy = (0,react.useMemo)(() => toApiSortBy(sortBy), [sortBy]);
  const [tableQueryData, setTableQueryData] = (0,react.useState)();
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const policyId = queryParams == null ? void 0 : queryParams.policy_id;
  const policyResponse = queryParams == null ? void 0 : queryParams.policy_response;
  const macSettingsStatus = (_c = queryParams == null ? void 0 : queryParams.apple_settings) != null ? _c : queryParams == null ? void 0 : queryParams.macos_settings;
  const softwareId = (queryParams == null ? void 0 : queryParams.software_id) !== void 0 ? parseInt(queryParams.software_id, 10) : void 0;
  const softwareVersionId = (queryParams == null ? void 0 : queryParams.software_version_id) !== void 0 ? parseInt(queryParams.software_version_id, 10) : void 0;
  const softwareTitleId = (queryParams == null ? void 0 : queryParams.software_title_id) !== void 0 ? parseInt(queryParams.software_title_id, 10) : void 0;
  const softwareStatus = (0,software/* isValidSoftwareAggregateStatus */.FQ)(
    queryParams == null ? void 0 : queryParams[hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS]
  ) ? queryParams[hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS] : void 0;
  const status = (0,ManageHostsPage_helpers/* isAcceptableStatus */.Z1)(queryParams == null ? void 0 : queryParams.status) ? queryParams == null ? void 0 : queryParams.status : void 0;
  const mdmId = (queryParams == null ? void 0 : queryParams.mdm_id) !== void 0 ? parseInt(queryParams.mdm_id, 10) : void 0;
  const mdmEnrollmentStatus = queryParams == null ? void 0 : queryParams.mdm_enrollment_status;
  const {
    os_version_id: osVersionId,
    os_name: osName,
    os_version: osVersion
  } = queryParams;
  const vulnerability = queryParams == null ? void 0 : queryParams.vulnerability;
  const munkiIssueId = (queryParams == null ? void 0 : queryParams.munki_issue_id) !== void 0 ? parseInt(queryParams.munki_issue_id, 10) : void 0;
  const lowDiskSpaceHosts = (queryParams == null ? void 0 : queryParams.low_disk_space) !== void 0 ? parseInt(queryParams.low_disk_space, 10) : void 0;
  const missingHosts = (queryParams == null ? void 0 : queryParams.status) === "missing";
  const osSettingsStatus = queryParams == null ? void 0 : queryParams[hosts/* HOSTS_QUERY_PARAMS */.c.OS_SETTINGS];
  const diskEncryptionStatus = queryParams == null ? void 0 : queryParams[hosts/* HOSTS_QUERY_PARAMS */.c.DISK_ENCRYPTION];
  const bootstrapPackageStatus = (_d = queryParams == null ? void 0 : queryParams.macos_bootstrap_package) != null ? _d : queryParams == null ? void 0 : queryParams.bootstrap_package;
  const configProfileStatus = queryParams == null ? void 0 : queryParams.profile_status;
  const configProfileUUID = queryParams == null ? void 0 : queryParams.profile_uuid;
  const scriptBatchExecutionId = queryParams == null ? void 0 : queryParams[hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_ID];
  const scriptBatchExecutionStatus = (_e = queryParams == null ? void 0 : queryParams[hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_STATUS]) != null ? _e : scriptBatchExecutionId ? "ran" : void 0;
  const depProfileError = queryParams == null ? void 0 : queryParams.dep_profile_error;
  const depAssignProfileResponse = (_f = queryParams == null ? void 0 : queryParams.dep_assign_profile_response) == null ? void 0 : _f.toUpperCase();
  const { label_id: labelID } = routeParams;
  const selectedLabels = (0,react.useMemo)(() => {
    const filters = [];
    labelID && filters.push(`${LABEL_SLUG_PREFIX}${labelID}`);
    return filters;
  }, [labelID]);
  const runScriptBatchFilterNotSupported = !!// all above, except acceptable filters
  (diskEncryptionStatus || policyId || macSettingsStatus || policyResponse || softwareId || softwareTitleId || softwareVersionId || softwareStatus || // the 4 allowed filters:
  // // team
  // teamId ||
  // // query (query string)
  // searchQuery ||
  // // label
  // labelID / active_label
  // // status
  // status ||
  osName || osVersionId || osVersion || macSettingsStatus || bootstrapPackageStatus || mdmId || mdmEnrollmentStatus || munkiIssueId || lowDiskSpaceHosts || missingHosts || osSettingsStatus || diskEncryptionStatus || vulnerability || scriptBatchExecutionId || scriptBatchExecutionStatus || configProfileStatus || configProfileUUID || depProfileError || depAssignProfileResponse);
  const canEnrollGlobalHosts = isGlobalAdmin || isGlobalMaintainer;
  const canManageCustomHostVitals = isGlobalAdmin || isGlobalMaintainer;
  const canAddNewLabels = (_g = isGlobalAdmin || isGlobalMaintainer || isGlobalTechnician || isTeamAdmin || isTeamMaintainer || isTeamTechnician) != null ? _g : false;
  const canRunScriptBatch = isGlobalAdmin || isGlobalMaintainer || isTeamAdmin || isTeamMaintainer;
  const {
    data: labels,
    refetch: refetchLabels,
    isLoading: isLoadingLabels
  } = (0,es.useQuery)(
    ["labels", currentTeamId],
    () => entities_labels/* default */.Ay.loadAll(currentTeamId),
    {
      enabled: isRouteOk,
      select: (data) => data.labels
    }
  );
  const {
    isLoading: isGlobalSecretsLoading,
    data: globalSecrets,
    refetch: refetchGlobalSecrets
  } = (0,es.useQuery)(
    ["global secrets"],
    () => enroll_secret/* default */.A.getGlobalEnrollSecrets(),
    {
      enabled: isRouteOk && !!canEnrollGlobalHosts,
      select: (data) => data.secrets
    }
  );
  const {
    isLoading: isTeamSecretsLoading,
    data: teamSecrets,
    refetch: refetchTeamSecrets
  } = (0,es.useQuery)(
    ["team secrets", currentTeamId],
    () => {
      if (isAnyTeamSelected) {
        return enroll_secret/* default */.A.getTeamEnrollSecrets(currentTeamId);
      }
      return { secrets: [] };
    },
    {
      enabled: isRouteOk && isAnyTeamSelected && canEnrollHosts,
      select: (data) => data.secrets
    }
  );
  const useOneTimeEnrollSecrets = !!((_h = config == null ? void 0 : config.auth) == null ? void 0 : _h.use_one_time_enroll_secrets);
  const {
    data: teams,
    isLoading: isLoadingTeams,
    refetch: refetchTeams
  } = (0,es.useQuery)(
    ["teams"],
    () => entities_teams/* default */.A.loadAll(),
    {
      enabled: isRouteOk && !!isPremiumTier,
      select: (data) => data.teams.sort((a, b) => sort/* default */.A.caseInsensitiveAsc(a.name, b.name))
    }
  );
  const {
    data: teamResponse,
    isLoading: isLoadingHostActivityAutomations,
    isError: isErrorHostActivityAutomations,
    refetch: refetchHostActivityAutomations
  } = (0,es.useQuery)(
    ["team webhook settings", teamIdForApi],
    () => entities_teams/* default */.A.load(teamIdForApi),
    {
      // Fetched only when the modal opens so the modal mounts with the stored
      // settings; works for "No fleet" (team 0) too.
      enabled: isRouteOk && showHostActivityAutomationsModal && teamIdForApi !== void 0 && !!isPremiumTier,
      // Close the modal on load failure: mounting it without the stored
      // settings would show disabled defaults, and saving those would
      // silently overwrite the configured webhook.
      onError: () => {
        ToastNotification/* notify */.me.error("Could not load activity automations. Please try again.");
        setShowHostActivityAutomationsModal(false);
      }
    }
  );
  const hostActivityAutomations = (_j = (_i = teamResponse == null ? void 0 : teamResponse.team) == null ? void 0 : _i.webhook_settings) == null ? void 0 : _j.host_activities_webhook;
  const {
    data: policy,
    isLoading: isLoadingPolicy,
    error: errorPolicy
  } = (0,es.useQuery)(
    ["policy", policyId],
    () => policies/* default */.A.load(policyId),
    {
      enabled: isRouteOk && !!policyId,
      select: (data) => data.policy
    }
  );
  const {
    data: scriptBatchSummary,
    isLoading: isLoadingScriptBatchSummary,
    isError: isErrorScriptBatchSummary
  } = (0,es.useQuery)(
    [
      {
        scope: "script_batch_summary",
        batch_execution_id: scriptBatchExecutionId
      }
    ],
    ({ queryKey: [{ batch_execution_id }] }) => entities_scripts/* default */.A.getRunScriptBatchSummaryV1({ batch_execution_id }),
    ManageHostsPage_spreadValues({
      enabled: !!scriptBatchExecutionId && isRouteOk
    }, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  const {
    data: configProfile,
    isLoading: isLoadingConfigProfile,
    error: errorConfigProfile
  } = (0,es.useQuery)(
    ["config-profile", configProfileUUID],
    () => config_profiles/* default */.A.getConfigProfile(configProfileUUID),
    {
      enabled: isRouteOk && !!configProfileUUID
    }
  );
  const { data: osVersions, isLoading: isLoadingOsVersions } = (0,es.useQuery)([{ scope: "os_versions" }], () => (0,operating_systems/* getOSVersions */.kT)(), {
    enabled: isRouteOk && (!!(queryParams == null ? void 0 : queryParams.os_version_id) || !!(queryParams == null ? void 0 : queryParams.os_name) && !!(queryParams == null ? void 0 : queryParams.os_version)),
    keepPreviousData: true,
    select: (data) => data.os_versions
  });
  const {
    data: hostsData,
    error: errorHosts,
    isFetching: isLoadingHosts,
    refetch: refetchHostsAPI
  } = (0,es.useQuery)(
    [
      {
        scope: "hosts",
        selectedLabels,
        globalFilter: searchQuery,
        sortBy: apiSortBy,
        teamId: teamIdForApi,
        policyId,
        policyResponse,
        softwareId,
        softwareTitleId,
        softwareVersionId,
        softwareStatus,
        status,
        mdmId,
        mdmEnrollmentStatus,
        munkiIssueId,
        lowDiskSpaceHosts,
        osVersionId,
        osName,
        osVersion,
        vulnerability,
        page: curPageFromURL || DEFAULT_PAGE_INDEX,
        perPage: DEFAULT_PAGE_SIZE,
        device_mapping: true,
        osSettings: osSettingsStatus,
        diskEncryptionStatus,
        bootstrapPackageStatus,
        macSettingsStatus,
        configProfileStatus,
        configProfileUUID,
        scriptBatchExecutionStatus,
        scriptBatchExecutionId,
        depProfileError: (0,stringUtils/* strToBool */.$5)(depProfileError),
        depAssignProfileResponse
      }
    ],
    ({ queryKey }) => hosts/* default */.A.loadHosts(queryKey[0]),
    {
      enabled: isRouteOk,
      keepPreviousData: true,
      staleTime: 1e4
      // stale time can be adjusted if fresher data is desired
    }
  );
  const {
    data: totalFilteredHostsCount,
    error: errorHostsCount,
    isFetching: isLoadingHostsCount,
    refetch: refetchHostsCountAPI
  } = (0,es.useQuery)(
    [
      {
        scope: "hosts_count",
        selectedLabels,
        globalFilter: searchQuery,
        teamId: teamIdForApi,
        policyId,
        policyResponse,
        softwareId,
        softwareTitleId,
        softwareVersionId,
        softwareStatus,
        status,
        mdmId,
        mdmEnrollmentStatus,
        munkiIssueId,
        lowDiskSpaceHosts,
        osVersionId,
        osName,
        osVersion,
        vulnerability,
        osSettings: osSettingsStatus,
        diskEncryptionStatus,
        bootstrapPackageStatus,
        macSettingsStatus,
        configProfileStatus,
        configProfileUUID,
        scriptBatchExecutionStatus,
        scriptBatchExecutionId
      }
    ],
    ({ queryKey }) => host_count/* default */.A.load(queryKey[0]),
    {
      enabled: isRouteOk,
      keepPreviousData: true,
      staleTime: 1e4,
      // stale time can be adjusted if fresher data is desired
      select: (data) => data.count
    }
  );
  const locallyHiddenCols = localStorage.getItem("hostHiddenColumns");
  if (locallyHiddenCols) {
    console.log("found local hidden columns: ", locallyHiddenCols);
    console.log("migrating to server persistence...");
    (() => ManageHostsPage_async(null, null, function* () {
      if (!currentUser) {
        return;
      }
      const parsed = JSON.parse(locallyHiddenCols);
      try {
        yield users/* default */.A.update(currentUser.id, {
          settings: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, userSettings), { hidden_host_columns: parsed })
        });
        localStorage.removeItem("hostHiddenColumns");
      } catch (e) {
      }
      setHiddenColumns(parsed);
    }))();
  }
  const refetchHosts = () => {
    refetchHostsAPI();
    refetchHostsCountAPI();
  };
  const hasErrors = !!errorHosts || !!errorHostsCount || !!errorPolicy || !!errorConfigProfile || isErrorScriptBatchSummary;
  const toggleDeleteSecretModal = () => {
    setShowDeleteSecretModal(!showDeleteSecretModal);
    setShowEnrollSecretModal(!showEnrollSecretModal);
  };
  const toggleSecretEditorModal = () => {
    setShowSecretEditorModal(!showSecretEditorModal);
    setShowEnrollSecretModal(!showEnrollSecretModal);
  };
  const toggleDeleteLabelModal = () => {
    setShowDeleteLabelModal(!showDeleteLabelModal);
  };
  const toggleTransferHostModal = () => {
    setShowTransferHostModal(!showTransferHostModal);
  };
  const toggleDeleteHostModal = () => {
    setShowDeleteHostModal(!showDeleteHostModal);
  };
  const toggleAddHostsModal = () => {
    setShowAddHostsModal(!showAddHostsModal);
  };
  const toggleRunScriptBatchModal = (0,react.useCallback)(() => {
    setShowRunScriptBatchModal(!showRunScriptBatchModal);
  }, [showRunScriptBatchModal]);
  const toggleHostActivityAutomationsModal = () => {
    setShowHostActivityAutomationsModal(!showHostActivityAutomationsModal);
  };
  const {
    mutate: updateHostActivityAutomations,
    isLoading: isUpdatingHostActivityAutomations
  } = (0,es.useMutation)(
    (formData) => entities_teams/* default */.A.update(
      {
        webhook_settings: {
          host_activities_webhook: {
            enable_host_activities_webhook: formData.enabled,
            destination_url: formData.url
          }
        }
      },
      teamIdForApi
    ),
    {
      onSuccess: () => {
        ToastNotification/* notify */.me.success("Successfully updated activity automations.");
        setShowHostActivityAutomationsModal(false);
        refetchHostActivityAutomations();
      },
      onError: () => {
        ToastNotification/* notify */.me.error(
          "Could not update activity automations. Please try again."
        );
      }
    }
  );
  const onSelectHostsPageSetting = (value) => {
    switch (value) {
      case "enrollSecrets":
        setShowEnrollSecretModal(true);
        break;
      case "customHostVitals":
        router.push(
          (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.CONTROLS_VARIABLES_CUSTOM_HOST_VITALS, {
            fleet_id: teamIdForApi
          })
        );
        break;
      case "activityAutomations":
        setShowHostActivityAutomationsModal(true);
        break;
      default:
    }
  };
  const toggleEditColumnsModal = () => {
    setShowEditColumnsModal(!showEditColumnsModal);
  };
  const toggleAllMatchingHosts = (shouldSelect) => {
    if (typeof shouldSelect !== "undefined") {
      setIsAllMatchingHostsSelected(shouldSelect);
    } else {
      setIsAllMatchingHostsSelected(!isAllMatchingHostsSelected);
    }
  };
  (0,react.useEffect)(() => {
    const slugToFind = selectedLabels.length > 0 && selectedLabels.find((f) => f.includes(LABEL_SLUG_PREFIX)) || selectedLabels[0];
    const validLabel = (0,lodash.find)(labels, ["slug", slugToFind]);
    if (selectedLabel !== validLabel) {
      setSelectedLabel(validLabel);
    }
  }, [labels, selectedLabels, selectedLabel]);
  (0,react.useEffect)(() => {
    if (location.search.match(
      /software_id|software_version_id|software_title_id|software_status/gi
    )) {
      return;
    }
    const path = location.pathname + location.search;
    if (filteredHostsPath !== path) {
      setFilteredHostsPath(path);
    }
  }, [filteredHostsPath, location, setFilteredHostsPath]);
  const isLastPage = tableQueryData && !!totalFilteredHostsCount && DEFAULT_PAGE_SIZE * tableQueryData.pageIndex + (((_k = hostsData == null ? void 0 : hostsData.hosts) == null ? void 0 : _k.length) || 0) >= totalFilteredHostsCount;
  const handleLabelChange = ({ slug, id: newLabelId }) => {
    const { MANAGE_HOSTS } = paths/* default */.A;
    const isDeselectingLabel = newLabelId && newLabelId === (selectedLabel == null ? void 0 : selectedLabel.id);
    let newQueryParams = queryParams;
    if (slug) {
      newQueryParams = (0,lodash.omit)(
        newQueryParams,
        MANAGE_HOSTS_PAGE_LABEL_INCOMPATIBLE_QUERY_PARAMS
      );
    }
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: isDeselectingLabel ? MANAGE_HOSTS : `${MANAGE_HOSTS}/${slug}`,
        queryParams: newQueryParams
      })
    );
    return true;
  };
  const handleChangePoliciesFilter = (response) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          policy_id: policyId,
          policy_response: response,
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleChangeDiskEncryptionStatusFilter = (newStatus) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          [hosts/* HOSTS_QUERY_PARAMS */.c.DISK_ENCRYPTION]: newStatus,
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleChangeOsSettingsFilter = (newStatus) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          [hosts/* HOSTS_QUERY_PARAMS */.c.OS_SETTINGS]: newStatus,
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleChangeBootstrapPackageStatusFilter = (newStatus) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), { macos_bootstrap_package: newStatus })
      })
    );
  };
  const handleClearRouteParam = () => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams: void 0,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleClearFilter = (omitParams) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, (0,lodash.omit)(queryParams, omitParams)), {
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleStatusDropdownChange = (statusName) => {
    const value = statusName == null ? void 0 : statusName.value;
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues(ManageHostsPage_spreadValues(ManageHostsPage_spreadValues({}, queryParams), value !== "pending" && {
          status: value,
          mdm_enrollment_status: void 0
        }), value === "pending" && {
          mdm_enrollment_status: value,
          status: void 0
        }), {
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleMacSettingsStatusDropdownChange = (newMacSettingsStatus) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          apple_settings: newMacSettingsStatus,
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleSoftwareInstallStatusChange = (newStatus) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          [hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS]: newStatus,
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleConfigProfileStatusChange = (newStatus) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          profile_status: newStatus,
          profile_uuid: configProfileUUID,
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleChangeScriptBatchStatusFilter = (newStatus) => {
    router.replace(
      (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_HOSTS,
        routeTemplate,
        routeParams,
        queryParams: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, queryParams), {
          [hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_STATUS]: newStatus,
          page: 0
          // resets page index
        })
      })
    );
  };
  const handleRowSelect = (row) => {
    if (row.original.id) {
      const path = paths/* default */.A.HOST_DETAILS(row.original.id);
      router.push(path);
    }
  };
  const onAddLabelClick = () => {
    router.push(`${paths/* default */.A.NEW_LABEL}`);
  };
  const onEditLabelClick = (evt) => {
    evt.preventDefault();
    router.push(`${paths/* default */.A.EDIT_LABEL(parseInt(labelID, 10))}`);
  };
  const onSaveColumns = (newHiddenColumns) => ManageHostsPage_async(null, null, function* () {
    if (!currentUser) {
      return;
    }
    try {
      yield users/* default */.A.update(currentUser.id, {
        settings: ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, userSettings), { hidden_host_columns: newHiddenColumns })
      });
      setHiddenColumns(newHiddenColumns);
      setShowEditColumnsModal(false);
    } catch (response) {
      ToastNotification/* notify */.me.error("Couldn't save column settings. Please try again.", {
        response
      });
    }
  });
  const onTableQueryChange = (0,react.useCallback)(
    (newTableQuery) => ManageHostsPage_async(null, null, function* () {
      if (!isRouteOk || (0,lodash.isEqual)(newTableQuery, tableQueryData)) {
        return;
      }
      setTableQueryData(ManageHostsPage_spreadValues({}, newTableQuery));
      const {
        searchQuery: searchText,
        sortHeader,
        sortDirection,
        pageIndex
      } = newTableQuery;
      let sort = sortBy;
      if (sortHeader) {
        sort = [
          {
            key: sortHeader,
            direction: sortDirection || DEFAULT_SORT_DIRECTION
          }
        ];
      } else if (!sortBy.length) {
        sort = [
          { key: DEFAULT_SORT_HEADER, direction: DEFAULT_SORT_DIRECTION }
        ];
      }
      if (!(0,lodash.isEqual)(sort, sortBy)) {
        setSortBy([...sort]);
      }
      if (!(0,lodash.isEqual)(searchText, searchQuery)) {
        setSearchQuery(searchText);
      }
      const newQueryParams = {};
      if (!(0,lodash.isEmpty)(searchText)) {
        newQueryParams.query = searchText;
      }
      newQueryParams.page = pageIndex;
      newQueryParams.order_key = sort[0].key || DEFAULT_SORT_HEADER;
      newQueryParams.order_direction = sort[0].direction || DEFAULT_SORT_DIRECTION;
      newQueryParams.fleet_id = teamIdForApi;
      if (status) {
        newQueryParams.status = status;
      }
      if (policyId && policyResponse) {
        newQueryParams.policy_id = policyId;
        newQueryParams.policy_response = policyResponse;
      } else if (macSettingsStatus) {
        newQueryParams.apple_settings = macSettingsStatus;
      } else if (softwareId) {
        newQueryParams.software_id = softwareId;
      } else if (softwareVersionId) {
        newQueryParams.software_version_id = softwareVersionId;
        if (osVersionId || osName && osVersion) {
          newQueryParams.os_version_id = osVersionId;
          newQueryParams.os_name = osName;
          newQueryParams.os_version = osVersion;
        }
      } else if (softwareTitleId) {
        newQueryParams.software_title_id = softwareTitleId;
        if (softwareStatus && teamIdForApi !== team/* API_ALL_TEAMS_ID */.s_) {
          newQueryParams[hosts/* HOSTS_QUERY_PARAMS */.c.SOFTWARE_STATUS] = softwareStatus;
        }
      } else if (mdmId) {
        newQueryParams.mdm_id = mdmId;
      } else if (mdmEnrollmentStatus) {
        newQueryParams.mdm_enrollment_status = mdmEnrollmentStatus;
      } else if (munkiIssueId) {
        newQueryParams.munki_issue_id = munkiIssueId;
      } else if (missingHosts) {
        newQueryParams.status = "missing";
      } else if (lowDiskSpaceHosts && isPremiumTier) {
        newQueryParams.low_disk_space = lowDiskSpaceHosts;
      } else if (osVersionId || osName && osVersion) {
        newQueryParams.os_version_id = osVersionId;
        newQueryParams.os_name = osName;
        newQueryParams.os_version = osVersion;
      } else if (vulnerability) {
        newQueryParams.vulnerability = vulnerability;
      } else if (osSettingsStatus) {
        newQueryParams[hosts/* HOSTS_QUERY_PARAMS */.c.OS_SETTINGS] = osSettingsStatus;
      } else if (diskEncryptionStatus && isPremiumTier) {
        newQueryParams[hosts/* HOSTS_QUERY_PARAMS */.c.DISK_ENCRYPTION] = diskEncryptionStatus;
      } else if (bootstrapPackageStatus && isPremiumTier) {
        newQueryParams.macos_bootstrap_package = bootstrapPackageStatus;
      } else if (configProfileStatus && configProfileUUID) {
        newQueryParams.profile_status = configProfileStatus;
        newQueryParams.profile_uuid = configProfileUUID;
      } else if (scriptBatchExecutionStatus && scriptBatchExecutionId) {
        newQueryParams[hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_STATUS] = scriptBatchExecutionStatus;
        newQueryParams[hosts/* HOSTS_QUERY_PARAMS */.c.SCRIPT_BATCH_EXECUTION_ID] = scriptBatchExecutionId;
      } else if (depProfileError) {
        newQueryParams.dep_profile_error = depProfileError;
      } else if (depAssignProfileResponse) {
        newQueryParams.dep_assign_profile_response = depAssignProfileResponse;
      }
      router.replace(
        (0,utilities_helpers/* getNextLocationPath */.g2)({
          pathPrefix: paths/* default */.A.MANAGE_HOSTS,
          routeTemplate,
          routeParams,
          queryParams: newQueryParams
        })
      );
    }),
    [
      isRouteOk,
      tableQueryData,
      sortBy,
      searchQuery,
      teamIdForApi,
      status,
      policyId,
      policyResponse,
      macSettingsStatus,
      softwareId,
      softwareVersionId,
      softwareTitleId,
      mdmId,
      mdmEnrollmentStatus,
      munkiIssueId,
      missingHosts,
      lowDiskSpaceHosts,
      isPremiumTier,
      osVersionId,
      osName,
      osVersion,
      vulnerability,
      osSettingsStatus,
      diskEncryptionStatus,
      bootstrapPackageStatus,
      configProfileStatus,
      configProfileUUID,
      scriptBatchExecutionStatus,
      scriptBatchExecutionId,
      router,
      routeTemplate,
      routeParams,
      softwareStatus,
      depProfileError,
      depAssignProfileResponse
    ]
  );
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      handleTeamChange(teamId);
      setFilteredSoftwarePath("");
      setFilteredQueriesPath("");
      setFilteredPoliciesPath("");
    },
    [handleTeamChange]
  );
  const onSaveSecret = (enrollSecretString) => ManageHostsPage_async(null, null, function* () {
    const { MANAGE_HOSTS } = paths/* default */.A;
    const currentSecrets = isAnyTeamSelected ? teamSecrets || [] : globalSecrets || [];
    const newSecrets = currentSecrets.filter(
      (s) => s.secret !== (selectedSecret == null ? void 0 : selectedSecret.secret)
    );
    if (enrollSecretString) {
      newSecrets.push({ secret: enrollSecretString });
    }
    setIsUpdating(true);
    try {
      if (isAnyTeamSelected) {
        yield enroll_secret/* default */.A.modifyTeamEnrollSecrets(
          currentTeamId,
          newSecrets
        );
        refetchTeamSecrets();
      } else {
        yield enroll_secret/* default */.A.modifyGlobalEnrollSecrets(newSecrets);
        refetchGlobalSecrets();
      }
      toggleSecretEditorModal();
      isPremiumTier && refetchTeams();
      router.push(
        (0,utilities_helpers/* getNextLocationPath */.g2)({
          pathPrefix: MANAGE_HOSTS,
          routeTemplate: routeTemplate.replace("/labels/:label_id", ""),
          routeParams,
          queryParams
        })
      );
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
      setIsUpdating(false);
    }
  });
  const onDeleteSecret = () => ManageHostsPage_async(null, null, function* () {
    const { MANAGE_HOSTS } = paths/* default */.A;
    const currentSecrets = isAnyTeamSelected ? teamSecrets || [] : globalSecrets || [];
    const newSecrets = currentSecrets.filter(
      (s) => s.secret !== (selectedSecret == null ? void 0 : selectedSecret.secret)
    );
    setIsUpdating(true);
    try {
      if (isAnyTeamSelected) {
        yield enroll_secret/* default */.A.modifyTeamEnrollSecrets(
          currentTeamId,
          newSecrets
        );
        refetchTeamSecrets();
      } else {
        yield enroll_secret/* default */.A.modifyGlobalEnrollSecrets(newSecrets);
        refetchGlobalSecrets();
      }
      toggleDeleteSecretModal();
      refetchTeams();
      router.push(
        (0,utilities_helpers/* getNextLocationPath */.g2)({
          pathPrefix: MANAGE_HOSTS,
          routeTemplate: routeTemplate.replace("/labels/:label_id", ""),
          routeParams,
          queryParams
        })
      );
      ToastNotification/* notify */.me.success(`Successfully deleted enroll secret.`);
    } catch (error) {
      console.error(error);
      ToastNotification/* notify */.me.error("Could not delete enroll secret. Please try again.", {
        response: error
      });
    } finally {
      setIsUpdating(false);
    }
  });
  const onDeleteLabel = () => ManageHostsPage_async(null, null, function* () {
    if (!selectedLabel) {
      console.error("Label isn't available. This should not happen.");
      return;
    }
    setIsUpdating(true);
    const { MANAGE_HOSTS } = paths/* default */.A;
    try {
      yield entities_labels/* default */.Ay.destroy(selectedLabel);
      toggleDeleteLabelModal();
      refetchLabels();
      router.push(
        (0,utilities_helpers/* getNextLocationPath */.g2)({
          pathPrefix: MANAGE_HOSTS,
          routeTemplate: routeTemplate.replace("/labels/:label_id", ""),
          routeParams,
          queryParams
        })
      );
      ToastNotification/* notify */.me.success("Successfully deleted label.");
    } catch (error) {
      ToastNotification/* notify */.me.error((0,helpers/* default */.A)(error), { response: error });
    } finally {
      setIsUpdating(false);
    }
  });
  const onTransferToTeamClick = (hostIds) => {
    toggleTransferHostModal();
    setSelectedHostIds(hostIds);
  };
  const onClickRunScriptBatchAction = (hostIds) => {
    setSelectedHostIds(hostIds);
    toggleRunScriptBatchModal();
  };
  const onDeleteHostsClick = (hostIds) => {
    toggleDeleteHostModal();
    setSelectedHostIds(hostIds);
  };
  const onTransferHostSubmit = (transferTeam) => ManageHostsPage_async(null, null, function* () {
    setIsUpdating(true);
    const teamId = typeof transferTeam.id === "number" ? transferTeam.id : null;
    const action = isAllMatchingHostsSelected ? hosts/* default */.A.transferToTeamByFilter({
      teamId,
      query: searchQuery,
      status,
      labelId: selectedLabel == null ? void 0 : selectedLabel.id,
      currentTeam: teamIdForApi,
      policyId,
      policyResponse,
      softwareId,
      softwareTitleId,
      softwareVersionId,
      softwareStatus,
      osName,
      osVersionId,
      osVersion,
      macSettingsStatus,
      bootstrapPackageStatus,
      mdmId,
      mdmEnrollmentStatus,
      munkiIssueId,
      lowDiskSpaceHosts,
      osSettings: osSettingsStatus,
      diskEncryptionStatus,
      vulnerability,
      depProfileError,
      depAssignProfileResponse
    }) : hosts/* default */.A.transferToTeam(teamId, selectedHostIds);
    try {
      yield action;
      const successMessage = teamId === null ? `Hosts successfully removed from fleets.` : `Hosts successfully transferred to  ${transferTeam.name}.`;
      ToastNotification/* notify */.me.success(successMessage);
      setResetSelectedRows(true);
      refetchHosts();
      toggleTransferHostModal();
      setSelectedHostIds([]);
      setIsAllMatchingHostsSelected(false);
    } catch (error) {
      ToastNotification/* notify */.me.error("Could not transfer hosts. Please try again.", {
        response: error
      });
    } finally {
      setIsUpdating(false);
    }
  });
  const onDeleteHostSubmit = () => ManageHostsPage_async(null, null, function* () {
    setIsUpdating(true);
    try {
      yield isAllMatchingHostsSelected ? hosts/* default */.A.destroyByFilter({
        teamId: teamIdForApi,
        query: searchQuery,
        status,
        labelId: selectedLabel == null ? void 0 : selectedLabel.id,
        policyId,
        policyResponse,
        softwareId,
        softwareTitleId,
        softwareVersionId,
        softwareStatus,
        osName,
        osVersionId,
        osVersion,
        macSettingsStatus,
        bootstrapPackageStatus,
        mdmId,
        mdmEnrollmentStatus,
        munkiIssueId,
        lowDiskSpaceHosts,
        osSettings: osSettingsStatus,
        diskEncryptionStatus,
        vulnerability
      }) : hosts/* default */.A.destroyBulk(selectedHostIds);
      const successMessage = "Hosts successfully deleted.";
      ToastNotification/* notify */.me.success(successMessage);
      setResetSelectedRows(true);
      refetchHosts();
      refetchLabels();
      toggleDeleteHostModal();
      setSelectedHostIds([]);
      setIsAllMatchingHostsSelected(false);
    } catch (error) {
      ToastNotification/* notify */.me.error("Could not delete hosts. Please try again.", {
        response: error
      });
    } finally {
      setIsUpdating(false);
    }
  });
  const renderEditColumnsModal = () => {
    if (!config || !currentUser) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      EditColumnsModal_EditColumnsModal,
      {
        columns: generateAvailableTableHeaders({ isFreeTier, isOnlyObserver }),
        hiddenColumns,
        onSaveColumns,
        onCancelColumns: toggleEditColumnsModal
      }
    );
  };
  const renderSecretEditorModal = () => /* @__PURE__ */ react.createElement(
    SecretEditorModal/* default */.A,
    {
      selectedTeam: teamIdForApi || 0,
      primoMode: isPrimoMode || false,
      teams: teams || [],
      onSaveSecret,
      toggleSecretEditorModal,
      selectedSecret,
      isUpdatingSecret: isUpdating
    }
  );
  const renderDeleteSecretModal = () => /* @__PURE__ */ react.createElement(
    DeleteSecretModal/* default */.A,
    {
      onDeleteSecret,
      toggleDeleteSecretModal,
      isUpdatingSecret: isUpdating
    }
  );
  const renderEnrollSecretModal = () => /* @__PURE__ */ react.createElement(
    EnrollSecretModal/* default */.A,
    {
      selectedTeamId: teamIdForApi || 0,
      primoMode: isPrimoMode || false,
      teams: teams || [],
      onReturnToApp: () => setShowEnrollSecretModal(false),
      toggleSecretEditorModal,
      toggleDeleteSecretModal,
      setSelectedSecret,
      globalSecrets
    }
  );
  const renderDeleteLabelModal = () => /* @__PURE__ */ react.createElement(
    DeleteLabelModal/* default */.A,
    {
      onSubmit: onDeleteLabel,
      onCancel: toggleDeleteLabelModal,
      isUpdatingLabel: isUpdating
    }
  );
  const renderAddHostsModal = () => {
    var _a2, _b2;
    const enrollSecret = isAnyTeamSelected ? (_a2 = teamSecrets == null ? void 0 : teamSecrets[0]) == null ? void 0 : _a2.secret : (_b2 = globalSecrets == null ? void 0 : globalSecrets[0]) == null ? void 0 : _b2.secret;
    return /* @__PURE__ */ react.createElement(
      AddHostsModal/* default */.A,
      {
        currentTeamName: currentTeamName || "Mesh",
        enrollSecret,
        isAnyTeamSelected,
        isLoading: isLoadingTeams || isGlobalSecretsLoading,
        onCancel: toggleAddHostsModal,
        openEnrollSecretModal: () => setShowEnrollSecretModal(true)
      }
    );
  };
  const renderTransferHostModal = () => {
    if (!teams) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      TransferHostModal/* default */.A,
      {
        isGlobalAdmin,
        teams,
        onSubmit: onTransferHostSubmit,
        onCancel: toggleTransferHostModal,
        isUpdating,
        multipleHosts: selectedHostIds.length > 1,
        hostsTeamId: currentTeamId
      }
    );
  };
  const renderDeleteHostModal = () => {
    var _a2;
    const selectedHosts = isAllMatchingHostsSelected ? [] : ((_a2 = hostsData == null ? void 0 : hostsData.hosts) != null ? _a2 : []).filter(
      (host) => selectedHostIds.includes(host.id)
    );
    const sharedTarget = selectedHosts.length === selectedHostIds.length ? getSharedDeleteHostTarget(selectedHosts) : void 0;
    return /* @__PURE__ */ react.createElement(
      DeleteHostModal/* default */.A,
      {
        selectedHostIds,
        hostName: selectedHosts.length === 1 ? selectedHosts[0].display_name : void 0,
        platform: sharedTarget == null ? void 0 : sharedTarget.platform,
        isMdmEnrolledInFleet: sharedTarget == null ? void 0 : sharedTarget.isMdmEnrolledInFleet,
        mdmEnrollmentStatus: sharedTarget == null ? void 0 : sharedTarget.mdmEnrollmentStatus,
        onSubmit: onDeleteHostSubmit,
        onCancel: toggleDeleteHostModal,
        isAllMatchingHostsSelected,
        hostsCount: totalFilteredHostsCount,
        isUpdating
      }
    );
  };
  const renderHeaderContent = () => {
    if (isPremiumTier && !isPrimoMode && userTeams) {
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
      if (!isOnGlobalTeam && userTeams.length === 1) {
        return /* @__PURE__ */ react.createElement("h1", null, userTeams[0].name);
      }
    }
    return /* @__PURE__ */ react.createElement("h1", null, "Hosts");
  };
  const renderHeader = () => /* @__PURE__ */ react.createElement("div", { className: `${ManageHostsPage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageHostsPage_baseClass}__text` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageHostsPage_baseClass}__title` }, renderHeaderContent())));
  const onExportHostsResults = (0,react.useCallback)(
    (evt) => ManageHostsPage_async(null, null, function* () {
      evt.preventDefault();
      let visibleColumns;
      if (config && currentUser) {
        const tableColumns = generateVisibleTableColumns({
          hiddenColumns,
          isFreeTier,
          isOnlyObserver,
          teamId: teamIdForApi
        });
        const columnIds = tableColumns.map((column) => column.id ? column.id : "").filter((element) => element !== "" && element !== "selection").reduce((acc, element) => {
          if (element === "agent") {
            acc.push("orbit_version", "osquery_version");
          } else if (element === "hardware_model") {
            acc.push("hardware_model", "hardware_marketing_name");
          } else {
            acc.push(element);
          }
          return acc;
        }, []);
        visibleColumns = columnIds.join(",");
      }
      let options = {
        selectedLabels,
        globalFilter: searchQuery,
        sortBy: apiSortBy,
        teamId: teamIdForApi,
        policyId,
        policyResponse,
        macSettingsStatus,
        softwareId,
        softwareTitleId,
        softwareVersionId,
        softwareStatus,
        status,
        mdmId,
        mdmEnrollmentStatus,
        munkiIssueId,
        lowDiskSpaceHosts,
        osName,
        osVersionId,
        osVersion,
        osSettings: osSettingsStatus,
        bootstrapPackageStatus,
        vulnerability,
        visibleColumns,
        configProfileUUID,
        configProfileStatus,
        scriptBatchExecutionStatus,
        scriptBatchExecutionId,
        diskEncryptionStatus,
        depProfileError: (0,stringUtils/* strToBool */.$5)(depProfileError),
        depAssignProfileResponse
      };
      options = ManageHostsPage_spreadProps(ManageHostsPage_spreadValues({}, options), {
        teamId: teamIdForApi
      });
      if (queryParams.fleet_id !== team/* API_ALL_TEAMS_ID */.s_ && queryParams.fleet_id !== "") {
        options.teamId = queryParams.fleet_id;
      }
      try {
        const exportHostResults = yield hosts/* default */.A.exportHosts(options);
        const formattedTime = (0,format/* format */.GP)(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
        const filename = `${CSV_HOSTS_TITLE} ${formattedTime}.csv`;
        const file = new __webpack_require__.g.window.File([exportHostResults], filename, {
          type: "text/csv"
        });
        FileSaver_default().saveAs(file);
      } catch (error) {
        console.error(error);
        ToastNotification/* notify */.me.error("Could not export hosts. Please try again.", {
          response: error
        });
      }
    }),
    [
      config,
      currentUser,
      isFreeTier,
      isOnlyObserver,
      teamIdForApi,
      selectedLabels,
      searchQuery,
      apiSortBy,
      policyId,
      policyResponse,
      macSettingsStatus,
      softwareId,
      softwareTitleId,
      softwareVersionId,
      softwareStatus,
      status,
      mdmId,
      mdmEnrollmentStatus,
      munkiIssueId,
      lowDiskSpaceHosts,
      osName,
      osVersionId,
      osVersion,
      osSettingsStatus,
      bootstrapPackageStatus,
      vulnerability,
      configProfileUUID,
      configProfileStatus,
      scriptBatchExecutionStatus,
      scriptBatchExecutionId,
      diskEncryptionStatus,
      depProfileError,
      depAssignProfileResponse,
      hiddenColumns,
      queryParams.fleet_id
    ]
  );
  const maybeEmptyHosts = totalFilteredHostsCount === 0 && searchQuery === "" && !labelID && !status;
  const includesFilterQueryParam = MANAGE_HOSTS_PAGE_FILTER_KEYS.some(
    (filter) => filter !== "fleet_id" && typeof queryParams === "object" && filter in queryParams
    // TODO: replace this with `Object.hasOwn(queryParams, filter)` when we upgrade to es2022
  );
  const isTrulyEmpty = maybeEmptyHosts && !includesFilterQueryParam;
  const renderHostCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "hosts", count: totalFilteredHostsCount });
  }, [totalFilteredHostsCount]);
  const renderCustomControls = () => {
    const selectedDropdownLabel = (selectedLabel == null ? void 0 : selectedLabel.type) !== "all" && (selectedLabel == null ? void 0 : selectedLabel.type) !== "status" ? selectedLabel : void 0;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ManageHostsPage_baseClass}__table-actions` }, (!!totalFilteredHostsCount || isTrulyEmpty) && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${ManageHostsPage_baseClass}__export-btn`,
        onClick: onExportHostsResults,
        variant: "secondary",
        disabled: isTrulyEmpty,
        icon: "download"
      },
      "Export hosts"
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${ManageHostsPage_baseClass}__edit-columns-btn`,
        onClick: toggleEditColumnsModal,
        variant: "secondary",
        disabled: isTrulyEmpty,
        icon: "columns"
      },
      "Edit columns"
    )), /* @__PURE__ */ react.createElement("div", { className: `${ManageHostsPage_baseClass}__filter-dropdowns` }, /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        name: "status-filter",
        value: status || mdmEnrollmentStatus || "",
        className: `${ManageHostsPage_baseClass}__status-filter`,
        options: hostSelectStatuses(isPremiumTier || false),
        onChange: handleStatusDropdownChange,
        variant: "table-filter",
        isDisabled: isTrulyEmpty
      }
    ), /* @__PURE__ */ react.createElement(
      LabelFilterSelect_LabelFilterSelect,
      {
        className: `${ManageHostsPage_baseClass}__label-filter-dropdown`,
        labels: labels != null ? labels : [],
        canAddNewLabels,
        selectedLabel: selectedDropdownLabel != null ? selectedDropdownLabel : null,
        onChange: handleLabelChange,
        onAddLabel: onAddLabelClick,
        isLoading: isLoadingLabels,
        isDisabled: isTrulyEmpty
      }
    )));
  };
  const isLoading = isLoadingHosts || isLoadingHostsCount || isLoadingPolicy || isLoadingOsVersions || isLoadingConfigProfile || isLoadingScriptBatchSummary;
  const renderTable = () => {
    var _a2;
    if (!config || !currentUser || !isRouteOk) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (hasErrors) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    let disableRunScriptBatchTooltipContent;
    if ((_a2 = config == null ? void 0 : config.server_settings) == null ? void 0 : _a2.scripts_disabled) {
      disableRunScriptBatchTooltipContent = /* @__PURE__ */ react.createElement(react.Fragment, null, "Running scripts is disabled in organization settings.");
    } else if (isAllTeamsSelected && isPremiumTier) {
      disableRunScriptBatchTooltipContent = "Select a fleet to run a script.";
    } else if (isAllMatchingHostsSelected) {
      if (runScriptBatchFilterNotSupported) {
        disableRunScriptBatchTooltipContent = "Choose different filters to run a script.";
      } else if (
        // default to blocking until count API responds
        !totalFilteredHostsCount || totalFilteredHostsCount > constants/* MAX_SCRIPT_BATCH_TARGETS */.f0
      ) {
        disableRunScriptBatchTooltipContent = `Target at most ${constants/* MAX_SCRIPT_BATCH_TARGETS */.f0.toLocaleString()} hosts to run a script.`;
      }
    }
    const secondarySelectActions = [
      {
        name: "run-script",
        onClick: onClickRunScriptBatchAction,
        buttonText: "Run script",
        variant: "secondary",
        iconSvg: "run",
        hideButton: !canRunScriptBatch,
        isDisabled: !!disableRunScriptBatchTooltipContent,
        tooltipContent: disableRunScriptBatchTooltipContent
      },
      {
        name: "transfer",
        onClick: onTransferToTeamClick,
        buttonText: "Transfer",
        variant: "secondary",
        iconSvg: "transfer",
        hideButton: !isPremiumTier || !isGlobalAdmin && !isGlobalMaintainer && !isGlobalTechnician || isPrimoMode
      }
    ];
    const tableColumns = generateVisibleTableColumns({
      hiddenColumns,
      isFreeTier,
      // The selection column is only for roles that can bulk delete hosts.
      isOnlyObserver: isOnGlobalTeam ? isOnlyObserver : !isTeamMaintainerOrTeamAdmin && !isTeamTechnician,
      teamId: teamIdForApi
    });
    const emptyState = () => {
      const emptyHosts = {
        header: "No hosts match your filters",
        info: "Recently enrolled hosts will appear here after their first check-in.",
        primaryButton: canEnrollHosts ? /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: toggleAddHostsModal, type: "button" }, "Add hosts") : void 0
      };
      if (isTrulyEmpty) {
        emptyHosts.header = "No hosts";
        if (canEnrollHosts) {
          emptyHosts.info = /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh refers to computers, servers, and mobile devices as hosts.", /* @__PURE__ */ react.createElement("br", null), "Add a host to start seeing data.");
          emptyHosts.primaryButton = /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: toggleAddHostsModal, type: "button" }, "Add hosts");
        } else {
          emptyHosts.info = "Fleet refers to computers, servers, and mobile devices as hosts.";
          emptyHosts.primaryButton = void 0;
        }
      } else if (isLastPage) {
        emptyHosts.header = "No more hosts to display";
        emptyHosts.info = "Expecting to see more hosts? Try again soon as the system catches up.";
        emptyHosts.primaryButton = void 0;
      }
      return emptyHosts;
    };
    const unsupportedFilter = !!(policyId || policyResponse || softwareId || softwareTitleId || softwareVersionId || osName || osVersionId || osVersion || macSettingsStatus || bootstrapPackageStatus || mdmId || mdmEnrollmentStatus || munkiIssueId || lowDiskSpaceHosts || osSettingsStatus || diskEncryptionStatus || vulnerability || depProfileError || depAssignProfileResponse);
    return /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        resultsTitle: "hosts",
        columnConfigs: tableColumns,
        data: (hostsData == null ? void 0 : hostsData.hosts) || [],
        isLoading,
        manualSortBy: true,
        defaultSortHeader: sortBy[0] && sortBy[0].key || DEFAULT_SORT_HEADER,
        defaultSortDirection: sortBy[0] && sortBy[0].direction || DEFAULT_SORT_DIRECTION,
        pageIndex: curPageFromURL,
        defaultSearchQuery: searchQuery,
        pageSize: DEFAULT_PAGE_SIZE,
        additionalQueries: JSON.stringify(selectedLabels),
        inputPlaceHolder: constants/* HOSTS_SEARCH_BOX_PLACEHOLDER */.Ru,
        primarySelectAction: {
          name: "delete host",
          buttonText: "Delete",
          iconSvg: "trash",
          variant: "secondary",
          onClick: onDeleteHostsClick
        },
        secondarySelectActions,
        showMarkAllPages: !unsupportedFilter,
        isAllPagesSelected: isAllMatchingHostsSelected,
        totalCount: totalFilteredHostsCount,
        searchable: true,
        disableSearch: isTrulyEmpty,
        renderCount: renderHostCount,
        searchToolTipText: constants/* HOSTS_SEARCH_BOX_TOOLTIP */.HI,
        emptyComponent: () => /* @__PURE__ */ react.createElement(
          EmptyState/* default */.A,
          {
            header: emptyState().header,
            info: emptyState().info,
            primaryButton: emptyState().primaryButton
          }
        ),
        customControl: renderCustomControls,
        onQueryChange: onTableQueryChange,
        toggleAllPagesSelected: toggleAllMatchingHosts,
        onClickRow: handleRowSelect,
        disableNextPage: isLastPage
      }
    );
  };
  const renderNoEnrollSecretBanner = () => {
    if (useOneTimeEnrollSecrets) {
      return null;
    }
    const noTeamEnrollSecrets = isAnyTeamSelected && !isTeamSecretsLoading && !(teamSecrets == null ? void 0 : teamSecrets.length);
    const noGlobalEnrollSecrets = (!isPremiumTier || isPremiumTier && !isAnyTeamSelected && !isLoadingTeams) && !isGlobalSecretsLoading && !(globalSecrets == null ? void 0 : globalSecrets.length);
    return (canEnrollHosts && noTeamEnrollSecrets || canEnrollGlobalHosts && noGlobalEnrollSecrets) && /* @__PURE__ */ react.createElement(
      InfoBanner/* default */.A,
      {
        className: `${ManageHostsPage_baseClass}__no-enroll-secret-banner`,
        color: "yellow",
        cta: /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "link",
            onClick: () => setShowEnrollSecretModal(true)
          },
          "Add enroll secret"
        )
      },
      /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("span", null, "You have no enroll secrets. New hosts will not enroll until an enroll secret is added to", " ", /* @__PURE__ */ react.createElement("b", null, isAnyTeamSelected ? currentTeamName : "Mesh"), "."))
    );
  };
  const showAddHostsButton = canEnrollHosts && !hasErrors;
  const hostsPageSettingsOptions = [];
  if (canEnrollHosts) {
    hostsPageSettingsOptions.push({
      label: "Enroll secrets",
      value: "enrollSecrets",
      disabled: false
    });
  }
  if (canManageCustomHostVitals) {
    hostsPageSettingsOptions.push({
      label: "Custom host vitals",
      value: "customHostVitals",
      disabled: false
    });
  }
  if (canManageHostActivityAutomations) {
    const automationsDisabled = !isPremiumTier || isAllTeamsSelected;
    let automationsTooltip;
    if (!isPremiumTier) {
      automationsTooltip = "Activity automations are available in Mesh Premium.";
    } else if (isAllTeamsSelected) {
      automationsTooltip = "Select a fleet to manage activity automations.";
    }
    hostsPageSettingsOptions.push({
      label: "Activity automations",
      value: "activityAutomations",
      disabled: automationsDisabled,
      tooltipContent: automationsTooltip
    });
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: ManageHostsPage_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${ManageHostsPage_baseClass}__header-wrap` }, renderHeader(), /* @__PURE__ */ react.createElement("div", { className: `${ManageHostsPage_baseClass}__button-wrap` }, hostsPageSettingsOptions.length > 0 && !hasErrors && /* @__PURE__ */ react.createElement(
    ActionsDropdown/* default */.A,
    {
      className: `${ManageHostsPage_baseClass}__settings-dropdown`,
      options: hostsPageSettingsOptions,
      placeholder: "Hosts page settings",
      onChange: onSelectHostsPageSetting,
      triggerIcon: "settings",
      menuAlign: "right"
    }
  ), showAddHostsButton && /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      onClick: toggleAddHostsModal,
      className: `${ManageHostsPage_baseClass}__add-hosts`
    },
    /* @__PURE__ */ react.createElement("span", null, "Add hosts")
  ))), /* @__PURE__ */ react.createElement(
    HostsFilterBlock_HostsFilterBlock,
    {
      params: {
        policyResponse,
        policyId,
        policy,
        macSettingsStatus,
        softwareId,
        softwareTitleId,
        softwareVersionId,
        softwareStatus,
        mdmId,
        mdmEnrollmentStatus,
        lowDiskSpaceHosts,
        osVersionId,
        osName,
        osVersion,
        osVersions,
        munkiIssueId,
        munkiIssueDetails: (hostsData == null ? void 0 : hostsData.munki_issue) || null,
        softwareDetails: (hostsData == null ? void 0 : hostsData.software) || (hostsData == null ? void 0 : hostsData.software_title) || null,
        mdmSolutionDetails: (hostsData == null ? void 0 : hostsData.mobile_device_management_solution) || null,
        osSettingsStatus,
        diskEncryptionStatus,
        bootstrapPackageStatus,
        vulnerability,
        configProfileStatus,
        configProfileUUID,
        configProfile,
        scriptBatchExecutionStatus,
        scriptBatchExecutionId,
        scriptBatchRanAt: (scriptBatchSummary == null ? void 0 : scriptBatchSummary.created_at) || null,
        scriptBatchScriptName: (scriptBatchSummary == null ? void 0 : scriptBatchSummary.script_name) || null,
        depProfileError,
        depAssignProfileResponse
      },
      selectedLabel,
      isOnlyObserver,
      handleClearRouteParam,
      handleClearFilter,
      onChangePoliciesFilter: handleChangePoliciesFilter,
      onChangeOsSettingsFilter: handleChangeOsSettingsFilter,
      onChangeDiskEncryptionStatusFilter: handleChangeDiskEncryptionStatusFilter,
      onChangeBootstrapPackageStatusFilter: handleChangeBootstrapPackageStatusFilter,
      onChangeMacSettingsFilter: handleMacSettingsStatusDropdownChange,
      onChangeSoftwareInstallStatusFilter: handleSoftwareInstallStatusChange,
      onChangeConfigProfileStatusFilter: handleConfigProfileStatusChange,
      onChangeScriptBatchStatusFilter: handleChangeScriptBatchStatusFilter,
      onClickEditLabel: onEditLabelClick,
      onClickDeleteLabel: toggleDeleteLabelModal,
      isLoading,
      isScriptPackage: software/* SCRIPT_PACKAGE_SOURCES */.i0.includes(
        ((_l = hostsData == null ? void 0 : hostsData.software_title) == null ? void 0 : _l.source) || ""
      )
    }
  ), renderNoEnrollSecretBanner(), renderTable()), canEnrollHosts && showDeleteSecretModal && renderDeleteSecretModal(), canEnrollHosts && showSecretEditorModal && renderSecretEditorModal(), canEnrollHosts && showEnrollSecretModal && renderEnrollSecretModal(), showHostActivityAutomationsModal && !isLoadingHostActivityAutomations && !isErrorHostActivityAutomations && /* @__PURE__ */ react.createElement(
    HostActivityAutomationsModal_HostActivityAutomationsModal,
    {
      automationSettings: hostActivityAutomations,
      fleetName: currentTeamName || "Mesh",
      onSubmit: updateHostActivityAutomations,
      onExit: toggleHostActivityAutomationsModal,
      isUpdating: isUpdatingHostActivityAutomations
    }
  ), showEditColumnsModal && renderEditColumnsModal(), showDeleteLabelModal && renderDeleteLabelModal(), showAddHostsModal && renderAddHostsModal(), showTransferHostModal && renderTransferHostModal(), showDeleteHostModal && renderDeleteHostModal(), showRunScriptBatchModal && currentTeamId !== void 0 && totalFilteredHostsCount !== void 0 && /* @__PURE__ */ react.createElement(
    RunScriptBatchModal_RunScriptBatchModal,
    {
      runByFilters: isAllMatchingHostsSelected,
      filters: {
        query: searchQuery || void 0,
        label_id: isNaN(Number(labelID)) ? void 0 : Number(labelID),
        status: status || void 0
      },
      totalFilteredHostsCount,
      selectedHostIds,
      teamId: currentTeamId,
      isFreeTier,
      onCancel: toggleRunScriptBatchModal
    }
  ));
};
/* harmony default export */ var ManageHostsPage_ManageHostsPage = (ManageHostsPage);

;// ./frontend/pages/hosts/ManageHostsPage/index.ts




/***/ }),

/***/ 10187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _HostDetailsPage__WEBPACK_IMPORTED_MODULE_0__.Ay; }
/* harmony export */ });
/* harmony import */ var _HostDetailsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62717);




/***/ }),

/***/ 201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ HostQueryReport_HostQueryReport; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-router/es/index.js + 32 modules
var react_router_es = __webpack_require__(24179);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/modals/ShowQueryModal/index.ts + 1 modules
var ShowQueryModal = __webpack_require__(67310);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/services/entities/host_query_report.ts



/* harmony default export */ var host_query_report = ({
  load: (hostId, queryId) => {
    return (0,services/* default */.Ay)("GET", endpoints/* default */.A.HOST_QUERY_REPORT(hostId, queryId));
  }
});

// EXTERNAL MODULE: ./frontend/services/entities/queries.ts
var queries = __webpack_require__(43788);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/utilities/generate_csv/index.ts + 1 modules
var generate_csv = __webpack_require__(37706);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/DefaultColumnFilter/index.ts + 1 modules
var DefaultColumnFilter = __webpack_require__(19581);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
;// ./frontend/pages/hosts/details/HostQueryReport/HQRTable/HQRTableConfig.tsx





const generateColumnConfigs = (rows) => {
  const colsAreNumTypes = (0,helpers/* getUniqueColsAreNumTypeFromRows */.cv)(rows);
  return Array.from(colsAreNumTypes.keys()).map((colName) => {
    return {
      id: colName,
      Header: (headerProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: (
            // Sentence case last fetched
            headerProps.column.id === "last_fetched" ? "Last fetched" : headerProps.column.id || headerProps.column.id
          ),
          isSortedDesc: headerProps.column.isSortedDesc
        }
      ),
      accessor: (data) => data[colName],
      Cell: (cellProps) => {
        var _a, _b, _c;
        if (typeof ((_a = cellProps == null ? void 0 : cellProps.cell) == null ? void 0 : _a.value) !== "string") return null;
        if (cellProps.column.id === "last_fetched") {
          return /* @__PURE__ */ react.createElement(react.Fragment, null, (0,helpers/* humanHostLastSeen */.Hu)((_b = cellProps == null ? void 0 : cellProps.cell) == null ? void 0 : _b.value));
        }
        const val = (_c = cellProps == null ? void 0 : cellProps.cell) == null ? void 0 : _c.value;
        return !!(val == null ? void 0 : val.length) && val.length > 300 ? (0,helpers/* internallyTruncateText */.sq)(val) : /* @__PURE__ */ react.createElement(react.Fragment, null, val);
      },
      Filter: DefaultColumnFilter/* default */.A,
      // Component hides filter for last_fetched
      filterType: "text",
      disableSortBy: false,
      sortType: "caseInsensitive"
    };
  });
};
/* harmony default export */ var HQRTableConfig = (generateColumnConfigs);

;// ./frontend/pages/hosts/details/HostQueryReport/HQRTable/HQRTable.tsx















const baseClass = "hqr-table";
const DEFAULT_CSV_TITLE = "Host-Specific Report";
const PerformanceImpact = ({ queryStats, queryId }) => {
  const { total_executions = 0, user_time_p50 = 0, system_time_p50 = 0 } = queryStats || {};
  const scheduledQueryPerformance = {
    user_time_p50: total_executions > 0 ? Number(user_time_p50) / total_executions : 0,
    system_time_p50: total_executions > 0 ? Number(system_time_p50) / total_executions : 0,
    total_executions
  };
  const performanceImpact = {
    indicator: (0,helpers/* getPerformanceImpactDescription */.Hv)(scheduledQueryPerformance),
    id: queryId
  };
  return /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: (0,helpers/* getPerformanceImpactIndicatorTooltip */.lW)(
        performanceImpact.indicator
      )
    },
    /* @__PURE__ */ react.createElement("span", { className: "performance-impact" }, /* @__PURE__ */ react.createElement("strong", null, "Performance impact"), ": ", performanceImpact.indicator)
  );
};
const HQRTable = ({
  queryId,
  queryName,
  queryDescription,
  queryStats,
  hostName,
  rows,
  reportClipped,
  lastFetched,
  onShowQuery,
  isLoading
}) => {
  const [filteredResults, setFilteredResults] = (0,react.useState)([]);
  const columnConfigs = HQRTableConfig(rows);
  const renderTableButtons = (0,react.useCallback)(() => {
    const onExportQueryResults = (evt) => {
      evt.preventDefault();
      FileSaver_default().saveAs(
        (0,generate_csv/* generateCSVQueryResults */.K4)(
          filteredResults,
          (0,generate_csv/* generateCSVFilename */.$e)(
            queryName && hostName ? `'${queryName}' query report results for host '${hostName}'` : DEFAULT_CSV_TITLE
          ),
          columnConfigs,
          true
        )
      );
    };
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__results-cta` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${baseClass}__show-query-btn`,
        onClick: onShowQuery,
        variant: "secondary",
        size: "small",
        icon: "eye",
        iconPosition: "right"
      },
      "Show query"
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${baseClass}__export-btn`,
        onClick: onExportQueryResults,
        variant: "secondary",
        size: "small",
        icon: "download",
        iconPosition: "right"
      },
      "Export results"
    ));
  }, [onShowQuery, filteredResults, queryName, hostName, columnConfigs]);
  const renderEmptyState = (0,react.useCallback)(() => {
    if (reportClipped) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          className: `${baseClass}__report-clipped`,
          header: "Report clipped",
          info: "This report is full, so no results were saved for this host."
        }
      );
    }
    if (!lastFetched) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          className: `${baseClass}__collecting-results`,
          header: "Collecting results...",
          info: `Fleet is collecting report results from ${hostName}. Check back later.`
        }
      );
    }
    return (
      // nothing to report
      /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          className: `${baseClass}__nothing-to-report`,
          header: "Nothing to report",
          info: `This report has run on ${hostName}, but returned no data for this host.`
        }
      )
    );
  }, [lastFetched, hostName, reportClipped]);
  const renderCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "results", count: filteredResults.length }), /* @__PURE__ */ react.createElement("span", { className: "last-fetched" }, "Last fetched", " ", /* @__PURE__ */ react.createElement(HumanTimeDiffWithDateTip/* HumanTimeDiffWithFleetLaunchCutoff */.e, { timeString: lastFetched != null ? lastFetched : "" })));
  }, [filteredResults.length, lastFetched]);
  const renderTableInfo = (0,react.useCallback)(
    () => /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__query-info` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__query-info-text` }, /* @__PURE__ */ react.createElement("h2", null, /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: queryName, fixedPositionStrategy: true })), /* @__PURE__ */ react.createElement("h3", null, queryDescription)), /* @__PURE__ */ react.createElement(PerformanceImpact, { queryStats, queryId })),
    [queryDescription, queryName, queryStats, queryId]
  );
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "xxlarge", includeShadow: true, className: baseClass }, renderTableInfo(), rows.length === 0 ? renderEmptyState() : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      isLoading,
      columnConfigs,
      data: rows,
      renderCount,
      isClientSidePagination: true,
      isClientSideFilter: true,
      isMultiColumnFilter: true,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      resultsTitle: "results",
      customControl: renderTableButtons,
      setExportRows: setFilteredResults,
      emptyComponent: () => null,
      defaultSortHeader: columnConfigs[0].id,
      defaultSortDirection: "asc",
      getRowId: (_row, index) => String(index)
    }
  ));
};
/* harmony default export */ var HQRTable_HQRTable = (HQRTable);

;// ./frontend/pages/hosts/details/HostQueryReport/HQRTable/index.ts



;// ./frontend/pages/hosts/details/HostQueryReport/HostQueryReport.tsx
















const HostQueryReport_baseClass = "host-query-report";
const HostQueryReport = ({
  router,
  params: { host_id, query_id }
}) => {
  var _a;
  const { config, currentTeam } = (0,react.useContext)(app/* AppContext */.BR);
  const globalReportsDisabled = config == null ? void 0 : config.server_settings.query_reports_disabled;
  const hostId = Number(host_id);
  const queryId = Number(query_id);
  if (globalReportsDisabled) {
    router.push(paths/* default */.A.HOST_REPORTS(hostId));
  }
  const [showQuery, setShowQuery] = (0,react.useState)(false);
  const {
    data: hqrResponse,
    isLoading: hqrLoading,
    error: hqrError
  } = (0,es.useQuery)(
    [hostId, queryId],
    () => host_query_report.load(hostId, queryId),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const {
    isLoading: queryLoading,
    data: queryResponse,
    error: queryError
  } = (0,es.useQuery)(
    ["query", queryId],
    () => queries/* default */.A.load(queryId),
    {
      select: (data) => data.query,
      enabled: !!queryId,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const isLoading = queryLoading || hqrLoading;
  const {
    host_name: hostName,
    report_clipped: reportClipped,
    last_fetched: lastFetched,
    results
  } = hqrResponse || {};
  const rows = (_a = results == null ? void 0 : results.map((row) => row.columns)) != null ? _a : [];
  const {
    name: queryName,
    description: queryDescription,
    query: querySQL,
    discard_data: queryDiscardData,
    stats
  } = queryResponse || {};
  if (queryDiscardData) {
    router.push(paths/* default */.A.HOST_REPORTS(hostId));
  }
  if (queryName && hostName) {
    document.title = `${queryName} (${hostName}) |
   Hosts | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
  } else {
    document.title = `Hosts | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
  }
  const HQRHeader = (0,react.useCallback)(() => {
    const fullReportPath = (0,url/* getPathWithQueryParams */.M8)(
      paths/* default */.A.REPORT_DETAILS(queryId),
      { fleet_id: currentTeam == null ? void 0 : currentTeam.id }
    );
    return /* @__PURE__ */ react.createElement("div", { className: `${HostQueryReport_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${HostQueryReport_baseClass}__header__row1` }, /* @__PURE__ */ react.createElement(
      BackButton/* default */.A,
      {
        text: "Back to host details",
        path: paths/* default */.A.HOST_DETAILS(hostId)
      }
    )), /* @__PURE__ */ react.createElement("div", { className: `${HostQueryReport_baseClass}__header__row2` }, !hqrError && /* @__PURE__ */ react.createElement("h1", { className: "host-name" }, hostName), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: () => {
          react_router_es/* browserHistory */.Nc.push(fullReportPath);
        }
      },
      "View report for all hosts"
    )));
  }, [queryId, hostId, hqrError, hostName]);
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: HostQueryReport_baseClass }, isLoading ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, null) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(HQRHeader, null), /* @__PURE__ */ react.createElement(
    HQRTable_HQRTable,
    {
      queryId,
      queryName,
      queryDescription,
      queryStats: stats,
      hostName,
      rows,
      reportClipped,
      lastFetched,
      onShowQuery: () => setShowQuery(true),
      isLoading: false
    }
  ), showQuery && /* @__PURE__ */ react.createElement(
    ShowQueryModal/* default */.A,
    {
      query: querySQL,
      onCancel: () => setShowQuery(false)
    }
  )));
};
/* harmony default export */ var HostQueryReport_HostQueryReport = (HostQueryReport);

;// ./frontend/pages/hosts/details/HostQueryReport/index.ts




/***/ })

}]);