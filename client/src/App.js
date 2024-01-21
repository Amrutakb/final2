import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/getcourse/User';
import Add from './components/addcourse/Add';
import Edit from './components/updatecourse/edit';
import GetSyllabus from './components/Syllabus/getsyllabus';
import EditSyllabus from './components/Syllabus/editsyllabus';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:semesterNumber/:courseCode" element={<Edit />} />
          <Route path="/syllabus" element={<GetSyllabus />} />
          <Route path="/editSyllabus/:semesterNumber/:courseCode" element={<EditSyllabus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
