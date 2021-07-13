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
                <meta name="thumbnail" content="https://christianllovera.com/assets/img/thumbnail.jpg" />
                <meta property="og:title" content="Christian Llovera - Diseñador Gráfico / Desarrollador Web" />
                <meta property="og:description" content="Soy Christian Llovera👋, tengo más de 12 años en el mundo del desarrollo web, diseño gráfico, Ilustración digital y marketing digital, cuento con conocimiento en distintas tecnologías de desarrollo tanto de back-end como de front-end, entre ellas, React.js, node.js, PHP, JavaScript vanilla, WordPress, Illustrator, Photoshop…" />
                <meta property="og:image" content="https://christianllovera.com/assets/img/ogmin.png" />
                <meta property="og:type" content="website" />
                <title>Christian Llovera - Diseñador Gráfico / Desarrollador Web</title>
            </Head>

            <main className="scroll">
                <Component {...pageProps} />
            </main>
        </>
    )
}


