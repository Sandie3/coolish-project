import React from 'react';
import {Link} from 'react-router-dom';

import A from '../../assets/images/front-desktop/front-what-we-do.png';
import B from '../../assets/images/front-desktop/front-maintainable.png';
import C from '../../assets/images/front-desktop/front-get-in-touch.png';

import NavA from '../../assets/images/navigation/nav-1.png';
import NavB from '../../assets/images/navigation/nav-2.png';
import NavC from '../../assets/images/navigation/nav-3.png';

import Logo from '../../assets/images/logo/logo-final.png';

const Home = () => {
    return(
        <div className="frontWrapper">
            <nav className="frontNav">
                <ul>
                    <li>
                        <Link to="/whatwedo"><img src={NavA} alt="Nav link 1" /></Link>
                    </li>
                    <li>
                        <Link to="/maintainable"><img src={NavB} alt="Nav link 2" /></Link>
                    </li>
                    <li>
                        <Link to="/getintouch"><img src={NavC} alt="Nav link 3" /></Link>
                    </li>
                </ul>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </nav>
            <section className="frontContent">
                <div>
                    <img src={A} alt="What we do" />
                </div>
                <div>
                    <img src={B} alt="Maintainable" />
                </div>
                <div>
                    <img src={C} alt="Get in touch" />
                </div>
                <div className="more">
                    <p>And yet... more to come</p>
                </div>
            </section>
        </div>
    );
}
export default Home;