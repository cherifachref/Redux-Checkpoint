import React from 'react'
import { useParams } from 'react-router-dom'
import {moviesData} from '../Data'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'


function Moviedetails() {
    const {variable} = useParams()
    return (
        <div>
            <div><h1>{moviesData.find(el=>el.id==variable).title}</h1></div>
            <div>{moviesData.find(el=>el.id==variable).description}></div>
            <iframe width="820" height="415"
            src={moviesData.find(el=>el.id==variable).trailer}>
            </iframe>
            <div><Link to={'/'}><Button style={{backgroundColor:'red'}}>Go Home</Button></Link></div>
        </div>
    )
}

export default Moviedetails