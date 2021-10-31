import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import Style from './index.module.sass'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'

export async function getStaticProps() {
    const { listPost, listTags, mostSeen, lastPost } = getBasicData()

    return {
        props: {
            listPost,
            listTags,
            mostSeen,
            lastPost
        }
    }
}

interface ProjectsI {
    listPost: CardPostI[]
    listTags: string[]
    mostSeen: CardPostI[]
    lastPost: CardPostI[]
}
export default function Projects(props: ProjectsI) {
    const { mostSeen, listTags } = props
    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <div className={Style.projects_title}>Proyectos</div>
        </Layout>
    )
}
