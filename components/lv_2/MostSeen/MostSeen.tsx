import { MiniCard } from '../MiniCardPost/MiniCard'
import { Title } from '../../lv_1/Title/Title'
import Style from './MostSeen.module.sass'

export const MostSeen = () => {
    return (
        <div className={Style.mostSeen}>
            <Title text="Más vistos" />
        </div>
    )
}

function ListOfMiniCard() {
    return <div className={Style.a}></div>
}
