import Style from '../Icons.module.sass'
import Link from 'next/link'
export function HtmlIcon () {
  return (
        <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <a target="_blank" className={Style.tecnologies}>
                <h4 className={Style.tecnologies_name}>HTML</h4>

                <svg
                    className={Style.tecnologies_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 451 512"
                >
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Capa_1-2" data-name="Capa 1">
                            <path
                                d="M41,460,0,0H451L410,460,225,512"
                                fill="#e34f26"
                            />
                            <path
                                d="M226,472l149-41L410,37H226"
                                fill="#ef652a"
                            />
                            <path
                                d="M226,208H151l-5-58h80V94H84l1,15L99,265H226Zm0,147h-1l-63-17-4-45H102l7,89,116,32h1Z"
                                fill="#ebebeb"
                            />
                            <path
                                d="M225,208v57h70l-7,73-63,17v59l116-32,1-10,13-149,2-15H225Zm0-114v56H362l1-12,3-29,1-15Z"
                                fill="#fff"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
  )
}
