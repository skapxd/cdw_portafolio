import * as fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
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
    const data = fs.readFileSync('public/most_seen.json', {
        encoding: 'utf-8'
    })

    if (!data) throw new Error('Data don´t exist')

    const mostSeen = <CardPostI[]>JSON.parse(data)

    return res.status(400).json({
        success: true,
        data: mostSeen
    })
}
