import React from 'react'
import { Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;

class NormalRegisterForm extends React.Component {
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
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('firstName', {
                        rules: [{ required: true, message: 'Please input your First Name!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="First Name" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('lastName')(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="Last Name" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'This field is required!' }],
                    })(
                        <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="Registered Phone Number" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'This field is required!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="E-Mail Address" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('cnfpassword', {
                        rules: [{ required: true, message: 'This Field is required!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password" placeholder="Confirm Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                </FormItem>
                <p><a href="/">Login</a> instead</p>
            </Form>
        );
    }
}

const WrappedNormalRegisterForm = Form.create()(NormalRegisterForm);

export default WrappedNormalRegisterForm