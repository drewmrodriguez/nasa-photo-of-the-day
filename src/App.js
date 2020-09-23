import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=7Jgd7Ewd6gZ3UK0bg32Fsu4E2XuefbrUPMv03teN')
    .then(response => {
      setData(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
