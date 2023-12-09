import React, { useState } from 'react'
import { useSpring, animated } from "react-spring";


export default function Faq({ que, ans }) {
    const [question, setquestion] = useState(false);
    const fade = useSpring({
        opacity: question ? 1 : 0,
        transform: question ? 'translate3d(0,20%,0)' : 'translate3d(0,0%,0)',
        animationDelay: -6,      
    });
    return (
        <div className="py-4">            
            <div className="flex justify-between items-center">
                <h3 className="text-white text-xs md:text-base font-bold w-10/12">{que}</h3>
                <div className="cursor-pointer" onClick={() => setquestion(!question)}>
                    {question === true ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={9} y1={12} x2={15} y2={12} />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={9} y1={12} x2={15} y2={12} />
                            <line x1={12} y1={9} x2={12} y2={15} />
                        </svg>
                    )}
                </div>
            </div>
            {question === true && (
                <animated.div style={fade} className="w-full h-full flex items-center py-2 px-4 md:py-3 rounded-lg text-white  bg-viodeep text-xs md:text-base font-semibold">{ans}</animated.div>
            )}
            
        </div>
    );
}
