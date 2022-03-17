import "../styles/styles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <div className="container">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </AppWrapper>
    );
}

export default MyApp;
