import { useEffect, useRef, useState } from "react";
import Slide from "#/atoms/slider/slide.jsx";
import SlidePagination from "#/atoms/slider/pages.jsx";
import { useSwipeable } from "react-swipeable";
import './slider.css';

export default function MainSlider({ slides, onPost, slideChangeInterval = 8000 }) {
  if (!slides) {
    return null;
  }

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef(null);

  // Функция для показа следующего слайда
  const nextSlide = () => {
    if (isTransitioning) return; // Предотвращаем переключение во время анимации
    setIsTransitioning(true);
    setCurrent((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Функция для показа предыдущего слайда
  const prevSlide = () => {
    if (isTransitioning) return; // Предотвращаем переключение во время анимации
    setIsTransitioning(true);
    setCurrent((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (slide) => {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    setCurrent(slide);
  }

  // Сброс состояния перехода после завершения анимации
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Время должно совпадать с CSS transition
    return () => clearTimeout(timer);
  }, [current]);

  // Автоматическое переключение слайдов каждые 6 секунд
  useEffect(() => {
    const intervalId = setInterval(nextSlide, slideChangeInterval);
    return () => clearInterval(intervalId);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwiped: ({ dir }) => {
      switch (dir) {
        case 'Left':
          nextSlide();
          break;
        case 'Right':
          prevSlide();
          break;
        default:
          return;
      }
    }
  })

  return (
    <div className="slider">
      <div className="slides" { ...swipeHandlers }>
        {
          slides.map((slide) => {
            return (
              <Slide key={ slide.id }
                     title={ slide.title }
                     image={ slide.image_main }
                     date={ slide.published_at }
                     category={ slide?.category?.title }
                     style={ {
                       transform: `translateX(-${ current * 100 }%)`,
                       opacity: isTransitioning ? 0.5 : 1,
                       transition: `transform 0.5s ease-in-out, opacity 0.5s ease-in-out`
                     } }
                     id={ slide.id }
                     onPost={ onPost }
              />
            )
          })
        }
      </div>
      <SlidePagination count={ slides.length } current={ current } onSlide={ setSlide }/>
    </div>
  )
}
