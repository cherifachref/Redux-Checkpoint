import React, { Component } from 'react'
import { Button,Card } from 'react-bootstrap';


export default class Card01 extends Component {
    constructor(props){
        super(props)
        this.state={fullName:'Achref Cherif',
                    bio:'biobio',
                    imgSrc:'./zelda.jpg',
                    profession:'Etudiantt',
                    counter:0
                    
    
        }
      }

      componentDidMount(){
          
          setInterval(()=>this.setState({...this.state,counter:this.state.counter+1}),1000)
      }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.imgSrc} />
                <Card.Body>
                    <Card.Title>Person</Card.Title>
                    <Card.Text>
                    <p>My name :{this.state.fullName}</p>
                    <p>My Bio :{this.state.bio}</p>
                    <p>My Profession :{this.state.profession}</p>

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                <div>Time :{this.state.counter}</div>
            </div>
        )
    }
}
