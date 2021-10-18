// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { CardPostI } from '../../../components/lv_3/CardPost/CardPost'
import { join } from 'path'

type Data = {
    success: boolean
    error?: string
    data?: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const queryPost = req.query.id

    const data = fs.readFileSync('public/tags.json', {
        encoding: 'utf-8'
    })

    if (!data) {
        return res.status(400).json({
            success: false,
            error: 'Error to load data file'
        })
    }

    const tags = <string[]>JSON.parse(data)

    const post = tags.filter((e) => {
        return e === queryPost
    })

    if (post.length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Post not found'
        })
    }

    res.status(200).json({ success: true, data: post })
}
