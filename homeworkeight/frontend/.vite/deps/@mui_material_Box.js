import "./chunk-AAMAHZMU.js";
import "./chunk-W3VT5O72.js";
import "./chunk-S5PWDRAS.js";
import {
  ClassNameGenerator_default,
  createBox,
  createTheme_default
} from "./chunk-ANVNQVXW.js";
import "./chunk-T4MTQRGO.js";
import "./chunk-BU3YUUBE.js";
import {
  require_prop_types
} from "./chunk-46L4JSF6.js";
import {
  __toESM
} from "./chunk-QSQYAWSL.js";

// node_modules/@mui/material/Box/Box.js
var import_prop_types = __toESM(require_prop_types());
var defaultTheme = createTheme_default();
var Box = createBox({
  defaultTheme,
  defaultClassName: "MuiBox-root",
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Box_default = Box;
export {
  Box_default as default
};
//# sourceMappingURL=@mui_material_Box.js.map
