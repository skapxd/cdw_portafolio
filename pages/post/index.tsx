import { Layout } from '../../components/lv_5/Layout/Layout'
import { getBasicData } from '../../helpers/getBasicData'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { ListOfCardPost } from '../../components/lv_3/ListOfCardPost/ListOfCardPost'

import Style from './index.module.sass'

export async function getStaticProps (props: any) {
  const { listTags, mostSeen, listPost } = getBasicData()

  return {
    props: {
      mostSeen,
      listTags,
      listPost
    }
  }
}

interface AllPostI {
    mostSeen: CardPostI[]
    listTags: string[]
    listPost: CardPostI[]
}
export default function AllPost (props: AllPostI) {
  const { listPost, mostSeen, listTags } = props

  return (
        <Layout listOfTags={listTags} mostSeen={mostSeen}>
            <div className={Style.post_title}> Articulos</div>

            <ListOfCardPost list={listPost} className={Style.post_listPost} />
        </Layout>
  )
}

export function postLink (post: string) {
  return `/post/${post}`
}
