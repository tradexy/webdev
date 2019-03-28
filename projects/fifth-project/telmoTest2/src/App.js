//always need to have below for react
import React, { Component } from 'react';
//below is to enable using different tabs - with react-router-dom download ----
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';

import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import ActressContainer from './components/actressContainer';
import FilmsContainer from './components/filmsContainer';

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
                    <Route path="/actors/" render={() => <ActorsContainer title="Best Actors" />} />
                    <Route path="/actress/" render={() => <ActressContainer title="Best Actress" />} />
                    <Route path="/films/" render={() => <FilmsContainer title="Best Films" />} />
                </div>
            </BrowserRouter>
        );
  }
}

export default App;
