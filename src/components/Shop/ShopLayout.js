import React from 'react';
import { Row, Col } from 'antd';

import ShopSidebar from './ShopSidebar';
import ShopContent from './ShopContent';
import Container from '../Base/Container';

const ShopLayout = ({
    containerType,
    fiveColumn,
    shopSidebarResponsive,
    shopContentResponsive,
    productResponsive,
    productPerPage,
    data,
}) => {
    return (
        <div className="shop-layout">
            <Container type={containerType}>
                <Row>
                    <Col className="gutter-row" {...shopSidebarResponsive}>
                        <ShopSidebar />
                    </Col>
                    <Col className="gutter-row" {...shopContentResponsive}>
                        <ShopContent
                            fiveColumn={fiveColumn}
                            productResponsive={productResponsive}
                            productPerPage={productPerPage}
                            data={data}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopLayout
