import Style from '../Icons.module.sass'
import Link from 'next/link'

export function FlutterIcon () {
  return (
        <Link href="https://flutter.dev/">
            <a target="_blank" className={Style.tecnologies}>
                <h4 className={Style.tecnologies_name}>Flutter</h4>

                <svg
                    className={Style.tecnologies_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1757.5 2175.2"
                >
                    <defs>
                        <linearGradient
                            id="Degradado_sin_nombre"
                            x1="5162.28"
                            y1="1903.35"
                            x2="5162.28"
                            y2="1902.47"
                            gradientTransform="matrix(380.4, -380.42, -53.1, -53.1, -1861673.34, 2066650.52)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.2" stopOpacity="0.15" />
                            <stop
                                offset="0.85"
                                stopColor="#616161"
                                stopOpacity="0.01"
                            />
                        </linearGradient>
                        <linearGradient
                            id="Degradado_sin_nombre_2"
                            x1="5158.44"
                            y1="1847.83"
                            x2="5159.32"
                            y2="1847.83"
                            gradientTransform="matrix(565.29, 0, 0, -380.96, -2915184.24, 705700.81)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.2" stopOpacity="0.55" />
                            <stop
                                offset="0.85"
                                stopColor="#616161"
                                stopOpacity="0.01"
                            />
                        </linearGradient>
                    </defs>
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="katman_1" data-name="katman 1">
                            <path
                                d="M335,1422.5,0,1087.5,1087.6,0h669.8m.1,1003.6H1087.7l-251,250.9,335,335"
                                fill="#42a5f5"
                                fillOpacity="0.8"
                            />
                            <path
                                d="M836.7,1924.3l250.9,250.9h669.8l-585.8-585.8"
                                fill="#0d47a1"
                            />
                            <path
                                d="M502.5,1589.6l334.4-334.5,334.4,334.4L836.9,1924Z"
                                fill="#42a5f5"
                            />
                            <path
                                d="M837,1924l334.4-334.4,46.7,46.7L883.7,1970.7Z"
                                fill="url(#Degradado_sin_nombre);"
                            />
                            <path
                                d="M836.7,1924.3l497-171.7-162-163.3"
                                fill="url(#Degradado_sin_nombre_2);"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
  )
}
