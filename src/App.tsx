import React from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Counter startCount={0} endCount={5} countRange={1}/>
            <Counter startCount={2} endCount={8} countRange={5}/>
        </div>
    );
}

export default App;
