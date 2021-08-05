import "./PlacesList.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function PlacesList(props) {
  const list = props.state.businesses.map((business) => {
    if (business) {
      return (
        <div>
          <span>{business.id}</span>
          <span>
            <Link to={`/places/${business.id}`}>{business.name}</Link>
          </span>
          <span>{business.website_url}</span>
          <span>{business.address}</span>
        </div>
      );
    }
  });

  return (
    <div>
      <h1>Places page</h1>
      <ul>{list}</ul>
    </div>
  );
}
