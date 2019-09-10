import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Father from '../pages/Father'
import BigChild from '../pages/BigChild'
import SmallChild from '../pages/SmallChild'
import Clock from '../pages/Clock'
import LifeCycle from '../pages/LifeCycle'

export default class RouterComponent extends React.Component{
    render(){
        return(
            <Router>
                    {/*<nav>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/">Father</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/BigChild/王俊凯">BigChild</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/SmallChild">SmallChild</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/Clock">Clock</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/LifeCycle">生命周期</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                    <Switch>
                    <Route component={Father}
                        exact
                        path="/"
                    />
                    <Route component={BigChild}
                        path="/BigChild/:name"
                    />
                    <Route component={SmallChild}
                        path="/SmallChild"
                    />
                    <Route component={Clock} path="/Clock"/>
                    <Route component={LifeCycle} path="/LifeCycle"/>
                    </Switch>
            </Router>
        )
    }
}
