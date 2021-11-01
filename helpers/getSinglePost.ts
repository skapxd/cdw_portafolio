import { CardPostI } from '../components/lv_3/CardPost/CardPost'
import jsonFile from '../routes/json_files'
const { readMarkdown } = require('node-md-meta-cataloger')
interface ReturnGetSinglePostI {
    metaData?: CardPostI
    markDown?: string
    success?: boolean
}
export const getSinglePost = async (
    id: string
): Promise<ReturnGetSinglePostI> => {
    try {
        let result = await readMarkdown(`public/post/md/${id}.md`)
        const metaData = result.meta
        const markDown = result.content
        return {
            metaData,
            markDown,
            success: true
        }
    } catch (error) {
        return {
            success: false
        }
    }

    // const getMetadata = () => {
    //     const postUrl = jsonFile().post
    //     const data = fs.readFileSync(postUrl, {
    //         encoding: 'utf-8'
    //     })
    //     const posts = <CardPostI[]>JSON.parse(data)
    //     const post = posts.filter((e) => {
    //         return e.urlPost === id
    //     })
    //     if (post.length === 0) throw new Error("Post don't exist")
    //     return post[0]
    // }

    // const getMarkDown = (post: CardPostI) => {
    //     const markDown = fs.readFileSync(urlMarkDown, {
    //         encoding: 'utf-8'
    //     })
    //     console.log(result)
    //     return markDown
    // }

    // const metaData = getMetadata()
    // const markDown = getMarkDown(metaData)
}
