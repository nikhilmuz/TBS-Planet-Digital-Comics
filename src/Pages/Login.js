import React, { Component } from 'react'
import { Container } from 'reactstrap'
import WrappedNormalLoginForm from './../Components/loginform'
import axios from 'axios'
import {API_ROOT} from "../Config";

const LOGIN_API = 'users/login/';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openedTab: 'Login'
        }
    }
    componentWillMount () {
        document.title = `${this.state.openedTab} | TBS Planet`
    }
    componentDidMount () {
    }
    callback = (res) => {
        let username = res.username;
        let password = res.password;
        axios
            .post(
                API_ROOT+LOGIN_API,
                {
                    username: username,
                    password: password,
                }
            )
            .then(
                response =>
                {
                    console.log(response.data);
                    localStorage.setItem('Token', response.data.token );
                    if(response.data.verified){
                        window.location.href = '/dashboard';
                    }
                    else {
                        window.location.href = '/otp';
                    }
                }
            )
            .catch(
                error =>
                {
                    alert('Incorrect password or internet disconnected');
                }
            );
        return null
    };
    render () {
        return (
            <section className="">
                <Container>
                        <center>
                            <div className="login-widget">
                                <div className="login-inner">
                                    <WrappedNormalLoginForm callback={this.callback} />
                                </div>
                            </div>
                        </center>
                </Container>
            </section>
        )
    }
}
export default Login