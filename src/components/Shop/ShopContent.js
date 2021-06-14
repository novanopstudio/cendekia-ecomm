import React from 'react';

import ShopContentHeader from './ShopContentHeader';
import ShopContentProduct from './ShopContentProduct'

const ShopContent = ({ fiveColumn, productResponsive, productPerPage, data }) => {
    return (
        <div className="shop-content">
            <ShopContentHeader productPerPage={productPerPage} data={data} />
            <ShopContentProduct
                fiveColumn={fiveColumn}
                productResponsive={productResponsive}
                productPerPage={productPerPage}
                data={data}
            />
        </div>
    )
}

export default ShopContent
