"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[158],{

/***/ 56224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ EditLabelPage_EditLabelPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
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
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./node_modules/use-debounce/dist/index.module.js
var index_module = __webpack_require__(81591);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_query/index.ts
var validate_query = __webpack_require__(22184);
// EXTERNAL MODULE: ./frontend/components/SQLEditor/index.tsx
var SQLEditor = __webpack_require__(98220);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/forms/FormField/index.ts + 1 modules
var FormField = __webpack_require__(25663);
;// ./frontend/pages/labels/components/TeamNameField/TeamNameField.tsx



const TeamNameField = ({ name }) => {
  return /* @__PURE__ */ react.createElement(FormField/* default */.A, { label: "Mesh", name: "fleet_name" }, /* @__PURE__ */ react.createElement("p", null, name));
};
/* harmony default export */ var TeamNameField_TeamNameField = (TeamNameField);

;// ./frontend/pages/labels/components/LabelForm/helpers.ts

const FORM_VALIDATIONS = {
  name: {
    validations: [
      {
        name: "required",
        isValid: (formData) => formData.name.trim().length > 0,
        message: "Label name must be present"
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
const validateLabelFormData = (formData) => {
  const formValidation = { isValid: true };
  Object.keys(FORM_VALIDATIONS).forEach((objKey) => {
    const failedValidation = FORM_VALIDATIONS[objKey].validations.find(
      (validation) => !validation.isValid(formData, formValidation)
    );
    if (!failedValidation) {
      switch (objKey) {
        case "name":
          formValidation.name = { isValid: true };
          break;
        default: {
          const _exhaustiveCheck = objKey;
          break;
        }
      }
    } else {
      formValidation.isValid = false;
      const message = getErrorMessage(formData, failedValidation.message);
      switch (objKey) {
        case "name":
          formValidation.name = { isValid: false, message };
          break;
        default: {
          const _exhaustiveCheck = objKey;
          break;
        }
      }
    }
  });
  return formValidation;
};

;// ./frontend/pages/labels/components/LabelForm/LabelForm.tsx

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







const baseClass = "label-form";
const generateDescriptionHelpText = (immutableFields) => {
  if (immutableFields.length === 0) {
    return "";
  }
  const SUFFIX = "are immutable. To make changes, delete this label and create a new one.";
  if (immutableFields.length === 1) {
    return `Label ${immutableFields[0]} ${SUFFIX}`;
  }
  if (immutableFields.length === 2) {
    return `Label ${immutableFields[0]} and ${immutableFields[1]} ${SUFFIX}`;
  }
  const allButLast = immutableFields.slice(0, -1).join(", ");
  const last = immutableFields.slice(-1);
  return `Label ${allButLast}, and ${last} ${SUFFIX}`;
};
const LabelForm = ({
  defaultName = "",
  defaultDescription = "",
  additionalFields,
  isUpdatingLabel,
  teamName,
  onCancel,
  onSave,
  immutableFields,
  gitOpsLocksDefinitionOnly = false
}) => {
  const [name, setName] = (0,react.useState)(defaultName);
  const [description, setDescription] = (0,react.useState)(defaultDescription);
  const [formValidation, setFormValidation] = (0,react.useState)({
    isValid: true
  });
  const currentData = { name, description };
  const onFormChange = ({ name: fieldName, value }) => {
    const nextData = fieldName === "name" ? { name: value, description } : { name, description: value };
    if (fieldName === "name") {
      setName(value);
    } else if (fieldName === "description") {
      setDescription(value);
    }
    const fullValidation = validateLabelFormData(nextData);
    setFormValidation((prev) => {
      var _a;
      const next = __spreadProps(__spreadValues({}, prev), { isValid: true });
      if (prev.name) next.name = prev.name;
      if (fieldName === "name") {
        if (prev.name && ((_a = fullValidation.name) == null ? void 0 : _a.isValid)) {
          next.name = void 0;
        }
      }
      next.isValid = !next.name || next.name.isValid;
      return next;
    });
  };
  const onInputBlur = ({ name: fieldName, value }) => {
    const nextData = fieldName === "name" ? { name: value, description } : { name, description: value };
    const fullValidation = validateLabelFormData(nextData);
    setFormValidation(fullValidation);
  };
  const handleBlur = (evt) => {
    const target = evt.currentTarget;
    onInputBlur({ name: target.name, value: target.value });
  };
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    const fullValidation = validateLabelFormData(currentData);
    setFormValidation(fullValidation);
    onSave(currentData, fullValidation.isValid);
  };
  const renderDefinitionField = (field) => gitOpsLocksDefinitionOnly ? /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      entityType: "labels",
      isInputField: true,
      renderChildren: field
    }
  ) : field();
  const renderSaveButton = (disabled) => /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "submit",
      isLoading: isUpdatingLabel,
      disabled: disabled || !formValidation.isValid
    },
    "Save"
  );
  return /* @__PURE__ */ react.createElement("form", { className: `${baseClass}__wrapper`, onSubmit: onSubmitForm }, renderDefinitionField((disabled) => {
    var _a;
    return /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        error: (_a = formValidation.name) == null ? void 0 : _a.message,
        parseTarget: true,
        name: "name",
        onChange: onFormChange,
        onBlur: handleBlur,
        value: name,
        disabled,
        inputClassName: `${baseClass}__label-title`,
        label: "Name",
        placeholder: "Label name",
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    );
  }), renderDefinitionField((disabled) => /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      parseTarget: true,
      name: "description",
      onChange: onFormChange,
      onBlur: handleBlur,
      value: description,
      disabled,
      inputClassName: `${baseClass}__label-description`,
      label: "Description",
      type: "textarea",
      placeholder: "Label description (optional)",
      inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
    }
  )), immutableFields.length > 0 ? /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__help-text` }, generateDescriptionHelpText(immutableFields)) : null, teamName ? /* @__PURE__ */ react.createElement(TeamNameField_TeamNameField, { name: teamName }) : null, additionalFields, /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, gitOpsLocksDefinitionOnly ? renderSaveButton() : /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      entityType: "labels",
      renderChildren: renderSaveButton
    }
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")));
};
/* harmony default export */ var LabelForm_LabelForm = (LabelForm);

;// ./frontend/pages/labels/components/LabelForm/index.ts



// EXTERNAL MODULE: ./frontend/pages/labels/components/PlatformField/index.ts + 1 modules
var PlatformField = __webpack_require__(11894);
;// ./frontend/pages/labels/components/DynamicLabelForm/DynamicLabelForm.tsx

var DynamicLabelForm_defProp = Object.defineProperty;
var DynamicLabelForm_defProps = Object.defineProperties;
var DynamicLabelForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DynamicLabelForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DynamicLabelForm_hasOwnProp = Object.prototype.hasOwnProperty;
var DynamicLabelForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var DynamicLabelForm_defNormalProp = (obj, key, value) => key in obj ? DynamicLabelForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DynamicLabelForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DynamicLabelForm_hasOwnProp.call(b, prop))
      DynamicLabelForm_defNormalProp(a, prop, b[prop]);
  if (DynamicLabelForm_getOwnPropSymbols)
    for (var prop of DynamicLabelForm_getOwnPropSymbols(b)) {
      if (DynamicLabelForm_propIsEnum.call(b, prop))
        DynamicLabelForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DynamicLabelForm_spreadProps = (a, b) => DynamicLabelForm_defProps(a, DynamicLabelForm_getOwnPropDescs(b));







const DynamicLabelForm_baseClass = "dynamic-label-form";
const DynamicLabelForm = ({
  defaultName = "",
  defaultDescription = "",
  defaultQuery = "",
  defaultPlatform = "",
  isEditing = false,
  showOpenSidebarButton = false,
  onOpenSidebar,
  onOsqueryTableSelect,
  teamName,
  onSave,
  onCancel
}) => {
  const [query, setQuery] = (0,react.useState)(defaultQuery);
  const [platform, setPlatform] = (0,react.useState)(defaultPlatform);
  const [queryError, setQueryError] = (0,react.useState)(null);
  const debounceValidateSQL = (0,index_module/* useDebouncedCallback */.YQ)((queryString) => {
    const { error } = (0,validate_query/* validateQuery */.B4)(queryString);
    if (query === "" || error === "") {
      setQueryError(null);
    } else {
      setQueryError(error);
    }
  }, 500);
  const onQueryChange = (newQuery) => {
    setQuery(newQuery);
    debounceValidateSQL(newQuery);
  };
  const onSaveForm = (labelFormData, labelFormDataValid) => {
    const { error } = (0,validate_query/* validateQuery */.B4)(query);
    if (error) {
      setQueryError(error);
    } else if (labelFormDataValid) {
      onSave(DynamicLabelForm_spreadProps(DynamicLabelForm_spreadValues({}, labelFormData), { query, platform }));
    }
  };
  const renderLabelComponent = () => {
    if (!showOpenSidebarButton) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        onClick: onOpenSidebar,
        icon: "info",
        iconPosition: "right"
      },
      "Schema"
    );
  };
  const onLoad = (editor) => {
    editor.setOptions({
      enableMultiselect: false
      // Disables command + click creating multiple cursors
    });
    editor.on("linkClick", (data) => {
      const { type, value } = data.token;
      if (type === "osquery-token" && onOsqueryTableSelect) {
        return onOsqueryTableSelect(value);
      }
      return false;
    });
  };
  const onChangePlatform = (value) => {
    setPlatform(value);
  };
  return /* @__PURE__ */ react.createElement("div", { className: DynamicLabelForm_baseClass }, /* @__PURE__ */ react.createElement(
    LabelForm_LabelForm,
    {
      defaultName,
      defaultDescription,
      teamName,
      onSave: onSaveForm,
      onCancel,
      immutableFields: teamName ? ["fleets", "queries", "platforms"] : ["queries", "platforms"],
      additionalFields: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        SQLEditor/* default */.A,
        {
          error: queryError,
          name: "query",
          onChange: onQueryChange,
          value: query,
          label: "Query",
          labelActionComponent: renderLabelComponent(),
          readOnly: isEditing,
          onLoad,
          wrapperClassName: `${DynamicLabelForm_baseClass}__text-editor-wrapper form-field`,
          wrapEnabled: true,
          enableCopy: isEditing
        }
      ), /* @__PURE__ */ react.createElement(
        PlatformField/* default */.A,
        {
          platform,
          isEditing,
          onChange: onChangePlatform
        }
      ))
    }
  ));
};
/* harmony default export */ var DynamicLabelForm_DynamicLabelForm = (DynamicLabelForm);

;// ./frontend/pages/labels/components/DynamicLabelForm/index.ts



// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/TargetsInput/index.ts + 1 modules
var TargetsInput = __webpack_require__(70194);
// EXTERNAL MODULE: ./frontend/services/entities/targets.ts + 1 modules
var targets = __webpack_require__(26815);
// EXTERNAL MODULE: ./frontend/pages/labels/components/ManualLabelForm/LabelHostTargetTableConfig.tsx
var LabelHostTargetTableConfig = __webpack_require__(51285);
;// ./frontend/pages/labels/components/ManualLabelForm/ManualLabelForm.tsx

var ManualLabelForm_defProp = Object.defineProperty;
var ManualLabelForm_defProps = Object.defineProperties;
var ManualLabelForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ManualLabelForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ManualLabelForm_hasOwnProp = Object.prototype.hasOwnProperty;
var ManualLabelForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var ManualLabelForm_defNormalProp = (obj, key, value) => key in obj ? ManualLabelForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ManualLabelForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ManualLabelForm_hasOwnProp.call(b, prop))
      ManualLabelForm_defNormalProp(a, prop, b[prop]);
  if (ManualLabelForm_getOwnPropSymbols)
    for (var prop of ManualLabelForm_getOwnPropSymbols(b)) {
      if (ManualLabelForm_propIsEnum.call(b, prop))
        ManualLabelForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ManualLabelForm_spreadProps = (a, b) => ManualLabelForm_defProps(a, ManualLabelForm_getOwnPropDescs(b));









const ManualLabelForm_baseClass = "ManualLabelForm";
const LABEL_TARGET_HOSTS_INPUT_LABEL = "Select hosts";
const LABEL_TARGET_HOSTS_INPUT_PLACEHOLDER = "Search name, hostname, or serial number";
const DEBOUNCE_DELAY = 500;
const LABEL_YAML_DOCS_URL = "https://fleetdm.com/docs/configuration/yaml-files#labels";
const ManualLabelForm = ({
  defaultName = "",
  defaultDescription = "",
  defaultTargetedHosts = [],
  teamName,
  onSave,
  onCancel
}) => {
  const { gitOpsModeEnabled: labelsGitOpsManaged } = (0,useGitOpsMode/* default */.A)("labels");
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = (0,react.useState)("");
  const [isDebouncing, setIsDebouncing] = (0,react.useState)(false);
  const [targetedHosts, setTargetedHosts] = (0,react.useState)(
    defaultTargetedHosts
  );
  const targetdHostsIds = targetedHosts.map((host) => host.id);
  const debounceSearch = (0,index_module/* useDebouncedCallback */.YQ)(
    (search) => {
      setDebouncedSearchQuery(search);
      setIsDebouncing(false);
    },
    DEBOUNCE_DELAY,
    { trailing: true }
  );
  (0,react.useEffect)(() => {
    setIsDebouncing(true);
    debounceSearch(searchQuery);
  }, [debounceSearch, searchQuery]);
  const {
    data: searchResults,
    isLoading: isLoadingSearchResults,
    isError: isErrorSearchResults
  } = (0,es.useQuery)(
    [
      {
        scope: "labels-targets-search",
        query: debouncedSearchQuery,
        excludedHostIds: targetdHostsIds
      }
    ],
    ({ queryKey }) => {
      const { query, excludedHostIds } = queryKey[0];
      return targets/* default */.A.search({
        query: query != null ? query : "",
        excluded_host_ids: excludedHostIds != null ? excludedHostIds : null
      });
    },
    {
      select: (data) => data.hosts,
      enabled: searchQuery !== ""
    }
  );
  const onHostSelect = (row) => {
    setTargetedHosts((prevHosts) => prevHosts.concat(row.original));
    setSearchQuery("");
  };
  const onHostRemove = (row) => {
    setTargetedHosts(
      (prevHosts) => prevHosts.filter((h) => h.id !== row.original.id)
    );
  };
  const onSaveNewLabel = (labelFormData, labelFormDataValid) => {
    if (labelFormDataValid) {
      onSave(ManualLabelForm_spreadProps(ManualLabelForm_spreadValues({}, labelFormData), { targetedHosts }));
    }
  };
  const onChangeSearchQuery = (value) => {
    setSearchQuery(value);
  };
  const resultsTableConfig = (0,LabelHostTargetTableConfig/* generateTableHeaders */.h)();
  const selectedHostsTableConfig = (0,LabelHostTargetTableConfig/* generateTableHeaders */.h)(onHostRemove);
  return /* @__PURE__ */ react.createElement("div", { className: ManualLabelForm_baseClass }, /* @__PURE__ */ react.createElement(
    LabelForm_LabelForm,
    {
      defaultName,
      defaultDescription,
      teamName,
      onCancel,
      onSave: onSaveNewLabel,
      immutableFields: teamName ? ["fleets"] : [],
      gitOpsLocksDefinitionOnly: true,
      additionalFields: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        TargetsInput/* default */.A,
        {
          label: LABEL_TARGET_HOSTS_INPUT_LABEL,
          placeholder: LABEL_TARGET_HOSTS_INPUT_PLACEHOLDER,
          searchText: searchQuery,
          searchResultsTableConfig: resultsTableConfig,
          selectedHostsTableConifg: selectedHostsTableConfig,
          isTargetsLoading: isLoadingSearchResults || isDebouncing,
          hasFetchError: isErrorSearchResults,
          searchResults: searchResults != null ? searchResults : [],
          targetedHosts,
          setSearchText: onChangeSearchQuery,
          handleRowSelect: onHostSelect
        }
      ), labelsGitOpsManaged && /* @__PURE__ */ react.createElement("span", { className: "form-field__help-text" }, "Omitting ", /* @__PURE__ */ react.createElement("b", null, "hosts"), " in YAML preserves these hosts. Setting", " ", /* @__PURE__ */ react.createElement("b", null, "hosts"), " in YAML replaces them on the next GitOps run.", " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          newTab: true,
          text: "Learn more",
          url: LABEL_YAML_DOCS_URL
        }
      )))
    }
  ));
};
/* harmony default export */ var ManualLabelForm_ManualLabelForm = (ManualLabelForm);

;// ./frontend/pages/labels/components/ManualLabelForm/index.ts



// EXTERNAL MODULE: ./frontend/pages/labels/ManageLabelsPage/LabelsTable/LabelsTableConfig.tsx
var LabelsTableConfig = __webpack_require__(27313);
;// ./frontend/pages/labels/EditLabelPage/EditLabelPage.tsx

var EditLabelPage_defProp = Object.defineProperty;
var EditLabelPage_defProps = Object.defineProperties;
var EditLabelPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EditLabelPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditLabelPage_hasOwnProp = Object.prototype.hasOwnProperty;
var EditLabelPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditLabelPage_defNormalProp = (obj, key, value) => key in obj ? EditLabelPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditLabelPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditLabelPage_hasOwnProp.call(b, prop))
      EditLabelPage_defNormalProp(a, prop, b[prop]);
  if (EditLabelPage_getOwnPropSymbols)
    for (var prop of EditLabelPage_getOwnPropSymbols(b)) {
      if (EditLabelPage_propIsEnum.call(b, prop))
        EditLabelPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var EditLabelPage_spreadProps = (a, b) => EditLabelPage_defProps(a, EditLabelPage_getOwnPropDescs(b));
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















const EditLabelPage_baseClass = "edit-label-page";
const EditLabelPage = ({ routeParams, router }) => {
  const { currentUser } = (0,react.useContext)(app/* AppContext */.BR);
  const { gitOpsModeEnabled: labelsGitOpsManaged } = (0,useGitOpsMode/* default */.A)("labels");
  const queryClient = (0,es.useQueryClient)();
  const labelId = parseInt(routeParams.label_id, 10);
  const {
    data: label,
    isLoading: isLoadingLabel,
    isError: isErrorLabel
  } = (0,es.useQuery)(
    ["label", labelId, currentUser],
    () => labels/* default */.Ay.getLabel(labelId),
    EditLabelPage_spreadProps(EditLabelPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      select: (data) => data.label,
      onSuccess: (data) => {
        if (data.label_membership_type === "host_vitals") {
          ToastNotification/* notify */.me.error(
            "Host vitals labels are not editable. Delete the label and re-add it to make changes."
          );
          router.replace(paths/* default */.A.MANAGE_LABELS);
          return;
        }
        if (currentUser && !(0,LabelsTableConfig/* hasEditPermission */.WW)(currentUser, data)) {
          ToastNotification/* notify */.me.error("You do not have permission to edit this label.");
          router.replace(paths/* default */.A.MANAGE_LABELS);
        }
      }
    })
  );
  const {
    data: targetedHosts,
    isLoading: isLoadingHosts,
    isError: isErrorHosts
  } = (0,es.useQuery)(
    ["hosts", labelId],
    () => {
      return labels/* default */.Ay.getHostsInLabel(labelId);
    },
    EditLabelPage_spreadProps(EditLabelPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      select: (data) => data.hosts,
      enabled: (label == null ? void 0 : label.label_membership_type) === "manual"
    })
  );
  const onCancelEdit = () => {
    router.goBack();
  };
  const onUpdateLabel = (formData) => __async(null, null, function* () {
    const membershipOnly = labelsGitOpsManaged;
    try {
      yield labels/* default */.Ay.update(labelId, formData, { membershipOnly });
      ToastNotification/* notify */.me.success("Label updated successfully.");
      queryClient.invalidateQueries(["label", labelId, currentUser]);
      queryClient.invalidateQueries(["hosts", labelId]);
      queryClient.invalidateQueries(["labels"]);
    } catch (error) {
      const status = error.status;
      let errorMessage = "Couldn't edit label. Please try again.";
      if (status === 409) {
        errorMessage = "Couldn't edit label: A label with this name already exists.";
      } else if (status === 422) {
        const reason = (0,errors/* getErrorReason */.F3)(error);
        if (reason) {
          errorMessage = `Couldn't edit label: ${reason}. Please try again.`;
        }
      }
      ToastNotification/* notify */.me.error(errorMessage, { response: error });
    }
  });
  const renderContent = () => {
    if (isLoadingLabel || isLoadingHosts) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isErrorLabel || isErrorHosts) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    if (!label) return null;
    if (label.label_type === "builtin") {
      return /* @__PURE__ */ react.createElement(
        DataError/* default */.A,
        {
          description: "Built in labels cannot be edited",
          excludeIssueLink: true
        }
      );
    }
    return label.label_membership_type === "dynamic" ? /* @__PURE__ */ react.createElement(
      DynamicLabelForm_DynamicLabelForm,
      {
        defaultName: label.name,
        defaultDescription: label.description,
        defaultQuery: label.query,
        defaultPlatform: label.platform,
        teamName: label.team_name || null,
        isEditing: true,
        onSave: onUpdateLabel,
        onCancel: onCancelEdit
      }
    ) : /* @__PURE__ */ react.createElement(
      ManualLabelForm_ManualLabelForm,
      {
        key: `${labelId}-${(targetedHosts || []).map((h) => h.id).sort((a, b) => a - b).join(",")}`,
        defaultName: label.name,
        defaultDescription: label.description,
        defaultTargetedHosts: targetedHosts,
        teamName: label.team_name || null,
        onSave: onUpdateLabel,
        onCancel: onCancelEdit
      }
    );
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: EditLabelPage_baseClass }, /* @__PURE__ */ react.createElement("h1", { className: "page-header" }, "Edit label"), renderContent()));
};
/* harmony default export */ var EditLabelPage_EditLabelPage = (EditLabelPage);

;// ./frontend/pages/labels/EditLabelPage/index.ts




/***/ }),

/***/ 27313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A$: function() { return /* binding */ generateTableHeaders; },
/* harmony export */   WH: function() { return /* binding */ generateDataSet; },
/* harmony export */   WW: function() { return /* binding */ hasEditPermission; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var components_ActionsDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var components_TableContainer_DataTable_HeaderCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40925);
/* harmony import */ var components_TableContainer_DataTable_TextCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75679);
/* harmony import */ var components_TableContainer_DataTable_TooltipTruncatedTextCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16240);
/* harmony import */ var components_ViewAllHostsLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2837);
/* harmony import */ var interfaces_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95880);
/* harmony import */ var utilities_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9467);
/* harmony import */ var utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95681);










const hasEditPermission = (currentUser, label) => {
  return (
    // global permissions
    (0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isGlobalAdmin */ .pS)(currentUser) || (0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isGlobalMaintainer */ .ik)(currentUser) || (0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isGlobalTechnician */ .ig)(currentUser) || // author permission
    label.author_id === currentUser.id && ((0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isAnyTeamMaintainerOrTeamAdmin */ .HJ)(currentUser) || (0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isAnyTeamTechnician */ .Kp)(currentUser)) || // team permission
    label.team_id != null && ((0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isTeamAdmin */ .TY)(currentUser, label.team_id) || (0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isTeamMaintainer */ .Mo)(currentUser, label.team_id) || (0,utilities_permissions_permissions__WEBPACK_IMPORTED_MODULE_8__/* .isTeamTechnician */ .kI)(currentUser, label.team_id))
  );
};
const generateActionDropdownOptions = (currentUser, label, labelsGitOpsManaged, repoURL) => {
  const options = [
    {
      label: "View all hosts",
      disabled: false,
      value: "view_hosts"
    }
  ];
  const gitOpsTooltip = labelsGitOpsManaged && repoURL ? (0,utilities_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getGitOpsModeTipContent */ .qV)(repoURL) : void 0;
  if (hasEditPermission(currentUser, label)) {
    if (label.label_membership_type !== "host_vitals") {
      options.push({
        label: "Edit",
        disabled: false,
        value: "edit"
      });
    }
    options.push({
      label: "Delete",
      disabled: labelsGitOpsManaged,
      value: "delete",
      tooltipContent: gitOpsTooltip
    });
  }
  return options;
};
const generateTableHeaders = (currentUser, onClickAction, labelsGitOpsManaged = false, repoURL) => {
  return [
    {
      title: "Name",
      Header: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_TableContainer_DataTable_HeaderCell__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "name",
      disableSortBy: false,
      Cell: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TableContainer_DataTable_TooltipTruncatedTextCell__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, { value: cellProps.cell.value })
    },
    {
      title: "Description",
      Header: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_TableContainer_DataTable_HeaderCell__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "description",
      Cell: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TableContainer_DataTable_TooltipTruncatedTextCell__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, { value: cellProps.cell.value || "" })
    },
    {
      title: "Type",
      Header: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_TableContainer_DataTable_HeaderCell__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        {
          value: cellProps.column.title,
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "label_membership_type",
      Cell: (cellProps) => {
        const type = cellProps.row.original.label_membership_type;
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TableContainer_DataTable_TextCell__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, { value: interfaces_label__WEBPACK_IMPORTED_MODULE_6__/* .LabelMembershipTypeToDisplayCopy */ .Pe[type] });
      }
    },
    {
      title: "Actions",
      Header: "",
      disableSortBy: true,
      accessor: "actions",
      Cell: (cellProps) => {
        const label = cellProps.row.original;
        const dropdownOptions = generateActionDropdownOptions(
          currentUser,
          label,
          labelsGitOpsManaged,
          repoURL
        );
        if (dropdownOptions.length === 1 && dropdownOptions[0].value === "view_hosts") {
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ViewAllHostsLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, { platformLabelId: label.id, rowHover: true });
        }
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          components_ActionsDropdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
          {
            options: dropdownOptions,
            onChange: (value) => onClickAction(value, label),
            placeholder: "Actions",
            menuAlign: "right",
            variant: "secondary"
          }
        );
      }
    }
  ];
};
const generateDataSet = (labels) => labels.filter((label) => label.label_type !== "builtin");



/***/ }),

/***/ 37940:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ManageLabelsPage_ManageLabelsPage; }
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
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/pages/hosts/ManageHostsPage/components/DeleteLabelModal/index.ts + 1 modules
var DeleteLabelModal = __webpack_require__(59105);
// EXTERNAL MODULE: ./frontend/pages/labels/helpers.ts
var helpers = __webpack_require__(67021);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/pages/labels/ManageLabelsPage/LabelsTable/LabelsTableConfig.tsx
var LabelsTableConfig = __webpack_require__(27313);
;// ./frontend/pages/labels/ManageLabelsPage/LabelsTable/LabelsTable.tsx






const baseClass = "labels-table";
const LabelsTable = ({
  labels,
  onClickAction,
  currentUser,
  labelsGitOpsManaged = false,
  repoURL
}) => {
  const tableHeaders = (0,LabelsTableConfig/* generateTableHeaders */.A$)(
    currentUser,
    onClickAction,
    labelsGitOpsManaged,
    repoURL
  );
  const tableData = (0,LabelsTableConfig/* generateDataSet */.WH)(labels);
  return /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      className: baseClass,
      isLoading: false,
      columnConfigs: tableHeaders,
      data: tableData,
      defaultSortHeader: "name",
      defaultSortDirection: "asc",
      resultsTitle: "labels",
      showMarkAllPages: false,
      isAllPagesSelected: false,
      isClientSidePagination: true,
      renderCount: () => tableData.length ? /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "labels", count: tableData.length }) : null,
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No labels",
          info: "Labels you create will appear here."
        }
      )
    }
  );
};
/* harmony default export */ var LabelsTable_LabelsTable = ((0,react.memo)(LabelsTable));

;// ./frontend/pages/labels/ManageLabelsPage/LabelsTable/index.ts



;// ./frontend/pages/labels/ManageLabelsPage/ManageLabelsPage.tsx

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















const ManageLabelsPage_baseClass = "manage-labels-page";
const ManageLabelsPage = ({ router }) => {
  const {
    currentUser,
    isGlobalAdmin,
    isGlobalMaintainer,
    isAnyTeamMaintainerOrTeamAdmin,
    isGlobalTechnician,
    isAnyTeamTechnician
  } = (0,react.useContext)(app/* AppContext */.BR);
  const { gitOpsModeEnabled: labelsGitOpsManaged, repoURL } = (0,useGitOpsMode/* default */.A)(
    "labels"
  );
  const [labelToDelete, setLabelToDelete] = (0,react.useState)(null);
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const { data: labels, isLoading, error, refetch } = (0,es.useQuery)(["labels"], () => entities_labels/* default */.Ay.loadAll(), {
    select: (data) => data.labels
  });
  const onCreateLabelClick = (0,react.useCallback)(() => {
    router.push(paths/* default */.A.NEW_LABEL);
  }, [router]);
  const onConfirmDelete = (0,react.useCallback)(() => __async(null, null, function* () {
    if (labelToDelete) {
      try {
        setIsUpdating(true);
        yield entities_labels/* default */.Ay.destroy(labelToDelete);
        ToastNotification/* notify */.me.success(`Successfully deleted ${labelToDelete.name}.`);
        refetch();
      } catch (err) {
        ToastNotification/* notify */.me.error((0,helpers/* default */.A)(err), { response: err });
      } finally {
        setLabelToDelete(null);
        setIsUpdating(false);
      }
    }
  }), [labelToDelete, refetch]);
  const onClickAction = (0,react.useCallback)(
    (action, label) => {
      switch (action) {
        case "view_hosts":
          router.push(paths/* default */.A.MANAGE_HOSTS_LABEL(label.id));
          break;
        case "edit":
          router.push(paths/* default */.A.EDIT_LABEL(label.id));
          break;
        case "delete":
          setLabelToDelete(label);
          break;
        default:
      }
    },
    [router]
  );
  const canAddLabel = isGlobalAdmin || isGlobalMaintainer || isAnyTeamMaintainerOrTeamAdmin || isGlobalTechnician || isAnyTeamTechnician;
  const renderTable = (0,react.useCallback)(() => {
    if (isLoading || !currentUser || !labels) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (error) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(
      LabelsTable_LabelsTable,
      {
        currentUser,
        labels,
        onClickAction,
        labelsGitOpsManaged,
        repoURL
      }
    );
  }, [currentUser, error, isLoading, labels, onClickAction]);
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: ManageLabelsPage_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${ManageLabelsPage_baseClass}__header-wrap` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageLabelsPage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageLabelsPage_baseClass}__text` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageLabelsPage_baseClass}__title` }, /* @__PURE__ */ react.createElement("h1", null, "Labels"))), canAddLabel && /* @__PURE__ */ react.createElement("div", { className: `${ManageLabelsPage_baseClass}__action-button-container` }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${ManageLabelsPage_baseClass}__create-button`,
      onClick: onCreateLabelClick
    },
    "Add label"
  ))), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "Group hosts for targeting and filtering." })), renderTable(), labelToDelete && /* @__PURE__ */ react.createElement(
    DeleteLabelModal/* default */.A,
    {
      onSubmit: onConfirmDelete,
      onCancel: () => {
        setLabelToDelete(null);
      },
      isUpdatingLabel: isUpdating
    }
  ));
};
/* harmony default export */ var ManageLabelsPage_ManageLabelsPage = (ManageLabelsPage);

;// ./frontend/pages/labels/ManageLabelsPage/index.ts




/***/ }),

/***/ 30529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ NewLabelPage_NewLabelPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/use-debounce/dist/index.module.js
var index_module = __webpack_require__(81591);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Dropdown/index.js + 2 modules
var Dropdown = __webpack_require__(79973);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Radio/index.ts
var Radio = __webpack_require__(48862);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_query/index.ts
var validate_query = __webpack_require__(22184);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/side_panels/QuerySidePanel/index.ts + 15 modules
var QuerySidePanel = __webpack_require__(37863);
// EXTERNAL MODULE: ./frontend/components/SidePanelContent/index.ts + 1 modules
var SidePanelContent = __webpack_require__(90125);
// EXTERNAL MODULE: ./frontend/components/SidePanelPage/index.ts + 1 modules
var SidePanelPage = __webpack_require__(56118);
// EXTERNAL MODULE: ./frontend/components/SQLEditor/index.tsx
var SQLEditor = __webpack_require__(98220);
// EXTERNAL MODULE: ./frontend/components/TargetsInput/index.ts + 1 modules
var TargetsInput = __webpack_require__(70194);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/context/query.tsx
var query = __webpack_require__(83535);
// EXTERNAL MODULE: ./frontend/hooks/useToggleSidePanel.ts
var useToggleSidePanel = __webpack_require__(7714);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/interfaces/label.ts
var label = __webpack_require__(95880);
// EXTERNAL MODULE: ./frontend/pages/labels/components/ManualLabelForm/LabelHostTargetTableConfig.tsx
var LabelHostTargetTableConfig = __webpack_require__(51285);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/custom_host_vitals.ts
var custom_host_vitals = __webpack_require__(25837);
// EXTERNAL MODULE: ./frontend/services/entities/idp.ts
var idp = __webpack_require__(83947);
// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/services/entities/targets.ts + 1 modules
var targets = __webpack_require__(26815);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/pages/labels/components/PlatformField/index.ts + 1 modules
var PlatformField = __webpack_require__(11894);
;// ./frontend/pages/labels/NewLabelPage/helpers.ts


const buildCriterionOptionValue = (customHostVitalId) => `${label/* CUSTOM_HOST_VITAL_CRITERION */.Qj}:${customHostVitalId}`;
const parseCriterionOptionValue = (optionValue) => {
  if (optionValue.startsWith(`${label/* CUSTOM_HOST_VITAL_CRITERION */.Qj}:`)) {
    const parsedId = Number(optionValue.split(":")[1]);
    return {
      vital: label/* CUSTOM_HOST_VITAL_CRITERION */.Qj,
      customHostVitalId: Number.isFinite(parsedId) ? parsedId : void 0
    };
  }
  return { vital: optionValue };
};
const getVitalValuePlaceholder = (vital) => {
  if (vital === "end_user_idp_group") {
    return "IT admins";
  }
  if (vital === "end_user_idp_department") {
    return "Engineering";
  }
  return "Value";
};
const getCriterionHelpText = (vital) => {
  if (vital === "end_user_idp_group") {
    return "Label criteria is based on the end user's IdP group.";
  }
  if (vital === "end_user_idp_department") {
    return "Label criteria is based on the end user's IdP department.";
  }
  return "Label criteria is based on the selected custom host vital.";
};
const FORM_VALIDATIONS = {
  name: {
    validations: [
      {
        name: "required",
        isValid: (formData) => formData.name.trim().length > 0,
        message: "Label name must be present"
      }
    ]
  },
  labelQuery: {
    validations: [
      {
        name: "requiredForDynamic",
        isValid: (formData) => {
          if (formData.type !== "dynamic") {
            return true;
          }
          return formData.labelQuery.trim().length > 0;
        },
        message: "Query text must be present"
      }
    ]
  },
  vitalValue: {
    validations: [
      {
        name: "requiredForHostVitals",
        isValid: (formData) => {
          if (formData.type !== "host_vitals") {
            return true;
          }
          return formData.vitalValue.trim().length > 0;
        },
        message: "Label criteria must be completed"
      },
      {
        // A custom-vital criterion is incomplete without a selected definition id.
        name: "customVitalRequiresId",
        isValid: (formData) => {
          if (formData.type !== "host_vitals" || formData.vital !== label/* CUSTOM_HOST_VITAL_CRITERION */.Qj) {
            return true;
          }
          return formData.customHostVitalId != null;
        },
        message: "Label criteria must be completed"
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
const validateNewLabelFormData = (formData) => {
  const formValidation = { isValid: true };
  Object.keys(FORM_VALIDATIONS).forEach((objKey) => {
    const failedValidation = FORM_VALIDATIONS[objKey].validations.find(
      (validation) => !validation.isValid(formData, formValidation)
    );
    if (!failedValidation) {
      switch (objKey) {
        case "name":
          formValidation.name = { isValid: true };
          break;
        case "labelQuery":
          formValidation.labelQuery = { isValid: true };
          break;
        case "vitalValue":
          formValidation.criteria = { isValid: true };
          break;
        default: {
          break;
        }
      }
    } else {
      formValidation.isValid = false;
      const message = getErrorMessage(formData, failedValidation.message);
      switch (objKey) {
        case "name":
          formValidation.name = { isValid: false, message };
          break;
        case "labelQuery":
          formValidation.labelQuery = { isValid: false, message };
          break;
        case "vitalValue":
          formValidation.criteria = { isValid: false, message };
          break;
        default: {
          break;
        }
      }
    }
  });
  return formValidation;
};

;// ./frontend/pages/labels/NewLabelPage/NewLabelPage.tsx

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






























const IDP_CRITERIA = [
  { label: "Identity provider (IdP) group", value: "end_user_idp_group" },
  { label: "IdP department", value: "end_user_idp_department" }
];
const baseClass = "new-label-page";
const LABEL_TARGET_HOSTS_INPUT_LABEL = "Select hosts";
const LABEL_TARGET_HOSTS_INPUT_PLACEHOLDER = "Search name, hostname, or serial number";
const DEBOUNCE_DELAY = 500;
const DEFAULT_DYNAMIC_QUERY = "SELECT 1 FROM os_version WHERE major >= 13;";
const NewLabelPage = ({
  router,
  location
}) => {
  var _a, _b;
  const { selectedOsqueryTable, setSelectedOsqueryTable } = (0,react.useContext)(
    query/* QueryContext */.c
  );
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const { isSidePanelOpen, setSidePanelOpen } = (0,useToggleSidePanel/* default */.A)(true);
  const [showOpenSidebarButton, setShowOpenSidebarButton] = (0,react.useState)(false);
  const onCloseSidebar = () => {
    setSidePanelOpen(false);
    setShowOpenSidebarButton(true);
  };
  const onOpenSidebar = () => {
    setSidePanelOpen(true);
    setShowOpenSidebarButton(false);
  };
  const onOsqueryTableSelect = (tableName) => {
    setSelectedOsqueryTable(tableName);
  };
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const [formData, setFormData] = (0,react.useState)({
    name: "",
    description: "",
    type: "dynamic",
    // default type
    // dynamic-specific
    labelQuery: DEFAULT_DYNAMIC_QUERY,
    platform: "",
    // host_vitals-specific
    vital: "end_user_idp_group",
    vitalValue: "",
    // manual-specific
    targetedHosts: []
  });
  const [formErrors, setFormErrors] = (0,react.useState)({
    isValid: true
  });
  const {
    name,
    description,
    type,
    labelQuery,
    platform,
    vital,
    vitalValue,
    customHostVitalId,
    targetedHosts
  } = formData;
  const [targetsSearchQuery, setTargetsSearchQuery] = (0,react.useState)("");
  const [
    debouncedTargetsSearchQuery,
    setDebouncedTargetsSearchQuery
  ] = (0,react.useState)("");
  const [isDebouncingTargetsSearch, setIsDebouncingTargetsSearch] = (0,react.useState)(
    false
  );
  const debounceSearch = (0,index_module/* useDebouncedCallback */.YQ)(
    (search) => {
      setDebouncedTargetsSearchQuery(search);
      setIsDebouncingTargetsSearch(false);
    },
    DEBOUNCE_DELAY,
    { trailing: true }
  );
  (0,react.useEffect)(() => {
    setIsDebouncingTargetsSearch(true);
    debounceSearch(targetsSearchQuery);
  }, [debounceSearch, targetsSearchQuery]);
  const {
    data: targetsSearchResults,
    isLoading: isLoadingTargetsSearchResults,
    isError: isErrorTargetsSearchResults
  } = (0,es.useQuery)(
    [
      {
        scope: "labels-targets-search",
        query: debouncedTargetsSearchQuery,
        excludedHostIds: targetedHosts.map((host) => host.id)
      }
    ],
    ({ queryKey }) => {
      const { query, excludedHostIds } = queryKey[0];
      return targets/* default */.A.search({
        query: query != null ? query : "",
        excluded_host_ids: excludedHostIds != null ? excludedHostIds : null
      });
    },
    {
      select: (data) => data.hosts,
      enabled: type === "manual" && !!targetsSearchQuery
    }
  );
  const { data: scimIdPDetails } = (0,es.useQuery)(
    ["scim_details"],
    () => idp/* default */.A.getSCIMDetails(),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier
    })
  );
  const idpConfigured = !!((_a = scimIdPDetails == null ? void 0 : scimIdPDetails.last_request) == null ? void 0 : _a.requested_at);
  const customHostVitalsParams = {};
  const { data: customHostVitalsData } = (0,es.useQuery)(
    ["custom_host_vitals", customHostVitalsParams],
    () => custom_host_vitals/* default */.A.getCustomHostVitals(customHostVitalsParams),
    __spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL)
  );
  const customHostVitals = (_b = customHostVitalsData == null ? void 0 : customHostVitalsData.custom_host_vitals) != null ? _b : [];
  const hasCustomHostVitals = customHostVitals.length > 0;
  let hostVitalsTooltipContent;
  if (!idpConfigured && !hasCustomHostVitals) {
    hostVitalsTooltipContent = isPremiumTier ? /* @__PURE__ */ react.createElement(react.Fragment, null, "To use host vitals labels, configure your IdP in integration settings or add a custom host vital.") : /* @__PURE__ */ react.createElement(react.Fragment, null, "To use host vitals labels, add a custom host vital. Identity provider (IdP) group and department criteria are available in Mesh Premium.");
  }
  const criterionOptions = [
    ...idpConfigured ? IDP_CRITERIA : [],
    ...customHostVitals.map((customHostVital) => ({
      label: customHostVital.name,
      value: buildCriterionOptionValue(customHostVital.id)
    }))
  ];
  (0,react.useEffect)(() => {
    if (location.pathname.includes("dynamic")) {
      router.replace(paths/* default */.A.NEW_LABEL);
    }
    if (location.pathname.includes("manual")) {
      setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
        type: "manual"
      }));
      router.replace(paths/* default */.A.NEW_LABEL);
    }
  }, [location.pathname, router]);
  const onInputChange = ({
    name: fieldName,
    value
  }) => {
    const newFormData = __spreadProps(__spreadValues({}, formData), { [fieldName]: value });
    setFormData(newFormData);
    const fullValidation = validateNewLabelFormData(newFormData);
    setFormErrors((prev) => {
      var _a2, _b2;
      const next = __spreadProps(__spreadValues({}, prev), { isValid: true });
      if (prev.name) next.name = prev.name;
      if (prev.labelQuery) next.labelQuery = prev.labelQuery;
      if (prev.criteria) next.criteria = prev.criteria;
      if (fieldName === "name") {
        if (prev.name && ((_a2 = fullValidation.name) == null ? void 0 : _a2.isValid)) {
          next.name = void 0;
        }
      } else if (fieldName === "vitalValue") {
        if (prev.criteria && ((_b2 = fullValidation.criteria) == null ? void 0 : _b2.isValid)) {
          next.criteria = void 0;
        }
      }
      const fields = [next.name, next.labelQuery, next.criteria];
      next.isValid = fields.every((f) => !f || f.isValid);
      return next;
    });
  };
  const onCriterionChange = (optionValue) => {
    const {
      vital: nextVital,
      customHostVitalId: nextId
    } = parseCriterionOptionValue(optionValue);
    const newFormData = __spreadProps(__spreadValues({}, formData), {
      vital: nextVital,
      customHostVitalId: nextId
    });
    setFormData(newFormData);
    const fullValidation = validateNewLabelFormData(newFormData);
    setFormErrors((prev) => {
      var _a2;
      const next = __spreadProps(__spreadValues({}, prev), { isValid: true });
      if (prev.name) next.name = prev.name;
      if (prev.labelQuery) next.labelQuery = prev.labelQuery;
      if (prev.criteria && ((_a2 = fullValidation.criteria) == null ? void 0 : _a2.isValid)) {
        next.criteria = void 0;
      } else if (prev.criteria) {
        next.criteria = prev.criteria;
      }
      const fields = [next.name, next.labelQuery, next.criteria];
      next.isValid = fields.every((f) => !f || f.isValid);
      return next;
    });
  };
  const onTypeChange = (value) => {
    const nextType = value;
    const newFormData = __spreadProps(__spreadValues({}, formData), {
      type: nextType
    });
    if (nextType === "host_vitals" && !idpConfigured && hasCustomHostVitals) {
      newFormData.vital = label/* CUSTOM_HOST_VITAL_CRITERION */.Qj;
      newFormData.customHostVitalId = customHostVitals[0].id;
    }
    setFormData(newFormData);
    const fullValidation = validateNewLabelFormData(newFormData);
    setFormErrors((prev) => {
      var _a2, _b2, _c;
      const next = __spreadProps(__spreadValues({}, prev), { isValid: true });
      if (prev.name) next.name = (_a2 = fullValidation.name) != null ? _a2 : prev.name;
      if (prev.labelQuery)
        next.labelQuery = (_b2 = fullValidation.labelQuery) != null ? _b2 : prev.labelQuery;
      if (prev.criteria)
        next.criteria = (_c = fullValidation.criteria) != null ? _c : prev.criteria;
      const fields = [next.name, next.labelQuery, next.criteria];
      next.isValid = fields.every((f) => !f || f.isValid);
      return next;
    });
  };
  const onInputBlur = () => {
    setFormErrors(validateNewLabelFormData(formData));
  };
  const onSubmit = (evt) => __async(null, null, function* () {
    evt.preventDefault();
    const fullValidation = validateNewLabelFormData(formData);
    setFormErrors(fullValidation);
    if (!fullValidation.isValid) {
      return;
    }
    setIsUpdating(true);
    try {
      yield labels/* default */.Ay.create(formData);
      ToastNotification/* notify */.me.success("Label added successfully.");
      router.push(paths/* default */.A.MANAGE_LABELS);
    } catch (error) {
      const status = error.status;
      let errorMessage = "Couldn't add label. Please try again.";
      if (status === 409) {
        errorMessage = "Couldn't add label: A label with this name already exists.";
      } else if (status === 422) {
        const reason = (0,errors/* getErrorReason */.F3)(error);
        if (reason) {
          errorMessage = `Couldn't add label: ${reason}. Please try again.`;
        }
      }
      ToastNotification/* notify */.me.error(errorMessage, { response: error });
    }
    setIsUpdating(false);
  });
  const debounceValidateSQL = (0,index_module/* useDebouncedCallback */.YQ)((queryString) => {
    const { error } = (0,validate_query/* validateQuery */.B4)(queryString);
    return error || null;
  }, 500);
  const onQueryChange = (newQuery) => {
    const newFormData = __spreadProps(__spreadValues({}, formData), { labelQuery: newQuery });
    setFormData(newFormData);
    const fullValidation = validateNewLabelFormData(newFormData);
    setFormErrors((prev) => {
      var _a2;
      const next = __spreadProps(__spreadValues({}, prev), { isValid: true });
      if (prev.name) next.name = prev.name;
      if (prev.labelQuery) next.labelQuery = prev.labelQuery;
      if (prev.criteria) next.criteria = prev.criteria;
      if (prev.labelQuery && ((_a2 = fullValidation.labelQuery) == null ? void 0 : _a2.isValid)) {
        next.labelQuery = void 0;
      }
      const fields = [next.name, next.labelQuery, next.criteria];
      next.isValid = fields.every((f) => !f || f.isValid);
      return next;
    });
    debounceValidateSQL(newQuery);
  };
  const onLoadSQLEditor = (editor) => {
    editor.setOptions({
      enableMultiselect: false
      // Disables command + click creating multiple cursors
    });
    editor.on("linkClick", (data) => {
      const { type: type_, value } = data.token;
      if (type_ === "osquery-token" && onOsqueryTableSelect) {
        return onOsqueryTableSelect(value);
      }
      return false;
    });
  };
  const onChangeSearchQuery = (value) => {
    setTargetsSearchQuery(value);
  };
  const onHostSelect = (row) => {
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
      targetedHosts: targetedHosts.concat(row.original)
    }));
    setTargetsSearchQuery("");
  };
  const onHostRemove = (row) => {
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
      targetedHosts: targetedHosts.filter((h) => h.id !== row.original.id)
    }));
  };
  const resultsTableConfig = (0,LabelHostTargetTableConfig/* generateTableHeaders */.h)();
  const selectedHostsTableConfig = (0,LabelHostTargetTableConfig/* generateTableHeaders */.h)(onHostRemove);
  const renderVariableFields = () => {
    var _a2, _b2, _c;
    switch (type) {
      case "dynamic":
        return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
          SQLEditor/* default */.A,
          {
            error: (_a2 = formErrors.labelQuery) == null ? void 0 : _a2.message,
            name: "query",
            onChange: onQueryChange,
            onBlur: onInputBlur,
            value: labelQuery,
            label: "Query",
            labelActionComponent: showOpenSidebarButton ? /* @__PURE__ */ react.createElement(
              Button/* default */.A,
              {
                variant: "subdued",
                onClick: onOpenSidebar,
                icon: "info",
                iconPosition: "right"
              },
              "Schema"
            ) : null,
            onLoad: onLoadSQLEditor,
            wrapperClassName: `${baseClass}__text-editor-wrapper form-field`,
            wrapEnabled: true
          }
        ), /* @__PURE__ */ react.createElement(
          PlatformField/* default */.A,
          {
            platform,
            onChange: (newPlatform) => {
              setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
                platform: newPlatform
              }));
            }
          }
        ));
      case "host_vitals": {
        const selectedCriterionValue = vital === label/* CUSTOM_HOST_VITAL_CRITERION */.Qj && customHostVitalId != null ? buildCriterionOptionValue(customHostVitalId) : vital;
        return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__host_vitals-fields` }, /* @__PURE__ */ react.createElement("label", { className: "form-field__label", htmlFor: "criterion-and-value" }, "Label criteria"), /* @__PURE__ */ react.createElement("span", { id: "criterion-and-value" }, /* @__PURE__ */ react.createElement(
          Dropdown/* default */.A,
          {
            name: "vital",
            onChange: onCriterionChange,
            value: selectedCriterionValue,
            error: (_b2 = formErrors.criteria) == null ? void 0 : _b2.message,
            options: criterionOptions,
            classname: `${baseClass}__criteria-dropdown`,
            wrapperClassName: `${baseClass}__form-field ${baseClass}__form-field--criteria`
          }
        ), /* @__PURE__ */ react.createElement("p", null, "is equal to"), /* @__PURE__ */ react.createElement(
          InputField/* default */.A,
          {
            error: (_c = formErrors.criteria) == null ? void 0 : _c.message,
            name: "vitalValue",
            onChange: onInputChange,
            onBlur: onInputBlur,
            value: vitalValue,
            inputClassName: `${baseClass}__vital-value`,
            placeholder: getVitalValuePlaceholder(vital),
            parseTarget: true
          }
        )), /* @__PURE__ */ react.createElement("span", { className: "form-field__help-text" }, getCriterionHelpText(vital)));
      }
      case "manual":
        return /* @__PURE__ */ react.createElement(
          TargetsInput/* default */.A,
          {
            label: LABEL_TARGET_HOSTS_INPUT_LABEL,
            placeholder: LABEL_TARGET_HOSTS_INPUT_PLACEHOLDER,
            searchText: targetsSearchQuery,
            searchResultsTableConfig: resultsTableConfig,
            selectedHostsTableConifg: selectedHostsTableConfig,
            isTargetsLoading: isLoadingTargetsSearchResults || isDebouncingTargetsSearch,
            hasFetchError: isErrorTargetsSearchResults,
            searchResults: targetsSearchResults != null ? targetsSearchResults : [],
            targetedHosts,
            setSearchText: onChangeSearchQuery,
            handleRowSelect: onHostSelect
          }
        );
      default:
        return null;
    }
  };
  const renderLabelForm = () => {
    var _a2;
    return /* @__PURE__ */ react.createElement("form", { className: `${baseClass}__label-form`, onSubmit }, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        error: (_a2 = formErrors.name) == null ? void 0 : _a2.message,
        name: "name",
        onChange: onInputChange,
        onBlur: onInputBlur,
        value: name,
        inputClassName: `${baseClass}__label-name`,
        label: "Name",
        placeholder: "Label name",
        parseTarget: true,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ), /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        name: "description",
        onChange: onInputChange,
        onBlur: onInputBlur,
        value: description,
        inputClassName: `${baseClass}__label-description`,
        label: "Description",
        type: "textarea",
        placeholder: "Label description (optional)",
        parseTarget: true,
        inputOptions: { maxLength: constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "form-field type-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Type"), /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        className: `${baseClass}__radio-input`,
        label: "Dynamic",
        id: "dynamic",
        checked: type === "dynamic",
        value: "dynamic",
        name: "label-type",
        onChange: onTypeChange
      }
    ), /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        className: `${baseClass}__radio-input`,
        label: "Host vitals",
        id: "host_vitals",
        checked: type === "host_vitals",
        value: "host_vitals",
        name: "label-type",
        onChange: onTypeChange,
        tooltip: hostVitalsTooltipContent,
        disabled: !!hostVitalsTooltipContent
      }
    ), /* @__PURE__ */ react.createElement(
      Radio/* default */.A,
      {
        className: `${baseClass}__radio-input`,
        label: "Manual",
        id: "manual",
        checked: type === "manual",
        value: "manual",
        name: "label-type",
        onChange: onTypeChange
      }
    )), renderVariableFields(), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        entityType: "labels",
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            isLoading: isUpdating,
            disabled: disableChildren || isUpdating || !formErrors.isValid
          },
          "Save"
        )
      }
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: () => {
          router.goBack();
        },
        variant: "secondary",
        disabled: isUpdating
      },
      "Cancel"
    )));
  };
  return /* @__PURE__ */ react.createElement(SidePanelPage/* default */.A, null, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__header` }, /* @__PURE__ */ react.createElement("h1", { className: "page-header" }, "New label"), /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__page-description` }, "Create a new label for targeting and filtering hosts.")), renderLabelForm()), type === "dynamic" && isSidePanelOpen && /* @__PURE__ */ react.createElement(SidePanelContent/* default */.A, null, /* @__PURE__ */ react.createElement(
    QuerySidePanel/* default */.A,
    {
      key: "query-side-panel",
      onOsqueryTableSelect,
      selectedOsqueryTable,
      onClose: onCloseSidebar
    }
  ))));
};
/* harmony default export */ var NewLabelPage_NewLabelPage = (NewLabelPage);

;// ./frontend/pages/labels/NewLabelPage/index.ts




/***/ }),

/***/ 51285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ generateTableHeaders; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var components_buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74953);
/* harmony import */ var components_TableContainer_DataTable_TextCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75679);




const generateTableHeaders = (handleRowRemove) => {
  const deleteHeader = handleRowRemove ? [
    {
      id: "delete",
      Header: "",
      Cell: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        components_buttons_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        {
          onClick: () => handleRowRemove(cellProps.row),
          variant: "subdued",
          icon: "close-filled",
          ariaLabel: "Remove"
        }
      ),
      disableHidden: true
    }
  ] : [];
  return [
    {
      Header: "Host",
      accessor: "display_name",
      Cell: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TableContainer_DataTable_TextCell__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { value: cellProps.cell.value })
    },
    {
      Header: "Hostname",
      accessor: "hostname",
      Cell: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TableContainer_DataTable_TextCell__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { value: cellProps.cell.value })
    },
    {
      Header: "Serial number",
      accessor: "hardware_serial",
      Cell: (cellProps) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_TableContainer_DataTable_TextCell__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { value: cellProps.cell.value })
    },
    ...deleteHeader
  ];
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ 11894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ PlatformField_PlatformField; }
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/DropdownWrapper.tsx
var DropdownWrapper = __webpack_require__(78131);
// EXTERNAL MODULE: ./frontend/components/forms/FormField/index.ts + 1 modules
var FormField = __webpack_require__(25663);
;// ./frontend/pages/labels/components/PlatformField/PlatformField.tsx





const PLATFORM_STRINGS = {
  darwin: "macOS",
  windows: "Windows",
  linux: "Linux",
  ubuntu: "Ubuntu (Linux)",
  centos: "CentOS (Linux)"
};
const platformOptions = [
  { label: "All platforms", value: "" },
  { label: "macOS", value: "darwin" },
  { label: "Windows", value: "windows" },
  { label: "Linux", value: "linux" },
  { label: "Ubuntu (Linux)", value: "ubuntu" },
  { label: "CentOS (Linux)", value: "centos" }
];
const baseClass = "platform-field";
const PlatformField = ({
  platform,
  isEditing = false,
  onChange = lodash.noop
}) => {
  const handleDropdownChange = (newValue) => {
    var _a;
    onChange((_a = newValue == null ? void 0 : newValue.value) != null ? _a : "");
  };
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, !isEditing ? /* @__PURE__ */ react.createElement("div", { className: "form-field form-field--dropdown" }, /* @__PURE__ */ react.createElement(
    DropdownWrapper/* default */.Ay,
    {
      label: "Platform",
      name: "platform",
      onChange: handleDropdownChange,
      value: platform,
      options: platformOptions,
      className: `${baseClass}__platform-dropdown`,
      wrapperClassname: `${baseClass}__form-field ${baseClass}__form-field--platform`,
      isSearchable: false,
      placeholder: "All platforms"
    }
  )) : /* @__PURE__ */ react.createElement(FormField/* default */.A, { label: "Platform", name: "platform" }, /* @__PURE__ */ react.createElement("p", null, platform ? PLATFORM_STRINGS[platform] : "All platforms")));
};
/* harmony default export */ var PlatformField_PlatformField = (PlatformField);

;// ./frontend/pages/labels/components/PlatformField/index.ts




/***/ })

}]);