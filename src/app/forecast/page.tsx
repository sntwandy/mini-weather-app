/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Card, ForecastIcon } from '../components';
import { useSearchParams } from 'next/navigation';
import { ThreeDots } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IForecast, IForecastByDay } from '../shared/interfaces';
import './forecast.styles.scss';


const Forecast = (): ReactElement => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_URL_GET_FORECAST = process.env.NEXT_PUBLIC_API_URL_GET_FORECAST;

  const [cityName, setCityName] = useState('');
  const [forecast, setForecast] = useState<IForecastByDay[]>();
  const [today, setToday] = useState<IForecastByDay>();
  const [loading, setLoading] = useState(true);
  const searchParams = process.browser ? useSearchParams() : null;
  const BASE_URL = `${API_URL_GET_FORECAST}lat=${searchParams?.get('lat')}&lon=${searchParams?.get('lon')}&units=imperial&appid=${API_KEY}`;

  const getDayOfWeek = (dateString: string) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const date = new Date(dateString);
    const dayIndex = date.getUTCDay();
    return daysOfWeek[dayIndex];
  };

  const getActualWeather = (forecast: IForecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    const dayOfWeek = getDayOfWeek(date);

    if (date === new Date().toISOString().split('T')[0]) {
      let iconName: string;

      if (forecast.weather[0].description.toLowerCase().includes('rain')) {
        iconName = 'cloud';
      } else if (
        forecast.weather[0].description.toLowerCase().includes('cloud')
      ) {
        iconName = 'sun';
      } else if (
        forecast.weather[0].description.toLowerCase().includes('thunderstorm')
      ) {
        iconName = 'lightning';
      } else if (
        forecast.weather[0].description.toLowerCase().includes('clear')
      ) {
        iconName = 'sun';
      } else {
        iconName = 'unknown';
      }

      const actualWeather: IForecastByDay = {
        date: date,
        day_of_week: dayOfWeek,
        temp_max: forecast.main.temp_max,
        temp_min: forecast.main.temp_min,
        weather_description: forecast.weather[0].description,
        iconName: iconName,
      };
      setToday(actualWeather);
    }

    setLoading(false);
  };

  const getForecast = (list: []) => {
    const forecastByDay: IForecastByDay[] = [];
    const today = new Date();
    list.forEach((forecast: IForecast) => {
      const date = forecast.dt_txt.split(' ')[0];
      const dayOfWeek = getDayOfWeek(date);

      const currentDate = new Date(date);

      const isWithin5Days =
        currentDate.getTime() >= today.getTime() &&
        currentDate.getTime() <= today.getTime() + 5 * 24 * 60 * 60 * 1000;

      if (isWithin5Days) {
        let iconName: string;

        if (forecast.weather[0].description.toLowerCase().includes('rain')) {
          iconName = 'cloud';
        } else if (
          forecast.weather[0].description.toLowerCase().includes('cloud')
        ) {
          iconName = 'sun';
        } else if (
          forecast.weather[0].description.toLowerCase().includes('thunderstorm')
        ) {
          iconName = 'lightning';
        } else if (
          forecast.weather[0].description.toLowerCase().includes('clear')
        ) {
          iconName = 'sun';
        } else {
          iconName = 'unknown';
        }

        const existingDay = forecastByDay.find((day) => day.date === date);

        if (!existingDay) {
          forecastByDay.push({
            date: date,
            day_of_week: dayOfWeek,
            temp_max: forecast.main.temp_max,
            temp_min: forecast.main.temp_min,
            weather_description: forecast.weather[0].description,
            iconName: iconName,
          });
        } else {
          existingDay.temp_max = Math.max(
            forecast.main.temp_max,
            existingDay.temp_max
          );
          existingDay.temp_min = Math.min(
            forecast.main.temp_min,
            existingDay.temp_min
          );
          existingDay.iconName = iconName;
        }
      }
    });
    setForecast(forecastByDay);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(BASE_URL).then((data) => {
      setCityName(data.data.city.name);
      getForecast(data.data.list);
      getActualWeather(data.data.list[0]);
    });
  }, [BASE_URL]);

  return (
    <>
      {loading ? (
        <div className='spinner-container'>
          <ThreeDots
            visible={true}
            height='40'
            width='40'
            color='#000'
            radius='9'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
          <span>Getting your weather data...</span>
        </div>
      ) : (
        <div className='forecast-container'>
          <div className='home-btn-container'>
            <Link href={'home'}>
              <button>
                <FontAwesomeIcon icon={faHome} />
              </button>
            </Link>
          </div>
          <div className='forecast-info-container'>
            <span id='days'>5 days forecast</span>
            <span id='city'>{cityName}</span>
          </div>
          <div className='forecast-today-container'>
            <div className='today-info'>
              <span id='today'>Today</span>
              <span id='temperature'>{today?.temp_max}</span>
            </div>
            <ForecastIcon iconName={today?.iconName ? today.iconName : ''} />
          </div>
          <div className='forecast-cards-container'>
            {forecast?.map((item, index) => (
              <Card
                key={index}
                weekDay={item.day_of_week}
                iconName={item.iconName}
                temperature={item.temp_max}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Forecast;
