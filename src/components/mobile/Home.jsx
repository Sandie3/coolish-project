import React from 'react';
import {Link} from 'react-router-dom';

import A from '../../assets/images/front-mobil/weba-2-mobil-whatwedo.png';
import B from '../../assets/images/front-mobil/weba-3-mobil-maintainable.png';
import C from '../../assets/images/front-mobil/weba-mobil.getintouch.png';

import Logo from '../../assets/images/logo/logo-final.png';

const Home = () => {
    return(
        <div className="frontWrapper">
            <nav className="frontNav">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </nav>
            <section className="frontContent">
                <div>
                    <Link to="/whatwedo"><img src={A} alt="What we do" /></Link>
                </div>
                <div>
                    <Link to="/maintainable"><img src={B} alt="Maintainable" /></Link>
                </div>
                <div>
                    <Link to="/getintouch"><img src={C} alt="Get in touch" /></Link>
                </div>
                <div className="more">
                    <p>And yet... more to come</p>
                </div>
            </section>
        </div>
    );
}
export default Home;