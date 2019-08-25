import React from "react";
import styles from "./Titles.module.scss";
import weatherIcon from "../images/weatherIcon.png";

const Titles = (props) =>{
  return (
    <div>
      <img className={styles.weatherIcon} src={weatherIcon}/>
      <h1>Weather App </h1>
      <p>Find weather conditions</p>
    </div>
  )
}

export default Titles;
