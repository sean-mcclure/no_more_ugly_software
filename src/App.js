import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <header className="App-header">
        <h3>NO MORE UGLY SOFTWARE</h3>
        <h5>Sean McClure</h5>
    </header>
    <div className="row">
      <div className="column">
      <h2>UGLY</h2>
      <p>Don't Do This</p>
    </div>
    <div className="column">
      <h2>PRETTY</h2>
      <p>Do This</p>
    </div>
    </div>
    <div className="row">
      <div className="column">
      <button className="my_button_ugly">BUTTON</button>
    </div>
    <div className="column">
      <button className="my_button_pretty">BUTTON</button>
    </div>
    </div>
    <div className="row">
      <div className="column">
      <input className="my_input_ugly" type="text" name="name" placeholder="input..."/>
      </div>
      <div className="column">
      <input className="my_input_pretty" type="text" name="name" placeholder="input..."/>
      </div>
    </div>
    </div>
    <div className="row">
      <div className="column">
      <select id = "my_dropdown_ugly">
    <option value="1">bananas</option>
    <option value="2">oranges</option>
    <option value="3">apples</option>
    <option value="4">pinapples</option>
</select>
      </div>
      <div className="column">
      <select id = "my_dropdown_pretty">
    <option value="1">bananas</option>
    <option value="2">oranges</option>
    <option value="3">apples</option>
    <option value="4">pinapples</option>
</select>
      </div>
    </div>


</React.Fragment>


  );
}

export default App;
