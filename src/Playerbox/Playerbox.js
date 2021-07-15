import React from 'react';
import playerInfo from '../playerInfo.json'
import './Playerbox.css' 
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const Playerbox = () => {   
    return (
        <div class="full-box">
          
                 {
                playerInfo.map(data => ( 
                <div key={data.id}>
                    <div class="player-card">
                    <Card style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                        Current Club: {data.current_club}
                        <br></br>
                        Current Salary: ${data.salary}
                        </Card.Text>
                        <Button onClick={()=>  console.log(data.name)}  variant="primary">Purchase Player</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
       ))
     }
        </div>
    );
};

export default Playerbox;