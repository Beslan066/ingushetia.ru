import "../../../../public/css/region.css";
import React, { useRef, useEffect } from 'react';

export default function Accordion({ title, content, id, isOpen, onClick }) {
    const drawerRef = useRef(null);

    useEffect(() => {
        const drawer = drawerRef.current;

        if (isOpen) {
            drawer.style.maxHeight = `${drawer.scrollHeight}px`;
        } else {
            drawer.style.maxHeight = '0px';
        }
    }, [isOpen]);

    return (
        <div>
            <div className="accordion-header" onClick={() => onClick(id)}>
                <span>{title}</span>
                <img
                    src={isOpen ? "../../img/icons/Minus.svg" : "../../img/icons/Plus.svg"}
                    alt=""
                    className="icon"
                />
            </div>
            <div className="drawer" id={id} ref={drawerRef}>
                <div className="drawer-content">
                    {content}
                </div>
            </div>
        </div>
    );
}
