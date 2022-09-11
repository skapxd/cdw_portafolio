import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { ListOfCardPost } from '../../components/lv_3/ListOfCardPost/ListOfCardPost'
import { Layout } from '../../components/lv_5/Layout/Layout'
// import { tagAPIRouter} from '../../config/routes'
import { getBasicData } from '../../helpers/getBasicData'
import { getPostByTags } from '../../helpers/getPostByTags'

import Style from './[tag].module.scss'

export async function getStaticPaths (props: any) {
  const getPath = async () => {
    const { listTags } = await getBasicData()
    const paths = listTags.map((e) => ({
      params: { tag: e }
    }))
    return paths
  }

  const paths = await getPath()

  return { paths, fallback: false }
}

export async function getStaticProps (props: any) {
  const { params } = props

  const { mostSeen, listTags } = getBasicData()
  const listPost = getPostByTags(params.tag)

  return {
    props: {
      listPost,
      mostSeen,
      listTags,
      tag: params.tag
    }
  }
}

export const tagLink = (tag: string) => `/tag/${tag}`

interface TagsI {
    listPost: CardPostI[]
    mostSeen: CardPostI[]
    listTags: string[]
    tag: string
}

export default function Tags (props: TagsI) {
  const { listTags, listPost, tag, mostSeen } = props

  return (
        <Layout mostSeen={mostSeen} listOfTags={listTags}>
            <div className={Style.tags}>
                <p> {listPost?.length ?? 0} coincidencias de</p>
                <div className={Style.tags_title}> {tag} </div>

                <ListOfCardPost
                    list={listPost}
                    className={Style.tags_listPost}
                />
            </div>
        </Layout>
  )
}
