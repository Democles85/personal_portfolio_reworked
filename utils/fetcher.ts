/* eslint-disable import/no-anonymous-default-export */
export default async (...args: [any]) => {
  const res = await fetch(...args)
  return res.json()
}
