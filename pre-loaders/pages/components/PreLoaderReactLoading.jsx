import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Link from "next/link";

const PreLoaderReactLoading = () => {
    const [done, setDone] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDone(true);
        }, 2000);
    }, []);

    return (
        <>
            {!done ? (
                <ReactLoading
                    type={"cylon"}
                    color={"#03fc4e"}
                    height={100}
                    width={100}
                />
            ) : (
                <>
                    <p>
                        Pre-loader created using <b>react-loading</b> lib
                    </p>
                    <Link href="/">
                        <a>Pre-Loader using react-loading</a>
                    </Link>
                </>
            )}
        </>
    );
};

export default PreLoaderReactLoading;
