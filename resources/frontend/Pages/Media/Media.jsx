import AppHeader from "#/molecules/header/header.jsx";
import React, { useState } from "react";
import AppFooter from "#/organisms/footer/footer.jsx";
import PageTitle from "#/atoms/texts/PageTitle.jsx";
import './media.css'
import Tabs from "#/atoms/tabs/tabs.jsx";
import FilterButton from "#/atoms/filters/filter-button.jsx";
import Filters from "#/molecules/filters/filters.jsx";
import MediaCollection from "#/molecules/news/mediaCollection.jsx";

export default function Media({ media }) {
  const categories = [{title: 'Фоторепортажи', id: 'photo'}, {title: 'Видеорепортажи', id: 'video'}];
  const [selected, setSelected] = useState(null);
  const [isFiltersOpened, setFiltersOpened] = useState(false);

  return (
    <>
      <AppHeader/>
      <PageTitle title="Медиа"/>
      <div className="page-content__wrapper">
        <div className="tabs-wrapper">
          <Tabs tabs={ categories } selected={ selected } onTab={ setSelected }/>
          <FilterButton isActive={ isFiltersOpened } onChange={ setFiltersOpened }/>
        </div>
        <Filters isActive={ isFiltersOpened } onClose={ () => setFiltersOpened(false) }/>
        <MediaCollection media={media}/>
      </div>
      <AppFooter/>
    </>
  )
}
