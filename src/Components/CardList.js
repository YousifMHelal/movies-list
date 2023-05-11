import React from 'react'
import Card from './Card'
import { Row, Container } from 'react-bootstrap'
import Paginat from './Paginat'
import { useState } from 'react'
import { getAllMovies } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const CardList = () => {

    const [movies, setMovies] = useState([])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies())
    }, [])

    const data = useSelector((state) => state.movies);

    useEffect(() => {
        setMovies(data)
    }, [data])


    return (
        <div>
            <Container>
                <Row className='text-center'>
                    {
                        movies.length ? (
                            movies.map((item) => {
                                return (
                                    <Card key={item.id} movie={item} />
                                )
                            })
                        ) : <h2>No Data</h2>
                    }
                    <Paginat />
                </Row>
            </Container>
        </div>
    )
}

export default CardList