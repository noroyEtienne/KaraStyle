import React from 'react';
import Accueil from './Accueil.js';
import Parametres from './Parametres.js';
import Login from './Login.js';
import Profil from './Profil.js';
import Musique from './Musique.js';
import Chanson from './Chanson.js';
import MenuK from './MenuK.js';
import Karaoke from './Karaoke.js';
import KaraFind from './KaraFind.js'


class BodyComponent extends React.Component{

    components = {
        Accueil : Accueil,
        Par : Parametres,
        Login : Login,
        Profil : Profil,
        Music : Musique,
        Chanson : Chanson,
        MenuK : MenuK,
        Karaoke : Karaoke,
        KaraFind : KaraFind

    };

    render() {
        const TagName = this.components[this.props.tag || "Accueil"];
        return <TagName/>
    }
}
export default BodyComponent;