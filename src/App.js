// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormulaPanel from './components/formula-panel';
import Team1 from './components/team1';
import Team2 from './components/team2';
import { useState } from "react";
import React, { Component } from 'react'

function App(props) {
  const [results, setResults] = useState();
  const [defenseDivisor, setDefenseDivisor] = useState();
  const [team1Stats, setTeam1Stats] = useState({style: "", health : "", strength : "", attack_speed: "", defense : "", base_rate : "", accuracy : "" });
  const [team2Stats, setTeam2Stats] = useState({style: "", health : "", strength : "", attack_speed: "", defense : "", base_rate : "", accuracy : "" });
  
  function populateTeam1(values){
    setTeam1Stats({values})
  }
  function populateTeam2(values){
    setTeam2Stats({values})
  }
  function populateDefenseDivisor(values){
    setDefenseDivisor(values)
  }
  function httpPost() {
    // Send data to the backend via POST

    if(defenseDivisor !== null && team1Stats !== null && team2Stats !== null){

      var jsonData = {
        "defenseDivisor": defenseDivisor,
        "1":{team1Stats},
        "2":{team2Stats}
      }

      fetch('http://localhost:8080/Matchup', {  // Enter your IP address here
  
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
  
      }).then(
        response => setResults(response.json())
      )
    }
    console.log(results)
  }
  return (
    <div className = "App">
        <Container>
          <Row>
            <Col>
              <FormulaPanel triggerPopulateDefenseDivisor={populateDefenseDivisor}/>
            </Col>
            <Col> 
                <Team1 triggerPopulateTeam1={populateTeam1}/>
            </Col>
            <Col>
                <Team2 triggerPopulateTeam2={populateTeam2}/>
            </Col>
          </Row>
        </Container> 
    </div>
  );
}

export default App;
