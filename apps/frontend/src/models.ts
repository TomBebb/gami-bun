export interface IconAndName {
  name: string;
  icon: string;
  path: string;
}
export interface MenuItemData extends IconAndName {
  children?: MenuItemData[];
}
