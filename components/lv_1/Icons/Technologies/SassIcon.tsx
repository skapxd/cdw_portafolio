import Style from '../Icons.module.sass'

export function SassIcon () {
  return (
        <a
            target="_blank"
            href="https://sass-lang.com/"
            className={Style.tecnologies} rel="noreferrer"
        >
            <h4 className={Style.tecnologies_name}>Sass</h4>

            <svg
                className={Style.tecnologies_icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 302.44 356.79"
            >
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Capa_1-2" data-name="Capa 1">
                        <path
                            d="M152.4,11C56.4,44-5.6,111,.4,151s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C304.4,2,223.4-13,152.4,11Zm-86,320c-25,8-24-8-23-14,3-17,17-38,59-59C114.4,296,87.4,325,66.4,331Z"
                            fill="#c69"
                        />
                    </g>
                </g>
            </svg>
        </a>
  )
}
