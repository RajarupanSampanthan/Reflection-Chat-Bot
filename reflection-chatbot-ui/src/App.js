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
        <div className="App">
          <header className="App-header">
            
          </header>
          <ConsentForm show={this.state.showConsentForm} handleClose={this.closeConsentForm} />
          <ChatPanel />
        </div>
      </Provider>
    );
  }
}

export default App;
