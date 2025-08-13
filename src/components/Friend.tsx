import * as React from "react";
import type {HeroInfo} from "../utils/sw-types";

type Props = {
    friend: HeroInfo
    isSelected: boolean
    changePic: (friend: HeroInfo) => void
}

const Friend: React.FC<Props> = ({friend, isSelected, changePic}) => {
    return (
        <>
            <img src={`../${friend.img}`}
                 alt={friend.name}
                 style={{width: isSelected ? "100%" : "calc(100% / 3)"}}
                 onClick={() => changePic(friend)
                 }

            />

        </>
    )
};

export default Friend;