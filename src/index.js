import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import Father from './pages/Father';
import * as serviceWorker from './serviceWorker';
import BigChild from './pages/BigChild'
import SmallChild from './pages/SmallChild'

ReactDOM.render(
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Father</Link>
                    </li>
                    <li>
                        <Link to="/BigChild">BigChild</Link>
                    </li>
                    <li>
                        <Link to="/SmallChild">SmallChild</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/" component={Father} />
            <Route  path="/BigChild" component={BigChild} />
            <Route  path="/SmallChild" component={SmallChild} />
        </div>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
