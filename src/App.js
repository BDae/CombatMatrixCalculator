// import logo from './logo.svg';
import './App.css';
import FormulaPanel from './components/formula-panel';
import Blurb from './components/blurb';
import Formula from './components/formula';
import Results from './components/results';
import CombatantsPanel from './components/combatants-panel';
import CombatantStyle from './components/combat-style';
import StatsInput from './components/stats-input';
import CombatantOutput from './components/combatant-output';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CombatantTitle from './components/combatant-title';
import DefenseDivisor from './components/defense-divisor';

function App() {
  return (
    <div className = "App">
      <header/>
        <Container>
          <Row>
            <Col> 
              <FormulaPanel>
                <Blurb/>
                <Formula/>
                <DefenseDivisor/>
                <Results/>
              </FormulaPanel>
            </Col>
            <Col> 
              <CombatantsPanel>
                <CombatantTitle/>
                <CombatantStyle/>
                <StatsInput/>
                <CombatantOutput/>
              </CombatantsPanel>
            </Col>
            <Col> 
              <CombatantsPanel>
                <CombatantTitle/>
                <CombatantStyle/>
                <StatsInput/>
                <CombatantOutput/>
              </CombatantsPanel>
            </Col>
          </Row>
        </Container>  
    </div>
  );
}

export default App;
