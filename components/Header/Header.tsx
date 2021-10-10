import Head from 'next/head'
import Style from './Header.module.sass'
import 'material-icons/iconfont/material-icons.css'
import { Drawer, useOpenDrawer } from '../Drawer/Drawer'
import { Search, useOpenSearch } from '../Search/Search'

export const Header = () => {
    const openDrawer = useOpenDrawer()
    const openSearch = useOpenSearch()
    return (
        <div className={Style.mainContainer}>
            <Head>
                <meta name="theme-color" content="#0f0f12" />
            </Head>

            <Drawer />

            <Search />

            <span
                className={`material-icons ${Style.menu}`}
                onClick={() => openDrawer()}
            >
                menu
            </span>
            <span
                className={`material-icons ${Style.search}`}
                onClick={() => openSearch()}
            >
                search
            </span>
        </div>
    )
}
