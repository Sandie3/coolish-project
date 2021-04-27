import React from 'react';
import Navi from '../Navi';

import Img from '../../assets/images/front-desktop/front-maintainable-link.png';
import NavUnder from '../../assets/images/navigation/nav-2-where.png';

import data from '../info.json';

const B = () => {
    return(
        <div className="maintWrapper">
            <Navi />
            <div className="under">
                <img src={NavUnder} alt="" />
            </div>
            <section>
                <div className="pageImg">
                    <img src={Img} alt="What image" />
                </div>
                <div className="content">
                    <h1>Keeping you all <span className="maintColor">upto date</span><span className="dots">...</span></h1>
                    <p>{data.text.Maint[0]}</p>
                    <p>{data.text.Maint[1]}</p>
                    <p>{data.text.Maint[2]}</p>
                </div>
            </section>
        </div>
    );
}
export default B;