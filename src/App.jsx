import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './components/Pages/HomePage';
import ResumePage from './components/Pages/ResumePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
