import Style from './ExploreTags.module.sass'
import { Title } from '../../lv_1/Title/Title'
import { ListOfTags } from '../ListOfTags/ListOfTags'

interface ExploreTagsI {
    listOfTags: string[]
}

export const ExploreTags = (props: ExploreTagsI) => {
    const { listOfTags } = props

    return (
        <div className={Style.exploreTags}>
            <Title text="Etiquetas" className={Style.exploreTags_title} />
            <ListOfTags
                tags={listOfTags}
                className={Style.exploreTags_displayRow}
            />
        </div>
    )
}
