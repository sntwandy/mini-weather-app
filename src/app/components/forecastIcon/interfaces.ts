import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IforecastIcon {
  iconName: string;
}

export interface IForecastIcons {
  [key: string]: IconDefinition;
}

export interface IForecastIconsColor {
  [key: string]: string;
}