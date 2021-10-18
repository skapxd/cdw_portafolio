import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { ListOfCardPost } from '../../components/lv_3/ListOfCardPost/ListOfCardPost'
import { Layout } from '../../components/lv_5/Layout/Layout'
import { tagAPIRouter, tagJsonRoute } from '../../config/routes'
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

    const listPost = await getListPost()
    const listTags = await getListTags()

    if (!listPost.success)
        return {
            redirect: {
                destination: '/404'
            }
        }

    return {
        props: {
            listTags,
            tag: params.tag,
            listPost: listPost.data
        }
    }
}

interface TagsI {
    listPost: CardPostI[]
    listTags: string[]
    tag: string
}

export default function Tags(props: TagsI) {
    const { listTags, listPost, tag } = props

    return (
        <Layout listOfPost={listPost} listOfTags={listTags}>
            <div className={Style.tags}>
                <p> {listPost.length} coincidencias de</p>
                <div className={Style.tags_title}> {tag} </div>

                <ListOfCardPost
                    list={listPost}
                    className={Style.tags_listPost}
                />
            </div>
        </Layout>
    )
}
