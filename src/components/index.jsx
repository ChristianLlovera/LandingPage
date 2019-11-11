import React from 'react'
import LayoutProvider from './Layout/Provider'

import Routes from './routes'

const App = () => {



    return (
        <LayoutProvider>
            <Routes />
        </LayoutProvider>
    )
}

export default App

