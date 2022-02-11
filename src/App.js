import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import News from './pages/News';
import NewsSinglePost from './pages/NewsSinglePost';
import Gallery from './pages/Gallery';
import SearchResults from './pages/SearchResults';
import Services from './pages/Services';
import Flower from './pages/Flower';
import ChefsRecomendations from './pages/ChefsRecomendations';
import Edibles from './pages/Edibles';
import ThcVapes from './pages/ThcVapes';
import Concentrates from './pages/Concentrates';
import PreRolled from './pages/PreRolled';
import page404 from './pages/404';
import UserInterface from './pages/UserInterface';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/about-us" }` }
                    component={ About }
                /> */}
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/contacts" }` }
                    component={ Contacts }
                /> */}
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/news" }` }
                    component={ News }
                /> */}
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/gallery" }` }
                    component={ Gallery }
                /> */}
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/news-single-post" }` }
                    component={ NewsSinglePost }
                /> */}
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
                    component={ SearchResults }
                /> */}
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/services" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/ui" }` }
                    component={ UserInterface }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/flower" }` }
                    component={ Flower }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/chef's-recommendations" }` }
                    component={ ChefsRecomendations }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/edibles-chocolates-candies-and-gummies" }` }
                    component={ Edibles }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/thcvapes" }` }
                    component={ ThcVapes }
                />

                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/concentrates" }` }
                    component={ Concentrates }
                />

                 <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/prerolled" }` }
                    component={ PreRolled }
                />

                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/info" }` }
                    component={ About }
                />

                <Route exact component={ page404 } />
            </Switch>
        </Router>
    );
}

export default App;
