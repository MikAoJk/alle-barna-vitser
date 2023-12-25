import styles from "./JokeGenerator.module.css";

import {useEffect, useState} from "react";

export type Joke = {
    text: string
}

const JokeGenerator = () => {


    const jokes: Joke[] = [
        {
            "text": "Alle barna var skitne, unntatt Ada, for hun hadde bada"
        },
        {
            "text": "Alle barna spiste pent med kniv og gaffel, unntatt Andrea, hun brukte alltid skjea"
        },
        {
            "text": "Alle barna bandt fast hunden sin fint i en stolpe, unvtatt Aurora, for hun klippet av snora"
        },
        {
            "text": "Alle barna var redde for monsteret, unntatt Beate, for hun kunne karate"
        },
        {
            "text": "Alle barna brukte fyrstikker, unntatt Brage, han tente stearinlyset som en drage"
        },
        {
            "text": "Alle barna som i seng, unntatt Brede, han sov i rede"
        },
        {
            "text": "Alle barna klatret i trær, unntatt Carina, hun klatret i gardina"
        },
        {
            "text": "Alle barna er redde for spøkelser, unntatt Casper, han bare ler"
        },
        {
            "text": "Alle barna hadde rene, pene sko, unntatt Christian, hans var fulle av sand"
        },
        {
            "text": "Alle barna klippet neglene med saks, unntatt Dag, han brukte sag"
        },
        {
            "text": "Alle barna barna var for lave til å skifte lyspære i taket, unntatt Dina, hun brukte trampolina"
        },
        {
            "text": "Alle barna rapte etter maten, unntatt Didrik, han nøyet seg med et hikk"
        },
        {
            "text": "Alle barna fisket laks og ørret og torsk, unntatt Eirik, han fikk bare sik"
        },
        {
            "text": "Alle barna spiste pent, unntatt Elisa, hun bare grisa"
        },
        {
            "text": "Alle barna satt i ro, unntatt Ellen, hun var den propellen"
        },
        {
            "text": "Alle barna fanget sommerfugler og biller, unntatt Ferdinand, han fanget en and"
        },
        {
            "text": "Alle barna kom sent til middag, unntatt Fredrik, han var så kvikk"
        },
        {
            "text": "Alle barna regnet nøye på kalkulatoren, unntatt Filippa, hun bare tippa"
        },
        {
            "text": "Alle barn satt i ro og kjedet seg, unntatt Gabriel, han var helt propell"
        },
        {
            "text": "Alle barna sov i senger, unntatt Geir, han gjorde som fuglene og bygde seg et reir"
        },
        {
            "text": "Alle barna var rampete i blant, unntatt Gunnhild, hun var bare snill"
        },
        {
            "text": "Alle barna barna bommet med hammeren på spikerne, unntatt Hanna, hun brukte steikepanna"
        },
        {
            "text": "Alle barna likte sol og sommer, unntatt Hans, han tok en regndans"
        },
        {
            "text": "Alle barna gomlet godteri, unntatt Hege, for hun lekte hun var tannlege"
        },
        {
            "text": "Alle barna var på skole og i barnehage, unntatt Ida, hun hadde fri da"
        },
        {
            "text": "Alle barna gravde et lite hull i sandkassen, unntatt Ina, hun gravde seg til Kina"
        },
        {
            "text": "Alle barna spise to pannekaker, unntatt Ingrid, hun spiste ti"
        },
        {
            "text": "Alle barna likte brus best, unntatt Jan, han drakk helst tran"
        },
        {
            "text": "Alle barna var musestille, unntatt Jannike, hun hadde hikke"
        },
        {
            "text": "Alle barna drakk brus og fikk hull i tennene, unntatt Johan, han drakk vann"
        },
        {
            "text": "Alle barna fikk torsk og makrell på kroken, unntatt Kai, han fikk en hai"
        },
        {
            "text": "Alle barna klatret i trær, unntatt Karina, hun klatret i gardina"
        },
        {
            "text": "Alle barna satt stille rundt bordet, unntatt Kjell, han var helt propell"
        },
        {
            "text": "Alle barna var sultne, unntatt Lea/Leah, hun hadde spist elleve pølser på Ikea"
        },
        {
            "text": "Alle barna holdt seg tørre, unntatt Lene, hun dusjet i en fontene"
        },
        {
            "text": "Alle barna var redd for edderkopper, unntatt Line, hun syntes de var fine"
        },
        {
            "text": "Alle barna gikk forsiktig over den store søledammen, unntatt Mads, han tok sats..."
        },
        {
            "text": "Alle barna ønsket seg en bolle med gullfisk, unntatt Marie, hun ville ha et glass med en bie"
        },
        {
            "text": "Alle barna slappet av på sofaen, unntatt Martha, hun var i farta"
        },
        {
            "text": "Alle barna spilte tennis med racket, unntatt Nanna, hun brukte steikepanna"
        },
        {
            "text": "Alle barna sprang avgårde på joggesko, unntatt Nora, hun balanserte avgårde på de høyhælte skoene hun hadde \"lånt\" av mora"
        },
        {
            "text": "Alle barna fikk sei og torsk på kroken, unntatt Nicolai/, han fikk en hai"
        },
        {
            "text": "Alle barna siktet på blinken da de skjøt med pil og bue, unntatt Ola, han siktet på sola"
        },
        {
            "text": "Alle barna var redd for edderkopper, unntatt Oline, hun syntes de var så fine"
        },
        {
            "text": "Alle barna satt bløtkaken pent på bordet da de serverte, unntatt Oskar, han mistet den midt i fanget på far"
        },
        {
            "text": "Alle barna satt i ro, unntatt Peder, han var alle steder..."
        },
        {
            "text": "Alle barna ønsket seg en hundevalp, unntatt Pernille, hun ville ha en krokodille"
        },
        {
            "text": "Alle barna hadde en kusine, unntatt Petter, han hadde en fetter som spiste koteletter mens han flettet fletter"
        },
        {
            "text": "Alle barna ville ha pizza til middag, unntatt Ragnhild, hun ville ha sild"
        },
        {
            "text": "Alle barna ville bygge en trehytte, unntatt Rasmus, han ville bygge et helt hus"
        },
        {
            "text": "Alle barna var stille på biblioteket, unntatt Rikke, hun hadde hikke"
        },
        {
            "text": "Alle barna var redde for ville dyr, unntatt Sam, han hadde en gaupe som var tam"
        },
        {
            "text": "Alle ønsket seg en hundevalp, unntatt Sander, han ønsket seg en salamander"
        },
        {
            "text": "Alle barna sov i sengen, unntatt sofie, hun sov i hiet"
        },
        {
            "text": "Alle barna brukte fyrstikker da de skulle hjelpe til å tenne på lysene, unntatt Tage, han brukte en drage"
        },
        {
            "text": "Alle barna gikk tur med hunden, unntatt Teo, han gikk tur med løven Leo"
        },
        {
            "text": "Alle satt bløkaken forsiktig ned på bordet, unntatt Tobias, han glapp den rett oppi fanget til Elias"
        },
        {
            "text": "Alle barna hadde rene, hvite klær, unntatt Tor, han var full av jord"
        },
        {
            "text": "Alle barna snekret en bil, unntatt Ulrik, han lagde en hel trikk"
        },
        {
            "text": "Alle barna var helt stille på kinoen, unntatt Ulrikke, hun hadde fått hikke"
        },
        {
            "text": "Alle barna satt og gjespet, unntatt Unn, hun tok seg en blund"
        },
        {
            "text": "Alle barna hadde glemt noe viktig da de syklet avgårde, unntatt Vilhelm, han var kul og brukte hjelm"
        },
        {
            "text": "Alle barna satt bløtkaken forsiktig ned på bordet, unntatt Vincent, han mistet den rett i fanget til Kent"
        },
        {
            "text": "Alle barna helte vann i glassene da de serverte, unntatt Veronica, hun mista hele vannmugga i fanget til Monica"
        },
        {
            "text": "Alle barna hadde glemt noe viktig da de syklet avgårde, unntatt Wilhelm, han var kul og brukte hjelm"
        },
        {
            "text": "Alle barna var redde for løver, unntatt William, han hadde en diger løve som var tam"
        },
        {
            "text": "Alle barna syntes padda de hadde fanget var ekkel, unntatt Yasmin, hun syntes den var fin"
        },
        {
            "text": "Alle barna gikk forsiktig med malingsbøtta de skulle hjelpe til å bære, unntatt Yngar, han mistet den rett i fanget på far"
        },
        {
            "text": "Alle barna satt seg i den hvite sofaen, unntatt Øystein, han hadde lekt i gjørma og var ikke akkurat rein"
        },
        {
            "text": "Alle barna satt satt malingsboksen forsiktig ned på gulvet, unntatt Øyvind, han sølte den rett i fanget på Finn"
        },
        {
            "text": "Alle barna ville kjøre bil, unntatt Åge, han ville \"toge\""
        },
        {
            "text": "Alle satt på do i fred, unntatt Åse, hun glemte å låse"
        },
    ];


    const [jokeData, setJokeData] = useState<Joke>();


    useEffect(() => {
                setJokeData(
                    {
                        text: jokes[0].text
                    }
                )
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
                    <button className={styles.button} onClick={getNewJoke}>Ny vits</button>
                    <h3>
                        {jokeData?.text}
                    </h3>
                </section>
            }
        </div>
    )
}

export default JokeGenerator;
