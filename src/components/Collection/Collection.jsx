import React, { useState } from 'react';
import { Collections } from './Collections.style';

export const Collection = () => {
    const [activeSlide, setActiveSlide] = useState(0); 
    const slides = [
        { key: 1, img: require('../../images/Maskgroup1-1x.jpg')},
        { key: 2, img: require("../../images/Maskgroup2-1x.jpg")},
        { key: 3, img: require("../../images/Maskgroup3-1x.jpg")},
        { key: 4, img: require("../../images/Maskgroup4-1x.jpg") },
        { key: 5, img: require("../../images/Maskgroup5-1x.jpg")},
        { key: 6, img: require("../../images/Maskgroup6-1x.jpg")},
        { key: 7, img: require("../../images/Maskgroup7-1x.jpg") } 
    ];

    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            return; 
        } else {
            setActiveSlide(prevIndex => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide === 0) {
            return;
        } else {
            setActiveSlide(prevIndex => prevIndex - 1);
        }
    };
    
    return (
        <Collections>
            <h2 className='title'>COLLECTION</h2>
            
            <ul className='list-map'>
            {slides.map((slide, index) => (
                    <li key={slide.key} className={index === activeSlide ? 'active' : ''}>
                    <img src={slide.img} alt={`Slide ${index}`} />
                    </li>
                ))} </ul>
            <ul className='map-button'>
            <li><button type='button' className='button-map' onClick={prevSlide}>Prev</button></li>
            <li><button type='button' className='button-map' onClick={nextSlide} >Next</button></li></ul>
        </Collections>
    );
};