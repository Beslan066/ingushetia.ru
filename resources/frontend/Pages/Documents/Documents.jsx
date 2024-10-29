import AppHeader from "#/molecules/header/header.jsx";
import PageTitle from "#/atoms/texts/PageTitle.jsx";
import Downloadable from "#/atoms/downloadable/downloadable.jsx";
import AppFooter from "#/organisms/footer/footer.jsx";
import React from "react";
import './documents.css';

export default function Documents({ documents }) {
  return (
    <>
      <AppHeader anniversary={ false }/>
      <PageTitle title="Правовые акты"/>
      <div className="page-content__wrapper">
        <div className="page-content__content">
          <div className="downloadable__documents">
            {
              documents && documents.map((document) =>
                <Downloadable title={ document.title } description={ document.type } key={ document.id } link={ `/storage/${ document.document_path }` }/>)
            }
          </div>
        </div>
        <div></div>
      </div>
      <AppFooter/>
    </>
  )
}
