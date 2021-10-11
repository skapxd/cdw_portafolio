import { Tags } from '../Tags/Tags'
import Style from './ExploreTags.module.sass'

export const ListOfTags = () => {
    const data = ['Móvil', 'Web', 'Deploy', 'GCP', 'Heroku']

    return (
        <div className={Style.listOfTags}>
            {data.map((e) => (
                <Tags text={e} className={Style.listOfTags_item} />
            ))}
        </div>
    )
}
