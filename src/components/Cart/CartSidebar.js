import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Empty, Button } from 'antd';

import CartSidebarItem from './CartSidebarItem';
import { calculateTotalPrice } from '../../common/shopUtils';

const CartSidebar = () => {
    const cartState = useSelector((state) => state.cartReducer);

    return cartState.length === 0 ? (
        <Empty description="No Produts in cart" />
    ) : (
        <div className="cart-sidebar">
            <div className="cart-sidebar-products">
                {cartState.map((item, index) => (
                    <CartSidebarItem key={index} data={item} />
                ))}
            </div>
            <div className="cart-sidebar-total">
                <h5>
                    Total: {""}
                    <span>
                        $ {calculateTotalPrice(cartState)}
                    </span>
                </h5>
                <div className="cart-sidebar-total__buttons">
                    <Button type="primary" shape="round">
                        <Link href={process.env.PUBLIC_URL + "/shop/checkout"}>
                            <a>Checkout</a>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartSidebar
