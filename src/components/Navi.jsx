import React from 'react';
import {Link} from 'react-router-dom';

import NavA from '../assets/images/navigation/nav-1.png';
import NavB from '../assets/images/navigation/nav-2.png';
import NavC from '../assets/images/navigation/nav-3.png';
import NavBack from '../assets/images/navigation/back.png'

const Navi = () => {
    return(
        <nav className="normalNav">
            <ul>
                <li>
                    <Link to="/"><img src={NavBack} alt="Back" /></Link>
                </li>
                <li>
                    <Link to="/whatwedo"><img src={NavA} alt="What" /></Link>
                </li>
                <li>
                    <Link to="/maintainable"><img src={NavB} alt="Maintainable" /></Link>
                </li>
                <li>
                    <Link to="/getintouch"><img src={NavC} alt="Get in touch" /></Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navi;