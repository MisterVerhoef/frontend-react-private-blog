import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import BlogPage from "./pages/blogs/blogposts";
import Homepage from "./pages/home/Homepage";
import LoginPage from "./pages/login/Login";
import TopMenu from './components/TopMenu';
import './App.css';
import BlogPostPage from "./components/blogId";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (

<>
    <TopMenu/>
    <Switch>

        <Route exact path="/">
            <Homepage/>
        </Route>
        <Route path="/blogposts">
            <BlogPage/>
        </Route>
        <Route exact path="/blogpost/:id">
            <BlogPostPage/>
        </Route>
        <Route exact path="/login">
            <LoginPage/>
        </Route>
    </Switch>
</>
)
    ;
}

export default App;
