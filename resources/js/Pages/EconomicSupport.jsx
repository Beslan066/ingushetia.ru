import DownloadIcon from "@/Components/DownloadIcon.jsx";
import Guest from "@/Layouts/GuestLayout.jsx";
import {Link, usePage} from "@inertiajs/react";

export default function EconomicSupport() {

    const baseUrl = import.meta.env.VITE_APP_URL;
    let {economicSupports} = usePage().props;
    let {economicSupportsBuisness} = usePage().props;

    return (
        <Guest>
            <main>
                <div className="container mt-40">
                    <h2 className={'mb-32'}>Поддержка экономики и граждан</h2>
                </div>

                <div className="container d-flex w-full  col-xxl-12">
                    <div className="main-left col-9">
                        <div className={'economic-support-lead mb-32'}>
                            <p>Сформирован пакет мер поддержки граждан и бизнеса в условиях санкций, который включает
                                решения для малого и среднего бизнеса, аграрного сектора, IT-компаний, строительной
                                отрасли,
                                сферы закупок и других отраслей.
                            </p>
                            <p>
                                Пакет мер поддержки будет дополняться. Мы в тесном контакте с Правительством РФ:
                                направляем
                                предложения с новыми мерами поддержки, которые вырабатываются совместно с
                                предпринимательским
                                сообществом региона.
                            </p>
                        </div>
                        <div className="for-peoples mb-32">
                            <h2>Для граждан</h2>
                            <div className={'d-flex flex-wrap'}>
                                {economicSupports &&
                                    economicSupports.map((economicSupport) => (
                                        <div className="col economic-support-card">
                                            <h4>{economicSupport.title}</h4>
                                            <span>{economicSupport.lead}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="for-buisness">
                            <h2>Для бизнеса</h2>
                            <p>Проконсультироваться по мерам поддержки можно на горячей линии центра «Мой бизнес»</p>
                            <div className="d-flex flex-wrap">
                                {economicSupportsBuisness &&
                                    economicSupportsBuisness.map((supportBuisness) => (
                                        <div className="col economic-support-card">
                                            <h4>{supportBuisness.title}</h4>
                                            <span>{supportBuisness.lead}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="main-right col-3  ml-32">
                        <div className="d-flex flex-column mb-32 region-links">
                            <ul className="region-pager">
                                <li className="active"><Link href="/region">О Республике</Link></li>
                                <li><Link href="/history">История</Link></li>
                                <li><Link href="/economic">Экономика</Link></li>
                                <li><Link href="/municipality">Муниципальные образования</Link></li>
                                <li><Link href="">Социально-экономическое развитие</Link></li>
                                <li><Link href="">Реализация стратегических инициатив Президента РФ</Link></li>
                                <li><Link href="/economic-support">Поддержка экономики и граждан</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Guest>
    )
}
