import "./Place.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function PlacesList(props) {
  const currentId = props.match.params.businessId;
  const currentBusiness = props.state.businesses.find(
    (business) => business.id === currentId
  );

  const convertHours = (hoursObj) => {
    let formattedHours = "";
    for (const key in hoursObj) {
      formattedHours += key + ": " + hoursObj[key] + " \n";
    }
    return formattedHours;
  };

  const hours = convertHours(currentBusiness.hours);

  return (
    <div>
      <h1>
        <Link to="/">Go back to Places</Link>
      </h1>
      <img src={currentBusiness.logo_url} height="300px"></img>
      <ul>
        <li>Business Name: {currentBusiness.name}</li>
        <li>Address: {currentBusiness.address}</li>
        <li>Website: {currentBusiness.website_url}</li>
        <li>Hours: {hours}</li>
      </ul>
    </div>
  );
}
