import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { Layout } from '../../components/lv_5/Layout/Layout'
import { postJsonRoute, tagJsonRoute } from '../../config/routes'
import Style from './[tag].module.sass'

export async function getStaticPaths(props: any) {
    const rest = await fetch(tagJsonRoute)
    const post: CardPostI[] = await rest.json()

    const paths = post.map((e) => ({
        params: { tag: e }
    }))

    console.log('paths: ', paths)

    console.log(post)

    return { paths, fallback: false }
}

export async function getStaticProps(props: any) {
    const { params } = props

    // const respSinglePost = await fetch(
    //     `http://localhost:3000/api/posts/${params.post}`
    // )
    // const { data } = await respSinglePost.json()

    const respMultiPost = await fetch(postJsonRoute)
    const multiPost = await respMultiPost.json()

    const respListTags = await fetch(tagJsonRoute)
    const listTags = await respListTags.json()

    return {
        props: {
            multiPost,
            listTags
            // singlePost: data
        }
    }
}

interface TagsI {
    // singlePost: CardPostI
    multiPost: CardPostI[]
    listTags: string[]
}

export default function Tags(props: TagsI) {
    const { listTags, multiPost } = props

    return (
        <Layout listOfPost={multiPost} listOfTags={listTags}>
            <div></div>
        </Layout>
    )
}
