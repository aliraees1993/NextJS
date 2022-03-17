import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import styles from "./Weather.module.css";

function Weather() {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({ city: "" });
    const [error, setError] = useState("");

    async function weatherData(e) {
        e.preventDefault();

        if (form.city == "") {
            setError("Please enter city name!");
        } else {
            setError("");

            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
            )
                .then((res) => res.json())
                .then((data) => data);

            setWeather({ data: data });
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == "city") {
            setForm({ ...form, city: value });
        }
    };

    return (
        <div className={styles.weather}>
            <p className={styles.title}>Weather App</p>
            {error && <h4 className={styles.error}>{error}</h4>}
            <form>
                <input
                    type="text"
                    placeholder="Enter City Name..."
                    name="city"
                    onChange={(e) => handleChange(e)}
                />
                <button
                    className={styles.getweather}
                    onClick={(e) => weatherData(e)}
                >
                    Submit
                </button>
            </form>

            {weather.data != undefined ? (
                <div>
                    <DisplayWeather data={weather.data} />
                </div>
            ) : null}
        </div>
    );
}

export default Weather;
