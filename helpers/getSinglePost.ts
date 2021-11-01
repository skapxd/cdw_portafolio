import * as fs from 'fs'
import { CardPostI } from '../components/lv_3/CardPost/CardPost'
import jsonFile from '../routes/json_files'

interface ReturnGetSinglePostI {
    metaData: CardPostI
    markDown: string
}
export const getSinglePost = (id: string): ReturnGetSinglePostI => {
    const getMetadata = () => {
        const postUrl = jsonFile().post
        const data = fs.readFileSync(postUrl, {
            encoding: 'utf-8'
        })
        const posts = <CardPostI[]>JSON.parse(data)
        const post = posts.filter((e) => {
            return e.urlPost === id
        })
        if (post.length === 0) throw new Error("Post don't exist")
        return post[0]
    }

    const getMarkDown = (post: CardPostI) => {
        const urlMarkDown = post.urlMarkdown
        if (!urlMarkDown) throw new Error("Url of markDown don't exist")
        const markDown = fs.readFileSync(urlMarkDown, {
            encoding: 'utf-8'
        })
        return markDown
    }

    const metaData = getMetadata()
    const markDown = getMarkDown(metaData)
    return {
        metaData,
        markDown
    }
}
