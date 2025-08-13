import {createContext} from "react";

export const SWContext = createContext({
    mainHero: "",
    setMainHero: (hero: string) => {
        console.log(hero);
    }
})