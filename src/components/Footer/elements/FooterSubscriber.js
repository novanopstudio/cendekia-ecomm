import React from 'react';
import { Form, Input, Button } from "antd";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = () => {
    return (
        <div>
            <Form name="basic" className="footer-subscribe__form">
                <Form.Item noStyle={true} name="email">
                    <Input placeholder="ENTER YOUR EMAIL ADDRESS" />
                </Form.Item>
                <Form.Item noStyle={true}>
                    <Button type="link" htmlType="submit">
                        SUBSCRIBE
                    </Button>
                </Form.Item>
            </Form>
            <br />
        </div>
    );
}

const FooterSubscriber = ({ url }) => {
    return (
        <MailchimpSubscribe
            url={url}
            render={() => (
                <CustomForm />
            )}
        />
    )
}

export default FooterSubscriber
