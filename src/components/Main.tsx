import {Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import {navItems} from "../utils/constants.ts";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={navItems[0].route} element={<Home/>} />
            <Route path={`${navItems[0].route}/:heroId`} element={<Home/>} />
            <Route path={navItems[1].route} element={<AboutMe/>} />
            <Route path={navItems[2].route} element={<StarWars/>} />
            <Route path={navItems[3].route} element={<Contact/>} />
            <Route path={'*'} element={<ErrorPage/>} />
        </Routes>
    )

};

export default Main;