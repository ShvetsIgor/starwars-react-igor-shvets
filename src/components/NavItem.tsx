import * as React from "react";


type Props = {
    text: string
}

const NavItem:React.FC<Props> = ({text}) => {
    return <li>{text}</li>
};

export default NavItem;