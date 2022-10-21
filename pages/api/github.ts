import { NextApiResponse } from 'next'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'

//Fetch github data
export default async function handler(
  req: NextApiRequestCookies,
  res: NextApiResponse
) {
  const username = process.env.GITHUB_USERNAME
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const data = await response.json()
  const repoCount = data.length
  return res.status(200).json({
    repoCount
  })
}
