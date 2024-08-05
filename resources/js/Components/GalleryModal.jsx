import "../../../public/css/modal.css";
import React from 'react'
import { useEffect, useState } from 'react';
export default function GalleryModal({ active, onClose, title, image, content, category, date, slides }) {

    const baseUrl = import.meta.env.VITE_APP_URL;

    // Функция для очистки строки от HTML-сущностей и лишних символов
    const decodeHtmlEntities = (str) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    };

    // Очистка строки slides и преобразование в массив путей к изображениям
    const cleanSlidesString = decodeHtmlEntities(slides)
        .replace(/^\[\"|\"\]$/g, '') // Убираем квадратные скобки и кавычки вокруг строки
        .replace(/\\\"/g, '"') // Заменяем экранированные кавычки на обычные
        .split('","'); // Разделяем строки по разделителю между путями
    return (
        <div>
            <div className={`d-flex justify-content-center modal-section`}>
                <div className={`main-modal col-7 p-32 ${active ? 'active' : ''}`} id="mainModal">
                    <div className="modal-head w-100 d-flex aligh-items-center justify-content-between">
                        <p className="d-flex aligh-items-center">
                            <a href="">Главная </a>
                            <span className="ml-12"><img className={'next-icon'} src="../../img/icons/no.svg"
                                                         alt=""/></span>
                            <a className="ml-12" href="">Новости </a>
                            <span className="ml-12"><img className={'next-icon'} src="../../img/icons/no.svg"
                                                         alt=""/></span>
                            <a className="ml-12" href="">{}</a>
                        </p>
                        <div>
                            <button className="mr-12"><img src="img/icons/Print.png" alt=""/></button>
                            <button onClick={onClose}><img src="img/icons/Close.png" alt=""/></button>
                        </div>
                    </div>

                    <div className="modal-news-content mt-40 mb-24">
                        <div className="modal-news-date">
                            <p className="news-date text-black mb-4">{}<span
                                className="news-category">{}</span></p>
                        </div>

                        <div className="modal-news-title">
                            <h2>{title}</h2>
                        </div>

                        <div className="modal-news-images mt-4 d-flex flex-wrap">
                            {cleanSlidesString.map((slide, index) => (
                                <div className={'slide_image'}>
                                    <img key={index} className="modal-news-image" src={`${baseUrl}/storage/${slide}`}
                                         alt={`Slide ${index + 1}`}/>
                                </div>
                            ))}
                        </div>

                    </div>


                    <div className="modal-tags d-flex flex-column mb-24">
                        <div className="tags d-flex aligh-items-center mb-24">
                            <span className="mr-12">Теги:</span>
                            <a href="" type="button">Спорт</a>
                            <a href="" type="button">Новые проекты</a>
                            <a href="" type="button">Калиматов</a>
                            <a href="" type="button">Гамурзиево</a>
                        </div>
                        <div className="share-buttons d-flex aligh-items-center">
                            <span className="mr-12">Поделиться:</span>
                            <a href="" type="button"><img src="img/icons/social/telegram (1).png" alt=""/></a>
                            <a href="" type="button"><img src="img/icons/social/VK.png" alt=""/></a>
                            <a href="" type="button"><img src="img/icons/social/ok.png" alt=""/></a>
                            <a href="" type="button"><img src="img/icons/social/Whatsapp.png" alt=""/></a>
                            <a href="" type="button"><img src="img/icons/social/Link.png" alt=""/></a>

                        </div>
                    </div>

                    <div className="see-also d-flex flex-column">
                        <h3 className="mb-24">Смотрите также</h3>
                        <div className="d-flex justify-content-between aligh-items-center">
                            <div className="filtered-news-item">
                                <div className="news-image">
                                    <img className="w-100" src="img/14.png" alt=""/>
                                </div>

                                <div className="news-text p-25 mt-4">
                                    <a href="">
                                        <h4>Для туристов в республике запустят специальную программу</h4>
                                    </a>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item ">
                                <div className="news-image">
                                    <img className="w-100" src="img/15.png" alt=""/>
                                </div>

                                <div className="news-text p-25 mt-4">
                                    <a href="">
                                        <h4>Для туристов в республике запустят специальную программу</h4>
                                    </a>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item">
                                <div className="news-image">
                                    <img className="w-100" src="img/16.png" alt=""/>
                                </div>

                                <div className="news-text p-25 mt-4">
                                    <a href="">
                                        <h4>Для туристов в республике запустят специальную программу</h4>
                                    </a>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
