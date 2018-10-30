import React, { Component } from 'react'
import { Container } from 'reactstrap'
import WrappedNormalLoginForm from './../Components/loginform'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            openedTab: 'Login'
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
                                    <WrappedNormalLoginForm callback={this.callback} />
                                </div>
                            </div>
                        </center>
                    }
                </Container>
            </section>
        )
    }
}
Login.defaultProps = {
    login: false
};
export default Login