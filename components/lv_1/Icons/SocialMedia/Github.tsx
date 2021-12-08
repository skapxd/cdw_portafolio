import Link from 'next/link'
import Style from '../Icons.module.sass'

interface GithubI {
    href?: string
    className?: string
    title?: string
}

export const Github = (props: GithubI) => {
    const { title, className = '', href = 'https://github.com/skapxd' } = props

    return (
        <Link href={href}>
            <a
                target="_blank"
                className={` ${Style.row} ${Style.github} ${className}`}
            >
                {title ? <h2>{title}</h2> : <></>}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 998.74"
                >
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Capa_1-2" data-name="Capa 1">
                            <path
                                d="M512,0C229.12,0,0,229.12,0,512,0,738.56,146.56,929.92,350.08,997.76c25.6,4.48,35.2-10.88,35.2-24.32,0-12.16-.64-52.48-.64-95.36C256,901.76,222.72,846.72,212.48,817.92c-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92,40.32-.64,69.12,37.12,78.72,52.48,46.08,77.44,119.68,55.68,149.12,42.24,4.48-33.28,17.92-55.68,32.64-68.48-113.92-12.8-233-57-233-252.8,0-55.68,19.84-101.76,52.48-137.6-5.12-12.8-23-65.28,5.12-135.68,0,0,42.88-13.44,140.8,52.48a482.71,482.71,0,0,1,256,0c97.92-66.56,140.8-52.48,140.8-52.48,28.16,70.4,10.24,122.88,5.12,135.68,32.64,35.84,52.48,81.28,52.48,137.6,0,196.48-119.68,240-233.6,252.8,18.56,16,34.56,46.72,34.56,94.72,0,68.48-.64,123.52-.64,140.8,0,13.44,9.6,29.44,35.2,24.32C877.44,929.92,1024,737.92,1024,512,1024,229.12,794.88,0,512,0Z"
                                fill="#1b1f23"
                                fillRule="evenodd"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
    )
}
