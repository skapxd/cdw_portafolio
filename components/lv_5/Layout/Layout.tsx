import { ExploreTags } from '../../lv_2/ExploreTags/ExploreTags'
import { Footer } from '../../lv_2/Fotter/Footer'
import { Header } from '../../lv_2/Header/Header'
import { MostSeen } from '../../lv_4/MostSeen/MostSeen'
import { CardPostI } from '../../lv_3/CardPost/CardPost'

import Style from './Layout.module.scss'
import { SocialMedia } from '../../lv_2/SocialMedia/SocialMedia'

interface LayoutI {
    children: any
    mostSeen: CardPostI[]
    listOfTags: string[]
    className?: string
}

export const Layout = (props: LayoutI) => {
  const { children, mostSeen, listOfTags, className = '' } = props

  return (
        <div className={Style.body}>
            <div className={Style.mainContainer}>
                <Header />
                <main className={className}>{children}</main>

                <div className={Style.mainContainer_flex}>
                    {/* <MostSeen
                        list={mostSeen}
                        className={`${Style.z_index} ${Style.mainContainer_flex_flex_width1}`}
                    /> */}

                    <ExploreTags
                        listOfTags={listOfTags}
                        className={`${Style.z_index} ${Style.mainContainer_flex_flex_width1}`}
                    />

                    <SocialMedia
                        className={`${Style.z_index} ${Style.mainContainer_flex_flex_width1}`}
                    />
                </div>

                <Footer className={Style.z_index} />
            </div>
        </div>
  )
}
