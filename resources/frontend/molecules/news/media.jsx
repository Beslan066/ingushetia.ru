import MediaNews from "#/atoms/news/media.jsx";
import AppLink from "#/atoms/buttons/link.jsx";
import './media.css'

export default function Media({ media }) {
  if (!media?.length) {
    return null;
  }

  const getSlidesCount = (slides) => {
    if (!slides) {
      return null;
    }

    const arr = JSON.parse(slides);
    const length = arr.length;
    if (!length) {
      return null;
    }

    return length + ' фото'
  }

  return (
    <div className="media">
      <div className="media__wrapper">
        {
          media.map((item) => {
            const isVideo = item.hasOwnProperty('video');
            const slides = isVideo ? null : getSlidesCount(item?.slides);
            return <MediaNews key={ item.id }
                              id={ item.id }
                              type={ isVideo ? 'video' : 'gallery' }
                              title={ item.title }
                              count={ slides }
                              date={ item.published_at }
                              image={ item.image_main }
                              handleOpen={ () => {
                              } }/>
          })
        }
      </div>
      <AppLink to="/media" title="Все репортажи" className="media__details"/>
    </div>
  )
}
