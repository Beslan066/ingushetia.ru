import './slide.css';
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

export default function Slide({ title, category, date, image, id, onPost, style }) {
  const formattedDate = format(parseISO(date), "HH:mm, d MMMM", { locale: ru });
  return (
    <div className="slide" style={style}>
      <img src={ `/storage/${image}` } alt={ 'Изображение новости ' + title } className="slide__image" />
      <div className="slide__info">
        <div className="slide-info__keys">
          <div className="slide-info__date">{ formattedDate }</div>
          <div className="slide-info__category">{ category }</div>
        </div>
        <a onClick={ () => onPost(id) } className="slide-info__title">{ title }</a>
      </div>
    </div>
  )
}
