import { CardPost, CardPostI } from '../CardPost/CardPost'

interface ListOfCardPostI {
    data: CardPostI[]
    className?: string
}

export function ListOfCardPost(props: ListOfCardPostI) {
    const { data, className } = props

    return (
        <div className={className}>
            {data.map((e) => (
                <CardPost
                    urlImage={e.urlImage}
                    key={e.id}
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
