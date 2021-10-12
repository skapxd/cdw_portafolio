import Image from 'next/image'
import Style from './[post].module.sass'
import { CardPost, CardPostI } from '../../components/CardPost/CardPost'

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

    console.log('post: ', post)

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

    console.log(urlImage)

    return (
        <>
            <div className={Style.post}>
                <img className={Style.post_imgMain} src={urlImage} alt="" />
                {/* <Image
                loader={() => ''}
                alt="hola"
                src={urlImage}
                className={Style.post}
                width={30}
                height={30}
            /> */}
            </div>
        </>
    )
}
