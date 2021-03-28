import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Main from './components/Main';
import Blog from './components/Blog';
import './components/Navbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <About />
      <Blog />
      <Footer />
      <Switch>
         <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
