import { MenuAnchor } from '../../lv_1/MenuAnchor/MenuAnchor'

import Style from './ListMenuAnchor.module.sass'

export const menuAnchor = [
    { name: 'Inicio', url: '/' },
    { name: 'posts', url: '/' },
    { name: 'proyectos', url: '/' },
    { name: 'referencias', url: '/' },
    { name: 'Sobre mi', url: '/about' },
    { name: 'Mis habilidades', url: '/' }
]

interface ListMenuAnchorI {
    className?: string
}
export function ListMenuAnchor(props: ListMenuAnchorI) {
    const { className = '' } = props

    return (
        <div className={`${Style.listMenuAnchor} ${className}`}>
            {menuAnchor.map((e) => {
                return <MenuAnchor name={e.name} url={e.url} />
            })}
        </div>
    )
}
