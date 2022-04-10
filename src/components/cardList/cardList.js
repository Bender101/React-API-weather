import './cardList.css'
import React, { useContext } from "react";
import Card from "../card/card";
import { Context } from "../../App";


export default function CardList() {
  const {state: {cities}} = useContext(Context)
  return (
    <div className="card-list">
      <select>
        <option value="name">Имя</option>
        <option value="temp">Температура</option>
      </select>
      {cities?.map((city) => (
        <Card key={city} city={city} />
      ))}
    </div>
  );
}
