import Navigation from "./Navigation.tsx";
import {useMainHero} from "../utils/hooks.ts";



const Header = () => {

    const mainHeroInfo = useMainHero();

    // const location = useLocation(); // нашли полный адрес... /home
    // const currentRoute = location.pathname.replace("/", "") || "home"; // path - это только /home, убираем /
    //
    // const currentItem = navItems.find(item => item.route === currentRoute); //ищем home в navItems
    //
    // const title =
    //     currentRoute === "home"
    //         ? "Luke Skywalker"
    //         : currentItem?.title || "Page not found";


    return (
        <header>
            <Navigation/>
            <h1>{mainHeroInfo!.name}</h1>
        </header>
    );
};

export default Header;