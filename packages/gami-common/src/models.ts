export interface Game {
  name: string;
  description: string;
}
export interface NamedId {
  name: string;
}
export interface GameLibraryRef {
  name: string;
  libraryId: string;
  libraryType: string;
}
export enum GameProgressStatus {
  Backlog,
  Playing,
  Played,
}
export enum GameInstallStatus {
  Installed,
  Installing,
  InLibrary,
  Queued,
}

export interface GameLibraryMetadata extends GameLibraryRef {
  lastPlayed?: Date;
  installStatus: GameInstallStatus;
  playTimeMins?: number;
}

export interface GameMetadata {
  description?: string;
  developers?: string[];
  genres?: string[];
}
