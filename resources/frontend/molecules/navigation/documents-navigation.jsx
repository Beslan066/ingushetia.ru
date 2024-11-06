import { Link, usePage } from "@inertiajs/react";
import './regions-navigation.css'


export default function DocumentsNavigation() {
  const {component} = usePage()

  return (
    <nav className="regions-nav">
      <ul>
        <li><Link className={`regions-nav__link ${ component === 'Documents/Documents' ? 'active' : ''}`} href="/documents">Правовые акты</Link></li>
      </ul>
    </nav>
  )
}
