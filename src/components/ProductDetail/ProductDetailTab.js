import React from 'react';
import { Tabs } from 'antd';

import Container from '../../components/Base/Container';
import ProductDetailReviewItem from './ProductDetailReviewItem';

const { TabPane } = Tabs;

const ProductDetailTab = () => {
    return (
        <div className="product-detail-tab">
            <Container>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Description" key="1">
                        <div className="product-detail-tab-item -description">
                            <p className="tab-des--bold">
                                137 Degrees Real Almond Milk Original Unsweetened.
              </p>
                            <h5 className="tab-title">Products Infomation</h5>
                            <p className="tab-des">
                                Dairy Free<br />
                                Soy Free<br />
                                Vegan<br />
                                Gluten Free<br />
                                Low Sodium<br /><br />

                                Enjoy this deliciousness pure by itself, in cereal, smoothie, coffee, or in your favorite homecooked meals, and baked goodies.
              </p>
                            <h5 className="tab-title">Ingredients</h5>
                            <p className="tab-des">
                                Fresh almond milk 95% (from whole almonds grown in California, USA), Sunflower seeds 5%. NO added cane sugar and soy content. Not from concentrate, no preservatives added. Suitable for vegans and lactose intolerant.<br />

                                - After opening, 137 degrees almond milk stays fresh in refrigerator for up to 7 days. Close lid tightly.<br />
                                - Do not consume if packaging is damage, or if product is expired.<br />
                                - Because we always use the freshest whole almonds with skin, almond sediments or curds may appear and are a natural occurrence. This does not affect product quality and is safe for consumption.<br />

                                For better taste, shake well and serve chilled.<br />

                                Contains: Almond.
              </p>
                        </div>
                    </TabPane>
                    <TabPane tab="Customer Reviews(5)" key="2">
                        <div className="product-detail-tab-item -review">
                            <ProductDetailReviewItem />
                            <ProductDetailReviewItem />
                        </div>
                    </TabPane>
                </Tabs>
            </Container>
        </div>
    )
}

export default ProductDetailTab
