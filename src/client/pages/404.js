import Error404 from '../components/Error404'
import Head from 'next/head'

const NoFount = () => {
    return (
        <>
            <Head>
                <title>Error 404</title>
            </Head>
            <Error404 />
        </>
    )
}

export default NoFount