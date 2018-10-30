import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from "./Pages/Landing";
import Header from './Components/Header'

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
                            <Route exact path='/' component={Landing} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}