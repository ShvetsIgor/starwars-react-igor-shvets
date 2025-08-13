import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import {useState} from "react";
import {SWContext} from "./utils/SWContext.ts";





const App = () => {

    const [mainHero, setMainHero] = useState('luke');

    return (
        <SWContext.Provider value={{mainHero, setMainHero}}>
            <Header />
            <Main />
            <Footer/>
        </SWContext.Provider>
    );
};

export default App;
