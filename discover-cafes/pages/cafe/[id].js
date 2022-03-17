import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import cls from "classnames";

import styles from "../../styles/cafe.module.css";
import { fetchCafes } from "../../lib/cafes";

import { CafeContext } from "../../store/cafe-Context";

import { fetcher, isEmpty } from "../../utils";

import useSWR from "swr";

export async function getStaticProps(staticProps) {
    const params = staticProps.params;
    const cafes = await fetchCafes();

    const findCafeById = cafes.find((cafe) => {
        return cafe.id.toString() === params.id;
    });
    return {
        props: {
            cafe: findCafeById ? findCafeById : {},
        },
    };
}

export async function getStaticPaths() {
    const cafes = await fetchCafes();
    const paths = cafes.map((cafe) => {
        return {
            params: {
                id: cafe.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: true,
    };
}

const Cafe = (initialProps) => {
    const router = useRouter();

    const id = router.query.id;

    const [cafe, setCafe] = useState(initialProps.cafe || {});

    const {
        state: { cafes },
    } = useContext(CafeContext);

    const handleCreateCafe = async (cafe) => {
        try {
            const { id, name, imgUrl, address, postcode, locality, votes } =
                cafe;
            const response = await fetch("/api/createCafe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    name,
                    imgUrl,
                    address,
                    postcode,
                    locality,
                    votes: 0,
                }),
            });

            const dbCafe = await response.json();
        } catch (err) {}
    };

    useEffect(() => {
        if (isEmpty(initialProps.cafe)) {
            if (cafes.length > 0) {
                const cafeFromContext = cafes.find((cafe) => {
                    return cafe.id.toString() === id; //dynamic id
                });

                if (cafeFromContext) {
                    setCafe(cafeFromContext);
                    handleCreateCafe(cafeFromContext);
                }
            }
        } else {
            // SSG
            handleCreateCafe(initialProps.cafe);
        }
    }, [id, initialProps, initialProps.cafe, cafes]);

    const {
        name = "",
        imgUrl = "",
        address = "",
        postcode = "",
        locality = "",
    } = cafe;
    const [votesCount, setVotesCount] = useState(0);

    const { data, error } = useSWR(`/api/getCafeById?id=${id}`, fetcher);

    useEffect(() => {
        if (data && data.length > 0) {
            setCafe(data[0]);

            setVotesCount(data[0].votes);
        }
    }, [data]);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const handleUpvoteButton = async () => {
        try {
            const response = await fetch("/api/favouriteCafeById", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                }),
            });

            const dbCafe = await response.json();

            if (dbCafe && dbCafe.length > 0) {
                let count = votesCount + 1;
                setVotesCount(count);
            }
        } catch (err) {}
    };

    if (error) {
        return <div>Something went wrong retrieving cafe page</div>;
    }

    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
                <meta name="description" content={`${name}`}></meta>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image
                        src={imgUrl || "/static/icons/places.svg"}
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                    ></Image>
                </div>

                <div className={cls("glass", styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image
                            src="/static/icons/places.svg"
                            width="24"
                            height="24"
                            alt="places icon"
                        />
                        <p className={styles.text}>{address}</p>
                    </div>

                    <div className={styles.iconWrapper}>
                        <Image
                            src="/static/icons/nearMe.svg"
                            width="24"
                            height="24"
                            alt="near me icon"
                        />
                        <p className={styles.text}>
                            {postcode} {locality}
                        </p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image
                            src="/static/icons/star.svg"
                            width="24"
                            height="24"
                            alt="star icon"
                        />
                        <p className={styles.text}>{votesCount}</p>
                    </div>

                    <button
                        className={styles.upvoteButton}
                        onClick={handleUpvoteButton}
                    >
                        Up vote!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cafe;
