import * as fs from 'fs'
import { CardPostI } from '../components/lv_3/CardPost/CardPost'
import jsonFile from '../routes/json_files'

export const getPostByTags = (tag: string): CardPostI[] => {
    const postUrl = jsonFile().post
    const data = fs.readFileSync(postUrl, {
        encoding: 'utf-8'
    })

    const listPost = <CardPostI[]>JSON.parse(data)

    const post = listPost.filter((e) => {
        return e.tags.includes(tag)
    })

    return post
}
