import './App.css';
// import axios from 'axios';
import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Nav from './components/Nav';
import Display from './components/Display';
import CreateShow from './components/CreateShow';
import EditShow from './components/EditShow';
import OneShow from './components/OneShow';

function App() {
  const [tvShowList, setTvShowList] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/allShows')
  //     .then((response) => {
  //       console.log(response);
  //       setTvShowList(response.data.shows)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={ <Display tvShowList={tvShowList} setTvShowList={setTvShowList}/> }/> 
          <Route path='/createShow/form' element={<CreateShow tvShowList={tvShowList} setTvShowList={setTvShowList}/>}/>
          <Route path='/editShow/form/:id' element={<EditShow/>}/>
          <Route path='/oneShow/:id' element={<OneShow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
