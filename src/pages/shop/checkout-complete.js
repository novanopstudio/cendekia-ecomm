import React from 'react';
import { Result, Button } from 'antd';
import Link from 'next/link';

import LayoutOne from "../../components/Layout/Layout";
import Container from "../../components/Base/Container";

const CheckoutComplete = () => {

    return (
        <LayoutOne title="Checkout completed">
            <Container>
                <div className="checkout-complete">
                    <Result
                        status="success"
                        title="Successfully Purchased"
                        subTitle="Check your email for order details"
                        extra={[
                            <Button key="console">
                                <Link href={process.env.PUBLIC_URL + "/"}>
                                    <a>Back to Home</a>
                                </Link>
                            </Button>
                        ]}
                    />
                </div>
            </Container>
        </LayoutOne>
    )
}

export default CheckoutComplete
