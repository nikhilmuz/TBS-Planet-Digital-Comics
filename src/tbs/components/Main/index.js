import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from 'react-router-auth';
import { Login } from '../../../common/components';
import { LandingPage, Comic, PageNotFound } from './../../containers'
import { checkAuth } from '../../../common/utils';

const LoginComponent = () => {
    return <Login page='dashboard' />
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggedIn: checkAuth()
        }
    }
    render () {
        return (
           <Switch>
                <Route path='/' exact render={LoginComponent} />
                <AuthRoute authenticated={this.state.isloggedIn} redirectTo='/' path='/dashboard' component={LandingPage} />
                <AuthRoute authenticated={this.state.isloggedIn} redirectTo='/' path='/comic' component={Comic} />
                <AuthRoute authenticated={this.state.isloggedIn} redirectTo='/' path='*' component={PageNotFound} />
           </Switch>
        )
    }
}
export default Main