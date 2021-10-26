import Style from './MenuAnchor.module.sass'
import Link from 'next/link'

interface MenuAnchorI {
    name: string
    url: string
}
export function MenuAnchor(props: MenuAnchorI) {
    const { name, url } = props
    return (
        <Link href={url}>
            <a className={Style.menuAnchor}>{name}</a>
        </Link>
    )
}
