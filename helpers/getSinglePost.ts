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
    console.log(id)
    let result = await readMarkdown(`public/post/md/${id}.md`)
    const metaData = result.meta
    const markDown = result.content
    return {
        metaData,
        markDown,
        success: true
    }
}
