import Link from 'next/link'

import MenuIcon from '../../lv_1/Icons/MenuIcon'
import SearchIcon from '../../lv_1/Icons/SearchIcon'

import { Drawer, useOpenDrawer } from '../Drawer/Drawer'
import { ListMenuAnchor } from '../ListMenuAnchor/ListMenuAnchor'
import { searchLink } from '../../../pages/search'
import staticImage from '../../../routes/static_images'
import { homeLink } from '../../../pages/index'

import Style from './Header.module.scss'

export const Header = () => {
  const openDrawer = useOpenDrawer()
  return (
        <header className={Style.mainContainer}>
            <div className={Style.mainContainer_content}>
                <MenuIcon onClick={() => openDrawer()} className={Style.menu} />

                <Link href={homeLink()}>
                    <a className={Style.logo}>
                        <img src={staticImage().logo} alt="logo" />
                    </a>
                </Link>

                <ListMenuAnchor className={Style.listMenuAnchor} />

                <Link href={searchLink()}>
                    <a>
                        <SearchIcon className={Style.search} />
                    </a>
                </Link>

                <div style={{ width: 0, position: 'absolute' }}>
                    <Drawer />
                </div>
            </div>
        </header>
  )
}
