import "./combat-style.css";

const CombatStyle = () => {
    return <div className="combatStyle">
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
    </div>;
}

export default CombatStyle;