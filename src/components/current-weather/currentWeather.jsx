import styles from "./currentWeather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{data.city}</p>
          <p className={styles["weather-description"]}>
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className={styles["weather-icon"]}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>{Math.round(data.main.temp)}°C</p>
        <div className={styles.details}>
          <div className={styles["parameter-row"]}>
            <span className={`${styles["parameter-label"]} ${styles["detailscolor"]}`}>Details</span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Feels Like</span>
            <span className={styles["parameter-value"]}>
              {Math.round(data.main.feels_like)}
            </span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Wind</span>
            <span className={styles["parameter-value"]}>
              {data.wind.speed} m/s
            </span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Humidity</span>
            <span className={styles["parameter-value"]}>
              {data.main.humidity}%
            </span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Pressure</span>
            <span className={styles["parameter-value"]}>
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
