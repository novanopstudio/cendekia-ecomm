import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Empty, Pagination } from 'antd';
import classNames from 'classnames';

import Product from '../Product/Product';
import { getProductsByFilter } from '../../common/shopUtils';

const ShopContentProduct = ({ fiveColumn, productPerPage, productResponsive, data }) => {
    const globalState = useSelector((state) => state.globalReducer);
    const shopState = useSelector((state) => state.shopReducer);

    const [currentData, setCurrentData] = useState();
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let filteredProduct = getProductsByFilter(
            [...data],
            shopState.sort,
            shopState.subCategory
        );
        setCurrentData(filteredProduct);
        setOffset(0);
    }, [shopState, data]);

    useEffect(() => {
        setPage(1);
    }, [globalState]);

    const itemRender = (current, type, originalElement) => {
        if (type === "prev") {
            return (
                <a>
                    <i className="fal fa-angle-left" />
                </a>
            );
        }
        if (type === "next") {
            return (
                <a>
                    <i className="fal fa-angle-right" />
                </a>
            );
        }
        return originalElement;
    };

    const onChangeOffset = (page, pageSize) => {
        let offset = (page - 1) * pageSize;
        setPage(page);
        setOffset(offset);
    };

    return (
        <div className="shop-content__product">
            {!currentData ? (
                <Empty description="No products in this category" />
            ) : (
                <>
                    {currentData.length > 0 ? (
                        <>
                            <Row gutter={[{ xs: 5, sm: 5, xl: 15, xxl: 30 }, 30]}>
                                {currentData.slice(offset, offset + productPerPage).map((product, index) => (
                                    <Col
                                        key={index}
                                        className={classNames({ "five-col": fiveColumn })}
                                        {...productResponsive}
                                    >
                                        <Product data={product} />
                                    </Col>
                                ))}
                            </Row>
                            {currentData.length >= productPerPage && (
                                <Pagination
                                    className="shop-content__product-pagination"
                                    defaultCurrent={1}
                                    current={page}
                                    total={currentData.length}
                                    pageSize={productPerPage}
                                    itemRender={itemRender}
                                    onChange={(page, pageSize) => onChangeOffset(page, pageSize)}
                                />
                            )}
                        </>
                    ) : (
                        <Empty />
                    )}
                </>
            )}

        </div>
    )
}

export default React.memo(ShopContentProduct);
