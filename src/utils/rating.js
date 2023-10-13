import React from 'react';
import rating from '../assets/icon/rating.svg';
import { Image } from '@chakra-ui/react';


export const renderRating = (score) => {
    let stars = [];
    for (let i = 0; i < Math.floor(parseInt(score)); i++) {
        stars.push(
            <Image
                key={i}
                src={rating}
                height={'36px'}
                width={'36px'}
                color="#ffd700"
            />,
        );
    }
    return stars;
};

