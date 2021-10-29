import Link from 'next/link'
import Head from 'next/head'

import MenuIcon from '../../lv_1/Icons/MenuIcon'
import SearchIcon from '../../lv_1/Icons/SearchIcon'

import { Drawer, useOpenDrawer } from '../Drawer/Drawer'
// import { Search, useOpenSearch } from '../Search/Search'
import { ListMenuAnchor } from '../ListMenuAnchor/ListMenuAnchor'

import Style from './Header.module.sass'
import Search, { namePageSearch, useOpenSearch } from '../../../pages/search'

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
                <a className={Style.logo}>
                    <img src="/assets/logo.svg" alt="logo" />
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
