import './App.css';
import Dashboard from './Pages/Dashboard';
import Quiz from './Pages/Quiz'
import Login from './Pages/Login';
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
        <Route path='quiz' element={<Quiz />} />
        <Route path='electronic-circuits' element={<Quiz />} />
        <Route path='data-structures' element={<Quiz />} />
        <Route path='linear-algebra' element={<Quiz />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;