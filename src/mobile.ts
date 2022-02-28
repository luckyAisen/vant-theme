import { setVarStyleByConfig, setVarStyle, clearStyle } from "@/utils";
import {
  VANT_THEME_MESSAGE_INIT,
  VANT_THEME_MESSAGE_SET,
  VANT_THEME_MESSAGE_CLEAR,
} from "@/utils/constant";

window.addEventListener("message", (event) => {
  if (event.data.type === VANT_THEME_MESSAGE_INIT) {
    const theme = JSON.parse(event.data.value);
    setVarStyleByConfig(theme);
  }
  if (event.data.type === VANT_THEME_MESSAGE_SET) {
    const { varName: key, varValue: value } = JSON.parse(event.data.value);
    setVarStyle(key, value);
  }
  if (event.data.type === VANT_THEME_MESSAGE_CLEAR) {
    clearStyle();
  }
});
