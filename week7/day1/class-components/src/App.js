import './App.css';
import React, {Component} from 'react'
import PlayerForm from './components/PlayerForm';


class App extends Component{

  // ! state will go here 
  state = {
    players: [
      {name:'Kevin Durant', position:'Small Forward'}, 
      {name:'Kyrie Irving', position:'Guard'}
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Hello class component</h1>
        <PlayerForm/>
        {
          this.state.players.map((player, idx) => (
            <div key={idx}>
              <p>Name: {player.name}</p>
              <p>Position: {player.position}</p>
            </div>
          ))
        }
      </div>
    );

  }
}

export default App;
