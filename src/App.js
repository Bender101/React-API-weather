import "./App.css";
import "./components/card/card.css";
import Input from "./components/input/input";
import CardList from "./components/cardList/cardList";
import { useCities } from "./hooks/useCities";

function App() {
  const [state, dispatch] = useCities();
  const { inputValue, cities, editingCity } = state;
  return (
    <div className="main">
      <Input dispatch={dispatch} inputValue={inputValue} editingCity={editingCity}/>
      <CardList dispatch={dispatch} cities={cities} />
    </div>
  );
}

export default App;
