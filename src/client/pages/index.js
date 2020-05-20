import { useEffect } from 'react'
import Router from 'next/router'

const HomePage = props => {

    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/') { Router.push('/ES-es') }
    }, [])
    return (<>...loading</>)
}


export default HomePage