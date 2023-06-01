import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
        <MainNavigation />
        <main>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/places/new" element={<NewPlace />} />
                <Route path="*" element={<Navigate to="/" replace />} /> {/*It'll redirect to this if any other link is entered.*/}
            </Routes>
        </main>
    </Router>
  );
}

export default App;
