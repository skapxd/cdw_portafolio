import Style from './MiniCard.module.sass'
import { CardPostI } from '../../lv_3/CardPost/CardPost'
import { ListOfMiniTags } from '../ListOfMiniTags/ListOfTags'

export const MiniCard = (props: CardPostI) => {
    const {
        id,
        tags,
        date,
        title,
        urlPost,
        favorite,
        urlImage,
        readingTime,
        shortDescription
    } = props

    return (
        <div className={Style.miniCard}>
            <img src={urlImage} alt={title} />

            <div className={Style.miniCard_info}>
                <div>
                    <span className={Style.miniCard_info_readingTime}>
                        {readingTime}
                    </span>{' '}
                    <span className={Style.miniCard_info_date}>{date}</span>
                </div>
                <h4 className={Style.miniCard_info_title}>{title}</h4>
                <ListOfMiniTags
                    tags={tags}
                    className={Style.miniCard_info_displayRow}
                />
            </div>
        </div>
    )
}
