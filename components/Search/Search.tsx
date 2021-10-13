import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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

export const Search = () => {
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
                <span
                    className={`material-icons-round ${Style.search_bar_iconBack}`}
                    onClick={() => closeSearch()}
                >
                    arrow_back
                </span>

                <input
                    className={Style.search_bar_inputText}
                    placeholder="Buscar post"
                />
            </div>
            <div className={Style.search_divider}></div>
        </div>
    )
}
