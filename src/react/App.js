import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

import StartLesson from "../react/pages/StartLesson.page";

// components
import Start from "./pages/Start.page";
import ShareWindow from './pages/ShareWindow.page';

import { channels } from '../shared/constants';
const { ipcRenderer } = window; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route path="/gm" component={StartLesson}/>
          <Route path="/mt"  component={StartLesson}/>
          <Route path="/z"  component={StartLesson}/>
          <Route path="/sharewindow" component={ShareWindow}/>
        </Switch>
      </div>
    );
  }
}

export default App;
