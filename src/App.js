import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
