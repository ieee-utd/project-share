import './App.css';
import Dashboard from './Pages/Dashboard';
import SignInSide from './Pages/LoginPg';
import { 
BrowserRouter as Router,
Routes,
Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='login' element={<SignInSide />} />
      </Routes>
    </Router>
  );
}

export default App;