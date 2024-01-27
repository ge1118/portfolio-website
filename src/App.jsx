import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
