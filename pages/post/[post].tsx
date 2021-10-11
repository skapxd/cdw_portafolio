import Image from 'next/image'
import Style from './[post].module.sass'
import { CardPostI } from '../../components/CardPost/CardPost'

export async function getStaticPaths(props: any) {
    const rest = await fetch('http://localhost:3000/post.json')
    const post: CardPostI[] = await rest.json()

    const paths = post.map((e) => ({
        params: { post: e.urlPost }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(props: any) {
    const rest = await fetch('http://localhost:3000/post.json')
    const post: CardPostI[] = await rest.json()

    return {
        props: {
            data: post
        }
    }
}

export default function Post(props: any) {
    return <div className={Style.post}>hola</div>
}
