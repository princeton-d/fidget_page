import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './routes/Home';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;