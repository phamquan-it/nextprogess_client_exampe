import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { PagesProgressBar as ProgessBar } from  "next-nprogress-bar"
export default function App({ Component, pageProps }: AppProps) {
    return <>
           <ProgessBar height="4px" color="#fffd00" options={{ showSpinner: false }} shallowRouting/>
        <Component {...pageProps} />
    </>;
}
