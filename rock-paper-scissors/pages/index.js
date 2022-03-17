import Head from "next/head";
import Play from "../components/Play";
import { useAppContext } from "../context/state";

const Home = () => {
    const appContext = useAppContext();

    return (
        <>
            <Head>
                <title>Rock-Paper-Scissors</title>
                <meta
                    name="Rock-Paper-Scissors"
                    content="Rock-Paper-Scissors"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Play setMyChoice={appContext.setMyChoice} />
        </>
    );
};

export default Home;
