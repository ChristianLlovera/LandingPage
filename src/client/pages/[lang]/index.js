import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Home from '../../components/Home'


const HomePage = props => {

    const route = useRouter()
    const { lang } = route.query

    useEffect(() => {

        const validLang = ['ES-es', 'EN-en']
        if (lang && !validLang.includes(lang)) {
            Router.push('/ES-es')
        }

    }, [lang])


    return (
        <>
            <Home {...props} />
        </>
    )
}


export default HomePage