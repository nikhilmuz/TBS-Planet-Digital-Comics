import React from 'react'
import { Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;

class NormalOtpForm extends React.Component {
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
    register = () => {
        console.log(`${URL}/register`)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('otp', {
                        rules: [{ required: true, message: 'Please input OTP sent to your registered number!' }],
                    })(
                        <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="OTP" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Verify
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalOtpForm = Form.create()(NormalOtpForm);

export default WrappedNormalOtpForm