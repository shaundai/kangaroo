import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import Display from './Display'

function Router(){

    return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Display} />
        <Route path="/store/:appId" component={App} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
    )
}

export default Router;