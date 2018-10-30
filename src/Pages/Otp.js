import React, { Component } from 'react'
import { Container } from 'reactstrap'
import WrappedNormalOtpForm from './../Components/otpform'
import axios from "axios";
import {API_ROOT} from "../Config";

const OTP_API = 'users/otp/verify/';

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openedTab: 'OTP'
        }
    }
    componentWillMount () {
        document.title = `${this.state.openedTab} | TBS Planet`
    }
    componentDidMount () {
    }
    callback = (res) => {
        let otp = res.otp;
        axios
            .post(
                API_ROOT+OTP_API,
                {
                    otp: otp,
                },
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('Token'),
                    }
                }
            )
            .then(
                response =>
                {
                    window.location.href = '/dashboard';
                }
            )
            .catch(
                error =>
                {
                    alert('Incorrect OTP or Internet Disconnected');
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
                                    <WrappedNormalOtpForm callback={this.callback} />
                                </div>
                            </div>
                        </center>
                </Container>
            </section>
        )
    }
}
export default Otp