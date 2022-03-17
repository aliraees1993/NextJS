import Image from "next/image";
import Link from "next/link";
import Triangle from "../public/images/bg-triangle.svg";

const Play = ({ setMyChoice }) => {
    const onClickHandle = (choice) => {
        setMyChoice(choice);
    };

    return (
        <div className="play">
            <img src="/images/bg-triangle.svg" alt="" className="triangle" />
            <div className="items">
                <Link href="/game" passHref>
                    <div
                        onClick={() => onClickHandle("paper")}
                        className="icon icon--paper"
                    ></div>
                </Link>
                <Link href="/game" passHref>
                    <div
                        onClick={() => onClickHandle("scissors")}
                        className="icon icon--scissors"
                    ></div>
                </Link>
                <Link href="/game" passHref>
                    <div
                        onClick={() => onClickHandle("rock")}
                        className="icon icon--rock"
                    ></div>
                </Link>
            </div>
        </div>
    );
};

export default Play;
