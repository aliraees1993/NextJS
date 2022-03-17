import "../../styles/globals.css";
import HamburgerMenu from "../components/HamburgerMenu";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <HamburgerMenu />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
