import React, { Component } from 'react'
import { Container } from 'reactstrap'
import WrappedNormalOtpForm from './../Components/otpform'
class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            openedTab: 'OTP'
        }
    }
    componentWillMount () {
        this.setState({
            isLoggedIn: false
        });
        document.title = `${this.state.openedTab} | TBS Planet`
    }
    componentDidMount () {
    }
    callback = (res) => {
        if (res.remember && res.userName) {
        }
        return null
    };
    render () {
        return (
            <section className="">
                <Container>
                    {
                        !this.state.isLoggedIn &&
                        <center>
                            <div className="login-widget">
                                <div className="login-inner">
                                    <WrappedNormalOtpForm callback={this.callback} />
                                </div>
                            </div>
                        </center>
                    }
                </Container>
            </section>
        )
    }
}
Otp.defaultProps = {
    login: false
};
export default Otp