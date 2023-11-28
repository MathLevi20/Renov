import React, { useState } from 'react';

interface PopupProps {
    message: string;
    active: boolean
}

const Popup: React.FC<PopupProps> = ({ message, active }) => {
    const [showPopup, setShowPopup] = useState(active);
    console.log(active)
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    
    return (
        <div className="relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={togglePopup}>
                Mostrar Popup
            </button>

        </div>
    );
};

export default Popup;
