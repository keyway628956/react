import React from 'react';


import GraphQL from './page/GraphQL.js';
import PostList from './page/PostList';
import Home from './page/Home.js';
import About from './page/About.js';
import UploadForm from './page/UploadForm.js';
import Page404 from './page/Page404';
import TestAPI from './page/TestAPI'
import Carousel from './page/Carousel';
import OsmMap from './page/OsmMap';
import Customer from './page/Customer';



import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



/* function Home() {
    return <h2>Home</h2>;
} */
/* 
function About() {
    return <h2>Users123</h2>;
}
 
function Users() {
    return <h2>Users123</h2>;
}
*/
function App() {
    //let match = useRouteMatch();

    return (
        <Router>



            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about" >
                    <About />
                </Route>
                <Route path="/Customer">
                    <Customer />
                </Route>


                <Route path="/GraphQL" >
                    <GraphQL />
                </Route>
                <Route path="/PostList" component={PostList}>
                </Route>
                <Route path="/UploadForm">
                    <UploadForm />
                </Route>
                <Route path="/Page404">
                    <Page404 />
                </Route>
                <Route path="/OsmMap">
                    <OsmMap />
                </Route>
                <Route path="/Page404">
                    <Page404 />
                </Route>
                <Route path="/Carousel">
                    <Carousel />
                </Route>
                <Route path="/TestAPI">
                    <TestAPI />
                </Route>
                <Route path="/TestAPI/AgriProductsTransType">
                    <TestAPI />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>
    );
}

/* function TestAPIs() {
    let match = useRouteMatch();

    return (
        <div>
            {/* 
            <h2>TestAPIs</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/AgriProductsTransType`}>AgriProductsTransType</Link>
                </li>
                <li>
                    <Link to={`${match.url}/AgriProductsTransType`}>AgriProductsTransType</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
            </Link>
                </li>
            </ul>

           The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected 
            <Switch>
                <Route path={`${match.path}/AgriProductsTransType`}>
                    <TestAPI />
                </Route>
            </Switch>
        </div>
    );
} */
/* 
function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
} */

export default App;
