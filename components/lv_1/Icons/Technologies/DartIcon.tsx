import Style from '../Icons.module.sass'
import Link from 'next/link'

export function DartIcon () {
  return (
        <Link href="https://dart.dev/">
            <a target="_blank" className={Style.tecnologies}>
                <h4 className={Style.tecnologies_name}>Dart</h4>

                <svg
                    className={Style.tecnologies_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1056.77 1056.76"
                >
                    <defs>
                        <radialGradient
                            id="Degradado_sin_nombre"
                            cx="528.37"
                            cy="531.82"
                            r="528.38"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1060.2)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop
                                offset="0"
                                stopColor="#fff"
                                stopOpacity="0.1"
                            />
                            <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="logo_firebase_192px_clr">
                            <path
                                d="M215.52,841.24,34.76,660.48C13.35,638.47,0,607.4,0,577.05c0-14,7.94-36,13.9-48.67L180.76,180.76Z"
                                fill="#01579b"
                            />
                            <path
                                d="M834.29,215.52,653.53,34.76C637.74,18.91,604.86,0,577.05,0c-23.9,0-47.36,4.78-62.57,13.9L180.76,180.76Z"
                                fill="#40c4ff"
                            />
                            <polygon
                                points="431.05 1056.76 869.05 1056.76 869.05 869.05 542.29 764.76 243.33 869.05 431.05 1056.76"
                                fill="#40c4ff"
                            />
                            <path
                                d="M180.76,743.9c0,55.77,7,69.45,34.76,97.33L243.33,869H869.05L563.14,521.43,180.76,180.76Z"
                                fill="#29b6f6"
                            />
                            <path
                                d="M737,180.76H180.76L869.05,869.05h187.71V438L834.29,215.52C803,184.15,775.29,180.76,737,180.76Z"
                                fill="#01579b"
                            />
                            <path
                                d="M222.48,848.19c-27.81-27.92-34.76-55.43-34.76-104.29V187.71l-6.95-7V743.9c0,48.86,0,62.41,41.71,104.29l20.86,20.86h0Z"
                                fill="#fff"
                                opacity="0.2"
                                style={{
                                  isolation: 'isolate'
                                }}
                            />
                            <polygon
                                points="1049.81 431.05 1049.81 862.1 862.1 862.1 869.05 869.05 1056.77 869.05 1056.77 438 1049.81 431.05"
                                fill="#263238"
                                opacity="0.2"
                                style={{
                                  isolation: 'isolate'
                                }}
                            />
                            <path
                                d="M834.29,215.52c-34.46-34.46-62.73-34.76-104.29-34.76H180.76l7,7H730c20.78,0,73.12-3.47,104.29,27.81Z"
                                fill="#fff"
                                opacity="0.2"
                                style={{
                                  isolation: 'isolate'
                                }}
                            />
                            <path
                                d="M1049.81,431.05,834.29,215.52,653.53,34.76C637.74,18.91,604.86,0,577.05,0c-23.9,0-47.36,4.78-62.57,13.9L180.76,180.76,13.9,528.38C7.94,541,0,563,0,577.05c0,30.35,13.35,61.41,34.76,83.43L201.34,825.86c4,4.86,8.66,9.84,14.18,15.38l6.95,7,20.86,20.86,180.76,180.76,7,7H869V869.05h187.71V438Z"
                                opacity="0.2"
                                fill="url(#Degradado_sin_nombre)"
                                style={{
                                  isolation: 'isolate'
                                }}
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </Link>
  )
}
