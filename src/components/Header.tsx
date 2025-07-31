import Navigation from "./Navigation.tsx";
import type {FC} from "react";

type Props = {
    changePage: (page: string) => void;
    page: string;
}

const pageTitles: Record<string, string> = {
    home: "Luke Skywalker",
    aboutMe: "About Me",
    contacts: "Contacts",
    starWars: "Star Wars"
};

const Header: FC<Props> = ({changePage, page}) => {
    return (
        <header>
            <Navigation changePage={changePage}/>
            <h1>{pageTitles[page.toLowerCase()] || page}</h1>
        </header>
    );
};

export default Header;