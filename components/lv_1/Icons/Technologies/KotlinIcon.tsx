import Style from '../Icons.module.sass'

export function KotlinIcon () {
  return (
        <a
            target="_blank"
            href="https://lit.dev/"
            className={Style.tecnologies} rel="noreferrer"
        >
            <h4 className={Style.tecnologies_name}>Kotlin</h4>

            <svg
                className={Style.tecnologies_icon}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 72.528 72.528"
                fill="#fff"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <use xlinkHref="#D" x="3.764" y="3.764" />
                <defs>
                    <linearGradient
                        id="A"
                        x1="-16.82%"
                        y1="91.95%"
                        x2="76.23%"
                        y2="-1.09%"
                    >
                        <stop offset="10.8%" stopColor="#c757bc" />
                        <stop offset="17.3%" stopColor="#cd5ca9" />
                        <stop offset="49.2%" stopColor="#e8744f" />
                        <stop offset="71.6%" stopColor="#f88316" />
                        <stop offset="82.3%" stopColor="#ff8900" />
                    </linearGradient>
                    <linearGradient
                        id="B"
                        x1="31.92%"
                        y1="135.93%"
                        x2="77.28%"
                        y2="45.62%"
                    >
                        <stop offset="29.6%" stopColor="#00afff" />
                        <stop offset="69.4%" stopColor="#5282ff" />
                        <stop offset="100%" stopColor="#945dff" />
                    </linearGradient>
                    <linearGradient
                        id="C"
                        x1="-2.37%"
                        y1="52.28%"
                        x2="60.96%"
                        y2="-8.00%"
                    >
                        <stop offset="29.6%" stopColor="#00afff" />
                        <stop offset="69.4%" stopColor="#5282ff" />
                        <stop offset="100%" stopColor="#945dff" />
                    </linearGradient>
                </defs>
                <symbol id="D" overflow="visible">
                    <g stroke="none" fillRule="nonzero">
                        <path
                            d="M32.146.015L0 33.795v30.211L32.086 31.86 64.006 0z"
                            fill="url(#A)"
                        />
                        <path
                            d="M0 64.013l32.086-32.146 31.92 32.146z"
                            fill="url(#B)"
                        />
                        <path d="M0 .015h32.146L0 33.795z" fill="url(#C)" />
                    </g>
                </symbol>
            </svg>
        </a>
  )
}
