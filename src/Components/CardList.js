import React from 'react'
import Card from './Card'
import { Row, Container } from 'react-bootstrap'
import Paginat  from './Paginat'

const CardList = ({ movie, select, pages}) => {
    return (
        <div>
            <Container>
                <Row className='text-center'>
                    {
                        movie.length ? (
                            movie.map((item) => {
                                return (
                                    <Card key={item.id} movie = {item}/>
                                    )
                            })
                        ) : <h2>No Data</h2>
                    }
                    <Paginat select = {select} pages={pages}/>
                </Row>
            </Container>
        </div>
    )
}

export default CardList