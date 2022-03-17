import { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <footer className="footer">
                <button className="rules" onClick={toggleModal}>
                    Rules
                </button>
            </footer>
            {showModal ? <Modal toggle={toggleModal} /> : null}
        </>
    );
};

export default Footer;
