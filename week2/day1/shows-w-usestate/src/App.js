import './App.css';
import Shows from './components/Shows';

function App() {
  return (
    <div className="App">
      <h1>useState with props</h1>
      <Shows/>
      <Shows title={'Breaking Bad'} releaseYear={2008} sales={100}/>
      <Shows title={'Attack On Titan'} releaseYear={2013} sales={150}/>
      <Shows title={'The Office'} releaseYear={2005} sales={200}/>
      <Shows title={'Inuyahsha'} releaseYear={1996} sales={900}/>
    </div>
  );
}

export default App;
