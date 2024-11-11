export interface IconAndName {
  name: string;
  icon: string;
}
export interface MenuItemData extends IconAndName {
  children?: MenuItemData[];
}
