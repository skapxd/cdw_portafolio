import Style from '../Icons.module.sass'

export function ReactNativeIcon () {
  return (
        <a
            target="_blank"
            href="https://reactnative.dev/"
            className={Style.tecnologies} rel="noreferrer"
        >
            <h4>Native</h4>
            <svg
                viewBox="-11.5 -10.23174 23 20.46348"
                xmlns="http://www.w3.org/2000/svg"
                className={Style.tecnologies_icon}
            >
                <circle fill="#61dafb" r="2.05" />
                <g fill="none" stroke="#61dafb">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse
                        rx="11"
                        ry="4.2"
                        transform="matrix(.5 .8660254 -.8660254 .5 0 0)"
                    />
                    <ellipse
                        rx="11"
                        ry="4.2"
                        transform="matrix(-.5 .8660254 -.8660254 -.5 0 0)"
                    />
                </g>
            </svg>
        </a>
  )
}
