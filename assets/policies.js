"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[365],{

/***/ 57055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ ManagePoliciesPage; }
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
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/LastUpdatedText/index.ts + 1 modules
var LastUpdatedText = __webpack_require__(431);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TableContainer/TableCount/index.ts + 1 modules
var TableCount = __webpack_require__(46692);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/context/policy.tsx
var policy = __webpack_require__(59593);
// EXTERNAL MODULE: ./frontend/context/table.tsx
var table = __webpack_require__(69807);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/pages/policies/helpers.ts
var helpers = __webpack_require__(41820);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/global_policies.ts
var global_policies = __webpack_require__(39414);
// EXTERNAL MODULE: ./frontend/services/entities/team_policies.ts
var team_policies = __webpack_require__(80396);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/pages/policies/constants.ts
var constants = __webpack_require__(14648);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/interfaces/config.ts
var interfaces_config = __webpack_require__(77906);
// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
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
;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/OtherWorkflowsModal/ExamplePayload/ExamplePayload.tsx




const baseClass = "example-payload";
const ExamplePayload = () => {
  const { isFreeTier } = (0,react.useContext)(app/* AppContext */.BR);
  const json = {
    timestamp: "0000-00-00T00:00:00Z",
    policy: {
      id: 1,
      name: "Is Gatekeeper enabled?",
      query: "SELECT 1 FROM gatekeeper WHERE assessments_enabled = 1;",
      description: "Checks if gatekeeper is enabled on macOS devices.",
      author_id: 1,
      author_name: "John",
      author_email: "john@example.com",
      resolution: "Turn on Gatekeeper feature in System Preferences.",
      passing_host_count: 2e3,
      failing_host_count: 300,
      critical: false
    },
    hosts: [
      {
        id: 1,
        display_name: "macbook-1",
        url: "https://fleet.example.com/hosts/1"
      },
      {
        id: 2,
        display_name: "macbbook-2",
        url: "https://fleet.example.com/hosts/2"
      }
    ]
  };
  if (isFreeTier) {
    delete json.policy.critical;
  }
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement("pre", null, "POST https://server.com/example"), /* @__PURE__ */ react.createElement("pre", { dangerouslySetInnerHTML: { __html: (0,utilities_helpers/* syntaxHighlight */._j)(json) } }));
};
/* harmony default export */ var ExamplePayload_ExamplePayload = (ExamplePayload);

;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/OtherWorkflowsModal/ExamplePayload/index.ts



// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
;// ./assets/images/jira-policy-automation-preview-400x419@2x.png
var jira_policy_automation_preview_400x419_2x_namespaceObject = __webpack_require__.p + "jira-policy-automation-preview-400x419@2x@183193e2265bf5cc5511.png";
;// ./assets/images/jira-policy-automation-preview-premium-400x316@2x.png
var jira_policy_automation_preview_premium_400x316_2x_namespaceObject = __webpack_require__.p + "jira-policy-automation-preview-premium-400x316@2x@c42372631a3448cc7552.png";
;// ./assets/images/zendesk-policy-automation-preview-400x515@2x.png
var zendesk_policy_automation_preview_400x515_2x_namespaceObject = __webpack_require__.p + "zendesk-policy-automation-preview-400x515@2x@5354118d5695e20f48be.png";
;// ./assets/images/zendesk-policy-automation-preview-premium-400x483@2x.png
var zendesk_policy_automation_preview_premium_400x483_2x_namespaceObject = __webpack_require__.p + "zendesk-policy-automation-preview-premium-400x483@2x@0aeb48baa5609cd0ce60.png";
;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/OtherWorkflowsModal/ExampleTicket/ExampleTicket.tsx








const ExampleTicket_baseClass = "example-ticket";
const ExampleTicket = ({
  integrationType
}) => {
  const { isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const screenshot = integrationType === "jira" ? /* @__PURE__ */ react.createElement(
    "img",
    {
      src: isPremiumTier ? jira_policy_automation_preview_premium_400x316_2x_namespaceObject : jira_policy_automation_preview_400x419_2x_namespaceObject,
      alt: "Jira example policy automation ticket",
      className: `${ExampleTicket_baseClass}__screenshot`
    }
  ) : /* @__PURE__ */ react.createElement(
    "img",
    {
      src: isPremiumTier ? zendesk_policy_automation_preview_premium_400x483_2x_namespaceObject : zendesk_policy_automation_preview_400x515_2x_namespaceObject,
      alt: "Zendesk example policy automation ticket",
      className: `${ExampleTicket_baseClass}__screenshot`
    }
  );
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: ExampleTicket_baseClass, color: "grey" }, screenshot);
};
/* harmony default export */ var ExampleTicket_ExampleTicket = (ExampleTicket);

;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/OtherWorkflowsModal/ExampleTicket/index.ts



;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/OtherWorkflowsModal/OtherWorkflowsModal.tsx

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













const OtherWorkflowsModal_baseClass = "other-workflows-modal";
const findEnabledIntegration = ({
  jira,
  zendesk
}) => (jira == null ? void 0 : jira.find((j) => j.enable_failing_policies)) || (zendesk == null ? void 0 : zendesk.find((z) => z.enable_failing_policies));
const getIntegrationType = (integration) => !!(integration == null ? void 0 : integration.group_id) && "zendesk" || !!(integration == null ? void 0 : integration.project_key) && "jira" || void 0;
const getDestinationUrlError = (url) => {
  if (!url) {
    return "Please add a destination URL";
  }
  if (!(0,valid_url/* default */.A)({ url })) {
    return "Destination URL is not a valid URL";
  }
  return void 0;
};
const OtherWorkflowsModal = (0,react.forwardRef)(
  ({
    router,
    automationsConfig,
    availableIntegrations,
    gitOpsModeEnabled = false
  }, ref) => {
    const {
      webhook_settings: { failing_policies_webhook: webhook }
    } = automationsConfig;
    const { jira, zendesk } = availableIntegrations || {};
    const allIntegrations = [];
    jira && allIntegrations.push(...jira);
    zendesk && allIntegrations.push(...zendesk);
    const hasAvailableIntegrations = allIntegrations.length > 0;
    const dropdownOptions = allIntegrations.map(
      ({ group_id, project_key, url }) => ({
        value: group_id || project_key,
        label: `${url} - ${group_id || project_key}`
      })
    );
    const serverEnabledIntegration = findEnabledIntegration(
      automationsConfig.integrations
    );
    const initialIsPolicyAutomationsEnabled = !!webhook.enable_failing_policies_webhook || !!serverEnabledIntegration;
    const initialIsWebhookEnabled = !initialIsPolicyAutomationsEnabled || webhook.enable_failing_policies_webhook;
    const initialDestinationUrl = webhook.destination_url || "";
    const [
      isPolicyAutomationsEnabled,
      setIsPolicyAutomationsEnabled
    ] = (0,react.useState)(initialIsPolicyAutomationsEnabled);
    const [isWebhookEnabled, setIsWebhookEnabled] = (0,react.useState)(
      initialIsWebhookEnabled
    );
    const [destinationUrl, setDestinationUrl] = (0,react.useState)(initialDestinationUrl);
    const [selectedIntegration, setSelectedIntegration] = (0,react.useState)(serverEnabledIntegration);
    const [showExamplePayload, setShowExamplePayload] = (0,react.useState)(false);
    const [showExampleTicket, setShowExampleTicket] = (0,react.useState)(false);
    const [errors, setErrors] = (0,react.useState)({});
    const buildSubmitData = () => {
      var _a, _b;
      const newJira = ((_a = availableIntegrations.jira) == null ? void 0 : _a.map((j) => __spreadProps(__spreadValues({}, j), {
        enable_failing_policies: isPolicyAutomationsEnabled && !isWebhookEnabled && j.project_key === (selectedIntegration == null ? void 0 : selectedIntegration.project_key)
      }))) || null;
      const newZendesk = ((_b = availableIntegrations.zendesk) == null ? void 0 : _b.map((z) => __spreadProps(__spreadValues({}, z), {
        enable_failing_policies: isPolicyAutomationsEnabled && !isWebhookEnabled && z.group_id === (selectedIntegration == null ? void 0 : selectedIntegration.group_id)
      }))) || null;
      const newWebhook = {
        failing_policies_webhook: {
          destination_url: destinationUrl,
          policy_ids: webhook.policy_ids || [],
          enable_failing_policies_webhook: isPolicyAutomationsEnabled && isWebhookEnabled
        }
      };
      return {
        webhook_settings: newWebhook,
        integrations: {
          jira: newJira,
          zendesk: newZendesk,
          google_calendar: null
          // When null, backend does not update google_calendar
        }
      };
    };
    const runValidation = () => {
      const newErrors = {};
      if (isPolicyAutomationsEnabled) {
        if (!isWebhookEnabled && !selectedIntegration) {
          newErrors.integration = hasAvailableIntegrations ? "Please enable at least one integration:" : "Add an integration to create tickets for policy automations.";
        }
        if (isWebhookEnabled) {
          const urlError = getDestinationUrlError(destinationUrl);
          if (urlError) {
            newErrors.url = urlError;
          }
        }
      }
      return newErrors;
    };
    (0,react.useImperativeHandle)(ref, () => ({
      getFormData: () => buildSubmitData(),
      validate: () => {
        const newErrors = runValidation();
        setErrors(newErrors);
        return (0,lodash.isEmpty)(newErrors);
      },
      isDirty: () => {
        if (isPolicyAutomationsEnabled !== initialIsPolicyAutomationsEnabled)
          return true;
        if (isPolicyAutomationsEnabled) {
          if (isWebhookEnabled !== !!initialIsWebhookEnabled) return true;
          if (isWebhookEnabled && destinationUrl !== initialDestinationUrl)
            return true;
          if (!isWebhookEnabled && ((selectedIntegration == null ? void 0 : selectedIntegration.project_key) !== (serverEnabledIntegration == null ? void 0 : serverEnabledIntegration.project_key) || (selectedIntegration == null ? void 0 : selectedIntegration.group_id) !== (serverEnabledIntegration == null ? void 0 : serverEnabledIntegration.group_id)))
            return true;
        }
        return false;
      }
    }));
    const onChangeUrl = (value) => {
      setDestinationUrl(value);
      setErrors((errs) => (0,lodash.omit)(errs, "url"));
    };
    const onBlurUrl = () => {
      if (!isPolicyAutomationsEnabled || gitOpsModeEnabled) {
        return;
      }
      const urlError = getDestinationUrlError(destinationUrl);
      setErrors((errs) => {
        const next = (0,lodash.omit)(errs, "url");
        return urlError ? __spreadProps(__spreadValues({}, next), { url: urlError }) : next;
      });
    };
    const onChangeRadio = (val) => {
      switch (val) {
        case "webhook":
          setIsWebhookEnabled(true);
          setSelectedIntegration(void 0);
          break;
        case "ticket":
          setIsWebhookEnabled(false);
          break;
        default:
          (0,lodash.noop)();
      }
    };
    const onAddIntegration = () => {
      router.push(paths/* default */.A.ADMIN_INTEGRATIONS);
    };
    const onSelectIntegration = (selected) => {
      setSelectedIntegration(
        allIntegrations.find(
          ({ group_id, project_key }) => group_id === selected || project_key === selected
        )
      );
    };
    const renderWebhook = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      InputField/* default */.A,
      {
        inputWrapperClass: `${OtherWorkflowsModal_baseClass}__url-input`,
        name: "webhook-url",
        label: "Destination URL",
        type: "text",
        value: destinationUrl,
        onChange: onChangeUrl,
        onBlur: onBlurUrl,
        error: errors.url,
        helpText: "For configured policies, Mesh will send a JSON payload to this URL with a list of hosts whose statuses changed from pass to fail.",
        placeholder: "https://server.com/example",
        tooltip: "Provide a URL to deliver a webhook request to.",
        disabled: !isPolicyAutomationsEnabled || gitOpsModeEnabled
      }
    ));
    const renderIntegrations = () => hasAvailableIntegrations ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${OtherWorkflowsModal_baseClass}__integrations` }, /* @__PURE__ */ react.createElement(
      Dropdown/* default */.A,
      {
        options: dropdownOptions,
        onChange: onSelectIntegration,
        placeholder: "Select integration",
        value: (selectedIntegration == null ? void 0 : selectedIntegration.group_id) || (selectedIntegration == null ? void 0 : selectedIntegration.project_key),
        label: "Integration",
        error: errors.integration,
        wrapperClassName: `${OtherWorkflowsModal_baseClass}__form-field ${OtherWorkflowsModal_baseClass}__form-field--frequency`,
        hint: "For each policy, Mesh will create a ticket with a list of the failing hosts."
      }
    )), /* @__PURE__ */ react.createElement(
      RevealButton/* default */.A,
      {
        isShowing: showExampleTicket,
        className: OtherWorkflowsModal_baseClass,
        hideText: "Hide example ticket",
        showText: "Show example ticket",
        caretPosition: "after",
        onClick: () => setShowExampleTicket(!showExampleTicket)
      }
    ), showExampleTicket && /* @__PURE__ */ react.createElement(
      ExampleTicket_ExampleTicket,
      {
        integrationType: getIntegrationType(selectedIntegration)
      }
    )) : /* @__PURE__ */ react.createElement("div", { className: `form-field ${OtherWorkflowsModal_baseClass}__no-integrations` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "You have no integrations."), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: onAddIntegration,
        disabled: gitOpsModeEnabled || !isPolicyAutomationsEnabled
      },
      "Add integration"
    )), errors.integration && /* @__PURE__ */ react.createElement("div", { className: `${OtherWorkflowsModal_baseClass}__error` }, errors.integration));
    return /* @__PURE__ */ react.createElement("div", { className: `${OtherWorkflowsModal_baseClass} form` }, /* @__PURE__ */ react.createElement("p", { className: `${OtherWorkflowsModal_baseClass}__description` }, "Create tickets or fire webhooks when hosts fail policies.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://www.fleetdm.com/learn-more-about/policy-automations",
        text: "Learn more",
        newTab: true
      }
    )), /* @__PURE__ */ react.createElement(
      Slider/* default */.A,
      {
        value: isPolicyAutomationsEnabled,
        onChange: () => {
          setIsPolicyAutomationsEnabled(!isPolicyAutomationsEnabled);
          setErrors({});
        },
        inactiveText: "Disabled",
        activeText: "Enabled",
        disabled: gitOpsModeEnabled
      }
    ), /* @__PURE__ */ react.createElement(
      "div",
      {
        className: `form ${OtherWorkflowsModal_baseClass}__policy-automations__${isPolicyAutomationsEnabled ? "enabled" : "disabled"}`
      },
      /* @__PURE__ */ react.createElement("div", { className: `form-field ${OtherWorkflowsModal_baseClass}__workflow` }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Workflow"), /* @__PURE__ */ react.createElement(
        Radio/* default */.A,
        {
          className: `${OtherWorkflowsModal_baseClass}__radio-input`,
          label: "Ticket",
          id: "ticket-radio-btn",
          checked: !isWebhookEnabled,
          value: "ticket",
          name: "workflow-type",
          onChange: onChangeRadio,
          disabled: !isPolicyAutomationsEnabled || gitOpsModeEnabled
        }
      ), /* @__PURE__ */ react.createElement(
        Radio/* default */.A,
        {
          className: `${OtherWorkflowsModal_baseClass}__radio-input`,
          label: "Webhook",
          id: "webhook-radio-btn",
          checked: isWebhookEnabled,
          value: "webhook",
          name: "workflow-type",
          onChange: onChangeRadio,
          disabled: !isPolicyAutomationsEnabled || gitOpsModeEnabled
        }
      )),
      isWebhookEnabled ? renderWebhook() : renderIntegrations()
    ), isWebhookEnabled && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      RevealButton/* default */.A,
      {
        isShowing: showExamplePayload,
        className: OtherWorkflowsModal_baseClass,
        hideText: "Example payload",
        showText: "Example payload",
        caretPosition: "after",
        onClick: () => setShowExamplePayload(!showExamplePayload)
      }
    ), showExamplePayload && /* @__PURE__ */ react.createElement(ExamplePayload_ExamplePayload, null)));
  }
);
OtherWorkflowsModal.displayName = "OtherWorkflowsModal";
/* harmony default export */ var OtherWorkflowsModal_OtherWorkflowsModal = (OtherWorkflowsModal);

;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/OtherWorkflowsModal/index.ts



// EXTERNAL MODULE: ./frontend/components/InfoBanner/InfoBanner.tsx
var InfoBanner = __webpack_require__(36321);
;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/CalendarEventsModal/CalendarEventsModal.tsx

var CalendarEventsModal_defProp = Object.defineProperty;
var CalendarEventsModal_defProps = Object.defineProperties;
var CalendarEventsModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var CalendarEventsModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CalendarEventsModal_hasOwnProp = Object.prototype.hasOwnProperty;
var CalendarEventsModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var CalendarEventsModal_defNormalProp = (obj, key, value) => key in obj ? CalendarEventsModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CalendarEventsModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CalendarEventsModal_hasOwnProp.call(b, prop))
      CalendarEventsModal_defNormalProp(a, prop, b[prop]);
  if (CalendarEventsModal_getOwnPropSymbols)
    for (var prop of CalendarEventsModal_getOwnPropSymbols(b)) {
      if (CalendarEventsModal_propIsEnum.call(b, prop))
        CalendarEventsModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var CalendarEventsModal_spreadProps = (a, b) => CalendarEventsModal_defProps(a, CalendarEventsModal_getOwnPropDescs(b));










const CalendarEventsModal_baseClass = "calendar-events-modal";
const CalendarEventsModal = (0,react.forwardRef)(
  ({
    configured,
    enabled,
    url,
    gitOpsModeEnabled = false
  }, ref) => {
    const { isGlobalAdmin } = (0,react.useContext)(app/* AppContext */.BR);
    const [formData, setFormData] = (0,react.useState)({
      enabled,
      url
    });
    const [formErrors, setFormErrors] = (0,react.useState)(
      {}
    );
    const [showExamplePayload, setShowExamplePayload] = (0,react.useState)(false);
    const validateForm = (newFormData) => {
      const errors = {};
      const { url: newUrl } = newFormData;
      if (newFormData.enabled && !(0,valid_url/* default */.A)({ url: newUrl || "", protocols: ["http", "https"] })) {
        const errorPrefix = newUrl ? `${newUrl} is not` : "Please enter";
        errors.url = `${errorPrefix} a valid resolution webhook URL`;
      }
      return errors;
    };
    (0,react.useImperativeHandle)(ref, () => ({
      getFormData: () => configured ? formData : null,
      validate: () => {
        if (!configured) return true;
        const errors = validateForm(formData);
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      },
      isDirty: () => configured && (formData.enabled !== enabled || formData.url !== url)
    }));
    const onFeatureEnabledChange = () => {
      const newFormData = CalendarEventsModal_spreadProps(CalendarEventsModal_spreadValues({}, formData), { enabled: !formData.enabled });
      const isDisabling = newFormData.enabled === false;
      if (isDisabling) {
        const errors = validateForm(newFormData);
        if (errors.url) {
          newFormData.url = "";
          setFormErrors((prev) => {
            const next = CalendarEventsModal_spreadValues({}, prev);
            delete next.url;
            return next;
          });
        }
      }
      setFormData(newFormData);
    };
    const onUrlChange = (value) => {
      const newFormData = CalendarEventsModal_spreadProps(CalendarEventsModal_spreadValues({}, formData), { url: value });
      if (formErrors.url) {
        setFormErrors(validateForm(newFormData));
      }
      setFormData(newFormData);
    };
    const renderExamplePayload = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("pre", null, "POST https://server.com/example"), /* @__PURE__ */ react.createElement(
      "pre",
      {
        dangerouslySetInnerHTML: {
          __html: (0,utilities_helpers/* syntaxHighlight */._j)({
            timestamp: "0000-00-00T00:00:00Z",
            host_id: 1,
            host_display_name: "Anna's MacBook Pro",
            host_serial_number: "ABCD1234567890",
            failing_policies: [
              {
                id: 123,
                name: "macOS - Disable guest account"
              }
            ]
          })
        }
      }
    ));
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventsModal_baseClass} form` }, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventsModal_baseClass}__header` }, /* @__PURE__ */ react.createElement("p", { className: `${CalendarEventsModal_baseClass}__description` }, "Schedule maintenance windows for end users failing policies.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://www.fleetdm.com/learn-more-about/calendar-events",
        text: "Learn more",
        newTab: true
      }
    ))), !configured && /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { className: CalendarEventsModal_baseClass }, isGlobalAdmin ? (
      // Only global admins can access the Calendar settings page.
      /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: paths/* default */.A.ADMIN_INTEGRATIONS_CALENDARS,
          text: "Connect Mesh to Google Workspace",
          emphasized: true
        }
      )
    ) : /* @__PURE__ */ react.createElement(react.Fragment, null, "Admin can connect Mesh to Google Workspace via", " ", /* @__PURE__ */ react.createElement("b", null, "Settings"), " > ", /* @__PURE__ */ react.createElement("b", null, "Integrations"), " > ", /* @__PURE__ */ react.createElement("b", null, "Calendars")), " ", "to use calendar automations."), configured && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
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
          label: "Resolution webhook URL",
          onChange: onUrlChange,
          name: "url",
          value: formData.url,
          error: formErrors.url,
          tooltip: "Provide a URL to deliver a webhook request to.",
          helpText: "A request will be sent to this URL during the calendar event. Use it to trigger auto-remediation.",
          disabled: !formData.enabled || gitOpsModeEnabled
        }
      )
    ), /* @__PURE__ */ react.createElement(
      RevealButton/* default */.A,
      {
        isShowing: showExamplePayload,
        className: `${CalendarEventsModal_baseClass}__show-example-payload-toggle`,
        hideText: "Example payload",
        showText: "Example payload",
        caretPosition: "after",
        onClick: () => setShowExamplePayload(!showExamplePayload)
      }
    ), showExamplePayload && renderExamplePayload())));
  }
);
CalendarEventsModal.displayName = "CalendarEventsModal";
/* harmony default export */ var CalendarEventsModal_CalendarEventsModal = (CalendarEventsModal);

;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/CalendarEventsModal/index.ts



// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var utilities_constants = __webpack_require__(89937);
;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/ConditionalAccessModal/ConditionalAccessModal.tsx








const ConditionalAccessModal = (0,react.forwardRef)(
  ({
    configured,
    enabled,
    gitOpsModeEnabled = false,
    providerText
  }, ref) => {
    const { isGlobalAdmin } = (0,react.useContext)(app/* AppContext */.BR);
    const [formEnabled, setFormEnabled] = (0,react.useState)(enabled);
    (0,react.useImperativeHandle)(ref, () => ({
      getFormData: () => configured ? { enabled: formEnabled } : null,
      validate: () => true,
      isDirty: () => configured && formEnabled !== enabled
    }));
    return /* @__PURE__ */ react.createElement("div", { className: "form" }, /* @__PURE__ */ react.createElement("p", null, "Block single sign-on for end users failing policies.", " ", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        text: "Learn more",
        url: `${utilities_constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/conditional-access`,
        newTab: true
      }
    )), !configured && /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, null, isGlobalAdmin ? (
      // Only global admins can access the Conditional Access settings page.
      /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: paths/* default */.A.ADMIN_INTEGRATIONS_CONDITIONAL_ACCESS,
          text: `Connect Mesh to ${providerText}`,
          emphasized: true
        }
      )
    ) : /* @__PURE__ */ react.createElement(react.Fragment, null, "Admin can connect Mesh to ", providerText, " via ", /* @__PURE__ */ react.createElement("b", null, "Settings"), " ", "> ", /* @__PURE__ */ react.createElement("b", null, "Integrations"), " > ", /* @__PURE__ */ react.createElement("b", null, "Conditional access")), " ", "to use conditional access automations."), configured && /* @__PURE__ */ react.createElement(
      Slider/* default */.A,
      {
        value: formEnabled,
        onChange: () => setFormEnabled(!formEnabled),
        inactiveText: "Disabled",
        activeText: "Enabled",
        disabled: gitOpsModeEnabled
      }
    ));
  }
);
ConditionalAccessModal.displayName = "ConditionalAccessModal";
/* harmony default export */ var ConditionalAccessModal_ConditionalAccessModal = (ConditionalAccessModal);

;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/ConditionalAccessModal/index.ts



// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/CalendarEventPreviewModal/CalendarEventPreviewModal.tsx








const CalendarEventPreviewModal_baseClass = "calendar-event-preview-modal";
const CalendarEventPreviewModal = ({
  onCancel,
  policy
}) => {
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const showGenericPreview = !(policy == null ? void 0 : policy.description) || !(policy == null ? void 0 : policy.resolution);
  const orgName = config == null ? void 0 : config.org_info.org_name;
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Calendar event preview",
      width: "large",
      onExit: onCancel,
      className: CalendarEventPreviewModal_baseClass
    },
    /* @__PURE__ */ react.createElement("span", null, showGenericPreview ? "What end users see:" : /* @__PURE__ */ react.createElement(react.Fragment, null, "End users failing only ", /* @__PURE__ */ react.createElement("strong", null, policy.name), " policy will see:")),
    /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "xxlarge", className: `${CalendarEventPreviewModal_baseClass}__preview` }, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-header` }, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-header__square-wrapper` }, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-header__square` })), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-header__info` }, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-header__title` }, "\u{1F4BB} \u{1F6AB} Scheduled maintenance"), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-header__time` }, /* @__PURE__ */ react.createElement("span", null, "Tuesday, June 18"), /* @__PURE__ */ react.createElement("span", null, "\u22C5"), /* @__PURE__ */ react.createElement("span", null, "5-5:30pm")))), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-info` }, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-info__icon` }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "text" })), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-info__text` }, orgName, " reserved this time to make some changes to your work computer (Anna's MacBook Pro).", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), "Please leave your device on and connected to power.", /* @__PURE__ */ react.createElement("br", null), " ", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("strong", null, "Why it matters"), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-info__text__user-text` }, showGenericPreview ? `${orgName} needs to make sure your device meets the organization's requirements.` : policy.description), /* @__PURE__ */ react.createElement("br", null), " ", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("strong", null, "Maintenance required"), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-info__text__user-text` }, showGenericPreview ? /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "Click the", " ", /* @__PURE__ */ react.createElement(
      "a",
      {
        href: utilities_constants/* TRANSPARENCY_LINK */.qe,
        rel: "noreferrer",
        target: "_blank"
      },
      "Fleet"
    ), " ", "icon in your computer's menu and select", " ", /* @__PURE__ */ react.createElement("b", null, "My device")), /* @__PURE__ */ react.createElement("li", null, "Navigate to the ", /* @__PURE__ */ react.createElement("b", null, "Policies"), " tab"), /* @__PURE__ */ react.createElement("li", null, "Follow instructions to resolve any policies marked", " ", `"Fail"`), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Refetch"))) : policy.resolution))), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-invitee` }, /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-invitee__icon` }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "calendar" })), /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__preview-invitee__text` }, "Anna Chao"))),
    /* @__PURE__ */ react.createElement("div", { className: `${CalendarEventPreviewModal_baseClass}__footer` }, showGenericPreview ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Users failing only a single policy will see a more specific explanation.") : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("strong", null, "Why it matters"), " and", " ", /* @__PURE__ */ react.createElement("strong", null, "Maintenance required"), " are populated by the policy's ", /* @__PURE__ */ react.createElement("strong", null, "Description"), " and", " ", /* @__PURE__ */ react.createElement("strong", null, "Resolution"), " respectively.")),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Close"))
  );
};
/* harmony default export */ var CalendarEventPreviewModal_CalendarEventPreviewModal = (CalendarEventPreviewModal);

;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/CalendarEventPreviewModal/index.ts



;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/components/index.ts






;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/AutomationsModal.tsx

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











const AutomationsModal_baseClass = "automations-modal";
const SUCCESS_MSG = "Successfully updated policy automations.";
const ERR_MSG = "Could not update policy automations.";
const AutomationsModal = ({
  router,
  isAllTeamsSelected,
  teamIdForApi,
  globalConfig,
  teamConfig,
  gitOpsModeEnabled = false,
  refetchPolicies,
  onExit
}) => {
  var _a, _b, _c, _d, _e, _f;
  const queryClient = (0,es.useQueryClient)();
  const { setConfig, isPremiumTier } = (0,react.useContext)(app/* AppContext */.BR);
  const otherFormRef = (0,react.useRef)(null);
  const calendarFormRef = (0,react.useRef)(null);
  const conditionalAccessFormRef = (0,react.useRef)(null);
  const [isUpdating, setIsUpdating] = (0,react.useState)(false);
  const automationsConfig = isAllTeamsSelected ? globalConfig : teamConfig;
  const availableIntegrations = (_a = globalConfig == null ? void 0 : globalConfig.integrations) != null ? _a : automationsConfig == null ? void 0 : automationsConfig.integrations;
  const showCalendarEvents = !isAllTeamsSelected && teamIdForApi !== team/* API_NO_TEAM_ID */.Rp;
  const isCalEventsConfigured = (_b = (globalConfig == null ? void 0 : globalConfig.integrations.google_calendar) && (globalConfig == null ? void 0 : globalConfig.integrations.google_calendar.length) > 0) != null ? _b : false;
  const isCalEventsEnabled = (_d = (_c = teamConfig == null ? void 0 : teamConfig.integrations.google_calendar) == null ? void 0 : _c.enable_calendar_events) != null ? _d : false;
  const calendarUrl = ((_e = teamConfig == null ? void 0 : teamConfig.integrations.google_calendar) == null ? void 0 : _e.webhook_url) || "";
  const [showPreviewCalendarEvent, setShowPreviewCalendarEvent] = (0,react.useState)(
    false
  );
  const togglePreviewCalendarEvent = () => setShowPreviewCalendarEvent(!showPreviewCalendarEvent);
  const isCAConfigured = (0,interfaces_config/* isConditionalAccessConfigured */.Xh)(globalConfig);
  const isCAEnabled = (_f = teamIdForApi === team/* API_NO_TEAM_ID */.Rp ? globalConfig == null ? void 0 : globalConfig.integrations.conditional_access_enabled : teamConfig == null ? void 0 : teamConfig.integrations.conditional_access_enabled) != null ? _f : false;
  const conditionalAccessProviderText = isPremiumTier ? "Okta or Microsoft Entra" : "Okta";
  const updateGlobalConfigCache = (updatedConfig) => {
    queryClient.setQueryData(["config"], updatedConfig);
    setConfig(updatedConfig);
  };
  const updateTeamConfigCache = (updatedTeamResponse) => {
    queryClient.setQueryData(["teams", teamIdForApi], updatedTeamResponse);
  };
  const handleSubmit = (evt) => __async(null, null, function* () {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    evt.preventDefault();
    const otherValid = (_b2 = (_a2 = otherFormRef.current) == null ? void 0 : _a2.validate()) != null ? _b2 : true;
    const calendarValid = (_d2 = (_c2 = calendarFormRef.current) == null ? void 0 : _c2.validate()) != null ? _d2 : true;
    const caValid = (_f2 = (_e2 = conditionalAccessFormRef.current) == null ? void 0 : _e2.validate()) != null ? _f2 : true;
    if (!otherValid || !calendarValid || !caValid) {
      return;
    }
    const otherData = (_h = (_g = otherFormRef.current) == null ? void 0 : _g.getFormData()) != null ? _h : null;
    const calendarData = (_j = (_i = calendarFormRef.current) == null ? void 0 : _i.getFormData()) != null ? _j : null;
    const caData = (_l = (_k = conditionalAccessFormRef.current) == null ? void 0 : _k.getFormData()) != null ? _l : null;
    setIsUpdating(true);
    try {
      if (isAllTeamsSelected) {
        if (otherData) {
          const updatedConfig = yield config/* default */.A.update(otherData);
          updateGlobalConfigCache(updatedConfig);
        }
      } else if (teamIdForApi === team/* API_NO_TEAM_ID */.Rp) {
        const integrations = {
          jira: (_m = otherData == null ? void 0 : otherData.integrations.jira) != null ? _m : [],
          zendesk: (_n = otherData == null ? void 0 : otherData.integrations.zendesk) != null ? _n : []
        };
        const teamPayload = { integrations };
        if (otherData) {
          teamPayload.webhook_settings = otherData.webhook_settings;
        }
        const promises = [];
        if (otherData) {
          promises.push(
            teams/* default */.A.update(teamPayload, teamIdForApi).then(updateTeamConfigCache)
          );
        }
        if (caData) {
          promises.push(
            config/* default */.A.update({
              integrations: {
                conditional_access_enabled: caData.enabled
              }
            }).then(updateGlobalConfigCache)
          );
        }
        yield Promise.all(promises);
      } else if (teamIdForApi !== void 0) {
        const integrations = {
          jira: (_o = otherData == null ? void 0 : otherData.integrations.jira) != null ? _o : [],
          zendesk: (_p = otherData == null ? void 0 : otherData.integrations.zendesk) != null ? _p : []
        };
        if (calendarData) {
          integrations.google_calendar = {
            enable_calendar_events: calendarData.enabled,
            webhook_url: calendarData.url
          };
        }
        if (caData) {
          integrations.conditional_access_enabled = caData.enabled;
        }
        const teamPayload = { integrations };
        if (otherData) {
          teamPayload.webhook_settings = otherData.webhook_settings;
        }
        if (otherData || calendarData || caData) {
          const updatedTeam = yield teams/* default */.A.update(teamPayload, teamIdForApi);
          updateTeamConfigCache(updatedTeam);
        }
      }
      ToastNotification/* notify */.me.success(SUCCESS_MSG);
      refetchPolicies();
      onExit();
    } catch (e) {
      ToastNotification/* notify */.me.error(ERR_MSG, { response: e });
    } finally {
      setIsUpdating(false);
    }
  });
  if (!automationsConfig || !availableIntegrations) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Automations",
      onExit,
      className: AutomationsModal_baseClass,
      width: "large",
      isContentDisabled: isUpdating
    },
    /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement("div", { className: `${AutomationsModal_baseClass}__body` }, /* @__PURE__ */ react.createElement("section", { className: `${AutomationsModal_baseClass}__section` }, !isAllTeamsSelected && /* @__PURE__ */ react.createElement("h2", { className: `${AutomationsModal_baseClass}__section-title` }, "Webhooks or tickets"), /* @__PURE__ */ react.createElement(
      OtherWorkflowsModal_OtherWorkflowsModal,
      {
        ref: otherFormRef,
        router,
        automationsConfig,
        availableIntegrations,
        gitOpsModeEnabled
      }
    )), showCalendarEvents && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("hr", { className: `${AutomationsModal_baseClass}__divider` }), /* @__PURE__ */ react.createElement("section", { className: `${AutomationsModal_baseClass}__section` }, /* @__PURE__ */ react.createElement("div", { className: `${AutomationsModal_baseClass}__calendar-events-title-wrapper` }, /* @__PURE__ */ react.createElement("h2", { className: `${AutomationsModal_baseClass}__section-title` }, "Calendar events"), isCalEventsConfigured && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "secondary",
        onClick: togglePreviewCalendarEvent
      },
      "Preview calendar event"
    ), showPreviewCalendarEvent && /* @__PURE__ */ react.createElement(
      CalendarEventPreviewModal_CalendarEventPreviewModal,
      {
        onCancel: togglePreviewCalendarEvent
      }
    ))), /* @__PURE__ */ react.createElement(
      CalendarEventsModal_CalendarEventsModal,
      {
        ref: calendarFormRef,
        configured: isCalEventsConfigured,
        enabled: isCalEventsEnabled,
        url: calendarUrl,
        gitOpsModeEnabled
      }
    ))), !isAllTeamsSelected && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("hr", { className: `${AutomationsModal_baseClass}__divider` }), /* @__PURE__ */ react.createElement("section", { className: `${AutomationsModal_baseClass}__section` }, /* @__PURE__ */ react.createElement("h2", { className: `${AutomationsModal_baseClass}__section-title` }, "Conditional access"), /* @__PURE__ */ react.createElement(
      ConditionalAccessModal_ConditionalAccessModal,
      {
        ref: conditionalAccessFormRef,
        configured: isCAConfigured,
        enabled: isCAEnabled,
        gitOpsModeEnabled,
        providerText: conditionalAccessProviderText
      }
    )))), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", isLoading: isUpdating, disabled: isUpdating }, "Save"), /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: onExit, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var AutomationsModal_AutomationsModal = (AutomationsModal);

;// ./frontend/pages/policies/ManagePoliciesPage/components/AutomationsModal/index.ts



;// ./frontend/pages/policies/ManagePoliciesPage/components/DeletePoliciesModal/DeletePoliciesModal.tsx




const DeletePoliciesModal_baseClass = "delete-policy-modal";
const DeletePoliciesModal = ({
  isUpdatingPolicies,
  // shared state from parent, not only for deletes
  onCancel,
  onSubmit
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Delete policies",
      onExit: onCancel,
      onEnter: onSubmit,
      className: DeletePoliciesModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: DeletePoliciesModal_baseClass }, "Deleting these policies will disable any associated automations, such as automatic software install or automatic script run.", /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        type: "button",
        variant: "alert",
        onClick: onSubmit,
        className: "delete-loading",
        isLoading: isUpdatingPolicies
      },
      "Delete"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var DeletePoliciesModal_DeletePoliciesModal = (DeletePoliciesModal);

;// ./frontend/pages/policies/ManagePoliciesPage/components/DeletePoliciesModal/index.ts



// EXTERNAL MODULE: ./frontend/pages/policies/components/PolicyAutomationsFields/index.ts + 6 modules
var PolicyAutomationsFields = __webpack_require__(17244);
// EXTERNAL MODULE: ./frontend/pages/policies/hooks/index.ts + 2 modules
var hooks = __webpack_require__(83844);
;// ./frontend/pages/policies/ManagePoliciesPage/components/ManageAutomationsModal/ManageAutomationsModal.tsx









const ManageAutomationsModal_baseClass = "manage-automations-modal";
const PLATFORM_DISPLAY_ORDER = [
  "darwin",
  "windows",
  "linux",
  "chrome"
];
const ManageAutomationsModal_SUCCESS_MSG = "Successfully updated policy automations.";
const ManageAutomationsModal_ERR_MSG = "Could not update policy automations.";
const ManageAutomationsModal = ({
  policy,
  fleetName,
  isGlobalPolicy,
  teamIdForApi,
  automationsConfig,
  globalConfig,
  refetchPolicies,
  onExit
}) => {
  var _a;
  const automationsRef = (0,react.useRef)(null);
  const { mutate: save, isLoading: isSaving } = (0,hooks/* useUpdatePolicyAutomations */.p)({
    policy,
    teamIdForApi,
    isGlobalPolicy,
    automationsConfig,
    onSuccess: () => {
      ToastNotification/* notify */.me.success(ManageAutomationsModal_SUCCESS_MSG);
      refetchPolicies();
      onExit();
    },
    onError: () => ToastNotification/* notify */.me.error(ManageAutomationsModal_ERR_MSG)
  });
  const handleSubmit = (evt) => {
    var _a2;
    evt.preventDefault();
    const payload = (_a2 = automationsRef.current) == null ? void 0 : _a2.getAutomationsPayload();
    if (!payload) {
      return;
    }
    if (!payload.isValid) {
      return;
    }
    if (!payload.isDirty) {
      onExit();
      return;
    }
    save({
      policyUpdate: payload.policyUpdate,
      webhookOrTicketUpdate: payload.webhookOrTicketUpdate
    });
  };
  const policyPlatforms = ((_a = policy.platform) != null ? _a : "").split(",").map((p) => p.trim()).filter(
    (p) => PLATFORM_DISPLAY_ORDER.includes(p)
  );
  const displayedPlatforms = PLATFORM_DISPLAY_ORDER.filter(
    (p) => policyPlatforms.includes(p)
  );
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Manage automations",
      onExit,
      className: ManageAutomationsModal_baseClass,
      width: "large",
      isContentDisabled: isSaving
    },
    /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement("div", { className: `${ManageAutomationsModal_baseClass}__body` }, /* @__PURE__ */ react.createElement("div", { className: `${ManageAutomationsModal_baseClass}__header` }, "Manage automations for the ", /* @__PURE__ */ react.createElement("b", null, policy.name), " policy on", " ", /* @__PURE__ */ react.createElement("b", null, fleetName), "."), displayedPlatforms.length > 0 && /* @__PURE__ */ react.createElement("section", { className: `${ManageAutomationsModal_baseClass}__section` }, /* @__PURE__ */ react.createElement("h2", { className: `${ManageAutomationsModal_baseClass}__section-title` }, "Platforms"), /* @__PURE__ */ react.createElement("div", { className: `${ManageAutomationsModal_baseClass}__platforms` }, displayedPlatforms.map((p) => /* @__PURE__ */ react.createElement("span", { key: p, className: `${ManageAutomationsModal_baseClass}__platform` }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: p, size: "small" }), platform/* PLATFORM_DISPLAY_NAMES */.uc[p])))), /* @__PURE__ */ react.createElement("section", { className: `${ManageAutomationsModal_baseClass}__section` }, /* @__PURE__ */ react.createElement("h2", { className: `${ManageAutomationsModal_baseClass}__section-title` }, "Automations"), /* @__PURE__ */ react.createElement(
      PolicyAutomationsFields/* default */.A,
      {
        ref: automationsRef,
        policy,
        isGlobalPolicy,
        teamIdForApi,
        automationsConfig,
        globalConfig,
        fleetName,
        selectedPlatforms: policyPlatforms
      }
    ))), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", isLoading: isSaving, disabled: isSaving }, "Save"), /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: onExit, variant: "secondary" }, "Cancel")))
  );
};
/* harmony default export */ var ManageAutomationsModal_ManageAutomationsModal = (ManageAutomationsModal);

;// ./frontend/pages/policies/ManagePoliciesPage/components/ManageAutomationsModal/index.ts



// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/date-fns/millisecondsToMinutes.mjs
var millisecondsToMinutes = __webpack_require__(97131);
// EXTERNAL MODULE: ./node_modules/date-fns/millisecondsToHours.mjs
var millisecondsToHours = __webpack_require__(90077);
// EXTERNAL MODULE: ./frontend/components/CriticalPolicyBadge/index.ts + 1 modules
var CriticalPolicyBadge = __webpack_require__(63840);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/Graphic/index.ts
var Graphic = __webpack_require__(20881);
;// ./frontend/components/HiddenPolicyBadge/HiddenPolicyBadge.tsx




const HiddenPolicyBadge_baseClass = "hidden-policy-badge";
const HiddenPolicyBadge = () => {
  return /* @__PURE__ */ react.createElement("div", { className: HiddenPolicyBadge_baseClass }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: "Hidden from end users",
      showArrow: true,
      position: "top",
      tipOffset: 8,
      underline: false,
      fixedPositionStrategy: true
    },
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "eye-slash", size: "small", color: "ui-fleet-black-75" }),
    /* @__PURE__ */ react.createElement("span", { className: "sr-only" }, "Hidden from end users")
  ));
};
/* harmony default export */ var HiddenPolicyBadge_HiddenPolicyBadge = (HiddenPolicyBadge);

;// ./frontend/components/HiddenPolicyBadge/index.ts



// EXTERNAL MODULE: ./frontend/components/SoftwareInstallPolicyBadges/SoftwareInstallPolicyBadges.tsx
var SoftwareInstallPolicyBadges = __webpack_require__(77823);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/LinkCell.tsx
var LinkCell = __webpack_require__(42690);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/PlatformCell/index.ts + 1 modules
var PlatformCell = __webpack_require__(61172);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TooltipTruncatedTextCell/index.ts + 1 modules
var TooltipTruncatedTextCell = __webpack_require__(16240);
// EXTERNAL MODULE: ./frontend/components/TableContainer/utilities/config_utils.ts
var config_utils = __webpack_require__(59227);
// EXTERNAL MODULE: ./frontend/components/Tag/index.ts + 1 modules
var Tag = __webpack_require__(42619);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
// EXTERNAL MODULE: ./frontend/utilities/sort/index.ts + 1 modules
var sort = __webpack_require__(81302);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
;// ./frontend/pages/policies/ManagePoliciesPage/helpers.tsx
/* unused harmony import specifier */ var React;



const getAutomationsForPolicy = (policy, otherAutomationType) => {
  const automations = [];
  if (policy.install_software) {
    automations.push({
      type: "software",
      name: (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(
        policy.install_software.name,
        policy.install_software.display_name
      ),
      iconName: policy.install_software.name,
      softwareTitleId: policy.install_software.software_title_id,
      iconUrl: policy.install_software.icon_url
    });
  }
  if (policy.run_script) {
    automations.push({
      type: "script",
      name: policy.run_script.name
    });
  }
  if (policy.resend_configuration_profile) {
    automations.push({
      type: "profile",
      name: policy.resend_configuration_profile.name
    });
  }
  if (policy.calendar_events_enabled) {
    automations.push({
      type: "calendar",
      name: "Maintenance window"
    });
  }
  if (policy.conditional_access_enabled) {
    automations.push({
      type: "conditional_access",
      name: "Conditional access"
    });
  }
  if (policy.webhook === "On") {
    automations.push({
      type: "other",
      name: otherAutomationType === "ticket" ? "Ticket" : "Webhook"
    });
  }
  return automations;
};
const getInstallSoftwareErrorMessage = (result, formData, currentTeamName) => {
  const apiErrorMessage = result.reason.data.errors[0].reason;
  const parts = apiErrorMessage.split(
    /(Software title with ID \d+|team ID \d+)/i
  );
  const jsxElement = parts.map((part) => {
    var _a;
    if (part.startsWith("Software title with ID")) {
      const swId = (_a = part.match(/\d+/)) == null ? void 0 : _a[0];
      const policy = formData.find(
        (item) => {
          var _a2;
          return ((_a2 = item.swIdToInstall) == null ? void 0 : _a2.toString()) === swId;
        }
      );
      return policy ? /* @__PURE__ */ React.createElement(React.Fragment, { key: part }, /* @__PURE__ */ React.createElement("b", null, policy.swNameToInstall), " (ID: ", swId, ")") : part;
    } else if (part.startsWith("team ID")) {
      return currentTeamName ? /* @__PURE__ */ React.createElement("b", { key: part }, currentTeamName) : part;
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, { key: part }, part);
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, "Could not update policy. ", jsxElement);
};
const getRunScriptErrorMessage = (result, formData, currentTeamName) => {
  const apiErrorMessage = result.reason.data.errors[0].reason;
  const parts = apiErrorMessage.split(/(Script with ID \d+|team ID \d+)/i);
  const jsxElement = parts.map((part) => {
    var _a;
    if (part.startsWith("Script with ID")) {
      const scriptId = (_a = part.match(/\d+/)) == null ? void 0 : _a[0];
      const policy = formData.find(
        (item) => {
          var _a2;
          return ((_a2 = item.scriptIdToRun) == null ? void 0 : _a2.toString()) === scriptId;
        }
      );
      return policy ? /* @__PURE__ */ React.createElement(React.Fragment, { key: part }, /* @__PURE__ */ React.createElement("b", null, policy.scriptNameToRun), " (ID: ", scriptId, ")") : part;
    } else if (part.startsWith("team ID")) {
      return currentTeamName ? /* @__PURE__ */ React.createElement("b", { key: part }, currentTeamName) : part;
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, { key: part }, part);
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, "Could not update policy. ", jsxElement);
};

// EXTERNAL MODULE: ./frontend/components/policies/helpers.ts
var policies_helpers = __webpack_require__(51248);
// EXTERNAL MODULE: ./frontend/components/StatusIndicatorWithIcon/index.ts
var StatusIndicatorWithIcon = __webpack_require__(59555);
;// ./frontend/pages/policies/ManagePoliciesPage/components/PassingColumnHeader/PassingColumnHeader.tsx




const PassingColumnHeader = ({ isPassing }) => {
  const [indicatorStatus, displayText] = policies_helpers/* default */.A[isPassing ? "pass" : "fail"];
  return /* @__PURE__ */ react.createElement(StatusIndicatorWithIcon/* default */.A, { value: displayText, status: indicatorStatus });
};
/* harmony default export */ var PassingColumnHeader_PassingColumnHeader = (PassingColumnHeader);

;// ./frontend/pages/policies/ManagePoliciesPage/components/PassingColumnHeader/index.ts



;// ./frontend/pages/policies/ManagePoliciesPage/components/PoliciesTable/PoliciesTableConfig.tsx

var PoliciesTableConfig_defProp = Object.defineProperty;
var PoliciesTableConfig_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PoliciesTableConfig_hasOwnProp = Object.prototype.hasOwnProperty;
var PoliciesTableConfig_propIsEnum = Object.prototype.propertyIsEnumerable;
var PoliciesTableConfig_defNormalProp = (obj, key, value) => key in obj ? PoliciesTableConfig_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PoliciesTableConfig_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PoliciesTableConfig_hasOwnProp.call(b, prop))
      PoliciesTableConfig_defNormalProp(a, prop, b[prop]);
  if (PoliciesTableConfig_getOwnPropSymbols)
    for (var prop of PoliciesTableConfig_getOwnPropSymbols(b)) {
      if (PoliciesTableConfig_propIsEnum.call(b, prop))
        PoliciesTableConfig_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

























const AUTOMATION_ICON_RENDERERS = {
  software: ({ name, iconName, iconUrl }) => /* @__PURE__ */ react.createElement("span", { className: "automations__software-icon" }, /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { name: iconName != null ? iconName : name, url: iconUrl, size: "small" })),
  script: ({ name }) => /* @__PURE__ */ react.createElement(
    Graphic/* default */.A,
    {
      name: name.endsWith(".sh") ? "file-sh" : "file-ps1",
      className: "scale-40-24"
    }
  ),
  profile: () => /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-configuration-profile", className: "scale-40-24" }),
  calendar: () => /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "calendar" }),
  conditional_access: () => /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "lock" }),
  other: () => /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "settings" })
};
const EditableAutomationsCell = ({
  ariaLabel,
  onEdit,
  className,
  children
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onEdit();
    }
  };
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      role: "button",
      tabIndex: 0,
      className: classnames_default()("automations__cell-content", className),
      onClick: onEdit,
      onKeyDown: handleKeyDown,
      "aria-label": ariaLabel
    },
    children,
    /* @__PURE__ */ react.createElement("span", { className: "automations__edit-button", "aria-hidden": "true" }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "pencil" }))
  );
};
const AutomationsCell = ({
  policy,
  otherAutomationType,
  onOpenManageAutomationsModal
}) => {
  const automations = getAutomationsForPolicy(policy, otherAutomationType);
  const canEdit = !!onOpenManageAutomationsModal;
  const handleEdit = () => onOpenManageAutomationsModal == null ? void 0 : onOpenManageAutomationsModal(policy);
  const renderAutomationIcon = (automation) => {
    var _a;
    return AUTOMATION_ICON_RENDERERS[automation.type]({
      name: automation.name,
      iconName: automation.type === "software" ? automation.iconName : void 0,
      iconUrl: (_a = automation.iconUrl) != null ? _a : void 0
    });
  };
  const isEmpty = automations.length === 0;
  let ariaLabel;
  let content;
  if (isEmpty) {
    ariaLabel = "Add automation";
    content = /* @__PURE__ */ react.createElement("span", { className: "automations__name" }, utilities_constants/* DEFAULT_EMPTY_CELL_VALUE */.r2);
  } else if (automations.length === 1) {
    const automation = automations[0];
    ariaLabel = `Edit automation: ${automation.name}`;
    content = /* @__PURE__ */ react.createElement(
      TooltipTruncatedTextCell/* default */.A,
      {
        prefix: renderAutomationIcon(automation),
        value: automation.name,
        className: "automations__name"
      }
    );
  } else {
    ariaLabel = "Edit automations";
    content = /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        className: "automations__count",
        position: "top",
        underline: false,
        fixedPositionStrategy: true,
        tipOffset: 8,
        tipContent: automations.map(({ name }) => name).join(", "),
        showArrow: true
      },
      automations.length,
      " automations"
    );
  }
  if (!canEdit) {
    return /* @__PURE__ */ react.createElement(
      "span",
      {
        className: classnames_default()(
          "automations__cell-content",
          "automations__cell-content--readonly",
          { "automations__cell-content--none": isEmpty }
        )
      },
      content
    );
  }
  return /* @__PURE__ */ react.createElement(
    EditableAutomationsCell,
    {
      ariaLabel,
      onEdit: handleEdit,
      className: classnames_default()({ "automations__cell-content--none": isEmpty })
    },
    content
  );
};
const getPolicyRefreshTime = (ms) => {
  const seconds = ms / 1e3;
  if (seconds < 60) {
    return `${seconds} seconds`;
  }
  if (seconds < 3600) {
    const minutes = (0,millisecondsToMinutes/* millisecondsToMinutes */.T)(ms);
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
  const hours = (0,millisecondsToHours/* millisecondsToHours */.J)(ms);
  return `${hours} hour${hours > 1 ? "s" : ""}`;
};
const getTooltip = (osqueryPolicyMs) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, "Mesh is collecting policy results. Try again", /* @__PURE__ */ react.createElement("br", null), "in about ", getPolicyRefreshTime(osqueryPolicyMs), " as the system catches up.");
};
const generateTableHeaders = (options, isPremiumTier, isPrimoMode) => {
  const {
    selectedTeamId,
    hasPermissionAndPoliciesToDelete,
    otherAutomationType,
    onOpenManageAutomationsModal
  } = options;
  const viewingTeamPolicies = selectedTeamId !== -1;
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
        const { critical, hidden, id, team_id, type } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(
          LinkCell/* default */.A,
          {
            className: "w250",
            tooltipTruncate: true,
            value: cellProps.cell.value,
            suffix: /* @__PURE__ */ react.createElement(react.Fragment, null, isPremiumTier && critical && /* @__PURE__ */ react.createElement(CriticalPolicyBadge/* default */.A, null), isPremiumTier && hidden && /* @__PURE__ */ react.createElement(HiddenPolicyBadge_HiddenPolicyBadge, null), type === "patch" && /* @__PURE__ */ react.createElement(Tag/* default */.A, { tooltip: SoftwareInstallPolicyBadges/* PATCH_TOOLTIP_CONTENT */.N, size: "small" }, "Patch"), viewingTeamPolicies && team_id === null && /* @__PURE__ */ react.createElement(Tag/* default */.A, { tooltip: "This policy runs on all hosts.", size: "small" }, "Inherited")),
            path: (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.POLICY_DETAILS(id), {
              // Inherited policies show team_id === null; preserve the
              // current team context so back nav returns to the same list
              // instead of "All teams".
              fleet_id: team_id != null ? team_id : selectedTeamId !== -1 ? selectedTeamId : null
            })
          }
        );
      },
      sortType: "caseInsensitive"
    },
    {
      title: "Targeted platforms",
      Header: "Targeted platforms",
      disableSortBy: true,
      accessor: "platform",
      Cell: (cellProps) => {
        const platforms = cellProps.cell.value.split(",").map((s) => s.trim()).filter(platform/* isQueryablePlatform */.ek);
        return /* @__PURE__ */ react.createElement(PlatformCell/* default */.A, { platforms });
      }
    },
    {
      title: "Automations",
      Header: "Automations",
      accessor: "automations",
      disableSortBy: true,
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        AutomationsCell,
        {
          policy: cellProps.row.original,
          otherAutomationType,
          onOpenManageAutomationsModal
        }
      )
    },
    {
      title: "Pass",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: /* @__PURE__ */ react.createElement(PassingColumnHeader_PassingColumnHeader, { isPassing: true }),
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "passing_host_count",
      Cell: (cellProps) => {
        const { has_run, id, next_update_ms } = cellProps.row.original;
        if (has_run) {
          return /* @__PURE__ */ react.createElement(
            LinkCell/* default */.A,
            {
              value: `${cellProps.cell.value} host${cellProps.cell.value.toString() === "1" ? "" : "s"}`,
              path: (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_HOSTS, {
                policy_id: id,
                policy_response: utilities_constants/* PolicyResponse */.iI.PASSING,
                fleet_id: selectedTeamId
              })
            }
          );
        }
        return /* @__PURE__ */ react.createElement("div", { className: "policy-has-not-run" }, /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tooltipClass: "policy-has-not-run-tooltip",
            position: "top",
            underline: false,
            fixedPositionStrategy: true,
            tipOffset: 8,
            tipContent: getTooltip(next_update_ms)
          },
          "---"
        ));
      }
    },
    {
      title: "Fail",
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: /* @__PURE__ */ react.createElement(PassingColumnHeader_PassingColumnHeader, { isPassing: false }),
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      accessor: "failing_host_count",
      Cell: (cellProps) => {
        const { has_run, id, next_update_ms } = cellProps.row.original;
        if (has_run) {
          return /* @__PURE__ */ react.createElement(
            LinkCell/* default */.A,
            {
              value: `${cellProps.cell.value} host${cellProps.cell.value.toString() === "1" ? "" : "s"}`,
              path: (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_HOSTS, {
                policy_id: id,
                policy_response: utilities_constants/* PolicyResponse */.iI.FAILING,
                fleet_id: selectedTeamId
              })
            }
          );
        }
        return /* @__PURE__ */ react.createElement("div", { className: "policy-has-not-run" }, /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tooltipClass: "policy-has-not-run-tooltip",
            position: "top",
            underline: false,
            fixedPositionStrategy: true,
            tipOffset: 8,
            tipContent: getTooltip(next_update_ms)
          },
          "---"
        ));
      },
      sortType: "caseInsensitive"
    }
  ];
  if (hasPermissionAndPoliciesToDelete) {
    tableHeaders.unshift({
      id: "selection",
      // TODO: headerProps is `any` because local IHeaderProps is a simplified
      // subset of react-table's HeaderProps. Fixing requires refactoring
      // IDataColumn/IHeaderProps to align with react-table's actual types.
      Header: (headerProps) => {
        const teamCheckboxProps = (0,config_utils/* getConditionalSelectHeaderCheckboxProps */.V)({
          headerProps,
          checkIfRowIsSelectable: (row) => (
            // allow selecting inherited policies in primo mode
            isPrimoMode || row.original.team_id !== null
          )
        });
        const {
          getToggleAllRowsSelectedProps,
          toggleAllRowsSelected
        } = headerProps;
        const { checked, indeterminate } = getToggleAllRowsSelectedProps();
        const regularCheckboxProps = {
          value: checked,
          indeterminate,
          onChange: () => {
            toggleAllRowsSelected();
          }
        };
        const checkboxProps = viewingTeamPolicies ? teamCheckboxProps : regularCheckboxProps;
        return /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            position: "right",
            tipOffset: 8,
            fixedPositionStrategy: true,
            renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
              Checkbox/* default */.A,
              PoliciesTableConfig_spreadValues({
                disabled: disableChildren,
                enableEnterToCheck: true
              }, checkboxProps)
            )
          }
        );
      },
      Cell: (cellProps) => {
        const inheritedPolicy = cellProps.row.original.team_id === null;
        const props = cellProps.row.getToggleRowSelectedProps();
        const checkboxProps = {
          value: props.checked,
          onChange: () => cellProps.row.toggleRowSelected()
        };
        if (viewingTeamPolicies && inheritedPolicy && !isPrimoMode) {
          return /* @__PURE__ */ react.createElement(react.Fragment, null);
        }
        return /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            position: "right",
            tipOffset: 8,
            fixedPositionStrategy: true,
            renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
              Checkbox/* default */.A,
              PoliciesTableConfig_spreadValues({
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
const nextPolicyUpdateMs = (policyItemUpdatedAtMs, nextHostCountUpdateMs, hostCountUpdateIntervalMs, osqueryPolicyMs) => {
  let timeFromPolicyItemUpdateToNextHostCountUpdateMs = Date.now() - policyItemUpdatedAtMs.getTime() + nextHostCountUpdateMs;
  let additionalUpdateTimeMs = 0;
  while (timeFromPolicyItemUpdateToNextHostCountUpdateMs <= osqueryPolicyMs) {
    additionalUpdateTimeMs += hostCountUpdateIntervalMs;
    timeFromPolicyItemUpdateToNextHostCountUpdateMs += hostCountUpdateIntervalMs;
  }
  return nextHostCountUpdateMs + additionalUpdateTimeMs;
};
const generateDataSet = (policiesList = [], currentAutomatedPolicies, osquery_policy) => {
  var _a;
  policiesList = policiesList.sort(
    (a, b) => sort/* default */.A.caseInsensitiveAsc(a.name, b.name)
  );
  let policiesLastRun;
  let osqueryPolicyMs = 0;
  const policiesThatHaveRunHostCountUpdatedAt = (
    // host counts of all policies that have run are updated at the same time, and are therefore
    // identical, so we can use the first one. Those that haven't run will be `null`.
    ((_a = policiesList.find((p) => !!p.host_count_updated_at)) == null ? void 0 : _a.host_count_updated_at) || ""
  );
  const hostCountUpdateIntervalMs = 60 * 60 * 1e3;
  const hostCountUpdatedAtDate = policiesThatHaveRunHostCountUpdatedAt ? new Date(policiesThatHaveRunHostCountUpdatedAt) : new Date(Date.now() - hostCountUpdateIntervalMs);
  if (osquery_policy) {
    osqueryPolicyMs = osquery_policy / 1e6;
    policiesLastRun = new Date(
      hostCountUpdatedAtDate.getTime() - osqueryPolicyMs
    );
  } else {
    policiesLastRun = hostCountUpdatedAtDate;
  }
  const nextHostCountUpdateMs = hostCountUpdateIntervalMs - (policiesThatHaveRunHostCountUpdatedAt ? (Date.now() - hostCountUpdatedAtDate.getTime()) % hostCountUpdateIntervalMs : 0);
  policiesList.forEach((policyItem) => {
    policyItem.webhook = currentAutomatedPolicies && currentAutomatedPolicies.includes(policyItem.id) ? "On" : "Off";
    const policyItemUpdatedAt = new Date(policyItem.updated_at);
    policyItem.has_run = !!policyItem.host_count_updated_at;
    if (!policyItem.has_run) {
      policyItem.next_update_ms = nextPolicyUpdateMs(
        policyItemUpdatedAt,
        nextHostCountUpdateMs,
        hostCountUpdateIntervalMs,
        osqueryPolicyMs
      );
    }
  });
  return policiesList;
};


;// ./frontend/pages/policies/ManagePoliciesPage/components/PoliciesTable/PoliciesTable.tsx

var PoliciesTable_defProp = Object.defineProperty;
var PoliciesTable_defProps = Object.defineProperties;
var PoliciesTable_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var PoliciesTable_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PoliciesTable_hasOwnProp = Object.prototype.hasOwnProperty;
var PoliciesTable_propIsEnum = Object.prototype.propertyIsEnumerable;
var PoliciesTable_defNormalProp = (obj, key, value) => key in obj ? PoliciesTable_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PoliciesTable_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PoliciesTable_hasOwnProp.call(b, prop))
      PoliciesTable_defNormalProp(a, prop, b[prop]);
  if (PoliciesTable_getOwnPropSymbols)
    for (var prop of PoliciesTable_getOwnPropSymbols(b)) {
      if (PoliciesTable_propIsEnum.call(b, prop))
        PoliciesTable_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var PoliciesTable_spreadProps = (a, b) => PoliciesTable_defProps(a, PoliciesTable_getOwnPropDescs(b));











const isLastPage = (count, pageSize, page) => {
  return count <= pageSize * (page + 1);
};
const PoliciesTable_baseClass = "policies-table";
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
  }
];
const PoliciesTable = ({
  policiesList,
  isLoading,
  onDeletePoliciesClick,
  onAddPolicyClick,
  canAddOrDeletePolicies,
  hasPoliciesToDelete,
  currentTeam,
  currentAutomatedPolicies,
  isPremiumTier,
  onQueryChange,
  renderPoliciesCount,
  searchQuery,
  sortHeader,
  sortDirection,
  page,
  count,
  customControl,
  isFiltered,
  router,
  queryParams,
  platform = "all",
  otherAutomationType,
  onOpenManageAutomationsModal
}) => {
  var _a, _b, _c, _d;
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const handlePlatformFilterDropdownChange = (0,react.useCallback)(
    (selectedTargetedPlatform) => {
      router.push(
        (0,utilities_helpers/* getNextLocationPath */.g2)({
          pathPrefix: paths/* default */.A.MANAGE_POLICIES,
          queryParams: PoliciesTable_spreadProps(PoliciesTable_spreadValues({}, queryParams), {
            page: 0,
            platform: (selectedTargetedPlatform == null ? void 0 : selectedTargetedPlatform.value) === "all" ? void 0 : selectedTargetedPlatform == null ? void 0 : selectedTargetedPlatform.value
          })
        })
      );
    },
    [queryParams, router]
  );
  const renderPlatformDropdown = (0,react.useCallback)(() => {
    return /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        name: "platform-dropdown",
        value: platform,
        className: `${PoliciesTable_baseClass}__platform-dropdown`,
        options: PLATFORM_FILTER_OPTIONS,
        onChange: handlePlatformFilterDropdownChange,
        variant: "table-filter",
        iconName: "filter-alt"
      }
    );
  }, [platform, handlePlatformFilterDropdownChange]);
  const isAllFleets = isPremiumTier && ((currentTeam == null ? void 0 : currentTeam.id) === null || (currentTeam == null ? void 0 : currentTeam.id) === team/* APP_CONTEXT_ALL_TEAMS_ID */.jc);
  let emptyHeader = "No policies yet";
  if (isPremiumTier && !((_a = config == null ? void 0 : config.partnerships) == null ? void 0 : _a.enable_primo)) {
    emptyHeader = isAllFleets ? "No policies apply to all fleets" : "No policies for this fleet";
  }
  const emptyState = {
    header: emptyHeader,
    info: "Policies are queries that return a pass or fail result. Failures trigger fixes or prompt end users to solve them on their own.",
    primaryButton: canAddOrDeletePolicies ? /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onAddPolicyClick, type: "button" }, "Add policy") : void 0
  };
  if (searchQuery || isFiltered) {
    delete emptyState.primaryButton;
    emptyState.header = "No matching policies";
    emptyState.info = "No policies match the current filters.";
  }
  const isTrulyEmpty = (policiesList == null ? void 0 : policiesList.length) === 0 && searchQuery === "" && !isFiltered;
  const combinedCustomControl = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${PoliciesTable_baseClass}__filter-dropdowns` }, customControl == null ? void 0 : customControl(), renderPlatformDropdown());
  };
  const isPrimoMode = ((_b = config == null ? void 0 : config.partnerships) == null ? void 0 : _b.enable_primo) || false;
  const viewingTeamPolicies = (currentTeam == null ? void 0 : currentTeam.id) !== void 0 && (currentTeam == null ? void 0 : currentTeam.id) !== null && (currentTeam == null ? void 0 : currentTeam.id) !== team/* APP_CONTEXT_ALL_TEAMS_ID */.jc;
  const pageHasSelectableRows = !viewingTeamPolicies || isPrimoMode || policiesList.some((p) => p.team_id !== null);
  const hasPermissionAndPoliciesToDelete = canAddOrDeletePolicies && hasPoliciesToDelete && pageHasSelectableRows;
  return /* @__PURE__ */ react.createElement("div", { className: PoliciesTable_baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      resultsTitle: "policies",
      columnConfigs: generateTableHeaders(
        {
          selectedTeamId: currentTeam == null ? void 0 : currentTeam.id,
          hasPermissionAndPoliciesToDelete,
          otherAutomationType,
          onOpenManageAutomationsModal
        },
        isPremiumTier,
        (_c = config == null ? void 0 : config.partnerships) == null ? void 0 : _c.enable_primo
      ),
      data: generateDataSet(
        policiesList,
        currentAutomatedPolicies,
        (_d = config == null ? void 0 : config.update_interval) == null ? void 0 : _d.osquery_policy
      ),
      isLoading,
      defaultSortHeader: sortHeader || DEFAULT_SORT_COLUMN,
      defaultSortDirection: sortDirection || DEFAULT_SORT_DIRECTION,
      defaultSearchQuery: searchQuery,
      pageIndex: page,
      disableNextPage: isLastPage(count, DEFAULT_PAGE_SIZE, page),
      showMarkAllPages: false,
      isAllPagesSelected: false,
      primarySelectAction: {
        name: "delete policy",
        buttonText: "Delete",
        iconSvg: "trash",
        variant: "secondary",
        onClick: onDeletePoliciesClick
      },
      emptyComponent: () => /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: emptyState.header,
          info: emptyState.info,
          additionalInfo: emptyState.additionalInfo,
          primaryButton: emptyState.primaryButton
        }
      ),
      renderCount: renderPoliciesCount,
      onQueryChange,
      inputPlaceHolder: "Search by name",
      searchable: true,
      disableSearch: isTrulyEmpty,
      customControl: combinedCustomControl,
      selectedDropdownFilter: platform
    }
  ));
};
/* harmony default export */ var PoliciesTable_PoliciesTable = (PoliciesTable);

;// ./frontend/pages/policies/ManagePoliciesPage/components/PoliciesTable/index.ts



;// ./frontend/pages/policies/ManagePoliciesPage/ManagePoliciesPage.tsx

var ManagePoliciesPage_defProp = Object.defineProperty;
var ManagePoliciesPage_defProps = Object.defineProperties;
var ManagePoliciesPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ManagePoliciesPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ManagePoliciesPage_hasOwnProp = Object.prototype.hasOwnProperty;
var ManagePoliciesPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var ManagePoliciesPage_defNormalProp = (obj, key, value) => key in obj ? ManagePoliciesPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ManagePoliciesPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ManagePoliciesPage_hasOwnProp.call(b, prop))
      ManagePoliciesPage_defNormalProp(a, prop, b[prop]);
  if (ManagePoliciesPage_getOwnPropSymbols)
    for (var prop of ManagePoliciesPage_getOwnPropSymbols(b)) {
      if (ManagePoliciesPage_propIsEnum.call(b, prop))
        ManagePoliciesPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ManagePoliciesPage_spreadProps = (a, b) => ManagePoliciesPage_defProps(a, ManagePoliciesPage_getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ManagePoliciesPage_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ManagePoliciesPage_getOwnPropSymbols)
    for (var prop of ManagePoliciesPage_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ManagePoliciesPage_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ManagePoliciesPage_async = (__this, __arguments, generator) => {
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

































const DEFAULT_SORT_DIRECTION = "asc";
const DEFAULT_PAGE_SIZE = 20;
const DEFAULT_SORT_COLUMN = "name";
const AUTOMATION_TYPES = [
  "software",
  "patch",
  "scripts",
  "profiles",
  "calendar",
  "conditional_access",
  "other"
];
const GLOBAL_AUTOMATION_TYPES = ["other"];
const getValidAutomationTypesForTeam = (teamIdForApi) => {
  if (teamIdForApi === void 0) {
    return GLOBAL_AUTOMATION_TYPES;
  }
  if (teamIdForApi === team/* API_NO_TEAM_ID */.Rp) {
    return AUTOMATION_TYPES.filter((type) => type !== "calendar");
  }
  return AUTOMATION_TYPES;
};
const ManagePoliciesPage_baseClass = "manage-policies-page";
const ManagePolicyPage = ({
  router,
  location
}) => {
  var _a, _b, _c, _d, _e;
  const queryParams = location.query;
  const {
    isGlobalAdmin,
    isGlobalMaintainer,
    isOnGlobalTeam,
    isPremiumTier,
    config: globalConfigFromContext,
    setConfig,
    setFilteredPoliciesPath,
    filteredPoliciesPath
  } = (0,react.useContext)(app/* AppContext */.BR);
  const isPrimoMode = ((_a = globalConfigFromContext == null ? void 0 : globalConfigFromContext.partnerships) == null ? void 0 : _a.enable_primo) || false;
  const { setResetSelectedRows } = (0,react.useContext)(table/* TableContext */.G);
  const {
    setLastEditedQueryName,
    setLastEditedQueryDescription,
    setLastEditedQueryResolution,
    setLastEditedQueryCritical,
    setLastEditedQueryHidden,
    setLastEditedQueryPlatform,
    setLastEditedQueryBody,
    setLastEditedQueryId,
    setPolicyTeamId
  } = (0,react.useContext)(policy/* PolicyContext */.q);
  const {
    currentTeamId,
    currentTeamSummary,
    isAllTeamsSelected,
    isTeamAdmin,
    isTeamMaintainer,
    isRouteOk,
    teamIdForApi,
    userTeams,
    handleTeamChange
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: true,
      observer: true,
      observer_plus: true,
      technician: true
    }
  });
  const [isUpdatingPolicies, setIsUpdatingPolicies] = (0,react.useState)(false);
  const [selectedPolicyIds, setSelectedPolicyIds] = (0,react.useState)([]);
  const [showDeletePoliciesModal, setShowDeletePoliciesModal] = (0,react.useState)(false);
  const [showAutomationsModal, setShowAutomationsModal] = (0,react.useState)(false);
  const [
    selectedPolicyForAutomations,
    setSelectedPolicyForAutomations
  ] = (0,react.useState)(null);
  const initialSearchQuery = (() => {
    var _a2;
    return (_a2 = queryParams.query) != null ? _a2 : "";
  })();
  const initialSortHeader = (() => {
    var _a2;
    return (_a2 = queryParams == null ? void 0 : queryParams.order_key) != null ? _a2 : DEFAULT_SORT_COLUMN;
  })();
  const initialSortDirection = (() => {
    var _a2;
    return (_a2 = queryParams == null ? void 0 : queryParams.order_direction) != null ? _a2 : DEFAULT_SORT_DIRECTION;
  })();
  const page = queryParams && queryParams.page ? parseInt(queryParams == null ? void 0 : queryParams.page, 10) : 0;
  const targetedPlatformParam = (0,platform/* isQueryablePlatform */.ek)(queryParams == null ? void 0 : queryParams.platform) ? queryParams == null ? void 0 : queryParams.platform : void 0;
  const initialAutomationFilter = (() => {
    const automationQueryParam = queryParams.automation_type;
    if (!automationQueryParam) {
      return null;
    }
    const validValues = getValidAutomationTypesForTeam(teamIdForApi);
    return validValues.includes(automationQueryParam) ? automationQueryParam : null;
  })();
  const isFirstNavigation = (0,react.useRef)(true);
  const [searchQuery, setSearchQuery] = (0,react.useState)(initialSearchQuery);
  const [
    tableQueryDataForApi,
    setTableQueryDataForApi
  ] = (0,react.useState)();
  const [sortHeader, setSortHeader] = (0,react.useState)(initialSortHeader);
  const [sortDirection, setSortDirection] = (0,react.useState)(initialSortDirection);
  const [automationFilter, setAutomationFilter] = (0,react.useState)(initialAutomationFilter);
  (0,react.useEffect)(() => {
    setLastEditedQueryPlatform(null);
  }, [setLastEditedQueryPlatform]);
  (0,react.useEffect)(() => {
    if (!isRouteOk) {
      return;
    }
    setSearchQuery(initialSearchQuery);
    setSortHeader(initialSortHeader);
    setSortDirection(initialSortDirection);
    setAutomationFilter(initialAutomationFilter);
  }, [
    location,
    isRouteOk,
    initialSearchQuery,
    initialSortHeader,
    initialSortDirection,
    initialAutomationFilter
  ]);
  (0,react.useEffect)(() => {
    if (!isRouteOk) {
      return;
    }
    const path = location.pathname + location.search;
    if (location.search && filteredPoliciesPath !== path) {
      setFilteredPoliciesPath(path);
    }
  }, [
    location.pathname,
    location.search,
    filteredPoliciesPath,
    setFilteredPoliciesPath,
    isRouteOk
  ]);
  const {
    data: globalPolicies,
    error: globalPoliciesError,
    isFetching: isFetchingGlobalPolicies,
    refetch: refetchGlobalPolicies
  } = (0,es.useQuery)(
    [
      {
        scope: "globalPolicies",
        page,
        perPage: DEFAULT_PAGE_SIZE,
        query: searchQuery,
        orderDirection: sortDirection,
        orderKey: sortHeader,
        automationType: automationFilter,
        platform: targetedPlatformParam
      }
    ],
    ({ queryKey }) => {
      return global_policies/* default */.A.loadAllNew(queryKey[0]);
    },
    {
      enabled: isRouteOk && isAllTeamsSelected,
      select: (data) => data.policies || [],
      staleTime: 5e3,
      refetchOnWindowFocus: false
    }
  );
  const {
    data: globalPoliciesCount,
    isFetching: isFetchingGlobalCount,
    isError: isErrorGlobalPoliciesCount,
    refetch: refetchGlobalPoliciesCount
  } = (0,es.useQuery)(
    [
      {
        scope: "policiesCount",
        query: !isAllTeamsSelected ? "" : searchQuery,
        automationType: automationFilter,
        platform: targetedPlatformParam
      }
    ],
    ({ queryKey }) => global_policies/* default */.A.getCount(queryKey[0]),
    {
      enabled: isRouteOk && isAllTeamsSelected,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 1,
      select: (data) => data.count
    }
  );
  const {
    data: teamPolicies,
    error: teamPoliciesError,
    isFetching: isFetchingTeamPolicies,
    refetch: refetchTeamPolicies
  } = (0,es.useQuery)(
    [
      {
        scope: "teamPolicies",
        page,
        perPage: DEFAULT_PAGE_SIZE,
        query: searchQuery,
        orderDirection: sortDirection,
        orderKey: sortHeader,
        // teamIdForApi will never actually be undefined here
        teamId: teamIdForApi || 0,
        // no teams does inherit
        mergeInherited: true,
        automationType: automationFilter,
        platform: targetedPlatformParam
      }
    ],
    ({ queryKey }) => {
      return team_policies/* default */.A.loadAllNew(queryKey[0]);
    },
    {
      enabled: isRouteOk && isPremiumTier && !isAllTeamsSelected,
      select: (data) => data.policies || [],
      refetchOnWindowFocus: false
    }
  );
  const {
    data: teamPoliciesCountResponse,
    isFetching: isFetchingTeamCountMergeInherited,
    isError: isErrorTeamPoliciesCount,
    refetch: refetchTeamPoliciesCountMergeInherited
  } = (0,es.useQuery)(
    [
      {
        scope: "teamPoliciesCountMergeInherited",
        query: searchQuery,
        teamId: teamIdForApi || 0,
        // TODO: Fix number/undefined type
        mergeInherited: true,
        automationType: automationFilter,
        platform: targetedPlatformParam
      }
    ],
    ({ queryKey }) => team_policies/* default */.A.getCount(queryKey[0]),
    {
      enabled: isRouteOk && isPremiumTier && !isAllTeamsSelected,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 1
    }
  );
  const teamPoliciesCountMergeInherited = teamPoliciesCountResponse == null ? void 0 : teamPoliciesCountResponse.count;
  const canAddOrDeletePolicies = isGlobalAdmin || isGlobalMaintainer || isTeamMaintainer || isTeamAdmin;
  const canEditAutomationsSettings = isGlobalAdmin || isTeamAdmin;
  const { data: globalConfig, isFetching: isFetchingGlobalConfig } = (0,es.useQuery)(
    ["config"],
    () => {
      return config/* default */.A.loadAll();
    },
    {
      enabled: isRouteOk,
      onSuccess: (data) => {
        setConfig(data);
      },
      staleTime: 5e3,
      refetchOnWindowFocus: false
    }
  );
  const { data: teamData, isFetching: isFetchingTeamConfig } = (0,es.useQuery)(["teams", teamIdForApi], () => teams/* default */.A.load(teamIdForApi), {
    // Enable for all teams including "No team" (teamIdForApi === 0)
    enabled: isRouteOk && teamIdForApi !== void 0,
    staleTime: 5e3,
    refetchOnWindowFocus: false
  });
  const teamConfig = teamData == null ? void 0 : teamData.team;
  const automationsConfig = isAllTeamsSelected ? globalConfig : teamConfig;
  const refetchPolicies = (teamId) => {
    if (teamId !== void 0) {
      refetchTeamPolicies();
      refetchTeamPoliciesCountMergeInherited();
    } else {
      refetchGlobalPolicies();
      refetchGlobalPoliciesCount();
    }
  };
  const onTeamChange = (0,react.useCallback)(
    (teamId) => {
      setSelectedPolicyIds([]);
      handleTeamChange(teamId);
    },
    [handleTeamChange]
  );
  const onQueryChange = (0,react.useCallback)(
    (newTableQuery) => ManagePoliciesPage_async(null, null, function* () {
      if (!isRouteOk || (0,lodash.isEqual)(newTableQuery, tableQueryDataForApi)) {
        return;
      }
      setTableQueryDataForApi(ManagePoliciesPage_spreadValues({}, newTableQuery));
      const {
        pageIndex: newPageIndex,
        searchQuery: newSearchQuery,
        sortDirection: newSortDirection,
        sortHeader: newSortHeader
      } = newTableQuery;
      const newQueryParams = {};
      newQueryParams.query = newSearchQuery;
      newQueryParams.order_key = newSortHeader;
      newQueryParams.order_direction = newSortDirection;
      newQueryParams.page = newPageIndex.toString();
      if (newSortDirection !== sortDirection || newSortHeader !== sortHeader || newSearchQuery !== searchQuery) {
        newQueryParams.page = "0";
      }
      if (isRouteOk && teamIdForApi !== void 0) {
        newQueryParams.fleet_id = teamIdForApi;
      }
      const locationPath = (0,utilities_helpers/* getNextLocationPath */.g2)({
        pathPrefix: paths/* default */.A.MANAGE_POLICIES,
        queryParams: ManagePoliciesPage_spreadValues(ManagePoliciesPage_spreadValues({}, queryParams), newQueryParams)
      });
      if (isFirstNavigation.current) {
        isFirstNavigation.current = false;
        router == null ? void 0 : router.replace(locationPath);
      } else {
        router == null ? void 0 : router.push(locationPath);
      }
    }),
    [
      isRouteOk,
      tableQueryDataForApi,
      sortDirection,
      sortHeader,
      searchQuery,
      teamIdForApi,
      queryParams,
      router
    ]
    // Other dependencies can cause infinite re-renders as URL is source of truth
  );
  const toggleDeletePoliciesModal = () => setShowDeletePoliciesModal(!showDeletePoliciesModal);
  const toggleAutomationsModal = () => setShowAutomationsModal(!showAutomationsModal);
  const onOpenManageAutomationsModal = (policy) => setSelectedPolicyForAutomations(policy);
  const onCloseManageAutomationsModal = () => setSelectedPolicyForAutomations(null);
  const onAddPolicyClick = () => {
    setLastEditedQueryName("");
    setLastEditedQueryDescription("");
    setLastEditedQueryResolution("");
    setLastEditedQueryCritical(false);
    setLastEditedQueryHidden(false);
    setPolicyTeamId(
      currentTeamId === team/* API_ALL_TEAMS_ID */.s_ ? team/* APP_CONTEXT_ALL_TEAMS_ID */.jc : currentTeamId
    );
    setLastEditedQueryBody(constants/* DEFAULT_POLICY */.zj.query);
    setLastEditedQueryId(null);
    router.push(
      currentTeamId === team/* API_ALL_TEAMS_ID */.s_ ? paths/* default */.A.NEW_POLICY : `${paths/* default */.A.NEW_POLICY}?fleet_id=${currentTeamId}`
    );
  };
  const onDeletePoliciesClick = (selectedTableIds) => {
    toggleDeletePoliciesModal();
    setSelectedPolicyIds(selectedTableIds);
  };
  const onDeletePolicySubmit = (0,react.useCallback)(() => ManagePoliciesPage_async(null, null, function* () {
    setIsUpdatingPolicies(true);
    try {
      const responses = [];
      if (isPrimoMode) {
        const selectedSet = new Set(selectedPolicyIds);
        const [
          globalPolicyIdsToDelete,
          teamPolicyIdsToDelete
          // will be No team, since this is Primo mode
        ] = (teamPolicies != null ? teamPolicies : []).reduce(
          (acc, policy) => {
            if (selectedSet.has(policy.id)) {
              if (policy.team_id === null) {
                acc[0].push(policy.id);
              } else {
                acc[1].push(policy.id);
              }
            }
            return acc;
          },
          [[], []]
        );
        if (globalPolicyIdsToDelete.length) {
          responses.push(global_policies/* default */.A.destroy(globalPolicyIdsToDelete));
        }
        if (teamPolicyIdsToDelete.length) {
          responses.push(
            team_policies/* default */.A.destroy(teamIdForApi, teamPolicyIdsToDelete)
          );
        }
      } else {
        responses.push(
          !isAllTeamsSelected ? team_policies/* default */.A.destroy(teamIdForApi, selectedPolicyIds) : global_policies/* default */.A.destroy(selectedPolicyIds)
        );
      }
      yield Promise.all(responses);
      ToastNotification/* notify */.me.success("Successfully deleted policies.");
      setResetSelectedRows(true);
      refetchPolicies(teamIdForApi);
    } catch (e) {
      ToastNotification/* notify */.me.error("Unable to delete policies. Please try again.", {
        response: e
      });
    } finally {
      toggleDeletePoliciesModal();
      setIsUpdatingPolicies(false);
    }
  }), [
    isAllTeamsSelected,
    isPrimoMode,
    refetchPolicies,
    selectedPolicyIds,
    setResetSelectedRows,
    teamIdForApi,
    teamPolicies,
    toggleDeletePoliciesModal
  ]);
  const onChangeAutomationFilter = (val) => {
    const automationType = val == null ? void 0 : val.value;
    const locationPath = (0,utilities_helpers/* getNextLocationPath */.g2)({
      pathPrefix: paths/* default */.A.MANAGE_POLICIES,
      queryParams: ManagePoliciesPage_spreadProps(ManagePoliciesPage_spreadValues({}, queryParams), {
        page: "0",
        automation_type: automationType === "all" ? void 0 : automationType
      })
    });
    router == null ? void 0 : router.push(locationPath);
  };
  const policiesErrors = !isAllTeamsSelected ? teamPoliciesError : globalPoliciesError;
  const policyResults = !isAllTeamsSelected ? teamPolicies !== void 0 : globalPolicies !== void 0;
  const showCtaButtons = !policiesErrors;
  const hasPoliciesToAutomate = isAllTeamsSelected ? (globalPoliciesCount != null ? globalPoliciesCount : 0) > 0 : (teamPoliciesCountMergeInherited != null ? teamPoliciesCountMergeInherited : 0) > ((_b = teamPoliciesCountResponse == null ? void 0 : teamPoliciesCountResponse.inherited_policy_count) != null ? _b : 0);
  const hasPoliciesToDelete = hasPoliciesToAutomate || isPrimoMode && ((_c = teamPolicies == null ? void 0 : teamPolicies.length) != null ? _c : 0) > 0;
  (0,react.useEffect)(() => {
    if (location.query.manage_automations !== "1") return;
    const countSettled = isAllTeamsSelected ? globalPoliciesCount !== void 0 || isErrorGlobalPoliciesCount : teamPoliciesCountResponse !== void 0 || isErrorTeamPoliciesCount;
    if (!countSettled) return;
    if (canEditAutomationsSettings && hasPoliciesToAutomate) {
      setShowAutomationsModal(true);
    }
    const _a2 = location.query, { manage_automations } = _a2, rest = __objRest(_a2, ["manage_automations"]);
    router.replace({ pathname: location.pathname, query: rest });
  }, [
    location.query,
    location.pathname,
    router,
    canEditAutomationsSettings,
    hasPoliciesToAutomate,
    isAllTeamsSelected,
    globalPoliciesCount,
    teamPoliciesCountResponse,
    isErrorGlobalPoliciesCount,
    isErrorTeamPoliciesCount
  ]);
  const fleetAutomationInfo = (0,helpers/* getTicketOrWebhookInfo */.LM)(automationsConfig);
  const inheritedAutomationInfo = !isAllTeamsSelected ? (0,helpers/* getTicketOrWebhookInfo */.LM)(globalConfig) : { state: "disabled", policyIds: [] };
  const currentAutomatedPolicies = Array.from(
    /* @__PURE__ */ new Set([
      ...fleetAutomationInfo.policyIds,
      ...inheritedAutomationInfo.policyIds
    ])
  );
  const ticketOrWebhookState = fleetAutomationInfo.state !== "disabled" ? fleetAutomationInfo.state : inheritedAutomationInfo.state;
  const otherAutomationType = ticketOrWebhookState === "disabled" ? void 0 : ticketOrWebhookState;
  const renderPoliciesCountAndLastUpdated = (count, policies) => {
    var _a2;
    const isFetchingCount = !isAllTeamsSelected ? isFetchingTeamCountMergeInherited : isFetchingGlobalCount;
    const hide = isFetchingCount || policiesErrors || !policyResults && searchQuery === "" && !automationFilter && !targetedPlatformParam;
    if (hide) {
      return null;
    }
    const updatedAt = ((_a2 = policies == null ? void 0 : policies.find((p) => !!p.host_count_updated_at)) == null ? void 0 : _a2.host_count_updated_at) || "";
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TableCount/* default */.A, { name: "policies", count }), /* @__PURE__ */ react.createElement(
      LastUpdatedText/* default */.A,
      {
        lastUpdatedAt: updatedAt,
        customTooltipText: /* @__PURE__ */ react.createElement(react.Fragment, null, "Counts are updated hourly. Click host counts for the most up-to-date count.")
      }
    ));
  };
  const automationFilterOptions = [
    {
      label: "All automations",
      value: "all",
      helpText: "All policies added to Fleet."
    },
    {
      label: "Software",
      value: "software",
      helpText: "Policies with software automation enabled."
    },
    {
      label: "Patch",
      value: "patch",
      helpText: "Patch policies for Fleet-maintained apps."
    },
    {
      label: "Scripts",
      value: "scripts",
      helpText: "Policies with script automation enabled."
    },
    {
      label: "Profiles",
      value: "profiles",
      helpText: "Policies with configuration profile automation enabled."
    },
    {
      label: "Calendar",
      value: "calendar",
      helpText: "Policies with calendar event automation enabled."
    },
    {
      label: "Conditional access",
      value: "conditional_access",
      helpText: "Policies with conditional access automation enabled."
    },
    {
      label: "Webhooks or tickets",
      value: "other",
      helpText: "Policies with webhook or ticket automation enabled."
    }
  ];
  const allPoliciesOption = automationFilterOptions[0];
  const getSelectedFilterOption = () => {
    if (!automationFilter) {
      return allPoliciesOption;
    }
    return automationFilterOptions.find(
      (opt) => opt.value === automationFilter
    );
  };
  const renderAutomationFilter = isPremiumTier ? () => {
    if (policiesErrors) {
      return null;
    }
    const policiesCount = isAllTeamsSelected ? globalPoliciesCount : teamPoliciesCountMergeInherited;
    const isTrulyEmpty = (policiesCount != null ? policiesCount : 0) === 0 && searchQuery === "" && !automationFilter && !targetedPlatformParam;
    const validAutomationTypesForTeam = getValidAutomationTypesForTeam(
      teamIdForApi
    );
    const optionsForTeam = automationFilterOptions.filter(
      (opt) => opt.value === "all" || validAutomationTypesForTeam.includes(opt.value)
    );
    return /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        className: `${ManagePoliciesPage_baseClass}__filter-automation-dropdown`,
        name: "filter-by-automation",
        value: getSelectedFilterOption(),
        onChange: onChangeAutomationFilter,
        placeholder: "Filter by automation",
        options: optionsForTeam,
        variant: "table-filter",
        isDisabled: isTrulyEmpty
      }
    );
  } : void 0;
  const renderMainTable = () => {
    if (!isRouteOk || isPremiumTier && !userTeams) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isAllTeamsSelected) {
      if (globalPoliciesError) {
        return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
      }
      return /* @__PURE__ */ react.createElement(
        PoliciesTable_PoliciesTable,
        {
          policiesList: globalPolicies || [],
          isLoading: isFetchingGlobalPolicies || isFetchingGlobalConfig,
          onDeletePoliciesClick,
          onAddPolicyClick,
          canAddOrDeletePolicies,
          hasPoliciesToDelete,
          currentTeam: currentTeamSummary,
          currentAutomatedPolicies,
          isPremiumTier,
          renderPoliciesCount: () => renderPoliciesCountAndLastUpdated(
            globalPoliciesCount,
            globalPolicies
          ),
          count: globalPoliciesCount || 0,
          searchQuery,
          sortHeader,
          sortDirection,
          page,
          onQueryChange,
          customControl: renderAutomationFilter,
          isFiltered: !!automationFilter || !!targetedPlatformParam,
          router,
          queryParams,
          platform: targetedPlatformParam,
          otherAutomationType,
          onOpenManageAutomationsModal: canAddOrDeletePolicies ? onOpenManageAutomationsModal : void 0
        }
      );
    }
    if (teamPoliciesError) {
      return /* @__PURE__ */ react.createElement(DataError/* default */.A, { verticalPaddingSize: "pad-xxxlarge" });
    }
    const displayedTeamPolicies = teamPolicies || [];
    return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
      PoliciesTable_PoliciesTable,
      {
        policiesList: displayedTeamPolicies,
        isLoading: isFetchingTeamPolicies || isFetchingTeamConfig || isFetchingGlobalConfig,
        onDeletePoliciesClick,
        onAddPolicyClick,
        canAddOrDeletePolicies,
        hasPoliciesToDelete,
        currentTeam: currentTeamSummary,
        currentAutomatedPolicies,
        renderPoliciesCount: () => renderPoliciesCountAndLastUpdated(
          teamPoliciesCountMergeInherited,
          displayedTeamPolicies
        ),
        isPremiumTier,
        count: teamPoliciesCountMergeInherited || 0,
        searchQuery,
        sortHeader,
        sortDirection,
        page,
        onQueryChange,
        customControl: renderAutomationFilter,
        isFiltered: !!automationFilter || !!targetedPlatformParam,
        router,
        queryParams,
        platform: targetedPlatformParam,
        otherAutomationType,
        onOpenManageAutomationsModal: canAddOrDeletePolicies ? onOpenManageAutomationsModal : void 0
      }
    ));
  };
  let automationsButton = null;
  if (canEditAutomationsSettings) {
    automationsButton = /* @__PURE__ */ react.createElement(
      AutomationsButton/* default */.A,
      {
        onClick: toggleAutomationsModal,
        disabled: !hasPoliciesToAutomate
      }
    );
    if (!hasPoliciesToAutomate) {
      const tipContent = isPremiumTier && currentTeamId !== team/* APP_CONTEXT_ALL_TEAMS_ID */.jc && !((_d = globalConfigFromContext == null ? void 0 : globalConfigFromContext.partnerships) == null ? void 0 : _d.enable_primo) ? /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass}__header__tooltip` }, "To manage automations add a policy to this fleet.", /* @__PURE__ */ react.createElement("br", null), "For inherited policies select \u201CAll fleets\u201D.") : /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass}__header__tooltip` }, "To manage automations add a policy.");
      automationsButton = /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          underline: false,
          tipContent,
          position: "top",
          showArrow: true
        },
        automationsButton
      );
    }
  }
  if (!isRouteOk) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  const renderHeader = () => {
    if (isPremiumTier && !isPrimoMode) {
      if (userTeams && userTeams.length > 1 || isOnGlobalTeam) {
        return /* @__PURE__ */ react.createElement(
          FleetsDropdown/* default */.A,
          {
            currentUserFleets: userTeams || [],
            selectedFleetId: currentTeamId,
            onChange: onTeamChange,
            includeUnassigned: true
          }
        );
      }
      if (!isOnGlobalTeam && userTeams && userTeams.length === 1) {
        return /* @__PURE__ */ react.createElement("h1", null, userTeams[0].name);
      }
    }
    return /* @__PURE__ */ react.createElement("h1", null, "Policies");
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: ManagePoliciesPage_baseClass }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass}__header-wrap` }, /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass}__header` }, /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass}__text` }, /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass}__title` }, renderHeader())), showCtaButtons && /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass} button-wrap` }, automationsButton, canAddOrDeletePolicies && /* @__PURE__ */ react.createElement("div", { className: `${ManagePoliciesPage_baseClass}__action-button-container` }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: `${ManagePoliciesPage_baseClass}__select-policy-button`,
      onClick: onAddPolicyClick
    },
    "Add policy"
  )))), /* @__PURE__ */ react.createElement(PageDescription/* default */.A, { content: "Detect device health issues." })), renderMainTable(), showDeletePoliciesModal && /* @__PURE__ */ react.createElement(
    DeletePoliciesModal_DeletePoliciesModal,
    {
      isUpdatingPolicies,
      onCancel: toggleDeletePoliciesModal,
      onSubmit: onDeletePolicySubmit
    }
  ), showAutomationsModal && /* @__PURE__ */ react.createElement(
    AutomationsModal_AutomationsModal,
    {
      router,
      isAllTeamsSelected,
      teamIdForApi,
      globalConfig,
      teamConfig,
      gitOpsModeEnabled: (_e = globalConfig == null ? void 0 : globalConfig.gitops.gitops_mode_enabled) != null ? _e : false,
      refetchPolicies: () => refetchPolicies(teamIdForApi),
      onExit: toggleAutomationsModal
    }
  ), selectedPolicyForAutomations && (() => {
    var _a2;
    const isInheritedGlobal = selectedPolicyForAutomations.team_id === null;
    const modalAutomationsConfig = isInheritedGlobal ? globalConfig : automationsConfig;
    return /* @__PURE__ */ react.createElement(
      ManageAutomationsModal_ManageAutomationsModal,
      {
        policy: selectedPolicyForAutomations,
        fleetName: isInheritedGlobal ? "All fleets" : (_a2 = currentTeamSummary == null ? void 0 : currentTeamSummary.name) != null ? _a2 : "",
        isGlobalPolicy: isInheritedGlobal,
        teamIdForApi,
        automationsConfig: modalAutomationsConfig,
        globalConfig,
        refetchPolicies: () => refetchPolicies(teamIdForApi),
        onExit: onCloseManageAutomationsModal
      }
    );
  })()));
};
/* harmony default export */ var ManagePoliciesPage = (ManagePolicyPage);

;// ./frontend/pages/policies/ManagePoliciesPage/index.ts




/***/ }),

/***/ 17244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* reexport */ PolicyAutomationsFields_PolicyAutomationsFields; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/DropdownWrapper.tsx
var DropdownWrapper = __webpack_require__(78131);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useGitOpsMode.ts
var useGitOpsMode = __webpack_require__(4346);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/pages/policies/helpers.ts
var helpers = __webpack_require__(41820);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/permissions/index.ts
var permissions = __webpack_require__(65913);
;// ./frontend/pages/policies/components/PolicyAutomationsFields/helpers.ts

const rewriteProfilePlatform = (platform) => {
  switch (platform) {
    case "darwin":
      return "macOS";
    case "windows":
      return "Windows";
    default:
      return "Unsupported";
  }
};
const VALID_PROFILE_PLATFORMS = ["darwin", "windows"];
const filterValidProfiles = (val) => {
  if (!VALID_PROFILE_PLATFORMS.includes(val.platform)) {
    return false;
  }
  if (val.profile_uuid.startsWith("d")) {
    return false;
  }
  return true;
};

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/services/entities/scripts.ts
var scripts = __webpack_require__(87844);
;// ./frontend/pages/policies/components/PolicyAutomationsFields/hooks/useScripts.ts




const SCRIPTS_PAGE_SIZE = 1e3;
const useScripts = ({ fleetId, enabled }) => (0,es.useQuery)(
  [
    {
      scope: "scripts",
      page: 0,
      per_page: SCRIPTS_PAGE_SIZE,
      fleet_id: fleetId
    }
  ],
  ({ queryKey: [key] }) => scripts/* default */.A.getScripts((0,lodash.omit)(key, "scope")),
  { enabled, staleTime: 3e4 }
);
/* harmony default export */ var hooks_useScripts = (useScripts);

// EXTERNAL MODULE: ./frontend/services/entities/software.ts
var software = __webpack_require__(77931);
;// ./frontend/pages/policies/components/PolicyAutomationsFields/hooks/useSoftwareTitles.ts




const SOFTWARE_PAGE_SIZE = 1e3;
const useSoftwareTitles = ({ fleetId, enabled }) => (0,es.useQuery)(
  [
    {
      scope: "software-titles",
      page: 0,
      perPage: SOFTWARE_PAGE_SIZE,
      query: "",
      orderDirection: "desc",
      orderKey: "hosts_count",
      teamId: fleetId,
      availableForInstall: true,
      platform: "darwin,windows,linux"
    }
  ],
  ({ queryKey: [key] }) => software/* default */.A.getSoftwareTitles((0,lodash.omit)(key, "scope")),
  { enabled, staleTime: 3e4 }
);
/* harmony default export */ var hooks_useSoftwareTitles = (useSoftwareTitles);

// EXTERNAL MODULE: ./frontend/services/entities/mdm.ts
var mdm = __webpack_require__(31332);
;// ./frontend/pages/policies/components/PolicyAutomationsFields/hooks/useProfiles.ts




const PROFILES_PAGE_SIZE = 1e3;
const useProfiles = ({ fleetId, enabled }) => (0,es.useQuery)(
  [
    {
      scope: "profiles",
      page: 0,
      per_page: PROFILES_PAGE_SIZE,
      fleet_id: fleetId
    }
  ],
  ({ queryKey: [key] }) => mdm/* default */.A.getProfiles((0,lodash.omit)(key, "scope")),
  { enabled, staleTime: 3e4 }
);
/* harmony default export */ var hooks_useProfiles = (useProfiles);

;// ./frontend/pages/policies/components/PolicyAutomationsFields/hooks/index.ts





;// ./frontend/pages/policies/components/PolicyAutomationsFields/PolicyAutomationsFields.tsx

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















const baseClass = "policy-automations-fields";
const PolicyAutomationsFields = (0,react.forwardRef)(
  ({
    policy,
    isGlobalPolicy,
    teamIdForApi,
    automationsConfig,
    globalConfig,
    fleetName,
    patchOption,
    endUserExperience,
    patchSlot,
    selectedPlatforms,
    onConditionalAccessChange
  }, ref) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    const { gitOpsModeEnabled } = (0,useGitOpsMode/* default */.A)();
    const { currentUser, isGlobalAdmin } = (0,react.useContext)(app/* AppContext */.BR);
    const {
      state: ticketOrWebhookState,
      policyIds: webhookOrTicketPolicyIds
    } = (0,helpers/* getTicketOrWebhookInfo */.LM)(automationsConfig);
    const isTicketWebhookEnabled = ticketOrWebhookState !== "disabled";
    const canEditWebhookOrTicket = !!isGlobalAdmin || teamIdForApi !== void 0 && teamIdForApi !== team/* API_NO_TEAM_ID */.Rp && !!currentUser && permissions/* default */.A.isTeamAdmin(currentUser, teamIdForApi);
    const isCalendarEnabledForTeam = !isGlobalPolicy && teamIdForApi !== team/* API_NO_TEAM_ID */.Rp ? (_c = (_b = (_a = automationsConfig == null ? void 0 : automationsConfig.integrations) == null ? void 0 : _a.google_calendar) == null ? void 0 : _b.enable_calendar_events) != null ? _c : false : false;
    const getIsConditionalAccessEnabledForTeam = () => {
      var _a2, _b2, _c2, _d2;
      if (isGlobalPolicy) return false;
      if (teamIdForApi === team/* API_NO_TEAM_ID */.Rp) {
        return (_b2 = (_a2 = globalConfig == null ? void 0 : globalConfig.integrations) == null ? void 0 : _a2.conditional_access_enabled) != null ? _b2 : false;
      }
      return (_d2 = (_c2 = automationsConfig == null ? void 0 : automationsConfig.integrations) == null ? void 0 : _c2.conditional_access_enabled) != null ? _d2 : false;
    };
    const isConditionalAccessEnabledForTeam = getIsConditionalAccessEnabledForTeam();
    const initialWebhookOrTicket = webhookOrTicketPolicyIds.includes(policy.id);
    const initialInstallSoftware = !!policy.install_software;
    const initialRunScript = !!policy.run_script;
    const initialResendConfigProfile = !!policy.resend_configuration_profile;
    const initialCalendar = policy.calendar_events_enabled;
    const initialConditionalAccess = policy.conditional_access_enabled;
    const initialContinuous = (_d = policy.continuous_automations_enabled) != null ? _d : false;
    const initialPatchWhenClosed = (_e = policy.patch_when_closed) != null ? _e : false;
    const initialNotifyBeforePatching = (_f = policy.notify_before_patching) != null ? _f : false;
    const [webhookOrTicketEnabled, setWebhookOrTicketEnabled] = (0,react.useState)(
      initialWebhookOrTicket
    );
    const [installSoftware, setInstallSoftware] = (0,react.useState)(
      initialInstallSoftware
    );
    const [runScript, setRunScript] = (0,react.useState)(initialRunScript);
    const [resendConfigProfile, setResendConfigProfile] = (0,react.useState)(
      initialResendConfigProfile
    );
    const [calendarEvent, setCalendarEvent] = (0,react.useState)(initialCalendar);
    const [conditionalAccess, setConditionalAccess] = (0,react.useState)(
      initialConditionalAccess
    );
    const [continuousEnabled, setContinuousEnabled] = (0,react.useState)(
      initialPatchWhenClosed || initialNotifyBeforePatching ? false : initialContinuous
    );
    const patchWhenClosed = patchOption ? patchOption === "closed" : initialPatchWhenClosed;
    const notifyBeforePatching = patchOption !== void 0 ? patchOption === "force" && endUserExperience === "notify" : initialNotifyBeforePatching;
    const isContinuousAutomationsRequired = patchWhenClosed || notifyBeforePatching;
    const getContinuousAutomationsRequiredTooltip = () => {
      if (patchWhenClosed) {
        return "Continuous automation can't be disabled when Patch when app is closed is selected.";
      }
      if (notifyBeforePatching) {
        return "Continuous automation can't be disabled when Notify before patching is selected.";
      }
      return void 0;
    };
    const getEffectiveContinuousEnabled = () => {
      if (isContinuousAutomationsRequired) return true;
      if (patchOption === "manual") return initialContinuous;
      return continuousEnabled;
    };
    const continuousAutomationsRequiredTooltip = getContinuousAutomationsRequiredTooltip();
    const effectiveContinuousEnabled = getEffectiveContinuousEnabled();
    const [softwareTitleId, setSoftwareTitleId] = (0,react.useState)(
      (_h = (_g = policy.install_software) == null ? void 0 : _g.software_title_id) != null ? _h : null
    );
    const [softwarePackageId, setSoftwarePackageId] = (0,react.useState)(
      (_j = (_i = policy.install_software) == null ? void 0 : _i.software_package_id) != null ? _j : null
    );
    const patchSoftwareTitleId = (_l = (_k = policy.patch_software) == null ? void 0 : _k.software_title_id) != null ? _l : null;
    const effectiveInstallSoftware = patchOption === void 0 ? installSoftware : patchOption !== "manual";
    let effectiveSoftwareTitleId = softwareTitleId;
    let effectiveSoftwarePackageId = softwarePackageId;
    if (patchOption !== void 0) {
      effectiveSoftwareTitleId = effectiveInstallSoftware ? patchSoftwareTitleId : null;
      effectiveSoftwarePackageId = effectiveInstallSoftware && ((_m = policy.install_software) == null ? void 0 : _m.software_title_id) === patchSoftwareTitleId ? softwarePackageId : null;
    }
    const [scriptId, setScriptId] = (0,react.useState)(
      (_o = (_n = policy.run_script) == null ? void 0 : _n.id) != null ? _o : null
    );
    const [profileUUID, setProfileUUID] = (0,react.useState)(
      (_q = (_p = policy.resend_configuration_profile) == null ? void 0 : _p.profile_uuid) != null ? _q : null
    );
    const hasProfilePlatform = selectedPlatforms.some(
      (p) => VALID_PROFILE_PLATFORMS.includes(p)
    );
    const resendProfileDisabled = !hasProfilePlatform;
    const [errors, setErrors] = (0,react.useState)({});
    const clearError = (0,react.useCallback)(
      (key) => setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = __spreadValues({}, prev);
        delete next[key];
        return next;
      }),
      [setErrors]
    );
    const hasPlatformSelection = selectedPlatforms.length > 0;
    (0,react.useEffect)(() => {
      if (hasPlatformSelection && !hasProfilePlatform) {
        setProfileUUID(null);
        setResendConfigProfile(false);
        clearError("resend_configuration_profile");
      }
    }, [hasPlatformSelection, hasProfilePlatform, clearError]);
    const validate = () => {
      var _a2;
      const newErrors = {};
      if (effectiveInstallSoftware && effectiveSoftwareTitleId === null) {
        newErrors.install_software = "Please select software to install.";
      } else if (patchOption === void 0 && effectiveInstallSoftware && effectiveSoftwareTitleId !== null && ((_a2 = selectedTitlePackages == null ? void 0 : selectedTitlePackages.length) != null ? _a2 : 0) > 0 && effectiveSoftwarePackageId === null) {
        newErrors.install_software = "Please select a package to install.";
      }
      if (runScript && scriptId === null) {
        newErrors.run_script = "Please select a script to run.";
      }
      if (resendConfigProfile && profileUUID === null) {
        newErrors.resend_configuration_profile = "Please select a configuration profile to resend.";
      }
      return newErrors;
    };
    const handleToggleInstallSoftware = (next) => {
      setInstallSoftware(next);
      if (!next) clearError("install_software");
    };
    const handleToggleRunScript = (next) => {
      setRunScript(next);
      if (!next) clearError("run_script");
    };
    const handleToggleResendConfigProfile = (next) => {
      setResendConfigProfile(next);
      if (!next) clearError("resend_configuration_profile");
    };
    const handleSelectSoftware = (id) => {
      setSoftwareTitleId(id);
      setSoftwarePackageId(null);
      if (id !== null) clearError("install_software");
    };
    const handleSelectPackage = (id) => {
      setSoftwarePackageId(id);
      if (id !== null) clearError("install_software");
    };
    const handleSelectScript = (id) => {
      setScriptId(id);
      if (id !== null) clearError("run_script");
    };
    const handleSelectProfile = (uuid) => {
      setProfileUUID(uuid);
      if (uuid !== null) clearError("resend_configuration_profile");
    };
    const handleToggleContinuous = (next) => {
      setContinuousEnabled(next);
    };
    const canFetchTeamScopedLists = !isGlobalPolicy && teamIdForApi !== void 0;
    const { data: softwareTitlesData } = hooks_useSoftwareTitles({
      fleetId: teamIdForApi != null ? teamIdForApi : 0,
      enabled: canFetchTeamScopedLists && effectiveInstallSoftware && patchOption === void 0
    });
    const { data: scriptsData } = hooks_useScripts({
      fleetId: teamIdForApi != null ? teamIdForApi : 0,
      enabled: canFetchTeamScopedLists && runScript
    });
    const { data: profilesData } = hooks_useProfiles({
      fleetId: teamIdForApi != null ? teamIdForApi : 0,
      enabled: canFetchTeamScopedLists && resendConfigProfile
    });
    const softwareOptions = (0,react.useMemo)(
      () => {
        var _a2;
        return ((_a2 = softwareTitlesData == null ? void 0 : softwareTitlesData.software_titles) != null ? _a2 : []).map((t) => ({
          label: (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(t.name, t.display_name),
          value: String(t.id),
          helpText: (0,helpers/* generateSoftwareOptionHelpText */.IQ)(t)
        }));
      },
      [softwareTitlesData]
    );
    const selectedTitlePackages = (0,react.useMemo)(() => {
      var _a2, _b2;
      if (softwareTitleId === null) return null;
      const selected = (_a2 = softwareTitlesData == null ? void 0 : softwareTitlesData.software_titles) == null ? void 0 : _a2.find(
        (t) => t.id === softwareTitleId
      );
      return (_b2 = selected == null ? void 0 : selected.packages) != null ? _b2 : null;
    }, [softwareTitleId, softwareTitlesData]);
    const packageOptions = (0,react.useMemo)(
      () => (selectedTitlePackages != null ? selectedTitlePackages : []).map((pkg) => ({
        label: pkg.name,
        value: String(pkg.installer_id),
        helpText: (0,helpers/* generateSoftwarePackageOptionHelpText */.ic)(pkg)
      })),
      [selectedTitlePackages]
    );
    (0,react.useEffect)(() => {
      if (!selectedTitlePackages || selectedTitlePackages.length === 0) return;
      const stillValid = softwarePackageId !== null && selectedTitlePackages.some((p) => p.installer_id === softwarePackageId);
      if (stillValid) return;
      const first = (0,helpers/* findFirstAddedPackage */.Or)(selectedTitlePackages);
      if (first) setSoftwarePackageId(first.installer_id);
    }, [selectedTitlePackages, softwarePackageId]);
    const scriptOptions = (0,react.useMemo)(
      () => {
        var _a2;
        return ((_a2 = scriptsData == null ? void 0 : scriptsData.scripts) != null ? _a2 : []).map((s) => ({
          label: s.name,
          value: String(s.id)
        }));
      },
      [scriptsData]
    );
    const profileOptions = (0,react.useMemo)(
      () => {
        var _a2;
        return ((_a2 = profilesData == null ? void 0 : profilesData.profiles) != null ? _a2 : []).filter(filterValidProfiles).map(
          (p) => ({
            label: p.name,
            value: p.profile_uuid,
            helpText: rewriteProfilePlatform(p.platform)
          })
        );
      },
      [profilesData]
    );
    (0,react.useImperativeHandle)(ref, () => ({
      getAutomationsPayload: () => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
          return { isValid: false, isDirty: false };
        }
        const perPolicyDirty = !isGlobalPolicy && (effectiveInstallSoftware !== initialInstallSoftware || effectiveSoftwareTitleId !== ((_b2 = (_a2 = policy.install_software) == null ? void 0 : _a2.software_title_id) != null ? _b2 : null) || effectiveSoftwarePackageId !== ((_d2 = (_c2 = policy.install_software) == null ? void 0 : _c2.software_package_id) != null ? _d2 : null) || runScript !== initialRunScript || scriptId !== ((_f2 = (_e2 = policy.run_script) == null ? void 0 : _e2.id) != null ? _f2 : null) || resendConfigProfile !== initialResendConfigProfile || profileUUID !== ((_h2 = (_g2 = policy.resend_configuration_profile) == null ? void 0 : _g2.profile_uuid) != null ? _h2 : null) || calendarEvent !== initialCalendar || conditionalAccess !== initialConditionalAccess || effectiveContinuousEnabled !== initialContinuous || patchOption !== void 0 && (patchWhenClosed !== initialPatchWhenClosed || notifyBeforePatching !== initialNotifyBeforePatching));
        const webhookDirty = webhookOrTicketEnabled !== initialWebhookOrTicket;
        return {
          isValid: true,
          isDirty: perPolicyDirty || webhookDirty,
          policyUpdate: perPolicyDirty ? __spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues({
            software_title_id: effectiveInstallSoftware ? effectiveSoftwareTitleId : null,
            // Send the pinned package id when install-software is on.
            // Null clears the automation or lets the backend select the
            // Fleet-maintained app's package when a Patch radio owns it.
            software_package_id: effectiveInstallSoftware ? effectiveSoftwarePackageId : null,
            script_id: runScript ? scriptId : null,
            profile_uuid: resendConfigProfile ? profileUUID : null
          }, isCalendarEnabledForTeam && {
            calendar_events_enabled: calendarEvent
          }), isConditionalAccessEnabledForTeam && {
            conditional_access_enabled: conditionalAccess
          }), {
            continuous_automations_enabled: effectiveContinuousEnabled
          }), patchOption !== void 0 && patchWhenClosed !== initialPatchWhenClosed && {
            patch_when_closed: patchWhenClosed
          }), patchOption !== void 0 && notifyBeforePatching !== initialNotifyBeforePatching && {
            notify_before_patching: notifyBeforePatching
          }) : void 0,
          webhookOrTicketUpdate: webhookDirty ? { enabled: webhookOrTicketEnabled } : void 0
        };
      }
    }));
    const rows = [
      {
        key: "ticket_webhook",
        label: (0,helpers/* getTicketOrWebhookLabel */.NH)(ticketOrWebhookState),
        checked: webhookOrTicketEnabled && isTicketWebhookEnabled,
        onToggle: setWebhookOrTicketEnabled,
        isDisabled: !isTicketWebhookEnabled,
        // Webhook/ticket config requires admin (it writes app/team config, not
        // the policy itself). Lock for non-admins with no explanation.
        isLocked: !canEditWebhookOrTicket
      }
    ];
    if (!isGlobalPolicy) {
      rows.push(
        {
          key: "install_software",
          label: "Install software",
          tooltip: /* @__PURE__ */ react.createElement(
            AutomationRowTooltip,
            {
              text: "The selected software will be installed when hosts fail the policy. Host counts will reset when new software is selected.",
              learnMoreUrl: "https://fleetdm.com/learn-more-about/policy-automation-install-software"
            }
          ),
          checked: effectiveInstallSoftware,
          onToggle: handleToggleInstallSoftware,
          isDisabled: false,
          isLocked: patchOption !== void 0,
          picker: effectiveInstallSoftware && patchOption === void 0 ? /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__software-pickers` }, /* @__PURE__ */ react.createElement(
            DropdownWrapper/* default */.Ay,
            {
              name: "software-title",
              isSearchable: true,
              className: `${baseClass}__row-picker`,
              isDisabled: gitOpsModeEnabled,
              value: (_r = softwareOptions.find(
                (o) => o.value === String(softwareTitleId != null ? softwareTitleId : "")
              )) != null ? _r : null,
              options: softwareOptions,
              placeholder: "Select software",
              onChange: (opt) => handleSelectSoftware(opt ? Number(opt.value) : null)
            }
          ), packageOptions.length > 1 && /* @__PURE__ */ react.createElement(
            DropdownWrapper/* default */.Ay,
            {
              name: "software-package",
              className: `${baseClass}__row-picker`,
              isDisabled: gitOpsModeEnabled,
              value: (_s = packageOptions.find(
                (o) => o.value === String(softwarePackageId != null ? softwarePackageId : "")
              )) != null ? _s : null,
              options: packageOptions,
              placeholder: "Select package",
              onChange: (opt) => handleSelectPackage(opt ? Number(opt.value) : null)
            }
          )) : void 0
        },
        {
          key: "run_script",
          label: "Run script",
          tooltip: /* @__PURE__ */ react.createElement(
            AutomationRowTooltip,
            {
              text: "The selected script will run when hosts fail the policy. Host counts will reset when new scripts are selected.",
              learnMoreUrl: "https://fleetdm.com/learn-more-about/policy-automation-run-script"
            }
          ),
          checked: runScript,
          onToggle: handleToggleRunScript,
          isDisabled: false,
          picker: runScript ? /* @__PURE__ */ react.createElement(
            DropdownWrapper/* default */.Ay,
            {
              name: "script",
              isSearchable: true,
              className: `${baseClass}__row-picker`,
              isDisabled: gitOpsModeEnabled,
              value: (_t = scriptOptions.find((o) => o.value === String(scriptId != null ? scriptId : ""))) != null ? _t : null,
              options: scriptOptions,
              placeholder: "Select script",
              onChange: (opt) => handleSelectScript(opt ? Number(opt.value) : null)
            }
          ) : void 0
        },
        {
          key: "resend_configuration_profile",
          label: "Resend configuration profile",
          tooltip: /* @__PURE__ */ react.createElement(
            AutomationRowTooltip,
            {
              text: "The selected configuration profile will be resent when hosts fail the policy. Host counts will reset when new configuration profile is selected.",
              learnMoreUrl: `${constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/policy-automation-resend-configuration-profile`
            }
          ),
          checked: resendConfigProfile,
          onToggle: handleToggleResendConfigProfile,
          isDisabled: false,
          isLocked: resendProfileDisabled,
          picker: resendConfigProfile ? /* @__PURE__ */ react.createElement(
            DropdownWrapper/* default */.Ay,
            {
              name: "profile",
              isSearchable: true,
              className: `${baseClass}__row-picker`,
              isDisabled: gitOpsModeEnabled,
              value: (_u = profileOptions.find((o) => o.value === (profileUUID != null ? profileUUID : ""))) != null ? _u : null,
              options: profileOptions,
              placeholder: "Select profile",
              onChange: (opt) => handleSelectProfile(opt ? String(opt.value) : null)
            }
          ) : void 0
        },
        {
          key: "calendar_event",
          label: "Calendar event",
          tooltip: /* @__PURE__ */ react.createElement(
            AutomationRowTooltip,
            {
              text: "A calendar event will be created for end users if one of their hosts fail the policy.",
              learnMoreUrl: "https://www.fleetdm.com/learn-more-about/calendar-events"
            }
          ),
          checked: calendarEvent && isCalendarEnabledForTeam,
          onToggle: setCalendarEvent,
          isDisabled: !isCalendarEnabledForTeam
        },
        {
          key: "conditional_access",
          label: "Conditional access",
          tooltip: /* @__PURE__ */ react.createElement(
            AutomationRowTooltip,
            {
              text: "Single sign-on will be blocked for end users whose hosts fail the policy.",
              learnMoreUrl: "https://fleetdm.com/learn-more-about/conditional-access"
            }
          ),
          checked: conditionalAccess && isConditionalAccessEnabledForTeam,
          onToggle: (enabled) => {
            setConditionalAccess(enabled);
            onConditionalAccessChange == null ? void 0 : onConditionalAccessChange(enabled);
          },
          isDisabled: !isConditionalAccessEnabledForTeam
        }
      );
    }
    const errorMessages = Object.values(errors).filter(
      (msg) => !!msg
    );
    return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__section` }, errorMessages.length > 0 && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__errors`, role: "alert" }, errorMessages.map((msg) => /* @__PURE__ */ react.createElement("span", { key: msg, className: `${baseClass}__error` }, msg))), /* @__PURE__ */ react.createElement("table", { className: `${baseClass}__table` }, /* @__PURE__ */ react.createElement("tbody", null, rows.map((row) => /* @__PURE__ */ react.createElement(
      "tr",
      {
        key: row.key,
        className: `${baseClass}__row${row.isDisabled || row.isLocked ? ` ${baseClass}__row--disabled` : ""}`
      },
      /* @__PURE__ */ react.createElement(
        "td",
        {
          id: row.key === "install_software" ? "install-software-row-label" : void 0,
          className: `${baseClass}__row-label`
        },
        /* @__PURE__ */ react.createElement(
          GitOpsModeTooltipWrapper/* default */.A,
          {
            renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
              Checkbox/* default */.A,
              {
                name: row.key,
                value: row.checked,
                disabled: row.isDisabled || row.isLocked || disableChildren,
                onChange: row.onToggle
              },
              row.tooltip ? /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: row.tooltip, clickable: true }, row.label) : row.label
            )
          }
        )
      ),
      /* @__PURE__ */ react.createElement("td", { className: `${baseClass}__row-trailing` }, row.isDisabled ? /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__row-disabled-hint` }, "Not enabled for ", fleetName) : row.picker)
    )))), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__learn-more` }, /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: "https://fleetdm.com/learn-more-about/policy-automations",
        text: "Learn more",
        newTab: true
      }
    ), " ", "about automation types and their supported platforms.")), patchSlot, !isGlobalPolicy && patchOption !== "manual" && /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__section` }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          Checkbox/* default */.A,
          {
            name: "continuous-automations-enabled",
            value: effectiveContinuousEnabled,
            disabled: disableChildren || isContinuousAutomationsRequired,
            onChange: handleToggleContinuous,
            iconTooltipContent: continuousAutomationsRequiredTooltip,
            helpText: /* @__PURE__ */ react.createElement(react.Fragment, null, "If the install software automation does not resolve the policy after", " ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: "Count does not include skipped installs and failed pre-install queries." }, "10 attempts"), ", Mesh will wait 24 hours before retrying.")
          },
          /* @__PURE__ */ react.createElement(
            TooltipWrapper/* default */.A,
            {
              tipContent: "Automations run on a host's first failure, and when a host's response changes from pass to fail. If enabled, script & software automations will also run on every subsequent failure.",
              clickable: false
            },
            "Continuous"
          ),
          " ",
          "software & script automations"
        )
      }
    )));
  }
);
function AutomationRowTooltip({
  text,
  learnMoreUrl
}) {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, text, " ", /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: learnMoreUrl,
      text: "Learn more",
      newTab: true,
      variant: "tooltip-link"
    }
  ));
}
/* harmony default export */ var PolicyAutomationsFields_PolicyAutomationsFields = (PolicyAutomationsFields);

;// ./frontend/pages/policies/components/PolicyAutomationsFields/index.ts




/***/ }),

/***/ 5167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S_: function() { return /* reexport */ PatchAutomationCta_PatchAutomationCta; },
  N: function() { return /* reexport */ PolicyAutomationsList_PolicyAutomationsList; },
  Fx: function() { return /* reexport */ mapAutomationRows; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var helpers = __webpack_require__(30104);
;// ./frontend/pages/policies/components/PatchAutomationCta/PatchAutomationCta.tsx






const baseClass = "patch-automation-cta";
const PatchAutomationCta = ({
  storedPolicy,
  canEditPolicy,
  onAddAutomation,
  isAddingAutomation
}) => {
  const isPatchPolicy = storedPolicy.type === "patch";
  const hasSoftwareAutomation = !!storedPolicy.install_software;
  if (!isPatchPolicy || !storedPolicy.patch_software || hasSoftwareAutomation || !canEditPolicy) {
    return null;
  }
  const patchSoftwareName = (0,helpers/* getDisplayedSoftwareName */.Yd)(
    storedPolicy.patch_software.name,
    storedPolicy.patch_software.display_name
  );
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__label` }, "Automatically patch ", patchSoftwareName), /* @__PURE__ */ react.createElement(
    GitOpsModeTooltipWrapper/* default */.A,
    {
      position: "top",
      renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          onClick: onAddAutomation,
          variant: "secondary",
          disabled: disableChildren || isAddingAutomation
        },
        isAddingAutomation ? "Adding..." : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "plus" }), " Add automation")
      )
    }
  ));
};
/* harmony default export */ var PatchAutomationCta_PatchAutomationCta = (PatchAutomationCta);

;// ./frontend/pages/policies/components/PatchAutomationCta/index.ts



// EXTERNAL MODULE: ./node_modules/react-router/es/index.js + 32 modules
var es = __webpack_require__(24179);
// EXTERNAL MODULE: ./frontend/components/Graphic/index.ts
var Graphic = __webpack_require__(20881);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/pages/policies/components/PolicyAutomationsList/PolicyAutomationsList.tsx








const PolicyAutomationsList_baseClass = "policy-automations-list";
const OTHER_AUTOMATION_NAMES = {
  webhook: "Webhook",
  ticket: "Ticket"
};
const mapAutomationRows = (storedPolicy, currentAutomatedPolicies, otherAutomationType) => {
  const rows = [];
  if (storedPolicy.install_software) {
    const displayedName = (0,helpers/* getDisplayedSoftwareName */.Yd)(
      storedPolicy.install_software.name,
      storedPolicy.install_software.display_name
    );
    rows.push({
      name: displayedName,
      iconName: storedPolicy.install_software.name,
      type: "Software",
      isSoftware: true,
      iconUrl: storedPolicy.install_software.icon_url,
      link: (0,url/* getPathWithQueryParams */.M8)(
        paths/* default */.A.SOFTWARE_TITLE_DETAILS(
          storedPolicy.install_software.software_title_id.toString()
        ),
        { fleet_id: storedPolicy.team_id }
      ),
      sortOrder: 0,
      sortName: displayedName.toLowerCase()
    });
  }
  if (storedPolicy.run_script) {
    rows.push({
      name: storedPolicy.run_script.name,
      type: "Script",
      graphicName: storedPolicy.run_script.name.endsWith(".sh") ? "file-sh" : "file-ps1",
      sortOrder: 1,
      sortName: storedPolicy.run_script.name.toLowerCase()
    });
  }
  if (storedPolicy.resend_configuration_profile) {
    rows.push({
      name: storedPolicy.resend_configuration_profile.name,
      type: "Profile",
      graphicName: "file-configuration-profile",
      sortOrder: 2,
      sortName: storedPolicy.resend_configuration_profile.name.toLowerCase()
    });
  }
  if (storedPolicy.calendar_events_enabled) {
    rows.push({
      name: "Maintenance window",
      type: "Calendar",
      graphicName: "calendar",
      sortOrder: 3,
      sortName: ""
    });
  }
  if (storedPolicy.conditional_access_enabled) {
    rows.push({
      name: "Block single sign-on",
      type: "Conditional access",
      graphicName: "lock",
      sortOrder: 4,
      sortName: ""
    });
  }
  if (currentAutomatedPolicies.includes(storedPolicy.id)) {
    const otherName = otherAutomationType ? OTHER_AUTOMATION_NAMES[otherAutomationType] : "Webhook or ticket";
    rows.push({
      name: otherName,
      type: "Other",
      graphicName: "settings",
      sortOrder: 5,
      sortName: ""
    });
  }
  rows.sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
    return a.sortName.localeCompare(b.sortName);
  });
  return rows;
};
const PolicyAutomationsList = ({
  storedPolicy,
  currentAutomatedPolicies,
  otherAutomationType
}) => {
  const automationRows = mapAutomationRows(
    storedPolicy,
    currentAutomatedPolicies,
    otherAutomationType
  );
  if (automationRows.length === 0) {
    return /* @__PURE__ */ react.createElement("div", { className: `${PolicyAutomationsList_baseClass}__empty-state` }, "No automations");
  }
  return /* @__PURE__ */ react.createElement("div", { className: PolicyAutomationsList_baseClass }, automationRows.map((row) => {
    var _a;
    return /* @__PURE__ */ react.createElement("div", { key: `${row.type}-${row.name}`, className: `${PolicyAutomationsList_baseClass}__row` }, /* @__PURE__ */ react.createElement("div", { className: `${PolicyAutomationsList_baseClass}__row-name` }, row.isSoftware ? /* @__PURE__ */ react.createElement(
      SoftwareIcon/* default */.A,
      {
        name: (_a = row.iconName) != null ? _a : row.name,
        url: row.iconUrl,
        size: "small"
      }
    ) : row.graphicName && /* @__PURE__ */ react.createElement(
      Graphic/* default */.A,
      {
        name: row.graphicName,
        key: `${row.graphicName}-graphic`,
        className: `${PolicyAutomationsList_baseClass}__row-graphic ${row.graphicName === "file-sh" || row.graphicName === "file-ps1" || row.graphicName === "file-configuration-profile" ? "scale-40-24" : ""}`
      }
    ), row.link ? /* @__PURE__ */ react.createElement(es/* Link */.N_, { to: row.link }, row.name) : row.name));
  }));
};
/* harmony default export */ var PolicyAutomationsList_PolicyAutomationsList = (PolicyAutomationsList);

;// ./frontend/pages/policies/components/PolicyAutomationsList/index.ts



;// ./frontend/pages/policies/components/index.ts





/***/ }),

/***/ 14648:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fb: function() { return /* binding */ DEFAULT_POLICIES; },
/* harmony export */   gd: function() { return /* binding */ POLICY_TARGET_EMPTY_STATE_DESCRIPTION; },
/* harmony export */   zj: function() { return /* binding */ DEFAULT_POLICY; }
/* harmony export */ });

const POLICY_TARGET_EMPTY_STATE_DESCRIPTION = "Add a label to target a group of hosts.";
const DEFAULT_POLICY_PLATFORM = "";
const DEFAULT_POLICY = {
  id: 1,
  name: "Is osquery running?",
  query: "SELECT 1 FROM osquery_info WHERE start_time > 1;",
  description: "Checks if the osquery process has started on the host.",
  author_id: 42,
  author_name: "John",
  author_email: "john@example.com",
  resolution: "Resolution steps",
  platform: DEFAULT_POLICY_PLATFORM,
  passing_host_count: 2e3,
  failing_host_count: 300,
  created_at: "",
  updated_at: "",
  critical: false
};
const DEFAULT_POLICIES = [
  {
    key: 1,
    query: "SELECT score FROM (SELECT case when COUNT(*) = 2 then 1 ELSE 0 END AS score FROM processes WHERE (name = 'clamd') OR (name = 'freshclam')) WHERE score == 1;",
    name: "Antivirus healthy (Linux)",
    description: "If ClamAV and Freshclam are not running, the workstation lacks active virus scanning, increasing malware infection risk.",
    resolution: "ClamAV and Freshclam will be checked and restarted if necessary, restoring virus protection.",
    critical: false,
    platform: "linux"
  },
  {
    key: 2,
    query: "SELECT score FROM (SELECT case when COUNT(*) = 2 then 1 ELSE 0 END AS score FROM plist WHERE (key = 'CFBundleShortVersionString' AND path = '/Library/Apple/System/Library/CoreServices/XProtect.bundle/Contents/Info.plist' AND value>=2162) OR (key = 'CFBundleShortVersionString' AND path = '/Library/Apple/System/Library/CoreServices/MRT.app/Contents/Info.plist' and value>=1.93)) WHERE score == 1;",
    name: "Antivirus healthy (macOS)",
    description: "If XProtect or MRT are not updated, the system risks exposure to malware not covered by older definitions.",
    resolution: "Update XProtect and MRT to the latest versions, bolstering your system's defense against new threats.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 3,
    query: "SELECT 1 from windows_security_center wsc CROSS JOIN windows_security_products wsp WHERE antivirus = 'Good' AND type = 'Antivirus' AND signatures_up_to_date=1;",
    name: "Antivirus healthy (Windows)",
    description: "Lack of active, updated antivirus exposes the workstation to malware and security threats.",
    resolution: "Ensure Windows Defender or your third-party antivirus is running, up to date, and visible in the Windows Security Center.",
    critical: false,
    platform: "windows"
  },
  {
    key: 4,
    query: "SELECT 1 FROM managed_policies WHERE domain = 'com.apple.loginwindow' AND name = 'com.apple.login.mcx.DisableAutoLoginClient' AND value = 1 LIMIT 1;",
    name: "Automatic login disabled (macOS)",
    description: "Auto-login being enabled increases risk of unauthorized access if the workstation is compromised.",
    resolution: "Auto-login will be disabled to secure the workstation against unauthorized use.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 5,
    query: "SELECT 1 FROM (SELECT encrypted, path FROM disk_encryption FULL OUTER JOIN mounts ON mounts.device_alias = disk_encryption.name) WHERE encrypted = 1 AND path = '/';",
    name: "Full disk encryption enabled (Linux)",
    description: "Unencrypted root filesystem means sensitive data might be easily accessible to unauthorized parties, increasing data breach risks.",
    resolution: "Ensure the image deployed to your Linux workstation includes full disk encryption.",
    critical: false,
    platform: "linux"
  },
  {
    key: 6,
    query: "SELECT 1 FROM disk_encryption WHERE user_uuid IS NOT '' AND filevault_status = 'on' LIMIT 1;",
    name: "Full disk encryption enabled (macOS)",
    description: "If FileVault is off, the user's data is vulnerable to unauthorized access and potential data breaches.",
    resolution: "FileVault will be turned on to enable full disk encryption.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 7,
    query: "SELECT 1 FROM bitlocker_info WHERE drive_letter='C:' AND protection_status=1;",
    name: "Full disk encryption enabled (Windows)",
    description: "If BitLocker is disabled, the workstation's data is at risk of unauthorized access and theft.",
    resolution: "Full disk encryption will be enabled to secure data.",
    critical: false,
    platform: "windows"
  },
  {
    key: 8,
    query: "SELECT 1 FROM gatekeeper WHERE assessments_enabled = 1;",
    name: "Gatekeeper enabled (macOS)",
    description: "Disabled Gatekeeper increases risk of installing potentially malicious apps.",
    resolution: "Gatekeeper will be enabled to ensure only trusted software is run on the device.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 9,
    query: "SELECT 1 FROM mdm WHERE enrolled='true';",
    name: "MDM enrolled (macOS)",
    description: "Workstations not enrolled to MDM miss critical security updates and remote management capabilities.",
    resolution: "Enroll device to MDM.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 10,
    query: "SELECT 1 FROM managed_policies WHERE domain = 'com.apple.Terminal' AND name = 'SecureKeyboardEntry' AND value = 1 LIMIT 1;",
    name: "Secure keyboard entry for Terminal application enabled (macOS)",
    description: "If secure keyboard entry is disabled, it increases vulnerability to keyloggers and other snooping software.",
    resolution: "Secure keyboard entry will be enabled to enhance protection against keystroke logging.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 11,
    query: "SELECT 1 FROM sip_config WHERE config_flag = 'sip' AND enabled = 1;",
    name: "System Integrity Protection enabled (macOS)",
    description: "Disabled System Integrity Protection increases risk of unauthorized system modifications and malware.",
    resolution: "System Integrity Protection will be enabled by running the following command: /usr/sbin/spctl --master-enable.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 12,
    query: "SELECT 1 FROM alf WHERE global_state >= 1;",
    name: "Firewall enabled (macOS)",
    description: "If the firewall is disabled, the workstation is vulnerable to unauthorized network access and attacks.",
    resolution: "The firewall will be enabled to protect against external threats.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 13,
    query: "SELECT 1 FROM managed_policies WHERE name='askForPassword' AND value='1';",
    name: "Screen lock enabled (macOS)",
    description: "Disabling password prompts increases the risk of unauthorized system access.",
    resolution: "Configuration changes will enforce immediate password prompts to mitigate unauthorized access risks.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 14,
    query: "SELECT 1 FROM registry WHERE path = 'HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\InactivityTimeoutSecs' AND CAST(data as INTEGER) <= 1800;",
    name: "Screen lock enabled (Windows)",
    description: "Devices with inactive timeout settings over 30 minutes risk prolonged unauthorized access if left unattended, exposing sensitive data.",
    resolution: "Enable the Interactive Logon: Machine inactivity limit setting with a value of 1800 seconds or lower.",
    critical: false,
    platform: "windows"
  },
  {
    key: 15,
    query: "SELECT 1 FROM (SELECT cast(lengthtxt as integer(2)) minlength FROM (SELECT SUBSTRING(length, 1, 2) AS lengthtxt FROM (SELECT policy_description, policy_identifier, split(policy_content, '{', 1) AS length FROM password_policy WHERE policy_identifier LIKE '%minLength')) WHERE minlength >= 10);",
    name: "Password requires 10 or more characters (macOS)",
    description: "Password policies requiring less than 10 characters increase vulnerability to brute-force attacks",
    resolution: "Password requirements will be strengthened to a minimum of 10 characters.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 16,
    query: "SELECT 1 FROM os_version WHERE version >= '14.6.1' OR version >= '15.0';",
    name: "Operating system up to date (macOS)",
    description: "Using an outdated macOS version risks exposure to security vulnerabilities and potential system instability.",
    resolution: "We will update your macOS to the latest version to enhance security and stability.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 17,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.SoftwareUpdate' AND name='AutomaticCheckEnabled' AND value=1 LIMIT 1;",
    name: "Automatic updates enabled (macOS)",
    description: "Checks that a mobile device management (MDM) solution configures the Mac to automatically check for updates.",
    resolution: "Contact your IT administrator to ensure your Mac is receiving a profile that enables automatic updates.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 18,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.SoftwareUpdate' AND name='AutomaticDownload' AND value=1 LIMIT 1;",
    name: "Automatic update downloads enabled (macOS)",
    description: "Checks that a mobile device management (MDM) solution configures the Mac to automatically download updates.",
    resolution: "Contact your IT administrator to ensure your Mac is receiving a profile that enables automatic update downloads.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 19,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.SoftwareUpdate' AND name='AutomaticallyInstallAppUpdates' AND value=1 LIMIT 1;",
    name: "Installation of application updates is enabled (macOS)",
    description: "When the Mac is not configureed to automatically install updates to Apple applications, this risks security vulnerabilities and potential exploitation.",
    resolution: "The automatic software update feature will be enabled to ensure that the workstation receives timely updates.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 20,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.SoftwareUpdate' AND name='CriticalUpdateInstall' AND value=1 LIMIT 1;",
    name: "Automatic security and data file updates is enabled (macOS)",
    description: "If the Mac is not automatically downloading updates to built-in macOS security tools, critical updates may not be installed, leaving the device vulnerable to potential exploitation.",
    resolution: "Enable automatic security and data update installation.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 21,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.SoftwareUpdate' AND name='AutomaticallyInstallMacOSUpdates' AND value=1 LIMIT 1;",
    name: "Automatic installation of operating system updates is enabled (macOS)",
    description: "If automatic macOS updates are not enabled, critical updates may not be installed, leaving the device vulnerable to potential exploitation.",
    resolution: "Enable automatic installation of operating system updates.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 22,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.applicationaccess' AND name='forceAutomaticDateAndTime' AND value=1 LIMIT 1;",
    name: "Time and date are configured to be updated automatically (macOS)",
    description: "If the automatic setting of date and time is disabled, there could be synchronization issues with other systems, services, or applications.",
    resolution: "Enable automatic time and date configuration.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 23,
    query: "SELECT 1 WHERE EXISTS (SELECT CAST(value as integer(4)) valueint from managed_policies WHERE domain = 'com.apple.screensaver' AND name = 'askForPasswordDelay' AND valueint <= 60 LIMIT 1) AND EXISTS (SELECT CAST(value as integer(4)) valueint from managed_policies WHERE domain = 'com.apple.screensaver' AND name = 'idleTime' AND valueint <= 1140 LIMIT 1) AND EXISTS (SELECT 1 from managed_policies WHERE domain='com.apple.screensaver' AND name='askForPassword' AND value=1 LIMIT 1);",
    name: "Lock screen after inactivity of 20 minutes or less (macOS)",
    description: "Inadequate screen saver security settings could potentially allow unauthorized access to the workstation if left unattended for extended periods.",
    resolution: "Ensure screen saver is enabled after inactivity of 20 minutes or less.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 24,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.MCX' AND name='forceInternetSharingOff' AND value='1' LIMIT 1;",
    name: "Internet sharing blocked (macOS)",
    description: "Unauthorized Internet sharing could potentially expose sensitive network resources to external threats.",
    resolution: "The Internet sharing setting will be disabled",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 25,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.applicationaccess' AND name='allowContentCaching' AND value='0' LIMIT 1;",
    name: "Content caching is disabled (macOS)",
    description: "Enabling content caching could lead to unauthorized caching of sensitive data, potentially exposing it to unauthorized access.",
    resolution: "Content caching will be disabled.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 26,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.AdLib' AND name='forceLimitAdTracking' AND value='1' LIMIT 1;",
    name: "Ad tracking is limited (macOS)",
    description: "Failure to limit ad tracking could result in excessive tracking of user behavior and preferences by advertisers, compromising privacy.",
    resolution: "Advertisement tracking will be disabled.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 27,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.icloud.managed' AND name='DisableCloudSync' AND value='1' LIMIT 1;",
    name: "iCloud Desktop and Document sync is disabled (macOS)",
    description: "Checks that a mobile device management (MDM) solution configures the Mac to prevent iCloud Desktop and Documents sync.",
    resolution: "Contact your IT administrator to ensure your Mac is receiving a profile to prevent iCloud Desktop and Documents sync.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 28,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.security.firewall' AND name='EnableLogging' AND value='1' LIMIT 1;",
    name: "Firewall logging is enabled (macOS)",
    description: "Without firewall logging enabled, it becomes difficult to monitor and track network traffic, increasing the risk of undetected malicious activities or unauthorized access.",
    resolution: "Firewall logging will be enabled on the workstation.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 29,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.mcx' AND name='DisableGuestAccount' AND value='1' LIMIT 1;",
    name: "Guest account disabled (macOS)",
    description: "Use of the guest account could allow unauthorized users to access the system, potentially leading to unauthorized access to sensitive data and security breaches.",
    resolution: "The guest account will be disabled.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 30,
    query: "SELECT 1 FROM managed_policies WHERE domain='com.apple.AppleFileServer' AND name='guestAccess' AND value='0' LIMIT 1;",
    name: "Guest access to shared folders is disabled (macOS)",
    description: "Guest access to shared folders could allow unauthorized users to access sensitive files and data, potentially leading to data breaches or unauthorized modifications.",
    resolution: "Guest access to shared folders will be disabled.",
    critical: false,
    platform: "darwin",
    mdm_required: true
  },
  {
    key: 31,
    query: "SELECT 1 FROM registry WHERE path LIKE 'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\DomainProfile\\EnableFirewall' AND CAST(data as integer) = 1;",
    name: "Windows Firewall, domain profile enabled (Windows)",
    description: "If the Windows Firewall is not enabled for the domain profile, the workstation may be more vulnerable to unauthorized network access and potential security breaches.",
    resolution: "The Windows Firewall will be enabled for the domain profile.",
    critical: false,
    platform: "windows"
  },
  {
    key: 32,
    query: "SELECT 1 FROM registry WHERE path LIKE 'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\StandardProfile\\EnableFirewall' AND CAST(data as integer) = 1;",
    name: "Windows Firewall, private profile enabled (Windows)",
    description: "If the Windows Firewall is not enabled for the private profile, the workstation may be more susceptible to unauthorized access and potential security breaches, particularly when connected to private networks.",
    resolution: "The Windows Firewall will be enabled for the private profile",
    critical: false,
    platform: "windows"
  },
  {
    key: 33,
    query: "SELECT 1 FROM registry WHERE path LIKE 'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\PublicProfile\\EnableFirewall' AND CAST(data as integer) = 1;",
    name: "Windows Firewall, public profile enabled (Windows)",
    description: "If the Windows Firewall is not enabled for the public profile, the workstation may be more vulnerable to unauthorized access and potential security threats, especially when connected to public networks.",
    resolution: "The Windows Firewall will be enabled for the public profile.",
    critical: false,
    platform: "windows"
  },
  {
    key: 34,
    query: "SELECT 1 FROM windows_optional_features WHERE name = 'SMB1Protocol-Client' AND state != 1;",
    name: "SMBv1 client driver disabled (Windows)",
    description: "Leaving the SMBv1 client enabled increases vulnerability to security threats and potential exploitation by malicious actors.",
    resolution: "The SMBv1 client will be disabled.",
    critical: false,
    platform: "windows"
  },
  {
    key: 35,
    query: "SELECT 1 FROM windows_optional_features WHERE name = 'SMB1Protocol-Server' AND state != 1",
    name: "SMBv1 server disabled (Windows)",
    description: "Leaving the SMBv1 server enabled exposes the workstation to potential security vulnerabilities and exploitation by malicious actors.",
    resolution: "The SMBv1 server will be disabled.",
    critical: false,
    platform: "windows"
  },
  {
    key: 36,
    query: "SELECT 1 FROM registry WHERE path LIKE 'HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows NT\\DNSClient\\EnableMulticast' AND CAST(data as integer) = 0;",
    name: "LLMNR disabled (Windows)",
    description: "If the workstation does not have LLMNR disabled, it could be vulnerable to DNS spoofing attacks, potentially leading to unauthorized access or data interception.",
    resolution: "LLMNR will be disabled on your system.",
    critical: false,
    platform: "windows"
  },
  {
    key: 37,
    query: "SELECT 1 FROM registry WHERE path LIKE 'HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\Windows\\Update\\AU\\NoAutoUpdate' AND CAST(data as integer) = 0;",
    name: "Automatic updates enabled (Windows)",
    description: "Enabling automatic updates ensures the computer downloads and installs security and other important updates automatically.",
    resolution: "Automatic updates will be enabled.",
    critical: false,
    platform: "windows"
  },
  {
    key: 38,
    query: "SELECT EXISTS(SELECT 1 FROM file WHERE filename like '%Emergency Kit%.pdf' AND (path LIKE '/Users/%%/Downloads/%%' OR path LIKE '/Users/%%/Desktop/%%')) as does_1p_ek_exist;",
    name: "No 1Password emergency kit stored on desktop or in downloads (macOS)",
    description: "Storing the 1Password emergency kit on the desktop or in the downloads folder increases the risk of unauthorized access to sensitive credentials if the workstation is compromised or accessed by unauthorized users.",
    resolution: "1Password emergency kits must be printed and stored in a physically secure location.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 39,
    query: "SELECT 1 WHERE NOT EXISTS (SELECT 1 FROM users CROSS JOIN user_ssh_keys USING (uid) WHERE encrypted='0');",
    name: "No unencrypted SSH keys present",
    description: "Having unencrypted SSH keys poses the risk of unauthorized access to sensitive systems and data if the workstation is compromised.",
    resolution: "Any unencrypted SSH keys will be encrypted or removed from the workstation.",
    critical: false,
    platform: "darwin"
  },
  {
    key: 40,
    query: "SELECT 1 WHERE NOT EXISTS (SELECT 1 FROM keychain_items WHERE label LIKE '%ABCDEFG%' LIMIT 1);",
    name: "No Apple signing or notarization credentials secrets stored (macOS)",
    description: "Storing Apple signing or notarization credentials poses the risk of unauthorized access to sensitive development assets and potential compromise of software integrity.",
    resolution: "Apple signing or notarization credentials secrets will be removed from the workstation.",
    critical: false,
    platform: "darwin"
  }
];


/***/ }),

/***/ 74496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ PolicyDetailsPage_PolicyDetailsPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/Avatar/index.ts + 1 modules
var Avatar = __webpack_require__(17047);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/DataSet/index.ts + 1 modules
var DataSet = __webpack_require__(83573);
// EXTERNAL MODULE: ./frontend/components/Graphic/index.ts
var Graphic = __webpack_require__(20881);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/modals/ShowQueryModal/index.ts + 1 modules
var ShowQueryModal = __webpack_require__(67310);
// EXTERNAL MODULE: ./frontend/components/PageDescription/index.ts + 1 modules
var PageDescription = __webpack_require__(29448);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/components/TruncatedTextList/index.ts + 1 modules
var TruncatedTextList = __webpack_require__(24039);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var interfaces_platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/pages/policies/components/index.ts + 4 modules
var components = __webpack_require__(5167);
// EXTERNAL MODULE: ./frontend/pages/policies/helpers.ts
var helpers = __webpack_require__(41820);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/policies.ts
var policies = __webpack_require__(10664);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/DataError/index.ts
var DataError = __webpack_require__(79519);
// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/components/forms/fields/DropdownWrapper/index.tsx
var DropdownWrapper = __webpack_require__(41995);
// EXTERNAL MODULE: ./frontend/components/forms/fields/SearchField/index.ts + 1 modules
var SearchField = __webpack_require__(90710);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/utilities/strings/stringUtils.ts
var stringUtils = __webpack_require__(18165);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/constants.ts
var InstallDetails_constants = __webpack_require__(86695);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/NotifyBeforePatchingDetailsModal/helpers.tsx
var NotifyBeforePatchingDetailsModal_helpers = __webpack_require__(91321);
// EXTERNAL MODULE: ./frontend/components/buttons/CopyButton/index.ts + 2 modules
var CopyButton = __webpack_require__(57390);
// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/HumanTimeDiffWithDateTip/index.ts + 1 modules
var HumanTimeDiffWithDateTip = __webpack_require__(24292);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/Textarea/index.ts + 1 modules
var Textarea = __webpack_require__(10146);
// EXTERNAL MODULE: ./frontend/interfaces/activity.ts
var interfaces_activity = __webpack_require__(47721);
// EXTERNAL MODULE: ./frontend/services/entities/scripts.ts
var scripts = __webpack_require__(87844);
;// ./frontend/pages/policies/details/components/PolicyAutomationsActivitiesTable/helpers.tsx




const withName = (base, name) => name ? `${base} (${name})` : base;
const isNotifySkip = (activity) => {
  var _a;
  return ((_a = activity.details) == null ? void 0 : _a.patch_when_closed) === false;
};
const getNotifySoftwareName = (details, currentPolicyId) => {
  const titles = details == null ? void 0 : details.software_titles;
  const policyIds = details == null ? void 0 : details.policy_ids;
  if (currentPolicyId !== void 0 && titles && policyIds && titles.length === policyIds.length) {
    const i = policyIds.indexOf(currentPolicyId);
    if (i !== -1) return titles[i];
  }
  return (details == null ? void 0 : details.software_title) || (titles == null ? void 0 : titles[0]);
};
const getAutomationRunDisplayName = (activity, currentPolicyId) => {
  const { type, status, details } = activity;
  const failed = status === "error";
  switch (type) {
    case interfaces_activity/* ActivityType */.M.InstalledSoftware:
    case interfaces_activity/* ActivityType */.M.InstalledAppStoreApp:
      if (details == null ? void 0 : details.skipped_install) {
        return withName("Patch skipped", details == null ? void 0 : details.software_title);
      }
      return withName(
        failed ? "Software failed" : "Software installed",
        details == null ? void 0 : details.software_title
      );
    case interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching:
      return withName(
        failed ? "Failed to notify" : "Notified end user",
        getNotifySoftwareName(details, currentPolicyId)
      );
    case interfaces_activity/* ActivityType */.M.RanScript:
      return withName(
        failed ? "Script failed" : "Script ran",
        details == null ? void 0 : details.script_name
      );
    case interfaces_activity/* ActivityType */.M.RanAutomationCalendarEvent:
      return "Calendar event created";
    case interfaces_activity/* ActivityType */.M.FailedAutomationCalendarEvent:
      return "Calendar event failed";
    case interfaces_activity/* ActivityType */.M.RanAutomationConditionalAccess:
      return "Single sign-on blocked";
    case interfaces_activity/* ActivityType */.M.FailedAutomationConditionalAccess:
      return "Single sign-on failed";
    case interfaces_activity/* ActivityType */.M.RanAutomationWebhook:
      return "Webhook queued";
    case interfaces_activity/* ActivityType */.M.FailedAutomationWebhook:
      return "Webhook failed";
    case interfaces_activity/* ActivityType */.M.RanAutomationTicket:
      return "Ticket queued";
    case interfaces_activity/* ActivityType */.M.FailedAutomationTicket:
      return "Ticket failed";
    case interfaces_activity/* ActivityType */.M.ResentConfigurationProfile:
      return withName("Configuration profile resent", details == null ? void 0 : details.profile_name);
    default:
      return failed ? "Automation failed" : "Automation ran";
  }
};
const getAutomationStatusIcon = (activity) => {
  var _a;
  if ((_a = activity.details) == null ? void 0 : _a.skipped_install) {
    return { name: "error-outline", color: "ui-fleet-black-50" };
  }
  if (activity.type === interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching && activity.status === "success") {
    return { name: "error-outline", color: "ui-fleet-black-50" };
  }
  return activity.status === "error" ? { name: "error-outline" } : { name: "success-outline" };
};
const getDetailOutputText = (activity) => {
  var _a, _b, _c, _d, _e;
  if (activity.type === interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching && activity.status === "success") {
    return (0,NotifyBeforePatchingDetailsModal_helpers/* getAutomationNotifiedMessage */.N9)((_a = activity.details) == null ? void 0 : _a.time_before);
  }
  if (activity.type === interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching && activity.status === "error") {
    const reason = (0,NotifyBeforePatchingDetailsModal_helpers/* getCaveatMessage */.Mk)(
      "failed",
      (_b = activity.details) == null ? void 0 : _b.script_execution_id,
      (_c = activity.details) == null ? void 0 : _c.exit_code
    );
    if (reason) return reason;
  }
  if ((_d = activity.details) == null ? void 0 : _d.skipped_install) {
    return isNotifySkip(activity) ? NotifyBeforePatchingDetailsModal_helpers/* SKIPPED_INSTALL_NOTIFY_EXPLANATION */.tO : InstallDetails_constants/* SKIPPED_INSTALL_DETAILS */.kU;
  }
  if (activity.status === "error" && ((_e = activity.details) == null ? void 0 : _e.error_response)) {
    return activity.details.error_response;
  }
  if (activity.type === interfaces_activity/* ActivityType */.M.InstalledSoftware && activity.status === "error" && activity.pre_install_output === "") {
    return InstallDetails_constants/* PRE_INSTALL_QUERY_FAIL_OUTPUT */.Uk;
  }
  return activity.output || activity.post_install_output || activity.pre_install_output || "";
};

;// ./frontend/pages/policies/details/components/PolicyAutomationActivityDetailsModal/PolicyAutomationActivityDetailsModal.tsx

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



















const baseClass = "policy-automation-activity-details-modal";
const PolicyAutomationActivityDetailsModal = ({
  activity,
  currentPolicyId,
  onCancel,
  onResetPolicy
}) => {
  var _a, _b;
  const { created_at, host_id, host_display_name } = activity;
  const isNotify = activity.type === interfaces_activity/* ActivityType */.M.NotifiedEndUserBeforePatching;
  const isSoftwareInstall = activity.type === interfaces_activity/* ActivityType */.M.InstalledSoftware;
  const isSkippedInstall = isSoftwareInstall && !!((_a = activity.details) == null ? void 0 : _a.skipped_install);
  const isSkippedNotifyVariant = isSkippedInstall && isNotifySkip(activity);
  const scriptExecutionId = (_b = activity.details) == null ? void 0 : _b.script_execution_id;
  const [showDetails, setShowDetails] = (0,react.useState)(false);
  const { data: scriptResult, isError } = (0,es.useQuery)(
    ["notify-script-result", scriptExecutionId],
    () => scripts/* default */.A.getScriptResult(scriptExecutionId),
    __spreadProps(__spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isNotify && !!scriptExecutionId,
      retry: NotifyBeforePatchingDetailsModal_helpers/* retryUnless404 */.BQ
    })
  );
  const detailOutput = getDetailOutputText(activity);
  const statusIcon = getAutomationStatusIcon(activity);
  const getExplanation = () => {
    var _a2;
    if (isNotify) {
      if (activity.status === "success") {
        return (0,NotifyBeforePatchingDetailsModal_helpers/* getAutomationNotifiedMessage */.N9)((_a2 = activity.details) == null ? void 0 : _a2.time_before);
      }
      return (0,NotifyBeforePatchingDetailsModal_helpers/* getCaveatMessage */.Mk)(
        "failed",
        scriptExecutionId,
        scriptResult == null ? void 0 : scriptResult.exit_code
      );
    }
    if (isSkippedNotifyVariant) {
      return NotifyBeforePatchingDetailsModal_helpers/* SKIPPED_INSTALL_NOTIFY_EXPLANATION */.tO;
    }
    return null;
  };
  const explanation = getExplanation();
  const showEueLink = isNotify && (scriptResult == null ? void 0 : scriptResult.exit_code) != null && NotifyBeforePatchingDetailsModal_helpers/* EXIT_CODES_NEEDING_EUE_LINK */.yt.has(scriptResult.exit_code);
  const detailsLabel = (() => {
    if (isNotify) return "Notification script output:";
    if (isSkippedNotifyVariant) return "Pre-install query output:";
    return null;
  })();
  const detailsContent = (() => {
    if (isNotify) return (scriptResult == null ? void 0 : scriptResult.output) || activity.output || null;
    if (isSkippedNotifyVariant) return InstallDetails_constants/* SKIPPED_PRE_INSTALL_OUTPUT_NOTIFY */.$t;
    return null;
  })();
  const renderOutputSection = (label, value, plainLabel = false) => value ? /* @__PURE__ */ react.createElement(
    Textarea/* default */.A,
    {
      key: label,
      variant: "code",
      label: /* @__PURE__ */ react.createElement(
        "div",
        {
          className: plainLabel ? `${baseClass}__plain-label` : `${baseClass}__details-label`
        },
        /* @__PURE__ */ react.createElement("span", null, label),
        /* @__PURE__ */ react.createElement(
          CopyButton/* default */.A,
          {
            copyText: value,
            size: "small",
            ariaLabel: `Copy ${label.toLowerCase()}`
          }
        )
      )
    },
    value
  ) : null;
  const renderBody = () => {
    if (explanation) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", { className: `${baseClass}__explanation` }, explanation, showEueLink && /* @__PURE__ */ react.createElement(react.Fragment, null, " ", /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: NotifyBeforePatchingDetailsModal_helpers/* PATCHING_END_USER_EXPERIENCE_URL */.Gy,
          text: "End user experience",
          newTab: true
        }
      ))), (detailsContent || isError) && detailsLabel && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        RevealButton/* default */.A,
        {
          isShowing: showDetails,
          showText: "Details",
          hideText: "Details",
          caretPosition: "after",
          onClick: () => setShowDetails((s) => !s)
        }
      ), showDetails && (isError ? /* @__PURE__ */ react.createElement(
        DataError/* default */.A,
        {
          description: "Couldn't load the notification script output.",
          excludeIssueLink: true
        }
      ) : renderOutputSection(detailsLabel, detailsContent, true))));
    }
    if (isSoftwareInstall) {
      let preInstallOutput = activity.pre_install_output;
      if (isSkippedInstall) {
        preInstallOutput = InstallDetails_constants/* SKIPPED_PRE_INSTALL_OUTPUT */.JH;
      } else if (activity.status === "error" && preInstallOutput === "") {
        preInstallOutput = InstallDetails_constants/* PRE_INSTALL_QUERY_FAIL_OUTPUT */.Uk;
      }
      return /* @__PURE__ */ react.createElement(react.Fragment, null, renderOutputSection("Pre-install query output", preInstallOutput), renderOutputSection("Details", activity.output), renderOutputSection(
        "Post-install script output",
        activity.post_install_output
      ));
    }
    return renderOutputSection("Details", detailOutput || null);
  };
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Details", onExit: onCancel, className: baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__modal-content` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__row` }, /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: "Host",
      value: host_display_name ? /* @__PURE__ */ react.createElement(
        CustomLink/* default */.A,
        {
          url: paths/* default */.A.HOST_DETAILS(host_id),
          text: host_display_name
        }
      ) : "---"
    }
  ), /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: "Time",
      value: /* @__PURE__ */ react.createElement(HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T, { timeString: created_at })
    }
  )), /* @__PURE__ */ react.createElement(
    DataSet/* default */.A,
    {
      title: "Status",
      value: /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__status` }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: statusIcon.name, color: statusIcon.color }), getAutomationRunDisplayName(activity, currentPolicyId))
    }
  ), renderBody(), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onCancel }, "Done"), onResetPolicy && /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      variant: "secondary",
      onClick: onResetPolicy,
      className: `${baseClass}__reset`,
      icon: "refresh"
    },
    "Reset policy"
  ))));
};
/* harmony default export */ var PolicyAutomationActivityDetailsModal_PolicyAutomationActivityDetailsModal = (PolicyAutomationActivityDetailsModal);

;// ./frontend/pages/policies/details/components/PolicyAutomationActivityDetailsModal/index.ts



;// ./frontend/pages/policies/details/components/PolicyResetModal/PolicyResetModal.tsx





const PolicyResetModal_baseClass = "policy-reset-modal";
const PolicyResetModal = ({
  policy,
  host,
  currentAutomatedPolicies,
  otherAutomationType,
  isResetting,
  onSubmit,
  onCancel
}) => {
  const isHostScoped = !!host;
  let target = "all hosts";
  if (host) {
    target = host.displayName ? /* @__PURE__ */ react.createElement("b", null, host.displayName) : "this host";
  }
  const hasAutomations = isHostScoped && (0,components/* mapAutomationRows */.Fx)(policy, currentAutomatedPolicies, otherAutomationType).length > 0;
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Reset policy", onExit: onCancel, className: PolicyResetModal_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${PolicyResetModal_baseClass}__modal-content` }, /* @__PURE__ */ react.createElement("p", null, "Resetting this policy will clear pass/fail results for ", target, " until its next check in."), /* @__PURE__ */ react.createElement("div", null, hasAutomations ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("span", null, "Automations will re-run if the host fails the policy:"), /* @__PURE__ */ react.createElement(
    components/* PolicyAutomationsList */.N,
    {
      storedPolicy: policy,
      currentAutomatedPolicies,
      otherAutomationType
    }
  )) : /* @__PURE__ */ react.createElement("span", null, "Automations will re-run if the host fails the policy.")), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      onClick: onSubmit,
      isLoading: isResetting,
      disabled: isResetting
    },
    "Reset"
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onCancel }, "Cancel"))));
};
/* harmony default export */ var PolicyResetModal_PolicyResetModal = (PolicyResetModal);

;// ./frontend/pages/policies/details/components/PolicyResetModal/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/index.ts
var HeaderCell = __webpack_require__(40925);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/LinkCell/index.ts
var LinkCell = __webpack_require__(24228);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/index.ts
var TextCell = __webpack_require__(75679);
;// ./frontend/pages/policies/details/components/PolicyAutomationsActivitiesTable/PolicyAutomationsActivitiesTableConfig.tsx











const generateColumnConfigs = (baseClass, onShowDetails, currentPolicyId) => [
  {
    Header: (cellProps) => /* @__PURE__ */ react.createElement(
      HeaderCell/* default */.A,
      {
        value: "Automation",
        isSortedDesc: cellProps.column.isSortedDesc
      }
    ),
    id: "activity_type",
    accessor: (row) => row.type,
    Cell: (cellProps) => {
      const activity = cellProps.row.original;
      const statusIcon = getAutomationStatusIcon(activity);
      return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__automation-cell` }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: statusIcon.name, color: statusIcon.color }), /* @__PURE__ */ react.createElement(
        TooltipTruncatedText/* default */.A,
        {
          value: getAutomationRunDisplayName(activity, currentPolicyId)
        }
      ));
    }
  },
  {
    Header: "Host",
    disableSortBy: true,
    id: "host_display_name",
    accessor: "host_display_name",
    Cell: (cellProps) => {
      const { host_id, host_display_name } = cellProps.row.original;
      if (!host_display_name) {
        return /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: "Host deleted", grey: true, italic: true });
      }
      return /* @__PURE__ */ react.createElement(
        LinkCell/* default */.A,
        {
          value: host_display_name,
          path: paths/* default */.A.HOST_DETAILS(host_id),
          customOnClick: (e) => e.stopPropagation()
        }
      );
    }
  },
  {
    Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Time", isSortedDesc: cellProps.column.isSortedDesc }),
    id: "created_at",
    accessor: "created_at",
    Cell: (cellProps) => /* @__PURE__ */ react.createElement(
      TextCell/* default */.A,
      {
        value: /* @__PURE__ */ react.createElement(
          HumanTimeDiffWithDateTip/* HumanTimeDiffWithDateTip */.T,
          {
            timeString: cellProps.row.original.created_at
          }
        )
      }
    )
  },
  {
    Header: "Details",
    disableSortBy: true,
    id: "details",
    accessor: (row) => row.id,
    Cell: (cellProps) => {
      const activity = cellProps.row.original;
      const primaryText = getDetailOutputText(activity);
      return /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${baseClass}__details-cell`,
          variant: "subdued",
          onClick: () => onShowDetails(activity)
        },
        /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__details-text` }, primaryText || "---"),
        /* @__PURE__ */ react.createElement(
          Icon/* default */.A,
          {
            name: "info-outline",
            className: "row-hover-button",
            color: "ui-fleet-black-50"
          }
        )
      );
    }
  }
];
/* harmony default export */ var PolicyAutomationsActivitiesTableConfig = (generateColumnConfigs);

;// ./frontend/pages/policies/details/components/PolicyAutomationsActivitiesTable/PolicyAutomationsActivitiesTable.tsx

var PolicyAutomationsActivitiesTable_defProp = Object.defineProperty;
var PolicyAutomationsActivitiesTable_defProps = Object.defineProperties;
var PolicyAutomationsActivitiesTable_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var PolicyAutomationsActivitiesTable_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PolicyAutomationsActivitiesTable_hasOwnProp = Object.prototype.hasOwnProperty;
var PolicyAutomationsActivitiesTable_propIsEnum = Object.prototype.propertyIsEnumerable;
var PolicyAutomationsActivitiesTable_defNormalProp = (obj, key, value) => key in obj ? PolicyAutomationsActivitiesTable_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PolicyAutomationsActivitiesTable_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PolicyAutomationsActivitiesTable_hasOwnProp.call(b, prop))
      PolicyAutomationsActivitiesTable_defNormalProp(a, prop, b[prop]);
  if (PolicyAutomationsActivitiesTable_getOwnPropSymbols)
    for (var prop of PolicyAutomationsActivitiesTable_getOwnPropSymbols(b)) {
      if (PolicyAutomationsActivitiesTable_propIsEnum.call(b, prop))
        PolicyAutomationsActivitiesTable_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var PolicyAutomationsActivitiesTable_spreadProps = (a, b) => PolicyAutomationsActivitiesTable_defProps(a, PolicyAutomationsActivitiesTable_getOwnPropDescs(b));

















const PolicyAutomationsActivitiesTable_baseClass = "policy-automations-activities-table";
const DEFAULT_PAGE_SIZE = 50;
const DEFAULT_SORT_HEADER = "created_at";
const DEFAULT_SORT_DIRECTION = "desc";
const STATUS_FILTER_OPTIONS = [
  { label: "All", value: "" },
  { label: "Successful", value: "success" },
  { label: "Failed", value: "error" }
];
const PolicyAutomationsActivitiesTable = ({
  policy,
  currentAutomatedPolicies,
  otherAutomationType,
  canResetPolicy
}) => {
  var _a, _b, _c;
  const { id: policyId } = policy;
  const queryClient = (0,es.useQueryClient)();
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    activity_expiry_enabled: activityExpiryEnabled,
    activity_expiry_window: activityExpiryWindow
  } = (_a = config == null ? void 0 : config.activity_expiry_settings) != null ? _a : {};
  const [page, setPage] = (0,react.useState)(0);
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [statusFilter, setStatusFilter] = (0,react.useState)("");
  const [
    sortHeader,
    setSortHeader
  ] = (0,react.useState)(DEFAULT_SORT_HEADER);
  const [sortDirection, setSortDirection] = (0,react.useState)(
    DEFAULT_SORT_DIRECTION
  );
  const [
    selectedActivity,
    setSelectedActivity
  ] = (0,react.useState)(null);
  const [showResetModal, setShowResetModal] = (0,react.useState)(false);
  const [resetHost, setResetHost] = (0,react.useState)(void 0);
  const { data, isLoading, isError } = (0,es.useQuery)(
    [
      "policyAutomationActivities",
      policyId,
      page,
      DEFAULT_PAGE_SIZE,
      sortHeader,
      sortDirection,
      searchQuery,
      statusFilter
    ],
    () => policies/* default */.A.getAutomationActivities({
      policyId,
      page,
      perPage: DEFAULT_PAGE_SIZE,
      orderKey: sortHeader,
      orderDirection: sortDirection,
      query: searchQuery,
      status: statusFilter
    }),
    PolicyAutomationsActivitiesTable_spreadProps(PolicyAutomationsActivitiesTable_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), { keepPreviousData: true })
  );
  const { mutateAsync: resetPolicy, isLoading: isResetting } = (0,es.useMutation)(
    () => policies/* default */.A.reset(policyId, resetHost == null ? void 0 : resetHost.id),
    {
      onSuccess: () => {
        ToastNotification/* notify */.me.success("Policy reset successfully.");
        queryClient.invalidateQueries(["policyAutomationActivities", policyId]);
        queryClient.invalidateQueries(["policy", policyId]);
        setShowResetModal(false);
      },
      onError: (error) => {
        ToastNotification/* notify */.me.error("Couldn't reset policy. Please try again.", {
          response: error
        });
      }
    }
  );
  const onQueryChange = (0,react.useCallback)((newTableQuery) => {
    const {
      pageIndex: newPage,
      sortHeader: newSortHeader,
      sortDirection: newSortDirection
    } = newTableQuery;
    setSortHeader(newSortHeader);
    setSortDirection(newSortDirection);
    setPage(newPage);
  }, []);
  const onSearchChange = (0,react.useCallback)((value) => {
    setSearchQuery(value);
    setPage(0);
  }, []);
  const onStatusFilterChange = (0,react.useCallback)(
    (option) => {
      var _a2;
      setStatusFilter((_a2 = option == null ? void 0 : option.value) != null ? _a2 : "");
      setPage(0);
    },
    []
  );
  const onClickResetPolicy = (0,react.useCallback)(() => {
    setResetHost(void 0);
    setShowResetModal(true);
  }, []);
  const onResetFromActivity = (0,react.useCallback)(() => {
    setResetHost(
      selectedActivity ? {
        id: selectedActivity.host_id,
        displayName: selectedActivity.host_display_name
      } : void 0
    );
    setSelectedActivity(null);
    setShowResetModal(true);
  }, [selectedActivity]);
  const isFiltered = searchQuery !== "" || statusFilter !== "";
  const renderEmptyState = (0,react.useCallback)(() => {
    if (isFiltered) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No automation runs match your filters",
          info: "Try changing your search or status filter."
        }
      );
    }
    const info = activityExpiryEnabled && activityExpiryWindow ? `Automation history is retained for ${activityExpiryWindow} ${(0,stringUtils/* pluralize */.td)(
      activityExpiryWindow,
      "day"
    )}.` : "Automation history will appear here.";
    return /* @__PURE__ */ react.createElement(EmptyState/* default */.A, { header: "No automation runs", info });
  }, [isFiltered, activityExpiryEnabled, activityExpiryWindow]);
  const columnConfigs = (0,react.useMemo)(
    () => PolicyAutomationsActivitiesTableConfig(PolicyAutomationsActivitiesTable_baseClass, setSelectedActivity, policyId),
    [policyId]
  );
  const count = (_b = data == null ? void 0 : data.count) != null ? _b : 0;
  const showControls = count > 0 || isFiltered;
  if (isError) {
    return /* @__PURE__ */ react.createElement(DataError/* default */.A, { description: "Could not load automation runs." });
  }
  return /* @__PURE__ */ react.createElement("div", { className: PolicyAutomationsActivitiesTable_baseClass }, /* @__PURE__ */ react.createElement(
    "div",
    {
      className: classnames_default()(`${PolicyAutomationsActivitiesTable_baseClass}__header`, {
        [`${PolicyAutomationsActivitiesTable_baseClass}__header--inline`]: !showControls
      })
    },
    /* @__PURE__ */ react.createElement("h2", { className: `${PolicyAutomationsActivitiesTable_baseClass}__title` }, "Automation runs"),
    /* @__PURE__ */ react.createElement("div", { className: `${PolicyAutomationsActivitiesTable_baseClass}__controls-row` }, showControls && /* @__PURE__ */ react.createElement("span", { className: `${PolicyAutomationsActivitiesTable_baseClass}__count` }, count, " ", (0,stringUtils/* pluralize */.td)(count, "run")), /* @__PURE__ */ react.createElement("div", { className: `${PolicyAutomationsActivitiesTable_baseClass}__controls` }, canResetPolicy && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        onClick: onClickResetPolicy,
        icon: "refresh",
        iconPosition: "right"
      },
      "Reset policy"
    ), showControls && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      DropdownWrapper/* default */.A,
      {
        name: "automation-status-filter",
        className: `${PolicyAutomationsActivitiesTable_baseClass}__status-filter`,
        options: STATUS_FILTER_OPTIONS,
        value: statusFilter,
        onChange: onStatusFilterChange,
        variant: "table-filter",
        isSearchable: false
      }
    ), /* @__PURE__ */ react.createElement("div", { className: `${PolicyAutomationsActivitiesTable_baseClass}__search` }, /* @__PURE__ */ react.createElement(
      SearchField/* default */.A,
      {
        placeholder: "Search hosts",
        defaultValue: searchQuery,
        onChange: onSearchChange
      }
    )))))
  ), /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs,
      data: (_c = data == null ? void 0 : data.activities) != null ? _c : [],
      getRowId: (row) => `${row.id}-${row.host_id}`,
      isLoading,
      manualSortBy: true,
      pageIndex: page,
      pageSize: DEFAULT_PAGE_SIZE,
      disableNextPage: !(data == null ? void 0 : data.meta.has_next_results),
      defaultSortHeader: DEFAULT_SORT_HEADER,
      defaultSortDirection: DEFAULT_SORT_DIRECTION,
      disableTableHeader: true,
      searchable: false,
      onQueryChange,
      emptyComponent: renderEmptyState,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableMultiRowSelect: true,
      onClickRow: (row) => setSelectedActivity(row.original)
    }
  ), selectedActivity && /* @__PURE__ */ react.createElement(
    PolicyAutomationActivityDetailsModal_PolicyAutomationActivityDetailsModal,
    {
      activity: selectedActivity,
      currentPolicyId: policyId,
      onCancel: () => setSelectedActivity(null),
      onResetPolicy: canResetPolicy ? onResetFromActivity : void 0
    }
  ), showResetModal && /* @__PURE__ */ react.createElement(
    PolicyResetModal_PolicyResetModal,
    {
      policy,
      host: resetHost,
      currentAutomatedPolicies,
      otherAutomationType,
      isResetting,
      onSubmit: resetPolicy,
      onCancel: () => setShowResetModal(false)
    }
  ));
};
/* harmony default export */ var PolicyAutomationsActivitiesTable_PolicyAutomationsActivitiesTable = (PolicyAutomationsActivitiesTable);

;// ./frontend/pages/policies/details/components/PolicyAutomationsActivitiesTable/index.ts



;// ./frontend/pages/policies/details/components/PolicyAutomationsModal/PolicyAutomationsModal.tsx





const PolicyAutomationsModal_baseClass = "policy-automations-modal";
const PolicyAutomationsModal = ({
  storedPolicy,
  currentAutomatedPolicies,
  otherAutomationType,
  onClose
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Automations",
      onExit: onClose,
      onEnter: onClose,
      className: PolicyAutomationsModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: PolicyAutomationsModal_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${PolicyAutomationsModal_baseClass}__automations` }, /* @__PURE__ */ react.createElement(
      components/* PolicyAutomationsList */.N,
      {
        storedPolicy,
        currentAutomatedPolicies,
        otherAutomationType
      }
    ), /* @__PURE__ */ react.createElement("p", { className: `${PolicyAutomationsModal_baseClass}__footer-text` }, storedPolicy.continuous_automations_enabled ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Software and script automations run ", /* @__PURE__ */ react.createElement("b", null, "every time"), " Fleet receives a failing response.", /* @__PURE__ */ react.createElement("br", null), "All other automations run on a host's first failure, or when a host's response changes from pass to fail.") : "Automations run on a host's first failure, or when a host's response changes from pass to fail.")), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClose }, "Done")))
  );
};
/* harmony default export */ var PolicyAutomationsModal_PolicyAutomationsModal = (PolicyAutomationsModal);

;// ./frontend/pages/policies/details/components/PolicyAutomationsModal/index.ts



// EXTERNAL MODULE: ./node_modules/react-router/es/index.js + 32 modules
var react_router_es = __webpack_require__(24179);
;// ./frontend/pages/policies/details/components/PolicyLabelModal/PolicyLabelModal.tsx





const PolicyLabelModal_baseClass = "policy-label-modal";
const PolicyLabelModal = ({
  includeLabels,
  includeScopeLabel,
  excludeLabels,
  excludeScopeLabel,
  getLabelPath,
  onClose
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Labels",
      onExit: onClose,
      onEnter: onClose,
      className: PolicyLabelModal_baseClass
    },
    /* @__PURE__ */ react.createElement("div", { className: `${PolicyLabelModal_baseClass}__body` }, includeLabels && includeScopeLabel && /* @__PURE__ */ react.createElement(
      LabelList,
      {
        labels: includeLabels,
        scopeLabel: includeScopeLabel,
        description: "Policy targets hosts that",
        getLabelPath
      }
    ), excludeLabels && excludeScopeLabel && /* @__PURE__ */ react.createElement(
      LabelList,
      {
        labels: excludeLabels,
        scopeLabel: excludeScopeLabel,
        description: "Policy excludes hosts that",
        getLabelPath
      }
    ), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onClose }, "Done")))
  );
};
const LabelList = ({
  labels,
  scopeLabel,
  description,
  getLabelPath
}) => /* @__PURE__ */ react.createElement("div", { className: `${PolicyLabelModal_baseClass}__section` }, /* @__PURE__ */ react.createElement("span", null, description, " ", /* @__PURE__ */ react.createElement("b", null, scopeLabel), " of these labels:"), /* @__PURE__ */ react.createElement("ul", { className: `${PolicyLabelModal_baseClass}__label-list` }, labels.map((label) => /* @__PURE__ */ react.createElement("li", { key: label.id, className: `${PolicyLabelModal_baseClass}__label-item` }, getLabelPath ? /* @__PURE__ */ react.createElement(react_router_es/* Link */.N_, { to: getLabelPath(label.id) }, label.name) : /* @__PURE__ */ react.createElement("span", null, label.name)))));
/* harmony default export */ var PolicyLabelModal_PolicyLabelModal = (PolicyLabelModal);

;// ./frontend/pages/policies/details/components/PolicyLabelModal/index.ts



;// ./frontend/pages/policies/details/PolicyDetailsPage/PolicyDetailsPage.tsx

































const PolicyDetailsPage_baseClass = "policy-details-page";
const getPolicyFleetName = (policy, teamData) => {
  var _a, _b;
  if (!policy) return null;
  if (policy.team_id === null) return team/* APP_CONTEXT_ALL_TEAMS_SUMMARY */.Op.name;
  if (policy.team_id === 0) return team/* APP_CONTEXT_NO_TEAM_SUMMARY */.bn.name;
  return (_b = (_a = teamData == null ? void 0 : teamData.team) == null ? void 0 : _a.name) != null ? _b : null;
};
const getLabelModalData = (policy) => {
  var _a, _b, _c, _d;
  let includeLabels;
  let includeScopeLabel;
  if ((_a = policy.labels_include_any) == null ? void 0 : _a.length) {
    includeLabels = policy.labels_include_any;
    includeScopeLabel = "have any";
  } else if ((_b = policy.labels_include_all) == null ? void 0 : _b.length) {
    includeLabels = policy.labels_include_all;
    includeScopeLabel = "have all";
  }
  let excludeLabels;
  let excludeScopeLabel;
  if ((_c = policy.labels_exclude_any) == null ? void 0 : _c.length) {
    excludeLabels = policy.labels_exclude_any;
    excludeScopeLabel = "exclude any";
  } else if ((_d = policy.labels_exclude_all) == null ? void 0 : _d.length) {
    excludeLabels = policy.labels_exclude_all;
    excludeScopeLabel = "exclude all";
  }
  return { includeLabels, includeScopeLabel, excludeLabels, excludeScopeLabel };
};
const PolicyDetailsPage = ({
  router,
  params: { id: paramsPolicyId },
  location
}) => {
  const policyId = paramsPolicyId ? parseInt(paramsPolicyId, 10) : null;
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const {
    currentUser,
    isGlobalAdmin,
    isGlobalMaintainer,
    isGlobalTechnician,
    isOnGlobalTeam,
    config
  } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    isRouteOk,
    teamIdForApi,
    isTeamMaintainerOrTeamAdmin,
    isTeamTechnician,
    isObserverPlus
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: true,
      observer: true,
      observer_plus: true,
      technician: true
    }
  });
  const [showQueryModal, setShowQueryModal] = (0,react.useState)(false);
  const [showLabelModal, setShowLabelModal] = (0,react.useState)(false);
  const [showAutomationsModal, setShowAutomationsModal] = (0,react.useState)(false);
  if (policyId === null || isNaN(policyId)) {
    router.push(paths/* default */.A.MANAGE_POLICIES);
  }
  const { isLoading, data: storedPolicy, error: apiError } = (0,es.useQuery)(["policy", policyId], () => policies/* default */.A.load(policyId), {
    enabled: isRouteOk && !!policyId,
    refetchOnWindowFocus: false,
    retry: false,
    select: (data) => data.policy,
    onError: (error) => handlePageError(error)
  });
  const policyTeamId = storedPolicy == null ? void 0 : storedPolicy.team_id;
  const { data: teamData } = (0,es.useQuery)(
    ["team", policyTeamId],
    () => teams/* default */.A.load(policyTeamId),
    {
      enabled: policyTeamId != null && policyTeamId >= team/* API_NO_TEAM_ID */.Rp,
      refetchOnWindowFocus: false
    }
  );
  const policyFleetName = getPolicyFleetName(storedPolicy, teamData);
  const labelModalData = storedPolicy ? getLabelModalData(storedPolicy) : null;
  const {
    state: ticketOrWebhookState,
    policyIds: currentAutomatedPolicies
  } = (0,helpers/* getTicketOrWebhookInfo */.LM)(
    (storedPolicy == null ? void 0 : storedPolicy.team_id) == null ? config != null ? config : void 0 : teamData == null ? void 0 : teamData.team
  );
  const otherAutomationType = ticketOrWebhookState === "disabled" ? void 0 : ticketOrWebhookState;
  (0,react.useEffect)(() => {
    if (storedPolicy == null ? void 0 : storedPolicy.name) {
      document.title = `${storedPolicy.name} | Policies | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    } else {
      document.title = `Policies | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    }
  }, [location.pathname, storedPolicy == null ? void 0 : storedPolicy.name]);
  const isInheritedPolicy = (storedPolicy == null ? void 0 : storedPolicy.team_id) === null;
  const canEditPolicy = (isGlobalAdmin || isGlobalMaintainer || isTeamMaintainerOrTeamAdmin) && // Team users cannot edit inherited (global) policies
  !(isInheritedPolicy && !isOnGlobalTeam);
  const canEditLabels = isGlobalAdmin || isGlobalMaintainer || isGlobalTechnician || isTeamMaintainerOrTeamAdmin || isTeamTechnician;
  const canRunPolicy = isObserverPlus || isTeamMaintainerOrTeamAdmin || isGlobalAdmin || isGlobalMaintainer || isGlobalTechnician || isTeamTechnician;
  const disabledLiveQuery = config == null ? void 0 : config.server_settings.live_query_disabled;
  const backToPoliciesPath = (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_POLICIES, {
    fleet_id: teamIdForApi
  });
  const renderAuthor = () => {
    if (!storedPolicy) return null;
    return /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__author`,
        title: "Author",
        value: /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__author-info` }, /* @__PURE__ */ react.createElement(
          Avatar/* default */.A,
          {
            user: (0,utilities_helpers/* addGravatarUrlToResource */.O2)({
              email: storedPolicy.author_email
            }),
            size: "xsmall"
          }
        ), /* @__PURE__ */ react.createElement("span", null, storedPolicy.author_name === (currentUser == null ? void 0 : currentUser.name) ? "You" : storedPolicy.author_name))
      }
    );
  };
  const renderPlatforms = () => {
    if (!(storedPolicy == null ? void 0 : storedPolicy.platform)) return null;
    const platforms = storedPolicy.platform.split(",").map((p) => p.trim()).filter((p) => p in interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc);
    if (platforms.length === 0) return null;
    return /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__platforms`,
        title: "Platforms",
        value: /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__platform-list` }, platforms.map((platform) => /* @__PURE__ */ react.createElement("span", { key: platform, className: `${PolicyDetailsPage_baseClass}__platform-item` }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: platform, color: "ui-fleet-black-75" }), interfaces_platform/* PLATFORM_DISPLAY_NAMES */.uc[platform] || platform)))
      }
    );
  };
  const openLabelModal = () => setShowLabelModal(true);
  const renderLabels = () => {
    if (!labelModalData) return null;
    const { includeLabels, excludeLabels } = labelModalData;
    const allLabels = [...includeLabels != null ? includeLabels : [], ...excludeLabels != null ? excludeLabels : []];
    if (!allLabels.length) return null;
    return /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__labels`,
        title: "Labels",
        value: /* @__PURE__ */ react.createElement(
          TruncatedTextList/* default */.A,
          {
            items: allLabels.map((l) => l.name),
            onClick: openLabelModal
          }
        )
      }
    );
  };
  const renderFleetName = () => {
    if (!policyFleetName) return null;
    return /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__fleet`,
        title: "Mesh",
        value: policyFleetName
      }
    );
  };
  const renderResolution = () => {
    if (!(storedPolicy == null ? void 0 : storedPolicy.resolution)) return null;
    return /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__resolve`,
        title: "Resolve",
        value: storedPolicy.resolution,
        multiline: true
      }
    );
  };
  const openAutomationsModal = () => setShowAutomationsModal(true);
  const renderAutomations = () => {
    var _a;
    const emptyState = /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__automations`,
        title: "Automations",
        value: constants/* DEFAULT_EMPTY_CELL_VALUE */.r2
      }
    );
    if (!storedPolicy) return emptyState;
    const automations = (0,components/* mapAutomationRows */.Fx)(
      storedPolicy,
      currentAutomatedPolicies,
      otherAutomationType
    );
    if (!automations.length) return emptyState;
    const firstAutomation = automations[0];
    return /* @__PURE__ */ react.createElement(
      DataSet/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__automations${automations.length > 1 ? ` ${PolicyDetailsPage_baseClass}__automations--multi` : ""}`,
        title: "Automations",
        value: /* @__PURE__ */ react.createElement(react.Fragment, null, firstAutomation.isSoftware ? /* @__PURE__ */ react.createElement(
          SoftwareIcon/* default */.A,
          {
            name: (_a = firstAutomation.iconName) != null ? _a : firstAutomation.name,
            url: firstAutomation.iconUrl,
            size: "small"
          }
        ) : firstAutomation.graphicName && /* @__PURE__ */ react.createElement(
          Graphic/* default */.A,
          {
            name: firstAutomation.graphicName,
            className: firstAutomation.graphicName === "file-sh" || firstAutomation.graphicName === "file-ps1" || firstAutomation.graphicName === "file-configuration-profile" ? "scale-40-24" : ""
          }
        ), /* @__PURE__ */ react.createElement(
          TruncatedTextList/* default */.A,
          {
            items: automations.map((a) => a.name),
            onClick: openAutomationsModal
          }
        ))
      }
    );
  };
  const renderHeader = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: "Back to policies", path: backToPoliciesPath })), !isLoading && !apiError && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__title-bar` }, /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__name-description` }, /* @__PURE__ */ react.createElement("h1", { className: `${PolicyDetailsPage_baseClass}__policy-name` }, /* @__PURE__ */ react.createElement(
      TooltipTruncatedText/* default */.A,
      {
        value: storedPolicy == null ? void 0 : storedPolicy.name,
        fixedPositionStrategy: true
      }
    ), (storedPolicy == null ? void 0 : storedPolicy.critical) && /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: "This policy has been marked as critical.",
        showArrow: true,
        underline: false
      },
      /* @__PURE__ */ react.createElement(
        Icon/* default */.A,
        {
          className: "critical-policy-icon",
          name: "policy",
          color: "ui-fleet-black-50"
        }
      )
    )), /* @__PURE__ */ react.createElement(
      PageDescription/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__policy-description`,
        content: storedPolicy == null ? void 0 : storedPolicy.description
      }
    )), /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__action-button-container` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__show-query-btn`,
        onClick: () => setShowQueryModal(true),
        variant: "secondary"
      },
      "Show query"
    ), canRunPolicy && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${PolicyDetailsPage_baseClass}__run`,
        variant: "secondary",
        onClick: () => {
          policyId && router.push(
            (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.LIVE_POLICY(policyId), {
              fleet_id: teamIdForApi
            })
          );
        },
        disabled: !!disabledLiveQuery,
        icon: "run",
        iconPosition: "right"
      },
      "Run policy"
    ), canEditPolicy && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        onClick: () => {
          policyId && router.push(
            (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.EDIT_POLICY(policyId), {
              fleet_id: teamIdForApi
            })
          );
        },
        className: `${PolicyDetailsPage_baseClass}__edit-policy-btn`
      },
      "Edit policy"
    ))), /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__details` }, /* @__PURE__ */ react.createElement("div", { className: `${PolicyDetailsPage_baseClass}__properties` }, renderFleetName(), renderPlatforms(), renderLabels(), renderAutomations(), renderAuthor()), renderResolution())));
  };
  if (!isRouteOk) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: PolicyDetailsPage_baseClass }, isLoading ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, null) : renderHeader(), !isLoading && !apiError && storedPolicy && /* @__PURE__ */ react.createElement(
    PolicyAutomationsActivitiesTable_PolicyAutomationsActivitiesTable,
    {
      policy: storedPolicy,
      currentAutomatedPolicies,
      otherAutomationType,
      canResetPolicy: canEditPolicy
    }
  ), showQueryModal && /* @__PURE__ */ react.createElement(
    ShowQueryModal/* default */.A,
    {
      query: storedPolicy == null ? void 0 : storedPolicy.query,
      onCancel: () => setShowQueryModal(false)
    }
  ), showLabelModal && labelModalData && /* @__PURE__ */ react.createElement(
    PolicyLabelModal_PolicyLabelModal,
    {
      includeLabels: labelModalData.includeLabels,
      includeScopeLabel: labelModalData.includeScopeLabel,
      excludeLabels: labelModalData.excludeLabels,
      excludeScopeLabel: labelModalData.excludeScopeLabel,
      getLabelPath: canEditLabels ? paths/* default */.A.LABEL_EDIT : void 0,
      onClose: () => setShowLabelModal(false)
    }
  ), showAutomationsModal && storedPolicy && /* @__PURE__ */ react.createElement(
    PolicyAutomationsModal_PolicyAutomationsModal,
    {
      storedPolicy,
      currentAutomatedPolicies,
      otherAutomationType,
      onClose: () => setShowAutomationsModal(false)
    }
  ));
};
/* harmony default export */ var PolicyDetailsPage_PolicyDetailsPage = (PolicyDetailsPage);

;// ./frontend/pages/policies/details/PolicyDetailsPage/index.ts




/***/ }),

/***/ 30871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ EditPolicyPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(24740);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/InfoBanner.tsx
var InfoBanner = __webpack_require__(36321);
// EXTERNAL MODULE: ./frontend/components/MainContent/index.ts
var MainContent = __webpack_require__(827);
// EXTERNAL MODULE: ./frontend/components/side_panels/QuerySidePanel/index.ts + 15 modules
var QuerySidePanel = __webpack_require__(37863);
// EXTERNAL MODULE: ./frontend/components/SidePanelContent/index.ts + 1 modules
var SidePanelContent = __webpack_require__(90125);
// EXTERNAL MODULE: ./frontend/components/SidePanelPage/index.ts + 1 modules
var SidePanelPage = __webpack_require__(56118);
// EXTERNAL MODULE: ./frontend/components/Spinner/Spinner.tsx
var Spinner = __webpack_require__(95163);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/context/policy.tsx
var policy = __webpack_require__(59593);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./frontend/interfaces/team.ts + 1 modules
var team = __webpack_require__(62131);
// EXTERNAL MODULE: ./frontend/pages/policies/constants.ts
var constants = __webpack_require__(14648);
// EXTERNAL MODULE: ./frontend/components/BackButton/index.ts + 1 modules
var BackButton = __webpack_require__(84945);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/use-debounce/dist/index.module.js
var index_module = __webpack_require__(81591);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/forms/fields/Checkbox/index.ts
var Checkbox = __webpack_require__(5410);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
// EXTERNAL MODULE: ./frontend/components/forms/validators/validate_query/index.ts
var validate_query = __webpack_require__(22184);
// EXTERNAL MODULE: ./frontend/components/GitOpsModeTooltipWrapper/index.ts + 1 modules
var GitOpsModeTooltipWrapper = __webpack_require__(59333);
// EXTERNAL MODULE: ./frontend/components/Icon/Icon.tsx + 74 modules
var Icon = __webpack_require__(99742);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var components_Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/SQLEditor/index.tsx
var SQLEditor = __webpack_require__(98220);
// EXTERNAL MODULE: ./frontend/components/TargetLabelSelector/index.ts + 2 modules
var TargetLabelSelector = __webpack_require__(22676);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/hooks/usePlatformCompatibility.tsx + 2 modules
var usePlatformCompatibility = __webpack_require__(19984);
// EXTERNAL MODULE: ./frontend/hooks/usePlatformSelector.tsx + 2 modules
var usePlatformSelector = __webpack_require__(64933);
// EXTERNAL MODULE: ./frontend/pages/policies/components/index.ts + 4 modules
var components = __webpack_require__(5167);
// EXTERNAL MODULE: ./frontend/pages/policies/components/PolicyAutomationsFields/index.ts + 6 modules
var PolicyAutomationsFields = __webpack_require__(17244);
// EXTERNAL MODULE: ./frontend/pages/policies/hooks/index.ts + 2 modules
var hooks = __webpack_require__(83844);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/forms/SoftwareDeploySelector/index.ts + 1 modules
var SoftwareDeploySelector = __webpack_require__(66081);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/team_policies.ts
var team_policies = __webpack_require__(80396);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var utilities_constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var components_Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/hooks/useDeepEffect.ts
var useDeepEffect = __webpack_require__(98598);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var config = __webpack_require__(98544);
;// ./frontend/pages/policies/edit/components/SaveNewPolicyModal/SaveNewPolicyModal.tsx

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






















const validatePolicyName = (name) => {
  const errors = {};
  if (!name) {
    errors.name = "Policy name must be present";
  }
  const valid = !(0,lodash.size)(errors);
  return { valid, errors };
};
const SaveNewPolicyModal = ({
  baseClass,
  queryValue,
  onCreatePolicy,
  setIsSaveNewPolicyModalOpen,
  backendValidators,
  platformSelector,
  isUpdatingPolicy,
  aiFeaturesDisabled,
  isFetchingAutofillDescription,
  isFetchingAutofillResolution,
  onClickAutofillDescription,
  onClickAutofillResolution,
  isGlobalPolicy,
  policyTeamId,
  automationsConfig,
  globalConfig,
  fleetName,
  router
}) => {
  const { isPremiumTier, setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  const queryClient = (0,es.useQueryClient)();
  const {
    lastEditedQueryName,
    lastEditedQueryDescription,
    lastEditedQueryResolution,
    lastEditedQueryCritical,
    lastEditedQueryHidden,
    setLastEditedQueryName,
    setLastEditedQueryPlatform,
    // TODO: Keep last edited query platform from resetting when cancelling out of modal and clicking save again
    setLastEditedQueryDescription,
    setLastEditedQueryResolution,
    setLastEditedQueryCritical,
    setLastEditedQueryHidden
  } = (0,react.useContext)(policy/* PolicyContext */.q);
  const [errors, setErrors] = (0,react.useState)(
    backendValidators
  );
  const {
    selectorProps,
    selectedTargetType,
    hasCustomLabels,
    getLabelsPayload
  } = (0,hooks/* usePolicyLabelTargets */.a)();
  const [showAutomations, setShowAutomations] = (0,react.useState)(false);
  const automationsRef = (0,react.useRef)(null);
  const [conditionalAccessOn, setConditionalAccessOn] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (conditionalAccessOn) {
      setLastEditedQueryHidden(false);
    }
  }, [conditionalAccessOn, setLastEditedQueryHidden]);
  const newPolicyStub = (0,react.useMemo)(
    () => ({
      id: -1,
      team_id: policyTeamId != null ? policyTeamId : null,
      calendar_events_enabled: false,
      conditional_access_enabled: false,
      continuous_automations_enabled: false
    }),
    [policyTeamId]
  );
  const disableForm = isFetchingAutofillDescription || isFetchingAutofillResolution;
  const disableSave = !platformSelector.isAnyPlatformSelected || disableForm || selectedTargetType === "Custom" && !hasCustomLabels;
  (0,useDeepEffect/* default */.A)(() => {
    if (lastEditedQueryName) {
      setErrors({});
    }
  }, [lastEditedQueryName]);
  (0,react.useEffect)(() => {
    setErrors(backendValidators);
  }, [backendValidators]);
  const handleSavePolicy = (evt) => {
    var _a;
    evt.preventDefault();
    const newPlatformString = platformSelector.getSelectedPlatforms().join(",");
    setLastEditedQueryPlatform(newPlatformString);
    const { valid: validName, errors: newErrors } = validatePolicyName(
      lastEditedQueryName
    );
    setErrors(__spreadValues(__spreadValues({}, errors), newErrors));
    if (disableSave || !validName) {
      return;
    }
    const automations = showAutomations ? (_a = automationsRef.current) == null ? void 0 : _a.getAutomationsPayload() : void 0;
    if (automations && !automations.isValid) {
      return;
    }
    const payload = {
      description: lastEditedQueryDescription,
      name: lastEditedQueryName,
      query: queryValue,
      resolution: lastEditedQueryResolution,
      platform: newPlatformString,
      critical: lastEditedQueryCritical
    };
    if (isPremiumTier) {
      Object.assign(payload, getLabelsPayload());
      payload.hidden = lastEditedQueryHidden;
    }
    const saveAutomations = (automations == null ? void 0 : automations.isDirty) ? (newPolicy) => __async(null, null, function* () {
      var _a2, _b, _c, _d;
      const requests = [];
      if (automations.policyUpdate && !isGlobalPolicy) {
        requests.push(
          team_policies/* default */.A.update(newPolicy.id, __spreadValues({
            team_id: policyTeamId
          }, automations.policyUpdate))
        );
      }
      if ((_a2 = automations.webhookOrTicketUpdate) == null ? void 0 : _a2.enabled) {
        const existingWebhook = (_c = (_b = automationsConfig == null ? void 0 : automationsConfig.webhook_settings) == null ? void 0 : _b.failing_policies_webhook) != null ? _c : {};
        const currentIds = (_d = existingWebhook.policy_ids) != null ? _d : [];
        const nextIds = Array.from(/* @__PURE__ */ new Set([...currentIds, newPolicy.id]));
        const webhookPayload = {
          webhook_settings: {
            failing_policies_webhook: __spreadProps(__spreadValues({}, existingWebhook), {
              policy_ids: nextIds
            })
          }
        };
        if (isGlobalPolicy) {
          requests.push(
            config/* default */.A.update(webhookPayload).then((updatedConfig) => {
              queryClient.setQueryData(["config"], updatedConfig);
              setConfig(updatedConfig);
            })
          );
        } else if (policyTeamId !== void 0) {
          requests.push(
            teams/* default */.A.update(webhookPayload, policyTeamId).then((updatedTeam) => {
              queryClient.setQueryData(
                ["teams", policyTeamId],
                updatedTeam
              );
            })
          );
        }
      }
      yield Promise.all(requests);
    }) : void 0;
    onCreatePolicy(payload, saveAutomations);
  };
  const renderAutofillButton = (0,react.useCallback)(
    (labelName) => {
      const isFetchingButton = labelName === "Description" && isFetchingAutofillDescription || labelName === "Resolution" && isFetchingAutofillResolution;
      return /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: aiFeaturesDisabled ? "AI features are disabled in organization settings" : /* @__PURE__ */ react.createElement(react.Fragment, null, "Policy queries (SQL) will be sent to a ", /* @__PURE__ */ react.createElement("br", null), "large language model (LLM). Mesh ", /* @__PURE__ */ react.createElement("br", null), "doesn't use this data to train models."),
          position: "top",
          disableTooltip: disableForm,
          underline: false
        },
        /* @__PURE__ */ react.createElement("div", { className: "autofill-tooltip-wrapper" }, /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            variant: "subdued",
            disabled: aiFeaturesDisabled || disableForm,
            onClick: labelName === "Description" ? onClickAutofillDescription : onClickAutofillResolution,
            size: "small"
          },
          isFetchingButton ? "Thinking..." : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(components_Icon/* default */.A, { name: "sparkles" }), " Autofill")
        ))
      );
    },
    [isFetchingAutofillDescription, isFetchingAutofillResolution, disableForm]
  );
  const renderAutofillLabel = (0,react.useCallback)(
    (labelName) => {
      const labelClassName = classnames_default()(`${baseClass}__autofill-label`, {
        [`${baseClass}__label--${labelName}`]: !!labelName
      });
      return /* @__PURE__ */ react.createElement("div", { className: labelClassName }, labelName, renderAutofillButton(labelName));
    },
    [renderAutofillButton]
  );
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Save policy",
      onExit: () => setIsSaveNewPolicyModalOpen(false),
      width: "large"
    },
    /* @__PURE__ */ react.createElement(
      "form",
      {
        onSubmit: handleSavePolicy,
        className: `${baseClass}__save-modal-form`,
        autoComplete: "off"
      },
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "name",
          onChange: (value) => setLastEditedQueryName(value),
          value: lastEditedQueryName,
          error: errors.name,
          inputClassName: `${baseClass}__policy-save-modal-name`,
          label: "Name",
          autofocus: true,
          disabled: disableForm,
          inputOptions: { maxLength: utilities_constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "description",
          onChange: (value) => setLastEditedQueryDescription(value),
          value: lastEditedQueryDescription,
          inputClassName: `${baseClass}__policy-save-modal-description`,
          label: renderAutofillLabel("Description"),
          helpText: "How does this policy's failure put the organization at risk?",
          type: "textarea",
          disabled: disableForm
        }
      ),
      /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "resolution",
          onChange: (value) => setLastEditedQueryResolution(value),
          value: lastEditedQueryResolution,
          inputClassName: `${baseClass}__policy-save-modal-resolution`,
          label: renderAutofillLabel("Resolution"),
          type: "textarea",
          helpText: "If this policy fails, what should the end user expect?",
          disabled: disableForm
        }
      ),
      platformSelector.render(),
      isPremiumTier && /* @__PURE__ */ react.createElement(
        TargetLabelSelector/* TargetLabelSelector */.Z,
        __spreadProps(__spreadValues({}, selectorProps), {
          className: `${baseClass}__target`,
          emptyStateDescription: constants/* POLICY_TARGET_EMPTY_STATE_DESCRIPTION */.gd,
          onAddLabel: () => router.push(paths/* default */.A.LABEL_NEW_DYNAMIC),
          disableOptions: disableForm
        })
      ),
      showAutomations ? /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Automations"), /* @__PURE__ */ react.createElement(
        PolicyAutomationsFields/* default */.A,
        {
          ref: automationsRef,
          policy: newPolicyStub,
          isGlobalPolicy,
          teamIdForApi: policyTeamId,
          automationsConfig,
          globalConfig,
          fleetName,
          selectedPlatforms: platformSelector.getSelectedPlatforms(),
          onConditionalAccessChange: setConditionalAccessOn
        }
      )) : /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__add-automations` }, /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          variant: "secondary",
          type: "button",
          onClick: () => setShowAutomations(true),
          icon: "plus"
        },
        "Add automations"
      )),
      isPremiumTier && /* @__PURE__ */ react.createElement("div", { className: "critical-checkbox-wrapper" }, /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          name: "critical-policy",
          onChange: (value) => setLastEditedQueryCritical(value),
          value: lastEditedQueryCritical,
          disabled: disableForm
        },
        /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: /* @__PURE__ */ react.createElement("p", null, "If automations are turned on, this information is included. If Okta conditional access is configured, end users can never bypass critical policies.")
          },
          "Critical"
        )
      )),
      isPremiumTier && /* @__PURE__ */ react.createElement("div", { className: "hidden-checkbox-wrapper" }, /* @__PURE__ */ react.createElement(
        Checkbox/* default */.A,
        {
          name: "hidden-policy",
          onChange: (value) => setLastEditedQueryHidden(value),
          value: lastEditedQueryHidden,
          disabled: disableForm || conditionalAccessOn
        },
        /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: conditionalAccessOn ? "This setting is not compatible with the conditional access automation." : "Does not require action from the end user and is hidden in Mesh Desktop."
          },
          "Hide from end user"
        )
      )),
      /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Select the platforms this", /* @__PURE__ */ react.createElement("br", null), "policy will be checked on", /* @__PURE__ */ react.createElement("br", null), "to save the policy."),
          tooltipClass: `${baseClass}__button--modal-save-tooltip`,
          position: "top",
          disableTooltip: !disableSave,
          underline: false,
          showArrow: true,
          tipOffset: 8
        },
        /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__button-wrap--modal-save` }, /* @__PURE__ */ react.createElement(
          Button/* default */.A,
          {
            type: "submit",
            disabled: disableSave,
            className: "save-policy-loading",
            isLoading: isUpdatingPolicy
          },
          "Save"
        ))
      ), /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          className: `${baseClass}__button--modal-cancel`,
          type: "button",
          onClick: () => setIsSaveNewPolicyModalOpen(false),
          variant: "secondary"
        },
        "Cancel"
      ))
    )
  );
};
/* harmony default export */ var SaveNewPolicyModal_SaveNewPolicyModal = (SaveNewPolicyModal);

;// ./frontend/pages/policies/edit/components/SaveNewPolicyModal/index.ts



;// ./frontend/pages/policies/edit/components/PolicyForm/helpers.ts


const getPolicyAutomationErrorMessage = (err) => {
  const declarationSelectedError = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "resend declaration (DDM)"
  });
  if (declarationSelectedError !== "") {
    return declarationSelectedError;
  }
  const invalidProfilePrefixError = (0,errors/* getErrorReason */.F3)(err, {
    reasonIncludes: "has an invalid prefix"
  });
  if (invalidProfilePrefixError !== "") {
    return "Only Apple and Windows configuration profiles are supported. Please select a valid profile.";
  }
  return "Could not update policy automations.";
};

;// ./frontend/pages/policies/edit/components/PolicyForm/PolicyForm.tsx

var PolicyForm_defProp = Object.defineProperty;
var PolicyForm_defProps = Object.defineProperties;
var PolicyForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var PolicyForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PolicyForm_hasOwnProp = Object.prototype.hasOwnProperty;
var PolicyForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var PolicyForm_defNormalProp = (obj, key, value) => key in obj ? PolicyForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PolicyForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PolicyForm_hasOwnProp.call(b, prop))
      PolicyForm_defNormalProp(a, prop, b[prop]);
  if (PolicyForm_getOwnPropSymbols)
    for (var prop of PolicyForm_getOwnPropSymbols(b)) {
      if (PolicyForm_propIsEnum.call(b, prop))
        PolicyForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var PolicyForm_spreadProps = (a, b) => PolicyForm_defProps(a, PolicyForm_getOwnPropDescs(b));
var PolicyForm_async = (__this, __arguments, generator) => {
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

































const baseClass = "policy-form";
const validateQuerySQL = (query) => {
  const errors = {};
  const { error: queryError, valid: queryValid } = (0,validate_query/* validateQuery */.B4)(query);
  if (!queryValid) {
    errors.query = queryError;
  }
  const valid = !(0,lodash.size)(errors);
  return { valid, errors };
};
const PolicyForm = ({
  router,
  teamIdForApi,
  policyIdForEdit,
  showOpenSchemaActionText,
  storedPolicy,
  isStoredPolicyLoading,
  isTeamObserver,
  isUpdatingPolicy,
  onCreatePolicy,
  onOsqueryTableSelect,
  goToSelectTargets,
  onUpdate,
  onOpenSchemaSidebar,
  renderLiveQueryWarning,
  backendValidators,
  isFetchingAutofillDescription,
  isFetchingAutofillResolution,
  onClickAutofillDescription,
  onClickAutofillResolution,
  resetAiAutofillData
}) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const [errors, setErrors] = (0,react.useState)({});
  const [isSaveNewPolicyModalOpen, setIsSaveNewPolicyModalOpen] = (0,react.useState)(
    false
  );
  const isPatchPolicy = (storedPolicy == null ? void 0 : storedPolicy.type) === "patch";
  const [isAddingAutomation, setIsAddingAutomation] = (0,react.useState)(false);
  const [patchOption, setPatchOption] = (0,react.useState)("manual");
  const [endUserExperience, setEndUserExperience] = (0,react.useState)(
    "immediate"
  );
  const storedPatchPolicyId = storedPolicy == null ? void 0 : storedPolicy.id;
  const storedPatchWhenClosed = storedPolicy == null ? void 0 : storedPolicy.patch_when_closed;
  const storedNotifyBeforePatching = storedPolicy == null ? void 0 : storedPolicy.notify_before_patching;
  const storedInstallSoftwareId = (_a = storedPolicy == null ? void 0 : storedPolicy.install_software) == null ? void 0 : _a.software_title_id;
  (0,react.useEffect)(() => {
    if (!isPatchPolicy || !storedPatchPolicyId) return;
    let nextPatchOption = "manual";
    if (storedPatchWhenClosed) {
      nextPatchOption = "closed";
    } else if (storedInstallSoftwareId) {
      nextPatchOption = "force";
    }
    setPatchOption(nextPatchOption);
    setEndUserExperience(storedNotifyBeforePatching ? "notify" : "immediate");
  }, [
    isPatchPolicy,
    storedPatchPolicyId,
    storedPatchWhenClosed,
    storedNotifyBeforePatching,
    storedInstallSoftwareId
  ]);
  const {
    lastEditedQueryId,
    lastEditedQueryName,
    lastEditedQueryDescription,
    lastEditedQueryBody,
    lastEditedQueryResolution,
    lastEditedQueryCritical,
    lastEditedQueryHidden,
    lastEditedQueryPlatform,
    lastEditedQueryLabelsIncludeAny,
    lastEditedQueryLabelsIncludeAll,
    lastEditedQueryLabelsExcludeAny,
    lastEditedQueryLabelsExcludeAll,
    defaultPolicy,
    setLastEditedQueryName,
    setLastEditedQueryDescription,
    setLastEditedQueryBody,
    setLastEditedQueryResolution,
    setLastEditedQueryCritical,
    setLastEditedQueryHidden,
    setLastEditedQueryPlatform
  } = (0,react.useContext)(policy/* PolicyContext */.q);
  const {
    selectorProps,
    selectedTargetType,
    hasCustomLabels,
    getLabelsPayload
  } = (0,hooks/* usePolicyLabelTargets */.a)({
    includeAny: lastEditedQueryLabelsIncludeAny,
    includeAll: lastEditedQueryLabelsIncludeAll,
    excludeAny: lastEditedQueryLabelsExcludeAny,
    excludeAll: lastEditedQueryLabelsExcludeAll
  });
  const queryClient = (0,es.useQueryClient)();
  const {
    currentTeam,
    isGlobalObserver,
    isTeamTechnician,
    isGlobalTechnician,
    isOnGlobalTeam,
    isPremiumTier,
    config,
    isFreeTier
  } = (0,react.useContext)(app/* AppContext */.BR);
  const disabledLiveQuery = config == null ? void 0 : config.server_settings.live_query_disabled;
  const aiFeaturesDisabled = (config == null ? void 0 : config.server_settings.ai_features_disabled) || false;
  const gitOpsModeEnabled = config == null ? void 0 : config.gitops.gitops_mode_enabled;
  const debounceSQL = (0,index_module/* useDebouncedCallback */.YQ)((sql) => {
    const { errors: newErrors } = validateQuerySQL(sql);
    setErrors(PolicyForm_spreadValues({}, newErrors));
  }, 500);
  const platformCompatibility = (0,usePlatformCompatibility/* default */.A)();
  const {
    getCompatiblePlatforms,
    setCompatiblePlatforms
  } = platformCompatibility;
  const platformSelectorDisabled = isFetchingAutofillDescription || isFetchingAutofillResolution || gitOpsModeEnabled;
  const platformSelector = (0,usePlatformSelector/* default */.A)(
    lastEditedQueryPlatform,
    baseClass,
    platformSelectorDisabled,
    storedPolicy == null ? void 0 : storedPolicy.install_software,
    currentTeam == null ? void 0 : currentTeam.id
  );
  const {
    getSelectedPlatforms,
    setSelectedPlatforms,
    isAnyPlatformSelected
  } = platformSelector;
  policyIdForEdit = policyIdForEdit || 0;
  const isEditMode = !!policyIdForEdit && !isTeamObserver && !isGlobalObserver;
  const isNewTemplatePolicy = !policyIdForEdit && constants/* DEFAULT_POLICIES */.fb.find((p) => p.name === lastEditedQueryName);
  const newPolicyTeamId = (currentTeam == null ? void 0 : currentTeam.id) !== void 0 && currentTeam.id !== team/* APP_CONTEXT_ALL_TEAMS_ID */.jc ? currentTeam.id : void 0;
  const isGlobalPolicy = isEditMode ? (storedPolicy == null ? void 0 : storedPolicy.team_id) == null : newPolicyTeamId === void 0;
  const automationsTeamId = isEditMode ? (_b = storedPolicy == null ? void 0 : storedPolicy.team_id) != null ? _b : void 0 : newPolicyTeamId;
  const { data: automationsTeamData } = (0,es.useQuery)(
    ["teams", automationsTeamId],
    () => teams/* default */.A.load(automationsTeamId),
    {
      enabled: !isGlobalPolicy && automationsTeamId !== void 0,
      staleTime: 5e3
    }
  );
  const automationsConfig = (_c = isGlobalPolicy ? config : automationsTeamData == null ? void 0 : automationsTeamData.team) != null ? _c : void 0;
  let automationsFleetName = "";
  if (isGlobalPolicy) {
    automationsFleetName = team/* APP_CONTEXT_ALL_TEAMS_SUMMARY */.Op.name;
  } else if (automationsTeamId === team/* APP_CONTEXT_NO_TEAM_ID */.Gl) {
    automationsFleetName = team/* APP_CONTEXT_NO_TEAM_SUMMARY */.bn.name;
  } else {
    automationsFleetName = (_f = (_e = (_d = automationsTeamData == null ? void 0 : automationsTeamData.team) == null ? void 0 : _d.name) != null ? _e : currentTeam == null ? void 0 : currentTeam.name) != null ? _f : "";
  }
  const automationsRef = (0,react.useRef)(null);
  const [conditionalAccessOn, setConditionalAccessOn] = (0,react.useState)(
    (_g = storedPolicy == null ? void 0 : storedPolicy.conditional_access_enabled) != null ? _g : false
  );
  (0,react.useEffect)(() => {
    var _a2;
    setConditionalAccessOn((_a2 = storedPolicy == null ? void 0 : storedPolicy.conditional_access_enabled) != null ? _a2 : false);
  }, [storedPolicy == null ? void 0 : storedPolicy.conditional_access_enabled]);
  (0,react.useEffect)(() => {
    if (conditionalAccessOn) {
      setLastEditedQueryHidden(false);
    }
  }, [conditionalAccessOn, setLastEditedQueryHidden]);
  const {
    mutate: saveAutomations,
    isLoading: isSavingAutomations
  } = (0,hooks/* useUpdatePolicyAutomations */.p)({
    policy: storedPolicy,
    teamIdForApi: automationsTeamId,
    isGlobalPolicy,
    automationsConfig,
    onSuccess: () => {
      queryClient.invalidateQueries(["policy", policyIdForEdit]);
    },
    onError: (err) => {
      ToastNotification/* notify */.me.error(getPolicyAutomationErrorMessage(err), { response: err });
    }
  });
  (0,react.useEffect)(() => {
    const isInheritedPolicy = isEditMode && (storedPolicy == null ? void 0 : storedPolicy.team_id) === null;
    const noEditPermissions = isTeamObserver || isGlobalObserver || isTeamTechnician || isGlobalTechnician || !isOnGlobalTeam && isInheritedPolicy;
    if (!isStoredPolicyLoading && // Confirms teamId for storedQuery before RBAC reroute
    policyIdForEdit && policyIdForEdit > 0 && noEditPermissions) {
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.POLICY_DETAILS(policyIdForEdit), {
          fleet_id: teamIdForApi
        })
      );
    }
  }, [
    policyIdForEdit,
    isEditMode,
    isStoredPolicyLoading,
    isTeamObserver,
    isGlobalObserver,
    isTeamTechnician,
    isGlobalTechnician,
    isOnGlobalTeam,
    storedPolicy == null ? void 0 : storedPolicy.team_id,
    router,
    teamIdForApi
  ]);
  (0,react.useEffect)(() => {
    if (isNewTemplatePolicy) {
      setCompatiblePlatforms(lastEditedQueryBody);
    }
  }, []);
  (0,react.useEffect)(() => {
    debounceSQL(lastEditedQueryBody);
    if (policyIdForEdit && policyIdForEdit !== lastEditedQueryId || isNewTemplatePolicy && !lastEditedQueryBody) {
      return;
    }
    setCompatiblePlatforms(lastEditedQueryBody);
  }, [lastEditedQueryBody, lastEditedQueryId]);
  const onLoad = (editor) => {
    editor.setOptions({
      enableLinking: true,
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
  const onChangePolicySql = (sqlString) => {
    setLastEditedQueryBody(sqlString);
    resetAiAutofillData();
  };
  const onAddPatchAutomation = () => PolicyForm_async(null, null, function* () {
    var _a2;
    if (!((_a2 = storedPolicy == null ? void 0 : storedPolicy.patch_software) == null ? void 0 : _a2.software_title_id) || (storedPolicy == null ? void 0 : storedPolicy.team_id) == null) {
      return;
    }
    setIsAddingAutomation(true);
    try {
      yield team_policies/* default */.A.update(policyIdForEdit, {
        team_id: storedPolicy.team_id,
        software_title_id: storedPolicy.patch_software.software_title_id
      });
      queryClient.invalidateQueries(["policy", policyIdForEdit]);
      ToastNotification/* notify */.me.success("Automation added.");
    } catch (e) {
      ToastNotification/* notify */.me.error("Couldn't set automation. Please try again.", {
        response: e
      });
    } finally {
      setIsAddingAutomation(false);
    }
  });
  const promptSavePolicy = () => (evt) => PolicyForm_async(null, null, function* () {
    var _a2, _b2, _c2, _d2;
    evt.preventDefault();
    if (isEditMode && !lastEditedQueryName) {
      setErrors(PolicyForm_spreadProps(PolicyForm_spreadValues({}, errors), { name: "Policy name must be present" }));
      return;
    }
    if (isEditMode && !isPatchPolicy && !isAnyPlatformSelected) {
      setErrors(PolicyForm_spreadProps(PolicyForm_spreadValues({}, errors), {
        name: "At least one platform must be selected"
      }));
      return;
    }
    let automations;
    if (isEditMode) {
      automations = (_a2 = automationsRef.current) == null ? void 0 : _a2.getAutomationsPayload();
      if (!automations && isPremiumTier && isPatchPolicy) {
        automations = {
          isValid: true,
          isDirty: true,
          policyUpdate: PolicyForm_spreadValues({
            software_title_id: patchOption === "manual" ? null : (_c2 = (_b2 = storedPolicy == null ? void 0 : storedPolicy.patch_software) == null ? void 0 : _b2.software_title_id) != null ? _c2 : null
          }, (0,SoftwareDeploySelector/* getPatchPolicyFlags */.kl)(patchOption, endUserExperience))
        };
      }
      if (automations && !automations.isValid) {
        return;
      }
    }
    const persistAutomations = () => {
      if (automations == null ? void 0 : automations.isDirty) {
        saveAutomations({
          policyUpdate: automations.policyUpdate,
          webhookOrTicketUpdate: automations.webhookOrTicketUpdate
        });
      }
    };
    const disablesConditionalAccess = ((_d2 = automations == null ? void 0 : automations.policyUpdate) == null ? void 0 : _d2.conditional_access_enabled) === false;
    if (isPatchPolicy && isEditMode) {
      const payload = {
        name: lastEditedQueryName,
        description: lastEditedQueryDescription,
        resolution: lastEditedQueryResolution
      };
      if (isPremiumTier) {
        payload.critical = lastEditedQueryCritical;
        payload.hidden = lastEditedQueryHidden;
        if (disablesConditionalAccess) {
          payload.conditional_access_enabled = false;
        }
      }
      yield onUpdate(payload);
      persistAutomations();
      return;
    }
    if (!(lastEditedQueryBody == null ? void 0 : lastEditedQueryBody.trim())) {
      setErrors(PolicyForm_spreadProps(PolicyForm_spreadValues({}, errors), { query: validate_query/* EMPTY_QUERY_ERR */.Ni }));
      return;
    }
    let selectedPlatforms = getSelectedPlatforms();
    if (selectedPlatforms.length === 0 && !isEditMode && !defaultPolicy) {
      selectedPlatforms = getCompatiblePlatforms();
      setSelectedPlatforms(selectedPlatforms);
    }
    const newPlatformString = selectedPlatforms.join(
      ","
    );
    if (!defaultPolicy) {
      setLastEditedQueryPlatform(newPlatformString);
    }
    if (!isEditMode) {
      setIsSaveNewPolicyModalOpen(true);
    } else {
      const payload = {
        name: lastEditedQueryName,
        description: lastEditedQueryDescription,
        query: lastEditedQueryBody,
        resolution: lastEditedQueryResolution,
        platform: newPlatformString
      };
      if (isPremiumTier) {
        Object.assign(payload, getLabelsPayload());
        payload.critical = lastEditedQueryCritical;
        payload.hidden = lastEditedQueryHidden;
        if (disablesConditionalAccess) {
          payload.conditional_access_enabled = false;
        }
      }
      yield onUpdate(payload);
      persistAutomations();
    }
  });
  const renderLabelComponent = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__sql-editor-label-actions` }, showOpenSchemaActionText && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "subdued",
        onClick: onOpenSchemaSidebar,
        icon: "info",
        iconPosition: "right"
      },
      "Schema"
    ), !policyIdForEdit && // only when creating a new policy
    /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        text: "Examples",
        url: `${utilities_constants/* LEARN_MORE_ABOUT_BASE_LINK */.CW}/policy-templates`,
        newTab: true
      }
    ));
  };
  const renderName = () => {
    if (isEditMode) {
      return /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "policy-name",
          label: "Name",
          placeholder: "Add name here",
          value: lastEditedQueryName,
          error: errors && errors.name,
          onChange: (value) => setLastEditedQueryName(value),
          disabled: gitOpsModeEnabled,
          inputOptions: { maxLength: utilities_constants/* MAX_ENTITY_CHAR_LENGTH */.fQ }
        }
      );
    }
    return /* @__PURE__ */ react.createElement(
      "h1",
      {
        className: `${baseClass}__policy-name ${baseClass}__policy-name--new no-hover`
      },
      "New policy"
    );
  };
  const renderDescription = () => {
    if (isEditMode) {
      return /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "policy-description",
          label: "Description",
          placeholder: "Add description here.",
          value: lastEditedQueryDescription,
          type: "textarea",
          helpText: "How does this policy's failure put the organization at risk?",
          onChange: (value) => setLastEditedQueryDescription(value),
          disabled: gitOpsModeEnabled
        }
      );
    }
    return null;
  };
  const renderResolution = () => {
    if (isEditMode) {
      return /* @__PURE__ */ react.createElement(
        InputField/* default */.A,
        {
          name: "policy-resolution",
          label: "Resolution",
          placeholder: "Add resolution here.",
          value: lastEditedQueryResolution,
          type: "textarea",
          helpText: "If this policy fails, what should the end user expect?",
          onChange: (value) => setLastEditedQueryResolution(value),
          disabled: gitOpsModeEnabled
        }
      );
    }
    return null;
  };
  const renderPlatformCompatibility = () => {
    if (isEditMode && (isStoredPolicyLoading || policyIdForEdit !== lastEditedQueryId)) {
      return null;
    }
    return platformCompatibility.render();
  };
  const renderCriticalPolicy = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__critical-checkbox-wrapper` }, /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        name: "critical-policy",
        className: "critical-policy",
        onChange: (value) => setLastEditedQueryCritical(value),
        value: lastEditedQueryCritical,
        disabled: gitOpsModeEnabled
      },
      /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: /* @__PURE__ */ react.createElement("p", null, "If automations are turned on, this information is included. If Okta conditional access is configured, end users can never bypass critical policies.")
        },
        "Critical"
      )
    ));
  };
  const renderHiddenPolicy = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__hidden-checkbox-wrapper` }, /* @__PURE__ */ react.createElement(
      Checkbox/* default */.A,
      {
        name: "hidden-policy",
        className: "hidden-policy",
        onChange: (value) => setLastEditedQueryHidden(value),
        value: lastEditedQueryHidden,
        disabled: gitOpsModeEnabled || conditionalAccessOn
      },
      /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: conditionalAccessOn ? "This setting is not compatible with the conditional access automation." : "Does not require action from the end user and is hidden in Mesh Desktop."
        },
        "Hide from end user"
      )
    ));
  };
  const renderPolicyFleetName = () => {
    if (isFreeTier) return null;
    let fleetName;
    if (isEditMode) {
      if ((storedPolicy == null ? void 0 : storedPolicy.team_id) === null) {
        fleetName = team/* APP_CONTEXT_ALL_TEAMS_SUMMARY */.Op.name;
      } else if ((storedPolicy == null ? void 0 : storedPolicy.team_id) === 0) {
        fleetName = team/* APP_CONTEXT_NO_TEAM_SUMMARY */.bn.name;
      } else {
        fleetName = currentTeam == null ? void 0 : currentTeam.name;
      }
    } else {
      fleetName = currentTeam == null ? void 0 : currentTeam.name;
    }
    if (!fleetName) return null;
    return isEditMode ? /* @__PURE__ */ react.createElement("p", null, "Editing policy for ", /* @__PURE__ */ react.createElement("strong", null, fleetName), ".") : /* @__PURE__ */ react.createElement("p", null, "Creating a new policy for ", /* @__PURE__ */ react.createElement("strong", null, fleetName), ".");
  };
  const renderPolicyForm = () => {
    const disableSaveFormErrors = isAddingAutomation || isEditMode && !isPatchPolicy && !isAnyPlatformSelected || lastEditedQueryName === "" && !!lastEditedQueryId || selectedTargetType === "Custom" && !hasCustomLabels || errors.query === validate_query/* EMPTY_QUERY_ERR */.Ni;
    const showAutomationsBlock = isEditMode && !!storedPolicy && !!automationsConfig;
    const patchOptions = isEditMode && isPremiumTier && isPatchPolicy && /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Patch"), /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          SoftwareDeploySelector/* PatchOptionSelector */.dw,
          {
            patchOption,
            onSelectPatchOption: setPatchOption,
            platform: storedPolicy == null ? void 0 : storedPolicy.platform,
            endUserExperience,
            onSelectEndUserExperience: setEndUserExperience,
            disabled: disableChildren
          }
        )
      }
    ));
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("form", { className: `${baseClass}__wrapper`, autoComplete: "off" }, isEditMode ? /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__page-header` }, /* @__PURE__ */ react.createElement("h1", { className: `${baseClass}__page-title` }, "Edit policy"), renderPolicyFleetName()) : /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__title-bar` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__policy-name-fleet-name` }, renderName(), renderPolicyFleetName())), isEditMode && renderName(), renderDescription(), renderResolution(), isEditMode && !isPatchPolicy && platformSelector.render(), isEditMode && isPremiumTier && !isPatchPolicy && /* @__PURE__ */ react.createElement(
      TargetLabelSelector/* TargetLabelSelector */.Z,
      PolicyForm_spreadProps(PolicyForm_spreadValues({}, selectorProps), {
        className: `${baseClass}__target`,
        emptyStateDescription: constants/* POLICY_TARGET_EMPTY_STATE_DESCRIPTION */.gd,
        onAddLabel: () => router.push(paths/* default */.A.LABEL_NEW_DYNAMIC),
        disableOptions: gitOpsModeEnabled
      })
    ), showAutomationsBlock && /* @__PURE__ */ react.createElement("div", { className: "form-field" }, /* @__PURE__ */ react.createElement("div", { className: "form-field__label" }, "Automations"), !(isPremiumTier && isPatchPolicy) && /* @__PURE__ */ react.createElement(
      components/* PatchAutomationCta */.S_,
      {
        storedPolicy,
        canEditPolicy: isEditMode,
        onAddAutomation: onAddPatchAutomation,
        isAddingAutomation
      }
    ), /* @__PURE__ */ react.createElement(
      PolicyAutomationsFields/* default */.A,
      {
        key: storedPolicy.updated_at,
        ref: automationsRef,
        policy: storedPolicy,
        isGlobalPolicy,
        teamIdForApi: automationsTeamId,
        automationsConfig,
        globalConfig: config != null ? config : void 0,
        fleetName: automationsFleetName,
        patchOption: isPremiumTier && isPatchPolicy ? patchOption : void 0,
        endUserExperience: isPremiumTier && isPatchPolicy ? endUserExperience : void 0,
        patchSlot: patchOptions,
        selectedPlatforms: getSelectedPlatforms(),
        onConditionalAccessChange: setConditionalAccessOn
      }
    )), !showAutomationsBlock && patchOptions, isEditMode && isPremiumTier && !isPatchPolicy && renderCriticalPolicy(), isEditMode && isPremiumTier && renderHiddenPolicy(), /* @__PURE__ */ react.createElement(
      SQLEditor/* default */.A,
      {
        value: lastEditedQueryBody,
        error: errors.query,
        label: "Query",
        labelActionComponent: isPatchPolicy ? /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: "Query is read-only for patch policies.",
            position: "top",
            underline: false,
            showArrow: true,
            tipOffset: 12
          },
          /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "info", size: "small" })
        ) : renderLabelComponent(),
        name: "query editor",
        onLoad,
        wrapperClassName: `${baseClass}__text-editor-wrapper form-field`,
        onChange: onChangePolicySql,
        handleSubmit: promptSavePolicy,
        wrapEnabled: true,
        focus: !isEditMode,
        readOnly: isPatchPolicy
      }
    ), renderPlatformCompatibility(), renderLiveQueryWarning(), /* @__PURE__ */ react.createElement("div", { className: "button-wrap" }, /* @__PURE__ */ react.createElement(
      GitOpsModeTooltipWrapper/* default */.A,
      {
        renderChildren: (disableChildren) => /* @__PURE__ */ react.createElement(
          TooltipWrapper/* default */.A,
          {
            tipContent: "Select the platforms this policy will be checked on to save or run the policy.",
            tooltipClass: `${baseClass}__button-wrap--tooltip`,
            position: "top",
            disableTooltip: !isEditMode || isAnyPlatformSelected,
            underline: false
          },
          /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__button-wrap--tooltip` }, /* @__PURE__ */ react.createElement(
            Button/* default */.A,
            {
              onClick: promptSavePolicy(),
              disabled: disableSaveFormErrors || disableChildren,
              className: "save-loading",
              isLoading: isUpdatingPolicy || isSavingAutomations
            },
            "Save"
          ))
        )
      }
    ), /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: disabledLiveQuery ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Live reports are disabled in organization settings.") : /* @__PURE__ */ react.createElement(react.Fragment, null, "Select the platforms this policy will be checked on to save or run the policy."),
        disableTooltip: (!isEditMode || isAnyPlatformSelected) && !disabledLiveQuery,
        underline: false,
        showArrow: true,
        position: "top"
      },
      /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__button-wrap--tooltip` }, /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          onClick: goToSelectTargets,
          disabled: isAddingAutomation || isEditMode && !isAnyPlatformSelected || disabledLiveQuery,
          variant: "secondary",
          icon: "run",
          iconPosition: "right"
        },
        "Run policy"
      ))
    ))), isSaveNewPolicyModalOpen && /* @__PURE__ */ react.createElement(
      SaveNewPolicyModal_SaveNewPolicyModal,
      {
        baseClass,
        queryValue: lastEditedQueryBody,
        onCreatePolicy,
        setIsSaveNewPolicyModalOpen,
        backendValidators,
        platformSelector,
        isUpdatingPolicy,
        aiFeaturesDisabled,
        isFetchingAutofillDescription,
        isFetchingAutofillResolution,
        onClickAutofillDescription,
        onClickAutofillResolution,
        isGlobalPolicy,
        policyTeamId: automationsTeamId,
        automationsConfig,
        globalConfig: config != null ? config : void 0,
        fleetName: automationsFleetName,
        router
      }
    ));
  };
  if (isStoredPolicyLoading) {
    return /* @__PURE__ */ react.createElement(components_Spinner/* default */.A, null);
  }
  return renderPolicyForm();
};
/* harmony default export */ var PolicyForm_PolicyForm = (PolicyForm);

;// ./frontend/pages/policies/edit/components/PolicyForm/index.ts



// EXTERNAL MODULE: ./frontend/services/index.ts
var services = __webpack_require__(97126);
// EXTERNAL MODULE: ./frontend/utilities/endpoints.ts
var endpoints = __webpack_require__(90508);
;// ./frontend/services/entities/autofill.ts



/* harmony default export */ var autofill = ({
  getPolicyInterpretationFromSQL: (sql) => {
    const { AUTOFILL_POLICY } = endpoints/* default */.A;
    return (0,services/* default */.Ay)("POST", AUTOFILL_POLICY, { sql });
  }
});

// EXTERNAL MODULE: ./frontend/services/entities/global_policies.ts
var global_policies = __webpack_require__(39414);
// EXTERNAL MODULE: ./frontend/utilities/debounce/index.ts
var debounce = __webpack_require__(14332);
// EXTERNAL MODULE: ./frontend/utilities/deep_difference/index.ts
var deep_difference = __webpack_require__(65273);
;// ./frontend/pages/policies/edit/screens/QueryEditor.tsx

var QueryEditor_defProp = Object.defineProperty;
var QueryEditor_defProps = Object.defineProperties;
var QueryEditor_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var QueryEditor_getOwnPropSymbols = Object.getOwnPropertySymbols;
var QueryEditor_hasOwnProp = Object.prototype.hasOwnProperty;
var QueryEditor_propIsEnum = Object.prototype.propertyIsEnumerable;
var QueryEditor_defNormalProp = (obj, key, value) => key in obj ? QueryEditor_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var QueryEditor_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (QueryEditor_hasOwnProp.call(b, prop))
      QueryEditor_defNormalProp(a, prop, b[prop]);
  if (QueryEditor_getOwnPropSymbols)
    for (var prop of QueryEditor_getOwnPropSymbols(b)) {
      if (QueryEditor_propIsEnum.call(b, prop))
        QueryEditor_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var QueryEditor_spreadProps = (a, b) => QueryEditor_defProps(a, QueryEditor_getOwnPropDescs(b));
var QueryEditor_async = (__this, __arguments, generator) => {
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















const QueryEditor = ({
  router,
  baseClass,
  policyIdForEdit,
  storedPolicy,
  storedPolicyError,
  showOpenSchemaActionText,
  isStoredPolicyLoading,
  isTeamObserver,
  createPolicy,
  onOsqueryTableSelect,
  goToSelectTargets,
  onOpenSchemaSidebar,
  renderLiveQueryWarning,
  teamIdForApi
}) => {
  const { currentUser, isPremiumTier, filteredPoliciesPath } = (0,react.useContext)(
    app/* AppContext */.BR
  );
  const {
    lastEditedQueryName,
    lastEditedQueryDescription,
    lastEditedQueryBody,
    lastEditedQueryResolution,
    lastEditedQueryCritical,
    lastEditedQueryHidden,
    lastEditedQueryPlatform,
    policyTeamId,
    setLastEditedQueryDescription,
    setLastEditedQueryResolution
  } = (0,react.useContext)(policy/* PolicyContext */.q);
  (0,react.useEffect)(() => {
    if (storedPolicyError) {
      ToastNotification/* notify */.me.error(
        "Something went wrong retrieving your policy. Please try again.",
        { response: storedPolicyError }
      );
    }
  }, []);
  const [isUpdatingPolicy, setIsUpdatingPolicy] = (0,react.useState)(false);
  const [backendValidators, setBackendValidators] = (0,react.useState)({});
  const [
    policyAutofillData,
    setPolicyAutofillData
  ] = (0,react.useState)(null);
  const [
    isFetchingAutofillDescription,
    setIsFetchingAutofillDescription
  ] = (0,react.useState)(false);
  const [
    isFetchingAutofillResolution,
    setIsFetchingAutofillResolution
  ] = (0,react.useState)(false);
  const onClickAutofillDescription = () => QueryEditor_async(null, null, function* () {
    if (policyAutofillData) {
      setLastEditedQueryDescription(policyAutofillData.description);
    } else {
      setIsFetchingAutofillDescription(true);
      try {
        const autofillResponse = yield autofill.getPolicyInterpretationFromSQL(
          lastEditedQueryBody
        );
        setPolicyAutofillData(autofillResponse);
        setLastEditedQueryDescription(autofillResponse.description);
      } catch (error) {
        console.log(error);
        ToastNotification/* notify */.me.error("Couldn't autofill policy data.", { response: error });
      }
      setIsFetchingAutofillDescription(false);
    }
  });
  const onClickAutofillResolution = () => QueryEditor_async(null, null, function* () {
    if (policyAutofillData) {
      setLastEditedQueryResolution(policyAutofillData.resolution);
    } else {
      setIsFetchingAutofillResolution(true);
      try {
        const autofillResponse = yield autofill.getPolicyInterpretationFromSQL(
          lastEditedQueryBody
        );
        setPolicyAutofillData(autofillResponse);
        setLastEditedQueryResolution(autofillResponse.resolution);
      } catch (error) {
        console.log(error);
        ToastNotification/* notify */.me.error("Couldn't autofill policy data.", { response: error });
      }
      setIsFetchingAutofillResolution(false);
    }
  });
  const onCreatePolicy = (0,debounce/* default */.A)(
    (formData, saveAutomations) => QueryEditor_async(null, null, function* () {
      if (policyTeamId !== team/* APP_CONTEXT_ALL_TEAMS_ID */.jc) {
        formData.team_id = policyTeamId;
      }
      setIsUpdatingPolicy(true);
      const payload = {
        name: formData.name,
        description: formData.description,
        query: formData.query,
        resolution: formData.resolution,
        platform: formData.platform,
        labels_include_any: formData.labels_include_any,
        labels_include_all: formData.labels_include_all,
        labels_exclude_any: formData.labels_exclude_any,
        labels_exclude_all: formData.labels_exclude_all
      };
      if (isPremiumTier) {
        payload.critical = formData.critical;
        payload.hidden = formData.hidden;
        payload.team_id = formData.team_id;
      }
      try {
        const policy = yield createPolicy(payload).then(
          (data) => data.policy
        );
        if (saveAutomations) {
          try {
            yield saveAutomations(policy);
          } catch (automationsErr) {
            ToastNotification/* notify */.me.error(
              "Policy was created, but its automations couldn't be saved.",
              { response: automationsErr }
            );
          }
        }
        ToastNotification/* notify */.me.success("Policy created.");
        router.push(
          (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.POLICY_DETAILS(policy.id), {
            fleet_id: policy.team_id
          })
        );
      } catch (createError) {
        if ((0,errors/* getErrorReason */.F3)(createError).includes("already exists")) {
          setBackendValidators({
            name: "A policy with this name already exists"
          });
        } else {
          ToastNotification/* notify */.me.error(
            "Something went wrong creating your policy. Please try again.",
            { response: createError }
          );
        }
      } finally {
        setIsUpdatingPolicy(false);
      }
    })
  );
  const onUpdatePolicy = (formData) => QueryEditor_async(null, null, function* () {
    if (!policyIdForEdit) {
      return false;
    }
    setIsUpdatingPolicy(true);
    const updatedPolicy = (0,deep_difference/* default */.A)(formData, {
      lastEditedQueryName,
      lastEditedQueryDescription,
      lastEditedQueryBody,
      lastEditedQueryResolution,
      lastEditedQueryCritical,
      lastEditedQueryHidden,
      lastEditedQueryPlatform
    });
    if ((storedPolicy == null ? void 0 : storedPolicy.type) === "patch") {
      delete updatedPolicy.query;
      delete updatedPolicy.platform;
    }
    const updateAPIRequest = () => {
      var _a;
      const team_id = (_a = storedPolicy == null ? void 0 : storedPolicy.team_id) != null ? _a : void 0;
      return team_id !== void 0 ? team_policies/* default */.A.update(policyIdForEdit, QueryEditor_spreadProps(QueryEditor_spreadValues({}, updatedPolicy), {
        team_id
      })) : global_policies/* default */.A.update(policyIdForEdit, updatedPolicy);
    };
    try {
      yield updateAPIRequest();
      ToastNotification/* notify */.me.success("Policy updated.");
    } catch (updateError) {
      console.error(updateError);
      if ((0,errors/* getErrorReason */.F3)(updateError).includes("Duplicate")) {
        ToastNotification/* notify */.me.error("A policy with this name already exists.", {
          response: updateError
        });
      } else {
        ToastNotification/* notify */.me.error(
          "Something went wrong updating your policy. Please try again.",
          { response: updateError }
        );
      }
    } finally {
      setIsUpdatingPolicy(false);
    }
    return false;
  });
  if (!currentUser) {
    return null;
  }
  const backToPoliciesPath = () => {
    const queryParams = { fleet_id: teamIdForApi };
    return filteredPoliciesPath || (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.MANAGE_POLICIES, queryParams);
  };
  const backPath = policyIdForEdit ? (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.POLICY_DETAILS(policyIdForEdit), {
    fleet_id: teamIdForApi
  }) : backToPoliciesPath();
  const backText = policyIdForEdit ? "Back to policy" : "Back to policies";
  return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__form` }, /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__header-links` }, /* @__PURE__ */ react.createElement(BackButton/* default */.A, { text: backText, path: backPath })), /* @__PURE__ */ react.createElement(
    PolicyForm_PolicyForm,
    {
      router,
      teamIdForApi,
      onCreatePolicy,
      goToSelectTargets,
      onOsqueryTableSelect,
      onUpdate: onUpdatePolicy,
      storedPolicy,
      policyIdForEdit,
      isStoredPolicyLoading,
      showOpenSchemaActionText,
      onOpenSchemaSidebar,
      renderLiveQueryWarning,
      backendValidators,
      isTeamObserver,
      isUpdatingPolicy,
      isFetchingAutofillDescription,
      isFetchingAutofillResolution,
      onClickAutofillDescription,
      onClickAutofillResolution,
      resetAiAutofillData: () => setPolicyAutofillData(null)
    }
  ));
};
/* harmony default export */ var screens_QueryEditor = (QueryEditor);

// EXTERNAL MODULE: ./frontend/services/entities/policies.ts
var policies = __webpack_require__(10664);
// EXTERNAL MODULE: ./frontend/services/entities/status.ts
var entities_status = __webpack_require__(68612);
;// ./frontend/pages/policies/edit/EditPolicyPage.tsx

var EditPolicyPage_defProp = Object.defineProperty;
var EditPolicyPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditPolicyPage_hasOwnProp = Object.prototype.hasOwnProperty;
var EditPolicyPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditPolicyPage_defNormalProp = (obj, key, value) => key in obj ? EditPolicyPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditPolicyPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditPolicyPage_hasOwnProp.call(b, prop))
      EditPolicyPage_defNormalProp(a, prop, b[prop]);
  if (EditPolicyPage_getOwnPropSymbols)
    for (var prop of EditPolicyPage_getOwnPropSymbols(b)) {
      if (EditPolicyPage_propIsEnum.call(b, prop))
        EditPolicyPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};























const EditPolicyPage_baseClass = "edit-policy-page";
const PolicyPage = ({
  router,
  params: { id: paramsPolicyId },
  location
}) => {
  var _a, _b;
  const policyId = paramsPolicyId ? parseInt(paramsPolicyId, 10) : null;
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const {
    isOnGlobalTeam,
    isGlobalAdmin,
    isGlobalMaintainer,
    isAnyTeamMaintainerOrTeamAdmin,
    config
  } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    lastEditedQueryBody,
    policyTeamId,
    selectedOsqueryTable,
    setSelectedOsqueryTable,
    setLastEditedQueryId,
    setLastEditedQueryName,
    setLastEditedQueryDescription,
    setLastEditedQueryBody,
    setLastEditedQueryResolution,
    setLastEditedQueryCritical,
    setLastEditedQueryHidden,
    setLastEditedQueryPlatform,
    setLastEditedQueryLabelsIncludeAny,
    setLastEditedQueryLabelsIncludeAll,
    setLastEditedQueryLabelsExcludeAny,
    setLastEditedQueryLabelsExcludeAll,
    setPolicyTeamId
  } = (0,react.useContext)(policy/* PolicyContext */.q);
  const {
    isRouteOk,
    isTeamAdmin,
    isTeamMaintainer,
    isTeamObserver,
    teamIdForApi,
    isObserverPlus
  } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true,
    permittedAccessByTeamRole: {
      admin: true,
      maintainer: true,
      observer: true,
      observer_plus: true,
      technician: true
    }
  });
  (0,react.useEffect)(() => {
    if (!isRouteOk) {
      return;
    }
    if (policyTeamId !== teamIdForApi) {
      setPolicyTeamId(
        teamIdForApi === team/* API_ALL_TEAMS_ID */.s_ ? team/* APP_CONTEXT_ALL_TEAMS_ID */.jc : teamIdForApi
      );
    }
  }, [isRouteOk, teamIdForApi, policyTeamId, setPolicyTeamId]);
  (0,react.useEffect)(() => {
    if (lastEditedQueryBody === "") {
      setLastEditedQueryBody(constants/* DEFAULT_POLICY */.zj.query);
    }
  }, []);
  (0,react.useEffect)(() => {
    return () => {
      setLastEditedQueryCritical(false);
      setLastEditedQueryHidden(false);
      setLastEditedQueryPlatform(null);
    };
  }, []);
  const [isLiveQueryRunnable, setIsLiveQueryRunnable] = (0,react.useState)(true);
  const [isSidebarOpen, setIsSidebarOpen] = (0,react.useState)(true);
  const [showOpenSchemaActionText, setShowOpenSchemaActionText] = (0,react.useState)(
    false
  );
  const {
    isLoading: isStoredPolicyLoading,
    data: storedPolicy,
    error: storedPolicyError
  } = (0,es.useQuery)(
    ["policy", policyId, teamIdForApi],
    () => policies/* default */.A.load(policyId),
    {
      enabled: isRouteOk && !!policyId,
      refetchOnWindowFocus: false,
      retry: false,
      select: (data) => data.policy,
      onSuccess: (returnedQuery) => {
        var _a2, _b2;
        const deNulledReturnedQueryTeamId = (_a2 = returnedQuery.team_id) != null ? _a2 : void 0;
        setLastEditedQueryId(returnedQuery.id);
        setLastEditedQueryName(returnedQuery.name);
        setLastEditedQueryDescription(returnedQuery.description);
        setLastEditedQueryBody(returnedQuery.query);
        setLastEditedQueryResolution(returnedQuery.resolution);
        setLastEditedQueryCritical(returnedQuery.critical);
        setLastEditedQueryHidden((_b2 = returnedQuery.hidden) != null ? _b2 : false);
        setLastEditedQueryPlatform(returnedQuery.platform);
        setLastEditedQueryLabelsIncludeAny(
          returnedQuery.labels_include_any || []
        );
        setLastEditedQueryLabelsIncludeAll(
          returnedQuery.labels_include_all || []
        );
        setLastEditedQueryLabelsExcludeAny(
          returnedQuery.labels_exclude_any || []
        );
        setLastEditedQueryLabelsExcludeAll(
          returnedQuery.labels_exclude_all || []
        );
        setPolicyTeamId(
          deNulledReturnedQueryTeamId === team/* API_ALL_TEAMS_ID */.s_ ? team/* APP_CONTEXT_ALL_TEAMS_ID */.jc : deNulledReturnedQueryTeamId
        );
      },
      onError: (error) => handlePageError(error)
    }
  );
  if (!isOnGlobalTeam && !isStoredPolicyLoading && (storedPolicy == null ? void 0 : storedPolicy.team_id) !== void 0 && (storedPolicy == null ? void 0 : storedPolicy.team_id) !== null && !(((_a = storedPolicy == null ? void 0 : storedPolicy.team_id) == null ? void 0 : _a.toString()) === location.query.fleet_id)) {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(location.pathname, {
        fleet_id: (_b = storedPolicy == null ? void 0 : storedPolicy.team_id) == null ? void 0 : _b.toString()
      })
    );
  }
  const { mutateAsync: createPolicy } = (0,es.useMutation)(
    (formData) => {
      return formData.team_id !== void 0 ? team_policies/* default */.A.create(formData) : global_policies/* default */.A.create(formData);
    }
  );
  const detectIsFleetQueryRunnable = () => {
    entities_status/* default */.A.live_query().catch(() => {
      setIsLiveQueryRunnable(false);
    });
  };
  (0,react.useEffect)(() => {
    detectIsFleetQueryRunnable();
  }, []);
  (0,react.useEffect)(() => {
    if (storedPolicy == null ? void 0 : storedPolicy.name) {
      document.title = `${storedPolicy.name} | Policies | ${utilities_constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    } else {
      document.title = `Policies | ${utilities_constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    }
  }, [location.pathname, storedPolicy == null ? void 0 : storedPolicy.name]);
  (0,react.useEffect)(() => {
    setShowOpenSchemaActionText(!isSidebarOpen);
  }, [isSidebarOpen]);
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
  const renderScreen = () => {
    const queryEditorOpts = {
      router,
      baseClass: EditPolicyPage_baseClass,
      policyIdForEdit: policyId,
      showOpenSchemaActionText,
      storedPolicy,
      isStoredPolicyLoading,
      isTeamAdmin,
      isTeamMaintainer,
      isTeamObserver,
      isObserverPlus,
      storedPolicyError,
      createPolicy,
      onOsqueryTableSelect,
      goToSelectTargets: () => router.push(
        (0,url/* getPathWithQueryParams */.M8)(paths/* default */.A.LIVE_POLICY(policyId), {
          fleet_id: teamIdForApi
        })
      ),
      onOpenSchemaSidebar,
      renderLiveQueryWarning,
      teamIdForApi
    };
    return /* @__PURE__ */ react.createElement(screens_QueryEditor, EditPolicyPage_spreadValues({}, queryEditorOpts));
  };
  const showSidebar = isSidebarOpen && (isGlobalAdmin || isGlobalMaintainer || isAnyTeamMaintainerOrTeamAdmin);
  if (!isRouteOk) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  return /* @__PURE__ */ react.createElement(SidePanelPage/* default */.A, null, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: EditPolicyPage_baseClass }, renderScreen()), showSidebar && /* @__PURE__ */ react.createElement(SidePanelContent/* default */.A, null, /* @__PURE__ */ react.createElement(
    QuerySidePanel/* default */.A,
    {
      onOsqueryTableSelect,
      selectedOsqueryTable,
      onClose: onCloseSchemaSidebar
    }
  ))));
};
/* harmony default export */ var EditPolicyPage = (PolicyPage);

;// ./frontend/pages/policies/edit/index.ts




/***/ }),

/***/ 41820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IQ: function() { return /* binding */ generateSoftwareOptionHelpText; },
/* harmony export */   LM: function() { return /* binding */ getTicketOrWebhookInfo; },
/* harmony export */   NH: function() { return /* binding */ getTicketOrWebhookLabel; },
/* harmony export */   Or: function() { return /* binding */ findFirstAddedPackage; },
/* harmony export */   ic: function() { return /* binding */ generateSoftwarePackageOptionHelpText; }
/* harmony export */ });
/* harmony import */ var interfaces_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43015);
/* harmony import */ var interfaces_software__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56906);
/* harmony import */ var utilities_date_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30178);
/* harmony import */ var utilities_file_fileUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9106);
/* harmony import */ var utilities_strings_stringUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18165);






const getTicketOrWebhookInfo = (automationsConfig) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (!automationsConfig) return { state: "disabled", policyIds: [] };
  const webhookEnabled = (_c = (_b = (_a = automationsConfig.webhook_settings) == null ? void 0 : _a.failing_policies_webhook) == null ? void 0 : _b.enable_failing_policies_webhook) != null ? _c : false;
  const integrations = automationsConfig.integrations;
  const ticketEnabled = !!((_d = integrations == null ? void 0 : integrations.jira) == null ? void 0 : _d.some((j) => j.enable_failing_policies)) || !!((_e = integrations == null ? void 0 : integrations.zendesk) == null ? void 0 : _e.some((z) => z.enable_failing_policies));
  let state = "disabled";
  if (webhookEnabled) state = "webhook";
  else if (ticketEnabled) state = "ticket";
  const policyIds = state === "disabled" ? [] : (_h = (_g = (_f = automationsConfig.webhook_settings) == null ? void 0 : _f.failing_policies_webhook) == null ? void 0 : _g.policy_ids) != null ? _h : [];
  return { state, policyIds };
};
const getTicketOrWebhookLabel = (state) => {
  if (state === "webhook") return "Send webhook";
  if (state === "ticket") return "Create ticket";
  return "Send webhook or create ticket";
};
const generateSoftwareOptionHelpText = (title) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const isVppApp = title.source === "apps" && !!title.app_store_app;
  if (isVppApp) {
    const version = ((_a = title.app_store_app) == null ? void 0 : _a.version) ? ` \u2022 ${title.app_store_app.version}` : "";
    return `macOS (App Store)${version}`;
  }
  const platform = interfaces_software__WEBPACK_IMPORTED_MODULE_1__/* .INSTALLABLE_SOURCE_PLATFORM_CONVERSION */ .VP[title.source] || null;
  const extension = (0,utilities_file_fileUtils__WEBPACK_IMPORTED_MODULE_3__/* .getExtensionFromFileName */ .bv)(
    (_c = (_b = title.software_package) == null ? void 0 : _b.name) != null ? _c : ""
  );
  const platformString = platform && extension ? `${interfaces_platform__WEBPACK_IMPORTED_MODULE_0__/* .PLATFORM_DISPLAY_NAMES */ .uc[platform]} (.${extension})` : "";
  const packageCount = (_e = (_d = title.packages) == null ? void 0 : _d.length) != null ? _e : 0;
  const versionOrCount = packageCount > 1 ? `${packageCount} ${(0,utilities_strings_stringUtils__WEBPACK_IMPORTED_MODULE_4__/* .pluralize */ .td)(packageCount, "version")}` : (_g = (_f = title.software_package) == null ? void 0 : _f.version) != null ? _g : "";
  const separator = platformString && versionOrCount ? " \u2022 " : "";
  return `${platformString}${separator}${versionOrCount}`;
};
const generateSoftwarePackageOptionHelpText = (pkg) => {
  var _a;
  const separator = pkg.version && pkg.uploaded_at ? " \u2022 " : "";
  const added = pkg.uploaded_at ? (0,utilities_date_format__WEBPACK_IMPORTED_MODULE_2__/* .addedFromNow */ .PI)(pkg.uploaded_at) : "";
  return `${(_a = pkg.version) != null ? _a : ""}${separator}${added}`;
};
const findFirstAddedPackage = (packages) => {
  if (!packages || packages.length === 0) return null;
  return packages.reduce(
    (first, pkg) => pkg.installer_id < first.installer_id ? pkg : first
  );
};


/***/ }),

/***/ 83844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: function() { return /* reexport */ hooks_usePolicyLabelTargets; },
  p: function() { return /* reexport */ hooks_useUpdatePolicyAutomations; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./frontend/context/app.tsx
var app = __webpack_require__(68774);
// EXTERNAL MODULE: ./frontend/services/entities/config.ts
var config = __webpack_require__(98544);
// EXTERNAL MODULE: ./frontend/services/entities/team_policies.ts
var team_policies = __webpack_require__(80396);
// EXTERNAL MODULE: ./frontend/services/entities/teams.ts
var teams = __webpack_require__(19677);
;// ./frontend/pages/policies/hooks/useUpdatePolicyAutomations.ts

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






const useUpdatePolicyAutomations = ({
  policy,
  teamIdForApi,
  isGlobalPolicy,
  automationsConfig,
  onSuccess,
  onError
}) => {
  const queryClient = (0,es.useQueryClient)();
  const { setConfig } = (0,react.useContext)(app/* AppContext */.BR);
  if (!isGlobalPolicy && teamIdForApi === void 0) {
    throw new Error("Missing fleet id for team-scoped policy automations.");
  }
  const saveWebhookOrTicketMembership = (policyId, enabled) => __async(null, null, function* () {
    var _a, _b, _c;
    const existingWebhook = (_b = (_a = automationsConfig == null ? void 0 : automationsConfig.webhook_settings) == null ? void 0 : _a.failing_policies_webhook) != null ? _b : {};
    const currentIds = (_c = existingWebhook.policy_ids) != null ? _c : [];
    const nextIds = enabled ? Array.from(/* @__PURE__ */ new Set([...currentIds, policyId])) : currentIds.filter((id) => id !== policyId);
    const payload = {
      webhook_settings: {
        failing_policies_webhook: __spreadProps(__spreadValues({}, existingWebhook), { policy_ids: nextIds })
      }
    };
    if (isGlobalPolicy) {
      const updatedConfig = yield config/* default */.A.update(payload);
      queryClient.setQueryData(["config"], updatedConfig);
      setConfig(updatedConfig);
    } else {
      const updatedTeam = yield teams/* default */.A.update(payload, teamIdForApi);
      queryClient.setQueryData(["teams", teamIdForApi], updatedTeam);
    }
  });
  return (0,es.useMutation)(
    ({ policyUpdate, webhookOrTicketUpdate }) => {
      if (!policy) {
        return Promise.reject(
          new Error("Cannot update automations without a policy.")
        );
      }
      const { id: policyId } = policy;
      const requests = [];
      if (policyUpdate) {
        requests.push(
          team_policies/* default */.A.update(policyId, __spreadValues({
            team_id: teamIdForApi
          }, policyUpdate))
        );
      }
      if (webhookOrTicketUpdate) {
        requests.push(
          saveWebhookOrTicketMembership(policyId, webhookOrTicketUpdate.enabled)
        );
      }
      return Promise.all(requests);
    },
    {
      onSuccess,
      onError: (err) => {
        if (isGlobalPolicy) {
          queryClient.invalidateQueries(["config"]);
        } else {
          queryClient.invalidateQueries(["teams", teamIdForApi]);
        }
        onError == null ? void 0 : onError(err);
      }
    }
  );
};
/* harmony default export */ var hooks_useUpdatePolicyAutomations = (useUpdatePolicyAutomations);

// EXTERNAL MODULE: ./frontend/services/entities/labels.ts
var entities_labels = __webpack_require__(97873);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
;// ./frontend/pages/policies/hooks/usePolicyLabelTargets.tsx

var usePolicyLabelTargets_defProp = Object.defineProperty;
var usePolicyLabelTargets_defProps = Object.defineProperties;
var usePolicyLabelTargets_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var usePolicyLabelTargets_getOwnPropSymbols = Object.getOwnPropertySymbols;
var usePolicyLabelTargets_hasOwnProp = Object.prototype.hasOwnProperty;
var usePolicyLabelTargets_propIsEnum = Object.prototype.propertyIsEnumerable;
var usePolicyLabelTargets_defNormalProp = (obj, key, value) => key in obj ? usePolicyLabelTargets_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var usePolicyLabelTargets_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (usePolicyLabelTargets_hasOwnProp.call(b, prop))
      usePolicyLabelTargets_defNormalProp(a, prop, b[prop]);
  if (usePolicyLabelTargets_getOwnPropSymbols)
    for (var prop of usePolicyLabelTargets_getOwnPropSymbols(b)) {
      if (usePolicyLabelTargets_propIsEnum.call(b, prop))
        usePolicyLabelTargets_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var usePolicyLabelTargets_spreadProps = (a, b) => usePolicyLabelTargets_defProps(a, usePolicyLabelTargets_getOwnPropDescs(b));





const labelsToSelection = (labels) => labels.reduce((acc, label) => {
  acc[label.name] = true;
  return acc;
}, {});
const buildPolicyLabelsPayload = ({
  targetType,
  includeMode,
  includeLabels,
  excludeMode,
  excludeLabels
}) => {
  const include = targetType === "Custom" ? (0,entities_labels/* listNamesFromSelectedLabels */.XX)(includeLabels) : [];
  const exclude = targetType === "Custom" ? (0,entities_labels/* listNamesFromSelectedLabels */.XX)(excludeLabels) : [];
  return {
    labels_include_any: includeMode === "any" ? include : [],
    labels_include_all: includeMode === "all" ? include : [],
    labels_exclude_any: excludeMode === "any" ? exclude : [],
    labels_exclude_all: excludeMode === "all" ? exclude : []
  };
};
const derivePolicyTargetState = ({
  includeAny = [],
  includeAll = [],
  excludeAny = [],
  excludeAll = []
}) => {
  const hasAnyScope = !!(includeAny.length || includeAll.length || excludeAny.length || excludeAll.length);
  const includeMode = includeAll.length ? "all" : "any";
  const excludeMode = excludeAll.length ? "all" : "any";
  return {
    targetType: hasAnyScope ? "Custom" : "All hosts",
    includeMode,
    includeLabels: labelsToSelection(
      includeMode === "all" ? includeAll : includeAny
    ),
    excludeMode,
    excludeLabels: labelsToSelection(
      excludeMode === "all" ? excludeAll : excludeAny
    )
  };
};
const usePolicyLabelTargets = ({
  includeAny,
  includeAll,
  excludeAny,
  excludeAll
} = {}) => {
  const { isPremiumTier, currentTeam } = (0,react.useContext)(app/* AppContext */.BR);
  const [selectedTargetType, setSelectedTargetType] = (0,react.useState)(
    "All hosts"
  );
  const [includeMode, setIncludeMode] = (0,react.useState)("any");
  const [excludeMode, setExcludeMode] = (0,react.useState)("any");
  const [includeLabels, setIncludeLabels] = (0,react.useState)({});
  const [excludeLabels, setExcludeLabels] = (0,react.useState)({});
  const {
    data: labels = [],
    isLoading: isLoadingLabels,
    isError: isErrorLabels
  } = (0,es.useQuery)(
    ["custom_labels", currentTeam],
    () => entities_labels/* default */.Ay.summary(currentTeam == null ? void 0 : currentTeam.id, true),
    usePolicyLabelTargets_spreadProps(usePolicyLabelTargets_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: isPremiumTier && !!currentTeam,
      staleTime: 1e4,
      select: (res) => (0,entities_labels/* getCustomLabels */.f2)(res.labels)
    })
  );
  (0,react.useEffect)(() => {
    const seed = derivePolicyTargetState({
      includeAny,
      includeAll,
      excludeAny,
      excludeAll
    });
    setSelectedTargetType(seed.targetType);
    setIncludeMode(seed.includeMode);
    setIncludeLabels(seed.includeLabels);
    setExcludeMode(seed.excludeMode);
    setExcludeLabels(seed.excludeLabels);
  }, [includeAny, includeAll, excludeAny, excludeAll]);
  const includeConfig = {
    selectedLabels: includeLabels,
    onSelectLabel: ({ name, value }) => setIncludeLabels((prev) => usePolicyLabelTargets_spreadProps(usePolicyLabelTargets_spreadValues({}, prev), { [name]: value })),
    showModeToggle: true,
    mode: includeMode,
    onSelectMode: setIncludeMode,
    anyTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Will only target hosts that have", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "any")), " ", "of these labels."),
    allTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Will only target hosts that have", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "all")), " ", "of these labels.")
  };
  const excludeConfig = {
    selectedLabels: excludeLabels,
    onSelectLabel: ({ name, value }) => setExcludeLabels((prev) => usePolicyLabelTargets_spreadProps(usePolicyLabelTargets_spreadValues({}, prev), { [name]: value })),
    showModeToggle: true,
    mode: excludeMode,
    onSelectMode: setExcludeMode,
    anyTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Will not target hosts that have", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "any")), " ", "of these labels."),
    allTooltip: /* @__PURE__ */ react.createElement(react.Fragment, null, "Will not target hosts that have", " ", /* @__PURE__ */ react.createElement("em", null, /* @__PURE__ */ react.createElement("b", null, "all")), " ", "of these labels.")
  };
  const hasCustomLabels = (0,entities_labels/* listNamesFromSelectedLabels */.XX)(includeLabels).length > 0 || (0,entities_labels/* listNamesFromSelectedLabels */.XX)(excludeLabels).length > 0;
  const getLabelsPayload = (0,react.useCallback)(
    () => buildPolicyLabelsPayload({
      targetType: selectedTargetType,
      includeMode,
      includeLabels,
      excludeMode,
      excludeLabels
    }),
    [selectedTargetType, includeMode, includeLabels, excludeMode, excludeLabels]
  );
  return {
    selectorProps: {
      selectedTargetType,
      onSelectTargetType: setSelectedTargetType,
      labels,
      isLoadingLabels,
      isErrorLabels,
      includeConfig,
      excludeConfig
    },
    selectedTargetType,
    hasCustomLabels,
    getLabelsPayload
  };
};
/* harmony default export */ var hooks_usePolicyLabelTargets = (usePolicyLabelTargets);

;// ./frontend/pages/policies/hooks/index.ts





/***/ }),

/***/ 20424:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ LivePolicyPage_LivePolicyPage; }
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
// EXTERNAL MODULE: ./frontend/context/policy.tsx
var policy = __webpack_require__(59593);
// EXTERNAL MODULE: ./frontend/hooks/useTeamIdParam.ts
var useTeamIdParam = __webpack_require__(38944);
// EXTERNAL MODULE: ./node_modules/sockjs-client/lib/entry.js
var entry = __webpack_require__(10162);
var entry_default = /*#__PURE__*/__webpack_require__.n(entry);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/file-saver/FileSaver.js
var FileSaver = __webpack_require__(91936);
var FileSaver_default = /*#__PURE__*/__webpack_require__.n(FileSaver);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
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
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/utilities/generate_csv/index.ts + 1 modules
var generate_csv = __webpack_require__(37706);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/TextCell/TextCell.tsx
var TextCell = __webpack_require__(3728);
// EXTERNAL MODULE: ./frontend/utilities/sort/index.ts + 1 modules
var sort = __webpack_require__(81302);
;// ./frontend/pages/policies/edit/components/PolicyErrorsTable/PolicyErrorsTableConfig.tsx





const generateTableHeaders = () => {
  const tableHeaders = [
    {
      title: "Host",
      Header: "Host",
      disableSortBy: true,
      accessor: "host_display_name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Osquery version",
      Header: "Osquery version",
      disableSortBy: true,
      accessor: "osquery_version",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    },
    {
      title: "Error",
      Header: "Error",
      disableSortBy: true,
      accessor: "error",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value })
    }
  ];
  return tableHeaders;
};
const generateDataSet = (0,lodash.memoize)(
  (policyHostsErrorsList = []) => {
    policyHostsErrorsList = policyHostsErrorsList.sort(
      (a, b) => sort/* default */.A.caseInsensitiveAsc(a.host_display_name, b.host_display_name)
    );
    return policyHostsErrorsList;
  }
);


;// ./frontend/pages/policies/edit/components/PolicyErrorsTable/PolicyErrorsTable.tsx






const baseClass = "policy-results-table";
const PolicyErrorsTable = ({
  errorsList,
  isLoading,
  resultsTitle
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      resultsTitle: resultsTitle || "policies",
      columnConfigs: generateTableHeaders(),
      data: generateDataSet(errorsList),
      isLoading,
      defaultSortHeader: "name",
      defaultSortDirection: "asc",
      manualSortBy: true,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disablePagination: true,
      primarySelectAction: {
        name: "delete policy",
        buttonText: "Delete",
        iconSvg: "trash",
        variant: "secondary"
      },
      emptyComponent: () => /* @__PURE__ */ react.createElement(EmptyState/* default */.A, { header: "No hosts are online" }),
      onQueryChange: lodash.noop,
      disableCount: true
    }
  ));
};
/* harmony default export */ var PolicyErrorsTable_PolicyErrorsTable = (PolicyErrorsTable);

// EXTERNAL MODULE: ./frontend/components/StatusIndicatorWithIcon/index.ts
var StatusIndicatorWithIcon = __webpack_require__(59555);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
;// ./frontend/pages/policies/edit/components/PolicyResultsTable/PolicyResultsTableConfig.tsx







const PolicyResultsTableConfig_generateTableHeaders = () => {
  const tableHeaders = [
    {
      title: "Host",
      Header: (headerProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: headerProps.column.title || headerProps.column.id,
          isSortedDesc: headerProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      accessor: "display_name",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(TextCell/* default */.A, { value: cellProps.cell.value }),
      sortType: "caseInsensitive"
    },
    {
      title: "Status",
      Header: (headerProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: headerProps.column.title || headerProps.column.id,
          isSortedDesc: headerProps.column.isSortedDesc
        }
      ),
      disableSortBy: false,
      sortType: "hasLength",
      accessor: "query_results",
      Cell: (cellProps) => cellProps.cell.value.length ? /* @__PURE__ */ react.createElement(StatusIndicatorWithIcon/* default */.A, { status: "success", value: "Pass" }) : /* @__PURE__ */ react.createElement(StatusIndicatorWithIcon/* default */.A, { status: "error", value: "Fail" })
    }
  ];
  return tableHeaders;
};
const PolicyResultsTableConfig_generateDataSet = (0,lodash.memoize)(
  (policyHostsList = []) => {
    policyHostsList = policyHostsList.sort(
      (a, b) => sort/* default */.A.caseInsensitiveAsc(a.display_name, b.display_name)
    );
    return policyHostsList;
  }
);


;// ./frontend/pages/policies/edit/components/PolicyResultsTable/PolicyResultsTable.tsx






const PolicyResultsTable_baseClass = "policy-results-table";
const PolicyResultsTable = ({
  hostResponses,
  isLoading,
  resultsTitle
}) => {
  return /* @__PURE__ */ react.createElement("div", { className: PolicyResultsTable_baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      resultsTitle: resultsTitle || "policies",
      columnConfigs: PolicyResultsTableConfig_generateTableHeaders(),
      data: PolicyResultsTableConfig_generateDataSet(hostResponses),
      isLoading,
      defaultSortHeader: "query_results",
      defaultSortDirection: "asc",
      showMarkAllPages: false,
      isAllPagesSelected: false,
      isClientSidePagination: true,
      primarySelectAction: {
        name: "delete policy",
        buttonText: "Delete",
        iconSvg: "trash",
        variant: "secondary"
      },
      emptyComponent: () => /* @__PURE__ */ react.createElement(EmptyState/* default */.A, { header: "No hosts are online" }),
      onQueryChange: lodash.noop,
      disableCount: true
    }
  ));
};
/* harmony default export */ var PolicyResultsTable_PolicyResultsTable = (PolicyResultsTable);

;// ./frontend/pages/policies/edit/components/PolicyResults/helpers.tsx

const getYesNoCounts = (hostResponses) => {
  const yesNoCounts = hostResponses.reduce(
    (acc, hostResponse) => {
      var _a;
      if ((_a = hostResponse.query_results) == null ? void 0 : _a.length) {
        acc.yes += 1;
      } else {
        acc.no += 1;
      }
      return acc;
    },
    { yes: 0, no: 0 }
  );
  return yesNoCounts;
};
/* harmony default export */ var helpers = ({ getYesNoCounts });

;// ./frontend/pages/policies/edit/components/PolicyResults/PolicyResults.tsx



















const PolicyResults_baseClass = "query-results";
const CSV_TITLE = "New Policy";
const NAV_TITLES = {
  RESULTS: "Results",
  ERRORS: "Errors"
};
const PolicyResults = ({
  campaign,
  isQueryFinished,
  policyName,
  onRunQuery,
  onStopQuery,
  setSelectedTargets,
  goToQueryEditor,
  targetsTotalCount
}) => {
  const { lastEditedQueryBody } = (0,react.useContext)(policy/* PolicyContext */.q);
  const { hosts: hostResponses, uiHostCounts, serverHostCounts, errors } = campaign || {};
  const [navTabIndex, setNavTabIndex] = (0,react.useState)(0);
  const [showQueryModal, setShowQueryModal] = (0,react.useState)(false);
  const onExportResults = (evt) => {
    evt.preventDefault();
    if (hostResponses) {
      const hostsExport = hostResponses.map((host) => {
        return {
          host: host.display_name,
          status: host.query_results && host.query_results.length ? "yes" : "no"
        };
      });
      FileSaver_default().saveAs(
        (0,generate_csv/* generateCSVPolicyResults */.yP)(
          hostsExport,
          (0,generate_csv/* generateCSVFilename */.$e)(`${policyName || CSV_TITLE} - Results`)
        )
      );
    }
  };
  const onExportErrorsResults = (evt) => {
    evt.preventDefault();
    if (errors) {
      FileSaver_default().saveAs(
        (0,generate_csv/* generateCSVPolicyErrors */.$U)(
          errors,
          (0,generate_csv/* generateCSVFilename */.$e)(`${policyName || CSV_TITLE} - Errors`)
        )
      );
    }
  };
  const onShowQueryModal = () => {
    setShowQueryModal(!showQueryModal);
  };
  const onQueryDone = () => {
    setSelectedTargets([]);
    goToQueryEditor();
  };
  const renderTableButtons = (tableType) => {
    return /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass}__results-cta` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${PolicyResults_baseClass}__show-query-btn`,
        onClick: onShowQueryModal,
        variant: "secondary",
        icon: "eye",
        iconPosition: "right"
      },
      "Show query"
    ), /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${PolicyResults_baseClass}__export-btn`,
        onClick: tableType === "errors" ? onExportErrorsResults : onExportResults,
        variant: "secondary",
        icon: "download",
        iconPosition: "right"
      },
      "Export ",
      tableType
    ));
  };
  const renderPassFailPcts = () => {
    const { yes: yesCt, no: noCt } = getYesNoCounts(hostResponses);
    return /* @__PURE__ */ react.createElement("span", { className: `${PolicyResults_baseClass}__results-pass-fail-pct` }, " ", "(Yes:", " ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: `${yesCt} host${yesCt !== 1 ? "s" : ""}` }, Math.round(yesCt / uiHostCounts.successful * 100), "%"), ", No:", " ", /* @__PURE__ */ react.createElement(TooltipWrapper/* default */.A, { tipContent: `${noCt} host${noCt !== 1 ? "s" : ""}` }, Math.round(noCt / uiHostCounts.successful * 100), "%"), ")");
  };
  const renderResultsTable = () => {
    const emptyResults = !hostResponses || !hostResponses.length || !uiHostCounts.successful;
    const hasNoResultsYet = !isQueryFinished && emptyResults;
    const finishedWithNoResults = isQueryFinished && (!uiHostCounts.successful || emptyResults);
    if (hasNoResultsYet) {
      return /* @__PURE__ */ react.createElement(AwaitingResults/* default */.A, null);
    }
    if (finishedWithNoResults) {
      const hostVerb = targetsTotalCount === 1 ? "host is" : "hosts are";
      const errorsMessage = (errors == null ? void 0 : errors.length) ? /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "or review the ", /* @__PURE__ */ react.createElement("strong", null, "Errors"), " tab for details") : null;
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No results returned",
          info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Check whether the ", hostVerb, " online", errorsMessage, ".")
        }
      );
    }
    return /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass}__results-table-container` }, /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, null, "Hosts that responded with results are marked ", /* @__PURE__ */ react.createElement("strong", null, "Pass"), ". Hosts that responded with no results are marked ", /* @__PURE__ */ react.createElement("strong", null, "Fail"), "."), /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass}__results-table-header` }, /* @__PURE__ */ react.createElement("span", { className: `${PolicyResults_baseClass}__results-meta` }, /* @__PURE__ */ react.createElement("span", { className: `${PolicyResults_baseClass}__results-count` }, uiHostCounts.successful, " result", uiHostCounts.successful !== 1 && "s"), isQueryFinished && renderPassFailPcts()), /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass}__results-cta` }, renderTableButtons("results"))), /* @__PURE__ */ react.createElement(
      PolicyResultsTable_PolicyResultsTable,
      {
        isLoading: false,
        hostResponses,
        resultsTitle: "hosts"
      }
    ));
  };
  const renderErrorsTable = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass}__error-table-container` }, /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass}__errors-table-header` }, errors && /* @__PURE__ */ react.createElement("span", { className: `${PolicyResults_baseClass}__error-count` }, errors.length, " error", errors.length !== 1 && "s"), /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass}__errors-cta` }, renderTableButtons("errors"))), /* @__PURE__ */ react.createElement(
      PolicyErrorsTable_PolicyErrorsTable,
      {
        isLoading: false,
        errorsList: errors,
        resultsTitle: "errors"
      }
    ));
  };
  const firstTabClass = classnames_default()("react-tabs__tab", "no-count", {
    "errors-empty": !errors || (errors == null ? void 0 : errors.length) === 0
  });
  return (
    // `notranslate`: Chrome's auto-translate wraps text nodes in <font> elements,
    // detaching nodes React holds refs to. As live results stream in and cells
    // unmount, React's removeChild throws NotFoundError and error-boundaries the
    // page (#48277). Excluding this streaming subtree from translation avoids it.
    /* @__PURE__ */ react.createElement("div", { className: `${PolicyResults_baseClass} notranslate` }, /* @__PURE__ */ react.createElement(
      LiveResultsHeading/* default */.A,
      {
        numHostsTargeted: targetsTotalCount,
        numHostsResponded: uiHostCounts.total,
        numHostsRespondedResults: serverHostCounts.countOfHostsWithResults,
        numHostsRespondedNoErrorsAndNoResults: serverHostCounts.countOfHostsWithNoResults,
        numHostsRespondedErrors: uiHostCounts.failed,
        isFinished: isQueryFinished,
        onClickClose: onQueryDone,
        onClickRunAgain: onRunQuery,
        onClickStop: onStopQuery,
        resultsType: "policy"
      }
    ), /* @__PURE__ */ react.createElement(TabNav/* default */.A, null, /* @__PURE__ */ react.createElement(esm/* Tabs */.tU, { selectedIndex: navTabIndex, onSelect: (i) => setNavTabIndex(i) }, /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { className: firstTabClass }, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, NAV_TITLES.RESULTS)), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, { disabled: !(errors == null ? void 0 : errors.length) }, /* @__PURE__ */ react.createElement(TabText/* default */.A, { count: errors == null ? void 0 : errors.length, countVariant: "alert" }, NAV_TITLES.ERRORS))), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderResultsTable()), /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, renderErrorsTable()))), showQueryModal && /* @__PURE__ */ react.createElement(
      ShowQueryModal/* default */.A,
      {
        query: lastEditedQueryBody,
        onCancel: onShowQueryModal
      }
    ))
  );
};
/* harmony default export */ var PolicyResults_PolicyResults = (PolicyResults);

;// ./frontend/pages/policies/edit/components/PolicyResults/index.ts



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
var utilities_helpers = __webpack_require__(9467);
;// ./frontend/pages/policies/live/screens/RunQuery.tsx

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











const RunQuery = ({
  storedPolicy,
  selectedTargets,
  setSelectedTargets,
  goToQueryEditor,
  targetsTotalCount
}) => {
  const [isQueryFinished, setIsQueryFinished] = (0,react.useState)(false);
  const [campaignState, setCampaignState] = (0,react.useState)(
    constants/* DEFAULT_CAMPAIGN_STATE */.LY
  );
  const { lastEditedQueryBody } = (0,react.useContext)(policy/* PolicyContext */.q);
  const ws = (0,react.useRef)(null);
  const runQueryInterval = (0,react.useRef)(null);
  const globalSocket = (0,react.useRef)(null);
  const previousSocketData = (0,react.useRef)(null);
  const removeSocket = () => {
    if (globalSocket.current) {
      globalSocket.current.close();
      globalSocket.current = null;
      previousSocketData.current = null;
    }
  };
  const setupDistributedQuery = (socket) => {
    globalSocket.current = socket;
    const update = () => {
      setCampaignState((prevCampaignState) => __spreadProps(__spreadValues({}, prevCampaignState), {
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
    setCampaignState((prevCampaignState) => __spreadProps(__spreadValues({}, prevCampaignState), {
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
      setCampaignState((prevCampaignState) => __spreadProps(__spreadValues({}, prevCampaignState), {
        campaign: __spreadProps(__spreadValues({}, prevCampaignState.campaign), { returnedCampaign }),
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
      if (data === previousSocketData.current) {
        return;
      }
      previousSocketData.current = data;
      const socketData = JSON.parse(data);
      setCampaignState((prevCampaignState) => {
        return __spreadValues(__spreadValues({}, prevCampaignState), campaign_helpers/* default.updateCampaignState */.A.updateCampaignState(socketData)(prevCampaignState));
      });
      if (socketData.type === "status" && socketData.data.status === "finished") {
        return teardownDistributedQuery();
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
    const selected = (0,utilities_helpers/* formatSelectedTargetsForApi */.yp)(selectedTargets);
    setIsQueryFinished(false);
    removeSocket();
    destroyCampaign();
    try {
      const queryId = null;
      const returnedCampaign = yield queries/* default */.A.run({
        query: lastEditedQueryBody,
        queryId,
        selected
      });
      connectAndRunLiveQuery(returnedCampaign);
    } catch (campaignError) {
      if (campaignError === "resource already created") {
        ToastNotification/* notify */.me.error(
          "A campaign with the provided query text has already been created",
          { response: campaignError }
        );
      }
      if (typeof campaignError === "object" && campaignError !== null && "message" in campaignError) {
        const { message } = campaignError;
        if (message === "forbidden") {
          ToastNotification/* notify */.me.error(
            "It seems you do not have the rights to run this report. If you believe this is an error, please contact your administrator.",
            { response: campaignError }
          );
        } else {
          ToastNotification/* notify */.me.error("Something has gone wrong. Please try again.", {
            response: campaignError
          });
        }
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
    PolicyResults_PolicyResults,
    {
      campaign,
      isQueryFinished,
      onRunQuery,
      onStopQuery,
      setSelectedTargets,
      goToQueryEditor,
      policyName: storedPolicy == null ? void 0 : storedPolicy.name,
      targetsTotalCount
    }
  );
};
/* harmony default export */ var screens_RunQuery = (RunQuery);

// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/hosts.ts
var hosts = __webpack_require__(42235);
// EXTERNAL MODULE: ./frontend/services/entities/policies.ts
var policies = __webpack_require__(10664);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
;// ./frontend/pages/policies/live/LivePolicyPage/LivePolicyPage.tsx

var LivePolicyPage_defProp = Object.defineProperty;
var LivePolicyPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var LivePolicyPage_hasOwnProp = Object.prototype.hasOwnProperty;
var LivePolicyPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var LivePolicyPage_defNormalProp = (obj, key, value) => key in obj ? LivePolicyPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var LivePolicyPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (LivePolicyPage_hasOwnProp.call(b, prop))
      LivePolicyPage_defNormalProp(a, prop, b[prop]);
  if (LivePolicyPage_getOwnPropSymbols)
    for (var prop of LivePolicyPage_getOwnPropSymbols(b)) {
      if (LivePolicyPage_propIsEnum.call(b, prop))
        LivePolicyPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};














const LivePolicyPage_baseClass = "live-policy-page";
const LivePolicyPage = ({
  router,
  params: { id: paramsPolicyId },
  location
}) => {
  const policyId = paramsPolicyId ? parseInt(paramsPolicyId, 10) : null;
  const handlePageError = (0,react_error_boundary_umd.useErrorHandler)();
  const { currentTeamId } = (0,useTeamIdParam/* default */.Ay)({
    location,
    router,
    includeAllTeams: true,
    includeNoTeam: true
  });
  const { config } = (0,react.useContext)(app/* AppContext */.BR);
  const {
    setLastEditedQueryId,
    setLastEditedQueryName,
    setLastEditedQueryDescription,
    setLastEditedQueryBody,
    setLastEditedQueryResolution,
    setLastEditedQueryCritical,
    setLastEditedQueryPlatform,
    setLastEditedQueryLabelsIncludeAny,
    setLastEditedQueryLabelsIncludeAll,
    setLastEditedQueryLabelsExcludeAny
  } = (0,react.useContext)(policy/* PolicyContext */.q);
  const [queryParamHostsAdded, setQueryParamHostsAdded] = (0,react.useState)(false);
  const [step, setStep] = (0,react.useState)(constants/* LIVE_QUERY_STEPS */.oV[1]);
  const [selectedTargets, setSelectedTargets] = (0,react.useState)([]);
  const [targetedHosts, setTargetedHosts] = (0,react.useState)([]);
  const [targetedLabels, setTargetedLabels] = (0,react.useState)([]);
  const [targetedTeams, setTargetedTeams] = (0,react.useState)([]);
  const [targetsTotalCount, setTargetsTotalCount] = (0,react.useState)(0);
  const disabledLiveQuery = config == null ? void 0 : config.server_settings.live_query_disabled;
  const teamIdForApi = currentTeamId === -1 ? void 0 : currentTeamId;
  (0,react.useEffect)(() => {
    if (disabledLiveQuery) {
      const path = policyId ? paths/* default */.A.POLICY_DETAILS(policyId) : paths/* default */.A.MANAGE_POLICIES;
      router.push((0,url/* getPathWithQueryParams */.M8)(path, { fleet_id: teamIdForApi }));
    }
  }, [disabledLiveQuery, policyId, router, teamIdForApi]);
  const { data: storedPolicy } = (0,es.useQuery)(
    ["policy", policyId, teamIdForApi],
    () => policies/* default */.A.load(policyId),
    {
      enabled: !!policyId,
      refetchOnWindowFocus: false,
      select: (data) => data.policy,
      onSuccess: (returnedPolicy) => {
        setLastEditedQueryId(returnedPolicy.id);
        setLastEditedQueryName(returnedPolicy.name);
        setLastEditedQueryDescription(returnedPolicy.description);
        setLastEditedQueryBody(returnedPolicy.query);
        setLastEditedQueryResolution(returnedPolicy.resolution);
        setLastEditedQueryCritical(returnedPolicy.critical);
        setLastEditedQueryPlatform(returnedPolicy.platform);
        setLastEditedQueryLabelsIncludeAny(
          returnedPolicy.labels_include_any || []
        );
        setLastEditedQueryLabelsIncludeAll(
          returnedPolicy.labels_include_all || []
        );
        setLastEditedQueryLabelsExcludeAny(
          returnedPolicy.labels_exclude_any || []
        );
      },
      onError: (error) => handlePageError(error)
    }
  );
  const hostIdFromURL = location.query.host_ids ? parseInt(location.query.host_ids, 10) : null;
  (0,es.useQuery)(
    ["hostFromURL", hostIdFromURL, teamIdForApi],
    () => hosts/* default */.A.loadHostDetails(hostIdFromURL),
    {
      enabled: !!hostIdFromURL && !queryParamHostsAdded,
      select: (data) => data.host,
      onSuccess: (host) => {
        setTargetedHosts(
          (prevHosts) => prevHosts.filter((h) => h.id !== host.id).concat(host)
        );
        const targets = selectedTargets;
        host.target_type = "hosts";
        targets.push(host);
        setSelectedTargets([...targets]);
        if (!queryParamHostsAdded) {
          setQueryParamHostsAdded(true);
        }
        router.replace(location.pathname);
      }
    }
  );
  (0,react.useEffect)(() => {
    if (storedPolicy == null ? void 0 : storedPolicy.name) {
      document.title = `Run ${storedPolicy.name} | Policies | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    } else {
      document.title = `Policies | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
    }
  }, [location.pathname, storedPolicy == null ? void 0 : storedPolicy.name]);
  const goToQueryEditor = (0,react.useCallback)(() => {
    const path = policyId ? paths/* default */.A.EDIT_POLICY(policyId) : paths/* default */.A.NEW_POLICY;
    router.push((0,url/* getPathWithQueryParams */.M8)(path, { fleet_id: teamIdForApi }));
  }, [policyId, router, teamIdForApi]);
  const renderScreen = () => {
    const step1Props = {
      baseClass: LivePolicyPage_baseClass,
      selectedTargets,
      targetedHosts,
      targetedLabels,
      targetedTeams,
      targetsTotalCount,
      goToQueryEditor,
      goToRunQuery: () => setStep(constants/* LIVE_QUERY_STEPS */.oV[2]),
      setSelectedTargets,
      setTargetedHosts,
      setTargetedLabels,
      setTargetedTeams,
      setTargetsTotalCount,
      isLivePolicy: true
    };
    const step2Props = {
      selectedTargets,
      storedPolicy,
      setSelectedTargets,
      goToQueryEditor,
      targetsTotalCount
    };
    switch (step) {
      case constants/* LIVE_QUERY_STEPS */.oV[2]:
        return /* @__PURE__ */ react.createElement(screens_RunQuery, LivePolicyPage_spreadValues({}, step2Props));
      default:
        return /* @__PURE__ */ react.createElement(SelectTargets/* default */.A, LivePolicyPage_spreadValues({}, step1Props));
    }
  };
  return /* @__PURE__ */ react.createElement(MainContent/* default */.A, { className: LivePolicyPage_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${LivePolicyPage_baseClass}_wrapper` }, renderScreen()));
};
/* harmony default export */ var LivePolicyPage_LivePolicyPage = (LivePolicyPage);

;// ./frontend/pages/policies/live/LivePolicyPage/index.ts




/***/ })

}]);