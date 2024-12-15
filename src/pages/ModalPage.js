import { useEffect, useState } from "react";
import Modal from "../components/Modal";

function ModalPage () {
    // initializing an state variable to show and close modal
    const [showModal, setShowModal] = useState(false);

    // use Effect for the purpose of adding and removing a class to the root element while using modal that user should not be able to scroll
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        // adding clean up function which is very important
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    // handling onClick to show modal
    const handleModalClick = () => {
        setShowModal(true);
    }

    // handling modal close function
    const onClose = () => {
        setShowModal(false);
    }

    // Modal Action Bar
    const actionBar = (
        <div className="">
            <button onClick = { onClose } className="px-5 py-3 rounded bg-blue-500 text-white text-xl"> I Accept </button>
        </div>
    );

    // Modal Content
    const modal = <Modal onClose = { onClose } actionBar = { actionBar }>
        <p> Here is an important agreement for you to accept </p>
    </Modal>
    return (
        <div className="">
            <button onClick = { handleModalClick } className="px-5 py-3 rounded bg-blue-500 text-white text-xl"> Show Modal </button>
            { showModal && modal }
        </div>
    )
}

export default ModalPage;