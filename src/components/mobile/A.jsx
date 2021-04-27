import React from 'react';
import Navi from '../Navi';

import Img from '../../assets/images/front-mobil/weba-2-mobil-whatwedo.png';
import NavUnder from '../../assets/images/navigation/nav-1-where.png';

import Logo from '../../assets/images/logo/logo-a.png';

import data from '../info.json';

const A = () => {
    return(
        <div className="whatWrapper">
            <div className="under">
                <img src={NavUnder} alt="" />
            </div>
            <Navi />
            <section>
                <div className="pageImg">
                    <img src={Img} alt="What image" />
                </div>
                <div className="content">
                    <h1>Design is the <span className="whatColor">matter of choice</span><span className="dots">...</span></h1>
                    <p>{data.text.What[0]}</p>
                    <p>{data.text.What[1]}</p>
                    <p>{data.text.What[2]}</p>
                </div>
                <div className="pageLogo">
                    <img src={Logo} alt="Logo" />
                </div>
            </section>
        </div>
    );
}
export default A;