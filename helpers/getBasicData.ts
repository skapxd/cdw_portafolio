import * as fs from 'fs'
import { CardPostI } from '../components/lv_3/CardPost/CardPost'
import jsonFile from '../routes/json_files'

export const getBasicData = () => {
    const getListPosts = (): CardPostI[] => {
        const postUrl = jsonFile().post
        const data = fs.readFileSync(postUrl, { encoding: 'utf-8' })
        const multiPost = JSON.parse(data)
        return multiPost
    }

    const getListTags = (): string[] => {
        const tagsUrl = jsonFile().tags
        const data = fs.readFileSync(tagsUrl, { encoding: 'utf-8' })
        const listTags = JSON.parse(data)
        return listTags
    }

    const getMostSeen = (): CardPostI[] => {
        const mostSeenUrl = jsonFile().mostSeen
        const data = fs.readFileSync(mostSeenUrl, {
            encoding: 'utf-8'
        })
        const mostSeen = JSON.parse(data)
        return mostSeen ?? null
    }

    const getLastPost = (): CardPostI[] => {
        const postUrl = jsonFile().post
        const data = fs.readFileSync(postUrl, { encoding: 'utf-8' })
        const multiPost = JSON.parse(data)
        return [multiPost[0], multiPost[1], multiPost[2]]
    }

    const [listPost, listTags, mostSeen, lastPost] = [
        getListPosts(),
        getListTags(),
        getMostSeen(),
        getLastPost()
    ]

    return {
        listPost,
        listTags,
        mostSeen,
        lastPost
    }
}
