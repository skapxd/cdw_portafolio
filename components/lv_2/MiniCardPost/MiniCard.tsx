import Style from './MiniCard.module.sass'
import { CardPostI } from '../CardPost/CardPost'
import { ListOfTags } from '../../lv_2/ExploreTags/ListOfTags'

export const MiniCard = (props: CardPostI) => {
    const {
        date,
        urlImage,
        favorite,
        shortDescription,
        tags,
        title,
        id,
        readingTime,
        urlPost
    } = props

    return (
        <div className={Style.miniCard}>
            <img src={urlImage} alt={title} />

            <div className={Style.miniCard_info}>
                <span className={Style.miniCard_info_readingTime}>
                    {readingTime}
                </span>{' '}
                <span className={Style.miniCard_info_date}>{date}</span>
                <h4 className={Style.miniCard_info_title}>{title}</h4>
                <ListOfTags />
            </div>
        </div>
    )
}
