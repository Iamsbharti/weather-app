import React from "react";
import { WeatherContextConsumer } from "./weatherContext";
export default function Location() {
  const dateBuilder = (d1) => {
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ];

    let day = days[d1.getDay()];
    let date = d1.getDate();
    let month = months[d1.getMonth()];
    let fullYear = d1.getFullYear();

    return `${day} ${date} ${month} ${fullYear}`;
  };
  return (
    <WeatherContextConsumer>
      {({ weather }) =>
        typeof weather.main != "undefined" ? (
          <>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{`${weather.main.temp} F`}</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </>
        ) : (
          ""
        )
      }
    </WeatherContextConsumer>
  );
}
