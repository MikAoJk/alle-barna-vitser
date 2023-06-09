// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import path from 'path';
import {promises as fs} from 'fs';

export type Joke = {
    text: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Joke>>
) {
        const jsonDirectory = path.join(process.cwd(), 'public');
        const json = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

        const jokes: Array<Joke> = JSON.parse(json);

        res.status(200).json(jokes);
}
