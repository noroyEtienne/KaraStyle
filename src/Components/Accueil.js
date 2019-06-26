import React from "react";
import Footer from './Footer.js';
import '../bootstrap/css/bootstrap.min.css';
import newsLetter from "../news.json"


class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news : newsLetter,
        };
    }



    render() {
        const {news} = this.state;

        return (

            <div className="app-content container " style={{paddingTop: 80}}>
                {news.map(newL =>
                    <div className="newL border-bottom" key={newL.id}>

                        <h5 className="text-left ">{newL.tagline1}</h5>
                    <h4 className="text-left font-weight-bolder">{newL.title}</h4>
                    <p>{newL.container}</p>
                        <h4 className="text-right"><a>{newL.link}</a></h4>
                    </div>
                    )}
                <Footer/>
            </div>

        );
    }
}


export default Accueil;