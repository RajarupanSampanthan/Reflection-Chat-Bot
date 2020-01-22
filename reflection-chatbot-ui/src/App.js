import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import ConsentForm from './components/dialogues/ConsentForm';
import ChatPanel from './components/chat/ChatPanel';

import store from './store';

class App extends Component {
  state = {showConsentForm: true};

  closeConsentForm = () => {
    this.setState({ showConsentForm: false});
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <header className="App-header">
            <h2>Reflect Chatbot ECE496 2019 - 2020</h2>
          </header>
          <ConsentForm show={this.state.showConsentForm} handleClose={this.closeConsentForm} />
          <ChatPanel />
        </div>
      </Provider>
    );
  }
}

export default App;
