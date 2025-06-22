import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/react-router-redux-todo-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
