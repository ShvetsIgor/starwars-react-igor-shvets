import info from "../config/sw-config.json"
import Friend from "./Friend.tsx";
import type {HeroInfo} from "../utils/sw-types";
import {Component} from "react";

type State = {
    selectedFriend: string | ""
}

class Gallery extends Component<object, State> {

    constructor(props: object) {
        super(props);
        this.state = {
            selectedFriend: ""
        }
    }

    changePic = (name: string) => {
        this.setState((prevState) => ({
            selectedFriend: prevState.selectedFriend === name ? "" : name
        }));
    };

    renderAllFriends = () => {
        return (
            info.friends.map((friend: HeroInfo) =>
                <Friend
                    key={friend.name}
                    friend={friend}
                    isSelected={false}
                    changePic={this.changePic}
                />
            )
        )
    }

    renderChosenFriend = () => {

        const chosenFriend = info.friends.find(friend => friend.name === this.state.selectedFriend);
        if (!chosenFriend) {
            return "";
        }

        return (
            <Friend
                key={chosenFriend.name}
                friend={chosenFriend}
                isSelected={true}
                changePic={this.changePic}
            />
        )
    }


    render() {
        return (
            <section className="right">
                <h3>Dream Team</h3>
                <div className="gallery">
                    {
                        this.state.selectedFriend === "" ? this.renderAllFriends() : this.renderChosenFriend()
                    }
                </div>
            </section>
        );
    }
}

export default Gallery;