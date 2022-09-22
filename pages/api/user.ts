import { NextApiRequest, NextApiResponse } from 'next'

interface User {
  age: number;
  name: string;
  address: string;
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  return {
    age: 23,
    name: 'Manuel',
    address: 'Envigado'
  }
}
