import {useMainHero} from "../utils/hooks.ts";


const Hero = () => {

    // const {mainHero} = useContext(SWContext);
    // const mainHeroInfo = friends.find(item => item.id === mainHero);

    const mainHeroInfo = useMainHero();

    return (
        <section className="left">
            <img src={`../${mainHeroInfo!.img}`} alt={mainHeroInfo!.name} />
        </section>
    );
};

export default Hero;