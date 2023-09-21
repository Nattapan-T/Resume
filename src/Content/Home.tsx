import React from "react";
import Social from "../Component/Social";
import ReactTypingEffect from "react-typing-effect";

const Home: React.FC = () => {
  return (
    <div className="condiv home">
      <img
        src="/Image/MTXX_MR20230920_143147085.jpg"
        alt="Profile"
        className="profilepic"
        style={{ cursor: "pointer" }}
      />
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
