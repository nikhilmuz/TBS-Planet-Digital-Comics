import React, { Component } from 'react'
import { Container } from 'reactstrap'
import WrappedNormalRegisterForm from './../Components/registerform'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            openedTab: 'Register'
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
                                    <WrappedNormalRegisterForm callback={this.callback} />
                                </div>
                            </div>
                        </center>
                    }
                </Container>
            </section>
        )
    }
}
Register.defaultProps = {
    login: false
};
export default Register