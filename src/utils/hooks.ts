import {useContext} from "react";
import {SWContext} from "./SWContext.ts";
import {friends} from "./constants.ts";

export const useMainHero = () => {
    const {mainHero} = useContext(SWContext);
    const mainHeroInfo = friends.find(item => item.id === mainHero);
    return mainHeroInfo;
}