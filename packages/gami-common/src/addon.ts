import { GameLibrary, GameMetadataScanner } from "./scanners";

export type AddonTypedValue = {
  text: "string";
};
export type AddonConfigItemType = keyof AddonTypedValue;
export type AddonConfigItem<
  K extends string = string,
  T extends AddonConfigItemType = AddonConfigItemType,
> = {
  name: string;
  key: K;
  type: T;
};
export type AddonConfig<
  K extends string = string,
  T extends AddonConfigItemType = AddonConfigItemType,
> = AddonConfigItem<K, T>[];
export type AddonConfigValue<
  K extends string = string,
  T extends AddonConfigItemType = AddonConfigItemType,
> = Record<K, AddonTypedValue[T]>[];
export declare function registerAddon(addon: Addon): void;
export type Addon =
  | ({
      type: "library";
    } & GameLibrary)
  | ({
      type: "metadata";
    } & GameMetadataScanner);
