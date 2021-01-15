import React from 'react';
import Navbar from "./Components/Navbar";
import {Switch, Route} from "react-router-dom";
import Beranda from './Components/Beranda';
import Gallery from './Components/Gallery';
import HariBesar from './Components/HariBesar';

class App extends React.Component{
  render() {
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/HariBesar" component={HariBesar} />
        </Switch>
      </div>
    )
  }
}

export default App;