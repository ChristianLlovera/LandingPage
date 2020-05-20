import '../scss/_style.scss'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/assets/img/icon.png" />
            </Head>

            <main className="scroll">
                <Component {...pageProps} />
            </main>
        </>
    )
}