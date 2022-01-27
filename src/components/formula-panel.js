import "./formula-panel.css";
import Form from 'react-bootstrap/Form';

const FormulaPanel = (props) => {
    return (
    <div className="formulaPanel">
        <div>
            <p>This is a small customizable formula I created to help figure out how two opponents would stack up against each other in battle. </p>
        </div>
        <div className="formula">
            <img src="/formula.PNG" alt="Formula"></img>
        </div>
        <div className="defenseDivisor">
            <p>Defense Divisor:</p>
            <input className="form-control" type="text" placeholder=""/><br/>
        </div>
        <div className="results">
            <p> Winner: </p>
            <Form.Group className="textarea" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={4} disabled />
            </Form.Group>
        </div>
    </div>
    );
}

export default FormulaPanel;