import { IForecastIcons, IForecastIconsColor } from './interfaces';
import { faSun, faMoon, faCloud, faBoltLightning } from '@fortawesome/free-solid-svg-icons';

export const forecastIcons: IForecastIcons = {
  sun: faSun,
  moon: faMoon,
  cloud: faCloud,
  lightning: faBoltLightning
}

export const forecastIconColor: IForecastIconsColor = {
  sun: '#F28C38',
  moon: '#F5F3CE',
  cloud: '#C2BFBA',
  lightning: '#00bfff',
};