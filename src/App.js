import './App.css';
import { Route, Switch } from 'react-router-dom';
import List from './components/List'
import Description from './components/Description';
function App() {
  return (<div className="App">
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/description/:id" component={Description} />
    </Switch>
  </div>);
}
export default App;
