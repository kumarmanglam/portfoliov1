import ICONS from "../../../assets/icons/index";

export const ICON_MAP = {
  Dev: () => ICONS.Dev,
  Hand: () => ICONS.Hand,
  Left: () => ICONS.Left,
  Right: () => ICONS.Right,
};

export const applyMapper = (name) => {
  const SelectedIcon = ICON_MAP[name];
  return SelectedIcon ? SelectedIcon() : null;
};
