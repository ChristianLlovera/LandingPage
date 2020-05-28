import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Home from '../../components/Home'
import Head from 'next/head'

const scriptTagFB = () => {

    window.fbAsyncInit = function () {
        FB.init({
            xfbml: true,
            version: 'v7.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s); js.id = id
        js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))

}

const HomePage = props => {

    const route = useRouter()
    const { lang } = route.query

    useEffect(() => {

        const validLang = ['ES-es', 'EN-en']
        if (lang && !validLang.includes(lang)) {
            Router.push('/ES-es')
            console.log(validLang.includes(lang))
        }

    }, [lang])

    useEffect(() => {
        scriptTagFB()
    }, [])

    return (
        <>
            <Home {...props} />
            {/* <!-- Load Facebook SDK for JavaScript --> */}
            <div id="fb-root"></div>
            {/* <!-- Your Chat Plugin code --> */}
            <div className="fb-customerchat"
                attribution="setup_tool"
                page_id="606422813026372"
                theme_color="#0084ff"
                logged_in_greeting="Hola, si necesitas saber algo sobre mi trabajo, solo deja un mensaje."
                logged_out_greeting="Hola, si necesitas saber algo sobre mi trabajo, solo deja un mensaje.">
            </div>
        </>
    )
}


export default HomePage