import MBTI from "../Component/Mbit";
const About: React.FC = () => {
  return (
    <div className="condiv about">
      <h1 className="subtopic">About Me</h1>
      <img
        src="Image/MTXX_MH20230707_231515105.jpg"
        className="subprofilepic"
      />
      <h2>Hi, I'm Fahsai. Just call me Fah.</h2>
      <h3>Career Objective</h3>
      <p>
        Looking for an opportunity to work as a Junior Software Developer with
        the aim of developing cutting-edge applications that meet customer
        needs.
      </p>
      <p>
        Despite transitioning from a background in the airline business, I
        havetaken the initiative to self-learn Python, Java, Java Script,
        TypeScriptand React, and I am eager to contribute my skills and passion
        to the tech industry.
      </p>
      <br></br>
      <h2>My MBTI</h2>
      <MBTI />
      <h3>
        <a href="https://www.16personalities.com/th/enfj-%E0%B8%9A%E0%B8%B8%E0%B8%84%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%9E">
          More About ENFJ
        </a>
      </h3>
      <h3>
        <a href="https://www.16personalities.com/th/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%9A%E0%B8%B8%E0%B8%84%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%9E">
          Try Yours
        </a>
      </h3>
    </div>
  );
};

export default About;
