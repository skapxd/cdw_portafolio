// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { CardPostI } from '../../../components/lv_3/CardPost/CardPost'
import jsonFile from '../../../routes/json_files'

type Data = {
    success: boolean
    error?: string
    data?: any
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const queryPost = req.query.posts
  const postUrl = jsonFile().post

  const data = fs.readFileSync(postUrl, {
    encoding: 'utf-8'
  })

  if (!data) {
    return res.status(400).json({
      success: false,
      error: 'Error to load data file'
    })
  }
  const posts = <CardPostI[]>JSON.parse(data)

  const post = posts.filter((e) => {
    return e.urlPost === queryPost
  })

  if (post.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Post not found'
    })
  }

  res.status(200).json({ success: true, data: post[0] })
}
