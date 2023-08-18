// AboutUsDetails.tsx

import React, { useState } from 'react';

interface AboutUsDetailsProps {
  image1: string;
  image2: string;
}

const AboutUsDetails: React.FC<AboutUsDetailsProps> = ({ image1, image2 }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`about-details ${isZoomed ? 'zoomed' : ''}`}
      onClick={handleZoom}
    >
      <div className="AboutUsImage">
        <img src={image1} alt="Owner" />
      </div>
      <div className="AboutUsImage">
        <img src={image2} alt="Business" />
      </div>
    </div>
  );
};

export default AboutUsDetails;
