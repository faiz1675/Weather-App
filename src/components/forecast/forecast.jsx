import styles from "./forecast.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  console.log("forecastDays=>", forecastDays);

  return (
    <>
      <label className={styles.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles["daily-item"]}>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className={styles["icon-small"]}
                  />
                  <label className={styles["day"]}>{forecastDays[idx]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={styles["min-max"]}>
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ margin: '2px 15px', padding: '2px 50px', backgroundColor:'ghostwhite', borderRadius:'10px'}}>
            <div className={styles["daily-details-grid"]}>
                <div className={styles["daily-details-grid-item"]}>
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className={styles["daily-details-grid-item"]}>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className={styles["daily-details-grid-item"]}>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles["daily-details-grid-item"]}>
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={styles["daily-details-grid-item"]}>
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={styles["daily-details-grid-item"]}>
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
