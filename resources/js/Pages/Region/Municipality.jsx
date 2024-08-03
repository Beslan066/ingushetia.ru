import "../../../../public/css/region.css";
import Guest from "@/Layouts/GuestLayout.jsx";
import { Link, Head } from '@inertiajs/react';
import React from 'react'
import MunicipalityModal from "@/Components/MunicipalityModal.jsx";



export default function Municipality() {

    const [regionModal,setRegionModal] = React.useState(false);

    return (
        <Guest>
            <main className="mt-40">
                <div className="container">
                    <h2 className="mb-32">Муниципальные образования</h2>
                </div>
                <div className="container d-flex w-full  col-xxl-12 municipality-page">
                    <div className="main-left col-xxl-9">
                        <div className="page-head d-flex flex-column w-100">
                            <div style={{position: 'relative'}} className="w-100">
                                <a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
                                   style={{color:'#eee',fontSize:'12px',position:'absolute',top: '0px'}}>Яндекс Карты</a>
                                <a href="https://yandex.ru/maps/?ll=45.143586%2C43.116569&utm_medium=mapframe&utm_source=maps&z=9.78"
                                   style={{color:'#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Яндекс Карты</a>
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?ll=44.836479%2C43.116569&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA2MRI10KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQmNC90LPRg9GI0LXRgtC40Y8iCg3mNzRCFRRqLEI%2C&z=9.78"
                                    frameBorder="1" allowFullScreen="true" style={{position:'relative'}}></iframe>
                            </div>
                        </div>

                        <div className="mb-32 mt-32">
                            <p>
                                Республика была последним субъектом Федерации, в котором были образованы органы местного
                                самоуправления, это произошло лишь в 2009 году.
                                Тогда были созданы 4 городских округа, 4 муниципальных района и 38 сельских поселений,
                                одно из
                                которых в 2015 году получило статус городского поселения, а в конце
                                2016 года преобразовано в городской округ. Ещё одно в 2010 году ликвидировано путём
                                присоединения к другому сельскому поселению.
                            </p>
                        </div>

                        <div className="cities mb-32">
                            <h3 className="mb-24">Городские округа</h3>
                            <ul>
                                <li onClick={() => setRegionModal(true)}>
                                    <div>
                                        <h4>Магас</h4>
                                        <span>24 550 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                                <li>
                                    <div>
                                        <h4>Назрань</h4>
                                        <span>135 300 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                                <li>
                                    <div>
                                        <h4>Сунжа</h4>
                                        <span>38 340 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                                <li>
                                    <div>
                                        <h4>Малгобек</h4>
                                        <span>79 200 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                                <li>
                                    <div>
                                        <h4>Карабулак</h4>
                                        <span>43 850 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                            </ul>
                        </div>

                        <div className="municipalities-items mb-32">
                            <h3 className="mb-24">Муниципальные районы</h3>
                            <ul>
                                <li>
                                    <div>
                                        <h4>Назрановский район</h4>
                                        <span>248 900 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                                <li>
                                    <div>
                                        <h4>Сунженский район</h4>
                                        <span>98 350 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                                <li>
                                    <div>
                                        <h4>Малгобекский район </h4>
                                        <span>125 400 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>
                                <li>
                                    <div>
                                        <h4>Джейрахский район</h4>
                                        <span>48 250 чел.</span>
                                    </div>
                                    <img src="../../img/icons/arrow grey.svg" alt=""/>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className="main-right  ml-32">
                        <div className="d-flex flex-column mb-32 region-links">
                            <ul className="region-pager">
                                <li><Link href="/region">О Республике</Link></li>
                                <li><Link href="/history">История</Link></li>
                                <li><Link href="/economic">Экономика</Link></li>
                                <li className="active"><Link href="">Муниципальные образования</Link></li>
                                <li><Link href="">Социально-экономическое развитие</Link></li>
                                <li><Link href="">Реализация стратегических инициатив Президента РФ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <MunicipalityModal active={regionModal} onClose={() => setRegionModal(false)}/>
        </Guest>
)
}
