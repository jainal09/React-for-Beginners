import React from "react"; // Imported React Library
import Joke from "./components/Joke";
import jokesData from "./jokes";
const pStyle = {
  marginTop: '8em' //Inline Styling
};
function App() {
  const jokeComponents = jokesData.map(function(joke) {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });
  return (
    <div>
      <div className="header">
      <div className="heading">       
   <h1> 😂 -- Lame Jokes with Props -- 😜</h1>
      </div>
      </div>
      <div style={pStyle}>
      {jokeComponents}
      </div>
    </div>
  );
}

export default App; // Exported App
