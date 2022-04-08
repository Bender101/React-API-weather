import React, { useState, useEffect } from "react";

export const useCities = () => {
  const [cities, setСities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  return [cities, setСities];
};
