import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import "./styles.css";

const Modal = (props) => {
    const [isDisabled, setDisabled] = useState(true);
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        let timer = setInterval(() => setCounter((prev) => prev - 1), 1000);
        if (counter === 0) {
            setDisabled(false);
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isDisabled, counter]);

    useEffect(() => {
        const keyPressHandler = (e) => {
            e.key === "Escape" && props.onClose(false);
        };

        document.addEventListener("keydown", keyPressHandler);

        return () => {
            document.removeEventListener("keydown", keyPressHandler);
        };
    }, [props]);

    const modalsRoot = document.getElementById("modals");

    return ReactDOM.createPortal(
        <>
            <div className="modal">
                <div onClick={() => props.onClose(false)} className="close">
                    X
                </div>
                <div className="modalContainer">
                    <h1>Agree with the rules</h1>
                    <p>
                        Special terms and conditions of use apply for this function, 
                        they must be confirmed by clicking on the Confirm button
                    </p>
                    <div className="buttons">
                        <button onClick={() => props.onClose(false)}>Cancel</button>
                        <button disabled={isDisabled} onClick={() => props.onClose(true)}>
                            Confirm {counter >= 1 ? counter : ""}
                        </button>
                    </div>
                </div>
            </div>
            <ModalOverlay onClose={() => props.onClose(false)} />
        </>,
        modalsRoot
    );
};

export default Modal;
