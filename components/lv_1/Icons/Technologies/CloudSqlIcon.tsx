import Style from '../Icons.module.sass'
import Link from 'next/link'

export function CloudSqlIcon () {
  return (
        <Link href="https://cloud.google.com/">
            <a target="_blank" className={Style.tecnologies}>
                <h4 className={Style.tecnologies_name}>Cloud Sql</h4>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 58.64 80"
                >
                    <defs>
                        <symbol id="A" data-name="A" viewBox="0 0 58.64 80">
                            <path
                                d="M0,46.24v-12L29.32,18.6v12Zm0-18.6v-12L29.32,0V12Z"
                                fill="#aecbfa"
                                fillRule="evenodd"
                            />
                            <path
                                d="M29.32,18.6,58.64,34.2v12L29.32,30.64Zm0-18.6L58.64,15.6v12L29.32,12Z"
                                fill="#669df6"
                                fillRule="evenodd"
                            />
                            <path
                                d="M58.64,52.36v12L29.32,80V68Z"
                                fill="#4285f4"
                                fillRule="evenodd"
                            />
                            <path
                                d="M29.32,80,0,64.4v-12L29.32,68Z"
                                fill="#669df6"
                                fillRule="evenodd"
                            />
                            <path
                                d="M0,64.52V52.44l29.32-15.6V48.92Z"
                                fill="#aecbfa"
                                fillRule="evenodd"
                            />
                            <path
                                d="M29.32,36.84l29.32,15.6V64.52L29.32,48.92Z"
                                fill="#669df6"
                                fillRule="evenodd"
                            />
                        </symbol>
                    </defs>
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Capa_1-2" data-name="Capa 1">
                            <use
                                width="58.64"
                                height="80"
                                transform="matrix(1, 0, 0, -1, 0, 80)"
                                xlinkHref="#A"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
  )
}
