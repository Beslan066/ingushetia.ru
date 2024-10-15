import './municipality-content.css'
import Gallery from "#/atoms/gallery/gallery.jsx";
import React from "react";
import Tag from "#/atoms/tags/tag.jsx";

export default function MunicipalityContent({ municipality }) {
  if (!municipality) {
    return null;
  }

  return (
    <div className="municipality-content">
      <div className="municipality__body-wrapper">

        <div className="municipality-modal__body">
          <h2 className="municipality-modal__title">{ municipality.title }</h2>
          <div className="municipality-modal__bio">
            <div className="municipality-modal__logo">
              <img src={ `/storage/${ municipality.arms }` } alt="Герб города Магас"/>
            </div>
            <div className="municipality-modal__bio-content" dangerouslySetInnerHTML={ { __html: municipality.content } }></div>
          </div>

          <div className="municipality-modal__properties">
            <div className="stat-item">
              <p>{ municipality.square }</p>
              <span>Площадь</span>
            </div>
            <div className="stat-item">
              <p>{ municipality.year } г.</p>
              <span>Основан</span>
            </div>
            <div className="stat-item">
              <p>{ municipality.population } чел.</p>
              <span>Население</span>
            </div>
          </div>

          <div className="city-head">
            <div className="head-person-image">
              <img src={ `/storage/${ municipality.supervisor.image_main }` } alt=""/>
            </div>
            <div className="head-person-info">
              <h3>{ municipality.supervisor.name }</h3>
              <span>Глава г.Магас</span>
              <div className={ 'head-bio' } dangerouslySetInnerHTML={ { __html: municipality.supervisor.bio } }></div>
            </div>
          </div>
        </div>
      </div>

      {
        <Gallery gallery={ ['/img/content/magas.webp', '/img/content/magas1', '/img/content/magas2', '/img/content/Magas3.jpg', '/img/content/magas4.jpg', '/img/Rectangle 1.png'] }/>
      }
    </div>
  )
}
