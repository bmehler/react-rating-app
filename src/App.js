import React from 'react'
import { Navigation } from './templates/helper/Navigation';
import { ShowRating } from './components/ShowRating';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListEmployees } from './components/ListEmployees';
import { CreateEmployee } from './components/CreateEmployee';
import { EditEmployee } from './components/EditEmployee';

const App = () => { 
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ListEmployees />}></Route>
          <Route path="/detail/:id" element={<ShowRating />}></Route>
          <Route path="/create" element={<CreateEmployee />}></Route>
          <Route path="/edit/:id" element={<EditEmployee />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;