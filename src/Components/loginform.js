import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.callback(values)
            }
        });
    }
    forgotPass = () => {
        console.log(`${URL}/forgotPassword`)
    }
    register = () => {
        console.log(`${URL}/register`)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {/*{getFieldDecorator('remember', {*/}
                        {/*valuePropName: 'checked',*/}
                        {/*initialValue: true,*/}
                    {/*})(*/}
                        {/*<Checkbox>Remember me</Checkbox>*/}
                    {/*)}*/}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <p>or <a href="/register">create</a> one</p>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm