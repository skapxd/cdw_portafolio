import Link from 'next/link'

import MenuIcon from '../../lv_1/Icons/MenuIcon'
import SearchIcon from '../../lv_1/Icons/SearchIcon'

import { Drawer, useOpenDrawer } from '../Drawer/Drawer'
import { ListMenuAnchor } from '../ListMenuAnchor/ListMenuAnchor'

import Style from './Header.module.sass'
import Search, { namePageSearch, useOpenSearch } from '../../../pages/search'
import staticImage from '../../../routes/static_images'

export const Header = () => {
    const openDrawer = useOpenDrawer()
    const openSearch = useOpenSearch()
    return (
        <div className={Style.mainContainer}>
            <MenuIcon onClick={() => openDrawer()} className={Style.menu} />

            <Link href="/">
                <a className={Style.logo}>
                    <img src={staticImage().logo} alt="logo" />
                </a>
            </Link>

            <ListMenuAnchor className={Style.listMenuAnchor} />

            <Link href={namePageSearch}>
                <a>
                    <SearchIcon className={Style.search} />
                </a>
            </Link>

            <div style={{ width: 0, position: 'absolute' }}>
                <Drawer />

                <Search />
            </div>
        </div>
    )
}
