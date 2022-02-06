// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

function getHemmingway(){
  const oldManAndTheSea = fetch("./OldManAndTheSea.txt");

  oldManAndTheSea.then(res => console.log(res)).catch(e => console.error(e))
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    let result =  getHemmingway();

  res.status(200).json({ name: 'John Doe' })
}
