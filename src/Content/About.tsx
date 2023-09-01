import Profilep from "../Image/ImgData";

const About: React.FC = () => {
  return (
    <div className="condiv about">
      <h1 className="subtopic">About Me</h1>
      <img src={Profilep.profileurl} className="subprofilepic" />
      <h3>Hi, I'm Fahsai. Just call me Fah.</h3>
      <h3>Career Objective</h3>
      <p>
        Looking for an opportunity to work as a Junior Software Developer with
        the aim of developing cutting-edge applications that meet customer
        needs.
      </p>
    </div>
  );
};

export default About;
