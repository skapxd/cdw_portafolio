import Style from './ListOfMiniCard.module.sass'
import { CardPostI } from '../CardPost/CardPost'
import { MiniCard } from '../../lv_2/MiniCardPost/MiniCard'

interface ListOfMiniCardI {
    data: CardPostI[]
    className?: string
}

export const ListOfMiniCard = (props: ListOfMiniCardI) => {
    const { data, className } = props

    return (
        <div className={`${Style.listOfMiniCard} ${className} `}>
            {data.map((e) => (
                <MiniCard
                    key={e.id}
                    date={e.date}
                    favorite={e.favorite}
                    id={e.id}
                    readingTime={e.readingTime}
                    shortDescription={e.shortDescription}
                    tags={e.tags}
                    title={e.title}
                    urlImage={e.urlImage}
                    urlPost={e.urlPost}
                />
            ))}
        </div>
    )
}
