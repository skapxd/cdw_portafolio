import { AndroidIcon } from '../../lv_1/Icons/Technologies/AndroidIcon'
import { AngularIcon } from '../../lv_1/Icons/Technologies/AngularIcon'
import { AppleIcon } from '../../lv_1/Icons/Technologies/AppleIcon'
import { AzureIcon } from '../../lv_1/Icons/Technologies/AzureIcon'
import { CssIcon } from '../../lv_1/Icons/Technologies/CssIcon'
import { DartIcon } from '../../lv_1/Icons/Technologies/DartIcon'
import { FlutterIcon } from '../../lv_1/Icons/Technologies/FlutterIcon'
import { GcpIcon } from '../../lv_1/Icons/Technologies/GcpIcon'
import { GitHubIcon } from '../../lv_1/Icons/Technologies/GithubIcon'
import { GoIcon } from '../../lv_1/Icons/Technologies/GoIcon'
import { HerokuIcon } from '../../lv_1/Icons/Technologies/HerokuIcon'
import { HtmlIcon } from '../../lv_1/Icons/Technologies/HtmlIcon'
import { JavascriptIcon } from '../../lv_1/Icons/Technologies/JavascriptIcon'
import { KotlinIcon } from '../../lv_1/Icons/Technologies/KotlinIcon'
import { LitjsIcon } from '../../lv_1/Icons/Technologies/LitjsIcon'
import { NestjsIcon } from '../../lv_1/Icons/Technologies/NestjsIcon'
import { NextjsIcon } from '../../lv_1/Icons/Technologies/NextjsIcon'
import { NodeIcon } from '../../lv_1/Icons/Technologies/NodeIcon'
import { PythonIcon } from '../../lv_1/Icons/Technologies/PythonIcon'
import { ReactIcon } from '../../lv_1/Icons/Technologies/ReactIcon'
import { ReactNativeIcon } from '../../lv_1/Icons/Technologies/ReactNativeIcon'
import { RustIcon } from '../../lv_1/Icons/Technologies/RustIcon'
import { SassIcon } from '../../lv_1/Icons/Technologies/SassIcon'
import { SolidjsIcon } from '../../lv_1/Icons/Technologies/SolidjsIcon'
import { SvelteIcon } from '../../lv_1/Icons/Technologies/SvelteIcon'
import { TypeScriptIcon } from '../../lv_1/Icons/Technologies/TypescriptIcon'
import { VercelIcon } from '../../lv_1/Icons/Technologies/VercelIcon'
import { VuejsIcon } from '../../lv_1/Icons/Technologies/VuejsIcon'
import { GitLabIcon } from '../../lv_1/Icons/Technologies/GitLabIcon'
import { BitbucketIcon } from '../../lv_1/Icons/Technologies/BitbucketIcon'

export function getTechnologiesIcons () {
  const lenguajes = {
    lenguajesRecentUse: [
            <JavascriptIcon />,
            <TypeScriptIcon />,
            <HtmlIcon />,
            <SassIcon />
    ],
    lenguajesIncreasedUse: [
            <TypeScriptIcon />,
            <DartIcon />,
            <JavascriptIcon />,
            <HtmlIcon />,
            <CssIcon />
    ],
    lenguajesPleasure: [<DartIcon />, <TypeScriptIcon />, <SassIcon />],
    lenguajesLearnOrDeepen: [
            <TypeScriptIcon />,
            <PythonIcon />,
            <GoIcon />,
            <RustIcon />,
            <DartIcon />,
            <KotlinIcon />
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

  const blog = {
    blogCloudsPleasure: [
            <NextjsIcon />,
            <ReactIcon />,
            <TypeScriptIcon />,
            <NodeIcon />,
            <HtmlIcon />,
            <SassIcon />,
            <GitHubIcon />,
            <VercelIcon />
    ]
  }

  return { lenguajes, frontend, backend, mobile, clouds, gitCloud, blog }
}
