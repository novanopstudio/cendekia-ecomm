//Products
export const getProductsByCategory = (arr, category) => {
    return category
        ? arr.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
        )
        : arr;
};

export const getProductsBySlug = (arr, slug) => {
    return slug && typeof slug === "string"
        ? arr.find((p) => p.slug.toLowerCase() === slug.toLowerCase())
        : arr;
};

export const getProductsBySearch = (products, keyword) => {
    return keyword && keyword !== ""
        ? products.filter((product) =>
            product.name.toLowerCase().includes(keyword.toLowerCase())
        )
        : products;
};

export const getProductsBySort = (products, type) => {
    function sortWithCondition(arr, value, reverse = false) {
        let num = reverse ? -1 : 1;
        return arr.sort((a, b) => {
            if (a[value] < b[value]) {
                return -1 * num;
            }
            if (a[value] > b[value]) {
                return 1 * num;
            }
            return 0;
        });
    }
    if (type === "az") {
        return sortWithCondition(products, "name");
    } else if (type === "za") {
        return sortWithCondition(products, "name", true);
    } else if (type === "lowHigh") {
        return sortWithCondition(products, "price");
    } else if (type === "highLow") {
        return sortWithCondition(products, "price", true);
    } else {
        return products;
    }
}

export const getProductsByFilter = (products, sortType, subCategory) => {
    let filteredProduct = subCategory
        ? products.filter((product) => product.subCategory.toLowerCase() === subCategory.toLowerCase())
        : products;
    return getProductsBySort(filteredProduct, sortType);
}

// Cart
export const getTotalProductInCart = (arr) => {
    return arr ? arr.reduce((total, item) => total + item.cartQuantity, 0) : 0;
};

export const calculateTotalPrice = (arr) => {
    let total = 0;
    arr.forEach((item) => {
        if (item.discount) {
            total += item.cartQuantity
                ? (item.price - item.discount) * item.cartQuantity
                : item.price - item.discount;
        } else {
            total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
        }
    });
    return total;
}

export const checkProductInCart = (cartArr, pid) => {
    return pid ? cartArr.find((item) => item.id === pid) : null;
}

export const checkAvailableQuantityToAdd = (arr, product) => {
    const productsInCart = arr.filter((item) => item.id === product.id);

    if (productsInCart && productsInCart.length > 0) {
        const totalProductQuantityInCart =
            productsInCart.length > 0 &&
            productsInCart.reduce((total, item) => total + item.cartQuantity, 0);
        let available = product.quantity - totalProductQuantityInCart;
        return available < 1 ? 0 : available;
    } else {
        product.quantity;
    }
};

// Wishlist
export const checkProductInWishlist = (wishlistArr, pid) => {
    return pid ? wishlistArr.find((item) => item.id === pid) : null;
};