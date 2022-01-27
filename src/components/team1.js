import "./team1.css";
import { useState } from "react";

const Team1 = (props) => {
    const [style, setStyle] = useState("");
    const [health, setHealth] = useState("");
    const [strength, setStrength] = useState("");
    const [attack_speed, setAttackSpeed] = useState("");
    const [defense, setDefense] = useState("");
    const [base_rate, setBaseRate] = useState("");
    const [accuracy, setAccuracy] = useState("");

    const update = (value, field) => {
        //set vairables
        if (field === "style"){
            setStyle(value);
        }
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
        if (field === "base_rate"){
            setBaseRate(value);
        }
        if (field === "accuracy"){
            setAccuracy(value);
        }

        //return data to parent component
        if (style === "" || health === "" || strength === "" || attack_speed === "" || defense === "" || base_rate === "" || accuracy === ""){
        } else {
            props.triggerPopulateTeam1({
                "style": style,
                "health": health,
                "strength": strength,
                "attack_speed": attack_speed,
                "defense": defense,
                "base_rate": base_rate,
                "accuracy": accuracy
            })
        }
    }
    return (
        <div className="combatants">
            {/* Title */}
            <div className="combatantTitle"><h1><u>Combatant 1</u></h1></div>
            {/* Style Selection */}
            <div className="cc-selector">
                <input id="range" type="radio" onChange={event => update("RANGE", "style")} name="credit-card" value="range" />
                <label className="drinkcard-cc range" htmlFor="range"></label>
                <input id="mage" type="radio" onChange={event => update("MAGE", "style")} name="credit-card" value="mage" />
                <label className="drinkcard-cc mage" htmlFor="mage"></label>
                <input id="melee" type="radio" onChange={event => update("MELEE", "style")} name="credit-card" value="melee" />
                <label className="drinkcard-cc melee" htmlFor="melee"></label>
                <input id="other" type="radio" onChange={event => update("OTHER", "style")} name="credit-card" value="other" />
                <label className="drinkcard-cc other" htmlFor="other"></label>
            </div>
            {/* Inputs */}
            <div className="statsInput">
                <form>
                    <div className="form-group">
                        <label>Health</label><br/>
                        <input className="form-control" type="text" onChange={event => update(event.target.value, "health")} placeholder="Health"/><br/>
                        <label>Strength</label><br/>
                        <input className="form-control" type="text" onChange={event => update(event.target.value, "strength")} placeholder="Strength"/><br/>
                        <label>Attack Speed</label><br/>
                        <input className="form-control" type="text" onChange={event => update(event.target.value, "attack_speed")} placeholder="Attack Speed"/><br/>
                        <label>Defense</label><br/>
                        <input className="form-control" type="text" onChange={event => update(event.target.value, "defense")}  placeholder="Defense"/><br/>
                        <label>Base Rate Damage</label><br/>
                        <input className="form-control" type="text" onChange={event => update(event.target.value, "base_rate")}  placeholder="Base Rate"/><br/>
                        <label>Accuracy</label><br/>
                        <input className="form-control" type="number" onChange={event => update(event.target.value, "accuracy")}  name="amountInput" min="0" max="100" defaultValue="100" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Team1;