import './modal.css';
import PrintIcon from "#/atoms/icons/print.jsx";
import TimesIcon from "#/atoms/icons/times.jsx";
import Breadcrumbs from "#/atoms/breadcrumbs/breadcrumbs.jsx";

export default function Modal({ children, breadcrumbs, handleClose, isOpen, stickyOnBottom = true }) {
  return (
    <div className={ `modal modal--${isOpen ? 'opened' : 'closed'} modal--${stickyOnBottom === false ? 'bs' : 'default'}` }>
      <div className="modal__header">
        { breadcrumbs && breadcrumbs.length ? <Breadcrumbs breadcrumbs={ breadcrumbs } /> : <div></div>  }
        <div className="actions">
          {  stickyOnBottom === true && <button><PrintIcon color="neutral-darkest"/></button> }
          <button onClick={ handleClose }><TimesIcon color="neutral-darkest" /></button>
        </div>
      </div>
      <div className="modal__content-wrapper">
        { children }
      </div>
    </div>
  )
}
