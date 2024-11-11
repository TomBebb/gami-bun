import {
  Game,
  GameLibraryMetadata,
  GameLibraryRef,
  GameMetadata,
} from "./models";
import { AddonConfig, AddonConfigItemType } from "./addon";

export interface BaseAddon<
  K extends string = string,
  T extends AddonConfigItemType = AddonConfigItemType,
> {
  type: string;

  config: AddonConfig<K, T>;
}
export interface GameLibraryLauncher extends BaseAddon {
  launch(game: Game): void;
}
export interface GameLibraryScanner extends BaseAddon {
  scan(): AsyncIterable<GameLibraryMetadata>;
}
export type GameLibrary = GameLibraryLauncher | GameLibraryScanner;

export interface GameMetadataScanner extends BaseAddon {
  scanMetadata(game: GameLibraryRef): Promise<GameMetadata>;
}
