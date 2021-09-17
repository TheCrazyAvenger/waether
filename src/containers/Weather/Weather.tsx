import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { WeatherNow } from '../../components/WeatherNow/WeatherNow';
import { WeatherWeek } from '../../components/WeatherWeek/WeatherWeek';
import { fetchWeather } from '../../store/actionCreator/weather';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { setDarkMod } from '../../store/actionCreator/settings';
import { getDarkMode } from '../../utilities/utilities';

const Weather: React.FunctionComponent = () => {
  const sunrise = useTypedSelector((state) => state.weather.sunrise);
  const sunset = useTypedSelector((state) => state.weather.sunset);
  const temperature = useTypedSelector((state) => state.weather.temp);
  const feelsLike = useTypedSelector((state) => state.weather.feels_like);
  const humidity = useTypedSelector((state) => state.weather.humidity);
  const pressure = useTypedSelector((state) => state.weather.pressure);
  const wind = useTypedSelector((state) => state.weather.wind);
  const description = useTypedSelector((state) => state.weather.description);
  const icon = useTypedSelector((state) => state.weather.icon);
  const weekWeather = useTypedSelector((state) => state.weather.weekWeather);
  const nightWeather = useTypedSelector((state) => state.weather.nightWeather);

  const dispatch = useDispatch();

  const cityName = localStorage.getItem('cityName');
  const unitsType = localStorage.getItem('unitsType');

  const dark = getDarkMode();

  useEffect(() => {
    if (cityName && unitsType) {
      dispatch(fetchWeather(cityName, unitsType));
    } else {
      dispatch(fetchWeather());
    }
    if (dark) {
      dispatch(setDarkMod(Boolean(dark)));
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
        feelsLike={feelsLike}
      />
      <WeatherWeek
        weekWeather={weekWeather}
        nightWeather={nightWeather}
        sunrise={sunrise}
        sunset={sunset}
      />
    </>
  );
};

export default Weather;
