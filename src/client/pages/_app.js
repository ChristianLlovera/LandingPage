import firebase from '../config/firebase'
import { useEffect } from 'react'
import '../scss/_style.scss'
import Head from 'next/head'

const runScriptAnalytics = () => {
    if (typeof firebase.analytics == 'function'
        && process.env.NODE_ENV !== 'development') {
        firebase.analytics()
    }
}

export default function MyApp({ Component, pageProps }) {

    useEffect(() => runScriptAnalytics(), [])

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/assets/img/icon.png" />
                <title>Christian Llovera</title>
            </Head>

            <main className="scroll">
                <Component {...pageProps} />
            </main>

        </>
    )
}