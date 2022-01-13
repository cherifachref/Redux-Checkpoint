import React from 'react'
import { Button,Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import{Link} from 'react-router-dom'

function MovieCard({id,title,rate,description,posterUrl}) {
    console.log(id)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={posterUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>
                        <Rating allowHover={false} initialValue={rate} />
                </Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Link to={`${id}`}><Button style={{backgroundColor:'red'}}>Movie details</Button></Link>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default MovieCard
