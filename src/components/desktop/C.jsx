import React from 'react';
import Navi from '../Navi';

import Img from '../../assets/images/front-desktop/front-getintouch-link.png';
import NavUnder from '../../assets/images/navigation/nav-3-where.png';
import pfp1 from '../../assets/images/front-desktop/whatwedo-small.png';
import pfp2 from '../../assets/images/front-desktop/maintainable-small.png';
import pfp3 from '../../assets/images/front-desktop/getintouch-small.png';

import data from '../info.json';

const C = () => {
    return(
        <div className="getWrapper">
            <Navi />
            <div className="under">
                <img src={NavUnder} alt="" />
            </div>
            <section>
                <div className="pageImg">
                    <img src={Img} alt="What image" />
                </div>
                <div className="content">
                    <h1>There for you and <span className="getColor">care for you</span><span className="dots">...</span></h1>
                    <p>{data.text.Get[0]}</p>
                    <p>{data.text.Get[1]}</p>
                    <div className="getImages">
                        <div>
                            <img src={pfp1} alt="pfp1" />
                            <p>lt@coolish.com</p>
                        </div>
                        <div>
                            <img src={pfp2} alt="pfp2" />
                            <p>pr@coolish.com</p>
                        </div>
                        <div>
                            <img src={pfp3} alt="pfp3" />
                            <p>mn@coolish.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default C;