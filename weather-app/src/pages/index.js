import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Weather from "../components/Weather";

const Home = () => {
    return (
        <div className={styles.App}>
            <Head>
                <title>Weather App</title>
                <meta name="Weather App" content="Weather App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Weather />
        </div>
    );
};

export default Home;
