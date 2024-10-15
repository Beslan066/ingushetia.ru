import './media.css';
import GalleryIcon from "#/atoms/icons/gallery.jsx";
import Label from "#/atoms/labels/label.jsx";
import PlayIcon from "#/atoms/icons/play.jsx";
import { format } from "#/utilities/date.js";

export default function MediaNews({ type = 'gallery', image, title, date, count, id, handleOpen }) {
  const formattedDate = format(date);
  const getTypeIcon = (type) => {
    switch (type) {
      case 'gallery':
        return <GalleryIcon/>
      case 'video':
        return <PlayIcon/>
      default:
        throw new Error('type должен быть определен')
    }
  }

  return (
    <div className="media-card">
      <div className="media__image">
        <img src={ `/storage/` + image } alt={ 'Изображение ' + title }/>
        <div className="media__icon-wrapper">
          { getTypeIcon(type) }
        </div>
        {
          !!count ? (
            <a onClick={ () => handleOpen(id) } className="media__label">
              <Label text={ count }/>
            </a>
          ) : ''
        }
      </div>
      <div className="media__body">
        <a onClick={ () => handleOpen(id) } className="media__title">{ title }</a>
        <div className="media__date">{ formattedDate }</div>
      </div>
    </div>
  )
}
