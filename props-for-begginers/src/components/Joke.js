import React from "react"; // Imported React Library
import "../styles.css";
function Joke(props) {
  console.log(props);
  const isquestion = props.question;
  if (isquestion) {
    return (
      <div className="card">
        <div className="container">
          <h3 style={{fontWeight: 'normal'}}>
            {props.id} Question: {props.question}
          </h3>
          <hr />
          <h3>PunchLine: {props.punchLine}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="container">
        <h3>PunchLine:{props.punchLine}</h3>
      </div>
    </div>
  );
}
export default Joke;
