import MainSlider from "#/molecules/slider/slider.jsx";
import Tabs from "#/atoms/tabs/tabs.jsx";
import './hero.css';
import { useState } from "react";
import News from "#/molecules/news/news.jsx";
import AppLink from "#/atoms/buttons/link.jsx";
import Spotlights from "#/molecules/spotlights/spotlights.jsx";
import Important from "#/atoms/important/important.jsx";

export default function Hero({ categories, slides, news, handlePost }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onCategorySwitch = (category) => {
    setSelectedCategory(category);
  }

  const filteredArticles = selectedCategory ? news.filter(post => post.category_id === selectedCategory).slice(0, 3) : news.slice(0, 3);

  return (
    <div className="hero-wrapper">
      <div className="hero__slider-wrapper">
        <MainSlider slides={ slides } onPost={ handlePost }/>
        <div className="news-wrapper">
          <Tabs tabs={ categories } onTab={ onCategorySwitch } selected={ selectedCategory }/>
          <News news={ filteredArticles }/>
          <AppLink to="/news" title="Все новости"/>
        </div>
      </div>
      <div className="hero__sidebar-wrapper">
        <Spotlights news={ news }/>
        <Important />
      </div>
    </div>
  )
}
