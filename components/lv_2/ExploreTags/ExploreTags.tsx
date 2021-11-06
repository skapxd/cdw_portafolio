import { Title } from '../../lv_1/Title/Title'
import { ListOfTags } from '../ListOfTags/ListOfTags'
import Style from './ExploreTags.module.sass'

interface ExploreTagsI {
    listOfTags: string[]
    className?: string
}

export const ExploreTags = (props: ExploreTagsI) => {
    const { listOfTags, className = '' } = props

    return (
        <div className={`${Style.exploreTags} ${className}`}>
            <Title text="Etiquetas" className={Style.exploreTags_title} />
            <ListOfTags
                tags={listOfTags}
                className={Style.exploreTags_displayRow}
            />
        </div>
    )
}
