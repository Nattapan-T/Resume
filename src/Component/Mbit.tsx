import React, { useState } from "react";

const MBTI: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>(
    "/Image/ENFJ Character .png"
  );

  const toggleImage = () => {
    if (currentImage === "/Image/ENFJ Character .png") {
      setCurrentImage("/Image/MBTI.png");
    } else {
      setCurrentImage("/Image/ENFJ Character .png");
    }
  };

  return (
    <div>
      <img
        src={currentImage}
        onClick={toggleImage}
        style={{ cursor: "pointer" }}
        className="subprofilepic"
      />
    </div>
  );
};

export default MBTI;
