import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'; 
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Net from './pages/Net';
import Design from './pages/Design';
import Justice from './pages/Justice';
import Reflection from './pages/Reflection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route export path='/menu' component={Menu}/>
        <Route export path='/about' component={About}/>
        <Route export path='/net' component={Net}/>
        <Route export path='/design' component={Design}/>
        <Route export path='/justice' component={Justice}/>
        <Route export path='/reflection' component={Reflection}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
