import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Word from './components/Word';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Routing in React with react-router-dom! Dont forget to npm react-router-dom to get started</h1>
      {/* Link === anchor tag */}
      {/* <a href=""></a> */}
      <BrowserRouter>
        <Link to={'/home'}>Home</Link>
        <br />
        <Link to={'/about'}>About</Link>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/word/:color/:id' element={<Word/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
