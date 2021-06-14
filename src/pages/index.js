import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import ShopLayout from '../components/Shop/ShopLayout';
import productData from '../data/product.json';
import useProductData from '../common/useProductData';

export default function Home() {
  const router = useRouter();
  const globalState = useSelector((state) => state.globalReducer);

  const data = useProductData(
    productData,
    globalState.category,
    router.query.q,
  );

  return (
    <Layout title="Cendekia Ecommerce">
      <Hero />
      <Banner />
      <ShopLayout
        fiveColumn
        shopSidebarResponsive={{ xs: 24, lg: 4 }}
        shopContentResponsive={{ xs: 24, lg: 20 }}
        productResponsive={{ xs: 12, sm: 8, md: 6 }}
        productPerPage={8}
        data={[...data]}
      />
    </Layout>
  )
}
