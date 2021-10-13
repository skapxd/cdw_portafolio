import Style from './CardPost.module.sass'
import Link from 'next/link'
import { MiniTags } from '../Tags/Tags'

export interface CardPostI {
    id: string
    favorite: boolean
    date: string
    readingTime: string
    title: string
    tags: string[]
    shortDescription: string
    urlImage: string
    urlPost: string
}
export function CardPost(props: CardPostI) {
    const {
        favorite,
        date,
        readingTime,
        title,
        tags,
        shortDescription,
        urlImage,
        id,
        urlPost
    } = props

    return (
        <Link href={'/post/' + urlPost} key={id}>
            <a
                className={Style.card}
                style={{ backgroundImage: `url(${urlImage})` }}
            >
                <div className={Style.card_starWrapper}>
                    <span className={`material-icons ${Style.card_star}`}>
                        star_outline
                    </span>
                </div>

                <div className={Style.card_readingTimeAndDatePosition}>
                    <span className={Style.card_readingTime}>
                        {readingTime}
                    </span>{' '}
                    <span className={Style.card_date}>{date}</span>
                </div>

                <h2 className={Style.card_title}>{title}</h2>

                <p className={Style.card_shortDescription}>
                    {shortDescription}
                </p>

                <ListOfMiniTags tags={tags} />
            </a>
        </Link>
    )
}

function ListOfMiniTags({ tags }: { tags: string[] }) {
    return (
        <div className={Style.card_tagsList}>
            {tags.map((e) => (
                <MiniTags text={e} key={e} />
            ))}
        </div>
    )
}
