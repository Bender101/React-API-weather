import React, { useEffect } from "react";
import Card from "../card/card";

export default function CardList({setСities, cities }) {
 
  return (
    <div className="card-list">
      {cities?.map((city) => (
          <Card key={city} setСities={setСities} city={city} />
        ))}
    </div>
  );
}
