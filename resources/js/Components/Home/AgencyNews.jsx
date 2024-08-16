import {Link} from "@inertiajs/react";
import React from "react";
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';


export default function AgencyNews({agencies, agencyNews, baseUrl}) {

    // Состояние для выбранной категории
    const [selectedAgencies, setSelectedAgencies] = useState(null);

    // Функция для обработки клика по категории
    const handleCategoryClick = (agency) => {
        setSelectedAgencies(agency);
    };

    // Функция для обработки клика по кнопке "Все новости"
    const handleAllNewsClick = () => {
        setSelectedAgencies(null);
    };

    // Фильтрация постов по выбранной категории
    const filteredPosts = selectedAgencies
        ? agencyNews.filter(post => post.agency_id === selectedAgencies.id)
        : agencyNews;


    // Ограничение вывода новостей до 3 постов
    const limitedPosts = filteredPosts.slice(0, 8);

    // Функция для форматирования даты
    const formatDate = (dateString) => {
        const date = parseISO(dateString);
        return format(date, 'HH:mm, d MMMM', { locale: ru });
    };
    return (
        <section className="home-media">
            <div className="container d-flex flex-column">
                <h3>Новости министерств</h3>
                <div className="filtered-news w-full d-flex mt-40 flex-column">

                    <div className="filter-items">
                        <button
                            className={`filter-button ${selectedAgencies === null ? 'active' : ''}`}
                            onClick={handleAllNewsClick}
                        >
                            Все новости
                        </button>
                        {agencies.map((agency) => (
                            <button
                                key={agency.id}
                                className={`filter-button ${selectedAgencies && selectedAgencies.id === agency.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(agency)}
                            >
                                {agency.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap">

                    {limitedPosts &&
                        limitedPosts.map((post) => (
                            <div className="filtered-news-item col-4 ">
                            <div className="news-image">
                                    <img style={{objectFit: 'cover'}} src={`${baseUrl}/storage/${post.image_main}`} alt="" className="w-100 h-100"/>
                                </div>

                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                    <div>
                                        <Link href="">
                                            <h4>{post.title.slice(0,90)}</h4>
                                        </Link>
                                    </div>
                                    <p className="news-date">{formatDate(post.published_at)}<span
                                        className="news-category ml-4">{post.category.title}</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </section>
    )
}
