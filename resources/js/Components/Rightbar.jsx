import {Link} from "@inertiajs/react";

export default function Rightbar({rightBar}) {
    return (
        <div className={`rightbar ${rightBar ? 'open' : ''}`}>
            <div className=" d-flex justify-content-end">
                <div className="right-menu">
                    <ul>
                        <Link>
                            <li>
                                Резерв управленческих кадров
                            </li>
                        </Link>
                        <Link>
                            <li>
                                Конкурсы в органах исполнительной власти
                            </li>
                        </Link>
                        <Link>
                            <li>
                                Противодействие коррупции
                            </li>
                        </Link>
                        <Link>
                            <li>
                                Антинаркотическая комиссия
                            </li>
                        </Link>
                        <Link>
                            <li>
                                Поддержка семей военнослужащих
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
