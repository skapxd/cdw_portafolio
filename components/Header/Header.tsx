import Image from 'next/image'
import Style from './Header.module.sass'
import 'material-icons/iconfont/material-icons.css'
import { Drawer, useOpenDrawer } from '../Drawer/Drawer'

export const Header = () => {
    const openDrawer = useOpenDrawer()

    return (
        <div className={Style.mainContainer}>
            <Drawer />

            <div className={Style.logo}>
                <Image src="/assets/logo.svg" width={100} height={40} />
            </div>

            <span
                className={`material-icons ${Style.menu}`}
                onClick={() => openDrawer()}
            >
                menu
            </span>
            <span className={`material-icons ${Style.search}`}>search</span>
        </div>
    )
}
