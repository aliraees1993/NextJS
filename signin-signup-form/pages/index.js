import Head from "next/head";
import FormComponent from "../components/FormComponent";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Signin Signup Form</title>
                <meta name="Signin Signup Form" content="Signin Signup Form" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FormComponent />
        </div>
    );
}
