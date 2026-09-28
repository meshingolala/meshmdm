"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[675],{

/***/ 28390:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ EditPackPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/SelectTargetsDropdown/index.js + 14 modules
var SelectTargetsDropdown = __webpack_require__(56815);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
;// ./frontend/utilities/simple_search/simple_search.ts


const simpleSearch = (searchQuery = "", dictionary) => {
  const lowerSearchQuery = searchQuery.toLowerCase();
  const filterResults = (0,lodash.filter)(dictionary, (item) => {
    if (!item.name) {
      return false;
    }
    const lowerItemName = item.name.toLowerCase();
    return (0,lodash.includes)(lowerItemName, lowerSearchQuery);
  });
  return filterResults;
};
/* harmony default export */ var simple_search = (simpleSearch);

;// ./frontend/utilities/simple_search/index.ts



// EXTERNAL MODULE: ./frontend/components/ActionsDropdown/index.ts + 1 modules
var ActionsDropdown = __webpack_require__(19);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/PerformanceImpactCell/index.ts + 1 modules
var PerformanceImpactCell = __webpack_require__(5205);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
;// ./frontend/components/queries/PackQueriesTable/PackQueriesTable/PackQueriesTableConfig.tsx

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









const generateTableHeaders = (actionSelectHandler) => {
  return [
    {
      id: "selection",
      Header: (cellProps) => {
        const props = cellProps.getToggleAllRowsSelectedProps();
        const checkboxProps = {
          value: props.checked,
          indeterminate: props.indeterminate,
          onChange: () => cellProps.toggleAllRowsSelected()
        };
        return /* @__PURE__ */ react.createElement(Checkbox/* default */.A, __spreadProps(__spreadValues({}, checkboxProps), { enableEnterToCheck: true }));
      },
      Cell: (cellProps) => {
        const props = cellProps.row.getToggleRowSelectedProps();
        const checkboxProps = {
          value: props.checked,
          onChange: () => cellProps.row.toggleRowSelected()
        };
        return /* @__PURE__ */ react.createElement(Checkbox/* default */.A, __spreadProps(__spreadValues({}, checkboxProps), { enableEnterToCheck: true }));
      },
      disableHidden: true
    },
    {
      title: "Query",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Frequency",
      Header: "Frequency",
      disableSortBy: false,
      accessor: "interval",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        TextCell/* default */.A,
        {
          formatter: (val) => (0,helpers/* secondsToDhms */.xR)(val),
          value: cellProps.cell.value
        }
      )
    },
    {
      title: "Platform",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "platform_string",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Logging",
      Header: "Logging",
      disableSortBy: false,
      accessor: "logging_string",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      Header: () => {
        return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "This is the average performance", /* @__PURE__ */ react.createElement("br", null), "impact across all hosts where", /* @__PURE__ */ react.createElement("br", null), "this query was scheduled.")
          },
          "Performance impact"
        ));
      },
      disableSortBy: true,
      accessor: "performance",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(PerformanceImpactCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        ActionsDropdown/* default */.A,
        {
          options: cellProps.cell.value,
          onChange: (value) => actionSelectHandler(value, cellProps.row.original),
          placeholder: "Actions",
          variant: "secondary"
        }
      )
    }
  ];
};
const generateLoggingTypeString = (snapshot, removed) => {
  if (snapshot) {
    return "Snapshot";
  }
  if (removed !== false) {
    return "Differential";
  }
  return "Differential (ignore removal)";
};
const generatePlatformTypeString = (platforms) => {
  const ALL_PLATFORMS = [
    { text: "All", value: "all" },
    { text: "Windows", value: "windows" },
    { text: "Linux", value: "linux" },
    { text: "macOS", value: "darwin" }
  ];
  if (platforms) {
    const platformsArray = platforms.split(",");
    const textArray = platformsArray.map((platform) => {
      const trimmedPlatform = platform.trim();
      const platformObject = (0,lodash.find)(ALL_PLATFORMS, { value: trimmedPlatform });
      const text = platformObject ? platformObject.text : trimmedPlatform;
      return text;
    });
    const displayText = textArray.join(", ");
    return displayText;
  }
  return "All";
};
const generateVersionString = (version) => {
  if (version) {
    return version;
  }
  return "Any";
};
const generateActionDropdownOptions = () => {
  const dropdownOptions = [
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
  return dropdownOptions;
};
const enhancePackQueriesData = (packQueries) => {
  return packQueries.map((query) => {
    var _a, _b, _c;
    const scheduledQueryPerformance = {
      user_time_p50: (_a = query.stats) == null ? void 0 : _a.user_time_p50,
      system_time_p50: (_b = query.stats) == null ? void 0 : _b.system_time_p50,
      total_executions: (_c = query.stats) == null ? void 0 : _c.total_executions
    };
    return {
      id: query.id,
      name: query.query_name,
      interval: query.interval,
      pack_id: query.pack_id,
      platform: query.platform || void 0,
      query: query.query,
      query_id: query.query_id,
      removed: query.removed,
      snapshot: query.snapshot,
      logging_string: generateLoggingTypeString(query.snapshot, query.removed),
      platform_string: generatePlatformTypeString(query.platform),
      shard: query.shard,
      version: query.version,
      versionString: generateVersionString(query.version),
      created_at: query.created_at,
      updated_at: query.updated_at,
      query_name: query.query_name,
      actions: generateActionDropdownOptions(),
      performance: [
        (0,helpers/* getPerformanceImpactDescription */.Hv)(scheduledQueryPerformance),
        query.query_id
      ],
      stats: query.stats
    };
  });
};
const generateDataSet = (queries) => {
  if (!queries) {
    return queries;
  }
  return [...enhancePackQueriesData(queries)];
};


;// ./frontend/components/queries/PackQueriesTable/PackQueriesTable.tsx







const baseClass = "pack-queries-table";
const PackQueriesTable = ({
  onAddPackQuery,
  onEditPackQuery,
  onRemovePackQueries,
  scheduledQueries,
  isLoadingPackQueries
}) => {
  const [querySearchText, setQuerySearchText] = (0,react.useState)("");
  const onTableQueryChange = (queryData) => {
    const { searchQuery, sortHeader, sortDirection } = queryData;
    let sortBy = [];
    if (sortHeader !== "") {
      sortBy = [{ id: sortHeader, direction: sortDirection }];
    }
    if (!searchQuery) {
      setQuerySearchText("");
      return;
    }
    setQuerySearchText(searchQuery);
  };
  const getQueries = () => {
    return simple_search(querySearchText, scheduledQueries);
  };
  const onActionSelection = (action, selectedQuery) => {
    switch (action) {
      case "edit":
        onEditPackQuery(selectedQuery);
        break;
      case "remove":
        onRemovePackQueries([selectedQuery.id]);
        break;
      default:
    }
  };
  const tableHeaders = generateTableHeaders(onActionSelection);
  const tableData = generateDataSet(getQueries());
  return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}` }, (scheduledQueries == null ? void 0 : scheduledQueries.length) ? /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableHeaders,
      data: tableData,
      isLoading: isLoadingPackQueries,
      defaultSortHeader: "name",
      defaultSortDirection: "asc",
      inputPlaceHolder: "Search queries",
      onQueryChange: onTableQueryChange,
      resultsTitle: "queries",
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No queries match your search criteria",
          info: "Try a different search."
        }
      ),
      showMarkAllPages: false,
      actionButton: {
        name: "add query",
        buttonText: "Add query",
        iconSvg: "plus",
        variant: "secondary",
        onClick: onAddPackQuery
      },
      primarySelectAction: {
        name: "remove query",
        buttonText: "Remove",
        iconSvg: "close",
        variant: "secondary",
        onClick: onRemovePackQueries
      },
      searchable: true,
      disablePagination: true,
      hideFooter: true,
      isAllPagesSelected: false
    }
  ) : /* @__PURE__ */ react.createElement(
    EmptyState/* default */.A,
    {
      header: "Your pack has no reports",
      primaryButton: /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          onClick: onAddPackQuery,
          variant: "secondary",
          icon: "plus",
          iconPosition: "right"
        },
        "Add report"
      )
    }
  ));
};
/* harmony default export */ var PackQueriesTable_PackQueriesTable = (PackQueriesTable);

;// ./frontend/components/queries/PackQueriesTable/index.ts



// EXTERNAL MODULE: ./frontend/hooks/useDeepEffect.ts
var useDeepEffect = __webpack_require__(98598);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/components/forms/packs/EditPackForm/EditPackForm.tsx

var EditPackForm_defProp = Object.defineProperty;
var EditPackForm_defProps = Object.defineProperties;
var EditPackForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditPackForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditPackForm_hasOwnProp = Object.prototype.hasOwnProperty;
var EditPackForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditPackForm_defNormalProp = (obj, key, value) => key in obj ? EditPackForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditPackForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditPackForm_hasOwnProp.call(b, prop))
      EditPackForm_defNormalProp(a, prop, b[prop]);
  if (EditPackForm_getOwnPropSymbols)
    for (var prop of EditPackForm_getOwnPropSymbols(b)) {
      if (EditPackForm_propIsEnum.call(b, prop))
        EditPackForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditPackForm_spreadProps = (a, b) => EditPackForm_defProps(a, EditPackForm_getOwnPropDescs(b));







const EditPackForm_baseClass = "edit-pack-form";
const EditPackForm = ({
  className,
  handleSubmit,
  onCancelEditPack,
  onFetchTargets,
  onAddPackQuery,
  onEditPackQuery,
  onRemovePackQueries,
  scheduledQueries,
  isLoadingPackQueries,
  targetsCount,
  isPremiumTier,
  formData,
  isUpdatingPack
}) => {
  const [errors, setErrors] = (0,react.useState)({});
  const [packName, setPackName] = (0,react.useState)(formData.name);
  const [packDescription, setPackDescription] = (0,react.useState)(formData.description);
  const [packFormTargets, setPackFormTargets] = (0,react.useState)(
    formData.targets
  );
  (0,useDeepEffect/* default */.A)(() => {
    if (formData.targets) {
      setPackFormTargets(formData.targets);
    }
  }, [formData]);
  const onChangePackName = (value) => {
    setPackName(value);
  };
  const onChangePackDescription = (value) => {
    setPackDescription(value);
  };
  const onChangePackTargets = (value) => {
    setPackFormTargets(value);
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (packName === "") {
      setErrors(EditPackForm_spreadProps(EditPackForm_spreadValues({}, errors), {
        name: "Pack name must be present"
      }));
      return;
    }
    handleSubmit({
      name: packName,
      description: packDescription,
      targets: [...packFormTargets]
    });
  };
  return /* @__PURE__ */ react.createElement(
    "form",
    {
      className: `${EditPackForm_baseClass} ${className}`,
      onSubmit: onFormSubmit,
      autoComplete: "off"
    },
    /* @__PURE__ */ react.createElement("h1", null, "Edit pack"),
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onChangePackName,
        value: packName,
        placeholder: "Name",
        label: "Name",
        name: "name",
        error: errors.name,
        inputWrapperClass: `${EditPackForm_baseClass}__pack-title`,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ),
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onChangePackDescription,
        value: packDescription,
        inputWrapperClass: `${EditPackForm_baseClass}__pack-description`,
        label: "Description",
        name: "description",
        placeholder: "Add a description of your pack",
        type: "textarea",
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ),
    /* @__PURE__ */ react.createElement(
      SelectTargetsDropdown/* default */.A,
      {
        label: "Select pack targets",
        name: "selected-pack-targets",
        onFetchTargets,
        onSelect: onChangePackTargets,
        selectedTargets: packFormTargets,
        targetsCount,
        isPremiumTier
      }
    ),
    /* @__PURE__ */ react.createElement(
      PackQueriesTable_PackQueriesTable,
      {
        onAddPackQuery,
        onEditPackQuery,
        onRemovePackQueries,
        scheduledQueries,
        isLoadingPackQueries
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: `${EditPackForm_baseClass}__pack-buttons` }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancelEditPack, type: "button", variant: "secondary" }, "Cancel"), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "submit",
        className: "save-loading",
        isLoading: isUpdatingPack
      },
      "Save"
    ))
  );
};
/* harmony default export */ var EditPackForm_EditPackForm = (EditPackForm);

;// ./frontend/components/forms/packs/EditPackForm/index.ts



// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/packs.ts
var packs = __webpack_require__(18630);
// EXTERNAL MODULE: ./frontend/services/entities/queries.ts
var entities_queries = __webpack_require__(43788);
// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/services/entities/scheduled_queries.ts




/* harmony default export */ var scheduled_queries = ({
  create: (packQueryFormData) => {
    const { SCHEDULE_QUERY } = endpoints/* default */.A;
    return (0,services/* default */.Ay)("POST", SCHEDULE_QUERY, packQueryFormData);
  },
  destroy: (packQueryId) => {
    const { SCHEDULE_QUERY } = endpoints/* default */.A;
    const path = `${SCHEDULE_QUERY}/${packQueryId}`;
    return (0,services/* default */.Ay)("DELETE", path);
  },
  loadAll: (packId) => {
    const { SCHEDULED_QUERIES } = endpoints/* default */.A;
    const path = SCHEDULED_QUERIES(packId);
    return (0,services/* default */.Ay)("GET", path);
  },
  update: (scheduledQuery, updatedAttributes) => {
    const { SCHEDULE_QUERY } = endpoints/* default */.A;
    const path = `${SCHEDULE_QUERY}/${scheduledQuery.id}`;
    const params = helpers/* default.formatScheduledQueryForServer */.Ay.formatScheduledQueryForServer(updatedAttributes);
    return (0,services/* default */.Ay)("PATCH", path, params);
  }
});

// EXTERNAL MODULE: ./frontend/utilities/deep_difference/index.ts
var deep_difference = __webpack_require__(65273);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/packs/EditPackPage/components/PackQueryEditorModal/PackQueryEditorModal.tsx








const PackQueryEditorModal_baseClass = "pack-query-editor-modal";
const generateLoggingType = (query) => {
  if (query.snapshot) {
    return "snapshot";
  }
  if (query.removed) {
    return "differential";
  }
  return "differential_ignore_removals";
};
const PackQueryEditorModal = ({
  onCancel,
  onPackQueryFormSubmit,
  allQueries,
  editQuery,
  packId,
  isUpdatingPack
}) => {
  const [selectedQuery, setSelectedQuery] = (0,react.useState)();
  const [selectedFrequency, setSelectedFrequency] = (0,react.useState)(
    (editQuery == null ? void 0 : editQuery.interval.toString()) || ""
  );
  const [errorFrequency, setErrorFrequency] = (0,react.useState)("");
  const [selectedPlatformOptions, setSelectedPlatformOptions] = (0,react.useState)(
    (editQuery == null ? void 0 : editQuery.platform) || ""
  );
  const [selectedLoggingType, setSelectedLoggingType] = (0,react.useState)(
    editQuery ? generateLoggingType(editQuery) : "snapshot"
  );
  const [selectedSnapshot, setSelectedSnapshot] = (0,react.useState)(
    selectedLoggingType === "snapshot"
  );
  const [selectedRemoved, setSelectedRemoved] = (0,react.useState)(
    selectedLoggingType === "differential"
  );
  const [
    selectedMinOsqueryVersionOptions,
    setSelectedMinOsqueryVersionOptions
  ] = (0,react.useState)((editQuery == null ? void 0 : editQuery.version) || "");
  const [selectedShard, setSelectedShard] = (0,react.useState)(
    (editQuery == null ? void 0 : editQuery.shard) ? editQuery == null ? void 0 : editQuery.shard.toString() : ""
  );
  const createQueryDropdownOptions = () => {
    const queryOptions = allQueries.map((q) => {
      return {
        value: String(q.id),
        label: q.name
      };
    });
    return queryOptions;
  };
  const onChangeSelectQuery = (queryId) => {
    const queryWithId = allQueries.find(
      (query) => query.id === parseInt(queryId, 10)
    );
    setSelectedQuery(queryWithId);
  };
  const onChangeFrequency = (value) => {
    if (errorFrequency) {
      setErrorFrequency("");
    }
    setSelectedFrequency(value);
  };
  const onChangeSelectPlatformOptions = (values) => {
    const valArray = values.split(",");
    if (valArray.indexOf("") === 0 && valArray.length > 1) {
      setSelectedPlatformOptions((0,lodash.pull)(valArray, "").join(","));
    } else if (valArray.length > 1 && valArray.indexOf("") > -1) {
      setSelectedPlatformOptions("");
    } else {
      setSelectedPlatformOptions(values);
    }
  };
  const onChangeSelectLoggingType = (value) => {
    setSelectedLoggingType(value);
    setSelectedRemoved(value === "differential");
    setSelectedSnapshot(value === "snapshot");
  };
  const onChangeMinOsqueryVersionOptions = (value) => {
    setSelectedMinOsqueryVersionOptions(value);
  };
  const onChangeShard = (value) => {
    setSelectedShard(value);
  };
  const onFormSubmit = () => {
    setErrorFrequency("");
    const query_id = () => {
      if (editQuery) {
        return editQuery.query_id;
      }
      return selectedQuery == null ? void 0 : selectedQuery.id;
    };
    const frequency = parseInt(selectedFrequency, 10);
    if (!frequency || frequency < 0) {
      setErrorFrequency("Frequency must be an integer greater than zero");
      return;
    }
    if (frequency > constants/* MAX_OSQUERY_SCHEDULED_QUERY_INTERVAL */.rf) {
      setErrorFrequency(
        "Frequency must be an integer that does not exceed 604,800 (i.e. 7 days)"
      );
      return;
    }
    onPackQueryFormSubmit(
      {
        interval: parseInt(selectedFrequency, 10),
        pack_id: packId,
        platform: selectedPlatformOptions,
        query_id: query_id(),
        // name: name(), // pretty sure unneeded
        removed: selectedRemoved,
        snapshot: selectedSnapshot,
        shard: parseInt(selectedShard, 10),
        version: selectedMinOsqueryVersionOptions
      },
      editQuery
    );
  };
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: (editQuery == null ? void 0 : editQuery.name) || "Add query",
      onExit: onCancel,
      className: PackQueryEditorModal_baseClass
    },
    /* @__PURE__ */ react.createElement("form", { className: `${PackQueryEditorModal_baseClass}__form` }, !editQuery && /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        searchable: true,
        options: createQueryDropdownOptions(),
        onChange: onChangeSelectQuery,
        placeholder: "Select query",
        value: selectedQuery == null ? void 0 : selectedQuery.id,
        wrapperClassName: `${PackQueryEditorModal_baseClass}__select-query-dropdown-wrapper`,
        autoFocus: true
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onChangeFrequency,
        error: errorFrequency,
        inputWrapperClass: `${PackQueryEditorModal_baseClass}__form-field ${PackQueryEditorModal_baseClass}__form-field--frequency`,
        value: selectedFrequency,
        placeholder: "- - -",
        label: "Frequency (seconds)",
        type: "number"
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: constants/* LOGGING_TYPE_OPTIONS */["if"],
        onChange: onChangeSelectLoggingType,
        placeholder: "Select",
        value: selectedLoggingType,
        label: "Logging",
        wrapperClassName: `${PackQueryEditorModal_baseClass}__form-field ${PackQueryEditorModal_baseClass}__form-field--logging`
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: constants/* SCHEDULE_PLATFORM_DROPDOWN_OPTIONS */.Dk,
        placeholder: "Select",
        label: "Platform",
        onChange: onChangeSelectPlatformOptions,
        value: selectedPlatformOptions,
        multi: true,
        wrapperClassName: `${PackQueryEditorModal_baseClass}__form-field ${PackQueryEditorModal_baseClass}__form-field--platform`
      }
    ), /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: constants/* MIN_OSQUERY_VERSION_OPTIONS */.IX,
        onChange: onChangeMinOsqueryVersionOptions,
        placeholder: "Select",
        value: selectedMinOsqueryVersionOptions,
        label: "Minimum osquery version",
        wrapperClassName: `${PackQueryEditorModal_baseClass}__form-field ${PackQueryEditorModal_baseClass}__form-field--osquer-vers`
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onChangeShard,
        inputWrapperClass: `${PackQueryEditorModal_baseClass}__form-field ${PackQueryEditorModal_baseClass}__form-field--shard`,
        value: selectedShard,
        placeholder: "- - -",
        label: "Shard (percentage)",
        type: "number"
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        onClick: onFormSubmit,
        disabled: !selectedQuery && !editQuery,
        className: `${(editQuery == null ? void 0 : editQuery.name) ? "save" : "add-query"}-loading`,
        isLoading: isUpdatingPack
      },
      (editQuery == null ? void 0 : editQuery.name) ? "Save" : "Add query"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var PackQueryEditorModal_PackQueryEditorModal = (PackQueryEditorModal);

;// ./frontend/pages/packs/EditPackPage/components/PackQueryEditorModal/index.ts



;// ./frontend/pages/packs/EditPackPage/components/RemovePackQueryModal/RemovePackQueryModal.tsx




const RemovePackQueryModal_baseClass = "remove-pack-query-modal";
const RemovePackQueryModal = ({
  onCancel,
  onSubmit,
  selectedQuery,
  selectedQueryIds,
  isUpdatingPack
}) => {
  const queryOrQueries = selectedQuery || (selectedQueryIds == null ? void 0 : selectedQueryIds.length) === 1 ? "query" : "queries";
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Remove queries",
      onExit: onCancel,
      onEnter: onSubmit,
      className: RemovePackQueryModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: RemovePackQueryModal_baseClass }, "Are you sure you want to remove the selected ", queryOrQueries, " from your pack?", /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: onSubmit,
        className: "remove-loading",
        isLoading: isUpdatingPack
      },
      "Remove"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var RemovePackQueryModal_RemovePackQueryModal = (RemovePackQueryModal);

;// ./frontend/pages/packs/EditPackPage/components/RemovePackQueryModal/index.ts



;// ./frontend/pages/packs/EditPackPage/EditPackPage.tsx

var EditPackPage_defProp = Object.defineProperty;
var EditPackPage_defProps = Object.defineProperties;
var EditPackPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditPackPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditPackPage_hasOwnProp = Object.prototype.hasOwnProperty;
var EditPackPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditPackPage_defNormalProp = (obj, key, value) => key in obj ? EditPackPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditPackPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditPackPage_hasOwnProp.call(b, prop))
      EditPackPage_defNormalProp(a, prop, b[prop]);
  if (EditPackPage_getOwnPropSymbols)
    for (var prop of EditPackPage_getOwnPropSymbols(b)) {
      if (EditPackPage_propIsEnum.call(b, prop))
        EditPackPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditPackPage_spreadProps = (a, b) => EditPackPage_defProps(a, EditPackPage_getOwnPropDescs(b));















const EditPackPage_baseClass = "edit-pack-page";
const EditPacksPage = ({
  router,
  params: { id: paramsPackId }
}) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const packId = parseInt(paramsPackId, 10);
  const { data: queries } = (0,es.useQuery)(
    [{ scope: "queries", teamId: void 0 }],
    ({ queryKey }) => entities_queries/* default */.A.loadAll(queryKey[0]),
    {
      select: (data) => data.queries
    }
  );
  const { data: storedPack } = (0,es.useQuery)(
    ["stored pack"],
    () => packs/* default */.A.load(packId),
    {
      select: (data) => data.pack
    }
  );
  const {
    data: storedPackQueries,
    isLoading: isStoredPackQueriesLoading,
    refetch: refetchStoredPackQueries
  } = (0,es.useQuery)(
    ["stored pack queries"],
    () => scheduled_queries.loadAll(packId),
    {
      select: (data) => data.scheduled
    }
  );
  const [targetsCount, setTargetsCount] = (0,react.useState)(0);
  const [showPackQueryEditorModal, setShowPackQueryEditorModal] = (0,react.useState)(
    false
  );
  const [showRemovePackQueryModal, setShowRemovePackQueryModal] = (0,react.useState)(
    false
  );
  const [selectedPackQuery, setSelectedPackQuery] = (0,react.useState)();
  const [selectedPackQueryIds, setSelectedPackQueryIds] = (0,react.useState)([]);
  const [isUpdatingPack, setIsUpdatingPack] = (0,react.useState)(false);
  const packTargets = storedPack ? [
    ...storedPack.hosts.map((host) => EditPackPage_spreadProps(EditPackPage_spreadValues({}, host), {
      target_type: "hosts"
    })),
    ...storedPack.labels.map((label) => EditPackPage_spreadProps(EditPackPage_spreadValues({}, label), {
      target_type: "labels"
    })),
    ...storedPack.teams.map((team) => EditPackPage_spreadProps(EditPackPage_spreadValues({}, team), {
      target_type: "teams"
    }))
  ] : [];
  const onCancelEditPack = () => {
    return router.push(paths/* default */.A.MANAGE_PACKS);
  };
  const onFetchTargets = (0,react.useCallback)(
    (query, targetsResponse) => {
      const { targets_count } = targetsResponse;
      setTargetsCount(targets_count);
      return false;
    },
    []
  );
  const togglePackQueryEditorModal = () => {
    setSelectedPackQuery(void 0);
    setShowPackQueryEditorModal(!showPackQueryEditorModal);
  };
  const toggleRemovePackQueryModal = () => {
    setShowRemovePackQueryModal(!showRemovePackQueryModal);
  };
  const onEditPackQueryClick = (selectedQuery) => {
    togglePackQueryEditorModal();
    setSelectedPackQuery(selectedQuery);
  };
  const onRemovePackQueriesClick = (selectedTableQueryIds) => {
    toggleRemovePackQueryModal();
    setSelectedPackQueryIds(selectedTableQueryIds);
  };
  const handlePackFormSubmit = (formData) => {
    setIsUpdatingPack(true);
    const updatedPack = (0,deep_difference/* default */.A)(formData, storedPack);
    packs/* default */.A.update(packId, updatedPack).then(() => {
      ToastNotification/* notify */.me.success(`Successfully updated this pack.`);
      router.push(paths/* default */.A.MANAGE_PACKS);
    }).catch((e) => {
      if ((0,errors/* getErrorReason */.F3)(e, {
        reasonIncludes: "Duplicate entry"
      })) {
        ToastNotification/* notify */.me.error("Unable to update pack. Pack names must be unique.", {
          response: e
        });
      } else {
        ToastNotification/* notify */.me.error(`Could not update pack. Please try again.`, {
          response: e
        });
      }
    }).finally(() => {
      setIsUpdatingPack(false);
    });
  };
  const onPackQueryEditorSubmit = (formData, editQuery) => {
    setIsUpdatingPack(true);
    const request = editQuery ? scheduled_queries.update(editQuery, formData) : scheduled_queries.create(formData);
    request.then(() => {
      ToastNotification/* notify */.me.success(`Successfully updated this pack.`);
    }).catch((e) => {
      ToastNotification/* notify */.me.error("Could not update this pack. Please try again.", {
        response: e
      });
    }).finally(() => {
      togglePackQueryEditorModal();
      refetchStoredPackQueries();
      setIsUpdatingPack(false);
    });
    return false;
  };
  const onRemovePackQuerySubmit = () => {
    setIsUpdatingPack(true);
    const queryOrQueries = selectedPackQueryIds.length === 1 ? "query" : "queries";
    const promises = selectedPackQueryIds.map((id) => {
      return scheduled_queries.destroy(id);
    });
    return Promise.all(promises).then(() => {
      ToastNotification/* notify */.me.success(
        `Successfully removed ${queryOrQueries} from this pack.`
      );
    }).catch((e) => {
      ToastNotification/* notify */.me.error(
        `Unable to remove ${queryOrQueries} from this pack. Please try again.`,
        { response: e }
      );
    }).finally(() => {
      toggleRemovePackQueryModal();
      refetchStoredPackQueries();
      setIsUpdatingPack(false);
    });
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: EditPackPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${EditPackPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to packs", path: paths/* default */.A.MANAGE_PACKS })), storedPack && storedPackQueries && /* @__PURE__ */ react.createElement(
    EditPackForm_EditPackForm,
    {
      className: `${EditPackPage_baseClass}__pack-form`,
      handleSubmit: handlePackFormSubmit,
      onCancelEditPack,
      onFetchTargets,
      formData: EditPackPage_spreadProps(EditPackPage_spreadValues({}, storedPack), { targets: packTargets }),
      targetsCount,
      isPremiumTier,
      onAddPackQuery: togglePackQueryEditorModal,
      onEditPackQuery: onEditPackQueryClick,
      onRemovePackQueries: onRemovePackQueriesClick,
      scheduledQueries: storedPackQueries,
      isLoadingPackQueries: isStoredPackQueriesLoading,
      isUpdatingPack
    }
  ), showPackQueryEditorModal && queries && /* @__PURE__ */ react.createElement(
    PackQueryEditorModal_PackQueryEditorModal,
    {
      onCancel: togglePackQueryEditorModal,
      onPackQueryFormSubmit: onPackQueryEditorSubmit,
      allQueries: queries,
      editQuery: selectedPackQuery,
      packId,
      isUpdatingPack
    }
  ), showRemovePackQueryModal && queries && /* @__PURE__ */ react.createElement(
    RemovePackQueryModal_RemovePackQueryModal,
    {
      onCancel: toggleRemovePackQueryModal,
      onSubmit: onRemovePackQuerySubmit,
      selectedQuery: selectedPackQuery,
      selectedQueryIds: selectedPackQueryIds,
      isUpdatingPack
    }
  )));
};
/* harmony default export */ var EditPackPage = (EditPacksPage);

;// ./frontend/pages/packs/EditPackPage/index.ts




/***/ }),

/***/ 20735:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ManagePacksPage_ManagePacksPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
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
// EXTERNAL MODULE: ./frontend/services/entities/packs.ts
var entities_packs = __webpack_require__(18630);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
;// ./frontend/pages/packs/ManagePacksPage/components/DeletePackModal/DeletePackModal.tsx




const baseClass = "remove-pack-modal";
const DeletePackModal = ({
  onCancel,
  onSubmit,
  isUpdatingPack
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete pack",
      onExit: onCancel,
      onEnter: onSubmit,
      className: baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: baseClass }, "Are you sure you want to delete the selected packs?", /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: onSubmit,
        className: "delete-loading",
        isLoading: isUpdatingPack
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeletePackModal_DeletePackModal = (DeletePackModal);

;// ./frontend/pages/packs/ManagePacksPage/components/DeletePackModal/index.ts



// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 5 modules
var format = __webpack_require__(54070);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/StatusIndicator/index.ts + 1 modules
var StatusIndicator = __webpack_require__(96733);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/LinkCell.tsx
var LinkCell = __webpack_require__(42690);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
;// ./frontend/pages/packs/ManagePacksPage/components/PacksTable/PacksTableConfig.tsx

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








const generateTableHeaders = () => {
  const tableHeaders = [
    {
      id: "selection",
      Header: (cellProps) => {
        const props = cellProps.getToggleAllRowsSelectedProps();
        const checkboxProps = {
          value: props.checked,
          indeterminate: props.indeterminate,
          onChange: () => cellProps.toggleAllRowsSelected()
        };
        return /* @__PURE__ */ react.createElement(Checkbox/* default */.A, __spreadProps(__spreadValues({}, checkboxProps), { enableEnterToCheck: true }));
      },
      Cell: (cellProps) => {
        const props = cellProps.row.getToggleRowSelectedProps();
        const checkboxProps = {
          value: props.checked,
          onChange: () => cellProps.row.toggleRowSelected()
        };
        return /* @__PURE__ */ react.createElement(Checkbox/* default */.A, __spreadProps(__spreadValues({}, checkboxProps), { enableEnterToCheck: true }));
      },
      disableHidden: true
    },
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
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        LinkCell/* default */.A,
        {
          value: cellProps.cell.value,
          path: paths/* default */.A.EDIT_PACK(cellProps.row.original.id)
        }
      )
    },
    {
      title: "Reports",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "query_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Hosts",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "total_hosts_count",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
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
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: (0,format/* format */.GP)(new Date(cellProps.cell.value), "MM/dd/yy") })
    },
    {
      title: "Status",
      Header: "Status",
      disableSortBy: true,
      accessor: "status",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(StatusIndicator/* default */.A, { value: cellProps.cell.value })
    }
  ];
  return tableHeaders;
};
const enhancePackData = (packs) => {
  if (packs) {
    return packs.map((pack) => {
      return {
        id: pack.id,
        name: pack.name,
        query_count: pack.query_count,
        status: pack.disabled ? "disabled" : "enabled",
        total_hosts_count: pack.total_hosts_count,
        updated_at: pack.updated_at
      };
    });
  }
  return [];
};
const generateDataSet = (packs) => {
  return [...enhancePackData(packs)];
};


;// ./frontend/pages/packs/ManagePacksPage/components/PacksTable/PacksTable.tsx







const PacksTable_baseClass = "packs-table";
const PacksTable = ({
  onDeletePackClick,
  onEnablePackClick,
  onDisablePackClick,
  onCreatePackClick,
  packs,
  isLoading
}) => {
  const [filteredPacks, setFilteredPacks] = (0,react.useState)(
    packs
  );
  const [searchString, setSearchString] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    setFilteredPacks(packs);
  }, [packs]);
  (0,react.useEffect)(() => {
    setFilteredPacks(() => {
      return packs == null ? void 0 : packs.filter((pack) => {
        return pack.name.toLowerCase().includes(searchString.toLowerCase());
      });
    });
  }, [packs, searchString, setFilteredPacks]);
  const onQueryChange = (0,react.useCallback)(
    (queryData) => {
      const { searchQuery } = queryData;
      setSearchString(searchQuery);
    },
    [setSearchString]
  );
  const emptyState = () => {
    const emptyPacks = {
      header: "You don't have any packs",
      info: "Query packs allow you to schedule recurring queries for your hosts.",
      primaryButton: /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${PacksTable_baseClass}__create-button`,
          onClick: onCreatePackClick
        },
        "Add new pack"
      )
    };
    if (searchString) {
      emptyPacks.header = "No packs match the current search criteria";
      emptyPacks.info = "Expecting to see packs? Try again in a few seconds as the system catches up.";
      delete emptyPacks.primaryButton;
    }
    return emptyPacks;
  };
  const tableHeaders = generateTableHeaders();
  const secondarySelectActions = [
    {
      name: "enable",
      onClick: onEnablePackClick,
      buttonText: "Enable",
      variant: "secondary",
      iconSvg: "check"
    },
    {
      name: "disable",
      onClick: onDisablePackClick,
      buttonText: "Disable",
      variant: "secondary",
      iconSvg: "disable"
    }
  ];
  const renderPackCount = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "packs", count: (filteredPacks == null ? void 0 : filteredPacks.length) || 0 });
  }, [filteredPacks]);
  return /* @__PURE__ */ react.createElement("div", { className: `${PacksTable_baseClass}` }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      resultsTitle: "packs",
      columnConfigs: tableHeaders,
      data: generateDataSet(filteredPacks),
      isLoading,
      defaultSortHeader: "pack",
      defaultSortDirection: "desc",
      showMarkAllPages: false,
      isAllPagesSelected: false,
      onQueryChange,
      inputPlaceHolder: "Search by name",
      searchable: packs && packs.length > 0,
      disablePagination: true,
      primarySelectAction: {
        name: "delete pack",
        buttonText: "Delete",
        iconSvg: "trash",
        variant: "secondary",
        onClick: onDeletePackClick
      },
      renderCount: renderPackCount,
      secondarySelectActions,
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: emptyState().header,
          info: emptyState().info,
          primaryButton: emptyState().primaryButton
        }
      )
    }
  ));
};
/* harmony default export */ var PacksTable_PacksTable = (PacksTable);

;// ./frontend/pages/packs/ManagePacksPage/components/PacksTable/index.ts



;// ./frontend/pages/packs/ManagePacksPage/ManagePacksPage.tsx













const ManagePacksPage_baseClass = "manage-packs-page";
const renderTable = (onDeletePackClick, onEnablePackClick, onDisablePackClick, onCreatePackClick, packs, packsError, isLoadingPacks) => {
  if (packsError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
  }
  const isTableDataLoading = isLoadingPacks || packs === null;
  return /* @__PURE__ */ react.createElement(
    PacksTable_PacksTable,
    {
      onDeletePackClick,
      onEnablePackClick,
      onDisablePackClick,
      onCreatePackClick,
      packs,
      isLoading: isTableDataLoading
    }
  );
};
const ManagePacksPage = ({ router }) => {
  const { isOnlyObserver } = (0,react.useContext)(app/* AppContext */.BR);
  const onCreatePackClick = () => router.push(paths/* default */.A.NEW_PACK);
  const [selectedPackIds, setSelectedPackIds] = (0,react.useState)([]);
  const [showDeletePackModal, setShowDeletePackModal] = (0,react.useState)(false);
  const [isUpdatingPack, setIsUpdatingPack] = (0,react.useState)(false);
  const {
    data: packs,
    error: packsError,
    isFetching: isLoadingPacks,
    refetch: refetchPacks
  } = (0,es.useQuery)(
    "packs",
    () => entities_packs/* default */.A.loadAll(),
    {
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      select: (data) => data.packs
    }
  );
  const toggleDeletePackModal = (0,react.useCallback)(() => {
    setShowDeletePackModal(!showDeletePackModal);
  }, [showDeletePackModal, setShowDeletePackModal]);
  const onDeletePackClick = (selectedTablePackIds) => {
    toggleDeletePackModal();
    setSelectedPackIds(selectedTablePackIds);
  };
  const onDeletePackSubmit = (0,react.useCallback)(() => {
    setIsUpdatingPack(true);
    const packOrPacks = selectedPackIds.length === 1 ? "pack" : "packs";
    const promises = selectedPackIds.map((id) => {
      return entities_packs/* default */.A.destroy(id);
    });
    return Promise.all(promises).then(() => {
      ToastNotification/* notify */.me.success(`Successfully deleted ${packOrPacks}.`);
    }).catch((e) => {
      ToastNotification/* notify */.me.error(`Unable to delete ${packOrPacks}. Please try again.`, {
        response: e
      });
    }).finally(() => {
      refetchPacks();
      toggleDeletePackModal();
      setIsUpdatingPack(false);
    });
  }, [refetchPacks, selectedPackIds, toggleDeletePackModal]);
  const onEnableDisablePackSubmit = (0,react.useCallback)(
    (selectedTablePackIds, disablePack) => {
      const packOrPacks = selectedPackIds.length === 1 ? "pack" : "packs";
      const enableOrDisable = disablePack ? "disabled" : "enabled";
      const promises = selectedTablePackIds.map((id) => {
        return entities_packs/* default */.A.update(id, { disabled: disablePack });
      });
      return Promise.all(promises).then(() => {
        ToastNotification/* notify */.me.success(
          `Successfully ${enableOrDisable} selected ${packOrPacks}.`
        );
      }).catch((e) => {
        ToastNotification/* notify */.me.error(
          `Unable to ${enableOrDisable} selected ${packOrPacks}. Please try again.`,
          { response: e }
        );
      }).finally(() => {
        refetchPacks();
      });
    },
    [refetchPacks, selectedPackIds]
  );
  const onEnablePackClick = (selectedTablePackIds) => {
    setSelectedPackIds(selectedTablePackIds);
    onEnableDisablePackSubmit(selectedTablePackIds, false);
  };
  const onDisablePackClick = (selectedTablePackIds) => {
    setSelectedPackIds(selectedTablePackIds);
    onEnableDisablePackSubmit(selectedTablePackIds, true);
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: ManagePacksPage_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${ManagePacksPage_baseClass}__wrapper` }, /* @__PURE__ */ react.createElement("div", { className: `${ManagePacksPage_baseClass}__header-wrap` }, /* @__PURE__ */ react.createElement("div", { className: `${ManagePacksPage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${ManagePacksPage_baseClass}__text` }, /* @__PURE__ */ react.createElement("h1", { className: `${ManagePacksPage_baseClass}__title` }, /* @__PURE__ */ react.createElement("span", null, "Packs")), /* @__PURE__ */ react.createElement("div", { className: `${ManagePacksPage_baseClass}__description` }, /* @__PURE__ */ react.createElement("p", null, "Manage query packs to schedule recurring queries for your hosts.")))), !isOnlyObserver && packs && packs.length > 0 && /* @__PURE__ */ react.createElement("div", { className: `${ManagePacksPage_baseClass}__action-button-container` }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${ManagePacksPage_baseClass}__create-button`,
      onClick: onCreatePackClick
    },
    "Add new pack"
  ))), /* @__PURE__ */ react.createElement("div", null, isLoadingPacks ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, null) : renderTable(
    onDeletePackClick,
    onEnablePackClick,
    onDisablePackClick,
    onCreatePackClick,
    packs,
    packsError,
    isLoadingPacks
  )), showDeletePackModal && /* @__PURE__ */ react.createElement(
    DeletePackModal_DeletePackModal,
    {
      onCancel: toggleDeletePackModal,
      onSubmit: onDeletePackSubmit,
      isUpdatingPack
    }
  )));
};
/* harmony default export */ var ManagePacksPage_ManagePacksPage = (ManagePacksPage);

;// ./frontend/pages/packs/ManagePacksPage/index.tsx




/***/ }),

/***/ 98548:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ PackComposerPage_PackComposerPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/SelectTargetsDropdown/index.js + 14 modules
var SelectTargetsDropdown = __webpack_require__(56815);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/components/forms/packs/NewPackForm/NewPackForm.tsx

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








const baseClass = "new-pack-form";
const NewPackForm = ({
  className,
  handleSubmit,
  onFetchTargets,
  selectedTargetsCount,
  isPremiumTier,
  isUpdatingPack
}) => {
  const [errors, setErrors] = (0,react.useState)({});
  const [packName, setPackName] = (0,react.useState)("");
  const [packDescription, setPackDescription] = (0,react.useState)("");
  const [newPackFormTargets, setNewPackFormTargets] = (0,react.useState)(
    []
  );
  const onChangePackName = (value) => {
    setPackName(value);
    setErrors({});
  };
  const onChangePackDescription = (value) => {
    setPackDescription(value);
  };
  const onChangePackTargets = (value) => {
    setNewPackFormTargets(value);
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (packName === "") {
      return setErrors(__spreadProps(__spreadValues({}, errors), {
        name: "Pack name must be present"
      }));
    }
    return handleSubmit({
      name: packName,
      description: packDescription,
      targets: [...newPackFormTargets]
    });
  };
  const newPackFormClass = classnames_default()(baseClass, className);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to packs", path: paths/* default */.A.MANAGE_PACKS })), /* @__PURE__ */ react.createElement(
    "form",
    {
      className: newPackFormClass,
      onSubmit: onFormSubmit,
      autoComplete: "off"
    },
    /* @__PURE__ */ react.createElement("h1", null, "New pack"),
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onChangePackName,
        value: packName,
        placeholder: "Name",
        label: "Name",
        name: "name",
        error: errors.name,
        inputWrapperClass: `${baseClass}__pack-title`,
        autofocus: true,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ),
    /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        onChange: onChangePackDescription,
        value: packDescription,
        inputWrapperClass: `${baseClass}__pack-description`,
        label: "Description",
        name: "description",
        placeholder: "Add a description of your pack",
        type: "textarea",
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ),
    /* @__PURE__ */ react.createElement(
      SelectTargetsDropdown/* default */.A,
      {
        label: "Select pack targets",
        name: "selected-pack-targets",
        onFetchTargets,
        onSelect: onChangePackTargets,
        selectedTargets: newPackFormTargets,
        targetsCount: selectedTargetsCount,
        isPremiumTier
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__pack-buttons` }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", isLoading: isUpdatingPack }, "Save query pack"))
  ));
};
/* harmony default export */ var NewPackForm_NewPackForm = (NewPackForm);

;// ./frontend/components/forms/packs/NewPackForm/index.ts



// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
;// ./assets/images/icon-plus-minus-black-16x16@2x.png
var icon_plus_minus_black_16x16_2x_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgB5ZY/UhsxFMbfEztxSLXpYmiEcwFzgpgidkpzAuAETE4AOQFwAswJQrpkUsANwg28DRNmKFgqMMPo8bRjYC0kayXWUPA1+2xp9ftW/94DeGWhq2FRfm0T4hEB5rekVs+zvycwAwlXg0Kxw/CUQ5lwDDOSmNImHfGLGXgRvQ0DqeykrjbUjfPQWCOgj+UGgbA53oRaORHtGe8Or+HmV54d5zBFC63uFhFuc5jZTlMyj419fvbROJE0OU6KiFvm4Gxc01fAD9eSc0Js8nOj3EcvQR/i1YFq8EKo4NLspw0cQ6wIDm1/L37urplwVsZLumv2TRo0Wr2G9zwLSpYbfHuAl+ziCkYH5oBN2e0rhYMncMKVs+x3ZvZ3XsXNpd4QHi+g7P/wzxJ4VLq+0ypwrdqOYQxcK4Ea9El+kwrpJ4cPcATKFYmpcK1nz4CGI9IRlPKFhiORF+4zkN0HRI+xD14YYPhpxfTtNCBIfdcm9NfMQRFXgvOab5wG1A4IESqub2z8s8F52gcQoOA9MIbbvvxHKDzKwDh3tC3wbYhQkIGFVq9IXHXBgww0W70dPg3rdcK1Km1CW2bj3wcMX4dnymtglnCvARucdcKJaRlqkgiFX9HIWQHFyDoDuqCw5XSGL/tqwFAlVeE6rdrgrqK2msRgwkCR0xXs2uCuzPYB33ENAG2MutXpy8Qe4IJiP7Sg4P5tiFdHGINNFBQ++FiHECuCvTucsyKYbGlREgAAAABJRU5ErkJggg==";
;// ./assets/images/icon-snapshot-black-16x14@2x.png
var icon_snapshot_black_16x14_2x_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJFSURBVHgBxVdLbhNBEK3qIDArZoMUi037BgMncBbB7OKcgM8FbE6QhAsAF8DkBMCOBInMDWJO4N6gZIeXCClTvOqZkSJj3DWJEj9pPO2Z5+7qqnpVbaI1g63ETf/MM8sEw36COhXh3fPwNZABjozA4ieGxRU5uKeZ72cGrs2ATb/9AjdPdmQduju2EE0GMLs9aglmHlm8EHNAiffp3nN2lC8SREgnGdLVUDBTWHxYllKch+PDaECdXBpfT7eLgGTdcszl/hoWV0RVOcRgh9aH3AmxSS4NkBMFCY3hvt7Z7Ij1clI+xveXeB2oHTLu9gZiYTLJHIscnIWjd6t4XT8Yw7V71o2ZDdBd/gzfpjpW1XSoM8TWo2qklNPf9OfLPBRz/f7Ib+fCfGIxwmaA0Otm513/dAhpTZZMHhAf8I4/V7zBGG57m5raYkBAnHs6gGT7tWT/byukhT5QRCN6gxklFJauhELvm2HdjFbiMkdEDlP8pAFwdYy7xpVs9cI/rLhaZqcpsrkbXtCGWa4bNVfIzVNcgwfkQTXpRXKyq8AZCDEBVYKoBb8ojdAkIfi5Yf4EmHYgvThEhr9J0cHZv/TbUYpvyYE+rl1IkLQWaDXUdZYyUS+w+5j51kOMtRJqGX6C+wwLVOdDkpHo8UvfEf/Au4/NObBNizeXYqr69yvnpChLFjVkGepiNSFjizfLkKr+/R33D7i2YDgvLoxnn9oebtp4YBlCnIQka9vWG9yh68Hrh9j/XvwDDUFB68PUrZTVTUPk4C/H+OMmTrxRtAAAAABJRU5ErkJggg==";
;// ./frontend/components/side_panels/PackInfoSidePanel/PackInfoSidePanel.jsx





const PackInfoSidePanel_baseClass = "pack-info-side-panel";
const PackInfoSidePanel = () => {
  return /* @__PURE__ */ react.createElement("div", {
    className: PackInfoSidePanel_baseClass
  }, /* @__PURE__ */ react.createElement("h3", {
    className: `${PackInfoSidePanel_baseClass}__title`
  }, "What's a query pack?"), /* @__PURE__ */ react.createElement("div", {
    className: `${PackInfoSidePanel_baseClass}__description`
  }, /* @__PURE__ */ react.createElement("p", null, "Osquery supports grouping of queries (called query packs) which run on a scheduled basis and log the results to a configurable destination."), /* @__PURE__ */ react.createElement("p", null, "Query Packs are useful for monitoring specific attributes of hosts over time and can be used for alerting and incident response investigations. By default, queries added to packs run every hour (interval = 3600s)."), /* @__PURE__ */ react.createElement("p", null, "Reports can be run in two modes:"), /* @__PURE__ */ react.createElement("dl", null, /* @__PURE__ */ react.createElement("dt", null, /* @__PURE__ */ react.createElement("img", {
    src: icon_plus_minus_black_16x16_2x_namespaceObject,
    alt: "plus-minus"
  }), /* @__PURE__ */ react.createElement("span", null, "Differential")), /* @__PURE__ */ react.createElement("dt", null, /* @__PURE__ */ react.createElement("img", {
    src: icon_snapshot_black_16x14_2x_namespaceObject,
    alt: "snapshot"
  }), /* @__PURE__ */ react.createElement("span", null, "Snapshot")))), /* @__PURE__ */ react.createElement("h4", {
    className: `${PackInfoSidePanel_baseClass}__subtitle`
  }, "Where do I find results?"), /* @__PURE__ */ react.createElement("div", {
    className: `${PackInfoSidePanel_baseClass}__description`
  }, /* @__PURE__ */ react.createElement("p", null, "Packs are distributed to specified targets. Targets may be individual hosts or groups of hosts called labels."), /* @__PURE__ */ react.createElement("p", null, "The results of reports run via query packs are stored in log files for your convenience. We recommend forwarding these logs to a log aggregation tool or other actionable tool for further analysis. These logs can be found in the following locations:"), /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, /* @__PURE__ */ react.createElement("strong", null, "Status Log:"), " /path/to/status/logs"), /* @__PURE__ */ react.createElement("li", null, /* @__PURE__ */ react.createElement("strong", null, "Result Log:"), " /path/to/result/logs")), /* @__PURE__ */ react.createElement("p", null, "Learn more about log aggregation in the", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, {
    url: "https://osquery.readthedocs.io/en/stable/deployment/log-aggregation/",
    text: "documentation",
    newTab: true
  }))));
};
/* harmony default export */ var PackInfoSidePanel_PackInfoSidePanel = (PackInfoSidePanel);

;// ./frontend/components/side_panels/PackInfoSidePanel/index.js



// EXTERNAL MODULE: ./frontend/components/SidePanelContent/index.ts + 1 modules
var SidePanelContent = __webpack_require__(90125);
// EXTERNAL MODULE: ./frontend/components/SidePanelPage/index.ts + 1 modules
var SidePanelPage = __webpack_require__(56118);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/services/entities/packs.ts
var packs = __webpack_require__(18630);
;// ./frontend/pages/packs/PackComposerPage/PackComposerPage.tsx

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











const PackComposerPage_baseClass = "pack-composer";
const PackComposerPage = ({ router }) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const [selectedTargetsCount, setSelectedTargetsCount] = (0,react.useState)(0);
  const [isUpdatingPack, setIsUpdatingPack] = (0,react.useState)(false);
  const onFetchTargets = (query, targetsResponse) => {
    const { targets_count } = targetsResponse;
    setSelectedTargetsCount(targets_count);
    return false;
  };
  const handleSubmit = (formData) => __async(null, null, function* () {
    const { create } = packs/* default */.A;
    setIsUpdatingPack(true);
    try {
      const {
        pack: { id: packID }
      } = yield create(formData);
      ToastNotification/* notify */.me.success("Pack successfully created. Add queries to your pack.");
      router.push(paths/* default */.A.PACK(packID));
    } catch (e) {
      if ((0,errors/* getErrorReason */.F3)(e, {
        reasonIncludes: "Duplicate entry"
      })) {
        ToastNotification/* notify */.me.error("Unable to create pack. Pack names must be unique.", {
          response: e
        });
      } else {
        ToastNotification/* notify */.me.error("Unable to create pack.", { response: e });
      }
    } finally {
      setIsUpdatingPack(false);
    }
  });
  return /* @__PURE__ */ react.createElement(SidePanelPage/* default */.A, null, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: PackComposerPage_baseClass }, /* @__PURE__ */ react.createElement(
    NewPackForm_NewPackForm,
    {
      className: `${PackComposerPage_baseClass}__pack-form`,
      handleSubmit,
      onFetchTargets,
      selectedTargetsCount,
      isPremiumTier,
      isUpdatingPack
    }
  )), /* @__PURE__ */ react.createElement(SidePanelContent/* default */.A, null, /* @__PURE__ */ react.createElement(PackInfoSidePanel_PackInfoSidePanel, null))));
};
/* harmony default export */ var PackComposerPage_PackComposerPage = (PackComposerPage);

;// ./frontend/pages/packs/PackComposerPage/index.ts




/***/ }),

/***/ 18630:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97126);
/* harmony import */ var utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90508);
/* harmony import */ var utilities_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9467);

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




/* harmony default export */ __webpack_exports__.A = ({
  addLabel: (packID, labelID) => {
    const { PACKS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
    const path = `${PACKS}/${packID}/labels/${labelID}`;
    return (0,services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)("POST", path);
  },
  addQuery: (packID, queryID) => {
    const { PACKS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
    const path = `${PACKS}/${packID}/queries/${queryID}`;
    return (0,services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)("POST", path);
  },
  create: ({ name, description, targets }) => {
    const { PACKS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
    const packTargets = (0,utilities_helpers__WEBPACK_IMPORTED_MODULE_3__/* .formatPackTargetsForApi */ .Cj)(targets);
    return (0,services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)("POST", PACKS, __spreadValues({ name, description }, packTargets));
  },
  destroy: (packID) => {
    const { PACKS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
    const path = `${PACKS}/id/${packID}`;
    return (0,services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)("DELETE", path);
  },
  load: (packID) => {
    const { PACKS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
    const path = `${PACKS}/${packID}`;
    return (0,services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)("GET", path);
  },
  loadAll: () => {
    const { PACKS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
    return (0,services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)("GET", PACKS);
  },
  update: (packId, updatedPack) => {
    const { PACKS } = utilities_endpoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
    const { targets } = updatedPack;
    const path = `${PACKS}/${packId}`;
    let packTargets = null;
    if (targets) {
      packTargets = (0,utilities_helpers__WEBPACK_IMPORTED_MODULE_3__/* .formatPackTargetsForApi */ .Cj)(targets);
    }
    const packWithoutTargets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(updatedPack, "targets");
    const packParams = __spreadValues(__spreadValues({}, packWithoutTargets), packTargets);
    return (0,services__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)("PATCH", path, packParams);
  }
});


/***/ }),

/***/ 56815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ SelectTargetsDropdown_SelectTargetsDropdown; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/interfaces/target.ts + 6 modules
var target = __webpack_require__(72273);
// EXTERNAL MODULE: ./frontend/services/entities/targets.ts + 1 modules
var targets = __webpack_require__(26815);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(51339);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.es.js
var react_select_es = __webpack_require__(92016);
// EXTERNAL MODULE: ./frontend/utilities/debounce/index.ts
var debounce = __webpack_require__(14332);
;// ./frontend/components/forms/fields/SelectTargetsDropdown/SelectTargetsInput/SelectTargetsInput.jsx

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

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






class SelectTargetsInput extends react.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "filterOptions", (options) => {
      const {
        selectedTargets
      } = this.props;
      return (0,lodash.difference)(options, selectedTargets);
    });
    _defineProperty(this, "handleInputChange", (0,debounce/* default */.A)((query) => {
      const {
        onTargetSelectInputChange
      } = this.props;
      onTargetSelectInputChange(query);
    }, {
      leading: false,
      trailing: true
    }));
    this.state = {
      uuidTargets: props.targets,
      uuidSelectedTargets: props.selectedTargets
    };
  }
  // disable the eslint rule because it's the best way we can
  // fix #4905 without rewriting code that will be replaced
  // by the newer SelectTargets component soon.
  /* eslint-disable react/no-did-update-set-state */
  componentDidUpdate(prevProps) {
    const {
      targets,
      selectedTargets
    } = this.props;
    if (!(0,lodash.isEqual)(prevProps.targets, targets)) {
      const uuidTargets = targets.map((target) => __spreadProps(__spreadValues({}, target), {
        uuid: (0,lodash.uniqueId)()
      }));
      this.setState({
        uuidTargets
      });
    }
    if (!(0,lodash.isEqual)(prevProps.selectedTargets, selectedTargets)) {
      const uuidSelectedTargets = selectedTargets.map((target) => __spreadProps(__spreadValues({}, target), {
        uuid: (0,lodash.uniqueId)()
      }));
      this.setState({
        uuidSelectedTargets
      });
    }
  }
  render() {
    const {
      className,
      disabled,
      isLoading,
      menuRenderer,
      onClose,
      onOpen,
      onFocus,
      onTargetSelect,
      arrowRenderer,
      clearRenderer
    } = this.props;
    const {
      uuidTargets,
      uuidSelectedTargets
    } = this.state;
    const {
      handleInputChange
    } = this;
    return /* @__PURE__ */ react.createElement(react_select_es/* default */.Ay, {
      className: `${className} target-select`,
      disabled,
      isLoading,
      filterOptions: this.filterOptions,
      labelKey: "display_text",
      menuRenderer,
      multi: true,
      name: "targets",
      options: uuidTargets,
      onChange: onTargetSelect,
      onClose,
      onOpen,
      onFocus,
      onInputChange: handleInputChange,
      placeholder: "Label name, host name, private IP address, etc.",
      resetValue: [],
      scrollMenuIntoView: false,
      tabSelectsValue: false,
      value: uuidSelectedTargets,
      valueKey: "uuid",
      arrowRenderer,
      clearRenderer,
      clearable: true
    });
  }
}
_defineProperty(SelectTargetsInput, "propTypes", {
  className: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  isLoading: (prop_types_default()).bool,
  menuRenderer: (prop_types_default()).func,
  onClose: (prop_types_default()).func,
  onOpen: (prop_types_default()).func,
  onFocus: (prop_types_default()).func,
  onTargetSelect: (prop_types_default()).func,
  onTargetSelectInputChange: (prop_types_default()).func,
  selectedTargets: prop_types_default().arrayOf(target/* default */.Ay),
  targets: prop_types_default().arrayOf(target/* default */.Ay),
  arrowRenderer: (prop_types_default()).func,
  clearRenderer: (prop_types_default()).func
});
/* harmony default export */ var SelectTargetsInput_SelectTargetsInput = (SelectTargetsInput);

;// ./frontend/components/forms/fields/SelectTargetsDropdown/SelectTargetsInput/index.js



// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(83725);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.find.js
var esnext_iterator_find = __webpack_require__(52598);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
;// ./frontend/components/icons/FleetIcon/FleetIcon.tsx



const baseClass = "fleeticon";
const FleetIcon = ({
  className,
  fw,
  name,
  size,
  title
}) => {
  const iconClasses = classnames_default()(baseClass, `${baseClass}-${name}`, className, {
    [`${baseClass}-fw`]: fw,
    [`${baseClass}-${size}`]: !!size
  });
  return /* @__PURE__ */ react.createElement("i", { className: iconClasses, title });
};
/* harmony default export */ var FleetIcon_FleetIcon = (FleetIcon);

;// ./frontend/components/icons/FleetIcon/index.ts



// EXTERNAL MODULE: ./frontend/components/SQLEditor/index.tsx
var SQLEditor = __webpack_require__(98220);
// EXTERNAL MODULE: ./frontend/components/StatusIndicator/index.ts + 1 modules
var StatusIndicator = __webpack_require__(96733);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/OSIcon/index.ts + 1 modules
var OSIcon = __webpack_require__(90581);
;// ./frontend/components/forms/fields/SelectTargetsDropdown/helpers.ts

const isTargetHost = (target) => {
  return target.target_type === "hosts";
};
const isTargetLabel = (target) => {
  return target.target_type === "labels";
};
const isTargetTeam = (target) => {
  return target.target_type === "teams";
};

;// ./frontend/components/forms/fields/SelectTargetsDropdown/TargetDetails/TargetDetails.tsx












const TargetDetails_baseClass = "target-details";
const TargetDetails = ({
  target,
  className = "",
  handleBackToResults = lodash.noop
}) => {
  const renderHost = (hostTarget) => {
    const {
      display_text: displayText,
      primary_mac: hostMac,
      primary_ip: hostIpAddress,
      memory,
      osquery_version: osqueryVersion,
      os_version: osVersion,
      platform,
      status
    } = hostTarget;
    const hostBaseClass = "host-target";
    const isOnline = status === "online";
    const isOffline = status === "offline";
    const statusClassName = classnames_default()(
      `${hostBaseClass}__status`,
      { [`${hostBaseClass}__status--is-online`]: isOnline },
      { [`${hostBaseClass}__status--is-offline`]: isOffline }
    );
    return /* @__PURE__ */ react.createElement("div", { className: `${hostBaseClass} ${className}` }, /* @__PURE__ */ react.createElement(
      "button",
      {
        className: `button button--unstyled ${hostBaseClass}__back`,
        onClick: handleBackToResults
      },
      /* @__PURE__ */ react.createElement(FleetIcon_FleetIcon, { name: "chevronleft" }),
      "Back"
    ), /* @__PURE__ */ react.createElement("div", { className: `${hostBaseClass}__host-info` }, /* @__PURE__ */ react.createElement("div", { className: `${hostBaseClass}__display-text` }, /* @__PURE__ */ react.createElement(
      FleetIcon_FleetIcon,
      {
        name: "single-host",
        className: `${hostBaseClass}__icon`
      }
    ), /* @__PURE__ */ react.createElement("span", null, displayText)), /* @__PURE__ */ react.createElement("div", { className: statusClassName }, isOnline && /* @__PURE__ */ react.createElement(StatusIndicator/* default */.A, { value: "online" }), isOffline && /* @__PURE__ */ react.createElement(StatusIndicator/* default */.A, { value: "offline" }))), /* @__PURE__ */ react.createElement("div", { className: `${TargetDetails_baseClass}__details` }, /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Private IP address",
        value: hostIpAddress,
        orientation: "horizontal"
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "MAC address",
        value: /* @__PURE__ */ react.createElement("span", { className: `${hostBaseClass}__mac-address` }, hostMac),
        orientation: "horizontal"
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Platform",
        value: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(OSIcon/* default */.A, { name: platform }), /* @__PURE__ */ react.createElement("span", { className: `${hostBaseClass}__platform-text` }, " ", platform)),
        orientation: "horizontal"
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Operating system",
        value: osVersion,
        orientation: "horizontal"
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Osquery version",
        value: osqueryVersion,
        orientation: "horizontal"
      }
    ), /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        title: "Memory",
        value: (0,helpers/* humanHostMemory */.nm)(memory),
        orientation: "horizontal"
      }
    )));
  };
  const renderLabel = (labelTarget) => {
    const {
      count,
      description,
      display_text: displayText,
      query
    } = labelTarget;
    const labelBaseClass = "label-target";
    return /* @__PURE__ */ react.createElement("div", { className: `${labelBaseClass} ${className}` }, /* @__PURE__ */ react.createElement(
      "button",
      {
        className: `button button--unstyled ${labelBaseClass}__back`,
        onClick: handleBackToResults
      },
      /* @__PURE__ */ react.createElement(FleetIcon_FleetIcon, { name: "chevronleft" }),
      " Back"
    ), /* @__PURE__ */ react.createElement("p", { className: `${labelBaseClass}__display-text` }, /* @__PURE__ */ react.createElement(FleetIcon_FleetIcon, { name: "label", fw: true, className: `${labelBaseClass}__icon` }), /* @__PURE__ */ react.createElement("span", null, displayText)), /* @__PURE__ */ react.createElement("p", { className: `${labelBaseClass}__hosts` }, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { count, name: "hosts" })), /* @__PURE__ */ react.createElement("p", { className: `${labelBaseClass}__description` }, description || "No Description"), query && /* @__PURE__ */ react.createElement("div", { className: `${labelBaseClass}__editor` }, /* @__PURE__ */ react.createElement(
      SQLEditor/* default */.A,
      {
        name: "label-query",
        value: query,
        readOnly: true,
        disabled: true,
        maxLines: 20,
        showGutter: false,
        wrapEnabled: true,
        fontSize: 14,
        style: { width: "100%" }
      }
    )));
  };
  const renderTeam = (teamTarget) => {
    const { count, display_text: displayText } = teamTarget;
    const labelBaseClass = "label-target";
    return /* @__PURE__ */ react.createElement("div", { className: `${labelBaseClass} ${className}` }, /* @__PURE__ */ react.createElement("p", { className: `${labelBaseClass}__display-text` }, /* @__PURE__ */ react.createElement(
      FleetIcon_FleetIcon,
      {
        name: "all-hosts",
        fw: true,
        className: `${labelBaseClass}__icon`
      }
    ), /* @__PURE__ */ react.createElement("span", null, displayText)), /* @__PURE__ */ react.createElement("p", { className: `${labelBaseClass}__hosts` }, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { count, name: "hosts" })));
  };
  if (!target) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null);
  }
  if (isTargetHost(target)) {
    return renderHost(target);
  }
  if (isTargetLabel(target)) {
    return renderLabel(target);
  }
  if (isTargetTeam(target)) {
    return renderTeam(target);
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null);
};
/* harmony default export */ var TargetDetails_TargetDetails = (TargetDetails);

;// ./frontend/components/forms/fields/SelectTargetsDropdown/TargetDetails/index.ts



// EXTERNAL MODULE: ./frontend/components/buttons/Button/Button.tsx
var Button_Button = __webpack_require__(84547);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var platform = __webpack_require__(43015);
;// ./frontend/components/forms/fields/SelectTargetsDropdown/TargetOption/TargetIcon.tsx






const TargetIcon_baseClass = "target-option";
const TargetIcon = ({ target }) => {
  const iconName = () => {
    if (isTargetLabel(target)) {
      return target.name === "All Hosts" ? "all-hosts" : "label";
    }
    if (isTargetHost(target)) {
      if ((0,platform/* isLinuxLike */.eX)(target.platform)) {
        return "linux";
      }
      return target.platform === "darwin" ? "apple" : target.platform;
    }
    return "";
  };
  const targetClasses = classnames_default()(`${TargetIcon_baseClass}__icon`, {
    [`${TargetIcon_baseClass}__icon--${isTargetHost(target) && target.status}`]: isTargetHost(target)
  });
  return /* @__PURE__ */ react.createElement(FleetIcon_FleetIcon, { name: iconName(), className: targetClasses });
};
/* harmony default export */ var TargetOption_TargetIcon = (TargetIcon);

;// ./frontend/components/forms/fields/SelectTargetsDropdown/TargetOption/TargetOption.tsx







const TargetOption_baseClass = "target-option";
const TargetOption = ({
  onMoreInfoClick,
  onSelect,
  target
}) => {
  const handleSelect = (evt) => {
    return onSelect(target, evt);
  };
  const renderTargetDetail = () => {
    if (isTargetHost(target)) {
      const { primary_ip: hostIpAddress } = target;
      if (!hostIpAddress) {
        return null;
      }
      return /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement("span", { className: `${TargetOption_baseClass}__ip` }, hostIpAddress));
    }
    if (isTargetTeam(target) || isTargetLabel(target)) {
      return /* @__PURE__ */ react.createElement("span", { className: `${TargetOption_baseClass}__count` }, target.count, " hosts");
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null);
  };
  const { display_text: displayText, target_type: targetType } = target;
  const wrapperClassName = classnames_default()(`${TargetOption_baseClass}__wrapper`, {
    "is-team": targetType === "teams",
    "is-label": targetType === "labels",
    "is-host": targetType === "hosts"
  });
  return /* @__PURE__ */ react.createElement("div", { className: wrapperClassName }, /* @__PURE__ */ react.createElement(
    Button_Button/* default */.A,
    {
      className: `button button--unstyled ${TargetOption_baseClass}__target-content`,
      onClick: onMoreInfoClick(target),
      variant: "unstyled"
    },
    /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(TargetOption_TargetIcon, { target }), /* @__PURE__ */ react.createElement("span", { className: `${TargetOption_baseClass}__label-label` }, displayText !== "All Hosts" ? displayText : "All hosts")),
    renderTargetDetail()
  ), /* @__PURE__ */ react.createElement(
    Button_Button/* default */.A,
    {
      className: `${TargetOption_baseClass}__add-btn`,
      onClick: handleSelect,
      variant: "subdued",
      size: "small"
    },
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "plus", color: "core-fleet-green" })
  ));
};
/* harmony default export */ var TargetOption_TargetOption = (TargetOption);

;// ./frontend/components/forms/fields/SelectTargetsDropdown/TargetOption/index.ts



;// ./frontend/components/forms/fields/SelectTargetsDropdown/SelectTargetsMenu/helpers.js

const targetFilter = (targetType) => {
  if (targetType === "all") {
    return {
      name: "All Hosts"
    };
  }
  if (targetType === "labels" || targetType === "teams") {
    return (option) => {
      return option.target_type === targetType && option.name !== "All Hosts";
    };
  }
  return {
    target_type: targetType
  };
};
/* harmony default export */ var SelectTargetsMenu_helpers = ({
  targetFilter
});

;// ./frontend/components/forms/fields/SelectTargetsDropdown/SelectTargetsMenu/SelectTargetsMenu.jsx













const SelectTargetsMenu_baseClass = "target-list";
const SelectTargetsMenuWrapper = (onMoreInfoClick, moreInfoTarget, handleBackToResults, isPremiumTier) => {
  const SelectTargetsMenu = ({
    focusedOption,
    instancePrefix,
    onFocus,
    onSelect,
    optionClassName,
    optionComponent,
    options,
    valueArray = [],
    valueKey,
    onOptionRef
  }) => {
    const Option = optionComponent;
    const renderTargets = (targetType) => {
      const targets = (0,lodash.filter)(options, targetFilter(targetType));
      const targetsOutput = [];
      let targetTitle = targetType;
      if (targetType === "all") {
        targetTitle = "all hosts";
      } else if (targetType === "teams") {
        targetTitle = "fleets";
      }
      targetsOutput.push(/* @__PURE__ */ react.createElement("p", {
        className: `${SelectTargetsMenu_baseClass}__type`,
        key: `type-${targetType}-key`
      }, targetTitle));
      if (targets.length === 0) {
        if (targetType === "all") {
          return false;
        }
        targetsOutput.push(/* @__PURE__ */ react.createElement("span", {
          className: `${SelectTargetsMenu_baseClass}__not-found`,
          key: `${targetType}-notfound`
        }, "Unable to find any matching ", targetTitle, "."));
        return targetsOutput;
      }
      targetsOutput.push(targets.map((target, index) => {
        const {
          disabled: isDisabled
        } = target;
        const isSelected = (0,lodash.includes)(valueArray, target);
        const isFocused = (0,lodash.isEqual)(focusedOption, target);
        const className = classnames_default()(optionClassName, {
          "Select-option": true,
          "is-selected": isSelected,
          "is-focused": isFocused,
          "is-disabled": true
        });
        const setRef = (ref) => {
          onOptionRef(ref, isFocused);
        };
        return /* @__PURE__ */ react.createElement(Option, {
          className,
          instancePrefix,
          isDisabled,
          isFocused,
          isSelected,
          key: `option-${target[valueKey]}-${target.id}`,
          onFocus,
          onSelect: lodash.noop,
          option: target,
          optionIndex: index,
          ref: setRef
        }, /* @__PURE__ */ react.createElement(TargetOption_TargetOption, {
          target,
          onSelect,
          onMoreInfoClick
        }));
      }));
      return targetsOutput;
    };
    const hasHostTargets = () => {
      return options.find((option) => option.count !== 0) !== void 0;
    };
    const renderTargetGroups = /* @__PURE__ */ react.createElement(react.Fragment, null, renderTargets("all"), isPremiumTier && renderTargets("teams"), renderTargets("labels"), renderTargets("hosts"));
    return /* @__PURE__ */ react.createElement("div", {
      className: SelectTargetsMenu_baseClass
    }, /* @__PURE__ */ react.createElement("div", {
      className: `${SelectTargetsMenu_baseClass}__options`
    }, hasHostTargets() ? renderTargetGroups : /* @__PURE__ */ react.createElement(EmptyState/* default */.A, {
      header: "You have no hosts to run this report against",
      info: "Expecting to see hosts? Try again in a few seconds as the system catches up."
    })), /* @__PURE__ */ react.createElement("div", {
      className: `${SelectTargetsMenu_baseClass}__option-details`
    }, /* @__PURE__ */ react.createElement(TargetDetails_TargetDetails, {
      target: moreInfoTarget,
      className: `${SelectTargetsMenu_baseClass}__spotlight`,
      handleBackToResults
    })));
  };
  SelectTargetsMenu.propTypes = {
    focusedOption: target/* default */.Ay,
    instancePrefix: (prop_types_default()).string,
    onFocus: (prop_types_default()).func,
    onSelect: (prop_types_default()).func,
    optionClassName: (prop_types_default()).string,
    optionComponent: (prop_types_default()).node,
    options: prop_types_default().arrayOf(target/* default */.Ay),
    valueArray: prop_types_default().arrayOf(target/* default */.Ay),
    valueKey: (prop_types_default()).string,
    onOptionRef: (prop_types_default()).func
  };
  return SelectTargetsMenu;
};
/* harmony default export */ var SelectTargetsMenu = (SelectTargetsMenuWrapper);

;// ./frontend/components/forms/fields/SelectTargetsDropdown/SelectTargetsMenu/index.js



;// ./frontend/components/forms/fields/SelectTargetsDropdown/SelectTargetsDropdown.jsx

function SelectTargetsDropdown_defineProperty(e, r, t) {
  return (r = SelectTargetsDropdown_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function SelectTargetsDropdown_toPropertyKey(t) {
  var i = SelectTargetsDropdown_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function SelectTargetsDropdown_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}











const SelectTargetsDropdown_baseClass = "target-select";
class SelectTargetsDropdown extends react.Component {
  constructor(props) {
    super(props);
    SelectTargetsDropdown_defineProperty(this, "onInputClose", () => {
      const {
        document
      } = __webpack_require__.g;
      const coreWrapper = document.querySelector(".core-wrapper");
      this.setState({
        moreInfoTarget: null,
        query: ""
      });
      coreWrapper.style.height = "auto";
      return false;
    });
    SelectTargetsDropdown_defineProperty(this, "onInputFocus", () => {
      const {
        document
      } = __webpack_require__.g;
      this.wrapperHeight = document.querySelector(".core-wrapper").scrollHeight;
      return false;
    });
    SelectTargetsDropdown_defineProperty(this, "onInputOpen", () => {
      const {
        document
      } = __webpack_require__.g;
      const {
        wrapperHeight
      } = this;
      const lookForOuterMenu = setInterval(() => {
        if (document.querySelectorAll(".Select-menu-outer")) {
          clearInterval(lookForOuterMenu);
          const coreWrapper = document.querySelector(".core-wrapper");
          const currentWrapperHeight = coreWrapper.scrollHeight;
          if (wrapperHeight < currentWrapperHeight) {
            coreWrapper.style.height = `${wrapperHeight + (currentWrapperHeight - wrapperHeight) + 15}px`;
          }
        }
      }, 5);
      return false;
    });
    SelectTargetsDropdown_defineProperty(this, "onTargetSelectMoreInfo", (moreInfoTarget) => {
      return (evt) => {
        evt.preventDefault();
        const currentMoreInfoTarget = this.state.moreInfoTarget || {};
        if ((0,lodash.isEqual)(moreInfoTarget.id, currentMoreInfoTarget.id)) {
          return false;
        }
        this.setState({
          moreInfoTarget
        });
        return false;
      };
    });
    SelectTargetsDropdown_defineProperty(this, "onBackToResults", () => {
      this.setState({
        moreInfoTarget: null
      });
    });
    SelectTargetsDropdown_defineProperty(this, "fetchTargets", (query = "", queryId = this.props.queryId, selectedTargets = this.props.selectedTargets) => {
      const {
        onFetchTargets
      } = this.props;
      if (!this.mounted) {
        return false;
      }
      this.setState({
        isLoadingTargets: true,
        query
      });
      return targets/* default */.A.DEPRECATED_loadAll(query, queryId, (0,helpers/* formatSelectedTargetsForApi */.yp)(selectedTargets)).then((response) => {
        const {
          targets
        } = response;
        const isEmpty = targets.length === 0;
        if (!this.mounted) {
          return false;
        }
        if (isEmpty) {
          targets.push({});
        }
        onFetchTargets(query, response);
        this.setState({
          isEmpty,
          isLoadingTargets: false,
          targets
        });
        return query;
      }).catch((error) => {
        console.error("Error getting targets:", error);
        if (this.mounted) {
          this.setState({
            isLoadingTargets: false
          });
        }
      });
    });
    SelectTargetsDropdown_defineProperty(this, "renderLabel", () => {
      const {
        error,
        label,
        targetsCount
      } = this.props;
      const labelClassName = classnames_default()(`${SelectTargetsDropdown_baseClass}__label`, {
        [`${SelectTargetsDropdown_baseClass}__label--error`]: error
      });
      if (!label) {
        return false;
      }
      return /* @__PURE__ */ react.createElement("p", {
        className: labelClassName
      }, /* @__PURE__ */ react.createElement("span", {
        className: `${SelectTargetsDropdown_baseClass}__select-targets`
      }, error || label), /* @__PURE__ */ react.createElement("span", {
        className: `${SelectTargetsDropdown_baseClass}__targets-count`
      }, " ", targetsCount, " unique ", targetsCount === 1 ? "host" : "hosts"));
    });
    this.state = {
      isEmpty: false,
      isLoadingTargets: false,
      moreInfoTarget: null,
      query: "",
      targets: []
    };
  }
  componentWillMount() {
    this.mounted = true;
    this.wrapperHeight = 0;
    this.fetchTargets();
    return false;
  }
  componentWillReceiveProps(nextProps) {
    const {
      selectedTargets
    } = nextProps;
    const {
      query
    } = this.state;
    const {
      queryId
    } = this.props;
    if (!(0,lodash.isEqual)(selectedTargets, this.props.selectedTargets)) {
      this.fetchTargets(query, queryId, selectedTargets);
    }
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const {
      isEmpty,
      isLoadingTargets,
      moreInfoTarget,
      targets
    } = this.state;
    const {
      fetchTargets,
      onBackToResults,
      onInputClose,
      onInputOpen,
      onInputFocus,
      onTargetSelectMoreInfo,
      renderLabel
    } = this;
    const {
      disabled,
      onSelect,
      selectedTargets,
      isPremiumTier
    } = this.props;
    const menuRenderer = SelectTargetsMenu(onTargetSelectMoreInfo, moreInfoTarget, onBackToResults, isPremiumTier);
    const inputClasses = classnames_default()({
      "show-preview": moreInfoTarget,
      "is-empty": isEmpty
    });
    const ArrowRenderer = ({
      isOpen
    }) => /* @__PURE__ */ react.createElement("div", {
      className: classnames_default()("target-select__arrow", {
        "target-select__arrow--open": isOpen
      })
    }, /* @__PURE__ */ react.createElement(Icon/* default */.A, {
      name: "chevron-down"
    }));
    const ClearRenderer = () => /* @__PURE__ */ react.createElement(Button/* default */.A, {
      type: "button",
      className: "target-select__clear",
      onMouseDown: (e) => e.preventDefault(),
      variant: "subdued"
    }, /* @__PURE__ */ react.createElement(Icon/* default */.A, {
      name: "close"
    }));
    return /* @__PURE__ */ react.createElement("div", {
      className: `${SelectTargetsDropdown_baseClass}__wrapper form-field`
    }, renderLabel(), /* @__PURE__ */ react.createElement(SelectTargetsInput_SelectTargetsInput, {
      className: inputClasses,
      disabled,
      isLoading: isLoadingTargets,
      menuRenderer,
      onClose: onInputClose,
      onOpen: onInputOpen,
      onFocus: onInputFocus,
      onTargetSelect: onSelect,
      onTargetSelectInputChange: fetchTargets,
      selectedTargets,
      targets,
      isPremiumTier,
      arrowRenderer: ArrowRenderer,
      clearRenderer: ClearRenderer
    }));
  }
}
SelectTargetsDropdown_defineProperty(SelectTargetsDropdown, "propTypes", {
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  label: (prop_types_default()).string,
  onFetchTargets: (prop_types_default()).func,
  onSelect: (prop_types_default()).func.isRequired,
  selectedTargets: prop_types_default().arrayOf(target/* default */.Ay),
  targetsCount: (prop_types_default()).number,
  queryId: (prop_types_default()).number,
  isPremiumTier: (prop_types_default()).bool
});
SelectTargetsDropdown_defineProperty(SelectTargetsDropdown, "defaultProps", {
  disabled: false,
  onFetchTargets: lodash.noop
});
/* harmony default export */ var SelectTargetsDropdown_SelectTargetsDropdown = (SelectTargetsDropdown);

;// ./frontend/components/forms/fields/SelectTargetsDropdown/index.js




/***/ })

}]);