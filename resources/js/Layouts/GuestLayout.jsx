"use client";
import { Link } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.css';
import "../../../public/css/globals.css";
import "../../../public/css/region.css";


export default function Guest({ children }) {
    return (
        <div>
            <header>
                <div className="container p-16 d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-center">
                        <img src="img/logo.svg" alt="" className="mr-12"/>
                        <Link href={'/'}>
                            <div>
                                <h1 className="main-title">Республика Ингушетия</h1>
                                <p className="main-desc">ОФициальный портал</p>
                            </div>
                        </Link>
                    </div>
                    <nav className="header-menu">
                        <ul className="d-flex align-items-center topmenu">
                            <li><Link href={'news'}>Новости</Link></li>
                            <li><Link href={'region'}>Регион</Link></li>
                            <li>
                                <Link href="">Органы власти</Link>
                                <ul className="submenu">
                                    <li><Link href="">Глава Республики</Link></li>
                                    <li><Link href="/pravitelstvo">Правительство</Link></li>
                                    <li><Link href="">Федеральные органы власти</Link></li>
                                </ul>
                            </li>
                            <li><Link href="">Медиа</Link></li>
                            <li><Link href="">Документы</Link></li>
                            <li><Link href="">Контакты</Link></li>
                            <div className="d-flex">
                                <li className="menu-icons">
                                    <img src="img/icons/search.svg" alt="Ingushetia search"/>
                                </li>
                                <li className="menu-icons">
                                    <button style={{border: 'none'}}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 6H22" stroke="black" strokeWidth={"2"}/>
                                            <path d="M2 12H22" stroke="black" strokeWidth={"2"}/>
                                            <path d="M2 18H22" stroke="black" strokeWidth={"2"}/>
                                        </svg>
                                    </button>

                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </header>
            {children}
            <footer>
                <div className="container p-32">
                    <div className="d-flex justify-content-between mb-32" style={{borderBottom: '2px solid #6C6C6C'}}>
                        <div>
                            <h3 className="mb-24">ОРГАНЫ ВЛАСТИ</h3>
                            <ul>
                                <li>
                                    <Link href="">Глава Республики</Link>
                                </li>
                                <li>
                                    <Link href="">Народное собрание</Link>
                                </li>
                                <li>
                                    <Link href="">Правительство РИ</Link>
                                </li>
                                <li>
                                    <Link href="">Федеральные органы власти</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-24">РЕГИОН</h3>
                            <ul>
                                <li>
                                    <Link href="">Государственная символика, гимн</Link>
                                </li>
                                <li>
                                    <Link href="">Правовой статус и правовое устройство</Link>
                                </li>
                                <li>
                                    <Link href="">Географическое положение и прир. ресурсы</Link>
                                </li>
                                <li>
                                    <Link href="">Население и трудовые ресурсы</Link>
                                </li>
                                <li>
                                    <Link href="">Промышленность и сельское хозяйство</Link>
                                </li>
                                <li>
                                    <Link href="">Инвестиционная привлекательность</Link>
                                </li>
                                <li>
                                    <Link href="">Культура и история</Link>
                                </li>
                                <li>
                                    <Link href="">Исторический формуляр</Link>
                                </li>
                                <li>
                                    <Link href="">Штандарт Главы Республики Ингушетия</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-24">ДЛЯ СМИ</h3>
                            <ul>
                                <li>
                                    <Link href="">Новости</Link>
                                </li>
                                <li>
                                    <Link href="">Фоторепортажи</Link>
                                </li>
                                <li>
                                    <Link href="">Видеорепортажи</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-24">ДОКУМЕНТЫ</h3>
                            <ul>
                                <li>
                                    <Link href="">
                                        Постановления
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        Указы
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">Распоряжения</Link>
                                </li>
                                <li>
                                    <Link href="">Другие</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex aligh-items-center justify-content-between">
                        <div className="logo d-flex align-items-center">
                            <img src="img/logo.svg" alt="" className="mr-12"/>
                            <div>
                                <h1 className="main-title">Республика Ингушетия</h1>
                                <p className="main-desc">ОФициальный портал</p>
                            </div>
                        </div>
                        <button className="support-button">
                            ЗАДАТЬ ВОПРОС
                        </button>
                    </div>
                </div>
            </footer>


        </div>
    );
}
