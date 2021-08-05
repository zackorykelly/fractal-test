import "./App.css";
// Hooks
import useApplicationData from "./hooks/useApplicationData";
// Components
import PlacesList from "./components/PlacesList/PlacesList";

export default function App() {
  // Bring in state from application data hook
  const { state, setBusiness } = useApplicationData();
  console.log(state.businesses[1]);

  return (
    <div className="App">
      <h1>Places page</h1>
      <PlacesList state={state}></PlacesList>
    </div>
  );
}
