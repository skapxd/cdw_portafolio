import Style from './ExploreTags.module.sass'
import { Title } from '../Title/Title'
import { ListOfTags } from './ListOfTags'

export const ExploreTags = () => {
    return (
        <div className={Style.tags}>
            <Title text="Etiquetas" className={Style.tags_title} />
            <ListOfTags />
        </div>
    )
}
