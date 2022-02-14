import AppRoute from '../routes/AppRoutes';
import './App.css';
import React from 'react';

function App(props) {
  return (
    <div className="App">
        <AppRoute props={props.history} />
    </div>
  );
}

export default App;
