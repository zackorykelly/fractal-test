// Handle app state logic within this hook
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    selectedBusiness: null,
    businesses: {},
  });

  const setBusiness = (id) => setState({ ...state, selectedBusiness: id });

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
