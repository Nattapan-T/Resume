import Widecard from "../Component/Widecard";
const Education: React.FC = () => {
  return (
    <div className="condiv">
      <h1 className="subtopic">Education</h1>
      <Widecard
        school="Suandusit University"
        major="Airline business management"
        from="2017"
        to="2021"
      />
      <Widecard
        school="St Marry’s College"
        major="Science - Math Major"
        from="2005"
        to="2016"
      />
    </div>
  );
};
export default Education;
