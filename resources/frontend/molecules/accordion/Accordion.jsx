import { useState } from "react";
import './accordion.css'

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={ `accordion accordion--${open ? 'opened' : 'closed'}` }>
      <button className="accordion__header" onClick={ () => setOpen(!open) }>
        <span>{ title }</span>
        <span className="accordion__icon"><img src={ open ? '/img/icons/Minus.svg' : '/img/icons/Plus.svg' } alt="иконка открытия"/></span>
      </button>
      <div className="accordion__body">
        { children }
      </div>
    </div>
  )
}
