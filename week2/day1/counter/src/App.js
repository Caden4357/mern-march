import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  //     Getter  Setter
  const [count, setCount] = useState(10)
  const [title, setTitle] = useState('Title')

  const increaseCount = () => {
    setCount(count+1)
    // setCount(count+1)
    // setCount(unicorn => unicorn+1)
    // console.log(count);
    // setCount(prevState => prevState+1)
    console.log(count);
  }

  return (
    <div className="App">
      {/* <Alert/> */}
      <h2>Using the useState hook</h2>
      <h2>The title is: {title}</h2>
      <button onClick={() => setTitle('100')}>Change the title</button>
      <h3>The current count is: {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default App;
