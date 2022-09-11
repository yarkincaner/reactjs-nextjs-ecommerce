import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { StateContextProvider } from "../context/StateContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContextProvider>
  );
}

export default MyApp;
