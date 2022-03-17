import Game from "../components/Game";
import Head from "next/head";

const game = () => {
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
            <Game />
        </>
    );
};

export default game;
