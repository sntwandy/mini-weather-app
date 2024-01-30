import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Dispatch, SetStateAction } from 'react'

export interface IForecastIcon {
  iconName: string;
}

export interface IForecastIcons {
  [key: string]: IconDefinition;
}

export interface IForecastIconsColor {
  [key: string]: string;
}

export interface IResults {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface IForecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    '3h': number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface IForecastByDay {
  date: string;
  day_of_week: string;
  temp_max: number;
  temp_min: number;
  weather_description: string;
  iconName: string;
}

export interface ICard {
  weekDay: string;
  iconName: string;
  temperature: number;
}

export interface IInput {
  type: string;
  placeholder: string;
  setCityName: Dispatch<SetStateAction<string | undefined>>;
  cityList:
    | { name: string; country: string; lat: number; lon: number }[]
    | undefined;
}