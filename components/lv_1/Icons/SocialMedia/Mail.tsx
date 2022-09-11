import Link from 'next/link'
import Style from '../Icons.module.sass'

interface Props {
    href?: string
    className?: string
}

export const Mail = (props: Props) => {
  const { href, className } = props

  return (

    <Link href={href ?? 'https://t.me/skapxd'}>
                     <a className={`${Style.telegram} ${className}`} target="_blank">

    <svg
      width={24}
      height={18}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.963c0-.353.06-.692.172-1.007l11.82 9.976.158-.188 11.678-9.79c.111.316.172.656.172 1.01v10.073a3.027 3.027 0 01-3.027 3.027H3.027A3.027 3.027 0 010 14.037V3.963zm22.886-2.346a3.015 3.015 0 00-1.913-.681H3.027c-.713 0-1.367.246-1.884.657l10.848 9.156 10.894-9.132z"
        fill="#EEE"
      />
    </svg>
    </a>
    </Link>
  )
}
