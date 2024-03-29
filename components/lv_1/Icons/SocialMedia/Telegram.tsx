import Link from "next/link";
import Style from "../Icons.module.sass";

interface TelegramI {
  href?: string;
  className?: string;
}

export const Telegram = (props: TelegramI) => {
  const { href, className } = props;

  return (
    <div className={`${Style.telegram} ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
        <g id="Capa_2" data-name="Capa 2">
          <g id="Capa_1-2" data-name="Capa 1">
            <path
              id="telegram-1"
              d="M18.38,19.78a1.19,1.19,0,0,0,1.11.14,1.17,1.17,0,0,0,.73-.84C21.08,15,23.19,4.66,24,1a.79.79,0,0,0-1.05-.9C18.73,1.6,5.82,6.45.54,8.4A.83.83,0,0,0,0,9.2.82.82,0,0,0,.59,10c2.37.71,5.48,1.7,5.48,1.7S7.52,16,8.28,18.27a.85.85,0,0,0,1.41.37l3.1-2.92S16.36,18.34,18.38,19.78Zm-11-8.68,1.68,5.54.38-3.51L19.61,4a.28.28,0,0,0-.34-.44Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
