import { useRouter } from 'next/router'
import { useState } from 'react'
import ArrowIcon, {
    ArrowIconDirection
} from '../../components/lv_1/Icons/ArrowIcon'

import Style from './Search.module.sass'
import { ListOfCardPost } from '../../components/lv_3/ListOfCardPost/ListOfCardPost'
import { getBasicData } from '../../helpers/getBasicData'
import { CardPostI } from '../../components/lv_3/CardPost/CardPost'

export async function getStaticProps() {
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

interface SearchI {
    listPost: CardPostI[]
}
export default function Search(props: SearchI) {
    const { listPost } = props
    const closeSearch = useCloseSearch()

    const [post, setPost] = useState(listPost)

    return (
        <div className={Style.search}>
            <div className={Style.search_bar}>
                <ArrowIcon
                    direction={ArrowIconDirection.Left}
                    onClick={() => closeSearch()}
                />

                <input
                    // data-cy="search_input"
                    className={Style.search_bar_inputText}
                    placeholder="Buscar post"
                    onChange={(event) => {
                        const value = event.currentTarget.value.toLowerCase()

                        const listTemp = listPost.filter((e) => {
                            return e.title.toLowerCase().includes(value)
                        })

                        setPost((e) => listTemp)
                    }}
                />
            </div>

            <div className={Style.search_divider}></div>

            <ListOfCardPost list={post} className={Style.search_listCardPost} />
        </div>
    )
}

const search = 'search'

export function searchLink() {
    return '/search'
}

export const useOpenSearch = () => {
    const router = useRouter()

    // if true, it means that Search page is open
    if (router.asPath.includes(search)) return () => {}

    return () => router.push(search)
}

export const useCloseSearch = () => {
    const router = useRouter()

    // if false, it means that Search page is close
    if (!router.asPath.includes(search)) return () => {}

    return () => router.back()
}
