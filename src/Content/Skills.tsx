import React, { useState } from "react";

interface SkillProps {}

const Skills: React.FC<SkillProps> = (props) => {
  const [skillActive, setSkillActive] = useState("");
  const hardSkills: string[] = [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "HTML",
    "React",
    "CSS",
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
      <h1 className="subtopic">Skill Set</h1>
      <h2>Soft Skills</h2>
      <ul>
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Hard Skills</h2>
      <ul>
        {hardSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;