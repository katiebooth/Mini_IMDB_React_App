import FilmsList from "../components/FilmsList"
import { useState } from "react"

const FilmsContainer = () => {
    const films =
        [
        {
            id: 1,
            title: "Spider-Man: Into the Spider-Verse",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id: 2,
            title: "Life Itself",
            url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
            id: 3,
            title: "Mary Queen of Scots",
            url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
            id: 4,
            title: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
            id: 5,
            title: "Captain Marvel",
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    return <FilmsList films={films}/>
}

export default FilmsContainer