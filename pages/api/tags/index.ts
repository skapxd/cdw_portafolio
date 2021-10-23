// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { CardPostI } from '../../../components/lv_3/CardPost/CardPost'

type Data = {
    success: boolean
    error?: string
    data?: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {


    const data = fs.readFileSync('public/tags.json', {encoding: 'utf-8'})

    const tags = <string[]>JSON.parse(data)

    return res.status(400).json({
        success:true,
        data: tags
    })
}