import "./stats-input.css";

const StatsInput = () => {
    return <div className="statsInput">
        <form>
            <label>Health: </label>
            <input type="text" id="health" name="health"/><br/>
            <label>Strength: </label>
            <input type="text" id="health" name="health"/><br/>
            <label>Attack Speed: </label>
            <input type="text" id="health" name="health"/><br/>
            <label>Defense: </label>
            <input type="text" id="health" name="health"/><br/>
            <label>Accuracy: </label>
            <input type="range" min=".01" max="1" value=".5"/><br/>
        </form>
    </div>;
}

export default StatsInput;