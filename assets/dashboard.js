"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[945],{

/***/ 86791:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ DashboardPage_DashboardPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/FleetsDropdown/index.tsx + 1 modules
var FleetsDropdown = __webpack_require__(82196);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/charts.ts
var charts = __webpack_require__(64549);
// EXTERNAL MODULE: ./frontend/interfaces/label.ts
var label = __webpack_require__(95880);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var entities_config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/enroll_secret.ts + 1 modules
var enroll_secret = __webpack_require__(90295);
// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/services/entities/host_summary.ts




/* harmony default export */ var host_summary = ({
  getSummary: ({ teamId, platform, lowDiskSpace }) => {
    const queryParams = {
      fleet_id: teamId,
      platform,
      low_disk_space: lowDiskSpace
    };
    const queryString = (0,url/* buildQueryStringFromParams */.IM)(queryParams);
    const endpoint = endpoints/* default */.A.HOST_SUMMARY;
    const path = `${endpoint}?${queryString}`;
    return (0,services/* default */.Ay)("GET", path);
  }
});

// EXTERNAL MODULE: ./frontend/services/entities/hosts.ts
var entities_hosts = __webpack_require__(42235);
;// ./frontend/services/entities/macadmins.ts




/* harmony default export */ var macadmins = ({
  loadAll: (teamId) => {
    const { MACADMINS } = endpoints/* default */.A;
    const queryString = (0,url/* buildQueryStringFromParams */.IM)({ fleet_id: teamId });
    const path = `${MACADMINS}?${queryString}`;
    return (0,services/* default */.Ay)("GET", path);
  }
});

// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var entities_software = __webpack_require__(77931);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var entities_teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/sort/index.ts + 1 modules
var sort = __webpack_require__(81302);
// EXTERNAL MODULE: ./frontend/components/AddHostsModal/index.ts + 11 modules
var AddHostsModal = __webpack_require__(60819);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareInstallDetailsModal/SoftwareInstallDetailsModal.tsx
var SoftwareInstallDetailsModal = __webpack_require__(12255);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareIpaInstallDetailsModal/index.ts
var SoftwareIpaInstallDetailsModal = __webpack_require__(7986);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareScriptDetailsModal/SoftwareScriptDetailsModal.tsx
var SoftwareScriptDetailsModal = __webpack_require__(53247);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareUninstallDetailsModal/SoftwareUninstallDetailsModal.tsx
var SoftwareUninstallDetailsModal = __webpack_require__(76903);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/VppInstallDetailsModal/index.ts
var VppInstallDetailsModal = __webpack_require__(82877);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/NotifyBeforePatchingDetailsModal/index.ts + 1 modules
var NotifyBeforePatchingDetailsModal = __webpack_require__(84838);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/IconStatusMessage/index.ts + 1 modules
var IconStatusMessage = __webpack_require__(49245);
// EXTERNAL MODULE: ./frontend/components/modals/EnrollmentAttemptDetailsModal/index.ts + 1 modules
var EnrollmentAttemptDetailsModal = __webpack_require__(37394);
// EXTERNAL MODULE: ./frontend/components/modals/FailedEnrollmentProfileModal/index.ts + 1 modules
var FailedEnrollmentProfileModal = __webpack_require__(60213);
// EXTERNAL MODULE: ./frontend/components/modals/ShowQueryModal/index.ts + 1 modules
var ShowQueryModal = __webpack_require__(67310);
// EXTERNAL MODULE: ./frontend/components/Pagination/index.ts + 1 modules
var Pagination = __webpack_require__(4891);
// EXTERNAL MODULE: ./frontend/interfaces/activity.ts
var interfaces_activity = __webpack_require__(47721);
// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var software = __webpack_require__(56906);
// EXTERNAL MODULE: ./frontend/pages/hosts/components/CommandDetailsModal/index.ts + 2 modules
var CommandDetailsModal = __webpack_require__(80569);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/services/entities/activities.ts
var entities_activities = __webpack_require__(42667);
// EXTERNAL MODULE: ./frontend/utilities/activityHelpers.tsx
var activityHelpers = __webpack_require__(1940);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/Textarea/index.ts + 1 modules
var Textarea = __webpack_require__(10146);
;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/ActivityAutomationDetailsModal/ActivityAutomationDetailsModal.tsx





const baseClass = "activity-automation-details-modal";
const ActivityAutomationDetailsModal = ({
  details,
  onCancel
}) => {
  const renderContent = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__modal-content` }, /* @__PURE__ */ react.createElement(
      Textarea/* default */.A,
      {
        label: "Fleet will send a JSON payload to this URL whenever a new activity\r\n            is generated:",
        className: `${baseClass}__webhook-url`,
        variant: "code"
      },
      details.webhook_url
    )), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close")));
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Details",
      onExit: onCancel,
      onEnter: onCancel,
      className: baseClass
    },
    renderContent()
  );
};
/* harmony default export */ var ActivityAutomationDetailsModal_ActivityAutomationDetailsModal = (ActivityAutomationDetailsModal);

;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/ActivityAutomationDetailsModal/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/SearchField/index.ts + 1 modules
var SearchField = __webpack_require__(90710);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-select-5/dist/index-a7690a33.esm.js + 2 modules
var index_a7690a33_esm = __webpack_require__(92308);
// EXTERNAL MODULE: ./node_modules/react-select-5/dist/react-select.esm.js + 7 modules
var react_select_esm = __webpack_require__(81607);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/DropdownWrapper.tsx
var DropdownWrapper_DropdownWrapper = __webpack_require__(78131);
// EXTERNAL MODULE: ./frontend/components/forms/FormField/index.ts + 1 modules
var FormField = __webpack_require__(25663);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/styles/var/colors.ts
var colors = __webpack_require__(42008);
// EXTERNAL MODULE: ./frontend/styles/var/helpers.ts
var var_helpers = __webpack_require__(60723);
;// ./frontend/styles/var/fonts.ts


const FONT_SIZES = {
  "xxx-small": (0,var_helpers/* default */.A)(10),
  "xx-small": (0,var_helpers/* default */.A)(12),
  "x-small": (0,var_helpers/* default */.A)(13),
  small: (0,var_helpers/* default */.A)(16),
  medium: (0,var_helpers/* default */.A)(20),
  large: (0,var_helpers/* default */.A)(24)
};
const FONT_WEIGHTS = {
  regular: 400,
  bold: 600
};

// EXTERNAL MODULE: ./frontend/styles/var/padding.ts
var padding = __webpack_require__(2095);
;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/ActivityTypeDropdown/ActivityTypeDropdown.tsx

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










const ActivityTypeDropdown_baseClass = "activity-type-dropdown";
const CustomMenuList = (props) => {
  const { selectProps } = props;
  const {
    searchQuery,
    onChangeSearchQuery,
    onClickSearchInput,
    onBlurSearchInput
  } = selectProps;
  const inputRef = (0,react.useRef)(null);
  const handleInputClick = (event) => {
    var _a;
    onClickSearchInput && onClickSearchInput(event);
    (_a = inputRef.current) == null ? void 0 : _a.focus();
    event.stopPropagation();
  };
  return /* @__PURE__ */ react.createElement(index_a7690a33_esm.c.MenuList, __spreadValues({}, props), /* @__PURE__ */ react.createElement("div", { className: `${ActivityTypeDropdown_baseClass}__search-field` }, /* @__PURE__ */ react.createElement(
    "input",
    {
      className: `${ActivityTypeDropdown_baseClass}__search-input`,
      ref: inputRef,
      value: searchQuery,
      name: "label-search-input",
      type: "text",
      placeholder: "e.g. wiped host",
      onKeyDown: (event) => {
        event.stopPropagation();
      },
      onChange: onChangeSearchQuery,
      onClick: handleInputClick,
      onBlur: onBlurSearchInput
    }
  ), /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "search" })), props.children);
};
const CustomValueContainer = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ react.createElement(index_a7690a33_esm.c.ValueContainer, __spreadValues({}, props), /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "filter-alt", className: "filter-icon" }), children);
};
const TYPE_FILTER_OPTIONS = Object.values(interfaces_activity/* ActivityType */.M).map((type) => ({
  label: interfaces_activity/* ACTIVITY_TYPE_TO_FILTER_LABEL */.j[type],
  value: type
})).sort((a, b) => a.label.localeCompare(b.label));
TYPE_FILTER_OPTIONS.unshift({
  label: "All types",
  value: "all"
});
const generateOptions = (searchQuery) => {
  const query = searchQuery.toLowerCase().trim();
  if (query === "") {
    return TYPE_FILTER_OPTIONS;
  }
  return TYPE_FILTER_OPTIONS.filter((option) => {
    if (typeof option.label !== "string") {
      return false;
    }
    return option.label.toLowerCase().includes(query);
  });
};
const ActivityTypeDropdown = ({
  value,
  onSelect,
  className
}) => {
  const [searchQuery, setSearchQuery] = react.useState("");
  const [menuIsOpen, setMenuIsOpen] = react.useState(false);
  const selectRef = (0,react.useRef)(null);
  const isSearchInputFocusedRef = (0,react.useRef)(false);
  const handleChange = (option) => {
    var _a;
    if (option === null) return;
    setSearchQuery("");
    onSelect(option.value !== "all" ? option.value : "");
    (_a = selectRef.current) == null ? void 0 : _a.blur();
  };
  const onChangeSearchQuery = (event) => {
    event.stopPropagation();
    setSearchQuery(event.target.value);
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
  const onBlur = () => {
    if (!isSearchInputFocusedRef.current) {
      isSearchInputFocusedRef.current = false;
      setMenuIsOpen(false);
    }
  };
  const onClickSearchInput = () => {
    isSearchInputFocusedRef.current = true;
  };
  const onBlurSearchInput = () => {
    isSearchInputFocusedRef.current = false;
  };
  const toggleMenu = () => {
    var _a;
    menuIsOpen && ((_a = selectRef.current) == null ? void 0 : _a.blur());
    setMenuIsOpen(!menuIsOpen);
  };
  const getValue = () => {
    return TYPE_FILTER_OPTIONS.find((option) => option.value === value) || TYPE_FILTER_OPTIONS[0];
  };
  const customStyles = __spreadProps(__spreadValues({}, (0,DropdownWrapper_DropdownWrapper/* generateCustomDropdownStyles */.Qe)()), {
    menu: (provided) => __spreadProps(__spreadValues({}, provided), {
      backgroundColor: colors/* COLORS */.l["core-fleet-white"],
      boxShadow: `0 0 0 1px ${colors/* COLORS */.l["ui-fleet-black-10"]}`,
      borderRadius: "4px",
      zIndex: 6,
      overflow: "hidden",
      border: 0,
      marginTop: "3px",
      left: 0,
      maxHeight: "none",
      position: "absolute",
      animation: "fade-in 150ms ease-out",
      width: 370
    }),
    menuList: (provided) => __spreadProps(__spreadValues({}, provided), {
      maxHeight: 360,
      // we want to remove the padding from the top and handle that with the search field.
      // This ensures the scrolled options dont show above a gap above the search field.
      paddingBottom: padding/* PADDING */.K["pad-small"],
      paddingLeft: padding/* PADDING */.K["pad-small"],
      paddingRight: padding/* PADDING */.K["pad-small"],
      paddingTop: 0
    }),
    noOptionsMessage: (provided) => __spreadProps(__spreadValues({}, provided), {
      padding: padding/* PADDING */.K["pad-small"],
      fontSize: FONT_SIZES["x-small"],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 276,
      color: colors/* COLORS */.l["ui-fleet-black-75"]
    }),
    valueContainer: (provided) => __spreadProps(__spreadValues({}, provided), {
      padding: 0,
      display: "flex",
      gap: padding/* PADDING */.K["pad-small"],
      // we need the no wrap to keep the value and icon on the same line. The value
      // will be truncated with ellipsis if too long.
      flexWrap: "nowrap"
    })
  });
  const classNames = classnames_default()(ActivityTypeDropdown_baseClass, className);
  const options = (0,react.useMemo)(() => generateOptions(searchQuery), [searchQuery]);
  return /* @__PURE__ */ react.createElement(
    FormField/* default */.A,
    {
      className: classNames,
      type: "dropdown",
      name: "activity-type-dropdown",
      label: ""
    },
    /* @__PURE__ */ react.createElement("div", { onClick: toggleMenu }, /* @__PURE__ */ react.createElement(
      react_select_esm/* default */.Ay,
      {
        ref: selectRef,
        classNamePrefix: "activity-type-select",
        styles: customStyles,
        menuIsOpen,
        options,
        components: {
          MenuList: CustomMenuList,
          DropdownIndicator: DropdownWrapper_DropdownWrapper/* CustomDropdownIndicator */.KW,
          IndicatorSeparator: () => null,
          ValueContainer: CustomValueContainer
        },
        isSearchable: false,
        value: getValue(),
        onChange: handleChange,
        searchQuery,
        noOptionsMessage: () => "No items match this search criteria.",
        onKeyDown,
        onBlur,
        onChangeSearchQuery,
        onClickSearchInput,
        onBlurSearchInput
      }
    ))
  );
};
/* harmony default export */ var ActivityTypeDropdown_ActivityTypeDropdown = (ActivityTypeDropdown);

;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/ActivityTypeDropdown/index.ts



;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/ActivityFeedFilters/ActivityFeedFilters.tsx






const ActivityFeedFilters_baseClass = "activity-feed-filters";
const DATE_FILTER_OPTIONS = [
  { label: "All time", value: "all" },
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 3 months", value: "3m" },
  { label: "Last 12 months", value: "12m" }
];
const ActivityFeedFilters_TYPE_FILTER_OPTIONS = Object.values(
  interfaces_activity/* ActivityType */.M
).map((type) => ({
  label: interfaces_activity/* ACTIVITY_TYPE_TO_FILTER_LABEL */.j[type],
  value: type
})).sort((a, b) => a.label.localeCompare(b.label));
ActivityFeedFilters_TYPE_FILTER_OPTIONS.unshift({
  label: "All types",
  value: ""
});
const SORT_OPTIONS = [
  { label: "Sort by newest", value: "desc" },
  { label: "Sort by oldest", value: "asc" }
];
const ActivityFeedFilters = ({
  searchQuery,
  setSearchQuery,
  typeFilter,
  setTypeFilter,
  dateFilter,
  setDateFilter,
  createdAtDirection,
  setCreatedAtDirection,
  setPageIndex
}) => {
  const onChangeActivityType = (value) => {
    setTypeFilter(() => [value]);
    setPageIndex(0);
  };
  return /* @__PURE__ */ react.createElement("div", { className: ActivityFeedFilters_baseClass }, /* @__PURE__ */ react.createElement(
    SearchField/* default */.A,
    {
      placeholder: "Search activities by user's name or email",
      defaultValue: searchQuery,
      onChange: (value) => {
        setSearchQuery(value);
        setPageIndex(0);
      },
      icon: "search"
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `${ActivityFeedFilters_baseClass}__dropdown-filters` }, /* @__PURE__ */ react.createElement(
    ActivityTypeDropdown_ActivityTypeDropdown,
    {
      className: `${ActivityFeedFilters_baseClass}__type-filter-dropdown`,
      value: typeFilter[0] || "all",
      onSelect: onChangeActivityType
    }
  ), /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      className: `${ActivityFeedFilters_baseClass}__date-filter-dropdown`,
      iconName: "calendar",
      name: "date-filter",
      options: DATE_FILTER_OPTIONS,
      value: dateFilter,
      onChange: (value) => {
        if (value === null) return;
        setDateFilter(value.value);
        setPageIndex(0);
      }
    }
  ), /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      className: `${ActivityFeedFilters_baseClass}__sort-created-at-dropdown`,
      name: "created-at-filter",
      iconName: "filter",
      options: SORT_OPTIONS,
      value: createdAtDirection,
      onChange: (value) => {
        if (value === null) return;
        if (value.value === createdAtDirection) {
          return;
        }
        setCreatedAtDirection(value.value);
        setPageIndex(0);
      }
    }
  )));
};
/* harmony default export */ var ActivityFeedFilters_ActivityFeedFilters = (ActivityFeedFilters);

;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/ActivityFeedFilters/index.ts



// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var interfaces_platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/LibrarySoftwareDetailsModal/LibrarySoftwareDetailsModal.tsx







const LibrarySoftwareDetailsModal_baseClass = "library-software-details-modal";
const TargetTitle = ({
  labelIncludeAny,
  labelExcludeAny
}) => {
  let suffix = "";
  if (labelIncludeAny) {
    suffix = " (include any)";
  } else if (labelExcludeAny) {
    suffix = " (exclude any)";
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "Target", suffix);
};
const TargetValue = ({
  labelIncludeAny,
  labelExcludeAny
}) => {
  if (!labelIncludeAny && !labelExcludeAny) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "All hosts");
  }
  let labels = [];
  if (labelIncludeAny) {
    labels = labelIncludeAny;
  } else if (labelExcludeAny) {
    labels = labelExcludeAny;
  }
  if (labels.length === 1) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, labels[0].name);
  }
  return /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: labels.map((label) => /* @__PURE__ */ react.createElement(react.Fragment, null, label.name, /* @__PURE__ */ react.createElement("br", null)))
    },
    labels.length,
    " labels"
  );
};
const LibrarySoftwareDetailsModal = ({
  details,
  onCancel
}) => {
  const { labels_include_any, labels_exclude_any } = details;
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Software details",
      width: "large",
      onExit: onCancel,
      onEnter: onCancel,
      className: LibrarySoftwareDetailsModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: `${LibrarySoftwareDetailsModal_baseClass}__modal-content` }, /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Name",
        value: (0,helpers/* getDisplayedSoftwareName */.Yd)(
          details.software_title,
          details.software_display_name
        )
      }
    ), /* @__PURE__ */ react.createElement(DataSet/* default */.A, { title: "Package name", value: details.software_package }), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Self service",
        value: details.self_service ? "Yes" : "No"
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: /* @__PURE__ */ react.createElement(
          TargetTitle,
          {
            labelIncludeAny: labels_include_any,
            labelExcludeAny: labels_exclude_any
          }
        ),
        value: /* @__PURE__ */ react.createElement(
          TargetValue,
          {
            labelIncludeAny: labels_include_any,
            labelExcludeAny: labels_exclude_any
          }
        )
      }
    )),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close"))
  );
};
/* harmony default export */ var LibrarySoftwareDetailsModal_LibrarySoftwareDetailsModal = (LibrarySoftwareDetailsModal);

;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/AppStoreDetailsModal/AppStoreDetailsModal.tsx








const AppStoreDetailsModal_baseClass = "app-store-details-modal";
const AppStoreDetailsModal = ({
  details,
  onCancel
}) => {
  const { labels_include_any, labels_exclude_any } = details;
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Details",
      width: "large",
      onExit: onCancel,
      onEnter: onCancel,
      className: AppStoreDetailsModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: `${AppStoreDetailsModal_baseClass}__modal-content` }, /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Name",
        value: (0,helpers/* getDisplayedSoftwareName */.Yd)(
          details.software_title,
          details.software_display_name
        )
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: (0,interfaces_platform/* isAndroid */.m0)(details.platform || "") ? "Google Play ID" : "App Store ID",
        value: details.app_store_id
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Self service",
        value: details.self_service ? "Yes" : "No"
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: /* @__PURE__ */ react.createElement(
          TargetTitle,
          {
            labelIncludeAny: labels_include_any,
            labelExcludeAny: labels_exclude_any
          }
        ),
        value: /* @__PURE__ */ react.createElement(
          TargetValue,
          {
            labelIncludeAny: labels_include_any,
            labelExcludeAny: labels_exclude_any
          }
        )
      }
    )),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close"))
  );
};
/* harmony default export */ var AppStoreDetailsModal_AppStoreDetailsModal = (AppStoreDetailsModal);

;// ./frontend/pages/DashboardPage/cards/ActivityFeed/components/LibrarySoftwareDetailsModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/ActivityFeed/components/RunScriptDetailsModal/RunScriptDetailsModal.tsx
var RunScriptDetailsModal = __webpack_require__(35156);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/NotifyBeforePatchingDetailsModal/helpers.tsx
var NotifyBeforePatchingDetailsModal_helpers = __webpack_require__(91321);
// EXTERNAL MODULE: ./frontend/components/ActivityItem/index.ts + 1 modules
var ActivityItem = __webpack_require__(87894);
;// ./frontend/pages/DashboardPage/cards/ActivityFeed/GlobalActivityItem/GlobalActivityItem.tsx













const GlobalActivityItem_baseClass = "global-activity-item";
const ACTIVITIES_WITH_DETAILS = /* @__PURE__ */ new Set([
  interfaces_activity/* ActivityType */.M.RanCustomMdmCommand,
  interfaces_activity/* ActivityType */.M.RanScript,
  interfaces_activity/* ActivityType */.M.AddedSoftware,
  interfaces_activity/* ActivityType */.M.EditedSoftware,
  interfaces_activity/* ActivityType */.M.DeletedSoftware,
  interfaces_activity/* ActivityType */.M.AddedAppStoreApp,
  interfaces_activity/* ActivityType */.M.EditedAppStoreApp,
  interfaces_activity/* ActivityType */.M.DeletedAppStoreApp,
  interfaces_activity/* ActivityType */.M.InstalledSoftware,
  interfaces_activity/* ActivityType */.M.UninstalledSoftware,
  interfaces_activity/* ActivityType */.M.EnabledActivityAutomations,
  interfaces_activity/* ActivityType */.M.EditedActivityAutomations,
  interfaces_activity/* ActivityType */.M.LiveQuery,
  interfaces_activity/* ActivityType */.M.InstalledAppStoreApp,
  interfaces_activity/* ActivityType */.M.RanScriptBatch,
  interfaces_activity/* ActivityType */.M.CanceledScriptBatch,
  interfaces_activity/* ActivityType */.M.FailedEnrollmentProfileRenewal,
  interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching,
  interfaces_activity/* ActivityType */.M.HostEnrollmentRejected
]);
const getProfilesPlatformDisplayName = (platform) => {
  switch (platform) {
    case "apple":
      return "macOS, iOS, and iPadOS";
    case "android":
      return "Android";
    case "windows":
      return "Windows";
    default:
      return platform;
  }
};
const getProfileMessageSuffix = (isPremiumTier, platform, teamName) => {
  const platformDisplayName = getProfilesPlatformDisplayName(platform);
  let messageSuffix = /* @__PURE__ */ react.createElement(react.Fragment, null, "all ", platformDisplayName, " hosts");
  if (isPremiumTier) {
    messageSuffix = teamName ? /* @__PURE__ */ react.createElement(react.Fragment, null, platformDisplayName, " hosts assigned to the ", /* @__PURE__ */ react.createElement("b", null, teamName), " fleet") : /* @__PURE__ */ react.createElement(react.Fragment, null, "unassigned ", platformDisplayName, " hosts");
  }
  return messageSuffix;
};
const getHostTeamAssignmentSuffix = (teamName) => {
  return teamName ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "assigned to the ", /* @__PURE__ */ react.createElement("b", null, teamName), " fleet") : /* @__PURE__ */ react.createElement(react.Fragment, null, " that are unassigned");
};
const getEditedProfileMessage = (activity, isPremiumTier, platform) => {
  var _a, _b;
  const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
  const suffix = getProfileMessageSuffix(
    isPremiumTier,
    platform,
    (_b = activity.details) == null ? void 0 : _b.team_name
  );
  if (profileName) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited the configuration profile ", /* @__PURE__ */ react.createElement("b", null, profileName), " for ", suffix, ".");
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, " edited configuration profiles for ", suffix, " via fleetctl.");
};
const getHistoricalDatasetLabel = (dataset) => {
  if (!dataset) {
    return "a dataset";
  }
  if (charts/* HISTORICAL_DATA_CONFIG_KEYS */.Eu.includes(dataset)) {
    return charts/* DATASET_LABEL */.ul[dataset];
  }
  const spaced = dataset.replace(/[_-]+/g, " ").toLowerCase().trim();
  return spaced.length === 0 ? dataset : spaced.charAt(0).toUpperCase() + spaced.slice(1);
};
const getMacOSSetupAssistantMessage = (action, name, teamName) => {
  const suffix = teamName ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "that automatically enroll to the ", /* @__PURE__ */ react.createElement("b", null, teamName), " fleet") : /* @__PURE__ */ react.createElement(react.Fragment, null, "that automatically enroll to unassigned");
  return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "changed the macOS Setup Assistant (", action, " ", /* @__PURE__ */ react.createElement("b", null, name), ") for hosts", " ", suffix, ".");
};
const isPassiveRoleActivity = (activity) => {
  var _a, _b;
  return !!((_a = activity.details) == null ? void 0 : _a.jit) || activity.actor_id === ((_b = activity.details) == null ? void 0 : _b.user_id);
};
const TAGGED_TEMPLATES = {
  liveQueryActivityTemplate: (activity) => {
    const { targets_count: count, query_name: queryName, stats } = activity.details || {};
    const impactDescription = stats ? (0,utilities_helpers/* getPerformanceImpactDescription */.Hv)(stats) : void 0;
    const queryNameCopy = queryName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, queryName), " report") : /* @__PURE__ */ react.createElement(react.Fragment, null, "a live report");
    const impactCopy = impactDescription && impactDescription !== "Undetermined" ? /* @__PURE__ */ react.createElement(react.Fragment, null, "with ", impactDescription.toLowerCase(), " performance impact") : /* @__PURE__ */ react.createElement(react.Fragment, null);
    const hostCountCopy = count !== void 0 ? ` on ${count} ${count === 1 ? "host" : "hosts"}` : "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", { className: `${GlobalActivityItem_baseClass}__details-content` }, "ran ", queryNameCopy, " ", impactCopy, " ", hostCountCopy, "."));
  },
  editPackCtlActivityTemplate: () => {
    return "edited a pack using fleetctl.";
  },
  editPolicyCtlActivityTemplate: () => {
    return "edited policies using fleetctl.";
  },
  editQueryCtlActivityTemplate: (activity) => {
    var _a, _b;
    const count = (_b = (_a = activity.details) == null ? void 0 : _a.specs) == null ? void 0 : _b.length;
    return typeof count === "undefined" || count === 1 ? "edited a report using fleetctl." : "edited reports using fleetctl.";
  },
  editSoftwareCtlActivityTemplate: () => {
    return "edited software using fleetctl.";
  },
  editTeamCtlActivityTemplate: (activity) => {
    var _a, _b, _c, _d;
    const count = (_b = (_a = activity.details) == null ? void 0 : _a.teams) == null ? void 0 : _b.length;
    return count === 1 && ((_c = activity.details) == null ? void 0 : _c.teams) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "edited the ", /* @__PURE__ */ react.createElement("b", null, (_d = activity.details) == null ? void 0 : _d.teams[0].name), " fleet using fleetctl.") : `edited multiple fleets using fleetctl.`;
  },
  editAgentOptions: (activity) => {
    var _a, _b;
    return ((_a = activity.details) == null ? void 0 : _a.global) ? "edited agent options." : /* @__PURE__ */ react.createElement(react.Fragment, null, "edited agent options on ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.team_name), " fleet.");
  },
  userAddedBySSOTempalte: () => {
    return "was added to Mesh by SSO.";
  },
  userLoggedIn: (activity) => {
    var _a, _b;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "successfully logged in", ((_a = activity.details) == null ? void 0 : _a.public_ip) && ` from public IP ${(_b = activity.details) == null ? void 0 : _b.public_ip}`, ".");
  },
  userFailedLogin: (activity) => {
    const { email, public_ip } = activity.details || {};
    const actor = email ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Somebody using ", /* @__PURE__ */ react.createElement("b", null, email)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "Somebody");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, actor, " failed to log in from public IP ", public_ip, ".");
  },
  userMFARequested: (activity) => {
    const { email, public_ip } = activity.details || {};
    const actor = email ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Somebody using ", /* @__PURE__ */ react.createElement("b", null, email)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "Somebody");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, actor, " submitted valid credentials for an MFA-enabled account and was sent a verification email from public IP ", public_ip, ".");
  },
  userCreated: (activity) => {
    var _a, _b;
    return activity.actor_id === ((_a = activity.details) == null ? void 0 : _a.user_id) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "activated their account.") : /* @__PURE__ */ react.createElement(react.Fragment, null, "created a user ", /* @__PURE__ */ react.createElement("b", null, " ", (_b = activity.details) == null ? void 0 : _b.user_email), ".");
  },
  userDeleted: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "deleted a user ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.user_email), ".");
  },
  deletedHost: (activity) => {
    const { host_display_name, triggered_by, host_expiry_window } = activity.details || {};
    if (triggered_by === "expiration") {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "automatically deleted host ", /* @__PURE__ */ react.createElement("b", null, host_display_name), " after", " ", /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The host expiry window configured in", " ", /* @__PURE__ */ react.createElement("strong", null, "Settings > Organization settings > Advanced options"))
        },
        host_expiry_window,
        " day",
        host_expiry_window !== 1 ? "s" : ""
      ), " ", "of inactivity.");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "deleted host ", /* @__PURE__ */ react.createElement("b", null, host_display_name), ".");
  },
  userChangedGlobalRole: (activity, isPremiumTier) => {
    const { user_email, role, jit } = activity.details || {};
    if (isPassiveRoleActivity(activity)) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "was assigned the ", /* @__PURE__ */ react.createElement("b", null, role), " role", isPremiumTier && " for all fleets", jit && " via just-in-time (JIT) provisioning", ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "changed ", /* @__PURE__ */ react.createElement("b", null, user_email), " to ", /* @__PURE__ */ react.createElement("b", null, role), isPremiumTier && " for all fleets", ".");
  },
  userDeletedGlobalRole: (activity, isPremiumTier) => {
    const { user_email, role, jit } = activity.details || {};
    if (isPassiveRoleActivity(activity)) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "was removed as ", /* @__PURE__ */ react.createElement("b", null, role), isPremiumTier && " for all fleets", jit && " via just-in-time (JIT) provisioning", ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "removed ", /* @__PURE__ */ react.createElement("b", null, user_email), " as ", /* @__PURE__ */ react.createElement("b", null, role), isPremiumTier && " for all fleets", ".");
  },
  userChangedTeamRole: (activity) => {
    const { user_email, role, team_name, jit } = activity.details || {};
    if (isPassiveRoleActivity(activity)) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "was assigned the ", /* @__PURE__ */ react.createElement("b", null, role), " role for the ", /* @__PURE__ */ react.createElement("b", null, team_name), " fleet", jit && " via just-in-time (JIT) provisioning", ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "changed ", /* @__PURE__ */ react.createElement("b", null, user_email), " to ", /* @__PURE__ */ react.createElement("b", null, role), " for the ", /* @__PURE__ */ react.createElement("b", null, team_name), " ", "fleet.");
  },
  userDeletedTeamRole: (activity) => {
    const { user_email, team_name, jit } = activity.details || {};
    if (isPassiveRoleActivity(activity)) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, "was removed from the ", /* @__PURE__ */ react.createElement("b", null, team_name), " fleet", jit && " via just-in-time (JIT) provisioning", ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "removed ", /* @__PURE__ */ react.createElement("b", null, user_email), " from the ", /* @__PURE__ */ react.createElement("b", null, team_name), " fleet.");
  },
  hostEnrollmentRejected: (activity) => {
    const { host_display_name, host_serial } = activity.details || {};
    let host = "a host";
    if (host_display_name) {
      host = /* @__PURE__ */ react.createElement("b", null, host_display_name);
    } else if (host_serial) {
      host = /* @__PURE__ */ react.createElement(react.Fragment, null, "a host with serial number ", /* @__PURE__ */ react.createElement("b", null, host_serial));
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "rejected an enrollment for ", host, ".");
  },
  fleetEnrolled: (activity) => {
    const { host_display_name, host_serial } = activity.details || {};
    if (!host_display_name) {
      return host_serial ? /* @__PURE__ */ react.createElement(react.Fragment, null, "A host with serial number ", /* @__PURE__ */ react.createElement("b", null, host_serial), " enrolled in Fleet.") : /* @__PURE__ */ react.createElement(react.Fragment, null, "A host enrolled in Fleet.");
    }
    const showSerial = !!host_serial && !host_display_name.endsWith(`(${host_serial})`);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, host_display_name, showSerial ? ` (${host_serial})` : ""), " ", "enrolled in Fleet.");
  },
  mdmEnrolled: (activity) => {
    var _a;
    const { mdm_platform, platform = "", host_display_name, host_serial } = activity.details || {};
    const enrollmentTypeText = ((_a = activity.details) == null ? void 0 : _a.installed_from_dep) ? "automatic" : "manual";
    const showSerial = !!host_display_name && !!host_serial && !host_display_name.endsWith(`(${host_serial})`);
    const serialSuffix = showSerial ? ` (${host_serial})` : "";
    if (mdm_platform === "microsoft") {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, activity.actor_full_name, " "), "Mobile device management (MDM) was turned on for", " ", /* @__PURE__ */ react.createElement("b", null, host_display_name || host_serial || "a host", serialSuffix, " (", enrollmentTypeText, ")"), ".");
    }
    if ((0,interfaces_platform/* isAndroid */.m0)(platform) || (0,interfaces_platform/* isIPadOrIPhone */.l)(platform)) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, host_display_name), " enrolled to Fleet.");
    }
    const hostDisplayText = host_display_name || host_serial;
    const hostDisplayPrefixText = host_display_name ? "" : "a host with serial number ";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, activity.actor_full_name, " "), "An end user turned on MDM features for", " ", hostDisplayPrefixText, /* @__PURE__ */ react.createElement("b", null, hostDisplayText, serialSuffix, " (", enrollmentTypeText, ")"), ".");
  },
  mdmUnenrolled: (activity) => {
    const { actor_full_name } = activity;
    const { platform = "", host_display_name } = activity.details || {};
    if ((0,interfaces_platform/* isAndroid */.m0)(platform) || (0,interfaces_platform/* isIPadOrIPhone */.l)(platform)) {
      return actor_full_name ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, actor_full_name), " told Mesh to unenroll", " ", /* @__PURE__ */ react.createElement("b", null, host_display_name, ".")) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, host_display_name), " is unenrolled from Fleet.");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, actor_full_name ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, actor_full_name), " told Mesh to turn off mobile device management (MDM) for") : "Mobile device management (MDM) was turned off for", " ", /* @__PURE__ */ react.createElement("b", null, host_display_name), ".");
  },
  editedAppleosMinVersion: (applePlatform, activity) => {
    var _a, _b, _c, _d, _e;
    const editedActivity = ((_a = activity.details) == null ? void 0 : _a.minimum_version) === "" ? "removed" : "updated";
    const versionSection = ((_b = activity.details) == null ? void 0 : _b.minimum_version) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "to ", /* @__PURE__ */ react.createElement("b", null, activity.details.minimum_version)) : null;
    const deadlineSection = ((_c = activity.details) == null ? void 0 : _c.deadline) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "(deadline: ", activity.details.deadline, ")") : null;
    const teamSection = ((_d = activity.details) == null ? void 0 : _d.team_id) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : /* @__PURE__ */ react.createElement(react.Fragment, null, "unassigned");
    if (((_e = activity.details) == null ? void 0 : _e.minimum_version) === "latest") {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, editedActivity, " ", applePlatform, " version to ", /* @__PURE__ */ react.createElement("b", null, "latest"), " on hosts assigned to ", teamSection, ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, editedActivity, " the minimum ", applePlatform, " version ", versionSection, " ", deadlineSection, " on hosts assigned to ", teamSection, ".");
  },
  enabledAppleosUpdateNewHosts: (applePlatform, activity) => {
    var _a;
    const teamSection = ((_a = activity.details) == null ? void 0 : _a.team_id) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : /* @__PURE__ */ react.createElement(react.Fragment, null, "unassigned");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "enabled OS updates for all new ", applePlatform, " hosts on ", teamSection, ".", " ", applePlatform, " hosts will upgrade to the latest version when they enroll.");
  },
  disabledAppleosUpdateNewHosts: (applePlatform, activity) => {
    var _a;
    const teamSection = ((_a = activity.details) == null ? void 0 : _a.team_id) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : /* @__PURE__ */ react.createElement(react.Fragment, null, "unassigned");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "disabled updates for all new ", applePlatform, " hosts on ", teamSection, ".");
  },
  readHostDiskEncryptionKey: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "viewed the disk encryption key for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  retrievedHostMyDeviceURL: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "retrieved the My device URL for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  viewedHostRecoveryLockPassword: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "viewed the Recovery Lock password for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  setHostRecoveryLockPassword: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "set a Recovery Lock password for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  rotatedHostRecoveryLockPassword: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "triggered rotation of the Recovery Lock password for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  enabledManagedLocalAccount: (activity) => {
    var _a, _b, _c;
    const platformDisplay = interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc[(_b = (_a = activity.details) == null ? void 0 : _a.platform) != null ? _b : "darwin"];
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "enabled managed local accounts for", " ", ((_c = activity.details) == null ? void 0 : _c.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, platformDisplay, " hosts assigned to the", " ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet.") : `unassigned ${platformDisplay} hosts.`);
  },
  disabledManagedLocalAccount: (activity) => {
    var _a, _b, _c;
    const platformDisplay = interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc[(_b = (_a = activity.details) == null ? void 0 : _a.platform) != null ? _b : "darwin"];
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "disabled managed local accounts for", " ", ((_c = activity.details) == null ? void 0 : _c.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, platformDisplay, " hosts assigned to the", " ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet.") : `unassigned ${platformDisplay} hosts.`);
  },
  viewedManagedLocalAccount: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "viewed the managed local account on", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  createdManagedLocalAccount: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "created a managed local account for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  rotatedManagedLocalAccountPassword: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "triggered rotation of the managed local account password for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  failedToRotateManagedLocalAccountPassword: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "failed to rotate the managed local account password for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  createdAppleOSProfile: (activity, isPremiumTier) => {
    var _a, _b;
    const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added", " ", profileName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "configuration profile ", /* @__PURE__ */ react.createElement("b", null, profileName)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "a configuration profile"), " ", "to", " ", getProfileMessageSuffix(
      isPremiumTier,
      "apple",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  deletedAppleOSProfile: (activity, isPremiumTier) => {
    var _a, _b;
    const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted", " ", profileName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "configuration profile ", /* @__PURE__ */ react.createElement("b", null, profileName)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "a configuration profile"), " ", "from", " ", getProfileMessageSuffix(
      isPremiumTier,
      "apple",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  editedAppleOSProfile: (activity, isPremiumTier) => {
    return getEditedProfileMessage(activity, isPremiumTier, "apple");
  },
  createdAndroidProfile: (activity, isPremiumTier) => {
    var _a, _b;
    const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added", " ", profileName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "configuration profile ", /* @__PURE__ */ react.createElement("b", null, profileName)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "a configuration profile"), " ", "to", " ", getProfileMessageSuffix(
      isPremiumTier,
      "android",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  deletedAndroidProfile: (activity, isPremiumTier) => {
    var _a, _b;
    const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted", " ", profileName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "configuration profile ", /* @__PURE__ */ react.createElement("b", null, profileName)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "a configuration profile"), " ", "from", " ", getProfileMessageSuffix(
      isPremiumTier,
      "android",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  editedAndroidProfile: (activity, isPremiumTier) => {
    return getEditedProfileMessage(activity, isPremiumTier, "android");
  },
  editedAndroidCertificate: (activity, isPremiumTier) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited certificate templates for", " ", getProfileMessageSuffix(
      isPremiumTier,
      "android",
      (_a = activity.details) == null ? void 0 : _a.team_name
    ), " ", "via fleetctl.");
  },
  resentCertificate: (activity) => {
    var _a, _b;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "resent ", (_a = activity.details) == null ? void 0 : _a.certificate_name, " certificate for host", " ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.host_display_name), ".");
  },
  addedCertificateAuthority: (name = "") => {
    return name ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added a certificate authority (", /* @__PURE__ */ react.createElement("b", null, name), ").") : /* @__PURE__ */ react.createElement(react.Fragment, null, " added a certificate authority.");
  },
  deletedCertificateAuthority: (name = "") => {
    return name ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted a certificate authority (", /* @__PURE__ */ react.createElement("b", null, name), ").") : /* @__PURE__ */ react.createElement(react.Fragment, null, " deleted a certificate authority.");
  },
  editedCertificateAuthority: (name = "") => {
    return name ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited a certificate authority (", /* @__PURE__ */ react.createElement("b", null, name), ").") : /* @__PURE__ */ react.createElement(react.Fragment, null, " edited a certificate authority.");
  },
  createdWindowsProfile: (activity, isPremiumTier) => {
    var _a, _b;
    const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added", " ", profileName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "configuration profile ", /* @__PURE__ */ react.createElement("b", null, profileName)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "a configuration profile"), " ", "to", " ", getProfileMessageSuffix(
      isPremiumTier,
      "windows",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  deletedWindowsProfile: (activity, isPremiumTier) => {
    var _a, _b;
    const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted", " ", profileName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "configuration profile ", /* @__PURE__ */ react.createElement("b", null, profileName)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "a configuration profile"), " ", "from", " ", getProfileMessageSuffix(
      isPremiumTier,
      "windows",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  editedWindowsProfile: (activity, isPremiumTier) => {
    return getEditedProfileMessage(activity, isPremiumTier, "windows");
  },
  enabledDiskEncryption: (activity) => {
    var _a;
    const suffix = getHostTeamAssignmentSuffix((_a = activity.details) == null ? void 0 : _a.team_name);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " enforced disk encryption for hosts ", suffix, ".");
  },
  disabledEncryption: (activity) => {
    var _a;
    const suffix = getHostTeamAssignmentSuffix((_a = activity.details) == null ? void 0 : _a.team_name);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "removed disk encryption enforcement for hosts ", suffix, ".");
  },
  editedDiskEncryptionSettings: (activity) => {
    var _a, _b, _c;
    const platform = (_a = activity.details) == null ? void 0 : _a.platform;
    const displayNames = {
      macos: "macOS",
      windows: "Windows",
      linux: "Linux"
    };
    const platformDisplay = platform ? (_b = displayNames[platform]) != null ? _b : platform : "unknown";
    const suffix = getHostTeamAssignmentSuffix((_c = activity.details) == null ? void 0 : _c.fleet_name);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "edited disk encryption settings for ", platformDisplay, " hosts", suffix, ".");
  },
  enabledRecoveryLockPasswords: (activity) => {
    var _a;
    const suffix = getHostTeamAssignmentSuffix((_a = activity.details) == null ? void 0 : _a.team_name);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "enforced Recovery Lock passwords for hosts ", suffix, ".");
  },
  disabledRecoveryLockPasswords: (activity) => {
    var _a;
    const suffix = getHostTeamAssignmentSuffix((_a = activity.details) == null ? void 0 : _a.team_name);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "removed Recovery Lock password enforcement for hosts ", suffix, ".");
  },
  changedMacOSSetupAssistant: (activity) => {
    var _a, _b;
    return getMacOSSetupAssistantMessage(
      "added",
      (_a = activity.details) == null ? void 0 : _a.name,
      (_b = activity.details) == null ? void 0 : _b.team_name
    );
  },
  deletedMacOSSetupAssistant: (activity) => {
    var _a, _b;
    return getMacOSSetupAssistantMessage(
      "deleted",
      (_a = activity.details) == null ? void 0 : _a.name,
      (_b = activity.details) == null ? void 0 : _b.team_name
    );
  },
  defaultActivityTemplate: (activity) => {
    const entityName = (0,lodash.find)(
      activity.details,
      (_, key) => key.includes("_name")
    );
    const activityType = (0,lodash.lowerCase)(activity.type).replace(" saved", "").replace("team", "fleet");
    return !entityName || typeof entityName !== "string" ? `${activityType}.` : /* @__PURE__ */ react.createElement(react.Fragment, null, activityType, " ", /* @__PURE__ */ react.createElement("b", null, entityName), ".");
  },
  addedMDMBootstrapPackage: (activity) => {
    var _a, _b;
    const packageName = (_a = activity.details) == null ? void 0 : _a.bootstrap_package_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added a bootstrap package", " ", packageName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "(", /* @__PURE__ */ react.createElement("b", null, packageName), ")", " ") : "", "for macOS hosts that automatically enroll to", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, ".");
  },
  deletedMDMBootstrapPackage: (activity) => {
    var _a, _b;
    const packageName = (_a = activity.details) == null ? void 0 : _a.bootstrap_package_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted a bootstrap package", " ", packageName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "(", /* @__PURE__ */ react.createElement("b", null, packageName), ")", " ") : "", "for macOS hosts that automatically enroll to", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, ".");
  },
  enabledMacOSSetupEndUserAuth: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "required end user authentication for hosts that automatically enroll to", " ", ((_a = activity.details) == null ? void 0 : _a.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, ".");
  },
  enabledHistoricalDataset: (activity) => {
    var _a, _b;
    const datasetLabel = getHistoricalDatasetLabel((_a = activity.details) == null ? void 0 : _a.dataset);
    const fleetName = (_b = activity.details) == null ? void 0 : _b.fleet_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "enabled data collection for ", /* @__PURE__ */ react.createElement("b", null, datasetLabel), fleetName ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for the ", /* @__PURE__ */ react.createElement("b", null, fleetName), " fleet") : null, ".");
  },
  disabledHistoricalDataset: (activity) => {
    var _a, _b;
    const datasetLabel = getHistoricalDatasetLabel((_a = activity.details) == null ? void 0 : _a.dataset);
    const fleetName = (_b = activity.details) == null ? void 0 : _b.fleet_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "disabled data collection for ", /* @__PURE__ */ react.createElement("b", null, datasetLabel), fleetName ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for the ", /* @__PURE__ */ react.createElement("b", null, fleetName), " fleet") : null, ".");
  },
  disabledMacOSSetupEndUserAuth: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "removed end user authentication requirement for hosts that automatically enroll to", " ", ((_a = activity.details) == null ? void 0 : _a.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, ".");
  },
  transferredHosts: (activity) => {
    var _a, _b;
    const hostNames = ((_a = activity.details) == null ? void 0 : _a.host_display_names) || [];
    const teamName = (_b = activity.details) == null ? void 0 : _b.team_name;
    if (hostNames.length === 1) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "transferred host ", /* @__PURE__ */ react.createElement("b", null, hostNames[0]), " to ", teamName ? `fleet ` : "", /* @__PURE__ */ react.createElement("b", null, teamName || `unassigned`), ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "transferred ", hostNames.length, " hosts to ", teamName ? `fleet ` : "", /* @__PURE__ */ react.createElement("b", null, teamName || `unassigned`), ".");
  },
  enabledWindowsMdm: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "told Mesh to turn on MDM features for all Windows hosts (servers excluded).");
  },
  disabledWindowsMdm: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " told Mesh to turn off Windows MDM features.");
  },
  enabledGitOpsMode: () => "enabled GitOps mode in the UI.",
  disabledGitOpsMode: () => "disabled GitOps mode in the UI.",
  ssoFleetDesktop: (state) => `${state} single sign-on (SSO) for Mesh Desktop.`,
  enabledGitOpsException: (activity) => {
    var _a, _b;
    const exception = (_b = (_a = activity.details) == null ? void 0 : _a.exception) != null ? _b : "";
    return `enabled the ${exception} exception for GitOps.`;
  },
  disabledGitOpsException: (activity) => {
    var _a, _b;
    const exception = (_b = (_a = activity.details) == null ? void 0 : _a.exception) != null ? _b : "";
    return `disabled the ${exception} exception for GitOps.`;
  },
  editedWindowsEnrollmentDefaultFleet: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited the default fleet for Windows hosts to", " ", /* @__PURE__ */ react.createElement("b", null, ((_a = activity.details) == null ? void 0 : _a.fleet_name) || "Unassigned"), ".");
  },
  enabledWindowsMdmMigration: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "told Mesh to automatically migrate Windows hosts connected to another MDM solution.");
  },
  disabledWindowsMdmMigration: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "told Mesh to stop migrating Windows hosts connected to another MDM solution.");
  },
  ranCustomMdmCommand: (activity) => {
    const { request_type, host_display_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "ran ", (0,activityHelpers/* formatMdmCommandNameForActivityItem */.T7)(request_type), " on", " ", /* @__PURE__ */ react.createElement("b", null, host_display_name), ".");
  },
  ranScript: (activity) => {
    const { script_name, host_display_name, from_setup_experience } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "ran ", (0,utilities_helpers/* formatScriptNameForActivityItem */.tx)(script_name), " on", " ", /* @__PURE__ */ react.createElement("b", null, host_display_name), from_setup_experience ? " during setup experience" : "", ".");
  },
  ranScriptBatch: (activity) => {
    const { script_name, host_count } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "ran ", (0,utilities_helpers/* formatScriptNameForActivityItem */.tx)(script_name), " on ", host_count, " host", host_count !== 1 ? "s" : "", ".");
  },
  scheduledScriptBatch: (activity) => {
    const { script_name, host_count } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "scheduled ", (0,utilities_helpers/* formatScriptNameForActivityItem */.tx)(script_name), " to run on", " ", host_count, " host", host_count !== 1 ? "s" : "", ".");
  },
  canceledScriptBatch: (activity) => {
    const { script_name, host_count, canceled_count } = activity.details || {};
    const numHostsMsg = host_count === canceled_count ? /* @__PURE__ */ react.createElement(react.Fragment, null, host_count, " host", host_count !== 1 ? "s" : "") : /* @__PURE__ */ react.createElement(react.Fragment, null, canceled_count, " of ", host_count, " host", host_count !== 1 ? "s" : "");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "canceled ", (0,utilities_helpers/* formatScriptNameForActivityItem */.tx)(script_name), " on ", numHostsMsg, ".");
  },
  addedScript: (activity) => {
    var _a, _b;
    const scriptName = (_a = activity.details) == null ? void 0 : _a.script_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added", " ", scriptName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "script ", /* @__PURE__ */ react.createElement("b", null, scriptName), " ") : "a script ", "to", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, ".");
  },
  updatedScript: (activity) => {
    var _a, _b;
    const scriptName = (_a = activity.details) == null ? void 0 : _a.script_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited", " ", scriptName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "script ", /* @__PURE__ */ react.createElement("b", null, scriptName), " ") : "a script ", "for", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, ".");
  },
  deletedScript: (activity) => {
    var _a, _b;
    const scriptName = (_a = activity.details) == null ? void 0 : _a.script_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted", " ", scriptName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "script ", /* @__PURE__ */ react.createElement("b", null, scriptName), " ") : "a script ", "from", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, ".");
  },
  editedScript: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited scripts for", " ", ((_a = activity.details) == null ? void 0 : _a.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`, " ", "via fleetctl.");
  },
  editedWindowsUpdates: (activity) => {
    var _a, _b, _c;
    const deadlineDays = (_a = activity.details) == null ? void 0 : _a.deadline_days;
    const gracePeriodDays = (_b = activity.details) == null ? void 0 : _b.grace_period_days;
    const isCleared = deadlineDays === void 0 || deadlineDays === null;
    const teamText = ((_c = activity.details) == null ? void 0 : _c.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet") : `unassigned`;
    if (isCleared) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "removed the Windows OS update options on hosts assigned to ", teamText, ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "updated the Windows OS update options (", /* @__PURE__ */ react.createElement("b", null, "Deadline: ", deadlineDays, " days / Grace period: ", gracePeriodDays, " days"), ") on hosts assigned to ", teamText, ".");
  },
  deletedMultipleSavedQuery: (activity) => {
    var _a, _b;
    let teamText;
    if (((_a = activity.details) == null ? void 0 : _a.team_id) === -1) {
      teamText = " globally";
    } else if ((_b = activity.details) == null ? void 0 : _b.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted multiple reports", teamText, ".");
  },
  lockedHost: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "locked ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  unlockedHost: (activity) => {
    var _a, _b, _c;
    if (((_a = activity.details) == null ? void 0 : _a.host_platform) === "darwin") {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "viewed the six-digit unlock PIN for", " ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.host_display_name), ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "unlocked ", /* @__PURE__ */ react.createElement("b", null, (_c = activity.details) == null ? void 0 : _c.host_display_name), ".");
  },
  wipedHost: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "wiped ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  failedWipe: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "Wipe failed on ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  createdDeclarationProfile: (activity, isPremiumTier) => {
    var _a, _b;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added declaration (DDM) profile ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.profile_name), " ", "to", " ", getProfileMessageSuffix(
      isPremiumTier,
      "apple",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  deletedDeclarationProfile: (activity, isPremiumTier) => {
    var _a, _b;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "removed declaration (DDM) profile", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.profile_name), " from", " ", getProfileMessageSuffix(
      isPremiumTier,
      "apple",
      (_b = activity.details) == null ? void 0 : _b.team_name
    ), ".");
  },
  editedDeclarationProfile: (activity, isPremiumTier) => {
    var _a, _b;
    const profileName = (_a = activity.details) == null ? void 0 : _a.profile_name;
    const suffix = getProfileMessageSuffix(
      isPremiumTier,
      "apple",
      (_b = activity.details) == null ? void 0 : _b.team_name
    );
    if (profileName) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited the declaration (DDM) profile ", /* @__PURE__ */ react.createElement("b", null, profileName), " for ", suffix, ".");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " edited declaration (DDM) profiles for ", suffix, " via fleetctl.");
  },
  resentConfigProfile: (activity) => {
    var _a, _b;
    const actor = activity.actor_full_name ? activity.actor_full_name : "Mesh";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, actor), " resent ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.profile_name), " to", " ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.host_display_name), ".");
  },
  resentConfigProfileBatch: (activity) => {
    var _a, _b, _c, _d;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "resent the ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.profile_name), " configuration profile", " ", "to ", (_b = activity.details) == null ? void 0 : _b.host_count, " ", ((_d = (_c = activity.details) == null ? void 0 : _c.host_count) != null ? _d : 0) > 1 ? "hosts." : "host.");
  },
  addedSoftware: (activity) => {
    var _a, _b, _c;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.software_package), " to", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, (_c = activity.details) == null ? void 0 : _c.team_name), " fleet.") : `unassigned.`);
  },
  editedSoftware: (activity) => {
    var _a, _b, _c;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.software_package), " on", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, (_c = activity.details) == null ? void 0 : _c.team_name), " fleet.") : `unassigned.`);
  },
  deletedSoftware: (activity) => {
    var _a, _b, _c;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.software_package), " from", " ", ((_b = activity.details) == null ? void 0 : _b.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, (_c = activity.details) == null ? void 0 : _c.team_name), " fleet.") : `unassigned.`);
  },
  changedOrgLogo: (activity) => {
    var _a;
    const mode = (_a = activity.details) == null ? void 0 : _a.mode;
    const suffix = mode === "all" ? "for all modes" : `for ${mode || "unknown"} mode`;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " updated organization logo ", suffix, ".");
  },
  deletedOrgLogo: (activity) => {
    var _a;
    const mode = (_a = activity.details) == null ? void 0 : _a.mode;
    const suffix = mode === "all" ? "for all modes" : `for ${mode || "unknown"} mode`;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " deleted organization logo ", suffix, ".");
  },
  installedSoftware: (activity) => {
    const { details } = activity;
    if (!details) {
      return TAGGED_TEMPLATES.defaultActivityTemplate(activity);
    }
    const {
      host_display_name: hostName,
      software_title: title,
      status,
      source,
      self_service,
      from_setup_experience,
      skipped_install
    } = details;
    const showSoftwarePackage = !!details.software_package && activity.type === interfaces_activity/* ActivityType */.M.InstalledSoftware;
    const isScriptPackageSource = software/* SCRIPT_PACKAGE_SOURCES */.i0.includes(source || "");
    if (skipped_install) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "skipped install of ", /* @__PURE__ */ react.createElement("b", null, title), " on ", /* @__PURE__ */ react.createElement("b", null, hostName), ".");
    }
    if (self_service) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement("b", null, title), showSoftwarePackage && ` (${details.software_package})`, " ", (0,software/* getInstallUninstallStatusPredicatePassive */.A9)(
        status,
        isScriptPackageSource
      ), " ", "on ", /* @__PURE__ */ react.createElement("b", null, hostName), from_setup_experience ? " during setup experience" : "", " (self service).");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", (0,software/* getInstallUninstallStatusPredicate */.pr)(status, isScriptPackageSource), " ", /* @__PURE__ */ react.createElement("b", null, title), showSoftwarePackage && ` (${details.software_package})`, " on", " ", /* @__PURE__ */ react.createElement("b", null, hostName), from_setup_experience ? " during setup experience" : "", ".");
  },
  uninstalledSoftware: (activity) => {
    const { details } = activity;
    if (!details) {
      return TAGGED_TEMPLATES.defaultActivityTemplate(activity);
    }
    const {
      host_display_name: hostName,
      software_title: title,
      self_service
    } = details;
    const status = details.status === "failed" ? "failed_uninstall" : details.status;
    const showSoftwarePackage = !!details.software_package && activity.type === interfaces_activity/* ActivityType */.M.InstalledSoftware;
    if (self_service) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement("b", null, title), showSoftwarePackage && ` (${details.software_package})`, " ", (0,software/* getInstallUninstallStatusPredicatePassive */.A9)(status), " on", " ", /* @__PURE__ */ react.createElement("b", null, hostName), " (self service).");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", (0,software/* getInstallUninstallStatusPredicate */.pr)(status), " software ", /* @__PURE__ */ react.createElement("b", null, title), showSoftwarePackage && ` (${details.software_package})`, " from", " ", /* @__PURE__ */ react.createElement("b", null, hostName), ".");
  },
  installedAllSelfServiceSoftware: (activity) => {
    var _a;
    const categoryName = (_a = activity.details) == null ? void 0 : _a.self_service_category_name;
    if (categoryName) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement("b", null, "End user"), " selected the ", /* @__PURE__ */ react.createElement("b", null, "Install all"), " option in the self-service ", /* @__PURE__ */ react.createElement("b", null, categoryName), " category.");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement("b", null, "End user"), " installed all the software in self service.");
  },
  enabledVpp: (activity) => {
    var _a, _b;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "enabled ", /* @__PURE__ */ react.createElement("b", null, "Volume Purchasing Program (VPP)"), ((_a = activity.details) == null ? void 0 : _a.location) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, (0,lodash.trimEnd)((_b = activity.details) == null ? void 0 : _b.location, "."))) : "", ".");
  },
  disabledVpp: (activity) => {
    var _a, _b;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "disabled ", /* @__PURE__ */ react.createElement("b", null, "Volume Purchasing Program (VPP)"), ((_a = activity.details) == null ? void 0 : _a.location) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, (0,lodash.trimEnd)((_b = activity.details) == null ? void 0 : _b.location, "."))) : "", ".");
  },
  addedAppStoreApp: (activity) => {
    var _a, _b;
    const { software_title: swTitle, platform: swPlatform } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added ", /* @__PURE__ */ react.createElement("b", null, swTitle), " ", swPlatform ? `(${interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc[swPlatform]}) ` : "", "to", " ", ((_a = activity.details) == null ? void 0 : _a.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "the ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.team_name), " fleet.") : `unassigned.`);
  },
  editedAppStoreApp: (activity) => {
    var _a, _b;
    const { software_title: swTitle, platform: swPlatform } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited ", /* @__PURE__ */ react.createElement("b", null, swTitle), " ", swPlatform ? `(${interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc[swPlatform]}) ` : "", "on", " ", ((_a = activity.details) == null ? void 0 : _a.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "the ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.team_name), " fleet.") : `unassigned.`);
  },
  deletedAppStoreApp: (activity) => {
    var _a, _b;
    const { software_title: swTitle, platform: swPlatform } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted ", /* @__PURE__ */ react.createElement("b", null, swTitle), " ", swPlatform ? `(${interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc[swPlatform]}) ` : "", "from", " ", ((_a = activity.details) == null ? void 0 : _a.team_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "the ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.team_name), " fleet.") : `unassigned.`);
  },
  enabledActivityAutomations: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " enabled activity automations.");
  },
  editedActivityAutomations: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " edited activity automations.");
  },
  disabledActivityAutomations: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " disabled activity automations.");
  },
  enabledAndroidMdm: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " turned on Android MDM.");
  },
  disabledAndroidMdm: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " turned off Android MDM.");
  },
  editedAppleAccountProvisioning: () => /* @__PURE__ */ react.createElement(react.Fragment, null, " edited account provisioning settings."),
  configuredMSEntraConditionalAccess: () => /* @__PURE__ */ react.createElement(react.Fragment, null, " configured Microsoft Entra conditional access."),
  deletedMSEntraConditionalAccess: () => /* @__PURE__ */ react.createElement(react.Fragment, null, " deleted Microsoft Entra conditional access configuration."),
  addedConditionalAccessOkta: () => /* @__PURE__ */ react.createElement(react.Fragment, null, " configured Okta conditional access."),
  deletedConditionalAccessOkta: () => /* @__PURE__ */ react.createElement(react.Fragment, null, " deleted Okta conditional access configuration."),
  googleWorkspaceIntegration: (verb) => (activity) => {
    var _a;
    const { domain } = (_a = activity.details) != null ? _a : {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", verb, " the Google Workspace integration", domain ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("strong", null, domain)) : null, ".");
  },
  hostBypassedConditionalAccess: (activity) => {
    var _a, _b;
    const idpFullName = (_a = activity.details) == null ? void 0 : _a.idp_full_name;
    const hostDisplayName = (_b = activity.details) == null ? void 0 : _b.host_display_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("strong", null, idpFullName), " temporarily bypassed conditional access for ", /* @__PURE__ */ react.createElement("strong", null, hostDisplayName), ".");
  },
  updatedConditionalAccessBypass: () => /* @__PURE__ */ react.createElement(react.Fragment, null, " edited conditional access end user experience."),
  enabledConditionalAccessAutomations: (activity) => {
    var _a;
    const teamName = (_a = activity.details) == null ? void 0 : _a.team_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "enabled conditional access for", " ", teamName ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "the ", /* @__PURE__ */ react.createElement("b", null, teamName), " fleet") : `unassigned`, ".");
  },
  disabledConditionalAccessAutomations: (activity) => {
    var _a;
    const teamName = (_a = activity.details) == null ? void 0 : _a.team_name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "disabled conditional access for", " ", teamName ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "the ", /* @__PURE__ */ react.createElement("b", null, teamName), " fleet") : `unassigned`, ".");
  },
  canceledRunScript: (activity) => {
    const { script_name: scriptName, host_display_name: hostName } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "canceled ", (0,utilities_helpers/* formatScriptNameForActivityItem */.tx)(scriptName), " on", " ", /* @__PURE__ */ react.createElement("b", null, hostName), ".");
  },
  canceledMdmCommand: (activity) => {
    const { command_type: commandType, host_display_name: hostName } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "canceled the pending ", /* @__PURE__ */ react.createElement("b", null, commandType), " command on ", /* @__PURE__ */ react.createElement("b", null, hostName), ".");
  },
  canceledInstallSoftware: (activity) => {
    const {
      software_title: title,
      host_display_name: hostName,
      from_setup_experience: fromSetupExperience
    } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "canceled ", /* @__PURE__ */ react.createElement("b", null, title), " install on ", /* @__PURE__ */ react.createElement("b", null, hostName), fromSetupExperience ? " during setup experience. End user was asked to restart" : "", ".");
  },
  canceledSetupExperience: (activity) => {
    const { software_title: title, host_display_name: hostName } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "canceled setup experience on ", /* @__PURE__ */ react.createElement("b", null, hostName), " because ", /* @__PURE__ */ react.createElement("b", null, title), " ", "failed to install. End user was asked to restart.");
  },
  canceledUninstallSoftware: (activity) => {
    const { software_title: title, host_display_name: hostName } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "canceled ", /* @__PURE__ */ react.createElement("b", null, title), " uninstall on ", /* @__PURE__ */ react.createElement("b", null, hostName), ".");
  },
  createdSavedQuery: (activity) => {
    var _a, _b, _c;
    let teamText;
    if (((_a = activity.details) == null ? void 0 : _a.team_id) === -1) {
      teamText = " globally";
    } else if ((_b = activity.details) == null ? void 0 : _b.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "created a report ", /* @__PURE__ */ react.createElement("b", null, (_c = activity.details) == null ? void 0 : _c.query_name), teamText, ".");
  },
  editedSavedQuery: (activity) => {
    var _a, _b, _c;
    let teamText;
    if (((_a = activity.details) == null ? void 0 : _a.team_id) === -1) {
      teamText = " globally";
    } else if ((_b = activity.details) == null ? void 0 : _b.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited the report ", /* @__PURE__ */ react.createElement("b", null, (_c = activity.details) == null ? void 0 : _c.query_name), teamText, ".");
  },
  deletedSavedQuery: (activity) => {
    var _a, _b, _c;
    let teamText;
    if (((_a = activity.details) == null ? void 0 : _a.team_id) === -1) {
      teamText = " globally";
    } else if ((_b = activity.details) == null ? void 0 : _b.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted the report ", /* @__PURE__ */ react.createElement("b", null, (_c = activity.details) == null ? void 0 : _c.query_name), teamText, ".");
  },
  createdPolicy: (activity) => {
    var _a, _b, _c, _d;
    let teamText;
    if (((_a = activity.details) == null ? void 0 : _a.team_id) === -1) {
      teamText = " globally";
    } else if (((_b = activity.details) == null ? void 0 : _b.team_id) === 0) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, "Unassigned"));
    } else if ((_c = activity.details) == null ? void 0 : _c.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "created a policy ", /* @__PURE__ */ react.createElement("b", null, (_d = activity.details) == null ? void 0 : _d.policy_name), teamText, ".");
  },
  editedPolicy: (activity) => {
    var _a, _b, _c, _d;
    let teamText;
    if (((_a = activity.details) == null ? void 0 : _a.team_id) === -1) {
      teamText = " globally";
    } else if (((_b = activity.details) == null ? void 0 : _b.team_id) === 0) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, "Unassigned"));
    } else if ((_c = activity.details) == null ? void 0 : _c.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited the policy ", /* @__PURE__ */ react.createElement("b", null, (_d = activity.details) == null ? void 0 : _d.policy_name), teamText, ".");
  },
  deletedPolicy: (activity) => {
    var _a, _b, _c, _d;
    let teamText;
    if (((_a = activity.details) == null ? void 0 : _a.team_id) === -1) {
      teamText = " globally";
    } else if (((_b = activity.details) == null ? void 0 : _b.team_id) === 0) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, "Unassigned"));
    } else if ((_c = activity.details) == null ? void 0 : _c.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted the policy ", /* @__PURE__ */ react.createElement("b", null, (_d = activity.details) == null ? void 0 : _d.policy_name), teamText, ".");
  },
  resetPolicy: (activity) => {
    var _a, _b, _c, _d, _e;
    if ((_a = activity.details) == null ? void 0 : _a.host_display_name) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "reset the policy ", /* @__PURE__ */ react.createElement("b", null, activity.details.policy_name), " for host", " ", /* @__PURE__ */ react.createElement("b", null, activity.details.host_display_name), ".");
    }
    let teamText;
    if (((_b = activity.details) == null ? void 0 : _b.team_id) === -1) {
      teamText = " globally";
    } else if (((_c = activity.details) == null ? void 0 : _c.team_id) === 0) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, "Unassigned"));
    } else if ((_d = activity.details) == null ? void 0 : _d.team_name) {
      teamText = /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.team_name), " fleet");
    } else {
      teamText = "";
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "reset the policy ", /* @__PURE__ */ react.createElement("b", null, (_e = activity.details) == null ? void 0 : _e.policy_name), teamText, ".");
  },
  escrowedDiskEncryptionKey: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "escrowed a disk encryption key for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  createdDiskEncryptionPIN: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("b", null, "End user "), "created a disk encryption PIN for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  createdLabel: (activity) => {
    var _a, _b;
    const fleetText = ((_a = activity.details) == null ? void 0 : _a.fleet_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.fleet_name), " fleet") : "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "created a label ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.label_name), fleetText, ".");
  },
  editedLabel: (activity) => {
    var _a, _b;
    const fleetText = ((_a = activity.details) == null ? void 0 : _a.fleet_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.fleet_name), " fleet") : "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited the label ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.label_name), fleetText, ".");
  },
  deletedLabel: (activity) => {
    var _a, _b;
    const fleetText = ((_a = activity.details) == null ? void 0 : _a.fleet_name) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "on the ", /* @__PURE__ */ react.createElement("b", null, activity.details.fleet_name), " fleet") : "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted the label ", /* @__PURE__ */ react.createElement("b", null, (_b = activity.details) == null ? void 0 : _b.label_name), fleetText, ".");
  },
  createdCustomVariable: (activity) => {
    const { custom_variable_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "created custom variable ", /* @__PURE__ */ react.createElement("b", null, custom_variable_name), ".");
  },
  updatedCustomVariable: (activity) => {
    const { custom_variable_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "updated custom variable ", /* @__PURE__ */ react.createElement("b", null, custom_variable_name), ".");
  },
  deletedCustomVariable: (activity) => {
    const { custom_variable_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "deleted custom variable ", /* @__PURE__ */ react.createElement("b", null, custom_variable_name), ".");
  },
  createdCustomHostVital: (activity) => {
    const { custom_host_vital_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "created a custom host vital ", /* @__PURE__ */ react.createElement("b", null, custom_host_vital_name), ".");
  },
  editedCustomHostVital: (activity) => {
    const { custom_host_vital_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "edited custom host vital ", /* @__PURE__ */ react.createElement("b", null, custom_host_vital_name), ".");
  },
  deletedCustomHostVital: (activity) => {
    const { custom_host_vital_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "deleted custom host vital ", /* @__PURE__ */ react.createElement("b", null, custom_host_vital_name), ".");
  },
  editedSetupExperienceSoftware: (activity) => {
    const { platform, team_name, team_id } = activity.details || {};
    let platformText = "";
    switch (platform) {
      case "darwin":
        platformText = "macOS";
        break;
      case "ios":
        platformText = "iOS";
        break;
      case "ipados":
        platformText = "iPadOS";
        break;
      default:
        platformText = (0,lodash.capitalize)(platform);
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "edited setup experience software for ", platformText, " hosts that enroll to", " ", team_id === team/* API_NO_TEAM_ID */.Rp ? `unassigned` : /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, team_name), " fleet"), ".");
  },
  createdSetupExperienceScript: (activity) => {
    const { script_name, fleet_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "added setup experience script ", /* @__PURE__ */ react.createElement("b", null, script_name), " for", " ", fleet_name ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, fleet_name), " fleet") : `unassigned`, ".");
  },
  deletedSetupExperienceScript: (activity) => {
    const { script_name, fleet_name } = activity.details || {};
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "deleted setup experience script ", /* @__PURE__ */ react.createElement("b", null, script_name), " for", " ", fleet_name ? /* @__PURE__ */ react.createElement(react.Fragment, null, "the ", /* @__PURE__ */ react.createElement("b", null, fleet_name), " fleet") : `unassigned`, ".");
  },
  editedHostIdpData: (activity) => {
    const { host_display_name, host_idp_username } = activity.details || {};
    const removed = host_idp_username === "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, removed ? "removed" : "set", " the end user associated with", " ", /* @__PURE__ */ react.createElement("b", null, host_display_name), removed ? "" : /* @__PURE__ */ react.createElement(react.Fragment, null, " to ", host_idp_username), ".");
  },
  createdCert: (activity) => {
    const { name, team_name } = activity.details || {};
    const teamText = team_name ? /* @__PURE__ */ react.createElement(react.Fragment, null, "assigned to the ", /* @__PURE__ */ react.createElement("b", null, team_name)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "with no");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "added certificate ", name ? /* @__PURE__ */ react.createElement("b", null, name, " ") : "", "to Android hosts", " ", teamText, " fleet.");
  },
  deletedCert: (activity) => {
    const { name, team_name } = activity.details || {};
    const teamText = team_name ? /* @__PURE__ */ react.createElement(react.Fragment, null, "assigned to the ", /* @__PURE__ */ react.createElement("b", null, team_name)) : /* @__PURE__ */ react.createElement(react.Fragment, null, "with no");
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "deleted certificate ", name ? /* @__PURE__ */ react.createElement("b", null, name, " ") : "", "from Android hosts", " ", teamText, " fleet.");
  },
  editedEnrollSecrets: (activity, isPremiumTier) => {
    let { team_name } = activity.details || {};
    if (isPremiumTier && !team_name) {
      team_name = "No Team";
    }
    const postFix = team_name ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "for ", /* @__PURE__ */ react.createElement("b", null, team_name)) : /* @__PURE__ */ react.createElement(react.Fragment, null);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "edited enroll secrets", postFix, ".");
  },
  addedMicrosoftEntraTenant: (activity) => {
    var _a;
    const tenantId = (_a = activity.details) == null ? void 0 : _a.tenant_id;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " added Microsoft Entra tenant", tenantId ? ` (${tenantId})` : "", ".");
  },
  deletedMicrosoftEntraTenant: (activity) => {
    var _a;
    const tenantId = (_a = activity.details) == null ? void 0 : _a.tenant_id;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " deleted Microsoft Entra tenant", tenantId ? ` (${tenantId})` : "", ".");
  },
  addedMicrosoftGraphCredential: (activity) => {
    var _a;
    const tenantId = (_a = activity.details) == null ? void 0 : _a.tenant_id;
    const suffix = tenantId ? ` (${tenantId})` : "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " added Microsoft Graph credential", suffix, ".");
  },
  editedMicrosoftGraphCredential: (activity) => {
    var _a;
    const tenantId = (_a = activity.details) == null ? void 0 : _a.tenant_id;
    const suffix = tenantId ? ` (${tenantId})` : "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " edited Microsoft Graph credential", suffix, ".");
  },
  deletedMicrosoftGraphCredential: (activity) => {
    var _a;
    const tenantId = (_a = activity.details) == null ? void 0 : _a.tenant_id;
    const suffix = tenantId ? ` (${tenantId})` : "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " deleted Microsoft Graph credential", suffix, ".");
  },
  addedMicrosoftEntraClientId: (activity) => {
    var _a;
    const clientId = (_a = activity.details) == null ? void 0 : _a.client_id;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " added Microsoft Entra client ID", clientId ? ` (${clientId})` : "", ".");
  },
  deletedMicrosoftEntraClientId: (activity) => {
    var _a;
    const clientId = (_a = activity.details) == null ? void 0 : _a.client_id;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " deleted Microsoft Entra client ID", clientId ? ` (${clientId})` : "", ".");
  },
  clearedPasscode: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "cleared the passcode on ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  failedEnrollmentRenewalProfile: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "enrollment profile renewal failed for", " ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), ".");
  },
  releasedDeviceFromAB: (activity) => {
    var _a;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "released ", /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.host_display_name), " from Apple Business.");
  },
  notifiedEndUserBeforePatching: (activity) => {
    const { details } = activity;
    if (!details) {
      return TAGGED_TEMPLATES.defaultActivityTemplate(activity);
    }
    const {
      host_display_name: hostName,
      software_titles: titles = [],
      status,
      time_before: timeBefore
    } = details;
    const timeLabel = (0,NotifyBeforePatchingDetailsModal_helpers/* formatNotifyTimeLabel */.GQ)(timeBefore);
    const failed = (0,NotifyBeforePatchingDetailsModal_helpers/* isNotifyFailure */.si)(status);
    const verb = failed ? "failed to notify" : "notified";
    const titleList = (0,NotifyBeforePatchingDetailsModal_helpers/* renderNotifyTitleList */.s8)(titles);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, " ", verb, " end user ", timeLabel, " before patching", titleList && /* @__PURE__ */ react.createElement(react.Fragment, null, " ", titleList), " on", " ", /* @__PURE__ */ react.createElement("strong", null, hostName || "the host"), ".");
  },
  enabledOnlyAppleBusinessEnrollment: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "enabled Apple Business only enrollment for Apple hosts.");
  },
  disabledOnlyAppleBusinessEnrollment: () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, "disabled Apple Business only enrollment for Apple hosts.");
  }
};
const getDetail = (activity, isPremiumTier) => {
  var _a, _b, _c;
  switch (activity.type) {
    case interfaces_activity/* ActivityType */.M.LiveQuery: {
      return TAGGED_TEMPLATES.liveQueryActivityTemplate(activity);
    }
    case interfaces_activity/* ActivityType */.M.AppliedSpecPack: {
      return TAGGED_TEMPLATES.editPackCtlActivityTemplate();
    }
    case interfaces_activity/* ActivityType */.M.AppliedSpecPolicy: {
      return TAGGED_TEMPLATES.editPolicyCtlActivityTemplate();
    }
    case interfaces_activity/* ActivityType */.M.AppliedSpecSavedQuery: {
      return TAGGED_TEMPLATES.editQueryCtlActivityTemplate(activity);
    }
    case interfaces_activity/* ActivityType */.M.AppliedSpecSoftware: {
      return TAGGED_TEMPLATES.editSoftwareCtlActivityTemplate();
    }
    case interfaces_activity/* ActivityType */.M.AppliedSpecTeam: {
      return TAGGED_TEMPLATES.editTeamCtlActivityTemplate(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedAgentOptions: {
      return TAGGED_TEMPLATES.editAgentOptions(activity);
    }
    case interfaces_activity/* ActivityType */.M.UserAddedBySSO: {
      return TAGGED_TEMPLATES.userAddedBySSOTempalte();
    }
    case interfaces_activity/* ActivityType */.M.UserLoggedIn: {
      return TAGGED_TEMPLATES.userLoggedIn(activity);
    }
    case interfaces_activity/* ActivityType */.M.UserFailedLogin: {
      return TAGGED_TEMPLATES.userFailedLogin(activity);
    }
    case interfaces_activity/* ActivityType */.M.UserMFARequested: {
      return TAGGED_TEMPLATES.userMFARequested(activity);
    }
    case interfaces_activity/* ActivityType */.M.UserCreated: {
      return TAGGED_TEMPLATES.userCreated(activity);
    }
    case interfaces_activity/* ActivityType */.M.UserDeleted: {
      return TAGGED_TEMPLATES.userDeleted(activity);
    }
    case interfaces_activity/* ActivityType */.M.HostDeleted: {
      return TAGGED_TEMPLATES.deletedHost(activity);
    }
    case interfaces_activity/* ActivityType */.M.UserChangedGlobalRole: {
      return TAGGED_TEMPLATES.userChangedGlobalRole(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.UserDeletedGlobalRole: {
      return TAGGED_TEMPLATES.userDeletedGlobalRole(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.UserChangedTeamRole: {
      return TAGGED_TEMPLATES.userChangedTeamRole(activity);
    }
    case interfaces_activity/* ActivityType */.M.UserDeletedTeamRole: {
      return TAGGED_TEMPLATES.userDeletedTeamRole(activity);
    }
    case interfaces_activity/* ActivityType */.M.FleetEnrolled: {
      return TAGGED_TEMPLATES.fleetEnrolled(activity);
    }
    case interfaces_activity/* ActivityType */.M.HostEnrollmentRejected: {
      return TAGGED_TEMPLATES.hostEnrollmentRejected(activity);
    }
    case interfaces_activity/* ActivityType */.M.MdmEnrolled: {
      return TAGGED_TEMPLATES.mdmEnrolled(activity);
    }
    case interfaces_activity/* ActivityType */.M.MdmUnenrolled: {
      return TAGGED_TEMPLATES.mdmUnenrolled(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedMacosMinVersion: {
      return TAGGED_TEMPLATES.editedAppleosMinVersion("macOS", activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedIosMinVersion: {
      return TAGGED_TEMPLATES.editedAppleosMinVersion("iOS", activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedIpadosMinVersion: {
      return TAGGED_TEMPLATES.editedAppleosMinVersion("iPadOS", activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledMacosUpdateNewHosts: {
      return TAGGED_TEMPLATES.enabledAppleosUpdateNewHosts("macOS", activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledMacosUpdateNewHosts: {
      return TAGGED_TEMPLATES.disabledAppleosUpdateNewHosts("macOS", activity);
    }
    case interfaces_activity/* ActivityType */.M.ReadHostDiskEncryptionKey: {
      return TAGGED_TEMPLATES.readHostDiskEncryptionKey(activity);
    }
    case interfaces_activity/* ActivityType */.M.RetrievedHostMyDeviceURL: {
      return TAGGED_TEMPLATES.retrievedHostMyDeviceURL(activity);
    }
    case interfaces_activity/* ActivityType */.M.ViewedHostRecoveryLockPassword: {
      return TAGGED_TEMPLATES.viewedHostRecoveryLockPassword(activity);
    }
    case interfaces_activity/* ActivityType */.M.SetHostRecoveryLockPassword: {
      return TAGGED_TEMPLATES.setHostRecoveryLockPassword(activity);
    }
    case interfaces_activity/* ActivityType */.M.RotatedHostRecoveryLockPassword: {
      return TAGGED_TEMPLATES.rotatedHostRecoveryLockPassword(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledManagedLocalAccount: {
      return TAGGED_TEMPLATES.enabledManagedLocalAccount(activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledManagedLocalAccount: {
      return TAGGED_TEMPLATES.disabledManagedLocalAccount(activity);
    }
    case interfaces_activity/* ActivityType */.M.ViewedManagedLocalAccount: {
      return TAGGED_TEMPLATES.viewedManagedLocalAccount(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedManagedLocalAccount: {
      return TAGGED_TEMPLATES.createdManagedLocalAccount(activity);
    }
    case interfaces_activity/* ActivityType */.M.RotatedManagedLocalAccountPassword: {
      return TAGGED_TEMPLATES.rotatedManagedLocalAccountPassword(activity);
    }
    case interfaces_activity/* ActivityType */.M.FailedToRotateManagedLocalAccountPassword: {
      return TAGGED_TEMPLATES.failedToRotateManagedLocalAccountPassword(
        activity
      );
    }
    case interfaces_activity/* ActivityType */.M.CreatedAppleOSProfile: {
      return TAGGED_TEMPLATES.createdAppleOSProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.DeletedAppleOSProfile: {
      return TAGGED_TEMPLATES.deletedAppleOSProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.EditedAppleOSProfile: {
      return TAGGED_TEMPLATES.editedAppleOSProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.CreatedAndroidProfile: {
      return TAGGED_TEMPLATES.createdAndroidProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.DeletedAndroidProfile: {
      return TAGGED_TEMPLATES.deletedAndroidProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.EditedAndroidProfile: {
      return TAGGED_TEMPLATES.editedAndroidProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.EditedAndroidCertificate: {
      return TAGGED_TEMPLATES.editedAndroidCertificate(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.ResentCertificate: {
      return TAGGED_TEMPLATES.resentCertificate(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedNdesScepProxy: {
      return TAGGED_TEMPLATES.addedCertificateAuthority("NDES");
    }
    case interfaces_activity/* ActivityType */.M.DeletedNdesScepProxy: {
      return TAGGED_TEMPLATES.deletedCertificateAuthority("NDES");
    }
    case interfaces_activity/* ActivityType */.M.EditedNdesScepProxy: {
      return TAGGED_TEMPLATES.editedCertificateAuthority("NDES");
    }
    case interfaces_activity/* ActivityType */.M.AddedCustomScepProxy:
    case interfaces_activity/* ActivityType */.M.AddedDigicert:
    case interfaces_activity/* ActivityType */.M.AddedHydrant:
    case interfaces_activity/* ActivityType */.M.AddedCustomESTProxy:
    case interfaces_activity/* ActivityType */.M.AddedSmallstep: {
      return TAGGED_TEMPLATES.addedCertificateAuthority((_a = activity.details) == null ? void 0 : _a.name);
    }
    case interfaces_activity/* ActivityType */.M.DeletedCustomScepProxy:
    case interfaces_activity/* ActivityType */.M.DeletedDigicert:
    case interfaces_activity/* ActivityType */.M.DeletedHydrant:
    case interfaces_activity/* ActivityType */.M.DeletedCustomESTProxy:
    case interfaces_activity/* ActivityType */.M.DeletedSmallstep: {
      return TAGGED_TEMPLATES.deletedCertificateAuthority(
        (_b = activity.details) == null ? void 0 : _b.name
      );
    }
    case interfaces_activity/* ActivityType */.M.EditedCustomScepProxy:
    case interfaces_activity/* ActivityType */.M.EditedDigicert:
    case interfaces_activity/* ActivityType */.M.EditedHydrant:
    case interfaces_activity/* ActivityType */.M.EditedCustomESTProxy:
    case interfaces_activity/* ActivityType */.M.EditedSmallstep: {
      return TAGGED_TEMPLATES.editedCertificateAuthority(
        (_c = activity.details) == null ? void 0 : _c.name
      );
    }
    case interfaces_activity/* ActivityType */.M.CreatedWindowsProfile: {
      return TAGGED_TEMPLATES.createdWindowsProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.DeletedWindowsProfile: {
      return TAGGED_TEMPLATES.deletedWindowsProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.EditedWindowsProfile: {
      return TAGGED_TEMPLATES.editedWindowsProfile(activity, isPremiumTier);
    }
    // Note: This activity is generated for all platforms.
    case interfaces_activity/* ActivityType */.M.EnabledMacDiskEncryption: {
      return TAGGED_TEMPLATES.enabledDiskEncryption(activity);
    }
    // Note: This activity is generated for all platforms.
    case interfaces_activity/* ActivityType */.M.DisabledMacDiskEncryption: {
      return TAGGED_TEMPLATES.disabledEncryption(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedDiskEncryptionSettings: {
      return TAGGED_TEMPLATES.editedDiskEncryptionSettings(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledRecoveryLockPasswords: {
      return TAGGED_TEMPLATES.enabledRecoveryLockPasswords(activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledRecoveryLockPasswords: {
      return TAGGED_TEMPLATES.disabledRecoveryLockPasswords(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedBootstrapPackage: {
      return TAGGED_TEMPLATES.addedMDMBootstrapPackage(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedBootstrapPackage: {
      return TAGGED_TEMPLATES.deletedMDMBootstrapPackage(activity);
    }
    case interfaces_activity/* ActivityType */.M.ChangedMacOSSetupAssistant: {
      return TAGGED_TEMPLATES.changedMacOSSetupAssistant(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedMacOSSetupAssistant: {
      return TAGGED_TEMPLATES.deletedMacOSSetupAssistant(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledMacOSSetupEndUserAuth: {
      return TAGGED_TEMPLATES.enabledMacOSSetupEndUserAuth(activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledMacOSSetupEndUserAuth: {
      return TAGGED_TEMPLATES.disabledMacOSSetupEndUserAuth(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledHistoricalDataset: {
      return TAGGED_TEMPLATES.enabledHistoricalDataset(activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledHistoricalDataset: {
      return TAGGED_TEMPLATES.disabledHistoricalDataset(activity);
    }
    case interfaces_activity/* ActivityType */.M.TransferredHosts: {
      return TAGGED_TEMPLATES.transferredHosts(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledWindowsMdm: {
      return TAGGED_TEMPLATES.enabledWindowsMdm();
    }
    case interfaces_activity/* ActivityType */.M.DisabledWindowsMdm: {
      return TAGGED_TEMPLATES.disabledWindowsMdm();
    }
    case interfaces_activity/* ActivityType */.M.EnabledGitOpsMode: {
      return TAGGED_TEMPLATES.enabledGitOpsMode();
    }
    case interfaces_activity/* ActivityType */.M.DisabledGitOpsMode: {
      return TAGGED_TEMPLATES.disabledGitOpsMode();
    }
    case interfaces_activity/* ActivityType */.M.EnabledSSOFleetDesktop: {
      return TAGGED_TEMPLATES.ssoFleetDesktop("enabled");
    }
    case interfaces_activity/* ActivityType */.M.DisabledSSOFleetDesktop: {
      return TAGGED_TEMPLATES.ssoFleetDesktop("disabled");
    }
    case interfaces_activity/* ActivityType */.M.EnabledGitOpsException: {
      return TAGGED_TEMPLATES.enabledGitOpsException(activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledGitOpsException: {
      return TAGGED_TEMPLATES.disabledGitOpsException(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledWindowsMdmMigration: {
      return TAGGED_TEMPLATES.enabledWindowsMdmMigration();
    }
    case interfaces_activity/* ActivityType */.M.DisabledWindowsMdmMigration: {
      return TAGGED_TEMPLATES.disabledWindowsMdmMigration();
    }
    case interfaces_activity/* ActivityType */.M.EditedWindowsEnrollmentDefaultFleet: {
      return TAGGED_TEMPLATES.editedWindowsEnrollmentDefaultFleet(activity);
    }
    case interfaces_activity/* ActivityType */.M.RanCustomMdmCommand: {
      return TAGGED_TEMPLATES.ranCustomMdmCommand(activity);
    }
    case interfaces_activity/* ActivityType */.M.RanScript: {
      return TAGGED_TEMPLATES.ranScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.RanScriptBatch: {
      return TAGGED_TEMPLATES.ranScriptBatch(activity);
    }
    case interfaces_activity/* ActivityType */.M.ScheduledScriptBatch: {
      return TAGGED_TEMPLATES.scheduledScriptBatch(activity);
    }
    case interfaces_activity/* ActivityType */.M.CanceledScriptBatch: {
      return TAGGED_TEMPLATES.canceledScriptBatch(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedScript: {
      return TAGGED_TEMPLATES.addedScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.UpdatedScript: {
      return TAGGED_TEMPLATES.updatedScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedScript: {
      return TAGGED_TEMPLATES.deletedScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedScript: {
      return TAGGED_TEMPLATES.editedScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedWindowsUpdates: {
      return TAGGED_TEMPLATES.editedWindowsUpdates(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedMultipleSavedQuery: {
      return TAGGED_TEMPLATES.deletedMultipleSavedQuery(activity);
    }
    case interfaces_activity/* ActivityType */.M.LockedHost: {
      return TAGGED_TEMPLATES.lockedHost(activity);
    }
    case interfaces_activity/* ActivityType */.M.UnlockedHost: {
      return TAGGED_TEMPLATES.unlockedHost(activity);
    }
    case interfaces_activity/* ActivityType */.M.WipedHost: {
      return TAGGED_TEMPLATES.wipedHost(activity);
    }
    case interfaces_activity/* ActivityType */.M.FailedWipe: {
      return TAGGED_TEMPLATES.failedWipe(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedDeclarationProfile: {
      return TAGGED_TEMPLATES.createdDeclarationProfile(
        activity,
        isPremiumTier
      );
    }
    case interfaces_activity/* ActivityType */.M.DeletedDeclarationProfile: {
      return TAGGED_TEMPLATES.deletedDeclarationProfile(
        activity,
        isPremiumTier
      );
    }
    case interfaces_activity/* ActivityType */.M.EditedDeclarationProfile: {
      return TAGGED_TEMPLATES.editedDeclarationProfile(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.ResentConfigurationProfile: {
      return TAGGED_TEMPLATES.resentConfigProfile(activity);
    }
    case interfaces_activity/* ActivityType */.M.ResentConfigurationProfileBatch: {
      return TAGGED_TEMPLATES.resentConfigProfileBatch(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedSoftware: {
      return TAGGED_TEMPLATES.addedSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedSoftware: {
      return TAGGED_TEMPLATES.editedSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedSoftware: {
      return TAGGED_TEMPLATES.deletedSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.ChangedOrgLogo: {
      return TAGGED_TEMPLATES.changedOrgLogo(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedOrgLogo: {
      return TAGGED_TEMPLATES.deletedOrgLogo(activity);
    }
    case interfaces_activity/* ActivityType */.M.InstalledSoftware: {
      return TAGGED_TEMPLATES.installedSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.InstalledAllSelfServiceSoftware: {
      return TAGGED_TEMPLATES.installedAllSelfServiceSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.UninstalledSoftware: {
      return TAGGED_TEMPLATES.uninstalledSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedAppStoreApp: {
      return TAGGED_TEMPLATES.addedAppStoreApp(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedAppStoreApp: {
      return TAGGED_TEMPLATES.editedAppStoreApp(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedAppStoreApp: {
      return TAGGED_TEMPLATES.deletedAppStoreApp(activity);
    }
    case interfaces_activity/* ActivityType */.M.InstalledAppStoreApp: {
      return TAGGED_TEMPLATES.installedSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledVpp: {
      return TAGGED_TEMPLATES.enabledVpp(activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledVpp: {
      return TAGGED_TEMPLATES.disabledVpp(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledActivityAutomations: {
      return TAGGED_TEMPLATES.enabledActivityAutomations();
    }
    case interfaces_activity/* ActivityType */.M.EditedActivityAutomations: {
      return TAGGED_TEMPLATES.editedActivityAutomations();
    }
    case interfaces_activity/* ActivityType */.M.DisabledActivityAutomations: {
      return TAGGED_TEMPLATES.disabledActivityAutomations();
    }
    case interfaces_activity/* ActivityType */.M.EnabledAndroidMdm: {
      return TAGGED_TEMPLATES.enabledAndroidMdm();
    }
    case interfaces_activity/* ActivityType */.M.DisabledAndroidMdm: {
      return TAGGED_TEMPLATES.disabledAndroidMdm();
    }
    case interfaces_activity/* ActivityType */.M.EditedAppleAccountProvisioning: {
      return TAGGED_TEMPLATES.editedAppleAccountProvisioning();
    }
    case interfaces_activity/* ActivityType */.M.ConfiguredMSEntraConditionalAccess: {
      return TAGGED_TEMPLATES.configuredMSEntraConditionalAccess();
    }
    case interfaces_activity/* ActivityType */.M.DeletedMSEntraConditionalAccess: {
      return TAGGED_TEMPLATES.deletedMSEntraConditionalAccess();
    }
    case interfaces_activity/* ActivityType */.M.AddedConditionalAccessOkta: {
      return TAGGED_TEMPLATES.addedConditionalAccessOkta();
    }
    case interfaces_activity/* ActivityType */.M.DeletedConditionalAccessOkta: {
      return TAGGED_TEMPLATES.deletedConditionalAccessOkta();
    }
    case interfaces_activity/* ActivityType */.M.AddedGoogleWorkspaceIntegration: {
      return TAGGED_TEMPLATES.googleWorkspaceIntegration("added")(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedGoogleWorkspaceIntegration: {
      return TAGGED_TEMPLATES.googleWorkspaceIntegration("edited")(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedGoogleWorkspaceIntegration: {
      return TAGGED_TEMPLATES.googleWorkspaceIntegration("deleted")(activity);
    }
    case interfaces_activity/* ActivityType */.M.UpdatedConditionalAccessBypass: {
      return TAGGED_TEMPLATES.updatedConditionalAccessBypass();
    }
    case interfaces_activity/* ActivityType */.M.EnabledConditionalAccessAutomations: {
      return TAGGED_TEMPLATES.enabledConditionalAccessAutomations(activity);
    }
    case interfaces_activity/* ActivityType */.M.HostBypassedConditionalAccess: {
      return TAGGED_TEMPLATES.hostBypassedConditionalAccess(activity);
    }
    case interfaces_activity/* ActivityType */.M.DisabledConditionalAccessAutomations: {
      return TAGGED_TEMPLATES.disabledConditionalAccessAutomations(activity);
    }
    case interfaces_activity/* ActivityType */.M.CanceledRunScript: {
      return TAGGED_TEMPLATES.canceledRunScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.CanceledMdmCommand: {
      return TAGGED_TEMPLATES.canceledMdmCommand(activity);
    }
    case interfaces_activity/* ActivityType */.M.CanceledInstallSoftware:
    case interfaces_activity/* ActivityType */.M.CanceledInstallAppStoreApp: {
      return TAGGED_TEMPLATES.canceledInstallSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.CanceledUninstallSoftware: {
      return TAGGED_TEMPLATES.canceledUninstallSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.CanceledSetupExperience: {
      return TAGGED_TEMPLATES.canceledSetupExperience(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedSavedQuery: {
      return TAGGED_TEMPLATES.createdSavedQuery(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedSavedQuery: {
      return TAGGED_TEMPLATES.editedSavedQuery(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedSavedQuery: {
      return TAGGED_TEMPLATES.deletedSavedQuery(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedPolicy: {
      return TAGGED_TEMPLATES.createdPolicy(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedPolicy: {
      return TAGGED_TEMPLATES.editedPolicy(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedPolicy: {
      return TAGGED_TEMPLATES.deletedPolicy(activity);
    }
    case interfaces_activity/* ActivityType */.M.ResetPolicy: {
      return TAGGED_TEMPLATES.resetPolicy(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedLabel: {
      return TAGGED_TEMPLATES.createdLabel(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedLabel: {
      return TAGGED_TEMPLATES.editedLabel(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedLabel: {
      return TAGGED_TEMPLATES.deletedLabel(activity);
    }
    case interfaces_activity/* ActivityType */.M.EscrowedDiskEncryptionKey: {
      return TAGGED_TEMPLATES.escrowedDiskEncryptionKey(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedDiskEncryptionPIN: {
      return TAGGED_TEMPLATES.createdDiskEncryptionPIN(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedCustomVariable: {
      return TAGGED_TEMPLATES.createdCustomVariable(activity);
    }
    case interfaces_activity/* ActivityType */.M.UpdatedCustomVariable: {
      return TAGGED_TEMPLATES.updatedCustomVariable(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedCustomVariable: {
      return TAGGED_TEMPLATES.deletedCustomVariable(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedCustomHostVital: {
      return TAGGED_TEMPLATES.createdCustomHostVital(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedCustomHostVital: {
      return TAGGED_TEMPLATES.editedCustomHostVital(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedCustomHostVital: {
      return TAGGED_TEMPLATES.deletedCustomHostVital(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedSetupExperienceSoftware: {
      return TAGGED_TEMPLATES.editedSetupExperienceSoftware(activity);
    }
    case interfaces_activity/* ActivityType */.M.CreatedSetupExperienceScript: {
      return TAGGED_TEMPLATES.createdSetupExperienceScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedSetupExperienceScript: {
      return TAGGED_TEMPLATES.deletedSetupExperienceScript(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedHostIdpData: {
      return TAGGED_TEMPLATES.editedHostIdpData(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedCertificate: {
      return TAGGED_TEMPLATES.createdCert(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedCertificate: {
      return TAGGED_TEMPLATES.deletedCert(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedEnrollSecrets: {
      return TAGGED_TEMPLATES.editedEnrollSecrets(activity, isPremiumTier);
    }
    case interfaces_activity/* ActivityType */.M.AddedMicrosoftEntraTenant: {
      return TAGGED_TEMPLATES.addedMicrosoftEntraTenant(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedMicrosoftEntraTenant: {
      return TAGGED_TEMPLATES.deletedMicrosoftEntraTenant(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedMicrosoftEntraClientId: {
      return TAGGED_TEMPLATES.addedMicrosoftEntraClientId(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedMicrosoftEntraClientId: {
      return TAGGED_TEMPLATES.deletedMicrosoftEntraClientId(activity);
    }
    case interfaces_activity/* ActivityType */.M.AddedMicrosoftGraphCredential: {
      return TAGGED_TEMPLATES.addedMicrosoftGraphCredential(activity);
    }
    case interfaces_activity/* ActivityType */.M.EditedMicrosoftGraphCredential: {
      return TAGGED_TEMPLATES.editedMicrosoftGraphCredential(activity);
    }
    case interfaces_activity/* ActivityType */.M.DeletedMicrosoftGraphCredential: {
      return TAGGED_TEMPLATES.deletedMicrosoftGraphCredential(activity);
    }
    case interfaces_activity/* ActivityType */.M.ClearedPasscode: {
      return TAGGED_TEMPLATES.clearedPasscode(activity);
    }
    case interfaces_activity/* ActivityType */.M.FailedEnrollmentProfileRenewal: {
      return TAGGED_TEMPLATES.failedEnrollmentRenewalProfile(activity);
    }
    case interfaces_activity/* ActivityType */.M.ReleasedDeviceFromAB: {
      return TAGGED_TEMPLATES.releasedDeviceFromAB(activity);
    }
    case interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching: {
      return TAGGED_TEMPLATES.notifiedEndUserBeforePatching(activity);
    }
    case interfaces_activity/* ActivityType */.M.EnabledAppleBusinessOnlyEnrollment: {
      return TAGGED_TEMPLATES.enabledOnlyAppleBusinessEnrollment();
    }
    case interfaces_activity/* ActivityType */.M.DisabledAppleBusinessOnlyEnrollment: {
      return TAGGED_TEMPLATES.disabledOnlyAppleBusinessEnrollment();
    }
    default: {
      return TAGGED_TEMPLATES.defaultActivityTemplate(activity);
    }
  }
};
const GlobalActivityItem = ({
  activity,
  isPremiumTier,
  onDetailsClick = lodash.noop
}) => {
  const hasDetails = ACTIVITIES_WITH_DETAILS.has(activity.type) && (isPremiumTier || !activityHelpers/* PREMIUM_ONLY_DETAIL_ACTIVITIES */.b$.has(activity.type));
  const renderActivityPrefix = () => {
    var _a, _b, _c, _d;
    const DEFAULT_ACTOR_DISPLAY = /* @__PURE__ */ react.createElement("b", null, activity.fleet_initiated ? "Mesh" : activity.actor_full_name, " ");
    switch (activity.type) {
      case interfaces_activity/* ActivityType */.M.UserChangedGlobalRole:
      case interfaces_activity/* ActivityType */.M.UserDeletedGlobalRole:
      case interfaces_activity/* ActivityType */.M.UserChangedTeamRole:
      case interfaces_activity/* ActivityType */.M.UserDeletedTeamRole:
        return isPassiveRoleActivity(activity) ? /* @__PURE__ */ react.createElement("b", null, (_a = activity.details) == null ? void 0 : _a.user_email, " ") : DEFAULT_ACTOR_DISPLAY;
      case interfaces_activity/* ActivityType */.M.InstalledSoftware:
      case interfaces_activity/* ActivityType */.M.UninstalledSoftware:
      case interfaces_activity/* ActivityType */.M.InstalledAppStoreApp:
        if ((_b = activity.details) == null ? void 0 : _b.self_service) return null;
        if ((_c = activity.details) == null ? void 0 : _c.from_auto_update) return /* @__PURE__ */ react.createElement("b", null, "Mesh ");
        if (!((_d = activity.actor_full_name) == null ? void 0 : _d.trim())) return /* @__PURE__ */ react.createElement("b", null, "Mesh ");
        return DEFAULT_ACTOR_DISPLAY;
      case interfaces_activity/* ActivityType */.M.InstalledAllSelfServiceSoftware:
        return null;
      case interfaces_activity/* ActivityType */.M.CreatedDiskEncryptionPIN:
        return null;
      case interfaces_activity/* ActivityType */.M.UserMFARequested:
        return null;
      // these activities have more complicated logic to
      // determine if we display the actor name so we will handle that in the
      // template function
      case interfaces_activity/* ActivityType */.M.FleetEnrolled:
      case interfaces_activity/* ActivityType */.M.MdmUnenrolled:
      case interfaces_activity/* ActivityType */.M.MdmEnrolled:
      case interfaces_activity/* ActivityType */.M.ResentConfigurationProfile:
        return null;
      default:
        return DEFAULT_ACTOR_DISPLAY;
    }
  };
  return /* @__PURE__ */ react.createElement(
    ActivityItem/* default */.A,
    {
      activity,
      hideCancel: true,
      hideShowDetails: !hasDetails,
      onShowDetails: onDetailsClick,
      className: GlobalActivityItem_baseClass
    },
    renderActivityPrefix(),
    getDetail(activity, isPremiumTier)
  );
};
/* harmony default export */ var GlobalActivityItem_GlobalActivityItem = (GlobalActivityItem);

;// ./frontend/pages/DashboardPage/cards/ActivityFeed/GlobalActivityItem/index.ts



;// ./frontend/pages/DashboardPage/cards/ActivityFeed/ActivityFeed.tsx

var ActivityFeed_defProp = Object.defineProperty;
var ActivityFeed_defProps = Object.defineProperties;
var ActivityFeed_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ActivityFeed_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ActivityFeed_hasOwnProp = Object.prototype.hasOwnProperty;
var ActivityFeed_propIsEnum = Object.prototype.propertyIsEnumerable;
var ActivityFeed_defNormalProp = (obj, key, value) => key in obj ? ActivityFeed_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ActivityFeed_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ActivityFeed_hasOwnProp.call(b, prop))
      ActivityFeed_defNormalProp(a, prop, b[prop]);
  if (ActivityFeed_getOwnPropSymbols)
    for (var prop of ActivityFeed_getOwnPropSymbols(b)) {
      if (ActivityFeed_propIsEnum.call(b, prop))
        ActivityFeed_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ActivityFeed_spreadProps = (a, b) => ActivityFeed_defProps(a, ActivityFeed_getOwnPropDescs(b));
































const ActivityFeed_baseClass = "activity-feed";
const DEFAULT_PAGE_SIZE = 8;
const generateDateFilter = (dateFilter) => {
  const startDate = /* @__PURE__ */ new Date();
  const endDate = /* @__PURE__ */ new Date();
  switch (dateFilter) {
    case "all":
      return {
        startDate: "",
        endDate: ""
      };
    case "today":
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
      break;
    case "yesterday":
      startDate.setDate(startDate.getDate() - 1);
      startDate.setHours(0, 0, 0, 0);
      endDate.setDate(endDate.getDate() - 1);
      endDate.setHours(23, 59, 59, 999);
      break;
    case "7d":
      startDate.setDate(startDate.getDate() - 7);
      break;
    case "30d":
      startDate.setDate(startDate.getDate() - 30);
      break;
    case "3m":
      startDate.setMonth(startDate.getMonth() - 3);
      break;
    case "12m":
      startDate.setMonth(startDate.getMonth() - 12);
      break;
    default:
      break;
  }
  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  };
};
const ActivityFeed = ({
  setShowActivityFeedTitle,
  setRefetchActivities,
  isPremiumTier,
  router
}) => {
  const [pageIndex, setPageIndex] = (0,react.useState)(0);
  const [showShowQueryModal, setShowShowQueryModal] = (0,react.useState)(false);
  const [showScriptDetailsModal, setShowScriptDetailsModal] = (0,react.useState)(false);
  const [
    packageInstallDetails,
    setPackageInstallDetails
  ] = (0,react.useState)(null);
  const [
    scriptPackageDetails,
    setScriptPackageDetails
  ] = (0,react.useState)(null);
  const [
    ipaPackageInstallDetails,
    setIpaPackageInstallDetails
  ] = (0,react.useState)(null);
  const [
    packageUninstallDetails,
    setPackageUninstallDetails
  ] = (0,react.useState)(null);
  const [
    vppInstallDetails,
    setVppInstallDetails
  ] = (0,react.useState)(null);
  const [
    activityAutomationDetails,
    setActivityAutomationDetails
  ] = (0,react.useState)(null);
  const [
    softwareDetails,
    setSoftwareDetails
  ] = (0,react.useState)(null);
  const [
    appStoreDetails,
    setAppStoreDetails
  ] = (0,react.useState)(null);
  const [
    enrollmentProfileFailedDetails,
    setEnrollmentProfileFailedDetails
  ] = (0,react.useState)(null);
  const [
    enrollmentRejectedDetails,
    setEnrollmentRejectedDetails
  ] = (0,react.useState)(
    null
  );
  const [mdmCommandActivityDetails, setMdmCommandActivityDetails] = (0,react.useState)(null);
  const [
    notifyBeforePatchingDetails,
    setNotifyBeforePatchingDetails
  ] = (0,react.useState)(null);
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [createdAtDirection, setCreatedAtDirection] = (0,react.useState)("desc");
  const [dateFilter, setDateFilter] = (0,react.useState)("all");
  const [typeFilter, setTypeFilter] = (0,react.useState)([""]);
  const queryShown = (0,react.useRef)("");
  const queryImpact = (0,react.useRef)(void 0);
  const scriptExecutionId = (0,react.useRef)("");
  const { startDate, endDate } = (0,react.useMemo)(() => generateDateFilter(dateFilter), [
    dateFilter
  ]);
  const {
    data: activitiesData,
    error: errorActivities,
    isFetching: isFetchingActivities,
    refetch
  } = (0,es.useQuery)(
    [
      {
        scope: "activities",
        pageIndex,
        perPage: DEFAULT_PAGE_SIZE,
        query: searchQuery,
        orderDirection: createdAtDirection,
        startDate,
        endDate,
        typeFilter
      }
    ],
    ({
      queryKey: [
        {
          pageIndex: page,
          perPage,
          query,
          orderDirection,
          startDate: queryStartDate,
          endDate: queryEndDate,
          typeFilter: queryTypeFilter
        }
      ]
    }) => {
      return entities_activities/* default */.A.loadNext(
        page,
        perPage,
        query,
        orderDirection,
        queryStartDate,
        queryEndDate,
        queryTypeFilter
      );
    },
    {
      keepPreviousData: true,
      staleTime: 5e3,
      onSuccess: () => {
        setShowActivityFeedTitle(true);
      },
      onError: () => {
        setShowActivityFeedTitle(true);
      }
    }
  );
  setRefetchActivities(refetch);
  const onLoadPrevious = () => {
    setPageIndex(pageIndex - 1);
  };
  const onLoadNext = () => {
    setPageIndex(pageIndex + 1);
  };
  const handleDetailsClick = ({
    type,
    details,
    created_at,
    actor_full_name,
    fleet_initiated
  }) => {
    var _a, _b;
    switch (type) {
      case interfaces_activity/* ActivityType */.M.LiveQuery:
        queryShown.current = (_a = details == null ? void 0 : details.query_sql) != null ? _a : "";
        queryImpact.current = (details == null ? void 0 : details.stats) ? (0,utilities_helpers/* getPerformanceImpactDescription */.Hv)(details.stats) : void 0;
        setShowShowQueryModal(true);
        break;
      case interfaces_activity/* ActivityType */.M.RanScript:
        scriptExecutionId.current = (_b = details == null ? void 0 : details.script_execution_id) != null ? _b : "";
        setShowScriptDetailsModal(true);
        break;
      case interfaces_activity/* ActivityType */.M.InstalledSoftware:
        if (software/* SCRIPT_PACKAGE_SOURCES */.i0.includes((details == null ? void 0 : details.source) || "")) {
          setScriptPackageDetails(ActivityFeed_spreadValues({}, details));
        } else {
          (details == null ? void 0 : details.command_uuid) ? setIpaPackageInstallDetails(ActivityFeed_spreadProps(ActivityFeed_spreadValues({}, details), {
            actor_full_name,
            fleet_initiated
          })) : setPackageInstallDetails(ActivityFeed_spreadValues({}, details));
        }
        break;
      case interfaces_activity/* ActivityType */.M.UninstalledSoftware:
        setPackageUninstallDetails(ActivityFeed_spreadProps(ActivityFeed_spreadValues({}, details), {
          softwareName: (0,helpers/* getDisplayedSoftwareName */.Yd)(
            details == null ? void 0 : details.software_title,
            details == null ? void 0 : details.software_display_name
          ),
          uninstallStatus: (0,software/* resolveUninstallStatus */.J0)(details == null ? void 0 : details.status),
          scriptExecutionId: (details == null ? void 0 : details.script_execution_id) || "",
          hostDisplayName: details == null ? void 0 : details.host_display_name
        }));
        break;
      case interfaces_activity/* ActivityType */.M.InstalledAppStoreApp:
        setVppInstallDetails(ActivityFeed_spreadProps(ActivityFeed_spreadValues({}, details), { actor_full_name, fleet_initiated }));
        break;
      case interfaces_activity/* ActivityType */.M.EnabledActivityAutomations:
      case interfaces_activity/* ActivityType */.M.EditedActivityAutomations:
        setActivityAutomationDetails(ActivityFeed_spreadValues({}, details));
        break;
      case interfaces_activity/* ActivityType */.M.AddedSoftware:
      case interfaces_activity/* ActivityType */.M.EditedSoftware:
      case interfaces_activity/* ActivityType */.M.DeletedSoftware:
        setSoftwareDetails(ActivityFeed_spreadValues({}, details));
        break;
      case interfaces_activity/* ActivityType */.M.AddedAppStoreApp:
      case interfaces_activity/* ActivityType */.M.EditedAppStoreApp:
      case interfaces_activity/* ActivityType */.M.DeletedAppStoreApp:
        setAppStoreDetails(ActivityFeed_spreadValues({}, details));
        break;
      case interfaces_activity/* ActivityType */.M.RanScriptBatch:
      case interfaces_activity/* ActivityType */.M.CanceledScriptBatch:
        router.push(
          paths/* default */.A.CONTROLS_SCRIPTS_BATCH_DETAILS(
            (details == null ? void 0 : details.batch_execution_id) || ""
          )
        );
        break;
      case interfaces_activity/* ActivityType */.M.FailedEnrollmentProfileRenewal:
        setEnrollmentProfileFailedDetails({
          command: {
            command_uuid: (details == null ? void 0 : details.command_uuid) || ""
          }
        });
        break;
      case interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching:
        setNotifyBeforePatchingDetails(ActivityFeed_spreadValues({}, details));
        break;
      case interfaces_activity/* ActivityType */.M.HostEnrollmentRejected:
        setEnrollmentRejectedDetails({
          hostDisplayName: details == null ? void 0 : details.host_display_name,
          hostSerial: details == null ? void 0 : details.host_serial,
          reason: details == null ? void 0 : details.reason,
          createdAt: created_at
        });
        break;
      case interfaces_activity/* ActivityType */.M.RanCustomMdmCommand: {
        if (!(details == null ? void 0 : details.command_uuid)) {
          break;
        }
        setMdmCommandActivityDetails({
          command_uuid: details.command_uuid,
          host_uuid: details == null ? void 0 : details.host_uuid,
          actor_full_name,
          host_display_name: details == null ? void 0 : details.host_display_name,
          request_type: details == null ? void 0 : details.request_type
        });
        break;
      }
      default:
        break;
    }
  };
  const renderError = () => {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" });
  };
  const renderNoActivities = () => {
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        variant: "list",
        header: "No activities match the current criteria",
        info: "Try editing a report, updating your policies, or running a live report."
      }
    );
  };
  const opacity = isFetchingActivities ? { opacity: 0.4 } : { opacity: 1 };
  const activities = activitiesData == null ? void 0 : activitiesData.activities;
  const meta = activitiesData == null ? void 0 : activitiesData.meta;
  return /* @__PURE__ */ react.createElement("div", { className: ActivityFeed_baseClass }, /* @__PURE__ */ react.createElement(
    ActivityFeedFilters_ActivityFeedFilters,
    {
      searchQuery,
      typeFilter,
      dateFilter,
      createdAtDirection,
      setSearchQuery,
      setTypeFilter,
      setDateFilter,
      setCreatedAtDirection,
      setPageIndex
    }
  ), errorActivities && renderError(), !errorActivities && !isFetchingActivities && (0,lodash.isEmpty)(activities) ? renderNoActivities() : /* @__PURE__ */ react.createElement(react.Fragment, null, isFetchingActivities && /* @__PURE__ */ react.createElement("div", { className: "spinner" }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)), /* @__PURE__ */ react.createElement("div", { style: opacity }, activities == null ? void 0 : activities.map((activity) => /* @__PURE__ */ react.createElement(
    GlobalActivityItem_GlobalActivityItem,
    {
      activity,
      isPremiumTier,
      onDetailsClick: handleDetailsClick,
      key: activity.id
    }
  )))), !errorActivities && (!(0,lodash.isEmpty)(activities) || (0,lodash.isEmpty)(activities) && pageIndex > 0) && /* @__PURE__ */ react.createElement(
    Pagination/* default */.A,
    {
      disablePrev: isFetchingActivities || !(meta == null ? void 0 : meta.has_previous_results),
      disableNext: isFetchingActivities || !(meta == null ? void 0 : meta.has_next_results),
      hidePagination: !isFetchingActivities && !(meta == null ? void 0 : meta.has_previous_results) && !(meta == null ? void 0 : meta.has_next_results),
      onPrevPage: onLoadPrevious,
      onNextPage: onLoadNext
    }
  ), showShowQueryModal && /* @__PURE__ */ react.createElement(
    ShowQueryModal/* default */.A,
    {
      query: queryShown.current,
      impact: queryImpact.current,
      onCancel: () => setShowShowQueryModal(false)
    }
  ), showScriptDetailsModal && /* @__PURE__ */ react.createElement(
    RunScriptDetailsModal/* default */.A,
    {
      scriptExecutionId: scriptExecutionId.current,
      onCancel: () => setShowScriptDetailsModal(false)
    }
  ), packageInstallDetails && /* @__PURE__ */ react.createElement(
    SoftwareInstallDetailsModal/* SoftwareInstallDetailsModal */._m,
    {
      details: packageInstallDetails,
      onCancel: () => setPackageInstallDetails(null)
    }
  ), notifyBeforePatchingDetails && /* @__PURE__ */ react.createElement(
    NotifyBeforePatchingDetailsModal/* default */.A,
    {
      details: notifyBeforePatchingDetails,
      onCancel: () => setNotifyBeforePatchingDetails(null)
    }
  ), scriptPackageDetails && /* @__PURE__ */ react.createElement(
    SoftwareScriptDetailsModal/* default */.Ay,
    {
      details: scriptPackageDetails,
      onCancel: () => setScriptPackageDetails(null)
    }
  ), ipaPackageInstallDetails && /* @__PURE__ */ react.createElement(
    SoftwareIpaInstallDetailsModal/* default */.A,
    {
      details: {
        appName: (0,helpers/* getDisplayedSoftwareName */.Yd)(
          ipaPackageInstallDetails.software_title,
          ipaPackageInstallDetails.software_display_name
        ),
        fleetInstallStatus: ipaPackageInstallDetails.status || "pending_install",
        hostDisplayName: ipaPackageInstallDetails.host_display_name || "",
        commandUuid: ipaPackageInstallDetails.command_uuid || "",
        failureReason: ipaPackageInstallDetails.failure_reason,
        actorFullName: ipaPackageInstallDetails.actor_full_name,
        fleetInitiated: ipaPackageInstallDetails.fleet_initiated,
        selfService: ipaPackageInstallDetails.self_service
      },
      onCancel: () => setIpaPackageInstallDetails(null)
    }
  ), packageUninstallDetails && /* @__PURE__ */ react.createElement(
    SoftwareUninstallDetailsModal/* default */.Ay,
    ActivityFeed_spreadProps(ActivityFeed_spreadValues({}, packageUninstallDetails), {
      hostDisplayName: packageUninstallDetails.hostDisplayName || "",
      onCancel: () => setPackageUninstallDetails(null)
    })
  ), vppInstallDetails && /* @__PURE__ */ react.createElement(
    VppInstallDetailsModal/* default */.A,
    {
      details: {
        appName: (0,helpers/* getDisplayedSoftwareName */.Yd)(
          vppInstallDetails.software_title,
          vppInstallDetails.software_display_name
        ),
        fleetInstallStatus: vppInstallDetails.status || "pending_install",
        hostDisplayName: vppInstallDetails.host_display_name || "",
        commandUuid: vppInstallDetails.command_uuid || "",
        platform: vppInstallDetails.host_platform,
        failureReason: vppInstallDetails.failure_reason,
        actorFullName: vppInstallDetails.actor_full_name,
        fleetInitiated: vppInstallDetails.fleet_initiated,
        selfService: vppInstallDetails.self_service
      },
      onCancel: () => setVppInstallDetails(null)
    }
  ), activityAutomationDetails && /* @__PURE__ */ react.createElement(
    ActivityAutomationDetailsModal_ActivityAutomationDetailsModal,
    {
      details: activityAutomationDetails,
      onCancel: () => setActivityAutomationDetails(null)
    }
  ), softwareDetails && /* @__PURE__ */ react.createElement(
    LibrarySoftwareDetailsModal_LibrarySoftwareDetailsModal,
    {
      details: softwareDetails,
      onCancel: () => setSoftwareDetails(null)
    }
  ), appStoreDetails && /* @__PURE__ */ react.createElement(
    AppStoreDetailsModal_AppStoreDetailsModal,
    {
      details: appStoreDetails,
      onCancel: () => setAppStoreDetails(null)
    }
  ), enrollmentProfileFailedDetails && /* @__PURE__ */ react.createElement(
    FailedEnrollmentProfileModal/* default */.A,
    {
      command: enrollmentProfileFailedDetails.command,
      onDone: () => setEnrollmentProfileFailedDetails(null)
    }
  ), enrollmentRejectedDetails && /* @__PURE__ */ react.createElement(
    EnrollmentAttemptDetailsModal/* default */.A,
    {
      hostDisplayName: enrollmentRejectedDetails.hostDisplayName,
      reason: enrollmentRejectedDetails.reason,
      createdAt: enrollmentRejectedDetails.createdAt,
      onDone: () => setEnrollmentRejectedDetails(null)
    }
  ), !!mdmCommandActivityDetails && /* @__PURE__ */ react.createElement(
    CommandDetailsModal/* default */.Ay,
    {
      command: mdmCommandActivityDetails,
      contentBody: (cls, result) => {
        const isDeleted = result.status === "Deleted";
        const isPending = (0,CommandDetailsModal/* getIconName */.RU)(result.status) === "pending-outline";
        const cmdDisplayName = (0,activityHelpers/* getMdmCommandDisplayName */.tx)(
          isDeleted ? mdmCommandActivityDetails.request_type : result.request_type
        );
        const timeAgoText = result.updated_at ? ` (${(0,date_format/* timeAgo */.fF)(new Date(result.updated_at), {
          addSuffix: true
        })})` : "";
        if (isDeleted) {
          const {
            actor_full_name: actorText,
            host_display_name: hostText
          } = mdmCommandActivityDetails;
          return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
            IconStatusMessage/* default */.A,
            {
              className: `${cls}__status-message`,
              iconName: "info-outline",
              message: /* @__PURE__ */ react.createElement("span", null, actorText && /* @__PURE__ */ react.createElement("b", null, actorText), actorText ? " ran " : "Ran ", (0,activityHelpers/* formatMdmCommandNameForActivityItem */.T7)(
                mdmCommandActivityDetails.request_type
              ), " on ", hostText ? /* @__PURE__ */ react.createElement("b", null, hostText) : "this host", ".")
            }
          ), /* @__PURE__ */ react.createElement("div", null, "This command has been deleted."));
        }
        return /* @__PURE__ */ react.createElement(
          IconStatusMessage/* default */.A,
          {
            className: `${cls}__status-message`,
            iconName: (0,CommandDetailsModal/* getIconName */.RU)(result.status),
            message: isPending ? /* @__PURE__ */ react.createElement("span", null, cmdDisplayName ? /* @__PURE__ */ react.createElement(react.Fragment, null, "The ", /* @__PURE__ */ react.createElement("b", null, cmdDisplayName), " custom MDM command") : "A custom MDM command", " is pending on ", /* @__PURE__ */ react.createElement("b", null, result.hostname), `${timeAgoText}.`) : /* @__PURE__ */ react.createElement("span", null, mdmCommandActivityDetails.actor_full_name && /* @__PURE__ */ react.createElement("b", null, mdmCommandActivityDetails.actor_full_name), ` ${(0,CommandDetailsModal/* getVerbForCommandStatus */.Gc)(result.status)} `, (0,activityHelpers/* formatMdmCommandNameForActivityItem */.T7)(result.request_type), " on ", /* @__PURE__ */ react.createElement("b", null, result.hostname), ".")
          }
        );
      },
      onDone: () => setMdmCommandActivityDetails(null)
    }
  ));
};
/* harmony default export */ var ActivityFeed_ActivityFeed = (ActivityFeed);

;// ./frontend/pages/DashboardPage/cards/ActivityFeed/index.ts



// EXTERNAL MODULE: ./node_modules/date-fns/parseISO.mjs
var parseISO = __webpack_require__(84929);
// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 5 modules
var format = __webpack_require__(54070);
// EXTERNAL MODULE: ./frontend/components/SeverityFilter/index.ts + 2 modules
var SeverityFilter = __webpack_require__(79456);
// EXTERNAL MODULE: ./frontend/services/entities/charts.ts
var entities_charts = __webpack_require__(33787);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./node_modules/use-debounce/dist/index.module.js
var index_module = __webpack_require__(81591);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/TooltipWrapper.tsx
var TooltipWrapper_TooltipWrapper = __webpack_require__(36709);
// EXTERNAL MODULE: ./frontend/services/entities/vulnerabilities.ts
var vulnerabilities = __webpack_require__(4514);
;// ./frontend/pages/DashboardPage/cards/ChartCard/ChartFilterModal/SoftwareFilters/SoftwareFilters.tsx













const SoftwareFilters_baseClass = "software-filters";
const PAGE_SIZE = 20;
const SEARCH_DEBOUNCE_MS = 300;
const SoftwareFilters = ({
  currentTeamId,
  categories,
  knownExploit,
  epssMin,
  epssMax,
  severityFilter,
  initialShowAdvanced = false,
  errors,
  excludeCVEs,
  setCategories,
  setKnownExploit,
  setEpssMin,
  setEpssMax,
  setSeverityFilter,
  setExcludeCVEs,
  onFieldBlur,
  onFieldFocus
}) => {
  var _a, _b, _c;
  const [showAdvanced, setShowAdvanced] = (0,react.useState)(initialShowAdvanced);
  const hasAdvancedError = !!(errors.epssMin || errors.epssMax || errors.cvssMin || errors.cvssMax);
  const advancedVisible = showAdvanced || hasAdvancedError;
  const [searchInput, setSearchInput] = (0,react.useState)("");
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [pageCount, setPageCount] = (0,react.useState)(1);
  const listRef = (0,react.useRef)(null);
  const excludedSet = new Set(excludeCVEs);
  const debouncedSetSearchQuery = (0,index_module/* useDebouncedCallback */.YQ)((value) => {
    setSearchQuery(value);
    setPageCount(1);
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, SEARCH_DEBOUNCE_MS);
  (0,react.useEffect)(() => {
    return () => debouncedSetSearchQuery.cancel();
  }, [debouncedSetSearchQuery]);
  const {
    data: vulnData,
    isLoading: isLoadingVulns,
    error: vulnsError
  } = (0,es.useQuery)(
    ["chartFilterCVEs", currentTeamId, searchQuery, pageCount],
    () => (0,vulnerabilities/* getVulnerabilities */.J)({
      teamId: currentTeamId,
      page: 0,
      per_page: pageCount * PAGE_SIZE,
      query: searchQuery || void 0
    }),
    // The CVE search UI lives entirely inside the Advanced section, so don't
    // fetch until it is on screen.
    { keepPreviousData: true, staleTime: 3e4, enabled: advancedVisible }
  );
  const cves = (_a = vulnData == null ? void 0 : vulnData.vulnerabilities) != null ? _a : [];
  const hasMore = (_c = (_b = vulnData == null ? void 0 : vulnData.meta) == null ? void 0 : _b.has_next_results) != null ? _c : false;
  const handleScroll = (0,react.useCallback)(() => {
    const el = listRef.current;
    if (!el || !hasMore || isLoadingVulns) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
      setPageCount((prev) => prev + 1);
    }
  }, [hasMore, isLoadingVulns]);
  const handleSearchChange = (0,react.useCallback)(
    (value) => {
      setSearchInput(value);
      debouncedSetSearchQuery(value);
    },
    [debouncedSetSearchQuery]
  );
  const toggleCategory = (value) => {
    if (categories.includes(value)) {
      setCategories(categories.filter((c) => c !== value));
    } else {
      setCategories([...categories, value]);
    }
  };
  const toggleCVE = (cve) => {
    if (excludedSet.has(cve)) {
      setExcludeCVEs(excludeCVEs.filter((c) => c !== cve));
    } else {
      setExcludeCVEs([...excludeCVEs, cve]);
    }
  };
  return /* @__PURE__ */ react.createElement("div", { className: SoftwareFilters_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__categories` }, charts/* CVE_SOFTWARE_CATEGORIES */.G1.map((cat) => /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      key: cat.value,
      name: `category-${cat.value}`,
      value: categories.includes(cat.value),
      onChange: () => toggleCategory(cat.value),
      helpText: cat.description || void 0
    },
    cat.label
  )), errors.categories && /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__categories-error`, role: "alert" }, errors.categories)), /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__kev` }, /* @__PURE__ */ react.createElement("h3", { className: `${SoftwareFilters_baseClass}__section-title` }, "CISA known exploit (KEV)"), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      name: "known-exploit",
      value: knownExploit,
      onChange: () => setKnownExploit(!knownExploit),
      helpText: "Software has vulnerabilities that have been actively exploited in the wild."
    },
    "Has known exploit"
  )), /* @__PURE__ */ react.createElement(
    RevealButton/* default */.A,
    {
      className: `${SoftwareFilters_baseClass}__advanced-toggle`,
      isShowing: advancedVisible,
      showText: "Advanced options",
      hideText: "Advanced options",
      caretPosition: "after",
      onClick: () => setShowAdvanced(!advancedVisible)
    }
  ), advancedVisible && /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__advanced` }, /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__epss` }, /* @__PURE__ */ react.createElement("h3", { className: `${SoftwareFilters_baseClass}__section-title` }, /* @__PURE__ */ react.createElement(
    TooltipWrapper_TooltipWrapper/* default */.A,
    {
      tooltipClass: `${SoftwareFilters_baseClass}__tooltip-text`,
      tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The probability that this vulnerability will be exploited in the next 30 days (EPSS probability). This data is reported by FIRST.org.")
    },
    "Probability of exploit"
  )), /* @__PURE__ */ react.createElement("p", { className: `${SoftwareFilters_baseClass}__section-help` }, "EPSS probabilities range from 0 to 100%."), /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__epss-inputs` }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Min",
      name: "epss-min",
      type: "number",
      value: epssMin,
      placeholder: "0",
      error: errors.epssMin,
      onChange: setEpssMin,
      onBlur: () => onFieldBlur("epssMin"),
      onFocus: () => onFieldFocus("epssMin")
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Max",
      name: "epss-max",
      type: "number",
      value: epssMax,
      placeholder: "100",
      error: errors.epssMax,
      onChange: setEpssMax,
      onBlur: () => onFieldBlur("epssMax"),
      onFocus: () => onFieldFocus("epssMax")
    }
  ))), /* @__PURE__ */ react.createElement(
    SeverityFilter/* default */.Ay,
    {
      severity: severityFilter.severity,
      minScore: severityFilter.minScore,
      maxScore: severityFilter.maxScore,
      onChange: setSeverityFilter,
      errors: { minScore: errors.cvssMin, maxScore: errors.cvssMax },
      onScoreBlur: (field) => onFieldBlur(field === "minScore" ? "cvssMin" : "cvssMax"),
      onScoreFocus: (field) => onFieldFocus(field === "minScore" ? "cvssMin" : "cvssMax")
    }
  ), /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__exclude-cves` }, /* @__PURE__ */ react.createElement("h3", { className: `${SoftwareFilters_baseClass}__section-title` }, "Exclude vulnerabilities (CVEs)"), /* @__PURE__ */ react.createElement(
    SearchField/* default */.A,
    {
      placeholder: "Search CVEs",
      defaultValue: searchInput,
      onChange: handleSearchChange
    }
  ), excludeCVEs.length > 0 && /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__pills` }, excludeCVEs.map((cve) => /* @__PURE__ */ react.createElement(
    "button",
    {
      key: cve,
      type: "button",
      className: `${SoftwareFilters_baseClass}__pill`,
      onClick: () => toggleCVE(cve)
    },
    cve,
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "close" })
  ))), /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${SoftwareFilters_baseClass}__results-list`,
      ref: listRef,
      onScroll: handleScroll
    },
    cves.map((vuln) => /* @__PURE__ */ react.createElement("div", { key: vuln.cve, className: `${SoftwareFilters_baseClass}__results-row` }, /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        name: `cve-${vuln.cve}`,
        value: excludedSet.has(vuln.cve),
        onChange: () => toggleCVE(vuln.cve)
      },
      vuln.cve
    ))),
    vulnsError && /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__results-status`, role: "alert" }, "Couldn't load CVEs. Please try again."),
    !vulnsError && isLoadingVulns && /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__results-status` }, "Loading..."),
    !vulnsError && !isLoadingVulns && cves.length === 0 && /* @__PURE__ */ react.createElement("div", { className: `${SoftwareFilters_baseClass}__results-status` }, "No matching CVEs.")
  ))));
};
/* harmony default export */ var SoftwareFilters_SoftwareFilters = (SoftwareFilters);

;// ./frontend/pages/DashboardPage/cards/ChartCard/ChartFilterModal/SoftwareFilters/index.ts



;// ./frontend/pages/DashboardPage/cards/ChartCard/ChartFilterModal/SoftwareFilters/helpers.ts


const EPSS_MIN_PCT = 0;
const EPSS_MAX_PCT = 100;
const EPSS_RANGE_HELP = `Enter a probability from ${EPSS_MIN_PCT} to ${EPSS_MAX_PCT}`;
const EPSS_RANGE_INVALID_MSG = "Enter a maximum probability at or above the minimum";
const NO_CATEGORIES_MSG = "Select at least one software category";
const getEpssError = (raw) => {
  if (raw.trim() === "") {
    return null;
  }
  const n = Number(raw);
  if (Number.isNaN(n) || n < EPSS_MIN_PCT || n > EPSS_MAX_PCT) {
    return EPSS_RANGE_HELP;
  }
  return null;
};
const isEpssRangeInvalid = (min, max) => {
  if (min.trim() === "" || max.trim() === "") {
    return false;
  }
  if (getEpssError(min) || getEpssError(max)) {
    return false;
  }
  return Number(min) > Number(max);
};
const isEpssActive = (min, max) => {
  const minActive = min.trim() !== "" && Number(min) > EPSS_MIN_PCT;
  const maxActive = max.trim() !== "" && Number(max) < EPSS_MAX_PCT;
  return minActive || maxActive;
};
const validateSoftwareFilters = ({
  categories,
  epssMin,
  epssMax,
  minScore,
  maxScore
}) => {
  const errors = {};
  if (categories.length === 0) {
    errors.categories = NO_CATEGORIES_MSG;
  }
  const epssMinError = getEpssError(epssMin);
  const epssMaxError = getEpssError(epssMax);
  if (epssMinError) errors.epssMin = epssMinError;
  if (epssMaxError) errors.epssMax = epssMaxError;
  if (!epssMinError && !epssMaxError && isEpssRangeInvalid(epssMin, epssMax)) {
    errors.epssMax = EPSS_RANGE_INVALID_MSG;
  }
  const severity = (0,SeverityFilter/* validateSeverityScores */.Jx)({ minScore, maxScore });
  if (severity.minScore) errors.cvssMin = severity.minScore;
  if (severity.maxScore) errors.cvssMax = severity.maxScore;
  return errors;
};

;// ./frontend/pages/DashboardPage/cards/ChartCard/ChartFilterModal/ChartFilterModal.tsx

var ChartFilterModal_defProp = Object.defineProperty;
var ChartFilterModal_defProps = Object.defineProperties;
var ChartFilterModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ChartFilterModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ChartFilterModal_hasOwnProp = Object.prototype.hasOwnProperty;
var ChartFilterModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var ChartFilterModal_defNormalProp = (obj, key, value) => key in obj ? ChartFilterModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ChartFilterModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ChartFilterModal_hasOwnProp.call(b, prop))
      ChartFilterModal_defNormalProp(a, prop, b[prop]);
  if (ChartFilterModal_getOwnPropSymbols)
    for (var prop of ChartFilterModal_getOwnPropSymbols(b)) {
      if (ChartFilterModal_propIsEnum.call(b, prop))
        ChartFilterModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ChartFilterModal_spreadProps = (a, b) => ChartFilterModal_defProps(a, ChartFilterModal_getOwnPropDescs(b));




















const ChartFilterModal_baseClass = "chart-filter-modal";
const HOSTS_TAB_INDEX = 0;
const SOFTWARE_TAB_INDEX = 1;
const PLATFORM_OPTIONS = [
  { label: "macOS", value: "darwin" },
  { label: "Windows", value: "windows" },
  { label: "Linux", value: "linux" },
  { label: "ChromeOS", value: "chrome" },
  { label: "iOS", value: "ios" },
  { label: "iPadOS", value: "ipados" },
  { label: "Android", value: "android" }
];
const ChartFilterModal_PAGE_SIZE = 20;
const ChartFilterModal_SEARCH_DEBOUNCE_MS = 300;
const ChartFilterModal = ({
  filters,
  currentTeamId,
  metric,
  initialTab = "hosts",
  initialShowAdvanced = false,
  onApply,
  onCancel
}) => {
  var _a;
  const isCVE = metric === "cve";
  const [activeTab, setActiveTab] = (0,react.useState)(
    initialTab === "software" ? SOFTWARE_TAB_INDEX : HOSTS_TAB_INDEX
  );
  const [softwareFilters, setSoftwareFilters] = (0,react.useState)(
    filters.softwareFilters
  );
  const [knownExploit, setKnownExploit] = (0,react.useState)(
    filters.knownExploit
  );
  const [epssMin, setEpssMin] = (0,react.useState)(filters.epssMin);
  const [epssMax, setEpssMax] = (0,react.useState)(filters.epssMax);
  const [severityFilter, setSeverityFilter] = (0,react.useState)({
    severity: filters.severity,
    minScore: filters.cvssMin,
    maxScore: filters.cvssMax
  });
  const [excludeCVEs, setExcludeCVEs] = (0,react.useState)(filters.excludeCVEs);
  const [softwareErrors, setSoftwareErrors] = (0,react.useState)(
    {}
  );
  const dirtyFields = (0,react.useRef)(/* @__PURE__ */ new Set());
  const [selectedLabelIDs, setSelectedLabelIDs] = (0,react.useState)(
    filters.labelIDs
  );
  const [selectedPlatforms, setSelectedPlatforms] = (0,react.useState)(
    filters.platforms
  );
  const [hostFilterMode, setHostFilterMode] = (0,react.useState)(
    filters.hostFilterMode === "none" ? "exclude" : filters.hostFilterMode
  );
  const [selectedHosts, setSelectedHosts] = (0,react.useState)(
    filters.selectedHosts
  );
  const [searchInput, setSearchInput] = (0,react.useState)("");
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [pageCount, setPageCount] = (0,react.useState)(1);
  const [searchFieldKey, setSearchFieldKey] = (0,react.useState)(0);
  const listRef = (0,react.useRef)(null);
  const selectedHostIds = new Set(selectedHosts.map((h) => h.id));
  const debouncedSetSearchQuery = (0,index_module/* useDebouncedCallback */.YQ)((value) => {
    setSearchQuery(value);
    setPageCount(1);
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, ChartFilterModal_SEARCH_DEBOUNCE_MS);
  (0,react.useEffect)(() => {
    return () => debouncedSetSearchQuery.cancel();
  }, [debouncedSetSearchQuery]);
  const {
    data: hostsData,
    isLoading: isLoadingHosts,
    error: hostsError
  } = (0,es.useQuery)(
    ["chartFilterHosts", currentTeamId, searchQuery, pageCount],
    () => entities_hosts/* default */.A.loadHosts({
      page: 0,
      perPage: pageCount * ChartFilterModal_PAGE_SIZE,
      teamId: currentTeamId,
      globalFilter: searchQuery || void 0,
      sortBy: [{ key: "display_name", direction: "asc" }]
    }),
    {
      keepPreviousData: true,
      staleTime: 3e4
    }
  );
  const hosts = (_a = hostsData == null ? void 0 : hostsData.hosts) != null ? _a : [];
  const hasMore = hosts.length === pageCount * ChartFilterModal_PAGE_SIZE;
  const handleScroll = (0,react.useCallback)(() => {
    const el = listRef.current;
    if (!el || !hasMore || isLoadingHosts) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
      setPageCount((prev) => prev + 1);
    }
  }, [hasMore, isLoadingHosts]);
  const handleSearchChange = (0,react.useCallback)(
    (value) => {
      setSearchInput(value);
      debouncedSetSearchQuery(value);
    },
    [debouncedSetSearchQuery]
  );
  const { data: labels } = (0,es.useQuery)(
    ["labelsSummary", currentTeamId],
    () => entities_labels/* default */.Ay.summary(currentTeamId != null ? currentTeamId : null).then((res) => res.labels),
    ChartFilterModal_spreadProps(ChartFilterModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      staleTime: 6e4
    })
  );
  const labelOptions = (labels || []).filter((l) => l.label_type !== "builtin").map((l) => ({
    label: l.name,
    value: l.id
  }));
  const softwareFormData = {
    categories: softwareFilters,
    epssMin,
    epssMax,
    minScore: severityFilter.minScore,
    maxScore: severityFilter.maxScore
  };
  const markDirty = (field) => {
    dirtyFields.current.add(field);
  };
  const onFieldBlur = (field) => {
    if (!dirtyFields.current.has(field)) {
      return;
    }
    const { [field]: fieldError } = validateSoftwareFilters(softwareFormData);
    setSoftwareErrors((prev) => ChartFilterModal_spreadProps(ChartFilterModal_spreadValues({}, prev), { [field]: fieldError }));
  };
  const onFieldFocus = (field) => {
    setSoftwareErrors(
      (prev) => prev[field] ? ChartFilterModal_spreadProps(ChartFilterModal_spreadValues({}, prev), { [field]: void 0 }) : prev
    );
  };
  const onChangeEpssMin = (value) => {
    markDirty("epssMin");
    setEpssMin(value);
  };
  const onChangeEpssMax = (value) => {
    markDirty("epssMax");
    setEpssMax(value);
  };
  const onChangeSeverityFilter = (next) => {
    if (next.severity === severityFilter.severity) {
      if (next.minScore !== severityFilter.minScore) markDirty("cvssMin");
      if (next.maxScore !== severityFilter.maxScore) markDirty("cvssMax");
    } else {
      setSoftwareErrors((prev) => ChartFilterModal_spreadProps(ChartFilterModal_spreadValues({}, prev), {
        cvssMin: void 0,
        cvssMax: void 0
      }));
    }
    setSeverityFilter(next);
  };
  const onChangeCategories = (next) => {
    markDirty("categories");
    setSoftwareErrors((prev) => ChartFilterModal_spreadProps(ChartFilterModal_spreadValues({}, prev), {
      categories: next.length === 0 ? NO_CATEGORIES_MSG : void 0
    }));
    setSoftwareFilters(next);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const focused = document.activeElement;
    if ((focused == null ? void 0 : focused.tagName) === "INPUT" && focused.type === "text") {
      return;
    }
    if (isCVE) {
      const errors = validateSoftwareFilters(softwareFormData);
      if (Object.keys(errors).length > 0) {
        setSoftwareErrors(errors);
        setActiveTab(SOFTWARE_TAB_INDEX);
        return;
      }
    }
    onApply({
      labelIDs: selectedLabelIDs,
      platforms: selectedPlatforms,
      hostFilterMode,
      selectedHosts,
      softwareFilters,
      knownExploit,
      epssMin,
      epssMax,
      severity: severityFilter.severity,
      cvssMin: severityFilter.minScore,
      cvssMax: severityFilter.maxScore,
      excludeCVEs
    });
  };
  const handleClear = () => {
    setSelectedLabelIDs([]);
    setSelectedPlatforms([]);
    setHostFilterMode("none");
    setSelectedHosts([]);
    setSearchInput("");
    setSearchQuery("");
    setPageCount(1);
    setSearchFieldKey((k) => k + 1);
    debouncedSetSearchQuery.cancel();
    setSoftwareFilters([...charts/* ALL_CVE_SOFTWARE_CATEGORY_VALUES */.hs]);
    setKnownExploit(false);
    setEpssMin("");
    setEpssMax("");
    setSeverityFilter({
      severity: SeverityFilter/* ANY_SEVERITY_VALUE */.j,
      minScore: "",
      maxScore: ""
    });
    setExcludeCVEs([]);
    setSoftwareErrors({});
    dirtyFields.current.clear();
  };
  const handleTabChange = (index) => {
    const mode = index === 0 ? "exclude" : "include";
    setHostFilterMode(mode);
  };
  const toggleHost = (host) => {
    if (selectedHostIds.has(host.id)) {
      setSelectedHosts((prev) => prev.filter((h) => h.id !== host.id));
    } else {
      setSelectedHosts((prev) => [...prev, host]);
    }
  };
  const removeHost = (hostId) => {
    setSelectedHosts((prev) => prev.filter((h) => h.id !== hostId));
  };
  const softwareFiltersActive = isCVE && (softwareFilters.length !== charts/* ALL_CVE_SOFTWARE_CATEGORY_VALUES */.hs.length || knownExploit || isEpssActive(epssMin, epssMax) || !(0,lodash.isEmpty)((0,SeverityFilter/* severityFilters */.$l)(severityFilter)) || excludeCVEs.length > 0);
  const hasFilters = selectedLabelIDs.length > 0 || selectedPlatforms.length > 0 || selectedHosts.length > 0 || softwareFiltersActive;
  const tabIndex = hostFilterMode === "include" ? 1 : 0;
  const renderHostSearch = () => /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__host-search` }, /* @__PURE__ */ react.createElement(
    SearchField/* default */.A,
    {
      key: searchFieldKey,
      placeholder: "Search name, hostname, or serial number",
      defaultValue: searchInput,
      onChange: handleSearchChange
    }
  ), selectedHosts.length > 0 && /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__pills` }, selectedHosts.map((host) => /* @__PURE__ */ react.createElement(
    "button",
    {
      key: host.id,
      type: "button",
      className: `${ChartFilterModal_baseClass}__pill`,
      onClick: () => removeHost(host.id)
    },
    host.display_name,
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "close" })
  ))), /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${ChartFilterModal_baseClass}__results-list`,
      ref: listRef,
      onScroll: handleScroll
    },
    hosts.map((host) => /* @__PURE__ */ react.createElement("div", { key: host.id, className: `${ChartFilterModal_baseClass}__results-row` }, /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        name: `host-${host.id}`,
        value: selectedHostIds.has(host.id),
        onChange: () => toggleHost(host)
      },
      host.display_name
    ))),
    hostsError && /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__results-status`, role: "alert" }, "Couldn't load hosts. Please try again."),
    !hostsError && isLoadingHosts && /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__results-status` }, "Loading..."),
    !hostsError && !isLoadingHosts && hosts.length === 0 && /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__results-status` }, "No matching hosts.")
  ));
  const renderHostFilters = () => /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__form` }, /* @__PURE__ */ react.createElement(
    Dropdown/* default */.A,
    {
      label: "Labels",
      name: "labels",
      options: labelOptions,
      value: selectedLabelIDs.join(","),
      onChange: (value) => {
        if (!value) {
          setSelectedLabelIDs([]);
        } else {
          setSelectedLabelIDs(value.split(",").map(Number));
        }
      },
      multi: true,
      placeholder: "All labels",
      searchable: true,
      clearable: true
    }
  ), /* @__PURE__ */ react.createElement(
    Dropdown/* default */.A,
    {
      label: "Platforms",
      name: "platforms",
      options: PLATFORM_OPTIONS,
      value: selectedPlatforms.join(","),
      onChange: (value) => {
        if (!value) {
          setSelectedPlatforms([]);
        } else {
          setSelectedPlatforms(value.split(","));
        }
      },
      multi: true,
      placeholder: "All platforms",
      searchable: false,
      clearable: true
    }
  ), /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: tabIndex, onSelect: handleTabChange }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Exclude hosts")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Specific hosts"))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, tabIndex === 0 && renderHostSearch()), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, tabIndex === 1 && renderHostSearch()))));
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Settings", onExit: onCancel, className: ChartFilterModal_baseClass }, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, isCVE ? /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: activeTab, onSelect: setActiveTab }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Hosts")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Software"))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderHostFilters()), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__form` }, /* @__PURE__ */ react.createElement(
    SoftwareFilters_SoftwareFilters,
    {
      currentTeamId,
      categories: softwareFilters,
      knownExploit,
      epssMin,
      epssMax,
      severityFilter,
      initialShowAdvanced,
      errors: softwareErrors,
      excludeCVEs,
      setCategories: onChangeCategories,
      setKnownExploit,
      setEpssMin: onChangeEpssMin,
      setEpssMax: onChangeEpssMax,
      setSeverityFilter: onChangeSeverityFilter,
      setExcludeCVEs,
      onFieldBlur,
      onFieldFocus
    }
  ))))) : renderHostFilters(), /* @__PURE__ */ react.createElement("div", { className: `${ChartFilterModal_baseClass}__btn-wrap` }, hasFilters && /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: handleClear }, "Clear all"), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", variant: "default" }, "Apply"), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel")))));
};
/* harmony default export */ var ChartFilterModal_ChartFilterModal = (ChartFilterModal);

;// ./frontend/pages/DashboardPage/cards/ChartCard/ChartFilterModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/ChartCard/CheckerboardViz.tsx
var CheckerboardViz = __webpack_require__(76199);
// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/ChartCard/DataCollectionDisabledState.tsx
var DataCollectionDisabledState = __webpack_require__(9086);
;// ./frontend/pages/DashboardPage/cards/ChartCard/helpers.ts

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





const DEFAULT_CHART_FILTERS = {
  labelIDs: [],
  platforms: [],
  hostFilterMode: "none",
  selectedHosts: [],
  softwareFilters: [...charts/* ALL_CVE_SOFTWARE_CATEGORY_VALUES */.hs],
  knownExploit: false,
  epssMin: "",
  epssMax: "",
  // The chart is filtered to critical severity by default. The bounds always
  // mirror the selection (see IChartFilterState), so they carry critical's.
  severity: "critical",
  cvssMin: "9",
  cvssMax: "10",
  excludeCVEs: []
};
const seedSeverity = (defaults) => {
  var _a, _b, _c, _d;
  if (defaults.cvss_min === void 0 && defaults.cvss_max === void 0) {
    return {
      severity: DEFAULT_CHART_FILTERS.severity,
      cvssMin: DEFAULT_CHART_FILTERS.cvssMin,
      cvssMax: DEFAULT_CHART_FILTERS.cvssMax
    };
  }
  const severity = (0,SeverityFilter/* severityForRange */.S1)(defaults.cvss_min, defaults.cvss_max);
  if (severity === SeverityFilter/* ANY_SEVERITY_VALUE */.j) {
    return { severity, cvssMin: "", cvssMax: "" };
  }
  const band = (0,SeverityFilter/* getSeverityBand */.pP)(severity);
  return {
    severity,
    cvssMin: String((_b = (_a = band == null ? void 0 : band.min) != null ? _a : defaults.cvss_min) != null ? _b : 0),
    cvssMax: String((_d = (_c = band == null ? void 0 : band.max) != null ? _c : defaults.cvss_max) != null ? _d : 10)
  };
};
const buildInitialChartFilters = (defaults) => {
  if (!defaults) return DEFAULT_CHART_FILTERS;
  return helpers_spreadProps(helpers_spreadValues(helpers_spreadValues({}, DEFAULT_CHART_FILTERS), seedSeverity(defaults)), {
    softwareFilters: defaults.software_filters !== void 0 ? [...defaults.software_filters] : DEFAULT_CHART_FILTERS.softwareFilters,
    knownExploit: defaults.has_known_exploit !== void 0 ? defaults.has_known_exploit : DEFAULT_CHART_FILTERS.knownExploit,
    epssMin: defaults.epss_min !== void 0 ? String(defaults.epss_min) : DEFAULT_CHART_FILTERS.epssMin,
    epssMax: defaults.epss_max !== void 0 ? String(defaults.epss_max) : DEFAULT_CHART_FILTERS.epssMax,
    excludeCVEs: defaults.exclude_vulnerabilities !== void 0 ? [...defaults.exclude_vulnerabilities] : DEFAULT_CHART_FILTERS.excludeCVEs
  });
};
const severitySelection = (filters) => ({
  severity: filters.severity,
  minScore: filters.cvssMin,
  maxScore: filters.cvssMax
});
const severityDefaultSentence = (filters) => {
  if ((0,lodash.isEmpty)((0,SeverityFilter/* severityFilters */.$l)(severitySelection(filters)))) return null;
  const filteredTo = (0,SeverityFilter/* getSeverityBand */.pP)(filters.severity) ? filters.severity : `a CVSS score of ${filters.cvssMin || 0} to ${filters.cvssMax || 10}`;
  return `Severity is filtered to ${filteredTo} by default.`;
};
const hasActiveHostFilters = (filters) => {
  const hasHostFilter = filters.hostFilterMode !== "none" && filters.selectedHosts.length > 0;
  return filters.labelIDs.length > 0 || filters.platforms.length > 0 || hasHostFilter;
};
const hasActiveSoftwareFilters = (filters) => filters.softwareFilters.length !== charts/* ALL_CVE_SOFTWARE_CATEGORY_VALUES */.hs.length || filters.knownExploit || isEpssActive(filters.epssMin, filters.epssMax) || !(0,lodash.isEmpty)((0,SeverityFilter/* severityFilters */.$l)(severitySelection(filters))) || filters.excludeCVEs.length > 0;
const formatList = (items) => {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
};
const PLATFORM_LABELS = interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc;
const hostFilterLines = (filters) => {
  const lines = [];
  if (filters.platforms.length > 0) {
    lines.push(
      formatList(filters.platforms.map((p) => {
        var _a;
        return (_a = PLATFORM_LABELS[p]) != null ? _a : p;
      }))
    );
  }
  if (filters.labelIDs.length > 0) lines.push("Labels");
  if (filters.hostFilterMode === "include" && filters.selectedHosts.length > 0) {
    lines.push("Specific hosts");
  }
  if (filters.hostFilterMode === "exclude" && filters.selectedHosts.length > 0) {
    lines.push("Excluded hosts");
  }
  return lines;
};
const softwareFilterLines = (filters) => {
  const lines = [];
  const categoriesNarrowed = filters.softwareFilters.length !== charts/* ALL_CVE_SOFTWARE_CATEGORY_VALUES */.hs.length;
  const cats = charts/* CVE_SOFTWARE_CATEGORIES */.G1.filter(
    (c) => filters.softwareFilters.includes(c.value)
  ).map((c) => c.tooltipLabel);
  if (categoriesNarrowed) {
    lines.push(cats.length ? formatList(cats) : "No software categories");
  }
  if (filters.knownExploit) lines.push("Known exploits only");
  const selection = severitySelection(filters);
  if (!(0,lodash.isEmpty)((0,SeverityFilter/* severityFilters */.$l)(selection))) {
    lines.push(`Severity: ${(0,SeverityFilter/* severityValueLabel */.p$)(selection)}`);
  }
  if (isEpssActive(filters.epssMin, filters.epssMax) || filters.excludeCVEs.length > 0) {
    lines.push("Advanced filters");
  }
  return lines;
};

// EXTERNAL MODULE: ./node_modules/recharts/es6/component/ResponsiveContainer.js + 1 modules
var ResponsiveContainer = __webpack_require__(28482);
// EXTERNAL MODULE: ./node_modules/recharts/es6/chart/LineChart.js
var LineChart = __webpack_require__(45721);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/CartesianGrid.js
var CartesianGrid = __webpack_require__(69107);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/XAxis.js
var XAxis = __webpack_require__(77984);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/YAxis.js
var YAxis = __webpack_require__(23495);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/Tooltip.js + 11 modules
var Tooltip = __webpack_require__(90188);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Line.js + 5 modules
var Line = __webpack_require__(69786);
;// ./frontend/pages/DashboardPage/cards/ChartCard/LineChartViz.tsx




const LineChartViz_baseClass = "chart-card";
const LINE_STROKE = "var(--core-vibrant-blue)";
const LineChartViz = ({
  data,
  selectedDays
}) => {
  const formatXAxis = (0,react.useCallback)(
    (timestamp) => {
      try {
        const date = (0,parseISO/* parseISO */.H)(timestamp);
        return selectedDays === 1 ? (0,format/* format */.GP)(date, "ha") : (0,format/* format */.GP)(date, "MMM d");
      } catch (e) {
        return "";
      }
    },
    [selectedDays]
  );
  const formatYAxisTick = (val) => `${val}%`;
  const renderTooltip = (0,react.useCallback)((props) => {
    const { active, payload } = props;
    if (!active || !(payload == null ? void 0 : payload.length)) return null;
    const point = payload[0].payload;
    return /* @__PURE__ */ react.createElement("div", { className: `${LineChartViz_baseClass}__tooltip` }, /* @__PURE__ */ react.createElement("div", { className: `${LineChartViz_baseClass}__tooltip-label` }, point.label), /* @__PURE__ */ react.createElement("div", { className: `${LineChartViz_baseClass}__tooltip-value` }, point.percentage, "% (", point.value.toLocaleString(), " hosts)"));
  }, []);
  const tickInterval = Math.max(1, Math.floor(data.length / 8));
  return /* @__PURE__ */ react.createElement(ResponsiveContainer/* ResponsiveContainer */.u, { width: "100%", height: 280 }, /* @__PURE__ */ react.createElement(LineChart/* LineChart */.b, { data }, /* @__PURE__ */ react.createElement(CartesianGrid/* CartesianGrid */.d, { strokeDasharray: "3 3", vertical: false }), /* @__PURE__ */ react.createElement(
    XAxis/* XAxis */.W,
    {
      dataKey: "timestamp",
      tickFormatter: formatXAxis,
      interval: tickInterval,
      tick: { fontSize: 12 }
    }
  ), /* @__PURE__ */ react.createElement(
    YAxis/* YAxis */.h,
    {
      tick: { fontSize: 12 },
      width: 50,
      domain: [0, 100],
      tickFormatter: formatYAxisTick
    }
  ), /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.m, { content: renderTooltip }), /* @__PURE__ */ react.createElement(
    Line/* Line */.N1,
    {
      type: "monotone",
      dataKey: "percentage",
      stroke: LINE_STROKE,
      strokeWidth: 2,
      dot: false,
      activeDot: { r: 4 }
    }
  )));
};
/* harmony default export */ var ChartCard_LineChartViz = (LineChartViz);

;// ./frontend/pages/DashboardPage/cards/ChartCard/ChartCard.tsx

var ChartCard_defProp = Object.defineProperty;
var ChartCard_defProps = Object.defineProperties;
var ChartCard_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ChartCard_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ChartCard_hasOwnProp = Object.prototype.hasOwnProperty;
var ChartCard_propIsEnum = Object.prototype.propertyIsEnumerable;
var ChartCard_defNormalProp = (obj, key, value) => key in obj ? ChartCard_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ChartCard_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ChartCard_hasOwnProp.call(b, prop))
      ChartCard_defNormalProp(a, prop, b[prop]);
  if (ChartCard_getOwnPropSymbols)
    for (var prop of ChartCard_getOwnPropSymbols(b)) {
      if (ChartCard_propIsEnum.call(b, prop))
        ChartCard_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ChartCard_spreadProps = (a, b) => ChartCard_defProps(a, ChartCard_getOwnPropDescs(b));




















const ChartCard_baseClass = "chart-card";
const CHART_DAYS = 30;
const filterTooltip = (filters, isCVE) => {
  const hostLines = hostFilterLines(filters);
  const softwareLines = isCVE ? softwareFilterLines(filters) : [];
  const renderSection = (header, lines) => lines.length > 0 ? /* @__PURE__ */ react.createElement("div", { className: `${ChartCard_baseClass}__tooltip-section` }, /* @__PURE__ */ react.createElement("div", { className: `${ChartCard_baseClass}__tooltip-section-header` }, header), lines.map((line) => /* @__PURE__ */ react.createElement("div", { key: line, className: `${ChartCard_baseClass}__tooltip-section-line` }, line))) : null;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, renderSection("Hosts", hostLines), renderSection("Software", softwareLines));
};
const ChartCard = ({
  currentTeamId,
  historicalDataEnabled,
  filterDefaults
}) => {
  var _a;
  const [selectedMetric, setSelectedMetric] = (0,react.useState)("uptime");
  const [showFilterModal, setShowFilterModal] = (0,react.useState)(false);
  const [initialTab, setInitialTab] = (0,react.useState)("hosts");
  const [showAdvancedOnOpen, setShowAdvancedOnOpen] = (0,react.useState)(false);
  const initialChartFilters = (0,react.useMemo)(
    () => buildInitialChartFilters(filterDefaults),
    [filterDefaults]
  );
  const [chartFilters, setChartFilters] = (0,react.useState)(
    initialChartFilters
  );
  const openFilterModal = (tab = "hosts", showAdvanced = false) => {
    setInitialTab(tab);
    setShowAdvancedOnOpen(showAdvanced);
    setShowFilterModal(true);
  };
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const DATASETS = [
    {
      name: "uptime",
      label: "Hosts online",
      defaultChartType: "checkerboard",
      description: /* @__PURE__ */ react.createElement(react.Fragment, null, "The number of hosts detected online (checking in to Fleet) during a given hour.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "iOS/iPadOS hosts are online anytime they have power and an internet connection (including locked). macOS, Windows, and Linux hosts can be online when locked (lid closed), but less frequently than when the lid is open. Android hosts are never online when locked."),
      tooltipFormatter: ({ value }) => `${value.toLocaleString()} host${value === 1 ? "" : "s"} online`,
      relativeScale: true
    }
  ];
  const getDataset = (name) => DATASETS.find((ds) => ds.name === name) || DATASETS[0];
  if (isPremiumTier) {
    const severityDefault = severityDefaultSentence(initialChartFilters);
    DATASETS.push({
      name: "cve",
      label: "Vulnerability exposure",
      defaultChartType: "checkerboard",
      description: /* @__PURE__ */ react.createElement(react.Fragment, null, "The number of hosts with at least one vulnerability matching the chart's filters.", severityDefault && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), severityDefault)),
      tooltipFormatter: ({ value }) => `${value.toLocaleString()} host${value === 1 ? "" : "s"}`,
      theme: "red",
      relativeScale: true
    });
  }
  const DATASET_OPTIONS = DATASETS.map((ds) => ({
    label: ds.label,
    value: ds.name
  }));
  (0,react.useEffect)(() => {
    setChartFilters(initialChartFilters);
  }, [currentTeamId, initialChartFilters]);
  const currentDataset = getDataset(selectedMetric);
  const isCVE = currentDataset.name === "cve";
  const hostFiltersActive = hasActiveHostFilters(chartFilters);
  const softwareFiltersActive = isCVE && hasActiveSoftwareFilters(chartFilters);
  const filtersEdited = !(0,lodash.isEqual)(chartFilters, initialChartFilters);
  const anyFiltersActive = filtersEdited && (hostFiltersActive || softwareFiltersActive);
  const datasetConfigKey = charts/* DATASET_CONFIG_KEY */.ax[currentDataset.name];
  const datasetCollectionEnabled = datasetConfigKey === void 0 ? true : (_a = historicalDataEnabled == null ? void 0 : historicalDataEnabled[datasetConfigKey]) != null ? _a : true;
  const queryParams = (0,react.useMemo)(() => {
    const narrowsCategories = isCVE && chartFilters.softwareFilters.length !== charts/* ALL_CVE_SOFTWARE_CATEGORY_VALUES */.hs.length;
    const epssMinActive = isCVE && chartFilters.epssMin !== "" && Number(chartFilters.epssMin) > 0;
    const epssMaxActive = isCVE && chartFilters.epssMax !== "" && Number(chartFilters.epssMax) < 100;
    const severityBounds = isCVE ? (0,SeverityFilter/* severityFilters */.$l)(severitySelection(chartFilters)) : {};
    return {
      // Add an extra day to ensure we get the full # of calendar days
      // represented in the chart, regardless of timezone.
      days: CHART_DAYS + 1,
      tz_offset: (/* @__PURE__ */ new Date()).getTimezoneOffset(),
      fleet_id: currentTeamId,
      label_ids: chartFilters.labelIDs.length ? chartFilters.labelIDs.join(",") : void 0,
      platforms: chartFilters.platforms.length ? chartFilters.platforms.join(",") : void 0,
      include_host_ids: chartFilters.hostFilterMode === "include" && chartFilters.selectedHosts.length ? chartFilters.selectedHosts.map((h) => h.id).join(",") : void 0,
      exclude_host_ids: chartFilters.hostFilterMode === "exclude" && chartFilters.selectedHosts.length ? chartFilters.selectedHosts.map((h) => h.id).join(",") : void 0,
      software_filters: narrowsCategories ? chartFilters.softwareFilters.join(",") : void 0,
      has_known_exploit: isCVE && chartFilters.knownExploit ? true : void 0,
      epss_min: epssMinActive ? Number(chartFilters.epssMin) / 100 : void 0,
      epss_max: epssMaxActive ? Number(chartFilters.epssMax) / 100 : void 0,
      severity_min: severityBounds.min,
      severity_max: severityBounds.max,
      exclude_vulnerabilities: isCVE && chartFilters.excludeCVEs.length ? chartFilters.excludeCVEs.join(",") : void 0
    };
  }, [chartFilters, currentTeamId, isCVE]);
  const { data: chartData, isLoading, error } = (0,es.useQuery)(
    [{ scope: "chart", metric: selectedMetric, params: queryParams }],
    () => entities_charts/* default */.A.getChartData(selectedMetric, queryParams),
    ChartCard_spreadProps(ChartCard_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: datasetCollectionEnabled,
      staleTime: 3e5
      // 5 minutes
    })
  );
  const formattedData = (0,react.useMemo)(() => {
    if (!(chartData == null ? void 0 : chartData.data)) return [];
    const totalHosts = chartData.total_hosts;
    return chartData.data.map((point) => {
      const date = (0,parseISO/* parseISO */.H)(point.timestamp);
      return {
        timestamp: point.timestamp,
        label: (0,format/* format */.GP)(date, "MMM d, h:mm a"),
        value: point.value,
        percentage: totalHosts ? Math.round(point.value / totalHosts * 100) : 0,
        total: totalHosts
      };
    });
  }, [chartData]);
  const renderChart = () => {
    if (!datasetCollectionEnabled && datasetConfigKey !== void 0) {
      return /* @__PURE__ */ react.createElement(
        DataCollectionDisabledState/* default */.A,
        {
          datasetLabel: charts/* DATASET_LABEL */.ul[datasetConfigKey],
          currentTeamId
        }
      );
    }
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, { verticalPadding: "small" });
    }
    if (error) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (!formattedData.length) {
      return /* @__PURE__ */ react.createElement("div", { className: `${ChartCard_baseClass}__no-data` }, "No chart data available yet.");
    }
    const vizProps = {
      data: formattedData,
      selectedDays: CHART_DAYS,
      theme: currentDataset.theme,
      tooltipFormatter: currentDataset.tooltipFormatter,
      relativeScale: currentDataset.relativeScale
    };
    switch (currentDataset.defaultChartType) {
      case "checkerboard":
        return /* @__PURE__ */ react.createElement(CheckerboardViz/* default */.A, ChartCard_spreadValues({}, vizProps));
      case "line":
      default:
        return /* @__PURE__ */ react.createElement(ChartCard_LineChartViz, ChartCard_spreadValues({}, vizProps));
    }
  };
  return /* @__PURE__ */ react.createElement("div", { className: ChartCard_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${ChartCard_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${ChartCard_baseClass}__header-left` }, DATASET_OPTIONS.length > 1 ? /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      name: "dataset",
      value: selectedMetric,
      options: DATASET_OPTIONS,
      onChange: (option) => {
        if (option) {
          setSelectedMetric(option.value);
        }
      },
      className: `${ChartCard_baseClass}__dataset-dropdown`,
      nowrapMenu: true
    }
  ) : /* @__PURE__ */ react.createElement("h2", { className: `${ChartCard_baseClass}__title` }, currentDataset.label), currentDataset.description && /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: currentDataset.description,
      position: "top",
      underline: false,
      showArrow: true,
      tipOffset: 8,
      className: `${ChartCard_baseClass}__description-tooltip`
    },
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "info-outline" })
  ), anyFiltersActive && /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: filterTooltip(chartFilters, isCVE),
      position: "top",
      underline: false,
      showArrow: true,
      tipOffset: 8
    },
    /* @__PURE__ */ react.createElement(
      "button",
      {
        type: "button",
        className: `${ChartCard_baseClass}__filter-pill`,
        onClick: () => openFilterModal(
          hostFiltersActive ? "hosts" : "software",
          true
        )
      },
      "Filtered"
    )
  )), /* @__PURE__ */ react.createElement("div", { className: `${ChartCard_baseClass}__header-right` }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "button",
      variant: "subdued",
      size: "small",
      ariaLabel: "Configure chart filters",
      onClick: () => openFilterModal()
    },
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "settings" })
  ))), /* @__PURE__ */ react.createElement("div", { className: `${ChartCard_baseClass}__chart-container` }, renderChart()), showFilterModal && /* @__PURE__ */ react.createElement(
    ChartFilterModal_ChartFilterModal,
    {
      filters: chartFilters,
      currentTeamId,
      metric: selectedMetric,
      initialTab,
      initialShowAdvanced: showAdvancedOnOpen,
      onApply: (newFilters) => {
        setChartFilters(newFilters);
        setShowFilterModal(false);
      },
      onCancel: () => setShowFilterModal(false)
    }
  ));
};
/* harmony default export */ var ChartCard_ChartCard = (ChartCard);

;// ./frontend/pages/DashboardPage/cards/ChartCard/index.ts



// EXTERNAL MODULE: ./node_modules/react-router/es/index.js + 32 modules
var react_router_es = __webpack_require__(24179);
;// ./frontend/pages/DashboardPage/cards/MeshP2PCard/MeshP2PCard.tsx





const MeshP2PCard_baseClass = "mesh-p2p-card";
const MeshP2PCard = () => {
  const [hosts, setHosts] = (0,react.useState)([]);
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    entities_hosts/* default */.A.loadHosts({ page: 0, perPage: 100 }).then((resp) => {
      if (resp && resp.hosts) {
        setHosts(resp.hosts);
      }
    }).catch((err) => {
      console.error("Failed to load hosts for Mesh health card:", err);
    }).finally(() => setIsLoading(false));
  }, []);
  const totalHosts = hosts.length;
  const onlineHosts = hosts.filter((h) => h.status === "online").length;
  const offlineHosts = hosts.filter((h) => h.status !== "online").length;
  const windowsCount = hosts.filter((h) => h.platform === "windows").length;
  const macCount = hosts.filter((h) => h.platform === "darwin").length;
  const linuxCount = hosts.filter(
    (h) => h.platform !== "windows" && h.platform !== "darwin"
  ).length;
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "darwin":
        return "\u{1F34E}";
      case "windows":
        return "\u{1F5A5}\uFE0F";
      default:
        return "\u{1F427}";
    }
  };
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      className: MeshP2PCard_baseClass,
      style: {
        background: "var(--ui-fleet-blue-10, #171d2b)",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "24px",
        border: "1px solid var(--ui-vibrant-blue-50, #2c3a58)"
      }
    },
    /* @__PURE__ */ react.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px"
        }
      },
      /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
        "h3",
        {
          style: {
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
            color: "var(--core-fleet-black, #ffffff)"
          }
        },
        "\u26A1 Mesh Fleet Health & Node Status"
      ), /* @__PURE__ */ react.createElement(
        "p",
        {
          style: {
            margin: "4px 0 0",
            fontSize: "12px",
            opacity: 0.75,
            color: "var(--core-fleet-white, #b3c0d8)"
          }
        },
        "Live connectivity, operating system distribution, and fleet nodes"
      )),
      /* @__PURE__ */ react.createElement(
        "span",
        {
          style: {
            background: "rgba(0, 229, 255, 0.15)",
            color: "var(--core-vibrant-blue, #00e5ff)",
            padding: "4px 12px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px"
          }
        },
        /* @__PURE__ */ react.createElement(
          "span",
          {
            style: {
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: onlineHosts > 0 ? "#2ecc71" : "#e74c3c",
              display: "inline-block"
            }
          }
        ),
        isLoading ? "Syncing nodes..." : `${onlineHosts} / ${totalHosts} Nodes Online`
      )
    ),
    /* @__PURE__ */ react.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "16px"
        }
      },
      /* @__PURE__ */ react.createElement(
        react_router_es/* Link */.N_,
        {
          to: `${paths/* default */.A.MANAGE_HOSTS}?status=online`,
          style: { textDecoration: "none" }
        },
        /* @__PURE__ */ react.createElement(
          "div",
          {
            style: {
              background: "rgba(0,0,0,0.25)",
              padding: "12px 16px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "transform 0.15s ease",
              cursor: "pointer"
            }
          },
          /* @__PURE__ */ react.createElement(
            "div",
            {
              style: {
                fontSize: "11px",
                textTransform: "uppercase",
                opacity: 0.65,
                color: "#fff"
              }
            },
            "Online Nodes"
          ),
          /* @__PURE__ */ react.createElement(
            "div",
            {
              style: {
                fontSize: "22px",
                fontWeight: 700,
                color: "#2ecc71",
                margin: "4px 0"
              }
            },
            isLoading ? "--" : onlineHosts
          ),
          /* @__PURE__ */ react.createElement("div", { style: { fontSize: "11px", opacity: 0.6, color: "#fff" } }, "Communicating & healthy")
        )
      ),
      /* @__PURE__ */ react.createElement(
        react_router_es/* Link */.N_,
        {
          to: `${paths/* default */.A.MANAGE_HOSTS}?status=offline`,
          style: { textDecoration: "none" }
        },
        /* @__PURE__ */ react.createElement(
          "div",
          {
            style: {
              background: "rgba(0,0,0,0.25)",
              padding: "12px 16px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.05)",
              cursor: "pointer"
            }
          },
          /* @__PURE__ */ react.createElement(
            "div",
            {
              style: {
                fontSize: "11px",
                textTransform: "uppercase",
                opacity: 0.65,
                color: "#fff"
              }
            },
            "Offline Nodes"
          ),
          /* @__PURE__ */ react.createElement(
            "div",
            {
              style: {
                fontSize: "22px",
                fontWeight: 700,
                color: offlineHosts > 0 ? "#f39c12" : "#95a5a6",
                margin: "4px 0"
              }
            },
            isLoading ? "--" : offlineHosts
          ),
          /* @__PURE__ */ react.createElement("div", { style: { fontSize: "11px", opacity: 0.6, color: "#fff" } }, "Awaiting check-in")
        )
      ),
      /* @__PURE__ */ react.createElement(react_router_es/* Link */.N_, { to: paths/* default */.A.MANAGE_HOSTS, style: { textDecoration: "none" } }, /* @__PURE__ */ react.createElement(
        "div",
        {
          style: {
            background: "rgba(0,0,0,0.25)",
            padding: "12px 16px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.05)",
            cursor: "pointer"
          }
        },
        /* @__PURE__ */ react.createElement(
          "div",
          {
            style: {
              fontSize: "11px",
              textTransform: "uppercase",
              opacity: 0.65,
              color: "#fff"
            }
          },
          "OS Distribution"
        ),
        /* @__PURE__ */ react.createElement(
          "div",
          {
            style: {
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--core-vibrant-blue, #00e5ff)",
              margin: "4px 0"
            }
          },
          isLoading ? "--" : `${windowsCount} Win \u2022 ${macCount} Mac \u2022 ${linuxCount} Linux`
        ),
        /* @__PURE__ */ react.createElement("div", { style: { fontSize: "11px", opacity: 0.6, color: "#fff" } }, totalHosts, " total enrolled devices")
      ))
    ),
    /* @__PURE__ */ react.createElement("div", { style: { marginTop: "16px" } }, /* @__PURE__ */ react.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          fontWeight: 600,
          marginBottom: "10px",
          opacity: 0.85,
          color: "#fff"
        }
      },
      /* @__PURE__ */ react.createElement("span", null, "Active Fleet Nodes"),
      /* @__PURE__ */ react.createElement(
        react_router_es/* Link */.N_,
        {
          to: paths/* default */.A.MANAGE_HOSTS,
          style: {
            color: "var(--core-vibrant-blue, #00e5ff)",
            textDecoration: "none",
            fontSize: "11px",
            fontWeight: 500
          }
        },
        "Manage all ",
        totalHosts,
        " hosts \u2192"
      )
    ), isLoading ? /* @__PURE__ */ react.createElement(
      "div",
      {
        style: {
          fontSize: "12px",
          opacity: 0.6,
          color: "#fff",
          padding: "10px"
        }
      },
      "Loading active nodes..."
    ) : hosts.length === 0 ? /* @__PURE__ */ react.createElement(
      "div",
      {
        style: {
          fontSize: "12px",
          opacity: 0.6,
          color: "#fff",
          padding: "10px"
        }
      },
      "No hosts enrolled yet."
    ) : /* @__PURE__ */ react.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px" } }, hosts.slice(0, 6).map((host) => /* @__PURE__ */ react.createElement(
      "div",
      {
        key: host.id,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          padding: "8px 12px",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "4px",
          border: "1px solid rgba(255,255,255,0.04)"
        }
      },
      /* @__PURE__ */ react.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        },
        /* @__PURE__ */ react.createElement("span", { style: { fontSize: "14px" } }, getPlatformIcon(host.platform)),
        /* @__PURE__ */ react.createElement(
          react_router_es/* Link */.N_,
          {
            to: paths/* default */.A.HOST_DETAILS(host.id),
            style: {
              fontWeight: 600,
              color: "var(--core-vibrant-blue, #00e5ff)",
              textDecoration: "none"
            }
          },
          host.hostname
        ),
        /* @__PURE__ */ react.createElement("span", { style: { opacity: 0.5, fontSize: "11px", color: "#fff" } }, "(", host.primary_ip || "No IP", ")"),
        /* @__PURE__ */ react.createElement(
          "span",
          {
            style: {
              opacity: 0.7,
              fontSize: "11px",
              background: "rgba(255,255,255,0.08)",
              padding: "2px 6px",
              borderRadius: "4px",
              color: "#fff"
            }
          },
          host.os_version || host.platform
        )
      ),
      /* @__PURE__ */ react.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0
          }
        },
        /* @__PURE__ */ react.createElement(
          "span",
          {
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11px",
              color: host.status === "online" ? "#2ecc71" : "rgba(255,255,255,0.5)"
            }
          },
          /* @__PURE__ */ react.createElement(
            "span",
            {
              style: {
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: host.status === "online" ? "#2ecc71" : "#95a5a6"
              }
            }
          ),
          host.status === "online" ? "Online" : "Offline"
        ),
        /* @__PURE__ */ react.createElement(
          react_router_es/* Link */.N_,
          {
            to: paths/* default */.A.HOST_DETAILS(host.id),
            style: {
              fontSize: "11px",
              color: "var(--core-fleet-white, #b3c0d8)",
              textDecoration: "none",
              opacity: 0.8
            }
          },
          "View \u2192"
        )
      )
    ))))
  );
};
/* harmony default export */ var MeshP2PCard_MeshP2PCard = (MeshP2PCard);

// EXTERNAL MODULE: ./node_modules/recharts/es6/chart/BarChart.js
var BarChart = __webpack_require__(88224);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Bar.js + 11 modules
var Bar = __webpack_require__(24338);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/Cell.js
var Cell = __webpack_require__(72050);
;// ./frontend/pages/DashboardPage/cards/HostsEnrolledCard/HostsEnrolledCard.tsx







const HostsEnrolledCard_baseClass = "hosts-enrolled-card";
const BAR_COLOR = "var(--core-fleet-green)";
const BAR_HOVER_COLOR = "var(--core-fleet-green-over)";
const CHART_HEIGHT_NARROW = 190;
const CHART_HEIGHT_WIDE = 242;
const WIDE_THRESHOLD = 700;
const PLATFORM_ROWS = [
  { platform: "darwin", label: "macOS" },
  { platform: "windows", label: "Windows" },
  { platform: "linux", label: "Linux" },
  { platform: "chrome", label: "ChromeOS" },
  { platform: "ios", label: "iOS" },
  { platform: "ipados", label: "iPadOS" },
  { platform: "android", label: "Android" }
];
const formatTick = (value) => {
  if (value >= 1e3) {
    const k = value / 1e3;
    return Number.isInteger(k) ? `${k}k` : `${k.toFixed(1)}k`;
  }
  return `${value}`;
};
const formatPercent = (count, percent) => {
  if (count > 0 && percent < 0.1) return "<0.1%";
  return `${percent.toFixed(1)}%`;
};
const HostsEnrolledTooltip = ({
  active,
  payload
}) => {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  const datum = payload[0].payload;
  const percentLabel = formatPercent(datum.count, datum.percent);
  return /* @__PURE__ */ react.createElement("div", { className: `${HostsEnrolledCard_baseClass}__tooltip` }, /* @__PURE__ */ react.createElement("div", { className: `${HostsEnrolledCard_baseClass}__tooltip-label` }, datum.label), /* @__PURE__ */ react.createElement("div", { className: `${HostsEnrolledCard_baseClass}__tooltip-value` }, datum.count.toLocaleString(), " hosts"), /* @__PURE__ */ react.createElement("div", { className: `${HostsEnrolledCard_baseClass}__tooltip-share` }, percentLabel, " of fleet"));
};
const ClickableYAxisTick = ({
  x = 0,
  y = 0,
  payload,
  className,
  fontSize,
  isClickable,
  onLabelClick
}) => {
  if (!payload) return /* @__PURE__ */ react.createElement("g", null);
  const clickable = isClickable(payload.index);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onLabelClick(payload.index);
    }
  };
  return /* @__PURE__ */ react.createElement("g", { transform: `translate(${x},${y})` }, /* @__PURE__ */ react.createElement(
    "text",
    {
      x: 0,
      y: 0,
      dy: 4,
      textAnchor: "end",
      fontSize,
      fontWeight: "normal",
      className: classnames_default()(className, {
        [`${HostsEnrolledCard_baseClass}__tick--clickable`]: clickable
      }),
      role: clickable ? "button" : void 0,
      tabIndex: clickable ? 0 : void 0,
      "aria-label": clickable ? `${payload.value} hosts` : void 0,
      onClick: clickable ? () => onLabelClick(payload.index) : void 0,
      onKeyDown: clickable ? handleKeyDown : void 0
    },
    payload.value
  ));
};
const HostsEnrolledCard = ({
  counts,
  totalHostCount,
  builtInLabels,
  currentTeamId,
  router
}) => {
  const data = PLATFORM_ROWS.map(({ platform, label }) => ({
    platform,
    label,
    count: counts[platform],
    percent: totalHostCount ? counts[platform] / totalHostCount * 100 : 0
  }));
  const navigateToPlatform = (platform, count) => {
    if (!count) return;
    const labelId = (0,label/* getBuiltinPlatformLabelId */.iq)(builtInLabels, platform);
    if (labelId === void 0) return;
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_HOSTS_LABEL(labelId), {
        fleet_id: currentTeamId,
        // the chart doesn't count hosts pending MDM enrollment
        status: "enrolled"
      })
    );
  };
  const handleBarClick = (datum) => {
    navigateToPlatform(datum.platform, datum.count);
  };
  const handleTickClick = (index) => {
    const datum = data[index];
    if (datum) navigateToPlatform(datum.platform, datum.count);
  };
  const isTickClickable = (index) => {
    const datum = data[index];
    if (!datum || !datum.count) return false;
    return (0,label/* getBuiltinPlatformLabelId */.iq)(builtInLabels, datum.platform) !== void 0;
  };
  const containerRef = (0,react.useRef)(null);
  const [isWide, setIsWide] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const node = containerRef.current;
    if (!node) return void 0;
    setIsWide(node.getBoundingClientRect().width >= WIDE_THRESHOLD);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setIsWide(entry.contentRect.width >= WIDE_THRESHOLD);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const chartHeight = isWide ? CHART_HEIGHT_WIDE : CHART_HEIGHT_NARROW;
  const tickFontSize = 12;
  const yAxisWidth = isWide ? 90 : 84;
  return /* @__PURE__ */ react.createElement("div", { className: HostsEnrolledCard_baseClass, ref: containerRef }, /* @__PURE__ */ react.createElement("h2", { className: `${HostsEnrolledCard_baseClass}__title` }, "Hosts enrolled"), /* @__PURE__ */ react.createElement("div", { className: `${HostsEnrolledCard_baseClass}__chart-container` }, /* @__PURE__ */ react.createElement(ResponsiveContainer/* ResponsiveContainer */.u, { width: "100%", height: chartHeight }, /* @__PURE__ */ react.createElement(
    BarChart/* BarChart */.E,
    {
      data,
      layout: "vertical",
      margin: { top: 0, right: 20, bottom: 0, left: 0 },
      barCategoryGap: "25%"
    },
    /* @__PURE__ */ react.createElement(
      CartesianGrid/* CartesianGrid */.d,
      {
        horizontal: false,
        strokeDasharray: "3 3",
        stroke: "var(--ui-fleet-black-10)"
      }
    ),
    /* @__PURE__ */ react.createElement(
      CartesianGrid/* CartesianGrid */.d,
      {
        vertical: false,
        stroke: "var(--ui-fleet-black-10)",
        horizontalCoordinatesGenerator: ({ offset }) => {
          const { top, height } = offset;
          const bandHeight = height / data.length;
          return data.map((_, i) => top + i * bandHeight).concat(top + height);
        }
      }
    ),
    /* @__PURE__ */ react.createElement(
      XAxis/* XAxis */.W,
      {
        type: "number",
        tickFormatter: formatTick,
        axisLine: false,
        tickLine: false,
        tickMargin: 6,
        tick: { fontSize: tickFontSize, fontWeight: 600 },
        allowDecimals: false
      }
    ),
    /* @__PURE__ */ react.createElement(
      YAxis/* YAxis */.h,
      {
        type: "category",
        dataKey: "label",
        axisLine: false,
        tickLine: false,
        width: yAxisWidth,
        interval: 0,
        tick: /* @__PURE__ */ react.createElement(
          ClickableYAxisTick,
          {
            fontSize: tickFontSize,
            isClickable: isTickClickable,
            onLabelClick: handleTickClick
          }
        )
      }
    ),
    /* @__PURE__ */ react.createElement(
      Tooltip/* Tooltip */.m,
      {
        content: /* @__PURE__ */ react.createElement(HostsEnrolledTooltip, null),
        cursor: false,
        isAnimationActive: false
      }
    ),
    /* @__PURE__ */ react.createElement(
      Bar/* Bar */.yP,
      {
        dataKey: "count",
        radius: [0, 4, 4, 0],
        barSize: 16,
        isAnimationActive: false,
        activeBar: { fill: BAR_HOVER_COLOR },
        onClick: (d) => handleBarClick(d.payload)
      },
      data.map((entry) => /* @__PURE__ */ react.createElement(
        Cell/* Cell */.f,
        {
          key: entry.label,
          fill: BAR_COLOR,
          className: entry.count > 0 ? `${HostsEnrolledCard_baseClass}__bar--clickable` : void 0
        }
      ))
    )
  ))));
};
/* harmony default export */ var HostsEnrolledCard_HostsEnrolledCard = (HostsEnrolledCard);

;// ./frontend/pages/DashboardPage/cards/HostsEnrolledCard/index.ts



;// ./frontend/pages/DashboardPage/cards/LearnFleet/LearnFleet.tsx



const LearnFleet_baseClass = "learn-fleet";
const LearnFleet = () => {
  return /* @__PURE__ */ react.createElement("div", { className: LearnFleet_baseClass }, /* @__PURE__ */ react.createElement("p", null, "Want to explore Fleet's features? Learn how to ask questions about your device using reports."), /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      className: `${LearnFleet_baseClass}__action-button`,
      url: "https://fleetdm.com/docs/using-fleet/learn-how-to-use-fleet",
      text: "Learn how to use Fleet",
      newTab: true
    }
  ));
};
/* harmony default export */ var LearnFleet_LearnFleet = (LearnFleet);

;// ./frontend/pages/DashboardPage/cards/LearnFleet/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
;// ./frontend/pages/DashboardPage/cards/MDM/MDMSolutionsTableConfig.tsx

var MDMSolutionsTableConfig_defProp = Object.defineProperty;
var MDMSolutionsTableConfig_defProps = Object.defineProperties;
var MDMSolutionsTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MDMSolutionsTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MDMSolutionsTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var MDMSolutionsTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var MDMSolutionsTableConfig_defNormalProp = (obj, key, value) => key in obj ? MDMSolutionsTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MDMSolutionsTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MDMSolutionsTableConfig_hasOwnProp.call(b, prop))
      MDMSolutionsTableConfig_defNormalProp(a, prop, b[prop]);
  if (MDMSolutionsTableConfig_getOwnPropSymbols)
    for (var prop of MDMSolutionsTableConfig_getOwnPropSymbols(b)) {
      if (MDMSolutionsTableConfig_propIsEnum.call(b, prop))
        MDMSolutionsTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MDMSolutionsTableConfig_spreadProps = (a, b) => MDMSolutionsTableConfig_defProps(a, MDMSolutionsTableConfig_getOwnPropDescs(b));




const generateSolutionsTableHeaders = () => [
  {
    title: "Name",
    Header: "Name",
    disableSortBy: true,
    accessor: "displayName",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(LinkCell/* default */.A, { customOnClick: lodash.noop, value: cellProps.cell.value })
  },
  {
    title: "Hosts",
    Header: "Hosts",
    disableSortBy: true,
    accessor: "hosts_count",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
  }
];
const generateSolutionsDataSet = (solutions) => {
  return solutions.map((solution) => {
    return MDMSolutionsTableConfig_spreadProps(MDMSolutionsTableConfig_spreadValues({}, solution), {
      displayName: solution.name || "Unknown"
    });
  });
};

// EXTERNAL MODULE: ./frontend/components/ViewAllHostsLink/index.ts + 1 modules
var ViewAllHostsLink = __webpack_require__(2837);
// EXTERNAL MODULE: ./frontend/interfaces/mdm.ts
var mdm = __webpack_require__(42550);
;// ./frontend/pages/DashboardPage/cards/MDM/MDMStatusTableConfig.tsx

var MDMStatusTableConfig_defProp = Object.defineProperty;
var MDMStatusTableConfig_defProps = Object.defineProperties;
var MDMStatusTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MDMStatusTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MDMStatusTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var MDMStatusTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var MDMStatusTableConfig_defNormalProp = (obj, key, value) => key in obj ? MDMStatusTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MDMStatusTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MDMStatusTableConfig_hasOwnProp.call(b, prop))
      MDMStatusTableConfig_defNormalProp(a, prop, b[prop]);
  if (MDMStatusTableConfig_getOwnPropSymbols)
    for (var prop of MDMStatusTableConfig_getOwnPropSymbols(b)) {
      if (MDMStatusTableConfig_propIsEnum.call(b, prop))
        MDMStatusTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MDMStatusTableConfig_spreadProps = (a, b) => MDMStatusTableConfig_defProps(a, MDMStatusTableConfig_getOwnPropDescs(b));






const generateStatusTableHeaders = (teamId) => [
  {
    Header: "Status",
    disableSortBy: true,
    accessor: "status",
    Cell: ({ cell: { value: status } }) => !constants/* MDM_STATUS_TOOLTIP */.YQ[status] ? /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: status }) : /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        className: "status-cell",
        tipContent: constants/* MDM_STATUS_TOOLTIP */.YQ[status]
      },
      mdm/* MDM_ENROLLMENT_STATUS_UI_MAP */.rK[status].displayName
    ),
    sortType: "hasLength"
  },
  {
    Header: "Hosts",
    disableSortBy: true,
    accessor: "hosts",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
  },
  {
    Header: "",
    id: "view-all-hosts",
    disableSortBy: true,
    disableGlobalFilter: true,
    Cell: (cellProps) => {
      return /* @__PURE__ */ react.createElement(
        ViewAllHostsLink/* default */.A,
        {
          queryParams: {
            mdm_enrollment_status: mdm/* MDM_ENROLLMENT_STATUS_UI_MAP */.rK[cellProps.row.original.status].filterValue,
            fleet_id: teamId
          },
          className: "mdm-solution-link",
          platformLabelId: cellProps.row.original.selectedPlatformLabelId,
          rowHover: true
        }
      );
    }
  }
];
const enhanceStatusData = (statusData, selectedPlatformLabelId) => {
  return Object.values(statusData).map((data) => {
    return MDMStatusTableConfig_spreadProps(MDMStatusTableConfig_spreadValues({}, data), {
      selectedPlatformLabelId
    });
  });
};
const generateStatusDataSet = (statusData, selectedPlatformLabelId) => {
  if (!statusData) {
    return [];
  }
  return [...enhanceStatusData(statusData, selectedPlatformLabelId)];
};

;// ./frontend/pages/DashboardPage/cards/MDM/MDM.tsx

var MDM_defProp = Object.defineProperty;
var MDM_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MDM_hasOwnProp = Object.prototype.hasOwnProperty;
var MDM_propIsEnum = Object.prototype.propertyIsEnumerable;
var MDM_defNormalProp = (obj, key, value) => key in obj ? MDM_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MDM_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MDM_hasOwnProp.call(b, prop))
      MDM_defNormalProp(a, prop, b[prop]);
  if (MDM_getOwnPropSymbols)
    for (var prop of MDM_getOwnPropSymbols(b)) {
      if (MDM_propIsEnum.call(b, prop))
        MDM_defNormalProp(a, prop, b[prop]);
    }
  return a;
};











const DEFAULT_SORT_DIRECTION = "desc";
const SOLUTIONS_DEFAULT_SORT_HEADER = "hosts_count";
const STATUS_DEFAULT_SORT_DIRECTION = "asc";
const STATUS_DEFAULT_SORT_HEADER = "status";
const MDM_PAGE_SIZE = 8;
const MDM_baseClass = "home-mdm";
const EmptyMdmStatus = () => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    header: "Unable to detect MDM enrollment",
    info: /* @__PURE__ */ react.createElement(react.Fragment, null, "To see MDM versions, deploy\xA0", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/learn-more-about/fleetd",
        newTab: true,
        text: "Fleet's agent (fleetd)"
      }
    ))
  }
);
const EmptyMdmSolutions = () => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    header: "No MDM solutions detected",
    info: "This report is updated every hour to protect the performance of your\r\n      devices."
  }
);
const reduceSolutionsToObj = (mdmSolutions) => {
  return mdmSolutions.reduce((acc, nextSolution) => {
    const key = nextSolution.name || "Unknown";
    if (acc[key]) {
      acc[key].hosts_count += nextSolution.hosts_count;
    } else {
      acc[key] = Object.assign(MDM_spreadValues({}, nextSolution));
    }
    return acc;
  }, {});
};
const Mdm = ({
  isFetching,
  error,
  mdmStatusData,
  mdmSolutions,
  selectedPlatformLabelId,
  selectedTeamId,
  onClickMdmSolution
}) => {
  const [navTabIndex, setNavTabIndex] = (0,react.useState)(0);
  const onTabChange = (index) => {
    setNavTabIndex(index);
  };
  const rolledupMdmSolutionsData = (0,react.useMemo)(() => {
    if (!mdmSolutions) {
      return [];
    }
    return Object.values(reduceSolutionsToObj(mdmSolutions));
  }, [mdmSolutions]);
  const solutionsTableHeaders = (0,react.useMemo)(
    () => generateSolutionsTableHeaders(),
    []
  );
  const statusTableHeaders = (0,react.useMemo)(
    () => generateStatusTableHeaders(selectedTeamId),
    [selectedTeamId]
  );
  const solutionsDataSet = generateSolutionsDataSet(rolledupMdmSolutionsData);
  const statusDataSet = generateStatusDataSet(
    mdmStatusData,
    selectedPlatformLabelId
  );
  const opacity = isFetching ? { opacity: 0 } : { opacity: 1 };
  const handleSolutionRowClick = (row) => {
    onClickMdmSolution(row.original);
  };
  return /* @__PURE__ */ react.createElement("div", { className: MDM_baseClass }, isFetching && /* @__PURE__ */ react.createElement("div", { className: "spinner" }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)), /* @__PURE__ */ react.createElement("div", { style: opacity }, /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: navTabIndex, onSelect: onTabChange }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Solutions")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Status"))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, error ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: `${MDM_baseClass}__mdm-solutions-table`,
      columnConfigs: solutionsTableHeaders,
      data: solutionsDataSet,
      isLoading: isFetching,
      defaultSortHeader: SOLUTIONS_DEFAULT_SORT_HEADER,
      defaultSortDirection: DEFAULT_SORT_DIRECTION,
      resultsTitle: "MDM",
      emptyComponent: EmptyMdmSolutions,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableCount: true,
      disablePagination: true,
      hideFooter: true,
      disableMultiRowSelect: true,
      onClickRow: handleSolutionRowClick,
      keyboardSelectableRows: true
    }
  )), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, error ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: `${MDM_baseClass}__mdm-status-table`,
      columnConfigs: statusTableHeaders,
      data: statusDataSet,
      isLoading: isFetching,
      defaultSortHeader: STATUS_DEFAULT_SORT_HEADER,
      defaultSortDirection: STATUS_DEFAULT_SORT_DIRECTION,
      resultsTitle: "MDM",
      emptyComponent: EmptyMdmStatus,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableCount: true,
      disablePagination: true,
      hideFooter: true,
      pageSize: MDM_PAGE_SIZE
    }
  ))))));
};
/* harmony default export */ var MDM = (Mdm);

;// ./frontend/pages/DashboardPage/cards/MDM/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TooltipTruncatedTextCell/index.ts + 1 modules
var TooltipTruncatedTextCell = __webpack_require__(16240);
;// ./frontend/pages/DashboardPage/cards/Munki/MunkiIssuesTableConfig.tsx








const generateMunkiIssuesTableHeaders = (teamId) => [
  {
    title: "Issue",
    Header: () => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Issues reported the last time Munki ran on each host.")
        },
        "Issue"
      );
      return /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: titleWithToolTip, disableSortBy: true });
    },
    disableSortBy: true,
    accessor: "name",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TooltipTruncatedTextCell/* default */.A, { value: cellProps.cell.value })
  },
  {
    title: "Type",
    Header: "Type",
    disableSortBy: true,
    accessor: "type",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,lodash.capitalize)(cellProps.cell.value) })
  },
  {
    title: "Hosts",
    Header: (headerProps) => {
      return /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Hosts",
          isSortedDesc: headerProps.column.isSortedDesc
        }
      );
    },
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
            munki_issue_id: cellProps.row.original.id,
            fleet_id: teamId
          },
          className: "munki-issue-link"
        }
      ));
    }
  }
];
/* harmony default export */ var MunkiIssuesTableConfig = (generateMunkiIssuesTableHeaders);

;// ./frontend/pages/DashboardPage/cards/Munki/MunkiVersionsTableConfig.tsx



const munkiVersionsTableHeaders = [
  {
    title: "Version",
    Header: "Version",
    disableSortBy: true,
    accessor: "version",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
  },
  {
    title: "Hosts",
    Header: "Hosts",
    disableSortBy: true,
    accessor: "hosts_count",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
  }
];
/* harmony default export */ var MunkiVersionsTableConfig = (munkiVersionsTableHeaders);

;// ./frontend/pages/DashboardPage/cards/Munki/Munki.tsx












const Munki_DEFAULT_SORT_DIRECTION = "desc";
const DEFAULT_SORT_HEADER = "hosts_count";
const Munki_PAGE_SIZE = 8;
const Munki_baseClass = "home-munki";
const Munki = ({
  errorMacAdmins,
  isMacAdminsFetching,
  munkiIssuesData,
  munkiVersionsData,
  selectedTeamId
}) => {
  const [navTabIndex, setNavTabIndex] = (0,react.useState)(0);
  const tableHeaders = (0,react.useMemo)(
    () => MunkiIssuesTableConfig(selectedTeamId),
    [selectedTeamId]
  );
  const onTabChange = (index) => {
    setNavTabIndex(index);
  };
  const opacity = isMacAdminsFetching ? { opacity: 0 } : { opacity: 1 };
  return /* @__PURE__ */ react.createElement("div", { className: Munki_baseClass }, isMacAdminsFetching && /* @__PURE__ */ react.createElement("div", { className: "spinner" }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)), /* @__PURE__ */ react.createElement("div", { style: opacity }, /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: navTabIndex, onSelect: onTabChange }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Issues")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Versions"))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, errorMacAdmins ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data: munkiIssuesData || [],
      isLoading: isMacAdminsFetching,
      defaultSortHeader: DEFAULT_SORT_HEADER,
      defaultSortDirection: Munki_DEFAULT_SORT_DIRECTION,
      resultsTitle: "Munki",
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No Munki issues detected",
          info: "This report is updated every hour to protect the performance of your\r\n      devices."
        }
      ),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      isClientSidePagination: true,
      disableCount: true,
      disablePagination: true,
      pageSize: Munki_PAGE_SIZE
    }
  )), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, errorMacAdmins ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: MunkiVersionsTableConfig,
      data: munkiVersionsData || [],
      isLoading: isMacAdminsFetching,
      defaultSortHeader: DEFAULT_SORT_HEADER,
      defaultSortDirection: Munki_DEFAULT_SORT_DIRECTION,
      resultsTitle: "Munki",
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "Unable to detect Munki versions",
          info: /* @__PURE__ */ react.createElement(react.Fragment, null, "To see Munki versions, deploy\xA0", /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              url: "https://fleetdm.com/learn-more-about/fleetd",
              text: "Fleet's agent (fleetd)",
              newTab: true
            }
          ), ".")
        }
      ),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      isClientSidePagination: true,
      disableCount: true,
      disablePagination: true,
      pageSize: Munki_PAGE_SIZE
    }
  ))))));
};
/* harmony default export */ var Munki_Munki = (Munki);

;// ./frontend/pages/DashboardPage/cards/Munki/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/operating_system.ts
var operating_system = __webpack_require__(49817);
// EXTERNAL MODULE: ./frontend/services/entities/operating_systems.ts
var operating_systems = __webpack_require__(91310);
// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/OperatingSystems/OSTableConfig.tsx
var OSTableConfig = __webpack_require__(93588);
;// ./frontend/pages/DashboardPage/cards/OperatingSystems/OSTable.tsx






const OSTable_DEFAULT_SORT_DIRECTION = "desc";
const OSTable_DEFAULT_SORT_HEADER = "hosts_count";
const OSTable_PAGE_SIZE = 8;
const OSTable_baseClass = "operating-systems";
const EmptyOS = (platform) => /* @__PURE__ */ react.createElement(
  EmptyState/* default */.A,
  {
    className: `${OSTable_baseClass}__os-empty-table`,
    header: `No${` ${constants/* PLATFORM_DISPLAY_NAMES */.uc[platform]}` || ""} operating systems detected`,
    info: "This report is updated every hour to protect the performance of your\r\n  devices."
  }
);
const OSTable = ({
  currentTeamId,
  osVersions,
  selectedPlatform,
  isLoading
}) => {
  const columnConfigs = (0,react.useMemo)(
    // Linux is the only platform where the distro name ("Ubuntu", "Debian",
    // ...) isn't obvious from the Version column alone, so it gets the extra
    // Name column that other platforms don't need.
    () => (0,OSTableConfig/* default */.A)(currentTeamId, void 0, {
      includeName: selectedPlatform === "linux"
    }),
    [currentTeamId, selectedPlatform]
  );
  const showPaginationControls = osVersions.length > OSTable_PAGE_SIZE;
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs,
      data: osVersions,
      isLoading,
      defaultSortHeader: OSTable_DEFAULT_SORT_HEADER,
      defaultSortDirection: OSTable_DEFAULT_SORT_DIRECTION,
      resultsTitle: "Operating systems",
      emptyComponent: () => EmptyOS(selectedPlatform),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableCount: true,
      isClientSidePagination: showPaginationControls,
      disablePagination: !showPaginationControls,
      pageSize: OSTable_PAGE_SIZE
    }
  );
};
/* harmony default export */ var OperatingSystems_OSTable = (OSTable);

;// ./frontend/pages/DashboardPage/cards/OperatingSystems/OperatingSystems.tsx










const OperatingSystems_baseClass = "operating-systems";
const OperatingSystems = ({
  currentTeamId,
  selectedPlatform,
  showTitle,
  showDescription = true,
  setShowTitle,
  setTitleDetail,
  setTitleDescription
}) => {
  const { data: osInfo, error, isLoading } = (0,es.useQuery)(
    [
      {
        scope: "os_versions",
        platform: selectedPlatform !== "all" ? selectedPlatform : void 0,
        teamId: currentTeamId
      }
    ],
    ({ queryKey: [{ platform, teamId }] }) => {
      return (0,operating_systems/* getOSVersions */.kT)({
        platform,
        teamId
      });
    },
    {
      enabled: operating_systems/* OS_VERSIONS_API_SUPPORTED_PLATFORMS */.Mj.includes(selectedPlatform),
      staleTime: 1e4,
      keepPreviousData: true,
      retry: 0
    }
  );
  const renderDescription = () => {
    if (selectedPlatform === "chrome") {
      return /* @__PURE__ */ react.createElement("p", null, "Chromebooks automatically receive updates from Google until their auto-update expiration date.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: "https://fleetdm.com/learn-more-about/chromeos-updates",
          text: "Learn more",
          newTab: true,
          multiline: true
        }
      ));
    }
    if (showDescription && operating_system/* OS_VENDOR_BY_PLATFORM */.uG[selectedPlatform] && operating_system/* OS_END_OF_LIFE_LINK_BY_PLATFORM */.t4[selectedPlatform])
      return /* @__PURE__ */ react.createElement("p", null, operating_system/* OS_VENDOR_BY_PLATFORM */.uG[selectedPlatform], " releases updates and fixes for supported operating systems.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: operating_system/* OS_END_OF_LIFE_LINK_BY_PLATFORM */.t4[selectedPlatform],
          text: "See supported operating systems",
          newTab: true,
          multiline: true
        }
      ));
    return null;
  };
  const titleDetail = (osInfo == null ? void 0 : osInfo.counts_updated_at) ? /* @__PURE__ */ react.createElement(
    LastUpdatedText/* default */.A,
    {
      lastUpdatedAt: osInfo == null ? void 0 : osInfo.counts_updated_at,
      whatToRetrieve: "operating systems"
    }
  ) : null;
  const osVersions = (osInfo == null ? void 0 : osInfo.os_versions) || [];
  (0,react.useEffect)(() => {
    if (isLoading) {
      setShowTitle(false);
      setTitleDescription == null ? void 0 : setTitleDescription(null);
      setTitleDetail == null ? void 0 : setTitleDetail(null);
      return;
    }
    setShowTitle(true);
    if (osVersions.length) {
      setTitleDescription == null ? void 0 : setTitleDescription(renderDescription());
      setTitleDetail == null ? void 0 : setTitleDetail(titleDetail);
      return;
    }
    setTitleDescription == null ? void 0 : setTitleDescription(null);
    setTitleDetail == null ? void 0 : setTitleDetail(null);
  }, [isLoading, osInfo, setTitleDescription, setTitleDetail]);
  const opacity = isLoading || !showTitle ? { opacity: 0 } : { opacity: 1 };
  return /* @__PURE__ */ react.createElement("div", { className: OperatingSystems_baseClass }, isLoading && /* @__PURE__ */ react.createElement("div", { className: "spinner" }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)), /* @__PURE__ */ react.createElement("div", { style: opacity }, (error == null ? void 0 : error.status) && (error == null ? void 0 : error.status) >= 500 ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" }) : /* @__PURE__ */ react.createElement(
    OperatingSystems_OSTable,
    {
      currentTeamId,
      osVersions,
      selectedPlatform,
      isLoading
    }
  )));
};
/* harmony default export */ var OperatingSystems_OperatingSystems = (OperatingSystems);

;// ./frontend/pages/DashboardPage/cards/OperatingSystems/index.ts



// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/EmptySoftwareTable/index.ts + 1 modules
var EmptySoftwareTable = __webpack_require__(73870);
;// ./frontend/pages/DashboardPage/cards/Software/SoftwareTableConfig.tsx





const generateTableHeaders = (teamId) => [
  {
    title: "Name",
    Header: "Name",
    disableSortBy: true,
    accessor: "name",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(
      TooltipTruncatedTextCell/* default */.A,
      {
        value: cellProps.cell.value,
        className: "w150",
        key: cellProps.cell.value
      }
    )
  },
  {
    title: "Version",
    Header: "Version",
    disableSortBy: true,
    accessor: "version",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(
      TooltipTruncatedTextCell/* default */.A,
      {
        value: cellProps.cell.value,
        className: "w150",
        key: `${cellProps.row.original.name}-${cellProps.cell.value}`
      }
    )
  },
  {
    title: "Hosts",
    Header: "Hosts",
    disableSortBy: true,
    accessor: "hosts_count",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
  },
  {
    title: "Actions",
    Header: "",
    disableSortBy: true,
    accessor: "id",
    Cell: (cellProps) => {
      return /* @__PURE__ */ react.createElement(
        ViewAllHostsLink/* default */.A,
        {
          queryParams: { software_id: cellProps.cell.value, fleet_id: teamId },
          className: "software-link",
          condensed: true,
          rowHover: true
        }
      );
    }
  }
];
/* harmony default export */ var SoftwareTableConfig = (generateTableHeaders);

;// ./frontend/pages/DashboardPage/cards/Software/Software.tsx












const SOFTWARE_DEFAULT_SORT_DIRECTION = "desc";
const SOFTWARE_DEFAULT_SORT_HEADER = "hosts_count";
const SOFTWARE_DEFAULT_PAGE_SIZE = 8;
const Software_baseClass = "home-software";
const Software = ({
  errorSoftware,
  isSoftwareFetching,
  isSoftwareEnabled,
  navTabIndex,
  onTabChange,
  onQueryChange,
  software,
  teamId,
  router,
  softwarePageIndex
}) => {
  const tableHeaders = (0,react.useMemo)(() => SoftwareTableConfig(teamId), [teamId]);
  const handleRowSelect = (row) => {
    const path = (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_HOSTS, {
      software_id: row.original.id,
      fleet_id: teamId
    });
    router.push(path);
  };
  const opacity = isSoftwareFetching ? { opacity: 0 } : { opacity: 1 };
  return /* @__PURE__ */ react.createElement("div", { className: Software_baseClass }, isSoftwareFetching && /* @__PURE__ */ react.createElement("div", { className: "spinner" }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)), /* @__PURE__ */ react.createElement("div", { style: opacity }, /* @__PURE__ */ react.createElement(TabNav/* default */.A, { secondary: true }, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: navTabIndex, onSelect: onTabChange }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "All")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Vulnerable"))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, !isSoftwareFetching && errorSoftware ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data: isSoftwareEnabled && (software == null ? void 0 : software.software) || [],
      isLoading: isSoftwareFetching,
      pageIndex: softwarePageIndex,
      defaultSortHeader: SOFTWARE_DEFAULT_SORT_DIRECTION,
      defaultSortDirection: SOFTWARE_DEFAULT_SORT_DIRECTION,
      resultsTitle: "software",
      emptyComponent: () => /* @__PURE__ */ react.createElement(EmptySoftwareTable/* default */.A, null),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableCount: true,
      pageSize: SOFTWARE_DEFAULT_PAGE_SIZE,
      onQueryChange,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect
    }
  )), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, !isSoftwareFetching && errorSoftware ? /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" }) : /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data: isSoftwareEnabled && (software == null ? void 0 : software.software) || [],
      isLoading: isSoftwareFetching,
      pageIndex: softwarePageIndex,
      defaultSortHeader: SOFTWARE_DEFAULT_SORT_HEADER,
      defaultSortDirection: SOFTWARE_DEFAULT_SORT_DIRECTION,
      resultsTitle: "software",
      emptyComponent: () => /* @__PURE__ */ react.createElement(EmptySoftwareTable/* default */.A, { vulnFilters: { vulnerable: true } }),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableCount: true,
      pageSize: SOFTWARE_DEFAULT_PAGE_SIZE,
      onQueryChange,
      disableMultiRowSelect: true,
      onSelectSingleRow: handleRowSelect
    }
  ))))));
};
/* harmony default export */ var Software_Software = (Software);

;// ./frontend/pages/DashboardPage/cards/Software/index.ts



// EXTERNAL MODULE: ./frontend/components/Icon/Icon.tsx + 74 modules
var Icon_Icon = __webpack_require__(99742);
;// ./assets/images/laptop-mac.png
var laptop_mac_namespaceObject = __webpack_require__.p + "laptop-mac@549784debd7ced475aae.png";
;// ./assets/images/slack-button-get-help.png
var slack_button_get_help_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABKCAYAAADzGzwjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABDnSURBVHgB7Z1tcFTVGcef3STkBRIEVAiEGmrHFuyI6dABk2pbp0IdndYaHNsROwJ1fPkCVu2nAgL9pDLGL+JLAcfRUcfEsc50kNhRqxMCU1uIDqD1BRzCi1WRbEhCIOz2/s/mJGdP7u7efbu5q//fzJ3s3r1795xzz/2f5zzPc25C4sKbe/acV9Int5WEQz+VUOhyZ1e9EEII8cIhicX2novF/nZVU8PTbgeE7B1v79xzQ1jC20IhOU8IIYTkwqFz0eh6W4AThHfnrq5HYjFZjdc1NRNl2tQamTplspSXTxBCCCHp6esfkL6+ATnc/bkMDp7Vux9oumL+ev1mRHg7d7+/LhqNPlBaGpa6uukyc8YFQgghJHuOHvtCuo/8T4aGzjneB2n5SeP8e7BfCe/bHXscf254G0T30nkXy8SqSiGEEJI7sID37f9Uie+5WPQ3VzU2vKKEt6Oz66Dzp76+vpaWLiGE5BlYvoc+OyYSk5NnKqNzwrB2nf315eVlFF1CCCkAM2svUHEzx8dwXtmA3BYuCckN+GC249clhBBSGKZNnRx/EQv/LCzh8EV4PXEi/bqEEFIopk6pUX9DYZkfdnwOWCDBgBohhBQQIy23PiyEEEJ8hcJLCCE+Q+ElhBCfofASQojPUHgJIcRnKLyEEOIzFF5CCPEZCi8hhPgMhZcQQnyGwksIIT5D4SWEEJ8plSLi2OmobPhkQP7TMyS15WG5/sIJ8ofZ5QnHPHuoUx7/6E3pHTotC6bOkY2X/UZmVvLfxxFCgkPRWLwQ3bv29SnRVe8Ho/LU4dPy4rHBkWNePbJHHjqwXYkuePfEQVm5e+vIe0IICQJFI7z/jgwpsbV5/uiZkdfPHuwc8/nRgZPyxvEDQgghQaFohPfUuVjaY5JZthBfQggJCkUjvJdUlQghhHwTKJrg2o8ml8of6srlr92D8k0iEumT1pd2yO5dXbJ//8fS3f252l9TM0nmzbvY2b4n1yxplEWL5ktQ+d3N9468br5piSxdulj8YuOGzbJ/38fq9dxLvydr194lxJ1dTh9rfand6Wt7M+pn+/d/IhvXPzbyfs26u9V3xgvU49FHnhl5/9CmP0ldkf3rsqLKarj9OxUqkwH+Xk11SUiKla1bX1YdKBI5NeYz7EMHw7Z1a5vTsWbI8y9uCmQHQxk1C30eIPY5orvb+H0yFgjn/fc+pAZ2G7d+9tCm+xMEWB8z8r7nlIwn3YePJ5SnGCkq4QW1FWG5vmKCFDv33/ugtLa2ez6+u/u4XNl0i3S9/4qyUvLFeFqrpPDAssU1tgd3/Mdb9CNt+Y4ef1wdn+9+RhIJlPD2DsXknyfOumYv2FwysUR+OrVMsuHdE4fkg8gxqSmrULm+fuf5trQ8kyC6uAmWr2iWpY7wmRbt/n2fKCsEFh1ukGZHFPN9M4yntUoKjy26q1b/XlasvDGhH6Gftbd3SFvrDtXPYO1SdAtLYIRX5+l6EV0NFlFs/uFE9dcrmz9+Uy2w0EB0tyxc4Zv4omOb/ikIbdyFMGPMsfMuvVgedvxXsEK2bnlZ3TCEeAWCir6jWbP2btc+hH6GDZ+1OH1z8eImIYUlMFkNWJGWiegCHL/howHPxx8d+DpBdOP7Tsqa914WvzBFFyQTXRN8vtYJaKQ7jhAT26e76IrUMxpYuehn6Y4juRMYi1evSMuUTMT6X18dct0P14MfYMrX6kznNJjS5UtMkR2xzXFLtO/oUMEUgBsJv7FGifaoCwPW8+vO1NKmrbU9IVCVbbRYlwXZGtqHiCg4XCnLV9yYlzp4waynznhAVB9Tau1iQfvj/Kvu+X1OgctkGQOwHptvWuyaLYD+cMft60berxkeXN3abvnK5pz9725B3HyB+qPv7OrsUtdO/5bOmEjXvqgrrotZb51xgdhD/F7xfn0QuIbFr1ma5BqMF4ER3urSkPLxZvO9dHy/pjbl5365GbSYaK7J05ROB1DMaSVA54fvDttqp+PDvxcvx8euUWF83z5HphxxynLdtXeMOQ/qvmH9Y+pmQNQ81zp4wa4nfOv2jAO/19oaj5I/8dT6rNKkNm54TIm8jR5osa1whHONlepmZwugvBBit7ZDMPaIsz+T+tfNThzUkdmQbR2ToQePZFkGKDs2fJ4sKydZdo+ZcRHP6nnYk6FiX+e4+AcrzTAwrgbk6GbDb2tHMxxuuWjRmM8hqldP/0GqU8ivZ10ufoA0GJN83AC2YMUDdTeqm7zZsJDgu/MjBadVBWiOq3IgWDfXqmOrYW2Kj3Uwcz9RpoWWBYXfhoBkahXaoouyY0DFljjLaFM5x6mAMKZqu0zrDwvPDJji3BgUsW1cv1mdC7OMXIBVGkt4H69/89IlY34bg4cNZgnIETbbHe220KXsXtAirsE9BsEPWrAwMBbvb2eWyyTHen3h6KCn5cHqO7Xlct2Fo8K7bE6jVJdVynOHOtXyYYjuxstGp7bVpRVjrNtb6hfJsvpG8QM7dScZuJl7etxvCPjfzCknOpnulG6BOhyPG1ofu8j5HAE7bGDORb8YORbWFKzKXFnhiCamlrqzQ2x1GcDrjivBnPZlU4dscDs3xOzRlviNijJsc0R0lcc2wPU0RRfXBe4CXW+ICURFZ7BAfK9ZnHoxzGrnGpi/b5YPYMaQyZT5YWd2ER/URvuetkKRMQNwvmym8xodjEPZbf+wOeDsGs7O0b+hAs1G3SDaTzy5IeEcakbiiDP+prN20c7mQg/8Diz8IGZoBCqdDIsjrr8wtxzdX9c1qM2Nq2fMVVtQsKeCGvg4U4m0Fl7bZxz3o82wjl0yLGyfD1s4pwraEdHZIT7JygBMl4ufdUBU3z43BhrtnwSwmLwKr52dYg42AK/RFu3tO0csOnvQMYGlaP82yrfNKZP+vu2uSgfq+/ftT6gBQqeL2ZjTefhCM3FnAGRDJMu4gV/ftPThTtHCC39wQtaFS2APZfJiDGh3zOj3pnsKXI8XfBC6j9hiYbseNLOczoKOozdYAm7YN2FdXa26sewNwQ1Nod0NyVKRZiW5Afyqgwp0LWlKW2YInNeZiZk1MNcpn9tNroODGohwMpIJcrLr7xWUAeL1Tsdz8vwLm5Qbxy1nGyIIC9ucnWQLXBhoR9uVETFmcmaAF2XEAJsNB5w+ZC4ECrrogkBZvJGtr0nvlu0J+6asu1WqFi9Qr4e6v5Sv7n3c+fuFhJ3OWL3ylzJp6VUJxw98+qycPviceCFcVi0Vc5ZJ+exfiR/UzU6cxiW7wV+wptL3OSN5m8sqN1u4f3fzHyUdkZ7cfHrpqM7QEvWrDqn86chhtcvkZcptDhqpzj/LOFcqH7IfU2JYlKZVCasTMw6zf+F9c4ZZALCo7eeNpKPHaItc4h24P3S7FoPogsAI78mWl6XnkbYx+6M9/SOvP7/5L0p040CEn5BopF9qVvxS7Rk8/Kr07/M+WiMR7dTeNRI72ysV371FCo3dkWG5YWqXL7ysPLPFP2gUqg6FTKVKhymo41kON7QQwyVgWo3wq3oRXrdsFL0cWc9ykj1L44jxnVzaxfxu3B31nmM9U3g90ffS2yk/729/1xDdUXq3vDYivKcdazcb+v+72RfhRWeEsOiOiKlWJHJX1pZOzeTE7z1chE9p8qsOqaL32d70KKe27lJZeQc8WsbjiQ6sebVWNfG821EBhSvD9tOaAVwTuI+8tF86EECDe0RfRwTY4ilkwWxrEBgfr5uompzZ95mkIzrUK9kAi9cvzEABOkou/jTbIml7aYfkQu84WGP5rkMyIA7JfMOv70j0u3pduWX6nd0WpGhMl8Rcn8UgnhGQXtS0L10z2aNf2WxTXEu77VL9tu2CyTb+gOsA8TXPBSs800CknwRGeMsXuWcbVFzhPQshXDlTsqFs2gLxCzu3EgsD7HQfm94k1pq2oDWIyLudB9Ye0nbcOrZpXY7Ho/byUQev2PmiQK04M7IqmjNYHbbciOTjvGZqlAbJ/KZFmCzAVwjQjvff96DqX4+2PJO0j6Ft7Rxbr4t7JpsP23EROnvBiondFvE85rFlREAS/SIVuK/MhTl6YUculnQhCYyr4fxNdwz7cL8c2Xfe6hultO4Cz+eYdPlGiexcKdGBo56/A7Ge6HzPT550Ruf46q54p8DNj0c+YmqEoIAOUPUOWwGppsJYW6+fQIUN50GUXltW+I24S+NU3CKxAndIdNeCgRvnyqZlKuoNPx2sFz+CFLnWwSuo33XX3qnOXe3Ub/dwGpVJJnnMehDVriO1wMEJVmEfBkt75RxE3c8H0GjR09kK2NDHTP/rAaeMtmAudLFck4Fj24etfS12CMzhmb0I2KUaKNF+6GvbhkVVP/pUX3vzusezHlI/nQ9ZEfhdnb6mH3EZxOdYB0Z4IbDTX/yznO484ATM+mTCvIsca3deRucoqZopU36xXc4ce0OGIh+mPT7sHF8+42oJlVWLn6DzILcSS2jNaLJObE+F3YFwI2GkN31ceomtDTqinQOL/EszvxPHYAEHgL/OD+HNtQ5eQD0wtd09/MBvN7AAINP6ug2ibmKDOuZjcUomrLrnVjnstNfuhGXJun+5CyKE9Elj2p4O3X/0ee3rhsGmLcVzp9EmWmA17tc+pn4jXcAPS7P17AgEVXwDlU4G8Z10k3cLNxkTaq9WW5CBcCCQhFEaU934yO7uUsDojw4HS8DNEsH+edsvVhaN23mUBeNs9nNYdTnQKZN91y9yqYNXkKYXH+x2JJwf53ZbdeUFlAX5sQgyuU3ncbNjVuG36MZ/e4aqs04Z0891tsHsBnnI2baB7j92u+oVjKmEF+0HoUf7wZ1wwDI8UDa0H66710FRt7UpvnfcvjZQS4dDHZ1dan1u46LLJMicfKRNelrG+nkg1rM6WtTrM8fflOjZyMhnE87/cdZ+3/FABTiMvFasbMtmlNbnQSdD6lUmnU1/N9vfzhe51EFj5j/jpn2nYzTrRT+5KttzJwPWOM6NcyJjI2hTXF0+Tb6vc67tapZvvPtgIdi56z31t+j+9U8q+vY9KNH+Uf8uxt6q798llZfcKcWAXqk2nufJVxlypdDlsBdN5Au1Ui3Az7MtdPlybdegt1+++MYvGe7/cLOc/epdIYSQoPCteFbDUM8HQgghQaFohDdZWlm4plLS4XfWAiGEpKJohLdqyQJHfM8fs7965bUjryvmjF32i+Ba2bQfC/n2gayRg5/9Q21mYI2Q8aZohDdcU6XyfPUKN7yfsvbWhKeTVX53mQqk6UyG0mkLpKZxi8rvJYSQoFA06WSEEFLs6HQyPgidEEJ8hsJLCCE+Q+ElhBCfofASQojPUHgJIcRnKLyEEOIzFF5CCPEZCi8hhPgMhZcQQnyGwksIIT5D4SWEEJ8Jx2Kxz/BicPCMEEIIKQx9fQP65aFwSGJ78erE1xEhhBBSGPr6T6u/sah0hWMib+HNVyd6hBBCSGE4PPwfnkPh6Cvhs5XytMTkJP4t87HjXwohhJD8Am2FOzfkuBmarmh4OvzzhoaT5yS6HB9Ckfv6B4QQQkh+gKZqazcm0fX4G9IfduzsanHerSotLZHZddOldsb5QgghJHtg6UJ0h4Yc8zYaXX9lU8MD2B8yD+ro7MLOdXhdXj5BCfCkiZVSVVUhhBBC0jM4eFZOfN0jJ05EpCdyKr4zFn20qbFhtT4mZH+po3PPbSEJr3OCbvVCCCEke5z4WagkurxxYcMr5u5QsuMhwLFo+AYJx+pDEpovhBBC0qLWRsRCeyUUfctxGDzd4MTR7GP+D1LU4ED1Djp1AAAAAElFTkSuQmCC";
;// ./frontend/pages/DashboardPage/cards/WelcomeHost/WelcomeHost.tsx

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













const WelcomeHost_baseClass = "welcome-host";
const HOST_ID = 1;
const POLICY_PASS = "pass";
const POLICY_FAIL = "fail";
const WelcomeHost = ({
  totalsHostsCount,
  toggleAddHostsModal
}) => {
  var _a, _b;
  const [refetchStartTime, setRefetchStartTime] = (0,react.useState)(null);
  const [currentPolicyShown, setCurrentPolicyShown] = (0,react.useState)();
  const [showPolicyModal, setShowPolicyModal] = (0,react.useState)(false);
  const [isPoliciesEmpty, setIsPoliciesEmpty] = (0,react.useState)(false);
  const [showRefetchLoadingSpinner, setShowRefetchLoadingSpinner] = (0,react.useState)(
    false
  );
  const {
    isLoading: isLoadingHost,
    data: host,
    error: loadingHostError,
    refetch: fullyReloadHost
  } = (0,es.useQuery)(
    ["host"],
    () => entities_hosts/* default */.A.loadHostDetails(HOST_ID),
    {
      retry: false,
      select: (data) => data.host,
      onSuccess: (returnedHost) => {
        var _a2;
        setShowRefetchLoadingSpinner(returnedHost.refetch_requested);
        const anyPassingOrFailingPolicy = (_a2 = returnedHost == null ? void 0 : returnedHost.policies) == null ? void 0 : _a2.find(
          (p) => p.response === POLICY_PASS || p.response === POLICY_FAIL
        );
        setIsPoliciesEmpty(typeof anyPassingOrFailingPolicy === "undefined");
        if (returnedHost.refetch_requested) {
          if (!refetchStartTime) {
            if (returnedHost.status === "online") {
              setRefetchStartTime(Date.now());
              setTimeout(() => {
                fullyReloadHost();
              }, 1e3);
            } else {
              setShowRefetchLoadingSpinner(false);
            }
          } else {
            const totalElapsedTime = Date.now() - refetchStartTime;
            if (totalElapsedTime < 6e4) {
              if (returnedHost.status === "online") {
                setTimeout(() => {
                  fullyReloadHost();
                }, 1e3);
              } else {
                ToastNotification/* notify */.me.error(
                  `This host is offline. Please try refetching host vitals later.`
                );
                setShowRefetchLoadingSpinner(false);
              }
            } else {
              ToastNotification/* notify */.me.error(
                `Refetch sent but vitals are taking longer than expected to load. You\u2019ll see an update when the host responds.`
              );
              setShowRefetchLoadingSpinner(false);
            }
          }
        }
      },
      onError: (error) => {
        console.error(error);
      }
    }
  );
  const onRefetchHost = () => __async(null, null, function* () {
    if (host) {
      setShowRefetchLoadingSpinner(true);
      try {
        yield entities_hosts/* default */.A.refetch(host).then(() => {
          setRefetchStartTime(Date.now());
          setTimeout(() => fullyReloadHost(), 1e3);
        });
      } catch (error) {
        console.error(error);
        ToastNotification/* notify */.me.error(`Host "${host.display_name}" refetch error`, {
          response: error
        });
        setShowRefetchLoadingSpinner(false);
      }
    }
  });
  const handlePolicyModal = (id) => {
    const policy = host == null ? void 0 : host.policies.find((p) => p.id === id);
    if (policy) {
      setCurrentPolicyShown(policy);
      setShowPolicyModal(true);
    }
  };
  if (isLoadingHost) {
    return /* @__PURE__ */ react.createElement("div", { className: WelcomeHost_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__loading` }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, null)));
  }
  if (loadingHostError) {
    return /* @__PURE__ */ react.createElement("div", { className: WelcomeHost_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__empty-hosts` }, /* @__PURE__ */ react.createElement("p", null, "Add your personal device to assess the security of your device."), /* @__PURE__ */ react.createElement("p", null, 'In Fleet, laptops, workstations, and servers are referred to as "hosts".'), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: toggleAddHostsModal,
        className: `${WelcomeHost_baseClass}__add-host`
      },
      /* @__PURE__ */ react.createElement("span", null, "Add hosts")
    )));
  }
  if (totalsHostsCount === 1 && host && host.status === "offline") {
    return /* @__PURE__ */ react.createElement("div", { className: WelcomeHost_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__error` }, /* @__PURE__ */ react.createElement("p", { className: "error-message" }, /* @__PURE__ */ react.createElement(Icon_Icon/* default */.A, { name: "disable", color: "status-error" }), "Your device is not communicating with Fleet."), /* @__PURE__ */ react.createElement("p", null, "Join the #fleet Slack channel for help troubleshooting."), /* @__PURE__ */ react.createElement(
      "a",
      {
        target: "_blank",
        rel: "noreferrer",
        href: "https://osquery.slack.com/archives/C01DXJL16D8"
      },
      /* @__PURE__ */ react.createElement(
        "img",
        {
          alt: "Get help on Slack",
          className: "button-slack",
          src: slack_button_get_help_namespaceObject
        }
      )
    )));
  }
  if (isPoliciesEmpty) {
    return /* @__PURE__ */ react.createElement("div", { className: WelcomeHost_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__error` }, /* @__PURE__ */ react.createElement("p", { className: "error-message" }, /* @__PURE__ */ react.createElement(Icon_Icon/* default */.A, { name: "disable", color: "status-error" }), "No policies apply to your device."), /* @__PURE__ */ react.createElement("p", null, "Join the #fleet Slack channel for help troubleshooting."), /* @__PURE__ */ react.createElement(
      "a",
      {
        target: "_blank",
        rel: "noreferrer",
        href: "https://osquery.slack.com/archives/C01DXJL16D8"
      },
      /* @__PURE__ */ react.createElement(
        "img",
        {
          alt: "Get help on Slack",
          className: "button-slack",
          src: slack_button_get_help_namespaceObject
        }
      )
    )));
  }
  if (totalsHostsCount === 1 && host && host.status === "online") {
    return /* @__PURE__ */ react.createElement("div", { className: WelcomeHost_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__intro` }, /* @__PURE__ */ react.createElement("img", { alt: "", src: laptop_mac_namespaceObject }), /* @__PURE__ */ react.createElement("div", { className: "info" }, /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: paths/* default */.A.HOST_DETAILS(host.id),
        text: host.display_name
      }
    ), /* @__PURE__ */ react.createElement("p", null, "Your host is successfully connected to Fleet."))), /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__blurb` }, /* @__PURE__ */ react.createElement("p", null, "Mesh already ran the following policies to assess the security of your device:", " ")), /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__policies` }, (_a = host.policies) == null ? void 0 : _a.slice(0, 3).map((p) => {
      if (p.response) {
        return /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "unstyled",
            onClick: () => handlePolicyModal(p.id)
          },
          /* @__PURE__ */ react.createElement("div", { className: "policy-block" }, /* @__PURE__ */ react.createElement(
            Icon_Icon/* default */.A,
            {
              name: p.response === POLICY_PASS ? "success" : "error-outline"
            }
          ), /* @__PURE__ */ react.createElement("span", { className: "info" }, p.name), /* @__PURE__ */ react.createElement(
            Icon_Icon/* default */.A,
            {
              name: "chevron-right",
              color: "ui-fleet-black-75",
              className: "policy-arrow"
            }
          ))
        );
      }
      return null;
    }), /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__view-all-policies` }, ((_b = host.policies) == null ? void 0 : _b.length) > 3 && /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: paths/* default */.A.HOST_POLICIES(host.id),
        text: "View all host's policies"
      }
    ))), /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__blurb` }, /* @__PURE__ */ react.createElement("p", null, "Resolved a failing policy? Refetch your host vitals to verify.")), /* @__PURE__ */ react.createElement("div", { className: `${WelcomeHost_baseClass}__refetch` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `refetch-spinner ${showRefetchLoadingSpinner ? "spin" : ""}`,
        onClick: onRefetchHost,
        disabled: showRefetchLoadingSpinner
      },
      /* @__PURE__ */ react.createElement(Icon_Icon/* default */.A, { name: "refresh", color: "core-fleet-white" }),
      " Refetch"
    ), /* @__PURE__ */ react.createElement("span", null, "Last updated", " ", (0,date_format/* timeAgo */.fF)(new Date(host.detail_updated_at), {
      addSuffix: true
    }))), showPolicyModal && /* @__PURE__ */ react.createElement(
      Modal/* default */.A,
      {
        title: (currentPolicyShown == null ? void 0 : currentPolicyShown.name) || "",
        onExit: () => setShowPolicyModal(false),
        onEnter: () => setShowPolicyModal(false),
        className: `${WelcomeHost_baseClass}__policy-modal`
      },
      /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, currentPolicyShown == null ? void 0 : currentPolicyShown.description), (currentPolicyShown == null ? void 0 : currentPolicyShown.resolution) && /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement("b", null, "Resolve:"), " ", currentPolicyShown.resolution), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: () => setShowPolicyModal(false) }, "Close")))
    ));
  }
  return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
};
/* harmony default export */ var WelcomeHost_WelcomeHost = (WelcomeHost);

;// ./frontend/pages/DashboardPage/cards/WelcomeHost/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
// EXTERNAL MODULE: ./frontend/components/forms/validators/valid_url/valid_url.ts
var valid_url = __webpack_require__(90879);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
;// ./frontend/pages/DashboardPage/components/ActivityFeedAutomationsModal/ActivityFeedAutomationsModal.tsx

var ActivityFeedAutomationsModal_defProp = Object.defineProperty;
var ActivityFeedAutomationsModal_defProps = Object.defineProperties;
var ActivityFeedAutomationsModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ActivityFeedAutomationsModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ActivityFeedAutomationsModal_hasOwnProp = Object.prototype.hasOwnProperty;
var ActivityFeedAutomationsModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var ActivityFeedAutomationsModal_defNormalProp = (obj, key, value) => key in obj ? ActivityFeedAutomationsModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ActivityFeedAutomationsModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ActivityFeedAutomationsModal_hasOwnProp.call(b, prop))
      ActivityFeedAutomationsModal_defNormalProp(a, prop, b[prop]);
  if (ActivityFeedAutomationsModal_getOwnPropSymbols)
    for (var prop of ActivityFeedAutomationsModal_getOwnPropSymbols(b)) {
      if (ActivityFeedAutomationsModal_propIsEnum.call(b, prop))
        ActivityFeedAutomationsModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ActivityFeedAutomationsModal_spreadProps = (a, b) => ActivityFeedAutomationsModal_defProps(a, ActivityFeedAutomationsModal_getOwnPropDescs(b));










const ActivityFeedAutomationsModal_baseClass = "activity-feed-automations-modal";
const ActivityFeedAutomationsModal = ({
  automationSettings,
  onSubmit,
  onExit,
  isUpdating
}) => {
  const { enable_activities_webhook: enabled, destination_url: url } = automationSettings || {};
  const [formData, setFormData] = (0,react.useState)({
    enabled,
    url
  });
  const [formErrors, setFormErrors] = (0,react.useState)(
    {}
  );
  const [showExamplePayload, setShowExamplePayload] = (0,react.useState)(false);
  const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)();
  const validateForm = (newFormData) => {
    const errors = {};
    const { url: newUrl } = newFormData;
    if (formData.enabled && !(0,valid_url/* default */.A)({ url: newUrl || "", protocols: ["http", "https"] })) {
      const errorPrefix = newUrl ? `${newUrl} is not` : "Please enter";
      errors.url = `${errorPrefix} a valid destination URL`;
    }
    return errors;
  };
  const onFeatureEnabledChange = () => {
    const newFormData = ActivityFeedAutomationsModal_spreadProps(ActivityFeedAutomationsModal_spreadValues({}, formData), { enabled: !formData.enabled });
    const isDisabling = newFormData.enabled === false;
    if (isDisabling) {
      const errors = validateForm(newFormData);
      if (errors.url) {
        newFormData.url = "";
        delete formErrors.url;
        setFormErrors(formErrors);
      }
      setShowExamplePayload(false);
    }
    setFormData(newFormData);
  };
  const onUrlChange = (value) => {
    const newFormData = ActivityFeedAutomationsModal_spreadProps(ActivityFeedAutomationsModal_spreadValues({}, formData), { url: value });
    if (formErrors.url) {
      setFormErrors(validateForm(newFormData));
    }
    setFormData(newFormData);
  };
  const onModalSubmit = () => {
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
            activity_id: 123,
            actor_full_name: "Anna Chao",
            actor_id: 321,
            actor_email: "anna.chao@example.com",
            type: "live_query",
            details: {
              query_sql: "SELECT * FROM os_version",
              targets_count: 1
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
      className: ActivityFeedAutomationsModal_baseClass,
      title: "Manage automations",
      width: "large",
      onExit,
      onEnter: onModalSubmit
    },
    /* @__PURE__ */ react.createElement("div", { className: `${ActivityFeedAutomationsModal_baseClass} form` }, /* @__PURE__ */ react.createElement(
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
        className: `${ActivityFeedAutomationsModal_baseClass}__show-example-payload-toggle`,
        hideText: "Example payload",
        showText: "Example payload",
        caretPosition: "after",
        onClick: () => {
          setShowExamplePayload(!showExamplePayload);
        }
      }
    ), showExamplePayload && renderExamplePayload(), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        onClick: onModalSubmit,
        className: "save-loading",
        isLoading: isUpdating,
        disabled: Object.keys(formErrors).length > 0
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var ActivityFeedAutomationsModal_ActivityFeedAutomationsModal = (ActivityFeedAutomationsModal);

;// ./frontend/pages/DashboardPage/components/ActivityFeedAutomationsModal/index.ts



// EXTERNAL MODULE: ./frontend/components/buttons/AutomationsButton/index.ts + 1 modules
var AutomationsButton = __webpack_require__(85396);
;// ./frontend/pages/DashboardPage/components/InfoCard/InfoCard.tsx







const InfoCard_baseClass = "dashboard-info-card";
const useInfoCard = ({
  title,
  titleDetail: defaultTitleDetail,
  description: defaultDescription,
  actionUrl: defaultActionUrl,
  children,
  action,
  total_host_count,
  showTitle = true,
  className
}) => {
  const [actionLink, setActionURL] = (0,react.useState)(
    defaultActionUrl || null
  );
  const [titleDetail, setTitleDetail] = (0,react.useState)(
    defaultTitleDetail || null
  );
  const [description, setDescription] = (0,react.useState)(
    defaultDescription || null
  );
  (0,react.useEffect)(() => {
    if (defaultTitleDetail) {
      setTitleDetail(defaultTitleDetail);
    }
  }, [defaultTitleDetail]);
  const renderAction = () => {
    if (action) {
      if (action.type === "automations") {
        return /* @__PURE__ */ react.createElement(
          AutomationsButton/* default */.A,
          {
            className: `${InfoCard_baseClass}__action-button`,
            size: "small",
            onClick: action.onClick
          }
        );
      }
      if (action.type === "button") {
        return /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            className: `${InfoCard_baseClass}__action-button`,
            variant: "secondary",
            size: "small",
            onClick: action.onClick
          },
          /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", { className: `${InfoCard_baseClass}__action-button-text` }, action.text))
        );
      }
      const linkTo = actionLink || action.to;
      if (linkTo) {
        const onClick = () => {
          react_router_es/* browserHistory */.Nc.push(linkTo);
        };
        return /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "secondary",
            onClick,
            className: `${InfoCard_baseClass}__action-button`,
            size: "small"
          },
          /* @__PURE__ */ react.createElement("span", { className: `${InfoCard_baseClass}__action-button-text` }, action.text)
        );
      }
    }
    return null;
  };
  const clonedChildren = react.Children.toArray(children).map((child) => {
    if (react.isValidElement(child)) {
      child = react.cloneElement(child, {
        setTitleDetail,
        setTitleDescription: setDescription,
        setActionURL
      });
    }
    return child;
  });
  const classNames = classnames_default()(InfoCard_baseClass, className);
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: classNames, paddingSize: "xlarge" }, showTitle && /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("div", { className: `${InfoCard_baseClass}__section-title-cta` }, /* @__PURE__ */ react.createElement("div", { className: `${InfoCard_baseClass}__section-title-group` }, /* @__PURE__ */ react.createElement("div", { className: `${InfoCard_baseClass}__section-title` }, /* @__PURE__ */ react.createElement("h2", null, title), total_host_count !== void 0 && /* @__PURE__ */ react.createElement("span", null, total_host_count)), titleDetail && /* @__PURE__ */ react.createElement("div", { className: `${InfoCard_baseClass}__section-title-detail` }, titleDetail)), renderAction()), description && /* @__PURE__ */ react.createElement("div", { className: `${InfoCard_baseClass}__section-description` }, description)), clonedChildren);
};
/* harmony default export */ var InfoCard = (useInfoCard);

;// ./frontend/pages/DashboardPage/components/InfoCard/index.ts



;// ./frontend/pages/DashboardPage/components/MdmSolutionModal/MdmSolutionModalTableConfig.tsx

var MdmSolutionModalTableConfig_defProp = Object.defineProperty;
var MdmSolutionModalTableConfig_defProps = Object.defineProperties;
var MdmSolutionModalTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var MdmSolutionModalTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MdmSolutionModalTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var MdmSolutionModalTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var MdmSolutionModalTableConfig_defNormalProp = (obj, key, value) => key in obj ? MdmSolutionModalTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MdmSolutionModalTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MdmSolutionModalTableConfig_hasOwnProp.call(b, prop))
      MdmSolutionModalTableConfig_defNormalProp(a, prop, b[prop]);
  if (MdmSolutionModalTableConfig_getOwnPropSymbols)
    for (var prop of MdmSolutionModalTableConfig_getOwnPropSymbols(b)) {
      if (MdmSolutionModalTableConfig_propIsEnum.call(b, prop))
        MdmSolutionModalTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var MdmSolutionModalTableConfig_spreadProps = (a, b) => MdmSolutionModalTableConfig_defProps(a, MdmSolutionModalTableConfig_getOwnPropDescs(b));





const MdmSolutionModalTableConfig_generateSolutionsTableHeaders = (teamId) => [
  {
    title: "Server URL",
    Header: () => {
      const titleWithToolTip = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "The MDM server URL is used to connect hosts with the MDM service. For cross-platform MDM solutions, each operating system has a different URL."),
          className: "server-url-header"
        },
        "Server URL"
      );
      return /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: titleWithToolTip, disableSortBy: true });
    },
    disableSortBy: true,
    accessor: "server_url",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
  },
  {
    title: "Hosts",
    Header: "Hosts",
    disableSortBy: true,
    accessor: "hosts_count",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement("div", { className: "host-count-cell" }, /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value, className: "" }), /* @__PURE__ */ react.createElement(
      ViewAllHostsLink/* default */.A,
      {
        queryParams: { mdm_id: cellProps.row.original.id, fleet_id: teamId },
        className: "view-mdm-solution-link",
        platformLabelId: cellProps.row.original.selectedPlatformLabelId,
        rowHover: true
      }
    ))
  }
];
const MdmSolutionModalTableConfig_generateSolutionsDataSet = (solutions, selectedPlatformLabelId) => {
  if (!solutions) {
    return [];
  }
  return solutions.map((solution) => {
    return MdmSolutionModalTableConfig_spreadProps(MdmSolutionModalTableConfig_spreadValues({}, solution), {
      selectedPlatformLabelId
    });
  });
};

;// ./frontend/pages/DashboardPage/components/MdmSolutionModal/MdmSolutionModal.tsx






const MdmSolutionModal_baseClass = "mdm-solution-modal";
const MdmSolutionModal_SOLUTIONS_DEFAULT_SORT_HEADER = "hosts_count";
const MdmSolutionModal_DEFAULT_SORT_DIRECTION = "desc";
const DEFAULT_TITLE = "Unknown MDM solution";
const MdmSolutionModal = ({
  mdmSolutions,
  selectedPlatformLabelId,
  selectedTeamId,
  onCancel
}) => {
  const solutionsTableHeaders = (0,react.useMemo)(
    () => MdmSolutionModalTableConfig_generateSolutionsTableHeaders(selectedTeamId),
    [selectedTeamId]
  );
  const solutionsDataSet = MdmSolutionModalTableConfig_generateSolutionsDataSet(
    mdmSolutions,
    selectedPlatformLabelId
  );
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: MdmSolutionModal_baseClass,
      title: mdmSolutions[0].name || DEFAULT_TITLE,
      width: "large",
      onExit: onCancel,
      onEnter: onCancel
    },
    /* @__PURE__ */ react.createElement("div", { className: `${MdmSolutionModal_baseClass}__modal-content` }, /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        isLoading: false,
        emptyComponent: () => null,
        columnConfigs: solutionsTableHeaders,
        data: solutionsDataSet,
        defaultSortHeader: MdmSolutionModal_SOLUTIONS_DEFAULT_SORT_HEADER,
        defaultSortDirection: MdmSolutionModal_DEFAULT_SORT_DIRECTION,
        resultsTitle: "MDM",
        showMarkAllPages: false,
        isAllPagesSelected: false,
        disableCount: true,
        disablePagination: true,
        disableTableHeader: true
      }
    )),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: onCancel }, "Close"))
  );
};
/* harmony default export */ var MdmSolutionModal_MdmSolutionModal = (MdmSolutionModal);

;// ./frontend/pages/DashboardPage/components/MdmSolutionModal/index.ts



;// ./frontend/pages/DashboardPage/helpers.ts


const PLATFORM_DROPDOWN_OPTIONS = [
  { label: "All", value: "all", path: paths/* default */.A.DASHBOARD },
  { label: "macOS", value: "darwin", path: paths/* default */.A.DASHBOARD_MAC },
  { label: "Windows", value: "windows", path: paths/* default */.A.DASHBOARD_WINDOWS },
  { label: "Linux", value: "linux", path: paths/* default */.A.DASHBOARD_LINUX },
  { label: "ChromeOS", value: "chrome", path: paths/* default */.A.DASHBOARD_CHROME },
  { label: "iOS", value: "ios", path: paths/* default */.A.DASHBOARD_IOS },
  { label: "iPadOS", value: "ipados", path: paths/* default */.A.DASHBOARD_IPADOS },
  { label: "Android", value: "android", path: paths/* default */.A.DASHBOARD_ANDROID }
];
const LOW_DISK_SPACE_GB = 32;

// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/ABMIssueHosts/ABMIssueHosts.tsx
var ABMIssueHosts = __webpack_require__(19543);
;// ./frontend/pages/DashboardPage/cards/ABMIssueHosts/index.ts



// EXTERNAL MODULE: ./frontend/pages/DashboardPage/cards/HostCountCard/index.tsx + 1 modules
var HostCountCard = __webpack_require__(44051);
;// ./frontend/pages/DashboardPage/cards/LowDiskSpaceHosts/LowDiskSpaceHosts.tsx





const LowDiskSpaceHosts_baseClass = "hosts-low-space";
const LowDiskSpaceHosts = ({
  lowDiskSpaceGb,
  lowDiskSpaceCount,
  selectedPlatformLabelId,
  currentTeamId,
  notSupported = false
  // default to supporting this feature
}) => {
  const endpoint = selectedPlatformLabelId ? paths/* default */.A.MANAGE_HOSTS_LABEL(selectedPlatformLabelId) : paths/* default */.A.MANAGE_HOSTS;
  const path = (0,url/* getPathWithQueryParams */.M8)(endpoint, {
    low_disk_space: lowDiskSpaceGb,
    fleet_id: currentTeamId
  });
  const tooltipText = notSupported ? "Disk space info is not available for Chromebooks." : `Hosts that have ${lowDiskSpaceGb} GB or less disk space available.`;
  return /* @__PURE__ */ react.createElement(
    HostCountCard/* default */.A,
    {
      iconName: "low-disk-space-hosts",
      count: lowDiskSpaceCount,
      title: "Low disk space hosts",
      tooltip: tooltipText,
      path,
      notSupported,
      className: LowDiskSpaceHosts_baseClass,
      iconPosition: "left"
    }
  );
};
/* harmony default export */ var LowDiskSpaceHosts_LowDiskSpaceHosts = (LowDiskSpaceHosts);

;// ./frontend/pages/DashboardPage/cards/LowDiskSpaceHosts/index.ts



;// ./frontend/pages/DashboardPage/cards/MissingHosts/MissingHosts.tsx





const MissingHosts_baseClass = "hosts-missing";
const MissingHosts = ({
  missingCount,
  selectedPlatformLabelId,
  currentTeamId
}) => {
  const queryParams = {
    status: "missing",
    fleet_id: currentTeamId
  };
  const endpoint = selectedPlatformLabelId ? paths/* default */.A.MANAGE_HOSTS_LABEL(selectedPlatformLabelId) : paths/* default */.A.MANAGE_HOSTS;
  const path = (0,url/* getPathWithQueryParams */.M8)(endpoint, queryParams);
  return /* @__PURE__ */ react.createElement(
    HostCountCard/* default */.A,
    {
      iconName: "missing-hosts",
      count: missingCount,
      title: "Missing hosts",
      tooltip: "Hosts that have not been online in 30 days or more.",
      path,
      className: MissingHosts_baseClass,
      iconPosition: "left"
    }
  );
};
/* harmony default export */ var MissingHosts_MissingHosts = (MissingHosts);

;// ./frontend/pages/DashboardPage/cards/MissingHosts/index.ts



;// ./frontend/pages/DashboardPage/cards/TotalHosts/TotalHosts.tsx





const TotalHosts_baseClass = "hosts-total";
const TOOLTIP_TEXT = "Total number of hosts.";
const TotalHosts = ({
  totalCount,
  selectedPlatformLabelId,
  currentTeamId
}) => {
  const endpoint = selectedPlatformLabelId ? paths/* default */.A.MANAGE_HOSTS_LABEL(selectedPlatformLabelId) : paths/* default */.A.MANAGE_HOSTS;
  const path = (0,url/* getPathWithQueryParams */.M8)(endpoint, {
    fleet_id: currentTeamId
  });
  return /* @__PURE__ */ react.createElement(
    HostCountCard/* default */.A,
    {
      iconName: "total-hosts",
      count: totalCount || 0,
      title: "Total hosts",
      tooltip: TOOLTIP_TEXT,
      path,
      className: TotalHosts_baseClass,
      iconPosition: "left"
    }
  );
};
/* harmony default export */ var TotalHosts_TotalHosts = (TotalHosts);

;// ./frontend/pages/DashboardPage/cards/TotalHosts/index.ts



;// ./frontend/pages/DashboardPage/sections/MetricsHostCounts/MetricsHostCounts.tsx







const MetricsHostCounts_baseClass = "metrics-host-counts";
const MetricsHostCounts = ({
  currentTeamId,
  selectedPlatform,
  totalHostCount,
  isPremiumTier,
  missingCount,
  lowDiskSpaceCount,
  abmIssueCount,
  selectedPlatformLabelId
}) => {
  const TotalHostsCard = /* @__PURE__ */ react.createElement(
    TotalHosts_TotalHosts,
    {
      totalCount: totalHostCount,
      selectedPlatformLabelId,
      currentTeamId
    }
  );
  const MissingHostsCard = /* @__PURE__ */ react.createElement(
    MissingHosts_MissingHosts,
    {
      missingCount,
      selectedPlatformLabelId,
      currentTeamId
    }
  );
  const LowDiskSpaceHostsCard = /* @__PURE__ */ react.createElement(
    LowDiskSpaceHosts_LowDiskSpaceHosts,
    {
      lowDiskSpaceGb: LOW_DISK_SPACE_GB,
      lowDiskSpaceCount,
      selectedPlatformLabelId,
      currentTeamId,
      notSupported: selectedPlatform === "chrome"
    }
  );
  const ABMIssueHostsCard = abmIssueCount ? /* @__PURE__ */ react.createElement(
    ABMIssueHosts/* default */.A,
    {
      abmIssueCount,
      selectedPlatformLabelId,
      currentTeamId
    }
  ) : null;
  const showMissingAndLowDiskHosts = selectedPlatform !== "ios" && selectedPlatform !== "ipados" && selectedPlatform !== "android";
  return /* @__PURE__ */ react.createElement("div", { className: MetricsHostCounts_baseClass }, selectedPlatform === "all" && TotalHostsCard, showMissingAndLowDiskHosts && MissingHostsCard, isPremiumTier && showMissingAndLowDiskHosts && LowDiskSpaceHostsCard, ABMIssueHostsCard);
};
/* harmony default export */ var MetricsHostCounts_MetricsHostCounts = (MetricsHostCounts);

;// ./frontend/pages/DashboardPage/sections/MetricsHostCounts/index.ts



;// ./frontend/pages/DashboardPage/DashboardPage.tsx

var DashboardPage_defProp = Object.defineProperty;
var DashboardPage_defProps = Object.defineProperties;
var DashboardPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DashboardPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DashboardPage_hasOwnProp = Object.prototype.hasOwnProperty;
var DashboardPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var DashboardPage_defNormalProp = (obj, key, value) => key in obj ? DashboardPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DashboardPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DashboardPage_hasOwnProp.call(b, prop))
      DashboardPage_defNormalProp(a, prop, b[prop]);
  if (DashboardPage_getOwnPropSymbols)
    for (var prop of DashboardPage_getOwnPropSymbols(b)) {
      if (DashboardPage_propIsEnum.call(b, prop))
        DashboardPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DashboardPage_spreadProps = (a, b) => DashboardPage_defProps(a, DashboardPage_getOwnPropDescs(b));
var DashboardPage_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (DashboardPage_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && DashboardPage_getOwnPropSymbols)
    for (var prop of DashboardPage_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && DashboardPage_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DashboardPage_async = (__this, __arguments, generator) => {
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










































const DashboardPage_baseClass = "dashboard-page";
const DashboardPage = ({ router, location }) => {
  var _a, _b;
  const { pathname } = location;
  const {
    isGlobalAdmin,
    isGlobalMaintainer,
    isPremiumTier,
    isOnGlobalTeam
  } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    currentTeamId,
    currentTeamName,
    isAnyTeamSelected,
    isRouteOk,
    isTeamAdmin,
    isTeamMaintainer,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* useTeamIdParam */.xs)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: false
  });
  const [
    selectedPlatform,
    setSelectedPlatform
  ] = (0,react.useState)("all");
  const [
    selectedPlatformLabelId,
    setSelectedPlatformLabelId
  ] = (0,react.useState)();
  const [labels, setLabels] = (0,react.useState)();
  const [missingCount, setMissingCount] = (0,react.useState)(0);
  const [lowDiskSpaceCount, setLowDiskSpaceCount] = (0,react.useState)(0);
  const [abmIssueCount, setAbmIssueCount] = (0,react.useState)(0);
  const [showActivityFeedTitle, setShowActivityFeedTitle] = (0,react.useState)(false);
  const [softwareTitleDetail, setSoftwareTitleDetail] = (0,react.useState)("");
  const [softwareNavTabIndex, setSoftwareNavTabIndex] = (0,react.useState)(0);
  const [softwarePageIndex, setSoftwarePageIndex] = (0,react.useState)(0);
  const [softwareActionUrl, setSoftwareActionUrl] = (0,react.useState)();
  const [showMdmCard, setShowMdmCard] = (0,react.useState)(true);
  const [showSoftwareCard, setShowSoftwareCard] = (0,react.useState)(false);
  const [showAddHostsModal, setShowAddHostsModal] = (0,react.useState)(false);
  const [showMdmSolutionModal, setShowMdmSolutionModal] = (0,react.useState)(false);
  const [
    showActivityFeedAutomationsModal,
    setShowActivityFeedAutomationsModal
  ] = (0,react.useState)(false);
  const [
    updatingActivityFeedAutomations,
    setUpdatingActivityFeedAutomations
  ] = (0,react.useState)(false);
  const [showOperatingSystemsUI, setShowOperatingSystemsUI] = (0,react.useState)(false);
  const [mdmStatusData, setMdmStatusData] = (0,react.useState)([]);
  const [mdmSolutions, setMdmSolutions] = (0,react.useState)([]);
  const selectedMdmSolutionName = (0,react.useRef)("");
  const [mdmTitleDetail, setMdmTitleDetail] = (0,react.useState)();
  const canEnrollHosts = isGlobalAdmin || isGlobalMaintainer || isTeamAdmin || isTeamMaintainer;
  const canEnrollGlobalHosts = isGlobalAdmin || isGlobalMaintainer;
  const canEditActivityFeedAutomations = isGlobalAdmin && teamIdForApi === team/* API_ALL_TEAMS_ID */.s_;
  (0,react.useEffect)(() => {
    if (location.query.manage_automations !== "1") return;
    if (isGlobalAdmin === void 0 || !isRouteOk) return;
    if (canEditActivityFeedAutomations) {
      setShowActivityFeedAutomationsModal(true);
    }
    const _a2 = location.query, { manage_automations } = _a2, rest = DashboardPage_objRest(_a2, ["manage_automations"]);
    router.replace({ pathname, query: rest });
  }, [
    location.query,
    pathname,
    router,
    canEditActivityFeedAutomations,
    setShowActivityFeedAutomationsModal,
    isGlobalAdmin,
    isRouteOk
  ]);
  (0,react.useEffect)(() => {
    var _a2, _b2;
    const platformByPathname = ((_b2 = (_a2 = PLATFORM_DROPDOWN_OPTIONS) == null ? void 0 : _a2.find((platform) => platform.path === pathname)) == null ? void 0 : _b2.value) || "all";
    setSelectedPlatform(platformByPathname);
  }, [pathname]);
  const { data: config, refetch: refetchConfig } = (0,es.useQuery)(["config"], () => entities_config/* default */.A.loadAll(), DashboardPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL));
  const { data: teams, isLoading: isLoadingTeams } = (0,es.useQuery)(["teams"], () => entities_teams/* default */.A.loadAll(), {
    enabled: !!isPremiumTier,
    select: (data) => data.teams.sort((a, b) => sort/* default */.A.caseInsensitiveAsc(a.name, b.name))
  });
  const {
    data: hostSummaryData,
    isFetching: isHostSummaryFetching,
    error: errorHosts
  } = (0,es.useQuery)(
    ["host summary", teamIdForApi, isPremiumTier, selectedPlatform],
    () => host_summary.getSummary({
      teamId: teamIdForApi,
      platform: selectedPlatform !== "all" ? selectedPlatform : void 0,
      lowDiskSpace: isPremiumTier ? LOW_DISK_SPACE_GB : void 0
    }),
    {
      enabled: isRouteOk,
      select: (data) => data,
      onSuccess: (data) => {
        setLabels(data.builtin_labels);
        setMissingCount(data.missing_30_days_count || 0);
        if (isPremiumTier) {
          setLowDiskSpaceCount(data.low_disk_space_count || 0);
          setAbmIssueCount(data.dep_assign_error_count || 0);
        }
      }
    }
  );
  const { data: hostSummaryTotals } = (0,es.useQuery)(
    ["host summary totals", teamIdForApi, isPremiumTier],
    () => host_summary.getSummary({
      teamId: teamIdForApi,
      lowDiskSpace: isPremiumTier ? LOW_DISK_SPACE_GB : void 0
    }),
    {
      enabled: isRouteOk
    }
  );
  const totalCounts = (0,react.useMemo)(() => {
    const base = {
      darwin: 0,
      windows: 0,
      linux: 0,
      chrome: 0,
      ios: 0,
      ipados: 0,
      android: 0
    };
    if (!(hostSummaryTotals == null ? void 0 : hostSummaryTotals.platforms)) {
      return base;
    }
    const counts = hostSummaryTotals.platforms.reduce(
      (acc, item) => {
        if (item.platform !== "linux" && item.platform in acc) {
          acc[item.platform] = item.hosts_count || 0;
        }
        return acc;
      },
      DashboardPage_spreadValues({}, base)
    );
    return DashboardPage_spreadProps(DashboardPage_spreadValues({}, counts), {
      linux: hostSummaryTotals.all_linux_count || 0
    });
  }, [hostSummaryTotals]);
  const { isLoading: isGlobalSecretsLoading, data: globalSecrets } = (0,es.useQuery)(["global secrets"], () => enroll_secret/* default */.A.getGlobalEnrollSecrets(), {
    enabled: isRouteOk && canEnrollGlobalHosts,
    select: (data) => data.secrets
  });
  const { data: teamSecrets } = (0,es.useQuery)(
    ["team secrets", teamIdForApi],
    () => {
      if (isAnyTeamSelected) {
        return enroll_secret/* default */.A.getTeamEnrollSecrets(teamIdForApi);
      }
      return { secrets: [] };
    },
    {
      enabled: isRouteOk && isAnyTeamSelected && canEnrollHosts,
      select: (data) => data.secrets
    }
  );
  const featuresConfig = isAnyTeamSelected ? (_a = teams == null ? void 0 : teams.find((t) => t.id === currentTeamId)) == null ? void 0 : _a.features : config == null ? void 0 : config.features;
  const isSoftwareEnabled = !!(featuresConfig == null ? void 0 : featuresConfig.enable_software_inventory);
  const teamHistoricalData = (0,react.useMemo)(
    () => {
      var _a2, _b2;
      return isAnyTeamSelected ? (_b2 = (_a2 = teams == null ? void 0 : teams.find((t) => t.id === currentTeamId)) == null ? void 0 : _a2.features) == null ? void 0 : _b2.historical_data : void 0;
    },
    [isAnyTeamSelected, teams, currentTeamId]
  );
  const historicalDataEnabled = (0,react.useMemo)(
    () => {
      var _a2, _b2;
      return {
        uptime: (0,charts/* isHistoricalDataEnabled */.aH)(
          (_a2 = config == null ? void 0 : config.features) == null ? void 0 : _a2.historical_data,
          teamHistoricalData,
          "uptime"
        ),
        vulnerabilities: (0,charts/* isHistoricalDataEnabled */.aH)(
          (_b2 = config == null ? void 0 : config.features) == null ? void 0 : _b2.historical_data,
          teamHistoricalData,
          "vulnerabilities"
        )
      };
    },
    [(_b = config == null ? void 0 : config.features) == null ? void 0 : _b.historical_data, teamHistoricalData]
  );
  const isViewingVulnerableSoftware = !!softwareNavTabIndex;
  const SOFTWARE_DEFAULT_SORT_DIRECTION = "desc";
  const SOFTWARE_DEFAULT_SORT_HEADER = "hosts_count";
  const SOFTWARE_DEFAULT_PAGE_SIZE = 8;
  const {
    data: software,
    isFetching: isSoftwareFetching,
    error: errorSoftware
  } = (0,es.useQuery)(
    [
      {
        scope: "software",
        page: softwarePageIndex,
        perPage: SOFTWARE_DEFAULT_PAGE_SIZE,
        orderDirection: SOFTWARE_DEFAULT_SORT_DIRECTION,
        orderKey: SOFTWARE_DEFAULT_SORT_HEADER,
        teamId: teamIdForApi,
        vulnerable: isViewingVulnerableSoftware
      }
    ],
    ({ queryKey }) => entities_software/* default */.A.load(queryKey[0]),
    {
      enabled: isRouteOk && isSoftwareEnabled,
      keepPreviousData: true,
      staleTime: 3e4
      // stale time can be adjusted if fresher data is desired based on software inventory interval
      // Don't use onSuccess for UI state: it won't run for cached data, only after a new fetch
    }
  );
  (0,react.useEffect)(() => {
    const hasSoftwareResults = !!(software == null ? void 0 : software.software) && software.software.length > 0;
    if (hasSoftwareResults) {
      setShowSoftwareCard(true);
      setSoftwareTitleDetail(
        /* @__PURE__ */ react.createElement(
          LastUpdatedText/* default */.A,
          {
            lastUpdatedAt: software.counts_updated_at,
            customTooltipText: "Fleet periodically queries all hosts to retrieve software. Click to view hosts for the most up-to-date lists."
          }
        )
      );
    } else if (!isViewingVulnerableSoftware) {
      setShowSoftwareCard(false);
      setSoftwareTitleDetail(null);
    }
  }, [software, isViewingVulnerableSoftware]);
  const shouldFetchSoftwareCount = isSoftwareEnabled && // Needed to prevent race condition with isSoftwareFetching
  !isSoftwareFetching && isViewingVulnerableSoftware && (!(software == null ? void 0 : software.software) || (software == null ? void 0 : software.software.length) === 0);
  (0,es.useQuery)(
    [
      {
        scope: "softwareCount",
        teamId: teamIdForApi
      }
    ],
    ({ queryKey }) => entities_software/* default */.A.getCount(queryKey[0]),
    {
      enabled: isRouteOk && shouldFetchSoftwareCount,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 1,
      select: (data) => data.count,
      onSuccess: (count) => {
        setShowSoftwareCard(!!count && count > 0);
      }
    }
  );
  const { isFetching: isMdmFetching, error: errorMdm } = (0,es.useQuery)(
    [`mdm-${selectedPlatform}`, teamIdForApi],
    () => entities_hosts/* default */.A.getMdmSummary(selectedPlatform, teamIdForApi),
    {
      enabled: isRouteOk && !["linux", "chrome"].includes(selectedPlatform),
      onSuccess: ({
        counts_updated_at,
        mobile_device_management_solution,
        mobile_device_management_enrollment_status: {
          enrolled_automated_hosts_count,
          enrolled_manual_hosts_count,
          enrolled_personal_hosts_count,
          unenrolled_hosts_count,
          pending_hosts_count,
          hosts_count
        }
      }) => {
        if (hosts_count === 0 && mobile_device_management_solution === null) {
          setShowMdmCard(false);
          return;
        }
        setMdmTitleDetail(
          /* @__PURE__ */ react.createElement(
            LastUpdatedText/* default */.A,
            {
              lastUpdatedAt: counts_updated_at,
              whatToRetrieve: "MDM information"
            }
          )
        );
        const statusData = [
          {
            status: "On (manual)",
            hosts: enrolled_manual_hosts_count
          },
          {
            status: "On (automatic)",
            hosts: enrolled_automated_hosts_count
          },
          {
            status: "On (manual - personal)",
            hosts: enrolled_personal_hosts_count
          },
          { status: "Off", hosts: unenrolled_hosts_count }
        ];
        isPremiumTier && statusData.push({
          status: "Pending",
          hosts: pending_hosts_count || 0
        });
        setMdmStatusData(statusData);
        setMdmSolutions(mobile_device_management_solution);
        setShowMdmCard(true);
      }
    }
  );
  const {
    data: macAdminsData,
    isFetching: isMacAdminsFetching,
    error: errorMacAdmins
  } = (0,es.useQuery)(
    ["macAdmins", teamIdForApi],
    () => macadmins.loadAll(teamIdForApi),
    {
      select: (data) => data.macadmins,
      keepPreviousData: true,
      enabled: isRouteOk && selectedPlatform === "darwin"
    }
  );
  const {
    munki_issues: munkiIssues,
    munki_versions: munkiVersions,
    counts_updated_at: munkiCountsUpdatedAt
  } = macAdminsData || {};
  (0,react.useEffect)(() => {
    if (labels) {
      if (selectedPlatform !== "all") {
        setSelectedPlatformLabelId(
          (0,label/* getBuiltinPlatformLabelId */.iq)(labels, selectedPlatform)
        );
      } else {
        setSelectedPlatformLabelId(void 0);
      }
    }
  }, [labels, selectedPlatform]);
  const toggleAddHostsModal = () => {
    setShowAddHostsModal(!showAddHostsModal);
  };
  const onSoftwareQueryChange = (_0) => DashboardPage_async(null, [_0], function* ({
    pageIndex: newPageIndex
  }) {
    if (softwarePageIndex !== newPageIndex) {
      setSoftwarePageIndex(newPageIndex);
    }
  });
  const onSoftwareTabChange = (index) => {
    const { SOFTWARE_INVENTORY } = paths/* default */.A;
    setSoftwareNavTabIndex(index);
    setSoftwareActionUrl && setSoftwareActionUrl(
      index === 1 ? `${SOFTWARE_INVENTORY}?vulnerable=true` : SOFTWARE_INVENTORY
    );
    setSoftwarePageIndex(0);
  };
  let refetchActivities = () => {
  };
  const setRefetchActivities = (refetch) => {
    refetchActivities = refetch;
  };
  const onSubmitActivityFeedAutomationsModal = (0,react.useCallback)(
    (formData) => DashboardPage_async(null, null, function* () {
      setUpdatingActivityFeedAutomations(true);
      try {
        if (formData.enabled !== (config == null ? void 0 : config.webhook_settings.activities_webhook.enable_activities_webhook) || formData.url !== (config == null ? void 0 : config.webhook_settings.activities_webhook.destination_url)) {
          yield entities_config/* default */.A.update({
            webhook_settings: {
              activities_webhook: {
                enable_activities_webhook: formData.enabled,
                destination_url: formData.url
              }
            }
          });
        }
        ToastNotification/* notify */.me.success("Successfully updated activity feed automations.");
        setShowActivityFeedAutomationsModal(false);
      } catch (e) {
        ToastNotification/* notify */.me.error(
          "Couldn't update activity feed automations. Please try again.",
          { response: e }
        );
      } finally {
        setUpdatingActivityFeedAutomations(false);
        refetchConfig();
        refetchActivities();
      }
    }),
    [
      config == null ? void 0 : config.webhook_settings.activities_webhook.destination_url,
      config == null ? void 0 : config.webhook_settings.activities_webhook.enable_activities_webhook,
      refetchConfig
    ]
  );
  const HostCountCards = errorHosts ? /* @__PURE__ */ react.createElement(Card/* default */.A, null, /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-large" })) : /* @__PURE__ */ react.createElement(
    MetricsHostCounts_MetricsHostCounts,
    {
      currentTeamId: teamIdForApi,
      selectedPlatform,
      totalHostCount: !isHostSummaryFetching && !errorHosts ? hostSummaryData == null ? void 0 : hostSummaryData.totals_hosts_count : void 0,
      isPremiumTier,
      missingCount,
      lowDiskSpaceCount,
      abmIssueCount,
      selectedPlatformLabelId
    }
  );
  const WelcomeHostCard = InfoCard({
    title: "Welcome to Fleet",
    showTitle: true,
    children: /* @__PURE__ */ react.createElement(
      WelcomeHost_WelcomeHost,
      {
        totalsHostsCount: hostSummaryData && hostSummaryData.totals_hosts_count || 0,
        toggleAddHostsModal
      }
    )
  });
  const LearnFleetCard = InfoCard({
    title: "Learn how to use Fleet",
    showTitle: true,
    children: /* @__PURE__ */ react.createElement(LearnFleet_LearnFleet, null)
  });
  const ActivityFeedCard = InfoCard({
    title: "Activity",
    showTitle: showActivityFeedTitle,
    action: canEditActivityFeedAutomations ? {
      type: "automations",
      onClick: () => setShowActivityFeedAutomationsModal(true)
    } : void 0,
    children: /* @__PURE__ */ react.createElement(
      ActivityFeed_ActivityFeed,
      {
        setShowActivityFeedTitle,
        isPremiumTier: isPremiumTier || false,
        setRefetchActivities,
        router
      }
    ),
    className: "activity-feed-card"
  });
  const SoftwareCard = InfoCard({
    title: "Software",
    action: {
      type: "link",
      text: "View all software",
      to: "software"
    },
    actionUrl: softwareActionUrl,
    titleDetail: softwareTitleDetail,
    children: /* @__PURE__ */ react.createElement(
      Software_Software,
      {
        errorSoftware,
        isSoftwareFetching,
        isSoftwareEnabled,
        software,
        teamId: currentTeamId,
        navTabIndex: softwareNavTabIndex,
        onTabChange: onSoftwareTabChange,
        onQueryChange: onSoftwareQueryChange,
        router,
        softwarePageIndex
      }
    )
  });
  const munkiTitleDetail = (0,react.useMemo)(
    () => /* @__PURE__ */ react.createElement(
      LastUpdatedText/* default */.A,
      {
        lastUpdatedAt: munkiCountsUpdatedAt,
        whatToRetrieve: "Munki"
      }
    ),
    [munkiCountsUpdatedAt]
  );
  const MunkiCard = InfoCard({
    title: "Munki",
    titleDetail: munkiTitleDetail,
    showTitle: !isMacAdminsFetching,
    description: /* @__PURE__ */ react.createElement("p", null, "Munki is a tool for managing software on macOS devices.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://www.munki.org/munki/",
        text: "Learn about Munki",
        newTab: true
      }
    )),
    children: /* @__PURE__ */ react.createElement(
      Munki_Munki,
      {
        errorMacAdmins,
        isMacAdminsFetching,
        munkiIssuesData: munkiIssues || [],
        munkiVersionsData: munkiVersions || [],
        selectedTeamId: currentTeamId
      }
    )
  });
  const MDMCard = InfoCard({
    title: "Mobile device management (MDM)",
    titleDetail: mdmTitleDetail,
    showTitle: !isMdmFetching,
    description: /* @__PURE__ */ react.createElement("p", null, "MDM is used to change settings and install software on your hosts."),
    children: /* @__PURE__ */ react.createElement(
      MDM,
      {
        isFetching: isMdmFetching,
        error: errorMdm,
        mdmStatusData,
        mdmSolutions,
        selectedPlatformLabelId,
        selectedTeamId: currentTeamId,
        onClickMdmSolution: (mdmSolution) => {
          selectedMdmSolutionName.current = mdmSolution.name;
          setShowMdmSolutionModal(true);
        }
      }
    )
  });
  const OperatingSystemsCard = InfoCard({
    title: "Operating systems",
    showTitle: showOperatingSystemsUI,
    children: /* @__PURE__ */ react.createElement(
      OperatingSystems_OperatingSystems,
      {
        currentTeamId: teamIdForApi,
        selectedPlatform,
        showTitle: showOperatingSystemsUI,
        setShowTitle: setShowOperatingSystemsUI
      }
    )
  });
  const allLayout = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, !isAnyTeamSelected && canEnrollGlobalHosts && hostSummaryData && (hostSummaryData == null ? void 0 : hostSummaryData.totals_hosts_count) < 2 && /* @__PURE__ */ react.createElement(react.Fragment, null, WelcomeHostCard, LearnFleetCard), (isSoftwareFetching || showSoftwareCard) && SoftwareCard, !isAnyTeamSelected && isOnGlobalTeam && /* @__PURE__ */ react.createElement(react.Fragment, null, ActivityFeedCard), showMdmCard && /* @__PURE__ */ react.createElement(react.Fragment, null, MDMCard));
  };
  const macOSLayout = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, OperatingSystemsCard), showMdmCard && /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, MDMCard), !!munkiVersions && /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, MunkiCard));
  const windowsLayout = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, OperatingSystemsCard), showMdmCard && /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, MDMCard));
  const linuxLayout = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, OperatingSystemsCard));
  const chromeLayout = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, OperatingSystemsCard));
  const iosLayout = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, OperatingSystemsCard), showMdmCard && /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, MDMCard));
  const ipadosLayout = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, OperatingSystemsCard), showMdmCard && /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, MDMCard));
  const androidLayout = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, OperatingSystemsCard), showMdmCard && /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__section` }, MDMCard));
  const renderCards = () => {
    switch (selectedPlatform) {
      case "darwin":
        return macOSLayout();
      case "windows":
        return windowsLayout();
      case "linux":
        return linuxLayout();
      case "chrome":
        return chromeLayout();
      case "ios":
        return iosLayout();
      case "ipados":
        return ipadosLayout();
      case "android":
        return androidLayout();
      default:
        return allLayout();
    }
  };
  const renderAddHostsModal = () => {
    var _a2, _b2;
    const enrollSecret = isAnyTeamSelected ? (_a2 = teamSecrets == null ? void 0 : teamSecrets[0]) == null ? void 0 : _a2.secret : (_b2 = globalSecrets == null ? void 0 : globalSecrets[0]) == null ? void 0 : _b2.secret;
    return /* @__PURE__ */ react.createElement(
      AddHostsModal/* default */.A,
      {
        currentTeamName,
        enrollSecret,
        isAnyTeamSelected,
        isLoading: isLoadingTeams || isGlobalSecretsLoading,
        onCancel: toggleAddHostsModal
      }
    );
  };
  const renderMdmSolutionModal = () => {
    if (!mdmSolutions) {
      return null;
    }
    const selectedMdmSolutions = mdmSolutions == null ? void 0 : mdmSolutions.filter(
      (solution) => solution.name === selectedMdmSolutionName.current
    );
    return /* @__PURE__ */ react.createElement(
      MdmSolutionModal_MdmSolutionModal,
      {
        mdmSolutions: selectedMdmSolutions,
        selectedPlatformLabelId,
        selectedTeamId: currentTeamId,
        onCancel: () => {
          setShowMdmSolutionModal(false);
          selectedMdmSolutionName.current = "";
        }
      }
    );
  };
  const renderDashboardHeader = () => {
    var _a2;
    if (isPremiumTier && !((_a2 = config == null ? void 0 : config.partnerships) == null ? void 0 : _a2.enable_primo)) {
      if (userTeams) {
        if (userTeams.length > 1 || isOnGlobalTeam) {
          return /* @__PURE__ */ react.createElement(
            FleetsDropdown/* default */.A,
            {
              selectedFleetId: currentTeamId,
              currentUserFleets: userTeams,
              onChange: handleTeamChange
            }
          );
        }
        if (userTeams.length === 1) {
          return /* @__PURE__ */ react.createElement("h1", null, userTeams[0].name);
        }
      }
      return null;
    }
    return /* @__PURE__ */ react.createElement("h1", null, config == null ? void 0 : config.org_info.org_name);
  };
  return !isRouteOk ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, null) : /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: DashboardPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__text` }, /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__title` }, renderDashboardHeader()))), /* @__PURE__ */ react.createElement(MeshP2PCard_MeshP2PCard, null), /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__charts-row` }, /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "xlarge" }, /* @__PURE__ */ react.createElement(
    HostsEnrolledCard_HostsEnrolledCard,
    {
      counts: totalCounts,
      totalHostCount: (hostSummaryTotals == null ? void 0 : hostSummaryTotals.totals_hosts_count) || 0,
      builtInLabels: labels,
      currentTeamId: teamIdForApi,
      router
    }
  )), /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "xlarge" }, /* @__PURE__ */ react.createElement(
    ChartCard_ChartCard,
    {
      currentTeamId: teamIdForApi,
      historicalDataEnabled,
      filterDefaults: featuresConfig == null ? void 0 : featuresConfig.vulnerability_exposure_historical_reporting
    }
  ))), /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__platforms` }, /* @__PURE__ */ react.createElement("span", null, "Platform:\xA0"), /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.A,
    {
      name: "platform-filter",
      value: selectedPlatform || "",
      className: `${DashboardPage_baseClass}__platform-filter`,
      options: [...PLATFORM_DROPDOWN_OPTIONS],
      onChange: (option) => {
        const selectedPlatformOption = PLATFORM_DROPDOWN_OPTIONS.find(
          (platform) => platform.value === (option == null ? void 0 : option.value)
        );
        router.push(
          ((selectedPlatformOption == null ? void 0 : selectedPlatformOption.path) || paths/* default */.A.DASHBOARD).concat(location.search).concat(location.hash || "")
        );
      }
    }
  )), /* @__PURE__ */ react.createElement("div", { className: `${DashboardPage_baseClass}__host-sections` }, isHostSummaryFetching ? /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "medium" }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, { verticalPadding: "small" })) : HostCountCards), renderCards(), showAddHostsModal && renderAddHostsModal(), showMdmSolutionModal && renderMdmSolutionModal(), showActivityFeedAutomationsModal && config && /* @__PURE__ */ react.createElement(
    ActivityFeedAutomationsModal_ActivityFeedAutomationsModal,
    {
      automationSettings: config.webhook_settings.activities_webhook,
      onSubmit: onSubmitActivityFeedAutomationsModal,
      onExit: () => setShowActivityFeedAutomationsModal(false),
      isUpdating: updatingActivityFeedAutomations
    }
  )));
};
/* harmony default export */ var DashboardPage_DashboardPage = (DashboardPage);

;// ./frontend/pages/DashboardPage/index.tsx




/***/ })

}]);