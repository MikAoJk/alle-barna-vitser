import styles from "./JokeGenerator.module.css";

import {useEffect, useState} from "react";
import {Joke} from "@/pages/api/jokes";

const JOKE_URL = `/api/jokes`;
const JokeGenerator = () => {

    const [jokes, setJokes] = useState([]);
    const [jokeData, setJokeData] = useState<Joke>();

    useEffect(() => {
        fetchData()
            .then((json) => {
                setJokes(json);
                setJokeData(
                    {
                        text: json[0].text
                    }
                )
            });
    }, []);


    function getRandomJoke(jokes: any[]) {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    function getNewJoke() {
        setJokeData(getRandomJoke(jokes));
    }


    return (
        <div className={styles.main}>
            <h1>Alle barna vitser</h1>
            {(jokeData?.text) &&
                <section>
                    <button onClick={getNewJoke}>Ny vits</button>
                    <h3>
                        {jokeData?.text}
                    </h3>
                </section>
            }
        </div>
    )
}

async function fetchData(): Promise<any> {

    if (process.env.NODE_ENV === 'production') {
        // Need this in production due to using next export, in GitHub pages
        // The API Routes are not supported using next export
        return fetch("https://mikaojk.github.io/alle-barna-vitser/data.json")
            .then((res) => res.json());
    } else {

        const response = await fetch(JOKE_URL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Httpstatus code is ${response.status}`);
        }

        return await response.json();
    }

}

export default JokeGenerator;