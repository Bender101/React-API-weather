import "./cardList.css";
import React, { useContext, useState } from "react";
import Card from "../card/card";
import { Context } from "../../App";

export default function CardList() {
  const {
    state: { cities },
  } = useContext(Context);
  const [order, setOrder] = useState("asc");

  let sortedCities = cities.sort();

  if (order === "desc") {
    sortedCities.reverse();
  }

 const changeHandler = (e) => {
   setOrder(e.target.value)
 }

  return (
    <>
    <label for="select">Сортировать</label>
      <select className="select" value={order} onChange={changeHandler}>
        <option value="asc">Имя ↑</option>
        <option value="desc">Имя ↓</option>
      </select>
      <div className="card-list">
        {sortedCities?.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </>
  );
}
