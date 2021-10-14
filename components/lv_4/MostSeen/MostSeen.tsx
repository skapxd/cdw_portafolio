import { Title } from '../../lv_1/Title/Title'
import { ListOfMiniCard } from '../../lv_3/ListOfMiniCardPost/ListOfMiniCard'
import { CardPostI } from '../../lv_3/CardPost/CardPost'
import Style from './MostSeen.module.sass'

interface MostSeenI {
    data: CardPostI[]
}

export const MostSeen = (props: MostSeenI) => {
    const { data } = props

    return (
        <div className={Style.mostSeen}>
            <Title text="Más vistos" />
            <ListOfMiniCard
                data={data}
                className={Style.mostSeen_listOfMiniCard}
            />
        </div>
    )
}
