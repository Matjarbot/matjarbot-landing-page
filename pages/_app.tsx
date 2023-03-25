import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../styles/app.css";
import { store } from "../store/store";
import AppWrapper from "../layouts/_AppWrapper";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { SWRConfig } from 'swr'
import axios from '../lib/axios'
import Cookies from 'js-cookie'

function App({ Component, pageProps }: AppProps) {
  const token = Cookies.get('storeToken')
  return (
    <SWRConfig value={{
      fetcher: async (url: string) => await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      }).then((r: any) => r.data)
    }}>
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
    </SWRConfig>
  );
}

export default App;
