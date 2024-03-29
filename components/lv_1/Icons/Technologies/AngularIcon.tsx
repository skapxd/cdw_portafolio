import Style from '../Icons.module.sass'
import Link from 'next/link'

export function AngularIcon () {
  return (
        <Link href="https://angular.io/">
            <a target="_blank" className={Style.tecnologies}>
                <h4 className={Style.tecnologies_name}>Angular</h4>

                <svg
                    className={Style.tecnologies_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 186.2 200"
                >
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Layer_1" data-name="Layer 1">
                            <polygon
                                points="93.1 0 93.1 0 93.1 0 0 33.2 14.2 156.3 93.1 200 93.1 200 93.1 200 172 156.3 186.2 33.2 93.1 0"
                                fill="#dd0031"
                            />
                            <polygon
                                points="93.1 0 93.1 22.2 93.1 22.1 93.1 123.4 93.1 123.4 93.1 200 93.1 200 172 156.3 186.2 33.2 93.1 0"
                                fill="#c3002f"
                            />
                            <path
                                d="M93.1,22.1,34.9,152.6H56.6l11.7-29.2h49.4l11.7,29.2h21.7L93.1,22.1Zm17,83.3h-34l17-40.9Z"
                                fill="#fff"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
  )
}
