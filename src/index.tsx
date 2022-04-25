import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

function App() {
    return (
        <div>
            <button className="button" type="button">
                Sample Button
            </button>
            <button className="button" type="button">
                Sample Button
            </button>
            <button className="button" type="button">
                Sample Button
            </button>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));
