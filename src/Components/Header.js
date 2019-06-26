import React from "react";
import '../bootstrap/css/bootstrap.min.css';
import cogs from "../img/cogs-solid.svg";
import user from "../img/user-astronaut-solid.svg";
import arrow from "../img/arrow-alt-circle-left-regular.svg";

class Header extends React.Component {

    render() {
        return (
            <header className="container-fluid p-0 d-flex fixed-top border-bottom border-light bg-white ">
                <div className="container-fluid d-flex justify-content-between align-items-center ">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <img itemType="hidden" className="mr-sm-1" style={{width: 40, height: 40}} srcSet={arrow} alt=""/>
                        <h2 className="ml-3 my-3 font-weight-bolder" style={{color : "#8A2BE2"}}>Accueil</h2>
                    </div>
                    <div className="mr-3">
                        <img className="mr-4" style={{width: 30, height: 30}} srcSet={user} alt=""/>
                        <img style={{width: 30, height: 30}} srcSet={cogs} alt=""/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;