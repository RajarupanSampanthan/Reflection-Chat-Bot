import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import ConsentForm from './components/dialogues/ConsentForm';
import ChatPanel from './components/chat/ChatPanel';

import store from './store';
import ValueSelection from './components/valueSelection/ValueSelection';

class App extends Component {
  state = {
    showConsentForm: true,
    showValueSelect: true
  };

  closeConsentForm = () => {
    this.setState({ showConsentForm: false });
  };

  exitValueSelect = () => {
    this.setState({ showValueSelect: false });
  };

  render() {
    let content;
    if (this.state.showValueSelect===false) {
      content = <ChatPanel />;
    }
    else {
      content = <ValueSelection exitValueSelect={this.exitValueSelect} />;
    }
    return (
      <Provider store={store}>
        <div>
          <header className="App-header">
            <h2>Reflect Chatbot ECE496 2019 - 2020</h2>
          </header>
          <ConsentForm show={this.state.showConsentForm} handleClose={this.closeConsentForm} />
          {content}
        </div>
      </Provider>
    );
  }
}

export default App;
