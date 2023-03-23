import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [starWarsCharacters, setStarWarsCharacters] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        // console.log(`RESPONSE: ${response}`);
        console.log('RESPONSE');
        // console.log(response.data.results);
        setStarWarsCharacters(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <div className="App">
      <h1>Using the Star Wars API!</h1>
      <a href="https://swapi.dev/" target='_blank'>Click here to view the <b>swapi</b> documentation</a>
      {
        starWarsCharacters.map((character, idx) => (
          <div key={idx}>
            <h2>Name: {character.name}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
