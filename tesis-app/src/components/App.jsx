import React from 'react';
import "../styles/styles.scss"
import {BrowserRouter as Router ,  Switch} from "react-router-dom"
import home from '../pages/home';
import Protected from '../router/Protected';

const App = () => (
    <Router>
        <Switch>
            <Protected path="/" exact component={home}/>
       
        </Switch>
    </Router>
)

export default App;
