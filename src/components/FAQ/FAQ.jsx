import React from 'react';
import { useState } from "react";
import { FAQs } from "./FAQ.styles";

export const Question = ({qw}) => {
    const [activeQuestion, setActiveQuestion] = useState(0); 

    const question = [
        { key: 1, number: '[1]', text: "WHAT IS AN NFT COLLECTION?", answer: "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style." },
        { key: 2, number: '[2]', text: "HOW DO I PURCHASE NFTS FROM A COLLECTION?", answer: "To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace." },
        { key: 3, number: '[3]', text: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?", answer: "Yes, you can sell or trade NFTs from a collection like you would other digital assets." },
        { key: 4, number: '[4]', text: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?', answer: "Launch your own to" } 
    ];

 const toggleAnswer = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    
    
    return (
        <FAQs id={qw}>
            <h2 className='title'>FAQ</h2>
            <ul className='list-questions'>
            {question.map((questions, index) => (
                <li key={questions.key} onClick={() => toggleAnswer(index)} className={(activeQuestion === index ? 'activeli' : '')} >
                <div className="questions-thumb">
                   <p className={'questions-number ' + (activeQuestion === index ? 'active-number' : '')}>{questions.number}</p>
                        <p className={'questions ' + (activeQuestion === index ? 'active' : '')}>{questions.text}</p>
                        </div>
                       {activeQuestion === index && <p className="answer">{questions.answer}</p>}
                    </li>
                ))} </ul>

        </FAQs>
    );
};