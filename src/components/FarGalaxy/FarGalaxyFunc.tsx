import {useEffect, useState} from "react";


const FarGalaxyFunc = () => {

    const initialInfo = {
        title: "",
        episode_id: 0,
        release_date: "",
        opening_crawl: "LOADING..."
    }
    const[info, setInfo] = useState(initialInfo);

    useEffect(() => {

        const ep = Math.trunc(Math.random() * 4 + 1);

        (async () => {
        try {
            const response = await fetch('https://sw-info-api.herokuapp.com/v1/films' + '/' + ep)
            if (!response.ok) throw "Bad Request";
            const data = await response.json();
            localStorage.setItem("farGalaxy", JSON.stringify(data));
            setInfo({
                    title: data.title,
                    episode_id: data.episode_id,
                    release_date: data.release_date,
                    opening_crawl: data.opening_crawl
                })
        } catch (e) {
            console.log(e)
        }})()                       //самовызывающаяся функция (асинхронная), потому начинаем со скобок, а затем еще скобки для вызова
    }, []) //[] - если они пустые, то вызываться стейт будет при первом вызове компонента

    useEffect(() => {
        return () => {
            localStorage.removeItem("farGalaxy"); //сделали еще один юзЭффект, и в коллбэке очищаем локалСторадж
        }
    }, []);


    return (
        <p className="farGalaxy">
            Title: <span>{info.title}</span><br/>
            Episode: <span>{info.episode_id}</span><br/>
            Release_date: <span>{info.release_date}</span><br/>
            <span>{info.opening_crawl}</span>
        </p>
    );
};

export default FarGalaxyFunc;