import './external-resource.css'
import ExternalLinkIcon from "#/atoms/icons/external-link.jsx";

export default function ExternalResource({ title, link }) {

  return (
    <div className="external-resource__wrapper">
      <div className="external-resource__title">{ title }</div>
      <div className="external-resource__footer">
        <a href={link} className="external-resource__path">{ link }</a>
        <ExternalLinkIcon color="neutral-darkest" />
      </div>
    </div>
  )
}
