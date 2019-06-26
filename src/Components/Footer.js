import React from 'react';
import '../bootstrap/css/bootstrap.min.css';
import accueil from "../img/igloo-solid.svg";
import music from "../img/music-player.svg";
import karaoke from "../img/microphone.svg";
import game from "../img/virtual.svg";
import login from "../img/user-astronaut-solid.svg";

class Footer extends React.Component {

    render() {
        return (
            <footer className="container-fluid py-1 px-1 fixed-bottom bg-white d-flex flex-row justify-content-center "
                    role="group">
                <button type="button" className="btn d-flex flex-column align-items-center w-25">
                    <img style={{width: 20, height: 20}} srcSet={accueil} alt=""/>
                    <div style={{fontSize: 14, color: "#8A2BE2"}}>Accueil</div>
                </button>
                <button type="button" className=" btn d-flex flex-column align-items-center w-25">
                    <img style={{width: 20, height: 20}} srcSet={music} alt=""/>
                    <div className="py-0 " style={{fontSize: 14, color: "#8A2BE2"}}> Musique</div>
                </button>
                <button type="button" className="btn d-flex flex-column align-items-center w-25">
                    <img style={{width: 20, height: 20}} srcSet={karaoke} alt=""/>
                    <div style={{fontSize: 14, color: "#8A2BE2"}}>Karaoke</div>
                </button>
                <button type="button" className="btn d-flex flex-column align-items-center w-25">
                    <img style={{width: 20, height: 20}} srcSet={game} alt=""/>
                    <div style={{fontSize: 14, color: "#8A2BE2"}}>KaraFind</div>
                </button>
            </footer>
        );
    }
}

export default Footer;