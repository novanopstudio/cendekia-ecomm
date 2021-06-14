import React from 'react';
import Link from 'next/link';
import { Divider } from 'antd';

import Container from '../../Base/Container';

const TopNav = ({ containerType }) => {
    return (
        <div className="top-nav">
            <Container type={containerType}>
                <div className="top-nav-wrapper">
                    <div className="top-nav-links">
                        <div className="top-nav-links__item">
                            <Link href="/">
                                <a>About Us</a>
                            </Link>
                        </div>
                        <div className="top-nav-links__item">
                            <Link href="/">
                                <a>FAQ</a>
                            </Link>
                        </div>
                        <div className="top-nav-links__item">
                            <Link href="/">
                                <a>Help Desk</a>
                            </Link>
                        </div>
                        <div className="top-nav-links__item">
                            <Link href="/">
                                <a>Contact Us</a>
                            </Link>
                        </div>
                    </div>
                    <div className="top-nav-phone">
                        <span><i className="icon_mail" /> halo@novanop.com | <i className="icon_phone" /> +62896 8311 6161</span>
                    </div>
                </div>
                <Divider style={{ color: '#000' }} />
            </Container>
        </div>
    )
}

export default TopNav
