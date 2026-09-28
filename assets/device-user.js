"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[607],{

/***/ 70414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ DeviceUserPage_DeviceUserPage; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(53806);
// EXTERNAL MODULE: ./frontend/components/CustomLink/index.ts
var CustomLink = __webpack_require__(24432);
// EXTERNAL MODULE: ./frontend/components/DeviceUserError/index.ts + 1 modules
var DeviceUserError = __webpack_require__(66789);
// EXTERNAL MODULE: ./frontend/components/icons/OrgLogoIcon/index.js + 1 modules
var OrgLogoIcon = __webpack_require__(20794);
// EXTERNAL MODULE: ./frontend/components/Spinner/index.ts
var Spinner = __webpack_require__(45584);
// EXTERNAL MODULE: ./frontend/components/TabNav/index.ts + 1 modules
var TabNav = __webpack_require__(15570);
// EXTERNAL MODULE: ./frontend/components/TabText/index.ts + 1 modules
var TabText = __webpack_require__(37738);
// EXTERNAL MODULE: ./frontend/components/ToastNotification/index.ts + 3 modules
var ToastNotification = __webpack_require__(46157);
;// ./frontend/hooks/useIsMobileWidth.tsx


const MOBILE_BREAKPOINT = 768;
const useIsMobileWidth = () => {
  const [isMobileWidth, setIsMobileWidth] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const updateMatch = (e) => setIsMobileWidth(e.matches);
    if (query.addEventListener) {
      query.addEventListener("change", updateMatch);
    } else {
      query.addListener(updateMatch);
    }
    setIsMobileWidth(query.matches);
    return () => {
      if (query.removeEventListener) {
        query.removeEventListener("change", updateMatch);
      } else {
        query.removeListener(updateMatch);
      }
    };
  }, []);
  return isMobileWidth;
};
/* harmony default export */ var hooks_useIsMobileWidth = (useIsMobileWidth);

// EXTERNAL MODULE: ./frontend/interfaces/certificates.ts
var certificates = __webpack_require__(18348);
// EXTERNAL MODULE: ./frontend/interfaces/errors.ts
var errors = __webpack_require__(12755);
// EXTERNAL MODULE: ./frontend/interfaces/mdm.ts
var mdm = __webpack_require__(42550);
// EXTERNAL MODULE: ./frontend/interfaces/platform.ts
var platform = __webpack_require__(43015);
// EXTERNAL MODULE: ./frontend/layouts/UnsupportedScreenSize/index.ts + 2 modules
var UnsupportedScreenSize = __webpack_require__(23169);
// EXTERNAL MODULE: ./frontend/layouts/UnsupportedScreenSize/helpers.ts
var helpers = __webpack_require__(78685);
// EXTERNAL MODULE: ./frontend/router/paths.ts
var paths = __webpack_require__(78263);
// EXTERNAL MODULE: ./frontend/services/entities/device_user.ts
var device_user = __webpack_require__(17092);
// EXTERNAL MODULE: ./frontend/services/entities/disk_encryption.ts
var disk_encryption = __webpack_require__(77155);
// EXTERNAL MODULE: ./frontend/utilities/constants.tsx
var constants = __webpack_require__(89937);
// EXTERNAL MODULE: ./frontend/utilities/helpers.tsx + 7 modules
var utilities_helpers = __webpack_require__(9467);
// EXTERNAL MODULE: ./frontend/utilities/theme.ts
var theme = __webpack_require__(24995);
// EXTERNAL MODULE: ./frontend/utilities/url/index.ts
var url = __webpack_require__(12968);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Certificates/index.ts + 4 modules
var Certificates = __webpack_require__(68037);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Controls/index.ts + 3 modules
var Controls = __webpack_require__(11569);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Controls/helpers.ts
var Controls_helpers = __webpack_require__(42819);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Controls/OSSettingsTableConfig.tsx + 4 modules
var OSSettingsTableConfig = __webpack_require__(2281);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/HostHeader/HostHeader.tsx + 1 modules
var HostHeader = __webpack_require__(28418);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/HostSummary/index.ts + 2 modules
var HostSummary = __webpack_require__(85851);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Policies/index.ts + 4 modules
var Policies = __webpack_require__(43239);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Policies/HostPoliciesTable/PolicyDetailsModal/index.ts + 2 modules
var PolicyDetailsModal = __webpack_require__(98513);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/index.ts
var Software = __webpack_require__(71525);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/HostSoftware.tsx + 7 modules
var HostSoftware = __webpack_require__(7933);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareInstallDetailsModal/index.ts
var SoftwareInstallDetailsModal = __webpack_require__(65914);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareIpaInstallDetailsModal/index.ts
var SoftwareIpaInstallDetailsModal = __webpack_require__(7986);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareScriptDetailsModal/index.ts
var SoftwareScriptDetailsModal = __webpack_require__(96378);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/SoftwareUninstallDetailsModal/SoftwareUninstallDetailsModal.tsx
var SoftwareUninstallDetailsModal = __webpack_require__(76903);
// EXTERNAL MODULE: ./frontend/components/ActivityDetails/InstallDetails/VppInstallDetailsModal/VppInstallDetailsModal.tsx
var VppInstallDetailsModal = __webpack_require__(21729);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/helpers.tsx
var SoftwarePage_helpers = __webpack_require__(30104);
// EXTERNAL MODULE: ./frontend/utilities/file/fileUtils.tsx
var fileUtils = __webpack_require__(9106);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/HostSoftwareLibrary/helpers.tsx
var HostSoftwareLibrary_helpers = __webpack_require__(8281);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/helpers.tsx
var Software_helpers = __webpack_require__(37296);
// EXTERNAL MODULE: ./frontend/components/buttons/Button/index.ts
var Button = __webpack_require__(74953);
// EXTERNAL MODULE: ./frontend/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(99958);
// EXTERNAL MODULE: ./frontend/components/ModalFooter/index.ts + 1 modules
var ModalFooter = __webpack_require__(48262);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/OpenSoftwareModal/OpenSoftwareModal.tsx





const baseClass = "software-instructions-modal";
const getOpenSoftwareInstructions = (softwareName, softwareSource) => {
  if (softwareSource === "apps")
    return /* @__PURE__ */ react.createElement("p", null, "Find ", /* @__PURE__ */ react.createElement("b", null, softwareName), " in ", /* @__PURE__ */ react.createElement("b", null, "Finder > Applications"), " and double-click it, or search ", /* @__PURE__ */ react.createElement("b", null, softwareName), " in ", /* @__PURE__ */ react.createElement("b", null, "Spotlight"), ".");
  else if (softwareSource === "programs") {
    return /* @__PURE__ */ react.createElement("p", null, "Find ", /* @__PURE__ */ react.createElement("b", null, softwareName), " in ", /* @__PURE__ */ react.createElement("b", null, "Start Menu"), " and click it, or search for it using the taskbar search box.");
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null);
};
const OpenSoftwareModal = ({
  softwareName,
  softwareSource,
  onExit
}) => {
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { className: baseClass, title: "How to open", onExit }, getOpenSoftwareInstructions(softwareName, softwareSource), /* @__PURE__ */ react.createElement(ModalFooter/* default */.A, { primaryButtons: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit }, "Close") }));
};
/* harmony default export */ var OpenSoftwareModal_OpenSoftwareModal = (OpenSoftwareModal);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/OpenSoftwareModal/index.ts



// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/HeaderCell/HeaderCell.tsx
var HeaderCell = __webpack_require__(72828);
// EXTERNAL MODULE: ./frontend/components/TableContainer/DataTable/SoftwareNameCell/index.ts
var SoftwareNameCell = __webpack_require__(81790);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/tables/VersionCell/index.ts + 1 modules
var VersionCell = __webpack_require__(33745);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/HostSoftwareLibrary/HostInstallerActionCell/HostInstallerActionCell.tsx
var HostInstallerActionCell = __webpack_require__(22719);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/InstallStatusCell/InstallStatusCell.tsx
var InstallStatusCell = __webpack_require__(28174);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceTable/SelfServiceTableConfig.tsx









const SelfServiceTableConfig_baseClass = "self-service-table";
const generateSoftwareTableData = (software) => {
  return software;
};
const generateSoftwareTableHeaders = ({
  onShowUpdateDetails,
  onShowInstallDetails,
  onShowIpaInstallDetails,
  onShowScriptDetails,
  onShowVPPInstallDetails,
  onShowUninstallDetails,
  onClickInstallAction,
  onClickUninstallAction,
  onClickOpenInstructionsAction
}) => {
  const tableHeaders = [
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(HeaderCell/* default */.A, { value: "Name", isSortedDesc: cellProps.column.isSortedDesc }),
      id: "name",
      // Client-side sort: the key must be the string the cell renders.
      accessor: (originalRow) => (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(originalRow.name, originalRow.display_name),
      disableSortBy: false,
      disableGlobalFilter: false,
      Cell: (cellProps) => {
        const { name, display_name, source, icon_url } = cellProps.row.original;
        return /* @__PURE__ */ react.createElement(
          SoftwareNameCell/* default */.A,
          {
            name,
            display_name,
            source,
            iconUrl: icon_url,
            pageContext: "deviceUser",
            isSelfService: true
          }
        );
      },
      sortType: "caseInsensitive"
    },
    {
      Header: (cellProps) => /* @__PURE__ */ react.createElement(
        HeaderCell/* default */.A,
        {
          value: "Install status",
          isSortedDesc: cellProps.column.isSortedDesc
        }
      ),
      sortType: Software_helpers/* installStatusSortType */.o0,
      disableSortBy: false,
      disableGlobalFilter: true,
      accessor: "ui_status",
      Cell: (cellProps) => /* @__PURE__ */ react.createElement(
        InstallStatusCell/* default */.Ay,
        {
          software: cellProps.row.original,
          onShowUpdateDetails,
          onShowInstallDetails,
          onShowIpaInstallDetails,
          onShowScriptDetails,
          onShowVPPInstallDetails,
          onShowUninstallDetails,
          isSelfService: true
        }
      )
    },
    {
      Header: "Installed version",
      id: "version",
      disableSortBy: true,
      // we use function as accessor because we have two columns that
      // need to access the same data. This is not supported with a string
      // accessor.
      accessor: (originalRow) => originalRow.installed_versions,
      Cell: VersionCell/* VersionsColumnCell */.M
    },
    {
      Header: "Available version",
      id: "available_version",
      disableSortBy: true,
      accessor: (originalRow) => originalRow.software_package || originalRow.app_store_app,
      Cell: (cellProps) => {
        var _a;
        const softwareTitle = cellProps.row.original;
        const installerData = (_a = softwareTitle.software_package) != null ? _a : softwareTitle.app_store_app;
        return /* @__PURE__ */ react.createElement(
          VersionCell/* default */.A,
          {
            versions: [{ version: (installerData == null ? void 0 : installerData.version) || "" }],
            source: cellProps.row.original.source
          }
        );
      }
    },
    {
      Header: "Actions",
      accessor: "status",
      disableSortBy: true,
      Cell: (cellProps) => {
        return /* @__PURE__ */ react.createElement(
          HostInstallerActionCell/* default */.Ay,
          {
            software: cellProps.row.original,
            baseClass: SelfServiceTableConfig_baseClass,
            onClickInstallAction,
            onClickUninstallAction: () => onClickUninstallAction(cellProps.row.original),
            onClickOpenInstructionsAction: () => onClickOpenInstructionsAction(cellProps.row.original),
            isMyDevicePage: true
          }
        );
      }
    }
  ];
  return tableHeaders;
};
/* harmony default export */ var SelfServiceTableConfig = ({ generateSoftwareTableHeaders, generateSoftwareTableData });

// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/SelfService/components/SoftwareUpdateModal/index.ts + 1 modules
var SoftwareUpdateModal = __webpack_require__(70116);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/UninstallSoftwareModal/UninstallSoftwareModal.tsx

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





const UninstallSoftwareModal_baseClass = "uninstall-software-modal";
const UninstallSoftwareModal = ({
  softwareId,
  softwareName,
  token,
  onExit,
  onSuccess
}) => {
  const [isUninstalling, setIsUninstalling] = (0,react.useState)(false);
  const onUninstallSoftware = (0,react.useCallback)(() => __async(null, null, function* () {
    setIsUninstalling(true);
    try {
      yield device_user/* default */.A.uninstallSelfServiceSoftware(token, softwareId);
      onSuccess();
    } catch (error) {
      ToastNotification/* notify */.me.error("Couldn't uninstall. Please try again.", {
        response: error
      });
    }
    setIsUninstalling(false);
    onExit();
  }), [softwareId, onSuccess, onExit]);
  const displaySoftwareName = softwareName || "software";
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: UninstallSoftwareModal_baseClass,
      title: `Uninstall ${displaySoftwareName}`,
      onExit,
      isContentDisabled: isUninstalling
    },
    /* @__PURE__ */ react.createElement("p", null, "Uninstalling this software will remove it and may remove ", softwareName, " ", "data from your device. You can always reinstall it again later."),
    /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "alert",
        onClick: onUninstallSoftware,
        isLoading: isUninstalling
      },
      "Uninstall"
    ), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit }, "Cancel"))
  );
};
/* harmony default export */ var UninstallSoftwareModal_UninstallSoftwareModal = (UninstallSoftwareModal);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/UninstallSoftwareModal/index.ts



// EXTERNAL MODULE: ./frontend/components/Card/index.ts + 1 modules
var Card = __webpack_require__(81766);
// EXTERNAL MODULE: ./frontend/components/CardHeader/index.ts + 1 modules
var CardHeader = __webpack_require__(60678);
// EXTERNAL MODULE: ./frontend/components/Pagination/index.ts + 1 modules
var Pagination = __webpack_require__(4891);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
// EXTERNAL MODULE: ./frontend/components/TooltipTruncatedText/index.ts + 1 modules
var TooltipTruncatedText = __webpack_require__(25809);
// EXTERNAL MODULE: ./frontend/components/TooltipWrapper/index.tsx
var TooltipWrapper = __webpack_require__(52603);
// EXTERNAL MODULE: ./frontend/pages/SoftwarePage/components/icons/SoftwareIcon/index.ts + 1 modules
var SoftwareIcon = __webpack_require__(69906);
// EXTERNAL MODULE: ./frontend/utilities/date_format/index.ts + 4 modules
var date_format = __webpack_require__(30178);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/UpdatesCard/UpdateSoftwareItem/UpdateSoftwareItem.tsx













const UpdateSoftwareItem_baseClass = "update-software-item";
const STATUS_CONFIG = {
  installed: {
    iconName: "success",
    displayText: "Installed",
    tooltip: ({ lastInstalledAt }) => `Software is installed (${(0,date_format/* dateAgo */.gY)(lastInstalledAt)}).`
  },
  pending_install: {
    iconName: "pending-outline",
    displayText: "Installing...",
    tooltip: () => "Fleet is installing software."
  },
  failed_install: {
    iconName: "error",
    displayText: "Failed",
    tooltip: ({ lastInstalledAt = "" }) => /* @__PURE__ */ react.createElement(react.Fragment, null, "Software failed to install", lastInstalledAt ? ` (${(0,date_format/* dateAgo */.gY)(lastInstalledAt)})` : "", ". Select", " ", /* @__PURE__ */ react.createElement("b", null, "Retry"), " to install again, or contact your IT department.")
  }
};
const InstallerInfo = ({ software }) => {
  const {
    name,
    display_name,
    source,
    icon_url: iconUrl,
    software_package: installerPackage,
    app_store_app: vppApp
  } = software;
  return /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-topline` }, /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-icon` }, /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { url: iconUrl, name, source, size: "large" })), /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-name-version` }, /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-name` }, /* @__PURE__ */ react.createElement(
    TooltipTruncatedText/* default */.A,
    {
      value: (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(name, display_name) || (installerPackage == null ? void 0 : installerPackage.name)
    }
  )), /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-version` }, (installerPackage == null ? void 0 : installerPackage.version) || (vppApp == null ? void 0 : vppApp.version) || "")));
};
const InstallerStatus = ({
  status,
  last_install,
  onShowInstallerDetails
}) => {
  const displayConfig = STATUS_CONFIG[status];
  if (!displayConfig) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__status-content` }, /* @__PURE__ */ react.createElement(
    TooltipWrapper/* default */.A,
    {
      tipContent: displayConfig.tooltip({
        lastInstalledAt: last_install == null ? void 0 : last_install.installed_at
      }),
      underline: false,
      showArrow: true,
      position: "top",
      tipOffset: 8
    },
    /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__status-with-tooltip` }, displayConfig.iconName === "pending-outline" && /* @__PURE__ */ react.createElement(Spinner/* default */.A, { size: "x-small", centered: false, delay: 0 }), last_install && displayConfig.displayText === "Failed" && /* @__PURE__ */ react.createElement("span", { "data-testid": `${UpdateSoftwareItem_baseClass}__status--test` }, /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        className: `${UpdateSoftwareItem_baseClass}__item-status-button`,
        variant: "subdued",
        onClick: () => {
          onShowInstallerDetails();
        },
        size: "small",
        icon: displayConfig.iconName || "install"
      },
      displayConfig.displayText
    )))
  ));
};
const InstallerStatusAction = ({
  software: { status, software_package, app_store_app, ui_status },
  onInstall,
  onShowInstallerDetails
}) => {
  var _a, _b;
  const lastInstall = (_b = (_a = software_package == null ? void 0 : software_package.last_install) != null ? _a : app_store_app == null ? void 0 : app_store_app.last_install) != null ? _b : null;
  const isMountedRef = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const showFailedInstallStatus = status === "failed_install";
  const renderPrimaryStatusAction = () => {
    if (ui_status === "updating") {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Spinner/* default */.A, { size: "x-small", centered: false, delay: 0 }), " Updating...", " ");
    }
    if (ui_status === "recently_updated") {
      return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "success" }), /* @__PURE__ */ react.createElement(
        TooltipWrapper/* default */.A,
        {
          tipContent: (0,InstallStatusCell/* RECENT_SUCCESS_ACTION_MESSAGE */.JO)("updated"),
          showArrow: true,
          underline: false,
          position: "top"
        },
        "Updated"
      ));
    }
    return /* @__PURE__ */ react.createElement(
      HostInstallerActionCell/* HostInstallerActionButton */.l5,
      {
        baseClass: UpdateSoftwareItem_baseClass,
        disabled: false,
        onClick: onInstall,
        text: "Update",
        icon: "refresh",
        testId: `${UpdateSoftwareItem_baseClass}__install-button--test`
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-action-status` }, /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-action` }, renderPrimaryStatusAction()), showFailedInstallStatus && /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-status` }, /* @__PURE__ */ react.createElement(
    InstallerStatus,
    {
      status,
      last_install: lastInstall,
      onShowInstallerDetails
    }
  )));
};
const UpdateSoftwareItem = ({
  software,
  onClickUpdateAction,
  onShowInstallerDetails
}) => {
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "medium", className: `${UpdateSoftwareItem_baseClass}__item` }, /* @__PURE__ */ react.createElement("div", { className: `${UpdateSoftwareItem_baseClass}__item-content` }, /* @__PURE__ */ react.createElement(InstallerInfo, { software }), /* @__PURE__ */ react.createElement(
    InstallerStatusAction,
    {
      software,
      onInstall: () => onClickUpdateAction(software.id),
      onShowInstallerDetails
    }
  )));
};
/* harmony default export */ var UpdateSoftwareItem_UpdateSoftwareItem = (UpdateSoftwareItem);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/UpdatesCard/UpdateSoftwareItem/index.ts



;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/UpdatesCard/UpdatesCard.tsx









const getUpdatesPageSize = (width) => {
  if (width >= 1400) return 4;
  if (width >= 880) return 3;
  return 2;
};
const UpdatesCard_baseClass = "updates-card";
const UpdatesCard = ({
  enhancedSoftware,
  isLoading,
  isError,
  onClickUpdateAll,
  onClickUpdateAction,
  onClickFailedUpdateStatus
}) => {
  const [updatesPage, setUpdatesPage] = (0,react.useState)(0);
  const [updatesPageSize, setUpdatesPageSize] = (0,react.useState)(
    () => getUpdatesPageSize(window.innerWidth)
  );
  const updateSoftware = enhancedSoftware.filter(
    (software) => software.ui_status === "updating" || software.ui_status === "recently_updated" || software.ui_status === "pending_update" || // Should never show as self-service = host online
    software.ui_status === "update_available" || software.ui_status === "failed_install_update_available" || software.ui_status === "failed_uninstall_update_available"
  );
  (0,react.useEffect)(() => {
    const handleResize = () => {
      const newPageSize = getUpdatesPageSize(window.innerWidth);
      setUpdatesPageSize(() => {
        const newTotalPages = Math.ceil(updateSoftware.length / newPageSize);
        setUpdatesPage((prevPage) => {
          return Math.min(prevPage, Math.max(0, newTotalPages - 1));
        });
        return newPageSize;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateSoftware.length]);
  const paginatedUpdates = (0,react.useMemo)(() => {
    const start = updatesPage * updatesPageSize;
    return updateSoftware.slice(start, start + updatesPageSize);
  }, [updateSoftware, updatesPage, updatesPageSize]);
  const totalUpdatesPages = Math.ceil(updateSoftware.length / updatesPageSize);
  const onNextUpdatesPage = () => {
    setUpdatesPage((prev) => Math.min(prev + 1, totalUpdatesPages - 1));
  };
  const onPreviousUpdatesPage = () => {
    setUpdatesPage((prev) => Math.max(prev - 1, 0));
  };
  const disableUpdateAllButton = (0,react.useMemo)(() => {
    return updateSoftware.length > 0 && updateSoftware.every(
      (software) => software.ui_status === "updating" || software.ui_status === "recently_updated"
    );
  }, [updateSoftware]);
  if (paginatedUpdates.length === 0) {
    return null;
  }
  const renderUpdatesContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
    }
    if (isError) {
      return /* @__PURE__ */ react.createElement(DeviceUserError/* default */.A, null);
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${UpdatesCard_baseClass}__items` }, paginatedUpdates.map((s) => /* @__PURE__ */ react.createElement(
      UpdateSoftwareItem_UpdateSoftwareItem,
      {
        key: s.id,
        software: s,
        onClickUpdateAction,
        onShowInstallerDetails: () => onClickFailedUpdateStatus(s)
      }
    ))), /* @__PURE__ */ react.createElement(
      Pagination/* default */.A,
      {
        disableNext: updatesPage >= totalUpdatesPages - 1,
        disablePrev: updatesPage === 0,
        hidePagination: updatesPage >= totalUpdatesPages - 1 && updatesPage === 0,
        onNextPage: onNextUpdatesPage,
        onPrevPage: onPreviousUpdatesPage,
        className: `${UpdatesCard_baseClass}__pagination`
      }
    ));
  };
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: UpdatesCard_baseClass, paddingSize: "xlarge" }, /* @__PURE__ */ react.createElement("div", { className: `${UpdatesCard_baseClass}__header` }, /* @__PURE__ */ react.createElement(
    CardHeader/* default */.A,
    {
      header: "Updates",
      subheader: /* @__PURE__ */ react.createElement(react.Fragment, null, "Your device has outdated software. Update to address potential security vulnerabilities or compatibility issues.")
    }
  ), /* @__PURE__ */ react.createElement(Button/* default */.A, { disabled: disableUpdateAllButton, onClick: onClickUpdateAll }, "Update all")), renderUpdatesContent());
};
/* harmony default export */ var UpdatesCard_UpdatesCard = (UpdatesCard);

// EXTERNAL MODULE: ./frontend/components/EmptyState/index.ts + 1 modules
var EmptyState = __webpack_require__(2367);
// EXTERNAL MODULE: ./frontend/services/entities/self_service_categories.ts
var self_service_categories = __webpack_require__(23543);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/InstallAllInCategoryButton/InstallAllInCategoryModal.tsx




const InstallAllInCategoryModal_baseClass = "install-all-in-category-modal";
const InstallAllInCategoryModal = ({
  count,
  isSubmitting,
  onConfirm,
  onExit
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      className: InstallAllInCategoryModal_baseClass,
      title: "Install all",
      onExit,
      isContentDisabled: isSubmitting
    },
    /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, count, " new app", count === 1 ? "" : "s", " will be installed. Apps already installed won't be re-installed."), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onConfirm, isLoading: isSubmitting }, "Install all"), /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "secondary", onClick: onExit, disabled: isSubmitting }, "Cancel")))
  );
};
/* harmony default export */ var InstallAllInCategoryButton_InstallAllInCategoryModal = (InstallAllInCategoryModal);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/InstallAllInCategoryButton/InstallAllInCategoryButton.tsx

var InstallAllInCategoryButton_async = (__this, __arguments, generator) => {
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






const InstallAllInCategoryButton_baseClass = "install-all-in-category-button";
const InstallAllInCategoryButton = ({
  uninstalledCount,
  hasInProgressInCategory,
  deviceToken,
  categoryId,
  query,
  onSuccess
}) => {
  const [showModal, setShowModal] = (0,react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const handleConfirm = (0,react.useCallback)(() => InstallAllInCategoryButton_async(null, null, function* () {
    setIsSubmitting(true);
    try {
      yield device_user/* default */.A.installAllSelfServiceSoftwareInCategory(
        deviceToken,
        categoryId,
        query
      );
      setShowModal(false);
      onSuccess();
    } catch (error) {
      ToastNotification/* notify */.me.error("Couldn't install. Please try again.", { response: error });
    } finally {
      setIsSubmitting(false);
    }
  }), [deviceToken, categoryId, query, onSuccess]);
  if (uninstalledCount === 0 && !hasInProgressInCategory) {
    return null;
  }
  const isDisabled = uninstalledCount === 0;
  const label = uninstalledCount === 0 ? "Install all" : `Install all (${uninstalledCount})`;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: InstallAllInCategoryButton_baseClass,
      variant: "secondary",
      onClick: () => setShowModal(true),
      disabled: isDisabled
    },
    /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "install", color: "ui-fleet-black-75" }),
    label
  ), showModal && /* @__PURE__ */ react.createElement(
    InstallAllInCategoryButton_InstallAllInCategoryModal,
    {
      count: uninstalledCount,
      isSubmitting,
      onConfirm: handleConfirm,
      onExit: () => setShowModal(false)
    }
  ));
};
/* harmony default export */ var InstallAllInCategoryButton_InstallAllInCategoryButton = (InstallAllInCategoryButton);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/InstallAllInCategoryButton/index.ts



// EXTERNAL MODULE: ./frontend/components/forms/fields/SearchField/index.ts + 1 modules
var SearchField = __webpack_require__(90710);
// EXTERNAL MODULE: ./node_modules/react-select-5/dist/index-a7690a33.esm.js + 2 modules
var index_a7690a33_esm = __webpack_require__(92308);
// EXTERNAL MODULE: ./node_modules/react-select-5/dist/react-select.esm.js + 7 modules
var react_select_esm = __webpack_require__(81607);
// EXTERNAL MODULE: ./frontend/styles/var/colors.ts
var colors = __webpack_require__(42008);
// EXTERNAL MODULE: ./frontend/styles/var/padding.ts
var padding = __webpack_require__(2095);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/CategoryFilter/CategoryFilter.tsx

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






const CategoryFilter_baseClass = "self-service-category-filter";
const ALL_CATEGORIES_VALUE = -1;
const NAV_KEYS = /* @__PURE__ */ new Set(["ArrowDown", "ArrowUp", "Enter", "Escape"]);
const CustomMenuList = (props) => {
  const { selectProps } = props;
  const { searchQuery, onChangeSearchQuery, forwardNavKey } = selectProps;
  const inputRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const handleInputClick = (event) => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
    event.stopPropagation();
  };
  const handleKeyDown = (event) => {
    if (NAV_KEYS.has(event.key)) {
      event.preventDefault();
      forwardNavKey == null ? void 0 : forwardNavKey(event);
      return;
    }
    event.stopPropagation();
  };
  return /* @__PURE__ */ react.createElement(
    index_a7690a33_esm.c.MenuList,
    __spreadProps(__spreadValues({}, props), {
      innerProps: __spreadProps(__spreadValues({}, props.innerProps), {
        onMouseDown: (event) => event.stopPropagation()
      })
    }),
    /* @__PURE__ */ react.createElement("div", { className: `${CategoryFilter_baseClass}__search-field` }, /* @__PURE__ */ react.createElement(
      "input",
      {
        className: `${CategoryFilter_baseClass}__search-input`,
        ref: inputRef,
        value: searchQuery,
        name: "category-search-input",
        type: "text",
        placeholder: "Search categories",
        onKeyDown: handleKeyDown,
        onChange: onChangeSearchQuery,
        onClick: handleInputClick,
        onMouseDown: (event) => event.stopPropagation()
      }
    ), /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "search" })),
    /* @__PURE__ */ react.createElement("div", { className: `${CategoryFilter_baseClass}__options-spacer` }),
    props.children
  );
};
const CategoryFilter = ({
  categories,
  selectedCategoryId,
  onChange,
  isDisabled
}) => {
  var _a, _b;
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [menuIsOpen, setMenuIsOpen] = (0,react.useState)(false);
  const selectRef = (0,react.useRef)(null);
  const wrapperRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (menuIsOpen && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuIsOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuIsOpen]);
  const allOptions = (0,react.useMemo)(
    () => [
      { label: "All", value: ALL_CATEGORIES_VALUE },
      ...categories.map((category) => ({
        label: category.name,
        value: category.id
      }))
    ],
    [categories]
  );
  const options = (0,react.useMemo)(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query === "") return allOptions;
    return allOptions.filter(
      (option) => option.label.toLowerCase().includes(query)
    );
  }, [allOptions, searchQuery]);
  const selectedValue = selectedCategoryId !== void 0 ? selectedCategoryId : ALL_CATEGORIES_VALUE;
  const onChangeSearchQuery = (event) => {
    event.stopPropagation();
    setSearchQuery(event.target.value);
  };
  const toggleMenu = () => {
    setMenuIsOpen((open) => !open);
  };
  const forwardNavKey = (event) => {
    var _a2;
    const input = (_a2 = selectRef.current) == null ? void 0 : _a2.inputRef;
    if (!input) return;
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: event.key,
        code: event.code,
        bubbles: true,
        cancelable: true
      })
    );
  };
  const selectedLabel = (_b = (_a = allOptions.find((o) => o.value === selectedValue)) == null ? void 0 : _a.label) != null ? _b : "All";
  const customStyles = {
    // Hide react-select's own control (which contains the input) behind the
    // visible Button, but keep it in the DOM so its input can receive focus
    // and react-select's keyDown handler fires for ArrowUp/Down/Enter.
    control: () => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: 1,
      height: 1,
      overflow: "hidden",
      opacity: 0,
      pointerEvents: "none"
    }),
    menu: (baseStyles) => __spreadProps(__spreadValues({}, baseStyles), {
      backgroundColor: colors/* COLORS */.l["core-fleet-white"],
      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px ${colors/* COLORS */.l["ui-fleet-black-10"]}`,
      borderRadius: "4px",
      zIndex: 6,
      overflow: "hidden",
      border: 0,
      // Clears the trigger Button's :focus-visible outline (1px ring with
      // 1px offset = 2px beyond the button) so the menu sits flush against
      // the outline rather than overlapping it.
      marginTop: padding/* PADDING */.K["pad-xsmall"],
      width: "340px",
      maxHeight: "none",
      position: "absolute",
      left: "0",
      animation: "fade-in 150ms ease-out"
    }),
    menuList: (baseStyles) => __spreadProps(__spreadValues({}, baseStyles), {
      maxHeight: 360,
      // top padding is handled by the search field's own padding-top so that
      // options scrolling up are hidden by the sticky search field's background
      paddingBottom: padding/* PADDING */.K["pad-small"],
      paddingLeft: padding/* PADDING */.K["pad-small"],
      paddingRight: padding/* PADDING */.K["pad-small"],
      paddingTop: 0
    }),
    noOptionsMessage: (baseStyles) => __spreadProps(__spreadValues({}, baseStyles), {
      // Match an option's vertical padding + font-size so the menu height
      // doesn't jump between options and the no-match message. Drop the
      // horizontal padding so the message stays on one line.
      padding: "10px 0",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      color: colors/* COLORS */.l["ui-fleet-black-75"]
    }),
    option: (baseStyles, state) => __spreadProps(__spreadValues({}, baseStyles), {
      padding: "10px 8px",
      fontSize: "14px",
      borderRadius: "4px",
      backgroundColor: state.isFocused ? colors/* COLORS */.l["ui-fleet-black-5"] : "transparent",
      fontWeight: state.isSelected ? 600 : "normal",
      color: colors/* COLORS */.l["core-fleet-black"],
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: colors/* COLORS */.l["ui-fleet-black-5"]
      }
    })
  };
  return /* @__PURE__ */ react.createElement("div", { className: `${CategoryFilter_baseClass}-wrapper`, ref: wrapperRef }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      variant: "unstyled",
      type: "button",
      onClick: toggleMenu,
      disabled: isDisabled,
      className: `${CategoryFilter_baseClass}__button`,
      ariaHasPopup: "listbox",
      ariaExpanded: menuIsOpen
    },
    /* @__PURE__ */ react.createElement("span", { className: `${CategoryFilter_baseClass}__button-label` }, selectedLabel),
    /* @__PURE__ */ react.createElement(
      Icon/* default */.A,
      {
        name: "chevron-down",
        color: menuIsOpen ? "core-fleet-black" : "ui-fleet-black-75",
        className: `${CategoryFilter_baseClass}__icon${menuIsOpen ? ` ${CategoryFilter_baseClass}__icon--open` : ""}`
      }
    )
  ), /* @__PURE__ */ react.createElement(
    react_select_esm/* default */.Ay,
    {
      ref: selectRef,
      options,
      value: allOptions.find((o) => o.value === selectedValue),
      onChange: (newValue) => {
        if (!newValue) return;
        setSearchQuery("");
        onChange(
          newValue.value === ALL_CATEGORIES_VALUE ? void 0 : newValue.value
        );
        setMenuIsOpen(false);
      },
      isDisabled,
      isSearchable: false,
      menuIsOpen,
      onMenuOpen: () => setMenuIsOpen(true),
      onMenuClose: () => {
        setMenuIsOpen(false);
        setSearchQuery("");
      },
      styles: customStyles,
      components: {
        MenuList: CustomMenuList,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null
      },
      tabIndex: -1,
      forwardNavKey,
      className: CategoryFilter_baseClass,
      classNamePrefix: CategoryFilter_baseClass,
      searchQuery,
      onChangeSearchQuery,
      noOptionsMessage: () => "No categories match this search."
    }
  ));
};
/* harmony default export */ var CategoryFilter_CategoryFilter = (CategoryFilter);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/CategoryFilter/index.ts




;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceFilters/SelfServiceFilters.tsx





const SelfServiceFilters_baseClass = "software-self-service__header-filters";
const SelfServiceFilters = ({
  query,
  categoryId,
  categories,
  onSearchQueryChange,
  onCategoryChange,
  installAllSlot
}) => {
  const hasCategories = categories.length > 0;
  return /* @__PURE__ */ react.createElement(
    "div",
    {
      className: classnames_default()(SelfServiceFilters_baseClass, {
        // Drives the narrow-width 2-row layout in SCSS. Without categories the
        // row only holds Install all + Search, which fit on one line at any
        // width, so the wrap rule is skipped.
        [`${SelfServiceFilters_baseClass}--with-categories`]: hasCategories
      })
    },
    hasCategories && /* @__PURE__ */ react.createElement(
      CategoryFilter_CategoryFilter,
      {
        categories,
        selectedCategoryId: categoryId,
        onChange: onCategoryChange
      }
    ),
    /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceFilters_baseClass}__actions` }, installAllSlot && /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceFilters_baseClass}__install-all` }, installAllSlot), /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceFilters_baseClass}__search` }, /* @__PURE__ */ react.createElement(
      SearchField/* default */.A,
      {
        placeholder: "Search by name",
        onChange: onSearchQueryChange,
        defaultValue: query
      }
    )))
  );
};
/* harmony default export */ var SelfServiceFilters_SelfServiceFilters = (SelfServiceFilters);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceFilters/index.ts



// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceHeader/index.ts + 1 modules
var SelfServiceHeader = __webpack_require__(33429);
// EXTERNAL MODULE: ./frontend/components/TableContainer/index.ts
var TableContainer = __webpack_require__(34724);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceTable/SelfServiceTable.tsx





const SelfServiceTable = ({
  baseClass,
  contactUrl,
  queryParams,
  enhancedSoftware,
  selfServiceData,
  tableConfig,
  isFetching,
  onSortChange,
  onClientSidePaginationChange
}) => {
  const initialSortHeader = queryParams.order_key || "name";
  const initialSortDirection = queryParams.order_direction || "asc";
  const initialSortPage = queryParams.page || 0;
  const isEmptySearch = !!queryParams.query;
  const isEmptyCategory = !isEmptySearch && queryParams.category_id !== void 0;
  const renderEmptyState = () => {
    if (isEmptySearch) {
      return /* @__PURE__ */ react.createElement(
        EmptyState/* default */.A,
        {
          header: "No items match your search",
          info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Not finding what you're looking for?", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: contactUrl, text: "Reach out to IT", newTab: true }))
        }
      );
    }
    if (isEmptyCategory) {
      return /* @__PURE__ */ react.createElement(EmptyState/* default */.A, { header: "No items in this category" });
    }
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        header: "No items match the current search criteria",
        info: "Expecting to see software? Check back later."
      }
    );
  };
  return /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__table` }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs: tableConfig,
      data: enhancedSoftware,
      isLoading: isFetching,
      defaultSortHeader: initialSortHeader,
      defaultSortDirection: initialSortDirection,
      onQueryChange: onSortChange,
      pageIndex: initialSortPage,
      disableNextPage: (selfServiceData == null ? void 0 : selfServiceData.meta.has_next_results) === false,
      hideFooter: (selfServiceData == null ? void 0 : selfServiceData.meta.has_next_results) === false && initialSortPage === 0,
      pageSize: 9999,
      isClientSidePagination: true,
      disableAutoResetPage: true,
      onClientSidePaginationChange,
      emptyComponent: renderEmptyState,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableTableHeader: true,
      disableCount: true
    }
  ));
};
/* harmony default export */ var SelfServiceTable_SelfServiceTable = (SelfServiceTable);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceTable/index.ts



// EXTERNAL MODULE: ./frontend/interfaces/software.ts + 1 modules
var interfaces_software = __webpack_require__(56906);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/TileActionStatus/TileActionStatus.tsx






const TileActionStatus_baseClass = "tile-action-status";
const getTileActionLabel = (uiStatus) => {
  switch (uiStatus) {
    case "uninstalled":
    case "recently_uninstalled":
      return "Install";
    case "failed_install":
    case "failed_install_update_available":
    case "failed_script":
      return "Retry";
    case "update_available":
    case "failed_uninstall_update_available":
      return "Update";
    case "installed":
    case "recently_installed":
    case "recently_updated":
    case "failed_uninstall":
      return "Reinstall";
    case "never_ran_script":
      return "Run";
    case "ran_script":
      return "Rerun";
    default:
      return "Install";
  }
};
const getPendingOrRunningLabel = (uiStatus) => {
  switch (uiStatus) {
    case "updating":
    case "pending_update":
      return "Updating...";
    case "installing":
    case "pending_install":
      return "Installing...";
    case "running_script":
    case "pending_script":
      return "Running...";
    case "uninstalling":
    case "pending_uninstall":
      return "Uninstalling...";
    default:
      return null;
  }
};
const TileActionStatus = ({
  software,
  onActionClick
}) => {
  const [disableAction, setDisableAction] = (0,react.useState)(false);
  const actionLabel = getTileActionLabel(software.ui_status);
  const isError = (0,interfaces_software/* isSoftwareErrorStatus */.k9)(software.ui_status);
  (0,react.useEffect)(() => {
    if (!(0,interfaces_software/* isSoftwareInProgressStatus */.GX)(software.ui_status) && !(0,interfaces_software/* isSoftwarePendingStatus */.lY)(software.ui_status)) {
      setDisableAction(false);
    }
  }, [software.ui_status]);
  const isActiveAction = (0,interfaces_software/* isSoftwareInProgressStatus */.GX)(software.ui_status) || (0,interfaces_software/* isSoftwarePendingStatus */.lY)(software.ui_status);
  const handleClick = () => {
    setDisableAction(true);
    onActionClick(software);
  };
  const renderActiveActionStatus = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Spinner/* default */.A, { size: "x-small", centered: false, delay: 0 }), getPendingOrRunningLabel(software.ui_status));
  };
  const renderActionStatus = () => {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, isError && /* @__PURE__ */ react.createElement("div", { className: "self-service-tile__item-error" }, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "error" }), /* @__PURE__ */ react.createElement("div", { className: "self-service-tile__item-error-text" }, "Failed")), actionLabel && /* @__PURE__ */ react.createElement(
      Button/* default */.A,
      {
        variant: "secondary",
        onClick: handleClick,
        disabled: disableAction
      },
      actionLabel
    ));
  };
  return /* @__PURE__ */ react.createElement("div", { className: TileActionStatus_baseClass }, isActiveAction ? renderActiveActionStatus() : renderActionStatus());
};
/* harmony default export */ var TileActionStatus_TileActionStatus = (TileActionStatus);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/TileActionStatus/index.ts



;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceTiles/SelfServiceTiles.tsx











const SelfServiceTiles_baseClass = "self-service-tiles-list";
const tileBaseClass = "self-service-tile";
const SelfServiceTiles = ({
  enhancedSoftware,
  contactUrl,
  onClickInstallAction,
  isEmptySearch,
  isEmptyCategory,
  isFetching
}) => {
  if (isFetching) {
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
  }
  if (isEmptySearch) {
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      {
        variant: "list",
        header: "No items match your search",
        info: /* @__PURE__ */ react.createElement(react.Fragment, null, "Not finding what you're looking for?", " ", /* @__PURE__ */ react.createElement(CustomLink/* default */.A, { url: contactUrl, text: "Reach out to IT", newTab: true }))
      }
    );
  }
  if (isEmptyCategory) {
    return /* @__PURE__ */ react.createElement(EmptyState/* default */.A, { variant: "list", header: "No items in this category" });
  }
  return /* @__PURE__ */ react.createElement("div", { className: SelfServiceTiles_baseClass }, enhancedSoftware.map((software) => {
    var _a, _b;
    return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: tileBaseClass, key: software.id }, /* @__PURE__ */ react.createElement("div", { className: `${tileBaseClass}__item` }, /* @__PURE__ */ react.createElement("div", { className: `${tileBaseClass}__item-icon` }, /* @__PURE__ */ react.createElement(
      SoftwareIcon/* default */.A,
      {
        url: software.icon_url,
        name: software.name,
        source: software.source,
        size: "medium"
      }
    )), /* @__PURE__ */ react.createElement("div", { className: `${tileBaseClass}__item-name-version` }, /* @__PURE__ */ react.createElement("div", { className: `${tileBaseClass}__item-name` }, /* @__PURE__ */ react.createElement(
      TooltipTruncatedText/* default */.A,
      {
        isMobileView: true,
        value: (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(
          software.name,
          software.display_name
        )
      }
    )), /* @__PURE__ */ react.createElement("div", { className: `${tileBaseClass}__item-version` }, ((_a = software.software_package) == null ? void 0 : _a.version) || ((_b = software.app_store_app) == null ? void 0 : _b.version)))), /* @__PURE__ */ react.createElement(
      TileActionStatus_TileActionStatus,
      {
        software,
        onActionClick: () => onClickInstallAction(
          software.id,
          interfaces_software/* SCRIPT_PACKAGE_SOURCES */.i0.includes(software.source)
        )
      }
    ));
  }));
};
/* harmony default export */ var SelfServiceTiles_SelfServiceTiles = (SelfServiceTiles);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/components/SelfServiceTiles/index.ts



// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Software/SelfService/helpers.ts
var SelfService_helpers = __webpack_require__(17190);
;// ./frontend/pages/hosts/details/cards/Software/SelfService/SelfServiceCard/SelfServiceCard.tsx

var SelfServiceCard_defProp = Object.defineProperty;
var SelfServiceCard_defProps = Object.defineProperties;
var SelfServiceCard_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SelfServiceCard_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SelfServiceCard_hasOwnProp = Object.prototype.hasOwnProperty;
var SelfServiceCard_propIsEnum = Object.prototype.propertyIsEnumerable;
var SelfServiceCard_defNormalProp = (obj, key, value) => key in obj ? SelfServiceCard_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SelfServiceCard_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SelfServiceCard_hasOwnProp.call(b, prop))
      SelfServiceCard_defNormalProp(a, prop, b[prop]);
  if (SelfServiceCard_getOwnPropSymbols)
    for (var prop of SelfServiceCard_getOwnPropSymbols(b)) {
      if (SelfServiceCard_propIsEnum.call(b, prop))
        SelfServiceCard_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SelfServiceCard_spreadProps = (a, b) => SelfServiceCard_defProps(a, SelfServiceCard_getOwnPropDescs(b));













const SelfServiceCard_baseClass = "software-self-service";
const SelfServiceCard = ({
  contactUrl,
  deviceToken,
  queryParams,
  enhancedSoftware,
  selfServiceData,
  tableConfig,
  isLoading,
  isError,
  isFetching,
  isEmpty,
  router,
  pathname,
  isMobileView,
  onClickInstallAction,
  onInstallAllSuccess
}) => {
  var _a, _b;
  const initialSortHeader = queryParams.order_key || "name";
  const initialSortDirection = queryParams.order_direction || "asc";
  const { data: categoriesData, isSuccess: isCategoriesSuccess } = (0,es.useQuery)(
    ["device_self_service_categories", deviceToken],
    () => self_service_categories/* default */.A.getDeviceCategories(deviceToken),
    {
      select: (response) => response.self_service_categories,
      staleTime: 6e4
    }
  );
  const categories = (0,react.useMemo)(() => categoriesData != null ? categoriesData : [], [categoriesData]);
  const visibleCategories = (0,react.useMemo)(
    () => (0,SelfService_helpers/* filterCategoriesWithSoftware */._$)(categories, enhancedSoftware),
    [categories, enhancedSoftware]
  );
  const softwareInSelectedCategory = (0,react.useMemo)(
    () => (0,SelfService_helpers/* filterSoftwareByCustomCategory */.qI)(
      enhancedSoftware,
      visibleCategories,
      queryParams.category_id
    ),
    [enhancedSoftware, visibleCategories, queryParams.category_id]
  );
  const normalizedQuery = (_b = (_a = queryParams.query) == null ? void 0 : _a.trim()) != null ? _b : "";
  const softwareInSelectedCategoryMatchingQuery = (0,react.useMemo)(
    () => (0,SelfService_helpers/* filterSoftwareByQuery */.Js)(softwareInSelectedCategory, normalizedQuery),
    [softwareInSelectedCategory, normalizedQuery]
  );
  const uninstalledCount = (0,react.useMemo)(
    () => (0,SelfService_helpers/* countUninstalledForInstallAll */.WO)(softwareInSelectedCategoryMatchingQuery),
    [softwareInSelectedCategoryMatchingQuery]
  );
  const hasInProgress = (0,react.useMemo)(
    () => (0,SelfService_helpers/* hasInProgressInstallAllItems */.hB)(softwareInSelectedCategoryMatchingQuery),
    [softwareInSelectedCategoryMatchingQuery]
  );
  const onClientSidePaginationChange = (0,react.useCallback)(
    (page) => {
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(pathname, {
          query: queryParams.query,
          category_id: queryParams.category_id,
          order_key: initialSortHeader,
          order_direction: initialSortDirection,
          page
        })
      );
    },
    [
      pathname,
      queryParams.query,
      queryParams.category_id,
      initialSortDirection,
      initialSortHeader,
      router
    ]
  );
  const onSearchQueryChange = (value) => {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(pathname, {
        query: value,
        category_id: queryParams.category_id,
        order_key: initialSortHeader,
        order_direction: initialSortDirection,
        page: 0
      })
    );
  };
  const onSortChange = ({ sortHeader, sortDirection }) => {
    router.push(
      (0,url/* getPathWithQueryParams */.M8)(pathname, SelfServiceCard_spreadProps(SelfServiceCard_spreadValues({}, queryParams), {
        order_key: sortHeader,
        order_direction: sortDirection,
        query: queryParams.query !== void 0 ? queryParams.query : void 0,
        category_id: queryParams.category_id !== void 0 ? queryParams.category_id : void 0,
        page: 0
      }))
    );
  };
  const onCategoryChange = (0,react.useCallback)(
    (categoryId) => {
      router.push(
        (0,url/* getPathWithQueryParams */.M8)(pathname, {
          category_id: categoryId,
          query: queryParams.query,
          order_key: initialSortHeader,
          order_direction: initialSortDirection,
          page: 0
        })
      );
    },
    [
      pathname,
      queryParams.query,
      initialSortHeader,
      initialSortDirection,
      router
    ]
  );
  (0,react.useEffect)(() => {
    if (!isCategoriesSuccess || !selfServiceData || queryParams.category_id === void 0)
      return;
    const idIsKnown = visibleCategories.some(
      (c) => c.id === queryParams.category_id
    );
    if (!idIsKnown) {
      onCategoryChange(void 0);
    }
  }, [
    isCategoriesSuccess,
    selfServiceData,
    visibleCategories,
    queryParams.category_id,
    onCategoryChange
  ]);
  if (isLoading)
    return /* @__PURE__ */ react.createElement(Spinner/* default */.A, SelfServiceCard_spreadValues({}, isMobileView && { variant: "mobile" }));
  if (isError)
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      SelfServiceCard_spreadValues({
        header: "Error loading software"
      }, isMobileView && { variant: "list" })
    );
  if ((isEmpty || !selfServiceData) && !isFetching) {
    return /* @__PURE__ */ react.createElement(
      EmptyState/* default */.A,
      SelfServiceCard_spreadValues({
        header: "No self-service software available yet",
        info: "Your organization didn\u2019t add any self-service software."
      }, isMobileView && { variant: "list" })
    );
  }
  const filteredSoftware = softwareInSelectedCategoryMatchingQuery;
  const installAllButton = !isMobileView && queryParams.category_id !== void 0 ? /* @__PURE__ */ react.createElement(
    InstallAllInCategoryButton_InstallAllInCategoryButton,
    {
      uninstalledCount,
      hasInProgressInCategory: hasInProgress,
      deviceToken,
      categoryId: queryParams.category_id,
      query: normalizedQuery,
      onSuccess: () => onInstallAllSuccess == null ? void 0 : onInstallAllSuccess()
    }
  ) : null;
  if (isMobileView) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(SelfServiceHeader/* default */.A, { contactUrl, variant: "mobile-header" }), /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceCard_baseClass}__mobile-installers` }, /* @__PURE__ */ react.createElement(
      SelfServiceFilters_SelfServiceFilters,
      {
        query: queryParams.query,
        categoryId: queryParams.category_id,
        categories: visibleCategories,
        onSearchQueryChange,
        onCategoryChange
      }
    ), /* @__PURE__ */ react.createElement(
      SelfServiceTiles_SelfServiceTiles,
      {
        contactUrl,
        enhancedSoftware: filteredSoftware,
        isFetching,
        isEmptySearch: enhancedSoftware.length > 0 && filteredSoftware.length === 0 && !!queryParams.query,
        isEmptyCategory: enhancedSoftware.length > 0 && filteredSoftware.length === 0 && !queryParams.query && queryParams.category_id !== void 0,
        onClickInstallAction
      }
    )));
  }
  return /* @__PURE__ */ react.createElement(Card/* default */.A, { className: `${SelfServiceCard_baseClass}__self-service-card`, paddingSize: "xlarge" }, /* @__PURE__ */ react.createElement(SelfServiceHeader/* default */.A, { contactUrl }), /* @__PURE__ */ react.createElement("div", { className: `${SelfServiceCard_baseClass}__content` }, /* @__PURE__ */ react.createElement(
    SelfServiceFilters_SelfServiceFilters,
    {
      query: queryParams.query,
      categoryId: queryParams.category_id,
      categories: visibleCategories,
      onSearchQueryChange,
      onCategoryChange,
      installAllSlot: installAllButton
    }
  ), /* @__PURE__ */ react.createElement(
    SelfServiceTable_SelfServiceTable,
    {
      baseClass: SelfServiceCard_baseClass,
      contactUrl,
      queryParams: SelfServiceCard_spreadProps(SelfServiceCard_spreadValues({}, queryParams), { query: normalizedQuery }),
      enhancedSoftware: filteredSoftware,
      selfServiceData,
      tableConfig,
      isFetching,
      onSortChange,
      onClientSidePaginationChange
    }
  )));
};
/* harmony default export */ var SelfServiceCard_SelfServiceCard = (SelfServiceCard);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/SelfService.tsx

var SelfService_defProp = Object.defineProperty;
var SelfService_defProps = Object.defineProperties;
var SelfService_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SelfService_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SelfService_hasOwnProp = Object.prototype.hasOwnProperty;
var SelfService_propIsEnum = Object.prototype.propertyIsEnumerable;
var SelfService_defNormalProp = (obj, key, value) => key in obj ? SelfService_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SelfService_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SelfService_hasOwnProp.call(b, prop))
      SelfService_defNormalProp(a, prop, b[prop]);
  if (SelfService_getOwnPropSymbols)
    for (var prop of SelfService_getOwnPropSymbols(b)) {
      if (SelfService_propIsEnum.call(b, prop))
        SelfService_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SelfService_spreadProps = (a, b) => SelfService_defProps(a, SelfService_getOwnPropDescs(b));
var SelfService_async = (__this, __arguments, generator) => {
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




















const SelfService_baseClass = "software-self-service";
const DEFAULT_SELF_SERVICE_CONFIG = {
  // API default params are not subject to change by user
  api: {
    per_page: 9999,
    // Note: There is no API pagination on this page because of time constraints (e.g. categories and install statuses are not filtered by API)
    order_key: "name",
    order_direction: "asc",
    self_service: true,
    category_id: void 0
  },
  // Subject to change by user
  ui: {
    search_query: "",
    page: 0,
    sort_header: "name",
    sort_direction: "asc",
    page_size: 9999
    // 4.77 Design decision to remove UI pagination
  }
};
const SELF_SERVICE_SUBHEADER = "Install organization-approved apps provided by your IT department.";
const parseSelfServiceQueryParams = (queryParams) => {
  var _a, _b, _c;
  const searchQuery = (_a = queryParams == null ? void 0 : queryParams.query) != null ? _a : DEFAULT_SELF_SERVICE_CONFIG.ui.search_query;
  const sortHeader = (_b = queryParams == null ? void 0 : queryParams.order_key) != null ? _b : DEFAULT_SELF_SERVICE_CONFIG.ui.sort_header;
  const sortDirection = (_c = queryParams == null ? void 0 : queryParams.order_direction) != null ? _c : DEFAULT_SELF_SERVICE_CONFIG.ui.sort_direction;
  const page = (queryParams == null ? void 0 : queryParams.page) ? parseInt(queryParams.page, 10) : DEFAULT_SELF_SERVICE_CONFIG.ui.page;
  const pageSize = DEFAULT_SELF_SERVICE_CONFIG.ui.page_size;
  const categoryId = (queryParams == null ? void 0 : queryParams.category_id) ? parseInt(queryParams.category_id, 10) : void 0;
  return {
    page,
    query: searchQuery,
    order_key: sortHeader,
    order_direction: sortDirection,
    per_page: pageSize,
    category_id: categoryId
  };
};
const getInstallerName = (hostSW) => {
  if (hostSW.source === "apps" && hostSW.installed_versions) {
    const filePath = hostSW.installed_versions[0].installed_paths[0];
    const match = filePath.match(/\/([^/]+)\.app$/);
    return match ? match[1] : hostSW.name;
  }
  return hostSW.name;
};
const SoftwareSelfService = ({
  contactUrl,
  deviceToken,
  isSoftwareEnabled,
  pathname,
  queryParams,
  router,
  refetchHostDetails,
  isHostDetailsPolling,
  hostSoftwareUpdatedAt,
  hostDisplayName,
  isMobileView = false
}) => {
  var _a, _b, _c, _d, _e, _f;
  const isMountedRef = (0,react.useRef)(false);
  const userActionIdsRef = (0,react.useRef)(/* @__PURE__ */ new Set());
  const recentlyUpdatedTimeouts = (0,react.useRef)({});
  const pendingSoftwareIdsRef = (0,react.useRef)(/* @__PURE__ */ new Set());
  const lastObservedPendingIdsRef = (0,react.useRef)(/* @__PURE__ */ new Set());
  const pollingTimeoutIdRef = (0,react.useRef)(null);
  const isAwaitingHostDetailsPolling = (0,react.useRef)(isHostDetailsPolling);
  const [selfServiceData, setSelfServiceData] = (0,react.useState)(void 0);
  const [selectedUpdateDetails, setSelectedUpdateDetails] = (0,react.useState)(void 0);
  const [
    selectedHostSWInstallDetails,
    setSelectedHostSWInstallDetails
  ] = (0,react.useState)(void 0);
  const [
    selectedHostSWIpaInstallDetails,
    setSelectedHostSWIpaInstallDetails
  ] = (0,react.useState)(void 0);
  const [
    selectedHostSWScriptDetails,
    setSelectedHostSWScriptDetails
  ] = (0,react.useState)(void 0);
  const [
    selectedVPPInstallDetails,
    setSelectedVPPInstallDetails
  ] = (0,react.useState)(null);
  const [
    selectedHostSWUninstallDetails,
    setSelectedHostSWUninstallDetails
  ] = (0,react.useState)(void 0);
  const [showUninstallSoftwareModal, setShowUninstallSoftwareModal] = (0,react.useState)(
    false
  );
  const [showOpenInstructionsModal, setShowOpenInstructionsModal] = (0,react.useState)(
    false
  );
  const [recentlyUpdatedSoftwareIds, setRecentlyUpdatedSoftwareIds] = (0,react.useState)(/* @__PURE__ */ new Set());
  (0,react.useEffect)(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      Object.values(recentlyUpdatedTimeouts.current).forEach(clearTimeout);
      recentlyUpdatedTimeouts.current = {};
      if (pollingTimeoutIdRef.current) {
        clearTimeout(pollingTimeoutIdRef.current);
        pollingTimeoutIdRef.current = null;
      }
      pendingSoftwareIdsRef.current = /* @__PURE__ */ new Set();
    };
  }, []);
  const scheduleRecentlyUpdatedExpiry = (0,react.useCallback)((id) => {
    if (recentlyUpdatedTimeouts.current[id]) {
      clearTimeout(recentlyUpdatedTimeouts.current[id]);
      delete recentlyUpdatedTimeouts.current[id];
    }
    recentlyUpdatedTimeouts.current[id] = setTimeout(() => {
      if (isMountedRef.current) {
        setRecentlyUpdatedSoftwareIds((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
      delete recentlyUpdatedTimeouts.current[id];
    }, 12e4);
  }, []);
  const registerUserSoftwareAction = (0,react.useCallback)(
    (id) => {
      userActionIdsRef.current.add(id);
      scheduleRecentlyUpdatedExpiry(id);
    },
    [scheduleRecentlyUpdatedExpiry]
  );
  const enhancedSoftware = (0,react.useMemo)(() => {
    if (!selfServiceData) return [];
    return selfServiceData.software.map((software) => SelfService_spreadProps(SelfService_spreadValues({}, software), {
      ui_status: (0,Software_helpers/* getUiStatus */.Zd)(
        software,
        true,
        hostSoftwareUpdatedAt,
        recentlyUpdatedSoftwareIds,
        true
        // suppress "Patch skipped" — end-user view keeps the failed_install fallback
      )
    }));
  }, [selfServiceData, recentlyUpdatedSoftwareIds, hostSoftwareUpdatedAt]);
  (0,react.useEffect)(() => {
    if (!selfServiceData) return;
    const currentlyPendingIds = new Set(
      selfServiceData.software.filter(
        (software) => software.status === "pending_install" || software.status === "pending_uninstall"
      ).map((software) => String(software.id))
    );
    const completedAppIds = [...lastObservedPendingIdsRef.current].filter(
      (id) => !currentlyPendingIds.has(id)
    );
    if (completedAppIds.length > 0) {
      setRecentlyUpdatedSoftwareIds((prev) => {
        const next = new Set(prev);
        completedAppIds.forEach((idStr) => {
          const id = Number(idStr);
          if (userActionIdsRef.current.has(id)) {
            next.add(id);
            userActionIdsRef.current.delete(id);
            scheduleRecentlyUpdatedExpiry(id);
          }
        });
        return next;
      });
    }
    lastObservedPendingIdsRef.current = currentlyPendingIds;
  }, [selfServiceData, scheduleRecentlyUpdatedExpiry]);
  const selectedSoftwareForUninstall = (0,react.useRef)(null);
  const selectedSoftwareForInstructions = (0,react.useRef)(null);
  const queryKey = (0,react.useMemo)(() => {
    return [
      SelfService_spreadValues({
        scope: "device_software",
        id: deviceToken,
        page: 0,
        // Pagination is clientside
        query: ""
      }, DEFAULT_SELF_SERVICE_CONFIG.api)
    ];
  }, [deviceToken]);
  const {
    isLoading,
    isError,
    isFetching,
    refetch: refetchSelfServiceData
  } = (0,es.useQuery)(queryKey, (context) => device_user/* default */.A.getDeviceSoftware(context.queryKey[0]), SelfService_spreadProps(SelfService_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
    enabled: isSoftwareEnabled,
    keepPreviousData: true,
    onSuccess: (response) => {
      setSelfServiceData(response);
    }
  }));
  (0,react.useEffect)(() => {
    if (isAwaitingHostDetailsPolling.current && !isHostDetailsPolling) {
      refetchSelfServiceData();
    }
    isAwaitingHostDetailsPolling.current = isHostDetailsPolling;
  }, [isHostDetailsPolling, refetchSelfServiceData]);
  const { refetch: refetchForPendingInstallsOrUninstalls } = (0,es.useQuery)(
    ["pending_installs", queryKey[0]],
    () => device_user/* default */.A.getDeviceSoftware(queryKey[0]),
    {
      enabled: false,
      onSuccess: (response) => {
        const newPendingSet = new Set(
          response.software.filter(
            (software) => software.status === "pending_install" || software.status === "pending_uninstall"
          ).map((software) => String(software.id))
        );
        const previouslyPending = [...pendingSoftwareIdsRef.current];
        const completedAppIds = previouslyPending.filter(
          (id) => !newPendingSet.has(id)
        );
        if (completedAppIds.length > 0) {
          setRecentlyUpdatedSoftwareIds((prev) => {
            const next = new Set(prev);
            completedAppIds.forEach((idStr) => {
              const id = Number(idStr);
              if (userActionIdsRef.current.has(id)) {
                next.add(id);
                userActionIdsRef.current.delete(id);
                scheduleRecentlyUpdatedExpiry(id);
              }
            });
            return next;
          });
          refetchHostDetails();
        }
        const setsAreEqual = newPendingSet.size === pendingSoftwareIdsRef.current.size && [...newPendingSet].every(
          (id) => pendingSoftwareIdsRef.current.has(id)
        );
        if (newPendingSet.size > 0) {
          if (!setsAreEqual) {
            pendingSoftwareIdsRef.current = newPendingSet;
            setSelfServiceData(response);
          }
          if (pollingTimeoutIdRef.current) {
            clearTimeout(pollingTimeoutIdRef.current);
          }
          pollingTimeoutIdRef.current = setTimeout(() => {
            refetchForPendingInstallsOrUninstalls();
          }, 5e3);
        } else {
          pendingSoftwareIdsRef.current = /* @__PURE__ */ new Set();
          if (pollingTimeoutIdRef.current) {
            clearTimeout(pollingTimeoutIdRef.current);
            pollingTimeoutIdRef.current = null;
          }
          setSelfServiceData(response);
        }
      },
      onError: (error) => {
        pendingSoftwareIdsRef.current = /* @__PURE__ */ new Set();
        ToastNotification/* notify */.me.error(
          "We're having trouble checking pending installs. Please refresh the page.",
          { response: error }
        );
      }
    }
  );
  const startPollingForPendingInstallsOrUninstalls = (0,react.useCallback)(
    (pendingIds) => {
      const newSet = new Set(pendingIds);
      const setsAreEqual = newSet.size === pendingSoftwareIdsRef.current.size && [...newSet].every((id) => pendingSoftwareIdsRef.current.has(id));
      if (!setsAreEqual) {
        pendingSoftwareIdsRef.current = newSet;
        if (pollingTimeoutIdRef.current) {
          clearTimeout(pollingTimeoutIdRef.current);
        }
        refetchForPendingInstallsOrUninstalls();
      }
    },
    [refetchForPendingInstallsOrUninstalls]
  );
  (0,react.useEffect)(() => {
    var _a2;
    const pendingSoftware = selfServiceData == null ? void 0 : selfServiceData.software.filter(
      (software) => software.status === "pending_install" || software.status === "pending_uninstall"
    );
    const pendingIds = (_a2 = pendingSoftware == null ? void 0 : pendingSoftware.map((s) => String(s.id))) != null ? _a2 : [];
    if (pendingIds.length > 0) {
      startPollingForPendingInstallsOrUninstalls(pendingIds);
    }
  }, [selfServiceData, startPollingForPendingInstallsOrUninstalls]);
  const onInstallOrUninstall = (0,react.useCallback)(() => {
    refetchForPendingInstallsOrUninstalls();
  }, [refetchForPendingInstallsOrUninstalls]);
  const onClickInstallAction = (0,react.useCallback)(
    (softwareId, isScriptPackage = false) => SelfService_async(null, null, function* () {
      try {
        yield device_user/* default */.A.installSelfServiceSoftware(deviceToken, softwareId);
        if (isMountedRef.current) {
          onInstallOrUninstall();
          registerUserSoftwareAction(softwareId);
        }
        return true;
      } catch (error) {
        ToastNotification/* notify */.me.error(
          isScriptPackage ? "Couldn't run. Please try again." : (0,HostSoftwareLibrary_helpers/* getInstallErrorMessage */.Nj)(error),
          { response: error }
        );
        return false;
      }
    }),
    [deviceToken, onInstallOrUninstall, registerUserSoftwareAction]
  );
  const onClickUninstallAction = (0,react.useCallback)(
    (hostSW) => {
      var _a2, _b2;
      selectedSoftwareForUninstall.current = {
        softwareId: hostSW.id,
        softwareName: hostSW.name,
        softwareInstallerType: (0,fileUtils/* getExtensionFromFileName */.bv)(
          ((_a2 = hostSW.software_package) == null ? void 0 : _a2.name) || ""
        ),
        version: ((_b2 = hostSW.software_package) == null ? void 0 : _b2.version) || ""
      };
      setShowUninstallSoftwareModal(true);
    },
    []
  );
  const onClickOpenInstructionsAction = (0,react.useCallback)(
    (hostSW) => {
      selectedSoftwareForInstructions.current = {
        softwareName: getInstallerName(hostSW),
        softwareSource: hostSW.source
      };
      setShowOpenInstructionsModal(true);
    },
    []
  );
  const onClickUpdateAction = (0,react.useCallback)(
    (id) => SelfService_async(null, null, function* () {
      try {
        yield device_user/* default */.A.installSelfServiceSoftware(deviceToken, id);
        registerUserSoftwareAction(id);
        onInstallOrUninstall();
      } catch (error) {
        ToastNotification/* notify */.me.error("Couldn't update software. Please try again.", {
          response: error
        });
      }
    }),
    [deviceToken, registerUserSoftwareAction, onInstallOrUninstall]
  );
  const onClickUpdateAll = (0,react.useCallback)(() => SelfService_async(null, null, function* () {
    const updateAvailableSoftware = enhancedSoftware.filter(
      (software) => software.ui_status === "update_available" || software.ui_status === "failed_install_update_available" || software.ui_status === "failed_uninstall_update_available"
    );
    if (!updateAvailableSoftware.length) {
      ToastNotification/* notify */.me.success("No updates available.");
      return;
    }
    const promises = updateAvailableSoftware.map(
      (software) => device_user/* default */.A.installSelfServiceSoftware(deviceToken, software.id)
    );
    const results = yield Promise.allSettled(promises);
    const failedUpdates = results.reduce((acc, result, idx) => {
      if (result.status === "rejected") {
        acc.push({
          software: updateAvailableSoftware[idx],
          reason: result.reason
        });
      }
      return acc;
    }, []);
    if (failedUpdates.length > 0) {
      ToastNotification/* notify */.me.batch(
        failedUpdates.map(({ software, reason }) => ({
          variant: "error",
          message: `Couldn't update ${software.name}. Please try again.`,
          options: { response: reason }
        }))
      );
    }
    results.forEach((result, idx) => {
      if (result.status === "fulfilled") {
        registerUserSoftwareAction(updateAvailableSoftware[idx].id);
      }
    });
    onInstallOrUninstall();
  }), [
    deviceToken,
    enhancedSoftware,
    registerUserSoftwareAction,
    onInstallOrUninstall
  ]);
  const onShowUpdateDetails = (0,react.useCallback)(
    (software) => {
      setSelectedUpdateDetails(software);
    },
    [setSelectedUpdateDetails]
  );
  const onShowInstallDetails = (0,react.useCallback)(
    (hostSoftware) => {
      setSelectedHostSWInstallDetails(hostSoftware);
    },
    [setSelectedHostSWInstallDetails]
  );
  const onShowIpaInstallDetails = (0,react.useCallback)(
    (hostSoftware) => {
      setSelectedHostSWIpaInstallDetails(hostSoftware);
    },
    [setSelectedHostSWIpaInstallDetails]
  );
  const onShowScriptDetails = (0,react.useCallback)(
    (hostSoftware) => {
      setSelectedHostSWScriptDetails(hostSoftware);
    },
    [setSelectedHostSWScriptDetails]
  );
  const onShowVPPInstallDetails = (0,react.useCallback)(
    (s) => {
      setSelectedVPPInstallDetails(s);
    },
    [setSelectedVPPInstallDetails]
  );
  const onShowUninstallDetails = (0,react.useCallback)(
    (uninstallModalDetails) => {
      setSelectedHostSWUninstallDetails(uninstallModalDetails);
    },
    [setSelectedHostSWUninstallDetails]
  );
  const onClickFailedUpdateStatus = (hostSoftware) => {
    const lastInstall = (0,HostSoftwareLibrary_helpers/* getLastInstall */.OZ)(hostSoftware);
    if (onShowInstallDetails && lastInstall) {
      if ("command_uuid" in lastInstall) {
        onShowVPPInstallDetails(SelfService_spreadProps(SelfService_spreadValues({}, hostSoftware), {
          commandUuid: lastInstall.command_uuid
        }));
      } else if ("install_uuid" in lastInstall) {
        onShowInstallDetails(hostSoftware);
      } else {
        onShowInstallDetails(void 0);
      }
    }
  };
  const onExitSoftwareInstructionsModal = () => {
    selectedSoftwareForUninstall.current = null;
    setShowOpenInstructionsModal(false);
  };
  const onExitUninstallSoftwareModal = () => {
    selectedSoftwareForUninstall.current = null;
    setShowUninstallSoftwareModal(false);
  };
  const onSuccessUninstallSoftwareModal = () => {
    selectedSoftwareForUninstall.current = null;
    setShowUninstallSoftwareModal(false);
    onInstallOrUninstall();
  };
  const isEmpty = !(selfServiceData == null ? void 0 : selfServiceData.software.length) && !(selfServiceData == null ? void 0 : selfServiceData.meta.has_previous_results) && queryParams.query === "";
  const tableConfig = (0,react.useMemo)(() => {
    return generateSoftwareTableHeaders({
      onShowUpdateDetails,
      onShowInstallDetails,
      onShowIpaInstallDetails,
      onShowScriptDetails,
      onShowVPPInstallDetails,
      onShowUninstallDetails,
      onClickInstallAction,
      onClickUninstallAction,
      onClickOpenInstructionsAction
    });
  }, [
    onShowUpdateDetails,
    onShowInstallDetails,
    onShowIpaInstallDetails,
    onShowScriptDetails,
    onShowVPPInstallDetails,
    onShowUninstallDetails,
    onClickInstallAction,
    onClickUninstallAction,
    onClickOpenInstructionsAction
  ]);
  if (isMobileView)
    return /* @__PURE__ */ react.createElement(
      SelfServiceCard_SelfServiceCard,
      {
        contactUrl,
        deviceToken,
        queryParams,
        enhancedSoftware,
        selfServiceData,
        tableConfig,
        isLoading,
        isError,
        isFetching,
        isEmpty,
        router,
        pathname,
        isMobileView,
        onClickInstallAction,
        onInstallAllSuccess: onInstallOrUninstall
      }
    );
  return /* @__PURE__ */ react.createElement("div", { className: SelfService_baseClass }, /* @__PURE__ */ react.createElement(
    UpdatesCard_UpdatesCard,
    {
      enhancedSoftware,
      isLoading,
      isError,
      onClickUpdateAll,
      onClickUpdateAction,
      onClickFailedUpdateStatus
    }
  ), /* @__PURE__ */ react.createElement(
    SelfServiceCard_SelfServiceCard,
    {
      contactUrl,
      deviceToken,
      queryParams,
      enhancedSoftware,
      selfServiceData,
      tableConfig,
      isLoading,
      isError,
      isFetching,
      isEmpty,
      router,
      pathname,
      onClickInstallAction,
      onInstallAllSuccess: onInstallOrUninstall
    }
  ), showUninstallSoftwareModal && selectedSoftwareForUninstall.current && /* @__PURE__ */ react.createElement(
    UninstallSoftwareModal_UninstallSoftwareModal,
    {
      softwareId: selectedSoftwareForUninstall.current.softwareId,
      softwareName: selectedSoftwareForUninstall.current.softwareName,
      token: deviceToken,
      onExit: onExitUninstallSoftwareModal,
      onSuccess: onSuccessUninstallSoftwareModal
    }
  ), showOpenInstructionsModal && selectedSoftwareForInstructions.current && /* @__PURE__ */ react.createElement(
    OpenSoftwareModal_OpenSoftwareModal,
    {
      softwareName: selectedSoftwareForInstructions.current.softwareName,
      softwareSource: selectedSoftwareForInstructions.current.softwareSource,
      onExit: onExitSoftwareInstructionsModal
    }
  ), selectedHostSWInstallDetails && /* @__PURE__ */ react.createElement(
    SoftwareInstallDetailsModal/* default */.A,
    {
      hostSoftware: selectedHostSWInstallDetails,
      details: {
        host_display_name: hostDisplayName,
        install_uuid: (_b = (_a = selectedHostSWInstallDetails.software_package) == null ? void 0 : _a.last_install) == null ? void 0 : _b.install_uuid
      },
      onRetry: onClickInstallAction,
      onCancel: () => setSelectedHostSWInstallDetails(void 0),
      deviceAuthToken: deviceToken,
      contactUrl
    }
  ), selectedHostSWIpaInstallDetails && /* @__PURE__ */ react.createElement(
    SoftwareIpaInstallDetailsModal/* default */.A,
    {
      hostSoftware: selectedHostSWIpaInstallDetails,
      details: {
        hostDisplayName,
        fleetInstallStatus: selectedHostSWIpaInstallDetails.status,
        appName: (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(
          selectedHostSWIpaInstallDetails.name,
          selectedHostSWIpaInstallDetails.display_name
        ),
        commandUuid: (_d = (_c = selectedHostSWIpaInstallDetails.software_package) == null ? void 0 : _c.last_install) == null ? void 0 : _d.install_uuid
        // slightly redundant, see explanation in `SoftwareInstallDetailsModal
      },
      onRetry: onClickInstallAction,
      onCancel: () => setSelectedHostSWIpaInstallDetails(void 0),
      deviceAuthToken: deviceToken
    }
  ), selectedHostSWScriptDetails && /* @__PURE__ */ react.createElement(
    SoftwareScriptDetailsModal/* default */.A,
    {
      hostSoftware: selectedHostSWScriptDetails,
      details: {
        host_display_name: hostDisplayName,
        install_uuid: (_f = (_e = selectedHostSWScriptDetails.software_package) == null ? void 0 : _e.last_install) == null ? void 0 : _f.install_uuid
      },
      onRerun: onClickInstallAction,
      onCancel: () => setSelectedHostSWScriptDetails(void 0),
      deviceAuthToken: deviceToken,
      contactUrl
    }
  ), selectedVPPInstallDetails && /* @__PURE__ */ react.createElement(
    VppInstallDetailsModal/* VppInstallDetailsModal */.j0,
    {
      deviceAuthToken: deviceToken,
      details: {
        fleetInstallStatus: selectedVPPInstallDetails.status,
        hostDisplayName,
        appName: (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(
          selectedVPPInstallDetails.name,
          selectedVPPInstallDetails.display_name
        ),
        commandUuid: selectedVPPInstallDetails.commandUuid
      },
      hostSoftware: selectedVPPInstallDetails,
      onCancel: () => setSelectedVPPInstallDetails(null),
      onRetry: onClickInstallAction
    }
  ), selectedHostSWUninstallDetails && /* @__PURE__ */ react.createElement(
    SoftwareUninstallDetailsModal/* default */.Ay,
    SelfService_spreadProps(SelfService_spreadValues({}, selectedHostSWUninstallDetails), {
      hostDisplayName,
      onCancel: () => setSelectedHostSWUninstallDetails(void 0),
      onRetry: onClickUninstallAction,
      deviceAuthToken: deviceToken,
      contactUrl
    })
  ), selectedUpdateDetails && /* @__PURE__ */ react.createElement(
    SoftwareUpdateModal/* default */.A,
    {
      hostDisplayName,
      software: selectedUpdateDetails,
      onUpdate: onClickInstallAction,
      onExit: () => setSelectedUpdateDetails(void 0),
      isDeviceUser: true
    }
  ));
};
/* harmony default export */ var SelfService = (SoftwareSelfService);

;// ./frontend/pages/hosts/details/cards/Software/SelfService/index.ts



// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/User/index.ts + 3 modules
var User = __webpack_require__(31607);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/cards/Vitals/index.ts
var Vitals = __webpack_require__(56631);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/HostDetailsPage/HostDetailsPage.tsx + 159 modules
var HostDetailsPage = __webpack_require__(62717);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/HostDetailsPage/modals/BootstrapPackageModal/index.ts + 1 modules
var BootstrapPackageModal = __webpack_require__(4762);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/modals/CertificateDetailsModal/index.ts + 1 modules
var CertificateDetailsModal = __webpack_require__(60095);
// EXTERNAL MODULE: ./frontend/pages/hosts/details/modals/InventoryVersionsModal/index.ts + 1 modules
var InventoryVersionsModal = __webpack_require__(3204);
// EXTERNAL MODULE: ./frontend/components/forms/fields/InputField/index.ts + 1 modules
var InputField = __webpack_require__(80717);
;// ./frontend/pages/hosts/details/DeviceUserPage/AutoEnrollMdmModal/AutoEnrollMdmModal.tsx





const AutoEnrollMdmModal_baseClass = "auto-enroll-mdm-modal";
const AutoEnrollMdmModal = ({
  host: { platform, os_version },
  onCancel
}) => {
  let isMacOsSonomaOrLater = false;
  let isMacOs26OrLater = false;
  if (platform === "darwin" && os_version.startsWith("macOS ")) {
    const [major] = os_version.replace("macOS ", "").split(".").map((s) => parseInt(s, 10));
    isMacOsSonomaOrLater = major >= 14;
    isMacOs26OrLater = major >= 26;
  }
  const preSonomaBody = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", { className: `${AutoEnrollMdmModal_baseClass}__description` }, "To turn on MDM, Apple Inc. requires you to follow the steps below."), /* @__PURE__ */ react.createElement("ol", null, /* @__PURE__ */ react.createElement("li", null, "Open your Mac's notification center by selecting the date and time in the top right corner of your screen."), /* @__PURE__ */ react.createElement("li", null, "Select the ", /* @__PURE__ */ react.createElement("b", null, "Device Enrollment"), " notification. This will open", " ", /* @__PURE__ */ react.createElement("b", null, "System Settings"), ". Select ", /* @__PURE__ */ react.createElement("b", null, "Allow"), ".", /* @__PURE__ */ react.createElement("div", { className: `${AutoEnrollMdmModal_baseClass}__profiles-renew` }, /* @__PURE__ */ react.createElement("div", { className: `${AutoEnrollMdmModal_baseClass}__profiles-renew--instructions` }, "If you don't see ", /* @__PURE__ */ react.createElement("b", null, "Enroll in Remote Management"), ", open your ", /* @__PURE__ */ react.createElement("b", null, "Terminal"), " app (", /* @__PURE__ */ react.createElement("b", null, "Finder"), " ", ">", " ", /* @__PURE__ */ react.createElement("b", null, "Applications"), " ", ">", " ", /* @__PURE__ */ react.createElement("b", null, "Utilities"), " folder), copy and paste the below command, press enter, enter your password, and press enter again."), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      enableCopy: true,
      readOnly: true,
      name: "profiles-renew-command",
      value: "sudo profiles renew -type enrollment"
    }
  ))), /* @__PURE__ */ react.createElement("li", null, "Enter your password, and select ", /* @__PURE__ */ react.createElement("b", null, "Enroll"), "."), /* @__PURE__ */ react.createElement("li", null, "Select ", /* @__PURE__ */ react.createElement("b", null, "Close"), " to close this window and select ", /* @__PURE__ */ react.createElement("b", null, "Refetch"), " on your My device page to tell your organization that MDM is on.")));
  const enrollCTA = isMacOs26OrLater ? "Enroll in Device Management" : "Enroll in Remote Management";
  const sonomaAndAboveBody = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", { className: `${AutoEnrollMdmModal_baseClass}__description` }, "To turn on MDM, Apple Inc. requires that you follow the steps below."), /* @__PURE__ */ react.createElement("ol", null, /* @__PURE__ */ react.createElement("li", null, "From the Apple menu in the top left corner of your screen, select", " ", /* @__PURE__ */ react.createElement("b", null, "System Settings"), "."), /* @__PURE__ */ react.createElement("li", null, "In the sidebar menu, select ", /* @__PURE__ */ react.createElement("b", null, enrollCTA), ", and select", " ", /* @__PURE__ */ react.createElement("b", null, "Enroll"), ".", /* @__PURE__ */ react.createElement("div", { className: `${AutoEnrollMdmModal_baseClass}__profiles-renew` }, /* @__PURE__ */ react.createElement("div", { className: `${AutoEnrollMdmModal_baseClass}__profiles-renew--instructions` }, "If you don't see ", /* @__PURE__ */ react.createElement("b", null, enrollCTA), ", open your", " ", /* @__PURE__ */ react.createElement("b", null, "Terminal"), " app (", /* @__PURE__ */ react.createElement("b", null, "Finder"), " ", ">", " ", /* @__PURE__ */ react.createElement("b", null, "Applications"), " ", ">", " ", /* @__PURE__ */ react.createElement("b", null, "Utilities"), " folder), copy and paste the below command, press enter, enter your password, and press enter again."), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      enableCopy: true,
      readOnly: true,
      name: "profiles-renew-command",
      value: "sudo profiles renew -type enrollment"
    }
  ))), /* @__PURE__ */ react.createElement("li", null, "Enter your password, and select ", /* @__PURE__ */ react.createElement("b", null, "Enroll"), "."), /* @__PURE__ */ react.createElement("li", null, "Select ", /* @__PURE__ */ react.createElement("b", null, "Close"), " to close this window and select ", /* @__PURE__ */ react.createElement("b", null, "Refetch"), " on your My device page to tell your organization that MDM is on.")));
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Turn on MDM",
      onExit: onCancel,
      onEnter: onCancel,
      className: AutoEnrollMdmModal_baseClass,
      width: "xlarge"
    },
    /* @__PURE__ */ react.createElement("div", null, isMacOsSonomaOrLater ? sonomaAndAboveBody : preSonomaBody, /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: onCancel }, "Close")))
  );
};
/* harmony default export */ var AutoEnrollMdmModal_AutoEnrollMdmModal = (AutoEnrollMdmModal);

;// ./frontend/pages/hosts/details/DeviceUserPage/AutoEnrollMdmModal/index.ts



;// ./frontend/pages/hosts/details/DeviceUserPage/BitLockerPinInstructionsModal/BitLockerPinInstructionsModal.tsx





const BitLockerPinInstructionsModal_baseClass = "bit-locker-pin-instructions-modal";
const BitLockerPinInstructionsModal = ({
  onExit
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Create PIN",
      onExit,
      onEnter: onExit,
      className: BitLockerPinInstructionsModal_baseClass,
      width: "large"
    },
    /* @__PURE__ */ react.createElement("ol", null, /* @__PURE__ */ react.createElement("li", null, "Open the ", /* @__PURE__ */ react.createElement("b", null, "Start menu"), "."), /* @__PURE__ */ react.createElement("li", null, "Type \u201CManage BitLocker\u201D and launch."), /* @__PURE__ */ react.createElement("li", null, "Click ", /* @__PURE__ */ react.createElement("b", null, "Change how the drive is unlocked at startup"), ". If this option doesn't show up, wait a minute and relaunch", " ", /* @__PURE__ */ react.createElement("b", null, "Manage BitLocker"), "."), /* @__PURE__ */ react.createElement("li", null, "Choose ", /* @__PURE__ */ react.createElement("b", null, "Enter a PIN (recommended)"), " and follow the prompts to create a PIN."), /* @__PURE__ */ react.createElement("li", null, "Close this window and select ", /* @__PURE__ */ react.createElement("b", null, "Refetch"), " on your ", /* @__PURE__ */ react.createElement("b", null, "My device"), " ", "page. This informs your organization that you have set a BitLocker PIN.")),
    /* @__PURE__ */ react.createElement(ModalFooter/* default */.A, { primaryButtons: /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit }, "Close") })
  );
};
/* harmony default export */ var BitLockerPinInstructionsModal_BitLockerPinInstructionsModal = (BitLockerPinInstructionsModal);

;// ./frontend/pages/hosts/details/DeviceUserPage/BitLockerPinInstructionsModal/index.ts



// EXTERNAL MODULE: ./frontend/hooks/useFormValidation.ts
var useFormValidation = __webpack_require__(688);
;// ./frontend/pages/hosts/details/DeviceUserPage/BitLockerPinModal/BitLockerPinModal.tsx

var BitLockerPinModal_async = (__this, __arguments, generator) => {
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









const BitLockerPinModal_baseClass = "bit-locker-pin-modal";
const PIN_MIN_LENGTH = 6;
const PIN_MAX_LENGTH = 20;
const PRINTABLE_ASCII = /^[ -~]+$/;
const POLL_TIMEOUT_MS = 9e4;
const CONTACT_ADMIN = "Try again or contact your IT admin.";
const STILL_WORKING = "PIN submitted but Mesh is still working on it. You\u2019ll see an update when this device responds.";
const asSentence = (reason) => /[.!?]$/.test(reason) ? reason : `${reason}.`;
const couldNotSetPIN = (reason) => `Couldn't set PIN. ${reason ? `${asSentence(reason)} ` : ""}${CONTACT_ADMIN}`;
const validateBitLockerPinForm = ({
  pin,
  confirmPin
}) => {
  const errors = {};
  if (!pin) {
    errors.pin = "Enter a PIN";
  } else if (pin.length < PIN_MIN_LENGTH || pin.length > PIN_MAX_LENGTH) {
    errors.pin = `Use ${PIN_MIN_LENGTH} to ${PIN_MAX_LENGTH} characters`;
  } else if (!PRINTABLE_ASCII.test(pin)) {
    errors.pin = "Use only letters, numbers, spaces, and symbols from a US English keyboard";
  }
  if (!errors.pin && confirmPin !== pin) {
    errors.confirmPin = "PINs must match";
  }
  return errors;
};
const BitLockerPinModal = ({
  deviceAuthToken,
  diskEncryption,
  dataUpdatedAt,
  onWaitingChange,
  onExit
}) => {
  const formId = (0,react.useId)();
  const [submittedAt, setSubmittedAt] = (0,react.useState)(null);
  const isWaiting = submittedAt !== null;
  const onExitRef = (0,react.useRef)(onExit);
  const onWaitingChangeRef = (0,react.useRef)(onWaitingChange);
  (0,react.useEffect)(() => {
    onExitRef.current = onExit;
    onWaitingChangeRef.current = onWaitingChange;
  });
  (0,react.useEffect)(() => {
    onWaitingChangeRef.current(isWaiting);
  }, [isWaiting]);
  const {
    formData,
    setField,
    getError,
    clearFieldError,
    validateField,
    handleSubmit,
    isSubmitting
  } = (0,useFormValidation/* default */.A)({
    initialFormData: { pin: "", confirmPin: "" },
    validate: validateBitLockerPinForm,
    // A PIN's leading and trailing spaces are part of the credential.
    skipTrim: ["pin", "confirmPin"]
  });
  const onValidSubmit = (_0) => BitLockerPinModal_async(null, [_0], function* ({ pin }) {
    try {
      yield disk_encryption/* default */.A.submitBitLockerPIN(deviceAuthToken, pin);
    } catch (e) {
      ToastNotification/* notify */.me.error(couldNotSetPIN((0,errors/* getErrorReason */.F3)(e)), { response: e });
      return;
    }
    setSubmittedAt(Date.now());
  });
  (0,react.useEffect)(() => {
    var _a, _b;
    if (submittedAt === null || dataUpdatedAt <= submittedAt) {
      return;
    }
    if (((_a = diskEncryption == null ? void 0 : diskEncryption.pin_request) == null ? void 0 : _a.status) === "failed") {
      setSubmittedAt(null);
      ToastNotification/* notify */.me.error(couldNotSetPIN(diskEncryption.pin_request.error));
      return;
    }
    if (((_b = diskEncryption == null ? void 0 : diskEncryption.pin_request) == null ? void 0 : _b.status) === "set" || (diskEncryption == null ? void 0 : diskEncryption.status) === "verified" || (diskEncryption == null ? void 0 : diskEncryption.status) === "verifying") {
      setSubmittedAt(null);
      ToastNotification/* notify */.me.success("Successfully created PIN.");
      onExitRef.current();
    }
  }, [submittedAt, dataUpdatedAt, diskEncryption]);
  (0,react.useEffect)(() => {
    if (submittedAt === null) {
      return void 0;
    }
    const timer = setTimeout(() => {
      setSubmittedAt(null);
      ToastNotification/* notify */.me.error(STILL_WORKING);
      onExitRef.current();
    }, POLL_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [submittedAt]);
  const isDisabled = isSubmitting || isWaiting;
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { title: "Create PIN", onExit, className: BitLockerPinModal_baseClass }, /* @__PURE__ */ react.createElement("form", { id: formId, onSubmit: handleSubmit(onValidSubmit) }, /* @__PURE__ */ react.createElement("p", null, "Set a BitLocker PIN to protect your data if this device is lost or stolen. You'll need to enter it each time your device starts up."), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "BitLocker PIN",
      name: "pin",
      type: "password",
      value: formData.pin,
      error: getError("pin"),
      onChange: (value) => setField("pin", value),
      onFocus: () => clearFieldError("pin"),
      onBlur: () => validateField("pin"),
      disabled: isDisabled,
      enableShowSecret: true,
      blockAutoComplete: true,
      autofocus: true,
      helpText: `Must be ${PIN_MIN_LENGTH}\u2013${PIN_MAX_LENGTH} characters. Keep it somewhere safe. This PIN isn't kept by Mesh or your IT team.`
    }
  ), /* @__PURE__ */ react.createElement(
    InputField/* default */.A,
    {
      label: "Confirm PIN",
      name: "confirmPin",
      type: "password",
      value: formData.confirmPin,
      error: getError("confirmPin"),
      onChange: (value) => setField("confirmPin", value),
      onFocus: () => clearFieldError("confirmPin"),
      onBlur: () => validateField("confirmPin"),
      disabled: isDisabled,
      enableShowSecret: true,
      blockAutoComplete: true
    }
  )), /* @__PURE__ */ react.createElement(
    ModalFooter/* default */.A,
    {
      primaryButtons: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* default */.A, { onClick: onExit, variant: "secondary", disabled: isDisabled }, "Cancel"), /* @__PURE__ */ react.createElement(
        Button/* default */.A,
        {
          type: "submit",
          formId,
          isLoading: isDisabled,
          loadingText: "Setting PIN...",
          disabled: isDisabled
        },
        "Save"
      ))
    }
  ));
};
/* harmony default export */ var BitLockerPinModal_BitLockerPinModal = (BitLockerPinModal);

;// ./frontend/pages/hosts/details/DeviceUserPage/BitLockerPinModal/index.ts



;// ./frontend/pages/hosts/details/DeviceUserPage/BypassModal/BypassModal.tsx




const BypassModal = ({ onCancel, onResolveLater, isLoading }) => {
  return /* @__PURE__ */ react.createElement(Modal/* default */.A, { onExit: onCancel, title: "Resolve later" }, /* @__PURE__ */ react.createElement("p", null, "This will allow you to log in with Okta once.", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("br", null), 'Please resolve all policies marked "Action required" to restore access for subsequent logins.'), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      type: "button",
      onClick: onResolveLater,
      isLoading,
      disabled: isLoading
    },
    "Resolve later"
  )));
};
/* harmony default export */ var BypassModal_BypassModal = (BypassModal);

;// ./frontend/pages/hosts/details/DeviceUserPage/BypassModal/index.ts



// EXTERNAL MODULE: ./node_modules/date-fns/isPast.mjs
var isPast = __webpack_require__(63933);
// EXTERNAL MODULE: ./node_modules/date-fns/addHours.mjs + 1 modules
var addHours = __webpack_require__(37466);
// EXTERNAL MODULE: ./frontend/components/InfoBanner/index.ts
var InfoBanner = __webpack_require__(38021);
;// ./frontend/pages/hosts/details/DeviceUserPage/components/DeviceUserBanners/DeviceUserBanners.tsx








const DeviceUserBanners_baseClass = "device-user-banners";
const DeviceUserBanners = ({
  hostPlatform,
  hostOsVersion,
  mdmEnrollmentStatus,
  mdmEnabledAndConfigured,
  connectedToFleetMdm,
  macDiskEncryptionStatus,
  diskEncryptionActionRequired,
  mdmManualEnrolmentUrl,
  onClickCreatePIN,
  onClickTurnOnMdm,
  diskEncryptionOSSetting,
  diskIsEncrypted,
  diskEncryptionKeyAvailable,
  onlyAllowAppleBusinessEnrollment,
  onTriggerEscrowLinuxKey,
  lastMdmEnrolledAt,
  detailUpdatedAt,
  depAssignedToFleet
}) => {
  const isMdmUnenrolled = mdmEnrollmentStatus === "Off" || mdmEnrollmentStatus === null;
  const mdmEnabledAndConnected = mdmEnabledAndConfigured && connectedToFleetMdm;
  const showTurnOnAppleMdmBanner = hostPlatform === "darwin" && isMdmUnenrolled && mdmEnabledAndConfigured && detailUpdatedAt && detailUpdatedAt > constants/* INITIAL_FLEET_DATE */.Hp;
  const isNewMdmEnrollment = !isMdmUnenrolled && !!lastMdmEnrolledAt && // if less than an hour has passed since the last MDM enrollment, we consider it a new
  // enrollment and won't show the disk encryption action required banner, as it's possible the
  // host just hasn't sent its disk encryption status to Mesh yet
  !(0,isPast/* isPast */.R)((0,addHours/* addHours */.L)(lastMdmEnrolledAt, 1));
  const showMacDiskEncryptionActionRequired = mdmEnabledAndConnected && macDiskEncryptionStatus === "action_required" && !isNewMdmEnrollment;
  const turnOnMdmButton = mdmManualEnrolmentUrl ? /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: mdmManualEnrolmentUrl,
      text: "Turn on MDM",
      newTab: true,
      variant: "banner-link"
    }
  ) : /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "link", onClick: onClickTurnOnMdm }, "Turn on MDM");
  const renderBanner = () => {
    if (onlyAllowAppleBusinessEnrollment && !depAssignedToFleet && (0,platform/* isAppleDevice */.lg)(hostPlatform) && isMdmUnenrolled) {
      return /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { color: "yellow" }, "Mobile device management (MDM) is off. This device isn't eligible for MDM because it isn't assigned to your organization by Apple Business. Contact your IT administrator if you believe this is an error.");
    }
    if (showTurnOnAppleMdmBanner) {
      return /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { color: "yellow", cta: turnOnMdmButton }, "Mobile device management (MDM) is off. MDM allows your organization to change settings and install software. This lets your organization keep your device up to date so you don't have to.");
    }
    if (showMacDiskEncryptionActionRequired) {
      return /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { color: "yellow" }, diskEncryptionActionRequired === "turn_on_encryption" ? /* @__PURE__ */ react.createElement(react.Fragment, null, "Disk encryption: Disk encryption is turned off. Contact your IT admin for additional instructions.") : /* @__PURE__ */ react.createElement(react.Fragment, null, "Disk encryption: Log out of your device or restart it to safeguard your data in case your device is lost or stolen. After, select", " ", /* @__PURE__ */ react.createElement("strong", null, "Refetch"), " to clear this banner."));
    }
    if (hostPlatform && (0,platform/* isDiskEncryptionSupportedLinuxPlatform */.sy)(
      hostPlatform,
      hostOsVersion != null ? hostOsVersion : ""
    ) && (diskEncryptionOSSetting == null ? void 0 : diskEncryptionOSSetting.status)) {
      if (!diskIsEncrypted) {
        return /* @__PURE__ */ react.createElement(
          InfoBanner/* default */.A,
          {
            cta: /* @__PURE__ */ react.createElement(
              CustomLink/* default */.A,
              {
                url: "https://fleetdm.com/learn-more-about/encrypt-linux-device",
                text: "Guide",
                variant: "banner-link"
              }
            ),
            color: "yellow"
          },
          "Disk encryption: Follow the instructions in the guide to encrypt your device. This lets your organization help you unlock your device if you forget your password."
        );
      }
      if (!diskEncryptionKeyAvailable) {
        return /* @__PURE__ */ react.createElement(
          InfoBanner/* default */.A,
          {
            cta: /* @__PURE__ */ react.createElement(
              Button/* default */.A,
              {
                variant: "secondary",
                onClick: onTriggerEscrowLinuxKey,
                className: "create-key-button"
              },
              "Create key"
            ),
            color: "yellow"
          },
          "Disk encryption: Create a new disk encryption key. This lets your organization help you unlock your device if you forget your passphrase."
        );
      }
    }
    if (hostPlatform === "windows" && (diskEncryptionOSSetting == null ? void 0 : diskEncryptionOSSetting.status) === "action_required") {
      if ((diskEncryptionOSSetting == null ? void 0 : diskEncryptionOSSetting.action_required) === "restart") {
        return /* @__PURE__ */ react.createElement(InfoBanner/* default */.A, { color: "yellow" }, "Disk encryption: Restart your device to finish protecting your data. Your organization will turn disk encryption protection back on after the restart.");
      }
      if ((diskEncryptionOSSetting == null ? void 0 : diskEncryptionOSSetting.action_required) === "create_pin") {
        return /* @__PURE__ */ react.createElement(
          InfoBanner/* default */.A,
          {
            color: "yellow",
            cta: /* @__PURE__ */ react.createElement(Button/* default */.A, { variant: "link", onClick: onClickCreatePIN }, "Create PIN")
          },
          "Disk encryption: Create a BitLocker PIN to protect your data if your device is lost or stolen.",
          !diskEncryptionOSSetting.fleetd_can_set_pin && /* @__PURE__ */ react.createElement(react.Fragment, null, " ", "After, select ", /* @__PURE__ */ react.createElement("strong", null, "Refetch"), " to clear this banner.")
        );
      }
    }
    return null;
  };
  const banner = renderBanner();
  return banner ? /* @__PURE__ */ react.createElement("div", { className: DeviceUserBanners_baseClass }, banner) : null;
};
/* harmony default export */ var DeviceUserBanners_DeviceUserBanners = (DeviceUserBanners);

;// ./frontend/pages/hosts/details/DeviceUserPage/components/DeviceUserBanners/index.ts



;// ./frontend/pages/hosts/details/DeviceUserPage/components/InfoButton/InfoButton.tsx



const InfoButton_baseClass = "info-button";
const InfoButton = ({ onClick }) => {
  return /* @__PURE__ */ react.createElement(
    Button/* default */.A,
    {
      className: InfoButton_baseClass,
      onClick,
      variant: "subdued",
      icon: "info",
      iconPosition: "right"
    },
    "Info"
  );
};
/* harmony default export */ var InfoButton_InfoButton = (InfoButton);

;// ./frontend/pages/hosts/details/DeviceUserPage/components/InfoButton/index.ts



// EXTERNAL MODULE: ./frontend/components/buttons/RevealButton/index.ts + 1 modules
var RevealButton = __webpack_require__(25087);
// EXTERNAL MODULE: ./frontend/components/Textarea/index.ts + 1 modules
var Textarea = __webpack_require__(10146);
;// ./frontend/pages/hosts/details/DeviceUserPage/helpers.ts

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


const DEFAULT_ERROR_MESSAGE = "refetch error.";
const getErrorMessage = (e, hostName) => {
  return `Host "${hostName}" ${DEFAULT_ERROR_MESSAGE}`;
};
const hasRemainingSetupSteps = (statuses) => {
  if (!statuses || statuses.length === 0) {
    return false;
  }
  return statuses.some((s) => ["pending", "running"].includes(s.status));
};
const getFailedSoftwareInstall = (statuses) => {
  if (!statuses || statuses.length === 0) {
    return null;
  }
  const failedSoftware = statuses.filter(
    (s) => (s.type === "software_install" || s.type === "software_script_run") && s.status === "failure"
  );
  if (failedSoftware.length === 0) {
    return null;
  }
  const firstWithError = failedSoftware.find((s) => s.error);
  return firstWithError != null ? firstWithError : failedSoftware[0];
};
const isSoftwareScriptSetup = (s) => {
  if (!s.source) return false;
  return interfaces_software/* SCRIPT_PACKAGE_SOURCES */.i0.includes(s.source);
};
const RECENTLY_ENROLLED_THRESHOLD_MS = 10 * 60 * 1e3;
const isRecentlyEnrolled = (lastEnrolledAt) => {
  if (!lastEnrolledAt) return false;
  const enrolledAt = new Date(lastEnrolledAt).getTime();
  if (isNaN(enrolledAt)) return false;
  const delta = Date.now() - enrolledAt;
  return delta >= 0 && delta < RECENTLY_ENROLLED_THRESHOLD_MS;
};
const isIPhone = (navigator) => /iPhone/i.test(navigator.userAgent);
const isIPad = (navigator) => /iPad/i.test(navigator.userAgent) || /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints !== void 0 && navigator.maxTouchPoints > 1;
const isMac = (navigator) => /Macintosh/i.test(navigator.userAgent) && !isIPad || /Mac OS X/i.test(navigator.userAgent);
const isSSORequiredError = (error) => {
  var _a;
  const response = error;
  return (response == null ? void 0 : response.status) === 401 && ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.sso_required) === true;
};
const ssoAttemptKey = (deviceAuthToken) => `fleet-device-sso-attempt:${deviceAuthToken}`;
const canAutoInitiateDeviceSSO = (deviceAuthToken) => {
  try {
    return sessionStorage.getItem(ssoAttemptKey(deviceAuthToken)) === null;
  } catch (e) {
    return false;
  }
};
const recordDeviceSSOAttempt = (deviceAuthToken) => {
  const key = ssoAttemptKey(deviceAuthToken);
  try {
    sessionStorage.setItem(key, "1");
    return sessionStorage.getItem(key) !== null;
  } catch (e) {
    return false;
  }
};
const clearDeviceSSOAttempt = (deviceAuthToken) => {
  try {
    sessionStorage.removeItem(ssoAttemptKey(deviceAuthToken));
    return true;
  } catch (e) {
    return false;
  }
};
const isMismatchedSSOUserError = (error) => (error == null ? void 0 : error.status) === 400 && (0,errors/* getErrorReason */.F3)(error) === "mismatched SSO user for this device";
const toEndUserIssues = (issues) => {
  if (issues.failing_unhidden_policies_count === void 0) {
    return issues;
  }
  const hiddenFailing = issues.failing_policies_count - issues.failing_unhidden_policies_count;
  return helpers_spreadProps(helpers_spreadValues({}, issues), {
    failing_policies_count: issues.failing_unhidden_policies_count,
    total_issues_count: issues.total_issues_count - hiddenFailing
  });
};

// EXTERNAL MODULE: ./frontend/components/Graphic/Graphic.tsx + 33 modules
var Graphic = __webpack_require__(72565);
;// ./frontend/components/TableContainer/DataTable/SetupScriptProcessCell/SetupScriptProcessCell.tsx



const SetupScriptProcessCell_baseClass = "setup-script-process-cell";
const SetupScriptProcessCell = ({ name }) => {
  return /* @__PURE__ */ react.createElement("span", { className: SetupScriptProcessCell_baseClass }, /* @__PURE__ */ react.createElement(Graphic/* default */.A, { name: "file-sh", className: `${SetupScriptProcessCell_baseClass}__icon` }), /* @__PURE__ */ react.createElement("div", null, "Run ", /* @__PURE__ */ react.createElement("b", null, name || "Unknown script")));
};
/* harmony default export */ var SetupScriptProcessCell_SetupScriptProcessCell = (SetupScriptProcessCell);

;// ./frontend/components/TableContainer/DataTable/SetupScriptProcessCell/index.ts



;// ./frontend/components/TableContainer/DataTable/SetupScriptStatusCell/SetupScriptStatusCell.tsx




const SetupScriptStatusCell_baseClass = "setup-script-status-cell";
const serverToUiStatus = (status) => {
  switch (status) {
    case "pending":
      return { label: "Pending", icon: "pending-outline" };
    case "running":
      return { label: "Running", icon: "spinner" };
    case "success":
      return { label: "Ran", icon: "success" };
    case "failure":
    case "cancelled":
      return { label: "Failed", icon: "error" };
    default:
      return { label: "Pending", icon: "pending-outline" };
  }
};
const SetupScriptStatusCell = ({ status }) => {
  const { label, icon } = serverToUiStatus(status);
  return /* @__PURE__ */ react.createElement("div", { className: SetupScriptStatusCell_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${SetupScriptStatusCell_baseClass}__icon` }, icon === "spinner" ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, { size: "x-small", delay: 0 }) : /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: icon })), /* @__PURE__ */ react.createElement("span", { className: `${SetupScriptStatusCell_baseClass}__label` }, label));
};
/* harmony default export */ var SetupScriptStatusCell_SetupScriptStatusCell = (SetupScriptStatusCell);

;// ./frontend/components/TableContainer/DataTable/SetupScriptStatusCell/index.ts



;// ./frontend/components/TableContainer/DataTable/SetupSoftwareProcessCell/SetupSoftwareProcessCell.tsx



const SetupSoftwareProcessCell_baseClass = "setup-software-process-cell";
const SetupSoftwareProcessCell = ({
  name,
  iconName,
  url
}) => {
  var _a;
  return /* @__PURE__ */ react.createElement("span", { className: SetupSoftwareProcessCell_baseClass }, /* @__PURE__ */ react.createElement(SoftwareIcon/* default */.A, { name: (_a = iconName != null ? iconName : name) != null ? _a : "", size: "small", url }), /* @__PURE__ */ react.createElement("div", null, "Install ", /* @__PURE__ */ react.createElement("b", null, name || "Unknown software")));
};
/* harmony default export */ var SetupSoftwareProcessCell_SetupSoftwareProcessCell = (SetupSoftwareProcessCell);

;// ./frontend/components/TableContainer/DataTable/SetupSoftwareProcessCell/index.ts



;// ./frontend/components/TableContainer/DataTable/SetupSoftwareStatusCell/SetupSoftwareStatusCell.tsx




const SetupSoftwareStatusCell_baseClass = "setup-software-status-cell";
const SetupSoftwareStatusCell_serverToUiStatus = (status) => {
  switch (status) {
    case "pending":
      return { label: "Pending", icon: "pending-outline" };
    case "running":
      return { label: "Installing", icon: "spinner" };
    case "success":
      return { label: "Installed", icon: "success" };
    case "failure":
    case "cancelled":
      return { label: "Failed", icon: "error" };
    default:
      return { label: "Pending", icon: "pending-outline" };
  }
};
const SetupSoftwareStatusCell = ({ status }) => {
  const { label, icon } = SetupSoftwareStatusCell_serverToUiStatus(status);
  return /* @__PURE__ */ react.createElement("div", { className: SetupSoftwareStatusCell_baseClass }, /* @__PURE__ */ react.createElement("div", { className: `${SetupSoftwareStatusCell_baseClass}__icon` }, icon === "spinner" ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, { size: "x-small", delay: 0 }) : /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: icon })), /* @__PURE__ */ react.createElement("span", { className: `${SetupSoftwareStatusCell_baseClass}__label` }, label));
};
/* harmony default export */ var SetupSoftwareStatusCell_SetupSoftwareStatusCell = (SetupSoftwareStatusCell);

;// ./frontend/components/TableContainer/DataTable/SetupSoftwareStatusCell/index.ts



;// ./frontend/pages/hosts/details/DeviceUserPage/components/SettingUpYourDevice/SetupStatusTable/SetupStatusTableConfig.tsx







const generateColumnConfigs = () => [
  {
    Header: "Process",
    accessor: "name",
    disableSortBy: true,
    Cell: (cellProps) => {
      const { name, type, display_name, icon_url } = cellProps.row.original;
      if (type === "software_install") {
        return /* @__PURE__ */ react.createElement(
          SetupSoftwareProcessCell_SetupSoftwareProcessCell,
          {
            name: (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(name, display_name),
            iconName: name != null ? name : "",
            url: icon_url
          }
        );
      }
      if (type === "script_run" || type === "software_script_run") {
        return /* @__PURE__ */ react.createElement(SetupScriptProcessCell_SetupScriptProcessCell, { name: name || "Unknown script" });
      }
      return null;
    }
  },
  {
    Header: "Status",
    accessor: "status",
    disableSortBy: true,
    Cell: (cellProps) => {
      const { status, type } = cellProps.row.original;
      if (type === "software_install") {
        return /* @__PURE__ */ react.createElement(SetupSoftwareStatusCell_SetupSoftwareStatusCell, { status: status || "pending" });
      }
      if (type === "script_run" || type === "software_script_run") {
        return /* @__PURE__ */ react.createElement(SetupScriptStatusCell_SetupScriptStatusCell, { status: status || "pending" });
      }
      return null;
    }
  }
];
/* harmony default export */ var SetupStatusTableConfig = (generateColumnConfigs);

;// ./frontend/pages/hosts/details/DeviceUserPage/components/SettingUpYourDevice/SetupStatusTable/SetupStatusTable.tsx





const SetupStatusTable_baseClass = "setup-status-table";
const SetupStatusTable = ({ statuses }) => {
  const columnConfigs = SetupStatusTableConfig();
  const order = ["software_install", "software_script_run", "script_run"];
  statuses.sort((a, b) => {
    return order.indexOf(a.type) - order.indexOf(b.type);
  });
  return /* @__PURE__ */ react.createElement("div", { className: SetupStatusTable_baseClass }, /* @__PURE__ */ react.createElement(
    TableContainer/* default */.A,
    {
      columnConfigs,
      data: statuses,
      isLoading: false,
      showMarkAllPages: false,
      isAllPagesSelected: false,
      disableTableHeader: false,
      disablePagination: true,
      manualSortBy: true,
      pageSize: statuses.length,
      emptyComponent: () => (
        // will never be empty
        /* @__PURE__ */ react.createElement(
          EmptyState/* default */.A,
          {
            header: "No setup steps to complete",
            info: "Setup items will appear here"
          }
        )
      )
    }
  ));
};
/* harmony default export */ var SetupStatusTable_SetupStatusTable = (SetupStatusTable);

;// ./frontend/pages/hosts/details/DeviceUserPage/components/SettingUpYourDevice/SetupStatusTable/index.ts



;// ./frontend/pages/hosts/details/DeviceUserPage/components/SettingUpYourDevice/SettingUpYourDevice.tsx











const SettingUpYourDevice_baseClass = "setting-up-your-device";
const SettingUpYourDevice = ({
  setupSteps,
  toggleInfoModal,
  requireAllSoftware,
  platform
}) => {
  const [showError, setShowError] = (0,react.useState)(false);
  let title;
  let message;
  const failedSoftware = requireAllSoftware ? getFailedSoftwareInstall(setupSteps) : null;
  if (failedSoftware) {
    title = "Device setup failed";
    message = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Your organization requires that critical software be installed before you use your device.", " ", /* @__PURE__ */ react.createElement("b", null, (0,SoftwarePage_helpers/* getDisplayedSoftwareName */.Yd)(
      failedSoftware.name,
      failedSoftware.display_name
    )), " ", "failed to install."), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "error-outline", color: "status-error", size: "small" }), " ", /* @__PURE__ */ react.createElement(
      TooltipWrapper/* default */.A,
      {
        tipContent: /* @__PURE__ */ react.createElement(react.Fragment, null, "Hold down power button/Touch ID for 5 seconds")
      },
      "Restart your device"
    ), " ", "to try again. If this keeps happening, please contact your IT admin."));
  } else if (hasRemainingSetupSteps(setupSteps)) {
    title = "Setting up your device...";
    message = /* @__PURE__ */ react.createElement("p", null, "Your computer is currently being configured by your organization. Please don\u2019t attempt to restart or shut down the computer unless prompted to do so.");
  } else {
    title = "Configuration complete";
    message = /* @__PURE__ */ react.createElement("p", null, "Your computer has been successfully configured. Setup will continue momentarily.");
  }
  return /* @__PURE__ */ react.createElement("div", { className: `${SettingUpYourDevice_baseClass} main-content device-user` }, /* @__PURE__ */ react.createElement(Card/* default */.A, { paddingSize: "xlarge" }, /* @__PURE__ */ react.createElement("div", { className: `${SettingUpYourDevice_baseClass}__header` }, /* @__PURE__ */ react.createElement("h2", null, title), !failedSoftware && platform !== "darwin" && /* @__PURE__ */ react.createElement(InfoButton_InfoButton, { onClick: toggleInfoModal })), message, !failedSoftware && /* @__PURE__ */ react.createElement(SetupStatusTable_SetupStatusTable, { statuses: setupSteps }), failedSoftware && /* @__PURE__ */ react.createElement("div", { className: `${SettingUpYourDevice_baseClass}__failure-state` }, /* @__PURE__ */ react.createElement(
    RevealButton/* default */.A,
    {
      className: `${SettingUpYourDevice_baseClass}__accordion-title`,
      isShowing: showError,
      showText: "Details",
      hideText: "Details",
      caretPosition: "after",
      onClick: () => setShowError(!showError)
    }
  ), showError && /* @__PURE__ */ react.createElement(Textarea/* default */.A, { variant: "code" }, failedSoftware.error))));
};
/* harmony default export */ var SettingUpYourDevice_SettingUpYourDevice = (SettingUpYourDevice);

;// ./frontend/pages/hosts/details/DeviceUserPage/components/SettingUpYourDevice/index.ts



// EXTERNAL MODULE: ./node_modules/date-fns/formatDistanceStrict.mjs
var formatDistanceStrict = __webpack_require__(31826);
;// ./frontend/pages/hosts/details/DeviceUserPage/CreateLinuxKeyModal/CreateLinuxKeyModal.tsx





const CreateLinuxKeyModal_baseClass = "create-linux-key-modal";
const formatRetryWait = (seconds) => seconds ? (0,formatDistanceStrict/* formatDistanceStrict */.k)(0, seconds * 1e3, {
  unit: "minute",
  roundingMethod: "ceil"
}) : "a few minutes";
const CreateLinuxKeyModal = ({
  isTriggeringCreateLinuxKey,
  isEscrowInFlight,
  retryAfterSeconds,
  onExit
}) => {
  const renderCloseCta = () => /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "submit", onClick: onExit, className: "save-loading" }, "Close"));
  const renderInFlightBody = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "Mesh is already asking this device for a disk encryption key."), /* @__PURE__ */ react.createElement("p", null, "On Ubuntu with TPM-backed disk encryption this happens in the background and no pop-up appears. Close this window and select ", /* @__PURE__ */ react.createElement("b", null, "Refetch"), " on your ", /* @__PURE__ */ react.createElement("b", null, "My device"), " page in a few minutes."), /* @__PURE__ */ react.createElement("p", null, "Otherwise:"), /* @__PURE__ */ react.createElement("ul", null, /* @__PURE__ */ react.createElement("li", null, "If the ", /* @__PURE__ */ react.createElement("b", null, "Enter disk encryption passphrase"), " pop-up is open, enter the passphrase used to encrypt your device during setup. The pop-up might be behind this window."), /* @__PURE__ */ react.createElement("li", null, "If you already entered your passphrase, Mesh is finishing up. Close this window, wait a couple of minutes, and select ", /* @__PURE__ */ react.createElement("b", null, "Refetch"), " on your ", /* @__PURE__ */ react.createElement("b", null, "My device"), " page."), /* @__PURE__ */ react.createElement("li", null, "If the pop-up closed before you entered your passphrase, wait", " ", formatRetryWait(retryAfterSeconds), ", then select ", /* @__PURE__ */ react.createElement("b", null, "Create key"), " ", "again.")), renderCloseCta());
  const renderModalBody = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("p", null, "On Ubuntu with TPM-backed disk encryption, Mesh backs up your recovery key automatically in the background \u2014 no further action is needed. The yellow ", /* @__PURE__ */ react.createElement("b", null, "Disk Encryption"), " banner will clear within 1 hour."), /* @__PURE__ */ react.createElement("p", null, "If a pop-up appears asking for your passphrase, follow these steps:"), /* @__PURE__ */ react.createElement("ol", null, /* @__PURE__ */ react.createElement("li", null, "Wait 30 seconds for the ", /* @__PURE__ */ react.createElement("b", null, "Enter disk encryption passphrase"), " pop-up to open."), /* @__PURE__ */ react.createElement("li", null, "In the pop-up, enter the passphrase used to encrypt your device during setup."), /* @__PURE__ */ react.createElement("li", null, "You're done. The yellow ", /* @__PURE__ */ react.createElement("b", null, "Disk Encryption"), " banner will go away in 1 hour. To remove this banner sooner, wait a couple of minutes for Mesh to create a new key. Then, close this window and select", " ", /* @__PURE__ */ react.createElement("b", null, "Refetch"), " on your ", /* @__PURE__ */ react.createElement("b", null, "My device"), " page."), /* @__PURE__ */ react.createElement("li", null, "If the banner doesn't go away after 1 hour, please contact your IT admin.")), renderCloseCta());
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Create key",
      onExit,
      onEnter: onExit,
      className: CreateLinuxKeyModal_baseClass,
      isLoading: isTriggeringCreateLinuxKey
    },
    isEscrowInFlight ? renderInFlightBody() : renderModalBody()
  );
};
/* harmony default export */ var CreateLinuxKeyModal_CreateLinuxKeyModal = (CreateLinuxKeyModal);

;// ./frontend/pages/hosts/details/DeviceUserPage/CreateLinuxKeyModal/index.ts



;// ./frontend/pages/hosts/details/DeviceUserPage/InfoModal/InfoModal.tsx






const InfoModal_baseClass = "device-user-info";
const InfoModal = ({
  onCancel,
  transparencyURL
}) => {
  return /* @__PURE__ */ react.createElement(
    Modal/* default */.A,
    {
      title: "Welcome to Fleet",
      onExit: onCancel,
      className: `${InfoModal_baseClass}__modal`
    },
    /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("p", null, "Your organization uses Mesh to check if all devices meet its security policies."), /* @__PURE__ */ react.createElement("p", null, "With Fleet, you and your team can secure your device, together."), /* @__PURE__ */ react.createElement("p", null, "Want to know what your organization can see?\xA0", /* @__PURE__ */ react.createElement(
      CustomLink/* default */.A,
      {
        url: transparencyURL || constants/* TRANSPARENCY_LINK */.qe,
        text: "Read about transparency",
        newTab: true,
        multiline: true
      }
    )), /* @__PURE__ */ react.createElement("div", { className: "modal-cta-wrap" }, /* @__PURE__ */ react.createElement(Button/* default */.A, { type: "button", onClick: onCancel }, "OK")))
  );
};
/* harmony default export */ var InfoModal_InfoModal = (InfoModal);

;// ./frontend/pages/hosts/details/DeviceUserPage/InfoModal/index.ts



;// ./frontend/pages/hosts/details/DeviceUserPage/useDeviceSSO.ts

var useDeviceSSO_async = (__this, __arguments, generator) => {
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



const useDeviceSSO = ({
  deviceAuthToken,
  errors,
  ssoErrorParam,
  isSetupOnly,
  hasSession
}) => {
  const [isNavigating, setIsNavigating] = (0,react.useState)(false);
  const [canAutoInitiate, setCanAutoInitiate] = (0,react.useState)(
    () => canAutoInitiateDeviceSSO(deviceAuthToken)
  );
  const isSSORequired = errors.some(isSSORequiredError);
  const redirectToIdP = (0,react.useCallback)(() => useDeviceSSO_async(null, null, function* () {
    setIsNavigating(true);
    try {
      const { url } = yield device_user/* default */.A.initiateDeviceSSO(deviceAuthToken);
      window.location.href = url;
    } catch (e) {
      setIsNavigating(false);
    }
  }), [deviceAuthToken]);
  const autoInitiateAllowed = canAutoInitiate && !ssoErrorParam && // The server exempts hosts still in Setup Experience; this keeps an IdP
  // prompt out of Setup Assistant even if that exemption ever misses.
  !isSetupOnly;
  (0,react.useEffect)(() => {
    if (isSSORequired && autoInitiateAllowed && !isNavigating) {
      setCanAutoInitiate(false);
      if (recordDeviceSSOAttempt(deviceAuthToken)) {
        redirectToIdP();
      }
    }
  }, [
    isSSORequired,
    autoInitiateAllowed,
    isNavigating,
    deviceAuthToken,
    redirectToIdP
  ]);
  (0,react.useEffect)(() => {
    if (hasSession && !isSSORequired) {
      setCanAutoInitiate(clearDeviceSSOAttempt(deviceAuthToken));
    }
  }, [hasSession, isSSORequired, deviceAuthToken]);
  const retry = (0,react.useCallback)(() => {
    setCanAutoInitiate(false);
    recordDeviceSSOAttempt(deviceAuthToken);
    redirectToIdP();
  }, [deviceAuthToken, redirectToIdP]);
  return {
    isSSORequired,
    isRedirecting: isNavigating || isSSORequired && autoInitiateAllowed,
    retry
  };
};
/* harmony default export */ var DeviceUserPage_useDeviceSSO = (useDeviceSSO);

;// ./frontend/pages/hosts/details/DeviceUserPage/DeviceUserPage.tsx

var DeviceUserPage_defProp = Object.defineProperty;
var DeviceUserPage_defProps = Object.defineProperties;
var DeviceUserPage_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DeviceUserPage_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DeviceUserPage_hasOwnProp = Object.prototype.hasOwnProperty;
var DeviceUserPage_propIsEnum = Object.prototype.propertyIsEnumerable;
var DeviceUserPage_defNormalProp = (obj, key, value) => key in obj ? DeviceUserPage_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DeviceUserPage_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DeviceUserPage_hasOwnProp.call(b, prop))
      DeviceUserPage_defNormalProp(a, prop, b[prop]);
  if (DeviceUserPage_getOwnPropSymbols)
    for (var prop of DeviceUserPage_getOwnPropSymbols(b)) {
      if (DeviceUserPage_propIsEnum.call(b, prop))
        DeviceUserPage_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DeviceUserPage_spreadProps = (a, b) => DeviceUserPage_defProps(a, DeviceUserPage_getOwnPropDescs(b));
var DeviceUserPage_async = (__this, __arguments, generator) => {
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























































const DeviceUserPage_baseClass = "device-user";
const getRetryAfterSeconds = (e) => {
  if (typeof e !== "object" || e === null || !("headers" in e)) {
    return void 0;
  }
  const headers = e.headers;
  const seconds = Number(headers == null ? void 0 : headers["retry-after"]);
  return Number.isFinite(seconds) && seconds > 0 ? seconds : void 0;
};
const fullWidthCardClass = `${DeviceUserPage_baseClass}__card--full-width`;
const PREMIUM_TAB_PATHS = [
  paths/* default */.A.DEVICE_USER_DETAILS_SELF_SERVICE,
  paths/* default */.A.DEVICE_USER_DETAILS,
  paths/* default */.A.DEVICE_USER_DETAILS_CONTROLS,
  paths/* default */.A.DEVICE_USER_DETAILS_SOFTWARE,
  paths/* default */.A.DEVICE_USER_DETAILS_POLICIES
];
const FREE_TAB_PATHS = [
  paths/* default */.A.DEVICE_USER_DETAILS,
  paths/* default */.A.DEVICE_USER_DETAILS_CONTROLS,
  paths/* default */.A.DEVICE_USER_DETAILS_SOFTWARE
];
const DEFAULT_CERTIFICATES_PAGE_SIZE = 10;
const DEFAULT_CERTIFICATES_PAGE = 0;
const BITLOCKER_PIN_POLL_INTERVAL = 5e3;
const hasPINRequestInFlight = (data) => {
  var _a, _b;
  const status = (_b = (_a = data == null ? void 0 : data.host.mdm.os_settings) == null ? void 0 : _a.disk_encryption.pin_request) == null ? void 0 : _b.status;
  return status === "pending" || status === "delivered";
};
const DeviceUserPage = ({
  location,
  router,
  params: { device_auth_token }
}) => {
  var _a, _b, _c, _d, _e;
  const deviceAuthToken = device_auth_token;
  const isMobileView = hooks_useIsMobileWidth();
  const isMobileDevice = isIPhone(navigator) || isIPad(navigator);
  const [showBypassModal, setShowBypassModal] = (0,react.useState)(false);
  const [showBitLockerPINModal, setShowBitLockerPINModal] = (0,react.useState)(false);
  const [isAwaitingPINOutcome, setIsAwaitingPINOutcome] = (0,react.useState)(false);
  const [showInfoModal, setShowInfoModal] = (0,react.useState)(false);
  const [showEnrollMdmModal, setShowEnrollMdmModal] = (0,react.useState)(false);
  const [enrollUrlError, setEnrollUrlError] = (0,react.useState)(null);
  const [selectedPolicy, setSelectedPolicy] = (0,react.useState)(
    null
  );
  const [showPolicyDetailsModal, setShowPolicyDetailsModal] = (0,react.useState)(false);
  const [showHiddenPolicies, setShowHiddenPolicies] = (0,react.useState)(false);
  const [showBootstrapPackageModal, setShowBootstrapPackageModal] = (0,react.useState)(
    false
  );
  const [showCreateLinuxKeyModal, setShowCreateLinuxKeyModal] = (0,react.useState)(false);
  const [isTriggeringCreateLinuxKey, setIsTriggeringCreateLinuxKey] = (0,react.useState)(
    false
  );
  const [isEscrowInFlight, setIsEscrowInFlight] = (0,react.useState)(false);
  const [escrowRetryAfterSeconds, setEscrowRetryAfterSeconds] = (0,react.useState)();
  const [
    hostSWForInventoryVersions,
    setHostSWForInventoryVersions
  ] = (0,react.useState)(null);
  const [
    selectedCertificate,
    setSelectedCertificate
  ] = (0,react.useState)(null);
  const [certificatePage, setCertificatePage] = (0,react.useState)(
    DEFAULT_CERTIFICATES_PAGE
  );
  const [sortCerts, setSortCerts] = (0,react.useState)(DeviceUserPage_spreadValues({}, certificates/* CERTIFICATES_DEFAULT_SORT */.Q3));
  const [queuedSelfServiceRefetch, setQueuedSelfServiceRefetch] = (0,react.useState)(
    false
  );
  const [refetchStartTime, setRefetchStartTime] = (0,react.useState)(null);
  const [showRefetchSpinner, setShowRefetchSpinner] = (0,react.useState)(false);
  const [darkMode, setDarkMode] = (0,react.useState)(() => (0,theme/* isDarkMode */.ud)());
  (0,react.useEffect)(() => {
    const onThemeChange = (e) => {
      setDarkMode(e.detail.dark);
    };
    window.addEventListener("fleet-theme-change", onThemeChange);
    return () => window.removeEventListener("fleet-theme-change", onThemeChange);
  }, []);
  const { data: deviceMacAdminsData } = (0,es.useQuery)(
    ["macadmins", deviceAuthToken],
    () => device_user/* default */.A.loadHostDetailsExtension(deviceAuthToken, "macadmins"),
    {
      enabled: !!deviceAuthToken,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      select: (data) => data.macadmins
    }
  );
  const {
    data: deviceCertificates,
    isLoading: isLoadingDeviceCertificates,
    isError: isErrorDeviceCertificates,
    error: deviceCertificatesError,
    refetch: refetchDeviceCertificates
  } = (0,es.useQuery)(
    [
      {
        scope: "device-certificates",
        token: deviceAuthToken,
        page: certificatePage,
        per_page: DEFAULT_CERTIFICATES_PAGE_SIZE,
        order_key: sortCerts.order_key,
        order_direction: sortCerts.order_direction
      }
    ],
    ({ queryKey }) => device_user/* default */.A.getDeviceCertificates(queryKey[0]),
    DeviceUserPage_spreadProps(DeviceUserPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      // FIXME: is it worth disabling for unsupported platforms? we'd have to workaround the a
      // catch-22 where we need to know the platform to know if it's supported but we also need to
      // be able to include the cert refetch in the hosts query hook.
      enabled: !!device_user/* default */.A,
      keepPreviousData: true,
      staleTime: 15e3
    })
  );
  const refetchExtensions = (0,react.useCallback)(() => {
    deviceCertificates && refetchDeviceCertificates();
  }, [deviceCertificates, refetchDeviceCertificates]);
  const resetHostRefetchStates = () => {
    setShowRefetchSpinner(false);
    setRefetchStartTime(null);
  };
  const isRefetching = ({
    refetch_requested,
    refetch_critical_queries_until
  }) => {
    if (!refetch_critical_queries_until) {
      return refetch_requested;
    }
    const now = /* @__PURE__ */ new Date();
    const refetchUntil = new Date(refetch_critical_queries_until);
    const isRefetchingCriticalQueries = !isNaN(refetchUntil.getTime()) && refetchUntil > now;
    return refetch_requested || isRefetchingCriticalQueries;
  };
  const {
    data: dupDetails,
    dataUpdatedAt: dupDetailsUpdatedAt,
    isLoading: isLoadingDupDetails,
    isPreviousData: isDupDetailsPreviousData,
    error: dupDetailsError,
    refetch: refetchDupDetails
  } = (0,es.useQuery)(
    ["host", deviceAuthToken, showHiddenPolicies],
    () => device_user/* default */.A.loadHostDetails({
      token: deviceAuthToken,
      exclude_software: true,
      include_hidden_policies: showHiddenPolicies
    }),
    {
      enabled: !!deviceAuthToken,
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      // A PIN the agent has not reported on yet resolves without the end user doing anything, so the banner clears itself.
      // A modal still owed an answer keeps polling on its own account. The modal gives up after a deadline, which is what bounds this.
      refetchInterval: (data) => isAwaitingPINOutcome || hasPINRequestInFlight(data) ? BITLOCKER_PIN_POLL_INTERVAL : false,
      onSuccess: ({ host: responseHost }) => {
        if (location.query.setup_only) {
          return;
        }
        if (isRefetching(responseHost)) {
          setShowRefetchSpinner(true);
          if (!refetchStartTime) {
            const isIOSOrIPadOS = responseHost.platform === "ios" || responseHost.platform === "ipados";
            if (responseHost.status === "online" || isIOSOrIPadOS || isRecentlyEnrolled(responseHost.last_enrolled_at)) {
              setRefetchStartTime(Date.now());
              setTimeout(() => {
                refetchDupDetails();
                refetchExtensions();
              }, HostDetailsPage/* REFETCH_HOST_DETAILS_POLLING_INTERVAL */.IU);
            } else {
              resetHostRefetchStates();
              ToastNotification/* notify */.me.error(
                `This host is offline. Please try refetching host vitals later.`
              );
            }
          } else {
            const totalElapsedTime = Date.now() - refetchStartTime;
            if (totalElapsedTime < 18e4) {
              const isIOSOrIPadOS = responseHost.platform === "ios" || responseHost.platform === "ipados";
              if (responseHost.status === "online" || isIOSOrIPadOS || isRecentlyEnrolled(responseHost.last_enrolled_at)) {
                setTimeout(() => {
                  refetchDupDetails();
                  refetchExtensions();
                }, HostDetailsPage/* REFETCH_HOST_DETAILS_POLLING_INTERVAL */.IU);
              } else {
                resetHostRefetchStates();
                ToastNotification/* notify */.me.error(
                  `This host is offline. Please try refetching host vitals later.`
                );
              }
            } else {
              resetHostRefetchStates();
              const isIOSOrIPadOS = responseHost.platform === "ios" || responseHost.platform === "ipados";
              if (!isIOSOrIPadOS) {
                ToastNotification/* notify */.me.error(
                  "Refetch sent but vitals are taking longer than expected to load. You\u2019ll see an update when the host responds."
                );
              }
            }
          }
        } else {
          resetHostRefetchStates();
        }
      }
    }
  );
  const isAuthenticationError = dupDetailsError && dupDetailsError.status === 401;
  const {
    host,
    license,
    org_logo_url: orgLogoUrl = "",
    org_logo_url_light_background: orgLogoUrlLightBackground = "",
    org_logo_url_dark_mode: orgLogoUrlDarkMode = "",
    org_logo_url_light_mode: orgLogoUrlLightMode = "",
    org_contact_url: orgContactURL = "",
    global_config: globalConfig = null,
    self_service: hasSelfService = false
  } = dupDetails || {};
  const darkLogoURL = orgLogoUrlDarkMode || orgLogoUrl;
  const lightLogoURL = orgLogoUrlLightMode || orgLogoUrlLightBackground;
  const orgLogoURL = darkMode ? darkLogoURL : lightLogoURL;
  const isPremiumTier = (license == null ? void 0 : license.tier) === "premium";
  const diskEncryptionSetting = (_a = host == null ? void 0 : host.mdm.os_settings) == null ? void 0 : _a.disk_encryption;
  const needsBitLockerPIN = (diskEncryptionSetting == null ? void 0 : diskEncryptionSetting.action_required) === "create_pin";
  (0,react.useEffect)(() => {
    if (!location.query.create_pin || !host) {
      return;
    }
    if (needsBitLockerPIN) {
      setShowBitLockerPINModal(true);
    }
    router.replace(
      (0,url/* getPathWithQueryParams */.M8)(
        location.pathname,
        (0,lodash.omit)(location.query, "create_pin")
      )
    );
  }, [host, needsBitLockerPIN, location, router]);
  const isAppleHost = (0,platform/* isAppleDevice */.lg)(host == null ? void 0 : host.platform);
  const isIOSIPadOS = (host == null ? void 0 : host.platform) === "ios" || (host == null ? void 0 : host.platform) === "ipados";
  const isSetupExperienceSoftwareEnabledPlatform = (0,platform/* isLinuxLike */.eX)((host == null ? void 0 : host.platform) || "") || (host == null ? void 0 : host.platform) === "windows" || (0,platform/* isMacOS */.U0)((host == null ? void 0 : host.platform) || "");
  const isManualAppleEnrollmentBlocked = (_b = globalConfig == null ? void 0 : globalConfig.mdm.only_allow_apple_business_enrollment) != null ? _b : false;
  const isFleetMdmManualUnenrolledMac = !!(globalConfig == null ? void 0 : globalConfig.mdm.enabled_and_configured) && !!host && !host.dep_assigned_to_fleet && host.platform === "darwin" && (host.mdm.enrollment_status === "Off" || host.mdm.enrollment_status === null);
  const checkForSetupExperienceSoftware = isSetupExperienceSoftwareEnabledPlatform && isPremiumTier;
  const controls = (0,react.useMemo)(
    () => {
      var _a2;
      return host ? (_a2 = (0,OSSettingsTableConfig/* generateTableData */.uf)(host.mdm, host.platform)) != null ? _a2 : [] : [];
    },
    [host]
  );
  const summaryData = (0,utilities_helpers/* normalizeEmptyValues */.LM)((0,lodash.pick)(host, constants/* HOST_SUMMARY_DATA */.Xf));
  const deviceSummaryData = (host == null ? void 0 : host.issues) ? DeviceUserPage_spreadProps(DeviceUserPage_spreadValues({}, summaryData), { issues: toEndUserIssues(host.issues) }) : summaryData;
  const vitalsData = (0,utilities_helpers/* normalizeEmptyValues */.LM)((0,lodash.pick)(host, constants/* HOST_VITALS_DATA */.cl));
  const {
    data: setupStepStatuses,
    isLoading: isLoadingSetupSteps,
    isError: isErrorSetupSteps,
    error: setupStepsError
  } = (0,es.useQuery)(
    ["software-setup-statuses", deviceAuthToken],
    () => device_user/* default */.A.getSetupExperienceStatuses({ token: deviceAuthToken }),
    DeviceUserPage_spreadProps(DeviceUserPage_spreadValues({}, constants/* DEFAULT_USE_QUERY_OPTIONS */.QL), {
      enabled: checkForSetupExperienceSoftware,
      // this can only become true once the above `dupResponse` is defined by its associated API call response, ensuring this call only fires once the frontend knows if this is a Mesh Premium instance
      refetchInterval: (data) => hasRemainingSetupSteps(data) ? 5e3 : false,
      // refetch every 5s until finished
      refetchIntervalInBackground: true,
      select: (response) => {
        var _a2, _b2;
        return [
          ...((_a2 = response.setup_experience_results.software) != null ? _a2 : []).map((s) => DeviceUserPage_spreadProps(DeviceUserPage_spreadValues({}, s), {
            type: isSoftwareScriptSetup(s) ? "software_script_run" : "software_install"
          })),
          ...((_b2 = response.setup_experience_results.scripts) != null ? _b2 : []).map((s) => DeviceUserPage_spreadProps(DeviceUserPage_spreadValues({}, s), {
            type: "script_run"
          }))
        ];
      }
    })
  );
  const {
    data: mdmManualEnrollUrl,
    // isLoading, // not used; see related comment in onClickTurnOnMdm below
    error: mdmManualEnrollUrlError
  } = (0,es.useQuery)(
    ["mdm_mandual_enroll_url", deviceAuthToken],
    () => device_user/* default */.A.getMdmManualEnrollUrl(deviceAuthToken),
    {
      enabled: !!deviceAuthToken && isFleetMdmManualUnenrolledMac && !isManualAppleEnrollmentBlocked,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      select: (data) => data.enroll_url
    }
  );
  const {
    isSSORequired,
    isRedirecting: isRedirectingToSSO,
    retry: retryDeviceSSO
  } = DeviceUserPage_useDeviceSSO({
    deviceAuthToken,
    errors: [
      dupDetailsError,
      deviceCertificatesError,
      setupStepsError,
      mdmManualEnrollUrlError
    ],
    ssoErrorParam: location.query.sso_error,
    isSetupOnly: !!location.query.setup_only,
    hasSession: !!dupDetails
  });
  const { bypassConditionalAccess } = device_user/* default */.A;
  const [isLoadingBypass, setIsLoadingBypass] = (0,react.useState)(false);
  const toggleShowBypassModal = (0,react.useCallback)(() => {
    setShowBypassModal(!showBypassModal);
  }, [showBypassModal, setShowBypassModal]);
  const toggleInfoModal = (0,react.useCallback)(() => {
    setShowInfoModal(!showInfoModal);
  }, [showInfoModal, setShowInfoModal]);
  const toggleEnrollMdmModal = (0,react.useCallback)(() => {
    setShowEnrollMdmModal(!showEnrollMdmModal);
  }, [showEnrollMdmModal, setShowEnrollMdmModal]);
  const onClickTurnOnMdm = (0,react.useCallback)(() => DeviceUserPage_async(null, null, function* () {
    if (host == null ? void 0 : host.dep_assigned_to_fleet) {
      setShowEnrollMdmModal(true);
      return;
    }
    setEnrollUrlError(
      `Failed to get enrollment URL. ${mdmManualEnrollUrlError}`
    );
  }), [host == null ? void 0 : host.dep_assigned_to_fleet, mdmManualEnrollUrlError]);
  const togglePolicyDetailsModal = (0,react.useCallback)(
    (policy) => {
      setShowPolicyDetailsModal(!showPolicyDetailsModal);
      setSelectedPolicy(policy);
    },
    [showPolicyDetailsModal, setShowPolicyDetailsModal, setSelectedPolicy]
  );
  const bootstrapPackageData = {
    status: (_c = host == null ? void 0 : host.mdm.setup_experience) == null ? void 0 : _c.bootstrap_package_status,
    details: (_d = host == null ? void 0 : host.mdm.setup_experience) == null ? void 0 : _d.details,
    name: (_e = host == null ? void 0 : host.mdm.setup_experience) == null ? void 0 : _e.bootstrap_package_name
  };
  const onCancelPolicyDetailsModal = (0,react.useCallback)(() => {
    setShowPolicyDetailsModal(false);
    setSelectedPolicy(null);
  }, [setShowPolicyDetailsModal, setSelectedPolicy]);
  const onRefetchHost = (0,react.useCallback)(() => DeviceUserPage_async(null, null, function* () {
    if (!host) return;
    setShowRefetchSpinner(true);
    if ((0,mdm/* canTriggerAPNSPing */.xU)(host)) {
      device_user/* default */.A.apnsPing(deviceAuthToken).catch((error) => {
        ToastNotification/* notify */.me.error("Failed to send APNS ping", { response: error });
      });
    }
    try {
      yield device_user/* default */.A.refetch(deviceAuthToken);
      setRefetchStartTime(Date.now());
      setTimeout(() => {
        refetchDupDetails();
        refetchExtensions();
      }, HostDetailsPage/* REFETCH_HOST_DETAILS_POLLING_INTERVAL */.IU);
    } catch (error) {
      ToastNotification/* notify */.me.error(getErrorMessage(error, host.display_name), {
        response: error
      });
      resetHostRefetchStates();
    }
  }), [host, deviceAuthToken, refetchDupDetails, refetchExtensions]);
  (0,react.useEffect)(() => {
    if (queuedSelfServiceRefetch && !showRefetchSpinner) {
      setQueuedSelfServiceRefetch(false);
      onRefetchHost();
    }
  }, [queuedSelfServiceRefetch, showRefetchSpinner, onRefetchHost]);
  const requestRefetch = () => {
    if (showRefetchSpinner) {
      setQueuedSelfServiceRefetch(true);
    } else {
      onRefetchHost();
    }
  };
  const pageHeader = "My device";
  (0,react.useEffect)(() => {
    document.title = `${pageHeader} | ${constants/* DOCUMENT_TITLE_SUFFIX */.DI}`;
  }, [location.pathname, host, pageHeader]);
  const renderActionButtons = () => {
    return /* @__PURE__ */ react.createElement("div", { className: `${DeviceUserPage_baseClass}__action-button-container` }, /* @__PURE__ */ react.createElement(InfoButton_InfoButton, { onClick: toggleInfoModal }));
  };
  const onTriggerEscrowLinuxKey = () => DeviceUserPage_async(null, null, function* () {
    setIsTriggeringCreateLinuxKey(true);
    setIsEscrowInFlight(false);
    setShowCreateLinuxKeyModal(true);
    try {
      yield disk_encryption/* default */.A.triggerLinuxDiskEncryptionKeyEscrow(
        deviceAuthToken
      );
    } catch (e) {
      if ((0,errors/* hasStatusKey */.S0)(e) && e.status === 409) {
        setIsEscrowInFlight(true);
        setEscrowRetryAfterSeconds(getRetryAfterSeconds(e));
      } else {
        ToastNotification/* notify */.me.error("Failed to trigger key creation.", { response: e });
        setShowCreateLinuxKeyModal(false);
      }
    } finally {
      setIsTriggeringCreateLinuxKey(false);
    }
  });
  const onSelectCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };
  const resendProfile = (0,react.useCallback)(
    (profileUUID) => {
      return device_user/* default */.A.resendProfile(deviceAuthToken, profileUUID);
    },
    [deviceAuthToken]
  );
  const renderDeviceUserPage = () => {
    var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const displayedPolicies = isDupDetailsPreviousData ? [] : (host == null ? void 0 : host.policies) || [];
    const failingPoliciesCount = displayedPolicies.filter(
      (p) => p.response === "fail"
    ).length;
    const failedControlsCount = (0,OSSettingsTableConfig/* countFailedControls */.lD)(controls);
    const showControlsTab = !!host && (0,Controls_helpers/* shouldShowControlsTab */.ai)({
      platform: host.platform,
      osVersion: host.os_version,
      enrollmentStatus: (_b2 = (_a2 = host.mdm) == null ? void 0 : _a2.enrollment_status) != null ? _b2 : null,
      hasControls: controls.length > 0
    });
    let tabPaths = (isPremiumTier ? PREMIUM_TAB_PATHS : FREE_TAB_PATHS).map((t) => t(deviceAuthToken));
    if (!hasSelfService) {
      tabPaths = tabPaths.filter((path) => !path.includes("self-service"));
    }
    if (!showControlsTab) {
      tabPaths = tabPaths.filter((path) => !path.endsWith("/controls"));
    }
    const findSelectedTab = (pathname) => {
      const cleanPath = pathname.split("?")[0];
      const matchingIndices = tabPaths.map((tabPath, idx) => ({ tabPath, idx })).filter(({ tabPath }) => cleanPath.startsWith(tabPath));
      if (matchingIndices.length === 0) {
        return -1;
      }
      return matchingIndices.reduce(
        (best, current) => current.tabPath.length > best.tabPath.length ? current : best
      ).idx;
    };
    if (!isLoadingDupDetails && host && findSelectedTab(location.pathname) === -1) {
      router.push(tabPaths[0]);
    }
    const isSoftwareEnabled = !!((_c2 = globalConfig == null ? void 0 : globalConfig.features) == null ? void 0 : _c2.enable_software_inventory);
    if (!host || isLoadingDupDetails || isLoadingDeviceCertificates || isLoadingSetupSteps) {
      return /* @__PURE__ */ react.createElement(Spinner/* default */.A, DeviceUserPage_spreadValues({}, isMobileView && { variant: "mobile" }));
    }
    if (isErrorSetupSteps) {
      return /* @__PURE__ */ react.createElement("div", { className: `${DeviceUserPage_baseClass} main-content` }, /* @__PURE__ */ react.createElement(
        DeviceUserError/* default */.A,
        {
          isMobileView,
          isMobileDevice,
          isErrorSetupSteps
        }
      ));
    }
    if (checkForSetupExperienceSoftware && (hasRemainingSetupSteps(setupStepStatuses) || location.query.setup_only)) {
      return /* @__PURE__ */ react.createElement(
        SettingUpYourDevice_SettingUpYourDevice,
        {
          setupSteps: setupStepStatuses || [],
          requireAllSoftware: (_e2 = isAppleHost && ((_d2 = globalConfig == null ? void 0 : globalConfig.mdm) == null ? void 0 : _d2.require_all_software_macos)) != null ? _e2 : false,
          toggleInfoModal,
          platform: host.platform
        }
      );
    }
    const shouldShowMobileUI = isIOSIPadOS || isMobileView;
    if (shouldShowMobileUI) {
      if (isIOSIPadOS && !location.pathname.includes("/self-service") && hasSelfService) {
        router.replace(paths/* default */.A.DEVICE_USER_DETAILS_SELF_SERVICE(deviceAuthToken));
        return /* @__PURE__ */ react.createElement(Spinner/* default */.A, null);
      }
      return /* @__PURE__ */ react.createElement("div", { className: `${DeviceUserPage_baseClass} main-content` }, /* @__PURE__ */ react.createElement("div", { className: "device-user-mobile" }, /* @__PURE__ */ react.createElement(
        SelfService,
        {
          contactUrl: orgContactURL,
          deviceToken: deviceAuthToken,
          isSoftwareEnabled: true,
          pathname: location.pathname,
          queryParams: parseSelfServiceQueryParams(location.query),
          router,
          refetchHostDetails: requestRefetch,
          isHostDetailsPolling: showRefetchSpinner,
          hostSoftwareUpdatedAt: host.software_updated_at,
          hostDisplayName: (host == null ? void 0 : host.hostname) || "",
          isMobileView: shouldShowMobileUI,
          mdmEnrollmentStatus: host.mdm.enrollment_status || "Off"
        }
      )));
    }
    const hasAnyCriticalFailingCAPolicy = (_f = host == null ? void 0 : host.policies) == null ? void 0 : _f.some(
      (p) => p.response === "fail" && p.conditional_access_enabled && p.critical
    );
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { className: `${DeviceUserPage_baseClass} main-content` }, /* @__PURE__ */ react.createElement(
      DeviceUserBanners_DeviceUserBanners,
      {
        hostPlatform: host.platform,
        hostOsVersion: host.os_version,
        mdmEnrollmentStatus: host.mdm.enrollment_status,
        mdmEnabledAndConfigured: !!(globalConfig == null ? void 0 : globalConfig.mdm.enabled_and_configured),
        connectedToFleetMdm: !!host.mdm.connected_to_fleet,
        macDiskEncryptionStatus: (_h = (_g = host.mdm.apple_settings) == null ? void 0 : _g.disk_encryption) != null ? _h : null,
        diskEncryptionActionRequired: (_j = (_i = host.mdm.apple_settings) == null ? void 0 : _i.action_required) != null ? _j : null,
        onClickCreatePIN: () => setShowBitLockerPINModal(true),
        onClickTurnOnMdm,
        onTriggerEscrowLinuxKey,
        diskEncryptionOSSetting: (_k = host.mdm.os_settings) == null ? void 0 : _k.disk_encryption,
        diskIsEncrypted: host.disk_encryption_enabled,
        diskEncryptionKeyAvailable: host.mdm.encryption_key_available,
        mdmManualEnrolmentUrl: mdmManualEnrollUrl,
        lastMdmEnrolledAt: host.last_mdm_enrolled_at,
        detailUpdatedAt: host.detail_updated_at,
        depAssignedToFleet: host.dep_assigned_to_fleet || false,
        onlyAllowAppleBusinessEnrollment: !!(globalConfig == null ? void 0 : globalConfig.mdm.only_allow_apple_business_enrollment)
      }
    ), /* @__PURE__ */ react.createElement(
      HostHeader/* default */.A,
      {
        summaryData,
        showRefetchSpinner,
        onRefetchHost,
        renderActionsDropdown: renderActionButtons,
        deviceUser: true,
        deviceUserHeader: pageHeader,
        hostMdmEnrollmentStatus: null
      }
    ), /* @__PURE__ */ react.createElement(TabNav/* default */.A, { className: `${DeviceUserPage_baseClass}__tab-nav` }, /* @__PURE__ */ react.createElement(
      esm/* Tabs */.tU,
      {
        selectedIndex: findSelectedTab(location.pathname),
        onSelect: (i) => router.push(tabPaths[i])
      },
      /* @__PURE__ */ react.createElement(esm/* TabList */.wb, null, isPremiumTier && isSoftwareEnabled && hasSelfService && /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Self service")), /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Details")), showControlsTab && /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, { count: failedControlsCount, countVariant: "alert" }, "Controls")), isSoftwareEnabled && /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, null, "Software")), isPremiumTier && /* @__PURE__ */ react.createElement(esm/* Tab */.oz, null, /* @__PURE__ */ react.createElement(TabText/* default */.A, { count: failingPoliciesCount, countVariant: "alert" }, "Policies"))),
      isPremiumTier && isSoftwareEnabled && hasSelfService && /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement(
        SelfService,
        {
          contactUrl: orgContactURL,
          deviceToken: deviceAuthToken,
          isSoftwareEnabled: true,
          pathname: location.pathname,
          queryParams: parseSelfServiceQueryParams(location.query),
          router,
          refetchHostDetails: requestRefetch,
          isHostDetailsPolling: showRefetchSpinner,
          hostSoftwareUpdatedAt: host.software_updated_at,
          hostDisplayName: (host == null ? void 0 : host.hostname) || "",
          mdmEnrollmentStatus: host.mdm.enrollment_status || "Off"
        }
      )),
      /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, { className: `${DeviceUserPage_baseClass}__details-panel` }, /* @__PURE__ */ react.createElement(
        HostSummary/* default */.A,
        {
          className: fullWidthCardClass,
          summaryData: deviceSummaryData,
          bootstrapPackageData,
          isPremiumTier
        }
      ), /* @__PURE__ */ react.createElement(
        Vitals/* default */.A,
        {
          className: fullWidthCardClass,
          vitalsData,
          munki: deviceMacAdminsData == null ? void 0 : deviceMacAdminsData.munki
        }
      ), /* @__PURE__ */ react.createElement(
        User/* default */.A,
        {
          className: fullWidthCardClass,
          canWriteEndUser: false,
          endUsers: (_l = host.end_users) != null ? _l : []
        }
      ), isAppleHost && !!(deviceCertificates == null ? void 0 : deviceCertificates.certificates.length) && /* @__PURE__ */ react.createElement(
        Certificates/* default */.A,
        {
          className: fullWidthCardClass,
          isMyDevicePage: true,
          data: deviceCertificates,
          isError: isErrorDeviceCertificates,
          page: certificatePage,
          pageSize: DEFAULT_CERTIFICATES_PAGE_SIZE,
          sortHeader: sortCerts.order_key,
          sortDirection: sortCerts.order_direction,
          hostPlatform: host.platform,
          onSelectCertificate,
          onNextPage: () => setCertificatePage(certificatePage + 1),
          onPreviousPage: () => setCertificatePage(certificatePage - 1),
          onSortChange: setSortCerts
        }
      )),
      showControlsTab && /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement(
        Controls/* default */.A,
        {
          controls,
          hostDisplayName: host.display_name,
          isDeviceUser: true,
          isConnectedToFleetMdm: !!host.mdm.connected_to_fleet,
          canResendProfiles: isAppleHost || (0,platform/* isWindows */.uF)(host.platform),
          resendRequest: resendProfile,
          onProfileResent: refetchDupDetails,
          router
        }
      )),
      isSoftwareEnabled && /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement(
        Software/* default */.A,
        {
          id: deviceAuthToken,
          softwareUpdatedAt: host.software_updated_at,
          router,
          pathname: location.pathname,
          queryParams: (0,HostSoftware/* parseHostSoftwareQueryParams */.J)(location.query),
          isMyDevicePage: true,
          isPremiumTier,
          platform: host.platform,
          hostTeamId: host.team_id || 0,
          isSoftwareEnabled,
          onShowInventoryVersions: setHostSWForInventoryVersions
        }
      )),
      isPremiumTier && /* @__PURE__ */ react.createElement(esm/* TabPanel */.Kp, null, /* @__PURE__ */ react.createElement(
        Policies/* default */.A,
        {
          policies: displayedPolicies,
          isLoading: isDupDetailsPreviousData,
          deviceUser: true,
          showHiddenPolicies,
          onToggleShowHiddenPolicies: () => setShowHiddenPolicies((current) => !current),
          togglePolicyDetailsModal,
          closePolicyDetailsModal: onCancelPolicyDetailsModal,
          hostPlatform: (host == null ? void 0 : host.platform) || "",
          conditionalAccessEnabled: (_m = globalConfig == null ? void 0 : globalConfig.features) == null ? void 0 : _m.enable_conditional_access,
          conditionalAccessBypassed: host == null ? void 0 : host.conditional_access_bypassed
        }
      ))
    )), showEnrollMdmModal && host.dep_assigned_to_fleet ? /* @__PURE__ */ react.createElement(AutoEnrollMdmModal_AutoEnrollMdmModal, { host, onCancel: toggleEnrollMdmModal }) : null, showBitLockerPINModal && ((diskEncryptionSetting == null ? void 0 : diskEncryptionSetting.fleetd_can_set_pin) ? /* @__PURE__ */ react.createElement(
      BitLockerPinModal_BitLockerPinModal,
      {
        deviceAuthToken,
        diskEncryption: diskEncryptionSetting,
        dataUpdatedAt: dupDetailsUpdatedAt,
        onWaitingChange: (isWaiting) => {
          setIsAwaitingPINOutcome(isWaiting);
          if (isWaiting) {
            refetchDupDetails({ cancelRefetch: true });
          }
        },
        onExit: () => {
          setIsAwaitingPINOutcome(false);
          setShowBitLockerPINModal(false);
        }
      }
    ) : /* @__PURE__ */ react.createElement(
      BitLockerPinInstructionsModal_BitLockerPinInstructionsModal,
      {
        onExit: () => setShowBitLockerPINModal(false)
      }
    ))), !!host && showPolicyDetailsModal && /* @__PURE__ */ react.createElement(
      PolicyDetailsModal/* default */.A,
      {
        onCancel: onCancelPolicyDetailsModal,
        policy: selectedPolicy,
        isDeviceUser: true,
        onResolveLater: ((_n = globalConfig == null ? void 0 : globalConfig.features) == null ? void 0 : _n.enable_conditional_access) && ((_o = globalConfig.features) == null ? void 0 : _o.enable_conditional_access_bypass) && !hasAnyCriticalFailingCAPolicy ? () => {
          onCancelPolicyDetailsModal();
          setShowBypassModal(true);
        } : void 0
      }
    ), showBootstrapPackageModal && bootstrapPackageData.details && bootstrapPackageData.name && /* @__PURE__ */ react.createElement(
      BootstrapPackageModal/* default */.A,
      {
        packageName: bootstrapPackageData.name,
        details: bootstrapPackageData.details,
        onClose: () => setShowBootstrapPackageModal(false)
      }
    ), showCreateLinuxKeyModal && !!host && /* @__PURE__ */ react.createElement(
      CreateLinuxKeyModal_CreateLinuxKeyModal,
      {
        isTriggeringCreateLinuxKey,
        isEscrowInFlight,
        retryAfterSeconds: escrowRetryAfterSeconds,
        onExit: () => {
          setShowCreateLinuxKeyModal(false);
        }
      }
    ), hostSWForInventoryVersions && !!host && /* @__PURE__ */ react.createElement(
      InventoryVersionsModal/* default */.A,
      {
        hostSoftware: hostSWForInventoryVersions,
        onExit: () => setHostSWForInventoryVersions(null)
      }
    ), selectedCertificate && /* @__PURE__ */ react.createElement(
      CertificateDetailsModal/* default */.A,
      {
        certificate: selectedCertificate,
        onExit: () => setSelectedCertificate(null)
      }
    ));
  };
  const renderDeviceSSOState = () => {
    if (isRedirectingToSSO) {
      return /* @__PURE__ */ react.createElement("div", { className: `${DeviceUserPage_baseClass}__sso-redirect`, role: "status" }, /* @__PURE__ */ react.createElement(Spinner/* default */.A, DeviceUserPage_spreadValues({}, isMobileView && { variant: "mobile" })), /* @__PURE__ */ react.createElement("span", null, "Redirecting to your organization\u2019s sign-in page\u2026"));
    }
    return /* @__PURE__ */ react.createElement(
      DeviceUserError/* default */.A,
      {
        isMobileView,
        isMobileDevice,
        ssoError: "sign_in_failed",
        onRetry: retryDeviceSSO
      }
    );
  };
  const coreWrapperClassnames = classnames_default()("core-wrapper", {
    "low-width-supported": !(0,helpers/* default */.A)(location.pathname)
  });
  const siteNavContainerClassnames = classnames_default()("site-nav-container", {
    "low-width-supported": !(0,helpers/* default */.A)(location.pathname)
  });
  const renderDeviceUserBody = () => {
    if (isSSORequired) {
      return renderDeviceSSOState();
    }
    if (dupDetailsError && !dupDetails || isAuthenticationError || enrollUrlError) {
      return /* @__PURE__ */ react.createElement(
        DeviceUserError/* default */.A,
        {
          isMobileView,
          isMobileDevice,
          isAuthenticationError: !!isAuthenticationError,
          ssoError: isMismatchedSSOUserError(dupDetailsError) ? "mismatched_sso_user" : void 0
        }
      );
    }
    return /* @__PURE__ */ react.createElement("div", { className: coreWrapperClassnames }, renderDeviceUserPage());
  };
  return /* @__PURE__ */ react.createElement("div", { className: "app-wrap" }, (0,helpers/* default */.A)(location.pathname) && /* @__PURE__ */ react.createElement(UnsupportedScreenSize/* default */.A, null), /* @__PURE__ */ react.createElement("nav", { className: siteNavContainerClassnames }, /* @__PURE__ */ react.createElement("div", { className: "site-nav-content" }, /* @__PURE__ */ react.createElement("ul", { className: "site-nav-left" }, /* @__PURE__ */ react.createElement("li", { className: "site-nav-item dup-org-logo", key: "dup-org-logo" }, /* @__PURE__ */ react.createElement("div", { className: "site-nav-item__logo-wrapper" }, /* @__PURE__ */ react.createElement("div", { className: "site-nav-item__logo" }, isLoadingDupDetails ? /* @__PURE__ */ react.createElement(Spinner/* default */.A, { centered: false }) : /* @__PURE__ */ react.createElement(OrgLogoIcon/* default */.A, { className: "logo", src: orgLogoURL }))))), isMobileView && /* @__PURE__ */ react.createElement("div", { className: "site-nav-better-link" }, /* @__PURE__ */ react.createElement(
    CustomLink/* default */.A,
    {
      url: paths/* default */.A.DEVICE_TRANSPARENCY(deviceAuthToken),
      text: "About Fleet",
      newTab: true
    }
  )))), renderDeviceUserBody(), showInfoModal && /* @__PURE__ */ react.createElement(
    InfoModal_InfoModal,
    {
      onCancel: toggleInfoModal,
      transparencyURL: paths/* default */.A.DEVICE_TRANSPARENCY(deviceAuthToken)
    }
  ), showBypassModal && /* @__PURE__ */ react.createElement(
    BypassModal_BypassModal,
    {
      onCancel: toggleShowBypassModal,
      onResolveLater: () => DeviceUserPage_async(null, null, function* () {
        setIsLoadingBypass(true);
        try {
          yield bypassConditionalAccess(deviceAuthToken);
          ToastNotification/* notify */.me.success(
            "Access has been temporarily restored. You may now attempt to sign in again."
          );
          refetchDupDetails();
        } catch (e) {
          ToastNotification/* notify */.me.error(
            `Couldn't restore access. Please click "Refetch" and try again.`
          );
        } finally {
          setIsLoadingBypass(false);
          setShowBypassModal(false);
        }
      }),
      isLoading: isLoadingBypass
    }
  ));
};
/* harmony default export */ var DeviceUserPage_DeviceUserPage = (DeviceUserPage);

;// ./frontend/pages/hosts/details/DeviceUserPage/index.ts




/***/ })

}]);