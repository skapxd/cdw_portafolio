import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import Style from './index.module.sass'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { TechnologiesComponent } from '../../components/lv_2/TechnologiesComponent/TechnologiesComponent'
import { getTechnologiesIcons } from '../../components/lv_2/TecnologiesIcon/TecnologiesIcon'

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

    const { lenguajes, clouds, gitCloud, frontend, backend, mobile, blog } =
        getTechnologiesIcons()

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

    const {
        cloudsRecentUse,
        cloudsIncreasedUse,
        cloudsPleasure,
        cloudsLearnOrDeepen
    } = clouds

    const {
        gitCloudsRecentUse,
        gitCloudsIncreasedUse,
        gitCloudsPleasure,
        gitCloudsLearnOrDeepen
    } = gitCloud

    const { blogCloudsPleasure } = blog

    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <h1 className={Style.abilities_title}>Tecnologías</h1>
            <div className={Style.abilities_components}>
                <TechnologiesComponent
                    text="Lenguajes"
                    learnOrDeepen={lenguajesLearnOrDeepen}
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesIncreasedUse}
                    pleasures={lenguajesPleasure}
                />
                <TechnologiesComponent
                    text="Frontend"
                    recentUse={frontendRecentUse}
                    increasedUse={frontendIncreasedUse}
                    pleasures={frontendPleasure}
                    learnOrDeepen={frontendLearnOrDeepen}
                />
                <TechnologiesComponent
                    text="Backend"
                    recentUse={backendRecentUse}
                    increasedUse={backendIncreasedUse}
                    pleasures={backendPleasure}
                    learnOrDeepen={backendLearnOrDeepen}
                />
                <TechnologiesComponent
                    text="Móvil"
                    recentUse={mobileRecentUse}
                    increasedUse={mobileIncreasedUse}
                    pleasures={mobilePleasure}
                    learnOrDeepen={mobileLearnOrDeepen}
                />
                <TechnologiesComponent
                    text="Clouds"
                    recentUse={cloudsRecentUse}
                    increasedUse={cloudsIncreasedUse}
                    pleasures={cloudsPleasure}
                    learnOrDeepen={cloudsLearnOrDeepen}
                />
                <TechnologiesComponent
                    text="Git Cloud"
                    recentUse={gitCloudsRecentUse}
                    increasedUse={gitCloudsIncreasedUse}
                    pleasures={gitCloudsPleasure}
                    learnOrDeepen={gitCloudsLearnOrDeepen}
                />

                <TechnologiesComponent
                    text="Utilizados en este blog"
                    pleasures={blogCloudsPleasure}
                />
            </div>
        </Layout>
    )
}
