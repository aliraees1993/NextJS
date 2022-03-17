import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as loadingLottie from "./loading.json";
import * as doneLottie from "./done.json";
import Link from "next/link";

const PreLoaderReactLottie = () => {
    const [loading, setloading] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setloading(true);
            setTimeout(() => {
                setDone(true);
            }, 1000);
        }, 2000);
    }, []);

    const loadingOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingLottie.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const doneOptions = {
        loop: true,
        autoplay: true,
        animationData: doneLottie.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            {!done ? (
                <>
                    {!loading ? (
                        <Lottie
                            options={loadingOptions}
                            height={200}
                            width={200}
                        />
                    ) : (
                        <Lottie
                            options={doneOptions}
                            height={100}
                            width={100}
                        />
                    )}
                </>
            ) : (
                <>
                    <p>
                        Pre-loader created using <b>react-lottie</b> lib
                    </p>
                    <Link href="/react-loading">
                        <a>Pre-Loader using react-loading</a>
                    </Link>
                </>
            )}
        </>
    );
};

export default PreLoaderReactLottie;
