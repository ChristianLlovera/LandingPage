import firebase from '../config/firebase'
import { useEffect } from 'react'
import '../scss/_style.scss'
import Head from 'next/head'

const runScriptFirebase = ()=>{
    if (typeof firebase === 'undefined'){
        console.error('firebase undefied')
    }else{
        const defaultAnalytics = firebase.analytics()
    }
}

export default function MyApp({ Component, pageProps }) {
    useEffect(()=>runScriptFirebase(),[])

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