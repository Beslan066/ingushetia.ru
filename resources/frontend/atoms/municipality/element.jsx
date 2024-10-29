import { Link } from "@inertiajs/react";
import ChevronRightIcon from "#/atoms/icons/chevron-right.jsx";
import './element.css'

export default function MunicipalityElement({ title, population, onClick}) {
  return (
    <div className="municipality-element">
      <div className="municipality-element__info">
        <h4 className="municipality-element__title">{ title }</h4>
        <span className="municipality-element__population">{ population } чел.</span>
      </div>
      <button onClick={onClick} className="municipality-element__link"><ChevronRightIcon color="neutral-dark" /></button>
    </div>
  )
}
