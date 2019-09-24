import React from "react";
import styles from "./Titles.module.scss";
import weatherIcon from "../images/weatherIcon.png";

const Titles = props => {
  return (
    <div>
      <h1>Weather App </h1>
      <img
        className={styles.weatherIcon}
        src="https://cdn3.f-cdn.com/contestentries/152614/14376297/54d93e060a2b5_thumb900.jpg"
      />
      <h3>Find weather conditions</h3>
    </div>
  );
};

export default Titles;
