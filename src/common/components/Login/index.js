import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import { checkAuth, setCookies } from './../../utils'
import 'antd/dist/antd.css';
import WrappedNormalLoginForm from './loginform'
import URL from './../../../tbs/root'
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
            isLoggedIn: checkAuth()
        }, () => {
            if (this.state.isLoggedIn) {
                window.location.href = `${'http://localhost:3000'}/${this.props.page}`
            }
            return null
        })
        document.title = `${this.state.openedTab} | TBS Planet`
    }
    componentDidMount () {
    }
    callback = (res) => {
        console.log(res)
        if (res.remember && res.userName) {
            setCookies(`${res.userName}_true`, 'permission')
            setCookies(res.userName, 'username')
            window.location.href = `${'http://localhost:3000'}/${this.props.page}`
        }
        return null
    } 
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
Login.propTypes = {
    page: PropTypes.string,
    login: PropTypes.bool
}
Login.defaultProps = {
    login: false
}
export default Login