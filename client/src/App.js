import './App.css';
import PirateMain from './views/PirateMain';
import PirateForm from './components/PirateForm';
import PirateOneShow from './views/PirateOneShow';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path= "/">
          <PirateMain />
          </Route>
        <Route exact path= "/pirates">
          <PirateMain />
        </Route>
        <Route exact path= "/pirate/new">
          <PirateForm />
        </Route>
        <Route exact path= "/pirate/:_id">
          <PirateOneShow />
        </Route>
      </Switch>
      </BrowserRouter>


    </div>
  )
  
}

export default App;
