export default function SupportItem({title}) {
    return (
        <div className={'support-item d-flex align-items-center justify-content-between'}>
            <p>{title}</p>
            <img src="img/icons/arrow grey.svg" alt=""/>
        </div>
    )
}
