"use strict";
(self["webpackChunk_fleetdm_fleet"] = self["webpackChunk_fleetdm_fleet"] || []).push([[638],{

/***/ 73339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70470);
/* harmony import */ var ace_builds_src_noconflict_mode_sh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44286);
/* harmony import */ var ace_builds_src_noconflict_mode_sh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_sh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ace_builds_src_noconflict_mode_powershell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72456);
/* harmony import */ var ace_builds_src_noconflict_mode_powershell__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_powershell__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ace_builds_src_noconflict_mode_python__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40975);
/* harmony import */ var ace_builds_src_noconflict_mode_python__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_python__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ace_builds_src_noconflict_mode_xml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69776);
/* harmony import */ var ace_builds_src_noconflict_mode_xml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_xml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82327);
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_buttons_CopyButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57390);
/* harmony import */ var components_TooltipWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52603);
/* harmony import */ var utilities_ace_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93441);
/* harmony import */ var utilities_ace_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1891);
/* harmony import */ var utilities_ace_theme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(utilities_ace_theme__WEBPACK_IMPORTED_MODULE_11__);













const baseClass = "editor";
const Editor = ({
  helpText,
  label,
  labelTooltip,
  error,
  focus,
  value,
  defaultValue,
  readOnly = false,
  enableCopy = false,
  wrapEnabled = false,
  name = "editor",
  mode = "text",
  isFormField = true,
  maxLines = 20,
  className,
  onChange,
  onBlur,
  onLoad: onLoadProp
}) => {
  const classNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()(baseClass, className, {
    "form-field": isFormField,
    [`${baseClass}__error`]: !!error
  });
  const renderCopyButton = () => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__copy-wrapper` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_buttons_CopyButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { copyText: value != null ? value : "", variant: "subdued" }));
  };
  const onLoadHandler = (editor) => {
    editor.commands.addCommand({
      name: "escapeToBlur",
      bindKey: { win: "Esc", mac: "Esc" },
      exec: (aceEditor) => {
        aceEditor.blur();
        return true;
      },
      readOnly: true
    });
    (0,utilities_ace_editor__WEBPACK_IMPORTED_MODULE_10__/* .releaseStuckSelectionOnScroll */ .W)(editor);
    onLoadProp == null ? void 0 : onLoadProp(editor);
  };
  const renderLabel = () => {
    const labelText = error || label;
    const labelClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()(`${baseClass}__label`, {
      [`${baseClass}__label--error`]: !!error
    });
    if (!labelText) {
      return null;
    }
    if (labelTooltip) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        components_TooltipWrapper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
        {
          className: labelClassName,
          tipContent: labelTooltip,
          position: "top-start"
        },
        labelText
      );
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: labelClassName }, labelText);
  };
  const renderHelpText = () => {
    if (helpText) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: `${baseClass}__help-text` }, helpText);
    }
    return null;
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: classNames }, renderLabel(), enableCopy && renderCopyButton(), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    react_ace__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay,
    {
      mode,
      wrapEnabled,
      name,
      className: baseClass,
      fontSize: 14,
      theme: "fleet",
      width: "100%",
      readOnly,
      minLines: 2,
      maxLines,
      editorProps: { $blockScrolling: Infinity },
      value,
      defaultValue,
      tabSize: 2,
      focus,
      onChange,
      onBlur,
      onLoad: onLoadHandler
    }
  ), renderHelpText());
};
/* harmony default export */ __webpack_exports__["default"] = (Editor);


/***/ }),

/***/ 80999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SQLEditor_SQLEditor; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(32485);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-ace/lib/index.js
var lib = __webpack_require__(70470);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/mode-sql.js
var mode_sql = __webpack_require__(14973);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/ext-linking.js
var ext_linking = __webpack_require__(43317);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/ext-language_tools.js
var ext_language_tools = __webpack_require__(20047);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/ace.js
var src_noconflict_ace = __webpack_require__(80952);
var ace_default = /*#__PURE__*/__webpack_require__.n(src_noconflict_ace);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
// EXTERNAL MODULE: ./frontend/utilities/ace_editor.ts
var ace_editor = __webpack_require__(93441);
// EXTERNAL MODULE: ./frontend/utilities/osquery_tables.ts + 1 modules
var osquery_tables = __webpack_require__(67694);
// EXTERNAL MODULE: ./frontend/utilities/sql_tools.ts
var sql_tools = __webpack_require__(22138);
// EXTERNAL MODULE: ./frontend/utilities/ace_theme.ts
var ace_theme = __webpack_require__(1891);
// EXTERNAL MODULE: ./frontend/components/buttons/CopyButton/index.ts + 2 modules
var CopyButton = __webpack_require__(57390);
// EXTERNAL MODULE: ./frontend/components/Icon/index.ts
var Icon = __webpack_require__(52978);
;// ./frontend/components/SQLEditor/mode.ts



ace.define(
  "ace/mode/fleet_highlight_rules",
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/sql_highlight_rules"
  ],
  function(acequire, exports, module) {
    "use strict";
    var oop = acequire("../lib/oop");
    var SqlHighlightRules = acequire("./sql_highlight_rules").SqlHighlightRules;
    var FleetHighlightRules = function() {
      var keywords = sql_tools/* sqlHighlightKeywords */.HX.join("|");
      var builtinConstants = "true|false";
      var builtinFunctions = sql_tools/* sqlBuiltinFunctions */.DQ.join("|");
      var dataTypes = sql_tools/* sqlDataTypes */.Ke.join("|");
      var osqueryTables = osquery_tables/* osqueryTableNames */.NC.join("|");
      var osqueryColumns = osquery_tables/* osqueryTableColumnNames */.LC.join("|");
      var keywordMapper = this.createKeywordMapper(
        {
          "osquery-token": osqueryTables,
          "osquery-column": osqueryColumns,
          "support.function": builtinFunctions,
          keyword: keywords,
          "constant.language": builtinConstants,
          "storage.type": dataTypes
        },
        "identifier",
        true
      );
      this.$rules = {
        start: [
          {
            token: "comment",
            regex: "--.*$"
          },
          {
            token: "comment",
            start: "/\\*",
            end: "\\*/"
          },
          {
            token: "string",
            // " string
            regex: '".*?"'
          },
          {
            token: "string",
            // ' string
            regex: "'.*?'"
          },
          {
            token: "constant.numeric",
            // float
            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
          },
          {
            token: "paren.lparen",
            regex: "[\\(]"
          },
          {
            token: "paren.rparen",
            regex: "[\\)]"
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(FleetHighlightRules, SqlHighlightRules);
    exports.FleetHighlightRules = FleetHighlightRules;
  }
);
ace.define(
  "ace/mode/fleet",
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/sql",
    "ace/mode/fleet_highlight_rules",
    "ace/range"
  ],
  function(acequire, exports, module) {
    "use strict";
    var oop = acequire("../lib/oop");
    var TextMode = acequire("./sql").Mode;
    var FleetHighlightRules = acequire("./fleet_highlight_rules").FleetHighlightRules;
    var Range = acequire("../range").Range;
    var Mode = function() {
      this.HighlightRules = FleetHighlightRules;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "--";
      this.$id = "ace/mode/fleet";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
);

;// ./frontend/components/SQLEditor/SQLEditor.tsx
















const baseClass = "sql-editor";
const SQLEditor = ({
  focus,
  error,
  fontSize = 14,
  label,
  labelActionComponent,
  name = "query-editor",
  value,
  placeholder,
  readOnly: _readOnly = false,
  maxLines = 20,
  showGutter = true,
  wrapEnabled = false,
  wrapperClassName,
  className,
  helpText,
  style,
  onBlur,
  onLoad,
  onChange,
  handleSubmit = lodash.noop,
  disabled = false,
  /** Combine with readOnly to remove ability to select text */
  enableCopy = false
}) => {
  var _a;
  const editorRef = (0,react.useRef)(null);
  const isReadonlyCopy = _readOnly && enableCopy && !disabled;
  const wrapperClass = classnames_default()(className, wrapperClassName, baseClass, {
    [`${baseClass}__wrapper--error`]: !!error,
    [`${baseClass}__wrapper--disabled`]: disabled,
    // This is for read only that has a copy button so we disallow selecting the text
    [`${baseClass}__wrapper--readonly-copy`]: !!isReadonlyCopy
  });
  const fixHotkeys = (editor) => {
    editor.commands.removeCommand("gotoline");
    editor.commands.removeCommand("find");
  };
  const langTools = ace_default().require("ace/ext/language_tools");
  const readOnly = disabled || _readOnly;
  if (!readOnly) {
    const checkTableValues = (0,sql_tools/* checkTable */.Dv)(value);
    if (!checkTableValues.error) {
      langTools.setCompleters([]);
      const sqlKeyWordsCompleter = {
        getCompletions: (editor, session, pos, prefix, callback) => {
          callback(null, [
            ...sql_tools/* sqlKeyWords */.H0.map(
              (keyWord) => ({
                caption: `${keyWord}`,
                value: keyWord.toUpperCase(),
                meta: "keyword"
              })
            ),
            ...sql_tools/* sqlBuiltinFunctions */.DQ.map(
              (builtInFunction) => ({
                caption: builtInFunction,
                value: builtInFunction.toUpperCase(),
                meta: "built-in function"
              })
            ),
            ...sql_tools/* sqlDataTypes */.Ke.map(
              (dataType) => ({
                caption: dataType,
                value: dataType.toUpperCase(),
                meta: "data type"
              })
            )
          ]);
        }
      };
      langTools.addCompleter(sqlKeyWordsCompleter);
      const sqlTableColumns = (0,osquery_tables/* selectedTableColumns */.zq)(
        checkTableValues.tables || []
      );
      const sqlTableColumnsCompleter = {
        getCompletions: (editor, session, pos, prefix, callback) => {
          callback(
            null,
            sqlTableColumns.map(
              (column) => ({
                caption: column.name,
                // Distinct values from tables,
                value: column.name,
                meta: `${column.description.slice(0, 15)}... Column`
              })
            )
          );
        }
      };
      langTools.addCompleter(sqlTableColumnsCompleter);
      const updateTableNameCompleters = !((_a = checkTableValues.tables) == null ? void 0 : _a.length) || !sqlTableColumns.length;
      if (updateTableNameCompleters) {
        const sqlTables = osquery_tables/* osqueryTableNames */.NC;
        const sqlTablesCompleter = {
          getCompletions: (editor, session, pos, prefix, callback) => {
            callback(
              null,
              sqlTables.map(
                (table) => ({
                  caption: `${table}`,
                  // Distinct values from columns,
                  value: table,
                  meta: "Table",
                  score: 1
                })
              )
            );
          }
        };
        langTools.addCompleter(sqlTablesCompleter);
      }
    }
  }
  const onLoadHandler = (editor) => {
    var _a2, _b;
    fixHotkeys(editor);
    editor.commands.addCommand({
      name: "escapeToBlur",
      bindKey: { win: "Esc", mac: "Esc" },
      exec: (aceEditor) => {
        aceEditor.blur();
        return true;
      },
      readOnly: true
    });
    (0,ace_editor/* releaseStuckSelectionOnScroll */.W)(editor);
    if (isReadonlyCopy) {
      editor.setOption("readOnly", true);
      editor.selection.on("changeSelection", () => {
        editor.clearSelection();
      });
      const textarea = (_b = (_a2 = editor.textInput) == null ? void 0 : _a2.getElement) == null ? void 0 : _b.call(_a2);
      if (textarea) {
        textarea.setAttribute("tabindex", "-1");
      }
      editor.on("focus", () => {
        editor.blur();
      });
    }
    onLoad && onLoad(editor);
  };
  const onBlurHandler = (event, editor) => {
    onBlur && onBlur(editor);
  };
  const handleDelete = (deleteCommand) => {
    var _a2, _b, _c;
    const selectedText = (_a2 = editorRef.current) == null ? void 0 : _a2.editor.getSelectedText();
    if (selectedText) {
      (_b = editorRef.current) == null ? void 0 : _b.editor.removeWordLeft();
    } else {
      (_c = editorRef.current) == null ? void 0 : _c.editor.execCommand(deleteCommand);
    }
  };
  const renderLabel = (0,react.useCallback)(() => {
    if (!label) {
      return /* @__PURE__ */ react.createElement(react.Fragment, null);
    }
    const labelText = error || label;
    const labelClassName = classnames_default()(`${baseClass}__label`, {
      [`${baseClass}__label--error`]: !!error,
      [`${baseClass}__label--with-action`]: !!labelActionComponent || enableCopy
    });
    return /* @__PURE__ */ react.createElement("div", { className: labelClassName }, /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__label-text` }, labelText), /* @__PURE__ */ react.createElement("div", { className: `${baseClass}__label-actions` }, labelActionComponent, enableCopy && /* @__PURE__ */ react.createElement(CopyButton/* default */.A, { copyText: value || "", variant: "subdued", size: "small" }, "Copy ", /* @__PURE__ */ react.createElement(Icon/* default */.A, { name: "copy" }))));
  }, [error, label, labelActionComponent, enableCopy, value]);
  const renderHelpText = () => {
    if (helpText) {
      return /* @__PURE__ */ react.createElement("span", { className: `${baseClass}__help-text` }, helpText);
    }
    return false;
  };
  return /* @__PURE__ */ react.createElement("div", { className: wrapperClass }, renderLabel(), /* @__PURE__ */ react.createElement(
    lib/* default */.Ay,
    {
      ref: editorRef,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      editorProps: { $blockScrolling: Infinity },
      fontSize,
      mode: "fleet",
      minLines: 2,
      maxLines,
      name,
      onChange,
      onBlur: onBlurHandler,
      onLoad: onLoadHandler,
      readOnly,
      setOptions: { enableLinking: true, hasCssTransforms: true },
      showGutter,
      showPrintMargin: false,
      theme: "fleet",
      value,
      placeholder,
      width: "100%",
      wrapEnabled,
      style,
      focus,
      commands: [
        {
          name: "commandName",
          bindKey: { win: "Ctrl-Enter", mac: "Ctrl-Enter" },
          exec: handleSubmit
        },
        {
          name: "deleteSelection",
          bindKey: { win: "Delete", mac: "Delete" },
          exec: () => handleDelete("del")
        },
        {
          name: "backspaceSelection",
          bindKey: { win: "Backspace", mac: "Backspace" },
          exec: () => handleDelete("backspace")
        }
      ]
    }
  ), renderHelpText());
};
/* harmony default export */ var SQLEditor_SQLEditor = (SQLEditor);


/***/ }),

/***/ 93441:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: function() { return /* binding */ releaseStuckSelectionOnScroll; }
/* harmony export */ });

const releaseStuckSelectionOnScroll = (editor) => {
  const mouseHandler = editor.$mouseHandler;
  editor.container.addEventListener(
    "wheel",
    (e) => {
      var _a;
      if ((mouseHandler == null ? void 0 : mouseHandler.isMousePressed) && !e.buttons) {
        (_a = mouseHandler.releaseMouse) == null ? void 0 : _a.call(mouseHandler);
      }
    },
    // Capture phase so this runs before Ace processes the scroll; passive since
    // we never call preventDefault (avoids a non-passive wheel-listener warning).
    { capture: true, passive: true }
  );
};


/***/ }),

/***/ 1891:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


ace.define(
  "ace/theme/fleet",
  ["require", "exports", "module", "ace/lib/dom"],
  function(acequire, exports, module) {
    exports.isDark = false;
    exports.cssClass = "ace-fleet";
    exports.cssText = __webpack_require__(30746);
    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);


/***/ }),

/***/ 72921:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70470);
/* harmony import */ var ace_builds_src_noconflict_mode_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30766);
/* harmony import */ var ace_builds_src_noconflict_mode_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_yaml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utilities_ace_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1891);
/* harmony import */ var utilities_ace_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(utilities_ace_theme__WEBPACK_IMPORTED_MODULE_5__);

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






const baseClass = "yaml-ace";
class YamlAce extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "onLoadHandler", (editor) => {
      editor.commands.addCommand({
        name: "escapeToBlur",
        bindKey: {
          win: "Esc",
          mac: "Esc"
        },
        exec: (aceEditor) => {
          aceEditor.blur();
          return true;
        },
        readOnly: true
      });
    });
    _defineProperty(this, "renderLabel", () => {
      const {
        name,
        error,
        label
      } = this.props;
      const labelClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()(`${baseClass}__label`, "form-field__label", {
        "form-field__label--error": error
      });
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
        className: labelClassName,
        htmlFor: name
      }, error || label);
    });
  }
  render() {
    const {
      label,
      name,
      onChange,
      value,
      error,
      wrapperClassName,
      disabled
    } = this.props;
    const {
      renderLabel,
      onLoadHandler
    } = this;
    const wrapperClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()(wrapperClassName, "form-field", {
      [`${baseClass}__wrapper--error`]: error
    });
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: wrapperClass
    }, renderLabel(), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_ace__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {
      readOnly: disabled,
      showGutter: !disabled,
      className: baseClass,
      mode: "yaml",
      theme: "fleet",
      width: "100%",
      minLines: 2,
      maxLines: 17,
      editorProps: {
        $blockScrolling: Infinity
      },
      value,
      tabSize: 2,
      onChange,
      name,
      label,
      onLoad: onLoadHandler
    }));
  }
}
_defineProperty(YamlAce, "propTypes", {
  error: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
});
/* harmony default export */ __webpack_exports__["default"] = (YamlAce);


/***/ }),

/***/ 30746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);