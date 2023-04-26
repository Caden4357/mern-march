import './App.css';
import DisplayUsers from './components/DisplayUsers';
import Todos from './components/Todos';
import UserForm from './components/UserForm';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <UserProvider>
        <UserForm/>
        <DisplayUsers/>
        <Todos/>
      </UserProvider>
    </div>
  );
}

export default App;
