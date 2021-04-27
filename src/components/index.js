import React, {useState, useEffect} from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const windowDims = () => ({
    height:window.innerHeight,
    width:window.innerWidth
})

const Content = () => {
    
    const [dimensions, setDimensions] = useState(windowDims());

    useEffect(() => {

        const handleResize = () => {
            setDimensions(windowDims());
            console.log(windowDims());
        }
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    },[]);

    const breapPoint = 620;

    return dimensions.width < breapPoint ? <MobileView /> : <DesktopView />

}

export default Content;