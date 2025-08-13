import Hero from "./Hero.tsx";
import Gallery from "./Gallery.tsx";
// import FarGalaxy from "./FarGalaxy/FarGalaxy.tsx";
import FarGalaxyFunc from "./FarGalaxy/FarGalaxyFunc.tsx";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/SWContext.ts";


const Home = () => {

    const {setMainHero} = useContext(SWContext)
    const {heroId} = useParams();
    // console.log(heroId);
    
    useEffect(() => {
        setMainHero(heroId??"luke")
    }, [heroId, setMainHero])
    

    return (
        <main>
            <Hero/>
            <Gallery />
            <FarGalaxyFunc/>
        </main>
    );
};

export default Home;