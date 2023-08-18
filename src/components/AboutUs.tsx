/*
 * src/components/AboutUs.tsx
 * Contains the about us section
 */
import React from 'react';

import AboutUsDetails from './AboutUsDetails';

const AboutUsSection: React.FC = () => {
    return (
        <section className = 'AboutUsSection'>
            <h1 className = 'AboutHeaderBig' > דידוש </h1>
            <div className = 'AboutHeaderSmall'>
                <h2>
                    <strong>
                        חוויה
                    </strong>
                    <span>
                        .
                    </span>
                    <strong>
                        טעם
                    </strong>
                    <span>
                        .
                    </span>
                    <strong>
                        איכות
                    </strong>
                </h2>
            </div>
            <AboutUsDetails
                image1='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80'
                image2 = 'https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc='
            />
        </section>
    );
};

export default AboutUsSection;