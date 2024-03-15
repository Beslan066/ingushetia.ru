import {Link, router} from "@inertiajs/react";

export default function AddItemButton(props) {
    const { title, url } = props;
    return(
        <div className={'add-item-button'}>
            <button type="button" className="btn btn-primary"><i className={'mdi mdi-library-plus'}></i><Link className={'link-light'} href={url}>Добавить {title}</Link></button>
        </div>
    )
}
