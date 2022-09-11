import { Title } from '../../lv_1/Title/Title'

import Style from './TechnologiesComponent.module.sass'

interface TechnologiesComponentI {
    text: string
    className?: string
    recentUse?: JSX.Element[]
    increasedUse?: JSX.Element[]
    pleasures?: JSX.Element[]
    learnOrDeepen?: JSX.Element[]
}
export function TechnologiesComponent (props: TechnologiesComponentI) {
  const {
    text,
    recentUse,
    increasedUse,
    pleasures,
    learnOrDeepen,
    className = ''
  } = props

  return (
        <div className={`${Style.technologiesComponent} ${className}`}>
            <Title text={text} className={Style.technologiesComponent_title} />

            <div className={Style.technologiesComponent_info}>
                <ListOfTechnologies list={recentUse} title="Uso reciente" />

                <ListOfTechnologies list={increasedUse} title="Mayor uso" />

                <ListOfTechnologies list={pleasures} title="Gustos" />

                <ListOfTechnologies
                    list={learnOrDeepen}
                    title="Aprender ó profundizar"
                />
            </div>
        </div>
  )
}

interface ListOfTechnologiesI {
    list?: JSX.Element[]
    title: string
}
function ListOfTechnologies (props: ListOfTechnologiesI) {
  const { title, list = [] } = props
  const key = Math.random

  if (list.length === 0) return <></>

  return (
        <div className={Style.technologiesComponent_subTitle}>
            <h2>{title}</h2>
            <div className={Style.technologiesComponent_iconsList}>
                {list.map((e) => (
                    <div key={key()}> {e} </div>
                ))}
            </div>
        </div>
  )
}
