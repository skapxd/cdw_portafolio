import { Title } from '../../lv_1/Title/Title'

import Style from './TecnologiesComponent.module.sass'

interface TecnologiesComponentI {
    text: string
    className?: string
    recentUse: JSX.Element[]
    increasedUse: JSX.Element[]
    pleasures: JSX.Element[]
    learnOrDeepen: JSX.Element[]
}
export function TecnologiesComponent(props: TecnologiesComponentI) {
    const {
        text,
        recentUse,
        increasedUse,
        pleasures,
        learnOrDeepen,
        className = ''
    } = props

    const key = Math.random

    return (
        <div className={`${Style.tecnologiesComponent} ${className}`}>
            <Title text={text} className={Style.tecnologiesComponent_title} />

            <div className={Style.tecnologiesComponent_info}>
                <div className={Style.tecnologiesComponent_subTitle}>
                    <h2> Uso reciente </h2>
                    <div className={Style.tecnologiesComponent_iconsList}>
                        {recentUse.map((e) => (
                            <div key={key()}> {e} </div>
                        ))}
                    </div>
                </div>

                <div className={Style.tecnologiesComponent_subTitle}>
                    <h2> Mayor uso</h2>
                    <div className={Style.tecnologiesComponent_iconsList}>
                        {increasedUse.map((e) => (
                            <div key={key()}> {e} </div>
                        ))}
                    </div>
                </div>

                <div className={Style.tecnologiesComponent_subTitle}>
                    <h2> Gustos </h2>
                    <div className={Style.tecnologiesComponent_iconsList}>
                        {pleasures.map((e) => (
                            <div key={key()}> {e} </div>
                        ))}
                    </div>
                </div>

                <div className={Style.tecnologiesComponent_subTitle}>
                    <h2> Aprender ó profundizar </h2>
                    <div className={Style.tecnologiesComponent_iconsList}>
                        {learnOrDeepen.map((e) => (
                            <div key={key()}> {e} </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
