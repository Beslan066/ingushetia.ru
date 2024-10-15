import './media.css';
import GalleryIcon from "#/atoms/icons/gallery.jsx";
import Label from "#/atoms/labels/label.jsx";
import PlayIcon from "#/atoms/icons/play.jsx";
import { format } from "#/utilities/date.js";
import React, { useRef, useState } from "react";
import FullScreenIcon from "@/Components/FullScreenIcon.jsx";
import PauseIcon from "#/atoms/icons/pause.jsx";

export default function MediaNews({ type = 'gallery', image, title, date, count, id, handleOpen, video }) {
  const formattedDate = format(date);
  const getTypeIcon = (type) => {
    switch (type) {
      case 'gallery':
        return <GalleryIcon/>
      case 'video':
        return (
          <button onClick={ playVideo } ref={ playButtonRef }>
            <PlayIcon />
          </button>
        )
      default:
        throw new Error('type должен быть определен')
    }
  }

  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const playVideo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('click');
    if (videoRef.current.paused) {
      videoRef.current.play();
      playButtonRef.current.style.display = 'none'; // Скрыть кнопку воспроизведения
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      playButtonRef.current.style.display = 'block'; // Показать кнопку воспроизведения
      setIsPlaying(false);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleControlsToggle = () => {
    if (!isPlaying) {
      return;
    }
    setShowControls(!showControls);
  }

  return (
    <div className="media-card">
      <div className="media__image" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } onClick={ () => handleControlsToggle() }>
        {
          type === 'gallery' ?
            <img src={ `/storage/` + image } alt={ 'Изображение ' + title }/>
            : <video
              ref={ videoRef }
              src={ `/storage/${ video }` }
              poster={ `/storage/${ image }` }
              className="video-player"
            >
              Ваш браузер не поддерживает данный тип видео
            </video>
        }
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
        {
          type === 'video' && isPlaying && showControls && (
            <div className="video-controls-overlay">
              <button onClick={ playVideo }>
                <PauseIcon/>
              </button>
              <button onClick={ toggleFullScreen }>
                <FullScreenIcon style={ { width: '20px', height: '12px' } }/>
              </button>
            </div>
          )
        }
      </div>
      <div className="media__body">
        <a onClick={ () => handleOpen(id) } className="media__title">{ title }</a>
        <div className="media__date">{ formattedDate }</div>
      </div>
    </div>
  )
}
