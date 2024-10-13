import './footer.css';
import { Link } from "@inertiajs/react";
import AnniversaryLogoImage from "#/atoms/logos/anniversary.jsx";
import LogoImage from "#/atoms/logos/default.jsx";
import Button from "#/atoms/buttons/button.jsx";

export default function AppFooter({ anniversary = false }) {
  const groups = [
    {
      name: 'Органы власти',
      links: [
        { link: '/', name: 'Глава республики' },
        { link: '/', name: 'Народное собрание' },
        { link: '/', name: 'Правительство РИ' },
        { link: '/', name: 'Федеральные органы власти' },
      ]
    },
    {
      name: 'Регион',
      links: [
        { link: '/', name: 'Государственная символика, гимн' },
        { link: '/', name: 'Правовой статус и правовое устройство' },
        { link: '/', name: 'Географическое положение и прир. ресурсы' },
        { link: '/', name: 'Население и трудовые ресурсы' },
        { link: '/', name: 'Промышленность и сельское хозяйство' },
        { link: '/', name: 'Инвестиционная привлекательность' },
        { link: '/', name: 'Культура и история' },
        { link: '/', name: 'Исторический формуляр' },
        { link: '/', name: 'Штандарт Главы Республики Ингушетия' },
      ]
    },
    {
      name: 'Для СМИ',
      links: [
        { link: '/', name: 'Новости' },
        { link: '/', name: 'Фоторепортажи' },
        { link: '/', name: 'Видеорепортажи' },
      ]
    },
    {
      name: 'Документы',
      links: [
        { link: '/', name: 'Постановления' },
        { link: '/', name: 'Указы' },
        { link: '/', name: 'Распоряжения' },
        { link: '/', name: 'Другие' },
      ]
    }
  ]

  return (
    <>
      <footer className="footer">
        <div className="link-groups">
          {
            groups.map((group) => {
              return (
                <div className="link-group" key={ group.name }>
                  <h3 className="link-group__title">{ group.name }</h3>
                  <div className="link-group__links">
                    {
                      group.links.map((link) => {
                        return <Link key={ link.name } to={ link.url } className="link-group__link">{ link.name }</Link>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="footer__about">
          <div className="about__site">
            { anniversary ? <AnniversaryLogoImage/> : <LogoImage/> }
            <div className="footer__name">Официальный сайт администрации Республики Ингушетия</div>
          </div>
          <Button text="Задать вопрос" />
        </div>
      </footer>
      <footer className="copyright">&copy; 2024, Все права защищены</footer>
    </>
  )
}
