import React from "react";
import Social from "../component/Social";
import ReactTypingEffect from "react-typing-effect";

const Home: React.FC = () => {
  return (
    <div className="condiv home">
      <img
        src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/373599005_1945075615878591_5790690261062943486_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGK3baUoXO3YYf92lCDzkbI6XU6HJYFrdLpdToclgWt0n0zRLv0LKZ_EEGKR5zGJaW2btEY1f24wINbLhTK-Etx&_nc_ohc=ph6FyvKlp5AAX-CvM3p&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfCqgLCg_2o00vewgLVuemzMTveTF1qqbNOQYBGrYRbY1g&oe=64F6B4FC"
        alt="Profile"
        className="profilepic"
      />
      <ReactTypingEffect
        text={["This is Nattapan Tammawongsa", "Brandnew Junior Dev^^ "]}
        speed={90}
        eraseDelay={320}
        className="typingeffect"
      />
      <Social />
    </div>
  );
};

export default Home;
