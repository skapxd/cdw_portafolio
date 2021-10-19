import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { ListOfCardPost } from '../../components/lv_3/ListOfCardPost/ListOfCardPost'
import { Layout } from '../../components/lv_5/Layout/Layout'
import {
    mostSeenAPIRoute,
    tagAPIRouter,
    tagJsonRoute
} from '../../config/routes'
import Style from './[tag].module.sass'

export async function getStaticPaths(props: any) {
    const getPath = async () => {
        const rest = await fetch(tagJsonRoute)
        const post: string[] = await rest.json()

        const paths = post.map((e) => ({
            params: { tag: e }
        }))

        return paths
    }

    const paths = await getPath()

    return { paths, fallback: false }
}

export async function getStaticProps(props: any) {
    const { params } = props

    const getListPost = async () => {
        const url = tagAPIRouter(params.tag)
        const respMultiPost = await fetch(url)
        const multiPost = await respMultiPost.json()
        return multiPost
    }

    const getListTags = async () => {
        const respListTags = await fetch(tagJsonRoute)
        const listTags = await respListTags.json()
        return listTags
    }

    const getMostSeen = async () => {
        const respMostSeen = await fetch(mostSeenAPIRoute)
        const mostSeen = await respMostSeen.json()
        return mostSeen
    }

    const [listPost, listTags, mostSeen] = await Promise.all([
        getListPost(),
        getListTags(),
        getMostSeen()
    ])

    if (!listPost.success)
        return {
            props: {
                listTags,
                mostSeen: mostSeen.data,
                tag: params.tag,
                listPost: null
            }
        }

    return {
        props: {
            mostSeen: mostSeen.data,
            listTags,
            tag: params.tag,
            listPost: listPost?.data
        }
    }
}

interface TagsI {
    listPost: CardPostI[]
    mostSeen: CardPostI[]
    listTags: string[]
    tag: string
}

export default function Tags(props: TagsI) {
    const { listTags, listPost, tag, mostSeen } = props

    return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <div className={Style.tags}>
                <p> {listPost?.length ?? 0} coincidencias de</p>
                <div className={Style.tags_title}> {tag} </div>

                <ListOfCardPost
                    list={listPost}
                    className={Style.tags_listPost}
                />
            </div>
        </Layout>
    )
}
