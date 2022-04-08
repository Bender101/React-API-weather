import "./App.css";
import "./components/card/card.css";
import { useState, useEffect } from "react";
import Input from "./components/input/input";
import CardList from "./components/cardList/cardList";
import { useCities } from './hooks/useCities';

function App() {
  const [cities, setСities] = useCities()

  return (
    <div className="main">
      <Input setСities={setСities} />
      <CardList cities={cities} />
    </div>
  );
}

export default App;
