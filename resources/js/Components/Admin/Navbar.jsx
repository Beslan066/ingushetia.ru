
import {Link} from "@inertiajs/react";
export default function Navbar()
{


    const navItems  = [
        {
            title: 'Новости',
            icon: 'mdi mdi-format-align-justify',
            action: '/admin/news'
        },
        {
            title: 'Категории',
            icon: 'mdi mdi-tag-multiple',
            action: '/admin/categories'
        },
        {
            title: 'Пользователи',
            icon: 'mdi mdi-account',
            action: '/admin/users'
        },
        {
            title: 'Видео',
            icon: 'mdi mdi-video',
            action: '/admin/videos'
        },
        {
            title: 'Файлы',
            icon: 'mdi mdi-calendar-check',
            action: '/admin/videos'
        },
        {
            title: 'Сводка по ',
            icon: 'mdi mdi-calendar-check',
            action: '/admin/videos'
        },
        {
            title: 'План мероприятий',
            icon: 'mdi mdi-calendar-check',
            action: '/admin/videos'
        },
    ]



    return (
        <div>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    {navItems.map((link,index) => (
                        <Link key={index} href={link.action} className="nav-link" >
                            <li className="nav-item d-flex ">
                                <i className={link.icon} style={{fontSize: '20px'}}></i>
                                <span className="menu-title">{link.title}</span>
                            </li>
                        </Link>
                    ))}

                </ul>
            </nav>
        </div>
    )
}

