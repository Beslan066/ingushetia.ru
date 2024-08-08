import {Link, Head, usePage, router} from '@inertiajs/react';
import Guest from "@/Layouts/GuestLayout.jsx";
import Modal from "@/Components/Modal.jsx";
import React from 'react'
import { useEffect, useState } from 'react';
import HomeNewsSidebar from "@/Components/Home/HomeNewsSidebar.jsx";
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import Slider from "@/Components/Home/Slider.jsx";
import MailIcon from "@/Components/Home/MailIcon.jsx";
import VideoPlayer from "@/Components/Home/VideoPlayer.jsx";
import Municipality from "@/Components/Home/Municipality.jsx";
import PhotoReportageItem from "@/Components/Home/PhotoReportageItem.jsx";
import SupportModal from "@/Components/SupportModal.jsx";
import LimitedPosts from "@/Components/Home/LimitedPosts.jsx";
export default function Welcome() {


    let {posts, categories, mainPosts, resources, photoReportages, videos, cities, districts, search, setSearch} = usePage().props;




// Состояние для выбранной категории
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Функция для обработки клика по категории
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Функция для обработки клика по кнопке "Все новости"
    const handleAllNewsClick = () => {
        setSelectedCategory(null);
    };

    // Фильтрация постов по выбранной категории
    const filteredPosts = selectedCategory
        ? posts.filter(post => post.category_id === selectedCategory.id)
        : posts;


    // Ограничение вывода новостей до 3 постов
    const limitedPosts = filteredPosts.slice(0, 3);

    // Функция для форматирования даты
    const formatDate = (dateString) => {
        const date = parseISO(dateString);
        return format(date, 'HH:mm, d MMMM', { locale: ru });
    };


    const baseUrl = import.meta.env.VITE_APP_URL;
    return (


        <Guest>
            <div>
                <main className={`${!search ? 'mt-40' : ''}`}>
                    <div className="container d-flex w-full  col-xxl-12">
                        <div className="main-left col-xxl-9 ">
                            <div className="main-materials ">
                                {mainPosts && <Slider

                                    baseUrl={baseUrl}
                                    mainPosts={mainPosts}
                                />
                                }

                                <div className="filtered-news w-full d-flex mt-40 flex-column">
                                    <div className="filter-items">
                                        <button
                                            className={`filter-button ${selectedCategory === null ? 'active' : ''}`}
                                            onClick={handleAllNewsClick}
                                        >
                                            Все новости
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                className={`filter-button ${selectedCategory && selectedCategory.id === category.id ? 'active' : ''}`}
                                                onClick={() => handleCategoryClick(category)}
                                            >
                                                {category.title}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="d-flex flex-wrap">
                                    {limitedPosts.map((post) => (
                                        <LimitedPosts
                                            key={post.id}
                                            title={post.title}
                                            video={post.video}
                                            reportages={post.reportage}
                                            image={post.image_main}
                                            lead={post.lead}
                                            content={post.content}
                                            user={post.user}
                                            agency={post.agency}
                                            category={post.category.title}
                                            published={post.published_at}
                                            baseUrl={baseUrl}
                                        />
                                        ))}
                                    </div>

                                    <div className="more-news">
                                        <Link href={route('news.index')} className={'d-flex'}>
                                            <span>Больше новостей</span>
                                            <img src="img/icons/longarrow.svg" alt="" className={'pl-3'}/>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="main-right  ml-32">
                            <div className="d-flex flex-column mb-32 news-sidebar">

                                {posts.map((post) => {
                                    return (
                                        <HomeNewsSidebar
                                            key={post.id}
                                            title={post.title}
                                            video={post.video}
                                            reportages={post.reportage}
                                            image={post.image_main}
                                            lead={post.lead}
                                            content={post.content}
                                            user={post.user}
                                            agency={post.agency}
                                            category={post.category.title}
                                            published={post.published_at}
                                        />
                                    );
                                })}

                                <div className="more-news">
                                    <Link className={'d-flex'} href={route('news.index')}>
                                        <span>Смотреть все</span>
                                        <img src="img/icons/longarrow.svg" alt="" className={'pl-3'}/>
                                    </Link>
                                </div>
                            </div>

                            <div className="important p-24">
                                <div className="important-title">
                                    <h2>Важное</h2>
                                </div>
                                <ul>
                                    <li>
                                        <Link href={route('natProjects')} >Нац. проекты</Link>
                                    </li>
                                    <li>
                                        <Link href={route('svoSupport')}>Поддержка семей участников СВО</Link>
                                    </li>
                                    <li>
                                        <Link href="">Инвестиции</Link>
                                    </li>
                                    <li>
                                        <Link href="">Противодействие коррупции</Link>
                                    </li>
                                    <li>
                                        <Link href="">Помощь нуждающимся</Link>
                                    </li>
                                </ul>
                                <div className="important-application d-flex align-items-center">
                                    <MailIcon />
                                    <span className={'ml-2'}>
                                        Написать обращение
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <section className="ingushetia-vectors mt-32">
                    <div className="container d-flex flex-column">
                        <h3 className="mb-48">Векторы развития республики</h3>
                        <div className=" d-flex w-100 mb-32">
                            <div className="vector-item  mr-32 w-100 position-relative">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7.png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>АПК</h3>
                                        <div className={'d-flex align-items-center'}>
                                            <img src="img/icons/checkmark.svg" alt=""/>
                                            <span>Создано более 1000 рабочих мест</span>
                                        </div>
                                    </li>
                                    <li className={'d-flex align-items-center'}>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>На 18% увеличен сбор с/х продуктов</span>
                                    </li>
                                    <li className={'d-flex align-items-center'}>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>145 гектаров новых пахатных земель</span>
                                    </li>
                                </ul>
                                <div className={'position-absolute'}>
                                    <Link href="" className={'d-flex'}>
                                        Подробнее
                                        <img src="img/icons/longarrow.svg" alt="" className={'pl-3'}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="vector-item w-100 position-relative">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7 (1).png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>Цифровая сфера</h3>
                                        <div className={'d-flex align-items-center'}>
                                            <img src="img/icons/checkmark.svg" alt=""/>
                                            <span>Открыт IT-университет “Школа 21”</span>
                                        </div>
                                    </li>
                                    <li className={'d-flex align-items-center'}>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Выпущено более 400 IT-специалистов</span>
                                    </li>
                                </ul>
                                <div className={'position-absolute'}>
                                    <Link href="" className={'d-flex'}>
                                        Подробнее
                                        <img src="img/icons/longarrow.svg" alt="" className={'pl-3'}/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-48">
                            <div className="vector-item w-100 mr-32 position-relative">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7 (2).png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>Промышленность</h3>
                                        <div className={'d-flex align-items-center'}>
                                            <img src="img/icons/checkmark.svg" alt=""/>
                                            <span>Запущено 3 новых предприятия</span>
                                        </div>
                                    </li>
                                    <li className={'d-flex align-items-center'}>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Создано более 2000 новых рабочих мест</span>
                                    </li>
                                </ul>
                                <div className={'position-absolute'}>
                                    <Link href="" className={'d-flex'}>
                                        Подробнее
                                        <img src="img/icons/longarrow.svg" alt="" className={'pl-3'}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="vector-item w-100 position-relative">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7 (3).png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>Туризм</h3>
                                        <div className={'d-flex align-items-center'}>
                                            <img src="img/icons/checkmark.svg" alt=""/>
                                            <span>На 20% больше туристов</span>
                                        </div>

                                    </li>
                                    <li className={'d-flex align-items-center'}>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Более 2 новых туристических зон</span>
                                    </li>

                                </ul>
                                <div className={'position-absolute'}>
                                    <Link href="" className={'d-flex'}>
                                        Подробнее
                                        <img src="img/icons/longarrow.svg" alt="" className={'pl-3'}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-media">
                    <div className="container d-flex flex-column">
                        <h3>Новости министерств</h3>
                        <div className="filtered-news w-full d-flex mt-40 flex-column">

                        <div className="filter-items">
                                <button className="active">Миннац</button>
                                <button>Министерство Образования</button>
                                <button>Министерство здравохранения</button>
                                <button>Министерство спорта</button>
                                <button>Комитет по туризму</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap">
                                <div className="filtered-news-item col-4 ">
                                    <div className="news-image">
                                        <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                    </div>

                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>Глава республики посетил открытие новой школы</h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">13:45, 8 июля<span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="filtered-news-item col-4">
                                    <div className="news-image">
                                        <img className="w-100 h-100" src="img/content/image 7 (2).png" alt=""/>
                                    </div>
                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>НИИ Ингушетии представели новый дрон для сельского хозяйства</h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">09:22, 5 июня <span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="filtered-news-item col-4">
                                    <div className="news-image">
                                        <img className="w-100" src="img/content/image 7 (3).png" alt=""/>
                                    </div>

                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">11:34, 2 июля<span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="filtered-news-item col-4">
                                    <div className="news-image">
                                        <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                    </div>

                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>Глава республики посетил открытие новой школы</h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">21:57, 28 июня<span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="filtered-news-item col-4">
                                    <div className="news-image">
                                        <img className="w-100 h-100" src="img/content/image 7 (2).png" alt=""/>
                                    </div>
                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>НИИ Ингушетии представели новый дрон для сельского хозяйства</h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">21:57, 27 июня<span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="filtered-news-item col-4">
                                    <div className="news-image">
                                        <img className="w-100" src="img/content/image 7 (3).png" alt=""/>
                                    </div>

                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">11:57, 26 июня<span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="filtered-news-item col-4">
                                    <div className="news-image">
                                        <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                    </div>

                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>Глава республики посетил открытие новой школы</h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">10:07, 26 июня<span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="filtered-news-item col-4">
                                    <div className="news-image">
                                        <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                    </div>

                                    <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                        <div>
                                            <Link href="">
                                                <h4>Глава республики посетил открытие новой школы</h4>
                                            </Link>
                                        </div>
                                        <p className="news-date">21:15, 25 июня<span
                                            className="news-category ml-4">Проекты</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>

                <Municipality cities={cities} district={districts} baseUrl={baseUrl}/>

                <section className="home-media">
                    <div className="container d-flex flex-column">
                        <h3 className={'mb-24'}>Фото и видеорепортажи</h3>
                        <div className="d-flex justify-content-between flex-wrap">
                            {photoReportages.map((reportage) => (
                                <PhotoReportageItem className={'d-flex'}
                                                    baseUrl={baseUrl}
                                                    reportage={reportage}
                                                    formatDate={formatDate(reportage.published_at)}

                                />
                            ))
                            }

                            {videos.map((video) => (
                                <VideoPlayer
                                    key={video.id}
                                    video={video}
                                    baseUrl={baseUrl}
                                    date={formatDate(video.published_at)}
                                />
                            ))}

                        </div>
                    </div>
                </section>


                <section className="other-resources mb-32">
                    <div className="container">
                        <h3 className="section-title">Полезные ресурсы</h3>
                    </div>
                    <div className="container d-flex justify-content-between aligh-items-center ">
                        {resources.map((resource) => (
                            <div className="resource-item col-3 p-25 d-flex justify-content-between flex-column">
                                <h3>{resource.title}</h3>
                                <div className="d-flex justify-content-between">
                                    <Link href={resource.link}>{resource.link}</Link>
                                    <Link href="">
                                        <img src="img/icons/external link.svg" alt=""/>
                                    </Link>
                                </div>
                            </div>
                        ))
                        }

                    </div>

                    <div className="container mt-40">
                        <div className="resource-arrows d-flex align-items-center">
                            <button><img src="../../img/icons/arrow back.svg" alt=""/></button>
                            <button className={'pl-20'}><img src="../../img/icons/arrow next .svg" alt=""/></button>
                        </div>
                    </div>
                </section>

            </div>

        </Guest>
    );
}
