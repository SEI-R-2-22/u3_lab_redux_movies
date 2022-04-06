import { useEffect } from "react"
import { GetMovies } from "../services/MovieService"

const MovieList = () => {
    

    useEffect(() => {
        GetMovies().then(console.log)

    },[])

    return <div>Hello Motha Fucka</div>
}

export default MovieList