import type {FC} from "react";
import {useNavigate} from "react-router-dom";


type Props = {
    element: { route: string, title: string },
}

const NavItem: FC<Props> = ({element}) => {

    const navigate = useNavigate()


    return <li
    onClick={() => {
        navigate(element.route)
    }}>
        {element.title}
    </li>
};

export default NavItem;