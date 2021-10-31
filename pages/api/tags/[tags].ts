import * as fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import { CardPostI } from '../../../components/lv_3/CardPost/CardPost'
import jsonFile from '../../../routes/json_files'

type Data = {
    success: boolean
    error?: string
    data?: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const queryPost = req.query.tags

    const postUrl = jsonFile().post

    const jsonPost = fs.readFileSync(postUrl, {
        encoding: 'utf-8'
    })

    if (!jsonPost) {
        return res.status(400).json({
            success: false,
            error: 'Error to load postTags file'
        })
    }

    const postList = <CardPostI[]>JSON.parse(jsonPost)

    const post = postList.filter((e) => {
        if (typeof queryPost === 'object') return

        return e.tags.includes(queryPost)
    })

    if (post.length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Post not found'
        })
    }

    res.status(200).json({ success: true, data: post })
}
