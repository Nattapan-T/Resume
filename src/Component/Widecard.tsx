import React from "react";

interface WidecardProps {
  school: string;
  major: string;
  from: string;
  to: string;
}

const Widecard: React.FC<WidecardProps> = (props) => {
  return (
    <div className="widecard">
      <div className="widecon">
        <h3>{props.school}</h3>
        <h4 className="secondtext">{props.major}</h4>
        <h4 className="secondtext">
          {props.from}-{props.to}
        </h4>
      </div>
    </div>
  );
};

export default Widecard;
