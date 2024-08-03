import React, { useState, useEffect } from 'react';
import Guest from "@/Layouts/GuestLayout.jsx";
import { usePage } from "@inertiajs/react";
import Slider from "@/Components/Home/Slider.jsx";
import NewsComponent from "@/Components/News/NewsComponent.jsx";
import NewsFilter from "@/Components/News/NewsFilter.jsx";

export default function News() {
    const { mainPosts, news: initialNews, categories } = usePage().props;
    const baseUrl = import.meta.env.VITE_APP_URL;

    const [news, setNews] = useState(initialNews);
    const [filters, setFilters] = useState({
        category: 'all',
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const applyFilters = () => {
        const filteredNews = initialNews.filter((item) => {
            const matchesCategory = filters.category === 'all' || item.category.title === filters.category;
            const matchesDateFrom = filters.startDate ? new Date(item.published_at) >= new Date(filters.startDate) : true;
            const matchesDateTo = filters.endDate ? new Date(item.published_at) <= new Date(filters.endDate) : true;
            return matchesCategory && matchesDateFrom && matchesDateTo;
        });

        setNews(filteredNews);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <Guest>
            <main className="mt-40">
                <div className="container">
                    <h2 className="mb-32">Новости</h2>
                </div>
                <div className="container d-flex w-full col-xxl-12 news-page">
                    <div className="main-left col-xxl-9">
                        <div className="main-materials">
                            {mainPosts && (
                                <Slider
                                    baseUrl={baseUrl}
                                    mainPosts={mainPosts}
                                />
                            )}

                            <div className="filtered-news w-full d-flex mt-40 flex-column">
                                <NewsFilter categories={categories} onFilterChange={handleFilterChange} />
                                <NewsComponent
                                    news={news}
                                    baseUrl={baseUrl}
                                    selectedCategory={filters.category}
                                    selectedStartDate={filters.startDate}
                                    selectedEndDate={filters.endDate}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="main-right ml-32">
                        <div className="d-flex flex-column mb-32 news-sidebar p-3">
                            <h4>Популярное</h4>
                            <div className="news-item">
                                <div className="news-date d-flex">
                                    <div>
                                        09:22, 5 июня <span className="news-category">Образование</span>
                                    </div>
                                </div>
                                <h2 onClick={() => setModal(true)}>В с.п. Сурхахи открылась новая школа на 320 мест</h2>
                            </div>

                            <div className="news-item">
                                <div className="news-date d-flex">
                                    <div>
                                        11:34, 2 июля <span className="news-category">Образование</span>
                                    </div>
                                    <img src="img/icons/video-icon.svg" alt=""/>
                                </div>
                                <h2 onClick={() => setModal(true)}>В Яндаре по программе «Развитие образования» построили новый детский сад-ясли</h2>
                            </div>

                            <div className="news-item">
                                <div className="news-date d-flex">
                                    <div>
                                        18:15, 29 июня <span className="news-category">Общество</span>
                                    </div>
                                </div>
                                <h2 onClick={() => setModal(true)}>Ингушетия снова в тройке лидеров по ожидаемой продолжительности жизни</h2>
                            </div>

                            <div className="news-item">
                                <div className="news-date d-flex">
                                    <div>
                                        21:57, 28 июня <span className="news-category">Общество</span>
                                    </div>
                                </div>
                                <h2 onClick={() => setModal(true)}>М-А. Калиматов проверил ход восстановительных работ в Карабулаке</h2>
                            </div>

                            <div className="news-item">
                                <div className="news-date d-flex">
                                    <div>
                                        13:45, 8 июля <span className="news-category">Проекты</span>
                                    </div>
                                    <img src="img/icons/video-icon.svg" alt=""/>
                                </div>
                                <h2 onClick={() => setModal(true)}>Ингушетия снова в тройке лидеров по ожидаемой продолжительности жизни</h2>
                            </div>

                            <div className="more-news">
                                <a href="" className="d-flex">
                                    <span>Смотреть все</span>
                                    <img src="img/icons/longarrow.svg" alt="" className="pl-3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Guest>
    );
}
