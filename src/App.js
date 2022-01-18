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

function App() {
  const [team1Stats, setTeam1Stats] = useState({style: "", health : "", strength : "", attack_speed: "", defense : "", multiplier : "", base_rate : "", accuracy : "" });
  const [team2Stats, setTeam2Stats] = useState({style: "", health : "", strength : "", attack_speed: "", defense : "", multiplier : "", base_rate : "", accuracy : "" });

  const handleTeam1Stats = (styleV, healthV, strengthV, attack_speedV, defenseV, multiplierV, base_rateV, accuracyV) => {
    this.setTeam1Stats({style : styleV, health : healthV, strength : strengthV, attack_speed : attack_speedV, defense : defenseV, multiplier : multiplierV, base_rate : base_rateV, accuracy : accuracyV})
  }
  const handleTeam2Stats = (styleV, healthV, strengthV, attack_speedV, defenseV, multiplierV, base_rateV, accuracyV) => {
    this.setTeam2Stats({style : styleV, health : healthV, strength : strengthV, attack_speed : attack_speedV, defense : defenseV, multiplier : multiplierV, base_rate : base_rateV, accuracy : accuracyV})
  }

  return (
    <div className = "App">
        <Container>
          <Row>
            <Col>
              <FormulaPanel/>
            </Col>
            <Col> 
                <Team1 />
            </Col>
            <Col>
                <Team2/>
            </Col>
          </Row>
        </Container> 
    </div>
  );
}

export default App;
