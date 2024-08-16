
import React from 'react'
import { useEffect } from 'react';
import Modal from "@/Components/Modal.jsx";
import {usePage} from "@inertiajs/react";
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function HomeNewsSidebar({key, title, lead, content, image, user, category, onClick, stateValue, agency, categoryId, published, video, reportages}) {

    const [modal,setModal] = React.useState(false);
    const formattedDate = format(parseISO(published), 'HH:mm, d MMMM', { locale: ru });

    useEffect(() => {
        if (modal) {
            document.body.classList.add('fixed-body')
        }else {
            document.body.classList.remove('fixed-body')
        }
    })


    // Функция для очистки строки от HTML-сущностей и лишних символов
    const decodeHtmlEntities = (str) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    };

    // Проверка наличия и обработка строки slides
    const cleanSlidesString = reportages?.slides
        ? decodeHtmlEntities(reportages.slides)
            .replace(/^\[\"|\"\]$/g, '') // Убираем квадратные скобки и кавычки вокруг строки
            .replace(/\\\"/g, '"') // Заменяем экранированные кавычки на обычные
            .split('","') // Разделяем строки по разделителю между путями
        : [];

    return (


    <div className="news-item">
            <div className="news-date d-flex">
                <div>
                    {formattedDate} <span
                    className="news-category">{category}</span>
                </div>
                {video &&
                    <img src="img/icons/video-icon.svg" alt=""/>
                }
            </div>
        <h2 onClick={() => setModal(true)}>{title}</h2>


            <Modal
                title={title}
                categoryId={categoryId}
                reportages={cleanSlidesString}
                date={formattedDate}
                category={category}
                image={image}
                content={content}
                active={modal} onClose={() => setModal(false)}/>
        </div>

    )
}
