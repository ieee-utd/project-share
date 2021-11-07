import './App.css';
import NavBar from './Components/NavBar';
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
        <Route path='' element={<NavBar />} />
        <Route path='login' element={<SignInSide />} />
      </Routes>
    </Router>
  );
}

export default App;