import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ArrowIcon, { ArrowIconDirection } from '../../lv_1/Icons/ArrowIcon'

import Style from './Search.module.sass'

const search = '#search'

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

export function Search() {
    const router = useRouter()
    const closeSearch = useCloseSearch()
    const [ifCanShowSearch, setIfCanShowSearch] = useState(false)

    useEffect(() => {
        if (router.asPath.includes(search)) {
            setIfCanShowSearch(true)
        } else {
            setIfCanShowSearch(false)
        }
    }, [router.asPath])

    if (!ifCanShowSearch) return <></>

    return (
        <div className={Style.search}>
            <div className={Style.search_bar}>
                <ArrowIcon
                    direction={ArrowIconDirection.Left}
                    onClick={() => closeSearch()}
                />

                <input
                    className={Style.search_bar_inputText}
                    placeholder="Buscar post"
                />
            </div>
            <div className={Style.search_divider}></div>
        </div>
    )
}
