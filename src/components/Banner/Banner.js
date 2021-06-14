import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'antd';

import Container from '../Base/Container';

const Banner = ({ containerType }) => {
    return (
        <div className="banners">
            <Container type={containerType}>
                <Row gutter={30}>
                    {Array.from({ length: 3 }, (item, index) => (
                        <Col key={index} className="gutter-row" span={24} sm={8}>
                            <Link href={process.env.PUBLIC_URL + "#"}>
                                <a className="banner-item">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/banners/${index + 1}.jpg`} alt="banner" />
                                </a>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Banner
