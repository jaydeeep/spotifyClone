import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Playlist from './components/Playlist';
import Premium from "./components/Premium";
import Player from './components/Player';
import Error from "./components/Error";
function App() {
  return (
   <div className="app">
    <div className="app__body">
      <Switch>
      <Route path="/"exact  component={Home}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/playlist" component={Playlist}></Route>
      <Route path="/premium" component={Premium}></Route>
      <Route component={Error}></Route>
    </Switch>
    </div>

    <div className="app__player">
      <Player/>
    </div>
   <div className="app__footer">
    <Footer/>
    </div>
   </div>
  );
}

export default App;
