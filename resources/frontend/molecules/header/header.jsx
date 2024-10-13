import SearchIcon from "#/atoms/icons/search.jsx";
import BarsIcon from "#/atoms/icons/bars.jsx";
import AnniversaryLogoImage from "#/atoms/logos/anniversary.jsx";
import LogoImage from "#/atoms/logos/default.jsx";

import './header.css';
import React, { useEffect, useRef, useState } from "react";
import Button from "#/atoms/buttons/button.jsx";
import { Link } from "@inertiajs/react";
import AppLink from "#/atoms/buttons/link.jsx";
import axios from "axios";
import TimesIcon from "#/atoms/icons/times.jsx";

export default function AppHeader({ anniversary }) {
  const [searchOpened, setSearchOpened] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 2) {
      axios.get(route('search.results', { query: query.trim().toLowerCase() })) // trim() для удаления лишних пробелов
        .then(response => {
          const combinedResults = [
            ...response.data.news,
            ...response.data.photoReportages,
            ...response.data.videos,
            ...response.data.documents,
          ];
          setResults(combinedResults);
        })
        .catch(error => {
          console.error("There was an error fetching the search results!", error);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
    document.querySelector('body')
  }

  return (
    <>
      <header className="top-menu">
        <div className="top-menu__wrapper">
          <div className="top-menu__site-name">
            { anniversary ? <AnniversaryLogoImage/> : <LogoImage/> }
            <div className={ `top-menu__title ${ anniversary ? 'top-menu__title--anniversary' : '' }` }>
              <div className="top-menu__name">Республика Ингушетия</div>
              <div className="top-menu__caption">Официальный портал</div>
            </div>
          </div>

          <div className="top-menu__actions">
            <nav className="top-menu__navigation">
              <ul >
                <li className="menu-item"><Link href="/news">Новости</Link></li>
                <li className="menu-item"><Link href="/region">Регион</Link></li>
                <li className="menu-item">
                  <button onClick={ e => e.target.parentNode.classList.toggle('menu-item--opened') }>Органы власти
                  </button>
                  <ul className="submenu">
                    <li className="menu-item"><Link href="#">Глава Республики</Link></li>
                    <li className="menu-item"><Link href="/pravitelstvo">Правительство</Link></li>
                    <li className="menu-item"><Link href="#">Федеральные органы власти</Link></li>
                    <li className="menu-item"><Link href={ route('agencies.index') }>Министерства</Link></li>
                  </ul>
                </li>
                <li className="menu-item"><Link href={ route('media') }>Медиа</Link></li>
                <li className="menu-item"><Link href="">Документы</Link></li>
                <li className="menu-item"><Link href={ route('contacts') }>Контакты</Link></li>
              </ul>
            </nav>
            <button aria-label="Поиск" onClick={ () => {
              setSearchOpened(!searchOpened);
            } }>
              { !searchOpened ? <SearchIcon size={ 24 } /> : <TimesIcon size={ 24 } color="primary-medium"/> }
            </button>
            <button aria-label="Открытие меню" onClick={ toggleMenu }>
              { !menuOpened ? <BarsIcon size={ 24 }/> : <TimesIcon size={ 24 } color="primary-medium"/> }
            </button>
          </div>
        </div>
      </header>
      <div className={ `search search--${ searchOpened ? 'opened' : 'closed' }` }>
        <div className="search-input">
          <input type="text" placeholder="Найти на сайте" value={ query } onChange={ (e) => setQuery(e.target.value) }/>
          <SearchIcon color="neutral-dark" size={ 24 } className="input-icon"/>
        </div>
        <Button handleClick={ () => {
          window.location.href = `/search/page?query=${ query }`
        } }>
          <span className="search__text">Найти</span>
          <SearchIcon color="neutral-white" size={ 24 } className="search__icon"/>
        </Button>
      </div>
      {
        !!results?.length ? (
          <div className="search-results">
            <div className="results">
              {
                results.slice(0, 5).map((result) => (
                  <div className="result" key={result.id}>
                    <Link className="result__title" to={ "/news/" + result.id }>{ result.title }</Link>
                    <div className="result__footer">
                      <div className="result__date">{ new Date(result.created_at).toLocaleDateString() }</div>
                      <div className="result__category">{ result.category }</div>
                    </div>
                  </div>
                ))
              }
            </div>
            <AppLink to={`/search/page?query=${query}`} title="Все результаты поиска" />
          </div>
        ) : ''
      }
      <div className={ `sidebar-menu sidebar-menu--${menuOpened ? 'opened' : 'closed'}` }>
        <ul className="menu main-menu">
          <li className="menu-item"><Link href="/news">Новости</Link></li>
          <li className="menu-item"><Link href="/region">Регион</Link></li>
          <li className="menu-item">
            <button onClick={ e => e.target.parentNode.classList.toggle('menu-item--opened') }>Органы власти</button>
            <ul className="submenu">
              <li className="menu-item"><Link href="#">Глава Республики</Link></li>
              <li className="menu-item"><Link href="/pravitelstvo">Правительство</Link></li>
              <li className="menu-item"><Link href="#">Федеральные органы власти</Link></li>
              <li className="menu-item"><Link href={ route('agencies.index') }>Министерства</Link></li>
            </ul>
          </li>
          <li className="menu-item"><Link href={ route('media') }>Медиа</Link></li>
          <li className="menu-item"><Link href="">Документы</Link></li>
          <li className="menu-item"><Link href={ route('contacts') }>Контакты</Link></li>
        </ul>
        <ul className="menu additional-menu">
          <li className="menu-item"><Link to="#">Резерв управленческих кадров</Link></li>
          <li className="menu-item"><Link to="#">Конкурсы в органах исполнительной власти</Link></li>
          <li className="menu-item"><Link to="#">Противодействие коррупции</Link></li>
          <li className="menu-item"><Link to="#">Антинаркотическая комиссия</Link></li>
          <li className="menu-item"><Link to="#">Поддержка семей военнослужащих</Link></li>
        </ul>
      </div>
    </>
  )
}
