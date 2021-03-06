import React from "react";
import { styled } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { iconMapping } from "../icon-mapping.js";
import { useIconDictionary } from "../icon-dictionary";
import Tooltip from "@material-ui/core/Tooltip";
export var IconSidebar = function IconSidebar(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onClickItem = _ref.onClickItem,
      selectedTools = _ref.selectedTools,
      bgColor = _ref.bgColor;
  var customIconMapping = useIconDictionary();
  var Container = styled("div")({
    width: 50,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: bgColor ? bgColor : "#fff",
    flexShrink: 0
  });
  return /*#__PURE__*/React.createElement(Container, null, items.map(function (item) {
    var NameIcon = customIconMapping[item.name.toLowerCase()] || iconMapping[item.name.toLowerCase()] || iconMapping["help"];
    var buttonPart = /*#__PURE__*/React.createElement(IconButton, {
      key: item.name,
      color: item.selected || selectedTools.includes(item.name.toLowerCase()) ? "primary" : "default",
      disabled: Boolean(item.disabled),
      onClick: item.onClick ? item.onClick : function () {
        return onClickItem(item);
      }
    }, item.icon || /*#__PURE__*/React.createElement(NameIcon, null));
    if (!item.helperText) return buttonPart;
    return /*#__PURE__*/React.createElement(Tooltip, {
      key: item.name,
      title: item.helperText,
      placement: "right"
    }, buttonPart);
  }));
};
export default IconSidebar;