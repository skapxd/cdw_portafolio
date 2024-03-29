import Style from '../Icons.module.sass'
import Link from 'next/link'
export function GcpIcon () {
  return (
        <Link href="https://cloud.google.com/">
            <a target="_blank" className={Style.tecnologies}>
                <h4 className={Style.tecnologies_name}>
                    Google Cloud Platform
                </h4>

                <svg
                    className={Style.tecnologies_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 205.8"
                >
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Capa_1-2" data-name="Capa 1">
                            <path
                                d="M170.25,56.82,192.5,34.57,194,25.2C153.44-11.68,89-7.5,52.42,33.92a102.78,102.78,0,0,0-21.7,40.65l8-1.12,44.5-7.34,3.44-3.51c19.79-21.75,53.27-24.67,76.13-6.17Z"
                                fill="#ea4335"
                            />
                            <path
                                d="M224.2,73.92A100.17,100.17,0,0,0,194,25.2L162.76,56.43a55.5,55.5,0,0,1,20.37,44V106a27.64,27.64,0,1,1,0,55.28H127.46L122,167.22v33.34l5.46,5.24h55.67A72.1,72.1,0,0,0,224.2,73.92"
                                fill="#4285f4"
                            />
                            <path
                                d="M71.87,205.8h55.59V161.29H71.87a27.2,27.2,0,0,1-11.4-2.5l-7.89,2.42-22.4,22.25-2,7.58A72.2,72.2,0,0,0,71.87,205.8"
                                fill="#34a853"
                            />
                            <path
                                d="M71.87,61.43A72.3,72.3,0,0,0,28.22,191l32.25-32.25A27.8,27.8,0,1,1,97.25,122l32.24-32.25A72.18,72.18,0,0,0,71.87,61.43"
                                fill="#fbbc05"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
  )
}
