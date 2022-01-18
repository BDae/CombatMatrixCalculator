import "./combatant.css";
import { useState } from "react";

const Team1 = () => {
    const [health, setHealth] = useState("");
    const [strength, setStrength] = useState("");
    const [attack_speed, setAttackSpeed] = useState("");
    const [defense, setDefense] = useState("");
    const [multiplier, setMultiplier] = useState("");
    const [base_rate, setBaseRate] = useState("");
    const [accuracy, setAccuracy] = useState("");

    const update = (value, field) => {
        //set vairables
        if (field === "health"){
            setHealth(value);
        }
        if (field === "strength"){
            setStrength(value);
        }
        if (field === "attack_speed"){
            setAttackSpeed(value);
        }
        if (field === "defense"){
            setDefense(value);
        }
        if (field === "multiplier"){
            setMultiplier(value);
        }
        if (field === "base_rate"){
            setBaseRate(value);
        }
        if (field === "accuracy"){
            setAccuracy(value);
        }

        if (health === "" || strength === "" || attack_speed === "" || defense === "" || multiplier === "" || base_rate === "" || accuracy === ""){
            return
        } else {
            //return data to parent component
            
        }
    }
    return (
        <div className="combatants">
            {/* Title */}
            <div className="combatantTitle"><h1><u>Combatant 1</u></h1></div>
            {/* Style Selection */}
            <div className="cc-selector">
                <input id="range" type="radio" name="credit-card" value="range" />
                <label className="drinkcard-cc range" htmlFor="range"></label>
                <input id="mage" type="radio" name="credit-card" value="mage" />
                <label className="drinkcard-cc mage" htmlFor="mage"></label>
                <input id="melee" type="radio" name="credit-card" value="melee" />
                <label className="drinkcard-cc melee" htmlFor="melee"></label>
                <input id="other" type="radio" name="credit-card" value="other" />
                <label className="drinkcard-cc other" htmlFor="other"></label>
            </div>
            {/* Inputs */}
            <div className="statsInput">
                <form>
                    <div className="form-group">
                        <label>Health</label><br/>
                        <input className="form-control" type="text" onChange={event => update(event.target.value, "health")} placeholder="Health"/><br/>
                        <label>Strength</label><br/>
                        <input className="form-control" type="text" placeholder="Strength"/><br/>
                        <label>Attack Speed</label><br/>
                        <input className="form-control" type="text" placeholder="Attack Speed"/><br/>
                        <label>Defense</label><br/>
                        <input className="form-control" type="text" placeholder="Defense"/><br/>
                        <label>Adv. Multiplier</label><br/>
                        <input className="form-control" type="text" placeholder="Adv. Multiplier"/><br/>
                        <label>Base Rate Damage</label><br/>
                        <input className="form-control" type="text" placeholder="Base Rate"/><br/>
                        <label>Accuracy</label><br/>
                        <input className="form-control" type="number" name="amountInput" min="0" max="100" defaultValue="100" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Team1;