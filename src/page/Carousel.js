import React from 'react';


import { Carousel as CarouselItem } from 'antd';




function Carousel() {
    return (


        <CarouselItem autoplay={true} style={{ width: '600px', height: '300px', marginTop: '50px' }}>
            <div stule={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <img

                    src={require("../images/test1.jpg")}
                    alt="First slide"
                />
            </div>
            <div stule={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <img

                    src={require("../images/test2.jpg")}
                    alt="First slide"
                />
            </div>
            <div stule={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <img

                    src={require("../images/test3.jpg")}
                    alt="First slide"
                />
            </div>
            <div stule={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <img

                    src={require("../images/test2.jpg")}
                    alt="First slide"
                />
            </div>
        </CarouselItem >




    );
}

export default Carousel;
