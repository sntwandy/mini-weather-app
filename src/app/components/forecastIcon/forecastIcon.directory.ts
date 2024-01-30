import { IForecastIcons, IForecastIconsColor } from '@/app/shared/interfaces';
import { faSun, faMoon, faCloud, faBoltLightning } from '@fortawesome/free-solid-svg-icons';

export const forecastIcons: IForecastIcons = {
  sun: faSun,
  moon: faMoon,
  cloud: faCloud,
  lightning: faBoltLightning
}

export const forecastIconColor: IForecastIconsColor = {
  sun: '#FFE87C',
  moon: '#F5F3CE',
  cloud: '#C2BFBA',
  lightning: '#00bfff',
};