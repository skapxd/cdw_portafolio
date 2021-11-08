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
import { NextjsIcon } from '../../components/lv_1/Icons/Tecnologies/NextjsIcon'
import { ReactIcon } from '../../components/lv_1/Icons/Tecnologies/ReactIcon'
import { AngularIcon } from '../../components/lv_1/Icons/Tecnologies/AngularIcon'
import { VuejsIcon } from '../../components/lv_1/Icons/Tecnologies/VuejsIcon'
import { SvelteIcon } from '../../components/lv_1/Icons/Tecnologies/SvelteIcon'
import { LitjsIcon } from '../../components/lv_1/Icons/Tecnologies/LitjsIcon'
import { SolidjsIcon } from '../../components/lv_1/Icons/Tecnologies/SolidjsIcon'
import { NodeIcon } from '../../components/lv_1/Icons/Tecnologies/NodeIcon'
import { NestjsIcon } from '../../components/lv_1/Icons/Tecnologies/NestjsIcon'
import { FlutterIcon } from '../../components/lv_1/Icons/Tecnologies/FlutterIcon'
import { ReactNativeIcon } from '../../components/lv_1/Icons/Tecnologies/ReactNativeIcon'
import { AndroidIcon } from '../../components/lv_1/Icons/Tecnologies/AndroidIcon'
import { AppleIcon } from '../../components/lv_1/Icons/Tecnologies/AppleIcon'
import { JavaIcon } from '../../components/lv_1/Icons/Tecnologies/JavaIcon'

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

export const technologiesLink = () => 'technologies'

function getTecnologiesIcons() {
    const lenguajes = {
        lenguajesRecentUse: [
            <JavascriptIcon />,
            <TypeScriptIcon />,
            <HtmlIcon />,
            // <CssIcon />
            <SassIcon />
            // <DartIcon />
        ],
        lenguajesIncreasedUse: [
            <TypeScriptIcon />,
            <DartIcon />,
            <JavascriptIcon />,
            // <SassIcon />,
            <HtmlIcon />,
            <CssIcon />
        ],
        lenguajesPleasure: [
            <DartIcon />,
            <TypeScriptIcon />,
            <SassIcon />
            // <JavascriptIcon />,
            // <HtmlIcon />,
            // <CssIcon />
        ],
        lenguajesLearnOrDeepen: [
            <TypeScriptIcon />,
            <PythonIcon />,
            <GoIcon />,
            <RustIcon />,
            <DartIcon />,
            <JavaIcon />
            // <SassIcon />,
            // <JavascriptIcon />,
            // <HtmlIcon />,
            // <CssIcon />
        ]
    }

    const frontend = {
        frontendRecentUse: [<NextjsIcon />, <SassIcon />, <ReactIcon />],
        frontendIncreasedUse: [
            <HtmlIcon />,
            <CssIcon />,
            <JavascriptIcon />,
            <TypeScriptIcon />,
            <SassIcon />
        ],
        frontendPleasure: [
            <NextjsIcon />,
            <SassIcon />,
            <AngularIcon />,
            <SvelteIcon />
        ],
        frontendLearnOrDeepen: [
            <NextjsIcon />,
            <VuejsIcon />,
            <SvelteIcon />,
            <LitjsIcon />,
            <SolidjsIcon />
        ]
    }

    const backend = {
        backendRecentUse: [<NodeIcon />, <NestjsIcon />],
        backendIncreasedUse: [<NodeIcon />, <NestjsIcon />],
        backendPleasure: [<NestjsIcon />, <NodeIcon />],
        backendLearnOrDeepen: [<NodeIcon />, <GoIcon />]
    }

    const mobile = {
        mobileRecentUse: [<ReactNativeIcon />, <FlutterIcon />],
        mobileIncreasedUse: [<FlutterIcon />, <ReactNativeIcon />],
        mobilePleasure: [<FlutterIcon />, <ReactNativeIcon />],
        mobileLearnOrDeepen: [
            <ReactNativeIcon />,
            <AndroidIcon />,
            <AppleIcon />
        ]
    }

    const clouds = {}

    const gitCloud = {}

    return { lenguajes, frontend, backend, mobile, clouds, gitCloud }
}
