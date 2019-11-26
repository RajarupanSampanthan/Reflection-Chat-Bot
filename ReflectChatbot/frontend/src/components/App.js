import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import ChatPanel from './chat/ChatPanel';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header />
                    <div className="container">
                        <ChatPanel />
                    </div>
                </React.Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));