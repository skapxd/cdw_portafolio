import { CardPost, CardPostI } from '../components/lv_2/CardPost/CardPost'
import Style from './index.module.sass'

export async function getStaticProps() {
    const rest = await fetch('http://localhost:3000/post.json')
    const post = await rest.json()

    return {
        props: {
            data: post
        }
    }
}

interface HomeI {
    data: CardPostI[]
}

export default function Home(props: HomeI) {
    const { data } = props

    return (
        <div className={Style.firtsScreen}>
            <div className={Style.firtsScreen_logo}>
                <img src="/assets/logo.svg" height="50" width="150" />
            </div>
            <h1 className={Style.firtsScreen_titulo}>Desarrollo web y móvil</h1>

            <ListOfCardPost
                className={Style.firtsScreen_listOfCardPost}
                data={data}
            />
        </div>
    )
}

interface ListOfCardPostI {
    data: CardPostI[]
    className?: string
}

function ListOfCardPost(props: ListOfCardPostI) {
    const { data, className } = props

    return (
        <div className={className}>
            {data.map((e) => (
                <CardPost
                    key={e.id}
                    urlPost={e.urlPost}
                    urlImage={e.urlImage}
                    id={e.id}
                    favorite={e.favorite}
                    date={e.date}
                    readingTime={e.readingTime}
                    title={e.title}
                    tags={e.tags}
                    shortDescription={e.shortDescription}
                />
            ))}
        </div>
    )
}
