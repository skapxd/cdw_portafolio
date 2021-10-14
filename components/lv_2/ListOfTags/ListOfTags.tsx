import { Tags } from '../../lv_1/Tags/Tags'

interface ListOfTagsI {
    tags: string[]
    className?: string
}

export const ListOfTags = (props: ListOfTagsI) => {
    const { tags, className } = props

    return (
        <div className={className}>
            {tags?.map((e) => (
                // {data.map((e) => (
                <Tags text={e} key={e} />
            ))}
        </div>
    )
}
