import info from "../config/sw-config.json"
import Friend from "./Friend.tsx";
import type {HeroInfo} from "../utils/sw-types";
// import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {SWContext} from "../utils/SWContext.ts";
import {useContext} from "react";

// export const friends = info.friends; //!!!!

const Gallery = () => {

    // const [selectedFriend, setSelectedFriend] = useState<HeroInfo | string>("");

    const navigate = useNavigate();
    const {mainHero} = useContext(SWContext);
    // const changePic = (friend: HeroInfo) => {
    //     setSelectedFriend(prevState => prevState === friend.name ? "" : friend.name);
    // };

    const btnClick = (friend: HeroInfo) => {
        navigate(`/home/${friend.id}`)
    }

    const renderAllFriends = () => {
        return (
            info.friends.filter(item => item.id !== mainHero).map((friend: HeroInfo) =>
                <Friend
                    key={friend.name}
                    friend={friend}
                    isSelected={false}
                    changePic={btnClick}
                />
            )
        )
    }

    // const renderChosenFriend = () => {
    //
    //     const chosenFriend = info.friends.find(friend => friend.name === selectedFriend);
    //     if (!chosenFriend) {
    //         return "";
    //     }
    //
    //     return (
    //         <Friend
    //             key={chosenFriend.name}
    //             friend={chosenFriend}
    //             isSelected={true}
    //             changePic={btnClick}
    //         />
    //     )
    // }

    return (
        <section className="right">
            <h3>Dream Team</h3>
            <div className="gallery">
                {renderAllFriends()}
            </div>
        </section>
    );
}

export default Gallery;