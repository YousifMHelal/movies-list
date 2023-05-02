import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Col lg="3" md='4' sm='6' className='mt-3'>
            <Link to={`/movie/${movie.id}`}>
                <div className='card'>
                    <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt="poster"></img>
                </div>
            </Link>
        </Col>
    );
}

export default MovieCard;