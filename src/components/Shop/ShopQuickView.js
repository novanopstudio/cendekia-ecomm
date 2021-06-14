import React from 'react';
import { Row, Col } from 'antd';

import Container from '../Base/Container';
import ProductDetailImage from '../ProductDetail/ProductDetailImage';
import ProductDetailContent from '../ProductDetail/ProductDetailContent';

const ShopQuickView = ({ data, setModalVisible }) => {
    const onAddedToCart = () => {
        setModalVisible(false);
    }

    return (
        <div className="product-detail-one">
            <div className="product-detail-one-top">
                <Container>
                    <Row gutter={70}>
                        <Col span={24} md={12}>
                            <ProductDetailImage imageData={data.images} />
                        </Col>
                        <Col span={24} md={12}>
                            <ProductDetailContent
                                data={data}
                                quantityControllerNoRound
                                onAddedToCart={onAddedToCart}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ShopQuickView
