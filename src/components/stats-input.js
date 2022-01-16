import "./stats-input.css";

const StatsInput = () => {
    return <div className="statsInput">
        <form>
            <div className="form-group">
                <label>Health</label><br/>
                <input className="form-control" type="text" placeholder="Health"/><br/>
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
                <input className="form-control" type="number" name="amountInput" min="0" max="100" defaultValue="100" oninput="this.form.amountRange.value=this.value" />
            </div>
        </form>
    </div>;
}

export default StatsInput;