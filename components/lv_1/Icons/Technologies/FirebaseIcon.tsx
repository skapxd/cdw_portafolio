import Style from '../Icons.module.sass'
import Link from 'next/link'

export function FirebaseIcon () {
  return (
        <Link href="https://firebase.google.com/">
            <a target="_blank" className={Style.tecnologies}>
                <h4 className={Style.tecnologies_name}>Firebase</h4>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 341.33 469.32"
                >
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Capa_1-2" data-name="Capa 1">
                            <path
                                d="M0,373.32,162.5,68.64a9,9,0,0,1,15.93.22l56.24,112.46Z"
                                fill="#ff8f00"
                            />
                            <path
                                d="M0,373.24,59.16,8.45A10.06,10.06,0,0,1,78,5.41l114,218.5Z"
                                fill="#ffa000"
                            />
                            <path
                                d="M.09,373.18l2.13-1.68,187-153L136.46,117.45Z"
                                fill="#ff6f00"
                            />
                            <path
                                d="M0,373.32,284.44,99.05a10.18,10.18,0,0,1,17.13,5.84l39.76,268.43-160,93.26a21.33,21.33,0,0,1-20.91,0Z"
                                fill="#ffc400"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
  )
}
