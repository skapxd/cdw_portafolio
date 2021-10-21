import Head from 'next/head'
import Style from './Header.module.sass'
import 'material-icons/iconfont/material-icons.css'
import { Drawer, useOpenDrawer } from '../Drawer/Drawer'
import { Search, useOpenSearch } from '../Search/Search'
import MenuIcon from '../../lv_1/Icons/MenuIcon'
import SearchIcon from '../../lv_1/Icons/SearchIcon'

export const Header = () => {
    const openDrawer = useOpenDrawer()
    const openSearch = useOpenSearch()
    return (
        <div className={Style.mainContainer}>
            <Head>
                <meta name="theme-color" content="#0f0f12" />
            </Head>

            <MenuIcon onClick={() => openDrawer()} />

            <SearchIcon onClick={() => openSearch()} />

            <Drawer />

            <Search />
        </div>
    )
}
