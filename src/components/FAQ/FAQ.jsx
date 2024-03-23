import React, { useState } from 'react';
import { FAQs } from "./FAQ.styles";

export const Question = ({qw}) => {
    const [activeQuestion, setActiveQuestion] = useState(0); 

    const questions = [
        { key: 1, number: '[1]', text: "WHAT IS AN NFT COLLECTION?", answer: "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.", img1x: require('../../images/Maskgrouptablet1x.jpg'), img2x: require('../../images/Maskgrouptablet2x.jpg') },
        { key: 2, number: '[2]', text: "HOW DO I PURCHASE NFTS FROM A COLLECTION?", answer: "To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.", img1x: require('../../images/Maskgroup2tablet1x.jpg'), img2x: require('../../images/Maskgroup2tablet2x.jpg')  },
        { key: 3, number: '[3]', text: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?", answer: "Yes, you can sell or trade NFTs from a collection like you would other digital assets.", img1x: require('../../images/Maskgroup3tablet1xjpg.jpg'), img2x: require('../../images/Maskgroup3tablet2x.jpg')  },
        { key: 4, number: '[4]', text: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?', answer: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.", img1x: require('../../images/Maskgroup4tablet1x.jpg'), img2x: require('../../images/Maskgroup4tablet2x.jpg')  } 
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <FAQs id={qw}>
            <h2 className='title'>FAQ</h2>
            <ul className='list-questions'>
                {questions.map((question, index) => (
                    <li key={question.key} onClick={() => toggleQuestion(index)} className={activeQuestion === index ? 'activeli' : ''}>
                        <img className='question-img' srcSet={`${question.img1x} 1x, ${question.img2x} 2x`} src={question.img1x} alt={`Slide ${index}`} /> 
                        <div>
                        <div className="questions-thumb">
                            <p className={'questions-number ' + (activeQuestion === index ? 'active-number' : '')}>{question.number}</p>
                            <p className={'questions ' + (activeQuestion === index ? 'active' : '')}>{question.text}</p>
                        </div>
                        {activeQuestion === index && <p className="answer">{question.answer}</p>}
                    </div>
                    </li>
                ))}
            </ul>
        </FAQs>
    );
};