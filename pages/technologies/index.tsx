import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import Style from './index.module.sass'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { TecnologiesComponent } from '../../components/lv_2/TecnologiesComponent/TecnologiesComponent'
import { DartIcon } from '../../components/lv_1/Icons/Tecnologies/DartIcon'
import { JavascriptIcon } from '../../components/lv_1/Icons/Tecnologies/JavascriptIcon'
import { TypeScriptIcon } from '../../components/lv_1/Icons/Tecnologies/TypescriptIcon'
import { HtmlIcon } from '../../components/lv_1/Icons/Tecnologies/HtmlIcon'
import { SassIcon } from '../../components/lv_1/Icons/Tecnologies/SassIcon'
import { CssIcon } from '../../components/lv_1/Icons/Tecnologies/CssIcon'
import { GoIcon } from '../../components/lv_1/Icons/Tecnologies/GoIcon'
import { RustIcon } from '../../components/lv_1/Icons/Tecnologies/RustIcon'
import { PythonIcon } from '../../components/lv_1/Icons/Tecnologies/PythonIcon'

export async function getStaticProps() {
    const { listTags, mostSeen } = getBasicData()

    return {
        props: {
            listTags,
            mostSeen
        }
    }
}

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

    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <h1 className={Style.abilities_title}>Tecnologías</h1>

            <div className={Style.abilities_components}>
                <TecnologiesComponent
                    text="Lenguajes"
                    learnOrDeepen={lenguajesLearnOrDeepen}
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesRecentUse}
                    pleasures={lenguajesRecentUse}
                />
                <TecnologiesComponent
                    text="Frontend"
                    recentUse={frontendIncreasedUse}
                    increasedUse={frontendLearnOrDeepen}
                    pleasures={frontendPleasure}
                    learnOrDeepen={frontendRecentUse}
                />
                <TecnologiesComponent
                    text="Backend"
                    learnOrDeepen={lenguajesLearnOrDeepen}
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesRecentUse}
                    pleasures={lenguajesRecentUse}
                />
                <TecnologiesComponent
                    text="Móvil"
                    learnOrDeepen={lenguajesLearnOrDeepen}
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesRecentUse}
                    pleasures={lenguajesRecentUse}
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
                    learnOrDeepen={lenguajesLearnOrDeepen}
                    recentUse={lenguajesRecentUse}
                    increasedUse={lenguajesRecentUse}
                    pleasures={lenguajesRecentUse}
                />
            </div>
        </Layout>
    )
}

export const technologiesLink = () => 'technologies'

function getTecnologiesIcons() {
    const lenguajes = {
        lenguajesRecentUse: [
            <JavascriptIcon />,
            <TypeScriptIcon />,
            <HtmlIcon />,
            <SassIcon />,
            <CssIcon />,
            <DartIcon />
        ],
        lenguajesIncreasedUse: [
            <TypeScriptIcon />,
            <DartIcon />,
            <SassIcon />,
            <HtmlIcon />,
            <JavascriptIcon />,
            <CssIcon />
        ],
        lenguajesPleasure: [
            <DartIcon />,
            <TypeScriptIcon />,
            <SassIcon />,
            <JavascriptIcon />,
            <HtmlIcon />,
            <CssIcon />
        ],
        lenguajesLearnOrDeepen: [
            <TypeScriptIcon />,
            <PythonIcon />,
            <GoIcon />,
            <RustIcon />,
            <DartIcon />,
            <SassIcon />,
            <JavascriptIcon />,
            <HtmlIcon />,
            <CssIcon />
        ]
    }

    const frontend = {
        frontendIncreasedUse: [<CssIcon />],
        frontendLearnOrDeepen: [<CssIcon />],
        frontendPleasure: [<CssIcon />],
        frontendRecentUse: [<CssIcon />]
    }

    const backend = {}

    const mobile = {}

    const clouds = {}

    const gitCloud = {}

    return { lenguajes, frontend, backend, mobile, clouds, gitCloud }
}
