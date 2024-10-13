import './agency-item.css';
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

export default function AgencyNewsItem({ id, date, category, title, image, onPost }) {

  const formattedDate = format(parseISO(date), "HH:mm, d MMMM", { locale: ru });
  return (
    <a onClick={ () => onPost(id) } className="news-card">
      {
        image ? (
          <div className="news-card__preview">
            <img src={ `/storage/${ image }` } alt={ title + ' превью фото' }/>
          </div>
        ) : ''
      }

      <div className="news-card__body">
        <div className="news-card__keys">
          <div className="news-card__date">{ formattedDate }</div>
          <div className="news-card__category">{ category }</div>
        </div>
        <div className="news-card__title">{ title }</div>
      </div>
    </a>
  )
}
