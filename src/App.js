import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import CSGO from './CSGO';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <div>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/CSGO">
                <CSGO />
              </Route>
            </Switch>
          </div>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
