import { useRouter } from 'next/router'
import Link from 'next/link'
import Style from './MenuAnchor.module.sass'

interface MenuAnchorI {
    name: string
    url: string
}
export function MenuAnchor(props: MenuAnchorI) {
    const { name, url } = props
    const router = useRouter()

    const getClassName = () => {
        const objClassName = {
            pass: Style.menuAnchor,
            act: Style.menuAnchor + ' ' + Style.menuAnchor_active
        }
        const isCurrentPage = router.pathname.includes(url)
        return isCurrentPage ? objClassName.act : objClassName.pass
    }

    const className = getClassName()

    return (
        <li>
            <Link href={url}>
                <a className={className}>{name}</a>
            </Link>
        </li>
    )
}
