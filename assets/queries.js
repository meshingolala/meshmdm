"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[313],{

/***/ 75947:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var components_TooltipWrapper_TooltipWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36709);
/* harmony import */ var utilities_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89937);





const generateClassTag = (rawValue) => {
  if (rawValue === utilities_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_EMPTY_CELL_VALUE */ .r2) {
    return "indeterminate";
  }
  return rawValue.replace(" ", "-").toLowerCase();
};
const LogDestinationIndicator = ({
  logDestination,
  webhookDestination,
  filesystemDestination,
  excludeTooltip = false
}) => {
  const classTag = generateClassTag(logDestination);
  const statusClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
    "log-destination-indicator",
    `log-destination-indicator--${classTag}`,
    `log-destination--${classTag}`
  );
  const readableLogDestination = () => {
    switch (logDestination) {
      case "filesystem":
        return "Filesystem";
      case "firehose":
        return "Amazon Kinesis Data Firehose";
      case "kinesis":
        return "Amazon Kinesis Data Streams";
      case "lambda":
        return "AWS Lambda";
      case "pubsub":
        return "Google Cloud Pub/Sub";
      case "kafka":
        return "Apache Kafka";
      case "nats":
        return "NATS";
      case "splunk":
        return "Splunk";
      case "stdout":
        return "Standard output (stdout)";
      case "webhook":
        return "Webhook";
      case "":
        return "Not configured";
      default:
        return logDestination;
    }
  };
  const tooltipText = () => {
    switch (logDestination) {
      case "filesystem":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data is sent to ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), filesystemDestination, " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), "on the server's filesystem.");
      case "firehose":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data is sent to ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), "Amazon Kinesis Data Firehose.");
      case "kinesis":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data is sent to ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), "Amazon Kinesis Data Streams.");
      case "lambda":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), "is sent to AWS Lambda.");
      case "pubsub":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data is ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), " sent to Google Cloud Pub / Sub.");
      case "kafka":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), " is sent to Apache Kafka.");
      case "nats":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), " is sent to NATS.");
      case "splunk":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), " is sent to Splunk.");
      case "stdout":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data is sent to ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), "standard output(stdout) on the Mesh server.");
      case "webhook":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Each time a report runs, the data is sent via webhook to:", " ", webhookDestination, ".");
      case "":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "Please configure a log destination.");
      default:
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "No additional information is available about this log destination.");
    }
  };
  return excludeTooltip ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, readableLogDestination()) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_TooltipWrapper_TooltipWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { tipContent: tooltipText(), className: statusClassName }, readableLogDestination());
};
/* harmony default export */ __webpack_exports__.A = (LogDestinationIndicator);


/***/ }),

/***/ 45894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var components_StatusIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96733);



const QueryAutomationsStatusIndicator = ({
  automationsEnabled,
  interval
}) => {
  let status;
  if (automationsEnabled) {
    if (interval === 0) {
      status = "paused";
    } else {
      status = "on";
    }
  } else {
    status = "off";
  }
  const tooltip = status === "paused" ? {
    tooltipText: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Automations"), " will resume for this report when an interval is set.")
  } : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    components_StatusIndicator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      value: status,
      tooltip,
      customIndicatorType: "query-automations"
    }
  );
};
/* harmony default export */ __webpack_exports__.A = (QueryAutomationsStatusIndicator);


/***/ }),

/***/ 49269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ManageQueriesPage_ManageQueriesPage; }
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/AutomationsButton/index.ts + 1 modules
var AutomationsButton = __webpack_require__(85396);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/FleetsDropdown/index.tsx + 1 modules
var FleetsDropdown = __webpack_require__(82196);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/context/query.tsx
var query = __webpack_require__(83535);
// EXTERNAL MODULE: ./frontend/context/table.tsx
var table = __webpack_require__(69807);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/interfaces/target.ts + 6 modules
var target = __webpack_require__(72273);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/queries.ts
var queries = __webpack_require__(43788);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/queries/ManageQueriesPage/components/DeleteQueryModal/DeleteQueryModal.tsx




const baseClass = "delete-query-modal";
const DeleteQueryModal = ({
  isUpdatingQueries,
  onCancel,
  onSubmit
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete reports",
      onExit: onCancel,
      onEnter: onSubmit,
      className: baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: baseClass }, "Are you sure you want to delete the selected reports?", /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: onSubmit,
        className: "delete-loading",
        isLoading: isUpdatingQueries
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeleteQueryModal_DeleteQueryModal = (DeleteQueryModal);

;// ./frontend/pages/queries/ManageQueriesPage/components/DeleteQueryModal/index.ts



// EXTERNAL MODULE: ./frontend/components/CustomLink/CustomLink.tsx
var CustomLink = __webpack_require__(47867);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(15619);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/LogDestinationIndicator/LogDestinationIndicator.tsx
var LogDestinationIndicator = __webpack_require__(75947);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/Icon/Icon.tsx + 74 modules
var Icon = __webpack_require__(99742);
;// ./frontend/components/QueryFrequencyIndicator/QueryFrequencyIndicator.tsx






const generateClassTag = (rawValue) => {
  if (rawValue === constants/* DEFAULT_EMPTY_CELL_VALUE */.r2) {
    return "indeterminate";
  }
  return rawValue.replace(" ", "-").toLowerCase();
};
const QueryFrequencyIndicator = ({
  frequency,
  checked
}) => {
  const classTag = generateClassTag(frequency.toString());
  const frequencyClassName = classnames_default()(
    "query-frequency-indicator",
    `query-frequency-indicator--${classTag}`,
    `frequency--${classTag}`
  );
  const readableQueryFrequency = () => {
    switch (frequency) {
      case 0:
        return "Never";
      case 3600:
        return "Hourly";
      case 86400:
        return "Daily";
      case 604800:
        return "Weekly";
      default:
        return (0,helpers/* secondsToDhms */.xR)(frequency);
    }
  };
  const frequencyIcon = () => {
    if (frequency === 0) {
      return checked ? /* @__PURE__ */ react.createElement(Icon/* default */.A, { size: "medium", name: "warning" }) : /* @__PURE__ */ react.createElement(Icon/* default */.A, { size: "medium", name: "clock", color: "ui-fleet-black-33" });
    }
    return /* @__PURE__ */ react.createElement(Icon/* default */.A, { size: "medium", name: "clock" });
  };
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      className: `${frequencyClassName}
        ${frequency === 0 && !checked && "grey"}`
    },
    frequencyIcon(),
    readableQueryFrequency()
  );
};
/* harmony default export */ var QueryFrequencyIndicator_QueryFrequencyIndicator = (QueryFrequencyIndicator);

// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
;// ./frontend/pages/queries/ManageQueriesPage/components/ManageQueryAutomationsModal/ManageQueryAutomationsModal.tsx

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












const ManageQueryAutomationsModal_baseClass = "manage-query-automations-modal";
const ManageQueryAutomationsModal = ({
  isUpdatingAutomations,
  onSubmit,
  onCancel,
  isShowingPreviewDataModal,
  togglePreviewDataModal,
  teamId,
  logDestination,
  webhookDestination,
  filesystemDestination
}) => {
  var _a;
  const gitOpsModeEnabled = (_a = (0,react.useContext)(app/* AppContext */.BR).config) == null ? void 0 : _a.gitops.gitops_mode_enabled;
  const { data: queriesResponse } = (0,es.useQuery)(
    [
      {
        scope: "queries",
        teamId,
        orderKey: "name",
        orderDirection: "asc",
        mergeInherited: false
      }
    ],
    ({ queryKey }) => queries/* default */.A.loadAll(queryKey[0]),
    {
      refetchOnWindowFocus: false
    }
  );
  const availableQueries = (0,react.useMemo)(() => {
    var _a2;
    return (_a2 = queriesResponse == null ? void 0 : queriesResponse.queries) != null ? _a2 : [];
  }, [
    queriesResponse
  ]);
  const automatedQueryIds = (0,react.useMemo)(
    () => availableQueries.filter((query) => query.automations_enabled).map((query) => query.id),
    [availableQueries]
  );
  const sortedAvailableQueries = (0,react.useMemo)(
    () => [...availableQueries].sort(
      (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    ),
    [availableQueries]
  );
  const [queryItems, setQueryItems] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    if (sortedAvailableQueries.length > 0) {
      setQueryItems(
        sortedAvailableQueries.map(({ name, id, interval }) => ({
          name,
          id,
          isChecked: !!(automatedQueryIds == null ? void 0 : automatedQueryIds.includes(id)),
          interval
        }))
      );
    }
  }, [sortedAvailableQueries, automatedQueryIds]);
  const updateQueryItems = (queryId) => {
    setQueryItems(
      (prevItems) => prevItems.map(
        (query) => query.id !== queryId ? query : __spreadProps(__spreadValues({}, query), { isChecked: !query.isChecked })
      )
    );
  };
  const onSubmitQueryAutomations = (evt) => {
    evt.preventDefault();
    const newQueryIds = [];
    queryItems == null ? void 0 : queryItems.forEach((p) => p.isChecked && newQueryIds.push(p.id));
    onSubmit({
      newAutomatedQueryIds: newQueryIds,
      previousAutomatedQueryIds: automatedQueryIds
    });
  };
  (0,react.useEffect)(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        onSubmit({
          newAutomatedQueryIds: queryItems.filter((p) => p.isChecked).map((p) => p.id),
          previousAutomatedQueryIds: automatedQueryIds
        });
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Manage automations",
      onExit: onCancel,
      className: ManageQueryAutomationsModal_baseClass,
      width: "large",
      isHidden: isShowingPreviewDataModal
    },
    /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass} form` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass}__heading` }, "Report automations let you send data gathered from macOS, Windows, and Linux hosts to a log destination. Data is sent according to a report's interval."), availableQueries.length ? /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass}__select form-field` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Choose which reports will send data:"), /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass}__checkboxes` }, queryItems && queryItems.map((queryItem) => {
      const { isChecked, name, id, interval } = queryItem;
      return /* @__PURE__ */ react.createElement("div", { key: id, className: `${ManageQueryAutomationsModal_baseClass}__query-item` }, /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          value: isChecked,
          name,
          onChange: () => {
            updateQueryItems(id);
          },
          disabled: gitOpsModeEnabled
        },
        /* @__PURE__ */ react.createElement(TooltipTruncatedText/* default */.A, { value: name })
      ), /* @__PURE__ */ react.createElement(
        QueryFrequencyIndicator_QueryFrequencyIndicator,
        {
          frequency: interval,
          checked: isChecked
        }
      ));
    }))) : /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass}__no-queries` }, /* @__PURE__ */ react.createElement("b", null, "You have no reports."), /* @__PURE__ */ react.createElement("p", null, "Add a report to turn on automations.")), /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass}__log-destination form-field` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Log destination:"), /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass}__selection` }, /* @__PURE__ */ react.createElement(
      LogDestinationIndicator/* default */.A,
      {
        logDestination,
        webhookDestination,
        filesystemDestination
      }
    )), /* @__PURE__ */ react.createElement("div", { className: `${ManageQueryAutomationsModal_baseClass}__configure form-field__help-text` }, "Users with the admin role can\xA0", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/docs/using-fleet/log-destinations",
        text: "configure a different log destination",
        newTab: true
      }
    ))), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "secondary",
        onClick: togglePreviewDataModal,
        className: `${ManageQueryAutomationsModal_baseClass}__preview-data`
      },
      "Example data"
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        tipOffset: 6,
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            onClick: onSubmitQueryAutomations,
            className: "save-loading",
            isLoading: isUpdatingAutomations,
            disabled: disableChildren
          },
          "Save"
        )
      }
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var ManageQueryAutomationsModal_ManageQueryAutomationsModal = (ManageQueryAutomationsModal);

;// ./frontend/pages/queries/ManageQueriesPage/components/PreviewDataModal/PreviewDataModal.tsx






const PreviewDataModal_baseClass = "preview-data-modal";
const PreviewDataModal = ({
  onCancel
}) => {
  const json = {
    action: "snapshot",
    snapshot: [
      {
        remote_address: "0.0.0.0",
        remote_port: "0",
        cmdline: "/usr/sbin/syslogd"
      }
    ],
    name: "xxxxxxx",
    hostIdentifier: "xxxxxxx",
    calendarTime: "xxx xxx  x xx:xx:xx xxxx UTC",
    unixTime: "xxxxxxxxx",
    epoch: "xxxxxxxxx",
    counter: "x",
    numerics: "x"
  };
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Example data", onExit: onCancel, className: PreviewDataModal_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${PreviewDataModal_baseClass}__preview-modal` }, /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, `The "snapshot" key includes the report's results. These will be unique to your report.`)
    },
    "The data sent to your configured log destination will look similar to the following JSON:"
  )), /* @__PURE__ */ react.createElement("div", { className: `${PreviewDataModal_baseClass}__host-status-webhook-preview` }, /* @__PURE__ */ react.createElement("pre", { dangerouslySetInnerHTML: { __html: (0,helpers/* syntaxHighlight */._j)(json) } })), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close"))));
};
/* harmony default export */ var PreviewDataModal_PreviewDataModal = (PreviewDataModal);

// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var fields_Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var components_Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/LinkCell.tsx
var LinkCell = __webpack_require__(42690);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/PerformanceImpactCell/index.ts + 1 modules
var PerformanceImpactCell = __webpack_require__(5205);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/PlatformCell/index.ts + 1 modules
var PlatformCell = __webpack_require__(61172);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/TableContainer/utilities/config_utils.ts
var config_utils = __webpack_require__(59227);
// EXTERNAL MODULE: ./frontend/components/Tag/index.ts + 1 modules
var Tag = __webpack_require__(42619);
// EXTERNAL MODULE: ./frontend/utilities/permissions/permissions.ts
var permissions = __webpack_require__(95681);
// EXTERNAL MODULE: ./frontend/pages/queries/ManageQueriesPage/components/QueryAutomationsStatusIndicator/QueryAutomationsStatusIndicator.tsx
var QueryAutomationsStatusIndicator = __webpack_require__(45894);
;// ./frontend/pages/queries/ManageQueriesPage/components/QueryAutomationsStatusIndicator/index.ts



;// ./frontend/pages/queries/ManageQueriesPage/components/QueriesTable/QueriesTableConfig.tsx

var QueriesTableConfig_defProp = Object.defineProperty;
var QueriesTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var QueriesTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var QueriesTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var QueriesTableConfig_defNormalProp = (obj, key, value) => key in obj ? QueriesTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var QueriesTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (QueriesTableConfig_hasOwnProp.call(b, prop))
      QueriesTableConfig_defNormalProp(a, prop, b[prop]);
  if (QueriesTableConfig_getOwnPropSymbols)
    for (var prop of QueriesTableConfig_getOwnPropSymbols(b)) {
      if (QueriesTableConfig_propIsEnum.call(b, prop))
        QueriesTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




















const generateColumnConfigs = ({
  currentUser,
  currentTeamId,
  omitSelectionColumn = false
}) => {
  const isCurrentTeamObserverOrGlobalObserver = currentTeamId ? (0,permissions/* isTeamObserver */.s)(currentUser, currentTeamId) : (0,permissions/* isOnlyObserver */.l4)(currentUser);
  const viewingTeamScope = currentTeamId !== team/* API_ALL_TEAMS_ID */.s_;
  const tableHeaders = [
    {
      title: "Name",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "name",
      Cell: (cellProps) => {
        const { id, team_id, observer_can_run } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(
          LinkCell/* default */.A,
          {
            className: "w400",
            tooltipTruncate: true,
            value: cellProps.cell.value,
            suffix: /* @__PURE__ */ react.createElement(react.Fragment, null, !isCurrentTeamObserverOrGlobalObserver && observer_can_run && /* @__PURE__ */ react.createElement(
              TooltipWrapper/* default */.A,
              {
                tipContent: "Observers can run this report.",
                underline: false,
                showArrow: true,
                position: "top",
                delayInMs: 300
              },
              /* @__PURE__ */ react.createElement(
                components_Icon/* default */.A,
                {
                  className: "observer-can-run-query-icon",
                  name: "query",
                  size: "small",
                  color: "ui-fleet-black-50"
                }
              )
            ), viewingTeamScope && // inherited
            team_id !== currentTeamId && /* @__PURE__ */ react.createElement(Tag/* default */.A, { tooltip: "This report runs on all hosts.", size: "small" }, "Inherited")),
            path: (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.REPORT_DETAILS(id), {
              fleet_id: team_id != null ? team_id : currentTeamId
            })
          }
        );
      },
      sortType: "caseInsensitive"
    },
    {
      title: "Platform",
      Header: "Targeted platforms",
      disableSortBy: true,
      accessor: "platform",
      Cell: (cellProps) => {
        if (!cellProps.row.original.interval) {
          return /* @__PURE__ */ react.createElement(TextCell/* default */.A, null);
        }
        const platforms = cellProps.cell.value.split(",").map((s) => s.trim()).filter(
          (s) => (0,platform/* isScheduledQueryablePlatform */.lV)(s)
        );
        return /* @__PURE__ */ react.createElement(PlatformCell/* default */.A, { platforms });
      }
    },
    {
      title: "Interval",
      Header: "Interval",
      disableSortBy: true,
      accessor: "interval",
      Cell: (cellProps) => {
        const val = cellProps.cell.value ? `Every ${(0,helpers/* secondsToDhms */.xR)(cellProps.cell.value)}` : void 0;
        return /* @__PURE__ */ react.createElement(
          TextCell/* default */.A,
          {
            value: val,
            emptyCellTooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Assign an interval to collect data on a schedule.")
          }
        );
      }
    },
    {
      title: "Performance impact",
      Header: () => {
        return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "The average performance impact across all hosts." }, "Performance impact"));
      },
      disableSortBy: true,
      accessor: "performance",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        PerformanceImpactCell/* default */.A,
        {
          value: {
            indicator: cellProps.cell.value
          }
        }
      )
    },
    {
      title: "Automations",
      Header: "Automations",
      disableSortBy: true,
      accessor: "automations_enabled",
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(
          QueryAutomationsStatusIndicator/* default */.A,
          {
            automationsEnabled: cellProps.cell.value,
            interval: cellProps.row.original.interval
          }
        );
      }
    },
    {
      title: "Last modified",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "updated_at",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        TextCell/* default */.A,
        {
          value: cellProps.cell.value,
          formatter: (updatedAt) => /* @__PURE__ */ react.createElement(HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T, { timeString: updatedAt })
        }
      )
    }
  ];
  const canEditQueries = (0,permissions/* isGlobalAdmin */.pS)(currentUser) || (0,permissions/* isGlobalMaintainer */.ik)(currentUser) || currentTeamId && ((0,permissions/* isTeamAdmin */.TY)(currentUser, currentTeamId) || (0,permissions/* isTeamMaintainer */.Mo)(currentUser, currentTeamId));
  if (canEditQueries && !omitSelectionColumn) {
    tableHeaders.unshift({
      id: "selection",
      // TODO - improve typing of IHeaderProps instead of using any
      // Header: (headerProps: IHeaderProps): JSX.Element => {
      Header: (headerProps) => {
        const checkboxProps = (0,config_utils/* getConditionalSelectHeaderCheckboxProps */.V)({
          headerProps,
          checkIfRowIsSelectable: (row) => {
            var _a;
            return ((_a = row.original.team_id) != null ? _a : void 0) === currentTeamId;
          }
        });
        return /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            position: "right",
            tipOffset: 8,
            fixedPositionStrategy: true,
            renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
              fields_Checkbox/* default */.A,
              QueriesTableConfig_spreadValues({
                disabled: disableChildren,
                enableEnterToCheck: true
              }, checkboxProps)
            )
          }
        );
      },
      Cell: (cellProps) => {
        var _a;
        const isInheritedQuery = ((_a = cellProps.row.original.team_id) != null ? _a : void 0) !== currentTeamId;
        if (viewingTeamScope && isInheritedQuery) {
          return /* @__PURE__ */ react.createElement(react.Fragment, null);
        }
        const { row } = cellProps;
        const { checked } = row.getToggleRowSelectedProps();
        const checkboxProps = {
          value: checked,
          onChange: () => row.toggleRowSelected()
        };
        return /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            position: "right",
            tipOffset: 8,
            fixedPositionStrategy: true,
            renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
              fields_Checkbox/* default */.A,
              QueriesTableConfig_spreadValues({
                disabled: disableChildren,
                enableEnterToCheck: true
              }, checkboxProps)
            )
          }
        );
      },
      disableHidden: true
    });
  }
  return tableHeaders;
};
/* harmony default export */ var QueriesTableConfig = (generateColumnConfigs);

;// ./frontend/pages/queries/ManageQueriesPage/components/QueriesTable/QueriesTable.tsx

var QueriesTable_defProp = Object.defineProperty;
var QueriesTable_defProps = Object.defineProperties;
var QueriesTable_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var QueriesTable_getOwnPropSymbols = Object.getOwnPropertySymbols;
var QueriesTable_hasOwnProp = Object.prototype.hasOwnProperty;
var QueriesTable_propIsEnum = Object.prototype.propertyIsEnumerable;
var QueriesTable_defNormalProp = (obj, key, value) => key in obj ? QueriesTable_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var QueriesTable_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (QueriesTable_hasOwnProp.call(b, prop))
      QueriesTable_defNormalProp(a, prop, b[prop]);
  if (QueriesTable_getOwnPropSymbols)
    for (var prop of QueriesTable_getOwnPropSymbols(b)) {
      if (QueriesTable_propIsEnum.call(b, prop))
        QueriesTable_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var QueriesTable_spreadProps = (a, b) => QueriesTable_defProps(a, QueriesTable_getOwnPropDescs(b));













const QueriesTable_baseClass = "queries-table";
const DEFAULT_SORT_DIRECTION = "asc";
const DEFAULT_SORT_HEADER = "name";
const DEFAULT_PLATFORM = "all";
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
  }
];
const QueriesTable = ({
  queries,
  totalQueriesCount,
  hasNextResults,
  curTeamScopeQueriesPresent,
  isLoading,
  onDeleteQueryClick,
  onAddReportClick,
  canAddReport,
  isOnlyObserver,
  isObserverPlus,
  isAnyTeamObserverPlus,
  router,
  queryParams,
  currentTeamId,
  isPremiumTier
}) => {
  var _a;
  const { currentUser, config } = (0,react.useContext)(app/* AppContext */.BR);
  const isFirstNavigation = (0,react.useRef)(true);
  const initialSearchQuery = (() => {
    var _a2;
    return (_a2 = queryParams == null ? void 0 : queryParams.query) != null ? _a2 : "";
  })();
  const initialSortHeader = (() => {
    var _a2;
    return (_a2 = queryParams == null ? void 0 : queryParams.order_key) != null ? _a2 : DEFAULT_SORT_HEADER;
  })();
  const initialSortDirection = (() => {
    var _a2;
    return (_a2 = queryParams == null ? void 0 : queryParams.order_direction) != null ? _a2 : DEFAULT_SORT_DIRECTION;
  })();
  const initialPage = (() => queryParams && queryParams.page ? parseInt(queryParams == null ? void 0 : queryParams.page, 10) : 0)();
  const searchQuery = initialSearchQuery;
  const page = initialPage;
  const sortDirection = initialSortDirection;
  const sortHeader = initialSortHeader;
  const targetedPlatformParam = queryParams == null ? void 0 : queryParams.platform;
  const curTargetedPlatformFilter = (0,platform/* isQueryablePlatform */.ek)(
    targetedPlatformParam
  ) ? targetedPlatformParam : DEFAULT_PLATFORM;
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const {
        pageIndex: newPageIndex,
        searchQuery: newSearchQuery,
        sortDirection: newSortDirection,
        sortHeader: newSortHeader
      } = newTableQuery;
      const newQueryParams = {};
      newQueryParams.order_key = newSortHeader;
      newQueryParams.order_direction = newSortDirection;
      newQueryParams.platform = curTargetedPlatformFilter === "all" ? void 0 : curTargetedPlatformFilter;
      newQueryParams.page = newPageIndex;
      newQueryParams.query = newSearchQuery;
      if (newSortDirection !== sortDirection || newSortHeader !== sortHeader || newSearchQuery !== searchQuery) {
        newQueryParams.page = "0";
      }
      newQueryParams.fleet_id = queryParams == null ? void 0 : queryParams.fleet_id;
      const locationPath = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_REPORTS,
        queryParams: QueriesTable_spreadValues(QueriesTable_spreadValues({}, queryParams), newQueryParams)
      });
      if (isFirstNavigation.current) {
        isFirstNavigation.current = false;
        router == null ? void 0 : router.replace(locationPath);
      } else {
        router == null ? void 0 : router.push(locationPath);
      }
    },
    [
      curTargetedPlatformFilter,
      sortDirection,
      sortHeader,
      searchQuery,
      queryParams,
      router
    ]
  );
  const isAllFleets = isPremiumTier && (typeof currentTeamId === "undefined" || currentTeamId === null || currentTeamId === team/* APP_CONTEXT_ALL_TEAMS_ID */.jc);
  let emptyHeader = "No reports yet";
  if (isPremiumTier && !((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo)) {
    emptyHeader = isAllFleets ? "No reports apply to all fleets" : "No reports for this fleet";
  }
  const emptyParams = {
    header: emptyHeader,
    info: "Reports are queries that run on a schedule. Results are saved in Fleet.",
    primaryButton: canAddReport ? /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onAddReportClick, type: "button" }, "Add report") : void 0
  };
  if (searchQuery || curTargetedPlatformFilter !== "all") {
    delete emptyParams.primaryButton;
    emptyParams.header = "No matching reports";
    emptyParams.info = "No reports match the current filters.";
  }
  const handlePlatformFilterDropdownChange = (0,react.useCallback)(
    (selectedTargetedPlatform) => {
      router == null ? void 0 : router.push(
        (0,helpers/* getNextLocationPath */.g2)({
          pathPrefix: paths/* default */.A.MANAGE_REPORTS,
          queryParams: QueriesTable_spreadProps(QueriesTable_spreadValues({}, queryParams), {
            page: 0,
            platform: (
              // separate URL & API 0-values of `platform` (undefined) from dropdown
              // 0-value of "all"
              (selectedTargetedPlatform == null ? void 0 : selectedTargetedPlatform.value) === "all" ? void 0 : selectedTargetedPlatform == null ? void 0 : selectedTargetedPlatform.value
            )
          })
        })
      );
    },
    [queryParams, router]
  );
  const handleRowSelect = (row) => {
    if (row.original.id) {
      router == null ? void 0 : router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.REPORT_DETAILS(row.original.id), {
          fleet_id: currentTeamId
        })
      );
    }
  };
  const columnConfigs = (0,react.useMemo)(
    () => currentUser && QueriesTableConfig({
      currentUser,
      currentTeamId,
      omitSelectionColumn: !curTeamScopeQueriesPresent
    }),
    [currentUser, currentTeamId, curTeamScopeQueriesPresent]
  );
  const isTrulyEmpty = (totalQueriesCount != null ? totalQueriesCount : 0) === 0 && !targetedPlatformParam && !searchQuery;
  const renderPlatformDropdown = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        name: "platform-dropdown",
        value: curTargetedPlatformFilter,
        className: `${QueriesTable_baseClass}__platform-dropdown`,
        options: PLATFORM_FILTER_OPTIONS,
        onChange: handlePlatformFilterDropdownChange,
        variant: "table-filter",
        iconName: "filter-alt",
        isDisabled: isTrulyEmpty
      }
    );
  }, [
    curTargetedPlatformFilter,
    handlePlatformFilterDropdownChange,
    isTrulyEmpty
  ]);
  const trimmedSearchQuery = searchQuery.trim();
  return columnConfigs && /* @__PURE__ */ react.createElement("div", { className: `${QueriesTable_baseClass}` }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      resultsTitle: "reports",
      columnConfigs,
      data: queries,
      isLoading,
      defaultSortHeader: sortHeader || DEFAULT_SORT_HEADER,
      defaultSortDirection: sortDirection || DEFAULT_SORT_DIRECTION,
      defaultSearchQuery: trimmedSearchQuery,
      pageIndex: page,
      disableNextPage: !hasNextResults,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      primarySelectAction: {
        name: "delete reports",
        buttonText: "Delete",
        iconSvg: "trash",
        variant: "secondary",
        onClick: onDeleteQueryClick
      },
      emptyComponent: () => /* @__PURE__ */ react.createElement(EmptyState/* default */.A, QueriesTable_spreadValues({}, emptyParams)),
      renderCount: () => /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "reports", count: totalQueriesCount }),
      inputPlaceHolder: "Search by name",
      onQueryChange,
      searchable: true,
      disableSearch: isTrulyEmpty,
      customControl: renderPlatformDropdown,
      disableMultiRowSelect: !curTeamScopeQueriesPresent,
      onClickRow: handleRowSelect,
      selectedDropdownFilter: curTargetedPlatformFilter
    }
  ));
};
/* harmony default export */ var QueriesTable_QueriesTable = (QueriesTable);

;// ./frontend/pages/queries/ManageQueriesPage/components/QueriesTable/index.ts



;// ./frontend/pages/queries/ManageQueriesPage/ManageQueriesPage.tsx

var ManageQueriesPage_defProp = Object.defineProperty;
var ManageQueriesPage_defProps = Object.defineProperties;
var ManageQueriesPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ManageQueriesPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ManageQueriesPage_hasOwnProp = Object.prototype.hasOwnProperty;
var ManageQueriesPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var ManageQueriesPage_defNormalProp = (obj, key, value) => key in obj ? ManageQueriesPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ManageQueriesPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ManageQueriesPage_hasOwnProp.call(b, prop))
      ManageQueriesPage_defNormalProp(a, prop, b[prop]);
  if (ManageQueriesPage_getOwnPropSymbols)
    for (var prop of ManageQueriesPage_getOwnPropSymbols(b)) {
      if (ManageQueriesPage_propIsEnum.call(b, prop))
        ManageQueriesPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ManageQueriesPage_spreadProps = (a, b) => ManageQueriesPage_defProps(a, ManageQueriesPage_getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ManageQueriesPage_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ManageQueriesPage_getOwnPropSymbols)
    for (var prop of ManageQueriesPage_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ManageQueriesPage_propIsEnum.call(source, prop))
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



























const DEFAULT_PAGE_SIZE = 20;
const ManageQueriesPage_baseClass = "manage-queries-page";
const getTargetedPlatforms = (platformString) => {
  const platforms = platformString.split(",");
  return platforms.filter(platform/* isQueryablePlatform */.ek);
};
const enhanceQuery = (q) => {
  return ManageQueriesPage_spreadProps(ManageQueriesPage_spreadValues({}, q), {
    performance: (0,helpers/* getPerformanceImpactDescription */.Hv)(
      (0,lodash.pick)(q.stats, ["user_time_p50", "system_time_p50", "total_executions"])
    ),
    targetedPlatforms: getTargetedPlatforms(q.platform)
  });
};
const ManageQueriesPage = ({
  router,
  location
}) => {
  var _a, _b, _c, _d;
  const {
    isGlobalAdmin,
    isGlobalMaintainer,
    isTeamAdmin,
    isTeamMaintainer,
    isOnlyObserver,
    isObserverPlus,
    isAnyTeamObserverPlus,
    isOnGlobalTeam,
    setFilteredQueriesPath,
    filteredQueriesPath,
    isPremiumTier,
    config
  } = (0,react.useContext)(app/* AppContext */.BR);
  const { setLastEditedQueryBody, setSelectedQueryTargetsByType } = (0,react.useContext)(
    query/* QueryContext */.c
  );
  const { setResetSelectedRows } = (0,react.useContext)(table/* TableContext */.G);
  const {
    userTeams,
    currentTeamId,
    handleTeamChange,
    teamIdForApi,
    isRouteOk
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: false
  });
  const isAnyTeamSelected = currentTeamId !== -1;
  const [selectedQueryIds, setSelectedQueryIds] = (0,react.useState)([]);
  const [showDeleteQueryModal, setShowDeleteQueryModal] = (0,react.useState)(false);
  const [showManageAutomationsModal, setShowManageAutomationsModal] = (0,react.useState)(
    false
  );
  const [showPreviewDataModal, setShowPreviewDataModal] = (0,react.useState)(false);
  const [isUpdatingQueries, setIsUpdatingQueries] = (0,react.useState)(false);
  const [isUpdatingAutomations, setIsUpdatingAutomations] = (0,react.useState)(false);
  const canManageAutomations = isGlobalAdmin || isTeamAdmin;
  const curPageFromURL = location.query.page ? parseInt(location.query.page, 10) : 0;
  const {
    data: queriesResponse,
    error: queriesError,
    isFetching: isFetchingQueries,
    isLoading: isLoadingQueries,
    refetch: refetchQueries
  } = (0,es.useQuery)(
    [
      {
        scope: "queries",
        teamId: teamIdForApi,
        page: curPageFromURL,
        perPage: DEFAULT_PAGE_SIZE,
        // a search match query, not a Mesh Query
        query: location.query.query,
        orderDirection: location.query.order_direction,
        orderKey: location.query.order_key,
        mergeInherited: teamIdForApi !== team/* API_ALL_TEAMS_ID */.s_,
        targetedPlatform: location.query.platform
      }
    ],
    ({ queryKey }) => queries/* default */.A.loadAll(queryKey[0]),
    {
      refetchOnWindowFocus: false,
      enabled: isRouteOk,
      staleTime: 5e3
    }
  );
  const enhancedQueries = (0,react.useMemo)(() => {
    return (queriesResponse == null ? void 0 : queriesResponse.queries.map(enhanceQuery)) || [];
  }, [queriesResponse]);
  const isManageAutomationsEnabled = isAnyTeamSelected ? ((_a = queriesResponse == null ? void 0 : queriesResponse.count) != null ? _a : 0) > ((_b = queriesResponse == null ? void 0 : queriesResponse.inherited_query_count) != null ? _b : 0) : ((_c = queriesResponse == null ? void 0 : queriesResponse.count) != null ? _c : 0) > 0;
  (0,react.useEffect)(() => {
    if (location.query.manage_automations !== "1") return;
    if (!queriesResponse) return;
    if (canManageAutomations && isManageAutomationsEnabled) {
      setShowManageAutomationsModal(true);
    }
    const _a2 = location.query, { manage_automations } = _a2, rest = __objRest(_a2, ["manage_automations"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [
    location.query,
    location.pathname,
    router,
    canManageAutomations,
    isManageAutomationsEnabled,
    queriesResponse
  ]);
  (0,react.useEffect)(() => {
    const path = location.pathname + location.search;
    if (filteredQueriesPath !== path) {
      setFilteredQueriesPath(path);
    }
  }, [location, filteredQueriesPath, setFilteredQueriesPath]);
  (0,react.useEffect)(() => {
    setSelectedQueryTargetsByType(target/* DEFAULT_TARGETS_BY_TYPE */.MQ);
  }, []);
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      handleTeamChange(teamId);
    },
    [handleTeamChange]
  );
  const onCreateQueryClick = (0,react.useCallback)(() => {
    setLastEditedQueryBody(constants/* DEFAULT_QUERY */.Xl.query);
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.NEW_REPORT, { fleet_id: currentTeamId })
    );
  }, [currentTeamId, router, setLastEditedQueryBody]);
  const toggleDeleteQueryModal = (0,react.useCallback)(() => {
    setShowDeleteQueryModal(!showDeleteQueryModal);
  }, [showDeleteQueryModal, setShowDeleteQueryModal]);
  const onDeleteQueryClick = (0,react.useCallback)(
    (selectedTableQueryIds) => {
      toggleDeleteQueryModal();
      setSelectedQueryIds(selectedTableQueryIds);
    },
    [toggleDeleteQueryModal, setSelectedQueryIds]
  );
  const toggleManageAutomationsModal = (0,react.useCallback)(() => {
    setShowManageAutomationsModal(!showManageAutomationsModal);
  }, [showManageAutomationsModal, setShowManageAutomationsModal]);
  const onManageAutomationsClick = () => {
    toggleManageAutomationsModal();
  };
  const togglePreviewDataModal = (0,react.useCallback)(() => {
    setShowPreviewDataModal(!showPreviewDataModal);
  }, [showPreviewDataModal, setShowPreviewDataModal]);
  const onDeleteQuerySubmit = (0,react.useCallback)(() => __async(null, null, function* () {
    const bulk = selectedQueryIds.length > 1;
    setIsUpdatingQueries(true);
    try {
      if (bulk) {
        yield queries/* default */.A.bulkDestroy(selectedQueryIds);
      } else {
        yield queries/* default */.A.destroy(selectedQueryIds[0]);
      }
      ToastNotification/* notify */.me.success("Successfully deleted reports.");
      setResetSelectedRows(true);
      refetchQueries();
    } catch (errorResponse) {
      ToastNotification/* notify */.me.error(
        "There was an error deleting your reports. Please try again later.",
        { response: errorResponse }
      );
    } finally {
      toggleDeleteQueryModal();
      setIsUpdatingQueries(false);
    }
  }), [refetchQueries, selectedQueryIds, toggleDeleteQueryModal]);
  const renderHeader = () => {
    var _a2;
    if (isPremiumTier && userTeams && !((_a2 = config == null ? void 0 : config.partnerships) == null ? void 0 : _a2.enable_primo)) {
      if (userTeams.length > 1 || isOnGlobalTeam) {
        return /* @__PURE__ */ react.createElement(
          FleetsDropdown/* default */.A,
          {
            currentUserFleets: userTeams,
            selectedFleetId: currentTeamId,
            onChange: onTeamChange
          }
        );
      }
      if (userTeams.length === 1 && !isOnGlobalTeam) {
        return /* @__PURE__ */ react.createElement("h1", null, userTeams[0].name);
      }
    }
    return /* @__PURE__ */ react.createElement("h1", null, "Reports");
  };
  const canCustomQuery = isGlobalAdmin || isGlobalMaintainer || isTeamAdmin || isTeamMaintainer || isObserverPlus;
  const renderQueriesTable = () => {
    if (queriesError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    return /* @__PURE__ */ react.createElement(
      QueriesTable_QueriesTable,
      {
        queries: enhancedQueries || [],
        totalQueriesCount: queriesResponse == null ? void 0 : queriesResponse.count,
        hasNextResults: !!(queriesResponse == null ? void 0 : queriesResponse.meta.has_next_results),
        curTeamScopeQueriesPresent: teamIdForApi !== team/* API_ALL_TEAMS_ID */.s_ ? enhancedQueries.some((q) => q.team_id === currentTeamId) : enhancedQueries.length > 0,
        isLoading: isLoadingQueries || isFetchingQueries,
        onDeleteQueryClick,
        onAddReportClick: onCreateQueryClick,
        canAddReport: canCustomQuery,
        isOnlyObserver,
        isObserverPlus,
        isAnyTeamObserverPlus: isAnyTeamObserverPlus || false,
        router,
        queryParams: location.query,
        currentTeamId: teamIdForApi,
        isPremiumTier
      }
    );
  };
  const onSaveQueryAutomations = (0,react.useCallback)(
    (_0) => __async(null, [_0], function* ({
      newAutomatedQueryIds,
      previousAutomatedQueryIds
    }) {
      setIsUpdatingAutomations(true);
      const turnOnAutomations = newAutomatedQueryIds.filter(
        (id) => !previousAutomatedQueryIds.includes(id)
      );
      const turnOffAutomations = previousAutomatedQueryIds.filter(
        (id) => !newAutomatedQueryIds.includes(id)
      );
      const updateAutomatedQueries = [];
      turnOnAutomations.map(
        (id) => updateAutomatedQueries.push(
          queries/* default */.A.update(id, { automations_enabled: true })
        )
      );
      turnOffAutomations.map(
        (id) => updateAutomatedQueries.push(
          queries/* default */.A.update(id, { automations_enabled: false })
        )
      );
      try {
        yield Promise.all(updateAutomatedQueries).then(() => {
          ToastNotification/* notify */.me.success(`Successfully updated report automations.`);
          refetchQueries();
        });
      } catch (errorResponse) {
        ToastNotification/* notify */.me.error(
          `There was an error updating your report automations. Please try again later.`,
          { response: errorResponse }
        );
      } finally {
        toggleManageAutomationsModal();
        setIsUpdatingAutomations(false);
      }
    }),
    [refetchQueries, toggleManageAutomationsModal]
  );
  const renderModals = () => {
    var _a2, _b2;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, showDeleteQueryModal && /* @__PURE__ */ react.createElement(
      DeleteQueryModal_DeleteQueryModal,
      {
        isUpdatingQueries,
        onCancel: toggleDeleteQueryModal,
        onSubmit: onDeleteQuerySubmit
      }
    ), showManageAutomationsModal && /* @__PURE__ */ react.createElement(
      ManageQueryAutomationsModal_ManageQueryAutomationsModal,
      {
        isUpdatingAutomations,
        onSubmit: onSaveQueryAutomations,
        onCancel: toggleManageAutomationsModal,
        isShowingPreviewDataModal: showPreviewDataModal,
        togglePreviewDataModal,
        teamId: teamIdForApi,
        logDestination: (config == null ? void 0 : config.logging.result.plugin) || "",
        webhookDestination: (_a2 = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _a2.result_url,
        filesystemDestination: (_b2 = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _b2.result_log_file
      }
    ), showPreviewDataModal && /* @__PURE__ */ react.createElement(PreviewDataModal_PreviewDataModal, { onCancel: togglePreviewDataModal }));
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: ManageQueriesPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ManageQueriesPage_baseClass}__header-wrap` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageQueriesPage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageQueriesPage_baseClass}__text` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageQueriesPage_baseClass}__title` }, renderHeader())), canCustomQuery && /* @__PURE__ */ react.createElement("div", { className: `${ManageQueriesPage_baseClass}__action-button-container` }, canManageAutomations && (isManageAutomationsEnabled ? /* @__PURE__ */ react.createElement(
    AutomationsButton/* default */.A,
    {
      onClick: onManageAutomationsClick,
      className: `${ManageQueriesPage_baseClass}__manage-automations button`
    }
  ) : /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: /* @__PURE__ */ react.createElement(
        "div",
        {
          className: `${ManageQueriesPage_baseClass}__manage-automations-tooltip`
        },
        isAnyTeamSelected && ((_d = queriesResponse == null ? void 0 : queriesResponse.count) != null ? _d : 0) > 0 ? /* @__PURE__ */ react.createElement(react.Fragment, null, "To manage automations add a report to this fleet. For inherited reports select \u201CAll fleets\u201D.") : "To manage automations add a report."
      ),
      underline: false,
      position: "top",
      showArrow: true
    },
    /* @__PURE__ */ react.createElement(
      AutomationsButton/* default */.A,
      {
        disabled: true,
        className: `${ManageQueriesPage_baseClass}__manage-automations button`
      }
    )
  )), canCustomQuery && /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${ManageQueriesPage_baseClass}__create-button`,
      onClick: onCreateQueryClick
    },
    isObserverPlus ? "Live report" : "Add report"
  ))), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "Gather data about your hosts." })), renderQueriesTable(), renderModals()));
};
/* harmony default export */ var ManageQueriesPage_ManageQueriesPage = (ManageQueriesPage);

;// ./frontend/pages/queries/ManageQueriesPage/index.tsx




/***/ }),

/***/ 84955:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ QueryDetailsPage_QueryDetailsPage; }
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
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DataError/DataError.tsx
var DataError = __webpack_require__(17015);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/index.ts
var InfoBanner = __webpack_require__(38021);
// EXTERNAL MODULE: ./frontend/components/LogDestinationIndicator/LogDestinationIndicator.tsx
var LogDestinationIndicator = __webpack_require__(75947);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/modals/ShowQueryModal/index.ts + 1 modules
var ShowQueryModal = __webpack_require__(67310);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/Spinner.tsx
var Spinner = __webpack_require__(95163);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/TooltipWrapper.tsx
var TooltipWrapper = __webpack_require__(36709);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/pages/queries/ManageQueriesPage/components/QueryAutomationsStatusIndicator/QueryAutomationsStatusIndicator.tsx
var QueryAutomationsStatusIndicator = __webpack_require__(45894);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/queries.ts
var queries = __webpack_require__(43788);
// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/services/entities/query_report.ts

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



const LOAD_ALL_PAGE_SIZE = 5e3;
const LOAD_ALL_MAX_PAGES = 1e3;
const LOAD_ALL_MAX_RESULTS = LOAD_ALL_PAGE_SIZE * LOAD_ALL_MAX_PAGES;
const getSortParams = (sortOptions) => {
  if (sortOptions === void 0 || sortOptions.length === 0) {
    return {};
  }
  const sortItem = sortOptions[0];
  return {
    order_key: sortItem.key,
    order_direction: sortItem.direction
  };
};
const load = ({
  id,
  sortBy,
  teamId,
  page,
  perPage,
  query
}) => {
  const sortParams = getSortParams(sortBy);
  const queryParams = {
    order_key: sortParams.order_key,
    order_direction: sortParams.order_direction
  };
  if (teamId && teamId > 0) {
    queryParams.fleet_id = teamId;
  }
  if (page !== void 0) {
    queryParams.page = page;
  }
  if (perPage !== void 0) {
    queryParams.per_page = perPage;
  }
  if (query) {
    queryParams.query = query;
  }
  const queryString = (0,url/* buildQueryStringFromParams */.IM)(queryParams);
  const path = `${endpoints/* default */.A.QUERY_REPORT(id)}?${queryString}`;
  return (0,services/* default */.Ay)("GET", path);
};
const loadAll = (options) => __async(null, null, function* () {
  var _a;
  const results = [];
  for (let page = 0; page < LOAD_ALL_MAX_PAGES; page += 1) {
    const report = yield load(__spreadProps(__spreadValues({}, options), {
      page,
      perPage: LOAD_ALL_PAGE_SIZE
    }));
    results.push(...report.results);
    if (!((_a = report.meta) == null ? void 0 : _a.has_next_results)) {
      return results;
    }
  }
  throw new Error(
    `Report has more than ${LOAD_ALL_MAX_RESULTS} results; export is not supported.`
  );
});
/* harmony default export */ var query_report = ({
  load,
  loadAll
});

// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/permissions/permissions.ts
var permissions = __webpack_require__(95681);
// EXTERNAL MODULE: ./node_modules/date-fns/differenceInSeconds.mjs
var differenceInSeconds = __webpack_require__(43924);
// EXTERNAL MODULE: ./node_modules/date-fns/formatDistanceStrict.mjs
var formatDistanceStrict = __webpack_require__(31826);
// EXTERNAL MODULE: ./node_modules/date-fns/add.mjs + 1 modules
var add = __webpack_require__(25579);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
;// ./frontend/pages/queries/details/components/NoResults/NoResults.tsx







const baseClass = "no-results";
const NoResults = ({
  queryId,
  queryInterval,
  queryUpdatedAt,
  disabledCaching,
  disabledCachingGlobally,
  discardDataEnabled,
  loggingSnapshot,
  canLiveQuery,
  canEditQuery
}) => {
  const secondsSinceUpdate = queryUpdatedAt ? (0,differenceInSeconds/* differenceInSeconds */.O)(/* @__PURE__ */ new Date(), new Date(queryUpdatedAt)) : 0;
  const collectingResults = (queryInterval != null ? queryInterval : 0) > 0 && secondsSinceUpdate < (queryInterval || 0) + 60;
  const secondsUntilNextCheckpoint = () => {
    if (!queryInterval) {
      return 0;
    }
    const nowSeconds = Date.now() / 1e3;
    const updatedAtSeconds = queryUpdatedAt ? new Date(queryUpdatedAt).getTime() / 1e3 : nowSeconds;
    const earliestApplicable = Math.max(nowSeconds, updatedAtSeconds + 60);
    const nextCheckpoint = Math.ceil(earliestApplicable / queryInterval) * queryInterval;
    return nextCheckpoint - nowSeconds;
  };
  const readableCheckbackTime = (0,formatDistanceStrict/* formatDistanceStrict */.k)(
    (0,add/* add */.W)(/* @__PURE__ */ new Date(), { seconds: secondsUntilNextCheckpoint() }),
    /* @__PURE__ */ new Date()
  );
  if (collectingResults && !disabledCaching) {
    const collectingResultsInfo = () => /* @__PURE__ */ react.createElement(react.Fragment, null, "Results expected in about ", readableCheckbackTime, " if hosts are online then.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/guides/reports#schedule-a-report",
        text: "Learn more",
        newTab: true
      }
    ));
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        header: "Collecting results...",
        info: collectingResultsInfo()
      }
    );
  }
  const getNoResultsInfo = () => {
    if (disabledCaching) {
      const tipContent = () => {
        if (disabledCachingGlobally) {
          return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("b", null, "Store report results"), " is globally disabled in organization settings."));
        }
        if (discardDataEnabled) {
          return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("b", null, "Store data"), " is disabled."));
        }
        if (!loggingSnapshot) {
          return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("b", null, "Differential logging"), " is enabled."));
        }
        return "Unknown";
      };
      return [
        "Nothing to report",
        /* @__PURE__ */ react.createElement(react.Fragment, null, "Results from this report are", " ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: tipContent() }, "not stored in Fleet"), ".")
      ];
    }
    if (!queryInterval) {
      return [
        "Nothing to report",
        /* @__PURE__ */ react.createElement(react.Fragment, null, "This report does not collect data on a schedule.", (canEditQuery || canLiveQuery) && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("br", null), canEditQuery && /* @__PURE__ */ react.createElement(react.Fragment, null, "Add an ", /* @__PURE__ */ react.createElement("strong", null, "interval")), canEditQuery && canLiveQuery && " or ", canLiveQuery && /* @__PURE__ */ react.createElement(react.Fragment, null, canEditQuery ? "run" : "Run", " a", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: paths/* default */.A.LIVE_REPORT(queryId),
            text: "live report"
          }
        )), " ", "to see results."))
      ];
    }
    return [
      "Nothing to report yet",
      /* @__PURE__ */ react.createElement(react.Fragment, null, "This report has returned no data so far.", canLiveQuery && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("br", null), "Expecting to see results? Run a", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: paths/* default */.A.LIVE_REPORT(queryId),
          text: "live report"
        }
      ), " ", "to troubleshoot."))
    ];
  };
  const [emptyHeader, emptyDetails] = getNoResultsInfo();
  return /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      className: baseClass,
      header: emptyHeader,
      info: emptyDetails
    }
  );
};
/* harmony default export */ var NoResults_NoResults = (NoResults);

// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/TableContainer/utilities/TableContainerUtils.ts
var TableContainerUtils = __webpack_require__(80055);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var components_TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/utilities/generate_csv/index.ts + 1 modules
var generate_csv = __webpack_require__(37706);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
;// ./frontend/pages/queries/details/components/QueryReport/QueryReportTableConfig.tsx

var QueryReportTableConfig_defProp = Object.defineProperty;
var QueryReportTableConfig_defProps = Object.defineProperties;
var QueryReportTableConfig_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var QueryReportTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var QueryReportTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var QueryReportTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var QueryReportTableConfig_defNormalProp = (obj, key, value) => key in obj ? QueryReportTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var QueryReportTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (QueryReportTableConfig_hasOwnProp.call(b, prop))
      QueryReportTableConfig_defNormalProp(a, prop, b[prop]);
  if (QueryReportTableConfig_getOwnPropSymbols)
    for (var prop of QueryReportTableConfig_getOwnPropSymbols(b)) {
      if (QueryReportTableConfig_propIsEnum.call(b, prop))
        QueryReportTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var QueryReportTableConfig_spreadProps = (a, b) => QueryReportTableConfig_defProps(a, QueryReportTableConfig_getOwnPropDescs(b));





const _unshiftHostname = (headers) => {
  const newHeaders = [...headers];
  const displayNameIndex = headers.findIndex(
    (h) => h.id === "host_display_name"
  );
  if (displayNameIndex >= 0) {
    const [displayNameHeader] = newHeaders.splice(displayNameIndex, 1);
    newHeaders.unshift(QueryReportTableConfig_spreadProps(QueryReportTableConfig_spreadValues({}, displayNameHeader), { id: "Host" }));
  }
  const hostNameIndex = headers.findIndex((h) => h.id === "host_hostname");
  if (hostNameIndex >= 0) {
    newHeaders.splice(hostNameIndex, 1);
  }
  return newHeaders;
};
const generateReportColumnConfigsFromResults = (results, queryId) => {
  const colsAreNumTypes = (0,helpers/* getUniqueColsAreNumTypeFromRows */.cv)(results);
  colsAreNumTypes.delete("host_id");
  const columnConfigs = Array.from(colsAreNumTypes.keys()).map((colName) => {
    return {
      id: colName,
      Header: (headerProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: headerProps.column.id === "last_fetched" ? "Last fetched" : headerProps.column.id,
          isSortedDesc: headerProps.column.isSortedDesc
        }
      ),
      accessor: (data) => data[colName],
      Cell: (cellProps) => {
        var _a, _b;
        if (typeof cellProps.cell.value !== "string") return null;
        if (cellProps.column.id === "Host") {
          const hostID = cellProps.row.original.host_id;
          if (queryId === null) {
            return /* @__PURE__ */ react.createElement(react.Fragment, null, "cellProps.cell.value");
          }
          return /* @__PURE__ */ react.createElement(
            LinkCell/* default */.A,
            {
              value: cellProps.cell.value,
              path: paths/* default */.A.HOST_REPORT_RESULTS(hostID, queryId)
            }
          );
        }
        if (cellProps.column.id === "last_fetched") {
          return /* @__PURE__ */ react.createElement(react.Fragment, null, (0,helpers/* humanHostLastSeen */.Hu)((_a = cellProps == null ? void 0 : cellProps.cell) == null ? void 0 : _a.value));
        }
        const val = (_b = cellProps == null ? void 0 : cellProps.cell) == null ? void 0 : _b.value;
        return !!(val == null ? void 0 : val.length) && val.length > 300 ? (0,helpers/* internallyTruncateText */.sq)(val) : /* @__PURE__ */ react.createElement(react.Fragment, null, val);
      },
      disableSortBy: false
    };
  });
  return _unshiftHostname(columnConfigs);
};
/* harmony default export */ var QueryReportTableConfig = (generateReportColumnConfigsFromResults);

;// ./frontend/pages/queries/details/components/QueryReport/QueryReport.tsx

var QueryReport_defProp = Object.defineProperty;
var QueryReport_defProps = Object.defineProperties;
var QueryReport_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var QueryReport_getOwnPropSymbols = Object.getOwnPropertySymbols;
var QueryReport_hasOwnProp = Object.prototype.hasOwnProperty;
var QueryReport_propIsEnum = Object.prototype.propertyIsEnumerable;
var QueryReport_defNormalProp = (obj, key, value) => key in obj ? QueryReport_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var QueryReport_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (QueryReport_hasOwnProp.call(b, prop))
      QueryReport_defNormalProp(a, prop, b[prop]);
  if (QueryReport_getOwnPropSymbols)
    for (var prop of QueryReport_getOwnPropSymbols(b)) {
      if (QueryReport_propIsEnum.call(b, prop))
        QueryReport_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var QueryReport_spreadProps = (a, b) => QueryReport_defProps(a, QueryReport_getOwnPropDescs(b));
var QueryReport_async = (__this, __arguments, generator) => {
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













const QueryReport_baseClass = "query-report";
const CSV_TITLE = "Report";
const HOST_TABLE_COLUMN_ID = "Host";
const HOST_API_ORDER_KEY = "host_name";
const toTableSortHeader = (apiOrderKey) => apiOrderKey === HOST_API_ORDER_KEY ? HOST_TABLE_COLUMN_ID : apiOrderKey;
const toApiOrderKey = (tableSortHeader) => tableSortHeader === HOST_TABLE_COLUMN_ID ? HOST_API_ORDER_KEY : tableSortHeader;
const flattenResults = (results) => {
  return results.map((result) => {
    const hostInfoColumns = {
      host_id: result.host_id,
      host_display_name: result.host_name,
      last_fetched: result.last_fetched
    };
    return QueryReport_spreadValues(QueryReport_spreadValues({}, hostInfoColumns), result.columns);
  });
};
const QueryReport = ({
  queryReport,
  queryId,
  queryName,
  isClipped,
  canLiveQuery,
  isFetching = false,
  pageIndex,
  pageSize,
  searchQuery,
  sortHeader,
  sortDirection,
  onQueryChange,
  loadAllResults
}) => {
  var _a;
  const [isExporting, setIsExporting] = (0,react.useState)(false);
  const results = (0,react.useMemo)(() => {
    var _a2;
    return (_a2 = queryReport == null ? void 0 : queryReport.results) != null ? _a2 : [];
  }, [queryReport]);
  const totalCount = (_a = queryReport == null ? void 0 : queryReport.count) != null ? _a : results.length;
  const columnConfigs = (0,react.useMemo)(() => {
    if (results.length) {
      return QueryReportTableConfig(
        flattenResults(results),
        queryId
      );
    }
    return [];
  }, [results, queryId]);
  const onExportQueryResults = (evt) => QueryReport_async(null, null, function* () {
    evt.preventDefault();
    setIsExporting(true);
    try {
      const allResults = flattenResults(yield loadAllResults());
      const exportColumns = QueryReportTableConfig(
        allResults,
        queryId
      );
      const rows = allResults.map((original) => ({ original }));
      FileSaver_default().saveAs(
        (0,generate_csv/* generateCSVQueryResults */.K4)(
          rows,
          (0,generate_csv/* generateCSVFilename */.$e)(`${queryName || CSV_TITLE} - Report`),
          exportColumns
        )
      );
    } catch (error) {
      console.error(error);
      ToastNotification/* notify */.me.error("Could not export results. Please try again.", {
        response: error
      });
    } finally {
      setIsExporting(false);
    }
  });
  const onTableQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      onQueryChange(QueryReport_spreadProps(QueryReport_spreadValues({}, newTableQuery), {
        sortHeader: toApiOrderKey(newTableQuery.sortHeader)
      }));
    },
    [onQueryChange]
  );
  const renderTableButtons = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${QueryReport_baseClass}__results-cta` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${QueryReport_baseClass}__export-btn`,
        onClick: onExportQueryResults,
        variant: "secondary",
        size: "small",
        icon: "download",
        iconPosition: "right",
        isLoading: isExporting,
        disabled: isExporting || totalCount === 0
      },
      "Export results"
    ));
  };
  const renderResultsCount = (0,react.useCallback)(() => {
    if (isClipped) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        components_TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "This report is full. Hosts already in the report keep updating, but results from other hosts aren't saved. ", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "You can reset this report by updating the report's SQL, or by temporarily enabling the ", /* @__PURE__ */ react.createElement("b", null, "discard data"), " setting and disabling it again.")
        },
        (0,TableContainerUtils/* generateResultsCountText */.Y)("results", totalCount)
      ));
    }
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "results", count: totalCount });
  }, [totalCount, isClipped]);
  const renderEmptyState = () => {
    if (searchQuery) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          className: QueryReport_baseClass,
          header: "No results match",
          info: "Try a different search."
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        className: QueryReport_baseClass,
        header: "Nothing to report yet",
        info: /* @__PURE__ */ react.createElement(react.Fragment, null, "This report hasn't returned data yet.", canLiveQuery && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("br", null), "Expecting to see results? Run a", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: paths/* default */.A.LIVE_REPORT(queryId),
            text: "live report"
          }
        ), " ", "to troubleshoot."))
      }
    );
  };
  const renderTable = () => {
    var _a2;
    return /* @__PURE__ */ react.createElement("div", { className: `${QueryReport_baseClass}__results-table-container` }, /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        columnConfigs,
        data: flattenResults(results),
        emptyComponent: renderEmptyState,
        defaultSortHeader: toTableSortHeader(sortHeader),
        defaultSortDirection: sortDirection,
        defaultSearchQuery: searchQuery,
        manualSortBy: true,
        pageIndex,
        pageSize,
        disableNextPage: !((_a2 = queryReport == null ? void 0 : queryReport.meta) == null ? void 0 : _a2.has_next_results),
        totalCount: queryReport == null ? void 0 : queryReport.count,
        isLoading: isFetching,
        onQueryChange: onTableQueryChange,
        searchable: true,
        inputPlaceHolder: "Search results",
        showMarkAllPages: false,
        isAllPagesSelected: false,
        resultsTitle: "results",
        customControl: renderTableButtons,
        renderCount: renderResultsCount,
        getRowId: (_row, index) => String(index)
      }
    ));
  };
  return /* @__PURE__ */ react.createElement("div", { className: `${QueryReport_baseClass}__wrapper` }, renderTable());
};
/* harmony default export */ var QueryReport_QueryReport = (QueryReport);

;// ./frontend/pages/queries/details/QueryDetailsPage/QueryDetailsPageConfig.tsx

const QUERY_DETAILS_PAGE_FILTER_KEYS = (/* unused pure expression or super */ null && (["model", "vendor"]));
const DEFAULT_SORT_HEADER = "host_name";
const DEFAULT_SORT_DIRECTION = "asc";
const DEFAULT_PAGE_SIZE = 50;

;// ./frontend/pages/queries/details/QueryDetailsPage/QueryDetailsPage.tsx

var QueryDetailsPage_defProp = Object.defineProperty;
var QueryDetailsPage_defProps = Object.defineProperties;
var QueryDetailsPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var QueryDetailsPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var QueryDetailsPage_hasOwnProp = Object.prototype.hasOwnProperty;
var QueryDetailsPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var QueryDetailsPage_defNormalProp = (obj, key, value) => key in obj ? QueryDetailsPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var QueryDetailsPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (QueryDetailsPage_hasOwnProp.call(b, prop))
      QueryDetailsPage_defNormalProp(a, prop, b[prop]);
  if (QueryDetailsPage_getOwnPropSymbols)
    for (var prop of QueryDetailsPage_getOwnPropSymbols(b)) {
      if (QueryDetailsPage_propIsEnum.call(b, prop))
        QueryDetailsPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var QueryDetailsPage_spreadProps = (a, b) => QueryDetailsPage_defProps(a, QueryDetailsPage_getOwnPropDescs(b));




























const QueryDetailsPage_baseClass = "query-details-page";
const QueryDetailsPage = ({
  router,
  params: { id: paramsQueryId },
  location
}) => {
  var _a, _b, _c, _d;
  const queryId = parseInt(paramsQueryId, 10);
  if (isNaN(queryId)) {
    router.push(paths/* default */.A.MANAGE_REPORTS);
  }
  const queryParams = location.query;
  const hostId = (queryParams == null ? void 0 : queryParams.host_id) ? parseInt(queryParams.host_id, 10) : void 0;
  const { currentTeamId } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: false
  });
  const serverSortBy = (() => {
    var _a2, _b2;
    return [
      {
        key: (_a2 = queryParams == null ? void 0 : queryParams.order_key) != null ? _a2 : DEFAULT_SORT_HEADER,
        direction: (_b2 = queryParams == null ? void 0 : queryParams.order_direction) != null ? _b2 : DEFAULT_SORT_DIRECTION
      }
    ];
  })();
  const parsedPage = parseInt((_a = queryParams == null ? void 0 : queryParams.page) != null ? _a : "0", 10);
  const page = isNaN(parsedPage) || parsedPage < 0 ? 0 : parsedPage;
  const searchQuery = (_b = queryParams == null ? void 0 : queryParams.query) != null ? _b : "";
  const isFirstNavigation = (0,react.useRef)(true);
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const {
    currentUser,
    isGlobalAdmin,
    isGlobalMaintainer,
    isTeamMaintainerOrTeamAdmin,
    isObserverPlus,
    config,
    filteredQueriesPath,
    availableTeams,
    setCurrentTeam,
    isOnGlobalTeam,
    isGlobalTechnician,
    isTeamTechnician
  } = (0,react.useContext)(app/* AppContext */.BR);
  const [showQueryModal, setShowQueryModal] = (0,react.useState)(false);
  const [disabledCachingGlobally, setDisabledCachingGlobally] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    if (config) {
      setDisabledCachingGlobally(config.server_settings.query_reports_disabled);
    }
  }, [config]);
  const {
    isLoading: isStoredQueryLoading,
    data: storedQuery,
    error: storedQueryError
  } = (0,es.useQuery)(
    ["query", queryId],
    () => queries/* default */.A.load(queryId),
    {
      enabled: !!queryId,
      select: (data) => data.query,
      onError: (error) => handlePageError(error)
    }
  );
  if (!isOnGlobalTeam && !isStoredQueryLoading && (storedQuery == null ? void 0 : storedQuery.team_id) && !(((_c = storedQuery == null ? void 0 : storedQuery.team_id) == null ? void 0 : _c.toString()) === location.query.fleet_id)) {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(location.pathname, {
        fleet_id: (_d = storedQuery == null ? void 0 : storedQuery.team_id) == null ? void 0 : _d.toString()
      })
    );
  }
  const discardData = !!(storedQuery == null ? void 0 : storedQuery.discard_data);
  const loggingSnapshot = (storedQuery == null ? void 0 : storedQuery.logging) === "snapshot";
  const reportCachingDisabled = disabledCachingGlobally || discardData || !loggingSnapshot;
  const {
    isLoading: isQueryReportLoading,
    isFetching: isQueryReportFetching,
    data: queryReport,
    error: queryReportError
  } = (0,es.useQuery)(
    // Key must include every queryFn parameter; an empty key bled one report's
    // cached rows into another on revisit (and suppressed refetch on sort).
    ["queryReport", queryId, currentTeamId, serverSortBy, page, searchQuery],
    () => query_report.load({
      teamId: currentTeamId,
      sortBy: serverSortBy,
      id: queryId,
      page,
      perPage: DEFAULT_PAGE_SIZE,
      query: searchQuery
    }),
    {
      enabled: !!queryId,
      keepPreviousData: true,
      refetchOnWindowFocus: !reportCachingDisabled,
      // Poll only while the report has no results at all, not when a search
      // happens to match nothing.
      refetchInterval: (data) => {
        var _a2;
        return !reportCachingDisabled && !searchQuery && ((_a2 = data == null ? void 0 : data.count) != null ? _a2 : 0) === 0 ? 5e3 : false;
      },
      onError: (error) => handlePageError(error)
    }
  );
  const onReportQueryChange = (0,react.useCallback)(
    (newTableQuery) => {
      const {
        pageIndex: newPageIndex,
        searchQuery: newSearchQuery,
        sortDirection: newSortDirection,
        sortHeader: newSortHeader
      } = newTableQuery;
      const newQueryParams = QueryDetailsPage_spreadProps(QueryDetailsPage_spreadValues({}, queryParams), {
        order_key: newSortHeader,
        order_direction: newSortDirection,
        query: newSearchQuery || void 0,
        page: newPageIndex
      });
      if (newSortHeader !== serverSortBy[0].key || newSortDirection !== serverSortBy[0].direction || (newSearchQuery != null ? newSearchQuery : "") !== searchQuery) {
        newQueryParams.page = 0;
      }
      const locationPath = (0,helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.REPORT_DETAILS(queryId),
        queryParams: newQueryParams
      });
      if (isFirstNavigation.current) {
        isFirstNavigation.current = false;
        router.replace(locationPath);
      } else {
        router.push(locationPath);
      }
    },
    [queryParams, serverSortBy, searchQuery, queryId, router]
  );
  const loadAllReportResults = (0,react.useCallback)(
    () => query_report.loadAll({
      teamId: currentTeamId,
      sortBy: serverSortBy,
      id: queryId,
      query: searchQuery
    }),
    [currentTeamId, serverSortBy, queryId, searchQuery]
  );
  (0,react.useEffect)(() => {
    if (storedQuery == null ? void 0 : storedQuery.team_id) {
      const querysTeam = availableTeams == null ? void 0 : availableTeams.find(
        (team) => team.id === storedQuery.team_id
      );
      setCurrentTeam(querysTeam);
    }
  }, [storedQuery, availableTeams, setCurrentTeam]);
  (0,react.useEffect)(() => {
    if (storedQuery == null ? void 0 : storedQuery.name) {
      document.title = `${storedQuery.name} | Reports | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    } else {
      document.title = `Reports | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    }
  }, [location.pathname, storedQuery == null ? void 0 : storedQuery.name]);
  const onShowQueryModal = () => {
    setShowQueryModal(!showQueryModal);
  };
  const isLoading = isStoredQueryLoading || isQueryReportLoading;
  const isApiError = storedQueryError || queryReportError;
  const isClipped = queryReport == null ? void 0 : queryReport.report_clipped;
  const isLiveQueryDisabled = config == null ? void 0 : config.server_settings.live_query_disabled;
  const canLiveQuery = (storedQuery == null ? void 0 : storedQuery.observer_can_run) || isObserverPlus || isGlobalAdmin || isGlobalMaintainer || isTeamMaintainerOrTeamAdmin || isGlobalTechnician || isTeamTechnician;
  const canRunLiveReport = canLiveQuery && !isLiveQueryDisabled;
  const canEditQuery = isGlobalAdmin || isGlobalMaintainer || isTeamMaintainerOrTeamAdmin && (storedQuery == null ? void 0 : storedQuery.team_id);
  const renderHeader = () => {
    var _a2, _b2;
    const backPath = () => {
      if (hostId)
        return (0,url/* getPathWithQueryParams */.M8)(
          paths/* default */.A.HOST_DETAILS(hostId, currentTeamId)
        );
      if (filteredQueriesPath) return filteredQueriesPath;
      return (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_REPORTS, {
        fleet_id: currentTeamId
      });
    };
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${QueryDetailsPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(
      BackButton/* default */.A,
      {
        text: hostId ? "Back to host details" : "Back to reports",
        path: backPath()
      }
    )), !isLoading && !isApiError && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${QueryDetailsPage_baseClass}__title-bar` }, /* @__PURE__ */ react.createElement("div", { className: `${QueryDetailsPage_baseClass}__name-description` }, /* @__PURE__ */ react.createElement("h1", { className: `${QueryDetailsPage_baseClass}__query-name` }, /* @__PURE__ */ react.createElement(
      TooltipTruncatedText/* default */.A,
      {
        value: storedQuery == null ? void 0 : storedQuery.name,
        fixedPositionStrategy: true
      }
    ))), /* @__PURE__ */ react.createElement("div", { className: `${QueryDetailsPage_baseClass}__action-button-container` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${QueryDetailsPage_baseClass}__show-query-btn`,
        onClick: onShowQueryModal,
        variant: "secondary"
      },
      "Show query"
    ), canLiveQuery && /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `button-wrap ${QueryDetailsPage_baseClass}__button-wrap--new-query`
      },
      /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: "Live reports are disabled in organization settings.",
          position: "top",
          disableTooltip: !isLiveQueryDisabled,
          underline: false,
          showArrow: true
        },
        /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            className: `${QueryDetailsPage_baseClass}__run`,
            variant: "secondary",
            onClick: () => {
              queryId && router.push(
                (0,url/* getPathWithQueryParams */.M8)(
                  paths/* default */.A.LIVE_REPORT(queryId),
                  {
                    host_id: hostId,
                    fleet_id: currentTeamId
                  }
                )
              );
            },
            disabled: isLiveQueryDisabled,
            icon: "run",
            iconPosition: "right"
          },
          "Live report"
        ))
      )
    ), canEditQuery && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: () => {
          queryId && router.push(
            (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.EDIT_REPORT(queryId), {
              fleet_id: currentTeamId,
              host_id: hostId
            })
          );
        },
        className: `${QueryDetailsPage_baseClass}__manage-automations button`
      },
      "Edit report"
    ))), /* @__PURE__ */ react.createElement(
      PageDescription/* default */.A,
      {
        className: `${QueryDetailsPage_baseClass}__query-description`,
        content: storedQuery == null ? void 0 : storedQuery.description
      }
    ), /* @__PURE__ */ react.createElement("div", { className: `${QueryDetailsPage_baseClass}__settings` }, /* @__PURE__ */ react.createElement("div", { className: `${QueryDetailsPage_baseClass}__automations` }, /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Report automations let you send data to your log destination on a schedule. When automations are", " ", /* @__PURE__ */ react.createElement("strong", null, "on"), ", data is sent according to a report's interval.")
      },
      "Automations:"
    ), /* @__PURE__ */ react.createElement(
      QueryAutomationsStatusIndicator/* default */.A,
      {
        automationsEnabled: (storedQuery == null ? void 0 : storedQuery.automations_enabled) || false,
        interval: (storedQuery == null ? void 0 : storedQuery.interval) || 0
      }
    )), /* @__PURE__ */ react.createElement("div", { className: `${QueryDetailsPage_baseClass}__log-destination` }, /* @__PURE__ */ react.createElement("strong", null, "Log destination:"), " ", /* @__PURE__ */ react.createElement(
      LogDestinationIndicator/* default */.A,
      {
        logDestination: (config == null ? void 0 : config.logging.result.plugin) || "",
        filesystemDestination: (_a2 = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _a2.result_log_file,
        webhookDestination: (_b2 = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _b2.result_url
      }
    )))));
  };
  const renderClippedBanner = () => /* @__PURE__ */ react.createElement(
    InfoBanner/* default */.A,
    {
      color: "yellow",
      cta: /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: constants/* SUPPORT_LINK */.FI, text: "Get help", newTab: true })
    },
    /* @__PURE__ */ react.createElement(
      "div",
      null,
      /* @__PURE__ */ react.createElement("b", null, "Report clipped."),
      " This report is full. Hosts already in the report keep updating, but results from other hosts aren't saved. Once there's room, this clears after the report's next run.",
      // Exclude below message for global and team observers/observer+s
      !(currentUser && (0,permissions/* isGlobalObserver */.Et)(currentUser) || (0,permissions/* isTeamObserver */.s)(currentUser, currentTeamId != null ? currentTeamId : null)) && " You can still use automations to complete this report in your log destination."
    )
  );
  const renderReport = () => {
    var _a2;
    const emptyCache = ((_a2 = queryReport == null ? void 0 : queryReport.count) != null ? _a2 : 0) === 0 && !searchQuery;
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isApiError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (emptyCache || discardData) {
      return /* @__PURE__ */ react.createElement(
        NoResults_NoResults,
        {
          queryId,
          queryInterval: storedQuery == null ? void 0 : storedQuery.interval,
          queryUpdatedAt: storedQuery == null ? void 0 : storedQuery.updated_at,
          disabledCaching: reportCachingDisabled,
          disabledCachingGlobally,
          discardDataEnabled: discardData,
          loggingSnapshot,
          canLiveQuery: canRunLiveReport,
          canEditQuery: !!canEditQuery
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      QueryReport_QueryReport,
      {
        queryReport,
        queryId,
        queryName: storedQuery == null ? void 0 : storedQuery.name,
        isClipped,
        canLiveQuery: canRunLiveReport,
        isFetching: isQueryReportFetching,
        pageIndex: page,
        pageSize: DEFAULT_PAGE_SIZE,
        searchQuery,
        sortHeader: serverSortBy[0].key,
        sortDirection: serverSortBy[0].direction,
        onQueryChange: onReportQueryChange,
        loadAllResults: loadAllReportResults
      }
    );
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: QueryDetailsPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, renderHeader(), isClipped && renderClippedBanner(), renderReport(), showQueryModal && /* @__PURE__ */ react.createElement(
    ShowQueryModal/* default */.A,
    {
      query: storedQuery == null ? void 0 : storedQuery.query,
      onCancel: onShowQueryModal
    }
  )));
};
/* harmony default export */ var QueryDetailsPage_QueryDetailsPage = (QueryDetailsPage);

;// ./frontend/pages/queries/details/QueryDetailsPage/index.ts




/***/ }),

/***/ 12673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ edit_EditQueryPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/index.ts
var InfoBanner = __webpack_require__(38021);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/side_panels/QuerySidePanel/index.ts + 15 modules
var QuerySidePanel = __webpack_require__(37863);
// EXTERNAL MODULE: ./frontend/components/SidePanelContent/index.ts + 1 modules
var SidePanelContent = __webpack_require__(90125);
// EXTERNAL MODULE: ./frontend/components/SidePanelPage/index.ts + 1 modules
var SidePanelPage = __webpack_require__(56118);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/context/query.tsx
var query = __webpack_require__(83535);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var interfaces_errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var entities_config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/queries.ts
var queries = __webpack_require__(43788);
// EXTERNAL MODULE: ./frontend/services/entities/status.ts
var entities_status = __webpack_require__(68612);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/debounce/index.ts
var debounce = __webpack_require__(14332);
// EXTERNAL MODULE: ./frontend/utilities/deep_difference/index.ts
var deep_difference = __webpack_require__(65273);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/use-debounce/dist/index.module.js
var index_module = __webpack_require__(81591);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Slider/index.ts
var Slider = __webpack_require__(26806);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_query/index.ts
var validate_query = __webpack_require__(22184);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/Icon/Icon.tsx + 74 modules
var Icon = __webpack_require__(99742);
// EXTERNAL MODULE: ./frontend/components/LogDestinationIndicator/LogDestinationIndicator.tsx
var LogDestinationIndicator = __webpack_require__(75947);
;// ./frontend/components/LogDestinationIndicator/index.ts



// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/SQLEditor/index.tsx
var SQLEditor = __webpack_require__(98220);
// EXTERNAL MODULE: ./frontend/components/TargetLabelSelector/index.ts + 2 modules
var TargetLabelSelector = __webpack_require__(22676);
;// ./frontend/components/TargetLabelSelector/labelScopes.tsx


const ENTITY_NOUN = {
  policy: "Policy",
  report: "Report"
};
const getCustomTargetOptions = ({
  entity,
  isPremiumTier
}) => {
  const noun = ENTITY_NOUN[entity];
  const includeAny = "labelsIncludeAny";
  const includeAll = "labelsIncludeAll";
  const excludeAny = "labelsExcludeAny";
  const options = [
    {
      value: includeAny,
      label: "Include any",
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, noun, " will target hosts that ", /* @__PURE__ */ react.createElement("b", null, "have any"), " of these labels:"),
      disabled: false
    }
  ];
  if (isPremiumTier) {
    options.push({
      value: includeAll,
      label: "Include all",
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, noun, " will target hosts that ", /* @__PURE__ */ react.createElement("b", null, "have all"), " of these labels:"),
      disabled: false
    });
  }
  if (entity === "policy") {
    options.push({
      value: excludeAny,
      label: "Exclude any",
      helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, noun, " will target hosts that ", /* @__PURE__ */ react.createElement("b", null, "don\u2019t have any"), " of these labels:"),
      disabled: false
    });
  }
  return options;
};

// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/hooks/usePlatformCompatibility.tsx + 2 modules
var usePlatformCompatibility = __webpack_require__(19984);
// EXTERNAL MODULE: ./frontend/hooks/usePlatformSelector.tsx + 2 modules
var usePlatformSelector = __webpack_require__(64933);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/queries/edit/components/ConfirmSaveChangesModal/ConfirmSaveChangesModal.tsx




const baseClass = "save-changes-modal";
const ConfirmSaveChangesModal = ({
  isUpdating,
  onSaveChanges,
  onClose,
  showChangedSQLCopy = false
}) => {
  const warningText = showChangedSQLCopy ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Changing this report's ", /* @__PURE__ */ react.createElement("strong", null, "Query"), " will delete its previous results, since the existing results do not reflect the updated", " ", /* @__PURE__ */ react.createElement("strong", null, "Query"), ".") : "The changes you are making to this report will delete its previous results.";
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Save changes?", onExit: onClose }, /* @__PURE__ */ react.createElement("form", { className: `${baseClass}__form` }, /* @__PURE__ */ react.createElement("p", null, warningText), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "button",
      onClick: onSaveChanges,
      className: "save-loading",
      isLoading: isUpdating
    },
    "Save"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClose, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var ConfirmSaveChangesModal_ConfirmSaveChangesModal = (ConfirmSaveChangesModal);

;// ./frontend/pages/queries/edit/components/ConfirmSaveChangesModal/index.ts



// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var components_Icon = __webpack_require__(52978);
;// ./frontend/pages/queries/edit/components/DiscardDataOption/DiscardDataOption.tsx







const DiscardDataOption_baseClass = "discard-data-option";
const DiscardDataOption = ({
  queryReportsDisabled,
  selectedLoggingType,
  discardData,
  setDiscardData
}) => {
  const [forceEditDiscardData, setForceEditDiscardData] = (0,react.useState)(false);
  const isDisabled = queryReportsDisabled && !forceEditDiscardData;
  const isReportsLoggingIgnored = selectedLoggingType === "differential" || selectedLoggingType === "differential_ignore_removals";
  const renderHelpText = () => /* @__PURE__ */ react.createElement(react.Fragment, null, isDisabled ? /* @__PURE__ */ react.createElement(react.Fragment, null, "This setting is ignored since report results in Mesh have been", " ", /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "A Mesh administrator can enable report results under", /* @__PURE__ */ react.createElement("strong", null, "Organization settings > Advanced options > Store report results"), ".")
    },
    "globally disabled."
  ), /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      onClick: (e) => {
        e.preventDefault();
        setForceEditDiscardData(true);
      },
      variant: "subdued",
      size: "small",
      className: `${DiscardDataOption_baseClass}__edit-anyway`
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, "Edit anyway", /* @__PURE__ */ react.createElement(
      components_Icon/* default */.A,
      {
        name: "chevron-right",
        color: "ui-fleet-black-75",
        size: "small"
      }
    ))
  )) : "When disabled, results will not be available in Fleet.");
  return /* @__PURE__ */ react.createElement("div", { className: DiscardDataOption_baseClass }, isReportsLoggingIgnored && /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, null, "The ", /* @__PURE__ */ react.createElement("b", null, "Store data"), " setting is ignored when differential logging is enabled. This report's results will not be saved in Fleet."), /* @__PURE__ */ react.createElement(
    Checkbox/* default */.A,
    {
      name: "discardData",
      onChange: () => setDiscardData(!discardData),
      value: !discardData,
      disabled: isDisabled,
      helpText: renderHelpText()
    },
    "Store data"
  ));
};
/* harmony default export */ var DiscardDataOption_DiscardDataOption = (DiscardDataOption);

;// ./frontend/pages/queries/edit/components/DiscardDataOption/index.ts



// EXTERNAL MODULE: ./frontend/components/FleetsDropdown/index.tsx + 1 modules
var FleetsDropdown = __webpack_require__(82196);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
;// ./frontend/pages/queries/edit/components/SaveAsNewQueryModal/SaveAsNewQueryModal.tsx

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














const SaveAsNewQueryModal_baseClass = "save-as-new-query-modal";
const validateFormData = (formData) => {
  const errors = {};
  if (!formData.queryName || formData.queryName.trim() === "") {
    errors.queryName = "Name must be present";
  }
  return errors;
};
const SaveAsNewQueryModal = ({
  router,
  location,
  initialQueryData,
  hostId,
  onExit
}) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [formData, setFormData] = (0,react.useState)({
    queryName: `Copy of ${initialQueryData.name}`,
    team: {
      id: initialQueryData.fleet_id,
      name: void 0
    }
  });
  const [isSaving, setIsSaving] = (0,react.useState)(false);
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const { userTeams } = (0,useTeamIdParam/* useTeamIdParam */.xs)({
    router,
    location,
    includeAllTeams: true,
    includeNoTeam: false,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: true,
      observer: false,
      observer_plus: false,
      technician: false
    }
  });
  const onInputChange = (0,react.useCallback)(
    ({
      name,
      value
    }) => {
      const newFormData = __spreadProps(__spreadValues({}, formData), { [name]: value });
      setFormData(newFormData);
      const newErrors = validateFormData(newFormData);
      const errsToSet = {};
      Object.keys(formErrors).forEach((k) => {
        if (k in newErrors) {
          errsToSet[k] = newErrors[k];
        }
      });
      setFormErrors(errsToSet);
    },
    [formData, formErrors]
  );
  const onInputBlur = () => {
    setFormErrors(validateFormData(formData));
  };
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      const selectedTeam = userTeams == null ? void 0 : userTeams.find((team) => team.id === teamId);
      setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
        team: {
          id: teamId,
          name: selectedTeam ? selectedTeam.name : void 0
        }
      }));
    },
    [userTeams]
  );
  const handleSave = (evt) => __async(null, null, function* () {
    evt.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsSaving(true);
    const {
      queryName,
      team: { id: teamId, name: teamName }
    } = formData;
    const createBody = __spreadProps(__spreadValues({}, initialQueryData), {
      name: queryName,
      fleet_id: teamId === team/* APP_CONTEXT_ALL_TEAMS_ID */.jc ? team/* API_ALL_TEAMS_ID */.s_ : teamId
    });
    try {
      const { query: newQuery } = yield queries/* default */.A.create(createBody);
      setIsSaving(false);
      ToastNotification/* notify */.me.success(`Successfully added report ${newQuery.name}.`);
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.REPORT_DETAILS(newQuery.id), {
          fleet_id: newQuery.team_id,
          host_id: hostId
        })
      );
    } catch (createError) {
      let errFlash = "Could not create report. Please try again.";
      const reason = (0,interfaces_errors/* getErrorReason */.F3)(createError);
      if (reason.includes("already exists")) {
        let teamText;
        if (teamId !== team/* APP_CONTEXT_ALL_TEAMS_ID */.jc) {
          teamText = teamName ? `the ${teamName} fleet` : "this fleet";
        } else {
          teamText = "all fleets";
        }
        errFlash = `A report called "${queryName}" already exists for ${teamText}.`;
      } else if (reason.includes(constants/* INVALID_PLATFORMS_REASON */.ie)) {
        errFlash = constants/* INVALID_PLATFORMS_FLASH_MESSAGE */.uV;
      }
      setIsSaving(false);
      ToastNotification/* notify */.me.error(errFlash, { response: createError });
    }
  });
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Save as new", onExit }, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSave, className: SaveAsNewQueryModal_baseClass }, /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      name: "queryName",
      onChange: onInputChange,
      onBlur: onInputBlur,
      value: formData.queryName,
      error: formErrors.queryName,
      inputClassName: `${SaveAsNewQueryModal_baseClass}__name`,
      label: "Name",
      autofocus: true,
      parseTarget: true
    }
  ), isPremiumTier && ((userTeams == null ? void 0 : userTeams.length) || 0) > 1 && /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Mesh"), /* @__PURE__ */ react.createElement(
    FleetsDropdown/* default */.A,
    {
      asFormField: true,
      currentUserFleets: userTeams || [],
      selectedFleetId: formData.team.id,
      onChange: onTeamChange
    }
  )), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "submit",
      className: "save-as-new-query",
      isLoading: isSaving,
      disabled: Object.keys(formErrors).length > 0 || isSaving
    },
    "Save"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary" }, "Cancel"))));
};
/* harmony default export */ var SaveAsNewQueryModal_SaveAsNewQueryModal = (SaveAsNewQueryModal);

;// ./frontend/pages/queries/edit/components/SaveAsNewQueryModal/index.ts



// EXTERNAL MODULE: ./frontend/hooks/useDeepEffect.ts
var useDeepEffect = __webpack_require__(98598);
;// ./frontend/pages/queries/edit/components/SaveNewQueryModal/SaveNewQueryModal.tsx

var SaveNewQueryModal_defProp = Object.defineProperty;
var SaveNewQueryModal_defProps = Object.defineProperties;
var SaveNewQueryModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SaveNewQueryModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SaveNewQueryModal_hasOwnProp = Object.prototype.hasOwnProperty;
var SaveNewQueryModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var SaveNewQueryModal_defNormalProp = (obj, key, value) => key in obj ? SaveNewQueryModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SaveNewQueryModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SaveNewQueryModal_hasOwnProp.call(b, prop))
      SaveNewQueryModal_defNormalProp(a, prop, b[prop]);
  if (SaveNewQueryModal_getOwnPropSymbols)
    for (var prop of SaveNewQueryModal_getOwnPropSymbols(b)) {
      if (SaveNewQueryModal_propIsEnum.call(b, prop))
        SaveNewQueryModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SaveNewQueryModal_spreadProps = (a, b) => SaveNewQueryModal_defProps(a, SaveNewQueryModal_getOwnPropDescs(b));





















const SaveNewQueryModal_baseClass = "save-query-modal";
const validateQueryName = (name) => {
  const errors = {};
  if (!name) {
    errors.name = "Report name must be present";
  }
  const valid = !(0,lodash.size)(errors);
  return { valid, errors };
};
const SaveNewQueryModal = ({
  queryValue,
  apiTeamIdForQuery,
  isLoading,
  saveQuery,
  toggleSaveNewQueryModal,
  backendValidators,
  existingQuery,
  queryReportsDisabled,
  platformSelector
}) => {
  var _a, _b, _c, _d, _e;
  const { config, isPremiumTier, currentTeam } = (0,react.useContext)(app/* AppContext */.BR);
  const [name, setName] = (0,react.useState)("");
  const [description, setDescription] = (0,react.useState)("");
  const [selectedFrequency, setSelectedFrequency] = (0,react.useState)(
    (_a = existingQuery == null ? void 0 : existingQuery.interval) != null ? _a : 3600
  );
  const [
    selectedMinOsqueryVersionOptions,
    setSelectedMinOsqueryVersionOptions
  ] = (0,react.useState)((_b = existingQuery == null ? void 0 : existingQuery.min_osquery_version) != null ? _b : "");
  const [
    selectedLoggingType,
    setSelectedLoggingType
  ] = (0,react.useState)((_c = existingQuery == null ? void 0 : existingQuery.logging) != null ? _c : "snapshot");
  const [observerCanRun, setObserverCanRun] = (0,react.useState)(false);
  const [automationsEnabled, setAutomationsEnabled] = (0,react.useState)(false);
  const [selectedTargetType, setSelectedTargetType] = (0,react.useState)("All hosts");
  const [selectedCustomTarget, setSelectedCustomTarget] = (0,react.useState)(
    "labelsIncludeAny"
  );
  const [selectedLabels, setSelectedLabels] = (0,react.useState)({});
  const [discardData, setDiscardData] = (0,react.useState)(false);
  const customTargetOptions = (0,react.useMemo)(
    () => getCustomTargetOptions({ entity: "report", isPremiumTier }),
    [isPremiumTier]
  );
  const [errors, setErrors] = (0,react.useState)(
    backendValidators
  );
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react.useState)(false);
  const {
    data: { labels } = { labels: [] },
    isFetching: isFetchingLabels
  } = (0,es.useQuery)(
    ["custom_labels"],
    () => entities_labels/* default */.Ay.summary(currentTeam == null ? void 0 : currentTeam.id, true),
    SaveNewQueryModal_spreadProps(SaveNewQueryModal_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      // Wait for the current team to load from context before pulling labels, otherwise on a page load
      // directly on the page this gets called with currentTeam not set, then again
      // with the correct team value. If we don't trigger on currentTeam changes we'll just start with a
      // null team ID here and never populate with the correct team unless we navigate from another page
      // where team context is already set prior to navigation.
      enabled: isPremiumTier && !!currentTeam,
      staleTime: 1e4,
      select: (res) => ({ labels: (0,entities_labels/* getCustomLabels */.f2)(res.labels) })
    })
  );
  const onSelectLabel = ({
    name: labelName,
    value
  }) => {
    setSelectedLabels(SaveNewQueryModal_spreadProps(SaveNewQueryModal_spreadValues({}, selectedLabels), {
      [labelName]: value
    }));
  };
  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };
  (0,useDeepEffect/* default */.A)(() => {
    if (name) {
      setErrors({});
    }
  }, [name]);
  (0,react.useEffect)(() => {
    setErrors(backendValidators);
  }, [backendValidators]);
  const canSave = platformSelector.isAnyPlatformSelected && (selectedTargetType === "All hosts" || Object.entries(selectedLabels).some(([, value]) => {
    return value;
  }));
  const onClickSaveQuery = (evt) => {
    evt.preventDefault();
    const trimmedName = name.trim();
    const { valid, errors: newErrors } = validateQueryName(trimmedName);
    setErrors(SaveNewQueryModal_spreadValues(SaveNewQueryModal_spreadValues({}, errors), newErrors));
    setName(trimmedName);
    const newPlatformString = platformSelector.getSelectedPlatforms().join(",");
    if (valid) {
      const customLabelNames = isPremiumTier && selectedTargetType === "Custom" ? Object.entries(selectedLabels).filter(([, selected]) => selected).map(([labelName]) => labelName) : [];
      const labelsForScope = (scope) => {
        if (!isPremiumTier) {
          return void 0;
        }
        return selectedCustomTarget === scope ? customLabelNames : [];
      };
      const labelsIncludeAny = labelsForScope("labelsIncludeAny");
      const labelsIncludeAll = labelsForScope("labelsIncludeAll");
      saveQuery({
        // from modal fields
        name: trimmedName,
        description,
        interval: selectedFrequency,
        observer_can_run: observerCanRun,
        automations_enabled: automationsEnabled,
        discard_data: discardData,
        platform: newPlatformString,
        min_osquery_version: selectedMinOsqueryVersionOptions,
        logging: selectedLoggingType,
        // from previous New query page
        query: queryValue,
        // from doubly previous ManageQueriesPage
        fleet_id: apiTeamIdForQuery,
        labels_include_any: labelsIncludeAny,
        labels_include_all: labelsIncludeAll
      });
    }
  };
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Save report", onExit: toggleSaveNewQueryModal }, /* @__PURE__ */ react.createElement(
    "form",
    {
      onSubmit: onClickSaveQuery,
      className: SaveNewQueryModal_baseClass,
      autoComplete: "off"
    },
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "name",
        onChange: (value) => setName(value),
        onBlur: () => {
          setName(name.trim());
        },
        value: name,
        error: errors.name,
        inputClassName: `${SaveNewQueryModal_baseClass}__name`,
        label: "Name",
        autofocus: true,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ),
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "description",
        onChange: (value) => setDescription(value),
        value: description,
        inputClassName: `${SaveNewQueryModal_baseClass}__description`,
        label: "Description",
        type: "textarea",
        helpText: "What information does your report reveal? (optional)"
      }
    ),
    /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        searchable: false,
        options: constants/* FREQUENCY_DROPDOWN_OPTIONS */.GH,
        onChange: (value) => {
          setSelectedFrequency(value);
        },
        placeholder: "Every hour",
        value: selectedFrequency,
        label: "Interval",
        wrapperClassName: `${SaveNewQueryModal_baseClass}__form-field form-field--frequency`,
        helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Hosts report at fixed times (e.g., on the hour for a 1-hour interval).", " ", /* @__PURE__ */ react.createElement(
          CustomLink/* default */.A,
          {
            url: "https://fleetdm.com/guides/reports#schedule-a-report",
            text: "Learn more",
            newTab: true
          }
        ))
      }
    ),
    /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        name: "observerCanRun",
        onChange: setObserverCanRun,
        value: observerCanRun,
        wrapperClassName: "observer-can-run-wrapper",
        helpText: "Users with the Observer role will be able to run this report as a live report."
      },
      "Observers can run"
    ),
    /* @__PURE__ */ react.createElement(
      Slider/* default */.A,
      {
        onChange: () => setAutomationsEnabled(!automationsEnabled),
        value: automationsEnabled,
        activeText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Automations on", selectedFrequency === 0 && /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Automations and reporting will be paused for this report until an interval is set."),
            position: "right",
            tipOffset: 9,
            showArrow: true,
            underline: false
          },
          /* @__PURE__ */ react.createElement(components_Icon/* default */.A, { name: "warning" })
        )),
        inactiveText: "Automations off",
        helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Historical results will ", !automationsEnabled ? "not " : "", "be sent to your log destination:", " ", /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement(
          LogDestinationIndicator/* default */.A,
          {
            logDestination: (config == null ? void 0 : config.logging.result.plugin) || "",
            filesystemDestination: (_d = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _d.result_log_file,
            webhookDestination: (_e = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _e.result_url,
            excludeTooltip: true
          }
        )), ".")
      }
    ),
    platformSelector.render(),
    isPremiumTier && /* @__PURE__ */ react.createElement(
      TargetLabelSelector/* DropdownTargetLabelSelector */.m,
      {
        selectedTargetType,
        selectedCustomTarget,
        customTargetOptions,
        onSelectCustomTarget: (val) => setSelectedCustomTarget(val),
        selectedLabels,
        className: `${SaveNewQueryModal_baseClass}__target`,
        onSelectTargetType: setSelectedTargetType,
        onSelectLabel,
        labels: labels || [],
        suppressTitle: true
      }
    ),
    /* @__PURE__ */ react.createElement(
      RevealButton/* default */.A,
      {
        isShowing: showAdvancedOptions,
        className: "advanced-options-toggle",
        hideText: "Advanced options",
        showText: "Advanced options",
        caretPosition: "after",
        onClick: toggleAdvancedOptions
      }
    ),
    showAdvancedOptions && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: constants/* MIN_OSQUERY_VERSION_OPTIONS */.IX,
        onChange: setSelectedMinOsqueryVersionOptions,
        placeholder: "Select",
        value: selectedMinOsqueryVersionOptions,
        label: "Minimum osquery version",
        wrapperClassName: `${SaveNewQueryModal_baseClass}__form-field ${SaveNewQueryModal_baseClass}__form-field--osquer-vers`
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: constants/* LOGGING_TYPE_OPTIONS */["if"],
        onChange: setSelectedLoggingType,
        placeholder: "Select",
        value: selectedLoggingType,
        label: "Logging",
        wrapperClassName: `${SaveNewQueryModal_baseClass}__form-field ${SaveNewQueryModal_baseClass}__form-field--logging`
      }
    ), queryReportsDisabled !== void 0 && /* @__PURE__ */ react.createElement(
      DiscardDataOption_DiscardDataOption,
      SaveNewQueryModal_spreadValues({}, {
        queryReportsDisabled,
        selectedLoggingType,
        discardData,
        setDiscardData,
        breakHelpText: true
      })
    )),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        className: "save-query-loading",
        isLoading: isLoading || isFetchingLabels,
        disabled: !canSave
      },
      "Save"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: toggleSaveNewQueryModal, variant: "secondary" }, "Cancel"))
  ));
};
/* harmony default export */ var SaveNewQueryModal_SaveNewQueryModal = (SaveNewQueryModal);

;// ./frontend/pages/queries/edit/components/SaveNewQueryModal/index.ts



;// ./frontend/pages/queries/edit/components/EditQueryForm/EditQueryForm.tsx

var EditQueryForm_defProp = Object.defineProperty;
var EditQueryForm_defProps = Object.defineProperties;
var EditQueryForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditQueryForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditQueryForm_hasOwnProp = Object.prototype.hasOwnProperty;
var EditQueryForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditQueryForm_defNormalProp = (obj, key, value) => key in obj ? EditQueryForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditQueryForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditQueryForm_hasOwnProp.call(b, prop))
      EditQueryForm_defNormalProp(a, prop, b[prop]);
  if (EditQueryForm_getOwnPropSymbols)
    for (var prop of EditQueryForm_getOwnPropSymbols(b)) {
      if (EditQueryForm_propIsEnum.call(b, prop))
        EditQueryForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditQueryForm_spreadProps = (a, b) => EditQueryForm_defProps(a, EditQueryForm_getOwnPropDescs(b));


































const EditQueryForm_baseClass = "edit-query-form";
const validateQuerySQL = (query) => {
  const errors = {};
  const { error: queryError, valid: queryValid } = (0,validate_query/* validateQuery */.B4)(query);
  if (!queryValid) {
    errors.query = queryError != null ? queryError : "Invalid query";
  }
  const valid = !(0,lodash.size)(errors);
  return { valid, errors };
};
const getLabelsForScope = (isPremiumTier, selectedTargetType, selectedCustomTarget, selectedLabels, scope) => {
  if (!isPremiumTier) {
    return void 0;
  }
  if (selectedTargetType !== "Custom" || selectedCustomTarget !== scope) {
    return [];
  }
  return Object.entries(selectedLabels).filter(([, selected]) => selected).map(([labelName]) => labelName);
};
const EditQueryForm = ({
  router,
  location,
  queryIdForEdit,
  apiTeamIdForQuery,
  currentTeamId,
  currentTeamName,
  showOpenSchemaActionText,
  storedQuery,
  isStoredQueryLoading,
  isQuerySaving,
  isQueryUpdating,
  onSubmitNewQuery,
  onOsqueryTableSelect,
  onUpdate,
  onOpenSchemaSidebar,
  renderLiveQueryWarning,
  backendValidators,
  hostId,
  queryReportsDisabled,
  showConfirmSaveChangesModal,
  setShowConfirmSaveChangesModal
}) => {
  const {
    lastEditedQueryId,
    lastEditedQueryName,
    lastEditedQueryDescription,
    lastEditedQueryBody,
    lastEditedQueryObserverCanRun,
    lastEditedQueryFrequency,
    lastEditedQueryAutomationsEnabled,
    lastEditedQueryPlatforms,
    lastEditedQueryMinOsqueryVersion,
    lastEditedQueryLoggingType,
    lastEditedQueryDiscardData,
    setLastEditedQueryName,
    setLastEditedQueryDescription,
    setLastEditedQueryBody,
    setLastEditedQueryObserverCanRun,
    setLastEditedQueryFrequency,
    setLastEditedQueryAutomationsEnabled,
    setLastEditedQueryMinOsqueryVersion,
    setLastEditedQueryLoggingType,
    setLastEditedQueryDiscardData,
    setEditingExistingQuery
  } = (0,react.useContext)(query/* QueryContext */.c);
  const {
    isOnlyObserver,
    isGlobalObserver,
    isTeamMaintainerOrTeamAdmin,
    isAnyTeamMaintainerOrTeamAdmin,
    isGlobalAdmin,
    isGlobalMaintainer,
    isObserverPlus,
    isAnyTeamObserverPlus,
    config,
    isPremiumTier,
    isFreeTier
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isExistingQuery = !!queryIdForEdit;
  const disabledLiveQuery = config == null ? void 0 : config.server_settings.live_query_disabled;
  const gitOpsModeEnabled = config == null ? void 0 : config.gitops.gitops_mode_enabled;
  const [errors, setErrors] = (0,react.useState)({});
  const [showSaveAsNewQueryModal, setShowSaveAsNewQueryModal] = (0,react.useState)(false);
  const [showSaveNewQueryModal, setShowSaveNewQueryModal] = (0,react.useState)(false);
  const [showQueryEditor, setShowQueryEditor] = (0,react.useState)(
    isObserverPlus || isAnyTeamObserverPlus || false
  );
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react.useState)(false);
  const [queryWasChanged, setQueryWasChanged] = (0,react.useState)(false);
  const [selectedTargetType, setSelectedTargetType] = (0,react.useState)("");
  const [selectedCustomTarget, setSelectedCustomTarget] = (0,react.useState)(
    "labelsIncludeAny"
  );
  const [selectedLabels, setSelectedLabels] = (0,react.useState)({});
  const customTargetOptions = (0,react.useMemo)(
    () => getCustomTargetOptions({ entity: "report", isPremiumTier }),
    [isPremiumTier]
  );
  const platformSelector = (0,usePlatformSelector/* default */.A)(
    lastEditedQueryPlatforms,
    EditQueryForm_baseClass,
    false,
    void 0,
    void 0
  );
  const updateQueryData = {
    name: lastEditedQueryName.trim(),
    description: lastEditedQueryDescription,
    query: lastEditedQueryBody,
    platform: platformSelector.getSelectedPlatforms().join(","),
    observer_can_run: lastEditedQueryObserverCanRun,
    interval: lastEditedQueryFrequency,
    automations_enabled: lastEditedQueryAutomationsEnabled,
    min_osquery_version: lastEditedQueryMinOsqueryVersion,
    logging: lastEditedQueryLoggingType,
    discard_data: lastEditedQueryDiscardData,
    labels_include_any: getLabelsForScope(
      isPremiumTier,
      selectedTargetType,
      selectedCustomTarget,
      selectedLabels,
      "labelsIncludeAny"
    ),
    labels_include_all: getLabelsForScope(
      isPremiumTier,
      selectedTargetType,
      selectedCustomTarget,
      selectedLabels,
      "labelsIncludeAll"
    )
  };
  (0,react.useEffect)(() => {
    var _a, _b;
    const includeAnyLabels = (_a = storedQuery == null ? void 0 : storedQuery.labels_include_any) != null ? _a : [];
    const includeAllLabels = (_b = storedQuery == null ? void 0 : storedQuery.labels_include_all) != null ? _b : [];
    const hasAnyScope = isPremiumTier && (includeAnyLabels.length || includeAllLabels.length);
    setSelectedTargetType(hasAnyScope ? "Custom" : "All hosts");
    setSelectedCustomTarget(
      includeAllLabels.length ? "labelsIncludeAll" : "labelsIncludeAny"
    );
    const activeLabels = includeAllLabels.length ? includeAllLabels : includeAnyLabels;
    setSelectedLabels(
      activeLabels.reduce((acc, label) => {
        return EditQueryForm_spreadProps(EditQueryForm_spreadValues({}, acc), {
          [label.name]: true
        });
      }, {}) || {}
    );
  }, [storedQuery, isPremiumTier]);
  const {
    data: { labels } = { labels: [] },
    isFetching: isFetchingLabels
  } = (0,es.useQuery)(
    ["custom_labels"],
    // All-teams queries can only be assigned global labels
    () => entities_labels/* default */.Ay.summary(currentTeamId, true),
    EditQueryForm_spreadProps(EditQueryForm_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier,
      staleTime: 1e4,
      select: (res) => ({ labels: (0,entities_labels/* getCustomLabels */.f2)(res.labels) })
    })
  );
  const platformCompatibility = (0,usePlatformCompatibility/* default */.A)();
  const { setCompatiblePlatforms } = platformCompatibility;
  const debounceSQL = (0,index_module/* useDebouncedCallback */.YQ)((sql) => {
    const { errors: newErrors } = validateQuerySQL(sql);
    setErrors(EditQueryForm_spreadValues({}, newErrors));
  }, 500);
  queryIdForEdit = queryIdForEdit || 0;
  (0,react.useEffect)(() => {
    if (!isStoredQueryLoading && queryIdForEdit === lastEditedQueryId) {
      setCompatiblePlatforms(lastEditedQueryBody);
    }
    debounceSQL(lastEditedQueryBody);
  }, [lastEditedQueryBody, lastEditedQueryId, isStoredQueryLoading]);
  const toggleSaveNewQueryModal = () => {
    setShowSaveNewQueryModal(!showSaveNewQueryModal);
  };
  const toggleConfirmSaveChangesModal = () => {
    setShowConfirmSaveChangesModal(!showConfirmSaveChangesModal);
  };
  const toggleSaveAsNewQueryModal = () => {
    setShowSaveAsNewQueryModal(!showSaveAsNewQueryModal);
  };
  const onLoad = (editor) => {
    editor.setOptions({
      enableMultiselect: false
      // Disables command + click creating multiple cursors
    });
    editor.on("linkClick", (data) => {
      const { type, value } = data.token;
      if (type === "osquery-token") {
        return onOsqueryTableSelect(value);
      }
      return false;
    });
  };
  const onChangeQuery = (sqlString) => {
    setQueryWasChanged(true);
    setLastEditedQueryBody(sqlString);
  };
  const frequencyOptions = (0,react.useMemo)(
    () => (0,helpers/* getCustomDropdownOptions */.fj)(
      constants/* FREQUENCY_DROPDOWN_OPTIONS */.GH,
      lastEditedQueryFrequency,
      // it's safe to assume that frequency is a number
      (frequency) => `Every ${(0,helpers/* secondsToDhms */.xR)(frequency)}`
    ),
    // intentionally leave lastEditedQueryFrequency out of the dependencies, so that the custom
    // options are maintained even if the user changes the frequency in the UI
    []
  );
  const onSelectLabel = ({
    name: labelName,
    value
  }) => {
    setSelectedLabels(EditQueryForm_spreadProps(EditQueryForm_spreadValues({}, selectedLabels), {
      [labelName]: value
    }));
  };
  const onChangeSelectFrequency = (0,react.useCallback)(
    (value) => {
      setLastEditedQueryFrequency(value);
    },
    [setLastEditedQueryFrequency]
  );
  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };
  const onChangeMinOsqueryVersionOptions = (0,react.useCallback)(
    (value) => {
      setLastEditedQueryMinOsqueryVersion(value);
    },
    [setLastEditedQueryMinOsqueryVersion]
  );
  const onChangeSelectLoggingType = (0,react.useCallback)(
    (value) => {
      setLastEditedQueryLoggingType(value);
    },
    [setLastEditedQueryLoggingType]
  );
  const handleSaveQuery = () => (evt) => {
    evt.preventDefault();
    if (isExistingQuery && !lastEditedQueryName) {
      return setErrors(EditQueryForm_spreadProps(EditQueryForm_spreadValues({}, errors), {
        name: "Report name must be present"
      }));
    }
    const { valid, errors: newErrs } = validateQuerySQL(lastEditedQueryBody);
    const canSave = valid || !valid && newErrs.query !== validate_query/* EMPTY_QUERY_ERR */.Ni;
    if (canSave) {
      if (!isExistingQuery) {
        platformSelector.setSelectedPlatforms(
          platformCompatibility.getCompatiblePlatforms()
        );
        setShowSaveNewQueryModal(true);
      } else {
        onUpdate(updateQueryData);
      }
    }
  };
  const renderLabelComponent = () => {
    if (!showOpenSchemaActionText) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        onClick: onOpenSchemaSidebar,
        icon: "info",
        iconPosition: "right"
      },
      "Schema"
    );
  };
  const renderPlatformCompatibility = () => {
    if (isStoredQueryLoading || queryIdForEdit !== lastEditedQueryId) {
      return null;
    }
    return platformCompatibility.render();
  };
  const renderName = () => {
    if (isExistingQuery) {
      return /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "query-name",
          label: "Name",
          placeholder: "Add name",
          value: lastEditedQueryName,
          error: errors && errors.name,
          onChange: (value) => setLastEditedQueryName(value),
          onBlur: () => {
            setLastEditedQueryName(lastEditedQueryName.trim());
          },
          disabled: gitOpsModeEnabled,
          inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
        }
      );
    }
    return /* @__PURE__ */ react.createElement("h1", { className: `${EditQueryForm_baseClass}__query-name no-hover` }, "New report");
  };
  const renderDescription = () => {
    if (isExistingQuery) {
      return /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "query-description",
          label: "Description",
          placeholder: "Add description",
          value: lastEditedQueryDescription,
          type: "textarea",
          helpText: "What information does your report reveal? (optional)",
          onChange: (value) => setLastEditedQueryDescription(value),
          disabled: gitOpsModeEnabled
        }
      );
    }
    return null;
  };
  const hasSavePermissions = isGlobalAdmin || isGlobalMaintainer || isTeamMaintainerOrTeamAdmin;
  const renderQueryTeam = () => {
    if (isFreeTier || !currentTeamName) return null;
    if (isExistingQuery) {
      return hasSavePermissions ? /* @__PURE__ */ react.createElement("p", null, "Editing report for ", /* @__PURE__ */ react.createElement("strong", null, currentTeamName), ".") : /* @__PURE__ */ react.createElement("p", null, "Viewing report for ", /* @__PURE__ */ react.createElement("strong", null, currentTeamName), ".");
    }
    return hasSavePermissions ? /* @__PURE__ */ react.createElement("p", null, "Creating a new report for ", /* @__PURE__ */ react.createElement("strong", null, currentTeamName), ".") : /* @__PURE__ */ react.createElement("p", null, "Running a new report for ", /* @__PURE__ */ react.createElement("strong", null, currentTeamName), ".");
  };
  const renderNonEditableForm = /* @__PURE__ */ react.createElement("form", { className: `${EditQueryForm_baseClass}` }, /* @__PURE__ */ react.createElement("h1", { className: `${EditQueryForm_baseClass}__query-name no-hover` }, lastEditedQueryName), renderQueryTeam(), /* @__PURE__ */ react.createElement(
    PageDescription/* default */.A,
    {
      className: `${EditQueryForm_baseClass}__query-description no-hover`,
      content: lastEditedQueryDescription
    }
  ), (!isObserverPlus && isGlobalObserver || !isAnyTeamObserverPlus) && /* @__PURE__ */ react.createElement(
    RevealButton/* default */.A,
    {
      isShowing: showQueryEditor,
      className: EditQueryForm_baseClass,
      hideText: "Hide SQL",
      showText: "Show SQL",
      onClick: () => setShowQueryEditor(!showQueryEditor)
    }
  ), showQueryEditor && /* @__PURE__ */ react.createElement(
    SQLEditor/* default */.A,
    {
      value: lastEditedQueryBody,
      name: "query editor",
      label: "Query",
      wrapperClassName: `${EditQueryForm_baseClass}__text-editor-wrapper`,
      readOnly: !isObserverPlus && !isAnyTeamObserverPlus || isExistingQuery,
      labelActionComponent: isObserverPlus && renderLabelComponent(),
      wrapEnabled: true,
      "data-testid": "ace-editor"
    }
  ), renderPlatformCompatibility(), renderLiveQueryWarning(), (lastEditedQueryObserverCanRun || isObserverPlus || isAnyTeamObserverPlus) && /* @__PURE__ */ react.createElement("div", { className: `button-wrap ${EditQueryForm_baseClass}__button-wrap--new-query` }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      className: "live-query-button-tooltip",
      tipContent: "Live reports are disabled in organization settings.",
      disableTooltip: !disabledLiveQuery,
      position: "top",
      showArrow: true,
      tipOffset: 8,
      underline: false
    },
    /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: () => {
          router.push(
            (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.LIVE_REPORT(queryIdForEdit), {
              host_id: hostId,
              fleet_id: apiTeamIdForQuery
            })
          );
        },
        disabled: disabledLiveQuery,
        icon: "run",
        iconPosition: "right"
      },
      "Live report"
    )
  )));
  const currentlySavingQueryResults = storedQuery && !storedQuery.discard_data && !["differential", "differential_ignore_removals"].includes(
    storedQuery.logging
  );
  const changedSQL = storedQuery && lastEditedQueryBody !== storedQuery.query;
  const changedLoggingToDifferential = [
    "differential",
    "differential_ignore_removals"
  ].includes(lastEditedQueryLoggingType);
  const formatPlatformEquivalences = (platforms) => {
    return platforms == null ? void 0 : platforms.replace(/\s/g, "").split(",").sort().toString();
  };
  const changedPlatforms = storedQuery && formatPlatformEquivalences(lastEditedQueryPlatforms) !== formatPlatformEquivalences(storedQuery == null ? void 0 : storedQuery.platform);
  const changedMinOsqueryVersion = storedQuery && lastEditedQueryMinOsqueryVersion !== storedQuery.min_osquery_version;
  const enabledDiscardData = storedQuery && lastEditedQueryDiscardData && !storedQuery.discard_data;
  const confirmChanges = currentlySavingQueryResults && (changedSQL || changedLoggingToDifferential || enabledDiscardData || changedPlatforms || changedMinOsqueryVersion);
  const showChangedSQLCopy = changedSQL && !changedLoggingToDifferential && !enabledDiscardData;
  const renderEditableQueryForm = () => {
    var _a, _b;
    const disableSaveFormErrors = lastEditedQueryName === "" && !!lastEditedQueryId || !!errors.query && errors.query === validate_query/* EMPTY_QUERY_ERR */.Ni || isExistingQuery && !platformSelector.isAnyPlatformSelected || selectedTargetType === "Custom" && !Object.entries(selectedLabels).some(([, value]) => {
      return value;
    });
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("form", { className: EditQueryForm_baseClass, autoComplete: "off" }, isExistingQuery ? /* @__PURE__ */ react.createElement("div", { className: `${EditQueryForm_baseClass}__page-header` }, /* @__PURE__ */ react.createElement("h1", { className: `${EditQueryForm_baseClass}__page-title` }, "Edit report"), renderQueryTeam()) : /* @__PURE__ */ react.createElement("div", { className: `${EditQueryForm_baseClass}__query-name-fleet-name` }, renderName(), renderQueryTeam()), isExistingQuery && renderName(), renderDescription(), isExistingQuery && /* @__PURE__ */ react.createElement(
      "div",
      {
        className: gitOpsModeEnabled ? "disabled-by-gitops-mode form" : "form"
      },
      /* @__PURE__ */ react.createElement(
        Dropdown/* default */.A,
        {
          searchable: false,
          options: frequencyOptions,
          onChange: onChangeSelectFrequency,
          placeholder: "Every day",
          value: lastEditedQueryFrequency,
          label: "Interval",
          wrapperClassName: `${EditQueryForm_baseClass}__form-field form-field--frequency`,
          helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Hosts report at fixed times (e.g., on the hour for a 1-hour interval).", " ", /* @__PURE__ */ react.createElement(
            CustomLink/* default */.A,
            {
              url: "https://fleetdm.com/guides/reports#schedule-a-report",
              text: "Learn more",
              newTab: true
            }
          ))
        }
      ),
      /* @__PURE__ */ react.createElement(
        Slider/* default */.A,
        {
          onChange: () => setLastEditedQueryAutomationsEnabled(
            !lastEditedQueryAutomationsEnabled
          ),
          value: lastEditedQueryAutomationsEnabled,
          activeText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Automations on", lastEditedQueryFrequency === 0 && /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Automations and reporting will be paused for this report until an interval is set."),
              position: "right",
              tipOffset: 9,
              showArrow: true,
              underline: false
            },
            /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "warning" })
          )),
          inactiveText: "Automations off",
          helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Historical results will", !lastEditedQueryAutomationsEnabled ? " not " : " ", "be sent to your log destination:", " ", /* @__PURE__ */ react.createElement("b", null, /* @__PURE__ */ react.createElement(
            LogDestinationIndicator/* default */.A,
            {
              logDestination: (config == null ? void 0 : config.logging.result.plugin) || "",
              filesystemDestination: (_a = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _a.result_log_file,
              webhookDestination: (_b = config == null ? void 0 : config.logging.result.config) == null ? void 0 : _b.result_url,
              excludeTooltip: true
            }
          )), ".")
        }
      ),
      /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          value: lastEditedQueryObserverCanRun,
          onChange: (value) => setLastEditedQueryObserverCanRun(value),
          helpText: "Users with the observer role will be able to run this report on hosts where they have access."
        },
        "Observers can run"
      ),
      isExistingQuery && platformSelector.render(),
      isPremiumTier && /* @__PURE__ */ react.createElement(
        TargetLabelSelector/* DropdownTargetLabelSelector */.m,
        {
          selectedTargetType,
          selectedCustomTarget,
          customTargetOptions,
          onSelectCustomTarget: (val) => setSelectedCustomTarget(val),
          selectedLabels,
          className: `${EditQueryForm_baseClass}__target`,
          onSelectTargetType: setSelectedTargetType,
          onSelectLabel,
          labels: labels || [],
          disableOptions: gitOpsModeEnabled,
          suppressTitle: true
        }
      )
    ), /* @__PURE__ */ react.createElement(
      SQLEditor/* default */.A,
      {
        value: lastEditedQueryBody,
        error: errors.query,
        label: "Query",
        labelActionComponent: renderLabelComponent(),
        name: "query editor",
        onLoad,
        wrapperClassName: `${EditQueryForm_baseClass}__text-editor-wrapper form-field`,
        onChange: onChangeQuery,
        handleSubmit: confirmChanges ? toggleConfirmSaveChangesModal : handleSaveQuery,
        wrapEnabled: true,
        focus: !isExistingQuery
      }
    ), renderPlatformCompatibility(), isExistingQuery && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      RevealButton/* default */.A,
      {
        isShowing: showAdvancedOptions,
        className: "advanced-options-toggle",
        hideText: "Advanced options",
        showText: "Advanced options",
        caretPosition: "after",
        onClick: toggleAdvancedOptions
      }
    ), showAdvancedOptions && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: constants/* MIN_OSQUERY_VERSION_OPTIONS */.IX,
        onChange: onChangeMinOsqueryVersionOptions,
        placeholder: "Select",
        value: lastEditedQueryMinOsqueryVersion,
        label: "Minimum osquery version",
        wrapperClassName: `${EditQueryForm_baseClass}__form-field ${EditQueryForm_baseClass}__form-field--osquer-vers`
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: constants/* LOGGING_TYPE_OPTIONS */["if"],
        onChange: onChangeSelectLoggingType,
        placeholder: "Select",
        value: lastEditedQueryLoggingType,
        label: "Logging",
        wrapperClassName: `${EditQueryForm_baseClass}__form-field ${EditQueryForm_baseClass}__form-field--logging`
      }
    ), queryReportsDisabled !== void 0 && /* @__PURE__ */ react.createElement(
      DiscardDataOption_DiscardDataOption,
      {
        selectedLoggingType: lastEditedQueryLoggingType,
        discardData: lastEditedQueryDiscardData,
        setDiscardData: setLastEditedQueryDiscardData,
        queryReportsDisabled
      }
    ))), renderLiveQueryWarning(), /* @__PURE__ */ react.createElement("div", { className: `button-wrap ${EditQueryForm_baseClass}__button-wrap--new-query` }, hasSavePermissions && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${EditQueryForm_baseClass}__button-wrap--save-query-button` }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        tipOffset: 8,
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            className: "save-loading",
            onClick: confirmChanges ? toggleConfirmSaveChangesModal : handleSaveQuery(),
            disabled: disableSaveFormErrors || disableChildren,
            isLoading: isQueryUpdating
          },
          "Save"
        )
      }
    )), isExistingQuery && /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "secondary",
            onClick: toggleSaveAsNewQueryModal,
            disabled: disableSaveFormErrors || disableChildren
          },
          "Save as new"
        )
      }
    )), /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        className: "live-query-button-tooltip",
        tipContent: "Live reports are disabled in organization settings.",
        disableTooltip: !disabledLiveQuery,
        position: "top",
        showArrow: true,
        tipOffset: 8,
        underline: false
      },
      /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${EditQueryForm_baseClass}__run`,
          variant: "secondary",
          onClick: () => {
            if (queryWasChanged) {
              setEditingExistingQuery(true);
            }
            router.push(
              (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.LIVE_REPORT(queryIdForEdit), {
                host_id: hostId,
                fleet_id: currentTeamId
              })
            );
          },
          disabled: disabledLiveQuery,
          icon: "run",
          iconPosition: "right"
        },
        "Live report"
      )
    ))), showSaveNewQueryModal && /* @__PURE__ */ react.createElement(
      SaveNewQueryModal_SaveNewQueryModal,
      {
        queryValue: lastEditedQueryBody,
        apiTeamIdForQuery,
        saveQuery: onSubmitNewQuery,
        toggleSaveNewQueryModal,
        backendValidators,
        isLoading: isQuerySaving,
        queryReportsDisabled,
        platformSelector
      }
    ), showSaveAsNewQueryModal && /* @__PURE__ */ react.createElement(
      SaveAsNewQueryModal_SaveAsNewQueryModal,
      {
        router,
        location,
        initialQueryData: EditQueryForm_spreadProps(EditQueryForm_spreadValues({}, updateQueryData), {
          fleet_id: apiTeamIdForQuery
        }),
        hostId,
        onExit: toggleSaveAsNewQueryModal
      }
    ), showConfirmSaveChangesModal && /* @__PURE__ */ react.createElement(
      ConfirmSaveChangesModal_ConfirmSaveChangesModal,
      {
        onSaveChanges: handleSaveQuery(),
        isUpdating: isQueryUpdating,
        onClose: toggleConfirmSaveChangesModal,
        showChangedSQLCopy
      }
    ));
  };
  if (isStoredQueryLoading || isFetchingLabels) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  const noEditPermissions = isGlobalObserver && !isObserverPlus || // Global observer but not Observer+
  isObserverPlus && queryIdForEdit !== 0 || // Global observer+ on existing query
  isOnlyObserver && !isAnyTeamObserverPlus && !isGlobalObserver || // Only team observer but not team Observer+
  isAnyTeamObserverPlus && // Team Observer+ on existing query
  !isAnyTeamMaintainerOrTeamAdmin && queryIdForEdit !== 0;
  if (noEditPermissions) {
    return renderNonEditableForm;
  }
  return renderEditableQueryForm();
};
/* harmony default export */ var EditQueryForm_EditQueryForm = (EditQueryForm);

;// ./frontend/pages/queries/edit/components/EditQueryForm/index.ts



;// ./frontend/pages/queries/edit/EditQueryPage.tsx

var EditQueryPage_async = (__this, __arguments, generator) => {
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
























const EditQueryPage_baseClass = "edit-query-page";
const EditQueryPage = ({
  router,
  params: { id: paramsQueryId },
  location
}) => {
  var _a, _b;
  const queryId = paramsQueryId ? parseInt(paramsQueryId, 10) : null;
  const hostId = location.query.host_id ? parseInt(location.query.host_id, 10) : void 0;
  const {
    currentTeamName: teamNameForQuery,
    teamIdForApi: apiTeamIdForQuery,
    currentTeamId
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: false
  });
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const queryClient = (0,es.useQueryClient)();
  const {
    isGlobalAdmin,
    isGlobalMaintainer,
    isTeamMaintainerOrTeamAdmin,
    isAnyTeamMaintainerOrTeamAdmin,
    isObserverPlus,
    isAnyTeamObserverPlus,
    config,
    filteredQueriesPath,
    isOnGlobalTeam
  } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    editingExistingQuery,
    selectedOsqueryTable,
    setSelectedOsqueryTable,
    lastEditedQueryName,
    lastEditedQueryDescription,
    lastEditedQueryBody,
    lastEditedQueryObserverCanRun,
    lastEditedQueryFrequency,
    lastEditedQueryAutomationsEnabled,
    lastEditedQueryPlatforms,
    lastEditedQueryLoggingType,
    lastEditedQueryMinOsqueryVersion,
    lastEditedQueryDiscardData,
    setLastEditedQueryId,
    setLastEditedQueryName,
    setLastEditedQueryDescription,
    setLastEditedQueryBody,
    setLastEditedQueryObserverCanRun,
    setLastEditedQueryFrequency,
    setLastEditedQueryAutomationsEnabled,
    setLastEditedQueryLoggingType,
    setLastEditedQueryMinOsqueryVersion,
    setLastEditedQueryPlatforms,
    setLastEditedQueryDiscardData
  } = (0,react.useContext)(query/* QueryContext */.c);
  const { setConfig, availableTeams, setCurrentTeam } = (0,react.useContext)(app/* AppContext */.BR);
  const [isLiveQueryRunnable, setIsLiveQueryRunnable] = (0,react.useState)(true);
  const [isSidebarOpen, setIsSidebarOpen] = (0,react.useState)(true);
  const [showOpenSchemaActionText, setShowOpenSchemaActionText] = (0,react.useState)(
    false
  );
  const [
    showConfirmSaveChangesModal,
    setShowConfirmSaveChangesModal
  ] = (0,react.useState)(false);
  const { data: appConfig } = (0,es.useQuery)(
    ["config"],
    () => entities_config/* default */.A.loadAll(),
    {
      select: (data) => data,
      onSuccess: (data) => {
        setConfig(data);
      }
    }
  );
  const {
    isLoading: isStoredQueryLoading,
    data: storedQuery,
    refetch: refetchStoredQuery
  } = (0,es.useQuery)(
    ["query", queryId],
    () => queries/* default */.A.load(queryId),
    {
      enabled: !!queryId && !editingExistingQuery,
      refetchOnWindowFocus: false,
      select: (data) => data.query,
      onSuccess: (returnedQuery) => {
        setLastEditedQueryId(returnedQuery.id);
        setLastEditedQueryName(returnedQuery.name);
        setLastEditedQueryDescription(returnedQuery.description);
        setLastEditedQueryBody(returnedQuery.query);
        setLastEditedQueryObserverCanRun(returnedQuery.observer_can_run);
        setLastEditedQueryFrequency(returnedQuery.interval);
        setLastEditedQueryAutomationsEnabled(returnedQuery.automations_enabled);
        setLastEditedQueryPlatforms(returnedQuery.platform);
        setLastEditedQueryLoggingType(returnedQuery.logging);
        setLastEditedQueryMinOsqueryVersion(returnedQuery.min_osquery_version);
        setLastEditedQueryDiscardData(returnedQuery.discard_data);
      },
      onError: (error) => handlePageError(error)
    }
  );
  if (!isOnGlobalTeam && !isStoredQueryLoading && (storedQuery == null ? void 0 : storedQuery.team_id) && !(((_a = storedQuery == null ? void 0 : storedQuery.team_id) == null ? void 0 : _a.toString()) === location.query.fleet_id)) {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(location.pathname, {
        fleet_id: (_b = storedQuery == null ? void 0 : storedQuery.team_id) == null ? void 0 : _b.toString(),
        host_id: hostId
      })
    );
  }
  (0,react.useEffect)(() => {
    if (storedQuery == null ? void 0 : storedQuery.team_id) {
      const querysTeam = availableTeams == null ? void 0 : availableTeams.find(
        (team) => team.id === storedQuery.team_id
      );
      setCurrentTeam(querysTeam);
    }
  }, [storedQuery]);
  const detectIsFleetQueryRunnable = () => {
    entities_status/* default */.A.live_query().catch(() => {
      setIsLiveQueryRunnable(false);
    });
  };
  (0,react.useEffect)(() => {
    const canEditExistingQuery = isGlobalAdmin || isGlobalMaintainer || isTeamMaintainerOrTeamAdmin && (storedQuery == null ? void 0 : storedQuery.team_id);
    if (!isStoredQueryLoading && // Confirms teamId for storedQuery before RBAC reroute
    queryId && queryId > 0 && !canEditExistingQuery) {
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.REPORT_DETAILS(queryId), {
          host_id: location.query.host_id,
          fleet_id: location.query.fleet_id
        })
      );
    }
  }, [queryId, isTeamMaintainerOrTeamAdmin, isStoredQueryLoading]);
  (0,react.useEffect)(() => {
    detectIsFleetQueryRunnable();
    if (!queryId) {
      setLastEditedQueryId(constants/* DEFAULT_QUERY */.Xl.id);
      setLastEditedQueryName(constants/* DEFAULT_QUERY */.Xl.name);
      setLastEditedQueryDescription(constants/* DEFAULT_QUERY */.Xl.description);
      setLastEditedQueryObserverCanRun(constants/* DEFAULT_QUERY */.Xl.observer_can_run);
      setLastEditedQueryFrequency(constants/* DEFAULT_QUERY */.Xl.interval);
      setLastEditedQueryAutomationsEnabled(constants/* DEFAULT_QUERY */.Xl.automations_enabled);
      setLastEditedQueryLoggingType(constants/* DEFAULT_QUERY */.Xl.logging);
      setLastEditedQueryMinOsqueryVersion(constants/* DEFAULT_QUERY */.Xl.min_osquery_version);
      setLastEditedQueryPlatforms(constants/* DEFAULT_QUERY */.Xl.platform);
      setLastEditedQueryDiscardData(constants/* DEFAULT_QUERY */.Xl.discard_data);
    }
  }, [queryId]);
  const [isQuerySaving, setIsQuerySaving] = (0,react.useState)(false);
  const [isQueryUpdating, setIsQueryUpdating] = (0,react.useState)(false);
  const [backendValidators, setBackendValidators] = (0,react.useState)({});
  (0,react.useEffect)(() => {
    const storedQueryTitleCopy = (storedQuery == null ? void 0 : storedQuery.name) ? `Editing ${storedQuery.name} | ` : "";
    document.title = `${storedQueryTitleCopy}Reports | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
  }, [location.pathname, storedQuery == null ? void 0 : storedQuery.name]);
  (0,react.useEffect)(() => {
    setShowOpenSchemaActionText(!isSidebarOpen);
  }, [isSidebarOpen]);
  const onSubmitNewQuery = (0,debounce/* default */.A)((formData) => EditQueryPage_async(null, null, function* () {
    setIsQuerySaving(true);
    try {
      const { query } = yield queries/* default */.A.create(formData);
      queryClient.invalidateQueries({ queryKey: [{ scope: "queries" }] });
      ToastNotification/* notify */.me.success("Report created.");
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.REPORT_DETAILS(query.id), {
          fleet_id: query.team_id,
          host_id: hostId
        })
      );
      setBackendValidators({});
    } catch (createError) {
      if ((0,interfaces_errors/* getErrorReason */.F3)(createError).includes("already exists")) {
        const teamErrorText = teamNameForQuery && apiTeamIdForQuery !== 0 ? `the ${teamNameForQuery} fleet` : "all fleets";
        setBackendValidators({
          name: `A report with that name already exists for ${teamErrorText}.`
        });
      } else {
        ToastNotification/* notify */.me.error(
          "Something went wrong creating your report. Please try again.",
          { response: createError }
        );
        setBackendValidators({});
      }
    } finally {
      setIsQuerySaving(false);
    }
  }));
  const onUpdateQuery = (formData) => EditQueryPage_async(null, null, function* () {
    if (!queryId) {
      return false;
    }
    setIsQueryUpdating(true);
    const updatedQuery = (0,deep_difference/* default */.A)(formData, {
      lastEditedQueryName,
      lastEditedQueryDescription,
      lastEditedQueryBody,
      lastEditedQueryObserverCanRun,
      lastEditedQueryFrequency,
      lastEditedQueryAutomationsEnabled,
      lastEditedQueryPlatforms,
      lastEditedQueryLoggingType,
      lastEditedQueryMinOsqueryVersion,
      lastEditedQueryDiscardData
    });
    try {
      yield queries/* default */.A.update(queryId, updatedQuery);
      queryClient.invalidateQueries({ queryKey: [{ scope: "queries" }] });
      ToastNotification/* notify */.me.success("Report updated.");
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.REPORT_DETAILS(queryId), {
          host_id: location.query.host_id,
          fleet_id: location.query.fleet_id
        })
      );
    } catch (updateError) {
      console.error(updateError);
      const reason = (0,interfaces_errors/* getErrorReason */.F3)(updateError);
      if (reason.includes("Duplicate")) {
        ToastNotification/* notify */.me.error("A report with this name already exists.", {
          response: updateError
        });
      } else if (reason.includes(constants/* INVALID_PLATFORMS_REASON */.ie)) {
        ToastNotification/* notify */.me.error(constants/* INVALID_PLATFORMS_FLASH_MESSAGE */.uV, {
          response: updateError
        });
      } else {
        ToastNotification/* notify */.me.error(
          "Something went wrong updating your report. Please try again.",
          { response: updateError }
        );
      }
    }
    setIsQueryUpdating(false);
    setShowConfirmSaveChangesModal(false);
    return false;
  });
  const onOsqueryTableSelect = (tableName) => {
    setSelectedOsqueryTable(tableName);
  };
  const onCloseSchemaSidebar = () => {
    setIsSidebarOpen(false);
  };
  const onOpenSchemaSidebar = () => {
    setIsSidebarOpen(true);
  };
  const renderLiveQueryWarning = () => {
    if (isLiveQueryRunnable || (config == null ? void 0 : config.server_settings.live_query_disabled)) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { color: "yellow" }, "Mesh is unable to run a live report. Refresh the page or log in again. If this keeps happening please", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://github.com/fleetdm/fleet/issues/new/choose",
        text: "file an issue",
        newTab: true,
        variant: "banner-link"
      }
    ));
  };
  const backPath = () => {
    if (queryId) {
      return (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.REPORT_DETAILS(queryId), {
        fleet_id: currentTeamId,
        host_id: hostId
      });
    }
    if (hostId) {
      return (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.HOST_DETAILS(hostId, currentTeamId));
    }
    if (filteredQueriesPath) return filteredQueriesPath;
    return (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_REPORTS, {
      fleet_id: currentTeamId
    });
  };
  const backButtonText = () => {
    if (queryId) {
      return "Back to report";
    }
    if (hostId) {
      return "Back to host details";
    }
    return "Back to reports";
  };
  const showSidebar = isSidebarOpen && (isGlobalAdmin || isGlobalMaintainer || isAnyTeamMaintainerOrTeamAdmin || isObserverPlus || isAnyTeamObserverPlus);
  return /* @__PURE__ */ react.createElement(SidePanelPage/* default */.A, null, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: EditQueryPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${EditQueryPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: backButtonText(), path: backPath() })), /* @__PURE__ */ react.createElement(
    EditQueryForm_EditQueryForm,
    {
      router,
      location,
      onSubmitNewQuery,
      onOsqueryTableSelect,
      onUpdate: onUpdateQuery,
      storedQuery,
      queryIdForEdit: queryId,
      apiTeamIdForQuery,
      currentTeamId,
      currentTeamName: teamNameForQuery,
      isStoredQueryLoading,
      showOpenSchemaActionText,
      onOpenSchemaSidebar,
      renderLiveQueryWarning,
      backendValidators,
      isQuerySaving,
      isQueryUpdating,
      hostId,
      queryReportsDisabled: appConfig == null ? void 0 : appConfig.server_settings.query_reports_disabled,
      showConfirmSaveChangesModal,
      setShowConfirmSaveChangesModal
    }
  ))), showSidebar && /* @__PURE__ */ react.createElement(SidePanelContent/* default */.A, null, /* @__PURE__ */ react.createElement(
    QuerySidePanel/* default */.A,
    {
      onOsqueryTableSelect,
      selectedOsqueryTable,
      onClose: onCloseSchemaSidebar
    }
  ))));
};
/* harmony default export */ var edit_EditQueryPage = (EditQueryPage);


/***/ }),

/***/ 81952:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ LiveQueryPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/LiveQuery/SelectTargets.tsx + 4 modules
var SelectTargets = __webpack_require__(6514);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/context/query.tsx
var query = __webpack_require__(83535);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./node_modules/sockjs-client/lib/entry.js
var entry = __webpack_require__(10162);
var entry_default = /*#__PURE__*/__webpack_require__.n(entry);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/services/entities/queries.ts
var queries = __webpack_require__(43788);
// EXTERNAL MODULE: ./frontend/utilities/auth_token/index.ts + 1 modules
var auth_token = __webpack_require__(47936);
// EXTERNAL MODULE: ./frontend/utilities/campaign_helpers/index.ts
var campaign_helpers = __webpack_require__(77803);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/debounce/index.ts
var debounce = __webpack_require__(14332);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./node_modules/use-debounce/dist/index.module.js
var index_module = __webpack_require__(81591);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/index.ts
var InfoBanner = __webpack_require__(38021);
// EXTERNAL MODULE: ./frontend/components/modals/ShowQueryModal/index.ts + 1 modules
var ShowQueryModal = __webpack_require__(67310);
// EXTERNAL MODULE: ./frontend/components/queries/LiveResults/AwaitingResults/index.ts + 1 modules
var AwaitingResults = __webpack_require__(49915);
// EXTERNAL MODULE: ./frontend/components/queries/LiveResults/LiveResultsHeading/index.ts + 1 modules
var LiveResultsHeading = __webpack_require__(5534);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/utilities/generate_csv/index.ts + 1 modules
var generate_csv = __webpack_require__(37706);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/DefaultColumnFilter/index.ts + 1 modules
var DefaultColumnFilter = __webpack_require__(19581);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
;// ./frontend/pages/queries/edit/components/QueryResults/QueryResultsTableConfig.tsx

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






const _unshiftHostname = (columns) => {
  const newHeaders = [...columns];
  const displayNameIndex = columns.findIndex(
    (h) => h.id === "host_display_name"
  );
  if (displayNameIndex >= 0) {
    const [displayNameHeader] = newHeaders.splice(displayNameIndex, 1);
    newHeaders.unshift(__spreadProps(__spreadValues({}, displayNameHeader), { id: "Host" }));
  }
  const hostNameIndex = columns.findIndex((h) => h.id === "host_hostname");
  if (hostNameIndex >= 0) {
    newHeaders.splice(hostNameIndex, 1);
  }
  return newHeaders;
};
const generateColumnConfigsFromRows = (results) => {
  const colsAreNumTypes = (0,helpers/* getUniqueColsAreNumTypeFromRows */.cv)(results);
  colsAreNumTypes.delete("host_id");
  const columnConfigs = Array.from(colsAreNumTypes.keys()).map(
    (colName) => {
      return {
        id: colName,
        Header: (headerProps) => /* @__PURE__ */ react.createElement(
          HeaderCell/* default */.A,
          {
            value: headerProps.column.id,
            isSortedDesc: headerProps.column.isSortedDesc
          }
        ),
        // generic for convenience, can assume keyof T is a string
        accessor: (data) => data[colName],
        Cell: (cellProps) => {
          var _a, _b, _c;
          if (((_b = (_a = cellProps == null ? void 0 : cellProps.cell) == null ? void 0 : _a.column) == null ? void 0 : _b.id) === "Host") {
            const hostID = cellProps.row.original.host_id;
            return /* @__PURE__ */ react.createElement(
              LinkCell/* default */.A,
              {
                value: cellProps.cell.value,
                path: paths/* default */.A.HOST_DETAILS(hostID)
              }
            );
          }
          const val = (_c = cellProps == null ? void 0 : cellProps.cell) == null ? void 0 : _c.value;
          return !!(val == null ? void 0 : val.length) && val.length > 300 ? (0,helpers/* internallyTruncateText */.sq)(val) : val != null ? val : null;
        },
        Filter: DefaultColumnFilter/* default */.A,
        disableSortBy: false,
        sortType: colsAreNumTypes.get(colName) ? "alphanumeric" : "caseInsensitive"
      };
    }
  );
  return _unshiftHostname(columnConfigs);
};
/* harmony default export */ var QueryResultsTableConfig = (generateColumnConfigsFromRows);

;// ./frontend/pages/queries/edit/components/QueryResults/QueryResults.tsx





















const baseClass = "query-results";
const CSV_TITLE = "New Report";
const NAV_TITLES = {
  RESULTS: "Results",
  ERRORS: "Errors"
};
const QueryResults = ({
  campaign,
  isQueryFinished,
  isQueryClipped,
  queryName,
  onRunQuery,
  onStopQuery,
  setSelectedTargets,
  goToQueryEditor,
  targetsTotalCount
}) => {
  const { lastEditedQueryBody } = (0,react.useContext)(query/* QueryContext */.c);
  const { uiHostCounts, serverHostCounts, queryResults, errors } = campaign || {};
  const [navTabIndex, setNavTabIndex] = (0,react.useState)(0);
  const [showQueryModal, setShowQueryModal] = (0,react.useState)(false);
  const [filteredResults, setFilteredResults] = (0,react.useState)([]);
  const [filteredErrors, setFilteredErrors] = (0,react.useState)([]);
  const [resultsColumnConfigs, setResultsColumnConfigs] = (0,react.useState)(
    []
  );
  const [errorColumnConfigs, setErrorColumnConfigs] = (0,react.useState)([]);
  const [queryResultsForTableRender, setQueryResultsForTableRender] = (0,react.useState)(
    queryResults
  );
  const onRunAgain = (0,react.useCallback)(() => {
    setQueryResultsForTableRender([]);
    onRunQuery();
  }, [onRunQuery]);
  const debounceQueryResults = (0,index_module/* useDebouncedCallback */.YQ)(
    setQueryResultsForTableRender,
    1e3,
    { maxWait: 2e3 }
  );
  (0,react.useEffect)(() => {
    debounceQueryResults(queryResults);
  }, [queryResults, debounceQueryResults]);
  (0,react.useEffect)(() => {
    if (queryResults && queryResults.length > 0) {
      const newResultsColumnConfigs = QueryResultsTableConfig(
        queryResults
      );
      if (newResultsColumnConfigs !== resultsColumnConfigs) {
        setResultsColumnConfigs(newResultsColumnConfigs);
      }
    }
  }, [queryResults, lastEditedQueryBody]);
  (0,react.useEffect)(() => {
    if ((errorColumnConfigs == null ? void 0 : errorColumnConfigs.length) === 0 && !!(errors == null ? void 0 : errors.length)) {
      setErrorColumnConfigs(QueryResultsTableConfig(errors));
      if (errorColumnConfigs && errorColumnConfigs.length > 0) {
        const newErrorColumnConfigs = QueryResultsTableConfig(errors);
        if (newErrorColumnConfigs !== resultsColumnConfigs) {
          setErrorColumnConfigs(newErrorColumnConfigs);
        }
      }
    }
  }, [errors]);
  const onExportQueryResults = (evt) => {
    evt.preventDefault();
    FileSaver_default().saveAs(
      (0,generate_csv/* generateCSVQueryResults */.K4)(
        filteredResults,
        (0,generate_csv/* generateCSVFilename */.$e)(`${queryName || CSV_TITLE} - Results`),
        resultsColumnConfigs
      )
    );
  };
  const onExportErrorsResults = (evt) => {
    evt.preventDefault();
    FileSaver_default().saveAs(
      (0,generate_csv/* generateCSVQueryResults */.K4)(
        filteredErrors,
        (0,generate_csv/* generateCSVFilename */.$e)(`${queryName || CSV_TITLE} - Errors`),
        errorColumnConfigs
      )
    );
  };
  const onShowQueryModal = () => {
    setShowQueryModal(!showQueryModal);
  };
  const onQueryDone = () => {
    setSelectedTargets([]);
    goToQueryEditor();
  };
  const renderNoResults = () => {
    const hostVerb = targetsTotalCount === 1 ? "host is" : "hosts are";
    const errorsMessage = (errors == null ? void 0 : errors.length) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "or review the ", /* @__PURE__ */ react.createElement("strong", null, "Errors"), " tab for details") : null;
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        header: "No results returned",
        info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Check whether the ", hostVerb, " online", errorsMessage, ".")
      }
    );
  };
  const renderCount = (0,react.useCallback)(
    (tableType) => {
      const count = tableType === "results" ? filteredResults.length : filteredErrors.length;
      return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: tableType, count });
    },
    [filteredResults.length, filteredErrors.length]
  );
  const renderTableButtons = (tableType) => {
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__results-cta` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${baseClass}__show-query-btn`,
        onClick: onShowQueryModal,
        variant: "secondary",
        icon: "eye",
        iconPosition: "right"
      },
      "Show query"
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${baseClass}__export-btn`,
        onClick: tableType === "errors" ? onExportErrorsResults : onExportQueryResults,
        variant: "secondary",
        icon: "download",
        iconPosition: "right"
      },
      "Export ",
      tableType
    ));
  };
  const renderTable = (tableData, tableType) => {
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__results-table-container` }, /* @__PURE__ */ react.createElement(
      TableContainer/* default */.A,
      {
        defaultSortHeader: "host_display_name",
        columnConfigs: tableType === "results" ? resultsColumnConfigs : errorColumnConfigs,
        data: tableData || [],
        emptyComponent: renderNoResults,
        isLoading: false,
        isClientSidePagination: true,
        isClientSideFilter: true,
        isMultiColumnFilter: true,
        showMarkAllPages: false,
        isAllPagesSelected: false,
        resultsTitle: tableType,
        customControl: () => renderTableButtons(tableType),
        setExportRows: tableType === "results" ? setFilteredResults : setFilteredErrors,
        renderCount: () => renderCount(tableType),
        getRowId: (_row, index) => String(index)
      }
    ));
  };
  const renderResultsTab = () => {
    const hasNoResultsYet = !isQueryFinished && (!(queryResults == null ? void 0 : queryResults.length) || resultsColumnConfigs === null);
    const finishedWithNoResults = isQueryFinished && !(queryResults == null ? void 0 : queryResults.length);
    if (hasNoResultsYet) {
      return /* @__PURE__ */ react.createElement(AwaitingResults/* default */.A, null);
    }
    if (finishedWithNoResults) {
      return renderNoResults();
    }
    return renderTable(queryResultsForTableRender, "results");
  };
  const renderErrorsTab = () => renderTable(errors, "errors");
  const firstTabClass = classnames_default()("react-tabs__tab", "no-count", {
    "errors-empty": !errors || (errors == null ? void 0 : errors.length) === 0
  });
  return (
    // `notranslate`: Chrome's auto-translate wraps text nodes in <font> elements,
    // detaching nodes React holds refs to. As live results stream in and cells
    // unmount, React's removeChild throws NotFoundError and error-boundaries the
    // page (#48277). Excluding this streaming subtree from translation avoids it.
    /* @__PURE__ */ react.createElement("div", { className: `${baseClass} notranslate` }, /* @__PURE__ */ react.createElement(
      LiveResultsHeading/* default */.A,
      {
        numHostsTargeted: targetsTotalCount,
        numHostsResponded: uiHostCounts.total,
        numHostsRespondedResults: serverHostCounts.countOfHostsWithResults,
        numHostsRespondedNoErrorsAndNoResults: serverHostCounts.countOfHostsWithNoResults,
        numHostsRespondedErrors: uiHostCounts.failed,
        isFinished: isQueryFinished,
        onClickClose: onQueryDone,
        onClickRunAgain: onRunAgain,
        onClickStop: onStopQuery
      }
    ), isQueryClipped && /* @__PURE__ */ react.createElement(
      InfoBanner/* default */.A,
      {
        color: "yellow",
        cta: /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: constants/* SUPPORT_LINK */.FI, text: "Get help", newTab: true })
      },
      /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("b", null, "Results clipped."), " A sample of this report's results and errors is included below. Please target fewer hosts at once to build a full set of results.")
    ), /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: navTabIndex, onSelect: (i) => setNavTabIndex(i) }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { className: firstTabClass }, NAV_TITLES.RESULTS), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { disabled: !(errors == null ? void 0 : errors.length) }, /* @__PURE__ */ react.createElement(TabText/* default */.A, { count: errors == null ? void 0 : errors.length, countVariant: "alert" }, NAV_TITLES.ERRORS))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderResultsTab()), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderErrorsTab()))), showQueryModal && /* @__PURE__ */ react.createElement(
      ShowQueryModal/* default */.A,
      {
        query: lastEditedQueryBody,
        onCancel: onShowQueryModal
      }
    ))
  );
};
/* harmony default export */ var QueryResults_QueryResults = (QueryResults);

;// ./frontend/pages/queries/edit/components/QueryResults/index.ts



;// ./frontend/pages/queries/live/screens/RunQuery.tsx

var RunQuery_defProp = Object.defineProperty;
var RunQuery_defProps = Object.defineProperties;
var RunQuery_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var RunQuery_getOwnPropSymbols = Object.getOwnPropertySymbols;
var RunQuery_hasOwnProp = Object.prototype.hasOwnProperty;
var RunQuery_propIsEnum = Object.prototype.propertyIsEnumerable;
var RunQuery_defNormalProp = (obj, key, value) => key in obj ? RunQuery_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var RunQuery_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (RunQuery_hasOwnProp.call(b, prop))
      RunQuery_defNormalProp(a, prop, b[prop]);
  if (RunQuery_getOwnPropSymbols)
    for (var prop of RunQuery_getOwnPropSymbols(b)) {
      if (RunQuery_propIsEnum.call(b, prop))
        RunQuery_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var RunQuery_spreadProps = (a, b) => RunQuery_defProps(a, RunQuery_getOwnPropDescs(b));
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











const RESPONSE_COUNT_ZERO = { results: 0, errors: 0 };
const CAMPAIGN_LIMIT = 25e4;
const RunQuery = ({
  storedQuery,
  selectedTargets,
  queryId,
  setSelectedTargets,
  goToQueryEditor,
  targetsTotalCount
}) => {
  const { lastEditedQueryBody } = (0,react.useContext)(query/* QueryContext */.c);
  const [isQueryFinished, setIsQueryFinished] = (0,react.useState)(false);
  const [isQueryClipped, setIsQueryClipped] = (0,react.useState)(false);
  const [campaignState, setCampaignState] = (0,react.useState)(
    constants/* DEFAULT_CAMPAIGN_STATE */.LY
  );
  const isStoredQueryEdited = (storedQuery == null ? void 0 : storedQuery.query) !== lastEditedQueryBody;
  const ws = (0,react.useRef)(null);
  const runQueryInterval = (0,react.useRef)(null);
  const globalSocket = (0,react.useRef)(null);
  const previousSocketData = (0,react.useRef)(null);
  const responseCount = (0,react.useRef)(RunQuery_spreadValues({}, RESPONSE_COUNT_ZERO));
  const removeSocket = () => {
    if (globalSocket.current) {
      globalSocket.current.close();
      globalSocket.current = null;
      previousSocketData.current = null;
      responseCount.current = RESPONSE_COUNT_ZERO;
    }
  };
  const setupDistributedQuery = (socket) => {
    globalSocket.current = socket;
    const update = () => {
      setCampaignState((prevCampaignState) => RunQuery_spreadProps(RunQuery_spreadValues({}, prevCampaignState), {
        runQueryMilliseconds: prevCampaignState.runQueryMilliseconds + 1e3
      }));
    };
    if (!runQueryInterval.current) {
      runQueryInterval.current = setInterval(update, 1e3);
    }
  };
  const teardownDistributedQuery = () => {
    if (runQueryInterval.current) {
      clearInterval(runQueryInterval.current);
      runQueryInterval.current = null;
    }
    setCampaignState((prevCampaignState) => RunQuery_spreadProps(RunQuery_spreadValues({}, prevCampaignState), {
      queryIsRunning: false,
      runQueryMilliseconds: 0
    }));
    setIsQueryFinished(true);
    removeSocket();
  };
  const destroyCampaign = () => {
    setCampaignState(constants/* DEFAULT_CAMPAIGN_STATE */.LY);
  };
  const connectAndRunLiveQuery = (returnedCampaign) => {
    let { current: websocket } = ws;
    websocket = new (entry_default())(`${constants/* BASE_URL */.C1}/v1/fleet/results`, void 0, {});
    websocket.onopen = () => {
      setupDistributedQuery(websocket);
      setCampaignState((prevCampaignState) => RunQuery_spreadProps(RunQuery_spreadValues({}, prevCampaignState), {
        campaign: RunQuery_spreadProps(RunQuery_spreadValues({}, prevCampaignState.campaign), { returnedCampaign }),
        queryIsRunning: true
      }));
      websocket == null ? void 0 : websocket.send(
        JSON.stringify({
          type: "auth",
          data: { token: auth_token/* default */.A.get() }
        })
      );
      websocket == null ? void 0 : websocket.send(
        JSON.stringify({
          type: "select_campaign",
          data: { campaign_id: returnedCampaign.id }
        })
      );
    };
    websocket.onmessage = ({ data }) => {
      var _a, _b, _c, _d;
      if (data === previousSocketData.current) {
        return;
      }
      previousSocketData.current = data;
      const socketData = JSON.parse(data);
      setCampaignState((prevCampaignState) => {
        return RunQuery_spreadValues(RunQuery_spreadValues({}, prevCampaignState), campaign_helpers/* default.updateCampaignState */.A.updateCampaignState(socketData)(prevCampaignState));
      });
      responseCount.current.results += (_c = (_b = (_a = socketData == null ? void 0 : socketData.data) == null ? void 0 : _a.rows) == null ? void 0 : _b.length) != null ? _c : 0;
      responseCount.current.errors += ((_d = socketData == null ? void 0 : socketData.data) == null ? void 0 : _d.error) ? 1 : 0;
      if (socketData.type === "status" && socketData.data.status === "finished") {
        return teardownDistributedQuery();
      }
      if (responseCount.current.results + responseCount.current.errors >= CAMPAIGN_LIMIT) {
        teardownDistributedQuery();
        setIsQueryClipped(true);
      }
    };
  };
  const onRunQuery = (0,debounce/* default */.A)(() => __async(null, null, function* () {
    if (!lastEditedQueryBody) {
      ToastNotification/* notify */.me.error(
        "Something went wrong running your report. Please try again."
      );
      return;
    }
    const selected = (0,helpers/* formatSelectedTargetsForApi */.yp)(selectedTargets);
    setIsQueryFinished(false);
    removeSocket();
    destroyCampaign();
    try {
      const returnedCampaign = yield queries/* default */.A.run({
        query: lastEditedQueryBody,
        queryId: isStoredQueryEdited ? null : queryId,
        // we treat edited SQL as a new query
        selected
      });
      connectAndRunLiveQuery(returnedCampaign);
    } catch (campaignError) {
      const err = String(campaignError);
      if (err.includes("no hosts targeted")) {
        ToastNotification/* notify */.me.error(
          "Your target selections did not include any hosts. Please try again.",
          { response: campaignError }
        );
      } else if (err.includes("resource already created")) {
        ToastNotification/* notify */.me.error(
          "A campaign with the provided query text has already been created",
          { response: campaignError }
        );
      } else if (err.includes("forbidden") || err.includes("unauthorized")) {
        ToastNotification/* notify */.me.error(
          "It seems you do not have the rights to run this report. If you believe this is an error, please contact your administrator.",
          { response: campaignError }
        );
      } else {
        ToastNotification/* notify */.me.error("Something has gone wrong. Please try again.", {
          response: campaignError
        });
      }
      return teardownDistributedQuery();
    }
  }));
  const onStopQuery = (evt) => {
    evt.preventDefault();
    return teardownDistributedQuery();
  };
  (0,react.useEffect)(() => {
    onRunQuery();
  }, []);
  const { campaign } = campaignState;
  return /* @__PURE__ */ react.createElement(
    QueryResults_QueryResults,
    {
      campaign,
      onRunQuery,
      onStopQuery,
      isQueryFinished,
      isQueryClipped,
      setSelectedTargets,
      goToQueryEditor,
      queryName: storedQuery == null ? void 0 : storedQuery.name,
      targetsTotalCount
    }
  );
};
/* harmony default export */ var screens_RunQuery = (RunQuery);

// EXTERNAL MODULE: ./frontend/services/entities/hosts.ts
var hosts = __webpack_require__(42235);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/pages/queries/live/LiveQueryPage/LiveQueryPage.tsx

var LiveQueryPage_defProp = Object.defineProperty;
var LiveQueryPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var LiveQueryPage_hasOwnProp = Object.prototype.hasOwnProperty;
var LiveQueryPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var LiveQueryPage_defNormalProp = (obj, key, value) => key in obj ? LiveQueryPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var LiveQueryPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (LiveQueryPage_hasOwnProp.call(b, prop))
      LiveQueryPage_defNormalProp(a, prop, b[prop]);
  if (LiveQueryPage_getOwnPropSymbols)
    for (var prop of LiveQueryPage_getOwnPropSymbols(b)) {
      if (LiveQueryPage_propIsEnum.call(b, prop))
        LiveQueryPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};














const LiveQueryPage_baseClass = "run-query-page";
const RunQueryPage = ({
  router,
  params: { id: paramsQueryId },
  location
}) => {
  const queryId = paramsQueryId ? parseInt(paramsQueryId, 10) : null;
  const { currentTeamId } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: false
  });
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    editingExistingQuery,
    selectedQueryTargets,
    setSelectedQueryTargets,
    selectedQueryTargetsByType,
    setSelectedQueryTargetsByType,
    setLastEditedQueryId,
    setLastEditedQueryName,
    setLastEditedQueryDescription,
    setLastEditedQueryBody,
    setLastEditedQueryObserverCanRun,
    setLastEditedQueryFrequency,
    setLastEditedQueryLoggingType,
    setLastEditedQueryMinOsqueryVersion,
    setLastEditedQueryPlatforms
  } = (0,react.useContext)(query/* QueryContext */.c);
  const [queryParamHostsAdded, setQueryParamHostsAdded] = (0,react.useState)(false);
  const [step, setStep] = (0,react.useState)(constants/* LIVE_QUERY_STEPS */.oV[1]);
  const [targetedHosts, setTargetedHosts] = (0,react.useState)(
    selectedQueryTargetsByType.hosts
  );
  const [targetedLabels, setTargetedLabels] = (0,react.useState)(
    selectedQueryTargetsByType.labels
  );
  const [targetedTeams, setTargetedTeams] = (0,react.useState)(
    selectedQueryTargetsByType.teams
  );
  const [targetsTotalCount, setTargetsTotalCount] = (0,react.useState)(0);
  const disabledLiveQuery = config == null ? void 0 : config.server_settings.live_query_disabled;
  if (disabledLiveQuery) {
    const path = queryId ? paths/* default */.A.REPORT_DETAILS(queryId) : paths/* default */.A.NEW_REPORT;
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(path, {
        fleet_id: currentTeamId
      })
    );
  }
  const { data: storedQuery } = (0,es.useQuery)(["query", queryId], () => queries/* default */.A.load(queryId), {
    enabled: !!queryId && !editingExistingQuery,
    refetchOnWindowFocus: false,
    select: (data) => data.query,
    onSuccess: (returnedQuery) => {
      setLastEditedQueryId(returnedQuery.id);
      setLastEditedQueryName(returnedQuery.name);
      setLastEditedQueryDescription(returnedQuery.description);
      setLastEditedQueryBody(returnedQuery.query);
      setLastEditedQueryObserverCanRun(returnedQuery.observer_can_run);
      setLastEditedQueryFrequency(returnedQuery.interval);
      setLastEditedQueryPlatforms(returnedQuery.platform);
      setLastEditedQueryLoggingType(returnedQuery.logging);
      setLastEditedQueryMinOsqueryVersion(returnedQuery.min_osquery_version);
    },
    onError: (error) => handlePageError(error)
  });
  (0,es.useQuery)(
    "hostFromURL",
    () => hosts/* default */.A.loadHostDetails(parseInt(location.query.host_id, 10)),
    {
      enabled: !!location.query.host_id && !queryParamHostsAdded,
      select: (data) => data.host,
      onSuccess: (host) => {
        setTargetedHosts(
          (prevHosts) => prevHosts.filter((h) => h.id !== host.id).concat(host)
        );
        const targets = selectedQueryTargets;
        host.target_type = "hosts";
        targets.push(host);
        setSelectedQueryTargets([...targets]);
        if (!queryParamHostsAdded) {
          setQueryParamHostsAdded(true);
        }
        router.replace(location.pathname);
      }
    }
  );
  (0,react.useEffect)(() => {
    setSelectedQueryTargetsByType({
      hosts: targetedHosts,
      labels: targetedLabels,
      teams: targetedTeams
    });
  }, [targetedLabels, targetedHosts, targetedTeams]);
  (0,react.useEffect)(() => {
    if (storedQuery == null ? void 0 : storedQuery.name) {
      document.title = `Run ${storedQuery.name} | Reports | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    } else {
      document.title = `Reports | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    }
  }, [location.pathname, storedQuery == null ? void 0 : storedQuery.name]);
  const goToQueryEditor = (0,react.useCallback)(() => {
    const path = queryId ? paths/* default */.A.EDIT_REPORT(queryId) : paths/* default */.A.NEW_REPORT;
    router.push((0,url/* getPathWithQueryParams */.M8)(path, { fleet_id: currentTeamId }));
  }, []);
  const renderScreen = () => {
    var _a;
    const step1Props = {
      baseClass: LiveQueryPage_baseClass,
      queryId,
      selectedTargets: selectedQueryTargets,
      targetedHosts,
      targetedLabels,
      targetedTeams,
      targetsTotalCount,
      goToQueryEditor,
      goToRunQuery: () => setStep(constants/* LIVE_QUERY_STEPS */.oV[2]),
      setSelectedTargets: setSelectedQueryTargets,
      setTargetedHosts,
      setTargetedLabels,
      setTargetedTeams,
      setTargetsTotalCount,
      isObserverCanRunQuery: storedQuery == null ? void 0 : storedQuery.observer_can_run,
      queryTeamId: (_a = storedQuery == null ? void 0 : storedQuery.team_id) != null ? _a : null
    };
    const step2Props = {
      queryId,
      selectedTargets: selectedQueryTargets,
      storedQuery,
      setSelectedTargets: setSelectedQueryTargets,
      goToQueryEditor,
      targetsTotalCount
    };
    switch (step) {
      case constants/* LIVE_QUERY_STEPS */.oV[2]:
        return /* @__PURE__ */ react.createElement(screens_RunQuery, LiveQueryPage_spreadValues({}, step2Props));
      default:
        return /* @__PURE__ */ react.createElement(SelectTargets/* default */.A, LiveQueryPage_spreadValues({}, step1Props));
    }
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: LiveQueryPage_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${LiveQueryPage_baseClass}_wrapper` }, renderScreen()));
};
/* harmony default export */ var LiveQueryPage = (RunQueryPage);

;// ./frontend/pages/queries/live/LiveQueryPage/index.ts




/***/ })

}]);