import React from 'react';
import './App.css';
import CreateTodo from './containers/CreateTodo';
import Table from './containers/Table';

function App() {
  return (
    <div className="App">
    
    <div className="container" style={{marginTop:'80px'}}>
    <div>
      <h2 style={{textAlign:'center'}}>ADD YOUR TASKS</h2>
    </div>
    <div className='row'>
    <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
    <CreateTodo/>
    </div>
    <Table/>
    </div>
    </div>
    </div>
  );
}

export default App;
