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
    if (process.env.NODE_ENV !== 'production') {
    const jsonDirectory = path.join(process.cwd(), 'src/json');
    const json = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    const quotes: Array<Joke> = JSON.parse(json);

    res.status(200).json(quotes);
    }
    else {
        const result = await fetch(`https://mikaojk.github.io/alle-barna-vitser/data.json`, {
            method: req.method
        })

        res.status(result.status).json(await result.json());
    }
}
