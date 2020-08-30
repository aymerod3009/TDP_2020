import React from 'react';
import "../styles/styles.scss"
import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import home from '../pages/home';
import Protected from '../router/Protected';
import clinics from '../pages/clinics';
import clinic from '../pages/clinic';
import admincli from '../pages/admincli';
import contac from '../pages/contac';
import notify from '../pages/notify';
import patient from '../pages/patient';
import Public from '../router/Public';
import login from '../pages/login';
import page404 from '../pages/page404';
//import Header from '../organisms/Header';

const App = () => (
     <Router> 


        <Switch>
            <Protected path="/" exact component={home}/>
            <Protected path="/clinicas" exact component={clinics}/>
            <Protected path="/clinica/:id" component={clinic}/>
            <Protected path="/adminclinic" exact component={admincli}/>
            <Protected path="/contactenos" exact component={contac}/>
            <Protected path="/notificaciones" exact component={notify}/>
            <Protected path="/pacientes" exact component={patient}/>


            <Public path="/login" exact component={login}/>
           
            <Route component={page404}/>
        </Switch>

     </Router> 
)

export default App;
