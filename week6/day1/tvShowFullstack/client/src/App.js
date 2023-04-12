import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CreateShow from './components/CreateShow';
import OneShow from './components/OneShow';

function App() {
  const [tvShowList, setTvShowList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to our TV Show app</h1>
        <Link to={'/createShow/form'}>Add your favorite show</Link>
        <br />
        <Link to={'/'}>Home</Link>
        <Routes>
          <Route path='/' element={<Display tvShowList={tvShowList} setTvShowList={setTvShowList}/>}/>
          <Route path='/createShow/form' element={<CreateShow/>}/> 
          <Route path='/viewShow/:id' element={<OneShow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
