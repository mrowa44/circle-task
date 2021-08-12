import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';
import CreateEventPage from './pages/CreateEventPage';
import EditEventPage from './pages/EditEventPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={CreateEventPage} />
        <Route path="/edit/:id" component={EditEventPage} />
        <Route exact path="/" component={CreateEventPage} />
      </Switch>
    </Router>
  );
}

export default App;
