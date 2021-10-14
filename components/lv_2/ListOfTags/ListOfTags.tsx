import { Tags } from '../../lv_1/Tags/Tags'

interface ListOfTagsI {
    data: string[]
    className?: string
}

export const ListOfTags = (props: ListOfTagsI) => {
    const { data, className } = props

    return (
        <div className={className}>
            {data?.map((e) => (
                // {data.map((e) => (
                <Tags text={e} key={e} />
            ))}
        </div>
    )
}
