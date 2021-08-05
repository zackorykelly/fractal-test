// Handle app state logic within this hook
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // Store all businesses, as well as currently selected business id for details page
  const [state, setState] = useState({
    selectedBusiness: null,
    businesses: [],
  });

  const setBusiness = (id) => setState({ ...state, selectedBusiness: id });

  // More api endpoints can be added to promise.all as needed
  useEffect(() => {
    Promise.all([
      axios.get("https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places"),
    ]).then((all) => {
      setState((prev) => ({ ...prev, businesses: all[0].data }));
    });
  }, []);

  return {
    state,
    setBusiness,
  };
}
