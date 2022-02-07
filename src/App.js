import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Users from './Users';
import AnUser from './AnUser';

import styled from 'styled-components';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Title>Test App</Title>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/AnUser/:id' element={<AnUser />} />
      </Routes>
    </Router>
  );
}

export default App;
