import "./combatant-output.css";
import Form from 'react-bootstrap/Form';

const CombatantOutput = () => {
    return <div className="combatantOutput">
    <Form.Group className="textarea" controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows={2} disabled />
    </Form.Group>
    </div>;
}

export default CombatantOutput;