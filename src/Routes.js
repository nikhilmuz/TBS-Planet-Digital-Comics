import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthRoute } from 'react-router-auth';
import Landing from "./Pages/Landing";
import Header from './Components/Header'
import Login from "./Pages/Login";
import {PageNotFound} from "./Pages/404";
import Register from "./Pages/Register";
import Otp from "./Pages/Otp";

export default class Routes extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <div className='page'>
                        <div className="app-header">
                            <Header />
                        </div>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path='/register' component={Register} />
                            <Route path='/otp' component={Otp} />
                            <AuthRoute authenticated={true} redirectTo='/' path='/dashboard' component={Landing} />
                            <Route path='*' component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}