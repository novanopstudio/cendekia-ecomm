import { useRouter } from "next/router";

import Layout from '../../components/Layout/Layout';
import { capitalizeFirstLetter } from '../../common/utils';
import { getProductsBySlug } from '../../common/shopUtils';
import productData from '../../data/product.json';
import ProductDetail from "../../components/ProductDetail/ProductDetail";

export default function pid() {
    const router = useRouter();
    const { slug } = router.query;
    const foundProduct = getProductsBySlug(productData, slug);

    return (
        <Layout
            title={foundProduct && capitalizeFirstLetter(foundProduct.name)}
            clearSpaceTop
        >
            {foundProduct && <ProductDetail data={foundProduct} />}
        </Layout>
    );
}