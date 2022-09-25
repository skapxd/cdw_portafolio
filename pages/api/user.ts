import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { runMiddleware } from '#/utils/runMiddleware'

interface User {
  ig: string;
  age: number;
  name: string;
  address: string;
}
const cors = Cors({
  methods: ['GET']
})

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  // await runMiddleware(req, res, cors)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  return res.json({
    age: 23,
    name: 'Manuel',
    address: 'Envigado',
    ig: 'fegge_'
  })
}
