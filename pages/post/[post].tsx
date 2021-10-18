import ReactMarkdown from 'react-markdown'

import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import MarkDownStyle from '../../styles/_markdown.module.sass'
import { MiniTags } from '../../components/lv_1/MiniTags/MiniTags'
import { ListOfTags } from '../../components/lv_2/ListOfTags/ListOfTags'

import Style from './[post].module.sass'
import { Layout } from '../../components/lv_5/Layout/Layout'

export async function getStaticPaths(props: any) {
    const rest = await fetch('http://localhost:3000/post.json')
    const post: CardPostI[] = await rest.json()

    const paths = post.map((e) => ({
        params: { post: e.urlPost }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(props: any) {
    const { params } = props

    const respSinglePost = await fetch(
        `http://localhost:3000/api/posts/${params.post}`
    )
    const { data } = await respSinglePost.json()

    const respMultiPost = await fetch('http://localhost:3000/post.json')
    const multiPost = await respMultiPost.json()

    const respListTags = await fetch('http://localhost:3000/tags.json')
    const listTags = await respListTags.json()

    return {
        props: {
            multiPost,
            listTags,
            singlePost: data
        }
    }
}

interface PostI {
    singlePost: CardPostI
    multiPost: CardPostI[]
    listTags: string[]
}

export default function Post(props: PostI) {
    const { multiPost, singlePost, listTags } = props

    const {
        date,
        tags,
        title,
        shortDescription,
        urlImage,
        favorite,
        id,
        readingTime,
        urlPost
    } = singlePost

    return (
        <Layout listOfPost={multiPost} listOfTags={listTags}>
            <div className={Style.post}>
                <img className={Style.post_imgMain} src={urlImage} alt="" />

                <div className={Style.post_boxReadTimeAndDate}>
                    <span className={Style.post_readTime}>{readingTime} </span>{' '}
                    <span className={Style.post_date}>{date}</span>
                </div>

                <h2 className={Style.post_title}>{title}</h2>

                <ListOfTags tags={tags} className={Style.post_listOfTags} />

                <ReactMarkdown
                    className={MarkDownStyle.markDown}
                    children={`Hola`}
                />
            </div>
        </Layout>
    )
}
