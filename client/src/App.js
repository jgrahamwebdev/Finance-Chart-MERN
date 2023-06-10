
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen /> } />
        <Route path='/dashboard' element={<DashboardScreen /> } />
        <Route path='/login' element={<LoginScreen /> } />
        <Route path='/register' element={<RegisterScreen /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
