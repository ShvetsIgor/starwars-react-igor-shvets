import {useEffect, useState} from "react";
import {useMainHero} from "../utils/hooks.ts";
import { friends } from "../utils/constants.ts";

const AboutMe = () => {

    const [character, setCharacter] = useState({
        id: 0,
        name: "",
        gender: "",
        height: "",
        homeworld: 0,
        mass: "",
        skin_color: "",
        hair_color: "",
        eye_color: ""
    })

    const [planets, setPlanets] = useState<string[]>([]);
    const mainHeroInfo = useMainHero();

    const friendPath = friends.find(friend => mainHeroInfo!.id === friend.id)!.path;
    const friendPic = friends.find(friend => mainHeroInfo!.id === friend.id)!.img;

    useEffect(() => {
        (async () => {
        // const randomID = Math.trunc(Math.random() * 70 + 1);

        try {
            const response = await fetch(`https://sw-info-api.herokuapp.com/v1/${friendPath}`)
            if (!response.ok) throw Error('Not Found');

            const data = await response.json()
            setCharacter({
                id: data.id,
                name: data.name,
                gender: data.gender,
                height: data.height,
                homeworld: data.homeworld,
                mass: data.mass,
                skin_color: data.skin_color,
                hair_color: data.hair_color,
                eye_color: data.eye_color
            })
        } catch (e) {
            console.log(e)
        }
    })()
    }, [friendPath])

    useEffect(() => {
        const storagePlanets = localStorage.getItem("planetNames")


        if (storagePlanets) {
            setPlanets(JSON.parse(storagePlanets))
        }
    }, []);

    const planetName = planets[character.homeworld] || "Unknown planet";

    return (
        <div>
            <div className="aboutMe">
                <div className="aboutMe persInfo" >
                    <img src={`../${friendPic}`} alt={friendPic}/>
                    <h1>{character.name}, ID: {character.id}</h1>
                    <h2>from planet {planetName}</h2>
                    <span>Gender: {character.gender}</span>
                    <h2>Appearance:</h2>
                    <span>Skin color: {character.skin_color}</span><br/>
                    <span>Hair color: {character.hair_color}</span><br/>
                    <span>Eye color: {character.eye_color}</span><br/>
                    <span>Height: {character.height}</span><br/>
                    <span>Mass: {character.mass}</span>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;