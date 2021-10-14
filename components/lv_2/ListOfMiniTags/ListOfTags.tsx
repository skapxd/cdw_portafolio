import { MiniTags } from '../../lv_1/MiniTags/MiniTags'
import Style from './ListOfMiniTags.module.sass'

interface ListOfMiniTagsI {
    tags: string[]
    className?: string
}

export function ListOfMiniTags(props: ListOfMiniTagsI) {
    const { tags, className } = props

    return (
        <div className={className}>
            {tags.map((e) => (
                <MiniTags text={e} key={e} />
            ))}
        </div>
    )
}
