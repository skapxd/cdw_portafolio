import { CardPostI } from '../CardPost/CardPost'
import { MiniCard } from '../../lv_2/MiniCardPost/MiniCard'

interface ListOfMiniCardI {
    list: CardPostI[]
    className?: string
}

export const ListOfMiniCard = (props: ListOfMiniCardI) => {
    const { list, className } = props

    return (
        <div className={className}>
            {list?.map((e) => (
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
