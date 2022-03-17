const Modal = ({ toggle }) => {
    return (
        <>
            <div className="modal-container">
                <div className="modal-box">
                    <div className="modal__header">
                        <h1>Rules</h1>
                        <button onClick={toggle}>
                            <img
                                src="/images/icon-close.svg"
                                alt="Close"
                                srcSet=""
                            />
                        </button>
                    </div>
                    <img src="/images/image-rules.svg" alt="Rules" srcSet="" />
                </div>
            </div>
        </>
    );
};

export default Modal;
