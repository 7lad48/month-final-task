import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    return (
        <div className="App">
            <Counter startCountVal={0} endCountVal={5} countRange={1}/>
        </div>
    );
}

export default App;
