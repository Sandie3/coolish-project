import React from 'react';
import Navi from '../Navi';

import Img from '../../assets/images/front-desktop/front-what-we-do-link.png';
import NavUnder from '../../assets/images/navigation/nav-1-where.png';

import data from '../info.json';

const A = () => {
    return(
        <div className="whatWrapper">
            <Navi />
            <div className="under">
                <img src={NavUnder} alt="" />
            </div>
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
            </section>
        </div>
    );
}
export default A;