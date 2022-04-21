import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss"
type Props = {}

const App = (props: Props) => {
  return (
    <div><button className="button">Here</button></div>
  )
}
ReactDOM.render(<App/>,document.getElementById("root"));