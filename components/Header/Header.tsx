import Image from 'next/image'
import Style from './Header.module.sass'
import { Menu, Search } from 'react-ionicons'

export const Header = () => {
    return (
        <div className={Style.mainContainer}>
            <Image src="/assets/logo.svg" width={100} height={40} />
            <Menu height={25} width={25} cssClasses={Style.menu} />
            <Search height={20} width={20} cssClasses={Style.search} />
        </div>
    )
}
