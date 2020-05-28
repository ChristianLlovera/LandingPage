import { useEffect } from 'react'
import Router from 'next/router'
import Loading from '../components/Loading'
import Head from 'next/head'

const HomePage = props => {

    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/') { Router.push('/ES-es') }
    }, [])

    return (<Loading />)
}


export default HomePage