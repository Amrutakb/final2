import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/getcourse/User';
import Add from './components/addcourse/Add';
import Edit from './components/updatecourse/edit';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={< Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
