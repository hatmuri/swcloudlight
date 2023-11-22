import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Recommend from './recommend';
import { MobileView } from 'react-device-detect';

function App() {
  return (
    <div className='App'>
      <MobileView>
        <Link to="recommend">Recommend</Link>
        <Routes>
        <Route path='recommend' element={<Recommend />} />
      </Routes>
      </MobileView>
    </div>
  );
}

export default App;
