import { CardPost, CardPostI } from '../CardPost/CardPost'

interface ListOfCardPostI {
    list: CardPostI[]
    className?: string
}

export function ListOfCardPost(props: ListOfCardPostI) {
    const { list, className } = props

    return (
        <div className={className}>
            {list?.map((e) => (
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
