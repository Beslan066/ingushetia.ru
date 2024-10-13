import './media.css';
import GalleryIcon from "#/atoms/icons/gallery.jsx";
import Label from "#/atoms/labels/label.jsx";
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import PlayIcon from "#/atoms/icons/play.jsx";

export default function MediaNews({ type = 'gallery', image, title, date, count, id, handleOpen }) {
  const formattedDate = format(parseISO(date), "HH:mm, d MMMM", { locale: ru });
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
