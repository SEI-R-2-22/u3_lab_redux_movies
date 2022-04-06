import { POSTER_URL } from '../global'

const MovieCard = (props) => {
  return (
    <div>
      <img
        src={`${POSTER_URL}/${props.poster_path}`}
        alt="poster"
        style={{ width: '400px' }}
      />
      <h3>{props.title ? props.title : props.name}</h3>
    </div>
  )
}

export default MovieCard
