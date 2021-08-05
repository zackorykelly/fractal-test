import "./Place.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function PlacesList(props) {
  return (
    <div>
      <h1>
        <Link to="/">Go back to Places</Link>
      </h1>
    </div>
  );
}
