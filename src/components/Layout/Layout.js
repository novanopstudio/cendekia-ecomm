import React from 'react';
import Head from 'next/head';
import { BackTop, message } from 'antd';
import classNames from "classnames";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WithHeaderScroll from '../../common/withHeaderScroll';

const ScrollHeader = WithHeaderScroll(Header);

const Layout = ({ title, headerStyle, containerType, children, clearSpaceTop }) => {
    message.config({
        maxCount: 3,
        duration: 1,
    });

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ScrollHeader headerStyle={headerStyle} containerType={containerType} />
            <div className={`content ${classNames({ "clear-top": clearSpaceTop })}`} >
                {children}
            </div>
            <Footer containerType={containerType} />
            <BackTop />
        </>
    )
}

export default Layout
