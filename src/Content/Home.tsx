import React from "react";
import Social from "../Component/Social";
import ReactTypingEffect from "react-typing-effect";

const Home: React.FC = () => {
  return (
    <div className="condiv home">
      <img src="/Image/profile.jpeg" alt="Profile" className="profilepic" />
      <ReactTypingEffect
        text={["This is Nattapan Tammawongsa", "Brandnew Junior Dev^^ "]}
        speed={100}
        eraseDelay={350}
        className="typingeffect"
      />
      <Social />
    </div>
  );
};

export default Home;
