import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import Style from './index.module.sass'

export async function getStaticProps () {
  const { listPost, listTags, mostSeen, lastPost } = getBasicData()

  return {
    props: {
      listPost,
      listTags,
      mostSeen,
      lastPost
    }
  }
}

interface CreditsI {
    listPost: CardPostI[]
    listTags: string[]
    mostSeen: CardPostI[]
    lastPost: CardPostI[]
}
export default function Credits (props: CreditsI) {
  const { mostSeen, listTags } = props
  return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <div className={Style.credits}>
                <div className={Style.credits_title}> Créditos </div>

                <p>
                    Agradezco el trabajo de{' '}
                    <a
                        target="_blank"
                        href="https://themeforest.net/user/anvodstudio" rel="noreferrer"
                    >
                        AnvodStudio
                    </a>{' '}
                    y el diseño{' '}
                    <a
                        target="_blank"
                        href="http://preview.themeforest.net/item/norlin-personal-dark-theme-for-ghost/full_screen_preview/29478195" rel="noreferrer"
                    >
                        Norlin
                    </a>{' '}
                    por ser fuente de inspiración para este blog. Puede
                    encontrar más diseños de{' '}
                    <a
                        target="_blank"
                        href="https://themeforest.net/user/anvodstudio" rel="noreferrer"
                    >
                        AnvodStudio
                    </a>{' '}
                    en su{' '}
                    <a target="_blank" href="https://anvodstudio.com/" rel="noreferrer">
                        página oficial
                    </a>
                    .
                </p>
            </div>
        </Layout>
  )
}
