import Image from "next/image";
import styles from "./DisplayWeather.module.css";

function DisplayWeather(props) {
    const { data } = props;
    const iconurl =
        "http://openweathermap.org/img/wn/" +
        `${data.cod != 404 ? data.weather[0].icon : null}` +
        ".png";

    console.log(iconurl);

    return (
        <div className={styles.displayweather}>
            {data.cod != 404 ? (
                <>
                    <div className={styles.maincard}>
                        <span className={styles.cardtitle}>
                            {data.name} , {data.sys.country}. Weather
                        </span>
                        <span className={styles.cardsubtitle}>
                            As of {new Date().toLocaleTimeString()}
                        </span>

                        <h1>
                            {Math.floor(data.main.temp - 273.15)}
                            <sup>o</sup>
                        </h1>
                        <span className={styles.weather_main}>
                            <Image
                                src={iconurl}
                                alt="Weather Icon"
                                width={100}
                                height={100}
                            />
                        </span>

                        <span className={styles.weather_description}>
                            {data.weather[0].description}
                        </span>
                    </div>
                    <div className={styles.weatherdetails}>
                        <div className={styles.section1}>
                            <table>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            High/Low
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>
                                            {Math.floor(
                                                data.main.temp_max - 273.15
                                            )}
                                            /
                                            {Math.floor(
                                                data.main.temp_min - 273.15
                                            )}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            Humidity
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>{data.main.humidity} %</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            Pressure
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>{data.main.pressure} hPa</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            Visibility
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>{data.visibility / 1000} Km</span>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className={styles.section2}>
                            <table>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            Wind
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>
                                            {Math.floor(
                                                (data.wind.speed * 18) / 5
                                            )}{" "}
                                            km/hr
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            Wind Direction
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>
                                            {data.wind.deg}
                                            <sup>o</sup> deg
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            Sunrise
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>
                                            {new Date(
                                                data.sys.sunrise * 1000
                                            ).toLocaleTimeString()}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.tabledata}>
                                        <h4 className={styles.heading4}>
                                            Sunset
                                        </h4>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <span>
                                            {new Date(
                                                data.sys.sunset * 1000
                                            ).toLocaleTimeString()}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.maincard}>
                    <h2>{data.message}</h2>
                </div>
            )}
        </div>
    );
}

export default DisplayWeather;
