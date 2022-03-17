import Head from "next/head";
import styles from "../styles/Home.module.css";
import PreLoaderReactLoading from "./components/PreLoaderReactLoading";

export default function ReactingLoading() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pre Loaders</title>
                <meta
                    name="Pre Loader react-loading library"
                    content="Pre Loader react-loading library"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <PreLoaderReactLoading />
            </div>
        </div>
    );
}
