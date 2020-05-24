import React, { useState } from "react";
const { Provider, Consumer } = React.createContext();

function WeatherContextProvider(props) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };
  const search = (query) => {
    let url = process.env.REACT_APP_WEATHER_API_URL;
    let key = process.env.REACT_APP_WEATHER_API_KEY;

    fetch(`${url}weather?q=${query}&appid=${key}`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  //console.log(weather.message);
  //console.log(added prog)
  return (
    <Provider
      value={{
        query: query,
        updateQuery: updateQuery,
        search: search,
        weather: weather,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { WeatherContextProvider, Consumer as WeatherContextConsumer };
