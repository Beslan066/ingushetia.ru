import './link.css'
import RightArrowIcon from "#/atoms/icons/right-arrow-icon.jsx";
import { Link } from "@inertiajs/react";

export default function AppLink ({ to, title, className }) {
  return <Link href={ to } className={ "link " + (className ?? '') }>{ title } <RightArrowIcon color="primary-medium" width={40} height={24}/></Link>
}
