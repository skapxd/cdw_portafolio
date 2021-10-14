import { Tags } from '../../lv_1/Tags/Tags'
import Style from './ExploreTags.module.sass'

export const ListOfTags = () => {
    const data = ['Móvil', 'Web', 'Deploy', 'GCP', 'Heroku', 'holaaaaa']

    return (
        <div className={Style.listOfTags}>
            {data.map((e) => (
                <Tags text={e} key={e} />
            ))}
        </div>
    )
}
