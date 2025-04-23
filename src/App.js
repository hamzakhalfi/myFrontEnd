
import TaskList from './TaskList/TaskList..jsx';
import UserForm from './TaskForm/TaskForm.jsx';
import Update from './Update/Update.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <>

<Router>
      <div>
        <nav style={{ padding: '1rem', background: '#eee' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>TaskList</Link>
          <Link to="/UserForm" style={{ marginRight: '1rem' }}> UserForm</Link>
          <Link to="/Update">Update</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/UserForm" element={<UserForm />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </div>
    </Router>




    </>
  );
};

export default App;




