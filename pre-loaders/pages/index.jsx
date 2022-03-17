import Head from "next/head";
import styles from "../styles/Home.module.css";
import PreLoaderReactLottie from "./components/lottie/PreLoaderReactLottie";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pre Loaders</title>
                <meta
                    name="Pre Loader react-lottie library"
                    content="Pre Loader react-lottie library"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <PreLoaderReactLottie />
            </div>
        </div>
    );
}
