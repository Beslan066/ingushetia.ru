import { Link } from "@inertiajs/react";
import './important.css';

export default function Important() {
  return (
    <div className="important">
      <h2 className="important__title">Важное</h2>
      <div className="important__items">
        <Link href="/natProjects" className="important__link">Нац. проекты</Link>
        <Link href="/svoSupport" className="important__link">Поддержка семей участников СВО</Link>
        <Link href="/implementations" className="important__link">Реализация указов Президента РФ</Link>
        <Link href="/economicSupport" className="important__link">Поддержка экономики и граждан</Link>
        <Link href="/anticorruptions" className="important__link">Противодействие коррупции</Link>
      </div>
    </div>
  )
}
