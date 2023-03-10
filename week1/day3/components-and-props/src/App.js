import './App.css';
import Nav from './components/Nav';
import Shows from './components/Shows';


// ! In React, components are defined as functions that take in props (input) and return a description of the UI (output)


function App(props) {
  return (
    <div className="App">
      <Nav name={'Matt'}/>
      <Shows title={'Breaking Bad'} releaseYear={'2008'}/>
      <Shows title={'Attack On Titan'} releaseYear={'2013'}/>
      <Shows title={'The Office'} releaseYear={'2005'}/>
      <Shows title={'Inuyahsha'} releaseYear={'1996'}/>
    </div>
  );
}

export default App;
