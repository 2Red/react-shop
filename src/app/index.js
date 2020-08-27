import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
    render() {
        let appName = "Hai con mèo";
        return (
            <div>
                <Header appName={appName} />
                <Main/>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));