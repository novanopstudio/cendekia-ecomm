import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from '../redux/store';
import withReduxStore from '../common/withReduxStore';
import Loading from '../components/Other/Loading';

import "../styles/antd.css";
import "../styles/styles.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/thumbs/thumbs.scss"

const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default withReduxStore(App);
