import * as React from "react";


type Props = {
    text: string,
    changePage: (page: string) => void;
}

const NavItem: React.FC<Props> = ({text, changePage}) => {
    return <li
        onClick={() => {
            changePage(text);
        }}
    >{text}</li>
};

export default NavItem;