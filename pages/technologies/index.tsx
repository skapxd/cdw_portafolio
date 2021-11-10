import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import Style from './index.module.sass'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { TecnologiesComponent } from '../../components/lv_2/TecnologiesComponent/TecnologiesComponent'
import { getTecnologiesIcons } from '../../components/lv_2/TecnologiesIcon/TecnologiesIcon'

export async function getStaticProps() {
    const { listTags, mostSeen } = getBasicData()

    return {
        props: {
            listTags,
            mostSeen
        }
    }
}

export const technologiesLink = () => '/technologies'

interface TechnologiesI {
    listTags: string[]
    mostSeen: CardPostI[]
}
export default function Technologies(props: TechnologiesI) {
    const { mostSeen, listTags } = props

    const { lenguajes, clouds, gitCloud, frontend, backend, mobile } =
        getTecnologiesIcons()

    const {
        lenguajesIncreasedUse,
        lenguajesLearnOrDeepen,
        lenguajesPleasure,
        lenguajesRecentUse
    } = lenguajes

    const {
        frontendIncreasedUse,
        frontendLearnOrDeepen,
        frontendPleasure,
        frontendRecentUse
    } = frontend

    const {
        backendRecentUse,
        backendIncreasedUse,
        backendPleasure,
        backendLearnOrDeepen
    } = backend

    const {
        mobileRecentUse,
        mobileIncreasedUse,
        mobilePleasure,
        mobileLearnOrDeepen
    } = mobile

    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <h1 className={Style.abilities_title}>Tecnologías</h1>

            <div className={Style.abilities_components}>
                <TecnologiesComponent
                    text="Lenguajes"
                    learnOrDeepen={lenguajesLearnOrDeepen}
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesIncreasedUse}
                    pleasures={lenguajesPleasure}
                />
                <TecnologiesComponent
                    text="Frontend"
                    recentUse={frontendRecentUse}
                    increasedUse={frontendIncreasedUse}
                    pleasures={frontendPleasure}
                    learnOrDeepen={frontendLearnOrDeepen}
                />
                <TecnologiesComponent
                    text="Backend"
                    recentUse={backendRecentUse}
                    increasedUse={backendIncreasedUse}
                    pleasures={backendPleasure}
                    learnOrDeepen={backendLearnOrDeepen}
                />
                <TecnologiesComponent
                    text="Móvil"
                    learnOrDeepen={mobileLearnOrDeepen}
                    recentUse={mobileRecentUse}
                    increasedUse={mobileIncreasedUse}
                    pleasures={mobilePleasure}
                />
                <TecnologiesComponent
                    text="Clouds"
                    learnOrDeepen={lenguajesLearnOrDeepen}
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesRecentUse}
                    pleasures={lenguajesRecentUse}
                />
                <TecnologiesComponent
                    text="Git Cloud"
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesRecentUse}
                    pleasures={lenguajesRecentUse}
                    learnOrDeepen={lenguajesLearnOrDeepen}
                />
            </div>
        </Layout>
    )
}
