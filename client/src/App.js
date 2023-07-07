import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect} from "react";
import Navbar from './components/Navbar/Navbar'
import AllRoute from './AllRoute'
import './App.css';
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/Questions";
import { fetchAllUsers } from "./actions/users";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
   <div className="App">
    <Router>
      <Navbar />
      <AllRoute />
      </Router>
    </div>
  );
}

export default App;