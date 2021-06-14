import React from 'react';
import { Row, Col, Breadcrumb } from 'antd';

import Container from '../Base/Container';
import ProductDetailImage from './ProductDetailImage';
import ProductDetailContent from './ProductDetailContent';
import ProductDetailTab from './ProductDetailTab';

const ProductDetail = ({ data }) => {
    return (
        <div className="product-detail-one">
            <div className="product-detail-one-top">
                <Container>
                    <Breadcrumb className="product-detail-breadcrumb" separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Product</Breadcrumb.Item>
                        <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row gutter={70}>
                        <Col span={24} md={12}>
                            <ProductDetailImage imageData={data.images} />
                        </Col>
                        <Col span={24} md={12}>
                            <ProductDetailContent data={data} quantityControllerNoRound />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="product-detail-one-bottom">
                <ProductDetailTab />
            </div>
        </div>
    );
}

export default ProductDetail
