import React from 'react';
import car from "../images/carousel.jpg";
import car1 from "../images/carousel2.jpeg";
import car2 from "../images/carousel3.jpg";
import adi from "../images/adi1.jpg";
import adi1 from "../images/adi6.jpeg";
import adi2 from "../images/adi2.jpg";
import gall from "../images/gall.jpg";

class Gallery extends React.Component{
    render(){
        return(
            <div className="gallery">
                <img src={car} class="rounded " alt="car" height="250px" width="370px"/>
                <img src={car2} class="rounded " alt="car2" height="250px" width="370px"/>
                <img src={car1} class="rounded " alt="car1" height="250px" width="370px"/>
                <img src={adi} class="rounded " alt="car" height="250px" width="370px"/>
                <img src={adi1} class="rounded " alt="adi1" height="250px" width="370px"/>
                <img src={adi2} class="rounded " alt="adi2" height="250px" width="370px"/>
                <img src={gall} class="rounded " alt="gall" height="250px" width="370px"/>
            </div>
        )
    }
}

export default Gallery;