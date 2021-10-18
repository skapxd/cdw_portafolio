import { ExploreTags } from '../../lv_2/ExploreTags/ExploreTags'
import { Footer } from '../../lv_2/Fotter/Footer'
import { Header } from '../../lv_2/Header/Header'
import { MostSeen } from '../../lv_4/MostSeen/MostSeen'
import { CardPostI } from '../../lv_3/CardPost/CardPost'

import Style from './Layout.module.sass'

interface LayoutI {
    children: any
    listOfPost: CardPostI[]
    listOfTags: string[]
}

export const Layout = ({ children, listOfPost, listOfTags }: LayoutI) => {
    return (
        <>
            <Header />
            <div className={Style.mainContainer}>
                {children}

                <ExploreTags listOfTags={listOfTags} />
                <MostSeen list={listOfPost} />
                <Footer />
            </div>
        </>
    )
}
