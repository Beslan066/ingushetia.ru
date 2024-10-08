export default function FilterIcon({onClick}) {
    return (
        <div onClick={onClick} style={{cursor: 'pointer'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7H14" stroke="#6C6C6C" stroke-width="2"/>
                <path d="M22 17L10 17" stroke="#6C6C6C" stroke-width="2"/>
                <path d="M18 7L22 7" stroke="#6C6C6C" stroke-width="2"/>
                <path d="M6 17L2 17" stroke="#6C6C6C" stroke-width="2"/>
                <rect x="14" y="4" width="4" height="6" stroke="#6C6C6C" stroke-width="2"/>
                <rect x="10" y="20" width="4" height="6" transform="rotate(180 10 20)" stroke="#6C6C6C"
                      stroke-width="2"/>
            </svg>
        </div>

    )
}
