import { useAppContext } from "../context/state";

const Header = () => {
    return (
        <div className="header">
            <div className="text">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </div>
            <div className="score-box">
                <span>Score</span>
                <div className="score-box__score">{useAppContext().score}</div>
            </div>
        </div>
    );
};

export default Header;
