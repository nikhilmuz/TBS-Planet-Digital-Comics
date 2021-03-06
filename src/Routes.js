import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthRoute } from 'react-router-auth';
import Landing from "./Pages/Landing";
import Header from './Components/Header'
import Login from "./Pages/Login";
import {PageNotFound} from "./Pages/404";
import Register from "./Pages/Register";
import Otp from "./Pages/Otp";

localStorage.setItem('short_name','Guest');
const isLoggedIn = !(localStorage.getItem('short_name') == null || localStorage.getItem('short_name') === "");

export default class Routes extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <div className='page'>
                        <div className="app-header">
                            <Header isLoggedIn={isLoggedIn} />
                        </div>
                        <Switch>
                            <Route exact path='/' component={() => (<Login authenticated={isLoggedIn} />)} />
                            <Route path='/register' component={() => (<Register authenticated={isLoggedIn} />)} />
                            <AuthRoute authenticated={isLoggedIn} redirectTo='/' path='/otp' component={Otp} />
                            <AuthRoute authenticated={isLoggedIn} redirectTo='/' path='/dashboard' component={Landing} />
                            <Route path='*' component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}