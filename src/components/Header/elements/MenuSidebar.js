import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';


const MenuSidebar = () => {

    return (
        <div className="menu-sidebar">
            <Menu mode="inline">
                <Menu.Item key="1">
                    <Link href={process.env.PUBLIC_URL + "/"}>
                        <a>Home</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href={process.env.PUBLIC_URL + "/"}>
                        <a>Shop</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link href={process.env.PUBLIC_URL + "/"}>
                        <a>Get Offers</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link href={process.env.PUBLIC_URL + "/"}>
                        <a>Help</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default MenuSidebar
