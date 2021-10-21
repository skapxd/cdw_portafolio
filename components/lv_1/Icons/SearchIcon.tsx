import Style from './Icons.module.sass'

interface SearchIconI {
    className?: string
    onClick?: () => void
}
export default function SearchIcon(props: SearchIconI) {
    const { className = '', onClick } = props
    return (
        <svg
            // fill="none"
            // stroke="#000"
            // width="24"
            // height="24"
            onClick={() => onClick && onClick()}
            className={`${Style.search} ${className}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="21" x2="15.8" y1="21" y2="15.8" />
        </svg>
    )
}
