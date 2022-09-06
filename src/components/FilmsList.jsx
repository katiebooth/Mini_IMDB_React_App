import Film from "./Film";

const FilmsList = ({films}) => {
    const filmComponents = films.map(film => {
        return <Film url={film.url} key={film.id} title={film.title}/>
    })
    return (
    <ul>
        {filmComponents}
    </ul>
    )
}

export default FilmsList