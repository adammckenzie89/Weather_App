import React from "react";
import styles from "../Home.module.scss";

const Weather = props => {
  return (
    <div>
      {props.country && props.city && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p>Temperature: {Math.floor(props.temperature)}</p>}
      {props.humidity && <p>Humidity: {props.humidity}%</p>}
      {props.description &&
        (<p>Conditions: {props.description}</p> && (
          <img
            className={styles.weatherIcon}
            src={`http://openweathermap.org/img/wn/${props.icon}.png`}
            alt="wthr img"
          />
        ))}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
