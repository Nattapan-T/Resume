// import React, { useState } from "react";
interface SkillProps {}

const Skills: React.FC<SkillProps> = () => {
  const hardSkills = [
    {
      name: "Python",
      image: "/Image/python.png",
    },
    {
      name: "Java",
      image: "/Image/java.png",
    },
    {
      name: "TypeScript",
      image: "/Image/typescript.png",
    },
    {
      name: "JavaScript",
      image: "/Image/js.png",
    },
    {
      name: "HTML",
      image: "/Image/html.png",
    },
    {
      name: "React",
      image: "/Image/structure.png",
    },
    {
      name: "CSS",
      image: "/Image/css-3.png",
    },
  ];
  const softSkills: string[] = [
    "Energetic and responsible",
    "Fast learner and Eager to learn",
    "Able to handle many task at once and be a problem solver",
    "Continual improvement",
    "Resilient and good collaborator",
    "Having interpersonal skills to work effectively with others",
  ];

  return (
    <div className="condiv skill">
      <h1 className="subtopic">Skill Set 🧠</h1>
      <h2>Soft Skills</h2>
      <ul className="skills">
        {softSkills.map((skill, index) => (
          <li key={index} style={{ cursor: "pointer" }}>
            {skill}
          </li>
        ))}
      </ul>

      <h2>Hard Skills</h2>
      <ul className="skills">
        {hardSkills.map((skill, index) => (
          <li key={index} style={{ cursor: "pointer" }}>
            <img src={skill.image} alt={skill.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
