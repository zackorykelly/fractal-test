import "./PlacesList.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function PlacesList(props) {
  const list = props.state.businesses.map((business) => {
    if (business) {
      return (
        <div>
          {business.id}
          <Link to={`/places/${business.id}`}>{business.name}</Link>
          {business.website_url}
          {business.address}
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
