import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import MunicipalityModal from "@/Components/MunicipalityModal.jsx";

export default function Municipality({ cities, district, baseUrl }) {
    const [selectedMunicipality, setSelectedMunicipality] = useState(null);

    useEffect(() => {
        if (cities && cities.length > 0) {
            setSelectedMunicipality(cities[0]);
        } else if (district && district.length > 0) {
            setSelectedMunicipality(district[0]);
        }
    }, [cities, district]);

    const handleCityClick = (city) => {
        setSelectedMunicipality(city);
    };

    const handleDistrictClick = (district) => {
        setSelectedMunicipality(district);
    };


    const [regionModal,setRegionModal] = React.useState(false);

    return (
        <section className="municipalities mb-32">
            <div className="container d-flex flex-column">
                <h3 className="mb-48 mt-32">Районы и округа</h3>
                <div className="d-flex col-xxl-12 mb-32">
                    <div onClick={() => setRegionModal(true)} className="municipality-image col-xxl-9 position-relative">
                        {selectedMunicipality && (
                            <>
                                <img className="w-100 h-100 clean-image"
                                     src={`${baseUrl}/storage/${selectedMunicipality.image_main}`}
                                     alt={selectedMunicipality.title}/>
                                <div
                                    className="d-flex align-items-center position-absolute municipality-info justify-content-between">
                                    <div className="municipality-title">
                                        <h4>{selectedMunicipality.title}</h4>
                                        <Link href="" className={'d-flex'}>
                                            Подробнее
                                            <img src="img/icons/longarrow.svg" alt="" className={'pl-3'} />
                                        </Link>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Основан</span>
                                        <span>{selectedMunicipality.year} г</span>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Площадь</span>
                                        <span>{selectedMunicipality.square}</span>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Население</span>
                                        <span>{selectedMunicipality.population}</span>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Глава города</span>
                                        <span>{selectedMunicipality.supervisor.name}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="municipality-city col-xxl-3 d-flex flex-column ml-32">
                        <div className="d-flex flex-column mb-4">
                            <h4 className="mb-24">Городские округа</h4>
                            {cities && (
                                <ul className="d-flex flex-column mb-32">
                                    {cities.map((city) => (
                                        <li
                                            key={city.title}
                                            onClick={() => handleCityClick(city)}
                                            className={selectedMunicipality && selectedMunicipality.title === city.title ? "active" : ""}
                                        >
                                            {city.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="d-flex flex-column">
                            <h4 className="mb-24">Муниципальные районы</h4>
                            {district && (
                                <ul className="d-flex flex-column mb-32">
                                    {district.map((district) => (
                                        <li
                                            key={district.title}
                                            onClick={() => handleDistrictClick(district)}
                                            className={selectedMunicipality && selectedMunicipality.title === district.title ? "active" : ""}
                                        >
                                            {district.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {selectedMunicipality &&
                <MunicipalityModal active={regionModal}
                                   onClose={() => setRegionModal(false)}
                                   title={selectedMunicipality.title}
                                   arms={selectedMunicipality.arms}
                                   content={selectedMunicipality.content}
                                   square={selectedMunicipality.square}
                                   year={selectedMunicipality.year}
                                   population={selectedMunicipality.population}
                                   supervisorName={selectedMunicipality.supervisor.name}
                                   supervisorImage={selectedMunicipality.supervisor.image_main}
                                   supervisorBio={selectedMunicipality.supervisor.bio}
                                   baseUrl={baseUrl}
                />
            }

        </section>
    );
}
