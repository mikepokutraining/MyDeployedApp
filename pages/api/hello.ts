/*

.ts and .tsx are Typescript-adhering files.

Here we create simply a rest service.
I assume some of the constructs used are from Typescript.

*/

import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
   res.status(200).json({ text: 'Welcome to TutorialsPoint' })
}