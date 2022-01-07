import React from 'react'
import {Card, Button } from 'react-bootstrap';

function Profile({fullName,bio,profession,children}) {
    return (
        <div style={{padding: '1em'}}>
            <Card style={{ width: '18rem',borderBottom: 'thick double #32a1ce' ,borderRadius: '15% 15%'}}>
                <Card.Img variant="top" src={children} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                <p>my fullName :{fullName}</p> 
                <p>my bio :{bio} </p>
                <p>my profession :{profession}</p>
                </Card.Text>
                <Button onClick={()=>{alert(`User Name : ${fullName}`)}} variant="primary">Go to {fullName} profile</Button>
                </Card.Body>
            </Card>

           
        </div>
    )
}

export default Profile

Profile.propTypes = {
    fullName: Profile.string,
    bio: Profile.string ,
    profession: Profile.string
  };

Profile.defaultProps={
    fullName :'EMPTY',bio:'EMPTY',profession:'EMPTY',children:'https://i.vimeocdn.com/portrait/1274237_300x300.jpg'
}
