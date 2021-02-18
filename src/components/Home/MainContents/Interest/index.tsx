import React from 'react';
import {
    InterestWrapper,
    InterestBackground,
    InterestContent,
    InterestGallery,
} from './Atoms';

const Interest: React.FC = () => {
    return (
        <InterestWrapper>
            <InterestBackground />
            <InterestContent>
                <h1>
                    Interest
                    <span />
                </h1>
                <p>
                    Hi 👋🏻 Im Hwang Hyun, a Frontend Developer who likes to
                    create. Beautiful UX/UI is needed for any service and can be
                    entertaining for I am always in this thought and worry.
                </p>
                <InterestGallery>이미지 갤러리</InterestGallery>
            </InterestContent>
        </InterestWrapper>
    );
};

export default Interest;
