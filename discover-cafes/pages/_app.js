import "../styles/globals.css";
import CafeProvider from "../store/cafe-Context";

function MyApp({ Component, pageProps }) {
    return (
        <CafeProvider>
            <Component {...pageProps} />
        </CafeProvider>
    );
}

export default MyApp;
