import { Component } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import CalculatorPage from './components/pages/CalculatorPage';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import Quote from './components/pages/Quote';
import NotFound from './components/pages/NotFound';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
