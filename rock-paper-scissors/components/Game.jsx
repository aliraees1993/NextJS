import { useState, useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "../context/state";

const Game = () => {
    const { score, myChoice, setScore } = useAppContext();
    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("");

    const [counter, setCounter] = useState(3);

    const newHousePick = () => {
        const choices = ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random() * 3)]);
    };

    useEffect(() => {
        newHousePick();
    }, []);

    const result = () => {
        if (myChoice === "rock" && house === "scissors") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "rock" && house === "paper") {
            setPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "scissors" && house === "paper") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "scissors" && house === "rock") {
            setPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "paper" && house === "rock") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "paper" && house === "scissors") {
            setPlayerWin("lose");
            setScore(score - 1);
        } else {
            setPlayerWin("draw");
        }
    };

    useEffect(() => {
        const timer =
            counter > 0
                ? setInterval(() => {
                      setCounter(counter - 1);
                  }, 1000)
                : result();

        return () => {
            clearInterval(timer);
        };
    }, [counter, house]);

    return (
        <div className="game">
            <div className="game__you">
                <span className="text">You Picked</span>
                <div
                    className={`icon icon--${myChoice} ${
                        playerWin == "win"
                            ? `icon icon--${myChoice}--winner`
                            : ""
                    }`}
                ></div>
            </div>
            {playerWin == "win" && (
                <div className="game__play">
                    <span className="text">You Win</span>
                    <Link href="/" onClick={() => setHouse()} passHref>
                        <a className="play-again">Play Again</a>
                    </Link>
                </div>
            )}
            {playerWin == "lose" && (
                <div className="game__play">
                    <span className="text">You Lose</span>
                    <Link href="/" onClick={() => setHouse()} passHref>
                        <a className="play-again">Play Again</a>
                    </Link>
                </div>
            )}
            {playerWin == "draw" && (
                <div className="game__play">
                    <span className="text">Draw</span>
                    <Link href="/" onClick={() => setHouse()} passHref>
                        <a className="play-again">Play Again</a>
                    </Link>
                </div>
            )}

            <div className="game__house">
                <span className="text">The House Picked</span>
                {counter == 0 ? (
                    <div
                        className={`icon icon--${house} ${
                            playerWin == "lose"
                                ? `icon icon--${house}--winner`
                                : ""
                        }`}
                    ></div>
                ) : (
                    <div className="counter">{counter}</div>
                )}
            </div>
        </div>
    );
};

export default Game;
