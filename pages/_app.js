import "./styles.css"
import { SessionProvider } from "next-auth/react"
import {Session } from "next-auth"

export default function App({ Component, pageProps:{session:Session ,...pageProps} }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
