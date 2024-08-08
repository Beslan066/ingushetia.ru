import {Link} from "@inertiajs/react";
import React from 'react'
import GalleryModal from "@/Components/GalleryModal.jsx";

export default function PhotoReportageItem({reportage, baseUrl, formatDate}) {

    const [photoGallery,setPhotoGalleryModal] = React.useState(false);


    return (
        <div>
            <div className="filtered-news-item">
                <div
                    className="news-image position-relative d-flex flex-column align-items-center" onClick={() => setPhotoGalleryModal(true)}>
                    <img src={`${baseUrl}/storage/${reportage.image_main}`} alt={reportage.title}
                         className="w-100 h-100" style={{objectFit: 'cover'}}/>
                    <div className={'position-absolute gallery-icon'}>
                        <img src="img/icons/gallery.svg" alt=""/>
                    </div>
                </div>

                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                    <div>
                        <h4 onClick={() => setPhotoGalleryModal(true)}>{reportage.title}</h4>
                    </div>
                    <p className="news-date">{formatDate}
                    </p>
                </div>

            </div>

            <GalleryModal active={photoGallery}
                          title={reportage.title}
                          slides={reportage.slides}
                          onClose={() => setPhotoGalleryModal(false)}
            />
        </div>
    )
}
