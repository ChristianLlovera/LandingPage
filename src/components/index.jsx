import React from 'react'
import LayoutProvider from './Layout/Provider'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const App = () => {
    const routesMap = routes.map((route, i) => <Route key={i} {...route} />)
    return (
        <LayoutProvider>
            <Switch>
                {routesMap}
            </Switch>
        </LayoutProvider>
    )
}

export default App

