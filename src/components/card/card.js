import "./card.css";
import React, { memo} from "react";
import { useWeather } from "../../hooks/useWeather";

const Card = memo(({ city }) => {
  const data = useWeather(city)
  
  if (!data) return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;
  
  return (
    <div className="card">
      <div className="card__info">
        <img
          className="card__icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="card__title">{name}</div>
        <div className="card__description">{description}</div>
        <div className="card__temperature">{temp.toFixed()}</div>
      </div>
      <div className="card__information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
})
export default Card
