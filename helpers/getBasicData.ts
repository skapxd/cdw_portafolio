import * as fs from 'fs'
import { CardPostI } from '../components/lv_3/CardPost/CardPost'
import jsonFile from '../routes/json_files'

export const getBasicData = async () => {
    const getListPosts = async (): Promise<CardPostI[]> => {
        const postUrl = jsonFile().post
        const data = fs.readFileSync(postUrl, { encoding: 'utf-8' })
        const multiPost = JSON.parse(data)
        return multiPost
    }

    const getListTags = async (): Promise<string[]> => {
        const tagsUrl = jsonFile().tags
        const data = fs.readFileSync(tagsUrl, { encoding: 'utf-8' })
        const listTags = JSON.parse(data)
        return listTags
    }

    const getMostSeen = async (): Promise<CardPostI[]> => {
        const mostSeenUrl = jsonFile().mostSeen
        const data = fs.readFileSync(mostSeenUrl, {
            encoding: 'utf-8'
        })
        const mostSeen = JSON.parse(data)
        return mostSeen ?? null
    }

    const [listPost, listTags, mostSeen] = await Promise.all([
        getListPosts(),
        getListTags(),
        getMostSeen()
    ])

    return {
        listPost,
        listTags,
        mostSeen
    }
}

export const getSinglePost = (id: string): CardPostI => {
    const data = fs.readFileSync('public/post.json', {
        encoding: 'utf-8'
    })

    const posts = <CardPostI[]>JSON.parse(data)

    const post = posts.filter((e) => {
        return e.urlPost === id
    })

    if (post.length === 0) throw new Error("Post don't exist")

    return post[0]
}

export const getPostByTags = (tag: string): CardPostI[] => {
    const data = fs.readFileSync('public/post.json', {
        encoding: 'utf-8'
    })

    const listPost = <CardPostI[]>JSON.parse(data)

    const post = listPost.filter((e) => {
        return e.tags.includes(tag)
    })

    return post
}
