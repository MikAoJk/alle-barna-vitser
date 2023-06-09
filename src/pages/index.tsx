import Head from 'next/head'
import {NextPage} from "next";
import JokeGenerator from "@/components/JokeGenerator/JokeGenerator";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Joke Generator</title>
                <meta name="description" content="Joke generator app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <JokeGenerator/>
            </main>
        </div>
    )
}
export default Home
