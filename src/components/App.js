import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Frontpage from './FrontPage';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route
        path="/frontpage"
        exact
        render={props => (
          <Frontpage {...props} data={userData} setData={setUserData} />
        )}
      />
    </Router>
  );
};

export default App;
