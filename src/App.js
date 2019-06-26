import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import BodyComponents from './Components/BodyComponent.js'

class App extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="App">
                <Header/>
                    <BodyComponents/>
            </div>

        );
    }
}

export default App;
