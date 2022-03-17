import Head from "next/head";
import styles from "../../styles/Common.module.css";

const About = () => {
    return (
        <div className={styles.pages}>
            <Head>
                <title>Responsive Hamburger Menu</title>
                <meta
                    name="Responsive Hamburger Menu"
                    content="Responsive Hamburger Menu About Page"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>About</h1>
        </div>
    );
};

export default About;
