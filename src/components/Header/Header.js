import React from 'react'

import TopNav from '../Header/elements/TopNav';
import Menu from '../Header/elements/Menu';

const Header = ({ containerType, headerStyle }) => {
    const renderStyleClass = (type) => {
        switch (type) {
            case "two":
                return "-style-two";
            default:
                return "default";
        }
    };

    return (
        <div className={`header-one ${renderStyleClass(headerStyle)}`}>
            <TopNav containerType={containerType} />
            <Menu />
        </div>
    )
}

export default Header
