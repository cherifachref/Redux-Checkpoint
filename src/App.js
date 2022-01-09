import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Card01 from './component/Card';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:true}
  }

  render() {
    return (
      <div>
        {this.state.show && <Card01/>}
        <Button onClick={()=>this.setState({show:!this.state.show})}>SHOW/HIDE</Button>
        
      </div>
    )
  }
}


