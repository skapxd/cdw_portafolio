import Head from 'next/head'
import { Drawer, useOpenDrawer } from '../Drawer/Drawer'
import { Search, useOpenSearch } from '../Search/Search'
import MenuIcon from '../../lv_1/Icons/MenuIcon'
import SearchIcon from '../../lv_1/Icons/SearchIcon'
import { ListMenuAnchor } from '../ListMenuAnchor/ListMenuAnchor'

import Style from './Header.module.sass'
import Link from 'next/link'

export const Header = () => {
    const openDrawer = useOpenDrawer()
    const openSearch = useOpenSearch()
    return (
        <div className={Style.mainContainer}>
            <Head>
                <meta name="theme-color" content="#0f0f12" />
            </Head>

            <MenuIcon onClick={() => openDrawer()} className={Style.menu} />

            <Link href="/">
                <a>
                    <img
                        src="/assets/logo.svg"
                        className={Style.logo}
                        alt="logo"
                    />
                </a>
            </Link>

            <ListMenuAnchor className={Style.listMenuAnchor} />

            <SearchIcon onClick={() => openSearch()} className={Style.search} />

            <div style={{ width: 0, position: 'absolute' }}>
                <Drawer />

                <Search />
            </div>
        </div>
    )
}
