import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const MovieDetials = () => {

    const param = useParams();

    console.log(param.id)

    const [id, setId] = useState([])
    const movieId = async (page) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=987ad6fe44b4a35d5d0d5b616b840702&language=en-US
        `)
        setId(res.data)
    }

    useEffect(() => {
        movieId();
    },)

    return (
        <div>
            <Container>
                <Row>
                    <Col className='Background my-20' sm="10">
                        <Row>
                            <Col lg="3" md='4' sm='6' className='mt-3'>
                                <div className='card'>
                                    <img src={`https://image.tmdb.org/t/p/w500` + id.poster_path} alt="poster"></img>
                                </div>
                            </Col>
                            <Col sm="9">
                                <div className='d-flex flex-column my-5 mx-2'>
                                    <div className='d-flex align-item-center'>
                                        <h3>Movie Name:</h3>
                                        <p className='text-center fs-4 mx-3'>{id.original_title}</p>
                                    </div>
                                    <div className='d-flex align-item-center'>
                                        <h3>Release Date:</h3>
                                        <p className='text-center fs-4 mx-3'>{id.release_date}</p>
                                    </div>
                                    <div className='d-flex align-item-center'>
                                        <h3>Votes:</h3>
                                        <p className='text-center fs-4 mx-3'>{id.vote_count}</p>

                                    </div>
                                    <div className='d-flex align-item-center'>
                                        <h3> Rate:</h3>
                                        <p className='text-center fs-4 mx-3'>{id.vote_average}</p>
                                    </div>
                                    <div className='d-flex align-item-center'>
                                        <h3>Language:</h3>
                                        <p className='text-center fs-4 mx-3'>{id.original_language}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" className='my-3'>
                                <h2>The story:</h2>
                                <p>{id.overview}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='mt-3 d-flex justify-content-between' sm="12" md="10" lg="6">
                        <Link to="/">
                            <button className='bttn'>Back</button>
                        </Link>
                        <a href={id.homepage} target='_blank' rel="noreferrer">
                            <button className='bttn'>Home page</button>
                        </a>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default MovieDetials