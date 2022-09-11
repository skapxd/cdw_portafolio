import Style from '../Icons.module.sass'
export function HerokuIcon () {
  return (
        <a
            href="https://www.heroku.com/"
            target="_blank"
            className={Style.tecnologies} rel="noreferrer"
        >
            <h4 className={Style.tecnologies_name}>Heroku</h4>

            <svg
                className={Style.tecnologies_icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 5.12 5.12"
                preserveAspectRatio="xMinYMin meet"
            >
                <path
                    d="M4.12 5.12H.968a.49.49 0 0 1-.488-.488V.488A.49.49 0 0 1 .968 0H4.12a.49.49 0 0 1 .488.488v4.144a.49.49 0 0 1-.488.488z"
                    fill="#6762a6"
                />
                <path
                    d="M3.068 4.415V2.382s.132-.487-1.63.2C1.436 2.6 1.436.7 1.436.7L2.01.697v1.2s1.61-.635 1.61.48v2.026h-.555zm.328-2.986h-.6c.22-.27.42-.73.42-.73h.63s-.108.3-.44.73zm-1.95 2.982V3.254l.58.58-.58.58z"
                    fill="#fff"
                />
            </svg>
        </a>
  )
}
