import { AndroidIcon } from '../../lv_1/Icons/Tecnologies/AndroidIcon'
import { AngularIcon } from '../../lv_1/Icons/Tecnologies/AngularIcon'
import { AppleIcon } from '../../lv_1/Icons/Tecnologies/AppleIcon'
import { AzureIcon } from '../../lv_1/Icons/Tecnologies/AzureIcon'
import { CssIcon } from '../../lv_1/Icons/Tecnologies/CssIcon'
import { DartIcon } from '../../lv_1/Icons/Tecnologies/DartIcon'
import { FlutterIcon } from '../../lv_1/Icons/Tecnologies/FlutterIcon'
import { GcpIcon } from '../../lv_1/Icons/Tecnologies/GcpIcon'
import { GitHubIcon } from '../../lv_1/Icons/Tecnologies/GithubIcon'
import { GoIcon } from '../../lv_1/Icons/Tecnologies/GoIcon'
import { HerokuIcon } from '../../lv_1/Icons/Tecnologies/HerokuIcon'
import { HtmlIcon } from '../../lv_1/Icons/Tecnologies/HtmlIcon'
import { JavascriptIcon } from '../../lv_1/Icons/Tecnologies/JavascriptIcon'
import { KotlinIcon } from '../../lv_1/Icons/Tecnologies/KotlinIcon'
import { LitjsIcon } from '../../lv_1/Icons/Tecnologies/LitjsIcon'
import { NestjsIcon } from '../../lv_1/Icons/Tecnologies/NestjsIcon'
import { NextjsIcon } from '../../lv_1/Icons/Tecnologies/NextjsIcon'
import { NodeIcon } from '../../lv_1/Icons/Tecnologies/NodeIcon'
import { PythonIcon } from '../../lv_1/Icons/Tecnologies/PythonIcon'
import { ReactIcon } from '../../lv_1/Icons/Tecnologies/ReactIcon'
import { ReactNativeIcon } from '../../lv_1/Icons/Tecnologies/ReactNativeIcon'
import { RustIcon } from '../../lv_1/Icons/Tecnologies/RustIcon'
import { SassIcon } from '../../lv_1/Icons/Tecnologies/SassIcon'
import { SolidjsIcon } from '../../lv_1/Icons/Tecnologies/SolidjsIcon'
import { SvelteIcon } from '../../lv_1/Icons/Tecnologies/SvelteIcon'
import { TypeScriptIcon } from '../../lv_1/Icons/Tecnologies/TypescriptIcon'
import { VercelIcon } from '../../lv_1/Icons/Tecnologies/VercelIcon'
import { VuejsIcon } from '../../lv_1/Icons/Tecnologies/VuejsIcon'
import { GitLabIcon } from '../../lv_1/Icons/Tecnologies/GitLabIcon'
import { BitbucketIcon } from '../../lv_1/Icons/Tecnologies/BitbucketIcon'

export function getTecnologiesIcons() {
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
            <KotlinIcon />
            // <JavaIcon />
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

    const clouds = {
        cloudsRecentUse: [<GcpIcon />, <HerokuIcon />, <VercelIcon />],
        cloudsIncreasedUse: [<GcpIcon />, <HerokuIcon />],
        cloudsPleasure: [<VercelIcon />, <GcpIcon />, <HerokuIcon />],
        cloudsLearnOrDeepen: [<GcpIcon />, <AzureIcon />]
    }

    const gitCloud = {
        gitCloudsRecentUse: [<GitHubIcon />, <BitbucketIcon />],
        gitCloudsIncreasedUse: [<GitHubIcon />],
        gitCloudsPleasure: [<GitHubIcon />],
        gitCloudsLearnOrDeepen: [
            <GitHubIcon />,
            <BitbucketIcon />,
            <GitLabIcon />
        ]
    }

    return { lenguajes, frontend, backend, mobile, clouds, gitCloud }
}
