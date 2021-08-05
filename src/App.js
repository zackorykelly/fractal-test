import "./App.css";
// Hooks
import useApplicationData from "./hooks/useApplicationData";
// Components
import PlacesList from "./components/PlacesList/PlacesList";
import Place from "./components/Place/Place";
// Other
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  // Bring in state from application data hook
  const { state, setBusiness } = useApplicationData();
  console.log(state.businesses[1]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/places/:businessId"
            render={(props) => <Place {...props} state={state} />}
          />
          <Route
            path="/"
            render={(props) => <PlacesList {...props} state={state} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
