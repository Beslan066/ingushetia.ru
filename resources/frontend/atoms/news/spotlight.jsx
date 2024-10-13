import './spotlight.css'
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import VideoIcon from "#/atoms/icons/video.jsx";
import AppLink from "#/atoms/buttons/link.jsx";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Spotlight({ id, date, category, title, onPost, hasVideo = false }) {
  const formattedDate = format(parseISO(date), "HH:mm, d MMMM", { locale: ru });
  return (
    <div className="spotlight">
      <div className="spotlight__keys">
        <div className="spotlight__date">{ formattedDate }</div>
        <div className="spotlight__category">{ category }</div>
        { hasVideo ? <div className="spotlight__video"><VideoIcon/></div> : '' }
      </div>
      <Link href={`/news/${id}`} preserveScroll={true}>
        <h2 className="spotlight__title">{title}</h2>
      </Link>
    </div>
  )
}
