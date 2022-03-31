import { setCssVarByConfig, setCssVar, clearCssVar } from "@/utils";
import {
  VANT_THEME_MESSAGE_VARIABLES_INIT,
  VANT_THEME_MESSAGE_VARIABLES_SET,
  VANT_THEME_MESSAGE_VARIABLES_CLEAR,
  VANT_THEME_STYLE_TAG_ID,
} from "@/utils/constant";

window.onload = () => {
  createStyleTag();
};

const createStyleTag = () => {
  const tag = document.createElement("style");
  tag.id = VANT_THEME_STYLE_TAG_ID;
  document.querySelector("head")?.appendChild(tag);
};

window.addEventListener("message", (event) => {
  if (event.data.type === VANT_THEME_MESSAGE_VARIABLES_INIT) {
    const theme = JSON.parse(event.data.value);
    const version = event.data.version;
    if (version === "v2") {
      const tag = document.querySelector(`#${VANT_THEME_STYLE_TAG_ID}`);
      if (tag) {
        tag.innerHTML = theme;
      }
    } else {
      setCssVarByConfig(theme, version);
    }
  }
  if (event.data.type === VANT_THEME_MESSAGE_VARIABLES_SET) {
    const { label, value } = JSON.parse(event.data.value);
    const version = event.data.version;
    setCssVar(label, value, version);
  }
  if (event.data.type === VANT_THEME_MESSAGE_VARIABLES_CLEAR) {
    const version = event.data.version;
    if (version === "v2") {
      const tag = document.querySelector(`#${VANT_THEME_STYLE_TAG_ID}`);
      if (tag) {
        tag.innerHTML = "";
      }
    } else {
      clearCssVar(version);
    }
  }
});
