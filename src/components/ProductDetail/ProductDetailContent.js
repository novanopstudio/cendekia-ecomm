import React, { useState } from 'react';
import { Rate, Button, Radio, Progress, message } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { addToCart } from '../../redux/actions/cartActions';
import QuantitySelector from '../Controls/QuantitySelector';
import { checkAvailableQuantityToAdd } from '../../common/shopUtils';

function ProductDetailContent({
    data,
    onAddedToCart,
    quantityControllerNoRound
}) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const globalState = useSelector((state) => state.globalReducer);
    const cartState = useSelector((state) => state.cartReducer);
    const availableQuantity = checkAvailableQuantityToAdd(cartState, data);

    const onAddProductToCart = (data) => {
        if (availableQuantity === 0) {
            return;
        }
        dispatch(addToCart(data, quantity));
        onAddedToCart && onAddedToCart();
        message.success("Product added to cart successfully");
    };



    return (
        <div className="product-detail-content-one">
            <h3>{data.name}</h3>
            <div className="product-detail-content-one-rate">
                <Rate disabled defaultValue={data.rate} />
                <span className="product-detail-content-one-review-count">- 5 Reviews</span>
            </div>
            <div className="product-detail-content-one-price">
                <h5>
                    $ {data.discount
                        ? data.price - data.discount
                        : data.price
                    }
                </h5>
                $ {data.discount && (
                    <span>{data.price}</span>
                )}
            </div>
            <p className="product-detail-content-one-description">
                Bruto weight: 1570gr<br /><br />

                Produk berisi cairan, apakah aman pengiriman ke luar kota?<br /><br />

                Sejauh ini kami sudah mengirimkan ke berbagai penjuru Indonesia dan aman-aman saja karena Cendekia mengemas produk dengan minimal 3 lapis bubble wrap.
                Namun untuk lebih aman, kami sangat menyarankan untuk membeli asuransi toko agar jika terjadi kerusakan / pecah / bocor bisa kami bantu ajukan claim ke pihak ekspedisi.

                Produk asuransi terdapat di list produk Cendekia Organic. Cukup membeli 1 asuransi dalam setiap order.
            </p>
            <div className="product-detail-content-one-actions">
                <QuantitySelector
                    noRound={quantityControllerNoRound}
                    defaultValue={1}
                    onChange={(val) => setQuantity(val)}
                    size="big"
                    max={checkAvailableQuantityToAdd(cartState, data)}
                />
                <Button
                    onClick={() => onAddProductToCart(data)}
                    disabled={availableQuantity === 0}
                    className={`product-detail-content-one-atc ${classNames({
                        disabled: availableQuantity === 0,
                    })}`}
                    type="link"
                    danger
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductDetailContent
