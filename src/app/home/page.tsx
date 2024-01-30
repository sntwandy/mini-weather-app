"use client"

import { ReactElement, useEffect, useState } from 'react';
import { ForecastIcon, Input } from '../components'
import './home.styles.scss'
import axios from 'axios';
import { IResults } from '../shared/interfaces';

const Home = (): ReactElement => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const API_URL_GET_CITY = process.env.NEXT_PUBLIC_API_URL_GET_CITY;

  const [cityName, setCityName] = useState<string>()
  const [cityList, setCityList] = useState<IResults[]>();

  useEffect(() => {
    const BASE_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=acbfb220a9c2a5a33515edd5dafae202`;
    cityName?.length &&
      axios.get(BASE_URL).then((data) => {
        setCityList(
          data.data.map(({ name, country, lat, lon }: IResults) => ({
            name,
            country,
            lat,
            lon
          }))
        );
      });
  }, [API_KEY, API_URL_GET_CITY, cityName])

  return (
    <div className="dashboard-container">
      <ForecastIcon iconName="sun" />
      <h1 className="dashboard-title">Mini Weather App</h1>
      <span className="dashboard-description">View the 5 day forecast for any city</span>
      <Input cityList={cityList} setCityName={setCityName} type='text' placeholder='Enter your city...' />
    </div>
  )
};

export default Home;
