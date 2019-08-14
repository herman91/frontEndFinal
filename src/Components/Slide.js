import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
    {
        src: 'https://italfoods.ca/wp-content/uploads/2012/08/banner1-2000x750.jpg',
    },
    {
        src: 'http://www.sasaki.com.au/shared/img/main_img8_sp.jpg',
    },
    {
        src: 'https://waverleybowlingclub.com.au/content/uploads/2017/03/Untitled-3-6.jpg',
    }
];

const Slide = () => <UncontrolledCarousel items={items} />;

export default Slide;