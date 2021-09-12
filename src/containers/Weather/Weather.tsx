import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { WeatherNow } from '../../components/WeatherNow/WeatherNow';
import { WeatherWeek } from '../../components/WeatherWeek/WeatherWeek';
import { fetchWeather } from '../../store/actionCreator/weather';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';

const Weather: React.FunctionComponent = () => {
  const sunrise = useTypedSelector((state) => state.weather.sunrise);
  const sunset = useTypedSelector((state) => state.weather.sunset);
  const temperature = useTypedSelector((state) => state.weather.temp);
  const humidity = useTypedSelector((state) => state.weather.humidity);
  const pressure = useTypedSelector((state) => state.weather.pressure);
  const wind = useTypedSelector((state) => state.weather.wind);
  const description = useTypedSelector((state) => state.weather.description);
  const icon = useTypedSelector((state) => state.weather.icon);
  const weekWeather = useTypedSelector((state) => state.weather.weekWeather);

  const dispatch = useDispatch();

  const cityName = localStorage.getItem('cityName');

  useEffect(() => {
    if (cityName) {
      dispatch(fetchWeather(cityName));
    } else {
      dispatch(fetchWeather());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <WeatherNow
        temp={temperature}
        humidity={humidity}
        pressure={pressure}
        wind={wind}
        description={description}
        icon={icon}
      />
      <WeatherWeek
        weekWeather={weekWeather}
        sunrise={sunrise}
        sunset={sunset}
      />
    </>
  );
};

export default Weather;
