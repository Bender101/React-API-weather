import "./card.css";
import React, { memo } from "react";
import { useWeather } from "../../hooks/useWeather";

const Card = memo(({ city, dispatch }) => {
  const data = useWeather(city);

  if (!data) return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const deleteHandler = () => {
    dispatch({
      type: "DELETE_CITY",
      payload: city,
    });
  };

  const editHandler = () => {
    dispatch({
      type: "EDIT_CITY",
      payload: city,
    });
  };

  return (
    <div className="card">
      <div className="action-button-wrap">
        <button className="action-button" onClick={editHandler}>
          Edit
        </button>
        <button className="action-button" onClick={deleteHandler}>
          X
        </button>
      </div>
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
});
export default Card;
