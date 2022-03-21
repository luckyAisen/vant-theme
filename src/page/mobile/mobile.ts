import { setCssVarByConfig, setCssVar, clearCssVar } from "@/utils";
import {
  VANT_THEME_MESSAGE_VARIABLES_INIT,
  VANT_THEME_MESSAGE_VARIABLES_SET,
  VANT_THEME_MESSAGE_VARIABLES_CLEAR,
} from "@/utils/constant";

window.addEventListener("message", (event) => {
  if (event.data.type === VANT_THEME_MESSAGE_VARIABLES_INIT) {
    const theme = JSON.parse(event.data.value);
    const version = event.data.version;
    setCssVarByConfig(theme, version);
  }
  if (event.data.type === VANT_THEME_MESSAGE_VARIABLES_SET) {
    const { label, value } = JSON.parse(event.data.value);
    const version = event.data.version;
    setCssVar(label, value, version);
  }
  if (event.data.type === VANT_THEME_MESSAGE_VARIABLES_CLEAR) {
    const version = event.data.version;
    clearCssVar(version);
  }
});
