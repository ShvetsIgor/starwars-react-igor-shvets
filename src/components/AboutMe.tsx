import {Component} from "react";

type State = {
    id: number,
    name: string,
    gender: string,
    height: string,
    homeworld: number,
    mass: string,
    skin_color: string,
    hair_color: string,
    eye_color: string
}

class AboutMe extends Component<object, State> {

    constructor(props: object) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            gender: "",
            height: "",
            homeworld: 0,
            mass: "",
            skin_color: "",
            hair_color: "",
            eye_color: ""
        }
    }

    async componentDidMount() {
        const randomID = Math.trunc(Math.random() * 70 + 1);

        try {
            const response = await fetch('https://sw-info-api.herokuapp.com/v1/peoples' + '/' + randomID)
            if (!response.ok) throw Error('Not Found');
            const data = await response.json()

            this.setState({
                id: data.id,
                name: data.name,
                gender: data.gender,
                height: data.height,
                homeworld: data.homeworld,
                mass: data.mass,
                skin_color: data.skin_color,
                hair_color: data.hair_color,
                eye_color: data.eye_color
            })
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        return (
                <div className="aboutMe">
                    <div className="aboutMe persInfo" >
                    <h1>{this.state.name}, ID: {this.state.id}</h1>
                        <h2>from planet {this.state.homeworld}</h2>
                    <span>Gender: {this.state.gender}</span>
                    <h2>Appearance:</h2>
                    <span>Skin color: {this.state.skin_color}</span><br/>
                    <span>Hair color: {this.state.hair_color}</span><br/>
                    <span>Eye color: {this.state.eye_color}</span><br/>
                    <span>Height: {this.state.height}</span><br/>
                    <span>Mass: {this.state.mass}</span>
                    </div>
                </div>
        );
    }
}

export default AboutMe;