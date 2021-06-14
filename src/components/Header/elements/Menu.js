import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Drawer } from 'antd';
import { useSelector } from 'react-redux';
import { CloseOutlined } from "@ant-design/icons";

import productsData from '../../../data/product.json';
import Container from '../../Base/Container';
import SearchBar from './SearchBar';
import MenuSidebar from './MenuSidebar';
import WishlistSidebar from '../../Wishlist/WishlistSidebar';
import CartSidebar from '../../Cart/CartSidebar';
import { getTotalProductInCart } from '../../../common/shopUtils';

const Menu = ({ containerType }) => {
    const cartState = useSelector((state) => state.cartReducer);
    const wishlistState = useSelector((state) => state.wishlistReducer);

    const [menuSidebarOpen, setMenuSidebarOpen] = useState(false);
    const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
    const [wishlistSidebarOpen, setWishlistSidebarOpen] = useState(false);

    return (
        <>
            <div className="menu">
                <Container type={containerType}>
                    <div className="menu-wrapper">
                        <a
                            href="#"
                            className="menu-sidebar-opener"
                            onClick={(e) => {
                                e.preventDefault();
                                setMenuSidebarOpen(true);
                            }}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </a>
                        <div className="menu-logo">
                            <Link href={process.env.PUBLIC_URL + "/"}>
                                <a><img src={process.env.PUBLIC_URL + "/assets/images/cendekiaOrgSm.png"} alt="logo" /></a>
                            </Link>
                        </div>
                        <SearchBar
                            fillData={productsData}
                        />
                        <div className="menu-functions">
                            <Button>
                                <Link href="#">
                                    <a>Join now</a>
                                </Link>
                            </Button>
                            <div
                                className="menu-function-item"
                                onClick={() => setWishlistSidebarOpen(true)}
                            >
                                <img src={process.env.PUBLIC_URL + "/assets/images/header/menu-wishlists.png"} alt="" />
                                <span>{wishlistState.length}</span>
                            </div>
                            <div
                                className="menu-function-item"
                                onClick={() => setCartSidebarOpen(true)}
                            >
                                <img src={process.env.PUBLIC_URL + "/assets/images/header/shopping-cart.png"} alt="" />
                                <span>{getTotalProductInCart(cartState)}</span>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="menu-mobile-search">
                    <Container>
                        <SearchBar fillData={productsData} placeholder="Searching..." />
                    </Container>
                </div>
                <Drawer
                    placement="right"
                    title={`Wishlist (${wishlistState.length})`}
                    closable={true}
                    onClose={() => setWishlistSidebarOpen(false)}
                    closeIcon={
                        <>
                            <p>Close</p> <CloseOutlined />
                        </>
                    }
                    visible={wishlistSidebarOpen}
                    width={445}
                    className="menu-side"
                >
                    <WishlistSidebar />
                </Drawer>
                <Drawer
                    placement="right"
                    title={`Shopping cart (${getTotalProductInCart(cartState)})`}
                    closable={true}
                    onClose={() => setCartSidebarOpen(false)}
                    closeIcon={
                        <>
                            <p>Close</p> <CloseOutlined />
                        </>
                    }
                    visible={cartSidebarOpen}
                    width={445}
                    className="menu-side"
                >
                    <CartSidebar />
                </Drawer>
                <Drawer
                    placement="right"
                    closable={true}
                    title=" "
                    onClose={() => setMenuSidebarOpen(false)}
                    closeIcon={
                        <>
                            <p>Close</p> <CloseOutlined />
                        </>
                    }
                    visible={menuSidebarOpen}
                    width={350}
                    className="menu-side"
                >
                    <MenuSidebar />
                </Drawer>
            </div>
        </>
    )
}

export default Menu
