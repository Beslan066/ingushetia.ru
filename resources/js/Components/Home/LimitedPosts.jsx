import {Link} from "@inertiajs/react";
import {format, parseISO} from "date-fns";
import {ru} from "date-fns/locale";
import Modal from "@/Components/Modal.jsx";
import React from "react";

export default function LimitedPosts({key, title, lead, content, image, user, category, onClick, stateValue, agency, published, video, reportages, baseUrl}) {

    const formattedDate = format(parseISO(published), 'HH:mm, d MMMM', { locale: ru });
    const [modal,setModal] = React.useState(false);


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
        <div key={key} className="filtered-news-item col-4">
            <div className="news-image" onClick={() => setModal(true)}>
                <img src={`${baseUrl}/storage/${image}`} alt=""
                     className="w-100 h-100"/>
            </div>

            <div className="news-text">
                <p className="news-date">
                    {formattedDate} <span
                    className="news-category ml-4">{category}</span>
                </p>
                <h4 onClick={() => setModal(true)}>{title}</h4>
            </div>

            <Modal
                title={title}
                reportages={cleanSlidesString}
                date={formattedDate}
                category={category}
                image={image}
                content={content}
                active={modal} onClose={() => setModal(false)}/>
        </div>
    )
}
