import Link from 'next/link'
import { ListOfMiniTags } from '../../lv_2/ListOfMiniTags/ListOfTags'
import Style from './CardPost.module.sass'
import { StarIcon } from '../../lv_1/Icons/StarIcon'

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
                <StarIcon className={Style.card_starWrapper} />
                {/* <div className={Style.card_starWrapper}>
                    <span className={`material-icons ${Style.card_star}`}>
                        star_outline
                    </span>
                </div> */}

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

                <ListOfMiniTags tags={tags} className={Style.card_flexRow} />
            </a>
        </Link>
    )
}
