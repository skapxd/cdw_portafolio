import Style from './Icons.module.sass'

interface MenuI {
    className?: string
    onClick?: () => void
}

export default function MenuIcon(props: MenuI) {
    const { onClick, className = '' } = props

    return (
        <svg
            // fill="none"
            // stroke="#000"
            // height="24"
            // width="24"
            onClick={() => onClick && onClick()}
            className={`${Style.menu} ${className}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
    )
}
