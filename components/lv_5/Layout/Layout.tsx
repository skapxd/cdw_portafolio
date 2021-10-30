import { ExploreTags } from '../../lv_2/ExploreTags/ExploreTags'
import { Footer } from '../../lv_2/Fotter/Footer'
import { Header } from '../../lv_2/Header/Header'
import { MostSeen } from '../../lv_4/MostSeen/MostSeen'
import { CardPostI } from '../../lv_3/CardPost/CardPost'

import Style from './Layout.module.sass'

interface LayoutI {
    children: any
    mostSeen: CardPostI[]
    listOfTags: string[]
}

export const Layout = ({ children, mostSeen, listOfTags }: LayoutI) => {
    return (
        <div className={Style.body}>
            <div className={Style.mainContainer}>
                <Header />
                {children}

                <ExploreTags
                    listOfTags={listOfTags}
                    className={Style.z_index}
                />
                <p>Test</p>
                <MostSeen list={mostSeen} className={Style.z_index} />
                <Footer className={Style.z_index} />
            </div>
        </div>
    )
}
