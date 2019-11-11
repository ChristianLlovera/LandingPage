import React from 'react'
import Home from '../Views/Home'
import NoFount from '../Views/404'
import { Switch, Route, Redirect } from 'react-router-dom'



const Routes = () => {

    return (
        <Switch>
            <Redirect from="/**/**" to="/404" />
            <Route path={'/404'} component={NoFount} />
            <Route path={'/:lang'} component={Home} />
            <Redirect from="/" to="/ES-es" />
        </Switch>
    )
}

export default Routes