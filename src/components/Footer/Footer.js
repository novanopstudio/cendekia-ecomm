import React from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';

import Container from '../Base/Container';
import FooterSubscribe from './elements/FooterSubscriber';

const Footer = ({ containerType }) => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Container type={containerType}>
                    <Row justify="center" gutter={30}>
                        <Col className="gutter-row" span="24" sm={12} lg={8}>
                            <div className="footer-top-item -col-one">
                                <Link href="#">
                                    <a>
                                        <img src="/assets/images/cendekiaOrgSm.png" alt="logo" />
                                    </a>
                                </Link>
                                <p>Citra Indah City Bogor, Indonesia</p>
                                <ul>
                                    <li>halo@novanop.com</li>
                                    <li>+62 896 8311 6161</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="gutter-row" span="24" sm={12} lg={8}>
                            <div className="footer-top-item -col-two">
                                <Row gutter={30}>
                                    <Col className="gutter-row" span={12}>
                                        <h5 className="footer-title">Delivery</h5>
                                        <ul>
                                            <li>Cost of Delivery</li>
                                            <li>Payment Method</li>
                                            <li>Delivery Areas</li>
                                            <li>Complaints and returns</li>
                                        </ul>
                                    </Col>
                                    <Col className="gutter-row" span={12}>
                                        <h5 className="footer-title">Information</h5>
                                        <ul>
                                            <li>Help</li>
                                            <li>FAQ</li>
                                            <li>Regulations</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="gutter-row" span="24" sm={18} lg={8}>
                            <div className="footer-top-item -col-three">
                                <h5 className="footer-title">Subscribe to our Newsletter</h5>
                                <p>
                                    Subscribe to our newsletter and get 10% off your first purchase
                                </p>
                                <FooterSubscribe url="https://novanop.com" />
                                <img src="/assets/images/footer/payment.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container type={containerType}>
                    <p>Copyright © 2021 <a href="https://novanop.com" target="_blank">NOVANOP</a>. All rights reserved</p>
                </Container>
            </div>
        </div>
    )
}

export default Footer
