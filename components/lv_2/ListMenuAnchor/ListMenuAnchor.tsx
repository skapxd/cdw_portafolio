import { MenuAnchor } from '../../lv_1/MenuAnchor/MenuAnchor'

import Style from './ListMenuAnchor.module.sass'

export const menuAnchor = [
    { name: 'Inicio', url: '/' },
    { name: 'Articulos', url: '/' },
    { name: 'Proyectos', url: '/' },
    { name: 'Historia', url: '/about' },
    { name: 'Habilidades', url: '/' },
    { name: 'Ruta', url: '/' }
]

interface ListMenuAnchorI {
    className?: string
}
export function ListMenuAnchor(props: ListMenuAnchorI) {
    const { className = '' } = props

    return (
        <div className={`${Style.listMenuAnchor} ${className}`}>
            {menuAnchor.map((e) => {
                return <MenuAnchor key={e.name} name={e.name} url={e.url} />
            })}
        </div>
    )
}
