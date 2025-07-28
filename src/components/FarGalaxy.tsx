import {Component} from "react";

type State = {
    info: {
        title: string,
        episode_id: number,
        release_date: string,
        opening_crawl: string
    }
}


class FarGalaxy extends Component<object, State> {

    constructor(props: object) {
        super(props);
        this.state = {
            info: {
                title: "",
                episode_id: 0,
                release_date: "",
                opening_crawl: "LOADING..."
            }
        }
    }

    async componentDidMount() {

        const ep = Math.trunc(Math.random() * 4 + 1); //5 эпизодов, плюс 1, из-за округления

        try {
            const response = await fetch('https://sw-info-api.herokuapp.com/v1/films' + '/' + ep)
            if (!response.ok) throw "Bad Request";
            const data = await response.json(); //создаем из потока объект джейсон
            this.setState({ //через стейт меняем содержимое объекта инфо, берем из прилетевшего джейсона
                info: {
                    title: data.title,
                    episode_id: data.episode_id,
                    release_date: data.release_date,
                    opening_crawl: data.opening_crawl
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const info = this.state.info; //чтобы не писать каждый раз

        return (
            <p className="farGalaxy">
                Title: <span>{info.title}</span><br/>
                Episode: <span>{info.episode_id}</span><br/>
                Release_date: <span>{info.release_date}</span><br/>
                <span>{info.opening_crawl}</span>
            </p>
        );
    }
}

export default FarGalaxy;