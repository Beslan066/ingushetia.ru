
import React from 'react'
import { useEffect } from 'react';
import Modal from "@/Components/Modal.jsx";
import {usePage} from "@inertiajs/react";
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function HomeNewsSidebar({key, title, lead, content, image, user, category, onClick, stateValue, agency, published}) {

    const [modal,setModal] = React.useState(false);
    const formattedDate = format(parseISO(published), 'HH:mm, d MMMM', { locale: ru });

    useEffect(() => {
        if (modal) {
            document.body.classList.add('fixed-body')
        }else {
            document.body.classList.remove('fixed-body')
        }
    })




    return (


    <div className="news-item">
            <div className="news-date d-flex">
                <div>
                    {formattedDate} <span
                    className="news-category">{category}</span>
                </div>
                <img src="img/icons/video-icon.svg" alt=""/>
            </div>
            <h2 onClick={() => setModal(true)}>{title}</h2>


            <Modal
                title={title}
                date={formattedDate}
                category={category}
                image={image}
                content={content}
                active={modal} onClose={() => setModal(false)}/>
        </div>

    )
}
