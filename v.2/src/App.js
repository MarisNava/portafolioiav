import Portafolio from "./Portafolio";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">    
         <Navbar/>
         <Switch>
            <Route exact path="/">
              <Portafolio />
            </Route>
            <Route path="/login">
                <Login />
            </Route>     
         </Switch>
    </div>
    </Router>
    
  );
}

export default App;
