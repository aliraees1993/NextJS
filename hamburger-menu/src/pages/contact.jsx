import Head from "next/head";
import styles from "../../styles/Common.module.css";

const Contact = () => {
    return (
        <div className={styles.pages}>
            <Head>
                <title>Responsive Hamburger Menu</title>
                <meta
                    name="Responsive Hamburger Menu"
                    content="Responsive Hamburger Menu Contact Page"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;
