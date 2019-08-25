import React from 'react';
import styles from "./Form.module.scss";



const Form = (props) => {
  return (
  <form className={styles.location} onSubmit = {props.loadWeather}>
   <input type="text" name="city" placeholder="City..."/>
   <input type="text" name="country" placeholder="Country..."/>
   <button className={styles.weather_button}>Get Weather</button>
 </form>
  )
}
export default Form;