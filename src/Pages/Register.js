import React, { Component } from 'react'
import { Container } from 'reactstrap'
import WrappedNormalRegisterForm from './../Components/registerform'
import axios from "axios";
import {API_ROOT} from "../Config";

const SIGNUP_API = 'users/register/';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openedTab: 'Register'
        }
    }
    componentWillMount () {
        document.title = `${this.state.openedTab} | TBS Planet`
    }
    componentDidMount () {
    }
    callback = (res) => {
        let fn = res.firstName;
        let ln = res.lastName;
        let ph = res.phone;
        let email = res.email;
        let pwd = res.password;
        let cnfpwd = res.cnfpassword;
        if(pwd===cnfpwd){
            axios
                .post(
                    API_ROOT+SIGNUP_API,
                    {
                        email: email,
                        first_name: fn,
                        last_name: ln,
                        phone: ph,
                        password: pwd,
                    }
                )
                .then(
                    response =>
                    {
                        window.location.href = '/otp';
                        localStorage.setItem('Token', response.data.token );
                        localStorage.setItem('short_name', response.data.short_name );
                        localStorage.setItem('full_name', response.data.short_name );
                        localStorage.setItem('email', response.data.email );
                    }
                )
                .catch(
                    error =>
                    {
                        if (error.response){
                            if(error.response.status===400){
                                alert(error.response.data[Object.keys(error.response.data)[0]])
                            }
                        }
                        else{
                            alert('Internet Disconnected')
                        }
                    }
                )
        }
        else {
            alert('Passwords doesn\'t match');
        }
        return null
    };
    render () {
        return (
            <section className="">
                <Container>
                        <center>
                            <div className="login-widget">
                                <div className="login-inner">
                                    <WrappedNormalRegisterForm callback={this.callback} />
                                </div>
                            </div>
                        </center>
                </Container>
            </section>
        )
    }
}
export default Register