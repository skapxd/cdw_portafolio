import ReactMarkdown from 'react-markdown'

import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import Style from './[post].module.sass'
import MarkDownStyle from '../../styles/_markdown.module.sass'
import { MiniTags } from '../../components/lv_1/MiniTags/MiniTags'

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

    const rest = await fetch(`http://localhost:3000/api/posts/${params.post}`)
    const post: CardPostI[] = await rest.json()

    return {
        props: post
    }
}

export default function Post(props: any) {
    const {
        date,
        urlImage,
        urlPost,
        tags,
        title,
        id,
        readingTime,
        favorite,
        shortDescription
    }: CardPostI = props.data

    return (
        <>
            <div className={Style.post}>
                <img className={Style.post_imgMain} src={urlImage} alt="" />

                <div className={Style.post_boxReadTimeAndDate}>
                    <span className={Style.post_readTime}>{readingTime} </span>{' '}
                    <span className={Style.post_date}>{date}</span>
                </div>

                <h2 className={Style.post_title}>{title}</h2>

                <ListOfTags tags={tags} />

                <ReactMarkdown
                    className={MarkDownStyle.markDown}
                    children={`Hola`}
                />
            </div>
        </>
    )
}

function ListOfTags({ tags }: { tags: string[] }) {
    return (
        <div className={Style.post_listOfTags}>
            {tags.map((e) => (
                <MiniTags text={e} key={e} className={Style.post_tagItem} />
            ))}
        </div>
    )
}
