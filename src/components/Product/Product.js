import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Rate, Button, Tooltip, Skeleton, message, Modal, Spin } from "antd";

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import {
    checkAvailableQuantityToAdd,
    checkProductInWishlist,
} from '../../common/shopUtils';

import { addToCart } from '../../redux/actions/cartActions';
import { addToWishlist, removeFromWishlist } from '../../redux/actions/wishlistActions';

import ShopQuickView from '../Shop/ShopQuickView';



const Product = ({ data }) => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const globalState = useSelector((state) => state.globalReducer);
    const cartState = useSelector((state) => state.cartReducer);
    const wishlistState = useSelector((state) => state.wishlistReducer);

    const productInWishlist = checkProductInWishlist(wishlistState, data.id);
    const availableQuantity = checkAvailableQuantityToAdd(cartState, data);

    useEffect(() => {
        setImageLoading(true);
    }, [globalState.category]);

    const renderProductType = () => {
        if (data.discount && !data.isNew) {
            return <p className="product-type -sale">Sale</p>;
        } else if (data.isNew && !data.discount) {
            return <p className="product-type -new">New</p>;
        } else if (data.isNew && data.discount) {
            return <p className="product-type -new">New</p>;
        } else {
            return null;
        }
    };

    const onAddToCart = (data) => {
        if (availableQuantity === 0) {
            return;
        }
        dispatch(addToCart(data, 1));
        message.success("Product added to cart successfully");
    };

    const onAddToWishlist = (data) => {
        if (productInWishlist) {
            dispatch(removeFromWishlist(data.id));
            return message.error("Product removed from wishlist");
        } else {
            dispatch(addToWishlist(data));
            return message.success("Product added to wishlist successfully");
        }
    }

    const showModal = () => {
        setVisible(true);
    }

    const handleCancel = (e) => {
        setVisible(false);
    }

    const handleImageLoaded = () => {
        setImageLoading(false);
    };


    return data ? (
        <>
            <div className="product -style-one">
                <div className="product-image">
                    <Link
                        href={process.env.PUBLIC_URL + `/product/[slug]`}
                        as={process.env.PUBLIC_URL + `/product/${data.slug}`}
                    >
                        <a className={classNames({ loading: imageLoading })}>
                            {data.thumbImage && data.thumbImage.map((item, index) => (
                                <img
                                    onLoad={handleImageLoaded}
                                    key={index}
                                    src={item}
                                    alt="Product Image"
                                />
                            ))}
                        </a>
                    </Link>
                    {imageLoading && (
                        <div className="product-image-loading">
                            <Spin size="large" />
                        </div>
                    )}
                    {renderProductType()}
                    <>
                        <Tooltip
                            placement="left"
                            title={
                                productInWishlist ? "Remove from wishlist" : "Add to wishlist"
                            }
                        >
                            <Button
                                className={`product-atw ${classNames({
                                    active: productInWishlist,
                                })}`}
                                type="text"
                                shape="circle"
                                onClick={() => onAddToWishlist(data)}
                            >
                                <i className="icon_heart_alt" />
                            </Button>
                        </Tooltip>

                        <Button onClick={showModal} className="product-qv">
                            Quick View
                    </Button>
                    </>
                </div>
                <div className="product-content">
                    <Link
                        href={process.env.PUBLIC_URL + `/product/[slug]`}
                        as={process.env.PUBLIC_URL + `/product/${data.slug}`}
                    >
                        <a className="product-name">{data.name}</a>
                    </Link>
                    <div className="product-rate">
                        <Rate defaultValue={data.rate} disabled />
                        <span className="product-rate-quantity">({data.reviewCount})</span>
                    </div>
                    <div className="product-content__footer">
                        <div className="product-content__footer-price">
                            <h5 className="product-price">
                                $ {data.discount ? data.price - data.discount : data.price}
                            </h5>
                            {data.discount && (
                                <span>$ {data.price}</span>
                            )}

                        </div>

                        <Tooltip title="Add to Cart">
                            <Button
                                disabled={availableQuantity === 0}
                                className="product-atc"
                                type="text"
                                shape="circle"
                                onClick={() => onAddToCart(data)}
                            >
                                <i className="icon-add-to-cart" />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <Modal
                footer={null}
                afterClose={handleCancel}
                onCancel={handleCancel}
                visible={visible}
                width={850}
            >
                <ShopQuickView setModalVisible={setVisible} data={data} />
            </Modal>
        </>
    ) : (
        <Skeleton active />
    );
}

export default Product
