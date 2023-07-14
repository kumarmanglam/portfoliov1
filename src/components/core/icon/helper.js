import ICONS from "../../../assets/icons/index";

export const ICON_MAP = {
  Dev: () => ICONS.Dev,
  Hand: () => ICONS.Hand,
  Left: () => ICONS.Left,
  Right: () => ICONS.Right,
  Download: () => ICONS.Download,
  Mouse: () => ICONS.Mouse,
  Down: () => ICONS.Down,
  Contact: () => ICONS.Contact,
  Direct: () => ICONS.Direct,
  Grid: () => ICONS.Grid,
  Close: () => ICONS.Close,
  Home: () => ICONS.Home,
  Person: () => ICONS.Person,
  Photo: () => ICONS.Photo,
  Document: () => ICONS.Document,
};

export const applyMapper = (name) => {
  const SelectedIcon = ICON_MAP[name];
  return SelectedIcon ? SelectedIcon() : null;
};
